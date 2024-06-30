import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../app/store";
import { formatToRupee } from "../../utility";

/**
 * CartItem component for displaying individual items in the cart.
 *
 * @param {Object} item - The item data.
 * @returns {JSX.Element} The cart item component.
 */
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <li className="flex flex-col sm:flex-row items-center sm:justify-between border-b last:border-none pb-4">
      <div className="flex items-center w-full sm:w-3/5">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-24 h-24 object-cover rounded mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">{formatToRupee(item.price)}</p>
          <div className="mt-2 flex items-center">
            <label htmlFor={`quantity-${item.id}`} className="mr-2">
              Qty:
            </label>
            <input
              type="number"
              id={`quantity-${item.id}`}
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.id, Number(e.target.value))
              }
              className="border rounded p-1 w-16"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 sm:mt-0 sm:ml-4">
        <button
          onClick={() => handleRemove(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
