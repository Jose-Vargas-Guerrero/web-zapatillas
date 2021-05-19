import React from 'react';
import './seccion2.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Seccion2() {
    return (
        <div className="container-fluid" id="seccion2">
            <h1 data-aos="slide-up" className="title-1">The new sneackxr are at home</h1>
            <h2 data-aos="slide-up" className="title-2">Light, resistant and flexible are the words that describe it</h2>
            <h3 data-aos="slide-up" className="title-3">They are perfect for both sports and casual clothing since their design was thought about it,
             they will adapt to the occasion</h3>
            <i data-aos="slide-up" class="fas fa-running"></i>
        </div>
    )
}

export default Seccion2
