import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AlertTriangle, Users, HandHeart, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EmergencyForm from './pages/EmergencyForm';
import VolunteerSignup from './pages/VolunteerSignup';
import ResourceMap from './pages/ResourceMap';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/emergency" element={<EmergencyForm />} />
            <Route path="/volunteer" element={<VolunteerSignup />} />
            <Route path="/map" element={<ResourceMap />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;