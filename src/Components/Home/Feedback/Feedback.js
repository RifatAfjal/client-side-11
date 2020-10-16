import React from 'react';
import './Feedback.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import { useState } from 'react';
import { useEffect } from 'react';

const Feedback = () => {

    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(reviews => {
            setReviews(reviews)
        })
    },[]);

    return (
        <section style={{marginBottom:"100px"}}>
            <div className="container">
                <SectionHeader
                heading="Clients"
                highlightHeading="Feedback"
                color="black" 
                />
                <div className="row">
                    {
                        reviews &&
                        reviews.map(review => {
                            return(
                                <div key={review._id} className="col-md-6 col-lg-4 mb-4">
                                    <div className="card px-3 py-2 cardStyle">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={review.photo} className="bg-dark feedbackImg" alt=""/>
                                            <div>
                                                <h5>{review.name}</h5>
                                                <h6>{review.companyName}</h6>
                                            </div>
                                        </div>
                                        <p>{review.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
        </section>
        
    );
};

export default Feedback;