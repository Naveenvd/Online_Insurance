import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    policy: "",
    age: "",
    payment: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Post form data to the backend
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Form Section */}
        <div className="md:w-1/2 bg-white shadow-lg rounded p-5 mb-5 md:mb-0">
          <h2 className="text-yellow-400 text-2xl mb-5 text-center">Customer Registration</h2>
          <p className="text-gray-600 mb-5 text-center">
            Fill out all required fields to send a message. Please don't spam, Thank you!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full p-3 border border-yellow-400 rounded mb-4"
            />
            <input
              type="text"
              name="policy"
              value={formData.policy}
              onChange={handleChange}
              placeholder="Policy Name"
              required
              className="w-full p-3 border border-yellow-400 rounded mb-4"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              required
              className="w-full p-3 border border-yellow-400 rounded mb-4"
            />
            <input
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              placeholder="Payment type: Check/Cash/Card"
              required
              className="w-full p-3 border border-yellow-400 rounded mb-4"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address for Contact"
              required
              className="w-full p-3 border border-yellow-400 rounded mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-white px-5 py-2 rounded hover:bg-yellow-500 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="md:w-1/2 p-5">
          <h2 className="text-yellow-400 text-2xl mb-5 text-center">Contact Information</h2>
          <p className="text-gray-600 mb-5 text-center">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <ul className="list-none mb-5">
            <li className="mb-3">
              <i className="fa-solid fa-home text-yellow-400"></i> Hebal
            </li>
            <li className="mb-3">
              <i className="fa-solid fa-phone text-yellow-400"></i> 1800.30.2000
            </li>
            <li className="mb-3">
              <i className="fa-solid fa-envelope text-yellow-400"></i> info@OnlineInsurance.com
            </li>
          </ul>
          <h4 className="font-medium text-lg mt-10 text-black text-center">Social Media</h4>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-yellow-400 text-2xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-yellow-400 text-2xl">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-yellow-400 text-2xl">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="text-yellow-400 text-2xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
