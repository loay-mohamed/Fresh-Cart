import React, { useContext } from 'react'
import { CartContext } from '../../Context/Cart.context';

export default function WishlistItems({productInfo}) {
    const { name, title, imageCover, description, id, price } = productInfo;
    let { removeProductFromWishlist, addProductToCart } = useContext(CartContext);

    return (
        <div className="w-3/4 mx-auto flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-300">
            
            <div className="flex-shrink-0">
                <img
                    src={imageCover}
                    alt={title}
                    className="w-32 h-32 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                />
            </div>

            
            <div className="flex flex-col flex-1 gap-4">
                <h2 className="text-xl font-semibold text-gray-900 hover:text-teal-700 transition-all duration-200">{title}</h2>
                <p className="text-sm text-gray-500">{name}</p>
                <p className="text-lg font-bold text-teal-600">{price} L.E</p>
                <p className='text-teal-900 font-semibold'>{description}</p>
                

                <div className="flex gap-4 mt-4">
                   
                    <button
                        onClick={() => removeProductFromWishlist({ productId: id })}
                        className="text-red-600 hover:text-red-800 transition-all duration-300 p-2 rounded-lg bg-gray-100 hover:bg-red-100 focus:outline-none"
                    >
                        <i className="fa-solid fa-trash text-xl"></i>
                    </button>

                   
                    <button
                        onClick={() => addProductToCart({ productId: id })}
                        className="bg-teal-800 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-300"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
}
