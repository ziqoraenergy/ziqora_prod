import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export const metadata = {
	title: "Careers - Join Our Journey | Ziqora",
	description: "Ziqora is building the future of solar manufacturing in India. Discover our talent vision and career details in Odisha.",
};

export default function Careers() {
	return (
		<div>
			<BackToTop />
			<Header />
						<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						
						{/* Hero Page Title */}
						<section
							style={{
								position: "relative",
								minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 0",
								backgroundImage: "url('https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1600&auto=format&fit=crop')",
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
												CAREER OPPORTUNITIES
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
											Careers at Ziqora
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
											We are building the future of solar manufacturing in India. Explore our talent vision and career announcements.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>Careers</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Join Our Journey Section */}
						<section style={{ padding: "100px 0", backgroundColor: "#ffffff" }}>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8 text-center">
										<span
											style={{
												color: "#10b981",
												fontWeight: "600",
												textTransform: "uppercase",
												letterSpacing: "1.5px",
												fontSize: "14px",
												display: "block",
												marginBottom: "15px",
											}}
										>
											BUILD THE FUTURE
										</span>
										<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "40px", marginBottom: "25px" }}>
											Join Our Journey
										</h2>
										<p
											style={{
												fontSize: "18px",
												lineHeight: "1.7",
												color: "#475569",
												marginBottom: "40px",
											}}
										>
											We are building the future of solar manufacturing in India. Once our production plant in Odisha enters construction and commissioning phases, we will be seeking top-tier talent in cleanroom operations, silicon crystallization engineering, automation programming, logistics coordination, and administrative support.
										</p>

										<div
											style={{
												background: "#f8fafc",
												border: "1px solid #e2e8f0",
												borderRadius: "12px",
												padding: "30px",
												marginBottom: "40px",
											}}
										>
											<div style={{ fontSize: "24px", color: "#10b981", marginBottom: "15px" }}>
												<i className="fa-solid fa-bell"></i>
											</div>
											<h4 style={{ color: "#0a1931", fontWeight: "800", marginBottom: "10px" }}>
												Future Opportunities Announcement
											</h4>
											<p style={{ color: "#64748b", margin: 0, fontSize: "15px", lineHeight: "1.6" }}>
												Ziqora is currently in the **project development stage**. Specific vacancies, engineering roles, and operational positions will be announced and listed here as our infrastructure works progress.
											</p>
										</div>

										<p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
											Have inquiries regarding future talent needs? Reach out to us at{" "}
											<a href="mailto:careers@ziqora.com" style={{ color: "#10b981", fontWeight: "700" }}>
												careers@ziqora.com
											</a>
										</p>
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

