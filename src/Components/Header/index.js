import React, { Component } from 'react';
import Burger from './Burger';

export default class Header extends Component {
	constructor(props) {
	  super(props);
		this.navigate = this.navigate.bind(this);
	}

	shouldComponentUpdate() {
		return false;
	}

	navigate() {
		window.location.hash = 'Home';
	}

	render() {
		return (
			<header className="header">
				<div>
					<h1 onClick={this.navigate}>
						{
							'FIG'.split('').map(letter => {
								return (
									<div 
										onClick={this.navigate}
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