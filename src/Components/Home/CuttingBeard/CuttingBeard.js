import React from 'react';
import './CuttingBeard.css';
import beardImg from './beard.JPG';
import ck from './ck-done.png';

const CuttingBeard = () => {
    return (
        <section style={{ background: '#191919' }} className="cutting-section">
            <div className="row pt-5 pb-5 d-flex container-fluid align-items-center">
                <div className="img-div col-md-7">
                    <img className="w-100" src={beardImg} alt="" />
                </div>
                <div className="text-div text-center col-md-5">
                    <img style={{height:'100px'}} src={ck} alt=""/>
                    <h1 style={{ color: '#e6e4e4' }} className="mb-3 mt-3">Cutting Beard With Style</h1>
                    <h6 className="mb-5" style={{color:'#bc9355'}}><span className="ms-2">F O R</span> <span className="ms-2">G O O D L O O K I N G</span> <span className="ms-2"> M E N </span> <span className="ms-2">O N L Y </span> </h6>
                    <p className="text-color-p exp-h6">Lorem voluptate dignissimos amet fuga? Maxi <br /> ate dignissimos  Ad valiquam totam corporis esse cupiditate magni vitae voluptate dignissimos amet fuga? Maxime, pariatur ipsam?</p>
                    <button className="btn   btn-color-home mt-3">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default CuttingBeard;