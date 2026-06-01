const EcosystemFlow = () => {
	return (
		<section
			className="ecosystem-section"
			style={{ 
				padding: "120px 0", 
				minHeight: "100vh", 
				display: "flex", 
				alignItems: "center", 
				background: "linear-gradient(rgba(248, 250, 252, 0.8), rgba(248, 250, 252, 0.9)), url('/images/ziqora/wafer.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="container">
				<div className="row justify-content-center text-center mb-5">
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
							PROCESS FLOW
						</span>
						<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
							Our Proposed Manufacturing Ecosystem
						</h2>
						<p style={{ color: "#64748b" }}>
							A vertical visualization of Ziqora's vision: local processing of imported polysilicon into high-efficiency solar cells.
						</p>
					</div>
				</div>

				{/* Flow diagram layout */}
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								flexWrap: "wrap",
								gap: "20px",
								position: "relative",
							}}
							className="ecosystem-flow-container"
						>
							{[
								{ step: "01", label: "Imported Polysilicon", desc: "Sourcing premium raw materials globally" },
								{ step: "02", label: "Ingot", desc: "Refining and crystallizing raw silicon" },
								{ step: "03", label: "Wafer", desc: "Slicing ultra-thin crystalline wafers" },
								{ step: "04", label: "Solar Cell", desc: "Converting wafers into high-efficiency cells" },
							].map((item, idx, arr) => (
								<div
									key={idx}
									style={{
										flex: "1 1 22%",
										background: "#ffffff",
										padding: "40px 24px",
										borderRadius: "16px",
										border: "1px solid #e2e8f0",
										boxShadow: "0 10px 30px rgba(10,25,49,0.04)",
										textAlign: "center",
										transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
										position: "relative",
										zIndex: 2,
										cursor: "default",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "translateY(-8px)";
										e.currentTarget.style.borderColor = "#10b981";
										e.currentTarget.style.boxShadow = "0 20px 40px rgba(16,185,129,0.1)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "translateY(0)";
										e.currentTarget.style.borderColor = "#e2e8f0";
										e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,25,49,0.04)";
									}}
								>
									<div
										style={{
											width: "48px",
											height: "48px",
											borderRadius: "50%",
											background: "rgba(16,185,129,0.1)",
											color: "#10b981",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											margin: "0 auto 20px auto",
											fontWeight: "800",
											fontSize: "16px",
										}}
									>
										{item.step}
									</div>
									<h5 style={{ color: "#0a1931", fontWeight: "800", fontSize: "18px", marginBottom: "12px" }}>
										{item.label}
									</h5>
									<p style={{ color: "#64748b", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
										{item.desc}
									</p>

									{/* Arrow spacer for desktop */}
									{idx < arr.length - 1 && (
										<div
											className="d-none d-xl-block"
											style={{
												position: "absolute",
												right: "-20px",
												top: "50%",
												transform: "translateY(-50%)",
												zIndex: 3,
												color: "#10b981",
											}}
										>
											<i className="fa-solid fa-chevron-right"></i>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EcosystemFlow;
