import{u as e,r as l,a,b as t,K as d,c as r,d as u,i as o,e as s,F as i,f as n,v as c,k as p,h as v,V as m,S as f,H as g,g as h,n as y,x as b,j as x,az as k,l as w,ac as _,ay as V,T as j,G as C,aA as U,m as z,p as W,af as O,U as F}from"./index.1717935479334.js";import{S as B}from"./sortable.esm.1717935479334.js";const T={id:"backgroundManager",class:"rounded-lg overflow-hidden flex flex-wrap gap-2"},A={class:"flex flex-col bg-white w-52 px-2 py-4 rounded-lg h-full"},S={class:"h-full relative overflow-y-scroll leftScrollBackground"},E={class:"space-y-1 mb-4",id:"list"},I=["onClick","data-id"],M={class:"flex items-center"},$={class:"flex items-center gap-2"},D={class:"sticky bottom-0 flex justify-center"},G={class:"flex-1 relative overflow-y-scroll h-full"},H={class:"bg-white overflow-scroll relative flex-1 rounded-lg p-4"},K={class:"grid grid-cols-4 gap-4",style:{"grid-auto-rows":"max-content"}},q={style:{"aspect-ratio":"16 / 9",background:"linear-gradient(to right bottom, #ff4f00, #ff9068, #fdbc45, #ff9068, #ff4f00)"},class:"relative rounded-lg cursor-pointer"},J=s("div",{class:"el-upload__text"}," 点击这里上传您的背景资源 ",-1),L={style:{"aspect-ratio":"16 / 9"},class:"relative"},N=["src"],P={class:"absolute rounded-lg opacity-0 transition-all hover:opacity-100 inset-0 w-full h-full flex justify-center items-center",style:{"background-color":"rgba(0, 0, 0, 0.178)"}},Q=["onClick"],R={class:"absolute z-10 right-0 bottom-0 w-full h-8 flex justify-end"},X={class:"transition-all mr-4 cursor-pointer mr-2 hover:bg-blue-500 rounded-full w-6 mb-2 flex justify-center items-center"},Y=["href"],Z={class:"flex justify-center mt-8 mb-6"},ee={style:{display:"flex","align-items":"center",width:"100%"}},le=["src"],ae=s("div",{class:"text-xs text-red-400 mt-1"}," 建议过大请压缩后上传，推荐使用图床减轻服务器带宽压力，如果是上传的文件程序会自动裁剪封面 ",-1),te={style:{display:"flex","align-items":"center",width:"100%"}},de=["src"],re=s("div",{class:"text-xs text-red-400 mt-1"}," 建议过大请压缩后上传，推荐使用cdn+云储存减轻服务器带宽压力 ",-1),ue={style:{display:"flex","align-items":"center",width:"100%"}},oe=s("div",{class:"text-xs text-red-400 mt-1"},[C(" 颜色值的格式为：linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)"),s("br"),C(" 第一个值为渐变角度，第二个为颜色值，颜色值可以多个，用逗号隔开，"),s("br"),C(" 详细教程参考文档："),s("a",{style:{color:"#04a3ff","text-decoration":"underline"},href:"https://jmp6y44jr4.k.topthink.com/@mtab/background.html",target:"_blank"},"https://jmp6y44jr4.k.topthink.com/@mtab/background.html")],-1),se={style:{display:"flex","align-items":"center",width:"100%"}},ie=["src"],ne=s("div",{class:"text-xs text-red-400 mt-1"}," 图片尺寸宽度控制在300px左右或(文件大小在100kb左右)，推荐使用图床减轻服务器带宽压力 ",-1),ce={__name:"background",setup(ce){const pe=e(),ve=l(!1);let me=null;const fe={id:"",type:0,mime:0,cover:"",folder:0,url:"",name:""},ge=l(Object.assign({},fe)),he=l(0),ye=l([]),be=l(!0),xe=l(!0),ke={data:[],current_page:1,per_page:19},we=l(Object.assign({},ke)),_e=e=>{he.value=e.id,we.value=Object.assign({},ke),ze()},Ve=()=>{ge.value=Object.assign({},fe),ge.value.folder=he.value,ve.value=!0},je=e=>{1===e.code?(ge.value.url=e.data.url,"string"==typeof e.data.minUrl&&(ge.value.cover=e.data.minUrl)):g.warning(e.msg)},Ce=e=>{1===e.code?ge.value.cover=e.data.url:g.warning(e.msg)},Ue=async()=>{if(2===ge.value.mime&&(ge.value.cover=ge.value.url.trim().replace(/;$/g,""),ge.value.url=ge.value.url.trim().replace(/;$/g,"")),ge.value.folder&&ge.value.cover&&ge.value.url){1===(await f({url:"/Wallpaper/addWallpaper",method:"post",data:ge.value})).code&&(ze(),ve.value=!1)}else g.error("请检查封面、壁纸和分类是否填写完整")},ze=()=>{xe.value=!0,f({url:"/Wallpaper/getFolderWallpaper",method:"post",data:{id:he.value,limit:we.value.per_page,page:we.value.current_page}}).then((e=>{1===e.code&&(we.value=e.data)})).finally((e=>{xe.value=!1}))},We=(e,l)=>{"size"==e&&(we.value.per_page=l),"page"==e&&(we.value.current_page=l),ze()},Oe=e=>{let l="",a="";"add"!==e&&(l=e.id,a=e.name),m.prompt("请输入壁纸分类名称","编辑文件夹",{confirmButtonText:"提交",cancelButtonText:"取消",inputValue:a,inputValidator:e=>""!==e&&null!==e,inputErrorMessage:"请输入分类名称"}).then((({value:e})=>{be.value=!0,f({url:"/Wallpaper/editFolder",method:"post",data:{id:l,name:e}}).then((e=>{1===e.code&&(ye.value=e.data)})).finally((e=>{be.value=!1}))})).catch((()=>{g.warning("已取消操作")}))};return f({url:"/Wallpaper/getFolder"}).then((e=>{1===e.code&&(ye.value=e.data,ye.value.length>0&&_e(ye.value[0])),be.value=!1})),a((()=>{let e=document.getElementById("list");if(e){const l={animation:200,delay:500,delayOnTouchOnly:!0,draggable:".item",onUpdate:function(e){let l=me.toArray(),a=[];l.forEach(((e,l)=>{a.push({id:parseInt(e),sort:l})})),f({url:"/Wallpaper/sortFolder",method:"post",data:a}).then((e=>{e.code}))}};me=B.create(e,l)}})),(e,l)=>{const a=t("el-icon"),g=t("el-button"),B=t("el-pagination"),ce=t("el-option"),me=t("el-select"),fe=t("el-form-item"),ke=t("el-upload"),Fe=t("el-input"),Be=t("el-form"),Te=t("el-dialog"),Ae=d("loading");return r(),u("div",T,[o((r(),u("div",A,[s("div",S,[o(s("div",E,[(r(!0),u(i,null,n(ye.value,(e=>(r(),h(j,{key:e.id},{default:v((()=>[s("div",{onClick:l=>_e(e),"data-id":null==e?void 0:e.id,class:y(["relative item px-4 py-1.5 text-sm rounded-sm cursor-pointer flex overflow-hidden justify-between items-center",{"bg-slate-200 text-blue-400":he.value==e.id}])},[s("div",M,[s("span",null,b(e.name),1)]),s("div",$,[p(a,{class:"hover:text-blue-600",onClick:w((l=>Oe(e)),["stop"])},{default:v((()=>[p(x(k))])),_:2},1032,["onClick"]),p(a,{class:"hover:text-blue-600",onClick:w((l=>(async e=>{try{await m.confirm("是否删除当前壁纸分类，删除后该目录下的壁纸将一并删除！","删除警告"),await m.confirm("您正在进行危险操作，您是否知晓当前正在删除的分类","二次确认")}catch(l){return!1}be.value=!0,f({url:"/Wallpaper/DelFolder",method:"post",data:{id:e.id}}).then((e=>{1===e.code&&(ye.value=e.data)})).finally((l=>{be.value=!1,e.id==he.value&&ye.value.length>0&&_e(ye.value[0])}))})(e)),["stop"])},{default:v((()=>[p(x(_))])),_:2},1032,["onClick"]),p(a,{class:"cursor-move"},{default:v((()=>[p(x(V))])),_:1})])],10,I)])),_:2},1024)))),128))],512),[[c,ye.value.length]]),s("div",D,[p(g,{class:"w-11/12",type:"primary",onClick:l[0]||(l[0]=e=>Oe("add"))},{default:v((()=>[C("创建分类")])),_:1})])])])),[[Ae,be.value]]),s("div",G,[o((r(),u("div",H,[s("div",K,[s("div",q,[s("div",{onClick:Ve,class:"upload-demo flex h-full flex-col justify-center items-center text-white"},[p(a,{size:"50px",class:"el-icon--upload"},{default:v((()=>[p(x(U))])),_:1}),J])]),(r(!0),u(i,null,n(we.value.data,(e=>(r(),h(j,{key:e.id},{default:v((()=>[s("div",L,[[0,1].includes(e.mime)?(r(),u("img",{key:0,class:"rounded-lg object-cover w-full h-full bg-gray-200",src:e.cover},null,8,N)):z("",!0),2===e.mime?(r(),u("div",{key:1,class:"rounded-lg object-cover w-full h-full bg-gray-200",style:W({background:e.url})},null,4)):z("",!0),s("div",P,[s("div",{onClick:l=>(e=>{ge.value=Object.assign({},e),ve.value=!0})(e),class:"transition-all cursor-pointer bg-black bg-opacity-40 hover:opacity-100 hover:bg-red-500 rounded-full flex justify-center items-center w-10 h-10"},[p(a,{size:"28px",color:"#fff"},{default:v((()=>[p(x(k))])),_:1})],8,Q),s("div",R,[s("div",X,[p(a,{onClick:l=>(async e=>{if([0,1].includes(e.mime))try{await m.confirm("是否删除当前选中壁纸？删除后文件一并会被删除，如果有使用该壁纸的用户可能会导致背景无法加载。","删除警告")}catch(l){return!1}1===(await f({url:"/Wallpaper/deleteWallpaper",method:"post",data:{id:e.id}})).code&&(ze(),ve.value=!1)})(e),size:"18px",color:"#fff"},{default:v((()=>[p(x(_))])),_:2},1032,["onClick"])]),[0,1].includes(e.mime)?(r(),u("a",{key:0,target:"_blank",download:"background",href:e.url,class:"transition-all cursor-pointer mr-2 hover:bg-blue-500 rounded-full w-6 mb-2 flex justify-center items-center"},[p(a,{size:"18px",color:"#fff"},{default:v((()=>[p(x(O))])),_:1})],8,Y)):z("",!0)])])])])),_:2},1024)))),128))]),s("div",Z,[p(B,{"page-size":we.value.per_page,onSizeChange:l[1]||(l[1]=e=>We("size",e)),onCurrentChange:l[2]||(l[2]=e=>We("page",e)),"page-sizes":[15,19,29,49],layout:"sizes,total,prev,pager,jumper",total:we.value.total},null,8,["page-size","total"])])])),[[Ae,xe.value]])]),p(Te,{modelValue:ve.value,"onUpdate:modelValue":l[10]||(l[10]=e=>ve.value=e),title:"添加背景壁纸",width:"700"},{default:v((()=>[p(Be,{modelValue:ge.value,"onUpdate:modelValue":l[9]||(l[9]=e=>ge.value=e),"label-position":"top"},{default:v((()=>[p(fe,{label:"壁纸类型"},{default:v((()=>[p(me,{modelValue:ge.value.mime,"onUpdate:modelValue":l[3]||(l[3]=e=>ge.value.mime=e),placeholder:"请选择壁纸类型",class:"w-full"},{default:v((()=>[p(ce,{label:"图片壁纸",value:0}),p(ce,{label:"视频壁纸",value:1}),p(ce,{label:"纯色背景",value:2})])),_:1},8,["modelValue"])])),_:1}),0===ge.value.mime?(r(),h(fe,{key:0,label:"壁纸高清原图"},{default:v((()=>[s("div",ee,[ge.value.url?(r(),u("img",{key:0,src:ge.value.url,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,le)):z("",!0),p(Fe,{modelValue:ge.value.url,"onUpdate:modelValue":l[4]||(l[4]=e=>ge.value.url=e),placeholder:"请上传横屏的壁纸高清文件或网络链接地址"},{append:v((()=>[p(ke,{headers:{"Up-Type":"AdminBackground"},class:"upload-demo","show-file-list":!1,"on-success":je,action:x(F)+x(pe).state.site.upload},{default:v((()=>[p(g,{disabled:ge.value.id>0,type:"primary"},{default:v((()=>[C("上传")])),_:1},8,["disabled"])])),_:1},8,["action"])])),_:1},8,["modelValue"])]),ae])),_:1})):z("",!0),1===ge.value.mime?(r(),h(fe,{key:1,label:"动态壁纸视频文件（mp4格式必须带后缀.mp4））"},{default:v((()=>[s("div",te,[ge.value.url?(r(),u("video",{key:0,autoplay:"",muted:"",loop:"",src:ge.value.url,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,de)):z("",!0),p(Fe,{modelValue:ge.value.url,"onUpdate:modelValue":l[5]||(l[5]=e=>ge.value.url=e),placeholder:"请上传横屏的壁纸高清视频文件或网络链接地址,动态壁纸文件推荐使用高速cdn的外链"},{append:v((()=>[p(ke,{class:"upload-demo","show-file-list":!1,"on-success":je,action:x(F)+"/api/AdminUpload"},{default:v((()=>[p(g,{disabled:ge.value.id>0,type:"primary"},{default:v((()=>[C("上传")])),_:1},8,["disabled"])])),_:1},8,["action"])])),_:1},8,["modelValue"])]),re])),_:1})):z("",!0),2===ge.value.mime?(r(),h(fe,{key:2,label:"纯色背景样式值"},{default:v((()=>[s("div",ue,[p(Fe,{modelValue:ge.value.url,"onUpdate:modelValue":l[6]||(l[6]=e=>ge.value.url=e),placeholder:"请填写纯色或者渐变色的css样式"},null,8,["modelValue"])]),oe])),_:1})):z("",!0),2!==ge.value.mime?(r(),h(fe,{key:3,label:"壁纸压缩封面"},{default:v((()=>[s("div",se,[ge.value.cover?(r(),u("img",{key:0,src:ge.value.cover,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,ie)):z("",!0),p(Fe,{modelValue:ge.value.cover,"onUpdate:modelValue":l[7]||(l[7]=e=>ge.value.cover=e),placeholder:"请上传横屏封面文件或网络链接地址"},{append:v((()=>[p(ke,{class:"upload-demo","show-file-list":!1,"on-success":Ce,action:x(F)+x(pe).state.site.upload},{default:v((()=>[p(g,{disabled:ge.value.id>0,type:"primary"},{default:v((()=>[C("上传")])),_:1},8,["disabled"])])),_:1},8,["action"])])),_:1},8,["modelValue"])]),ne])),_:1})):z("",!0),p(fe,{label:"分类"},{default:v((()=>[p(me,{modelValue:ge.value.folder,"onUpdate:modelValue":l[8]||(l[8]=e=>ge.value.folder=e),placeholder:"分类选择可多选",class:"w-full"},{default:v((()=>[(r(!0),u(i,null,n(ye.value,(e=>(r(),h(ce,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),p(g,{type:"primary",class:"w-full",onClick:Ue},{default:v((()=>[C("保存")])),_:1})])),_:1},8,["modelValue"])])}}};export{ce as default};
