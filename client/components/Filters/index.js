import React from "react";

const Filters = () => {
  return (
    <div className="align-middle flex justify-center">
      <div className="dropdown">
        <div tabIndex="0" className="btn bg-red-900">
          Category
        </div>
        <ul
          tabindex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Wine</span>
                <input
                  type="radio"
                  name="opt"
                  className="radio radio-primary"
                  value=""
                />
              </label>
              <label className="cursor-pointer label">
                <span className="label-text">Beer</span>
                <input
                  type="radio"
                  name="opt"
                  className="radio radio-primary"
                  value=""
                />
              </label>
              <label className="cursor-pointer label">
                <span className="label-text">Whisky/Whiskey</span>
                <input
                  type="radio"
                  name="opt"
                  className="radio radio-primary"
                  value=""
                />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
