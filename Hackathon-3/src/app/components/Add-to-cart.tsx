"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { CiShoppingCart } from "react-icons/ci";

interface Product {
  id: string;
  description: string;
  price: number;
  title: string;
  image: string;
  quantity?: number;
}

export default function ProductPage(main: Product) {
  const notify = () => toast('Added Item To Your Cart');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    try {
      // Get existing cart or initialize as array
      const existingCart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Check if product already exists in cart
      const existingProduct = existingCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Update quantity if exists
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        // Add new product with quantity 1
        existingCart.push({ ...product, quantity: 1 });
      }
      
      // Save back to localStorage
      localStorage.setItem('cart', JSON.stringify(existingCart));
      notify();
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart');
    }
  };

  const { description, price, title, image } = main;
  const images = [image];

  const colors = ["#5A5A5A", "#008000", "#0044CC", "#FFA500", "#000000"];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Image Slider */}
      <div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={img}
                alt={`Product Image ${index + 1}`}
                className="rounded-lg"
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>

        {/* Thumbnails */}
        <div className="flex space-x-4 mt-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-20 h-20 border border-gray-300 rounded-lg hover:border-blue-500 cursor-pointer"
              onClick={() => {
                const button = document.querySelectorAll('.slick-dots button')[index] as HTMLButtonElement;
                button?.click();
              }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-lg"
                width={80}
                height={80}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Product Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-gray-600">(10 Reviews)</span>
        </div>
        <p className="text-2xl font-semibold text-blue-600">${price.toFixed(2)}</p>
        <p className="text-green-600 font-semibold">In Stock</p>

        <p className="text-gray-600 mt-4">
          {description}
        </p>

        {/* Color Options */}
        <div className="mt-4">
          <p className="font-semibold">Color Options:</p>
          <div className="flex space-x-4 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedColor === color ? "border-blue-500" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Select Options
          </button>
          <button 
            onClick={() => handleAddToCart(main)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            <CiShoppingCart />
          </button>
        </div>
      </div>
      
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};