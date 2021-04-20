import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentMathod = ({ bookingData }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            handlePaymentProccessing(paymentMethod.id);
            console.log('[PaymentMethod]', paymentMethod);
        }
    };


    const {isSignIn, name, email, photo, serviceName, serviceImg, description, price} = bookingData;
    const status = "Pending";
    const handlePaymentProccessing = (id) => {
        fetch(' https://quiet-stream-56783.herokuapp.com/addbooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({isSignIn, name, email, photo, price, serviceName, serviceImg, description, paymentId:id , status})
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Congratulation sir Your Booking is placed')
                }
            })
    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className="payment-btn" type="submit" disabled={!stripe}>
                Pay
      </button>
        </form>
    );
};
export default PaymentMathod;