import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loading from '../Loading/Loading';

export default function CategoriesSlider() {
  const [categories, setCategories] = useState(null)

  async function getCategories() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET"
    };
    const { data } = await axios.request(options);
    setCategories(data.data);
    console.log(data);

  }

  useEffect(() => {
    getCategories();
  }, []);
  return (

    <section className='mt-8'>
      <h2 className='text-center text-3xl mb-8 text-teal-800 font-bold'>Shop Popular Categories</h2>
      {!categories ? (
        <Loading />
      ) : (
        <Swiper
          slidesPerView={1} // العرض الافتراضي لشريحة واحدة
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 }, // شريحتين لشاشات التابلت
            768: { slidesPerView: 3 }, // 3 شرائح لشاشات الـ MD
            1024: { slidesPerView: 4 }, // 4 شرائح للشاشات الكبيرة
            1280: { slidesPerView: 6 }, // 6 شرائح لشاشات الـ XL
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <img
                src={category.image}
                alt=""
                className='w-full h-72 object-cover'
              />
              <h3 className='text-center text-2xl text-teal-900 mt-5'>{category.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>


  )
}
