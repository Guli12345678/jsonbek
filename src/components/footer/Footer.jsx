import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="start">
          <div className="upper">
            <h2>Ready to make something kickass?</h2>
            <h3>Let's get on a call.</h3>
          </div>
          <div className="lower">
            <h4>Jsonbek Placeholder.</h4>
            <p>4353 Delaware Avenue, San Francisco, USA</p>
            <p>hi@thefolio.com</p>
          </div>
        </div>
        <div className="footer__items">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Dribble</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Dribble</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Dribble</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
