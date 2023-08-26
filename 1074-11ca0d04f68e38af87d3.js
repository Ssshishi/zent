(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[1074],{21074:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>f});var s=e(73450),a=e(27378),o=e(57318),r=e(15196),i=e(24246);function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,s)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){(0,s.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p=function(){return(0,i.jsx)("div",{className:"zent-alert-example",children:(0,i.jsx)(r.j,{backgroundImage:"https://img01.yzcdn.cn/upload_files/2021/11/25/FtAGwcqfZIngtd1uXYIuIND58IeU.png",closeIconColor:"white",children:(0,i.jsxs)("div",{className:"zent-banner-example",children:["Youzan and QQ Hundreds of Support Programs will help you reach new traffic of",(0,i.jsx)("span",{className:"zent-banner-example-highlight",children:"600"}),"million monthly livelihoods"]})})})};function d(t){return(0,i.jsx)(t.tag,l(l({},t.attributes),{},{dangerouslySetInnerHTML:{__html:t.html}}))}function u(t){return(0,i.jsx)(d,{tag:"section",html:t.html,attributes:{className:"zandoc-react-markdown"}})}function h(t){return(0,i.jsx)(d,{tag:"style",html:t.style})}function m(t,n){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(n+=t.offsetTop),m(t.parentNode,n);return n}class g extends a.Component{constructor(...t){super(...t),(0,s.Z)(this,"state",{showCode:!1}),(0,s.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var t=this.state.showCode,n=this.props,e=n.title,s=n.src,a=n.children;return(0,i.jsxs)("div",{className:"zandoc-react-demo",children:[(0,i.jsx)("div",{className:"zandoc-react-demo__preview",children:a}),(0,i.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,i.jsx)("div",{className:"zandoc-react-demo__title",children:(0,i.jsx)("p",{children:e||""})}),(0,i.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(t?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),t&&(0,i.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,i.jsx)(d,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class f extends a.Component{componentDidMount(){var t=location.hash;if(t){var n=document.querySelector('a[href="'.concat(t,'"]'));n&&(0,o.l)(document.documentElement,0,m(n,-9))}}render(){return a.createElement("div",{className:"zandoc-react-container"},a.createElement(h,{style:".zent-banner-example {\n\tcolor: #fff;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\theight: 20px;\n}\n.zent-banner-example-highlight {\n\tcolor: #FFDD5D;\n\tfont-weight: 400;\n\tfont-size: 28px;\n\tmargin: 0 2px;\n\tvertical-align: middle;\n}"}),a.createElement(u,{html:'<h2 class="anchor-heading"><a href="#banner">¶</a><a href="javascript:void(0)" id="banner" class="anchor-point"></a>Banner</h2>\n<p>Deliver promotional messages to users</p>\n<h3 class="anchor-heading"><a href="#suggestion">¶</a><a href="javascript:void(0)" id="suggestion" class="anchor-point"></a>Suggestion</h3>\n<ul>\n<li>Usage: Used to pass product promotion information to users. The bulletin exists until it is processed or closed by the user.</li>\n<li>Location: The announcement is usually located above the container of the content area of the page and below the navigation bar. It ADAPTS to the width of the content area.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#note">¶</a><a href="javascript:void(0)" id="note" class="anchor-point"></a>Note</h3>\n<ul>\n<li>Use announcements only when necessary, and limit them to the task interface related to their content. Frequent use may cause users to pay less attention to announcements;</li>\n<li>Do not stack multiple bulletins. If multiple bulletins exist on a single page, only the bulletins with the highest priority are displayed.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),a.createElement(g,{title:"Basic usage",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Banner</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">IMG</span> <span class="token operator">=</span>\n  <span class="token string">\'https://img01.yzcdn.cn/upload_files/2021/11/25/FtAGwcqfZIngtd1uXYIuIND58IeU.png\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-alert-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Banner</span></span> <span class="token attr-name">backgroundImage</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">IMG</span><span class="token punctuation">}</span></span> <span class="token attr-name">closeIconColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-banner-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token maybe-class-name">Youzan</span> and <span class="token constant">QQ</span> <span class="token maybe-class-name">Hundreds</span> <span class="token keyword">of</span> <span class="token maybe-class-name">Support</span> <span class="token maybe-class-name">Programs</span> will help you reach <span class="token keyword">new</span> <span class="token class-name">traffic</span> <span class="token keyword">of</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-banner-example-highlight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token number">600</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        million monthly livelihoods\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Banner</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},a.createElement(p)),a.createElement(u,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>backgroundImage</td>\n<td>background image</td>\n<td>string</td>\n<td>false</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>closeIconColor</td>\n<td>Custom close color</td>\n<td>string</td>\n<td>false</td>\n<td></td>\n<td><code>\'grey\'</code>\n|\n<code>\'white\'</code>\n|\n \n<code>string</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>determines whether the Alert can be closed or not</td>\n<td>boolean</td>\n<td>false</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n<p>Consult <a href="https://youzan.github.io/zent/en/component/alert">Alert\'s documentation</a> to find more APIs.</p>'}))}}},82010:(t,n,e)=>{"use strict";e.d(n,{b:()=>h});var s=e(59312),a=e(24246),o=e(60042),r=e.n(o),i=e(27378),c=e(8434),l=e(78486),p=e(78513),d=["outline","closed","onClose"],u=["title","description","loading","closable","closed","onClose","closeContent","closeIconColor","icon","extraContent"],h=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={closed:!1},n.onCloseHandler=function(){n.isControlled||n.setState({closed:!0}),n.props.onClose&&n.props.onClose()},n}return(0,s.ZT)(n,t),Object.defineProperty(n.prototype,"isControlled",{get:function(){return"closed"in this.props},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"closed",{get:function(){return this.isControlled?this.props.closed:this.state.closed},enumerable:!1,configurable:!0}),n.prototype.render=function(){var t;if(this.closed)return null;var n=(0,p.Z)(this.props,u),e=n.className,o=n.type,i=n.outline,h=n.bordered,m=n.progress,g=(0,s._T)(n,["className","type","outline","bordered","progress"]),f=(0,p.Z)(this.props,d),k=r()("zent-alert","zent-alert-style-"+o,e,((t={})["zent-alert-outline"]=i,t["zent-alert--borderless"]=!h,t));return(0,a.jsxs)("div",(0,s.pi)({className:k},g,{"data-zv":"10.0.9"},{children:[!!m&&(0,a.jsx)(c.E,{className:"zent-alert__progress",percent:m,showInfo:!1,strokeWidth:2},void 0),(0,a.jsx)(l.Z,(0,s.pi)({},f,{onAlertItemClose:this.onCloseHandler},{children:this.props.children}),void 0)]}),void 0)},n.highlightClassName="zent-alert-item-content__highlight",n.defaultProps={type:"info",bordered:!1,loading:!1,outline:!1,closable:!1},n}(i.PureComponent)},78486:(t,n,e)=>{"use strict";var s=e(59312),a=e(24246),o=e(27378),r=e(60042),i=e.n(r),c=e(27036),l=e(20840),p={info:"info-circle",warning:"warning",success:"check-circle",error:"close-circle"},d=(0,o.forwardRef)((function(t,n){var e=t.extraContent,r=t.classItemName,d=t.title,u=t.description,h=t.children,m=t.loading,g=t.type,f=t.closable,k=t.icon,v=t.closeIconColor,y=t.closeContent,z=t.onAlertItemClose,b=(0,o.useRef)(t);b.current=t;var x=(0,o.useMemo)((function(){return h||(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)("h3",(0,s.pi)({className:"zent-alert-item-content__title","data-zv":"10.0.9"},{children:d}),void 0),u&&(0,a.jsx)("p",(0,s.pi)({className:"zent-alert-item-content__description","data-zv":"10.0.9"},{children:u}),void 0)]},void 0)}),[h,u,d]),j=(0,o.useMemo)((function(){var t=b.current.onClose,n=v?{color:v}:{};return f?(0,a.jsx)("div",(0,s.pi)({className:"zent-alert-item-close-wrapper",onClick:function(n){null==t||t(),z&&z(),n.stopPropagation()},"data-zv":"10.0.9"},{children:null!=y?y:(0,a.jsx)(c.Z,{type:"close",className:"zent-alert-item-close-btn",style:n},void 0)}),void 0):null}),[f,y,v,z]),w=(0,o.useMemo)((function(){return m?(0,a.jsx)(l.Z,{className:"zent-alert-item-icon",loading:!0,icon:"circle",iconSize:16},void 0):null===k||!1===k?null:k?(0,a.jsx)("span",(0,s.pi)({className:"zent-alert-item-custom-icon","data-zv":"10.0.9"},{children:k}),void 0):g in p?(0,a.jsx)(c.Z,{className:"zent-alert-item-icon",type:p[g]},void 0):null}),[m,g,k]);return(0,a.jsxs)("div",(0,s.pi)({className:i()("zent-alert-item",r),ref:n,"data-zv":"10.0.9"},{children:[w,(0,a.jsx)("div",(0,s.pi)({className:"zent-alert-item-content","data-zv":"10.0.9"},{children:x}),void 0),e&&(0,a.jsx)("div",(0,s.pi)({className:"zent-alert-item-extra-content","data-zv":"10.0.9"},{children:e}),void 0),j]}),void 0)}));d.displayName="AlertItem",n.Z=d},15196:(t,n,e)=>{"use strict";e.d(n,{j:()=>p});var s=e(59312),a=e(24246),o=e(27378),r=e(60042),i=e.n(r),c=e(82010),l={grey:"#999",white:"#fff"},p=function(t){var n=t.backgroundImage,e=t.closeIconColor,r=t.style,p=void 0===r?{}:r,d=t.className,u=t.closable,h=void 0===u||u,m=(0,s._T)(t,["backgroundImage","closeIconColor","style","className","closable"]),g=(0,o.useMemo)((function(){return n?(0,s.pi)((0,s.pi)({},p),{backgroundImage:"url("+n+")"}):p}),[p,n]),f=i()("zent-banner",d);return(0,a.jsx)(c.b,(0,s.pi)({},m,{closable:h,icon:null,style:g,className:f,closeIconColor:l[e]||e}),void 0)}},8434:(t,n,e)=>{"use strict";e.d(n,{E:()=>k});var s=e(59312),a=e(24246),o=e(27378),r=e(60042),i=e.n(r),c=["normal","success","exception"],l=(0,e(70453).Z)("zentAnimatedArcStrokeGradient"),p={},d={WebkitTransition:"none",MozTransition:"none",OTransition:"none",msTransition:"none",transition:"none"},u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={opacity:0,rotate:0,transition:p},n.startAnimation=function(){n.animationDelayTimerId&&clearTimeout(n.animationDelayTimerId);var t=n.props,e=t.arcLength,s=t.radius,a=(e-n.getMaskArcLength())/s;n.setState({rotate:a,transition:p,opacity:.2},n.queueAnimationEnd)},n.finishAnimation=function(){n.transitionEndTimerId&&clearTimeout(n.transitionEndTimerId),n.setState({rotate:0,transition:d,opacity:0}),n.animationDelayTimerId=setTimeout(n.startAnimation,1e3)},n.queueAnimationEnd=function(){n.transitionEndTimerId=setTimeout(n.finishAnimation,400)},n}return(0,s.ZT)(n,t),n.prototype.render=function(){var t=this.getPath(),n=this.props,e=n.className,o=n.strokeWidth,r=this.state,i=r.rotate,c=r.transition,p=r.opacity;return(0,a.jsxs)("g",(0,s.pi)({"data-zv":"10.0.9"},{children:[(0,a.jsx)("defs",(0,s.pi)({"data-zv":"10.0.9"},{children:(0,a.jsxs)("linearGradient",(0,s.pi)({id:l},{children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 0)","data-zv":"10.0.9"},void 0),(0,a.jsx)("stop",{offset:"100%",stopColor:"#fff","data-zv":"10.0.9"},void 0)]}),void 0)}),void 0),(0,a.jsx)("path",{className:e,d:t,stroke:"url(#"+l+")",strokeOpacity:p,strokeWidth:o,style:(0,s.pi)({transform:"rotate("+i+"rad)"},c),"data-zv":"10.0.9"},void 0)]}),void 0)},n.prototype.componentDidMount=function(){this.startAnimation()},n.prototype.componentWillUnmount=function(){clearTimeout(this.animationDelayTimerId),clearTimeout(this.transitionEndTimerId),this.animationDelayTimerId=null,this.transitionEndTimerId=null},n.prototype.getMaskArcLength=function(){return.2*this.props.arcLength},n.prototype.getMaskTheta=function(){var t=this.props.radius;return this.getMaskArcLength()/t},n.prototype.getArcStartPoint=function(){var t=this.props,n=t.radius,e=t.strokeWidth/2;return[n+e,e]},n.prototype.getArcEndPoint=function(){var t=this.props,n=t.radius,e=n+t.strokeWidth/2,s=this.getMaskTheta();return[e+Math.sin(s)*n,e-Math.cos(s)*n]},n.prototype.getPath=function(){var t=this.getArcStartPoint(),n=this.getArcEndPoint(),e=this.props.radius;return"M"+t.join(",")+" A"+e+","+e+" 0 0 1 "+n.join(",")},n}(o.PureComponent),h=e(39215),m=function(t){var n=t.type,e=t.percent,s=t.format,o=t.state,r=t.color;return"success"===o?(0,a.jsx)(h.J,{type:"circle"===n?"check":"check-circle",style:{color:r}},void 0):"exception"===o?(0,a.jsx)(h.J,{type:"circle"===n?"close":"close-circle",style:{color:r}},void 0):(0,a.jsx)(a.Fragment,{children:s(e)},void 0)},g=function(t){var n=t.percent,e=t.showInfo,o=t.format,r=t.strokeWidth,c=t.width,l=t.bgColor,p=t.color,d=t.state,h=t.strokeLinecap,g=c||132,f=g/2,k=g-r,v=k/2,y=k*Math.PI,z=y*(100-n)/100;return(0,a.jsxs)("div",(0,s.pi)({className:"zent-progress-container",style:{width:g,height:g},"data-zv":"10.0.9"},{children:[(0,a.jsx)("div",{className:"zent-progress-wrapper",style:{borderWidth:r,borderColor:l,width:g,height:g},"data-zv":"10.0.9"},void 0),(0,a.jsxs)("svg",(0,s.pi)({className:"zent-progress-inner",viewBox:"0 0 "+g+" "+g,width:g,height:g,"data-zv":"10.0.9"},{children:[(0,a.jsx)("g",(0,s.pi)({transform:"rotate(-90 "+f+" "+f+")","data-zv":"10.0.9"},{children:(0,a.jsx)("circle",{className:i()("zent-progress-inner-path","zent-progress-inner-path--"+h),cx:f,cy:f,r:v,style:{stroke:p,strokeWidth:r},strokeDasharray:y,strokeDashoffset:z,"data-zv":"10.0.9"},void 0)}),void 0),"normal"===d&&(0,a.jsx)(u,{className:i()("zent-progress-path-mask","zent-progress-path-mask--"+h),radius:v,arcLength:y-z,strokeWidth:r},void 0)]}),void 0),e&&(0,a.jsx)("div",(0,s.pi)({className:"zent-progress-info","data-zv":"10.0.9"},{children:(0,a.jsx)(m,{type:"circle",percent:n,format:o,state:d,color:p},void 0)}),void 0)]}),void 0)},f=function(t){var n=t.format,e=t.width,o=t.percent,r=t.showInfo,c=t.strokeWidth,l=t.bgColor,p=t.color,d=t.state,u=t.strokeLinecap,h=e||"100%",g=r&&(0,a.jsx)("div",(0,s.pi)({className:"zent-progress-info","data-zv":"10.0.9"},{children:(0,a.jsx)(m,{type:"line",percent:o,format:n,state:d,color:p},void 0)}),void 0);return(0,a.jsxs)("div",(0,s.pi)({className:"zent-progress-container","data-zv":"10.0.9"},{children:[(0,a.jsx)("div",(0,s.pi)({className:i()("zent-progress-wrapper","zent-progress-wrapper--"+u,{"zent-progress-wrapper--finished":100===o}),style:{background:l,width:h,height:c},"data-zv":"10.0.9"},{children:(0,a.jsx)("div",{className:"zent-progress-inner",style:{background:p,width:o+"%",height:c},"data-zv":"10.0.9"},void 0)}),void 0),g]}),void 0)},k=function(t){var n,e=t,r=e.type,l=e.status,p=e.percent,d=e.className,u=e.normalColor,h=e.successColor,m=e.exceptionColor,k=e.bgColor,v=e.format,y=e.showInfo,z=e.strokeWidth,b=e.width,x=e.strokeLinecap,j=(0,s._T)(e,["type","status","percent","className","normalColor","successColor","exceptionColor","bgColor","format","showInfo","strokeWidth","width","strokeLinecap"]),w=(0,o.useMemo)((function(){return-1!==c.indexOf(l)?l:p>=100?"success":"normal"}),[l,p]),N={exception:m,success:h,normal:u}[w],C=(0,o.useMemo)((function(){return p<0?0:p>100?100:p}),[p]);switch(r){case"circle":n=g;break;case"line":default:n=f}var I=i()("zent-progress","zent-progress-type__"+r,"zent-progress-state__"+w,d);return(0,a.jsx)("div",(0,s.pi)({className:I},j,{"data-zv":"10.0.9"},{children:(0,a.jsx)(n,{percent:C,showInfo:y,strokeWidth:z,width:b,bgColor:k,format:v,color:N,state:w,strokeLinecap:x},void 0)}),void 0)};k.defaultProps={type:"line",percent:0,showInfo:!0,strokeWidth:8,strokeLinecap:"round",format:function(t){return t+"%"}}}}]);