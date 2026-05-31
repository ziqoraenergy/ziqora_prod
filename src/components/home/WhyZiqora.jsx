const WhyZiqora = () => {
	return (
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
	);
};

export default WhyZiqora;
