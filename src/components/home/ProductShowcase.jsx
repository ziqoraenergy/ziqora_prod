"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP, ScrollTrigger } from "@/libs/gsap.config";

const ProductShowcase = () => {
	const sectionRef = useRef(null);

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: "top bottom",
			end: "bottom top",
			snap: {
				snapTo: 0.5,
				duration: { min: 0.3, max: 0.8 },
				delay: 0.1,
				ease: "power2.inOut",
			},
		});
	}, { scope: sectionRef });

	return (
		<section ref={sectionRef} className="product-showcase-section" style={{ background: "#000", overflow: "hidden" }}>
			<div className="container-fluid p-0">
				<div className="row g-0">
					{/* Left Panel: High-purity Crystalline Silicon */}
					<div
						className="col-lg-6 position-relative d-flex flex-column"
						style={{
							minHeight: "100vh",
							backgroundImage: "url('/images/ziqora/wafers_on_white.png')",
							backgroundSize: "cover",
							backgroundPosition: "center right",
							borderRight: "1px solid rgba(255, 255, 255, 0.05)",
						}}
					>
						{/* Dark overlay to ensure text readability */}
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								background: "rgba(0,0,0,0.5)",
								zIndex: 1,
							}}
						></div>

						<div className="p-5 d-flex flex-column justify-content-center align-items-center text-center position-relative h-100" style={{ zIndex: 2 }}>
							<h2
								style={{
									fontSize: "clamp(2rem, 3vw, 3rem)",
									fontWeight: "700",
									color: "#fff",
									marginBottom: "15px",
									letterSpacing: "-0.01em",
									textShadow: "0 2px 10px rgba(0,0,0,0.5)"
								}}
							>
								Premium Silicon Wafers
							</h2>
							<p
								style={{
									fontSize: "1.1rem",
									color: "rgba(255,255,255,0.9)",
									marginBottom: "40px",
									maxWidth: "90%",
									textShadow: "0 2px 5px rgba(0,0,0,0.5)"
								}}
							>
								Setting Tier-1 global standards for premium manufacturing
							</p>
							<div>
								<Link
									href="/products/wafers"
									style={{
										background: "#10b981", // Green color matching the theme
										color: "#fff",
										padding: "12px 30px",
										borderRadius: "4px",
										fontSize: "0.95rem",
										fontWeight: "600",
										display: "inline-flex",
										alignItems: "center",
										gap: "8px",
										transition: "all 0.3s ease",
										textDecoration: "none",
										boxShadow: "0 4px 14px rgba(16,185,129,0.3)"
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.background = "#0d9488";
										e.currentTarget.style.transform = "translateY(-2px)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.background = "#10b981";
										e.currentTarget.style.transform = "translateY(0)";
									}}
								>
									Learn More <span style={{ fontSize: "1.2em", lineHeight: "1" }}>›</span>
								</Link>
							</div>
						</div>
					</div>

					{/* Right Panel: Solar Cells */}
					<div
						className="col-lg-6 position-relative d-flex flex-column"
						style={{
							minHeight: "100vh",
							backgroundImage: "url('/images/home/solar_cell.png')",
							backgroundSize: "cover",
							backgroundPosition: "center left",
						}}
					>
						{/* Dark overlay to ensure text readability */}
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								background: "rgba(0,0,0,0.5)",
								zIndex: 1,
							}}
						></div>

						<div className="p-5 d-flex flex-column justify-content-center align-items-center text-center position-relative h-100" style={{ zIndex: 2 }}>
							<h2
								style={{
									fontSize: "clamp(2rem, 3vw, 3rem)",
									fontWeight: "700",
									color: "#fff",
									marginBottom: "15px",
									letterSpacing: "-0.01em",
									textShadow: "0 2px 10px rgba(0,0,0,0.5)"
								}}
							>
								Solar Cells
							</h2>
							<p
								style={{
									fontSize: "1.1rem",
									color: "rgba(255,255,255,0.9)",
									marginBottom: "40px",
									maxWidth: "90%",
									textShadow: "0 2px 5px rgba(0,0,0,0.5)"
								}}
							>
								Driving the future of solar energy with next-gen high-efficiency technology
							</p>
							<div>
								<Link
									href="/products/cells"
									style={{
										background: "#10b981", // Green color matching the theme
										color: "#fff",
										padding: "12px 30px",
										borderRadius: "4px",
										fontSize: "0.95rem",
										fontWeight: "600",
										display: "inline-flex",
										alignItems: "center",
										gap: "8px",
										transition: "all 0.3s ease",
										textDecoration: "none",
										boxShadow: "0 4px 14px rgba(16,185,129,0.3)"
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.background = "#0d9488";
										e.currentTarget.style.transform = "translateY(-2px)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.background = "#10b981";
										e.currentTarget.style.transform = "translateY(0)";
									}}
								>
									Learn More <span style={{ fontSize: "1.2em", lineHeight: "1" }}>›</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
