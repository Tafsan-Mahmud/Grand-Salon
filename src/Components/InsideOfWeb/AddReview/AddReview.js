import React, { useContext, useState } from 'react';
import { UserContex } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const axios = require('axios').default;
    const [imageURL, setImageURL] = useState(null);
    const handleImgUpload = (event) => {
        alert('please wait a minute for uploading your photo otherwise your picture will not be seen in the review page ')
        const imageData = new FormData()
        imageData.set('key', '338a7d2633146965aa14730462081a12')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (res) {
                setImageURL(res.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            CnameDesignation: data.CnameDesignation,
            description: data.description,
            imageUrl: imageURL
        };
        console.log(eventData)
        const url = ` https://quiet-stream-56783.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                alert("Review uploaded")
            })
    };
    
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="filed col-9">
                        <h5 className="pt-4 text-center" style={{ color: '#e6e4e4', }}> Add a Review</h5>
                        <div className="d-flex justify-content-center">
                            <div className="container-lg">
                                <form className="row d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="review-upimg col-8">
                                        <h6 style={{ color: '#d8d8d8' }}>Your Name</h6>
                                        <input className="form-control" name="name" ref={register} placeholder="type name" required />
                                        <h6 style={{ color: '#d8d8d8' }}>Company's Name Designation</h6>
                                        <input className="form-control " name="CnameDesignation" ref={register} placeholder="type company's name designation" required />
                                        <h6 style={{ color: '#d8d8d8' }}>Description</h6>
                                        <textarea class="form-control" ref={register} name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <h6 style={{ color: '#d8d8d8' }}>choose a photo</h6>
                                        <input name="image_URL" id="file" required type="file" accept="image/*" onChange={handleImgUpload} />
                                        <label htmlFor="file"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Your Photo</label>
                                        <div className="btn-submit-review d-flex justify-content-center pt-3 ">
                                            <input className="btn btn-color-home" type="submit" value="Submit Review" />
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

export default AddReview;