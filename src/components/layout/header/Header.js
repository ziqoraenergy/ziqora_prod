"use client";

import Link from "next/link";
import { useState } from "react";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { useHeaderAnimation } from "@/lib/animations/headerAnimation";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo"; // Note: We might need to adjust Logo for white text initially

const Header = () => {
	const isSticky = useStickyHeader(50);
	const headerRef = useHeaderAnimation(isSticky);
	
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			{/* Mobile Offcanvas Menu */}
			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
			/>

			{/* The New Premium Header */}
			<header className="ziqora-header" ref={headerRef}>
				<div className="ziqora-header-inner">
					
					{/* LEFT: Logo */}
					<div className="ziqora-header-left">
						<Logo headerType={2} isStickyHeader={false} />
					</div>

					{/* CENTER: Navigation */}
					<div className="ziqora-header-center d-none d-xl-block">
						<nav className="ziqora-nav">
							<ul>
								<li><Link href="/">Home</Link></li>
								<li className="has-dropdown">
									<Link href="/about">About</Link>
									<ul className="sub-menu">
										<li><Link href="/about">Company Overview</Link></li>
										<li><Link href="/about#vision">Vision & Mission</Link></li>
										<li><Link href="/team">Leadership</Link></li>
									</ul>
								</li>
								<li className="has-dropdown">
									<Link href="/technology">Technology</Link>
									<ul className="sub-menu">
										<li><Link href="/technology">Silicon Technologies</Link></li>
										<li><Link href="/technology#polysilicon">Polysilicon</Link></li>
										<li><Link href="/technology#ingot">Ingot Manufacturing</Link></li>
										<li><Link href="/technology/wafers">Wafer Technologies</Link></li>
										<li><Link href="/technology/cells">Solar Cell Technologies</Link></li>
									</ul>
								</li>
								<li className="has-dropdown">
									<Link href="/sustainability">Sustainability</Link>
									<ul className="sub-menu">
										<li><Link href="/sustainability">ESG</Link></li>
										<li><Link href="/sustainability#environment">Environmental Responsibility</Link></li>
									</ul>
								</li>
								<li><Link href="/news">News & Insights</Link></li>
								<li><Link href="/contact">Contact</Link></li>
							</ul>
						</nav>
					</div>

					{/* RIGHT: Actions */}
					<div className="ziqora-header-right">
						<Link href="/contact" className="ziqora-cta-btn">
							Partner With Us
							<i className="fa-solid fa-arrow-right"></i>
						</Link>

						<div
							className="menu_bar mobile_menu_bar d-xl-none"
							onClick={() => setIsMobileMenuOpen(true)}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>


			</header>
		</>
	);
};

export default Header;
