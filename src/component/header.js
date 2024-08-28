import React, { useState } from 'react';
import '../cssfolder/header.css'
import bick from '../assets/imageshoc'

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


const Parent = () => {  
       const [contiblue , SetContiBlue ]=useState(bick.contiblue)

       const ChangeBlue =()=>{
        SetContiBlue(bick.contiblue)
       }
       const ChangeOrange =()=>{
        SetContiBlue(bick.contiorange)
       }
       const ChangeRed =()=>{
        SetContiBlue(bick.contired)
       }

    return (
        <div>
            
            {/* Corousel start */}
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bick.corousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white fw-bold'>The New Himalayan</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bick.corousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger fw-bold'>The Continental 650</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bick.corousel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger fw-bold'>Super Metor 650</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Corousel start */}
            {/* {Second Navbar Start} */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-danger'><h4>Motorcycle</h4></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Continental-GT">Continental GT</Nav.Link>
                        <Nav.Link href="#Interceptor">Interceptor</Nav.Link>
                        <Nav.Link href="#Meteor">Super Meteor 650</Nav.Link>
                        <Nav.Link href="#Hunter">Hunter 350</Nav.Link>
                        <Nav.Link href="#Himalayan"> New Himalayan</Nav.Link>
                        <Nav.Link href="#Scram">Scram 411</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* {Second Navbar End} */}

            {/* Section-1 start */}
            <div className='Section1Bick'>
            
                  <img src={contiblue}/>
                

                <div className='bickinfo'>
                    <h2 className=''>THE ROYAL ENFILD</h2>
                    <h1 className='bolder'>CONTINENTAL GT-650</h1>
                    <p>This is the Royal Enfield Continental GT 650 and, needless to say, it’s
                        a very popular motorcyclein India. The riders in our country have a deep liking
                        for sporty as well as old-school motorcycles</p>
                    <h3>Choose your color</h3>
                    
                    <div className='colorSelect'>
                    
                        <div id='blue'>
                            <img onClick={ChangeBlue} src={bick.bluetank} />
                        </div>
                        
                        <div id='gray'>
                            <img onClick={ChangeOrange} src={bick.graytank} />
                        </div>
                        
                        <div id='red'>
                            <img onClick={ChangeRed} src={bick.redtank} />
                        </div>
                        
                    </div>
                    
           
                </div>
            </div>
            {/* Section-1 end */}
            {/* section-2 start */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-danger'><h4>Accessories</h4></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Continental-GT">Genunie Motorcycle Accessories</Nav.Link>|
                        <Nav.Link href="#Interceptor">Make It Yours</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='container'>
                <div class=" text-center mt-5">
                    <h1>Latest Accessories Of Motorcycle</h1>
                    <p class="text-secondary">Do you want to share your love of cheese fondue with your children? Or did you just
                        find <br />
                        out that one of your fondue party guests doesn’t drink alcohol.</p>
                </div>
                <div className='container row  justify-content-evenly mt-5 mb-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={bick.helmet} className='mt-5' style={{ width: '240px', height:'235px' }}/>
                        <Card.Body>
                            <Card.Title>Royal Enfild Helmet</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">₹ 1,566.<sup>40</sup></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='mt-5 mb-5' src={bick.Enginegard} />
                        <Card.Body>
                            <Card.Title>Engine Gard </Card.Title>
                            <Card.Text>
                            Protection in Case of a Crash<br/>
                            Prevent of Oil Leaks<br/>
                            Protection Against Debris
                            </Card.Text>
                            <Button variant="primary" className='mt-4'>₹ 3,566.<sup>20</sup></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"className='mt-5 mb-2' src={bick.mirror} />
                        <Card.Body>
                            <Card.Title>Bar End Mirror</Card.Title>
                            <Card.Text>
                                For Continental-GT, Interceptor,Classic Reborn From Sep 2021 Onward Model , Meteor350, Hunter
                            </Card.Text>
                            <Button variant="primary">₹ 6,566.<sup>40</sup></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Parent;