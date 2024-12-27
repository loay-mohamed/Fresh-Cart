import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/Cart.context';
import { UserContext } from '../../Context/User.context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

export default function Checkout() {
    const{cartInfo} = useContext(CartContext);
    const{token} = useContext(UserContext);
    const navigate=useNavigate()
    const [paymentMethod,setPaymentMethod]=useState(null)
    async function createCashOrder(values) {
        let toastId=toast.loading("we are creating your order.........")
        try {
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.cartId}`,
                method:"POST",
                headers:{
                    token,
                },
                data:values,
            };
            let{data}=await axios.request(options);
            if (data.status==="success") {
                toast.success("has been created")
                setTimeout(()=>{
                    navigate("/allorders")
                },2000)
            }
            console.log(data);
            
        } catch (error) {
            
            console.log(error);          
        }finally{
            toast.dismiss(toastId)
        }
    }
    async function createOnlineOrder(values) {
        let toastId=toast.loading("we are creating your order.........")
        try {
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.cartId}?url=${location.origin}`,
                method:"POST",
                headers:{
                    token,
                },
                data:values,
            };
            let{data}=await axios.request(options);
            if (data.status==="success") {
                setTimeout(()=>{
                    location.href=data.session.url
                },2000)
            }
            console.log(data);
            
        } catch (error) {
            
            console.log(error);          
        }
        
    }

    const formik = useFormik({
        initialValues: {
            shippingAddress: {
                details: "",
                phone: "",
                city: "",
            },
        },
        onSubmit:(values)=>{
            if (paymentMethod==="cash") createCashOrder(values);
            else createOnlineOrder(values)
            
        }
    });



    return <>
        <section>
            <h1 className='text-xl text-gray-500 font-semibold mb-4'>Shipping Address</h1>
            <form action="" onSubmit={formik.handleSubmit}>

                <div className='city mt-3'>
                    <input
                     type="text" 
                     className='form-control w-full'
                     placeholder='City'
                     value={formik.values.shippingAddress.city}
                     onChange={formik.handleChange}
                     name='shippingAddress.city'

                     />
                     
                </div>
                <div className='phone mt-3'>
                    <input
                     type="tel" 
                     className='form-control w-full'
                     placeholder='Phone'
                     value={formik.values.shippingAddress.phone}
                     onChange={formik.handleChange}
                     name='shippingAddress.phone'

                     />
                     
                </div>
                <div className='Details mt-3'>
                    <textarea
                     className='form-control w-full'
                     placeholder='Details'
                     value={formik.values.shippingAddress.details}
                     onChange={formik.handleChange}
                     name='shippingAddress.details'
                     ></textarea>                    
                </div>
                <button onClick={()=>{
                    setPaymentMethod("cash")
                }} type='submit'  className='btn mr-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold'>Cash Order</button>
                <button onClick={()=>{
                    setPaymentMethod("online")
                }}type='submit' className='btn bg-lime-600 hover:bg-lime-700 text-white font-semibold'>Online Payment</button>

            </form>
        </section>

    </>
}
