// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import AboutUs from '../routes/AboutUs/AboutUs';

import './Main.css';

export default function Main(){
    return(
        <>
        <Router>
            <div>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/about" element={<AboutUs />}/>
                </Routes>
            </div>
        </Router>
        </>
    );
}