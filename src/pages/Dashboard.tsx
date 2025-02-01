import React from 'react';
import { AlertTriangle, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyCard = ({ title, description, location, type, urgency }: {
  title: string;
  description: string;
  location: string;
  type: string;
  urgency: 'High' | 'Medium' | 'Low';
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <span className={`px-2 py-1 rounded text-sm ${
        urgency === 'High' ? 'bg-red-100 text-red-800' :
        urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {urgency} Priority
      </span>
    </div>
    <div className="mt-4 flex items-center text-sm text-gray-500">
      <MapPin className="h-4 w-4 mr-1" />
      {location}
    </div>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-sm text-gray-500">Type: {type}</span>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
        Respond
      </button>
    </div>
  </div>
);

const Dashboard = () => {
  const emergencies = [
    {
      title: "Medical Supplies Needed",
      description: "Urgent need for first aid kits and basic medical supplies in flood-affected area",
      location: "Downtown District",
      type: "Medical",
      urgency: "High" as const
    },
    {
      title: "Evacuation Assistance",
      description: "Elderly residents need help evacuating from wildfire zone",
      location: "North Hills",
      type: "Evacuation",
      urgency: "High" as const
    },
    {
      title: "Food and Water Distribution",
      description: "Volunteers needed to distribute supplies to affected families",
      location: "East Side",
      type: "Resources",
      urgency: "Medium" as const
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Emergency Response Dashboard</h1>
        <p className="mt-2 text-gray-600">Coordinate and respond to active emergencies in your area</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-100 p-6 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Active Emergencies</h2>
              <p className="text-3xl font-bold text-red-600">12</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Available Volunteers</h2>
              <p className="text-3xl font-bold text-blue-600">48</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-lg">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Resource Centers</h2>
              <p className="text-3xl font-bold text-green-600">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Active Emergencies</h2>
          <Link
            to="/emergency"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Report Emergency
          </Link>
        </div>
        <div className="grid gap-6">
          {emergencies.map((emergency, index) => (
            <EmergencyCard key={index} {...emergency} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;