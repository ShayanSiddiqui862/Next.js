"use client";

import { client } from "@/sanity/lib/client";
import { useState } from "react";



export default function CheckOut() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    state: "",
    postalCode: "",
    address1: "",
    address2: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const order = {
        _type: "order", 
        ...formData,
      };

      await client.create(order);

      alert("Order successfully created!");
      setFormData({
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        state: "",
        postalCode: "",
        address1: "",
        address2: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error creating order:", error);
      alert("There was an issue creating your order. Please try again.");
    }
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Basic Information
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Please provide your personal information to proceed with the checkout process.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-900">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-gray-900">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-gray-900">
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-900">
              Postal Code
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Address Line 1 */}
          <div>
            <label htmlFor="address1" className="block text-sm font-semibold text-gray-900">
              Address Line 1
            </label>
            <input
              id="address1"
              name="address1"
              type="text"
              value={formData.address1}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label htmlFor="address2" className="block text-sm font-semibold text-gray-900">
              Address Line 2 (Optional)
            </label>
            <input
              id="address2"
              name="address2"
              type="text"
              value={formData.address2}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            ></textarea>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Proceed to Check Out
          </button>
        </div>
      </form>
    </div>
  );
}
