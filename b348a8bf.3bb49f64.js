(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(144));const c={id:"kubernetes-install-bin",title:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5",author:"web1992",author_title:"Code of Java",author_url:"https://github.com/web1992",author_image_url:"/img/avatars3.jpeg",tags:["k8s"]},l={permalink:"/blog/kubernetes-install-bin",editUrl:"https://github.com/web1992/blog/tree/master/blog/kubernetes-install-bin.md",source:"@site/blog/kubernetes-install-bin.md",description:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5 (OS: CentOS 7)",date:"2020-07-22T14:57:44.376Z",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"}],title:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5",readingTime:3.59,truncated:!0,prevItem:{title:"ReentrantLock \u7b80\u4ecb",permalink:"/blog/reentrant-lock"},nextItem:{title:"Java \u4e4b SelectionKey \u5b9e\u73b0\u6280\u5de7",permalink:"/blog/nio-selection-key"}},b=[{value:"kubernetes install bin",id:"kubernetes-install-bin",children:[]},{value:"\u5b89\u88c5\u7ec4\u4ef6\u56fe",id:"\u5b89\u88c5\u7ec4\u4ef6\u56fe",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]},{value:"Master",id:"master",children:[{value:"kube-apiserver.service",id:"kube-apiserverservice",children:[]},{value:"kube-controller-manager.service",id:"kube-controller-managerservice",children:[]},{value:"kube-controller-scheduler.service",id:"kube-controller-schedulerservice",children:[]},{value:"etcd.service",id:"etcdservice",children:[]},{value:"docker.service",id:"dockerservice",children:[]},{value:"Master as Node",id:"master-as-node",children:[]},{value:"flanneld.service",id:"flanneldservice",children:[]}]},{value:"Node",id:"node",children:[{value:"Node flanneld.service",id:"node-flanneldservice",children:[]},{value:"Node docker.service",id:"node-dockerservice",children:[]},{value:"kubectl",id:"kubectl",children:[]},{value:"kubelet.service",id:"kubeletservice",children:[]},{value:"kube-proxy.service",id:"kube-proxyservice",children:[]}]},{value:"k8s \u5b89\u5168\u8bbe\u7f6e",id:"k8s-\u5b89\u5168\u8bbe\u7f6e",children:[{value:"Master \u7b7e\u53d1\u8bc1\u4e66",id:"master-\u7b7e\u53d1\u8bc1\u4e66",children:[]},{value:"Node \u7b7e\u53d1\u8bc1\u4e66",id:"node-\u7b7e\u53d1\u8bc1\u4e66",children:[]}]},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[]},{value:"Link",id:"link",children:[]}],i={rightToc:b};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5 (OS: CentOS 7)"),Object(a.b)("h2",{id:"kubernetes-install-bin"},"kubernetes install bin"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kubernetes-install-bin"}),"kubernetes install bin")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#%E5%AE%89%E8%A3%85%E7%BB%84%E4%BB%B6%E5%9B%BE"}),"\u5b89\u88c5\u7ec4\u4ef6\u56fe")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#%E4%B8%8B%E8%BD%BD"}),"\u4e0b\u8f7d")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#master"}),"Master"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-apiserverservice"}),"kube-apiserver.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-controller-managerservice"}),"kube-controller-manager.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-controller-schedulerservice"}),"kube-controller-scheduler.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#etcdservice"}),"etcd.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#dockerservice"}),"docker.service"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#install-docker-on-centos"}),"install docker on centos")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#%E8%AE%BE%E7%BD%AE%E9%95%9C%E5%83%8F%E5%9C%B0%E5%9D%80"}),"\u8bbe\u7f6e\u955c\u50cf\u5730\u5740")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#master-as-node"}),"Master as Node")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#flanneldservice"}),"flanneld.service")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#node"}),"Node"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#node-flanneldservice"}),"Node flanneld.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#node-dockerservice"}),"Node docker.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kubectl"}),"kubectl")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kubeletservice"}),"kubelet.service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-proxyservice"}),"kube-proxy.service")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#k8s-%E5%AE%89%E5%85%A8%E8%AE%BE%E7%BD%AE"}),"k8s \u5b89\u5168\u8bbe\u7f6e"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#master-%E7%AD%BE%E5%8F%91%E8%AF%81%E4%B9%A6"}),"Master \u7b7e\u53d1\u8bc1\u4e66")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#node-%E7%AD%BE%E5%8F%91%E8%AF%81%E4%B9%A6"}),"Node \u7b7e\u53d1\u8bc1\u4e66")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"}),"\u5e38\u7528\u547d\u4ee4")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#link"}),"Link"))),Object(a.b)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6\u56fe"},"\u5b89\u88c5\u7ec4\u4ef6\u56fe"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/images/k8s-bin.png",alt:"k8s-bin.png"}))),Object(a.b)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),Object(a.b)("p",null,"\u4e0b\u8f7d\u6309\u7167\u6240\u9700\u8981\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/coreos/flannel/releases/tag/v0.12.0"}),"https://github.com/coreos/flannel/releases/tag/v0.12.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kubernetes/kubernetes/releases/tag/v1.18.6"}),"https://github.com/kubernetes/kubernetes/releases/tag/v1.18.6")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/etcd-io/etcd/releases/tag/v3.4.10"}),"https://github.com/etcd-io/etcd/releases/tag/v3.4.10"))),Object(a.b)("p",null,"\u4e0b\u8f7d\u7684\u6587\u4ef6\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"linux-arm64.tar.gz")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u5373\u53ef"),Object(a.b)("h2",{id:"master"},"Master"),Object(a.b)("p",null,"Master \u8282\u70b9\u9700\u8981\u5b89\u88c5\u7684\u670d\u52a1"),Object(a.b)("p",null,"\u6240\u6709\u7684\u670d\u52a1\u90fd\u662f\u57fa\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"systemd")," \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406\uff0c\u5b89\u88c5\u4e4b\u524d\u9700\u8981\u77e5\u9053 ",Object(a.b)("inlineCode",{parentName:"p"},"systemd")," \u76f8\u5173\u7684\u77e5\u8bc6,\u6587\u672b\u6709\u94fe\u63a5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# pwd\n/usr/lib/systemd/system\n\nkube-apiserver.service\nkube-controller-manager.service\nkube-controller-scheduler.service\nkubelet.service\nkube-proxy.service\nflanneld.service\ndocker.service\netcd.service\n")),Object(a.b)("p",null,"\u4e0b\u9762\u662f\u5404\u4e2a\u670d\u52a1\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u542f\u52a8\u5373\u53ef"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"systemctl enable kube-apiserver.service\nsystemctl start kube-apiserver.service\nsystemctl status kube-apiserver.service\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u5982\u679c\u542f\u52a8\u5931\u8d25\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"journalctl -f")," \u67e5\u770b\u65e5\u5fd7\uff0c\u6216\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"ExecStart")," \u5bf9\u5e94\u7684\u6267\u884c\u6587\u4ef6\u8def\u5f84\u8fdb\u884c\u624b\u52a8\u542f\u52a8\uff0c\u67e5\u770b\u65e5\u5fd7"))),Object(a.b)("h3",{id:"kube-apiserverservice"},"kube-apiserver.service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kube-apiserver.service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Kubernetes  API Server\nAfter=etcd.service\nWants=etcd.service\n\n[Service]\nType=notify\nEnvironmentFile=/etc/kubernetes/apiserver\nExecStart=/usr/bin/kube-apiserver $KUBE_API_ARGS\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'KUBE_API_ARGS="--etcd-servers=http://127.0.0.1:2379 \\\n--insecure-bind-address=0.0.0.0 \\\n--insecure-port=8080 \\\n--service-cluster-ip-range=169.169.0.0/16 \\\n--service-node-port-range=1-65535 \\\n--logtostderr=false \\\n--log-dir=/var/log/kubernetes \\\n--v=0 \\\n--enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,TaintNodesByCondition,Priority,DefaultTolerationSeconds,DefaultStorageClass,StorageObjectInUseProtection,PersistentVolumeClaimResize,RuntimeClass,CertificateApproval,CertificateSigning,CertificateSubjectRestriction,DefaultIngressClass,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota"\n')),Object(a.b)("h3",{id:"kube-controller-managerservice"},"kube-controller-manager.service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kube-controller-manager.service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Kubernetes Controller Server\nAfter=kube-apiserver.service\nRequires=kube-apiserver.service\n\n[Service]\nEnvironmentFile=/etc/kubernetes/controller-manager\nExecStart=/usr/bin/kube-controller-manager $KUBE_CONTROLLER_MANAGER_ARGS\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("h3",{id:"kube-controller-schedulerservice"},"kube-controller-scheduler.service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kube-controller-scheduler.service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Kubernetes Scheduler Server\nAfter=kube-apiserver.service\nRequires=kube-apiserver.service\n\n[Service]\nEnvironmentFile=/etc/kubernetes/scheduler\nExecStart=/usr/bin/kube-scheduler $KUBE_SCHEDULER_ARGS\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("h3",{id:"etcdservice"},"etcd.service"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Etcd Server\nAfter=network.target\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=simple\nWorkingDirectory=/var/lib/etcd/\nEnvironmentFile=-/etc/etcd/etcd.conf\nExecStart=/usr/bin/etcd --enable-v2=true --listen-client-urls=http://0.0.0.0:2379 --advertise-client-urls=http://0.0.0.0:2379\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u7684\u662f etcd3\uff0cetcd \u7684\u53c2\u6570\u9700\u8981\u6dfb\u52a0 --enable-v2=true \u6307\u5b9a\u542f\u7528 v2 api (http)"))),Object(a.b)("h3",{id:"dockerservice"},"docker.service"),Object(a.b)("h4",{id:"install-docker-on-centos"},"install docker on centos"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo yum check-update\n\ncurl -fsSL https://get.docker.com/ | sh\n\nsudo systemctl start docker\n\nsudo systemctl status docker\n\n# Lastly, make sure it starts at every server reboot:\nsudo systemctl enable docker\n\n")),Object(a.b)("h4",{id:"\u8bbe\u7f6e\u955c\u50cf\u5730\u5740"},"\u8bbe\u7f6e\u955c\u50cf\u5730\u5740"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "registry-mirrors": ["https://registry.docker-cn.com"]\n}\n')),Object(a.b)("h3",{id:"master-as-node"},"Master as Node"),Object(a.b)("p",null,"\u628a Master \u4e5f\u5f53\u505a Node \u52a0\u5165\u96c6\u7fa4,\u9700\u8981\u5b89\u88c5\u4e0b\u9762\u7684\u670d\u52a1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"kubelet.service"),Object(a.b)("li",{parentName:"ul"},"kube-proxy.service")),Object(a.b)("p",null,"\u9700\u8981\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"kubectl taint nodes --all node-role.kubernetes.io/master-\n")),Object(a.b)("h3",{id:"flanneldservice"},"flanneld.service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"flanneld")," \u5b89\u88c5\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9 Pod \u76f4\u63a5\u8fdb\u884c\u901a\u4fe1"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"flanneld.service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-[Unit]"}),"Description=Flanneld\nDocumentation=https://github.com/coreos/flannel\nAfter=network.target\nBefore=docker.service\n\n[Service]\nExecStart=/usr/bin/flanneld --etcd-endpoints=${FLANNELD_ETCD} --public-ip=81.68.100.22 --iface=eth0\nEnvironmentFile=/etc/kubernetes/flanneld\nRestart=on-failure\nType=notify\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'# cat /etc/kubernetes/flanneld\nFLANNELD_ETCD="http://127.0.0.1:2379"\nFLANNELD_OPTIONS="/coreos.com/network"\n')),Object(a.b)("h2",{id:"node"},"Node"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# pwd\n/usr/lib/systemd/system\n\nkubelet.service\nkube-proxy.service\nflanneld.service\ndocker.service\n")),Object(a.b)("h3",{id:"node-flanneldservice"},"Node flanneld.service"),Object(a.b)("p",null,"\u4e0e Master \u5b89\u88c5 \u65b9\u5f0f\u4e00\u81f4"),Object(a.b)("h3",{id:"node-dockerservice"},"Node docker.service"),Object(a.b)("p",null,"\u4e0e Master \u5b89\u88c5 \u65b9\u5f0f\u4e00\u81f4"),Object(a.b)("h3",{id:"kubectl"},"kubectl"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl")," \u662f\u94fe\u63a5\u5230 k8s \u96c6\u7fa4\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5982\u679c\u96c6\u7fa4\u4f7f\u7528\u4e86\u8bc1\u4e66\uff0c\u5c31\u9700\u8981\u914d\u7f6e\u8bc1\u4e66\uff0c\u5426\u5219\u4e0d\u9700\u8981\u914d\u7f6e"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl")," \u53ef\u4ee5\u5b89\u88c5\u5230\u4efb\u4f55\u673a\u5668\u4e0a\uff0c\u5b89\u88c5\u4e4b\u540e\uff0c\u914d\u7f6e\u4e0b\u96c6\u7fa4\u5730\u5740\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86"),Object(a.b)("p",null,"\u914d\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"~/.kube/config")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority:aaa\n    server: https://192.167.0.1:6443\n  name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\nkind: Config\npreferences: {}\nusers:\n- name: kubernetes-admin\n  user:\n    client-certificate: aa\n    client-key: aa\n")),Object(a.b)("h3",{id:"kubeletservice"},"kubelet.service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubelet.service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=kubelet: The Kubernetes Node Agent\nDocumentation=https://kubernetes.io/docs/\nWants=docker.service\nRequires=docker.service\n\n[Service]\nEnvironmentFile=/etc/kubernetes/kubelet\nWorkingDirectory=/var/lib/kubelet\nExecStart=/usr/bin/kubelet $KUBELETE_ARGS\nRestart=always\nStartLimitInterval=0\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("h3",{id:"kube-proxyservice"},"kube-proxy.service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kube-proxy.service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=kubelet: The Kubernetes Node Agent\nDocumentation=https://kubernetes.io/docs/\nAfter=network.target\nRequires=network.target\n\n[Service]\nEnvironmentFile=/etc/kubernetes/proxy\nExecStart=/usr/bin/kube-proxy $KUBE_PROXY_ARGS\nRestart=always\nStartLimitInterval=0\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/etc/kubernetes/proxy")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'KUBE_PROXY_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \\\n--hostname-override=huawei \\\n--logtostderr=false \\\n--log-dir=/var/log/kubernetes \\\n--v=5"\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/etc/kubernetes/kubelet")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'KUBELETE_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \\\n--hostname-override=huawei \\\n--logtostderr=false \\\n--log-dir=/var/log/kubernetes \\\n--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2 \\\n--v=5"\n')),Object(a.b)("h2",{id:"k8s-\u5b89\u5168\u8bbe\u7f6e"},"k8s \u5b89\u5168\u8bbe\u7f6e"),Object(a.b)("h3",{id:"master-\u7b7e\u53d1\u8bc1\u4e66"},"Master \u7b7e\u53d1\u8bc1\u4e66"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"csr.conf")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[ req ]\ndefault_bits = 2048\nprompt = no\ndefault_md = sha256\nreq_extensions = req_ext\ndistinguished_name = dn\n\n[ dn ]\nC = CN\nST = CNST\nL = SH\nO = web1992\nOU = web1992\nCN = 192.168.1.10\n\n[ req_ext ]\nsubjectAltName = @alt_names\n\n[ alt_names ]\nDNS.1 = kubernetes\nDNS.2 = kubernetes.default\nDNS.3 = kubernetes.default.svc\nDNS.4 = kubernetes.default.svc.cluster\nDNS.5 = kubernetes.default.svc.cluster.local\nIP.1 = 192.168.1.10\nIP.2 = 169.169.0.1\n\n[ v3_ext ]\nauthorityKeyIdentifier=keyid,issuer:always\nbasicConstraints=CA:FALSE\nkeyUsage=keyEncipherment,dataEncipherment\nextendedKeyUsage=serverAuth,clientAuth\nsubjectAltName=@alt_names\n\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'openssl genrsa -out ca.key 2048\nopenssl req -x509 -new -nodes -key ca.key -subj "/CN=\u4e3b\u673a\u7684\u540d\u79f0" -days 10000 -out ca.crt\nopenssl genrsa -out server.key 2048\nopenssl req -new -key server.key -out server.csr -config csr.conf\nopenssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 10000 -extensions v3_ext -extfile csr.conf\n')),Object(a.b)("p",null,"\u4fee\u6539\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"--client-ca-file=/etc/kubernetes/ca.crt \\\n--tls-private-key-file=/etc/kubernetes/server.key \\\n--tls-cert-file=/etc/kubernetes/server.crt \\\n--insecure-port=0 \\\n--secure-port=6443 \\\n")),Object(a.b)("h3",{id:"node-\u7b7e\u53d1\u8bc1\u4e66"},"Node \u7b7e\u53d1\u8bc1\u4e66"),Object(a.b)("p",null,"\u4f9d\u8d56 \u5728 Master \u4e0a\u751f\u4ea7\u7684 ca.crt \u6587\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'openssl genrsa -out cs_client.key 2048\nopenssl req  -new  -key cs_client.key -subj "/CN=121.36.133.225" -days 10000 -out cs_client.csr\nopenssl x509 -req -in cs_client.csr   -CA ca.crt -CAkey ca.key -CAcreateserial -out cs_client.crt -days 10000\n')),Object(a.b)("p",null,"kubectl --server=",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://192.168.1.10:6443"}),"https://192.168.1.10:6443")," \\\n--client-certificate=/etc/kubernetes/cs_client.crt \\\n--client-key=/etc/kubernetes/cs_client.key \\\n--certificate-authority=/etc/kubernetes/ca.crt get nodes"),Object(a.b)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"systemctl enable kube-apiserver.service\nsystemctl start kube-apiserver.service\nsystemctl status kube-apiserver.service\n\nsystemctl enable kube-controller-manager\nsystemctl start kube-controller-manager\nsystemctl status kube-controller-manager\n\nsystemctl enable kube-controller-scheduler\nsystemctl start kube-controller-scheduler\nsystemctl status kube-controller-scheduler\n")),Object(a.b)("h2",{id:"link"},"Link"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"}),"systemd")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/zh/docs/concepts/cluster-administration/certificates/"}),"https://kubernetes.io/zh/docs/concepts/cluster-administration/certificates/"))))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||c;return n?a.a.createElement(m,b(b({ref:t},s),{},{components:n})):a.a.createElement(m,b({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var s=2;s<c;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);