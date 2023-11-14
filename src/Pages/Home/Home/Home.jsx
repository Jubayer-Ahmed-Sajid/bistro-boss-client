import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroImage from "../BistroImage/BistroImage";
import Featured from "../Featured/Featured";
import Popular from "../Popular/Popular";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Bistro Bose | Home</title>
           </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <BistroImage></BistroImage>
            <Popular></Popular>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;