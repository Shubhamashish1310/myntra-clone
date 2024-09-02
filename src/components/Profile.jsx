import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shub from '../img/image.png';

const Profile = () => {
  const navigate = useNavigate();

  const userData = {
    name: 'Shubham Ashish',
    email: 'shubham.ashish13@gmail.com',
    phone: '+91 6389812318',
    address: 'Lucknow Uttar Pradesh',
    joined: 'January 2019',
    profileImage: shub,
  };

  const handleActionClick = (action) => {
    toast.info(`🔧 ${action} feature is not implemented yet!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLogout = () => {
    // Clear any session or authentication data here
    // Example: localStorage.removeItem('authToken');

    toast.success('🚪 Logged out successfully!', {
      position: "top-right",
      autoClose: 2000,
      onClose: () => navigate('/'), // Redirect to homepage after toast closes
    });
  };

  return (
    <div className=" mt-4 min-h-screen bg-gradient-to-r from-pink-300 via-orange-200 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl text-center transform transition-transform hover:scale-105">
        <div className="avatar mx-auto mb-6">
          <div className="ring-primary ring-offset-base-100 w-32 h-32 rounded-full ring ring-offset-2 overflow-hidden">
            <img
              src={userData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{userData.name}</h2>
        <p className="text-gray-600">{userData.email}</p>
        <p className="text-gray-600">{userData.phone}</p>
        <p className="text-gray-600">{userData.address}</p>
        <p className="text-gray-500 mt-4">Member Since {userData.joined}</p>
        
        <div className="mt-8 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <button
                onClick={() => handleActionClick('Edit Profile')}
                className="flex items-center space-x-2 text-left w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform transition-transform hover:scale-105"
              >
                <span className="material-icons">edit</span>
                Edit Profile
              </button>

              <button
                onClick={() => handleActionClick('Change Password')}
                className="flex items-center space-x-2 text-left w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform transition-transform hover:scale-105"
              >
                <span className="material-icons">lock</span>
                Change Password
              </button>
            </div>
            <div className="space-y-3">
            <button
                onClick={() => handleActionClick('Order History')}
                className="flex items-center space-x-2 text-left w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform transition-transform hover:scale-105"
              >
                <span className="material-icons">history</span>
                Order History
              </button>
              </div>
            <div className="space-y-3">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-left w-full px-4 py-2 text-sm font-medium text-red-700 bg-red-100 border border-red-300 rounded-md shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-transform hover:scale-105"
              >
                <span className="material-icons">logout</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
