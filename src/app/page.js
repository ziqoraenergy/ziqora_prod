"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<title>Ziqora - Powering India's Solar Manufacturing Future</title>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />

						{/* Hero Section */}
						<section
							className="hero-section section-gap-x"
							style={{
								position: "relative",
								padding: "180px 0 140px 0",
								background: "#050b14",
								color: "#ffffff",
								overflow: "hidden",
							}}
						>
							{/* High-quality background video loop */}
							<video
								autoPlay
								loop
								muted
								playsInline
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									objectFit: "cover",
									zIndex: 0,
									opacity: 0.22,
								}}
							>
								<source src="/video/cell.mp4" type="video/mp4" />
								<source src="/video/h10-banner-videio.mp4" type="video/mp4" />
							</video>

							{/* Dark gradient overlay for modern contrast */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "linear-gradient(135deg, rgba(10, 25, 49, 0.9) 0%, rgba(5, 11, 20, 0.75) 100%)",
									zIndex: 1,
								}}
							></div>

							{/* Floating abstract solar lines background shape */}
							<div
								style={{
									position: "absolute",
									bottom: "-20%",
									right: "-10%",
									width: "600px",
									height: "600px",
									borderRadius: "50%",
									background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
									filter: "blur(60px)",
									pointerEvents: "none",
									zIndex: 1,
								}}
							></div>
							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row align-items-center">
									<div className="col-lg-8">
										<div className="hero-content">
											<span
												style={{
													color: "#10b981",
													fontWeight: "700",
													textTransform: "uppercase",
													letterSpacing: "2px",
													fontSize: "14px",
													display: "inline-block",
													marginBottom: "15px",
													border: "1px solid rgba(16,185,129,0.3)",
													padding: "6px 16px",
													borderRadius: "30px",
													background: "rgba(16,185,129,0.1)",
												}}
											>
												PROJECT DEVELOPMENT STAGE
											</span>
											<h1
												style={{
													fontSize: "calc(2.5rem + 2vw)",
													fontWeight: "800",
													lineHeight: 1.15,
													color: "#ffffff",
													marginBottom: "25px",
													letterSpacing: "-0.02em",
												}}
											>
												Powering India's <br />
												<span style={{ color: "#10b981" }}>Solar Manufacturing</span> Future
											</h1>
											<p
												style={{
													fontSize: "18px",
													color: "rgba(255, 255, 255, 0.85)",
													lineHeight: "1.6",
													marginBottom: "40px",
													maxWidth: "650px",
												}}
											>
												Building advanced wafer and solar cell manufacturing capabilities in Odisha to strengthen India's renewable energy supply chain.
											</p>
											<div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
												<Link
													href="/project"
													style={{
														background: "#10b981",
														color: "#ffffff",
														padding: "16px 32px",
														borderRadius: "6px",
														fontWeight: "600",
														transition: "all 0.3s ease",
														boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
													}}
													className="tj-btn-hover"
												>
													Explore Our Vision
												</Link>
												<Link
													href="/contact"
													style={{
														border: "2px solid rgba(255, 255, 255, 0.3)",
														color: "#ffffff",
														padding: "14px 30px",
														borderRadius: "6px",
														fontWeight: "600",
														transition: "all 0.3s ease",
													}}
													onMouseEnter={(e) => (e.target.style.borderColor = "#ffffff")}
													onMouseLeave={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.3)")}
												>
													Contact Us
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Why Ziqora Exists */}
						<section
							className="why-ziqora-section"
							style={{ padding: "100px 0", backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row align-items-center">
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
											SUPPLY CHAIN RESILIENCE
										</span>
										<h2
											style={{
												color: "#0a1931",
												fontWeight: "800",
												fontSize: "40px",
												marginBottom: "30px",
											}}
										>
											Why Ziqora Exists
										</h2>
										<p
											style={{
												fontSize: "20px",
												lineHeight: "1.6",
												color: "#334155",
												borderLeft: "4px solid #10b981",
												paddingLeft: "24px",
												marginBottom: "20px",
												fontWeight: "500",
											}}
										>
											"We are building 5 GW of solar wafers and solar cells in Odisha so India's module manufacturers never have to gamble their project timelines on uncertain global supply chains."
										</p>
									</div>
									<div className="col-lg-6 text-center">
										<div
											style={{
												padding: "40px",
												background: "#f8fafc",
												borderRadius: "16px",
												border: "1px solid #e2e8f0",
												boxShadow: "0 10px 30px rgba(10,25,49,0.03)",
											}}
										>
											<i
												className="fa-solid fa-shield-halved"
												style={{ fontSize: "50px", color: "#10b981", marginBottom: "20px" }}
											></i>
											<h4 style={{ color: "#0a1931", fontWeight: "700", marginBottom: "15px" }}>
												Domestic Supply Security
											</h4>
											<p style={{ color: "#64748b", margin: 0 }}>
												By producing core components domestically, we aim to insulate Indian solar companies from international trade disputes, logistics bottlenecks, and price fluctuations.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* By The Numbers */}
						<section
							className="stats-section"
							style={{
								padding: "80px 0",
								backgroundColor: "#0a1931",
								color: "#ffffff",
								position: "relative",
							}}
						>
							<div className="container">
								<div className="row">
									<div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
										<div className="stat-card text-center">
											<h3 style={{ fontSize: "48px", fontWeight: "800", color: "#10b981", margin: "0 0 10px 0" }}>
												5 GW
											</h3>
											<p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
												Planned Wafer Capacity
											</p>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
										<div className="stat-card text-center">
											<h3 style={{ fontSize: "48px", fontWeight: "800", color: "#10b981", margin: "0 0 10px 0" }}>
												5 GW
											</h3>
											<p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
												Planned Solar Cell Capacity
											</p>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
										<div className="stat-card text-center">
											<h3 style={{ fontSize: "48px", fontWeight: "800", color: "#10b981", margin: "0 0 10px 0" }}>
												Odisha
											</h3>
											<p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
												Manufacturing Base
											</p>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="stat-card text-center">
											<h3 style={{ fontSize: "48px", fontWeight: "800", color: "#10b981", margin: "0 0 10px 0" }}>
												Domestic
											</h3>
											<p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
												India-Focused Supply Chain
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Ziqora Philosophy Framework (Trina Solar Style Accordion) */}
						<section
							className="philosophy-section"
							style={{
								padding: "100px 0 0 0",
								backgroundColor: "#0a1931",
								color: "#ffffff",
								position: "relative",
								overflow: "hidden"
							}}
						>
							<div className="container mb-5">
								<div className="row justify-content-center text-center">
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
											OUR CORE VALUE FRAMEWORK
										</span>
										<h2 style={{ color: "#ffffff", fontWeight: "800", fontSize: "36px", marginBottom: "15px" }}>
											The ZIQORA Philosophy
										</h2>
										<p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
											Guided by our mission to secure India's clean energy independence, Ziqora implements a strategic framework focused on long-term sustainability and industrial leadership.
										</p>
									</div>
								</div>
							</div>

							<div
								style={{
									display: "flex",
									width: "100%",
									height: "600px",
									backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop')",
									backgroundSize: "cover",
									backgroundPosition: "center",
									position: "relative",
								}}
							>
								{/* Style tag for hover accordion transitions */}
								<style>{`
									.ziqora-column {
										flex: 1;
										transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
										position: relative;
										overflow: hidden;
										border-right: 1px solid rgba(255, 255, 255, 0.1);
										display: flex;
										flex-direction: column;
										justify-content: flex-end;
										padding: 50px 30px;
										cursor: pointer;
										height: 100%;
										text-decoration: none;
									}
									.ziqora-column::before {
										content: '';
										position: absolute;
										top: 0; left: 0; width: 100%; height: 100%;
										background: linear-gradient(180deg, rgba(10, 25, 49, 0.1) 0%, rgba(10, 25, 49, 0.85) 100%);
										z-index: 1;
										transition: background 0.5s ease;
									}
									.ziqora-column:hover {
										flex: 3;
									}
									.ziqora-column:hover::before {
										background: linear-gradient(180deg, rgba(10, 25, 49, 0.3) 0%, rgba(10, 25, 49, 0.95) 100%);
									}
									.ziqora-desc {
										max-height: 0;
										opacity: 0;
										overflow: hidden;
										transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
										font-size: 14px;
										color: rgba(255, 255, 255, 0.8);
										line-height: 1.6;
										margin: 0;
										z-index: 2;
										text-align: left;
									}
									.ziqora-column:hover .ziqora-desc {
										max-height: 150px;
										opacity: 1;
										margin-top: 15px;
									}
									.ziqora-letter {
										font-size: 90px;
										font-weight: 900;
										color: rgba(255, 255, 255, 0.25);
										line-height: 1;
										margin-bottom: 10px;
										transition: all 0.5s ease;
										z-index: 2;
										text-align: left;
									}
									.ziqora-column:hover .ziqora-letter {
										color: #10b981;
										transform: translateY(-5px);
									}
									.ziqora-title {
										font-size: 20px;
										font-weight: 800;
										color: #ffffff;
										margin: 0;
										z-index: 2;
										text-align: left;
									}
									@media (max-width: 991px) {
										.philosophy-accordion-wrapper {
											flex-direction: column !important;
											height: auto !important;
										}
										.ziqora-column {
											height: 180px !important;
											border-right: none !important;
											border-bottom: 1px solid rgba(255, 255, 255, 0.1);
											padding: 30px 20px !important;
										}
										.ziqora-letter {
											font-size: 45px !important;
											margin-bottom: 5px !important;
										}
										.ziqora-column:hover {
											flex: none !important;
											height: 240px !important;
										}
									}
								`}</style>

								<div className="philosophy-accordion-wrapper" style={{ display: "flex", width: "100%", height: "100%" }}>
									{[
										{
											letter: "Z",
											title: "Zero-Emissions Commitments",
											desc: "Designing our manufacturing processes around low-carbon infrastructure, target metrics for recycling, and green energy utilization goals."
										},
										{
											letter: "I",
											title: "Innovation Focus",
											desc: "Envisioning lines capable of advanced diamond-wire wafer cutting and high photoelectric conversion cell topologies like TOPCon."
										},
										{
											letter: "Q",
											title: "Quality Excellence",
											desc: "Targeting state-of-the-art cleanroom environments integrated with inline automated AI visual inspection check-gates."
										},
										{
											letter: "O",
											title: "Odisha Integration",
											desc: "Leveraging Odisha's excellent logistics facilities, industrial corridor support, port connections, and clean power resources."
										},
										{
											letter: "R",
											title: "Resilient Operations",
											desc: "Providing domestic modular manufacturers with supply security, insulating them from unpredictable foreign supply chains."
										},
										{
											letter: "A",
											title: "Advancement Goals",
											desc: "Driving regional economic prosperity, local technical training, and aiding India's long-term clean energy independence."
										}
									].map((item, idx) => (
										<div key={idx} className="ziqora-column">
											<div className="ziqora-letter">{item.letter}</div>
											<div className="ziqora-title">{item.title}</div>
											<div className="ziqora-desc">{item.desc}</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Manufacturing Ecosystem Flowchart */}
						<section
							className="ecosystem-section"
							style={{ padding: "100px 0", backgroundColor: "#f8fafc" }}
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
											PROCESS FLOW
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Our Proposed Manufacturing Ecosystem
										</h2>
										<p style={{ color: "#64748b" }}>
											A vertical visualization of Ziqora's vision: local processing of key inputs to fuel Indian clean energy generation.
										</p>
									</div>
								</div>

								{/* Flow diagram layout */}
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-between",
												flexWrap: "wrap",
												gap: "20px",
												position: "relative",
											}}
											className="ecosystem-flow-container"
										>
											{[
												{ step: "01", label: "Imported Polysilicon", desc: "Sourcing premium raw materials globally" },
												{ step: "02", label: "Ingot", desc: "Refining and crystallizing raw silicon" },
												{ step: "03", label: "Wafer", desc: "Slicing ultra-thin crystalline wafers" },
												{ step: "04", label: "Solar Cell", desc: "Converting wafers into high-efficiency cells" },
												{ step: "05", label: "India's Module Makers", desc: "Integrating components into final solar panels" },
												{ step: "06", label: "Clean Energy", desc: "Generating emission-free power for the nation" },
											].map((item, idx, arr) => (
												<div
													key={idx}
													style={{
														flex: "1 1 150px",
														background: "#ffffff",
														padding: "24px 16px",
														borderRadius: "12px",
														border: "1px solid #e2e8f0",
														boxShadow: "0 4px 20px rgba(10,25,49,0.02)",
														textAlign: "center",
														transition: "all 0.3s ease",
														position: "relative",
														zIndex: 2,
													}}
													onMouseEnter={(e) => {
														e.currentTarget.style.transform = "translateY(-5px)";
														e.currentTarget.style.borderColor = "#10b981";
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.transform = "translateY(0)";
														e.currentTarget.style.borderColor = "#e2e8f0";
													}}
												>
													<div
														style={{
															width: "32px",
															height: "32px",
															borderRadius: "50%",
															background: "rgba(16,185,129,0.1)",
															color: "#10b981",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															margin: "0 auto 15px auto",
															fontWeight: "700",
															fontSize: "14px",
														}}
													>
														{item.step}
													</div>
													<h5 style={{ color: "#0a1931", fontWeight: "700", fontSize: "16px", marginBottom: "8px" }}>
														{item.label}
													</h5>
													<p style={{ color: "#64748b", fontSize: "12px", margin: 0, lineHeight: "1.4" }}>
														{item.desc}
													</p>

													{/* Arrow spacer for desktop */}
													{idx < arr.length - 1 && (
														<div
															className="d-none d-xl-block"
															style={{
																position: "absolute",
																right: "-20px",
																top: "50%",
																transform: "translateY(-50%)",
																zIndex: 3,
																color: "#10b981",
															}}
														>
															<i className="fa-solid fa-chevron-right"></i>
														</div>
													)}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Sustainability Preview */}
						<section
							className="sustainability-preview-section section-gap-x"
							style={{
								padding: "100px 0",
								position: "relative",
								background: "linear-gradient(rgba(10, 25, 49, 0.95), rgba(10, 25, 49, 0.95)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								color: "#ffffff",
							}}
						>
							<div className="container">
								<div className="row align-items-center">
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
											OUR COMMITMENT
										</span>
										<h2
											style={{
												color: "#ffffff",
												fontWeight: "800",
												fontSize: "36px",
												marginBottom: "20px",
											}}
										>
											Commitment to a Green Future
										</h2>
										<p
											style={{
												color: "rgba(255, 255, 255, 0.8)",
												fontSize: "16px",
												lineHeight: "1.6",
												marginBottom: "30px",
											}}
										>
											We are embedding sustainability at the heart of our project plan. From energy-efficient systems to water reclamation initiatives, Ziqora is committed to establishing low-emission manufacturing models for a cleaner planet.
										</p>
										<Link
											href="/sustainability"
											style={{
												display: "inline-flex",
												alignItems: "center",
												gap: "10px",
												color: "#10b981",
												fontWeight: "700",
											}}
										>
											Discover Our ESG Roadmap <i className="fa-solid fa-arrow-right"></i>
										</Link>
									</div>
									<div className="col-lg-6 mt-5 mt-lg-0 text-center">
										<div
											style={{
												position: "relative",
												display: "inline-block",
												borderRadius: "12px",
												overflow: "hidden",
												boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
											}}
										>
											<img
												src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
												alt="Sustainability nature elements"
												style={{ maxWidth: "100%", height: "auto", display: "block" }}
											/>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Latest Updates */}
						<section
							className="updates-section"
							style={{ padding: "100px 0", backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-between align-items-end mb-5">
									<div className="col-md-8">
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
											UPDATES & INSIGHTS
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", margin: 0 }}>
											Latest News from Ziqora
										</h2>
									</div>
									<div className="col-md-4 text-md-end mt-3 mt-md-0">
										<Link
											href="/news"
											style={{
												color: "#0a1931",
												fontWeight: "700",
												textDecoration: "underline",
											}}
										>
											View All News
										</Link>
									</div>
								</div>

								<div className="row">
									{[
										{
											category: "Company Updates",
											date: "May 28, 2026",
											title: "Ziqora Initiates Feasibility Studies for 5 GW Manufacturing Base in Odisha",
											desc: "Taking the first technical steps towards securing location sites, outlining solar ecosystem designs, and planning domestic infrastructure partners.",
										},
										{
											category: "Solar Manufacturing",
											date: "May 15, 2026",
											title: "How Domestic Wafer Production Protects India's Clean Energy Independence",
											desc: "Analyzing India's current dependence on component imports, and why building domestic capacity is vital to reaching national solar goals.",
										},
										{
											category: "Policy Updates",
											date: "May 02, 2026",
											title: "Odisha Industrial Policies Create Favorable Landscape for Renewable Projects",
											desc: "Reviewing local state incentives, land procurement processes, and infrastructure support frameworks that benefit green manufacturing initiatives.",
										},
									].map((post, idx) => (
										<div key={idx} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
											<article
												style={{
													height: "100%",
													background: "#f8fafc",
													border: "1px solid #e2e8f0",
													borderRadius: "12px",
													padding: "30px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
													transition: "all 0.3s ease",
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.transform = "translateY(-5px)";
													e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,25,49,0.05)";
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.transform = "translateY(0)";
													e.currentTarget.style.boxShadow = "none";
												}}
											>
												<div>
													<div
														style={{
															display: "flex",
															justifyContent: "space-between",
															alignItems: "center",
															marginBottom: "15px",
														}}
													>
														<span
															style={{
																fontSize: "12px",
																fontWeight: "700",
																color: "#10b981",
																textTransform: "uppercase",
															}}
														>
															{post.category}
														</span>
														<span style={{ fontSize: "12px", color: "#94a3b8" }}>{post.date}</span>
													</div>
													<h4 style={{ color: "#0a1931", fontWeight: "700", fontSize: "20px", marginBottom: "15px", lineHeight: "1.4" }}>
														<Link href="/news">{post.title}</Link>
													</h4>
													<p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
														{post.desc}
													</p>
												</div>
												<Link
													href="/news"
													style={{
														color: "#0a1931",
														fontWeight: "700",
														fontSize: "14px",
														display: "inline-flex",
														alignItems: "center",
														gap: "5px",
													}}
												>
													Read More <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
												</Link>
											</article>
										</div>
									))}
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
