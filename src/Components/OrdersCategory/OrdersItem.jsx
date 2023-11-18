import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';


const OrdersItem = ({ item }) => {
  const [,refetch] = useCart()
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { image, name, recipe, price ,_id} = item

  const handleAddToCartItems = (food) => {
    const itemToAdd = {
      menuId: _id,
       image,
       name,
     price,
     email: user.email
    }
    console.log(food)
    if(user && user.email) {
        axiosSecure.post('/carts', itemToAdd)
          .then(res => {
            console.log(res.data)
            if (res.data) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} is added successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
            }
          })
  }
    else {
  Swal.fire({
    title: "Do you want to login?",
    text: "You are not logged in yet!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, login!"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/login ', { state: { from: location } })
    }
  });

}
      };



return (
  <div className="card   bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className='absolute right-0 mr-8 mt-4 bg-black px-4 py-2 text-white rounded-lg   '>${price}</p>
    <div className="card-body">
      <h2 className="text-3xl font-semibold text-center mt-8">{name}</h2>
      <p className='text-[#737373]'>{recipe}</p>
      <div className="card-actions justify-center">
        <button onClick={() => handleAddToCartItems(item)} className="btn bg-[#E8E8E8] text-[#BB8506] border-t hover:bg-[#111827] border-b-4 border-[#BB8506]">Add to Cart</button>
      </div>
    </div>
  </div>
);
};
OrdersItem.propTypes = {
  item: PropTypes.object
}

export default OrdersItem;