(window.webpackJsonp=window.webpackJsonp||[]).push([[40,12],{141:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),s=t.n(r),c=t(187),l=t(163),i=t(159),o=t(157),u=t(166),d=t(142),m=t.n(d);t(292).a({dsn:"https://901016d24f914c26baa6baeb659ab046@o396771.ingest.sentry.io/5304658"});const p=[{title:s.a.createElement(s.a.Fragment,null,"Introductions"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:s.a.createElement(s.a.Fragment,null,"Find informations about TradlyPlatform, API and it's ecosystem. Plus info on sandbox access, testing your apps, and how we deploy into app stores.")},{title:s.a.createElement(s.a.Fragment,null,"Use Cases & Features"),imageUrl:"img/undraw_docusaurus_tree.svg",description:s.a.createElement(s.a.Fragment,null,"Explore what you can do with TradlyPlatform infrastructure with different industry examples. And see through all the features available under SuperAdmin and Apps .")},{title:s.a.createElement(s.a.Fragment,null,"How to Guides"),imageUrl:"img/undraw_docusaurus_react.svg",description:s.a.createElement(s.a.Fragment,null,"Already using our infrastructure? Read step by step information on configuring your SuperAdmin dashboard to suit your business + Extensions integrations.")}];function h({imageUrl:e,title:a,description:t}){const n=Object(u.a)(e);return s.a.createElement("div",{className:Object(c.a)("col col--4",m.a.feature)},n&&s.a.createElement("div",{className:"text--center"},s.a.createElement("img",{className:m.a.featureImage,src:n,alt:a})),s.a.createElement("h3",null,a),s.a.createElement("p",null,t))}a.default=function(){const e=Object(o.a)(),{siteConfig:a={}}=e;return s.a.createElement(l.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},s.a.createElement("header",{className:Object(c.a)("hero hero--primary",m.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"hero__title"},a.title),s.a.createElement("p",{className:"hero__subtitle"},a.tagline),s.a.createElement("div",{className:m.a.buttons},s.a.createElement(i.a,{className:Object(c.a)("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),s.a.createElement("main",null,p&&p.length>0&&s.a.createElement("section",{className:m.a.features},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},p.map((e,a)=>s.a.createElement(h,Object(n.a)({key:a},e))))))))}},164:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(161),c=t.n(s),l=t(35);t(95);a.a=e=>{const[a,s]=Object(n.useState)(!0),i=Object(n.useRef)(null),o=Object(n.useContext)(l.a);Object(n.useEffect)(()=>{const{siteConfig:e={}}=o,{themeConfig:{algolia:a}}=e;"undefined"!=typeof window?Promise.all([t.e(4),t.e(51),t.e(55)]).then(t.t.bind(null,165,7)).then(({default:e})=>{e({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,inputSelector:"#search_input_react",algoliaOptions:a.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),s(!1))},[]);const u=Object(n.useCallback)(a=>{i.current.contains(a.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return a?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:u,onKeyDown:u,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:u,onBlur:u,ref:i})):null}}}]);