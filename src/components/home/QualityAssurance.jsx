import Link from "next/link";
import Image from "next/image";

const QualityAssurance = () => {
	const parameters = [
		{ icon: "fa-bolt", title: "Resistivity", unit: "Ω·cm", value: ">200" },
		{ icon: "fa-percent", title: "Purity", unit: "%", value: ">99.999999999%" },
		{ icon: "fa-cubes", title: "Density", unit: "g/cm³", value: "2.32~2.34" },
		{ icon: "fa-fire", title: "Melting point", unit: "°C", value: "1410" },
		{ icon: "fa-temperature-arrow-up", title: "Boiling point", unit: "°C", value: "2355" }
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
							Setting the Standard for High-Purity Silicon
						</h2>

						<div className="row mb-5 wow fadeInUp" data-wow-delay=".4s">
							<div className="col-md-3 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>11N</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Targeting 99.9999999% ultra-high purity electronic grade polysilicon
								</p>
							</div>
							<div className="col-md-3 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>100<span style={{fontSize: "24px", color:"#10b981"}}>%</span></h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Commitment to 100% traceable, ethically sourced raw materials
								</p>
							</div>
							<div className="col-md-3 col-6 mb-4">
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>Tier-1</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Equipping facility with Tier-1 global manufacturing standards
								</p>
							</div>
							<div className="col-md-3 col-6 mb-4">
								<h3 style={{ fontSize: "28px", fontWeight: "800", color: "#0a1931", marginBottom: "5px" }}>Ph 1</h3>
								<p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.4", margin: 0 }}>
									Preparing for Phase 1 of advanced Ingot & Wafer production
								</p>
							</div>
						</div>

						<div className="wow fadeInUp" data-wow-delay=".5s" style={{ borderTop: "1px solid #cbd5e1", paddingTop: "40px" }}>
							<h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "25px", color: "#0a1931" }}>
								Our Roadmap to Uncompromised Quality
							</h3>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								{[
									"Strategic sourcing of premium electronic-grade polysilicon",
									"State-of-the-art Czochralski (Cz) mono pulling technology planned",
									"Commitment to zero-defect material standards",
									"Optimizing for high-efficiency N-type solar cell architectures",
									"Sustainable and energy-efficient manufacturing design"
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

					</div>
				</div>
			</div>
			
			<div className="wow fadeInRight" data-wow-delay=".6s" style={{ position: "absolute", right: "-5%", top: "0", width: "55%", height: "100%", zIndex: 1, display: "flex", alignItems: "flex-start", paddingTop: "5%", justifyContent: "center" }}>
				<Image 
					src="/images/silicon_with_shadow.png" 
					alt="High-purity crystalline silicon rock" 
					fill
					style={{ objectFit: "contain", objectPosition: "center top", mixBlendMode: "multiply", opacity: 0.95, zIndex: 1 }}
				/>
			</div>
		</section>
	);
};

export default QualityAssurance;
