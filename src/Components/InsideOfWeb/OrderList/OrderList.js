import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';

const OrderList = () => {
    const [allBookinsData, setAllBookinsData] = useState([])
    useEffect(() => {
        fetch('https://quiet-stream-56783.herokuapp.com/allBooking')
            .then(res => res.json())
            .then(data => {
                setAllBookinsData(data);
            })
    }, [])
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="filed col-9">
                        <h5 className="pt-4 text-center" style={{ color: '#e6e4e4', }}>All Bookings</h5>
                        <div className="d-flex justify-content-center">
                            <div className="container-lg">
                                <table class="table order-table-style table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-color-p" scope="col">Sr No</th>
                                            <th className="text-color-p" scope="col">Name</th>
                                            <th className="text-color-p" scope="col">Email</th>
                                            <th className="text-color-p" scope="col">Service Name</th>
                                            <th className="text-color-p" scope="col">Payment Id</th>
                                            <th className="text-color-p" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="style-something">

                                        {
                                            allBookinsData.map((data, index) =>
                                                <tr>
                                                    <td  className="text-color-p">{index + 1}</td>
                                                    <td  className="text-color-p">{data.name}</td>
                                                    <td  className="text-color-p">{data.email}</td>
                                                    <td  className="text-color-p">{data.serviceName}</td>
                                                    <td  className="text-color-p">{data.paymentId}</td>
                                                    <td  className="text-color-p"><button className="status-btn">Pending</button></td>
                                                </tr>

                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderList;