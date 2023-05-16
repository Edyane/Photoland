import React from "react";
import { FiX } from "react-icons/fi";

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatnavMobile }) => {
	//get categories
	const {data} = useFetch('/categories');
	console.log(data)
	
	return (
		<div className="w-full h-full bg-primary p-8">

			<div onClick={() => setCatnavMobile(false)}
			className="flex justify-end mb-8 cursor-pointer">
                <FiX className="text-3x1" />
            </div>

			<div className="flex flex-col gap-y-8">
				{data?.map((category) => {
					return <Link to={`products/${category.id}`}className="uppercase font-medium" key={category.id}>{category.attributes.title}</Link>
				})}
			</div>
		</div>
	);
};

export default CategoryNavMobile;