"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import ProductsSlider from "@/components/home/ProductsSlider";
import Link from "next/link";

export default function SiliconPage() {
	return (
		<div>
			<title>Premium Silicon Wafers | Ziqora</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						{/* Hero Page Title */}
						<section
							style={{
								position: "relative",
								minHeight: "100vh",
								display: "flex",
								alignItems: "center",
								padding: "100px 0",
								backgroundImage: "url('/images/ziqora/wafers_on_white.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								color: "#ffffff",
								overflow: "hidden",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									background: "rgba(0, 0, 0, 0.7)",
									zIndex: 1,
								}}
							></div>

							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row align-items-center">
									<div className="col-lg-8 text-start">
										<h1
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
										<div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Products</span>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Silicon Wafers</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						<ProductsSlider />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
