"use client";

import React from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import IngotHero from "@/components/home/IngotHero";
import IngotEcosystem from "@/components/home/IngotEcosystem";
import IngotRoadmap from "@/components/home/IngotRoadmap";

export default function IngotPage() {
	return (
		<div>
			<title>Ingot Manufacturing Innovations - Ziqora</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<IngotHero />
						<IngotEcosystem />
						<IngotRoadmap />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
