"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import QualityAssurance from "./QualityAssurance";
import SiliconWafers from "./SiliconWafers";

const ProductsSlider = () => {
	return (
		<div className="products-slider-wrapper" style={{ position: "relative" }}>
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				speed={800}
				pagination={{ 
					clickable: true,
					el: ".products-pagination",
				}}
				navigation={{
					nextEl: ".products-next",
					prevEl: ".products-prev"
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Navigation, Autoplay]}
				className="products-full-slider"
				style={{ width: "100%", height: "100%" }}
			>
				<SwiperSlide>
					<QualityAssurance />
				</SwiperSlide>
				<SwiperSlide>
					<SiliconWafers />
				</SwiperSlide>
				
				{/* Custom Navigation Overlay */}
				<button className="products-prev d-none d-lg-flex" style={{ position: "absolute", left: "30px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(255,255,255,0.9)", border: "1px solid #e2e8f0", width: "50px", height: "50px", borderRadius: "50%", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 10px 20px rgba(10,25,49,0.1)", transition: "all 0.3s ease" }}>
					<i className="fa-solid fa-chevron-left" style={{ color: "#0a1931", fontSize: "18px" }}></i>
				</button>
				
				<button className="products-next d-none d-lg-flex" style={{ position: "absolute", right: "30px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(255,255,255,0.9)", border: "1px solid #e2e8f0", width: "50px", height: "50px", borderRadius: "50%", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 10px 20px rgba(10,25,49,0.1)", transition: "all 0.3s ease" }}>
					<i className="fa-solid fa-chevron-right" style={{ color: "#0a1931", fontSize: "18px" }}></i>
				</button>

				{/* Pagination remains at bottom center */}
				<div style={{ position: "absolute", bottom: "40px", left: "0", right: "0", zIndex: 10, display: "flex", justifyContent: "center" }}>
					<div className="products-pagination" style={{ display: "flex", gap: "8px", position: "relative", width: "auto" }}></div>
				</div>
			</Swiper>
		</div>
	);
};

export default ProductsSlider;
