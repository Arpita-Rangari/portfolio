import "./AboutContentStyles.css";
import React from 'react';
import {Link} from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="abut">

<div className="left">
<h1>Who Am I ?</h1>
<p> I have recently completed my PG-Diploma in Advanced Computing
from IACSD with a strong academic 
foundation and passion for software 
industries.Eager to contribute my 
knowledge, enthusiasm, and 
dedication to a dynamic team in 
the required role.</p>
<Link to="/contact">
<button className="btn">Contact</button>

</Link>

</div>

<div className="right">
    
</div>
    </div>
  )
};

export default AboutContent;