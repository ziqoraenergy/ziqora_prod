"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function Project() {
	return (
		<div>
			<title>Our Project - Ziqora Solar Manufacturing Vision</title>
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
								backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop')",
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
												INDUSTRIAL CAPACITY
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
											Our Project <br />
											& Growth Roadmap
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
											Detailing the planned infrastructures, capacity metrics, and phased milestones for our manufacturing base in Odisha, India.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Our Project</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Project Overview */}
						<section
							id="overview"
							style={{ padding: "100px 0", backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row align-items-center mb-5">
											<div className="col-lg-6">
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
													PROJECT OVERVIEW
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "20px" }}>
													Manufacturing Base in Odisha
												</h2>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
													Ziqora is establishing a state-of-the-art manufacturing project base in **Odisha, India**. Choosing Odisha provides us with key logistical advantages, including ready access to deepwater ports, excellent power grid infrastructure, and state-backed incentives for clean energy industrial expansion.
												</p>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
													Our facility is designed to host highly automated lines for slicing silicon ingots into wafers and processing those wafers into high-efficiency solar cells, filling a critical gap in the domestic photovoltaic value chain.
												</p>
											</div>
											<div className="col-lg-6 mt-4 mt-lg-0">
												<div
													style={{
														background: "#f8fafc",
														padding: "40px",
														borderRadius: "16px",
														border: "1px solid #e2e8f0",
													}}
												>
													<h4 style={{ color: "#0a1931", fontWeight: "800", marginBottom: "20px", borderBottom: "2px solid #e2e8f0", paddingBottom: "10px" }}>
														Planned Infrastructure
													</h4>
													<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
														<li style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
															<strong style={{ color: "#0a1931" }}>Location:</strong>
															<span style={{ color: "#64748b" }}>Odisha, India</span>
														</li>
														<li style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
															<strong style={{ color: "#0a1931" }}>Planned Manufacturing:</strong>
															<span style={{ color: "#64748b" }}>Solar Wafers & Cells</span>
														</li>
														<li style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
															<strong style={{ color: "#0a1931" }}>Planned Wafer Capacity:</strong>
															<span style={{ color: "#10b981", fontWeight: "700" }}>5 GW</span>
														</li>
														<li style={{ display: "flex", justifyContent: "space-between" }}>
															<strong style={{ color: "#0a1931" }}>Planned Cell Capacity:</strong>
															<span style={{ color: "#10b981", fontWeight: "700" }}>5 GW</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Manufacturing Vision */}
						<section
							id="vision"
							style={{ padding: "100px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}
						>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row align-items-center">
											<div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
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
													FUTURE CAPABILITIES
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "25px" }}>
													Manufacturing Vision
												</h2>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
													Our industrial vision centers on smart, scalable, and automated factory setups. By implementing Industry 4.0 principles, we aim to build a zero-tolerance quality inspection pipeline featuring AI-driven diagnostics at every slicing, etching, and chemical diffusion stage.
												</p>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
													This automated framework will allow us to achieve high-throughput yields, minimize material wastage, and maintain consistent mechanical and electrical standards across all output wafer lots and solar cell grids.
												</p>
											</div>
											<div className="col-lg-6 order-lg-1 text-center">
												<div
													style={{
														position: "relative",
														borderRadius: "16px",
														overflow: "hidden",
														boxShadow: "0 20px 40px rgba(10,25,49,0.05)",
													}}
												>
													<img
														src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
														alt="Automation and industrial robots"
														style={{ maxWidth: "100%", height: "auto", display: "block" }}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Growth Roadmap */}
						<section
							id="roadmap"
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
											MILESTONES
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Growth Roadmap
										</h2>
										<p style={{ color: "#64748b" }}>
											Our planned phases towards launching and scaling domestic solar component fabrication.
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
													phase: "Phase 1",
													title: "Project Development (Current)",
													desc: "Focusing on feasibility studies, environmental impact assessments, land procurement in Odisha, conceptual factory blueprints, and raw materials sourcing arrangements.",
													status: "Active",
												},
												{
													phase: "Phase 2",
													title: "Manufacturing Setup",
													desc: "Civil construction of factory buildings, procurement of high-precision ingot pullers, wafer slicers, and cell diffusion machinery, followed by utilities integration.",
													status: "Planned",
												},
												{
													phase: "Phase 3",
													title: "Production Launch",
													desc: "Commissioning test production runs, debugging assembly lines, obtaining national and international product certifications, and ramp-up to initial commercial output.",
													status: "Planned",
												},
												{
													phase: "Phase 4",
													title: "Capacity Expansion",
													desc: "Scaling production lines to reach full 5 GW annual wafer slicing and 5 GW cell processing throughput capacity to service module manufacturers across India.",
													status: "Planned",
												},
												{
													phase: "Phase 5",
													title: "Technology Advancement",
													desc: "Integrating next-generation cell designs (such as TOPCon and HJT cells) and advanced materials research to continuously improve module conversion efficiency.",
													status: "Planned",
												},
											].map((item, idx) => (
												<div
													key={idx}
													style={{
														position: "relative",
														marginBottom: "40px",
													}}
												>
													{/* Dot icon */}
													<div
														style={{
															position: "absolute",
															left: "-52px",
															top: "0",
															width: "20px",
															height: "20px",
															borderRadius: "50%",
															background: item.status === "Active" ? "#10b981" : "#ffffff",
															border: `3px solid ${item.status === "Active" ? "#10b981" : "#cbd5e1"}`,
															zIndex: 2,
														}}
													></div>

													<div
														style={{
															background: "#f8fafc",
															padding: "24px 30px",
															borderRadius: "12px",
															border: "1px solid #e2e8f0",
														}}
													>
														<div
															style={{
																display: "flex",
																justifyContent: "space-between",
																alignItems: "center",
																flexWrap: "wrap",
																marginBottom: "10px",
																gap: "10px",
															}}
														>
															<span style={{ fontSize: "14px", fontWeight: "700", color: "#10b981", textTransform: "uppercase" }}>
																{item.phase}
															</span>
															<span
																style={{
																	fontSize: "12px",
																	fontWeight: "700",
																	background: item.status === "Active" ? "rgba(16,185,129,0.15)" : "#e2e8f0",
																	color: item.status === "Active" ? "#10b981" : "#64748b",
																	padding: "4px 10px",
																	borderRadius: "30px",
																}}
															>
																{item.status}
															</span>
														</div>
														<h4 style={{ color: "#0a1931", fontWeight: "800", marginBottom: "10px", fontSize: "20px" }}>
															{item.title}
														</h4>
														<p style={{ color: "#475569", margin: 0, fontSize: "15px", lineHeight: "1.6" }}>
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
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
