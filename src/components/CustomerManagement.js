import React, { useState } from 'react';
import axios from 'axios';

function CustomerManagement() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = () => {
    axios.get('/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <button onClick={fetchCustomers}>Load Customers</button>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerManagement;
