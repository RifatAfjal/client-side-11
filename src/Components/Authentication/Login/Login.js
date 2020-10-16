import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/logos/googleLogo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from '../../Shared/FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(FirebaseConfig);

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [admins, setAdmins] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const { from  } = location.state || { from: { pathname: "/" } };  
    
    useEffect(()=> {
        fetch('http://localhost:5000/isAdmin')
        .then(res => res.json())
        .then(data => {
            setAdmins(data);
        })
    },[]);

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const info = result.user;
                let copyUserInfo = {...loggedInUser}
                copyUserInfo.isSignedIn= true;
                copyUserInfo.name= info.displayName;
                copyUserInfo.email= info.email;
                copyUserInfo.photo= info.photoURL;

                const isAdmin = admins.find(admin => admin.email === info.email);
                isAdmin?
                copyUserInfo.admin = true:
                copyUserInfo.admin = false

                setLoggedInUser(copyUserInfo);
                storeAuthToken()
                history.replace(from);
            })
        .catch(error => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(idToken => {
            sessionStorage.setItem('token',idToken);
        })
        .catch(error => {
            alert(error)
        });
    }
   
    return (
        <div className="container d-flex justify-content-center align-items-center loginContainer">
           <div className="d-flex justify-content-center flex-column loginCard">
                <img src={logo} className="volunteerLogo" alt="volunteerLogo"/>
                <div className="card">
                    <h1 className="text-center mb-4">Login</h1>
                    <button onClick={handleSignIn} className="d-flex justify-content-center align-items-center p-2 loginBtn">
                        <img src={google} className="mr-3 icon" alt="googleLogo"/>
                        <p className="pt-3">Continue with Google</p>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default Login;