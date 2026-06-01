const WhyZiqora = () => {
	const pillars = [
		{
			icon: "fa-shield-halved",
			title: "Absolute Supply Chain Security",
			desc: "By establishing a massive 5 GW domestic manufacturing base in Odisha, we completely insulate Indian module manufacturers from volatile international trade disputes, logistics bottlenecks, and unpredictable price fluctuations.",
			delay: ".3s"
		},
		{
			icon: "fa-microchip",
			title: "Next-Generation N-Type Supremacy",
			desc: "We bypass outdated P-type technology entirely. Our facility is engineered strictly for high-efficiency N-Type wafers and solar cells, offering superior power density, lower degradation, and maximum ROI for end-users.",
			delay: ".4s"
		},
		{
			icon: "fa-industry",
			title: "Massive Integrated Scale",
			desc: "Operating at a 5 Gigawatt capacity ensures that as India's demand for renewable energy exponentially increases, Ziqora has the raw throughput and reliability to meet massive utility-scale procurement demands without delay.",
			delay: ".5s"
		},
		{
			icon: "fa-leaf",
			title: "Deep Sustainability Protocol",
			desc: "Clean energy must be clean at the source. From 100% ethically sourced raw materials to energy-efficient manufacturing processes, we minimize the carbon footprint of the very supply chain that powers the green transition.",
			delay: ".6s"
		}
	];

	return (
		<section
			className="why-ziqora-section"
			style={{ padding: "120px 0", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden" }}
		>
			{/* Decorative background circle */}
			<div style={{ position: "absolute", top: "-10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }}></div>

			<div className="container" style={{ position: "relative", zIndex: 1 }}>
				{/* Section Header */}
				<div className="row justify-content-center mb-5 pb-3">
					<div className="col-lg-8 text-center wow fadeInUp" data-wow-delay=".2s">
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
							Strategic Advantage
						</span>
						<h2
							style={{
								color: "#0a1931",
								fontWeight: "800",
								fontSize: "42px",
								marginBottom: "20px",
							}}
						>
							Why Ziqora
						</h2>
						<p
							style={{
								fontSize: "18px",
								lineHeight: "1.6",
								color: "#64748b",
								margin: "0 auto",
								maxWidth: "700px"
							}}
						>
							We aren't just manufacturing solar components; we are engineering India's energy independence. By integrating massive scale with next-generation technology, Ziqora provides an unparalleled strategic advantage to solar module manufacturers.
						</p>
					</div>
				</div>

				{/* Bento Grid */}
				<div className="row">
					{pillars.map((pillar, idx) => (
						<div key={idx} className="col-lg-6 col-md-6 mb-4">
							<div 
								className="why-ziqora-card wow fadeInUp" 
								data-wow-delay={pillar.delay}
								style={{
									background: "#ffffff",
									padding: "40px",
									borderRadius: "16px",
									height: "100%",
									border: "1px solid #e2e8f0",
									boxShadow: "0 10px 30px rgba(10,25,49,0.02)",
									transition: "all 0.3s ease",
									position: "relative",
									overflow: "hidden",
									cursor: "default"
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-5px)";
									e.currentTarget.style.boxShadow = "0 20px 40px rgba(10,25,49,0.06)";
									e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,25,49,0.02)";
									e.currentTarget.style.borderColor = "#e2e8f0";
								}}
							>
								{/* Subtle icon background watermark */}
								<i 
									className={`fa-solid ${pillar.icon}`}
									style={{
										position: "absolute",
										right: "-10px",
										bottom: "-15px",
										fontSize: "120px",
										color: "rgba(16,185,129,0.03)",
										zIndex: 0,
										transform: "rotate(-15deg)"
									}}
								></i>

								<div style={{ position: "relative", zIndex: 1 }}>
									<div 
										style={{ 
											width: "60px", 
											height: "60px", 
											background: "rgba(16,185,129,0.1)", 
											borderRadius: "12px", 
											display: "flex", 
											alignItems: "center", 
											justifyContent: "center",
											marginBottom: "25px"
										}}
									>
										<i className={`fa-solid ${pillar.icon}`} style={{ fontSize: "24px", color: "#10b981" }}></i>
									</div>
									<h4 style={{ color: "#0a1931", fontWeight: "700", fontSize: "22px", marginBottom: "15px" }}>
										{pillar.title}
									</h4>
									<p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
										{pillar.desc}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyZiqora;
