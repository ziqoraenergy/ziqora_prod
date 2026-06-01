import Link from "next/link";

const RecentNews = () => {
	return (
		<section
			className="updates-section"
			style={{ padding: "120px 0", minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: "#ffffff" }}
		>
			<div className="container">
				<div className="row justify-content-between align-items-end mb-5">
					<div className="col-md-8">
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
							UPDATES & INSIGHTS
						</span>
						<h2 style={{ color: "#0a1931", fontWeight: "800", fontSize: "36px", margin: 0 }}>
							Latest News from Ziqora
						</h2>
					</div>
					<div className="col-md-4 text-md-end mt-3 mt-md-0">
						<Link
							href="/news"
							style={{
								color: "#0a1931",
								fontWeight: "700",
								textDecoration: "underline",
							}}
						>
							View All News
						</Link>
					</div>
				</div>

				<div className="row">
					{[
						{
							category: "Company Updates",
							date: "May 28, 2026",
							title: "Ziqora Initiates Feasibility Studies for 5 GW Manufacturing Base in Odisha",
							desc: "Taking the first technical steps towards securing location sites, outlining solar ecosystem designs, and planning domestic infrastructure partners.",
						},
						{
							category: "Solar Manufacturing",
							date: "May 15, 2026",
							title: "How Domestic Wafer Production Protects India's Clean Energy Independence",
							desc: "Analyzing India's current dependence on component imports, and why building domestic capacity is vital to reaching national solar goals.",
						},
						{
							category: "Policy Updates",
							date: "May 02, 2026",
							title: "Odisha Industrial Policies Create Favorable Landscape for Renewable Projects",
							desc: "Reviewing local state incentives, land procurement processes, and infrastructure support frameworks that benefit green manufacturing initiatives.",
						},
					].map((post, idx) => (
						<div key={idx} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
							<article
								style={{
									height: "100%",
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "12px",
									padding: "30px",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									transition: "all 0.3s ease",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-5px)";
									e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,25,49,0.05)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
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
										<span style={{ fontSize: "12px", color: "#94a3b8" }}>{post.date}</span>
									</div>
									<h4 style={{ color: "#0a1931", fontWeight: "700", fontSize: "20px", marginBottom: "15px", lineHeight: "1.4" }}>
										<Link href="/news">{post.title}</Link>
									</h4>
									<p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
										{post.desc}
									</p>
								</div>
								<Link
									href="/news"
									style={{
										color: "#0a1931",
										fontWeight: "700",
										fontSize: "14px",
										display: "inline-flex",
										alignItems: "center",
										gap: "5px",
									}}
								>
									Read More <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
								</Link>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RecentNews;
