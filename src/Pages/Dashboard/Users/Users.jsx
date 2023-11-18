import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data

        },


    })
    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: `${user.name} is Admin now`,
                                // text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div className="w-full px-8">
            <h2 className="text-3xl font-bold text-center my-8">All users</h2>
            <h2 className="text-2xl font-bold ">Total User: {users.length} </h2>
            <div className="overflow-x-auto">
                <table className="table mt-8">
                    {/* head */}
                    <thead className="bg-orange-400">
                        <tr className="text-center">
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className="text-center" key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="flex justify-center">
                                    {user.role === 'Admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="text-2xl  text-orange-400"><FaUser></FaUser></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="text-2xl  justify-center text-red-600">
                                        <div className="flex justify-center">
                                            <FaTrashAlt></FaTrashAlt>
                                        </div></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;