import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders/AuthProvider";
import { FaCartPlus } from 'react-icons/fa'
import useCart from "../Components/hooks/useCart";
const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [cart] = useCart()
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><Link to="/orders/salad">Orders</Link></li>
        <button className="btn btn-ghost">
            <FaCartPlus></FaCartPlus>
            <div className="badge badge-secondary">+{cart.length}</div>
        </button>
        <li><Link to="/login">Login</Link></li>
    </>
    const handleLogOut = () => {
        signOutUser()
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-7xl mx-auto bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Distro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <> <button onClick={handleLogOut} className="btn">Logout</button> <img src={user?.photoURL} className="w-12 ml-8 rounded-full" alt="" /></> : <Link to="/login" className="btn">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;