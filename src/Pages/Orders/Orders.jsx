import { useParams } from 'react-router-dom';
import OrdersCategory from '../../Components/OrdersCategory/OrdersCategory';
import useMenu from '../../Components/hooks/UseMenu';
import Cover from '../../Shared/Cover/Cover'
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
const Orders = () => {
    const categories = ['salad', 'dessert', 'drinks', 'pizza']
    const { category } = useParams()

    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    // console.log(category)
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Cover img={orderImg} title="Order Now"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center mt-20 mb-12 text-2xl font-bold  active:text-[#BB8506]'>
                    <Tab>salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Pizza</Tab>
                </TabList>

                <TabPanel>
                    <OrdersCategory category={salad}></OrdersCategory>
                </TabPanel>
                <TabPanel>
                    <OrdersCategory category={dessert}></OrdersCategory>
                </TabPanel>
                <TabPanel>
                    <OrdersCategory category={drinks}></OrdersCategory>
                </TabPanel>
                <TabPanel>
                    <OrdersCategory category={pizza}></OrdersCategory>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Orders;