(()=>{"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e,o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.parent=e,this.title=o,this.text=n}var o,n;return o=t,n=[{key:"init",value:function(){this.togglePopover()}},{key:"togglePopover",value:function(){var e=this.parent.querySelector(".popover");if(e)this.parent.removeChild(e);else{var t=document.createElement("div");t.classList.add("popover");var o=document.createElement("h3");o.classList.add("popover-header"),o.textContent=this.title;var n=document.createElement("div");n.classList.add("popover-message"),n.textContent=this.text,t.insertAdjacentElement("beforeend",o),t.insertAdjacentElement("beforeend",n),this.parent.appendChild(t);var r=this.parent.querySelector(".popover-button");t.style.top="".concat(r.offsetTop-t.offsetHeight-15,"px"),t.style.left="".concat(r.offsetLeft+r.offsetWidth/2-t.offsetWidth/2,"px")}}}],n&&e(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),t}(),o=document.querySelector(".popover-button"),n=new t(document.querySelector(".container"),"Popover Title","Popover text");o.addEventListener("click",(function(){n.init()}))})();