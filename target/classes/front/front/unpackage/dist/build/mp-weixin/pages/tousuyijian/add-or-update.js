(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tousuyijian/add-or-update"],{"03ea":function(n,a,e){"use strict";var t=e("d31a"),r=e.n(t);r.a},"2fcf":function(n,a,e){"use strict";e.r(a);var t=e("37a5"),r=e.n(t);for(var i in t)"default"!==i&&function(n){e.d(a,n,(function(){return t[n]}))}(i);a["default"]=r.a},"37a5":function(n,a,e){"use strict";(function(n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function i(n,a,e,t,r,i,u){try{var o=n[i](u),s=o.value}catch(c){return void e(c)}o.done?a(s):Promise.resolve(s).then(t,r)}function u(n){return function(){var a=this,e=arguments;return new Promise((function(t,r){var u=n.apply(a,e);function o(n){i(u,t,r,o,s,"next",n)}function s(n){i(u,t,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("2edd"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{cross:"",ruleForm:{guanlizhanghao:"",guanlixingming:"",guanlidianhua:"",tanzhuzhanghao:"",tanzhuxingming:"",tanzhushouji:"",biaoti:"",tupian:"",tijiaoshijian:"",neirong:"",sfsh:"",shhf:""},guanlizhanghaoOptions:[],guanlizhanghaoIndex:0,user:{},ro:{guanlizhanghao:!1,guanlixingming:!1,guanlidianhua:!1,tanzhuzhanghao:!1,tanzhuxingming:!1,tanzhushouji:!1,biaoti:!1,tupian:!1,tijiaoshijian:!1,neirong:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(a){var e=this;return u(t.default.mark((function r(){var i,u,o,s;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.ruleForm.tijiaoshijian=e.$utils.getCurDateTime(),i=n.getStorageSync("nowTable"),r.next=4,e.$api.session(i);case 4:return u=r.sent,e.user=u.data,e.ruleForm.tanzhuzhanghao=e.user.tanzhuzhanghao,e.ro.tanzhuzhanghao=!0,e.ruleForm.tanzhuxingming=e.user.tanzhuxingming,e.ro.tanzhuxingming=!0,e.ruleForm.tanzhushouji=e.user.tanzhushouji,e.ro.tanzhushouji=!0,r.next=14,e.$api.option("shichangguanliyuan","guanlizhanghao",{});case 14:if(u=r.sent,e.guanlizhanghaoOptions=u.data,e.ruleForm.userid=n.getStorageSync("userid"),a.refid&&(e.ruleForm.refid=a.refid,e.ruleForm.nickname=n.getStorageSync("nickname")),!a.id){r.next=24;break}return e.ruleForm.id=a.id,r.next=22,e.$api.info("tousuyijian",e.ruleForm.id);case 22:u=r.sent,e.ruleForm=u.data;case 24:if(e.cross=a.cross,!a.cross){r.next=72;break}o=n.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 28:if((r.t1=r.t0()).done){r.next=72;break}if(s=r.t1.value,"guanlizhanghao"!=s){r.next=34;break}return e.ruleForm.guanlizhanghao=o[s],e.ro.guanlizhanghao=!0,r.abrupt("continue",28);case 34:if("guanlixingming"!=s){r.next=38;break}return e.ruleForm.guanlixingming=o[s],e.ro.guanlixingming=!0,r.abrupt("continue",28);case 38:if("guanlidianhua"!=s){r.next=42;break}return e.ruleForm.guanlidianhua=o[s],e.ro.guanlidianhua=!0,r.abrupt("continue",28);case 42:if("tanzhuzhanghao"!=s){r.next=46;break}return e.ruleForm.tanzhuzhanghao=o[s],e.ro.tanzhuzhanghao=!0,r.abrupt("continue",28);case 46:if("tanzhuxingming"!=s){r.next=50;break}return e.ruleForm.tanzhuxingming=o[s],e.ro.tanzhuxingming=!0,r.abrupt("continue",28);case 50:if("tanzhushouji"!=s){r.next=54;break}return e.ruleForm.tanzhushouji=o[s],e.ro.tanzhushouji=!0,r.abrupt("continue",28);case 54:if("biaoti"!=s){r.next=58;break}return e.ruleForm.biaoti=o[s],e.ro.biaoti=!0,r.abrupt("continue",28);case 58:if("tupian"!=s){r.next=62;break}return e.ruleForm.tupian=o[s],e.ro.tupian=!0,r.abrupt("continue",28);case 62:if("tijiaoshijian"!=s){r.next=66;break}return e.ruleForm.tijiaoshijian=o[s],e.ro.tijiaoshijian=!0,r.abrupt("continue",28);case 66:if("neirong"!=s){r.next=70;break}return e.ruleForm.neirong=o[s],e.ro.neirong=!0,r.abrupt("continue",28);case 70:r.next=28;break;case 72:e.styleChange();case 73:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},guanlizhanghaoChange:function(n){var a=this;return u(t.default.mark((function e(){var r;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.guanlizhanghaoIndex=n.target.value,a.ruleForm.guanlizhanghao=a.guanlizhanghaoOptions[a.guanlizhanghaoIndex],e.next=4,a.$api.follow("shichangguanliyuan","guanlizhanghao",{columnValue:a.ruleForm.guanlizhanghao});case 4:r=e.sent,r.data.guanlixingming&&(a.ruleForm.guanlixingming=r.data.guanlixingming),r.data.guanlidianhua&&(a.ruleForm.guanlidianhua=r.data.guanlidianhua);case 7:case"end":return e.stop()}}),e)})))()},tijiaoshijianConfirm:function(n){console.log(n),this.ruleForm.tijiaoshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(a){n.ruleForm.tupian="upload/"+a.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var a=this;return u(t.default.mark((function e(){var r,i,u,o,s,c,l,g,h,f;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.ruleForm.guanlizhanghao){e.next=3;break}return a.$utils.msg("管理账号不能为空"),e.abrupt("return");case 3:if(a.ruleForm.biaoti){e.next=6;break}return a.$utils.msg("标题不能为空"),e.abrupt("return");case 6:if(a.ruleForm.tupian){e.next=9;break}return a.$utils.msg("图片不能为空"),e.abrupt("return");case 9:if(!a.cross){e.next=25;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){e.next=25;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){e.next=21;break}for(l in c)l==o&&(c[l]=s);return g=n.getStorageSync("crossTable"),e.next=19,a.$api.update("".concat(g),c);case 19:e.next=25;break;case 21:r=Number(n.getStorageSync("userid")),i=c["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!r){e.next=47;break}return a.ruleForm.crossuserid=r,a.ruleForm.crossrefid=i,h={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=31,a.$api.list("tousuyijian",h);case 31:if(f=e.sent,!(f.data.total>=u)){e.next=37;break}return a.$utils.msg(n.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!a.ruleForm.id){e.next=42;break}return e.next=40,a.$api.update("tousuyijian",a.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,a.$api.add("tousuyijian",a.ruleForm);case 44:a.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!a.ruleForm.id){e.next=52;break}return e.next=50,a.$api.update("tousuyijian",a.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,a.$api.add("tousuyijian",a.ruleForm);case 54:a.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var a=new Date,e=a.getFullYear(),t=a.getMonth()+1,r=a.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(e,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};a.default=s}).call(this,e("543d")["default"])},"9aad":function(n,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"2edd"))}},r=function(){var n=this,a=n.$createElement;n._self._c},i=[]},b293:function(n,a,e){"use strict";(function(n){e("2409");t(e("66fd"));var a=t(e("b7a6"));function t(n){return n&&n.__esModule?n:{default:n}}n(a.default)}).call(this,e("543d")["createPage"])},b7a6:function(n,a,e){"use strict";e.r(a);var t=e("9aad"),r=e("2fcf");for(var i in r)"default"!==i&&function(n){e.d(a,n,(function(){return r[n]}))}(i);e("03ea");var u,o=e("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"e91a61d2",null,!1,t["a"],u);a["default"]=s.exports},d31a:function(n,a,e){}},[["b293","common/runtime","common/vendor"]]]);