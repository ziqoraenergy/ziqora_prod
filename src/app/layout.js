import { Mona_Sans } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";

const bodyFont = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});
const headingFont = Mona_Sans({
	variable: "--tj-ff-heading",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: "Ziqora - Wafer and Solar Cell Manufacturing Company",
	description: "Ziqora - Wafer and Solar Cell Manufacturing Company",
	icons: {
		icon: [
			{ url: '/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
		],
		shortcut: '/images/favicon_io/favicon.ico',
		apple: '/images/favicon_io/apple-touch-icon.png',
	},
	manifest: '/images/favicon_io/site.webmanifest',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth" dir="ltr">
			<body className={`${bodyFont.variable} ${headingFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
