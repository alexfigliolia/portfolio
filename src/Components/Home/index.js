import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	arriveAtScreen,
	setHomeClasses, 
	leaveHome, 
	navigate 
} from '../../Actions/Classes';
import { movePage, enterPage } from '../../Actions/Screen';
import $ from 'jquery';
import ripples from 'ripples';
import Button3D from '../Button3D';
import BackgroundText from '../BackgroundText';
import IntroText from './IntroText';

class Home extends Component {
	
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

	render() {
		const { 
			movePage, 
			enterPage, 
			classes, 
			transDur, 
			navigate, 
			moveX 
		} = this.props;
		return (
			<section 
				id="home"
				onMouseMove={movePage}
				onMouseEnter={enterPage}
				onTouchMove={movePage}
				onTouchStart={enterPage}
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
						function={navigate} />
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
	leaveHome, 
	navigate,
	movePage, 
	enterPage,
})(Home);
