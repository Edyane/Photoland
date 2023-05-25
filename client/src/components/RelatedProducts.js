import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from "./ProductSlider"

const RelatedProducts = ({ categoryTitle}) => {
  const { data } = useFetch(`/products?populate=*filters[categories][title]=${categoryTitle}`);
  console.log(data);
  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
