import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/User.context'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router-dom'

export default function Order() {
  const [orders, setOrders] = useState(null)
  const { token } = useContext(UserContext)
  let { id } = jwtDecode(token)

  async function getUserOrders() {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      method: "GET",
    }
    let { data } = await axios.request(options)
    setOrders(data)
    console.log(data);
  }

  useEffect(() => {
    getUserOrders()
  }, [])

  return (
    <>
      {orders ? (
        <section className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="order p-4 border-gray-500 border-opacity-25 rounded-lg border-2 shadow-lg"
            >
              <header className="flex justify-between items-center">
                <div>
                  <h2 className="text-gray-500">Order Id</h2>
                  <span className="text-lg font-semibold text-gray-700">#{order.id}</span>
                </div>
                <div>
                  {order.isPaid ? (
                    <span className="inline-block mx-2 px-3 font-semibold rounded-full bg-lime-500 text-white">
                      تم الدفع
                    </span>
                  ) : (
                    <span className="inline-block mx-2 px-3 font-semibold rounded-full bg-red-500 text-white">
                      غير مدفوع
                    </span>
                  )}
                  {order.isDelivered ? (
                    <span className="inline-block px-3 font-semibold rounded-full bg-lime-500 text-white">
                      تم الاستلام
                    </span>
                  ) : (
                    <span className="inline-block px-3 font-semibold rounded-full bg-blue-500 text-white">
                      قيد التوصيل
                    </span>
                  )}
                </div>
              </header>
              <div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {order.cartItems.map((product) => (
                    <div key={product._id} className="product-items border-2 border-gray-400 border-opacity-30 p-4 rounded-lg">
                      <img src={product.product.imageCover} alt="" className="w-full" />
                      <Link to={`/product/${product.product.id}`} className="block text-teal-600 font-semibold mt-2">
                        {product.product.title}
                      </Link>
                      <div className="flex justify-between items-center mt-2">
                        <p>
                          <span className="font-bold underline">Count: {product.count}</span>
                        </p>
                        <span className="text-teal-800 font-semibold text-xl">{product.price} L.E</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}
