"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";

export default function Error() {
	return (
		<div>
			<title>Ziqora - Application Error</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<section
							style={{
								padding: "0",
								minHeight: "100vh",
								display: "flex",
								alignItems: "center",
								position: "relative",
								background: "#0a1931",
								color: "#ffffff",
								overflow: "hidden",
							}}
						>
							{/* Background graphics */}
							<div style={{ position: "absolute", top: "-10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }}></div>
							<div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }}></div>
							
							<div className="container" style={{ position: "relative", zIndex: 1 }}>
								<div className="row justify-content-center text-center">
									<div className="col-lg-8">
										<h1
											style={{
												fontSize: "clamp(80px, 15vw, 150px)",
												fontWeight: "900",
												color: "#ef4444",
												lineHeight: "1",
												marginBottom: "20px",
												letterSpacing: "-5px",
												textShadow: "0 10px 30px rgba(239, 68, 68, 0.2)"
											}}
										>
											Oops!
										</h1>
										<h2
											style={{
												color: "#ffffff",
												fontWeight: "800",
												fontSize: "36px",
												marginBottom: "20px",
											}}
										>
											Something went wrong
										</h2>
										<p
											style={{
												color: "rgba(255, 255, 255, 0.7)",
												fontSize: "18px",
												lineHeight: "1.6",
												marginBottom: "40px",
												maxWidth: "600px",
												margin: "0 auto 40px auto",
											}}
										>
											An unexpected application error occurred. Our technical team has been notified and is looking into the issue.
										</p>
										<Link
											href="/"
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
											Back to Homepage <i className="fa-solid fa-arrow-right"></i>
										</Link>
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
