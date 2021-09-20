import React, { useState } from "react";
import useCategory from "../../hooks/useCategory";

const Filters = () => {
  const { categories } = useCategory();
  const change = (e) => {
    setSub(e.target.value);
  };

  return (
    <div className="flex justify-center -mt-11 bg-white">
      <div class="navbar bg-white text-black-content rounded-box">
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            {categories &&
              categories.map((e) => (
                <a class="btn btn-ghost btn-sm rounded-btn">{e.name}</a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
