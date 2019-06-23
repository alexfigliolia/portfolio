import React, { Component } from 'react';

export default class BackgroundText extends Component {

	shouldComponentUpdate() { return false }

	render() {
		return (
			<h2>
				{
					this.props.text.split('').map((letter, i) => {
						i += i;
						return (
							<div 
								key={i}
								style={{
									transition: `transform 0.5s ${2 + (i/100)}s, 
									opacity 0.5s ${2 + (i/100)}s, 
									color 0.3s 0s, text-shadow 0.3s 0s`
								}}>{letter}</div>
						);
					})
				}
			</h2>
		);
	}
}