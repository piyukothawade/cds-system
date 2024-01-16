// Layout.js (New Component for common layout)
import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer';

const Layout = ({ children }) => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
