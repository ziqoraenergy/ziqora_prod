"use client";

import Link from "next/link";
import getNavItems from "@/libs/getNavItems";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<nav className="mean-nav">
						<ul>
							{navItems.map((navItem, index) => {
								const hasSubmenu = navItem.submenu && navItem.submenu.length > 0;
								if (hasSubmenu) {
									return (
										<MobileMenuItem
											key={navItem.id}
											text={navItem.name}
											url={navItem.path ? navItem.path : "#"}
											submenuClass={"sub-menu"}
										>
											{navItem.submenu.map((subItem) => (
												<li key={subItem.id}>
													<Link href={subItem.path}>{subItem.name}</Link>
												</li>
											))}
										</MobileMenuItem>
									);
								} else {
									return (
										<li
											key={navItem.id}
											className={index === navItems.length - 1 ? "mean-last" : ""}
										>
											<Link href={navItem.path ? navItem.path : "#"}>
												{navItem.name}
											</Link>
										</li>
									);
								}
							})}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
