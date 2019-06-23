import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arriveAtScreen } from '../../Actions/Classes';
import Button3D from '../Button3D';
import Snow from './Snow';
import Left from '../../img/left.svg';
import Right from '../../img/right.svg';

class Slide extends Component {
  constructor(props) {
    super(props);
    const { width, imgSmall, imgLarge } = this.props;
   	this.state = { infoClasses: "info", img: width >= 670 ? imgLarge : imgSmall };
    this.preloaded = false;
    this.switchText = this.switchText.bind(this);
    this.visit = this.visit.bind(this);
  }

  componentDidMount() {
    const { index, arriveAtScreen } = this.props; 
  	if(index === 0) {
      arriveAtScreen(1000);
  		setTimeout(() => { this.refs[0].classList.add('slide-reset'); }, 1500);
  	}
  }

  UNSAFE_componentWillReceiveProps({ width, height, selectedIndex, index, imgSmall, imgLarge }) {
    const curProps = this.props;
  	if(width >= 957 && this.state.infoClasses === "info change-info") {
  		this.setState({ infoClasses: "info" });
  	}
    const { img } = this.state;
    if(width !== curProps.width || height !== curProps.height) {
      if(width >= 670 && img === imgSmall) this.setState({ img: imgLarge });
      else if(width < 670 && img === imgLarge) this.setState({ img: imgSmall });
    }
    if(selectedIndex === index) {
      setTimeout(() => {
        const thisSlide = this.refs[index];
        thisSlide && 
        thisSlide.classList.add('slide-reset');
      }, 1500);
    } else {
      setTimeout(() => {
        const thisSlide = this.refs[index];
        thisSlide && thisSlide.classList.remove('slide-reset');
        thisSlide && this.setState({ infoClasses: "info" });
      }, 1500);
    }
  }

  shouldComponentUpdate({ index, selectedIndex, width, height, pageLoaded }, { infoClasses, img }) {
  	const curProps = this.props;
    const curState = this.state;
  	if(infoClasses !== curState.infoClasses) return true;
  	else if(selectedIndex !== curProps.selectedIndex) return true;
  	else if(width !== curProps.width) return true;
    else if(height !== curProps.height) return true;
    else if(pageLoaded !== curProps.pageLoaded) return true;
    else if(img !== curState.img) return true;
  	return false;
  }

  visit(e) {
    window.open(e.target.dataset.url, '_blank');
  }

  switchText() {
  	this.setState(({ infoClasses }) => ({
  		infoClasses: infoClasses === "info" ? "info change-info" : "info"
  	}));
  }

  render() {
  	const { 
      index, 
      selectedIndex,
      name, 
      width, 
      height, 
      url, 
      p1, 
      p2, 
      pageLoaded, 
      scroll, 
    } = this.props;
    const { img, infoClasses, imgClasses, imgStyles } = this.state;
    const isSelected = selectedIndex === index;
    return (
    	<div
				ref={index}
				className={isSelected && pageLoaded ? "project is-selected" : "project"}
        id="slide"
				style={{ height, width }}>
        <Snow show={isSelected && index === 9} />
				<div 
          className="center-stuff"
          style={{ height, width }}>
          <img 
            ref="bg"
            className={imgClasses}
            src={img} 
            alt={name}
            onLoad={this.imgLoaded}
            style={imgStyles} />
          <div>
            <h2>
              {
                name.split('').map((letter, i) => {
                  return (letter === ' ') ? <div key={i}>&nbsp;&nbsp;&nbsp;</div> : <div style={{transitionDelay: (0.3 + i/20) + 's'}} key={i}>{letter}</div>
                })
              }
            </h2>
            <div className={infoClasses}>
              <p>
                {p1}
                <span onClick={this.switchText}>&nbsp;More Info</span>
              </p>
              <p className={width < 957 ? "text-switch" : ""}>
                {p2}
                <span onClick={this.switchText}>&nbsp;Back</span>
              </p>
            </div>
            <div className='slide-buttons'>
              <button 
                className='scroller'
                onClick={scroll}
                data-direction='left'>
                <img
                  alt="View previous project"
                  style={{ marginLeft: '0%', marginRight: '10%'}} 
                  src={Left} />
              </button>
              <Button3D 
                url={url}
                text="VISIT"
                function={this.visit} />
              <button 
                className='scroller'
                onClick={scroll}
                data-direction='right'>
                <img
                  alt="View next project"
                  style={{ marginLeft: '10%', marginRight: '0%'}} 
                  src={Right} />
              </button>
            </div>
          </div>
        </div>
			</div>
    );
  }
}

export default connect(null, { arriveAtScreen })(Slide);
