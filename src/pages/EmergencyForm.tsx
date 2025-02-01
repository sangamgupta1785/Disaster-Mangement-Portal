import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const EmergencyForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: '',
    urgency: '',
    contact: '',
    peopleAffected: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mr-2" />
          Report Emergency
        </h1>
        <p className="mt-2 text-gray-600">
          Please provide detailed information about the emergency situation
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Emergency Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select type</option>
            <option value="medical">Medical Emergency</option>
            <option value="fire">Fire</option>
            <option value="flood">Flood</option>
            <option value="earthquake">Earthquake</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Describe the emergency situation..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter location"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Urgency Level</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select urgency</option>
            <option value="high">High - Immediate response needed</option>
            <option value="medium">Medium - Response needed within hours</option>
            <option value="low">Low - Response needed within 24 hours</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Information</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Phone number or email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of People Affected</label>
          <input
            type="number"
            name="peopleAffected"
            value={formData.peopleAffected}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Approximate number"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Submit Emergency Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmergencyForm;