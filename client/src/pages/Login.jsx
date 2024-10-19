import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', loginData);
      console.log('Login successful:', response.data);
      alert('Login successful!');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed, please check your credentials.');
    }
  };

  return (
    <div>
      

      <main className="flex flex-col md:flex-row justify-between p-6 md:p-16">
        {/* Login Form Section */}
        <section className="flex-1 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl text-yellow-500 mb-6 md:mb-10 text-center md:text-left">CUSTOMER LOGIN</h1>
          <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto md:ml-28">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleChange}
              className="p-3 mb-4 border border-gray-300 w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="p-3 mb-4 border border-gray-300 w-full"
            />
            <button type="submit" className="bg-yellow-500 text-white p-3 w-full">Login</button>
           </form>
        </section>

        {/* Contact Information Section */}
        <section className="flex-1 md:pl-12">
          <h2 className="text-yellow-500 text-xl md:text-2xl mb-5 text-center md:text-left">Contact Information</h2>
          <p className="mb-4 text-sm md:text-base text-center md:text-left">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <ul className="list-none mb-8 text-center md:text-left">
            <li className="mb-3"><i className="fa-solid fa-home text-yellow-500"></i> Hebal</li>
            <li className="mb-3"><i className="fa-solid fa-phone text-yellow-500"></i> 1800.30.2000</li>
            <li className="mb-3"><i className="fa-solid fa-envelope text-yellow-500"></i> info@OnlineInsurance.com</li>
          </ul>
          <h4 className="font-bold text-lg text-center md:text-left">Social Media</h4>
          <div className="flex justify-center md:justify-start mt-3">
            <a href="#" className="text-yellow-500 text-2xl mr-4"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-yellow-500 text-2xl mr-4"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-yellow-500 text-2xl mr-4"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="text-yellow-500 text-2xl"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
