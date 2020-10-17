import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      console.log(action)
      console.log(state)
      let sameItem = state.find(c => c.product.id === action.payload.product.id);
        if (sameItem) {
            let newState = state.map(cartItem => {
                if  (cartItem.product.id === action.payload.product.id) {
                    return Object.assign({}, sameItem, {quantity: sameItem.quantity + 1})
                }
                return cartItem;
            })
            return newState;
        }
        else {
            return [...state, action.payload]
        }
    default:
      return state;
  }
}
