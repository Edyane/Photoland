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
	if (!data) {
		return <div className="container mx-auto">Loading...</div>;
	}
	return (
		<div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
			<div className="container mx-auto">

				<div className="flex flex-col lg:flex-row">
					<div>
						<img src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
							alt=""
							className="w-full max-w-[65%]"/>
					</div>
					
					<div>
						<div>
							{data[0].attributes.categories.data[0].attributes.title}{" "}
							cameras
						</div>

						<h2>{data[0].attributes.title}</h2>

						<p>{data[0].attributes.description}</p>

						<div>
							<div>${data[0].attributes.price}</div>
						</div>
						<button></button>
					</div>
				</div>

				


				<RelatedProducts />
				{/* <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
					<div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items center">
						<img
							src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
							alt=""
							className="w-full max-w-[65%]"
						/>
					</div>
				</div>

				<div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
					<div className="uppercase text-accent text-lg font-medium mb-2">
						{data[0].attributes.categories.data[0].attributes.title}{" "}
						cameras
					</div>

					<h2 className="h2 mb-4">{data[0].attributes.title}</h2>
					<p className="mb-12">{data[0].attributes.description}</p>

					<div className="flex items-center gap-x-8">
						<div className="text-3xl text-accent font-semibold">${data[0].attributes.price}</div>
						<button className="btn btn-accent">Add to cart</button>
					</div>
					
				</div>
				<RelatedProducts /> */}
			</div>
		</div>
	);
};

export default ProductDetails;