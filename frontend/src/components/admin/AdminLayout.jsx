import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaImages, FaComment, FaEnvelope, FaSignOutAlt, FaPlus } from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center p-3 text-white bg-gray-700 rounded-lg'
      : 'flex items-center p-3 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white';

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 flex-shrink-0 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <NavLink to="/admin/dashboard" className={getNavLinkClass}>
            <FaTachometerAlt className="mr-3" /> Dashboard
          </NavLink>
          <NavLink to="/admin/portfolio" className={getNavLinkClass}>
            <FaImages className="mr-3" /> Portfolio
          </NavLink>
          <NavLink to="/admin/services" className={getNavLinkClass}>
            <FaPlus className="mr-3" /> Services
          </NavLink>
          <NavLink to="/admin/testimonials" className={getNavLinkClass}>
            <FaComment className="mr-3" /> Testimonials
          </NavLink>
          <NavLink to="/admin/messages" className={getNavLinkClass}>
            <FaEnvelope className="mr-3" /> Messages
          </NavLink>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center p-3 text-gray-300 rounded-lg hover:bg-red-600 hover:text-white"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;