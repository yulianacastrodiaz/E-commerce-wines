import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(search));
    setSearch("");
  };

  return (
    <div >
      <div className="align-middle flex justify-center">
        <div className="form-control flex align-middle">
          <div className="relative w-96">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-16 input input-primary input-bordered"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none btn btn-primary"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
