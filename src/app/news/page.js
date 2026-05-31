"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link";
import { useState } from "react";

const newsPosts = [
	{
		id: 1,
		category: "Company Updates",
		date: "May 28, 2026",
		title: "Ziqora Initiates Feasibility Studies for 5 GW Manufacturing Base in Odisha",
		desc: "Taking the first technical steps towards securing location sites, outlining solar ecosystem designs, and planning domestic infrastructure partners.",
	},
	{
		id: 2,
		category: "Solar Manufacturing Trends",
		date: "May 15, 2026",
		title: "How Domestic Wafer Production Protects India's Clean Energy Independence",
		desc: "Analyzing India's current dependence on component imports, and why building domestic capacity is vital to reaching national solar goals.",
	},
	{
		id: 3,
		category: "Policy Updates",
		date: "May 02, 2026",
		title: "Odisha Industrial Policies Create Favorable Landscape for Renewable Projects",
		desc: "Reviewing local state incentives, land procurement processes, and infrastructure support frameworks that benefit green manufacturing initiatives.",
	},
	{
		id: 4,
		category: "Industry Insights",
		date: "April 20, 2026",
		title: "The Shift to N-Type TOPCon Cells: High Efficiency Solar Horizons",
		desc: "An in-depth look at how N-Type semiconductor technologies are superseding traditional P-Type cells globally and why Ziqora plans to adopt it.",
	},
	{
		id: 5,
		category: "Blogs",
		date: "April 10, 2026",
		title: "Securing the Green Grid: A Localized Manufacturing Paradigm",
		desc: "Exploring how regional factories build supply security and mitigate global shipping emissions by centralizing components fabrication.",
	},
	{
		id: 6,
		category: "Company Updates",
		date: "March 25, 2026",
		title: "Ziqora Vision Shared at National Solar Assembly",
		desc: "Our project development leaders discussed the long-term potential of Odisha as an emerging solar manufacturing power base at the annual convention.",
	},
];

const categories = [
	"All",
	"Company Updates",
	"Industry Insights",
	"Solar Manufacturing Trends",
	"Policy Updates",
	"Blogs",
];

export default function News() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredPosts =
		activeCategory === "All"
			? newsPosts
			: newsPosts.filter((post) => post.category === activeCategory);

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
												MEDIA RELATION
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
											News & Insights
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
											Reviewing industry progress, clean energy regulations, state industrial schemes, and Ziqora project updates.
										</p>
										<div className="hero-fade-in hero-delay-3" style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
											<Link href="/" style={{ color: "#10b981", fontWeight: "600" }}>Home</Link>
											<span style={{ margin: "0 10px" }}>/</span>
											<span>News & Insights</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* News Content */}
						<section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										{/* Category Filters */}
										<div
											style={{
												display: "flex",
												flexWrap: "wrap",
												gap: "10px",
												justifyContent: "center",
												marginBottom: "50px",
											}}
										>
											{categories.map((cat) => (
												<button
													key={cat}
													onClick={() => setActiveCategory(cat)}
													style={{
														background: activeCategory === cat ? "#10b981" : "#f8fafc",
														color: activeCategory === cat ? "#ffffff" : "#475569",
														padding: "10px 20px",
														borderRadius: "30px",
														fontWeight: "600",
														fontSize: "14px",
														border: "1px solid",
														borderColor: activeCategory === cat ? "#10b981" : "#e2e8f0",
														cursor: "pointer",
														transition: "all 0.3s ease",
													}}
												>
													{cat}
												</button>
											))}
										</div>

										{/* News Cards Grid */}
										<div className="row">
											{filteredPosts.length > 0 ? (
												filteredPosts.map((post) => (
													<div key={post.id} className="col-md-6 mb-4">
														<article
															style={{
																height: "100%",
																background: "#f8fafc",
																border: "1px solid #e2e8f0",
																borderRadius: "16px",
																padding: "35px",
																display: "flex",
																flexDirection: "column",
																justifyContent: "space-between",
																transition: "all 0.3s ease",
															}}
															onMouseEnter={(e) => {
																e.currentTarget.style.borderColor = "#10b981";
																e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,25,49,0.04)";
															}}
															onMouseLeave={(e) => {
																e.currentTarget.style.borderColor = "#e2e8f0";
																e.currentTarget.style.boxShadow = "none";
															}}
														>
															<div>
																<div
																	style={{
																		display: "flex",
																		justifyContent: "space-between",
																		alignItems: "center",
																		marginBottom: "15px",
																	}}
																>
																	<span
																		style={{
																			fontSize: "12px",
																			fontWeight: "700",
																			color: "#10b981",
																			textTransform: "uppercase",
																		}}
																	>
																		{post.category}
																	</span>
																	<span style={{ fontSize: "12px", color: "#94a3b8" }}>
																		{post.date}
																	</span>
																</div>
																<h4
																	style={{
																		color: "#0a1931",
																		fontWeight: "800",
																		fontSize: "20px",
																		marginBottom: "15px",
																		lineHeight: "1.4",
																	}}
																>
																	{post.title}
																</h4>
																<p
																	style={{
																		color: "#64748b",
																		fontSize: "14px",
																		lineHeight: "1.6",
																		marginBottom: "25px",
																	}}
																>
																	{post.desc}
																</p>
															</div>
															<span
																style={{
																	color: "#0a1931",
																	fontWeight: "700",
																	fontSize: "14px",
																	display: "inline-flex",
																	alignItems: "center",
																	gap: "5px",
																}}
															>
																Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
															</span>
														</article>
													</div>
												))
											) : (
												<div className="col-12 text-center" style={{ color: "#64748b", padding: "40px" }}>
													No posts found in this category.
												</div>
											)}
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

