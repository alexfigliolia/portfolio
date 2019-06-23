import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	arriveAtScreen,
	setHomeClasses, 
	leaveHome
} from '../../Actions/Classes';
import $ from 'jquery';
import ripples from 'ripples';
import Button3D from '../Button3D';
import BackgroundText from '../BackgroundText';
import IntroText from './IntroText';

class Home extends Component {
	constructor(props) {
	  super(props);
		this.navigate = this.navigate.bind(this);
	}
	
	componentDidMount() {
		const { arriveAtScreen, setHomeClasses, preload } = this.props;
		$('#home').ripples({
        resolution: 512,
        dropRadius: 10, 
        perturbance: 0.02,
    });
    preload();
    arriveAtScreen(1000);
		setHomeClasses();
	}

	componentWillUnmount() {
		this.props.leaveHome();
		$('#home').ripples('destroy');
	}

	shouldComponentUpdate({ classes, transDur, moveX }) {
		const curProps = this.props;
		if(classes !== curProps.classes) return true;
		else if(transDur !== curProps.transDur) return true;
		else if(moveX !== curProps.moveX) return true;
		return false;
	}

	navigate() {
		window.location.hash = 'Work';
	}

	render() {
		const { 
			classes, 
			transDur,
			moveX,
			events,
		} = this.props;
		return (
			<section 
				id="home"
				{...events}
				className={classes}
				style={{
					backgroundPosition: moveX ? `${moveX}% 100%` : '50% 100%',
					transition: `background-position ${transDur} 0s, transform 0.5s 0s`
				}}>
				<BackgroundText text="Alex" />
				<BackgroundText text="Figliolia" />
				<div>
					<IntroText />
					<Button3D 
						text="Work"
						function={this.navigate} />
				</div>
			</section>
		);
	}
}

const mSTP = ({ Classes, Screen }) => {
	const { homeClasses } = Classes;
	const { transDur, moveX } = Screen;
	return { classes: homeClasses, moveX, transDur };
}

export default connect(mSTP, { 
	arriveAtScreen,
	setHomeClasses, 
	leaveHome
})(Home);
