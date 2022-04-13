import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { name, price, img, discription, id } = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>discription:<small>{discription}</small></p>
            <input onClick={() => navigate(`/service/${id}`)} type="submit" value={`Book:${name}`} />

        </div>
    );
};

export default Service;