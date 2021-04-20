import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContex } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddAdmin.css';

const AddAdmin = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = ` https://quiet-stream-56783.herokuapp.com/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                alert('New Admin Has Been Created')
            })
    };
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="filed col-9">
                        <h5 className="pt-4 text-center" style={{ color: '#e6e4e4', }}> Add a Admin</h5>
                        <div className="d-flex justify-content-center">
                            <div className="container-lg">
                                <form className="row d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="review-upimg col-8">
                                        <h6 style={{ color: '#d8d8d8' }}>Add Email For Make Admin </h6>
                                        <input className="form-control" name="email" ref={register} placeholder="enter only email" required />

                                        <div className="btn-submit-review d-flex justify-content-center pt-3 ">
                                            <input className="btn btn-color-home" type="submit" value="Make Admin" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddAdmin;