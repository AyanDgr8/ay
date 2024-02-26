// src/components/routes/Home/Home.js


import React from "react";
import Header from "../Basic/Header/Header";
import './Home.css';

const Home  = () => {
    return(
        <div>
            <Header />
            <section className="home-container-one">
                <div className="home-one-left">
                    <div className="home-left-para-1">
                        <div className="home-left-line-1-1">
                        Invest in startups to get exponential returns
                        </div>
                        <div className="home-left-line-1-2">
                        Now everyone can be a shark!
                        </div>
                        <button className="start-left">
                        Start Investing
                        </button>
                    </div>

                </div>
                <div className="home-one-right">
                    <img src="/uploads/investment.jpg"
                    className="invest-man"
                    alt="invest-man"
                    />
                    

                </div>

            </section>
    
        </div>

    )
}

export default Home ;
