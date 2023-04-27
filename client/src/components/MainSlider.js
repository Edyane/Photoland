import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

import { Pagination } from "swiper";
import CameraImg from "../img/camera.png";

const sliderData = [
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 20%',
		titlePart2: 'On your',
		titlePart3: 'first order',
		btnText: 'Shop now',
	},
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 20%',
		titlePart2: 'On your',
		titlePart3: 'first order',
		btnText: 'Shop now',
	},
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 20%',
		titlePart2: 'On your',
		titlePart3: 'first order',
		btnText: 'Shop now',
	},
];

const MainSlider = ({ data }) => {
	return (
		<Swiper
			modules={[Pagination]}
			loop={true}
			pagination={{
				clickable: true,
			}}
			className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w:none rounded-[8px] overflow-hidden drop-shadow-2x1"
		>
			<>
				{sliderData.map((slide, index) => {
					return <SwiperSlide key={index}>slide</SwiperSlide>
				})}
			</>
		</Swiper>
	);
};

export default MainSlider;
