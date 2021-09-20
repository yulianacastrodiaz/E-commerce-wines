const initialState = {
  products: [],
  category: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
