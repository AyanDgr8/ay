// src/components/routes/AboutUs/AboutUs.js


import React from "react";
import Header from "../Basic/Header/Header";
import Footer from "../Basic/Footer/Footer";
import BottomFooter from "../Basic/BottomFooter/BottomFooter";
import LazyLoad from 'react-lazyload';
import './AboutUs.css';

const AboutUs  = () => {
    return(
        <div>
            <Header />
            <section className="about-container-one">
                <div className="about-content-one">
                    <div className="about-heading">
                        ABOUT US
                    </div>
                    <div className="about-subtitle">
                    AY Ventures connects startups with investors to make startup investing 
                    super easy and simple. We follow a very simple and straightforward system with 
                    no hidden charges or terms and a dedicated team to help startups and investors 
                    get the most out of our platform.

                    </div>
                    <div className="about-subtitle-2">
                    We believe in making startup investing accessible to all and help startups grow 
                    out of their roots to become the unicorns of tomorrow. We aim to become the leading 
                    platform for alternate investment assets and give exponential returns to our investors.
                    </div>
                </div>

            </section>

            {/* *********** */}

            <section className="about-container-two">
                <div className="about-container-2-heading">
                Meet the team that makes it possible
                </div>
                <div className="introductions">


                    <div className="intro-card">
                        <div className="intro-card-left">
                            <img 
                            src="./uploads/abha.jpeg"
                            className="three-people"
                            alt="abha"
                            />
                        </div>
                        <div className="intro-card-right">
                            <span className="names-link">
                                <div className="namess">ABHA MISHRA</div>
                                <div className="designation">Co-founder</div>
                            </span>
                            <span>    
                                <a href="https://www.linkedin.com/in/abha-mishra-040ab3179/">
                                    <img
                                    src="/uploads/linkedin.png"
                                    alt="linkedin"
                                    className="linkedin"
                                    rel="noopener noreferrer"
                                    />
                                </a> 
                            </span>
                            <div className="three-people-intro">
                                Abha has been working with 100s startups since 2019 as an investment banker. She has explored 
                                and experienced every possible nuance about the startup ecosystem and culture since the very 
                                beginning of her career. At AY, she helps & advises startups on their fundraising.
                            </div>
                        </div>
                    </div>

                {/* *********** */}
                
                <div className="intro-card">
                    <div className="intro-card-left">
                        <img 
                        src="./uploads/shiksha.jpeg"
                        className="three-people"
                        alt="shiksha"
                        />
                    </div>
                    <div className="intro-card-right">
                            <span className="names-link">
                                <div className="namess">SHIKSHA MISHRA</div>
                                <div className="designation">Co-founder</div>
                            </span>
                            <span>    
                                <a href="https://www.linkedin.com/in/shiksha-mishra-6a1098228/">
                                    <img
                                    src="/uploads/linkedin.png"
                                    alt="aylogo"
                                    className="linkedin"
                                    rel="noopener noreferrer"
                                    />
                                </a> 
                            </span>
                            <div className="three-people-intro">
                            Shiksha has been helping startups in getting funding for angel investors, VCs and Family 
                            Offices. She has 2+ years of experience in investment baking. At AY, she handholds 
                            founders for their fundraising and help them connect with investors.
                            </div>
                    </div>

                </div>

                {/* *************** */}
                
                
                <div className="intro-card">
                    <div className="intro-card-left">
                        <img 
                        src="./uploads/abha.jpeg"
                        className="three-people"
                        alt="abha"
                        />
                    </div>
                    <div className="intro-card-right">
                            <span className="names-link">
                                <div className="namess">TONY SHELDON</div>
                                <div className="designation">Co-founder</div>
                            </span>
                            <span>    
                                <a href="https://www.linkedin.com/in/tonystevensheldon/">
                                    <img
                                    src="/uploads/linkedin.png"
                                    alt="aylogo"
                                    className="linkedin"
                                    rel="noopener noreferrer"
                                    />
                                </a> 
                            </span>
                            <div className="three-people-intro">
                            Tony is a serial entrepreneur and has helped startups since 2019 by building 
                            communities and helping them fundraise. He is an expert in debt investments 
                            including loans, venture debt and revenue based financing. At AY, he handles tech, 
                            operations and debt investments.
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* ******** */}

            <section className="about-saying">
                <div className="saying">
                "In investing, what is comfortable is rarely profitable."
                </div>
                <div className="author">
                - Robert Arnott
                </div>

            </section>

            <Footer />
            <BottomFooter />
    
        </div>

    )
}

export default AboutUs ;
