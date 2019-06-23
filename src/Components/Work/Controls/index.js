import React, { Component } from 'react';
import Up from '../../../img/up.svg';
import Down from '../../../img/down.svg';

export default class Controls extends Component {
  
  shouldComponentUpdate() { return false }

  render() {
  	const { scroll } = this.props;
    return (
      <div className='controls'>
      	<div className='bar' />
      	<button
      		onClick={scroll} 
      		className='control'
      		data-direction='left'>
      		<img src={Up} alt="Go to previous" />
      	</button>
      	<button
      		onClick={scroll} 
      		className='control'
      		data-direction='right'>
      		<img src={Down} alt="Go to next" />
      	</button>
      </div>
    );
  }
}