"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";
import { newsPosts } from "@/data/newsData";

export default function ArticlePage({ params }) {
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Next.js App Router params resolution
		const fetchArticle = async () => {
			const resolvedParams = await params;
			const foundArticle = newsPosts.find((p) => p.slug === resolvedParams.slug);
			setArticle(foundArticle);
			setLoading(false);
		};
		fetchArticle();
	}, [params]);

	useEffect(() => {
		let timer;
		if (!loading) {
			import("@/libs/gsap.config").then(({ ScrollTrigger, ScrollSmoother }) => {
				timer = setTimeout(() => {
					const smoother = ScrollSmoother.get();
					if (smoother) {
						smoother.paused(false);
						smoother.scrollTop(0);
					}
					ScrollTrigger.refresh();
				}, 100);
			});
		}
		return () => clearTimeout(timer);
	}, [loading]);

	if (loading) {
		return (
			<div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#ffffff" }}>
				<div className="spinner-border text-success" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	if (!article) {
		return (
			<div>
				<Header />
				<div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", background: "#ffffff" }}>
					<h1 style={{ color: "#0f172a", marginBottom: "20px", fontWeight: "800" }}>Press Release Not Found</h1>
					<p style={{ color: "#475569", marginBottom: "30px" }}>The requested corporate announcement could not be located.</p>
					<Link href="/news" style={{ padding: "14px 28px", background: "#10b981", color: "#fff", textDecoration: "none", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
						RETURN TO NEWSROOM
					</Link>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div>
			<title>{article.title} | Ziqora Newsroom</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper" style={{ overflowX: "hidden", backgroundColor: "#ffffff" }}>
				<div id="smooth-content">
					<main>
						{/* HEADER & TITLE SECTION */}
						<section style={{ paddingTop: "180px", paddingBottom: "30px", backgroundColor: "#ffffff" }}>
							<div className="container">
								
								{/* Corporate Breadcrumbs */}
								<div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "30px" }}>
									<Link href="/news" style={{ color: "#10b981", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }} className="hover-text-dark">
										<i className="fa-solid fa-arrow-left"></i> NEWSROOM
									</Link>
									<span style={{ color: "#cbd5e1" }}>|</span>
									<span style={{ color: "#475569" }}>{article.category}</span>
									<span style={{ color: "#cbd5e1" }}>|</span>
									<span style={{ color: "#94a3b8" }}>PRESS RELEASE</span>
								</div>

								{/* Strict Corporate Title */}
								<div className="row">
									<div className="col-lg-11">
										<h1 style={{ 
											color: "#0f172a", 
											fontSize: "calc(2.5rem + 1vw)", 
											fontWeight: "800", 
											lineHeight: "1.2", 
											letterSpacing: "-0.02em",
											marginBottom: "40px",
											fontFamily: "'Inter', sans-serif"
										}}>
											{article.title}
										</h1>
									</div>
								</div>

								{/* Sharp Separator */}
								<div style={{ height: "4px", width: "60px", background: "#10b981", marginBottom: "20px" }}></div>
								
								{/* Corporate Metadata Block (No Avatar) */}
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", borderBottom: "1px solid #e2e8f0", paddingBottom: "20px" }}>
									<div style={{ display: "flex", gap: "30px" }}>
										<div>
											<div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>SOURCE</div>
											<div style={{ color: "#0f172a", fontWeight: "700", fontSize: "14px" }}>Ziqora Media Relations</div>
										</div>
										<div>
											<div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>DATE</div>
											<div style={{ color: "#0f172a", fontWeight: "700", fontSize: "14px" }}>{article.date.toUpperCase()}</div>
										</div>
									</div>
									<div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
										<button style={{ width: "36px", height: "36px", background: "#f1f5f9", border: "1px solid #e2e8f0", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="hover-bg-dark hover-text-white">
											<i className="fa-brands fa-linkedin-in"></i>
										</button>
										<button style={{ width: "36px", height: "36px", background: "#f1f5f9", border: "1px solid #e2e8f0", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="hover-bg-dark hover-text-white">
											<i className="fa-brands fa-x-twitter"></i>
										</button>
										<button style={{ width: "36px", height: "36px", background: "#f1f5f9", border: "1px solid #e2e8f0", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="hover-bg-dark hover-text-white">
											<i className="fa-solid fa-envelope"></i>
										</button>
										<button style={{ width: "36px", height: "36px", background: "#f1f5f9", border: "1px solid #e2e8f0", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="hover-bg-dark hover-text-white">
											<i className="fa-solid fa-print"></i>
										</button>
									</div>
								</div>
							</div>
						</section>

						{/* TWO-COLUMN ARTICLE CONTENT */}
						<section style={{ paddingBottom: "100px", backgroundColor: "#ffffff" }}>
							<div className="container">
								<div className="row">
									{/* Main Content Column */}
									<div className="col-lg-8" style={{ marginBottom: "50px", paddingRight: "30px" }}>
										
										{/* Sharp Featured Image */}
										<div style={{ 
											width: "100%", 
											height: "450px", 
											borderRadius: "0px", 
											backgroundImage: `url('${article.image}')`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											marginBottom: "40px",
											border: "1px solid #e2e8f0"
										}}></div>

										{/* Article Text (Corporate Formatting) */}
										<div 
											className="article-content-wrapper"
											style={{
												color: "#1e293b",
												fontSize: "17px",
												lineHeight: "1.9",
												fontWeight: "400",
												fontFamily: "'Inter', sans-serif"
											}}
											dangerouslySetInnerHTML={{ __html: article.content }}
										/>
										
										{/* Standard PR Boilerplate */}
										<div style={{ marginTop: "60px", paddingTop: "30px", borderTop: "2px solid #0f172a" }}>
											<h4 style={{ color: "#0f172a", fontWeight: "800", fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>About Ziqora Energy</h4>
											<p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7" }}>
												Ziqora Energy is a leading innovator in clean energy solutions, committed to advancing the global transition to sustainable power. Specializing in high-efficiency solar wafers, cells, and utility-scale manufacturing, Ziqora leverages cutting-edge N-Type TOPCon technologies to deliver superior performance and reliability. With strategic operations expanding across India, Ziqora is dedicated to securing the green grid and driving domestic clean energy independence.
											</p>
										</div>
									</div>

									{/* Sticky Corporate Sidebar Column */}
									<div className="col-lg-4">
										<div style={{ position: "sticky", top: "120px" }}>
											
											{/* Media Resources Block */}
											<div style={{ 
												background: "#f8fafc", 
												borderTop: "4px solid #0f172a",
												padding: "30px",
												marginBottom: "30px"
											}}>
												<h3 style={{ color: "#0f172a", fontWeight: "800", fontSize: "18px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Media Resources</h3>
												
												<a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px", background: "#ffffff", border: "1px solid #e2e8f0", color: "#0f172a", textDecoration: "none", fontWeight: "700", fontSize: "14px", transition: "all 0.3s", marginBottom: "15px" }} className="hover-border-dark">
													<span><i className="fa-regular fa-file-pdf" style={{ marginRight: "10px", color: "#ef4444" }}></i> Download Press Release</span>
													<i className="fa-solid fa-download" style={{ color: "#94a3b8" }}></i>
												</a>
												
												<a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px", background: "#ffffff", border: "1px solid #e2e8f0", color: "#0f172a", textDecoration: "none", fontWeight: "700", fontSize: "14px", transition: "all 0.3s" }} className="hover-border-dark">
													<span><i className="fa-regular fa-image" style={{ marginRight: "10px", color: "#3b82f6" }}></i> Download Media Kit</span>
													<i className="fa-solid fa-download" style={{ color: "#94a3b8" }}></i>
												</a>
											</div>


											
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
					<Footer />
				</div>
			</div>
			
			<style jsx global>{`
				.hover-text-dark:hover { color: #0f172a !important; }
				.hover-text-primary:hover { color: #10b981 !important; }
				.hover-bg-dark:hover { background: #0f172a !important; color: #ffffff !important; border-color: #0f172a !important; }
				.hover-border-dark:hover { border-color: #0f172a !important; }
				.article-content-wrapper p { margin-bottom: 25px; }
				.article-content-wrapper h2, .article-content-wrapper h3 { color: #0f172a; font-weight: 800; margin-top: 45px; margin-bottom: 20px; line-height: 1.3; }
			`}</style>
			
			<ClientWrapper />
		</div>
	);
}
