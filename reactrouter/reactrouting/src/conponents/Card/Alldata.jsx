import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserCards() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [editingUser, setEditingUser] = useState(null);  // Track which user is being edited
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  // Fetch all users when component mounts
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users');
      setUsers(response.data.users);
    } catch (error) {
      setError('Could not fetch users data.');
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/user/${userId}`);
      setUsers(users.filter(user => user._id !== userId));  // Remove deleted user from state
      setSuccessMessage('User deleted successfully.');
    } catch (error) {
      setError('Failed to delete user data.');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      phone: user.phone,
      message: user.message,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/user/${editingUser._id}`, formData);
      setUsers(users.map((user) => (user._id === editingUser._id ? response.data.user : user)));
      setSuccessMessage('User data updated successfully.');
      setEditingUser(null);
      setFormData({
        username: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to update user data.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center bg-gray-100">
      <div className="w-full max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">User List</h1>
        
        {/* Display all users */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-6 rounded-lg shadow-lg">
              {editingUser && editingUser._id === user._id ? (
                // Edit form when editing this user
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Message:</label>
                    <textarea
                      name="message"
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
                    onClick={() => setEditingUser(null)}
                    className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                // Regular user card when not editing
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
                  <p className="text-gray-600 mt-2"><strong>Email:</strong> {user.email}</p>
                  <p className="text-gray-600 mt-2"><strong>Phone:</strong> {user.phone}</p>
                  <p className="text-gray-600 mt-2"><strong>Message:</strong> {user.message}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Display error or success message */}
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 mt-2 text-center">{successMessage}</p>}
      </div>
    </div>
  );
}

export default UserCards;
