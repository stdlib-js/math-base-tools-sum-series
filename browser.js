// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=eval;function t(e){return Math.abs(e)}var n,i=2220446049250313e-31;return n=function(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch(e){t=!1}return t}()?function(e,n){var r,o,f,a,u;if(u={},arguments.length>1&&(u=n),r=u.tolerance||i,f=u.maxTerms||1e6,a=u.initialValue||0,1==("function"==typeof e.next)){for(o of e)if(t(r*(a+=o))>=t(o)||0==--f)break}else do{a+=o=e()}while(t(r*a)<t(o)&&--f);return a}:function(e,n){var r,o,f,a,u;u={},arguments.length>1&&(u=n),r=u.tolerance||i,f=u.maxTerms||1e6,a=u.initialValue||0;do{a+=o=e()}while(t(r*a)<t(o)&&--f);return a},n},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).sumSeries=t();
//# sourceMappingURL=browser.js.map
