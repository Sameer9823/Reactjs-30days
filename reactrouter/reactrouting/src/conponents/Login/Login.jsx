import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    
    email: '',
    password: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/V1/login', formData);
      console.log(response.data);
    
    } catch (error) {
      console.error(error);
    }
  };

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

 

  return (
    <div className="bg-gray-100 h-screen my-auto pt-[5rem]">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="email">Email:</label>
            <input
              className="w-full p-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="password">Password:</label>
            <input
              className="w-full p-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
            
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200" type="submit">
            Login
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {success && <p className="text-green-500 mt-2">Login successful!</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
