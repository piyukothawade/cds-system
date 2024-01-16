// AuthenticatedLayout.js
import React from 'react';
import Header from './Header'; // Adjust the path based on your actual file structure
import Sidebar from './Sidebar'; // Adjust the path based on your actual file structure
import { Outlet } from 'react-router-dom';

const AuthenticatedLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AuthenticatedLayout;
