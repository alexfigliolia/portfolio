(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{38:function(e,t,n){!function(t,n,i){"use strict";var s=0,r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(e){var t=+new Date,n=Math.max(1e3/60,1e3/60-(t-s));return s=t+n,setTimeout(e,n)},a=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame||t.mozCancelRequestAnimationFrame||t.msCancelRequestAnimationFrame||clearTimeout,o=t.document,l=o.createElement("div").style,h=function(){for(var e,t="-webkit- -moz- -o- -ms-".split(" ");e=t.shift();)if(X(e+"transform")in l)return e;return""}(),c=E("opacity"),p=E("transform"),u=E("perspective"),d=E("transform-style"),f=E("transform-origin"),y=E("backface-visibility"),v=d&&(l[d]="preserve-3d","preserve-3d"==l[d]),m=Object.prototype.toString,g=[].slice,b={},x={},w={click:4,mousewheel:5,dommousescroll:5,keydown:6},N={2:"touch",3:"pen",4:"mouse",pen:"pen"},T=[],I=[],M=(function(){var e={},t={start:1,down:1,move:2,end:3,up:3,cancel:3};S("mouse touch pointer MSPointer-".split(" "),function(n){var i=/pointer/i.test(n)?"pointer":n;e[i]=e[i]||{},N[i]=i,S(t,function(t,s){var r=X(n+t);e[i][r]=s,x[r.toLowerCase()]=i,w[r.toLowerCase()]=s,1==s?T.push(r):I.push(r)})})}(),{touch:{},pointer:{},mouse:{}}),k={linear:function(e,t,n,i){return n*e/i+t},ease:function(e,t,n,i){return-n*((e=e/i-1)*e*e*e-1)+t},"ease-in":function(e,t,n,i){return n*(e/=i)*e*e+t},"ease-out":function(e,t,n,i){return n*((e=e/i-1)*e*e+1)+t},"ease-in-out":function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},bounce:function(e,t,n,i){return(e/=i)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t}},C={fade:function(e,t,n,i){c?(e.style.opacity=1-Math.abs(t),n&&(n.style.opacity=Math.abs(t))):(e.style.filter="alpha(opacity="+100*(1-Math.abs(t))+")",n&&(n.style.filter="alpha(opacity="+100*Math.abs(t)+")"))}};function z(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?b[m.call(e)]||"object":typeof e}function X(e){return(e+"").replace(/^-ms-/,"ms-").replace(/-([a-z]|[0-9])/gi,function(e,t){return(t+"").toUpperCase()})}function E(e){var t=X(e),n=X(h+t);return t in l&&t||n in l&&n||""}function D(e){return"function"==z(e)}function S(e,t){if(function(e){var t=z(e);return!!e&&"function"!=t&&"string"!=t&&(0===e.length||e.length&&(1==e.nodeType||e.length-1 in e))}(e)){if("function"==z(e.forEach))return e.forEach(t);for(var n,i=0,s=e.length;i<s;i++)"undefined"!=z(n=e[i])&&t(n,i,e)}else{var r;for(r in e)t(r,e[r],e)}}function P(e,t,n){if("object"==z(t))return S(t,function(t,n){P(e,t,n)});S(t.split(" "),function(t){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n})}function R(e,t,n){if("object"==z(t))return S(t,function(t,n){R(e,t,n)});S(t.split(" "),function(t){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null})}function Y(e){var t,n,i,s,r={},a=e.which,l=e.button;if(S("wheelDelta detail which keyCode".split(" "),function(t){r[t]=e[t]}),r.oldEvent=e,r.type=e.type.toLowerCase(),r.eventType=x[r.type]||r.type,r.eventCode=w[r.type]||0,r.pointerType=N[e.pointerType]||e.pointerType||r.eventType,r.target=e.target||e.srcElement||o.documentElement,3===r.target.nodeType&&(r.target=r.target.parentNode),r.preventDefault=function(){e.preventDefault&&e.preventDefault(),r.returnValue=e.returnValue=!1},t=M[r.eventType]){switch(r.eventType){case"mouse":case"pointer":var h=e.pointerId||0;3==r.eventCode?delete t[h]:t[h]=e;break;case"touch":M[r.eventType]=t=e.touches}s=0,(n="item"in(i=t)?i.item(s):function(){var e,t=0;for(e in this)if(t++==s)return this[e]}.call(i,s))&&(r.clientX=n.clientX,r.clientY=n.clientY),r.button=a<4?Math.max(0,a-1):4&l?1:2&l,r.length=function(e){var t,n=0;if("number"==z(e.length))n=e.length;else if("keys"in Object)n=Object.keys(e).length;else for(t in e)e.hasOwnProperty(t)&&n++;return n}(t)}return r}S("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e){b["[object "+e+"]"]=e.toLowerCase()}),S("X Y ".split(" "),function(e){var t={X:"left",Y:"top"},n=u?" translateZ(0)":"";C["scroll"+e]=function(i,s,r,a){var o=e||["X","Y"][this.direction];p?i.style[p]="translate"+o+"("+100*s+"%)"+n:i.style[t[o]]=100*s+"%",r&&(p?r.style[p]="translate"+o+"("+100*a+"%)"+n:r.style[t[o]]=100*a+"%")},C["scroll3d"+e]=function(t,n,i,s){var r,a=e||["X","Y"][this.direction],o=n<0?-1:1,l=Math.abs(n);u?(l<.05?(r=1200*l,n=0,s=-1*o):l<.95?(r=60,n=(n-.05*o)/.9,s=(s+.05*o)/.9):(r=1200*(1-l),n=o,s=0),t.parentNode.style[p]="perspective(1000px) rotateX("+r+"deg)",t.style[p]="translate"+a+"("+100*n+"%)",i&&(i.style[p]="translate"+a+"("+100*s+"%)")):C["scroll"+e].apply(this,arguments)},C["slide"+e]=function(t,n,i,s){C["slideCoverReverse"+e].apply(this,arguments)},C["flow"+e]=function(t,n,i,s){C["flowCoverIn"+e].apply(this,arguments)},C["slice"+e]=function(){var t=function(e,t){var n=o.createElement("div");n.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;",n.appendChild(e),t.appendChild(n)};return function(n,i,s,r){var a="X"==(e||["X","Y"][this.direction])?"width":"height",o=this.container[X("client-"+a)],l=(Math.abs(i),Math.abs(r),0==i||0==r);n.style[a]=l?"100%":o+"px",n.parentNode==this.container&&t(n,this.container),n.parentNode.style.zIndex=i>0?0:1,n.parentNode.style[a]=100*(Math.min(i,0)+1)+"%",s&&(s.style[a]=l?"100%":o+"px",s.parentNode==this.container&&t(s,this.container),s.parentNode.style.zIndex=i>0?1:0,s.parentNode.style[a]=100*(Math.min(r,0)+1)+"%"),function(e,t,n,i){S(n,function(n){n.parentNode!=i&&(n.parentNode.style.display=e!=n&&t!=n?"none":"block")})}(n,s,this.pages,this.container)}}(),C["flip"+e]=function(t,i,s,r){var a=e||["X","Y"][1-this.direction],o="X"==a?-1:1;u?(t.style[y]="hidden",t.style[p]="perspective(1000px) rotate"+a+"("+180*i*o+"deg)"+n,s&&(s.style[y]="hidden",s.style[p]="perspective(1000px) rotate"+a+"("+180*r*o+"deg)"+n)):C["scroll"+e].apply(this,arguments)},C["flip3d"+e]=function(){var t;return function(n,i,s,r){var a=e||["X","Y"][1-this.direction],o="X"==a?-1:1,l=o*(i<0?1:-1),h=n["offset"+("X"==a?"Height":"Width")]/2;v?(t||(t=!0,n.parentNode.parentNode.style[u]="1000px",n.parentNode.style[d]="preserve-3d"),n.parentNode.style[p]="translateZ(-"+h+"px) rotate"+a+"("+90*i*o+"deg)",n.style[p]="rotate"+a+"(0) translateZ("+h+"px)",s&&(s.style[p]="rotate"+a+"("+90*l+"deg) translateZ("+h+"px)")):C["scroll"+e].apply(this,arguments)}}(),C["flipClock"+e]=function(){var t=function(e,t,n,i){var s=e.parentNode,r="X"==n?"height":"width",a="X"==n?"top":"left",l=["50%",(i?0:100)+"%"]["X"==n?"slice":"reverse"]().join(" ");return s&&s!=t||((s=o.createElement("div")).style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;display:none;",s.style[f]=l,s.style[y]="hidden",s.appendChild(e),t.appendChild(s)),s.style[r]="50%",s.style[a]=100*i+"%",e.style[r]="200%",e.style[a]=200*-i+"%",s};return function(n,i,s,r){var a,o,l=e||["X","Y"][1-this.direction],h=(this.pages[this.current],Number(Math.abs(i)<.5)),c="X"==l?1:-1;u?(t(n,this.container,l,0),t(n._clone||(n._clone=n.cloneNode(!0)),this.container,l,.5),a=o=180*-i*c,i>0?o=0:a=0,n.parentNode.style.zIndex=n._clone.parentNode.style.zIndex=h,n.parentNode.style[p]="perspective(1000px) rotate"+l+"("+a+"deg)",n._clone.parentNode.style[p]="perspective(1000px) rotate"+l+"("+o+"deg)",s&&(t(s,this.container,l,0),t(s._clone||(s._clone=s.cloneNode(!0)),this.container,l,.5),a=o=180*-r*c,i>0?a=0:o=0,s.parentNode.style.zIndex=s._clone.parentNode.style.zIndex=1-h,s.parentNode.style[p]="perspective(1000px) rotate"+l+"("+a+"deg)",s._clone.parentNode.style[p]="perspective(1000px) rotate"+l+"("+o+"deg)"),function(e,t,n,i){S(n,function(n){n.parentNode!=i&&(n.parentNode.style.display=n._clone.parentNode.style.display=e!=n&&t!=n?"none":"block")})}(n,s,this.pages,this.container),0!=i&&0!=r||((n=this.pages[this.current]).style.height=n.style.width=n.parentNode.style.height=n.parentNode.style.width="100%",n.style.top=n.style.left=n.parentNode.style.top=n.parentNode.style.left=0,n.parentNode.style.zIndex=2)):C["scroll"+e].apply(this,arguments)}}(),C["flipPaper"+e]=function(){var n;return function(i,s,r,a){var l=e||["X","Y"][this.direction],c="X"==l?"width":"height",p=100*Math.abs(s);if(!n){(n=o.createElement("div")).style.cssText="position:absolute;z-index:2;top:0;left:0;height:0;width:0;background:no-repeat #fff;";try{n.style.backgroundImage=h+"linear-gradient("+("X"==l?"right":"bottom")+", #aaa 0,#fff 20px)"}catch(u){}this.container.appendChild(n)}C["slice"+e].apply(this,arguments),n.style.display=0==s||0==a?"none":"block",n.style.width=n.style.height="100%",n.style[c]=(s<0?p:100-p)+"%",n.style[t[l]]=(s<0?100-2*p:2*p-100)+"%"}}(),C["zoom"+e]=function(t,i,s,r){var a=Number(Math.abs(i)<.5);p?(t.style[p]="scale"+e+"("+Math.abs(1-2*Math.abs(i))+")"+n,t.style.zIndex=a,s&&(s.style[p]="scale"+e+"("+Math.abs(1-2*Math.abs(i))+")"+n,s.style.zIndex=1-a)):C["scroll"+e].apply(this,arguments)},C["bomb"+e]=function(t,i,s,r){var a=Number(Math.abs(i)<.5),o=Math.abs(1-2*Math.abs(i));p?(t.style[p]="scale"+e+"("+(2-o)+")"+n,t.style.opacity=a?o:0,t.style.zIndex=a,s&&(s.style[p]="scale"+e+"("+(2-o)+")"+n,s.style.opacity=a?0:o,s.style.zIndex=1-a)):C["scroll"+e].apply(this,arguments)},C["skew"+e]=function(t,i,s,r){var a=Number(Math.abs(i)<.5);p?(t.style[p]="skew"+e+"("+180*i+"deg)"+n,t.style.zIndex=a,s&&(s.style[p]="skew"+e+"("+180*r+"deg)"+n,s.style.zIndex=1-a)):C["scroll"+e].apply(this,arguments)},S(" Reverse In Out".split(" "),function(i){C["scrollCover"+i+e]=function(s,r,a,o){var l=e||["X","Y"][this.direction],h=Number("In"==i||!i&&r<0||"Reverse"==i&&r>0),c=100,u=100;h?c=20:u=20,p?s.style[p]="translate"+l+"("+r*c+"%)"+n:s.style[t[l]]=r*c+"%",s.style.zIndex=1-h,a&&(p?a.style[p]="translate"+l+"("+o*u+"%)"+n:a.style[t[l]]=o*u+"%",a.style.zIndex=h)},C["slideCover"+i+e]=function(t,s,r,a){var o=e||["X","Y"][this.direction],l=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);p?(t.style[p]="translate"+o+"("+s*(100-100*l)+"%) scale("+(.2*(1-Math.abs(l&&s))+.8)+")"+n,t.style.zIndex=1-l,r&&(r.style[p]="translate"+o+"("+a*l*100+"%) scale("+(.2*(1-Math.abs(l?0:a))+.8)+")"+n,r.style.zIndex=l)):C["scrollCover"+i+e].apply(this,arguments)},C["flowCover"+i+e]=function(t,s,r,a){var o=e||["X","Y"][this.direction],l=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);p?(t.style[p]="translate"+o+"("+s*(100-50*l)+"%) scale("+(.5*(1-Math.abs(s))+.5)+")"+n,t.style.zIndex=1-l,r&&(r.style[p]="translate"+o+"("+a*(50+50*l)+"%) scale("+(.5*(1-Math.abs(a))+.5)+")"+n,r.style.zIndex=l)):C["scrollCover"+i+e].apply(this,arguments)},C["flipCover"+i+e]=function(t,s,r,a){var o=e||["X","Y"][1-this.direction],l=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);u?(l?s=0:a=0,t.style[p]="perspective(1000px) rotate"+o+"("+-90*s+"deg)"+n,t.style.zIndex=1-l,r&&(r.style[p]="perspective(1000px) rotate"+o+"("+-90*a+"deg)"+n,r.style.zIndex=l)):C["scroll"+e].apply(this,arguments)},C["skewCover"+i+e]=function(t,s,r,a){var o=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);p?(o?s=0:a=0,t.style[p]="skew"+e+"("+90*s+"deg)"+n,t.style.zIndex=1-o,r&&(r.style[p]="skew"+e+"("+90*a+"deg)"+n,r.style.zIndex=o)):C["scroll"+e].apply(this,arguments)},C["zoomCover"+i+e]=function(t,s,r,a){var o=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);p?(o?s=0:a=0,t.style[p]="scale"+e+"("+(1-Math.abs(s))+")"+n,t.style.zIndex=1-o,r&&(r.style[p]="scale"+e+"("+(1-Math.abs(a))+")"+n,r.style.zIndex=o)):C["scroll"+e].apply(this,arguments)},C["bombCover"+i+e]=function(t,s,r,a){var o=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);p?(o?s=0:a=0,t.style[p]="scale"+e+"("+(1+Math.abs(s))+")"+n,t.style.zIndex=1-o,r&&(r.style[p]="scale"+e+"("+(1+Math.abs(a))+")"+n,r.style.zIndex=o),C.fade.apply(this,arguments)):C["scroll"+e].apply(this,arguments)}})}),n.prototype={version:"2.3.2",constructor:n,latestTime:0,init:function(e){var n=this,i=this.handler=function(e){!n.frozen&&n.handleEvent(e)};this.events={},this.duration=isNaN(parseInt(e.duration))?600:parseInt(e.duration),this.direction=0==parseInt(e.direction)?0:1,this.current=parseInt(e.start)||0,this.loop=!!e.loop,this.mouse=null==e.mouse||!!e.mouse,this.mousewheel=!!e.mousewheel,this.interval=parseInt(e.interval)||5e3,this.playing=!!e.autoplay,this.arrowkey=!!e.arrowkey,this.frozen=!!e.freeze,this.pages=function(e){var t=[];return S(e.children||e.childNodes,function(e){1==e.nodeType&&t.push(e)}),t}(this.container),this.length=this.pages.length,this.pageData=[],P(this.container,T.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),i),P(o,I.join(" ")+(this.arrowkey?" keydown":""),i),S(this.pages,function(e){n.pageData.push({percent:0,cssText:e.style.cssText||""}),n.initStyle(e)}),this.pages[this.current].style.display="block",this.on({before:function(){clearTimeout(this.playTimer)},dragStart:function(){clearTimeout(this.playTimer),function(){var e;t.getSelection?"empty"in(e=getSelection())?e.empty():"removeAllRanges"in e&&e.removeAllRanges():o.selection.empty()}()},after:this.firePlay,update:null}).firePlay(),this.comment=document.createComment(" Powered by pageSwitch v"+this.version+"  https://github.com/qiqiboy/pageSwitch "),this.container.appendChild(this.comment),this.setEase(e.ease),this.setTransition(e.transition)},initStyle:function(e){var t,n=e.style;return S("position:absolute;top:0;left:0;width:100%;height:100%;display:none".split(";"),function(e){t=e.split(":"),n[t[0]]=t[1]}),e},setEase:function(e){return this.ease=D(e)?e:k[e]||k.ease,this},addEase:function(e,t){return D(t)&&(k[e]=t),this},setTransition:function(e){return this.events.update.splice(0,1,D(e)?e:C[e]||C.slide),this},addTransition:function(e,t){return D(t)&&(C[e]=t),this},isStatic:function(){return!this.timer&&!this.drag},on:function(e,t){var n=this;return"object"==z(e)?S(e,function(e,t){n.on(e,t)}):(this.events[e]||(this.events[e]=[]),this.events[e].push(t)),this},fire:function(e){var t=this,n=g.call(arguments,1);return S(this.events[e]||[],function(e){D(e)&&e.apply(t,n)}),this},freeze:function(e){return this.frozen=null==e||!!e,this},slide:function(e){var t=this,n=(this.direction,this.duration),i=+new Date,s=this.ease,o=this.current,l=Math.min(this.length-1,Math.max(0,this.fixIndex(e))),h=this.pages[o],c=this.getPercent(),p=this.fixIndex(l==o?o+(c>0?-1:1):l),u=this.pages[p],d=e>o?-1:1,f=h;return a(this.timer),l==o?(d=0,f=u):"none"==u.style.display&&(c=0),this.fixBlock(o,p),this.fire("before",o,l),this.current=l,n*=Math.abs(d-c),this.latestTime=i+n,function e(){var a=Math.min(n,+new Date-i),h=n?s(a,0,1,n):1,u=(d-c)*h+c;t.fixUpdate(u,o,p);a==n?(f&&(f.style.display="none"),delete t.timer,t.fire("after",l,o)):t.timer=r(e)}(),this},prev:function(){return this.slide(this.current-1)},next:function(){return this.slide(this.current+1)},play:function(){return this.playing=!0,this.firePlay()},firePlay:function(){var e=this;return this.playing&&(this.playTimer=setTimeout(function(){e.slide((e.current+1)%(e.loop?1/0:e.length))},this.interval)),this},pause:function(){return this.playing=!1,clearTimeout(this.playTimer),this},fixIndex:function(e){return this.length>1&&this.loop?(this.length+e)%this.length:e},fixBlock:function(e,t){return S(this.pages,function(n,i){n.style.display=e!=i&&t!=i?"none":"block"}),this},fixUpdate:function(e,t,n){var i,s=this.pageData,r=this.pages[t],a=this.pages[n];return s[t].percent=e,a&&(i=s[n].percent=e>0?e-1:1+e),this.fire("update",r,e,a,i)},getPercent:function(e){var t=this.pageData[null==e?this.current:e];return t&&(t.percent||0)},getOffsetParent:function(){var e,n,i=(e=this.container,n="position",(t.getComputedStyle&&t.getComputedStyle(e,null)||e.currentStyle||e.style)[n]);return i&&"static"!=i?this.container:this.container.offsetParent||o.body},handleEvent:function(e){var t=Y(e),n=t.button<1&&t.length<2&&(!this.pointerType||this.pointerType==t.eventType)&&(this.mouse||"mouse"!=t.pointerType);switch(t.eventCode){case 2:if(n&&this.rect){var i,s=this.current,r=this.direction,o=[t.clientX,t.clientY],l=this.rect,h=o[r]-l[r],c=(this.pages[s],this.offsetParent[r?"clientHeight":"clientWidth"]);null==this.drag&&l.toString()!=o.toString()&&(this.drag=Math.abs(h)>=Math.abs(o[1-r]-l[1-r]),this.drag&&this.fire("dragStart",t)),this.drag&&(y=this.percent+(c&&h/c),this.pages[i=this.fixIndex(s+(y>0?-1:1))]||(y/=Math.abs(h)/c+2),this.fixBlock(s,i),this.fire("dragMove",t),this.fixUpdate(y,s,i),this._offset=h,t.preventDefault())}break;case 1:case 3:if(n){var p,u,d=this,f=this.current,y=this.getPercent();t.length&&(1==t.eventCode||this.drag)?(m=t.target.nodeName.toLowerCase(),clearTimeout(this.eventTimer),this.pointerType||(this.pointerType=t.eventType),this.timer&&(a(this.timer),delete this.timer),this.rect=[t.clientX,t.clientY],this.percent=y,this.time=+new Date,this.offsetParent=this.getOffsetParent(),"touch"==t.eventType||"a"!=m&&"img"!=m||t.preventDefault()):(u=this.time)&&(h=this._offset,p=this.drag,S("rect drag time percent _offset offsetParent".split(" "),function(e){delete d[e]}),p&&((+new Date-u<500&&Math.abs(h)>20||Math.abs(y)>.5)&&(f+=h>0?-1:1),this.fire("dragEnd",t),t.preventDefault()),y?this.slide(f):p&&this.firePlay(),this.eventTimer=setTimeout(function(){delete d.pointerType},400))}break;case 4:this.timer&&t.preventDefault();break;case 5:if(t.preventDefault(),this.isStatic()&&+new Date-this.latestTime>Math.max(1e3-this.duration,0)){var v=t.wheelDelta||-t.detail;Math.abs(v)>=3&&this[v>0?"prev":"next"]()}break;case 6:var m=t.target.nodeName.toLowerCase();if(this.isStatic()&&"input"!=m&&"textarea"!=m&&"select"!=m)switch(t.keyCode||t.which){case 33:case 37:case 38:this.prev();break;case 32:case 34:case 39:case 40:this.next();break;case 35:this.slide(this.length-1);break;case 36:this.slide(0)}}},destroy:function(){var e=this.pageData;return R(this.container,T.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),this.handler),R(o,I.join(" ")+(this.arrowkey?" keydown":""),this.handler),S(this.pages,function(t,n){t.style.cssText=e[n].cssText}),this.container.removeChild(this.comment),this.length=0,this.pause()},append:function(e,t){return null==t&&(t=this.pages.length),this.pageData.splice(t,0,{percent:0,cssText:e.style.cssText}),this.pages.splice(t,0,e),this.container.appendChild(this.initStyle(e)),this.length=this.pages.length,t<=this.current&&this.current++,this},prepend:function(e){return this.append(e,0)},insertBefore:function(e,t){return this.append(e,t-1)},insertAfter:function(e,t){return this.append(e,t+1)},remove:function(e){return this.container.removeChild(this.pages[e]),this.pages.splice(e,1),this.pageData.splice(e,1),this.length=this.pages.length,e<=this.current&&this.slide(this.current=Math.max(0,this.current-1)),this}},S("Ease Transition".split(" "),function(e){n["add"+e]=n.prototype["add"+e]}),e.exports=n}(window,function(e,t){if(!(this instanceof arguments.callee))return new arguments.callee(e,t);this.container="string"==typeof e?document.getElementById(e):e,this.init(t||{})})}}]);
//# sourceMappingURL=5.96376139.chunk.js.map