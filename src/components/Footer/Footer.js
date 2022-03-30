import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPinLock, faMailBulk, faPhone,faCopyright  } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Footer = () => {
        return (
            <div className='footer'>
                <div className='d-flex flex-column flex-md-row justify-content-around mt-5 pt-5'>
                    <div className='text-center'>
                        <div className='d-flex mb-2 justify-content-center'>
                            <img src="logo4.png" alt="" className='rounded-circle'/>
                            <h2 className='ms-3 fw-bolder'> <span className='text-info '>Web</span> Education</h2>
                        </div>
                        <div className='ps-3' >
                            <FontAwesomeIcon icon={faLocationPinLock} className="location" />
                            <span className='ms-3'>Frankfurt Am Main, Germany</span>
                        </div>
                        <div className='ps-3' >
                            <FontAwesomeIcon icon={faMailBulk} className="location" />
                            <span className='ms-3'>Official: imranhossain1402@gmail.com</span>
                        </div>
                        <div className='ps-3' >
                            <FontAwesomeIcon icon={faPhone} className="location" />
                            <span className='ms-3'>Phone: +4915735329347</span>
                        </div>
                        <div className='ps-3' >
                            <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex flex-column text-center'>
                            <div className='d-flex flex-column navlink'>
                                <NavLink to="/about" className="text-color">About us</NavLink>
                                <NavLink to="/courses">Our Courses</NavLink>
                            </div>
                            <div className='mt-3'>
                                <a href="https://www.instagram.com/imranhsn14/"><FontAwesomeIcon icon={['fab', 'instagram']} className='instagram'/></a>
                                <a href="https://www.facebook.com/imran1402/"><FontAwesomeIcon icon={['fab', 'facebook']} className='facebook'/></a>
                                <a href="https://www.linkedin.com/in/md-imran-hossain-281490119/"><FontAwesomeIcon icon={['fab', 'linkedin']} className='linkdin'/></a>
                                <a href="https://github.com/ImranHossain1"><FontAwesomeIcon icon={['fab', 'github']} className='github'/></a>
                            </div>
                        </div>
                    </div>
                </div>             
                <div className='text-center font-monospace'>
                    <small>copyright <FontAwesomeIcon icon={faCopyright} className="location" /> Md Imran Hossain</small>
                </div>
            </div>

    );
};

export default Footer;