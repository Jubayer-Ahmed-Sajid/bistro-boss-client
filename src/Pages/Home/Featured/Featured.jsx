import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../.../../../../assets/home/featured.jpg'
import './style.css'
const Featured = () => {
    return (
        <div className="featured bg-opacity-30 bg-fixed py-20 px-24  mb-20">
            <SectionTitle heading="From our Menu" subHeading="Check it Out"></SectionTitle>
           <div className='flex justify-center bg-gray-400 bg-opacity-30 gap-16 items-center'>
           <img src={featured} className='md: w-[600px] object-cover' alt="" />
            <div className='text-white'>
                <p>November 9, 2023</p>
                <h2 className='text-xl font-semibold'>WHERE CAN I GET SOME?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className='btn btn-outline text-white'>Read More</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;