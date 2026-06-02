"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import PolysiliconHeroSection from "@/components/home/PolysiliconHeroSection";
import PolysiliconEcosystem from "@/components/home/PolysiliconEcosystem";
import PolysiliconRoadmap from "@/components/home/PolysiliconRoadmap";

export default function PolysiliconPage() {
	return (
		<div>
			<title>Polysilicon Innovations - Ziqora Solar Manufacturing</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<PolysiliconHeroSection />
						<PolysiliconEcosystem />
						<PolysiliconRoadmap />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
