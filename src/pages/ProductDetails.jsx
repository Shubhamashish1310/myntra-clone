import  { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Alert from "../components/Alert";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {

  const handleActionClick = (action) => {
    toast.info(`Product ${action} `, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // Get the single product based on ID
  const product = products.find((item) => item.id === parseInt(id));

  // If product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center bg-gray-100">
        <Alert />
      </section>
    );
  }

  // Destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center bg-gradient-to-r from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Product Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <img
              className="max-w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg rounded-lg"
              src={image}
              alt={title}
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800 leading-tight">
              {title}
            </h1>
            <div className="text-2xl font-bold text-red-600 mb-6">${price}</div>
            <p className="text-gray-600 mb-8">{description}</p>
            <button
              onClick={() => {
                addToCart(product, product.id);
                handleActionClick("Added to cart");
              }}
              className="btn btn-primary rounded-full py-4 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProductDetails;
