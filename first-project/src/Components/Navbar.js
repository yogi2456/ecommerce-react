import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Upadate Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
