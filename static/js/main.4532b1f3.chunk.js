(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var a=function(){return{type:"UPDATE_DIMENSIONS"}},r=function(e){return{type:"UPDATE_MOVE_X",moveX:e}},o=function(e){return{type:"MOVE_PAGE",moveX:e}},s=function(e){return{type:"MOVE_PAGE",moveX:e}}},16:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(1),r=n(2),o=n(4),s=n(3),i=n(5),c=n(0),u=n.n(c),l=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return u.a.createElement("h2",null,this.props.text.split("").map(function(e,t){return t+=t,u.a.createElement("div",{key:t,style:{transition:"transform 0.5s ".concat(2+t/100,"s, \n\t\t\t\t\t\t\t\t\topacity 0.5s ").concat(2+t/100,"s, \n\t\t\t\t\t\t\t\t\tcolor 0.3s 0s, text-shadow 0.3s 0s")}},e)}))}}]),t}(c.Component)},19:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(1),r=n(2),o=n(4),s=n(3),i=n(7),c=n(5),u=n(0),l=n.n(u),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={rotX:0,rotY:0,bTransDur:.5,scale:1,boxShadow:"none"},n.mouseEnterButton=n.mouseEnterButton.bind(Object(i.a)(n)),n.mouseMoveButton=n.mouseMoveButton.bind(Object(i.a)(n)),n.mouseLeaveButton=n.mouseLeaveButton.bind(Object(i.a)(n)),n.left=null,n.top=null,n.height=null,n.width=null,n.mathX=null,n.mathY=null,n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=t.rotX,a=t.rotY,r=t.bTransDur,o=t.scale,s=t.boxShadow,i=this.state;return n!==i.rotX||(a!==i.rotY||(r!==i.bTransDur||(o!==i.scale||s!==i.boxShadow)))}},{key:"getCachedTargetData",value:function(e){if(!this.left||!this.y||!this.height||!this.width){var t=e.getBoundingClientRect(),n=t.left,a=t.top,r=e.offsetWidth,o=e.offsetHeight;this.left=n,this.top=a,this.height=o,this.width=r,this.mathX=this.left+this.width/2,this.mathY=this.top+this.height/2}}},{key:"getType",value:function(e,t,n,a){var r="mouse"===e.substring(0,5);return{y:r?a:t[0].clientY,x:r?n:t[0].clientX}}},{key:"getRotations",value:function(e){var t=e.x,n=e.y,a=(this.mathY-n)/1.75;return{rotX:a>0?a+=4:a,rotY:(this.mathX-t)/-10}}},{key:"setFrame",value:function(e,t){var n=e.rotX,a=e.rotY;this.setState({rotX:n,rotY:a,bTransDur:"".concat(t,"s"),scale:1.1,boxShadow:"0 14px 28px rgba(0,0,0,0.5), ".concat(-1.85*a,"px ").concat(n,"px 10px rgba(0,0,0,0.44)")})}},{key:"mouseEnterButton",value:function(e){var t=e.type,n=e.clientX,a=e.clientY,r=e.target,o=e.touches;this.getCachedTargetData(r),this.setFrame(this.getRotations(this.getType(t,o,n,a)),.5)}},{key:"mouseMoveButton",value:function(e){var t=e.type,n=e.clientX,a=e.clientY,r=(e.target,e.touches);this.setFrame(this.getRotations(this.getType(t,r,n,a)),0)}},{key:"mouseLeaveButton",value:function(){this.setState({rotX:0,rotY:0,bTransDur:"0.5s",scale:1,boxShadow:"none"})}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.url,a=e.function,r=this.state,o=r.rotX,s=r.rotY,i=r.bTransDur,c=r.scale,u=r.boxShadow;return l.a.createElement("button",{onClick:a,onMouseEnter:this.mouseEnterButton,onMouseMove:this.mouseMoveButton,onMouseLeave:this.mouseLeaveButton,onTouchStart:this.mouseEnterButton,onTouchEnd:this.mouseLeaveButton,onTouchMove:this.mouseMoveButton,style:{transform:"rotateX(".concat(o,"deg) rotateY(").concat(s,"deg) skew(-5deg) scale(").concat(c,")"),transitionDuration:i,boxShadow:u},"data-page":"Work","data-url":n||null},l.a.createElement("h3",{onClick:a,"data-page":"Work","data-url":n||null},t))}}]),t}(u.Component)},25:function(e,t,n){e.exports=n.p+"static/media/wordClouds.f0afd889.png"},26:function(e,t,n){e.exports=n.p+"static/media/wordClouds-small.bfdc87f3.png"},27:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),s=n.n(o),i=n(14),c=n(12),u=n(6),l=n(23),p=n(1),h=n(2),d=n(4),m=n(3),v=n(7),g=n(5),f=n(10),E=n(8),b=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.classes!==this.props.classes}},{key:"render",value:function(){var e=this.props,t=e.toggleBurger,n=e.classes;return s.a.createElement("div",{id:"burg",onClick:t},s.a.createElement("div",{id:"hamburger",className:n},s.a.createElement("div",{id:"top"}),s.a.createElement("svg",{id:"svb",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64",xmlSpace:"preserve"},s.a.createElement("path",{id:"circle",fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M16,32h32c0,0,11.723-0.306,10.75-11 c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32 c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"})),s.a.createElement("div",{id:"bottom1"})))}}]),t}(o.Component),O=Object(u.b)(function(e){return{classes:e.Classes.burgerClasses}},{toggleBurger:E.h})(b),y=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props.navigate;return s.a.createElement("header",{className:"header"},s.a.createElement("div",null,s.a.createElement("h1",{"data-page":"Home",onClick:e},"FIG".split("").map(function(t){return s.a.createElement("div",{"data-page":"Home",onClick:e,key:t},t)})),s.a.createElement(O,null)))}}]),t}(o.Component),C=Object(u.b)(null,{navigate:E.e})(y),j=n(11),w=n.n(j),T=(n(24),n(19)),k=n(16),A=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=7,t=0;return s.a.createElement("div",null,s.a.createElement("h2",null,"Full Stack".split("").map(function(t,n){return" "===t?s.a.createElement("div",{key:n,className:"space",style:{transitionDelay:e/140+"s"}},"\xa0\xa0"):(e-=n,s.a.createElement("div",{key:n,style:{transitionDelay:e/140+"s"}},t))})),s.a.createElement("h2",null,"Developer".split("").map(function(n,a){return t+=a," "===n?s.a.createElement("div",{key:a,className:"space",style:{transitionDelay:t/140+"s"}},"\xa0\xa0"):(e-=a,s.a.createElement("div",{key:a,style:{transitionDelay:t/140+"s"}},n))})))}}]),t}(o.Component),D=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.arriveAtScreen,n=e.setHomeClasses,a=e.preload;w()("#home").ripples({resolution:512,dropRadius:10,perturbance:.02}),a(),t(1e3),n()}},{key:"componentWillUnmount",value:function(){this.props.leaveHome(),w()("#home").ripples("destroy")}},{key:"shouldComponentUpdate",value:function(e){var t=e.classes,n=e.transDur,a=e.moveX,r=this.props;return t!==r.classes||(n!==r.transDur||a!==r.moveX)}},{key:"render",value:function(){var e=this.props,t=e.movePage,n=e.enterPage,a=e.classes,r=e.transDur,o=e.navigate,i=e.moveX;return s.a.createElement("section",{id:"home",onMouseMove:t,onMouseEnter:n,onTouchMove:t,onTouchStart:n,className:a,style:{backgroundPosition:i?"".concat(i,"% 100%"):"50% 100%",transition:"background-position ".concat(r," 0s, transform 0.5s 0s")}},s.a.createElement(k.a,{text:"Alex"}),s.a.createElement(k.a,{text:"Figliolia"}),s.a.createElement("div",null,s.a.createElement(A,null),s.a.createElement(T.a,{text:"Work",function:o})))}}]),t}(o.Component),S=Object(u.b)(function(e){var t=e.Classes,n=e.Screen,a=t.homeClasses,r=n.transDur;return{classes:a,moveX:n.moveX,transDur:r}},{arriveAtScreen:E.a,setHomeClasses:E.g,leaveHome:E.d,navigate:E.e,movePage:f.b,enterPage:f.a})(D),P=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={hovered:!1},n.arr=n.props.pageTo.split(""),n.onTouchStart=n.onTouchStart.bind(Object(v.a)(n)),n.onTouchEnd=n.onTouchEnd.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=e.menuClasses,a=e.page,r=t.hovered,o=this.props;return n!==o.menuClasses||(r!==this.state.hovered||a!==o.page)}},{key:"onTouchStart",value:function(){this.setState({hovered:!0})}},{key:"onTouchEnd",value:function(){this.setState({hovered:!1})}},{key:"getLetters",value:function(e,t){return this.arr.map(function(n,a){return s.a.createElement("div",{key:n+a,className:e,style:{transitionDelay:t+a/20+"s"}},n)})}},{key:"render",value:function(){var e=this.props,t=e.menuClasses,n=e.page,a=e.pageTo,r=e.navigate,o="menu"===t||this.state.hovered?0:.3;return s.a.createElement("div",{className:n===a?"link on-page":"link",onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onMouseEnter:this.onTouchStart,onMouseLeave:this.onTouchEnd,onClick:r,"data-page":a},this.getLetters("link-letter",o),s.a.createElement("div",{className:"inner"},this.getLetters(null,o)))}}]),t}(o.Component),M=Object(u.b)(function(e){var t=e.Classes;return{menuClasses:t.menuClasses,page:t.page}},{navigate:E.e})(P),L=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.classes!==this.props.classes}},{key:"render",value:function(){return s.a.createElement("section",{className:this.props.classes},s.a.createElement("div",{className:"arrow"}),s.a.createElement("div",{className:"links"},s.a.createElement(M,{pageTo:"Home"}),s.a.createElement(M,{pageTo:"Work"}),s.a.createElement(M,{pageTo:"Contact"})))}}]),t}(o.Component),_=Object(u.b)(function(e){return{classes:e.Classes.menuClasses}})(L),X=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.classes!==this.props.classes}},{key:"render",value:function(){return s.a.createElement("div",{id:"loader",className:this.props.classes},s.a.createElement("div",{className:"profile-main-loader"},s.a.createElement("div",{className:"loads"},s.a.createElement("svg",{className:"svg",version:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},s.a.createElement("g",{className:"qp-circular-loader"},s.a.createElement("path",{className:"qp-circular-loader-path",fill:"none",d:"M 14,1.5 A 12.5,12.5 0 1 1 1.5,14",strokeWidth:"1.5",stroke:"#fff",strokeLinecap:"round"}))))))}}]),t}(o.Component),N=Object(u.b)(function(e){return{classes:e.Classes.loaderClasses}})(X),x=(n(36),function(e){function t(e){var n;return Object(p.a)(this,t),n=Object(d.a)(this,Object(m.a)(t).call(this,e)),console.log("I am flattered"),n.preloaded=null,n.updateMoveX=n.updateMoveX.bind(Object(v.a)(n)),n.enterPage=n.enterPage.bind(Object(v.a)(n)),n.movePage=n.movePage.bind(Object(v.a)(n)),n.preload=n.preload.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateDimensions;e.enterApp;window.addEventListener("resize",t,!0),/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(navigator.userAgent)&&window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",this.updateMoveX,!0),document.body.style.height=window.innerHeight,document.body.style.width=window.innerWidth}},{key:"updateMoveX",value:function(e){var t=100*(e.gamma+90)/180;0!==t&&100!==t&&this.props.updateMoveX(t)}},{key:"shouldComponentUpdate",value:function(e){var t=e.page,n=e.appClasses,a=e.height,r=e.width,o=this.props;return t!==o.page||(n!==o.appClasses||(a!==o.height||r!==o.width))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.updateDimensions,n=e.updateMoveX;window.removeEventListener("resize",t,!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",n,!0)}},{key:"preload",value:function(){var e;e=this.props.width>=670?n(25):n(26),this.preloaded=new Image,this.preloaded.src=e}},{key:"enterPage",value:function(e){if(!window.DeviceOrientationEvent){var t=e.type,n=e.clientX,a=e.touches,r="mouseenter"===t?n:a[0].clientX;this.props.enterPage(100*r/window.innerWidth)}}},{key:"movePage",value:function(e){if(!window.DeviceOrientationEvent){var t=e.type,n=e.clientX,a=e.touches,r="mouseenter"===t?n:a[0].clientX;this.props.movePage(100*r/window.innerWidth)}}},{key:"getWork",value:function(){return Object(o.lazy)(function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,64))})}},{key:"getContact",value:function(){return Object(o.lazy)(function(){return n.e(4).then(n.bind(null,63))})}},{key:"renderPage",value:function(e){switch(e){case"Work":return a?s.a.createElement(a,null):(a=this.getWork(),s.a.createElement(a,null));case"Contact":return r?s.a.createElement(r,{enterPage:this.enterPage,movePage:this.movePage}):(r=this.getContact(),s.a.createElement(r,{enterPage:this.enterPage,movePage:this.movePage}));default:return s.a.createElement(S,{preload:this.preload,enterPage:this.enterPage,movePage:this.movePage})}}},{key:"render",value:function(){var e=this.props,t=e.appClasses,n=e.page,a=e.height,r=e.width;return s.a.createElement("div",{className:t,style:{height:a}},s.a.createElement("div",{className:"app-inner"},s.a.createElement("div",{className:"back",style:{height:a,width:r}},s.a.createElement(N,null)),s.a.createElement("div",{className:"front",style:{height:a}},s.a.createElement(C,null),s.a.createElement(o.Suspense,{fallback:s.a.createElement("div",null,"Getting page")},this.renderPage(n)),s.a.createElement(_,null))))}}]),t}(o.Component)),R=Object(u.b)(function(e){var t=e.Screen,n=e.Classes;return{height:t.height,width:t.width,appClasses:n.appClasses,page:n.page}},{updateDimensions:f.c,updateMoveX:f.d,enterApp:E.b,enterPage:f.a,movePage:f.b})(x),B={height:window.innerHeight,width:window.innerWidth,moveX:null,transDur:"0s"},W={appClasses:"App App-drop App-rotate",burgerClasses:"hamburglar is-open",burgerToggle:!0,menuClasses:"menu",loaderClasses:"loader loader-show",homeClasses:"home",contactClasses:"home contact",pastInitLoad:!1,page:"Home"},H=Object(c.c)({Screen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MOVE_X":return Object.assign({},e,{moveX:t.moveX});case"UPDATE_DIMENSIONS":var n=window,a=n.innerHeight,r=n.innerWidth;return function(e,t){for(var n=0;n<e.length;n++)e[n]&&(e[n].css("height",t+"px"),e[n].find("canvas").prop("height",t),e[n].ripples({resolution:512,dropRadius:10,perturbance:.02}))}([w()("#home"),w()("#contact")],a),Object.assign({},e,{height:a,width:r});case"MOVE_PAGE":return Object.assign({},e,{moveX:t.moveX,transDur:"0s"});case"ENTER_PAGE":return Object.assign({},e,{moveX:t.moveX,transDur:"0.5s"});default:return e}},Classes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FACE_FORWARD":return Object.assign({},e,{appClasses:"App App-drop",loaderClasses:"loader"});case"FILL_SCREEN":return Object.assign({},e,{appClasses:"App",pastInitLoad:!!t.loaded||e.pastInitLoad});case"ENTER_HOME":return Object.assign({},e,{homeClasses:"home home-show"});case"RESET_HOME_DELAYS":return Object.assign({},e,{homeClasses:"home home-show home-reset-delays"});case"LEAVE_HOME":return Object.assign({},e,{homeClasses:"home"});case"ENTER_CONTACT":return Object.assign({},e,{contactClasses:"home contact contact-show"});case"RESET_CONTACT_DELAYS":return Object.assign({},e,{contactClasses:"home contact contact-show contact-reset-delays"});case"LEAVE_CONTACT":return Object.assign({},e,{contactClasses:"home contact"});case"TOGGLE_BURGER":var n=e.burgerClasses,a=e.burgerToggle,r=e.menuClasses;return Object.assign({},e,{burgerToggle:!a,burgerClasses:"hamburglar is-closed"===n?"hamburglar is-open":"hamburglar is-closed",menuClasses:"menu"===r?"menu menu-show":"menu"});case"SCALE_OUT":return Object.assign({},e,{appClasses:"App App-drop"});case"ROTATE_APP":return Object.assign({},e,{appClasses:"App App-drop App-rotate"});case"SHOW_LOADER":return Object.assign({},e,{loaderClasses:"loader loader-show"});case"HIDE_LOADER":return Object.assign({},e,{loaderClasses:"loader"});case"SET_PAGE":return Object.assign({},e,{page:t.page});case"LOADED":return Object.assign({},e,{pastInitLoad:!0});default:return e}}}),U=Object(c.d)(H,Object(c.a)(l.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(i.render)(s.a.createElement(function(){return s.a.createElement(u.a,{store:U},s.a.createElement(R,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"g",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"h",function(){return c}),n.d(t,"e",function(){return u}),n.d(t,"a",function(){return l});var a=function(){return function(e){setTimeout(function(){e({type:"FACE_FORWARD"}),setTimeout(function(){e(r()),setTimeout(function(){return e({type:"FILL_SCREEN",loaded:!0})},600)},400)},1e3)}},r=function(){return function(e){setTimeout(function(){return e({type:"ENTER_HOME"})},2e3),setTimeout(function(){return e({type:"RESET_HOME_DELAYS"})},2500)}},o=function(){return function(e){setTimeout(function(){return e({type:"ENTER_CONTACT"})},2e3),setTimeout(function(){return e({type:"RESET_CONTACT_DELAYS"})},2500)}},s=function(){return{type:"LEAVE_HOME"}},i=function(){return{type:"LEAVE_CONTACT"}},c=function(){return{type:"TOGGLE_BURGER"}},u=function(e){return function(t,n){var a=e.target.dataset.page,r=n().Classes,o=r.page,s=r.burgerToggle?0:800;s>0&&t(c()),a!==o&&(setTimeout(function(){return t({type:"SCALE_OUT"})},s),setTimeout(function(){return t({type:"ROTATE_APP"})},s+750),setTimeout(function(){return t({type:"SHOW_LOADER"})},s+900),setTimeout(function(){return t({type:"SET_PAGE",page:a})},s+1500))}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){t({type:"LOADED"}),setTimeout(function(){return t({type:"SCALE_OUT"})},e),setTimeout(function(){return t({type:"HIDE_LOADER"})},e+200),setTimeout(function(){return t({type:"FILL_SCREEN"})},e+750)}}}},[[27,1,2]]]);
//# sourceMappingURL=main.4532b1f3.chunk.js.map