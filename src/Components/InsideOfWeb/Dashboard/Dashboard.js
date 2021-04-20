import React, { useState } from 'react';
import './Dashboard.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faTasks, faPlus, faEdit, faHome, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';



const Dashboard = () => {

    // const axios = require('axios').default;
    // const [imageURL, setImageURL] = useState(null);
    // const handleImgUpload = (event) => {
    //     const imageData = new FormData()
    //     imageData.set('key', '338a7d2633146965aa14730462081a12')
    //     imageData.append('image', event.target.files[0]);
    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //         .then(function (res) {
    //             setImageURL(res.data.data.display_url)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => {
    //     const eventData = {
    //         name: data.name,
    //         price: data.price,
    //         description: data.description,
    //         imageUrl: imageURL
    //     };
    //     console.log(eventData)
    //     const url = ` https://quiet-stream-56783.herokuapp.com/addService`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(eventData)
    //     })
    //         .then(res => {
    //             alert("Product data uploaded")
    //         })
    // };
    return (
        <div>
            <h1>faka moydan</h1>
        </div>
        //      <section className="admin-section container-fluid">
        //          <div className="row">
        //             <div className="left-side-bar col-3">
        //                 <h2 style={{color:'#bc9355'}}><FontAwesomeIcon icon={faAnchor} /> Grand Salon</h2>
        //                 <div className="add-section-sizing">
        //                     <Link class="nav-link home-path " to="/home"><h5 ><FontAwesomeIcon icon={faHome} /> Back to Home</h5></Link>
        //                     <Link class="nav-link home-path " to="/deletProduct"><h5 ><FontAwesomeIcon icon={faTasks} /> Manage Service</h5></Link>
        //                     <Link class="nav-link home-path " to="/deletProduct"><h5 ><FontAwesomeIcon icon={faTasks} /> Make Admin </h5></Link>
        //                     <Link class="nav-link home-path " to="/admin"><h5 ><FontAwesomeIcon icon={faPlus} /> Add Service</h5></Link>
        //                     <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Booking</h5></Link>
        //                     <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Booking List</h5></Link>
        //                     <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Review</h5></Link>
        //                 </div>
        //             </div>
        //             <div className="filed col-9"> 
        //             <AddService></AddService>
        //                 <h3 style={{ color: '#e6e4e4' }}>Add Service</h3>
        //                 <div className="input-filed container-lg">
        //                     <form className="d-flex row" onSubmit={handleSubmit(onSubmit)}>
        //                         <div className="name-price col-6">
        //                             <h6 style={{ color: '#d8d8d8' }}>Product Name</h6>
        //                             <input className="form-control" name="name" ref={register} placeholder="type service name" required />

        //                             <h6 style={{ color: '#d8d8d8' }}>Add Price</h6>
        //                             <input className="form-control" name="price" ref={register} placeholder="type service price" required />
        //                         </div>
        //                         <div className="description-upimg col-6">
        //                             <h6 style={{ color: '#d8d8d8' }}>Description</h6>
        //                             <input className="form-control" name="description" ref={register} placeholder="type service description" required />
        //                             <h6 style={{ color: '#d8d8d8' }}>choose a photo</h6>
        //                             <input name="image_URL" id="file" required type="file" accept="image/*" onChange={handleImgUpload} />
        //                             <label htmlFor="file"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
        //                         </div>
        //                         <input className="btn btn-color-home" type="submit" value="Save To Database" />
        //                     </form>
        //                 </div>
        //             </div>
        //         </div> 
        //  </section> 
    );
};

export default Dashboard;