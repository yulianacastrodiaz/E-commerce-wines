import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = 0;
  cart.map((e) => {
    total = total + e.q * e.priceDis;
  });

  return (
    <>
      <div className="rounded-b border-t-0 z-10">
        <div className="shadow-xl w-64">
          {cart.length ? (
            cart.map((e) => (
              <div
                key={e.id}
                className="p-2 flex bg-base-200 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              >
                <div className="p-2 w-12">
                  <img
                    src="https://www.nicepng.com/png/detail/695-6953710_botella-de-vino-png.png"
                    alt="img product"
                  />
                </div>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">{e.name}</div>
                  <div className="truncate">Product 1 description</div>
                  <div className="text-gray-400">
                    Qty: {e.q}
                    <button className="ml-3 w-4 h-4 align-middle hover:bg-red-200 rounded-full cursor-pointer text-red-700" onClick={() => dispatch(removeCart(e.id, true))}>
                      -
                    </button>
                    <button className="ml-3 w-4 h-4 align-middle hover:bg-red-200 rounded-full cursor-pointer text-red-700" onClick={() => dispatch(addCart({id: e.id}))}>
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <button onClick={() => dispatch(removeCart(e.id))}>
                    <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash-2 "
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </div>
                  </button>
                  ${e.priceDis.toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <h1 className="align-middle flex justify-center font-semibold">
              Comienza agregando algo
            </h1>
          )}
          <div className="flex align-middle bg-base-200 justify-center p-4">
            <button className="btn btn-secondary">
              Checkout: ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
