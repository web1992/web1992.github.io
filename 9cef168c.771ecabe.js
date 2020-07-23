(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(144)),l={id:"thread-pool-executor-constructor",title:"ThreadPoolExecutor \u4e4b\u6784\u9020\u53c2\u6570",author:"web1992",author_title:"Code of Java",author_url:"https://github.com/web1992",author_image_url:"img/avatars3.jpeg",tags:["java"]},c={permalink:"/blog/thread-pool-executor-constructor",editUrl:"https://github.com/web1992/blog/tree/master/blog/thread-pool-executor-constructor.md",source:"@site/blog/thread-pool-executor-constructor.md",description:"ThreadPoolExecutor \u4e4b\u6784\u9020\u53c2\u6570",date:"2020-07-22T14:16:34.608Z",tags:[{label:"java",permalink:"/blog/tags/java"}],title:"ThreadPoolExecutor \u4e4b\u6784\u9020\u53c2\u6570",readingTime:.925,truncated:!0,prevItem:{title:"ScheduledThreadPoolExecutor",permalink:"/blog/ScheduledThreadPoolExecutor"},nextItem:{title:"ThreadPoolExecutor",permalink:"/blog/ThreadPoolExecutor"}},b=[{value:"ThreadPoolExecutor \u4e4b\u6784\u9020\u53c2\u6570",id:"threadpoolexecutor-\u4e4b\u6784\u9020\u53c2\u6570",children:[]},{value:"\u601d\u8003",id:"\u601d\u8003",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"threadpoolexecutor-\u4e4b\u6784\u9020\u53c2\u6570"},"ThreadPoolExecutor \u4e4b\u6784\u9020\u53c2\u6570"),Object(o.b)("p",null,"ThreadPoolExecutor \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u53c2\u6570\uff0c\u7528\u6765\u65b9\u4fbf\u7684\u63a7\u5236\u7ebf\u7a0b\u6c60\u7684\u884c\u4e3a,\u4e0b\u9762\u8fdb\u884c\u89e3\u91ca"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// ThreadPoolExecutor \u7684\u6784\u9020\u53c2\u6570\npublic ThreadPoolExecutor(\n    int corePoolSize,\n    int maximumPoolSize,\n    long keepAliveTime,\n    TimeUnit unit,\n    BlockingQueue<Runnable> workQueue,\n    ThreadFactory threadFactory,\n    RejectedExecutionHandler handler) {\n\n// ...\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u542b\u4e49"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"corePoolSize"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6838\u5fc3\u7ebf\u7a0b\u6570\u7684\u5927\u5c0f(\u6700\u5c0f\u7684\u7ebf\u7a0b\u6570)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"maximumPoolSize"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6700\u5927\u7ebf\u7a0b\u6570(\u7ebf\u7a0b\u6570\u91cf\u4e0d\u80fd\u8d85\u8fc7\u8fd9\u4e2a)\uff0c\u5f53\u961f\u5217\u6ee1\u4e86\u4e4b\u540e\uff0c\u4f1a\u7ee7\u7eed\u53c2\u52a0\u7ebf\u7a0b\u5230 maximumPoolSize \u4e2a\u7ebf\u7a0b")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"keepAliveTime"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"long"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0b\u6700\u5927\u5b58\u6d3b\u65f6\u95f4")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"unit"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TimeUnit"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0b\u6700\u5927\u5b58\u6d3b\u65f6\u95f4\u7684\u65f6\u95f4\u5355\u4f4d")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"workQueue"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BlockingQueue"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5de5\u4f5c\u961f\u5217\uff0c\u7528\u6765\u5b58\u50a8\u591a\u4f59\u7684\u4efb\u52a1\uff08\u5f53\u7ebf\u7a0b\u6570\u8d85\u8fc7corePoolSize\uff0c\u4e4b\u540e\u591a\u4f59\u7684\u4efb\u52a1\u5c31\u4f1a\u653e\u5165\u961f\u5217\u4e2d\uff09")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"threadFactory"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ThreadFactory"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0b\u5de5\u5382\uff0c\u7528\u6765\u6267\u884c\u7ebf\u7a0b\u7684\u540d\u79f0\uff0c\u4f18\u5148\u7ea7\u7b49")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"handler"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RejectedExecutionHandler"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5f02\u5e38\u5904\u7406\uff0c\u901a\u5e38\u5728\u7ebf\u7a0b\u90fd\u5728\u7e41\u5fd9\uff0c\u5e76\u4e14\u961f\u5217\u6ee1\u4e86\u4e4b\u540e\u89e6\u53d1\u7684\u5f02\u5e38\u673a\u5236")))),Object(o.b)("h2",{id:"\u601d\u8003"},"\u601d\u8003"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u867d\u7136 Executors \u63d0\u4f9b\u4e86\u4f17\u591a\u7684\u65b9\u6cd5\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60\uff0c\u4f46\u662f\u5982\u679c\u4f7f\u7528\u4e0d\u5f53\uff0c\u53ef\u80fd\u5f15\u53d1\u98ce\u9669"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u98ce\u9669\u4e00\uff1a\u65e0\u9650\u5236\u7684\u521b\u5efa\u7ebf\u7a0b\u5bfc\u81f4\uff0c\u673a\u5668\u8d44\u6e90\u8017\u5c3d\uff0c\u670d\u52a1\u5b95\u673a,\u6bd4\u5982: Executors.newCachedThreadPool"),Object(o.b)("li",{parentName:"ul"},"\u98ce\u9669\u4e8c\uff1a\u6ca1\u6709\u9650\u5236BlockingQueue\u961f\u5217\u7684\u5927\u5c0f\uff0c\u5bfc\u81f4\u5185\u5b58\u6d88\u8017\u8fc7\u5927\uff0c\u6bd4\u5982: Executors.newFixedThreadPool")))),Object(o.b)("p",null,"\u56e0\u6b64\u5efa\u8bae\u6700\u4f73\u5b9e\u8df5\u662f\u81ea\u5df1\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"ThreadPoolExecutor")," \u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u8fdb\u884c\u4e0d\u540c\u7684\u53c2\u6570\u8bbe\u7f6e"),Object(o.b)("p",null,"\u6bd4\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"Dubbo")," \u4e2d \u56fa\u5b9a\u7ebf\u7a0b\u6c60\u7684\u5b9e\u73b0\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class FixedThreadPool implements ThreadPool {\n\n    @Override\n    public Executor getExecutor(URL url) {\n        String name = ...\n        int threads = ...\n        int queues = ...\n        return new ThreadPoolExecutor(threads, threads, 0, TimeUnit.MILLISECONDS,\n                queues == 0 ? new SynchronousQueue<Runnable>() :\n                        (queues < 0 ? new LinkedBlockingQueue<Runnable>()\n                                : new LinkedBlockingQueue<Runnable>(queues)),\n                new NamedInternalThreadFactory(name, true), new AbortPolicyWithReport(name, url));\n    }\n\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"corePoolSize \u4e0e maximumPoolSize \u76f8\u7b49\uff0c\u542b\u4e49\u662f\u7ebf\u7a0b\u6c60\u5728\u521b\u5efa\u4e4b\u540e\uff0c\u5230\u8fbe maximumPoolSize\uff0c\u5927\u5c0f\u5c31\u4e0d\u4f1a\u6539\u53d8\u4e86"),Object(o.b)("li",{parentName:"ul"},"\u7531\u4e8e corePoolSize=maximumPoolSize \u7ebf\u7a0b\u6c60\u5927\u5c0f\u4e0d\u53d8\uff0c\u56e0\u6b64\u5b58\u6d3b\u65f6\u95f4\u8bbe\u7f6e\u6ca1\u6709\u610f\u4e49\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u62100"),Object(o.b)("li",{parentName:"ul"},"SynchronousQueue \u540c\u6b65\u961f\u5217\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e00\u6b21\u53ea\u80fd\u5b58\u653e\u4e00\u4e2a\u4efb\u52a1\u7684\u961f\u5217\uff0c\u6bd4\u8f83\u5e38\u7528")))}u.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,O=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);