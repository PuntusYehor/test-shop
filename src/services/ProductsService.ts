import axios from 'axios';
import { IProduct } from '../models/Products';

export class ProductsService {

	static async getAllProducts() {
		const response = await axios.get<IProduct[]>("http://localhost:3001/products?_sort=name,count")
		return response.data
	}

	static async getOneProducts(productId: string) {
		const response = await axios.get<IProduct>("http://localhost:3001/products/" + productId)
		return response.data
	}
}