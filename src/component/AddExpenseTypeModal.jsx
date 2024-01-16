// AddExpenseTypeModal.js

import React, { useState, useEffect } from 'react';

const AddExpenseTypeModal = ({ showModal, onClose, fields, mode, onSave, expenseTypeData }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize form data based on the mode and expense type data
    if (mode === 'edit' && expenseTypeData) {
      setFormData(expenseTypeData);
    } else {
      // Reset form data for 'add' mode
      setFormData({});
    }
  }, [mode, expenseTypeData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic based on mode and formData
    onSave(formData, mode);
    onClose();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{mode === 'edit' ? 'Edit' : 'Add'} Expense Type</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Your form for adding/editing an expense type goes here */}
            <form>
              {fields.map((field) => (
                <div key={field.name} className="form-group">
                  <label htmlFor={field.name}>{field.label}:</label>
                  <input
                    type={field.type || 'text'}
                    className="form-control"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseTypeModal;
