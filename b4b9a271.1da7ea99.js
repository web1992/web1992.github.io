(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(144)),o={id:"reentrant-lock",title:"ReentrantLock \u7b80\u4ecb",author:"web1992",author_title:"Code of Java",author_url:"https://github.com/web1992",author_image_url:"img/avatars3.jpeg",tags:["java"]},c={permalink:"/blog/reentrant-lock",editUrl:"https://github.com/web1992/blog/tree/master/blog/reentrant-lock.md",source:"@site/blog/reentrant-lock.md",description:"\u7b80\u4ecb",date:"2020-07-23T01:49:02.167Z",tags:[{label:"java",permalink:"/blog/tags/java"}],title:"ReentrantLock \u7b80\u4ecb",readingTime:8.27,truncated:!0,prevItem:{title:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9",permalink:"/blog/hashmap-init-and-resize"},nextItem:{title:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5",permalink:"/blog/kubernetes-install-bin"}},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReentrantLock")," \u63d0\u4f9b\u4e86\u548c ",Object(i.b)("inlineCode",{parentName:"li"},"synchronized")," \u540c\u6837\u7684\u8bed\u4e49\uff0c\u4f46\u662f\u6269\u5c55\u4e86 ",Object(i.b)("inlineCode",{parentName:"li"},"synchronized")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReentrantLock")," \u53ef\u4ee5\u91cd\u5165\uff0c\u540c\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u591a\u6b21\u83b7\u53d6\u9501"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReentrantLock")," \u5b9e\u73b0\u4e86 ",Object(i.b)("inlineCode",{parentName:"li"},"\u516c\u5e73\u9501")," & ",Object(i.b)("inlineCode",{parentName:"li"},"\u975e\u516c\u5e73\u9501")," \u7684\u8bed\u4e49"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReentrantLock")," \u5fc5\u987b\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"try"),"\u52a0\u9501\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"finally")," \u6765\u91ca\u653e\u9501"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReentrantLock")," \u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"tryLock")," \u8bbe\u7f6e\u9501\u7684\u8d85\u65f6\u65f6\u95f4")))}b.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);