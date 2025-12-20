function G2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function K2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wv={exports:{}},yl={},bv={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),Q2=Symbol.for("react.portal"),X2=Symbol.for("react.fragment"),Z2=Symbol.for("react.strict_mode"),J2=Symbol.for("react.profiler"),q2=Symbol.for("react.provider"),eb=Symbol.for("react.context"),tb=Symbol.for("react.forward_ref"),nb=Symbol.for("react.suspense"),rb=Symbol.for("react.memo"),ib=Symbol.for("react.lazy"),gh=Symbol.iterator;function ab(e){return e===null||typeof e!="object"?null:(e=gh&&e[gh]||e["@@iterator"],typeof e=="function"?e:null)}var Sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,jv={};function Di(e,t,n){this.props=e,this.context=t,this.refs=jv,this.updater=n||Sv}Di.prototype.isReactComponent={};Di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cv(){}Cv.prototype=Di.prototype;function tf(e,t,n){this.props=e,this.context=t,this.refs=jv,this.updater=n||Sv}var nf=tf.prototype=new Cv;nf.constructor=tf;kv(nf,Di.prototype);nf.isPureReactComponent=!0;var vh=Array.isArray,Tv=Object.prototype.hasOwnProperty,rf={current:null},Pv={key:!0,ref:!0,__self:!0,__source:!0};function Ev(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Tv.call(t,r)&&!Pv.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:to,type:e,key:a,ref:o,props:i,_owner:rf.current}}function ob(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function af(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function sb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yh=/\/+/g;function uc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sb(""+e.key):t.toString(36)}function us(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case to:case Q2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+uc(o,0):r,vh(i)?(n="",e!=null&&(n=e.replace(yh,"$&/")+"/"),us(i,t,n,"",function(u){return u})):i!=null&&(af(i)&&(i=ob(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",vh(e))for(var s=0;s<e.length;s++){a=e[s];var c=r+uc(a,s);o+=us(a,t,n,c,i)}else if(c=ab(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=r+uc(a,s++),o+=us(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(e,t,n){if(e==null)return e;var r=[],i=0;return us(e,r,"","",function(a){return t.call(n,a,i++)}),r}function lb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},ds={transition:null},cb={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:ds,ReactCurrentOwner:rf};function Dv(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!af(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Di;K.Fragment=X2;K.Profiler=J2;K.PureComponent=tf;K.StrictMode=Z2;K.Suspense=nb;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cb;K.act=Dv;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kv({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=rf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Tv.call(t,c)&&!Pv.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:to,type:e.type,key:i,ref:a,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:eb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q2,_context:e},e.Consumer=e};K.createElement=Ev;K.createFactory=function(e){var t=Ev.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:tb,render:e}};K.isValidElement=af;K.lazy=function(e){return{$$typeof:ib,_payload:{_status:-1,_result:e},_init:lb}};K.memo=function(e,t){return{$$typeof:rb,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};K.unstable_act=Dv;K.useCallback=function(e,t){return qe.current.useCallback(e,t)};K.useContext=function(e){return qe.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};K.useEffect=function(e,t){return qe.current.useEffect(e,t)};K.useId=function(){return qe.current.useId()};K.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return qe.current.useMemo(e,t)};K.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};K.useRef=function(e){return qe.current.useRef(e)};K.useState=function(e){return qe.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return qe.current.useTransition()};K.version="18.3.1";bv.exports=K;var w=bv.exports;const Gt=K2(w),ub=G2({__proto__:null,default:Gt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var db=w,fb=Symbol.for("react.element"),pb=Symbol.for("react.fragment"),hb=Object.prototype.hasOwnProperty,mb=db.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gb={key:!0,ref:!0,__self:!0,__source:!0};function Av(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)hb.call(t,r)&&!gb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fb,type:e,key:a,ref:o,props:i,_owner:mb.current}}yl.Fragment=pb;yl.jsx=Av;yl.jsxs=Av;wv.exports=yl;var l=wv.exports,_v={exports:{}},vt={},Iv={exports:{}},Lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,_){var M=A.length;A.push(_);e:for(;0<M;){var U=M-1>>>1,H=A[U];if(0<i(H,_))A[U]=_,A[M]=H,M=U;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var _=A[0],M=A.pop();if(M!==_){A[0]=M;e:for(var U=0,H=A.length,ee=H>>>1;U<ee;){var we=2*(U+1)-1,Be=A[we],ge=we+1,Ke=A[ge];if(0>i(Be,M))ge<H&&0>i(Ke,Be)?(A[U]=Ke,A[ge]=M,U=ge):(A[U]=Be,A[we]=M,U=we);else if(ge<H&&0>i(Ke,M))A[U]=Ke,A[ge]=M,U=ge;else break e}}return _}function i(A,_){var M=A.sortIndex-_.sortIndex;return M!==0?M:A.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],d=1,f=null,p=3,m=!1,x=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=A)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function k(A){if(y=!1,v(A),!x)if(n(c)!==null)x=!0,B(j);else{var _=n(u);_!==null&&z(k,_.startTime-A)}}function j(A,_){x=!1,y&&(y=!1,g(P),P=-1),m=!0;var M=p;try{for(v(_),f=n(c);f!==null&&(!(f.expirationTime>_)||A&&!R());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var H=U(f.expirationTime<=_);_=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),v(_)}else r(c);f=n(c)}if(f!==null)var ee=!0;else{var we=n(u);we!==null&&z(k,we.startTime-_),ee=!1}return ee}finally{f=null,p=M,m=!1}}var C=!1,T=null,P=-1,L=5,O=-1;function R(){return!(e.unstable_now()-O<L)}function $(){if(T!==null){var A=e.unstable_now();O=A;var _=!0;try{_=T(!0,A)}finally{_?W():(C=!1,T=null)}}else C=!1}var W;if(typeof h=="function")W=function(){h($)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,E=V.port2;V.port1.onmessage=$,W=function(){E.postMessage(null)}}else W=function(){S($,0)};function B(A){T=A,C||(C=!0,W())}function z(A,_){P=S(function(){A(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,B(j))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var M=p;p=_;try{return A()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,_){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=p;p=A;try{return _()}finally{p=M}},e.unstable_scheduleCallback=function(A,_,M){var U=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?U+M:U):M=U,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=M+H,A={id:d++,callback:_,priorityLevel:A,startTime:M,expirationTime:H,sortIndex:-1},M>U?(A.sortIndex=M,t(u,A),n(c)===null&&A===n(u)&&(y?(g(P),P=-1):y=!0,z(k,M-U))):(A.sortIndex=H,t(c,A),x||m||(x=!0,B(j))),A},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(A){var _=p;return function(){var M=p;p=_;try{return A.apply(this,arguments)}finally{p=M}}}})(Lv);Iv.exports=Lv;var vb=Iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb=w,mt=vb;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ov=new Set,Ea={};function Er(e,t){pi(e,t),pi(e+"Capture",t)}function pi(e,t){for(Ea[e]=t,e=0;e<t.length;e++)Ov.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,xb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xh={},wh={};function wb(e){return wu.call(wh,e)?!0:wu.call(xh,e)?!1:xb.test(e)?wh[e]=!0:(xh[e]=!0,!1)}function bb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sb(e,t,n,r){if(t===null||typeof t>"u"||bb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function sf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(of,sf);$e[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(of,sf);$e[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(of,sf);$e[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function lf(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sb(t,n,i,r)&&(n=null),r||i===null?wb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),Rv=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Nv=Symbol.for("react.offscreen"),bh=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=bh&&e[bh]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,dc;function aa(e){if(dc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dc=t&&t[1]||""}return`
`+dc+e}var fc=!1;function pc(e,t){if(!e||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?aa(e):""}function kb(e){switch(e.tag){case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return e=pc(e.type,!1),e;case 11:return e=pc(e.type.render,!1),e;case 1:return e=pc(e.type,!0),e;default:return""}}function ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case $r:return"Portal";case bu:return"Profiler";case cf:return"StrictMode";case Su:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rv:return(e.displayName||"Context")+".Consumer";case Mv:return(e._context.displayName||"Context")+".Provider";case uf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case df:return t=e.displayName||null,t!==null?t:ju(e.type)||"Memo";case Cn:t=e._payload,e=e._init;try{return ju(e(t))}catch{}}return null}function jb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(t);case 8:return t===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $v(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cb(e){var t=$v(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=Cb(e))}function Bv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$v(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cu(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fv(e,t){t=t.checked,t!=null&&lf(e,"checked",t,!1)}function Tu(e,t){Fv(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pu(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pu(e,t,n){(t!=="number"||Ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(oa(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function Vv(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,Wv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tb=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(e){Tb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ha[t]=ha[e]})});function Uv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ha.hasOwnProperty(e)&&ha[e]?(""+t).trim():t+"px"}function Hv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pb=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(e,t){if(t){if(Pb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function _u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function ff(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lu=null,si=null,li=null;function Th(e){if(e=io(e)){if(typeof Lu!="function")throw Error(D(280));var t=e.stateNode;t&&(t=kl(t),Lu(e.stateNode,e.type,t))}}function Yv(e){si?li?li.push(e):li=[e]:si=e}function Gv(){if(si){var e=si,t=li;if(li=si=null,Th(e),t)for(e=0;e<t.length;e++)Th(t[e])}}function Kv(e,t){return e(t)}function Qv(){}var hc=!1;function Xv(e,t,n){if(hc)return e(t,n);hc=!0;try{return Kv(e,t,n)}finally{hc=!1,(si!==null||li!==null)&&(Qv(),Gv())}}function Aa(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Ou=!1;if(ln)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Ou=!1}function Eb(e,t,n,r,i,a,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ma=!1,Os=null,Ms=!1,Mu=null,Db={onError:function(e){ma=!0,Os=e}};function Ab(e,t,n,r,i,a,o,s,c){ma=!1,Os=null,Eb.apply(Db,arguments)}function _b(e,t,n,r,i,a,o,s,c){if(Ab.apply(this,arguments),ma){if(ma){var u=Os;ma=!1,Os=null}else throw Error(D(198));Ms||(Ms=!0,Mu=u)}}function Dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ph(e){if(Dr(e)!==e)throw Error(D(188))}function Ib(e){var t=e.alternate;if(!t){if(t=Dr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ph(i),e;if(a===r)return Ph(i),t;a=a.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Jv(e){return e=Ib(e),e!==null?qv(e):null}function qv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qv(e);if(t!==null)return t;e=e.sibling}return null}var ey=mt.unstable_scheduleCallback,Eh=mt.unstable_cancelCallback,Lb=mt.unstable_shouldYield,Ob=mt.unstable_requestPaint,Se=mt.unstable_now,Mb=mt.unstable_getCurrentPriorityLevel,pf=mt.unstable_ImmediatePriority,ty=mt.unstable_UserBlockingPriority,Rs=mt.unstable_NormalPriority,Rb=mt.unstable_LowPriority,ny=mt.unstable_IdlePriority,xl=null,Kt=null;function Nb(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Fb,$b=Math.log,Bb=Math.LN2;function Fb(e){return e>>>=0,e===0?32:31-($b(e)/Bb|0)|0}var jo=64,Co=4194304;function sa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=sa(s):(a&=o,a!==0&&(r=sa(a)))}else o=n&~i,o!==0?r=sa(o):a!==0&&(r=sa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?(!(s&n)||s&r)&&(i[o]=Vb(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ry(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function mc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Wb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function hf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function iy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ay,mf,oy,sy,ly,Nu=!1,To=[],In=null,Ln=null,On=null,_a=new Map,Ia=new Map,Pn=[],Ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":_a.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(t.pointerId)}}function Ui(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&mf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hb(e,t,n,r,i){switch(t){case"focusin":return In=Ui(In,e,t,n,r,i),!0;case"dragenter":return Ln=Ui(Ln,e,t,n,r,i),!0;case"mouseover":return On=Ui(On,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return _a.set(a,Ui(_a.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ia.set(a,Ui(Ia.get(a)||null,e,t,n,r,i)),!0}return!1}function cy(e){var t=cr(e.target);if(t!==null){var n=Dr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zv(n),t!==null){e.blockedOn=t,ly(e.priority,function(){oy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Iu=r,n.target.dispatchEvent(r),Iu=null}else return t=io(n),t!==null&&mf(t),e.blockedOn=n,!1;t.shift()}return!0}function Ah(e,t,n){fs(e)&&n.delete(t)}function Yb(){Nu=!1,In!==null&&fs(In)&&(In=null),Ln!==null&&fs(Ln)&&(Ln=null),On!==null&&fs(On)&&(On=null),_a.forEach(Ah),Ia.forEach(Ah)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,Nu||(Nu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Yb)))}function La(e){function t(i){return Hi(i,e)}if(0<To.length){Hi(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Hi(In,e),Ln!==null&&Hi(Ln,e),On!==null&&Hi(On,e),_a.forEach(t),Ia.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)cy(n),n.blockedOn===null&&Pn.shift()}var ci=pn.ReactCurrentBatchConfig,$s=!0;function Gb(e,t,n,r){var i=J,a=ci.transition;ci.transition=null;try{J=1,gf(e,t,n,r)}finally{J=i,ci.transition=a}}function Kb(e,t,n,r){var i=J,a=ci.transition;ci.transition=null;try{J=4,gf(e,t,n,r)}finally{J=i,ci.transition=a}}function gf(e,t,n,r){if($s){var i=$u(e,t,n,r);if(i===null)Cc(e,t,r,Bs,n),Dh(e,r);else if(Hb(i,e,t,n,r))r.stopPropagation();else if(Dh(e,r),t&4&&-1<Ub.indexOf(e)){for(;i!==null;){var a=io(i);if(a!==null&&ay(a),a=$u(e,t,n,r),a===null&&Cc(e,t,r,Bs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cc(e,t,r,null,n)}}var Bs=null;function $u(e,t,n,r){if(Bs=null,e=ff(r),e=cr(e),e!==null)if(t=Dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bs=e,null}function uy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mb()){case pf:return 1;case ty:return 4;case Rs:case Rb:return 16;case ny:return 536870912;default:return 16}default:return 16}}var Dn=null,vf=null,ps=null;function dy(){if(ps)return ps;var e,t=vf,n=t.length,r,i="value"in Dn?Dn.value:Dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ps=i.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function _h(){return!1}function yt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Po:_h,this.isPropagationStopped=_h,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=yt(Ai),ro=me({},Ai,{view:0,detail:0}),Qb=yt(ro),gc,vc,Yi,wl=me({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(gc=e.screenX-Yi.screenX,vc=e.screenY-Yi.screenY):vc=gc=0,Yi=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:vc}}),Ih=yt(wl),Xb=me({},wl,{dataTransfer:0}),Zb=yt(Xb),Jb=me({},ro,{relatedTarget:0}),yc=yt(Jb),qb=me({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=yt(qb),tS=me({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nS=yt(tS),rS=me({},Ai,{data:0}),Lh=yt(rS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oS[e])?!!t[e]:!1}function xf(){return sS}var lS=me({},ro,{key:function(e){if(e.key){var t=iS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cS=yt(lS),uS=me({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=yt(uS),dS=me({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),fS=yt(dS),pS=me({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=yt(pS),mS=me({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gS=yt(mS),vS=[9,13,27,32],wf=ln&&"CompositionEvent"in window,ga=null;ln&&"documentMode"in document&&(ga=document.documentMode);var yS=ln&&"TextEvent"in window&&!ga,fy=ln&&(!wf||ga&&8<ga&&11>=ga),Mh=" ",Rh=!1;function py(e,t){switch(e){case"keyup":return vS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function xS(e,t){switch(e){case"compositionend":return hy(t);case"keypress":return t.which!==32?null:(Rh=!0,Mh);case"textInput":return e=t.data,e===Mh&&Rh?null:e;default:return null}}function wS(e,t){if(Fr)return e==="compositionend"||!wf&&py(e,t)?(e=dy(),ps=vf=Dn=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fy&&t.locale!=="ko"?null:t.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bS[e.type]:t==="textarea"}function my(e,t,n,r){Yv(r),t=Fs(t,"onChange"),0<t.length&&(n=new yf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var va=null,Oa=null;function SS(e){Ty(e,0)}function bl(e){var t=Wr(e);if(Bv(t))return e}function kS(e,t){if(e==="change")return t}var gy=!1;if(ln){var xc;if(ln){var wc="oninput"in document;if(!wc){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),wc=typeof $h.oninput=="function"}xc=wc}else xc=!1;gy=xc&&(!document.documentMode||9<document.documentMode)}function Bh(){va&&(va.detachEvent("onpropertychange",vy),Oa=va=null)}function vy(e){if(e.propertyName==="value"&&bl(Oa)){var t=[];my(t,Oa,e,ff(e)),Xv(SS,t)}}function jS(e,t,n){e==="focusin"?(Bh(),va=t,Oa=n,va.attachEvent("onpropertychange",vy)):e==="focusout"&&Bh()}function CS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(Oa)}function TS(e,t){if(e==="click")return bl(t)}function PS(e,t){if(e==="input"||e==="change")return bl(t)}function ES(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:ES;function Ma(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wu.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function Fh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vh(e,t){var n=Fh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function yy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xy(){for(var e=window,t=Ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ls(e.document)}return t}function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function DS(e){var t=xy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yy(n.ownerDocument.documentElement,n)){if(r!==null&&bf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Vh(n,a);var o=Vh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var AS=ln&&"documentMode"in document&&11>=document.documentMode,Vr=null,Bu=null,ya=null,Fu=!1;function zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||Vr==null||Vr!==Ls(r)||(r=Vr,"selectionStart"in r&&bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ya&&Ma(ya,r)||(ya=r,r=Fs(Bu,"onSelect"),0<r.length&&(t=new yf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},bc={},wy={};ln&&(wy=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Sl(e){if(bc[e])return bc[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wy)return bc[e]=t[n];return e}var by=Sl("animationend"),Sy=Sl("animationiteration"),ky=Sl("animationstart"),jy=Sl("transitionend"),Cy=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){Cy.set(e,t),Er(t,[e])}for(var Sc=0;Sc<Wh.length;Sc++){var kc=Wh[Sc],_S=kc.toLowerCase(),IS=kc[0].toUpperCase()+kc.slice(1);Gn(_S,"on"+IS)}Gn(by,"onAnimationEnd");Gn(Sy,"onAnimationIteration");Gn(ky,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(jy,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Uh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_b(r,t,void 0,e),e.currentTarget=null}function Ty(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;Uh(i,s,u),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;Uh(i,s,u),a=c}}}if(Ms)throw e=Mu,Ms=!1,Mu=null,e}function ne(e,t){var n=t[Hu];n===void 0&&(n=t[Hu]=new Set);var r=e+"__bubble";n.has(r)||(Py(t,e,2,!1),n.add(r))}function jc(e,t,n){var r=0;t&&(r|=4),Py(n,e,r,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Ra(e){if(!e[Do]){e[Do]=!0,Ov.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||jc(n,!1,e),jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,jc("selectionchange",!1,t))}}function Py(e,t,n,r){switch(uy(t)){case 1:var i=Gb;break;case 4:i=Kb;break;default:i=gf}n=i.bind(null,t,n,e),i=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=cr(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Xv(function(){var u=a,d=ff(n),f=[];e:{var p=Cy.get(e);if(p!==void 0){var m=yf,x=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":m=cS;break;case"focusin":x="focus",m=yc;break;case"focusout":x="blur",m=yc;break;case"beforeblur":case"afterblur":m=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=fS;break;case by:case Sy:case ky:m=eS;break;case jy:m=hS;break;case"scroll":m=Qb;break;case"wheel":m=gS;break;case"copy":case"cut":case"paste":m=nS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Oh}var y=(t&4)!==0,S=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var h=u,v;h!==null;){v=h;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Aa(h,g),k!=null&&y.push(Na(h,k,v)))),S)break;h=h.return}0<y.length&&(p=new m(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Iu&&(x=n.relatedTarget||n.fromElement)&&(cr(x)||x[cn]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?cr(x):null,x!==null&&(S=Dr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(y=Ih,k="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Oh,k="onPointerLeave",g="onPointerEnter",h="pointer"),S=m==null?p:Wr(m),v=x==null?p:Wr(x),p=new y(k,h+"leave",m,n,d),p.target=S,p.relatedTarget=v,k=null,cr(d)===u&&(y=new y(g,h+"enter",x,n,d),y.target=v,y.relatedTarget=S,k=y),S=k,m&&x)t:{for(y=m,g=x,h=0,v=y;v;v=Or(v))h++;for(v=0,k=g;k;k=Or(k))v++;for(;0<h-v;)y=Or(y),h--;for(;0<v-h;)g=Or(g),v--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Or(y),g=Or(g)}y=null}else y=null;m!==null&&Hh(f,p,m,y,!1),x!==null&&S!==null&&Hh(f,S,x,y,!0)}}e:{if(p=u?Wr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var j=kS;else if(Nh(p))if(gy)j=PS;else{j=CS;var C=jS}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=TS);if(j&&(j=j(e,u))){my(f,j,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Pu(p,"number",p.value)}switch(C=u?Wr(u):window,e){case"focusin":(Nh(C)||C.contentEditable==="true")&&(Vr=C,Bu=u,ya=null);break;case"focusout":ya=Bu=Vr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,zh(f,n,d);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":zh(f,n,d)}var T;if(wf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fr?py(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(fy&&n.locale!=="ko"&&(Fr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fr&&(T=dy()):(Dn=d,vf="value"in Dn?Dn.value:Dn.textContent,Fr=!0)),C=Fs(u,P),0<C.length&&(P=new Lh(P,e,null,n,d),f.push({event:P,listeners:C}),T?P.data=T:(T=hy(n),T!==null&&(P.data=T)))),(T=yS?xS(e,n):wS(e,n))&&(u=Fs(u,"onBeforeInput"),0<u.length&&(d=new Lh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}Ty(f,t)})}function Na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Aa(e,n),a!=null&&r.unshift(Na(e,a,i)),a=Aa(e,t),a!=null&&r.push(Na(e,a,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Aa(n,a),c!=null&&o.unshift(Na(n,c,s))):i||(c=Aa(n,a),c!=null&&o.push(Na(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var OS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function Yh(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(MS,"")}function Ao(e,t,n){if(t=Yh(t),Yh(e)!==t&&n)throw Error(D(425))}function Vs(){}var Vu=null,zu=null;function Wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,NS=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(e){return Gh.resolve(null).then(e).catch($S)}:Uu;function $S(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),La(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);La(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _i=Math.random().toString(36).slice(2),Yt="__reactFiber$"+_i,$a="__reactProps$"+_i,cn="__reactContainer$"+_i,Hu="__reactEvents$"+_i,BS="__reactListeners$"+_i,FS="__reactHandles$"+_i;function cr(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kh(e);e!==null;){if(n=e[Yt])return n;e=Kh(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[Yt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function kl(e){return e[$a]||null}var Yu=[],Ur=-1;function Kn(e){return{current:e}}function ie(e){0>Ur||(e.current=Yu[Ur],Yu[Ur]=null,Ur--)}function q(e,t){Ur++,Yu[Ur]=e.current,e.current=t}var Un={},Ge=Kn(Un),at=Kn(!1),kr=Un;function hi(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function zs(){ie(at),ie(Ge)}function Qh(e,t,n){if(Ge.current!==Un)throw Error(D(168));q(Ge,t),q(at,n)}function Ey(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,jb(e)||"Unknown",i));return me({},n,r)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,kr=Ge.current,q(Ge,e),q(at,at.current),!0}function Xh(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Ey(e,t,kr),r.__reactInternalMemoizedMergedChildContext=e,ie(at),ie(Ge),q(Ge,e)):ie(at),q(at,n)}var tn=null,jl=!1,Pc=!1;function Dy(e){tn===null?tn=[e]:tn.push(e)}function VS(e){jl=!0,Dy(e)}function Qn(){if(!Pc&&tn!==null){Pc=!0;var e=0,t=J;try{var n=tn;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tn=null,jl=!1}catch(i){throw tn!==null&&(tn=tn.slice(e+1)),ey(pf,Qn),i}finally{J=t,Pc=!1}}return null}var Hr=[],Yr=0,Us=null,Hs=0,St=[],kt=0,jr=null,nn=1,rn="";function ar(e,t){Hr[Yr++]=Hs,Hr[Yr++]=Us,Us=e,Hs=t}function Ay(e,t,n){St[kt++]=nn,St[kt++]=rn,St[kt++]=jr,jr=e;var r=nn;e=rn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nn=1<<32-Nt(t)+i|n<<i|r,rn=a+e}else nn=1<<a|n<<i|r,rn=e}function Sf(e){e.return!==null&&(ar(e,1),Ay(e,1,0))}function kf(e){for(;e===Us;)Us=Hr[--Yr],Hr[Yr]=null,Hs=Hr[--Yr],Hr[Yr]=null;for(;e===jr;)jr=St[--kt],St[kt]=null,rn=St[--kt],St[kt]=null,nn=St[--kt],St[kt]=null}var pt=null,ft=null,ce=!1,Rt=null;function _y(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ft=null,!0):!1;default:return!1}}function Gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ku(e){if(ce){var t=ft;if(t){var n=t;if(!Zh(e,t)){if(Gu(e))throw Error(D(418));t=Mn(n.nextSibling);var r=pt;t&&Zh(e,t)?_y(r,n):(e.flags=e.flags&-4097|2,ce=!1,pt=e)}}else{if(Gu(e))throw Error(D(418));e.flags=e.flags&-4097|2,ce=!1,pt=e}}}function Jh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function _o(e){if(e!==pt)return!1;if(!ce)return Jh(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wu(e.type,e.memoizedProps)),t&&(t=ft)){if(Gu(e))throw Iy(),Error(D(418));for(;t;)_y(e,t),t=Mn(t.nextSibling)}if(Jh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?Mn(e.stateNode.nextSibling):null;return!0}function Iy(){for(var e=ft;e;)e=Mn(e.nextSibling)}function mi(){ft=pt=null,ce=!1}function jf(e){Rt===null?Rt=[e]:Rt.push(e)}var zS=pn.ReactCurrentBatchConfig;function Gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qh(e){var t=e._init;return t(e._payload)}function Ly(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Bn(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,v,k){return h===null||h.tag!==6?(h=Oc(v,g.mode,k),h.return=g,h):(h=i(h,v),h.return=g,h)}function c(g,h,v,k){var j=v.type;return j===Br?d(g,h,v.props.children,k,v.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Cn&&qh(j)===h.type)?(k=i(h,v.props),k.ref=Gi(g,h,v),k.return=g,k):(k=bs(v.type,v.key,v.props,null,g.mode,k),k.ref=Gi(g,h,v),k.return=g,k)}function u(g,h,v,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Mc(v,g.mode,k),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,k,j){return h===null||h.tag!==7?(h=vr(v,g.mode,k,j),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Oc(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case bo:return v=bs(h.type,h.key,h.props,null,g.mode,v),v.ref=Gi(g,null,h),v.return=g,v;case $r:return h=Mc(h,g.mode,v),h.return=g,h;case Cn:var k=h._init;return f(g,k(h._payload),v)}if(oa(h)||zi(h))return h=vr(h,g.mode,v,null),h.return=g,h;Io(g,h)}return null}function p(g,h,v,k){var j=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:s(g,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return v.key===j?c(g,h,v,k):null;case $r:return v.key===j?u(g,h,v,k):null;case Cn:return j=v._init,p(g,h,j(v._payload),k)}if(oa(v)||zi(v))return j!==null?null:d(g,h,v,k,null);Io(g,v)}return null}function m(g,h,v,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,s(h,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case bo:return g=g.get(k.key===null?v:k.key)||null,c(h,g,k,j);case $r:return g=g.get(k.key===null?v:k.key)||null,u(h,g,k,j);case Cn:var C=k._init;return m(g,h,v,C(k._payload),j)}if(oa(k)||zi(k))return g=g.get(v)||null,d(h,g,k,j,null);Io(h,k)}return null}function x(g,h,v,k){for(var j=null,C=null,T=h,P=h=0,L=null;T!==null&&P<v.length;P++){T.index>P?(L=T,T=null):L=T.sibling;var O=p(g,T,v[P],k);if(O===null){T===null&&(T=L);break}e&&T&&O.alternate===null&&t(g,T),h=a(O,h,P),C===null?j=O:C.sibling=O,C=O,T=L}if(P===v.length)return n(g,T),ce&&ar(g,P),j;if(T===null){for(;P<v.length;P++)T=f(g,v[P],k),T!==null&&(h=a(T,h,P),C===null?j=T:C.sibling=T,C=T);return ce&&ar(g,P),j}for(T=r(g,T);P<v.length;P++)L=m(T,g,P,v[P],k),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?P:L.key),h=a(L,h,P),C===null?j=L:C.sibling=L,C=L);return e&&T.forEach(function(R){return t(g,R)}),ce&&ar(g,P),j}function y(g,h,v,k){var j=zi(v);if(typeof j!="function")throw Error(D(150));if(v=j.call(v),v==null)throw Error(D(151));for(var C=j=null,T=h,P=h=0,L=null,O=v.next();T!==null&&!O.done;P++,O=v.next()){T.index>P?(L=T,T=null):L=T.sibling;var R=p(g,T,O.value,k);if(R===null){T===null&&(T=L);break}e&&T&&R.alternate===null&&t(g,T),h=a(R,h,P),C===null?j=R:C.sibling=R,C=R,T=L}if(O.done)return n(g,T),ce&&ar(g,P),j;if(T===null){for(;!O.done;P++,O=v.next())O=f(g,O.value,k),O!==null&&(h=a(O,h,P),C===null?j=O:C.sibling=O,C=O);return ce&&ar(g,P),j}for(T=r(g,T);!O.done;P++,O=v.next())O=m(T,g,P,O.value,k),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?P:O.key),h=a(O,h,P),C===null?j=O:C.sibling=O,C=O);return e&&T.forEach(function($){return t(g,$)}),ce&&ar(g,P),j}function S(g,h,v,k){if(typeof v=="object"&&v!==null&&v.type===Br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:e:{for(var j=v.key,C=h;C!==null;){if(C.key===j){if(j=v.type,j===Br){if(C.tag===7){n(g,C.sibling),h=i(C,v.props.children),h.return=g,g=h;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Cn&&qh(j)===C.type){n(g,C.sibling),h=i(C,v.props),h.ref=Gi(g,C,v),h.return=g,g=h;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===Br?(h=vr(v.props.children,g.mode,k,v.key),h.return=g,g=h):(k=bs(v.type,v.key,v.props,null,g.mode,k),k.ref=Gi(g,h,v),k.return=g,g=k)}return o(g);case $r:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Mc(v,g.mode,k),h.return=g,g=h}return o(g);case Cn:return C=v._init,S(g,h,C(v._payload),k)}if(oa(v))return x(g,h,v,k);if(zi(v))return y(g,h,v,k);Io(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=Oc(v,g.mode,k),h.return=g,g=h),o(g)):n(g,h)}return S}var gi=Ly(!0),Oy=Ly(!1),Ys=Kn(null),Gs=null,Gr=null,Cf=null;function Tf(){Cf=Gr=Gs=null}function Pf(e){var t=Ys.current;ie(Ys),e._currentValue=t}function Qu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ui(e,t){Gs=e,Cf=Gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Cf!==e)if(e={context:e,memoizedValue:t,next:null},Gr===null){if(Gs===null)throw Error(D(308));Gr=e,Gs.dependencies={lanes:0,firstContext:e}}else Gr=Gr.next=e;return t}var ur=null;function Ef(e){ur===null?ur=[e]:ur.push(e)}function My(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ef(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tn=!1;function Df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ry(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,Ef(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hf(e,n)}}function em(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,r){var i=e.updateQueue;Tn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(a!==null){var f=i.baseState;o=0,d=u=c=null,s=a;do{var p=s.lane,m=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(p=t,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(m,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(m,f,p):x,p==null)break e;f=me({},f,p);break e;case 2:Tn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Tr|=o,e.lanes=o,e.memoizedState=f}}function tm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ao={},Qt=Kn(ao),Ba=Kn(ao),Fa=Kn(ao);function dr(e){if(e===ao)throw Error(D(174));return e}function Af(e,t){switch(q(Fa,t),q(Ba,e),q(Qt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Du(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Du(t,e)}ie(Qt),q(Qt,t)}function vi(){ie(Qt),ie(Ba),ie(Fa)}function Ny(e){dr(Fa.current);var t=dr(Qt.current),n=Du(t,e.type);t!==n&&(q(Ba,e),q(Qt,n))}function _f(e){Ba.current===e&&(ie(Qt),ie(Ba))}var fe=Kn(0);function Qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ec=[];function If(){for(var e=0;e<Ec.length;e++)Ec[e]._workInProgressVersionPrimary=null;Ec.length=0}var gs=pn.ReactCurrentDispatcher,Dc=pn.ReactCurrentBatchConfig,Cr=0,he=null,De=null,_e=null,Xs=!1,xa=!1,Va=0,WS=0;function Ve(){throw Error(D(321))}function Lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function Of(e,t,n,r,i,a){if(Cr=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gs.current=e===null||e.memoizedState===null?GS:KS,e=n(r,i),xa){a=0;do{if(xa=!1,Va=0,25<=a)throw Error(D(301));a+=1,_e=De=null,t.updateQueue=null,gs.current=QS,e=n(r,i)}while(xa)}if(gs.current=Zs,t=De!==null&&De.next!==null,Cr=0,_e=De=he=null,Xs=!1,t)throw Error(D(300));return e}function Mf(){var e=Va!==0;return Va=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?he.memoizedState=_e=e:_e=_e.next=e,_e}function Pt(){if(De===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=_e===null?he.memoizedState:_e.next;if(t!==null)_e=t,De=e;else{if(e===null)throw Error(D(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},_e===null?he.memoizedState=_e=e:_e=_e.next=e}return _e}function za(e,t){return typeof t=="function"?t(e):t}function Ac(e){var t=Pt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,c=null,u=a;do{var d=u.lane;if((Cr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,o=r):c=c.next=f,he.lanes|=d,Tr|=d}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=s,Ft(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,he.lanes|=a,Tr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _c(e){var t=Pt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ft(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $y(){}function By(e,t){var n=he,r=Pt(),i=t(),a=!Ft(r.memoizedState,i);if(a&&(r.memoizedState=i,it=!0),r=r.queue,Rf(zy.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Wa(9,Vy.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(D(349));Cr&30||Fy(n,t,i)}return i}function Fy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vy(e,t,n,r){t.value=n,t.getSnapshot=r,Wy(t)&&Uy(e)}function zy(e,t,n){return n(function(){Wy(t)&&Uy(e)})}function Wy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function Uy(e){var t=un(e,1);t!==null&&$t(t,e,1,-1)}function nm(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=YS.bind(null,he,e),[t.memoizedState,e]}function Wa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hy(){return Pt().memoizedState}function vs(e,t,n,r){var i=Ut();he.flags|=e,i.memoizedState=Wa(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var i=Pt();r=r===void 0?null:r;var a=void 0;if(De!==null){var o=De.memoizedState;if(a=o.destroy,r!==null&&Lf(r,o.deps)){i.memoizedState=Wa(t,n,a,r);return}}he.flags|=e,i.memoizedState=Wa(1|t,n,a,r)}function rm(e,t){return vs(8390656,8,e,t)}function Rf(e,t){return Cl(2048,8,e,t)}function Yy(e,t){return Cl(4,2,e,t)}function Gy(e,t){return Cl(4,4,e,t)}function Ky(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qy(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,Ky.bind(null,t,e),n)}function Nf(){}function Xy(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zy(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jy(e,t,n){return Cr&21?(Ft(n,t)||(n=ry(),he.lanes|=n,Tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function US(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Dc.transition;Dc.transition={};try{e(!1),t()}finally{J=n,Dc.transition=r}}function qy(){return Pt().memoizedState}function HS(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ex(e))tx(t,n);else if(n=My(e,t,n,r),n!==null){var i=Je();$t(n,e,r,i),nx(n,t,r)}}function YS(e,t,n){var r=$n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(e))tx(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ft(s,o)){var c=t.interleaved;c===null?(i.next=i,Ef(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=My(e,t,i,r),n!==null&&(i=Je(),$t(n,e,r,i),nx(n,t,r))}}function ex(e){var t=e.alternate;return e===he||t!==null&&t===he}function tx(e,t){xa=Xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hf(e,n)}}var Zs={readContext:Tt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},GS={readContext:Tt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:rm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vs(4194308,4,Ky.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return vs(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HS.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:nm,useDebugValue:Nf,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=nm(!1),t=e[0];return e=US.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Ut();if(ce){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Le===null)throw Error(D(349));Cr&30||Fy(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,rm(zy.bind(null,r,a,e),[e]),r.flags|=2048,Wa(9,Vy.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Le.identifierPrefix;if(ce){var n=rn,r=nn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Va++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=WS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},KS={readContext:Tt,useCallback:Xy,useContext:Tt,useEffect:Rf,useImperativeHandle:Qy,useInsertionEffect:Yy,useLayoutEffect:Gy,useMemo:Zy,useReducer:Ac,useRef:Hy,useState:function(){return Ac(za)},useDebugValue:Nf,useDeferredValue:function(e){var t=Pt();return Jy(t,De.memoizedState,e)},useTransition:function(){var e=Ac(za)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:$y,useSyncExternalStore:By,useId:qy,unstable_isNewReconciler:!1},QS={readContext:Tt,useCallback:Xy,useContext:Tt,useEffect:Rf,useImperativeHandle:Qy,useInsertionEffect:Yy,useLayoutEffect:Gy,useMemo:Zy,useReducer:_c,useRef:Hy,useState:function(){return _c(za)},useDebugValue:Nf,useDeferredValue:function(e){var t=Pt();return De===null?t.memoizedState=e:Jy(t,De.memoizedState,e)},useTransition:function(){var e=_c(za)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:$y,useSyncExternalStore:By,useId:qy,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=$n(e),a=an(r,i);a.payload=t,n!=null&&(a.callback=n),t=Rn(e,a,i),t!==null&&($t(t,e,i,r),ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=$n(e),a=an(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Rn(e,a,i),t!==null&&($t(t,e,i,r),ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=$n(e),i=an(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&($t(t,e,r,n),ms(t,e,r))}};function im(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ma(n,r)||!Ma(i,a):!0}function rx(e,t,n){var r=!1,i=Un,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(i=ot(t)?kr:Ge.current,r=t.contextTypes,a=(r=r!=null)?hi(e,i):Un),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function am(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function Zu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Df(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Tt(a):(a=ot(t)?kr:Ge.current,i.context=hi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yi(e,t){try{var n="",r=t;do n+=kb(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ic(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function ix(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,ld=r),Ju(e,t)},n}function ax(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ju(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ju(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function om(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new XS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uk.bind(null,e,t,n),t.then(e,e))}function sm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var ZS=pn.ReactCurrentOwner,it=!1;function Ze(e,t,n,r){t.child=e===null?Oy(t,null,n,r):gi(t,e.child,n,r)}function cm(e,t,n,r,i){n=n.render;var a=t.ref;return ui(t,i),r=Of(e,t,n,r,a,i),n=Mf(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(ce&&n&&Sf(t),t.flags|=1,Ze(e,t,r,i),t.child)}function um(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Hf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ox(e,t,a,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,r)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=Bn(a,r),e.ref=t.ref,e.return=t,t.child=e}function ox(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ma(a,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,dn(e,t,i)}return qu(e,t,n,r,i)}function sx(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Qr,dt),dt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Qr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,q(Qr,dt),dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,q(Qr,dt),dt|=r;return Ze(e,t,i,n),t.child}function lx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qu(e,t,n,r,i){var a=ot(n)?kr:Ge.current;return a=hi(t,a),ui(t,i),n=Of(e,t,n,r,a,i),r=Mf(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(ce&&r&&Sf(t),t.flags|=1,Ze(e,t,n,i),t.child)}function dm(e,t,n,r,i){if(ot(n)){var a=!0;Ws(t)}else a=!1;if(ui(t,i),t.stateNode===null)ys(e,t),rx(t,n,r),Zu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tt(u):(u=ot(n)?kr:Ge.current,u=hi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==u)&&am(t,o,r,u),Tn=!1;var p=t.memoizedState;o.state=p,Ks(t,r,o,i),c=t.memoizedState,s!==r||p!==c||at.current||Tn?(typeof d=="function"&&(Xu(t,n,d,r),c=t.memoizedState),(s=Tn||im(t,n,s,r,p,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ry(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ot(t.type,s),o.props=u,f=t.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Tt(c):(c=ot(n)?kr:Ge.current,c=hi(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==c)&&am(t,o,r,c),Tn=!1,p=t.memoizedState,o.state=p,Ks(t,r,o,i);var x=t.memoizedState;s!==f||p!==x||at.current||Tn?(typeof m=="function"&&(Xu(t,n,m,r),x=t.memoizedState),(u=Tn||im(t,n,u,r,p,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ed(e,t,n,r,a,i)}function ed(e,t,n,r,i,a){lx(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Xh(t,n,!1),dn(e,t,a);r=t.stateNode,ZS.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gi(t,e.child,null,a),t.child=gi(t,null,s,a)):Ze(e,t,s,a),t.memoizedState=r.state,i&&Xh(t,n,!0),t.child}function cx(e){var t=e.stateNode;t.pendingContext?Qh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qh(e,t.context,!1),Af(e,t.containerInfo)}function fm(e,t,n,r,i){return mi(),jf(i),t.flags|=256,Ze(e,t,n,r),t.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(e){return{baseLanes:e,cachePool:null,transitions:null}}function ux(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(fe,i&1),e===null)return Ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Dl(o,r,0,null),e=vr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=nd(n),t.memoizedState=td,e):$f(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return JS(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Bn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Bn(s,a):(a=vr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=td,r}return a=e.child,e=a.sibling,r=Bn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $f(e,t){return t=Dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&jf(r),gi(t,e.child,null,n),e=$f(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function JS(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Ic(Error(D(422))),Lo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Dl({mode:"visible",children:r.children},i,0,null),a=vr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&gi(t,e.child,null,o),t.child.memoizedState=nd(o),t.memoizedState=td,a);if(!(t.mode&1))return Lo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(D(419)),r=Ic(a,r,void 0),Lo(e,t,o,r)}if(s=(o&e.childLanes)!==0,it||s){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,un(e,i),$t(r,e,i,-1))}return Uf(),r=Ic(Error(D(421))),Lo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ft=Mn(i.nextSibling),pt=t,ce=!0,Rt=null,e!==null&&(St[kt++]=nn,St[kt++]=rn,St[kt++]=jr,nn=e.id,rn=e.overflow,jr=t),t=$f(t,r.children),t.flags|=4096,t)}function pm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qu(e.return,t,n)}function Lc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function dx(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ze(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pm(e,n,t);else if(e.tag===19)pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Lc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Lc(t,!0,n,null,a);break;case"together":Lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qS(e,t,n){switch(t.tag){case 3:cx(t),mi();break;case 5:Ny(t);break;case 1:ot(t.type)&&Ws(t);break;case 4:Af(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(Ys,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?ux(e,t,n):(q(fe,fe.current&1),e=dn(e,t,n),e!==null?e.sibling:null);q(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,sx(e,t,n)}return dn(e,t,n)}var fx,rd,px,hx;fx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};px=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dr(Qt.current);var a=null;switch(n){case"input":i=Cu(e,i),r=Cu(e,r),a=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),a=[];break;case"textarea":i=Eu(e,i),r=Eu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vs)}Au(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ea.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};hx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ki(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ek(e,t,n){var r=t.pendingProps;switch(kf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ot(t.type)&&zs(),ze(t),null;case 3:return r=t.stateNode,vi(),ie(at),ie(Ge),If(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(dd(Rt),Rt=null))),rd(e,t),ze(t),null;case 5:_f(t);var i=dr(Fa.current);if(n=t.type,e!==null&&t.stateNode!=null)px(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return ze(t),null}if(e=dr(Qt.current),_o(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Yt]=t,r[$a]=a,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<la.length;i++)ne(la[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Sh(r,a),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ne("invalid",r);break;case"textarea":jh(r,a),ne("invalid",r)}Au(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ao(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ao(r.textContent,s,e),i=["children",""+s]):Ea.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":So(r),kh(r,a,!0);break;case"textarea":So(r),Ch(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Yt]=t,e[$a]=r,fx(e,t,!1,!1),t.stateNode=e;e:{switch(o=_u(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<la.length;i++)ne(la[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Sh(e,r),i=Cu(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ne("invalid",e);break;case"textarea":jh(e,r),i=Eu(e,r),ne("invalid",e);break;default:i=r}Au(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?Hv(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wv(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Da(e,c):typeof c=="number"&&Da(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ea.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ne("scroll",e):c!=null&&lf(e,a,c,o))}switch(n){case"input":So(e),kh(e,r,!1);break;case"textarea":So(e),Ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?oi(e,!!r.multiple,a,!1):r.defaultValue!=null&&oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)hx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=dr(Fa.current),dr(Qt.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(a=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return ze(t),null;case 13:if(ie(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&ft!==null&&t.mode&1&&!(t.flags&128))Iy(),mi(),t.flags|=98560,a=!1;else if(a=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(D(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(D(317));a[Yt]=t}else mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),a=!1}else Rt!==null&&(dd(Rt),Rt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Ae===0&&(Ae=3):Uf())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return vi(),rd(e,t),e===null&&Ra(t.stateNode.containerInfo),ze(t),null;case 10:return Pf(t.type._context),ze(t),null;case 17:return ot(t.type)&&zs(),ze(t),null;case 19:if(ie(fe),a=t.memoizedState,a===null)return ze(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Ki(a,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qs(e),o!==null){for(t.flags|=128,Ki(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Se()>xi&&(t.flags|=128,r=!0,Ki(a,!1),t.lanes=4194304)}else{if(!r)if(e=Qs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ki(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return ze(t),null}else 2*Se()-a.renderingStartTime>xi&&n!==1073741824&&(t.flags|=128,r=!0,Ki(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Se(),t.sibling=null,n=fe.current,q(fe,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Wf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function tk(e,t){switch(kf(t),t.tag){case 1:return ot(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),ie(at),ie(Ge),If(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _f(t),null;case 13:if(ie(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(fe),null;case 4:return vi(),null;case 10:return Pf(t.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var Oo=!1,Ue=!1,nk=typeof WeakSet=="function"?WeakSet:Set,N=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function id(e,t,n){try{n()}catch(r){xe(e,t,r)}}var hm=!1;function rk(e,t){if(Vu=$s,e=xy(),bf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++d===r&&(c=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:e,selectionRange:n},$s=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,S=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ot(t.type,y),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){xe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=hm,hm=!1,x}function wa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&id(t,n,a)}i=i.next}while(i!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ad(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mx(e){var t=e.alternate;t!==null&&(e.alternate=null,mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[$a],delete t[Hu],delete t[BS],delete t[FS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gx(e){return e.tag===5||e.tag===3||e.tag===4}function mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function od(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vs));else if(r!==4&&(e=e.child,e!==null))for(od(e,t,n),e=e.sibling;e!==null;)od(e,t,n),e=e.sibling}function sd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sd(e,t,n),e=e.sibling;e!==null;)sd(e,t,n),e=e.sibling}var Oe=null,Mt=!1;function gn(e,t,n){for(n=n.child;n!==null;)vx(e,t,n),n=n.sibling}function vx(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Ue||Kr(n,t);case 6:var r=Oe,i=Mt;Oe=null,gn(e,t,n),Oe=r,Mt=i,Oe!==null&&(Mt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Mt?(e=Oe,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),La(e)):Tc(Oe,n.stateNode));break;case 4:r=Oe,i=Mt,Oe=n.stateNode.containerInfo,Mt=!0,gn(e,t,n),Oe=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&id(n,t,o),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!Ue&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){xe(n,t,s)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,gn(e,t,n),Ue=r):gn(e,t,n);break;default:gn(e,t,n)}}function gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nk),t.forEach(function(r){var i=fk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Oe=s.stateNode,Mt=!1;break e;case 3:Oe=s.stateNode.containerInfo,Mt=!0;break e;case 4:Oe=s.stateNode.containerInfo,Mt=!0;break e}s=s.return}if(Oe===null)throw Error(D(160));vx(a,o,i),Oe=null,Mt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yx(t,e),t=t.sibling}function yx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),zt(e),r&4){try{wa(3,e,e.return),Pl(3,e)}catch(y){xe(e,e.return,y)}try{wa(5,e,e.return)}catch(y){xe(e,e.return,y)}}break;case 1:It(t,e),zt(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(It(t,e),zt(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{Da(i,"")}catch(y){xe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Fv(i,a),_u(s,o);var u=_u(s,a);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?Hv(i,f):d==="dangerouslySetInnerHTML"?Wv(i,f):d==="children"?Da(i,f):lf(i,d,f,u)}switch(s){case"input":Tu(i,a);break;case"textarea":Vv(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?oi(i,!!a.multiple,m,!1):p!==!!a.multiple&&(a.defaultValue!=null?oi(i,!!a.multiple,a.defaultValue,!0):oi(i,!!a.multiple,a.multiple?[]:"",!1))}i[$a]=a}catch(y){xe(e,e.return,y)}}break;case 6:if(It(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){xe(e,e.return,y)}}break;case 3:if(It(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{La(t.containerInfo)}catch(y){xe(e,e.return,y)}break;case 4:It(t,e),zt(e);break;case 13:It(t,e),zt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Vf=Se())),r&4&&gm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||d,It(t,e),Ue=u):It(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(p=N,m=p.child,p.tag){case 0:case 11:case 14:case 15:wa(4,p,p.return);break;case 1:Kr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){xe(r,n,y)}}break;case 5:Kr(p,p.return);break;case 22:if(p.memoizedState!==null){ym(f);continue}}m!==null?(m.return=p,N=m):ym(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Uv("display",o))}catch(y){xe(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){xe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),zt(e),r&4&&gm(e);break;case 21:break;default:It(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gx(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Da(i,""),r.flags&=-33);var a=mm(e);sd(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=mm(e);od(e,s,o);break;default:throw Error(D(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ik(e,t,n){N=e,xx(e)}function xx(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oo;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||Ue;s=Oo;var u=Ue;if(Oo=o,(Ue=c)&&!u)for(N=i;N!==null;)o=N,c=o.child,o.tag===22&&o.memoizedState!==null?xm(i):c!==null?(c.return=o,N=c):xm(i);for(;a!==null;)N=a,xx(a),a=a.sibling;N=i,Oo=s,Ue=u}vm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,N=a):vm(e)}}function vm(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&tm(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tm(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&La(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ue||t.flags&512&&ad(t)}catch(p){xe(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ym(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function xm(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xe(t,i,c)}}var a=t.return;try{ad(t)}catch(c){xe(t,a,c)}break;case 5:var o=t.return;try{ad(t)}catch(c){xe(t,o,c)}}}catch(c){xe(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var ak=Math.ceil,Js=pn.ReactCurrentDispatcher,Bf=pn.ReactCurrentOwner,Ct=pn.ReactCurrentBatchConfig,X=0,Le=null,Te=null,Ne=0,dt=0,Qr=Kn(0),Ae=0,Ua=null,Tr=0,El=0,Ff=0,ba=null,rt=null,Vf=0,xi=1/0,qt=null,qs=!1,ld=null,Nn=null,Mo=!1,An=null,el=0,Sa=0,cd=null,xs=-1,ws=0;function Je(){return X&6?Se():xs!==-1?xs:xs=Se()}function $n(e){return e.mode&1?X&2&&Ne!==0?Ne&-Ne:zS.transition!==null?(ws===0&&(ws=ry()),ws):(e=J,e!==0||(e=window.event,e=e===void 0?16:uy(e.type)),e):1}function $t(e,t,n,r){if(50<Sa)throw Sa=0,cd=null,Error(D(185));no(e,n,r),(!(X&2)||e!==Le)&&(e===Le&&(!(X&2)&&(El|=n),Ae===4&&En(e,Ne)),st(e,r),n===1&&X===0&&!(t.mode&1)&&(xi=Se()+500,jl&&Qn()))}function st(e,t){var n=e.callbackNode;zb(e,t);var r=Ns(e,e===Le?Ne:0);if(r===0)n!==null&&Eh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eh(n),t===1)e.tag===0?VS(wm.bind(null,e)):Dy(wm.bind(null,e)),NS(function(){!(X&6)&&Qn()}),n=null;else{switch(iy(r)){case 1:n=pf;break;case 4:n=ty;break;case 16:n=Rs;break;case 536870912:n=ny;break;default:n=Rs}n=Px(n,wx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wx(e,t){if(xs=-1,ws=0,X&6)throw Error(D(327));var n=e.callbackNode;if(di()&&e.callbackNode!==n)return null;var r=Ns(e,e===Le?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var i=X;X|=2;var a=Sx();(Le!==e||Ne!==t)&&(qt=null,xi=Se()+500,gr(e,t));do try{lk();break}catch(s){bx(e,s)}while(!0);Tf(),Js.current=a,X=i,Te!==null?t=0:(Le=null,Ne=0,t=Ae)}if(t!==0){if(t===2&&(i=Ru(e),i!==0&&(r=i,t=ud(e,i))),t===1)throw n=Ua,gr(e,0),En(e,r),st(e,Se()),n;if(t===6)En(e,r);else{if(i=e.current.alternate,!(r&30)&&!ok(i)&&(t=tl(e,r),t===2&&(a=Ru(e),a!==0&&(r=a,t=ud(e,a))),t===1))throw n=Ua,gr(e,0),En(e,r),st(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:or(e,rt,qt);break;case 3:if(En(e,r),(r&130023424)===r&&(t=Vf+500-Se(),10<t)){if(Ns(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Uu(or.bind(null,e,rt,qt),t);break}or(e,rt,qt);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ak(r/1960))-r,10<r){e.timeoutHandle=Uu(or.bind(null,e,rt,qt),r);break}or(e,rt,qt);break;case 5:or(e,rt,qt);break;default:throw Error(D(329))}}}return st(e,Se()),e.callbackNode===n?wx.bind(null,e):null}function ud(e,t){var n=ba;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=tl(e,t),e!==2&&(t=rt,rt=n,t!==null&&dd(t)),e}function dd(e){rt===null?rt=e:rt.push.apply(rt,e)}function ok(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ft(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~Ff,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function wm(e){if(X&6)throw Error(D(327));di();var t=Ns(e,0);if(!(t&1))return st(e,Se()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=Ru(e);r!==0&&(t=r,n=ud(e,r))}if(n===1)throw n=Ua,gr(e,0),En(e,t),st(e,Se()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,rt,qt),st(e,Se()),null}function zf(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(xi=Se()+500,jl&&Qn())}}function Pr(e){An!==null&&An.tag===0&&!(X&6)&&di();var t=X;X|=1;var n=Ct.transition,r=J;try{if(Ct.transition=null,J=1,e)return e()}finally{J=r,Ct.transition=n,X=t,!(X&6)&&Qn()}}function Wf(){dt=Qr.current,ie(Qr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,RS(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:vi(),ie(at),ie(Ge),If();break;case 5:_f(r);break;case 4:vi();break;case 13:ie(fe);break;case 19:ie(fe);break;case 10:Pf(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(Le=e,Te=e=Bn(e.current,null),Ne=dt=t,Ae=0,Ua=null,Ff=El=Tr=0,rt=ba=null,ur!==null){for(t=0;t<ur.length;t++)if(n=ur[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ur=null}return e}function bx(e,t){do{var n=Te;try{if(Tf(),gs.current=Zs,Xs){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xs=!1}if(Cr=0,_e=De=he=null,xa=!1,Va=0,Bf.current=null,n===null||n.return===null){Ae=1,Ua=t,Te=null;break}e:{var a=e,o=n.return,s=n,c=t;if(t=Ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=sm(o);if(m!==null){m.flags&=-257,lm(m,o,s,a,t),m.mode&1&&om(a,u,t),t=m,c=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(c),t.updateQueue=y}else x.add(c);break e}else{if(!(t&1)){om(a,u,t),Uf();break e}c=Error(D(426))}}else if(ce&&s.mode&1){var S=sm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),lm(S,o,s,a,t),jf(yi(c,s));break e}}a=c=yi(c,s),Ae!==4&&(Ae=2),ba===null?ba=[a]:ba.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=ix(a,c,t);em(a,g);break e;case 1:s=c;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=ax(a,s,t);em(a,k);break e}}a=a.return}while(a!==null)}jx(n)}catch(j){t=j,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Sx(){var e=Js.current;return Js.current=Zs,e===null?Zs:e}function Uf(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Le===null||!(Tr&268435455)&&!(El&268435455)||En(Le,Ne)}function tl(e,t){var n=X;X|=2;var r=Sx();(Le!==e||Ne!==t)&&(qt=null,gr(e,t));do try{sk();break}catch(i){bx(e,i)}while(!0);if(Tf(),X=n,Js.current=r,Te!==null)throw Error(D(261));return Le=null,Ne=0,Ae}function sk(){for(;Te!==null;)kx(Te)}function lk(){for(;Te!==null&&!Lb();)kx(Te)}function kx(e){var t=Tx(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?jx(e):Te=t,Bf.current=null}function jx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tk(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Te=null;return}}else if(n=ek(n,t,dt),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ae===0&&(Ae=5)}function or(e,t,n){var r=J,i=Ct.transition;try{Ct.transition=null,J=1,ck(e,t,n,r)}finally{Ct.transition=i,J=r}return null}function ck(e,t,n,r){do di();while(An!==null);if(X&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Wb(e,a),e===Le&&(Te=Le=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,Px(Rs,function(){return di(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ct.transition,Ct.transition=null;var o=J;J=1;var s=X;X|=4,Bf.current=null,rk(e,n),yx(n,e),DS(zu),$s=!!Vu,zu=Vu=null,e.current=n,ik(n),Ob(),X=s,J=o,Ct.transition=a}else e.current=n;if(Mo&&(Mo=!1,An=e,el=i),a=e.pendingLanes,a===0&&(Nn=null),Nb(n.stateNode),st(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qs)throw qs=!1,e=ld,ld=null,e;return el&1&&e.tag!==0&&di(),a=e.pendingLanes,a&1?e===cd?Sa++:(Sa=0,cd=e):Sa=0,Qn(),null}function di(){if(An!==null){var e=iy(el),t=Ct.transition,n=J;try{if(Ct.transition=null,J=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,el=0,X&6)throw Error(D(331));var i=X;for(X|=4,N=e.current;N!==null;){var a=N,o=a.child;if(N.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:wa(8,d,a)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var p=d.sibling,m=d.return;if(mx(d),d===u){N=null;break}if(p!==null){p.return=m,N=p;break}N=m}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}N=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,N=o;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:wa(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,N=g;break e}N=a.return}}var h=e.current;for(N=h;N!==null;){o=N;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,N=v;else e:for(o=h;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(j){xe(s,s.return,j)}if(s===o){N=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,N=k;break e}N=s.return}}if(X=i,Qn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{J=n,Ct.transition=t}}return!1}function bm(e,t,n){t=yi(n,t),t=ix(e,t,1),e=Rn(e,t,1),t=Je(),e!==null&&(no(e,1,t),st(e,t))}function xe(e,t,n){if(e.tag===3)bm(e,e,n);else for(;t!==null;){if(t.tag===3){bm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=yi(n,e),e=ax(t,e,1),t=Rn(t,e,1),e=Je(),t!==null&&(no(t,1,e),st(t,e));break}}t=t.return}}function uk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ne&n)===n&&(Ae===4||Ae===3&&(Ne&130023424)===Ne&&500>Se()-Vf?gr(e,0):Ff|=n),st(e,t)}function Cx(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=Je();e=un(e,t),e!==null&&(no(e,t,n),st(e,n))}function dk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cx(e,n)}function fk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Cx(e,n)}var Tx;Tx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,qS(e,t,n);it=!!(e.flags&131072)}else it=!1,ce&&t.flags&1048576&&Ay(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ys(e,t),e=t.pendingProps;var i=hi(t,Ge.current);ui(t,n),i=Of(null,t,r,e,i,n);var a=Mf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(a=!0,Ws(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Df(t),i.updater=Tl,t.stateNode=i,i._reactInternals=t,Zu(t,r,e,n),t=ed(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&Sf(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ys(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hk(r),e=Ot(r,e),i){case 0:t=qu(null,t,r,e,n);break e;case 1:t=dm(null,t,r,e,n);break e;case 11:t=cm(null,t,r,e,n);break e;case 14:t=um(null,t,r,Ot(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),dm(e,t,r,i,n);case 3:e:{if(cx(t),e===null)throw Error(D(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Ry(e,t),Ks(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=yi(Error(D(423)),t),t=fm(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(D(424)),t),t=fm(e,t,r,n,i);break e}else for(ft=Mn(t.stateNode.containerInfo.firstChild),pt=t,ce=!0,Rt=null,n=Oy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){t=dn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Ny(t),e===null&&Ku(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Wu(r,i)?o=null:a!==null&&Wu(r,a)&&(t.flags|=32),lx(e,t),Ze(e,t,o,n),t.child;case 6:return e===null&&Ku(t),null;case 13:return ux(e,t,n);case 4:return Af(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),cm(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,q(Ys,r._currentValue),r._currentValue=o,a!==null)if(Ft(a.value,o)){if(a.children===i.children&&!at.current){t=dn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=an(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Qu(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(D(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Qu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ui(t,n),i=Tt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),um(e,t,r,i,n);case 15:return ox(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ys(e,t),t.tag=1,ot(r)?(e=!0,Ws(t)):e=!1,ui(t,n),rx(t,r,i),Zu(t,r,i,n),ed(null,t,r,!0,e,n);case 19:return dx(e,t,n);case 22:return sx(e,t,n)}throw Error(D(156,t.tag))};function Px(e,t){return ey(e,t)}function pk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new pk(e,t,n,r)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hk(e){if(typeof e=="function")return Hf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uf)return 11;if(e===df)return 14}return 2}function Bn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Hf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Br:return vr(n.children,i,a,t);case cf:o=8,i|=8;break;case bu:return e=jt(12,n,t,i|2),e.elementType=bu,e.lanes=a,e;case Su:return e=jt(13,n,t,i),e.elementType=Su,e.lanes=a,e;case ku:return e=jt(19,n,t,i),e.elementType=ku,e.lanes=a,e;case Nv:return Dl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mv:o=10;break e;case Rv:o=9;break e;case uf:o=11;break e;case df:o=14;break e;case Cn:o=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=jt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function vr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Dl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=Nv,e.lanes=n,e.stateNode={isHidden:!1},e}function Oc(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Mc(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yf(e,t,n,r,i,a,o,s,c){return e=new mk(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=jt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(a),e}function gk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ex(e){if(!e)return Un;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ot(n))return Ey(e,n,t)}return t}function Dx(e,t,n,r,i,a,o,s,c){return e=Yf(n,r,!0,e,i,a,o,s,c),e.context=Ex(null),n=e.current,r=Je(),i=$n(n),a=an(r,i),a.callback=t??null,Rn(n,a,i),e.current.lanes=i,no(e,i,r),st(e,r),e}function Al(e,t,n,r){var i=t.current,a=Je(),o=$n(i);return n=Ex(n),t.context===null?t.context=n:t.pendingContext=n,t=an(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,o),e!==null&&($t(e,i,o,a),ms(e,i,o)),o}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gf(e,t){Sm(e,t),(e=e.alternate)&&Sm(e,t)}function vk(){return null}var Ax=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kf(e){this._internalRoot=e}_l.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Al(e,t,null,null)};_l.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){Al(null,e,null,null)}),t[cn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=sy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&cy(e)}};function Qf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function km(){}function yk(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=nl(o);a.call(u)}}var o=Dx(t,r,e,0,null,!1,!1,"",km);return e._reactRootContainer=o,e[cn]=o.current,Ra(e.nodeType===8?e.parentNode:e),Pr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=nl(c);s.call(u)}}var c=Yf(e,0,!1,null,null,!1,!1,"",km);return e._reactRootContainer=c,e[cn]=c.current,Ra(e.nodeType===8?e.parentNode:e),Pr(function(){Al(t,c,n,r)}),c}function Ll(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var c=nl(o);s.call(c)}}Al(t,o,e,i)}else o=yk(n,t,e,i,r);return nl(o)}ay=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sa(t.pendingLanes);n!==0&&(hf(t,n|1),st(t,Se()),!(X&6)&&(xi=Se()+500,Qn()))}break;case 13:Pr(function(){var r=un(e,1);if(r!==null){var i=Je();$t(r,e,1,i)}}),Gf(e,1)}};mf=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=Je();$t(t,e,134217728,n)}Gf(e,134217728)}};oy=function(e){if(e.tag===13){var t=$n(e),n=un(e,t);if(n!==null){var r=Je();$t(n,e,t,r)}Gf(e,t)}};sy=function(){return J};ly=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Lu=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=kl(r);if(!i)throw Error(D(90));Bv(r),Tu(r,i)}}}break;case"textarea":Vv(e,n);break;case"select":t=n.value,t!=null&&oi(e,!!n.multiple,t,!1)}};Kv=zf;Qv=Pr;var xk={usingClientEntryPoint:!1,Events:[io,Wr,kl,Yv,Gv,zf]},Qi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wk={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jv(e),e===null?null:e.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||vk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{xl=Ro.inject(wk),Kt=Ro}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xk;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(t))throw Error(D(200));return gk(e,t,null,n)};vt.createRoot=function(e,t){if(!Qf(e))throw Error(D(299));var n=!1,r="",i=Ax;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yf(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,Ra(e.nodeType===8?e.parentNode:e),new Kf(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Jv(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return Pr(e)};vt.hydrate=function(e,t,n){if(!Il(t))throw Error(D(200));return Ll(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!Qf(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Ax;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Dx(t,null,e,1,n??null,i,!1,a,o),e[cn]=t.current,Ra(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _l(t)};vt.render=function(e,t,n){if(!Il(t))throw Error(D(200));return Ll(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!Il(e))throw Error(D(40));return e._reactRootContainer?(Pr(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};vt.unstable_batchedUpdates=zf;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ll(e,t,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function _x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_x)}catch(e){console.error(e)}}_x(),_v.exports=vt;var Ix=_v.exports,Lx,jm=Ix;Lx=jm.createRoot,jm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Cm="popstate";function bk(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return fd("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rl(i)}return kk(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sk(){return Math.random().toString(36).substr(2,8)}function Tm(e,t){return{usr:e.state,key:e.key,idx:t}}function fd(e,t,n,r){return n===void 0&&(n=null),Ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ii(t):t,{state:n,key:t&&t.key||r||Sk()})}function rl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ii(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=_n.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(Ha({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=_n.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:s,location:y.location,delta:g})}function p(S,g){s=_n.Push;let h=fd(y.location,S,g);u=d()+1;let v=Tm(h,u),k=y.createHref(h);try{o.pushState(v,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}a&&c&&c({action:s,location:y.location,delta:1})}function m(S,g){s=_n.Replace;let h=fd(y.location,S,g);u=d();let v=Tm(h,u),k=y.createHref(h);o.replaceState(v,"",k),a&&c&&c({action:s,location:y.location,delta:0})}function x(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:rl(S);return h=h.replace(/ $/,"%20"),ke(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return s},get location(){return e(i,o)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Cm,f),c=S,()=>{i.removeEventListener(Cm,f),c=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let g=x(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(S){return o.go(S)}};return y}var Pm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pm||(Pm={}));function jk(e,t,n){return n===void 0&&(n="/"),Ck(e,t,n)}function Ck(e,t,n,r){let i=typeof t=="string"?Ii(t):t,a=Zf(i.pathname||"/",n);if(a==null)return null;let o=Ox(e);Tk(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let u=$k(a);s=Mk(o[c],u)}return s}function Ox(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let c={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(ke(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Fn([r,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ox(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Lk(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let c of Mx(a.path))i(a,o,c)}),t}function Mx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Mx(r.join("/")),s=[];return s.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ok(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pk=/^:[\w-]+$/,Ek=3,Dk=2,Ak=1,_k=10,Ik=-2,Em=e=>e==="*";function Lk(e,t){let n=e.split("/"),r=n.length;return n.some(Em)&&(r+=Ik),t&&(r+=Dk),n.filter(i=>!Em(i)).reduce((i,a)=>i+(Pk.test(a)?Ek:a===""?Ak:_k),r)}function Ok(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Mk(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",f=Rk({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Fn([a,f.pathname]),pathnameBase:Wk(Fn([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=Fn([a,f.pathnameBase]))}return o}function Rk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let y=s[f]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[f];return m&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Nk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $k(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Bk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fk=e=>Bk.test(e);function Vk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ii(e):e,a;if(n)if(Fk(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Xf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=Dm(n.substring(1),"/"):a=Dm(n,t)}else a=t;return{pathname:a,search:Uk(r),hash:Hk(i)}}function Dm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jf(e,t){let n=zk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ii(e):(i=Ha({},e),ke(!i.pathname||!i.pathname.includes("?"),Rc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Rc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Rc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let c=Vk(i,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),Wk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rx=["post","put","patch","delete"];new Set(Rx);const Gk=["get",...Rx];new Set(Gk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ya.apply(this,arguments)}const ep=w.createContext(null),Kk=w.createContext(null),Xn=w.createContext(null),Ol=w.createContext(null),Zn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Nx=w.createContext(null);function Qk(e,t){let{relative:n}=t===void 0?{}:t;Li()||ke(!1);let{basename:r,navigator:i}=w.useContext(Xn),{hash:a,pathname:o,search:s}=Bx(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Fn([r,o])),i.createHref({pathname:c,search:s,hash:a})}function Li(){return w.useContext(Ol)!=null}function Oi(){return Li()||ke(!1),w.useContext(Ol).location}function $x(e){w.useContext(Xn).static||w.useLayoutEffect(e)}function tp(){let{isDataRoute:e}=w.useContext(Zn);return e?lj():Xk()}function Xk(){Li()||ke(!1);let e=w.useContext(ep),{basename:t,future:n,navigator:r}=w.useContext(Xn),{matches:i}=w.useContext(Zn),{pathname:a}=Oi(),o=JSON.stringify(Jf(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return $x(()=>{s.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=qf(u,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Fn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,a,e])}function Bx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Xn),{matches:i}=w.useContext(Zn),{pathname:a}=Oi(),o=JSON.stringify(Jf(i,r.v7_relativeSplatPath));return w.useMemo(()=>qf(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Zk(e,t){return Jk(e,t)}function Jk(e,t,n,r){Li()||ke(!1);let{navigator:i}=w.useContext(Xn),{matches:a}=w.useContext(Zn),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=Oi(),d;if(t){var f;let S=typeof t=="string"?Ii(t):t;c==="/"||(f=S.pathname)!=null&&f.startsWith(c)||ke(!1),d=S}else d=u;let p=d.pathname||"/",m=p;if(c!=="/"){let S=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=jk(e,{pathname:m}),y=rj(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:Fn([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Fn([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,n,r);return t&&y?w.createElement(Ol.Provider,{value:{location:Ya({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},y):y}function qk(){let e=sj(),t=Yk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const ej=w.createElement(qk,null);class tj extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Zn.Provider,{value:this.props.routeContext},w.createElement(Nx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nj(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Zn.Provider,{value:t},r)}function rj(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||ke(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let m,x=!1,y=null,S=null;n&&(m=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||ej,c&&(u<0&&p===0?(cj("route-fallback"),x=!0,S=null):u===p&&(x=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,p+1)),h=()=>{let v;return m?v=y:x?v=S:f.route.Component?v=w.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,w.createElement(nj,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(tj,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Fx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fx||{}),Vx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vx||{});function ij(e){let t=w.useContext(ep);return t||ke(!1),t}function aj(e){let t=w.useContext(Kk);return t||ke(!1),t}function oj(e){let t=w.useContext(Zn);return t||ke(!1),t}function zx(e){let t=oj(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function sj(){var e;let t=w.useContext(Nx),n=aj(),r=zx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function lj(){let{router:e}=ij(Fx.UseNavigateStable),t=zx(Vx.UseNavigateStable),n=w.useRef(!1);return $x(()=>{n.current=!0}),w.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ya({fromRouteId:t},a)))},[e,t])}const Am={};function cj(e,t,n){Am[e]||(Am[e]=!0)}function uj(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function dj(e){let{to:t,replace:n,state:r,relative:i}=e;Li()||ke(!1);let{future:a,static:o}=w.useContext(Xn),{matches:s}=w.useContext(Zn),{pathname:c}=Oi(),u=tp(),d=qf(t,Jf(s,a.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Nr(e){ke(!1)}function fj(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:a,static:o=!1,future:s}=e;Li()&&ke(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:a,static:o,future:Ya({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r=="string"&&(r=Ii(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:x="default"}=r,y=w.useMemo(()=>{let S=Zf(d,c);return S==null?null:{location:{pathname:S,search:f,hash:p,state:m,key:x},navigationType:i}},[c,d,f,p,m,x,i]);return y==null?null:w.createElement(Xn.Provider,{value:u},w.createElement(Ol.Provider,{children:n,value:y}))}function pj(e){let{children:t,location:n}=e;return Zk(pd(t),n)}new Promise(()=>{});function pd(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let a=[...t,i];if(r.type===w.Fragment){n.push.apply(n,pd(r.props.children,a));return}r.type!==Nr&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pd(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hd.apply(this,arguments)}function hj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gj(e,t){return e.button===0&&(!t||t==="_self")&&!mj(e)}const vj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yj="6";try{window.__reactRouterVersion=yj}catch{}const xj="startTransition",_m=ub[xj];function wj(e){let{basename:t,children:n,future:r,window:i}=e,a=w.useRef();a.current==null&&(a.current=bk({window:i,v5Compat:!0}));let o=a.current,[s,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&_m?_m(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>uj(r),[r]),w.createElement(fj,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const bj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wx=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=hj(t,vj),{basename:m}=w.useContext(Xn),x,y=!1;if(typeof u=="string"&&Sj.test(u)&&(x=u,bj))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),j=Zf(k.pathname,m);k.origin===v.origin&&j!=null?u=j+k.search+k.hash:y=!0}catch{}let S=Qk(u,{relative:i}),g=kj(u,{replace:o,state:s,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",hd({},p,{href:x||S,onClick:y||a?r:h,ref:n,target:c}))});var Im;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Im||(Im={}));var Lm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lm||(Lm={}));function kj(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=tp(),u=Oi(),d=Bx(e,{relative:o});return w.useCallback(f=>{if(gj(f,n)){f.preventDefault();let p=r!==void 0?r:rl(u)===rl(d);c(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[u,c,d,r,i,n,e,a,o,s])}const Ux=w.createContext({isDark:!0,toggleTheme:()=>{}}),jj=({children:e})=>{const[t,n]=w.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),w.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),a=o=>{localStorage.getItem("theme")||n(o.matches)};return i.addEventListener("change",a),()=>i.removeEventListener("change",a)},[]);const r=()=>n(!t);return l.jsx(Ux.Provider,{value:{isDark:t,toggleTheme:r},children:e})},np=()=>{const e=w.useContext(Ux);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Hx=w.createContext(null),Nc="tools-auth-session",$c="tools-webauthn-credential",Cj=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Tj=async()=>{if(!Cj())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Bc=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Pj=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},Ej=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Dj=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!0),[a,o]=w.useState(!1),s=w.useRef(!1),c=async()=>{try{const m={challenge:Bc(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Bc(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},x=await navigator.credentials.create({publicKey:m});return x?(localStorage.setItem($c,Pj(x.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem($c),x={challenge:Bc(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:Ej(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:x})}catch(p){return console.error("Authentication failed:",p),!1}},d=w.useCallback(async()=>{i(!0),o(!1);const p=sessionStorage.getItem(Nc);if(p)try{const{timestamp:x}=JSON.parse(p);if(Date.now()-x<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await Tj()){n(!0),sessionStorage.setItem(Nc,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const x=localStorage.getItem($c);let y=!1;x?y=await u():y=await c(),y?(n(!0),sessionStorage.setItem(Nc,JSON.stringify({timestamp:Date.now()}))):o(!0)}catch{o(!0)}i(!1)},[]);w.useEffect(()=>{s.current||(s.current=!0,d())},[d]);const f=w.useCallback(()=>{d()},[d]);return l.jsx(Hx.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:a,retryAuth:f},children:e})},Aj=()=>{const e=w.useContext(Hx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},He.apply(this,arguments)};function wi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var re="-ms-",ka="-moz-",Z="-webkit-",Yx="comm",Ml="rule",rp="decl",_j="@import",Gx="@keyframes",Ij="@layer",Kx=Math.abs,ip=String.fromCharCode,md=Object.assign;function Lj(e,t){return Ie(e,0)^45?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function Qx(e){return e.trim()}function en(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ss(e,t,n){return e.indexOf(t,n)}function Ie(e,t){return e.charCodeAt(t)|0}function bi(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Xx(e){return e.length}function ca(e,t){return t.push(e),e}function Oj(e,t){return e.map(t).join("")}function Om(e,t){return e.filter(function(n){return!en(n,t)})}var Rl=1,Si=1,Zx=0,Et=0,Ce=0,Mi="";function Nl(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Rl,column:Si,length:o,return:"",siblings:s}}function kn(e,t){return md(Nl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mr(e){for(;e.root;)e=kn(e.root,{children:[e]});ca(e,e.siblings)}function Mj(){return Ce}function Rj(){return Ce=Et>0?Ie(Mi,--Et):0,Si--,Ce===10&&(Si=1,Rl--),Ce}function Bt(){return Ce=Et<Zx?Ie(Mi,Et++):0,Si++,Ce===10&&(Si=1,Rl++),Ce}function yr(){return Ie(Mi,Et)}function ks(){return Et}function $l(e,t){return bi(Mi,e,t)}function gd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nj(e){return Rl=Si=1,Zx=Ht(Mi=e),Et=0,[]}function $j(e){return Mi="",e}function Fc(e){return Qx($l(Et-1,vd(e===91?e+2:e===40?e+1:e)))}function Bj(e){for(;(Ce=yr())&&Ce<33;)Bt();return gd(e)>2||gd(Ce)>3?"":" "}function Fj(e,t){for(;--t&&Bt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return $l(e,ks()+(t<6&&yr()==32&&Bt()==32))}function vd(e){for(;Bt();)switch(Ce){case e:return Et;case 34:case 39:e!==34&&e!==39&&vd(Ce);break;case 40:e===41&&vd(e);break;case 92:Bt();break}return Et}function Vj(e,t){for(;Bt()&&e+Ce!==57;)if(e+Ce===84&&yr()===47)break;return"/*"+$l(t,Et-1)+"*"+ip(e===47?e:Bt())}function zj(e){for(;!gd(yr());)Bt();return $l(e,Et)}function Wj(e){return $j(js("",null,null,null,[""],e=Nj(e),0,[0],e))}function js(e,t,n,r,i,a,o,s,c){for(var u=0,d=0,f=o,p=0,m=0,x=0,y=1,S=1,g=1,h=0,v="",k=i,j=a,C=r,T=v;S;)switch(x=h,h=Bt()){case 40:if(x!=108&&Ie(T,f-1)==58){Ss(T+=Y(Fc(h),"&","&\f"),"&\f",Kx(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:T+=Fc(h);break;case 9:case 10:case 13:case 32:T+=Bj(x);break;case 92:T+=Fj(ks()-1,7);continue;case 47:switch(yr()){case 42:case 47:ca(Uj(Vj(Bt(),ks()),t,n,c),c);break;default:T+="/"}break;case 123*y:s[u++]=Ht(T)*g;case 125*y:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:g==-1&&(T=Y(T,/\f/g,"")),m>0&&Ht(T)-f&&ca(m>32?Rm(T+";",r,n,f-1,c):Rm(Y(T," ","")+";",r,n,f-2,c),c);break;case 59:T+=";";default:if(ca(C=Mm(T,t,n,u,d,i,s,v,k=[],j=[],f,a),a),h===123)if(d===0)js(T,t,C,C,k,a,f,s,j);else switch(p===99&&Ie(T,3)===110?100:p){case 100:case 108:case 109:case 115:js(e,C,C,r&&ca(Mm(e,C,C,0,0,i,s,v,i,k=[],f,j),j),i,j,f,s,r?k:j);break;default:js(T,C,C,C,[""],j,0,s,j)}}u=d=m=0,y=g=1,v=T="",f=o;break;case 58:f=1+Ht(T),m=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&Rj()==125)continue}switch(T+=ip(h),h*y){case 38:g=d>0?1:(T+="\f",-1);break;case 44:s[u++]=(Ht(T)-1)*g,g=1;break;case 64:yr()===45&&(T+=Fc(Bt())),p=yr(),d=f=Ht(v=T+=zj(ks())),h++;break;case 45:x===45&&Ht(T)==2&&(y=0)}}return a}function Mm(e,t,n,r,i,a,o,s,c,u,d,f){for(var p=i-1,m=i===0?a:[""],x=Xx(m),y=0,S=0,g=0;y<r;++y)for(var h=0,v=bi(e,p+1,p=Kx(S=o[y])),k=e;h<x;++h)(k=Qx(S>0?m[h]+" "+v:Y(v,/&\f/g,m[h])))&&(c[g++]=k);return Nl(e,t,n,i===0?Ml:s,c,u,d,f)}function Uj(e,t,n,r){return Nl(e,t,n,Yx,ip(Mj()),bi(e,2,-2),0,r)}function Rm(e,t,n,r,i){return Nl(e,t,n,rp,bi(e,0,r),bi(e,r+1,-1),r,i)}function Jx(e,t,n){switch(Lj(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return ka+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+ka+e+re+e+e;case 5936:switch(Ie(e,t+11)){case 114:return Z+e+re+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+re+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+re+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+re+e+e;case 6165:return Z+e+re+"flex-"+e+e;case 5187:return Z+e+Y(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return Z+e+re+"flex-item-"+Y(e,/flex-|-self/g,"")+(en(e,/flex-|baseline/)?"":re+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return Z+e+re+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+re+Y(e,"shrink","negative")+e;case 5292:return Z+e+re+Y(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+Y(e,"-grow","")+Z+e+re+Y(e,"grow","positive")+e;case 4554:return Z+Y(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!en(e,/flex-|baseline/))return re+"grid-column-align"+bi(e,t)+e;break;case 2592:case 3360:return re+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,en(r.props,/grid-\w+-end/)})?~Ss(e+(n=n[t].value),"span",0)?e:re+Y(e,"-start","")+e+re+"grid-row-span:"+(~Ss(n,"span",0)?en(n,/\d+/):+en(n,/\d+/)-+en(e,/\d+/))+";":re+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return en(r.props,/grid-\w+-start/)})?e:re+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(Ie(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+ka+(Ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ss(e,"stretch",0)?Jx(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,c,u){return re+i+":"+a+u+(o?re+i+"-span:"+(s?c:+c-+a)+u:"")+e});case 4949:if(Ie(e,t+6)===121)return Y(e,":",":"+Z)+e;break;case 6444:switch(Ie(e,Ie(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Ie(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+re+"$2box$3")+e;case 100:return Y(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function il(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hj(e,t,n,r){switch(e.type){case Ij:if(e.children.length)break;case _j:case rp:return e.return=e.return||e.value;case Yx:return"";case Gx:return e.return=e.value+"{"+il(e.children,r)+"}";case Ml:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=il(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yj(e){var t=Xx(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function Gj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rp:e.return=Jx(e.value,e.length,n);return;case Gx:return il([kn(e,{value:Y(e.value,"@","@"+Z)})],r);case Ml:if(e.length)return Oj(n=e.props,function(i){switch(en(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(kn(e,{props:[Y(i,/:(read-\w+)/,":"+ka+"$1")]})),Mr(kn(e,{props:[i]})),md(e,{props:Om(n,r)});break;case"::placeholder":Mr(kn(e,{props:[Y(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Mr(kn(e,{props:[Y(i,/:(plac\w+)/,":"+ka+"$1")]})),Mr(kn(e,{props:[Y(i,/:(plac\w+)/,re+"input-$1")]})),Mr(kn(e,{props:[i]})),md(e,{props:Om(n,r)});break}return""})}}var Qj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},ki=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",qx="active",e1="data-styled-version",Bl="6.1.19",ap=`/*!sc*/
`,al=typeof window<"u"&&typeof document<"u",Xj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),Zj={},Fl=Object.freeze([]),ji=Object.freeze({});function t1(e,t,n){return n===void 0&&(n=ji),e.theme!==n.theme&&e.theme||t||n.theme}var n1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qj=/(^-|-$)/g;function Nm(e){return e.replace(Jj,"-").replace(qj,"")}var eC=/(a)(d)/gi,No=52,$m=function(e){return String.fromCharCode(e+(e>25?39:97))};function yd(e){var t,n="";for(t=Math.abs(e);t>No;t=t/No|0)n=$m(t%No)+n;return($m(t%No)+n).replace(eC,"$1-$2")}var Vc,r1=5381,Xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},i1=function(e){return Xr(r1,e)};function op(e){return yd(i1(e)>>>0)}function tC(e){return e.displayName||e.name||"Component"}function zc(e){return typeof e=="string"&&!0}var a1=typeof Symbol=="function"&&Symbol.for,o1=a1?Symbol.for("react.memo"):60115,nC=a1?Symbol.for("react.forward_ref"):60112,rC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aC=((Vc={})[nC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vc[o1]=s1,Vc);function Bm(e){return("type"in(t=e)&&t.type.$$typeof)===o1?s1:"$$typeof"in e?aC[e.$$typeof]:rC;var t}var oC=Object.defineProperty,sC=Object.getOwnPropertyNames,Fm=Object.getOwnPropertySymbols,lC=Object.getOwnPropertyDescriptor,cC=Object.getPrototypeOf,Vm=Object.prototype;function l1(e,t,n){if(typeof t!="string"){if(Vm){var r=cC(t);r&&r!==Vm&&l1(e,r,n)}var i=sC(t);Fm&&(i=i.concat(Fm(t)));for(var a=Bm(e),o=Bm(t),s=0;s<i.length;++s){var c=i[s];if(!(c in iC||n&&n[c]||o&&c in o||a&&c in a)){var u=lC(t,c);try{oC(e,c,u)}catch{}}}}return e}function Ci(e){return typeof e=="function"}function sp(e){return typeof e=="object"&&"styledComponentId"in e}function fr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ol(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ga(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xd(e,t,n){if(n===void 0&&(n=!1),!n&&!Ga(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xd(e[r],t[r]);else if(Ga(t))for(var r in t)e[r]=xd(e[r],t[r]);return e}function lp(e,t){Object.defineProperty(e,"toString",{value:t})}function oo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw oo(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(ap);return n},e}(),Cs=new Map,sl=new Map,Ts=1,$o=function(e){if(Cs.has(e))return Cs.get(e);for(;sl.has(Ts);)Ts++;var t=Ts++;return Cs.set(e,t),sl.set(t,e),t},dC=function(e,t){Ts=t+1,Cs.set(e,t),sl.set(t,e)},fC="style[".concat(ki,"][").concat(e1,'="').concat(Bl,'"]'),pC=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hC=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},mC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ap),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var c=s.match(pC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(dC(d,u),hC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},zm=function(e){for(var t=document.querySelectorAll(fC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ki)!==qx&&(mC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function gC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var c1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(ki,"]")));return c[c.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(ki,qx),r.setAttribute(e1,Bl);var o=gC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},vC=function(){function e(t){this.element=c1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw oo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),yC=function(){function e(t){this.element=c1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wm=al,wC={isServer:!al,useCSSOMInjection:!Xj},ll=function(){function e(t,n,r){t===void 0&&(t=ji),n===void 0&&(n={});var i=this;this.options=He(He({},wC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&al&&Wm&&(Wm=!1,zm(this)),lp(this,function(){return function(a){for(var o=a.getTag(),s=o.length,c="",u=function(f){var p=function(g){return sl.get(g)}(f);if(p===void 0)return"continue";var m=a.names.get(p),x=o.getGroup(f);if(m===void 0||!m.size||x.length===0)return"continue";var y="".concat(ki,".g").concat(f,'[id="').concat(p,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),c+="".concat(x).concat(y,'{content:"').concat(S,'"}').concat(ap)},d=0;d<s;d++)u(d);return c}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&al&&zm(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(He(He({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new xC(i):r?new vC(i):new yC(i)}(this.options),new uC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bC=/&/g,SC=/^\s*\/\/.*$/gm;function u1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=u1(n.children,t)),n})}function kC(e){var t,n,r,i=ji,a=i.options,o=a===void 0?ji:a,s=i.plugins,c=s===void 0?Fl:s,u=function(p,m,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Ml&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(bC,n).replace(r,u))}),o.prefix&&d.push(Kj),d.push(Hj);var f=function(p,m,x,y){m===void 0&&(m=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(SC,""),g=Wj(x||m?"".concat(x," ").concat(m," { ").concat(S," }"):S);o.namespace&&(g=u1(g,o.namespace));var h=[];return il(g,Yj(d.concat(Gj(function(v){return h.push(v)})))),h};return f.hash=c.length?c.reduce(function(p,m){return m.name||oo(15),Xr(p,m.name)},r1).toString():"",f}var jC=new ll,wd=kC(),d1=Gt.createContext({shouldForwardProp:void 0,styleSheet:jC,stylis:wd});d1.Consumer;Gt.createContext(void 0);function bd(){return w.useContext(d1)}var f1=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=wd);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lp(this,function(){throw oo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wd),this.name+t.hash},e}(),CC=function(e){return e>="A"&&e<="Z"};function Um(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;CC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var p1=function(e){return e==null||e===!1||e===""},h1=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!p1(a)&&(Array.isArray(a)&&a.isCss||Ci(a)?r.push("".concat(Um(i),":"),a,";"):Ga(a)?r.push.apply(r,wi(wi(["".concat(i," {")],h1(a),!1),["}"],!1)):r.push("".concat(Um(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Qj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vn(e,t,n,r){if(p1(e))return[];if(sp(e))return[".".concat(e.styledComponentId)];if(Ci(e)){if(!Ci(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Vn(i,t,n,r)}var a;return e instanceof f1?n?(e.inject(n,r),[e.getName(r)]):[e]:Ga(e)?h1(e):Array.isArray(e)?Array.prototype.concat.apply(Fl,e.map(function(o){return Vn(o,t,n,r)})):[e.toString()]}function m1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ci(n)&&!sp(n))return!1}return!0}var TC=i1(Bl),PC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&m1(t),this.componentId=n,this.baseHash=Xr(TC,n),this.baseStyle=r,ll.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fr(i,this.staticRulesId);else{var a=ol(Vn(this.rules,t,n,r)),o=yd(Xr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=fr(i,o),this.staticRulesId=o}else{for(var c=Xr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=ol(Vn(f,t,n,r));c=Xr(c,p+d),u+=p}}if(u){var m=yd(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=fr(i,m)}}return i},e}(),cp=Gt.createContext(void 0);cp.Consumer;var Wc={};function EC(e,t,n){var r=sp(e),i=e,a=!zc(e),o=t.attrs,s=o===void 0?Fl:o,c=t.componentId,u=c===void 0?function(k,j){var C=typeof k!="string"?"sc":Nm(k);Wc[C]=(Wc[C]||0)+1;var T="".concat(C,"-").concat(op(Bl+C+Wc[C]));return j?"".concat(j,"-").concat(T):T}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(k){return zc(k)?"styled.".concat(k):"Styled(".concat(tC(k),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Nm(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(k,j){return y(k,j)&&S(k,j)}}else x=y}var g=new PC(n,p,r?i.componentStyle:void 0);function h(k,j){return function(C,T,P){var L=C.attrs,O=C.componentStyle,R=C.defaultProps,$=C.foldedComponentIds,W=C.styledComponentId,V=C.target,E=Gt.useContext(cp),B=bd(),z=C.shouldForwardProp||B.shouldForwardProp,A=t1(T,E,R)||ji,_=function(Be,ge,Ke){for(var Dt,Fe=He(He({},ge),{className:void 0,theme:Ke}),tr=0;tr<Be.length;tr+=1){var mn=Ci(Dt=Be[tr])?Dt(Fe):Dt;for(var lt in mn)Fe[lt]=lt==="className"?fr(Fe[lt],mn[lt]):lt==="style"?He(He({},Fe[lt]),mn[lt]):mn[lt]}return ge.className&&(Fe.className=fr(Fe.className,ge.className)),Fe}(L,T,A),M=_.as||V,U={};for(var H in _)_[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&_.theme===A||(H==="forwardedAs"?U.as=_.forwardedAs:z&&!z(H,M)||(U[H]=_[H]));var ee=function(Be,ge){var Ke=bd(),Dt=Be.generateAndInjectStyles(ge,Ke.styleSheet,Ke.stylis);return Dt}(O,_),we=fr($,W);return ee&&(we+=" "+ee),_.className&&(we+=" "+_.className),U[zc(M)&&!n1.has(M)?"class":"className"]=we,P&&(U.ref=P),w.createElement(M,U)}(v,k,j)}h.displayName=f;var v=Gt.forwardRef(h);return v.attrs=m,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?fr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(j){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var P=0,L=C;P<L.length;P++)xd(j,L[P],!0);return j}({},i.defaultProps,k):k}}),lp(v,function(){return".".concat(v.styledComponentId)}),a&&l1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Hm(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ym=function(e){return Object.assign(e,{isCss:!0})};function pr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ci(e)||Ga(e))return Ym(Vn(Hm(Fl,wi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Vn(r):Ym(Vn(Hm(r,t)))}function Sd(e,t,n){if(n===void 0&&(n=ji),!t)throw oo(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,pr.apply(void 0,wi([i],a,!1)))};return r.attrs=function(i){return Sd(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Sd(e,t,He(He({},n),i))},r}var g1=function(e){return Sd(EC,e)},b=g1;n1.forEach(function(e){b[e]=g1(e)});var DC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=m1(t),ll.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(ol(Vn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ll.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function AC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pr.apply(void 0,wi([e],t,!1)),i="sc-global-".concat(op(JSON.stringify(r))),a=new DC(r,i),o=function(c){var u=bd(),d=Gt.useContext(cp),f=Gt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(f,c,u.styleSheet,d,u.stylis),Gt.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,c,u.styleSheet,d,u.stylis),function(){return a.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,f,p){if(a.isStatic)a.renderStyles(c,Zj,d,p);else{var m=He(He({},u),{theme:t1(u,f,o.defaultProps)});a.renderStyles(c,m,d,p)}}return Gt.memo(o)}function Ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ol(pr.apply(void 0,wi([e],t,!1))),i=op(r);return new f1(i,r)}const _C=AC`
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
`,IC=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,LC=b.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,OC=()=>{const{isDark:e}=np();return l.jsx(IC,{children:l.jsx(LC,{$isDark:e})})},up=w.createContext({});function dp(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vl=w.createContext(null),fp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class MC extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function RC({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=w.useContext(fp);return w.useInsertionEffect(()=>{const{width:o,height:s,top:c,left:u}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return a&&(d.nonce=a),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),l.jsx(MC,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const NC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=dp($C),c=w.useId(),u=w.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),d=w.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),u]:[n,u]);return w.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),w.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=l.jsx(RC,{isPresent:n,children:e})),l.jsx(Vl.Provider,{value:d,children:e})};function $C(){return new Map}function v1(e=!0){const t=w.useContext(Vl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=w.useId();w.useEffect(()=>{e&&i(a)},[e]);const o=w.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}const Bo=e=>e.key||"";function Gm(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const pp=typeof window<"u",y1=pp?w.useLayoutEffect:w.useEffect,Pe=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:o=!1})=>{const[s,c]=v1(o),u=w.useMemo(()=>Gm(e),[e]),d=o&&!s?[]:u.map(Bo),f=w.useRef(!0),p=w.useRef(u),m=dp(()=>new Map),[x,y]=w.useState(u),[S,g]=w.useState(u);y1(()=>{f.current=!1,p.current=u;for(let k=0;k<S.length;k++){const j=Bo(S[k]);d.includes(j)?m.delete(j):m.get(j)!==!0&&m.set(j,!1)}},[S,d.length,d.join("-")]);const h=[];if(u!==x){let k=[...u];for(let j=0;j<S.length;j++){const C=S[j],T=Bo(C);d.includes(T)||(k.splice(j,0,C),h.push(C))}a==="wait"&&h.length&&(k=h),g(Gm(k)),y(u);return}const{forceRender:v}=w.useContext(up);return l.jsx(l.Fragment,{children:S.map(k=>{const j=Bo(k),C=o&&!s?!1:u===S||d.includes(j),T=()=>{if(m.has(j))m.set(j,!0);else return;let P=!0;m.forEach(L=>{L||(P=!1)}),P&&(v==null||v(),g(p.current),o&&(c==null||c()),r&&r())};return l.jsx(NC,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:a,onExitComplete:C?void 0:T,children:k},j)})})},ht=e=>e;let x1=ht;function hp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ti=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},on=e=>e*1e3,sn=e=>e/1e3,BC={useManualTiming:!1};function FC(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(u){a.has(u)&&(c.schedule(u),e()),u(o)}const c={schedule:(u,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&a.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),a.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Fo=["read","resolveKeyframes","update","preRender","render","postRender"],VC=40;function w1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Fo.reduce((g,h)=>(g[h]=FC(a),g),{}),{read:s,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=o,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,VC),1),i.timestamp=g,i.isProcessing=!0,s.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},x=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Fo.reduce((g,h)=>{const v=o[h];return g[h]=(k,j=!1,C=!1)=>(n||x(),v.schedule(k,j,C)),g},{}),cancel:g=>{for(let h=0;h<Fo.length;h++)o[Fo[h]].cancel(g)},state:i,steps:o}}const{schedule:ae,cancel:Hn,state:Me,steps:Uc}=w1(typeof requestAnimationFrame<"u"?requestAnimationFrame:ht,!0),b1=w.createContext({strict:!1}),Km={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pi={};for(const e in Km)Pi[e]={isEnabled:t=>Km[e].some(n=>!!t[n])};function zC(e){for(const t in e)Pi[t]={...Pi[t],...e[t]}}const WC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function cl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||WC.has(e)}let S1=e=>!cl(e);function UC(e){e&&(S1=t=>t.startsWith("on")?!cl(t):e(t))}try{UC(require("@emotion/is-prop-valid").default)}catch{}function HC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(S1(i)||n===!0&&cl(i)||!t&&!cl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function YC(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const zl=w.createContext({});function Ka(e){return typeof e=="string"||Array.isArray(e)}function Wl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gp=["initial",...mp];function Ul(e){return Wl(e.animate)||gp.some(t=>Ka(e[t]))}function k1(e){return!!(Ul(e)||e.variants)}function GC(e,t){if(Ul(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ka(n)?n:void 0,animate:Ka(r)?r:void 0}}return e.inherit!==!1?t:{}}function KC(e){const{initial:t,animate:n}=GC(e,w.useContext(zl));return w.useMemo(()=>({initial:t,animate:n}),[Qm(t),Qm(n)])}function Qm(e){return Array.isArray(e)?e.join(" "):e}const QC=Symbol.for("motionComponentSymbol");function Zr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function XC(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Zr(n)&&(n.current=r))},[t])}const vp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ZC="framerAppearId",j1="data-"+vp(ZC),{schedule:yp}=w1(queueMicrotask,!1),C1=w.createContext({});function JC(e,t,n,r,i){var a,o;const{visualElement:s}=w.useContext(zl),c=w.useContext(b1),u=w.useContext(Vl),d=w.useContext(fp).reducedMotion,f=w.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=w.useContext(C1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&qC(f.current,n,i,m);const x=w.useRef(!1);w.useInsertionEffect(()=>{p&&x.current&&p.update(n,u)});const y=n[j1],S=w.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return y1(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),yp.render(p.render),S.current&&p.animationState&&p.animationState.animateChanges())}),w.useEffect(()=>{p&&(!S.current&&p.animationState&&p.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,y)}),S.current=!1))}),p}function qC(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:T1(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Zr(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function T1(e){if(e)return e.options.allowProjection!==!1?e.projection:T1(e.parent)}function eT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var a,o;e&&zC(e);function s(u,d){let f;const p={...w.useContext(fp),...u,layoutId:tT(u)},{isStatic:m}=p,x=KC(u),y=r(u,m);if(!m&&pp){nT();const S=rT(p);f=S.MeasureLayout,x.visualElement=JC(i,y,p,t,S.ProjectionNode)}return l.jsxs(zl.Provider,{value:x,children:[f&&x.visualElement?l.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,u,XC(y,x.visualElement,d),y,m,x.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${(o=(a=i.displayName)!==null&&a!==void 0?a:i.name)!==null&&o!==void 0?o:""})`}`;const c=w.forwardRef(s);return c[QC]=i,c}function tT({layoutId:e}){const t=w.useContext(up).id;return t&&e!==void 0?t+"-"+e:e}function nT(e,t){w.useContext(b1).strict}function rT(e){const{drag:t,layout:n}=Pi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const iT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xp(e){return typeof e!="string"||e.includes("-")?!1:!!(iT.indexOf(e)>-1||/[A-Z]/u.test(e))}function Xm(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function wp(e,t,n,r){if(typeof t=="function"){const[i,a]=Xm(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Xm(r);t=t(n!==void 0?n:e.custom,i,a)}return t}const kd=e=>Array.isArray(e),aT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),oT=e=>kd(e)?e[e.length-1]||0:e,Ye=e=>!!(e&&e.getVelocity);function Ps(e){const t=Ye(e)?e.get():e;return aT(t)?t.toValue():t}function sT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,a){const o={latestValues:lT(r,i,a,e),renderState:t()};return n&&(o.onMount=s=>n({props:r,current:s,...o}),o.onUpdate=s=>n(s)),o}const P1=e=>(t,n)=>{const r=w.useContext(zl),i=w.useContext(Vl),a=()=>sT(e,t,r,i);return n?a():dp(a)};function lT(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=Ps(a[p]);let{initial:o,animate:s}=e;const c=Ul(e),u=k1(e);t&&u&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?s:o;if(f&&typeof f!="boolean"&&!Wl(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const x=wp(e,p[m]);if(x){const{transitionEnd:y,transition:S,...g}=x;for(const h in g){let v=g[h];if(Array.isArray(v)){const k=d?v.length-1:0;v=v[k]}v!==null&&(i[h]=v)}for(const h in y)i[h]=y[h]}}}return i}const Ni=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ar=new Set(Ni),E1=e=>t=>typeof t=="string"&&t.startsWith(e),D1=E1("--"),cT=E1("var(--"),bp=e=>cT(e)?uT.test(e.split("/*")[0].trim()):!1,uT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,A1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,fn=(e,t,n)=>n>t?t:n<e?e:n,$i={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Qa={...$i,transform:e=>fn(0,1,e)},Vo={...$i,default:1},so=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),jn=so("deg"),Xt=so("%"),F=so("px"),dT=so("vh"),fT=so("vw"),Zm={...Xt,parse:e=>Xt.parse(e)/100,transform:e=>Xt.transform(e*100)},pT={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,top:F,right:F,bottom:F,left:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,backgroundPositionX:F,backgroundPositionY:F},hT={rotate:jn,rotateX:jn,rotateY:jn,rotateZ:jn,scale:Vo,scaleX:Vo,scaleY:Vo,scaleZ:Vo,skew:jn,skewX:jn,skewY:jn,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:Qa,originX:Zm,originY:Zm,originZ:F},Jm={...$i,transform:Math.round},Sp={...pT,...hT,zIndex:Jm,size:F,fillOpacity:Qa,strokeOpacity:Qa,numOctaves:Jm},mT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gT=Ni.length;function vT(e,t,n){let r="",i=!0;for(let a=0;a<gT;a++){const o=Ni[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s=="number"?c=s===(o.startsWith("scale")?1:0):c=parseFloat(s)===0,!c||n){const u=A1(s,Sp[o]);if(!c){i=!1;const d=mT[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function kp(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const c in t){const u=t[c];if(Ar.has(c)){o=!0;continue}else if(D1(c)){i[c]=u;continue}else{const d=A1(u,Sp[c]);c.startsWith("origin")?(s=!0,a[c]=d):r[c]=d}}if(t.transform||(o||n?r.transform=vT(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:c="50%",originY:u="50%",originZ:d=0}=a;r.transformOrigin=`${c} ${u} ${d}`}}const yT={offset:"stroke-dashoffset",array:"stroke-dasharray"},xT={offset:"strokeDashoffset",array:"strokeDasharray"};function wT(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?yT:xT;e[a.offset]=F.transform(-r);const o=F.transform(t),s=F.transform(n);e[a.array]=`${o} ${s}`}function qm(e,t,n){return typeof e=="string"?e:F.transform(t+n*e)}function bT(e,t,n){const r=qm(t,e.x,e.width),i=qm(n,e.y,e.height);return`${r} ${i}`}function jp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:c=0,...u},d,f){if(kp(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:x}=e;p.transform&&(x&&(m.transform=p.transform),delete p.transform),x&&(i!==void 0||a!==void 0||m.transform)&&(m.transformOrigin=bT(x,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&wT(p,o,s,c,!1)}const Cp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_1=()=>({...Cp(),attrs:{}}),Tp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function I1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const L1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function O1(e,t,n,r){I1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(L1.has(i)?i:vp(i),t.attrs[i])}const ul={};function ST(e){Object.assign(ul,e)}function M1(e,{layout:t,layoutId:n}){return Ar.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ul[e]||e==="opacity")}function Pp(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(Ye(i[o])||t.style&&Ye(t.style[o])||M1(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function R1(e,t,n){const r=Pp(e,t,n);for(const i in e)if(Ye(e[i])||Ye(t[i])){const a=Ni.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function kT(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const eg=["x","y","width","height","cx","cy","r"],jT={useVisualState:P1({scrapeMotionValuesFromProps:R1,createRenderState:_1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let a=!!e.drag;if(!a){for(const s in i)if(Ar.has(s)){a=!0;break}}if(!a)return;let o=!t;if(t)for(let s=0;s<eg.length;s++){const c=eg[s];e[c]!==t[c]&&(o=!0)}o&&ae.read(()=>{kT(n,r),ae.render(()=>{jp(r,i,Tp(n.tagName),e.transformTemplate),O1(n,r)})})}})},CT={useVisualState:P1({scrapeMotionValuesFromProps:Pp,createRenderState:Cp})};function N1(e,t,n){for(const r in t)!Ye(t[r])&&!M1(r,n)&&(e[r]=t[r])}function TT({transformTemplate:e},t){return w.useMemo(()=>{const n=Cp();return kp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function PT(e,t){const n=e.style||{},r={};return N1(r,n,e),Object.assign(r,TT(e,t)),r}function ET(e,t){const n={},r=PT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function DT(e,t,n,r){const i=w.useMemo(()=>{const a=_1();return jp(a,t,Tp(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};N1(a,e.style,e),i.style={...a,...i.style}}return i}function AT(e=!1){return(n,r,i,{latestValues:a},o)=>{const c=(xp(n)?DT:ET)(r,a,o,n),u=HC(r,typeof n=="string",e),d=n!==w.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=w.useMemo(()=>Ye(f)?f.get():f,[f]);return w.createElement(n,{...d,children:p})}}function _T(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...xp(r)?jT:CT,preloadedFeatures:e,useRender:AT(i),createVisualElement:t,Component:r};return eT(o)}}function $1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Hl(e,t,n){const r=e.getProps();return wp(r,t,n!==void 0?n:r.custom,e)}const IT=hp(()=>window.ScrollTimeline!==void 0);class LT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(IT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class OT extends LT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Ep(e,t){return e?e[t]||e.default||e:void 0}const jd=2e4;function B1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<jd;)t+=n,r=e.next(t);return t>=jd?1/0:t}function Dp(e){return typeof e=="function"}function tg(e,t){e.timeline=t,e.onfinish=null}const Ap=e=>Array.isArray(e)&&typeof e[0]=="number",MT={linearEasing:void 0};function RT(e,t){const n=hp(e);return()=>{var r;return(r=MT[t])!==null&&r!==void 0?r:n()}}const dl=RT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),F1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(Ti(0,i-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function V1(e){return!!(typeof e=="function"&&dl()||!e||typeof e=="string"&&(e in Cd||dl())||Ap(e)||Array.isArray(e)&&e.every(V1))}const ua=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Cd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ua([0,.65,.55,1]),circOut:ua([.55,0,1,.45]),backIn:ua([.31,.01,.66,-.59]),backOut:ua([.33,1.53,.69,.99])};function z1(e,t){if(e)return typeof e=="function"&&dl()?F1(e,t):Ap(e)?ua(e):Array.isArray(e)?e.map(n=>z1(n,t)||Cd.easeOut):Cd[e]}const Lt={x:!1,y:!1};function W1(){return Lt.x||Lt.y}function NT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const a=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}function U1(e,t){const n=NT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function ng(e){return t=>{t.pointerType==="touch"||W1()||e(t)}}function $T(e,t,n={}){const[r,i,a]=U1(e,n),o=ng(s=>{const{target:c}=s,u=t(s);if(typeof u!="function"||!c)return;const d=ng(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(s=>{s.addEventListener("pointerenter",o,i)}),a}const H1=(e,t)=>t?e===t?!0:H1(e,t.parentElement):!1,_p=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,BT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FT(e){return BT.has(e.tagName)||e.tabIndex!==-1}const da=new WeakSet;function rg(e){return t=>{t.key==="Enter"&&e(t)}}function Hc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const VT=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=rg(()=>{if(da.has(n))return;Hc(n,"down");const i=rg(()=>{Hc(n,"up")}),a=()=>Hc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function ig(e){return _p(e)&&!W1()}function zT(e,t,n={}){const[r,i,a]=U1(e,n),o=s=>{const c=s.currentTarget;if(!ig(s)||da.has(c))return;da.add(c);const u=t(s),d=(m,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!ig(m)||!da.has(c))&&(da.delete(c),typeof u=="function"&&u(m,{success:x}))},f=m=>{d(m,n.useGlobalTarget||H1(c,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(s=>{!FT(s)&&s.getAttribute("tabindex")===null&&(s.tabIndex=0),(n.useGlobalTarget?window:s).addEventListener("pointerdown",o,i),s.addEventListener("focus",u=>VT(u,i),i)}),a}function WT(e){return e==="x"||e==="y"?Lt[e]?null:(Lt[e]=!0,()=>{Lt[e]=!1}):Lt.x||Lt.y?null:(Lt.x=Lt.y=!0,()=>{Lt.x=Lt.y=!1})}const Y1=new Set(["width","height","top","left","right","bottom",...Ni]);let Es;function UT(){Es=void 0}const Zt={now:()=>(Es===void 0&&Zt.set(Me.isProcessing||BC.useManualTiming?Me.timestamp:performance.now()),Es),set:e=>{Es=e,queueMicrotask(UT)}};function Ip(e,t){e.indexOf(t)===-1&&e.push(t)}function Lp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Op{constructor(){this.subscriptions=[]}add(t){return Ip(this.subscriptions,t),()=>Lp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function G1(e,t){return t?e*(1e3/t):0}const ag=30,HT=e=>!isNaN(parseFloat(e));class YT{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=Zt.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Zt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=HT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Op);const r=this.events[t].add(n);return t==="change"?()=>{r(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Zt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ag)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ag);return G1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xa(e,t){return new YT(e,t)}function GT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Xa(n))}function KT(e,t){const n=Hl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=oT(a[o]);GT(e,o,s)}}function QT(e){return!!(Ye(e)&&e.add)}function Td(e,t){const n=e.getValue("willChange");if(QT(n))return n.add(t)}function K1(e){return e.props[j1]}const Q1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,XT=1e-7,ZT=12;function JT(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Q1(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>XT&&++s<ZT);return o}function lo(e,t,n,r){if(e===t&&n===r)return ht;const i=a=>JT(a,0,1,e,n);return a=>a===0||a===1?a:Q1(i(a),t,r)}const X1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Z1=e=>t=>1-e(1-t),J1=lo(.33,1.53,.69,.99),Mp=Z1(J1),q1=X1(Mp),ew=e=>(e*=2)<1?.5*Mp(e):.5*(2-Math.pow(2,-10*(e-1))),Rp=e=>1-Math.sin(Math.acos(e)),tw=Z1(Rp),nw=X1(Rp),rw=e=>/^0[^.\s]+$/u.test(e);function qT(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||rw(e):!0}const ja=e=>Math.round(e*1e5)/1e5,Np=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eP(e){return e==null}const tP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$p=(e,t)=>n=>!!(typeof n=="string"&&tP.test(n)&&n.startsWith(e)||t&&!eP(n)&&Object.prototype.hasOwnProperty.call(n,t)),iw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(Np);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},nP=e=>fn(0,255,e),Yc={...$i,transform:e=>Math.round(nP(e))},hr={test:$p("rgb","red"),parse:iw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Yc.transform(e)+", "+Yc.transform(t)+", "+Yc.transform(n)+", "+ja(Qa.transform(r))+")"};function rP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Pd={test:$p("#"),parse:rP,transform:hr.transform},Jr={test:$p("hsl","hue"),parse:iw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Xt.transform(ja(t))+", "+Xt.transform(ja(n))+", "+ja(Qa.transform(r))+")"},We={test:e=>hr.test(e)||Pd.test(e)||Jr.test(e),parse:e=>hr.test(e)?hr.parse(e):Jr.test(e)?Jr.parse(e):Pd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?hr.transform(e):Jr.transform(e)},iP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function aP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Np))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(iP))===null||n===void 0?void 0:n.length)||0)>0}const aw="number",ow="color",oP="var",sP="var(",og="${}",lP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Za(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(lP,c=>(We.test(c)?(r.color.push(a),i.push(ow),n.push(We.parse(c))):c.startsWith(sP)?(r.var.push(a),i.push(oP),n.push(c)):(r.number.push(a),i.push(aw),n.push(parseFloat(c))),++a,og)).split(og);return{values:n,split:s,indexes:r,types:i}}function sw(e){return Za(e).values}function lw(e){const{split:t,types:n}=Za(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===aw?a+=ja(i[o]):s===ow?a+=We.transform(i[o]):a+=i[o]}return a}}const cP=e=>typeof e=="number"?0:e;function uP(e){const t=sw(e);return lw(e)(t.map(cP))}const Yn={test:aP,parse:sw,createTransformer:lw,getAnimatableNone:uP},dP=new Set(["brightness","contrast","saturate","opacity"]);function fP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Np)||[];if(!r)return e;const i=n.replace(r,"");let a=dP.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const pP=/\b([a-z-]*)\(.*?\)/gu,Ed={...Yn,getAnimatableNone:e=>{const t=e.match(pP);return t?t.map(fP).join(" "):e}},hP={...Sp,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:Ed,WebkitFilter:Ed},Bp=e=>hP[e];function cw(e,t){let n=Bp(e);return n!==Ed&&(n=Yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const mP=new Set(["auto","none","0"]);function gP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!mP.has(a)&&Za(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=cw(n,i)}const sg=e=>e===$i||e===F,lg=(e,t)=>parseFloat(e.split(", ")[t]),cg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return lg(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?lg(a[1],e):0}},vP=new Set(["x","y","z"]),yP=Ni.filter(e=>!vP.has(e));function xP(e){const t=[];return yP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ei={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:cg(4,13),y:cg(5,14)};Ei.translateX=Ei.x;Ei.translateY=Ei.y;const xr=new Set;let Dd=!1,Ad=!1;function uw(){if(Ad){const e=Array.from(xr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=xP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ad=!1,Dd=!1,xr.forEach(e=>e.complete()),xr.clear()}function dw(){xr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ad=!0)})}function wP(){dw(),uw()}class Fp{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(xr.add(this),Dd||(Dd=!0,ae.read(dw),ae.resolveKeyframes(uw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const c=r.readValue(n,s);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const fw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),bP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function SP(e){const t=bP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function pw(e,t,n=1){const[r,i]=SP(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return fw(o)?parseFloat(o):o}return bp(i)?pw(i,t,n+1):i}const hw=e=>t=>t.test(e),kP={test:e=>e==="auto",parse:e=>e},mw=[$i,F,Xt,jn,fT,dT,kP],ug=e=>mw.find(hw(e));class gw extends Fp{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),bp(u))){const d=pw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Y1.has(r)||t.length!==2)return;const[i,a]=t,o=ug(i),s=ug(a);if(o!==s)if(sg(o)&&sg(s))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)qT(t[i])&&r.push(i);r.length&&gP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ei[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Ei[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const dg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yn.test(e)||e==="0")&&!e.startsWith("url("));function jP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function CP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=dg(i,t),s=dg(a,t);return!o||!s?!1:jP(e)||(n==="spring"||Dp(n))&&r}const TP=e=>e!==null;function Yl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(TP),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const PP=40;class vw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Zt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>PP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&wP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Zt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:c,isGenerator:u}=this.options;if(!u&&!CP(t,r,i,a))if(o)this.options.duration=0;else{c&&c(Yl(t,this.options,n)),s&&s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const pe=(e,t,n)=>e+(t-e)*n;function Gc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function EP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=Gc(c,s,e+1/3),a=Gc(c,s,e),o=Gc(c,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function fl(e,t){return n=>n>0?t:e}const Kc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},DP=[Pd,hr,Jr],AP=e=>DP.find(t=>t.test(e));function fg(e){const t=AP(e);if(!t)return!1;let n=t.parse(e);return t===Jr&&(n=EP(n)),n}const pg=(e,t)=>{const n=fg(e),r=fg(t);if(!n||!r)return fl(e,t);const i={...n};return a=>(i.red=Kc(n.red,r.red,a),i.green=Kc(n.green,r.green,a),i.blue=Kc(n.blue,r.blue,a),i.alpha=pe(n.alpha,r.alpha,a),hr.transform(i))},_P=(e,t)=>n=>t(e(n)),co=(...e)=>e.reduce(_P),_d=new Set(["none","hidden"]);function IP(e,t){return _d.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function LP(e,t){return n=>pe(e,t,n)}function Vp(e){return typeof e=="number"?LP:typeof e=="string"?bp(e)?fl:We.test(e)?pg:RP:Array.isArray(e)?yw:typeof e=="object"?We.test(e)?pg:OP:fl}function yw(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>Vp(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function OP(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Vp(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function MP(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],c=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=c,i[o]++}return r}const RP=(e,t)=>{const n=Yn.createTransformer(t),r=Za(e),i=Za(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?_d.has(e)&&!i.values.length||_d.has(t)&&!r.values.length?IP(e,t):co(yw(MP(r,i),i.values),n):fl(e,t)};function xw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?pe(e,t,n):Vp(e)(e,t)}const NP=5;function ww(e,t,n){const r=Math.max(t-NP,0);return G1(n-e(r),t-r)}const ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Qc=.001;function $P({duration:e=ye.duration,bounce:t=ye.bounce,velocity:n=ye.velocity,mass:r=ye.mass}){let i,a,o=1-t;o=fn(ye.minDamping,ye.maxDamping,o),e=fn(ye.minDuration,ye.maxDuration,sn(e)),o<1?(i=u=>{const d=u*o,f=d*e,p=d-n,m=Id(u,o),x=Math.exp(-f);return Qc-p/m*x},a=u=>{const f=u*o*e,p=f*n+n,m=Math.pow(o,2)*Math.pow(u,2)*e,x=Math.exp(-f),y=Id(Math.pow(u,2),o);return(-i(u)+Qc>0?-1:1)*((p-m)*x)/y}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Qc+d*f},a=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const s=5/e,c=FP(i,a,s);if(e=on(e),isNaN(c))return{stiffness:ye.stiffness,damping:ye.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const BP=12;function FP(e,t,n){let r=n;for(let i=1;i<BP;i++)r=r-e(r)/t(r);return r}function Id(e,t){return e*Math.sqrt(1-t*t)}const VP=["duration","bounce"],zP=["stiffness","damping","mass"];function hg(e,t){return t.some(n=>e[n]!==void 0)}function WP(e){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...e};if(!hg(e,zP)&&hg(e,VP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*fn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ye.mass,stiffness:i,damping:a}}else{const n=$P(e);t={...t,...n,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function bw(e=ye.visualDuration,t=ye.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=WP({...n,velocity:-sn(n.velocity||0)}),x=p||0,y=u/(2*Math.sqrt(c*d)),S=o-a,g=sn(Math.sqrt(c/d)),h=Math.abs(S)<5;r||(r=h?ye.restSpeed.granular:ye.restSpeed.default),i||(i=h?ye.restDelta.granular:ye.restDelta.default);let v;if(y<1){const j=Id(g,y);v=C=>{const T=Math.exp(-y*g*C);return o-T*((x+y*g*S)/j*Math.sin(j*C)+S*Math.cos(j*C))}}else if(y===1)v=j=>o-Math.exp(-g*j)*(S+(x+g*S)*j);else{const j=g*Math.sqrt(y*y-1);v=C=>{const T=Math.exp(-y*g*C),P=Math.min(j*C,300);return o-T*((x+y*g*S)*Math.sinh(P)+j*S*Math.cosh(P))/j}}const k={calculatedDuration:m&&f||null,next:j=>{const C=v(j);if(m)s.done=j>=f;else{let T=0;y<1&&(T=j===0?on(x):ww(v,j,C));const P=Math.abs(T)<=r,L=Math.abs(o-C)<=i;s.done=P&&L}return s.value=s.done?o:C,s},toString:()=>{const j=Math.min(B1(k),jd),C=F1(T=>k.next(j*T).value,j,30);return j+"ms "+C}};return k}function mg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=P=>s!==void 0&&P<s||c!==void 0&&P>c,x=P=>s===void 0?c:c===void 0||Math.abs(s-P)<Math.abs(c-P)?s:c;let y=n*t;const S=f+y,g=o===void 0?S:o(S);g!==S&&(y=g-f);const h=P=>-y*Math.exp(-P/r),v=P=>g+h(P),k=P=>{const L=h(P),O=v(P);p.done=Math.abs(L)<=u,p.value=p.done?g:O};let j,C;const T=P=>{m(p.value)&&(j=P,C=bw({keyframes:[p.value,x(p.value)],velocity:ww(v,P,p.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:P=>{let L=!1;return!C&&j===void 0&&(L=!0,k(P),T(P)),j!==void 0&&P>=j?C.next(P-j):(!L&&k(P),p)}}}const UP=lo(.42,0,1,1),HP=lo(0,0,.58,1),Sw=lo(.42,0,.58,1),YP=e=>Array.isArray(e)&&typeof e[0]!="number",GP={linear:ht,easeIn:UP,easeInOut:Sw,easeOut:HP,circIn:Rp,circInOut:nw,circOut:tw,backIn:Mp,backInOut:q1,backOut:J1,anticipate:ew},gg=e=>{if(Ap(e)){x1(e.length===4);const[t,n,r,i]=e;return lo(t,n,r,i)}else if(typeof e=="string")return GP[e];return e};function KP(e,t,n){const r=[],i=n||xw,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||ht:t;s=co(c,s)}r.push(s)}return r}function QP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(x1(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=KP(t,r,i),c=s.length,u=d=>{if(o&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Ti(e[f],e[f+1],d);return s[f](p)};return n?d=>u(fn(e[0],e[a-1],d)):u}function XP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ti(0,t,r);e.push(pe(n,1,i))}}function ZP(e){const t=[0];return XP(t,e.length-1),t}function JP(e,t){return e.map(n=>n*t)}function qP(e,t){return e.map(()=>t||Sw).splice(0,e.length-1)}function pl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=YP(r)?r.map(gg):gg(r),a={done:!1,value:t[0]},o=JP(n&&n.length===t.length?n:ZP(t),e),s=QP(o,t,{ease:Array.isArray(i)?i:qP(t,i)});return{calculatedDuration:e,next:c=>(a.value=s(c),a.done=c>=e,a)}}const e5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ae.update(t,!0),stop:()=>Hn(t),now:()=>Me.isProcessing?Me.timestamp:Zt.now()}},t5={decay:mg,inertia:mg,tween:pl,keyframes:pl,spring:bw},n5=e=>e/100;class zp extends vw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Fp,s=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=Dp(n)?n:t5[n]||pl;let c,u;s!==pl&&typeof t[0]!="number"&&(c=co(n5,xw(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});a==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=B1(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:m,repeatType:x,repeatDelay:y,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,k=a;if(m){const P=Math.min(this.currentTime,d)/f;let L=Math.floor(P),O=P%1;!O&&P>=1&&(O=1),O===1&&L--,L=Math.min(L,m+1),!!(L%2)&&(x==="reverse"?(O=1-O,y&&(O-=y/f)):x==="mirror"&&(k=o)),v=fn(0,1,O)*f}const j=h?{done:!1,value:c[0]}:k.next(v);s&&(j.value=s(j.value));let{done:C}=j;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&i!==void 0&&(j.value=Yl(c,this.options,i)),S&&S(j.value),T&&this.finish(),j}get duration(){const{resolved:t}=this;return t?sn(t.calculatedDuration):0}get time(){return sn(this.currentTime)}set time(t){t=on(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=sn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=e5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const r5=new Set(["opacity","clipPath","filter","transform"]);function i5(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=z1(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}const a5=hp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hl=10,o5=2e4;function s5(e){return Dp(e.type)||e.type==="spring"||!V1(e.ease)}function l5(e,t){const n=new zp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<o5;)r=n.sample(a),i.push(r.value),a+=hl;return{times:void 0,keyframes:i,duration:a-hl,ease:"linear"}}const kw={anticipate:ew,backInOut:q1,circInOut:nw};function c5(e){return e in kw}class vg extends vw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new gw(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:a,type:o,motionValue:s,name:c,startTime:u}=this.options;if(!s.owner||!s.owner.current)return!1;if(typeof a=="string"&&dl()&&c5(a)&&(a=kw[a]),s5(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:x,...y}=this.options,S=l5(t,y);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,a=S.ease,o="keyframes"}const d=i5(s.owner.current,c,t,{...this.options,duration:r,times:i,ease:a});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(tg(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;s.set(Yl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return sn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return sn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=on(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ht;const{animation:r}=n;tg(r,t)}return ht}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...m}=this.options,x=new zp({...m,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),y=on(this.time);u.setWithVelocity(x.sample(y-hl).value,x.sample(y).value,hl)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return a5()&&r&&r5.has(r)&&!c&&!u&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const u5={type:"spring",stiffness:500,damping:25,restSpeed:10},d5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),f5={type:"keyframes",duration:.8},p5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},h5=(e,{keyframes:t})=>t.length>2?f5:Ar.has(e)?e.startsWith("scale")?d5(t[1]):u5:p5;function m5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Wp=(e,t,n,r={},i,a)=>o=>{const s=Ep(r,e)||{},c=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-on(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};m5(s)||(d={...d,...h5(e,d)}),d.duration&&(d.duration=on(d.duration)),d.repeatDelay&&(d.repeatDelay=on(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Yl(d.keyframes,s);if(p!==void 0)return ae.update(()=>{d.onUpdate(p),d.onComplete()}),new OT([])}return!a&&vg.supports(d)?new vg(d):new zp(d)};function g5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function jw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...c}=t;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),m=c[f];if(m===void 0||d&&g5(d,f))continue;const x={delay:n,...Ep(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const g=K1(e);if(g){const h=window.MotionHandoffAnimation(g,f,ae);h!==null&&(x.startTime=h,y=!0)}}Td(e,f),p.start(Wp(f,p,m,e.shouldReduceMotion&&Y1.has(f)?{type:!1}:x,e,y));const S=p.animation;S&&u.push(S)}return s&&Promise.all(u).then(()=>{ae.update(()=>{s&&KT(e,s)})}),u}function Ld(e,t,n={}){var r;const i=Hl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(jw(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=a;return v5(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=a;if(c){const[u,d]=c==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function v5(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(y5).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(Ld(u,t,{...a,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function y5(e,t){return e.sortNodePosition(t)}function x5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>Ld(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=Ld(e,t,n);else{const i=typeof t=="function"?Hl(e,t,n.custom):t;r=Promise.all(jw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const w5=gp.length;function Cw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Cw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<w5;n++){const r=gp[n],i=e.props[r];(Ka(i)||i===!1)&&(t[r]=i)}return t}const b5=[...mp].reverse(),S5=mp.length;function k5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>x5(e,n,r)))}function j5(e){let t=k5(e),n=yg(),r=!0;const i=c=>(u,d)=>{var f;const p=Hl(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:x,...y}=p;u={...u,...y,...x}}return u};function a(c){t=c(e)}function o(c){const{props:u}=e,d=Cw(e.parent)||{},f=[],p=new Set;let m={},x=1/0;for(let S=0;S<S5;S++){const g=b5[S],h=n[g],v=u[g]!==void 0?u[g]:d[g],k=Ka(v),j=g===c?h.isActive:null;j===!1&&(x=S);let C=v===d[g]&&v!==u[g]&&k;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...m},!h.isActive&&j===null||!v&&!h.prevProp||Wl(v)||typeof v=="boolean")continue;const T=C5(h.prevProp,v);let P=T||g===c&&h.isActive&&!C&&k||S>x&&k,L=!1;const O=Array.isArray(v)?v:[v];let R=O.reduce(i(g),{});j===!1&&(R={});const{prevResolvedValues:$={}}=h,W={...$,...R},V=z=>{P=!0,p.has(z)&&(L=!0,p.delete(z)),h.needsAnimating[z]=!0;const A=e.getValue(z);A&&(A.liveStyle=!1)};for(const z in W){const A=R[z],_=$[z];if(m.hasOwnProperty(z))continue;let M=!1;kd(A)&&kd(_)?M=!$1(A,_):M=A!==_,M?A!=null?V(z):p.add(z):A!==void 0&&p.has(z)?V(z):h.protectedKeys[z]=!0}h.prevProp=v,h.prevResolvedValues=R,h.isActive&&(m={...m,...R}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(C&&T)||L)&&f.push(...O.map(z=>({animation:z,options:{type:g}})))}if(p.size){const S={};p.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),S[g]=h??null}),f.push({animation:S})}let y=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function s(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),n[c].isActive=u;const f=o(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=yg(),r=!0}}}function C5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!$1(t,e):!1}function nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yg(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class Jn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class T5 extends Jn{constructor(t){super(t),t.animationState||(t.animationState=j5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Wl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let P5=0;class E5 extends Jn{constructor(){super(...arguments),this.id=P5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const D5={animation:{Feature:T5},exit:{Feature:E5}};function Ja(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function uo(e){return{point:{x:e.pageX,y:e.pageY}}}const A5=e=>t=>_p(t)&&e(t,uo(t));function Ca(e,t,n,r){return Ja(e,t,A5(n),r)}const xg=(e,t)=>Math.abs(e-t);function _5(e,t){const n=xg(e.x,t.x),r=xg(e.y,t.y);return Math.sqrt(n**2+r**2)}class Tw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Zc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=_5(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:x}=f,{timestamp:y}=Me;this.history.push({...x,timestamp:y});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Xc(p,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Zc(f.type==="pointercancel"?this.lastMoveEventInfo:Xc(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,S),x&&x(f,S)},!_p(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=uo(t),s=Xc(o,this.transformPagePoint),{point:c}=s,{timestamp:u}=Me;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Zc(s,this.history)),this.removeListeners=co(Ca(this.contextWindow,"pointermove",this.handlePointerMove),Ca(this.contextWindow,"pointerup",this.handlePointerUp),Ca(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Hn(this.updatePoint)}}function Xc(e,t){return t?{point:t(e.point)}:e}function wg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zc({point:e},t){return{point:e,delta:wg(e,Pw(t)),offset:wg(e,I5(t)),velocity:L5(t,.1)}}function I5(e){return e[0]}function Pw(e){return e[e.length-1]}function L5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Pw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>on(t)));)n--;if(!r)return{x:0,y:0};const a=sn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Ew=1e-4,O5=1-Ew,M5=1+Ew,Dw=.01,R5=0-Dw,N5=0+Dw;function gt(e){return e.max-e.min}function $5(e,t,n){return Math.abs(e-t)<=n}function bg(e,t,n,r=.5){e.origin=r,e.originPoint=pe(t.min,t.max,e.origin),e.scale=gt(n)/gt(t),e.translate=pe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=O5&&e.scale<=M5||isNaN(e.scale))&&(e.scale=1),(e.translate>=R5&&e.translate<=N5||isNaN(e.translate))&&(e.translate=0)}function Ta(e,t,n,r){bg(e.x,t.x,n.x,r?r.originX:void 0),bg(e.y,t.y,n.y,r?r.originY:void 0)}function Sg(e,t,n){e.min=n.min+t.min,e.max=e.min+gt(t)}function B5(e,t,n){Sg(e.x,t.x,n.x),Sg(e.y,t.y,n.y)}function kg(e,t,n){e.min=t.min-n.min,e.max=e.min+gt(t)}function Pa(e,t,n){kg(e.x,t.x,n.x),kg(e.y,t.y,n.y)}function F5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?pe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?pe(n,e,r.max):Math.min(e,n)),e}function jg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function V5(e,{top:t,left:n,bottom:r,right:i}){return{x:jg(e.x,n,i),y:jg(e.y,t,r)}}function Cg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function z5(e,t){return{x:Cg(e.x,t.x),y:Cg(e.y,t.y)}}function W5(e,t){let n=.5;const r=gt(e),i=gt(t);return i>r?n=Ti(t.min,t.max-r,e.min):r>i&&(n=Ti(e.min,e.max-i,t.min)),fn(0,1,n)}function U5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Od=.35;function H5(e=Od){return e===!1?e=0:e===!0&&(e=Od),{x:Tg(e,"left","right"),y:Tg(e,"top","bottom")}}function Tg(e,t,n){return{min:Pg(e,t),max:Pg(e,n)}}function Pg(e,t){return typeof e=="number"?e:e[t]||0}const Eg=()=>({translate:0,scale:1,origin:0,originPoint:0}),qr=()=>({x:Eg(),y:Eg()}),Dg=()=>({min:0,max:0}),be=()=>({x:Dg(),y:Dg()});function bt(e){return[e("x"),e("y")]}function Aw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Y5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function G5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Jc(e){return e===void 0||e===1}function Md({scale:e,scaleX:t,scaleY:n}){return!Jc(e)||!Jc(t)||!Jc(n)}function sr(e){return Md(e)||_w(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _w(e){return Ag(e.x)||Ag(e.y)}function Ag(e){return e&&e!=="0%"}function ml(e,t,n){const r=e-n,i=t*r;return n+i}function _g(e,t,n,r,i){return i!==void 0&&(e=ml(e,i,r)),ml(e,n,r)+t}function Rd(e,t=0,n=1,r,i){e.min=_g(e.min,t,n,r,i),e.max=_g(e.max,t,n,r,i)}function Iw(e,{x:t,y:n}){Rd(e.x,t.translate,t.scale,t.originPoint),Rd(e.y,n.translate,n.scale,n.originPoint)}const Ig=.999999999999,Lg=1.0000000000001;function K5(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ti(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Iw(e,o)),r&&sr(a.latestValues)&&ti(e,a.latestValues))}t.x<Lg&&t.x>Ig&&(t.x=1),t.y<Lg&&t.y>Ig&&(t.y=1)}function ei(e,t){e.min=e.min+t,e.max=e.max+t}function Og(e,t,n,r,i=.5){const a=pe(e.min,e.max,i);Rd(e,t,n,a,r)}function ti(e,t){Og(e.x,t.x,t.scaleX,t.scale,t.originX),Og(e.y,t.y,t.scaleY,t.scale,t.originY)}function Lw(e,t){return Aw(G5(e.getBoundingClientRect(),t))}function Q5(e,t,n){const r=Lw(e,n),{scroll:i}=t;return i&&(ei(r.x,i.offset.x),ei(r.y,i.offset.y)),r}const Ow=({current:e})=>e?e.ownerDocument.defaultView:null,X5=new WeakMap;class Z5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=be(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(uo(d).point)},a=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:x}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=WT(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(Xt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[S];v&&(g=gt(v)*(parseFloat(g)/100))}}this.originPoint[S]=g}),x&&ae.postRender(()=>x(d,f)),Td(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:S}=f;if(m&&this.currentDirection===null){this.currentDirection=J5(S),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),y&&y(d,f)},s=(d,f)=>this.stop(d,f),c=()=>bt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Tw(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ow(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&ae.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zo(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=F5(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Zr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=V5(i.layoutBox,n):this.constraints=!1,this.elastic=H5(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&bt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=U5(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Zr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=Q5(r,i.root,this.visualElement.getTransformPagePoint());let o=z5(i.layout.layoutBox,a);if(n){const s=n(Y5(o));this.hasMutatedConstraints=!!s,s&&(o=Aw(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),c=this.constraints||{},u=bt(d=>{if(!zo(d,n,this.currentDirection))return;let f=c&&c[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Td(this.visualElement,t),r.start(Wp(t,r,0,n,this.visualElement,!1))}stopAnimation(){bt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){bt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){bt(n=>{const{drag:r}=this.getProps();if(!zo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-pe(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Zr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};bt(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const c=s.get();i[o]=W5({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),bt(o=>{if(!zo(o,t,null))return;const s=this.getAxisMotionValue(o),{min:c,max:u}=this.constraints[o];s.set(pe(c,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;X5.set(this.visualElement,this);const t=this.visualElement.current,n=Ca(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Zr(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ae.read(r);const o=Ja(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(bt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Od,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function zo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function J5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class q5 extends Jn{constructor(t){super(t),this.removeGroupControls=ht,this.removeListeners=ht,this.controls=new Z5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ht}unmount(){this.removeGroupControls(),this.removeListeners()}}const Mg=e=>(t,n)=>{e&&ae.postRender(()=>e(t,n))};class eE extends Jn{constructor(){super(...arguments),this.removePointerDownListener=ht}onPointerDown(t){this.session=new Tw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ow(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Mg(t),onStart:Mg(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&ae.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Ca(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ds={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Xi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const n=Rg(e,t.target.x),r=Rg(e,t.target.y);return`${n}% ${r}%`}},tE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yn.parse(e);if(i.length>5)return r;const a=Yn.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;const u=pe(s,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),a(i)}};class nE extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;ST(rE),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Ds.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||ae.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),yp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Mw(e){const[t,n]=v1(),r=w.useContext(up);return l.jsx(nE,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(C1),isPresent:t,safeToRemove:n})}const rE={borderRadius:{...Xi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xi,borderTopRightRadius:Xi,borderBottomLeftRadius:Xi,borderBottomRightRadius:Xi,boxShadow:tE};function iE(e,t,n){const r=Ye(e)?e:Xa(e);return r.start(Wp("",r,t,n)),r.animation}function aE(e){return e instanceof SVGElement&&e.tagName!=="svg"}const oE=(e,t)=>e.depth-t.depth;class sE{constructor(){this.children=[],this.isDirty=!1}add(t){Ip(this.children,t),this.isDirty=!0}remove(t){Lp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(oE),this.isDirty=!1,this.children.forEach(t)}}function lE(e,t){const n=Zt.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Hn(r),e(a-t))};return ae.read(r,!0),()=>Hn(r)}const Rw=["TopLeft","TopRight","BottomLeft","BottomRight"],cE=Rw.length,Ng=e=>typeof e=="string"?parseFloat(e):e,$g=e=>typeof e=="number"||F.test(e);function uE(e,t,n,r,i,a){i?(e.opacity=pe(0,n.opacity!==void 0?n.opacity:1,dE(r)),e.opacityExit=pe(t.opacity!==void 0?t.opacity:1,0,fE(r))):a&&(e.opacity=pe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<cE;o++){const s=`border${Rw[o]}Radius`;let c=Bg(t,s),u=Bg(n,s);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||$g(c)===$g(u)?(e[s]=Math.max(pe(Ng(c),Ng(u),r),0),(Xt.test(u)||Xt.test(c))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=pe(t.rotate||0,n.rotate||0,r))}function Bg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const dE=Nw(0,.5,tw),fE=Nw(.5,.95,ht);function Nw(e,t,n){return r=>r<e?0:r>t?1:n(Ti(e,t,r))}function Fg(e,t){e.min=t.min,e.max=t.max}function wt(e,t){Fg(e.x,t.x),Fg(e.y,t.y)}function Vg(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function zg(e,t,n,r,i){return e-=t,e=ml(e,1/n,r),i!==void 0&&(e=ml(e,1/i,r)),e}function pE(e,t=0,n=1,r=.5,i,a=e,o=e){if(Xt.test(t)&&(t=parseFloat(t),t=pe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=pe(a.min,a.max,r);e===a&&(s-=t),e.min=zg(e.min,t,n,s,i),e.max=zg(e.max,t,n,s,i)}function Wg(e,t,[n,r,i],a,o){pE(e,t[n],t[r],t[i],t.scale,a,o)}const hE=["x","scaleX","originX"],mE=["y","scaleY","originY"];function Ug(e,t,n,r){Wg(e.x,t,hE,n?n.x:void 0,r?r.x:void 0),Wg(e.y,t,mE,n?n.y:void 0,r?r.y:void 0)}function Hg(e){return e.translate===0&&e.scale===1}function $w(e){return Hg(e.x)&&Hg(e.y)}function Yg(e,t){return e.min===t.min&&e.max===t.max}function gE(e,t){return Yg(e.x,t.x)&&Yg(e.y,t.y)}function Gg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Bw(e,t){return Gg(e.x,t.x)&&Gg(e.y,t.y)}function Kg(e){return gt(e.x)/gt(e.y)}function Qg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class vE{constructor(){this.members=[]}add(t){Ip(this.members,t),t.scheduleRender()}remove(t){if(Lp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yE(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||"none"}const lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},fa=typeof window<"u"&&window.MotionDebug!==void 0,qc=["","X","Y","Z"],xE={visibility:"hidden"},Xg=1e3;let wE=0;function eu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Fw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=K1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ae,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Fw(r)}function Vw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=wE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fa&&(lr.totalNodes=lr.resolvedTargetDeltas=lr.recalculatedProjection=0),this.nodes.forEach(kE),this.nodes.forEach(EE),this.nodes.forEach(DE),this.nodes.forEach(jE),fa&&window.MotionDebug.record(lr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new sE)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Op),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const c=this.eventHandlers.get(o);c&&c.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=aE(o),this.instance=o;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=lE(p,250),Ds.hasAnimatedSinceResize&&(Ds.hasAnimatedSinceResize=!1,this.nodes.forEach(Jg))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||OE,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Bw(this.targetLayout,x)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const k={...Ep(y,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else p||Jg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(AE),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:c}=this.options;if(s===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zg);return}this.isUpdating||this.nodes.forEach(TE),this.isUpdating=!1,this.nodes.forEach(PE),this.nodes.forEach(bE),this.nodes.forEach(SE),this.clearAllSnapshots();const s=Zt.now();Me.delta=fn(0,1e3/60,s-Me.timestamp),Me.timestamp=s,Me.isProcessing=!0,Uc.update.process(Me),Uc.preRender.process(Me),Uc.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,yp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(CE),this.sharedNodes.forEach(_E)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!$w(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(s||sr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let c=this.removeElementScroll(s);return o&&(c=this.removeTransform(c)),ME(c),{animationId:this.root.animationId,measuredBox:s,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return be();const c=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(RE))){const{scroll:d}=this.root;d&&(ei(c.x,d.offset.x),ei(c.y,d.offset.y))}return c}removeElementScroll(o){var s;const c=be();if(wt(c,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&wt(c,o),ei(c.x,f.offset.x),ei(c.y,f.offset.y))}return c}applyTransform(o,s=!1){const c=be();wt(c,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ti(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),sr(d.latestValues)&&ti(c,d.latestValues)}return sr(this.latestValues)&&ti(c,this.latestValues),c}removeTransform(o){const s=be();wt(s,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!sr(u.latestValues))continue;Md(u.latestValues)&&u.updateSnapshot();const d=be(),f=u.measurePageBox();wt(d,f),Ug(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return sr(this.latestValues)&&Ug(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),Pa(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=be(),this.targetWithTransforms=be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),B5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wt(this.target,this.layout.layoutBox),Iw(this.target,this.targetDelta)):wt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),Pa(this.relativeTargetOrigin,this.target,m.target),wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fa&&lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Md(this.parent.latestValues)||_w(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),c=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;wt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;K5(this.layoutCorrected,this.treeScale,this.path,c),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=be());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Vg(this.prevProjectionDelta.x,this.projectionDelta.x),Vg(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!Qg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Qg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),fa&&lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qr(),this.projectionDelta=qr(),this.projectionDeltaWithTransform=qr()}setAnimationOrigin(o,s=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=be(),m=c?c.source:void 0,x=this.layout?this.layout.source:void 0,y=m!==x,S=this.getStack(),g=!S||S.members.length<=1,h=!!(y&&!g&&this.options.crossfade===!0&&!this.path.some(LE));this.animationProgress=0;let v;this.mixTargetDelta=k=>{const j=k/1e3;qg(f.x,o.x,j),qg(f.y,o.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pa(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IE(this.relativeTarget,this.relativeTargetOrigin,p,j),v&&gE(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=be()),wt(v,this.relativeTarget)),y&&(this.animationValues=d,uE(d,u,this.latestValues,j,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{Ds.hasAnimatedSinceResize=!0,this.currentAnimation=iE(0,Xg,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:c,layout:u,latestValues:d}=o;if(!(!s||!c||!u)){if(this!==o&&this.layout&&u&&zw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||be();const f=gt(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+f;const p=gt(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+p}wt(s,c),ti(s,d),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new vE),this.sharedNodes.get(o).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(s=!0),!s)return;const u={};c.z&&eu("z",o,u,this.animationValues);for(let d=0;d<qc.length;d++)eu(`rotate${qc[d]}`,o,u,this.animationValues),eu(`skew${qc[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}getProjectionStyles(o){var s,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return xE;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ps(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Ps(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!sr(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=yE(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y:x}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in ul){if(p[y]===void 0)continue;const{correct:S,applyTo:g}=ul[y],h=u.transform==="none"?p[y]:S(p[y],f);if(g){const v=g.length;for(let k=0;k<v;k++)u[g[k]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=f===this?Ps(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Zg),this.root.sharedNodes.clear()}}}function bE(e){e.updateLayout()}function SE(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?bt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],m=gt(p);p.min=r[f].min,p.max=p.min+m}):zw(a,n.layoutBox,r)&&bt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],m=gt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const s=qr();Ta(s,r,n.layoutBox);const c=qr();o?Ta(c,e.applyTransform(i,!0),n.measuredBox):Ta(c,r,n.layoutBox);const u=!$w(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const x=be();Pa(x,n.layoutBox,p.layoutBox);const y=be();Pa(y,r,m.layoutBox),Bw(x,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function kE(e){fa&&lr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function jE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function CE(e){e.clearSnapshot()}function Zg(e){e.clearMeasurements()}function TE(e){e.isLayoutDirty=!1}function PE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Jg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function EE(e){e.resolveTargetDelta()}function DE(e){e.calcProjection()}function AE(e){e.resetSkewAndRotation()}function _E(e){e.removeLeadSnapshot()}function qg(e,t,n){e.translate=pe(t.translate,0,n),e.scale=pe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function e0(e,t,n,r){e.min=pe(t.min,n.min,r),e.max=pe(t.max,n.max,r)}function IE(e,t,n,r){e0(e.x,t.x,n.x,r),e0(e.y,t.y,n.y,r)}function LE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const OE={duration:.45,ease:[.4,0,.1,1]},t0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),n0=t0("applewebkit/")&&!t0("chrome/")?Math.round:ht;function r0(e){e.min=n0(e.min),e.max=n0(e.max)}function ME(e){r0(e.x),r0(e.y)}function zw(e,t,n){return e==="position"||e==="preserve-aspect"&&!$5(Kg(t),Kg(n),.2)}function RE(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const NE=Vw({attachResizeListener:(e,t)=>Ja(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tu={current:void 0},Ww=Vw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!tu.current){const e=new NE({});e.mount(window),e.setOptions({layoutScroll:!0}),tu.current=e}return tu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$E={pan:{Feature:eE},drag:{Feature:q5,ProjectionNode:Ww,MeasureLayout:Mw}};function i0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&ae.postRender(()=>a(t,uo(t)))}class BE extends Jn{mount(){const{current:t}=this.node;t&&(this.unmount=$T(t,n=>(i0(this.node,n,"Start"),r=>i0(this.node,r,"End"))))}unmount(){}}class FE extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=co(Ja(this.node.current,"focus",()=>this.onFocus()),Ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function a0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&ae.postRender(()=>a(t,uo(t)))}class VE extends Jn{mount(){const{current:t}=this.node;t&&(this.unmount=zT(t,n=>(a0(this.node,n,"Start"),(r,{success:i})=>a0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Nd=new WeakMap,nu=new WeakMap,zE=e=>{const t=Nd.get(e.target);t&&t(e)},WE=e=>{e.forEach(zE)};function UE({root:e,...t}){const n=e||document;nu.has(n)||nu.set(n,{});const r=nu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(WE,{root:e,...t})),r[i]}function HE(e,t,n){const r=UE(t);return Nd.set(e,n),r.observe(e),()=>{Nd.delete(e),r.unobserve(e)}}const YE={some:0,all:1};class GE extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:YE[i]},s=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return HE(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(KE(t,n))&&this.startObserver()}unmount(){}}function KE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const QE={inView:{Feature:GE},tap:{Feature:VE},focus:{Feature:FE},hover:{Feature:BE}},XE={layout:{ProjectionNode:Ww,MeasureLayout:Mw}},$d={current:null},Uw={current:!1};function ZE(){if(Uw.current=!0,!!pp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>$d.current=e.matches;e.addListener(t),t()}else $d.current=!1}const JE=[...mw,We,Yn],qE=e=>JE.find(hw(e)),o0=new WeakMap;function eD(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Ye(i))e.addValue(r,i);else if(Ye(a))e.addValue(r,Xa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Xa(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const s0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tD{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Fp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=Zt.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,ae.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=o;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ul(n),this.isVariantNode=k1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const x=p[m];c[m]!==void 0&&Ye(x)&&x.set(c[m],!1)}}mount(t){this.current=t,o0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Uw.current||ZE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$d.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){o0.delete(this.current),this.projection&&this.projection.unmount(),Hn(this.notifyUpdate),Hn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Ar.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Pi){const n=Pi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<s0.length;r++){const i=s0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=eD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Xa(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(fw(i)||rw(i))?i=parseFloat(i):!qE(i)&&Yn.test(n)&&(i=cw(t,n)),this.setBaseTarget(t,Ye(i)?i.get():i)),Ye(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=wp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Ye(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Op),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Hw extends tD{constructor(){super(...arguments),this.KeyframeResolver=gw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ye(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function nD(e){return window.getComputedStyle(e)}class rD extends Hw{constructor(){super(...arguments),this.type="html",this.renderInstance=I1}readValueFromInstance(t,n){if(Ar.has(n)){const r=Bp(n);return r&&r.default||0}else{const r=nD(t),i=(D1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Lw(t,n)}build(t,n,r){kp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Pp(t,n,r)}}class iD extends Hw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=be}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ar.has(n)){const r=Bp(n);return r&&r.default||0}return n=L1.has(n)?n:vp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return R1(t,n,r)}build(t,n,r){jp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){O1(t,n,r,i)}mount(t){this.isSVGTag=Tp(t.tagName),super.mount(t)}}const aD=(e,t)=>xp(e)?new iD(t):new rD(t,{allowProjection:e!==w.Fragment}),oD=_T({...D5,...QE,...$E,...XE},aD),I=YC(oD),sD=b(I.nav)`
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
`,lD=b.div`
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
`,cD=b(Wx)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,uD=b.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,dD=b.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,fD=b(I.button)`
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
`,pD=b(I.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,hD=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"5"}),l.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),l.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),l.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),l.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),l.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),l.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),l.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),l.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),mD=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),gD=()=>{const{isDark:e,toggleTheme:t}=np();return l.jsx(sD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:l.jsxs(lD,{children:[l.jsx(cD,{to:"/","aria-label":"Go to homepage",children:l.jsx(uD,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),l.jsx(dD,{}),l.jsx(fD,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:l.jsx(Pe,{mode:"wait",children:l.jsx(pD,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?l.jsx(mD,{}):l.jsx(hD,{})},e?"moon":"sun")})})]})})},vD=b(I.div)`
  position: relative;
`,yD=b(Wx)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Yw=b(I.div)`
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
`,xD=b(I.div)`
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

  ${Yw}:hover &::before {
    opacity: 0.3;
  }
`,wD=b.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,bD={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},SD={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},kD=({title:e,icon:t,to:n})=>l.jsx(vD,{variants:bD,whileHover:"hover",whileTap:"tap",children:l.jsx(yD,{to:n,children:l.jsxs(Yw,{variants:SD,children:[l.jsx(xD,{children:t}),l.jsx(wD,{children:e})]})})}),jD=b.div`
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
`,CD=b(I.div)`
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
`,TD={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},PD=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),l.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),l.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),l.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),l.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),l.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),l.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),l.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),l.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),l.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),ED=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),l.jsx("path",{d:"M1 10h22"}),l.jsx("path",{d:"M17 14h.01"})]}),DD=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),AD=[{id:"tax-manager",title:"Tax Manager",icon:l.jsx(PD,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:l.jsx(ED,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:l.jsx(DD,{}),to:"/canvas-manager"}],_D=()=>l.jsx(jD,{children:l.jsx(CD,{variants:TD,initial:"hidden",animate:"visible",children:AD.map(e=>l.jsx(kD,{title:e.title,icon:e.icon,to:e.to},e.id))})}),Gw=b.div`
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
`;const As=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],l0=75e3,ni=4,ID=12e5,LD=6e4,c0=5e6,u0=10,OD=12,MD=1800;function wr(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const a=r.slice(-3),o=r.slice(0,-3);if(o.length>0){const s=[];let c=o;for(;c.length>0;)c.length>=2?(s.unshift(c.slice(-2)),c=c.slice(0,-2)):(s.unshift(c),c="");i=s.join(",")+","+a}else i=a;return(t?"-":"")+i}function G(e){return"₹"+wr(e)}function te(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,a]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+wr(parseInt(i))+"."+a}function d0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:wr(e)}function RD(e){for(let t=As.length-1;t>=0;t--)if(e>As[t].from)return As[t].rate;return 0}function ND(e){const t=[];let n=e,r=0;for(const i of As){const a=i.from,s=(i.to??1/0)-a;if(n<=0){t.push({from:a,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,s),u=c*i.rate/100;t.push({from:a,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function $D(e,t){if(t>c0){const r=e*(1+u0/100)*(1+ni/100),i=t-c0,o=(e+i)*(1+ni/100),s=o<r,c=Math.min(r,o),u=c/(1+ni/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:u0,surchargeAmount:d,marginalReliefApplied:s,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(ni/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function f0(e,t,n,r,i,a,o){const s=e*t/100,c=e-s;let u=0;i==="percentage"?u=e*a/100:i==="amount"&&(u=a);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=s*OD/100,p=f):(f=MD*12,p=f));const m=e-p,x=o.map(ee=>({name:ee.name,amount:ee.amount*12})),y=x.reduce((ee,we)=>ee+we.amount,0),S=Math.max(0,m-l0),{slabs:g,totalTax:h}=ND(S);let v=0,k=h;S<=ID&&(v=Math.min(h,LD),k=Math.max(0,h-v));const{surchargeApplicable:j,surchargeRate:C,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cess:O,totalTax:R}=$D(k,S),$=f+p,W=R,V=f+R+y,E=m-f-R-y,B=E/12,z=m>0?R/m*100:0,A=RD(S);let _=0,M=u;if(u>0&&A>0){let ee=u*A/100;j&&(ee=ee*(1+C/100)),_=ee*(1+ni/100),M=u-_}const U=E+M,H=U/12;return{baseSalary:e,basicSalary:s,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:m,standardDeduction:l0,additionalDeductions:x,totalAdditionalDeductions:y,taxableIncome:S,slabs:g,taxBeforeSurcharge:h,surchargeApplicable:j,surchargeRate:C,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cessRate:ni,cess:O,totalTax:R,rebate87A:v,totalPFDeduction:$,totalTaxDeduction:W,totalDeductions:V,netSalaryYearly:E,netSalaryMonthly:B,effectiveTaxRate:z,bonusTaxRate:A,bonusTaxAmount:_,bonusAfterTax:M,totalIncomeYearly:U,totalIncomeMonthly:H}}function BD(e){const t=f0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=f0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const Up="taxCalculatorInput";function FD(e){localStorage.setItem(Up,JSON.stringify(e))}function VD(){localStorage.removeItem(Up)}function Kw(){const e=localStorage.getItem(Up);if(e)try{return JSON.parse(e)}catch{return null}return null}const zD={financialYear:"FY 2025-26"},WD=b(I.div)`
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
`,Zi=b(I.div)`
  padding: var(--space-xs) 0;
`,Ji=b.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`,UD=b.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,Rr=b.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,p0=b.label`
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
`,ru=b.div`
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
`,iu=b.div`
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
`,h0=b.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`,qi=b(I.button)`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: var(--radius-md);
  cursor: pointer;
  white-space: nowrap;
`,HD=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,au=b(I.div)`
  display: flex;
  gap: var(--space-sm);
  align-items: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`,ou=b(I.button)`
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
`,YD=b(I.button)`
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
`,GD=b.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,KD=b(I.button)`
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
`,QD=b(I.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,Wo=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,XD=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),su=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Xe={type:"spring",stiffness:300,damping:30,mass:.8},ZD={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Xe}},JD={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Xe},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Xe},opacity:{duration:.1}}}},qD={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Xe},exit:{opacity:0,x:-20,transition:{duration:.15}}};function lu(e){const t=e.replace(/[^\d]/g,"");return t?wr(parseInt(t)):""}function Uo(e){return parseInt(e.replace(/,/g,""))||0}const e4=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=w.useState(""),[a,o]=w.useState("50"),[s,c]=w.useState("percentage"),[u,d]=w.useState("none"),[f,p]=w.useState(""),[m,x]=w.useState([]),[y,S]=w.useState(""),[g,h]=w.useState(!1),v=w.useRef(!1);w.useEffect(()=>{const E=Kw();E&&(i(wr(E.baseSalary)),o(E.basicPercentage.toString()),c(E.pfType),d(E.bonusType),p(E.bonusValue>0?E.bonusType==="amount"?wr(E.bonusValue):E.bonusValue.toString():""),x(E.additionalDeductions.map(B=>({name:B.name,amount:wr(B.amount)}))),S(E.hikePercentage>0?E.hikePercentage.toString():"")),h(!0)},[]),w.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{O()},100))},[g,n,r]);const k=E=>{i(lu(E))},j=E=>{p(lu(E))},C=(E,B)=>{const z=[...m];z[E].amount=lu(B),x(z)},T=()=>{x([...m,{name:"",amount:""}])},P=E=>{x(m.filter((B,z)=>z!==E))},L=(E,B)=>{const z=[...m];z[E].name=B,x(z)},O=()=>{const E={baseSalary:Uo(r),basicPercentage:parseFloat(a)||50,calculatePF:!0,pfType:s,bonusType:u,bonusValue:u==="amount"?Uo(f):parseFloat(f)||0,additionalDeductions:m.filter(B=>B.name&&B.amount).map(B=>({name:B.name,amount:Uo(B.amount)})),hikePercentage:parseFloat(y)||0};FD(E),e(E)},R=()=>{i(""),o("50"),c("percentage"),d("none"),p(""),x([]),S(""),VD(),t==null||t()},W=Uo(r)>0,V=r||m.length>0||u!=="none"||y;return l.jsxs(WD,{variants:ZD,initial:"hidden",animate:"visible",children:[l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Salary Details"}),l.jsxs(UD,{children:[l.jsxs(Rr,{$flex:2,children:[l.jsx(p0,{children:"Yearly Base Salary / CTC *"}),l.jsx(ru,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:E=>k(E.target.value)})})]}),l.jsxs(Rr,{children:[l.jsx(p0,{children:"Basic %"}),l.jsx(iu,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"40",value:a,onChange:E=>o(E.target.value),min:"0",max:"100"})})]})]})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Provident Fund (PF)"}),l.jsxs(h0,{children:[l.jsx(qi,{$active:s==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Xe,children:"12% of Basic"}),l.jsx(qi,{$active:s==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Xe,children:"Flat ₹1,800/mo"})]})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Bonus (Optional)"}),l.jsxs(h0,{children:[l.jsx(qi,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Xe,children:"None"}),l.jsx(qi,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Xe,children:"Percentage"}),l.jsx(qi,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Xe,children:"Amount"})]}),l.jsx(Pe,{initial:!1,children:u!=="none"&&l.jsx(I.div,{initial:"hidden",animate:"visible",exit:"exit",variants:JD,style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:l.jsxs(au,{children:[l.jsx(Rr,{children:u==="percentage"?l.jsx(iu,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:E=>p(E.target.value)})}):l.jsx(ru,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:E=>j(E.target.value)})})}),l.jsx(Pe,{children:f&&l.jsx(ou,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Xe,children:l.jsx(su,{})})})]})},"bonus-input")})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Additional Monthly Deductions"}),l.jsxs(HD,{children:[l.jsx(Pe,{mode:"popLayout",children:m.map((E,B)=>l.jsxs(au,{variants:qD,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[l.jsx(Rr,{children:l.jsx(rr,{type:"text",placeholder:"Name (e.g., Cab)",value:E.name,onChange:z=>L(B,z.target.value)})}),l.jsx(Rr,{children:l.jsx(ru,{children:l.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:E.amount,onChange:z=>C(B,z.target.value)})})}),l.jsx(ou,{onClick:()=>P(B),whileHover:{scale:1.1},whileTap:{scale:.9},transition:Xe,children:l.jsx(su,{})})]},B))}),l.jsxs(YD,{onClick:T,whileHover:{scale:1.02},whileTap:{scale:.98},transition:Xe,children:[l.jsx(XD,{}),"Add Deduction"]})]})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Hike / Appraisal (Optional)"}),l.jsxs(au,{style:{marginBottom:0},children:[l.jsx(Rr,{children:l.jsx(iu,{children:l.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:y,onChange:E=>S(E.target.value),min:"0",max:"200"})})}),l.jsx(Pe,{children:y&&l.jsx(ou,{onClick:()=>S(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Xe,children:l.jsx(su,{})})})]})]}),l.jsxs(GD,{children:[l.jsx(KD,{onClick:O,disabled:!W,whileHover:W?{scale:1.02}:{},whileTap:W?{scale:.98}:{},transition:Xe,children:"Calculate Tax"}),l.jsx(Pe,{children:V&&l.jsx(QD,{onClick:R,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Xe,children:"Reset"})})]})]})},t4=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,m0=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Ho=b.div`
  padding: var(--space-md);
  background: ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.1)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.2)":"var(--border)"};
  border-radius: var(--radius-md);
`,Yo=b.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
`,Go=b.div`
  font-size: ${({$large:e})=>e?"18px":"15px"};
  font-weight: 600;
  color: var(--text-primary);
`,Ko=b.span`
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
`,Qe=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"var(--green)":"var(--text-tertiary)"};
  margin-top: 2px;
  display: block;
`,Qo=b.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-xs);
`,cu=b.div`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,g0=b.div`
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
`,v0=b(mr)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,n4=b(mr)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,r4=b(mr)`
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
`,Hp=b(I.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,y0=b(Hp)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,i4=b(Hp)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,a4=b(Hp)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,x0=b.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,o4=b.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,w0=b.button`
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
`,b0=b.div`
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
`,s4=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,S0=b(I.div)`
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
`,bn=b.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"var(--accent)":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l4=b(I.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,Bd=b.span`
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
`,c4=b(Bd)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,ct=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-md) 0;
  opacity: 0.6;
`,oe=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-xs) 0;
  gap: var(--space-sm);

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`,se=b.span`
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
`,le=b.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"var(--accent)":t?"#e05555":"var(--text-primary)"};
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`,k0=b.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,j0=b(I.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,C0=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,T0=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,P0=b.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,E0=b.span`
  font-size: 11px;
  color: var(--text-secondary);
`,D0=b.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,A0=b(I.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,_0=b.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,u4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),d4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),l.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),l.jsx("path",{d:"M12 17.5v-11"})]}),uu=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"})]}),f4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),l.jsx("path",{d:"M12 8v13"}),l.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),l.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),I0=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),l.jsx("polyline",{points:"16 7 22 7 22 13"})]}),p4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},Sn={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},h4=({breakdown:e})=>{var f;const[t,n]=w.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",a=Math.max(...e.slabs.map(p=>p.taxInSlab),1),o=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&o.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const s=o.reduce((p,m)=>p+m.value,0),c=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],u=c.reduce((p,m)=>p+m.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${G(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),l.jsxs(t4,{variants:p4,initial:"hidden",animate:"visible",children:[e.postHike&&l.jsxs(v0,{variants:Sn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(I0,{}),"Base Salary (CTC)"]})}),l.jsx(y0,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:G(e.baseSalary)}),l.jsx(ct,{}),l.jsxs(Qo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(cu,{children:G(e.postHike.baseSalary)}),l.jsxs(g0,{children:["+",G(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),l.jsxs(v0,{variants:Sn,children:[l.jsxs(ir,{children:[l.jsxs(vn,{children:[l.jsx(u4,{}),"In-Hand Salary (Base)"]}),l.jsxs(o4,{children:[l.jsx(w0,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),l.jsx(w0,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),l.jsx(y0,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:te(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(ct,{}),l.jsxs(Qo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(cu,{children:te(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),l.jsxs(g0,{children:["+",G(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&l.jsxs(n4,{variants:Sn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(f4,{}),"Bonus Summary",e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsx(i4,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:G(e.bonus)}),l.jsx(x0,{children:"Gross Bonus (before tax)"}),l.jsx(ct,{}),l.jsx(Qo,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),l.jsx(cu,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:te(e.bonusAfterTax)}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(ct,{}),l.jsxs(Qo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsxs(m0,{style:{marginTop:0},children:[l.jsxs(Ho,{children:[l.jsx(Yo,{children:"Gross Bonus"}),l.jsx(Go,{$large:!0,children:G(e.postHike.bonus)}),l.jsxs(Qe,{$positive:!0,children:["+",G(e.postHike.bonus-e.bonus)]})]}),l.jsxs(Ho,{$highlight:!0,children:[l.jsx(Yo,{children:"In-Hand Bonus"}),l.jsx(Go,{$large:!0,children:te(e.postHike.bonusAfterTax)}),l.jsxs(Qe,{$positive:!0,children:["+",G(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),l.jsx(ct,{}),l.jsxs(b0,{children:[l.jsxs(yn,{children:[l.jsx(xn,{children:"Tax Rate"}),l.jsxs(wn,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Tax Deducted"}),l.jsxs(wn,{style:{color:"#e05555"},children:["-",te(e.bonusTaxAmount)]})]})]}),l.jsx(A0,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:l.jsxs(_0,{children:["Bonus is taxed at your ",l.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&l.jsxs(r4,{variants:Sn,children:[l.jsxs(ir,{children:[l.jsxs(vn,{children:[l.jsx(I0,{}),"Total Combined Income",e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsx(Bd,{children:"Yearly"})]}),e.postHike?l.jsxs(m0,{children:[l.jsxs(Ho,{children:[l.jsx(Yo,{children:"Current"}),l.jsx(Go,{$large:!0,children:te(e.totalIncomeYearly)})]}),l.jsxs(Ho,{$highlight:!0,children:[l.jsxs(Yo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Go,{$large:!0,children:te(e.postHike.totalIncomeYearly)}),l.jsxs(Qe,{$positive:!0,children:["+",G(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(a4,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:te(e.totalIncomeYearly)}),l.jsx(x0,{children:"Base salary + Bonus (after tax)"})]}),l.jsx(ct,{}),l.jsxs(oe,{children:[l.jsx(se,{children:"Base In-Hand (Yearly)"}),l.jsx(le,{children:te(e.netSalaryYearly)})]}),l.jsxs(oe,{children:[l.jsx(se,{children:"Bonus In-Hand (Yearly)"}),l.jsx(le,{children:te(e.bonusAfterTax)})]}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Total Combined Income"}),l.jsx(le,{$highlight:!0,children:te(e.totalIncomeYearly)})]})]}),l.jsxs(mr,{variants:Sn,children:[l.jsxs(vn,{style:{marginBottom:"var(--space-sm)"},children:[l.jsx(uu,{}),"Summary",e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsxs(b0,{children:[l.jsxs(yn,{children:[l.jsx(xn,{children:"Gross Salary"}),l.jsx(wn,{children:G(e.grossSalary*r)}),e.postHike&&l.jsxs(Qe,{$positive:!0,children:["→ ",G(e.postHike.grossSalary*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Total Tax"}),l.jsx(wn,{children:te(e.totalTax*r)}),e.postHike&&l.jsxs(Qe,{children:["→ ",te(e.postHike.totalTax*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Employee PF"}),l.jsx(wn,{children:G(e.employeePF*r)}),e.postHike&&l.jsxs(Qe,{$positive:!0,children:["→ ",G(e.postHike.employeePF*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Employer PF"}),l.jsx(wn,{children:G(e.employerPF*r)}),e.postHike&&l.jsxs(Qe,{$positive:!0,children:["→ ",G(e.postHike.employerPF*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Total PF"}),l.jsx(wn,{children:G((e.employeePF+e.employerPF)*r)}),e.postHike&&l.jsxs(Qe,{$positive:!0,children:["→ ",G((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),l.jsxs(yn,{children:[l.jsx(xn,{children:"Eff. Tax Rate"}),l.jsxs(wn,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&l.jsxs(Qe,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),l.jsx(ct,{}),l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),l.jsx(k0,{children:o.map((p,m)=>l.jsx(j0,{$color:p.color,initial:{width:0},animate:{width:`${p.value/s*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),l.jsx(C0,{children:o.map((p,m)=>l.jsxs(T0,{children:[l.jsx(P0,{$color:p.color}),l.jsx(E0,{children:p.label}),l.jsx(D0,{children:G(p.value*r)})]},m))}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(k0,{children:c.map((p,m)=>l.jsx(j0,{$color:p.color,initial:{width:0},animate:{width:`${p.value/u*100}%`},transition:{delay:.5+m*.1,duration:.5}},m))}),l.jsx(C0,{children:c.map((p,m)=>l.jsxs(T0,{children:[l.jsx(P0,{$color:p.color}),l.jsx(E0,{children:p.label}),l.jsx(D0,{children:G(p.value*r)})]},m))})]}),d.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(ct,{}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,m)=>l.jsx(A0,{children:l.jsx(_0,{dangerouslySetInnerHTML:{__html:p}})},m))})]})]}),l.jsxs(mr,{variants:Sn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(d4,{}),"Tax Slabs",l.jsx(Bd,{children:zD.financialYear}),e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsxs(s4,{children:[l.jsxs(S0,{$isHeader:!0,children:[l.jsx(bn,{children:"Slab"}),l.jsx(bn,{$align:"center",children:"Rate"}),l.jsx(bn,{$align:"right",children:"Amount"}),l.jsx(bn,{$align:"right",children:"Tax"})]}),l.jsx(Pe,{children:e.slabs.map((p,m)=>{var x,y;return l.jsxs(S0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[l.jsxs(bn,{children:[d0(p.from)," - ",d0(p.to),p.taxableInSlab>0&&l.jsx(l4,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/a*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),l.jsxs(bn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),l.jsxs(bn,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?G(p.taxableInSlab):"-",e.postHike&&((x=e.postHike.slabs[m])==null?void 0:x.taxableInSlab)>0&&l.jsxs(Qe,{$positive:!0,children:["→ ",G(e.postHike.slabs[m].taxableInSlab)]})]}),l.jsxs(bn,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?G(p.taxInSlab):"-",e.postHike&&((y=e.postHike.slabs[m])==null?void 0:y.taxInSlab)>0&&l.jsxs(Qe,{children:["→ ",G(e.postHike.slabs[m].taxInSlab)]})]})]},m)})})]}),l.jsx(ct,{}),l.jsxs(oe,{children:[l.jsx(se,{children:"Tax Before Surcharge"}),l.jsxs(le,{children:[te(e.taxBeforeSurcharge),e.postHike&&l.jsxs(Qe,{children:["→ ",te(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&l.jsxs(oe,{children:[l.jsx(se,{children:"Section 87A Rebate"}),l.jsxs(le,{$negative:!0,children:["-",G(e.rebate87A)]})]}),e.surchargeApplicable&&l.jsxs(oe,{children:[l.jsxs(se,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&l.jsx(c4,{children:"Marginal Relief"})]}),l.jsxs(le,{children:[te(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&l.jsxs(Qe,{children:["→ ",te(e.postHike.surchargeAmount)]})]})]}),l.jsxs(oe,{children:[l.jsxs(se,{children:["Cess (",e.cessRate,"%)"]}),l.jsxs(le,{children:[te(e.cess),e.postHike&&l.jsxs(Qe,{children:["→ ",te(e.postHike.cess)]})]})]}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Total Tax"}),l.jsxs(le,{$highlight:!0,children:[te(e.totalTax),e.postHike&&l.jsxs(Qe,{children:["→ ",te(e.postHike.totalTax)]})]})]})]}),l.jsxs(mr,{variants:Sn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(uu,{}),"Yearly Breakdown"]})}),l.jsxs(oe,{children:[l.jsx(se,{children:"Base Salary (CTC)"}),l.jsx(le,{children:G(e.baseSalary)})]}),e.employerPF>0&&l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Employer PF"}),l.jsxs(le,{$negative:!0,children:["-",G(e.employerPF)]})]}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Gross Salary"}),l.jsx(le,{children:G(e.grossSalary)})]}),l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Standard Deduction"}),l.jsxs(le,{$negative:!0,children:["-",G(e.standardDeduction)]})]}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Taxable Income"}),l.jsx(le,{children:G(e.taxableIncome)})]}),l.jsx(ct,{}),l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Income Tax"}),l.jsxs(le,{$negative:!0,children:["-",te(e.totalTax)]})]}),e.employeePF>0&&l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Employee PF"}),l.jsxs(le,{$negative:!0,children:["-",G(e.employeePF)]})]}),e.additionalDeductions.map((p,m)=>l.jsxs(oe,{children:[l.jsxs(se,{children:["Less: ",p.name]}),l.jsxs(le,{$negative:!0,children:["-",G(p.amount)]})]},m)),l.jsx(ct,{}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Net In-Hand (Yearly)"}),l.jsx(le,{$highlight:!0,children:te(e.netSalaryYearly)})]})]}),l.jsxs(mr,{variants:Sn,children:[l.jsx(ir,{children:l.jsxs(vn,{children:[l.jsx(uu,{}),"Monthly Breakdown"]})}),l.jsxs(oe,{children:[l.jsx(se,{children:"Base Salary (CTC)"}),l.jsx(le,{children:G(e.baseSalary/12)})]}),e.employerPF>0&&l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Employer PF"}),l.jsxs(le,{$negative:!0,children:["-",G(e.employerPF/12)]})]}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Gross Salary"}),l.jsx(le,{children:G(e.grossSalary/12)})]}),l.jsx(ct,{}),l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Income Tax"}),l.jsxs(le,{$negative:!0,children:["-",te(e.totalTax/12)]})]}),e.employeePF>0&&l.jsxs(oe,{children:[l.jsx(se,{children:"Less: Employee PF"}),l.jsxs(le,{$negative:!0,children:["-",G(e.employeePF/12)]})]}),e.additionalDeductions.map((p,m)=>l.jsxs(oe,{children:[l.jsxs(se,{children:["Less: ",p.name]}),l.jsxs(le,{$negative:!0,children:["-",G(p.amount/12)]})]},m)),l.jsx(ct,{}),l.jsxs(oe,{children:[l.jsx(se,{$bold:!0,children:"Net In-Hand (Monthly)"}),l.jsx(le,{$highlight:!0,children:te(e.netSalaryMonthly)})]})]})]})},m4=b(I.div)`
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
`,g4=b.div`
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
`,v4=b(I.div)`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,y4=b(I.div)`
  min-width: 0;
`,x4={type:"spring",stiffness:300,damping:30,mass:.8},w4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},L0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:x4}},b4=()=>{const[e,t]=w.useState(null),[n,r]=w.useState(!1);w.useEffect(()=>{const o=Kw();o&&o.baseSalary>0&&r(!0)},[]);const i=w.useCallback(o=>{const s=BD(o);t(s),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),a=w.useCallback(()=>{t(null)},[]);return l.jsx(m4,{variants:w4,initial:"hidden",animate:"visible",children:l.jsx(Gw,{$maxWidth:"wide",children:l.jsxs(g4,{children:[l.jsx(v4,{variants:L0,children:l.jsx(e4,{onCalculate:i,onReset:a,autoCalculate:n})}),l.jsx(y4,{id:"results",variants:L0,children:l.jsx(Pe,{mode:"wait",children:e&&l.jsx(h4,{breakdown:e},"results")})})]})})})},br=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],Qw="expense-manager-transactions",Xw="expense-manager-initial-balances",Zw="expense-manager-initial-cc-bills";function du(e){localStorage.setItem(Qw,JSON.stringify(e))}function S4(){const e=localStorage.getItem(Qw);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function O0(e){localStorage.setItem(Xw,JSON.stringify(e))}function k4(){const e=localStorage.getItem(Xw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function M0(e){localStorage.setItem(Zw,JSON.stringify(e))}function j4(){const e=localStorage.getItem(Zw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function _r(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Jw(e){return new Date(e+"T00:00:00")}function C4(e){return Jw(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function R0(e){return e===_r(new Date)}function T4(e){return e<_r(new Date)}function P4(e,t){if(!e.statementDate)return"";const n=Jw(t),r=n.getFullYear(),i=n.getMonth(),a=n.getDate();let o=r,s=i;a<e.statementDate&&(s-=1,s<0&&(s=11,o-=1));const c=new Date(o,s,e.statementDate);return _r(c)}function E4(e,t,n,r,i={}){const a=t.filter(s=>s.date<=n&&(s.accountId===e.id||s.linkedAccountId===e.id));let o=0;if(e.type==="bank"){o=r[e.id]||0;for(const s of a)s.accountId===e.id&&(s.type==="bank_credit"?o+=s.amount:s.type==="bank_debit"&&(o-=s.amount)),s.linkedAccountId===e.id&&s.type==="cc_payment"&&(o-=s.amount);return{account:e,balance:o}}else{o=-(i[e.id]||0);for(const f of a)f.accountId===e.id&&(f.type==="credit_card_spend"?o-=f.amount:f.type==="cc_payment"&&(o+=f.amount));const c=P4(e,n),d=a.filter(f=>f.date>c&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:o,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,o))}}}function D4(e,t,n,r={}){return br.map(i=>E4(i,e,t,n,r))}function A4(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function _4(e,t,n,r,i,a){return{id:A4(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:a,createdAt:new Date().toISOString()}}function ri(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function I4(e){return br.find(t=>t.id===e)}function qw(){return br.filter(e=>e.type==="bank")}function e2(){return br.filter(e=>e.type==="credit_card")}function L4(e,t,n){const r={version:"1.0",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n};return JSON.stringify(r,null,2)}function O4(e,t,n){const r=L4(e,t,n),i=new Blob([r],{type:"application/json"}),a=URL.createObjectURL(i),o=document.createElement("a"),s=new Date().toISOString().split("T")[0];o.href=a,o.download=`expense-backup-${s}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)}function M4(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null)return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function R4(e){try{const t=JSON.parse(e);return M4(t)?t:null}catch{return null}}function t2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=t2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Gl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=t2(e))&&(r&&(r+=" "),r+=t);return r}const N4=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),a=Object.getOwnPropertyDescriptor(t,n);!$4(i,a)&&r||Object.defineProperty(e,n,a)},$4=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},B4=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},F4=(e,t)=>`/* Wrapped ${e}*/
${t}`,V4=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),z4=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),W4=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=F4.bind(null,r,t.toString());Object.defineProperty(i,"name",z4);const{writable:a,enumerable:o,configurable:s}=V4;Object.defineProperty(e,"toString",{value:i,writable:a,enumerable:o,configurable:s})};function U4(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))N4(e,t,i,n);return B4(e,t),W4(e,t,r),e}const Xo=2147483647,H4=new WeakMap,fu=new WeakMap,Y4=new WeakMap;function G4(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function n2(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>Xo)throw new TypeError(`The \`maxAge\` option cannot exceed ${Xo}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...a){var d;const o=t?t(a):a[0],s=G4(n,o);if(s)return s.data;const c=e.apply(this,a),u=typeof r=="function"?r(...a):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>Xo)throw new TypeError(`The \`maxAge\` function result cannot exceed ${Xo}.`)}if(n.set(o,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var m;n.delete(o),(m=fu.get(i))==null||m.delete(f)},u);(d=f.unref)==null||d.call(f);const p=fu.get(i)??new Set;p.add(f),fu.set(i,p)}return c};return U4(i,e,{ignoreNonConfigurable:!0}),H4.set(i,n),Y4.set(i,t??(a=>a[0])),i}function K4(e){return typeof e=="string"}function Q4(e,t,n){return n.indexOf(e)===t}function X4(e){return e.toLowerCase()===e}function N0(e){return e.indexOf(",")===-1?e:e.split(",")}function Fd(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Fd(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Fd(n)}if(e.indexOf("-")===-1||!X4(e))return e;var i=e.split("-"),a=i[0],o=i[1],s=o===void 0?"":o;return"".concat(a,"-").concat(s.toUpperCase())}function Z4(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,a=i===void 0?"en-US":i,o=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],c=[],u=0,d=s;u<d.length;u++){var f=d[u];c=c.concat(N0(f))}var p=navigator.language,m=p&&N0(p);o=o.concat(c,m)}return r&&o.push(a),o.filter(K4).map(Fd).filter(Q4)}var J4=n2(Z4,{cacheKey:JSON.stringify});function q4(e){return J4(e)[0]||null}var r2=n2(q4,{cacheKey:JSON.stringify});function hn(e,t,n){return function(i,a=n){const o=e(i)+a;return t(o)}}function fo(e){return function(n){return new Date(e(n).getTime()-1)}}function po(e,t){return function(r){return[e(r),t(r)]}}function ue(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function qn(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function Kl(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function Bi(e){const t=ue(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const eA=hn(ue,Bi,-100),i2=hn(ue,Bi,100),Yp=fo(i2),tA=hn(ue,Yp,-100),a2=po(Bi,Yp);function er(e){const t=ue(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const o2=hn(ue,er,-10),Gp=hn(ue,er,10),Ql=fo(Gp),s2=hn(ue,Ql,-10),l2=po(er,Ql);function Fi(e){const t=ue(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const c2=hn(ue,Fi,-1),Kp=hn(ue,Fi,1),Xl=fo(Kp),u2=hn(ue,Xl,-1),nA=po(Fi,Xl);function Qp(e,t){return function(r,i=t){const a=ue(r),o=qn(r)+i,s=new Date;return s.setFullYear(a,o,1),s.setHours(0,0,0,0),e(s)}}function Ir(e){const t=ue(e),n=qn(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const d2=Qp(Ir,-1),Xp=Qp(Ir,1),ho=fo(Xp),f2=Qp(ho,-1),rA=po(Ir,ho);function iA(e,t){return function(r,i=t){const a=ue(r),o=qn(r),s=Kl(r)+i,c=new Date;return c.setFullYear(a,o,s),c.setHours(0,0,0,0),e(c)}}function mo(e){const t=ue(e),n=qn(e),r=Kl(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const aA=iA(mo,1),Zp=fo(aA),oA=po(mo,Zp);function p2(e){return Kl(ho(e))}var Re={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},sA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Jp=[0,1,2,3,4,5,6],pu=new Map;function lA(e){return function(n,r){var i=n||r2();pu.has(i)||pu.set(i,new Map);var a=pu.get(i);return a.has(e)||a.set(e,new Intl.DateTimeFormat(i||void 0,e).format),a.get(e)(r)}}function cA(e){var t=new Date(e);return new Date(t.setHours(12))}function Lr(e){return function(t,n){return lA(e)(t,cA(n))}}var uA={day:"numeric"},dA={day:"numeric",month:"long",year:"numeric"},fA={month:"long"},pA={month:"long",year:"numeric"},hA={weekday:"short"},mA={weekday:"long"},gA={year:"numeric"},vA=Lr(uA),yA=Lr(dA),xA=Lr(fA),h2=Lr(pA),wA=Lr(hA),bA=Lr(mA),Zl=Lr(gA),SA=Jp[0],kA=Jp[5],$0=Jp[6];function qa(e,t){t===void 0&&(t=Re.ISO_8601);var n=e.getDay();switch(t){case Re.ISO_8601:return(n+6)%7;case Re.ISLAMIC:return(n+1)%7;case Re.HEBREW:case Re.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function jA(e){var t=Bi(e);return ue(t)}function CA(e){var t=er(e);return ue(t)}function Vd(e,t){t===void 0&&(t=Re.ISO_8601);var n=ue(e),r=qn(e),i=e.getDate()-qa(e,t);return new Date(n,r,i)}function TA(e,t){t===void 0&&(t=Re.ISO_8601);var n=t===Re.GREGORY?Re.GREGORY:Re.ISO_8601,r=Vd(e,t),i=ue(e)+1,a,o;do a=new Date(i,0,n===Re.ISO_8601?4:1),o=Vd(a,t),i-=1;while(e<o);return Math.round((r.getTime()-o.getTime())/(864e5*7))+1}function Sr(e,t){switch(e){case"century":return Bi(t);case"decade":return er(t);case"year":return Fi(t);case"month":return Ir(t);case"day":return mo(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function PA(e,t){switch(e){case"century":return eA(t);case"decade":return o2(t);case"year":return c2(t);case"month":return d2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function m2(e,t){switch(e){case"century":return i2(t);case"decade":return Gp(t);case"year":return Kp(t);case"month":return Xp(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function EA(e,t){switch(e){case"decade":return o2(t,-100);case"year":return c2(t,-10);case"month":return d2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function DA(e,t){switch(e){case"decade":return Gp(t,100);case"year":return Kp(t,10);case"month":return Xp(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function g2(e,t){switch(e){case"century":return Yp(t);case"decade":return Ql(t);case"year":return Xl(t);case"month":return ho(t);case"day":return Zp(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function AA(e,t){switch(e){case"century":return tA(t);case"decade":return s2(t);case"year":return u2(t);case"month":return f2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function _A(e,t){switch(e){case"decade":return s2(t,-100);case"year":return u2(t,-10);case"month":return f2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function B0(e,t){switch(e){case"century":return a2(t);case"decade":return l2(t);case"year":return nA(t);case"month":return rA(t);case"day":return oA(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function IA(e,t,n){var r=[t,n].sort(function(i,a){return i.getTime()-a.getTime()});return[Sr(e,r[0]),g2(e,r[1])]}function v2(e,t,n){return n.map(function(r){return(t||Zl)(e,r)}).join(" – ")}function LA(e,t,n){return v2(e,t,a2(n))}function y2(e,t,n){return v2(e,t,l2(n))}function OA(e){return e.getDay()===new Date().getDay()}function x2(e,t){t===void 0&&(t=Re.ISO_8601);var n=e.getDay();switch(t){case Re.ISLAMIC:case Re.HEBREW:return n===kA||n===$0;case Re.ISO_8601:case Re.GREGORY:return n===$0||n===SA;default:throw new Error("Unsupported calendar type.")}}var Wt="react-calendar__navigation";function MA(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?h2:r,a=e.formatYear,o=a===void 0?Zl:a,s=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,m=e.navigationLabel,x=e.next2AriaLabel,y=x===void 0?"":x,S=e.next2Label,g=S===void 0?"»":S,h=e.nextAriaLabel,v=h===void 0?"":h,k=e.nextLabel,j=k===void 0?"›":k,C=e.prev2AriaLabel,T=C===void 0?"":C,P=e.prev2Label,L=P===void 0?"«":P,O=e.prevAriaLabel,R=O===void 0?"":O,$=e.prevLabel,W=$===void 0?"‹":$,V=e.setActiveStartDate,E=e.showDoubleView,B=e.view,z=e.views,A=z.indexOf(B)>0,_=B!=="century",M=PA(B,t),U=_?EA(B,t):void 0,H=m2(B,t),ee=_?DA(B,t):void 0,we=function(){if(M.getFullYear()<0)return!0;var Ee=AA(B,t);return u&&u>=Ee}(),Be=_&&function(){if(U.getFullYear()<0)return!0;var Ee=_A(B,t);return u&&u>=Ee}(),ge=c&&c<H,Ke=_&&c&&c<ee;function Dt(){V(M,"prev")}function Fe(){V(U,"prev2")}function tr(){V(H,"next")}function mn(){V(ee,"next2")}function lt(Ee){var Vi=function(){switch(B){case"century":return LA(s,o,Ee);case"decade":return y2(s,o,Ee);case"year":return o(s,Ee);case"month":return i(s,Ee);default:throw new Error("Invalid view: ".concat(B,"."))}}();return m?m({date:Ee,label:Vi,locale:s||r2()||void 0,view:B}):Vi}function ec(){var Ee="".concat(Wt,"__label");return l.jsxs("button",{"aria-label":f,"aria-live":p,className:Ee,disabled:!A,onClick:n,style:{flexGrow:1},type:"button",children:[l.jsx("span",{className:"".concat(Ee,"__labelText ").concat(Ee,"__labelText--from"),children:lt(t)}),E?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"".concat(Ee,"__divider"),children:" – "}),l.jsx("span",{className:"".concat(Ee,"__labelText ").concat(Ee,"__labelText--to"),children:lt(H)})]}):null]})}return l.jsxs("div",{className:Wt,children:[L!==null&&_?l.jsx("button",{"aria-label":T,className:"".concat(Wt,"__arrow ").concat(Wt,"__prev2-button"),disabled:Be,onClick:Fe,type:"button",children:L}):null,W!==null&&l.jsx("button",{"aria-label":R,className:"".concat(Wt,"__arrow ").concat(Wt,"__prev-button"),disabled:we,onClick:Dt,type:"button",children:W}),ec(),j!==null&&l.jsx("button",{"aria-label":v,className:"".concat(Wt,"__arrow ").concat(Wt,"__next-button"),disabled:ge,onClick:tr,type:"button",children:j}),g!==null&&_?l.jsx("button",{"aria-label":y,className:"".concat(Wt,"__arrow ").concat(Wt,"__next2-button"),disabled:Ke,onClick:mn,type:"button",children:g}):null]})}var ii=function(){return ii=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ii.apply(this,arguments)},RA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function F0(e){return"".concat(e,"%")}function qp(e){var t=e.children,n=e.className,r=e.count,i=e.direction,a=e.offset,o=e.style,s=e.wrap,c=RA(e,["children","className","count","direction","offset","style","wrap"]);return l.jsx("div",ii({className:n,style:ii({display:"flex",flexDirection:i,flexWrap:s?"wrap":"nowrap"},o)},c,{children:w.Children.map(t,function(u,d){var f=a&&d===0?F0(100*a/r):null;return w.cloneElement(u,ii(ii({},u.props),{style:{flexBasis:F0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function NA(e,t,n){return t&&t>e?t:n&&n<e?n:e}function eo(e,t){return t[0]<=e&&t[1]>=e}function $A(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function w2(e,t){return eo(e[0],t)||eo(e[1],t)}function V0(e,t,n){var r=w2(t,e),i=[];if(r){i.push(n);var a=eo(e[0],t),o=eo(e[1],t);a&&i.push("".concat(n,"Start")),o&&i.push("".concat(n,"End")),a&&o&&i.push("".concat(n,"BothEnds"))}return i}function BA(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function FA(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",a=[i];if(!n)return a;var o=new Date,s=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return B0(m,n)}();if(eo(o,s)&&a.push("".concat(i,"--now")),!t||!BA(t))return a;var c=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return B0(m,t)}();$A(c,s)?a.push("".concat(i,"--active")):w2(c,s)&&a.push("".concat(i,"--hasActive"));var u=V0(c,s,"".concat(i,"--range"));a.push.apply(a,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=V0(f,s,"".concat(i,"--hover"));a.push.apply(a,p)}return a}function Jl(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,a=e.dateType,o=e.end,s=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,m=e.value,x=e.valueType,y=[],S=d;S<=o;S+=p){var g=i(S);y.push(u({classes:FA({date:g,dateType:a,hover:s,value:m,valueType:x}),date:g}))}return l.jsx(qp,{className:t,count:r,offset:c,wrap:!0,children:y})}function ql(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,a=e.formatAbbr,o=e.locale,s=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,m=e.style,x=e.tileClassName,y=e.tileContent,S=e.tileDisabled,g=e.view,h=w.useMemo(function(){var k={activeStartDate:t,date:i,view:g};return typeof x=="function"?x(k):x},[t,i,x,g]),v=w.useMemo(function(){var k={activeStartDate:t,date:i,view:g};return typeof y=="function"?y(k):y},[t,i,y,g]);return l.jsxs("button",{className:Gl(r,h),disabled:u&&d(u)>i||s&&c(s)<i||(S==null?void 0:S({activeStartDate:t,date:i,view:g})),onClick:f?function(k){return f(i,k)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:m,type:"button",children:[a?l.jsx("abbr",{"aria-label":a(o,i),children:n}):n,v]})}var zd=function(){return zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zd.apply(this,arguments)},VA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},z0="react-calendar__century-view__decades__decade";function zA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,a=i===void 0?Zl:i,o=VA(e,["classes","currentCentury","formatYear"]),s=o.date,c=o.locale,u=[];return n&&u.push.apply(u,n),u.push(z0),Bi(s).getFullYear()!==r&&u.push("".concat(z0,"--neighboringCentury")),l.jsx(ql,zd({},o,{classes:u,maxDateTransform:Ql,minDateTransform:er,view:"century",children:y2(c,a,s)}))}var Wd=function(){return Wd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wd.apply(this,arguments)},W0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function WA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,a=e.valueType,o=W0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),s=jA(t),c=s+(r?119:99);return l.jsx(Jl,{className:"react-calendar__century-view__decades",dateTransform:er,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=W0(u,["date"]);return l.jsx(zA,Wd({},o,f,{activeStartDate:t,currentCentury:s,date:d}),d.getTime())},start:s,step:10,value:i,valueType:a})}var Ud=function(){return Ud=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ud.apply(this,arguments)};function UA(e){function t(){return l.jsx(WA,Ud({},e))}return l.jsx("div",{className:"react-calendar__century-view",children:t()})}var Hd=function(){return Hd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hd.apply(this,arguments)},HA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},U0="react-calendar__decade-view__years__year";function YA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,a=i===void 0?Zl:i,o=HA(e,["classes","currentDecade","formatYear"]),s=o.date,c=o.locale,u=[];return n&&u.push.apply(u,n),u.push(U0),er(s).getFullYear()!==r&&u.push("".concat(U0,"--neighboringDecade")),l.jsx(ql,Hd({},o,{classes:u,maxDateTransform:Xl,minDateTransform:Fi,view:"decade",children:a(c,s)}))}var Yd=function(){return Yd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yd.apply(this,arguments)},H0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function GA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,a=e.valueType,o=H0(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),s=CA(t),c=s+(r?11:9);return l.jsx(Jl,{className:"react-calendar__decade-view__years",dateTransform:Fi,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=H0(u,["date"]);return l.jsx(YA,Yd({},o,f,{activeStartDate:t,currentDecade:s,date:d}),d.getTime())},start:s,value:i,valueType:a})}var Gd=function(){return Gd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gd.apply(this,arguments)};function KA(e){function t(){return l.jsx(GA,Gd({},e))}return l.jsx("div",{className:"react-calendar__decade-view",children:t()})}var Kd=function(){return Kd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kd.apply(this,arguments)},QA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Y0=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},XA="react-calendar__year-view__months__month";function ZA(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?xA:r,a=e.formatMonthYear,o=a===void 0?h2:a,s=QA(e,["classes","formatMonth","formatMonthYear"]),c=s.date,u=s.locale;return l.jsx(ql,Kd({},s,{classes:Y0(Y0([],n,!0),[XA],!1),formatAbbr:o,maxDateTransform:ho,minDateTransform:Ir,view:"year",children:i(u,c)}))}var Qd=function(){return Qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qd.apply(this,arguments)},G0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function JA(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,a=G0(e,["activeStartDate","hover","value","valueType"]),o=0,s=11,c=ue(t);return l.jsx(Jl,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),Ir(d)},dateType:"month",end:s,hover:n,renderTile:function(u){var d=u.date,f=G0(u,["date"]);return l.jsx(ZA,Qd({},a,f,{activeStartDate:t,date:d}),d.getTime())},start:o,value:r,valueType:i})}var Xd=function(){return Xd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xd.apply(this,arguments)};function qA(e){function t(){return l.jsx(JA,Xd({},e))}return l.jsx("div",{className:"react-calendar__year-view",children:t()})}var Zd=function(){return Zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zd.apply(this,arguments)},e_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},hu="react-calendar__month-view__days__day";function t_(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,a=e.formatDay,o=a===void 0?vA:a,s=e.formatLongDate,c=s===void 0?yA:s,u=e_(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(hu),x2(d,t)&&p.push("".concat(hu,"--weekend")),d.getMonth()!==i&&p.push("".concat(hu,"--neighboringMonth")),l.jsx(ql,Zd({},u,{classes:p,formatAbbr:c,maxDateTransform:Zp,minDateTransform:mo,view:"month",children:o(f,d)}))}var Jd=function(){return Jd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jd.apply(this,arguments)},K0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function n_(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,a=e.showNeighboringMonth,o=e.value,s=e.valueType,c=K0(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=ue(t),d=qn(t),f=i||a,p=qa(t,n),m=f?0:p,x=(f?-p:0)+1,y=function(){if(i)return x+6*7-1;var S=p2(t);if(a){var g=new Date;g.setFullYear(u,d,S),g.setHours(0,0,0,0);var h=7-qa(g,n)-1;return S+h}return S}();return l.jsx(Jl,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var g=new Date;return g.setFullYear(u,d,S),mo(g)},dateType:"day",hover:r,end:y,renderTile:function(S){var g=S.date,h=K0(S,["date"]);return l.jsx(t_,Jd({},c,h,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:m,start:x,value:o,valueType:s})}var b2="react-calendar__month-view__weekdays",mu="".concat(b2,"__weekday");function r_(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?wA:n,i=e.formatWeekday,a=i===void 0?bA:i,o=e.locale,s=e.onMouseLeave,c=new Date,u=Ir(c),d=ue(u),f=qn(u),p=[],m=1;m<=7;m+=1){var x=new Date(d,f,m-qa(u,t)),y=a(o,x);p.push(l.jsx("div",{className:Gl(mu,OA(x)&&"".concat(mu,"--current"),x2(x,t)&&"".concat(mu,"--weekend")),children:l.jsx("abbr",{"aria-label":y,title:y,children:r(o,x).replace(".","")})},m))}return l.jsx(qp,{className:b2,count:7,onFocus:s,onMouseOver:s,children:p})}var gl=function(){return gl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gl.apply(this,arguments)},Q0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},X0="react-calendar__tile";function i_(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=l.jsx("span",{children:n});if(t){var i=e.date,a=e.onClickWeekNumber,o=e.weekNumber,s=Q0(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("button",gl({},s,{className:X0,onClick:function(c){return a(o,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=Q0(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("div",gl({},s,{className:X0,children:r}))}}function a_(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,a=e.showFixedNumberOfWeeks,o=function(){if(a)return 6;var u=p2(t),d=qa(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),s=function(){for(var u=ue(t),d=qn(t),f=Kl(t),p=[],m=0;m<o;m+=1)p.push(Vd(new Date(u,d,f+m*7),n));return p}(),c=s.map(function(u){return TA(u,n)});return l.jsx(qp,{className:"react-calendar__month-view__weekNumbers",count:o,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=s[d];if(!f)throw new Error("date is not defined");return l.jsx(i_,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var qd=function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)},o_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function s_(e){if(e)for(var t=0,n=Object.entries(sA);t<n.length;t++){var r=n[t],i=r[0],a=r[1];if(a.includes(e))return i}return Re.ISO_8601}function l_(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,a=e.calendarType,o=a===void 0?s_(n):a,s=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=o_(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return l.jsx(r_,{calendarType:o,formatShortWeekday:s,formatWeekday:c,locale:n,onMouseLeave:r})}function m(){return d?l.jsx(a_,{activeStartDate:t,calendarType:o,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function x(){return l.jsx(n_,qd({calendarType:o},f))}var y="react-calendar__month-view";return l.jsx("div",{className:Gl(y,d?"".concat(y,"--weekNumbers"):""),children:l.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),l.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),x()]})]})})}var ai=function(){return ai=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ai.apply(this,arguments)},Zo="react-calendar",_s=["century","decade","year","month"],c_=["decade","year","month","day"],eh=new Date;eh.setFullYear(1,0,1);eh.setHours(0,0,0,0);var u_=new Date(864e13);function pa(e){return e instanceof Date?e:new Date(e)}function S2(e,t){return _s.slice(_s.indexOf(e),_s.indexOf(t)+1)}function d_(e,t,n){var r=S2(t,n);return r.indexOf(e)!==-1}function th(e,t,n){return e&&d_(e,t,n)?e:n}function k2(e){var t=_s.indexOf(e);return c_[t]}function f_(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=pa(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function j2(e,t){var n=e.value,r=e.minDate,i=e.maxDate,a=e.maxDetail,o=f_(n,t);if(!o)return null;var s=k2(a),c=function(){switch(t){case 0:return Sr(s,o);case 1:return g2(s,o);default:throw new Error("Invalid index value: ".concat(t))}}();return NA(c,r,i)}var nh=function(e){return j2(e,0)},C2=function(e){return j2(e,1)},p_=function(e){return[nh,C2].map(function(t){return t(e)})};function T2(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,a=e.value,o=e.view,s=th(o,i,n),c=nh({value:a,minDate:r,maxDate:t,maxDetail:n})||new Date;return Sr(s,c)}function h_(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,a=e.maxDate,o=e.maxDetail,s=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=th(d,c,o),p=t||n;return p?Sr(f,p):T2({maxDate:a,maxDetail:o,minDate:s,minDetail:c,value:u||r,view:d||i})}function gu(e){return e&&(!Array.isArray(e)||e.length===1)}function Jo(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var m_=w.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,a=t.calendarType,o=t.className,s=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,m=t.formatMonthYear,x=t.formatShortWeekday,y=t.formatWeekday,S=t.formatYear,g=t.goToRangeStartOnSelect,h=g===void 0?!0:g,v=t.inputRef,k=t.locale,j=t.maxDate,C=j===void 0?u_:j,T=t.maxDetail,P=T===void 0?"month":T,L=t.minDate,O=L===void 0?eh:L,R=t.minDetail,$=R===void 0?"century":R,W=t.navigationAriaLabel,V=t.navigationAriaLive,E=t.navigationLabel,B=t.next2AriaLabel,z=t.next2Label,A=t.nextAriaLabel,_=t.nextLabel,M=t.onActiveStartDateChange,U=t.onChange,H=t.onClickDay,ee=t.onClickDecade,we=t.onClickMonth,Be=t.onClickWeekNumber,ge=t.onClickYear,Ke=t.onDrillDown,Dt=t.onDrillUp,Fe=t.onViewChange,tr=t.prev2AriaLabel,mn=t.prev2Label,lt=t.prevAriaLabel,ec=t.prevLabel,Ee=t.returnValue,Vi=Ee===void 0?"start":Ee,xt=t.selectRange,go=t.showDoubleView,rh=t.showFixedNumberOfWeeks,ih=t.showNavigation,D2=ih===void 0?!0:ih,A2=t.showNeighboringCentury,_2=t.showNeighboringDecade,ah=t.showNeighboringMonth,I2=ah===void 0?!0:ah,L2=t.showWeekNumbers,O2=t.tileClassName,M2=t.tileContent,R2=t.tileDisabled,tc=t.value,oh=t.view,sh=w.useState(s),N2=sh[0],vo=sh[1],lh=w.useState(null),$2=lh[0],ch=lh[1],uh=w.useState(Array.isArray(c)?c.map(function(Q){return Q!==null?pa(Q):null}):c!=null?pa(c):null),nc=uh[0],B2=uh[1],dh=w.useState(u),F2=dh[0],fh=dh[1],tt=r||N2||h_({activeStartDate:r,defaultActiveStartDate:s,defaultValue:c,defaultView:u,maxDate:C,maxDetail:P,minDate:O,minDetail:$,value:tc,view:oh}),nt=function(){var Q=function(){return xt&&gu(nc)?nc:tc!==void 0?tc:nc}();return Q?Array.isArray(Q)?Q.map(function(ve){return ve!==null?pa(ve):null}):Q!==null?pa(Q):null:null}(),yo=k2(P),de=th(oh||F2,$,P),Vt=S2($,P),V2=xt?$2:null,rc=Vt.indexOf(de)<Vt.length-1,ph=Vt.indexOf(de)>0,hh=w.useCallback(function(Q){var ve=function(){switch(Vi){case"start":return nh;case"end":return C2;case"range":return p_;default:throw new Error("Invalid returnValue.")}}();return ve({maxDate:C,maxDetail:P,minDate:O,value:Q})},[C,P,O,Vi]),ic=w.useCallback(function(Q,ve){vo(Q);var je={action:ve,activeStartDate:Q,value:nt,view:de};M&&!Jo(tt,Q)&&M(je)},[tt,M,nt,de]),xo=w.useCallback(function(Q,ve){var je=function(){switch(de){case"century":return ee;case"decade":return ge;case"year":return we;case"month":return H;default:throw new Error("Invalid view: ".concat(de,"."))}}();je&&je(Q,ve)},[H,ee,we,ge,de]),ac=w.useCallback(function(Q,ve){if(rc){xo(Q,ve);var je=Vt[Vt.indexOf(de)+1];if(!je)throw new Error("Attempted to drill down from the lowest view.");vo(Q),fh(je);var At={action:"drillDown",activeStartDate:Q,value:nt,view:je};M&&!Jo(tt,Q)&&M(At),Fe&&de!==je&&Fe(At),Ke&&Ke(At)}},[tt,rc,M,xo,Ke,Fe,nt,de,Vt]),oc=w.useCallback(function(){if(ph){var Q=Vt[Vt.indexOf(de)-1];if(!Q)throw new Error("Attempted to drill up from the highest view.");var ve=Sr(Q,tt);vo(ve),fh(Q);var je={action:"drillUp",activeStartDate:ve,value:nt,view:Q};M&&!Jo(tt,ve)&&M(je),Fe&&de!==Q&&Fe(je),Dt&&Dt(je)}},[tt,ph,M,Dt,Fe,nt,de,Vt]),sc=w.useCallback(function(Q,ve){var je=nt;xo(Q,ve);var At=xt&&!gu(je),_t;if(xt)if(At)_t=Sr(yo,Q);else{if(!je)throw new Error("previousValue is required");if(Array.isArray(je))throw new Error("previousValue must not be an array");_t=IA(yo,je,Q)}else _t=hh(Q);var cc=!xt||At||h?T2({maxDate:C,maxDetail:P,minDate:O,minDetail:$,value:_t,view:de}):null;ve.persist(),vo(cc),B2(_t);var H2={action:"onChange",activeStartDate:cc,value:_t,view:de};if(M&&!Jo(tt,cc)&&M(H2),U)if(xt){var Y2=gu(_t);if(!Y2)U(_t||null,ve);else if(i){if(Array.isArray(_t))throw new Error("value must not be an array");U([_t||null,null],ve)}}else U(_t||null,ve)},[tt,i,hh,h,C,P,O,$,M,U,xo,xt,nt,yo,de]);function z2(Q){ch(Q)}function lc(){ch(null)}w.useImperativeHandle(n,function(){return{activeStartDate:tt,drillDown:ac,drillUp:oc,onChange:sc,setActiveStartDate:ic,value:nt,view:de}},[tt,ac,oc,sc,ic,nt,de]);function mh(Q){var ve=Q?m2(de,tt):Sr(de,tt),je=rc?ac:sc,At={activeStartDate:ve,hover:V2,locale:k,maxDate:C,minDate:O,onClick:je,onMouseOver:xt?z2:void 0,tileClassName:O2,tileContent:M2,tileDisabled:R2,value:nt,valueType:yo};switch(de){case"century":return l.jsx(UA,ai({formatYear:S,showNeighboringCentury:A2},At));case"decade":return l.jsx(KA,ai({formatYear:S,showNeighboringDecade:_2},At));case"year":return l.jsx(qA,ai({formatMonth:p,formatMonthYear:m},At));case"month":return l.jsx(l_,ai({calendarType:a,formatDay:d,formatLongDate:f,formatShortWeekday:x,formatWeekday:y,onClickWeekNumber:Be,onMouseLeave:xt?lc:void 0,showFixedNumberOfWeeks:typeof rh<"u"?rh:go,showNeighboringMonth:I2,showWeekNumbers:L2},At));default:throw new Error("Invalid view: ".concat(de,"."))}}function W2(){return D2?l.jsx(MA,{activeStartDate:tt,drillUp:oc,formatMonthYear:m,formatYear:S,locale:k,maxDate:C,minDate:O,navigationAriaLabel:W,navigationAriaLive:V,navigationLabel:E,next2AriaLabel:B,next2Label:z,nextAriaLabel:A,nextLabel:_,prev2AriaLabel:tr,prev2Label:mn,prevAriaLabel:lt,prevLabel:ec,setActiveStartDate:ic,showDoubleView:go,view:de,views:Vt}):null}var U2=Array.isArray(nt)?nt:[nt];return l.jsxs("div",{className:Gl(Zo,xt&&U2.length===1&&"".concat(Zo,"--selectRange"),go&&"".concat(Zo,"--doubleView"),o),ref:v,children:[W2(),l.jsxs("div",{className:"".concat(Zo,"__viewContainer"),onBlur:xt?lc:void 0,onMouseLeave:xt?lc:void 0,children:[mh(),go?mh(!0):null]})]})});const g_=Ri`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,v_=Ri`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,y_=Ri`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,x_=Ri`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,w_=Ri`
  from { opacity: 0; }
  to { opacity: 1; }
`,b_=b.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${w_} 0.15s ease-out;
`,S_=b.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?pr`animation: ${x_} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:pr`animation: ${y_} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?pr`animation: ${v_} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:pr`animation: ${g_} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,k_=b.div`
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
`,P2=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const a=w.useRef(null),[o,s]=w.useState(!1),[c,u]=w.useState(!1),[d,f]=w.useState(!1),[p,m]=w.useState({top:0,left:0});w.useEffect(()=>{if(e&&(i!=null&&i.current)){const h=i.current.getBoundingClientRect(),v=280,k=320,j=8,T=window.innerHeight-h.bottom-j<k;f(T);let P;T?P=h.top-k-j:P=h.bottom+j;let L=h.right-v;L<8&&(L=8),L+v>window.innerWidth-8&&(L=window.innerWidth-v-8),P<8&&(P=8),m({top:P,left:L}),u(!0),s(!1)}},[e,i]);const x=w.useCallback(()=>{s(!0),setTimeout(()=>{u(!1),s(!1),t()},150)},[t]),y=w.useCallback(h=>{a.current&&!a.current.contains(h.target)&&x()},[x]);w.useEffect(()=>{if(e){const h=setTimeout(()=>{document.addEventListener("mousedown",y)},10);return()=>{clearTimeout(h),document.removeEventListener("mousedown",y)}}},[e,y]);const S=w.useCallback(h=>{h instanceof Date&&(r(_r(h)),x())},[r,x]);if(!c)return null;const g=new Date(n+"T00:00:00");return Ix.createPortal(l.jsxs("div",{"data-calendar-portal":!0,children:[l.jsx(b_,{onClick:x}),l.jsx(S_,{ref:a,$isClosing:o,$openUpward:d,$top:p.top,$left:p.left,children:l.jsx(k_,{children:l.jsx(m_,{onChange:S,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(h,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},j_=b(I.div)`
  position: relative;
  border-radius: 20px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,C_=b.div`
  display: flex;
  align-items: center;
  padding: var(--space-xl);
  gap: var(--space-lg);

  @media (max-width: 640px) {
    padding: var(--space-lg);
    gap: var(--space-md);
  }
`,T_=b(I.div)`
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
`,P_=b.span`
  font-size: 22px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,E_=b.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
`,D_=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,A_=b(I.div)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,__=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,I_=b.span`
  font-size: 13px;
  color: var(--text-tertiary);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,L_=b(I.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  
  ${({$type:e})=>{switch(e){case"past":return"background: #ef4444;";case"today":return"background: #10b981;";case"future":return"background: #3b82f6;"}}}
`,O_=b(I.span)`
  font-size: 12px;
  font-weight: 500;
  
  ${({$type:e})=>{switch(e){case"past":return"color: #ef4444;";case"today":return"color: #10b981;";case"future":return"color: #3b82f6;"}}}

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,M_=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`,R_=b(I.button).attrs({type:"button"})`
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
`,N_=b(I.button).attrs({type:"button"})`
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
`,$_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),ea={type:"spring",stiffness:300,damping:30,mass:.8},B_=({selectedDate:e,onDateChange:t})=>{const[n,r]=w.useState(!1),i=w.useRef(null),a=y=>{y.preventDefault(),y.stopPropagation(),t(_r(new Date))},s=R0(e)?"today":T4(e)?"past":"future",c=R0(e),u=new Date(e+"T00:00:00"),d=u.getDate(),f=u.toLocaleDateString("en-US",{month:"short"}).toUpperCase(),p=u.toLocaleDateString("en-US",{weekday:"long"}),m=u.getFullYear(),x=()=>{switch(s){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return l.jsxs(j_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:ea,children:[l.jsxs(C_,{children:[l.jsx(Pe,{mode:"wait",children:l.jsxs(T_,{$type:s,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:ea,children:[l.jsx(P_,{children:d}),l.jsx(E_,{children:f})]},`${d}-${f}`)}),l.jsxs(D_,{children:[l.jsx(Pe,{mode:"wait",children:l.jsx(A_,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:ea,children:p},p)}),l.jsxs(__,{children:[l.jsx(I_,{children:m}),l.jsx(Pe,{mode:"wait",children:l.jsx(L_,{$type:s,initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",stiffness:500,damping:25}},s)}),l.jsx(Pe,{mode:"wait",children:l.jsx(O_,{$type:s,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:ea,children:x()},s)})]})]}),l.jsxs(M_,{children:[l.jsx(Pe,{children:!c&&l.jsx(R_,{onClick:a,initial:{opacity:0,scale:.8,x:20},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:20},whileHover:{scale:1.05,backgroundColor:"var(--accent-hover)"},whileTap:{scale:.95},transition:ea,children:"Today"})}),l.jsx(N_,{ref:i,onClick:()=>r(!0),whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx($_,{})})]})]}),l.jsx(P2,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:i})]})},F_=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,V_=b.div`
  position: relative;
  z-index: 1;
`,z_=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,W_=b(I.div)`
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
`,U_=b.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  flex: 1;
  margin-left: var(--space-sm);
`,vu=b(I.span)`
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
`,H_=b(I.div)`
  font-size: 24px;
  font-weight: 700;
  color: ${({$negative:e,$color:t})=>e?"#ef4444":t};
  letter-spacing: -0.02em;
  margin-bottom: 2px;
  font-variant-numeric: tabular-nums;
`,Y_=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,G_=b.div`
  font-size: 11px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,K_={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},Q_=e=>{const t=K_[e];return t?l.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},Z0={type:"spring",stiffness:300,damping:30,mass:.8},X_=({accountBalance:e,index:t=0})=>{const{account:n,balance:r,pendingBill:i,totalOutstanding:a}=e,o=Math.abs(r),s=r<0,c=()=>a&&a>0?l.jsx(vu,{$type:"due",layout:!0,children:"Due"}):i&&i>0?l.jsx(vu,{$type:"unbilled",layout:!0,children:"Unbilled"}):l.jsx(vu,{$type:"clear",layout:!0,children:"Clear"});return l.jsx(F_,{$accentColor:n.color,initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{...Z0,delay:t*.05},whileHover:{scale:1.02,y:-2},layout:!0,children:l.jsxs(V_,{children:[l.jsxs(z_,{children:[l.jsx(W_,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:Q_(n.bank)}),l.jsx(U_,{children:n.name.replace(" Credit Card","").replace(" Bank","")+" Bank"})]}),l.jsxs(H_,{$negative:s,$color:n.color,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Z0,children:[s?"-":"",ri(o)]},o),l.jsxs(Y_,{children:[l.jsx(G_,{children:s?"Outstanding":o===0?"Paid":"Overpaid"}),c()]})]})})},Z_=w.memo(X_),J_=b(I.div)`
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
`,qo=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,es=b.div`
  position: relative;
  z-index: 1;
`,ts=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,J0=b(I.div)`
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
`,q0=b(I.div)`
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
`,ev={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},ns=b(I.div)`
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
`,rs=b.div`
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
`,is=b(I.div)`
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
`,as=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,q_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),eI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),os=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m18 15-6-6-6 6"})}),ss=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m6 9 6 6 6-6"})}),Jt={type:"spring",stiffness:300,damping:30,mass:.8},tI={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},ls={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:Jt}},nI=({balances:e})=>{const{hdfcBalance:t,iciciBalance:n,totalCCOutstanding:r,netPosition:i}=w.useMemo(()=>{const a=e.find(f=>f.account.id==="hdfc-bank"),o=e.find(f=>f.account.id==="icici-bank"),s=e.filter(f=>f.account.type==="credit_card"),c=(a==null?void 0:a.balance)||0,u=(o==null?void 0:o.balance)||0,d=s.reduce((f,p)=>f+(p.totalOutstanding||0),0);return{hdfcBalance:c,iciciBalance:u,totalCCOutstanding:d,netPosition:c-d}},[e]);return l.jsxs(J_,{variants:tI,initial:"hidden",animate:"visible",children:[l.jsx(qo,{$variant:"hdfc",variants:ls,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(q0,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:ev.hdfc,alt:"HDFC Bank"})})}),l.jsx(rs,{children:"HDFC Bank"}),l.jsx(is,{$color:t>=0?"#004C8F":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:ri(t)},t),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:t>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[t>=0?l.jsx(os,{}):l.jsx(ss,{}),t>=0?"+":"-"]})]})]})}),l.jsx(qo,{$variant:"icici",variants:ls,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(q0,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:ev.icici,alt:"ICICI Bank"})})}),l.jsx(rs,{children:"ICICI Bank"}),l.jsx(is,{$color:n>=0?"#F58220":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:ri(n)},n),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:n>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[n>=0?l.jsx(os,{}):l.jsx(ss,{}),n>=0?"+":"-"]})]})]})}),l.jsx(qo,{$variant:"negative",variants:ls,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(J0,{$color:"#ef4444",whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(q_,{})})}),l.jsx(rs,{children:"Credit Cards"}),l.jsxs(is,{$color:r>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:[r>0?"-":"",ri(r)]},r),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:r===0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[r===0?l.jsx(os,{}):l.jsx(ss,{}),r>0?"Due":"Clear"]})]})]})}),l.jsx(qo,{$variant:"neutral",variants:ls,whileHover:{scale:1.02,y:-2},transition:Jt,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(J0,{$color:"#10b981",whileHover:{scale:1.1,rotate:-5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(eI,{})})}),l.jsx(rs,{children:"Net Position"}),l.jsx(is,{$color:i>=0?"#10b981":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Jt,children:ri(i)},i),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:i>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[i>=0?l.jsx(os,{}):l.jsx(ss,{}),"Net"]})]})]})})]})},rI=w.memo(nI),iI=b.div`
  display: flex;
  flex-direction: column;
`,aI=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
`,oI=b(I.button)`
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
`,sI=b.span`
  font-weight: 600;
  display: block;
`,lI=b.span`
  font-size: 11px;
  opacity: 0.8;
  display: block;
  margin-top: 2px;
`,cI=b.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,uI=b.div`
  overflow: hidden;
`,dI=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    gap: var(--space-md);
  }
`,fI=b.div`
  display: flex;
  gap: var(--space-md);
  align-items: flex-end;
`,ta=b.div`
  &.flex-grow {
    flex: 1;
    min-width: 0;
  }
`,na=b.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`,tv=b.input`
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
`,pI=b.div`
  position: relative;
`,hI=b(I.button).attrs({type:"button"})`
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
`,nv=b.select`
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
`,mI=b.div`
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
`,gI=b.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`,vI=b(I.button)`
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
`,yI=b(I.button)`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,xI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),wI=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],bI=e2(),rv=qw(),yu={type:"spring",stiffness:400,damping:25},SI=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=w.useState(""),[i,a]=w.useState(""),[o,s]=w.useState(""),[c,u]=w.useState(""),[d,f]=w.useState(""),[p,m]=w.useState(t||_r(new Date)),[x,y]=w.useState(!1),S=w.useRef(null),g=w.useRef(null);w.useEffect(()=>{t&&m(t)},[t]);const h=i!==""||o!==""||c!==""||d!=="";w.useEffect(()=>{if(!n||h||x)return;const R=$=>{const W=$.target;W.closest("[data-calendar-portal]")||S.current&&!S.current.contains(W)&&r("")};return document.addEventListener("mousedown",R),document.addEventListener("touchstart",R),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R)}},[n,h,x]);const v=w.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return bI;case"bank_debit":case"bank_credit":return rv;default:return br}},[n]),k=w.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),j=n&&i&&parseFloat(c)>0&&p,C=w.useCallback(()=>{r(""),a(""),s(""),u(""),f("")},[]),T=w.useCallback(()=>{if(!n||!i||!c||!p)return;const R=n==="cc_payment"&&o?o:void 0,$=br.find(B=>B.id===i),W=o?br.find(B=>B.id===o):void 0;let V="";switch(n){case"credit_card_spend":V=`Spent on ${$==null?void 0:$.name}`;break;case"cc_payment":V=W?`Payment to ${$==null?void 0:$.name} from ${W.name}`:`Payment to ${$==null?void 0:$.name}`;break;case"bank_debit":V=`Debited from ${$==null?void 0:$.name}`;break;case"bank_credit":V=`Credited to ${$==null?void 0:$.name}`;break}const E=_4(n,i,parseFloat(c),d||V,p,R);e(E),C()},[n,i,o,c,d,p,e,C]),P=w.useMemo(()=>{const $=c.replace(/[^0-9.]/g,"").split(".");let W=$[0];const V=$[1];if(W.length>3){let E=W.substring(W.length-3),B=W.substring(0,W.length-3);B=B.replace(/\B(?=(\d{2})+(?!\d))/g,","),W=B+","+E}return V!==void 0?`${W}.${V}`:W},[c]),L=w.useCallback(R=>{const $=R.target.value.replace(/,/g,"");($===""||/^\d*\.?\d*$/.test($))&&u($)},[]),O=!!n;return l.jsxs(iI,{ref:S,children:[l.jsx(aI,{children:wI.map(({type:R,label:$,hint:W,color:V})=>l.jsxs(oI,{type:"button",$active:n===R,$color:V,onClick:()=>{n===R&&!h?r(""):(r(R),a(""),s(""))},whileHover:{scale:1.02},whileTap:{scale:.98},transition:yu,children:[l.jsx(sI,{children:$}),l.jsx(lI,{children:W})]},R))}),l.jsx(cI,{$isOpen:O,children:l.jsx(uI,{children:l.jsxs(dI,{children:[l.jsxs(ta,{children:[l.jsx(na,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),l.jsxs(nv,{value:i,onChange:R=>a(R.target.value),children:[l.jsx("option",{value:"",children:k()}),v.map(R=>l.jsx("option",{value:R.id,children:R.name},R.id))]})]}),n==="cc_payment"&&l.jsxs(ta,{children:[l.jsx(na,{children:"Paid From (Optional)"}),l.jsxs(nv,{value:o,onChange:R=>s(R.target.value),children:[l.jsx("option",{value:"",children:"Select bank account..."}),rv.map(R=>l.jsx("option",{value:R.id,children:R.name},R.id))]})]}),l.jsxs(fI,{children:[l.jsxs(ta,{className:"flex-grow",children:[l.jsx(na,{children:"Amount"}),l.jsx(mI,{children:l.jsx(tv,{type:"text",inputMode:"decimal",placeholder:"10,000",value:P,onChange:L})})]}),l.jsxs(ta,{children:[l.jsx(na,{children:"Date"}),l.jsxs(pI,{children:[l.jsx(hI,{ref:g,onClick:()=>y(!0),whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(xI,{})}),l.jsx(P2,{isOpen:x,onClose:()=>y(!1),selectedDate:p,onDateSelect:m,triggerRef:g})]})]})]}),l.jsxs(ta,{children:[l.jsx(na,{children:"Description (Optional)"}),l.jsx(tv,{type:"text",placeholder:"e.g., Grocery shopping",value:d,onChange:R=>f(R.target.value)})]}),l.jsxs(gI,{children:[l.jsx(vI,{type:"button",onClick:T,disabled:!j,whileHover:j?{scale:1.02}:{},whileTap:j?{scale:.98}:{},transition:yu,children:"Add"}),l.jsx(yI,{type:"button",onClick:C,whileHover:{scale:1.02},whileTap:{scale:.98},transition:yu,children:"Cancel"})]})]})})})]})},kI=w.memo(SI),jI=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,CI=b.div`
  position: relative;
  z-index: 1;
`,TI=b(I.button)`
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
`,PI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,EI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,DI=b(I.div)`
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
`,AI=b(I.div)`
  overflow: hidden;
`,_I=b.div`
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
`,II=b.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,LI=b(I.span)`
  font-size: 12px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,OI=b.div`
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
`,MI=b(I.div)`
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
`,RI=b(I.div)`
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
`,NI=b.div`
  min-width: 0;
  overflow: hidden;
`,$I=b.div`
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
`,BI=b.div`
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
`,FI=b.span`
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
`,VI=b.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
`,zI=b.div`
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  white-space: nowrap;
  text-align: right;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,WI=b(I.button)`
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
`,UI=b(I.div)`
  padding: var(--space-2xl);
  text-align: center;
  color: var(--text-tertiary);
`,HI=b.div`
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
`,YI=b.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,GI=b.p`
  font-size: 12px;
  color: var(--text-tertiary);
`,KI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),l.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),l.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),l.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),QI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),XI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("polyline",{points:"19 12 12 19 5 12"})]}),ZI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),l.jsx("polyline",{points:"5 12 12 5 19 12"})]}),JI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),qI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),eL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),l.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),tL=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),nL=e=>{switch(e){case"credit_card_spend":return l.jsx(QI,{});case"cc_payment":return l.jsx(JI,{});case"bank_debit":return l.jsx(ZI,{});case"bank_credit":return l.jsx(XI,{})}},iv=e=>e==="bank_credit"||e==="cc_payment",fi={type:"spring",stiffness:300,damping:30,mass:.8},rL={collapsed:{height:0,opacity:0,transition:{height:{...fi},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...fi},opacity:{duration:.2,delay:.1}}}},iL={collapsed:{rotate:0},expanded:{rotate:180}},aL={hidden:{opacity:0,x:-20},visible:e=>({opacity:1,x:0,transition:{delay:e*.03,...fi}}),exit:{opacity:0,x:20,transition:{duration:.2}}},oL=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const[r,i]=w.useState(!1),a=w.useMemo(()=>{const[s,c]=n.split("-").slice(0,2);return[...e].filter(u=>{const[d,f]=u.date.split("-").slice(0,2);return d===s&&f===c&&u.date<=n}).sort((u,d)=>{const f=d.date.localeCompare(u.date);return f!==0?f:new Date(d.createdAt).getTime()-new Date(u.createdAt).getTime()})},[e,n]),o=w.useCallback(s=>{t(s)},[t]);return l.jsx(jI,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...fi,delay:.1},children:l.jsxs(CI,{children:[l.jsxs(TI,{type:"button",onClick:()=>i(!r),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(PI,{children:[l.jsx(_I,{children:l.jsx(KI,{})}),l.jsx(II,{children:"Transactions"})]}),l.jsxs(EI,{children:[l.jsx(Pe,{mode:"wait",children:l.jsx(LI,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:a.length},a.length)}),l.jsx(DI,{animate:r?"expanded":"collapsed",variants:iL,transition:fi,children:l.jsx(tL,{})})]})]}),l.jsx(Pe,{initial:!1,children:r&&l.jsx(AI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:rL,children:l.jsx(OI,{children:a.length===0?l.jsxs(UI,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:fi,children:[l.jsx(HI,{children:l.jsx(eL,{})}),l.jsx(YI,{children:"No transactions yet"}),l.jsx(GI,{children:"Add your first transaction above"})]}):l.jsx(Pe,{mode:"popLayout",children:a.map((s,c)=>{var d;const u=I4(s.accountId);return l.jsxs(MI,{custom:c,variants:aL,initial:"hidden",animate:"visible",exit:"exit",layout:!0,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[l.jsx(RI,{$type:s.type,whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:20},children:nL(s.type)}),l.jsxs(NI,{children:[l.jsx($I,{children:s.description}),l.jsxs(BI,{children:[l.jsx("span",{children:C4(s.date)}),l.jsx(FI,{children:(d=u==null?void 0:u.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]})]}),l.jsxs(VI,{children:[l.jsxs(zI,{$positive:iv(s.type),children:[iv(s.type)?"+":"-",ri(s.amount)]}),l.jsx(WI,{type:"button",onClick:()=>o(s.id),"aria-label":"Delete transaction",whileHover:{opacity:1,scale:1.1},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:20},children:l.jsx(qI,{})})]})]},s.id)})})})},"content")})]})})},sL=w.memo(oL),lL=b(I.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,cL=b(I.div)`
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
`,uL=b.div`
  margin-bottom: var(--space-lg);
`,dL=b.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,fL=b.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,av=b.h3`
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
`,ov=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,sv=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,lv=b.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,cv=b.div`
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
`,uv=b.input`
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
`,pL=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,hL=b.div`
  display: flex;
  gap: var(--space-md);
`,dv=b(I.button)`
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
`,mL=b.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,gL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),l.jsx("polyline",{points:"5 6 12 3 19 6"}),l.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),l.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),vL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),yL={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},xL={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},wL=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,onSave:i})=>{const[a,o]=w.useState({}),[s,c]=w.useState({}),u=qw(),d=e2();w.useEffect(()=>{if(e){const y={};u.forEach(g=>{var h;y[g.id]=((h=n[g.id])==null?void 0:h.toString())||""}),o(y);const S={};d.forEach(g=>{var h;S[g.id]=((h=r[g.id])==null?void 0:h.toString())||""}),c(S)}},[e,n,r]);const f=()=>{const y={};Object.entries(a).forEach(([g,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;y[g]=v});const S={};Object.entries(s).forEach(([g,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;S[g]=v}),i(y,S),t()},p=y=>{const S=y.replace(/[^0-9]/g,"");if(!S)return"";if(S.length>3){let g=S.substring(S.length-3),h=S.substring(0,S.length-3);return h=h.replace(/\B(?=(\d{2})+(?!\d))/g,","),h+","+g}return S},m=(y,S)=>{const g=S.replace(/,/g,"");(g===""||/^\d+$/.test(g))&&o(h=>({...h,[y]:g}))},x=(y,S)=>{const g=S.replace(/,/g,"");(g===""||/^\d+$/.test(g))&&c(h=>({...h,[y]:g}))};return l.jsx(Pe,{children:e&&l.jsx(lL,{variants:yL,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:l.jsxs(cL,{variants:xL,initial:"hidden",animate:"visible",exit:"exit",onClick:y=>y.stopPropagation(),children:[l.jsxs(uL,{children:[l.jsx(dL,{children:"Initial Balances & Bills"}),l.jsx(fL,{children:"Set your starting bank balances and any existing credit card outstanding amounts."})]}),l.jsxs(av,{children:[l.jsx(gL,{}),"Bank Account Balances"]}),l.jsx(ov,{children:u.map(y=>l.jsxs(sv,{children:[l.jsx(lv,{children:y.name}),l.jsx(cv,{children:l.jsx(uv,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:p(a[y.id]||""),onChange:S=>m(y.id,S.target.value)})})]},y.id))}),l.jsx(pL,{}),l.jsxs(av,{children:[l.jsx(vL,{}),"Credit Card Outstanding Bills"]}),l.jsx(ov,{children:d.map(y=>l.jsxs(sv,{children:[l.jsx(lv,{children:y.name}),l.jsx(cv,{children:l.jsx(uv,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:p(s[y.id]||""),onChange:S=>x(y.id,S.target.value)})}),l.jsx(mL,{children:"Current outstanding amount you owe"})]},y.id))}),l.jsxs(hL,{children:[l.jsx(dv,{onClick:t,children:"Cancel"}),l.jsx(dv,{$primary:!0,onClick:f,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})]})})})},zn=e=>{switch(e){case"green":return{bg:"rgba(16, 185, 129, 0.15)",border:"rgba(16, 185, 129, 0.25)",text:"#10b981"};case"orange":return{bg:"rgba(245, 158, 11, 0.15)",border:"rgba(245, 158, 11, 0.25)",text:"#f59e0b"};case"pink":return{bg:"rgba(236, 72, 153, 0.15)",border:"rgba(236, 72, 153, 0.25)",text:"#ec4899"};case"blue":return{bg:"rgba(59, 130, 246, 0.15)",border:"rgba(59, 130, 246, 0.25)",text:"#3b82f6"};case"purple":return{bg:"rgba(139, 92, 246, 0.15)",border:"rgba(139, 92, 246, 0.25)",text:"#8b5cf6"}}},bL=b(I.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
`,SL=b(I.button)`
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
`,kL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,jL=b.div`
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
`,CL=b.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,TL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,PL=b(I.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$accent:e})=>zn(e).text};
  background: ${({$accent:e})=>zn(e).bg};
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,EL=b(I.div)`
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
`,DL=b(I.div)`
  overflow: hidden;
`,AL=b.div`
  padding: var(--space-xl);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,_L=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),vl={type:"spring",stiffness:300,damping:30,mass:.8},IL={collapsed:{height:0,opacity:0,transition:{height:{...vl},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...vl},opacity:{duration:.2,delay:.1}}}},LL={collapsed:{rotate:0},expanded:{rotate:180}},cs=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:a,onOpenChange:o,collapseOnClickOutside:s=!1,children:c})=>{const[u,d]=w.useState(i),f=w.useRef(null),p=a!==void 0,m=p?a:u,x=()=>{const y=!m;p?o==null||o(y):d(y)};return w.useEffect(()=>{if(!s||!m)return;const y=S=>{f.current&&!f.current.contains(S.target)&&(p?o==null||o(!1):d(!1))};return document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y)}},[s,m,p,o]),l.jsxs(bL,{ref:f,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...vl,delay:.05},children:[l.jsxs(SL,{type:"button",onClick:x,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(kL,{children:[l.jsx(jL,{$accent:n,children:t}),l.jsx(CL,{children:e})]}),l.jsxs(TL,{children:[l.jsx(Pe,{mode:"wait",children:r!==void 0&&l.jsx(PL,{$accent:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:r},r)}),l.jsx(EL,{$accent:n,animate:m?"expanded":"collapsed",variants:LL,transition:vl,children:l.jsx(_L,{})})]})]}),l.jsx(Pe,{initial:!1,children:m&&l.jsx(DL,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:IL,children:l.jsx(AL,{children:c})},"content")})]})},OL=b(I.div)`
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
`,ML=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,RL=b.div`
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
`,NL=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-xl));
  }
`,$L=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,BL=b(I.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 500px) {
    gap: var(--space-md);
  }
`,FL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,VL=b.div`
  display: flex;
  gap: var(--space-sm);
`,fv=b(I.button)`
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
`,zL=b(I.button)`
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
`,WL=b.input`
  display: none;
`,UL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),HL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),YL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),GL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),KL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),l.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),QL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),XL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Is={type:"spring",stiffness:300,damping:30,mass:.8},ZL={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},xu={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Is}},JL=()=>{const[e,t]=w.useState(_r(new Date)),[n,r]=w.useState([]),[i,a]=w.useState({}),[o,s]=w.useState({}),[c,u]=w.useState(!1),d=w.useRef(null);w.useEffect(()=>{const v=S4(),k=k4(),j=j4();r(v),a(k),s(j)},[]);const f=w.useMemo(()=>D4(n,e,i,o),[e,n,i,o]),p=w.useMemo(()=>f.filter(v=>v.account.type==="credit_card"),[f]),m=w.useCallback(v=>{r(k=>{const j=[...k,v];return requestAnimationFrame(()=>du(j)),j})},[]),x=w.useCallback(v=>{r(k=>{const j=k.filter(C=>C.id!==v);return requestAnimationFrame(()=>du(j)),j})},[]),y=w.useCallback((v,k)=>{a(v),s(k),requestAnimationFrame(()=>{O0(v),M0(k)})},[]),S=w.useCallback(()=>{O4(n,i,o)},[n,i,o]),g=w.useCallback(()=>{var v;(v=d.current)==null||v.click()},[]),h=w.useCallback(v=>{var C;const k=(C=v.target.files)==null?void 0:C[0];if(!k)return;const j=new FileReader;j.onload=T=>{var O;const P=(O=T.target)==null?void 0:O.result,L=R4(P);L?window.confirm(`Import backup from ${new Date(L.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${L.transactions.length} transactions
• Initial balances and CC bills

This action cannot be undone.`)&&(r(L.transactions),a(L.initialBalances),s(L.initialCCBills),du(L.transactions),O0(L.initialBalances),M0(L.initialCCBills)):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},j.readAsText(k),v.target.value=""},[]);return l.jsxs(OL,{variants:ZL,initial:"hidden",animate:"visible",children:[l.jsxs(Gw,{$maxWidth:"wide",children:[l.jsxs(ML,{variants:xu,children:[l.jsx(B_,{selectedDate:e,onDateChange:t}),l.jsx(cs,{title:"Summary",icon:l.jsx(KL,{}),accent:"green",children:l.jsx(rI,{balances:f})})]}),l.jsxs(RL,{children:[l.jsx(NL,{variants:xu,children:l.jsx(cs,{title:"Add Transaction",icon:l.jsx(QL,{}),accent:"orange",children:l.jsx(kI,{onAddTransaction:m,defaultDate:e})})}),l.jsxs($L,{variants:xu,children:[l.jsx(cs,{title:"Credit Cards",icon:l.jsx(XL,{}),accent:"pink",badge:p.length,children:l.jsx(BL,{children:p.map((v,k)=>l.jsx(Z_,{accountBalance:v,index:k},v.account.id))})}),l.jsx(sL,{transactions:n,onDeleteTransaction:x,selectedDate:e}),l.jsx(cs,{title:"Manage Data",icon:l.jsx(GL,{}),accent:"purple",defaultOpen:!1,children:l.jsxs(FL,{children:[l.jsxs(zL,{type:"button",onClick:()=>u(!0),whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Is,children:[l.jsx(UL,{}),"Set Initial Balances"]}),l.jsxs(VL,{children:[l.jsxs(fv,{type:"button",$variant:"secondary",onClick:S,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Is,children:[l.jsx(HL,{}),"Export"]}),l.jsxs(fv,{type:"button",$variant:"secondary",onClick:g,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Is,children:[l.jsx(YL,{}),"Import"]})]})]})}),l.jsx(WL,{ref:d,type:"file",accept:".json",onChange:h})]})]})]}),l.jsx(wL,{isOpen:c,onClose:()=>u(!1),initialBalances:i,initialCCBills:o,onSave:y})]})},E2=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),qL=async(e,t,n,r=48)=>{try{const i=await E2(),a=Math.min(t,n)*.03,o=t-r-a,s=n-r-a;e.globalAlpha=.7,e.drawImage(i,o,s,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},ef=(e,t,n)=>{const r=t.split(" "),i=[];let a="";for(const o of r){const s=a?`${a} ${o}`:o;e.measureText(s).width>n&&a?(i.push(a),a=o):a=s}return a&&i.push(a),i},e3=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:a,alignment:o,aspectRatio:s,padding:c}=e,u=document.createElement("canvas");u.width=s.width,u.height=s.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=a,d.fillRect(0,0,u.width,u.height);const f=n*(s.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(s.width/1080),m=u.width-p*2,x=t.split(`
`),y=[];for(const j of x)if(j.trim()==="")y.push("");else{const C=ef(d,j,m);y.push(...C)}const S=f*1.4,g=y.length*S;let h=(u.height-g)/2+f;d.textAlign=o;let v;switch(o){case"left":v=p;break;case"right":v=u.width-p;break;default:v=u.width/2}for(const j of y)j!==""&&d.fillText(j,v,h),h+=S;const k=Math.min(u.width,u.height)*.06;return await qL(d,u.width,u.height,k),u.toDataURL("image/png",1)},t3=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,a=document.createElement("canvas");a.width=n.width,a.height=n.height;const o=a.getContext("2d");if(!o)throw new Error("Failed to get canvas context");const s=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";o.fillStyle=r,o.fillRect(0,0,a.width,a.height);const f=72*s,p=a.width-f*2,m=28*s,x=40*s,y=(c?52:48)*s,S=(c?28:26)*s,g=20*s,h=y*1.2,v=S*1.5;o.font=`700 ${y}px -apple-system, BlinkMacSystemFont, sans-serif`;const k=ef(o,t.title,p).slice(0,3);o.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`;const j=t.description?ef(o,t.description,p).slice(0,2):[],C=t.image?c?a.width*.45:a.width*.35:0,T=x+m,P=k.length*h,L=j.length>0?m+j.length*v:0,O=C>0?m+C:0,R=T+P+L+O,$=f+g+20*s,W=a.height-$-f;let V=f+Math.max(0,(W-R)/2);if(t.favicon)try{const _=await pv(t.favicon);o.save(),o.beginPath(),o.arc(f+x/2,V+x/2,x/2,0,Math.PI*2),o.closePath(),o.clip(),o.drawImage(_,f,V,x,x),o.restore()}catch{o.fillStyle=i,o.beginPath(),o.arc(f+x/2,V+x/2,x/2,0,Math.PI*2),o.fill()}t.siteName&&(o.font=`500 ${26*s}px -apple-system, BlinkMacSystemFont, sans-serif`,o.fillStyle=d,o.textAlign="left",o.textBaseline="middle",o.fillText(t.siteName,f+x+12*s,V+x/2)),V+=x+m,o.font=`700 ${y}px -apple-system, BlinkMacSystemFont, sans-serif`,o.fillStyle=u,o.textAlign="left",o.textBaseline="top";for(const _ of k)o.fillText(_,f,V),V+=h;if(j.length>0){V+=m,o.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`,o.fillStyle=d;for(const _ of j)o.fillText(_,f,V),V+=v}if(t.image&&C>0){V+=m;try{const _=await pv(t.image),M=p;o.save(),n3(o,f,V,M,C,12*s),o.clip();const U=_.width/_.height,H=M/C;let ee=0,we=0,Be=_.width,ge=_.height;U>H?(Be=_.height*H,ee=(_.width-Be)/2):(ge=_.width/H,we=(_.height-ge)/2),o.drawImage(_,ee,we,Be,ge,f,V,M,C),o.restore()}catch{}}const E=Math.min(a.width,a.height)*.05,B=a.height-f;o.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,o.fillStyle=i;const z=p-E-20*s;let A=t.url;for(;o.measureText(A).width>z&&A.length>20;)A=A.slice(0,-4)+"...";o.textAlign="left",o.textBaseline="middle",o.fillText(A,f,B-E/2);try{const _=await E2();o.globalAlpha=.7,o.drawImage(_,a.width-f-E,B-E,E,E),o.globalAlpha=1}catch{}return a.toDataURL("image/png",1)},pv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),n3=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()},r3=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},i3=async e=>{var i,a;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const o=`https://api.microlink.io?url=${encodeURIComponent(e)}`,s=await fetch(o);if(!s.ok)return r;const c=await s.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((a=c.data.logo)==null?void 0:a.url)||r.favicon}:r}catch(o){return console.warn("Failed to fetch URL metadata:",o),r}},hv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],a3='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',o3=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},s3=b.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,l3=b.div`
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
`,c3=b.div`
  width: 100%;
  max-width: 600px;
`,u3=b.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,d3=b.div`
  position: absolute;
  inset: 0;
`,f3=b.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,p3=b(I.div)`
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
`,h3=b.div`
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
`,m3=b.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,ra=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ia=b.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,g3=b.textarea`
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
`,mv=b.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,gv=b.button`
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
`,v3=b.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,y3=b.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,x3=b.input`
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
`,w3=b.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,b3=b(I.button)`
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
`,S3=b(I.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,k3=b.input`
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
`,j3=b.textarea`
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
`,C3=b(I.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,T3=b(I.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,P3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),E3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),D3=()=>{const{isDark:e}=np(),[t,n]=w.useState(""),[r,i]=w.useState(64),[a,o]=w.useState("left"),[s,c]=w.useState(hv[1]),[u,d]=w.useState(null),[f,p]=w.useState(!1),[m,x]=w.useState(null),[y,S]=w.useState(""),[g,h]=w.useState(""),[v,k]=w.useState(!1),[j,C]=w.useState(null),T=w.useMemo(()=>o3(t),[t]),P=e?"#000000":"#ffffff",L=e?"#ffffff":"#000000",O=`${s.height/s.width*100}%`,R=w.useCallback(async()=>{if(!(!T||!t.trim())){k(!0),C(null),d(null);try{const E=await i3(t.trim());x(E),S(E.title),h(E.description)}catch{C("Unable to fetch URL preview")}k(!1)}},[t,T]),$=w.useCallback(async()=>{if(!t.trim()||T){T||d(null);return}p(!0);try{const E=await e3({text:t.trim(),fontSize:r,fontFamily:a3,textColor:L,backgroundColor:P,alignment:a,aspectRatio:s,padding:80});d(E)}catch(E){console.error("Preview generation failed:",E)}p(!1)},[t,T,r,a,s,P,L]),W=w.useCallback(async()=>{if(m){p(!0);try{const E=await t3({metadata:{...m,title:y||m.title,description:g||m.description},aspectRatio:s,backgroundColor:P,accentColor:"#2A9D8F"});d(E)}catch(E){console.error("URL preview generation failed:",E)}p(!1)}},[m,y,g,s,P]);w.useEffect(()=>{if(T)return;const E=setTimeout($,200);return()=>clearTimeout(E)},[$,T]),w.useEffect(()=>{T?R():(x(null),S(""),h(""),C(null))},[T,R]),w.useEffect(()=>{m&&W()},[m,y,g,s,W]);const V=()=>{if(u){const z=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;r3(u,z)}};return l.jsxs(s3,{children:[l.jsx(l3,{children:l.jsx(c3,{children:l.jsx(u3,{$bgColor:P,$paddingBottom:O,children:l.jsxs(d3,{children:[u&&l.jsx(f3,{src:u,alt:"Preview"}),l.jsx(Pe,{children:!u&&l.jsxs(p3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[l.jsx(E3,{}),l.jsx("span",{children:T?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),l.jsx(h3,{children:l.jsxs(m3,{children:[l.jsxs(ra,{children:[l.jsx(ia,{children:"Content"}),l.jsx(g3,{value:t,onChange:E=>n(E.target.value),onContextMenu:E=>E.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),T?l.jsxs(l.Fragment,{children:[v&&l.jsx(ra,{style:{alignItems:"center"},children:l.jsx(T3,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),j&&l.jsx(C3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:j}),m&&l.jsxs(S3,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[l.jsx(ia,{children:"Edit Details"}),l.jsx(k3,{value:y,onChange:E=>S(E.target.value),placeholder:"Title"}),l.jsx(j3,{value:g,onChange:E=>h(E.target.value),placeholder:"Description"})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs(ra,{children:[l.jsx(ia,{children:"Font Size"}),l.jsxs(v3,{children:[l.jsx(y3,{children:l.jsx(x3,{type:"range",min:"24",max:"120",value:r,onChange:E=>i(Number(E.target.value))})}),l.jsx(w3,{children:r})]})]}),l.jsxs(ra,{children:[l.jsx(ia,{children:"Alignment"}),l.jsx(mv,{children:["left","center","right"].map(E=>l.jsx(gv,{$active:a===E,onClick:()=>o(E),children:E.charAt(0).toUpperCase()+E.slice(1)},E))})]})]}),l.jsxs(ra,{children:[l.jsx(ia,{children:"Format"}),l.jsx(mv,{children:hv.map(E=>l.jsx(gv,{$active:s.id===E.id,onClick:()=>c(E),children:E.name},E.id))})]}),l.jsxs(b3,{onClick:V,disabled:!u||f,whileTap:{scale:.98},children:[l.jsx(P3,{}),"Download Image"]})]})})]})},A3=b(I.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,_3={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},I3=()=>l.jsx(A3,{variants:_3,initial:"hidden",animate:"visible",children:l.jsx(D3,{})}),L3=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},O3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),l.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),l.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),l.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),l.jsx("path",{d:"M8 8v2"}),l.jsx("path",{d:"M16 8v2"}),l.jsx("path",{d:"M12 8v5"}),l.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),M3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[l.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),l.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),l.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),l.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),l.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),l.jsx("path",{d:"M12 10v8"}),l.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),R3=b.div`
  min-height: 100vh;
  position: relative;
`,N3=b.main`
  position: relative;
  z-index: 1;
`,$3=b.a`
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
`,B3=Ri`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,vv=b.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,yv=b.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${B3} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,xv=b.p`
  color: var(--text-secondary);
  font-size: 15px;
`,F3=b.button`
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
`,V3=()=>{const e=tp(),t=Oi();return w.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function z3(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Aj(),i=w.useMemo(()=>L3()?O3:M3,[]);return t||!e&&!n?l.jsxs(vv,{children:[l.jsx(yv,{children:l.jsx(i,{})}),l.jsx(xv,{children:"Authenticating..."})]}):n&&!e?l.jsxs(vv,{children:[l.jsx(yv,{style:{animation:"none",opacity:1},children:l.jsx(i,{})}),l.jsx(xv,{children:"Authentication required to continue"}),l.jsx(F3,{onClick:r,children:"Try Again"})]}):l.jsxs(R3,{children:[l.jsx(V3,{}),l.jsx($3,{href:"#main-content",children:"Skip to main content"}),l.jsx(OC,{}),l.jsx(gD,{}),l.jsx(N3,{id:"main-content",children:l.jsxs(pj,{children:[l.jsx(Nr,{path:"/",element:l.jsx(_D,{})}),l.jsx(Nr,{path:"/tax-manager",element:l.jsx(b4,{})}),l.jsx(Nr,{path:"/expense-manager",element:l.jsx(JL,{})}),l.jsx(Nr,{path:"/canvas-manager",element:l.jsx(I3,{})}),l.jsx(Nr,{path:"/tax-calculator",element:l.jsx(dj,{to:"/tax-manager",replace:!0})})]})})]})}function W3(){return l.jsx(wj,{basename:"/tools",children:l.jsx(jj,{children:l.jsxs(Dj,{children:[l.jsx(_C,{}),l.jsx(z3,{})]})})})}Lx(document.getElementById("root")).render(l.jsx(w.StrictMode,{children:l.jsx(W3,{})}));
