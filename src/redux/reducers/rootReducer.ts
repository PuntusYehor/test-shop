import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from "./allProductsSlice"
import currentProductSlice from './currentProductSlice';

export const rootReducer = combineReducers({
	allProducts: productsSlice,
	currentProduct: currentProductSlice
})