import SectionTitle from '../SectionTitle/SectionTitle';
import PopularCard from '../PopularCard/PopularCard'
import useMenu from '../hooks/UseMenu';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
const MenuCards = ({ data, heading, subHeading, title }) => {
    // const [popular,setPopular] = useState([])
    const [menu] = useMenu()
    console.log(menu)



    return (
        <div className="mb-20">
            <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
                {
                    data?.map(item => <PopularCard key={item._id} item={item}> </PopularCard>)
                }
            </div>
            <Link to={`/orders/${title}`} className='flex justify-center'>
                <button className="btn my-8 bg-[#E8E8E8] text-[#BB8506] border-t hover:bg-[#111827] border-b-4 border-[#BB8506]">Order Now</button>

            </Link>

        </div>
    );
};
MenuCards.propTypes ={
    data: PropTypes.array,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    title: PropTypes.string
}
export default MenuCards;