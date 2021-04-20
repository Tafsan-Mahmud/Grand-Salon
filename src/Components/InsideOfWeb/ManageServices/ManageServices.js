import React, { useEffect, useState } from 'react';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css';

const ManageServices = () => {

    const [importServiceData, setImportServiceData] = useState([]);

    useEffect(() => {
        fetch('https://quiet-stream-56783.herokuapp.com/getServiceData')
            .then(res => res.json())
            .then(data => {
                setImportServiceData(data);
            })
    }, [importServiceData])
   
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="filed col-9">
                        <h5 className="pt-4 text-center" style={{ color: '#e6e4e4', }}>Delete Service If You Want</h5>
                        <div className="d-flex justify-content-center">

                            <div className="grid-for-bookingDetails">

                                {
                                    importServiceData.map(serviceData => <ManageServiceDetail serviceData={serviceData}> </ManageServiceDetail>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageServices;