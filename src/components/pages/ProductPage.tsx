import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchOneProduct } from "../../redux/actionCreators";
import Error from "../Error";
import Loader from "../UI/Loader";
import { IComment } from "../../models/Products";

interface CommentsProps {
  comments: IComment[];
}

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isLoading, error } = useAppSelector(
    (state) => state.store.currentProduct
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchOneProduct(id));
  }, [id, dispatch]);

  if (isLoading) return <Loader />;

  if (error) return <Error error={error} />;

  return (
    <>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow self-start"
        onClick={() => navigate(-1)}
      >
        Back to the list
      </button>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img className="w-full" alt={product?.name} src={product?.imageUrl} />
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-80">
              {product?.name}
            </h1>
          </div>

          <div>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Product Code: {product?.id}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Height: {product?.size.height} inches
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Width: {product?.size.width} inches
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Left in stock: {product?.count}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Price: ${product?.price}
            </p>
          </div>
          {product?.comments && <CommentList comments={product?.comments} />}
        </div>
      </div>
    </>
  );
};

const CommentList: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="mt-4 comments border border-gray-200 p-3">
      <h4 className="lg:text-xl text-xl font-semibold lg:leading-6 leading-7 text-gray-80">
        Comments
      </h4>
      {comments.map((comment) => (
        <div>
          <ul className="list-none p-2">
            <li>
              <p>{comment.description}</p>
            </li>
            <p>{"--" + comment.date}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
