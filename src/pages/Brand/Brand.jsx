import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading';
import BrandCard from '../../components/BrandCard/BrandCard';

export default function Brand() {
     const[brands, setBrands]= useState(null);
    async function getBrands() {
        const options={
          url:"https://ecommerce.routemisr.com/api/v1/brands",
          method :"GET",
        }
        const {data} = await axios.request(options)
        setBrands(data.data)
        
      }
      
      useEffect(()=>{
          getBrands();

      },[])
      
  return (
    <>
        <div className="container">
        {brands?(
            <div className="grid grid-cols-12 gap-4 mt-4">
              {brands.map((brand) =>(
                <BrandCard brandInfo={brand}/> 
              ))}
            </div>
          ) : (
            <Loading />
          )}
          </div>
        </>
  )
}
