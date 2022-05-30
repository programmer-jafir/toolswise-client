import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    { !admin &&<li><Link to="/dashboard/">My Orders</Link></li>}
                    { !admin && <li><Link to="/dashboard/review">My Reviews</Link></li>}
                    { admin && <li><Link to="/dashboard/Makeadmin">Make Admin</Link></li>}
                    { admin && <li><Link to="/dashboard/Addproduct">Add A Product</Link></li>}
                    { admin && <li><Link to="/dashboard/ManageProducts">Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;