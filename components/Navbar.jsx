import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbarLink">
                <img 
                    className="navbar-icon" 
                    src="/Bangalore-icon.png" 
                    alt="bangalore.wiki Icon"
                />
                <h2>bangalore.wiki</h2>
            </a>
        </nav>
    );
};

export default Navbar;