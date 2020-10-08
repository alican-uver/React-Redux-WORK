import { combineReducers } from "redux";
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryList';

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer
});

export default rootReducer;