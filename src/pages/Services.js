import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState({});
    console.log(services);

    useEffect( () => {
        // axios.get('/service').then(res => setServices(res));

        (async () => {
            const res = await fetcher.get("/service");
            setServices(res.data);
        })();
    }, []);

    return (
        <div className='mt-16'>
            <h1>Services</h1>
            <h1>Services</h1>
            <h1>Services</h1>
            <h1>Services</h1>
        </div>
    );
};

export default Services;