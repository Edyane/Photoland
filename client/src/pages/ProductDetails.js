import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import RelatedProducts from "../components/RelatedProducts";

import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
	const { id } = useParams();
	console.log(id);
	//get product data base on the id
	const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
	if(!data) {
		return <div className="container mx-auto">Loading...</div>;
	}
	return (
		<div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
			<div className="container mx-auto">
				<div>
					<div>
						<img src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} alt="" className="w-full max-w-[65%]"/>
					</div>
				</div>

				<div>
					<div>{data[0].attributes.categories.data[0].attributes.title}</div>
				</div>
				<RelatedProducts />
			</div>
		</div>
	);
};

export default ProductDetails;