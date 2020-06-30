(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(154)),i={id:"moengage",title:"Integrating Moengage with your apps",sidebar_label:"Moengage"},c={id:"moengage",isDocsHomePage:!1,title:"Integrating Moengage with your apps",description:"Requirements",source:"@site/docs/moengage.md",permalink:"/docs/docs/moengage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/moengage.md",sidebar_label:"Moengage",sidebar:"someSidebar",previous:{title:"Integrating 3rd party apps through Tradly Platform Ecoystems",permalink:"/docs/docs/integrations-overview"},next:{title:"Integrating Google Analytics with your apps",permalink:"/docs/docs/ga"}},p=[{value:"Requirements",id:"requirements",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("p",null,"You'll have to provide us with the APP ID to help us connect the Tradly Android app with your MoEngage dashboard.\nHere's what you need to do:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up for a MoEngage account at app.moengage.com and navigate to Settings > App Settings"),Object(a.b)("li",{parentName:"ol"},"Copy the APP ID under Account Settings. It looks like this: BPNNT1YDJLDU3EKKJJZGM59E"),Object(a.b)("li",{parentName:"ol"},"You can read more at ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.moengage.com/docs/sdk-initialization"}),"https://docs.moengage.com/docs/sdk-initialization")),Object(a.b)("li",{parentName:"ol"},"Visit Config under Settings and paste your MoEngage ID. ")))}s.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||g[d]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);