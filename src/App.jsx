import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import './App.css';
import EmailVerification from './components/EmailVerification.jsx';
import ResetPassword from './components/ResetPassword.jsx';
// import ConfirmPassword from './components/ConfirmPassword';
// import Navbar from './components/Navbar';
import VideoList from './components/VideoList.jsx';
import Login from './components/login.jsx';
import SignUp from './components/SignUp.jsx';
import Layout from './layout/Layout.jsx';
function App() {
 

  return (
    
   <Router>
      {/* <Navbar /> */}
      <Layout>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/videoList/:id" element={<VideoList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* <Route path="/confirm-password" element={<ConfirmPassword />} /> */}
      </Routes>
      </Layout>
      
    </Router>
  )
}

export default App
