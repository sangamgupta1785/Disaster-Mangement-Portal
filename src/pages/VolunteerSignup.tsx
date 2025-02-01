import React, { useState } from 'react';
import { Users, Check } from 'lucide-react';

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    availability: '',
    location: '',
    transportation: '',
    experience: '',
  });

  const skillsList = [
    'Medical',
    'Search & Rescue',
    'Transportation',
    'Language Translation',
    'Food Distribution',
    'Construction',
    'Counseling',
    'IT/Technical',
  ];

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

  const handleSkillsChange = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Users className="h-8 w-8 text-blue-600 mr-2" />
          Volunteer Registration
        </h1>
        <p className="mt-2 text-gray-600">
          Join our network of volunteers to help during emergencies
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Expertise</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {skillsList.map((skill) => (
              <label
                key={skill}
                className={`flex items-center p-2 rounded-md cursor-pointer ${
                  formData.skills.includes(skill)
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-gray-50 border-gray-300'
                } border`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillsChange(skill)}
                />
                <Check
                  className={`h-4 w-4 mr-2 ${
                    formData.skills.includes(skill) ? 'text-blue-600' : 'text-gray-300'
                  }`}
                />
                <span className="text-sm">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select availability</option>
            <option value="anytime">Available Anytime</option>
            <option value="weekdays">Weekdays Only</option>
            <option value="weekends">Weekends Only</option>
            <option value="evenings">Evenings Only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="City, State"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Transportation</label>
          <select
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select transportation</option>
            <option value="own">Own Vehicle</option>
            <option value="public">Public Transportation</option>
            <option value="none">No Transportation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Previous Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Describe any relevant experience..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Register as Volunteer
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerSignup;