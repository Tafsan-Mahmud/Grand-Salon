import React from 'react';
import './ContentHome.css';
import chair1 from './chair.jpg';
import chair2 from './chair2.jpg';
import tools from './tools.jpg';

const ContentHome = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex container-fluid justify-content-center align-items-center">
            <div className="col-md-6 text-home offset-md-1">
                <h1  style={{ color: '#e6e4e4' }}>New York's No.1 Barbershope</h1>
                <h6>You Want It We Cut It For You</h6>
                <p className="text-color-p">
                    Lorem ipsum dolor Lorem ipsum dolor sit amet. sictio sit quos?
                    Lorem ipsum dolor Lorem ipsum dolor sit amet. sictio sit quos?
         </p>
                <button className="btn   btn-color-home btn-animetion">MAKE AN APPOINTMENT</button>
            </div>
            <div className="col-md-5 img-home ">
                <img src={chair1} alt="" className="img-fluid img-content-header " />
            </div>
        </main>
    );
};

export default ContentHome;