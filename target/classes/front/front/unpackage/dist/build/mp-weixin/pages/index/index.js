(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"3da6":function(n,t,e){"use strict";(function(n){e("2409");o(e("66fd"));var t=o(e("5d86"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},4094:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(e("a34a")),i=r(e("2845"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=u(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,r=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw r}}}}function u(n,t){if(n){if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function l(n,t,e,o,i,r,a){try{var u=n[r](a),c=u.value}catch(l){return void e(l)}u.done?t(c):Promise.resolve(c).then(o,i)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function a(n){l(r,o,i,a,u,"next",n)}function u(n){l(r,o,i,a,u,"throw",n)}a(void 0)}))}}e("453d");var f=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("9ea8"))}.bind(null,e)).catch(e.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:5,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],hometanweilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=this;return s(o.default.mark((function e(){var r,a,u;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.role=n.getStorageSync("role"),r=n.getStorageSync("nowTable"),e.next=4,t.$api.session(r);case 4:a=e.sent,t.user=a.data,t.tableName=r,u=i.default.list(),t.menuList=u,t.menuList.forEach((function(n,e){t.role==n.roleName&&n.frontMenu.forEach((function(n,e){n.child[0].buttons.indexOf("查看")>-1&&t.swiperMenuList.push(n)}))}));case 10:case"end":return e.stop()}}),e)})))()},onShow:function(){var n=this;return s(o.default.mark((function t(){var e,i,r,u,c;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:i=t.sent,r=a(i.data.list);try{for(r.s();!(u=r.n()).done;)c=u.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&e.push({img:c.value,title:c.name})}catch(o){r.e(o)}finally{r.f()}return e&&(n.swiperList=e),t.next=9,n.$api.list("news",{page:1,limit:6});case 9:return i=t.sent,n.news=i.data.list,t.next=13,n.$api.list("tanwei",{page:1,limit:4});case 13:i=t.sent,n.hometanweilist=i.data.list;case 15:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.setStorageSync("useridTag",0),n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=d}).call(this,e("543d")["default"])},"535f":function(n,t,e){},"5d86":function(n,t,e){"use strict";e.r(t);var o=e("c0ad"),i=e("e6d8");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("9285");var a,u=e("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},9285:function(n,t,e){"use strict";var o=e("535f"),i=e.n(o);i.a},c0ad:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.menuList,(function(t,e){var o=n.__get_orig(t),i=n.__map(t.frontMenu,(function(e,o){var i=n.__get_orig(e),r=n.role==t.roleName?n.__map(e.child,(function(t,e){var o=n.__get_orig(t),i=n.__map(t.buttons,(function(e,o){var i=n.__get_orig(e),r="查看"==e&&"yifahuodingdan"!=t.tableName&&"yituikuandingdan"!=t.tableName&&"yiquxiaodingdan"!=t.tableName&&"weizhifudingdan"!=t.tableName&&"yizhifudingdan"!=t.tableName&&"yiwanchengdingdan"!=t.tableName?t.menu.split("列表"):null;return{$orig:i,g0:r}}));return{$orig:o,l0:i}})):null;return{$orig:i,l1:r}}));return{$orig:o,l2:i}}))),o=n.__map(n.hometanweilist,(function(t,e){var o=n.__get_orig(t),i=t.tanweitupian?t.tanweitupian.split(","):null;return{$orig:o,g1:i}}));n.$mp.data=Object.assign({},{$root:{l3:e,l4:o}})},r=[]},e6d8:function(n,t,e){"use strict";e.r(t);var o=e("4094"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a}},[["3da6","common/runtime","common/vendor"]]]);