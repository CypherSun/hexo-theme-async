import{_ as w,h,x as y,o as i,c as o,k as t,n as v,a as g,t as u,l as p,a3 as _,a4 as m,a5 as I,F as x,D as $}from"./framework.79ee6444.js";const L=["id"],S=["id"],B={class:"icon-list"},C=["onClick"],V={__name:"IconList",props:{title:String,prefix:String,icons:Array,h2:Boolean},setup(s){const d=s;let c=h(d.icons);const l=h(!0),n=h("");function f(){l.value=!l.value}function k(r){navigator.clipboard.writeText(`<i class="${d.prefix} ${r}"></i>`);const e=document.getElementById("toast");e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3e3)}return y(n,r=>{c.value=d.icons.filter(e=>e.includes(r))}),(r,e)=>(i(),o(x,null,[s.h2?(i(),o("h2",{key:1,class:"title",id:s.title},[t("span",{onClick:f},[t("i",{class:v(`fas fa-angle-${l.value?"down":"right"}`)},null,2),g("  "+u(s.title)+" ("+u(p(c).length)+") ",1)]),_(t("input",{class:"search-input","onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),placeholder:"Search Icon"},null,512),[[m,n.value]])],8,S)):(i(),o("div",{key:0,class:"title",id:s.title},[t("span",{onClick:f},[t("i",{class:v(`fas fa-angle-${l.value?"down":"right"}`)},null,2),g("  "+u(s.title)+" ("+u(p(c).length)+") ",1)]),_(t("input",{class:"search-input","onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),placeholder:"Search Icon"},null,512),[[m,n.value]])],8,L)),_(t("ul",B,[(i(!0),o(x,null,$(p(c),a=>(i(),o("li",{onClick:T=>k(a)},[t("i",{class:v(`${s.prefix} ${a}`)},null,2)],8,C))),256))],512),[[I,l.value]])],64))}},E=w(V,[["__scopeId","data-v-36d4ee94"]]);export{E as _};
