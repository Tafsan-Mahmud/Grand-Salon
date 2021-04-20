import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';

const OrderList = () => {
    const [allBookinsData, setAllBookinsData] = useState([])
    const loadData = () => {
        fetch('https://quiet-stream-56783.herokuapp.com/allBooking')
            .then(res => res.json())
            .then(data => {
                setAllBookinsData(data);
            })
    }
    useEffect(() => {

        loadData()

    }, [])


    // const [changeData, setChangeData] = useState([])
    const [singleStatus, setSingleStatus] = useState({})
    const statusEdit = (id) => {
        fetch(`https://quiet-stream-56783.herokuapp.com/editStatus/${id}`)
            .then(res => res.json())
            .then(result => {
                setSingleStatus(result)
            })
    }

    function updateing(id) {
        const status = document.getElementById('status').value
        fetch(`https://quiet-stream-56783.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status:status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('Edite Successfully Done please close the system')
                    loadData();
                }
            })
    }
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { };
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="filed col-9">
                        <h5 className="pt-4 text-center" style={{ color: '#e6e4e4', }}>All Bookings</h5>
                        <div className="d-flex justify-content-center">
                            <div className="container-lg">

                                <div id="vanish" >
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 style={{ color: '#14036d', fontWeight: '500' }} class="modal-title" id="staticBackdropLabel">Edit Status</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div id="update-formm" class="modal-body">
                                                    <form className="container update-input-filed" onSubmit={handleSubmit(onSubmit)}>
                                                        <input name="status" id="status" defaultValue={singleStatus.status} className="form-control" type='text' placeholder="enter status" ref={register} required />
                                                        <Button type="submit" onClick={() => updateing(singleStatus._id)} className="btn-buy mt-3" variant="contained" color="secondary"> <span style={{ marginLeft: '5px' }}>Save Status</span></Button>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>






                                <table class="table order-table-style table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-color-p" scope="col">Sr No</th>
                                            <th className="text-color-p" scope="col">Name</th>
                                            <th className="text-color-p" scope="col">Email</th>
                                            <th className="text-color-p" scope="col">Service Name</th>
                                            <th className="text-color-p" scope="col">Payment Id</th>
                                            <th className="text-color-p" scope="col">Change Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="style-something">

                                        {
                                            allBookinsData.map((data, index) =>
                                                <tr>
                                                    <td className="text-color-p">{index + 1}</td>
                                                    <td className="text-color-p">{data.name}</td>
                                                    <td className="text-color-p">{data.email}</td>
                                                    <td className="text-color-p">{data.serviceName}</td>
                                                    <td className="text-color-p">{data.paymentId}</td>
                                                    <td className="text-color-p"><button onClick={() => statusEdit(data._id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="status-btn-edit">{data.status}</button></td>
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