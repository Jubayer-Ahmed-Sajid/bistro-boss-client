import OrdersItem from './OrdersItem';
import PropTypes from 'prop-types'

const OrdersCategory = ({category}) => {
    console.log(category)
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            
            {
                category?.map(item => <OrdersItem key={item._id} item={item}></OrdersItem>)
            }
        </div>
    );
};
OrdersCategory.propTypes ={
    category: PropTypes.array
}

export default OrdersCategory;