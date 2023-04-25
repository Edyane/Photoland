import React from 'react';
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  console.log(data);

  return (
    <div>
      Category Nav
    </div>
  )
};

export default CategoryNav;