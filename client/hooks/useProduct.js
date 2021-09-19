import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const reqProducts = async (name) => {
    if (name) {
      const data = await fetch(`http://localhost:3001/product?name=${name}`);
      const info = await data.json();
      setProducts(info);
    } else {
      const data = await fetch("http://localhost:3001/product");
      const info = await data.json();
      setProducts(info);
    }
  };

  useEffect(() => {
    reqProducts();
  }, [products]);

  return {
    products,
    reqProducts
  };
};

export default useProduct;
