"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function About() {
	return (
		<div>
			<title>About Ziqora - Vision, Mission & Our Story</title>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />

						{/* Hero Page Title */}
						<section
							style={{
								position: "relative",
								padding: "140px 0 100px 0",
								backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",
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
									background: "linear-gradient(135deg, rgba(10, 25, 49, 0.95) 0%, rgba(21, 48, 91, 0.8) 100%)",
									zIndex: 1,
								}}
							></div>

							{/* Floating abstract decorative vector shape */}
							<div
								style={{
									position: "absolute",
									bottom: "-50px",
									right: "-50px",
									width: "300px",
									height: "300px",
									borderRadius: "50%",
									background: "rgba(16, 185, 129, 0.05)",
									zIndex: 1,
									filter: "blur(40px)",
								}}
							></div>

							<style>{`
								@keyframes fadeInUp {
									from {
										opacity: 0;
										transform: translateY(30px);
									}
									to {
										opacity: 1;
										transform: translateY(0);
									}
								}
								.hero-fade-in {
									opacity: 0;
									animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
									position: relative;
									z-index: 2;
								}
								.hero-delay-1 {
									animation-delay: 0.1s;
								}
								.hero-delay-2 {
									animation-delay: 0.3s;
								}
								.hero-delay-3 {
									animation-delay: 0.5s;
								}
							`}</style>

							<div className="container" style={{ position: "relative", zIndex: 2 }}>
								<div className="row align-items-center">
									<div className="col-lg-8 text-start">
										<div className="hero-fade-in hero-delay-1" style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
											<span style={{ width: "30px", height: "2px", background: "#10b981" }}></span>
											<span
												style={{
													color: "#10b981",
													fontWeight: "700",
													textTransform: "uppercase",
													letterSpacing: "2px",
													fontSize: "12px",
												}}
											>
												PROJECT DEVELOPMENT STAGE
											</span>
										</div>
										<h1
											className="hero-fade-in hero-delay-2"
											style={{
												fontWeight: "900",
												color: "#ffffff",
												fontSize: "calc(2rem + 2vw)",
												lineHeight: 1.15,
												marginBottom: "20px",
												letterSpacing: "-0.02em",
											}}
										>
											Corporate Charter <br />
											& Institutional Vision
										</h1>
										<p
											className="hero-fade-in hero-delay-3"
											style={{
												fontSize: "18px",
												color: "rgba(255, 255, 255, 0.8)",
												lineHeight: "1.6",
												maxWidth: "600px",
												margin: "0 0 30px 0",
											}}
										>
											Ziqora is establishing a foundational pillar for India's clean energy independence by planning a 5 GW solar wafer and cell production hub in Odisha.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>About Us</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Vision & Mission Section */}
						<section
							id="vision-mission"
							style={{ padding: "120px 0", backgroundColor: "#ffffff" }}
						>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											<div className="col-lg-4 mb-5 mb-lg-0">
												<span
													style={{
														color: "#10b981",
														fontWeight: "600",
														textTransform: "uppercase",
														letterSpacing: "2px",
														fontSize: "13px",
														display: "block",
														marginBottom: "15px",
													}}
												>
													Strategic Direction
												</span>
												<h2
													style={{
														color: "#0a1931",
														fontWeight: "800",
														fontSize: "36px",
														lineHeight: "1.2",
														marginBottom: "20px",
													}}
												>
													Corporate Philosophy & Mandate
												</h2>
												<p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
													As an industrial entity in development, Ziqora is guided by long-term planning, operational rigour, and self-reliance principles.
												</p>
											</div>
											<div className="col-lg-8" style={{ paddingLeft: "40px" }}>
												<div
													style={{
														borderBottom: "1px solid #e2e8f0",
														paddingBottom: "40px",
														marginBottom: "40px",
													}}
												>
													<div
														style={{
															display: "flex",
															alignItems: "flex-start",
															gap: "20px",
														}}
													>
														<div
															style={{
																fontSize: "12px",
																fontWeight: "800",
																color: "#10b981",
																border: "1px solid #10b981",
																borderRadius: "4px",
																padding: "4px 8px",
																lineHeight: 1,
															}}
														>
															VISION
														</div>
														<div style={{ flex: 1 }}>
															<h3
																style={{
																	color: "#0a1931",
																	fontWeight: "800",
																	fontSize: "24px",
																	marginBottom: "15px",
																}}
															>
																Industrial Self-Reliance
															</h3>
															<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
																To establish a foundational pillar for India's clean energy independence, securing the solar supply chain by building high-efficiency, vertically integrated domestic wafer and cell manufacturing capacity.
															</p>
														</div>
													</div>
												</div>

												<div>
													<div
														style={{
															display: "flex",
															alignItems: "flex-start",
															gap: "20px",
														}}
													>
														<div
															style={{
																fontSize: "12px",
																fontWeight: "800",
																color: "#10b981",
																border: "1px solid #10b981",
																borderRadius: "4px",
																padding: "4px 8px",
																lineHeight: 1,
															}}
														>
															MISSION
														</div>
														<div style={{ flex: 1 }}>
															<h3
																style={{
																	color: "#0a1931",
																	fontWeight: "800",
																	fontSize: "24px",
																	marginBottom: "15px",
																}}
															>
																Executing 5 GW Capabilities
															</h3>
															<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
																To deploy state-of-the-art production infrastructures in Odisha, India, introducing Industry 4.0 automation and high-throughput technological standards to supply domestic module manufacturers with reliable, world-class wafers and cells.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Our Story Section */}
						<section
							id="story"
							style={{ padding: "100px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
						>
							<div className="container">
								<div className="row align-items-center justify-content-center">
									<div className="col-lg-10">
										<div className="row align-items-center">
											<div className="col-lg-6 mb-5 mb-lg-0">
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
													BACKGROUND & CONTEXT
												</span>
												<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", marginBottom: "25px" }}>
													Our Story
												</h2>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
													India has set ambitious targets to expand solar generation to secure its clean energy future. However, a significant gap remains: the domestic industry depends heavily on imported solar components—especially wafers and solar cells. This vulnerability exposes local projects to supply chain bottlenecks, tariffs, and geopolitical turbulence.
												</p>
												<p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
													Recognizing this critical bottleneck, **Ziqora** was conceived. Our founders envisioned a state-of-the-art domestic ecosystem that starts from advanced wafers and extends to high-efficiency cells, helping domestic module manufacturers protect their timelines and build a self-reliant energy ecosystem.
												</p>
											</div>
											<div className="col-lg-6 text-center">
												<div
													style={{
														position: "relative",
														borderRadius: "16px",
														overflow: "hidden",
														boxShadow: "0 20px 40px rgba(10,25,49,0.08)",
													}}
												>
													<img
														src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
														alt="Solar panels representing Ziqora's vision"
														style={{ maxWidth: "100%", height: "auto", display: "block" }}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Why Ziqora Section */}
						<section
							id="why-ziqora"
							style={{ padding: "100px 0", backgroundColor: "#ffffff" }}
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
											STRATEGIC ADVANTAGES
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px" }}>
											Why Ziqora
										</h2>
										<p style={{ color: "#64748b" }}>
											Designing the foundation for long-term manufacturing growth and security.
										</p>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row">
											{[
												{
													icon: "fa-map-location-dot",
													title: "Strategic Odisha Location",
													desc: "Odisha offers robust infrastructure, excellent port connectivity for polysilicon imports, investor-friendly industrial policies, and reliable green power corridors.",
												},
												{
													icon: "fa-house-chimney-window",
													title: "Domestic Manufacturing Focus",
													desc: "By focusing entirely on wafer and cell fabrication, we address the critical base layers of the solar value chain inside India, facilitating import substitution.",
												},
												{
													icon: "fa-chart-line",
													title: "Long-Term Industrial Vision",
													desc: "Our plans incorporate expandable capacities (up to 5 GW) and Industry 4.0 standards, ensuring Ziqora remains competitive for decades to come.",
												},
												{
													icon: "fa-rotate",
													title: "Supply Chain Resilience",
													desc: "Providing local module developers with a reliable, local supplier footprint to remove cargo shipment risks and custom clearances delay.",
												},
											].map((item, idx) => (
												<div key={idx} className="col-md-6 mb-4">
													<div
														style={{
															padding: "30px",
															background: "#f8fafc",
															border: "1px solid #e2e8f0",
															borderRadius: "12px",
															height: "100%",
															transition: "all 0.3s ease",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.borderColor = "#10b981";
															e.currentTarget.style.transform = "translateY(-3px)";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.borderColor = "#e2e8f0";
															e.currentTarget.style.transform = "translateY(0)";
														}}
													>
														<div
															style={{
																fontSize: "30px",
																color: "#10b981",
																marginBottom: "20px",
															}}
														>
															<i className={`fa-solid ${item.icon}`}></i>
														</div>
														<h4 style={{ color: "#0a1931", fontWeight: "700", marginBottom: "12px", fontSize: "20px" }}>
															{item.title}
														</h4>
														<p style={{ color: "#64748b", margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
															{item.desc}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
