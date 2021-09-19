import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const reqProducts = async () => {
    const data = await fetch("http://localhost:3001/product");
    const info = await data.json();
    setProducts(info);
  };

  useEffect(() => {
    reqProducts();
  }, []);

  return { products };
};

export default useProduct;
