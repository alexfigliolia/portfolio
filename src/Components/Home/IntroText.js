import React, { Component } from 'react';

export default class IntroText extends Component {
  
	shouldComponentUpdate() {
		return false;
	}

  render() {
  	let inc = 7, inc2 = 0;
    return (
      <div>
				<h2>
					{
						"Full Stack".split('').map((letter, i) => {
							if(letter === ' ') {
								return (
									<div 
										key={i}
										className="space"
										style={{
											transitionDelay: inc/140 + 's'
										}}>&nbsp;&nbsp;</div>
								);
							} else {
								inc-=i;
								return (
									<div 
										key={i}
										style={{
											transitionDelay: inc/140 + 's'
										}}>{letter}</div>
								);
							}
						})
					}
				</h2>
				<h2>
					{
						'Developer'.split('').map((letter, i) => {
							inc2 += i;
							if(letter === ' ') {
								return (
									<div 
										key={i}
										className="space"
										style={{
											transitionDelay: inc2/140 + 's'
										}}>&nbsp;&nbsp;</div>
								);
							} else {
								inc-=i;
								return (
									<div 
										key={i}
										style={{
											transitionDelay: inc2/140 + 's'
										}}>{letter}</div>
								);
							}
						})
					}
				</h2>
			</div>
    );
  }
}