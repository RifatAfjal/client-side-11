import React, { useContext, useState } from 'react';
import './AddOrder.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const AddOrder = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();
    const [ image, setImage ] = useState();
    const [ imageName, setImageName ] = useState();

    const handleChange = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    }

    const onSubmit = data => {
        const copyInfo = {...data}
        copyInfo.image = image
        const formData = new FormData();
        formData.append('file',image);
        formData.append('name',copyInfo.name);
        formData.append('email',copyInfo.email);
        formData.append('service',copyInfo.service);
        formData.append('description',copyInfo.description);
        formData.append('price',copyInfo.price);
        formData.append('status',"Pending");


        fetch('http://localhost:5000/addClient', {
            method: 'POST',
            body: formData,
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
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
                      placeholder="Your name/company name"
                      ref={register({required: true, pattern:/^([a-zA-Z ]){3,30}$/})}/>
                    {errors.name && <span className="text-danger">Name must be 3 to 30 letter</span>}

                    <input 
                      type="email"
                      name="email"
                      defaultValue={loggedInUser.email}
                      className="inputField" 
                      placeholder="Your email address"
                      ref={register({required: true, pattern:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/})}/>
                    {errors.email && <span className="text-danger">Input a valid email</span>}

                    <input 
                      type="text"
                      name="service"
                      defaultValue={loggedInUser.title}
                      className="inputField" 
                      placeholder="Service name"
                      ref={register({required: true, pattern:/^([a-zA-Z ])/})}/>
                    {errors.service && <span className="text-danger">Service name must be in letter</span>}

                    <textarea 
                      type="text"
                      name="description"
                      className="inputField descField" 
                      placeholder="Project details"
                      ref={register({ required: true})}/>
                    {errors.description && <span className="text-danger">Project details is required</span>}

                    <div className="d-flex align-items-center" style={{marginTop:"20px"}}>
                        <div className="w-50 mr-4">
                            <input 
                              type="text"
                              name="price"
                              placeholder="Price"
                              className="w-100 inputField"
                              ref={register({required: true,pattern:/^\d+$/ })}/>
                            {errors.price && <span className="text-danger">Price must be in number</span>}
                        </div>

                        <div className="w-50">
                            <label for="files" className="btn btn-outline-success">
                               <FontAwesomeIcon icon={faCloudUploadAlt}/>
                               {
                                imageName?
                                imageName:
                                "Upload project file"
                               }
                            </label>
                            <input 
                              type="file" 
                              name="image"
                              id="files"
                              onChange={handleChange}
                              style={{display:"none"}}
                              ref={register({ required: true })}/>
                            {errors.image && <span className="text-danger">Image is required</span>}
                        </div>
                    </div>

                    <button 
                      type="submit" 
                      style={{width:"120px"}}
                      className="btn btn-dark mt-3">
                      Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddOrder;