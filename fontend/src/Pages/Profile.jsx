import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
export default function Profile() {
  
  const navigate = useNavigate();
  const {loggedUser,setLoggedUser}=useContext(AuthContext);
  const googleUserInfo=JSON.parse(localStorage.getItem("userFromGoogle"));
   const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";
useEffect(() => {
  const fetchUserInfo = async () => {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      if (userInfo) {
          const userToken = userInfo; 
          if (userToken.access_token) {
              try {
                  const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                      headers: {
                          Authorization: `Bearer ${userToken.access_token}`,
                      },
                  });
                  setLoggedUser(response.data);
              } catch (error) {
                  console.error("Error fetching user info:", error);
              }
          }
      }
      
  };

  fetchUserInfo();
}, [setLoggedUser]);

  return (
    <>
      <div className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Profile</h2>

        <div className="flex justify-center mb-6">
          <img
            src={loggedUser?.avatar || googleUserInfo?.
              photoURL
               ||defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            value={loggedUser?.name ||googleUserInfo?.displayName}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            value={loggedUser?.email || googleUserInfo?.email}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Role</label>
          <input
            type="text"
            value={loggedUser?.role}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="text-center mt-4">
          <NavLink
            to="/"
            className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </div>
    </>
  )
}
