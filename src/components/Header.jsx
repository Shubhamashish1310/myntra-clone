import { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/Mmyntra.svg';
import { BsBag } from 'react-icons/bs';
import SearchBar from './SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shub from '../img/image.png';

const Header = ({ onSearch }) => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, total } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast notification function
  const notify = (message) => {
    toast.success(message, {
      position: 'bottom-left',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Handle Logout
  const handleLogout = () => {
    // Add any session clearing logic here if needed

    toast.success('🚪 Logged out successfully!', {
      position: 'bottom-left',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: () => navigate('/'), // Redirect to homepage after toast closes
    });
  };

  return (
    <header
      className={`fixed w-full z-10 transition-all ${
        isActive ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-8 py-4 lg:py-6">
        <ToastContainer />
        {/* Logo */}
        <Link
          to="/"
          onClick={() => notify(`Shubham, welcome to Myntra!`)}
          className="flex items-center"
        >
          <img className="h-10 w-auto" src={Logo} alt="Myntra Logo" />
          <span className="text-2xl font-bold ml-2 text-black">Myntra</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium hover:text-gray-900 transition duration-300">
          <Link
            to="/category/men's clothing"
            onClick={() => notify("Explore Men's Clothing!")}
            className="text-sm font-medium text-black hover:text-gray-900 uppercase hover:text-lg transition duration-200"
          >
            Men
          </Link>
          <Link
            to="/category/women's clothing"
            onClick={() => notify("Explore Women's Clothing!")}
            className="text-sm font-medium text-black hover:text-gray-900 uppercase hover:text-lg transition duration-200"
          >
            Women
          </Link>
          <Link
            to="/category/electronics"
            onClick={() => notify('Explore Electronics!')}
            className="text-sm font-medium text-black hover:text-gray-900 uppercase hover:text-lg transition duration-200"
          >
            Electronics
          </Link>
          <Link
            to="/category/jewelery"
            onClick={() => notify('Explore Jewellery!')}
            className="text-sm font-medium text-black hover:text-gray-900 uppercase hover:text-lg transition duration-200"
          >
            Jewellery
          </Link>
        </div>

        {/* Search, Profile, and Cart */}
        <div className="flex items-center space-x-6">
          {/* SearchBar */}
          <SearchBar onSearch={onSearch} />

          {/* Profile */}
          <div className="dropdown dropdown-end relative">
            <div tabIndex={0} className="cursor-pointer">
              <img
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-black transition duration-200"
                src={shub}
                alt="Profile"
              />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-2 p-2 shadow-lg bg-white rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsOpen(!isOpen);
                    notify('Your Orders');
                  }}
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  onClick={() => notify('Your Wishlist')}
                  href="/"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>

          {/* Cart */}
          <div
            onClick={() => {
              setIsOpen(!isOpen);
              notify(
                `You have ${itemAmount} items in your cart. Total: $${total.toFixed(
                  2
                )}`
              );
            }}
            className="relative cursor-pointer"
          >
            <BsBag className="text-3xl text-black" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-xs w-5 h-5 text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
