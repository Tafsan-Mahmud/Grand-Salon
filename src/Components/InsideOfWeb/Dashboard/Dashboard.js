import React, { useState } from 'react';
import './Dashboard.css';

import Sidebar from '../Sidebar/Sidebar';



const Dashboard = () => {

   
    return (
        <section className="input-btn-psin admin-section container-fluid">
        <div className="row">
            <Sidebar></Sidebar>
            <div className="filed col-9 d-flex align-items-center justify-content-center">
                <h3 style={{ color: '#e6e4e4' }}>This Is Dashboard Click Link What You Need</h3>
            </div>
        </div>
    </section>
    );
};

export default Dashboard;