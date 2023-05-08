import React from 'react';

import { FiSearch } from "react-icons/fi";

const SearchForm = () => {
  return (
    <form>
      <input className="input" type="text" placeholder="Search for a product..." />

      <button>
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchForm;
