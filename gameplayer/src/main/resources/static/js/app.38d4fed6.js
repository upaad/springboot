(function(e){function n(n){for(var a,c,o=n[0],s=n[1],h=n[2],f=0,d=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);i&&i(n);while(d.length)d.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(a=!1)}a&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},c={app:0},u={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e89fdc8b","chunk-010b4b1d":"e6628c1a","chunk-03906fdb":"30b4030d","chunk-0e57c962":"a6541fcb","chunk-0ed0ee8a":"0f343a88","chunk-0f9e69d8":"4493bfe7","chunk-0fc4e6eb":"4cf51ff3","chunk-25a81830":"415c4376","chunk-26aa56cd":"8a827109","chunk-2bafaec1":"5c0e2870","chunk-2f62df20":"285823fc","chunk-36db3147":"874f8f0f","chunk-40abde08":"b9ef97b2","chunk-4cb41a7c":"741caf88","chunk-4f88a8f5":"89a88c4c","chunk-52cbf36c":"be469364","chunk-59d1f6e2":"9222117a","chunk-5c9bbd6e":"d541c36f","chunk-65617f38":"0ef9347e","chunk-6757cac9":"0cdfdc2e","chunk-67e8d472":"a0203e04","chunk-45b2f62e":"131f39ee","chunk-4a809648":"ac67d18b","chunk-5c72b517":"9fcc1b2b","chunk-b86a9396":"399f6f2f","chunk-fb743a1e":"54b61667","chunk-68252735":"962b44c5","chunk-689016ff":"176b9292","chunk-75b3ff1c":"96d03635","chunk-27151d1d":"a37034e6","chunk-cb1f605c":"a1ed4391","chunk-809a8dc0":"efe64b0c","chunk-bbb1df3e":"ca693043","chunk-bf4ecd50":"b73b8238","chunk-ca0538b6":"e1d0f7b3","chunk-ec9b7adc":"a8f4f9e7","chunk-fd9e9978":"b047bd17"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-010b4b1d":1,"chunk-03906fdb":1,"chunk-0e57c962":1,"chunk-0ed0ee8a":1,"chunk-0f9e69d8":1,"chunk-0fc4e6eb":1,"chunk-25a81830":1,"chunk-26aa56cd":1,"chunk-2bafaec1":1,"chunk-2f62df20":1,"chunk-36db3147":1,"chunk-40abde08":1,"chunk-4cb41a7c":1,"chunk-4f88a8f5":1,"chunk-52cbf36c":1,"chunk-59d1f6e2":1,"chunk-5c9bbd6e":1,"chunk-65617f38":1,"chunk-6757cac9":1,"chunk-67e8d472":1,"chunk-45b2f62e":1,"chunk-4a809648":1,"chunk-5c72b517":1,"chunk-b86a9396":1,"chunk-fb743a1e":1,"chunk-68252735":1,"chunk-689016ff":1,"chunk-75b3ff1c":1,"chunk-27151d1d":1,"chunk-cb1f605c":1,"chunk-809a8dc0":1,"chunk-bbb1df3e":1,"chunk-bf4ecd50":1,"chunk-ca0538b6":1,"chunk-ec9b7adc":1,"chunk-fd9e9978":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-010b4b1d":"e8c789ff","chunk-03906fdb":"91fab49c","chunk-0e57c962":"56af9a51","chunk-0ed0ee8a":"09905d03","chunk-0f9e69d8":"365459ea","chunk-0fc4e6eb":"10f61443","chunk-25a81830":"6a9d75de","chunk-26aa56cd":"71c850b6","chunk-2bafaec1":"a6e1a2da","chunk-2f62df20":"000707b2","chunk-36db3147":"04a75efa","chunk-40abde08":"df0da760","chunk-4cb41a7c":"32009727","chunk-4f88a8f5":"cd4b34fa","chunk-52cbf36c":"2f11bc5f","chunk-59d1f6e2":"dd991961","chunk-5c9bbd6e":"98c8876f","chunk-65617f38":"806bd620","chunk-6757cac9":"518bd4e6","chunk-67e8d472":"2fc17c81","chunk-45b2f62e":"338e7b6e","chunk-4a809648":"716986a2","chunk-5c72b517":"f219d589","chunk-b86a9396":"716986a2","chunk-fb743a1e":"9c1a1303","chunk-68252735":"55a272e2","chunk-689016ff":"5e754f97","chunk-75b3ff1c":"1748342e","chunk-27151d1d":"64b848cb","chunk-cb1f605c":"266aacc5","chunk-809a8dc0":"2368e724","chunk-bbb1df3e":"7f8ac96c","chunk-bf4ecd50":"21245ec8","chunk-ca0538b6":"7d60f6f3","chunk-ec9b7adc":"0231894a","chunk-fd9e9978":"85087625"}[e]+".css",u=s.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===a||f===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],f=h.getAttribute("data-href");if(f===a||f===u)return n()}var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onload=n,i.onerror=function(n){var a=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],i.parentNode.removeChild(i),t(r)},i.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(i)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=r);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(e);var d=new Error;h=function(n){f.onerror=f.onload=null,clearTimeout(i);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}u[e]=void 0}};var i=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var i=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"43f3":function(e,n,t){"use strict";var a=t("b4f1"),c=t.n(a);c.a},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=u(e);return t(n)}function u(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=u,e.exports=c,c.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.isRouterAlive?t("router-view"):e._e()],1)},u=[],r={name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var e=this;this.isRouterAlive=!1,this.$nextTick((function(){return e.isRouterAlive=!0}))}}},o=r,s=(t("7c55"),t("2877")),h=Object(s["a"])(o,c,u,!1,null,null,null),f=h.exports,d=(t("d3b7"),t("8c4f")),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},k=p,j=(t("43f3"),Object(s["a"])(k,b,m,!1,null,"859531a4",null)),v=j.exports,g={name:"home",components:{HelloWorld:v}},_=g,y=Object(s["a"])(_,i,l,!1,null,null,null),w=y.exports,q=d["a"].prototype.push;d["a"].prototype.push=function(e){return q.call(this,e).catch((function(e){return e}))},a["default"].use(d["a"]);var A=[{path:"/",redirect:{name:"index"},component:function(){return t.e("chunk-25a81830").then(t.bind(null,"acca"))}},{path:"/home",name:"home",component:w},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/us_login",name:"us_login",component:function(){return t.e("chunk-bf4ecd50").then(t.bind(null,"fa67"))}},{path:"/index",name:"index",component:function(){return t.e("chunk-25a81830").then(t.bind(null,"acca"))}},{path:"/selgame",name:"selgame",component:function(){return t.e("chunk-bbb1df3e").then(t.bind(null,"d878"))}},{path:"/allgame",name:"allgame",component:function(){return t.e("chunk-4f88a8f5").then(t.bind(null,"4015"))}},{path:"/community",name:"community",component:function(){return t.e("chunk-fd9e9978").then(t.bind(null,"13bd"))}},{path:"/post",name:"post",component:function(){return t.e("chunk-4cb41a7c").then(t.bind(null,"8287"))}},{path:"/insertpost",meta:{requireAuth:!0},name:"insertpost",component:function(){return t.e("chunk-03906fdb").then(t.bind(null,"5de2"))}},{path:"/detailedgame",name:"detailedgame",component:function(){return t.e("chunk-0fc4e6eb").then(t.bind(null,"769b"))}},{path:"/mydata",meta:{requireAuth:!0},name:"mydata",component:function(){return t.e("chunk-ca0538b6").then(t.bind(null,"ce19"))}},{path:"/othersdata",name:"othersdata",component:function(){return t.e("chunk-2bafaec1").then(t.bind(null,"c5a3"))}},{path:"/mygame",meta:{requireAuth:!0},name:"mygame",component:function(){return t.e("chunk-ec9b7adc").then(t.bind(null,"1184"))}},{path:"/myinfo",meta:{requireAuth:!0},name:"myinfo",component:function(){return Promise.all([t.e("chunk-75b3ff1c"),t.e("chunk-27151d1d")]).then(t.bind(null,"399f"))}},{path:"/mysafe",meta:{requireAuth:!0},name:"mysafe",component:function(){return t.e("chunk-0f9e69d8").then(t.bind(null,"8727e"))}},{path:"/updatepwd",meta:{requireAuth:!0},name:"updatepwd",component:function(){return t.e("chunk-52cbf36c").then(t.bind(null,"5e6b"))}},{path:"/updateemail",meta:{requireAuth:!0},name:"updateemail",component:function(){return t.e("chunk-6757cac9").then(t.bind(null,"d7b5"))}},{path:"/updatephone",meta:{requireAuth:!0},name:"updatephone",component:function(){return Promise.all([t.e("chunk-75b3ff1c"),t.e("chunk-cb1f605c")]).then(t.bind(null,"b409"))}},{path:"/bindemail",meta:{requireAuth:!0},name:"bindemail",component:function(){return t.e("chunk-40abde08").then(t.bind(null,"9bc0"))}},{path:"/bindphone",meta:{requireAuth:!0},name:"bindphone",component:function(){return t.e("chunk-2f62df20").then(t.bind(null,"dc43"))}},{path:"/shoppingCart",meta:{requireAuth:!0},name:"shoppingCart",component:function(){return t.e("chunk-26aa56cd").then(t.bind(null,"60e9"))}},{path:"/orderPay",meta:{requireAuth:!0},name:"orderPay",component:function(){return t.e("chunk-0ed0ee8a").then(t.bind(null,"fe57"))}},{path:"/pay",meta:{requireAuth:!0},name:"pay",component:function(){return t.e("chunk-010b4b1d").then(t.bind(null,"932c"))}},{path:"/favorites",meta:{requireAuth:!0},name:"favorites",component:function(){return t.e("chunk-36db3147").then(t.bind(null,"e4f7"))}},{path:"/privatemsg",meta:{requireAuth:!0},name:"privatemsg",component:function(){return t.e("chunk-809a8dc0").then(t.bind(null,"13a6"))}},{path:"/ad_login",name:"ad_login",component:function(){return t.e("chunk-0e57c962").then(t.bind(null,"e410"))}},{path:"/ad_game",meta:{require:!0},name:"ad_game",component:function(){return Promise.all([t.e("chunk-67e8d472"),t.e("chunk-fb743a1e")]).then(t.bind(null,"5c9c"))}},{path:"/ad_post",meta:{require:!0},name:"ad_post",component:function(){return Promise.all([t.e("chunk-67e8d472"),t.e("chunk-45b2f62e")]).then(t.bind(null,"587a"))}},{path:"/ad_userinfo",meta:{require:!0},name:"ad_userinfo",component:function(){return Promise.all([t.e("chunk-67e8d472"),t.e("chunk-5c72b517")]).then(t.bind(null,"b5e5"))}},{path:"/ad_comment",meta:{require:!0},name:"ad_comment",component:function(){return Promise.all([t.e("chunk-67e8d472"),t.e("chunk-4a809648")]).then(t.bind(null,"a70c"))}},{path:"/ad_order",meta:{require:!0},name:"ad_order",component:function(){return Promise.all([t.e("chunk-67e8d472"),t.e("chunk-b86a9396")]).then(t.bind(null,"edb1"))}},{path:"/add_game",meta:{require:!0},name:"add_game",component:function(){return t.e("chunk-689016ff").then(t.bind(null,"0641"))}},{path:"/add_user",meta:{require:!0},name:"add_user",component:function(){return t.e("chunk-59d1f6e2").then(t.bind(null,"08a9"))}},{path:"/add_post",meta:{require:!0},name:"add_post",component:function(){return t.e("chunk-68252735").then(t.bind(null,"6ca3"))}},{path:"/game_photo",meta:{require:!0},name:"game_photo",component:function(){return t.e("chunk-65617f38").then(t.bind(null,"b355"))}},{path:"/user_photo",meta:{require:!0},name:"user_photo",component:function(){return t.e("chunk-5c9bbd6e").then(t.bind(null,"2d7c"))}}],x=new d["a"]({mode:"history",base:"/",routes:A}),z=x,P=t("2f62");a["default"].use(P["a"]);var E=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=t("bc3a"),C=t.n(O),S=t("5c96"),T=t.n(S),$=t("313e"),L=t.n($),N=(t("0fae"),t("c1df")),D=t.n(N);a["default"].filter("dateFmt",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return D()(e).format(n)})),a["default"].prototype.$axios=C.a,a["default"].prototype.$echarts=L.a,a["default"].use(T.a),a["default"].config.productionTip=!1,C.a.defaults.timeout=5e3,C.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",C.a.defaults.headers.put["Content-Type"]="application/json;charset=UTF-8",C.a.defaults.baseURL="http://localhost:8215/",new a["default"]({router:z,store:E,render:function(e){return e(f)}}).$mount("#app"),z.beforeEach((function(e,n,t){e.meta.requireAuth?sessionStorage.getItem("userId")?t():t({path:"/us_login",query:{redirect:e.fullPath}}):t(),e.meta.require?sessionStorage.getItem("adminName")?t():t({path:"/ad_login",query:{redirect:e.fullPath}}):t()}))},"7c55":function(e,n,t){"use strict";var a=t("2395"),c=t.n(a);c.a},b4f1:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.38d4fed6.js.map