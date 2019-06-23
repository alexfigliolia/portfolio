import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../../Actions/Classes';
import Burger from './Burger';

class Header extends Component {

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const { navigate } = this.props;
		return (
			<header className="header">
				<div>
					<h1
						data-page="Home"
						onClick={navigate}>
						{
							'FIG'.split('').map(letter => {
								return (
									<div 
										data-page="Home"
										onClick={navigate}
										key={letter}>{letter}</div>
								);
							})
						}
					</h1>
					<Burger />
				</div>
			</header>
		);
	}
}

export default connect(null, { navigate })(Header);