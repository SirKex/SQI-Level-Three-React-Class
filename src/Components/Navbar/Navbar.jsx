import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="parentContainer">
                <h2>Logo</h2>

                <div className="d-flex align-items-center gap-5">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Services</a>
                </div>

                <div className="d-flex align-items-center gap-5">
                    <button className="btn btn-outline-success">Sign Up</button>
                    <button className="btn btn-success">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;