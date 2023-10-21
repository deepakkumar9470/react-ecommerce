import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { toast } from "react-hot-toast";
import { X, DollarSign, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const removeHandler = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success(`${product.title} removed from cart`);
  };

  return (
  
      <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{product.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
            </div>
            {/* Card start */}
            {product.map((item) => (
              <div className="flex items-center hover:bg-[rgb(246,246,248)] -mx-8 px-6 py-5 cursor-pointer">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={item?.image} alt={item.title} />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="text-red-500 text-xs">{item.title}</span>
                    <X
                      onClick={() => removeHandler(item.id)}
                      className="font-semibold hover:text-red-500 text-gray-500 cursor-pointer text-xs"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-1/5">
                  <Minus size={18} className="font-bold cursor-pointer" />

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value="5"
                  />

                  <Plus size={18} className="font-bold cursor-pointer" />
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $ {item.price}
                </span>
              </div>
            ))}
            {/* Card end */}

            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {product.lenght}
              </span>
              <span className="font-semibold text-sm">
                {product.length} * {product.price} $
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cart;
