import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arriveAtScreen, setContactClasses, leaveContact } from '../../Actions/Classes';
import { movePage, enterPage } from '../../Actions/Screen';
import $ from 'jquery';
import ripples from 'ripples';
import Button3D from '../Button3D';
import BackgroundText from '../BackgroundText';

class Contact extends Component {
	constructor(props) {
	  super(props);
		this.sendEmail = this.sendEmail.bind(this);
		this.gitHub = this.gitHub.bind(this);
	}

	componentDidMount() {
		const { arriveAtScreen, setContactClasses } = this.props;
		$('#contact').ripples({
        resolution: 512,
        dropRadius: 10, 
        perturbance: 0.02,
    });
    arriveAtScreen(1000);
		setContactClasses();
	}

	componentWillUnmount() {
		this.props.leaveContact();
		$('#contact').ripples('destroy');
	}

	shouldComponentUpdate({ classes, transDur, moveX }) {
		const curProps = this.props;
		if(classes !== curProps.classes) return true;
		else if(transDur !== curProps.transDur) return true;
		else if(moveX !== curProps.moveX) return true;
		return false;
	}

	sendEmail() {
		window.location.href = "mailto:alexfigliolia@gmail.com?subject=Subject";
	}

	gitHub() {
		window.open('https://github.com/alexfigliolia', '_blank');
	}

	render() {
		const { 
			movePage, 
			enterPage, 
			classes, 
			moveX, 
			transDur 
		} = this.props;
		return (
			<section 
				id="contact"
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
					<div>
						<h2>
							{
								'Contact'.split('').map((letter, i) => {
									return (
										<div
											style={{
												transition: `transform 0.5s ${i/20}s`
											}} 
											key={i}>{letter}</div>
									);
								})
							}
						</h2>
					</div>
					<Button3D 
						text="Call Me"
						function={(null)} />
					<Button3D 
						text="Email Me"
						function={this.sendEmail} />
					<Button3D 
						text="GitHub"
						function={this.gitHub} />
				</div>
			</section>
		);
	}
}

const mSTP = ({ Classes, Screen }) => {
	const { contactClasses } = Classes;
	const { moveX, transDur } = Screen;
	return { classes: contactClasses, moveX, transDur };
}

export default connect(mSTP, { 
	arriveAtScreen,
	setContactClasses, 
	leaveContact,
	movePage, 
	enterPage,
})(Contact);