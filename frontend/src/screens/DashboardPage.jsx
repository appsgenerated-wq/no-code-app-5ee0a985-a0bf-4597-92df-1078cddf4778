import React, { useEffect, useState } from 'react';
import config from '../constants.js';

const DashboardPage = ({ user, restaurants, onLogout, onLoadRestaurants, onCreateRestaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', address: '' });

  useEffect(() => {
    if (user) {
      onLoadRestaurants();
    }
  }, [user]);

  const handleCreateRestaurant = async (event) => {
    event.preventDefault();
    if (!newRestaurant.name || !newRestaurant.address) {
        alert('Restaurant name and address are required.');
        return;
    }
    await onCreateRestaurant(newRestaurant);
    setNewRestaurant({ name: '', description: '', address: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {user?.name}!
            </h1>
            <p className="text-sm text-gray-500">Role: {user?.role}</p>
          </div>
          <div className="flex items-center space-x-4">
             <a 
              href={`${config.BACKEND_URL}/admin`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              Admin Panel
            </a>
            <button 
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create New Restaurant Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Add a New Restaurant</h2>
          <form onSubmit={handleCreateRestaurant} className="space-y-4">
            <input
              type="text"
              placeholder="Restaurant Name"
              value={newRestaurant.name}
              onChange={(e) => setNewRestaurant({...newRestaurant, name: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <textarea
              placeholder="Description"
              value={newRestaurant.description}
              onChange={(e) => setNewRestaurant({...newRestaurant, description: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
            />
            <input
              type="text"
              placeholder="Address"
              value={newRestaurant.address}
              onChange={(e) => setNewRestaurant({...newRestaurant, address: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <button type="submit" className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700">
              Add Restaurant
            </button>
          </form>
        </div>

        {/* Restaurants List */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Restaurants</h2>
          {restaurants.length === 0 ? (
            <p className="text-gray-500 text-center py-10">No restaurants found. Be the first to add one!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map(restaurant => (
                <div key={restaurant.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                   <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                     {restaurant.image ? 
                       <img src={restaurant.image.thumbnail} alt={restaurant.name} className="w-full h-full object-cover" /> : 
                       <span>No Image</span>
                     }
                   </div>
                   <div className="p-4">
                     <h3 className="font-bold text-lg text-gray-800">{restaurant.name}</h3>
                     <p className="text-sm text-gray-600 mt-1 truncate">{restaurant.description}</p>
                     <p className="text-xs text-gray-500 mt-2">{restaurant.address}</p>
                     <p className="text-xs text-gray-500 mt-2">Owner: {restaurant.owner?.name || 'N/A'}</p>
                   </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
