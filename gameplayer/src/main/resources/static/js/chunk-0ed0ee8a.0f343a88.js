(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed0ee8a"],{"0c33":function(t,e,s){},"0d03":function(t,e,s){var a=s("6eeb"),i=Date.prototype,n="Invalid Date",o="toString",r=i[o],c=i.getTime;new Date(NaN)+""!=n&&a(i,o,(function(){var t=c.call(this);return t===t?r.call(this):n}))},"4e82":function(t,e,s){"use strict";var a=s("23e7"),i=s("1c0b"),n=s("7b0b"),o=s("d039"),r=s("b301"),c=[].sort,l=[1,2,3],u=o((function(){l.sort(void 0)})),d=o((function(){l.sort(null)})),h=r("sort"),g=u||!d||h;a({target:"Array",proto:!0,forced:g},{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),i(t))}})},"6ad8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"aside"},[s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"前往购物车",placement:"left"}},[s("el-button",{staticClass:"cartbtn",attrs:{type:"primary"},on:{click:function(e){return t.skipcart()}}},[s("i",{staticClass:"el-icon-shopping-cart-full"})])],1)],1),s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"前往收藏夹",placement:"left"}},[s("el-button",{staticClass:"collectionbtn",attrs:{type:"primary"},on:{click:function(e){return t.skipfav()}}},[s("i",{staticClass:"el-icon-collection-tag"})])],1)],1),s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"前往消息",placement:"left"}},[s("el-button",{staticClass:"cartbtn",attrs:{type:"primary"},on:{click:function(e){return t.skipmsg()}}},[s("i",{staticClass:"el-icon-chat-line-round"})])],1)],1)])])},i=[],n={inject:["reload"],data:function(){return{userId:""}},created:function(){this.userId=sessionStorage.getItem("userId")},methods:{skipcart:function(){this.$router.push({path:"/shoppingCart"})},skipfav:function(){this.$router.push({path:"/favorites"})},skipmsg:function(){this.$router.push({path:"/privatemsg"})}}},o=n,r=(s("a773"),s("2877")),c=Object(r["a"])(o,a,i,!1,null,"29c65355",null);e["a"]=c.exports},"91cb":function(t,e,s){"use strict";var a=s("98a1"),i=s.n(a);i.a},"98a1":function(t,e,s){},a773:function(t,e,s){"use strict";var a=s("b3f3"),i=s.n(a);i.a},a8fb:function(t,e,s){"use strict";var a=s("fadf"),i=s.n(a);i.a},ae2a:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"row",attrs:{gutter:21}},[s("el-col",{attrs:{span:3}},[s("el-image",{staticStyle:{width:"100px",height:"50px","padding-top":"5px"},attrs:{src:t.url,fit:"contain"}})],1),s("el-col",{attrs:{span:6}},[s("el-menu",{attrs:{router:"","default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"/index"}},[t._v("首页")]),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[t._v("游戏")]),t._l(t.sort,(function(e,a){return s("el-menu-item",{key:a,on:{click:function(e){return t.jump(a)}}},[t._v(t._s(e.sortName))])})),s("hr"),s("el-menu-item",{attrs:{index:"/allgame"}},[t._v("查看所有游戏")])],2),s("el-menu-item",{attrs:{index:"/community"}},[t._v("社区")])],1)],1),s("el-col",{attrs:{span:6}},[s("el-input",{staticClass:"sel",attrs:{placeholder:"请输入关键字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.sel,callback:function(e){t.sel=e},expression:"sel"}})],1),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"selbtn"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:function(e){return t.search()}}},[t._v("搜索")])],1)]),s("el-col",{attrs:{span:5}},[t.loginbol?t._e():s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text"},on:{click:function(e){return t.out()}}},[t._v("登陆注册")])],1),t.loginbol?s("div",{staticClass:"demo-type"},[s("el-popover",{staticClass:"popover",attrs:{placement:"top-start",trigger:"hover"}},[s("el-avatar",{attrs:{slot:"reference",size:"medium",plain:!0},on:{error:t.errorHandler},slot:"reference"},[t.loginbol?t._e():s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"},on:{click:function(e){return t.skips()}}}),t.loginbol?s("img",{attrs:{src:t.userpic},on:{click:function(e){return t.skips()}}}):t._e()]),t.loginbol?s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.toMydata()}}},[t._v("个人中心")]):t._e(),s("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.out()}}},[t.loginbol?s("span",[t._v("登出")]):t._e()])],1)],1):t._e()])],1)},i=[],n=(s("4e82"),s("b640")),o=s.n(n),r={data:function(){return{url:o.a,activeIndex:"/index",sel:"",userpic:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",userId:"",msgs:"",thisName:"",refash:!1,loginbol:!1,sort:[{sortName:""}]}},created:function(){this.userId=sessionStorage.getItem("userId"),this.loadSort(),this.loadAvatar(),this.loadMsgData()},mounted:function(){var t=this,e=setInterval((function(){t.loadMsgData2(),t.refash&&t.ShowMsg()}),3e3);this.$once("hook:beforeDestroy",(function(){clearInterval(e)}))},methods:{loadAvatar:function(){var t=this,e=JSON.stringify({userinfoId:this.userId});this.$axios.post("/user/showuser",e).then((function(e){e.data?(e.data.userinfoImg&&(t.userpic=e.data.userinfoImg),t.loginbol=!0):t.loginbol=!1})).catch((function(t){return console.log("err",t),t}))},loadSort:function(){var t=this;this.$axios.post("/sort/showsort").then((function(e){e&&(t.sort=e.data)})).catch((function(t){return console.log("err",t),t}))},loadMsgData:function(){var t=this,e=JSON.stringify({privatemsgAcceptid:this.userId});this.$axios.post("/msg/refreshmsg",e).then((function(e){e&&t.msgs!==e.data.privatemsgContent&&(t.msgs=e.data.privatemsgContent,t.thisName=e.data.privatemsgSendname)})).catch((function(t){return console.log("err",t),t}))},loadMsgData2:function(){var t=this,e=JSON.stringify({privatemsgAcceptid:this.userId});this.$axios.post("/msg/refreshmsg",e).then((function(e){e&&(t.msgs!==e.data.privatemsgContent?(t.msgs=e.data.privatemsgContent,t.thisName=e.data.privatemsgSendname,t.refash=!0):t.refash=!1)})).catch((function(t){return console.log("err",t),t}))},ShowMsg:function(){this.$notify({title:this.thisName,iconClass:"el-icon-chat-dot-round",message:this.msgs})},handleSelect:function(t,e){console.log(t,e)},out:function(){this.$router.push({path:"/us_login"}),sessionStorage.removeItem("userId")},search:function(){this.$router.push({path:"/selgame",query:{sel:this.sel}})},errorHandler:function(){return!0},jump:function(t){this.$router.push({path:"/allgame",query:{sortname:this.sort[t].sortName}})},skips:function(){this.loginbol?this.$router.push({path:"/othersdata",query:{thisId:this.userId}}):this.$message.error("请先登陆")},toMydata:function(){this.loginbol?this.$router.push({path:"/mydata"}):this.$message.error("请先登陆")}}},c=r,l=(s("c382"),s("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=u.exports},b301:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!s||!a((function(){s.call(null,e||function(){throw 1},1)}))}},b3f3:function(t,e,s){},b640:function(t,e,s){t.exports=s.p+"img/logo.78c810f6.jpg"},c382:function(t,e,s){"use strict";var a=s("0c33"),i=s.n(a);i.a},fadf:function(t,e,s){},fe57:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-container",[s("el-header",[s("indexheader")],1),s("el-container",[s("el-main",{staticClass:"main"},[s("hr",{staticClass:"line"}),s("box",{attrs:{gameid:t.gameid}})],1),this.userId?s("asides"):t._e()],1)],1)],1)},i=[],n=s("ae2a"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"900px"}},[this.gameId?t._e():s("h1",{staticStyle:{"margin-top":"200px","font-size":"60px"}},[t._v("无订单信息")]),this.gameId?s("div",{staticClass:"title"},[s("span",[t._v("确认订单信息")])]):t._e(),this.gameId?s("el-card",{staticClass:"cartbox"},[s("el-form",{staticClass:"form",attrs:{model:t.gametable}},[s("el-col",{attrs:{span:4}},[s("el-form-item",[s("img",{staticClass:"img",attrs:{src:this.gametable.gameImg,width:"200",height:"120"}})])],1),s("el-col",{attrs:{span:14}},[s("el-form-item",[s("span",{staticStyle:{height:"120px"}},[t._v(t._s(this.gametable.gameName))])])],1),s("el-col",{attrs:{span:6}},[s("el-form-item",[s("span",{staticStyle:{color:"red",height:"120px"}},[t._v("¥ "+t._s(this.gametable.gamePrice))])])],1)],1)],1):t._e(),this.gameId?s("el-card",{staticClass:"box"},[s("span",{staticStyle:{"font-size":"16px"}},[t._v("共 1 件商品")]),s("span",{staticStyle:{"margin-left":"550px"}},[t._v("付款金额： "),s("span",{staticStyle:{color:"red"}},[t._v("¥ "+t._s(this.gametable.gamePrice)+"元")])]),s("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:function(e){return t.pay()}}},[t._v("确认并付款")])],1):t._e(),s("el-dialog",{attrs:{title:"支付",visible:t.dialog,width:"20%",center:""},on:{"update:visible":function(e){t.dialog=e}}},[s("span",{staticStyle:{"font-size":"20px"}},[t._v("请您在新打开的支付宝页面进行支付，支付完成前请不要关闭改窗口")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"warn"},on:{click:function(e){return t.skip()}}},[t._v("已完成支付")])],1)])],1)},r=[],c=(s("0d03"),{inject:["reload"],props:["gameid"],data:function(){return{userId:"",gameId:"",dialog:!1,gametable:{gameId:"",gameImg:"",gameName:"",gamePrice:""}}},created:function(){this.userId=sessionStorage.getItem("userId"),this.gameId=this.gameid,this.gameId&&this.loadData()},methods:{loadData:function(){var t=this,e=JSON.stringify({gameId:this.gameId});this.$axios.post("/game/showidgame",e).then((function(e){e.data?(t.gametable.gameId=e.data.gameId,t.gametable.gameImg=e.data.gameImg,t.gametable.gameName=e.data.gameName,t.gametable.gamePrice=e.data.gamePrice*e.data.gameDiscount):console.log("err",e.data)})).catch((function(t){return console.log("err",t),t}))},pay:function(){var t=this;this.sNow=[],this.vNow=new Date,this.sNow+=String(this.vNow.getFullYear()),this.sNow+=String(this.vNow.getMonth()+1),this.sNow+=String(this.vNow.getDate()),this.sNow+=String(this.vNow.getHours()),this.sNow+=String(this.vNow.getMinutes()),this.sNow+=String(this.vNow.getSeconds()),this.sNow+=String(this.vNow.getMilliseconds()),this.subjects=this.gametable.gameName,this.body=this.gametable.gameId+" "+this.userId,console.log(this.body);var e=JSON.stringify({number:this.sNow,money:this.gametable.gamePrice,subjects:this.subjects,gameid:this.body});this.$axios.post("/alipay/pay",e).then((function(e){if(e){var s;t.dialog=!0;var a=e.data;s=window.open(),s.document.open(),s.document.write(a),s.document.forms[0].submit(),s.document.close()}else console.log("err",e.data)})).catch((function(t){return console.log("err",t),t}))},judge:function(){var t=this,e=JSON.stringify({orderGameid:this.gametable.gameId,orderUserid:this.userId});this.$axios.post("/order/showbuystatus",e).then((function(e){"success"===e.data?t.$router.push({path:"/pay"}):"error"===e.data&&t.$message.error("还未付款！")})).catch((function(t){return console.log("err",t),t}))},skip:function(){this.dialog=!1,this.judge()}}}),l=c,u=(s("a8fb"),s("2877")),d=Object(u["a"])(l,o,r,!1,null,"c5e89a28",null),h=d.exports,g=s("6ad8"),m={components:{indexheader:n["a"],box:h,asides:g["a"]},data:function(){return{gameid:"",userId:""}},created:function(){this.userId=sessionStorage.getItem("userId"),this.getGameid()},methods:{getGameid:function(){this.$route.query&&(this.gameid=this.$route.query.gameid)}}},f=m,p=(s("91cb"),Object(u["a"])(f,a,i,!1,null,"66f3003c",null));e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-0ed0ee8a.0f343a88.js.map