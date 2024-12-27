import React, { useContext } from 'react'
import { CartContext } from '../../Context/Cart.context'

export default function CartItems({productInfo}) {
    const{count, price, product}=productInfo
    const{title,imageCover,category,id}=product
    let {removeProductFromCart,countOfCart}=useContext(CartContext)
  return <>
    <div className='flex gap-3'>
    <div className="card-items bg-gray-100 py-4 px-6 rounded-lg flex grow justify-between items-center">
        <img src={imageCover} className='w-24 h-24 rounded-full border-4 border-white object-cover' alt={title} />
        <h3 className='text-lg text-gray-700 font-semibold'>{title}</h3>
        <h4 className=' text-gray-500 font-semibold'>{category.name}</h4>
        <div className="count flex items-center gap-5">
            <span className='text-lg font-bold text-gray-600'>{count}</span>
            <div className="icons space-y-2">
                <div className="plus w-6 h-6 rounded-full  bg-gray-700 flex justify-center items-center cursor-pointer text-white" onClick={()=>{
                    countOfCart({productId:id,count:count + 1})
                }}>
                    <i className='fa-solid fa-plus'></i>
                </div>
                <div className="minus w-6 h-6 rounded-full  bg-gray-700 flex justify-center items-center cursor-pointer text-white"onClick={()=>{
                    countOfCart({productId:id,count:count - 1})
                }}>
                    <i className='fa-solid fa-minus'></i>
                </div>
            </div>
        </div>
        <span>{price} L:E</span>
    </div>
    <button className='rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300 w-6' onClick={()=>{
        removeProductFromCart({productId:id})
    }}>
        <i className='fa-solid fa-xmark'></i>
    </button>
    </div>
    
  </> 
    
  
}
