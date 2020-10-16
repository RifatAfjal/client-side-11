import React, { useContext } from 'react';
import '../../AdminPanel/AddOrder/AddOrder.css'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const AddReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
      const photo = loggedInUser.photo;
      const copyData = {...data};
      copyData.photo = photo;
      fetch('http://localhost:5000/addReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(copyData)
      })
    };
    return (
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                    <input 
                      type="text"
                      name="name" 
                      defaultValue={loggedInUser.name}
                      className="inputField" 
                      placeholder="Your name"
                      ref={register({required: true, pattern:/^([a-zA-Z ]){3,30}$/})}/>
                    {errors.name && <span className="text-danger">Name must be 3 to 30 letter</span>}

                    <input 
                      type="text"
                      placeholder="Company name Designation"
                      name="companyName"
                      className="inputField" 
                      ref={register({required: true, pattern:/^([a-zA-Z ])/})}/>
                    {errors.name && <span className="text-danger">Name must be 3 to 30 letter</span>}

                    <textarea 
                      type="text"
                      name="description"
                      className="inputField descField" 
                      placeholder="Project details"
                      ref={register({ required: true})}/>
                    {errors.description && <span className="text-danger">Project details is required</span>}

                    <button 
                      className="btn btn-dark mt-3" 
                      style={{width:"120px"}}>
                      Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;