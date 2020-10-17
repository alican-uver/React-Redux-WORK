import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let sameItem = state.find(c => c.product.id === action.payload.product.id);
        if (sameItem) {
          let newState = [...state] ;
          newState.map(cartItem => {
            if (cartItem.product.id === action.payload.product.id) {
              cartItem.quantity += 1
            }
            return cartItem;
          })
          return [...newState];
        }
        else {
            return [...state, action.payload]
        };
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}
