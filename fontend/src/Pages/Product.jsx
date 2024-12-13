import React, { useState, useEffect, useContext } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';

export default function Product() {
  const { cartItem } = useContext(CartContext);
  const [singleProduct, setSingleProduct] = useState(null);
  const { loggedUser, googleUser } = useContext(AuthContext);
  const checkGoogleUser = localStorage.getItem("userFromGoogle");
  const checkUser = localStorage.getItem("user");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  async function fetchSingleProduct() {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setSingleProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  console.log(singleProduct);

  const nextImage = () => {
    if (singleProduct && singleProduct.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % singleProduct.images.length);
    }
  };

  const prevImage = () => {
    if (singleProduct && singleProduct.images) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + singleProduct.images.length) % singleProduct.images.length
      );
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!singleProduct) {
    return <div>No product found</div>;
  }

  function addToCart(product) {
    if (checkGoogleUser || checkUser) {
      cartItem(product);
      toast.success("Product Added to the Cart");
    } else {
      navigate("/login");
      toast.error("You have to log in first.");
    }
  }

  return (
    <div className="bg-base-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full sm:max-w-md p-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Image Slider */}
          <div className="relative flex flex-col items-center sm:w-1/2">
            <div className="w-72 h-96 sm:w-full sm:h-[300px] overflow-hidden mb-4">
              <img
                src={singleProduct.images[currentImageIndex]}
                alt={`Product Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevImage}
                className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition"
              >
                <FaChevronUp />
              </button>
              <button
                onClick={nextImage}
                className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition"
              >
                <FaChevronDown />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col sm:flex-row justify-between sm:w-1/2 w-full">
            <h1 className="text-3xl sm:text-2xl font-bold text-gray-900 mb-4">{singleProduct.title}</h1>
            <p className="text-lg sm:text-sm text-gray-600 mb-4">{singleProduct.description}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl sm:text-lg font-semibold text-gray-800">{`$${singleProduct.price}`}</span>
              <span className="text-sm text-gray-500">{singleProduct.category?.name}</span>
            </div>
            <button
              className="w-full sm:w-auto py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
              onClick={() => addToCart(singleProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
