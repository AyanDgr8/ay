// src/components/routes/Basic/Header/Header.js


import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './Header.css';

const Header = () =>{
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    return(
        <div>
            <header className="ay_header">

                <div className="logo-header-hbot">
                    <Link to="/home" className="logo-link">
                        <LazyLoad>
                            <img
                            src="/uploads/aylogo.png"
                            alt="aylogo"
                            className="aylogo"
                            rel="noopener noreferrer"
                            onClick={scrollToTop}
                            />
                        </LazyLoad>
                    </Link>
                </div>
                <div className="header-buttons">
                    <Link to="/home" className="button-h " rel="noopener noreferrer"  onClick={scrollToTop}>
                    Home
                    </Link>
                    <Link to="/Startup" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    Startup
                    </Link>
                    <Link to="/faq" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    FAQs
                    </Link>
                    <Link to="/about" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    About Us
                    </Link>
                    <Link to="/investing" className=" invest" rel="noopener noreferrer" onClick={scrollToTop}>
                    Start Investing
                    </Link>
                </div>
            </header>

        </div>
    );
};

export default Header;