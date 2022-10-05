import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from '../services/ProductsService';

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (_, thunkAPI) => {
		try{
			const products = await ProductsService.getAllProducts()
			return products
		} catch(error) {
			return thunkAPI.rejectWithValue("Не удалось загрузить данные")
		}
	}
)

export const fetchOneProduct = createAsyncThunk(
	"products/fetchOneProduct",
	async (productId: string, thunkAPI) => {
		try{
			const product = await ProductsService.getOneProducts(productId)
			return product
		} catch(error) {
			return thunkAPI.rejectWithValue("Не удалось загрузить данные")
		}
	}
)