import React, { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded-md">
      <div className="flex items-center gap-x-4">
        <img src={image} alt={title} className="w-20 h-20 object-cover rounded-md" />
        <div className="flex flex-col">
          <h4 className="font-medium text-sm">{title}</h4>
          <div className="flex gap-x-2 items-center">
            <div className="text-gray-500">${price.toFixed(2)}</div>
            <div className="flex items-center gap-x-1">
              <button
                onClick={() => decreaseAmount(id)}
                className="text-sm px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <div className="text-sm">{amount}</div>
              <button
                onClick={() => increaseAmount(id)}
                className="text-sm px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="text-red-500 hover:text-red-600 transition"
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;
