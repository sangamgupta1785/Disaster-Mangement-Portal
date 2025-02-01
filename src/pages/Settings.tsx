import React, { useState } from 'react';
import { Settings as SettingsIcon, Key, Save } from 'lucide-react';

const Settings = () => {
  const [apiKey, setApiKey] = useState('AIzaSyDWCa_JGuPc_IfBG30aAZxKLoFF1y5E5u8');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('AIzaSyDWCa_JGuPc_IfBG30aAZxKLoFF1y5E5u8', apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <SettingsIcon className="h-8 w-8 text-gray-600 mr-2" />
          Google Maps Configuration
        </h1>
        <p className="mt-2 text-gray-600">
          Your Google Maps API key has been pre-filled. Click Save to confirm.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <Key className="h-4 w-4" />
                <span>Google Maps API Key</span>
              </div>
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save API Key</span>
            </button>
            {saved && (
              <span className="text-green-600 flex items-center">
                API key saved successfully!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;