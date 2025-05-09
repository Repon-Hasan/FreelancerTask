import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s1 from '../../assets/s1.webp'
import s2 from '../../assets/s2.jpeg'
import s3 from '../../assets/s3.webp'
import s4 from '../../assets/s4.jpeg'

function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    loop={true}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    //onSwiper={(swiper) => console.log(swiper)}
    //onSlideChange={() => console.log('slide change')}
   
   
      
    >
       <div>
       <h1 className='md:text-6xl text-xl text-center font-semibold md:pb-4 md:h-[120px] h-[200px] '>Some product of collection</h1>
       </div>
      <SwiperSlide  >
          <img src={s1} alt=""  className='md:w-[900px] mx-auto md:mt-8' />  
      </SwiperSlide>
      <SwiperSlide>
          <img src={s2} alt=""  className='md:w-[900px] md:h-[500px] h-[500px] w-auto  mx-auto md:mt-8' />  
      </SwiperSlide>
      <SwiperSlide>
          <img src={s3} alt=""  className='md:w-[900px] mx-auto md:mt-8' />  
      </SwiperSlide>
      <SwiperSlide>
          <img src={s4} alt=""  className='md:w-[900px] mx-auto md:mt-8' />  
      </SwiperSlide>

    </Swiper>
  )
}

export default Slider
