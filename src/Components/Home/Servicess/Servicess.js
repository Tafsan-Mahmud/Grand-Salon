import React, { useEffect, useState } from 'react';
import './Servicess.css';
import img1 from './bld-done.png';
import img2 from './ck-done.png';
import img3 from './dryer-done.png';
import img4 from './face-clean.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail'

const Servicess = () => {

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getdata')
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })
    }, []);

    return (
        <section className=" content-service-bg pt-5  pb-5">
            <div className="text-center mb-5">
                <h1 style={{ color: '#e6e4e4' }}>POPULAR SERVICES</h1>
                <p className="text-color-p">
                    A wide range of male grooming services under one roof
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 grd mt-5 ">
                    {
                        serviceData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Servicess;