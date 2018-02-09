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

// <a href="gifts-done.com" id="logo-container" className="brand-logo">
//  <img src={LogoImg} alt="gifts-done logo"/>
//
// </a>
// <div className="section no-pad-bot">
//   <div className="container row center">
//   <Link to={"/"}>
//     <img className="responsive-img" src={NameImg} alt="gifts-done"/>
//     </Link>
//     <div className="row center">
//       <h5 className="header col s12 light">Saving you from late or never with custom curated gifts sent on time to your list </h5>
//     </div>
//  </div>
// </div>
