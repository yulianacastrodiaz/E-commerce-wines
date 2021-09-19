import React, { useState } from "react";
import useCategory from "../../hooks/useCategory";
import useSubCategory from "../../hooks/useSubCategory";
import Filter from "../Filter";

const Filters = () => {
  const { categories } = useCategory();
  const { subCategories } = useSubCategory();

  const [sub, setSub] = useState("");

  const change = (e) => {
    setSub(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <Filter category="Category" options={categories} func={change} />

      {sub === "ee49df42-45f3-438a-a936-5af5444b5180" ? (
        <Filter category="Sub Categories" options={subCategories} />
      ) : null}
    </div>
  );
};

export default Filters;
