import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { CartContext } from '../../Context/Cart.context';
import ReactImageGallery from 'react-image-gallery';
import {Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../components/ProductCard/ProductCard';
import 'swiper/css';

export default function ProductDetails() {
  const [ProductDetails, setProductDetails] = useState(null);
  const [ProductRelated, setProductRelated] = useState(null);
  let { id } = useParams();
  const { addProductToCart } = useContext(CartContext)

  async function getSpecificProducts() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: "GET",
      }
      let { data } = await axios.request(options)
      console.log(data);
      setProductDetails(data.data)
    } catch (error) {
      console.log(error);
    }
  }



  async function getRelatedProducts() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${ProductDetails.category._id}`,
        method: "GET",
      }
      let { data } = await axios.request(options)
      console.log(data);
      setProductRelated(data.data)
    } catch (error) {
      console.log(error);
    }
  }





  useEffect(() => {
    getSpecificProducts()
  }
    , [])


  useEffect(() => {
    if (ProductDetails === null) return;
    getRelatedProducts();
  }
    , [ProductDetails])



  return (
    <>
  {ProductDetails ? (
    <>
      <section className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <ReactImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            items={ProductDetails.images.map((image) => {
              return {
                original: image,
                thumbnail: image,
              };
            })}
          />
        </div>

        
        <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-3 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-teal-800">{ProductDetails.title}</h2>
            <h3 className="text-black font-semibold">{ProductDetails.category.name}</h3>
          </div>
          <p className="text-gray-400">{ProductDetails.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-teal-600 text-xl font-bold">{ProductDetails.price}</span>
            <div>
              <i className="fa-solid fa-star mr-2 text-teal-700"></i>
              <span>{ProductDetails.ratingsAverage}</span>
            </div>
          </div>
          <div >
            <img src={ProductDetails.brand.image} className=' w-36  ' alt="brand" />
          </div>
          <button
            onClick={() => {
              addProductToCart({ productId: id });
            }}
            className="btn bg-teal-800 hover:bg-teal-700 text-white font-semibold w-full h-10 mt-4"
          >
            ADD TO CART
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4 mb-4">Related Products</h2>
        {ProductRelated ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{

              500: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {ProductRelated.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </section>
    </>
  ) : (
    <Loading />
  )}
</>
  )
}
