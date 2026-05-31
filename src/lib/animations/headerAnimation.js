"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useHeaderAnimation = (isSticky) => {
	const headerRef = useRef(null);

	useGSAP(() => {
		if (!headerRef.current) return;

		if (isSticky) {
			// Animate to sticky state (full width)
			gsap.to(headerRef.current, {
				backgroundColor: "rgba(12, 25, 48, 0.55)", // Reduced from 0.75
				backdropFilter: "blur(24px)",
				boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
				top: "0px",
				width: "100%",
				maxWidth: "100%",
				borderRadius: "0px",
				height: "80px", 
				border: "none",
				duration: 0.4,
				ease: "power2.out",
			});
		} else {
			// Animate to initial floating state
			gsap.to(headerRef.current, {
				backgroundColor: "rgba(12, 25, 48, 0.42)", // Reduced from 0.62
				backdropFilter: "blur(18px)",
				boxShadow: "none",
				top: "20px",
				width: "calc(100% - 40px)",
				maxWidth: "1600px",
				borderRadius: "20px",
				height: "84px",
				border: "1px solid rgba(255,255,255,0.08)",
				duration: 0.4,
				ease: "power2.out",
			});
		}
	}, [isSticky]); // Re-run animation when isSticky changes

	return headerRef;
};
