import React, {useState} from "react";
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
      name: "Yuli",
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
  const renderData = (data) => {
    return (
      <div className="p-10 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 w-screen h-scren align-middle">
      {data.map((e) => (
        <Card key={e.name} name={e.name} price={e.price} discount={e.discount} />
      ))}
    </div>
    );
  };



  const [data, setData] = useState(card);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "btn btn-active" : "btn"}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <div className="align-middle justify-center">
      {renderData(currentItems)}
      <div className="btn-group">
          <button 
            className="btn"
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
          <button
            className="btn"
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
      {/* <button 
          onClick={handleLoadMore} 
          className="btn">
          Load More
      </button> */}
      </div>
    </div>
  );
};

export default Cards;
