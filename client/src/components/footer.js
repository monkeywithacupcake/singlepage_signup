import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer teal">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Company Bio</h5>
                    <p className="grey-text text-lighten-4"> Materialize.css example Footer.</p>


                  </div>
                  <div className="col l3 s12">
                    <h5 className="white-text">Settings</h5>
                    <ul>
                      <li><a className="white-text" href="#!">Link 1</a></li>
                      <li><a className="white-text" href="#!">Link 2</a></li>
                      <li><a className="white-text" href="#!">Link 3</a></li>
                      <li><a className="white-text" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                  <div className="col l3 s12">
                    <h5 className="white-text">Connect</h5>
                    <ul>
                      <li><a className="white-text" href="#!">Link 1</a></li>
                      <li><a className="white-text" href="#!">Link 2</a></li>
                      <li><a className="white-text" href="#!">Link 3</a></li>
                      <li><a className="white-text" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
              </div>
            </footer>
        );
    }
}

export default Footer;
