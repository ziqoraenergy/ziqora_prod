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
			<Link className="logo" href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
				{/* Sleek SVG solar wafer / sun icon */}
				<svg
					width="40"
					height="40"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ flexShrink: 0 }}
				>
					{/* Outer grid boundary */}
					<rect x="5" y="5" width="90" height="90" rx="10" stroke={logoColor} strokeWidth="4" />
					{/* Horizontal & Vertical grid divisions representing wafer cells */}
					<line x1="50" y1="5" x2="50" y2="95" stroke={logoColor} strokeWidth="4" />
					<line x1="5" y1="50" x2="95" y2="50" stroke={logoColor} strokeWidth="4" />
					{/* Inner sun/wafer element (green accent) */}
					<circle cx="50" cy="50" r="22" fill={greenAccent} />
					<circle cx="50" cy="50" r="14" fill="#ffffff" />
					<circle cx="50" cy="50" r="6" fill={logoColor} />
					{/* Radiating corner indicators */}
					<rect x="20" y="20" width="10" height="10" rx="2" fill={logoColor} />
					<rect x="70" y="20" width="10" height="10" rx="2" fill={logoColor} />
					<rect x="20" y="70" width="10" height="10" rx="2" fill={logoColor} />
					<rect x="70" y="70" width="10" height="10" rx="2" fill={logoColor} />
				</svg>

				{/* Stylized typography */}
				<span
					style={{
						fontFamily: "var(--tj-ff-heading), 'Mona Sans', sans-serif",
						fontSize: "24px",
						fontWeight: "900",
						letterSpacing: "3px",
						color: logoColor,
						textTransform: "uppercase",
						lineHeight: 1,
					}}
				>
					Ziqora<span style={{ color: greenAccent }}>.</span>
				</span>
			</Link>
		</div>
	);
};

export default Logo;
