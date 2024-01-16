import React, { useState, useEffect } from 'react';
import AddCustomerModal from '../component/AddCustomerModal';
import axios from 'axios';
import DynamicTable from "../component/DynamicTable";
import FetchData from '../component/FetchData';
import Layout from '../component/Layout';

const customerFormFields = [
  { name: 'custName', label: 'Name' },
  { name: 'custMobile', label: 'Phone' },
  { name: 'custAltMobile', label: 'Alternate Phone' },
  { name: 'custAddress', label: 'Address' },
  { name: 'custEmail', label: 'Email' },
  { name: 'custAltEmail', label: 'Alternate Email' },
  { name: 'custAadhar', label: 'Adhar Number' },
  { name: 'custPan', label: 'PAN Number' },
  { name: 'isActive', label: 'Status' },
];

export const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [dataKey, setDataKey] = useState(0);

  // New state variables for dynamic summary values
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [activeCustomers, setActiveCustomers] = useState(0);

  const handleAddCustomerClick = () => {
    setModalMode('add');
    setShowModal(true);
  };

  const handleEditCustomerClick = (customer) => {
    setModalMode('edit');
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalMode('add');
    setShowModal(false);
    setSelectedCustomer(null);
  };

  const baseUrl = process.env.REACT_APP_API_URL;

  const updateSummaryValues = (data) => {
    const customers = data.customers || [];

    const total = customers.length;
    const active = customers.filter(customer => customer.isActive).length;

    setTotalCustomers(total);
    setActiveCustomers(active);
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${baseUrl}/client/1/customer`;
  
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
  
        console.log('Fetched data:', data);
  
        // Analyze the structure of the API response
        if (data && data.customers) {
          updateSummaryValues(data);
        } else {
          console.error('Invalid data structure returned from the API:', data);
        }
      } catch (error) {
        console.error('Error fetching customer data:', error.message);
      }
    };
  
    fetchData();
  }, [dataKey, baseUrl]);

  const handleSaveCustomer = async (formData, mode) => {
    const apiUrl = `${baseUrl}/client/1/customer`;

    const customerId = formData.custId || '';
    const httpMethod = mode === 'add' ? 'post' : 'put';

    try {
      const response = await axios[httpMethod](`${apiUrl}/${mode === 'edit' ? `update/${customerId}` : 'add'}`, formData);
      setDataKey((prevKey) => prevKey + 1);
      alert(`Customer ${mode === 'add' ? 'added' : 'updated'} successfully: ${response.data}`);
    } catch (error) {
      handleApiError(error, mode);
    }
  };

  const handleDeleteCustomer = async (customerId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this customer?');
    if (!isConfirmed) return;

    try {
      await axios.delete(`${baseUrl}/client/1/customer/delete/${customerId}`);
      setDataKey((prevKey) => prevKey + 1);
      alert('Customer deleted successfully');
    } catch (error) {
      handleApiError(error, 'delete');
    }
  };

  const handleApiError = (error, operation) => {
    if (error.response) {
      console.error(`Server responded with error status ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      console.error('No response received from the server');
    } else {
      console.error(`Error ${operation === 'add' ? 'adding' : operation === 'edit' ? 'updating' : 'deleting'} customer: ${error.message}`);
    }

    alert(`Error ${operation === 'add' ? 'adding' : operation === 'edit' ? 'updating' : 'deleting'} customer. Please try again.`);
  };

  return (
    <Layout>
      <div className='customer-container'>
        <div className='card border-0'>
          <div className='card-header'>
            <h5 className='card-title'>Customer Summary</h5>
          </div>
        </div>
        <div className='card-summary d-flex justify-content-left'>
          <div className='summary-box'>
            <h4 className='summary-title'>Total Customer</h4>
            <h4 className='summary-value'>{totalCustomers}</h4>
          </div>
          <div className='summary-box'>
            <h4 className='summary-title'>Active Customer</h4>
            <h4 className='summary-value'>{activeCustomers}</h4>
          </div>
          <div className="add-btn-container">
            <button className="add-btn" onClick={handleAddCustomerClick}>
              + Add Customer
            </button>
          </div>
        </div>

        <FetchData
          key={dataKey}
          onEditClick={handleEditCustomerClick}
          onDeleteClick={handleDeleteCustomer}
        />

        <AddCustomerModal
          showModal={showModal}
          onClose={handleCloseModal}
          fields={customerFormFields}
          mode={modalMode}
          onSave={handleSaveCustomer}
          customerData={selectedCustomer}
        />
      </div>
    </Layout>
  );
};

export default Customer;
