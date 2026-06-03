"use client";

import React from "react";
import Link from "next/link";

const CellLineupAndProcess = () => {
	const cellArchitectures = [
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
	];

	const cellLineup = [
		{
			name: "ZTC-M10 Bifacial Cell",
			size: "182.2mm x 183.75mm",
			efficiency: "26.2% - 26.5%",
			busbars: "16BB / Super Multi-Busbar",
			thickness: "130µm ± 10µm",
			applications: "Residential, commercial rooftop modules, and standard high-density arrays.",
			image: "/images/home/bifacial_solar_cell.png"
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
	];

	return (
		<>
			{/* Technology Standards and R&D Focus */}
			<section id="technology-standards" style={{ padding: "100px 0", backgroundColor: "#ffffff" }}>
				<div className="container">
					<div className="row justify-content-center text-center mb-5 wow fadeInUp" data-wow-delay=".1s">
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
								{cellArchitectures.map((item, idx) => (
									<div key={idx} className="col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${0.2 + (idx * 0.1)}s`}>
										<div
											style={{
												padding: "40px",
												background: "#f8fafc",
												border: "1px solid #e2e8f0",
												borderRadius: "16px",
												height: "100%",
												transition: "all 0.3s ease",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor = "#10b981";
												e.currentTarget.style.transform = "translateY(-4px)";
												e.currentTarget.style.background = "#ffffff";
												e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.08)";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor = "#e2e8f0";
												e.currentTarget.style.transform = "translateY(0)";
												e.currentTarget.style.background = "#f8fafc";
												e.currentTarget.style.boxShadow = "none";
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
													borderRadius: "12px",
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
											<p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
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
					<div className="row justify-content-center text-center mb-5 wow fadeInUp" data-wow-delay=".1s">
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
						{cellLineup.map((cell, idx) => (
							<div key={idx} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${0.2 + (idx * 0.2)}s`}>
								<div
									style={{
										background: "#ffffff",
										border: "1px solid #e2e8f0",
										borderRadius: "16px",
										overflow: "hidden",
										height: "100%",
										transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
										display: "flex",
										flexDirection: "column",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "translateY(-8px)";
										e.currentTarget.style.borderColor = "#10b981";
										e.currentTarget.style.boxShadow = "0 20px 40px rgba(10, 25, 49, 0.08)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "translateY(0)";
										e.currentTarget.style.borderColor = "#e2e8f0";
										e.currentTarget.style.boxShadow = "none";
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
											<p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.7", margin: "0 0 20px 0" }}>
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

				<div className="container wow fadeInUp" data-wow-delay=".2s" style={{ position: "relative", zIndex: 2 }}>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<h2 style={{ fontSize: "calc(1.8rem + 1.2vw)", fontWeight: "900", marginBottom: "20px", letterSpacing: "-0.02em" }}>
								Building a Secure Solar Supply Chain for India
							</h2>
							<p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", lineHeight: "1.7", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
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
									href="mailto:partnerships@ziqora.energy"
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
					<div className="row justify-content-center wow fadeInUp" data-wow-delay=".1s">
						<div className="col-lg-10">
							<div style={{ display: "flex", gap: "15px", alignItems: "flex-start", background: "#ffffff", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
								<span style={{ color: "#10b981", fontSize: "20px", marginTop: "2px" }}>
									<i className="fa-solid fa-circle-info"></i>
								</span>
								<p style={{ margin: 0, fontSize: "14px", color: "#64748b", lineHeight: "1.7" }}>
									<strong>Disclaimer for Investors & Partners:</strong> Ziqora is currently in the project development stage. Monocrystalline silicon ingot casting, wafer slicing, and solar cell manufacturing equipment procurement, capacity figures, efficiency targets, and site development milestones are planned targets subject to ongoing engineering design studies, final approvals, capital deployment schedules, and supply timelines. Ziqora does not claim active, fully operational cell production capacity or commercial supply streams at the present time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CellLineupAndProcess;
