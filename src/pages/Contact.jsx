import React, { useState } from 'react';
import skincareStore from '../stores/skincareProductStore';

function Contact() {
  const {errorMsg, setErrorMsg} = skincareStore();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    topic: 'Complaint',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data sent:', formData);
    }
  };

  const handleReset = () => {
    setFormData({
      email: '',
      firstName: '',
      topic: 'Complaint',
      message: ''
    });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    // First name validation
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    
    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }
    
    setErrorMsg(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="p-6 border border-[#e2a3b7] rounded-md w-full max-w-md mx-auto shadow-md mb-10 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email: *</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#e2a3b7]"
            required
          />
          {errorMsg.email && <p className="text-red-500 text-sm">{errorMsg.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-1 font-medium">Firstname: *</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#e2a3b7]"
            required
          />
          {errorMsg.firstName && <p className="text-red-500 text-sm">{errorMsg.firstName}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="topic" className="mb-1 font-medium">Topic: *</label>
          <select 
            name="topic" 
            id="topic" 
            value={formData.topic}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#e2a3b7]"
          >
            <option value="Complaint">Complaint</option>
            <option value="Feature">Feature Request</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">Message: *</label>
          <textarea 
            name="message" 
            id="message" 
            rows="7"
            value={formData.message}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#e2a3b7]"
            required
          ></textarea>
          {errorMsg.message && <p className="text-red-500 text-sm">{errorMsg.message}</p>}
        </div>

        <div className="w-full flex flex-row space-x-4 justify-center mt-4">
          <button 
            type="button"
            onClick={handleSubmit}
            className="bg-white border-2 border-[#e2a3b7] text-[#e2a3b7] font-semibold hover:bg-[#e2a3b7] hover:text-white py-2 px-4 rounded-md transition-colors"
          >
            Send
          </button>
          <button 
            type="button"
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;