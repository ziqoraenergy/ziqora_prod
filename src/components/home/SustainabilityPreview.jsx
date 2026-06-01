import Link from "next/link";

const SustainabilityPreview = () => {
	return (
		<section
			className="sustainability-preview-section"
			style={{
				padding: "0",
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				background: "linear-gradient(rgba(10, 25, 49, 0.8), rgba(10, 25, 49, 0.85)), url('/images/ziqora/sustainability_solar_farm.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
				color: "#ffffff",
			}}
		>
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-lg-8 wow fadeInUp" data-wow-delay=".2s">
						<span
							style={{
								color: "#10b981",
								fontWeight: "700",
								textTransform: "uppercase",
								letterSpacing: "2px",
								fontSize: "14px",
								display: "block",
								marginBottom: "15px",
							}}
						>
							OUR COMMITMENT
						</span>
						<h2
							style={{
								color: "#ffffff",
								fontWeight: "800",
								fontSize: "48px",
								marginBottom: "25px",
								letterSpacing: "-1px"
							}}
						>
							Commitment to a Green Future
						</h2>
						<p
							style={{
								color: "rgba(255, 255, 255, 0.85)",
								fontSize: "18px",
								lineHeight: "1.8",
								marginBottom: "40px",
							}}
						>
							We are embedding sustainability at the heart of our project plan. From energy-efficient systems to water reclamation initiatives, Ziqora is committed to establishing low-emission manufacturing models for a cleaner planet.
						</p>
						<Link
							href="/sustainability"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "10px",
								backgroundColor: "#10b981",
								color: "#ffffff",
								padding: "16px 36px",
								borderRadius: "30px",
								fontWeight: "600",
								textDecoration: "none",
								transition: "all 0.3s ease",
								boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
							}}
							onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0ea5e9"; e.currentTarget.style.transform = "translateY(-3px)"; }}
							onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#10b981"; e.currentTarget.style.transform = "translateY(0)"; }}
						>
							Discover Our ESG Roadmap <i className="fa-solid fa-arrow-right"></i>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SustainabilityPreview;
