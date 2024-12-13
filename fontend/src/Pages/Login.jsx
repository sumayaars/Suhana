import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Components/Loading';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase';
import { AuthContext } from '../Context/AuthContext';


const provider = new GoogleAuthProvider();
export default function Login() {
  const{setGoogleUser,setLoggedUser}=useContext(AuthContext);
  const {setUserToken}=useContext(AuthContext);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const navigatation=useNavigate();
 
   const {
    register,
    handleSubmit,
reset
  } = useForm()
  async function onSubmit(data){
    setLoading(true);
     try {
     const response= await axios.post("https://api.escuelajs.co/api/v1/auth/login",data);
       const userInfo = response.data;
       // setLoginInfo(userInfo); 
        setUserToken(userInfo);
       setLoading(false);
       reset();
      navigatation("/shop");
      toast.success("Login Successfull");
     } catch (error) {
       console.error(error);
     }
     }
  
  function loginWithGoogle(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    setGoogleUser(user);
    localStorage.setItem("userFromGoogle",JSON.stringify(user));
    navigate("/shop");
    toast.success("login Successfully");
    
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
   
  });

  }

  return (
    <>
      <div className="bg-base-100 min-h-screen flex items-center justify-center p-6">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
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
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
             
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {loading ? <Loading /> : "Sign In"}
            </button>
          </form>

          {/* Google Sign-In Button */}
          <div className="text-center mt-4">
            <button
              onClick={loginWithGoogle}
              className="flex items-center justify-center w-full py-3 mt-4 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <FcGoogle className="mr-2 text-xl" />
              Sign in with Google
            </button>
          </div>

          {/* Link to Signup Page */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <NavLink to="/signup" className="text-teal-500 hover:text-teal-600">
                Create one here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
