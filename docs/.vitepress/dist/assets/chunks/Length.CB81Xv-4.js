import{u as C,h as u,o as a,c as m,m as o,t as r,p as e,a5 as p,a6 as M,a7 as v,a8 as K,F as _,G as g}from"./framework.Cnxx3bhn.js";const b=JSON.parse('{"data":[{"id":"km-to-m","tag":"length","meta":{"title":"Km to m","desc":"Convert Kilometer to Meter"},"opt1":["km","m","cm"],"opt2":["m","km","cm"]},{"id":"m-to-km","tag":"length","meta":{"title":"m to Km","desc":"Convert Meter to Kilometer"},"opt1":["m","km","cm"],"opt2":["km","m","cm"]},{"id":"cm-to-m","tag":"length","meta":{"title":"cm to m","desc":"Convert Centimeter to Meter"},"opt1":["cm","km","m"],"opt2":["m","km","cm"]}]}'),w={class:""},B=o("br",null,null,-1),D={class:"select"},S=["value"],V={name:"",id:""},y=["value"],F={class:"ans"},x={__name:"Length",setup(L){const{params:h}=C(),s=b.data.filter(n=>n.id==h.value.length)[0];let k=u("😎"),i=u(""),c=u(s.opt1[0]),f=u(s.opt2[0]),d=n=>{console.log(n.target.value),window.open(`/meu/length/${n.target.value}-to-${f.value}`,"_self")};return(n,l)=>(a(),m("div",w,[o("h1",null,r(e(s).meta.title),1),o("h3",null,r(e(s).meta.desc),1),B,o("div",D,[p(o("input",{type:"text",placeholder:"type ...","onUpdate:modelValue":l[0]||(l[0]=t=>v(i)?i.value=t:i=t)},null,512),[[M,e(i)]]),p(o("select",{name:"length",id:"length","onUpdate:modelValue":l[1]||(l[1]=t=>v(c)?c.value=t:c=t),onInput:l[2]||(l[2]=(...t)=>e(d)&&e(d)(...t))},[(a(!0),m(_,null,g(e(s).opt1,t=>(a(),m("option",{value:t},r(t),9,S))),256))],544),[[K,e(c)]]),o("select",V,[(a(!0),m(_,null,g(e(s).opt2,t=>(a(),m("option",{value:t,default:""},r(t),9,y))),256))]),o("div",F,r(e(k)),1)]),o("button",{class:"btn convert",onClick:l[3]||(l[3]=t=>n.convert())}," convert ")]))}};export{x as _};