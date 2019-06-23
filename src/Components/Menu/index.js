import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';

class Menu extends Component {
	
	shouldComponentUpdate({ classes }) {
		return classes !== this.props.classes;
	}
	
	render() {
		return (
			<section className={this.props.classes}>
				<div className="arrow"></div>
				<div className='links'>
					<Link pageTo="Home" />
					<Link pageTo="Work" />
					<Link pageTo="Contact" />
				</div>
			</section>
		);
	}
}

const mSTP = ({ Classes: { menuClasses }}) => {
	return { classes: menuClasses };
}

export default connect(mSTP)(Menu);