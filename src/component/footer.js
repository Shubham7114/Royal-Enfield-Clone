import React from 'react'
import '../cssfolder/footer.css'
function footer() {
    return (
        
            <footer>
                <hr/>
                <div className="container-fluid foot ">
                    <div className="row justify-content-between">
                        <div className="col-3 text-center mt-5">
                           <h4 className="  fw-bold mb-5">Support</h4>
                            <p className=" ">Service Centres</p>
                            <p className=" ">Stores</p>
                            <p className=" ">Owner's Manual</p>
                            <p className=" ">Contact Us</p>
                            <p className=" ">Book a Test Ride</p>
                            <p className=" ">Make It Yours</p>
                            <p className=" ">Become a Dealer</p>
                        </div>
                        <div className="col-3 text-center mt-5">
                           <h4 className="  fw-bold mb-5">Our World</h4>
                            <p className=" ">Royal Enfield App</p>
                            <p className=" ">Royal Enfield Tripper</p>
                            <p className=" ">Royal Enfield</p>
                            <p className=" ">Wingman</p>
                            <p className=" ">Goa Garage Cafe</p>
                            <p className=" ">Custom World</p>
                            <p className=" ">News and Media</p>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 border-black" type="search" placeholder="Email Address" aria-label="Email" />
                                <button className="btn btn-outline-success" type="submit">Submit</button>
                            </form>
                        </div>
        
                        <div className="col-3 text-center mt-5">
                            <h4 className=" fw-bold mb-5">News & Media</h4>
                            <p className=" " >News</p>
                            <p className=" " >Press Release</p>
                            <p className=" " >Media Kit</p>
                            <p className=" " >Events</p>
                        </div>

                        <div class="col-3 text-center mt-5">
                            <h4 className="fw-bold mb-5">Follow Us</h4>
                            <p  className="">Let us be social</p>
                            
                        </div>
                        
                        <p className="mt-5 text-dark text-center">Copyright ©2023 All rights reserved | This template is made by Shubham</p>
                    </div>
                </div>
            </footer>
        
    )
}

export default footer
