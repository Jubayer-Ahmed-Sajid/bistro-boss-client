import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-side-chb6ktge5-jubayer-ahmed-sajid.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }), []
    return (
        <div className="mb-20">
            <SectionTitle subHeading="what Out Client say" heading='Testimonials'></SectionTitle>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}
                        review={review}>
                        <div className="flex flex-col items-center my-8 mx-14">

                            <Rating style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly></Rating>
                                <p className="text-center my-6">{review.details}</p>
                                <h2 className="text-center text-orange-400 text-3xl font-semibold">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Review;