import React from 'react';
import axios from 'axios';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

const DynamicTable = ({ data, columns, onEditClick }) => {
  return (
    <div className='table-container'>
      <table className='customer-table'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
              <td>
                <button className='edit-icon' onClick={() => onEditClick(row)}><CiEdit /></button>
                <button className='del-icon'> <RiDeleteBin2Line /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default DynamicTable;