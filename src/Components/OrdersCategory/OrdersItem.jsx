import PropTypes from 'prop-types'


const OrdersItem = ({item}) => {
    const {image,name,recipe,price} = item

    console.log(item)
    return (
        <div className="card   bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='absolute right-0 mr-8 mt-4 bg-black px-4 py-2 text-white rounded-lg   '>${price}</p>
        <div className="card-body">
          <h2 className="text-3xl font-semibold text-center mt-8">{name}</h2>
          <p className='text-[#737373]'>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#E8E8E8] text-[#BB8506] border-t hover:bg-[#111827] border-b-4 border-[#BB8506]">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};
OrdersItem.propTypes ={
    item: PropTypes.object
}

export default OrdersItem;