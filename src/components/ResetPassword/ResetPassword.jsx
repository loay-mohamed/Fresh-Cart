import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
export default function ResetPassword() {
    let navigate = useNavigate();
    let [error, setError] = useState(null);
    const passwordRegax = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    async function changePassword(values) {
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
                method: "PUT",
                data: values,
            }
            let { data } = await axios.request(options);
            console.log(data);

            if (data.token) {
                navigate("/login");
            }
        } catch (error) {
            setError(err.response.data.message);
            console.log(err);
        }
    }
    const validationSchema = object({
        email: string().required("email is required").email("email is invalid"),
        newPassword: string().required("password is required").matches(passwordRegax, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),

    })
    let formik = useFormik({
        initialValues: {
            email: "",
            newPassword: "",
        },
        validationSchema,
        onSubmit: changePassword
    });
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-lg p-12 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl text-slate-700 font-semibold mb-5 text-center">
                        Reset Password
                    </h2>
                    <form className="space-y-4" onSubmit={formik.handleSubmit}>
                        <div className="email">
                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 ${formik.errors.email && formik.touched.email ? 'border-red-600' : ''
                                    }`}
                                placeholder="Enter your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-red-600 mt-1 text-sm">{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="newPassword">
                            <label htmlFor="newPassword" className="block text-sm text-gray-600 mb-1">
                                New Password:
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                className={`form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 ${formik.errors.newPassword && formik.touched.newPassword ? 'border-red-600' : ''
                                    }`}
                                placeholder="Enter new password"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.newPassword && formik.touched.newPassword && (
                                <p className="text-red-600 mt-1 text-sm">{formik.errors.newPassword}</p>
                            )}
                        </div>
                        {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}

                        <button
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}
                            className="btn bg-teal-800 hover:bg-teal-700 text-white w-full p-3 rounded-md mt-4 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
