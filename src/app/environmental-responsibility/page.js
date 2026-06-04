"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function EnvironmentalResponsibility() {
	return (
		<div style={{ backgroundColor: "#070f1e", minHeight: "100vh" }}>
			<title>Environmental Responsibility - Ziqora</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						
						{/* Hero Page Title */}
						<section
							className="section-gap"
							style={{
								position: "relative",
								minHeight: "100vh", display: "flex", alignItems: "center",
								backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-1e97d5259d52?q=80&w=1600&auto=format&fit=crop')",
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
									background: "linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(10, 25, 49, 0.7) 100%)",
									zIndex: 1,
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
											<span style={{ width: "30px", height: "2px", background: "#ffffff" }}></span>
											<span
												style={{
													color: "#ffffff",
													fontWeight: "700",
													textTransform: "uppercase",
													letterSpacing: "2px",
													fontSize: "12px",
												}}
											>
												SUSTAINABLE MANUFACTURING
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
											Environmental <br />
											Responsibility
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
											Engineering a sustainable future by minimizing our ecological footprint and championing clean energy manufacturing practices at every stage of solar module production.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#ffffff", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Environmental Responsibility</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Core Environmental Principles */}
						<section
							id="principles"
							className="section-gap-2"
							style={{ backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-center text-center mb-5">
									<div className="col-lg-8">
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
											OUR SUSTAINABILITY PILLARS
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Sustainable Manufacturing Principles
										</h2>
										<p style={{ color: "#64748b" }}>
											We believe that building next-generation solar technology requires an uncompromising dedication to protecting the planet throughout our supply chain and manufacturing operations.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											{[
												{
													icon: "fa-cloud",
													title: "Carbon Footprint Reduction",
													desc: "Implementing advanced emission control systems and powering our solar module gigafactories with renewable energy to strive towards a net-zero operational footprint.",
												},
												{
													icon: "fa-water",
													title: "Zero-Liquid-Discharge",
													desc: "Deploying state-of-the-art ZLD technology in our wafer and cell manufacturing processes to ensure all process water is purified, recycled, and reused.",
												},
												{
													icon: "fa-recycle",
													title: "Material Circularity",
													desc: "Designing our manufacturing processes to recover and reuse critical raw materials like silicon kerf and silver paste, dramatically reducing industrial waste.",
												},
												{
													icon: "fa-leaf",
													title: "Eco-Friendly Architecture",
													desc: "Building our gigafactories with green materials, optimized natural lighting, and high-efficiency HVAC systems to minimize energy draw.",
												},
											].map((item, idx) => (
												<div key={idx} className="col-md-6 mb-4">
													<div
														style={{
															padding: "35px",
															background: "#f8fafc",
															border: "1px solid #e2e8f0",
															borderRadius: "16px",
															height: "100%",
															transition: "all 0.3s ease",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.borderColor = "#10b981";
															e.currentTarget.style.transform = "translateY(-3px)";
															e.currentTarget.style.boxShadow = "0 10px 20px rgba(16, 185, 129, 0.05)";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.borderColor = "#e2e8f0";
															e.currentTarget.style.transform = "translateY(0)";
															e.currentTarget.style.boxShadow = "none";
														}}
													>
														<div style={{ fontSize: "28px", color: "#10b981", marginBottom: "20px" }}>
															<i className={`fa-solid ${item.icon}`}></i>
														</div>
														<h4 style={{ color: "#0a1931", fontWeight: "800", fontSize: "20px", marginBottom: "12px" }}>
															{item.title}
														</h4>
														<p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
															{item.desc}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Ecological Preservation */}
						<section
							id="preservation"
							className="section-gap-2"
							style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
						>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row align-items-center">
											<div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
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
													ECOSYSTEM INTEGRATION
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "20px" }}>
													Ecosystem Integration
												</h2>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
													Our solar manufacturing facilities are designed to harmoniously integrate with their surroundings. Before breaking ground on new gigafactories, we conduct comprehensive environmental assessments to ensure local ecosystems remain undisturbed.
												</p>
												<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
													{[
														{ title: "Biodiversity Protection", desc: "Establishing buffer zones around our plants to protect local flora and fauna." },
														{ title: "Soil Health", desc: "Using advanced containment protocols to prevent any chemical or heavy metal soil contamination." },
														{ title: "Air Quality Monitoring", desc: "Continuous, real-time monitoring of air particulates to ensure we remain far below regulatory emission limits." },
													].map((item, index) => (
														<li key={index} style={{ marginBottom: "15px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
															<i className="fa-solid fa-check-double" style={{ color: "#10b981", marginTop: "4px" }}></i>
															<div>
																<strong style={{ color: "#0a1931" }}>{item.title}:</strong>{" "}
																<span style={{ color: "#64748b" }}>{item.desc}</span>
															</div>
														</li>
													))}
												</ul>
											</div>
											<div className="col-lg-6 text-center order-lg-1 pr-lg-5">
												<div
													style={{
														position: "relative",
														borderRadius: "16px",
														overflow: "hidden",
														boxShadow: "0 20px 40px rgba(10,25,49,0.05)",
													}}
												>
													<img
														src="/images/solar-eco-integration-ai.png"
														alt="Advanced water purification and environmental monitoring facility"
														style={{ maxWidth: "100%", height: "auto", display: "block" }}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						
						{/* Compliance & Standards */}
						<section
							id="compliance"
							className="section-gap-2"
							style={{ backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-center text-center mb-5">
									<div className="col-lg-8">
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Global Standards & Compliance
										</h2>
										<p style={{ color: "#64748b" }}>
											We do not just meet regulatory requirements; we aim to exceed them. Our operational roadmap includes stringent adherence to global environmental frameworks.
										</p>
									</div>
								</div>
								
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<div style={{ background: "#0a1931", borderRadius: "16px", padding: "40px", color: "white", textAlign: "center", position: "relative", overflow: "hidden" }}>
											<div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0) 70%)", zIndex: 0 }}></div>
											<div style={{ position: "relative", zIndex: 1 }}>
												<h3 style={{ color: "#10b981", fontSize: "24px", marginBottom: "15px", fontWeight: "700" }}>ISO 14001 Targeted Facility</h3>
												<p style={{ opacity: 0.8, lineHeight: "1.7", marginBottom: "30px", fontSize: "16px" }}>
													From day one, our infrastructure and management systems are being architected to comply with ISO 14001 standard for Environmental Management Systems (EMS). This ensures continuous improvement in our environmental performance.
												</p>
												<Link href="/contact" style={{ display: "inline-block", background: "#10b981", color: "#ffffff", padding: "12px 30px", borderRadius: "50px", fontWeight: "600", textDecoration: "none", transition: "background 0.3s" }}>
													Learn More About Our Operations
												</Link>
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
