import React from "react";
import useFetch from "../hooks/useFetch";
import ProductSlider from "../components/ProductSlider";

const LatestProducts = () => {
	//Get new products
	const { data } = useFetch("/products?populate=*&filters[isNew]=true");
	console.log(data);

	return (
		<div className="mb-16">
			<div className="container mx-auto">
				<h2 className="h2 mb-6 text-center x1:text-left">
					Latest Products
				</h2>
			</div>
			<ProductSlider data={data} />
		</div>
	);
};

export default LatestProducts;