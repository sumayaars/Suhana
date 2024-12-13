import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export default function Card({ productInfo }) {
  const { id, name, description, category, price, images } = productInfo;
  const {loggedUser,googleUser}=useContext(AuthContext);
  const navigate = useNavigate();

  // // Handle Add to Cart button click
  // const handleAddToCart = () => {
  //   if (loggedUser || googleUser) {
  //     // Add product to cart logic here
  //     alert('Added to Cart!');
  //   } else {
  //     // Redirect to login page if not logged in
  //     navigate('/login');
  //   }
  // };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={images && images[0]} // Ensure images[0] exists
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{description.slice(0, 40)}...</p>
      <p className="text-gray-500">{category?.name}</p>
      <p className="text-lg font-bold text-green-600">${price}</p>

      {/* Buttons Container with flex to align buttons on the same line */}
      <div className="flex gap-4 mt-4">
        {/* Separate NavLink for View Product */}
        <NavLink to={`/shop/product/${id}`} className="w-full">
          <button className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            View Product
          </button>
        </NavLink>

        {/* Button for Add to Cart with conditional logic */}
        {/* <button
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
}
