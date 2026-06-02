"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CellsHeroSection from "@/components/home/CellsHeroSection";
import HighEfficiencyCells from "@/components/home/HighEfficiencyCells";
import CellLineupAndProcess from "@/components/home/CellLineupAndProcess";

export default function HighEfficiencyCellsPage() {
	return (
		<div>
			<title>High-Efficiency Solar Cells - Ziqora Solar Manufacturing</title>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<CellsHeroSection />
						<HighEfficiencyCells />
						<CellLineupAndProcess />

					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
