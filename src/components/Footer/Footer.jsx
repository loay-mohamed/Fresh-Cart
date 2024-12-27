import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-teal-900 py-8 ">
      <div className="container  px-4 space-y-6">
        {/* Title and Subtitle */}
        <div className=" space-y-2">
          <h2 className="text-2xl font-bold text-gray-100 ">Get The Fresh Product</h2>
          <p className="text-gray-100">
            We will send a link, open it on your phone to download the app
          </p>
        </div>

        {/* Email Input and Button */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full grow md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button className="px-6 py-2 bg-slate-600 text-white rounded-md hover:bg-teal-900 transition">
            SHARE APP LINK
          </button>
        </div>

        
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Pay"
            className="h-8"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/196/196539.png"
            alt="American Express"
            className="h-20 w-20"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
            alt="MasterCard"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  )
}
