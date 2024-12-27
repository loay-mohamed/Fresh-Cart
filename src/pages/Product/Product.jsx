import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

export default function Product() {
    const[products, setProducts]= useState(null);
  async function getProducts() {
    const options={
      url:"https://ecommerce.routemisr.com/api/v1/products",
      method :"GET",
    }
    const {data} = await axios.request(options)
    setProducts(data.data)
  }
  
  useEffect(()=>{
    getProducts();
  },[]);
  return (
    <>
    {products?(
        <div className="grid grid-cols-12 gap-4 mt-4">
          {products.map((product) =>(
            <ProductCard productInfo={product}/> 
          ))}
        </div>
      ) : (
        <Loading />
      )}
</>
  )
}
