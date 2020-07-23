(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(144)),l={id:"kubernetes-install-bin",title:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5",author:"web1992",author_title:"Code of Java",author_url:"https://github.com/web1992",author_image_url:"img/avatars3.jpeg",tags:["k8s"]},i={permalink:"/blog/kubernetes-install-bin",editUrl:"https://github.com/web1992/blog/tree/master/blog/kubernetes-install-bin.md",source:"@site/blog/kubernetes-install-bin.md",description:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5 (OS: CentOS 7)",date:"2020-07-22T14:57:44.376Z",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"}],title:"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5",readingTime:3.19,truncated:!0,prevItem:{title:"ReentrantLock \u7b80\u4ecb",permalink:"/blog/reentrant-lock"},nextItem:{title:"Java \u4e4b SelectionKey \u5b9e\u73b0\u6280\u5de7",permalink:"/blog/nio-selection-key"}},s=[{value:"kubernetes install bin",id:"kubernetes-install-bin",children:[]},{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",children:[]},{value:"Master",id:"master",children:[{value:"kube-apiserver.service",id:"kube-apiserverservice",children:[]},{value:"kube-controller-manager.service",id:"kube-controller-managerservice",children:[]},{value:"kube-controller-scheduler.service",id:"kube-controller-schedulerservice",children:[]},{value:"etcd.service",id:"etcdservice",children:[]},{value:"docker.service",id:"dockerservice",children:[]},{value:"Master as Node",id:"master-as-node",children:[]},{value:"flanneld.service",id:"flanneldservice",children:[]}]},{value:"Node",id:"node",children:[{value:"Node flanneld.service",id:"node-flanneldservice",children:[]},{value:"Node docker.service",id:"node-dockerservice",children:[]},{value:"kubectl",id:"kubectl",children:[]},{value:"kubelet.service",id:"kubeletservice",children:[]},{value:"kube-proxy.service",id:"kube-proxyservice",children:[]}]},{value:"k8s \u5b89\u5168\u8bbe\u7f6e",id:"k8s-\u5b89\u5168\u8bbe\u7f6e",children:[{value:"Master \u7b7e\u53d1\u8bc1\u4e66",id:"master-\u7b7e\u53d1\u8bc1\u4e66",children:[]},{value:"Node \u7b7e\u53d1\u8bc1\u4e66",id:"node-\u7b7e\u53d1\u8bc1\u4e66",children:[]}]},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[]},{value:"Link",id:"link",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"k8s \u96c6\u7fa4\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5 (OS: CentOS 7)"),Object(c.b)("h2",{id:"kubernetes-install-bin"},"kubernetes install bin"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kubernetes-install-bin"}),"kubernetes install bin")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#%E5%AE%89%E8%A3%85%E7%BB%84%E4%BB%B6"}),"\u5b89\u88c5\u7ec4\u4ef6")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#master"}),"Master"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-apiserverservice"}),"kube-apiserver.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-controller-managerservice"}),"kube-controller-manager.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-controller-schedulerservice"}),"kube-controller-scheduler.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#etcdservice"}),"etcd.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#dockerservice"}),"docker.service"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#install-docker-on-centos"}),"install docker on centos")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#%E8%AE%BE%E7%BD%AE%E9%95%9C%E5%83%8F%E5%9C%B0%E5%9D%80"}),"\u8bbe\u7f6e\u955c\u50cf\u5730\u5740")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#master-as-node"}),"Master as Node")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#flanneldservice"}),"flanneld.service")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#node"}),"Node"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#node-flanneldservice"}),"Node flanneld.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#node-dockerservice"}),"Node docker.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kubectl"}),"kubectl")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kubeletservice"}),"kubelet.service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#kube-proxyservice"}),"kube-proxy.service")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#k8s-%E5%AE%89%E5%85%A8%E8%AE%BE%E7%BD%AE"}),"k8s \u5b89\u5168\u8bbe\u7f6e"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#master-%E7%AD%BE%E5%8F%91%E8%AF%81%E4%B9%A6"}),"Master \u7b7e\u53d1\u8bc1\u4e66")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#node-%E7%AD%BE%E5%8F%91%E8%AF%81%E4%B9%A6"}),"Node \u7b7e\u53d1\u8bc1\u4e66")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"}),"\u5e38\u7528\u547d\u4ee4")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#link"}),"Link"))),Object(c.b)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://web1992-1258160421.cos.ap-shanghai.myqcloud.com/k8s-bin.png",alt:"k8s-bin.png"}))),Object(c.b)("h2",{id:"master"},"Master"),Object(c.b)("p",null,"Master \u8282\u70b9\u9700\u8981\u5b89\u88c5\u7684\u670d\u52a1"),Object(c.b)("p",null,"\u6240\u6709\u7684\u670d\u52a1\u90fd\u662f\u57fa\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"systemd")," \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406\uff0c\u5b89\u88c5\u4e4b\u524d\u9700\u8981\u77e5\u9053 ",Object(c.b)("inlineCode",{parentName:"p"},"systemd")," \u76f8\u5173\u7684\u77e5\u8bc6,\u6587\u672b\u6709\u94fe\u63a5"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# pwd\n/usr/lib/systemd/system\n\nkube-apiserver.service\nkube-controller-manager.service\nkube-controller-scheduler.service\nkubelet.service\nkube-proxy.service\nflanneld.service\ndocker.service\netcd.service\n")),Object(c.b)("h3",{id:"kube-apiserverservice"},"kube-apiserver.service"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system")),Object(c.b)("p",null,"cat ",Object(c.b)("inlineCode",{parentName:"p"},"kube-apiserver.service")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Kubernetes  API Server\nAfter=etcd.service\nWants=etcd.service\n\n[Service]\nType=notify\nEnvironmentFile=/etc/kubernetes/apiserver\nExecStart=/usr/bin/kube-apiserver $KUBE_API_ARGS\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'KUBE_API_ARGS="--etcd-servers=http://127.0.0.1:2379 \\\n--insecure-bind-address=0.0.0.0 \\\n--insecure-port=8080 \\\n--service-cluster-ip-range=169.169.0.0/16 \\\n--service-node-port-range=1-65535 \\\n--logtostderr=false \\\n--log-dir=/var/log/kubernetes \\\n--v=0 \\\n--enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,TaintNodesByCondition,Priority,DefaultTolerationSeconds,DefaultStorageClass,StorageObjectInUseProtection,PersistentVolumeClaimResize,RuntimeClass,CertificateApproval,CertificateSigning,CertificateSubjectRestriction,DefaultIngressClass,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota"\n')),Object(c.b)("h3",{id:"kube-controller-managerservice"},"kube-controller-manager.service"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"kube-controller-manager.service")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Kubernetes Controller Server\nAfter=kube-apiserver.service\nRequires=kube-apiserver.service\n\n[Service]\nEnvironmentFile=/etc/kubernetes/controller-manager\nExecStart=/usr/bin/kube-controller-manager $KUBE_CONTROLLER_MANAGER_ARGS\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("h3",{id:"kube-controller-schedulerservice"},"kube-controller-scheduler.service"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"kube-controller-scheduler.service")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Kubernetes Scheduler Server\nAfter=kube-apiserver.service\nRequires=kube-apiserver.service\n\n[Service]\nEnvironmentFile=/etc/kubernetes/scheduler\nExecStart=/usr/bin/kube-scheduler $KUBE_SCHEDULER_ARGS\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("h3",{id:"etcdservice"},"etcd.service"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=Etcd Server\nAfter=network.target\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=simple\nWorkingDirectory=/var/lib/etcd/\nEnvironmentFile=-/etc/etcd/etcd.conf\nExecStart=/usr/bin/etcd --enable-v2=true --listen-client-urls=http://0.0.0.0:2379 --advertise-client-urls=http://0.0.0.0:2379\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("h3",{id:"dockerservice"},"docker.service"),Object(c.b)("h4",{id:"install-docker-on-centos"},"install docker on centos"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo yum check-update\n\ncurl -fsSL https://get.docker.com/ | sh\n\nsudo systemctl start docker\n\nsudo systemctl status docker\n\n# Lastly, make sure it starts at every server reboot:\nsudo systemctl enable docker\n\n")),Object(c.b)("h4",{id:"\u8bbe\u7f6e\u955c\u50cf\u5730\u5740"},"\u8bbe\u7f6e\u955c\u50cf\u5730\u5740"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"cat /etc/docker/daemon.json")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "registry-mirrors": ["https://registry.docker-cn.com"]\n}\n')),Object(c.b)("h3",{id:"master-as-node"},"Master as Node"),Object(c.b)("p",null,"\u628a Master \u4e5f\u5f53\u505a Node \u52a0\u5165\u96c6\u7fa4,\u9700\u8981\u5b89\u88c5\u4e0b\u9762\u7684\u670d\u52a1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"kubelet.service"),Object(c.b)("li",{parentName:"ul"},"kube-proxy.service")),Object(c.b)("p",null,"\u9700\u8981\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"kubectl taint nodes --all node-role.kubernetes.io/master-\n")),Object(c.b)("h3",{id:"flanneldservice"},"flanneld.service"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"flanneld")," \u5b89\u88c5\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9 Pod \u76f4\u63a5\u8fdb\u884c\u901a\u4fe1"),Object(c.b)("p",null,"cat flanneld.service"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-[Unit]"}),"Description=Flanneld\nDocumentation=https://github.com/coreos/flannel\nAfter=network.target\nBefore=docker.service\n\n[Service]\nExecStart=/usr/bin/flanneld --etcd-endpoints=${FLANNELD_ETCD} --public-ip=81.68.100.22 --iface=eth0\nEnvironmentFile=/etc/kubernetes/flanneld\nRestart=on-failure\nType=notify\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'# cat /etc/kubernetes/flanneld\nFLANNELD_ETCD="http://127.0.0.1:2379"\nFLANNELD_OPTIONS="/coreos.com/network"\n')),Object(c.b)("h2",{id:"node"},"Node"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# pwd\n/usr/lib/systemd/system\n\nkubelet.service\nkube-proxy.service\nflanneld.service\ndocker.service\n")),Object(c.b)("h3",{id:"node-flanneldservice"},"Node flanneld.service"),Object(c.b)("p",null,"\u4e0e Master \u5b89\u88c5 \u65b9\u5f0f\u4e00\u81f4"),Object(c.b)("h3",{id:"node-dockerservice"},"Node docker.service"),Object(c.b)("p",null,"\u4e0e Master \u5b89\u88c5 \u65b9\u5f0f\u4e00\u81f4"),Object(c.b)("h3",{id:"kubectl"},"kubectl"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"kubectl")," \u662f\u94fe\u63a5\u5230 k8s \u96c6\u7fa4\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5982\u679c\u96c6\u7fa4\u4f7f\u7528\u4e86\u8bc1\u4e66\uff0c\u5c31\u9700\u8981\u914d\u7f6e\u8bc1\u4e66\uff0c\u5426\u5219\u4e0d\u9700\u8981\u914d\u7f6e"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"kubectl")," \u53ef\u4ee5\u5b89\u88c5\u5230\u4efb\u4f55\u673a\u5668\u4e0a\uff0c\u5b89\u88c5\u4e4b\u540e\uff0c\u914d\u7f6e\u4e0b\u96c6\u7fa4\u5730\u5740\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86"),Object(c.b)("p",null,"\u914d\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"~/.kube/config")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority:aaa\n    server: https://192.167.0.1:6443\n  name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\nkind: Config\npreferences: {}\nusers:\n- name: kubernetes-admin\n  user:\n    client-certificate: aa\n    client-key: aa\n")),Object(c.b)("h3",{id:"kubeletservice"},"kubelet.service"),Object(c.b)("p",null,"cat kubelet.service"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=kubelet: The Kubernetes Node Agent\nDocumentation=https://kubernetes.io/docs/\nWants=docker.service\nRequires=docker.service\n\n[Service]\nEnvironmentFile=/etc/kubernetes/kubelet\nWorkingDirectory=/var/lib/kubelet\nExecStart=/usr/bin/kubelet $KUBELETE_ARGS\nRestart=always\nStartLimitInterval=0\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("h3",{id:"kube-proxyservice"},"kube-proxy.service"),Object(c.b)("p",null,"cat kube-proxy.service"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[Unit]\nDescription=kubelet: The Kubernetes Node Agent\nDocumentation=https://kubernetes.io/docs/\nAfter=network.target\nRequires=network.target\n\n[Service]\nEnvironmentFile=/etc/kubernetes/proxy\nExecStart=/usr/bin/kube-proxy $KUBE_PROXY_ARGS\nRestart=always\nStartLimitInterval=0\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("p",null,"cat /etc/kubernetes/proxy"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'KUBE_PROXY_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \\\n--hostname-override=huawei \\\n--logtostderr=false \\\n--log-dir=/var/log/kubernetes \\\n--v=5"\n')),Object(c.b)("p",null,"cat /etc/kubernetes/kubelet"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'KUBELETE_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \\\n--hostname-override=huawei \\\n--logtostderr=false \\\n--log-dir=/var/log/kubernetes \\\n--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2 \\\n--v=5"\n')),Object(c.b)("h2",{id:"k8s-\u5b89\u5168\u8bbe\u7f6e"},"k8s \u5b89\u5168\u8bbe\u7f6e"),Object(c.b)("h3",{id:"master-\u7b7e\u53d1\u8bc1\u4e66"},"Master \u7b7e\u53d1\u8bc1\u4e66"),Object(c.b)("p",null,"openssl genrsa -out cs_client.key 2048"),Object(c.b)("p",null,'openssl req  -new  -key cs_client.key -subj "/CN=rourou.xyz" -days 10000 -out cs_client.csr'),Object(c.b)("p",null,"openssl x509 -req -in cs_client.csr   -CA ca.crt -CAkey ca.key -CAcreateserial -out cs_client.crt -days 10000"),Object(c.b)("p",null,"client-certificate: /etc/kubernetes/cs_client.crt\nclient-key: /etc/kubernetes/cs_client.key\ncertificate-authority: /etc/kubernetes/ca.crt"),Object(c.b)("h3",{id:"node-\u7b7e\u53d1\u8bc1\u4e66"},"Node \u7b7e\u53d1\u8bc1\u4e66"),Object(c.b)("p",null,"kubectl --server=",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://192.168.1.10:6443"}),"https://192.168.1.10:6443")," \\\n--client-certificate=/etc/kubernetes/cs_client.crt \\\n--client-key=/etc/kubernetes/cs_client.key \\\n--certificate-authority=/etc/kubernetes/ca.crt get nodes"),Object(c.b)("p",null,'openssl req -x509 -new -nodes -key ca.key -subj "/CN=rourou.xyz" -days 10000 -out ca.crt'),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"[ req ]\ndefault_bits = 2048\nprompt = no\ndefault_md = sha256\nreq_extensions = req_ext\ndistinguished_name = dn\n\n[ dn ]\nC = CN\nST = CNST\nL = SH\nO = web1992\nOU = web1992\nCN = 192.168.1.10\n\n[ req_ext ]\nsubjectAltName = @alt_names\n\n[ alt_names ]\nDNS.1 = kubernetes\nDNS.2 = kubernetes.default\nDNS.3 = kubernetes.default.svc\nDNS.4 = kubernetes.default.svc.cluster\nDNS.5 = kubernetes.default.svc.cluster.local\nIP.1 = 192.168.1.10\nIP.2 = 169.169.0.1\n\n[ v3_ext ]\nauthorityKeyIdentifier=keyid,issuer:always\nbasicConstraints=CA:FALSE\nkeyUsage=keyEncipherment,dataEncipherment\nextendedKeyUsage=serverAuth,clientAuth\nsubjectAltName=@alt_names\n\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"--client-ca-file=/etc/kubernetes/ca.crt \\\n--tls-private-key-file=/etc/kubernetes/server.key \\\n--tls-cert-file=/etc/kubernetes/server.crt \\\n--insecure-port=0 \\\n--secure-port=6443 \\\n")),Object(c.b)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"systemctl enable kube-apiserver.service\nsystemctl start kube-apiserver.service\nsystemctl status kube-apiserver.service\n\nsystemctl enable kube-controller-manager\nsystemctl start kube-controller-manager\nsystemctl status kube-controller-manager\n\nsystemctl enable kube-controller-scheduler\nsystemctl start kube-controller-scheduler\nsystemctl status kube-controller-scheduler\n")),Object(c.b)("h2",{id:"link"},"Link"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"}),"systemd")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/zh/docs/concepts/cluster-administration/certificates/"}),"https://kubernetes.io/zh/docs/concepts/cluster-administration/certificates/"))))}u.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),o=u(n),d=r,m=o["".concat(l,".").concat(d)]||o[d]||p[d]||c;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);