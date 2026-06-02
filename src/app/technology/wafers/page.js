"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import SiliconWafers from "@/components/home/SiliconWafers";
import WaferManufacturingProcess from "@/components/home/WaferManufacturingProcess";
import WafersHeroSection from "@/components/home/WafersHeroSection";

export default function WafersPage() {
	return (
		<div>
			<title>Premium Silicon Wafers | Ziqora</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<WafersHeroSection />

						<SiliconWafers />
						<WaferManufacturingProcess />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
