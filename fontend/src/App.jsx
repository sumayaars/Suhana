import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'
import NotFoundPage from './Pages/NotFoundPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import Profile from './Pages/Profile'
function App() {
  

  return (
    <>
    <Toaster/>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='shop/product/:id' element={<Product/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
