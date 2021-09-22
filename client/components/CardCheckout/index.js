import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../../actions";

const CardCheckout = ({ product }) => {
  const [qt, setQt] = useState(product.q);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setQt(e.target.value);

    if (qt < product.q) {
      dispatch(removeCart(product.id, true));
    } else if (qt > product.q) {
      dispatch(addCart({ id: product.id }));
    }
  };
  return (
    <>
      {product && (
        <tr>
          <td className="hidden pb-4 md:table-cell">
            <a href="#">
              <img
                src="https://www.nicepng.com/png/detail/695-6953710_botella-de-vino-png.png"
                className="w-12 rounded"
                alt="Thumbnail"
              />
            </a>
          </td>
          <td>
            <a href="#">
              <p className="mb-2 md:ml-4">{product.name}</p>
              <form action="" method="POST">
                <button
                  className="text-gray-700 md:ml-4"
                  onClick={() => dispatch(removeCart(product.id))}
                >
                  <small>(Remove item)</small>
                </button>
              </form>
            </a>
          </td>
          <td className="justify-center md:justify-end md:flex mt-6">
            <div className="w-20 h-10">
              <div className="relative flex flex-row w-full h-8">
                <input
                  type="number"
                  onChange={onHandleChange}
                  value={product.q}
                  className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                />
              </div>
            </div>
          </td>
          <td className="hidden text-right md:table-cell">
            <span className="text-sm lg:text-base font-medium">
              ${product.priceDis.toFixed(2)}
            </span>
          </td>
          <td className="text-right">
            <span className="text-sm lg:text-base font-medium">
              ${(product.priceDis * product.q).toFixed(2)}
            </span>
          </td>
        </tr>
      )}
    </>
  );
};

export default CardCheckout;
