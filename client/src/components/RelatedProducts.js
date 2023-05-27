import React from "react";
import useFetch from "../hooks/useFetch";
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
	const { data } = useFetch(
		`/products?populate=*filters[categories][title]=${categoryTitle}`
	);
	return (
		<div className="mb-16">
			<div className="container mx-auto">
				<h2>Related Products</h2>
				<RelatedProducts data={data} />
			</div>
		</div>
	);
};

export default RelatedProducts;
