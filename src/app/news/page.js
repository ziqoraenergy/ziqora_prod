"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";
import { useState, useEffect } from "react";

const newsPosts = [
	{
		id: 1,
		category: "Company Updates",
		date: "May 28, 2026",
		title: "Ziqora Initiates Feasibility Studies for 5 GW Manufacturing Base in Odisha",
		desc: "Taking the first technical steps towards securing location sites, outlining solar ecosystem designs, and planning domestic infrastructure partners. This mega-factory represents our commitment to driving India's domestic clean energy capacity to unprecedented levels.",
		image: "/assets/images/news/news_post_1.png",
	},
	{
		id: 2,
		category: "Solar Manufacturing",
		date: "May 15, 2026",
		title: "How Domestic Wafer Production Protects India's Clean Energy Independence",
		desc: "Analyzing India's current dependence on component imports, and why building domestic capacity is vital to reaching national solar goals.",
		image: "/assets/images/news/news_post_2.png",
	},
	{
		id: 3,
		category: "Policy Updates",
		date: "May 02, 2026",
		title: "Odisha Industrial Policies Create Favorable Landscape for Renewable Projects",
		desc: "Reviewing local state incentives, land procurement processes, and infrastructure support frameworks that benefit green manufacturing.",
		image: "/assets/images/news/news_post_3.png",
	},
	{
		id: 4,
		category: "Industry Insights",
		date: "April 20, 2026",
		title: "The Shift to N-Type TOPCon Cells: High Efficiency Solar Horizons",
		desc: "An in-depth look at how N-Type semiconductor technologies are superseding traditional P-Type cells globally.",
		image: "/assets/images/news/news_post_4.png",
	},
	{
		id: 5,
		category: "Blogs",
		date: "April 10, 2026",
		title: "Securing the Green Grid: A Localized Manufacturing Paradigm",
		desc: "Exploring how regional factories build supply security and mitigate global shipping emissions by centralizing components fabrication.",
		image: "/assets/images/news/news_post_5.png",
	},
	{
		id: 6,
		category: "Company Updates",
		date: "March 25, 2026",
		title: "Ziqora Vision Shared at National Solar Assembly",
		desc: "Our project development leaders discussed the long-term potential of Odisha as an emerging solar manufacturing power base.",
		image: "/assets/images/news/news_post_6.png",
	},
];

const categories = [
	"All",
	"Company Updates",
	"Industry Insights",
	"Solar Manufacturing",
	"Policy Updates",
	"Blogs",
];

export default function News() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredPosts =
		activeCategory === "All"
			? newsPosts
			: newsPosts.filter((post) => post.category === activeCategory);

	const featuredPost = filteredPosts[0];
	const gridPosts = filteredPosts.slice(1);

	useEffect(() => {
		let timer;
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
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<title>News & Insights | Ziqora</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper" style={{ overflowX: "hidden", backgroundColor: "#f8fafc" }}>
				<div id="smooth-content">
					<main>
						
						{/* HERO SECTION */}
						<section
							style={{
								position: "relative",
								minHeight: "75vh",
								display: "flex",
								alignItems: "center",
								padding: "160px 0 100px 0",
								backgroundImage: "url('/assets/images/background/news_hero_human.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundAttachment: "fixed",
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
									background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.9) 0%, rgba(2, 6, 23, 0.6) 100%)",
									zIndex: 1,
								}}
							></div>

							<div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
								<span
									style={{
										display: "inline-block",
										color: "#10b981",
										fontWeight: "700",
										letterSpacing: "3px",
										textTransform: "uppercase",
										fontSize: "13px",
										marginBottom: "20px",
										background: "rgba(16, 185, 129, 0.1)",
										padding: "6px 16px",
										borderRadius: "30px",
										border: "1px solid rgba(16, 185, 129, 0.2)"
									}}
								>
									Media Relations
								</span>
								<h1
									style={{
										fontFamily: "'Inter', sans-serif",
										fontWeight: "900",
										color: "#ffffff",
										fontSize: "calc(3.5rem + 2vw)",
										lineHeight: 1.1,
										marginBottom: "25px",
										letterSpacing: "-0.02em",
									}}
								>
									News & Insights
								</h1>
								<p
									style={{
										fontSize: "20px",
										color: "rgba(255, 255, 255, 0.85)",
										maxWidth: "700px",
										margin: "0 auto",
										lineHeight: "1.7",
										fontWeight: "400"
									}}
								>
									Explore the latest breakthroughs in clean energy, policy shifts, and strategic updates from the frontlines of Ziqora's solar manufacturing revolution.
								</p>
							</div>
						</section>

						{/* NEWS CONTENT SECTION */}
						<section style={{ padding: "80px 0 120px 0", backgroundColor: "#f8fafc", position: "relative", zIndex: 5 }}>
							<div className="container">
								
								{/* Category Filters */}
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: "12px",
										justifyContent: "center",
										marginBottom: "60px",
									}}
								>
									{categories.map((cat) => (
										<button
											key={cat}
											onClick={() => setActiveCategory(cat)}
											style={{
												background: activeCategory === cat ? "#10b981" : "#ffffff",
												color: activeCategory === cat ? "#ffffff" : "#475569",
												padding: "12px 24px",
												borderRadius: "30px",
												fontWeight: "600",
												fontSize: "15px",
												border: "1px solid",
												borderColor: activeCategory === cat ? "#10b981" : "#e2e8f0",
												cursor: "pointer",
												transition: "all 0.3s ease",
												boxShadow: activeCategory === cat ? "0 10px 20px -5px rgba(16,185,129,0.3)" : "0 2px 4px rgba(0,0,0,0.02)"
											}}
											onMouseEnter={(e) => {
												if (activeCategory !== cat) e.currentTarget.style.borderColor = "#cbd5e1";
											}}
											onMouseLeave={(e) => {
												if (activeCategory !== cat) e.currentTarget.style.borderColor = "#e2e8f0";
											}}
										>
											{cat}
										</button>
									))}
								</div>

								{/* Featured Post (Only show if there are posts) */}
								{featuredPost && (
									<div className="row mb-5 pb-4 border-bottom border-light">
										<div className="col-12">
											<div style={{
												background: "#ffffff",
												borderRadius: "24px",
												overflow: "hidden",
												boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
												display: "flex",
												flexDirection: "column",
												transition: "all 0.3s ease",
											}} className="featured-card">
												<div className="row g-0">
													<div className="col-lg-7">
														<div style={{
															height: "100%",
															minHeight: "400px",
															backgroundImage: `url('${featuredPost.image}')`,
															backgroundSize: "cover",
															backgroundPosition: "center",
														}}></div>
													</div>
													<div className="col-lg-5 d-flex align-items-center">
														<div style={{ padding: "50px" }}>
															<div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
																<span style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase" }}>
																	{featuredPost.category}
																</span>
																<span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>{featuredPost.date}</span>
															</div>
															<h2 style={{ color: "#0f172a", fontSize: "32px", fontWeight: "800", marginBottom: "20px", lineHeight: "1.3", letterSpacing: "-0.5px" }}>
																{featuredPost.title}
															</h2>
															<p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7", marginBottom: "30px" }}>
																{featuredPost.desc}
															</p>
															<Link href="#" style={{
																display: "inline-flex", alignItems: "center", gap: "8px", color: "#10b981", fontWeight: "700", fontSize: "16px", textDecoration: "none"
															}}>
																Read Full Article <i className="fa-solid fa-arrow-right"></i>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* Standard Posts Grid */}
								<div className="row g-4">
									{gridPosts.length > 0 ? (
										gridPosts.map((post) => (
											<div key={post.id} className="col-lg-4 col-md-6">
												<div
													style={{
														height: "100%",
														background: "#ffffff",
														border: "1px solid #e2e8f0",
														borderRadius: "20px",
														overflow: "hidden",
														display: "flex",
														flexDirection: "column",
														transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
														boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
														cursor: "pointer"
													}}
													className="news-card"
													onMouseEnter={(e) => {
														e.currentTarget.style.transform = "translateY(-10px)";
														e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.15)";
														e.currentTarget.style.borderColor = "transparent";
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.transform = "translateY(0)";
														e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.05)";
														e.currentTarget.style.borderColor = "#e2e8f0";
													}}
												>
													<div style={{
														height: "240px",
														backgroundImage: `url('${post.image}')`,
														backgroundSize: "cover",
														backgroundPosition: "center",
													}}></div>
													<div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
														<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
															<span style={{ fontSize: "12px", fontWeight: "700", color: "#10b981", textTransform: "uppercase" }}>
																{post.category}
															</span>
															<span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: "500" }}>
																{post.date}
															</span>
														</div>
														<h4 style={{ color: "#0f172a", fontWeight: "800", fontSize: "20px", marginBottom: "15px", lineHeight: "1.4", letterSpacing: "-0.5px" }}>
															{post.title}
														</h4>
														<p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6", marginBottom: "25px", flexGrow: 1 }}>
															{post.desc}
														</p>
														<div style={{ color: "#0f172a", fontWeight: "700", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "auto" }}>
															Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px", color: "#10b981" }}></i>
														</div>
													</div>
												</div>
											</div>
										))
									) : (
										!featuredPost && (
											<div className="col-12 text-center" style={{ color: "#64748b", padding: "60px", background: "#ffffff", borderRadius: "20px", border: "1px dashed #cbd5e1" }}>
												<i className="fa-regular fa-folder-open mb-3" style={{ fontSize: "40px", color: "#94a3b8" }}></i>
												<h4>No articles found</h4>
												<p>There are currently no articles in this category.</p>
											</div>
										)
									)}
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
