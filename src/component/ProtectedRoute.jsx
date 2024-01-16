// ProtectedRoute.js
import React, { useEffect } from 'react';
import { Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeUser } from '../Store/userReducer';

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  const user = useSelector(state => state.user)
  
  if(!user){
    const localUser = localStorage.getItem('user');
  
    if(!localUser)
      navigate('/signin');
  }

  return <Outlet>{element}</Outlet>
  /*
  return isLoggedIn ? (
    <Route element={<Outlet>{element}</Outlet>} />
  ) : (
    <Navigate to="/signin" />
  );
  */
};

export default ProtectedRoute;
