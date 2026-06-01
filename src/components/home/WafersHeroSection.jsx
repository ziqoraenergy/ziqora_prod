import Link from "next/link";
import React from "react";

const WafersHeroSection = () => {
	return (
		<section
			style={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				padding: "100px 0",
				color: "#ffffff",
				overflow: "hidden",
			}}
		>
			{/* Animated Background Image */}
			<div 
				className="hero-bg-anim"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: "url('/images/home/square_wafers.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: 0,
					animation: "slowZoom 20s ease-in-out infinite alternate"
				}}
			></div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "linear-gradient(to right, rgba(10, 25, 49, 0.9) 0%, rgba(10, 25, 49, 0.4) 50%, rgba(10, 25, 49, 0.1) 100%)",
					zIndex: 1,
				}}
			></div>

			{/* Subtle animated overlay pattern */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
					backgroundSize: "32px 32px",
					zIndex: 1,
				}}
			></div>

			{/* Animated Scroll Arrow */}
			<div 
				className="bounce-arrow"
				style={{
					position: "absolute",
					bottom: "40px",
					left: "50%",
					transform: "translateX(-50%)",
					zIndex: 3,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					color: "rgba(255,255,255,0.6)",
					cursor: "pointer",
					animation: "bounce 2s infinite"
				}}
				onClick={() => {
					window.scrollTo({
						top: window.innerHeight,
						behavior: 'smooth'
					});
				}}
			>
				<span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Discover</span>
				<i className="fa-solid fa-chevron-down"></i>
			</div>

			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row align-items-center">
					<div className="col-lg-8 text-start">
						<h1
							className="wow fadeInUp"
							data-wow-delay=".2s"
							style={{
								fontWeight: "900",
								color: "#ffffff",
								fontSize: "calc(2rem + 2vw)",
								lineHeight: 1.15,
								marginBottom: "20px",
								letterSpacing: "-0.02em",
							}}
						>
							Premium Silicon Wafers
						</h1>
						<p
							className="wow fadeInUp"
							data-wow-delay=".4s"
							style={{
								fontSize: "18px",
								color: "rgba(255, 255, 255, 0.9)",
								lineHeight: "1.6",
								maxWidth: "600px",
								margin: "0 0 30px 0",
							}}
						>
							Setting Tier-1 global standards for premium manufacturing with advanced wafer technology.
						</p>
						<div className="wow fadeInUp" data-wow-delay=".6s" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
							<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
							<span style={{ margin: "0 10px" }}>/</span>
							<span>Products</span>
							<span style={{ margin: "0 10px" }}>/</span>
							<span>Silicon Wafers</span>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				@keyframes slowZoom {
					0% { transform: scale(1); }
					100% { transform: scale(1.1); }
				}
				@keyframes bounce {
					0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
					40% { transform: translateY(-15px) translateX(-50%); }
					60% { transform: translateY(-7px) translateX(-50%); }
				}
			`}</style>
		</section>
	);
};

export default WafersHeroSection;
