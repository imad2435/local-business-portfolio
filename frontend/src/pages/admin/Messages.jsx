// frontend/src/pages/admin/Messages.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get('http://localhost:5000/api/messages', config);
        setMessages(data);
      } catch (err) {
        console.error('Failed to fetch messages', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Form Messages</h1>
      <div className="space-y-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-800">{msg.name}</h3>
                <span className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Email: {msg.email}</p>
              <p className="bg-gray-50 p-3 rounded">{msg.message}</p>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;