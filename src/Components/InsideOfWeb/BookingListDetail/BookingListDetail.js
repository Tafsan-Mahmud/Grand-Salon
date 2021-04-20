import React from 'react';
import './BookingListDetail.css';

const BookingListDetail = ({userData}) => {
    const {name, email, photo, price, serviceName, serviceImg, description, status, paymentId}=userData
    return (
        <div>
            <div className="bookinglist-card">
                <div className="d-flex img-and-status justify-content-between">
                    <img className="bookinglist-img" src={serviceImg} alt=""/>
                    <button className="status-btn-edit">{status}</button>
                </div>
                <div className="name-description-price pt-3">
                    <h5 style={{ color: '#e6e4e4' }}>{serviceName}</h5>
                    <h6 style={{color:'#bc9355'}}>$ {price}</h6>
                    <p className="text-color-p ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookingListDetail;