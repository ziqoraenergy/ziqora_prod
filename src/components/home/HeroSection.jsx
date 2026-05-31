"use client";

import Link from "next/link";

const HeroSection = () => {
	return (
		<section
			className="hero-section d-flex align-items-center"
			style={{
				position: "relative",
				minHeight: "100vh",
				padding: "140px 0 100px 0",
				background: "#050b14",
				color: "#ffffff",
				overflow: "hidden",
			}}
		>
			{/* High-quality background video loop */}
			<video
				autoPlay
				loop
				muted
				playsInline
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: 0,
					opacity: 0.85,
					filter: "contrast(1.05)",
				}}
			>
				<source src="/videos/tongwei_silicon_hero.mp4" type="video/mp4" />
			</video>

			{/* Dark gradient overlay for modern contrast */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "linear-gradient(to right, rgba(5, 11, 20, 0.85) 0%, rgba(5, 11, 20, 0) 60%)",
					zIndex: 1,
				}}
			></div>

			{/* Floating abstract solar lines background shape */}
			<div
				style={{
					position: "absolute",
					bottom: "-20%",
					right: "-10%",
					width: "600px",
					height: "600px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
					filter: "blur(60px)",
					pointerEvents: "none",
					zIndex: 1,
				}}
			></div>
			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row align-items-center">
					<div className="col-lg-8">
						<div className="hero-content">

							<h1
								style={{
									fontSize: "calc(2.5rem + 2vw)",
									fontWeight: "800",
									lineHeight: 1.15,
									color: "#ffffff",
									marginBottom: "25px",
									letterSpacing: "-0.02em",
									textShadow: "0px 4px 20px rgba(0, 0, 0, 0.8), 0px 2px 10px rgba(0, 0, 0, 0.6)",
								}}
							>
								Advanced Wafers & <br />
								<span style={{ color: "#10b981" }}>High-Efficiency Cells</span>
							</h1>
							<p
								style={{
									fontSize: "18px",
									color: "rgba(255, 255, 255, 0.85)",
									lineHeight: "1.6",
									marginBottom: "40px",
									maxWidth: "650px",
									textShadow: "0px 2px 10px rgba(0, 0, 0, 0.8)",
								}}
							>
								Ziqora is building a state-of-the-art 5 GW manufacturing ecosystem in Odisha, setting Tier-1 global standards for premium N-Type wafers and high-efficiency solar cells.
							</p>
							<div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
								<Link
									href="/project"
									style={{
										background: "#10b981",
										color: "#ffffff",
										padding: "16px 32px",
										borderRadius: "6px",
										fontWeight: "600",
										transition: "all 0.3s ease",
										boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
									}}
									className="tj-btn-hover"
								>
									Explore Our Vision
								</Link>
								<Link
									href="/contact"
									style={{
										border: "2px solid rgba(255, 255, 255, 0.3)",
										color: "#ffffff",
										padding: "14px 30px",
										borderRadius: "6px",
										fontWeight: "600",
										transition: "all 0.3s ease",
									}}
									onMouseEnter={(e) => (e.target.style.borderColor = "#ffffff")}
									onMouseLeave={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.3)")}
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
