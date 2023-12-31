import { ADD_TO_CART, DELETE_CART, RESET_CART } from "../actions/cartActions";

// cart = [{
//     id: '',
//     title: '',
//     price: 2,
//     quantity: 1,
// }]

const initialState = [];

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let updatedCart;
      const foundItem = state.find((item) => item.id === action.payload.id);

      if (!foundItem) {
        updatedCart = [...state, action.payload];
      } else {
        updatedCart = state.map((item) => ({
          ...item,
          quantity:
            item.id === foundItem.id ? item.quantity + 1 : item.quantity,
        }));
      }

      return updatedCart;
    }
    case DELETE_CART: {
      return state.filter((item) => item.id !== action.payload);
    }
    case RESET_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
}
