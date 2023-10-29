import img from '../../src/assets/images/hero/1.jpg'
import img2 from '../../src/assets/images/hero/2.jpg'
import img3 from '../../src/assets/images/hero/3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/css/Hero.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const allData = [
    {
        id: 1,
        img: img,
        header:"Trendy Dress",
        title: "Classic",
        desc: "Style"
    },
    {
        id: 2,
        img: img2,
        header:"Upto 70% off",

        title: "Winter",
        desc: "Collection"
    },
    {
        id: 3,
        img: img3,
        header:"Winter Collection",

        title: "70% off",
        desc: "to all Collection"
    },
]

const Hero = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 5500,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    {
                        allData.map((data) => {
                            return (
                                <div key={data.id}>
                                    <SwiperSlide>
                                        <div className='main-hero'>
                                            <div className='hero-image-div'>
                                                <img className='hero-image' src={data.img} alt="" />
                                            </div>
                                            <div className='hero-p'>
                                                <p className='hero-header'>{data.header}</p>
                                                <p className='hero-title'>  {data.title}</p>
                                                <p className='hero-desc'>{data.desc}</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>

                                </div>
                            )
                        })
                    }
                </div>

            </Swiper>
        </div>
    )
}

export default Hero