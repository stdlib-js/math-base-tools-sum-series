// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=eval;function t(e){return Math.abs(e)}var n,i=2220446049250313e-31,r=1e6,o=1e6;return n=function(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch(e){t=!1}return t}()?function(e,n){var o,f,a,u,l;if(l={},arguments.length>1&&(l=n),o=l.tolerance||i,a=l.maxTerms||r,u=l.initialValue||0,1==("function"==typeof e.next)){for(f of e)if(t(o*(u+=f))>=t(f)||0==--a)break}else do{u+=f=e()}while(t(o*u)<t(f)&&--a);return u}:function(e,n){var r,f,a,u,l;l={},arguments.length>1&&(l=n),r=l.tolerance||i,a=l.maxTerms||o,u=l.initialValue||0;do{u+=f=e()}while(t(r*u)<t(f)&&--a);return u},n},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).sumSeries=t();
//# sourceMappingURL=browser.js.map