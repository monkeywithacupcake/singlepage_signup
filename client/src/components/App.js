import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header';
import ContactForm from './contactform';
import Thanks from './thanks';
import Footer from './footer';
import Details from './details';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showThanks: false
      };
    }

    submit = values => {
      // print the form values to the console
      console.log(values)
      this.props.submitEmail(values);
      this.setState({ showThanks: true })
    }

    renderContent() {
        if (this.state.showThanks) {
            return (
                <Thanks
                    onBack={() => this.setState({ showThanks: false })}
                />
            );
        }
        return (
            <div className="container center">
                    <h4>Sign Up for Our List</h4>
                    <ContactForm onSubmit={this.submit} />
            </div>
        );
    }
    render() {
        return (
            <div className="main-container">
             <Header />
             <div>{this.renderContent()}</div>
                <Details/>
                <Footer/>
            </div>
        );
    }
}


export default connect(null, actions)(App);
