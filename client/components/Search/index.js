import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";

const Search = () => {

  const  { reqProducts } = useProduct();

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  

  return (
    <div className='align-middle flex justify-center'>
      <div className="form-control m-5 flex align-middle">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search"
            className="w-full pr-16 input input-primary input-bordered"
            onChange={handleChange}
          />
          <button className="absolute top-0 right-0 rounded-l-none btn btn-primary" onClick={() => reqProducts(search)}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
