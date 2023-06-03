import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import ProductType from '../pages/ProductType';
import ProductTypeOption from '../pages/ProductTypeOptions';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:type" element={<ProductType />} />
      <Route path="/:type/:option" element={<ProductTypeOption />} />
    </Routes>
  );
};

export default Routers;
