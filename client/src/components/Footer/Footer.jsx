import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">

        <div className="col">
                <div className="tittle">About</div>
                <div className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sapiente dolor perspiciatis fugit quam natus numquam beatae, 
                    iure nisi ut sunt reprehenderit tempore ratione deleniti illum nesciunt 
                    assumenda tenetur dolorem quos!
                </div>
             </div>
             <div className="col">
                <div className="tittle">Contact</div>
                <div className="c-item">
                <FaLocationArrow />
                 <div className="text">144/12 Zakir Nagar Okhla New Delhi
                 </div>
                </div>
                <div className="c-item">
                <FaMobileAlt/>
                 <div className="text">PHONE: 00448945</div>
                </div>
                <div className="c-item">
                <FaEnvelope/>
                 <div className="text">EMAIL: fahadjaan207@gmail.com</div>
                </div>
             </div>
             <div className="col">
                <div className="tittle">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluethooth speaker</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theater</div>
                <div className="text">Projectors</div>
                
             </div>
             <div className="col">
                <div className="tittle">Pages</div>
                <div className="text">Home </div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Condition</div>
                <div className="text">Contact Us</div>
             </div>

        </div>
            

             <div className="bottom-bar">
               <div className="bottom-bar-content">
                  <div className="text">
                     JAANSTORE 2023 CREATED BY JAAN
                  </div>
                  <img src={Payment} />
               </div>
             </div>
           

    </footer>
};

export default Footer;
