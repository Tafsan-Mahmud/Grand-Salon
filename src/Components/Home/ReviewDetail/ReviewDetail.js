import React from 'react';
import './ReviewDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faStarHalf } from '@fortawesome/free-solid-svg-icons';

const ReviewDetail = (props) => {
    const { name, imageUrl, description, CnameDesignation } = props.review
    return (
        <div className="pb-3 mgn">
            <div className=" mt-2 d-flex justify-content-center my-card">
                <div >
                    <div className="d-flex ">
                        <img className="review-img" style={{ width: '80px', height:'80px', marginRight: '15px' }} src={imageUrl} alt="" />
                        <div className="spacing-text-review">
                            <h4 style={{ color: '#e6e4e4' }} className="">{name}</h4>
                            <h5 style={{ color: '#bc9355' }}>{CnameDesignation}</h5>
                        </div>
                    </div>
                    <div className=" mt-4 p-and-star">
                        <p className="text-color-p">{description}</p>
                    </div>
                    <h5 className="star">
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalf} /> 
                    </h5>
                </div>
            </div>
           
        </div>
    );
};

export default ReviewDetail;