"use strict";(self["webpackChunkexp_app"]=self["webpackChunkexp_app"]||[]).push([[144],{144:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(3396),o=a(7139);function c(e,t,a,c,r,i){return(0,n.wg)(),(0,n.iD)("div",{onClick:t[0]||(t[0]=(...e)=>i.activate&&i.activate(...e))},[(0,n._)("h1",null,(0,o.zw)(a.expName),1)])}const r={class:"quadra"},i={class:"box",ref:"box"};function l(e,t,a,o,c,l){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",i,null,512)])}var s={name:"CompExec",props:{active:{type:Boolean,default:!1}},methods:{},mounted(){this.$nextTick((()=>{d=this.$refs["box"],u=document.querySelector(".quadra"),p=window.getComputedStyle(u),d.onclick=()=>{let e=255*Math.random(),t=255*Math.random(),a=255*Math.random();d.style.backgroundColor=`rgb(${e},${t},${a})`,d.style.boxShadow=`0 0 35px rgb(${e},${t},${a})`},x=setInterval($,b)}))},unmounted(){d.onclick=null,clearInterval(x)}};let d,u,p,h=0,m=0,f=8,v=9;function g(){(h+50>p.width.slice(0,-2)/2||h-50<-p.width.slice(0,-2)/2)&&(f=-f,k()),(m-50<-p.height.slice(0,-2)/2||m+50>p.height.slice(0,-2)/2)&&(v=-v,k()),h+=f,m+=v,d.style.top=m+"px",d.style.left=h+"px"}let x,b=16;function $(){g()}function k(){let e=255*Math.random(),t=255*Math.random(),a=255*Math.random();u.style.backgroundColor=`rgb(${e},${t},${a})`}var w=a(89);const y=(0,w.Z)(s,[["render",l],["__scopeId","data-v-205e7632"]]);var _=y,C={name:"PiscaPisca",methods:{activate(){this.$emit("clicked",_)}},props:{expName:{type:String,default:"PiscaPisca"},msg:String,show:Boolean}};const M=(0,w.Z)(C,[["render",c],["__scopeId","data-v-5fad6b5a"]]);var S=M}}]);
//# sourceMappingURL=144.959d8a14.js.map