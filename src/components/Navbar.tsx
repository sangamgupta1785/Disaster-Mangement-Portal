import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, Users, MapPin, Menu, HeartHandshake, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: AlertTriangle },
    { name: 'Request Help', href: '/emergency', icon: AlertTriangle },
    { name: 'Volunteer', href: '/volunteer', icon: Users },
    { name: 'Resource Map', href: '/map', icon: MapPin },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <nav className="bg-indigo-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HeartHandshake className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">DisasterRelief</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.href
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.href
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;