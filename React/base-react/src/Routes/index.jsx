import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/Page404';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
