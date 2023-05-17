import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch"
import CategoryNav from "../components/Product";

const Products = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<div className="mb-16 pt-40 lg:pt-0">
			<div className="container mx-auto">
				<div>
					<CategoryNav />
					<main>
						<div>title</div>

						<div>product grid</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Products;