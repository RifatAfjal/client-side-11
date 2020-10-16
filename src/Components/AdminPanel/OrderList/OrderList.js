import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const OrderList = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [clientData,setClientData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orderList?email=${loggedInUser.email}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization :`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setClientData(data);
        })
    },[loggedInUser]);


    return (
        <div className="row">
            {
                clientData.map( data=> {
                    return(
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card d-flex flex-column justify-content-center">
                                <h3>{data.service}</h3>
                                {
                                    data.status === "Pending" &&
                                    <span className="rounded user-select-none bg-danger">
                                            {data.status}
                                    </span>
                                } 
                                { 
                                    data.status === "Done" &&
                                    <span className="rounded user-select-none bg-success">
                                            {data.status}
                                    </span>
                                }
                                {
                                    data.status === "On going" &&
                                    <span className="rounded user-select-none bg-warning">
                                            {data.status}
                                    </span>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default OrderList;