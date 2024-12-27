import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function HomeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesOffsetBefore={3}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <div
            className="bg-[url('https://dalydress.com/cdn/shop/files/Artboard_1_copy_9_3x_5ccfb7a9-222d-4f4a-9c9f-bb3ee7a9d62f.png?v=1728556556&width=2400')] bg-contain bg-no-repeat bg-center h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full"
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-[url('https://dalydress.com/cdn/shop/files/web_banner_DD.png?v=1733951997&width=2400')] bg-contain bg-no-repeat bg-center h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full"
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-[url('https://dalydress.com/cdn/shop/files/Artboard_1_copy_4_2x_c64c625b-371e-46d5-b328-adcb4b11fb57.png?v=1729431836&width=2400')] bg-contain bg-no-repeat bg-center h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full"
          >
            
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
