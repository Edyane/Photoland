import React from "react";
import {FiX} from "react-icons/fi";

const CategoryNavMobile = ({ setCatnavMobile }) => {
	return (
		<div className="w-full h-full bg-primary p-8">

			<div onClick={() => setCatnavMobile(false)}
			className="flex justify-end mb-8 cursor-pointer">
                <FiX className="text-3x1" />
            </div>
			CategoryNavMobile

		</div>
	);
};

export default CategoryNavMobile;