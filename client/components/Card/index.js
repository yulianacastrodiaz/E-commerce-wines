import React from "react";

const Card = ({ price, name, img, discount }) => {
  const priceDis = price - price * (discount / 100);
  return (
    <>
      <div className="relative border bg-white border-purple-900 rounded-xl">
        <span className="absolute top-0 left-0 text-sm btn-primary p-2 rounded-br-xl rounded-tl-xl">
          {discount || 19}% OFF
        </span>
        <img
          className="max-h-52 w-full bg-white object-contain rounded-t-xl"
          src={
            img ||
            "https://www.nicepng.com/png/detail/695-6953710_botella-de-vino-png.png"
          }
          alt=""
        />
        <div className="p-5">
          <h2 className="text-lg">{name || "Soy un vino"}</h2>
          <h4 className="text-gray-500 text-sm">
            ${priceDis.toFixed(2)}{" "}
            <span className="line-through text-sm text-red-500">${price}</span>
          </h4>
        </div>
        <div className="flex">
          <button className="py-3 w-9/12 btn-primary rounded-bl-xl font-extrabold">
            Add to cart
          </button>
          <button className="py-3 w-3/12 bg-white rounded-br-xl text-yellow-400 font-extrabold flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z"
                stroke="#200E32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.7394 7.05304C16.8047 7.39334 17.5616 8.34974 17.6562 9.47502"
                stroke="#200E32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
