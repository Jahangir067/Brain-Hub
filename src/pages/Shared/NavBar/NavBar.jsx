import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/instructor'>Instructor</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to="/dashboard/mycart"> 
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>

        {
            user ? <>
                <li>
                    <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                </li>
                <img src={user?.photoURL} alt="" className="rounded-full w-8 h-8" />

            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/'><h3 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Brain Hub</h3></Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-between">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-error">Get started</a>
                </div>
            </div>

        </>
    );
};

export default NavBar;