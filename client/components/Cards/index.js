import React from "react";
import useProduct from "../../hooks/useProduct";
import Card from "../Card";

const Cards = () => {
const { products } = useProduct();

  return (
    <div>
      <div className="p-10 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 w-screen h-scren align-middle">
        {products.map((e) => (
          <Card key={e.id} name={e.name} price={e.price} discount={10} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
