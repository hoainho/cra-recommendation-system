import React from 'react'
import Navbar from './navbar';
import Slider from './slider';
import AOS from 'aos'
export default function header() {
    AOS.init();
    return (
        <div>
            <Navbar/>
            <Slider/>
            
        </div>
    )
}
