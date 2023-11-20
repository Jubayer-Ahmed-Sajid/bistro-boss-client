import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Components/hooks/useCart";
import useAdmin from "../../Components/hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart()
    const [data] = useAdmin();
    console.log(data)
    const isAdmin =data;
    console.log('isAdmin', isAdmin)

    return (
        <div className="flex">
            <div className="w-60 bg-orange-400 min-h-screen">
                <ul className="menu p-4 space-y-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard'>
                                    <FaHome></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils> Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaBook></FaBook> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>All Users
                                </NavLink>
                            </li>
                           
                        </> : <>
                            <li>
                                <NavLink to='/dashboard'>
                                    <FaHome></FaHome> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'>
                                    <FaCalendar></FaCalendar> Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart> My Cart({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addReview">
                                    <FaAd></FaAd>Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="dashboard/myBookings">
                                    <FaList></FaList> MyBookings
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* Shared Routes */}
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>  Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/orders/salad'>
                            <FaSearch></FaSearch>  Menu
                        </NavLink>
                    </li>
                </ul>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;