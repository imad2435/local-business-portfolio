// frontend/src/pages/admin/PortfolioManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash } from 'react-icons/fa';
import AddItemModal from '../../components/admin/AddItemModal';
import DeleteItemModal from '../../components/admin/DeleteItemModal';

const PortfolioManagement = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // State for modals
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  
  // Function to fetch all portfolio items
  const fetchItems = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5000/api/portfolio');
      setItems(data);
    } catch (err) {
      setError('Failed to fetch items.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch items when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async (newItem) => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post('http://localhost:5000/api/portfolio', newItem, config);
      setAddModalOpen(false);
      fetchItems(); // Refresh the list
    } catch (err) {
      alert('Failed to add item. Make sure you are logged in.');
    }
  };

  const handleDeleteItem = async () => {
    if (!itemToDelete) return;
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:5000/api/portfolio/${itemToDelete._id}`, config);
      setDeleteModalOpen(false);
      setItemToDelete(null);
      fetchItems(); // Refresh the list
    } catch (err) {
      alert('Failed to delete item.');
    }
  };
  
  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  if (loading) return <p>Loading portfolio...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Portfolio</h1>
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <FaPlus className="mr-2" /> Add New Item
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded"/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => openDeleteModal(item)} className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <AddItemModal 
        isOpen={isAddModalOpen} 
        onClose={() => setAddModalOpen(false)}
        onAddItem={handleAddItem}
      />

      <DeleteItemModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteItem}
        itemName={itemToDelete?.title}
      />
    </div>
  );
};

export default PortfolioManagement;