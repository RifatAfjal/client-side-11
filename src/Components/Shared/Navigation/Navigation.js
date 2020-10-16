import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Navigation = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar expand="lg" variant="light">
               <Container>
               <Navbar.Brand href="#home"><img src={logo} height="50px" alt=""/></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="mr-lg-2">Home</Nav.Link>
                        <Nav.Link as={Link} to="/" className="mr-lg-2">Our portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/" className="mr-lg-2">Our team</Nav.Link>
                        <Nav.Link as={Link} to="/" className="mr-lg-2">Contact us</Nav.Link>
                        {
                            loggedInUser.email?
                            <h3>{loggedInUser.email}</h3>:
                            <Link to='/login'>
                                <Button variant="dark" className="px-4">Login</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
               </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;