import React, { useContext, useEffect, useState } from 'react';
import './Boooking.css';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import { UserContex } from '../../../App';
import { useParams } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Booking = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const [uniqeService, setUniqeService] = useState({})
    const {name , imageUrl , description , price }= uniqeService;
    const bookingData = {...logedInUser , serviceName:name , serviceImg:imageUrl , description , price}
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setUniqeService(data)
            })
    }, [id])



    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        // const eventData = {
        //     name: data.name,
        //     price: data.price,
        //     description: data.description,
        // }
    }
    return (
        <section className="admin-section container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="filed col-9">
                    <h3 style={{ color: '#e6e4e4' }}>Booking</h3>
                    <div className="input-filed container-lg">
                        <form className="row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="booking-user-input col-9">
                                <input className="form-control" name="name" ref={register} placeholder="type service name" required defaultValue={logedInUser.name} />
                                <input className="form-control" name="email" ref={register} placeholder="type service price" required defaultValue={logedInUser.email} />
                                <input className="form-control" name="service" ref={register} placeholder="type service description" required defaultValue={uniqeService.name} />
                                {/* <input className="btn btn-color-home" type="submit" value="Save To Database" /> */}
                            </div>
                        </form>
                        <div className="payment-section w-75">
                            <ProcessPayment bookingData={bookingData}></ProcessPayment>
                        </div>
                    </div>
                    <h5 className="mt-3 text-center" style={{ color: '#e6e4e4' }}>Your Service  charged Will Be : {uniqeService.price}</h5>
                </div>
            </div>
        </section>
    );
};

export default Booking;