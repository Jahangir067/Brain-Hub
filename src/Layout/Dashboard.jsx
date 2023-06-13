import { NavLink, Outlet } from "react-router-dom";
import { FaDiscord, FaHome, FaPager, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";




const Dashboard = () => {
    const [cart] = useCart();


    const [isAdmin] = useAdmin();
    const isInstructor = true;
    const isUser = false;
    console.log(isAdmin)
    return (
        <div className="drawer lg:drawer-open">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-orange-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-75 h-full">
                    <div className="text-2xl text-white ms-4 mb-8 pb-8">
                        <h2 className="font-bold">Brain Hub</h2>
                        <p>E-Learning Platform</p>
                    </div>

                    {
                        isAdmin ? <>
                            

                            
                            <li><NavLink to='/dashboard/manageclasses'><FaDiscord></FaDiscord>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/manageusers'><FaWallet></FaWallet>Manage Users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to='/classes'><FaDiscord></FaDiscord>Classes</NavLink></li>
                            <li><NavLink to='/instructor'><FaPager></FaPager>Instructor</NavLink></li>
                        </> :
                       isInstructor?   <>

                          
                          <li><NavLink to='/dashboard/addclass'><FaDiscord></FaDiscord>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/myclass'><FaWallet></FaWallet>My Classes</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to='/classes'><FaDiscord></FaDiscord>Classes</NavLink></li>
                            <li><NavLink to='/instructor'><FaPager></FaPager>Instructor</NavLink></li>
                       </> :   <>
                         
                            <li>
                                <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Selected Classes <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink>

                            </li>
                            <li><NavLink to='/dashboard/enrolled'><FaWallet></FaWallet>My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>Payment</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to='/classes'><FaDiscord></FaDiscord>Classes</NavLink></li>
                            <li><NavLink to='/instructor'><FaPager></FaPager>Instructor</NavLink></li>
                        </>
                    }

                    {/* Sidebar content here */}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;