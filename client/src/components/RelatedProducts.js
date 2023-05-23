import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from "./ProductSlider"

const RelatedProducts = () => {
  const { data } = useFetch();
  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
