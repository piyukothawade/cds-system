// Vehicle.jsx
// Import necessary dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FetchVehicleData from '../component/FetchVehicleData';
import Layout from '../component/Layout';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const Vehicle = () => {
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [editedVehicleId, setEditedVehicleId] = useState(null);
  const [formData, setFormData] = useState({
    // Your initial form data here
  });

  

  const handleAddOrEditVehicleClick = (vehicleId = null) => {
    if (vehicleId) {
      setEditMode(true);
      setEditedVehicleId(vehicleId);
    } else {
      setEditMode(false);
      setEditedVehicleId(null);
    }
  
    navigate('/addVehicle');
    console.log('Navigation happened');
  };
  

  useEffect(() => {
    if (editMode && editedVehicleId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/client/1/vehicle/update/${editedVehicleId}`);
          const vehicleData = response.data.data.vehicles[0];
  
          setFormData({
            ownerName: vehicleData.ownerName,
            registrationNumber: vehicleData.registrationNumber,
            chassisNumber: vehicleData.chassisNumber,
            // ... (other fields)
          });
        } catch (error) {
          console.error('Error fetching vehicle data:', error.message);
        }
      };
  
      fetchData();
    } else {
      // Reset the form data when not in edit mode
      setFormData({
        ownerName: '',
        registrationNumber: '',
        chassisNumber: '',
        // ... (other fields)
      });
    }
  }, [editMode, editedVehicleId]);
  

  const handleEditVehicle = (editedVehicle) => {
    console.log('Vehicle edited:', editedVehicle);
    // Implement additional logic if needed
  };

  return (
    <Layout>
    <div className='customer-container'>
      <div className='card border-0'>
        <div className='card-header'>
          <h5 className='card-title'>Vehicle Summary</h5>
        </div>
      </div>
      <div className='card-summary d-flex justify-content-left'>
        <div className='summary-box'>
          <h4 className='summary-title'>Total Vehicle</h4>
          <h4 className='summary-value'>90</h4>
        </div>
        <div className='summary-box'>
          <h4 className='summary-title'>Vehicle Sold</h4>
          <h4 className='summary-value'>54</h4>
        </div>
        <div className="add-btn-container">
        <button className="add-btn" onClick={() => handleAddOrEditVehicleClick()}>
          + Add Vehicle
        </button>
      </div>
      </div>

      {/* Use FetchVehicleData to dynamically fetch and display vehicle data */}
      <FetchVehicleData onDataFetched={(data) => console.log('Vehicle data fetched:', data)} onEditClick={handleAddOrEditVehicleClick} />
      </div>
    </Layout>
  );
};

export default Vehicle;
