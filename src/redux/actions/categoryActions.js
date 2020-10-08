import * as actionTypes from "./actionTypes";
console.log(actionTypes)

export const changeCategory = (category) => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
};