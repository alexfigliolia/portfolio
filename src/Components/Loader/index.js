import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {

  shouldComponentUpdate({ classes }) {
    return classes !== this.props.classes;
  }

  render() {
    return (
      <div 
        id='loader' 
        className={this.props.classes}>
        <div className='profile-main-loader'>
          <div className='loads'>
            <svg 
              className='svg'
              version='1' 
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 28 28'>
              <g className='qp-circular-loader'>
                <path 
                  className='qp-circular-loader-path' 
                  fill='none' 
                  d='M 14,1.5 A 12.5,12.5 0 1 1 1.5,14' 
                  strokeWidth='1.5'
                  stroke='#fff'
                  strokeLinecap='round'></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = ({ Classes: { loaderClasses }}) => {
  return { classes: loaderClasses };
}

export default connect(mSTP)(Loader);