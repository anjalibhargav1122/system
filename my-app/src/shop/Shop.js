import React from 'react'
import "./Shop.css"
import img from "./shop img/ik.webp"
import img1 from "./shop img/mp.jpeg"
import img2 from "./shop img/gb.jpeg"

import { NavLink } from 'react-router-dom'

const Shop = () => {
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
<div className='container-fluid position-sticky top-0 bg-white'>
            <div className='container pt-3 pb-2 '><nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={img} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <NavLink className="text-decoration-none" to="/">
                            <a class="nav-link  text-dark  fs-4" aria-current="page" href="#">Home</a> </NavLink>
                                </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle  active text-dark  fs-4 ms-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item fs-6 fw-bold" href="#">Categories</a></li>
                                    <li>
                                    <NavLink className="text-decoration-none" to="/shop">
                                    <a class="dropdown-item " href="#">T-Shirts</a>
                                            </NavLink></li>

                                    <li>
                                    <NavLink className="text-decoration-none" to="/shop2">
                                    <a class="dropdown-item cl" href="#">Hoodies</a>
                                            </NavLink></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                            <NavLink className="text-decoration-none" to="/about">
                            <a class="nav-link   text-dark  fs-4 ms-4" aria-current="page" href="#">About</a></NavLink>
                                
                            </li>
                            <li class="nav-item">
                            <NavLink className="text-decoration-none" to="/contact">
                            <a class="nav-link      text-dark  fs-4 ms-4" aria-current="page" href="#">Contact</a></NavLink>
                              
                            </li>


                        </ul>
                        <div class="d-flex fs-4 "><a className='text-dark' target='_blank' href='https://systumm.com/my-account/'><i class="fa-regular fa-user me-4"></i></a><a className='text-dark' target='_blank' href='https://systumm.com/cart/'><i class="fa-solid fa-bag-shopping"></i></a>
                        </div>
                    </div>
                </div>
            </nav></div></div>
            <div className='container-fluid pt-5 pb-5   bg-light'><div className='container'>
                <h1 className='fw-bold  mt-4 mb-4 display-4'>  T-Shirts</h1></div>
            </div>
            <div className='container pt-4 pb-4'><a href='#' className='text-dark text-decoration-none pk'><span className='fs-5'>Home </span></a><i class="fa-solid fa-angle-right ms-2 me-2"></i> <a href='#' className='text-dark text-decoration-none pk'><span className='fs-5'>Shop</span></a><i class="fa-solid fa-angle-right ms-2 me-2"></i> <span className='fs-5 text-secondary'> T-Shirts</span></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'><button className=' btn btn-light fs-5 ps-3 pe-3'><i class="fa-solid fa-arrow-right-arrow-left me-3 "></i>
                        Hide
                        Filters</button></div>
                    <div className='col-sm-12 col-md-6 col-lg-6 mk d-flex align-items-center fs-5 justify-content-end'>Showing all 2 results <div class="dropdown">
                        <button class="btn btn-light fs-5 ps-3 pe-3 dropdown-toggle ms-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Default sorting
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Sort by popularity</a></li>
                            <li><a class="dropdown-item" href="#">Sort by latest</a></li>
                            <li><a class="dropdown-item" href="#">Sort by price: high to low</a></li>
                            <li><a class="dropdown-item" href="#">Sort by price: low to high</a></li>
                        </ul>
                    </div></div>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='row'><div className='col-sm-12 col-md-3 col-lg-3'><h6 className='text-secondary'>Filter By Price</h6><input className='form-range w-100' type='range' />
                    <div className='d-flex justify-content-between mt-3 pb-4'><p>Price: ₹790 — ₹800</p><button className='btn btn-light fw-bold ps-4 pe-4'>Filter</button></div><h5 className='text-secondary mt-5'>Product Categories</h5><a className='d-flex justify-content-between text-decoration-none mt-4 text-dark nm' href='#'><h5 className='fw-bold tx'>Hoodies & sweatshirts</h5><div className='rc'>14</div></a><a className='d-flex justify-content-between text-decoration-none mt-2 text-dark nm' href='#'><h5 className='fw-bold tx'>T-Shirts</h5><div className='cr'>2</div></a><a className='d-flex justify-content-between text-decoration-none mt-2 text-dark nm' href='#'><h5 className='fw-bold tx'>Uncategorized</h5><div className='rc'>1</div></a>
                </div>
                    <div className='col-sm-12 col-md-9 col-lg-9 mk'><div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'><div className=' sc border-0'>
                        <div className='card-header br' style={{ backgroundImage: `url(${img1})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>

                    DESTROYER T-shirt (Black)


</h6>
                            <h6>₹799.00</h6>

                        </div></div></div>
                        <div className='col-sm-12 col-md-6 col-lg-6'><div className=' sc border-0'>
                        <div className='card-header br' style={{ backgroundImage: `url(${img2})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>




                            SYSTUMM T-Shirt (Lilac)</h6>
                            <h6>₹799.00</h6>

                        </div></div></div>
                    </div></div></div>
            </div>
            
            <div className='container-fluid bg-light mt-5  text-center pt-5 pb-5'>
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

export default Shop