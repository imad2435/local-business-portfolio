// frontend/src/components/admin/EditServiceModal.jsx

import React, { useState, useEffect } from 'react';

const EditServiceModal = ({ isOpen, onClose, onUpdateService, service }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // We don't handle image changes in this simple edit form for now
  
  // When the service prop changes, update the form fields
  useEffect(() => {
    if (service) {
      setTitle(service.title);
      setDescription(service.description);
    }
  }, [service]);
  
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // We only send the fields that can be updated
    onUpdateService(service._id, { title, description });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <p className="text-sm text-gray-500 mb-4">Note: Image cannot be changed from this form.</p>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceModal;