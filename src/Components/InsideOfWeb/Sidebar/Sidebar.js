import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faTasks, faPlus, faEdit, faHome} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="left-side-bar col-3">
            <h2 style={{ color: '#bc9355' }}><FontAwesomeIcon icon={faAnchor} /> Grand Salon</h2>
            <div className="add-section-sizing">
                <Link class="nav-link home-path " to="/home"><h5 ><FontAwesomeIcon icon={faHome} /> Back to Home</h5></Link>
                <Link class="nav-link home-path " to="/deletProduct"><h5 ><FontAwesomeIcon icon={faTasks} /> Manage Service</h5></Link>
                <Link class="nav-link home-path " to="/deletProduct"><h5 ><FontAwesomeIcon icon={faTasks} /> Make Admin </h5></Link>
                <Link class="nav-link home-path " to="/admin"><h5 ><FontAwesomeIcon icon={faPlus} /> Add Service</h5></Link>
                <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Booking</h5></Link>
                <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Booking List</h5></Link>
                <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Review</h5></Link>
            </div>
        </div>
    );
};

export default Sidebar;