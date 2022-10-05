import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from '../../models/Products';
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchOneProduct } from "../actionCreators";

interface InitialProductState {
	isLoading: boolean
	error: string | null
	product: IProduct | null
}

const initialState: InitialProductState = {
	isLoading: false,
	error: "",
	product: null
}

const currentProductSlice = createSlice({
	name: "currentProduct",
	initialState,
	reducers: {

	},
	extraReducers: {
		[fetchOneProduct.pending.type]: (state) => {
			state.isLoading = true
		},

		[fetchOneProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
			state.product = action.payload
			state.isLoading = false
			state.error = ""
		},

		[fetchOneProduct.rejected.type]: (state, action: PayloadAction<string>) => {
			state.product = null
			state.error = action.payload
			state.isLoading = false
		}
	}
})

export default currentProductSlice.reducer