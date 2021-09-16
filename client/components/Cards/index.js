import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div>
      <div className="p-10 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 w-screen h-scren bg-black align-middle">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
