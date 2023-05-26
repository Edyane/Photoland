import React from "react";
import useFetch from "../hooks/useFetch";
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
	const { data } = useFetch(
		`/products?populate=*filters[categories][title]=${categoryTitle}`
	);
	return (
    <div className="bg-pink-200 mb-16">
      <div>
        <h2>Related Products</h2>
      </div>
    </div>
  )
};

export default RelatedProducts;
