import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';


class Privacy extends Component {

    render() {
        return (
            <div className="main-container">
                <Header />
                <div className="container">
                <h1>Privacy Policy</h1>
                <p>Put your privacy policy here.</p>
                </div>

                <Footer/>
            </div>
        );
    }
}


export default Privacy;
