(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shichangguanliyuan/add-or-update"],{"2b1a":function(e,n,a){"use strict";(function(e){a("2409");t(a("66fd"));var n=t(a("353f"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},"353f":function(e,n,a){"use strict";a.r(n);var t=a("f1dd"),r=a("9fd8");for(var u in r)"default"!==u&&function(e){a.d(n,e,(function(){return r[e]}))}(u);a("433f");var i,o=a("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"d2cdec96",null,!1,t["a"],i);n["default"]=c.exports},"433f":function(e,n,a){"use strict";var t=a("88a4"),r=a.n(t);r.a},"6a32":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,a,t,r,u,i){try{var o=e[u](i),c=o.value}catch(s){return void a(s)}o.done?n(c):Promise.resolve(c).then(t,r)}function i(e){return function(){var n=this,a=arguments;return new Promise((function(t,r){var i=e.apply(n,a);function o(e){u(i,t,r,o,c,"next",e)}function c(e){u(i,t,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("2edd"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{guanlizhanghao:"",mima:"",guanlixingming:"",beizhu:"",touxiang:"",guanlidianhua:"",jiedaoquyu:""},jiedaoquyuOptions:[],jiedaoquyuIndex:0,user:{},ro:{guanlizhanghao:!1,mima:!1,guanlixingming:!1,beizhu:!1,touxiang:!1,guanlidianhua:!1,jiedaoquyu:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return i(t.default.mark((function r(){var u,i,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=e.getStorageSync("nowTable"),r.next=3,a.$api.session(u);case 3:return i=r.sent,a.user=i.data,a.ro.jiedaoquyu=!0,r.next=8,a.$api.option("jiedaoquyu","jiedaoquyu",{});case 8:if(i=r.sent,a.jiedaoquyuOptions=i.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=18;break}return a.ruleForm.id=n.id,r.next=16,a.$api.info("shichangguanliyuan",a.ruleForm.id);case 16:i=r.sent,a.ruleForm=i.data;case 18:if(a.cross=n.cross,!n.cross){r.next=54;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 22:if((r.t1=r.t0()).done){r.next=54;break}if(c=r.t1.value,"guanlizhanghao"!=c){r.next=28;break}return a.ruleForm.guanlizhanghao=o[c],a.ro.guanlizhanghao=!0,r.abrupt("continue",22);case 28:if("mima"!=c){r.next=32;break}return a.ruleForm.mima=o[c],a.ro.mima=!0,r.abrupt("continue",22);case 32:if("guanlixingming"!=c){r.next=36;break}return a.ruleForm.guanlixingming=o[c],a.ro.guanlixingming=!0,r.abrupt("continue",22);case 36:if("beizhu"!=c){r.next=40;break}return a.ruleForm.beizhu=o[c],a.ro.beizhu=!0,r.abrupt("continue",22);case 40:if("touxiang"!=c){r.next=44;break}return a.ruleForm.touxiang=o[c],a.ro.touxiang=!0,r.abrupt("continue",22);case 44:if("guanlidianhua"!=c){r.next=48;break}return a.ruleForm.guanlidianhua=o[c],a.ro.guanlidianhua=!0,r.abrupt("continue",22);case 48:if("jiedaoquyu"!=c){r.next=52;break}return a.ruleForm.jiedaoquyu=o[c],a.ro.jiedaoquyu=!0,r.abrupt("continue",22);case 52:r.next=22;break;case 54:a.styleChange();case 55:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jiedaoquyuChange:function(e){this.jiedaoquyuIndex=e.target.value,this.ruleForm.jiedaoquyu=this.jiedaoquyuOptions[this.jiedaoquyuIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function a(){var r,u,i,o,c,s,l,d,f,g;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.guanlizhanghao){a.next=3;break}return n.$utils.msg("管理账号不能为空"),a.abrupt("return");case 3:if(n.ruleForm.mima){a.next=6;break}return n.$utils.msg("密码不能为空"),a.abrupt("return");case 6:if(!n.ruleForm.guanlidianhua||n.$validate.isMobile(n.ruleForm.guanlidianhua)){a.next=9;break}return n.$utils.msg("管理电话应输入手机格式"),a.abrupt("return");case 9:if(n.ruleForm.jiedaoquyu){a.next=12;break}return n.$utils.msg("街道区域不能为空"),a.abrupt("return");case 12:if(!n.cross){a.next=28;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){a.next=28;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=24;break}for(l in s)l==o&&(s[l]=c);return d=e.getStorageSync("crossTable"),a.next=22,n.$api.update("".concat(d),s);case 22:a.next=28;break;case 24:r=Number(e.getStorageSync("userid")),u=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 28:if(!u||!r){a.next=50;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=u,f={page:1,limit:10,crossuserid:r,crossrefid:u},a.next=34,n.$api.list("shichangguanliyuan",f);case 34:if(g=a.sent,!(g.data.total>=i)){a.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 40:if(!n.ruleForm.id){a.next=45;break}return a.next=43,n.$api.update("shichangguanliyuan",n.ruleForm);case 43:a.next=47;break;case 45:return a.next=47,n.$api.add("shichangguanliyuan",n.ruleForm);case 47:n.$utils.msgBack("提交成功");case 48:a.next=58;break;case 50:if(!n.ruleForm.id){a.next=55;break}return a.next=53,n.$api.update("shichangguanliyuan",n.ruleForm);case 53:a.next=57;break;case 55:return a.next=57,n.$api.add("shichangguanliyuan",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},"88a4":function(e,n,a){},"9fd8":function(e,n,a){"use strict";a.r(n);var t=a("6a32"),r=a.n(t);for(var u in t)"default"!==u&&function(e){a.d(n,e,(function(){return t[e]}))}(u);n["default"]=r.a},f1dd:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["2b1a","common/runtime","common/vendor"]]]);