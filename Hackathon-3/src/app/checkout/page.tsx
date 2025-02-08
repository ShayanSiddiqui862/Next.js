"use client";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItem {
  [key: string]: {
    price: number;
    quantity: number;
    image: string; // Add image to the cart item
  };
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const loadCart = () => {
      try {
        const rawData = localStorage.getItem("cart");
        if (!rawData) {
          setCart([]);
          return;
        }

        const savedCart: CartItem = JSON.parse(rawData);

        // Convert object format to array format
        const cartArray = Object.entries(savedCart).map(([name, details]) => ({
          id: name, // Use the product name as the ID (consistent with storage)
          name,
          price: details.price,
          image: details.image, // Ensure image is included
          quantity: details.quantity || 1, // Default to 1 if missing
        }));

        setCart(cartArray);
      } catch (error) {
        console.error("Failed to load cart:", error);
        setCart([]);
      }
    };

    loadCart();
  }, []);

  const handleCheckout = async () => {
    if (!cart.length) return;

    setLoading(true);
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({
            name: item.name,
            price: item.price,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Payment failed");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Checkout Error:", error);
      alert(error instanceof Error ? error.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length > 0 ? (
        <>
          <div className="mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading
              ? "Processing..."
              : `Pay $${cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}`}
          </button>
        </>
      ) : (
        <div className="text-lg">Your cart is empty</div>
      )}
    </div>
  );
}