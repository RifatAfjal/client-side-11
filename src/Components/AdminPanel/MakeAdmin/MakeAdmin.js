import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
            <label for="email">Add Email</label>
            <input 
                type="email"
                name="email"
                id="email"
                placeholder="rifatafjal@gmail.com"
                ref={register({required: true})}/>
            {errors.email && <span className="text-danger">Input a valid email</span>}
            <button 
                className="btn btn-dark mt-3" 
                style={{width:"120px"}}>
                Submit
            </button>
        </form>
            
        </>
    );
};

export default MakeAdmin;