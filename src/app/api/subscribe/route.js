import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const { email } = await req.json();

		if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
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

		// 2. Construct the Email Payload
		const emailPayload = {
			message: {
				subject: "Welcome to Ziqora Energy Updates",
				body: {
					contentType: "HTML",
					content: `
						<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #ffffff; color: #333333; border: 1px solid #eaeaea; border-radius: 8px;">
							<div style="text-align: center; margin-bottom: 30px;">
								<img src="https://www.ziqora.energy/images/logos/ziqora-logo-final.png" alt="Ziqora Energy" style="height: 45px;" />
							</div>
							
							<h2 style="color: #0c1930; font-size: 24px; margin-bottom: 20px; font-weight: 600;">Welcome to Ziqora Energy!</h2>
							
							<p style="line-height: 1.6; font-size: 16px; margin-bottom: 15px;">Thank you for subscribing to our news letter. We are thrilled to have you join us on our journey to build a world-class 5 GW manufacturing hub of silicon wafers and solar cells in Odisha, India.</p>
							
							<p style="line-height: 1.6; font-size: 16px; margin-bottom: 30px;">You'll be the first to know about our project milestones, technological advancements in N-Type wafers and high-efficiency solar cells, and our sustainability initiatives.</p>
							
							<div style="margin-top: 30px; padding-top: 25px; border-top: 2px solid #f4f4f4;">
								<p style="margin: 0 0 5px 0; font-weight: 600; font-size: 16px; color: #0c1930;">Ziqora Energy Team</p>
								<p style="margin: 0 0 5px 0; font-size: 14px; color: #666666;">Building the Foundation of India's Solar Future.</p>
								<p style="margin: 0; font-size: 14px;">
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
							address: email
						}
					}
				]
			},
			saveToSentItems: "true"
		};

		// 3. Send Email using Microsoft Graph API
		const sendMailResponse = await fetch('https://graph.microsoft.com/v1.0/users/info@ziqora.energy/sendMail', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(emailPayload)
		});

		if (!sendMailResponse.ok) {
			const errorData = await sendMailResponse.json();
			console.error('Error sending email via Graph API:', JSON.stringify(errorData, null, 2));
			throw new Error('Failed to send email');
		}

		return NextResponse.json({ success: true, message: 'Subscription successful' });

	} catch (error) {
		console.error('Subscription API Error:', error);
		return NextResponse.json(
			{ error: 'An error occurred while processing your subscription.' },
			{ status: 500 }
		);
	}
}
