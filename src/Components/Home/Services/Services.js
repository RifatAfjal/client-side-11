import React from 'react';
import './Services.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Services = () => {
    const history = useHistory();
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleOrder = (serviceName) => {
        const copyUserInfo = {...loggedInUser}
        copyUserInfo.title = serviceName;
        setLoggedInUser(copyUserInfo);
        history.push('/client')
    }

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then( results => {
            setServices(results)
        })
    },[]);

    
    return (
        <div style={{marginBottom:"100px"}}>
            <div className="container">
                <SectionHeader
                  heading="Provide awesome"
                  highlightHeading="services"/>

                <div className="row">
                    {
                        services.map( service => {
                            return(
                                <div key={`${service._id}`} className="col-md-6 col-lg-4 mb-4">
                                    <div className="card px-4 py-3 cardStyle" style={{height:"100%",cursor:"pointer"}}
                                        onClick={()=>handleOrder(`${service.title}`)}>

                                        <img src={`data:image/png;base64,${service.image.img}`} 
                                            className="card-img-top cardImage mb-3" alt=""/>

                                        <div className=" text-center">
                                            <h4 className="mb-3">{service.title}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;