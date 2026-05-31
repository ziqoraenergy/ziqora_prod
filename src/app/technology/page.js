"use client";

import { useState } from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

const manufacturingSteps = [
	{
		id: "ingot",
		stepNum: "01",
		title: "Ingot Crystallization",
		subtitle: "Monocrystalline Growth",
		desc: "Envisioning advanced ingot pullers that melt polysilicon to grow single-crystal monocrystalline ingots with consistent molecular layouts. The Czochralski (CZ) process is used to grow ingots under ultra-clean, vacuum-controlled conditions, ensuring near-zero defects.",
		specs: [
			{ label: "Crucible Temp", value: "~1,420°C" },
			{ label: "Pulling Speed", value: "0.8-2.5 mm/min" },
			{ label: "Argon Flow", value: "80-120 L/min" },
			{ label: "Diameter", value: "M10 / G12" },
			{ label: "Yield", value: "> 92%" },
			{ label: "Carbon Conc", value: "< 5.0×10¹⁵/cm³" }
		],
		equipment: "Czochralski (CZ) Monocrystalline Puller Furnace",
		blueprintTitle: "CZOCHRALSKI MONO-INGOT GROWTH",
	},
	{
		id: "wafer",
		stepNum: "02",
		title: "Wafer Slicing",
		subtitle: "Diamond Wire Slicing",
		desc: "Utilizing modern diamond wire cutting systems to slice silicon ingots into ultra-thin wafers (under 130 microns) with minimal surface damage. High-speed wire webs coated with microscopic diamonds slice through the ingot with high precision, maximizing yield and reducing kerf loss.",
		specs: [
			{ label: "Wire Diameter", value: "35 μm - 47 μm" },
			{ label: "Thickness", value: "< 130 μm" },
			{ label: "Kerf Loss", value: "< 12 μm" },
			{ label: "Web Speed", value: "24 - 30 m/s" },
			{ label: "Thickness Var.", value: "< 3 μm" },
			{ label: "Slicing Cycle", value: "~1.5 hours" }
		],
		equipment: "High-Speed Diamond Wire Sawing System",
		blueprintTitle: "DIAMOND WIRE PRECISION SLICING",
	},
	{
		id: "cell",
		stepNum: "03",
		title: "Solar Cell Processing",
		subtitle: "Advanced Cell Diffusion & Junction",
		desc: "Envisioning chemical etching, texturing, and pn-junction formation via diffusion to convert raw silicon wafers into active photovoltaic solar cells. The process involves alkaline texturing to create light-trapping micro-pyramids, phosphorus diffusion for the emitter, and thin-film passivation.",
		specs: [
			{ label: "Target Eff.", value: "25.5% - 26.5%" },
			{ label: "Morphology", value: "Random Pyramids" },
			{ label: "Junction Depth", value: "0.3 - 0.5 μm" },
			{ label: "Passivation", value: "Al₂O₃ / SiNx" },
			{ label: "Finger Width", value: "15 - 18 μm" },
			{ label: "Busbar Config", value: "16BB - 18BB" }
		],
		equipment: "PECVD Passivation & Phosphorus Diffusion Tube Furnaces",
		blueprintTitle: "TOPCON METALLIZATION & PN-JUNCTION MATRIX",
	}
];

export default function Technology() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div>
			<title>Technology & Innovation - Ziqora Solar Manufacturing</title>
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
								backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",
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
												TECHNOLOGICAL ECOSYSTEM
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
											Technology <br />
											& Solar Innovations
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
											Outlining monocrystalline silicon ingot casting, wire slicing, and automated cell diffusion processing frameworks.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Technology</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Solar Manufacturing Ecosystem */}
						<section
							id="ecosystem"
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
											VALUE CHAIN
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Solar Manufacturing Ecosystem
										</h2>
										<p style={{ color: "#64748b" }}>
											Our interactive, engineering-level view of our core planned manufacturing operations in Odisha.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-12">
										<div className="row g-4">
											{/* Left Column: Interactive Steps & Details */}
											<div className="col-lg-5">
												<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
													{manufacturingSteps.map((step, idx) => (
														<button
															key={step.id}
															onClick={() => setActiveStep(idx)}
															style={{
																textAlign: "left",
																padding: "20px",
																background: activeStep === idx ? "#f8fafc" : "#ffffff",
																border: "1px solid " + (activeStep === idx ? "#10b981" : "#e2e8f0"),
																boxShadow: activeStep === idx ? "0 4px 20px rgba(16, 185, 129, 0.08)" : "none",
																borderRadius: "12px",
																cursor: "pointer",
																transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
																display: "flex",
																alignItems: "center",
																gap: "20px",
																width: "100%",
																outline: "none"
															}}
														>
															<div
																style={{
																	fontSize: "24px",
																	fontWeight: "900",
																	color: activeStep === idx ? "#10b981" : "#cbd5e1",
																	transition: "color 0.3s ease"
																}}
															>
																{step.stepNum}
															</div>
															<div style={{ flex: 1 }}>
																<h4
																	style={{
																		color: "#0a1931",
																		fontWeight: "800",
																		fontSize: "16px",
																		margin: "0 0 4px 0",
																		transition: "color 0.3s ease"
																	}}
																>
																	{step.title}
																</h4>
																<span
																	style={{
																		color: activeStep === idx ? "#10b981" : "#94a3b8",
																		fontSize: "12px",
																		fontWeight: "600",
																		textTransform: "uppercase",
																		letterSpacing: "1px",
																		transition: "color 0.3s ease"
																	}}
																>
																	{step.subtitle}
																</span>
															</div>
															<div
																style={{
																	width: "8px",
																	height: "8px",
																	borderRadius: "50%",
																	background: activeStep === idx ? "#10b981" : "transparent",
																	transition: "all 0.3s ease"
																}}
															></div>
														</button>
													))}
												</div>

												{/* Step Details Card */}
												<div
													style={{
														marginTop: "30px",
														padding: "30px",
														background: "#f8fafc",
														border: "1px solid #e2e8f0",
														borderRadius: "12px",
														animation: "fadeIn 0.5s ease"
													}}
												>
													<span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#10b981", display: "block", marginBottom: "8px" }}>
														EQUIPMENT / TECHNOLOGY
													</span>
													<h4 style={{ color: "#0a1931", fontWeight: "800", fontSize: "18px", marginBottom: "15px" }}>
														{manufacturingSteps[activeStep].equipment}
													</h4>
													<p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "0" }}>
														{manufacturingSteps[activeStep].desc}
													</p>
												</div>
											</div>

											{/* Right Column: CAD/Blueprint Viewport */}
											<div className="col-lg-7">
												<div
													style={{
														background: "#0f172a",
														border: "2px solid #1e293b",
														borderRadius: "16px",
														padding: "24px",
														height: "100%",
														minHeight: "450px",
														position: "relative",
														display: "flex",
														flexDirection: "column",
														boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)"
													}}
												>
													{/* Simulated Blueprint Header/Telemetry */}
													<div
														style={{
															display: "flex",
															justifyContent: "space-between",
															alignItems: "center",
															borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
															paddingBottom: "12px",
															marginBottom: "20px"
														}}
													>
														<div>
															<div
																style={{
																	color: "#10b981",
																	fontFamily: "monospace",
																	fontSize: "11px",
																	fontWeight: "bold",
																	letterSpacing: "1px"
																}}
															>
																SYSTEM.PRERENDER // {manufacturingSteps[activeStep].blueprintTitle}
															</div>
															<div
																style={{
																	color: "rgba(255, 255, 255, 0.4)",
																	fontFamily: "monospace",
																	fontSize: "9px",
																	marginTop: "2px"
																}}
															>
																STATUS: ENVISIONED_SIMULATION_ACTIVE // SCALE: 1:12.5
															</div>
														</div>
														<div
															style={{
																display: "flex",
																gap: "6px"
															}}
														>
															<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }}></span>
															<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#eab308" }}></span>
															<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }}></span>
														</div>
													</div>

													{/* SVG Render Port */}
													<div
														style={{
															flex: 1,
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															background: "rgba(15, 23, 42, 0.6)",
															borderRadius: "8px",
															border: "1px dashed rgba(255, 255, 255, 0.05)",
															position: "relative",
															overflow: "hidden"
														}}
													>
														{/* Crosshair indicators */}
														<div style={{ position: "absolute", top: "10px", left: "10px", width: "10px", height: "10px", borderLeft: "1px solid rgba(16, 185, 129, 0.3)", borderTop: "1px solid rgba(16, 185, 129, 0.3)" }}></div>
														<div style={{ position: "absolute", top: "10px", right: "10px", width: "10px", height: "10px", borderRight: "1px solid rgba(16, 185, 129, 0.3)", borderTop: "1px solid rgba(16, 185, 129, 0.3)" }}></div>
														<div style={{ position: "absolute", bottom: "10px", left: "10px", width: "10px", height: "10px", borderLeft: "1px solid rgba(16, 185, 129, 0.3)", borderBottom: "1px solid rgba(16, 185, 129, 0.3)" }}></div>
														<div style={{ position: "absolute", bottom: "10px", right: "10px", width: "10px", height: "10px", borderRight: "1px solid rgba(16, 185, 129, 0.3)", borderBottom: "1px solid rgba(16, 185, 129, 0.3)" }}></div>

														{activeStep === 0 && (
															<svg viewBox="0 0 500 400" width="100%" height="100%" style={{ background: "transparent" }}>
																<defs>
																	<pattern id="blueprint-grid-0" width="20" height="20" patternUnits="userSpaceOnUse">
																		<path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.07)" strokeWidth="1" />
																	</pattern>
																	<radialGradient id="molten-glow" cx="50%" cy="50%" r="50%">
																		<stop offset="0%" stopColor="#fff7ed" stopOpacity="1" />
																		<stop offset="20%" stopColor="#ffedd5" stopOpacity="1" />
																		<stop offset="60%" stopColor="#f97316" stopOpacity="0.8" />
																		<stop offset="100%" stopColor="#7c2d12" stopOpacity="0" />
																	</radialGradient>
																	<linearGradient id="ingot-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
																		<stop offset="0%" stopColor="#475569" />
																		<stop offset="30%" stopColor="#64748b" />
																		<stop offset="50%" stopColor="#94a3b8" />
																		<stop offset="70%" stopColor="#64748b" />
																		<stop offset="100%" stopColor="#475569" />
																	</linearGradient>
																</defs>
																
																<rect width="100%" height="100%" fill="url(#blueprint-grid-0)" />
																
																{/* Furnace Outer Shell */}
																<rect x="120" y="40" width="260" height="320" rx="10" fill="none" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
																<rect x="130" y="50" width="240" height="300" rx="8" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1.5" />
																
																{/* Water Cooling Channels */}
																<path d="M 120 80 H 130 M 120 120 H 130 M 120 160 H 130 M 120 200 H 130 M 120 240 H 130 M 120 280 H 130" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
																<path d="M 380 80 H 370 M 380 120 H 370 M 380 160 H 370 M 380 200 H 370 M 380 240 H 370 M 380 280 H 370" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
																
																{/* Heaters */}
																<rect x="145" y="120" width="15" height="150" fill="none" stroke="#f97316" strokeWidth="2" />
																<line x1="152.5" y1="125" x2="152.5" y2="265" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
																<rect x="340" y="120" width="15" height="150" fill="none" stroke="#f97316" strokeWidth="2" />
																<line x1="347.5" y1="125" x2="347.5" y2="265" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
																<text x="145" y="110" fill="#f97316" fontSize="10" fontFamily="monospace">HEATER</text>
																<text x="340" y="110" fill="#f97316" fontSize="10" fontFamily="monospace" textAnchor="end">HEATER</text>

																{/* Crucible */}
																<path d="M 175 220 V 280 Q 175 300 195 300 H 305 Q 325 300 325 280 V 220" fill="none" stroke="#94a3b8" strokeWidth="3" />
																
																{/* Molten Silicon Glow & Melt Pool */}
																<path d="M 177 220 V 280 Q 177 298 195 298 H 305 Q 323 298 323 280 V 220 Z" fill="url(#molten-glow)" />
																<ellipse cx="250" cy="220" rx="72" ry="15" fill="#ea580c" opacity="0.9" />
																<ellipse cx="250" cy="220" rx="60" ry="10" fill="#f97316" />
																<ellipse cx="250" cy="220" rx="40" ry="6" fill="#ffedd5" />
																
																{/* Growing Ingot */}
																<path d="M 220 220 L 222 215 V 100 L 220 95 H 280 L 278 100 V 215 L 280 220 Z" fill="url(#ingot-gradient)" stroke="#cbd5e1" strokeWidth="1.5" />
																{/* Solidification Interface */}
																<path d="M 220 220 Q 250 226 280 220" fill="none" stroke="#ffffff" strokeWidth="2" />
																
																{/* Seed Pull Mechanism */}
																<line x1="250" y1="95" x2="250" y2="45" stroke="#94a3b8" strokeWidth="2" />
																<rect x="245" y="45" width="10" height="15" fill="#475569" stroke="#cbd5e1" />
																
																{/* Technical Text overlays */}
																<line x1="280" y1="150" x2="400" y2="150" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="280" cy="150" r="3" fill="#10b981" />
																<text x="405" y="153" fill="#10b981" fontSize="11" fontFamily="monospace">MONO-CRYSTAL INGOT</text>
																
																<line x1="300" y1="220" x2="400" y2="185" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="300" cy="220" r="3" fill="#10b981" />
																<text x="405" y="188" fill="#10b981" fontSize="11" fontFamily="monospace">MELTING ZONE (~1420°C)</text>
																
																<line x1="250" y1="75" x2="80" y2="75" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="250" cy="75" r="3" fill="#10b981" />
																<text x="75" y="78" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="end">SEED PULL</text>

																<line x1="175" y1="260" x2="80" y2="260" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="175" cy="260" r="3" fill="#10b981" />
																<text x="75" y="263" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="end">QUARTZ CRUCIBLE</text>

																{/* Calibration Marks */}
																<path d="M 20 40 H 30 M 20 200 H 30 M 20 360 H 30 M 20 40 V 360" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
																<text x="35" y="44" fill="rgba(16, 185, 129, 0.5)" fontSize="9" fontFamily="monospace">z = 320mm</text>
																<text x="35" y="204" fill="rgba(16, 185, 129, 0.5)" fontSize="9" fontFamily="monospace">z = 160mm</text>
																<text x="35" y="364" fill="rgba(16, 185, 129, 0.5)" fontSize="9" fontFamily="monospace">z = 0mm</text>
															</svg>
														)}

														{activeStep === 1 && (
															<svg viewBox="0 0 500 400" width="100%" height="100%" style={{ background: "transparent" }}>
																<defs>
																	<pattern id="blueprint-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
																		<path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.07)" strokeWidth="1" />
																	</pattern>
																	<linearGradient id="silicon-ingot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
																		<stop offset="0%" stopColor="#334155" />
																		<stop offset="50%" stopColor="#475569" />
																		<stop offset="100%" stopColor="#1e293b" />
																	</linearGradient>
																</defs>
																
																<rect width="100%" height="100%" fill="url(#blueprint-grid-1)" />
																
																{/* Silicon Ingot Cylinder (Horizontal) */}
																<g transform="translate(100, 120)">
																	<path d="M 0 0 H 300 Q 320 50 300 100 H 0 Q -20 50 0 0 Z" fill="url(#silicon-ingot-grad)" stroke="#64748b" strokeWidth="2" />
																	<ellipse cx="300" cy="50" rx="10" ry="50" fill="#475569" stroke="#94a3b8" />
																	<ellipse cx="0" cy="50" rx="10" ry="50" fill="#1e293b" stroke="#475569" />
																	
																	{/* Cut Wafers */}
																	<path d="M 60 0 Q 75 50 60 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 80 0 Q 95 50 80 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 100 0 Q 115 50 100 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 120 0 Q 135 50 120 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 140 0 Q 155 50 140 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 160 0 Q 175 50 160 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 180 0 Q 195 50 180 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 200 0 Q 215 50 200 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 220 0 Q 235 50 220 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	<path d="M 240 0 Q 255 50 240 100" fill="none" stroke="#10b981" strokeWidth="1.5" />
																	
																	<text x="150" y="-15" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">SILICON INGOT BLOCK</text>
																</g>
																
																{/* Slicing Wire Web */}
																<g stroke="#10b981" strokeWidth="1.5">
																	<line x1="160" y1="80" x2="160" y2="260" />
																	<line x1="180" y1="80" x2="180" y2="260" />
																	<line x1="200" y1="80" x2="200" y2="260" />
																	<line x1="220" y1="80" x2="220" y2="260" />
																	<line x1="240" y1="80" x2="240" y2="260" />
																	<line x1="260" y1="80" x2="260" y2="260" />
																	<line x1="280" y1="80" x2="280" y2="260" />
																	<line x1="300" y1="80" x2="300" y2="260" />
																	<line x1="320" y1="80" x2="320" y2="260" />
																	<line x1="340" y1="80" x2="340" y2="260" />
																</g>
																
																{/* Diamond sparkles */}
																<g fill="#ffffff" opacity="0.9">
																	<circle cx="160" cy="150" r="1.5" />
																	<circle cx="200" cy="180" r="1.5" />
																	<circle cx="240" cy="135" r="1.5" />
																	<circle cx="280" cy="205" r="1.5" />
																	<circle cx="320" cy="165" r="1.5" />
																	<circle cx="340" cy="140" r="1.5" />
																</g>

																{/* Guide Rollers */}
																<circle cx="120" cy="70" r="20" fill="none" stroke="#64748b" strokeWidth="2" />
																<circle cx="120" cy="70" r="5" fill="#64748b" />
																<circle cx="380" cy="70" r="20" fill="none" stroke="#64748b" strokeWidth="2" />
																<circle cx="380" cy="70" r="5" fill="#64748b" />
																
																{/* Technical descriptions */}
																<line x1="220" y1="80" x2="130" y2="40" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="220" cy="80" r="3" fill="#10b981" />
																<text x="120" y="35" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="end">DIAMOND WIRE</text>

																<line x1="280" y1="210" x2="390" y2="280" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="280" cy="210" r="3" fill="#10b981" />
																<text x="395" y="283" fill="#10b981" fontSize="11" fontFamily="monospace">THIN WAFER (&lt;130μm)</text>

																<line x1="180" y1="160" x2="60" y2="280" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="180" cy="160" r="3" fill="#10b981" />
																<text x="55" y="283" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="end">KERF LOSS (&lt;12μm)</text>

																{/* Spray Jets */}
																<path d="M 140 100 Q 150 120 160 120 M 340 100 Q 330 120 320 120" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6" />
																<text x="250" y="325" fill="#3b82f6" fontSize="11" fontFamily="monospace" textAnchor="middle">COOLANT SPRAY JET</text>
															</svg>
														)}

														{activeStep === 2 && (
															<svg viewBox="0 0 500 400" width="100%" height="100%" style={{ background: "transparent" }}>
																<defs>
																	<pattern id="blueprint-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
																		<path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.07)" strokeWidth="1" />
																	</pattern>
																	<linearGradient id="sun-rays" x1="0%" y1="0%" x2="0%" y2="100%">
																		<stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
																		<stop offset="100%" stopColor="#eab308" stopOpacity="0" />
																	</linearGradient>
																</defs>
																
																<rect width="100%" height="100%" fill="url(#blueprint-grid-2)" />
																
																{/* Sun Rays */}
																<path d="M 80 -10 L 120 180 M 230 -10 L 240 180 M 380 -10 L 360 180" stroke="url(#sun-rays)" strokeWidth="20" opacity="0.3" />
																
																{/* Micro-Pyramids Top Textured Layer */}
																<path d="M 50 180 L 60 170 L 70 180 L 80 170 L 90 180 L 100 170 L 110 180 L 120 170 L 130 180 L 140 170 L 150 180 L 160 170 L 170 180 L 180 170 L 190 180 L 200 170 L 210 180 L 220 170 L 230 180 L 240 170 L 250 180 L 260 170 L 270 180 L 280 170 L 290 180 L 300 170 L 310 180 L 320 170 L 330 180 L 340 170 L 350 180 L 360 170 L 370 180 L 380 170 L 390 180 L 400 170 L 410 180 L 420 170 L 430 180 L 440 170 L 450 180" fill="none" stroke="#10b981" strokeWidth="2.5" />
																
																{/* Emitter Layer (N-Type) */}
																<path d="M 50 188 L 60 178 L 70 188 L 80 178 L 90 188 L 100 178 L 110 188 L 120 178 L 130 188 L 140 178 L 150 188 L 160 178 L 170 188 L 180 178 L 190 188 L 200 178 L 210 188 L 220 178 L 230 188 L 240 178 L 250 188 L 260 178 L 270 188 L 280 178 L 290 188 L 300 178 L 310 188 L 320 178 L 330 188 L 340 178 L 350 188 L 360 178 L 370 188 L 380 178 L 390 188 L 400 178 L 410 188 L 420 178 L 430 188 L 440 178 L 450 188" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3,1" />

																{/* Silicon Base (P-type) */}
																<rect x="50" y="188" width="400" height="100" fill="#1e293b" stroke="#475569" strokeWidth="2" />
																
																{/* Rear Passivation */}
																<rect x="50" y="288" width="400" height="8" fill="#10b981" opacity="0.8" />
																
																{/* Front Grid Silver Fingers */}
																<rect x="100" y="150" width="10" height="25" fill="#cbd5e1" stroke="#94a3b8" />
																<rect x="220" y="150" width="10" height="25" fill="#cbd5e1" stroke="#94a3b8" />
																<rect x="340" y="150" width="10" height="25" fill="#cbd5e1" stroke="#94a3b8" />
																
																{/* Rear Contacts */}
																<rect x="90" y="296" width="30" height="10" fill="#cbd5e1" stroke="#94a3b8" />
																<rect x="230" y="296" width="30" height="10" fill="#cbd5e1" stroke="#94a3b8" />
																<rect x="370" y="296" width="30" height="10" fill="#cbd5e1" stroke="#94a3b8" />

																{/* Technical Lines & Text */}
																<line x1="225" y1="150" x2="225" y2="80" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="225" cy="150" r="3" fill="#10b981" />
																<text x="225" y="70" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="middle">SILVER BUSBARS (16BB)</text>

																<line x1="70" y1="175" x2="30" y2="120" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="70" cy="175" r="3" fill="#10b981" />
																<text x="25" y="115" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="end">PYRAMID TEXTURE</text>

																<line x1="250" y1="184" x2="470" y2="150" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="250" cy="184" r="3" fill="#10b981" />
																<text x="475" y="153" fill="#10b981" fontSize="11" fontFamily="monospace">N-TYPE EMITTER</text>

																<line x1="250" y1="230" x2="470" y2="230" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="250" cy="230" r="3" fill="#10b981" />
																<text x="475" y="233" fill="#10b981" fontSize="11" fontFamily="monospace">P-TYPE SILICON BASE</text>

																<line x1="245" y1="292" x2="470" y2="270" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
																<circle cx="245" cy="292" r="3" fill="#10b981" />
																<text x="475" y="273" fill="#10b981" fontSize="11" fontFamily="monospace">TOPCON PASSIVATION</text>
															</svg>
														)}
													</div>

													{/* Specifications Footer */}
													<div
														style={{
															marginTop: "20px",
															borderTop: "1px solid rgba(255, 255, 255, 0.1)",
															paddingTop: "15px"
														}}
													>
														<div
															style={{
																display: "grid",
																gridTemplateColumns: "repeat(3, 1fr)",
																gap: "15px"
															}}
														>
															{manufacturingSteps[activeStep].specs.slice(0, 3).map((spec, idx) => (
																<div key={idx}>
																	<div style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase" }}>{spec.label}</div>
																	<div style={{ color: "#10b981", fontSize: "14px", fontWeight: "bold", fontFamily: "monospace", marginTop: "2px" }}>{spec.value}</div>
																</div>
															))}
														</div>
														<div
															style={{
																display: "grid",
																gridTemplateColumns: "repeat(3, 1fr)",
																gap: "15px",
																marginTop: "12px"
															}}
														>
															{manufacturingSteps[activeStep].specs.slice(3, 6).map((spec, idx) => (
																<div key={idx}>
																	<div style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase" }}>{spec.label}</div>
																	<div style={{ color: "#10b981", fontSize: "14px", fontWeight: "bold", fontFamily: "monospace", marginTop: "2px" }}>{spec.value}</div>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Future Technologies */}
						<section
							id="future-tech"
							style={{ padding: "100px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}
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
											INNOVATION PILLARS
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Future Technologies
										</h2>
										<p style={{ color: "#64748b" }}>
											Advanced technologies Ziqora plans to integrate into our factory designs.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											{[
												{
													title: "High-Efficiency Solar Cells",
													desc: "Planning manufacturing lines capable of handling advanced cell topologies like TOPCon (Tunnel Oxide Passivated Contact) and Heterojunction (HJT) for high photoelectric conversion yields.",
												},
												{
													title: "Advanced Wafer Manufacturing",
													desc: "Aiming for diamond-wire slicing technologies to achieve thinner, lower-kerf wafers with flat surfaces, minimizing silicon degradation during processing.",
												},
												{
													title: "AI-Based Quality Inspection",
													desc: "Integrating computer vision neural networks at check-gates to scan and flag micro-cracks, impurities, or electrical defects invisibly on active wafer lines.",
												},
												{
													title: "Smart Manufacturing Systems",
													desc: "Designing factories with Automated Guided Vehicles (AGVs) and automated stackers to handle delicate silicon sheets safely, minimizing manual handling breakage.",
												},
												{
													title: "Industry 4.0 Standards",
													desc: "Building a fully telemetry-connected cleanroom environment where sensors track humidity, temperature, and chemical concentrations in real-time.",
												},
												{
													title: "Digital Traceability",
													desc: "Implementing serial traceability databases that record processing parameters for every batch from raw polysilicon imports to the final module integration.",
												},
											].map((item, idx) => (
												<div key={idx} className="col-md-6 mb-4">
													<div
														style={{
															padding: "30px",
															background: "#ffffff",
															border: "1px solid #e2e8f0",
															borderRadius: "12px",
															height: "100%",
														}}
													>
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

						{/* Innovation Roadmap */}
						<section
							id="innovation-roadmap"
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
											ROADMAP
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Innovation Roadmap
										</h2>
										<p style={{ color: "#64748b" }}>
											Our step-by-step technological vision for Ziqora's manufacturing ecosystem.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "stretch",
												justifyContent: "space-between",
												flexWrap: "wrap",
												gap: "20px",
											}}
										>
											{[
												{ step: "1", title: "Foundation", desc: "Setting up automated wafer and monocrystalline cell lines in Odisha." },
												{ step: "2", title: "Scale", desc: "Reaching a stable 5 GW throughput rate of wafers and cells." },
												{ step: "3", title: "Automation", desc: "Integrating automated guided vehicles (AGVs) and real-time sensor telemetry." },
												{ step: "4", title: "Advanced Tech", desc: "Rolling out TOPCon and Heterojunction (HJT) solar cell configurations." },
												{ step: "5", title: "Integrated Ecosystem", desc: "Building a fully optimized, closed-loop domestic component value chain." },
											].map((item, idx) => (
												<div
													key={idx}
													style={{
														flex: "1 1 180px",
														background: "#f8fafc",
														padding: "24px",
														borderRadius: "12px",
														border: "1px solid #e2e8f0",
														position: "relative",
														display: "flex",
														flexDirection: "column",
														justifyContent: "space-between",
													}}
												>
													<div>
														<div
															style={{
																fontSize: "12px",
																fontWeight: "800",
																color: "#10b981",
																marginBottom: "10px",
															}}
														>
															STEP {item.step}
														</div>
														<h4 style={{ color: "#0a1931", fontWeight: "800", fontSize: "18px", marginBottom: "10px" }}>
															{item.title}
														</h4>
														<p style={{ color: "#64748b", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
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
