import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
	const { id } = useParams();

	//get products based on category id
	const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
	return (
		<div className="mb-16 pt-40 lg:pt-0">
			<div className="container mx-auto">
				<div>
					<CategoryNav />
					<main>
						<div>title</div>

						<div>{data?.map(product => {
							return <Product product={product} key={product.id} />
						})}</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Products;