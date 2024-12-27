import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

export default function ForgetPassword() {
    let navigate = useNavigate()
    let [error, setError] = useState(null);

    async function sendemail(values) {
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
                method: "POST",
                data: values,
            }
            let { data } = await axios.request(options);
            if (data.statusMsg === "success") {
                navigate("/VeifyCode");
            }
        } catch (error) {
            setError(err.response.data.message);
        }
    }
    const validationSchema = object({
        email: string().required("email is required").email("email is invalid"),
    });
    const formik = useFormik({
        initialValues: {
            "email": "",
        },
        validationSchema,
        onSubmit: sendemail
    })

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-lg p-12 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl text-slate-700 font-semibold mb-5 text-center">
      Forget Password
    </h2>
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="email">
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
          Please enter your email:
        </label>
        <input
          id="email"
          type="email"
          className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Type Your Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-600 mt-1 text-sm">{formik.errors.email}</p>
        )}
        {error && (
          <p className="text-red-600 mt-1 text-sm">{error}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
        className="btn bg-teal-800 hover:bg-teal-700 text-white w-full p-3 rounded-md mt-4 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  </div>
</div>

        </>
    )
    


}

