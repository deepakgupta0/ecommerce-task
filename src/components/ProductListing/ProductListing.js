import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/store";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import ProductListingSkeleton from "./ProductListingSkeleton";

const ProductListing = () => {
  const toastId = React.useRef(null);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log(product, "Added");
    dispatch(addToCart(product));
    if (toastId.current) toast.dismiss(toastId.current);
    toastId.current = toast.success(product.title + " Added To Cart", {
      closeOnClick: true,
      pauseOnHover: false,
      position: "bottom-center",
    });
  };
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const products = data?.products ?? [];

  if (loading) return <ProductListingSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductListing;
