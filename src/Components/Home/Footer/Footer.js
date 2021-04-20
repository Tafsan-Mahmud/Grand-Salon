import React from 'react';
import './Footer.css';
import facebook from './icon-fb.png';
import google from './icon-google.png';
import twitter from './icon-twitter.png';

const Footer = () => {
    return (
        <section className="footer-part">
            <div className="container">
                <div className="for-bg">
                    <div className="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 col-sm-6 mt-5 mt-md-0 all-text">
                                <h4>Extra Services</h4>
                                <h6>Anything Lorem Lorem ipsum </h6>
                                <h6>visite Shop</h6>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <h6>Lorem ipsum dolor.</h6>
                                <h6>visite Shop</h6>
                            </div>
                            <div className="col-md-3 col-sm-6 mt-3 mt-md-0 all-text">
                                <h4>Services</h4>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <h6>visite Shop</h6>
                                <h6>Lorem ipsum dolor sit amet. lorem</h6>
                                <h6>Lorem ipsum </h6>
                                <h6>visite Shop</h6>
                                <h6>visite Shop</h6>
                                <h6>visite Shop</h6>
                            </div>
                            <div className="col-md-3 col-sm-6 mt-3 mt-md-0 all-text">
                                <h4>Beard Trim</h4>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <h6>visite Shop</h6>
                                <h6>Lorem ipsum dolor sit amet. ispum</h6>
                                <h6>Lorem ipsum </h6>
                                <h6>visite Shop</h6>
                                <h6>visite Shop</h6>
                                <h6>visite Shop</h6>
                            </div>
                            <div className="col-md-3 col-sm-6 mt-3 mt-md-0 all-text">
                                <h4>Our Address</h4>
                                <h6>New York - 101010 Hudson</h6>
                                <h6>Yards</h6>
                                <div className="social-icons">
                                    <ul className="d-flex">
                                        <li><img src={facebook} alt="" /></li>
                                        <li><img src={google} alt="" /></li>
                                        <li><img src={twitter} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="call-now">
                                    <h6 style={{ color: 'darkgrey' }}>Call Now</h6>
                                    <button className="btn btn-color-home ">+83491124</button>
                                </div>
                            </div>

                        </div>
                        <p>Copyright {(new Date().getFullYear())} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;