import React from 'react';

//Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react'

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';

//Import Required Modules
import { Pagination, Navigation } from 'swiper';

//Components
import Product from '../components/Product';

const ProductSlider = ({ data }) => {
  return (
    <Swiper
    modules={[Pagination, Navigation]} loop={false} navigation={true}
    breakpoints= {{
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1440: {
        slidesPerView: 5,
        // slidesPerView: 5,
        spaceBetween: 30
      },
    }}
    pagination = {{
      clickable: true,
    }}
    // className='productSlider mx-auto w-[360px] md:max-w-lg x1:max-w-[1410px]';
    // 


    >
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          )
        })}
      </>
    </Swiper>
  )
};

export default ProductSlider;
