import React, { useContext, useState } from "react";
import Logo from "../img/logo.png";

import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";

const Header = () => {
	const { isOpen, setIsOpen } = useContext(CartContext);
	return (
		<header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
			<div className="container mx-auto">
				<div className="flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0">
					<div className="text-3x1 xl:hidden cursor-pointer">
						<FiMenu />
					</div>

					<div>
						<CategoryNavMobile />
					</div>

					<Link>
						<img src={Logo} alt="" />
					</Link>

					<div className="hidden w-full xl:flex xl:max-w-[734px]">
						<SearchForm />
					</div>

					<div>
						<div>Need help? 123 456 789</div>

						<div
							onClick={() => setIsOpen(!isOpen)}
							className="relative cursor-pointer"
						>
							<SlBag className="text-2x1" />
							<div>2</div>
						</div>

						<div
							className={`
							${isOpen ? "right-0" : "-right-full"}
							bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
						>
							<Cart />
						</div>
					</div>
				</div>

				<div className="lg:hidden">
					<SearchForm />
				</div>
			</div>
		</header>
	);
};

export default Header;
