"use client";

import React from "react";
import Image from "next/image";

const WaferManufacturingProcess = () => {
	const processSteps = [
		{
			step: "01",
			title: "Sourcing Premium Polysilicon",
			description: "We begin by importing the highest grade (11N) electronic-grade polysilicon. This ultra-pure raw material is the critical foundation for high-efficiency N-Type solar cells.",
			icon: "fa-cubes",
			image: "process_sourcing_1780343588201.png"
		},
		{
			step: "02",
			title: "Czochralski (Cz) Ingot Pulling",
			description: "The polysilicon is melted in a quartz crucible at over 1,400°C. A seed crystal is introduced and slowly pulled upwards, growing into a massive, perfect single-crystal cylindrical ingot.",
			icon: "fa-temperature-high",
			image: "process_ingot_pulling_1780343604885.png"
		},
		{
			step: "03",
			title: "Squaring & Cropping",
			description: "The cylindrical ingot is precisely cropped to remove uneven ends and then meticulously machined into a perfectly shaped square block, optimizing it for maximum surface area.",
			icon: "fa-crop-simple",
			image: "process_squaring_1780343620987.png"
		},
		{
			step: "04",
			title: "Diamond Wire Slicing",
			description: "Using state-of-the-art diamond wire technology, the squared ingot is sliced into ultra-thin wafers (under 130μm). This minimizes kerf loss and maximizes yield.",
			icon: "fa-layer-group",
			image: "process_slicing_1780343636901.png"
		},
		{
			step: "05",
			title: "Cleaning & Quality Assurance",
			description: "Each wafer undergoes rigorous chemical cleaning and automated optical inspection to detect micro-cracks or defects, ensuring a zero-defect standard before moving to cell production.",
			icon: "fa-check-double",
			image: "process_inspection_1780343651315.png"
		}
	];

	return (
		<>
			{/* SECTION 1: DARK THEME (The Foundation) */}
			<section style={{ backgroundColor: "#050b14", width: "100%", overflow: "hidden" }}>


				{/* Full-width Split Screen */}
				<div className="d-flex flex-column flex-lg-row" style={{ minHeight: "100vh", width: "100%" }}>
					
					{/* Left Half: Silicon */}
					<div 
						className="wow fadeInLeft" 
						data-wow-delay=".3s"
						style={{ 
							flex: 1, 
							position: "relative", 
							backgroundImage: "url('/images/ziqora/steptodown.com189421.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
							display: "flex", 
							alignItems: "center", 
							justifyContent: "center", 
							padding: "80px 40px",
							overflow: "hidden",
							minHeight: "50vh"
						}}
					>
						{/* Dark Overlay with transition */}
						<div 
							style={{ 
								position: "absolute", 
								top: 0, 
								left: 0, 
								width: "100%", 
								height: "100%", 
								background: "linear-gradient(to right, rgba(5, 11, 20, 0.95) 0%, rgba(5, 11, 20, 0.7) 100%)",
								transition: "all 0.5s ease",
								zIndex: 1
							}}
							onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(to right, rgba(5, 11, 20, 0.85) 0%, rgba(5, 11, 20, 0.5) 100%)"}
							onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(to right, rgba(5, 11, 20, 0.95) 0%, rgba(5, 11, 20, 0.7) 100%)"}
						></div>

						<div style={{ position: "relative", zIndex: 2, maxWidth: "550px", pointerEvents: "none" }}>
							<div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
								<div style={{ width: "65px", height: "65px", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
									<i className="fa-solid fa-atom" style={{ color: "#10b981", fontSize: "30px" }}></i>
								</div>
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff", margin: 0 }}>What is Silicon?</h3>
							</div>
							<p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.9", margin: 0, fontSize: "17px" }}>
								Silicon is the second most abundant element in the Earth's crust, primarily found in sand. However, for solar applications, it must be refined into extremely pure <strong style={{ color: "#10b981" }}>polysilicon</strong> (99.9999999% pure). This high-purity semiconductor material possesses the unique ability to convert sunlight into electricity through the photovoltaic effect.
							</p>
						</div>
					</div>

					{/* Right Half: Wafers */}
					<div 
						className="wow fadeInRight" 
						data-wow-delay=".5s"
						style={{ 
							flex: 1, 
							position: "relative", 
							backgroundImage: "url('/images/ziqora/steptodown.com271619.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
							display: "flex", 
							alignItems: "center", 
							justifyContent: "center", 
							padding: "80px 40px",
							overflow: "hidden",
							minHeight: "50vh"
						}}
					>
						{/* Dark Overlay with transition */}
						<div 
							style={{ 
								position: "absolute", 
								top: 0, 
								left: 0, 
								width: "100%", 
								height: "100%", 
								background: "linear-gradient(to left, rgba(5, 11, 20, 0.95) 0%, rgba(5, 11, 20, 0.7) 100%)",
								transition: "all 0.5s ease",
								zIndex: 1
							}}
							onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(to left, rgba(5, 11, 20, 0.85) 0%, rgba(5, 11, 20, 0.5) 100%)"}
							onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(to left, rgba(5, 11, 20, 0.95) 0%, rgba(5, 11, 20, 0.7) 100%)"}
						></div>

						<div style={{ position: "relative", zIndex: 2, maxWidth: "550px", pointerEvents: "none" }}>
							<div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
								<div style={{ width: "65px", height: "65px", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
									<i className="fa-solid fa-border-all" style={{ color: "#10b981", fontSize: "30px" }}></i>
								</div>
								<h3 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff", margin: 0 }}>What are Wafers?</h3>
							</div>
							<p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.9", margin: 0, fontSize: "17px" }}>
								A silicon wafer is an ultra-thin (less than the thickness of a human hair) square slice of a single-crystal silicon block. It serves as the physical and electrical heart of a solar panel. Once cut, these wafers are processed into <strong style={{ color: "#10b981" }}>Solar Cells</strong>, which are then assembled into the solar panels that power homes.
							</p>
						</div>
					</div>

				</div>
			</section>

			{/* SECTION 2: LIGHT THEME (Manufacturing Process) */}
			<section style={{ padding: "120px 0", backgroundColor: "#ffffff", position: "relative" }}>
				{/* Subtle background grid pattern */}
				<div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5, zIndex: 1 }}></div>
				
				<div className="container" style={{ position: "relative", zIndex: 2 }}>
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay=".1s">
								<h2 style={{ fontSize: "40px", fontWeight: "800", color: "#0a1931", marginBottom: "20px", letterSpacing: "-0.5px" }}>
									The Manufacturing Timeline
								</h2>
								<p style={{ color: "#64748b", fontSize: "17px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
									Our state-of-the-art facility is designed to take premium imported polysilicon and transform it into world-class N-Type wafers through a rigorous, highly automated process.
								</p>
							</div>

							<div style={{ position: "relative" }}>
								{/* Connecting Line for Timeline */}
								<div className="d-none d-md-block" style={{ position: "absolute", left: "50%", top: "40px", bottom: "40px", width: "4px", background: "linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.4) 50%, rgba(16, 185, 129, 0.1) 100%)", transform: "translateX(-50%)", borderRadius: "2px" }}></div>

								{processSteps.map((step, index) => (
									<div key={index} className="row align-items-center mb-5 position-relative wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`} style={{ zIndex: 2 }}>
										{index % 2 === 0 ? (
											// Left aligned text
											<>
												<div className="col-md-5 text-md-end text-center mb-4 mb-md-0 pe-md-5">
													<div style={{ background: "#ffffff", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden", border: "1px solid rgba(226, 232, 240, 0.8)", transition: "all 0.3s ease" }}
														onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 15px 50px rgba(16, 185, 129, 0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
														onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
													>
														<span style={{ position: "absolute", top: "-10px", right: "20px", color: "#f1f5f9", fontWeight: "900", fontSize: "100px", opacity: 0.8, lineHeight: 1, zIndex: 0, userSelect: "none" }}>{step.step}</span>
														<div style={{ position: "relative", zIndex: 1 }}>
															<h4 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1931", marginBottom: "15px" }}>{step.title}</h4>
															<p style={{ color: "#475569", lineHeight: "1.7", margin: 0, fontSize: "15px" }}>{step.description}</p>
														</div>
													</div>
												</div>
												<div className="col-md-2 d-flex justify-content-center align-items-center mb-4 mb-md-0">
													<div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px rgba(16, 185, 129, 0.2)", border: "2px solid #10b981", zIndex: 3 }}>
														<i className={`fa-solid ${step.icon}`} style={{ fontSize: "24px" }}></i>
													</div>
												</div>
												<div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
													<div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
														<Image src={`/images/ziqora/${step.image}`} alt={step.title} fill style={{ objectFit: "cover" }} />
													</div>
												</div>
											</>
										) : (
											// Right aligned text
											<>
												<div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
													<div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
														<Image src={`/images/ziqora/${step.image}`} alt={step.title} fill style={{ objectFit: "cover" }} />
													</div>
												</div>
												<div className="col-md-2 d-flex justify-content-center align-items-center mb-4 mb-md-0">
													<div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px rgba(16, 185, 129, 0.2)", border: "2px solid #10b981", zIndex: 3 }}>
														<i className={`fa-solid ${step.icon}`} style={{ fontSize: "24px" }}></i>
													</div>
												</div>
												<div className="col-md-5 text-md-start text-center ps-md-5">
													<div style={{ background: "#ffffff", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden", border: "1px solid rgba(226, 232, 240, 0.8)", transition: "all 0.3s ease" }}
														onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 15px 50px rgba(16, 185, 129, 0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
														onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
													>
														<span style={{ position: "absolute", top: "-10px", left: "20px", color: "#f1f5f9", fontWeight: "900", fontSize: "100px", opacity: 0.8, lineHeight: 1, zIndex: 0, userSelect: "none" }}>{step.step}</span>
														<div style={{ position: "relative", zIndex: 1 }}>
															<h4 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1931", marginBottom: "15px" }}>{step.title}</h4>
															<p style={{ color: "#475569", lineHeight: "1.7", margin: 0, fontSize: "15px" }}>{step.description}</p>
														</div>
													</div>
												</div>
											</>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WaferManufacturingProcess;
