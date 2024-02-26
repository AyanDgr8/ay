// src/components/routes/Basic/BottomFooter/BottomFooter.js


import React from "react";
import { Link } from 'react-router-dom';
import './BottomFooter.css'

const BottomFooter = () =>{
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    return(
        <div>
            <section  className="bottom-footer-first">
                    <Link to="/about" className="last-buttons priv" rel="noopener noreferrer" onClick={scrollToTop}>
                    Privacy Policy
                    </Link>
                    <Link to="/about" className="last-buttons" rel="noopener noreferrer" onClick={scrollToTop}>
                    Risk Of Investment
                    </Link>
                    <Link to="/about" className="last-buttons" rel="noopener noreferrer" onClick={scrollToTop}>
                    Terms & Conditions
                    </Link>

                    <span className="copyrights">Comunev Pvt Ltd • 2023 All Rights Reserved</span>

            </section>
            <section  className="bottom-footer-second">

                <div className="bottom-footer-second-disclaimer">Disclaimer :</div>
                <div className="bottom-footer-second-para">
                    All trademarks and logos or registered trademarks and logos found on this Site or 
                    mentioned herein belong to their respective owners and are solely being used for 
                    informational purposes. Information provided herein has been gathered from public sources. 
                    Comunev Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. 
                    Information presented on this website is for educational purposes only and should not be treated as 
                    legal, financial , or any other form of advice. Comunev Pvt Ltd is not liable for financial or any other 
                    form of loss incurred by the user or any affiliated party on the basis of information provided herein. Comunev 
                    Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities 
                    Contracts Regulation Act, 1956. Comunev Pvt Ltd is not authorized by the capital markets regulator to solicit 
                    investments. The securities traded on these platforms are not traded on any regulated exchange. Comunev Pvt Ltd 
                    also provides that it does not facilitate any online 
                    or offline buying, selling, or trading of securities.<br></br><br></br>
                    This Site will be updated on a regular basis.
                    </div>
                <div></div>
                

            </section>

        </div>
    )
}

export default BottomFooter;