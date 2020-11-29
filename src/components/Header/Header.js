import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Web-Dev Online Academy</h1>
            <nav>
                <a href="/catagories">Catagories</a>
                <a href="/course">Courses</a>
                <a href="/order">Order Review</a>
            </nav>
        </div>
    );
};

export default Header;