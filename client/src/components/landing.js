import React, { Component } from 'react';
//import { connect } from 'react-redux';



class Landing extends Component {

  render() {
      return (
          <div className="container center">
                  <h4>Be the first to know about developments with gifts-done</h4>

          </div>
    );
  }
}

// let Landing = ({ handleEmailSubmit, values }) =>
// <div className="container center">
//         <h4>Be the first to know about developments with gifts-done</h4>
//         <ContactForm
//         onSubmit={values => handleEmailSubmit(values.EMAIL_SUBMIT)}
//         />
// </div>

// const mapDispatchToProps = (dispatch) => ({
//   handleSearchSubmit: value => dispatch({ type: 'SEARCH_CONTAINER_SUBMIT', payload: value }),
// });
//
// export default connect(null, mapDispatchToProps)(SearchContainer);
//
// class Landing extends Component {
//     render() {
//         return (
//             <div className="container center">
//                     <h4>Be the first to know about developments with gifts-done</h4>
//                     <ContactForm
//                     onSubmit={values => handleEmailSubmit(values.EMAIL_SUBMIT)
//                     />
//             </div>
//         );
//     }
// }


// const mapDispatchToProps = (dispatch) => ({
//   handleEmailSubmit: value => dispatch({ type: 'SUBMIT_EMAIL', payload: value }),
// });
//
// export default connect(null, mapDispatchToProps)(Landing);
export default Landing;
