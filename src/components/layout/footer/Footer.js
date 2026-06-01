"use client";

import Link from "next/link";

const Footer = () => {
	const greenAccent = "#10b981";

	return (
		<footer
			className="tj-footer-section footer-1 section-gap-x"
			style={{
				background: "#070f1e",
				color: "#ffffff",
				padding: "80px 0 40px 0",
				position: "relative",
			}}
		>
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						{/* Brand Column */}
						<div className="col-xl-4 col-lg-4 col-md-6 mb-5 mb-lg-0">
							<div className="footer-widget">
								<div className="footer-logo" style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "25px" }}>
									{/* Sleek SVG solar wafer / sun icon */}
									<svg
										width="35"
										height="35"
										viewBox="0 0 100 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect x="5" y="5" width="90" height="90" rx="10" stroke="#ffffff" strokeWidth="4" />
										<line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="4" />
										<line x1="5" y1="50" x2="95" y2="50" stroke="#ffffff" strokeWidth="4" />
										<circle cx="50" cy="50" r="22" fill={greenAccent} />
										<circle cx="50" cy="50" r="14" fill="#ffffff" />
										<circle cx="50" cy="50" r="6" fill="#070f1e" />
										<rect x="20" y="20" width="10" height="10" rx="2" fill="#ffffff" />
										<rect x="70" y="20" width="10" height="10" rx="2" fill="#ffffff" />
										<rect x="20" y="70" width="10" height="10" rx="2" fill="#ffffff" />
										<rect x="70" y="70" width="10" height="10" rx="2" fill="#ffffff" />
									</svg>
									<span
										style={{
											fontFamily: "var(--tj-ff-heading), 'Mona Sans', sans-serif",
											fontSize: "22px",
											fontWeight: "900",
											letterSpacing: "3px",
											color: "#ffffff",
											textTransform: "uppercase",
										}}
									>
										Ziqora<span style={{ color: greenAccent }}>.</span>
									</span>
								</div>
								<div className="footer-text" style={{ marginBottom: "25px" }}>
									<p style={{ color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6" }}>
										Building the Foundation of India's Solar Future. Establishing 5 GW of wafer and solar cell capacity in Odisha, India.
									</p>
								</div>
							</div>
						</div>

						{/* Quick Links Column */}
						<div className="col-xl-3 col-lg-3 col-md-6 mb-5 mb-lg-0">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title" style={{ color: "#ffffff", fontWeight: "800", marginBottom: "25px" }}>
									Quick Links
								</h5>
								<ul style={{ listStyle: "none", padding: 0 }}>
									<li style={{ marginBottom: "12px" }}>
										<Link href="/about" style={{ color: "rgba(255, 255, 255, 0.75)" }}>About Us</Link>
									</li>
									<li style={{ marginBottom: "12px" }}>
										<Link href="/project" style={{ color: "rgba(255, 255, 255, 0.75)" }}>Our Project</Link>
									</li>
									<li style={{ marginBottom: "12px" }}>
										<Link href="/technology" style={{ color: "rgba(255, 255, 255, 0.75)" }}>Technology</Link>
									</li>
									<li style={{ marginBottom: "12px" }}>
										<Link href="/sustainability" style={{ color: "rgba(255, 255, 255, 0.75)" }}>Sustainability</Link>
									</li>
									<li style={{ marginBottom: "12px" }}>
										<Link href="/news" style={{ color: "rgba(255, 255, 255, 0.75)" }}>News & Insights</Link>
									</li>
									<li style={{ marginBottom: "12px" }}>
										<Link href="/careers" style={{ color: "rgba(255, 255, 255, 0.75)" }}>Careers</Link>
									</li>
									<li>
										<Link href="/contact" style={{ color: "rgba(255, 255, 255, 0.75)" }}>Contact</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Newsletter & Sub */}
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="footer-widget widget-subscribe">
								<h5 className="title" style={{ color: "#ffffff", fontWeight: "800", marginBottom: "20px" }}>
									Stay Updated
								</h5>
								<p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", marginBottom: "20px" }}>
									Subscribe to receive updates on our project development milestones.
								</p>
								<div className="subscribe-form">
									<form action="#" onSubmit={(e) => e.preventDefault()}>
										<div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
											<input
												type="email"
												name="email"
												placeholder="Enter email address"
												required
												style={{
													background: "rgba(255, 255, 255, 0.05)",
													border: "1px solid rgba(255, 255, 255, 0.1)",
													color: "#ffffff",
													borderRadius: "6px",
													padding: "12px 15px",
													width: "100%",
												}}
											/>
											<button
												type="submit"
												style={{
													background: "#10b981",
													color: "#ffffff",
													borderRadius: "6px",
													padding: "0 20px",
													cursor: "pointer",
												}}
											>
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright and Bottom Area */}
			<div
				className="tj-copyright-area"
				style={{
					borderTop: "1px solid rgba(255, 255, 255, 0.1)",
					marginTop: "60px",
					paddingTop: "30px",
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-md-6 mb-3 mb-md-0">
							<div className="footer-contact">
								<ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "25px", flexWrap: "wrap" }}>
									<li>
										<Link href="mailto:info@ziqora.com" style={{ color: "rgba(255,255,255,0.7)" }}>
											<span className="icon" style={{ color: "#10b981", marginRight: "8px" }}>
												<i className="fa-solid fa-envelope"></i>
											</span>
											info@ziqora.com
										</Link>
									</li>
									<li>
										<Link href="/contact" style={{ color: "rgba(255,255,255,0.7)" }}>
											<span className="icon" style={{ color: "#10b981", marginRight: "8px" }}>
												<i className="fa-solid fa-map-pin"></i>
											</span>
											Odisha, India
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-md-6 d-flex justify-content-md-end align-items-center gap-3">
							{/* Social Links */}
							<div className="social-links" style={{ display: "inline-flex", gap: "15px" }}>
								<Link href="https://www.linkedin.com/" target="_blank" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "18px" }}>
									<i className="fa-brands fa-linkedin"></i>
								</Link>
								<Link href="https://www.youtube.com/" target="_blank" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "18px" }}>
									<i className="fa-brands fa-youtube"></i>
								</Link>
								<Link href="https://x.com/" target="_blank" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "18px" }}>
									<i className="fa-brands fa-x-twitter"></i>
								</Link>
							</div>
							<div className="copyright-text" style={{ marginLeft: "20px" }}>
								<p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px", margin: 0 }}>
									&copy; {new Date().getFullYear()} Ziqora Solar. All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
