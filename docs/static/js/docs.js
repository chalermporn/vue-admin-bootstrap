webpackJsonp([2,0],[function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=e(31),s=a(n),l=e(107),i=a(l);e(83),e(84),e(87),e(32),s["default"].config.debug=!0,new s["default"]({el:"body",components:{bodyDocs:i["default"]},created:function(){},ready:function(){console.log("this is docs")}})},,,,,,,,,,function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=function(t){return"string"!=typeof t?t:"true"===t||"false"!==t&&("null"!==t&&("undefined"!==t&&t))}},,,,,,,function(t,o,e){var a,n;a=e(36),n=e(89),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},,,,,,,,,,function(t,o,e){var a,n;a=e(44),n=e(98),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(45),n=e(99),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(46),n=e(100),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(47),n=e(101),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},,function(t,o){"use strict";!function(t,o){if("undefined"!=typeof t&&t.Prism&&t.document){var e={html:"HTML",css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform7",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",php:"PHP","php-extras":"PHPExtras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wikimarkup",yaml:"YAML"};o.hooks.add("before-highlight",function(t){var o=t.element.parentNode;if(o&&/pre/i.test(o.nodeName)){var a=e[t.language]||t.language.substring(0,1).toUpperCase()+t.language.substring(1);o.setAttribute("data-language",a)}})}}(window,window.Prism)},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=function(t){return"number"==typeof t?t:void 0===t||null===t||isNaN(Number(t))?0:Number(t)}},function(t,o){"use strict";function e(){var t=document.createElement("bootstrap"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in o)if(void 0!==t.style[e])return o[e];return!1}Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={end:e()}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(33),s=a(n),l=e(3),i=a(l);o["default"]={props:{offset:{type:Number,coerce:s["default"],"default":0}},data:function(){return{affixed:!1}},computed:{top:function(){return this.offset>0?this.offset+"px":null}},methods:{checkScroll:function(){if(this.$el.offsetWidth||this.$el.offsetHeight||this.$el.getClientRects().length){for(var t={},o={},e=this.$el.getBoundingClientRect(),a=document.body,n=["Top","Left"],s=0;s<n.length;s++){var l=n[s],i=l.toLowerCase(),r=window["page"+("Top"===l?"Y":"X")+"Offset"],d="scroll"+l;"number"!=typeof r&&(r=document.documentElement[d],"number"!=typeof r&&(r=document.body[d])),t[i]=r,o[i]=t[i]+e[i]-(this.$el["client"+l]||a["client"+l]||0)}var c=t.top>o.top-this.offset;this.affixed!==c&&(this.affixed=c)}}},ready:function(){var t=this;this.checkScroll(),(0,i["default"])(window).on("scroll resize",function(){return t.checkScroll()})},beforeDestroy:function(){var t=this;(0,i["default"])(window).off("scroll resize",function(){return t.checkScroll()})}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function n(t){t&&3===t.which||(0,l["default"])(d).each(function(o,e){var a=e.$el;e.show&&(t&&"click"===t.type&&/input|textarea/i.test(t.target.tagName)&&l["default"].contains(a,t.target)||(e.show=!1))})}Object.defineProperty(o,"__esModule",{value:!0});var s=e(3),l=a(s),i=e(10),r=a(i),d=[];(0,l["default"])(document).on("click.v.dropdown.data-api",n),o["default"]={props:{show:{twoWay:!0,type:Boolean,coerce:r["default"],"default":!1},"class":null,disabled:{type:Boolean,coerce:r["default"],"default":!1},text:{type:String,"default":null},type:{type:String,"default":null},placement:{coerce:function(t){return"string"==typeof t?t.split(" "):["left","down"]}}},data:function(){return{}},computed:{classes:function(){return[{"topbar-nav":this.$parent._topbarNav,disabled:this.disabled,dropup:~this.placement.indexOf("top"),open:this.show},this["class"],"dropdown"]},slots:function(){return this._slotContents||{}},btnType:function(){return"btn-"+(this.type||"default")}},ready:function(){d.push(this)},attached:function(){},beforeDestroy:function(){var t=this,o=-1;l["default"].each(d,function(e,a){e===t&&(o=a)}),o>=0&&d.splice(o,1)},methods:{toggle:function(t){var o=this.show;return this.disabled?void t.preventDefault():(n(),o||(this.show=!0),t.preventDefault(),void t.stopPropagation())},hide:function(t){this.show=!1,t.preventDefault(),t.stopPropagation(),this.disabled}},components:{},watch:{}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(3),s=a(n),l=e(34),i=a(l),r=e(10),d=a(r),c=i["default"].end;o["default"]={props:{show:{type:Boolean,twoWay:!0,require:!0},backdrop:{type:Boolean,coerce:d["default"],"default":!0},backdropStatic:{type:Boolean,coerce:d["default"],"default":!0},animate:{type:String,"default":"fade"},large:{type:Boolean,coerce:d["default"],"default":!1},small:{type:Boolean,coerce:d["default"],"default":!1}},data:function(){return{}},computed:{modalSize:function(){return{large:"modal-lg",small:"modal-sm"}[this.type]||""},doAnimate:function(){return c&&""!==this.animate}},ready:function(){var t=this;this.backdropStatic&&(0,s["default"])(this.$els.modal).on("click",function(o){o.target===o.currentTarget&&t.hide()}),(0,s["default"])(this.$els.backdrop).remove(),(0,s["default"])(this.$els.modal).remove()},beforeDestroy:function(){(0,s["default"])(this.$els.modal).off()},methods:{hide:function(){this.show=!1},_backdrop:function(t){var o=this,e=this.doAnimate,a=(0,s["default"])(document.body),n=this.$els.backdrop,l=(0,s["default"])(n);if(this.show&&this.backdrop){if(a.addClass("modal-open"),(0,s["default"])(n).appendTo("body").show(),e&&n.offsetWidth,l.addClass("in"),!t||"function"!=typeof t)return;return void(e?l.one(c,t):t())}if(!this.show&&this.backdrop){l.removeClass("in");var i=function(){o._backdropDestroy(),t&&"function"==typeof t&&t()};return void(e?l.one(c,i):i())}(t||"function"!=typeof t)&&t()},_backdropDestroy:function(){(0,s["default"])(this.$els.backdrop).remove()},_close:function(){var t=this,o=this.$els.modal,e=(0,s["default"])(o),a=this.doAnimate;e.removeClass("in"),a?e.one(c,function(){t._closeModal()}):this._closeModal()},_closeModal:function(){var t=(0,s["default"])(document.body);(0,s["default"])(this.$els.modal).hide().remove(),this._backdrop(function(){t.removeClass("modal-open")})},_open:function(){var t=this.$els.modal,o=(0,s["default"])(t),e=this.doAnimate;this._backdrop(function(){o.appendTo("body").show().scrollTop(0),e&&t.offsetWidth,o.addClass("in")})}},components:{},watch:{show:function(t,o){t?this._open():this._close()}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{logoIcon:{type:String,"default":"fa fa-desktop"},logoLink:{type:String,"default":""},homeName:{type:String,"default":"Vue-Admin-Bootstrap"},homeLink:{type:String,"default":"/home"}},created:function(){this._topbar=!0}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(10),s=a(n),l=e(17),i=a(l);o["default"]={props:{text:{type:String,"default":""},show:{type:Boolean,coerce:s["default"],"default":!1},navList:{type:Array,"default":[]}},components:{Dropdown:i["default"]},created:function(){this._topbarNav=!0}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(111),s=a(n),l=e(112),i=a(l),r=e(110),d=a(r),c=e(108),p=a(c),u=e(109),f=a(u);o["default"]={components:{container:s["default"],docsNavbar:i["default"],affixSidebar:d["default"],modalDocs:p["default"],topbarDocs:f["default"]}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(30),s=a(n),l=e(28),i=a(l),r=e(29),d=a(r),c=e(27),p=a(c),u=e(104),f=a(u),b=e(17),h=a(b);o["default"]={data:function(){return{normalShow:!1,smallShow:!1,largeShow:!1,slotShow:!1,backdropShow:!1,backdropStaticShow:!1,animateShow:!1}},computed:{},ready:function(){},attached:function(){},methods:{},components:{docSection:s["default"],docCode:i["default"],docOptions:d["default"],docCallout:p["default"],modal:f["default"],dropdown:h["default"]}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(50),s=a(n),l=e(30),i=a(l),r=e(28),d=a(r),c=e(29),p=a(c),u=e(27),f=a(u),b=e(105),h=a(b),v=e(106),m=a(v),y=e(17),x=a(y),g=e(86),w=a(g);o["default"]={components:{docSection:i["default"],docCode:d["default"],docOptions:p["default"],docCallout:f["default"],Topbar:h["default"],TopbarNav:m["default"],Dropdown:x["default"]},data:function(){return{navList:w["default"].navList,dataStr:(0,s["default"])(w["default"].navList.slice(0,2),void 0,0)}}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(49),s=a(n),l=e(3),i=a(l),r=e(103),d=a(r);o["default"]={components:{affix:d["default"]},filters:{space:function(t){return t.replace("-"," ")}},data:function(){return{active:null,sections:[]}},created:function(){var t=this;(0,i["default"])(window).on("scroll load resize",function(){return t.scrollSpy()}),this.$root.sections||(this.$root.sections=[]),this.sections=this.$root.sections},methods:{scrollSpy:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,o=!0,e=!1,a=void 0;try{for(var n,l=(0,s["default"])(this.sections);!(o=(n=l.next()).done);o=!0){var i=n.value;i.el.offsetTop+420<=t&&(this.active=i.id)}}catch(r){e=!0,a=r}finally{try{!o&&l["return"]&&l["return"]()}finally{if(e)throw a}}}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{type:{type:String,"default":""},id:{type:String,"default":null},title:{type:String,"default":""},content:{type:String,"default":""}}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(3),s=a(n);o["default"]={props:{language:{type:String,"default":null},title:{type:String,"default":""},content:{type:String,"default":""}},data:function(){return{compiledContent:""}},compiled:function(){var t=this.content;if(!this._slotContents||!this._slotContents["default"])return void(this.compiledContent=t.replace(/^\s+|\s+$/g,""));s["default"].each(this._slotContents["default"].childNodes,function(o,e){t+=e.outerHTML||e.nodeValue}),~["html","markup"].indexOf(this.language)&&(t=t.replace(/(\w+)=""/g,"$1"));var o=t.match(/(\n|\r)[ ]*\S/g);o&&!function(){var e=o.map(function(t){return t.length-2}),a=Math.min.apply(Math,e);t=t.replace(/(\n|\r)([^\n\S]*)/g,function(t,o,e){return o+e.substr(a)})}(),this.compiledContent=t.replace(/^\s+|\s+$/g,"")}}},function(t,o,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(3),s=a(n);o["default"]={props:{name:{type:String,"default":null}},data:function(){return{options:[]}},created:function(){!this.name&&this.$parent._section&&(this.name=this.$parent.name)},ready:function(){var t=this,o=this._slotContents["default"];o&&s["default"].each(o.children,function(o,e){var a=s["default"].map(e.children,function(t){return t.innerHTML||t.textContent});t.options.push(a)})}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{id:{required:!0,type:String,"default":null},name:{required:!0,type:String,"default":null}},created:function(){this._section=!0}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,o){},function(t,o){},function(t,o){},,function(t,o){t.exports={navList:[[{title:"col-1 row-1",navList:[{href:"/home",icon:"fa-chart",content:"第一列,第一行,第一个"},{href:"#/my",icon:"fa-chart",content:"第一列,第一行，第二个"}]},{title:"col-1 row-2",navList:[{href:"#/list",icon:"fa-chart",content:"第一列,第二行,第一个"},{href:"#/contact",icon:"fa-chart",content:"第一列,第二行,第二个"}]}],[{title:"col-2",navList:[{href:"#/test",icon:"fa-chart",content:"第二列,第一行"}]}]]}},,function(t,o){t.exports=' <div class="hidden-print hidden-xs hidden-sm"> <nav class=bs-docs-sidebar :class={affix:affixed} :style={marginTop:top}> <slot></slot> </nav> </div> '},function(t,o){t.exports=" <div v-if=$parent._navbar||$parent._topbar||$parent._topbarNav :class=classes> <a v-if=text v-el:dropdown-toggle href=# class=dropdown-toggle :class=\"{\n              'topbar-btn': $parent._topbar||$parent._topbarNav,\n              'topbar-nav-btn': $parent._topbarNav\n          }\" @keydown.esc=hide @click=toggle :disabled=disabled> {{ text }} <span class=caret></span> </a> <slot v-else name=button></slot> <slot v-if=\"slots['dropdown-menu']\" name=dropdown-menu></slot> <ul v-else class=dropdown-menu :class=\"{\n          'topbar-clearfix': $parent._topbar||$parent._topbarNav\n        }\"> <slot></slot> </ul> </div> <div v-else class=btn-group :class=classes :disabled=disabled> <button v-if=text v-el:dropdown-toggle type=button :class=\"['btn', btnType, 'dropdown-toggle']\" @keydown.esc=hide @click=toggle :disabled=disabled> {{ text }} <span class=caret></span> </button> <slot v-else name=button></slot> <slot v-if=\"slots['dropdown-menu']\" name=dropdown-menu></slot> <ul v-else class=dropdown-menu :class=\"{\n          'pull-right': ~placement.indexOf('right')\n        }\"> <slot>这里唯恐</slot> </ul> </div> "},function(t,o){t.exports=' <div class=modal :class=animate v-el:modal> <div class=modal-dialog :class="{\'modal-lg\': large, \'modal-sm\': small}"> <div class=modal-content> <div class=modal-header> <button type=button class=close aria-label=Close @click=hide><span aria-hidden=true>&times;</span></button> <h4 class=modal-title> <slot name=modal-title> 标题 </slot> </h4> </div> <div class=modal-body> <slot name=modal-body> <p>One fine body&hellip;</p> </slot> </div> <div class=modal-footer> <slot name=modal-footer> <button type=button class="btn btn-default" @click=hide>Close</button> <button type=button class="btn btn-primary">Save changes</button> </slot> </div> </div> </div> </div> <div class=modal-backdrop :class=animate v-el:backdrop></div> '},function(t,o){t.exports=' <div class=admin-topbar> <div class="topbar-wrap topbar-clearfix"> <div class="topbar-head topbar-left"> <slot name=topbar-logo> <a :href=logoLink class="topbar-logo topbar-left"> <i :class=logoIcon></i> </a> </slot> <slot name=topbar-home> <a :href=homeLink class="topbar-home-link topbar-btn topbar-left"> <span>{{{homeName}}}</span> </a> </slot> </div> <slot name=topbar-nav></slot> <slot name=topbar-left></slot> <div class="topbar-info topbar-right topbar-clearfix"> <slot name=topbar-right></slot> </div> </div> </div> '},function(t,o){t.exports=' <dropdown :text=text class=topbar-left :show.sync=show> <div slot=dropdown-menu class="dropdown-menu topbar-nav-list"> <div class=topbar-nav-col v-for="column in navList"> <template v-for="(itemIndex ,navItem) in column"> <div class=topbar-nav-item> <p class=topbar-nav-item-title>{{navItem.title}}</p> <ul class=topbar-nav-item-list> <li v-for="item in navItem.navList"> <a :href=item.href> <i class=fa :class=item.icon></i> <span>{{item.content}}</span> </a> </li> </ul> </div> <div v-if="itemIndex < column.length - 1 " class=topbar-nav-gap></div> </template> </div> </div> </dropdown> '},function(t,o){t.exports=' <div id=wrapper> <docs-navbar></docs-navbar> <div class=bs-docs-header> <div class=container> <h1>VueAdminStrap</h1> <p>基于Bootstrap , jQuery 库为基础, 以<a target=_blank href=http://vuejs.org/ >Vue.js</a> 开发组件</p> <p>without bootstrap.js</p> <br> <p><a class="btn btn-outline-inverse btn-lg" href=https://github.com/liylanlong/vue-admin-bootstrap>Code on GitHub</a></p> </div> </div> <container> <div v-el:sections class=col-md-9> <modal-docs></modal-docs> <topbar-docs></topbar-docs> </div> <div class=col-md-3> <affix-sidebar></affix-sidebar> </div> </container> </div> <footer class=bs-docs-footer> <div class=container> <p>Designed and built by <a href=https://github.com/liyanlong/ >liyanlong</a>.</p> </div> </footer> '},function(t,o){t.exports=' <doc-section id=Modal name=Modal> <modal :show.sync=normalShow></modal> <modal :show.sync=smallShow small></modal> <modal :show.sync=largeShow large></modal> <modal :show.sync=slotShow> <div slot=modal-title> 自定义标题 </div> <div slot=modal-body> <dropdown class="" text=帮助 type=default> <li class=topb·ar-info-btn> <a href=#>列表1</a> </li> <li class=topbar-info-btn> <a href=#>列表1</a> </li> </dropdown> </div> <div slot=modal-footer> 这里是尾部 </div> </modal> <modal :show.sync=animateShow animate=""></modal> <modal :show.sync=backdropShow backdrop=false></modal> <modal :show.sync=backdropStaticShow backdrop-static=false></modal> <div class=btn-group role=group> <button type=button class="btn btn-default" @click="normalShow = true">普通弹窗</button> <button type=button class="btn btn-default" @click="smallShow = true">小弹窗</button> <button type=button class="btn btn-default" @click="largeShow = true">大窗口</button> <button type=button class="btn btn-default" @click="slotShow = true">自定义窗口</button> <button type=button class="btn btn-default" @click="backdropShow = true">无遮罩层</button> <button type=button class="btn btn-default" @click="animateShow = true">无动画层</button> <button type=button class="btn btn-default" @click="backdropStaticShow = true">固定backdrop</button> <button type=button class="btn btn-default" @click="normalShow = true" disabled=disabled>禁止弹窗</button> </div> <doc-code language=markup title="Component Style"> <modal :show.sync=normalShow></modal> <modal :show.sync=smallShow small></modal> <modal :show.sync=largeShow large></modal> <modal :show.sync=slotShow> <div slot=modal-title> 自定义标题 </div> <div slot=modal-body> <dropdown class="" text=帮助 type=default> <li class=topb·ar-info-btn> <a href=#>列表1</a> </li> <li class=topbar-info-btn> <a href=#>列表1</a> </li> </dropdown> </div> <div slot=modal-footer> 这里是尾部 </div> </modal> <modal :show.sync=animateShow animate=""></modal> <modal :show.sync=backdropShow backdrop=false></modal> <modal :show.sync=backdropStaticShow backdrop-static=false></modal> </doc-code> <doc-code language=markup title="Button Style"> <div class=btn-group role=group> <button type=button class="btn btn-default" @click="normalShow = true">普通弹窗</button> <button type=button class="btn btn-default" @click="smallShow = true">小弹窗</button> <button type=button class="btn btn-default" @click="largeShow = true">大窗口</button> <button type=button class="btn btn-default" @click="slotShow = true">自定义窗口</button> <button type=button class="btn btn-default" @click="backdropShow = true">无遮罩层</button> <button type=button class="btn btn-default" @click="animateShow = true">无动画层</button> <button type=button class="btn btn-default" @click="backdropStaticShow = true">固定backdrop</button> <button type=button class="btn btn-default" @click="normalShow = true" disabled=disabled>禁止弹窗</button> </div> </doc-code> <doc-code language=javascript title="Javascript Code"> var app = new Vue({ el: \'body\', data: { normalShow: false, smallShow: false, largeShow: false, slotShow: false, backdropShow: false, backdropStaticShow: false, animateShow: false }, components: { modal: VueAdminBootStrap.components.modal } }); </doc-code> <doc-options> <div> <p>show</p> <p><code>sync</code><code>Boolean</code></p> <p></p> <p>是否打开模态框</p> </div> <div> <p>backdrop</p> <p><code>Boolean</code></p> <p><code>true</code></p> <p>是否有遮罩层</p> </div> <div> <p>backdrop-static</p> <p><code>Boolean</code></p> <p><code>true</code></p> <p>点击遮罩层是否可以关闭</p> </div> <div> <p>animate</p> <p><code>String</code></p> <p><code>fade</code>, <code>\'\'</code> 无动画</p> <p>设置弹窗动画</p> </div> <div> <p>large</p> <p><code>Boolean</code></p> <p><code>false</code></p> <p>是否为大的模态框</p> </div> <div> <p>small</p> <p><code>Boolean</code></p> <p><code>false</code></p> <p>是否为小的模态框</p> </div> </doc-options> <doc-callout type=info> <h4>Usage</h4> <p>使用的时候如果要自定义modal内容,可以设置slot.<code>modal-title</code>, <code>modal-body</code>, <code>modal-footer</code></p> </doc-callout> </doc-section> '},function(t,o){t.exports=' <doc-section id=Topbar name=Topbar> <topbar home-name=文档名称 home-link=#/home logo-icon="fa fa-desktop"> <topbar-nav slot=topbar-nav :nav-list=navList text=导航></topbar-nav> <a slot=topbar-left class="topbar-left topbar-btn topbar-console-btn" href=#/console><span>管理控制台</span></a> <div slot=topbar-right> <dropdown class="topbar-left topbar-info-item" text=帮助 type=topbar-info> <li class=topbar-info-btn> <a href=#a>列表1</a> </li> <li class=topbar-info-btn> <a href=#b>列表2</a> </li> </dropdown> <div class="topbar-left topbar-accesskeys topbar-info-item"> <a href=#/docs class=topbar-btn>文档</a> </div> </div> </topbar> <doc-code language=markup title="Component Style"> <topbar home-name=文档名称 home-link=#/home logo-icon="fa fa-desktop"> <topbar-nav slot=topbar-nav :nav-list=navList text=导航></topbar-nav> <a slot=topbar-left class="topbar-left topbar-btn topbar-console-btn" href=#/console><span>管理控制台</span></a> <div slot=topbar-right> <dropdown class="topbar-left topbar-info-item" text=帮助 type=topbar-info> <li class=topbar-info-btn> <a href=#a>列表1</a> </li> <li class=topbar-info-btn> <a href=#b>列表2</a> </li> </dropdown> <div class="topbar-left topbar-accesskeys topbar-info-item"> <a href=#/docs class=topbar-btn>文档</a> </div> </div> </topbar> </doc-code> <doc-code language=javascript title="Javascript Code"> var app = new Vue({ el: \'body\', data: { navList: [] }, components: { topbar: VueAdminBootStrap.components.layout.Topbar, topbarNav: VueAdminBootStrap.components.layout.TopbarNav } }); </doc-code> <doc-code language=javascript title="topbarNav data" :content=dataStr></doc-code> </doc-section> '},function(t,o){t.exports=' <affix offset=50> <ul class="nav bs-docs-sidenav" id=sidenav> <li v-for="s in sections" :class="{active:active==s.id}"><a href="#{{ s.id }}">{{ s.name }}</a></li> </ul> <a href=# class=back-to-top>Back to top</a> <a href=https://github.com/yuche/vue-strap class=back-to-top>GitHub</a> </affix> '},function(t,o){t.exports=' <div class="container bs-docs-container"> <div class=row> <slot></slot> </div> </div> '},function(t,o){t.exports=" <div class=bs-callout :class=\"{\n        'bs-callout-default': type === 'default' || type === '',\n        'bs-callout-info': type === 'info',\n        'bs-callout-warning': type === 'warning',\n        'bs-callout-danger': type === 'danger'\n    }\" :id=id> <slot></slot> </div> "},function(t,o){t.exports=" <pre v-if=!language v-el:container></pre> <template v-else> <h3 v-if=title class=bs-code-title> {{title}} </h3> <pre v-if=\"language=='markup'\"><code class=language-markup>{{compiledContent}}</code></pre> <pre v-else><code class=language-{{language}}>{{compiledContent}}</code></pre> </template> "},function(t,o){t.exports=' <h2 v-if=options.length>{{name}} Options</h2> <div class=table-responsive> <table v-if=options.length class="table table-bordered"> <thead> <tr> <th>Name</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> </thead> <tbody> <tr v-for="option in options"> <td v-for="el in option" v-html=el v-if="$index<4"></td> </tr> </tbody> </table> </div> '},function(t,o){t.exports=" <div class=bs-docs-section :id=id> <h1 class=page-header><a href=#{{id}} class=anchor>{{name}}</a></h1> <slot></slot> </div> "},function(t,o){t.exports=' <nav class="navbar navbar-default"> <div class=container-fluid> <div class=navbar-header> <button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#bs-example-navbar-collapse-1 aria-expanded=false> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class=navbar-brand href=#>vue-admin-bootstrap Docs</a> </div> </div> </nav> '},function(t,o,e){var a,n;a=e(35),n=e(88),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(37),n=e(90),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(38),n=e(91),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(39),n=e(92),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(40),n=e(93),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(41),n=e(94),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;e(82),a=e(42),n=e(95),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(43),n=e(96),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;n=e(97),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var a,n;a=e(48),n=e(102),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}]);
//# sourceMappingURL=docs.js.map