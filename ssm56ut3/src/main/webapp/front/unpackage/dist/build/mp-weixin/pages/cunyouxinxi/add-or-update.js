(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cunyouxinxi/add-or-update"],{"010f":function(e,n,i){"use strict";var t=i("c516"),r=i.n(t);r.a},"0665":function(e,n,i){"use strict";(function(e){i("bc09");t(i("66fd"));var n=t(i("cd87"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"501c":function(e,n,i){"use strict";i.r(n);var t=i("d517"),r=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},c369:function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"4a8f"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},c516:function(e,n,i){},cd87:function(e,n,i){"use strict";i.r(n);var t=i("c369"),r=i("501c");for(var a in r)"default"!==a&&function(e){i.d(n,e,(function(){return r[e]}))}(a);i("010f");var u,o=i("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"3729f940",null,!1,t["a"],u);n["default"]=c.exports},d517:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,t,r,a,u){try{var o=e[a](u),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(t,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var u=e.apply(n,i);function o(e){a(u,t,r,o,c,"next",e)}function c(e){a(u,t,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("4a8f"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{cross:"",ruleForm:{jingdianbianhao:this.getUUID(),jingdianmingcheng:"",jingdianfenlei:"",jingdiantupian:"",jiage:"",kaifangshijian:"",fuwudianhua:"",xiangxidizhi:"",jingdianjieshao:""},jingdianfenleiOptions:[],jingdianfenleiIndex:0,user:{},ro:{jingdianbianhao:!1,jingdianmingcheng:!1,jingdianfenlei:!1,jingdiantupian:!1,jiage:!1,kaifangshijian:!1,fuwudianhua:!1,xiangxidizhi:!1,jingdianjieshao:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(t.default.mark((function r(){var a,u,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,i.$api.session(a);case 3:return u=r.sent,i.user=u.data,r.next=7,i.$api.option("jingdianfenlei","fenlei",{});case 7:if(u=r.sent,i.jingdianfenleiOptions=u.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=17;break}return i.ruleForm.id=n.id,r.next=15,i.$api.info("cunyouxinxi",i.ruleForm.id);case 15:u=r.sent,i.ruleForm=u.data;case 17:if(i.cross=n.cross,!n.cross){r.next=69;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 21:if((r.t1=r.t0()).done){r.next=69;break}if(c=r.t1.value,"jingdianbianhao"!=c){r.next=27;break}return i.ruleForm.jingdianbianhao=o[c],i.ro.jingdianbianhao=!0,r.abrupt("continue",21);case 27:if("jingdianmingcheng"!=c){r.next=31;break}return i.ruleForm.jingdianmingcheng=o[c],i.ro.jingdianmingcheng=!0,r.abrupt("continue",21);case 31:if("jingdianfenlei"!=c){r.next=35;break}return i.ruleForm.jingdianfenlei=o[c],i.ro.jingdianfenlei=!0,r.abrupt("continue",21);case 35:if("jingdiantupian"!=c){r.next=39;break}return i.ruleForm.jingdiantupian=o[c],i.ro.jingdiantupian=!0,r.abrupt("continue",21);case 39:if("jiage"!=c){r.next=43;break}return i.ruleForm.jiage=o[c],i.ro.jiage=!0,r.abrupt("continue",21);case 43:if("kaifangshijian"!=c){r.next=47;break}return i.ruleForm.kaifangshijian=o[c],i.ro.kaifangshijian=!0,r.abrupt("continue",21);case 47:if("fuwudianhua"!=c){r.next=51;break}return i.ruleForm.fuwudianhua=o[c],i.ro.fuwudianhua=!0,r.abrupt("continue",21);case 51:if("xiangxidizhi"!=c){r.next=55;break}return i.ruleForm.xiangxidizhi=o[c],i.ro.xiangxidizhi=!0,r.abrupt("continue",21);case 55:if("jingdianjieshao"!=c){r.next=59;break}return i.ruleForm.jingdianjieshao=o[c],i.ro.jingdianjieshao=!0,r.abrupt("continue",21);case 59:if("clicktime"!=c){r.next=63;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,r.abrupt("continue",21);case 63:if("clicknum"!=c){r.next=67;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,r.abrupt("continue",21);case 67:r.next=21;break;case 69:i.styleChange();case 70:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},jingdianfenleiChange:function(e){this.jingdianfenleiIndex=e.target.value,this.ruleForm.jingdianfenlei=this.jingdianfenleiOptions[this.jingdianfenleiIndex]},jingdiantupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.jingdiantupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function i(){var r,a,u,o,c,s,l,d,f,g;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.ruleForm.jingdianmingcheng){i.next=3;break}return n.$utils.msg("景点名称不能为空"),i.abrupt("return");case 3:if(n.ruleForm.jiage){i.next=6;break}return n.$utils.msg("价格不能为空"),i.abrupt("return");case 6:if(!n.ruleForm.jiage||n.$validate.isIntNumer(n.ruleForm.jiage)){i.next=9;break}return n.$utils.msg("价格应输入整数"),i.abrupt("return");case 9:if(!n.ruleForm.fuwudianhua||n.$validate.isMobile(n.ruleForm.fuwudianhua)){i.next=12;break}return n.$utils.msg("服务电话应输入手机格式"),i.abrupt("return");case 12:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){i.next=15;break}return n.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 15:if(!n.cross){i.next=31;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){i.next=31;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=27;break}for(l in s)l==o&&(s[l]=c);return d=e.getStorageSync("crossTable"),i.next=25,n.$api.update("".concat(d),s);case 25:i.next=31;break;case 27:r=Number(e.getStorageSync("userid")),a=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!r){i.next=53;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:r,crossrefid:a},i.next=37,n.$api.list("cunyouxinxi",f);case 37:if(g=i.sent,!(g.data.total>=u)){i.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 43:if(!n.ruleForm.id){i.next=48;break}return i.next=46,n.$api.update("cunyouxinxi",n.ruleForm);case 46:i.next=50;break;case 48:return i.next=50,n.$api.add("cunyouxinxi",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:i.next=61;break;case 53:if(!n.ruleForm.id){i.next=58;break}return i.next=56,n.$api.update("cunyouxinxi",n.ruleForm);case 56:i.next=60;break;case 58:return i.next=60,n.$api.add("cunyouxinxi",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])}},[["0665","common/runtime","common/vendor"]]]);