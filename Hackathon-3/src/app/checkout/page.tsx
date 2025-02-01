"use client";
import { useState } from "react";

const CheckoutPage: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/payement", { // Fixed API route spelling
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product: { name: "Sample Product", price: 20 }, // Fixed: Send product data
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Stripe Hosted Checkout</h1>
            <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                disabled={loading}
            >
                {loading ? "Redirecting..." : "Checkout"}
            </button>
        </div>
    );
};

export default CheckoutPage;
