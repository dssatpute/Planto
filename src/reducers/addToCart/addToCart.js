export const initialStateCart = {
  cart: [],
};
export const reducerCart = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
  }
};
