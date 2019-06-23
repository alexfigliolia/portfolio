import React, { Component } from 'react';

export default class Button3D extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rotX: 0,
			rotY: 0,
			bTransDur: 0.5,
			scale: 1,
			boxShadow: 'none'
		}
		this.mouseEnterButton = this.mouseEnterButton.bind(this);
		this.mouseMoveButton = this.mouseMoveButton.bind(this);
		this.mouseLeaveButton = this.mouseLeaveButton.bind(this);
		this.left = null;
		this.top = null;
		this.height = null;
		this.width = null;
		this.mathX = null;
		this.mathY = null;
	}

	shouldComponentUpdate(nextProps, { rotX, rotY, bTransDur, scale, boxShadow }) {
		const curState = this.state;
		if(rotX !== curState.rotX) return true;
		else if(rotY !== curState.rotY) return true;
		else if(bTransDur !== curState.bTransDur) return true;
		else if(scale !== curState.scale) return true;
		else if(boxShadow !== curState.boxShadow) return true;
		return false;
	}

	getCachedTargetData(target) {
		if(!this.left || !this.y || !this.height || !this.width) {
			const { left, top } = target.getBoundingClientRect();
			const { offsetWidth, offsetHeight } = target;
			this.left = left;
			this.top = top;
			this.height = offsetHeight;
			this.width = offsetWidth;
			this.mathX = this.left + (this.width / 2);
			this.mathY = this.top + (this.height / 2);
		}
	}

	getType(type, touches, clientX, clientY) {
		const isMouse = type.substring(0, 5) === 'mouse';
		return {
			y: isMouse ? clientY : touches[0].clientY,
			x: isMouse ? clientX : touches[0].clientX,
		}
	}

	getRotations({ x, y }) {
		let rotX = (this.mathY - y) / 1.75;
		return {
			rotX: rotX > 0 ? rotX+=4 : rotX,
			rotY: (this.mathX - x) / -10,
		}
	}

	setFrame({ rotX, rotY }, duration) {
		this.setState({
			rotX, rotY, bTransDur: `${duration}s`, scale: 1.1,
			boxShadow: `0 14px 28px rgba(0,0,0,0.5), ${rotY* -1.85}px ${rotX}px 10px rgba(0,0,0,0.44)`
		});
	}

	mouseEnterButton({ type, clientX, clientY, target, touches }) {
		this.getCachedTargetData(target);
		this.setFrame(
			this.getRotations(
				this.getType(type, touches, clientX, clientY)
			), 0.5);
	}

	mouseMoveButton({ type, clientX, clientY, target, touches }) {
		this.setFrame(
			this.getRotations(
				this.getType(type, touches, clientX, clientY)
			), 0);
	}

	mouseLeaveButton() {
		this.setState({rotX: 0, rotY: 0, bTransDur: '0.5s', scale: 1, boxShadow: 'none' });
	}

	render() {
		const { text, url, function: func } = this.props;
		const { rotX, rotY, bTransDur, scale, boxShadow } = this.state;
		return (
			<button 
				onClick={func}
				onMouseEnter={this.mouseEnterButton}
				onMouseMove={this.mouseMoveButton}
				onMouseLeave={this.mouseLeaveButton}
				onTouchStart={this.mouseEnterButton}
				onTouchEnd={this.mouseLeaveButton}
				onTouchMove={this.mouseMoveButton}
				style={{
					transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) skew(-5deg) scale(${scale})`,
					transitionDuration: bTransDur,
					boxShadow
				}}
				data-page="Work"
				data-url={url || null}>
				<h3 
					onClick={func} 
					data-page="Work"
					data-url={url || null}>{text}</h3>
			</button>
		);
	}
} 
