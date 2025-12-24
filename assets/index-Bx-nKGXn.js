function ZS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function JS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sv={exports:{}},hl={},bv={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),qS=Symbol.for("react.portal"),eb=Symbol.for("react.fragment"),tb=Symbol.for("react.strict_mode"),nb=Symbol.for("react.profiler"),rb=Symbol.for("react.provider"),ib=Symbol.for("react.context"),ob=Symbol.for("react.forward_ref"),ab=Symbol.for("react.suspense"),sb=Symbol.for("react.memo"),lb=Symbol.for("react.lazy"),vh=Symbol.iterator;function cb(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jv=Object.assign,Cv={};function Ti(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||kv}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tv(){}Tv.prototype=Ti.prototype;function tf(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||kv}var nf=tf.prototype=new Tv;nf.constructor=tf;jv(nf,Ti.prototype);nf.isPureReactComponent=!0;var yh=Array.isArray,Pv=Object.prototype.hasOwnProperty,rf={current:null},Dv={key:!0,ref:!0,__self:!0,__source:!0};function Ev(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Pv.call(t,r)&&!Dv.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:qo,type:e,key:o,ref:a,props:i,_owner:rf.current}}function ub(e,t){return{$$typeof:qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function of(e){return typeof e=="object"&&e!==null&&e.$$typeof===qo}function db(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xh=/\/+/g;function ac(e,t){return typeof e=="object"&&e!==null&&e.key!=null?db(""+e.key):t.toString(36)}function as(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qo:case qS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ac(a,0):r,yh(i)?(n="",e!=null&&(n=e.replace(xh,"$&/")+"/"),as(i,t,n,"",function(u){return u})):i!=null&&(of(i)&&(i=ub(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",yh(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+ac(o,s);a+=as(o,t,n,c,i)}else if(c=cb(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+ac(o,s++),a+=as(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function va(e,t,n){if(e==null)return e;var r=[],i=0;return as(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},ss={transition:null},pb={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ss,ReactCurrentOwner:rf};function Av(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:va,forEach:function(e,t,n){va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return va(e,function(){t++}),t},toArray:function(e){return va(e,function(t){return t})||[]},only:function(e){if(!of(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Ti;Q.Fragment=eb;Q.Profiler=nb;Q.PureComponent=tf;Q.StrictMode=tb;Q.Suspense=ab;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pb;Q.act=Av;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=rf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Pv.call(t,c)&&!Dv.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qo,type:e.type,key:i,ref:o,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:ib,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rb,_context:e},e.Consumer=e};Q.createElement=Ev;Q.createFactory=function(e){var t=Ev.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:ob,render:e}};Q.isValidElement=of;Q.lazy=function(e){return{$$typeof:lb,_payload:{_status:-1,_result:e},_init:fb}};Q.memo=function(e,t){return{$$typeof:sb,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};Q.unstable_act=Av;Q.useCallback=function(e,t){return tt.current.useCallback(e,t)};Q.useContext=function(e){return tt.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};Q.useEffect=function(e,t){return tt.current.useEffect(e,t)};Q.useId=function(){return tt.current.useId()};Q.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return tt.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};Q.useRef=function(e){return tt.current.useRef(e)};Q.useState=function(e){return tt.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return tt.current.useTransition()};Q.version="18.3.1";bv.exports=Q;var S=bv.exports;const Xt=JS(S),hb=ZS({__proto__:null,default:Xt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb=S,gb=Symbol.for("react.element"),vb=Symbol.for("react.fragment"),yb=Object.prototype.hasOwnProperty,xb=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wb={key:!0,ref:!0,__self:!0,__source:!0};function Lv(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)yb.call(t,r)&&!wb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gb,type:e,key:o,ref:a,props:i,_owner:xb.current}}hl.Fragment=vb;hl.jsx=Lv;hl.jsxs=Lv;Sv.exports=hl;var l=Sv.exports,_v={exports:{}},yt={},Iv={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,M){var O=E.length;E.push(M);e:for(;0<O;){var B=O-1>>>1,Y=E[B];if(0<i(Y,M))E[B]=M,E[O]=Y,O=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],O=E.pop();if(O!==M){E[0]=O;e:for(var B=0,Y=E.length,ae=Y>>>1;B<ae;){var se=2*(B+1)-1,G=E[se],le=se+1,Re=E[le];if(0>i(G,O))le<Y&&0>i(Re,G)?(E[B]=Re,E[le]=O,B=le):(E[B]=G,E[se]=O,B=se);else if(le<Y&&0>i(Re,O))E[B]=Re,E[le]=O,B=le;else break e}}return M}function i(E,M){var O=E.sortIndex-M.sortIndex;return O!==0?O:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=E)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function b(E){if(x=!1,y(E),!v)if(n(c)!==null)v=!0,W(k);else{var M=n(u);M!==null&&F(b,M.startTime-E)}}function k(E,M){v=!1,x&&(x=!1,g(P),P=-1),h=!0;var O=p;try{for(y(M),f=n(c);f!==null&&(!(f.expirationTime>M)||E&&!V());){var B=f.callback;if(typeof B=="function"){f.callback=null,p=f.priorityLevel;var Y=B(f.expirationTime<=M);M=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(c)&&r(c),y(M)}else r(c);f=n(c)}if(f!==null)var ae=!0;else{var se=n(u);se!==null&&F(b,se.startTime-M),ae=!1}return ae}finally{f=null,p=O,h=!1}}var T=!1,C=null,P=-1,L=5,I=-1;function V(){return!(e.unstable_now()-I<L)}function N(){if(C!==null){var E=e.unstable_now();I=E;var M=!0;try{M=C(!0,E)}finally{M?$():(T=!1,C=null)}}else T=!1}var $;if(typeof m=="function")$=function(){m(N)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=N,$=function(){D.postMessage(null)}}else $=function(){j(N,0)};function W(E){C=E,T||(T=!0,$())}function F(E,M){P=j(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,W(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var O=p;p=M;try{return E()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=p;p=E;try{return M()}finally{p=O}},e.unstable_scheduleCallback=function(E,M,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=O+Y,E={id:d++,callback:M,priorityLevel:E,startTime:O,expirationTime:Y,sortIndex:-1},O>B?(E.sortIndex=O,t(u,E),n(c)===null&&E===n(u)&&(x?(g(P),P=-1):x=!0,F(b,O-B))):(E.sortIndex=Y,t(c,E),v||h||(v=!0,W(k))),E},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(E){var M=p;return function(){var O=p;p=M;try{return E.apply(this,arguments)}finally{p=O}}}})(Mv);Iv.exports=Mv;var Sb=Iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb=S,gt=Sb;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ov=new Set,To={};function Dr(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(To[e]=t,e=0;e<t.length;e++)Ov.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,kb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Sh={};function jb(e){return wu.call(Sh,e)?!0:wu.call(wh,e)?!1:kb.test(e)?Sh[e]=!0:(wh[e]=!0,!1)}function Cb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tb(e,t,n,r){if(t===null||typeof t>"u"||Cb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function sf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(af,sf);ze[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(af,sf);ze[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(af,sf);ze[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function lf(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tb(t,n,i,r)&&(n=null),r||i===null?jb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gn=bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=bh&&e[bh]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,sc;function to(e){if(sc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sc=t&&t[1]||""}return`
`+sc+e}var lc=!1;function cc(e,t){if(!e||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?to(e):""}function Pb(e){switch(e.tag){case 5:return to(e.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return e=cc(e.type,!1),e;case 11:return e=cc(e.type.render,!1),e;case 1:return e=cc(e.type,!0),e;default:return""}}function ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case Nr:return"Portal";case Su:return"Profiler";case cf:return"StrictMode";case bu:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nv:return(e.displayName||"Context")+".Consumer";case Rv:return(e._context.displayName||"Context")+".Provider";case uf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case df:return t=e.displayName||null,t!==null?t:ju(e.type)||"Memo";case Pn:t=e._payload,e=e._init;try{return ju(e(t))}catch{}}return null}function Db(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(t);case 8:return t===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eb(e){var t=Fv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xa(e){e._valueTracker||(e._valueTracker=Eb(e))}function Bv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cu(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vv(e,t){t=t.checked,t!=null&&lf(e,"checked",t,!1)}function Tu(e,t){Vv(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pu(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pu(e,t,n){(t!=="number"||Es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var no=Array.isArray;function ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Du(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ch(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(no(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function zv(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Th(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,Uv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ab=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(e){Ab.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),uo[t]=uo[e]})});function Hv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||uo.hasOwnProperty(e)&&uo[e]?(""+t).trim():t+"px"}function Yv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lb=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(e,t){if(t){if(Lb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function ff(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Iu=null,oi=null,ai=null;function Ph(e){if(e=na(e)){if(typeof Iu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=xl(t),Iu(e.stateNode,e.type,t))}}function Gv(e){oi?ai?ai.push(e):ai=[e]:oi=e}function Kv(){if(oi){var e=oi,t=ai;if(ai=oi=null,Ph(e),t)for(e=0;e<t.length;e++)Ph(t[e])}}function Qv(e,t){return e(t)}function Xv(){}var uc=!1;function Zv(e,t,n){if(uc)return e(t,n);uc=!0;try{return Qv(e,t,n)}finally{uc=!1,(oi!==null||ai!==null)&&(Xv(),Kv())}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var r=xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Mu=!1;if(dn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Mu=!1}function _b(e,t,n,r,i,o,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var fo=!1,As=null,Ls=!1,Ou=null,Ib={onError:function(e){fo=!0,As=e}};function Mb(e,t,n,r,i,o,a,s,c){fo=!1,As=null,_b.apply(Ib,arguments)}function Ob(e,t,n,r,i,o,a,s,c){if(Mb.apply(this,arguments),fo){if(fo){var u=As;fo=!1,As=null}else throw Error(A(198));Ls||(Ls=!0,Ou=u)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dh(e){if(Er(e)!==e)throw Error(A(188))}function Rb(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dh(i),e;if(o===r)return Dh(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function qv(e){return e=Rb(e),e!==null?ey(e):null}function ey(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ey(e);if(t!==null)return t;e=e.sibling}return null}var ty=gt.unstable_scheduleCallback,Eh=gt.unstable_cancelCallback,Nb=gt.unstable_shouldYield,$b=gt.unstable_requestPaint,ke=gt.unstable_now,Fb=gt.unstable_getCurrentPriorityLevel,pf=gt.unstable_ImmediatePriority,ny=gt.unstable_UserBlockingPriority,_s=gt.unstable_NormalPriority,Bb=gt.unstable_LowPriority,ry=gt.unstable_IdlePriority,ml=null,Zt=null;function Vb(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Ub,zb=Math.log,Wb=Math.LN2;function Ub(e){return e>>>=0,e===0?32:31-(zb(e)/Wb|0)|0}var Sa=64,ba=4194304;function ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Is(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ro(s):(o&=a,o!==0&&(r=ro(o)))}else a=n&~i,a!==0?r=ro(a):o!==0&&(r=ro(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Hb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ft(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=Hb(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iy(){var e=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),e}function dc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function Gb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function hf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function oy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ay,mf,sy,ly,cy,Nu=!1,ka=[],Mn=null,On=null,Rn=null,Eo=new Map,Ao=new Map,En=[],Kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function Vi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=na(t),t!==null&&mf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qb(e,t,n,r,i){switch(t){case"focusin":return Mn=Vi(Mn,e,t,n,r,i),!0;case"dragenter":return On=Vi(On,e,t,n,r,i),!0;case"mouseover":return Rn=Vi(Rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Eo.set(o,Vi(Eo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ao.set(o,Vi(Ao.get(o)||null,e,t,n,r,i)),!0}return!1}function uy(e){var t=cr(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=Jv(n),t!==null){e.blockedOn=t,cy(e.priority,function(){sy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_u=r,n.target.dispatchEvent(r),_u=null}else return t=na(n),t!==null&&mf(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){ls(e)&&n.delete(t)}function Xb(){Nu=!1,Mn!==null&&ls(Mn)&&(Mn=null),On!==null&&ls(On)&&(On=null),Rn!==null&&ls(Rn)&&(Rn=null),Eo.forEach(Lh),Ao.forEach(Lh)}function zi(e,t){e.blockedOn===t&&(e.blockedOn=null,Nu||(Nu=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Xb)))}function Lo(e){function t(i){return zi(i,e)}if(0<ka.length){zi(ka[0],e);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&zi(Mn,e),On!==null&&zi(On,e),Rn!==null&&zi(Rn,e),Eo.forEach(t),Ao.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)uy(n),n.blockedOn===null&&En.shift()}var si=gn.ReactCurrentBatchConfig,Ms=!0;function Zb(e,t,n,r){var i=q,o=si.transition;si.transition=null;try{q=1,gf(e,t,n,r)}finally{q=i,si.transition=o}}function Jb(e,t,n,r){var i=q,o=si.transition;si.transition=null;try{q=4,gf(e,t,n,r)}finally{q=i,si.transition=o}}function gf(e,t,n,r){if(Ms){var i=$u(e,t,n,r);if(i===null)Sc(e,t,r,Os,n),Ah(e,r);else if(Qb(i,e,t,n,r))r.stopPropagation();else if(Ah(e,r),t&4&&-1<Kb.indexOf(e)){for(;i!==null;){var o=na(i);if(o!==null&&ay(o),o=$u(e,t,n,r),o===null&&Sc(e,t,r,Os,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Sc(e,t,r,null,n)}}var Os=null;function $u(e,t,n,r){if(Os=null,e=ff(r),e=cr(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Os=e,null}function dy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fb()){case pf:return 1;case ny:return 4;case _s:case Bb:return 16;case ry:return 536870912;default:return 16}default:return 16}}var Ln=null,vf=null,cs=null;function fy(){if(cs)return cs;var e,t=vf,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return cs=i.slice(e,1<r?1-r:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function _h(){return!1}function xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:_h,this.isPropagationStopped=_h,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=xt(Pi),ta=ye({},Pi,{view:0,detail:0}),qb=xt(ta),fc,pc,Wi,gl=ye({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(fc=e.screenX-Wi.screenX,pc=e.screenY-Wi.screenY):pc=fc=0,Wi=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:pc}}),Ih=xt(gl),e2=ye({},gl,{dataTransfer:0}),t2=xt(e2),n2=ye({},ta,{relatedTarget:0}),hc=xt(n2),r2=ye({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),i2=xt(r2),o2=ye({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a2=xt(o2),s2=ye({},Pi,{data:0}),Mh=xt(s2),l2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u2[e])?!!t[e]:!1}function xf(){return d2}var f2=ye({},ta,{key:function(e){if(e.key){var t=l2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p2=xt(f2),h2=ye({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=xt(h2),m2=ye({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),g2=xt(m2),v2=ye({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),y2=xt(v2),x2=ye({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w2=xt(x2),S2=[9,13,27,32],wf=dn&&"CompositionEvent"in window,po=null;dn&&"documentMode"in document&&(po=document.documentMode);var b2=dn&&"TextEvent"in window&&!po,py=dn&&(!wf||po&&8<po&&11>=po),Rh=" ",Nh=!1;function hy(e,t){switch(e){case"keyup":return S2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function my(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function k2(e,t){switch(e){case"compositionend":return my(t);case"keypress":return t.which!==32?null:(Nh=!0,Rh);case"textInput":return e=t.data,e===Rh&&Nh?null:e;default:return null}}function j2(e,t){if(Fr)return e==="compositionend"||!wf&&hy(e,t)?(e=fy(),cs=vf=Ln=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return py&&t.locale!=="ko"?null:t.data;default:return null}}var C2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C2[e.type]:t==="textarea"}function gy(e,t,n,r){Gv(r),t=Rs(t,"onChange"),0<t.length&&(n=new yf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ho=null,_o=null;function T2(e){Py(e,0)}function vl(e){var t=zr(e);if(Bv(t))return e}function P2(e,t){if(e==="change")return t}var vy=!1;if(dn){var mc;if(dn){var gc="oninput"in document;if(!gc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),gc=typeof Fh.oninput=="function"}mc=gc}else mc=!1;vy=mc&&(!document.documentMode||9<document.documentMode)}function Bh(){ho&&(ho.detachEvent("onpropertychange",yy),_o=ho=null)}function yy(e){if(e.propertyName==="value"&&vl(_o)){var t=[];gy(t,_o,e,ff(e)),Zv(T2,t)}}function D2(e,t,n){e==="focusin"?(Bh(),ho=t,_o=n,ho.attachEvent("onpropertychange",yy)):e==="focusout"&&Bh()}function E2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(_o)}function A2(e,t){if(e==="click")return vl(t)}function L2(e,t){if(e==="input"||e==="change")return vl(t)}function _2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:_2;function Io(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wu.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function Vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zh(e,t){var n=Vh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function xy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wy(){for(var e=window,t=Es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Es(e.document)}return t}function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I2(e){var t=wy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xy(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zh(n,o);var a=zh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M2=dn&&"documentMode"in document&&11>=document.documentMode,Br=null,Fu=null,mo=null,Bu=!1;function Wh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Br==null||Br!==Es(r)||(r=Br,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Io(mo,r)||(mo=r,r=Rs(Fu,"onSelect"),0<r.length&&(t=new yf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},vc={},Sy={};dn&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function yl(e){if(vc[e])return vc[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sy)return vc[e]=t[n];return e}var by=yl("animationend"),ky=yl("animationiteration"),jy=yl("animationstart"),Cy=yl("transitionend"),Ty=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Ty.set(e,t),Dr(t,[e])}for(var yc=0;yc<Uh.length;yc++){var xc=Uh[yc],O2=xc.toLowerCase(),R2=xc[0].toUpperCase()+xc.slice(1);Kn(O2,"on"+R2)}Kn(by,"onAnimationEnd");Kn(ky,"onAnimationIteration");Kn(jy,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Cy,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N2=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Hh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ob(r,t,void 0,e),e.currentTarget=null}function Py(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;Hh(i,s,u),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;Hh(i,s,u),o=c}}}if(Ls)throw e=Ou,Ls=!1,Ou=null,e}function ne(e,t){var n=t[Hu];n===void 0&&(n=t[Hu]=new Set);var r=e+"__bubble";n.has(r)||(Dy(t,e,2,!1),n.add(r))}function wc(e,t,n){var r=0;t&&(r|=4),Dy(n,e,r,t)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[Ta]){e[Ta]=!0,Ov.forEach(function(n){n!=="selectionchange"&&(N2.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ta]||(t[Ta]=!0,wc("selectionchange",!1,t))}}function Dy(e,t,n,r){switch(dy(t)){case 1:var i=Zb;break;case 4:i=Jb;break;default:i=gf}n=i.bind(null,t,n,e),i=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=cr(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Zv(function(){var u=o,d=ff(n),f=[];e:{var p=Ty.get(e);if(p!==void 0){var h=yf,v=e;switch(e){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":h=p2;break;case"focusin":v="focus",h=hc;break;case"focusout":v="blur",h=hc;break;case"beforeblur":case"afterblur":h=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=t2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=g2;break;case by:case ky:case jy:h=i2;break;case Cy:h=y2;break;case"scroll":h=qb;break;case"wheel":h=w2;break;case"copy":case"cut":case"paste":h=a2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Oh}var x=(t&4)!==0,j=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,y;m!==null;){y=m;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,g!==null&&(b=Do(m,g),b!=null&&x.push(Oo(m,b,y)))),j)break;m=m.return}0<x.length&&(p=new h(p,v,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==_u&&(v=n.relatedTarget||n.fromElement)&&(cr(v)||v[fn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?cr(v):null,v!==null&&(j=Er(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(x=Ih,b="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Oh,b="onPointerLeave",g="onPointerEnter",m="pointer"),j=h==null?p:zr(h),y=v==null?p:zr(v),p=new x(b,m+"leave",h,n,d),p.target=j,p.relatedTarget=y,b=null,cr(d)===u&&(x=new x(g,m+"enter",v,n,d),x.target=y,x.relatedTarget=j,b=x),j=b,h&&v)t:{for(x=h,g=v,m=0,y=x;y;y=Ir(y))m++;for(y=0,b=g;b;b=Ir(b))y++;for(;0<m-y;)x=Ir(x),m--;for(;0<y-m;)g=Ir(g),y--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=Ir(x),g=Ir(g)}x=null}else x=null;h!==null&&Yh(f,p,h,x,!1),v!==null&&j!==null&&Yh(f,j,v,x,!0)}}e:{if(p=u?zr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=P2;else if($h(p))if(vy)k=L2;else{k=E2;var T=D2}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=A2);if(k&&(k=k(e,u))){gy(f,k,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Pu(p,"number",p.value)}switch(T=u?zr(u):window,e){case"focusin":($h(T)||T.contentEditable==="true")&&(Br=T,Fu=u,mo=null);break;case"focusout":mo=Fu=Br=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Wh(f,n,d);break;case"selectionchange":if(M2)break;case"keydown":case"keyup":Wh(f,n,d)}var C;if(wf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fr?hy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(py&&n.locale!=="ko"&&(Fr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fr&&(C=fy()):(Ln=d,vf="value"in Ln?Ln.value:Ln.textContent,Fr=!0)),T=Rs(u,P),0<T.length&&(P=new Mh(P,e,null,n,d),f.push({event:P,listeners:T}),C?P.data=C:(C=my(n),C!==null&&(P.data=C)))),(C=b2?k2(e,n):j2(e,n))&&(u=Rs(u,"onBeforeInput"),0<u.length&&(d=new Mh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Py(f,t)})}function Oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Do(e,n),o!=null&&r.unshift(Oo(e,o,i)),o=Do(e,t),o!=null&&r.push(Oo(e,o,i))),e=e.return}return r}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Do(n,o),c!=null&&a.unshift(Oo(n,c,s))):i||(c=Do(n,o),c!=null&&a.push(Oo(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $2=/\r\n?/g,F2=/\u0000|\uFFFD/g;function Gh(e){return(typeof e=="string"?e:""+e).replace($2,`
`).replace(F2,"")}function Pa(e,t,n){if(t=Gh(t),Gh(e)!==t&&n)throw Error(A(425))}function Ns(){}var Vu=null,zu=null;function Wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,B2=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,V2=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(e){return Kh.resolve(null).then(e).catch(z2)}:Uu;function z2(e){setTimeout(function(){throw e})}function bc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Lo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Di,Ro="__reactProps$"+Di,fn="__reactContainer$"+Di,Hu="__reactEvents$"+Di,W2="__reactListeners$"+Di,U2="__reactHandles$"+Di;function cr(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qh(e);e!==null;){if(n=e[Qt])return n;e=Qh(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[Qt]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function xl(e){return e[Ro]||null}var Yu=[],Wr=-1;function Qn(e){return{current:e}}function ie(e){0>Wr||(e.current=Yu[Wr],Yu[Wr]=null,Wr--)}function ee(e,t){Wr++,Yu[Wr]=e.current,e.current=t}var Hn={},Qe=Qn(Hn),st=Qn(!1),kr=Hn;function di(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function $s(){ie(st),ie(Qe)}function Xh(e,t,n){if(Qe.current!==Hn)throw Error(A(168));ee(Qe,t),ee(st,n)}function Ey(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Db(e)||"Unknown",i));return ye({},n,r)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,kr=Qe.current,ee(Qe,e),ee(st,st.current),!0}function Zh(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Ey(e,t,kr),r.__reactInternalMemoizedMergedChildContext=e,ie(st),ie(Qe),ee(Qe,e)):ie(st),ee(st,n)}var on=null,wl=!1,kc=!1;function Ay(e){on===null?on=[e]:on.push(e)}function H2(e){wl=!0,Ay(e)}function Xn(){if(!kc&&on!==null){kc=!0;var e=0,t=q;try{var n=on;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,wl=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),ty(pf,Xn),i}finally{q=t,kc=!1}}return null}var Ur=[],Hr=0,Bs=null,Vs=0,jt=[],Ct=0,jr=null,an=1,sn="";function or(e,t){Ur[Hr++]=Vs,Ur[Hr++]=Bs,Bs=e,Vs=t}function Ly(e,t,n){jt[Ct++]=an,jt[Ct++]=sn,jt[Ct++]=jr,jr=e;var r=an;e=sn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,an=1<<32-Ft(t)+i|n<<i|r,sn=o+e}else an=1<<o|n<<i|r,sn=e}function bf(e){e.return!==null&&(or(e,1),Ly(e,1,0))}function kf(e){for(;e===Bs;)Bs=Ur[--Hr],Ur[Hr]=null,Vs=Ur[--Hr],Ur[Hr]=null;for(;e===jr;)jr=jt[--Ct],jt[Ct]=null,sn=jt[--Ct],jt[Ct]=null,an=jt[--Ct],jt[Ct]=null}var ht=null,pt=null,fe=!1,Nt=null;function _y(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jr!==null?{id:an,overflow:sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function Gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ku(e){if(fe){var t=pt;if(t){var n=t;if(!Jh(e,t)){if(Gu(e))throw Error(A(418));t=Nn(n.nextSibling);var r=ht;t&&Jh(e,t)?_y(r,n):(e.flags=e.flags&-4097|2,fe=!1,ht=e)}}else{if(Gu(e))throw Error(A(418));e.flags=e.flags&-4097|2,fe=!1,ht=e}}}function qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Da(e){if(e!==ht)return!1;if(!fe)return qh(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wu(e.type,e.memoizedProps)),t&&(t=pt)){if(Gu(e))throw Iy(),Error(A(418));for(;t;)_y(e,t),t=Nn(t.nextSibling)}if(qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?Nn(e.stateNode.nextSibling):null;return!0}function Iy(){for(var e=pt;e;)e=Nn(e.nextSibling)}function fi(){pt=ht=null,fe=!1}function jf(e){Nt===null?Nt=[e]:Nt.push(e)}var Y2=gn.ReactCurrentBatchConfig;function Ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function em(e){var t=e._init;return t(e._payload)}function My(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Vn(g,m),g.index=0,g.sibling=null,g}function o(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,y,b){return m===null||m.tag!==6?(m=Ac(y,g.mode,b),m.return=g,m):(m=i(m,y),m.return=g,m)}function c(g,m,y,b){var k=y.type;return k===$r?d(g,m,y.props.children,b,y.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&em(k)===m.type)?(b=i(m,y.props),b.ref=Ui(g,m,y),b.return=g,b):(b=vs(y.type,y.key,y.props,null,g.mode,b),b.ref=Ui(g,m,y),b.return=g,b)}function u(g,m,y,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Lc(y,g.mode,b),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function d(g,m,y,b,k){return m===null||m.tag!==7?(m=vr(y,g.mode,b,k),m.return=g,m):(m=i(m,y),m.return=g,m)}function f(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ac(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:return y=vs(m.type,m.key,m.props,null,g.mode,y),y.ref=Ui(g,null,m),y.return=g,y;case Nr:return m=Lc(m,g.mode,y),m.return=g,m;case Pn:var b=m._init;return f(g,b(m._payload),y)}if(no(m)||Fi(m))return m=vr(m,g.mode,y,null),m.return=g,m;Ea(g,m)}return null}function p(g,m,y,b){var k=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(g,m,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ya:return y.key===k?c(g,m,y,b):null;case Nr:return y.key===k?u(g,m,y,b):null;case Pn:return k=y._init,p(g,m,k(y._payload),b)}if(no(y)||Fi(y))return k!==null?null:d(g,m,y,b,null);Ea(g,y)}return null}function h(g,m,y,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(y)||null,s(m,g,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ya:return g=g.get(b.key===null?y:b.key)||null,c(m,g,b,k);case Nr:return g=g.get(b.key===null?y:b.key)||null,u(m,g,b,k);case Pn:var T=b._init;return h(g,m,y,T(b._payload),k)}if(no(b)||Fi(b))return g=g.get(y)||null,d(m,g,b,k,null);Ea(m,b)}return null}function v(g,m,y,b){for(var k=null,T=null,C=m,P=m=0,L=null;C!==null&&P<y.length;P++){C.index>P?(L=C,C=null):L=C.sibling;var I=p(g,C,y[P],b);if(I===null){C===null&&(C=L);break}e&&C&&I.alternate===null&&t(g,C),m=o(I,m,P),T===null?k=I:T.sibling=I,T=I,C=L}if(P===y.length)return n(g,C),fe&&or(g,P),k;if(C===null){for(;P<y.length;P++)C=f(g,y[P],b),C!==null&&(m=o(C,m,P),T===null?k=C:T.sibling=C,T=C);return fe&&or(g,P),k}for(C=r(g,C);P<y.length;P++)L=h(C,g,P,y[P],b),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),m=o(L,m,P),T===null?k=L:T.sibling=L,T=L);return e&&C.forEach(function(V){return t(g,V)}),fe&&or(g,P),k}function x(g,m,y,b){var k=Fi(y);if(typeof k!="function")throw Error(A(150));if(y=k.call(y),y==null)throw Error(A(151));for(var T=k=null,C=m,P=m=0,L=null,I=y.next();C!==null&&!I.done;P++,I=y.next()){C.index>P?(L=C,C=null):L=C.sibling;var V=p(g,C,I.value,b);if(V===null){C===null&&(C=L);break}e&&C&&V.alternate===null&&t(g,C),m=o(V,m,P),T===null?k=V:T.sibling=V,T=V,C=L}if(I.done)return n(g,C),fe&&or(g,P),k;if(C===null){for(;!I.done;P++,I=y.next())I=f(g,I.value,b),I!==null&&(m=o(I,m,P),T===null?k=I:T.sibling=I,T=I);return fe&&or(g,P),k}for(C=r(g,C);!I.done;P++,I=y.next())I=h(C,g,P,I.value,b),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?P:I.key),m=o(I,m,P),T===null?k=I:T.sibling=I,T=I);return e&&C.forEach(function(N){return t(g,N)}),fe&&or(g,P),k}function j(g,m,y,b){if(typeof y=="object"&&y!==null&&y.type===$r&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ya:e:{for(var k=y.key,T=m;T!==null;){if(T.key===k){if(k=y.type,k===$r){if(T.tag===7){n(g,T.sibling),m=i(T,y.props.children),m.return=g,g=m;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&em(k)===T.type){n(g,T.sibling),m=i(T,y.props),m.ref=Ui(g,T,y),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}y.type===$r?(m=vr(y.props.children,g.mode,b,y.key),m.return=g,g=m):(b=vs(y.type,y.key,y.props,null,g.mode,b),b.ref=Ui(g,m,y),b.return=g,g=b)}return a(g);case Nr:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Lc(y,g.mode,b),m.return=g,g=m}return a(g);case Pn:return T=y._init,j(g,m,T(y._payload),b)}if(no(y))return v(g,m,y,b);if(Fi(y))return x(g,m,y,b);Ea(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Ac(y,g.mode,b),m.return=g,g=m),a(g)):n(g,m)}return j}var pi=My(!0),Oy=My(!1),zs=Qn(null),Ws=null,Yr=null,Cf=null;function Tf(){Cf=Yr=Ws=null}function Pf(e){var t=zs.current;ie(zs),e._currentValue=t}function Qu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function li(e,t){Ws=e,Cf=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Cf!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(Ws===null)throw Error(A(308));Yr=e,Ws.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var ur=null;function Df(e){ur===null?ur=[e]:ur.push(e)}function Ry(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Df(t)):(n.next=i.next,i.next=n),t.interleaved=n,pn(e,r)}function pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Ef(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ny(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pn(e,n)}return i=r.interleaved,i===null?(t.next=t,Df(r)):(t.next=i.next,i.next=t),r.interleaved=t,pn(e,n)}function ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hf(e,n)}}function tm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Us(e,t,n,r){var i=e.updateQueue;Dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,s=o;do{var p=s.lane,h=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(p=t,h=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(h,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(h,f,p):v,p==null)break e;f=ye({},f,p);break e;case 2:Dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,c=f):d=d.next=h,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tr|=a,e.lanes=a,e.memoizedState=f}}function nm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ra={},Jt=Qn(ra),No=Qn(ra),$o=Qn(ra);function dr(e){if(e===ra)throw Error(A(174));return e}function Af(e,t){switch(ee($o,t),ee(No,e),ee(Jt,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Eu(t,e)}ie(Jt),ee(Jt,t)}function hi(){ie(Jt),ie(No),ie($o)}function $y(e){dr($o.current);var t=dr(Jt.current),n=Eu(t,e.type);t!==n&&(ee(No,e),ee(Jt,n))}function Lf(e){No.current===e&&(ie(Jt),ie(No))}var me=Qn(0);function Hs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jc=[];function _f(){for(var e=0;e<jc.length;e++)jc[e]._workInProgressVersionPrimary=null;jc.length=0}var fs=gn.ReactCurrentDispatcher,Cc=gn.ReactCurrentBatchConfig,Cr=0,ve=null,Ae=null,Ie=null,Ys=!1,go=!1,Fo=0,G2=0;function We(){throw Error(A(321))}function If(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Mf(e,t,n,r,i,o){if(Cr=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?Z2:J2,e=n(r,i),go){o=0;do{if(go=!1,Fo=0,25<=o)throw Error(A(301));o+=1,Ie=Ae=null,t.updateQueue=null,fs.current=q2,e=n(r,i)}while(go)}if(fs.current=Gs,t=Ae!==null&&Ae.next!==null,Cr=0,Ie=Ae=ve=null,Ys=!1,t)throw Error(A(300));return e}function Of(){var e=Fo!==0;return Fo=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Et(){if(Ae===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ie===null?ve.memoizedState:Ie.next;if(t!==null)Ie=t,Ae=e;else{if(e===null)throw Error(A(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Bo(e,t){return typeof t=="function"?t(e):t}function Tc(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,u=o;do{var d=u.lane;if((Cr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,a=r):c=c.next=f,ve.lanes|=d,Tr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=s,zt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,Tr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pc(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);zt(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fy(){}function By(e,t){var n=ve,r=Et(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Rf(Wy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Vo(9,zy.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(A(349));Cr&30||Vy(n,t,i)}return i}function Vy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zy(e,t,n,r){t.value=n,t.getSnapshot=r,Uy(t)&&Hy(e)}function Wy(e,t,n){return n(function(){Uy(t)&&Hy(e)})}function Uy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Hy(e){var t=pn(e,1);t!==null&&Bt(t,e,1,-1)}function rm(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=X2.bind(null,ve,e),[t.memoizedState,e]}function Vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yy(){return Et().memoizedState}function ps(e,t,n,r){var i=Gt();ve.flags|=e,i.memoizedState=Vo(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&If(r,a.deps)){i.memoizedState=Vo(t,n,o,r);return}}ve.flags|=e,i.memoizedState=Vo(1|t,n,o,r)}function im(e,t){return ps(8390656,8,e,t)}function Rf(e,t){return Sl(2048,8,e,t)}function Gy(e,t){return Sl(4,2,e,t)}function Ky(e,t){return Sl(4,4,e,t)}function Qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xy(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Qy.bind(null,t,e),n)}function Nf(){}function Zy(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&If(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jy(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&If(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qy(e,t,n){return Cr&21?(zt(n,t)||(n=iy(),ve.lanes|=n,Tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function K2(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Cc.transition;Cc.transition={};try{e(!1),t()}finally{q=n,Cc.transition=r}}function ex(){return Et().memoizedState}function Q2(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tx(e))nx(t,n);else if(n=Ry(e,t,n,r),n!==null){var i=et();Bt(n,e,r,i),rx(n,t,r)}}function X2(e,t,n){var r=Bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tx(e))nx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,zt(s,a)){var c=t.interleaved;c===null?(i.next=i,Df(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Ry(e,t,i,r),n!==null&&(i=et(),Bt(n,e,r,i),rx(n,t,r))}}function tx(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function nx(e,t){go=Ys=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hf(e,n)}}var Gs={readContext:Dt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Z2={readContext:Dt,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:im,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ps(4194308,4,Qy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return ps(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Q2.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:rm,useDebugValue:Nf,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=rm(!1),t=e[0];return e=K2.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Gt();if(fe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Oe===null)throw Error(A(349));Cr&30||Vy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,im(Wy.bind(null,r,o,e),[e]),r.flags|=2048,Vo(9,zy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Oe.identifierPrefix;if(fe){var n=sn,r=an;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=G2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J2={readContext:Dt,useCallback:Zy,useContext:Dt,useEffect:Rf,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Ky,useMemo:Jy,useReducer:Tc,useRef:Yy,useState:function(){return Tc(Bo)},useDebugValue:Nf,useDeferredValue:function(e){var t=Et();return qy(t,Ae.memoizedState,e)},useTransition:function(){var e=Tc(Bo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Fy,useSyncExternalStore:By,useId:ex,unstable_isNewReconciler:!1},q2={readContext:Dt,useCallback:Zy,useContext:Dt,useEffect:Rf,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Ky,useMemo:Jy,useReducer:Pc,useRef:Yy,useState:function(){return Pc(Bo)},useDebugValue:Nf,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:qy(t,Ae.memoizedState,e)},useTransition:function(){var e=Pc(Bo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Fy,useSyncExternalStore:By,useId:ex,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=Bn(e),o=ln(r,i);o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(Bt(t,e,i,r),ds(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=Bn(e),o=ln(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(Bt(t,e,i,r),ds(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=Bn(e),i=ln(n,r);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,r),t!==null&&(Bt(t,e,r,n),ds(t,e,r))}};function om(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Io(n,r)||!Io(i,o):!0}function ix(e,t,n){var r=!1,i=Hn,o=t.contextType;return typeof o=="object"&&o!==null?o=Dt(o):(i=lt(t)?kr:Qe.current,r=t.contextTypes,o=(r=r!=null)?di(e,i):Hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function am(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bl.enqueueReplaceState(t,t.state,null)}function Zu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ef(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Dt(o):(o=lt(t)?kr:Qe.current,i.context=di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bl.enqueueReplaceState(i,i.state,null),Us(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t){try{var n="",r=t;do n+=Pb(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ek=typeof WeakMap=="function"?WeakMap:Map;function ox(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qs||(Qs=!0,ld=r),Ju(e,t)},n}function ax(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ju(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ju(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ek;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hk.bind(null,e,t,n),t.then(e,e))}function lm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var tk=gn.ReactCurrentOwner,at=!1;function qe(e,t,n,r){t.child=e===null?Oy(t,null,n,r):pi(t,e.child,n,r)}function um(e,t,n,r,i){n=n.render;var o=t.ref;return li(t,i),r=Mf(e,t,n,r,o,i),n=Of(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(fe&&n&&bf(t),t.flags|=1,qe(e,t,r,i),t.child)}function dm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Hf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sx(e,t,o,r,i)):(e=vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(a,r)&&e.ref===t.ref)return hn(e,t,i)}return t.flags|=1,e=Vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function sx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Io(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,hn(e,t,i)}return qu(e,t,n,r,i)}function lx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Kr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Kr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Kr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Kr,ft),ft|=r;return qe(e,t,i,n),t.child}function cx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qu(e,t,n,r,i){var o=lt(n)?kr:Qe.current;return o=di(t,o),li(t,i),n=Mf(e,t,n,r,o,i),r=Of(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(fe&&r&&bf(t),t.flags|=1,qe(e,t,n,i),t.child)}function fm(e,t,n,r,i){if(lt(n)){var o=!0;Fs(t)}else o=!1;if(li(t,i),t.stateNode===null)hs(e,t),ix(t,n,r),Zu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=lt(n)?kr:Qe.current,u=di(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&am(t,a,r,u),Dn=!1;var p=t.memoizedState;a.state=p,Us(t,r,a,i),c=t.memoizedState,s!==r||p!==c||st.current||Dn?(typeof d=="function"&&(Xu(t,n,d,r),c=t.memoizedState),(s=Dn||om(t,n,s,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ny(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ot(t.type,s),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Dt(c):(c=lt(n)?kr:Qe.current,c=di(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==c)&&am(t,a,r,c),Dn=!1,p=t.memoizedState,a.state=p,Us(t,r,a,i);var v=t.memoizedState;s!==f||p!==v||st.current||Dn?(typeof h=="function"&&(Xu(t,n,h,r),v=t.memoizedState),(u=Dn||om(t,n,u,r,p,v,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ed(e,t,n,r,o,i)}function ed(e,t,n,r,i,o){cx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Zh(t,n,!1),hn(e,t,o);r=t.stateNode,tk.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=pi(t,e.child,null,o),t.child=pi(t,null,s,o)):qe(e,t,s,o),t.memoizedState=r.state,i&&Zh(t,n,!0),t.child}function ux(e){var t=e.stateNode;t.pendingContext?Xh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xh(e,t.context,!1),Af(e,t.containerInfo)}function pm(e,t,n,r,i){return fi(),jf(i),t.flags|=256,qe(e,t,n,r),t.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(e){return{baseLanes:e,cachePool:null,transitions:null}}function dx(e,t,n){var r=t.pendingProps,i=me.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(me,i&1),e===null)return Ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Cl(a,r,0,null),e=vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=nd(n),t.memoizedState=td,e):$f(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nk(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Vn(s,o):(o=vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?nd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=td,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $f(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Aa(e,t,n,r){return r!==null&&jf(r),pi(t,e.child,null,n),e=$f(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Dc(Error(A(422))),Aa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cl({mode:"visible",children:r.children},i,0,null),o=vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pi(t,e.child,null,a),t.child.memoizedState=nd(a),t.memoizedState=td,o);if(!(t.mode&1))return Aa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=Dc(o,r,void 0),Aa(e,t,a,r)}if(s=(a&e.childLanes)!==0,at||s){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pn(e,i),Bt(r,e,i,-1))}return Uf(),r=Dc(Error(A(421))),Aa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Nn(i.nextSibling),ht=t,fe=!0,Nt=null,e!==null&&(jt[Ct++]=an,jt[Ct++]=sn,jt[Ct++]=jr,an=e.id,sn=e.overflow,jr=t),t=$f(t,r.children),t.flags|=4096,t)}function hm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qu(e.return,t,n)}function Ec(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function fx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(qe(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,o);break;case"together":Ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rk(e,t,n){switch(t.tag){case 3:ux(t),fi();break;case 5:$y(t);break;case 1:lt(t.type)&&Fs(t);break;case 4:Af(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?dx(e,t,n):(ee(me,me.current&1),e=hn(e,t,n),e!==null?e.sibling:null);ee(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,lx(e,t,n)}return hn(e,t,n)}var px,rd,hx,mx;px=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};hx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dr(Jt.current);var o=null;switch(n){case"input":i=Cu(e,i),r=Cu(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=Du(e,i),r=Du(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ns)}Au(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};mx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hi(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ik(e,t,n){var r=t.pendingProps;switch(kf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return lt(t.type)&&$s(),Ue(t),null;case 3:return r=t.stateNode,hi(),ie(st),ie(Qe),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(dd(Nt),Nt=null))),rd(e,t),Ue(t),null;case 5:Lf(t);var i=dr($o.current);if(n=t.type,e!==null&&t.stateNode!=null)hx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ue(t),null}if(e=dr(Jt.current),Da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qt]=t,r[Ro]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)ne(io[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":kh(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":Ch(r,o),ne("invalid",r)}Au(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Pa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Pa(r.textContent,s,e),i=["children",""+s]):To.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":xa(r),jh(r,o,!0);break;case"textarea":xa(r),Th(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ns)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qt]=t,e[Ro]=r,px(e,t,!1,!1),t.stateNode=e;e:{switch(a=Lu(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)ne(io[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":kh(e,r),i=Cu(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Ch(e,r),i=Du(e,r),ne("invalid",e);break;default:i=r}Au(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Yv(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Uv(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Po(e,c):typeof c=="number"&&Po(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(To.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ne("scroll",e):c!=null&&lf(e,o,c,a))}switch(n){case"input":xa(e),jh(e,r,!1);break;case"textarea":xa(e),Th(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ii(e,!!r.multiple,o,!1):r.defaultValue!=null&&ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)mx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=dr($o.current),dr(Jt.current),Da(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Pa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ie(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&pt!==null&&t.mode&1&&!(t.flags&128))Iy(),fi(),t.flags|=98560,o=!1;else if(o=Da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Qt]=t}else fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else Nt!==null&&(dd(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?_e===0&&(_e=3):Uf())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return hi(),rd(e,t),e===null&&Mo(t.stateNode.containerInfo),Ue(t),null;case 10:return Pf(t.type._context),Ue(t),null;case 17:return lt(t.type)&&$s(),Ue(t),null;case 19:if(ie(me),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Hi(o,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Hs(e),a!==null){for(t.flags|=128,Hi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&ke()>gi&&(t.flags|=128,r=!0,Hi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Hs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!fe)return Ue(t),null}else 2*ke()-o.renderingStartTime>gi&&n!==1073741824&&(t.flags|=128,r=!0,Hi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ke(),t.sibling=null,n=me.current,ee(me,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Wf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function ok(e,t){switch(kf(t),t.tag){case 1:return lt(t.type)&&$s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hi(),ie(st),ie(Qe),_f(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lf(t),null;case 13:if(ie(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(me),null;case 4:return hi(),null;case 10:return Pf(t.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var La=!1,Ye=!1,ak=typeof WeakSet=="function"?WeakSet:Set,R=null;function Gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function id(e,t,n){try{n()}catch(r){Se(e,t,r)}}var mm=!1;function sk(e,t){if(Vu=Ms,e=wy(),Sf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=a),p===o&&++d===r&&(c=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:e,selectionRange:n},Ms=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ot(t.type,x),j);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(b){Se(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=mm,mm=!1,v}function vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&id(t,n,o)}i=i.next}while(i!==r)}}function kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function od(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gx(e){var t=e.alternate;t!==null&&(e.alternate=null,gx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[Ro],delete t[Hu],delete t[W2],delete t[U2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vx(e){return e.tag===5||e.tag===3||e.tag===4}function gm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ns));else if(r!==4&&(e=e.child,e!==null))for(ad(e,t,n),e=e.sibling;e!==null;)ad(e,t,n),e=e.sibling}function sd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sd(e,t,n),e=e.sibling;e!==null;)sd(e,t,n),e=e.sibling}var $e=null,Rt=!1;function yn(e,t,n){for(n=n.child;n!==null;)yx(e,t,n),n=n.sibling}function yx(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Ye||Gr(n,t);case 6:var r=$e,i=Rt;$e=null,yn(e,t,n),$e=r,Rt=i,$e!==null&&(Rt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Rt?(e=$e,n=n.stateNode,e.nodeType===8?bc(e.parentNode,n):e.nodeType===1&&bc(e,n),Lo(e)):bc($e,n.stateNode));break;case 4:r=$e,i=Rt,$e=n.stateNode.containerInfo,Rt=!0,yn(e,t,n),$e=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&id(n,t,a),i=i.next}while(i!==r)}yn(e,t,n);break;case 1:if(!Ye&&(Gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Se(n,t,s)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,yn(e,t,n),Ye=r):yn(e,t,n);break;default:yn(e,t,n)}}function vm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ak),t.forEach(function(r){var i=gk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:$e=s.stateNode,Rt=!1;break e;case 3:$e=s.stateNode.containerInfo,Rt=!0;break e;case 4:$e=s.stateNode.containerInfo,Rt=!0;break e}s=s.return}if($e===null)throw Error(A(160));yx(o,a,i),$e=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xx(t,e),t=t.sibling}function xx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ht(e),r&4){try{vo(3,e,e.return),kl(3,e)}catch(x){Se(e,e.return,x)}try{vo(5,e,e.return)}catch(x){Se(e,e.return,x)}}break;case 1:It(t,e),Ht(e),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(It(t,e),Ht(e),r&512&&n!==null&&Gr(n,n.return),e.flags&32){var i=e.stateNode;try{Po(i,"")}catch(x){Se(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Vv(i,o),Lu(s,a);var u=Lu(s,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Yv(i,f):d==="dangerouslySetInnerHTML"?Uv(i,f):d==="children"?Po(i,f):lf(i,d,f,u)}switch(s){case"input":Tu(i,o);break;case"textarea":zv(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?ii(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?ii(i,!!o.multiple,o.defaultValue,!0):ii(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ro]=o}catch(x){Se(e,e.return,x)}}break;case 6:if(It(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Se(e,e.return,x)}}break;case 3:if(It(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(x){Se(e,e.return,x)}break;case 4:It(t,e),Ht(e);break;case 13:It(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Vf=ke())),r&4&&vm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,It(t,e),Ye=u):It(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(p=R,h=p.child,p.tag){case 0:case 11:case 14:case 15:vo(4,p,p.return);break;case 1:Gr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Se(r,n,x)}}break;case 5:Gr(p,p.return);break;case 22:if(p.memoizedState!==null){xm(f);continue}}h!==null?(h.return=p,R=h):xm(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Hv("display",a))}catch(x){Se(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Se(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Ht(e),r&4&&vm(e);break;case 21:break;default:It(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vx(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var o=gm(e);sd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=gm(e);ad(e,s,a);break;default:throw Error(A(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lk(e,t,n){R=e,wx(e)}function wx(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||La;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||Ye;s=La;var u=Ye;if(La=a,(Ye=c)&&!u)for(R=i;R!==null;)a=R,c=a.child,a.tag===22&&a.memoizedState!==null?wm(i):c!==null?(c.return=a,R=c):wm(i);for(;o!==null;)R=o,wx(o),o=o.sibling;R=i,La=s,Ye=u}ym(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):ym(e)}}function ym(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&nm(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nm(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ye||t.flags&512&&od(t)}catch(p){Se(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function xm(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function wm(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kl(4,t)}catch(c){Se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Se(t,i,c)}}var o=t.return;try{od(t)}catch(c){Se(t,o,c)}break;case 5:var a=t.return;try{od(t)}catch(c){Se(t,a,c)}}}catch(c){Se(t,t.return,c)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var ck=Math.ceil,Ks=gn.ReactCurrentDispatcher,Ff=gn.ReactCurrentOwner,Pt=gn.ReactCurrentBatchConfig,Z=0,Oe=null,Pe=null,Ve=0,ft=0,Kr=Qn(0),_e=0,zo=null,Tr=0,jl=0,Bf=0,yo=null,ot=null,Vf=0,gi=1/0,nn=null,Qs=!1,ld=null,Fn=null,_a=!1,_n=null,Xs=0,xo=0,cd=null,ms=-1,gs=0;function et(){return Z&6?ke():ms!==-1?ms:ms=ke()}function Bn(e){return e.mode&1?Z&2&&Ve!==0?Ve&-Ve:Y2.transition!==null?(gs===0&&(gs=iy()),gs):(e=q,e!==0||(e=window.event,e=e===void 0?16:dy(e.type)),e):1}function Bt(e,t,n,r){if(50<xo)throw xo=0,cd=null,Error(A(185));ea(e,n,r),(!(Z&2)||e!==Oe)&&(e===Oe&&(!(Z&2)&&(jl|=n),_e===4&&An(e,Ve)),ct(e,r),n===1&&Z===0&&!(t.mode&1)&&(gi=ke()+500,wl&&Xn()))}function ct(e,t){var n=e.callbackNode;Yb(e,t);var r=Is(e,e===Oe?Ve:0);if(r===0)n!==null&&Eh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eh(n),t===1)e.tag===0?H2(Sm.bind(null,e)):Ay(Sm.bind(null,e)),V2(function(){!(Z&6)&&Xn()}),n=null;else{switch(oy(r)){case 1:n=pf;break;case 4:n=ny;break;case 16:n=_s;break;case 536870912:n=ry;break;default:n=_s}n=Dx(n,Sx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sx(e,t){if(ms=-1,gs=0,Z&6)throw Error(A(327));var n=e.callbackNode;if(ci()&&e.callbackNode!==n)return null;var r=Is(e,e===Oe?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zs(e,r);else{t=r;var i=Z;Z|=2;var o=kx();(Oe!==e||Ve!==t)&&(nn=null,gi=ke()+500,gr(e,t));do try{fk();break}catch(s){bx(e,s)}while(!0);Tf(),Ks.current=o,Z=i,Pe!==null?t=0:(Oe=null,Ve=0,t=_e)}if(t!==0){if(t===2&&(i=Ru(e),i!==0&&(r=i,t=ud(e,i))),t===1)throw n=zo,gr(e,0),An(e,r),ct(e,ke()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!uk(i)&&(t=Zs(e,r),t===2&&(o=Ru(e),o!==0&&(r=o,t=ud(e,o))),t===1))throw n=zo,gr(e,0),An(e,r),ct(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:ar(e,ot,nn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Vf+500-ke(),10<t)){if(Is(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Uu(ar.bind(null,e,ot,nn),t);break}ar(e,ot,nn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ck(r/1960))-r,10<r){e.timeoutHandle=Uu(ar.bind(null,e,ot,nn),r);break}ar(e,ot,nn);break;case 5:ar(e,ot,nn);break;default:throw Error(A(329))}}}return ct(e,ke()),e.callbackNode===n?Sx.bind(null,e):null}function ud(e,t){var n=yo;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=Zs(e,t),e!==2&&(t=ot,ot=n,t!==null&&dd(t)),e}function dd(e){ot===null?ot=e:ot.push.apply(ot,e)}function uk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Bf,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Sm(e){if(Z&6)throw Error(A(327));ci();var t=Is(e,0);if(!(t&1))return ct(e,ke()),null;var n=Zs(e,t);if(e.tag!==0&&n===2){var r=Ru(e);r!==0&&(t=r,n=ud(e,r))}if(n===1)throw n=zo,gr(e,0),An(e,t),ct(e,ke()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,ot,nn),ct(e,ke()),null}function zf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(gi=ke()+500,wl&&Xn())}}function Pr(e){_n!==null&&_n.tag===0&&!(Z&6)&&ci();var t=Z;Z|=1;var n=Pt.transition,r=q;try{if(Pt.transition=null,q=1,e)return e()}finally{q=r,Pt.transition=n,Z=t,!(Z&6)&&Xn()}}function Wf(){ft=Kr.current,ie(Kr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B2(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$s();break;case 3:hi(),ie(st),ie(Qe),_f();break;case 5:Lf(r);break;case 4:hi();break;case 13:ie(me);break;case 19:ie(me);break;case 10:Pf(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(Oe=e,Pe=e=Vn(e.current,null),Ve=ft=t,_e=0,zo=null,Bf=jl=Tr=0,ot=yo=null,ur!==null){for(t=0;t<ur.length;t++)if(n=ur[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ur=null}return e}function bx(e,t){do{var n=Pe;try{if(Tf(),fs.current=Gs,Ys){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ys=!1}if(Cr=0,Ie=Ae=ve=null,go=!1,Fo=0,Ff.current=null,n===null||n.return===null){_e=1,zo=t,Pe=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=Ve,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=lm(a);if(h!==null){h.flags&=-257,cm(h,a,s,o,t),h.mode&1&&sm(o,u,t),t=h,c=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(c),t.updateQueue=x}else v.add(c);break e}else{if(!(t&1)){sm(o,u,t),Uf();break e}c=Error(A(426))}}else if(fe&&s.mode&1){var j=lm(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),cm(j,a,s,o,t),jf(mi(c,s));break e}}o=c=mi(c,s),_e!==4&&(_e=2),yo===null?yo=[o]:yo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=ox(o,c,t);tm(o,g);break e;case 1:s=c;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Fn===null||!Fn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=ax(o,s,t);tm(o,b);break e}}o=o.return}while(o!==null)}Cx(n)}catch(k){t=k,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function kx(){var e=Ks.current;return Ks.current=Gs,e===null?Gs:e}function Uf(){(_e===0||_e===3||_e===2)&&(_e=4),Oe===null||!(Tr&268435455)&&!(jl&268435455)||An(Oe,Ve)}function Zs(e,t){var n=Z;Z|=2;var r=kx();(Oe!==e||Ve!==t)&&(nn=null,gr(e,t));do try{dk();break}catch(i){bx(e,i)}while(!0);if(Tf(),Z=n,Ks.current=r,Pe!==null)throw Error(A(261));return Oe=null,Ve=0,_e}function dk(){for(;Pe!==null;)jx(Pe)}function fk(){for(;Pe!==null&&!Nb();)jx(Pe)}function jx(e){var t=Px(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Cx(e):Pe=t,Ff.current=null}function Cx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ok(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Pe=null;return}}else if(n=ik(n,t,ft),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);_e===0&&(_e=5)}function ar(e,t,n){var r=q,i=Pt.transition;try{Pt.transition=null,q=1,pk(e,t,n,r)}finally{Pt.transition=i,q=r}return null}function pk(e,t,n,r){do ci();while(_n!==null);if(Z&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Gb(e,o),e===Oe&&(Pe=Oe=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,Dx(_s,function(){return ci(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var a=q;q=1;var s=Z;Z|=4,Ff.current=null,sk(e,n),xx(n,e),I2(zu),Ms=!!Vu,zu=Vu=null,e.current=n,lk(n),$b(),Z=s,q=a,Pt.transition=o}else e.current=n;if(_a&&(_a=!1,_n=e,Xs=i),o=e.pendingLanes,o===0&&(Fn=null),Vb(n.stateNode),ct(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qs)throw Qs=!1,e=ld,ld=null,e;return Xs&1&&e.tag!==0&&ci(),o=e.pendingLanes,o&1?e===cd?xo++:(xo=0,cd=e):xo=0,Xn(),null}function ci(){if(_n!==null){var e=oy(Xs),t=Pt.transition,n=q;try{if(Pt.transition=null,q=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Xs=0,Z&6)throw Error(A(331));var i=Z;for(Z|=4,R=e.current;R!==null;){var o=R,a=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:vo(8,d,o)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var p=d.sibling,h=d.return;if(gx(d),d===u){R=null;break}if(p!==null){p.return=h,R=p;break}R=h}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}R=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,R=a;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,R=g;break e}R=o.return}}var m=e.current;for(R=m;R!==null;){a=R;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,R=y;else e:for(a=m;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:kl(9,s)}}catch(k){Se(s,s.return,k)}if(s===a){R=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,R=b;break e}R=s.return}}if(Z=i,Xn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{q=n,Pt.transition=t}}return!1}function bm(e,t,n){t=mi(n,t),t=ox(e,t,1),e=$n(e,t,1),t=et(),e!==null&&(ea(e,1,t),ct(e,t))}function Se(e,t,n){if(e.tag===3)bm(e,e,n);else for(;t!==null;){if(t.tag===3){bm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=mi(n,e),e=ax(t,e,1),t=$n(t,e,1),e=et(),t!==null&&(ea(t,1,e),ct(t,e));break}}t=t.return}}function hk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ve&n)===n&&(_e===4||_e===3&&(Ve&130023424)===Ve&&500>ke()-Vf?gr(e,0):Bf|=n),ct(e,t)}function Tx(e,t){t===0&&(e.mode&1?(t=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):t=1);var n=et();e=pn(e,t),e!==null&&(ea(e,t,n),ct(e,n))}function mk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tx(e,n)}function gk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Tx(e,n)}var Px;Px=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,rk(e,t,n);at=!!(e.flags&131072)}else at=!1,fe&&t.flags&1048576&&Ly(t,Vs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hs(e,t),e=t.pendingProps;var i=di(t,Qe.current);li(t,n),i=Mf(null,t,r,e,i,n);var o=Of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,Fs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ef(t),i.updater=bl,t.stateNode=i,i._reactInternals=t,Zu(t,r,e,n),t=ed(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&bf(t),qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yk(r),e=Ot(r,e),i){case 0:t=qu(null,t,r,e,n);break e;case 1:t=fm(null,t,r,e,n);break e;case 11:t=um(null,t,r,e,n);break e;case 14:t=dm(null,t,r,Ot(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),fm(e,t,r,i,n);case 3:e:{if(ux(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ny(e,t),Us(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mi(Error(A(423)),t),t=pm(e,t,r,n,i);break e}else if(r!==i){i=mi(Error(A(424)),t),t=pm(e,t,r,n,i);break e}else for(pt=Nn(t.stateNode.containerInfo.firstChild),ht=t,fe=!0,Nt=null,n=Oy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fi(),r===i){t=hn(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return $y(t),e===null&&Ku(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wu(r,i)?a=null:o!==null&&Wu(r,o)&&(t.flags|=32),cx(e,t),qe(e,t,a,n),t.child;case 6:return e===null&&Ku(t),null;case 13:return dx(e,t,n);case 4:return Af(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pi(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),um(e,t,r,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ee(zs,r._currentValue),r._currentValue=a,o!==null)if(zt(o.value,a)){if(o.children===i.children&&!st.current){t=hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=ln(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qu(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Qu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,li(t,n),i=Dt(i),r=r(i),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),dm(e,t,r,i,n);case 15:return sx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),hs(e,t),t.tag=1,lt(r)?(e=!0,Fs(t)):e=!1,li(t,n),ix(t,r,i),Zu(t,r,i,n),ed(null,t,r,!0,e,n);case 19:return fx(e,t,n);case 22:return lx(e,t,n)}throw Error(A(156,t.tag))};function Dx(e,t){return ty(e,t)}function vk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new vk(e,t,n,r)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yk(e){if(typeof e=="function")return Hf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uf)return 11;if(e===df)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Hf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $r:return vr(n.children,i,o,t);case cf:a=8,i|=8;break;case Su:return e=Tt(12,n,t,i|2),e.elementType=Su,e.lanes=o,e;case bu:return e=Tt(13,n,t,i),e.elementType=bu,e.lanes=o,e;case ku:return e=Tt(19,n,t,i),e.elementType=ku,e.lanes=o,e;case $v:return Cl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rv:a=10;break e;case Nv:a=9;break e;case uf:a=11;break e;case df:a=14;break e;case Pn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function vr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=$v,e.lanes=n,e.stateNode={isHidden:!1},e}function Ac(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Lc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yf(e,t,n,r,i,o,a,s,c){return e=new xk(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(o),e}function wk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ex(e){if(!e)return Hn;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(lt(n))return Ey(e,n,t)}return t}function Ax(e,t,n,r,i,o,a,s,c){return e=Yf(n,r,!0,e,i,o,a,s,c),e.context=Ex(null),n=e.current,r=et(),i=Bn(n),o=ln(r,i),o.callback=t??null,$n(n,o,i),e.current.lanes=i,ea(e,i,r),ct(e,r),e}function Tl(e,t,n,r){var i=t.current,o=et(),a=Bn(i);return n=Ex(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(i,t,a),e!==null&&(Bt(e,i,a,o),ds(e,i,a)),a}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function km(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gf(e,t){km(e,t),(e=e.alternate)&&km(e,t)}function Sk(){return null}var Lx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kf(e){this._internalRoot=e}Pl.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Tl(e,t,null,null)};Pl.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){Tl(null,e,null,null)}),t[fn]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ly();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&uy(e)}};function Qf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jm(){}function bk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Js(a);o.call(u)}}var a=Ax(t,r,e,0,null,!1,!1,"",jm);return e._reactRootContainer=a,e[fn]=a.current,Mo(e.nodeType===8?e.parentNode:e),Pr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Js(c);s.call(u)}}var c=Yf(e,0,!1,null,null,!1,!1,"",jm);return e._reactRootContainer=c,e[fn]=c.current,Mo(e.nodeType===8?e.parentNode:e),Pr(function(){Tl(t,c,n,r)}),c}function El(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=Js(a);s.call(c)}}Tl(t,a,e,i)}else a=bk(n,t,e,i,r);return Js(a)}ay=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ro(t.pendingLanes);n!==0&&(hf(t,n|1),ct(t,ke()),!(Z&6)&&(gi=ke()+500,Xn()))}break;case 13:Pr(function(){var r=pn(e,1);if(r!==null){var i=et();Bt(r,e,1,i)}}),Gf(e,1)}};mf=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var n=et();Bt(t,e,134217728,n)}Gf(e,134217728)}};sy=function(e){if(e.tag===13){var t=Bn(e),n=pn(e,t);if(n!==null){var r=et();Bt(n,e,t,r)}Gf(e,t)}};ly=function(){return q};cy=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Iu=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xl(r);if(!i)throw Error(A(90));Bv(r),Tu(r,i)}}}break;case"textarea":zv(e,n);break;case"select":t=n.value,t!=null&&ii(e,!!n.multiple,t,!1)}};Qv=zf;Xv=Pr;var kk={usingClientEntryPoint:!1,Events:[na,zr,xl,Gv,Kv,zf]},Yi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jk={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qv(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||Sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{ml=Ia.inject(jk),Zt=Ia}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kk;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(t))throw Error(A(200));return wk(e,t,null,n)};yt.createRoot=function(e,t){if(!Qf(e))throw Error(A(299));var n=!1,r="",i=Lx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yf(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,Mo(e.nodeType===8?e.parentNode:e),new Kf(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=qv(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return Pr(e)};yt.hydrate=function(e,t,n){if(!Dl(t))throw Error(A(200));return El(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!Qf(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Lx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ax(t,null,e,1,n??null,i,!1,o,a),e[fn]=t.current,Mo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pl(t)};yt.render=function(e,t,n){if(!Dl(t))throw Error(A(200));return El(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(A(40));return e._reactRootContainer?(Pr(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};yt.unstable_batchedUpdates=zf;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dl(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return El(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function _x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_x)}catch(e){console.error(e)}}_x(),_v.exports=yt;var Ix=_v.exports,Mx,Cm=Ix;Mx=Cm.createRoot,Cm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const Tm="popstate";function Ck(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return fd("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qs(i)}return Pk(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tk(){return Math.random().toString(36).substr(2,8)}function Pm(e,t){return{usr:e.state,key:e.key,idx:t}}function fd(e,t,n,r){return n===void 0&&(n=null),Wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ei(t):t,{state:n,key:t&&t.key||r||Tk()})}function qs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ei(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=In.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Wo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=In.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:s,location:x.location,delta:g})}function p(j,g){s=In.Push;let m=fd(x.location,j,g);u=d()+1;let y=Pm(m,u),b=x.createHref(m);try{a.pushState(y,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(b)}o&&c&&c({action:s,location:x.location,delta:1})}function h(j,g){s=In.Replace;let m=fd(x.location,j,g);u=d();let y=Pm(m,u),b=x.createHref(m);a.replaceState(y,"",b),o&&c&&c({action:s,location:x.location,delta:0})}function v(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof j=="string"?j:qs(j);return m=m.replace(/ $/,"%20"),je(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return s},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Tm,f),c=j,()=>{i.removeEventListener(Tm,f),c=null}},createHref(j){return t(i,j)},createURL:v,encodeLocation(j){let g=v(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(j){return a.go(j)}};return x}var Dm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dm||(Dm={}));function Dk(e,t,n){return n===void 0&&(n="/"),Ek(e,t,n)}function Ek(e,t,n,r){let i=typeof t=="string"?Ei(t):t,o=Zf(i.pathname||"/",n);if(o==null)return null;let a=Ox(e);Ak(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=zk(o);s=Fk(a[c],u)}return s}function Ox(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=zn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ox(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Nk(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let c of Rx(o.path))i(o,a,c)}),t}function Rx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Rx(r.join("/")),s=[];return s.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ak(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$k(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lk=/^:[\w-]+$/,_k=3,Ik=2,Mk=1,Ok=10,Rk=-2,Em=e=>e==="*";function Nk(e,t){let n=e.split("/"),r=n.length;return n.some(Em)&&(r+=Rk),t&&(r+=Ik),n.filter(i=>!Em(i)).reduce((i,o)=>i+(Lk.test(o)?_k:o===""?Mk:Ok),r)}function $k(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fk(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Bk({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:zn([o,f.pathname]),pathnameBase:Gk(zn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=zn([o,f.pathnameBase]))}return a}function Bk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let x=s[f]||"";a=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[f];return h&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Vk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Wk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uk=e=>Wk.test(e);function Hk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ei(e):e,o;if(n)if(Uk(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Xf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Am(n.substring(1),"/"):o=Am(n,t)}else o=t;return{pathname:o,search:Kk(r),hash:Qk(i)}}function Am(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _c(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jf(e,t){let n=Yk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ei(e):(i=Wo({},e),je(!i.pathname||!i.pathname.includes("?"),_c("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),_c("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),_c("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let c=Hk(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),Gk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nx=["post","put","patch","delete"];new Set(Nx);const Zk=["get",...Nx];new Set(Zk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}const ep=S.createContext(null),Jk=S.createContext(null),Zn=S.createContext(null),Al=S.createContext(null),Jn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),$x=S.createContext(null);function qk(e,t){let{relative:n}=t===void 0?{}:t;Ai()||je(!1);let{basename:r,navigator:i}=S.useContext(Zn),{hash:o,pathname:a,search:s}=Bx(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:zn([r,a])),i.createHref({pathname:c,search:s,hash:o})}function Ai(){return S.useContext(Al)!=null}function Li(){return Ai()||je(!1),S.useContext(Al).location}function Fx(e){S.useContext(Zn).static||S.useLayoutEffect(e)}function tp(){let{isDataRoute:e}=S.useContext(Jn);return e?fj():ej()}function ej(){Ai()||je(!1);let e=S.useContext(ep),{basename:t,future:n,navigator:r}=S.useContext(Zn),{matches:i}=S.useContext(Jn),{pathname:o}=Li(),a=JSON.stringify(Jf(i,n.v7_relativeSplatPath)),s=S.useRef(!1);return Fx(()=>{s.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=qf(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:zn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,o,e])}function Bx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Zn),{matches:i}=S.useContext(Jn),{pathname:o}=Li(),a=JSON.stringify(Jf(i,r.v7_relativeSplatPath));return S.useMemo(()=>qf(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function tj(e,t){return nj(e,t)}function nj(e,t,n,r){Ai()||je(!1);let{navigator:i}=S.useContext(Zn),{matches:o}=S.useContext(Jn),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Li(),d;if(t){var f;let j=typeof t=="string"?Ei(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||je(!1),d=j}else d=u;let p=d.pathname||"/",h=p;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=Dk(e,{pathname:h}),x=sj(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:zn([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:zn([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&x?S.createElement(Al.Provider,{value:{location:Uo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:In.Pop}},x):x}function rj(){let e=dj(),t=Xk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const ij=S.createElement(rj,null);class oj extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Jn.Provider,{value:this.props.routeContext},S.createElement($x.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aj(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Jn.Provider,{value:t},r)}function sj(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||je(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,v=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||v){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let h,v=!1,x=null,j=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||ij,c&&(u<0&&p===0?(pj("route-fallback"),v=!0,j=null):u===p&&(v=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),m=()=>{let y;return h?y=x:v?y=j:f.route.Component?y=S.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,S.createElement(aj,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?S.createElement(oj,{location:n.location,revalidation:n.revalidation,component:x,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Vx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vx||{}),zx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zx||{});function lj(e){let t=S.useContext(ep);return t||je(!1),t}function cj(e){let t=S.useContext(Jk);return t||je(!1),t}function uj(e){let t=S.useContext(Jn);return t||je(!1),t}function Wx(e){let t=uj(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function dj(){var e;let t=S.useContext($x),n=cj(),r=Wx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fj(){let{router:e}=lj(Vx.UseNavigateStable),t=Wx(zx.UseNavigateStable),n=S.useRef(!1);return Fx(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Uo({fromRouteId:t},o)))},[e,t])}const Lm={};function pj(e,t,n){Lm[e]||(Lm[e]=!0)}function hj(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function mj(e){let{to:t,replace:n,state:r,relative:i}=e;Ai()||je(!1);let{future:o,static:a}=S.useContext(Zn),{matches:s}=S.useContext(Jn),{pathname:c}=Li(),u=tp(),d=qf(t,Jf(s,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Rr(e){je(!1)}function gj(e){let{basename:t="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:o,static:a=!1,future:s}=e;Ai()&&je(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:o,static:a,future:Uo({v7_relativeSplatPath:!1},s)}),[c,s,o,a]);typeof r=="string"&&(r=Ei(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:v="default"}=r,x=S.useMemo(()=>{let j=Zf(d,c);return j==null?null:{location:{pathname:j,search:f,hash:p,state:h,key:v},navigationType:i}},[c,d,f,p,h,v,i]);return x==null?null:S.createElement(Zn.Provider,{value:u},S.createElement(Al.Provider,{children:n,value:x}))}function vj(e){let{children:t,location:n}=e;return tj(pd(t),n)}new Promise(()=>{});function pd(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,pd(r.props.children,o));return}r.type!==Rr&&je(!1),!r.props.index||!r.props.children||je(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=pd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hd.apply(this,arguments)}function yj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wj(e,t){return e.button===0&&(!t||t==="_self")&&!xj(e)}const Sj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bj="6";try{window.__reactRouterVersion=bj}catch{}const kj="startTransition",_m=hb[kj];function jj(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=Ck({window:i,v5Compat:!0}));let a=o.current,[s,c]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=S.useCallback(f=>{u&&_m?_m(()=>c(f)):c(f)},[c,u]);return S.useLayoutEffect(()=>a.listen(d),[a,d]),S.useEffect(()=>hj(r),[r]),S.createElement(gj,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const Cj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ux=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=yj(t,Sj),{basename:h}=S.useContext(Zn),v,x=!1;if(typeof u=="string"&&Tj.test(u)&&(v=u,Cj))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=Zf(b.pathname,h);b.origin===y.origin&&k!=null?u=k+b.search+b.hash:x=!0}catch{}let j=qk(u,{relative:i}),g=Pj(u,{replace:a,state:s,target:c,preventScrollReset:d,relative:i,viewTransition:f});function m(y){r&&r(y),y.defaultPrevented||g(y)}return S.createElement("a",hd({},p,{href:v||j,onClick:x||o?r:m,ref:n,target:c}))});var Im;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Im||(Im={}));var Mm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mm||(Mm={}));function Pj(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,c=tp(),u=Li(),d=Bx(e,{relative:a});return S.useCallback(f=>{if(wj(f,n)){f.preventDefault();let p=r!==void 0?r:qs(u)===qs(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,c,d,r,i,n,e,o,a,s])}const Hx=S.createContext({isDark:!0,toggleTheme:()=>{}}),Dj=({children:e})=>{const[t,n]=S.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});S.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),S.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=a=>{localStorage.getItem("theme")||n(a.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]);const r=()=>n(!t);return l.jsx(Hx.Provider,{value:{isDark:t,toggleTheme:r},children:e})},np=()=>{const e=S.useContext(Hx);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Yx=S.createContext(null),Ic="tools-auth-session",Mc="tools-webauthn-credential",Ej=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Aj=async()=>{if(!Ej())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Oc=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Lj=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},_j=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Ij=({children:e})=>{const[t,n]=S.useState(!1),[r,i]=S.useState(!0),[o,a]=S.useState(!1),s=S.useRef(!1),c=async()=>{try{const h={challenge:Oc(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Oc(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},v=await navigator.credentials.create({publicKey:h});return v?(localStorage.setItem(Mc,Lj(v.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem(Mc),v={challenge:Oc(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:_j(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:v})}catch(p){return console.error("Authentication failed:",p),!1}},d=S.useCallback(async()=>{i(!0),a(!1);const p=sessionStorage.getItem(Ic);if(p)try{const{timestamp:v}=JSON.parse(p);if(Date.now()-v<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await Aj()){n(!0),sessionStorage.setItem(Ic,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const v=localStorage.getItem(Mc);let x=!1;v?x=await u():x=await c(),x?(n(!0),sessionStorage.setItem(Ic,JSON.stringify({timestamp:Date.now()}))):a(!0)}catch{a(!0)}i(!1)},[]);S.useEffect(()=>{s.current||(s.current=!0,d())},[d]);const f=S.useCallback(()=>{d()},[d]);return l.jsx(Yx.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:o,retryAuth:f},children:e})},Mj=()=>{const e=S.useContext(Yx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ge.apply(this,arguments)};function vi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var re="-ms-",wo="-moz-",J="-webkit-",Gx="comm",Ll="rule",rp="decl",Oj="@import",Kx="@keyframes",Rj="@layer",Qx=Math.abs,ip=String.fromCharCode,md=Object.assign;function Nj(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function Xx(e){return e.trim()}function rn(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function ys(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function yi(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Zx(e){return e.length}function oo(e,t){return t.push(e),e}function $j(e,t){return e.map(t).join("")}function Om(e,t){return e.filter(function(n){return!rn(n,t)})}var _l=1,xi=1,Jx=0,At=0,Te=0,_i="";function Il(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_l,column:xi,length:a,return:"",siblings:s}}function Cn(e,t){return md(Il("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mr(e){for(;e.root;)e=Cn(e.root,{children:[e]});oo(e,e.siblings)}function Fj(){return Te}function Bj(){return Te=At>0?Me(_i,--At):0,xi--,Te===10&&(xi=1,_l--),Te}function Vt(){return Te=At<Jx?Me(_i,At++):0,xi++,Te===10&&(xi=1,_l++),Te}function yr(){return Me(_i,At)}function xs(){return At}function Ml(e,t){return yi(_i,e,t)}function gd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vj(e){return _l=xi=1,Jx=Kt(_i=e),At=0,[]}function zj(e){return _i="",e}function Rc(e){return Xx(Ml(At-1,vd(e===91?e+2:e===40?e+1:e)))}function Wj(e){for(;(Te=yr())&&Te<33;)Vt();return gd(e)>2||gd(Te)>3?"":" "}function Uj(e,t){for(;--t&&Vt()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Ml(e,xs()+(t<6&&yr()==32&&Vt()==32))}function vd(e){for(;Vt();)switch(Te){case e:return At;case 34:case 39:e!==34&&e!==39&&vd(Te);break;case 40:e===41&&vd(e);break;case 92:Vt();break}return At}function Hj(e,t){for(;Vt()&&e+Te!==57;)if(e+Te===84&&yr()===47)break;return"/*"+Ml(t,At-1)+"*"+ip(e===47?e:Vt())}function Yj(e){for(;!gd(yr());)Vt();return Ml(e,At)}function Gj(e){return zj(ws("",null,null,null,[""],e=Vj(e),0,[0],e))}function ws(e,t,n,r,i,o,a,s,c){for(var u=0,d=0,f=a,p=0,h=0,v=0,x=1,j=1,g=1,m=0,y="",b=i,k=o,T=r,C=y;j;)switch(v=m,m=Vt()){case 40:if(v!=108&&Me(C,f-1)==58){ys(C+=H(Rc(m),"&","&\f"),"&\f",Qx(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Rc(m);break;case 9:case 10:case 13:case 32:C+=Wj(v);break;case 92:C+=Uj(xs()-1,7);continue;case 47:switch(yr()){case 42:case 47:oo(Kj(Hj(Vt(),xs()),t,n,c),c);break;default:C+="/"}break;case 123*x:s[u++]=Kt(C)*g;case 125*x:case 59:case 0:switch(m){case 0:case 125:j=0;case 59+d:g==-1&&(C=H(C,/\f/g,"")),h>0&&Kt(C)-f&&oo(h>32?Nm(C+";",r,n,f-1,c):Nm(H(C," ","")+";",r,n,f-2,c),c);break;case 59:C+=";";default:if(oo(T=Rm(C,t,n,u,d,i,s,y,b=[],k=[],f,o),o),m===123)if(d===0)ws(C,t,T,T,b,o,f,s,k);else switch(p===99&&Me(C,3)===110?100:p){case 100:case 108:case 109:case 115:ws(e,T,T,r&&oo(Rm(e,T,T,0,0,i,s,y,i,b=[],f,k),k),i,k,f,s,r?b:k);break;default:ws(C,T,T,T,[""],k,0,s,k)}}u=d=h=0,x=g=1,y=C="",f=a;break;case 58:f=1+Kt(C),h=v;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&Bj()==125)continue}switch(C+=ip(m),m*x){case 38:g=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(Kt(C)-1)*g,g=1;break;case 64:yr()===45&&(C+=Rc(Vt())),p=yr(),d=f=Kt(y=C+=Yj(xs())),m++;break;case 45:v===45&&Kt(C)==2&&(x=0)}}return o}function Rm(e,t,n,r,i,o,a,s,c,u,d,f){for(var p=i-1,h=i===0?o:[""],v=Zx(h),x=0,j=0,g=0;x<r;++x)for(var m=0,y=yi(e,p+1,p=Qx(j=a[x])),b=e;m<v;++m)(b=Xx(j>0?h[m]+" "+y:H(y,/&\f/g,h[m])))&&(c[g++]=b);return Il(e,t,n,i===0?Ll:s,c,u,d,f)}function Kj(e,t,n,r){return Il(e,t,n,Gx,ip(Fj()),yi(e,2,-2),0,r)}function Nm(e,t,n,r,i){return Il(e,t,n,rp,yi(e,0,r),yi(e,r+1,-1),r,i)}function qx(e,t,n){switch(Nj(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+wo+e+re+e+e;case 5936:switch(Me(e,t+11)){case 114:return J+e+re+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+re+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+re+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+re+e+e;case 6165:return J+e+re+"flex-"+e+e;case 5187:return J+e+H(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return J+e+re+"flex-item-"+H(e,/flex-|-self/g,"")+(rn(e,/flex-|baseline/)?"":re+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return J+e+re+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+re+H(e,"shrink","negative")+e;case 5292:return J+e+re+H(e,"basis","preferred-size")+e;case 6060:return J+"box-"+H(e,"-grow","")+J+e+re+H(e,"grow","positive")+e;case 4554:return J+H(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!rn(e,/flex-|baseline/))return re+"grid-column-align"+yi(e,t)+e;break;case 2592:case 3360:return re+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,rn(r.props,/grid-\w+-end/)})?~ys(e+(n=n[t].value),"span",0)?e:re+H(e,"-start","")+e+re+"grid-row-span:"+(~ys(n,"span",0)?rn(n,/\d+/):+rn(n,/\d+/)-+rn(e,/\d+/))+";":re+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rn(r.props,/grid-\w+-start/)})?e:re+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+wo+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ys(e,"stretch",0)?qx(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,c,u){return re+i+":"+o+u+(a?re+i+"-span:"+(s?c:+c-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return H(e,":",":"+J)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Me(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+re+"$2box$3")+e;case 100:return H(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function el(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qj(e,t,n,r){switch(e.type){case Rj:if(e.children.length)break;case Oj:case rp:return e.return=e.return||e.value;case Gx:return"";case Kx:return e.return=e.value+"{"+el(e.children,r)+"}";case Ll:if(!Kt(e.value=e.props.join(",")))return""}return Kt(n=el(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xj(e){var t=Zx(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Zj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Jj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rp:e.return=qx(e.value,e.length,n);return;case Kx:return el([Cn(e,{value:H(e.value,"@","@"+J)})],r);case Ll:if(e.length)return $j(n=e.props,function(i){switch(rn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(Cn(e,{props:[H(i,/:(read-\w+)/,":"+wo+"$1")]})),Mr(Cn(e,{props:[i]})),md(e,{props:Om(n,r)});break;case"::placeholder":Mr(Cn(e,{props:[H(i,/:(plac\w+)/,":"+J+"input-$1")]})),Mr(Cn(e,{props:[H(i,/:(plac\w+)/,":"+wo+"$1")]})),Mr(Cn(e,{props:[H(i,/:(plac\w+)/,re+"input-$1")]})),Mr(Cn(e,{props:[i]})),md(e,{props:Om(n,r)});break}return""})}}var qj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},wi=typeof process<"u"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",e1="active",t1="data-styled-version",Ol="6.1.19",op=`/*!sc*/
`,tl=typeof window<"u"&&typeof document<"u",eC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY),tC={},Rl=Object.freeze([]),Si=Object.freeze({});function n1(e,t,n){return n===void 0&&(n=Si),e.theme!==n.theme&&e.theme||t||n.theme}var r1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rC=/(^-|-$)/g;function $m(e){return e.replace(nC,"-").replace(rC,"")}var iC=/(a)(d)/gi,Ma=52,Fm=function(e){return String.fromCharCode(e+(e>25?39:97))};function yd(e){var t,n="";for(t=Math.abs(e);t>Ma;t=t/Ma|0)n=Fm(t%Ma)+n;return(Fm(t%Ma)+n).replace(iC,"$1-$2")}var Nc,i1=5381,Qr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},o1=function(e){return Qr(i1,e)};function ap(e){return yd(o1(e)>>>0)}function oC(e){return e.displayName||e.name||"Component"}function $c(e){return typeof e=="string"&&!0}var a1=typeof Symbol=="function"&&Symbol.for,s1=a1?Symbol.for("react.memo"):60115,aC=a1?Symbol.for("react.forward_ref"):60112,sC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cC=((Nc={})[aC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[s1]=l1,Nc);function Bm(e){return("type"in(t=e)&&t.type.$$typeof)===s1?l1:"$$typeof"in e?cC[e.$$typeof]:sC;var t}var uC=Object.defineProperty,dC=Object.getOwnPropertyNames,Vm=Object.getOwnPropertySymbols,fC=Object.getOwnPropertyDescriptor,pC=Object.getPrototypeOf,zm=Object.prototype;function c1(e,t,n){if(typeof t!="string"){if(zm){var r=pC(t);r&&r!==zm&&c1(e,r,n)}var i=dC(t);Vm&&(i=i.concat(Vm(t)));for(var o=Bm(e),a=Bm(t),s=0;s<i.length;++s){var c=i[s];if(!(c in lC||n&&n[c]||a&&c in a||o&&c in o)){var u=fC(t,c);try{uC(e,c,u)}catch{}}}}return e}function bi(e){return typeof e=="function"}function sp(e){return typeof e=="object"&&"styledComponentId"in e}function fr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xd(e,t,n){if(n===void 0&&(n=!1),!n&&!Ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xd(e[r],t[r]);else if(Ho(t))for(var r in t)e[r]=xd(e[r],t[r]);return e}function lp(e,t){Object.defineProperty(e,"toString",{value:t})}function ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ia(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(op);return n},e}(),Ss=new Map,rl=new Map,bs=1,Oa=function(e){if(Ss.has(e))return Ss.get(e);for(;rl.has(bs);)bs++;var t=bs++;return Ss.set(e,t),rl.set(t,e),t},mC=function(e,t){bs=t+1,Ss.set(e,t),rl.set(t,e)},gC="style[".concat(wi,"][").concat(t1,'="').concat(Ol,'"]'),vC=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yC=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},xC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(op),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var c=s.match(vC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(mC(d,u),yC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Wm=function(e){for(var t=document.querySelectorAll(gC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(wi)!==e1&&(xC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function wC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var u1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(wi,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wi,e1),r.setAttribute(t1,Ol);var a=wC();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},SC=function(){function e(t){this.element=u1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bC=function(){function e(t){this.element=u1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Um=tl,jC={isServer:!tl,useCSSOMInjection:!eC},il=function(){function e(t,n,r){t===void 0&&(t=Si),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},jC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&tl&&Um&&(Um=!1,Wm(this)),lp(this,function(){return function(o){for(var a=o.getTag(),s=a.length,c="",u=function(f){var p=function(g){return rl.get(g)}(f);if(p===void 0)return"continue";var h=o.names.get(p),v=a.getGroup(f);if(h===void 0||!h.size||v.length===0)return"continue";var x="".concat(wi,".g").concat(f,'[id="').concat(p,'"]'),j="";h!==void 0&&h.forEach(function(g){g.length>0&&(j+="".concat(g,","))}),c+="".concat(v).concat(x,'{content:"').concat(j,'"}').concat(op)},d=0;d<s;d++)u(d);return c}(i)})}return e.registerId=function(t){return Oa(t)},e.prototype.rehydrate=function(){!this.server&&tl&&Wm(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new kC(i):r?new SC(i):new bC(i)}(this.options),new hC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),CC=/&/g,TC=/^\s*\/\/.*$/gm;function d1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=d1(n.children,t)),n})}function PC(e){var t,n,r,i=Si,o=i.options,a=o===void 0?Si:o,s=i.plugins,c=s===void 0?Rl:s,u=function(p,h,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Ll&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(CC,n).replace(r,u))}),a.prefix&&d.push(Jj),d.push(Qj);var f=function(p,h,v,x){h===void 0&&(h=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var j=p.replace(TC,""),g=Gj(v||h?"".concat(v," ").concat(h," { ").concat(j," }"):j);a.namespace&&(g=d1(g,a.namespace));var m=[];return el(g,Xj(d.concat(Zj(function(y){return m.push(y)})))),m};return f.hash=c.length?c.reduce(function(p,h){return h.name||ia(15),Qr(p,h.name)},i1).toString():"",f}var DC=new il,wd=PC(),f1=Xt.createContext({shouldForwardProp:void 0,styleSheet:DC,stylis:wd});f1.Consumer;Xt.createContext(void 0);function Sd(){return S.useContext(f1)}var p1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=wd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lp(this,function(){throw ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wd),this.name+t.hash},e}(),EC=function(e){return e>="A"&&e<="Z"};function Hm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;EC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var h1=function(e){return e==null||e===!1||e===""},m1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!h1(o)&&(Array.isArray(o)&&o.isCss||bi(o)?r.push("".concat(Hm(i),":"),o,";"):Ho(o)?r.push.apply(r,vi(vi(["".concat(i," {")],m1(o),!1),["}"],!1)):r.push("".concat(Hm(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in qj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wn(e,t,n,r){if(h1(e))return[];if(sp(e))return[".".concat(e.styledComponentId)];if(bi(e)){if(!bi(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Wn(i,t,n,r)}var o;return e instanceof p1?n?(e.inject(n,r),[e.getName(r)]):[e]:Ho(e)?m1(e):Array.isArray(e)?Array.prototype.concat.apply(Rl,e.map(function(a){return Wn(a,t,n,r)})):[e.toString()]}function g1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bi(n)&&!sp(n))return!1}return!0}var AC=o1(Ol),LC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&g1(t),this.componentId=n,this.baseHash=Qr(AC,n),this.baseStyle=r,il.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fr(i,this.staticRulesId);else{var o=nl(Wn(this.rules,t,n,r)),a=yd(Qr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=fr(i,a),this.staticRulesId=a}else{for(var c=Qr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=nl(Wn(f,t,n,r));c=Qr(c,p+d),u+=p}}if(u){var h=yd(c>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=fr(i,h)}}return i},e}(),cp=Xt.createContext(void 0);cp.Consumer;var Fc={};function _C(e,t,n){var r=sp(e),i=e,o=!$c(e),a=t.attrs,s=a===void 0?Rl:a,c=t.componentId,u=c===void 0?function(b,k){var T=typeof b!="string"?"sc":$m(b);Fc[T]=(Fc[T]||0)+1;var C="".concat(T,"-").concat(ap(Ol+T+Fc[T]));return k?"".concat(k,"-").concat(C):C}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(b){return $c(b)?"styled.".concat(b):"Styled(".concat(oC(b),")")}(e):d,p=t.displayName&&t.componentId?"".concat($m(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;v=function(b,k){return x(b,k)&&j(b,k)}}else v=x}var g=new LC(n,p,r?i.componentStyle:void 0);function m(b,k){return function(T,C,P){var L=T.attrs,I=T.componentStyle,V=T.defaultProps,N=T.foldedComponentIds,$=T.styledComponentId,U=T.target,D=Xt.useContext(cp),W=Sd(),F=T.shouldForwardProp||W.shouldForwardProp,E=n1(C,D,V)||Si,M=function(G,le,Re){for(var Xe,De=Ge(Ge({},le),{className:void 0,theme:Re}),Wt=0;Wt<G.length;Wt+=1){var wt=bi(Xe=G[Wt])?Xe(De):Xe;for(var Ne in wt)De[Ne]=Ne==="className"?fr(De[Ne],wt[Ne]):Ne==="style"?Ge(Ge({},De[Ne]),wt[Ne]):wt[Ne]}return le.className&&(De.className=fr(De.className,le.className)),De}(L,C,E),O=M.as||U,B={};for(var Y in M)M[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&M.theme===E||(Y==="forwardedAs"?B.as=M.forwardedAs:F&&!F(Y,O)||(B[Y]=M[Y]));var ae=function(G,le){var Re=Sd(),Xe=G.generateAndInjectStyles(le,Re.styleSheet,Re.stylis);return Xe}(I,M),se=fr(N,$);return ae&&(se+=" "+ae),M.className&&(se+=" "+M.className),B[$c(O)&&!r1.has(O)?"class":"className"]=se,P&&(B.ref=P),S.createElement(O,B)}(y,b,k)}m.displayName=f;var y=Xt.forwardRef(m);return y.attrs=h,y.componentStyle=g,y.displayName=f,y.shouldForwardProp=v,y.foldedComponentIds=r?fr(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=p,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(k){for(var T=[],C=1;C<arguments.length;C++)T[C-1]=arguments[C];for(var P=0,L=T;P<L.length;P++)xd(k,L[P],!0);return k}({},i.defaultProps,b):b}}),lp(y,function(){return".".concat(y.styledComponentId)}),o&&c1(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Ym(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gm=function(e){return Object.assign(e,{isCss:!0})};function pr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bi(e)||Ho(e))return Gm(Wn(Ym(Rl,vi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wn(r):Gm(Wn(Ym(r,t)))}function bd(e,t,n){if(n===void 0&&(n=Si),!t)throw ia(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,pr.apply(void 0,vi([i],o,!1)))};return r.attrs=function(i){return bd(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bd(e,t,Ge(Ge({},n),i))},r}var v1=function(e){return bd(_C,e)},w=v1;r1.forEach(function(e){w[e]=v1(e)});var IC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=g1(t),il.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(nl(Wn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&il.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function MC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pr.apply(void 0,vi([e],t,!1)),i="sc-global-".concat(ap(JSON.stringify(r))),o=new IC(r,i),a=function(c){var u=Sd(),d=Xt.useContext(cp),f=Xt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(f,c,u.styleSheet,d,u.stylis),Xt.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,f,p){if(o.isStatic)o.renderStyles(c,tC,d,p);else{var h=Ge(Ge({},u),{theme:n1(u,f,a.defaultProps)});o.renderStyles(c,h,d,p)}}return Xt.memo(a)}function Ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=nl(pr.apply(void 0,vi([e],t,!1))),i=ap(r);return new p1(i,r)}const OC=MC`
  /* CSS Custom Properties */
  :root {
    /* Colors - Dark Mode (Default) */
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-tertiary: #111111;
    --bg-card: rgba(255, 255, 255, 0.02);
    
    --text-primary: rgba(255, 255, 255, 0.87);
    --text-secondary: rgba(255, 255, 255, 0.60);
    --text-tertiary: rgba(255, 255, 255, 0.38);
    
    --accent: #2A9D8F;
    --accent-hover: #3BB4A5;
    --accent-subtle: rgba(42, 157, 143, 0.15);
    --accent-rgb: 42, 157, 143;
    
    --blue: #4361A5;
    --blue-rgb: 67, 97, 165;
    --cyan: #3BB4B1;
    --light-blue: #7BA7D9;
    
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(255, 255, 255, 0.15);
    
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-bg-hover: rgba(255, 255, 255, 0.10);
    --glass-border: rgba(255, 255, 255, 0.10);
    --glass-highlight: rgba(255, 255, 255, 0.15);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.32);
    --specular-highlight: transparent;
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.32);
    --card-shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.4);
    
    /* Gradients */
    --gradient: linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%);
    --gradient-horizontal: linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%);
    
    /* Glass */
    --glass-blur: 40px;
    --glass-blur-secondary: 24px;
    --glass-saturation: 180%;
    
    /* Timing */
    --timing-micro: 100ms;
    --timing-small: 200ms;
    --timing-medium: 300ms;
    --timing-large: 500ms;
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-emphasized: cubic-bezier(0.0, 0, 0.2, 1);
    
    /* Radius */
    --radius-xs: 4px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-full: 9999px;
    
    /* Space */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
    --space-4xl: 80px;
    --space-5xl: 120px;
  }
  
  [data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f7;
    --bg-tertiary: #e8e8ed;
    --bg-card: rgba(0, 0, 0, 0.02);
    
    --text-primary: rgba(0, 0, 0, 0.87);
    --text-secondary: rgba(0, 0, 0, 0.60);
    --text-tertiary: rgba(0, 0, 0, 0.38);
    
    --accent: #238076;
    --accent-hover: #1a6b63;
    --accent-subtle: rgba(35, 128, 118, 0.15);
    --accent-rgb: 35, 128, 118;
    
    --blue: #3a5491;
    --blue-rgb: 58, 84, 145;
    --cyan: #2f9d9a;
    --light-blue: #5a8cc7;
    
    --border: rgba(0, 0, 0, 0.08);
    --border-hover: rgba(0, 0, 0, 0.15);
    
    --glass-bg: rgba(255, 255, 255, 0.72);
    --glass-bg-hover: rgba(255, 255, 255, 0.85);
    --glass-border: rgba(0, 0, 0, 0.08);
    --glass-highlight: rgba(255, 255, 255, 0.5);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    --specular-highlight: transparent;
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    --card-shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.12);
  }

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    max-width: 100vw;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
    max-width: 100vw;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    max-width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  /* Focus States */
  :focus-visible {
    outline: none;
    box-shadow: 
      0 0 0 2px var(--bg-primary),
      0 0 0 4px var(--accent),
      0 0 12px rgba(var(--accent-rgb), 0.3);
    border-radius: var(--radius-sm);
  }

  /* Selection */
  ::selection {
    background: rgba(var(--accent-rgb), 0.3);
    color: var(--text-primary);
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--border-hover);
  }

  /* Gradient Text Utility */
  .gradient-text {
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-text-animated {
    animation: gradientFlow 4s ease infinite;
  }

  /* Keyframe Animations */
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes liquidShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes rotateGradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(3deg); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }

  @keyframes pulseRing {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2.5); opacity: 0; }
  }

  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    :root {
      --glass-bg: rgba(20, 20, 20, 0.98);
      --glass-blur: 0px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Mobile Blur Performance */
  @media (max-width: 640px) {
    :root {
      --glass-blur: 20px;
      --glass-blur-secondary: 12px;
    }
  }

  /* Skip Link */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 12px 24px;
    border-radius: var(--radius-md);
    z-index: 10000;
    transition: top var(--timing-small) var(--ease-standard);
  }

  .skip-link:focus {
    top: 20px;
  }
`,RC=w.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,NC=w.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,$C=()=>{const{isDark:e}=np();return l.jsx(RC,{children:l.jsx(NC,{$isDark:e})})},up=S.createContext({});function dp(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const Nl=S.createContext(null),fp=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class FC extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function BC({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=S.useContext(fp);return S.useInsertionEffect(()=>{const{width:a,height:s,top:c,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),l.jsx(FC,{isPresent:t,childRef:r,sizeRef:i,children:S.cloneElement(e,{ref:r})})}const VC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=dp(zC),c=S.useId(),u=S.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),d=S.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(s.set(f,!1),()=>s.delete(f))}),o?[Math.random(),u]:[n,u]);return S.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),S.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=l.jsx(BC,{isPresent:n,children:e})),l.jsx(Nl.Provider,{value:d,children:e})};function zC(){return new Map}function y1(e=!0){const t=S.useContext(Nl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=S.useId();S.useEffect(()=>{e&&i(o)},[e]);const a=S.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Ra=e=>e.key||"";function Km(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const pp=typeof window<"u",x1=pp?S.useLayoutEffect:S.useEffect,Le=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1})=>{const[s,c]=y1(a),u=S.useMemo(()=>Km(e),[e]),d=a&&!s?[]:u.map(Ra),f=S.useRef(!0),p=S.useRef(u),h=dp(()=>new Map),[v,x]=S.useState(u),[j,g]=S.useState(u);x1(()=>{f.current=!1,p.current=u;for(let b=0;b<j.length;b++){const k=Ra(j[b]);d.includes(k)?h.delete(k):h.get(k)!==!0&&h.set(k,!1)}},[j,d.length,d.join("-")]);const m=[];if(u!==v){let b=[...u];for(let k=0;k<j.length;k++){const T=j[k],C=Ra(T);d.includes(C)||(b.splice(k,0,T),m.push(T))}o==="wait"&&m.length&&(b=m),g(Km(b)),x(u);return}const{forceRender:y}=S.useContext(up);return l.jsx(l.Fragment,{children:j.map(b=>{const k=Ra(b),T=a&&!s?!1:u===j||d.includes(k),C=()=>{if(h.has(k))h.set(k,!0);else return;let P=!0;h.forEach(L=>{L||(P=!1)}),P&&(y==null||y(),g(p.current),a&&(c==null||c()),r&&r())};return l.jsx(VC,{isPresent:T,initial:!f.current||n?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:T?void 0:C,children:b},k)})})},mt=e=>e;let w1=mt;function hp(e){let t;return()=>(t===void 0&&(t=e()),t)}const ki=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},cn=e=>e*1e3,un=e=>e/1e3,WC={useManualTiming:!1};function UC(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const h=f&&r?t:n;return d&&o.add(u),h.has(u)||h.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Na=["read","resolveKeyframes","update","preRender","render","postRender"],HC=40;function S1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Na.reduce((g,m)=>(g[m]=UC(o),g),{}),{read:s,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=a,h=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,HC),1),i.timestamp=g,i.isProcessing=!0,s.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},v=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Na.reduce((g,m)=>{const y=a[m];return g[m]=(b,k=!1,T=!1)=>(n||v(),y.schedule(b,k,T)),g},{}),cancel:g=>{for(let m=0;m<Na.length;m++)a[Na[m]].cancel(g)},state:i,steps:a}}const{schedule:oe,cancel:Yn,state:Fe,steps:Bc}=S1(typeof requestAnimationFrame<"u"?requestAnimationFrame:mt,!0),b1=S.createContext({strict:!1}),Qm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ji={};for(const e in Qm)ji[e]={isEnabled:t=>Qm[e].some(n=>!!t[n])};function YC(e){for(const t in e)ji[t]={...ji[t],...e[t]}}const GC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ol(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||GC.has(e)}let k1=e=>!ol(e);function KC(e){e&&(k1=t=>t.startsWith("on")?!ol(t):e(t))}try{KC(require("@emotion/is-prop-valid").default)}catch{}function QC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(k1(i)||n===!0&&ol(i)||!t&&!ol(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function XC(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const $l=S.createContext({});function Yo(e){return typeof e=="string"||Array.isArray(e)}function Fl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gp=["initial",...mp];function Bl(e){return Fl(e.animate)||gp.some(t=>Yo(e[t]))}function j1(e){return!!(Bl(e)||e.variants)}function ZC(e,t){if(Bl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Yo(n)?n:void 0,animate:Yo(r)?r:void 0}}return e.inherit!==!1?t:{}}function JC(e){const{initial:t,animate:n}=ZC(e,S.useContext($l));return S.useMemo(()=>({initial:t,animate:n}),[Xm(t),Xm(n)])}function Xm(e){return Array.isArray(e)?e.join(" "):e}const qC=Symbol.for("motionComponentSymbol");function Xr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function eT(e,t,n){return S.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Xr(n)&&(n.current=r))},[t])}const vp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),tT="framerAppearId",C1="data-"+vp(tT),{schedule:yp}=S1(queueMicrotask,!1),T1=S.createContext({});function nT(e,t,n,r,i){var o,a;const{visualElement:s}=S.useContext($l),c=S.useContext(b1),u=S.useContext(Nl),d=S.useContext(fp).reducedMotion,f=S.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,h=S.useContext(T1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&rT(f.current,n,i,h);const v=S.useRef(!1);S.useInsertionEffect(()=>{p&&v.current&&p.update(n,u)});const x=n[C1],j=S.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,x)));return x1(()=>{p&&(v.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),yp.render(p.render),j.current&&p.animationState&&p.animationState.animateChanges())}),S.useEffect(()=>{p&&(!j.current&&p.animationState&&p.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,x)}),j.current=!1))}),p}function rT(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:P1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&Xr(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function P1(e){if(e)return e.options.allowProjection!==!1?e.projection:P1(e.parent)}function iT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,a;e&&YC(e);function s(u,d){let f;const p={...S.useContext(fp),...u,layoutId:oT(u)},{isStatic:h}=p,v=JC(u),x=r(u,h);if(!h&&pp){aT();const j=sT(p);f=j.MeasureLayout,v.visualElement=nT(i,x,p,t,j.ProjectionNode)}return l.jsxs($l.Provider,{value:v,children:[f&&v.visualElement?l.jsx(f,{visualElement:v.visualElement,...p}):null,n(i,u,eT(x,v.visualElement,d),x,h,v.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${(a=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&a!==void 0?a:""})`}`;const c=S.forwardRef(s);return c[qC]=i,c}function oT({layoutId:e}){const t=S.useContext(up).id;return t&&e!==void 0?t+"-"+e:e}function aT(e,t){S.useContext(b1).strict}function sT(e){const{drag:t,layout:n}=ji;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const lT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xp(e){return typeof e!="string"||e.includes("-")?!1:!!(lT.indexOf(e)>-1||/[A-Z]/u.test(e))}function Zm(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function wp(e,t,n,r){if(typeof t=="function"){const[i,o]=Zm(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Zm(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const kd=e=>Array.isArray(e),cT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),uT=e=>kd(e)?e[e.length-1]||0:e,Ke=e=>!!(e&&e.getVelocity);function ks(e){const t=Ke(e)?e.get():e;return cT(t)?t.toValue():t}function dT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const a={latestValues:fT(r,i,o,e),renderState:t()};return n&&(a.onMount=s=>n({props:r,current:s,...a}),a.onUpdate=s=>n(s)),a}const D1=e=>(t,n)=>{const r=S.useContext($l),i=S.useContext(Nl),o=()=>dT(e,t,r,i);return n?o():dp(o)};function fT(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=ks(o[p]);let{initial:a,animate:s}=e;const c=Bl(e),u=j1(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?s:a;if(f&&typeof f!="boolean"&&!Fl(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const v=wp(e,p[h]);if(v){const{transitionEnd:x,transition:j,...g}=v;for(const m in g){let y=g[m];if(Array.isArray(y)){const b=d?y.length-1:0;y=y[b]}y!==null&&(i[m]=y)}for(const m in x)i[m]=x[m]}}}return i}const Mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ar=new Set(Mi),E1=e=>t=>typeof t=="string"&&t.startsWith(e),A1=E1("--"),pT=E1("var(--"),Sp=e=>pT(e)?hT.test(e.split("/*")[0].trim()):!1,hT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,L1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,mn=(e,t,n)=>n>t?t:n<e?e:n,Oi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Go={...Oi,transform:e=>mn(0,1,e)},$a={...Oi,default:1},oa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Tn=oa("deg"),qt=oa("%"),z=oa("px"),mT=oa("vh"),gT=oa("vw"),Jm={...qt,parse:e=>qt.parse(e)/100,transform:e=>qt.transform(e*100)},vT={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},yT={rotate:Tn,rotateX:Tn,rotateY:Tn,rotateZ:Tn,scale:$a,scaleX:$a,scaleY:$a,scaleZ:$a,skew:Tn,skewX:Tn,skewY:Tn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Go,originX:Jm,originY:Jm,originZ:z},qm={...Oi,transform:Math.round},bp={...vT,...yT,zIndex:qm,size:z,fillOpacity:Go,strokeOpacity:Go,numOctaves:qm},xT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},wT=Mi.length;function ST(e,t,n){let r="",i=!0;for(let o=0;o<wT;o++){const a=Mi[o],s=e[a];if(s===void 0)continue;let c=!0;if(typeof s=="number"?c=s===(a.startsWith("scale")?1:0):c=parseFloat(s)===0,!c||n){const u=L1(s,bp[a]);if(!c){i=!1;const d=xT[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function kp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const c in t){const u=t[c];if(Ar.has(c)){a=!0;continue}else if(A1(c)){i[c]=u;continue}else{const d=L1(u,bp[c]);c.startsWith("origin")?(s=!0,o[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=ST(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}const bT={offset:"stroke-dashoffset",array:"stroke-dasharray"},kT={offset:"strokeDashoffset",array:"strokeDasharray"};function jT(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?bT:kT;e[o.offset]=z.transform(-r);const a=z.transform(t),s=z.transform(n);e[o.array]=`${a} ${s}`}function eg(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function CT(e,t,n){const r=eg(t,e.x,e.width),i=eg(n,e.y,e.height);return`${r} ${i}`}function jp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:c=0,...u},d,f){if(kp(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:h,dimensions:v}=e;p.transform&&(v&&(h.transform=p.transform),delete p.transform),v&&(i!==void 0||o!==void 0||h.transform)&&(h.transformOrigin=CT(v,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&jT(p,a,s,c,!1)}const Cp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_1=()=>({...Cp(),attrs:{}}),Tp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function I1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const M1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function O1(e,t,n,r){I1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(M1.has(i)?i:vp(i),t.attrs[i])}const al={};function TT(e){Object.assign(al,e)}function R1(e,{layout:t,layoutId:n}){return Ar.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!al[e]||e==="opacity")}function Pp(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(Ke(i[a])||t.style&&Ke(t.style[a])||R1(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function N1(e,t,n){const r=Pp(e,t,n);for(const i in e)if(Ke(e[i])||Ke(t[i])){const o=Mi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function PT(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const tg=["x","y","width","height","cx","cy","r"],DT={useVisualState:D1({scrapeMotionValuesFromProps:N1,createRenderState:_1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const s in i)if(Ar.has(s)){o=!0;break}}if(!o)return;let a=!t;if(t)for(let s=0;s<tg.length;s++){const c=tg[s];e[c]!==t[c]&&(a=!0)}a&&oe.read(()=>{PT(n,r),oe.render(()=>{jp(r,i,Tp(n.tagName),e.transformTemplate),O1(n,r)})})}})},ET={useVisualState:D1({scrapeMotionValuesFromProps:Pp,createRenderState:Cp})};function $1(e,t,n){for(const r in t)!Ke(t[r])&&!R1(r,n)&&(e[r]=t[r])}function AT({transformTemplate:e},t){return S.useMemo(()=>{const n=Cp();return kp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function LT(e,t){const n=e.style||{},r={};return $1(r,n,e),Object.assign(r,AT(e,t)),r}function _T(e,t){const n={},r=LT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function IT(e,t,n,r){const i=S.useMemo(()=>{const o=_1();return jp(o,t,Tp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};$1(o,e.style,e),i.style={...o,...i.style}}return i}function MT(e=!1){return(n,r,i,{latestValues:o},a)=>{const c=(xp(n)?IT:_T)(r,o,a,n),u=QC(r,typeof n=="string",e),d=n!==S.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=S.useMemo(()=>Ke(f)?f.get():f,[f]);return S.createElement(n,{...d,children:p})}}function OT(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...xp(r)?DT:ET,preloadedFeatures:e,useRender:MT(i),createVisualElement:t,Component:r};return iT(a)}}function F1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Vl(e,t,n){const r=e.getProps();return wp(r,t,n!==void 0?n:r.custom,e)}const RT=hp(()=>window.ScrollTimeline!==void 0);class NT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(RT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class $T extends NT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Dp(e,t){return e?e[t]||e.default||e:void 0}const jd=2e4;function B1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<jd;)t+=n,r=e.next(t);return t>=jd?1/0:t}function Ep(e){return typeof e=="function"}function ng(e,t){e.timeline=t,e.onfinish=null}const Ap=e=>Array.isArray(e)&&typeof e[0]=="number",FT={linearEasing:void 0};function BT(e,t){const n=hp(e);return()=>{var r;return(r=FT[t])!==null&&r!==void 0?r:n()}}const sl=BT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),V1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(ki(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function z1(e){return!!(typeof e=="function"&&sl()||!e||typeof e=="string"&&(e in Cd||sl())||Ap(e)||Array.isArray(e)&&e.every(z1))}const ao=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Cd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ao([0,.65,.55,1]),circOut:ao([.55,0,1,.45]),backIn:ao([.31,.01,.66,-.59]),backOut:ao([.33,1.53,.69,.99])};function W1(e,t){if(e)return typeof e=="function"&&sl()?V1(e,t):Ap(e)?ao(e):Array.isArray(e)?e.map(n=>W1(n,t)||Cd.easeOut):Cd[e]}const Mt={x:!1,y:!1};function U1(){return Mt.x||Mt.y}function VT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function H1(e,t){const n=VT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function rg(e){return t=>{t.pointerType==="touch"||U1()||e(t)}}function zT(e,t,n={}){const[r,i,o]=H1(e,n),a=rg(s=>{const{target:c}=s,u=t(s);if(typeof u!="function"||!c)return;const d=rg(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(s=>{s.addEventListener("pointerenter",a,i)}),o}const Y1=(e,t)=>t?e===t?!0:Y1(e,t.parentElement):!1,Lp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,WT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function UT(e){return WT.has(e.tagName)||e.tabIndex!==-1}const so=new WeakSet;function ig(e){return t=>{t.key==="Enter"&&e(t)}}function Vc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const HT=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=ig(()=>{if(so.has(n))return;Vc(n,"down");const i=ig(()=>{Vc(n,"up")}),o=()=>Vc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function og(e){return Lp(e)&&!U1()}function YT(e,t,n={}){const[r,i,o]=H1(e,n),a=s=>{const c=s.currentTarget;if(!og(s)||so.has(c))return;so.add(c);const u=t(s),d=(h,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!og(h)||!so.has(c))&&(so.delete(c),typeof u=="function"&&u(h,{success:v}))},f=h=>{d(h,n.useGlobalTarget||Y1(c,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(s=>{!UT(s)&&s.getAttribute("tabindex")===null&&(s.tabIndex=0),(n.useGlobalTarget?window:s).addEventListener("pointerdown",a,i),s.addEventListener("focus",u=>HT(u,i),i)}),o}function GT(e){return e==="x"||e==="y"?Mt[e]?null:(Mt[e]=!0,()=>{Mt[e]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const G1=new Set(["width","height","top","left","right","bottom",...Mi]);let js;function KT(){js=void 0}const en={now:()=>(js===void 0&&en.set(Fe.isProcessing||WC.useManualTiming?Fe.timestamp:performance.now()),js),set:e=>{js=e,queueMicrotask(KT)}};function _p(e,t){e.indexOf(t)===-1&&e.push(t)}function Ip(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Mp{constructor(){this.subscriptions=[]}add(t){return _p(this.subscriptions,t),()=>Ip(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function K1(e,t){return t?e*(1e3/t):0}const ag=30,QT=e=>!isNaN(parseFloat(e));class XT{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=en.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=en.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=QT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Mp);const r=this.events[t].add(n);return t==="change"?()=>{r(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=en.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ag)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ag);return K1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ko(e,t){return new XT(e,t)}function ZT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ko(n))}function JT(e,t){const n=Vl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=uT(o[a]);ZT(e,a,s)}}function qT(e){return!!(Ke(e)&&e.add)}function Td(e,t){const n=e.getValue("willChange");if(qT(n))return n.add(t)}function Q1(e){return e.props[C1]}const X1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,eP=1e-7,tP=12;function nP(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=X1(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>eP&&++s<tP);return a}function aa(e,t,n,r){if(e===t&&n===r)return mt;const i=o=>nP(o,0,1,e,n);return o=>o===0||o===1?o:X1(i(o),t,r)}const Z1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,J1=e=>t=>1-e(1-t),q1=aa(.33,1.53,.69,.99),Op=J1(q1),ew=Z1(Op),tw=e=>(e*=2)<1?.5*Op(e):.5*(2-Math.pow(2,-10*(e-1))),Rp=e=>1-Math.sin(Math.acos(e)),nw=J1(Rp),rw=Z1(Rp),iw=e=>/^0[^.\s]+$/u.test(e);function rP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||iw(e):!0}const So=e=>Math.round(e*1e5)/1e5,Np=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function iP(e){return e==null}const oP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$p=(e,t)=>n=>!!(typeof n=="string"&&oP.test(n)&&n.startsWith(e)||t&&!iP(n)&&Object.prototype.hasOwnProperty.call(n,t)),ow=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(Np);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},aP=e=>mn(0,255,e),zc={...Oi,transform:e=>Math.round(aP(e))},hr={test:$p("rgb","red"),parse:ow("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+zc.transform(e)+", "+zc.transform(t)+", "+zc.transform(n)+", "+So(Go.transform(r))+")"};function sP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Pd={test:$p("#"),parse:sP,transform:hr.transform},Zr={test:$p("hsl","hue"),parse:ow("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+qt.transform(So(t))+", "+qt.transform(So(n))+", "+So(Go.transform(r))+")"},He={test:e=>hr.test(e)||Pd.test(e)||Zr.test(e),parse:e=>hr.test(e)?hr.parse(e):Zr.test(e)?Zr.parse(e):Pd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?hr.transform(e):Zr.transform(e)},lP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function cP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Np))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(lP))===null||n===void 0?void 0:n.length)||0)>0}const aw="number",sw="color",uP="var",dP="var(",sg="${}",fP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(fP,c=>(He.test(c)?(r.color.push(o),i.push(sw),n.push(He.parse(c))):c.startsWith(dP)?(r.var.push(o),i.push(uP),n.push(c)):(r.number.push(o),i.push(aw),n.push(parseFloat(c))),++o,sg)).split(sg);return{values:n,split:s,indexes:r,types:i}}function lw(e){return Qo(e).values}function cw(e){const{split:t,types:n}=Qo(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===aw?o+=So(i[a]):s===sw?o+=He.transform(i[a]):o+=i[a]}return o}}const pP=e=>typeof e=="number"?0:e;function hP(e){const t=lw(e);return cw(e)(t.map(pP))}const Gn={test:cP,parse:lw,createTransformer:cw,getAnimatableNone:hP},mP=new Set(["brightness","contrast","saturate","opacity"]);function gP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Np)||[];if(!r)return e;const i=n.replace(r,"");let o=mP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const vP=/\b([a-z-]*)\(.*?\)/gu,Dd={...Gn,getAnimatableNone:e=>{const t=e.match(vP);return t?t.map(gP).join(" "):e}},yP={...bp,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Dd,WebkitFilter:Dd},Fp=e=>yP[e];function uw(e,t){let n=Fp(e);return n!==Dd&&(n=Gn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const xP=new Set(["auto","none","0"]);function wP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!xP.has(o)&&Qo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=uw(n,i)}const lg=e=>e===Oi||e===z,cg=(e,t)=>parseFloat(e.split(", ")[t]),ug=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return cg(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?cg(o[1],e):0}},SP=new Set(["x","y","z"]),bP=Mi.filter(e=>!SP.has(e));function kP(e){const t=[];return bP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ci={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ug(4,13),y:ug(5,14)};Ci.translateX=Ci.x;Ci.translateY=Ci.y;const xr=new Set;let Ed=!1,Ad=!1;function dw(){if(Ad){const e=Array.from(xr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=kP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ad=!1,Ed=!1,xr.forEach(e=>e.complete()),xr.clear()}function fw(){xr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ad=!0)})}function jP(){fw(),dw()}class Bp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(xr.add(this),Ed||(Ed=!0,oe.read(fw),oe.resolveKeyframes(dw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,s);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const pw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),CP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TP(e){const t=CP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function hw(e,t,n=1){const[r,i]=TP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return pw(a)?parseFloat(a):a}return Sp(i)?hw(i,t,n+1):i}const mw=e=>t=>t.test(e),PP={test:e=>e==="auto",parse:e=>e},gw=[Oi,z,qt,Tn,gT,mT,PP],dg=e=>gw.find(mw(e));class vw extends Bp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Sp(u))){const d=hw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!G1.has(r)||t.length!==2)return;const[i,o]=t,a=dg(i),s=dg(o);if(a!==s)if(lg(a)&&lg(s))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)rP(t[i])&&r.push(i);r.length&&wP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ci[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=Ci[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const fg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gn.test(e)||e==="0")&&!e.startsWith("url("));function DP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function EP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=fg(i,t),s=fg(o,t);return!a||!s?!1:DP(e)||(n==="spring"||Ep(n))&&r}const AP=e=>e!==null;function zl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(AP),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const LP=40;class yw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=en.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>LP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&jP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=en.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:c,isGenerator:u}=this.options;if(!u&&!EP(t,r,i,o))if(a)this.options.duration=0;else{c&&c(zl(t,this.options,n)),s&&s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ge=(e,t,n)=>e+(t-e)*n;function Wc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _P({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=Wc(c,s,e+1/3),o=Wc(c,s,e),a=Wc(c,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function ll(e,t){return n=>n>0?t:e}const Uc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},IP=[Pd,hr,Zr],MP=e=>IP.find(t=>t.test(e));function pg(e){const t=MP(e);if(!t)return!1;let n=t.parse(e);return t===Zr&&(n=_P(n)),n}const hg=(e,t)=>{const n=pg(e),r=pg(t);if(!n||!r)return ll(e,t);const i={...n};return o=>(i.red=Uc(n.red,r.red,o),i.green=Uc(n.green,r.green,o),i.blue=Uc(n.blue,r.blue,o),i.alpha=ge(n.alpha,r.alpha,o),hr.transform(i))},OP=(e,t)=>n=>t(e(n)),sa=(...e)=>e.reduce(OP),Ld=new Set(["none","hidden"]);function RP(e,t){return Ld.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function NP(e,t){return n=>ge(e,t,n)}function Vp(e){return typeof e=="number"?NP:typeof e=="string"?Sp(e)?ll:He.test(e)?hg:BP:Array.isArray(e)?xw:typeof e=="object"?He.test(e)?hg:$P:ll}function xw(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>Vp(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function $P(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Vp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function FP(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],c=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=c,i[a]++}return r}const BP=(e,t)=>{const n=Gn.createTransformer(t),r=Qo(e),i=Qo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ld.has(e)&&!i.values.length||Ld.has(t)&&!r.values.length?RP(e,t):sa(xw(FP(r,i),i.values),n):ll(e,t)};function ww(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ge(e,t,n):Vp(e)(e,t)}const VP=5;function Sw(e,t,n){const r=Math.max(t-VP,0);return K1(n-e(r),t-r)}const we={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Hc=.001;function zP({duration:e=we.duration,bounce:t=we.bounce,velocity:n=we.velocity,mass:r=we.mass}){let i,o,a=1-t;a=mn(we.minDamping,we.maxDamping,a),e=mn(we.minDuration,we.maxDuration,un(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,h=_d(u,a),v=Math.exp(-f);return Hc-p/h*v},o=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,v=Math.exp(-f),x=_d(Math.pow(u,2),a);return(-i(u)+Hc>0?-1:1)*((p-h)*v)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Hc+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const s=5/e,c=UP(i,o,s);if(e=cn(e),isNaN(c))return{stiffness:we.stiffness,damping:we.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const WP=12;function UP(e,t,n){let r=n;for(let i=1;i<WP;i++)r=r-e(r)/t(r);return r}function _d(e,t){return e*Math.sqrt(1-t*t)}const HP=["duration","bounce"],YP=["stiffness","damping","mass"];function mg(e,t){return t.some(n=>e[n]!==void 0)}function GP(e){let t={velocity:we.velocity,stiffness:we.stiffness,damping:we.damping,mass:we.mass,isResolvedFromDuration:!1,...e};if(!mg(e,YP)&&mg(e,HP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*mn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:we.mass,stiffness:i,damping:o}}else{const n=zP(e);t={...t,...n,mass:we.mass},t.isResolvedFromDuration=!0}return t}function bw(e=we.visualDuration,t=we.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=GP({...n,velocity:-un(n.velocity||0)}),v=p||0,x=u/(2*Math.sqrt(c*d)),j=a-o,g=un(Math.sqrt(c/d)),m=Math.abs(j)<5;r||(r=m?we.restSpeed.granular:we.restSpeed.default),i||(i=m?we.restDelta.granular:we.restDelta.default);let y;if(x<1){const k=_d(g,x);y=T=>{const C=Math.exp(-x*g*T);return a-C*((v+x*g*j)/k*Math.sin(k*T)+j*Math.cos(k*T))}}else if(x===1)y=k=>a-Math.exp(-g*k)*(j+(v+g*j)*k);else{const k=g*Math.sqrt(x*x-1);y=T=>{const C=Math.exp(-x*g*T),P=Math.min(k*T,300);return a-C*((v+x*g*j)*Math.sinh(P)+k*j*Math.cosh(P))/k}}const b={calculatedDuration:h&&f||null,next:k=>{const T=y(k);if(h)s.done=k>=f;else{let C=0;x<1&&(C=k===0?cn(v):Sw(y,k,T));const P=Math.abs(C)<=r,L=Math.abs(a-T)<=i;s.done=P&&L}return s.value=s.done?a:T,s},toString:()=>{const k=Math.min(B1(b),jd),T=V1(C=>b.next(k*C).value,k,30);return k+"ms "+T}};return b}function gg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=P=>s!==void 0&&P<s||c!==void 0&&P>c,v=P=>s===void 0?c:c===void 0||Math.abs(s-P)<Math.abs(c-P)?s:c;let x=n*t;const j=f+x,g=a===void 0?j:a(j);g!==j&&(x=g-f);const m=P=>-x*Math.exp(-P/r),y=P=>g+m(P),b=P=>{const L=m(P),I=y(P);p.done=Math.abs(L)<=u,p.value=p.done?g:I};let k,T;const C=P=>{h(p.value)&&(k=P,T=bw({keyframes:[p.value,v(p.value)],velocity:Sw(y,P,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:P=>{let L=!1;return!T&&k===void 0&&(L=!0,b(P),C(P)),k!==void 0&&P>=k?T.next(P-k):(!L&&b(P),p)}}}const KP=aa(.42,0,1,1),QP=aa(0,0,.58,1),kw=aa(.42,0,.58,1),XP=e=>Array.isArray(e)&&typeof e[0]!="number",ZP={linear:mt,easeIn:KP,easeInOut:kw,easeOut:QP,circIn:Rp,circInOut:rw,circOut:nw,backIn:Op,backInOut:ew,backOut:q1,anticipate:tw},vg=e=>{if(Ap(e)){w1(e.length===4);const[t,n,r,i]=e;return aa(t,n,r,i)}else if(typeof e=="string")return ZP[e];return e};function JP(e,t,n){const r=[],i=n||ww,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||mt:t;s=sa(c,s)}r.push(s)}return r}function qP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(w1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=JP(t,r,i),c=s.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=ki(e[f],e[f+1],d);return s[f](p)};return n?d=>u(mn(e[0],e[o-1],d)):u}function eD(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ki(0,t,r);e.push(ge(n,1,i))}}function tD(e){const t=[0];return eD(t,e.length-1),t}function nD(e,t){return e.map(n=>n*t)}function rD(e,t){return e.map(()=>t||kw).splice(0,e.length-1)}function cl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=XP(r)?r.map(vg):vg(r),o={done:!1,value:t[0]},a=nD(n&&n.length===t.length?n:tD(t),e),s=qP(a,t,{ease:Array.isArray(i)?i:rD(t,i)});return{calculatedDuration:e,next:c=>(o.value=s(c),o.done=c>=e,o)}}const iD=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>Yn(t),now:()=>Fe.isProcessing?Fe.timestamp:en.now()}},oD={decay:gg,inertia:gg,tween:cl,keyframes:cl,spring:bw},aD=e=>e/100;class zp extends yw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Bp,s=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=Ep(n)?n:oD[n]||cl;let c,u;s!==cl&&typeof t[0]!="number"&&(c=sa(aD,ww(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=B1(d));const{calculatedDuration:f}=d,p=f+i,h=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:h}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:p,repeat:h,repeatType:v,repeatDelay:x,onUpdate:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),m=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,b=o;if(h){const P=Math.min(this.currentTime,d)/f;let L=Math.floor(P),I=P%1;!I&&P>=1&&(I=1),I===1&&L--,L=Math.min(L,h+1),!!(L%2)&&(v==="reverse"?(I=1-I,x&&(I-=x/f)):v==="mirror"&&(b=a)),y=mn(0,1,I)*f}const k=m?{done:!1,value:c[0]}:b.next(y);s&&(k.value=s(k.value));let{done:T}=k;!m&&u!==null&&(T=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&i!==void 0&&(k.value=zl(c,this.options,i)),j&&j(k.value),C&&this.finish(),k}get duration(){const{resolved:t}=this;return t?un(t.calculatedDuration):0}get time(){return un(this.currentTime)}set time(t){t=cn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=un(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=iD,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const sD=new Set(["opacity","clipPath","filter","transform"]);function lD(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=W1(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const cD=hp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ul=10,uD=2e4;function dD(e){return Ep(e.type)||e.type==="spring"||!z1(e.ease)}function fD(e,t){const n=new zp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<uD;)r=n.sample(o),i.push(r.value),o+=ul;return{times:void 0,keyframes:i,duration:o-ul,ease:"linear"}}const jw={anticipate:tw,backInOut:ew,circInOut:rw};function pD(e){return e in jw}class yg extends yw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new vw(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:a,motionValue:s,name:c,startTime:u}=this.options;if(!s.owner||!s.owner.current)return!1;if(typeof o=="string"&&sl()&&pD(o)&&(o=jw[o]),dD(this.options)){const{onComplete:f,onUpdate:p,motionValue:h,element:v,...x}=this.options,j=fD(t,x);t=j.keyframes,t.length===1&&(t[1]=t[0]),r=j.duration,i=j.times,o=j.ease,a="keyframes"}const d=lD(s.owner.current,c,t,{...this.options,duration:r,times:i,ease:o});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(ng(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;s.set(zl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return un(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return un(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=cn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return mt;const{animation:r}=n;ng(r,t)}return mt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...h}=this.options,v=new zp({...h,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),x=cn(this.time);u.setWithVelocity(v.sample(x-ul).value,v.sample(x).value,ul)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return cD()&&r&&sD.has(r)&&!c&&!u&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const hD={type:"spring",stiffness:500,damping:25,restSpeed:10},mD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),gD={type:"keyframes",duration:.8},vD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yD=(e,{keyframes:t})=>t.length>2?gD:Ar.has(e)?e.startsWith("scale")?mD(t[1]):hD:vD;function xD({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Wp=(e,t,n,r={},i,o)=>a=>{const s=Dp(r,e)||{},c=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-cn(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};xD(s)||(d={...d,...yD(e,d)}),d.duration&&(d.duration=cn(d.duration)),d.repeatDelay&&(d.repeatDelay=cn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const p=zl(d.keyframes,s);if(p!==void 0)return oe.update(()=>{d.onUpdate(p),d.onComplete()}),new $T([])}return!o&&yg.supports(d)?new yg(d):new zp(d)};function wD({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Cw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),h=c[f];if(h===void 0||d&&wD(d,f))continue;const v={delay:n,...Dp(a||{},f)};let x=!1;if(window.MotionHandoffAnimation){const g=Q1(e);if(g){const m=window.MotionHandoffAnimation(g,f,oe);m!==null&&(v.startTime=m,x=!0)}}Td(e,f),p.start(Wp(f,p,h,e.shouldReduceMotion&&G1.has(f)?{type:!1}:v,e,x));const j=p.animation;j&&u.push(j)}return s&&Promise.all(u).then(()=>{oe.update(()=>{s&&JT(e,s)})}),u}function Id(e,t,n={}){var r;const i=Vl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(Cw(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=o;return SD(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[u,d]=c==="beforeChildren"?[a,s]:[s,a];return u().then(()=>d())}else return Promise.all([a(),s(n.delay)])}function SD(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(bD).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Id(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function bD(e,t){return e.sortNodePosition(t)}function kD(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Id(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Id(e,t,n);else{const i=typeof t=="function"?Vl(e,t,n.custom):t;r=Promise.all(Cw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const jD=gp.length;function Tw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Tw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<jD;n++){const r=gp[n],i=e.props[r];(Yo(i)||i===!1)&&(t[r]=i)}return t}const CD=[...mp].reverse(),TD=mp.length;function PD(e){return t=>Promise.all(t.map(({animation:n,options:r})=>kD(e,n,r)))}function DD(e){let t=PD(e),n=xg(),r=!0;const i=c=>(u,d)=>{var f;const p=Vl(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:h,transitionEnd:v,...x}=p;u={...u,...x,...v}}return u};function o(c){t=c(e)}function a(c){const{props:u}=e,d=Tw(e.parent)||{},f=[],p=new Set;let h={},v=1/0;for(let j=0;j<TD;j++){const g=CD[j],m=n[g],y=u[g]!==void 0?u[g]:d[g],b=Yo(y),k=g===c?m.isActive:null;k===!1&&(v=j);let T=y===d[g]&&y!==u[g]&&b;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...h},!m.isActive&&k===null||!y&&!m.prevProp||Fl(y)||typeof y=="boolean")continue;const C=ED(m.prevProp,y);let P=C||g===c&&m.isActive&&!T&&b||j>v&&b,L=!1;const I=Array.isArray(y)?y:[y];let V=I.reduce(i(g),{});k===!1&&(V={});const{prevResolvedValues:N={}}=m,$={...N,...V},U=F=>{P=!0,p.has(F)&&(L=!0,p.delete(F)),m.needsAnimating[F]=!0;const E=e.getValue(F);E&&(E.liveStyle=!1)};for(const F in $){const E=V[F],M=N[F];if(h.hasOwnProperty(F))continue;let O=!1;kd(E)&&kd(M)?O=!F1(E,M):O=E!==M,O?E!=null?U(F):p.add(F):E!==void 0&&p.has(F)?U(F):m.protectedKeys[F]=!0}m.prevProp=y,m.prevResolvedValues=V,m.isActive&&(h={...h,...V}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(T&&C)||L)&&f.push(...I.map(F=>({animation:F,options:{type:g}})))}if(p.size){const j={};p.forEach(g=>{const m=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),j[g]=m??null}),f.push({animation:j})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function s(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var h;return(h=p.animationState)===null||h===void 0?void 0:h.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=xg(),r=!0}}}function ED(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!F1(t,e):!1}function nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function xg(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class AD extends qn{constructor(t){super(t),t.animationState||(t.animationState=DD(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Fl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let LD=0;class _D extends qn{constructor(){super(...arguments),this.id=LD++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ID={animation:{Feature:AD},exit:{Feature:_D}};function Xo(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function la(e){return{point:{x:e.pageX,y:e.pageY}}}const MD=e=>t=>Lp(t)&&e(t,la(t));function bo(e,t,n,r){return Xo(e,t,MD(n),r)}const wg=(e,t)=>Math.abs(e-t);function OD(e,t){const n=wg(e.x,t.x),r=wg(e.y,t.y);return Math.sqrt(n**2+r**2)}class Pw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Gc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=OD(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:v}=f,{timestamp:x}=Fe;this.history.push({...v,timestamp:x});const{onStart:j,onMove:g}=this.handlers;p||(j&&j(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Yc(p,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Gc(f.type==="pointercancel"?this.lastMoveEventInfo:Yc(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,j),v&&v(f,j)},!Lp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=la(t),s=Yc(a,this.transformPagePoint),{point:c}=s,{timestamp:u}=Fe;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Gc(s,this.history)),this.removeListeners=sa(bo(this.contextWindow,"pointermove",this.handlePointerMove),bo(this.contextWindow,"pointerup",this.handlePointerUp),bo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Yn(this.updatePoint)}}function Yc(e,t){return t?{point:t(e.point)}:e}function Sg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Gc({point:e},t){return{point:e,delta:Sg(e,Dw(t)),offset:Sg(e,RD(t)),velocity:ND(t,.1)}}function RD(e){return e[0]}function Dw(e){return e[e.length-1]}function ND(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Dw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>cn(t)));)n--;if(!r)return{x:0,y:0};const o=un(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const Ew=1e-4,$D=1-Ew,FD=1+Ew,Aw=.01,BD=0-Aw,VD=0+Aw;function vt(e){return e.max-e.min}function zD(e,t,n){return Math.abs(e-t)<=n}function bg(e,t,n,r=.5){e.origin=r,e.originPoint=ge(t.min,t.max,e.origin),e.scale=vt(n)/vt(t),e.translate=ge(n.min,n.max,e.origin)-e.originPoint,(e.scale>=$D&&e.scale<=FD||isNaN(e.scale))&&(e.scale=1),(e.translate>=BD&&e.translate<=VD||isNaN(e.translate))&&(e.translate=0)}function ko(e,t,n,r){bg(e.x,t.x,n.x,r?r.originX:void 0),bg(e.y,t.y,n.y,r?r.originY:void 0)}function kg(e,t,n){e.min=n.min+t.min,e.max=e.min+vt(t)}function WD(e,t,n){kg(e.x,t.x,n.x),kg(e.y,t.y,n.y)}function jg(e,t,n){e.min=t.min-n.min,e.max=e.min+vt(t)}function jo(e,t,n){jg(e.x,t.x,n.x),jg(e.y,t.y,n.y)}function UD(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ge(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ge(n,e,r.max):Math.min(e,n)),e}function Cg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function HD(e,{top:t,left:n,bottom:r,right:i}){return{x:Cg(e.x,n,i),y:Cg(e.y,t,r)}}function Tg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function YD(e,t){return{x:Tg(e.x,t.x),y:Tg(e.y,t.y)}}function GD(e,t){let n=.5;const r=vt(e),i=vt(t);return i>r?n=ki(t.min,t.max-r,e.min):r>i&&(n=ki(e.min,e.max-i,t.min)),mn(0,1,n)}function KD(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Md=.35;function QD(e=Md){return e===!1?e=0:e===!0&&(e=Md),{x:Pg(e,"left","right"),y:Pg(e,"top","bottom")}}function Pg(e,t,n){return{min:Dg(e,t),max:Dg(e,n)}}function Dg(e,t){return typeof e=="number"?e:e[t]||0}const Eg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Jr=()=>({x:Eg(),y:Eg()}),Ag=()=>({min:0,max:0}),be=()=>({x:Ag(),y:Ag()});function kt(e){return[e("x"),e("y")]}function Lw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function XD({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ZD(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Kc(e){return e===void 0||e===1}function Od({scale:e,scaleX:t,scaleY:n}){return!Kc(e)||!Kc(t)||!Kc(n)}function sr(e){return Od(e)||_w(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _w(e){return Lg(e.x)||Lg(e.y)}function Lg(e){return e&&e!=="0%"}function dl(e,t,n){const r=e-n,i=t*r;return n+i}function _g(e,t,n,r,i){return i!==void 0&&(e=dl(e,i,r)),dl(e,n,r)+t}function Rd(e,t=0,n=1,r,i){e.min=_g(e.min,t,n,r,i),e.max=_g(e.max,t,n,r,i)}function Iw(e,{x:t,y:n}){Rd(e.x,t.translate,t.scale,t.originPoint),Rd(e.y,n.translate,n.scale,n.originPoint)}const Ig=.999999999999,Mg=1.0000000000001;function JD(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ei(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Iw(e,a)),r&&sr(o.latestValues)&&ei(e,o.latestValues))}t.x<Mg&&t.x>Ig&&(t.x=1),t.y<Mg&&t.y>Ig&&(t.y=1)}function qr(e,t){e.min=e.min+t,e.max=e.max+t}function Og(e,t,n,r,i=.5){const o=ge(e.min,e.max,i);Rd(e,t,n,o,r)}function ei(e,t){Og(e.x,t.x,t.scaleX,t.scale,t.originX),Og(e.y,t.y,t.scaleY,t.scale,t.originY)}function Mw(e,t){return Lw(ZD(e.getBoundingClientRect(),t))}function qD(e,t,n){const r=Mw(e,n),{scroll:i}=t;return i&&(qr(r.x,i.offset.x),qr(r.y,i.offset.y)),r}const Ow=({current:e})=>e?e.ownerDocument.defaultView:null,eE=new WeakMap;class tE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=be(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(la(d).point)},o=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:v}=this.getProps();if(p&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=GT(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kt(j=>{let g=this.getAxisMotionValue(j).get()||0;if(qt.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const y=m.layout.layoutBox[j];y&&(g=vt(y)*(parseFloat(g)/100))}}this.originPoint[j]=g}),v&&oe.postRender(()=>v(d,f)),Td(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:j}=f;if(h&&this.currentDirection===null){this.currentDirection=nE(j),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,j),this.updateAxis("y",f.point,j),this.visualElement.render(),x&&x(d,f)},s=(d,f)=>this.stop(d,f),c=()=>kt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Pw(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ow(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&oe.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Fa(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=UD(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Xr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=HD(i.layoutBox,n):this.constraints=!1,this.elastic=QD(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&kt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=KD(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Xr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=qD(r,i.root,this.visualElement.getTransformPagePoint());let a=YD(i.layout.layoutBox,o);if(n){const s=n(XD(a));this.hasMutatedConstraints=!!s,s&&(a=Lw(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),c=this.constraints||{},u=kt(d=>{if(!Fa(d,n,this.currentDirection))return;let f=c&&c[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Td(this.visualElement,t),r.start(Wp(t,r,0,n,this.visualElement,!1))}stopAnimation(){kt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){kt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){kt(n=>{const{drag:r}=this.getProps();if(!Fa(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-ge(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Xr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};kt(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const c=s.get();i[a]=GD({min:c,max:c},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),kt(a=>{if(!Fa(a,t,null))return;const s=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];s.set(ge(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;eE.set(this.visualElement,this);const t=this.visualElement.current,n=bo(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Xr(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),oe.read(r);const a=Xo(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(kt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Md,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Fa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function nE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class rE extends qn{constructor(t){super(t),this.removeGroupControls=mt,this.removeListeners=mt,this.controls=new tE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Rg=e=>(t,n)=>{e&&oe.postRender(()=>e(t,n))};class iE extends qn{constructor(){super(...arguments),this.removePointerDownListener=mt}onPointerDown(t){this.session=new Pw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ow(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Rg(t),onStart:Rg(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&oe.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=bo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ng(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Gi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Ng(e,t.target.x),r=Ng(e,t.target.y);return`${n}% ${r}%`}},oE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gn.parse(e);if(i.length>5)return r;const o=Gn.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=c;const u=ge(s,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class aE extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;TT(sE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||oe.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),yp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Rw(e){const[t,n]=y1(),r=S.useContext(up);return l.jsx(aE,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(T1),isPresent:t,safeToRemove:n})}const sE={borderRadius:{...Gi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gi,borderTopRightRadius:Gi,borderBottomLeftRadius:Gi,borderBottomRightRadius:Gi,boxShadow:oE};function lE(e,t,n){const r=Ke(e)?e:Ko(e);return r.start(Wp("",r,t,n)),r.animation}function cE(e){return e instanceof SVGElement&&e.tagName!=="svg"}const uE=(e,t)=>e.depth-t.depth;class dE{constructor(){this.children=[],this.isDirty=!1}add(t){_p(this.children,t),this.isDirty=!0}remove(t){Ip(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(uE),this.isDirty=!1,this.children.forEach(t)}}function fE(e,t){const n=en.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yn(r),e(o-t))};return oe.read(r,!0),()=>Yn(r)}const Nw=["TopLeft","TopRight","BottomLeft","BottomRight"],pE=Nw.length,$g=e=>typeof e=="string"?parseFloat(e):e,Fg=e=>typeof e=="number"||z.test(e);function hE(e,t,n,r,i,o){i?(e.opacity=ge(0,n.opacity!==void 0?n.opacity:1,mE(r)),e.opacityExit=ge(t.opacity!==void 0?t.opacity:1,0,gE(r))):o&&(e.opacity=ge(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<pE;a++){const s=`border${Nw[a]}Radius`;let c=Bg(t,s),u=Bg(n,s);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Fg(c)===Fg(u)?(e[s]=Math.max(ge($g(c),$g(u),r),0),(qt.test(u)||qt.test(c))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=ge(t.rotate||0,n.rotate||0,r))}function Bg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const mE=$w(0,.5,nw),gE=$w(.5,.95,mt);function $w(e,t,n){return r=>r<e?0:r>t?1:n(ki(e,t,r))}function Vg(e,t){e.min=t.min,e.max=t.max}function bt(e,t){Vg(e.x,t.x),Vg(e.y,t.y)}function zg(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Wg(e,t,n,r,i){return e-=t,e=dl(e,1/n,r),i!==void 0&&(e=dl(e,1/i,r)),e}function vE(e,t=0,n=1,r=.5,i,o=e,a=e){if(qt.test(t)&&(t=parseFloat(t),t=ge(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=ge(o.min,o.max,r);e===o&&(s-=t),e.min=Wg(e.min,t,n,s,i),e.max=Wg(e.max,t,n,s,i)}function Ug(e,t,[n,r,i],o,a){vE(e,t[n],t[r],t[i],t.scale,o,a)}const yE=["x","scaleX","originX"],xE=["y","scaleY","originY"];function Hg(e,t,n,r){Ug(e.x,t,yE,n?n.x:void 0,r?r.x:void 0),Ug(e.y,t,xE,n?n.y:void 0,r?r.y:void 0)}function Yg(e){return e.translate===0&&e.scale===1}function Fw(e){return Yg(e.x)&&Yg(e.y)}function Gg(e,t){return e.min===t.min&&e.max===t.max}function wE(e,t){return Gg(e.x,t.x)&&Gg(e.y,t.y)}function Kg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Bw(e,t){return Kg(e.x,t.x)&&Kg(e.y,t.y)}function Qg(e){return vt(e.x)/vt(e.y)}function Xg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class SE{constructor(){this.members=[]}add(t){_p(this.members,t),t.scheduleRender()}remove(t){if(Ip(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function bE(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),v&&(r+=`skewY(${v}deg) `)}const s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||"none"}const lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},lo=typeof window<"u"&&window.MotionDebug!==void 0,Qc=["","X","Y","Z"],kE={visibility:"hidden"},Zg=1e3;let jE=0;function Xc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Vw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Q1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",oe,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Vw(r)}function zw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=jE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,lo&&(lr.totalNodes=lr.resolvedTargetDeltas=lr.recalculatedProjection=0),this.nodes.forEach(PE),this.nodes.forEach(_E),this.nodes.forEach(IE),this.nodes.forEach(DE),lo&&window.MotionDebug.record(lr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new dE)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Mp),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const c=this.eventHandlers.get(a);c&&c.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=cE(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=fE(p,250),Cs.hasAnimatedSinceResize&&(Cs.hasAnimatedSinceResize=!1,this.nodes.forEach(qg))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||$E,{onLayoutAnimationStart:j,onLayoutAnimationComplete:g}=d.getProps(),m=!this.targetLayout||!Bw(this.targetLayout,v)||h,y=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const b={...Dp(x,"layout"),onPlay:j,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||qg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ME),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:c}=this.options;if(s===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Jg);return}this.isUpdating||this.nodes.forEach(AE),this.isUpdating=!1,this.nodes.forEach(LE),this.nodes.forEach(CE),this.nodes.forEach(TE),this.clearAllSnapshots();const s=en.now();Fe.delta=mn(0,1e3/60,s-Fe.timestamp),Fe.timestamp=s,Fe.isProcessing=!0,Bc.update.process(Fe),Bc.preRender.process(Fe),Bc.render.process(Fe),Fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,yp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(EE),this.sharedNodes.forEach(OE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Fw(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||sr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let c=this.removeElementScroll(s);return a&&(c=this.removeTransform(c)),FE(c),{animationId:this.root.animationId,measuredBox:s,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return be();const c=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(BE))){const{scroll:d}=this.root;d&&(qr(c.x,d.offset.x),qr(c.y,d.offset.y))}return c}removeElementScroll(a){var s;const c=be();if(bt(c,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&bt(c,a),qr(c.x,f.offset.x),qr(c.y,f.offset.y))}return c}applyTransform(a,s=!1){const c=be();bt(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ei(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),sr(d.latestValues)&&ei(c,d.latestValues)}return sr(this.latestValues)&&ei(c,this.latestValues),c}removeTransform(a){const s=be();bt(s,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!sr(u.latestValues))continue;Od(u.latestValues)&&u.updateSnapshot();const d=be(),f=u.measurePageBox();bt(d,f),Hg(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return sr(this.latestValues)&&Hg(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Fe.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),jo(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=be(),this.targetWithTransforms=be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),WD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bt(this.target,this.layout.layoutBox),Iw(this.target,this.targetDelta)):bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),jo(this.relativeTargetOrigin,this.target,h.target),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}lo&&lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Od(this.parent.latestValues)||_w(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),c=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Fe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;bt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;JD(this.layoutCorrected,this.treeScale,this.path,c),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=be());const{target:v}=s;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zg(this.prevProjectionDelta.x,this.projectionDelta.x),zg(this.prevProjectionDelta.y,this.projectionDelta.y)),ko(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!Xg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),lo&&lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Jr(),this.projectionDelta=Jr(),this.projectionDeltaWithTransform=Jr()}setAnimationOrigin(a,s=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=Jr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=be(),h=c?c.source:void 0,v=this.layout?this.layout.source:void 0,x=h!==v,j=this.getStack(),g=!j||j.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(NE));this.animationProgress=0;let y;this.mixTargetDelta=b=>{const k=b/1e3;e0(f.x,a.x,k),e0(f.y,a.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),RE(this.relativeTarget,this.relativeTargetOrigin,p,k),y&&wE(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=be()),bt(y,this.relativeTarget)),x&&(this.animationValues=d,hE(d,u,this.latestValues,k,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{Cs.hasAnimatedSinceResize=!0,this.currentAnimation=lE(0,Zg,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Zg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:c,layout:u,latestValues:d}=a;if(!(!s||!c||!u)){if(this!==a&&this.layout&&u&&Ww(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||be();const f=vt(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=vt(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}bt(s,c),ei(s,d),ko(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new SE),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(s=!0),!s)return;const u={};c.z&&Xc("z",a,u,this.animationValues);for(let d=0;d<Qc.length;d++)Xc(`rotate${Qc[d]}`,a,u,this.animationValues),Xc(`skew${Qc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var s,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return kE;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ks(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ks(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!sr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=bE(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y:v}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${v.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in al){if(p[x]===void 0)continue;const{correct:j,applyTo:g}=al[x],m=u.transform==="none"?p[x]:j(p[x],f);if(g){const y=g.length;for(let b=0;b<y;b++)u[g[b]]=m}else u[x]=m}return this.options.layoutId&&(u.pointerEvents=f===this?ks(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Jg),this.root.sharedNodes.clear()}}}function CE(e){e.updateLayout()}function TE(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?kt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=vt(p);p.min=r[f].min,p.max=p.min+h}):Ww(o,n.layoutBox,r)&&kt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=vt(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const s=Jr();ko(s,r,n.layoutBox);const c=Jr();a?ko(c,e.applyTransform(i,!0),n.measuredBox):ko(c,r,n.layoutBox);const u=!Fw(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const v=be();jo(v,n.layoutBox,p.layoutBox);const x=be();jo(x,r,h.layoutBox),Bw(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function PE(e){lo&&lr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function DE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function EE(e){e.clearSnapshot()}function Jg(e){e.clearMeasurements()}function AE(e){e.isLayoutDirty=!1}function LE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function _E(e){e.resolveTargetDelta()}function IE(e){e.calcProjection()}function ME(e){e.resetSkewAndRotation()}function OE(e){e.removeLeadSnapshot()}function e0(e,t,n){e.translate=ge(t.translate,0,n),e.scale=ge(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function t0(e,t,n,r){e.min=ge(t.min,n.min,r),e.max=ge(t.max,n.max,r)}function RE(e,t,n,r){t0(e.x,t.x,n.x,r),t0(e.y,t.y,n.y,r)}function NE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const $E={duration:.45,ease:[.4,0,.1,1]},n0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),r0=n0("applewebkit/")&&!n0("chrome/")?Math.round:mt;function i0(e){e.min=r0(e.min),e.max=r0(e.max)}function FE(e){i0(e.x),i0(e.y)}function Ww(e,t,n){return e==="position"||e==="preserve-aspect"&&!zD(Qg(t),Qg(n),.2)}function BE(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const VE=zw({attachResizeListener:(e,t)=>Xo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zc={current:void 0},Uw=zw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Zc.current){const e=new VE({});e.mount(window),e.setOptions({layoutScroll:!0}),Zc.current=e}return Zc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),zE={pan:{Feature:iE},drag:{Feature:rE,ProjectionNode:Uw,MeasureLayout:Rw}};function o0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&oe.postRender(()=>o(t,la(t)))}class WE extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=zT(t,n=>(o0(this.node,n,"Start"),r=>o0(this.node,r,"End"))))}unmount(){}}class UE extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sa(Xo(this.node.current,"focus",()=>this.onFocus()),Xo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function a0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&oe.postRender(()=>o(t,la(t)))}class HE extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=YT(t,n=>(a0(this.node,n,"Start"),(r,{success:i})=>a0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Nd=new WeakMap,Jc=new WeakMap,YE=e=>{const t=Nd.get(e.target);t&&t(e)},GE=e=>{e.forEach(YE)};function KE({root:e,...t}){const n=e||document;Jc.has(n)||Jc.set(n,{});const r=Jc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(GE,{root:e,...t})),r[i]}function QE(e,t,n){const r=KE(t);return Nd.set(e,n),r.observe(e),()=>{Nd.delete(e),r.unobserve(e)}}const XE={some:0,all:1};class ZE extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:XE[i]},s=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return QE(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(JE(t,n))&&this.startObserver()}unmount(){}}function JE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const qE={inView:{Feature:ZE},tap:{Feature:HE},focus:{Feature:UE},hover:{Feature:WE}},e5={layout:{ProjectionNode:Uw,MeasureLayout:Rw}},$d={current:null},Hw={current:!1};function t5(){if(Hw.current=!0,!!pp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>$d.current=e.matches;e.addListener(t),t()}else $d.current=!1}const n5=[...gw,He,Gn],r5=e=>n5.find(mw(e)),s0=new WeakMap;function i5(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ke(i))e.addValue(r,i);else if(Ke(o))e.addValue(r,Ko(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Ko(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const l0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class o5{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Bp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=en.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,oe.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Bl(n),this.isVariantNode=j1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const v=p[h];c[h]!==void 0&&Ke(v)&&v.set(c[h],!1)}}mount(t){this.current=t,s0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Hw.current||t5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$d.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){s0.delete(this.current),this.projection&&this.projection.unmount(),Yn(this.notifyUpdate),Yn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Ar.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&oe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ji){const n=ji[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<l0.length;r++){const i=l0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=i5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ko(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(pw(i)||iw(i))?i=parseFloat(i):!r5(i)&&Gn.test(n)&&(i=uw(t,n)),this.setBaseTarget(t,Ke(i)?i.get():i)),Ke(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=wp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ke(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Mp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Yw extends o5{constructor(){super(...arguments),this.KeyframeResolver=vw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ke(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function a5(e){return window.getComputedStyle(e)}class s5 extends Yw{constructor(){super(...arguments),this.type="html",this.renderInstance=I1}readValueFromInstance(t,n){if(Ar.has(n)){const r=Fp(n);return r&&r.default||0}else{const r=a5(t),i=(A1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Mw(t,n)}build(t,n,r){kp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Pp(t,n,r)}}class l5 extends Yw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=be}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ar.has(n)){const r=Fp(n);return r&&r.default||0}return n=M1.has(n)?n:vp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return N1(t,n,r)}build(t,n,r){jp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){O1(t,n,r,i)}mount(t){this.isSVGTag=Tp(t.tagName),super.mount(t)}}const c5=(e,t)=>xp(e)?new l5(t):new s5(t,{allowProjection:e!==S.Fragment}),u5=OT({...ID,...qE,...zE,...e5},c5),_=XC(u5),d5=w(_.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,f5=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 8px 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.06) 100%
  );
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 4px 24px -4px rgba(0, 0, 0, 0.4),
    0 8px 48px -8px rgba(42, 157, 143, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  pointer-events: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--specular-highlight);
    pointer-events: none;
  }
`,p5=w(Ux)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,h5=w.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,m5=w.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,g5=w(_.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border: none;
  transition: 
    background var(--timing-small) var(--ease-standard),
    color var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
    color: var(--text-primary);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,v5=w(_.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,y5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"5"}),l.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),l.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),l.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),l.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),l.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),l.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),l.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),l.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),x5=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),w5=()=>{const{isDark:e,toggleTheme:t}=np();return l.jsx(d5,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:l.jsxs(f5,{children:[l.jsx(p5,{to:"/","aria-label":"Go to homepage",children:l.jsx(h5,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),l.jsx(m5,{}),l.jsx(g5,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:l.jsx(Le,{mode:"wait",children:l.jsx(v5,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?l.jsx(x5,{}):l.jsx(y5,{})},e?"moon":"sun")})})]})})},S5=w(_.div)`
  position: relative;
`,b5=w(Ux)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Gw=w(_.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 180px;

  /* Top specular highlight */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--specular-highlight);
    pointer-events: none;
    border-radius: 50%;
  }

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.12) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-medium) var(--ease-standard);
    pointer-events: none;
  }

  &:hover {
    background: var(--glass-bg-hover);
    box-shadow: var(--card-shadow-hover);
  }

  &:hover::after {
    opacity: 1;
    animation: liquidShimmer 1.5s ease infinite;
  }
`,k5=w(_.div)`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--gradient-subtle);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  position: relative;
  
  /* Glow effect */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: var(--gradient);
    border-radius: inherit;
    opacity: 0;
    filter: blur(12px);
    transition: opacity var(--timing-medium) var(--ease-standard);
    z-index: -1;
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--accent);
  }

  ${Gw}:hover &::before {
    opacity: 0.3;
  }
`,j5=w.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,C5={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},T5={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},P5=({title:e,icon:t,to:n})=>l.jsx(S5,{variants:C5,whileHover:"hover",whileTap:"tap",children:l.jsx(b5,{to:n,children:l.jsxs(Gw,{variants:T5,children:[l.jsx(k5,{children:t}),l.jsx(j5,{children:e})]})})}),D5=w.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  padding-top: calc(var(--space-2xl) + 80px);
  padding-bottom: calc(var(--space-2xl) + 80px);
  box-sizing: border-box;

  @media (max-width: 1023px) {
    padding: var(--space-xl);
    padding-top: var(--space-xl);
    padding-bottom: calc(var(--space-xl) + 80px);
  }
`,E5=w(_.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  width: 100%;
  max-width: 280px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 520px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 780px;
  }

  @media (min-width: 1280px) {
    gap: var(--space-xl);
    max-width: 840px;
  }
`,A5={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},L5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),l.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),l.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),l.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),l.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),l.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),l.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),l.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),l.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),l.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),_5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),l.jsx("path",{d:"M1 10h22"}),l.jsx("path",{d:"M17 14h.01"})]}),I5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),M5=[{id:"tax-manager",title:"Tax Manager",icon:l.jsx(L5,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:l.jsx(_5,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:l.jsx(I5,{}),to:"/canvas-manager"}],O5=()=>l.jsx(D5,{children:l.jsx(E5,{variants:A5,initial:"hidden",animate:"visible",children:M5.map(e=>l.jsx(P5,{title:e.title,icon:e.icon,to:e.to},e.id))})}),Kw=w.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;w.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Ts=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],c0=75e3,ti=4,R5=12e5,N5=6e4,u0=5e6,d0=10,$5=12,F5=1800;function wr(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const o=r.slice(-3),a=r.slice(0,-3);if(a.length>0){const s=[];let c=a;for(;c.length>0;)c.length>=2?(s.unshift(c.slice(-2)),c=c.slice(0,-2)):(s.unshift(c),c="");i=s.join(",")+","+o}else i=o;return(t?"-":"")+i}function K(e){return"₹"+wr(e)}function te(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,o]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+wr(parseInt(i))+"."+o}function f0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:wr(e)}function B5(e){for(let t=Ts.length-1;t>=0;t--)if(e>Ts[t].from)return Ts[t].rate;return 0}function V5(e){const t=[];let n=e,r=0;for(const i of Ts){const o=i.from,s=(i.to??1/0)-o;if(n<=0){t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,s),u=c*i.rate/100;t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function z5(e,t){if(t>u0){const r=e*(1+d0/100)*(1+ti/100),i=t-u0,a=(e+i)*(1+ti/100),s=a<r,c=Math.min(r,a),u=c/(1+ti/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:d0,surchargeAmount:d,marginalReliefApplied:s,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(ti/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function p0(e,t,n,r,i,o,a){const s=e*t/100,c=e-s;let u=0;i==="percentage"?u=e*o/100:i==="amount"&&(u=o);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=s*$5/100,p=f):(f=F5*12,p=f));const h=e-p,v=a.map(ae=>({name:ae.name,amount:ae.amount*12})),x=v.reduce((ae,se)=>ae+se.amount,0),j=Math.max(0,h-c0),{slabs:g,totalTax:m}=V5(j);let y=0,b=m;j<=R5&&(y=Math.min(m,N5),b=Math.max(0,m-y));const{surchargeApplicable:k,surchargeRate:T,surchargeAmount:C,marginalReliefApplied:P,taxAfterSurcharge:L,cess:I,totalTax:V}=z5(b,j),N=f+p,$=V,U=f+V+x,D=h-f-V-x,W=D/12,F=h>0?V/h*100:0,E=B5(j);let M=0,O=u;if(u>0&&E>0){let ae=u*E/100;k&&(ae=ae*(1+T/100)),M=ae*(1+ti/100),O=u-M}const B=D+O,Y=B/12;return{baseSalary:e,basicSalary:s,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:h,standardDeduction:c0,additionalDeductions:v,totalAdditionalDeductions:x,taxableIncome:j,slabs:g,taxBeforeSurcharge:m,surchargeApplicable:k,surchargeRate:T,surchargeAmount:C,marginalReliefApplied:P,taxAfterSurcharge:L,cessRate:ti,cess:I,totalTax:V,rebate87A:y,totalPFDeduction:N,totalTaxDeduction:$,totalDeductions:U,netSalaryYearly:D,netSalaryMonthly:W,effectiveTaxRate:F,bonusTaxRate:E,bonusTaxAmount:M,bonusAfterTax:O,totalIncomeYearly:B,totalIncomeMonthly:Y}}function W5(e){const t=p0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=p0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const Up="taxCalculatorInput";function U5(e){localStorage.setItem(Up,JSON.stringify(e))}function H5(){localStorage.removeItem(Up)}function Qw(){const e=localStorage.getItem(Up);if(e)try{return JSON.parse(e)}catch{return null}return null}const Y5={financialYear:"FY 2025-26"},G5=w(_.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--specular-highlight);
    pointer-events: none;
  }
`,Ki=w(_.div)`
  padding: var(--space-xs) 0;
`,Qi=w.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`,K5=w.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,Or=w.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,h0=w.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
`,rr=w.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px; /* Prevents iOS auto-zoom on focus */
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,qc=w.div`
  position: relative;

  &::before {
    content: '₹';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-left: 32px;
  }
`,eu=w.div`
  position: relative;

  &::after {
    content: '%';
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 500;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-right: 32px;
  }
`,m0=w.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`,Xi=w(_.button)`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: var(--radius-md);
  cursor: pointer;
  white-space: nowrap;
`,Q5=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,tu=w(_.div)`
  display: flex;
  gap: var(--space-sm);
  align-items: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`,nu=w(_.button)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 100, 100, 0.1);
  border: 1px solid rgba(255, 100, 100, 0.2);
  border-radius: var(--radius-sm);
  color: #ff6464;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`,X5=w(_.button)`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  border: 1px dashed rgba(var(--accent-rgb), 0.3);
  border-radius: var(--radius-md);
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`,Z5=w.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,J5=w(_.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: var(--gradient);
  background-size: 200% 200%;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,q5=w(_.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,Ba=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,e4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),ru=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Je={type:"spring",stiffness:300,damping:30,mass:.8},t4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Je}},n4={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Je},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Je},opacity:{duration:.1}}}},r4={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Je},exit:{opacity:0,x:-20,transition:{duration:.15}}};function iu(e){const t=e.replace(/[^\d]/g,"");return t?wr(parseInt(t)):""}function Va(e){return parseInt(e.replace(/,/g,""))||0}const i4=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=S.useState(""),[o,a]=S.useState("50"),[s,c]=S.useState("percentage"),[u,d]=S.useState("none"),[f,p]=S.useState(""),[h,v]=S.useState([]),[x,j]=S.useState(""),[g,m]=S.useState(!1),y=S.useRef(!1);S.useEffect(()=>{const D=Qw();D&&(i(wr(D.baseSalary)),a(D.basicPercentage.toString()),c(D.pfType),d(D.bonusType),p(D.bonusValue>0?D.bonusType==="amount"?wr(D.bonusValue):D.bonusValue.toString():""),v(D.additionalDeductions.map(W=>({name:W.name,amount:wr(W.amount)}))),j(D.hikePercentage>0?D.hikePercentage.toString():"")),m(!0)},[]),S.useEffect(()=>{g&&n&&r&&!y.current&&(y.current=!0,setTimeout(()=>{I()},100))},[g,n,r]);const b=D=>{i(iu(D))},k=D=>{p(iu(D))},T=(D,W)=>{const F=[...h];F[D].amount=iu(W),v(F)},C=()=>{v([...h,{name:"",amount:""}])},P=D=>{v(h.filter((W,F)=>F!==D))},L=(D,W)=>{const F=[...h];F[D].name=W,v(F)},I=()=>{const D={baseSalary:Va(r),basicPercentage:parseFloat(o)||50,calculatePF:!0,pfType:s,bonusType:u,bonusValue:u==="amount"?Va(f):parseFloat(f)||0,additionalDeductions:h.filter(W=>W.name&&W.amount).map(W=>({name:W.name,amount:Va(W.amount)})),hikePercentage:parseFloat(x)||0};U5(D),e(D)},V=()=>{i(""),a("50"),c("percentage"),d("none"),p(""),v([]),j(""),H5(),t==null||t()},$=Va(r)>0,U=r||h.length>0||u!=="none"||x;return l.jsxs(G5,{variants:t4,initial:"hidden",animate:"visible",children:[l.jsxs(Ki,{children:[l.jsx(Qi,{children:"Salary Details"}),l.jsxs(K5,{children:[l.jsxs(Or,{$flex:2,children:[l.jsx(h0,{children:"Yearly Base Salary / CTC *"}),l.jsx(qc,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:D=>b(D.target.value)})})]}),l.jsxs(Or,{children:[l.jsx(h0,{children:"Basic %"}),l.jsx(eu,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"40",value:o,onChange:D=>a(D.target.value),min:"0",max:"100"})})]})]})]}),l.jsx(Ba,{}),l.jsxs(Ki,{children:[l.jsx(Qi,{children:"Provident Fund (PF)"}),l.jsxs(m0,{children:[l.jsx(Xi,{$active:s==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"12% of Basic"}),l.jsx(Xi,{$active:s==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"Flat ₹1,800/mo"})]})]}),l.jsx(Ba,{}),l.jsxs(Ki,{children:[l.jsx(Qi,{children:"Bonus (Optional)"}),l.jsxs(m0,{children:[l.jsx(Xi,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"None"}),l.jsx(Xi,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"Percentage"}),l.jsx(Xi,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"Amount"})]}),l.jsx(Le,{initial:!1,children:u!=="none"&&l.jsx(_.div,{initial:"hidden",animate:"visible",exit:"exit",variants:n4,style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:l.jsxs(tu,{children:[l.jsx(Or,{children:u==="percentage"?l.jsx(eu,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:D=>p(D.target.value)})}):l.jsx(qc,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:D=>k(D.target.value)})})}),l.jsx(Le,{children:f&&l.jsx(nu,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Je,children:l.jsx(ru,{})})})]})},"bonus-input")})]}),l.jsx(Ba,{}),l.jsxs(Ki,{children:[l.jsx(Qi,{children:"Additional Monthly Deductions"}),l.jsxs(Q5,{children:[l.jsx(Le,{mode:"popLayout",children:h.map((D,W)=>l.jsxs(tu,{variants:r4,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[l.jsx(Or,{children:l.jsx(rr,{type:"text",placeholder:"Name (e.g., Cab)",value:D.name,onChange:F=>L(W,F.target.value)})}),l.jsx(Or,{children:l.jsx(qc,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:D.amount,onChange:F=>T(W,F.target.value)})})}),l.jsx(nu,{onClick:()=>P(W),whileHover:{scale:1.1},whileTap:{scale:.9},transition:Je,children:l.jsx(ru,{})})]},W))}),l.jsxs(X5,{onClick:C,whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:[l.jsx(e4,{}),"Add Deduction"]})]})]}),l.jsx(Ba,{}),l.jsxs(Ki,{children:[l.jsx(Qi,{children:"Hike / Appraisal (Optional)"}),l.jsxs(tu,{style:{marginBottom:0},children:[l.jsx(Or,{children:l.jsx(eu,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:x,onChange:D=>j(D.target.value),min:"0",max:"200"})})}),l.jsx(Le,{children:x&&l.jsx(nu,{onClick:()=>j(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Je,children:l.jsx(ru,{})})})]})]}),l.jsxs(Z5,{children:[l.jsx(J5,{onClick:I,disabled:!$,whileHover:$?{scale:1.02}:{},whileTap:$?{scale:.98}:{},transition:Je,children:"Calculate Tax"}),l.jsx(Le,{children:U&&l.jsx(q5,{onClick:V,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Je,children:"Reset"})})]})]})},o4=w(_.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,g0=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,za=w.div`
  padding: var(--space-md);
  background: ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.1)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.2)":"var(--border)"};
  border-radius: var(--radius-md);
`,Wa=w.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
`,Ua=w.div`
  font-size: ${({$large:e})=>e?"18px":"15px"};
  font-weight: 600;
  color: var(--text-primary);
`,Ha=w.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  background: rgba(var(--green-rgb), 0.15);
  color: var(--green);
  margin-left: var(--space-sm);
`,Ze=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"var(--green)":"var(--text-tertiary)"};
  margin-top: 2px;
  display: block;
`,Ya=w.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-xs);
`,ou=w.div`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,v0=w.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--green);
  margin-top: var(--space-xs);
`,mr=w(_.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: var(--space-md);
  }
`,y0=w(mr)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,a4=w(mr)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,s4=w(mr)`
  background: linear-gradient(135deg, rgba(var(--green-rgb), 0.12), rgba(var(--accent-rgb), 0.08));
  border-color: rgba(var(--green-rgb), 0.25);
`,ir=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
`,xn=w.h3`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  svg {
    width: 16px;
    height: 16px;
    color: var(--accent);
  }
`,Hp=w(_.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,x0=w(Hp)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,l4=w(Hp)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,c4=w(Hp)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,w0=w.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,u4=w.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,S0=w.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"transparent"};
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--timing-small) var(--ease-standard);

  &:hover {
    color: ${({$active:e})=>e?"white":"var(--text-primary)"};
  }
`,b0=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-sm);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,wn=w.div`
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 0;
  overflow: hidden;
`,Sn=w.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bn=w.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d4=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k0=w(_.div)`
  display: grid;
  grid-template-columns: 1fr 50px 1fr 1fr;
  gap: var(--space-sm);
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--border);
  
  ${({$isHeader:e})=>e&&`
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  `}

  @media (max-width: 480px) {
    grid-template-columns: 1fr 40px 1fr;
    
    & > *:nth-child(3) {
      display: none;
    }
  }
`,kn=w.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"var(--accent)":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f4=w(_.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,Fd=w.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  background: rgba(var(--accent-rgb), 0.1);
  color: var(--accent);
`,p4=w(Fd)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,ut=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-md) 0;
  opacity: 0.6;
`,ce=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-xs) 0;
  gap: var(--space-sm);

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`,ue=w.span`
  font-size: 13px;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  color: ${({$bold:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  padding-left: ${({$indent:e})=>e?"12px":"0"};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,de=w.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"var(--accent)":t?"#e05555":"var(--text-primary)"};
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`,j0=w.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,C0=w(_.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,T0=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,P0=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,D0=w.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,E0=w.span`
  font-size: 11px;
  color: var(--text-secondary);
`,A0=w.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,L0=w(_.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,_0=w.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,h4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),m4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),l.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),l.jsx("path",{d:"M12 17.5v-11"})]}),au=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"})]}),g4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),l.jsx("path",{d:"M12 8v13"}),l.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),l.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),I0=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),l.jsx("polyline",{points:"16 7 22 7 22 13"})]}),v4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},jn={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},y4=({breakdown:e})=>{var f;const[t,n]=S.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",o=Math.max(...e.slabs.map(p=>p.taxInSlab),1),a=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&a.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const s=a.reduce((p,h)=>p+h.value,0),c=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],u=c.reduce((p,h)=>p+h.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${K(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),l.jsxs(o4,{variants:v4,initial:"hidden",animate:"visible",children:[e.postHike&&l.jsxs(y0,{variants:jn,children:[l.jsx(ir,{children:l.jsxs(xn,{children:[l.jsx(I0,{}),"Base Salary (CTC)"]})}),l.jsx(x0,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:K(e.baseSalary)}),l.jsx(ut,{}),l.jsxs(Ya,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(ou,{children:K(e.postHike.baseSalary)}),l.jsxs(v0,{children:["+",K(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),l.jsxs(y0,{variants:jn,children:[l.jsxs(ir,{children:[l.jsxs(xn,{children:[l.jsx(h4,{}),"In-Hand Salary (Base)"]}),l.jsxs(u4,{children:[l.jsx(S0,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),l.jsx(S0,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),l.jsx(x0,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:te(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(ut,{}),l.jsxs(Ya,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(ou,{children:te(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),l.jsxs(v0,{children:["+",K(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&l.jsxs(a4,{variants:jn,children:[l.jsx(ir,{children:l.jsxs(xn,{children:[l.jsx(g4,{}),"Bonus Summary",e.postHike&&l.jsxs(Ha,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsx(l4,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:K(e.bonus)}),l.jsx(w0,{children:"Gross Bonus (before tax)"}),l.jsx(ut,{}),l.jsx(Ya,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),l.jsx(ou,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:te(e.bonusAfterTax)}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(ut,{}),l.jsxs(Ya,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsxs(g0,{style:{marginTop:0},children:[l.jsxs(za,{children:[l.jsx(Wa,{children:"Gross Bonus"}),l.jsx(Ua,{$large:!0,children:K(e.postHike.bonus)}),l.jsxs(Ze,{$positive:!0,children:["+",K(e.postHike.bonus-e.bonus)]})]}),l.jsxs(za,{$highlight:!0,children:[l.jsx(Wa,{children:"In-Hand Bonus"}),l.jsx(Ua,{$large:!0,children:te(e.postHike.bonusAfterTax)}),l.jsxs(Ze,{$positive:!0,children:["+",K(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),l.jsx(ut,{}),l.jsxs(b0,{children:[l.jsxs(wn,{children:[l.jsx(Sn,{children:"Tax Rate"}),l.jsxs(bn,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),l.jsxs(wn,{children:[l.jsx(Sn,{children:"Tax Deducted"}),l.jsxs(bn,{style:{color:"#e05555"},children:["-",te(e.bonusTaxAmount)]})]})]}),l.jsx(L0,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:l.jsxs(_0,{children:["Bonus is taxed at your ",l.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&l.jsxs(s4,{variants:jn,children:[l.jsxs(ir,{children:[l.jsxs(xn,{children:[l.jsx(I0,{}),"Total Combined Income",e.postHike&&l.jsxs(Ha,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsx(Fd,{children:"Yearly"})]}),e.postHike?l.jsxs(g0,{children:[l.jsxs(za,{children:[l.jsx(Wa,{children:"Current"}),l.jsx(Ua,{$large:!0,children:te(e.totalIncomeYearly)})]}),l.jsxs(za,{$highlight:!0,children:[l.jsxs(Wa,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Ua,{$large:!0,children:te(e.postHike.totalIncomeYearly)}),l.jsxs(Ze,{$positive:!0,children:["+",K(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(c4,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:te(e.totalIncomeYearly)}),l.jsx(w0,{children:"Base salary + Bonus (after tax)"})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Base In-Hand (Yearly)"}),l.jsx(de,{children:te(e.netSalaryYearly)})]}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Bonus In-Hand (Yearly)"}),l.jsx(de,{children:te(e.bonusAfterTax)})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Total Combined Income"}),l.jsx(de,{$highlight:!0,children:te(e.totalIncomeYearly)})]})]}),l.jsxs(mr,{variants:jn,children:[l.jsxs(xn,{style:{marginBottom:"var(--space-sm)"},children:[l.jsx(au,{}),"Summary",e.postHike&&l.jsxs(Ha,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsxs(b0,{children:[l.jsxs(wn,{children:[l.jsx(Sn,{children:"Gross Salary"}),l.jsx(bn,{children:K(e.grossSalary*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.grossSalary*r)]})]}),l.jsxs(wn,{children:[l.jsx(Sn,{children:"Total Tax"}),l.jsx(bn,{children:te(e.totalTax*r)}),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.totalTax*r)]})]}),l.jsxs(wn,{children:[l.jsx(Sn,{children:"Employee PF"}),l.jsx(bn,{children:K(e.employeePF*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.employeePF*r)]})]}),l.jsxs(wn,{children:[l.jsx(Sn,{children:"Employer PF"}),l.jsx(bn,{children:K(e.employerPF*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.employerPF*r)]})]}),l.jsxs(wn,{children:[l.jsx(Sn,{children:"Total PF"}),l.jsx(bn,{children:K((e.employeePF+e.employerPF)*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),l.jsxs(wn,{children:[l.jsx(Sn,{children:"Eff. Tax Rate"}),l.jsxs(bn,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&l.jsxs(Ze,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),l.jsx(ut,{}),l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),l.jsx(j0,{children:a.map((p,h)=>l.jsx(C0,{$color:p.color,initial:{width:0},animate:{width:`${p.value/s*100}%`},transition:{delay:.3+h*.1,duration:.5}},h))}),l.jsx(T0,{children:a.map((p,h)=>l.jsxs(P0,{children:[l.jsx(D0,{$color:p.color}),l.jsx(E0,{children:p.label}),l.jsx(A0,{children:K(p.value*r)})]},h))}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(j0,{children:c.map((p,h)=>l.jsx(C0,{$color:p.color,initial:{width:0},animate:{width:`${p.value/u*100}%`},transition:{delay:.5+h*.1,duration:.5}},h))}),l.jsx(T0,{children:c.map((p,h)=>l.jsxs(P0,{children:[l.jsx(D0,{$color:p.color}),l.jsx(E0,{children:p.label}),l.jsx(A0,{children:K(p.value*r)})]},h))})]}),d.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(ut,{}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,h)=>l.jsx(L0,{children:l.jsx(_0,{dangerouslySetInnerHTML:{__html:p}})},h))})]})]}),l.jsxs(mr,{variants:jn,children:[l.jsx(ir,{children:l.jsxs(xn,{children:[l.jsx(m4,{}),"Tax Slabs",l.jsx(Fd,{children:Y5.financialYear}),e.postHike&&l.jsxs(Ha,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsxs(d4,{children:[l.jsxs(k0,{$isHeader:!0,children:[l.jsx(kn,{children:"Slab"}),l.jsx(kn,{$align:"center",children:"Rate"}),l.jsx(kn,{$align:"right",children:"Amount"}),l.jsx(kn,{$align:"right",children:"Tax"})]}),l.jsx(Le,{children:e.slabs.map((p,h)=>{var v,x;return l.jsxs(k0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:h*.03},children:[l.jsxs(kn,{children:[f0(p.from)," - ",f0(p.to),p.taxableInSlab>0&&l.jsx(f4,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/o*100,8)}%`},transition:{delay:.2+h*.03,duration:.4}})]}),l.jsxs(kn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),l.jsxs(kn,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?K(p.taxableInSlab):"-",e.postHike&&((v=e.postHike.slabs[h])==null?void 0:v.taxableInSlab)>0&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.slabs[h].taxableInSlab)]})]}),l.jsxs(kn,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?K(p.taxInSlab):"-",e.postHike&&((x=e.postHike.slabs[h])==null?void 0:x.taxInSlab)>0&&l.jsxs(Ze,{children:["→ ",K(e.postHike.slabs[h].taxInSlab)]})]})]},h)})})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Tax Before Surcharge"}),l.jsxs(de,{children:[te(e.taxBeforeSurcharge),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Section 87A Rebate"}),l.jsxs(de,{$negative:!0,children:["-",K(e.rebate87A)]})]}),e.surchargeApplicable&&l.jsxs(ce,{children:[l.jsxs(ue,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&l.jsx(p4,{children:"Marginal Relief"})]}),l.jsxs(de,{children:[te(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&l.jsxs(Ze,{children:["→ ",te(e.postHike.surchargeAmount)]})]})]}),l.jsxs(ce,{children:[l.jsxs(ue,{children:["Cess (",e.cessRate,"%)"]}),l.jsxs(de,{children:[te(e.cess),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.cess)]})]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Total Tax"}),l.jsxs(de,{$highlight:!0,children:[te(e.totalTax),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.totalTax)]})]})]})]}),l.jsxs(mr,{variants:jn,children:[l.jsx(ir,{children:l.jsxs(xn,{children:[l.jsx(au,{}),"Yearly Breakdown"]})}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Base Salary (CTC)"}),l.jsx(de,{children:K(e.baseSalary)})]}),e.employerPF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employer PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employerPF)]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Gross Salary"}),l.jsx(de,{children:K(e.grossSalary)})]}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Standard Deduction"}),l.jsxs(de,{$negative:!0,children:["-",K(e.standardDeduction)]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Taxable Income"}),l.jsx(de,{children:K(e.taxableIncome)})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Income Tax"}),l.jsxs(de,{$negative:!0,children:["-",te(e.totalTax)]})]}),e.employeePF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employee PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employeePF)]})]}),e.additionalDeductions.map((p,h)=>l.jsxs(ce,{children:[l.jsxs(ue,{children:["Less: ",p.name]}),l.jsxs(de,{$negative:!0,children:["-",K(p.amount)]})]},h)),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Net In-Hand (Yearly)"}),l.jsx(de,{$highlight:!0,children:te(e.netSalaryYearly)})]})]}),l.jsxs(mr,{variants:jn,children:[l.jsx(ir,{children:l.jsxs(xn,{children:[l.jsx(au,{}),"Monthly Breakdown"]})}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Base Salary (CTC)"}),l.jsx(de,{children:K(e.baseSalary/12)})]}),e.employerPF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employer PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employerPF/12)]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Gross Salary"}),l.jsx(de,{children:K(e.grossSalary/12)})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Income Tax"}),l.jsxs(de,{$negative:!0,children:["-",te(e.totalTax/12)]})]}),e.employeePF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employee PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employeePF/12)]})]}),e.additionalDeductions.map((p,h)=>l.jsxs(ce,{children:[l.jsxs(ue,{children:["Less: ",p.name]}),l.jsxs(de,{$negative:!0,children:["-",K(p.amount/12)]})]},h)),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Net In-Hand (Monthly)"}),l.jsx(de,{$highlight:!0,children:te(e.netSalaryMonthly)})]})]})]})},x4=w(_.div)`
  min-height: 100vh;
  padding-top: calc(var(--space-xl) + 80px);
  padding-bottom: var(--space-2xl);

  @media (max-width: 1023px) {
    padding-top: calc(var(--space-lg) + 80px);
    padding-bottom: var(--space-lg);
  }

  @media (max-width: 640px) {
    padding-top: var(--space-lg);
    padding-bottom: calc(var(--space-lg) + 80px);
  }
`,w4=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    grid-template-columns: 360px 1fr;
    align-items: start;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 400px 1fr;
  }
`,S4=w(_.div)`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,b4=w(_.div)`
  min-width: 0;
`,k4={type:"spring",stiffness:300,damping:30,mass:.8},j4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},M0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:k4}},C4=()=>{const[e,t]=S.useState(null),[n,r]=S.useState(!1);S.useEffect(()=>{const a=Qw();a&&a.baseSalary>0&&r(!0)},[]);const i=S.useCallback(a=>{const s=W5(a);t(s),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),o=S.useCallback(()=>{t(null)},[]);return l.jsx(x4,{variants:j4,initial:"hidden",animate:"visible",children:l.jsx(Kw,{$maxWidth:"wide",children:l.jsxs(w4,{children:[l.jsx(S4,{variants:M0,children:l.jsx(i4,{onCalculate:i,onReset:o,autoCalculate:n})}),l.jsx(b4,{id:"results",variants:M0,children:l.jsx(Le,{mode:"wait",children:e&&l.jsx(y4,{breakdown:e},"results")})})]})})})},Sr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],Xw="expense-manager-transactions",Zw="expense-manager-initial-balances",Jw="expense-manager-initial-cc-bills",qw="expense-manager-cc-limits",eS={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function su(e){localStorage.setItem(Xw,JSON.stringify(e))}function T4(){const e=localStorage.getItem(Xw);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function O0(e){localStorage.setItem(Zw,JSON.stringify(e))}function P4(){const e=localStorage.getItem(Zw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function R0(e){localStorage.setItem(Jw,JSON.stringify(e))}function D4(){const e=localStorage.getItem(Jw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function N0(e){localStorage.setItem(qw,JSON.stringify(e))}function E4(){const e=localStorage.getItem(qw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function tn(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function tS(e){return new Date(e+"T00:00:00")}function $0(e){return e===tn(new Date)}function A4(e){return e<tn(new Date)}function L4(e,t){if(!e.statementDate)return"";const n=tS(t),r=n.getFullYear(),i=n.getMonth(),o=n.getDate();let a=r,s=i;o<e.statementDate&&(s-=1,s<0&&(s=11,a-=1));const c=new Date(a,s,e.statementDate);return tn(c)}function _4(e,t){const n=eS[e];if(!n)return"";const r=tS(t),i=r.getFullYear(),o=r.getMonth(),a=r.getDate();let s=i,c=o;a<n&&(c-=1,c<0&&(c=11,s-=1));const u=new Date(s,c,n);return tn(u)}function I4(e,t,n,r){const i=_4(e.id,n),o=t.filter(x=>x.date<=n&&x.accountId===e.id),a=o.filter(x=>x.type==="credit_card_spend"&&x.date<i).reduce((x,j)=>x+j.amount,0),s=o.filter(x=>x.type==="credit_card_spend"&&x.date>=i).reduce((x,j)=>x+j.amount,0),c=o.filter(x=>x.type==="cc_payment").reduce((x,j)=>x+j.amount,0),u=r[e.id]||0,d=a,f=u+s;let p=d,h=f,v=c;if(v>0){const x=Math.min(v,p);p-=x,v-=x}return v>0&&(h=Math.max(0,h-v)),{account:e,billDue:p,unbilled:h,totalOutstanding:p+h,cycleStart:i}}function M4(e,t,n,r,i={}){const o=t.filter(s=>s.date<=n&&(s.accountId===e.id||s.linkedAccountId===e.id));let a=0;if(e.type==="bank"){a=r[e.id]||0;for(const s of o)s.accountId===e.id&&(s.type==="bank_credit"?a+=s.amount:s.type==="bank_debit"&&(a-=s.amount)),s.linkedAccountId===e.id&&s.type==="cc_payment"&&(a-=s.amount);return{account:e,balance:a}}else{a=-(i[e.id]||0);for(const f of o)f.accountId===e.id&&(f.type==="credit_card_spend"?a-=f.amount:f.type==="cc_payment"&&(a+=f.amount));const c=L4(e,n),d=o.filter(f=>f.date>c&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:a,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,a))}}}function O4(e,t,n,r={}){return Sr.map(i=>M4(i,e,t,n,r))}function R4(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function N4(e,t,n,r,i,o){return{id:R4(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:o,createdAt:new Date().toISOString()}}function $t(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function $4(e){return Sr.find(t=>t.id===e)}function nS(){return Sr.filter(e=>e.type==="bank")}function Yp(){return Sr.filter(e=>e.type==="credit_card")}function F4(e,t,n,r={}){const i={version:"1.1",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n,ccLimits:r};return JSON.stringify(i,null,2)}function B4(e,t,n,r={}){const i=F4(e,t,n,r),o=new Blob([i],{type:"application/json"}),a=URL.createObjectURL(o),s=document.createElement("a"),c=new Date().toISOString().split("T")[0];s.href=a,s.download=`expense-backup-${c}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a)}function V4(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null||t.ccLimits!==void 0&&(typeof t.ccLimits!="object"||t.ccLimits===null))return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function z4(e){try{const t=JSON.parse(e);return V4(t)?t:null}catch{return null}}function rS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=rS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Wl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=rS(e))&&(r&&(r+=" "),r+=t);return r}const W4=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),o=Object.getOwnPropertyDescriptor(t,n);!U4(i,o)&&r||Object.defineProperty(e,n,o)},U4=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},H4=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},Y4=(e,t)=>`/* Wrapped ${e}*/
${t}`,G4=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),K4=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Q4=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=Y4.bind(null,r,t.toString());Object.defineProperty(i,"name",K4);const{writable:o,enumerable:a,configurable:s}=G4;Object.defineProperty(e,"toString",{value:i,writable:o,enumerable:a,configurable:s})};function X4(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))W4(e,t,i,n);return H4(e,t),Q4(e,t,r),e}const Ga=2147483647,Z4=new WeakMap,lu=new WeakMap,J4=new WeakMap;function q4(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function iS(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>Ga)throw new TypeError(`The \`maxAge\` option cannot exceed ${Ga}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...o){var d;const a=t?t(o):o[0],s=q4(n,a);if(s)return s.data;const c=e.apply(this,o),u=typeof r=="function"?r(...o):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>Ga)throw new TypeError(`The \`maxAge\` function result cannot exceed ${Ga}.`)}if(n.set(a,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var h;n.delete(a),(h=lu.get(i))==null||h.delete(f)},u);(d=f.unref)==null||d.call(f);const p=lu.get(i)??new Set;p.add(f),lu.set(i,p)}return c};return X4(i,e,{ignoreNonConfigurable:!0}),Z4.set(i,n),J4.set(i,t??(o=>o[0])),i}function eA(e){return typeof e=="string"}function tA(e,t,n){return n.indexOf(e)===t}function nA(e){return e.toLowerCase()===e}function F0(e){return e.indexOf(",")===-1?e:e.split(",")}function Bd(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Bd(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Bd(n)}if(e.indexOf("-")===-1||!nA(e))return e;var i=e.split("-"),o=i[0],a=i[1],s=a===void 0?"":a;return"".concat(o,"-").concat(s.toUpperCase())}function rA(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,o=i===void 0?"en-US":i,a=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],c=[],u=0,d=s;u<d.length;u++){var f=d[u];c=c.concat(F0(f))}var p=navigator.language,h=p&&F0(p);a=a.concat(c,h)}return r&&a.push(o),a.filter(eA).map(Bd).filter(tA)}var iA=iS(rA,{cacheKey:JSON.stringify});function oA(e){return iA(e)[0]||null}var oS=iS(oA,{cacheKey:JSON.stringify});function vn(e,t,n){return function(i,o=n){const a=e(i)+o;return t(a)}}function ca(e){return function(n){return new Date(e(n).getTime()-1)}}function ua(e,t){return function(r){return[e(r),t(r)]}}function pe(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function er(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function Ul(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function Ri(e){const t=pe(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const aA=vn(pe,Ri,-100),aS=vn(pe,Ri,100),Gp=ca(aS),sA=vn(pe,Gp,-100),sS=ua(Ri,Gp);function tr(e){const t=pe(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const lS=vn(pe,tr,-10),Kp=vn(pe,tr,10),Hl=ca(Kp),cS=vn(pe,Hl,-10),uS=ua(tr,Hl);function Ni(e){const t=pe(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const dS=vn(pe,Ni,-1),Qp=vn(pe,Ni,1),Yl=ca(Qp),fS=vn(pe,Yl,-1),lA=ua(Ni,Yl);function Xp(e,t){return function(r,i=t){const o=pe(r),a=er(r)+i,s=new Date;return s.setFullYear(o,a,1),s.setHours(0,0,0,0),e(s)}}function Lr(e){const t=pe(e),n=er(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const pS=Xp(Lr,-1),Zp=Xp(Lr,1),da=ca(Zp),hS=Xp(da,-1),cA=ua(Lr,da);function uA(e,t){return function(r,i=t){const o=pe(r),a=er(r),s=Ul(r)+i,c=new Date;return c.setFullYear(o,a,s),c.setHours(0,0,0,0),e(c)}}function fa(e){const t=pe(e),n=er(e),r=Ul(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const dA=uA(fa,1),Jp=ca(dA),fA=ua(fa,Jp);function mS(e){return Ul(da(e))}var Be={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},pA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},qp=[0,1,2,3,4,5,6],cu=new Map;function hA(e){return function(n,r){var i=n||oS();cu.has(i)||cu.set(i,new Map);var o=cu.get(i);return o.has(e)||o.set(e,new Intl.DateTimeFormat(i||void 0,e).format),o.get(e)(r)}}function mA(e){var t=new Date(e);return new Date(t.setHours(12))}function _r(e){return function(t,n){return hA(e)(t,mA(n))}}var gA={day:"numeric"},vA={day:"numeric",month:"long",year:"numeric"},yA={month:"long"},xA={month:"long",year:"numeric"},wA={weekday:"short"},SA={weekday:"long"},bA={year:"numeric"},kA=_r(gA),jA=_r(vA),CA=_r(yA),gS=_r(xA),TA=_r(wA),PA=_r(SA),Gl=_r(bA),DA=qp[0],EA=qp[5],B0=qp[6];function Zo(e,t){t===void 0&&(t=Be.ISO_8601);var n=e.getDay();switch(t){case Be.ISO_8601:return(n+6)%7;case Be.ISLAMIC:return(n+1)%7;case Be.HEBREW:case Be.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function AA(e){var t=Ri(e);return pe(t)}function LA(e){var t=tr(e);return pe(t)}function Vd(e,t){t===void 0&&(t=Be.ISO_8601);var n=pe(e),r=er(e),i=e.getDate()-Zo(e,t);return new Date(n,r,i)}function _A(e,t){t===void 0&&(t=Be.ISO_8601);var n=t===Be.GREGORY?Be.GREGORY:Be.ISO_8601,r=Vd(e,t),i=pe(e)+1,o,a;do o=new Date(i,0,n===Be.ISO_8601?4:1),a=Vd(o,t),i-=1;while(e<a);return Math.round((r.getTime()-a.getTime())/(864e5*7))+1}function br(e,t){switch(e){case"century":return Ri(t);case"decade":return tr(t);case"year":return Ni(t);case"month":return Lr(t);case"day":return fa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function IA(e,t){switch(e){case"century":return aA(t);case"decade":return lS(t);case"year":return dS(t);case"month":return pS(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function vS(e,t){switch(e){case"century":return aS(t);case"decade":return Kp(t);case"year":return Qp(t);case"month":return Zp(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function MA(e,t){switch(e){case"decade":return lS(t,-100);case"year":return dS(t,-10);case"month":return pS(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function OA(e,t){switch(e){case"decade":return Kp(t,100);case"year":return Qp(t,10);case"month":return Zp(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function yS(e,t){switch(e){case"century":return Gp(t);case"decade":return Hl(t);case"year":return Yl(t);case"month":return da(t);case"day":return Jp(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function RA(e,t){switch(e){case"century":return sA(t);case"decade":return cS(t);case"year":return fS(t);case"month":return hS(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function NA(e,t){switch(e){case"decade":return cS(t,-100);case"year":return fS(t,-10);case"month":return hS(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function V0(e,t){switch(e){case"century":return sS(t);case"decade":return uS(t);case"year":return lA(t);case"month":return cA(t);case"day":return fA(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function $A(e,t,n){var r=[t,n].sort(function(i,o){return i.getTime()-o.getTime()});return[br(e,r[0]),yS(e,r[1])]}function xS(e,t,n){return n.map(function(r){return(t||Gl)(e,r)}).join(" – ")}function FA(e,t,n){return xS(e,t,sS(n))}function wS(e,t,n){return xS(e,t,uS(n))}function BA(e){return e.getDay()===new Date().getDay()}function SS(e,t){t===void 0&&(t=Be.ISO_8601);var n=e.getDay();switch(t){case Be.ISLAMIC:case Be.HEBREW:return n===EA||n===B0;case Be.ISO_8601:case Be.GREGORY:return n===B0||n===DA;default:throw new Error("Unsupported calendar type.")}}var Yt="react-calendar__navigation";function VA(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?gS:r,o=e.formatYear,a=o===void 0?Gl:o,s=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,h=e.navigationLabel,v=e.next2AriaLabel,x=v===void 0?"":v,j=e.next2Label,g=j===void 0?"»":j,m=e.nextAriaLabel,y=m===void 0?"":m,b=e.nextLabel,k=b===void 0?"›":b,T=e.prev2AriaLabel,C=T===void 0?"":T,P=e.prev2Label,L=P===void 0?"«":P,I=e.prevAriaLabel,V=I===void 0?"":I,N=e.prevLabel,$=N===void 0?"‹":N,U=e.setActiveStartDate,D=e.showDoubleView,W=e.view,F=e.views,E=F.indexOf(W)>0,M=W!=="century",O=IA(W,t),B=M?MA(W,t):void 0,Y=vS(W,t),ae=M?OA(W,t):void 0,se=function(){if(O.getFullYear()<0)return!0;var Ee=RA(W,t);return u&&u>=Ee}(),G=M&&function(){if(B.getFullYear()<0)return!0;var Ee=NA(W,t);return u&&u>=Ee}(),le=c&&c<Y,Re=M&&c&&c<ae;function Xe(){U(O,"prev")}function De(){U(B,"prev2")}function Wt(){U(Y,"next")}function wt(){U(ae,"next2")}function Ne(Ee){var $i=function(){switch(W){case"century":return FA(s,a,Ee);case"decade":return wS(s,a,Ee);case"year":return a(s,Ee);case"month":return i(s,Ee);default:throw new Error("Invalid view: ".concat(W,"."))}}();return h?h({date:Ee,label:$i,locale:s||oS()||void 0,view:W}):$i}function Xl(){var Ee="".concat(Yt,"__label");return l.jsxs("button",{"aria-label":f,"aria-live":p,className:Ee,disabled:!E,onClick:n,style:{flexGrow:1},type:"button",children:[l.jsx("span",{className:"".concat(Ee,"__labelText ").concat(Ee,"__labelText--from"),children:Ne(t)}),D?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"".concat(Ee,"__divider"),children:" – "}),l.jsx("span",{className:"".concat(Ee,"__labelText ").concat(Ee,"__labelText--to"),children:Ne(Y)})]}):null]})}return l.jsxs("div",{className:Yt,children:[L!==null&&M?l.jsx("button",{"aria-label":C,className:"".concat(Yt,"__arrow ").concat(Yt,"__prev2-button"),disabled:G,onClick:De,type:"button",children:L}):null,$!==null&&l.jsx("button",{"aria-label":V,className:"".concat(Yt,"__arrow ").concat(Yt,"__prev-button"),disabled:se,onClick:Xe,type:"button",children:$}),Xl(),k!==null&&l.jsx("button",{"aria-label":y,className:"".concat(Yt,"__arrow ").concat(Yt,"__next-button"),disabled:le,onClick:Wt,type:"button",children:k}),g!==null&&M?l.jsx("button",{"aria-label":x,className:"".concat(Yt,"__arrow ").concat(Yt,"__next2-button"),disabled:Re,onClick:wt,type:"button",children:g}):null]})}var ni=function(){return ni=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ni.apply(this,arguments)},zA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function z0(e){return"".concat(e,"%")}function eh(e){var t=e.children,n=e.className,r=e.count,i=e.direction,o=e.offset,a=e.style,s=e.wrap,c=zA(e,["children","className","count","direction","offset","style","wrap"]);return l.jsx("div",ni({className:n,style:ni({display:"flex",flexDirection:i,flexWrap:s?"wrap":"nowrap"},a)},c,{children:S.Children.map(t,function(u,d){var f=o&&d===0?z0(100*o/r):null;return S.cloneElement(u,ni(ni({},u.props),{style:{flexBasis:z0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function WA(e,t,n){return t&&t>e?t:n&&n<e?n:e}function Jo(e,t){return t[0]<=e&&t[1]>=e}function UA(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function bS(e,t){return Jo(e[0],t)||Jo(e[1],t)}function W0(e,t,n){var r=bS(t,e),i=[];if(r){i.push(n);var o=Jo(e[0],t),a=Jo(e[1],t);o&&i.push("".concat(n,"Start")),a&&i.push("".concat(n,"End")),o&&a&&i.push("".concat(n,"BothEnds"))}return i}function HA(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function YA(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",o=[i];if(!n)return o;var a=new Date,s=function(){if(Array.isArray(n))return n;var h=e.dateType;if(!h)throw new Error("dateType is required when date is not an array of two dates");return V0(h,n)}();if(Jo(a,s)&&o.push("".concat(i,"--now")),!t||!HA(t))return o;var c=function(){if(Array.isArray(t))return t;var h=e.valueType;if(!h)throw new Error("valueType is required when value is not an array of two dates");return V0(h,t)}();UA(c,s)?o.push("".concat(i,"--active")):bS(c,s)&&o.push("".concat(i,"--hasActive"));var u=W0(c,s,"".concat(i,"--range"));o.push.apply(o,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=W0(f,s,"".concat(i,"--hover"));o.push.apply(o,p)}return o}function Kl(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,o=e.dateType,a=e.end,s=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,h=e.value,v=e.valueType,x=[],j=d;j<=a;j+=p){var g=i(j);x.push(u({classes:YA({date:g,dateType:o,hover:s,value:h,valueType:v}),date:g}))}return l.jsx(eh,{className:t,count:r,offset:c,wrap:!0,children:x})}function Ql(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,o=e.formatAbbr,a=e.locale,s=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,h=e.style,v=e.tileClassName,x=e.tileContent,j=e.tileDisabled,g=e.view,m=S.useMemo(function(){var b={activeStartDate:t,date:i,view:g};return typeof v=="function"?v(b):v},[t,i,v,g]),y=S.useMemo(function(){var b={activeStartDate:t,date:i,view:g};return typeof x=="function"?x(b):x},[t,i,x,g]);return l.jsxs("button",{className:Wl(r,m),disabled:u&&d(u)>i||s&&c(s)<i||(j==null?void 0:j({activeStartDate:t,date:i,view:g})),onClick:f?function(b){return f(i,b)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:h,type:"button",children:[o?l.jsx("abbr",{"aria-label":o(a,i),children:n}):n,y]})}var zd=function(){return zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zd.apply(this,arguments)},GA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},U0="react-calendar__century-view__decades__decade";function KA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,o=i===void 0?Gl:i,a=GA(e,["classes","currentCentury","formatYear"]),s=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(U0),Ri(s).getFullYear()!==r&&u.push("".concat(U0,"--neighboringCentury")),l.jsx(Ql,zd({},a,{classes:u,maxDateTransform:Hl,minDateTransform:tr,view:"century",children:wS(c,o,s)}))}var Wd=function(){return Wd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wd.apply(this,arguments)},H0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function QA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,o=e.valueType,a=H0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),s=AA(t),c=s+(r?119:99);return l.jsx(Kl,{className:"react-calendar__century-view__decades",dateTransform:tr,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=H0(u,["date"]);return l.jsx(KA,Wd({},a,f,{activeStartDate:t,currentCentury:s,date:d}),d.getTime())},start:s,step:10,value:i,valueType:o})}var Ud=function(){return Ud=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ud.apply(this,arguments)};function XA(e){function t(){return l.jsx(QA,Ud({},e))}return l.jsx("div",{className:"react-calendar__century-view",children:t()})}var Hd=function(){return Hd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hd.apply(this,arguments)},ZA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Y0="react-calendar__decade-view__years__year";function JA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,o=i===void 0?Gl:i,a=ZA(e,["classes","currentDecade","formatYear"]),s=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(Y0),tr(s).getFullYear()!==r&&u.push("".concat(Y0,"--neighboringDecade")),l.jsx(Ql,Hd({},a,{classes:u,maxDateTransform:Yl,minDateTransform:Ni,view:"decade",children:o(c,s)}))}var Yd=function(){return Yd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yd.apply(this,arguments)},G0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function qA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,o=e.valueType,a=G0(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),s=LA(t),c=s+(r?11:9);return l.jsx(Kl,{className:"react-calendar__decade-view__years",dateTransform:Ni,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=G0(u,["date"]);return l.jsx(JA,Yd({},a,f,{activeStartDate:t,currentDecade:s,date:d}),d.getTime())},start:s,value:i,valueType:o})}var Gd=function(){return Gd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gd.apply(this,arguments)};function eL(e){function t(){return l.jsx(qA,Gd({},e))}return l.jsx("div",{className:"react-calendar__decade-view",children:t()})}var Kd=function(){return Kd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kd.apply(this,arguments)},tL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},K0=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},nL="react-calendar__year-view__months__month";function rL(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?CA:r,o=e.formatMonthYear,a=o===void 0?gS:o,s=tL(e,["classes","formatMonth","formatMonthYear"]),c=s.date,u=s.locale;return l.jsx(Ql,Kd({},s,{classes:K0(K0([],n,!0),[nL],!1),formatAbbr:a,maxDateTransform:da,minDateTransform:Lr,view:"year",children:i(u,c)}))}var Qd=function(){return Qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qd.apply(this,arguments)},Q0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function iL(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,o=Q0(e,["activeStartDate","hover","value","valueType"]),a=0,s=11,c=pe(t);return l.jsx(Kl,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),Lr(d)},dateType:"month",end:s,hover:n,renderTile:function(u){var d=u.date,f=Q0(u,["date"]);return l.jsx(rL,Qd({},o,f,{activeStartDate:t,date:d}),d.getTime())},start:a,value:r,valueType:i})}var Xd=function(){return Xd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xd.apply(this,arguments)};function oL(e){function t(){return l.jsx(iL,Xd({},e))}return l.jsx("div",{className:"react-calendar__year-view",children:t()})}var Zd=function(){return Zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zd.apply(this,arguments)},aL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},uu="react-calendar__month-view__days__day";function sL(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,o=e.formatDay,a=o===void 0?kA:o,s=e.formatLongDate,c=s===void 0?jA:s,u=aL(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(uu),SS(d,t)&&p.push("".concat(uu,"--weekend")),d.getMonth()!==i&&p.push("".concat(uu,"--neighboringMonth")),l.jsx(Ql,Zd({},u,{classes:p,formatAbbr:c,maxDateTransform:Jp,minDateTransform:fa,view:"month",children:a(f,d)}))}var Jd=function(){return Jd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jd.apply(this,arguments)},X0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function lL(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,a=e.value,s=e.valueType,c=X0(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=pe(t),d=er(t),f=i||o,p=Zo(t,n),h=f?0:p,v=(f?-p:0)+1,x=function(){if(i)return v+6*7-1;var j=mS(t);if(o){var g=new Date;g.setFullYear(u,d,j),g.setHours(0,0,0,0);var m=7-Zo(g,n)-1;return j+m}return j}();return l.jsx(Kl,{className:"react-calendar__month-view__days",count:7,dateTransform:function(j){var g=new Date;return g.setFullYear(u,d,j),fa(g)},dateType:"day",hover:r,end:x,renderTile:function(j){var g=j.date,m=X0(j,["date"]);return l.jsx(sL,Jd({},c,m,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:h,start:v,value:a,valueType:s})}var kS="react-calendar__month-view__weekdays",du="".concat(kS,"__weekday");function cL(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?TA:n,i=e.formatWeekday,o=i===void 0?PA:i,a=e.locale,s=e.onMouseLeave,c=new Date,u=Lr(c),d=pe(u),f=er(u),p=[],h=1;h<=7;h+=1){var v=new Date(d,f,h-Zo(u,t)),x=o(a,v);p.push(l.jsx("div",{className:Wl(du,BA(v)&&"".concat(du,"--current"),SS(v,t)&&"".concat(du,"--weekend")),children:l.jsx("abbr",{"aria-label":x,title:x,children:r(a,v).replace(".","")})},h))}return l.jsx(eh,{className:kS,count:7,onFocus:s,onMouseOver:s,children:p})}var fl=function(){return fl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fl.apply(this,arguments)},Z0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},J0="react-calendar__tile";function uL(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=l.jsx("span",{children:n});if(t){var i=e.date,o=e.onClickWeekNumber,a=e.weekNumber,s=Z0(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("button",fl({},s,{className:J0,onClick:function(c){return o(a,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=Z0(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("div",fl({},s,{className:J0,children:r}))}}function dL(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,o=e.showFixedNumberOfWeeks,a=function(){if(o)return 6;var u=mS(t),d=Zo(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),s=function(){for(var u=pe(t),d=er(t),f=Ul(t),p=[],h=0;h<a;h+=1)p.push(Vd(new Date(u,d,f+h*7),n));return p}(),c=s.map(function(u){return _A(u,n)});return l.jsx(eh,{className:"react-calendar__month-view__weekNumbers",count:a,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=s[d];if(!f)throw new Error("date is not defined");return l.jsx(uL,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var qd=function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)},fL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function pL(e){if(e)for(var t=0,n=Object.entries(pA);t<n.length;t++){var r=n[t],i=r[0],o=r[1];if(o.includes(e))return i}return Be.ISO_8601}function hL(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,o=e.calendarType,a=o===void 0?pL(n):o,s=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=fL(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return l.jsx(cL,{calendarType:a,formatShortWeekday:s,formatWeekday:c,locale:n,onMouseLeave:r})}function h(){return d?l.jsx(dL,{activeStartDate:t,calendarType:a,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function v(){return l.jsx(lL,qd({calendarType:a},f))}var x="react-calendar__month-view";return l.jsx("div",{className:Wl(x,d?"".concat(x,"--weekNumbers"):""),children:l.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[h(),l.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),v()]})]})})}var ri=function(){return ri=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ri.apply(this,arguments)},Ka="react-calendar",Ps=["century","decade","year","month"],mL=["decade","year","month","day"],th=new Date;th.setFullYear(1,0,1);th.setHours(0,0,0,0);var gL=new Date(864e13);function co(e){return e instanceof Date?e:new Date(e)}function jS(e,t){return Ps.slice(Ps.indexOf(e),Ps.indexOf(t)+1)}function vL(e,t,n){var r=jS(t,n);return r.indexOf(e)!==-1}function nh(e,t,n){return e&&vL(e,t,n)?e:n}function CS(e){var t=Ps.indexOf(e);return mL[t]}function yL(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=co(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function TS(e,t){var n=e.value,r=e.minDate,i=e.maxDate,o=e.maxDetail,a=yL(n,t);if(!a)return null;var s=CS(o),c=function(){switch(t){case 0:return br(s,a);case 1:return yS(s,a);default:throw new Error("Invalid index value: ".concat(t))}}();return WA(c,r,i)}var rh=function(e){return TS(e,0)},PS=function(e){return TS(e,1)},xL=function(e){return[rh,PS].map(function(t){return t(e)})};function DS(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,o=e.value,a=e.view,s=nh(a,i,n),c=rh({value:o,minDate:r,maxDate:t,maxDetail:n})||new Date;return br(s,c)}function wL(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,o=e.maxDate,a=e.maxDetail,s=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=nh(d,c,a),p=t||n;return p?br(f,p):DS({maxDate:o,maxDetail:a,minDate:s,minDetail:c,value:u||r,view:d||i})}function fu(e){return e&&(!Array.isArray(e)||e.length===1)}function Qa(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var SL=S.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,o=t.calendarType,a=t.className,s=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,h=t.formatMonthYear,v=t.formatShortWeekday,x=t.formatWeekday,j=t.formatYear,g=t.goToRangeStartOnSelect,m=g===void 0?!0:g,y=t.inputRef,b=t.locale,k=t.maxDate,T=k===void 0?gL:k,C=t.maxDetail,P=C===void 0?"month":C,L=t.minDate,I=L===void 0?th:L,V=t.minDetail,N=V===void 0?"century":V,$=t.navigationAriaLabel,U=t.navigationAriaLive,D=t.navigationLabel,W=t.next2AriaLabel,F=t.next2Label,E=t.nextAriaLabel,M=t.nextLabel,O=t.onActiveStartDateChange,B=t.onChange,Y=t.onClickDay,ae=t.onClickDecade,se=t.onClickMonth,G=t.onClickWeekNumber,le=t.onClickYear,Re=t.onDrillDown,Xe=t.onDrillUp,De=t.onViewChange,Wt=t.prev2AriaLabel,wt=t.prev2Label,Ne=t.prevAriaLabel,Xl=t.prevLabel,Ee=t.returnValue,$i=Ee===void 0?"start":Ee,St=t.selectRange,pa=t.showDoubleView,ih=t.showFixedNumberOfWeeks,oh=t.showNavigation,IS=oh===void 0?!0:oh,MS=t.showNeighboringCentury,OS=t.showNeighboringDecade,ah=t.showNeighboringMonth,RS=ah===void 0?!0:ah,NS=t.showWeekNumbers,$S=t.tileClassName,FS=t.tileContent,BS=t.tileDisabled,Zl=t.value,sh=t.view,lh=S.useState(s),VS=lh[0],ha=lh[1],ch=S.useState(null),zS=ch[0],uh=ch[1],dh=S.useState(Array.isArray(c)?c.map(function(X){return X!==null?co(X):null}):c!=null?co(c):null),Jl=dh[0],WS=dh[1],fh=S.useState(u),US=fh[0],ph=fh[1],rt=r||VS||wL({activeStartDate:r,defaultActiveStartDate:s,defaultValue:c,defaultView:u,maxDate:T,maxDetail:P,minDate:I,minDetail:N,value:Zl,view:sh}),it=function(){var X=function(){return St&&fu(Jl)?Jl:Zl!==void 0?Zl:Jl}();return X?Array.isArray(X)?X.map(function(xe){return xe!==null?co(xe):null}):X!==null?co(X):null:null}(),ma=CS(P),he=nh(sh||US,N,P),Ut=jS(N,P),HS=St?zS:null,ql=Ut.indexOf(he)<Ut.length-1,hh=Ut.indexOf(he)>0,mh=S.useCallback(function(X){var xe=function(){switch($i){case"start":return rh;case"end":return PS;case"range":return xL;default:throw new Error("Invalid returnValue.")}}();return xe({maxDate:T,maxDetail:P,minDate:I,value:X})},[T,P,I,$i]),ec=S.useCallback(function(X,xe){ha(X);var Ce={action:xe,activeStartDate:X,value:it,view:he};O&&!Qa(rt,X)&&O(Ce)},[rt,O,it,he]),ga=S.useCallback(function(X,xe){var Ce=function(){switch(he){case"century":return ae;case"decade":return le;case"year":return se;case"month":return Y;default:throw new Error("Invalid view: ".concat(he,"."))}}();Ce&&Ce(X,xe)},[Y,ae,se,le,he]),tc=S.useCallback(function(X,xe){if(ql){ga(X,xe);var Ce=Ut[Ut.indexOf(he)+1];if(!Ce)throw new Error("Attempted to drill down from the lowest view.");ha(X),ph(Ce);var Lt={action:"drillDown",activeStartDate:X,value:it,view:Ce};O&&!Qa(rt,X)&&O(Lt),De&&he!==Ce&&De(Lt),Re&&Re(Lt)}},[rt,ql,O,ga,Re,De,it,he,Ut]),nc=S.useCallback(function(){if(hh){var X=Ut[Ut.indexOf(he)-1];if(!X)throw new Error("Attempted to drill up from the highest view.");var xe=br(X,rt);ha(xe),ph(X);var Ce={action:"drillUp",activeStartDate:xe,value:it,view:X};O&&!Qa(rt,xe)&&O(Ce),De&&he!==X&&De(Ce),Xe&&Xe(Ce)}},[rt,hh,O,Xe,De,it,he,Ut]),rc=S.useCallback(function(X,xe){var Ce=it;ga(X,xe);var Lt=St&&!fu(Ce),_t;if(St)if(Lt)_t=br(ma,X);else{if(!Ce)throw new Error("previousValue is required");if(Array.isArray(Ce))throw new Error("previousValue must not be an array");_t=$A(ma,Ce,X)}else _t=mh(X);var oc=!St||Lt||m?DS({maxDate:T,maxDetail:P,minDate:I,minDetail:N,value:_t,view:he}):null;xe.persist(),ha(oc),WS(_t);var QS={action:"onChange",activeStartDate:oc,value:_t,view:he};if(O&&!Qa(rt,oc)&&O(QS),B)if(St){var XS=fu(_t);if(!XS)B(_t||null,xe);else if(i){if(Array.isArray(_t))throw new Error("value must not be an array");B([_t||null,null],xe)}}else B(_t||null,xe)},[rt,i,mh,m,T,P,I,N,O,B,ga,St,it,ma,he]);function YS(X){uh(X)}function ic(){uh(null)}S.useImperativeHandle(n,function(){return{activeStartDate:rt,drillDown:tc,drillUp:nc,onChange:rc,setActiveStartDate:ec,value:it,view:he}},[rt,tc,nc,rc,ec,it,he]);function gh(X){var xe=X?vS(he,rt):br(he,rt),Ce=ql?tc:rc,Lt={activeStartDate:xe,hover:HS,locale:b,maxDate:T,minDate:I,onClick:Ce,onMouseOver:St?YS:void 0,tileClassName:$S,tileContent:FS,tileDisabled:BS,value:it,valueType:ma};switch(he){case"century":return l.jsx(XA,ri({formatYear:j,showNeighboringCentury:MS},Lt));case"decade":return l.jsx(eL,ri({formatYear:j,showNeighboringDecade:OS},Lt));case"year":return l.jsx(oL,ri({formatMonth:p,formatMonthYear:h},Lt));case"month":return l.jsx(hL,ri({calendarType:o,formatDay:d,formatLongDate:f,formatShortWeekday:v,formatWeekday:x,onClickWeekNumber:G,onMouseLeave:St?ic:void 0,showFixedNumberOfWeeks:typeof ih<"u"?ih:pa,showNeighboringMonth:RS,showWeekNumbers:NS},Lt));default:throw new Error("Invalid view: ".concat(he,"."))}}function GS(){return IS?l.jsx(VA,{activeStartDate:rt,drillUp:nc,formatMonthYear:h,formatYear:j,locale:b,maxDate:T,minDate:I,navigationAriaLabel:$,navigationAriaLive:U,navigationLabel:D,next2AriaLabel:W,next2Label:F,nextAriaLabel:E,nextLabel:M,prev2AriaLabel:Wt,prev2Label:wt,prevAriaLabel:Ne,prevLabel:Xl,setActiveStartDate:ec,showDoubleView:pa,view:he,views:Ut}):null}var KS=Array.isArray(it)?it:[it];return l.jsxs("div",{className:Wl(Ka,St&&KS.length===1&&"".concat(Ka,"--selectRange"),pa&&"".concat(Ka,"--doubleView"),a),ref:y,children:[GS(),l.jsxs("div",{className:"".concat(Ka,"__viewContainer"),onBlur:St?ic:void 0,onMouseLeave:St?ic:void 0,children:[gh(),pa?gh(!0):null]})]})});const bL=Ii`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,kL=Ii`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,jL=Ii`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,CL=Ii`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,TL=Ii`
  from { opacity: 0; }
  to { opacity: 1; }
`,PL=w.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${TL} 0.15s ease-out;
`,DL=w.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?pr`animation: ${CL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:pr`animation: ${jL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?pr`animation: ${kL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:pr`animation: ${bL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,EL=w.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 12px 24px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  overflow: hidden;

  /* React Calendar Styles */
  .react-calendar {
    width: 100%;
    background: transparent;
    border: none;
    font-family: inherit;
    padding: var(--space-sm);
  }

  /* Navigation Header */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    margin-bottom: var(--space-xs);
  }

  .react-calendar__navigation button {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: var(--radius-md);
    cursor: pointer;
    min-width: 32px;
    transition: background 0.15s ease;

    &:hover:not(:disabled) {
      background: var(--bg-tertiary);
    }

    &:disabled {
      opacity: 0.3;
    }
  }

  .react-calendar__navigation__label {
    flex-grow: 1;
    font-weight: 600;
    font-size: 14px;
  }

  .react-calendar__navigation__arrow {
    font-size: 16px;
    color: var(--text-secondary);
  }

  /* Weekday Labels */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 6px 0;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-transform: uppercase;

    abbr {
      text-decoration: none;
    }
  }

  /* Day Tiles */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  .react-calendar__tile {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    transition: background 0.1s ease, transform 0.1s ease;

    &:hover:not(:disabled) {
      background: var(--bg-tertiary);
      transform: scale(1.05);
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    &:disabled {
      opacity: 0.3;
    }
  }

  /* Neighboring month days */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--text-tertiary);
    opacity: 0.4;
  }

  /* Today */
  .react-calendar__tile--now {
    background: rgba(var(--accent-rgb), 0.15);
    color: var(--accent);
    font-weight: 600;
  }

  /* Selected/Active Day */
  .react-calendar__tile--active {
    background: var(--accent) !important;
    color: white !important;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.3);
  }

  /* Year/Decade/Century views */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xs);
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    aspect-ratio: auto;
    padding: 10px;
    font-size: 13px;
  }
`,ES=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const o=S.useRef(null),[a,s]=S.useState(!1),[c,u]=S.useState(!1),[d,f]=S.useState(!1),[p,h]=S.useState({top:0,left:0});S.useEffect(()=>{if(e&&(i!=null&&i.current)){const m=i.current.getBoundingClientRect(),y=280,b=320,k=8,C=window.innerHeight-m.bottom-k<b;f(C);let P;C?P=m.top-b-k:P=m.bottom+k;let L=m.right-y;L<8&&(L=8),L+y>window.innerWidth-8&&(L=window.innerWidth-y-8),P<8&&(P=8),h({top:P,left:L}),u(!0),s(!1)}},[e,i]);const v=S.useCallback(()=>{s(!0),setTimeout(()=>{u(!1),s(!1),t()},150)},[t]),x=S.useCallback(m=>{o.current&&!o.current.contains(m.target)&&v()},[v]);S.useEffect(()=>{if(e){const m=setTimeout(()=>{document.addEventListener("mousedown",x)},10);return()=>{clearTimeout(m),document.removeEventListener("mousedown",x)}}},[e,x]);const j=S.useCallback(m=>{m instanceof Date&&(r(tn(m)),v())},[r,v]);if(!c)return null;const g=new Date(n+"T00:00:00");return Ix.createPortal(l.jsxs("div",{"data-calendar-portal":!0,children:[l.jsx(PL,{onClick:v}),l.jsx(DL,{ref:o,$isClosing:a,$openUpward:d,$top:p.top,$left:p.left,children:l.jsx(EL,{children:l.jsx(SL,{onChange:j,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(m,y)=>y.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},AL=w(_.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,LL=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  gap: 16px;

  @media (max-width: 640px) {
    padding: 14px 16px;
    gap: 12px;
  }
`,_L=w.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    gap: 12px;
  }
`,IL=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,ML=w(_.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({$type:e})=>{switch(e){case"past":return"#ef4444";case"today":return"#10b981";case"future":return"#3b82f6"}}};
`,OL=w(_.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,RL=w.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,NL=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$L=w(_.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,FL=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,BL=w.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,VL=w(_.span)`
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background: ${({$type:e})=>{switch(e){case"past":return"rgba(239, 68, 68, 0.15)";case"today":return"rgba(16, 185, 129, 0.15)";case"future":return"rgba(59, 130, 246, 0.15)"}}};
  color: ${({$type:e})=>{switch(e){case"past":return"#ef4444";case"today":return"#10b981";case"future":return"#3b82f6"}}};
`,zL=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,WL=w.div`
  display: flex;
  align-items: center;
  background: var(--bg-tertiary);
  border-radius: 10px;
  padding: 4px;
  gap: 2px;
`,q0=w(_.button).attrs({type:"button"})`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  &:active {
    background: var(--bg-active);
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`,UL=w(_.button).attrs({type:"button"})`
  font-size: 13px;
  font-weight: 500;
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: rgba(16, 185, 129, 0.1);
  }

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`,HL=w(_.button).attrs({type:"button"})`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: none;
  border-radius: 10px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,YL=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"15 18 9 12 15 6"})}),GL=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9 18 15 12 9 6"})}),KL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),QL={type:"spring",stiffness:400,damping:30},XL=({selectedDate:e,onDateChange:t})=>{const[n,r]=S.useState(!1),i=S.useRef(null),o=g=>{g.preventDefault(),g.stopPropagation(),t(tn(new Date))},a=g=>{g.preventDefault(),g.stopPropagation();const m=new Date(e+"T00:00:00");m.setDate(m.getDate()-1),t(tn(m))},s=g=>{g.preventDefault(),g.stopPropagation();const m=new Date(e+"T00:00:00");m.setDate(m.getDate()+1),t(tn(m))},u=$0(e)?"today":A4(e)?"past":"future",d=$0(e),f=new Date(e+"T00:00:00"),p=f.getDate(),h=f.toLocaleDateString("en-US",{month:"short"}),v=f.toLocaleDateString("en-US",{weekday:"long"}),x=f.getFullYear(),j=()=>{switch(u){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return l.jsxs(AL,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:QL,children:[l.jsxs(LL,{children:[l.jsxs(_L,{children:[l.jsxs(IL,{children:[l.jsx(Le,{mode:"wait",children:l.jsx(ML,{$type:u,initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.15},children:h},h)}),l.jsx(Le,{mode:"wait",children:l.jsx(OL,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:p},p)})]}),l.jsx(RL,{}),l.jsxs(NL,{children:[l.jsx(Le,{mode:"wait",children:l.jsx($L,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},exit:{opacity:0,x:8},transition:{duration:.15},children:v},v)}),l.jsxs(FL,{children:[l.jsx(BL,{children:x}),l.jsx(Le,{mode:"wait",children:l.jsx(VL,{$type:u,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:j()},u)})]})]})]}),l.jsxs(zL,{children:[l.jsxs(WL,{children:[l.jsx(q0,{onClick:a,whileTap:{scale:.9},children:l.jsx(YL,{})}),l.jsx(q0,{onClick:s,whileTap:{scale:.9},children:l.jsx(GL,{})})]}),l.jsx(Le,{children:!d&&l.jsx(UL,{onClick:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},whileTap:{scale:.95},transition:{duration:.15},children:"Today"})}),l.jsx(HL,{ref:i,onClick:()=>r(!0),whileTap:{scale:.95},children:l.jsx(KL,{})})]})]}),l.jsx(ES,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:i})]})},ZL=w(_.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,JL=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,qL=w.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,e_=w.div`
  flex: 1;
  min-width: 0;
`,t_=w.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,n_=w.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,r_=w.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  
  ${({$status:e})=>{switch(e){case"due":return`
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
        `;case"unbilled":return`
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
        `;case"clear":return`
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        `}}}
`,i_=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,ev=w.div``,tv=w.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,nv=w(_.div)`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:e})=>e};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,o_=w.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
`,a_=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,s_=w.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,l_=w(_.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,c_=w(_.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:e})=>e};
  white-space: nowrap;
`,u_={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},d_=e=>{const t=u_[e];return t?l.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},f_=e=>new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),rv={type:"spring",stiffness:400,damping:35},p_=({detailedBalance:e,index:t=0,limit:n})=>{const{account:r,billDue:i,unbilled:o,totalOutstanding:a,cycleStart:s}=e,c=n!==void 0&&n>0,u=c?Math.max(0,n-a):0,d=c?a/n*100:0,f=c&&a>n,p=f?"#ef4444":d>80?"#f59e0b":"#10b981",h=()=>i>0?"due":o>0?"unbilled":"clear",v=()=>{switch(h()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return l.jsxs(ZL,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{...rv,delay:t*.03},children:[l.jsxs(JL,{children:[l.jsx(qL,{children:d_(r.bank)}),l.jsxs(e_,{children:[l.jsxs(t_,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),l.jsxs(n_,{children:["Cycle from ",f_(s)]})]}),l.jsx(r_,{$status:h(),children:v()})]}),l.jsxs(i_,{children:[l.jsxs(ev,{children:[l.jsx(tv,{children:"Bill Due"}),l.jsx(nv,{$color:i>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(i)},i)]}),l.jsxs(ev,{children:[l.jsx(tv,{children:"Unbilled"}),l.jsx(nv,{$color:o>0?"#f59e0b":"var(--text-tertiary)",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(o)},o)]})]}),c&&l.jsx(o_,{children:l.jsxs(a_,{children:[l.jsx(s_,{children:l.jsx(l_,{$color:p,initial:{width:0},animate:{width:`${Math.min(d,100)}%`},transition:{...rv,delay:t*.03+.1}})}),l.jsx(c_,{$color:p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:f?`${$t(a-n)} over`:`${$t(u)} left`},u)]})})]})},h_=S.memo(p_),m_=w(_.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`,Xa=w(_.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Za=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,Ja=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,qa=w.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({$color:e})=>`${e}15`};

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e};
  }
`,es=w.div`
  min-width: 0;
`,ts=w.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ns=w.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,rs=w(_.div)`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:e})=>e||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,g_=w.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
`,v_=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,y_=w.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,x_=w(_.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,w_=w(_.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:e})=>e};
  white-space: nowrap;
`,iv={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},S_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),b_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),AS={type:"spring",stiffness:400,damping:35},k_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},is={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:AS}},j_=({balances:e,ccLimits:t={},creditCardDetailedBalances:n=[]})=>{const{hdfcBalance:r,iciciBalance:i,totalCCOutstanding:o,netPosition:a,totalLimit:s,totalLimitRemaining:c,limitPercentage:u,limitColor:d}=S.useMemo(()=>{const p=e.find(P=>P.account.id==="hdfc-bank"),h=e.find(P=>P.account.id==="icici-bank"),v=e.filter(P=>P.account.type==="credit_card"),x=(p==null?void 0:p.balance)||0,j=(h==null?void 0:h.balance)||0,g=v.reduce((P,L)=>P+(L.totalOutstanding||0),0);let m=0,y=0;for(const P of n){const L=t[P.account.id]||0;L>0&&(m+=L,y+=P.totalOutstanding)}const b=Math.max(0,m-y),k=m>0?y/m*100:0,C=y>m&&m>0?"#ef4444":k>80?"#f59e0b":"#10b981";return{hdfcBalance:x,iciciBalance:j,totalCCOutstanding:g,netPosition:x-g,totalLimit:m,totalLimitRemaining:b,limitPercentage:k,limitColor:C}},[e,t,n]),f=s>0;return l.jsxs(m_,{variants:k_,initial:"hidden",animate:"visible",children:[l.jsx(Xa,{variants:is,children:l.jsxs(Za,{children:[l.jsxs(Ja,{children:[l.jsx(qa,{$color:"#10b981",children:l.jsx(S_,{})}),l.jsxs(es,{children:[l.jsx(ts,{children:"Net Position"}),l.jsx(ns,{children:"HDFC − CC Due"})]})]}),l.jsx(rs,{$color:a>=0?"#10b981":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(a)},a)]})}),l.jsx(Xa,{variants:is,children:l.jsxs(Za,{children:[l.jsxs(Ja,{children:[l.jsx(qa,{$color:"#004C8F",children:l.jsx("img",{src:iv.hdfc,alt:"HDFC"})}),l.jsxs(es,{children:[l.jsx(ts,{children:"HDFC Bank"}),l.jsx(ns,{children:"Savings"})]})]}),l.jsx(rs,{$color:r>=0?"#004C8F":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(r)},r)]})}),l.jsx(Xa,{variants:is,children:l.jsxs(Za,{children:[l.jsxs(Ja,{children:[l.jsx(qa,{$color:"#F58220",children:l.jsx("img",{src:iv.icici,alt:"ICICI"})}),l.jsxs(es,{children:[l.jsx(ts,{children:"ICICI Bank"}),l.jsx(ns,{children:"Savings"})]})]}),l.jsx(rs,{$color:i>=0?"#F58220":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(i)},i)]})}),l.jsxs(Xa,{variants:is,children:[l.jsxs(Za,{children:[l.jsxs(Ja,{children:[l.jsx(qa,{$color:"#ef4444",children:l.jsx(b_,{})}),l.jsxs(es,{children:[l.jsx(ts,{children:"Credit Cards"}),l.jsx(ns,{children:"Total Outstanding"})]})]}),l.jsxs(rs,{$color:o>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:[o>0?"-":"",$t(o)]},o)]}),f&&l.jsx(g_,{children:l.jsxs(v_,{children:[l.jsx(y_,{children:l.jsx(x_,{$color:d,initial:{width:0},animate:{width:`${Math.min(u,100)}%`},transition:{...AS,delay:.1}})}),l.jsx(w_,{$color:d,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:u>100?`${$t(o-s)} over`:`${$t(c)} left`},c)]})})]})]})},C_=S.memo(j_),T_=w.div`
  display: flex;
  flex-direction: column;
`,P_=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`,D_=w(_.button)`
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-primary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-secondary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  }
`,E_=w.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,A_=w.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,L_=w.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,__=w.div`
  overflow: hidden;
`,I_=w.div`
  margin-top: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
`,M_=w.div`
  padding: 0;
`,Zi=w.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Ji=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,ov=w.input`
  width: 100%;
  padding: 0;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--text-tertiary);
  }
`,O_=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,R_=w.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,N_=w(_.button).attrs({type:"button"})`
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  background: var(--bg-tertiary);
  border: none;
  border-radius: 6px;
  color: var(--accent);
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
  }
`,av=w.select`
  width: 100%;
  padding: 0;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0 center;
  background-size: 14px;
  padding-right: 20px;

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`,$_=w.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,F_=w.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-tertiary);
`,B_=w.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`,V_=w(_.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 17px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,z_=w(_.button)`
  padding: 14px 20px;
  font-size: 17px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,W_=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],U_=Yp(),sv=nS(),pu={type:"spring",stiffness:400,damping:30},H_=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=S.useState(""),[i,o]=S.useState(""),[a,s]=S.useState(""),[c,u]=S.useState(""),[d,f]=S.useState(""),[p,h]=S.useState(t||tn(new Date)),[v,x]=S.useState(!1),j=S.useRef(null),g=S.useRef(null);S.useEffect(()=>{t&&h(t)},[t]);const m=i!==""||a!==""||c!==""||d!=="";S.useEffect(()=>{if(!n||m||v)return;const N=$=>{const U=$.target;U.closest("[data-calendar-portal]")||j.current&&!j.current.contains(U)&&r("")};return document.addEventListener("mousedown",N),document.addEventListener("touchstart",N),()=>{document.removeEventListener("mousedown",N),document.removeEventListener("touchstart",N)}},[n,m,v]);const y=S.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return U_;case"bank_debit":case"bank_credit":return sv;default:return Sr}},[n]),b=S.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),k=n&&i&&parseFloat(c)>0&&p,T=S.useCallback(()=>{r(""),o(""),s(""),u(""),f("")},[]),C=S.useCallback(()=>{if(!n||!i||!c||!p)return;const N=n==="cc_payment"&&a?a:void 0,$=Sr.find(F=>F.id===i),U=a?Sr.find(F=>F.id===a):void 0;let D="";switch(n){case"credit_card_spend":D=`Spent on ${$==null?void 0:$.name}`;break;case"cc_payment":D=U?`Payment to ${$==null?void 0:$.name} from ${U.name}`:`Payment to ${$==null?void 0:$.name}`;break;case"bank_debit":D=`Debited from ${$==null?void 0:$.name}`;break;case"bank_credit":D=`Credited to ${$==null?void 0:$.name}`;break}const W=N4(n,i,parseFloat(c),d||D,p,N);e(W),T()},[n,i,a,c,d,p,e,T]),P=S.useMemo(()=>{const $=c.replace(/[^0-9.]/g,"").split(".");let U=$[0];const D=$[1];if(U.length>3){let W=U.substring(U.length-3),F=U.substring(0,U.length-3);F=F.replace(/\B(?=(\d{2})+(?!\d))/g,","),U=F+","+W}return D!==void 0?`${U}.${D}`:U},[c]),L=S.useCallback(N=>{const $=N.target.value.replace(/,/g,"");($===""||/^\d*\.?\d*$/.test($))&&u($)},[]),I=N=>new Date(N+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),V=!!n;return l.jsxs(T_,{ref:j,children:[l.jsx(P_,{children:W_.map(({type:N,label:$,hint:U,color:D})=>l.jsxs(D_,{type:"button",$active:n===N,$color:D,onClick:()=>{n===N&&!m?r(""):(r(N),o(""),s(""))},whileTap:{scale:.98},transition:pu,children:[l.jsx(E_,{children:$}),l.jsx(A_,{children:U})]},N))}),l.jsx(L_,{$isOpen:V,children:l.jsxs(__,{children:[l.jsx(I_,{children:l.jsxs(M_,{children:[l.jsxs(Zi,{children:[l.jsx(Ji,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),l.jsxs(av,{value:i,onChange:N=>o(N.target.value),children:[l.jsx("option",{value:"",children:b()}),y.map(N=>l.jsx("option",{value:N.id,children:N.name},N.id))]})]}),n==="cc_payment"&&l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Paid From (Optional)"}),l.jsxs(av,{value:a,onChange:N=>s(N.target.value),children:[l.jsx("option",{value:"",children:"Select bank account..."}),sv.map(N=>l.jsx("option",{value:N.id,children:N.name},N.id))]})]}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Amount"}),l.jsxs($_,{children:[l.jsx(F_,{children:"₹"}),l.jsx(ov,{type:"text",inputMode:"decimal",placeholder:"0",value:P,onChange:L})]})]}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Date"}),l.jsxs(O_,{children:[l.jsx(R_,{children:I(p)}),l.jsx(N_,{ref:g,onClick:()=>x(!0),whileTap:{scale:.95},children:"Change"}),l.jsx(ES,{isOpen:v,onClose:()=>x(!1),selectedDate:p,onDateSelect:h,triggerRef:g})]})]}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Description (Optional)"}),l.jsx(ov,{type:"text",placeholder:"Add a note...",value:d,onChange:N=>f(N.target.value)})]})]})}),l.jsxs(B_,{children:[l.jsx(V_,{type:"button",onClick:C,disabled:!k,whileHover:k?{scale:1.01}:{},whileTap:k?{scale:.99}:{},transition:pu,children:"Add Transaction"}),l.jsx(z_,{type:"button",onClick:T,whileTap:{scale:.99},transition:pu,children:"Cancel"})]})]})})]})},Y_=S.memo(H_),G_=w(_.section)`
  position: relative;
  width: 100%;
`,K_=w(_.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 12px;

  @media (max-width: 640px) {
    padding: 10px 2px;
    margin-bottom: 10px;
  }
`,Q_=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,X_=w.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: #3b82f6;
  }
`,Z_=w.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`,J_=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,q_=w(_.span)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 4px 12px;
  border-radius: 20px;
`,eI=w(_.div)`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,tI=w(_.div)`
  overflow: hidden;
`,nI=w.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,rI=w.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,iI=w.div`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,oI=w.div`
  padding: 10px 16px 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
  position: sticky;
  top: 0;
  z-index: 1;
`,LS=w(_.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  transition: background 0.15s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }

  &:active {
    background: var(--bg-tertiary);
  }

  @media (max-width: 640px) {
    padding: 10px 14px;
    gap: 10px;
  }
`,aI=w.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:e})=>{switch(e){case"credit_card_spend":return`
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
        `;case"cc_payment":return`
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        `;case"bank_debit":return`
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
        `;case"bank_credit":return`
          background: rgba(59, 130, 246, 0.12);
          color: #3b82f6;
        `}}}

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,sI=w.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,lI=w.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,cI=w.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,uI=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 8px;
`,dI=w.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-primary)"};
  text-align: right;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,fI=w(_.button)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--text-tertiary);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s, background 0.15s, color 0.15s;

  ${LS}:hover & {
    opacity: 0.5;
  }

  &:hover {
    opacity: 1 !important;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 640px) {
    opacity: 0.4;
  }
`,pI=w(_.div)`
  padding: 48px 24px;
  text-align: center;
`,hI=w.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
    color: var(--text-tertiary);
  }
`,mI=w.p`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
`,gI=w.p`
  font-size: 14px;
  color: var(--text-tertiary);
`,vI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),l.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),l.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),l.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),yI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),xI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("polyline",{points:"19 12 12 19 5 12"})]}),wI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),l.jsx("polyline",{points:"5 12 12 5 19 12"})]}),SI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),bI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),kI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),l.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),jI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),CI=e=>{switch(e){case"credit_card_spend":return l.jsx(yI,{});case"cc_payment":return l.jsx(SI,{});case"bank_debit":return l.jsx(wI,{});case"bank_credit":return l.jsx(xI,{})}},lv=e=>e==="bank_credit"||e==="cc_payment",TI=e=>{const t=new Date(e+"T00:00:00"),n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),t.toDateString()===n.toDateString()?"Today":t.toDateString()===r.toDateString()?"Yesterday":t.toLocaleDateString("en-IN",{day:"numeric",month:"short"})},Co={type:"spring",stiffness:400,damping:35},PI={collapsed:{height:0,opacity:0,transition:{height:{...Co},opacity:{duration:.1}}},expanded:{height:"auto",opacity:1,transition:{height:{...Co},opacity:{duration:.2,delay:.05}}}},DI={collapsed:{rotate:0},expanded:{rotate:180}},EI=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const[r,i]=S.useState(!1),{filteredTransactions:o,groupedTransactions:a}=S.useMemo(()=>{const[u,d]=n.split("-").slice(0,2),f=[...e].filter(h=>{const[v,x]=h.date.split("-").slice(0,2);return v===u&&x===d&&h.date<=n}).sort((h,v)=>{const x=v.date.localeCompare(h.date);return x!==0?x:new Date(v.createdAt).getTime()-new Date(h.createdAt).getTime()}),p={};return f.forEach(h=>{p[h.date]||(p[h.date]=[]),p[h.date].push(h)}),{filteredTransactions:f,groupedTransactions:p}},[e,n]),s=S.useCallback(u=>{t(u)},[t]),c=Object.keys(a).sort((u,d)=>d.localeCompare(u));return l.jsxs(G_,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{...Co,delay:.02},children:[l.jsxs(K_,{type:"button",onClick:()=>i(!r),whileTap:{scale:.99},transition:{duration:.1},children:[l.jsxs(Q_,{children:[l.jsx(X_,{children:l.jsx(vI,{})}),l.jsx(Z_,{children:"Transactions"})]}),l.jsxs(J_,{children:[l.jsx(Le,{mode:"wait",children:l.jsx(q_,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:500,damping:30},children:o.length},o.length)}),l.jsx(eI,{animate:r?"expanded":"collapsed",variants:DI,transition:Co,children:l.jsx(jI,{})})]})]}),l.jsx(Le,{initial:!1,children:r&&l.jsx(tI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:PI,children:l.jsx(nI,{children:l.jsx(rI,{children:o.length===0?l.jsxs(pI,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:Co,children:[l.jsx(hI,{children:l.jsx(kI,{})}),l.jsx(mI,{children:"No Transactions"}),l.jsx(gI,{children:"Add your first transaction above"})]}):c.map(u=>l.jsxs(iI,{children:[l.jsx(oI,{children:TI(u)}),a[u].map(d=>{var p;const f=$4(d.accountId);return l.jsxs(LS,{children:[l.jsx(aI,{$type:d.type,children:CI(d.type)}),l.jsxs(sI,{children:[l.jsx(lI,{children:d.description}),l.jsx(cI,{children:(p=f==null?void 0:f.name)==null?void 0:p.replace(" Credit Card"," CC").replace(" Bank","")})]}),l.jsxs(uI,{children:[l.jsxs(dI,{$positive:lv(d.type),children:[lv(d.type)?"+":"-",$t(d.amount)]}),l.jsx(fI,{type:"button",onClick:()=>s(d.id),"aria-label":"Delete transaction",whileTap:{scale:.9},children:l.jsx(bI,{})})]})]},d.id)})]},u))})})},"content")})]})},AI=S.memo(EI),LI=w(_.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,_I=w(_.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,II=w.div`
  padding: var(--space-xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,MI=w.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--space-xl);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 3px;
  }
`,OI=w.div`
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,RI=w.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,NI=w.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,hu=w.h3`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  svg {
    width: 14px;
    height: 14px;
    color: var(--accent);
  }
`,mu=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,gu=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,cv=w.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,vu=w.div`
  position: relative;

  &::before {
    content: '₹';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-left: 32px;
  }
`,yu=w.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  transition: all var(--timing-small) var(--ease-standard);

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`,uv=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,$I=w.div`
  display: flex;
  gap: var(--space-md);
`,dv=w(_.button)`
  flex: 1;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--timing-small) var(--ease-standard);

  ${({$primary:e})=>e?`
    color: white;
    background: var(--accent);
    border: none;

    &:hover {
      background: var(--accent-hover);
    }
  `:`
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    border: 1px solid var(--border);

    &:hover {
      background: var(--glass-bg-hover);
      border-color: var(--border-hover);
      color: var(--text-primary);
    }
  `}
`,fv=w.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,FI=w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 600;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  border-radius: 12px;
  margin-left: auto;
`,BI=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,VI=w.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
`,zI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),l.jsx("polyline",{points:"5 6 12 3 19 6"}),l.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),l.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),WI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),UI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),HI={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},YI={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},GI=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,ccLimits:i,onSave:o})=>{const[a,s]=S.useState({}),[c,u]=S.useState({}),[d,f]=S.useState({}),p=nS(),h=Yp();S.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),S.useEffect(()=>{if(e){const b={};p.forEach(C=>{var P;b[C.id]=((P=n[C.id])==null?void 0:P.toString())||""}),s(b);const k={};h.forEach(C=>{var P;k[C.id]=((P=r[C.id])==null?void 0:P.toString())||""}),u(k);const T={};h.forEach(C=>{var P;T[C.id]=((P=i[C.id])==null?void 0:P.toString())||""}),f(T)}},[e,n,r,i]);const v=()=>{const b={};Object.entries(a).forEach(([C,P])=>{const L=parseFloat(P.replace(/,/g,""))||0;b[C]=L});const k={};Object.entries(c).forEach(([C,P])=>{const L=parseFloat(P.replace(/,/g,""))||0;k[C]=L});const T={};Object.entries(d).forEach(([C,P])=>{const L=parseFloat(P.replace(/,/g,""))||0;L>0&&(T[C]=L)}),o(b,k,T),t()},x=b=>{const k=b.replace(/[^0-9]/g,"");if(!k)return"";if(k.length>3){let T=k.substring(k.length-3),C=k.substring(0,k.length-3);return C=C.replace(/\B(?=(\d{2})+(?!\d))/g,","),C+","+T}return k},j=(b,k)=>{const T=k.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&s(C=>({...C,[b]:T}))},g=(b,k)=>{const T=k.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&u(C=>({...C,[b]:T}))},m=(b,k)=>{const T=k.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&f(C=>({...C,[b]:T}))},y=b=>{if(b>3&&b<21)return"th";switch(b%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return l.jsx(Le,{children:e&&l.jsx(LI,{variants:HI,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:l.jsxs(_I,{variants:YI,initial:"hidden",animate:"visible",exit:"exit",onClick:b=>b.stopPropagation(),children:[l.jsxs(II,{children:[l.jsx(RI,{children:"Initial Balances, Bills & Limits"}),l.jsx(NI,{children:"Set your starting bank balances, credit card outstanding amounts, and monthly spending limits."})]}),l.jsxs(MI,{children:[l.jsxs(hu,{children:[l.jsx(zI,{}),"Bank Account Balances"]}),l.jsx(mu,{children:p.map(b=>l.jsxs(gu,{children:[l.jsx(cv,{children:b.name}),l.jsx(vu,{children:l.jsx(yu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:x(a[b.id]||""),onChange:k=>j(b.id,k.target.value)})})]},b.id))}),l.jsx(uv,{}),l.jsxs(hu,{children:[l.jsx(WI,{}),"Credit Card Outstanding Bills"]}),l.jsx(mu,{children:h.map(b=>l.jsxs(gu,{children:[l.jsx(cv,{children:b.name}),l.jsx(vu,{children:l.jsx(yu,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:x(c[b.id]||""),onChange:k=>g(b.id,k.target.value)})}),l.jsx(fv,{children:"Current outstanding amount you owe"})]},b.id))}),l.jsx(uv,{}),l.jsxs(hu,{children:[l.jsx(UI,{}),"Monthly Spending Limits"]}),l.jsx(mu,{children:h.map(b=>{const k=eS[b.id];return l.jsxs(gu,{children:[l.jsxs(BI,{children:[l.jsx(VI,{children:b.name}),k&&l.jsxs(FI,{children:["Resets ",k,y(k)]})]}),l.jsx(vu,{children:l.jsx(yu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:x(d[b.id]||""),onChange:T=>m(b.id,T.target.value)})}),l.jsx(fv,{children:"Maximum spending allowed per billing cycle"})]},b.id)})})]}),l.jsx(OI,{children:l.jsxs($I,{children:[l.jsx(dv,{onClick:t,children:"Cancel"}),l.jsx(dv,{$primary:!0,onClick:v,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})})]})})})},KI=e=>{switch(e){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},QI=w(_.section)`
  position: relative;
`,XI=w(_.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 12px;

  @media (max-width: 640px) {
    padding: 10px 2px;
    margin-bottom: 10px;
  }
`,ZI=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,JI=w.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e};
  }
`,qI=w.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`,eM=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,tM=w(_.span)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 4px 12px;
  border-radius: 20px;
`,nM=w(_.div)`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,rM=w(_.div)`
  overflow: hidden;
`,iM=w.div`
  /* No extra padding - let children control their own spacing */
`,oM=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),pl={type:"spring",stiffness:400,damping:35},aM={collapsed:{height:0,opacity:0,transition:{height:{...pl},opacity:{duration:.1}}},expanded:{height:"auto",opacity:1,transition:{height:{...pl},opacity:{duration:.2,delay:.05}}}},sM={collapsed:{rotate:0},expanded:{rotate:180}},os=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:o,onOpenChange:a,collapseOnClickOutside:s=!1,children:c})=>{const[u,d]=S.useState(i),f=S.useRef(null),p=o!==void 0,h=p?o:u,v=KI(n),x=()=>{const j=!h;p?a==null||a(j):d(j)};return S.useEffect(()=>{if(!s||!h)return;const j=g=>{f.current&&!f.current.contains(g.target)&&(p?a==null||a(!1):d(!1))};return document.addEventListener("mousedown",j),document.addEventListener("touchstart",j),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("touchstart",j)}},[s,h,p,a]),l.jsxs(QI,{ref:f,initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{...pl,delay:.02},children:[l.jsxs(XI,{type:"button",onClick:x,whileTap:{scale:.99},transition:{duration:.1},children:[l.jsxs(ZI,{children:[l.jsx(JI,{$color:v,children:t}),l.jsx(qI,{children:e})]}),l.jsxs(eM,{children:[l.jsx(Le,{mode:"wait",children:r!==void 0&&l.jsx(tM,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:500,damping:30},children:r},r)}),l.jsx(nM,{animate:h?"expanded":"collapsed",variants:sM,transition:pl,children:l.jsx(oM,{})})]})]}),l.jsx(Le,{initial:!1,children:h&&l.jsx(rM,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:aM,children:l.jsx(iM,{children:c})},"content")})]})},lM=w(_.div)`
  min-height: 100vh;
  padding-top: 0;
  padding-bottom: calc(var(--space-3xl) + 80px);
  overflow-x: hidden;
  max-width: 100vw;

  @media (max-width: 1023px) {
    padding-bottom: calc(var(--space-2xl) + 80px);
  }

  @media (max-width: 640px) {
    padding-bottom: calc(var(--space-xl) + 100px);
  }
`,cM=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    var(--bg-primary) 70%,
    transparent 100%
  );
  padding: var(--space-lg) 0 var(--space-xl);

  @media (max-width: 640px) {
    padding: var(--space-md) 0 var(--space-lg);
  }
`,uM=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,dM=w.div`
  height: 120px;

  @media (max-width: 640px) {
    height: 100px;
  }
`,fM=w(_.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,pM=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    grid-template-columns: 380px 1fr;
    gap: var(--space-xl);
    align-items: start;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 420px 1fr;
  }
`,hM=w(_.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  min-width: 0;
  overflow: hidden;

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(100px + var(--space-lg));
  }
`,mM=w(_.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  min-width: 0;
  overflow: hidden;

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,gM=w(_.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,vM=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,yM=w.div`
  display: flex;
  gap: var(--space-sm);
`,pv=w(_.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$variant:e})=>e==="primary"?"white":"var(--text-secondary)"};
  background: ${({$variant:e})=>e==="primary"?"var(--accent)":"var(--glass-bg)"};
  backdrop-filter: ${({$variant:e})=>e==="primary"?"none":"blur(var(--glass-blur)) saturate(var(--glass-saturation))"};
  -webkit-backdrop-filter: ${({$variant:e})=>e==="primary"?"none":"blur(var(--glass-blur)) saturate(var(--glass-saturation))"};
  border: 1px solid ${({$variant:e})=>e==="primary"?"var(--accent)":"var(--glass-border)"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  flex: 1;

  svg {
    width: 16px;
    height: 16px;
  }
`,xM=w(_.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  cursor: pointer;
  width: 100%;

  svg {
    width: 18px;
    height: 18px;
  }
`,wM=w.input`
  display: none;
`,SM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),bM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),kM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),jM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),CM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),l.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),TM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),PM=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Ds={type:"spring",stiffness:300,damping:30,mass:.8},DM={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},xu={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Ds}},EM=()=>{const[e,t]=S.useState(tn(new Date)),[n,r]=S.useState([]),[i,o]=S.useState({}),[a,s]=S.useState({}),[c,u]=S.useState({}),[d,f]=S.useState(!1),p=S.useRef(null);S.useEffect(()=>{const k=T4(),T=P4(),C=D4(),P=E4();r(k),o(T),s(C),u(P)},[]);const h=S.useMemo(()=>O4(n,e,i,a),[e,n,i,a]),v=S.useMemo(()=>Yp().map(T=>I4(T,n,e,a)),[n,e,a]),x=S.useCallback(k=>{r(T=>{const C=[...T,k];return requestAnimationFrame(()=>su(C)),C})},[]),j=S.useCallback(k=>{r(T=>{const C=T.filter(P=>P.id!==k);return requestAnimationFrame(()=>su(C)),C})},[]),g=S.useCallback((k,T,C)=>{o(k),s(T),u(C),requestAnimationFrame(()=>{O0(k),R0(T),N0(C)})},[]),m=S.useCallback(()=>{B4(n,i,a,c)},[n,i,a,c]),y=S.useCallback(()=>{var k;(k=p.current)==null||k.click()},[]),b=S.useCallback(k=>{var P;const T=(P=k.target.files)==null?void 0:P[0];if(!T)return;const C=new FileReader;C.onload=L=>{var N;const I=(N=L.target)==null?void 0:N.result,V=z4(I);V?window.confirm(`Import backup from ${new Date(V.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${V.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(V.transactions),o(V.initialBalances),s(V.initialCCBills),u(V.ccLimits||{}),su(V.transactions),O0(V.initialBalances),R0(V.initialCCBills),N0(V.ccLimits||{})):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},C.readAsText(T),k.target.value=""},[]);return l.jsxs(l.Fragment,{children:[l.jsx(cM,{children:l.jsx(uM,{children:l.jsx(XL,{selectedDate:e,onDateChange:t})})}),l.jsxs(lM,{variants:DM,initial:"hidden",animate:"visible",children:[l.jsxs(Kw,{$maxWidth:"wide",children:[l.jsx(dM,{}),l.jsx(fM,{variants:xu,children:l.jsx(os,{title:"Summary",icon:l.jsx(CM,{}),accent:"green",children:l.jsx(C_,{balances:h,ccLimits:c,creditCardDetailedBalances:v})})}),l.jsxs(pM,{children:[l.jsx(hM,{variants:xu,children:l.jsx(os,{title:"Add Transaction",icon:l.jsx(TM,{}),accent:"orange",children:l.jsx(Y_,{onAddTransaction:x,defaultDate:e})})}),l.jsxs(mM,{variants:xu,children:[l.jsx(os,{title:"Credit Cards",icon:l.jsx(PM,{}),accent:"pink",badge:v.length,children:l.jsx(gM,{children:v.map((k,T)=>l.jsx(h_,{detailedBalance:k,index:T,limit:c[k.account.id]},k.account.id))})}),l.jsx(AI,{transactions:n,onDeleteTransaction:j,selectedDate:e}),l.jsx(os,{title:"Manage Data",icon:l.jsx(jM,{}),accent:"purple",defaultOpen:!1,children:l.jsxs(vM,{children:[l.jsxs(xM,{type:"button",onClick:()=>f(!0),whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Ds,children:[l.jsx(SM,{}),"Set Initial Balances"]}),l.jsxs(yM,{children:[l.jsxs(pv,{type:"button",$variant:"secondary",onClick:m,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Ds,children:[l.jsx(bM,{}),"Export"]}),l.jsxs(pv,{type:"button",$variant:"secondary",onClick:y,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Ds,children:[l.jsx(kM,{}),"Import"]})]})]})}),l.jsx(wM,{ref:p,type:"file",accept:".json",onChange:b})]})]})]}),l.jsx(GI,{isOpen:d,onClose:()=>f(!1),initialBalances:i,initialCCBills:a,ccLimits:c,onSave:g})]})]})},_S=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),AM=async(e,t,n,r=48)=>{try{const i=await _S(),o=Math.min(t,n)*.03,a=t-r-o,s=n-r-o;e.globalAlpha=.7,e.drawImage(i,a,s,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},ef=(e,t,n)=>{const r=[],i=s=>{const c=[];let u=s;for(;u.length>0;){let d=u.length;for(;d>0&&e.measureText(u.slice(0,d)).width>n;)d--;d=Math.max(1,d);const f=u.slice(0,d),p=f.lastIndexOf("/"),h=f.lastIndexOf("-"),v=f.lastIndexOf(".");let x=d;const j=[p,h,v].filter(g=>g>0&&g<d-1);j.length>0&&(x=Math.max(...j)+1),c.push(u.slice(0,x)),u=u.slice(x)}return c},o=t.split(" ");let a="";for(const s of o)if(e.measureText(s).width>n){a&&(r.push(a),a="");const u=i(s);for(let d=0;d<u.length;d++)d<u.length-1?r.push(u[d]):a=u[d]}else{const u=a?`${a} ${s}`:s;e.measureText(u).width>n&&a?(r.push(a),a=s):a=u}return a&&r.push(a),r},LM=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:o,alignment:a,aspectRatio:s,padding:c}=e,u=document.createElement("canvas");u.width=s.width,u.height=s.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=o,d.fillRect(0,0,u.width,u.height);const f=n*(s.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(s.width/1080),h=u.width-p*2,v=t.split(`
`),x=[];for(const k of v)if(k.trim()==="")x.push("");else{const T=ef(d,k,h);x.push(...T)}const j=f*1.4,g=x.length*j;let m=(u.height-g)/2+f;d.textAlign=a;let y;switch(a){case"left":y=p;break;case"right":y=u.width-p;break;default:y=u.width/2}for(const k of x)k!==""&&d.fillText(k,y,m),m+=j;const b=Math.min(u.width,u.height)*.06;return await AM(d,u.width,u.height,b),u.toDataURL("image/png",1)},_M=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,o=document.createElement("canvas");o.width=n.width,o.height=n.height;const a=o.getContext("2d");if(!a)throw new Error("Failed to get canvas context");const s=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";a.fillStyle=r,a.fillRect(0,0,o.width,o.height);const f=64*s,p=o.width-f*2,h=20*s,v=36*s,x=(c?44:40)*s,j=(c?24:22)*s,g=18*s,m=x*1.25,y=j*1.45,b=c?5:4,k=c?4:3;a.font=`700 ${x}px -apple-system, BlinkMacSystemFont, sans-serif`;const T=ef(a,t.title,p),C=T.slice(0,b);if(T.length>b&&C.length>0){const G=C[C.length-1];G.endsWith("...")||(C[C.length-1]=G.slice(0,-3)+"...")}a.font=`400 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`;const P=t.description?ef(a,t.description,p):[],L=P.slice(0,k);if(P.length>k&&L.length>0){const G=L[L.length-1];G.endsWith("...")||(L[L.length-1]=G.slice(0,-3)+"...")}const I=v+h,V=C.length*m,N=L.length>0?h+L.length*y:0,$=I+V+N,U=Math.min(o.width,o.height)*.045,D=f+U+16*s,W=o.height-D-f,F=W-$-h*2;let E=0;if(t.image&&F>100*s){const G=c?o.width*.5:o.width*.4,le=120*s;E=Math.min(G,Math.max(le,F))}const M=E>0?h+E:0,O=$+M;let B=f+Math.max(0,(W-O)/2);if(t.favicon)try{const G=await hv(t.favicon);a.save(),a.beginPath(),a.arc(f+v/2,B+v/2,v/2,0,Math.PI*2),a.closePath(),a.clip(),a.drawImage(G,f,B,v,v),a.restore()}catch{a.fillStyle=i,a.beginPath(),a.arc(f+v/2,B+v/2,v/2,0,Math.PI*2),a.fill()}t.siteName&&(a.font=`500 ${22*s}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d,a.textAlign="left",a.textBaseline="middle",a.fillText(t.siteName,f+v+10*s,B+v/2)),B+=v+h,a.font=`700 ${x}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=u,a.textAlign="left",a.textBaseline="top";for(const G of C)a.fillText(G,f,B),B+=m;if(L.length>0){B+=h,a.font=`400 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d;for(const G of L)a.fillText(G,f,B),B+=y}if(t.image&&E>0){B+=h;try{const G=await hv(t.image),le=p;a.save(),IM(a,f,B,le,E,10*s),a.clip();const Re=G.width/G.height,Xe=le/E;let De=0,Wt=0,wt=G.width,Ne=G.height;Re>Xe?(wt=G.height*Xe,De=(G.width-wt)/2):(Ne=G.width/Xe,Wt=(G.height-Ne)/2),a.drawImage(G,De,Wt,wt,Ne,f,B,le,E),a.restore()}catch{}}const Y=o.height-f;a.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,a.fillStyle=i;const ae=p-U-16*s;let se=t.url;for(;a.measureText(se).width>ae&&se.length>20;)se=se.slice(0,-4)+"...";a.textAlign="left",a.textBaseline="middle",a.fillText(se,f,Y-U/2);try{const G=await _S();a.globalAlpha=.7,a.drawImage(G,o.width-f-U,Y-U,U,U),a.globalAlpha=1}catch{}return o.toDataURL("image/png",1)},hv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),IM=(e,t,n,r,i,o)=>{e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()},MM=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},OM=async e=>{var i,o;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const a=`https://api.microlink.io?url=${encodeURIComponent(e)}`,s=await fetch(a);if(!s.ok)return r;const c=await s.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((o=c.data.logo)==null?void 0:o.url)||r.favicon}:r}catch(a){return console.warn("Failed to fetch URL metadata:",a),r}},mv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],RM='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',NM=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},$M=w.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,FM=w.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--bg-primary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: 1024px) {
    padding: 32px;
  }
`,BM=w.div`
  width: 100%;
  max-width: 600px;
`,VM=w.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,zM=w.div`
  position: absolute;
  inset: 0;
`,WM=w.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,UM=w(_.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text-tertiary);
  
  svg {
    width: 48px;
    height: 48px;
    opacity: 0.4;
  }
  
  span {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.6;
  }
`,HM=w.div`
  width: 100%;
  padding: 24px;
  background: var(--bg-primary);
  border-top: 1px solid var(--glass-border);
  
  @media (min-width: 1024px) {
    width: 380px;
    min-width: 380px;
    padding: 32px;
    border-top: none;
    border-left: 1px solid var(--glass-border);
    overflow-y: auto;
    max-height: calc(100vh - 80px);
  }
`,YM=w.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,qi=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,eo=w.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,GM=w.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 16px;
  font-family: inherit;
  line-height: 1.5;
  resize: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  -webkit-user-select: text;
  user-select: text;
  touch-action: manipulation;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.1);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`,gv=w.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,vv=w.button`
  flex: 1;
  padding: 10px 16px;
  background: ${({$active:e})=>e?"var(--bg-primary)":"transparent"};
  border: none;
  border-radius: 8px;
  color: ${({$active:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({$active:e})=>e?"0 1px 3px rgba(0,0,0,0.1)":"none"};
  
  &:hover {
    color: var(--text-primary);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,KM=w.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,QM=w.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,XM=w.input`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--glass-border);
  border-radius: 4px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.15s ease;
    
    &:hover {
      transform: scale(1.1);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
  
  &::-moz-range-thumb {
    width: 22px;
    height: 22px;
    background: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
  }
`,ZM=w.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,JM=w(_.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 24px;
  background: ${({$variant:e})=>e==="secondary"?"var(--glass-bg)":"var(--accent)"};
  border: ${({$variant:e})=>e==="secondary"?"1px solid var(--glass-border)":"none"};
  border-radius: 14px;
  color: ${({$variant:e})=>e==="secondary"?"var(--text-primary)":"white"};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,qM=w(_.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,eO=w.input`
  width: 100%;
  padding: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`,tO=w.textarea`
  width: 100%;
  padding: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  line-height: 1.5;
  resize: none;
  min-height: 60px;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`,nO=w(_.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,rO=w(_.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,iO=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),oO=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),aO=()=>{const{isDark:e}=np(),[t,n]=S.useState(""),[r,i]=S.useState(64),[o,a]=S.useState("left"),[s,c]=S.useState(mv[1]),[u,d]=S.useState(null),[f,p]=S.useState(!1),[h,v]=S.useState(null),[x,j]=S.useState(""),[g,m]=S.useState(""),[y,b]=S.useState(!1),[k,T]=S.useState(null),C=S.useMemo(()=>NM(t),[t]),P=e?"#000000":"#ffffff",L=e?"#ffffff":"#000000",I=`${s.height/s.width*100}%`,V=S.useCallback(async()=>{if(!(!C||!t.trim())){b(!0),T(null),d(null);try{const D=await OM(t.trim());v(D),j(D.title),m(D.description)}catch{T("Unable to fetch URL preview")}b(!1)}},[t,C]),N=S.useCallback(async()=>{if(!t.trim()||C){C||d(null);return}p(!0);try{const D=await LM({text:t.trim(),fontSize:r,fontFamily:RM,textColor:L,backgroundColor:P,alignment:o,aspectRatio:s,padding:80});d(D)}catch(D){console.error("Preview generation failed:",D)}p(!1)},[t,C,r,o,s,P,L]),$=S.useCallback(async()=>{if(h){p(!0);try{const D=await _M({metadata:{...h,title:x||h.title,description:g||h.description},aspectRatio:s,backgroundColor:P,accentColor:"#2A9D8F"});d(D)}catch(D){console.error("URL preview generation failed:",D)}p(!1)}},[h,x,g,s,P]);S.useEffect(()=>{if(C)return;const D=setTimeout(N,200);return()=>clearTimeout(D)},[N,C]),S.useEffect(()=>{C?V():(v(null),j(""),m(""),T(null))},[C,V]),S.useEffect(()=>{h&&$()},[h,x,g,s,$]);const U=()=>{if(u){const F=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;MM(u,F)}};return l.jsxs($M,{children:[l.jsx(FM,{children:l.jsx(BM,{children:l.jsx(VM,{$bgColor:P,$paddingBottom:I,children:l.jsxs(zM,{children:[u&&l.jsx(WM,{src:u,alt:"Preview"}),l.jsx(Le,{children:!u&&l.jsxs(UM,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[l.jsx(oO,{}),l.jsx("span",{children:C?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),l.jsx(HM,{children:l.jsxs(YM,{children:[l.jsxs(qi,{children:[l.jsx(eo,{children:"Content"}),l.jsx(GM,{value:t,onChange:D=>n(D.target.value),onContextMenu:D=>D.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),C?l.jsxs(l.Fragment,{children:[y&&l.jsx(qi,{style:{alignItems:"center"},children:l.jsx(rO,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),k&&l.jsx(nO,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:k}),h&&l.jsxs(qM,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[l.jsx(eo,{children:"Edit Details"}),l.jsx(eO,{value:x,onChange:D=>j(D.target.value),placeholder:"Title"}),l.jsx(tO,{value:g,onChange:D=>m(D.target.value),placeholder:"Description"})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs(qi,{children:[l.jsx(eo,{children:"Font Size"}),l.jsxs(KM,{children:[l.jsx(QM,{children:l.jsx(XM,{type:"range",min:"24",max:"120",value:r,onChange:D=>i(Number(D.target.value))})}),l.jsx(ZM,{children:r})]})]}),l.jsxs(qi,{children:[l.jsx(eo,{children:"Alignment"}),l.jsx(gv,{children:["left","center","right"].map(D=>l.jsx(vv,{$active:o===D,onClick:()=>a(D),children:D.charAt(0).toUpperCase()+D.slice(1)},D))})]})]}),l.jsxs(qi,{children:[l.jsx(eo,{children:"Format"}),l.jsx(gv,{children:mv.map(D=>l.jsx(vv,{$active:s.id===D.id,onClick:()=>c(D),children:D.name},D.id))})]}),l.jsxs(JM,{onClick:U,disabled:!u||f,whileTap:{scale:.98},children:[l.jsx(iO,{}),"Download Image"]})]})})]})},sO=w(_.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,lO={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},cO=()=>l.jsx(sO,{variants:lO,initial:"hidden",animate:"visible",children:l.jsx(aO,{})}),uO=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},dO=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),l.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),l.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),l.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),l.jsx("path",{d:"M8 8v2"}),l.jsx("path",{d:"M16 8v2"}),l.jsx("path",{d:"M12 8v5"}),l.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),fO=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[l.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),l.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),l.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),l.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),l.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),l.jsx("path",{d:"M12 10v8"}),l.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),pO=w.div`
  min-height: 100vh;
  position: relative;
`,hO=w.main`
  position: relative;
  z-index: 1;
`,mO=w.a`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  z-index: 10000;
  transition: top var(--timing-small) var(--ease-standard);
  text-decoration: none;

  &:focus {
    top: 20px;
  }
`,gO=Ii`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,yv=w.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,xv=w.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${gO} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,wv=w.p`
  color: var(--text-secondary);
  font-size: 15px;
`,vO=w.button`
  padding: 12px 28px;
  background: var(--gradient);
  border: none;
  border-radius: var(--radius-full);
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(42, 157, 143, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,yO=()=>{const e=tp(),t=Li();return S.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function xO(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Mj(),i=S.useMemo(()=>uO()?dO:fO,[]);return t||!e&&!n?l.jsxs(yv,{children:[l.jsx(xv,{children:l.jsx(i,{})}),l.jsx(wv,{children:"Authenticating..."})]}):n&&!e?l.jsxs(yv,{children:[l.jsx(xv,{style:{animation:"none",opacity:1},children:l.jsx(i,{})}),l.jsx(wv,{children:"Authentication required to continue"}),l.jsx(vO,{onClick:r,children:"Try Again"})]}):l.jsxs(pO,{children:[l.jsx(yO,{}),l.jsx(mO,{href:"#main-content",children:"Skip to main content"}),l.jsx($C,{}),l.jsx(w5,{}),l.jsx(hO,{id:"main-content",children:l.jsxs(vj,{children:[l.jsx(Rr,{path:"/",element:l.jsx(O5,{})}),l.jsx(Rr,{path:"/tax-manager",element:l.jsx(C4,{})}),l.jsx(Rr,{path:"/expense-manager",element:l.jsx(EM,{})}),l.jsx(Rr,{path:"/canvas-manager",element:l.jsx(cO,{})}),l.jsx(Rr,{path:"/tax-calculator",element:l.jsx(mj,{to:"/tax-manager",replace:!0})})]})})]})}function wO(){return l.jsx(jj,{basename:"/tools",children:l.jsx(Dj,{children:l.jsxs(Ij,{children:[l.jsx(OC,{}),l.jsx(xO,{})]})})})}Mx(document.getElementById("root")).render(l.jsx(S.StrictMode,{children:l.jsx(wO,{})}));
