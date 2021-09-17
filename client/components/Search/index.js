import React from "react";

const Search = () => {
  return (
    <div className='align-middle flex justify-center'>
      <div className="form-control m-5 flex align-middle">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search"
            className="w-full pr-16 input input-primary input-bordered"
          />
          <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
