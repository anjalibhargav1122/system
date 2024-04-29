import React from 'react'
import './System.css'
import img from "./system img/images.jpeg"
import img1 from "./system img/img2.jpeg"
import img2 from "./system img/wh.jpeg"
import img3 from "./system img/ok.jpeg"
import img4 from "./system img/ik.jpeg"
import img5 from "./system img/yh.jpeg"
import img6 from "./system img/op.jpeg"
import img7 from "./system img/lp.jpeg"
import img8 from "./system img/as.jpeg"
import img9 from "./system img/et.jpeg"
import img10 from "./system img/df.jpeg"
import img11 from "./system img/rj.jpeg"
import img12 from "./system img/wd.jpeg"
import img13 from "./system img/so.jpeg"
import img14 from "./system img/xc.jpeg"
import img15 from "./system img/fv.jpeg"
import img16 from "./system img/sp.jpeg"

import { NavLink } from 'react-router-dom'

const System = () => {
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

            <div className='bg' style={{ backgroundImage: `url(${img})`, }}>
                <div className='container js'><nav class="navbar navbar-expand-lg navbar-light bg-transparant">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={img1} /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink className="text-decoration-none" to="/">
                                    <a class="nav-link active text-white fw-bold fs-4" aria-current="page" href="#">Home</a> </NavLink>
                                    </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle lc fw-bold fs-4 ms-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item fs-6 fw-bold" href="#">Categories</a></li>
                                        <li><NavLink className="text-decoration-none" to="/shop">
                                            <a class="dropdown-item cl" href="#">T-Shirts</a>
                                            </NavLink>
                                            </li>

                                        <li><NavLink className="text-decoration-none" to="/shop2">
                                            <a class="dropdown-item cl" href="#">Hoodies</a>
                                            </NavLink>
                                            </li>
                                    </ul> 
                                   
                                </li>

                                <li class="nav-item">
                                <NavLink className="text-decoration-none" to="/about">
                                <a class="nav-link  lc fw-bold fs-4 ms-4" aria-current="page" href="#">About</a></NavLink>
                                   
                                </li>
                                <li class="nav-item">
                                <NavLink className="text-decoration-none" to="/contact">
                                <a class="nav-link  lc fw-bold fs-4 ms-4" aria-current="page" href="#">Contact</a></NavLink>
                                  
                                </li>


                            </ul>
                            <div class="d-flex fs-4 "><a className='lc' target='_blank' href='https://systumm.com/my-account/'><i class="fa-regular fa-user me-4"></i></a><a className='lc' target='_blank' href='https://systumm.com/cart/'><i class="fa-solid fa-bag-shopping"></i></a>
                            </div>
                        </div>
                    </div>
                </nav></div>
            </div>
            <div className='container text-center text-primary fs-2 xt fw-bold pt-4 pb-4'>Hoodies & Sweatshirts</div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img2})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>

                                Haters slogan hoodie- Olive green</h6>
                            <h6>&#8377;1,799.00</h6>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img3})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>


                                BADMOSS- Lavender</h6>
                            <h6>&#8377;1,799.00</h6>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img4})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>



                                TYPO HOODIE- RED</h6>
                            <h6>&#8377;1,799.00</h6>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header by' style={{ backgroundImage: `url(${img5})`, }}><button className='btn btn-primary mt-3 ps-3 pe-3'>Sale!</button></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>

                                SYSTUMM TYPO- Hoodie (Black)</h6>
                            <div className='d-flex justify-content-center'>
                                <h6 className='text-secondary me-2'><del>&#8377;1,799.00</del></h6>
                                <h6 >&#8377;1,499.00</h6></div>

                        </div></div></div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img6})`, }}></div>
                        <div className='card-body text-center p-4 '>
                            <h6>
                                SYSTUMM TYPO- Hoodie (Green)</h6>
                            <h6>&#8377;1,799.00</h6>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img7})`, }}></div>
                        <div className='card-body text-center p-4 '>
                            <h6>


                                “Haters”- Slogan Hoodie (Light Green)</h6>
                            <h6>&#8377;1,799.00</h6>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img8})`, }}><button className='btn btn-primary mt-3 ps-3 pe-3'>Sale!</button></div>
                        <div className='card-body text-center p-4 '>
                            <h6>


                                SHREE RAM – Hoodie</h6>
                            <div className='d-flex justify-content-center'>
                                <h6 className='text-secondary me-2'><del>&#8377;1,799.00</del></h6>
                                <h6 >&#8377;1,499.00</h6></div>

                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bu' style={{ backgroundImage: `url(${img9})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>




                                SANATANI Hoodie (Black)</h6>
                            <h6>&#8377;1,499.00</h6>

                        </div></div></div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header by' style={{ backgroundImage: `url(${img10})`, }}><button className='btn btn-primary mt-3 ps-3 pe-3'>Sale!</button></div>
                        <div className='card-body text-center p-4 '>
                            <h6>BAD-MOSS (Grey)</h6>
                            <div className='d-flex justify-content-center'>
                                <h6 className='text-secondary me-2'><del>&#8377;2,199.00</del></h6>
                                <h6 >&#8377;1,799.00</h6></div>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img11})`, }}><button className='btn btn-primary mt-3 ps-3 pe-3'>Sale!</button></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>


                                Chore Haryana Aale – Black</h6>
                            <div className='d-flex justify-content-center'>
                                <h6 className='text-secondary me-2'><del>&#8377;2,199.00</del></h6>
                                <h6 >&#8377;1,799.00</h6></div>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img12})`, }}><button className='btn btn-primary mt-3 ps-3 pe-3'>Sale!</button></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>

                                BAD-MOSS (Sea Green)</h6>
                            <div className='d-flex justify-content-center'>
                                <h6 className='text-secondary me-2'><del>&#8377;2,199.00</del></h6>
                                <h6 >&#8377;1,799.00</h6></div>
                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img13})`, }}><button className='btn btn-primary mt-3 ps-3 pe-3'>Sale!</button></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>


                                Chore Haryana Aale – Purple</h6>
                            <div className='d-flex justify-content-center'>
                                <h6 className='text-secondary me-2'><del>&#8377;2,199.00</del></h6>
                                <h6 >&#8377;1,799.00</h6></div>

                        </div></div></div>
                </div>
            </div>

            <div className='container text-center text-primary fs-2 xt fw-bold pt-5 mt-5 pb-5'>T-Shirts</div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img14})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>


                                AnjaniPutra TShirt (Black)</h6>    <h6 >&#8377;799.00</h6>

                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img15})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>

                                SYSTUMM T-Shirt (Lilac)</h6>    <h6 >&#8377;799.00</h6>

                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'><div className='card sc border-0'>
                        <div className='card-header bk' style={{ backgroundImage: `url(${img16})`, }}></div>
                        <div className='card-body text-center p-4 pb-5'>
                            <h6>
                                DESTROYER T-shirt (Black)</h6>
                            <h6 >&#8377;799.00</h6>

                        </div></div></div>
                    <div className='col-sm-12 col-md-3 col-lg-3'></div>
                </div>
            </div>
            <div className='container-fluid bg-light mt-5 text-center pt-5 pb-5'>
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

export default System