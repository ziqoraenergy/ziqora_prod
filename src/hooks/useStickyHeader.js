"use client";

import { useEffect, useState } from "react";

export const useStickyHeader = (threshold = 50) => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > threshold) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		// Initial check in case of mid-page load
		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [threshold]);

	return isSticky;
};
