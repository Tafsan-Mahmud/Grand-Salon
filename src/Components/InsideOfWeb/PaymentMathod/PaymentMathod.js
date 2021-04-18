import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const PaymentMathod = ({ bookingData }) => {
    const [paymentId, setPaymentId] = useState({});
    const singleBookingData = {...bookingData ,paymentId:paymentId }
    console.log(singleBookingData);
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
            setPaymentId(paymentMethod)
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    const handlePaymentProccessing = () => {

        fetch('http://localhost:5000/addbooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(singleBookingData)
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
            <button onClick={handlePaymentProccessing} className="payment-btn" type="submit" disabled={!stripe}>
                Pay
      </button>
        </form>
    );
};
export default PaymentMathod; 