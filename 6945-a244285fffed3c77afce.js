(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[6945],{46945:(a,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>b});var t=s(73450),p=s(27378),e=s(57318),c=s(2366),o=s(32925),l=s(24246);function u(a,n){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),s.push.apply(s,t)}return s}function i(a){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?u(Object(s),!0).forEach((function(n){(0,t.Z)(a,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(s,n))}))}return a}var r=function(){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"zent-avatar-list",children:[(0,l.jsx)(c.q,{size:"small",children:"Y"}),(0,l.jsx)(c.q,{size:"small",icon:"customer"}),(0,l.jsx)(c.q,{size:"small",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),(0,l.jsx)(c.q,{size:"small",shape:"square",children:"Y"}),(0,l.jsx)(c.q,{size:"small",shape:"square",icon:"customer"}),(0,l.jsx)(c.q,{size:"small",shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})]}),(0,l.jsxs)("div",{className:"zent-avatar-list",children:[(0,l.jsx)(c.q,{children:"Y"}),(0,l.jsx)(c.q,{icon:"customer"}),(0,l.jsx)(c.q,{src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),(0,l.jsx)(c.q,{shape:"square",children:"Y"}),(0,l.jsx)(c.q,{shape:"square",icon:"customer"}),(0,l.jsx)(c.q,{shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})]}),(0,l.jsxs)("div",{className:"zent-avatar-list",children:[(0,l.jsx)(c.q,{size:"large",children:"Y"}),(0,l.jsx)(c.q,{size:"large",icon:"customer"}),(0,l.jsx)(c.q,{size:"large",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),(0,l.jsx)(c.q,{size:"large",shape:"square",children:"Y"}),(0,l.jsx)(c.q,{size:"large",shape:"square",icon:"customer"}),(0,l.jsx)(c.q,{size:"large",shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})]})]})},k=function(){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"zent-avatar-list",children:[(0,l.jsx)(c.q,{children:"MJ"}),(0,l.jsx)(c.q,{children:"Billie"}),(0,l.jsx)(c.q,{children:"Jean"}),(0,l.jsx)(c.q,{shape:"square",children:"MJ"}),(0,l.jsx)(c.q,{shape:"square",children:"Beat"}),(0,l.jsx)(c.q,{shape:"square",children:"It"})]})})},d=function(){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"zent-avatar-list",children:[(0,l.jsx)(c.q,{style:{backgroundColor:"#a1b56c"},children:"MJ"}),(0,l.jsx)(c.q,{style:{backgroundColor:"#f7ca88"},children:"Billie"}),(0,l.jsx)(c.q,{style:{backgroundColor:"#ab4642"},children:"Jean"}),(0,l.jsx)(o.C,{dot:!0,children:(0,l.jsx)(c.q,{style:{backgroundColor:"#ba8baf"},children:"MJ"})}),(0,l.jsx)(o.C,{count:3,children:(0,l.jsx)(c.q,{style:{backgroundColor:"#7cafc2"},children:"Beat"})}),(0,l.jsx)(c.q,{size:48,style:{fontSize:30,backgroundColor:"#e8e8e8",color:"#dc9656"},children:"IT"})]})})};function m(a){return(0,l.jsx)(a.tag,i(i({},a.attributes),{},{dangerouslySetInnerHTML:{__html:a.html}}))}function g(a){return(0,l.jsx)(m,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function v(a){return(0,l.jsx)(m,{tag:"style",html:a.style})}function h(a,n){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(n+=a.offsetTop),h(a.parentNode,n);return n}class f extends p.Component{constructor(...a){super(...a),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var a=this.state.showCode,n=this.props,s=n.title,t=n.src,p=n.children;return(0,l.jsxs)("div",{className:"zandoc-react-demo",children:[(0,l.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,l.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,l.jsx)("div",{className:"zandoc-react-demo__title",children:(0,l.jsx)("p",{children:s||""})}),(0,l.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(a?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),a&&(0,l.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,l.jsx)(m,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class b extends p.Component{componentDidMount(){var a=location.hash;if(a){var n=document.querySelector('a[href="'.concat(a,'"]'));n&&(0,e.l)(document.documentElement,0,h(n,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(v,{style:".zent-avatar-list {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-top: 10px;\n\talign-items: center\n}\n.zent-avatar-list:first-child {\n\tmargin-top: 0;\n}\n.zent-avatar-list .zent-avatar:not(:last-child),\n\t.zent-avatar-list .zent-badge:not(:last-child) {\n\t\tmargin-right: 10px\n}"}),p.createElement(g,{html:'<h2 class="anchor-heading"><a href="#avatar-tou-xiang">¶</a><a href="javascript:void(0)" id="avatar-tou-xiang" class="anchor-point"></a>Avatar 头像</h2>\n<p>用来代表用户或事物，支持图标，图片或字符。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),p.createElement(f,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Avatar</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(r)),p.createElement(f,{title:"自适应文字大小",id:"Demotext",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Avatar</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Billie</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Jean</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Beat</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">It</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(k)),p.createElement(f,{title:"自定义样式",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Avatar</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Badge</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">\'#a1b56c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">\'#f7ca88\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Billie</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">\'#ab4642\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Jean</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">\'#ba8baf\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">\'#7cafc2\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Beat</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">48</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">\'#e8e8e8\'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">\'#dc9656\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token constant">IT</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(d)),p.createElement(g,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>头像形状，圆形或正方形</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'square\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>头像大小，可以传入自定义尺寸</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'default\'</code></td>\n<td><code>\'small\'</code>\n \n|\n \n<code>\'large\'</code>\n \n|\n 像素值</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标名称</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>src</td>\n<td>图片地址</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>文字内容</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bordered</td>\n<td>是否显示边框</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意</strong>：<code>icon</code>, <code>src</code> 以及 <code>children</code> 是三选一互斥的，同时传入多个的行为未定义，请不要这样用。</p>'}))}}},2366:(a,n,s)=>{"use strict";s.d(n,{q:()=>r});var t=s(59312),p=s(24246),e=s(27378),c=s(60042),o=s.n(c),l=s(27036),u={},i={opacity:0},r=function(a){function n(){var n=null!==a&&a.apply(this,arguments)||this;return n.textNodeRef=(0,e.createRef)(),n.avatarNodeRef=(0,e.createRef)(),n.state={textScale:1,textReady:!1},n}return(0,t.ZT)(n,a),n.prototype.render=function(){var a=this.props,n=a.size,s=a.shape,e=a.src,c=a.icon,r=a.children,k=a.bordered,d=a.style,m=a.className,g=!!e,v=!!r,h=o()("zent-avatar",m,{"zent-avatar--size-large":"large"===n,"zent-avatar--size-default":"default"===n,"zent-avatar--size-small":"small"===n,"zent-avatar--shape-circle":"circle"===s,"zent-avatar--shape-square":"square"===s,"zent-avatar--type-icon":!!c,"zent-avatar--type-image":g,"zent-avatar--type-string":v,"zent-avatar--bordered":k});if(g)return(0,p.jsx)("span",(0,t.pi)({style:d,className:h,"data-zv":"10.0.9"},{children:(0,p.jsx)("img",{className:"zent-avatar-image",src:e,alt:"avatar","data-zv":"10.0.9"},void 0)}),void 0);if(c)return(0,p.jsx)("span",(0,t.pi)({style:d,className:h,"data-zv":"10.0.9"},{children:(0,p.jsx)(l.Z,{type:c},void 0)}),void 0);var f=this.state,b=f.textScale,y=f.textReady,z=this.textNodeRef.current,q=u;if(y&&z)if(1===b)q=u;else{var x="scale("+b+")";q={msTransform:x,WebkitTransform:x,MozTransform:x,transform:x,position:"absolute",display:"inline-block",left:"calc(50% - "+Math.floor(z.offsetWidth/2)+"px)"}}else q=i;var j="number"==typeof n?(0,t.pi)({width:n+"px",height:n+"px",lineHeight:n+"px"},d):d;return(0,p.jsx)("span",(0,t.pi)({style:j,className:h,ref:this.avatarNodeRef,"data-zv":"10.0.9"},{children:(0,p.jsx)("span",(0,t.pi)({className:"zent-avatar-string",style:q,ref:this.textNodeRef,"data-zv":"10.0.9"},{children:r}),void 0)}),void 0)},n.prototype.componentDidMount=function(){this.updateTextScale()},n.getDerivedStateFromProps=function(a,n){var s=a.children;return s!==n.prevChildren?{textReady:!1,prevChildren:s}:null},n.prototype.componentDidUpdate=function(a){a.children!==this.props.children&&this.updateTextScale()},n.prototype.updateTextScale=function(){if(this.props.children){var a=function(a,n){if(!a||!n)return 1;var s=a.getBoundingClientRect().width,t=n.offsetWidth,p=s-6;return p>t?1:p/t}(this.avatarNodeRef.current,this.textNodeRef.current);this.setState({textScale:a,textReady:!0})}},n.defaultProps={shape:"circle",size:"default",bordered:!1},n}(e.Component)},32925:(a,n,s)=>{"use strict";s.d(n,{C:()=>u});var t=s(59312),p=s(24246),e=s(27378),c=s(60042),o=s.n(c),l={},u=function(a){function n(){return null!==a&&a.apply(this,arguments)||this}return(0,t.ZT)(n,a),n.prototype.renderCount=function(){var a=this.props,n=a.count,s=a.maxCount,e=a.dot,c=a.showZero,o=a.offset,u=a.style,i=Array.isArray(o)&&2===o.length?{right:o[0],top:o[1]}:l,r=u?(0,t.pi)((0,t.pi)({},u),i):i;return e?(0,p.jsx)("span",{className:"zent-badge-dot",style:r,"data-zv":"10.0.9"},void 0):n>0||0===n&&c?(0,p.jsx)("span",(0,t.pi)({className:"zent-badge-count",style:r,"data-zv":"10.0.9"},{children:(0,p.jsx)("span",(0,t.pi)({className:"zent-badge-count-num","data-zv":"10.0.9"},{children:n>s?s+"+":n}),void 0)}),void 0):null},n.prototype.render=function(){var a,n=this.props,s=n.className,e=n.children,c=o()(((a={"zent-badge":!0,"zent-badge--has-content":e,"zent-badge--no-content":!e})[s]=!!s,a["zent-badge-none-cont"]=!e,a));return(0,p.jsxs)("div",(0,t.pi)({className:c,"data-zv":"10.0.9"},{children:[e?(0,p.jsx)("div",(0,t.pi)({className:"zent-badge-content","data-zv":"10.0.9"},{children:e}),void 0):null,this.renderCount()]}),void 0)},n.defaultProps={count:0,maxCount:99,dot:!1,showZero:!1,className:""},n}(e.PureComponent)}}]);