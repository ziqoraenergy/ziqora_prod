import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const { fullName, businessEmail, companyName, phoneNumber, subject, projectDetails } = await req.json();

		if (!fullName || !businessEmail || !companyName || !subject || !projectDetails) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		if (!/^\S+@\S+\.\S+$/.test(businessEmail)) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
		}

		// 1. Get Access Token from Microsoft Identity Platform
		const tokenResponse = await fetch(`https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				client_id: process.env.AZURE_CLIENT_ID,
				client_secret: process.env.AZURE_CLIENT_SECRET,
				scope: 'https://graph.microsoft.com/.default',
				grant_type: 'client_credentials',
			}),
		});

		const tokenData = await tokenResponse.json();

		if (!tokenResponse.ok) {
			console.error('Error fetching token:', tokenData);
			throw new Error('Failed to authenticate with Microsoft Graph API');
		}

		const accessToken = tokenData.access_token;

		// 2. Construct the Notification Email Payload (Internal)
		const notificationPayload = {
			message: {
				subject: `New Contact Inquiry: ${subject}`,
				body: {
					contentType: "HTML",
					content: `
						<div style="font-family: Arial, sans-serif; padding: 20px;">
							<h2>New Contact Inquiry Received</h2>
							<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
								<tr>
									<td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Full Name</td>
									<td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
								</tr>
								<tr>
									<td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business Email</td>
									<td style="padding: 10px; border: 1px solid #ddd;">${businessEmail}</td>
								</tr>
								<tr>
									<td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company Name</td>
									<td style="padding: 10px; border: 1px solid #ddd;">${companyName}</td>
								</tr>
								<tr>
									<td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
									<td style="padding: 10px; border: 1px solid #ddd;">${phoneNumber || 'N/A'}</td>
								</tr>
								<tr>
									<td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
									<td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
								</tr>
								<tr>
									<td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Project Details</td>
									<td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${projectDetails}</td>
								</tr>
							</table>
						</div>
					`
				},
				toRecipients: [
					{
						emailAddress: {
							address: 'info@ziqora.energy'
						}
					}
				],
				replyTo: [
					{
						emailAddress: {
							address: businessEmail
						}
					}
				]
			},
			saveToSentItems: "false"
		};

		// 3. Construct the Auto-Reply Email Payload (To Submitter)
		const autoReplyPayload = {
			message: {
				subject: "Your Inquiry Received - Ziqora Energy",
				body: {
					contentType: "HTML",
					content: `
						<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #ffffff; color: #333333; border: 1px solid #eaeaea; border-radius: 8px;">
							<div style="text-align: center; margin-bottom: 30px;">
								<img src="https://www.ziqora.energy/images/logos/ziqora-logo-final.png" alt="Ziqora Energy" style="height: 45px;" />
							</div>
							
							<h2 style="color: #0c1930; font-size: 24px; margin-bottom: 20px; font-weight: 600;">Inquiry Received</h2>
							
							<p style="line-height: 1.6; font-size: 16px; margin-bottom: 15px;">Dear ${fullName},</p>
							
							<p style="line-height: 1.6; font-size: 16px; margin-bottom: 15px;">Thank you for reaching out to Ziqora Energy. We have successfully received your inquiry regarding <strong>${subject}</strong>.</p>
							
							<p style="line-height: 1.6; font-size: 16px; margin-bottom: 30px;">Our team is reviewing your message and will get back to you within 24 hours.</p>
							
							<div style="margin-top: 30px; padding-top: 25px; border-top: 2px solid #f4f4f4;">
								<p style="margin: 0 0 5px 0; font-weight: 600; font-size: 16px; color: #0c1930;">Ziqora Energy Team</p>
								<p style="margin: 0 0 5px 0; font-size: 14px; color: #666666;">Building the Foundation of India's Solar Future.</p>
								<p style="margin: 10px 0 0 0; font-size: 14px;">
									<a href="https://www.ziqora.energy" style="color: #10b981; text-decoration: none; font-weight: 500;">www.ziqora.energy</a> &nbsp;|&nbsp; 
									<a href="mailto:info@ziqora.energy" style="color: #10b981; text-decoration: none; font-weight: 500;">info@ziqora.energy</a>
								</p>
							</div>
						</div>
					`
				},
				toRecipients: [
					{
						emailAddress: {
							address: businessEmail
						}
					}
				]
			},
			saveToSentItems: "true"
		};

		// 4. Send Emails Concurrently using Microsoft Graph API
		const sendEmail = async (payload) => {
			const res = await fetch('https://graph.microsoft.com/v1.0/users/info@ziqora.energy/sendMail', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${accessToken}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});
			if (!res.ok) {
				const errorData = await res.json();
				console.error('Error sending email via Graph API:', JSON.stringify(errorData, null, 2));
				throw new Error('Failed to send email');
			}
			return res;
		};

		await Promise.all([
			sendEmail(notificationPayload),
			sendEmail(autoReplyPayload)
		]);

		return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });

	} catch (error) {
		console.error('Contact API Error:', error);
		return NextResponse.json(
			{ error: 'An error occurred while processing your request.' },
			{ status: 500 }
		);
	}
}
