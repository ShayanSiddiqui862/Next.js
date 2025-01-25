"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}


const Cart = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");

      // Convert object to array
      if (savedCart && typeof savedCart === "object") {
        const cartArray = Object.entries(savedCart).map(([name, details]: [string, any]) => ({
          id: name, // Use product name as id for now
          name,
          price: details.price  ,
          quantity: details.quantity , // Default quantity to 1 if not present
        }));
        setCart(cartArray);
      } else {
        console.warn("Cart data in localStorage is not a valid object, resetting to an empty cart.");
        setCart([]);
      }
    } catch (error) {
      console.error("Failed to parse cart data from localStorage:", error);
      setCart([]);
    }
  }, []);
    
  const calculateSubtotal = () =>
    cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);

    // Update localStorage
    const cartObject = updatedCart.reduce((obj, product) => {
      obj[product.name] = { price: product.price, quantity: product.quantity };
      return obj;
    }, {} as Record<string, { price: number; quantity: number }>);
    localStorage.setItem("cart", JSON.stringify(cartObject));
    
};
    

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white rounded-lg p-6">
          <Dialog.Title className="text-lg font-bold">Shopping Cart</Dialog.Title>
          <div className="mt-4">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="flex justify-between items-center">
                  <span>{product.name}</span>
                  <span>${product.price}</span>
                  <span>Qty: {product.quantity}</span>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="mt-4">
            <span>Subtotal: ${calculateSubtotal()}</span>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Cart;
