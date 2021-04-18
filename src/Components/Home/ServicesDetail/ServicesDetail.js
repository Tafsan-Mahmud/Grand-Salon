import React from 'react';
import { useHistory } from 'react-router';
import './ServicesDetail.css';
const ServicesDetail = (props) => {
    const {name , imageUrl , description , price , _id} = props.service;

    const  history = useHistory()
    const handleServices = (id)=>{
       history.push(`/booking/${id}`)
    }
    return (
        <div className=" pb-5 m-3">
            <div className="text-center mt-4">
                <img className="servicess-img" style={{width:'105px' , height:'105px'}} src={imageUrl} alt=""/>
                <h5 style={{color:'#e6e4e4'}} className="mt-4 mb-4">{name} </h5>
                <h4 style={{color:'#e6e4e4'}} >$ {price}</h4>
                <p className="text-color-p">{description}</p>
                <button onClick={()=>handleServices(_id)} className="btn   btn-color-home">Book Now</button>
            </div>
        </div>
    )
};

export default ServicesDetail;