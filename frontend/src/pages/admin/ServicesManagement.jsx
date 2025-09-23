// frontend/src/pages/admin/ServicesManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import AddServiceModal from '../../components/admin/AddServiceModal';
import EditServiceModal from '../../components/admin/EditServiceModal';
import DeleteItemModal from '../../components/admin/DeleteItemModal';

const ServicesManagement = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for modals
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  
  // State to hold the item currently being edited or deleted
  const [currentItem, setCurrentItem] = useState(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5000/api/services/getServices');
      setServices(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async (formData) => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post('http://localhost:5000/api/services/addService', formData, config);
      setAddModalOpen(false);
      fetchServices(); // Refresh list
    } catch (err) {
      alert('Failed to add service.');
    }
  };

  const handleUpdateService = async (id, updatedData) => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`http://localhost:5000/api/services/updateService/${id}`, updatedData, config);
      setEditModalOpen(false);
      fetchServices(); // Refresh list
    } catch (err) {
      alert('Failed to update service.');
    }
  };

  const handleDeleteService = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:5000/api/services/deleteService/${currentItem._id}`, config);
      setDeleteModalOpen(false);
      fetchServices(); // Refresh list
    } catch (err) {
      alert('Failed to delete service.');
    }
  };
  
  const openEditModal = (service) => {
    setCurrentItem(service);
    setEditModalOpen(true);
  };
  
  const openDeleteModal = (service) => {
    setCurrentItem(service);
    setDeleteModalOpen(true);
  };

  if (loading) return <p>Loading services...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Services</h1>
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <FaPlus className="mr-2" /> Add New Service
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
           <thead className="bg-gray-100">
             <tr>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-200">
             {services.map((service) => (
               <tr key={service._id}>
                 <td className="px-6 py-4">
                   <img src={`http://localhost:5000/uploads/${service.image}`} alt={service.title} className="w-16 h-16 object-cover rounded"/>
                 </td>
                 <td className="px-6 py-4 font-medium text-gray-900">{service.title}</td>
                 <td className="px-6 py-4 space-x-4">
                   <button onClick={() => openEditModal(service)} className="text-indigo-600 hover:text-indigo-900"><FaEdit /></button>
                   <button onClick={() => openDeleteModal(service)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                 </td>
               </tr>
             ))}
           </tbody>
        </table>
      </div>
      
      <AddServiceModal 
        isOpen={isAddModalOpen} 
        onClose={() => setAddModalOpen(false)}
        onAddService={handleAddService}
      />
      
      <EditServiceModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onUpdateService={handleUpdateService}
        service={currentItem}
      />

      <DeleteItemModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteService}
        itemName={currentItem?.title}
      />
    </div>
  );
};

export default ServicesManagement;