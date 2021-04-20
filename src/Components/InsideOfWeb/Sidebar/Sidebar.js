import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faTasks, faPlus, faEdit, faHome ,faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContex } from '../../../App';

const Sidebar = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch(' https://quiet-stream-56783.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: logedInUser.email })
        })
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
                setIsAdmin(data)
            });
    }, [])
    return (
        <div className="left-side-bar col-3">
            <h2 style={{ color: '#bc9355' }}><FontAwesomeIcon icon={faAnchor} /> Grand Salon</h2>
            <div className="add-section-sizing">
                <Link class="nav-link home-path " to="/home"><h5 ><FontAwesomeIcon icon={faHome} /> Back to Home</h5></Link>

                { isAdmin && <div>
                    <Link class="nav-link home-path " to="/manageService"><h5 ><FontAwesomeIcon icon={faTasks} /> Manage Service</h5></Link>

                    <Link class="nav-link home-path " to="/makeAdmin"><h5 ><FontAwesomeIcon icon={faUserAlt} /> Make Admin </h5></Link>

                    <Link class="nav-link home-path " to="/addServices"><h5 ><FontAwesomeIcon icon={faPlus} /> Add Service</h5></Link>

                    <Link class="nav-link home-path " to="/orderList"><h5 ><FontAwesomeIcon icon={faTasks} /> Total Order List</h5></Link>
                </div>}

                <Link class="nav-link home-path " to="/bookinglist"><h5 ><FontAwesomeIcon icon={faTasks} /> Booking List</h5></Link>

                <Link class="nav-link home-path " to="/addreview"><h5 ><FontAwesomeIcon icon={faEdit} /> Review</h5></Link>
            </div>
        </div>
    );
};

export default Sidebar;