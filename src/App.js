// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signin} from './auth/Login';
import Signup from '../src/auth/Signup'
import ForgotPass from '../src/auth/ForgotPass'
import Home from './pages/Home';
import ProtectedRoute   from './component/ProtectedRoute';
import AuthenticatedLayout from './component/AuthenticatedLayout';
import { useDispatch } from 'react-redux';
import { initializeUser } from './Store/userReducer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import { Dashboard } from './pages/Dashboard';
import Customer from './pages/Customer';
import Vehicle from './pages/Vehicle';
import AddVehicle from './pages/AddVehicel';
import ExpenseType from './pages/ExpenseType';
const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initializeUser());
  }, [dispatch]);


  return (
    <div >
    <Router>
      <Routes>
        {/* Unauthenticated routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPass/>} />
        {/* Authenticated routes */}
        {/* <Route path="/" element={<ProtectedRoute element={<AuthenticatedLayout />} />}>
          <Route index element={<Home />} />
        </Route> */}

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/vehicle" element={<Vehicle/>} />
          <Route path='/addVehicle' element={<AddVehicle/>}></Route>
          <Route path='/expenseType' element={<ExpenseType/>}></Route>
        </Route>

      </Routes>
      
    </Router>
    </div>
  );
};

export default App;
