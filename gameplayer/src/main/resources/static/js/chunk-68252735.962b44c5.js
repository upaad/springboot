(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68252735"],{2327:function(t,e,n){},"6ca3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"960px",border:"1px solid #eee"}},[n("adbar"),n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("adheader")],1),n("el-main",{staticClass:"main"},[n("el-form",{ref:"addForm",staticClass:"addForm",attrs:{model:t.addForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"帖子标题",prop:"title"}},[n("el-input",{model:{value:t.addForm.title,callback:function(e){t.$set(t.addForm,"title",e)},expression:"addForm.title"}})],1),n("el-form-item",{attrs:{label:"帖子内容",prop:"content"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:10}},model:{value:t.addForm.content,callback:function(e){t.$set(t.addForm,"content",e)},expression:"addForm.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("addForm")}}},[t._v("发布帖子")]),n("el-button",{on:{click:function(e){return t.resetForm("addForm")}}},[t._v("重置数据")])],1)],1)],1)],1)],1)},i=[],r=n("6f30"),o=n("8385"),s={inject:["reload"],components:{adbar:r["a"],adheader:o["a"]},data:function(){return{adminName:"",adminid:"",thumbs:"0",addForm:{title:"",content:""},rules:{title:[{required:!0,message:"请输入帖子标题",trigger:"blur"}],content:[{required:!0,message:"请输入帖子内容",trigger:"blur"}]}}},created:function(){this.adminName=sessionStorage.getItem("adminName"),this.getId()},methods:{getId:function(){var t=this,e=JSON.stringify({adminName:this.adminName});this.$axios.post("/admin/getid",e).then((function(e){0!==e.data?(t.adminid=e.data,console.log("管理员的id是:"+e.data)):0===e.data&&t.$alert("发生了意料之外的错误","提示",{confirmButtonText:"确定",type:"warning"})})).catch((function(e){return t.$alert("发生了意料之外的错误","提示",{confirmButtonText:"确定",type:"warning"}),console.log("err",e),e}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(t){var n=JSON.stringify({postTitle:e.addForm.title,postContent:e.addForm.content,postThumbs:e.thumbs,postUserid:"0",postUsername:e.adminName,postCommons:"0"});e.$axios.post("/post/insertpost",n).then((function(t){"success"===t.data?e.reload():"error"===t.data&&e.$alert("发生了意料之外的错误","提示",{confirmButtonText:"确定",type:"warning"})})).catch((function(t){return console.log("err",t),t}))}}))},resetForm:function(t){this.$refs[t].resetFields()}}},l=s,m=(n("75b1"),n("2877")),d=Object(m["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports},"6f30":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-openeds":["1","2","3"],router:""}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-goods"}),t._v("商品管理 ")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/ad_game"}},[t._v("商品列表")]),n("el-menu-item",{attrs:{index:"/add_game"}},[t._v("添加商品")]),n("el-menu-item",{attrs:{index:"/game_photo"}},[t._v("图表")])],1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-order"}),t._v("其他管理 ")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/ad_post"}},[t._v("帖子列表")]),n("el-menu-item",{attrs:{index:"/ad_comment"}},[t._v("评论列表")]),n("el-menu-item",{attrs:{index:"/ad_order"}},[t._v("订单列表")])],1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-custom"}),t._v("用户管理 ")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/ad_userinfo"}},[t._v("用户列表")]),n("el-menu-item",{attrs:{index:"/add_user"}},[t._v("添加用户")]),n("el-menu-item",{attrs:{index:"/user_photo"}},[t._v("图表")])],1)],2)],1)],1)},i=[],r={},o=r,s=(n("965c"),n("2877")),l=Object(s["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},"75b1":function(t,e,n){"use strict";var a=n("2327"),i=n.n(a);i.a},8385:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.adminName)+" ")]),t.adminName?n("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(e){return t.out()}}},[t._v("| 退出")]):t._e(),t.adminName?t._e():n("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(e){return t.out()}}},[t._v("登陆")])],1)},i=[],r={data:function(){return{adminName:""}},created:function(){this.adminName=sessionStorage.getItem("adminName")},methods:{out:function(){this.$router.push({path:"/ad_login"}),sessionStorage.removeItem("adminName")}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},"965c":function(t,e,n){"use strict";var a=n("db58"),i=n.n(a);i.a},db58:function(t,e,n){}}]);
//# sourceMappingURL=chunk-68252735.962b44c5.js.map