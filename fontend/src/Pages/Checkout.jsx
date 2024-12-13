import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function Checkout() {
  const { cart, removeItem, setCart } = useContext(CartContext);
  const {loggedUser,googleUser}=useContext(AuthContext);

  const userName = loggedUser?.name || googleUser?.name || 'Guest';
  const userEmail = loggedUser?.email || googleUser?.email || 'guest@example.com';

 
  const handleDelete = (id) => {
    removeItem(id); 
    toast.success("Item removed from cart");
  };

 
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0); // Ensure quantity defaults to 1 if undefined
  };


  const uniqueCart = cart.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.id === value.id)
  );
  async function PayNow() {
    let userPayableAmount= calculateTotal();
     console.log("payment sucessful", userPayableAmount);
     let amarPayJson={
    "store_id": "aamarpaytest",
    "tran_id": "asdasddfqwserxc",
    "success_url": "http://www.merchantdomain.com/suc esspage.html",
    "fail_url": "http://www.merchantdomain.com/faile dpage.html",
    "cancel_url": "http://www.merchantdomain.com/can cellpage.html",
    "amount": userPayableAmount,
    "currency": "BDT",
    "signature_key": "dbb74894e82415a2f7ff0ec3a97e4183",
    "desc": "Merchant Registration Payment",
    "cus_name": userName,
    "cus_email": userEmail,
    "cus_add1": "House B-158 Road 22",
    "cus_add2": "Mohakhali DOHS",
    "cus_city": "Dhaka",
    "cus_state": "Dhaka",
    "cus_postcode": "1206",
    "cus_country": "Bangladesh",
    "cus_phone": "+8801704",
    "type": "json"
}
  const response =await axios.post("http://localhost:3000/paynow",amarPayJson);
  console.log(response.data);
     if (response?.data) {
     window.location.href = response?.data;
  } else {
    console.error('Payment URL is not present in the response');
  }
}

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

        {uniqueCart.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {uniqueCart.map((item) => (
              <div key={item?.id} className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item?.images}  // Use item?.image instead of item?.images
                    alt={item?.title}  // Use item?.title instead of item?.name
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item?.title}</h2>
                    <p className="text-sm text-gray-500">{item?.category?.name}</p>
                    <p className="text-lg font-semibold text-gray-800">{`$${item?.price}`}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity Display */}
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-gray-800">
                      {`Quantity: ${item?.quantity ? (item?.quantity < 10 ? '0' + item?.quantity : item?.quantity) : '01'}`}
                    </p>
                  </div>

                  {/* Delete Item Button */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="flex justify-between mt-6">
              <p className="text-xl font-semibold text-gray-800">Total:</p>
              <p className="text-xl font-semibold text-gray-800">{`$${calculateTotal().toFixed(2)}`}</p>
            </div>

            {/* Proceed to Payment Button */}
            <button
              className="mt-6 w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
              // onClick={() => toast.success("Proceeding to payment")}
               onClick={PayNow}
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
