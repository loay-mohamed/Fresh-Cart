import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { object, ref, string } from 'yup'
import axios from 'axios';
import toast from 'react-hot-toast';
import { data, Link, Links, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/User.context';

export default function Login() {
  let {setToken} = useContext(UserContext)
 
  const [inCorrectEmailorPasswordError,setinCorrectEmailorPasswordError]= useState(null)
  const navigate= useNavigate()


  const passwordRegax=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    const validationSchema =object({ 
      email:string().required("email is required").email("email is invalid"),
      password :string().required("password is required").matches(passwordRegax,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),

    })

    async function sendDataToLogin(values) {
      const loadingToastId = toast.loading("waiting...")
      try {
        const options = {
          url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
          method: "POST",
          data: values,
        }
        let {data}= await axios.request(options);
        if(data.message==="success"){
          
          setToken(data.token)
          toast.success("User Loged in Successfully")
          setTimeout(() => {
            <navigate to="/" />;
          }, 2000);
          
        }
        localStorage.setItem("token",data.token);
        
        
      } catch (error) {
        console.log(error);
        setinCorrectEmailorPasswordError(error.response.data.message)
        
      } finally {
        toast.dismiss(loadingToastId);
      } 
    }


  const formik =useFormik({
    initialValues:{
      
      "email":"",
      "password":"",
      
  },
  validationSchema,
  onSubmit: sendDataToLogin
  })
  
  
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-12 bg-white rounded-lg shadow-lg ">
        <h1 className="text-xl text-slate-700 font-semibold mb-5">
          <i className="fa-regular fa-circle-user mr-2"></i> Login
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4 ">
          <div className="email">
            <input
              type="email"
              placeholder="Type Your Email"
              value={formik.values.email}
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={formik.handleChange}
              name="email"
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-600 mt-1 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={formik.values.password}
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={formik.handleChange}
              name="password"
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-600 mt-1 text-sm">{formik.errors.password}</p>
            )}
            {inCorrectEmailorPasswordError && (
              <p className="text-red-600 mt-1 text-sm">{inCorrectEmailorPasswordError}</p>
            )}
          </div>
          <button className="btn bg-teal-800 hover:bg-teal-700 text-white w-full p-3 rounded-md mt-4 focus:outline-none" type="submit">
            Login
          </button>
          
        </form>
        <div className="mt-4 text-center">
          <Link to="/ForgetPass"
            className="text-teal-600 hover:text-teal-700 text-sm"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
