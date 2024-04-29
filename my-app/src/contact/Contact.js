import React from 'react'
import "./Contact.css"
import img from "./contact img/ik.jpg"
import img1 from "./contact img/img2.jpeg"

import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
 <div className='container-fluid bg-primary hid'>
                <div className='container text-white  pb-2'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 col-lg-4 pt-2 fs-5'><a className='text-white' target='_blank' href='https://twitter.com/ElvishYadav'><i class="fa-brands fa-twitter"></i></a><a className='text-white' target='_blank' href='https://www.facebook.com/theindianviner/'><i class="fa-brands fa-facebook-f ms-3"></i></a><a className='text-white' href='#'><i class="fa-brands fa-google ms-3"></i></a></div>
                        <div className='col-sm-12 col-md-4 col-lg-4 pt-2 fs-5'>Free Shipping For Orders Above ₹1899</div>
                        <div className='col-sm-12 col-md-4 col-lg-4 pt-2'></div>
                    </div>
                </div>
            </div>
            <div className='container-fluid position-relative'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'><div className='bm' style={{backgroundImage:`url(${img})`}}></div></div>
                    <div className='col-sm-12 col-md-6 col-lg-6'><div className='container ps-5 pe-5 pt-5'><h3 className='mt-5 pt-5'>Contact.</h3><p className='fs-5 pb-5'>

For any queries regarding systumm.com please mail us at <a className='hv' href='#'>help@systumm.com</a></p>

<h6 className='mt-5'>Gurgaon
</h6><p className='fs-5 pb-5'><a className='hv' href='#'>help@systumm.com</a></p></div>
</div>
                </div>
            </div>
            

            <div className='container pab'><nav class="navbar navbar-expand-lg navbar-light bg-transparant">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={img1} /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <NavLink className="text-decoration-none" to="/">
                                <a class="nav-link  fw-bold fs-4" aria-current="page" href="#">Home</a> </NavLink>
                                   </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle  fw-bold fs-4 ms-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item fs-6 fw-bold" href="#">Categories</a></li>
                                        <li>
                                        <NavLink className="text-decoration-none" to="/shop">
                                        <a class="dropdown-item cl" href="#">T-Shirts</a>
                                            </NavLink></li>

                                        <li>
                                        <NavLink className="text-decoration-none" to="/shop2">
                                        <a class="dropdown-item cl" href="#">Hoodies</a>
                                            </NavLink></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                <NavLink className="text-decoration-none" to="/about">
                                <a class="nav-link   fw-bold fs-4 ms-4" aria-current="page" href="#">About</a></NavLink>
                                   
                                </li>
                                <li class="nav-item">
                                <NavLink className="text-decoration-none" to="/contact">
                                <a class="nav-link active text-info    fw-bold fs-4 ms-4" aria-current="page" href="#">Contact</a></NavLink>
                                 
                                </li>


                            </ul>
                            <div class="d-flex fs-4 "><a className='text-dark' target='_blank' href='https://systumm.com/my-account/'><i class="fa-regular fa-user me-4"></i></a><a  className='text-dark' target='_blank' href='https://systumm.com/cart/'><i class="fa-solid fa-bag-shopping"></i></a>
                            </div>
                        </div>
                    </div>
                </nav></div>

                <div className='container-fluid bg-light  text-center pt-5 pb-5'>
                <h6 className='fw-bold mt-3'>Important Links</h6>
                <div className='container mt-5 pb-4'>
                    <div className='row '>
                        <div className='col-sm-12 col-md-2 col-lg-2'> <h5 className='fw-bold cv'>Privacy Policy
                        </h5></div>
                        <div className='col-sm-12 col-md-3 col-lg-3'> <h5 className='fw-bold cv '>Refund and Returns Policy

                        </h5></div>
                        <div className='col-sm-12 col-md-2 col-lg-2'> <h5 className='fw-bold cv '>Contact Us

                        </h5></div>

                        <div className='col-sm-12 col-md-3 col-lg-3'> <h5 className='fw-bold cv '>Terms & Conditions

                        </h5></div> <div className='col-sm-12 col-md-2 col-lg-2'>  <h5 className='fw-bold cv '>Shipping Policy
                        </h5></div>

                    </div>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <div className='cir'><a className='text-dark ' target='_blank' href='https://twitter.com/ElvishYadav'><i class="fa-brands fa-twitter fs-5"></i></a></div>
                    <div className='cir ms-4'><a className='text-dark ' target='_blank' href='https://www.facebook.com/theindianviner/'><i class="fa-brands fa-facebook-f fs-5 "></i></a></div>
                    <div className='cir ms-4'><a className='text-dark ' target='_blank' href='https://www.instagram.com/elvish_yadav/'><i class="fa-brands fa-instagram fs-5 "></i></a></div>
                </div>
                <p className='mt-4'>© 2023 Systumm Clothing. Built with 3 by NickFlix.in</p>
            </div>
    </div>
  )
}

export default Contact