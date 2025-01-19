import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCards from './Alldata';

function UserCard() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const userId = "672b37cf478a0f333865af65";  

  
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/user/${userId}`);
      setUserData(response.data.user);
      setFormData({
        username: response.data.user.username,
        email: response.data.user.email,
        phone: response.data.user.phone,
        message: response.data.user.message,
      });
    } catch (error) {
      setError('Could not fetch user data.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/user/${userData._id}`, formData);
      setUserData(response.data.user);
      setSuccessMessage('User data updated successfully.');
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update user data.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/user/${userData._id}`);
      setUserData(null);
      setSuccessMessage('User data deleted successfully.');
    } catch (error) {
      setError('Failed to delete user data.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">User Details</h1>
        {userData ? (
          <>
            {isEditing ? (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-1" htmlFor="username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-1" htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-1" htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-1" htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Message:</strong> {userData.message}</p>

                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mr-2 mt-4"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-4"
                >
                  Delete
                </button>
              </div>
            )}
          </>
        ) : (
          <p>No user data available.</p>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      </div>

     
    </div>
  );
}

export default UserCard;
