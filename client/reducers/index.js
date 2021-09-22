const initialState = {
  products: [],
  category: "",
  cart: [],
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
    case "ADD_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
