import{r as e,u as l,b as t,i as a,v as o,c as s,d,g as u,h as i,S as n,k as c,G as m,e as _,m as p,j as r,U as x,W as g,H as v,av as h}from"./index.1717935479334.js";const f={class:"relative pb-0.5",style:{"min-height":"calc(100vh - 30px)"}},b={key:0,class:"absolute w-full flex-col flex justify-center items-center h-full bg-black z-20 bg-opacity-50 rounded-lg"},y=[_("div",{class:"text-4xl font-bold text-white"},[_("span",null,"此功能属于高级版本请获取授权后使用"),_("br"),_("span",{class:"text-sm"},"浏览器扩展可以快捷导入浏览器的书签，并且作为浏览器的新标签页起始页，在速度方面比网页要快")],-1),_("a",{href:"https://mtab.cc/pricing.html",target:"_blank",class:"mt-6 text-xs p-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-8 text-white"},"获取订阅授权解锁更多功能",-1)],V=_("div",{class:"p-4 rounded-lg bg-white"},[m(" 浏览器扩展详细帮助文档："),_("a",{class:"text-blue-500",target:"_blank",href:"https://jmp6y44jr4.k.topthink.com/@mtab/liulanqikuozhanshangjia.html"},"https://jmp6y44jr4.k.topthink.com/@mtab/liulanqikuozhanshangjia.html")],-1),k=_("h2",{class:"mb-4"},"浏览器扩展基础信息",-1),w=_("div",{class:"text-sm text-red-500 mt-2"},"* 建议和程序后台版本号保持一致,    不要出现文字和字母，只需要填写数字和小数点 例如：1.0.0 ",-1),U=_("div",{class:"text-sm text-red-500 mt-2"},"* 开发环境下一般不会配置ssl所以选择http，生产环境搭配域名后请使用https ",-1),z=_("div",{class:"text-sm text-red-500 mt-2"},"* 只输入当前网站的域名，不需要http和多余的内容，程序会自己根据域名生成对应的，例如这样写：go.mtab.cc ，如果有端口号请加上端口号, 例如：go.mtab.cc:9200 ",-1),j=_("h2",{class:"mb-4"},"扩展图标 图片文件为png格式哟不要上传错啦 （尺寸单位统一为 像素px 请严格设置好尺寸）",-1),S={style:{display:"flex","align-items":"center",width:"100%"}},C=["src"],E={style:{display:"flex","align-items":"center",width:"100%"}},G=["src"],T={style:{display:"flex","align-items":"center",width:"100%"}},q=["src"],H=_("h2",{class:"mb-4"},"扩展下载地址，用于用户在网页打开扩展时提示安装的地址（不填写则不展示对应的）",-1),I=_("div",{class:"text-red-500 mt-2 text-sm"},"* 上架google后的浏览器插件商城的详情页地址",-1),D=_("div",{class:"text-red-500 mt-2 text-sm"},"* 上架edge后的浏览器插件商城的详情页地址",-1),L=_("div",{class:"text-red-500 mt-2 text-sm"},"* 打包后的下载路径一般是 /browserExt.zip?version=1.0.0 （注意的是，1.0.0每次需要换成你最新的打包版本号，防止缓存）",-1),O=_("div",{class:"text-red-500 mt-2 text-sm"},"* 构建浏览器扩展之前请先保存配置文件",-1),P={class:"flex"},W={__name:"ext",setup(W){const A=e(""),B=()=>{n({url:"/Setting/delExt"}).then((e=>{1===e.code&&(g({title:"删除成功",message:e.msg,type:"success"}),A.value="")}))},F=e(null),J=l(),K=e=>(1===e.code&&(Q.value.ext_logo_64=e.data.url),!0),M=e=>(1===e.code&&(Q.value.ext_logo_128=e.data.url),!0),N=e=>(1===e.code&&(Q.value.ext_logo_192=e.data.url),!0),Q=e({ext_name:"",ext_description:"",ext_version:"",ext_domain:"",ext_logo_64:"",ext_logo_128:"",ext_logo_192:"",ext_protocol:"https",google_ext_link:"",edge_ext_link:"",local_ext_link:""}),R=()=>{window.open(x+A.value+"?v="+Q.value.ext_version||(new Date).getTime().toString())},X=()=>{n({url:"/Setting/saveSetting",method:"post",data:{form:Q.value}}).then((e=>{v.success(e.msg),1===e.code&&Y()}))},Y=()=>{n({url:"/Setting/getSetting",method:"post",data:{role:["ext_name","ext_description","ext_version","ext_domain","ext_logo_64","ext_logo_128","ext_logo_192","ext_protocol","google_ext_link","edge_ext_link","local_ext_link"]}}).then((e=>{1===e.code&&Object.assign(Q.value,e.data),F.value=e.success,A.value=e.url}))},Z=()=>{const e=h.service({text:"正在打包中。。。请稍后"});n({url:"/admin.Index/build",method:"post",data:{extInfo:Q.value}}).then((e=>{1===e.code?(g.success(e.msg),A.value=e.data.url):g.error(e.msg)})).finally((()=>{e.close()}))};return Y(),(e,l)=>{const n=t("el-input"),g=t("el-form-item"),v=t("el-option"),h=t("el-select"),W=t("el-card"),Y=t("el-button"),$=t("el-upload"),ee=t("el-form");return a((s(),d("div",f,[F.value?(s(),u(ee,{key:1,modelValue:Q.value,"onUpdate:modelValue":l[11]||(l[11]=e=>Q.value=e),"label-position":"top"},{default:i((()=>[V,c(W,{class:"mt-4"},{default:i((()=>[k,c(g,{label:"扩展manifest名称 （name）"},{default:i((()=>[c(n,{type:"text",modelValue:Q.value.ext_name,"onUpdate:modelValue":l[0]||(l[0]=e=>Q.value.ext_name=e),placeholder:"扩展展示的名称"},null,8,["modelValue"])])),_:1}),c(g,{label:"扩展manifest简介 （description）"},{default:i((()=>[c(n,{type:"text",modelValue:Q.value.ext_description,"onUpdate:modelValue":l[1]||(l[1]=e=>Q.value.ext_description=e),placeholder:"扩展商城和管理页面的简介"},null,8,["modelValue"])])),_:1}),c(g,{label:"扩展manifest版本号（version）"},{default:i((()=>[c(n,{type:"text",modelValue:Q.value.ext_version,"onUpdate:modelValue":l[2]||(l[2]=e=>Q.value.ext_version=e),placeholder:"推荐和程序保持一致"},null,8,["modelValue"]),w])),_:1}),c(g,{label:"网站网络协议 （ext_protocol）开发环境一般为http，生产环境请务必选择https"},{default:i((()=>[c(h,{modelValue:Q.value.ext_protocol,"onUpdate:modelValue":l[3]||(l[3]=e=>Q.value.ext_protocol=e)},{default:i((()=>[c(v,{label:"http",value:"http"},{default:i((()=>[m("http")])),_:1}),c(v,{label:"https",value:"https"},{default:i((()=>[m("https")])),_:1})])),_:1},8,["modelValue"]),U])),_:1}),c(g,{label:"域名（domain）请确保您填的写域名对应的网站配置了SSL证书并且支持HTTPS"},{default:i((()=>[c(n,{type:"text",modelValue:Q.value.ext_domain,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.value.ext_domain=e),placeholder:"您的网站的域名部分，不要包含协议, 例子：go.mtab.cc"},null,8,["modelValue"]),z])),_:1})])),_:1}),c(W,{class:"mt-4"},{default:i((()=>[j,c(g,{label:"扩展图标64x64（icon）默认会作为网页的favicon"},{default:i((()=>[_("div",S,[Q.value.ext_logo_64?(s(),d("img",{key:0,src:Q.value.ext_logo_64,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,C)):p("",!0),c(n,{modelValue:Q.value.ext_logo_64,"onUpdate:modelValue":l[5]||(l[5]=e=>Q.value.ext_logo_64=e),placeholder:"请上传(64x64) logo"},{append:i((()=>[c($,{class:"upload-demo","show-file-list":!1,"on-success":K,action:r(x)+r(J).state.site.upload},{default:i((()=>[c(Y,{type:"primary"},{default:i((()=>[m("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])])),_:1}),c(g,{label:"扩展图标128x128（icon）"},{default:i((()=>[_("div",E,[Q.value.ext_logo_128?(s(),d("img",{key:0,src:Q.value.ext_logo_128,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,G)):p("",!0),c(n,{modelValue:Q.value.ext_logo_128,"onUpdate:modelValue":l[6]||(l[6]=e=>Q.value.ext_logo_128=e),placeholder:"请上传(128x128) logo"},{append:i((()=>[c($,{class:"upload-demo","show-file-list":!1,"on-success":M,action:r(x)+r(J).state.site.upload},{default:i((()=>[c(Y,{type:"primary"},{default:i((()=>[m("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])])),_:1}),c(g,{label:"扩展图标192x192（icon）"},{default:i((()=>[_("div",T,[Q.value.ext_logo_192?(s(),d("img",{key:0,src:Q.value.ext_logo_192,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,q)):p("",!0),c(n,{modelValue:Q.value.ext_logo_192,"onUpdate:modelValue":l[7]||(l[7]=e=>Q.value.ext_logo_192=e),placeholder:"请上传(192x192) logo"},{append:i((()=>[c($,{class:"upload-demo","show-file-list":!1,"on-success":N,action:r(x)+r(J).state.site.upload},{default:i((()=>[c(Y,{type:"primary"},{default:i((()=>[m("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])])),_:1})])),_:1}),c(W,{class:"mt-4"},{default:i((()=>[H,c(g,{label:"Google扩展商城安装地址"},{default:i((()=>[c(n,{modelValue:Q.value.google_ext_link,"onUpdate:modelValue":l[8]||(l[8]=e=>Q.value.google_ext_link=e),placeholder:"请填写Google扩展商城上架后的详情链接"},null,8,["modelValue"]),I])),_:1}),c(g,{label:"Edge扩展商城安装地址"},{default:i((()=>[c(n,{modelValue:Q.value.edge_ext_link,"onUpdate:modelValue":l[9]||(l[9]=e=>Q.value.edge_ext_link=e),placeholder:"请填写Edge扩展商城上架后的详情链接"},null,8,["modelValue"]),D])),_:1}),c(g,{label:"本地扩展下载地址"},{default:i((()=>[c(n,{modelValue:Q.value.local_ext_link,"onUpdate:modelValue":l[10]||(l[10]=e=>Q.value.local_ext_link=e),placeholder:"请填写本地扩展下载地址"},null,8,["modelValue"]),L])),_:1})])),_:1}),O,_("div",P,[c(Y,{size:"large",class:"mt-4 w-1/2",type:"primary",onClick:X},{default:i((()=>[m("保存配置文件")])),_:1}),c(Y,{size:"large",class:"mt-4 w-1/2",type:"success",onClick:Z},{default:i((()=>[m("构建浏览器扩展压缩包.zip")])),_:1}),A.value?(s(),u(Y,{key:0,size:"large",class:"mt-4 w-60 flex-shrink-0",type:"danger",onClick:R},{default:i((()=>[m(" 下载已打包好的扩展.zip ")])),_:1})):p("",!0),A.value?(s(),u(Y,{key:1,size:"large",class:"mt-4 w-60 flex-shrink-0",type:"warning",onClick:B},{default:i((()=>[m(" 删除扩展压缩包.zip ")])),_:1})):p("",!0)])])),_:1},8,["modelValue"])):(s(),d("div",b,y))],512)),[[o,null!==F.value]])}}};export{W as default};
