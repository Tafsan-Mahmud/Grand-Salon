import React from 'react';
import './ReviewDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faStarHalf } from '@fortawesome/free-solid-svg-icons';

const ReviewDetail = (props) => {
    const { name, img, description, address } = props.review
    return (
        <div className="pb-3">
            <div className="m-3 mt-2 d-flex justify-content-center my-card">
                <div >
                    <div className="d-flex  ">
                        <img className="review-img" style={{ width: '90px', marginRight: '15px' }} src={img} alt="" />
                        <div className="spacing-text-review">
                            <h4 style={{ color: '#e6e4e4' }} className="">{name}</h4>
                            <h5 style={{ color: '#bc9355' }}>{address}</h5>
                        </div>
                    </div>
                    <div className=" mt-4 p-and-star">
                        <p className="text-color-p">{description}</p>
                    </div>
                    <h5 className="star">
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalf} /> 
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;