"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [activeLocationInfo, setActiveLocationInfo] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />

						{/* Hero Page Title */}
						<section
							style={{
								position: "relative",
								padding: "140px 0 100px 0",
								backgroundImage: "url('https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1600&auto=format&fit=crop')",
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
										<div className="hero-fade-in hero-delay-1" style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
											<span style={{ width: "30px", height: "2px", background: "#10b981" }}></span>
											<span
												style={{
													color: "#10b981",
													fontWeight: "700",
													textTransform: "uppercase",
													letterSpacing: "2px",
													fontSize: "12px",
												}}
											>
												COMMUNICATION CHANNEL
											</span>
										</div>
										<h1
											className="hero-fade-in hero-delay-2"
											style={{
												fontWeight: "900",
												color: "#ffffff",
												fontSize: "calc(2rem + 2vw)",
												lineHeight: 1.15,
												marginBottom: "20px",
												letterSpacing: "-0.02em",
											}}
										>
											Contact Ziqora
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
											Register partnerships, vendor configurations, or administrative requests with our project hub.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Contact</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Contact Info, Map and Forms */}
						<section style={{ padding: "100px 0", backgroundColor: "#ffffff" }}>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											{/* Left Column: Map & Info */}
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
													GET IN TOUCH
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "30px" }}>
													Corporate Inquiry Hub
												</h2>

												{/* Emails */}
												<div className="row mb-5">
													{[
														{ label: "General Inquiries", email: "info@ziqora.com" },
														{ label: "Business & Partnerships", email: "partnerships@ziqora.com" },
														{ label: "Careers & HR", email: "careers@ziqora.com" },
														{ label: "Administration", email: "admin@ziqora.com" },
													].map((item, idx) => (
														<div key={idx} className="col-sm-6 mb-4">
															<div
																style={{
																	background: "#f8fafc",
																	padding: "20px",
																	borderRadius: "8px",
																	border: "1px solid #e2e8f0",
																}}
															>
																<strong style={{ color: "#0a1931", display: "block", fontSize: "14px", marginBottom: "5px" }}>
																	{item.label}
																</strong>
																<a
																	href={`mailto:${item.email}`}
																	style={{ color: "#10b981", fontWeight: "600", fontSize: "14px", wordBreak: "break-all" }}
																>
																	{item.email}
																</a>
															</div>
														</div>
													))}
												</div>

												{/* Interactive Odisha Map */}
												<h4 style={{ color: "#0a1931", fontWeight: "800", marginBottom: "15px" }}>
													Planned Odisha Manufacturing Base
												</h4>
												<p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
													Hover or click on the highlight markers to view details about the planned manufacturing logistics.
												</p>

												<div
													style={{
														position: "relative",
														background: "#f8fafc",
														border: "1px solid #e2e8f0",
														borderRadius: "16px",
														padding: "20px",
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
													}}
												>
													{/* Premium SVG Map representation of Odisha */}
													<svg
														width="100%"
														height="260"
														viewBox="0 0 400 300"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														style={{ maxWidth: "340px" }}
													>
														{/* Odisha outline path simplification */}
														<path
															d="M 120 40 C 150 20, 220 15, 270 40 C 290 55, 330 65, 340 90 C 350 120, 310 160, 290 190 C 270 220, 240 250, 190 260 C 160 265, 120 250, 90 220 C 60 190, 50 150, 55 120 C 60 90, 90 60, 120 40 Z"
															fill="#e2e8f0"
															stroke="#cbd5e1"
															strokeWidth="3"
														/>
														{/* Coastline indication */}
														<path
															d="M 290 190 C 270 220, 240 250, 190 260"
															stroke="#3b82f6"
															strokeWidth="2"
															strokeDasharray="4 4"
														/>
														{/* Bay of Bengal label */}
														<text x="260" y="250" fill="#94a3b8" fontSize="10" fontWeight="700">
															Bay of Bengal
														</text>

														{/* Marker 1: General Odisha Base */}
														<circle
															cx="210"
															cy="140"
															r="10"
															fill="#10b981"
															fillOpacity="0.4"
															style={{ cursor: "pointer" }}
															onClick={() =>
																setActiveLocationInfo(
																	"Planned 5 GW Cell & Wafer facility with direct clean energy grid alignment."
																)
															}
														/>
														<circle
															cx="210"
															cy="140"
															r="5"
															fill="#10b981"
															style={{ cursor: "pointer" }}
															onClick={() =>
																setActiveLocationInfo(
																	"Planned 5 GW Cell & Wafer facility with direct clean energy grid alignment."
																)
															}
														/>

														{/* Marker 2: Paradip Port connectivity */}
														<circle
															cx="285"
															cy="175"
															r="8"
															fill="#0a1931"
															fillOpacity="0.4"
															style={{ cursor: "pointer" }}
															onClick={() =>
																setActiveLocationInfo(
																	"Paradip Port Connection: Strategic route for raw polysilicon import cargo."
																)
															}
														/>
														<circle
															cx="285"
															cy="175"
															r="4"
															fill="#0a1931"
															style={{ cursor: "pointer" }}
															onClick={() =>
																setActiveLocationInfo(
																	"Paradip Port Connection: Strategic route for raw polysilicon import cargo."
																)
															}
														/>

														<text x="180" y="125" fill="#0a1931" fontSize="11" fontWeight="800">
															Odisha Base
														</text>
														<text x="245" y="195" fill="#0a1931" fontSize="10" fontWeight="700">
															Port Route
														</text>
													</svg>

													{/* Location info popup inside map */}
													<div
														style={{
															minHeight: "50px",
															background: "#0a1931",
															color: "#ffffff",
															borderRadius: "8px",
															padding: "12px 18px",
															fontSize: "12px",
															marginTop: "15px",
															width: "100%",
															textAlign: "center",
														}}
													>
														{activeLocationInfo || "Click on map markers to explore logistics channels."}
													</div>
												</div>
											</div>

											{/* Right Column: Inquiry Form */}
											<div className="col-lg-6">
												<div
													style={{
														background: "#f8fafc",
														border: "1px solid #e2e8f0",
														borderRadius: "16px",
														padding: "40px",
													}}
												>
													<h3 style={{ color: "#0a1931", fontWeight: "800", marginBottom: "25px", fontSize: "24px" }}>
														Business Inquiry Form
													</h3>
													{formSubmitted ? (
														<div
															style={{
																background: "rgba(16, 185, 129, 0.15)",
																color: "#059669",
																padding: "20px",
																borderRadius: "8px",
																textAlign: "center",
																fontWeight: "600",
															}}
														>
															<i className="fa-solid fa-circle-check" style={{ fontSize: "30px", marginBottom: "10px", display: "block" }}></i>
															Thank you! Your inquiry has been logged. We will get back to you shortly.
														</div>
													) : (
														<form onSubmit={handleSubmit}>
															<div style={{ marginBottom: "20px" }}>
																<label style={{ display: "block", color: "#334155", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
																	Full Name
																</label>
																<input
																	type="text"
																	required
																	style={{
																		borderRadius: "6px",
																		border: "1px solid #e2e8f0",
																		padding: "12px 15px",
																		backgroundColor: "#ffffff",
																	}}
																/>
															</div>
															<div style={{ marginBottom: "20px" }}>
																<label style={{ display: "block", color: "#334155", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
																	Email Address
																</label>
																<input
																	type="email"
																	required
																	style={{
																		borderRadius: "6px",
																		border: "1px solid #e2e8f0",
																		padding: "12px 15px",
																		backgroundColor: "#ffffff",
																	}}
																/>
															</div>
															<div style={{ marginBottom: "20px" }}>
																<label style={{ display: "block", color: "#334155", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
																	Company Name
																</label>
																<input
																	type="text"
																	required
																	style={{
																		borderRadius: "6px",
																		border: "1px solid #e2e8f0",
																		padding: "12px 15px",
																		backgroundColor: "#ffffff",
																	}}
																/>
															</div>
															<div style={{ marginBottom: "20px" }}>
																<label style={{ display: "block", color: "#334155", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
																	Subject
																</label>
																<input
																	type="text"
																	required
																	style={{
																		borderRadius: "6px",
																		border: "1px solid #e2e8f0",
																		padding: "12px 15px",
																		backgroundColor: "#ffffff",
																	}}
																/>
															</div>
															<div style={{ marginBottom: "25px" }}>
																<label style={{ display: "block", color: "#334155", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
																	Message
																</label>
																<textarea
																	rows="4"
																	required
																	style={{
																		borderRadius: "6px",
																		border: "1px solid #e2e8f0",
																		padding: "12px 15px",
																		backgroundColor: "#ffffff",
																		width: "100%",
																		resize: "none",
																	}}
																></textarea>
															</div>
															<button
																type="submit"
																style={{
																	width: "100%",
																	background: "#10b981",
																	color: "#ffffff",
																	padding: "15px",
																	borderRadius: "6px",
																	fontWeight: "700",
																	cursor: "pointer",
																	boxShadow: "0 4px 10px rgba(16, 185, 129, 0.2)",
																}}
															>
																Submit Inquiry
															</button>
														</form>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
