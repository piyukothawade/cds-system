// FetchVehicleData.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

const baseUrl = process.env.REACT_APP_API_URL;

const FetchVehicleData = ({ onDataFetched, onEditClick }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/vehicles`);
        const responseData = response.data.data || {};
        
        // Ensure that the "vehicles" key is present in responseData
        const vehicles = responseData.vehicles || [];
  
        setData(vehicles);
        setIsLoading(false);
        onDataFetched(vehicles);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [onDataFetched]);
  
  const handleDeleteClick = async (vehicleId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this vehicle?');
    if (!isConfirmed) return;

    try {
      await axios.delete(`${baseUrl}/client/1/vehicle/delete/${vehicleId}`);
      setData((prevData) => prevData.filter((vehicle) => vehicle.vehicleId !== vehicleId));
      alert('Vehicle deleted successfully');
    } catch (error) {
      console.error('Delete Error:', error);
      setError(error);
    }
  };

  const handleEditClick = (editedVehicle) => {
    onEditClick(editedVehicle);
  };

  return (
    <div className='table-container'>
      <div className='customer-table'>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching data: {error.message}</p>
        ) : Array.isArray(data) ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Owner's Name</th>
                <th>Registration Number</th>
                <th>Date of Registration</th>
                <th>Make</th>
                <th>Model</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.vehicleId}</td>
                  <td>{vehicle.ownerName}</td>
                  <td>{vehicle.registrationNumber}</td>
                  <td>{vehicle.dateOfRegistration}</td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.model}</td>
                  <td>
                    <button className='edit-icon' onClick={() => handleEditClick(vehicle)}>
                      <CiEdit />
                    </button>
                    <button className='del-icon' onClick={() => handleDeleteClick(vehicle.vehicleId)}>
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Data is not in the expected format.</p>
        )}
      </div>
    </div>
  );
};

export default FetchVehicleData;
