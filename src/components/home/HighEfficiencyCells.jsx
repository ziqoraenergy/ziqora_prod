import Link from "next/link";
import React from "react";

const HighEfficiencyCells = () => {
	const parameters = [
		{ icon: "fa-bolt", title: "Efficiency", unit: "%", value: ">26.5" },
		{ icon: "fa-layer-group", title: "Architecture", unit: "Type", value: "TOPCon" },
		{ icon: "fa-microchip", title: "Base", unit: "Silicon", value: "N-Type" },
		{ icon: "fa-leaf", title: "LID", unit: "%", value: "Zero" },
		{ icon: "fa-expand", title: "Formats", unit: "Standard", value: "M10/G12" }
	];

	return (
		<section
			className="quality-assurance-section d-flex align-items-center"
			style={{
				padding: "100px 0",
				minHeight: "100vh",
				position: "relative",
				background: "radial-gradient(circle at 100% 0%, #f8fafc 0%, #ffffff 60%)",
				color: "#0a1931",
				overflow: "hidden"
			}}
		>
			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: "42px", fontWeight: "800", marginBottom: "40px", color: "#0a1931" }}>
							High-Efficiency Solar Cells
						</h2>

						<div className="row mb-5 wow fadeInUp" data-wow-delay=".4s">
							<div className="col-md-4 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>5 GW+</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Planned Annual Output Capacity
								</p>
							</div>
							<div className="col-md-4 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>26.5%+</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Target Conversion Efficiency
								</p>
							</div>
							<div className="col-md-4 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>N-Type</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Zero Light-Induced Degradation (LID)
								</p>
							</div>
						</div>

						{/* Technical Specs Bar (Premium Glassmorphic Cards) */}
						<div className="row mt-5 pt-3 wow fadeInUp" data-wow-delay=".7s" style={{ position: "relative", zIndex: 3 }}>
							{parameters.map((param, index) => (
								<div key={index} className="col-6 col-md-4 col-lg mb-4">
									<div 
										style={{ 
											display: "flex", 
											flexDirection: "column", 
											alignItems: "center", 
											textAlign: "center",
											background: "rgba(255, 255, 255, 0.7)",
											backdropFilter: "blur(10px)",
											border: "1px solid rgba(226, 232, 240, 0.8)",
											borderRadius: "16px",
											padding: "25px 15px",
											boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
											transition: "all 0.3s ease",
											cursor: "default"
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.transform = "translateY(-5px)";
											e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.08)";
											e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.transform = "translateY(0)";
											e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.02)";
											e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
										}}
									>
										<div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
											<i className={`fa-solid ${param.icon}`} style={{ fontSize: "18px", color: "#10b981" }}></i>
										</div>
										<span style={{ fontSize: "13px", color: "#475569", fontWeight: "600", marginBottom: "4px" }}>{param.title}</span>
										<span style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>{param.unit}</span>
										<h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1931", margin: 0, letterSpacing: "-0.5px" }}>
											{param.value}
										</h3>
									</div>
								</div>
							))}
						</div>

						{/* Static Image for Mobile Only */}
						<div className="d-block d-lg-none mt-5 text-center position-relative wow fadeInUp" data-wow-delay=".8s" style={{ height: "300px", width: "100%", borderRadius: "20px", overflow: "hidden" }}>
							<img 
								src="/images/home/realistic_cleanroom_solar.png" 
								alt="High-Efficiency Solar Cells" 
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
						</div>
					</div>
					
					{/* Grid Positioned Image for Desktop */}
					<div className="col-lg-5 d-none d-lg-block wow fadeInRight" data-wow-delay=".6s" style={{ paddingLeft: "40px" }}>
						<div 
							style={{ 
								position: "relative", 
								width: "100%", 
								height: "600px", 
								borderRadius: "24px",
								overflow: "hidden",
								boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
								transform: "translateY(-10px)"
							}}
						>
							<img 
								src="/images/home/realistic_cleanroom_solar.png" 
								alt="High-Efficiency Solar Cells" 
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</div>
			
			<style jsx>{`
				@keyframes floatImage {
					0% { transform: translateY(0px); }
					50% { transform: translateY(-20px); }
					100% { transform: translateY(0px); }
				}
			`}</style>
		</section>
	);
};

export default HighEfficiencyCells;
