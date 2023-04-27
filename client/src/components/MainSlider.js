import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

import { Pagination } from "swiper";
import CameraImg from "../img/camera.png";

const MainSlider = ({ data }) => {
	return (
		<Swiper
			modules={[Pagination]}
			loop={true}
			pagination={{
				clickable: true,
			}}
			className="mainSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
		>
			<>
				<SwiperSlide>slide</SwiperSlide>
			</>
		</Swiper>
	);
};

export default MainSlider;
