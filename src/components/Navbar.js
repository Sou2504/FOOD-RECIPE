import React from "react";
import logo from "../images/food-logo.avif";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <Link to='/' className="navbar-brand">
                <img src={logo} width="190px" height="70px"/>
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
                <ul className="navbar-nav">
                    <li className="navbar-items">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                
        
                    <li className="navbar-items">
                        <Link to="/recipes" className="nav-link">Recipes</Link>
                    </li>
                </ul>
            
            </div>

        </nav>
    )
}

export default Navbar;