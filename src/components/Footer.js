import "./footerStyles.css"

import React from 'react';
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone }  from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
<div className="footer-container">
    <div className="left">
<div className="location"> <h4>
    <FaHome size={20} style={{color:"#fff", marginRight:'2rem'}}/>
    SNS PG, Hinjewadi
  Pune, India.
    </h4>
</div>
<div>
  
  </div>


<div className="phone">
  <h4> <FaPhone size={20} style={{color:"#fff", marginRight:'2rem'}}/>
  7385200340</h4>
   


</div>

<div className="email">
  <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:'2rem'}}/>
  rangariarpita1234@gmail.cpm</h4>
  </div>
   

    </div>
    <div className="right">
<h4>About me</h4>
<p>This is Arpita Rangari.
Eager to contribute my 
knowledge, enthusiasm, and 
determination to a dynamic team in the required role .
</p>
<div className="social">

<FaGithub size={20} style={{color:"#fff", marginRight:'2rem'}}/>
<FaLinkedin size={20} style={{color:"#fff", marginRight:'2rem'}}/>
<FaInstagram size={20} style={{color:"#fff", marginRight:'2rem'}}/>




</div>


    </div>




</div>


    </div>
  );
};

export default Footer;