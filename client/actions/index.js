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
  if (typeof info === "string") info = [];

  dispatch({
    type: "GET_PRODUCT",
    payload: info,
  });
};

export const addCart = (product) => async (dispatch) => {
  let array = [];
  if (localStorage.getItem("cart") && !product) {
    array = localStorage.getItem("cart");
    array = JSON.parse(array);
  } else if (localStorage.getItem("cart")) {
    array = localStorage.getItem("cart");
    array = JSON.parse(array);

    let element = array.find((e) => e.name === product.name);
    if (element) {
      array = array.map((e) => {
        if (e.name === product.name) {
          e.q++;
          return e;
        } else {
          return e;
        }
      });
      localStorage.setItem("cart", JSON.stringify(array));
    } else {
      array.push(product);
      localStorage.setItem("cart", JSON.stringify(array));
    }
  } else if (!localStorage.getItem("cart") && !product) {
    array = [];
  } else {
    array.push(product);
    localStorage.setItem("cart", JSON.stringify(array));
  }

  dispatch({
    type: "ADD_CART",
    payload: array,
  });
};

export const removeCart = (id) => async (dispatch) => {
  let array = [];
  array = localStorage.getItem("cart");
  array = JSON.parse(array);
  array = array.filter(e => e.id !== id);
  localStorage.setItem("cart", JSON.stringify(array));

  dispatch({
    type: "REMOVE_CART",
    payload: array,
  });
};
