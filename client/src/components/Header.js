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
	console.log(useContext(CartContext))
	return (
		<header>
			<div className="container mx-auto">
				<div>
					<div>
						<FiMenu />
					</div>

					<div>
						<CategoryNavMobile />
					</div>

					<Link>
						<img src={Logo} alt="" />
					</Link>

					<div className="hidden w-full x1:flex x1:max-w-[734px]">
						<SearchForm />
					</div>

					<div>
						<div>Need help? 123 456 789</div>

						<div className="relative cursor-pointer">
							<SlBag className="text-2x1" />
							<div>2</div>
						</div>

						<div className="bg-[#0e0f10] shadow-x1 fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300">
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