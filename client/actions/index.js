import { useSelector } from "react-redux";

export const getProducts = () => async (dispatch) => {
  const data = await fetch("http://localhost:3001/product");
  const info = await data.json();

  dispatch({
    type: "GET_PRODUCTS",
    payload: info,
  });
};

export const getByName = (name) => async (dispatch) => {
  const data = await fetch(`http://localhost:3001/product?name=${name}`);
  let info = await data.json();
  if (typeof info === 'string') info = []
  
  dispatch({
    type: "GET_PRODUCT",
    payload: info,
  });
};
