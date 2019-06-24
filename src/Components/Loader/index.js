import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {

  shouldComponentUpdate({ classes }) {
    return classes !== this.props.classes;
  }

  render() {
    return (
      <section
        id='loader' 
        className={this.props.classes}>
        <div>
          <div className='showbox'>
            <div className='svg-container'>
              <svg 
                className='circular' 
                viewBox='25 25 50 50'>
                <circle 
                  className='path' 
                  cx='50' 
                  cy='50' 
                  r='20' 
                  fill='none' 
                  stroke='#fff'
                  strokeWidth='2' 
                  strokeMiterlimit='10' />
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mSTP = ({ Classes: { loaderClasses }}) => {
  return { classes: loaderClasses };
}

export default connect(mSTP)(Loader);