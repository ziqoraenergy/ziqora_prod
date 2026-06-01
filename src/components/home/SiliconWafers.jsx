import Link from "next/link";
import Image from "next/image";

const SiliconWafers = () => {
	const parameters = [
		{ icon: "fa-layer-group", title: "Thickness", unit: "μm", value: "<130" },
		{ icon: "fa-expand", title: "Diameter", unit: "mm", value: "210" },
		{ icon: "fa-bolt", title: "Efficiency", unit: "%", value: ">25" },
		{ icon: "fa-microchip", title: "Type", unit: "N-Type", value: "Cz" },
		{ icon: "fa-leaf", title: "LID", unit: "%", value: "Zero" }
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
							Next-Generation Silicon Wafers
						</h2>

						<div className="row mb-5 wow fadeInUp" data-wow-delay=".4s">
							<div className="col-md-4 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>210mm</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Large-format N-Type monocrystalline wafers
								</p>
							</div>
							<div className="col-md-4 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>Zero</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Light-induced degradation (LID) for maximum lifespan
								</p>
							</div>
							<div className="col-md-4 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>&lt;130μm</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Ultra-thin precision slicing technology
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
										<h3 style={{ fontSize: "24px", fontWeight: "800", color: "#0a1931", margin: 0, letterSpacing: "-0.5px" }}>
											{param.value}
										</h3>
									</div>
								</div>
							))}
						</div>

						{/* Static Image for Mobile Only */}
						<div className="d-block d-lg-none mt-5 text-center position-relative" style={{ height: "300px", width: "100%" }}>
							<Image 
								src="/images/ziqora/square_wafer_white.png" 
								alt="High-purity Silicon Wafers" 
								fill
								style={{ objectFit: "contain", objectPosition: "center", mixBlendMode: "multiply" }}
							/>
						</div>
					</div>
				</div>
			</div>
			
			{/* Absolute Positioned Image for Desktop Only */}
			<div className="wow fadeInRight d-none d-lg-flex" data-wow-delay=".6s" style={{ position: "absolute", right: "-5%", top: "0", width: "55%", height: "100%", zIndex: 1, alignItems: "flex-start", paddingTop: "5%", justifyContent: "center" }}>
				<div 
					style={{ 
						position: "relative", 
						width: "100%", 
						height: "100%", 
						animation: "floatImage 6s ease-in-out infinite" 
					}}
				>
					<Image 
						src="/images/ziqora/square_wafer_white.png" 
						alt="High-purity Silicon Wafers" 
						fill
						style={{ objectFit: "contain", objectPosition: "center top", mixBlendMode: "multiply", opacity: 0.95, zIndex: 1 }}
					/>
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

export default SiliconWafers;
