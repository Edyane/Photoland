import React from "react";
import { FiX } from "react-icons/fi";

// import { Link } from "react-router-dom";
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

			<div></div>
			CategoryNavMobile

		</div>
	);
};

export default CategoryNavMobile;