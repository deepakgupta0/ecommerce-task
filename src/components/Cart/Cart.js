import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
/**
 * Cart component for displaying items in the cart and the total price.
 *
 * @returns {JSX.Element} The cart component.
 */
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <CartTotal cart={cart} />
        </>
      )}
    </div>
  );
};

export default Cart;
