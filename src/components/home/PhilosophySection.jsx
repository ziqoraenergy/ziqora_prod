const PhilosophySection = () => {
	return (
		<section
			className="philosophy-section"
			style={{
				padding: "120px 0 0 0",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
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
				className="ziqora-accordion-container"
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
					.ziqora-accordion-container {
						flex-direction: row;
					}
					@media (max-width: 991px) {
						.ziqora-accordion-container {
							flex-direction: column !important;
							height: 800px !important;
						}
						.ziqora-column {
							min-height: 150px;
							border-right: none !important;
							border-bottom: 1px solid rgba(255, 255, 255, 0.1);
						}
					}
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

			{/* Quick Stats Banner injected at the bottom of Philosophy Section */}
			<div style={{ backgroundColor: "#0b1221", padding: "60px 0" }}>
				<div className="container">
					<div className="row text-center align-items-center">
						<div className="col-md-3 col-6 mb-4 mb-md-0 wow fadeInUp" data-wow-delay=".1s">
							<h2 style={{ color: "#10b981", fontSize: "40px", fontWeight: "800", marginBottom: "10px", letterSpacing: "-1px" }}>5 GW</h2>
							<p style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>PLANNED WAFER CAPACITY</p>
						</div>
						<div className="col-md-3 col-6 mb-4 mb-md-0 wow fadeInUp" data-wow-delay=".2s">
							<h2 style={{ color: "#10b981", fontSize: "40px", fontWeight: "800", marginBottom: "10px", letterSpacing: "-1px" }}>5 GW</h2>
							<p style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>PLANNED SOLAR CELL CAPACITY</p>
						</div>
						<div className="col-md-3 col-6 mb-4 mb-md-0 wow fadeInUp" data-wow-delay=".3s">
							<h2 style={{ color: "#10b981", fontSize: "40px", fontWeight: "800", marginBottom: "10px", letterSpacing: "-1px" }}>Odisha</h2>
							<p style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>MANUFACTURING BASE</p>
						</div>
						<div className="col-md-3 col-6 mb-4 mb-md-0 wow fadeInUp" data-wow-delay=".4s">
							<h2 style={{ color: "#10b981", fontSize: "40px", fontWeight: "800", marginBottom: "10px", letterSpacing: "-1px" }}>Domestic</h2>
							<p style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>INDIA-FOCUSED SUPPLY CHAIN</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PhilosophySection;
