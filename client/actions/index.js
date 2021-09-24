import axios from 'axios';



export const loginWithGoogle = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/auth/google/callback")
      const data = await response.data
      console.log(data)
      return dispatch({
        type: 'LOGIN_WITH_GOOGLE',
        payload: data
      })
    }
    catch (error) {
      console.log(error);
    }
  }






export const login = user => async (dispatch) => {
  try{
    const response = await axios.post('http://localhost:3001/login', {username: user.username, password:user.password});
    const data = await response.data
    console.log(data)
    return dispatch({
      type: 'LOGIN',
      payload: data
  });
  }
catch(err){
  console.log(err)
};
};



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

    let element = array.find((e) => e.id === product.id);
    if (element) {
      array = array.map((e) => {
        if (e.id === product.id) {
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

export const removeCart = (id, removeOne) => async (dispatch) => {
  let array = [];
  array = localStorage.getItem("cart");
  array = JSON.parse(array);

  if (removeOne) {
    array = array.map((e) => {
      if (e.id === id) {
        e.q = e.q - 1;
        return e;
      }
      return e;
    });

    array = array.filter((e) => e.q > 0);
  } else {
    array = array.filter((e) => e.id !== id);
  }
  localStorage.setItem("cart", JSON.stringify(array));

  dispatch({
    type: "REMOVE_CART",
    payload: array,
  });
};
