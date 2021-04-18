import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentMathod from '../PaymentMathod/PaymentMathod';


const stripePromise = loadStripe('pk_test_51If5fJI7E0trSEhU2Sg6rHfPWFcIRP0yoS3IHyg4oGMWzx24PmTQMYCihxfoX4YCbWGFYGkNRSak3tpdOYoQzmPQ00Af6wRjfe');
const ProcessPayment = ({bookingData}) => {
   
    return (
        <Elements stripe={stripePromise}>
            <PaymentMathod bookingData={bookingData}></PaymentMathod>
        </Elements>
    );
};

export default ProcessPayment;