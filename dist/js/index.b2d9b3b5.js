(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0bfb":function(t,e,i){"use strict";var n=i("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"6b54":function(t,e,i){"use strict";i("3846");var n=i("cb7c"),a=i("0bfb"),s=i("9e1e"),r="toString",o=/./[r],l=function(t){i("2aba")(RegExp.prototype,r,t,!0)};i("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?a.call(t):void 0)}):o.name!=r&&l(function(){return o.call(this)})},ac6a:function(t,e,i){for(var n=i("cadf"),a=i("0d58"),s=i("2aba"),r=i("7726"),o=i("32e9"),l=i("84f2"),c=i("2b4c"),u=c("iterator"),h=c("toStringTag"),d=l.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(v),g=0;g<p.length;g++){var f,m=p[g],_=v[m],b=r[m],y=b&&b.prototype;if(y&&(y[u]||o(y,u,d),y[h]||o(y,h,m),l[m]=d,_))for(f in n)y[f]||s(y,f,n[f],!0)}},b8c2:function(t,e,i){"use strict";var n=i("f040"),a=i.n(n);a.a},d504:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-toolbar",{attrs:{app:"",light:"",color:"red lighten-1"}},[i("v-toolbar-side-icon"),i("v-toolbar-title",[t._v("fumesvg")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{staticClass:"btn-avatar",attrs:{slot:"activator",flat:"",size:"40"},on:{click:function(e){t.dialog2=!0}},slot:"activator"},[i("v-icon",[t._v("settings")]),t._v("\n                read me\n            ")],1),i("v-btn",{staticClass:"btn-avatar",attrs:{slot:"activator",flat:"",size:"40"},on:{click:function(e){t.dialog3=!0}},slot:"activator"},[i("v-icon",[t._v("delete")]),t._v("\n                删除本页\n            ")],1),i("v-btn",{staticClass:"btn-avatar",attrs:{slot:"activator",dark:"",size:"40"},on:{click:t.btn_New},slot:"activator"},[i("v-icon",[t._v("fiber_new")]),t._v("\n                新建页\n            ")],1),i("v-btn",{staticClass:"btn-avatar",attrs:{slot:"activator",dark:"",size:"40"},on:{click:t.btn_New2},slot:"activator"},[i("v-icon",[t._v("file_copy")]),t._v("\n                复制本页\n            ")],1),i("v-btn",{staticClass:"btn-avatar",attrs:{slot:"activator",flat:"",size:"40"},on:{click:function(e){t.dialog4=!0}},slot:"activator"},[i("v-icon",[t._v("move_to_inbox")]),t._v("\n                import\n            ")],1),i("v-btn",{staticClass:"btn-avatar",attrs:{slot:"activator",flat:"",size:"40"},on:{click:t.btn_ex},slot:"activator"},[i("v-icon",[t._v("open_in_new")]),t._v("\n                export\n            ")],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:"","align-space-around":""}},[i("v-flex",{staticClass:"md8 special_flex"},[i("div",{attrs:{id:"svg_list"}},[i("div",{attrs:{id:"selector_data_area"}},[i("span",{staticClass:"selector_data"}),i("span",{staticClass:"selector_data"}),i("span",{staticClass:"selector_data"})])])]),i("v-flex",{staticClass:"md4"},[i("v-layout",{staticClass:"xs4",attrs:{row:"","justify-center":""}},[i("div",{staticClass:"ctrl_area"},[i("h1",[t._v("Stage - "+t._s(t.run.now_stage))]),i("div",{staticClass:"btn_area"},[i("v-btn",{on:{click:t.btn_P}},[i("v-icon",[t._v("fast_rewind")]),t._v("\n                            Prev\n                        ")],1),i("v-btn",{on:{click:t.btn_N}},[i("v-icon",[t._v("fast_forward")]),t._v("\n                            Next\n                        ")],1),i("br"),i("v-btn",{on:{click:t.btn_C}},[i("v-icon",[t._v("radio_button_unchecked")]),t._v("\n                            circle\n                        ")],1),i("v-btn",{on:{click:t.btn_R}},[i("v-icon",[t._v("check_box_outline_blank")]),t._v("\n                            Rect\n                        ")],1),i("v-btn",{on:{click:t.btn_T}},[i("v-icon",[t._v("text_format")]),t._v("\n                            Text\n                        ")],1),i("br")],1),i("v-form",[i("v-container",[i("v-layout",[i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{counter:3,label:"x/r/font_size"},model:{value:t.input.var1,callback:function(e){t.$set(t.input,"var1",e)},expression:"input.var1"}})],1),i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{counter:30,label:"y/text"},model:{value:t.input.var2,callback:function(e){t.$set(t.input,"var2",e)},expression:"input.var2"}})],1),i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{label:"color"},model:{value:t.input.var3,callback:function(e){t.$set(t.input,"var3",e)},expression:"input.var3"}})],1)],1)],1)],1),i("v-btn",{staticClass:"yellow",attrs:{light:""},on:{click:t.btn_update_script}},[t._v("update script")]),i("v-btn",{attrs:{light:""},on:{click:t.btn_anime_play}},[i("v-icon",[t._v("play_arrow")])],1),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.script,expression:"input.script"}],staticClass:"code_area",domProps:{value:t.input.script},on:{input:function(e){e.target.composing||t.$set(t.input,"script",e.target.value)}}})],1)])],1)],1),i("v-dialog",{attrs:{light:"",persistent:""},model:{value:t.dialog4,callback:function(e){t.dialog4=e},expression:"dialog4"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("粘贴导入信息(JSON)")]),i("v-card-text",[i("v-text-field",{model:{value:t.input.import,callback:function(e){t.$set(t.input,"import",e)},expression:"input.import"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:function(e){t.dialog4=!1}}},[t._v("cancel")]),i("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:t.btn_im}},[t._v("继续")])],1)],1)],1),i("v-dialog",{attrs:{light:""},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("这是一个有危险性的操作")]),i("v-card-text",[t._v("\n                那个页面会被销毁且这里没有回收站\n            ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:function(e){t.dialog3=!1}}},[t._v("我再考虑")]),i("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:t.deletePage}},[t._v("继续")])],1)],1)],1),i("v-dialog",{attrs:{light:"","max-width":"400"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("你在PC端吗？它被制作的时候只对PC用户考虑")]),i("v-card-text",[t._v("\n                如果是的话，再请你用Chrome/Firefox 浏览器打开这个页面，因为你可能需要 DevTool （浏览器开发者工具）的辅助。\n                如果你已经准备好了，在DevTool 的console 里，你可以看到更全面的相关资料。\n            ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(e){t.dialog2=!1}}},[t._v("I'm OK")])],1)],1)],1),i("v-dialog",{attrs:{light:"",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dense:"",flat:"",card:""}},[i("v-btn",{attrs:{icon:""},on:{click:t.playEnd}},[i("v-icon",[t._v("close")])],1),i("v-toolbar-title",[t._v("\n                    动画演示\n                ")]),i("v-spacer"),i("v-btn",{attrs:{depressed:""},on:{click:t.btn_iframe_play}},[i("v-icon",[t._v("send")])],1)],1),i("div",{attrs:{id:"where_should_it_be_shown"}})],1)],1)],1)},a=[];i("cadf"),i("551c"),i("097d");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i("6b54"),i("ac6a");var r="http://www.w3.org/2000/svg";function o(){return this.svg_area="#svg_list",this.anime_area="#where_should_it_be_shown",this.stage=[],this.now_stage=0,this.DisplayWidth=null,this.DisplayHeight=null,this.RealWidth=800,this.RealHeight=800,this.init(),this}function l(t){return this.parent=t,this.element=null,this.frame=null,this.script="",this.flag=0,this.defaultColor_1="#000",this.defaultColor_2="#555",this.init(),this}o.prototype.getRoom=function(){var t;t=window.innerHeight>window.innerWidth?parseInt(.8*window.innerWidth):parseInt(.8*window.innerHeight),this.DisplayWidth=this.DisplayHeight=t},o.prototype.help=function(){console.log("使用文档："),console.log("【1】画布内元素，双击删除，右键复制，修改元素请用Dev Tool"),console.log("【2】动画。你可以让画布中的svg元素产生动画，动画基于JS代码。将你想要实现的动画的JS代码粘贴进黑色文本框，并点击黄色按钮就可以捆绑动画程序到当前画布上"),console.log("【2.1】但是直接在文本框里写代码是不现实的，所以你得在 console 里写好，并实验后再粘贴进去"),console.log("【2.2】使用 let anime = quickStart(); 这行代码便可以使用预先准备好的动画函数库。注意，这行代码只能在 console 里测试使用，不要把这行代码一起粘贴到那个黑色文本框里。")},o.prototype.init=function(){this.help(),this.getRoom(),document.oncontextmenu=function(){return!1}},o.prototype.createStage=function(t){this.stage.push(new l(this)),1===t&&(this.stage[this.stage.length-1].element.innerHTML=this.NowStage().element.innerHTML),this.ChangeStage(this.stage.length-1)},o.prototype.ChangeStage=function(t){document.querySelectorAll("svg").forEach(function(t){t.classList.remove("now_edit")}),this.stage[t].element.classList.add("now_edit"),this.now_stage=t},o.prototype.NowStage=function(){return this.stage[this.now_stage]},o.prototype.exportMe=function(){var t={arr1:[],arr2:[]};return this.stage.forEach(function(e){t["arr1"].push(e.element.innerHTML),t["arr2"].push(e.script)}),console.log("导出结果出来啦"),console.log(JSON.stringify(t)),JSON.stringify(t)},o.prototype.importMe=function(t){var e=JSON.parse(t);for(var i in this.stage)document.querySelector(this.svg_area).removeChild(this.stage[i].element);for(var n in this.stage=[],e["arr1"])this.stage[n]=new l(this),this.stage[n].element.innerHTML=e["arr1"][n],this.stage[n].script=e["arr2"][n];this.ChangeStage(0)},o.prototype.deletePage=function(t){if(this.stage.length>1){var e=t||this.now_stage;document.querySelector(this.svg_area).removeChild(this.stage[e].element),this.stage.splice(this.now_stage,1),0!==e?this.ChangeStage(e-1):this.ChangeStage(e+1)}},l.prototype.init=function(){this.element=document.createElementNS(r,"svg"),this.element.setAttribute("width",this.parent.DisplayWidth),this.element.setAttribute("height",this.parent.DisplayHeight),this.element.setAttribute("viewBox","0 0 "+this.parent.RealWidth+" "+this.parent.RealHeight),document.querySelector(this.parent.svg_area).appendChild(this.element),new c(this)},l.prototype.addElement2SVG=function(t,e,i,n){var a;"c"===t?(a=document.createElementNS(r,"circle"),a.setAttribute("cx",parseInt(Math.random()*this.parent.DisplayWidth).toString()),a.setAttribute("cy",parseInt(Math.random()*this.parent.DisplayHeight).toString()),a.setAttribute("r",e||"90"),a.style.fill=n||this.defaultColor_1):"r"===t?(a=document.createElementNS(r,"rect"),a.setAttribute("x",parseInt(Math.random()*this.parent.DisplayWidth).toString()),a.setAttribute("y",parseInt(Math.random()*this.parent.DisplayHeight).toString()),a.setAttribute("width",e||"90"),a.setAttribute("height",i||"90"),a.style.fill=n||this.defaultColor_1):"t"===t&&(a=document.createElementNS(r,"text"),a.setAttribute("x",parseInt(Math.random()*this.parent.DisplayWidth).toString()),a.setAttribute("y",parseInt(Math.random()*this.parent.DisplayHeight).toString()),a.setAttribute("font-size",e||"60"),a.style.fill=n||this.defaultColor_2,a.textContent=i||"Hello World"),a.classList.add("svg_child"),a.setAttribute("id","b"+this.flag),this.flag++,this.element.append(a)},l.prototype.anime_start=function(){var t=['<svg width="calc(100vw - 16px)" height="calc(100vw - 16px)" ','viewBox="0 0 '+this.parent.RealWidth+" "+this.parent.RealHeight+'">\n',this.element.innerHTML,"</svg><script>",'let stage = document.querySelector("svg");',"function play(){let anime = new window.parent.Anime(1,stage);",this.script,"}<\/script>","<style>.svg_child{-webkit-transition: all 0.5s ease-in-out;}</style>"].join("");this.frame=document.createElement("iframe"),this.frame.setAttribute("id","happy_frame"),this.frame.setAttribute("frameborder","0"),this.frame.setAttribute("width",this.parent.DisplayWidth+20),this.frame.setAttribute("height",this.parent.DisplayHeight+20);var e=new Blob([t],{type:"text/html"});document.querySelector(this.parent.anime_area).appendChild(this.frame),this.frame.src=URL.createObjectURL(e)},l.prototype.play=function(){this.frame.contentWindow.play()},l.prototype.anime_over=function(){document.querySelector(this.parent.anime_area).removeChild(this.frame),this.frame=null};var c=function t(e){s(this,t);var i=e.element,n=document.createElement("span");n.style.position="absolute",n.style.display="block",n.style.outline="solid 2px #99f",n.style.pointerEvents="none",n.setAttribute("z-index","1"),document.body.appendChild(n);var a=null,r={x:0,y:0};function o(t){if(t.isSameNode(i))n.style.display="none";else{var a=t.getBoundingClientRect(),s=document.querySelector(e.parent.svg_area).getBoundingClientRect();n.style.left=a.left+"px",n.style.top=a.top+"px",n.style.width=a.width+"px",n.style.height=a.height+"px",n.style.display="block";var r=document.querySelector("#selector_data_area");r.querySelector(".selector_data:nth-child(1)").innerHTML=parseInt(a.left-s.left),r.querySelector(".selector_data:nth-child(2)").innerHTML=parseInt(a.top-s.top),r.querySelector(".selector_data:nth-child(3)").innerHTML=t.id}}function l(t){var e=t.target;return!1===e.isSameNode(i)?("circle"===e.tagName?(r.x=parseFloat(e.getAttribute("cx"))-t.clientX,r.y=parseFloat(e.getAttribute("cy"))-t.clientY):(r.x=parseFloat(e.getAttribute("x"))-t.clientX,r.y=parseFloat(e.getAttribute("y"))-t.clientY),a=e,1):0}i.addEventListener("mouseover",function(t){var e=t.target;o(e)}),i.addEventListener("mousedown",function(t){var i,n,a;2===t.button?l(t)&&("circle"===t.target.tagName?(i="c",n=t.target.getAttribute("r")):"text"===t.target.tagName?(i="t",n=t.target.getAttribute("font_size"),a=t.target.textContent):(i="r",n=t.target.getAttribute("width"),a=t.target.getAttribute("height")),e.addElement2SVG(i,n,a)):l(t)}),i.addEventListener("mouseup",function(){a=null}),i.addEventListener("dblclick",function(t){l(t),i.removeChild(a),a=null}),window.addEventListener("mousemove",function(t){a&&("circle"===a.tagName?(a.setAttribute("cx",t.clientX+r.x),a.setAttribute("cy",t.clientY+r.y)):(a.setAttribute("x",t.clientX+r.x),a.setAttribute("y",t.clientY+r.y)),o(a))})},u=o,h={data:function(){return{input:{script:null,var1:null,var2:null,var3:null,import:null},selector:{x:null,y:null,id:null},run:null,dialog:!1,dialog2:!1,dialog3:!1,dialog4:!1}},methods:{change_stage:function(t){this.run.ChangeStage(t),this.input.script=this.run.NowStage().script},btn_C:function(){this.run.NowStage().addElement2SVG("c",this.input.var1,null,this.input.var3)},btn_R:function(){this.run.NowStage().addElement2SVG("r",this.input.var1,this.input.var2,this.input.var3)},btn_T:function(){this.run.NowStage().addElement2SVG("t",this.input.var1,this.input.var2,this.input.var3)},btn_P:function(){0!==this.run.now_stage&&this.change_stage(this.run.now_stage-1)},btn_N:function(){this.run.now_stage!==this.run.stage.length-1&&this.change_stage(this.run.now_stage+1)},btn_New:function(){this.run.createStage()},btn_New2:function(){this.run.createStage(1)},btn_im:function(){this.dialog4=!1,this.run.importMe(this.input.import)},btn_ex:function(){this.run.exportMe()},btn_update_script:function(){this.run.NowStage().script=this.input.script},btn_anime_play:function(){this.dialog=!0,this.run.NowStage().anime_start()},playEnd:function(){this.dialog=!1,this.run.NowStage().anime_over()},btn_iframe_play:function(){this.run.NowStage().play()},deletePage:function(){this.dialog3=!1,this.run.deletePage()}},created:function(){this.run=new u},mounted:function(){this.run.createStage()}},d=h,v=(i("b8c2"),i("2877")),p=Object(v["a"])(d,n,a,!1,null,null,null);p.options.__file="Index.vue";e["default"]=p.exports},f040:function(t,e,i){}}]);
//# sourceMappingURL=index.b2d9b3b5.js.map