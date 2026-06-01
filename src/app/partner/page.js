"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { useState, useEffect } from "react";

export default function Partner() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

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
			}, 100);
		});
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<title>Partner With Us | Ziqora</title>
			<BackToTop />
			<Header />
			
			<div id="smooth-wrapper" style={{ overflowX: "hidden", width: "100%", backgroundColor: "#020617" }}>
				<div id="smooth-content">
					<main style={{ backgroundColor: "#020617", minHeight: "100vh" }}>
						
						{/* HERO SECTION */}
						<section
							style={{
								position: "relative",
								minHeight: "100vh",
								display: "flex",
								alignItems: "center",
								padding: "150px 0 100px 0",
								backgroundImage: "url('/assets/images/background/international_solar_partnership.png')", // Custom AI generated international partnership image
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundAttachment: "fixed",
								color: "#ffffff"
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.85) 0%, rgba(2, 6, 23, 0.6) 100%)",
									zIndex: 1,
								}}
							></div>

							<div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
								<span
									style={{
										display: "inline-block",
										color: "#10b981",
										fontWeight: "700",
										letterSpacing: "3px",
										textTransform: "uppercase",
										fontSize: "13px",
										marginBottom: "20px",
										background: "rgba(16, 185, 129, 0.1)",
										padding: "6px 16px",
										borderRadius: "30px",
										border: "1px solid rgba(16, 185, 129, 0.2)"
									}}
								>
									Strategic Collaboration
								</span>
								<h1
									style={{
										fontFamily: "'Inter', sans-serif",
										fontWeight: "800",
										color: "#ffffff",
										fontSize: "calc(3.5rem + 2vw)",
										lineHeight: 1.1,
										marginBottom: "25px",
										letterSpacing: "-0.02em",
									}}
								>
									Partner With Ziqora
								</h1>
								<p
									style={{
										fontSize: "18px",
										color: "rgba(255, 255, 255, 0.75)",
										maxWidth: "800px",
										margin: "0 auto",
										lineHeight: "1.7",
										fontWeight: "400"
									}}
								>
									Secure your supply chain, co-develop next-generation technologies, and leverage our mid-stream manufacturing capacity. We are actively seeking strategic partners across the solar ecosystem.
								</p>
							</div>
						</section>

						{/* PARTNERSHIP MODELS SECTION */}
						<section style={{ padding: "100px 0", backgroundColor: "#f8fafc", position: "relative", zIndex: 5 }}>
							<div className="container">
								<div className="row mb-5 text-center">
									<div className="col-12">
										<h2 style={{ color: "#0f172a", fontWeight: "800", fontSize: "36px", marginBottom: "20px" }}>Partnership Models</h2>
										<p style={{ color: "#475569", maxWidth: "700px", margin: "0 auto 40px auto", fontSize: "16px", lineHeight: "1.6" }}>
											Whether you supply raw materials or require high-efficiency cells for your module assembly, Ziqora offers flexible partnership structures built for scale.
										</p>
									</div>
								</div>
								
								<div className="row g-4">
									{[
										{
											title: "Raw Material Sourcing",
											icon: "fa-solid fa-gem",
											desc: "Partner with us for the secure, long-term sourcing and supply of ultra-high purity polysilicon and metallurgical grade silicon."
										},
										{
											title: "Off-Take Agreements",
											icon: "fa-solid fa-file-contract",
											desc: "Secure long-term supply contracts for our Tier-1 monocrystalline wafers and high-efficiency N-Type cells to guarantee your module production."
										},
										{
											title: "Technology & R&D",
											icon: "fa-solid fa-microchip",
											desc: "Form joint ventures to co-develop cutting-edge cell technologies, pushing the boundaries of TOPCon and Heterojunction (HJT) efficiencies."
										},
										{
											title: "Infrastructure & Expansion",
											icon: "fa-solid fa-industry",
											desc: "Collaborate on mega-factory developments, capital investments, and scaling domestic manufacturing capacity to meet global demand."
										}
									].map((model, idx) => (
										<div className="col-lg-6" key={idx}>
											<div style={{
												background: "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
												border: "1px solid #e2e8f0",
												borderTop: "4px solid transparent",
												padding: "40px",
												borderRadius: "20px",
												height: "100%",
												transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
												boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
												position: "relative",
												overflow: "hidden",
												display: "flex",
												flexDirection: "column"
											}}
											className="partner-card"
											onMouseEnter={(e) => {
												e.currentTarget.style.transform = "translateY(-8px)";
												e.currentTarget.style.borderTopColor = "#10b981";
												e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.08)";
												e.currentTarget.querySelector('.icon-box').style.background = "#10b981";
												e.currentTarget.querySelector('.icon-box i').style.color = "#ffffff";
												e.currentTarget.querySelector('.card-action').style.color = "#10b981";
												e.currentTarget.querySelector('.card-action').style.letterSpacing = "1px";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.transform = "translateY(0)";
												e.currentTarget.style.borderTopColor = "transparent";
												e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.03)";
												e.currentTarget.querySelector('.icon-box').style.background = "rgba(16, 185, 129, 0.1)";
												e.currentTarget.querySelector('.icon-box i').style.color = "#10b981";
												e.currentTarget.querySelector('.card-action').style.color = "#94a3b8";
												e.currentTarget.querySelector('.card-action').style.letterSpacing = "normal";
											}}
											>
												{/* Decorative Background Icon */}
												<i className={model.icon} style={{
													position: "absolute",
													right: "-20px",
													bottom: "-20px",
													fontSize: "150px",
													color: "rgba(16, 185, 129, 0.03)",
													transform: "rotate(-15deg)",
													zIndex: 0
												}}></i>

												<div style={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
													<div className="icon-box" style={{
														width: "70px",
														height: "70px",
														background: "rgba(16, 185, 129, 0.1)",
														borderRadius: "16px",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														marginBottom: "25px",
														transition: "all 0.3s ease"
													}}>
														<i className={model.icon} style={{ fontSize: "28px", color: "#10b981", transition: "all 0.3s ease" }}></i>
													</div>
													<h3 style={{ color: "#0f172a", fontSize: "24px", fontWeight: "800", marginBottom: "15px", letterSpacing: "-0.5px" }}>{model.title}</h3>
													<p style={{ color: "#475569", lineHeight: "1.7", fontSize: "16px", margin: "0 0 30px 0" }}>{model.desc}</p>
												</div>

												<div className="card-action" style={{
													color: "#94a3b8",
													fontWeight: "700",
													fontSize: "14px",
													textTransform: "uppercase",
													display: "flex",
													alignItems: "center",
													gap: "8px",
													marginTop: "auto",
													position: "relative",
													zIndex: 1,
													transition: "all 0.3s ease"
												}}>
													Explore Model <i className="fa-solid fa-arrow-right"></i>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* INQUIRY FORM SECTION */}
						<section id="partnership-form" style={{ padding: "0 0 100px 0", backgroundColor: "#020617", position: "relative", zIndex: 5 }}>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div
											style={{
												background: "linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)",
												border: "1px solid rgba(255, 255, 255, 0.1)",
												borderRadius: "30px",
												padding: "50px",
												boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
												position: "relative",
												overflow: "hidden"
											}}
										>
											<div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}></div>
											
											<div className="text-center mb-5">
												<h2 style={{ color: "#ffffff", fontWeight: "700", fontSize: "32px", marginBottom: "15px" }}>Initiate a Partnership</h2>
												<p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>Fill out the form below and our strategic partnership team will review your inquiry.</p>
											</div>

											{formSubmitted ? (
												<div style={{ textAlign: "center", padding: "40px 0" }}>
													<div style={{ 
														width: "80px", height: "80px", background: "rgba(16, 185, 129, 0.1)", 
														borderRadius: "50%", display: "flex", alignItems: "center", 
														justifyContent: "center", margin: "0 auto 20px auto", color: "#10b981", fontSize: "36px"
													}}>
														<i className="fa-solid fa-check"></i>
													</div>
													<h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "15px" }}>Proposal Received</h3>
													<p style={{ color: "rgba(255,255,255,0.7)" }}>Thank you. Our partnership coordinators will review your details and contact you shortly.</p>
												</div>
											) : (
												<form onSubmit={handleSubmit} style={{ width: "100%", position: "relative", zIndex: 2 }}>
													<div className="row g-4">
														<div className="col-md-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Full Name <span style={{ color: "#10b981" }}>*</span></label>
															<input type="text" placeholder="John Doe" required className="ziqora-input" />
														</div>
														<div className="col-md-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Business Email <span style={{ color: "#10b981" }}>*</span></label>
															<input type="email" placeholder="john@company.com" required className="ziqora-input" />
														</div>
														<div className="col-md-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Company Name <span style={{ color: "#10b981" }}>*</span></label>
															<input type="text" placeholder="Company Ltd." required className="ziqora-input" />
														</div>
														<div className="col-md-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Phone Number</label>
															<input type="tel" placeholder="+91 XXXXX XXXXX" className="ziqora-input" />
														</div>
														<div className="col-sm-12">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Partnership Type <span style={{ color: "#10b981" }}>*</span></label>
															<select required defaultValue="" className="ziqora-input" style={{ cursor: "pointer" }}>
																<option value="" disabled style={{ color: "#666" }}>Select partnership area...</option>
																<option value="raw-material" style={{ background: "#0f172a", color: "#fff" }}>Raw Material Sourcing (Polysilicon)</option>
																<option value="off-take" style={{ background: "#0f172a", color: "#fff" }}>Off-Take Agreement (Wafers/Cells)</option>
																<option value="joint-venture" style={{ background: "#0f172a", color: "#fff" }}>R&D Joint Venture</option>
																<option value="investment" style={{ background: "#0f172a", color: "#fff" }}>Strategic Investment / Infrastructure</option>
																<option value="other" style={{ background: "#0f172a", color: "#fff" }}>Other</option>
															</select>
														</div>
														<div className="col-sm-12">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Proposal Details <span style={{ color: "#10b981" }}>*</span></label>
															<textarea placeholder="Please describe your requirements, expected volumes, or partnership proposal..." required className="ziqora-input" style={{ minHeight: "150px", resize: "vertical" }}></textarea>
														</div>
														<div className="col-sm-12 mt-4">
															<button type="submit" style={{
																width: "100%", background: "#10b981", color: "#fff", border: "none", padding: "16px 32px",
																borderRadius: "12px", fontWeight: "700", fontSize: "16px", cursor: "pointer", transition: "all 0.3s"
															}}
															onMouseEnter={(e) => e.target.style.background = "#0ea5e9"}
															onMouseLeave={(e) => e.target.style.background = "#10b981"}
															>
																Submit Partnership Proposal <i className="fa-solid fa-paper-plane ms-2"></i>
															</button>
														</div>
													</div>
												</form>
											)}
										</div>
									</div>
								</div>
							</div>

							<style>{`
								.ziqora-input {
									width: 100%;
									background: rgba(255, 255, 255, 0.03) !important;
									border: 1px solid rgba(255, 255, 255, 0.08) !important;
									color: #ffffff !important;
									padding: 16px 20px;
									border-radius: 12px;
									font-size: 15px;
									outline: none;
									transition: all 0.3s ease;
								}
								.ziqora-input:focus {
									border-color: rgba(16, 185, 129, 0.5) !important;
									background: rgba(255, 255, 255, 0.05) !important;
								}
								.ziqora-input::placeholder {
									color: rgba(255, 255, 255, 0.3);
								}
							`}</style>
						</section>
						
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}
