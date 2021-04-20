import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const ManageServiceDetail = (props) => {
    const { name, price, description, imageUrl, _id } = props.serviceData

    const handleServiceDelete = (id) => {

        fetch(`https://quiet-stream-56783.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Delete Successfull')
                }
            })
    }

    return (
        <div>
            <div className="bookinglist-card">
                <div className="d-flex img-and-status justify-content-between">
                    <img className="bookinglist-img" src={imageUrl} alt="" />
                    <Button className="status-btn"  onClick={() => handleServiceDelete(_id)} variant="contained" style={{backgroundColor:'#b50023e3' , color:'#ffff'}}>Delete</Button>
                </div>
                <div className="name-description-price pt-3">
                    <h5 style={{ color: '#e6e4e4' }}>{name}</h5>
                    <h6 style={{ color: '#bc9355' }}>$ {price}</h6>
                    <p className="text-color-p ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceDetail;