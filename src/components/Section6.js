import React from "react";
import { Link } from "react-router-dom";

export default function Section6() {
  return (
    <div className="section footer section-6">
      <div className="section-inner footer-inner">
        <div className="footer-sec-1">
          <div className="footer-contact">
            <Link to="/">Questions? Contact Us</Link>
          </div>
          <div className="footer-faq">
            <Link to="/">FAQ</Link>
          </div>
          <div className="footer-investor">
            <Link to="/">Investor Relations</Link>
          </div>
          <div className="footer-privacy">
            <Link to="/">Privacy</Link>
          </div>
          <div className="footer-speed">
            <Link to="/">Speed Test</Link>
          </div>
          <div className="footer-location">
            <Link to="/">Netflix Pakistan</Link>
          </div>
        </div>
        <div className="footer-sec-1">
          <div className="footer-faq">
            <Link to="/">Help Center</Link>
          </div>
          <div className="footer-investor">
            <Link to="/">Jobs</Link>
          </div>
          <div className="footer-privacy">
            <Link to="/">Cookie Preference</Link>
          </div>
          <div className="footer-speed">
            <Link to="/">Legal Notices</Link>
          </div>
        </div>
        <div className="footer-sec-1  footer-seclast-sec">
          <div className="footer-faq">
            <Link to="/">Account</Link>
          </div>
          <div className="footer-privacy">
            <Link to="/">Privacy</Link>
          </div>
          <div className="footer-speed">
            <Link to="/">Corporate Information</Link>
          </div>
          <div className="footer-investor">
            <Link to="/onlyon">Only On Netflix</Link>
          </div>
        </div>
        <div className="footer-sec-1 footer-last-sec">
          <div className="footer-faq">
            <Link to="/">Media Center</Link>
          </div>
          <div className="footer-investor">
            <Link to="/">Terms Of Use</Link>
          </div>
          <div className="footer-privacy">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
