(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f62df20"],{"0c33":function(t,e,n){},"3e81":function(t,e,n){"use strict";var r=n("7b52"),s=n.n(r);s.a},"4e82":function(t,e,n){"use strict";var r=n("23e7"),s=n("1c0b"),a=n("7b0b"),o=n("d039"),i=n("b301"),c=[].sort,u=[1,2,3],l=o((function(){u.sort(void 0)})),f=o((function(){u.sort(null)})),d=i("sort"),p=l||!f||d;r({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?c.call(a(this)):c.call(a(this),s(t))}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),s=n("5899"),a="["+s+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5e89":function(t,e,n){var r=n("861d"),s=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&s(t)===t}},"65d1":function(t,e,n){},"6f00":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"asidebox"},[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{attrs:{router:""}},[n("h3",{staticStyle:{"margin-left":"-100px"}},[t._v("订单中心")]),n("el-menu-item",{staticClass:"meauitem",attrs:{index:"/mydata"}},[t._v("我的订单")]),n("el-menu-item",{staticClass:"meauitem",attrs:{index:"/mygame"}},[t._v("我的游戏")]),n("h3",{staticStyle:{"margin-left":"-100px"}},[t._v("我的账号")]),n("el-menu-item-group",[n("el-menu-item",{staticClass:"meauitem",attrs:{index:"/myinfo"}},[t._v("基本信息")]),n("el-menu-item",{staticClass:"meauitem",attrs:{index:"/mysafe"}},[t._v("账户安全")])],1)],1)],1)],1)],1)},s=[],a={},o=a,i=(n("79c9"),n("2877")),c=Object(i["a"])(o,r,s,!1,null,"308d4405",null);e["a"]=c.exports},7156:function(t,e,n){var r=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var a,o;return s&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&s(t,o),t}},"79c9":function(t,e,n){"use strict";var r=n("65d1"),s=n.n(r);s.a},"7b52":function(t,e,n){},"8ba4":function(t,e,n){var r=n("23e7"),s=n("5e89");r({target:"Number",stat:!0},{isInteger:s})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),s=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,h=n("06cf").f,m=n("9bf2").f,g=n("58a8").trim,v="Number",b=s[v],y=b.prototype,x=c(d(y))==v,I=function(t){var e,n,r,s,a,o,i,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+u}for(a=u.slice(2),o=a.length,i=0;i<o;i++)if(c=a.charCodeAt(i),c<48||c>s)return NaN;return parseInt(a,r)}return+u};if(a(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(x?f((function(){y.valueOf.call(n)})):c(n)!=v)?u(new b(I(e)),n,N):I(e)},C=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)i(b,_=C[k])&&!i(N,_)&&m(N,_,h(b,_));N.prototype=y,y.constructor=N,o(s,v,N)}},ae2a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"row",attrs:{gutter:21}},[n("el-col",{attrs:{span:3}},[n("el-image",{staticStyle:{width:"100px",height:"50px","padding-top":"5px"},attrs:{src:t.url,fit:"contain"}})],1),n("el-col",{attrs:{span:6}},[n("el-menu",{attrs:{router:"","default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"/index"}},[t._v("首页")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("游戏")]),t._l(t.sort,(function(e,r){return n("el-menu-item",{key:r,on:{click:function(e){return t.jump(r)}}},[t._v(t._s(e.sortName))])})),n("hr"),n("el-menu-item",{attrs:{index:"/allgame"}},[t._v("查看所有游戏")])],2),n("el-menu-item",{attrs:{index:"/community"}},[t._v("社区")])],1)],1),n("el-col",{attrs:{span:6}},[n("el-input",{staticClass:"sel",attrs:{placeholder:"请输入关键字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.sel,callback:function(e){t.sel=e},expression:"sel"}})],1),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"selbtn"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:function(e){return t.search()}}},[t._v("搜索")])],1)]),n("el-col",{attrs:{span:5}},[t.loginbol?t._e():n("div",{staticStyle:{"padding-top":"10px"}},[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.out()}}},[t._v("登陆注册")])],1),t.loginbol?n("div",{staticClass:"demo-type"},[n("el-popover",{staticClass:"popover",attrs:{placement:"top-start",trigger:"hover"}},[n("el-avatar",{attrs:{slot:"reference",size:"medium",plain:!0},on:{error:t.errorHandler},slot:"reference"},[t.loginbol?t._e():n("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"},on:{click:function(e){return t.skips()}}}),t.loginbol?n("img",{attrs:{src:t.userpic},on:{click:function(e){return t.skips()}}}):t._e()]),t.loginbol?n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.toMydata()}}},[t._v("个人中心")]):t._e(),n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.out()}}},[t.loginbol?n("span",[t._v("登出")]):t._e()])],1)],1):t._e()])],1)},s=[],a=(n("4e82"),n("b640")),o=n.n(a),i={data:function(){return{url:o.a,activeIndex:"/index",sel:"",userpic:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",userId:"",msgs:"",thisName:"",refash:!1,loginbol:!1,sort:[{sortName:""}]}},created:function(){this.userId=sessionStorage.getItem("userId"),this.loadSort(),this.loadAvatar(),this.loadMsgData()},mounted:function(){var t=this,e=setInterval((function(){t.loadMsgData2(),t.refash&&t.ShowMsg()}),3e3);this.$once("hook:beforeDestroy",(function(){clearInterval(e)}))},methods:{loadAvatar:function(){var t=this,e=JSON.stringify({userinfoId:this.userId});this.$axios.post("/user/showuser",e).then((function(e){e.data?(e.data.userinfoImg&&(t.userpic=e.data.userinfoImg),t.loginbol=!0):t.loginbol=!1})).catch((function(t){return console.log("err",t),t}))},loadSort:function(){var t=this;this.$axios.post("/sort/showsort").then((function(e){e&&(t.sort=e.data)})).catch((function(t){return console.log("err",t),t}))},loadMsgData:function(){var t=this,e=JSON.stringify({privatemsgAcceptid:this.userId});this.$axios.post("/msg/refreshmsg",e).then((function(e){e&&t.msgs!==e.data.privatemsgContent&&(t.msgs=e.data.privatemsgContent,t.thisName=e.data.privatemsgSendname)})).catch((function(t){return console.log("err",t),t}))},loadMsgData2:function(){var t=this,e=JSON.stringify({privatemsgAcceptid:this.userId});this.$axios.post("/msg/refreshmsg",e).then((function(e){e&&(t.msgs!==e.data.privatemsgContent?(t.msgs=e.data.privatemsgContent,t.thisName=e.data.privatemsgSendname,t.refash=!0):t.refash=!1)})).catch((function(t){return console.log("err",t),t}))},ShowMsg:function(){this.$notify({title:this.thisName,iconClass:"el-icon-chat-dot-round",message:this.msgs})},handleSelect:function(t,e){console.log(t,e)},out:function(){this.$router.push({path:"/us_login"}),sessionStorage.removeItem("userId")},search:function(){this.$router.push({path:"/selgame",query:{sel:this.sel}})},errorHandler:function(){return!0},jump:function(t){this.$router.push({path:"/allgame",query:{sortname:this.sort[t].sortName}})},skips:function(){this.loginbol?this.$router.push({path:"/othersdata",query:{thisId:this.userId}}):this.$message.error("请先登陆")},toMydata:function(){this.loginbol?this.$router.push({path:"/mydata"}):this.$message.error("请先登陆")}}},c=i,u=(n("c382"),n("2877")),l=Object(u["a"])(c,r,s,!1,null,null,null);e["a"]=l.exports},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},b640:function(t,e,n){t.exports=n.p+"img/logo.78c810f6.jpg"},c382:function(t,e,n){"use strict";var r=n("0c33"),s=n.n(r);s.a},dc43:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-header",[n("indexheader")],1),n("el-container",[n("el-main",{staticClass:"main"},[n("hr",{staticClass:"line"}),n("div",{staticClass:"conbox"},[n("el-row",[n("el-col",{attrs:{span:8}},[n("myaside")],1),n("el-col",{attrs:{span:16}},[n("el-card",{staticClass:"bphonebox"},[n("el-form",{ref:"bindphone",staticClass:"bindphone",attrs:{model:t.bindphone,"label-width":"100px",rules:t.rules}},[n("el-form-item",{attrs:{prop:"phone",label:"手机号："}},[n("el-input",{model:{value:t.bindphone.phone,callback:function(e){t.$set(t.bindphone,"phone",e)},expression:"bindphone.phone"}})],1),n("el-form-item",[n("el-button",{staticClass:"bpbtn",attrs:{type:"primary"},on:{click:function(e){return t.submitForm("bindphone")}}},[t._v("绑定")])],1)],1)],1)],1)],1)],1)])],1)],1)],1)},s=[],a=(n("a9e3"),n("8ba4"),n("ae2a")),o=n("6f00"),i={components:{indexheader:a["a"],myaside:o["a"]},data:function(){var t=function(t,e,n){var r=/^1[3|4|5|6|7|8][0-9]{9}$/;if(!e)return n(new Error("手机号不能为空"));setTimeout((function(){Number.isInteger(+e)?r.test(e)?n():n(new Error("电话号码格式不正确")):n(new Error("请输入数字值"))}),100)};return{userId:"",bindphone:{phone:""},rules:{phone:[{required:!0,validator:t,trigger:"blur"}]}}},created:function(){this.userId=sessionStorage.getItem("userId")},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var n=JSON.stringify({userinfoId:e.userId,userinfoPhone:e.bindphone.phone});e.$axios.post("/user/updatephone",n).then((function(t){"success"===t.data?(e.$message({message:"绑定手机成功",type:"success"}),e.$router.push({path:"/mysafe"})):e.$alert("发生意外了","提示",{confirmButtonText:"确定",type:"warning"})})).catch((function(t){return console.log("err",t),t}))}))}}},c=i,u=(n("3e81"),n("2877")),l=Object(u["a"])(c,r,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2f62df20.285823fc.js.map