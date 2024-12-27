import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/Cart.context'
import Loading from '../../components/Loading/Loading'
import WishlistItems from '../../components/WishlistItems/WishlistItems'
import { Link } from 'react-router-dom'

export default function Wishlist() {
    let { getWishlistProduct, wishlistInfo } = useContext(CartContext)
    useEffect(() => {
        getWishlistProduct()
    }, [])
    return <>
        {wishlistInfo === null ?
            (<Loading />) :
            (


                <section>
                    <div className='flex space-x-6 items-center mb-6'>
                        <i className='font-semibold text-4xl fa-brands fa-opencart'></i>
                        <h2 className='text-xl text-teal-800 font-semibold'>Your shopping Wishlist</h2>
                    </div>


                    {wishlistInfo.numOfCartItems === 0 ?
                        (<div className='mt-6 bg-gray-100 p-5 rounded-md shadow flex justify-center items-center flex-col gap-3'>
                            
                        </div>
                        ) : (
                            <>
                                <div className='space-y-4'>
                                    <div className="space-y-4">
                                        {wishlistInfo?.data?.length > 0 ? (
                                            wishlistInfo.data.map((product) => (
                                                <WishlistItems key={product._id} productInfo={product} />
                                            ))
                                        ) : (
                                            <p className="text-center text-gray-500">
                                                <h2 className='mb-9 font-semibold   '>Oops! Your Wishlist is empty. Start shopping now by clicking the button below and find somthing you love !</h2>
                                                <Link to="/" className='btn bg-teal-800 hover:bg-teal-700 text-white '>Back to Home</Link>
                                            </p>
                                        )}
                                    </div>
                                    {/* {wishlistInfo.data.products.map((product)=><WishlistItems key={product._id} productInfo={product}/>)} */}
                                </div>



                            </>

                        )}



                </section>

            )}
    </>
}
