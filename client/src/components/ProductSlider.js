import React from 'react';

//Import Swiper React Components
import {Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

//Import Required Modules
import { Pagination, Navigation } from 'swiper';

//Components
import Product from '../components/Product'

const ProductSlider = ({ data }) => {
  return (
    <Swiper>
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
