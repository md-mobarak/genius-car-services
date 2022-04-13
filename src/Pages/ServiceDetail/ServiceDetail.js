import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const navigate = useNavigate()
    const { serviceId } = useParams()
    return (
        <div>
            <button onClick={() => navigate(-1)} className=' btn btn-primary mt-5'>Back</button>
            <h2>Service Detail{serviceId}</h2>

        </div>
    );
};

export default ServiceDetail;