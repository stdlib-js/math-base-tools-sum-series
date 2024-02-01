// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=eval;function t(e){return Math.abs(e)}var n=function(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch(e){t=!1}return t}()?function(e,n){var r,a,i,o,u;if(u={},arguments.length>1&&(u=n),r=u.tolerance||2220446049250313e-31,i=u.maxTerms||1e6,o=u.initialValue||0,!0==("function"==typeof e.next)){for(a of e)if(t(r*(o+=a))>=t(a)||0==--i)break}else do{o+=a=e()}while(t(r*o)<t(a)&&--i);return o}:function(e,n){var r,a,i,o,u;u={},arguments.length>1&&(u=n),r=u.tolerance||2220446049250313e-31,i=u.maxTerms||1e6,o=u.initialValue||0;do{o+=a=e()}while(t(r*o)<t(a)&&--i);return o};export{n as default};
//# sourceMappingURL=mod.js.map
