import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { updateDimensions, updateMoveX, enterPage, movePage } from './Actions/Screen';
import { enterApp } from './Actions/Classes';
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Loader from './Components/Loader';
import './App.scss';

let Work, Contact;

class App extends Component {
  constructor(props) {
    super(props);
    console.log('I am flattered');
    this.preloaded = null;
    this.updateMoveX = this.updateMoveX.bind(this);
    this.enterPage = this.enterPage.bind(this);
    this.movePage = this.movePage.bind(this);
    this.preload = this.preload.bind(this);
  }

  componentDidMount() {
    const { updateDimensions, enterApp } = this.props;
    window.addEventListener('resize', updateDimensions, true);
    if(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(navigator.userAgent) && window.DeviceOrientationEvent){
      window.addEventListener('deviceorientation', this.updateMoveX, true);
    } 
    document.body.style.height = window.innerHeight;
    document.body.style.width = window.innerWidth;
    // enterApp();
  }

  updateMoveX({ gamma }) {
    const moveX = ((gamma + 90) * 100) / 180;
    if(moveX !== 0 && moveX !== 100) {
      this.props.updateMoveX(moveX);
    }
  }

  shouldComponentUpdate({ page, appClasses, height, width }) {
    const curProps = this.props;
    if(page !== curProps.page) return true;
    else if(appClasses !== curProps.appClasses) return true;
    else if(height !== curProps.height) return true;
    else if(width !== curProps.width) return true;
    return false;
  }

  componentWillUnmount() {
    const { updateDimensions, updateMoveX } = this.props;
    window.removeEventListener('resize', updateDimensions, true);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.DeviceOrientationEvent){
      window.removeEventListener('deviceorientation', updateMoveX, true);
    } 
  }

  preload() {
    let url;
    if(this.props.width >= 670) url = require('./img/wordClouds.png');
    else url = require('./img/wordClouds-small.png');
    this.preloaded = new Image();
    this.preloaded.src = url;
  }

  enterPage(e) {
    if(!window.DeviceOrientationEvent) {
      const { type, clientX, touches } = e;
      const x = type === 'mouseenter' ? clientX : touches[0].clientX;
      this.props.enterPage((x * 100)/window.innerWidth);
    }
  }

  movePage(e) {
    if(!window.DeviceOrientationEvent) {
      const { type, clientX, touches } = e;
      const x = type === 'mouseenter' ? clientX : touches[0].clientX;
      this.props.movePage((x * 100)/window.innerWidth);
    }
  }

  getWork() {
    return lazy(() => import('./Components/Work')); 
  }

  getContact() {
    return lazy(() => import('./Components/Contact')); 
  }

  renderPage(page) {
    switch (page) {
      case 'Work':
        if(Work) return <Work />
        Work = this.getWork();
        return <Work />;
      case 'Contact':
        if(Contact) return (
          <Contact
            enterPage={this.enterPage}
            movePage={this.movePage} /> 
        );
        Contact = this.getContact();
        return (
          <Contact
            enterPage={this.enterPage}
            movePage={this.movePage} /> 
        );
      default:
        return (
          <Home 
            preload={this.preload}
            enterPage={this.enterPage}
            movePage={this.movePage} /> 
        );
    }
  }

  render() {
    const { appClasses, page, height, width } = this.props;
    return (
      <div className={appClasses} style={{ height }}>
        <div className="app-inner">

          <div className='back' style={{ height, width }}>
            <Loader />
          </div>

          <div className='front' style={{ height }}>
            <Header />
            <Suspense fallback={<div>Getting page</div>}>
              { this.renderPage(page) }
            </Suspense>
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = ({ Screen , Classes }) => {
  const { height, width } = Screen;
  const { appClasses, page } = Classes;
  return { height, width, appClasses, page };
}

export default connect(mSTP, { 
  updateDimensions, 
  updateMoveX, 
  enterApp, 
  enterPage, 
  movePage
})(App);