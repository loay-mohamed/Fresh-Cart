import { useFormik } from 'formik'
import React, { useState } from 'react'
import { object, ref, string } from 'yup'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate= useNavigate()

  const [accountExistError, setAccountExistError]= useState(null);



  const passwordRegax=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const phoneRegax=/^01[0125][0-9]{8}$/



  

    const validationSchema =object({
      name:string()
        .required("Name is required")
        .min(3,"Name must be at least 3 characters")
        .max(25,"Name can not to be more than 25 characters"), 
      email:string().required("email is required").email("email is invalid"),
      password :string().required("password is required").matches(passwordRegax,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
      rePassword :string().required("Confirm password is required").oneOf([ref("password")],"password and confirm should be the same"),
      phone:string().required("phone is required").matches(phoneRegax,"sorry we accept egyption phone numbers only ")
    })

    async function sendDataToRegister(values) {
      const loadingToastId = toast.loading("waiting...")
      try {
        const options = {
          url:"https://ecommerce.routemisr.com/api/v1/auth/signup",
          method: "POST",
          data: values,
        }
        let {data}= await axios.request(options);
        if(data.message === "success"){
          toast.success("User Created Successfully");
          setTimeout(() => {
            navigate("/login")
          }, 2000);
          
        }
      } catch (error) {
        toast.dismiss(loadingToastId)
        setAccountExistError(error.response.data. message);
      } finally {
        toast.dismiss(loadingToastId);
      } 
    }


  const formik =useFormik({
    initialValues:{
      "name": "",
      "email":"",
      "password":"",
      "rePassword":"",
      "phone":""
  },
  validationSchema,
  onSubmit: sendDataToRegister
  })
  
  
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-10 bg-white rounded-lg shadow-lg"> 
        <h1 className="text-xl text-slate-700 font-semibold mb-5">
          <i className="fa-regular fa-circle-user mr-2"></i> Register Now
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="name">
            <input
              type="text"
              placeholder="Type Your Name"
              value={formik.values.name}
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={formik.handleChange}
              name="name"
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-600 mt-1 text-sm">{formik.errors.name}</p>
            )}
          </div>
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
            {accountExistError && (
              <p className="text-red-600 mt-1 text-sm">{accountExistError}</p>
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
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Confirm Password"
              value={formik.values.rePassword}
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={formik.handleChange}
              name="rePassword"
              onBlur={formik.handleBlur}
            />
            {formik.errors.rePassword && formik.touched.rePassword && (
              <p className="text-red-600 mt-1 text-sm">{formik.errors.rePassword}</p>
            )}
          </div>
          <div className="phone">
            <input
              type="tel"
              placeholder="Type Your Phone"
              value={formik.values.phone}
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={formik.handleChange}
              name="phone"
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-600 mt-1 text-sm ">{formik.errors.phone}</p>
            )}
          </div>

          <button
            className="btn bg-teal-800 hover:bg-teal-700 text-white w-full p-3 rounded-md mt-4 focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  )
}
