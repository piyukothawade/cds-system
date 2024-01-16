import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../component/Layout';

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    registrationNumber: "",
    chassisNumber: "",
    engineNumber: "",
    dateOfRegistration: "",
    make: "",
    model: "",
    yearOfManufacture: "",
    type: "",
    fuel: "",
    weight: "",
    color: "",
    seatingCapacity: "",
    engineHorsePower: "",
    previousOwner: "",
    fitnessCertificate: "",
    insuranceDetails: "",
    pucDetails: "",
    hypothecationDetails: "",
    taxDetails: "",
    transmission: "",
    photos: "",
  });

  const baseUrl = process.env.REACT_APP_API_URL;

  const [isFitnessModalVisible, setFitnessModalVisible] = useState(false);
  const [isInsuranceModalVisible, setInsuranceModalVisible] = useState(false);
  const [isPUCModalVisible, setPUCModalVisible] = useState(false);
  const [isHypothecationLoanModalVisible, setHypothecationLoanModalVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });

    // Show/hide modals based on the checkbox value
    switch (name) {
      case 'isFitnessCertificateAvailable':
        setFitnessModalVisible(checked);
        break;
      case 'isInsuranceAvailable':
        setInsuranceModalVisible(checked);
        break;
      case 'isPUCAvailable':
        setPUCModalVisible(checked);
        break;
      case 'isHypothecationLoanAvailable':
        setHypothecationLoanModalVisible(checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to save the vehicle data
      const response = await axios.post(`${baseUrl}/client/1/vehicle/add`, formData);
      console.log('Vehicle data saved:', response.data);

      // Reset the form after successful submission
      setFormData({
        ownerName: '',
        registrationNumber: '',
        chassisNumber: '',
        engineNumber: '',
        dateOfRegistration: '',
        make: '',
        model: '',
        yearOfManufacture: '',
        type: '',
        fuel: '',
        weight: '',
        color: '',
        seatingCapacity: '',
        engineHorsePower: '',
        previousOwner: '',
        fitnessCertificate: '',
        insuranceDetails: '',
        pucDetails: '',
        hypothecationDetails: '',
        taxDetails: '',
        transmission: '',
        photos: '',
      });

      // Close any open modals
      setFitnessModalVisible(false);
      setInsuranceModalVisible(false);
      setPUCModalVisible(false);
      setHypothecationLoanModalVisible(false);

      // Additional logic if needed
    } catch (error) {
      console.error('Error saving vehicle data:', error.message);
    }
  };

  const handleFitnessModalSubmit = () => {
    // Logic for fitness modal submission
    console.log('Fitness Modal submitted');
    // Close the modal after submission
    setFitnessModalVisible(false);
  };

  const handleInsuranceModalSubmit = () => {
    // Logic for insurance modal submission
    console.log('Insurance Modal submitted');
    // Close the modal after submission
    setInsuranceModalVisible(false);
  };

  const handlePUCModalSubmit = () => {
    // Logic for PUC modal submission
    console.log('PUC Modal submitted');
    // Close the modal after submission
    setPUCModalVisible(false);
  };

  const handleHypothecationLoanModalSubmit = () => {
    // Logic for Hypothecation/Loan modal submission
    console.log('Hypothecation/Loan Modal submitted');
    // Close the modal after submission
    setHypothecationLoanModalVisible(false);
  };


  return (
    <Layout>
    <div>
      <h3 className="purchase-entry">Add Vehicle</h3>
      <form className="roles-form" id="vehicleForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="ownersName">
              Owner's Name:
            </label>
            <input
              className="roles-input"
              type="text"
              id="ownersName"
              name="ownersName"
              value={formData.ownerName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="registrationNumber">
              Registration Number:
            </label>
            <input
              className="roles-input"
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* ... (rest of the form) ... */}

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="DateOdRegistration">
              Date of Registration:
            </label>
            <input
              className="roles-input"
              type="date"
              id="DateOdRegistration"
              name="DateOdRegistration"
              value={formData.dateOfRegistration}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="RcNumber">
              RC Number:
            </label>
            <input
              className="roles-input"
              type="text"
              id="RcNumber"
              name="RcNumber"
              value={formData.RcNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="chassisNumber">
              Chassis Number:
            </label>
            <input
              className="roles-input"
              type="text"
              id="chassisNumber"
              name="chassisNumber"
              value={formData.chassisNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="engineNumber">
              Engine Number:
            </label>
            <input
              className="roles-input"
              type="text"
              id="engineNumber"
              name="engineNumber"
              value={formData.engineNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="make">
              Make:
            </label>
            <input
              className="roles-input"
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="model">
              Model:
            </label>
            <input
              className="roles-input"
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              required
            />
          </div>
          </div>

          <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="typeOfVehicle">
              Type of Vehicle:
            </label>
            <input
              className="roles-input"
              type="text"
              id="typeOfVehicle"
              name="typeOfVehicle"
              value={formData.type}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="engineHorsePower">
              Horse Power:
            </label>
            <input
              className="roles-input"
              type="text"
              id="engineHorsePower"
              name="engineHorsePower"
              value={formData.engineHorsePower}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="grossVehicleweight">
              Gross Vehicle Weight:
            </label>
            <input
              className="roles-input"
              type="text"
              id="grossVehicleweight"
              name="grossVehicleweight"
              value={formData.weight}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="color">
              Color:
            </label>
            <input
              className="roles-input"
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="taxDetails">
              Tax Details:
            </label>
            <input
              className="roles-input"
              type="text"
              id="taxDetails"
              name="taxDetails"
              value={formData.taxDetails}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="engineCapacity">
              Engine Capacity:
            </label>
            <input
              className="roles-input"
              type="text"
              id="engineCapacity"
              name="engineCapacity"
              value={formData.engineCapacity}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="transmission">
              Transmission:
            </label>
            <input
              className="roles-input"
              type="text"
              id="transmission"
              name="transmission"
              value={formData.transmission}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="preowner">
              Previous Owner:
            </label>
            <input
              className="roles-input"
              type="text"
              id="preowner"
              name="preowner"
              value={formData.previousOwner}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
  <div className="col">
    <label className="roles-label" htmlFor="fuelType">
      Fuel Type:
    </label>
    <select
      className="roles-input"
      id="fuelType"
      name="fuelType"
      value={formData.fuel}
      onChange={handleInputChange}
      required
    >
      <option value="">Select Fuel Type</option>
      <option value="Petrol">Petrol</option>
      <option value="Diesel">Diesel</option>
      <option value="Electric">Electric</option>
      {/* Add more options as needed */}
    </select>
  </div>

  <div className="col">
    <label className="roles-label" htmlFor="seatingCapacity">
      Seating Capacity:
    </label>
    <select
      className="roles-input"
      id="seatingCapacity"
      name="seatingCapacity"
      value={formData.seatingCapacity}
      onChange={handleInputChange}
      required
    >
      <option value="">Select Seating Capacity</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="7">7</option>
      {/* Add more options as needed */}
    </select>
  </div>
</div>

<div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="isFitnessCertificateAvailable">
              Is Fitness Certificate Available:
            </label>
            <input
              className="roles-checkbox"
              type="checkbox"
              id="isFitnessCertificateAvailable"
              name="isFitnessCertificateAvailable"
              checked={formData.fitnessCertificate}
              onChange={handleInputChange}
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="isInsuranceAvailable">
              Is Insurance Available:
            </label>
            <input
              className="roles-checkbox"
              type="checkbox"
              id="isInsuranceAvailable"
              name="isInsuranceAvailable"
              checked={formData.insuranceDetails}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="roles-label" htmlFor="isPUCAvailable">
              Is PUC Available:
            </label>
            <input
              className="roles-checkbox"
              type="checkbox"
              id="isPUCAvailable"
              name="isPUCAvailable"
              checked={formData.pucDetails}
              onChange={handleInputChange}
            />
          </div>

          <div className="col">
            <label className="roles-label" htmlFor="isHypothecationLoanAvailable">
              Is Hypothecation/Loan Details Available:
            </label>
            <input
              className="roles-checkbox"
              type="checkbox"
              id="isHypothecationLoanAvailable"
              name="isHypothecationLoanAvailable"
              checked={formData.hypothecationDetails}
              onChange={handleInputChange}
            />
          </div>
        </div>

        
        {/* Fitness Certificate Modal */}
        <div className="modal-body">
            {isFitnessModalVisible && (
              <div className="modal-dep" id="fitnessModal">
                <div className="content-modal">
                  <div>
                    <label htmlFor="fitnessFormField1">End Date:</label>
                    <input type="date" id="fitnessFormField1" name="fitnessFormField1" />
                  </div>

                  <div>
                    <label htmlFor="fitnessFormField2">Authority:</label>
                    <input type="text" id="fitnessFormField2" name="fitnessFormField2" />
                  </div>

                  <button id="fitnessModalSubmitButton" type="button" onClick={handleFitnessModalSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Insurance Modal */}
          {isInsuranceModalVisible && (
            <div className="modal-dep" id="insuranceModal">
              <div className="content-modal">
                {/* ... (existing insurance modal content) ... */}
                <button id="insuranceModalSubmitButton" type="button" onClick={handleInsuranceModalSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* PUC Modal */}
          {isPUCModalVisible && (
            <div className="modal-dep" id="PUCModal">
              <div className="content-modal">
                {/* ... (existing PUC modal content) ... */}
                <button id="PUCModalSubmitButton" type="button" onClick={handlePUCModalSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Hypothecation/Loan Modal */}
          {isHypothecationLoanModalVisible && (
            <div className="modal-dep" id="hypothecationLoanModal">
              <div className="content-modal">
                {/* ... (existing hypothecation/loan modal content) ... */}
                <button id="hypothecationLoanModalSubmitButton" type="button" onClick={handleHypothecationLoanModalSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* ... (rest of the form) ... */}

          <button className="roles-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};


export default AddVehicle;
