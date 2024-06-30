import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../app/store";
import { formatToRupee } from "../../utility";

/**
 * CartTotal component for displaying the total price of items in the cart.
 *
 * @returns {JSX.Element} The cart total component.
 */
const CartTotal = ({ cart }) => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-8 border-t pt-4 flex justify-between items-center sticky bottom-0 bg-white py-4">
      <button
        onClick={handleClearCart}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Clear Cart
      </button>
      <p className="text-xl font-bold">
        Total:
        {formatToRupee(
          cart
            ?.reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)
        )}
      </p>
    </div>
  );
};

export default CartTotal;
