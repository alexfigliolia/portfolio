import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';

class Menu extends Component {
	
	shouldComponentUpdate({ menuOpen }) {
		return menuOpen !== this.props.menuOpen;
	}
	
	render() {
		return (
			<section className={this.props.menuOpen ? 'menu menu-show' : 'menu'}>
				<div className="arrow" />
				<div className='links'>
					<Link pageTo="Home" />
					<Link pageTo="Work" />
					<Link pageTo="Contact" />
				</div>
			</section>
		);
	}
}

const mSTP = ({ Classes: { menuOpen }}) => {
	return { menuOpen };
}

export default connect(mSTP)(Menu);