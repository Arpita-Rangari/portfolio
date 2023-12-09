import "./HeroimgStyles.css";

import React from 'react';
import IntroImg from "../assets/into-img.jpeg";
import {Link} from "react-router-dom";

const  Heroimg = ()=> {
    return (
        <div className="hero">
            <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"></img>
            </div>
            <div className="content">
<p>
 HI, I'M ARPITA RANGARI   
</p>
<h1> An Aspiring Full Stack Developer</h1>
<div>
<Link to="/project" className="btn">Projects</Link>
<Link to="/contact" className="btn-light">Contact</Link>

</div>

            </div>
        </div>
    );
}

export default Heroimg;