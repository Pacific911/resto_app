import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import Admin from './Admin';
import FoodType from './type/new';
import Viewfoodtypes from './type/all';
import '../assets/styles/sidebar.css';
import '../components/Sidebar/Sidebar';

library.add(fab, fas);

export default function App() {
  return (
    <Router>
      <sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/type/new" element={<FoodType />} />
        <Route path="/type/all" element={<Viewfoodtypes />} />
      </Routes>
    </Router>
  );
}
