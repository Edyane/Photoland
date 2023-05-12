import React from "react";
import { navigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
	const navigate = useNavigate();
	const { searchTerm, setSearchTerm } = useNavigate("");

	const handleSearchInput = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(searchTerm);
	}

	return (
		<form onSubmit={handleSubmit} xlassName=" w-full relative">
			<input
				onChange={handleSearchInput}
				className="input"
				type="text"
				placeholder="Search for a product..."
			/>

			<button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
				<FiSearch className="text-xl" />
			</button>
		</form>
	);
};

export default SearchForm;
