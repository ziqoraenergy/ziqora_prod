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
				background: "#ffffff",
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

						<div className="wow fadeInUp" data-wow-delay=".5s" style={{ borderTop: "1px solid #cbd5e1", paddingTop: "40px" }}>
							<h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "25px", color: "#0a1931" }}>
								Our Wafer Technology Advantages
							</h3>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								{[
									"Optimized for TOPCon and HJT high-efficiency cell architectures",
									"State-of-the-art Czochralski (Cz) mono pulling technology",
									"Advanced diamond wire slicing for minimal kerf loss"
								].map((item, idx) => (
									<li key={idx} style={{ position: "relative", paddingLeft: "15px", marginBottom: "12px", fontSize: "14px", color: "#334155" }}>
										<span style={{ position: "absolute", left: 0, top: "6px", width: "4px", height: "10px", background: "#10b981", borderRadius: "2px" }}></span>
										{item}
									</li>
								))}
							</ul>
						</div>

						{/* Technical Specs Bar (Clean version without horizontal line) */}
						<div className="row mt-5 pt-5 wow fadeInUp" data-wow-delay=".7s" style={{ position: "relative", zIndex: 3, borderTop: "1px dashed #e2e8f0" }}>
							{parameters.map((param, index) => (
								<div key={index} className="col-6 col-md-4 col-lg mb-4" style={{ 
									display: "flex", 
									flexDirection: "column", 
									alignItems: "center", 
									textAlign: "center"
								}}>
									<i className={`fa-solid ${param.icon}`} style={{ fontSize: "26px", color: "#000000", marginBottom: "12px" }}></i>
									<span style={{ fontSize: "13px", color: "#64748b", fontWeight: "400", marginBottom: "2px" }}>{param.title}</span>
									<span style={{ fontSize: "11px", color: "#cbd5e1", marginBottom: "12px" }}>&lt;{param.unit}&gt;</span>
									<h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ef4444", margin: 0, letterSpacing: "-0.5px" }}>
										{param.value}
									</h3>
								</div>
							))}
						</div>

						{/* Static Image for Mobile Only */}
						<div className="d-block d-lg-none mt-5 text-center position-relative" style={{ height: "300px", width: "100%" }}>
							<Image 
								src="/images/ziqora/wafers_on_white.png" 
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
				<Image 
					src="/images/ziqora/wafers_on_white.png" 
					alt="High-purity Silicon Wafers" 
					fill
					style={{ objectFit: "contain", objectPosition: "center top", mixBlendMode: "multiply", opacity: 0.95, zIndex: 1 }}
				/>
			</div>
		</section>
	);
};

export default SiliconWafers;
