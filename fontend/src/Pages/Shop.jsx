import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';import axios from 'axios';
import Loading from '../Components/Loading';
export default function Shop() {
  const[product,setProduct]=useState([]);
  const [loading, setLoading]=useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);


  console.log(product);

  async function fetchProduct() {
    setLoading(true);
    const response= await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
    setProduct(response.data);
    setLoading(false);
    
  }
  async function fetchCategories() {

    const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
    setCategories(['All', ...response.data.map(category => category.name)]);
  }
  useEffect(()=>{
    fetchProduct();
    fetchCategories();
  },[]);
 
  
  const filteredProducts=product.filter((product)=>{
    return (
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === 'All' || product.category.name === selectedCategory)
    
    );
   });

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:text-xs">
     <div className="flex flex-col sm:flex-row justify-between gap-5 items-center mb-6 sm:mb-6 ">

        {/* Search Field */}
        <input
          type="text"
          
          placeholder="Search for products..."
          className="p-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {/* Categories Dropdown */}
        <select
          className="p-2 border border-gray-300 rounded-md "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category} >
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Cards */}
     
      {loading ? (
            <div className='flex justify-center'><Loading /></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => <Card key={product.id} productInfo={product} />)}
            </div>
          )}
      
    </div>
  );
}
