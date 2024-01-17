// ExpenseType.jsx

import React, { useState, useEffect } from 'react';
import AddExpenseTypeModal from '../component/AddExpenseTypeModal';
import Layout from '../component/Layout';
import axios from 'axios';
import FetchExpenseType from '../component/FetchExpenseType';

const baseUrl = process.env.REACT_APP_API_URL;

export const ExpenseType = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [expenseData, setExpenseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataKey, setDataKey] = useState(0);

  const expenseTypeColumns = [
    { name: 'expenseType', label: 'Expense Type' },
    { name: 'amount', label: 'Amount' },
    { name: 'cgst', label: 'CGST' },
    { name: 'igst', label: 'IGST' },
    { name: 'sgst', label: 'SGST' },
    { name: 'dateAdded', label: 'Date Added' },
    { name: 'isActive ', label: 'Status' },
  ];

  useEffect(() => {
    fetchData();
  }, [dataKey]);

  const fetchData = async () => {
    const apiUrl = `${baseUrl}/client/1/expenses`;

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

  const handleSaveExpense = async (formData, mode) => {
    const apiUrl = `${baseUrl}/client/1/expenses`;

    try {
      let updatedData;

      if (mode === 'add') {
        // Adjust the fields sent in the request as needed
        await axios.post(apiUrl + '/add', {
          fkClientId: 1,
          fkUserId: 1,
          expenseType: formData.expenseType,
          amount: formData.amount,
          cgst: formData.cgst,
          sgst: formData.sgst,
          igst: formData.igst,
          dateAdded: formData.dateAdded,
          isActive: formData.isActive,
          dateModified: formData.dateModified,
          dateDeleted: formData.dateDeleted,
          // Add other fields as needed
        });
      } else if (mode === 'edit') {
        // Adjust the fields sent in the request as needed
        await axios.put(apiUrl + `/update/${formData.expenseId}`, {
          fkClientId: 1,
          fkUserId: 1,
          expenseType: formData.expenseType,
          amount: formData.amount,
          cgst: formData.cgst,
          sgst: formData.sgst,
          igst: formData.igst,
          dateAdded: formData.dateAdded,
          isActive: formData.isActive,
          dateModified: formData.dateModified,
          dateDeleted: formData.dateDeleted,
        });
      }

      setDataKey((prevKey) => prevKey + 1);
      alert(`Expense ${mode === 'add' ? 'added' : 'updated'} successfully`);
    } catch (error) {
      console.error('Error saving expense:', error.message);
    }
  };

  return (
    <Layout>
      <div className='customer-container'>
        <div className='card border-0'>
          <div className='card-header'>
            <h5 className='card-title'>Expense Summary</h5>
          </div>
        </div>
        <div className='card-summary d-flex justify-content-left'>
          <div className='summary-box'>
            <h4 className='summary-title'>Total Expenses</h4>
            <h4 className='summary-value'>44</h4>
          </div>
          <div className="add-btn-container">
            <button className="add-btn" onClick={handleAddExpenseClick}>
              + Add Expense
            </button>
          </div>
        </div>

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
