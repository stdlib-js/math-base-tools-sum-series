// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=eval;var t=function(e){return Math.abs(e)},n=2220446049250313e-31;var r=function(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch(e){t=!1}return t}()?function(e,r){var a,i,o,u,l;if(l={},arguments.length>1&&(l=r),a=l.tolerance||n,o=l.maxTerms||1e6,u=l.initialValue||0,!0==("function"==typeof e.next)){for(i of e)if(t(a*(u+=i))>=t(i)||0==--o)break}else do{u+=i=e()}while(t(a*u)<t(i)&&--o);return u}:function(e,r){var a,i,o,u,l;l={},arguments.length>1&&(l=r),a=l.tolerance||n,o=l.maxTerms||1e6,u=l.initialValue||0;do{u+=i=e()}while(t(a*u)<t(i)&&--o);return u};export{r as default};
//# sourceMappingURL=mod.js.map
