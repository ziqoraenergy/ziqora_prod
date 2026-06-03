"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import WhyZiqora from "@/components/home/WhyZiqora";
import Link from "next/link";

export default function About() {
	return (
		<div>
			<title>About Ziqora - Vision, Mission & Our Story</title>
			<BackToTop />
			<Header />
						<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						
						{/* Hero Page Title */}
						<section
							style={{
								position: "relative",
								minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 0",
								backgroundImage: "url('/images/about-hero.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								color: "#ffffff",
								overflow: "hidden",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "linear-gradient(135deg, rgba(10, 25, 49, 0.95) 0%, rgba(21, 48, 91, 0.8) 100%)",
									zIndex: 1,
								}}
							></div>

							{/* Floating abstract decorative vector shape */}
							<div
								style={{
									position: "absolute",
									bottom: "-50px",
									right: "-50px",
									width: "300px",
									height: "300px",
									borderRadius: "50%",
									background: "rgba(16, 185, 129, 0.05)",
									zIndex: 1,
									filter: "blur(40px)",
								}}
							></div>

							<style>{`
								@keyframes fadeInUp {
									from {
										opacity: 0;
										transform: translateY(30px);
									}
									to {
										opacity: 1;
										transform: translateY(0);
									}
								}
								.hero-fade-in {
									opacity: 0;
									animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
									position: relative;
									z-index: 2;
								}
								.hero-delay-1 {
									animation-delay: 0.1s;
								}
								.hero-delay-2 {
									animation-delay: 0.3s;
								}
								.hero-delay-3 {
									animation-delay: 0.5s;
								}
							`}</style>

							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row align-items-center">
									<div className="col-lg-8 text-start">
										<h1
											className="hero-fade-in hero-delay-1"
											style={{
												fontWeight: "900",
												color: "#ffffff",
												fontSize: "calc(2rem + 2vw)",
												lineHeight: 1.15,
												marginBottom: "20px",
												letterSpacing: "-0.02em",
											}}
										>
											Corporate Charter <br />
											& Institutional Vision
										</h1>
										<p
											className="hero-fade-in hero-delay-3"
											style={{
												fontSize: "18px",
												color: "rgba(255, 255, 255, 0.8)",
												lineHeight: "1.6",
												maxWidth: "600px",
												margin: "0 0 30px 0",
											}}
										>
											Ziqora is establishing a foundational pillar for India's clean energy independence by planning a 5 GW solar wafer and cell production hub in Odisha.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>About Us</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Vision & Mission Section */}
						<section
							id="vision-mission"
							style={{ padding: "120px 0", backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											<div className="col-lg-4 mb-5 mb-lg-0">
												<span
													style={{
														color: "#10b981",
														fontWeight: "600",
														textTransform: "uppercase",
														letterSpacing: "2px",
														fontSize: "13px",
														display: "block",
														marginBottom: "15px",
													}}
												>
													Our Philosophy
												</span>
												<h2
													style={{
														color: "#0a1931",
														fontWeight: "800",
														fontSize: "36px",
														lineHeight: "1.2",
														marginBottom: "20px",
													}}
												>
													Building for the Long Term
												</h2>
												<p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
													At Ziqora, we believe in long-term planning, operational excellence, and self-reliance. We are building the infrastructure needed to power tomorrow's energy needs.
												</p>
											</div>
											<div className="col-lg-8" style={{ paddingLeft: "40px" }}>
												<div
													style={{
														borderBottom: "1px solid #e2e8f0",
														paddingBottom: "40px",
														marginBottom: "40px",
													}}
												>
													<div
														style={{
															display: "flex",
															alignItems: "flex-start",
															gap: "20px",
														}}
													>
														<div
															style={{
																fontSize: "12px",
																fontWeight: "800",
																color: "#10b981",
																border: "1px solid #10b981",
																borderRadius: "4px",
																padding: "4px 8px",
																lineHeight: 1,
															}}
														>
															VISION
														</div>
														<div style={{ flex: 1 }}>
															<h3
																style={{
																	color: "#0a1931",
																	fontWeight: "800",
																	fontSize: "24px",
																	marginBottom: "15px",
																}}
															>
																A Self-Reliant India
															</h3>
															<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
																To secure India's clean energy future by building a robust, domestic supply chain for high-efficiency solar wafers and cells.
															</p>
														</div>
													</div>
												</div>

												<div>
													<div
														style={{
															display: "flex",
															alignItems: "flex-start",
															gap: "20px",
														}}
													>
														<div
															style={{
																fontSize: "12px",
																fontWeight: "800",
																color: "#10b981",
																border: "1px solid #10b981",
																borderRadius: "4px",
																padding: "4px 8px",
																lineHeight: 1,
															}}
														>
															MISSION
														</div>
														<div style={{ flex: 1 }}>
															<h3
																style={{
																	color: "#0a1931",
																	fontWeight: "800",
																	fontSize: "24px",
																	marginBottom: "15px",
																}}
															>
																Delivering 5 GW Capacity
															</h3>
															<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
																To build a state-of-the-art 5 GW manufacturing facility in Odisha. We are bringing advanced automation and world-class technology to supply reliable, high-quality solar components to domestic module manufacturers.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Our Story Section */}
						<section
							id="story"
							style={{ padding: "100px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
						>
							<div className="container">
								<div className="row align-items-center justify-content-center">
									<div className="col-lg-10">
										<div className="row align-items-center">
											<div className="col-lg-6 mb-5 mb-lg-0">
												<span
													style={{
														color: "#10b981",
														fontWeight: "600",
														textTransform: "uppercase",
														letterSpacing: "1.5px",
														fontSize: "14px",
														display: "block",
														marginBottom: "10px",
													}}
												>
													BACKGROUND & CONTEXT
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "25px" }}>
													Our Story
												</h2>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
													India is moving fast towards its clean energy goals, but the local solar industry still relies heavily on imported parts, especially wafers and cells. This dependency makes our projects vulnerable to supply chain issues and global market shifts.
												</p>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
													That's why we started <strong>Ziqora</strong>. We are building a modern, domestic manufacturing ecosystem right here in India. By producing advanced wafers and high-efficiency cells locally, we aim to support module manufacturers, reduce delays, and help build a truly self-reliant energy sector.
												</p>
											</div>
											<div className="col-lg-6 text-center">
												<div
													style={{
														position: "relative",
														borderRadius: "16px",
														overflow: "hidden",
														boxShadow: "0 20px 40px rgba(10,25,49,0.08)",
													}}
												>
													<img
														src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
														alt="Solar panels representing Ziqora's vision"
														style={{ maxWidth: "100%", height: "auto", display: "block" }}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Why Ziqora Section */}
						<WhyZiqora />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

