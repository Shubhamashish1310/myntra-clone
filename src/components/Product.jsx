import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure product
  // eslint-disable-next-line react/prop-types
  const { id, image, category, title, price } = product;
  const handleActionClick = (action) => {
    toast.info(`Product ${action}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-[1.02] bg-white">
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        {/* Image */}
        <img
          className="w-[200px] h-auto object-cover max-h-[200px] group-hover:scale-105 transition duration-300"
          src={image}
          alt={title}
        />
        {/* Buttons */}
        <div className="absolute top-4 -right-12 group-hover:right-4 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(product, id)}
            className="w-12 h-12 flex items-center justify-center bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            <BsPlus onClick={() => handleActionClick("Added to cart")} size={50} className="text-2xl" />
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 flex items-center justify-center bg-white text-pink-600 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <BsEyeFill className="text-xl" />
          </Link>
        </div>
      </div>
      {/* Category, Title & Price */}
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">{category}</div>
        <Link to={`/product/${id}`} className="block mb-1 text-base font-semibold text-gray-800 hover:text-pink-600 transition">
          {title}
        </Link>
        <div className="text-lg font-bold text-gray-900">${price}</div>
      </div>
    </div>
  );
};

export default Product;
