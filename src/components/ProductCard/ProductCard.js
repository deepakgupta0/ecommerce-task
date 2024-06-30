import React, { useState } from "react";
import Rating from "../Ratings/Rating";
import { formatToRupee } from "../../utility";
import { useNavigate } from "react-router-dom";

/**
 * ProductCard component for displaying product details.
 *
 * @param {number} productId - The ID of the product to be displayed.
 * @returns {JSX.Element} The product card component.
 */
const ProductCard = ({ product, onAddToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();

  const handleCtaClick = () => {
    if (isAddedToCart) {
      navigate("/cart");
    } else {
      setIsAddedToCart(true);
      onAddToCart(product);
    }
  };
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-auto rounded-lg mb-4 aspect-square bg-slate-50"
        loading="lazy"
      />
      <h2 className="text-xl font-bold text-center mb-2 line-clamp-1">
        {product.title}
      </h2>
      <div className="flex items-center justify-center mb-4">
        <Rating rating={product.rating} />
        <span className="ml-2 text-gray-600">
          ({Math.round(product.rating)})
        </span>
      </div>
      <div className="text-gray-600 text-center mb-4">
        {product.brand && (
          <p>
            Brand: <span className="font-semibold">{product.brand}</span>
          </p>
        )}
        {product.warrantyInformation && (
          <p>
            Warranty:
            <span className="font-semibold">{product.warrantyInformation}</span>
          </p>
        )}
      </div>
      <div className="text-blue-600 font-bold text-2xl mb-4">
        {formatToRupee(product.price)}
      </div>
      <button
        className={`text-white px-6 py-2 rounded-full transition-colors duration-300 mb-4 ${
          !isAddedToCart
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
        onClick={handleCtaClick}
      >
        {isAddedToCart ? "Go To Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
