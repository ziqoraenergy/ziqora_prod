import { newsPosts } from "@/data/newsData";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const article = newsPosts.find((p) => p.slug === slug);
	
	if (!article) {
		return {
			title: "Article Not Found",
		};
	}
	
	return {
		title: article.title,
		description: article.desc,
		keywords: [article.category, "Ziqora News", "Press Release"],
		openGraph: {
			title: article.title,
			description: article.desc,
			images: [
				{
					url: article.image,
					width: 1200,
					height: 630,
				}
			]
		}
	};
}

export default function NewsArticleLayout({ children }) {
	return <>{children}</>;
}
