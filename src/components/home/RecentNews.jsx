"use client";
import Link from "next/link";
import { useState } from "react";

const RecentNews = () => {
	const newsItems = [
		{
			category: "Policy Update",
			date: "June 01, 2026",
			title: "India's Extended PLI Scheme: Accelerating Domestic Solar Manufacturing",
			desc: "An in-depth analysis of the government's latest ₹19,500 crore allocation for the Production Linked Incentive scheme, and how Ziqora is positioned to leverage this for gigawatt-scale capacity.",
			image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop", // Very authentic industrial manufacturing facility
		},
		{
			category: "Technology",
			date: "May 24, 2026",
			title: "Breakthroughs in High-Purity Crystalline Silicon Yields",
			desc: "Our advanced R&D division announces a milestone in reducing silicon impurities, pushing the theoretical limits of cell efficiency for next-generation N-type solar modules.",
			image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop", // Real scientist/worker in a cleanroom
		},
		{
			category: "Corporate News",
			date: "May 10, 2026",
			title: "Ziqora Signs Strategic MoU in Odisha for 5GW Mega-Factory",
			desc: "Securing prime industrial land, Ziqora begins the first phase of constructing India's most advanced vertically integrated solar manufacturing hub.",
			image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800&auto=format&fit=crop", // Realistic macro shot of silicon technology
		},
	];

	return (
		<section
			className="updates-section"
			style={{ padding: "120px 0", minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: "#ffffff" }}
		>
			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row justify-content-between align-items-end mb-5">
					<div className="col-md-8">
						<span
							style={{
								color: "#10b981",
								fontWeight: "700",
								textTransform: "uppercase",
								letterSpacing: "2px",
								fontSize: "13px",
								display: "inline-block",
								marginBottom: "15px",
								background: "rgba(16, 185, 129, 0.1)",
								padding: "6px 16px",
								borderRadius: "30px",
								border: "1px solid rgba(16, 185, 129, 0.2)"
							}}
						>
							Industry Insights
						</span>
						<h2 style={{ color: "#ffffff", fontWeight: "800", fontSize: "42px", margin: 0, letterSpacing: "-1px", fontFamily: "'Inter', sans-serif" }}>
							News & <span style={{ color: "#10b981" }}>Policies</span>
						</h2>
					</div>
					<div className="col-md-4 text-md-end mt-4 mt-md-0">
						<Link
							href="/news"
							className="view-all-btn"
							style={{
								color: "#ffffff",
								fontWeight: "600",
								textDecoration: "none",
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								padding: "12px 24px",
								background: "rgba(255,255,255,0.05)",
								borderRadius: "30px",
								border: "1px solid rgba(255,255,255,0.1)",
								transition: "all 0.3s ease"
							}}
						>
							View All Articles <i className="fa-solid fa-arrow-right"></i>
						</Link>
					</div>
				</div>

				<div className="row g-4">
					{newsItems.map((post, idx) => (
						<div key={idx} className="col-lg-4 col-md-6">
							<NewsCard post={post} />
						</div>
					))}
				</div>
			</div>

			<style>{`
				.view-all-btn:hover {
					background: #10b981 !important;
					border-color: #10b981 !important;
					transform: translateY(-2px);
				}
				.news-card-wrapper {
					height: 100%;
					background: #0a1120;
					border: 1px solid rgba(255, 255, 255, 0.05);
					border-radius: 24px;
					overflow: hidden;
					transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
					display: flex;
					flex-direction: column;
				}
				.news-card-wrapper:hover {
					transform: translateY(-10px);
					box-shadow: 0 20px 40px rgba(0,0,0,0.4);
					border-color: rgba(16, 185, 129, 0.3);
				}
				.news-img-container {
					width: 100%;
					height: 240px;
					overflow: hidden;
					position: relative;
				}
				.news-img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.6s ease;
				}
				.news-card-wrapper:hover .news-img {
					transform: scale(1.08);
				}
				.news-category-badge {
					position: absolute;
					top: 20px;
					left: 20px;
					background: rgba(255,255,255,0.95);
					color: #000;
					padding: 6px 14px;
					border-radius: 20px;
					font-size: 12px;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 1px;
					box-shadow: 0 4px 10px rgba(0,0,0,0.2);
				}
				.news-content {
					padding: 30px;
					display: flex;
					flex-direction: column;
					flex-grow: 1;
				}
				.news-date {
					font-size: 13px;
					color: rgba(255,255,255,0.5);
					margin-bottom: 15px;
					display: flex;
					align-items: center;
					gap: 6px;
				}
				.news-title {
					color: #ffffff;
					font-weight: 700;
					font-size: 20px;
					line-height: 1.4;
					margin-bottom: 15px;
					transition: color 0.3s;
				}
				.news-card-wrapper:hover .news-title {
					color: #10b981;
				}
				.news-desc {
					color: rgba(255,255,255,0.6);
					font-size: 14.5px;
					line-height: 1.6;
					margin-bottom: 25px;
					flex-grow: 1;
				}
				.read-more-link {
					color: #ffffff;
					font-weight: 600;
					font-size: 14px;
					text-decoration: none;
					display: inline-flex;
					align-items: center;
					gap: 8px;
					transition: all 0.3s;
				}
				.news-card-wrapper:hover .read-more-link {
					color: #10b981;
					gap: 12px;
				}
			`}</style>
		</section>
	);
};

const NewsCard = ({ post }) => {
	return (
		<Link href="/news" style={{ textDecoration: 'none' }}>
			<article className="news-card-wrapper">
				<div className="news-img-container">
					<img src={post.image} alt={post.title} className="news-img" />
					<div className="news-category-badge">{post.category}</div>
				</div>
				<div className="news-content">
					<div className="news-date">
						<i className="fa-regular fa-calendar"></i> {post.date}
					</div>
					<h4 className="news-title">{post.title}</h4>
					<p className="news-desc">{post.desc}</p>
					<div className="read-more-link">
						Read Article <i className="fa-solid fa-arrow-right"></i>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default RecentNews;
