// FetchData.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

const baseUrl = process.env.REACT_APP_API_URL;

const FetchData = ({ onEditClick, onDeleteClick }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/client/1/customer`);
        setData(response.data.data.customers);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClick = async (customerId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this customer?');
    if (!isConfirmed) return;

    try {
      await axios.delete(`${baseUrl}/client/1/customer/delete/${customerId}`);
      // Update local state to trigger re-render with updated data
      setData((prevData) => prevData.filter((user) => user.custId !== customerId));
      alert('Customer deleted successfully');
    } catch (error) {
      console.error('Delete Error:', error);
      setError(error);
    }
  };

  const handleEditClick = (editedUser) => {
    // Notify the parent component to handle the edit
    onEditClick(editedUser);
  };

  return (
    <div className='table-container'>
      <div className='customer-table'>
        {error ? (
          <p>Error fetching data: {error.message}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.custId}</td>
                  <td>{user.custName}</td>
                  <td>{user.custEmail}</td>
                  <td>{user.custMobile}</td>
                  <td>{user.custAddress}</td>
                  <td>
                    <button className='edit-icon' onClick={() => handleEditClick(user)}>
                      <CiEdit />
                    </button>
                    <button className='del-icon' onClick={() => handleDeleteClick(user.custId)}>
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FetchData;
