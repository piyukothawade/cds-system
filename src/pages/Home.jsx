// Home.js
import React from 'react';
import Layout from '../component/Layout';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Store/userReducer';
import { Dashboard } from './Dashboard';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logoutUser());
  // };

  return (
    <Layout>
      <Dashboard />
      {/* <button onClick={handleLogout}>Logout</button> */}
    </Layout>
  );
};

export default Home;
