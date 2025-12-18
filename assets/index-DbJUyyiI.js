function NS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function $S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c0={exports:{}},gl={},d0={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),VS=Symbol.for("react.portal"),BS=Symbol.for("react.fragment"),FS=Symbol.for("react.strict_mode"),zS=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),US=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),GS=Symbol.for("react.memo"),KS=Symbol.for("react.lazy"),fh=Symbol.iterator;function QS(e){return e===null||typeof e!="object"?null:(e=fh&&e[fh]||e["@@iterator"],typeof e=="function"?e:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,h0={};function Di(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||f0}Di.prototype.isReactComponent={};Di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function m0(){}m0.prototype=Di.prototype;function Jd(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||f0}var qd=Jd.prototype=new m0;qd.constructor=Jd;p0(qd,Di.prototype);qd.isPureReactComponent=!0;var ph=Array.isArray,g0=Object.prototype.hasOwnProperty,ef={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function y0(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)g0.call(t,r)&&!v0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Za,type:e,key:a,ref:o,props:i,_owner:ef.current}}function XS(e,t){return{$$typeof:Za,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Za}function ZS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hh=/\/+/g;function lu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ZS(""+e.key):t.toString(36)}function ls(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Za:case VS:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+lu(o,0):r,ph(i)?(n="",e!=null&&(n=e.replace(hh,"$&/")+"/"),ls(i,t,n,"",function(c){return c})):i!=null&&(tf(i)&&(i=XS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ph(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+lu(a,s);o+=ls(a,t,n,u,i)}else if(u=QS(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+lu(a,s++),o+=ls(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function go(e,t,n){if(e==null)return e;var r=[],i=0;return ls(e,r,"","",function(a){return t.call(n,a,i++)}),r}function JS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},us={transition:null},qS={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:us,ReactCurrentOwner:ef};function x0(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:go,forEach:function(e,t,n){go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return go(e,function(){t++}),t},toArray:function(e){return go(e,function(t){return t})||[]},only:function(e){if(!tf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Di;U.Fragment=BS;U.Profiler=zS;U.PureComponent=Jd;U.StrictMode=FS;U.Suspense=YS;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;U.act=x0;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=p0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ef.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)g0.call(t,u)&&!v0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Za,type:e.type,key:i,ref:a,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:US,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:WS,_context:e},e.Consumer=e};U.createElement=y0;U.createFactory=function(e){var t=y0.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:HS,render:e}};U.isValidElement=tf;U.lazy=function(e){return{$$typeof:KS,_payload:{_status:-1,_result:e},_init:JS}};U.memo=function(e,t){return{$$typeof:GS,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=us.transition;us.transition={};try{e()}finally{us.transition=t}};U.unstable_act=x0;U.useCallback=function(e,t){return Je.current.useCallback(e,t)};U.useContext=function(e){return Je.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};U.useEffect=function(e,t){return Je.current.useEffect(e,t)};U.useId=function(){return Je.current.useId()};U.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Je.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};U.useRef=function(e){return Je.current.useRef(e)};U.useState=function(e){return Je.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Je.current.useTransition()};U.version="18.3.1";d0.exports=U;var w=d0.exports;const Gt=$S(w),e2=NS({__proto__:null,default:Gt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t2=w,n2=Symbol.for("react.element"),r2=Symbol.for("react.fragment"),i2=Object.prototype.hasOwnProperty,a2=t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o2={key:!0,ref:!0,__self:!0,__source:!0};function w0(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)i2.call(t,r)&&!o2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:n2,type:e,key:a,ref:o,props:i,_owner:a2.current}}gl.Fragment=r2;gl.jsx=w0;gl.jsxs=w0;c0.exports=gl;var l=c0.exports,S0={exports:{}},gt={},b0={exports:{}},k0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var O=_.length;_.push(L);e:for(;0<O;){var z=O-1>>>1,H=_[z];if(0<i(H,L))_[z]=L,_[O]=H,O=z;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],O=_.pop();if(O!==L){_[0]=O;e:for(var z=0,H=_.length,me=H>>>1;z<me;){var Ee=2*(z+1)-1,yt=_[Ee],Ae=Ee+1,Ge=_[Ae];if(0>i(yt,O))Ae<H&&0>i(Ge,yt)?(_[z]=Ge,_[Ae]=O,z=Ae):(_[z]=yt,_[Ee]=O,z=Ee);else if(Ae<H&&0>i(Ge,O))_[z]=Ge,_[Ae]=O,z=Ae;else break e}}return L}function i(_,L){var O=_.sortIndex-L.sortIndex;return O!==0?O:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],d=1,f=null,p=3,m=!1,x=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(_){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=_)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function k(_){if(y=!1,v(_),!x)if(n(u)!==null)x=!0,V(C);else{var L=n(c);L!==null&&B(k,L.startTime-_)}}function C(_,L){x=!1,y&&(y=!1,g(P),P=-1),m=!0;var O=p;try{for(v(L),f=n(u);f!==null&&(!(f.expirationTime>L)||_&&!M());){var z=f.callback;if(typeof z=="function"){f.callback=null,p=f.priorityLevel;var H=z(f.expirationTime<=L);L=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(u)&&r(u),v(L)}else r(u);f=n(u)}if(f!==null)var me=!0;else{var Ee=n(c);Ee!==null&&B(k,Ee.startTime-L),me=!1}return me}finally{f=null,p=O,m=!1}}var j=!1,T=null,P=-1,A=5,D=-1;function M(){return!(e.unstable_now()-D<A)}function Q(){if(T!==null){var _=e.unstable_now();D=_;var L=!0;try{L=T(!0,_)}finally{L?re():(j=!1,T=null)}}else j=!1}var re;if(typeof h=="function")re=function(){h(Q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,N=he.port2;he.port1.onmessage=Q,re=function(){N.postMessage(null)}}else re=function(){S(Q,0)};function V(_){T=_,j||(j=!0,re())}function B(_,L){P=S(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,V(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var O=p;p=L;try{return _()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=p;p=_;try{return L()}finally{p=O}},e.unstable_scheduleCallback=function(_,L,O){var z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?z+O:z):O=z,_){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=O+H,_={id:d++,callback:L,priorityLevel:_,startTime:O,expirationTime:H,sortIndex:-1},O>z?(_.sortIndex=O,t(c,_),n(u)===null&&_===n(c)&&(y?(g(P),P=-1):y=!0,B(k,O-z))):(_.sortIndex=H,t(u,_),x||m||(x=!0,V(C))),_},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(_){var L=p;return function(){var O=p;p=L;try{return _.apply(this,arguments)}finally{p=O}}}})(k0);b0.exports=k0;var s2=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l2=w,ht=s2;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,Ca={};function Pr(e,t){di(e,t),di(e+"Capture",t)}function di(e,t){for(Ca[e]=t,e=0;e<t.length;e++)C0.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,u2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function c2(e){return yc.call(gh,e)?!0:yc.call(mh,e)?!1:u2.test(e)?gh[e]=!0:(mh[e]=!0,!1)}function d2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f2(e,t,n,r){if(t===null||typeof t>"u"||d2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nf,rf);$e[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nf,rf);$e[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nf,rf);$e[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function af(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f2(t,n,i,r)&&(n=null),r||i===null?c2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=l2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),P0=Symbol.for("react.offscreen"),vh=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,uu;function ea(e){if(uu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uu=t&&t[1]||""}return`
`+uu+e}var cu=!1;function du(e,t){if(!e||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ea(e):""}function p2(e){switch(e.tag){case 5:return ea(e.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return e=du(e.type,!1),e;case 11:return e=du(e.type.render,!1),e;case 1:return e=du(e.type,!0),e;default:return""}}function bc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nr:return"Fragment";case Mr:return"Portal";case xc:return"Profiler";case of:return"StrictMode";case wc:return"Suspense";case Sc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T0:return(e.displayName||"Context")+".Consumer";case j0:return(e._context.displayName||"Context")+".Provider";case sf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lf:return t=e.displayName||null,t!==null?t:bc(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return bc(e(t))}catch{}}return null}function h2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(t);case 8:return t===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function D0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m2(e){var t=D0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=m2(e))}function E0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=D0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kc(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function A0(e,t){t=t.checked,t!=null&&af(e,"checked",t,!1)}function Cc(e,t){A0(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jc(e,t.type,n):t.hasOwnProperty("defaultValue")&&jc(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jc(e,t,n){(t!=="number"||_s(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ta=Array.isArray;function ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(ta(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function _0(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function I0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?I0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,L0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g2=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(e){g2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ca[t]=ca[e]})});function O0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ca.hasOwnProperty(e)&&ca[e]?(""+t).trim():t+"px"}function R0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=O0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var v2=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(e,t){if(t){if(v2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ec(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function uf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _c=null,ai=null,oi=null;function bh(e){if(e=eo(e)){if(typeof _c!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Sl(t),_c(e.stateNode,e.type,t))}}function M0(e){ai?oi?oi.push(e):oi=[e]:ai=e}function N0(){if(ai){var e=ai,t=oi;if(oi=ai=null,bh(e),t)for(e=0;e<t.length;e++)bh(t[e])}}function $0(e,t){return e(t)}function V0(){}var fu=!1;function B0(e,t,n){if(fu)return e(t,n);fu=!0;try{return $0(e,t,n)}finally{fu=!1,(ai!==null||oi!==null)&&(V0(),N0())}}function Ta(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Ic=!1;if(ln)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Ic=!1}function y2(e,t,n,r,i,a,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var da=!1,Is=null,Ls=!1,Lc=null,x2={onError:function(e){da=!0,Is=e}};function w2(e,t,n,r,i,a,o,s,u){da=!1,Is=null,y2.apply(x2,arguments)}function S2(e,t,n,r,i,a,o,s,u){if(w2.apply(this,arguments),da){if(da){var c=Is;da=!1,Is=null}else throw Error(E(198));Ls||(Ls=!0,Lc=c)}}function Dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function F0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kh(e){if(Dr(e)!==e)throw Error(E(188))}function b2(e){var t=e.alternate;if(!t){if(t=Dr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return kh(i),e;if(a===r)return kh(i),t;a=a.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function z0(e){return e=b2(e),e!==null?W0(e):null}function W0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=W0(e);if(t!==null)return t;e=e.sibling}return null}var U0=ht.unstable_scheduleCallback,Ch=ht.unstable_cancelCallback,k2=ht.unstable_shouldYield,C2=ht.unstable_requestPaint,we=ht.unstable_now,j2=ht.unstable_getCurrentPriorityLevel,cf=ht.unstable_ImmediatePriority,H0=ht.unstable_UserBlockingPriority,Os=ht.unstable_NormalPriority,T2=ht.unstable_LowPriority,Y0=ht.unstable_IdlePriority,vl=null,Kt=null;function P2(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:A2,D2=Math.log,E2=Math.LN2;function A2(e){return e>>>=0,e===0?32:31-(D2(e)/E2|0)|0}var wo=64,So=4194304;function na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=na(s):(a&=o,a!==0&&(r=na(a)))}else o=n&~i,o!==0?r=na(o):a!==0&&(r=na(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function _2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=_2(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function G0(){var e=wo;return wo<<=1,!(wo&4194240)&&(wo=64),e}function pu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ja(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function L2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function df(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function K0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Q0,ff,X0,Z0,J0,Rc=!1,bo=[],In=null,Ln=null,On=null,Pa=new Map,Da=new Map,Pn=[],O2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Pa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function Wi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=eo(t),t!==null&&ff(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R2(e,t,n,r,i){switch(t){case"focusin":return In=Wi(In,e,t,n,r,i),!0;case"dragenter":return Ln=Wi(Ln,e,t,n,r,i),!0;case"mouseover":return On=Wi(On,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Pa.set(a,Wi(Pa.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Da.set(a,Wi(Da.get(a)||null,e,t,n,r,i)),!0}return!1}function q0(e){var t=ur(e.target);if(t!==null){var n=Dr(t);if(n!==null){if(t=n.tag,t===13){if(t=F0(n),t!==null){e.blockedOn=t,J0(e.priority,function(){X0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return t=eo(n),t!==null&&ff(t),e.blockedOn=n,!1;t.shift()}return!0}function Th(e,t,n){cs(e)&&n.delete(t)}function M2(){Rc=!1,In!==null&&cs(In)&&(In=null),Ln!==null&&cs(Ln)&&(Ln=null),On!==null&&cs(On)&&(On=null),Pa.forEach(Th),Da.forEach(Th)}function Ui(e,t){e.blockedOn===t&&(e.blockedOn=null,Rc||(Rc=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,M2)))}function Ea(e){function t(i){return Ui(i,e)}if(0<bo.length){Ui(bo[0],e);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Ui(In,e),Ln!==null&&Ui(Ln,e),On!==null&&Ui(On,e),Pa.forEach(t),Da.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&Pn.shift()}var si=pn.ReactCurrentBatchConfig,Ms=!0;function N2(e,t,n,r){var i=X,a=si.transition;si.transition=null;try{X=1,pf(e,t,n,r)}finally{X=i,si.transition=a}}function $2(e,t,n,r){var i=X,a=si.transition;si.transition=null;try{X=4,pf(e,t,n,r)}finally{X=i,si.transition=a}}function pf(e,t,n,r){if(Ms){var i=Mc(e,t,n,r);if(i===null)ku(e,t,r,Ns,n),jh(e,r);else if(R2(i,e,t,n,r))r.stopPropagation();else if(jh(e,r),t&4&&-1<O2.indexOf(e)){for(;i!==null;){var a=eo(i);if(a!==null&&Q0(a),a=Mc(e,t,n,r),a===null&&ku(e,t,r,Ns,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ku(e,t,r,null,n)}}var Ns=null;function Mc(e,t,n,r){if(Ns=null,e=uf(r),e=ur(e),e!==null)if(t=Dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=F0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ns=e,null}function ey(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j2()){case cf:return 1;case H0:return 4;case Os:case T2:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var En=null,hf=null,ds=null;function ty(){if(ds)return ds;var e,t=hf,n=t.length,r,i="value"in En?En.value:En.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ds=i.slice(e,1<r?1-r:void 0)}function fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Ph(){return!1}function vt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ko:Ph,this.isPropagationStopped=Ph,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=vt(Ei),qa=pe({},Ei,{view:0,detail:0}),V2=vt(qa),hu,mu,Hi,yl=pe({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(hu=e.screenX-Hi.screenX,mu=e.screenY-Hi.screenY):mu=hu=0,Hi=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),Dh=vt(yl),B2=pe({},yl,{dataTransfer:0}),F2=vt(B2),z2=pe({},qa,{relatedTarget:0}),gu=vt(z2),W2=pe({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),U2=vt(W2),H2=pe({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y2=vt(H2),G2=pe({},Ei,{data:0}),Eh=vt(G2),K2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X2[e])?!!t[e]:!1}function gf(){return Z2}var J2=pe({},qa,{key:function(e){if(e.key){var t=K2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(e){return e.type==="keypress"?fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q2=vt(J2),eb=pe({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=vt(eb),tb=pe({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),nb=vt(tb),rb=pe({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),ib=vt(rb),ab=pe({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ob=vt(ab),sb=[9,13,27,32],vf=ln&&"CompositionEvent"in window,fa=null;ln&&"documentMode"in document&&(fa=document.documentMode);var lb=ln&&"TextEvent"in window&&!fa,ny=ln&&(!vf||fa&&8<fa&&11>=fa),_h=" ",Ih=!1;function ry(e,t){switch(e){case"keyup":return sb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function ub(e,t){switch(e){case"compositionend":return iy(t);case"keypress":return t.which!==32?null:(Ih=!0,_h);case"textInput":return e=t.data,e===_h&&Ih?null:e;default:return null}}function cb(e,t){if($r)return e==="compositionend"||!vf&&ry(e,t)?(e=ty(),ds=hf=En=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ny&&t.locale!=="ko"?null:t.data;default:return null}}var db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!db[e.type]:t==="textarea"}function ay(e,t,n,r){M0(r),t=$s(t,"onChange"),0<t.length&&(n=new mf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pa=null,Aa=null;function fb(e){gy(e,0)}function xl(e){var t=Fr(e);if(E0(t))return e}function pb(e,t){if(e==="change")return t}var oy=!1;if(ln){var vu;if(ln){var yu="oninput"in document;if(!yu){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),yu=typeof Oh.oninput=="function"}vu=yu}else vu=!1;oy=vu&&(!document.documentMode||9<document.documentMode)}function Rh(){pa&&(pa.detachEvent("onpropertychange",sy),Aa=pa=null)}function sy(e){if(e.propertyName==="value"&&xl(Aa)){var t=[];ay(t,Aa,e,uf(e)),B0(fb,t)}}function hb(e,t,n){e==="focusin"?(Rh(),pa=t,Aa=n,pa.attachEvent("onpropertychange",sy)):e==="focusout"&&Rh()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Aa)}function gb(e,t){if(e==="click")return xl(t)}function vb(e,t){if(e==="input"||e==="change")return xl(t)}function yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:yb;function _a(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yc.call(t,i)||!Bt(e[i],t[i]))return!1}return!0}function Mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nh(e,t){var n=Mh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function ly(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ly(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uy(){for(var e=window,t=_s();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_s(e.document)}return t}function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xb(e){var t=uy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ly(n.ownerDocument.documentElement,n)){if(r!==null&&yf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Nh(n,a);var o=Nh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wb=ln&&"documentMode"in document&&11>=document.documentMode,Vr=null,Nc=null,ha=null,$c=!1;function $h(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||Vr==null||Vr!==_s(r)||(r=Vr,"selectionStart"in r&&yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&_a(ha,r)||(ha=r,r=$s(Nc,"onSelect"),0<r.length&&(t=new mf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},xu={},cy={};ln&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function wl(e){if(xu[e])return xu[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cy)return xu[e]=t[n];return e}var dy=wl("animationend"),fy=wl("animationiteration"),py=wl("animationstart"),hy=wl("transitionend"),my=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){my.set(e,t),Pr(t,[e])}for(var wu=0;wu<Vh.length;wu++){var Su=Vh[wu],Sb=Su.toLowerCase(),bb=Su[0].toUpperCase()+Su.slice(1);Gn(Sb,"on"+bb)}Gn(dy,"onAnimationEnd");Gn(fy,"onAnimationIteration");Gn(py,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(hy,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Bh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S2(r,t,void 0,e),e.currentTarget=null}function gy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;Bh(i,s,c),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;Bh(i,s,c),a=u}}}if(Ls)throw e=Lc,Ls=!1,Lc=null,e}function q(e,t){var n=t[Wc];n===void 0&&(n=t[Wc]=new Set);var r=e+"__bubble";n.has(r)||(vy(t,e,2,!1),n.add(r))}function bu(e,t,n){var r=0;t&&(r|=4),vy(n,e,r,t)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Ia(e){if(!e[jo]){e[jo]=!0,C0.forEach(function(n){n!=="selectionchange"&&(kb.has(n)||bu(n,!1,e),bu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,bu("selectionchange",!1,t))}}function vy(e,t,n,r){switch(ey(t)){case 1:var i=N2;break;case 4:i=$2;break;default:i=pf}n=i.bind(null,t,n,e),i=void 0,!Ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ku(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ur(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}B0(function(){var c=a,d=uf(n),f=[];e:{var p=my.get(e);if(p!==void 0){var m=mf,x=e;switch(e){case"keypress":if(fs(n)===0)break e;case"keydown":case"keyup":m=q2;break;case"focusin":x="focus",m=gu;break;case"focusout":x="blur",m=gu;break;case"beforeblur":case"afterblur":m=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=F2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nb;break;case dy:case fy:case py:m=U2;break;case hy:m=ib;break;case"scroll":m=V2;break;case"wheel":m=ob;break;case"copy":case"cut":case"paste":m=Y2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ah}var y=(t&4)!==0,S=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var h=c,v;h!==null;){v=h;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Ta(h,g),k!=null&&y.push(La(h,k,v)))),S)break;h=h.return}0<y.length&&(p=new m(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Ac&&(x=n.relatedTarget||n.fromElement)&&(ur(x)||x[un]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?ur(x):null,x!==null&&(S=Dr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=Dh,k="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ah,k="onPointerLeave",g="onPointerEnter",h="pointer"),S=m==null?p:Fr(m),v=x==null?p:Fr(x),p=new y(k,h+"leave",m,n,d),p.target=S,p.relatedTarget=v,k=null,ur(d)===c&&(y=new y(g,h+"enter",x,n,d),y.target=v,y.relatedTarget=S,k=y),S=k,m&&x)t:{for(y=m,g=x,h=0,v=y;v;v=Lr(v))h++;for(v=0,k=g;k;k=Lr(k))v++;for(;0<h-v;)y=Lr(y),h--;for(;0<v-h;)g=Lr(g),v--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Lr(y),g=Lr(g)}y=null}else y=null;m!==null&&Fh(f,p,m,y,!1),x!==null&&S!==null&&Fh(f,S,x,y,!0)}}e:{if(p=c?Fr(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=pb;else if(Lh(p))if(oy)C=vb;else{C=mb;var j=hb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=gb);if(C&&(C=C(e,c))){ay(f,C,n,d);break e}j&&j(e,p,c),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&jc(p,"number",p.value)}switch(j=c?Fr(c):window,e){case"focusin":(Lh(j)||j.contentEditable==="true")&&(Vr=j,Nc=c,ha=null);break;case"focusout":ha=Nc=Vr=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,$h(f,n,d);break;case"selectionchange":if(wb)break;case"keydown":case"keyup":$h(f,n,d)}var T;if(vf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $r?ry(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ny&&n.locale!=="ko"&&($r||P!=="onCompositionStart"?P==="onCompositionEnd"&&$r&&(T=ty()):(En=d,hf="value"in En?En.value:En.textContent,$r=!0)),j=$s(c,P),0<j.length&&(P=new Eh(P,e,null,n,d),f.push({event:P,listeners:j}),T?P.data=T:(T=iy(n),T!==null&&(P.data=T)))),(T=lb?ub(e,n):cb(e,n))&&(c=$s(c,"onBeforeInput"),0<c.length&&(d=new Eh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}gy(f,t)})}function La(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ta(e,n),a!=null&&r.unshift(La(e,a,i)),a=Ta(e,t),a!=null&&r.push(La(e,a,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Ta(n,a),u!=null&&o.unshift(La(n,u,s))):i||(u=Ta(n,a),u!=null&&o.push(La(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Cb=/\r\n?/g,jb=/\u0000|\uFFFD/g;function zh(e){return(typeof e=="string"?e:""+e).replace(Cb,`
`).replace(jb,"")}function To(e,t,n){if(t=zh(t),zh(e)!==t&&n)throw Error(E(425))}function Vs(){}var Vc=null,Bc=null;function Fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,Tb=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Pb=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(Db)}:zc;function Db(e){setTimeout(function(){throw e})}function Cu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ea(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ea(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Ai,Oa="__reactProps$"+Ai,un="__reactContainer$"+Ai,Wc="__reactEvents$"+Ai,Eb="__reactListeners$"+Ai,Ab="__reactHandles$"+Ai;function ur(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uh(e);e!==null;){if(n=e[Yt])return n;e=Uh(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[Yt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Sl(e){return e[Oa]||null}var Uc=[],zr=-1;function Kn(e){return{current:e}}function te(e){0>zr||(e.current=Uc[zr],Uc[zr]=null,zr--)}function Z(e,t){zr++,Uc[zr]=e.current,e.current=t}var Un={},Ye=Kn(Un),it=Kn(!1),br=Un;function fi(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function Bs(){te(it),te(Ye)}function Hh(e,t,n){if(Ye.current!==Un)throw Error(E(168));Z(Ye,t),Z(it,n)}function yy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,h2(e)||"Unknown",i));return pe({},n,r)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,br=Ye.current,Z(Ye,e),Z(it,it.current),!0}function Yh(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=yy(e,t,br),r.__reactInternalMemoizedMergedChildContext=e,te(it),te(Ye),Z(Ye,e)):te(it),Z(it,n)}var tn=null,bl=!1,ju=!1;function xy(e){tn===null?tn=[e]:tn.push(e)}function _b(e){bl=!0,xy(e)}function Qn(){if(!ju&&tn!==null){ju=!0;var e=0,t=X;try{var n=tn;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tn=null,bl=!1}catch(i){throw tn!==null&&(tn=tn.slice(e+1)),U0(cf,Qn),i}finally{X=t,ju=!1}}return null}var Wr=[],Ur=0,zs=null,Ws=0,bt=[],kt=0,kr=null,nn=1,rn="";function ar(e,t){Wr[Ur++]=Ws,Wr[Ur++]=zs,zs=e,Ws=t}function wy(e,t,n){bt[kt++]=nn,bt[kt++]=rn,bt[kt++]=kr,kr=e;var r=nn;e=rn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nn=1<<32-Nt(t)+i|n<<i|r,rn=a+e}else nn=1<<a|n<<i|r,rn=e}function xf(e){e.return!==null&&(ar(e,1),wy(e,1,0))}function wf(e){for(;e===zs;)zs=Wr[--Ur],Wr[Ur]=null,Ws=Wr[--Ur],Wr[Ur]=null;for(;e===kr;)kr=bt[--kt],bt[kt]=null,rn=bt[--kt],bt[kt]=null,nn=bt[--kt],bt[kt]=null}var ft=null,dt=null,se=!1,Mt=null;function Sy(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function Hc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yc(e){if(se){var t=dt;if(t){var n=t;if(!Gh(e,t)){if(Hc(e))throw Error(E(418));t=Rn(n.nextSibling);var r=ft;t&&Gh(e,t)?Sy(r,n):(e.flags=e.flags&-4097|2,se=!1,ft=e)}}else{if(Hc(e))throw Error(E(418));e.flags=e.flags&-4097|2,se=!1,ft=e}}}function Kh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Po(e){if(e!==ft)return!1;if(!se)return Kh(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fc(e.type,e.memoizedProps)),t&&(t=dt)){if(Hc(e))throw by(),Error(E(418));for(;t;)Sy(e,t),t=Rn(t.nextSibling)}if(Kh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?Rn(e.stateNode.nextSibling):null;return!0}function by(){for(var e=dt;e;)e=Rn(e.nextSibling)}function pi(){dt=ft=null,se=!1}function Sf(e){Mt===null?Mt=[e]:Mt.push(e)}var Ib=pn.ReactCurrentBatchConfig;function Yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qh(e){var t=e._init;return t(e._payload)}function ky(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Vn(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,v,k){return h===null||h.tag!==6?(h=Iu(v,g.mode,k),h.return=g,h):(h=i(h,v),h.return=g,h)}function u(g,h,v,k){var C=v.type;return C===Nr?d(g,h,v.props.children,k,v.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&Qh(C)===h.type)?(k=i(h,v.props),k.ref=Yi(g,h,v),k.return=g,k):(k=xs(v.type,v.key,v.props,null,g.mode,k),k.ref=Yi(g,h,v),k.return=g,k)}function c(g,h,v,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Lu(v,g.mode,k),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,k,C){return h===null||h.tag!==7?(h=vr(v,g.mode,k,C),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Iu(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vo:return v=xs(h.type,h.key,h.props,null,g.mode,v),v.ref=Yi(g,null,h),v.return=g,v;case Mr:return h=Lu(h,g.mode,v),h.return=g,h;case jn:var k=h._init;return f(g,k(h._payload),v)}if(ta(h)||Fi(h))return h=vr(h,g.mode,v,null),h.return=g,h;Do(g,h)}return null}function p(g,h,v,k){var C=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:s(g,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vo:return v.key===C?u(g,h,v,k):null;case Mr:return v.key===C?c(g,h,v,k):null;case jn:return C=v._init,p(g,h,C(v._payload),k)}if(ta(v)||Fi(v))return C!==null?null:d(g,h,v,k,null);Do(g,v)}return null}function m(g,h,v,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,s(h,g,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case vo:return g=g.get(k.key===null?v:k.key)||null,u(h,g,k,C);case Mr:return g=g.get(k.key===null?v:k.key)||null,c(h,g,k,C);case jn:var j=k._init;return m(g,h,v,j(k._payload),C)}if(ta(k)||Fi(k))return g=g.get(v)||null,d(h,g,k,C,null);Do(h,k)}return null}function x(g,h,v,k){for(var C=null,j=null,T=h,P=h=0,A=null;T!==null&&P<v.length;P++){T.index>P?(A=T,T=null):A=T.sibling;var D=p(g,T,v[P],k);if(D===null){T===null&&(T=A);break}e&&T&&D.alternate===null&&t(g,T),h=a(D,h,P),j===null?C=D:j.sibling=D,j=D,T=A}if(P===v.length)return n(g,T),se&&ar(g,P),C;if(T===null){for(;P<v.length;P++)T=f(g,v[P],k),T!==null&&(h=a(T,h,P),j===null?C=T:j.sibling=T,j=T);return se&&ar(g,P),C}for(T=r(g,T);P<v.length;P++)A=m(T,g,P,v[P],k),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?P:A.key),h=a(A,h,P),j===null?C=A:j.sibling=A,j=A);return e&&T.forEach(function(M){return t(g,M)}),se&&ar(g,P),C}function y(g,h,v,k){var C=Fi(v);if(typeof C!="function")throw Error(E(150));if(v=C.call(v),v==null)throw Error(E(151));for(var j=C=null,T=h,P=h=0,A=null,D=v.next();T!==null&&!D.done;P++,D=v.next()){T.index>P?(A=T,T=null):A=T.sibling;var M=p(g,T,D.value,k);if(M===null){T===null&&(T=A);break}e&&T&&M.alternate===null&&t(g,T),h=a(M,h,P),j===null?C=M:j.sibling=M,j=M,T=A}if(D.done)return n(g,T),se&&ar(g,P),C;if(T===null){for(;!D.done;P++,D=v.next())D=f(g,D.value,k),D!==null&&(h=a(D,h,P),j===null?C=D:j.sibling=D,j=D);return se&&ar(g,P),C}for(T=r(g,T);!D.done;P++,D=v.next())D=m(T,g,P,D.value,k),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?P:D.key),h=a(D,h,P),j===null?C=D:j.sibling=D,j=D);return e&&T.forEach(function(Q){return t(g,Q)}),se&&ar(g,P),C}function S(g,h,v,k){if(typeof v=="object"&&v!==null&&v.type===Nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case vo:e:{for(var C=v.key,j=h;j!==null;){if(j.key===C){if(C=v.type,C===Nr){if(j.tag===7){n(g,j.sibling),h=i(j,v.props.children),h.return=g,g=h;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&Qh(C)===j.type){n(g,j.sibling),h=i(j,v.props),h.ref=Yi(g,j,v),h.return=g,g=h;break e}n(g,j);break}else t(g,j);j=j.sibling}v.type===Nr?(h=vr(v.props.children,g.mode,k,v.key),h.return=g,g=h):(k=xs(v.type,v.key,v.props,null,g.mode,k),k.ref=Yi(g,h,v),k.return=g,g=k)}return o(g);case Mr:e:{for(j=v.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Lu(v,g.mode,k),h.return=g,g=h}return o(g);case jn:return j=v._init,S(g,h,j(v._payload),k)}if(ta(v))return x(g,h,v,k);if(Fi(v))return y(g,h,v,k);Do(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=Iu(v,g.mode,k),h.return=g,g=h),o(g)):n(g,h)}return S}var hi=ky(!0),Cy=ky(!1),Us=Kn(null),Hs=null,Hr=null,bf=null;function kf(){bf=Hr=Hs=null}function Cf(e){var t=Us.current;te(Us),e._currentValue=t}function Gc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function li(e,t){Hs=e,bf=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(bf!==e)if(e={context:e,memoizedValue:t,next:null},Hr===null){if(Hs===null)throw Error(E(308));Hr=e,Hs.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return t}var cr=null;function jf(e){cr===null?cr=[e]:cr.push(e)}function jy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jf(t)):(n.next=i.next,i.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tn=!1;function Tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ty(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,cn(e,n)}return i=r.interleaved,i===null?(t.next=t,jf(r)):(t.next=i.next,i.next=t),r.interleaved=t,cn(e,n)}function ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,df(e,n)}}function Xh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var i=e.updateQueue;Tn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?a=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(a!==null){var f=i.baseState;o=0,d=c=u=null,s=a;do{var p=s.lane,m=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(p=t,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(m,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(m,f,p):x,p==null)break e;f=pe({},f,p);break e;case 2:Tn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=m,u=f):d=d.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);jr|=o,e.lanes=o,e.memoizedState=f}}function Zh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var to={},Qt=Kn(to),Ra=Kn(to),Ma=Kn(to);function dr(e){if(e===to)throw Error(E(174));return e}function Pf(e,t){switch(Z(Ma,t),Z(Ra,e),Z(Qt,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pc(t,e)}te(Qt),Z(Qt,t)}function mi(){te(Qt),te(Ra),te(Ma)}function Py(e){dr(Ma.current);var t=dr(Qt.current),n=Pc(t,e.type);t!==n&&(Z(Ra,e),Z(Qt,n))}function Df(e){Ra.current===e&&(te(Qt),te(Ra))}var ce=Kn(0);function Gs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tu=[];function Ef(){for(var e=0;e<Tu.length;e++)Tu[e]._workInProgressVersionPrimary=null;Tu.length=0}var hs=pn.ReactCurrentDispatcher,Pu=pn.ReactCurrentBatchConfig,Cr=0,fe=null,Te=null,_e=null,Ks=!1,ma=!1,Na=0,Lb=0;function Be(){throw Error(E(321))}function Af(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function _f(e,t,n,r,i,a){if(Cr=a,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hs.current=e===null||e.memoizedState===null?Nb:$b,e=n(r,i),ma){a=0;do{if(ma=!1,Na=0,25<=a)throw Error(E(301));a+=1,_e=Te=null,t.updateQueue=null,hs.current=Vb,e=n(r,i)}while(ma)}if(hs.current=Qs,t=Te!==null&&Te.next!==null,Cr=0,_e=Te=fe=null,Ks=!1,t)throw Error(E(300));return e}function If(){var e=Na!==0;return Na=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?fe.memoizedState=_e=e:_e=_e.next=e,_e}function Pt(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=_e===null?fe.memoizedState:_e.next;if(t!==null)_e=t,Te=e;else{if(e===null)throw Error(E(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},_e===null?fe.memoizedState=_e=e:_e=_e.next=e}return _e}function $a(e,t){return typeof t=="function"?t(e):t}function Du(e){var t=Pt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,u=null,c=a;do{var d=c.lane;if((Cr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=f,o=r):u=u.next=f,fe.lanes|=d,jr|=d}c=c.next}while(c!==null&&c!==a);u===null?o=r:u.next=s,Bt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,fe.lanes|=a,jr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Eu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Bt(a,t.memoizedState)||(rt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Dy(){}function Ey(e,t){var n=fe,r=Pt(),i=t(),a=!Bt(r.memoizedState,i);if(a&&(r.memoizedState=i,rt=!0),r=r.queue,Lf(Iy.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Va(9,_y.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(E(349));Cr&30||Ay(n,t,i)}return i}function Ay(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _y(e,t,n,r){t.value=n,t.getSnapshot=r,Ly(t)&&Oy(e)}function Iy(e,t,n){return n(function(){Ly(t)&&Oy(e)})}function Ly(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Oy(e){var t=cn(e,1);t!==null&&$t(t,e,1,-1)}function Jh(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},t.queue=e,e=e.dispatch=Mb.bind(null,fe,e),[t.memoizedState,e]}function Va(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ry(){return Pt().memoizedState}function ms(e,t,n,r){var i=Ut();fe.flags|=e,i.memoizedState=Va(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var i=Pt();r=r===void 0?null:r;var a=void 0;if(Te!==null){var o=Te.memoizedState;if(a=o.destroy,r!==null&&Af(r,o.deps)){i.memoizedState=Va(t,n,a,r);return}}fe.flags|=e,i.memoizedState=Va(1|t,n,a,r)}function qh(e,t){return ms(8390656,8,e,t)}function Lf(e,t){return kl(2048,8,e,t)}function My(e,t){return kl(4,2,e,t)}function Ny(e,t){return kl(4,4,e,t)}function $y(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vy(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,$y.bind(null,t,e),n)}function Of(){}function By(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Af(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fy(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Af(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zy(e,t,n){return Cr&21?(Bt(n,t)||(n=G0(),fe.lanes|=n,jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function Ob(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Pu.transition;Pu.transition={};try{e(!1),t()}finally{X=n,Pu.transition=r}}function Wy(){return Pt().memoizedState}function Rb(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uy(e))Hy(t,n);else if(n=jy(e,t,n,r),n!==null){var i=Ze();$t(n,e,r,i),Yy(n,t,r)}}function Mb(e,t,n){var r=$n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uy(e))Hy(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Bt(s,o)){var u=t.interleaved;u===null?(i.next=i,jf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=jy(e,t,i,r),n!==null&&(i=Ze(),$t(n,e,r,i),Yy(n,t,r))}}function Uy(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Hy(e,t){ma=Ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,df(e,n)}}var Qs={readContext:Tt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Nb={readContext:Tt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ms(4194308,4,$y.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return ms(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rb.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Jh,useDebugValue:Of,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Jh(!1),t=e[0];return e=Ob.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Ut();if(se){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Le===null)throw Error(E(349));Cr&30||Ay(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,qh(Iy.bind(null,r,a,e),[e]),r.flags|=2048,Va(9,_y.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Le.identifierPrefix;if(se){var n=rn,r=nn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$b={readContext:Tt,useCallback:By,useContext:Tt,useEffect:Lf,useImperativeHandle:Vy,useInsertionEffect:My,useLayoutEffect:Ny,useMemo:Fy,useReducer:Du,useRef:Ry,useState:function(){return Du($a)},useDebugValue:Of,useDeferredValue:function(e){var t=Pt();return zy(t,Te.memoizedState,e)},useTransition:function(){var e=Du($a)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Dy,useSyncExternalStore:Ey,useId:Wy,unstable_isNewReconciler:!1},Vb={readContext:Tt,useCallback:By,useContext:Tt,useEffect:Lf,useImperativeHandle:Vy,useInsertionEffect:My,useLayoutEffect:Ny,useMemo:Fy,useReducer:Eu,useRef:Ry,useState:function(){return Eu($a)},useDebugValue:Of,useDeferredValue:function(e){var t=Pt();return Te===null?t.memoizedState=e:zy(t,Te.memoizedState,e)},useTransition:function(){var e=Eu($a)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Dy,useSyncExternalStore:Ey,useId:Wy,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Kc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=$n(e),a=an(r,i);a.payload=t,n!=null&&(a.callback=n),t=Mn(e,a,i),t!==null&&($t(t,e,i,r),ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=$n(e),a=an(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Mn(e,a,i),t!==null&&($t(t,e,i,r),ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=$n(e),i=an(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mn(e,i,r),t!==null&&($t(t,e,r,n),ps(t,e,r))}};function em(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!_a(n,r)||!_a(i,a):!0}function Gy(e,t,n){var r=!1,i=Un,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(i=at(t)?br:Ye.current,r=t.contextTypes,a=(r=r!=null)?fi(e,i):Un),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function tm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function Qc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Tt(a):(a=at(t)?br:Ye.current,i.context=fi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Kc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cl.enqueueReplaceState(i,i.state,null),Ys(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gi(e,t){try{var n="",r=t;do n+=p2(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Au(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bb=typeof WeakMap=="function"?WeakMap:Map;function Ky(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zs||(Zs=!0,od=r),Xc(e,t)},n}function Qy(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Xc(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function nm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ek.bind(null,e,t,n),t.then(e,e))}function rm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function im(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,Mn(n,t,1))),n.lanes|=1),e)}var Fb=pn.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?Cy(t,null,n,r):hi(t,e.child,n,r)}function am(e,t,n,r,i){n=n.render;var a=t.ref;return li(t,i),r=_f(e,t,n,r,a,i),n=If(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(se&&n&&xf(t),t.flags|=1,Xe(e,t,r,i),t.child)}function om(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!zf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Xy(e,t,a,r,i)):(e=xs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,r)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=Vn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Xy(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(_a(a,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,dn(e,t,i)}return Zc(e,t,n,r,i)}function Zy(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Gr,ct),ct|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Gr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Z(Gr,ct),ct|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Z(Gr,ct),ct|=r;return Xe(e,t,i,n),t.child}function Jy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zc(e,t,n,r,i){var a=at(n)?br:Ye.current;return a=fi(t,a),li(t,i),n=_f(e,t,n,r,a,i),r=If(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(se&&r&&xf(t),t.flags|=1,Xe(e,t,n,i),t.child)}function sm(e,t,n,r,i){if(at(n)){var a=!0;Fs(t)}else a=!1;if(li(t,i),t.stateNode===null)gs(e,t),Gy(t,n,r),Qc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tt(c):(c=at(n)?br:Ye.current,c=fi(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&tm(t,o,r,c),Tn=!1;var p=t.memoizedState;o.state=p,Ys(t,r,o,i),u=t.memoizedState,s!==r||p!==u||it.current||Tn?(typeof d=="function"&&(Kc(t,n,d,r),u=t.memoizedState),(s=Tn||em(t,n,s,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ty(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ot(t.type,s),o.props=c,f=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=at(n)?br:Ye.current,u=fi(t,u));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==u)&&tm(t,o,r,u),Tn=!1,p=t.memoizedState,o.state=p,Ys(t,r,o,i);var x=t.memoizedState;s!==f||p!==x||it.current||Tn?(typeof m=="function"&&(Kc(t,n,m,r),x=t.memoizedState),(c=Tn||em(t,n,c,r,p,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Jc(e,t,n,r,a,i)}function Jc(e,t,n,r,i,a){Jy(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Yh(t,n,!1),dn(e,t,a);r=t.stateNode,Fb.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hi(t,e.child,null,a),t.child=hi(t,null,s,a)):Xe(e,t,s,a),t.memoizedState=r.state,i&&Yh(t,n,!0),t.child}function qy(e){var t=e.stateNode;t.pendingContext?Hh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hh(e,t.context,!1),Pf(e,t.containerInfo)}function lm(e,t,n,r,i){return pi(),Sf(i),t.flags|=256,Xe(e,t,n,r),t.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function ed(e){return{baseLanes:e,cachePool:null,transitions:null}}function ex(e,t,n){var r=t.pendingProps,i=ce.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(ce,i&1),e===null)return Yc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Pl(o,r,0,null),e=vr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ed(n),t.memoizedState=qc,e):Rf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return zb(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Vn(s,a):(a=vr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=qc,r}return a=e.child,e=a.sibling,r=Vn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rf(e,t){return t=Pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eo(e,t,n,r){return r!==null&&Sf(r),hi(t,e.child,null,n),e=Rf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zb(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Au(Error(E(422))),Eo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Pl({mode:"visible",children:r.children},i,0,null),a=vr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&hi(t,e.child,null,o),t.child.memoizedState=ed(o),t.memoizedState=qc,a);if(!(t.mode&1))return Eo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(E(419)),r=Au(a,r,void 0),Eo(e,t,o,r)}if(s=(o&e.childLanes)!==0,rt||s){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,cn(e,i),$t(r,e,i,-1))}return Ff(),r=Au(Error(E(421))),Eo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,dt=Rn(i.nextSibling),ft=t,se=!0,Mt=null,e!==null&&(bt[kt++]=nn,bt[kt++]=rn,bt[kt++]=kr,nn=e.id,rn=e.overflow,kr=t),t=Rf(t,r.children),t.flags|=4096,t)}function um(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gc(e.return,t,n)}function _u(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tx(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&um(e,n,t);else if(e.tag===19)um(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_u(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_u(t,!0,n,null,a);break;case"together":_u(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wb(e,t,n){switch(t.tag){case 3:qy(t),pi();break;case 5:Py(t);break;case 1:at(t.type)&&Fs(t);break;case 4:Pf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(Us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?ex(e,t,n):(Z(ce,ce.current&1),e=dn(e,t,n),e!==null?e.sibling:null);Z(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Zy(e,t,n)}return dn(e,t,n)}var nx,td,rx,ix;nx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};rx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dr(Qt.current);var a=null;switch(n){case"input":i=kc(e,i),r=kc(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Tc(e,i),r=Tc(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vs)}Dc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&q("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};ix=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gi(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ub(e,t,n){var r=t.pendingProps;switch(wf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return at(t.type)&&Bs(),Fe(t),null;case 3:return r=t.stateNode,mi(),te(it),te(Ye),Ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(ud(Mt),Mt=null))),td(e,t),Fe(t),null;case 5:Df(t);var i=dr(Ma.current);if(n=t.type,e!==null&&t.stateNode!=null)rx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Fe(t),null}if(e=dr(Qt.current),Po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Yt]=t,r[Oa]=a,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<ra.length;i++)q(ra[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":yh(r,a),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},q("invalid",r);break;case"textarea":wh(r,a),q("invalid",r)}Dc(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&To(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&To(r.textContent,s,e),i=["children",""+s]):Ca.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":yo(r),xh(r,a,!0);break;case"textarea":yo(r),Sh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=I0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Yt]=t,e[Oa]=r,nx(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ec(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<ra.length;i++)q(ra[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":yh(e,r),i=kc(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),q("invalid",e);break;case"textarea":wh(e,r),i=Tc(e,r),q("invalid",e);break;default:i=r}Dc(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?R0(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&L0(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ja(e,u):typeof u=="number"&&ja(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ca.hasOwnProperty(a)?u!=null&&a==="onScroll"&&q("scroll",e):u!=null&&af(e,a,u,o))}switch(n){case"input":yo(e),xh(e,r,!1);break;case"textarea":yo(e),Sh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ii(e,!!r.multiple,a,!1):r.defaultValue!=null&&ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)ix(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=dr(Ma.current),dr(Qt.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(a=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return Fe(t),null;case 13:if(te(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&dt!==null&&t.mode&1&&!(t.flags&128))by(),pi(),t.flags|=98560,a=!1;else if(a=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[Yt]=t}else pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else Mt!==null&&(ud(Mt),Mt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?De===0&&(De=3):Ff())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return mi(),td(e,t),e===null&&Ia(t.stateNode.containerInfo),Fe(t),null;case 10:return Cf(t.type._context),Fe(t),null;case 17:return at(t.type)&&Bs(),Fe(t),null;case 19:if(te(ce),a=t.memoizedState,a===null)return Fe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Gi(a,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gs(e),o!==null){for(t.flags|=128,Gi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ce,ce.current&1|2),t.child}e=e.sibling}a.tail!==null&&we()>vi&&(t.flags|=128,r=!0,Gi(a,!1),t.lanes=4194304)}else{if(!r)if(e=Gs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!se)return Fe(t),null}else 2*we()-a.renderingStartTime>vi&&n!==1073741824&&(t.flags|=128,r=!0,Gi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=we(),t.sibling=null,n=ce.current,Z(ce,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Bf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Hb(e,t){switch(wf(t),t.tag){case 1:return at(t.type)&&Bs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mi(),te(it),te(Ye),Ef(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Df(t),null;case 13:if(te(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ce),null;case 4:return mi(),null;case 10:return Cf(t.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var Ao=!1,We=!1,Yb=typeof WeakSet=="function"?WeakSet:Set,R=null;function Yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function nd(e,t,n){try{n()}catch(r){ye(e,t,r)}}var cm=!1;function Gb(e,t){if(Vc=Ms,e=uy(),yf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===i&&(s=o),p===a&&++d===r&&(u=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:e,selectionRange:n},Ms=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,S=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ot(t.type,y),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=cm,cm=!1,x}function ga(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&nd(t,n,a)}i=i.next}while(i!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ax(e){var t=e.alternate;t!==null&&(e.alternate=null,ax(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[Oa],delete t[Wc],delete t[Eb],delete t[Ab])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ox(e){return e.tag===5||e.tag===3||e.tag===4}function dm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ox(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vs));else if(r!==4&&(e=e.child,e!==null))for(id(e,t,n),e=e.sibling;e!==null;)id(e,t,n),e=e.sibling}function ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ad(e,t,n),e=e.sibling;e!==null;)ad(e,t,n),e=e.sibling}var Oe=null,Rt=!1;function gn(e,t,n){for(n=n.child;n!==null;)sx(e,t,n),n=n.sibling}function sx(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:We||Yr(n,t);case 6:var r=Oe,i=Rt;Oe=null,gn(e,t,n),Oe=r,Rt=i,Oe!==null&&(Rt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Rt?(e=Oe,n=n.stateNode,e.nodeType===8?Cu(e.parentNode,n):e.nodeType===1&&Cu(e,n),Ea(e)):Cu(Oe,n.stateNode));break;case 4:r=Oe,i=Rt,Oe=n.stateNode.containerInfo,Rt=!0,gn(e,t,n),Oe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&nd(n,t,o),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!We&&(Yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,gn(e,t,n),We=r):gn(e,t,n);break;default:gn(e,t,n)}}function fm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yb),t.forEach(function(r){var i=nk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Oe=s.stateNode,Rt=!1;break e;case 3:Oe=s.stateNode.containerInfo,Rt=!0;break e;case 4:Oe=s.stateNode.containerInfo,Rt=!0;break e}s=s.return}if(Oe===null)throw Error(E(160));sx(a,o,i),Oe=null,Rt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ye(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lx(t,e),t=t.sibling}function lx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),zt(e),r&4){try{ga(3,e,e.return),jl(3,e)}catch(y){ye(e,e.return,y)}try{ga(5,e,e.return)}catch(y){ye(e,e.return,y)}}break;case 1:It(t,e),zt(e),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(It(t,e),zt(e),r&512&&n!==null&&Yr(n,n.return),e.flags&32){var i=e.stateNode;try{ja(i,"")}catch(y){ye(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&A0(i,a),Ec(s,o);var c=Ec(s,a);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?R0(i,f):d==="dangerouslySetInnerHTML"?L0(i,f):d==="children"?ja(i,f):af(i,d,f,c)}switch(s){case"input":Cc(i,a);break;case"textarea":_0(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?ii(i,!!a.multiple,m,!1):p!==!!a.multiple&&(a.defaultValue!=null?ii(i,!!a.multiple,a.defaultValue,!0):ii(i,!!a.multiple,a.multiple?[]:"",!1))}i[Oa]=a}catch(y){ye(e,e.return,y)}}break;case 6:if(It(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ye(e,e.return,y)}}break;case 3:if(It(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(t.containerInfo)}catch(y){ye(e,e.return,y)}break;case 4:It(t,e),zt(e);break;case 13:It(t,e),zt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||($f=we())),r&4&&fm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(We=(c=We)||d,It(t,e),We=c):It(t,e),zt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(p=R,m=p.child,p.tag){case 0:case 11:case 14:case 15:ga(4,p,p.return);break;case 1:Yr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ye(r,n,y)}}break;case 5:Yr(p,p.return);break;case 22:if(p.memoizedState!==null){hm(f);continue}}m!==null?(m.return=p,R=m):hm(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=O0("display",o))}catch(y){ye(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){ye(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),zt(e),r&4&&fm(e);break;case 21:break;default:It(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ox(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ja(i,""),r.flags&=-33);var a=dm(e);ad(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=dm(e);id(e,s,o);break;default:throw Error(E(161))}}catch(u){ye(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kb(e,t,n){R=e,ux(e)}function ux(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ao;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||We;s=Ao;var c=We;if(Ao=o,(We=u)&&!c)for(R=i;R!==null;)o=R,u=o.child,o.tag===22&&o.memoizedState!==null?mm(i):u!==null?(u.return=o,R=u):mm(i);for(;a!==null;)R=a,ux(a),a=a.sibling;R=i,Ao=s,We=c}pm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,R=a):pm(e)}}function pm(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ea(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}We||t.flags&512&&rd(t)}catch(p){ye(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function hm(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function mm(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(u){ye(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ye(t,i,u)}}var a=t.return;try{rd(t)}catch(u){ye(t,a,u)}break;case 5:var o=t.return;try{rd(t)}catch(u){ye(t,o,u)}}}catch(u){ye(t,t.return,u)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Qb=Math.ceil,Xs=pn.ReactCurrentDispatcher,Mf=pn.ReactCurrentOwner,jt=pn.ReactCurrentBatchConfig,G=0,Le=null,Ce=null,Ne=0,ct=0,Gr=Kn(0),De=0,Ba=null,jr=0,Tl=0,Nf=0,va=null,nt=null,$f=0,vi=1/0,qt=null,Zs=!1,od=null,Nn=null,_o=!1,An=null,Js=0,ya=0,sd=null,vs=-1,ys=0;function Ze(){return G&6?we():vs!==-1?vs:vs=we()}function $n(e){return e.mode&1?G&2&&Ne!==0?Ne&-Ne:Ib.transition!==null?(ys===0&&(ys=G0()),ys):(e=X,e!==0||(e=window.event,e=e===void 0?16:ey(e.type)),e):1}function $t(e,t,n,r){if(50<ya)throw ya=0,sd=null,Error(E(185));Ja(e,n,r),(!(G&2)||e!==Le)&&(e===Le&&(!(G&2)&&(Tl|=n),De===4&&Dn(e,Ne)),ot(e,r),n===1&&G===0&&!(t.mode&1)&&(vi=we()+500,bl&&Qn()))}function ot(e,t){var n=e.callbackNode;I2(e,t);var r=Rs(e,e===Le?Ne:0);if(r===0)n!==null&&Ch(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ch(n),t===1)e.tag===0?_b(gm.bind(null,e)):xy(gm.bind(null,e)),Pb(function(){!(G&6)&&Qn()}),n=null;else{switch(K0(r)){case 1:n=cf;break;case 4:n=H0;break;case 16:n=Os;break;case 536870912:n=Y0;break;default:n=Os}n=vx(n,cx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cx(e,t){if(vs=-1,ys=0,G&6)throw Error(E(327));var n=e.callbackNode;if(ui()&&e.callbackNode!==n)return null;var r=Rs(e,e===Le?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qs(e,r);else{t=r;var i=G;G|=2;var a=fx();(Le!==e||Ne!==t)&&(qt=null,vi=we()+500,gr(e,t));do try{Jb();break}catch(s){dx(e,s)}while(!0);kf(),Xs.current=a,G=i,Ce!==null?t=0:(Le=null,Ne=0,t=De)}if(t!==0){if(t===2&&(i=Oc(e),i!==0&&(r=i,t=ld(e,i))),t===1)throw n=Ba,gr(e,0),Dn(e,r),ot(e,we()),n;if(t===6)Dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Xb(i)&&(t=qs(e,r),t===2&&(a=Oc(e),a!==0&&(r=a,t=ld(e,a))),t===1))throw n=Ba,gr(e,0),Dn(e,r),ot(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:or(e,nt,qt);break;case 3:if(Dn(e,r),(r&130023424)===r&&(t=$f+500-we(),10<t)){if(Rs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zc(or.bind(null,e,nt,qt),t);break}or(e,nt,qt);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qb(r/1960))-r,10<r){e.timeoutHandle=zc(or.bind(null,e,nt,qt),r);break}or(e,nt,qt);break;case 5:or(e,nt,qt);break;default:throw Error(E(329))}}}return ot(e,we()),e.callbackNode===n?cx.bind(null,e):null}function ld(e,t){var n=va;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=qs(e,t),e!==2&&(t=nt,nt=n,t!==null&&ud(t)),e}function ud(e){nt===null?nt=e:nt.push.apply(nt,e)}function Xb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Bt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~Nf,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function gm(e){if(G&6)throw Error(E(327));ui();var t=Rs(e,0);if(!(t&1))return ot(e,we()),null;var n=qs(e,t);if(e.tag!==0&&n===2){var r=Oc(e);r!==0&&(t=r,n=ld(e,r))}if(n===1)throw n=Ba,gr(e,0),Dn(e,t),ot(e,we()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,nt,qt),ot(e,we()),null}function Vf(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(vi=we()+500,bl&&Qn())}}function Tr(e){An!==null&&An.tag===0&&!(G&6)&&ui();var t=G;G|=1;var n=jt.transition,r=X;try{if(jt.transition=null,X=1,e)return e()}finally{X=r,jt.transition=n,G=t,!(G&6)&&Qn()}}function Bf(){ct=Gr.current,te(Gr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tb(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bs();break;case 3:mi(),te(it),te(Ye),Ef();break;case 5:Df(r);break;case 4:mi();break;case 13:te(ce);break;case 19:te(ce);break;case 10:Cf(r.type._context);break;case 22:case 23:Bf()}n=n.return}if(Le=e,Ce=e=Vn(e.current,null),Ne=ct=t,De=0,Ba=null,Nf=Tl=jr=0,nt=va=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}cr=null}return e}function dx(e,t){do{var n=Ce;try{if(kf(),hs.current=Qs,Ks){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ks=!1}if(Cr=0,_e=Te=fe=null,ma=!1,Na=0,Mf.current=null,n===null||n.return===null){De=1,Ba=t,Ce=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=Ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=rm(o);if(m!==null){m.flags&=-257,im(m,o,s,a,t),m.mode&1&&nm(a,c,t),t=m,u=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if(!(t&1)){nm(a,c,t),Ff();break e}u=Error(E(426))}}else if(se&&s.mode&1){var S=rm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),im(S,o,s,a,t),Sf(gi(u,s));break e}}a=u=gi(u,s),De!==4&&(De=2),va===null?va=[a]:va.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Ky(a,u,t);Xh(a,g);break e;case 1:s=u;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Qy(a,s,t);Xh(a,k);break e}}a=a.return}while(a!==null)}hx(n)}catch(C){t=C,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function fx(){var e=Xs.current;return Xs.current=Qs,e===null?Qs:e}function Ff(){(De===0||De===3||De===2)&&(De=4),Le===null||!(jr&268435455)&&!(Tl&268435455)||Dn(Le,Ne)}function qs(e,t){var n=G;G|=2;var r=fx();(Le!==e||Ne!==t)&&(qt=null,gr(e,t));do try{Zb();break}catch(i){dx(e,i)}while(!0);if(kf(),G=n,Xs.current=r,Ce!==null)throw Error(E(261));return Le=null,Ne=0,De}function Zb(){for(;Ce!==null;)px(Ce)}function Jb(){for(;Ce!==null&&!k2();)px(Ce)}function px(e){var t=gx(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?hx(e):Ce=t,Mf.current=null}function hx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hb(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ce=null;return}}else if(n=Ub(n,t,ct),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);De===0&&(De=5)}function or(e,t,n){var r=X,i=jt.transition;try{jt.transition=null,X=1,qb(e,t,n,r)}finally{jt.transition=i,X=r}return null}function qb(e,t,n,r){do ui();while(An!==null);if(G&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(L2(e,a),e===Le&&(Ce=Le=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,vx(Os,function(){return ui(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=jt.transition,jt.transition=null;var o=X;X=1;var s=G;G|=4,Mf.current=null,Gb(e,n),lx(n,e),xb(Bc),Ms=!!Vc,Bc=Vc=null,e.current=n,Kb(n),C2(),G=s,X=o,jt.transition=a}else e.current=n;if(_o&&(_o=!1,An=e,Js=i),a=e.pendingLanes,a===0&&(Nn=null),P2(n.stateNode),ot(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zs)throw Zs=!1,e=od,od=null,e;return Js&1&&e.tag!==0&&ui(),a=e.pendingLanes,a&1?e===sd?ya++:(ya=0,sd=e):ya=0,Qn(),null}function ui(){if(An!==null){var e=K0(Js),t=jt.transition,n=X;try{if(jt.transition=null,X=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,Js=0,G&6)throw Error(E(331));var i=G;for(G|=4,R=e.current;R!==null;){var a=R,o=a.child;if(R.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:ga(8,d,a)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var p=d.sibling,m=d.return;if(ax(d),d===c){R=null;break}if(p!==null){p.return=m,R=p;break}R=m}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}R=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,R=o;else e:for(;R!==null;){if(a=R,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ga(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,R=g;break e}R=a.return}}var h=e.current;for(R=h;R!==null;){o=R;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,R=v;else e:for(o=h;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jl(9,s)}}catch(C){ye(s,s.return,C)}if(s===o){R=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,R=k;break e}R=s.return}}if(G=i,Qn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{X=n,jt.transition=t}}return!1}function vm(e,t,n){t=gi(n,t),t=Ky(e,t,1),e=Mn(e,t,1),t=Ze(),e!==null&&(Ja(e,1,t),ot(e,t))}function ye(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=gi(n,e),e=Qy(t,e,1),t=Mn(t,e,1),e=Ze(),t!==null&&(Ja(t,1,e),ot(t,e));break}}t=t.return}}function ek(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ne&n)===n&&(De===4||De===3&&(Ne&130023424)===Ne&&500>we()-$f?gr(e,0):Nf|=n),ot(e,t)}function mx(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var n=Ze();e=cn(e,t),e!==null&&(Ja(e,t,n),ot(e,n))}function tk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mx(e,n)}function nk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),mx(e,n)}var gx;gx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,Wb(e,t,n);rt=!!(e.flags&131072)}else rt=!1,se&&t.flags&1048576&&wy(t,Ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gs(e,t),e=t.pendingProps;var i=fi(t,Ye.current);li(t,n),i=_f(null,t,r,e,i,n);var a=If();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(a=!0,Fs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tf(t),i.updater=Cl,t.stateNode=i,i._reactInternals=t,Qc(t,r,e,n),t=Jc(null,t,r,!0,a,n)):(t.tag=0,se&&a&&xf(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ik(r),e=Ot(r,e),i){case 0:t=Zc(null,t,r,e,n);break e;case 1:t=sm(null,t,r,e,n);break e;case 11:t=am(null,t,r,e,n);break e;case 14:t=om(null,t,r,Ot(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Zc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),sm(e,t,r,i,n);case 3:e:{if(qy(t),e===null)throw Error(E(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Ty(e,t),Ys(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=gi(Error(E(423)),t),t=lm(e,t,r,n,i);break e}else if(r!==i){i=gi(Error(E(424)),t),t=lm(e,t,r,n,i);break e}else for(dt=Rn(t.stateNode.containerInfo.firstChild),ft=t,se=!0,Mt=null,n=Cy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){t=dn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Py(t),e===null&&Yc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Fc(r,i)?o=null:a!==null&&Fc(r,a)&&(t.flags|=32),Jy(e,t),Xe(e,t,o,n),t.child;case 6:return e===null&&Yc(t),null;case 13:return ex(e,t,n);case 4:return Pf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hi(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),am(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Z(Us,r._currentValue),r._currentValue=o,a!==null)if(Bt(a.value,o)){if(a.children===i.children&&!it.current){t=dn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=an(-1,n&-n),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Gc(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(E(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Gc(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,li(t,n),i=Tt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),om(e,t,r,i,n);case 15:return Xy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),gs(e,t),t.tag=1,at(r)?(e=!0,Fs(t)):e=!1,li(t,n),Gy(t,r,i),Qc(t,r,i,n),Jc(null,t,r,!0,e,n);case 19:return tx(e,t,n);case 22:return Zy(e,t,n)}throw Error(E(156,t.tag))};function vx(e,t){return U0(e,t)}function rk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new rk(e,t,n,r)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ik(e){if(typeof e=="function")return zf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sf)return 11;if(e===lf)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xs(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")zf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Nr:return vr(n.children,i,a,t);case of:o=8,i|=8;break;case xc:return e=Ct(12,n,t,i|2),e.elementType=xc,e.lanes=a,e;case wc:return e=Ct(13,n,t,i),e.elementType=wc,e.lanes=a,e;case Sc:return e=Ct(19,n,t,i),e.elementType=Sc,e.lanes=a,e;case P0:return Pl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j0:o=10;break e;case T0:o=9;break e;case sf:o=11;break e;case lf:o=14;break e;case jn:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ct(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function vr(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Pl(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=P0,e.lanes=n,e.stateNode={isHidden:!1},e}function Iu(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Lu(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ak(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wf(e,t,n,r,i,a,o,s,u){return e=new ak(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ct(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(a),e}function ok(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yx(e){if(!e)return Un;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(at(n))return yy(e,n,t)}return t}function xx(e,t,n,r,i,a,o,s,u){return e=Wf(n,r,!0,e,i,a,o,s,u),e.context=yx(null),n=e.current,r=Ze(),i=$n(n),a=an(r,i),a.callback=t??null,Mn(n,a,i),e.current.lanes=i,Ja(e,i,r),ot(e,r),e}function Dl(e,t,n,r){var i=t.current,a=Ze(),o=$n(i);return n=yx(n),t.context===null?t.context=n:t.pendingContext=n,t=an(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mn(i,t,o),e!==null&&($t(e,i,o,a),ps(e,i,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uf(e,t){ym(e,t),(e=e.alternate)&&ym(e,t)}function sk(){return null}var wx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hf(e){this._internalRoot=e}El.prototype.render=Hf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Dl(e,t,null,null)};El.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tr(function(){Dl(null,e,null,null)}),t[un]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Z0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&q0(e)}};function Yf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xm(){}function lk(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=el(o);a.call(c)}}var o=xx(t,r,e,0,null,!1,!1,"",xm);return e._reactRootContainer=o,e[un]=o.current,Ia(e.nodeType===8?e.parentNode:e),Tr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=el(u);s.call(c)}}var u=Wf(e,0,!1,null,null,!1,!1,"",xm);return e._reactRootContainer=u,e[un]=u.current,Ia(e.nodeType===8?e.parentNode:e),Tr(function(){Dl(t,u,n,r)}),u}function _l(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=el(o);s.call(u)}}Dl(t,o,e,i)}else o=lk(n,t,e,i,r);return el(o)}Q0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=na(t.pendingLanes);n!==0&&(df(t,n|1),ot(t,we()),!(G&6)&&(vi=we()+500,Qn()))}break;case 13:Tr(function(){var r=cn(e,1);if(r!==null){var i=Ze();$t(r,e,1,i)}}),Uf(e,1)}};ff=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=Ze();$t(t,e,134217728,n)}Uf(e,134217728)}};X0=function(e){if(e.tag===13){var t=$n(e),n=cn(e,t);if(n!==null){var r=Ze();$t(n,e,t,r)}Uf(e,t)}};Z0=function(){return X};J0=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};_c=function(e,t,n){switch(t){case"input":if(Cc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Sl(r);if(!i)throw Error(E(90));E0(r),Cc(r,i)}}}break;case"textarea":_0(e,n);break;case"select":t=n.value,t!=null&&ii(e,!!n.multiple,t,!1)}};$0=Vf;V0=Tr;var uk={usingClientEntryPoint:!1,Events:[eo,Fr,Sl,M0,N0,Vf]},Ki={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ck={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=z0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{vl=Io.inject(ck),Kt=Io}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(t))throw Error(E(200));return ok(e,t,null,n)};gt.createRoot=function(e,t){if(!Yf(e))throw Error(E(299));var n=!1,r="",i=wx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wf(e,1,!1,null,null,n,!1,r,i),e[un]=t.current,Ia(e.nodeType===8?e.parentNode:e),new Hf(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=z0(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Tr(e)};gt.hydrate=function(e,t,n){if(!Al(t))throw Error(E(200));return _l(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Yf(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=wx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xx(t,null,e,1,n??null,i,!1,a,o),e[un]=t.current,Ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};gt.render=function(e,t,n){if(!Al(t))throw Error(E(200));return _l(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!Al(e))throw Error(E(40));return e._reactRootContainer?(Tr(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};gt.unstable_batchedUpdates=Vf;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return _l(e,t,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(e){console.error(e)}}Sx(),S0.exports=gt;var bx=S0.exports,kx,wm=bx;kx=wm.createRoot,wm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Sm="popstate";function dk(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return cd("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tl(i)}return pk(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fk(){return Math.random().toString(36).substr(2,8)}function bm(e,t){return{usr:e.state,key:e.key,idx:t}}function cd(e,t,n,r){return n===void 0&&(n=null),Fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_i(t):t,{state:n,key:t&&t.key||r||fk()})}function tl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _i(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=_n.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Fa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=_n.Pop;let S=d(),g=S==null?null:S-c;c=S,u&&u({action:s,location:y.location,delta:g})}function p(S,g){s=_n.Push;let h=cd(y.location,S,g);c=d()+1;let v=bm(h,c),k=y.createHref(h);try{o.pushState(v,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(k)}a&&u&&u({action:s,location:y.location,delta:1})}function m(S,g){s=_n.Replace;let h=cd(y.location,S,g);c=d();let v=bm(h,c),k=y.createHref(h);o.replaceState(v,"",k),a&&u&&u({action:s,location:y.location,delta:0})}function x(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:tl(S);return h=h.replace(/ $/,"%20"),Se(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return s},get location(){return e(i,o)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sm,f),u=S,()=>{i.removeEventListener(Sm,f),u=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let g=x(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(S){return o.go(S)}};return y}var km;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(km||(km={}));function hk(e,t,n){return n===void 0&&(n="/"),mk(e,t,n)}function mk(e,t,n,r){let i=typeof t=="string"?_i(t):t,a=Kf(i.pathname||"/",n);if(a==null)return null;let o=Cx(e);gk(o);let s=null;for(let u=0;s==null&&u<o.length;++u){let c=Dk(a);s=jk(o[u],c)}return s}function Cx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let u={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Bn([r,u.relativePath]),d=n.concat(u);a.children&&a.children.length>0&&(Se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cx(a.children,t,d,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:kk(c,a.index),routesMeta:d})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let u of jx(a.path))i(a,o,u)}),t}function jx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=jx(r.join("/")),s=[];return s.push(...o.map(u=>u===""?a:[a,u].join("/"))),i&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function gk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ck(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vk=/^:[\w-]+$/,yk=3,xk=2,wk=1,Sk=10,bk=-2,Cm=e=>e==="*";function kk(e,t){let n=e.split("/"),r=n.length;return n.some(Cm)&&(r+=bk),t&&(r+=xk),n.filter(i=>!Cm(i)).reduce((i,a)=>i+(vk.test(a)?yk:a===""?wk:Sk),r)}function Ck(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function jk(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",f=Tk({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Bn([a,f.pathname]),pathnameBase:Lk(Bn([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=Bn([a,f.pathnameBase]))}return o}function Tk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Pk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let y=s[f]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[f];return m&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:e}}function Pk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Dk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ek=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ak=e=>Ek.test(e);function _k(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?_i(e):e,a;if(n)if(Ak(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Gf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=jm(n.substring(1),"/"):a=jm(n,t)}else a=t;return{pathname:a,search:Ok(r),hash:Rk(i)}}function jm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ou(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ik(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qf(e,t){let n=Ik(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=_i(e):(i=Fa({},e),Se(!i.pathname||!i.pathname.includes("?"),Ou("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Ou("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Ou("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let u=_k(i,s),c=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),Lk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ok=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tx=["post","put","patch","delete"];new Set(Tx);const Nk=["get",...Tx];new Set(Nk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},za.apply(this,arguments)}const Zf=w.createContext(null),$k=w.createContext(null),Xn=w.createContext(null),Il=w.createContext(null),Zn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Px=w.createContext(null);function Vk(e,t){let{relative:n}=t===void 0?{}:t;Ii()||Se(!1);let{basename:r,navigator:i}=w.useContext(Xn),{hash:a,pathname:o,search:s}=Ex(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Bn([r,o])),i.createHref({pathname:u,search:s,hash:a})}function Ii(){return w.useContext(Il)!=null}function Li(){return Ii()||Se(!1),w.useContext(Il).location}function Dx(e){w.useContext(Xn).static||w.useLayoutEffect(e)}function Jf(){let{isDataRoute:e}=w.useContext(Zn);return e?Jk():Bk()}function Bk(){Ii()||Se(!1);let e=w.useContext(Zf),{basename:t,future:n,navigator:r}=w.useContext(Xn),{matches:i}=w.useContext(Zn),{pathname:a}=Li(),o=JSON.stringify(Qf(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return Dx(()=>{s.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=Xf(c,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,a,e])}function Ex(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Xn),{matches:i}=w.useContext(Zn),{pathname:a}=Li(),o=JSON.stringify(Qf(i,r.v7_relativeSplatPath));return w.useMemo(()=>Xf(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Fk(e,t){return zk(e,t)}function zk(e,t,n,r){Ii()||Se(!1);let{navigator:i}=w.useContext(Xn),{matches:a}=w.useContext(Zn),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Li(),d;if(t){var f;let S=typeof t=="string"?_i(t):t;u==="/"||(f=S.pathname)!=null&&f.startsWith(u)||Se(!1),d=S}else d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let S=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=hk(e,{pathname:m}),y=Gk(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:Bn([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:Bn([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,n,r);return t&&y?w.createElement(Il.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},y):y}function Wk(){let e=Zk(),t=Mk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const Uk=w.createElement(Wk,null);class Hk extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Zn.Provider,{value:this.props.routeContext},w.createElement(Px.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yk(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Zf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Zn.Provider,{value:t},r)}function Gk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:m}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let m,x=!1,y=null,S=null;n&&(m=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||Uk,u&&(c<0&&p===0?(qk("route-fallback"),x=!0,S=null):c===p&&(x=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,p+1)),h=()=>{let v;return m?v=y:x?v=S:f.route.Component?v=w.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,w.createElement(Yk,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(Hk,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Ax=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ax||{}),_x=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_x||{});function Kk(e){let t=w.useContext(Zf);return t||Se(!1),t}function Qk(e){let t=w.useContext($k);return t||Se(!1),t}function Xk(e){let t=w.useContext(Zn);return t||Se(!1),t}function Ix(e){let t=Xk(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function Zk(){var e;let t=w.useContext(Px),n=Qk(),r=Ix();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Jk(){let{router:e}=Kk(Ax.UseNavigateStable),t=Ix(_x.UseNavigateStable),n=w.useRef(!1);return Dx(()=>{n.current=!0}),w.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,za({fromRouteId:t},a)))},[e,t])}const Tm={};function qk(e,t,n){Tm[e]||(Tm[e]=!0)}function eC(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function tC(e){let{to:t,replace:n,state:r,relative:i}=e;Ii()||Se(!1);let{future:a,static:o}=w.useContext(Xn),{matches:s}=w.useContext(Zn),{pathname:u}=Li(),c=Jf(),d=Xf(t,Qf(s,a.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function ia(e){Se(!1)}function nC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:a,static:o=!1,future:s}=e;Ii()&&Se(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:a,static:o,future:za({v7_relativeSplatPath:!1},s)}),[u,s,a,o]);typeof r=="string"&&(r=_i(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:x="default"}=r,y=w.useMemo(()=>{let S=Kf(d,u);return S==null?null:{location:{pathname:S,search:f,hash:p,state:m,key:x},navigationType:i}},[u,d,f,p,m,x,i]);return y==null?null:w.createElement(Xn.Provider,{value:c},w.createElement(Il.Provider,{children:n,value:y}))}function rC(e){let{children:t,location:n}=e;return Fk(dd(t),n)}new Promise(()=>{});function dd(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let a=[...t,i];if(r.type===w.Fragment){n.push.apply(n,dd(r.props.children,a));return}r.type!==ia&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dd(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fd.apply(this,arguments)}function iC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function aC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oC(e,t){return e.button===0&&(!t||t==="_self")&&!aC(e)}const sC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lC="6";try{window.__reactRouterVersion=lC}catch{}const uC="startTransition",Pm=e2[uC];function cC(e){let{basename:t,children:n,future:r,window:i}=e,a=w.useRef();a.current==null&&(a.current=dk({window:i,v5Compat:!0}));let o=a.current,[s,u]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=w.useCallback(f=>{c&&Pm?Pm(()=>u(f)):u(f)},[u,c]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>eC(r),[r]),w.createElement(nC,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const dC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lx=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=iC(t,sC),{basename:m}=w.useContext(Xn),x,y=!1;if(typeof c=="string"&&fC.test(c)&&(x=c,dC))try{let v=new URL(window.location.href),k=c.startsWith("//")?new URL(v.protocol+c):new URL(c),C=Kf(k.pathname,m);k.origin===v.origin&&C!=null?c=C+k.search+k.hash:y=!0}catch{}let S=Vk(c,{relative:i}),g=pC(c,{replace:o,state:s,target:u,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",fd({},p,{href:x||S,onClick:y||a?r:h,ref:n,target:u}))});var Dm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dm||(Dm={}));var Em;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Em||(Em={}));function pC(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,u=Jf(),c=Li(),d=Ex(e,{relative:o});return w.useCallback(f=>{if(oC(f,n)){f.preventDefault();let p=r!==void 0?r:tl(c)===tl(d);u(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[c,u,d,r,i,n,e,a,o,s])}const Ox=w.createContext({isDark:!0,toggleTheme:()=>{}}),hC=({children:e})=>{const[t,n]=w.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),w.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),a=o=>{localStorage.getItem("theme")||n(o.matches)};return i.addEventListener("change",a),()=>i.removeEventListener("change",a)},[]);const r=()=>n(!t);return l.jsx(Ox.Provider,{value:{isDark:t,toggleTheme:r},children:e})},Rx=()=>{const e=w.useContext(Ox);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Mx=w.createContext(null),Ru="tools-auth-session",Mu="tools-webauthn-credential",mC=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),gC=async()=>{if(!mC())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Nu=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},vC=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},yC=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},xC=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!0),[a,o]=w.useState(!1),s=w.useRef(!1),u=async()=>{try{const m={challenge:Nu(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Nu(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},x=await navigator.credentials.create({publicKey:m});return x?(localStorage.setItem(Mu,vC(x.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},c=async()=>{try{const p=localStorage.getItem(Mu),x={challenge:Nu(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:yC(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:x})}catch(p){return console.error("Authentication failed:",p),!1}},d=w.useCallback(async()=>{i(!0),o(!1);const p=sessionStorage.getItem(Ru);if(p)try{const{timestamp:x}=JSON.parse(p);if(Date.now()-x<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await gC()){n(!0),sessionStorage.setItem(Ru,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const x=localStorage.getItem(Mu);let y=!1;x?y=await c():y=await u(),y?(n(!0),sessionStorage.setItem(Ru,JSON.stringify({timestamp:Date.now()}))):o(!0)}catch{o(!0)}i(!1)},[]);w.useEffect(()=>{s.current||(s.current=!0,d())},[d]);const f=w.useCallback(()=>{d()},[d]);return l.jsx(Mx.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:a,retryAuth:f},children:e})},wC=()=>{const e=w.useContext(Mx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ue.apply(this,arguments)};function yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ee="-ms-",xa="-moz-",K="-webkit-",Nx="comm",Ll="rule",qf="decl",SC="@import",$x="@keyframes",bC="@layer",Vx=Math.abs,ep=String.fromCharCode,pd=Object.assign;function kC(e,t){return Ie(e,0)^45?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function Bx(e){return e.trim()}function en(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ws(e,t,n){return e.indexOf(t,n)}function Ie(e,t){return e.charCodeAt(t)|0}function xi(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Fx(e){return e.length}function aa(e,t){return t.push(e),e}function CC(e,t){return e.map(t).join("")}function Am(e,t){return e.filter(function(n){return!en(n,t)})}var Ol=1,wi=1,zx=0,Dt=0,ke=0,Oi="";function Rl(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ol,column:wi,length:o,return:"",siblings:s}}function kn(e,t){return pd(Rl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Or(e){for(;e.root;)e=kn(e.root,{children:[e]});aa(e,e.siblings)}function jC(){return ke}function TC(){return ke=Dt>0?Ie(Oi,--Dt):0,wi--,ke===10&&(wi=1,Ol--),ke}function Vt(){return ke=Dt<zx?Ie(Oi,Dt++):0,wi++,ke===10&&(wi=1,Ol++),ke}function yr(){return Ie(Oi,Dt)}function Ss(){return Dt}function Ml(e,t){return xi(Oi,e,t)}function hd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function PC(e){return Ol=wi=1,zx=Ht(Oi=e),Dt=0,[]}function DC(e){return Oi="",e}function $u(e){return Bx(Ml(Dt-1,md(e===91?e+2:e===40?e+1:e)))}function EC(e){for(;(ke=yr())&&ke<33;)Vt();return hd(e)>2||hd(ke)>3?"":" "}function AC(e,t){for(;--t&&Vt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return Ml(e,Ss()+(t<6&&yr()==32&&Vt()==32))}function md(e){for(;Vt();)switch(ke){case e:return Dt;case 34:case 39:e!==34&&e!==39&&md(ke);break;case 40:e===41&&md(e);break;case 92:Vt();break}return Dt}function _C(e,t){for(;Vt()&&e+ke!==57;)if(e+ke===84&&yr()===47)break;return"/*"+Ml(t,Dt-1)+"*"+ep(e===47?e:Vt())}function IC(e){for(;!hd(yr());)Vt();return Ml(e,Dt)}function LC(e){return DC(bs("",null,null,null,[""],e=PC(e),0,[0],e))}function bs(e,t,n,r,i,a,o,s,u){for(var c=0,d=0,f=o,p=0,m=0,x=0,y=1,S=1,g=1,h=0,v="",k=i,C=a,j=r,T=v;S;)switch(x=h,h=Vt()){case 40:if(x!=108&&Ie(T,f-1)==58){ws(T+=F($u(h),"&","&\f"),"&\f",Vx(c?s[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:T+=$u(h);break;case 9:case 10:case 13:case 32:T+=EC(x);break;case 92:T+=AC(Ss()-1,7);continue;case 47:switch(yr()){case 42:case 47:aa(OC(_C(Vt(),Ss()),t,n,u),u);break;default:T+="/"}break;case 123*y:s[c++]=Ht(T)*g;case 125*y:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:g==-1&&(T=F(T,/\f/g,"")),m>0&&Ht(T)-f&&aa(m>32?Im(T+";",r,n,f-1,u):Im(F(T," ","")+";",r,n,f-2,u),u);break;case 59:T+=";";default:if(aa(j=_m(T,t,n,c,d,i,s,v,k=[],C=[],f,a),a),h===123)if(d===0)bs(T,t,j,j,k,a,f,s,C);else switch(p===99&&Ie(T,3)===110?100:p){case 100:case 108:case 109:case 115:bs(e,j,j,r&&aa(_m(e,j,j,0,0,i,s,v,i,k=[],f,C),C),i,C,f,s,r?k:C);break;default:bs(T,j,j,j,[""],C,0,s,C)}}c=d=m=0,y=g=1,v=T="",f=o;break;case 58:f=1+Ht(T),m=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&TC()==125)continue}switch(T+=ep(h),h*y){case 38:g=d>0?1:(T+="\f",-1);break;case 44:s[c++]=(Ht(T)-1)*g,g=1;break;case 64:yr()===45&&(T+=$u(Vt())),p=yr(),d=f=Ht(v=T+=IC(Ss())),h++;break;case 45:x===45&&Ht(T)==2&&(y=0)}}return a}function _m(e,t,n,r,i,a,o,s,u,c,d,f){for(var p=i-1,m=i===0?a:[""],x=Fx(m),y=0,S=0,g=0;y<r;++y)for(var h=0,v=xi(e,p+1,p=Vx(S=o[y])),k=e;h<x;++h)(k=Bx(S>0?m[h]+" "+v:F(v,/&\f/g,m[h])))&&(u[g++]=k);return Rl(e,t,n,i===0?Ll:s,u,c,d,f)}function OC(e,t,n,r){return Rl(e,t,n,Nx,ep(jC()),xi(e,2,-2),0,r)}function Im(e,t,n,r,i){return Rl(e,t,n,qf,xi(e,0,r),xi(e,r+1,-1),r,i)}function Wx(e,t,n){switch(kC(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return xa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+xa+e+ee+e+e;case 5936:switch(Ie(e,t+11)){case 114:return K+e+ee+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ee+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ee+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ee+e+e;case 6165:return K+e+ee+"flex-"+e+e;case 5187:return K+e+F(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return K+e+ee+"flex-item-"+F(e,/flex-|-self/g,"")+(en(e,/flex-|baseline/)?"":ee+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return K+e+ee+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ee+F(e,"shrink","negative")+e;case 5292:return K+e+ee+F(e,"basis","preferred-size")+e;case 6060:return K+"box-"+F(e,"-grow","")+K+e+ee+F(e,"grow","positive")+e;case 4554:return K+F(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!en(e,/flex-|baseline/))return ee+"grid-column-align"+xi(e,t)+e;break;case 2592:case 3360:return ee+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,en(r.props,/grid-\w+-end/)})?~ws(e+(n=n[t].value),"span",0)?e:ee+F(e,"-start","")+e+ee+"grid-row-span:"+(~ws(n,"span",0)?en(n,/\d+/):+en(n,/\d+/)-+en(e,/\d+/))+";":ee+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return en(r.props,/grid-\w+-start/)})?e:ee+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(Ie(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+xa+(Ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ws(e,"stretch",0)?Wx(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,u,c){return ee+i+":"+a+c+(o?ee+i+"-span:"+(s?u:+u-+a)+c:"")+e});case 4949:if(Ie(e,t+6)===121)return F(e,":",":"+K)+e;break;case 6444:switch(Ie(e,Ie(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Ie(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ee+"$2box$3")+e;case 100:return F(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function nl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function RC(e,t,n,r){switch(e.type){case bC:if(e.children.length)break;case SC:case qf:return e.return=e.return||e.value;case Nx:return"";case $x:return e.return=e.value+"{"+nl(e.children,r)+"}";case Ll:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=nl(e.children,r))?e.return=e.value+"{"+n+"}":""}function MC(e){var t=Fx(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function NC(e){return function(t){t.root||(t=t.return)&&e(t)}}function $C(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qf:e.return=Wx(e.value,e.length,n);return;case $x:return nl([kn(e,{value:F(e.value,"@","@"+K)})],r);case Ll:if(e.length)return CC(n=e.props,function(i){switch(en(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Or(kn(e,{props:[F(i,/:(read-\w+)/,":"+xa+"$1")]})),Or(kn(e,{props:[i]})),pd(e,{props:Am(n,r)});break;case"::placeholder":Or(kn(e,{props:[F(i,/:(plac\w+)/,":"+K+"input-$1")]})),Or(kn(e,{props:[F(i,/:(plac\w+)/,":"+xa+"$1")]})),Or(kn(e,{props:[F(i,/:(plac\w+)/,ee+"input-$1")]})),Or(kn(e,{props:[i]})),pd(e,{props:Am(n,r)});break}return""})}}var VC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},Si=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",Ux="active",Hx="data-styled-version",Nl="6.1.19",tp=`/*!sc*/
`,rl=typeof window<"u"&&typeof document<"u",BC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),FC={},$l=Object.freeze([]),bi=Object.freeze({});function Yx(e,t,n){return n===void 0&&(n=bi),e.theme!==n.theme&&e.theme||t||n.theme}var Gx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,WC=/(^-|-$)/g;function Lm(e){return e.replace(zC,"-").replace(WC,"")}var UC=/(a)(d)/gi,Lo=52,Om=function(e){return String.fromCharCode(e+(e>25?39:97))};function gd(e){var t,n="";for(t=Math.abs(e);t>Lo;t=t/Lo|0)n=Om(t%Lo)+n;return(Om(t%Lo)+n).replace(UC,"$1-$2")}var Vu,Kx=5381,Kr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Qx=function(e){return Kr(Kx,e)};function np(e){return gd(Qx(e)>>>0)}function HC(e){return e.displayName||e.name||"Component"}function Bu(e){return typeof e=="string"&&!0}var Xx=typeof Symbol=="function"&&Symbol.for,Zx=Xx?Symbol.for("react.memo"):60115,YC=Xx?Symbol.for("react.forward_ref"):60112,GC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},QC=((Vu={})[YC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vu[Zx]=Jx,Vu);function Rm(e){return("type"in(t=e)&&t.type.$$typeof)===Zx?Jx:"$$typeof"in e?QC[e.$$typeof]:GC;var t}var XC=Object.defineProperty,ZC=Object.getOwnPropertyNames,Mm=Object.getOwnPropertySymbols,JC=Object.getOwnPropertyDescriptor,qC=Object.getPrototypeOf,Nm=Object.prototype;function qx(e,t,n){if(typeof t!="string"){if(Nm){var r=qC(t);r&&r!==Nm&&qx(e,r,n)}var i=ZC(t);Mm&&(i=i.concat(Mm(t)));for(var a=Rm(e),o=Rm(t),s=0;s<i.length;++s){var u=i[s];if(!(u in KC||n&&n[u]||o&&u in o||a&&u in a)){var c=JC(t,u);try{XC(e,u,c)}catch{}}}}return e}function ki(e){return typeof e=="function"}function rp(e){return typeof e=="object"&&"styledComponentId"in e}function fr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function il(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Wa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function vd(e,t,n){if(n===void 0&&(n=!1),!n&&!Wa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=vd(e[r],t[r]);else if(Wa(t))for(var r in t)e[r]=vd(e[r],t[r]);return e}function ip(e,t){Object.defineProperty(e,"toString",{value:t})}function no(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ej=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw no(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(tp);return n},e}(),ks=new Map,al=new Map,Cs=1,Oo=function(e){if(ks.has(e))return ks.get(e);for(;al.has(Cs);)Cs++;var t=Cs++;return ks.set(e,t),al.set(t,e),t},tj=function(e,t){Cs=t+1,ks.set(e,t),al.set(t,e)},nj="style[".concat(Si,"][").concat(Hx,'="').concat(Nl,'"]'),rj=new RegExp("^".concat(Si,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ij=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},aj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tp),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var u=s.match(rj);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(tj(d,c),ij(e,d,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},$m=function(e){for(var t=document.querySelectorAll(nj),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Si)!==Ux&&(aj(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function oj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Si,"]")));return u[u.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Si,Ux),r.setAttribute(Hx,Nl);var o=oj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},sj=function(){function e(t){this.element=e1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw no(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lj=function(){function e(t){this.element=e1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),uj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vm=rl,cj={isServer:!rl,useCSSOMInjection:!BC},ol=function(){function e(t,n,r){t===void 0&&(t=bi),n===void 0&&(n={});var i=this;this.options=Ue(Ue({},cj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&rl&&Vm&&(Vm=!1,$m(this)),ip(this,function(){return function(a){for(var o=a.getTag(),s=o.length,u="",c=function(f){var p=function(g){return al.get(g)}(f);if(p===void 0)return"continue";var m=a.names.get(p),x=o.getGroup(f);if(m===void 0||!m.size||x.length===0)return"continue";var y="".concat(Si,".g").concat(f,'[id="').concat(p,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),u+="".concat(x).concat(y,'{content:"').concat(S,'"}').concat(tp)},d=0;d<s;d++)c(d);return u}(i)})}return e.registerId=function(t){return Oo(t)},e.prototype.rehydrate=function(){!this.server&&rl&&$m(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new uj(i):r?new sj(i):new lj(i)}(this.options),new ej(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dj=/&/g,fj=/^\s*\/\/.*$/gm;function t1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=t1(n.children,t)),n})}function pj(e){var t,n,r,i=bi,a=i.options,o=a===void 0?bi:a,s=i.plugins,u=s===void 0?$l:s,c=function(p,m,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=u.slice();d.push(function(p){p.type===Ll&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(dj,n).replace(r,c))}),o.prefix&&d.push($C),d.push(RC);var f=function(p,m,x,y){m===void 0&&(m=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(fj,""),g=LC(x||m?"".concat(x," ").concat(m," { ").concat(S," }"):S);o.namespace&&(g=t1(g,o.namespace));var h=[];return nl(g,MC(d.concat(NC(function(v){return h.push(v)})))),h};return f.hash=u.length?u.reduce(function(p,m){return m.name||no(15),Kr(p,m.name)},Kx).toString():"",f}var hj=new ol,yd=pj(),n1=Gt.createContext({shouldForwardProp:void 0,styleSheet:hj,stylis:yd});n1.Consumer;Gt.createContext(void 0);function xd(){return w.useContext(n1)}var r1=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=yd);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ip(this,function(){throw no(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yd),this.name+t.hash},e}(),mj=function(e){return e>="A"&&e<="Z"};function Bm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var i1=function(e){return e==null||e===!1||e===""},a1=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!i1(a)&&(Array.isArray(a)&&a.isCss||ki(a)?r.push("".concat(Bm(i),":"),a,";"):Wa(a)?r.push.apply(r,yi(yi(["".concat(i," {")],a1(a),!1),["}"],!1)):r.push("".concat(Bm(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in VC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fn(e,t,n,r){if(i1(e))return[];if(rp(e))return[".".concat(e.styledComponentId)];if(ki(e)){if(!ki(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Fn(i,t,n,r)}var a;return e instanceof r1?n?(e.inject(n,r),[e.getName(r)]):[e]:Wa(e)?a1(e):Array.isArray(e)?Array.prototype.concat.apply($l,e.map(function(o){return Fn(o,t,n,r)})):[e.toString()]}function o1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ki(n)&&!rp(n))return!1}return!0}var gj=Qx(Nl),vj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&o1(t),this.componentId=n,this.baseHash=Kr(gj,n),this.baseStyle=r,ol.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fr(i,this.staticRulesId);else{var a=il(Fn(this.rules,t,n,r)),o=gd(Kr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=fr(i,o),this.staticRulesId=o}else{for(var u=Kr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=il(Fn(f,t,n,r));u=Kr(u,p+d),c+=p}}if(c){var m=gd(u>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),i=fr(i,m)}}return i},e}(),ap=Gt.createContext(void 0);ap.Consumer;var Fu={};function yj(e,t,n){var r=rp(e),i=e,a=!Bu(e),o=t.attrs,s=o===void 0?$l:o,u=t.componentId,c=u===void 0?function(k,C){var j=typeof k!="string"?"sc":Lm(k);Fu[j]=(Fu[j]||0)+1;var T="".concat(j,"-").concat(np(Nl+j+Fu[j]));return C?"".concat(C,"-").concat(T):T}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(k){return Bu(k)?"styled.".concat(k):"Styled(".concat(HC(k),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Lm(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(k,C){return y(k,C)&&S(k,C)}}else x=y}var g=new vj(n,p,r?i.componentStyle:void 0);function h(k,C){return function(j,T,P){var A=j.attrs,D=j.componentStyle,M=j.defaultProps,Q=j.foldedComponentIds,re=j.styledComponentId,he=j.target,N=Gt.useContext(ap),V=xd(),B=j.shouldForwardProp||V.shouldForwardProp,_=Yx(T,N,M)||bi,L=function(yt,Ae,Ge){for(var Et,Ve=Ue(Ue({},Ae),{className:void 0,theme:Ge}),tr=0;tr<yt.length;tr+=1){var mn=ki(Et=yt[tr])?Et(Ve):Et;for(var st in mn)Ve[st]=st==="className"?fr(Ve[st],mn[st]):st==="style"?Ue(Ue({},Ve[st]),mn[st]):mn[st]}return Ae.className&&(Ve.className=fr(Ve.className,Ae.className)),Ve}(A,T,_),O=L.as||he,z={};for(var H in L)L[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&L.theme===_||(H==="forwardedAs"?z.as=L.forwardedAs:B&&!B(H,O)||(z[H]=L[H]));var me=function(yt,Ae){var Ge=xd(),Et=yt.generateAndInjectStyles(Ae,Ge.styleSheet,Ge.stylis);return Et}(D,L),Ee=fr(Q,re);return me&&(Ee+=" "+me),L.className&&(Ee+=" "+L.className),z[Bu(O)&&!Gx.has(O)?"class":"className"]=Ee,P&&(z.ref=P),w.createElement(O,z)}(v,k,C)}h.displayName=f;var v=Gt.forwardRef(h);return v.attrs=m,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?fr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(C){for(var j=[],T=1;T<arguments.length;T++)j[T-1]=arguments[T];for(var P=0,A=j;P<A.length;P++)vd(C,A[P],!0);return C}({},i.defaultProps,k):k}}),ip(v,function(){return".".concat(v.styledComponentId)}),a&&qx(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Fm(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var zm=function(e){return Object.assign(e,{isCss:!0})};function pr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ki(e)||Wa(e))return zm(Fn(Fm($l,yi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Fn(r):zm(Fn(Fm(r,t)))}function wd(e,t,n){if(n===void 0&&(n=bi),!t)throw no(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,pr.apply(void 0,yi([i],a,!1)))};return r.attrs=function(i){return wd(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return wd(e,t,Ue(Ue({},n),i))},r}var s1=function(e){return wd(yj,e)},b=s1;Gx.forEach(function(e){b[e]=s1(e)});var xj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=o1(t),ol.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(il(Fn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ol.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function wj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pr.apply(void 0,yi([e],t,!1)),i="sc-global-".concat(np(JSON.stringify(r))),a=new xj(r,i),o=function(u){var c=xd(),d=Gt.useContext(ap),f=Gt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(f,u,c.styleSheet,d,c.stylis),Gt.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,u,c.styleSheet,d,c.stylis),function(){return a.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,f,p){if(a.isStatic)a.renderStyles(u,FC,d,p);else{var m=Ue(Ue({},c),{theme:Yx(c,f,o.defaultProps)});a.renderStyles(u,m,d,p)}}return Gt.memo(o)}function Ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=il(pr.apply(void 0,yi([e],t,!1))),i=np(r);return new r1(i,r)}const Sj=wj`
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
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
`,bj=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,kj=b.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,Cj=()=>{const{isDark:e}=Rx();return l.jsx(bj,{children:l.jsx(kj,{$isDark:e})})},op=w.createContext({});function sp(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vl=w.createContext(null),lp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class jj extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Tj({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=w.useContext(lp);return w.useInsertionEffect(()=>{const{width:o,height:s,top:u,left:c}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return a&&(d.nonce=a),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),l.jsx(jj,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const Pj=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=sp(Dj),u=w.useId(),c=w.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),d=w.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),c]:[n,c]);return w.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),w.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=l.jsx(Tj,{isPresent:n,children:e})),l.jsx(Vl.Provider,{value:d,children:e})};function Dj(){return new Map}function l1(e=!0){const t=w.useContext(Vl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=w.useId();w.useEffect(()=>{e&&i(a)},[e]);const o=w.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}const Ro=e=>e.key||"";function Wm(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const up=typeof window<"u",u1=up?w.useLayoutEffect:w.useEffect,Pe=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:o=!1})=>{const[s,u]=l1(o),c=w.useMemo(()=>Wm(e),[e]),d=o&&!s?[]:c.map(Ro),f=w.useRef(!0),p=w.useRef(c),m=sp(()=>new Map),[x,y]=w.useState(c),[S,g]=w.useState(c);u1(()=>{f.current=!1,p.current=c;for(let k=0;k<S.length;k++){const C=Ro(S[k]);d.includes(C)?m.delete(C):m.get(C)!==!0&&m.set(C,!1)}},[S,d.length,d.join("-")]);const h=[];if(c!==x){let k=[...c];for(let C=0;C<S.length;C++){const j=S[C],T=Ro(j);d.includes(T)||(k.splice(C,0,j),h.push(j))}a==="wait"&&h.length&&(k=h),g(Wm(k)),y(c);return}const{forceRender:v}=w.useContext(op);return l.jsx(l.Fragment,{children:S.map(k=>{const C=Ro(k),j=o&&!s?!1:c===S||d.includes(C),T=()=>{if(m.has(C))m.set(C,!0);else return;let P=!0;m.forEach(A=>{A||(P=!1)}),P&&(v==null||v(),g(p.current),o&&(u==null||u()),r&&r())};return l.jsx(Pj,{isPresent:j,initial:!f.current||n?void 0:!1,custom:j?void 0:t,presenceAffectsLayout:i,mode:a,onExitComplete:j?void 0:T,children:k},C)})})},pt=e=>e;let c1=pt;function cp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ci=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},on=e=>e*1e3,sn=e=>e/1e3,Ej={useManualTiming:!1};function Aj(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(c){a.has(c)&&(u.schedule(c),e()),c(o)}const u={schedule:(c,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&a.add(c),m.has(c)||m.add(c),c},cancel:c=>{n.delete(c),a.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,u.process(c))}};return u}const Mo=["read","resolveKeyframes","update","preRender","render","postRender"],_j=40;function d1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Mo.reduce((g,h)=>(g[h]=Aj(a),g),{}),{read:s,resolveKeyframes:u,update:c,preRender:d,render:f,postRender:p}=o,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,_j),1),i.timestamp=g,i.isProcessing=!0,s.process(i),u.process(i),c.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},x=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Mo.reduce((g,h)=>{const v=o[h];return g[h]=(k,C=!1,j=!1)=>(n||x(),v.schedule(k,C,j)),g},{}),cancel:g=>{for(let h=0;h<Mo.length;h++)o[Mo[h]].cancel(g)},state:i,steps:o}}const{schedule:ne,cancel:Hn,state:Re,steps:zu}=d1(typeof requestAnimationFrame<"u"?requestAnimationFrame:pt,!0),f1=w.createContext({strict:!1}),Um={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ji={};for(const e in Um)ji[e]={isEnabled:t=>Um[e].some(n=>!!t[n])};function Ij(e){for(const t in e)ji[t]={...ji[t],...e[t]}}const Lj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Lj.has(e)}let p1=e=>!sl(e);function Oj(e){e&&(p1=t=>t.startsWith("on")?!sl(t):e(t))}try{Oj(require("@emotion/is-prop-valid").default)}catch{}function Rj(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(p1(i)||n===!0&&sl(i)||!t&&!sl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Mj(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Bl=w.createContext({});function Ua(e){return typeof e=="string"||Array.isArray(e)}function Fl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fp=["initial",...dp];function zl(e){return Fl(e.animate)||fp.some(t=>Ua(e[t]))}function h1(e){return!!(zl(e)||e.variants)}function Nj(e,t){if(zl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ua(n)?n:void 0,animate:Ua(r)?r:void 0}}return e.inherit!==!1?t:{}}function $j(e){const{initial:t,animate:n}=Nj(e,w.useContext(Bl));return w.useMemo(()=>({initial:t,animate:n}),[Hm(t),Hm(n)])}function Hm(e){return Array.isArray(e)?e.join(" "):e}const Vj=Symbol.for("motionComponentSymbol");function Qr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Bj(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Qr(n)&&(n.current=r))},[t])}const pp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Fj="framerAppearId",m1="data-"+pp(Fj),{schedule:hp}=d1(queueMicrotask,!1),g1=w.createContext({});function zj(e,t,n,r,i){var a,o;const{visualElement:s}=w.useContext(Bl),u=w.useContext(f1),c=w.useContext(Vl),d=w.useContext(lp).reducedMotion,f=w.useRef(null);r=r||u.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=w.useContext(g1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&Wj(f.current,n,i,m);const x=w.useRef(!1);w.useInsertionEffect(()=>{p&&x.current&&p.update(n,c)});const y=n[m1],S=w.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return u1(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),hp.render(p.render),S.current&&p.animationState&&p.animationState.animateChanges())}),w.useEffect(()=>{p&&(!S.current&&p.animationState&&p.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,y)}),S.current=!1))}),p}function Wj(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:u,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:v1(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Qr(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:u,layoutRoot:c})}function v1(e){if(e)return e.options.allowProjection!==!1?e.projection:v1(e.parent)}function Uj({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var a,o;e&&Ij(e);function s(c,d){let f;const p={...w.useContext(lp),...c,layoutId:Hj(c)},{isStatic:m}=p,x=$j(c),y=r(c,m);if(!m&&up){Yj();const S=Gj(p);f=S.MeasureLayout,x.visualElement=zj(i,y,p,t,S.ProjectionNode)}return l.jsxs(Bl.Provider,{value:x,children:[f&&x.visualElement?l.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,c,Bj(y,x.visualElement,d),y,m,x.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${(o=(a=i.displayName)!==null&&a!==void 0?a:i.name)!==null&&o!==void 0?o:""})`}`;const u=w.forwardRef(s);return u[Vj]=i,u}function Hj({layoutId:e}){const t=w.useContext(op).id;return t&&e!==void 0?t+"-"+e:e}function Yj(e,t){w.useContext(f1).strict}function Gj(e){const{drag:t,layout:n}=ji;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Kj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mp(e){return typeof e!="string"||e.includes("-")?!1:!!(Kj.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ym(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function gp(e,t,n,r){if(typeof t=="function"){const[i,a]=Ym(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Ym(r);t=t(n!==void 0?n:e.custom,i,a)}return t}const Sd=e=>Array.isArray(e),Qj=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Xj=e=>Sd(e)?e[e.length-1]||0:e,He=e=>!!(e&&e.getVelocity);function js(e){const t=He(e)?e.get():e;return Qj(t)?t.toValue():t}function Zj({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,a){const o={latestValues:Jj(r,i,a,e),renderState:t()};return n&&(o.onMount=s=>n({props:r,current:s,...o}),o.onUpdate=s=>n(s)),o}const y1=e=>(t,n)=>{const r=w.useContext(Bl),i=w.useContext(Vl),a=()=>Zj(e,t,r,i);return n?a():sp(a)};function Jj(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=js(a[p]);let{initial:o,animate:s}=e;const u=zl(e),c=h1(e);t&&c&&!u&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?s:o;if(f&&typeof f!="boolean"&&!Fl(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const x=gp(e,p[m]);if(x){const{transitionEnd:y,transition:S,...g}=x;for(const h in g){let v=g[h];if(Array.isArray(v)){const k=d?v.length-1:0;v=v[k]}v!==null&&(i[h]=v)}for(const h in y)i[h]=y[h]}}}return i}const Mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Er=new Set(Mi),x1=e=>t=>typeof t=="string"&&t.startsWith(e),w1=x1("--"),qj=x1("var(--"),vp=e=>qj(e)?eT.test(e.split("/*")[0].trim()):!1,eT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,S1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,fn=(e,t,n)=>n>t?t:n<e?e:n,Ni={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ha={...Ni,transform:e=>fn(0,1,e)},No={...Ni,default:1},ro=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Cn=ro("deg"),Xt=ro("%"),$=ro("px"),tT=ro("vh"),nT=ro("vw"),Gm={...Xt,parse:e=>Xt.parse(e)/100,transform:e=>Xt.transform(e*100)},rT={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,radius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,backgroundPositionX:$,backgroundPositionY:$},iT={rotate:Cn,rotateX:Cn,rotateY:Cn,rotateZ:Cn,scale:No,scaleX:No,scaleY:No,scaleZ:No,skew:Cn,skewX:Cn,skewY:Cn,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:Ha,originX:Gm,originY:Gm,originZ:$},Km={...Ni,transform:Math.round},yp={...rT,...iT,zIndex:Km,size:$,fillOpacity:Ha,strokeOpacity:Ha,numOctaves:Km},aT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oT=Mi.length;function sT(e,t,n){let r="",i=!0;for(let a=0;a<oT;a++){const o=Mi[a],s=e[o];if(s===void 0)continue;let u=!0;if(typeof s=="number"?u=s===(o.startsWith("scale")?1:0):u=parseFloat(s)===0,!u||n){const c=S1(s,yp[o]);if(!u){i=!1;const d=aT[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function xp(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const u in t){const c=t[u];if(Er.has(u)){o=!0;continue}else if(w1(u)){i[u]=c;continue}else{const d=S1(c,yp[u]);u.startsWith("origin")?(s=!0,a[u]=d):r[u]=d}}if(t.transform||(o||n?r.transform=sT(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:u="50%",originY:c="50%",originZ:d=0}=a;r.transformOrigin=`${u} ${c} ${d}`}}const lT={offset:"stroke-dashoffset",array:"stroke-dasharray"},uT={offset:"strokeDashoffset",array:"strokeDasharray"};function cT(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?lT:uT;e[a.offset]=$.transform(-r);const o=$.transform(t),s=$.transform(n);e[a.array]=`${o} ${s}`}function Qm(e,t,n){return typeof e=="string"?e:$.transform(t+n*e)}function dT(e,t,n){const r=Qm(t,e.x,e.width),i=Qm(n,e.y,e.height);return`${r} ${i}`}function wp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:u=0,...c},d,f){if(xp(e,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:x}=e;p.transform&&(x&&(m.transform=p.transform),delete p.transform),x&&(i!==void 0||a!==void 0||m.transform)&&(m.transformOrigin=dT(x,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&cT(p,o,s,u,!1)}const Sp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),b1=()=>({...Sp(),attrs:{}}),bp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function k1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const C1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function j1(e,t,n,r){k1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(C1.has(i)?i:pp(i),t.attrs[i])}const ll={};function fT(e){Object.assign(ll,e)}function T1(e,{layout:t,layoutId:n}){return Er.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ll[e]||e==="opacity")}function kp(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(He(i[o])||t.style&&He(t.style[o])||T1(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function P1(e,t,n){const r=kp(e,t,n);for(const i in e)if(He(e[i])||He(t[i])){const a=Mi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function pT(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Xm=["x","y","width","height","cx","cy","r"],hT={useVisualState:y1({scrapeMotionValuesFromProps:P1,createRenderState:b1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let a=!!e.drag;if(!a){for(const s in i)if(Er.has(s)){a=!0;break}}if(!a)return;let o=!t;if(t)for(let s=0;s<Xm.length;s++){const u=Xm[s];e[u]!==t[u]&&(o=!0)}o&&ne.read(()=>{pT(n,r),ne.render(()=>{wp(r,i,bp(n.tagName),e.transformTemplate),j1(n,r)})})}})},mT={useVisualState:y1({scrapeMotionValuesFromProps:kp,createRenderState:Sp})};function D1(e,t,n){for(const r in t)!He(t[r])&&!T1(r,n)&&(e[r]=t[r])}function gT({transformTemplate:e},t){return w.useMemo(()=>{const n=Sp();return xp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function vT(e,t){const n=e.style||{},r={};return D1(r,n,e),Object.assign(r,gT(e,t)),r}function yT(e,t){const n={},r=vT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function xT(e,t,n,r){const i=w.useMemo(()=>{const a=b1();return wp(a,t,bp(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};D1(a,e.style,e),i.style={...a,...i.style}}return i}function wT(e=!1){return(n,r,i,{latestValues:a},o)=>{const u=(mp(n)?xT:yT)(r,a,o,n),c=Rj(r,typeof n=="string",e),d=n!==w.Fragment?{...c,...u,ref:i}:{},{children:f}=r,p=w.useMemo(()=>He(f)?f.get():f,[f]);return w.createElement(n,{...d,children:p})}}function ST(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...mp(r)?hT:mT,preloadedFeatures:e,useRender:wT(i),createVisualElement:t,Component:r};return Uj(o)}}function E1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Wl(e,t,n){const r=e.getProps();return gp(r,t,n!==void 0?n:r.custom,e)}const bT=cp(()=>window.ScrollTimeline!==void 0);class kT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(bT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class CT extends kT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Cp(e,t){return e?e[t]||e.default||e:void 0}const bd=2e4;function A1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<bd;)t+=n,r=e.next(t);return t>=bd?1/0:t}function jp(e){return typeof e=="function"}function Zm(e,t){e.timeline=t,e.onfinish=null}const Tp=e=>Array.isArray(e)&&typeof e[0]=="number",jT={linearEasing:void 0};function TT(e,t){const n=cp(e);return()=>{var r;return(r=jT[t])!==null&&r!==void 0?r:n()}}const ul=TT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(Ci(0,i-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function I1(e){return!!(typeof e=="function"&&ul()||!e||typeof e=="string"&&(e in kd||ul())||Tp(e)||Array.isArray(e)&&e.every(I1))}const oa=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,kd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oa([0,.65,.55,1]),circOut:oa([.55,0,1,.45]),backIn:oa([.31,.01,.66,-.59]),backOut:oa([.33,1.53,.69,.99])};function L1(e,t){if(e)return typeof e=="function"&&ul()?_1(e,t):Tp(e)?oa(e):Array.isArray(e)?e.map(n=>L1(n,t)||kd.easeOut):kd[e]}const Lt={x:!1,y:!1};function O1(){return Lt.x||Lt.y}function PT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const a=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}function R1(e,t){const n=PT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Jm(e){return t=>{t.pointerType==="touch"||O1()||e(t)}}function DT(e,t,n={}){const[r,i,a]=R1(e,n),o=Jm(s=>{const{target:u}=s,c=t(s);if(typeof c!="function"||!u)return;const d=Jm(f=>{c(f),u.removeEventListener("pointerleave",d)});u.addEventListener("pointerleave",d,i)});return r.forEach(s=>{s.addEventListener("pointerenter",o,i)}),a}const M1=(e,t)=>t?e===t?!0:M1(e,t.parentElement):!1,Pp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ET=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AT(e){return ET.has(e.tagName)||e.tabIndex!==-1}const sa=new WeakSet;function qm(e){return t=>{t.key==="Enter"&&e(t)}}function Wu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const _T=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=qm(()=>{if(sa.has(n))return;Wu(n,"down");const i=qm(()=>{Wu(n,"up")}),a=()=>Wu(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function eg(e){return Pp(e)&&!O1()}function IT(e,t,n={}){const[r,i,a]=R1(e,n),o=s=>{const u=s.currentTarget;if(!eg(s)||sa.has(u))return;sa.add(u);const c=t(s),d=(m,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!eg(m)||!sa.has(u))&&(sa.delete(u),typeof c=="function"&&c(m,{success:x}))},f=m=>{d(m,n.useGlobalTarget||M1(u,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(s=>{!AT(s)&&s.getAttribute("tabindex")===null&&(s.tabIndex=0),(n.useGlobalTarget?window:s).addEventListener("pointerdown",o,i),s.addEventListener("focus",c=>_T(c,i),i)}),a}function LT(e){return e==="x"||e==="y"?Lt[e]?null:(Lt[e]=!0,()=>{Lt[e]=!1}):Lt.x||Lt.y?null:(Lt.x=Lt.y=!0,()=>{Lt.x=Lt.y=!1})}const N1=new Set(["width","height","top","left","right","bottom",...Mi]);let Ts;function OT(){Ts=void 0}const Zt={now:()=>(Ts===void 0&&Zt.set(Re.isProcessing||Ej.useManualTiming?Re.timestamp:performance.now()),Ts),set:e=>{Ts=e,queueMicrotask(OT)}};function Dp(e,t){e.indexOf(t)===-1&&e.push(t)}function Ep(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ap{constructor(){this.subscriptions=[]}add(t){return Dp(this.subscriptions,t),()=>Ep(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $1(e,t){return t?e*(1e3/t):0}const tg=30,RT=e=>!isNaN(parseFloat(e));class MT{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=Zt.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Zt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=RT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ap);const r=this.events[t].add(n);return t==="change"?()=>{r(),ne.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Zt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>tg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,tg);return $1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ya(e,t){return new MT(e,t)}function NT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ya(n))}function $T(e,t){const n=Wl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=Xj(a[o]);NT(e,o,s)}}function VT(e){return!!(He(e)&&e.add)}function Cd(e,t){const n=e.getValue("willChange");if(VT(n))return n.add(t)}function V1(e){return e.props[m1]}const B1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,BT=1e-7,FT=12;function zT(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=B1(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>BT&&++s<FT);return o}function io(e,t,n,r){if(e===t&&n===r)return pt;const i=a=>zT(a,0,1,e,n);return a=>a===0||a===1?a:B1(i(a),t,r)}const F1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,z1=e=>t=>1-e(1-t),W1=io(.33,1.53,.69,.99),_p=z1(W1),U1=F1(_p),H1=e=>(e*=2)<1?.5*_p(e):.5*(2-Math.pow(2,-10*(e-1))),Ip=e=>1-Math.sin(Math.acos(e)),Y1=z1(Ip),G1=F1(Ip),K1=e=>/^0[^.\s]+$/u.test(e);function WT(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||K1(e):!0}const wa=e=>Math.round(e*1e5)/1e5,Lp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function UT(e){return e==null}const HT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Op=(e,t)=>n=>!!(typeof n=="string"&&HT.test(n)&&n.startsWith(e)||t&&!UT(n)&&Object.prototype.hasOwnProperty.call(n,t)),Q1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(Lp);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},YT=e=>fn(0,255,e),Uu={...Ni,transform:e=>Math.round(YT(e))},hr={test:Op("rgb","red"),parse:Q1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Uu.transform(e)+", "+Uu.transform(t)+", "+Uu.transform(n)+", "+wa(Ha.transform(r))+")"};function GT(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const jd={test:Op("#"),parse:GT,transform:hr.transform},Xr={test:Op("hsl","hue"),parse:Q1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Xt.transform(wa(t))+", "+Xt.transform(wa(n))+", "+wa(Ha.transform(r))+")"},ze={test:e=>hr.test(e)||jd.test(e)||Xr.test(e),parse:e=>hr.test(e)?hr.parse(e):Xr.test(e)?Xr.parse(e):jd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?hr.transform(e):Xr.transform(e)},KT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function QT(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Lp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(KT))===null||n===void 0?void 0:n.length)||0)>0}const X1="number",Z1="color",XT="var",ZT="var(",ng="${}",JT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ga(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(JT,u=>(ze.test(u)?(r.color.push(a),i.push(Z1),n.push(ze.parse(u))):u.startsWith(ZT)?(r.var.push(a),i.push(XT),n.push(u)):(r.number.push(a),i.push(X1),n.push(parseFloat(u))),++a,ng)).split(ng);return{values:n,split:s,indexes:r,types:i}}function J1(e){return Ga(e).values}function q1(e){const{split:t,types:n}=Ga(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===X1?a+=wa(i[o]):s===Z1?a+=ze.transform(i[o]):a+=i[o]}return a}}const qT=e=>typeof e=="number"?0:e;function eP(e){const t=J1(e);return q1(e)(t.map(qT))}const Yn={test:QT,parse:J1,createTransformer:q1,getAnimatableNone:eP},tP=new Set(["brightness","contrast","saturate","opacity"]);function nP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Lp)||[];if(!r)return e;const i=n.replace(r,"");let a=tP.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const rP=/\b([a-z-]*)\(.*?\)/gu,Td={...Yn,getAnimatableNone:e=>{const t=e.match(rP);return t?t.map(nP).join(" "):e}},iP={...yp,color:ze,backgroundColor:ze,outlineColor:ze,fill:ze,stroke:ze,borderColor:ze,borderTopColor:ze,borderRightColor:ze,borderBottomColor:ze,borderLeftColor:ze,filter:Td,WebkitFilter:Td},Rp=e=>iP[e];function ew(e,t){let n=Rp(e);return n!==Td&&(n=Yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const aP=new Set(["auto","none","0"]);function oP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!aP.has(a)&&Ga(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=ew(n,i)}const rg=e=>e===Ni||e===$,ig=(e,t)=>parseFloat(e.split(", ")[t]),ag=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return ig(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?ig(a[1],e):0}},sP=new Set(["x","y","z"]),lP=Mi.filter(e=>!sP.has(e));function uP(e){const t=[];return lP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ti={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ag(4,13),y:ag(5,14)};Ti.translateX=Ti.x;Ti.translateY=Ti.y;const xr=new Set;let Pd=!1,Dd=!1;function tw(){if(Dd){const e=Array.from(xr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=uP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Dd=!1,Pd=!1,xr.forEach(e=>e.complete()),xr.clear()}function nw(){xr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Dd=!0)})}function cP(){nw(),tw()}class Mp{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(xr.add(this),Pd||(Pd=!0,ne.read(nw),ne.resolveKeyframes(tw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const u=r.readValue(n,s);u!=null&&(t[0]=u)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const rw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),dP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fP(e){const t=dP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function iw(e,t,n=1){const[r,i]=fP(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return rw(o)?parseFloat(o):o}return vp(i)?iw(i,t,n+1):i}const aw=e=>t=>t.test(e),pP={test:e=>e==="auto",parse:e=>e},ow=[Ni,$,Xt,Cn,nT,tT,pP],og=e=>ow.find(aw(e));class sw extends Mp{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let c=t[u];if(typeof c=="string"&&(c=c.trim(),vp(c))){const d=iw(c,n.current);d!==void 0&&(t[u]=d),u===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!N1.has(r)||t.length!==2)return;const[i,a]=t,o=og(i),s=og(a);if(o!==s)if(rg(o)&&rg(s))for(let u=0;u<t.length;u++){const c=t[u];typeof c=="string"&&(t[u]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)WT(t[i])&&r.push(i);r.length&&oP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ti[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Ti[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([u,c])=>{n.getValue(u).set(c)}),this.resolveNoneKeyframes()}}const sg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yn.test(e)||e==="0")&&!e.startsWith("url("));function hP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function mP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=sg(i,t),s=sg(a,t);return!o||!s?!1:hP(e)||(n==="spring"||jp(n))&&r}const gP=e=>e!==null;function Ul(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(gP),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const vP=40;class lw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Zt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>vP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&cP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Zt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:u,isGenerator:c}=this.options;if(!c&&!mP(t,r,i,a))if(o)this.options.duration=0;else{u&&u(Ul(t,this.options,n)),s&&s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const de=(e,t,n)=>e+(t-e)*n;function Hu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function yP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,u=2*n-s;i=Hu(u,s,e+1/3),a=Hu(u,s,e),o=Hu(u,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function cl(e,t){return n=>n>0?t:e}const Yu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},xP=[jd,hr,Xr],wP=e=>xP.find(t=>t.test(e));function lg(e){const t=wP(e);if(!t)return!1;let n=t.parse(e);return t===Xr&&(n=yP(n)),n}const ug=(e,t)=>{const n=lg(e),r=lg(t);if(!n||!r)return cl(e,t);const i={...n};return a=>(i.red=Yu(n.red,r.red,a),i.green=Yu(n.green,r.green,a),i.blue=Yu(n.blue,r.blue,a),i.alpha=de(n.alpha,r.alpha,a),hr.transform(i))},SP=(e,t)=>n=>t(e(n)),ao=(...e)=>e.reduce(SP),Ed=new Set(["none","hidden"]);function bP(e,t){return Ed.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function kP(e,t){return n=>de(e,t,n)}function Np(e){return typeof e=="number"?kP:typeof e=="string"?vp(e)?cl:ze.test(e)?ug:TP:Array.isArray(e)?uw:typeof e=="object"?ze.test(e)?ug:CP:cl}function uw(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>Np(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function CP(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Np(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function jP(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],u=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=u,i[o]++}return r}const TP=(e,t)=>{const n=Yn.createTransformer(t),r=Ga(e),i=Ga(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ed.has(e)&&!i.values.length||Ed.has(t)&&!r.values.length?bP(e,t):ao(uw(jP(r,i),i.values),n):cl(e,t)};function cw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?de(e,t,n):Np(e)(e,t)}const PP=5;function dw(e,t,n){const r=Math.max(t-PP,0);return $1(n-e(r),t-r)}const ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gu=.001;function DP({duration:e=ve.duration,bounce:t=ve.bounce,velocity:n=ve.velocity,mass:r=ve.mass}){let i,a,o=1-t;o=fn(ve.minDamping,ve.maxDamping,o),e=fn(ve.minDuration,ve.maxDuration,sn(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,m=Ad(c,o),x=Math.exp(-f);return Gu-p/m*x},a=c=>{const f=c*o*e,p=f*n+n,m=Math.pow(o,2)*Math.pow(c,2)*e,x=Math.exp(-f),y=Ad(Math.pow(c,2),o);return(-i(c)+Gu>0?-1:1)*((p-m)*x)/y}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-Gu+d*f},a=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const s=5/e,u=AP(i,a,s);if(e=on(e),isNaN(u))return{stiffness:ve.stiffness,damping:ve.damping,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const EP=12;function AP(e,t,n){let r=n;for(let i=1;i<EP;i++)r=r-e(r)/t(r);return r}function Ad(e,t){return e*Math.sqrt(1-t*t)}const _P=["duration","bounce"],IP=["stiffness","damping","mass"];function cg(e,t){return t.some(n=>e[n]!==void 0)}function LP(e){let t={velocity:ve.velocity,stiffness:ve.stiffness,damping:ve.damping,mass:ve.mass,isResolvedFromDuration:!1,...e};if(!cg(e,IP)&&cg(e,_P))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*fn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ve.mass,stiffness:i,damping:a}}else{const n=DP(e);t={...t,...n,mass:ve.mass},t.isResolvedFromDuration=!0}return t}function fw(e=ve.visualDuration,t=ve.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:u,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=LP({...n,velocity:-sn(n.velocity||0)}),x=p||0,y=c/(2*Math.sqrt(u*d)),S=o-a,g=sn(Math.sqrt(u/d)),h=Math.abs(S)<5;r||(r=h?ve.restSpeed.granular:ve.restSpeed.default),i||(i=h?ve.restDelta.granular:ve.restDelta.default);let v;if(y<1){const C=Ad(g,y);v=j=>{const T=Math.exp(-y*g*j);return o-T*((x+y*g*S)/C*Math.sin(C*j)+S*Math.cos(C*j))}}else if(y===1)v=C=>o-Math.exp(-g*C)*(S+(x+g*S)*C);else{const C=g*Math.sqrt(y*y-1);v=j=>{const T=Math.exp(-y*g*j),P=Math.min(C*j,300);return o-T*((x+y*g*S)*Math.sinh(P)+C*S*Math.cosh(P))/C}}const k={calculatedDuration:m&&f||null,next:C=>{const j=v(C);if(m)s.done=C>=f;else{let T=0;y<1&&(T=C===0?on(x):dw(v,C,j));const P=Math.abs(T)<=r,A=Math.abs(o-j)<=i;s.done=P&&A}return s.value=s.done?o:j,s},toString:()=>{const C=Math.min(A1(k),bd),j=_1(T=>k.next(C*T).value,C,30);return C+"ms "+j}};return k}function dg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=P=>s!==void 0&&P<s||u!==void 0&&P>u,x=P=>s===void 0?u:u===void 0||Math.abs(s-P)<Math.abs(u-P)?s:u;let y=n*t;const S=f+y,g=o===void 0?S:o(S);g!==S&&(y=g-f);const h=P=>-y*Math.exp(-P/r),v=P=>g+h(P),k=P=>{const A=h(P),D=v(P);p.done=Math.abs(A)<=c,p.value=p.done?g:D};let C,j;const T=P=>{m(p.value)&&(C=P,j=fw({keyframes:[p.value,x(p.value)],velocity:dw(v,P,p.value),damping:i,stiffness:a,restDelta:c,restSpeed:d}))};return T(0),{calculatedDuration:null,next:P=>{let A=!1;return!j&&C===void 0&&(A=!0,k(P),T(P)),C!==void 0&&P>=C?j.next(P-C):(!A&&k(P),p)}}}const OP=io(.42,0,1,1),RP=io(0,0,.58,1),pw=io(.42,0,.58,1),MP=e=>Array.isArray(e)&&typeof e[0]!="number",NP={linear:pt,easeIn:OP,easeInOut:pw,easeOut:RP,circIn:Ip,circInOut:G1,circOut:Y1,backIn:_p,backInOut:U1,backOut:W1,anticipate:H1},fg=e=>{if(Tp(e)){c1(e.length===4);const[t,n,r,i]=e;return io(t,n,r,i)}else if(typeof e=="string")return NP[e];return e};function $P(e,t,n){const r=[],i=n||cw,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const u=Array.isArray(t)?t[o]||pt:t;s=ao(u,s)}r.push(s)}return r}function VP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(c1(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=$P(t,r,i),u=s.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(u>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Ci(e[f],e[f+1],d);return s[f](p)};return n?d=>c(fn(e[0],e[a-1],d)):c}function BP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ci(0,t,r);e.push(de(n,1,i))}}function FP(e){const t=[0];return BP(t,e.length-1),t}function zP(e,t){return e.map(n=>n*t)}function WP(e,t){return e.map(()=>t||pw).splice(0,e.length-1)}function dl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=MP(r)?r.map(fg):fg(r),a={done:!1,value:t[0]},o=zP(n&&n.length===t.length?n:FP(t),e),s=VP(o,t,{ease:Array.isArray(i)?i:WP(t,i)});return{calculatedDuration:e,next:u=>(a.value=s(u),a.done=u>=e,a)}}const UP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ne.update(t,!0),stop:()=>Hn(t),now:()=>Re.isProcessing?Re.timestamp:Zt.now()}},HP={decay:dg,inertia:dg,tween:dl,keyframes:dl,spring:fw},YP=e=>e/100;class $p extends lw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:u}=this.options;u&&u()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Mp,s=(u,c)=>this.onKeyframesResolved(u,c);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=jp(n)?n:HP[n]||dl;let u,c;s!==dl&&typeof t[0]!="number"&&(u=ao(YP,cw(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});a==="mirror"&&(c=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=A1(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:u,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:u,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:m,repeatType:x,repeatDelay:y,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,k=a;if(m){const P=Math.min(this.currentTime,d)/f;let A=Math.floor(P),D=P%1;!D&&P>=1&&(D=1),D===1&&A--,A=Math.min(A,m+1),!!(A%2)&&(x==="reverse"?(D=1-D,y&&(D-=y/f)):x==="mirror"&&(k=o)),v=fn(0,1,D)*f}const C=h?{done:!1,value:u[0]}:k.next(v);s&&(C.value=s(C.value));let{done:j}=C;!h&&c!==null&&(j=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return T&&i!==void 0&&(C.value=Ul(u,this.options,i)),S&&S(C.value),T&&this.finish(),C}get duration(){const{resolved:t}=this;return t?sn(t.calculatedDuration):0}get time(){return sn(this.currentTime)}set time(t){t=on(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=sn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=UP,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const GP=new Set(["opacity","clipPath","filter","transform"]);function KP(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:u}={}){const c={[t]:n};u&&(c.offset=u);const d=L1(s,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}const QP=cp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),fl=10,XP=2e4;function ZP(e){return jp(e.type)||e.type==="spring"||!I1(e.ease)}function JP(e,t){const n=new $p({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<XP;)r=n.sample(a),i.push(r.value),a+=fl;return{times:void 0,keyframes:i,duration:a-fl,ease:"linear"}}const hw={anticipate:H1,backInOut:U1,circInOut:G1};function qP(e){return e in hw}class pg extends lw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new sw(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:a,type:o,motionValue:s,name:u,startTime:c}=this.options;if(!s.owner||!s.owner.current)return!1;if(typeof a=="string"&&ul()&&qP(a)&&(a=hw[a]),ZP(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:x,...y}=this.options,S=JP(t,y);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,a=S.ease,o="keyframes"}const d=KP(s.owner.current,u,t,{...this.options,duration:r,times:i,ease:a});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Zm(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;s.set(Ul(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return sn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return sn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=on(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return pt;const{animation:r}=n;Zm(r,t)}return pt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:p,...m}=this.options,x=new $p({...m,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),y=on(this.time);c.setWithVelocity(x.sample(y-fl).value,x.sample(y).value,fl)}const{onStop:u}=this.options;u&&u(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=n.owner.getProps();return QP()&&r&&GP.has(r)&&!u&&!c&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const e5={type:"spring",stiffness:500,damping:25,restSpeed:10},t5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),n5={type:"keyframes",duration:.8},r5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},i5=(e,{keyframes:t})=>t.length>2?n5:Er.has(e)?e.startsWith("scale")?t5(t[1]):e5:r5;function a5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:u,elapsed:c,...d}){return!!Object.keys(d).length}const Vp=(e,t,n,r={},i,a)=>o=>{const s=Cp(r,e)||{},u=s.delay||r.delay||0;let{elapsed:c=0}=r;c=c-on(u);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};a5(s)||(d={...d,...i5(e,d)}),d.duration&&(d.duration=on(d.duration)),d.repeatDelay&&(d.repeatDelay=on(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Ul(d.keyframes,s);if(p!==void 0)return ne.update(()=>{d.onUpdate(p),d.onComplete()}),new CT([])}return!a&&pg.supports(d)?new pg(d):new $p(d)};function o5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function mw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...u}=t;r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in u){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),m=u[f];if(m===void 0||d&&o5(d,f))continue;const x={delay:n,...Cp(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const g=V1(e);if(g){const h=window.MotionHandoffAnimation(g,f,ne);h!==null&&(x.startTime=h,y=!0)}}Cd(e,f),p.start(Vp(f,p,m,e.shouldReduceMotion&&N1.has(f)?{type:!1}:x,e,y));const S=p.animation;S&&c.push(S)}return s&&Promise.all(c).then(()=>{ne.update(()=>{s&&$T(e,s)})}),c}function _d(e,t,n={}){var r;const i=Wl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(mw(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=a;return s5(e,t,d+c,f,p,n)}:()=>Promise.resolve(),{when:u}=a;if(u){const[c,d]=u==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function s5(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,u=i===1?(c=0)=>c*r:(c=0)=>s-c*r;return Array.from(e.variantChildren).sort(l5).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(_d(c,t,{...a,delay:n+u(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function l5(e,t){return e.sortNodePosition(t)}function u5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>_d(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=_d(e,t,n);else{const i=typeof t=="function"?Wl(e,t,n.custom):t;r=Promise.all(mw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const c5=fp.length;function gw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?gw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<c5;n++){const r=fp[n],i=e.props[r];(Ua(i)||i===!1)&&(t[r]=i)}return t}const d5=[...dp].reverse(),f5=dp.length;function p5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>u5(e,n,r)))}function h5(e){let t=p5(e),n=hg(),r=!0;const i=u=>(c,d)=>{var f;const p=Wl(e,d,u==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:x,...y}=p;c={...c,...y,...x}}return c};function a(u){t=u(e)}function o(u){const{props:c}=e,d=gw(e.parent)||{},f=[],p=new Set;let m={},x=1/0;for(let S=0;S<f5;S++){const g=d5[S],h=n[g],v=c[g]!==void 0?c[g]:d[g],k=Ua(v),C=g===u?h.isActive:null;C===!1&&(x=S);let j=v===d[g]&&v!==c[g]&&k;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),h.protectedKeys={...m},!h.isActive&&C===null||!v&&!h.prevProp||Fl(v)||typeof v=="boolean")continue;const T=m5(h.prevProp,v);let P=T||g===u&&h.isActive&&!j&&k||S>x&&k,A=!1;const D=Array.isArray(v)?v:[v];let M=D.reduce(i(g),{});C===!1&&(M={});const{prevResolvedValues:Q={}}=h,re={...Q,...M},he=B=>{P=!0,p.has(B)&&(A=!0,p.delete(B)),h.needsAnimating[B]=!0;const _=e.getValue(B);_&&(_.liveStyle=!1)};for(const B in re){const _=M[B],L=Q[B];if(m.hasOwnProperty(B))continue;let O=!1;Sd(_)&&Sd(L)?O=!E1(_,L):O=_!==L,O?_!=null?he(B):p.add(B):_!==void 0&&p.has(B)?he(B):h.protectedKeys[B]=!0}h.prevProp=v,h.prevResolvedValues=M,h.isActive&&(m={...m,...M}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(j&&T)||A)&&f.push(...D.map(B=>({animation:B,options:{type:g}})))}if(p.size){const S={};p.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),S[g]=h??null}),f.push({animation:S})}let y=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function s(u,c){var d;if(n[u].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(u,c)}),n[u].isActive=c;const f=o(u);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=hg(),r=!0}}}function m5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!E1(t,e):!1}function nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hg(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class Jn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class g5 extends Jn{constructor(t){super(t),t.animationState||(t.animationState=h5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Fl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let v5=0;class y5 extends Jn{constructor(){super(...arguments),this.id=v5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const x5={animation:{Feature:g5},exit:{Feature:y5}};function Ka(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function oo(e){return{point:{x:e.pageX,y:e.pageY}}}const w5=e=>t=>Pp(t)&&e(t,oo(t));function Sa(e,t,n,r){return Ka(e,t,w5(n),r)}const mg=(e,t)=>Math.abs(e-t);function S5(e,t){const n=mg(e.x,t.x),r=mg(e.y,t.y);return Math.sqrt(n**2+r**2)}class vw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Qu(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=S5(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:x}=f,{timestamp:y}=Re;this.history.push({...x,timestamp:y});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ku(p,this.transformPagePoint),ne.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Qu(f.type==="pointercancel"?this.lastMoveEventInfo:Ku(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,S),x&&x(f,S)},!Pp(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=oo(t),s=Ku(o,this.transformPagePoint),{point:u}=s,{timestamp:c}=Re;this.history=[{...u,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Qu(s,this.history)),this.removeListeners=ao(Sa(this.contextWindow,"pointermove",this.handlePointerMove),Sa(this.contextWindow,"pointerup",this.handlePointerUp),Sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Hn(this.updatePoint)}}function Ku(e,t){return t?{point:t(e.point)}:e}function gg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Qu({point:e},t){return{point:e,delta:gg(e,yw(t)),offset:gg(e,b5(t)),velocity:k5(t,.1)}}function b5(e){return e[0]}function yw(e){return e[e.length-1]}function k5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=yw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>on(t)));)n--;if(!r)return{x:0,y:0};const a=sn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const xw=1e-4,C5=1-xw,j5=1+xw,ww=.01,T5=0-ww,P5=0+ww;function mt(e){return e.max-e.min}function D5(e,t,n){return Math.abs(e-t)<=n}function vg(e,t,n,r=.5){e.origin=r,e.originPoint=de(t.min,t.max,e.origin),e.scale=mt(n)/mt(t),e.translate=de(n.min,n.max,e.origin)-e.originPoint,(e.scale>=C5&&e.scale<=j5||isNaN(e.scale))&&(e.scale=1),(e.translate>=T5&&e.translate<=P5||isNaN(e.translate))&&(e.translate=0)}function ba(e,t,n,r){vg(e.x,t.x,n.x,r?r.originX:void 0),vg(e.y,t.y,n.y,r?r.originY:void 0)}function yg(e,t,n){e.min=n.min+t.min,e.max=e.min+mt(t)}function E5(e,t,n){yg(e.x,t.x,n.x),yg(e.y,t.y,n.y)}function xg(e,t,n){e.min=t.min-n.min,e.max=e.min+mt(t)}function ka(e,t,n){xg(e.x,t.x,n.x),xg(e.y,t.y,n.y)}function A5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?de(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?de(n,e,r.max):Math.min(e,n)),e}function wg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function _5(e,{top:t,left:n,bottom:r,right:i}){return{x:wg(e.x,n,i),y:wg(e.y,t,r)}}function Sg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function I5(e,t){return{x:Sg(e.x,t.x),y:Sg(e.y,t.y)}}function L5(e,t){let n=.5;const r=mt(e),i=mt(t);return i>r?n=Ci(t.min,t.max-r,e.min):r>i&&(n=Ci(e.min,e.max-i,t.min)),fn(0,1,n)}function O5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Id=.35;function R5(e=Id){return e===!1?e=0:e===!0&&(e=Id),{x:bg(e,"left","right"),y:bg(e,"top","bottom")}}function bg(e,t,n){return{min:kg(e,t),max:kg(e,n)}}function kg(e,t){return typeof e=="number"?e:e[t]||0}const Cg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Zr=()=>({x:Cg(),y:Cg()}),jg=()=>({min:0,max:0}),xe=()=>({x:jg(),y:jg()});function St(e){return[e("x"),e("y")]}function Sw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function M5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function N5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Xu(e){return e===void 0||e===1}function Ld({scale:e,scaleX:t,scaleY:n}){return!Xu(e)||!Xu(t)||!Xu(n)}function sr(e){return Ld(e)||bw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function bw(e){return Tg(e.x)||Tg(e.y)}function Tg(e){return e&&e!=="0%"}function pl(e,t,n){const r=e-n,i=t*r;return n+i}function Pg(e,t,n,r,i){return i!==void 0&&(e=pl(e,i,r)),pl(e,n,r)+t}function Od(e,t=0,n=1,r,i){e.min=Pg(e.min,t,n,r,i),e.max=Pg(e.max,t,n,r,i)}function kw(e,{x:t,y:n}){Od(e.x,t.translate,t.scale,t.originPoint),Od(e.y,n.translate,n.scale,n.originPoint)}const Dg=.999999999999,Eg=1.0000000000001;function $5(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:u}=a.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&qr(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,kw(e,o)),r&&sr(a.latestValues)&&qr(e,a.latestValues))}t.x<Eg&&t.x>Dg&&(t.x=1),t.y<Eg&&t.y>Dg&&(t.y=1)}function Jr(e,t){e.min=e.min+t,e.max=e.max+t}function Ag(e,t,n,r,i=.5){const a=de(e.min,e.max,i);Od(e,t,n,a,r)}function qr(e,t){Ag(e.x,t.x,t.scaleX,t.scale,t.originX),Ag(e.y,t.y,t.scaleY,t.scale,t.originY)}function Cw(e,t){return Sw(N5(e.getBoundingClientRect(),t))}function V5(e,t,n){const r=Cw(e,n),{scroll:i}=t;return i&&(Jr(r.x,i.offset.x),Jr(r.y,i.offset.y)),r}const jw=({current:e})=>e?e.ownerDocument.defaultView:null,B5=new WeakMap;class F5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(oo(d).point)},a=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:x}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=LT(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),St(S=>{let g=this.getAxisMotionValue(S).get()||0;if(Xt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[S];v&&(g=mt(v)*(parseFloat(g)/100))}}this.originPoint[S]=g}),x&&ne.postRender(()=>x(d,f)),Cd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:S}=f;if(m&&this.currentDirection===null){this.currentDirection=z5(S),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),y&&y(d,f)},s=(d,f)=>this.stop(d,f),u=()=>St(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new vw(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:jw(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&ne.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!$o(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=A5(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Qr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=_5(i.layoutBox,n):this.constraints=!1,this.elastic=R5(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&St(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=O5(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Qr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=V5(r,i.root,this.visualElement.getTransformPagePoint());let o=I5(i.layout.layoutBox,a);if(n){const s=n(M5(o));this.hasMutatedConstraints=!!s,s&&(o=Sw(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),u=this.constraints||{},c=St(d=>{if(!$o(d,n,this.currentDirection))return;let f=u&&u[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(c).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Cd(this.visualElement,t),r.start(Vp(t,r,0,n,this.visualElement,!1))}stopAnimation(){St(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){St(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){St(n=>{const{drag:r}=this.getProps();if(!$o(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-de(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Qr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};St(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const u=s.get();i[o]=L5({min:u,max:u},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),St(o=>{if(!$o(o,t,null))return;const s=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];s.set(de(u,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;B5.set(this.visualElement,this);const t=this.visualElement.current,n=Sa(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();Qr(u)&&u.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ne.read(r);const o=Ka(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(St(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Id,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function $o(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function z5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class W5 extends Jn{constructor(t){super(t),this.removeGroupControls=pt,this.removeListeners=pt,this.controls=new F5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const _g=e=>(t,n)=>{e&&ne.postRender(()=>e(t,n))};class U5 extends Jn{constructor(){super(...arguments),this.removePointerDownListener=pt}onPointerDown(t){this.session=new vw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_g(t),onStart:_g(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&ne.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Sa(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ps={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ig(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Qi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if($.test(e))e=parseFloat(e);else return e;const n=Ig(e,t.target.x),r=Ig(e,t.target.y);return`${n}% ${r}%`}},H5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yn.parse(e);if(i.length>5)return r;const a=Yn.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,u=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=u;const c=de(s,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),a(i)}};class Y5 extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;fT(G5),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Ps.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||ne.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),hp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Tw(e){const[t,n]=l1(),r=w.useContext(op);return l.jsx(Y5,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(g1),isPresent:t,safeToRemove:n})}const G5={borderRadius:{...Qi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qi,borderTopRightRadius:Qi,borderBottomLeftRadius:Qi,borderBottomRightRadius:Qi,boxShadow:H5};function K5(e,t,n){const r=He(e)?e:Ya(e);return r.start(Vp("",r,t,n)),r.animation}function Q5(e){return e instanceof SVGElement&&e.tagName!=="svg"}const X5=(e,t)=>e.depth-t.depth;class Z5{constructor(){this.children=[],this.isDirty=!1}add(t){Dp(this.children,t),this.isDirty=!0}remove(t){Ep(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(X5),this.isDirty=!1,this.children.forEach(t)}}function J5(e,t){const n=Zt.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Hn(r),e(a-t))};return ne.read(r,!0),()=>Hn(r)}const Pw=["TopLeft","TopRight","BottomLeft","BottomRight"],q5=Pw.length,Lg=e=>typeof e=="string"?parseFloat(e):e,Og=e=>typeof e=="number"||$.test(e);function eD(e,t,n,r,i,a){i?(e.opacity=de(0,n.opacity!==void 0?n.opacity:1,tD(r)),e.opacityExit=de(t.opacity!==void 0?t.opacity:1,0,nD(r))):a&&(e.opacity=de(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<q5;o++){const s=`border${Pw[o]}Radius`;let u=Rg(t,s),c=Rg(n,s);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Og(u)===Og(c)?(e[s]=Math.max(de(Lg(u),Lg(c),r),0),(Xt.test(c)||Xt.test(u))&&(e[s]+="%")):e[s]=c}(t.rotate||n.rotate)&&(e.rotate=de(t.rotate||0,n.rotate||0,r))}function Rg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const tD=Dw(0,.5,Y1),nD=Dw(.5,.95,pt);function Dw(e,t,n){return r=>r<e?0:r>t?1:n(Ci(e,t,r))}function Mg(e,t){e.min=t.min,e.max=t.max}function wt(e,t){Mg(e.x,t.x),Mg(e.y,t.y)}function Ng(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function $g(e,t,n,r,i){return e-=t,e=pl(e,1/n,r),i!==void 0&&(e=pl(e,1/i,r)),e}function rD(e,t=0,n=1,r=.5,i,a=e,o=e){if(Xt.test(t)&&(t=parseFloat(t),t=de(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=de(a.min,a.max,r);e===a&&(s-=t),e.min=$g(e.min,t,n,s,i),e.max=$g(e.max,t,n,s,i)}function Vg(e,t,[n,r,i],a,o){rD(e,t[n],t[r],t[i],t.scale,a,o)}const iD=["x","scaleX","originX"],aD=["y","scaleY","originY"];function Bg(e,t,n,r){Vg(e.x,t,iD,n?n.x:void 0,r?r.x:void 0),Vg(e.y,t,aD,n?n.y:void 0,r?r.y:void 0)}function Fg(e){return e.translate===0&&e.scale===1}function Ew(e){return Fg(e.x)&&Fg(e.y)}function zg(e,t){return e.min===t.min&&e.max===t.max}function oD(e,t){return zg(e.x,t.x)&&zg(e.y,t.y)}function Wg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Aw(e,t){return Wg(e.x,t.x)&&Wg(e.y,t.y)}function Ug(e){return mt(e.x)/mt(e.y)}function Hg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class sD{constructor(){this.members=[]}add(t){Dp(this.members,t),t.scheduleRender()}remove(t){if(Ep(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lD(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:x}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,u=e.y.scale*t.y;return(s!==1||u!==1)&&(r+=`scale(${s}, ${u})`),r||"none"}const lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},la=typeof window<"u"&&window.MotionDebug!==void 0,Zu=["","X","Y","Z"],uD={visibility:"hidden"},Yg=1e3;let cD=0;function Ju(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function _w(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=V1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ne,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&_w(r)}function Iw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=cD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,la&&(lr.totalNodes=lr.resolvedTargetDeltas=lr.recalculatedProjection=0),this.nodes.forEach(pD),this.nodes.forEach(yD),this.nodes.forEach(xD),this.nodes.forEach(hD),la&&window.MotionDebug.record(lr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z5)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Ap),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const u=this.eventHandlers.get(o);u&&u.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Q5(o),this.instance=o;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=J5(p,250),Ps.hasAnimatedSinceResize&&(Ps.hasAnimatedSinceResize=!1,this.nodes.forEach(Kg))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||CD,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Aw(this.targetLayout,x)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const k={...Cp(y,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else p||Kg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wD),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_w(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:u}=this.options;if(s===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Gg);return}this.isUpdating||this.nodes.forEach(gD),this.isUpdating=!1,this.nodes.forEach(vD),this.nodes.forEach(dD),this.nodes.forEach(fD),this.clearAllSnapshots();const s=Zt.now();Re.delta=fn(0,1e3/60,s-Re.timestamp),Re.timestamp=s,Re.isProcessing=!0,zu.update.process(Re),zu.preRender.process(Re),zu.render.process(Re),Re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mD),this.sharedNodes.forEach(SD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Ew(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(s||sr(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let u=this.removeElementScroll(s);return o&&(u=this.removeTransform(u)),jD(u),{animationId:this.root.animationId,measuredBox:s,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return xe();const u=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(TD))){const{scroll:d}=this.root;d&&(Jr(u.x,d.offset.x),Jr(u.y,d.offset.y))}return u}removeElementScroll(o){var s;const u=xe();if(wt(u,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return u;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&wt(u,o),Jr(u.x,f.offset.x),Jr(u.y,f.offset.y))}return u}applyTransform(o,s=!1){const u=xe();wt(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&qr(u,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),sr(d.latestValues)&&qr(u,d.latestValues)}return sr(this.latestValues)&&qr(u,this.latestValues),u}removeTransform(o){const s=xe();wt(s,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!sr(c.latestValues))continue;Ld(c.latestValues)&&c.updateSnapshot();const d=xe(),f=c.measurePageBox();wt(d,f),Bg(s,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return sr(this.latestValues)&&Bg(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Re.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xe(),this.relativeTargetOrigin=xe(),ka(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=xe(),this.targetWithTransforms=xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wt(this.target,this.layout.layoutBox),kw(this.target,this.targetDelta)):wt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xe(),this.relativeTargetOrigin=xe(),ka(this.relativeTargetOrigin,this.target,m.target),wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}la&&lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ld(this.parent.latestValues)||bw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),u=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Re.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;wt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;$5(this.layoutCorrected,this.treeScale,this.path,u),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=xe());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ng(this.prevProjectionDelta.x,this.projectionDelta.x),Ng(this.prevProjectionDelta.y,this.projectionDelta.y)),ba(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!Hg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),la&&lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Zr(),this.projectionDelta=Zr(),this.projectionDeltaWithTransform=Zr()}setAnimationOrigin(o,s=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=Zr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=xe(),m=u?u.source:void 0,x=this.layout?this.layout.source:void 0,y=m!==x,S=this.getStack(),g=!S||S.members.length<=1,h=!!(y&&!g&&this.options.crossfade===!0&&!this.path.some(kD));this.animationProgress=0;let v;this.mixTargetDelta=k=>{const C=k/1e3;Qg(f.x,o.x,C),Qg(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ka(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bD(this.relativeTarget,this.relativeTargetOrigin,p,C),v&&oD(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=xe()),wt(v,this.relativeTarget)),y&&(this.animationValues=d,eD(d,c,this.latestValues,C,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ne.update(()=>{Ps.hasAnimatedSinceResize=!0,this.currentAnimation=K5(0,Yg,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:u,layout:c,latestValues:d}=o;if(!(!s||!u||!c)){if(this!==o&&this.layout&&c&&Lw(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||xe();const f=mt(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=mt(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}wt(s,u),qr(s,d),ba(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new sD),this.sharedNodes.get(o).add(s);const c=s.options.initialPromotionConfig;s.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(s=!0),!s)return;const c={};u.z&&Ju("z",o,c,this.animationValues);for(let d=0;d<Zu.length;d++)Ju(`rotate${Zu[d]}`,o,c,this.animationValues),Ju(`skew${Zu[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var s,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return uD;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=js(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=js(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!sr(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=lD(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:m,y:x}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in ll){if(p[y]===void 0)continue;const{correct:S,applyTo:g}=ll[y],h=c.transform==="none"?p[y]:S(p[y],f);if(g){const v=g.length;for(let k=0;k<v;k++)c[g[k]]=h}else c[y]=h}return this.options.layoutId&&(c.pointerEvents=f===this?js(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Gg),this.root.sharedNodes.clear()}}}function dD(e){e.updateLayout()}function fD(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?St(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],m=mt(p);p.min=r[f].min,p.max=p.min+m}):Lw(a,n.layoutBox,r)&&St(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],m=mt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const s=Zr();ba(s,r,n.layoutBox);const u=Zr();o?ba(u,e.applyTransform(i,!0),n.measuredBox):ba(u,r,n.layoutBox);const c=!Ew(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const x=xe();ka(x,n.layoutBox,p.layoutBox);const y=xe();ka(y,r,m.layoutBox),Aw(x,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:s,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function pD(e){la&&lr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hD(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function mD(e){e.clearSnapshot()}function Gg(e){e.clearMeasurements()}function gD(e){e.isLayoutDirty=!1}function vD(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Kg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function yD(e){e.resolveTargetDelta()}function xD(e){e.calcProjection()}function wD(e){e.resetSkewAndRotation()}function SD(e){e.removeLeadSnapshot()}function Qg(e,t,n){e.translate=de(t.translate,0,n),e.scale=de(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Xg(e,t,n,r){e.min=de(t.min,n.min,r),e.max=de(t.max,n.max,r)}function bD(e,t,n,r){Xg(e.x,t.x,n.x,r),Xg(e.y,t.y,n.y,r)}function kD(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const CD={duration:.45,ease:[.4,0,.1,1]},Zg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Jg=Zg("applewebkit/")&&!Zg("chrome/")?Math.round:pt;function qg(e){e.min=Jg(e.min),e.max=Jg(e.max)}function jD(e){qg(e.x),qg(e.y)}function Lw(e,t,n){return e==="position"||e==="preserve-aspect"&&!D5(Ug(t),Ug(n),.2)}function TD(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const PD=Iw({attachResizeListener:(e,t)=>Ka(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qu={current:void 0},Ow=Iw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!qu.current){const e=new PD({});e.mount(window),e.setOptions({layoutScroll:!0}),qu.current=e}return qu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),DD={pan:{Feature:U5},drag:{Feature:W5,ProjectionNode:Ow,MeasureLayout:Tw}};function ev(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&ne.postRender(()=>a(t,oo(t)))}class ED extends Jn{mount(){const{current:t}=this.node;t&&(this.unmount=DT(t,n=>(ev(this.node,n,"Start"),r=>ev(this.node,r,"End"))))}unmount(){}}class AD extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ao(Ka(this.node.current,"focus",()=>this.onFocus()),Ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tv(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&ne.postRender(()=>a(t,oo(t)))}class _D extends Jn{mount(){const{current:t}=this.node;t&&(this.unmount=IT(t,n=>(tv(this.node,n,"Start"),(r,{success:i})=>tv(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Rd=new WeakMap,ec=new WeakMap,ID=e=>{const t=Rd.get(e.target);t&&t(e)},LD=e=>{e.forEach(ID)};function OD({root:e,...t}){const n=e||document;ec.has(n)||ec.set(n,{});const r=ec.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(LD,{root:e,...t})),r[i]}function RD(e,t,n){const r=OD(t);return Rd.set(e,n),r.observe(e),()=>{Rd.delete(e),r.unobserve(e)}}const MD={some:0,all:1};class ND extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:MD[i]},s=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,a&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};return RD(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some($D(t,n))&&this.startObserver()}unmount(){}}function $D({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const VD={inView:{Feature:ND},tap:{Feature:_D},focus:{Feature:AD},hover:{Feature:ED}},BD={layout:{ProjectionNode:Ow,MeasureLayout:Tw}},Md={current:null},Rw={current:!1};function FD(){if(Rw.current=!0,!!up)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Md.current=e.matches;e.addListener(t),t()}else Md.current=!1}const zD=[...ow,ze,Yn],WD=e=>zD.find(aw(e)),nv=new WeakMap;function UD(e,t,n){for(const r in t){const i=t[r],a=n[r];if(He(i))e.addValue(r,i);else if(He(a))e.addValue(r,Ya(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Ya(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const rv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class HD{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=Zt.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,ne.render(this.render,!1,!0))};const{latestValues:u,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=zl(n),this.isVariantNode=h1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const x=p[m];u[m]!==void 0&&He(x)&&x.set(u[m],!1)}}mount(t){this.current=t,nv.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Rw.current||FD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Md.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){nv.delete(this.current),this.projection&&this.projection.unmount(),Hn(this.notifyUpdate),Hn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Er.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ne.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ji){const n=ji[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<rv.length;r++){const i=rv[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=UD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ya(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(rw(i)||K1(i))?i=parseFloat(i):!WD(i)&&Yn.test(n)&&(i=ew(t,n)),this.setBaseTarget(t,He(i)?i.get():i)),He(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=gp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!He(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ap),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Mw extends HD{constructor(){super(...arguments),this.KeyframeResolver=sw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;He(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function YD(e){return window.getComputedStyle(e)}class GD extends Mw{constructor(){super(...arguments),this.type="html",this.renderInstance=k1}readValueFromInstance(t,n){if(Er.has(n)){const r=Rp(n);return r&&r.default||0}else{const r=YD(t),i=(w1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Cw(t,n)}build(t,n,r){xp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return kp(t,n,r)}}class KD extends Mw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=xe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Er.has(n)){const r=Rp(n);return r&&r.default||0}return n=C1.has(n)?n:pp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return P1(t,n,r)}build(t,n,r){wp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){j1(t,n,r,i)}mount(t){this.isSVGTag=bp(t.tagName),super.mount(t)}}const QD=(e,t)=>mp(e)?new KD(t):new GD(t,{allowProjection:e!==w.Fragment}),XD=ST({...x5,...VD,...DD,...BD},QD),I=Mj(XD),ZD=b(I.nav)`
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;

  @media (max-width: 640px) {
    top: auto;
    bottom: 24px;
  }
`,JD=b.div`
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
`,qD=b(Lx)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,eE=b.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,tE=b.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,nE=b(I.button)`
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
`,rE=b(I.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,iE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"5"}),l.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),l.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),l.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),l.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),l.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),l.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),l.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),l.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),aE=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),oE=()=>{const{isDark:e,toggleTheme:t}=Rx();return l.jsx(ZD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:l.jsxs(JD,{children:[l.jsx(qD,{to:"/","aria-label":"Go to homepage",children:l.jsx(eE,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),l.jsx(tE,{}),l.jsx(nE,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:l.jsx(Pe,{mode:"wait",children:l.jsx(rE,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?l.jsx(aE,{}):l.jsx(iE,{})},e?"moon":"sun")})})]})})},sE=b(I.div)`
  position: relative;
`,lE=b(Lx)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Nw=b(I.div)`
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
`,uE=b(I.div)`
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

  ${Nw}:hover &::before {
    opacity: 0.3;
  }
`,cE=b.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,dE={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},fE={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},pE=({title:e,icon:t,to:n})=>l.jsx(sE,{variants:dE,whileHover:"hover",whileTap:"tap",children:l.jsx(lE,{to:n,children:l.jsxs(Nw,{variants:fE,children:[l.jsx(uE,{children:t}),l.jsx(cE,{children:e})]})})}),hE=b.div`
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
`,mE=b(I.div)`
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
    grid-template-columns: repeat(2, 1fr);
    max-width: 520px;
  }

  @media (min-width: 1280px) {
    gap: var(--space-xl);
    max-width: 560px;
  }
`,gE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},vE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),l.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),l.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),l.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),l.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),l.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),l.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),l.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),l.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),l.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),yE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),l.jsx("path",{d:"M1 10h22"}),l.jsx("path",{d:"M17 14h.01"})]}),xE=[{id:"tax-manager",title:"Tax Manager",icon:l.jsx(vE,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:l.jsx(yE,{}),to:"/expense-manager"}],wE=()=>l.jsx(hE,{children:l.jsx(mE,{variants:gE,initial:"hidden",animate:"visible",children:xE.map(e=>l.jsx(pE,{title:e.title,icon:e.icon,to:e.to},e.id))})}),$w=b.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;b.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Ds=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],iv=75e3,ei=4,SE=12e5,bE=6e4,av=5e6,ov=10,kE=12,CE=1800;function wr(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const a=r.slice(-3),o=r.slice(0,-3);if(o.length>0){const s=[];let u=o;for(;u.length>0;)u.length>=2?(s.unshift(u.slice(-2)),u=u.slice(0,-2)):(s.unshift(u),u="");i=s.join(",")+","+a}else i=a;return(t?"-":"")+i}function W(e){return"₹"+wr(e)}function J(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,a]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+wr(parseInt(i))+"."+a}function sv(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:wr(e)}function jE(e){for(let t=Ds.length-1;t>=0;t--)if(e>Ds[t].from)return Ds[t].rate;return 0}function TE(e){const t=[];let n=e,r=0;for(const i of Ds){const a=i.from,s=(i.to??1/0)-a;if(n<=0){t.push({from:a,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const u=Math.min(n,s),c=u*i.rate/100;t.push({from:a,to:i.to,rate:i.rate,taxableInSlab:u>0?u:0,taxInSlab:c}),r+=c,n-=u}return{slabs:t,totalTax:r}}function PE(e,t){if(t>av){const r=e*(1+ov/100)*(1+ei/100),i=t-av,o=(e+i)*(1+ei/100),s=o<r,u=Math.min(r,o),c=u/(1+ei/100),d=c-e,f=u-c;return{surchargeApplicable:!0,surchargeRate:ov,surchargeAmount:d,marginalReliefApplied:s,taxAfterSurcharge:c,cess:f,totalTax:u}}else{const n=e*(ei/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function lv(e,t,n,r,i,a,o){const s=e*t/100,u=e-s;let c=0;i==="percentage"?c=e*a/100:i==="amount"&&(c=a);const d=e+c;let f=0,p=0;n&&(r==="percentage"?(f=s*kE/100,p=f):(f=CE*12,p=f));const m=e-p,x=o.map(me=>({name:me.name,amount:me.amount*12})),y=x.reduce((me,Ee)=>me+Ee.amount,0),S=Math.max(0,m-iv),{slabs:g,totalTax:h}=TE(S);let v=0,k=h;S<=SE&&(v=Math.min(h,bE),k=Math.max(0,h-v));const{surchargeApplicable:C,surchargeRate:j,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:A,cess:D,totalTax:M}=PE(k,S),Q=f+p,re=M,he=f+M+y,N=m-f-M-y,V=N/12,B=m>0?M/m*100:0,_=jE(S);let L=0,O=c;if(c>0&&_>0){let me=c*_/100;C&&(me=me*(1+j/100)),L=me*(1+ei/100),O=c-L}const z=N+O,H=z/12;return{baseSalary:e,basicSalary:s,hra:u,bonus:c,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:m,standardDeduction:iv,additionalDeductions:x,totalAdditionalDeductions:y,taxableIncome:S,slabs:g,taxBeforeSurcharge:h,surchargeApplicable:C,surchargeRate:j,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:A,cessRate:ei,cess:D,totalTax:M,rebate87A:v,totalPFDeduction:Q,totalTaxDeduction:re,totalDeductions:he,netSalaryYearly:N,netSalaryMonthly:V,effectiveTaxRate:B,bonusTaxRate:_,bonusTaxAmount:L,bonusAfterTax:O,totalIncomeYearly:z,totalIncomeMonthly:H}}function DE(e){const t=lv(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=lv(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const Bp="taxCalculatorInput";function EE(e){localStorage.setItem(Bp,JSON.stringify(e))}function AE(){localStorage.removeItem(Bp)}function Vw(){const e=localStorage.getItem(Bp);if(e)try{return JSON.parse(e)}catch{return null}return null}const _E={financialYear:"FY 2025-26"},IE=b(I.div)`
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
`,Xi=b(I.div)`
  padding: var(--space-xs) 0;
`,Zi=b.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`,LE=b.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,Rr=b.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,uv=b.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
`,rr=b.input`
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
`,tc=b.div`
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
`,nc=b.div`
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
`,cv=b.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`,Ji=b(I.button)`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: var(--radius-md);
  cursor: pointer;
  white-space: nowrap;
`,OE=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,rc=b(I.div)`
  display: flex;
  gap: var(--space-sm);
  align-items: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`,ic=b(I.button)`
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
`,RE=b(I.button)`
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
`,ME=b.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,NE=b(I.button)`
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
`,$E=b(I.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,Vo=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,VE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),ac=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Qe={type:"spring",stiffness:300,damping:30,mass:.8},BE={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Qe}},FE={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Qe},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Qe},opacity:{duration:.1}}}},zE={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Qe},exit:{opacity:0,x:-20,transition:{duration:.15}}};function oc(e){const t=e.replace(/[^\d]/g,"");return t?wr(parseInt(t)):""}function Bo(e){return parseInt(e.replace(/,/g,""))||0}const WE=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=w.useState(""),[a,o]=w.useState("50"),[s,u]=w.useState("percentage"),[c,d]=w.useState("none"),[f,p]=w.useState(""),[m,x]=w.useState([]),[y,S]=w.useState(""),[g,h]=w.useState(!1),v=w.useRef(!1);w.useEffect(()=>{const N=Vw();N&&(i(wr(N.baseSalary)),o(N.basicPercentage.toString()),u(N.pfType),d(N.bonusType),p(N.bonusValue>0?N.bonusType==="amount"?wr(N.bonusValue):N.bonusValue.toString():""),x(N.additionalDeductions.map(V=>({name:V.name,amount:wr(V.amount)}))),S(N.hikePercentage>0?N.hikePercentage.toString():"")),h(!0)},[]),w.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{D()},100))},[g,n,r]);const k=N=>{i(oc(N))},C=N=>{p(oc(N))},j=(N,V)=>{const B=[...m];B[N].amount=oc(V),x(B)},T=()=>{x([...m,{name:"",amount:""}])},P=N=>{x(m.filter((V,B)=>B!==N))},A=(N,V)=>{const B=[...m];B[N].name=V,x(B)},D=()=>{const N={baseSalary:Bo(r),basicPercentage:parseFloat(a)||50,calculatePF:!0,pfType:s,bonusType:c,bonusValue:c==="amount"?Bo(f):parseFloat(f)||0,additionalDeductions:m.filter(V=>V.name&&V.amount).map(V=>({name:V.name,amount:Bo(V.amount)})),hikePercentage:parseFloat(y)||0};EE(N),e(N)},M=()=>{i(""),o("50"),u("percentage"),d("none"),p(""),x([]),S(""),AE(),t==null||t()},re=Bo(r)>0,he=r||m.length>0||c!=="none"||y;return l.jsxs(IE,{variants:BE,initial:"hidden",animate:"visible",children:[l.jsxs(Xi,{children:[l.jsx(Zi,{children:"Salary Details"}),l.jsxs(LE,{children:[l.jsxs(Rr,{$flex:2,children:[l.jsx(uv,{children:"Yearly Base Salary / CTC *"}),l.jsx(tc,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:N=>k(N.target.value)})})]}),l.jsxs(Rr,{children:[l.jsx(uv,{children:"Basic %"}),l.jsx(nc,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"40",value:a,onChange:N=>o(N.target.value),min:"0",max:"100"})})]})]})]}),l.jsx(Vo,{}),l.jsxs(Xi,{children:[l.jsx(Zi,{children:"Provident Fund (PF)"}),l.jsxs(cv,{children:[l.jsx(Ji,{$active:s==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Qe,children:"12% of Basic"}),l.jsx(Ji,{$active:s==="flat",onClick:()=>u("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Qe,children:"Flat ₹1,800/mo"})]})]}),l.jsx(Vo,{}),l.jsxs(Xi,{children:[l.jsx(Zi,{children:"Bonus (Optional)"}),l.jsxs(cv,{children:[l.jsx(Ji,{$active:c==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Qe,children:"None"}),l.jsx(Ji,{$active:c==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Qe,children:"Percentage"}),l.jsx(Ji,{$active:c==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Qe,children:"Amount"})]}),l.jsx(Pe,{initial:!1,children:c!=="none"&&l.jsx(I.div,{initial:"hidden",animate:"visible",exit:"exit",variants:FE,style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:l.jsxs(rc,{children:[l.jsx(Rr,{children:c==="percentage"?l.jsx(nc,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:N=>p(N.target.value)})}):l.jsx(tc,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:N=>C(N.target.value)})})}),l.jsx(Pe,{children:f&&l.jsx(ic,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Qe,children:l.jsx(ac,{})})})]})},"bonus-input")})]}),l.jsx(Vo,{}),l.jsxs(Xi,{children:[l.jsx(Zi,{children:"Additional Monthly Deductions"}),l.jsxs(OE,{children:[l.jsx(Pe,{mode:"popLayout",children:m.map((N,V)=>l.jsxs(rc,{variants:zE,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[l.jsx(Rr,{children:l.jsx(rr,{type:"text",placeholder:"Name (e.g., Cab)",value:N.name,onChange:B=>A(V,B.target.value)})}),l.jsx(Rr,{children:l.jsx(tc,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:N.amount,onChange:B=>j(V,B.target.value)})})}),l.jsx(ic,{onClick:()=>P(V),whileHover:{scale:1.1},whileTap:{scale:.9},transition:Qe,children:l.jsx(ac,{})})]},V))}),l.jsxs(RE,{onClick:T,whileHover:{scale:1.02},whileTap:{scale:.98},transition:Qe,children:[l.jsx(VE,{}),"Add Deduction"]})]})]}),l.jsx(Vo,{}),l.jsxs(Xi,{children:[l.jsx(Zi,{children:"Hike / Appraisal (Optional)"}),l.jsxs(rc,{style:{marginBottom:0},children:[l.jsx(Rr,{children:l.jsx(nc,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:y,onChange:N=>S(N.target.value),min:"0",max:"200"})})}),l.jsx(Pe,{children:y&&l.jsx(ic,{onClick:()=>S(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Qe,children:l.jsx(ac,{})})})]})]}),l.jsxs(ME,{children:[l.jsx(NE,{onClick:D,disabled:!re,whileHover:re?{scale:1.02}:{},whileTap:re?{scale:.98}:{},transition:Qe,children:"Calculate Tax"}),l.jsx(Pe,{children:he&&l.jsx($E,{onClick:M,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Qe,children:"Reset"})})]})]})},UE=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,dv=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Fo=b.div`
  padding: var(--space-md);
  background: ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.1)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.2)":"var(--border)"};
  border-radius: var(--radius-md);
`,zo=b.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
`,Wo=b.div`
  font-size: ${({$large:e})=>e?"18px":"15px"};
  font-weight: 600;
  color: var(--text-primary);
`,Uo=b.span`
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
`,Ke=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"var(--green)":"var(--text-tertiary)"};
  margin-top: 2px;
  display: block;
`,Ho=b.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-xs);
`,sc=b.div`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,fv=b.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--green);
  margin-top: var(--space-xs);
`,mr=b(I.div)`
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
`,pv=b(mr)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,HE=b(mr)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,YE=b(mr)`
  background: linear-gradient(135deg, rgba(var(--green-rgb), 0.12), rgba(var(--accent-rgb), 0.08));
  border-color: rgba(var(--green-rgb), 0.25);
`,ir=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
`,vn=b.h3`
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
`,Fp=b(I.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,hv=b(Fp)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,GE=b(Fp)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,KE=b(Fp)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,mv=b.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,QE=b.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,gv=b.button`
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
`,vv=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-sm);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,yn=b.div`
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 0;
  overflow: hidden;
`,xn=b.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wn=b.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,XE=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,yv=b(I.div)`
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
`,Sn=b.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"var(--accent)":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ZE=b(I.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,Nd=b.span`
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
`,JE=b(Nd)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,lt=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-md) 0;
  opacity: 0.6;
`,ie=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-xs) 0;
  gap: var(--space-sm);

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`,ae=b.span`
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
`,oe=b.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"var(--accent)":t?"#e05555":"var(--text-primary)"};
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`,xv=b.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,wv=b(I.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,Sv=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,bv=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,kv=b.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,Cv=b.span`
  font-size: 11px;
  color: var(--text-secondary);
`,jv=b.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,Tv=b(I.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,Pv=b.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,qE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),e4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),l.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),l.jsx("path",{d:"M12 17.5v-11"})]}),lc=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"})]}),t4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),l.jsx("path",{d:"M12 8v13"}),l.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),l.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Dv=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),l.jsx("polyline",{points:"16 7 22 7 22 13"})]}),n4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},bn={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},r4=({breakdown:e})=>{var f;const[t,n]=w.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",a=Math.max(...e.slabs.map(p=>p.taxInSlab),1),o=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&o.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const s=o.reduce((p,m)=>p+m.value,0),u=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],c=u.reduce((p,m)=>p+m.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${W(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),l.jsxs(UE,{variants:n4,initial:"hidden",animate:"visible",children:[e.postHike&&l.jsxs(pv,{variants:bn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(Dv,{}),"Base Salary (CTC)"]})}),l.jsx(hv,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:W(e.baseSalary)}),l.jsx(lt,{}),l.jsxs(Ho,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(sc,{children:W(e.postHike.baseSalary)}),l.jsxs(fv,{children:["+",W(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),l.jsxs(pv,{variants:bn,children:[l.jsxs(ir,{children:[l.jsxs(vn,{children:[l.jsx(qE,{}),"In-Hand Salary (Base)"]}),l.jsxs(QE,{children:[l.jsx(gv,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),l.jsx(gv,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),l.jsx(hv,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:J(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(lt,{}),l.jsxs(Ho,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(sc,{children:J(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),l.jsxs(fv,{children:["+",W(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&l.jsxs(HE,{variants:bn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(t4,{}),"Bonus Summary",e.postHike&&l.jsxs(Uo,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsx(GE,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:W(e.bonus)}),l.jsx(mv,{children:"Gross Bonus (before tax)"}),l.jsx(lt,{}),l.jsx(Ho,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),l.jsx(sc,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:J(e.bonusAfterTax)}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(lt,{}),l.jsxs(Ho,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsxs(dv,{style:{marginTop:0},children:[l.jsxs(Fo,{children:[l.jsx(zo,{children:"Gross Bonus"}),l.jsx(Wo,{$large:!0,children:W(e.postHike.bonus)}),l.jsxs(Ke,{$positive:!0,children:["+",W(e.postHike.bonus-e.bonus)]})]}),l.jsxs(Fo,{$highlight:!0,children:[l.jsx(zo,{children:"In-Hand Bonus"}),l.jsx(Wo,{$large:!0,children:J(e.postHike.bonusAfterTax)}),l.jsxs(Ke,{$positive:!0,children:["+",W(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),l.jsx(lt,{}),l.jsxs(vv,{children:[l.jsxs(yn,{children:[l.jsx(xn,{children:"Tax Rate"}),l.jsxs(wn,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Tax Deducted"}),l.jsxs(wn,{style:{color:"#e05555"},children:["-",J(e.bonusTaxAmount)]})]})]}),l.jsx(Tv,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:l.jsxs(Pv,{children:["Bonus is taxed at your ",l.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&l.jsxs(YE,{variants:bn,children:[l.jsxs(ir,{children:[l.jsxs(vn,{children:[l.jsx(Dv,{}),"Total Combined Income",e.postHike&&l.jsxs(Uo,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsx(Nd,{children:"Yearly"})]}),e.postHike?l.jsxs(dv,{children:[l.jsxs(Fo,{children:[l.jsx(zo,{children:"Current"}),l.jsx(Wo,{$large:!0,children:J(e.totalIncomeYearly)})]}),l.jsxs(Fo,{$highlight:!0,children:[l.jsxs(zo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Wo,{$large:!0,children:J(e.postHike.totalIncomeYearly)}),l.jsxs(Ke,{$positive:!0,children:["+",W(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(KE,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:J(e.totalIncomeYearly)}),l.jsx(mv,{children:"Base salary + Bonus (after tax)"})]}),l.jsx(lt,{}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Base In-Hand (Yearly)"}),l.jsx(oe,{children:J(e.netSalaryYearly)})]}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Bonus In-Hand (Yearly)"}),l.jsx(oe,{children:J(e.bonusAfterTax)})]}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Total Combined Income"}),l.jsx(oe,{$highlight:!0,children:J(e.totalIncomeYearly)})]})]}),l.jsxs(mr,{variants:bn,children:[l.jsxs(vn,{style:{marginBottom:"var(--space-sm)"},children:[l.jsx(lc,{}),"Summary",e.postHike&&l.jsxs(Uo,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsxs(vv,{children:[l.jsxs(yn,{children:[l.jsx(xn,{children:"Gross Salary"}),l.jsx(wn,{children:W(e.grossSalary*r)}),e.postHike&&l.jsxs(Ke,{$positive:!0,children:["→ ",W(e.postHike.grossSalary*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Total Tax"}),l.jsx(wn,{children:J(e.totalTax*r)}),e.postHike&&l.jsxs(Ke,{children:["→ ",J(e.postHike.totalTax*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Employee PF"}),l.jsx(wn,{children:W(e.employeePF*r)}),e.postHike&&l.jsxs(Ke,{$positive:!0,children:["→ ",W(e.postHike.employeePF*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Employer PF"}),l.jsx(wn,{children:W(e.employerPF*r)}),e.postHike&&l.jsxs(Ke,{$positive:!0,children:["→ ",W(e.postHike.employerPF*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Total PF"}),l.jsx(wn,{children:W((e.employeePF+e.employerPF)*r)}),e.postHike&&l.jsxs(Ke,{$positive:!0,children:["→ ",W((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Eff. Tax Rate"}),l.jsxs(wn,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&l.jsxs(Ke,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),l.jsx(lt,{}),l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),l.jsx(xv,{children:o.map((p,m)=>l.jsx(wv,{$color:p.color,initial:{width:0},animate:{width:`${p.value/s*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),l.jsx(Sv,{children:o.map((p,m)=>l.jsxs(bv,{children:[l.jsx(kv,{$color:p.color}),l.jsx(Cv,{children:p.label}),l.jsx(jv,{children:W(p.value*r)})]},m))}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(xv,{children:u.map((p,m)=>l.jsx(wv,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.5+m*.1,duration:.5}},m))}),l.jsx(Sv,{children:u.map((p,m)=>l.jsxs(bv,{children:[l.jsx(kv,{$color:p.color}),l.jsx(Cv,{children:p.label}),l.jsx(jv,{children:W(p.value*r)})]},m))})]}),d.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(lt,{}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,m)=>l.jsx(Tv,{children:l.jsx(Pv,{dangerouslySetInnerHTML:{__html:p}})},m))})]})]}),l.jsxs(mr,{variants:bn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(e4,{}),"Tax Slabs",l.jsx(Nd,{children:_E.financialYear}),e.postHike&&l.jsxs(Uo,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsxs(XE,{children:[l.jsxs(yv,{$isHeader:!0,children:[l.jsx(Sn,{children:"Slab"}),l.jsx(Sn,{$align:"center",children:"Rate"}),l.jsx(Sn,{$align:"right",children:"Amount"}),l.jsx(Sn,{$align:"right",children:"Tax"})]}),l.jsx(Pe,{children:e.slabs.map((p,m)=>{var x,y;return l.jsxs(yv,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[l.jsxs(Sn,{children:[sv(p.from)," - ",sv(p.to),p.taxableInSlab>0&&l.jsx(ZE,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/a*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),l.jsxs(Sn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),l.jsxs(Sn,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?W(p.taxableInSlab):"-",e.postHike&&((x=e.postHike.slabs[m])==null?void 0:x.taxableInSlab)>0&&l.jsxs(Ke,{$positive:!0,children:["→ ",W(e.postHike.slabs[m].taxableInSlab)]})]}),l.jsxs(Sn,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?W(p.taxInSlab):"-",e.postHike&&((y=e.postHike.slabs[m])==null?void 0:y.taxInSlab)>0&&l.jsxs(Ke,{children:["→ ",W(e.postHike.slabs[m].taxInSlab)]})]})]},m)})})]}),l.jsx(lt,{}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Tax Before Surcharge"}),l.jsxs(oe,{children:[J(e.taxBeforeSurcharge),e.postHike&&l.jsxs(Ke,{children:["→ ",J(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&l.jsxs(ie,{children:[l.jsx(ae,{children:"Section 87A Rebate"}),l.jsxs(oe,{$negative:!0,children:["-",W(e.rebate87A)]})]}),e.surchargeApplicable&&l.jsxs(ie,{children:[l.jsxs(ae,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&l.jsx(JE,{children:"Marginal Relief"})]}),l.jsxs(oe,{children:[J(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&l.jsxs(Ke,{children:["→ ",J(e.postHike.surchargeAmount)]})]})]}),l.jsxs(ie,{children:[l.jsxs(ae,{children:["Cess (",e.cessRate,"%)"]}),l.jsxs(oe,{children:[J(e.cess),e.postHike&&l.jsxs(Ke,{children:["→ ",J(e.postHike.cess)]})]})]}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Total Tax"}),l.jsxs(oe,{$highlight:!0,children:[J(e.totalTax),e.postHike&&l.jsxs(Ke,{children:["→ ",J(e.postHike.totalTax)]})]})]})]}),l.jsxs(mr,{variants:bn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(lc,{}),"Yearly Breakdown"]})}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Base Salary (CTC)"}),l.jsx(oe,{children:W(e.baseSalary)})]}),e.employerPF>0&&l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Employer PF"}),l.jsxs(oe,{$negative:!0,children:["-",W(e.employerPF)]})]}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Gross Salary"}),l.jsx(oe,{children:W(e.grossSalary)})]}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Standard Deduction"}),l.jsxs(oe,{$negative:!0,children:["-",W(e.standardDeduction)]})]}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Taxable Income"}),l.jsx(oe,{children:W(e.taxableIncome)})]}),l.jsx(lt,{}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Income Tax"}),l.jsxs(oe,{$negative:!0,children:["-",J(e.totalTax)]})]}),e.employeePF>0&&l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Employee PF"}),l.jsxs(oe,{$negative:!0,children:["-",W(e.employeePF)]})]}),e.additionalDeductions.map((p,m)=>l.jsxs(ie,{children:[l.jsxs(ae,{children:["Less: ",p.name]}),l.jsxs(oe,{$negative:!0,children:["-",W(p.amount)]})]},m)),l.jsx(lt,{}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Net In-Hand (Yearly)"}),l.jsx(oe,{$highlight:!0,children:J(e.netSalaryYearly)})]})]}),l.jsxs(mr,{variants:bn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(lc,{}),"Monthly Breakdown"]})}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Base Salary (CTC)"}),l.jsx(oe,{children:W(e.baseSalary/12)})]}),e.employerPF>0&&l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Employer PF"}),l.jsxs(oe,{$negative:!0,children:["-",W(e.employerPF/12)]})]}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Gross Salary"}),l.jsx(oe,{children:W(e.grossSalary/12)})]}),l.jsx(lt,{}),l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Income Tax"}),l.jsxs(oe,{$negative:!0,children:["-",J(e.totalTax/12)]})]}),e.employeePF>0&&l.jsxs(ie,{children:[l.jsx(ae,{children:"Less: Employee PF"}),l.jsxs(oe,{$negative:!0,children:["-",W(e.employeePF/12)]})]}),e.additionalDeductions.map((p,m)=>l.jsxs(ie,{children:[l.jsxs(ae,{children:["Less: ",p.name]}),l.jsxs(oe,{$negative:!0,children:["-",W(p.amount/12)]})]},m)),l.jsx(lt,{}),l.jsxs(ie,{children:[l.jsx(ae,{$bold:!0,children:"Net In-Hand (Monthly)"}),l.jsx(oe,{$highlight:!0,children:J(e.netSalaryMonthly)})]})]})]})},i4=b(I.div)`
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
`,a4=b.div`
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
`,o4=b(I.div)`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,s4=b(I.div)`
  min-width: 0;
`,l4={type:"spring",stiffness:300,damping:30,mass:.8},u4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Ev={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:l4}},c4=()=>{const[e,t]=w.useState(null),[n,r]=w.useState(!1);w.useEffect(()=>{const o=Vw();o&&o.baseSalary>0&&r(!0)},[]);const i=w.useCallback(o=>{const s=DE(o);t(s),window.innerWidth<1024&&setTimeout(()=>{var u;(u=document.getElementById("results"))==null||u.scrollIntoView({behavior:"smooth"})},100)},[]),a=w.useCallback(()=>{t(null)},[]);return l.jsx(i4,{variants:u4,initial:"hidden",animate:"visible",children:l.jsx($w,{$maxWidth:"wide",children:l.jsxs(a4,{children:[l.jsx(o4,{variants:Ev,children:l.jsx(WE,{onCalculate:i,onReset:a,autoCalculate:n})}),l.jsx(s4,{id:"results",variants:Ev,children:l.jsx(Pe,{mode:"wait",children:e&&l.jsx(r4,{breakdown:e},"results")})})]})})})},Pi=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],Bw="expense-manager-transactions",Fw="expense-manager-initial-balances",zw="expense-manager-initial-cc-bills";function uc(e){localStorage.setItem(Bw,JSON.stringify(e))}function d4(){const e=localStorage.getItem(Bw);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function Av(e){localStorage.setItem(Fw,JSON.stringify(e))}function f4(){const e=localStorage.getItem(Fw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function _v(e){localStorage.setItem(zw,JSON.stringify(e))}function p4(){const e=localStorage.getItem(zw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function Ar(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Ww(e){return new Date(e+"T00:00:00")}function h4(e){return Ww(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function Iv(e){return e===Ar(new Date)}function m4(e){return e<Ar(new Date)}function g4(e,t){if(!e.statementDate)return"";const n=Ww(t),r=n.getFullYear(),i=n.getMonth(),a=n.getDate();let o=r,s=i;a<e.statementDate&&(s-=1,s<0&&(s=11,o-=1));const u=new Date(o,s,e.statementDate);return Ar(u)}function v4(e,t,n,r,i={}){const a=t.filter(s=>s.date<=n&&(s.accountId===e.id||s.linkedAccountId===e.id));let o=0;if(e.type==="bank"){o=r[e.id]||0;for(const s of a)s.accountId===e.id&&(s.type==="bank_credit"?o+=s.amount:s.type==="bank_debit"&&(o-=s.amount)),s.linkedAccountId===e.id&&s.type==="cc_payment"&&(o-=s.amount);return{account:e,balance:o}}else{o=-(i[e.id]||0);for(const f of a)f.accountId===e.id&&(f.type==="credit_card_spend"?o-=f.amount:f.type==="cc_payment"&&(o+=f.amount));const u=g4(e,n),d=a.filter(f=>f.date>u&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:o,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,o))}}}function y4(e,t,n,r={}){return Pi.map(i=>v4(i,e,t,n,r))}function x4(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function w4(e,t,n,r,i,a){return{id:x4(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:a,createdAt:new Date().toISOString()}}function ti(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function S4(e){return Pi.find(t=>t.id===e)}function Uw(){return Pi.filter(e=>e.type==="bank")}function Hw(){return Pi.filter(e=>e.type==="credit_card")}function b4(e,t,n){const r={version:"1.0",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n};return JSON.stringify(r,null,2)}function k4(e,t,n){const r=b4(e,t,n),i=new Blob([r],{type:"application/json"}),a=URL.createObjectURL(i),o=document.createElement("a"),s=new Date().toISOString().split("T")[0];o.href=a,o.download=`expense-backup-${s}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)}function C4(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null)return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function j4(e){try{const t=JSON.parse(e);return C4(t)?t:null}catch{return null}}function Yw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Yw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Hl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Yw(e))&&(r&&(r+=" "),r+=t);return r}const T4=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),a=Object.getOwnPropertyDescriptor(t,n);!P4(i,a)&&r||Object.defineProperty(e,n,a)},P4=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},D4=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},E4=(e,t)=>`/* Wrapped ${e}*/
${t}`,A4=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),_4=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),I4=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=E4.bind(null,r,t.toString());Object.defineProperty(i,"name",_4);const{writable:a,enumerable:o,configurable:s}=A4;Object.defineProperty(e,"toString",{value:i,writable:a,enumerable:o,configurable:s})};function L4(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))T4(e,t,i,n);return D4(e,t),I4(e,t,r),e}const Yo=2147483647,O4=new WeakMap,cc=new WeakMap,R4=new WeakMap;function M4(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function Gw(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>Yo)throw new TypeError(`The \`maxAge\` option cannot exceed ${Yo}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...a){var d;const o=t?t(a):a[0],s=M4(n,o);if(s)return s.data;const u=e.apply(this,a),c=typeof r=="function"?r(...a):r;if(c!==void 0&&c!==Number.POSITIVE_INFINITY){if(!Number.isFinite(c))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(c<=0)return u;if(c>Yo)throw new TypeError(`The \`maxAge\` function result cannot exceed ${Yo}.`)}if(n.set(o,{data:u,maxAge:c===void 0||c===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+c}),c!==void 0&&c!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var m;n.delete(o),(m=cc.get(i))==null||m.delete(f)},c);(d=f.unref)==null||d.call(f);const p=cc.get(i)??new Set;p.add(f),cc.set(i,p)}return u};return L4(i,e,{ignoreNonConfigurable:!0}),O4.set(i,n),R4.set(i,t??(a=>a[0])),i}function N4(e){return typeof e=="string"}function $4(e,t,n){return n.indexOf(e)===t}function V4(e){return e.toLowerCase()===e}function Lv(e){return e.indexOf(",")===-1?e:e.split(",")}function $d(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return $d(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return $d(n)}if(e.indexOf("-")===-1||!V4(e))return e;var i=e.split("-"),a=i[0],o=i[1],s=o===void 0?"":o;return"".concat(a,"-").concat(s.toUpperCase())}function B4(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,a=i===void 0?"en-US":i,o=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],u=[],c=0,d=s;c<d.length;c++){var f=d[c];u=u.concat(Lv(f))}var p=navigator.language,m=p&&Lv(p);o=o.concat(u,m)}return r&&o.push(a),o.filter(N4).map($d).filter($4)}var F4=Gw(B4,{cacheKey:JSON.stringify});function z4(e){return F4(e)[0]||null}var Kw=Gw(z4,{cacheKey:JSON.stringify});function hn(e,t,n){return function(i,a=n){const o=e(i)+a;return t(o)}}function so(e){return function(n){return new Date(e(n).getTime()-1)}}function lo(e,t){return function(r){return[e(r),t(r)]}}function le(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function qn(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function Yl(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function $i(e){const t=le(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const W4=hn(le,$i,-100),Qw=hn(le,$i,100),zp=so(Qw),U4=hn(le,zp,-100),Xw=lo($i,zp);function er(e){const t=le(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const Zw=hn(le,er,-10),Wp=hn(le,er,10),Gl=so(Wp),Jw=hn(le,Gl,-10),qw=lo(er,Gl);function Vi(e){const t=le(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const eS=hn(le,Vi,-1),Up=hn(le,Vi,1),Kl=so(Up),tS=hn(le,Kl,-1),H4=lo(Vi,Kl);function Hp(e,t){return function(r,i=t){const a=le(r),o=qn(r)+i,s=new Date;return s.setFullYear(a,o,1),s.setHours(0,0,0,0),e(s)}}function _r(e){const t=le(e),n=qn(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const nS=Hp(_r,-1),Yp=Hp(_r,1),uo=so(Yp),rS=Hp(uo,-1),Y4=lo(_r,uo);function G4(e,t){return function(r,i=t){const a=le(r),o=qn(r),s=Yl(r)+i,u=new Date;return u.setFullYear(a,o,s),u.setHours(0,0,0,0),e(u)}}function co(e){const t=le(e),n=qn(e),r=Yl(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const K4=G4(co,1),Gp=so(K4),Q4=lo(co,Gp);function iS(e){return Yl(uo(e))}var Me={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},X4={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Kp=[0,1,2,3,4,5,6],dc=new Map;function Z4(e){return function(n,r){var i=n||Kw();dc.has(i)||dc.set(i,new Map);var a=dc.get(i);return a.has(e)||a.set(e,new Intl.DateTimeFormat(i||void 0,e).format),a.get(e)(r)}}function J4(e){var t=new Date(e);return new Date(t.setHours(12))}function Ir(e){return function(t,n){return Z4(e)(t,J4(n))}}var q4={day:"numeric"},eA={day:"numeric",month:"long",year:"numeric"},tA={month:"long"},nA={month:"long",year:"numeric"},rA={weekday:"short"},iA={weekday:"long"},aA={year:"numeric"},oA=Ir(q4),sA=Ir(eA),lA=Ir(tA),aS=Ir(nA),uA=Ir(rA),cA=Ir(iA),Ql=Ir(aA),dA=Kp[0],fA=Kp[5],Ov=Kp[6];function Qa(e,t){t===void 0&&(t=Me.ISO_8601);var n=e.getDay();switch(t){case Me.ISO_8601:return(n+6)%7;case Me.ISLAMIC:return(n+1)%7;case Me.HEBREW:case Me.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function pA(e){var t=$i(e);return le(t)}function hA(e){var t=er(e);return le(t)}function Vd(e,t){t===void 0&&(t=Me.ISO_8601);var n=le(e),r=qn(e),i=e.getDate()-Qa(e,t);return new Date(n,r,i)}function mA(e,t){t===void 0&&(t=Me.ISO_8601);var n=t===Me.GREGORY?Me.GREGORY:Me.ISO_8601,r=Vd(e,t),i=le(e)+1,a,o;do a=new Date(i,0,n===Me.ISO_8601?4:1),o=Vd(a,t),i-=1;while(e<o);return Math.round((r.getTime()-o.getTime())/(864e5*7))+1}function Sr(e,t){switch(e){case"century":return $i(t);case"decade":return er(t);case"year":return Vi(t);case"month":return _r(t);case"day":return co(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function gA(e,t){switch(e){case"century":return W4(t);case"decade":return Zw(t);case"year":return eS(t);case"month":return nS(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function oS(e,t){switch(e){case"century":return Qw(t);case"decade":return Wp(t);case"year":return Up(t);case"month":return Yp(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function vA(e,t){switch(e){case"decade":return Zw(t,-100);case"year":return eS(t,-10);case"month":return nS(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function yA(e,t){switch(e){case"decade":return Wp(t,100);case"year":return Up(t,10);case"month":return Yp(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function sS(e,t){switch(e){case"century":return zp(t);case"decade":return Gl(t);case"year":return Kl(t);case"month":return uo(t);case"day":return Gp(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function xA(e,t){switch(e){case"century":return U4(t);case"decade":return Jw(t);case"year":return tS(t);case"month":return rS(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function wA(e,t){switch(e){case"decade":return Jw(t,-100);case"year":return tS(t,-10);case"month":return rS(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rv(e,t){switch(e){case"century":return Xw(t);case"decade":return qw(t);case"year":return H4(t);case"month":return Y4(t);case"day":return Q4(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function SA(e,t,n){var r=[t,n].sort(function(i,a){return i.getTime()-a.getTime()});return[Sr(e,r[0]),sS(e,r[1])]}function lS(e,t,n){return n.map(function(r){return(t||Ql)(e,r)}).join(" – ")}function bA(e,t,n){return lS(e,t,Xw(n))}function uS(e,t,n){return lS(e,t,qw(n))}function kA(e){return e.getDay()===new Date().getDay()}function cS(e,t){t===void 0&&(t=Me.ISO_8601);var n=e.getDay();switch(t){case Me.ISLAMIC:case Me.HEBREW:return n===fA||n===Ov;case Me.ISO_8601:case Me.GREGORY:return n===Ov||n===dA;default:throw new Error("Unsupported calendar type.")}}var Wt="react-calendar__navigation";function CA(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?aS:r,a=e.formatYear,o=a===void 0?Ql:a,s=e.locale,u=e.maxDate,c=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,m=e.navigationLabel,x=e.next2AriaLabel,y=x===void 0?"":x,S=e.next2Label,g=S===void 0?"»":S,h=e.nextAriaLabel,v=h===void 0?"":h,k=e.nextLabel,C=k===void 0?"›":k,j=e.prev2AriaLabel,T=j===void 0?"":j,P=e.prev2Label,A=P===void 0?"«":P,D=e.prevAriaLabel,M=D===void 0?"":D,Q=e.prevLabel,re=Q===void 0?"‹":Q,he=e.setActiveStartDate,N=e.showDoubleView,V=e.view,B=e.views,_=B.indexOf(V)>0,L=V!=="century",O=gA(V,t),z=L?vA(V,t):void 0,H=oS(V,t),me=L?yA(V,t):void 0,Ee=function(){if(O.getFullYear()<0)return!0;var je=xA(V,t);return c&&c>=je}(),yt=L&&function(){if(z.getFullYear()<0)return!0;var je=wA(V,t);return c&&c>=je}(),Ae=u&&u<H,Ge=L&&u&&u<me;function Et(){he(O,"prev")}function Ve(){he(z,"prev2")}function tr(){he(H,"next")}function mn(){he(me,"next2")}function st(je){var Bi=function(){switch(V){case"century":return bA(s,o,je);case"decade":return uS(s,o,je);case"year":return o(s,je);case"month":return i(s,je);default:throw new Error("Invalid view: ".concat(V,"."))}}();return m?m({date:je,label:Bi,locale:s||Kw()||void 0,view:V}):Bi}function Jl(){var je="".concat(Wt,"__label");return l.jsxs("button",{"aria-label":f,"aria-live":p,className:je,disabled:!_,onClick:n,style:{flexGrow:1},type:"button",children:[l.jsx("span",{className:"".concat(je,"__labelText ").concat(je,"__labelText--from"),children:st(t)}),N?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"".concat(je,"__divider"),children:" – "}),l.jsx("span",{className:"".concat(je,"__labelText ").concat(je,"__labelText--to"),children:st(H)})]}):null]})}return l.jsxs("div",{className:Wt,children:[A!==null&&L?l.jsx("button",{"aria-label":T,className:"".concat(Wt,"__arrow ").concat(Wt,"__prev2-button"),disabled:yt,onClick:Ve,type:"button",children:A}):null,re!==null&&l.jsx("button",{"aria-label":M,className:"".concat(Wt,"__arrow ").concat(Wt,"__prev-button"),disabled:Ee,onClick:Et,type:"button",children:re}),Jl(),C!==null&&l.jsx("button",{"aria-label":v,className:"".concat(Wt,"__arrow ").concat(Wt,"__next-button"),disabled:Ae,onClick:tr,type:"button",children:C}),g!==null&&L?l.jsx("button",{"aria-label":y,className:"".concat(Wt,"__arrow ").concat(Wt,"__next2-button"),disabled:Ge,onClick:mn,type:"button",children:g}):null]})}var ni=function(){return ni=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ni.apply(this,arguments)},jA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Mv(e){return"".concat(e,"%")}function Qp(e){var t=e.children,n=e.className,r=e.count,i=e.direction,a=e.offset,o=e.style,s=e.wrap,u=jA(e,["children","className","count","direction","offset","style","wrap"]);return l.jsx("div",ni({className:n,style:ni({display:"flex",flexDirection:i,flexWrap:s?"wrap":"nowrap"},o)},u,{children:w.Children.map(t,function(c,d){var f=a&&d===0?Mv(100*a/r):null;return w.cloneElement(c,ni(ni({},c.props),{style:{flexBasis:Mv(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function TA(e,t,n){return t&&t>e?t:n&&n<e?n:e}function Xa(e,t){return t[0]<=e&&t[1]>=e}function PA(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function dS(e,t){return Xa(e[0],t)||Xa(e[1],t)}function Nv(e,t,n){var r=dS(t,e),i=[];if(r){i.push(n);var a=Xa(e[0],t),o=Xa(e[1],t);a&&i.push("".concat(n,"Start")),o&&i.push("".concat(n,"End")),a&&o&&i.push("".concat(n,"BothEnds"))}return i}function DA(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function EA(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",a=[i];if(!n)return a;var o=new Date,s=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return Rv(m,n)}();if(Xa(o,s)&&a.push("".concat(i,"--now")),!t||!DA(t))return a;var u=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return Rv(m,t)}();PA(u,s)?a.push("".concat(i,"--active")):dS(u,s)&&a.push("".concat(i,"--hasActive"));var c=Nv(u,s,"".concat(i,"--range"));a.push.apply(a,c);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>u[0]?[u[0],r]:[r,u[0]],p=Nv(f,s,"".concat(i,"--hover"));a.push.apply(a,p)}return a}function Xl(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,a=e.dateType,o=e.end,s=e.hover,u=e.offset,c=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,m=e.value,x=e.valueType,y=[],S=d;S<=o;S+=p){var g=i(S);y.push(c({classes:EA({date:g,dateType:a,hover:s,value:m,valueType:x}),date:g}))}return l.jsx(Qp,{className:t,count:r,offset:u,wrap:!0,children:y})}function Zl(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,a=e.formatAbbr,o=e.locale,s=e.maxDate,u=e.maxDateTransform,c=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,m=e.style,x=e.tileClassName,y=e.tileContent,S=e.tileDisabled,g=e.view,h=w.useMemo(function(){var k={activeStartDate:t,date:i,view:g};return typeof x=="function"?x(k):x},[t,i,x,g]),v=w.useMemo(function(){var k={activeStartDate:t,date:i,view:g};return typeof y=="function"?y(k):y},[t,i,y,g]);return l.jsxs("button",{className:Hl(r,h),disabled:c&&d(c)>i||s&&u(s)<i||(S==null?void 0:S({activeStartDate:t,date:i,view:g})),onClick:f?function(k){return f(i,k)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:m,type:"button",children:[a?l.jsx("abbr",{"aria-label":a(o,i),children:n}):n,v]})}var Bd=function(){return Bd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Bd.apply(this,arguments)},AA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},$v="react-calendar__century-view__decades__decade";function _A(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,a=i===void 0?Ql:i,o=AA(e,["classes","currentCentury","formatYear"]),s=o.date,u=o.locale,c=[];return n&&c.push.apply(c,n),c.push($v),$i(s).getFullYear()!==r&&c.push("".concat($v,"--neighboringCentury")),l.jsx(Zl,Bd({},o,{classes:c,maxDateTransform:Gl,minDateTransform:er,view:"century",children:uS(u,a,s)}))}var Fd=function(){return Fd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fd.apply(this,arguments)},Vv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function IA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,a=e.valueType,o=Vv(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),s=pA(t),u=s+(r?119:99);return l.jsx(Xl,{className:"react-calendar__century-view__decades",dateTransform:er,dateType:"decade",end:u,hover:n,renderTile:function(c){var d=c.date,f=Vv(c,["date"]);return l.jsx(_A,Fd({},o,f,{activeStartDate:t,currentCentury:s,date:d}),d.getTime())},start:s,step:10,value:i,valueType:a})}var zd=function(){return zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zd.apply(this,arguments)};function LA(e){function t(){return l.jsx(IA,zd({},e))}return l.jsx("div",{className:"react-calendar__century-view",children:t()})}var Wd=function(){return Wd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wd.apply(this,arguments)},OA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Bv="react-calendar__decade-view__years__year";function RA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,a=i===void 0?Ql:i,o=OA(e,["classes","currentDecade","formatYear"]),s=o.date,u=o.locale,c=[];return n&&c.push.apply(c,n),c.push(Bv),er(s).getFullYear()!==r&&c.push("".concat(Bv,"--neighboringDecade")),l.jsx(Zl,Wd({},o,{classes:c,maxDateTransform:Kl,minDateTransform:Vi,view:"decade",children:a(u,s)}))}var Ud=function(){return Ud=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ud.apply(this,arguments)},Fv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function MA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,a=e.valueType,o=Fv(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),s=hA(t),u=s+(r?11:9);return l.jsx(Xl,{className:"react-calendar__decade-view__years",dateTransform:Vi,dateType:"year",end:u,hover:n,renderTile:function(c){var d=c.date,f=Fv(c,["date"]);return l.jsx(RA,Ud({},o,f,{activeStartDate:t,currentDecade:s,date:d}),d.getTime())},start:s,value:i,valueType:a})}var Hd=function(){return Hd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hd.apply(this,arguments)};function NA(e){function t(){return l.jsx(MA,Hd({},e))}return l.jsx("div",{className:"react-calendar__decade-view",children:t()})}var Yd=function(){return Yd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yd.apply(this,arguments)},$A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},zv=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},VA="react-calendar__year-view__months__month";function BA(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?lA:r,a=e.formatMonthYear,o=a===void 0?aS:a,s=$A(e,["classes","formatMonth","formatMonthYear"]),u=s.date,c=s.locale;return l.jsx(Zl,Yd({},s,{classes:zv(zv([],n,!0),[VA],!1),formatAbbr:o,maxDateTransform:uo,minDateTransform:_r,view:"year",children:i(c,u)}))}var Gd=function(){return Gd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gd.apply(this,arguments)},Wv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function FA(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,a=Wv(e,["activeStartDate","hover","value","valueType"]),o=0,s=11,u=le(t);return l.jsx(Xl,{className:"react-calendar__year-view__months",dateTransform:function(c){var d=new Date;return d.setFullYear(u,c,1),_r(d)},dateType:"month",end:s,hover:n,renderTile:function(c){var d=c.date,f=Wv(c,["date"]);return l.jsx(BA,Gd({},a,f,{activeStartDate:t,date:d}),d.getTime())},start:o,value:r,valueType:i})}var Kd=function(){return Kd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kd.apply(this,arguments)};function zA(e){function t(){return l.jsx(FA,Kd({},e))}return l.jsx("div",{className:"react-calendar__year-view",children:t()})}var Qd=function(){return Qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qd.apply(this,arguments)},WA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},fc="react-calendar__month-view__days__day";function UA(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,a=e.formatDay,o=a===void 0?oA:a,s=e.formatLongDate,u=s===void 0?sA:s,c=WA(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=c.date,f=c.locale,p=[];return r&&p.push.apply(p,r),p.push(fc),cS(d,t)&&p.push("".concat(fc,"--weekend")),d.getMonth()!==i&&p.push("".concat(fc,"--neighboringMonth")),l.jsx(Zl,Qd({},c,{classes:p,formatAbbr:u,maxDateTransform:Gp,minDateTransform:co,view:"month",children:o(f,d)}))}var Xd=function(){return Xd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xd.apply(this,arguments)},Uv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function HA(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,a=e.showNeighboringMonth,o=e.value,s=e.valueType,u=Uv(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),c=le(t),d=qn(t),f=i||a,p=Qa(t,n),m=f?0:p,x=(f?-p:0)+1,y=function(){if(i)return x+6*7-1;var S=iS(t);if(a){var g=new Date;g.setFullYear(c,d,S),g.setHours(0,0,0,0);var h=7-Qa(g,n)-1;return S+h}return S}();return l.jsx(Xl,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var g=new Date;return g.setFullYear(c,d,S),co(g)},dateType:"day",hover:r,end:y,renderTile:function(S){var g=S.date,h=Uv(S,["date"]);return l.jsx(UA,Xd({},u,h,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:m,start:x,value:o,valueType:s})}var fS="react-calendar__month-view__weekdays",pc="".concat(fS,"__weekday");function YA(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?uA:n,i=e.formatWeekday,a=i===void 0?cA:i,o=e.locale,s=e.onMouseLeave,u=new Date,c=_r(u),d=le(c),f=qn(c),p=[],m=1;m<=7;m+=1){var x=new Date(d,f,m-Qa(c,t)),y=a(o,x);p.push(l.jsx("div",{className:Hl(pc,kA(x)&&"".concat(pc,"--current"),cS(x,t)&&"".concat(pc,"--weekend")),children:l.jsx("abbr",{"aria-label":y,title:y,children:r(o,x).replace(".","")})},m))}return l.jsx(Qp,{className:fS,count:7,onFocus:s,onMouseOver:s,children:p})}var hl=function(){return hl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hl.apply(this,arguments)},Hv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Yv="react-calendar__tile";function GA(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=l.jsx("span",{children:n});if(t){var i=e.date,a=e.onClickWeekNumber,o=e.weekNumber,s=Hv(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("button",hl({},s,{className:Yv,onClick:function(u){return a(o,i,u)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=Hv(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("div",hl({},s,{className:Yv,children:r}))}}function KA(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,a=e.showFixedNumberOfWeeks,o=function(){if(a)return 6;var c=iS(t),d=Qa(t,n),f=c-(7-d);return 1+Math.ceil(f/7)}(),s=function(){for(var c=le(t),d=qn(t),f=Yl(t),p=[],m=0;m<o;m+=1)p.push(Vd(new Date(c,d,f+m*7),n));return p}(),u=s.map(function(c){return mA(c,n)});return l.jsx(Qp,{className:"react-calendar__month-view__weekNumbers",count:o,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:u.map(function(c,d){var f=s[d];if(!f)throw new Error("date is not defined");return l.jsx(GA,{date:f,onClickWeekNumber:r,weekNumber:c},c)})})}var Zd=function(){return Zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zd.apply(this,arguments)},QA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function XA(e){if(e)for(var t=0,n=Object.entries(X4);t<n.length;t++){var r=n[t],i=r[0],a=r[1];if(a.includes(e))return i}return Me.ISO_8601}function ZA(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,a=e.calendarType,o=a===void 0?XA(n):a,s=e.formatShortWeekday,u=e.formatWeekday,c=e.onClickWeekNumber,d=e.showWeekNumbers,f=QA(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return l.jsx(YA,{calendarType:o,formatShortWeekday:s,formatWeekday:u,locale:n,onMouseLeave:r})}function m(){return d?l.jsx(KA,{activeStartDate:t,calendarType:o,onClickWeekNumber:c,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function x(){return l.jsx(HA,Zd({calendarType:o},f))}var y="react-calendar__month-view";return l.jsx("div",{className:Hl(y,d?"".concat(y,"--weekNumbers"):""),children:l.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),l.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),x()]})]})})}var ri=function(){return ri=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ri.apply(this,arguments)},Go="react-calendar",Es=["century","decade","year","month"],JA=["decade","year","month","day"],Xp=new Date;Xp.setFullYear(1,0,1);Xp.setHours(0,0,0,0);var qA=new Date(864e13);function ua(e){return e instanceof Date?e:new Date(e)}function pS(e,t){return Es.slice(Es.indexOf(e),Es.indexOf(t)+1)}function e_(e,t,n){var r=pS(t,n);return r.indexOf(e)!==-1}function Zp(e,t,n){return e&&e_(e,t,n)?e:n}function hS(e){var t=Es.indexOf(e);return JA[t]}function t_(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=ua(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function mS(e,t){var n=e.value,r=e.minDate,i=e.maxDate,a=e.maxDetail,o=t_(n,t);if(!o)return null;var s=hS(a),u=function(){switch(t){case 0:return Sr(s,o);case 1:return sS(s,o);default:throw new Error("Invalid index value: ".concat(t))}}();return TA(u,r,i)}var Jp=function(e){return mS(e,0)},gS=function(e){return mS(e,1)},n_=function(e){return[Jp,gS].map(function(t){return t(e)})};function vS(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,a=e.value,o=e.view,s=Zp(o,i,n),u=Jp({value:a,minDate:r,maxDate:t,maxDetail:n})||new Date;return Sr(s,u)}function r_(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,a=e.maxDate,o=e.maxDetail,s=e.minDate,u=e.minDetail,c=e.value,d=e.view,f=Zp(d,u,o),p=t||n;return p?Sr(f,p):vS({maxDate:a,maxDetail:o,minDate:s,minDetail:u,value:c||r,view:d||i})}function hc(e){return e&&(!Array.isArray(e)||e.length===1)}function Ko(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var i_=w.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,a=t.calendarType,o=t.className,s=t.defaultActiveStartDate,u=t.defaultValue,c=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,m=t.formatMonthYear,x=t.formatShortWeekday,y=t.formatWeekday,S=t.formatYear,g=t.goToRangeStartOnSelect,h=g===void 0?!0:g,v=t.inputRef,k=t.locale,C=t.maxDate,j=C===void 0?qA:C,T=t.maxDetail,P=T===void 0?"month":T,A=t.minDate,D=A===void 0?Xp:A,M=t.minDetail,Q=M===void 0?"century":M,re=t.navigationAriaLabel,he=t.navigationAriaLive,N=t.navigationLabel,V=t.next2AriaLabel,B=t.next2Label,_=t.nextAriaLabel,L=t.nextLabel,O=t.onActiveStartDateChange,z=t.onChange,H=t.onClickDay,me=t.onClickDecade,Ee=t.onClickMonth,yt=t.onClickWeekNumber,Ae=t.onClickYear,Ge=t.onDrillDown,Et=t.onDrillUp,Ve=t.onViewChange,tr=t.prev2AriaLabel,mn=t.prev2Label,st=t.prevAriaLabel,Jl=t.prevLabel,je=t.returnValue,Bi=je===void 0?"start":je,xt=t.selectRange,fo=t.showDoubleView,qp=t.showFixedNumberOfWeeks,eh=t.showNavigation,xS=eh===void 0?!0:eh,wS=t.showNeighboringCentury,SS=t.showNeighboringDecade,th=t.showNeighboringMonth,bS=th===void 0?!0:th,kS=t.showWeekNumbers,CS=t.tileClassName,jS=t.tileContent,TS=t.tileDisabled,ql=t.value,nh=t.view,rh=w.useState(s),PS=rh[0],po=rh[1],ih=w.useState(null),DS=ih[0],ah=ih[1],oh=w.useState(Array.isArray(u)?u.map(function(Y){return Y!==null?ua(Y):null}):u!=null?ua(u):null),eu=oh[0],ES=oh[1],sh=w.useState(c),AS=sh[0],lh=sh[1],et=r||PS||r_({activeStartDate:r,defaultActiveStartDate:s,defaultValue:u,defaultView:c,maxDate:j,maxDetail:P,minDate:D,minDetail:Q,value:ql,view:nh}),tt=function(){var Y=function(){return xt&&hc(eu)?eu:ql!==void 0?ql:eu}();return Y?Array.isArray(Y)?Y.map(function(ge){return ge!==null?ua(ge):null}):Y!==null?ua(Y):null:null}(),ho=hS(P),ue=Zp(nh||AS,Q,P),Ft=pS(Q,P),_S=xt?DS:null,tu=Ft.indexOf(ue)<Ft.length-1,uh=Ft.indexOf(ue)>0,ch=w.useCallback(function(Y){var ge=function(){switch(Bi){case"start":return Jp;case"end":return gS;case"range":return n_;default:throw new Error("Invalid returnValue.")}}();return ge({maxDate:j,maxDetail:P,minDate:D,value:Y})},[j,P,D,Bi]),nu=w.useCallback(function(Y,ge){po(Y);var be={action:ge,activeStartDate:Y,value:tt,view:ue};O&&!Ko(et,Y)&&O(be)},[et,O,tt,ue]),mo=w.useCallback(function(Y,ge){var be=function(){switch(ue){case"century":return me;case"decade":return Ae;case"year":return Ee;case"month":return H;default:throw new Error("Invalid view: ".concat(ue,"."))}}();be&&be(Y,ge)},[H,me,Ee,Ae,ue]),ru=w.useCallback(function(Y,ge){if(tu){mo(Y,ge);var be=Ft[Ft.indexOf(ue)+1];if(!be)throw new Error("Attempted to drill down from the lowest view.");po(Y),lh(be);var At={action:"drillDown",activeStartDate:Y,value:tt,view:be};O&&!Ko(et,Y)&&O(At),Ve&&ue!==be&&Ve(At),Ge&&Ge(At)}},[et,tu,O,mo,Ge,Ve,tt,ue,Ft]),iu=w.useCallback(function(){if(uh){var Y=Ft[Ft.indexOf(ue)-1];if(!Y)throw new Error("Attempted to drill up from the highest view.");var ge=Sr(Y,et);po(ge),lh(Y);var be={action:"drillUp",activeStartDate:ge,value:tt,view:Y};O&&!Ko(et,ge)&&O(be),Ve&&ue!==Y&&Ve(be),Et&&Et(be)}},[et,uh,O,Et,Ve,tt,ue,Ft]),au=w.useCallback(function(Y,ge){var be=tt;mo(Y,ge);var At=xt&&!hc(be),_t;if(xt)if(At)_t=Sr(ho,Y);else{if(!be)throw new Error("previousValue is required");if(Array.isArray(be))throw new Error("previousValue must not be an array");_t=SA(ho,be,Y)}else _t=ch(Y);var su=!xt||At||h?vS({maxDate:j,maxDetail:P,minDate:D,minDetail:Q,value:_t,view:ue}):null;ge.persist(),po(su),ES(_t);var RS={action:"onChange",activeStartDate:su,value:_t,view:ue};if(O&&!Ko(et,su)&&O(RS),z)if(xt){var MS=hc(_t);if(!MS)z(_t||null,ge);else if(i){if(Array.isArray(_t))throw new Error("value must not be an array");z([_t||null,null],ge)}}else z(_t||null,ge)},[et,i,ch,h,j,P,D,Q,O,z,mo,xt,tt,ho,ue]);function IS(Y){ah(Y)}function ou(){ah(null)}w.useImperativeHandle(n,function(){return{activeStartDate:et,drillDown:ru,drillUp:iu,onChange:au,setActiveStartDate:nu,value:tt,view:ue}},[et,ru,iu,au,nu,tt,ue]);function dh(Y){var ge=Y?oS(ue,et):Sr(ue,et),be=tu?ru:au,At={activeStartDate:ge,hover:_S,locale:k,maxDate:j,minDate:D,onClick:be,onMouseOver:xt?IS:void 0,tileClassName:CS,tileContent:jS,tileDisabled:TS,value:tt,valueType:ho};switch(ue){case"century":return l.jsx(LA,ri({formatYear:S,showNeighboringCentury:wS},At));case"decade":return l.jsx(NA,ri({formatYear:S,showNeighboringDecade:SS},At));case"year":return l.jsx(zA,ri({formatMonth:p,formatMonthYear:m},At));case"month":return l.jsx(ZA,ri({calendarType:a,formatDay:d,formatLongDate:f,formatShortWeekday:x,formatWeekday:y,onClickWeekNumber:yt,onMouseLeave:xt?ou:void 0,showFixedNumberOfWeeks:typeof qp<"u"?qp:fo,showNeighboringMonth:bS,showWeekNumbers:kS},At));default:throw new Error("Invalid view: ".concat(ue,"."))}}function LS(){return xS?l.jsx(CA,{activeStartDate:et,drillUp:iu,formatMonthYear:m,formatYear:S,locale:k,maxDate:j,minDate:D,navigationAriaLabel:re,navigationAriaLive:he,navigationLabel:N,next2AriaLabel:V,next2Label:B,nextAriaLabel:_,nextLabel:L,prev2AriaLabel:tr,prev2Label:mn,prevAriaLabel:st,prevLabel:Jl,setActiveStartDate:nu,showDoubleView:fo,view:ue,views:Ft}):null}var OS=Array.isArray(tt)?tt:[tt];return l.jsxs("div",{className:Hl(Go,xt&&OS.length===1&&"".concat(Go,"--selectRange"),fo&&"".concat(Go,"--doubleView"),o),ref:v,children:[LS(),l.jsxs("div",{className:"".concat(Go,"__viewContainer"),onBlur:xt?ou:void 0,onMouseLeave:xt?ou:void 0,children:[dh(),fo?dh(!0):null]})]})});const a_=Ri`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,o_=Ri`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,s_=Ri`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,l_=Ri`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,u_=Ri`
  from { opacity: 0; }
  to { opacity: 1; }
`,c_=b.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${u_} 0.15s ease-out;
`,d_=b.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?pr`animation: ${l_} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:pr`animation: ${s_} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?pr`animation: ${o_} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:pr`animation: ${a_} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,f_=b.div`
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
`,yS=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const a=w.useRef(null),[o,s]=w.useState(!1),[u,c]=w.useState(!1),[d,f]=w.useState(!1),[p,m]=w.useState({top:0,left:0});w.useEffect(()=>{if(e&&(i!=null&&i.current)){const h=i.current.getBoundingClientRect(),v=280,k=320,C=8,T=window.innerHeight-h.bottom-C<k;f(T);let P;T?P=h.top-k-C:P=h.bottom+C;let A=h.right-v;A<8&&(A=8),A+v>window.innerWidth-8&&(A=window.innerWidth-v-8),P<8&&(P=8),m({top:P,left:A}),c(!0),s(!1)}},[e,i]);const x=w.useCallback(()=>{s(!0),setTimeout(()=>{c(!1),s(!1),t()},150)},[t]),y=w.useCallback(h=>{a.current&&!a.current.contains(h.target)&&x()},[x]);w.useEffect(()=>{if(e){const h=setTimeout(()=>{document.addEventListener("mousedown",y)},10);return()=>{clearTimeout(h),document.removeEventListener("mousedown",y)}}},[e,y]);const S=w.useCallback(h=>{h instanceof Date&&(r(Ar(h)),x())},[r,x]);if(!u)return null;const g=new Date(n+"T00:00:00");return bx.createPortal(l.jsxs("div",{"data-calendar-portal":!0,children:[l.jsx(c_,{onClick:x}),l.jsx(d_,{ref:a,$isClosing:o,$openUpward:d,$top:p.top,$left:p.left,children:l.jsx(f_,{children:l.jsx(i_,{onChange:S,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(h,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},p_=b(I.div)`
  position: relative;
  border-radius: 20px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,h_=b.div`
  display: flex;
  align-items: center;
  padding: var(--space-xl);
  gap: var(--space-lg);

  @media (max-width: 640px) {
    padding: var(--space-lg);
    gap: var(--space-md);
  }
`,m_=b(I.div)`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$type:e})=>{switch(e){case"past":return`
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        `;case"today":return`
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        `;case"future":return`
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        `}}}

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`,g_=b.span`
  font-size: 22px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,v_=b.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
`,y_=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,x_=b(I.div)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,w_=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,S_=b.span`
  font-size: 13px;
  color: var(--text-tertiary);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,b_=b(I.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  
  ${({$type:e})=>{switch(e){case"past":return"background: #ef4444;";case"today":return"background: #10b981;";case"future":return"background: #3b82f6;"}}}
`,k_=b(I.span)`
  font-size: 12px;
  font-weight: 500;
  
  ${({$type:e})=>{switch(e){case"past":return"color: #ef4444;";case"today":return"color: #10b981;";case"future":return"color: #3b82f6;"}}}

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,C_=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`,j_=b(I.button).attrs({type:"button"})`
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  background: var(--accent);
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 8px;
  }
`,T_=b(I.button).attrs({type:"button"})`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-secondary);
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,P_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),qi={type:"spring",stiffness:300,damping:30,mass:.8},D_=({selectedDate:e,onDateChange:t})=>{const[n,r]=w.useState(!1),i=w.useRef(null),a=y=>{y.preventDefault(),y.stopPropagation(),t(Ar(new Date))},s=Iv(e)?"today":m4(e)?"past":"future",u=Iv(e),c=new Date(e+"T00:00:00"),d=c.getDate(),f=c.toLocaleDateString("en-US",{month:"short"}).toUpperCase(),p=c.toLocaleDateString("en-US",{weekday:"long"}),m=c.getFullYear(),x=()=>{switch(s){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return l.jsxs(p_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:qi,children:[l.jsxs(h_,{children:[l.jsx(Pe,{mode:"wait",children:l.jsxs(m_,{$type:s,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:qi,children:[l.jsx(g_,{children:d}),l.jsx(v_,{children:f})]},`${d}-${f}`)}),l.jsxs(y_,{children:[l.jsx(Pe,{mode:"wait",children:l.jsx(x_,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:qi,children:p},p)}),l.jsxs(w_,{children:[l.jsx(S_,{children:m}),l.jsx(Pe,{mode:"wait",children:l.jsx(b_,{$type:s,initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",stiffness:500,damping:25}},s)}),l.jsx(Pe,{mode:"wait",children:l.jsx(k_,{$type:s,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:qi,children:x()},s)})]})]}),l.jsxs(C_,{children:[l.jsx(Pe,{children:!u&&l.jsx(j_,{onClick:a,initial:{opacity:0,scale:.8,x:20},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:20},whileHover:{scale:1.05,backgroundColor:"var(--accent-hover)"},whileTap:{scale:.95},transition:qi,children:"Today"})}),l.jsx(T_,{ref:i,onClick:()=>r(!0),whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(P_,{})})]})]}),l.jsx(yS,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:i})]})},E_=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,A_=b.div`
  position: relative;
  z-index: 1;
`,__=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,I_=b(I.div)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  background: transparent;
  padding: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,L_=b.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  flex: 1;
  margin-left: var(--space-sm);
`,mc=b(I.span)`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  
  ${({$type:e})=>{switch(e){case"due":return`
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        `;case"unbilled":return`
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        `;case"clear":return`
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        `}}}
`,O_=b(I.div)`
  font-size: 24px;
  font-weight: 700;
  color: ${({$negative:e,$color:t})=>e?"#ef4444":t};
  letter-spacing: -0.02em;
  margin-bottom: 2px;
  font-variant-numeric: tabular-nums;
`,R_=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,M_=b.div`
  font-size: 11px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,N_={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},$_=e=>{const t=N_[e];return t?l.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},Gv={type:"spring",stiffness:300,damping:30,mass:.8},V_=({accountBalance:e,index:t=0})=>{const{account:n,balance:r,pendingBill:i,totalOutstanding:a}=e,o=Math.abs(r),s=r<0,u=()=>a&&a>0?l.jsx(mc,{$type:"due",layout:!0,children:"Due"}):i&&i>0?l.jsx(mc,{$type:"unbilled",layout:!0,children:"Unbilled"}):l.jsx(mc,{$type:"clear",layout:!0,children:"Clear"});return l.jsx(E_,{$accentColor:n.color,initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{...Gv,delay:t*.05},whileHover:{scale:1.02,y:-2},layout:!0,children:l.jsxs(A_,{children:[l.jsxs(__,{children:[l.jsx(I_,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:$_(n.bank)}),l.jsx(L_,{children:n.name.replace(" Credit Card","").replace(" Bank","")+" Bank"})]}),l.jsxs(O_,{$negative:s,$color:n.color,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Gv,children:[s?"-":"",ti(o)]},o),l.jsxs(R_,{children:[l.jsx(M_,{children:s?"Outstanding":o===0?"Paid":"Overpaid"}),u()]})]})})},B_=w.memo(V_),F_=b(I.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
  }
`,Qo=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,Xo=b.div`
  position: relative;
  z-index: 1;
`,Zo=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,Kv=b(I.div)`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({$color:e})=>`${e}20`};
  border: 1px solid ${({$color:e})=>`${e}40`};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e};
  }

  @media (max-width: 500px) {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Qv=b(I.div)`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 500px) {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    padding: 6px;
  }
`,Xv={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},Jo=b(I.div)`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  background: ${({$positive:e})=>e?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)"};
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};

  svg {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 500px) {
    padding: 2px 6px;
    font-size: 9px;
  }
`,qo=b.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-xs);

  @media (max-width: 500px) {
    font-size: 9px;
    letter-spacing: 0.08em;
  }
`,es=b(I.div)`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({$color:e})=>e};
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  margin-bottom: var(--space-xs);

  @media (max-width: 500px) {
    font-size: 20px;
  }
`,ts=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),W_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),ns=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m18 15-6-6-6 6"})}),rs=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m6 9 6 6 6-6"})}),Jt={type:"spring",stiffness:300,damping:30,mass:.8},U_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},is={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:Jt}},H_=({balances:e})=>{const{hdfcBalance:t,iciciBalance:n,totalCCOutstanding:r,netPosition:i}=w.useMemo(()=>{const a=e.find(f=>f.account.id==="hdfc-bank"),o=e.find(f=>f.account.id==="icici-bank"),s=e.filter(f=>f.account.type==="credit_card"),u=(a==null?void 0:a.balance)||0,c=(o==null?void 0:o.balance)||0,d=s.reduce((f,p)=>f+(p.totalOutstanding||0),0);return{hdfcBalance:u,iciciBalance:c,totalCCOutstanding:d,netPosition:u-d}},[e]);return l.jsxs(F_,{variants:U_,initial:"hidden",animate:"visible",children:[l.jsx(Qo,{$variant:"hdfc",variants:is,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(Xo,{children:[l.jsx(Zo,{children:l.jsx(Qv,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:Xv.hdfc,alt:"HDFC Bank"})})}),l.jsx(qo,{children:"HDFC Bank"}),l.jsx(es,{$color:t>=0?"#004C8F":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:ti(t)},t),l.jsxs(ts,{children:[l.jsx("span",{}),l.jsxs(Jo,{$positive:t>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[t>=0?l.jsx(ns,{}):l.jsx(rs,{}),t>=0?"+":"-"]})]})]})}),l.jsx(Qo,{$variant:"icici",variants:is,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(Xo,{children:[l.jsx(Zo,{children:l.jsx(Qv,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:Xv.icici,alt:"ICICI Bank"})})}),l.jsx(qo,{children:"ICICI Bank"}),l.jsx(es,{$color:n>=0?"#F58220":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:ti(n)},n),l.jsxs(ts,{children:[l.jsx("span",{}),l.jsxs(Jo,{$positive:n>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[n>=0?l.jsx(ns,{}):l.jsx(rs,{}),n>=0?"+":"-"]})]})]})}),l.jsx(Qo,{$variant:"negative",variants:is,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(Xo,{children:[l.jsx(Zo,{children:l.jsx(Kv,{$color:"#ef4444",whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(z_,{})})}),l.jsx(qo,{children:"Credit Cards"}),l.jsxs(es,{$color:r>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:[r>0?"-":"",ti(r)]},r),l.jsxs(ts,{children:[l.jsx("span",{}),l.jsxs(Jo,{$positive:r===0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[r===0?l.jsx(ns,{}):l.jsx(rs,{}),r>0?"Due":"Clear"]})]})]})}),l.jsx(Qo,{$variant:"neutral",variants:is,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(Xo,{children:[l.jsx(Zo,{children:l.jsx(Kv,{$color:"#10b981",whileHover:{scale:1.1,rotate:-5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(W_,{})})}),l.jsx(qo,{children:"Net Position"}),l.jsx(es,{$color:i>=0?"#10b981":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:ti(i)},i),l.jsxs(ts,{children:[l.jsx("span",{}),l.jsxs(Jo,{$positive:i>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[i>=0?l.jsx(ns,{}):l.jsx(rs,{}),"Net"]})]})]})})]})},Y_=w.memo(H_),G_=b.div`
  display: flex;
  flex-direction: column;
`,K_=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
`,Q_=b(I.button)`
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
`,X_=b.span`
  font-weight: 600;
  display: block;
`,Z_=b.span`
  font-size: 11px;
  opacity: 0.8;
  display: block;
  margin-top: 2px;
`,J_=b.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,q_=b.div`
  overflow: hidden;
`,eI=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    gap: var(--space-md);
  }
`,tI=b.div`
  display: flex;
  gap: var(--space-md);
  align-items: flex-end;
`,as=b.div`
  &.flex-grow {
    flex: 1;
    min-width: 0;
  }
`,os=b.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`,Zv=b.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px; /* Prevents iOS zoom */
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;
  height: 46px;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`,nI=b.div`
  position: relative;
`,rI=b(I.button).attrs({type:"button"})`
  width: 46px;
  height: 46px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: var(--border-hover);
  }

  svg {
    width: 18px;
    height: 18px;
    color: var(--text-secondary);
  }
`,iI=b.select`
  width: 100%;
  padding: 12px 40px 12px 14px;
  font-size: 16px; /* Prevents iOS zoom */
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s ease;
  appearance: none;
  box-sizing: border-box;
  height: 46px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 14px;

  &:focus {
    border-color: var(--accent);
  }

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`,aI=b.div`
  position: relative;

  &::before {
    content: '₹';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    font-weight: 600;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-left: 32px;
  }
`,oI=b.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`,sI=b(I.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,lI=b(I.button)`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,uI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),cI=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],dI="hdfc-bank",fI=Hw(),pI=Uw(),gc={type:"spring",stiffness:400,damping:25},hI=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=w.useState(""),[i,a]=w.useState(""),[o,s]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(t||Ar(new Date)),[p,m]=w.useState(!1),x=w.useRef(null),y=w.useRef(null);w.useEffect(()=>{t&&f(t)},[t]);const S=i!==""||o!==""||u!=="";w.useEffect(()=>{if(!n||S||p)return;const A=D=>{const M=D.target;M.closest("[data-calendar-portal]")||x.current&&!x.current.contains(M)&&r("")};return document.addEventListener("mousedown",A),document.addEventListener("touchstart",A),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A)}},[n,S,p]);const g=w.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return fI;case"bank_debit":case"bank_credit":return pI;default:return Pi}},[n]),h=w.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),v=n&&i&&parseFloat(o)>0&&d,k=w.useCallback(()=>{r(""),a(""),s(""),c("")},[]),C=w.useCallback(()=>{if(!n||!i||!o||!d)return;const A=n==="cc_payment"?dI:void 0,D=Pi.find(re=>re.id===i);let M="";switch(n){case"credit_card_spend":M=`Spent on ${D==null?void 0:D.name}`;break;case"cc_payment":M=`Payment to ${D==null?void 0:D.name}`;break;case"bank_debit":M=`Debited from ${D==null?void 0:D.name}`;break;case"bank_credit":M=`Credited to ${D==null?void 0:D.name}`;break}const Q=w4(n,i,parseFloat(o),u||M,d,A);e(Q),k()},[n,i,o,u,d,e,k]),j=w.useMemo(()=>{const D=o.replace(/[^0-9.]/g,"").split(".");let M=D[0];const Q=D[1];if(M.length>3){let re=M.substring(M.length-3),he=M.substring(0,M.length-3);he=he.replace(/\B(?=(\d{2})+(?!\d))/g,","),M=he+","+re}return Q!==void 0?`${M}.${Q}`:M},[o]),T=w.useCallback(A=>{const D=A.target.value.replace(/,/g,"");(D===""||/^\d*\.?\d*$/.test(D))&&s(D)},[]),P=!!n;return l.jsxs(G_,{ref:x,children:[l.jsx(K_,{children:cI.map(({type:A,label:D,hint:M,color:Q})=>l.jsxs(Q_,{type:"button",$active:n===A,$color:Q,onClick:()=>{r(A),a("")},whileHover:{scale:1.02},whileTap:{scale:.98},transition:gc,children:[l.jsx(X_,{children:D}),l.jsx(Z_,{children:M})]},A))}),l.jsx(J_,{$isOpen:P,children:l.jsx(q_,{children:l.jsxs(eI,{children:[l.jsxs(as,{children:[l.jsx(os,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),l.jsxs(iI,{value:i,onChange:A=>a(A.target.value),children:[l.jsx("option",{value:"",children:h()}),g.map(A=>l.jsx("option",{value:A.id,children:A.name},A.id))]})]}),l.jsxs(tI,{children:[l.jsxs(as,{className:"flex-grow",children:[l.jsx(os,{children:"Amount"}),l.jsx(aI,{children:l.jsx(Zv,{type:"text",inputMode:"decimal",placeholder:"10,000",value:j,onChange:T})})]}),l.jsxs(as,{children:[l.jsx(os,{children:"Date"}),l.jsxs(nI,{children:[l.jsx(rI,{ref:y,onClick:()=>m(!0),whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(uI,{})}),l.jsx(yS,{isOpen:p,onClose:()=>m(!1),selectedDate:d,onDateSelect:f,triggerRef:y})]})]})]}),l.jsxs(as,{children:[l.jsx(os,{children:"Description (Optional)"}),l.jsx(Zv,{type:"text",placeholder:"e.g., Grocery shopping",value:u,onChange:A=>c(A.target.value)})]}),l.jsxs(oI,{children:[l.jsx(sI,{type:"button",onClick:C,disabled:!v,whileHover:v?{scale:1.02}:{},whileTap:v?{scale:.98}:{},transition:gc,children:"Add"}),l.jsx(lI,{type:"button",onClick:k,whileHover:{scale:1.02},whileTap:{scale:.98},transition:gc,children:"Cancel"})]})]})})})]})},mI=w.memo(hI),gI=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,vI=b.div`
  position: relative;
  z-index: 1;
`,yI=b(I.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-xl);
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,xI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,wI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,SI=b(I.div)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;

  svg {
    width: 14px;
    height: 14px;
  }
`,bI=b(I.div)`
  overflow: hidden;
`,kI=b.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
    color: #3b82f6;
  }
`,CI=b.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,jI=b(I.span)`
  font-size: 12px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,TI=b.div`
  max-height: 400px;
  overflow-y: auto;
  border-top: 1px solid var(--border);

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
`,PI=b(I.div)`
  display: grid;
  grid-template-columns: 44px 1fr auto;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-xl);
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr auto;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
  }
`,DI=b(I.div)`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:e})=>{switch(e){case"credit_card_spend":return`
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
        `;case"cc_payment":return`
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10b981;
        `;case"bank_debit":return`
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #f59e0b;
        `;case"bank_credit":return`
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #3b82f6;
        `}}}

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`,EI=b.div`
  min-width: 0;
  overflow: hidden;
`,AI=b.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,_I=b.div`
  font-size: 12px;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 11px;
    gap: 6px;
  }
`,II=b.span`
  background: var(--bg-tertiary);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 2px 6px;
    font-size: 10px;
  }
`,LI=b.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
`,OI=b.div`
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  white-space: nowrap;
  text-align: right;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,RI=b(I.button)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  color: #ef4444;
  cursor: pointer;
  opacity: 0.6;
  flex-shrink: 0;

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
`,MI=b(I.div)`
  padding: var(--space-2xl);
  text-align: center;
  color: var(--text-tertiary);
`,NI=b.div`
  width: 56px;
  height: 56px;
  margin: 0 auto var(--space-md);
  border-radius: 14px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: var(--text-tertiary);
  }
`,$I=b.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,VI=b.p`
  font-size: 12px;
  color: var(--text-tertiary);
`,BI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),l.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),l.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),l.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),FI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),zI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("polyline",{points:"19 12 12 19 5 12"})]}),WI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),l.jsx("polyline",{points:"5 12 12 5 19 12"})]}),UI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),HI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),YI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),l.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),GI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),KI=e=>{switch(e){case"credit_card_spend":return l.jsx(FI,{});case"cc_payment":return l.jsx(UI,{});case"bank_debit":return l.jsx(WI,{});case"bank_credit":return l.jsx(zI,{})}},Jv=e=>e==="bank_credit"||e==="cc_payment",ci={type:"spring",stiffness:300,damping:30,mass:.8},QI={collapsed:{height:0,opacity:0,transition:{height:{...ci},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...ci},opacity:{duration:.2,delay:.1}}}},XI={collapsed:{rotate:0},expanded:{rotate:180}},ZI={hidden:{opacity:0,x:-20},visible:e=>({opacity:1,x:0,transition:{delay:e*.03,...ci}}),exit:{opacity:0,x:20,transition:{duration:.2}}},JI=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const[r,i]=w.useState(!1),a=w.useMemo(()=>{const[s,u]=n.split("-").slice(0,2);return[...e].filter(c=>{const[d,f]=c.date.split("-").slice(0,2);return d===s&&f===u&&c.date<=n}).sort((c,d)=>{const f=d.date.localeCompare(c.date);return f!==0?f:new Date(d.createdAt).getTime()-new Date(c.createdAt).getTime()})},[e,n]),o=w.useCallback(s=>{t(s)},[t]);return l.jsx(gI,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...ci,delay:.1},children:l.jsxs(vI,{children:[l.jsxs(yI,{type:"button",onClick:()=>i(!r),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(xI,{children:[l.jsx(kI,{children:l.jsx(BI,{})}),l.jsx(CI,{children:"Transactions"})]}),l.jsxs(wI,{children:[l.jsx(Pe,{mode:"wait",children:l.jsx(jI,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:a.length},a.length)}),l.jsx(SI,{animate:r?"expanded":"collapsed",variants:XI,transition:ci,children:l.jsx(GI,{})})]})]}),l.jsx(Pe,{initial:!1,children:r&&l.jsx(bI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:QI,children:l.jsx(TI,{children:a.length===0?l.jsxs(MI,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:ci,children:[l.jsx(NI,{children:l.jsx(YI,{})}),l.jsx($I,{children:"No transactions yet"}),l.jsx(VI,{children:"Add your first transaction above"})]}):l.jsx(Pe,{mode:"popLayout",children:a.map((s,u)=>{var d;const c=S4(s.accountId);return l.jsxs(PI,{custom:u,variants:ZI,initial:"hidden",animate:"visible",exit:"exit",layout:!0,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[l.jsx(DI,{$type:s.type,whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:20},children:KI(s.type)}),l.jsxs(EI,{children:[l.jsx(AI,{children:s.description}),l.jsxs(_I,{children:[l.jsx("span",{children:h4(s.date)}),l.jsx(II,{children:(d=c==null?void 0:c.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]})]}),l.jsxs(LI,{children:[l.jsxs(OI,{$positive:Jv(s.type),children:[Jv(s.type)?"+":"-",ti(s.amount)]}),l.jsx(RI,{type:"button",onClick:()=>o(s.id),"aria-label":"Delete transaction",whileHover:{opacity:1,scale:1.1},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:20},children:l.jsx(HI,{})})]})]},s.id)})})})},"content")})]})})},qI=w.memo(JI),eL=b(I.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,tL=b(I.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;

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
`,nL=b.div`
  margin-bottom: var(--space-lg);
`,rL=b.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,iL=b.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,qv=b.h3`
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
`,e0=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,t0=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,n0=b.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,r0=b.div`
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
`,i0=b.input`
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
`,aL=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,oL=b.div`
  display: flex;
  gap: var(--space-md);
`,a0=b(I.button)`
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
`,sL=b.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,lL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),l.jsx("polyline",{points:"5 6 12 3 19 6"}),l.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),l.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),uL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),cL={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},dL={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},fL=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,onSave:i})=>{const[a,o]=w.useState({}),[s,u]=w.useState({}),c=Uw(),d=Hw();w.useEffect(()=>{if(e){const y={};c.forEach(g=>{var h;y[g.id]=((h=n[g.id])==null?void 0:h.toString())||""}),o(y);const S={};d.forEach(g=>{var h;S[g.id]=((h=r[g.id])==null?void 0:h.toString())||""}),u(S)}},[e,n,r]);const f=()=>{const y={};Object.entries(a).forEach(([g,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;y[g]=v});const S={};Object.entries(s).forEach(([g,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;S[g]=v}),i(y,S),t()},p=y=>{const S=y.replace(/[^0-9]/g,"");if(!S)return"";if(S.length>3){let g=S.substring(S.length-3),h=S.substring(0,S.length-3);return h=h.replace(/\B(?=(\d{2})+(?!\d))/g,","),h+","+g}return S},m=(y,S)=>{const g=S.replace(/,/g,"");(g===""||/^\d+$/.test(g))&&o(h=>({...h,[y]:g}))},x=(y,S)=>{const g=S.replace(/,/g,"");(g===""||/^\d+$/.test(g))&&u(h=>({...h,[y]:g}))};return l.jsx(Pe,{children:e&&l.jsx(eL,{variants:cL,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:l.jsxs(tL,{variants:dL,initial:"hidden",animate:"visible",exit:"exit",onClick:y=>y.stopPropagation(),children:[l.jsxs(nL,{children:[l.jsx(rL,{children:"Initial Balances & Bills"}),l.jsx(iL,{children:"Set your starting bank balances and any existing credit card outstanding amounts."})]}),l.jsxs(qv,{children:[l.jsx(lL,{}),"Bank Account Balances"]}),l.jsx(e0,{children:c.map(y=>l.jsxs(t0,{children:[l.jsx(n0,{children:y.name}),l.jsx(r0,{children:l.jsx(i0,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:p(a[y.id]||""),onChange:S=>m(y.id,S.target.value)})})]},y.id))}),l.jsx(aL,{}),l.jsxs(qv,{children:[l.jsx(uL,{}),"Credit Card Outstanding Bills"]}),l.jsx(e0,{children:d.map(y=>l.jsxs(t0,{children:[l.jsx(n0,{children:y.name}),l.jsx(r0,{children:l.jsx(i0,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:p(s[y.id]||""),onChange:S=>x(y.id,S.target.value)})}),l.jsx(sL,{children:"Current outstanding amount you owe"})]},y.id))}),l.jsxs(oL,{children:[l.jsx(a0,{onClick:t,children:"Cancel"}),l.jsx(a0,{$primary:!0,onClick:f,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})]})})})},zn=e=>{switch(e){case"green":return{bg:"rgba(16, 185, 129, 0.15)",border:"rgba(16, 185, 129, 0.25)",text:"#10b981"};case"orange":return{bg:"rgba(245, 158, 11, 0.15)",border:"rgba(245, 158, 11, 0.25)",text:"#f59e0b"};case"pink":return{bg:"rgba(236, 72, 153, 0.15)",border:"rgba(236, 72, 153, 0.25)",text:"#ec4899"};case"blue":return{bg:"rgba(59, 130, 246, 0.15)",border:"rgba(59, 130, 246, 0.25)",text:"#3b82f6"};case"purple":return{bg:"rgba(139, 92, 246, 0.15)",border:"rgba(139, 92, 246, 0.25)",text:"#8b5cf6"}}},pL=b(I.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
`,hL=b(I.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-xl);
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,mL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,gL=b.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$accent:e})=>zn(e).bg};
  border: 1px solid ${({$accent:e})=>zn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$accent:e})=>zn(e).text};
  }
`,vL=b.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,yL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,xL=b(I.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$accent:e})=>zn(e).text};
  background: ${({$accent:e})=>zn(e).bg};
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,wL=b(I.div)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: ${({$accent:e})=>zn(e).bg};
  border: 1px solid ${({$accent:e})=>zn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$accent:e})=>zn(e).text};

  svg {
    width: 14px;
    height: 14px;
  }
`,SL=b(I.div)`
  overflow: hidden;
`,bL=b.div`
  padding: var(--space-xl);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,kL=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),ml={type:"spring",stiffness:300,damping:30,mass:.8},CL={collapsed:{height:0,opacity:0,transition:{height:{...ml},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...ml},opacity:{duration:.2,delay:.1}}}},jL={collapsed:{rotate:0},expanded:{rotate:180}},ss=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:a,onOpenChange:o,collapseOnClickOutside:s=!1,children:u})=>{const[c,d]=w.useState(i),f=w.useRef(null),p=a!==void 0,m=p?a:c,x=()=>{const y=!m;p?o==null||o(y):d(y)};return w.useEffect(()=>{if(!s||!m)return;const y=S=>{f.current&&!f.current.contains(S.target)&&(p?o==null||o(!1):d(!1))};return document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y)}},[s,m,p,o]),l.jsxs(pL,{ref:f,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...ml,delay:.05},children:[l.jsxs(hL,{type:"button",onClick:x,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(mL,{children:[l.jsx(gL,{$accent:n,children:t}),l.jsx(vL,{children:e})]}),l.jsxs(yL,{children:[l.jsx(Pe,{mode:"wait",children:r!==void 0&&l.jsx(xL,{$accent:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:r},r)}),l.jsx(wL,{$accent:n,animate:m?"expanded":"collapsed",variants:jL,transition:ml,children:l.jsx(kL,{})})]})]}),l.jsx(Pe,{initial:!1,children:m&&l.jsx(SL,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:CL,children:l.jsx(bL,{children:u})},"content")})]})},TL=b(I.div)`
  min-height: 100vh;
  padding-top: calc(var(--space-2xl) + 80px);
  padding-bottom: var(--space-3xl);

  @media (max-width: 1023px) {
    padding-top: calc(var(--space-xl) + 80px);
    padding-bottom: var(--space-2xl);
  }

  @media (max-width: 640px) {
    padding-top: var(--space-lg);
    padding-bottom: calc(var(--space-xl) + 80px);
  }
`,PL=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,DL=b.div`
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
`,EL=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-xl));
  }
`,AL=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,_L=b(I.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 500px) {
    gap: var(--space-md);
  }
`,IL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,LL=b.div`
  display: flex;
  gap: var(--space-sm);
`,o0=b(I.button)`
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
`,OL=b(I.button)`
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
`,RL=b.input`
  display: none;
`,ML=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),NL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),$L=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),VL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),BL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),l.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),FL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),zL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),As={type:"spring",stiffness:300,damping:30,mass:.8},WL={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},vc={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:As}},UL=()=>{const[e,t]=w.useState(Ar(new Date)),[n,r]=w.useState([]),[i,a]=w.useState({}),[o,s]=w.useState({}),[u,c]=w.useState(!1),d=w.useRef(null);w.useEffect(()=>{const v=d4(),k=f4(),C=p4();r(v),a(k),s(C)},[]);const f=w.useMemo(()=>y4(n,e,i,o),[e,n,i,o]),p=w.useMemo(()=>f.filter(v=>v.account.type==="credit_card"),[f]),m=w.useCallback(v=>{r(k=>{const C=[...k,v];return requestAnimationFrame(()=>uc(C)),C})},[]),x=w.useCallback(v=>{r(k=>{const C=k.filter(j=>j.id!==v);return requestAnimationFrame(()=>uc(C)),C})},[]),y=w.useCallback((v,k)=>{a(v),s(k),requestAnimationFrame(()=>{Av(v),_v(k)})},[]),S=w.useCallback(()=>{k4(n,i,o)},[n,i,o]),g=w.useCallback(()=>{var v;(v=d.current)==null||v.click()},[]),h=w.useCallback(v=>{var j;const k=(j=v.target.files)==null?void 0:j[0];if(!k)return;const C=new FileReader;C.onload=T=>{var D;const P=(D=T.target)==null?void 0:D.result,A=j4(P);A?window.confirm(`Import backup from ${new Date(A.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${A.transactions.length} transactions
• Initial balances and CC bills

This action cannot be undone.`)&&(r(A.transactions),a(A.initialBalances),s(A.initialCCBills),uc(A.transactions),Av(A.initialBalances),_v(A.initialCCBills)):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},C.readAsText(k),v.target.value=""},[]);return l.jsxs(TL,{variants:WL,initial:"hidden",animate:"visible",children:[l.jsxs($w,{$maxWidth:"wide",children:[l.jsxs(PL,{variants:vc,children:[l.jsx(D_,{selectedDate:e,onDateChange:t}),l.jsx(ss,{title:"Summary",icon:l.jsx(BL,{}),accent:"green",children:l.jsx(Y_,{balances:f})})]}),l.jsxs(DL,{children:[l.jsx(EL,{variants:vc,children:l.jsx(ss,{title:"Add Transaction",icon:l.jsx(FL,{}),accent:"orange",children:l.jsx(mI,{onAddTransaction:m,defaultDate:e})})}),l.jsxs(AL,{variants:vc,children:[l.jsx(ss,{title:"Credit Cards",icon:l.jsx(zL,{}),accent:"pink",badge:p.length,children:l.jsx(_L,{children:p.map((v,k)=>l.jsx(B_,{accountBalance:v,index:k},v.account.id))})}),l.jsx(qI,{transactions:n,onDeleteTransaction:x,selectedDate:e}),l.jsx(ss,{title:"Manage Data",icon:l.jsx(VL,{}),accent:"purple",defaultOpen:!1,children:l.jsxs(IL,{children:[l.jsxs(OL,{type:"button",onClick:()=>c(!0),whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:As,children:[l.jsx(ML,{}),"Set Initial Balances"]}),l.jsxs(LL,{children:[l.jsxs(o0,{type:"button",$variant:"secondary",onClick:S,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:As,children:[l.jsx(NL,{}),"Export"]}),l.jsxs(o0,{type:"button",$variant:"secondary",onClick:g,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:As,children:[l.jsx($L,{}),"Import"]})]})]})}),l.jsx(RL,{ref:d,type:"file",accept:".json",onChange:h})]})]})]}),l.jsx(fL,{isOpen:u,onClose:()=>c(!1),initialBalances:i,initialCCBills:o,onSave:y})]})},HL=b.div`
  min-height: 100vh;
  position: relative;
`,YL=b.main`
  position: relative;
  z-index: 1;
`,GL=b.a`
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
`,KL=Ri`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,s0=b.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,l0=b.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${KL} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,u0=b.p`
  color: var(--text-secondary);
  font-size: 15px;
`,QL=b.button`
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
`,XL=()=>{const e=Jf(),t=Li();return w.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function ZL(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=wC();return t||!e&&!n?l.jsxs(s0,{children:[l.jsx(l0,{children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"}),l.jsx("path",{d:"M12 6c-3.314 0-6 2.686-6 6 0 1.5.5 3 1 4"}),l.jsx("path",{d:"M18 12c0-3.314-2.686-6-6-6"}),l.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]})}),l.jsx(u0,{children:"Authenticating..."})]}):n&&!e?l.jsxs(s0,{children:[l.jsx(l0,{style:{animation:"none",opacity:1},children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"}),l.jsx("path",{d:"M12 6c-3.314 0-6 2.686-6 6 0 1.5.5 3 1 4"}),l.jsx("path",{d:"M18 12c0-3.314-2.686-6-6-6"}),l.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]})}),l.jsx(u0,{children:"Authentication required to continue"}),l.jsx(QL,{onClick:r,children:"Try Again"})]}):l.jsxs(HL,{children:[l.jsx(XL,{}),l.jsx(GL,{href:"#main-content",children:"Skip to main content"}),l.jsx(Cj,{}),l.jsx(oE,{}),l.jsx(YL,{id:"main-content",children:l.jsxs(rC,{children:[l.jsx(ia,{path:"/",element:l.jsx(wE,{})}),l.jsx(ia,{path:"/tax-manager",element:l.jsx(c4,{})}),l.jsx(ia,{path:"/expense-manager",element:l.jsx(UL,{})}),l.jsx(ia,{path:"/tax-calculator",element:l.jsx(tC,{to:"/tax-manager",replace:!0})})]})})]})}function JL(){return l.jsx(cC,{basename:"/tools",children:l.jsx(hC,{children:l.jsxs(xC,{children:[l.jsx(Sj,{}),l.jsx(ZL,{})]})})})}kx(document.getElementById("root")).render(l.jsx(w.StrictMode,{children:l.jsx(JL,{})}));
