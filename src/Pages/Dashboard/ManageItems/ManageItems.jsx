import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Components/hooks/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const axiosSecure = useAxiosSecure()
    const [menu, refetch] = useMenu()
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div className="w-full">
            <SectionTitle heading="Manage all items" subHeading="Hurry up!"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {menu.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex justify-center items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.name}

                            </td>
                            <td>{item.price}</td>
                            <td>

                                <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                                    <FaTrashAlt></FaTrashAlt>    </button>
                            </td>
                            <td>
                                <Link to={`/dashboard/updateItems/${item._id}`}>
                                    <button className="btn btn-ghost btn-lg">
                                        <FaEdit></FaEdit>    </button>
                                </Link>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;