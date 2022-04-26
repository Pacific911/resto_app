import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import '../assets/styles/admin.css';

function admin() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>Welcome Admin!</h1>
      </div>
    </div>
  );
}

export default admin;
