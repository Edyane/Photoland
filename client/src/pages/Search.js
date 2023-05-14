import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Search = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchTerm = searchParams.get('query');
	console.log(searchTerm);

	const {data} = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);
	console.log(data);

	return (
		<div className="mb-[30px] pt-40 lg:pt-4 xl:pt-0">
			<div className="container mx-auto">
				<div className="flex gap-x-[30px]">	
					<CategoryNav />				
					
				</div>
			</div>
		</div>
	);
};

export default Search;