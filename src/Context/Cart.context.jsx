import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import { data, useAsyncValue } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

export default function CarProvider({children}) {
    const {token}= useContext(UserContext)
    const [cartInfo,setCartInfo] = useState(null)
    const [wishlistInfo,setWishlistInfo] = useState(null)

    async function addProductToCart({productId}) {
        let toastId= toast.loading("Adding Product......")
        try {
            const options={
                url:"https://ecommerce.routemisr.com/api/v1/cart",
                method:"POST",
                headers:{
                    token
                },
                data:{
                    productId
                }
            }
           let {data} =await axios.request(options);
           if (data.status==="success") {
                toast.success(data.message)
                getCartProduct()
           }
           
           
        } catch (error) {
            console.log(error);
            
        }finally{
            toast.dismiss(toastId)
        }
         
    }

    async function getCartProduct() {
        try {
            const options={ 
                url:"https://ecommerce.routemisr.com/api/v1/cart",
                method:"GET",
                headers:{
                    token,
                },
            };
            let {data}=await axios.request(options);
            setCartInfo(data)
            console.log(data);
            
            
            
        } catch (error) {
            console.log(error);
        }
        
    }
    async function removeProductFromCart({productId}) {
        let toastId =toast.loading("Deleteing Products...")
        try {
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                method:"DELETE",
                headers:{
                    token
                }
    
                 
            }
            let {data} = await axios.request(options)
            if (data.status==="success") {
                toast.success("Product has been Deleted")
                setCartInfo(data)
            }
        } catch (error) {
            console.log(error);
            
            
        }finally{
            toast.dismiss(toastId)
        }
        
    }
    async function clearProductFromCart({productId}) {
        let toastId =toast.loading("Clear Cart...")
        try {
            const options={
                url:'https://ecommerce.routemisr.com/api/v1/cart/',
                method:"DELETE",
                headers:{
                    token
                }
    
                 
            }
            let {data} = await axios.request(options)
            if (data.message==="success") {
                toast.success("Your Cart has been Cleared")
                setCartInfo({
                    numOfCartItems:0
                })
            }
        } catch (error) {
            console.log(error);
            
            
        }finally{
            toast.dismiss(toastId)
        }
        
    }
    async function countOfCart({productId,count}) {
        
        try {
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                method:"PUT",
                headers:{
                    token
                },
                data:{
                    count
                }
    
                 
            }
            let {data} = await axios.request(options)
            if (data.status==="success") {
                
                setCartInfo(data)
            }
        } catch (error) {
            console.log(error);
            
            
        }
        
    }

    async function addProductToWishList({productId}) {
        let toastId= toast.loading("Adding Product......")
        try {
            const options={
                url:"https://ecommerce.routemisr.com/api/v1/wishlist",
                method:"POST",
                headers:{
                    token
                },
                data:{
                    productId
                }
            }
           let {data} =await axios.request(options);
           if (data.status==="success") {
                toast.success(data.message)
                getWishlistProduct()
           }
           
           
        } catch (error) {
            console.log(error);
            
        }finally{
            toast.dismiss(toastId)
        }
         
    }
    async function getWishlistProduct() {
        try {
            const options={ 
                url:"https://ecommerce.routemisr.com/api/v1/wishlist",
                method:"GET",
                headers:{
                    token,
                },
            };
            let {data}=await axios.request(options);
            setWishlistInfo(data)
            console.log(data);
            
            
            
        } catch (error) {
            console.log(error);
        }
        
    }
    async function removeProductFromWishlist({productId}) {
        let toastId =toast.loading("Deleteing Products...")
        try {
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
                method:"DELETE",
                headers:{
                    token
                }
    
                 
            }
            let {data} = await axios.request(options)
            if (data.status==="success") {
                toast.success("Product has been Deleted")
                setWishlistInfo(data)
            }
        } catch (error) {
            console.log(error);
            
            
        }finally{
            toast.dismiss(toastId)
        }
        
    }





    return (
    <CartContext.Provider value={{addProductToCart,getCartProduct, cartInfo, removeProductFromCart,clearProductFromCart,countOfCart,wishlistInfo,removeProductFromWishlist,getWishlistProduct,addProductToWishList  }}>
         {children}
    </CartContext.Provider>
    );
}