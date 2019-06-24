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
        <ul className='spinner'>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </section>
    );
  }
}

const mSTP = ({ Classes: { loaderClasses }}) => {
  return { classes: loaderClasses };
}

export default connect(mSTP)(Loader);