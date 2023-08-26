(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[5071],{35071:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>x});var t=s(73450),p=s(27378),e=s(57318),o=s(80964),c=s(3454),l=s(24246);function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var r=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{value:2,placeholder:"请输入数字"}),(0,l.jsx)(o.Y,{value:2,showStepper:!0,placeholder:"请输入数字",addonBefore:"$"}),(0,l.jsx)(o.Y,{value:2,showStepper:!0,placeholder:"请输入数字",addonAfter:"$"}),(0,l.jsx)(o.Y,{value:2,showStepper:!0,placeholder:"请输入数字"})]})},k=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{value:2,decimal:2,placeholder:"请输入数字"}),(0,l.jsx)(o.Y,{value:2,showStepper:!0,decimal:2,step:1,placeholder:"请输入数字"})]})},d=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{value:3,min:-2,max:6,decimal:2,placeholder:"请输入数字"}),(0,l.jsx)(o.Y,{value:3,showStepper:!0,min:2,max:6,decimal:2,placeholder:"请输入数字"})]})},m=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{value:3,disabled:!0}),(0,l.jsx)(o.Y,{value:3,disabled:!0,showStepper:!0})]})},g=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{value:""}),(0,t.Z)(this,"onChange",(n=>{this.setState({value:n})})),(0,t.Z)(this,"setToThree",(()=>{this.setState({value:3})})),(0,t.Z)(this,"onPressEnter",(()=>{}))}render(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{showStepper:!0,value:this.state.value,onChange:this.onChange,onPressEnter:this.onPressEnter}),(0,l.jsx)(c.z,{onClick:this.setToThree,children:"设置值为 3"})]})}}return(0,l.jsx)(n,{})},h=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{value:3,min:-2,max:6,integer:!0,placeholder:"请输入整数"}),(0,l.jsx)(o.Y,{value:Number.MAX_SAFE_INTEGER,showStepper:!0,integer:!0,placeholder:"请输入整数"})]})},v=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Y,{value:3,min:-2,max:6,integer:!0,placeholder:"请输入整数",showStepper:!0,showTooltip:!0}),(0,l.jsx)(o.Y,{value:3,min:-2,max:6,placeholder:"请输入整数",showTooltip:!0,decimal:2})]})};function b(n){return(0,l.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return(0,l.jsx)(b,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function y(n){return(0,l.jsx)(b,{tag:"style",html:n.style})}function f(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),f(n.parentNode,a);return a}class w extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return(0,l.jsxs)("div",{className:"zandoc-react-demo",children:[(0,l.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,l.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,l.jsx)("div",{className:"zandoc-react-demo__title",children:(0,l.jsx)("p",{children:s||""})}),(0,l.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,l.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,l.jsx)(b,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class x extends p.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,e.l)(document.documentElement,0,f(a,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(y,{style:".zent-number-input {\n  width: 200px;\n  margin-bottom: 20px;\n}"}),p.createElement(j,{html:'<h2 class="anchor-heading"><a href="#numberinput-bu-jin-qi">¶</a><a href="javascript:void(0)" id="numberinput-bu-jin-qi" class="anchor-point"></a>NumberInput 步进器</h2>\n<p>数字输入组件，通过鼠标或键盘输入内容。\n默认值类型是 string，在整数模式下是 number，且有默认上限<code>Number.MAX_SAFE_INTEGER</code>，默认下限<code>Number.MIN_SAFE_INTEGER</code>。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>输入内容仅为数字时，使用数字输入框比普通文本输入框更方便。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),p.createElement(w,{title:"基础用法",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span>  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span>  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token attr-name">addonAfter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(r)),p.createElement(w,{title:"指定小数点精度",id:"Demo2",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(k)),p.createElement(w,{title:"控制可输入的数字范围",id:"Demo3",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(d)),p.createElement(w,{title:"disable状态",id:"Demo4",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(m)),p.createElement(w,{title:"事件处理",id:"Demo5",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EventTest</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">setToThree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onPressEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'pressed enter\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n          <span class="token attr-name">showStepper</span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onPressEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onPressEnter</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">setToThree</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>设置值为 <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EventTest</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(g)),p.createElement(w,{title:"整数模式",id:"Demo6",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token known-class-name class-name">Number</span><span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(h)),p.createElement(w,{title:"提示模式",id:"Demo7",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">showTooltip</span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n      <span class="token attr-name">showTooltip</span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(v)),p.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>是否必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>输入值</td>\n<td><code>integer === true ? number : string</code></td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>值改变的回调函数</td>\n<td><code>(value: typeof value) => void</code></td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onInput</td>\n<td>用户输入的回调函数</td>\n<td><code>(value: string) => void</code></td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>showStepper</td>\n<td>是否开启记步器</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>showCounter</td>\n<td>是否开启加减号</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>showTooltip</td>\n<td>超出大小是否pop提示</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>integer</td>\n<td>整数模式</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>decimal</td>\n<td>数值精度</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>step</td>\n<td>步进</td>\n<td><code>number</code></td>\n<td>整数模式为 \n<code>1</code>\n，小数模式根据精度而定</td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>min</td>\n<td>数值范围最小值</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>max</td>\n<td>数值范围最大值</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>原生 placeholder 文案</td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#onchange-he-oninput-de-qu-bie">¶</a><a href="javascript:void(0)" id="onchange-he-oninput-de-qu-bie" class="anchor-point"></a><code>onChange</code> 和 <code>onInput</code> 的区别</h4>\n<ul>\n<li>由于 <code>NumberInput</code> 可以设置数字的格式，所以它的 <code>onChange</code> 和 <code>onInput</code> 行为是有区别的，这点和普通的 <code>Input</code> 不同</li>\n<li>绝大部分时候应该使用 <code>onChange</code>，当需要实时获取用户输入的内容时才需要使用 <code>onInput</code>，且 <code>onInput</code> 的参数类型永远是 <code>string</code></li>\n<li>\n<p><code>onInput</code> 和 <code>onChange</code> 的参数值可能不一致</p>\n<ul>\n<li>小数模式下设置精度为小数点后两位，当输入 <code>1.0</code> 的时候，在 <code>onInput</code> 中获取的参数是 <code>\'1.0\'</code>，而在 <code>onChange</code> 中获取的参数是 <code>\'1.00\'</code></li>\n<li>整数模式下，当输入是 <code>2.00</code> 时，<code>onInput</code> 的参数是 <code>\'2.00\'</code>，但是 <code>onChange</code> 的参数是 <code>2</code>，注意不仅值不同，类型也是不一样的</li>\n</ul>\n</li>\n</ul>'}))}}}}]);