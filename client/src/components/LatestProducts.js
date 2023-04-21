import React from 'react';
//Components
import ProductSlider from './ProductSlider';

//useFetch hook 
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {
  //Get new products
  const { data } = useFetch('/products?populate=*');

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className='h2 mb-6 text-center x1:text-left'>Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  )
};

export default LatestProducts;
