"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function Sustainability() {
	return (
		<div>
			<title>Sustainability & ESG Roadmap - Ziqora</title>
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
								backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop')",
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
												ENVIRONMENTAL INTEGRITY
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
											Sustainability <br />
											& ESG Roadmap
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
											Planning low-carbon solar cells and wafers manufacturing base with recycling and water recovery mandates.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Sustainability</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Our Commitment */}
						<section
							id="commitment"
							style={{ padding: "100px 0", backgroundColor: "#ffffff" }}
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
											ENVIRONMENTAL INTEGRITY
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Our Commitment
										</h2>
										<p style={{ color: "#64748b" }}>
											Building clean energy infrastructure responsibly is central to our corporate vision.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											{[
												{
													icon: "fa-leaf",
													title: "Energy Efficiency",
													desc: "Planning a factory design that leverages on-site solar arrays and highly efficient heating, ventilation, and cooling systems to reduce operational grid dependence.",
												},
												{
													icon: "fa-droplet",
													title: "Water Conservation",
													desc: "Water is critical for wafer rinsing and ingot cooling. We commit to designing a zero-liquid-discharge (ZLD) water system that recycles up to 90% of process water.",
												},
												{
													icon: "fa-recycle",
													title: "Responsible Resource Management",
													desc: "Envisioning systems to capture and repurpose silicon slurry/kerf loss from diamond wire slicing, reducing raw material waste and avoiding landfill deposition.",
												},
												{
													icon: "fa-hands-holding-child",
													title: "Sustainable Manufacturing Practices",
													desc: "Targeting ISO 14001 environmental compliance from day one of production launch to ensure our operations meet top tier global benchmarks.",
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
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.borderColor = "#e2e8f0";
															e.currentTarget.style.transform = "translateY(0)";
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

						{/* ESG Roadmap */}
						<section
							id="esg-roadmap"
							style={{ padding: "100px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
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
											TIMELINE
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											ESG Roadmap
										</h2>
										<p style={{ color: "#64748b" }}>
											Future-planned environmental, social, and governance milestones as our project progresses.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div
											style={{
												position: "relative",
												paddingLeft: "40px",
												borderLeft: "3px solid #e2e8f0",
											}}
										>
											{[
												{
													year: "2026",
													title: "Project Development Stage",
													desc: "Completing baseline environmental impact assessments, conducting water table feasibility studies, and aligning site layouts with green building standards.",
												},
												{
													year: "2027",
													title: "Construction Phase",
													desc: "Monitoring emissions during civil construction, installing rain harvesting arrays, and building the physical civil shell for the water treatment facility.",
												},
												{
													year: "2028",
													title: "Production Start",
													desc: "Commissioning lines under strict environmental supervision, obtaining ISO certifications, and generating initial solar offsets via our rooftop solar panels.",
												},
												{
													year: "2029",
													title: "Operational Sustainability Programs",
													desc: "Ramping up wastewater reclamation rates to target maximum recycling efficiency and implementing local energy monitoring telemetry.",
												},
												{
													year: "2030",
													title: "Expanded ESG Initiatives",
													desc: "Exploring carbon neutrality audits, publishing our first public GRI-aligned ESG performance indices, and pursuing advanced clean power procurement contracts.",
												},
											].map((item, idx) => (
												<div
													key={idx}
													style={{
														position: "relative",
														marginBottom: "35px",
													}}
												>
													<div
														style={{
															position: "absolute",
															left: "-52px",
															top: "0",
															width: "20px",
															height: "20px",
															borderRadius: "50%",
															background: idx === 0 ? "#10b981" : "#ffffff",
															border: `3px solid ${idx === 0 ? "#10b981" : "#cbd5e1"}`,
															zIndex: 2,
														}}
													></div>
													<div
														style={{
															background: "#ffffff",
															padding: "24px 30px",
															borderRadius: "12px",
															border: "1px solid #e2e8f0",
														}}
													>
														<div
															style={{
																fontSize: "14px",
																fontWeight: "800",
																color: "#10b981",
																marginBottom: "8px",
															}}
														>
															{item.year}
														</div>
														<h4 style={{ color: "#0a1931", fontWeight: "800", fontSize: "18px", marginBottom: "8px" }}>
															{item.title}
														</h4>
														<p style={{ color: "#64748b", margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
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

						{/* Community Impact */}
						<section
							id="community-impact"
							style={{ padding: "100px 0", backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-center">
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
													SOCIAL RESPONSIBILITY
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "20px" }}>
													Community Impact
												</h2>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
													Establishing our project base in Odisha represents a commitment to the regional community. As Ziqora moves towards construction and operations, we aim to become an engine of local development.
												</p>
												<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
													{[
														{ title: "Local Employment", desc: "Prioritizing local communities in Odisha for construction jobs and operational staff recruitment." },
														{ title: "Skill Development", desc: "Establishing training initiatives to teach technical skills related to solar fabrication and automated systems management." },
														{ title: "Community Engagement", desc: "Fostering transparency through open communications with local government representatives and community leaders." },
														{ title: "Regional Industrial Growth", desc: "Catalyzing ancillary micro-businesses and supplier networks to build an industrial hub inside Odisha." },
													].map((item, index) => (
														<li key={index} style={{ marginBottom: "15px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
															<i className="fa-solid fa-circle-check" style={{ color: "#10b981", marginTop: "4px" }}></i>
															<div>
																<strong style={{ color: "#0a1931" }}>{item.title}:</strong>{" "}
																<span style={{ color: "#64748b" }}>{item.desc}</span>
															</div>
														</li>
													))}
												</ul>
											</div>
											<div className="col-lg-6 text-center">
												<div
													style={{
														position: "relative",
														borderRadius: "16px",
														overflow: "hidden",
														boxShadow: "0 20px 40px rgba(10,25,49,0.05)",
													}}
												>
													<img
														src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
														alt="Hands holding young plant representing social impact"
														style={{ maxWidth: "100%", height: "auto", display: "block" }}
													/>
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
