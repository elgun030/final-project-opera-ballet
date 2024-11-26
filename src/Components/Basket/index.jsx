import React, { useEffect, useState } from "react";
import { cartStore } from "../../Store/cartStore.js";

const Basket = () => {
  const { cart, cartFetch, deleteCartItem, updateCartItem } = cartStore();
  const [localCart, setLocalCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      fetchCartItems();
    } else {
      setLocalCart([]);
    }
  }, [userId]);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setLocalCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setLocalCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const calculateTotalItems = () => {
      const total = localCart.reduce((acc, item) => acc + item.quantity, 0);
      setTotalItems(total);
    };

    calculateTotalItems();
  }, [localCart]);

  const fetchCartItems = async () => {
    try {
      console.log("Fetching cart items for userId:", userId);
      await cartFetch(userId);
    } catch (error) {
      console.error("Error fetching cart items:", error.message);
    }
  };

  const handleIncrement = (productId) => {
    updateCartQuantity(productId, 1);
  };

  const handleDecrement = (productId) => {
    updateCartQuantity(productId, -1);
  };

  const updateCartQuantity = (productId, change) => {
    const updatedCart = [...localCart];
    const currentItem = updatedCart.find(
      (item) => item.productId._id === productId
    );

    if (currentItem) {
      const newQuantity = currentItem.quantity + change;
      if (newQuantity > 0) {
        currentItem.quantity = newQuantity;
        setLocalCart(updatedCart);
        if (userId) updateCartItem(productId, newQuantity, userId);
      } else {
        handleRemoveItem(productId);
      }
    }
  };

  const handleRemoveItem = async (productId) => {
    const updatedCart = localCart.filter(
      (item) => item.productId._id !== productId
    );

    try {
      if (userId) {
        await deleteCartItem(productId, userId);
      }

      setLocalCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error deleting cart item:", error.message);
    }
  };

  const calculateTotal = () => {
    return localCart
      .reduce(
        (acc, item) =>
          item.productId?.price
            ? acc + item.productId.price * item.quantity
            : acc,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="container max-w-[1200px] mx-auto p-8 rounded-lg shadow-lg bg-gray-900 text-white overflow-y-auto">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg p-8 shadow-xl">
        {localCart.length > 0 ? (
          localCart.map((item, index) => {
            if (!item.productId || !item.productId._id) {
              return (
                <div key={index} className="text-center text-red-500">
                  Product information is missing.
                </div>
              );
            }

            return (
              <div
                key={index}
                className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-gray-700 transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.productId?.image || "default_image.jpg"}
                    alt={item.productId?.name || "Product"}
                    className="h-auto max-w-[80px] rounded-md border-2 border-gray-700"
                  />
                  <span className="absolute -top-2 right-2 bg-gray-700 text-gray-200 text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    {item.quantity}
                  </span>
                </div>

                <div className="flex-1 ml-6">
                  <h2 className="text-lg font-semibold text-gray-100">
                    {item.productId?.name || "Unknown Product"}
                  </h2>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-md shadow-md hover:bg-gray-600 transition duration-200"
                      onClick={() => handleDecrement(item.productId._id)}>
                      -
                    </button>
                    <span className="mx-4 text-lg">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-md shadow-md hover:bg-gray-600 transition duration-200"
                      onClick={() => handleIncrement(item.productId._id)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-100">
                    £{(item.productId?.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="text-sm mt-2 text-red-500 hover:text-red-400 transition duration-200 hover:underline"
                    onClick={() => handleRemoveItem(item.productId._id)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        )}

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-700">
          <h2 className="font-bold text-xl text-gray-100">Total</h2>
          <p className="text-xl font-extrabold text-white">
            £{calculateTotal()}
          </p>
        </div>

        <p className="mt-2 text-sm text-gray-400">Total Items: {totalItems}</p>

        <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white w-full h-14 mt-6 rounded-lg shadow-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Basket;
