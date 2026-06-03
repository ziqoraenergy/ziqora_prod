"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { useState, useEffect } from "react";

export default function Contact() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		businessEmail: "",
		companyName: "",
		phoneNumber: "",
		subject: "",
		projectDetails: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			
			if (res.ok) {
				setFormSubmitted(true);
			} else {
				const data = await res.json();
				alert(data.error || "Failed to submit inquiry. Please try again.");
			}
		} catch (error) {
			console.error(error);
			alert("An error occurred. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
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
			}, 300);
		});
		return () => { if (timer) clearTimeout(timer); };
	}, []);

	return (
		<div>
			<title>Contact Ziqora - Premium Energy Platform</title>
			<BackToTop />
			<Header />
			
			<div id="smooth-wrapper" style={{ overflowX: "hidden", width: "100%", backgroundColor: "#020617" }}>
				<div id="smooth-content">
					<main style={{ backgroundColor: "#020617", minHeight: "100vh" }}>
						
						{/* 1. Stunning Hero Section with Solar Background */}
						<section
							style={{
								position: "relative",
								minHeight: "100vh",
								display: "flex",
								alignItems: "center",
								padding: "150px 0 100px 0",
								backgroundColor: "#020617",
								backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')", // The very first picture (solar sunset)
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundAttachment: "fixed", // Parallax effect
							}}
						>
							{/* Gradient Overlay for elegance and blending into the page */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.8) 0%, rgba(2, 6, 23, 0.4) 50%, #020617 100%)",
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
									Global Operations
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
									Contact Ziqora
								</h1>
								<p
									style={{
										fontSize: "18px",
										color: "rgba(255, 255, 255, 0.75)",
										maxWidth: "700px",
										margin: "0 auto",
										lineHeight: "1.7",
										fontWeight: "400"
									}}
								>
									Powering India's clean energy independence. Connect with our dedicated divisions for high-purity silicon supplies, high-efficiency cell partnerships, and strategic inquiries.
								</p>
							</div>
						</section>

						{/* 2. Glassmorphic Overlapping Contact Panel */}
						<section style={{ position: "relative", zIndex: 10, marginTop: "-160px", paddingBottom: "120px" }}>
							<div className="container">
								<div 
									className="contact-master-panel"
									style={{
										background: "rgba(15, 23, 42, 0.6)",
										backdropFilter: "blur(20px)",
										WebkitBackdropFilter: "blur(20px)",
										border: "1px solid rgba(255, 255, 255, 0.08)",
										borderRadius: "30px",
										overflow: "hidden",
										boxShadow: "0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
									}}
								>
									<div className="row g-0">
										
										{/* Left Side: Direct Contacts (Darker Panel) */}
										<div className="col-lg-5" style={{ background: "rgba(2, 6, 23, 0.5)", padding: "60px 50px" }}>
											<h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "28px", marginBottom: "40px" }}>
												Our Divisions
											</h3>

											<div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
												
												{/* Card 1: Silicon */}
												<div className="contact-info-card" style={{ display: "flex", gap: "20px" }}>
													<div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontSize: "20px", flexShrink: 0 }}>
														<i className="fa-solid fa-cube"></i>
													</div>
													<div>
														<h4 style={{ color: "#ffffff", fontSize: "19px", fontWeight: "700", marginBottom: "15px", lineHeight: "1.3" }}>
															High-purity<br/>Crystalline Silicon
														</h4>
														<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
															<a href="tel:+916743513070" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px", transition: "color 0.3s" }} className="hover-green">
																<i className="fa-solid fa-phone" style={{ fontSize: "13px" }}></i> +91 674 351 3070
															</a>
															<a href="mailto:office@ziqora.energy" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px", transition: "color 0.3s" }} className="hover-green">
																<i className="fa-solid fa-envelope" style={{ fontSize: "13px" }}></i> office@ziqora.energy
															</a>
														</div>
													</div>
												</div>

												<div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%)" }}></div>

												{/* Card 2: Cell */}
												<div className="contact-info-card" style={{ display: "flex", gap: "20px" }}>
													<div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontSize: "20px", flexShrink: 0 }}>
														<i className="fa-solid fa-solar-panel"></i>
													</div>
													<div>
														<h4 style={{ color: "#ffffff", fontSize: "19px", fontWeight: "700", marginBottom: "15px", lineHeight: "1.3" }}>
															High-efficiency<br/>Cell
														</h4>
														<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
															<a href="tel:+916743513071" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px", transition: "color 0.3s" }} className="hover-green">
																<i className="fa-solid fa-phone" style={{ fontSize: "13px" }}></i> +91 674 351 3071
															</a>
															<a href="mailto:info@ziqora.energy" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px", transition: "color 0.3s" }} className="hover-green">
																<i className="fa-solid fa-envelope" style={{ fontSize: "13px" }}></i> info@ziqora.energy
															</a>
														</div>
													</div>
												</div>

											</div>
										</div>

										{/* Right Side: Contact Form */}
										<div className="col-lg-7" style={{ padding: "60px 50px" }}>
											<h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "28px", marginBottom: "10px" }}>
												Send an Inquiry
											</h3>
											<p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", marginBottom: "40px" }}>
												Fill out the form below and our project coordinators will be in touch shortly.
											</p>

											{formSubmitted ? (
												<div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "16px", padding: "40px", textAlign: "center" }}>
													<div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#10b981", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "24px", marginBottom: "20px", boxShadow: "0 10px 20px rgba(16,185,129,0.3)" }}>
														<i className="fa-solid fa-check"></i>
													</div>
													<h4 style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>Transmission Successful</h4>
													<p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
												</div>
											) : (
												<form onSubmit={handleSubmit}>
													<div className="row g-4">
														<div className="col-sm-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Full Name <span style={{ color: "#10b981" }}>*</span></label>
															<input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" required className="ziqora-input" />
														</div>
														<div className="col-sm-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Business Email <span style={{ color: "#10b981" }}>*</span></label>
															<input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} placeholder="john@company.com" required className="ziqora-input" />
														</div>
														<div className="col-sm-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Company Name <span style={{ color: "#10b981" }}>*</span></label>
															<input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g. Ziqora Corp" required className="ziqora-input" />
														</div>
														<div className="col-sm-6">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Phone Number</label>
															<input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="ziqora-input" />
														</div>
														<div className="col-sm-12">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Subject <span style={{ color: "#10b981" }}>*</span></label>
															<input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject of your message" required className="ziqora-input" />
														</div>
														<div className="col-sm-12">
															<label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Project Details & Requirements <span style={{ color: "#10b981" }}>*</span></label>
															<textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} placeholder="Please describe your requirements, expected volumes, or partnership proposal..." required className="ziqora-input" style={{ minHeight: "150px", resize: "vertical" }}></textarea>
														</div>
														<div className="col-sm-12 mt-4">
															<button type="submit" disabled={isSubmitting} className="ziqora-submit-btn" style={{ width: "100%", justifyContent: "center", padding: "18px", opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}>
																{isSubmitting ? "Sending Inquiry..." : "Submit Business Inquiry"} {isSubmitting ? <i className="fa-solid fa-spinner fa-spin" style={{ marginLeft: "10px", fontSize: "15px" }}></i> : <i className="fa-solid fa-paper-plane" style={{ marginLeft: "10px", fontSize: "15px" }}></i>}
															</button>
														</div>
													</div>
												</form>
											)}
										</div>

									</div>
								</div>
							</div>
						</section>

						{/* Internal Styling */}
						<style>{`
							.hover-green:hover { color: #10b981 !important; }
							
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
								background: rgba(255, 255, 255, 0.05);
								border-color: #10b981;
								box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
							}
							.ziqora-input::placeholder {
								color: rgba(255, 255, 255, 0.3);
							}
							
							.ziqora-submit-btn {
								background: #10b981;
								color: #ffffff;
								border: none;
								padding: 16px 36px;
								border-radius: 12px;
								font-size: 16px;
								font-weight: 600;
								cursor: pointer;
								transition: all 0.3s ease;
								display: inline-flex;
								align-items: center;
							}
							.ziqora-submit-btn:hover {
								background: #059669;
								transform: translateY(-2px);
								box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
							}

							@media (max-width: 991px) {
								.contact-master-panel {
									border-radius: 20px !important;
								}
								.col-lg-5, .col-lg-7 {
									padding: 40px 30px !important;
								}
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
