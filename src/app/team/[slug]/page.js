import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import TeamDetails1 from "@/components/sections/teams/TeamDetails1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getTeamMembers from "@/libs/getTeamMembers";
import { notFound } from "next/navigation";
const items = getTeamMembers();

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const isExistItem = items?.find(({ id }) => id === parseInt(slug));
	
	if (!isExistItem) {
		return {
			title: "Team Member Not Found",
		};
	}
	
	return {
		title: isExistItem.name || "Team Member",
		description: isExistItem.designation || "Ziqora Team Member",
	};
}

export default async function TeamDetails({ params }) {
	const { slug } = await params;

	const isExistItem = items?.find(({ id }) => id === parseInt(slug));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Team details"} text={"Team details"} />
						<TeamDetails1 currentItemId={parseInt(slug)} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
export async function generateStaticParams() {
	return items?.map(({ id }) => ({ slug: id.toString() }));
}
