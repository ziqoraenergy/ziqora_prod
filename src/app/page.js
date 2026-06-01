"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

// Home Components
import HeroSection from "@/components/home/HeroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import ProblemSolution from "@/components/home/ProblemSolution";
import WhyZiqora from "@/components/home/WhyZiqora";
import StatsSection from "@/components/home/StatsSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import EcosystemFlow from "@/components/home/EcosystemFlow";
import ProductsSlider from "@/components/home/ProductsSlider";
import ProductShowcase from "@/components/home/ProductShowcase";
import SustainabilityPreview from "@/components/home/SustainabilityPreview";
import RecentNews from "@/components/home/RecentNews";

export default function Home() {
	return (
		<div>
			<title>Ziqora - Powering India's Solar Manufacturing Future</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroSection />
						<WhatWeDo />
						<ProductShowcase />
						
						{/* <ProblemSolution /> */}
						<WhyZiqora />
						{/* <StatsSection /> */}
						<PhilosophySection />
						<EcosystemFlow />
						<SustainabilityPreview />
						<RecentNews />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
