import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import cover from '../../assets/menu/banner3.jpg'
import useMenu from "../../Components/hooks/UseMenu";
import salads from '../../assets/menu/salad-bg.jpg'
import pizzas from '../../assets/menu/pizza-bg.jpg'
import soups from '../../assets/menu/soup-bg.jpg'
import MenuCards from "../../Components/MenuCards/MenuCards";

const Menu = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss|Menu</title>
            </Helmet>
            <Cover img={cover} title='Our Menu'></Cover>
            <MenuCards title="salad" data={salad} heading={'Salad'} subHeading={"Don't miss out"}></MenuCards>
            <Cover img={salads} title='salads'></Cover>
            <MenuCards title='drinks' data={drinks} heading={'drinks'} subHeading={"Don't miss out"}></MenuCards>
            <Cover img={soups} title='soups'></Cover>
            <MenuCards title='pizza' data={pizza} heading={'pizza'} subHeading={"Don't miss out"}></MenuCards>
            <Cover img={pizzas} title='pizza'></Cover>
            <MenuCards title='dessert' data={dessert} heading={'desserts'} subHeading={"Don't miss out"}></MenuCards>

        </div>
    );
};

export default Menu;