import React from 'react';
import './ExpertStylists.css';
import pic1 from './image2.jpg';
import pic2 from './image3.jpg';
import pic3 from './image4.jpg';

const ExpertStylists = () => {
    return (
        <section className="expert-section pb-5 pt-5 text-center">
            <div className="container">
                <div className=" pt-5 text-expert">
                    <h1 style={{color:'#e6e4e4'}}>EXPERT STYLISTS</h1>
                    <h6 style={{color:'#e6e4e4'}}>Our stylist offers traditional and contemporary services along with our very own treatment</h6>
                </div>
                <div className="row d-flex mt-5 justify-content-center ">
                    <div className="col-md-3 exprt-div">
                        <img className="w-100" src={pic1} alt="" />
                        <div className="card-text-expert">
                            <h2 style={{color:'#e6e4e4'}}>Guy C. Pulido</h2>
                            <h6 style={{color:'#e6e4e4'}}>Master Barber & Color Expert</h6>
                        </div>
                    </div>
                    <div className="col-md-3 exprt-div">
                        <img className="w-100" src={pic2} alt="" />
                        <div className="card-text-expert">
                            <h2 style={{color:'#e6e4e4'}}>Steve L. Nolan</h2>
                            <h6 style={{color:'#e6e4e4'}}>Master Barber & Color Expert</h6>
                        </div>
                    </div>
                    <div className="col-md-3 exprt-div">
                        <img className="w-100" src={pic3} alt="" />
                        <div className="card-text-expert">
                            <h2 style={{color:'#e6e4e4'}}>Edgar P. Mathis</h2>
                            <h6 style={{color:'#e6e4e4'}}>Master Barber & Restyle Artist</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertStylists;