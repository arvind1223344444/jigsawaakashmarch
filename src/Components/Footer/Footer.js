import React from 'react';
import '../Footer/Footer.css';
import instagram_icon from '../../Images/instagram_icon.png';
import facebook_icon from '../../Images/facebook_icon.png';
import youtube_icon from '../../Images/youtube_icon.png';
import linkedin_icon from '../../Images/linkedin_icon.png';

export default function Footer() {
  return (
    <>
    <footer className='footer'>
    <div className='footer-top'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6'>
                    <div className='footer-widget footer-about'>
                    <h2 className="footer-title">About Company</h2>
                        <div className='footer-about-content'>
                         <p> <span className='fw-bolder fs-6'> jigsawabacus </span>   is India’s largest online learning platform. choose  our course and start learning</p>
                        </div>
                        <div className='footer-about-content'>
                         <h5>Reach out to us</h5>
                         <p>Get your questions answered about learning with jigsawabacus.</p>
                         <a href='tel:434343' className='text-dark fw-bolder'>Call +91 9350 444 666</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-2 col-md-6'>
                    <div className='footer-widget footer-menu'>
                        <div className='widget-box  widget_nav_menu'>
                        <h2 className="footer-title">Company</h2>
                        <div className='menu-footerinstructor-container'>
                            <div className='menu-footerinstructor'>
                                <ul className='menu'>
                                <li className='menu-item'>
                                    <a href='#'>About</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Careers</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Privacy policy</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Terms and conditions</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Site Map</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Refund Policy</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className='col-lg-3 col-md-6'>
                    <div className='footer-widget footer-menu'>
                        <div className='widget-box  widget_nav_menu'>
                        <h2 className="footer-title">Study Material</h2>
                        <div className='menu-footerinstructor-container'>
                            <div className='menu-footerinstructor'>
                                <ul className='menu'>
                                <li className='menu-item'>
                                    <a href='#'> Vedic Maths Study Material</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'> English Study Material</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'> MemBrain Study Material</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'> Robotics Study Material</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Handwriting Study Material</a>
                                </li>
                               
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6'>
                    <div className='footer-widget footer-menu'>
                        <div className='widget-box  widget_nav_menu'>
                        <h2 className="footer-title">Jigsawabacus  Centre</h2>
                        <div className='menu-footerinstructor-container'>
                            <div className='menu-footerinstructor'>
                                <ul className='menu'>
                                 <li className='menu-item'>
                                    <a href='#'> Delhi</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'> Madhya Pradesh</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'> Punjab</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'> Haryana</a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>Maharashtra</a>
                                </li>
                               
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <hr className="css_line"></hr>
            </div>

              <div className='row'>
                <div className="col-md-6">
                <div className='footer-social-media-icons mb-2 text-sm-start text-center'>
                   <a href='https://instagram.com/jigsaw.abacus?igshid=YzdkMWQ2MWU=' target='blank' className='fb'><img src={instagram_icon} className='img-fluid'/></a>
                   <a href='https://www.facebook.com/jigsawabacus' target='blank' className='fb'><img src={facebook_icon} className='img-fluid'/></a>
                   <a href='https://www.youtube.com/@jigsawabacus' target='blank' className='fb'><img src={youtube_icon} className='img-fluid'/></a>
                   <a className='fb'><img src={linkedin_icon} className='img-fluid'/></a>
                </div>
                </div>

                <div className="col-md-6">
                <div className='copyright mt-2'>
                 <p className='fw-bolder text-sm-end text-center'>© 2023 JIGSAW® EDU SOLUTIONS PVT. LTD.</p>   
                </div>
                </div>
                
            </div>
        </div>
    </div>
    </footer>
    </>
  )
}
