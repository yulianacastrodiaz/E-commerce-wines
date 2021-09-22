import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../actions/index.js";
import Checkout from "../components/Checkout.js";

const checkout = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(addCart());
  }, []);

  return (
    <div>
      <Checkout cart={cart} />
    </div>
  );
};

export default checkout;
