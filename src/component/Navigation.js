import React from 'react'
import '../cssfolder/header.css'
import bick from '../assets/imageshoc'

// import {Link}  from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigationbar() {
    return (
        <div>

            {/* companey logo start */}
            <div className='iconsbox'>
                <div className='icons'>
                    <img className='logo' src={bick.RELogo} />
                    <img className="logoname" src={bick.Logoname} />
                </div>
            </div>
            {/* companey logo end */}

            <Navbar data-bs-theme="dark" className='container-fluid navigation' >
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/"         className='navname'>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/services" className='navname'>Service</Link></Nav.Link>
                        <Nav.Link><Link to="/support"  className='navname'>Support</Link></Nav.Link>
                        <Nav.Link><Link to="/locateus" className='navname'>Locate Us</Link></Nav.Link> 
                    </Nav>
                    <Nav.Link ><Link to="/login" className='Navlink navname'>Login</Link></Nav.Link>
                    <img className='Navimage' src={bick.bharat} />
                </Container>
            </Navbar>

        </div>
    )
}

export default Navigationbar;
