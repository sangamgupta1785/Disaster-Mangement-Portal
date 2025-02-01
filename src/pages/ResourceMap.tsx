import React from 'react';
import { MapPin } from 'lucide-react';

const ResourceMap = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <MapPin className="h-8 w-8 text-green-600 mr-2" />
          Resource Map
        </h1>
        <p className="mt-2 text-gray-600">
          View and locate emergency resources and affected areas
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="flex space-x-2">
            <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200">
              Shelters
            </button>
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200">
              Emergency Areas
            </button>
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-md hover:bg-green-200">
              Supply Centers
            </button>
            <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md hover:bg-yellow-200">
              Medical Facilities
            </button>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps will be integrated here</p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Nearby Resources</h2>
          <div className="space-y-2">
            {[
              { name: 'Central Emergency Shelter', type: 'Shelter', distance: '0.5 miles', status: 'Open' },
              { name: 'Medical Supply Center', type: 'Supply', distance: '1.2 miles', status: 'Limited' },
              { name: 'City Hospital', type: 'Medical', distance: '2.0 miles', status: 'Open' },
            ].map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <h3 className="font-medium">{resource.name}</h3>
                  <p className="text-sm text-gray-500">{resource.type} • {resource.distance}</p>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  resource.status === 'Open' ? 'bg-green-100 text-green-800' :
                  resource.status === 'Limited' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {resource.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceMap;