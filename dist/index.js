!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(){r(this,e)}return i(e,[{key:"isMobile",value:function(){return/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)}},{key:"browserInfo",value:function(e){var n=navigator.userAgent.toLowerCase();switch(e){case"android":return-1!==n.indexOf("android");case"iphone":return-1!==n.indexOf("iphone");case"ipad":return-1!==n.indexOf("ipad");case"weixin":return-1!==n.indexOf("micromessenger");case"qq":return"qq"==n.match(/QQ/i);default:return n}}},{key:"isQQ",value:function(){return this.browserInfo("qq")}},{key:"isWeChat",value:function(){return this.browserInfo("weixin")}},{key:"isWechat",value:function(){return this.browserInfo("weixin")}},{key:"isAndroid",value:function(){return this.deviceInfo("android")}},{key:"isIos",value:function(){return this.deviceInfo("ios")}},{key:"deviceInfo",value:function(e){var n=navigator.userAgent;switch(e){case"android":return n.indexOf("Android")>-1||n.indexOf("Adr")>-1;case"ios":return!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}}},{key:"formatChineseCapital",value:function(e){var n=e;if(parseFloat(n)<0)throw new Error(n+"无效数字");if(e=parseFloat(e),!isNaN(e)){e=Math.round(100*e);var t=e%100==0,r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],i=["分","角","元","拾","佰","仟","万","拾","佰","仟","亿","拾","佰","仟"],o="",a=void 0,u=void 0,f=void 0,s=0;if(0==e)return"零元整";e<0&&(e=-e),e=e.toString(),f=e.length;for(var c=0;c<f;c++)a=parseInt(e.charAt(c)),u=f-1-c,0===a?2===u||6===u||11===u?(o+=i[u],s=0):s++:(s>0&&(o+="零",s=0),o=o+r[a]+i[u]);return t&&(o+="整"),o}}},{key:"setPageTitle",value:function(e){if(document.title=e,this.isIos()&&this.isWeChat()){var n=document.createElement("iframe");n.style.display="none",n.addEventListener("load",function(){setTimeout(function(){document.body.removeChild(n)},9)},!1),n.src="/favicon.ico",document.body.appendChild(n)}}},{key:"dateDiff",value:function(e){"string"==typeof e&&(e=new Date(e.replace(/-/g,"/")).getTime());var n=(new Date).getTime(),t=n-e;if(t<0)return"";var r=t/2592e6,i=t/6048e5,o=t/864e5,a=t/36e5,u=t/6e4;return r>=1?parseInt(r)+"月前":i>=1?parseInt(i)+"周前":o>=1?parseInt(o)+"天前":a>=1?parseInt(a)+"小时前":u>=1?parseInt(u)+"分钟前":"刚刚"}}]),e}();n.default=new o}])});