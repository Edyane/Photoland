import React, { useState } from 'react';
import Logo from "../img/logo.png"

import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi"

import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";

const Header = () => {
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
            <img src={Logo} alt='' />
          </Link>

          <div className="hidden w-full x1:flex x1:max-w-[734px]">
            <SearchForm />
          </div>
         

        </div>

        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  )
}

export default Header