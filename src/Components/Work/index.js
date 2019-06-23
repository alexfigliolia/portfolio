import React, { Component } from 'react';
import { connect } from 'react-redux';  
import PageSwitch from 'pageswitch';
import API from './workApi';
import Slide from './Slide';
import Controls from './Controls';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedIndex: 0 };
		this.pw = null;
		this.scroll = this.scroll.bind(this);
	}

	componentDidMount() {
		const desktop = this.props.width > 957;
  	this.pw = new PageSwitch('slides', {
			duration: 750,
			direction: desktop ? 1 : 0,
	    start: 0,
	    loop: true,
	    ease: 'ease',
	    transition: desktop ? 'flip3d' : 'flip3dY',
			freeze: false,
			mouse: true,
		  mousewheel: true,
			arrowkey: true,
		  autoplay: false,
			interval: false
		});
		this.pw.on('after', () => {
			this.setState({ selectedIndex: this.pw.current });
		});
  }

  shouldComponentUpdate({ height, width, appClasses }, { selectedIndex }) {
  	const curProps = this.props;
  	if(selectedIndex !== this.state.selectedIndex) return true;
  	else if(height !== curProps.height) return true;
  	else if(width !== curProps.width) return true;
  	else if(appClasses !== curProps.appClasses) return true;
  	return false;  
  }

  componentDidUpdate(prevProps) {
  	const { width } = this.props;
  	if(prevProps.width !== width && this.pw) 
  		this.pw.setTransition(width > 957 ? 'flip3d' : 'flip3dY'); 
  }

  componentWillUnmount() {
  	if(this.pw) {
  		this.pw.destroy();
  		this.pw = null;
  	}
  }

  scroll({ target: { dataset: { direction }}}) {
  	direction === 'right' ? this.pw.next() : this.pw.prev();
  }

	render() {
		const { selectedIndex } = this.state;
		const { width, height, appClasses } = this.props; 
		const pageLoaded = appClasses === 'App';
		return (
			<div className='work-wrapper' style={{height, width}}>
				<div style={{ height, width, perspective: '1000px', position: 'relative' }}>
					{ width > 956 && <Controls scroll={this.scroll} /> }
					<section 
						className='work' 
						style={{height, backgroundColor: '#fff'}} 
						id='slides'>
						{
							API.map((obj, i) => {
								return (
									<Slide
										index={i}
										key={i}
										selectedIndex={selectedIndex}
										width={width}
										height={height}
										pageLoaded={pageLoaded}
										{...obj}
										scroll={this.scroll} />
								);
							})
						}
					</section>
				</div>
			</div>
		);
	}
}

const mSTP = ({ Screen, Classes }) => {
	const { height, width } = Screen;
	const { appClasses } = Classes;
	return { height, width, appClasses };
}

export default connect(mSTP)(Work);