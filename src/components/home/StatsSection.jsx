const StatsSection = () => {
	return (
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
	);
};

export default StatsSection;
