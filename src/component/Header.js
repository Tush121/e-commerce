import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h1>My E-Commerce Dashboard</h1>
            </div>
            <div className="header-right">
                <button className="header-button" onClick={() => alert('Login Clicked')}>Login</button>
                <button className="header-button" onClick={() => alert('Cart Clicked')}>
                    🛒 Cart
                </button>
            </div>
        </div>
    );
};

export default Header;
