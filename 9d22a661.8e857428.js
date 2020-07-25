(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(144));const o={id:"hashmap-init-and-resize",title:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9",author:"web1992",author_title:"Code of Java",author_url:"https://github.com/web1992",author_image_url:"/img/avatars3.jpeg",tags:["java"]},i={permalink:"/blog/hashmap-init-and-resize",editUrl:"https://github.com/web1992/blog/tree/master/blog/hashmap-init-and-resize.md",source:"@site/blog/hashmap-init-and-resize.md",description:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9 (jdk1.8)",date:"2020-07-23T03:40:04.500Z",tags:[{label:"java",permalink:"/blog/tags/java"}],title:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9",readingTime:3.67,truncated:!0,nextItem:{title:"ReentrantLock \u7b80\u4ecb",permalink:"/blog/reentrant-lock"}},c=[],p={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9 (jdk1.8)"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"HashMap")," \u4e2d\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"hash")," \u51fd\u6570\u6765\u8ba1\u7b97\u5143\u7d20\u5728\u5e95\u5c42",Object(a.b)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u7684\u4f4d\u7f6e\uff0c\u800c\u5728\u6269\u5bb9\u4e4b\u540e\uff0c\u5e95\u5c42",Object(a.b)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u7684\u957f\u5ea6\u53d1\u751f\u4e86\u6539\u53d8"),Object(a.b)("p",null,"\u56e0\u6b64\u9700\u8981\u5bf9\u5df2\u7ecf\u5b58\u5728\u7684\u5143\u7d20\u518d\u6b21 ",Object(a.b)("inlineCode",{parentName:"p"},"hash")," \uff0c\u4ece\u800c\u628a\u5143\u7d20\u653e\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u4e0a\u3002"),Object(a.b)("p",null,"\u800c\u672c\u6587\u7684\u91cd\u70b9\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"\u6269\u5bb9\u5bfc\u81f4\u7684\u5143\u7d20\u79fb\u52a8")))}l.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);