import{_ as h,o as n,c as o,j as e,F as p,r as u,t as a,u as c,f as i,p as b,q as g,a as v,w as $}from"./app.9b309603.js";const f=[{type:"alipay",title:"支付宝",path:"https://mp-8b005489-7724-4f8c-afdd-30192ff4f7ae.cdn.bspapp.com/cloudstorage/a21e9954-22f2-43fe-b3b0-3dba1fdde3ed.jpg"},{type:"wechat",title:"微信",path:"https://mp-8b005489-7724-4f8c-afdd-30192ff4f7ae.cdn.bspapp.com/cloudstorage/61a57135-2e65-4d51-8be1-03b8bd1c595e.jpg"},{type:"qq",title:"QQ",path:"https://mp-8b005489-7724-4f8c-afdd-30192ff4f7ae.cdn.bspapp.com/cloudstorage/69fb1903-d0dc-4169-9a02-1e76ec8e7761.jpg"}],w=[{name:"**伟",money:6.66,type:"alipay",date:"2023-04-20"},{name:"Jesse",money:66.66,type:"alipay",date:"2023-03-23"},{name:"对*.",money:10,type:"wechat",date:"2023-01-11"},{name:"*负能量",money:5,type:"wechat",date:"2022-12-30"},{name:"*羊",money:1,type:"wechat",date:"2022-12-11"},{name:"*奶",money:1.88,type:"wechat",date:"2022-10-27"},{name:"*洋",money:1,type:"wechat",date:"2022-10-18"}];const r=d=>(b("data-v-4f5db4a4"),d=d(),g(),d),S=r(()=>e("h2",null,"赞助方式",-1)),x={class:"sponsor-pay"},j={class:"sponsor-pay-item"},I={class:"pay-img-item"},L=["href"],k=["src","alt","title"],q={class:"sponsor-content"},B=r(()=>e("h2",null,"赞助列表",-1)),N={class:"sponsor-table"},D=r(()=>e("thead",null,[e("td"),e("td",null,"老板"),e("td",null,"￥金额"),e("td",null,"赞助方式"),e("td",null,"日期")],-1)),E={class:"number"},F={__name:"SponsorsLog",setup(d){let l={};return f.forEach(s=>{l[s.type]=s.title}),(s,m)=>(n(),o(p,null,[S,e("div",x,[(n(!0),o(p,null,u(c(f),t=>(n(),o("div",j,[e("div",I,[e("a",{href:t.path,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:t.path,alt:t.type,title:t.title},null,8,k)],8,L)]),e("div",null,a(t.title),1)]))),256))]),e("div",q,[i(s.$slots,"default",{},void 0,!0)]),B,e("table",N,[D,(n(!0),o(p,null,u(c(w),(t,_)=>(n(),o("tr",null,[e("td",E,a(_+1),1),e("td",null,a(t.name),1),e("td",null,a(t.money),1),e("td",null,a(c(l)[t.type]),1),e("td",null,a(t.date),1)]))),256))]),i(s.$slots,"footer",{},void 0,!0)],64))}},J=h(F,[["__scopeId","data-v-4f5db4a4"]]),z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"sponsors/index.md","lastUpdated":1682380563000}'),Q={name:"sponsors/index.md"},V=e("p",null,"因为微信和支付宝并不支持个人的接口调用，所以赞助名单上的信息都是我手动添加的，更新不一定及时，还请见谅。",-1),C=e("p",null,"非常感谢以下网友的打赏。",-1),O=e("p",null," 如果能留下你的称呼和备注/链接就再好不过了，我将会把您添加至赞助者列表中。 （没留的话，就默认使用可以看到的昵称了～）（也可以联系我添加链接） ",-1);function P(d,l,s,m,t,_){const y=J;return n(),o("div",null,[V,C,v(y,null,{default:$(()=>[O]),_:1})])}const A=h(Q,[["render",P]]);export{z as __pageData,A as default};
