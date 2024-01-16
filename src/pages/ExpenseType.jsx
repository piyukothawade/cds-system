// ExpenseType.jsx

import React, { useState, useEffect } from 'react';
import AddExpenseTypeModal from '../component/AddExpenseTypeModal';
import Layout from '../component/Layout';
import axios from 'axios';
import FetchExpenseType from '../component/FetchExpenseType';

export const ExpenseType = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [expenseData, setExpenseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = process.env.REACT_APP_API_URL;

  const expenseTypeColumns = [
    { key: 'expenseType', label: 'Expense Type' },
    { key: 'amount', label: 'Amount' },
    { key: 'dateAdded', label: 'Date' },
    { key: 'isActive', label: 'Status' },
    { key: 'dateAdded', label: 'Action' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${baseUrl}/superadmin/client/1/expenses`;

      try {
        const response = await axios.get(apiUrl);
        console.log('API Response:', response.data);
        const responseData = response.data.data || [];
        setExpenseData(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching expense type data:', error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddExpenseClick = () => {
    setModalMode('add');
    setShowModal(true);
  };

  const handleEditExpenseClick = (expense) => {
    setModalMode('edit');
    setSelectedExpense(expense);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalMode('add');
    setShowModal(false);
    setSelectedExpense(null);
  };

  const handleSaveExpense = (formData, mode) => {
    // Handle save logic based on mode and formData
    // Similar to what was done in Customer.js
    // You will need to adapt it based on your backend API and data structure
  };

  return (
    <Layout>
      <div className='customer-container'>
        <div className='card border-0'>
          <div className='card-header'>
            <h5 className='card-title'>Expense Type</h5>
          </div>
        </div>
        <div className='card-summary d-flex justify-content-left'>
          <div className='summary-box'>
            <h4 className='summary-title'>Total Expense</h4>
            <h4 className='summary-value'>90000</h4>
          </div>
          <div className="add-btn-container">
            <button className="add-btn" onClick={handleAddExpenseClick}>
              + Add Expense
            </button>
          </div>
        </div>

        {/* Use DynamicTable with dynamic data and columns */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <FetchExpenseType
            data={expenseData}
            columns={expenseTypeColumns}
            onEditClick={handleEditExpenseClick}
          />
        )}

        <AddExpenseTypeModal
          showModal={showModal}
          onClose={handleCloseModal}
          fields={expenseTypeColumns}
          mode={modalMode}
          onSave={handleSaveExpense}
          expenseTypeData={selectedExpense}
        />
      </div>
    </Layout>
  );
};

export default ExpenseType;
