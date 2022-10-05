import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../redux/actionCreators";
import Error from "./Error";
import Loader from "./UI/Loader";

const ProductsList: React.FC = () => {
  const { error, isLoading, products } = useAppSelector(
    (state) => state.store.allProducts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) return <Error error={error} />;

  if (isLoading) return <Loader />;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
