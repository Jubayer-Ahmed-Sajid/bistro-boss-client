import { FaTrash } from "react-icons/fa";
import useCart from "../../../Components/hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";

const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cartItems,refetch] = useCart()
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const total = totalPrice.toFixed(2)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/carts/${id}`)
              
                if(res.data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }
              
            }
        });
    }

    return (
        <div className="w-full px-8">
            <div className="flex justify-evenly my-8">
                <h2 className='text-4xl text-center'>Total items: {cartItems.length}</h2>
                <h2 className="text-4xl text-center">Total Price: ${total}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center mx-auto bg-gray-300">
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            cartItems.map((item, index) => <tr key={item._id} className="text-center">
                                <th>
                                    {index + 1}
                                </th>
                                <td className="flex justify-center">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle  w-24 h-16">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="text-md font-bold">
                                    {item.name}
                                </td>
                                <td className="font-semibold">${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>

        </div>

    );
};

export default Cart;