import Link from "next/link";

const SustainabilityPreview = () => {
	return (
		<section
			className="sustainability-preview-section section-gap-x"
			style={{
				padding: "100px 0",
				position: "relative",
				background: "linear-gradient(rgba(10, 25, 49, 0.95), rgba(10, 25, 49, 0.95)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				color: "#ffffff",
			}}
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
							OUR COMMITMENT
						</span>
						<h2
							style={{
								color: "#ffffff",
								fontWeight: "800",
								fontSize: "36px",
								marginBottom: "20px",
							}}
						>
							Commitment to a Green Future
						</h2>
						<p
							style={{
								color: "rgba(255, 255, 255, 0.8)",
								fontSize: "16px",
								lineHeight: "1.6",
								marginBottom: "30px",
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
								color: "#10b981",
								fontWeight: "700",
							}}
						>
							Discover Our ESG Roadmap <i className="fa-solid fa-arrow-right"></i>
						</Link>
					</div>
					<div className="col-lg-6 mt-5 mt-lg-0 text-center">
						<div
							style={{
								position: "relative",
								display: "inline-block",
								borderRadius: "12px",
								overflow: "hidden",
								boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
							}}
						>
							<img
								src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
								alt="Sustainability nature elements"
								style={{ maxWidth: "100%", height: "auto", display: "block" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SustainabilityPreview;
