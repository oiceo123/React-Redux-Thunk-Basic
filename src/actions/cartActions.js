export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_CART = "DELETE_CART";
export const RESET_CART = "RESET_CART";

// const action = {
//   type: "",
//   payload: {
//     id: "",
//     title: "",
//     price: 2,
//     quantity: 1,
//   },
// };

// Action Creators
export function addToCart(addedProduct) {
  return {
    type: ADD_TO_CART,
    payload: addedProduct,
  };
}

export function deleteCart(id) {
  return {
    type: DELETE_CART,
    payload: id,
  };
}

export function resetCart() {
  return {
    type: RESET_CART,
  };
}
