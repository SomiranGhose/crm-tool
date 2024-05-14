// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-2">Welcome to the CRM Tool</h1>
      <p className="text-center text-lg mb-6">This tool helps you manage customers, inventory, orders, revenue, and warehouse operations efficiently.</p>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">Quick Navigation:</h2>
          <ul className="list-none text-center">
            <li className="mb-2">
              <Link to="/dashboard" className="text-blue-500 hover:text-blue-800 transition duration-300">Go to Dashboard</Link>
            </li>
            <li className="mb-2">
              <Link to="/customers" className="text-blue-500 hover:text-blue-800 transition duration-300">Customer Management</Link>
            </li>
            <li className="mb-2">
              <Link to="/inventory" className="text-blue-500 hover:text-blue-800 transition duration-300">Inventory Management</Link>
            </li>
            <li className="mb-2">
              <Link to="/orders" className="text-blue-500 hover:text-blue-800 transition duration-300">Order Management</Link>
            </li>
            <li className="mb-2">
              <Link to="/revenue" className="text-blue-500 hover:text-blue-800 transition duration-300">Revenue Details</Link>
            </li>
            <li className="mb-2">
              <Link to="/warehouse" className="text-blue-500 hover:text-blue-800 transition duration-300">Warehouse Management</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
