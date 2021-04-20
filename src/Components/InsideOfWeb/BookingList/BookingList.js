import React, { useContext, useEffect, useState } from 'react';
import { UserContex } from '../../../App';
import BookingListDetail from '../BookingListDetail/BookingListDetail';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const [bookingData, setBookingData] = useState([]);
    console.log(bookingData);
    useEffect(() => {
        fetch(' https://quiet-stream-56783.herokuapp.com/bookingDetails?email=' + logedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookingData(data)
            })
    }, [])
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="filed col-9">
                        <h5 className="pt-4 text-center" style={{ color: '#e6e4e4', }}>{logedInUser.name} Your Booking List</h5>
                        <div className="d-flex justify-content-center">

                            <div className="grid-for-bookingDetails">

                                {
                                    bookingData.map(userData => <BookingListDetail userData={userData}></BookingListDetail>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingList;