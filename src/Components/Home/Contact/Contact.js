import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h3>Let us handle your project, professionally.</h3>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <form className="d-flex flex-column contactForm">
                            <input type="email" name="email" placeholder="Your email address" className="mb-3"/>
                            <input type="text" name="email" placeholder="Your name/Company name" className="mb-3"/>
                            <textarea name="message" placeholder="Your message" className="mb-3"/>
                            <button type="submit" className="btn btn-dark">Send</button>
                        </form>
                    </div>
                </div>
                <p className="text-center">Copyright orange lab 2020</p>
            </div>
        </div>
    );
};

export default Contact;