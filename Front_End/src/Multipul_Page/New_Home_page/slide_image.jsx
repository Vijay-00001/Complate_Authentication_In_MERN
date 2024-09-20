import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperArray from '../../All_Arrys/SwippImage';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper';

const slide_image = () => {

    const slide_Image = (curVal) => {
        return <>
            <SwiperSlide>
                <img src={curVal.src} alt="images" />
                <div className='ad'>
                    <div className="ad-font">
                        <h4>{curVal.name}</h4>
                        <h2>
                            <span>{curVal.add}</span><br></br>
                            <span>{curVal.features}</span>
                        </h2>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
            </SwiperSlide>
        </>
    }

return (
    <>
        <div className="slide-bar">
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 11500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className="images">
                    <SwiperSlide>
                        <img src="../src/images/image21.jpg" alt="images" />
                        <div className='ad'>
                            <div className="ad-font">
                                <h4>Mobile Design</h4>
                                <h2>
                                    <span>Come and Get It!</span><br></br>
                                    <span>Brand new Mobail</span>
                                </h2>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                {SwiperArray.map(slide_Image)};
            </Swiper>
        </div>
    </>
)
}

export default slide_image
