"use client";

import { useState } from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import TechnologyHero from "@/components/home/TechnologyHero";
import ManufacturingEcosystem from "@/components/home/ManufacturingEcosystem";
import SiliconTechRoadmap from "@/components/home/SiliconTechRoadmap";

export default function Technology() {
	return (
		<div>
			<title>Technology & Innovation - Ziqora Solar Manufacturing</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<TechnologyHero />
						
						{/* Replaced the old simple ecosystem with the stunning new dark UI one */}
						<ManufacturingEcosystem />

						{/* Silicon Technologies specific roadmap and pillars with premium UI */}
						<SiliconTechRoadmap />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
