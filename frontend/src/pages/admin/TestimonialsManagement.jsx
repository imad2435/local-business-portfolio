// frontend/src/pages/admin/TestimonialsManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import AddTestimonialModal from '../../components/admin/AddTestimonialModal';
import EditTestimonialModal from '../../components/admin/EditTestimonialModal';
import DeleteItemModal from '../../components/admin/DeleteItemModal';

const TestimonialsManagement = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  
  const [currentItem, setCurrentItem] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5000/api/testimonials');
      setTestimonials(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleAddTestimonial = async (newTestimonial) => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post('http://localhost:5000/api/testimonials', newTestimonial, config);
      setAddModalOpen(false);
      fetchTestimonials();
    } catch (err) {
      alert('Failed to add testimonial.');
    }
  };

  const handleUpdateTestimonial = async (id, updatedData) => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`http://localhost:5000/api/testimonials/${id}`, updatedData, config);
      setEditModalOpen(false);
      fetchTestimonials();
    } catch (err) {
      alert('Failed to update testimonial.');
    }
  };
  
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:5000/api/testimonials/${currentItem._id}`, config);
      setDeleteModalOpen(false);
      fetchTestimonials();
    } catch (err) {
      alert('Failed to delete testimonial.');
    }
  };

  const openEditModal = (item) => {
    setCurrentItem(item);
    setEditModalOpen(true);
  };

  const openDeleteModal = (item) => {
    setCurrentItem(item);
    setDeleteModalOpen(true);
  };
  
  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Testimonials</h1>
        <button onClick={() => setAddModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <FaPlus className="mr-2" /> Add New Testimonial
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avatar</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Review</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {testimonials.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4">
                  <img src={item.avatarUrl} alt={item.name} className="w-12 h-12 object-cover rounded-full"/>
                </td>
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate" title={item.review}>{item.review}</td>
                <td className="px-6 py-4 space-x-4">
                  <button onClick={() => openEditModal(item)} className="text-indigo-600 hover:text-indigo-900"><FaEdit /></button>
                  <button onClick={() => openDeleteModal(item)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <AddTestimonialModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAddTestimonial={handleAddTestimonial}
      />
      
      <EditTestimonialModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onUpdateTestimonial={handleUpdateTestimonial}
        testimonial={currentItem}
      />

      <DeleteItemModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={currentItem?.name}
      />
    </div>
  );
};

export default TestimonialsManagement;