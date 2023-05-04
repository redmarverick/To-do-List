"use strict";(self.webpackChunkminimalist_todo=self.webpackChunkminimalist_todo||[]).push([[179],{426:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(81),i=n.n(r),a=n(645),s=n.n(a)()(i());s.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  justify-content: center;\n  background-color: #f6f6f6;\n  font-family: "Inter var", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.align-center {\n  display: flex;\n  align-items: center;\n}\n\nmain {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 500px;\n  min-height: 220px;\n  margin: 40px 8px 40px 8px;\n  border-radius: 4px;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n/* Title */\n\n.title {\n  justify-content: space-between;\n  padding: 16px;\n}\n\nh1 {\n  font-weight: 500;\n  font-size: 1.3rem;\n}\n\ni {\n  color: #c1c1c1;\n  cursor: pointer;\n}\n\n.addtask {\n  width: 100%;\n  border: none;\n  padding: 16px;\n  font-size: 1.125rem;\n  border-top: 1px solid rgba(193, 193, 193, 0.4);\n}\n\n.addtask:focus {\n  outline: none;\n}\n\n#list-task {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: 16px;\n  border-top: 1px solid rgba(193, 193, 193, 0.4);\n  background-color: white;\n}\n\n.task .task-content {\n  width: 90%;\n}\n\n.task .task-content input[type="checkbox"] {\n  width: 15px;\n  height: 15px;\n  margin-right: 12px;\n}\n\n.task .task-content .fa-trash {\n  color: white;\n}\n\n.task .task-content .task-description {\n  width: 100%;\n  border: none;\n  font-size: 1.125rem;\n  background: white;\n  background: none;\n}\n\n.task .task-content .task-description:focus {\n  outline: none;\n}\n\n#btn-clear-task {\n  width: 100%;\n  height: 60px;\n  font-weight: 500;\n  color: rgb(153, 152, 152);\n  cursor: pointer;\n  background-color: #f6f6f6;\n  border-top: 1px solid rgba(193, 193, 193, 0.4);\n  border-bottom: none;\n  border-left: none;\n  border-right: none;\n  bottom: 0;\n  position: relative;\n}\n',""]);const o=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],o=0;o<e.length;o++){var d=e[o],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=i(h,r);r.byIndex=o,t.splice(o,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var o=n(a[s]);t[o].references--}for(var d=r(e,i),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},16:(e,t,n)=>{var r=n(379),i=n.n(r),a=n(795),s=n.n(a),o=n(569),d=n.n(o),c=n(565),l=n.n(c),u=n(216),p=n.n(u),h=n(589),f=n.n(h),m=n(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),i()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;class b{constructor(e,t=!1,n){this.description=e,this.completed=t,this.index=n}}const v=new class{constructor(){this.list=[],this.dragStartID=-1,this.dragEndID=-1}add=(e,t=!1,n=this.list.length+1)=>{const r=new b(e,t,n);this.list.push(r),this.display(r)};display=e=>{const t=document.getElementById("list-task"),n=document.createElement("li");n.classList.add("task"),n.id=e.index;const r=document.createElement("div");r.classList.add("align-center","task-content");const i=document.createElement("input");i.type="checkbox",i.name=e.index;const a=document.createElement("input");a.classList.add("task-description"),a.value=e.description,a.type="text",i.addEventListener("change",(e=>{const{id:t}=e.currentTarget.parentElement.parentElement;e.currentTarget.checked?(e.currentTarget.nextSibling.style.textDecoration="line-through",this.list[t-1].completed=!0):(e.currentTarget.nextSibling.style.textDecoration="none",this.list[t-1].completed=!1)})),e.completed&&(i.click(),a.style.textDecoration="line-through"),a.addEventListener("focus",(e=>{const{id:t}=e.currentTarget.parentElement.parentElement;document.getElementById(t).style.backgroundColor="rgb(156, 156, 255)";const n=e.currentTarget.parentElement.nextSibling,r=e.currentTarget.parentElement.nextSibling.nextSibling;n.classList.remove("hidden"),r.classList.add("hidden")})),a.addEventListener("focusout",(e=>{const{id:t}=e.currentTarget.parentElement.parentElement;document.getElementById(t).style.backgroundColor="white",this.list[t-1].description=e.currentTarget.value;const n=e.currentTarget.parentElement.nextSibling,r=e.currentTarget.parentElement.nextSibling.nextSibling;setTimeout((()=>{r.classList.remove("hidden"),n.classList.add("hidden")}),200)})),r.append(i),r.append(a);const s=document.createElement("i");s.classList.add("fa-solid","fa-ellipsis-vertical"),s.setAttribute="deleteHid()";const o=document.createElement("i");o.classList.add("fa-solid","fa-trash","hidden"),o.style.color="#fff",o.setAttribute="deleteHid()",o.addEventListener("click",(e=>{const{id:t}=e.currentTarget.parentElement;this.delete(t)})),n.append(r),n.append(o),n.append(s),this.addEventsDragAndDrop(n),t.append(n)};delete=e=>{this.list=this.list.filter((t=>t.index!==this.list[e-1].index)),document.getElementById(e).remove(),this.updateIndexs()};updateIndexs=()=>{let e=1;this.list.forEach((t=>{document.getElementById(t.index).id=e,t.index=e,e+=1}))};clearAll=()=>{this.list.forEach((e=>{e.completed&&document.getElementById(e.index).remove()})),this.list=this.list.filter((e=>!e.completed)),this.updateIndexs()};addEventsDragAndDrop=e=>{e.draggable="true",e.addEventListener("dragstart",(e=>{this.dragStartID=e.currentTarget.id,e.currentTarget.style.backgroundColor="rgb(156, 156, 255)"}),!1),e.addEventListener("dragend",(()=>{const e=this.list[Number(this.dragStartID)-1];this.list=this.list.filter((t=>t.index!==e.index)),this.list.splice(Number(this.dragEndID)-1,0,e),this.updateIndexs(),document.getElementById("list-task").innerHTML="",this.list.forEach((e=>{this.display(e)}))}),!1),e.addEventListener("dragleave",(e=>{e.currentTarget.style.backgroundColor="#fff",e.preventDefault()}),!1),e.addEventListener("dragover",(e=>{e.currentTarget.style.backgroundColor="#ebebeb",this.dragEndID=e.currentTarget.id,e.preventDefault()}))}},x=document.forms[0];x.addEventListener("submit",(e=>{e.preventDefault(),0!==x.newtask.value.trim().length&&v.add(x.newtask.value),x.newtask.value=""})),document.getElementById("btn-clear-task").addEventListener("click",(()=>{v.clearAll()})),window.addEventListener("beforeunload",(()=>{const e={currentDescription:x.newtask.value,list:v.list};window.localStorage.setItem("SavedData",JSON.stringify(e))})),window.addEventListener("load",(()=>{const e=JSON.parse(window.localStorage.getItem("SavedData"));null!=e.currentDescription&&(x.newtask.value=e.currentDescription),null!=e.list&&e.list.forEach((e=>{v.add(e.description,e.completed,e.index)}))}))}},e=>{e(e.s=16)}]);