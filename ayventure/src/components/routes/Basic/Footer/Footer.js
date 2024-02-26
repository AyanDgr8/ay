// src/components/routes/Basic/Footer/Footer.js


import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './Footer.css';

const Footer =() =>{
    return(
        <div>
            <div>
                <Link to="/home" className="logo-link">
                    <LazyLoad>
                        <img
                        src="/uploads/aylogo.png"
                        alt="aylogo"
                        className="logofooter"
                        rel="noopener noreferrer"
                        />
                    </LazyLoad>
                </Link>
            </div>
            <footer className="page-footer">
                <span className='footer-columns'>
                    <div className='footer-heading'>Investors</div>
                    <div className='footer-subtitle'>Invest</div>
                </span>
                <span className='footer-columns'>
                    <div className='footer-heading'>Startups</div>
                    <div className='footer-subtitle'>Raise</div>
                </span>
                <span className='footer-columns'>
                    <div className='footer-heading'>Others</div>
                    <div className='footer-subtitle'>FAQs</div>
                </span>
                <span className='footer-columns'>
                    <div className='footer-heading'>Contact Us</div>
                    <div className='footer-subtitle'>
                        <a href='mailto:invest@ayventures.in' className='email-phone'>invest@ayventures.in</a>
                    </div>
                    <div className='footer-subtitle'>
                        <a href="tel:+91-9115672094" className='email-phone'>+91-9115672094</a>
                    </div>
                </span>
                <span  className='footer-columns last-col'>
                        <div className='footer-heading'>Registered Office</div>
                        <div className='last-subtitle'>2nd Floor, Plot No. 4, Minarch Tower, Sector 44, Gurgaon, Haryana 122003</div>
                    
                        <div className='footer-heading corporate'>Corporate Office</div>
                        <div className='last-subtitle'>4th Floor, BPTP Centra One, Sector 61, Gurgaon, Haryana 122102</div>

                        
                        <div className='footer-heading '>Follow Us</div>

                        <span className='footer-column-icons'>
                            <div className='last-subtitle'>
                            <a href="https://www.linkedin.com/company/ayventures" >
                                <img 
                                src="/uploads/linkedin.png"
                                className="footer-icons lin"
                                alt="linkedin"
                                />
                            </a>
                            <a href="https://www.facebook.com/ayventuresindia" >
                                <img 
                                src="/uploads/facebook.png"
                                className="footer-icons fb"
                                alt="facebook"
                                />
                            </a>
                            <a href="https://www.instagram.com/ayventuresofficial/" >
                                <img 
                                src="/uploads/instagram.png"
                                className="footer-icons ig"
                                alt="instagram"
                                />
                            </a>
                            <a href="https://twitter.com/AYVenturesIndia" >
                                <img 
                                src="/uploads/twitter.png"
                                className="footer-icons tt"
                                alt="twitter"
                                />
                            </a>
                        </div>
                    </span>
                </span>
            </footer>

        </div>
    )
}
export default Footer;