import React from 'react';

//Import swiper react components
import 'swiper/css';
import 'swiper/css/pagination';

//Import required modules
import { Pagination, Navigation } from 'swiper';

//Components
import Product from '../components/Product'

const ProductSlider = ( {data} ) => {
  console.log(data)
  return <div>ProductSlider</div>;
};

export default ProductSlider;
