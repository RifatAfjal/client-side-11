import React, { useContext } from 'react';
import './AdminPanel.css';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faCommentDots,faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AddOrder from '../AddOrder/AddOrder';
import ServiceList from '../ServiceList/ServiceList';
import AddReview from '../AddReview/AddReview';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderList from '../OrderList/OrderList';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';
import Header from './Header';

const AdminPanel = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const {name, photo} = loggedInUser;

    return (
        <div className="tabContainer">
            <Tab.Container id="left-tabs-example" defaultActiveKey="order">
                <Row>
                    <Col md={4} lg={3} className="d-flex flex-column">
                       <img src={logo} style={{display:"block",margin:"0 auto 30px auto",height:"50px"}} alt=""/>
                        <Nav variant="pills" className="flex-column mx-auto">
                            {
                                loggedInUser.admin === false &&
                                <Nav.Item >
                                    <Nav.Link eventKey="order">
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2"/>
                                        <span>Order</span>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                            {
                                loggedInUser.admin &&
                                <Nav.Item>
                                    <Nav.Link eventKey="serviceList">
                                        <FontAwesomeIcon icon={faList} className="mr-2"/>
                                        <span>Service List</span>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                            {
                                loggedInUser.admin === false &&
                                <Nav.Item>
                                    <Nav.Link eventKey="review">
                                        <FontAwesomeIcon icon={faCommentDots} className="mr-2"/>
                                        <span>Review</span>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                            {
                                loggedInUser.admin === false &&
                                <Nav.Item>
                                    <Nav.Link eventKey="orderList">
                                        <FontAwesomeIcon icon={faList} className="mr-2"/>
                                        <span>Order List</span>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                            {
                                loggedInUser.admin &&
                                <Nav.Item>
                                    <Nav.Link eventKey="addService">
                                        <FontAwesomeIcon icon={faPlus} className="mr-2"/>
                                        <span>Add Service</span>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                            {
                                loggedInUser.admin  &&
                                <Nav.Item>
                                    <Nav.Link eventKey="makeAdmin">
                                        <FontAwesomeIcon icon={faUserPlus} className="mr-2"/>
                                        <span>Make Admin</span>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                        </Nav>
                    </Col>
                    <Col md={9}>
                        <Tab.Content>
                            {
                                loggedInUser.admin === false &&
                                <Tab.Pane eventKey="order">
                                    <Header 
                                        title="Order"
                                        image={photo}
                                        name= {name}/>
                                    <div className="tabPane">
                                    <AddOrder/>
                                    </div>
                                </Tab.Pane>
                            }
                            {
                                loggedInUser.admin &&
                                <Tab.Pane eventKey="serviceList">
                                    <Header 
                                        title="Service List"
                                        image={photo}
                                        name= {name}/> 
                                    <div className="tabPane">
                                    <ServiceList/> 
                                    </div>
                                </Tab.Pane>
                            }
                            {
                                loggedInUser.admin === false &&
                                <Tab.Pane eventKey="review">
                                    <Header 
                                        title="Review"
                                        image={photo}
                                        name= {name}/>
                                    <div className="tabPane">
                                        <AddReview/>
                                    </div>
                                </Tab.Pane>
                            }
                            {
                                loggedInUser.admin === false &&
                                <Tab.Pane eventKey="orderList">
                                    <Header 
                                        title="Order List"
                                        image={photo}
                                        name= {name}/>
                                    <div className="tabPane">
                                        <OrderList/>
                                    </div>
                                </Tab.Pane>
                            }
                            {
                                loggedInUser.admin &&
                                <Tab.Pane eventKey="addService">
                                    <Header 
                                        title="Add Service"
                                        image={photo}
                                        name= {name}/>
                                    <div className="tabPane">
                                        <AddService/>
                                    </div>
                                </Tab.Pane>
                            }
                            {
                                loggedInUser.admin &&
                                <Tab.Pane eventKey="makeAdmin">
                                    <Header 
                                        title="Add Admin"
                                        image={photo}
                                        name= {name}/>
                                    <div className="tabPane">
                                        <MakeAdmin/>
                                    </div>
                                </Tab.Pane>
                            }
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default AdminPanel;