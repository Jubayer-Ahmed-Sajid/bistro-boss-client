import { FaAd, FaCalendar, FaHome, FaList,FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Components/hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-60 bg-orange-400 min-h-screen">
                <ul className="menu p-4 space-y-4">
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
                    <div className="divider"></div>
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