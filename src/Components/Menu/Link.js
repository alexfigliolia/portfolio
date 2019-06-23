import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { navigate } from '../../Actions/Classes';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.arr = this.props.pageTo.split("");
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  shouldComponentUpdate({ menuClasses, page }, { hovered }) {
  	const curProps = this.props;
  	if(menuClasses !== curProps.menuClasses) return true;
		else if(hovered !== this.state.hovered) return true;
		else if(page !== curProps.page) return true;
		return false;
	}

	onTouchStart() {
		this.setState({ hovered: true });
	}

	onTouchEnd() {
		this.setState({ hovered: false });
	}

	getLetters(className, d) {
		return (
			this.arr.map((letter, i) => {
				return (
					<div
						key={letter + i}
						className={className}
						style={{
							transitionDelay: (d + (i/20)) + 's'
						}}>{letter}</div>
				);
			})
		);
	}

  render() {
  	const { menuClasses, page, pageTo, navigate } = this.props; 
		const d = menuClasses === "menu" || this.state.hovered ? 0 : 0.3;
    return (
      <div 
				className={page === pageTo ? 'link on-page' : 'link'}
				onTouchStart={this.onTouchStart}
				onTouchEnd={this.onTouchEnd}
				onMouseEnter={this.onTouchStart}
				onMouseLeave={this.onTouchEnd}
				onClick={navigate}  
				data-page={pageTo}>
				{this.getLetters('link-letter', d)}
				<div className='inner'>
					{this.getLetters(null, d)}
				</div>
			</div>
    );
  }
}

const mSTP = ({ Classes }) => {
	const { menuClasses, page } = Classes;
	return { menuClasses, page };
}

export default connect(mSTP, { navigate })(Link);