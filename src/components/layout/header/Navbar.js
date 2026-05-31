"use client";

import Link from "next/link";
import getNavItems from "@/libs/getNavItems";
import useActiveLink from "@/hooks/useActiveLink";

const Navbar = ({ headerType, isStickyHeader }) => {
	const navItems = getNavItems();
	const makeActiveLink = useActiveLink();

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems.map((item) => {
						const dynamicItem = makeActiveLink(item);
						const hasDropdown = dynamicItem.submenu && dynamicItem.submenu.length > 0;
						return (
							<li
								key={dynamicItem.id}
								className={
									hasDropdown
										? `has-dropdown ${dynamicItem.isActive ? "current-menu-ancestor" : ""}`
										: dynamicItem.isActive
										? "current-menu-item"
										: ""
								}
							>
								<Link href={dynamicItem.path ? dynamicItem.path : "#"}>
									{dynamicItem.name}
								</Link>
								{hasDropdown && (
									<ul className="sub-menu">
										{dynamicItem.submenu.map((subItem) => {
											const dynamicSubItem = makeActiveLink(subItem);
											return (
												<li
													key={dynamicSubItem.id}
													className={dynamicSubItem.isActive ? "current-menu-item" : ""}
												>
													<Link href={dynamicSubItem.path}>
														{dynamicSubItem.name}
													</Link>
												</li>
											);
										})}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
