import{u as e,b as l,c as n,d as a,e as o,k as s,j as p}from"./index.1705924948177.js";const u={class:"openType space-y-2"},t=o("span",null,"搜索新页面打开",-1),c=o("span",null,"标签新页面打开",-1),d=o("span",null,"进入程序自动聚焦搜索",-1),m=o("span",null,"搜索词联想功能",-1),i=o("span",null,"图标快捷搜索展示",-1),g={__name:"openType",setup(g){const f=e(),V=()=>{f.commit("updateConfig")};return(e,g)=>{const r=l("el-switch");return n(),a("div",u,[o("div",null,[t,s(r,{onChange:V,modelValue:p(f).state.config.openType.searchOpen,"onUpdate:modelValue":g[0]||(g[0]=e=>p(f).state.config.openType.searchOpen=e),class:"ml-2"},null,8,["modelValue"])]),o("div",null,[c,s(r,{onChange:V,modelValue:p(f).state.config.openType.linkOpen,"onUpdate:modelValue":g[1]||(g[1]=e=>p(f).state.config.openType.linkOpen=e),class:"ml-2"},null,8,["modelValue"])]),o("div",null,[d,s(r,{onChange:V,modelValue:p(f).state.config.openType.autofocus,"onUpdate:modelValue":g[2]||(g[2]=e=>p(f).state.config.openType.autofocus=e),class:"ml-2"},null,8,["modelValue"])]),o("div",null,[m,s(r,{onChange:V,modelValue:p(f).state.config.openType.searchRecommend,"onUpdate:modelValue":g[3]||(g[3]=e=>p(f).state.config.openType.searchRecommend=e),class:"ml-2"},null,8,["modelValue"])]),o("div",null,[i,s(r,{onChange:V,modelValue:p(f).state.config.openType.searchLink,"onUpdate:modelValue":g[4]||(g[4]=e=>p(f).state.config.openType.searchLink=e),class:"ml-2"},null,8,["modelValue"])])])}}};export{g as default};
