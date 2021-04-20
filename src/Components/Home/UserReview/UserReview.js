import React, { useEffect, useState } from 'react';
import './UserReview.css';
import pic1 from './user1.jpg';
import pic2 from './user2.png';
import pic3 from './user3.jpg';
import pic4 from './user4.jpg';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const UserReview = () => {

    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch(' https://quiet-stream-56783.herokuapp.com/getReviewData')
            .then(res => res.json())
            .then(data => {
                setReviewData(data)
            })
    }, []);

    return (

        <section className="review-rateing pt-5  pb-5">
            <div className="text-center mb-5">
                <h1 style={{ color: '#e6e4e4' }}>Customer Review & Rateing</h1>
                <h6 style={{ color: '#bc9355' }} className="mb-5"><span className="ms-2">L O R E M</span> <span className="ms-2">I P S U M</span> <span className="ms-2"> D O L O R </span> <span className="ms-2"> S I T</span> <span className="ms-2">A M E T </span> <span className="ms-2">C O N S  E C T E T U R</span>     <span className="ms-2">A D I P I S I C I N G . </span></h6>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 grid-review mt-5 ">
                    {
                        reviewData.map(review => <ReviewDetail review={review}></ReviewDetail>)
                    }
                </div>
            </div>
        </section>

    );
};

export default UserReview;