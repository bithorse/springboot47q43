(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1414:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=u(a("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,t,u,i,r){try{var o=e[i](r),s=o.value}catch(l){return void a(l)}o.done?n(s):Promise.resolve(s).then(t,u)}function r(e){return function(){var n=this,a=arguments;return new Promise((function(t,u){var r=e.apply(n,a);function o(e){i(r,t,u,o,s,"next",e)}function s(e){i(r,t,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{tanzhuxingbieOptions:[],tanzhuxingbieIndex:0,shichangguanliyuanjiedaoquyuOptions:[],shichangguanliyuanjiedaoquyuIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return r(t.default.mark((function a(){var u,i;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(u=[],i=e.getStorageSync("loginTable"),n.tableName=i,"tanzhu"==n.tableName&&(n.tanzhuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.tanzhuxingbieOptions[0]),"shichangguanliyuan"!=n.tableName){a.next=10;break}return a.next=7,n.$api.option("jiedaoquyu","jiedaoquyu",{});case 7:u=a.sent,n.shichangguanliyuanjiedaoquyuOptions=u.data,n.ruleForm.jiedaoquyu=n.shichangguanliyuanjiedaoquyuOptions[0];case 10:n.styleChange();case 11:case"end":return a.stop()}}),a)})))()},methods:{tanzhuxingbieChange:function(e){this.tanzhuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.tanzhuxingbieOptions[this.tanzhuxingbieIndex]},shichangguanliyuanjiedaoquyuChange:function(e){this.shichangguanliyuanjiedaoquyuIndex=e.target.value,this.ruleForm.jiedaoquyu=this.shichangguanliyuanjiedaoquyuOptions[this.shichangguanliyuanjiedaoquyuIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return r(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.tanzhuzhanghao||"tanzhu"!=e.tableName){n.next=3;break}return e.$utils.msg("摊主账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"tanzhu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("tanzhu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=9;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if("tanzhu"!=e.tableName||!e.ruleForm.tanzhushouji||e.$validate.isMobile(e.ruleForm.tanzhushouji)){n.next=12;break}return e.$utils.msg("摊主手机应输入手机格式"),n.abrupt("return");case 12:if(e.ruleForm.guanlizhanghao||"shichangguanliyuan"!=e.tableName){n.next=15;break}return e.$utils.msg("管理账号不能为空"),n.abrupt("return");case 15:if(e.ruleForm.mima||"shichangguanliyuan"!=e.tableName){n.next=18;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 18:if("shichangguanliyuan"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=21;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 21:if("shichangguanliyuan"!=e.tableName||!e.ruleForm.guanlidianhua||e.$validate.isMobile(e.ruleForm.guanlidianhua)){n.next=24;break}return e.$utils.msg("管理电话应输入手机格式"),n.abrupt("return");case 24:if(e.ruleForm.jiedaoquyu||"shichangguanliyuan"!=e.tableName){n.next=27;break}return e.$utils.msg("街道区域不能为空"),n.abrupt("return");case 27:return n.next=29,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 29:e.$utils.msgBack("注册成功");case 31:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,a("543d")["default"])},"3d92":function(e,n,a){"use strict";a.r(n);var t=a("913c"),u=a("e46b");for(var i in u)"default"!==i&&function(e){a.d(n,e,(function(){return u[e]}))}(i);a("c340"),a("fb2e");var r,o=a("f0c5"),s=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"99f18f72",null,!1,t["a"],r);n["default"]=s.exports},"913c":function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var u=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"947a":function(e,n,a){"use strict";(function(e){a("2409");t(a("66fd"));var n=t(a("3d92"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},bb9f:function(e,n,a){},c340:function(e,n,a){"use strict";var t=a("e31c"),u=a.n(t);u.a},e31c:function(e,n,a){},e46b:function(e,n,a){"use strict";a.r(n);var t=a("1414"),u=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=u.a},fb2e:function(e,n,a){"use strict";var t=a("bb9f"),u=a.n(t);u.a}},[["947a","common/runtime","common/vendor"]]]);