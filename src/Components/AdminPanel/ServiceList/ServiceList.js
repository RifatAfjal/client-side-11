import React, { useEffect, useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';

const ServiceList = () => {
    const [clientsData, setClientsData] = useState([]);
    const handleSelectChange = (id,event) => {
        console.log(event.target.value)
        console.log(id)
    }
    useEffect(() => {
        fetch("http://localhost:5000/clients")
        .then(res => res.json())
        .then(data => {
            setClientsData(data)
        })
    },[]);
    return (
        <>
            <Table striped bordered hover className="bg-white rounded">
                <thead style={{background:"lightgray",borderRadius:"10px"}}>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Project details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientsData.map( data => {
                            return(
                                <tr key={`${data._id}`}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.service}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <select value={data.status} onChange={(event)=>handleSelectChange(`${data._id}`,event)}>
                                            <option value="Pending">Pending</option>
                                            <option value="Done">Done</option>
                                            <option value="On going">On going</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ServiceList;