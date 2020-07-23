(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return r})),a.d(n,"rightToc",(function(){return p})),a.d(n,"default",(function(){return c}));var t=a(2),l=a(6),b=(a(0),a(144)),i={id:"hashmap-init-and-resize",title:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9",author:"web1992",author_title:"Code of Java",author_url:"https://github.com/web1992",author_image_url:"https://avatars3.githubusercontent.com/u/6828647?s=60&v=4",tags:["java"]},r={permalink:"/blog/hashmap-init-and-resize",editUrl:"https://github.com/web1992/blog/tree/master/blog/hashmap-init-and-resize.md",source:"@site/blog/hashmap-init-and-resize.md",description:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9 (jdk1.8)",date:"2020-07-23T03:40:04.500Z",tags:[{label:"java",permalink:"/blog/tags/java"}],title:"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9",readingTime:3.67,truncated:!0,nextItem:{title:"ReentrantLock \u7b80\u4ecb",permalink:"/blog/reentrant-lock"}},p=[{value:"Init and resize",id:"init-and-resize",children:[]},{value:"Move element",id:"move-element",children:[{value:"e.hash &amp; oldCap",id:"ehash--oldcap",children:[]},{value:"j + oldCap",id:"j--oldcap",children:[]}]},{value:"Links",id:"links",children:[]}],o={rightToc:p};function c(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(t.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(b.b)("p",null,"HashMap \u7684\u521d\u59cb\u5316\u548c\u6269\u5bb9 (jdk1.8)"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"HashMap")," \u4e2d\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"hash")," \u51fd\u6570\u6765\u8ba1\u7b97\u5143\u7d20\u5728\u5e95\u5c42",Object(b.b)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u7684\u4f4d\u7f6e\uff0c\u800c\u5728\u6269\u5bb9\u4e4b\u540e\uff0c\u5e95\u5c42",Object(b.b)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u7684\u957f\u5ea6\u53d1\u751f\u4e86\u6539\u53d8"),Object(b.b)("p",null,"\u56e0\u6b64\u9700\u8981\u5bf9\u5df2\u7ecf\u5b58\u5728\u7684\u5143\u7d20\u518d\u6b21 ",Object(b.b)("inlineCode",{parentName:"p"},"hash")," \uff0c\u4ece\u800c\u628a\u5143\u7d20\u653e\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u4e0a\u3002"),Object(b.b)("p",null,"\u800c\u672c\u6587\u7684\u91cd\u70b9\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"\u6269\u5bb9\u5bfc\u81f4\u7684\u5143\u7d20\u79fb\u52a8")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"#init-and-resize"}),"Init and resize")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"#move-element"}),"Move element"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"#ehash--oldcap"}),"e.hash & oldCap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"#j--oldcap"}),"j + oldCap")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"#links"}),"Links"))),Object(b.b)("h2",{id:"init-and-resize"},"Init and resize"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"HashMap")," \u662f\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\uff0c\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"put")," \u4e4b\u540e\u8fdb\u884c\u521d\u59cb\u5316\u64cd\u4f5c\u7684"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'// put -> resize\nfinal Node<K,V>[] resize() {\n    Node<K,V>[] oldTab = table;\n    // hashmap \u65e0\u53c2\u6570\u521d\u59cb\u5316\u7684\u65f6\u5019 oldCap \u548c oldThr \u90fd\u662f0\n    // \u4f7f\u7528\u6709\u53c2\u6570\u521d\u59cb\u5316 hashmap \u90a3\u4e48 threshold \u4e0d\u4e3a0\n    int oldCap = (oldTab == null) ? 0 : oldTab.length;\n    // threshold -> The next size value at which to resize (capacity * load factor).\n    int oldThr = threshold;// \u9ed8\u8ba4\u7684\u6570\u7ec4\u5927\u5c0f\uff0c\u9ed8\u8ba4\u662f0\n    int newCap, newThr = 0;\n    if (oldCap > 0) {// \u6269\u5bb9\u8d70\u8fd9\u91cc\n        if (oldCap >= MAXIMUM_CAPACITY) {\n            // \u8d85\u8fc7\u6700\u5927\u5bb9\u91cf\uff0c\u8c03\u6574 threshold \u7ed3\u675f\n            threshold = Integer.MAX_VALUE;\n            return oldTab;\n        }\n        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&// newCap \u52a0\u500d\n                 oldCap >= DEFAULT_INITIAL_CAPACITY)// \u5982\u679c\u65e7\u7684\u5bb9\u91cf\u5c0f\u4e8e16\uff0cnewThr \u52a0\u500d\n            newThr = oldThr << 1; // double threshold\n    }\n    else if (oldThr > 0) // initial capacity was placed in threshold \u6269\u5bb9\u8d70\u8fd9\u91cc/\u6307\u5b9a\u521d\u59cb\u5bb9\u91cf\u4e5f\u8d70\u8fd9\u91cc\n        newCap = oldThr;\n    else {               // zero initial threshold signifies using defaults\n        // \u521d\u59cb\u5316\u8d70\u8fd9\u91cc\n        newCap = DEFAULT_INITIAL_CAPACITY;// \u9ed8\u8ba4\u6570\u7ec4\u5927\u5c0f\u662f16\n        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);//  0.75*16=12.0\n    }\n    if (newThr == 0) {\n        float ft = (float)newCap * loadFactor;\n        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?\n                  (int)ft : Integer.MAX_VALUE);\n    }\n    threshold = newThr;\n    @SuppressWarnings({"rawtypes","unchecked"})\n    Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];// \u521b\u5efa\u65b0\u6570\u7ec4\n    table = newTab;\n    if (oldTab != null) {// \u6269\u5bb9\uff0c\u9700\u8981\u91cd\u65b0\u8ba1\u7b97hash\n        // \u5728\u6269\u5bb9\u5b8c\u6210\u4e4b\u540e\uff0c\u5728\u8fd9\u4e2afor\u5faa\u73af\u91cc\u9762\u5f00\u59cb\u8fdb\u884c\u5143\u7d20\u7684\u79fb\u52a8\n        for (int j = 0; j < oldCap; ++j) {// \u904d\u5386\u65e7\u6570\u7ec4\u5927\u5c0f\n            Node<K,V> e;\n            if ((e = oldTab[j]) != null) {// \u627e\u5230\u90a3\u4e9b\u4e0d\u4e3a null \u7684\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\n                oldTab[j] = null;\n                if (e.next == null)// \u5982\u679c\u8fd9\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u5143\u7d20\u4e0a\u53ea\u6709\u4e00\u4e2a\u5143\u7d20(\u6ca1\u6709hash\u51b2\u7a81)\n                    newTab[e.hash & (newCap - 1)] = e;// \u76f4\u63a5\u628a\u8fd9\u4e2a\u5143\u7d20\u91cd\u65b0\u8fdb\u884chash,\u653e\u5230\u65b0\u6570\u7ec4\u7684\u4f4d\u7f6e\u4e0a\u5373\u53ef\n                else if (e instanceof TreeNode)\n                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);// \u5982\u679c\u662f\u6811\u6570\u636e\u7ed3\u6784\n                else { // preserve order \u4fdd\u8bc1\u987a\u5e8f\n                    // \u4ee3\u7801\u6267\u884c\u5230\u8fd9\u91cc\uff0c\u8bf4\u660e e \u8fd9\u4e2a Node \u5df2\u7ecf\u662f\u94fe\u8868\u4e86\n                    // \u90a3\u4e48\u9700\u8981\u628a\u8fd9\u4e2a\u94fe\u8868\u8fdb\u884c\u62c6\u5206\u548c\u5143\u7d20\u79fb\u52a8\n                    // \u5177\u4f53\u7684\u7ec6\u8282\u548c\u505a\u6cd5\uff0c\u5728\u540e\u9762 Move element \u90e8\u5206\u8be6\u7ec6\u89e3\u91ca\n                    Node<K,V> loHead = null, loTail = null;\n                    Node<K,V> hiHead = null, hiTail = null;\n                    Node<K,V> next;\n                    do {\n                        next = e.next;\n                        if ((e.hash & oldCap) == 0) {\n                            if (loTail == null)\n                                loHead = e;\n                            else\n                                loTail.next = e;\n                            loTail = e;\n                        }\n                        else {\n                            if (hiTail == null)\n                                hiHead = e;\n                            else\n                                hiTail.next = e;\n                            hiTail = e;\n                        }\n                    } while ((e = next) != null);\n                    if (loTail != null) {\n                        loTail.next = null;\n                        newTab[j] = loHead;\n                    }\n                    if (hiTail != null) {\n                        hiTail.next = null;\n                        newTab[j + oldCap] = hiHead;\n                    }\n                }\n            }\n        }\n    }\n    return newTab;\n}\n')),Object(b.b)("h2",{id:"move-element"},"Move element"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5143\u7d20\u79fb\u52a8")),Object(b.b)("p",null,"\u5148\u770b\u4e0b\u6570\u636e\u6269\u5bb9\u4e4b\u540e\u4e00\u79cd\u53ef\u80fd\u7684\u5143\u7d20\u4f4d\u7f6e\u7684\u53d8\u5316,\u5982\u4e0b\u56fe"),Object(b.b)("p",null,Object(b.b)("img",Object(t.a)({parentName:"p"},{src:"/images/hashmap-element-move.png",alt:"move element"}))),Object(b.b)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u79fb\u52a8\u524d\u540e\u5143\u7d20\u4f4d\u7f6e\u548c\u94fe\u8868\u7684\u5bf9\u6bd4(\u8fd9\u91cc\u662f\u6570\u636e\u6269\u5bb9\u4e4b\u540e\uff0c\u94fe\u8868\u62c6\u5206&\u5143\u7d20\u79fb\u52a8\u4e4b\u540e\u7684\u7ed3\u679c)"),Object(b.b)("p",null,"\u4e00\u90e8\u5206\u5143\u7d20\u4f9d\u7136\u5728\u7d22\u5f15\u4e3a2\u7684\u4f4d\u7f6e\uff0c\u53e6\u4e00\u90e8\u5206\u5219\u79fb\u52a8\u5230\u4e86\u7d22\u5f15\u4e3a10\u7684\u4f4d\u7f6e\u4e0a"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u4e0b\u9762\u518d\u770b\u95ee\u9898&\u89e3\u51b3\u65b9\u6848")),Object(b.b)("p",null,"\u6216\u8005\u4f60\u8ba4\u4e3a\uff0c\u6570\u7ec4\u5728\u6269\u5bb9\u4e4b\u540e\uff0c\u5143\u7d20\u4f9d\u7136\u5728\u65e7\u7684\u4f4d\u7f6e\uff0c\u8fd9\u6837\u4e5f\u53ef\u4ee5\u554a\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u79fb\u52a8\u5462\uff1f"),Object(b.b)("p",null,"\u8fd9\u91cc\u9700\u8981\u8003\u8651\u4e8c\u4e2a\u95ee\u9898:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u5728\u6570\u7ec4\u6269\u5bb9\u4e4b\u540e\uff0c\u6570\u7ec4\u7684\u957f\u5ea6\u53d8\u4e86\uff0c\u90a3\u4e48\u5728\u8fdb\u884c ",Object(b.b)("inlineCode",{parentName:"p"},"e.hash & (newCap - 1)")," \u65b0hash\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u65e7\u7684\u90a3\u4e9b\u5143\u7d20\u65e7\u4e0d\u4e00\u5b9a\u5728\u653e\u5728\u7d22\u5f15\u4e3a2\u4f4d\u7f6e\u4e0a\u9762\u4e86\uff0c\u5982\u679c\u4e0d\u79fb\u52a8\u5143\u7d20\uff0c\u90a3\u4e48\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"get"),"(\u6269\u5bb9\u4e4b\u540e)\u7684\u65f6\u5019\uff0c\u6267\u884c ",Object(b.b)("inlineCode",{parentName:"p"},"tab[(n - 1) & hash")," \u80af\u5b9a\u662f\u90a3\u67e5\u8be2\u4e0d\u5230\u5f53\u524d\u5143\u7d20\u7684")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u5982\u4f55\u5feb\u901f\u7684\u628a\u6269\u5bb9\u4e4b\u524d\u5728\u7d22\u5f15\u4e3a2\u4e3a\u5143\u7d20\uff0c\u4f46\u662f\u6269\u5bb9\u4e4b\u540e\u7d22\u5f15\u4e0d\u57282\u7684\u5143\u7d20\u8fdb\u884c\u7b5b\u9009\u548c\u79fb\u52a8(\u91cd\u65b0\u8ba1\u7b97\u7d22\u5f15)"))),Object(b.b)("p",null,"\u4e0b\u9762\u901a\u8fc7\u4e3e\u4f8b\u6765\u8bf4\u660e\uff1a"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u95ee\u98981")),Object(b.b)("p",null,"\u5047\u5982: \u65e7\u6570\u7ec4\u957f\u5ea6\u4e3a 8\uff08\u7d22\u5f150-7\uff09\uff0c\u6269\u5bb9\u4e4b\u540e\u7684\u65b0\u6570\u7ec4\u7684\u957f\u5ea6\u662f 16 \uff08\u7d22\u5f150-15\uff09,\u5047\u5982\u4e00\u4e2aNode \u7684 hash = 10,"),Object(b.b)("p",null,"\u90a3\u4e48\uff1a\u6839\u636e\u516c\u5f0f ",Object(b.b)("inlineCode",{parentName:"p"},"e.hash & (newCap - 1)")," \u8fd9\u4e2a\u5143\u7d20\u5728\u6570\u7ec4\u6269\u5bb9\u4e4b\u524d\u7684\u4f4d\u7f6e\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"10 & 7= 2"),",\u6269\u5bb9\u4e4b\u540e\u7684\u4f4d\u7f6e\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"10 & 15=10")),Object(b.b)("p",null,"\u53ef\u89c1\uff1a\u5728\u6570\u636e\u6269\u5bb9\u4e4b\u540e\uff0cNode \u5143\u7d20\u5728\u65b0\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u4f4d\u7f6e\u53d1\u751f\u4e86\u53d8\u5316(\u4ece2\u53d8\u6210\u4e8610)"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u95ee\u98982")),Object(b.b)("p",null,"\u5bf9\u5e94\u4e0a\u9762\u7684\u4f8b\u5b50\u5c31\u662f",Object(b.b)("inlineCode",{parentName:"p"},"\u5982\u4f55"),"\u628a\u5c31\u6570\u7ec4\u4e2d\u5728\u7d22\u5f15\u4e3a",Object(b.b)("inlineCode",{parentName:"p"},"2"),"\u7684\u5143\u7d20\uff08\u8fdb\u884c\u7b5b\u9009\uff09\u79fb\u52a8\u5230\u65b0\u6570\u7ec4\u4e2d\u7d22\u5f15\u4e3a",Object(b.b)("inlineCode",{parentName:"p"},"10"),"\u7684\u4f4d\u7f6e\u4e0a\u9762"),Object(b.b)("p",null,"\u800c\u4e0b\u9762\u7684\u8fd9\u6bb5\u4ee3\u7801\u903b\u8f91\u5c31\u662f\u5904\u7406\u4e0a\u9762\u7684\u4e8c\u4e2a\u95ee\u9898"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// \u4ee3\u7801\u6267\u884c\u5230\u8fd9\u91cc\uff0c\u8bf4\u660e e \u8fd9\u4e2a Node \u5df2\u7ecf\u662f\u94fe\u8868\u4e86\n// \u90a3\u4e48\u9700\u8981\u628a\u8fd9\u4e2a\u94fe\u8868\u8fdb\u884c \u62c6\u5206\n// \u8fd9\u91cc\u5148\u65b0\u5efa\u4e8c\u4e2a\u94fe\u8868\uff0c\u7528\u6765\u5b58\u50a8Node\nNode<K,V> loHead = null, loTail = null;// \u65b0\u94fe\u88681\nNode<K,V> hiHead = null, hiTail = null;// \u65b0\u94fe\u88682\nNode<K,V> next;\ndo {\n    next = e.next;\n    if ((e.hash & oldCap) == 0) {// \u8fdb\u884c\u7b5b\u9009\n        // \u65e7\u4f4d\u7f6e\n        if (loTail == null)\n            loHead = e;\n        else\n            loTail.next = e;\n        loTail = e;\n    }\n    else {\n        // \u65b0\u4f4d\u7f6e\n        if (hiTail == null)\n            hiHead = e;\n        else\n            hiTail.next = e;\n        hiTail = e;\n    }\n} while ((e = next) != null);\nif (loTail != null) {// \u4e0d\u4e3a\u7a7a\n    loTail.next = null;\n    newTab[j] = loHead;// \u65e7\u4f4d\u7f6e\n}\nif (hiTail != null) {// \u4e0d\u4e3a\u7a7a\n    hiTail.next = null;\n    newTab[j + oldCap] = hiHead; // \u65b0\u4f4d\u7f6e\n}\n")),Object(b.b)("h3",{id:"ehash--oldcap"},"e.hash & oldCap"),Object(b.b)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u91cd\u70b9\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"(e.hash & oldCap) == 0")," \u548c ",Object(b.b)("inlineCode",{parentName:"p"},"j + oldCap")," \u7406\u89e3\u4e86\u8fd9\u4e2a\u5c31\u638c\u63e1\u4e86\u4f5c\u8005\u7684\u601d\u60f3"),Object(b.b)("p",null,"\u8fd8\u662f\u6765\u4e3e\u4f8b:"),Object(b.b)("p",null,"\u5047\u5982\u6709\u4e8c\u4e2aNode, ",Object(b.b)("inlineCode",{parentName:"p"},"Node1.hash=2")," ,",Object(b.b)("inlineCode",{parentName:"p"},"Node2.hash=10"),"\uff0c\u65e7\u6570\u7ec4\u7684\u957f\u5ea6\u4e3a8\uff0c\u65b0\u6570\u7ec4\u957f\u5ea6\u4e3a16"),Object(b.b)("p",null,"\u90a3\u4e48\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"2&7=2")," ",Object(b.b)("inlineCode",{parentName:"p"},"10&7=2"),", ",Object(b.b)("inlineCode",{parentName:"p"},"2&15=2")," ",Object(b.b)("inlineCode",{parentName:"p"},"10&15=10")," (\u6269\u5bb9\u4e4b\u524d\u8fd9\u4e8c\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\u90fd\u662f2\uff0c\u6269\u5bb9\u4e4b\u540e\u4e00\u4e2a\u662f2\uff0c\u53e6\u4e00\u4e2a\u53d8\u6210\u4e8610)"),Object(b.b)("p",null,"\u6211\u4eec\u8fd9\u91cc\u628a\u65b0\u7684\u6570\u7ec4\u5206\u6210\u4e24\u90e8\u5206\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u65e7\u4f4d\u7f6e"),"\u548c",Object(b.b)("inlineCode",{parentName:"p"},"\u65b0\u4f4d\u7f6e"),"\uff08\u53ea\u662f\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff09\uff0c\u5982\u4e0b\u56fe:"),Object(b.b)("p",null,Object(b.b)("img",Object(t.a)({parentName:"p"},{src:"/images/hashmap-new-array.png",alt:"hashmap-new-array.png"}))),Object(b.b)("p",null,"\u90a3\u4e48 ",Object(b.b)("inlineCode",{parentName:"p"},"Node1.hash=2")," \u5e94\u8be5\u653e\u5728",Object(b.b)("inlineCode",{parentName:"p"},"\u65e7\u6570\u7ec4"),"\u7684\u4f4d\u7f6e\uff0c ",Object(b.b)("inlineCode",{parentName:"p"},"Node2.hash=10")," \u5e94\u8be5\u653e\u5728",Object(b.b)("inlineCode",{parentName:"p"},"\u65b0\u6570\u7ec4"),"\u7684\u4f4d\u7f6e\uff08\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1get\u5728\u65b0\u6570\u7ec4\u4e2d\u6267\u884cHash\u8ba1\u7b97\u7684\u4f4d\u7f6e\u662f\u6b63\u786e\u7684\uff09"),Object(b.b)("p",null,"hashmap \u4e2d\u6570\u7ec4\u7684\u957f\u5ea6\u90fd\u662f2\u7684n\u6b21\u65b9,\u5982\uff1a $2^3=8$ ,\u800c2\u7684n\u6b21\u65b9\u7684\u7ed3\u679c\uff0c\u8fd9\u4e2a\u7684\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u6709\u4e00\u4e2a\u7279\u70b9\uff0c\u5c31\u662f\u6709\u6548\u4f4d\u9ad8\u4f4d\u662f1\uff0c\u4f4e\u4f4d\u90fd\u662f0\uff0c\u5982",Object(b.b)("inlineCode",{parentName:"p"},"8"),"\u7684\u4e8c\u8fdb\u5236\u662f",Object(b.b)("inlineCode",{parentName:"p"},"1000"),",",Object(b.b)("inlineCode",{parentName:"p"},"16"),"\u7684\u4e8c\u8fdb\u5236",Object(b.b)("inlineCode",{parentName:"p"},"10000")),Object(b.b)("p",null,"\u5982\u679c hash<8,hash\u4e0e8\u8fdb\u884c&\u8ba1\u7b97\uff0c\u7ed3\u679c\u80af\u5b9a\u662f0(hash<8,\u610f\u5473\u7740hash\u7684\u4e8c\u8fdb\u5236\u7684\u6700\u9ad8\u4f4d\u80af\u5b9a\u662f0,\u4e0d\u662f1),\u6bd4\u5982 ",Object(b.b)("inlineCode",{parentName:"p"},"100 & 1000"),", ",Object(b.b)("inlineCode",{parentName:"p"},"10 & 1000"),", ",Object(b.b)("inlineCode",{parentName:"p"},"1 &1000")),Object(b.b)("p",null,"\u800c ",Object(b.b)("inlineCode",{parentName:"p"},"(e.hash & oldCap) == 0")," \u7684\u6700\u7ec8\u76ee\u7684\u5c31\u662f\u6839\u636e&\u7ed3\u679c\u662f\u5426\u4e3a\u96f6,\u6765\u786e\u5b9a\u8fd9\u4e2a\u5143\u7d20\u5230\u5e95\u662f\u653e\u5728",Object(b.b)("inlineCode",{parentName:"p"},"\u65e7\u4f4d\u7f6e"),"\u8fd8\u662f",Object(b.b)("inlineCode",{parentName:"p"},"\u65b0\u4f4d\u7f6e")),Object(b.b)("h3",{id:"j--oldcap"},"j + oldCap"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u65e7\u4f4d\u7f6e\uff1a ",Object(b.b)("inlineCode",{parentName:"li"},"newTab[j] = loHead")),Object(b.b)("li",{parentName:"ul"},"\u65b0\u4f4d\u7f6e\uff1a ",Object(b.b)("inlineCode",{parentName:"li"},"newTab[j + oldCap] = hiHead"))),Object(b.b)("p",null,"\u4e0b\u9762\u8bf4\u660e\u4e0b\u4e3a\u4ec0\u4e48\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"j + oldCap")," \u6765\u8ba1\u7b97\u65b0\u4f4d\u7f6e"),Object(b.b)("p",null,"\u5982\u679c\uff1a ",Object(b.b)("inlineCode",{parentName:"p"},"hash=10")," ",Object(b.b)("inlineCode",{parentName:"p"},"oldCap =8")," ",Object(b.b)("inlineCode",{parentName:"p"},"newCap=16")),Object(b.b)("p",null,"\u65e7index\uff1a ",Object(b.b)("inlineCode",{parentName:"p"},"1010 & 01000")),Object(b.b)("p",null,"\u65b0index\uff1a ",Object(b.b)("inlineCode",{parentName:"p"},"1010 & 10000")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"\u4e8c\u8fdb\u5236"),Object(b.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"\u5341\u8fdb\u5236"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u800c (1010 & 10000) - (1010 & 01000) = 01000 = oldCap"),Object(b.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u65b0 - \u65e7 =oldCap")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u6240\u4ee5 (1010 & 10000) =   (1010 & 01000)  +oldCap"),Object(b.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u65b0 = \u65e7  +oldCap")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u5373 (1010 & 10000) = j + oldCap"),Object(b.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u65b0 = j+oldCap")))),Object(b.b)("p",null,Object(b.b)("a",Object(t.a)({parentName:"p"},{href:"#links"}),"\u5982\u679c\u8fd9\u91cc\u6ca1\u770b\u61c2\uff0c\u53ef\u4ee5\u770b\u6587\u7ae0\u672b\u5c3e\u7684\u8fde\u63a5")),Object(b.b)("h2",{id:"links"},"Links"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"https://segmentfault.com/a/1190000015812438"}),"HashMap \u6269\u5bb9")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.jianshu.com/p/ee0de4c99f87"}),"HashMap \u6269\u5bb9"))))}c.isMDXComponent=!0},144:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return u}));var t=a(0),l=a.n(t);function b(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){b(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},b=Object.keys(e);for(t=0;t<b.length;t++)a=b[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(t=0;t<b.length;t++)a=b[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),c=function(e){var n=l.a.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=c(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},j={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},h=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,b=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(a),h=t,u=d["".concat(i,".").concat(h)]||d[h]||j[h]||b;return a?l.a.createElement(u,r(r({ref:n},o),{},{components:a})):l.a.createElement(u,r({ref:n},o))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var b=a.length,i=new Array(b);i[0]=h;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:t,i[1]=r;for(var o=2;o<b;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);