import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import CustomersListPage from '../pages/CustomersListPage';
import CustomerDetailsPage from '../pages/CustomerDetailsPage';
import AddCustomerPage from '../pages/AddCustomerPage';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginModal onClose={() => window.location.href = '/'} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/customers" element={<CustomersListPage />} />
      <Route path="/customer/:id" element={<CustomerDetailsPage />} />
      <Route path="/add-customer" element={<AddCustomerPage />} />
      <Route path="*" element={<Navigate to="/customers" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
