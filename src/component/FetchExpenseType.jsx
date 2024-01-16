// FetchExpenseType.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

const baseUrl = process.env.REACT_APP_API_URL;

const FetchExpenseType = ({ onEditClick, onDeleteClick }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/client/1/expenses`);
        const responseData = response.data.data || {};

        // Ensure that the "expenses" key is present in responseData
        const expenses = responseData.expenses || [];

        setData(expenses);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClick = async (expenseId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this expense type?');
    if (!isConfirmed) return;

    try {
      await axios.delete(`${baseUrl}/client/1/expenses/delete/${expenseId}`);
      // Update local state to trigger re-render with updated data
      setData((prevData) => prevData.filter((expense) => expense.expenseId !== expenseId));
      alert('Expense type deleted successfully');
    } catch (error) {
      console.error('Delete Error:', error);
      setError(error);
    }
  };

  const handleEditClick = (editedExpenseType) => {
    // Notify the parent component to handle the edit
    onEditClick(editedExpenseType);
  };

  return (
    <div className='table-container'>
      <div className='expense-type-table'>
        {error ? (
          <p>Error fetching data: {error.message}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Expense Type</th>
                <th>Amount</th>
                <th>Date</th>
                {/* <th>Status</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((expenseType, index) => (
                <tr key={index}>
                  <td>{expenseType.expenseId}</td>
                  <td>{expenseType.expenseType}</td>
                  <td>{expenseType.amount}</td>
                  <td>{expenseType.dateAdded}</td>
                  {/* <td>{expenseType.isActive}</td> */}
                  
                  <td>
                    <button className='edit-icon' onClick={() => handleEditClick(expenseType)}>
                      <CiEdit />
                    </button>
                    <button className='del-icon' onClick={() => handleDeleteClick(expenseType.expenseId)}>
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

export default FetchExpenseType;
