import{u as s,r as e,ab as o,q as t,o as n,c as l,d as a,e as i,l as u,p as m,m as p,ac as d}from"./index.1705924948177.js";import{_ as c}from"./edit.1705924948177.js";import{b as r}from"./href.1705924948177.js";const v=["onClick"],k=[i("img",{src:"/dist/assets/add.1705924948177.svg"},null,-1),i("span",null,"添加图标",-1)],g=["onClick"],C=[i("img",{src:"/dist/assets/class.1705924948177.svg"},null,-1),i("span",null,"创建分类",-1)],f=["onClick"],h=[i("img",{src:c},null,-1),i("span",null,"批量编辑",-1)],x=["onClick"],w=[i("img",{src:"/dist/assets/reload.1705924948177.svg"},null,-1),i("span",null,"刷新页面",-1)],I=["onClick"],M=[i("img",{src:"/dist/assets/setting.1705924948177.svg"},null,-1),i("span",null,"设置",-1)],b={__name:"deskTopMouse",setup(c){const b=s(),j=e(!1),y=o({top:"0px",left:"0px"}),L=()=>{r("tab://setting"),j.value=!1},T=()=>{let s={id:d(),size:"2x2",component:"iconGroup",name:"创建分组",type:"component",url:"iconGroup",children:[]};b.state.link.push(s),b.commit("updateLink"),j.value=!1},_=()=>{b.state.editStatus=!0,j.value=!1},E=()=>{r("tab://addicon"),j.value=!1},G=()=>{t.emit("reload"),j.value=!1},q=s=>{y.top=s.top+"px",y.left=s.left+"px",j.value=!0},z=s=>{j.value&&(j.value=!1)};return window.addEventListener("mousedown",z),t.on("deskTopMouse",q),n((()=>{window.removeEventListener("mousedown",z),t.off("deskTopMouse",q)})),(s,e)=>j.value?(l(),a("div",{key:0,class:"mouseMenu",style:m(y),onMousedown:e[0]||(e[0]=u((()=>{}),["stop"])),onContextmenu:e[1]||(e[1]=u((()=>{}),["prevent"]))},[i("div",{onClick:u(E,["stop"]),class:"mouseItem mhover"},k,8,v),i("div",{onClick:u(T,["stop"]),class:"mouseItem mhover"},C,8,g),i("div",{onClick:u(_,["stop"]),class:"mouseItem mhover"},h,8,f),i("div",{onClick:u(G,["stop"]),class:"mouseItem mhover"},w,8,x),i("div",{onClick:u(L,["stop"]),class:"mouseItem mhover"},M,8,I)],36)):p("",!0)}};export{b as default};
