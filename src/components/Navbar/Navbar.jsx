import React, { useContext, useState } from 'react'
import { Link, Links, NavLink } from 'react-router-dom'
import { UserContext } from '../../Context/User.context'
import { CartContext } from '../../Context/Cart.context';

export default function Navbar() {
  const { token, logOut } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const{cartinfo}=useContext(CartContext)

  return (
    <nav className="fixed top-0 left-0 w-full py-3 shadow-sm bg-teal-800 z-50">
  <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
    
    <a href="#" className="text-white text-2xl font-semibold">Fresh Cart</a>

    
    

    {/* القائمة الخاصة بالروابط */}
    {token && (
      <div
        className={`absolute md:static top-16 right-0 w-full md:w-auto bg-teal-800 md:bg-transparent md:flex md:items-center gap-6 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-5 items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-teal-300 text-white ${
                  isActive ? "border-b-2 border-teal-600" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-teal-300 text-white ${
                  isActive ? "border-b-2 border-teal-600" : ""
                }`
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-teal-300 text-white ${
                  isActive ? "border-b-2 border-teal-600" : ""
                }`
              }
              to="/brands"
            >
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-teal-300 text-white ${
                  isActive ? "border-b-2 border-teal-600" : ""
                }`
              }
              to="/allorders"
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    )}

    {/* الأيقونات: Cart و Wishlist */}
    {token && (
  <div className="flex items-center gap-6 ml-4">
    <Link to="/cart" className="relative">
      <i className="fas fa-shopping-cart text-white text-xl hover:text-teal-300"></i>
    </Link>
    <Link to="/wishlist" className="relative">
      <i className="fa-solid fa-heart text-white text-xl hover:text-teal-300"></i>
    </Link>
  </div>
)}

    {/* الأيقونات الخاصة بالسوشيال ميديا */}
    <ul className={`hidden lg:flex gap-5 items-center ${!token ? "ms-auto" : ""}`}>
  <li>
    <a href="https://instagram.com" target="_blank">
      <i className="fa-brands fa-instagram text-white"></i>
    </a>
  </li>
  <li>
    <a href="https://facebook.com">
      <i className="fa-brands fa-facebook text-white"></i>
    </a>
  </li>
  <li>
    <a href="https://tiktok.com">
      <i className="fa-brands fa-tiktok text-white"></i>
    </a>
  </li>
  <li>
    <a href="https://twitter.com">
      <i className="fa-brands fa-twitter text-white"></i>
    </a>
  </li>
  <li>
    <a href="https://linkedin.com">
      <i className="fa-brands fa-linkedin text-white"></i>
    </a>
  </li>
  <li>
    <a href="https://youtube.com">
      <i className="fa-brands fa-youtube text-white"></i>
    </a>
  </li>
</ul>


    {/* الأزرار الخاصة بالتسجيل/تسجيل الدخول */}
    <ul className=" md:flex gap-5 items-center ms-7 space-x-3">
      {!token && (
        <>
          <button className="px-4 py-2 text-white border border-white rounded-md hover:bg-slate-300 hover:text-teal-900 transition">
            <NavLink to="/signup"> Sign up</NavLink>
          </button>
          <button className="px-6 py-2 text-teal-900 bg-white rounded-md hover:bg-slate-300 transition">
            <NavLink to="/login"> Login</NavLink>
          </button>
        </>
      )}
      {token && (
        <li onClick={logOut}>
          <a href="#">
            <i className="text-white fa-solid fa-right-from-bracket text-lg cursor-pointer"></i>
          </a>
        </li>
      )}
      
    </ul>
    {token && (
      <button
        className="md:hidden text-white text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    )}
  </div>
</nav>
  );
}