import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
export default function UserOpinion() {
    return (
        <>
            <div className="container">


                <Swiper
                    loop={true}
                    spaceBetween={10}
                    breakpoints={{

                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className='space-x-2 mb-1'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                
                            </div>

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-user  text-sky-800 "></i> Mohamed.M </h5>

                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">""As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className='space-x-2 mb-1'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                            </div>

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-user  text-sky-800 "></i> Souzan </h5>

                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className='space-x-2 mb-1'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                            </div>

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-user  text-sky-800 "></i> Karim. </h5>

                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className='space-x-2 mb-1'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                
                            </div>

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-user  text-sky-800 "></i> Mooen </h5>

                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">"High Quality and Excellent Service"
                            "Fresh products and great quality. Thank you, FreshCart, for this wonderful service!"</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className='space-x-2 mb-1'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                
                                
                                <i class="fa-solid fa-star text-yellow-400"></i>
                            </div>

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-user  text-sky-800 "></i> Loay. </h5>

                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">"The Best Online Shopping Experience!"
                            "FreshCart made shopping easier and more enjoyable. Fast shipping and great prices. I highly recommend it!"</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className='space-x-2 mb-1'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                            </div>

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-user  text-sky-800 "></i> Alex K. </h5>

                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">"A Unique and Easy Shopping Experience"
                            "The FreshCart website is so user-friendly and offers a wide range of options. I loved being able to order everything I need with just a click!"</p>

                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}
