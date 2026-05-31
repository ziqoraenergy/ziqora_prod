"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function HighEfficiencyCells() {
	return (
		<div>
			<title>High-Efficiency Solar Cells - Ziqora Solar Manufacturing</title>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />

						{/* Cinematic Video Hero Banner */}
						<section
							style={{
								position: "relative",
								padding: "160px 0 120px 0",
								background: "#050b14",
								color: "#ffffff",
								overflow: "hidden",
								minHeight: "80vh",
								display: "flex",
								alignItems: "center",
							}}
						>
							{/* Streaming cell manufacturing process video */}
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
									opacity: 0.35,
								}}
							>
								<source src="/video/cell.mp4" type="video/mp4" />
								<source src="/video/h10-banner-videio.mp4" type="video/mp4" />
							</video>

							{/* Gradient overlay for readability */}
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
								.cell-card:hover {
									transform: translateY(-8px);
									border-color: #10b981 !important;
									box-shadow: 0 20px 40px rgba(10, 25, 49, 0.08) !important;
								}
							`}</style>

							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row">
									<div className="col-lg-9 text-start">
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
												Next-Gen Solar Technology
											</span>
										</div>
										<h1
											className="hero-fade-in hero-delay-2"
											style={{
												fontWeight: "900",
												color: "#ffffff",
												fontSize: "calc(2.2rem + 2.5vw)",
												lineHeight: 1.15,
												marginBottom: "20px",
												letterSpacing: "-0.03em",
											}}
										>
											High-Efficiency <br />
											Monocrystalline Solar Cells
										</h1>
										<p
											className="hero-fade-in hero-delay-3"
											style={{
												fontSize: "18px",
												color: "rgba(255, 255, 255, 0.85)",
												lineHeight: "1.65",
												maxWidth: "700px",
												margin: "0 0 40px 0",
											}}
										>
											Ziqora is designing advanced, state-of-the-art photovoltaic cell processing lines in Odisha, India, to supply high-efficiency N-type TOPCon and HJT cells directly to domestic module manufacturers.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
											<Link
												href="/contact"
												className="btn btn-red"
												style={{
													background: "#10b981",
													borderColor: "#10b981",
													color: "#ffffff",
													padding: "14px 28px",
													borderRadius: "4px",
													fontWeight: "600",
													textTransform: "uppercase",
													letterSpacing: "1px",
													fontSize: "13px",
													transition: "all 0.3s ease",
												}}
												onMouseEnter={(e) => { e.target.style.background = "#059669"; e.target.style.borderColor = "#059669"; }}
												onMouseLeave={(e) => { e.target.style.background = "#10b981"; e.target.style.borderColor = "#10b981"; }}
											>
												Inquire About Supply
											</Link>
											<Link
												href="#technology-standards"
												className="btn btn-border-white"
												style={{
													padding: "14px 28px",
													borderRadius: "4px",
													fontWeight: "600",
													textTransform: "uppercase",
													letterSpacing: "1px",
													fontSize: "13px",
													border: "1px solid rgba(255,255,255,0.4)",
													color: "#ffffff",
													transition: "all 0.3s ease",
												}}
												onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; }}
												onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
											>
												Explore Tech Specs
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Key R&D & Capacity Targets */}
						<section style={{ background: "#0a1931", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
							<div className="container">
								<div className="row justify-content-center text-center">
									{[
										{
											metric: "5 GW+",
											label: "Planned Annual Output",
											desc: "Envisioned manufacturing facility capacity to support domestic modules."
										},
										{
											metric: "26.5%+",
											label: "Target Conversion Efficiency",
											desc: "Harnessing next-generation N-type semiconductor configurations."
										},
										{
											metric: "N-Type",
											label: "Core Architecture Base",
											desc: "Zero Light-Induced Degradation (LID) for enhanced long-term yield."
										}
									].map((stat, idx) => (
										<div key={idx} className="col-md-4 mb-4 mb-md-0">
											<div style={{ padding: "10px 20px" }}>
												<h3
													style={{
														fontSize: "calc(2.5rem + 1.2vw)",
														fontWeight: "800",
														color: "#10b981",
														marginBottom: "10px",
														letterSpacing: "-0.02em"
													}}
												>
													{stat.metric}
												</h3>
												<h4
													style={{
														fontSize: "16px",
														fontWeight: "700",
														color: "#ffffff",
														marginBottom: "8px",
														textTransform: "uppercase",
														letterSpacing: "1.5px"
													}}
												>
													{stat.label}
												</h4>
												<p
													style={{
														fontSize: "14px",
														color: "rgba(255,255,255,0.7)",
														lineHeight: "1.5",
														maxWidth: "280px",
														margin: "0 auto"
													}}
												>
													{stat.desc}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Technology Standards and R&D Focus */}
						<section id="technology-standards" style={{ padding: "100px 0", backgroundColor: "#ffffff" }}>
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
											Core Technologies
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", letterSpacing: "-0.01em" }}>
											Solar Cell Architectures We Are Engineering
										</h2>
										<p style={{ color: "#64748b", fontSize: "16px", marginTop: "15px" }}>
											By skipping legacy P-type manufacturing lines, Ziqora plans to deploy state-of-the-art cleanroom equipment optimized directly for advanced cell designs.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											{[
												{
													title: "Tunnel Oxide Passivated Contact (TOPCon)",
													desc: "Our planned base architecture. Employs an ultra-thin tunnel oxide layer coupled with highly doped polycrystalline silicon to drastically reduce carrier recombination, elevating average cell efficiency targets to 26.0% - 26.4%.",
													icon: "fa-circle-dot"
												},
												{
													title: "Silicon Heterojunction (HJT)",
													desc: "Planning a future pilot line combining crystalline silicon wafers with amorphous silicon thin films. HJT offers a very low temperature coefficient (-0.26%/°C) and a high bifaciality rate of over 85%, ideal for high-irradiation Indian regions.",
													icon: "fa-layer-group"
												},
												{
													title: "All-Back-Contact (IBC)",
													desc: "Designing factory utility frameworks with structural flexibility to support future upgrades to Interdigitated Back Contact layouts, completely removing front-side grid shading for maximum light capturing surface area.",
													icon: "fa-border-all"
												},
												{
													title: "Silicon-Perovskite Tandem",
													desc: "Positioned on our research roadmap. By layering high-bandgap perovskite materials over low-bandgap silicon bottom cells, we plan to support research targeting efficiency thresholds beyond the 30% Shockley-Queisser limit.",
													icon: "fa-bolt"
												}
											].map((item, idx) => (
												<div key={idx} className="col-md-6 mb-4">
													<div
														style={{
															padding: "40px",
															background: "#f8fafc",
															border: "1px solid #e2e8f0",
															borderRadius: "8px",
															height: "100%",
															transition: "all 0.3s ease",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.borderColor = "#10b981";
															e.currentTarget.style.transform = "translateY(-4px)";
															e.currentTarget.style.background = "#ffffff";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.borderColor = "#e2e8f0";
															e.currentTarget.style.transform = "translateY(0)";
															e.currentTarget.style.background = "#f8fafc";
														}}
													>
														<div
															style={{
																fontSize: "24px",
																color: "#10b981",
																marginBottom: "20px",
																width: "50px",
																height: "50px",
																background: "rgba(16, 185, 129, 0.08)",
																borderRadius: "50%",
																display: "flex",
																alignItems: "center",
																justifyContent: "center"
															}}
														>
															<i className={`fa-solid ${item.icon}`}></i>
														</div>
														<h4 style={{ color: "#0a1931", fontWeight: "800", fontSize: "20px", marginBottom: "12px", letterSpacing: "-0.01em" }}>
															{item.title}
														</h4>
														<p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.65", margin: 0 }}>
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

						{/* Planned Product Display & Specifications */}
						<section style={{ padding: "100px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
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
											Format Standards
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", letterSpacing: "-0.01em" }}>
											Planned Solar Cell Lineup
										</h2>
										<p style={{ color: "#64748b", fontSize: "16px", marginTop: "15px" }}>
											Ziqora plans to produce cells in standard commercial dimensions, ensuring complete plug-and-play compatibility for domestic and international solar module laminators.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									{[
										{
											name: "ZTC-M10 Bifacial Cell",
											size: "182.2mm x 183.75mm",
											efficiency: "26.2% - 26.5%",
											busbars: "16BB / Super Multi-Busbar",
											thickness: "130µm ± 10µm",
											applications: "Residential, commercial rooftop modules, and standard high-density arrays.",
											image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop"
										},
										{
											name: "ZTC-G12 Bifacial Cell",
											size: "210mm x 210mm",
											efficiency: "26.4% - 26.8%",
											busbars: "18BB / Multi-Busbar",
											thickness: "130µm ± 10µm",
											applications: "Utility-scale ground arrays, tracker configurations, and high-wattage double-glass modules.",
											image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
										},
										{
											name: "ZTC-G12R Rectangular Cell",
											size: "210mm x 182mm",
											efficiency: "26.3% - 26.6%",
											busbars: "16BB / Multi-Busbar",
											thickness: "130µm ± 10µm",
											applications: "Optimized rectangular dimensions specifically designed to maximize container space and module area efficiency.",
											image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
										}
									].map((cell, idx) => (
										<div key={idx} className="col-lg-4 col-md-6 mb-4">
											<div
												className="cell-card"
												style={{
													background: "#ffffff",
													border: "1px solid #e2e8f0",
													borderRadius: "8px",
													overflow: "hidden",
													height: "100%",
													transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
													display: "flex",
													flexDirection: "column",
												}}
											>
												<div
													style={{
														height: "200px",
														backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.4), rgba(10, 25, 49, 0.85)), url('${cell.image}')`,
														backgroundSize: "cover",
														backgroundPosition: "center",
														padding: "20px",
														display: "flex",
														alignItems: "flex-end",
													}}
												>
													<h3 style={{ color: "#ffffff", fontWeight: "800", fontSize: "20px", margin: 0 }}>
														{cell.name}
													</h3>
												</div>
												<div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
													<div>
														<div style={{ marginBottom: "20px" }}>
															<div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #f1f5f9", marginBottom: "8px" }}>
																<span style={{ color: "#64748b", fontSize: "14px" }}>Dimensions</span>
																<span style={{ color: "#0a1931", fontWeight: "700", fontSize: "14px" }}>{cell.size}</span>
															</div>
															<div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #f1f5f9", marginBottom: "8px" }}>
																<span style={{ color: "#64748b", fontSize: "14px" }}>Target Efficiency</span>
																<span style={{ color: "#10b981", fontWeight: "700", fontSize: "14px" }}>{cell.efficiency}</span>
															</div>
															<div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #f1f5f9", marginBottom: "8px" }}>
																<span style={{ color: "#64748b", fontSize: "14px" }}>Grid Layout</span>
																<span style={{ color: "#0a1931", fontWeight: "700", fontSize: "14px" }}>{cell.busbars}</span>
															</div>
															<div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px" }}>
																<span style={{ color: "#64748b", fontSize: "14px" }}>Wafer Thickness</span>
																<span style={{ color: "#0a1931", fontWeight: "700", fontSize: "14px" }}>{cell.thickness}</span>
															</div>
														</div>
														<p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
															<strong>Key Applications:</strong> {cell.applications}
														</p>
													</div>
													<div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "20px", marginTop: "auto" }}>
														<Link
															href="/contact"
															style={{
																color: "#10b981",
																fontWeight: "700",
																fontSize: "14px",
																display: "inline-flex",
																alignItems: "center",
																gap: "8px",
																textDecoration: "none"
															}}
														>
															Request Datasheet Specs <i className="fa-solid fa-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Call to Action Section */}
						<section
							style={{
								padding: "100px 0",
								position: "relative",
								backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								textAlign: "center",
								color: "#ffffff",
							}}
						>
							{/* Overlay */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "linear-gradient(180deg, rgba(10, 25, 49, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%)",
									zIndex: 1,
								}}
							></div>

							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2 style={{ fontSize: "calc(1.8rem + 1.2vw)", fontWeight: "800", marginBottom: "20px", letterSpacing: "-0.02em" }}>
											Building a Secure Solar Supply Chain for India
										</h2>
										<p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", lineHeight: "1.65", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
											Secure your future manufacturing queue. Talk to our technical partnerships team today to align parameters, review planned specifications, and register your interests.
										</p>
										<div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
											<Link
												href="/contact"
												className="btn btn-red"
												style={{
													background: "#10b981",
													borderColor: "#10b981",
													color: "#ffffff",
													padding: "14px 30px",
													borderRadius: "4px",
													fontWeight: "600",
													fontSize: "14px",
													letterSpacing: "0.5px",
													transition: "all 0.3s ease"
												}}
												onMouseEnter={(e) => { e.target.style.background = "#059669"; e.target.style.borderColor = "#059669"; }}
												onMouseLeave={(e) => { e.target.style.background = "#10b981"; e.target.style.borderColor = "#10b981"; }}
											>
												Contact Partnership Desk
											</Link>
											<a
												href="mailto:partnerships@ziqora.com"
												style={{
													border: "1px solid rgba(255,255,255,0.3)",
													padding: "14px 30px",
													borderRadius: "4px",
													fontWeight: "600",
													fontSize: "14px",
													color: "#ffffff",
													textDecoration: "none",
													transition: "all 0.3s ease",
													display: "inline-flex",
													alignItems: "center",
													gap: "8px"
												}}
												onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; }}
												onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
											>
												<i className="fa-regular fa-envelope"></i> Email Partnerships
											</a>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Disclaimer section */}
						<section style={{ padding: "40px 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div style={{ display: "flex", gap: "15px", alignItems: "flex-start", background: "#ffffff", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "6px" }}>
											<span style={{ color: "#10b981", fontSize: "20px", marginTop: "2px" }}>
												<i className="fa-solid fa-circle-info"></i>
											</span>
											<p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
												<strong>Disclaimer for Investors & Partners:</strong> Ziqora is currently in the project development stage. Monocrystalline silicon ingot casting, wafer slicing, and solar cell manufacturing equipment procurement, capacity figures, efficiency targets, and site development milestones are planned targets subject to ongoing engineering design studies, final approvals, capital deployment schedules, and supply timelines. Ziqora does not claim active, fully operational cell production capacity or commercial supply streams at the present time.
											</p>
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
