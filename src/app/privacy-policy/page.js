"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";
import { useEffect } from "react";

export default function PrivacyPolicy() {
	useEffect(() => {
		let timer;
		import("@/libs/gsap.config").then(({ ScrollTrigger, ScrollSmoother }) => {
			timer = setTimeout(() => {
				const smoother = ScrollSmoother.get();
				if (smoother) {
					smoother.paused(false);
					smoother.scrollTop(0);
				}
				ScrollTrigger.refresh();
			}, 300);
		});
		return () => { if (timer) clearTimeout(timer); };
	}, []);

	return (
		<div>
			<title>Privacy Policy - Ziqora Energy</title>
			<BackToTop />
			<Header />
			
			<div id="smooth-wrapper" style={{ overflowX: "hidden", width: "100%", backgroundColor: "#f8fafc" }}>
				<div id="smooth-content">
					<main style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
						
						{/* Hero Section */}
						<section
							style={{
								position: "relative",
								minHeight: "60vh",
								display: "flex",
								alignItems: "center",
								padding: "150px 0 100px 0",
								backgroundColor: "#020617",
								backgroundImage: "url('/images/privacy-hero-abstract.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "linear-gradient(to right, rgba(2, 6, 23, 0.9) 0%, rgba(2, 6, 23, 0.7) 50%, rgba(2, 6, 23, 0.3) 100%)",
									zIndex: 1,
								}}
							></div>

							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row">
									<div className="col-lg-8">
										<div className="breadcrumbs" style={{ marginBottom: "20px" }}>
											<Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
											<span style={{ color: "rgba(255,255,255,0.4)", margin: "0 10px" }}>/</span>
											<span style={{ color: "#10b981" }}>Privacy Policy</span>
										</div>
										<h1
											style={{
												fontFamily: "'Inter', sans-serif",
												fontWeight: "800",
												color: "#ffffff",
												fontSize: "calc(3rem + 1.5vw)",
												lineHeight: 1.1,
												marginBottom: "25px",
												letterSpacing: "-0.02em",
											}}
										>
											Privacy Policy
										</h1>
										<p
											style={{
												fontSize: "18px",
												color: "rgba(255, 255, 255, 0.8)",
												maxWidth: "700px",
												lineHeight: "1.7",
												fontWeight: "400"
											}}
										>
											This Privacy Policy explains to you the purpose, manner, and scope of collection and use of your personal information by our products and services. It describes the security measures we have taken to protect information security.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Content Section */}
						<section style={{ padding: "80px 0", backgroundColor: "#f8fafc" }}>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div 
											className="policy-content"
											style={{
												background: "#ffffff",
												padding: "50px",
												borderRadius: "16px",
												boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
												border: "1px solid #f1f5f9"
											}}
										>
											<p>Ziqora Energy (hereinafter referred to as "Ziqora" or "we, us, our") attaches great importance to the lawful use and protection of our users' personal information.</p>
											
											<p>The purpose of this Privacy Policy (hereinafter referred to as "Terms of Use") is to inform you of our policies and measures regarding the collection, storage, use, and protection of your personal information by our products and services.</p>
											
											<p>In accordance with the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023 of India, and other relevant laws, regulations, and technical specifications, the Terms set out the principles and relevant policies for the collection, use, and external provision of your personal information on our website (hereinafter collectively referred to as "the Platform"), as well as other platforms operated by Ziqora (i.e., mobile applications, portals, etc.), which may be linked from the Platform.</p>
											
											<p>By registering as a user of the Platform or using the Platform, you indicate that you fully understand and agree to all the contents of the Terms of Use (including any updated version), which shall automatically apply and remain in force at all times.</p>
											
											<p>We hereby highly recommend you read and fully understand the Terms of Use and, where necessary, follow the guidelines in the Terms of Use to make appropriate choices.</p>
											
											<p>The Terms of Use apply whether you are accessing the Platform via a computer, cell phone, tablet, television, or other device.</p>
											
											<p>If you disagree with the content of the Terms of Use, it may result in the malfunctioning of the Platform or inaccessibility of the services we intend to provide, and you should immediately stop accessing the Platform.</p>
											
											<div style={{ background: "#f8fafc", padding: "25px", borderRadius: "8px", margin: "30px 0" }}>
												<h4 style={{ color: "#0f172a", fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>We have developed the Terms of Use to help you understand the following:</h4>
												<ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
													<li>I. How we collect and use your personal information.</li>
													<li>II. How we share, transfer, and disclose your personal information.</li>
													<li>III. How we store and protect your personal information.</li>
													<li>IV. Your rights concerning personal information processing activities.</li>
													<li>V. How we use cookies and other similar technologies.</li>
													<li>VI. How we handle and protect children's personal information.</li>
													<li>VII. How we update our privacy policies</li>
													<li>VIII. Legal jurisdiction and dispute resolution</li>
													<li>IX. How to contact us</li>
												</ul>
											</div>
											
											<p style={{ fontStyle: "italic", color: "#64748b" }}>The Terms of Use were last updated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</p>

											<h3 className="policy-heading">I. How we collect and use your personal information.</h3>
											<p>We will follow the principles of propriety, lawfulness, and necessity. We will only collect and use your personal information for the purposes stated in this statement. Still, the specific types of data collected will vary depending on the products and services you use and your interactions with the Platform.</p>
											<p>If we are going to use your personal information for purposes other than those set out herein, or if we are going to use the collected information for other purposes based on the specific purpose, we will reasonably inform you and ask for your consent again before such use.</p>
											<p>The scenarios in which your personal information may be collected include:</p>
											
											<h4 className="policy-subheading">1.1 Account registration and login</h4>
											<p>Many of the Platform's services require you to create an account or submit personal information.</p>
											<p>When you register as a user of the Platform using your natural personal identity, we may collect certain personal information (including but not limited to your name, telephone number, email address, payment method, bank or credit card information, third-party social account information, etc.) to set up an account or profile.</p>
											<p>When you register as a user of the Platform using the enterprise identity authentication function, we may collect relevant information about your company, including enterprise business license, ID card of the legal person, photo of the legal person, business scope of the enterprise, and contact person information, which is used to confirm the qualification of the enterprise.</p>

											<h4 className="policy-subheading">1.2 Ordering products</h4>
											<p>If you order products from us, we may ask for your name, contact information, delivery address and billing address, and bank or credit card information to process your order.</p>
											<p>If you make a return or after-sales service application, we will ask for your refund account number, cardholder name, opening bank (branch level), and other information to help you handle the business operation promptly.</p>
											<p>When you provide us with the above information, it is deemed that you have expressly agreed and authorized us to collect and utilize it.</p>

											<h4 className="policy-subheading">1.3 Market research/branding activities</h4>
											<p>To participate in market research/branding activities after obtaining your consent, we may ask you to submit necessary information, such as your location, name, gender, phone number, email address, purchase plan, etc., to understand your needs better and invite you to our branding activities, market research, etc. When you provide us with the above information, it is deemed that you have expressly agreed and authorized us to collect and utilize it.</p>
											<p>You can refuse our use of your information by declining or turning off such options on the Platform.</p>

											<h4 className="policy-subheading">1.4 Information obtained in the course of your interaction or use of products and services</h4>
											<p><strong>1.4.1 Device and network information.</strong><br/>When you use Ziqora's products and services, we collect information about your equipment, such as hardware model number, IMEI number and other unique device identifiers, MAC address, IP address, operating system version, and other technical information that varies according to the product.</p>
											<p><strong>1.4.2 Operation records information.</strong><br/>This type of information will be submitted by you directly to us when you use the Platform, products, or services and interact with them. Examples include requests for information you provide to us, including information you enter in response to an inquiry or questions or information you provide to obtain customer service support, records of your communications online or by phone, email, participation in online and offline events, etc.</p>
											<p><strong>1.4.3 Log information.</strong><br/>When you use Ziqora's products and services or view content provided by the Platform, we will automatically collect and store necessary log information, such as the time of each access to the services, the path of the page accessed, the IP address of the client, and information about events (such as errors, crashes, reboots, and upgrades).</p>

											<h4 className="policy-subheading">1.5 Information from third-party sources</h4>
											<p><strong>1.5.1</strong> We may obtain information about you from publicly available sources (when permitted by law) and may combine it with other information about you. If you choose to connect to third-party social networking services, we may also obtain information about you from those services. By connecting to a third-party social networking platform and following the prompts for login authorization, you are deemed to have expressly consented to and authorized us to collect and utilize information about you on the third-party social networking platform.</p>
											<p><strong>1.5.2</strong> We may also collect other information about you, your device, or your use of the services by other means, which will be explained to you at the time of collection or with your consent. You may refuse our use of your information by rejecting or turning off such options on the Platform or by refusing to authorize information collection.</p>

											<h4 className="policy-subheading">1.6 Provision and change of information</h4>
											<p><strong>1.6.1</strong> To ensure that you can receive or enjoy the products or services we provide to you promptly during the registration or activation process, please provide your information accurately following the requirements of laws and regulations, according to the prompts on the corresponding page, and update the information promptly when it changes to ensure that the information you submit is true, timely, complete, and accurate.</p>
											<p>You are responsible for the accuracy of the personal information you submit, and we will make reasonable efforts to ensure its accuracy. If there are reasonable grounds to suspect that the information provided by you is incorrect, untrue, outdated, or incomplete, we have the right to send you a notice of inquiry and request for correction and have the right to directly make the deletion of the corresponding information, up to the suspension or termination of the provision of some or all of the services to you. We are not responsible for any direct or indirect losses and adverse consequences incurred from this.</p>
											<p><strong>1.6.2</strong> Please accurately fill in and update the email address, contact phone number, contact address, zip code, and other contact information you provided so we can effectively contact you. Any loss or increase in costs incurred in the process of using the Platform as a result of not being able to get in touch with you through such contact information shall be borne entirely by you alone. You understand and agree that you are obliged to maintain the authenticity and validity of the contact information you provide and that if there is any change or need for updating, you should do so following the requirements of the Platform.</p>

											<h4 className="policy-subheading">1.7 Use of information</h4>
											<p>We collect and use this information to provide you with a user-friendly experience, to provide personalized products and services, to improve the quality of our products and services, and to meet your needs.</p>
											<p>We may use the collected information for the following purposes:</p>
											<ul className="policy-list">
												<li>(1) To register you or your device for services.</li>
												<li>(2) To provide services or features that you request.</li>
												<li>(3) To provide customized content and make recommendations based on your past activity with the services.</li>
												<li>(4) To advertise, such as providing customized advertising and sponsored content and sending you promotional information.</li>
												<li>(5) To evaluate and analyze markets, customers, products, and services (including asking for your opinions about Ziqora's products and services and conducting customer surveys).</li>
												<li>(6) To understand how users use our services so that we can improve our services and develop new products and services.</li>
												<li>(7) To provide maintenance services for your equipment.</li>
												<li>(8) To conduct product promotions, etc., as permitted by law.</li>
												<li>(9) Other uses with your consent.</li>
											</ul>

											<h4 className="policy-subheading">1.8 Exceptions to obtaining authorized consent</h4>
											<p>You are fully aware that, following relevant laws and regulations, we may collect and use some necessary personal information without obtaining your authorized consent in the following cases:</p>
											<ul className="policy-list">
												<li>(1) Those related to the fulfillment of our obligations under laws and regulations.</li>
												<li>(2) Those directly related to national security and national defense.</li>
												<li>(3) Those directly related to public safety, public health, or significant public interests.</li>
												<li>(4) Those directly related to crime investigation, prosecution, trial, or judgment execution.</li>
												<li>(5) Those who have difficulty obtaining consent to safeguard their or other individuals' lives, property, or other critical legitimate rights and interests.</li>
												<li>(6) Where your personal information collected is disclosed to the public by you on your own.</li>
												<li>(7) Where your personal information is collected from legitimate public disclosure of information, such as from legitimate news reports, government information disclosure, and other channels.</li>
												<li>(8) Those necessary under an online agreement or contract you have entered into with the Platform.</li>
												<li>(9) Those necessary for maintaining the safe and stable operation of our products and/or services, such as detecting and disposing of malfunctions of products or services.</li>
												<li>(10) Those necessary for academic research institutions to carry out statistical or academic research in the public interest and where the personal information contained in the results is de-identified when providing the results of academic research or descriptions externally.</li>
												<li>(11) Other cases stipulated by laws and regulations.</li>
											</ul>

											<h3 className="policy-heading">II. How we share, transfer, and disclose your personal information.</h3>
											
											<h4 className="policy-subheading">2.1 Sharing</h4>
											<p><strong>2.1.1</strong> We will not share your personal information with any company, organization, or individual. Except in the following circumstances:</p>
											<ul className="policy-list">
												<li>(1) Prior authorization has been obtained.</li>
												<li>(2) At your own initiative.</li>
												<li>(3) Sharing with Affiliates. We may share your personal information with our affiliates. We will only share necessary personal information, and such sharing will be subject to the purposes stated in the Terms of Use. Affiliated companies will obtain your authorization and consent to change the purposes for which personal information is processed.</li>
												<li>(4) Necessary Sharing with Authorized Partners. You understand and are aware that to provide you with better quality products and services, we will authorize business partners to provide some of their services to you. In this case, we may share some of your personal information with our partners to provide better customer service and user experience. Please note that we will only share your personal information for lawful, legitimate, necessary, specific, and explicit purposes and only the personal information necessary to provide the service.</li>
											</ul>

											<h4 className="policy-subheading">2.2 Transfer</h4>
											<p>Transfer refers to the transfer of control over the acquisition of your personal information to another company, organization, or individual. We will not transfer your personal information to any company, organization, or individual unless we have your express consent. Except in the following circumstances:</p>
											<ul className="policy-list">
												<li>(1) Prior consent has been obtained.</li>
												<li>(2) At your own initiative.</li>
												<li>(3) In the event of a merger, acquisition, or liquidation of a company, which may involve the transfer of personal information, we will require the new company or organization holding your personal information to continue to be bound by the Terms of Use. Otherwise, we will ask them to obtain your express consent again.</li>
												<li>(4) Other cases stipulated by laws and regulations.</li>
											</ul>

											<h4 className="policy-subheading">2.3 Disclosure</h4>
											<p><strong>2.3.1</strong> In principle, we will not publicly disclose your personal information. Except in the following circumstances:</p>
											<ul className="policy-list">
												<li>(1) Where an authorized partner of Ziqora provides certain services, we will share your personal information with that partner as described in the Terms of Use.</li>
												<li>(2) While we may disclose personal information among our affiliates, we will only disclose your information within our affiliates for a specific, explicit, and lawful purpose and only to the extent necessary to provide the service.</li>
												<li>(3) Ziqora may also disclose your personal information to relevant law enforcement or other governmental authorities when required by applicable law or in response to legal process.</li>
												<li>(4) Ziqora may also disclose your data where there is a legitimate need, such as to perform a contract and where we believe that disclosure is necessary and appropriate to prevent physical harm or property damage or to investigate possible or actual illegal activity.</li>
											</ul>
											<p><strong>2.3.2</strong> According to relevant laws and regulations, we may share, transfer, and disclose your personal information without your authorized consent in the following cases:</p>
											<ul className="policy-list">
												<li>(1) Those related to our fulfillment of obligations under laws and regulations, including disclosure of your personal information to the authorized authorities following the provisions of laws and regulations and mandatory requirements of judicial or administrative authorities.</li>
												<li>(2) Those directly related to national security and national defense.</li>
												<li>(3) Those directly related to public safety, public health, or significant public interests.</li>
												<li>(4) Those directly related to crime investigation, prosecution, trial, or judgment execution.</li>
												<li>(5) Those who have difficulty obtaining consent to safeguard their or other individuals' lives, property, or other critical legitimate rights and interests.</li>
												<li>(6) Where your personal information collected is disclosed to the public by you on your own.</li>
												<li>(7) Where your personal information is collected from legitimate public disclosure of information, such as from legitimate news reports, government information disclosure, and other channels.</li>
												<li>(8) Other cases stipulated by laws and regulations.</li>
											</ul>

											<h3 className="policy-heading">III. How we store and protect your personal information.</h3>
											
											<h4 className="policy-subheading">3.1 Storage</h4>
											<p><strong>3.1.1 Storage location.</strong> We store information we obtain from users in India on servers securely located and compliant with data residency requirements in India. In the event of cross-border transmission of data, we will separately inform you of the purpose of the data outbound, the recipient, and obtain your authorized consent.</p>
											<p><strong>3.1.2 Storage period.</strong> We promise to always store your personal information within a reasonably necessary period following the law. After the above period, we will delete or anonymize your personal information. If we cease to operate, we will promptly cease activities to collect your personal information, notify you of the cessation of operations by individual delivery or announcement, and delete or anonymize your personal information in our possession.</p>

											<h4 className="policy-subheading">3.2 Protection</h4>
											<p><strong>3.2.1</strong> To protect the security of your personal information, we will endeavor to protect your personal information by adopting various security measures in line with industry standards to minimize the risk of destruction, theft, leakage, unauthorized access, use, disclosure, or alteration of your personal information. We will actively establish a data classification and grading system, data security management standards, and data security development standards to manage and regulate the storage and use of personal information and ensure that no personal information unrelated to our services is collected.</p>
											<p><strong>3.2.2</strong> Your accounts have security protection features. Please keep your account and password information properly. The Platform will ensure that your information is not lost, abused, or altered by backing up to other servers, encrypting user passwords, etc. Notwithstanding the aforementioned security measures, please note that there are no "perfect security measures" on the information network.</p>

											<h3 className="policy-heading">IV. Your rights concerning personal information processing activities.</h3>
											<p>We attach great importance to and do our best to protect your rights related to your personal information.</p>
											
											<h4 className="policy-subheading">4.1 Accessing, editing and deleting of user information</h4>
											<p>You have the right to access, view, copy, correct, or delete your user information, except for the exceptions provided by laws and regulations. If you want to exercise your data access, you can access, correct, and delete the relevant personal information through the user interface.</p>

											<h4 className="policy-subheading">4.2 Contact us for management</h4>
											<p>For security and identification considerations, you may not be able to access, correct, or delete certain information (such as information after real-name authentication, part of your use records) directly through the interactive interface of the Platform. If you need to access, modify, or request to delete such information under the law, please follow the contact information provided in Article 9 of the Terms of Use and email your questions to the designated contact email address. We will review the issue as soon as possible and respond promptly after verifying your user identity.</p>

											<h4 className="policy-subheading">4.3 Cancellation of Account</h4>
											<p>Ziqora provides account cancellation services; please understand that account cancellation is a non-recoverable operation. Given our unified account system, once you cancel your account, we will delete or anonymize all of your personal information promptly, following the requirements of laws and regulations, except as otherwise provided by laws and regulations.</p>

											<h3 className="policy-heading">V. How we use cookies and other similar technologies.</h3>
											<p>We, as well as certain third parties that provide content, advertising, or other features through the Platform's Services, may use cookies, beacons, or other technology in certain areas of the services.</p>
											
											<h4 className="policy-subheading">5.1 Cookie</h4>
											<p>Cookies are small files that store information on a computer, television, cell phone, or other device. An entity that places a cookie on your device can use the cookie to recognize you across different websites, services, devices, and/or browsing sessions.</p>

											<h4 className="policy-subheading">5.2 Other local storage</h4>
											<p>We, as well as certain third parties, may use other types of local storage technologies in connection with our Services, such as local shared objects (also known as "Flash Cookies") and HTML5 local storage. These technologies are similar to the cookies described above because they are stored on your device and can be used to store certain information about your activities and preferences.</p>

											<h4 className="policy-subheading">5.3 Beacon</h4>
											<p>We, as well as certain third parties, may also use technologies called beacons (or "pixels") to transmit information from your device to a server. Beacons can be embedded in online content, videos, and emails and may allow the server to read certain types of information from your device, to know when you viewed specific content or specific email messages, to determine the time and date you viewed the beacon, and to determine the IP address of the device.</p>

											<h3 className="policy-heading">VI. How we handle and protect children's personal information.</h3>
											<p>The following terms and conditions should be read carefully by minor users (especially child users under the age of 14) accompanied by a guardian, who will make the decision whether to accept or reject this Privacy Policy after fully understanding it:</p>
											<ul className="policy-list">
												<li>1. If the user is a minor under 18, they should read the terms and conditions and use the services of the Platform under the supervision and guidance of and with the consent of their guardian.</li>
												<li>2. We attach great importance to the protection of the personal information of minors. While filling out personal information for minor users, please strengthen your awareness of personal protection and be careful. Please correctly use the platform-related services under the guidance of the guardian.</li>
												<li>3. If you are the guardian of a minor, when you have any questions about the use of our services by the minor under your guardianship or the user information provided by the minor to us, please contact us promptly following the contact information provided in Article 9 of the Terms of Use.</li>
											</ul>

											<h3 className="policy-heading">VII. How we update our privacy policies</h3>
											<p><strong>7.1</strong> We reserve the right to occasionally update or revise the Terms of Use. Such updates and revisions will form part of and have the same effect as the Terms of Use and will not reduce your rights under the Terms of Use as currently in force without your express consent.</p>
											<p><strong>7.2</strong> If our Privacy Policy changes, we will post the latest version of the Privacy Policy here. If we make material changes to our Privacy Policy, we may also send you a notice of the changes through various channels, for example, by posting a notice on our Platform website or a separate notice to you.</p>

											<h3 className="policy-heading">VIII. Legal jurisdiction and dispute resolution</h3>
											<p>The Terms of Use are governed by the laws of India. If the contents of the Terms of Use and conditions conflict with the relevant legal provisions, the legal provisions shall prevail. The Terms of Use are severable, and the contents of the Terms of Use that are judged or ruled invalid shall not affect the validity and enforceability of the other contents. The conclusion, execution, and interpretation of the Terms of Use and the settlement of disputes shall be governed by the laws of India.</p>
											<p>If any dispute arises between the parties regarding the content of the Terms of Use or its implementation, the parties shall endeavor to resolve it through friendly negotiation; if the negotiation fails, either party may file a lawsuit with the appropriate courts in Odisha, India.</p>

											<h3 className="policy-heading">IX. How to contact us</h3>
											<p>If you have any questions about the Terms of Use or related matters, especially if you believe our personal information processing behavior has harmed your legitimate rights and interests, you can contact us anytime through the following ways. We will review the issues involved as soon as possible and respond promptly, following the requirements and deadlines of applicable data protection laws.</p>
											
											<div style={{ background: "#f8fafc", padding: "30px", borderRadius: "12px", marginTop: "30px", borderLeft: "4px solid #10b981" }}>
												<p style={{ margin: "0 0 10px 0", color: "#475569" }}><strong>Customer service hotline:</strong> +91 674 351 3070, +91 674 351 3071</p>
												<p style={{ margin: "0 0 10px 0", color: "#475569" }}><strong>Email:</strong> <a href="mailto:info@ziqora.energy" style={{ color: "#10b981", textDecoration: "none" }}>info@ziqora.energy</a></p>
												<p style={{ margin: "0 0 10px 0", color: "#475569" }}><strong>Office address:</strong> Bhubaneswar, Odisha, India</p>
												<p style={{ margin: "0", fontWeight: "800", color: "#0f172a", marginTop: "20px", fontSize: "18px" }}>Ziqora Energy</p>
											</div>

										</div>
									</div>
								</div>
							</div>
						</section>
						
						{/* Internal Styling */}
						<style>{`
							.policy-content p {
								margin-bottom: 20px;
								line-height: 1.8;
								font-size: 16px;
								color: #475569;
							}
							.policy-heading {
								color: #0f172a;
								font-weight: 800;
								margin-top: 50px;
								margin-bottom: 25px;
								font-size: 26px;
								padding-bottom: 15px;
								border-bottom: 1px solid #e2e8f0;
							}
							.policy-subheading {
								color: #1e293b;
								font-weight: 700;
								margin-top: 35px;
								margin-bottom: 15px;
								font-size: 20px;
							}
							.policy-list {
								margin-bottom: 25px;
								padding-left: 20px;
							}
							.policy-list li {
								margin-bottom: 12px;
								line-height: 1.8;
								font-size: 16px;
								color: #475569;
							}
						`}</style>
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
