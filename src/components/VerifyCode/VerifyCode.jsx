import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';


export default function VerifyCode() {
    let navigate = useNavigate();
    let [error, setError] = useState(null);
    async function sendCode(values) {
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
                method: "POST",
                data: values,
            }
            let { data } = await axios.request(options);
            if (data.status === "Success") {
                navigate("/ResetPassword");
            }
        } catch (error) {
            setError(err.response.data.message);
        }
    }

    const validationSchema = object({
        resetCode: string().required("you can't change your password without reset code"),
    });

    let formik = useFormik({
        initialValues: {
            resetCode: "",
        },
        validationSchema,
        onSubmit: sendCode,
    });


    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-lg p-12 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl text-slate-700 font-semibold mb-5 text-center">
                        Reset Code
                    </h2>
                    <form className="space-y-4" onSubmit={formik.handleSubmit}>
                        <div className="resetCode">
                            <label htmlFor="resetCode" className="block text-sm text-gray-600 mb-1">
                                Please enter the reset code:
                            </label>
                            <input
                                id="resetCode"
                                type="text"
                                className={`form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 ${formik.errors.resetCode && formik.touched.resetCode ? 'border-red-600' : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.resetCode}
                            />
                            {formik.errors.resetCode && formik.touched.resetCode && (
                                <p className="text-red-600 mt-1 text-sm">{formik.errors.resetCode}</p>
                            )}
                            {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
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
