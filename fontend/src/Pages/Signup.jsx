import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from "../Components/Loading";
import toast from 'react-hot-toast';
export default function Signup() {
  const[user,setUser]=useState();
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  // console.log(user);
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()
 async function registerOnSubmit(userData){
  try {
    setLoading(true);
  const response=await axios.post("https://api.escuelajs.co/api/v1/users/",userData);
  const data = response.data;
  console.log(data);
  setUser(response.data);
  setLoading(false);
   reset();
   toast.success("Sign Up Successfully")
   navigate("/login");

    
  } catch (error) {
    console.log(error);
    
  }
  }
  return (
    <>
     <div className="bg-base-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit(registerOnSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
             {...register("name")}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
            {...register("email")}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
             {...register("password")}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
             
              required
            />
          </div>
          {/* Conform Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Conform Password
            </label>
            <input
             {...register("password")}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              
              required
            />
          </div>
          {/* Role Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="role">
              Role
            </label>
            <select
              {...register("role")}
              id="role"
              name="role"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
             
            >
      
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Avatar Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="avatar">
              Upload Avatar
            </label>
            <input
             {...register("avatar")}
              type="text"
              id="avatar"
              name="avatar"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
             
            />
          
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
             {
              loading? <Loading/>:"Create Account"
            }
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account? <NavLink to="/login" className="text-teal-500 hover:text-teal-600">Login here</NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
