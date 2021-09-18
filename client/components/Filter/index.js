import React from "react";

const Filter = ({ category, options, func }) => {
  return (
    <div className="align-middle flex justify-center pl-5">
      <div className="dropdown">
        <div tabIndex="0" className="btn bg-red-900">
          {category}
        </div>
        <ul
          tabIndex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <div className="form-control">
            { options && options.map((e) => (
              <label className="cursor-pointer label" key={e.id}>
                <span className="label-text">{e.name || e.type}</span>
                <input
                  onChange={func}
                  type="radio"
                  name="opt"
                  className="radio radio-primary"
                  value={e.name}
                />
              </label>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
