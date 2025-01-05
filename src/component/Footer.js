import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <h3>About</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Help</h3>
                <ul>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Consumer Policy</h3>
                <ul>
                    <li>Cancellation & Returns</li>
                    <li>Terms of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Registered Office Address</h3>
                <p>Gurugram</p>
            </div>
        </div>
    );
};

export default Footer;
