import React from "react";
import Card from "../Card";

const Cards = () => {
  const card = [
    {
      name: "Kevin",
      price: 11.99,
      discount: 17,
    },
    {
      name: "Gaby",
      price: 12.99,
      discount: 16,
    },
    {
      name: "Agus",
      price: 13.99,
      discount: 15,
    },
    {
      name: "Vino 4",
      price: 14.99,
      discount: 14,
    },
    {
      name: "Vino 5",
      price: 15.99,
      discount: 13,
    },
    {
      name: "Vino 6",
      price: 16.99,
      discount: 12,
    },
    {
      name: "Vino 7",
      price: 17.99,
      discount: 11,
    },
  ];
  return (
    <div>
      <div className="p-10 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 w-screen h-scren align-middle">
        {card.map((e) => (
          <Card key={e.name} name={e.name} price={e.price} discount={e.discount} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
