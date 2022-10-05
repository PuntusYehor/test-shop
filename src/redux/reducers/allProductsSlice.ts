import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from '../../models/Products';
import { fetchProducts } from '../actionCreators';
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialProductsState {
	isLoading: boolean
	error: string | null
	products: IProduct[]
}

const initialState: InitialProductsState = {
	isLoading: false,
	error: "",
	products: []
}

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending.type]: (state) => {
			state.isLoading = true
		},

		[fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload
			state.isLoading = false
			state.error = ""
		},

		[fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
			state.products = []
			state.error = action.payload
			state.isLoading = false
		}
	}
})

export default productsSlice.reducer
