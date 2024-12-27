import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/Cart.context'
import Loading from '../../components/Loading/Loading'
import CartItems from '../../components/CartItems/CartItems'
import { Link } from 'react-router-dom'

export default function Cart() {
  let { getCartProduct, cartInfo,clearProductFromCart } = useContext(CartContext)

  useEffect(() => {
    getCartProduct()
  }, [])



  return <>
    {cartInfo === null ?
     ( <Loading /> ):
     (
      
      
      <section>
        <div className='flex space-x-6 items-center mb-6'>
          <i className='font-semibold text-4xl fa-brands fa-opencart'></i>
          <h2 className='text-2xl font-semibold text-teal-800'>Your shopping Cart</h2>
        </div>


      {cartInfo.numOfCartItems === 0 ?
      ( <div className='mt-6 bg-gray-100 p-5 rounded-md shadow flex justify-center items-center flex-col gap-3'>
        <h2>Oops! Your cart is empty. Start shopping now by clicking the button below and find somthing you love !</h2>
        <Link to="/" className='btn bg-teal-800 hover:bg-teal-600 text-white'>Back to Home</Link>
      </div> 
      ):(
      <>
      <div className='space-y-4'>
        {cartInfo.data.products.map((product)=><CartItems key={product._id} productInfo={product}/>)}
      </div>
      <div className='mt-5 flex justify-between items-center'> 
        <p className='mt-3 text-xl'>
          <i className='text-teal-800 fa-solid fa-dollar-sign text-xl mr-3'></i>
          Your Total Cart Price <span className='text-teal-800 font-semibold text-2xl'> {cartInfo.data.totalCartPrice}</span>
          </p>
        <button className='btn bg-red-500 hover:bg-red-600 text-white' onClick={clearProductFromCart}>
          <i className='fa-solid fa-trash mr-2'></i> Clear Cart</button>
      </div>

      <Link to="/checkout" className='inline-block mt-8 w-full text-center btn bg-teal-800 hover:bg-teal-700 text-white'>
        Next Step(Payment)
      </Link>
      </>
       
    )}



    </section>

    )}
  </>

}
