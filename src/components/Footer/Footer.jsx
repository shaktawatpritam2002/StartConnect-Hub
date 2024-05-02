import React from "react";
import styles from "./footer.module.css";
import sharkUpLogo from "../../data/LogoName.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footerWrapper}`}>
        <div className={`${styles.footerWrapperOne}`}>
          <div className={`${styles.imageWrapper}`}>
            <img
              className={`${styles.cover}`}
              src={sharkUpLogo}
              alt="StartConnectHub Logo"
            />
          </div>
          <div className={`${styles.companyContact}`}>
            <h5>Address:</h5>
            <p> Mumbai-Agra National Highway, Guna, Madhya Pradesh - 473226</p>
          </div>
          <div className={`${styles.companyContact}`}>
            <h5>Contact Us:</h5>
            <p> 9988XXXXXX</p>
          </div>
          <div className={`${styles.companyContact}`}>
            <h5>Email:</h5>
            <p> xxyyzz@startconnecthub.com</p>
          </div>
        </div>
        <div className={`${styles.footerWrapperTwo}`}>
          {/* <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutus">About us</a></li>
            <li><a href="#objective">Objective</a></li>
            <li><a href="#investors">Investors</a></li>
            <li><a href="#startups">Start Ups</a></li>
          </ul> */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/objectives">Objective</Link></li>
            <li><Link to="/investors">Investors</Link></li>
            <li><Link to="/startup">Start Ups</Link></li>
          </ul>
        </div>
        <div className={`${styles.footerWrapperThree}`}>
          <button>
            <span className={`${styles.socialMedia}`}>
              <BsFacebook />
            </span>
            <span className={`${styles.socialMediaName}`}>Facebook</span>
          </button>
          <button>
            <span className={`${styles.socialMedia}`}>
              <BsInstagram />
            </span>
            <span className={`${styles.socialMediaName}`}>Instagram</span>
          </button>
          <button>
            <span className={`${styles.socialMedia}`}>
              <BsTwitter />
            </span>
            <span className={`${styles.socialMediaName}`}>Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
