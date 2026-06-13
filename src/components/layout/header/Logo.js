"use client";

import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	// Determinate whether we should use light or dark theme logo text/colors
	const isDarkTheme =
		(headerType === 2 ||
			headerType === 5 ||
			headerType === 7 ||
			headerType === 9) &&
		!isStickyHeader;

	const logoColor = isDarkTheme ? "#ffffff" : "#0a1931";
	const greenAccent = "#10b981";

	return (
		<div className="site_logo" style={{ display: "inline-flex", alignItems: "center" }}>
			<Link className="logo" href="/" style={{ display: "inline-flex", alignItems: "center" }}>
				<img src="/images/logo/ziqora-dark.png" alt="Ziqora Logo" style={{ height: "45px", width: "auto" }} />
			</Link>
		</div>
	);
};

export default Logo;
