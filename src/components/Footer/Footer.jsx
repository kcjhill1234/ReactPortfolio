import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Info</h4>
            <ui className="list">
              <li>kcjhill1234@msn.com</li>
              <li>West Jordan, UT.</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-md">
            &copy;{new Date().getFullYear()} Kenyatta Profile | Made with React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
