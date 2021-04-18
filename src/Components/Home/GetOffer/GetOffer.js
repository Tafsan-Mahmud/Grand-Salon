import React from 'react';
import './GetOffer.css';
import haircut1 from './696x795.jpg';
import haircut2 from './jhef.jpg';

const GetOffer = () => {
    return (
        <section className="offerBg">
            <div className="container bg-text-or-img">
                <div className="row  d-flex justify-content-center">
                    <div className="col-md-7">
                        <h1  style={{ color: '#e6e4e4' }} >GET 25% OFF YOUR FIRST MENS HAIRCUT.</h1>
                        <p className="text-color-p">You can ask for a first visit voucher.The voucher is valid at any of our salons. The 25% discount only applies to a mens haircut with a senior stylist.</p>
                        <button className="btn   btn-color-home mt-3">Book Now</button>
                    </div>
                    <div className="col-md-3 ">
                        <img className="get-offre-img positioning1" src={haircut1} alt=""/>
                        <img className="get-offre-img positioning2" src={haircut2} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetOffer;