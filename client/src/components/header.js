import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <nav className="default-primary-color">
                <div className="nav-wrapper container">
                    <Link to={"/"} className="brand-logo"> Logo
                    </Link>
                  </div>
              </nav>
        );
    }
}

export default Header;
