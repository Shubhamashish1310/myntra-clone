import  { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  // Function to show toast notifications
  const notify = (message) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    >
      <ToastContainer />
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b bg-gray-50">
        {cart.map((item) => {
          return (
            <div key={item.id} className="border-b last:border-b-0">
              <CartItem item={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-y-3 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={() => {
              clearCart();
              notify('Cart cleared!');
            }}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl transition hover:bg-red-600"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/cart"}
          onClick={() => notify(`Redirecting to cart..And Total: $${total}`)}
          className="bg-gray-200 hover:bg-gray-300 transition flex p-3 justify-center items-center text-primary w-full font-medium rounded-md"
        >
          View Cart
        </Link>
        <Link
          to={"/checkout"}
          onClick={() => notify(`Proceeding to checkout.....And Total: $${total}`)}
          className="bg-teal-500 hover:bg-teal-600 transition flex p-3 justify-center items-center text-white w-full font-medium rounded-md"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
