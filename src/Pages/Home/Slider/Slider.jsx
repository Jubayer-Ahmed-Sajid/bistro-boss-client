import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Slider = () => {
    return (
        <div>
            <SectionTitle heading={'Order Now'}
            subHeading={'From 10 AM to 11 PM'}></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={slide1} className='w-[100%] object-cover' alt="" />
                    <h3 className='text-3xl text-white -mt-24 uppercase text-center'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} className='w-[100%] object-cover' alt="" />
                    <h3 className='text-3xl text-white -mt-24 uppercase text-center'>pizza</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} className='w-[100%] object-cover' alt="" />
                    <h3 className='text-3xl text-white -mt-24 uppercase text-center'>Soup</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} className='w-[100%] object-cover' alt="" />
                    <h3 className='text-3xl text-white -mt-24 uppercase text-center'>desert</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} className='w-[100%] object-cover' alt="" />
                    <h3 className='text-3xl text-white -mt-16 uppercase text-center'>Salad</h3>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;