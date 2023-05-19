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
	console.log(data);
	return (
		<div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">ProductDetails</div>
	);
};

export default ProductDetails;