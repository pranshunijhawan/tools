function qb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function e2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cv={exports:{}},yl={},Tv={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),t2=Symbol.for("react.portal"),n2=Symbol.for("react.fragment"),r2=Symbol.for("react.strict_mode"),i2=Symbol.for("react.profiler"),a2=Symbol.for("react.provider"),o2=Symbol.for("react.context"),s2=Symbol.for("react.forward_ref"),l2=Symbol.for("react.suspense"),c2=Symbol.for("react.memo"),u2=Symbol.for("react.lazy"),kh=Symbol.iterator;function d2(e){return e===null||typeof e!="object"?null:(e=kh&&e[kh]||e["@@iterator"],typeof e=="function"?e:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dv=Object.assign,Ev={};function Ei(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||Pv}Ei.prototype.isReactComponent={};Ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Av(){}Av.prototype=Ei.prototype;function lf(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||Pv}var cf=lf.prototype=new Av;cf.constructor=lf;Dv(cf,Ei.prototype);cf.isPureReactComponent=!0;var jh=Array.isArray,Lv=Object.prototype.hasOwnProperty,uf={current:null},_v={key:!0,ref:!0,__self:!0,__source:!0};function Iv(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Lv.call(t,r)&&!_v.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:to,type:e,key:a,ref:o,props:i,_owner:uf.current}}function f2(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function df(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function p2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ch=/\/+/g;function uc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p2(""+e.key):t.toString(36)}function us(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case to:case t2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+uc(o,0):r,jh(i)?(n="",e!=null&&(n=e.replace(Ch,"$&/")+"/"),us(i,t,n,"",function(u){return u})):i!=null&&(df(i)&&(i=f2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ch,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",jh(e))for(var s=0;s<e.length;s++){a=e[s];var c=r+uc(a,s);o+=us(a,t,n,c,i)}else if(c=d2(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=r+uc(a,s++),o+=us(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(e,t,n){if(e==null)return e;var r=[],i=0;return us(e,r,"","",function(a){return t.call(n,a,i++)}),r}function h2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},ds={transition:null},m2={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ds,ReactCurrentOwner:uf};function Mv(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!df(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Ei;Q.Fragment=n2;Q.Profiler=i2;Q.PureComponent=lf;Q.StrictMode=r2;Q.Suspense=l2;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m2;Q.act=Mv;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dv({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=uf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Lv.call(t,c)&&!_v.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:to,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:o2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:a2,_context:e},e.Consumer=e};Q.createElement=Iv;Q.createFactory=function(e){var t=Iv.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:s2,render:e}};Q.isValidElement=df;Q.lazy=function(e){return{$$typeof:u2,_payload:{_status:-1,_result:e},_init:h2}};Q.memo=function(e,t){return{$$typeof:c2,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};Q.unstable_act=Mv;Q.useCallback=function(e,t){return tt.current.useCallback(e,t)};Q.useContext=function(e){return tt.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};Q.useEffect=function(e,t){return tt.current.useEffect(e,t)};Q.useId=function(){return tt.current.useId()};Q.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return tt.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};Q.useRef=function(e){return tt.current.useRef(e)};Q.useState=function(e){return tt.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return tt.current.useTransition()};Q.version="18.3.1";Tv.exports=Q;var w=Tv.exports;const Qt=e2(w),g2=qb({__proto__:null,default:Qt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v2=w,y2=Symbol.for("react.element"),x2=Symbol.for("react.fragment"),w2=Object.prototype.hasOwnProperty,b2=v2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S2={key:!0,ref:!0,__self:!0,__source:!0};function Ov(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)w2.call(t,r)&&!S2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y2,type:e,key:a,ref:o,props:i,_owner:b2.current}}yl.Fragment=x2;yl.jsx=Ov;yl.jsxs=Ov;Cv.exports=yl;var l=Cv.exports,Rv={exports:{}},yt={},Nv={exports:{}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,O){var R=E.length;E.push(O);e:for(;0<R;){var F=R-1>>>1,Y=E[F];if(0<i(Y,O))E[F]=O,E[R]=Y,R=F;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var O=E[0],R=E.pop();if(R!==O){E[0]=R;e:for(var F=0,Y=E.length,oe=Y>>>1;F<oe;){var se=2*(F+1)-1,G=E[se],le=se+1,Re=E[le];if(0>i(G,R))le<Y&&0>i(Re,G)?(E[F]=Re,E[le]=R,F=le):(E[F]=G,E[se]=R,F=se);else if(le<Y&&0>i(Re,R))E[F]=Re,E[le]=R,F=le;else break e}}return O}function i(E,O){var R=E.sortIndex-O.sortIndex;return R!==0?R:E.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=E)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function S(E){if(x=!1,v(E),!y)if(n(c)!==null)y=!0,B(k);else{var O=n(u);O!==null&&z(S,O.startTime-E)}}function k(E,O){y=!1,x&&(x=!1,g(P),P=-1),h=!0;var R=p;try{for(v(O),f=n(c);f!==null&&(!(f.expirationTime>O)||E&&!_());){var F=f.callback;if(typeof F=="function"){f.callback=null,p=f.priorityLevel;var Y=F(f.expirationTime<=O);O=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(c)&&r(c),v(O)}else r(c);f=n(c)}if(f!==null)var oe=!0;else{var se=n(u);se!==null&&z(S,se.startTime-O),oe=!1}return oe}finally{f=null,p=R,h=!1}}var T=!1,C=null,P=-1,L=5,M=-1;function _(){return!(e.unstable_now()-M<L)}function $(){if(C!==null){var E=e.unstable_now();M=E;var O=!0;try{O=C(!0,E)}finally{O?W():(T=!1,C=null)}}else T=!1}var W;if(typeof m=="function")W=function(){m($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,D=H.port2;H.port1.onmessage=$,W=function(){D.postMessage(null)}}else W=function(){j($,0)};function B(E){C=E,T||(T=!0,W())}function z(E,O){P=j(function(){E(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,B(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var R=p;p=O;try{return E()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=p;p=E;try{return O()}finally{p=R}},e.unstable_scheduleCallback=function(E,O,R){var F=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?F+R:F):R=F,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,E={id:d++,callback:O,priorityLevel:E,startTime:R,expirationTime:Y,sortIndex:-1},R>F?(E.sortIndex=R,t(u,E),n(c)===null&&E===n(u)&&(x?(g(P),P=-1):x=!0,z(S,R-F))):(E.sortIndex=Y,t(c,E),y||h||(y=!0,B(k))),E},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(E){var O=p;return function(){var R=p;p=O;try{return E.apply(this,arguments)}finally{p=R}}}})($v);Nv.exports=$v;var k2=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j2=w,gt=k2;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bv=new Set,Da={};function Er(e,t){pi(e,t),pi(e+"Capture",t)}function pi(e,t){for(Da[e]=t,e=0;e<t.length;e++)Bv.add(t[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,C2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Ph={};function T2(e){return Tu.call(Ph,e)?!0:Tu.call(Th,e)?!1:C2.test(e)?Ph[e]=!0:(Th[e]=!0,!1)}function P2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D2(e,t,n,r){if(t===null||typeof t>"u"||P2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ff=/[\-:]([a-z])/g;function pf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ff,pf);ze[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ff,pf);ze[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ff,pf);ze[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hf(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D2(t,n,i,r)&&(n=null),r||i===null?T2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mn=j2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=Dh&&e[Dh]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,dc;function aa(e){if(dc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dc=t&&t[1]||""}return`
`+dc+e}var fc=!1;function pc(e,t){if(!e||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?aa(e):""}function E2(e){switch(e.tag){case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return e=pc(e.type,!1),e;case 11:return e=pc(e.type.render,!1),e;case 1:return e=pc(e.type,!0),e;default:return""}}function Au(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case $r:return"Portal";case Pu:return"Profiler";case mf:return"StrictMode";case Du:return"Suspense";case Eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vv:return(e.displayName||"Context")+".Consumer";case Fv:return(e._context.displayName||"Context")+".Provider";case gf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vf:return t=e.displayName||null,t!==null?t:Au(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return Au(e(t))}catch{}}return null}function A2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(t);case 8:return t===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L2(e){var t=Wv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=L2(e))}function Uv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lu(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hv(e,t){t=t.checked,t!=null&&hf(e,"checked",t,!1)}function _u(e,t){Hv(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Iu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Iu(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ah(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Iu(e,t,n){(t!=="number"||Is(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(oa(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Yv(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,Kv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_2=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(e){_2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ha[t]=ha[e]})});function Qv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ha.hasOwnProperty(e)&&ha[e]?(""+t).trim():t+"px"}function Xv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var I2=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(e,t){if(t){if(I2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function yf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bu=null,si=null,li=null;function Ih(e){if(e=io(e)){if(typeof Bu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=kl(t),Bu(e.stateNode,e.type,t))}}function Zv(e){si?li?li.push(e):li=[e]:si=e}function Jv(){if(si){var e=si,t=li;if(li=si=null,Ih(e),t)for(e=0;e<t.length;e++)Ih(t[e])}}function qv(e,t){return e(t)}function ey(){}var hc=!1;function ty(e,t,n){if(hc)return e(t,n);hc=!0;try{return qv(e,t,n)}finally{hc=!1,(si!==null||li!==null)&&(ey(),Jv())}}function Aa(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Fu=!1;if(un)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Fu=!1}function M2(e,t,n,r,i,a,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ma=!1,Ms=null,Os=!1,Vu=null,O2={onError:function(e){ma=!0,Ms=e}};function R2(e,t,n,r,i,a,o,s,c){ma=!1,Ms=null,M2.apply(O2,arguments)}function N2(e,t,n,r,i,a,o,s,c){if(R2.apply(this,arguments),ma){if(ma){var u=Ms;ma=!1,Ms=null}else throw Error(A(198));Os||(Os=!0,Vu=u)}}function Ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ny(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mh(e){if(Ar(e)!==e)throw Error(A(188))}function $2(e){var t=e.alternate;if(!t){if(t=Ar(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Mh(i),e;if(a===r)return Mh(i),t;a=a.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function ry(e){return e=$2(e),e!==null?iy(e):null}function iy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iy(e);if(t!==null)return t;e=e.sibling}return null}var ay=gt.unstable_scheduleCallback,Oh=gt.unstable_cancelCallback,B2=gt.unstable_shouldYield,F2=gt.unstable_requestPaint,ke=gt.unstable_now,V2=gt.unstable_getCurrentPriorityLevel,xf=gt.unstable_ImmediatePriority,oy=gt.unstable_UserBlockingPriority,Rs=gt.unstable_NormalPriority,z2=gt.unstable_LowPriority,sy=gt.unstable_IdlePriority,xl=null,Xt=null;function W2(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Y2,U2=Math.log,H2=Math.LN2;function Y2(e){return e>>>=0,e===0?32:31-(U2(e)/H2|0)|0}var jo=64,Co=4194304;function sa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=sa(s):(a&=o,a!==0&&(r=sa(a)))}else o=n&~i,o!==0?r=sa(o):a!==0&&(r=sa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),i=1<<n,r|=e[n],t&=~i;return r}function G2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-$t(a),s=1<<o,c=i[o];c===-1?(!(s&n)||s&r)&&(i[o]=G2(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function zu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ly(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function mc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function Q2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$t(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function wf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function cy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uy,bf,dy,fy,py,Wu=!1,To=[],In=null,Mn=null,On=null,La=new Map,_a=new Map,Dn=[],X2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":La.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(t.pointerId)}}function Ui(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&bf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Z2(e,t,n,r,i){switch(t){case"focusin":return In=Ui(In,e,t,n,r,i),!0;case"dragenter":return Mn=Ui(Mn,e,t,n,r,i),!0;case"mouseover":return On=Ui(On,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return La.set(a,Ui(La.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,_a.set(a,Ui(_a.get(a)||null,e,t,n,r,i)),!0}return!1}function hy(e){var t=ur(e.target);if(t!==null){var n=Ar(t);if(n!==null){if(t=n.tag,t===13){if(t=ny(n),t!==null){e.blockedOn=t,py(e.priority,function(){dy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$u=r,n.target.dispatchEvent(r),$u=null}else return t=io(n),t!==null&&bf(t),e.blockedOn=n,!1;t.shift()}return!0}function Nh(e,t,n){fs(e)&&n.delete(t)}function J2(){Wu=!1,In!==null&&fs(In)&&(In=null),Mn!==null&&fs(Mn)&&(Mn=null),On!==null&&fs(On)&&(On=null),La.forEach(Nh),_a.forEach(Nh)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,J2)))}function Ia(e){function t(i){return Hi(i,e)}if(0<To.length){Hi(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Hi(In,e),Mn!==null&&Hi(Mn,e),On!==null&&Hi(On,e),La.forEach(t),_a.forEach(t),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)hy(n),n.blockedOn===null&&Dn.shift()}var ci=mn.ReactCurrentBatchConfig,$s=!0;function q2(e,t,n,r){var i=q,a=ci.transition;ci.transition=null;try{q=1,Sf(e,t,n,r)}finally{q=i,ci.transition=a}}function eS(e,t,n,r){var i=q,a=ci.transition;ci.transition=null;try{q=4,Sf(e,t,n,r)}finally{q=i,ci.transition=a}}function Sf(e,t,n,r){if($s){var i=Uu(e,t,n,r);if(i===null)Cc(e,t,r,Bs,n),Rh(e,r);else if(Z2(i,e,t,n,r))r.stopPropagation();else if(Rh(e,r),t&4&&-1<X2.indexOf(e)){for(;i!==null;){var a=io(i);if(a!==null&&uy(a),a=Uu(e,t,n,r),a===null&&Cc(e,t,r,Bs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cc(e,t,r,null,n)}}var Bs=null;function Uu(e,t,n,r){if(Bs=null,e=yf(r),e=ur(e),e!==null)if(t=Ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ny(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bs=e,null}function my(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V2()){case xf:return 1;case oy:return 4;case Rs:case z2:return 16;case sy:return 536870912;default:return 16}default:return 16}}var An=null,kf=null,ps=null;function gy(){if(ps)return ps;var e,t=kf,n=t.length,r,i="value"in An?An.value:An.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ps=i.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function $h(){return!1}function xt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Po:$h,this.isPropagationStopped=$h,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=xt(Ai),ro=ye({},Ai,{view:0,detail:0}),tS=xt(ro),gc,vc,Yi,wl=ye({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(gc=e.screenX-Yi.screenX,vc=e.screenY-Yi.screenY):vc=gc=0,Yi=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:vc}}),Bh=xt(wl),nS=ye({},wl,{dataTransfer:0}),rS=xt(nS),iS=ye({},ro,{relatedTarget:0}),yc=xt(iS),aS=ye({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=xt(aS),sS=ye({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lS=xt(sS),cS=ye({},Ai,{data:0}),Fh=xt(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fS[e])?!!t[e]:!1}function Cf(){return pS}var hS=ye({},ro,{key:function(e){if(e.key){var t=uS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mS=xt(hS),gS=ye({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=xt(gS),vS=ye({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),yS=xt(vS),xS=ye({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=xt(xS),bS=ye({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=xt(bS),kS=[9,13,27,32],Tf=un&&"CompositionEvent"in window,ga=null;un&&"documentMode"in document&&(ga=document.documentMode);var jS=un&&"TextEvent"in window&&!ga,vy=un&&(!Tf||ga&&8<ga&&11>=ga),zh=" ",Wh=!1;function yy(e,t){switch(e){case"keyup":return kS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function CS(e,t){switch(e){case"compositionend":return xy(t);case"keypress":return t.which!==32?null:(Wh=!0,zh);case"textInput":return e=t.data,e===zh&&Wh?null:e;default:return null}}function TS(e,t){if(Fr)return e==="compositionend"||!Tf&&yy(e,t)?(e=gy(),ps=kf=An=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vy&&t.locale!=="ko"?null:t.data;default:return null}}var PS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!PS[e.type]:t==="textarea"}function wy(e,t,n,r){Zv(r),t=Fs(t,"onChange"),0<t.length&&(n=new jf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var va=null,Ma=null;function DS(e){Ly(e,0)}function bl(e){var t=Wr(e);if(Uv(t))return e}function ES(e,t){if(e==="change")return t}var by=!1;if(un){var xc;if(un){var wc="oninput"in document;if(!wc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),wc=typeof Hh.oninput=="function"}xc=wc}else xc=!1;by=xc&&(!document.documentMode||9<document.documentMode)}function Yh(){va&&(va.detachEvent("onpropertychange",Sy),Ma=va=null)}function Sy(e){if(e.propertyName==="value"&&bl(Ma)){var t=[];wy(t,Ma,e,yf(e)),ty(DS,t)}}function AS(e,t,n){e==="focusin"?(Yh(),va=t,Ma=n,va.attachEvent("onpropertychange",Sy)):e==="focusout"&&Yh()}function LS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(Ma)}function _S(e,t){if(e==="click")return bl(t)}function IS(e,t){if(e==="input"||e==="change")return bl(t)}function MS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:MS;function Oa(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tu.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function Gh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kh(e,t){var n=Gh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gh(n)}}function ky(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ky(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jy(){for(var e=window,t=Is();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Is(e.document)}return t}function Pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function OS(e){var t=jy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ky(n.ownerDocument.documentElement,n)){if(r!==null&&Pf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Kh(n,a);var o=Kh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var RS=un&&"documentMode"in document&&11>=document.documentMode,Vr=null,Hu=null,ya=null,Yu=!1;function Qh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||Vr==null||Vr!==Is(r)||(r=Vr,"selectionStart"in r&&Pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ya&&Oa(ya,r)||(ya=r,r=Fs(Hu,"onSelect"),0<r.length&&(t=new jf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},bc={},Cy={};un&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Sl(e){if(bc[e])return bc[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cy)return bc[e]=t[n];return e}var Ty=Sl("animationend"),Py=Sl("animationiteration"),Dy=Sl("animationstart"),Ey=Sl("transitionend"),Ay=new Map,Xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Ay.set(e,t),Er(t,[e])}for(var Sc=0;Sc<Xh.length;Sc++){var kc=Xh[Sc],NS=kc.toLowerCase(),$S=kc[0].toUpperCase()+kc.slice(1);Kn(NS,"on"+$S)}Kn(Ty,"onAnimationEnd");Kn(Py,"onAnimationIteration");Kn(Dy,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Ey,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Zh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N2(r,t,void 0,e),e.currentTarget=null}function Ly(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;Zh(i,s,u),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;Zh(i,s,u),a=c}}}if(Os)throw e=Vu,Os=!1,Vu=null,e}function ne(e,t){var n=t[Zu];n===void 0&&(n=t[Zu]=new Set);var r=e+"__bubble";n.has(r)||(_y(t,e,2,!1),n.add(r))}function jc(e,t,n){var r=0;t&&(r|=4),_y(n,e,r,t)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Ra(e){if(!e[Eo]){e[Eo]=!0,Bv.forEach(function(n){n!=="selectionchange"&&(BS.has(n)||jc(n,!1,e),jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Eo]||(t[Eo]=!0,jc("selectionchange",!1,t))}}function _y(e,t,n,r){switch(my(t)){case 1:var i=q2;break;case 4:i=eS;break;default:i=Sf}n=i.bind(null,t,n,e),i=void 0,!Fu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ur(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}s=s.parentNode}}r=r.return}ty(function(){var u=a,d=yf(n),f=[];e:{var p=Ay.get(e);if(p!==void 0){var h=jf,y=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":h=mS;break;case"focusin":y="focus",h=yc;break;case"focusout":y="blur",h=yc;break;case"beforeblur":case"afterblur":h=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=yS;break;case Ty:case Py:case Dy:h=oS;break;case Ey:h=wS;break;case"scroll":h=tS;break;case"wheel":h=SS;break;case"copy":case"cut":case"paste":h=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vh}var x=(t&4)!==0,j=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=Aa(m,g),S!=null&&x.push(Na(m,S,v)))),j)break;m=m.return}0<x.length&&(p=new h(p,y,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==$u&&(y=n.relatedTarget||n.fromElement)&&(ur(y)||y[dn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?ur(y):null,y!==null&&(j=Ar(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(x=Bh,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Vh,S="onPointerLeave",g="onPointerEnter",m="pointer"),j=h==null?p:Wr(h),v=y==null?p:Wr(y),p=new x(S,m+"leave",h,n,d),p.target=j,p.relatedTarget=v,S=null,ur(d)===u&&(x=new x(g,m+"enter",y,n,d),x.target=v,x.relatedTarget=j,S=x),j=S,h&&y)t:{for(x=h,g=y,m=0,v=x;v;v=Mr(v))m++;for(v=0,S=g;S;S=Mr(S))v++;for(;0<m-v;)x=Mr(x),m--;for(;0<v-m;)g=Mr(g),v--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=Mr(x),g=Mr(g)}x=null}else x=null;h!==null&&Jh(f,p,h,x,!1),y!==null&&j!==null&&Jh(f,j,y,x,!0)}}e:{if(p=u?Wr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=ES;else if(Uh(p))if(by)k=IS;else{k=LS;var T=AS}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=_S);if(k&&(k=k(e,u))){wy(f,k,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Iu(p,"number",p.value)}switch(T=u?Wr(u):window,e){case"focusin":(Uh(T)||T.contentEditable==="true")&&(Vr=T,Hu=u,ya=null);break;case"focusout":ya=Hu=Vr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Qh(f,n,d);break;case"selectionchange":if(RS)break;case"keydown":case"keyup":Qh(f,n,d)}var C;if(Tf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fr?yy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vy&&n.locale!=="ko"&&(Fr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fr&&(C=gy()):(An=d,kf="value"in An?An.value:An.textContent,Fr=!0)),T=Fs(u,P),0<T.length&&(P=new Fh(P,e,null,n,d),f.push({event:P,listeners:T}),C?P.data=C:(C=xy(n),C!==null&&(P.data=C)))),(C=jS?CS(e,n):TS(e,n))&&(u=Fs(u,"onBeforeInput"),0<u.length&&(d=new Fh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Ly(f,t)})}function Na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Aa(e,n),a!=null&&r.unshift(Na(e,a,i)),a=Aa(e,t),a!=null&&r.push(Na(e,a,i))),e=e.return}return r}function Mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Aa(n,a),c!=null&&o.unshift(Na(n,c,s))):i||(c=Aa(n,a),c!=null&&o.push(Na(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var FS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function qh(e){return(typeof e=="string"?e:""+e).replace(FS,`
`).replace(VS,"")}function Ao(e,t,n){if(t=qh(t),qh(e)!==t&&n)throw Error(A(425))}function Vs(){}var Gu=null,Ku=null;function Qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(e){return em.resolve(null).then(e).catch(US)}:Xu;function US(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ia(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ia(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Li,$a="__reactProps$"+Li,dn="__reactContainer$"+Li,Zu="__reactEvents$"+Li,HS="__reactListeners$"+Li,YS="__reactHandles$"+Li;function ur(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tm(e);e!==null;){if(n=e[Kt])return n;e=tm(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[Kt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function kl(e){return e[$a]||null}var Ju=[],Ur=-1;function Qn(e){return{current:e}}function ie(e){0>Ur||(e.current=Ju[Ur],Ju[Ur]=null,Ur--)}function ee(e,t){Ur++,Ju[Ur]=e.current,e.current=t}var Hn={},Qe=Qn(Hn),st=Qn(!1),jr=Hn;function hi(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function zs(){ie(st),ie(Qe)}function nm(e,t,n){if(Qe.current!==Hn)throw Error(A(168));ee(Qe,t),ee(st,n)}function Iy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,A2(e)||"Unknown",i));return ye({},n,r)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,jr=Qe.current,ee(Qe,e),ee(st,st.current),!0}function rm(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Iy(e,t,jr),r.__reactInternalMemoizedMergedChildContext=e,ie(st),ie(Qe),ee(Qe,e)):ie(st),ee(st,n)}var rn=null,jl=!1,Pc=!1;function My(e){rn===null?rn=[e]:rn.push(e)}function GS(e){jl=!0,My(e)}function Xn(){if(!Pc&&rn!==null){Pc=!0;var e=0,t=q;try{var n=rn;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rn=null,jl=!1}catch(i){throw rn!==null&&(rn=rn.slice(e+1)),ay(xf,Xn),i}finally{q=t,Pc=!1}}return null}var Hr=[],Yr=0,Us=null,Hs=0,jt=[],Ct=0,Cr=null,an=1,on="";function or(e,t){Hr[Yr++]=Hs,Hr[Yr++]=Us,Us=e,Hs=t}function Oy(e,t,n){jt[Ct++]=an,jt[Ct++]=on,jt[Ct++]=Cr,Cr=e;var r=an;e=on;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var a=32-$t(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,an=1<<32-$t(t)+i|n<<i|r,on=a+e}else an=1<<a|n<<i|r,on=e}function Df(e){e.return!==null&&(or(e,1),Oy(e,1,0))}function Ef(e){for(;e===Us;)Us=Hr[--Yr],Hr[Yr]=null,Hs=Hr[--Yr],Hr[Yr]=null;for(;e===Cr;)Cr=jt[--Ct],jt[Ct]=null,on=jt[--Ct],jt[Ct]=null,an=jt[--Ct],jt[Ct]=null}var ht=null,pt=null,fe=!1,Nt=null;function Ry(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function im(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cr!==null?{id:an,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function qu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ed(e){if(fe){var t=pt;if(t){var n=t;if(!im(e,t)){if(qu(e))throw Error(A(418));t=Rn(n.nextSibling);var r=ht;t&&im(e,t)?Ry(r,n):(e.flags=e.flags&-4097|2,fe=!1,ht=e)}}else{if(qu(e))throw Error(A(418));e.flags=e.flags&-4097|2,fe=!1,ht=e}}}function am(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Lo(e){if(e!==ht)return!1;if(!fe)return am(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qu(e.type,e.memoizedProps)),t&&(t=pt)){if(qu(e))throw Ny(),Error(A(418));for(;t;)Ry(e,t),t=Rn(t.nextSibling)}if(am(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?Rn(e.stateNode.nextSibling):null;return!0}function Ny(){for(var e=pt;e;)e=Rn(e.nextSibling)}function mi(){pt=ht=null,fe=!1}function Af(e){Nt===null?Nt=[e]:Nt.push(e)}var KS=mn.ReactCurrentBatchConfig;function Gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function om(e){var t=e._init;return t(e._payload)}function $y(e){function t(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Fn(g,m),g.index=0,g.sibling=null,g}function a(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,v,S){return m===null||m.tag!==6?(m=Mc(v,g.mode,S),m.return=g,m):(m=i(m,v),m.return=g,m)}function c(g,m,v,S){var k=v.type;return k===Br?d(g,m,v.props.children,S,v.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&om(k)===m.type)?(S=i(m,v.props),S.ref=Gi(g,m,v),S.return=g,S):(S=bs(v.type,v.key,v.props,null,g.mode,S),S.ref=Gi(g,m,v),S.return=g,S)}function u(g,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Oc(v,g.mode,S),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function d(g,m,v,S,k){return m===null||m.tag!==7?(m=yr(v,g.mode,S,k),m.return=g,m):(m=i(m,v),m.return=g,m)}function f(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Mc(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:return v=bs(m.type,m.key,m.props,null,g.mode,v),v.ref=Gi(g,null,m),v.return=g,v;case $r:return m=Oc(m,g.mode,v),m.return=g,m;case Tn:var S=m._init;return f(g,S(m._payload),v)}if(oa(m)||zi(m))return m=yr(m,g.mode,v,null),m.return=g,m;_o(g,m)}return null}function p(g,m,v,S){var k=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(g,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return v.key===k?c(g,m,v,S):null;case $r:return v.key===k?u(g,m,v,S):null;case Tn:return k=v._init,p(g,m,k(v._payload),S)}if(oa(v)||zi(v))return k!==null?null:d(g,m,v,S,null);_o(g,v)}return null}function h(g,m,v,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,s(m,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bo:return g=g.get(S.key===null?v:S.key)||null,c(m,g,S,k);case $r:return g=g.get(S.key===null?v:S.key)||null,u(m,g,S,k);case Tn:var T=S._init;return h(g,m,v,T(S._payload),k)}if(oa(S)||zi(S))return g=g.get(v)||null,d(m,g,S,k,null);_o(m,S)}return null}function y(g,m,v,S){for(var k=null,T=null,C=m,P=m=0,L=null;C!==null&&P<v.length;P++){C.index>P?(L=C,C=null):L=C.sibling;var M=p(g,C,v[P],S);if(M===null){C===null&&(C=L);break}e&&C&&M.alternate===null&&t(g,C),m=a(M,m,P),T===null?k=M:T.sibling=M,T=M,C=L}if(P===v.length)return n(g,C),fe&&or(g,P),k;if(C===null){for(;P<v.length;P++)C=f(g,v[P],S),C!==null&&(m=a(C,m,P),T===null?k=C:T.sibling=C,T=C);return fe&&or(g,P),k}for(C=r(g,C);P<v.length;P++)L=h(C,g,P,v[P],S),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),m=a(L,m,P),T===null?k=L:T.sibling=L,T=L);return e&&C.forEach(function(_){return t(g,_)}),fe&&or(g,P),k}function x(g,m,v,S){var k=zi(v);if(typeof k!="function")throw Error(A(150));if(v=k.call(v),v==null)throw Error(A(151));for(var T=k=null,C=m,P=m=0,L=null,M=v.next();C!==null&&!M.done;P++,M=v.next()){C.index>P?(L=C,C=null):L=C.sibling;var _=p(g,C,M.value,S);if(_===null){C===null&&(C=L);break}e&&C&&_.alternate===null&&t(g,C),m=a(_,m,P),T===null?k=_:T.sibling=_,T=_,C=L}if(M.done)return n(g,C),fe&&or(g,P),k;if(C===null){for(;!M.done;P++,M=v.next())M=f(g,M.value,S),M!==null&&(m=a(M,m,P),T===null?k=M:T.sibling=M,T=M);return fe&&or(g,P),k}for(C=r(g,C);!M.done;P++,M=v.next())M=h(C,g,P,M.value,S),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?P:M.key),m=a(M,m,P),T===null?k=M:T.sibling=M,T=M);return e&&C.forEach(function($){return t(g,$)}),fe&&or(g,P),k}function j(g,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:e:{for(var k=v.key,T=m;T!==null;){if(T.key===k){if(k=v.type,k===Br){if(T.tag===7){n(g,T.sibling),m=i(T,v.props.children),m.return=g,g=m;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&om(k)===T.type){n(g,T.sibling),m=i(T,v.props),m.ref=Gi(g,T,v),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}v.type===Br?(m=yr(v.props.children,g.mode,S,v.key),m.return=g,g=m):(S=bs(v.type,v.key,v.props,null,g.mode,S),S.ref=Gi(g,m,v),S.return=g,g=S)}return o(g);case $r:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Oc(v,g.mode,S),m.return=g,g=m}return o(g);case Tn:return T=v._init,j(g,m,T(v._payload),S)}if(oa(v))return y(g,m,v,S);if(zi(v))return x(g,m,v,S);_o(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=Mc(v,g.mode,S),m.return=g,g=m),o(g)):n(g,m)}return j}var gi=$y(!0),By=$y(!1),Ys=Qn(null),Gs=null,Gr=null,Lf=null;function _f(){Lf=Gr=Gs=null}function If(e){var t=Ys.current;ie(Ys),e._currentValue=t}function td(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ui(e,t){Gs=e,Lf=Gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ot=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Lf!==e)if(e={context:e,memoizedValue:t,next:null},Gr===null){if(Gs===null)throw Error(A(308));Gr=e,Gs.dependencies={lanes:0,firstContext:e}}else Gr=Gr.next=e;return t}var dr=null;function Mf(e){dr===null?dr=[e]:dr.push(e)}function Fy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Mf(t)):(n.next=i.next,i.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,fn(e,n)}return i=r.interleaved,i===null?(t.next=t,Mf(r)):(t.next=i.next,i.next=t),r.interleaved=t,fn(e,n)}function ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wf(e,n)}}function sm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,r){var i=e.updateQueue;Pn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(a!==null){var f=i.baseState;o=0,d=u=c=null,s=a;do{var p=s.lane,h=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(p=t,h=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=ye({},f,p);break e;case 2:Pn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,c=f):d=d.next=h,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Pr|=o,e.lanes=o,e.memoizedState=f}}function lm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ao={},Zt=Qn(ao),Ba=Qn(ao),Fa=Qn(ao);function fr(e){if(e===ao)throw Error(A(174));return e}function Rf(e,t){switch(ee(Fa,t),ee(Ba,e),ee(Zt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ou(t,e)}ie(Zt),ee(Zt,t)}function vi(){ie(Zt),ie(Ba),ie(Fa)}function zy(e){fr(Fa.current);var t=fr(Zt.current),n=Ou(t,e.type);t!==n&&(ee(Ba,e),ee(Zt,n))}function Nf(e){Ba.current===e&&(ie(Zt),ie(Ba))}var me=Qn(0);function Qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dc=[];function $f(){for(var e=0;e<Dc.length;e++)Dc[e]._workInProgressVersionPrimary=null;Dc.length=0}var gs=mn.ReactCurrentDispatcher,Ec=mn.ReactCurrentBatchConfig,Tr=0,ve=null,Le=null,Ie=null,Xs=!1,xa=!1,Va=0,QS=0;function We(){throw Error(A(321))}function Bf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Ff(e,t,n,r,i,a){if(Tr=a,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gs.current=e===null||e.memoizedState===null?qS:ek,e=n(r,i),xa){a=0;do{if(xa=!1,Va=0,25<=a)throw Error(A(301));a+=1,Ie=Le=null,t.updateQueue=null,gs.current=tk,e=n(r,i)}while(xa)}if(gs.current=Zs,t=Le!==null&&Le.next!==null,Tr=0,Ie=Le=ve=null,Xs=!1,t)throw Error(A(300));return e}function Vf(){var e=Va!==0;return Va=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Et(){if(Le===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ie===null?ve.memoizedState:Ie.next;if(t!==null)Ie=t,Le=e;else{if(e===null)throw Error(A(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function za(e,t){return typeof t=="function"?t(e):t}function Ac(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,c=null,u=a;do{var d=u.lane;if((Tr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,o=r):c=c.next=f,ve.lanes|=d,Pr|=d}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=s,Vt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ve.lanes|=a,Pr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Lc(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Vt(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wy(){}function Uy(e,t){var n=ve,r=Et(),i=t(),a=!Vt(r.memoizedState,i);if(a&&(r.memoizedState=i,ot=!0),r=r.queue,zf(Gy.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Wa(9,Yy.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(A(349));Tr&30||Hy(n,t,i)}return i}function Hy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yy(e,t,n,r){t.value=n,t.getSnapshot=r,Ky(t)&&Qy(e)}function Gy(e,t,n){return n(function(){Ky(t)&&Qy(e)})}function Ky(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Qy(e){var t=fn(e,1);t!==null&&Bt(t,e,1,-1)}function cm(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=JS.bind(null,ve,e),[t.memoizedState,e]}function Wa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xy(){return Et().memoizedState}function vs(e,t,n,r){var i=Yt();ve.flags|=e,i.memoizedState=Wa(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var i=Et();r=r===void 0?null:r;var a=void 0;if(Le!==null){var o=Le.memoizedState;if(a=o.destroy,r!==null&&Bf(r,o.deps)){i.memoizedState=Wa(t,n,a,r);return}}ve.flags|=e,i.memoizedState=Wa(1|t,n,a,r)}function um(e,t){return vs(8390656,8,e,t)}function zf(e,t){return Cl(2048,8,e,t)}function Zy(e,t){return Cl(4,2,e,t)}function Jy(e,t){return Cl(4,4,e,t)}function qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ex(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,qy.bind(null,t,e),n)}function Wf(){}function tx(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nx(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rx(e,t,n){return Tr&21?(Vt(n,t)||(n=ly(),ve.lanes|=n,Pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n)}function XS(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Ec.transition;Ec.transition={};try{e(!1),t()}finally{q=n,Ec.transition=r}}function ix(){return Et().memoizedState}function ZS(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ax(e))ox(t,n);else if(n=Fy(e,t,n,r),n!==null){var i=et();Bt(n,e,r,i),sx(n,t,r)}}function JS(e,t,n){var r=Bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(e))ox(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Vt(s,o)){var c=t.interleaved;c===null?(i.next=i,Mf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Fy(e,t,i,r),n!==null&&(i=et(),Bt(n,e,r,i),sx(n,t,r))}}function ax(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function ox(e,t){xa=Xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wf(e,n)}}var Zs={readContext:Dt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},qS={readContext:Dt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:um,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vs(4194308,4,qy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return vs(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ZS.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:cm,useDebugValue:Wf,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=cm(!1),t=e[0];return e=XS.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Yt();if(fe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Oe===null)throw Error(A(349));Tr&30||Hy(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,um(Gy.bind(null,r,a,e),[e]),r.flags|=2048,Wa(9,Yy.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Oe.identifierPrefix;if(fe){var n=on,r=an;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Va++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=QS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ek={readContext:Dt,useCallback:tx,useContext:Dt,useEffect:zf,useImperativeHandle:ex,useInsertionEffect:Zy,useLayoutEffect:Jy,useMemo:nx,useReducer:Ac,useRef:Xy,useState:function(){return Ac(za)},useDebugValue:Wf,useDeferredValue:function(e){var t=Et();return rx(t,Le.memoizedState,e)},useTransition:function(){var e=Ac(za)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Wy,useSyncExternalStore:Uy,useId:ix,unstable_isNewReconciler:!1},tk={readContext:Dt,useCallback:tx,useContext:Dt,useEffect:zf,useImperativeHandle:ex,useInsertionEffect:Zy,useLayoutEffect:Jy,useMemo:nx,useReducer:Lc,useRef:Xy,useState:function(){return Lc(za)},useDebugValue:Wf,useDeferredValue:function(e){var t=Et();return Le===null?t.memoizedState=e:rx(t,Le.memoizedState,e)},useTransition:function(){var e=Lc(za)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Wy,useSyncExternalStore:Uy,useId:ix,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?Ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=Bn(e),a=sn(r,i);a.payload=t,n!=null&&(a.callback=n),t=Nn(e,a,i),t!==null&&(Bt(t,e,i,r),ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=Bn(e),a=sn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Nn(e,a,i),t!==null&&(Bt(t,e,i,r),ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=Bn(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(Bt(t,e,r,n),ms(t,e,r))}};function dm(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Oa(n,r)||!Oa(i,a):!0}function lx(e,t,n){var r=!1,i=Hn,a=t.contextType;return typeof a=="object"&&a!==null?a=Dt(a):(i=lt(t)?jr:Qe.current,r=t.contextTypes,a=(r=r!=null)?hi(e,i):Hn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function fm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function rd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Of(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Dt(a):(a=lt(t)?jr:Qe.current,i.context=hi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(nd(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yi(e,t){try{var n="",r=t;do n+=E2(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function _c(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function id(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nk=typeof WeakMap=="function"?WeakMap:Map;function cx(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,hd=r),id(e,t)},n}function ux(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){id(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){id(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function pm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gk.bind(null,e,t,n),t.then(e,e))}function hm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var rk=mn.ReactCurrentOwner,ot=!1;function qe(e,t,n,r){t.child=e===null?By(t,null,n,r):gi(t,e.child,n,r)}function gm(e,t,n,r,i){n=n.render;var a=t.ref;return ui(t,i),r=Ff(e,t,n,r,a,i),n=Vf(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(fe&&n&&Df(t),t.flags|=1,qe(e,t,r,i),t.child)}function vm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Zf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,dx(e,t,a,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,r)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=Fn(a,r),e.ref=t.ref,e.return=t,t.child=e}function dx(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Oa(a,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ot=!0);else return t.lanes=e.lanes,pn(e,t,i)}return ad(e,t,n,r,i)}function fx(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Qr,ft),ft|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Qr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ee(Qr,ft),ft|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ee(Qr,ft),ft|=r;return qe(e,t,i,n),t.child}function px(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ad(e,t,n,r,i){var a=lt(n)?jr:Qe.current;return a=hi(t,a),ui(t,i),n=Ff(e,t,n,r,a,i),r=Vf(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(fe&&r&&Df(t),t.flags|=1,qe(e,t,n,i),t.child)}function ym(e,t,n,r,i){if(lt(n)){var a=!0;Ws(t)}else a=!1;if(ui(t,i),t.stateNode===null)ys(e,t),lx(t,n,r),rd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=lt(n)?jr:Qe.current,u=hi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==u)&&fm(t,o,r,u),Pn=!1;var p=t.memoizedState;o.state=p,Ks(t,r,o,i),c=t.memoizedState,s!==r||p!==c||st.current||Pn?(typeof d=="function"&&(nd(t,n,d,r),c=t.memoizedState),(s=Pn||dm(t,n,s,r,p,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Vy(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ot(t.type,s),o.props=u,f=t.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Dt(c):(c=lt(n)?jr:Qe.current,c=hi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==c)&&fm(t,o,r,c),Pn=!1,p=t.memoizedState,o.state=p,Ks(t,r,o,i);var y=t.memoizedState;s!==f||p!==y||st.current||Pn?(typeof h=="function"&&(nd(t,n,h,r),y=t.memoizedState),(u=Pn||dm(t,n,u,r,p,y,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return od(e,t,n,r,a,i)}function od(e,t,n,r,i,a){px(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&rm(t,n,!1),pn(e,t,a);r=t.stateNode,rk.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gi(t,e.child,null,a),t.child=gi(t,null,s,a)):qe(e,t,s,a),t.memoizedState=r.state,i&&rm(t,n,!0),t.child}function hx(e){var t=e.stateNode;t.pendingContext?nm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nm(e,t.context,!1),Rf(e,t.containerInfo)}function xm(e,t,n,r,i){return mi(),Af(i),t.flags|=256,qe(e,t,n,r),t.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function ld(e){return{baseLanes:e,cachePool:null,transitions:null}}function mx(e,t,n){var r=t.pendingProps,i=me.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(me,i&1),e===null)return ed(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=El(o,r,0,null),e=yr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ld(n),t.memoizedState=sd,e):Uf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ik(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Fn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Fn(s,a):(a=yr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=sd,r}return a=e.child,e=a.sibling,r=Fn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uf(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Io(e,t,n,r){return r!==null&&Af(r),gi(t,e.child,null,n),e=Uf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ik(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=_c(Error(A(422))),Io(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=El({mode:"visible",children:r.children},i,0,null),a=yr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&gi(t,e.child,null,o),t.child.memoizedState=ld(o),t.memoizedState=sd,a);if(!(t.mode&1))return Io(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(A(419)),r=_c(a,r,void 0),Io(e,t,o,r)}if(s=(o&e.childLanes)!==0,ot||s){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,fn(e,i),Bt(r,e,i,-1))}return Xf(),r=_c(Error(A(421))),Io(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,pt=Rn(i.nextSibling),ht=t,fe=!0,Nt=null,e!==null&&(jt[Ct++]=an,jt[Ct++]=on,jt[Ct++]=Cr,an=e.id,on=e.overflow,Cr=t),t=Uf(t,r.children),t.flags|=4096,t)}function wm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),td(e.return,t,n)}function Ic(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function gx(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(qe(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,n,t);else if(e.tag===19)wm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ic(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ic(t,!0,n,null,a);break;case"together":Ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ak(e,t,n){switch(t.tag){case 3:hx(t),mi();break;case 5:zy(t);break;case 1:lt(t.type)&&Ws(t);break;case 4:Rf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Ys,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?mx(e,t,n):(ee(me,me.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ee(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,fx(e,t,n)}return pn(e,t,n)}var vx,cd,yx,xx;vx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};yx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fr(Zt.current);var a=null;switch(n){case"input":i=Lu(e,i),r=Lu(e,r),a=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),a=[];break;case"textarea":i=Mu(e,i),r=Mu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vs)}Ru(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Da.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Da.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};xx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ki(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ok(e,t,n){var r=t.pendingProps;switch(Ef(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return lt(t.type)&&zs(),Ue(t),null;case 3:return r=t.stateNode,vi(),ie(st),ie(Qe),$f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(vd(Nt),Nt=null))),cd(e,t),Ue(t),null;case 5:Nf(t);var i=fr(Fa.current);if(n=t.type,e!==null&&t.stateNode!=null)yx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ue(t),null}if(e=fr(Zt.current),Lo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Kt]=t,r[$a]=a,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<la.length;i++)ne(la[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Eh(r,a),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ne("invalid",r);break;case"textarea":Lh(r,a),ne("invalid",r)}Ru(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ao(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ao(r.textContent,s,e),i=["children",""+s]):Da.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":So(r),Ah(r,a,!0);break;case"textarea":So(r),_h(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Kt]=t,e[$a]=r,vx(e,t,!1,!1),t.stateNode=e;e:{switch(o=Nu(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<la.length;i++)ne(la[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Eh(e,r),i=Lu(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Lh(e,r),i=Mu(e,r),ne("invalid",e);break;default:i=r}Ru(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?Xv(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Kv(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ea(e,c):typeof c=="number"&&Ea(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Da.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ne("scroll",e):c!=null&&hf(e,a,c,o))}switch(n){case"input":So(e),Ah(e,r,!1);break;case"textarea":So(e),_h(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?oi(e,!!r.multiple,a,!1):r.defaultValue!=null&&oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)xx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=fr(Fa.current),fr(Zt.current),Lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(a=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ie(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&pt!==null&&t.mode&1&&!(t.flags&128))Ny(),mi(),t.flags|=98560,a=!1;else if(a=Lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[Kt]=t}else mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else Nt!==null&&(vd(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?_e===0&&(_e=3):Xf())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return vi(),cd(e,t),e===null&&Ra(t.stateNode.containerInfo),Ue(t),null;case 10:return If(t.type._context),Ue(t),null;case 17:return lt(t.type)&&zs(),Ue(t),null;case 19:if(ie(me),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Ki(a,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qs(e),o!==null){for(t.flags|=128,Ki(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&ke()>xi&&(t.flags|=128,r=!0,Ki(a,!1),t.lanes=4194304)}else{if(!r)if(e=Qs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ki(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!fe)return Ue(t),null}else 2*ke()-a.renderingStartTime>xi&&n!==1073741824&&(t.flags|=128,r=!0,Ki(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ke(),t.sibling=null,n=me.current,ee(me,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Qf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function sk(e,t){switch(Ef(t),t.tag){case 1:return lt(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),ie(st),ie(Qe),$f(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nf(t),null;case 13:if(ie(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(me),null;case 4:return vi(),null;case 10:return If(t.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var Mo=!1,Ye=!1,lk=typeof WeakSet=="function"?WeakSet:Set,N=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function ud(e,t,n){try{n()}catch(r){be(e,t,r)}}var bm=!1;function ck(e,t){if(Gu=$s,e=jy(),Pf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++d===r&&(c=o),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:e,selectionRange:n},$s=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ot(t.type,x),j);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){be(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=bm,bm=!1,y}function wa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ud(t,n,a)}i=i.next}while(i!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function dd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wx(e){var t=e.alternate;t!==null&&(e.alternate=null,wx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[$a],delete t[Zu],delete t[HS],delete t[YS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bx(e){return e.tag===5||e.tag===3||e.tag===4}function Sm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vs));else if(r!==4&&(e=e.child,e!==null))for(fd(e,t,n),e=e.sibling;e!==null;)fd(e,t,n),e=e.sibling}function pd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pd(e,t,n),e=e.sibling;e!==null;)pd(e,t,n),e=e.sibling}var $e=null,Rt=!1;function vn(e,t,n){for(n=n.child;n!==null;)Sx(e,t,n),n=n.sibling}function Sx(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Ye||Kr(n,t);case 6:var r=$e,i=Rt;$e=null,vn(e,t,n),$e=r,Rt=i,$e!==null&&(Rt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Rt?(e=$e,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),Ia(e)):Tc($e,n.stateNode));break;case 4:r=$e,i=Rt,$e=n.stateNode.containerInfo,Rt=!0,vn(e,t,n),$e=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ud(n,t,o),i=i.next}while(i!==r)}vn(e,t,n);break;case 1:if(!Ye&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){be(n,t,s)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,vn(e,t,n),Ye=r):vn(e,t,n);break;default:vn(e,t,n)}}function km(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lk),t.forEach(function(r){var i=yk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:$e=s.stateNode,Rt=!1;break e;case 3:$e=s.stateNode.containerInfo,Rt=!0;break e;case 4:$e=s.stateNode.containerInfo,Rt=!0;break e}s=s.return}if($e===null)throw Error(A(160));Sx(a,o,i),$e=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kx(t,e),t=t.sibling}function kx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ut(e),r&4){try{wa(3,e,e.return),Pl(3,e)}catch(x){be(e,e.return,x)}try{wa(5,e,e.return)}catch(x){be(e,e.return,x)}}break;case 1:It(t,e),Ut(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(It(t,e),Ut(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{Ea(i,"")}catch(x){be(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Hv(i,a),Nu(s,o);var u=Nu(s,a);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?Xv(i,f):d==="dangerouslySetInnerHTML"?Kv(i,f):d==="children"?Ea(i,f):hf(i,d,f,u)}switch(s){case"input":_u(i,a);break;case"textarea":Yv(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?oi(i,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?oi(i,!!a.multiple,a.defaultValue,!0):oi(i,!!a.multiple,a.multiple?[]:"",!1))}i[$a]=a}catch(x){be(e,e.return,x)}}break;case 6:if(It(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){be(e,e.return,x)}}break;case 3:if(It(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(t.containerInfo)}catch(x){be(e,e.return,x)}break;case 4:It(t,e),Ut(e);break;case 13:It(t,e),Ut(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Gf=ke())),r&4&&km(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,It(t,e),Ye=u):It(t,e),Ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(p=N,h=p.child,p.tag){case 0:case 11:case 14:case 15:wa(4,p,p.return);break;case 1:Kr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){be(r,n,x)}}break;case 5:Kr(p,p.return);break;case 22:if(p.memoizedState!==null){Cm(f);continue}}h!==null?(h.return=p,N=h):Cm(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Qv("display",o))}catch(x){be(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){be(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Ut(e),r&4&&km(e);break;case 21:break;default:It(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bx(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ea(i,""),r.flags&=-33);var a=Sm(e);pd(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Sm(e);fd(e,s,o);break;default:throw Error(A(161))}}catch(c){be(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uk(e,t,n){N=e,jx(e)}function jx(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mo;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||Ye;s=Mo;var u=Ye;if(Mo=o,(Ye=c)&&!u)for(N=i;N!==null;)o=N,c=o.child,o.tag===22&&o.memoizedState!==null?Tm(i):c!==null?(c.return=o,N=c):Tm(i);for(;a!==null;)N=a,jx(a),a=a.sibling;N=i,Mo=s,Ye=u}jm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,N=a):jm(e)}}function jm(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&lm(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lm(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ye||t.flags&512&&dd(t)}catch(p){be(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Cm(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Tm(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(c){be(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){be(t,i,c)}}var a=t.return;try{dd(t)}catch(c){be(t,a,c)}break;case 5:var o=t.return;try{dd(t)}catch(c){be(t,o,c)}}}catch(c){be(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var dk=Math.ceil,Js=mn.ReactCurrentDispatcher,Hf=mn.ReactCurrentOwner,Pt=mn.ReactCurrentBatchConfig,Z=0,Oe=null,Pe=null,Ve=0,ft=0,Qr=Qn(0),_e=0,Ua=null,Pr=0,Dl=0,Yf=0,ba=null,at=null,Gf=0,xi=1/0,tn=null,qs=!1,hd=null,$n=null,Oo=!1,Ln=null,el=0,Sa=0,md=null,xs=-1,ws=0;function et(){return Z&6?ke():xs!==-1?xs:xs=ke()}function Bn(e){return e.mode&1?Z&2&&Ve!==0?Ve&-Ve:KS.transition!==null?(ws===0&&(ws=ly()),ws):(e=q,e!==0||(e=window.event,e=e===void 0?16:my(e.type)),e):1}function Bt(e,t,n,r){if(50<Sa)throw Sa=0,md=null,Error(A(185));no(e,n,r),(!(Z&2)||e!==Oe)&&(e===Oe&&(!(Z&2)&&(Dl|=n),_e===4&&En(e,Ve)),ct(e,r),n===1&&Z===0&&!(t.mode&1)&&(xi=ke()+500,jl&&Xn()))}function ct(e,t){var n=e.callbackNode;K2(e,t);var r=Ns(e,e===Oe?Ve:0);if(r===0)n!==null&&Oh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oh(n),t===1)e.tag===0?GS(Pm.bind(null,e)):My(Pm.bind(null,e)),WS(function(){!(Z&6)&&Xn()}),n=null;else{switch(cy(r)){case 1:n=xf;break;case 4:n=oy;break;case 16:n=Rs;break;case 536870912:n=sy;break;default:n=Rs}n=_x(n,Cx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cx(e,t){if(xs=-1,ws=0,Z&6)throw Error(A(327));var n=e.callbackNode;if(di()&&e.callbackNode!==n)return null;var r=Ns(e,e===Oe?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var i=Z;Z|=2;var a=Px();(Oe!==e||Ve!==t)&&(tn=null,xi=ke()+500,vr(e,t));do try{hk();break}catch(s){Tx(e,s)}while(!0);_f(),Js.current=a,Z=i,Pe!==null?t=0:(Oe=null,Ve=0,t=_e)}if(t!==0){if(t===2&&(i=zu(e),i!==0&&(r=i,t=gd(e,i))),t===1)throw n=Ua,vr(e,0),En(e,r),ct(e,ke()),n;if(t===6)En(e,r);else{if(i=e.current.alternate,!(r&30)&&!fk(i)&&(t=tl(e,r),t===2&&(a=zu(e),a!==0&&(r=a,t=gd(e,a))),t===1))throw n=Ua,vr(e,0),En(e,r),ct(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:sr(e,at,tn);break;case 3:if(En(e,r),(r&130023424)===r&&(t=Gf+500-ke(),10<t)){if(Ns(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xu(sr.bind(null,e,at,tn),t);break}sr(e,at,tn);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-$t(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dk(r/1960))-r,10<r){e.timeoutHandle=Xu(sr.bind(null,e,at,tn),r);break}sr(e,at,tn);break;case 5:sr(e,at,tn);break;default:throw Error(A(329))}}}return ct(e,ke()),e.callbackNode===n?Cx.bind(null,e):null}function gd(e,t){var n=ba;return e.current.memoizedState.isDehydrated&&(vr(e,t).flags|=256),e=tl(e,t),e!==2&&(t=at,at=n,t!==null&&vd(t)),e}function vd(e){at===null?at=e:at.push.apply(at,e)}function fk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Vt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~Yf,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function Pm(e){if(Z&6)throw Error(A(327));di();var t=Ns(e,0);if(!(t&1))return ct(e,ke()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=zu(e);r!==0&&(t=r,n=gd(e,r))}if(n===1)throw n=Ua,vr(e,0),En(e,t),ct(e,ke()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,at,tn),ct(e,ke()),null}function Kf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(xi=ke()+500,jl&&Xn())}}function Dr(e){Ln!==null&&Ln.tag===0&&!(Z&6)&&di();var t=Z;Z|=1;var n=Pt.transition,r=q;try{if(Pt.transition=null,q=1,e)return e()}finally{q=r,Pt.transition=n,Z=t,!(Z&6)&&Xn()}}function Qf(){ft=Qr.current,ie(Qr)}function vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:vi(),ie(st),ie(Qe),$f();break;case 5:Nf(r);break;case 4:vi();break;case 13:ie(me);break;case 19:ie(me);break;case 10:If(r.type._context);break;case 22:case 23:Qf()}n=n.return}if(Oe=e,Pe=e=Fn(e.current,null),Ve=ft=t,_e=0,Ua=null,Yf=Dl=Pr=0,at=ba=null,dr!==null){for(t=0;t<dr.length;t++)if(n=dr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}dr=null}return e}function Tx(e,t){do{var n=Pe;try{if(_f(),gs.current=Zs,Xs){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xs=!1}if(Tr=0,Ie=Le=ve=null,xa=!1,Va=0,Hf.current=null,n===null||n.return===null){_e=1,Ua=t,Pe=null;break}e:{var a=e,o=n.return,s=n,c=t;if(t=Ve,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=hm(o);if(h!==null){h.flags&=-257,mm(h,o,s,a,t),h.mode&1&&pm(a,u,t),t=h,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){pm(a,u,t),Xf();break e}c=Error(A(426))}}else if(fe&&s.mode&1){var j=hm(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),mm(j,o,s,a,t),Af(yi(c,s));break e}}a=c=yi(c,s),_e!==4&&(_e=2),ba===null?ba=[a]:ba.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=cx(a,c,t);sm(a,g);break e;case 1:s=c;var m=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($n===null||!$n.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=ux(a,s,t);sm(a,S);break e}}a=a.return}while(a!==null)}Ex(n)}catch(k){t=k,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Px(){var e=Js.current;return Js.current=Zs,e===null?Zs:e}function Xf(){(_e===0||_e===3||_e===2)&&(_e=4),Oe===null||!(Pr&268435455)&&!(Dl&268435455)||En(Oe,Ve)}function tl(e,t){var n=Z;Z|=2;var r=Px();(Oe!==e||Ve!==t)&&(tn=null,vr(e,t));do try{pk();break}catch(i){Tx(e,i)}while(!0);if(_f(),Z=n,Js.current=r,Pe!==null)throw Error(A(261));return Oe=null,Ve=0,_e}function pk(){for(;Pe!==null;)Dx(Pe)}function hk(){for(;Pe!==null&&!B2();)Dx(Pe)}function Dx(e){var t=Lx(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Ex(e):Pe=t,Hf.current=null}function Ex(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sk(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Pe=null;return}}else if(n=ok(n,t,ft),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);_e===0&&(_e=5)}function sr(e,t,n){var r=q,i=Pt.transition;try{Pt.transition=null,q=1,mk(e,t,n,r)}finally{Pt.transition=i,q=r}return null}function mk(e,t,n,r){do di();while(Ln!==null);if(Z&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Q2(e,a),e===Oe&&(Pe=Oe=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,_x(Rs,function(){return di(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Pt.transition,Pt.transition=null;var o=q;q=1;var s=Z;Z|=4,Hf.current=null,ck(e,n),kx(n,e),OS(Ku),$s=!!Gu,Ku=Gu=null,e.current=n,uk(n),F2(),Z=s,q=o,Pt.transition=a}else e.current=n;if(Oo&&(Oo=!1,Ln=e,el=i),a=e.pendingLanes,a===0&&($n=null),W2(n.stateNode),ct(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qs)throw qs=!1,e=hd,hd=null,e;return el&1&&e.tag!==0&&di(),a=e.pendingLanes,a&1?e===md?Sa++:(Sa=0,md=e):Sa=0,Xn(),null}function di(){if(Ln!==null){var e=cy(el),t=Pt.transition,n=q;try{if(Pt.transition=null,q=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,el=0,Z&6)throw Error(A(331));var i=Z;for(Z|=4,N=e.current;N!==null;){var a=N,o=a.child;if(N.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:wa(8,d,a)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var p=d.sibling,h=d.return;if(wx(d),d===u){N=null;break}if(p!==null){p.return=h,N=p;break}N=h}}}var y=a.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}N=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,N=o;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:wa(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,N=g;break e}N=a.return}}var m=e.current;for(N=m;N!==null;){o=N;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,N=v;else e:for(o=m;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(k){be(s,s.return,k)}if(s===o){N=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,N=S;break e}N=s.return}}if(Z=i,Xn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{q=n,Pt.transition=t}}return!1}function Dm(e,t,n){t=yi(n,t),t=cx(e,t,1),e=Nn(e,t,1),t=et(),e!==null&&(no(e,1,t),ct(e,t))}function be(e,t,n){if(e.tag===3)Dm(e,e,n);else for(;t!==null;){if(t.tag===3){Dm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=yi(n,e),e=ux(t,e,1),t=Nn(t,e,1),e=et(),t!==null&&(no(t,1,e),ct(t,e));break}}t=t.return}}function gk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ve&n)===n&&(_e===4||_e===3&&(Ve&130023424)===Ve&&500>ke()-Gf?vr(e,0):Yf|=n),ct(e,t)}function Ax(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=et();e=fn(e,t),e!==null&&(no(e,t,n),ct(e,n))}function vk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ax(e,n)}function yk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Ax(e,n)}var Lx;Lx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ot=!1,ak(e,t,n);ot=!!(e.flags&131072)}else ot=!1,fe&&t.flags&1048576&&Oy(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ys(e,t),e=t.pendingProps;var i=hi(t,Qe.current);ui(t,n),i=Ff(null,t,r,e,i,n);var a=Vf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(a=!0,Ws(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Of(t),i.updater=Tl,t.stateNode=i,i._reactInternals=t,rd(t,r,e,n),t=od(null,t,r,!0,a,n)):(t.tag=0,fe&&a&&Df(t),qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ys(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=wk(r),e=Ot(r,e),i){case 0:t=ad(null,t,r,e,n);break e;case 1:t=ym(null,t,r,e,n);break e;case 11:t=gm(null,t,r,e,n);break e;case 14:t=vm(null,t,r,Ot(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ad(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ym(e,t,r,i,n);case 3:e:{if(hx(t),e===null)throw Error(A(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Vy(e,t),Ks(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=yi(Error(A(423)),t),t=xm(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(A(424)),t),t=xm(e,t,r,n,i);break e}else for(pt=Rn(t.stateNode.containerInfo.firstChild),ht=t,fe=!0,Nt=null,n=By(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){t=pn(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return zy(t),e===null&&ed(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Qu(r,i)?o=null:a!==null&&Qu(r,a)&&(t.flags|=32),px(e,t),qe(e,t,o,n),t.child;case 6:return e===null&&ed(t),null;case 13:return mx(e,t,n);case 4:return Rf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),gm(e,t,r,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ee(Ys,r._currentValue),r._currentValue=o,a!==null)if(Vt(a.value,o)){if(a.children===i.children&&!st.current){t=pn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=sn(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),td(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(A(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),td(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ui(t,n),i=Dt(i),r=r(i),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),vm(e,t,r,i,n);case 15:return dx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ys(e,t),t.tag=1,lt(r)?(e=!0,Ws(t)):e=!1,ui(t,n),lx(t,r,i),rd(t,r,i,n),od(null,t,r,!0,e,n);case 19:return gx(e,t,n);case 22:return fx(e,t,n)}throw Error(A(156,t.tag))};function _x(e,t){return ay(e,t)}function xk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new xk(e,t,n,r)}function Zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wk(e){if(typeof e=="function")return Zf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gf)return 11;if(e===vf)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Zf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Br:return yr(n.children,i,a,t);case mf:o=8,i|=8;break;case Pu:return e=Tt(12,n,t,i|2),e.elementType=Pu,e.lanes=a,e;case Du:return e=Tt(13,n,t,i),e.elementType=Du,e.lanes=a,e;case Eu:return e=Tt(19,n,t,i),e.elementType=Eu,e.lanes=a,e;case zv:return El(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fv:o=10;break e;case Vv:o=9;break e;case gf:o=11;break e;case vf:o=14;break e;case Tn:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function yr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=zv,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Oc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jf(e,t,n,r,i,a,o,s,c){return e=new bk(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(a),e}function Sk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ix(e){if(!e)return Hn;e=e._reactInternals;e:{if(Ar(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(lt(n))return Iy(e,n,t)}return t}function Mx(e,t,n,r,i,a,o,s,c){return e=Jf(n,r,!0,e,i,a,o,s,c),e.context=Ix(null),n=e.current,r=et(),i=Bn(n),a=sn(r,i),a.callback=t??null,Nn(n,a,i),e.current.lanes=i,no(e,i,r),ct(e,r),e}function Al(e,t,n,r){var i=t.current,a=et(),o=Bn(i);return n=Ix(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,o),e!==null&&(Bt(e,i,o,a),ms(e,i,o)),o}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Em(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qf(e,t){Em(e,t),(e=e.alternate)&&Em(e,t)}function kk(){return null}var Ox=typeof reportError=="function"?reportError:function(e){console.error(e)};function ep(e){this._internalRoot=e}Ll.prototype.render=ep.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Al(e,t,null,null)};Ll.prototype.unmount=ep.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dr(function(){Al(null,e,null,null)}),t[dn]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=fy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&t!==0&&t<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&hy(e)}};function tp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Am(){}function jk(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=nl(o);a.call(u)}}var o=Mx(t,r,e,0,null,!1,!1,"",Am);return e._reactRootContainer=o,e[dn]=o.current,Ra(e.nodeType===8?e.parentNode:e),Dr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=nl(c);s.call(u)}}var c=Jf(e,0,!1,null,null,!1,!1,"",Am);return e._reactRootContainer=c,e[dn]=c.current,Ra(e.nodeType===8?e.parentNode:e),Dr(function(){Al(t,c,n,r)}),c}function Il(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var c=nl(o);s.call(c)}}Al(t,o,e,i)}else o=jk(n,t,e,i,r);return nl(o)}uy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sa(t.pendingLanes);n!==0&&(wf(t,n|1),ct(t,ke()),!(Z&6)&&(xi=ke()+500,Xn()))}break;case 13:Dr(function(){var r=fn(e,1);if(r!==null){var i=et();Bt(r,e,1,i)}}),qf(e,1)}};bf=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=et();Bt(t,e,134217728,n)}qf(e,134217728)}};dy=function(e){if(e.tag===13){var t=Bn(e),n=fn(e,t);if(n!==null){var r=et();Bt(n,e,t,r)}qf(e,t)}};fy=function(){return q};py=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Bu=function(e,t,n){switch(t){case"input":if(_u(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=kl(r);if(!i)throw Error(A(90));Uv(r),_u(r,i)}}}break;case"textarea":Yv(e,n);break;case"select":t=n.value,t!=null&&oi(e,!!n.multiple,t,!1)}};qv=Kf;ey=Dr;var Ck={usingClientEntryPoint:!1,Events:[io,Wr,kl,Zv,Jv,Kf]},Qi={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tk={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ry(e),e===null?null:e.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{xl=Ro.inject(Tk),Xt=Ro}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ck;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(t))throw Error(A(200));return Sk(e,t,null,n)};yt.createRoot=function(e,t){if(!tp(e))throw Error(A(299));var n=!1,r="",i=Ox;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jf(e,1,!1,null,null,n,!1,r,i),e[dn]=t.current,Ra(e.nodeType===8?e.parentNode:e),new ep(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=ry(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return Dr(e)};yt.hydrate=function(e,t,n){if(!_l(t))throw Error(A(200));return Il(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!tp(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Ox;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mx(t,null,e,1,n??null,i,!1,a,o),e[dn]=t.current,Ra(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ll(t)};yt.render=function(e,t,n){if(!_l(t))throw Error(A(200));return Il(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!_l(e))throw Error(A(40));return e._reactRootContainer?(Dr(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};yt.unstable_batchedUpdates=Kf;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Il(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function Rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rx)}catch(e){console.error(e)}}Rx(),Rv.exports=yt;var Nx=Rv.exports,$x,Lm=Nx;$x=Lm.createRoot,Lm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const _m="popstate";function Pk(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return yd("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rl(i)}return Ek(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function np(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dk(){return Math.random().toString(36).substr(2,8)}function Im(e,t){return{usr:e.state,key:e.key,idx:t}}function yd(e,t,n,r){return n===void 0&&(n=null),Ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_i(t):t,{state:n,key:t&&t.key||r||Dk()})}function rl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _i(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ek(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=_n.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(Ha({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=_n.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:s,location:x.location,delta:g})}function p(j,g){s=_n.Push;let m=yd(x.location,j,g);u=d()+1;let v=Im(m,u),S=x.createHref(m);try{o.pushState(v,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}a&&c&&c({action:s,location:x.location,delta:1})}function h(j,g){s=_n.Replace;let m=yd(x.location,j,g);u=d();let v=Im(m,u),S=x.createHref(m);o.replaceState(v,"",S),a&&c&&c({action:s,location:x.location,delta:0})}function y(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof j=="string"?j:rl(j);return m=m.replace(/ $/,"%20"),je(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return s},get location(){return e(i,o)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(_m,f),c=j,()=>{i.removeEventListener(_m,f),c=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let g=y(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(j){return o.go(j)}};return x}var Mm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mm||(Mm={}));function Ak(e,t,n){return n===void 0&&(n="/"),Lk(e,t,n)}function Lk(e,t,n,r){let i=typeof t=="string"?_i(t):t,a=rp(i.pathname||"/",n);if(a==null)return null;let o=Bx(e);_k(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let u=Uk(a);s=Vk(o[c],u)}return s}function Bx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let c={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Vn([r,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(je(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bx(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Bk(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let c of Fx(a.path))i(a,o,c)}),t}function Fx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Fx(r.join("/")),s=[];return s.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function _k(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ik=/^:[\w-]+$/,Mk=3,Ok=2,Rk=1,Nk=10,$k=-2,Om=e=>e==="*";function Bk(e,t){let n=e.split("/"),r=n.length;return n.some(Om)&&(r+=$k),t&&(r+=Ok),n.filter(i=>!Om(i)).reduce((i,a)=>i+(Ik.test(a)?Mk:a===""?Rk:Nk),r)}function Fk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vk(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",f=zk({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Vn([a,f.pathname]),pathnameBase:Qk(Vn([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=Vn([a,f.pathnameBase]))}return o}function zk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let x=s[f]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const y=s[f];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Wk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),np(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Uk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return np(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Hk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yk=e=>Hk.test(e);function Gk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?_i(e):e,a;if(n)if(Yk(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),np(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=Rm(n.substring(1),"/"):a=Rm(n,t)}else a=t;return{pathname:a,search:Xk(r),hash:Zk(i)}}function Rm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ip(e,t){let n=Kk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ap(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=_i(e):(i=Ha({},e),je(!i.pathname||!i.pathname.includes("?"),Rc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Rc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Rc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let c=Gk(i,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Vn=e=>e.join("/").replace(/\/\/+/g,"/"),Qk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vx=["post","put","patch","delete"];new Set(Vx);const qk=["get",...Vx];new Set(qk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ya.apply(this,arguments)}const op=w.createContext(null),ej=w.createContext(null),Zn=w.createContext(null),Ml=w.createContext(null),Jn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),zx=w.createContext(null);function tj(e,t){let{relative:n}=t===void 0?{}:t;Ii()||je(!1);let{basename:r,navigator:i}=w.useContext(Zn),{hash:a,pathname:o,search:s}=Ux(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Vn([r,o])),i.createHref({pathname:c,search:s,hash:a})}function Ii(){return w.useContext(Ml)!=null}function Mi(){return Ii()||je(!1),w.useContext(Ml).location}function Wx(e){w.useContext(Zn).static||w.useLayoutEffect(e)}function sp(){let{isDataRoute:e}=w.useContext(Jn);return e?hj():nj()}function nj(){Ii()||je(!1);let e=w.useContext(op),{basename:t,future:n,navigator:r}=w.useContext(Zn),{matches:i}=w.useContext(Jn),{pathname:a}=Mi(),o=JSON.stringify(ip(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return Wx(()=>{s.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=ap(u,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Vn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,a,e])}function Ux(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Zn),{matches:i}=w.useContext(Jn),{pathname:a}=Mi(),o=JSON.stringify(ip(i,r.v7_relativeSplatPath));return w.useMemo(()=>ap(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function rj(e,t){return ij(e,t)}function ij(e,t,n,r){Ii()||je(!1);let{navigator:i}=w.useContext(Zn),{matches:a}=w.useContext(Jn),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=Mi(),d;if(t){var f;let j=typeof t=="string"?_i(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||je(!1),d=j}else d=u;let p=d.pathname||"/",h=p;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=Ak(e,{pathname:h}),x=cj(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Vn([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Vn([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,r);return t&&x?w.createElement(Ml.Provider,{value:{location:Ya({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},x):x}function aj(){let e=pj(),t=Jk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const oj=w.createElement(aj,null);class sj extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Jn.Provider,{value:this.props.routeContext},w.createElement(zx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lj(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(op);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Jn.Provider,{value:t},r)}function cj(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||je(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let h,y=!1,x=null,j=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||oj,c&&(u<0&&p===0?(mj("route-fallback"),y=!0,j=null):u===p&&(y=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,p+1)),m=()=>{let v;return h?v=x:y?v=j:f.route.Component?v=w.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,w.createElement(lj,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(sj,{location:n.location,revalidation:n.revalidation,component:x,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Hx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hx||{}),Yx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yx||{});function uj(e){let t=w.useContext(op);return t||je(!1),t}function dj(e){let t=w.useContext(ej);return t||je(!1),t}function fj(e){let t=w.useContext(Jn);return t||je(!1),t}function Gx(e){let t=fj(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function pj(){var e;let t=w.useContext(zx),n=dj(),r=Gx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function hj(){let{router:e}=uj(Hx.UseNavigateStable),t=Gx(Yx.UseNavigateStable),n=w.useRef(!1);return Wx(()=>{n.current=!0}),w.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ya({fromRouteId:t},a)))},[e,t])}const Nm={};function mj(e,t,n){Nm[e]||(Nm[e]=!0)}function gj(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function vj(e){let{to:t,replace:n,state:r,relative:i}=e;Ii()||je(!1);let{future:a,static:o}=w.useContext(Zn),{matches:s}=w.useContext(Jn),{pathname:c}=Mi(),u=sp(),d=ap(t,ip(s,a.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Nr(e){je(!1)}function yj(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:a,static:o=!1,future:s}=e;Ii()&&je(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:a,static:o,future:Ya({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r=="string"&&(r=_i(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:y="default"}=r,x=w.useMemo(()=>{let j=rp(d,c);return j==null?null:{location:{pathname:j,search:f,hash:p,state:h,key:y},navigationType:i}},[c,d,f,p,h,y,i]);return x==null?null:w.createElement(Zn.Provider,{value:u},w.createElement(Ml.Provider,{children:n,value:x}))}function xj(e){let{children:t,location:n}=e;return rj(xd(t),n)}new Promise(()=>{});function xd(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let a=[...t,i];if(r.type===w.Fragment){n.push.apply(n,xd(r.props.children,a));return}r.type!==Nr&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xd(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wd(){return wd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wd.apply(this,arguments)}function wj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sj(e,t){return e.button===0&&(!t||t==="_self")&&!bj(e)}const kj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jj="6";try{window.__reactRouterVersion=jj}catch{}const Cj="startTransition",$m=g2[Cj];function Tj(e){let{basename:t,children:n,future:r,window:i}=e,a=w.useRef();a.current==null&&(a.current=Pk({window:i,v5Compat:!0}));let o=a.current,[s,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&$m?$m(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>gj(r),[r]),w.createElement(yj,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Pj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kx=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=wj(t,kj),{basename:h}=w.useContext(Zn),y,x=!1;if(typeof u=="string"&&Dj.test(u)&&(y=u,Pj))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=rp(S.pathname,h);S.origin===v.origin&&k!=null?u=k+S.search+S.hash:x=!0}catch{}let j=tj(u,{relative:i}),g=Ej(u,{replace:o,state:s,target:c,preventScrollReset:d,relative:i,viewTransition:f});function m(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",wd({},p,{href:y||j,onClick:x||a?r:m,ref:n,target:c}))});var Bm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bm||(Bm={}));var Fm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fm||(Fm={}));function Ej(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=sp(),u=Mi(),d=Ux(e,{relative:o});return w.useCallback(f=>{if(Sj(f,n)){f.preventDefault();let p=r!==void 0?r:rl(u)===rl(d);c(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[u,c,d,r,i,n,e,a,o,s])}const Qx=w.createContext({isDark:!0,toggleTheme:()=>{}}),Aj=({children:e})=>{const[t,n]=w.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),w.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),a=o=>{localStorage.getItem("theme")||n(o.matches)};return i.addEventListener("change",a),()=>i.removeEventListener("change",a)},[]);const r=()=>n(!t);return l.jsx(Qx.Provider,{value:{isDark:t,toggleTheme:r},children:e})},lp=()=>{const e=w.useContext(Qx);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Xx=w.createContext(null),Nc="tools-auth-session",$c="tools-webauthn-credential",Lj=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),_j=async()=>{if(!Lj())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Bc=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Ij=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},Mj=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Oj=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!0),[a,o]=w.useState(!1),s=w.useRef(!1),c=async()=>{try{const h={challenge:Bc(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Bc(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},y=await navigator.credentials.create({publicKey:h});return y?(localStorage.setItem($c,Ij(y.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem($c),y={challenge:Bc(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:Mj(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:y})}catch(p){return console.error("Authentication failed:",p),!1}},d=w.useCallback(async()=>{i(!0),o(!1);const p=sessionStorage.getItem(Nc);if(p)try{const{timestamp:y}=JSON.parse(p);if(Date.now()-y<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await _j()){n(!0),sessionStorage.setItem(Nc,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const y=localStorage.getItem($c);let x=!1;y?x=await u():x=await c(),x?(n(!0),sessionStorage.setItem(Nc,JSON.stringify({timestamp:Date.now()}))):o(!0)}catch{o(!0)}i(!1)},[]);w.useEffect(()=>{s.current||(s.current=!0,d())},[d]);const f=w.useCallback(()=>{d()},[d]);return l.jsx(Xx.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:a,retryAuth:f},children:e})},Rj=()=>{const e=w.useContext(Xx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ge.apply(this,arguments)};function wi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var re="-ms-",ka="-moz-",J="-webkit-",Zx="comm",Ol="rule",cp="decl",Nj="@import",Jx="@keyframes",$j="@layer",qx=Math.abs,up=String.fromCharCode,bd=Object.assign;function Bj(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function e1(e){return e.trim()}function nn(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Ss(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function bi(e,t,n){return e.slice(t,n)}function Gt(e){return e.length}function t1(e){return e.length}function ca(e,t){return t.push(e),e}function Fj(e,t){return e.map(t).join("")}function Vm(e,t){return e.filter(function(n){return!nn(n,t)})}var Rl=1,Si=1,n1=0,At=0,Te=0,Oi="";function Nl(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Rl,column:Si,length:o,return:"",siblings:s}}function jn(e,t){return bd(Nl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Or(e){for(;e.root;)e=jn(e.root,{children:[e]});ca(e,e.siblings)}function Vj(){return Te}function zj(){return Te=At>0?Me(Oi,--At):0,Si--,Te===10&&(Si=1,Rl--),Te}function Ft(){return Te=At<n1?Me(Oi,At++):0,Si++,Te===10&&(Si=1,Rl++),Te}function xr(){return Me(Oi,At)}function ks(){return At}function $l(e,t){return bi(Oi,e,t)}function Sd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wj(e){return Rl=Si=1,n1=Gt(Oi=e),At=0,[]}function Uj(e){return Oi="",e}function Fc(e){return e1($l(At-1,kd(e===91?e+2:e===40?e+1:e)))}function Hj(e){for(;(Te=xr())&&Te<33;)Ft();return Sd(e)>2||Sd(Te)>3?"":" "}function Yj(e,t){for(;--t&&Ft()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return $l(e,ks()+(t<6&&xr()==32&&Ft()==32))}function kd(e){for(;Ft();)switch(Te){case e:return At;case 34:case 39:e!==34&&e!==39&&kd(Te);break;case 40:e===41&&kd(e);break;case 92:Ft();break}return At}function Gj(e,t){for(;Ft()&&e+Te!==57;)if(e+Te===84&&xr()===47)break;return"/*"+$l(t,At-1)+"*"+up(e===47?e:Ft())}function Kj(e){for(;!Sd(xr());)Ft();return $l(e,At)}function Qj(e){return Uj(js("",null,null,null,[""],e=Wj(e),0,[0],e))}function js(e,t,n,r,i,a,o,s,c){for(var u=0,d=0,f=o,p=0,h=0,y=0,x=1,j=1,g=1,m=0,v="",S=i,k=a,T=r,C=v;j;)switch(y=m,m=Ft()){case 40:if(y!=108&&Me(C,f-1)==58){Ss(C+=U(Fc(m),"&","&\f"),"&\f",qx(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Fc(m);break;case 9:case 10:case 13:case 32:C+=Hj(y);break;case 92:C+=Yj(ks()-1,7);continue;case 47:switch(xr()){case 42:case 47:ca(Xj(Gj(Ft(),ks()),t,n,c),c);break;default:C+="/"}break;case 123*x:s[u++]=Gt(C)*g;case 125*x:case 59:case 0:switch(m){case 0:case 125:j=0;case 59+d:g==-1&&(C=U(C,/\f/g,"")),h>0&&Gt(C)-f&&ca(h>32?Wm(C+";",r,n,f-1,c):Wm(U(C," ","")+";",r,n,f-2,c),c);break;case 59:C+=";";default:if(ca(T=zm(C,t,n,u,d,i,s,v,S=[],k=[],f,a),a),m===123)if(d===0)js(C,t,T,T,S,a,f,s,k);else switch(p===99&&Me(C,3)===110?100:p){case 100:case 108:case 109:case 115:js(e,T,T,r&&ca(zm(e,T,T,0,0,i,s,v,i,S=[],f,k),k),i,k,f,s,r?S:k);break;default:js(C,T,T,T,[""],k,0,s,k)}}u=d=h=0,x=g=1,v=C="",f=o;break;case 58:f=1+Gt(C),h=y;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&zj()==125)continue}switch(C+=up(m),m*x){case 38:g=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(Gt(C)-1)*g,g=1;break;case 64:xr()===45&&(C+=Fc(Ft())),p=xr(),d=f=Gt(v=C+=Kj(ks())),m++;break;case 45:y===45&&Gt(C)==2&&(x=0)}}return a}function zm(e,t,n,r,i,a,o,s,c,u,d,f){for(var p=i-1,h=i===0?a:[""],y=t1(h),x=0,j=0,g=0;x<r;++x)for(var m=0,v=bi(e,p+1,p=qx(j=o[x])),S=e;m<y;++m)(S=e1(j>0?h[m]+" "+v:U(v,/&\f/g,h[m])))&&(c[g++]=S);return Nl(e,t,n,i===0?Ol:s,c,u,d,f)}function Xj(e,t,n,r){return Nl(e,t,n,Zx,up(Vj()),bi(e,2,-2),0,r)}function Wm(e,t,n,r,i){return Nl(e,t,n,cp,bi(e,0,r),bi(e,r+1,-1),r,i)}function r1(e,t,n){switch(Bj(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return ka+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+ka+e+re+e+e;case 5936:switch(Me(e,t+11)){case 114:return J+e+re+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+re+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+re+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+re+e+e;case 6165:return J+e+re+"flex-"+e+e;case 5187:return J+e+U(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return J+e+re+"flex-item-"+U(e,/flex-|-self/g,"")+(nn(e,/flex-|baseline/)?"":re+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return J+e+re+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+re+U(e,"shrink","negative")+e;case 5292:return J+e+re+U(e,"basis","preferred-size")+e;case 6060:return J+"box-"+U(e,"-grow","")+J+e+re+U(e,"grow","positive")+e;case 4554:return J+U(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!nn(e,/flex-|baseline/))return re+"grid-column-align"+bi(e,t)+e;break;case 2592:case 3360:return re+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nn(r.props,/grid-\w+-end/)})?~Ss(e+(n=n[t].value),"span",0)?e:re+U(e,"-start","")+e+re+"grid-row-span:"+(~Ss(n,"span",0)?nn(n,/\d+/):+nn(n,/\d+/)-+nn(e,/\d+/))+";":re+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nn(r.props,/grid-\w+-start/)})?e:re+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+ka+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ss(e,"stretch",0)?r1(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,c,u){return re+i+":"+a+u+(o?re+i+"-span:"+(s?c:+c-+a)+u:"")+e});case 4949:if(Me(e,t+6)===121)return U(e,":",":"+J)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Me(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+re+"$2box$3")+e;case 100:return U(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function il(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Zj(e,t,n,r){switch(e.type){case $j:if(e.children.length)break;case Nj:case cp:return e.return=e.return||e.value;case Zx:return"";case Jx:return e.return=e.value+"{"+il(e.children,r)+"}";case Ol:if(!Gt(e.value=e.props.join(",")))return""}return Gt(n=il(e.children,r))?e.return=e.value+"{"+n+"}":""}function Jj(e){var t=t1(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function qj(e){return function(t){t.root||(t=t.return)&&e(t)}}function eC(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case cp:e.return=r1(e.value,e.length,n);return;case Jx:return il([jn(e,{value:U(e.value,"@","@"+J)})],r);case Ol:if(e.length)return Fj(n=e.props,function(i){switch(nn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Or(jn(e,{props:[U(i,/:(read-\w+)/,":"+ka+"$1")]})),Or(jn(e,{props:[i]})),bd(e,{props:Vm(n,r)});break;case"::placeholder":Or(jn(e,{props:[U(i,/:(plac\w+)/,":"+J+"input-$1")]})),Or(jn(e,{props:[U(i,/:(plac\w+)/,":"+ka+"$1")]})),Or(jn(e,{props:[U(i,/:(plac\w+)/,re+"input-$1")]})),Or(jn(e,{props:[i]})),bd(e,{props:Vm(n,r)});break}return""})}}var tC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},ki=typeof process<"u"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",i1="active",a1="data-styled-version",Bl="6.1.19",dp=`/*!sc*/
`,al=typeof window<"u"&&typeof document<"u",nC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY),rC={},Fl=Object.freeze([]),ji=Object.freeze({});function o1(e,t,n){return n===void 0&&(n=ji),e.theme!==n.theme&&e.theme||t||n.theme}var s1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),iC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aC=/(^-|-$)/g;function Um(e){return e.replace(iC,"-").replace(aC,"")}var oC=/(a)(d)/gi,No=52,Hm=function(e){return String.fromCharCode(e+(e>25?39:97))};function jd(e){var t,n="";for(t=Math.abs(e);t>No;t=t/No|0)n=Hm(t%No)+n;return(Hm(t%No)+n).replace(oC,"$1-$2")}var Vc,l1=5381,Xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},c1=function(e){return Xr(l1,e)};function fp(e){return jd(c1(e)>>>0)}function sC(e){return e.displayName||e.name||"Component"}function zc(e){return typeof e=="string"&&!0}var u1=typeof Symbol=="function"&&Symbol.for,d1=u1?Symbol.for("react.memo"):60115,lC=u1?Symbol.for("react.forward_ref"):60112,cC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dC=((Vc={})[lC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vc[d1]=f1,Vc);function Ym(e){return("type"in(t=e)&&t.type.$$typeof)===d1?f1:"$$typeof"in e?dC[e.$$typeof]:cC;var t}var fC=Object.defineProperty,pC=Object.getOwnPropertyNames,Gm=Object.getOwnPropertySymbols,hC=Object.getOwnPropertyDescriptor,mC=Object.getPrototypeOf,Km=Object.prototype;function p1(e,t,n){if(typeof t!="string"){if(Km){var r=mC(t);r&&r!==Km&&p1(e,r,n)}var i=pC(t);Gm&&(i=i.concat(Gm(t)));for(var a=Ym(e),o=Ym(t),s=0;s<i.length;++s){var c=i[s];if(!(c in uC||n&&n[c]||o&&c in o||a&&c in a)){var u=hC(t,c);try{fC(e,c,u)}catch{}}}}return e}function Ci(e){return typeof e=="function"}function pp(e){return typeof e=="object"&&"styledComponentId"in e}function pr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ol(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ga(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cd(e,t,n){if(n===void 0&&(n=!1),!n&&!Ga(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cd(e[r],t[r]);else if(Ga(t))for(var r in t)e[r]=Cd(e[r],t[r]);return e}function hp(e,t){Object.defineProperty(e,"toString",{value:t})}function oo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw oo(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(dp);return n},e}(),Cs=new Map,sl=new Map,Ts=1,$o=function(e){if(Cs.has(e))return Cs.get(e);for(;sl.has(Ts);)Ts++;var t=Ts++;return Cs.set(e,t),sl.set(t,e),t},vC=function(e,t){Ts=t+1,Cs.set(e,t),sl.set(t,e)},yC="style[".concat(ki,"][").concat(a1,'="').concat(Bl,'"]'),xC=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wC=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},bC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(dp),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var c=s.match(xC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(vC(d,u),wC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Qm=function(e){for(var t=document.querySelectorAll(yC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ki)!==i1&&(bC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function SC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var h1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(ki,"]")));return c[c.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(ki,i1),r.setAttribute(a1,Bl);var o=SC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},kC=function(){function e(t){this.element=h1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw oo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jC=function(){function e(t){this.element=h1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),CC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xm=al,TC={isServer:!al,useCSSOMInjection:!nC},ll=function(){function e(t,n,r){t===void 0&&(t=ji),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},TC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&al&&Xm&&(Xm=!1,Qm(this)),hp(this,function(){return function(a){for(var o=a.getTag(),s=o.length,c="",u=function(f){var p=function(g){return sl.get(g)}(f);if(p===void 0)return"continue";var h=a.names.get(p),y=o.getGroup(f);if(h===void 0||!h.size||y.length===0)return"continue";var x="".concat(ki,".g").concat(f,'[id="').concat(p,'"]'),j="";h!==void 0&&h.forEach(function(g){g.length>0&&(j+="".concat(g,","))}),c+="".concat(y).concat(x,'{content:"').concat(j,'"}').concat(dp)},d=0;d<s;d++)u(d);return c}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&al&&Qm(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new CC(i):r?new kC(i):new jC(i)}(this.options),new gC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),PC=/&/g,DC=/^\s*\/\/.*$/gm;function m1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=m1(n.children,t)),n})}function EC(e){var t,n,r,i=ji,a=i.options,o=a===void 0?ji:a,s=i.plugins,c=s===void 0?Fl:s,u=function(p,h,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Ol&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(PC,n).replace(r,u))}),o.prefix&&d.push(eC),d.push(Zj);var f=function(p,h,y,x){h===void 0&&(h=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var j=p.replace(DC,""),g=Qj(y||h?"".concat(y," ").concat(h," { ").concat(j," }"):j);o.namespace&&(g=m1(g,o.namespace));var m=[];return il(g,Jj(d.concat(qj(function(v){return m.push(v)})))),m};return f.hash=c.length?c.reduce(function(p,h){return h.name||oo(15),Xr(p,h.name)},l1).toString():"",f}var AC=new ll,Td=EC(),g1=Qt.createContext({shouldForwardProp:void 0,styleSheet:AC,stylis:Td});g1.Consumer;Qt.createContext(void 0);function Pd(){return w.useContext(g1)}var v1=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Td);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,hp(this,function(){throw oo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Td),this.name+t.hash},e}(),LC=function(e){return e>="A"&&e<="Z"};function Zm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;LC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var y1=function(e){return e==null||e===!1||e===""},x1=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!y1(a)&&(Array.isArray(a)&&a.isCss||Ci(a)?r.push("".concat(Zm(i),":"),a,";"):Ga(a)?r.push.apply(r,wi(wi(["".concat(i," {")],x1(a),!1),["}"],!1)):r.push("".concat(Zm(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in tC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zn(e,t,n,r){if(y1(e))return[];if(pp(e))return[".".concat(e.styledComponentId)];if(Ci(e)){if(!Ci(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return zn(i,t,n,r)}var a;return e instanceof v1?n?(e.inject(n,r),[e.getName(r)]):[e]:Ga(e)?x1(e):Array.isArray(e)?Array.prototype.concat.apply(Fl,e.map(function(o){return zn(o,t,n,r)})):[e.toString()]}function w1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ci(n)&&!pp(n))return!1}return!0}var _C=c1(Bl),IC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&w1(t),this.componentId=n,this.baseHash=Xr(_C,n),this.baseStyle=r,ll.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pr(i,this.staticRulesId);else{var a=ol(zn(this.rules,t,n,r)),o=jd(Xr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=pr(i,o),this.staticRulesId=o}else{for(var c=Xr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=ol(zn(f,t,n,r));c=Xr(c,p+d),u+=p}}if(u){var h=jd(c>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=pr(i,h)}}return i},e}(),mp=Qt.createContext(void 0);mp.Consumer;var Wc={};function MC(e,t,n){var r=pp(e),i=e,a=!zc(e),o=t.attrs,s=o===void 0?Fl:o,c=t.componentId,u=c===void 0?function(S,k){var T=typeof S!="string"?"sc":Um(S);Wc[T]=(Wc[T]||0)+1;var C="".concat(T,"-").concat(fp(Bl+T+Wc[T]));return k?"".concat(k,"-").concat(C):C}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(S){return zc(S)?"styled.".concat(S):"Styled(".concat(sC(S),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Um(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;y=function(S,k){return x(S,k)&&j(S,k)}}else y=x}var g=new IC(n,p,r?i.componentStyle:void 0);function m(S,k){return function(T,C,P){var L=T.attrs,M=T.componentStyle,_=T.defaultProps,$=T.foldedComponentIds,W=T.styledComponentId,H=T.target,D=Qt.useContext(mp),B=Pd(),z=T.shouldForwardProp||B.shouldForwardProp,E=o1(C,D,_)||ji,O=function(G,le,Re){for(var Xe,Ee=Ge(Ge({},le),{className:void 0,theme:Re}),zt=0;zt<G.length;zt+=1){var wt=Ci(Xe=G[zt])?Xe(Ee):Xe;for(var Ne in wt)Ee[Ne]=Ne==="className"?pr(Ee[Ne],wt[Ne]):Ne==="style"?Ge(Ge({},Ee[Ne]),wt[Ne]):wt[Ne]}return le.className&&(Ee.className=pr(Ee.className,le.className)),Ee}(L,C,E),R=O.as||H,F={};for(var Y in O)O[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&O.theme===E||(Y==="forwardedAs"?F.as=O.forwardedAs:z&&!z(Y,R)||(F[Y]=O[Y]));var oe=function(G,le){var Re=Pd(),Xe=G.generateAndInjectStyles(le,Re.styleSheet,Re.stylis);return Xe}(M,O),se=pr($,W);return oe&&(se+=" "+oe),O.className&&(se+=" "+O.className),F[zc(R)&&!s1.has(R)?"class":"className"]=se,P&&(F.ref=P),w.createElement(R,F)}(v,S,k)}m.displayName=f;var v=Qt.forwardRef(m);return v.attrs=h,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?pr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(k){for(var T=[],C=1;C<arguments.length;C++)T[C-1]=arguments[C];for(var P=0,L=T;P<L.length;P++)Cd(k,L[P],!0);return k}({},i.defaultProps,S):S}}),hp(v,function(){return".".concat(v.styledComponentId)}),a&&p1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Jm(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qm=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ci(e)||Ga(e))return qm(zn(Jm(Fl,wi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?zn(r):qm(zn(Jm(r,t)))}function Dd(e,t,n){if(n===void 0&&(n=ji),!t)throw oo(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,hr.apply(void 0,wi([i],a,!1)))};return r.attrs=function(i){return Dd(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Dd(e,t,Ge(Ge({},n),i))},r}var b1=function(e){return Dd(MC,e)},b=b1;s1.forEach(function(e){b[e]=b1(e)});var OC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=w1(t),ll.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(ol(zn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ll.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function RC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=hr.apply(void 0,wi([e],t,!1)),i="sc-global-".concat(fp(JSON.stringify(r))),a=new OC(r,i),o=function(c){var u=Pd(),d=Qt.useContext(mp),f=Qt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(f,c,u.styleSheet,d,u.stylis),Qt.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,c,u.styleSheet,d,u.stylis),function(){return a.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,f,p){if(a.isStatic)a.renderStyles(c,rC,d,p);else{var h=Ge(Ge({},u),{theme:o1(u,f,o.defaultProps)});a.renderStyles(c,h,d,p)}}return Qt.memo(o)}function Ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ol(hr.apply(void 0,wi([e],t,!1))),i=fp(r);return new v1(i,r)}const NC=RC`
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
`,$C=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,BC=b.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,FC=()=>{const{isDark:e}=lp();return l.jsx($C,{children:l.jsx(BC,{$isDark:e})})},gp=w.createContext({});function vp(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vl=w.createContext(null),yp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class VC extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function zC({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=w.useContext(yp);return w.useInsertionEffect(()=>{const{width:o,height:s,top:c,left:u}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return a&&(d.nonce=a),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),l.jsx(VC,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const WC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=vp(UC),c=w.useId(),u=w.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),d=w.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),u]:[n,u]);return w.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),w.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=l.jsx(zC,{isPresent:n,children:e})),l.jsx(Vl.Provider,{value:d,children:e})};function UC(){return new Map}function S1(e=!0){const t=w.useContext(Vl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=w.useId();w.useEffect(()=>{e&&i(a)},[e]);const o=w.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}const Bo=e=>e.key||"";function eg(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const xp=typeof window<"u",k1=xp?w.useLayoutEffect:w.useEffect,De=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:o=!1})=>{const[s,c]=S1(o),u=w.useMemo(()=>eg(e),[e]),d=o&&!s?[]:u.map(Bo),f=w.useRef(!0),p=w.useRef(u),h=vp(()=>new Map),[y,x]=w.useState(u),[j,g]=w.useState(u);k1(()=>{f.current=!1,p.current=u;for(let S=0;S<j.length;S++){const k=Bo(j[S]);d.includes(k)?h.delete(k):h.get(k)!==!0&&h.set(k,!1)}},[j,d.length,d.join("-")]);const m=[];if(u!==y){let S=[...u];for(let k=0;k<j.length;k++){const T=j[k],C=Bo(T);d.includes(C)||(S.splice(k,0,T),m.push(T))}a==="wait"&&m.length&&(S=m),g(eg(S)),x(u);return}const{forceRender:v}=w.useContext(gp);return l.jsx(l.Fragment,{children:j.map(S=>{const k=Bo(S),T=o&&!s?!1:u===j||d.includes(k),C=()=>{if(h.has(k))h.set(k,!0);else return;let P=!0;h.forEach(L=>{L||(P=!1)}),P&&(v==null||v(),g(p.current),o&&(c==null||c()),r&&r())};return l.jsx(WC,{isPresent:T,initial:!f.current||n?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:i,mode:a,onExitComplete:T?void 0:C,children:S},k)})})},mt=e=>e;let j1=mt;function wp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ti=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ln=e=>e*1e3,cn=e=>e/1e3,HC={useManualTiming:!1};function YC(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(u){a.has(u)&&(c.schedule(u),e()),u(o)}const c={schedule:(u,d=!1,f=!1)=>{const h=f&&r?t:n;return d&&a.add(u),h.has(u)||h.add(u),u},cancel:u=>{n.delete(u),a.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Fo=["read","resolveKeyframes","update","preRender","render","postRender"],GC=40;function C1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Fo.reduce((g,m)=>(g[m]=YC(a),g),{}),{read:s,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=o,h=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,GC),1),i.timestamp=g,i.isProcessing=!0,s.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},y=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Fo.reduce((g,m)=>{const v=o[m];return g[m]=(S,k=!1,T=!1)=>(n||y(),v.schedule(S,k,T)),g},{}),cancel:g=>{for(let m=0;m<Fo.length;m++)o[Fo[m]].cancel(g)},state:i,steps:o}}const{schedule:ae,cancel:Yn,state:Be,steps:Uc}=C1(typeof requestAnimationFrame<"u"?requestAnimationFrame:mt,!0),T1=w.createContext({strict:!1}),tg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pi={};for(const e in tg)Pi[e]={isEnabled:t=>tg[e].some(n=>!!t[n])};function KC(e){for(const t in e)Pi[t]={...Pi[t],...e[t]}}const QC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function cl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||QC.has(e)}let P1=e=>!cl(e);function XC(e){e&&(P1=t=>t.startsWith("on")?!cl(t):e(t))}try{XC(require("@emotion/is-prop-valid").default)}catch{}function ZC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(P1(i)||n===!0&&cl(i)||!t&&!cl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function JC(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const zl=w.createContext({});function Ka(e){return typeof e=="string"||Array.isArray(e)}function Wl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const bp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sp=["initial",...bp];function Ul(e){return Wl(e.animate)||Sp.some(t=>Ka(e[t]))}function D1(e){return!!(Ul(e)||e.variants)}function qC(e,t){if(Ul(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ka(n)?n:void 0,animate:Ka(r)?r:void 0}}return e.inherit!==!1?t:{}}function eT(e){const{initial:t,animate:n}=qC(e,w.useContext(zl));return w.useMemo(()=>({initial:t,animate:n}),[ng(t),ng(n)])}function ng(e){return Array.isArray(e)?e.join(" "):e}const tT=Symbol.for("motionComponentSymbol");function Zr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function nT(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Zr(n)&&(n.current=r))},[t])}const kp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),rT="framerAppearId",E1="data-"+kp(rT),{schedule:jp}=C1(queueMicrotask,!1),A1=w.createContext({});function iT(e,t,n,r,i){var a,o;const{visualElement:s}=w.useContext(zl),c=w.useContext(T1),u=w.useContext(Vl),d=w.useContext(yp).reducedMotion,f=w.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,h=w.useContext(A1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&aT(f.current,n,i,h);const y=w.useRef(!1);w.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const x=n[E1],j=w.useRef(!!x&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return k1(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),jp.render(p.render),j.current&&p.animationState&&p.animationState.animateChanges())}),w.useEffect(()=>{p&&(!j.current&&p.animationState&&p.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,x)}),j.current=!1))}),p}function aT(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:L1(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Zr(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function L1(e){if(e)return e.options.allowProjection!==!1?e.projection:L1(e.parent)}function oT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var a,o;e&&KC(e);function s(u,d){let f;const p={...w.useContext(yp),...u,layoutId:sT(u)},{isStatic:h}=p,y=eT(u),x=r(u,h);if(!h&&xp){lT();const j=cT(p);f=j.MeasureLayout,y.visualElement=iT(i,x,p,t,j.ProjectionNode)}return l.jsxs(zl.Provider,{value:y,children:[f&&y.visualElement?l.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,u,nT(x,y.visualElement,d),x,h,y.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${(o=(a=i.displayName)!==null&&a!==void 0?a:i.name)!==null&&o!==void 0?o:""})`}`;const c=w.forwardRef(s);return c[tT]=i,c}function sT({layoutId:e}){const t=w.useContext(gp).id;return t&&e!==void 0?t+"-"+e:e}function lT(e,t){w.useContext(T1).strict}function cT(e){const{drag:t,layout:n}=Pi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const uT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cp(e){return typeof e!="string"||e.includes("-")?!1:!!(uT.indexOf(e)>-1||/[A-Z]/u.test(e))}function rg(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Tp(e,t,n,r){if(typeof t=="function"){const[i,a]=rg(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=rg(r);t=t(n!==void 0?n:e.custom,i,a)}return t}const Ed=e=>Array.isArray(e),dT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),fT=e=>Ed(e)?e[e.length-1]||0:e,Ke=e=>!!(e&&e.getVelocity);function Ps(e){const t=Ke(e)?e.get():e;return dT(t)?t.toValue():t}function pT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,a){const o={latestValues:hT(r,i,a,e),renderState:t()};return n&&(o.onMount=s=>n({props:r,current:s,...o}),o.onUpdate=s=>n(s)),o}const _1=e=>(t,n)=>{const r=w.useContext(zl),i=w.useContext(Vl),a=()=>pT(e,t,r,i);return n?a():vp(a)};function hT(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=Ps(a[p]);let{initial:o,animate:s}=e;const c=Ul(e),u=D1(e);t&&u&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?s:o;if(f&&typeof f!="boolean"&&!Wl(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const y=Tp(e,p[h]);if(y){const{transitionEnd:x,transition:j,...g}=y;for(const m in g){let v=g[m];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[m]=v)}for(const m in x)i[m]=x[m]}}}return i}const Ni=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Lr=new Set(Ni),I1=e=>t=>typeof t=="string"&&t.startsWith(e),M1=I1("--"),mT=I1("var(--"),Pp=e=>mT(e)?gT.test(e.split("/*")[0].trim()):!1,gT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,O1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,hn=(e,t,n)=>n>t?t:n<e?e:n,$i={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Qa={...$i,transform:e=>hn(0,1,e)},Vo={...$i,default:1},so=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Cn=so("deg"),Jt=so("%"),V=so("px"),vT=so("vh"),yT=so("vw"),ig={...Jt,parse:e=>Jt.parse(e)/100,transform:e=>Jt.transform(e*100)},xT={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,backgroundPositionX:V,backgroundPositionY:V},wT={rotate:Cn,rotateX:Cn,rotateY:Cn,rotateZ:Cn,scale:Vo,scaleX:Vo,scaleY:Vo,scaleZ:Vo,skew:Cn,skewX:Cn,skewY:Cn,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:Qa,originX:ig,originY:ig,originZ:V},ag={...$i,transform:Math.round},Dp={...xT,...wT,zIndex:ag,size:V,fillOpacity:Qa,strokeOpacity:Qa,numOctaves:ag},bT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ST=Ni.length;function kT(e,t,n){let r="",i=!0;for(let a=0;a<ST;a++){const o=Ni[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s=="number"?c=s===(o.startsWith("scale")?1:0):c=parseFloat(s)===0,!c||n){const u=O1(s,Dp[o]);if(!c){i=!1;const d=bT[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Ep(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const c in t){const u=t[c];if(Lr.has(c)){o=!0;continue}else if(M1(c)){i[c]=u;continue}else{const d=O1(u,Dp[c]);c.startsWith("origin")?(s=!0,a[c]=d):r[c]=d}}if(t.transform||(o||n?r.transform=kT(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:c="50%",originY:u="50%",originZ:d=0}=a;r.transformOrigin=`${c} ${u} ${d}`}}const jT={offset:"stroke-dashoffset",array:"stroke-dasharray"},CT={offset:"strokeDashoffset",array:"strokeDasharray"};function TT(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?jT:CT;e[a.offset]=V.transform(-r);const o=V.transform(t),s=V.transform(n);e[a.array]=`${o} ${s}`}function og(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function PT(e,t,n){const r=og(t,e.x,e.width),i=og(n,e.y,e.height);return`${r} ${i}`}function Ap(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:c=0,...u},d,f){if(Ep(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:h,dimensions:y}=e;p.transform&&(y&&(h.transform=p.transform),delete p.transform),y&&(i!==void 0||a!==void 0||h.transform)&&(h.transformOrigin=PT(y,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&TT(p,o,s,c,!1)}const Lp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),R1=()=>({...Lp(),attrs:{}}),_p=e=>typeof e=="string"&&e.toLowerCase()==="svg";function N1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const $1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function B1(e,t,n,r){N1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute($1.has(i)?i:kp(i),t.attrs[i])}const ul={};function DT(e){Object.assign(ul,e)}function F1(e,{layout:t,layoutId:n}){return Lr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ul[e]||e==="opacity")}function Ip(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(Ke(i[o])||t.style&&Ke(t.style[o])||F1(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function V1(e,t,n){const r=Ip(e,t,n);for(const i in e)if(Ke(e[i])||Ke(t[i])){const a=Ni.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function ET(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const sg=["x","y","width","height","cx","cy","r"],AT={useVisualState:_1({scrapeMotionValuesFromProps:V1,createRenderState:R1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let a=!!e.drag;if(!a){for(const s in i)if(Lr.has(s)){a=!0;break}}if(!a)return;let o=!t;if(t)for(let s=0;s<sg.length;s++){const c=sg[s];e[c]!==t[c]&&(o=!0)}o&&ae.read(()=>{ET(n,r),ae.render(()=>{Ap(r,i,_p(n.tagName),e.transformTemplate),B1(n,r)})})}})},LT={useVisualState:_1({scrapeMotionValuesFromProps:Ip,createRenderState:Lp})};function z1(e,t,n){for(const r in t)!Ke(t[r])&&!F1(r,n)&&(e[r]=t[r])}function _T({transformTemplate:e},t){return w.useMemo(()=>{const n=Lp();return Ep(n,t,e),Object.assign({},n.vars,n.style)},[t])}function IT(e,t){const n=e.style||{},r={};return z1(r,n,e),Object.assign(r,_T(e,t)),r}function MT(e,t){const n={},r=IT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function OT(e,t,n,r){const i=w.useMemo(()=>{const a=R1();return Ap(a,t,_p(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};z1(a,e.style,e),i.style={...a,...i.style}}return i}function RT(e=!1){return(n,r,i,{latestValues:a},o)=>{const c=(Cp(n)?OT:MT)(r,a,o,n),u=ZC(r,typeof n=="string",e),d=n!==w.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=w.useMemo(()=>Ke(f)?f.get():f,[f]);return w.createElement(n,{...d,children:p})}}function NT(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Cp(r)?AT:LT,preloadedFeatures:e,useRender:RT(i),createVisualElement:t,Component:r};return oT(o)}}function W1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Hl(e,t,n){const r=e.getProps();return Tp(r,t,n!==void 0?n:r.custom,e)}const $T=wp(()=>window.ScrollTimeline!==void 0);class BT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if($T()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class FT extends BT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Mp(e,t){return e?e[t]||e.default||e:void 0}const Ad=2e4;function U1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ad;)t+=n,r=e.next(t);return t>=Ad?1/0:t}function Op(e){return typeof e=="function"}function lg(e,t){e.timeline=t,e.onfinish=null}const Rp=e=>Array.isArray(e)&&typeof e[0]=="number",VT={linearEasing:void 0};function zT(e,t){const n=wp(e);return()=>{var r;return(r=VT[t])!==null&&r!==void 0?r:n()}}const dl=zT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),H1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(Ti(0,i-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function Y1(e){return!!(typeof e=="function"&&dl()||!e||typeof e=="string"&&(e in Ld||dl())||Rp(e)||Array.isArray(e)&&e.every(Y1))}const ua=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ld={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ua([0,.65,.55,1]),circOut:ua([.55,0,1,.45]),backIn:ua([.31,.01,.66,-.59]),backOut:ua([.33,1.53,.69,.99])};function G1(e,t){if(e)return typeof e=="function"&&dl()?H1(e,t):Rp(e)?ua(e):Array.isArray(e)?e.map(n=>G1(n,t)||Ld.easeOut):Ld[e]}const Mt={x:!1,y:!1};function K1(){return Mt.x||Mt.y}function WT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const a=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}function Q1(e,t){const n=WT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function cg(e){return t=>{t.pointerType==="touch"||K1()||e(t)}}function UT(e,t,n={}){const[r,i,a]=Q1(e,n),o=cg(s=>{const{target:c}=s,u=t(s);if(typeof u!="function"||!c)return;const d=cg(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(s=>{s.addEventListener("pointerenter",o,i)}),a}const X1=(e,t)=>t?e===t?!0:X1(e,t.parentElement):!1,Np=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,HT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function YT(e){return HT.has(e.tagName)||e.tabIndex!==-1}const da=new WeakSet;function ug(e){return t=>{t.key==="Enter"&&e(t)}}function Hc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const GT=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=ug(()=>{if(da.has(n))return;Hc(n,"down");const i=ug(()=>{Hc(n,"up")}),a=()=>Hc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function dg(e){return Np(e)&&!K1()}function KT(e,t,n={}){const[r,i,a]=Q1(e,n),o=s=>{const c=s.currentTarget;if(!dg(s)||da.has(c))return;da.add(c);const u=t(s),d=(h,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!dg(h)||!da.has(c))&&(da.delete(c),typeof u=="function"&&u(h,{success:y}))},f=h=>{d(h,n.useGlobalTarget||X1(c,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(s=>{!YT(s)&&s.getAttribute("tabindex")===null&&(s.tabIndex=0),(n.useGlobalTarget?window:s).addEventListener("pointerdown",o,i),s.addEventListener("focus",u=>GT(u,i),i)}),a}function QT(e){return e==="x"||e==="y"?Mt[e]?null:(Mt[e]=!0,()=>{Mt[e]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const Z1=new Set(["width","height","top","left","right","bottom",...Ni]);let Ds;function XT(){Ds=void 0}const qt={now:()=>(Ds===void 0&&qt.set(Be.isProcessing||HC.useManualTiming?Be.timestamp:performance.now()),Ds),set:e=>{Ds=e,queueMicrotask(XT)}};function $p(e,t){e.indexOf(t)===-1&&e.push(t)}function Bp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Fp{constructor(){this.subscriptions=[]}add(t){return $p(this.subscriptions,t),()=>Bp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function J1(e,t){return t?e*(1e3/t):0}const fg=30,ZT=e=>!isNaN(parseFloat(e));class JT{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=qt.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=qt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=ZT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Fp);const r=this.events[t].add(n);return t==="change"?()=>{r(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=qt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>fg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,fg);return J1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xa(e,t){return new JT(e,t)}function qT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Xa(n))}function eP(e,t){const n=Hl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=fT(a[o]);qT(e,o,s)}}function tP(e){return!!(Ke(e)&&e.add)}function _d(e,t){const n=e.getValue("willChange");if(tP(n))return n.add(t)}function q1(e){return e.props[E1]}const ew=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,nP=1e-7,rP=12;function iP(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=ew(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>nP&&++s<rP);return o}function lo(e,t,n,r){if(e===t&&n===r)return mt;const i=a=>iP(a,0,1,e,n);return a=>a===0||a===1?a:ew(i(a),t,r)}const tw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nw=e=>t=>1-e(1-t),rw=lo(.33,1.53,.69,.99),Vp=nw(rw),iw=tw(Vp),aw=e=>(e*=2)<1?.5*Vp(e):.5*(2-Math.pow(2,-10*(e-1))),zp=e=>1-Math.sin(Math.acos(e)),ow=nw(zp),sw=tw(zp),lw=e=>/^0[^.\s]+$/u.test(e);function aP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||lw(e):!0}const ja=e=>Math.round(e*1e5)/1e5,Wp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function oP(e){return e==null}const sP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Up=(e,t)=>n=>!!(typeof n=="string"&&sP.test(n)&&n.startsWith(e)||t&&!oP(n)&&Object.prototype.hasOwnProperty.call(n,t)),cw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(Wp);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},lP=e=>hn(0,255,e),Yc={...$i,transform:e=>Math.round(lP(e))},mr={test:Up("rgb","red"),parse:cw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Yc.transform(e)+", "+Yc.transform(t)+", "+Yc.transform(n)+", "+ja(Qa.transform(r))+")"};function cP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Id={test:Up("#"),parse:cP,transform:mr.transform},Jr={test:Up("hsl","hue"),parse:cw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Jt.transform(ja(t))+", "+Jt.transform(ja(n))+", "+ja(Qa.transform(r))+")"},He={test:e=>mr.test(e)||Id.test(e)||Jr.test(e),parse:e=>mr.test(e)?mr.parse(e):Jr.test(e)?Jr.parse(e):Id.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?mr.transform(e):Jr.transform(e)},uP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Wp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(uP))===null||n===void 0?void 0:n.length)||0)>0}const uw="number",dw="color",fP="var",pP="var(",pg="${}",hP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Za(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(hP,c=>(He.test(c)?(r.color.push(a),i.push(dw),n.push(He.parse(c))):c.startsWith(pP)?(r.var.push(a),i.push(fP),n.push(c)):(r.number.push(a),i.push(uw),n.push(parseFloat(c))),++a,pg)).split(pg);return{values:n,split:s,indexes:r,types:i}}function fw(e){return Za(e).values}function pw(e){const{split:t,types:n}=Za(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===uw?a+=ja(i[o]):s===dw?a+=He.transform(i[o]):a+=i[o]}return a}}const mP=e=>typeof e=="number"?0:e;function gP(e){const t=fw(e);return pw(e)(t.map(mP))}const Gn={test:dP,parse:fw,createTransformer:pw,getAnimatableNone:gP},vP=new Set(["brightness","contrast","saturate","opacity"]);function yP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Wp)||[];if(!r)return e;const i=n.replace(r,"");let a=vP.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const xP=/\b([a-z-]*)\(.*?\)/gu,Md={...Gn,getAnimatableNone:e=>{const t=e.match(xP);return t?t.map(yP).join(" "):e}},wP={...Dp,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Md,WebkitFilter:Md},Hp=e=>wP[e];function hw(e,t){let n=Hp(e);return n!==Md&&(n=Gn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bP=new Set(["auto","none","0"]);function SP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!bP.has(a)&&Za(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=hw(n,i)}const hg=e=>e===$i||e===V,mg=(e,t)=>parseFloat(e.split(", ")[t]),gg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return mg(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?mg(a[1],e):0}},kP=new Set(["x","y","z"]),jP=Ni.filter(e=>!kP.has(e));function CP(e){const t=[];return jP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Di={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:gg(4,13),y:gg(5,14)};Di.translateX=Di.x;Di.translateY=Di.y;const wr=new Set;let Od=!1,Rd=!1;function mw(){if(Rd){const e=Array.from(wr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=CP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Rd=!1,Od=!1,wr.forEach(e=>e.complete()),wr.clear()}function gw(){wr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Rd=!0)})}function TP(){gw(),mw()}class Yp{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(wr.add(this),Od||(Od=!0,ae.read(gw),ae.resolveKeyframes(mw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const c=r.readValue(n,s);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),wr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,wr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),PP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function DP(e){const t=PP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function yw(e,t,n=1){const[r,i]=DP(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return vw(o)?parseFloat(o):o}return Pp(i)?yw(i,t,n+1):i}const xw=e=>t=>t.test(e),EP={test:e=>e==="auto",parse:e=>e},ww=[$i,V,Jt,Cn,yT,vT,EP],vg=e=>ww.find(xw(e));class bw extends Yp{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Pp(u))){const d=yw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Z1.has(r)||t.length!==2)return;const[i,a]=t,o=vg(i),s=vg(a);if(o!==s)if(hg(o)&&hg(s))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)aP(t[i])&&r.push(i);r.length&&SP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Di[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Di[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const yg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gn.test(e)||e==="0")&&!e.startsWith("url("));function AP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function LP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=yg(i,t),s=yg(a,t);return!o||!s?!1:AP(e)||(n==="spring"||Op(n))&&r}const _P=e=>e!==null;function Yl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(_P),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const IP=40;class Sw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=qt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>IP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&TP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=qt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:c,isGenerator:u}=this.options;if(!u&&!LP(t,r,i,a))if(o)this.options.duration=0;else{c&&c(Yl(t,this.options,n)),s&&s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ge=(e,t,n)=>e+(t-e)*n;function Gc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function MP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=Gc(c,s,e+1/3),a=Gc(c,s,e),o=Gc(c,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function fl(e,t){return n=>n>0?t:e}const Kc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},OP=[Id,mr,Jr],RP=e=>OP.find(t=>t.test(e));function xg(e){const t=RP(e);if(!t)return!1;let n=t.parse(e);return t===Jr&&(n=MP(n)),n}const wg=(e,t)=>{const n=xg(e),r=xg(t);if(!n||!r)return fl(e,t);const i={...n};return a=>(i.red=Kc(n.red,r.red,a),i.green=Kc(n.green,r.green,a),i.blue=Kc(n.blue,r.blue,a),i.alpha=ge(n.alpha,r.alpha,a),mr.transform(i))},NP=(e,t)=>n=>t(e(n)),co=(...e)=>e.reduce(NP),Nd=new Set(["none","hidden"]);function $P(e,t){return Nd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function BP(e,t){return n=>ge(e,t,n)}function Gp(e){return typeof e=="number"?BP:typeof e=="string"?Pp(e)?fl:He.test(e)?wg:zP:Array.isArray(e)?kw:typeof e=="object"?He.test(e)?wg:FP:fl}function kw(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>Gp(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function FP(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Gp(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function VP(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],c=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=c,i[o]++}return r}const zP=(e,t)=>{const n=Gn.createTransformer(t),r=Za(e),i=Za(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nd.has(e)&&!i.values.length||Nd.has(t)&&!r.values.length?$P(e,t):co(kw(VP(r,i),i.values),n):fl(e,t)};function jw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ge(e,t,n):Gp(e)(e,t)}const WP=5;function Cw(e,t,n){const r=Math.max(t-WP,0);return J1(n-e(r),t-r)}const we={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Qc=.001;function UP({duration:e=we.duration,bounce:t=we.bounce,velocity:n=we.velocity,mass:r=we.mass}){let i,a,o=1-t;o=hn(we.minDamping,we.maxDamping,o),e=hn(we.minDuration,we.maxDuration,cn(e)),o<1?(i=u=>{const d=u*o,f=d*e,p=d-n,h=$d(u,o),y=Math.exp(-f);return Qc-p/h*y},a=u=>{const f=u*o*e,p=f*n+n,h=Math.pow(o,2)*Math.pow(u,2)*e,y=Math.exp(-f),x=$d(Math.pow(u,2),o);return(-i(u)+Qc>0?-1:1)*((p-h)*y)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Qc+d*f},a=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const s=5/e,c=YP(i,a,s);if(e=ln(e),isNaN(c))return{stiffness:we.stiffness,damping:we.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const HP=12;function YP(e,t,n){let r=n;for(let i=1;i<HP;i++)r=r-e(r)/t(r);return r}function $d(e,t){return e*Math.sqrt(1-t*t)}const GP=["duration","bounce"],KP=["stiffness","damping","mass"];function bg(e,t){return t.some(n=>e[n]!==void 0)}function QP(e){let t={velocity:we.velocity,stiffness:we.stiffness,damping:we.damping,mass:we.mass,isResolvedFromDuration:!1,...e};if(!bg(e,KP)&&bg(e,GP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*hn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:we.mass,stiffness:i,damping:a}}else{const n=UP(e);t={...t,...n,mass:we.mass},t.isResolvedFromDuration=!0}return t}function Tw(e=we.visualDuration,t=we.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=QP({...n,velocity:-cn(n.velocity||0)}),y=p||0,x=u/(2*Math.sqrt(c*d)),j=o-a,g=cn(Math.sqrt(c/d)),m=Math.abs(j)<5;r||(r=m?we.restSpeed.granular:we.restSpeed.default),i||(i=m?we.restDelta.granular:we.restDelta.default);let v;if(x<1){const k=$d(g,x);v=T=>{const C=Math.exp(-x*g*T);return o-C*((y+x*g*j)/k*Math.sin(k*T)+j*Math.cos(k*T))}}else if(x===1)v=k=>o-Math.exp(-g*k)*(j+(y+g*j)*k);else{const k=g*Math.sqrt(x*x-1);v=T=>{const C=Math.exp(-x*g*T),P=Math.min(k*T,300);return o-C*((y+x*g*j)*Math.sinh(P)+k*j*Math.cosh(P))/k}}const S={calculatedDuration:h&&f||null,next:k=>{const T=v(k);if(h)s.done=k>=f;else{let C=0;x<1&&(C=k===0?ln(y):Cw(v,k,T));const P=Math.abs(C)<=r,L=Math.abs(o-T)<=i;s.done=P&&L}return s.value=s.done?o:T,s},toString:()=>{const k=Math.min(U1(S),Ad),T=H1(C=>S.next(k*C).value,k,30);return k+"ms "+T}};return S}function Sg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=P=>s!==void 0&&P<s||c!==void 0&&P>c,y=P=>s===void 0?c:c===void 0||Math.abs(s-P)<Math.abs(c-P)?s:c;let x=n*t;const j=f+x,g=o===void 0?j:o(j);g!==j&&(x=g-f);const m=P=>-x*Math.exp(-P/r),v=P=>g+m(P),S=P=>{const L=m(P),M=v(P);p.done=Math.abs(L)<=u,p.value=p.done?g:M};let k,T;const C=P=>{h(p.value)&&(k=P,T=Tw({keyframes:[p.value,y(p.value)],velocity:Cw(v,P,p.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:P=>{let L=!1;return!T&&k===void 0&&(L=!0,S(P),C(P)),k!==void 0&&P>=k?T.next(P-k):(!L&&S(P),p)}}}const XP=lo(.42,0,1,1),ZP=lo(0,0,.58,1),Pw=lo(.42,0,.58,1),JP=e=>Array.isArray(e)&&typeof e[0]!="number",qP={linear:mt,easeIn:XP,easeInOut:Pw,easeOut:ZP,circIn:zp,circInOut:sw,circOut:ow,backIn:Vp,backInOut:iw,backOut:rw,anticipate:aw},kg=e=>{if(Rp(e)){j1(e.length===4);const[t,n,r,i]=e;return lo(t,n,r,i)}else if(typeof e=="string")return qP[e];return e};function e5(e,t,n){const r=[],i=n||jw,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||mt:t;s=co(c,s)}r.push(s)}return r}function t5(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(j1(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=e5(t,r,i),c=s.length,u=d=>{if(o&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Ti(e[f],e[f+1],d);return s[f](p)};return n?d=>u(hn(e[0],e[a-1],d)):u}function n5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ti(0,t,r);e.push(ge(n,1,i))}}function r5(e){const t=[0];return n5(t,e.length-1),t}function i5(e,t){return e.map(n=>n*t)}function a5(e,t){return e.map(()=>t||Pw).splice(0,e.length-1)}function pl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=JP(r)?r.map(kg):kg(r),a={done:!1,value:t[0]},o=i5(n&&n.length===t.length?n:r5(t),e),s=t5(o,t,{ease:Array.isArray(i)?i:a5(t,i)});return{calculatedDuration:e,next:c=>(a.value=s(c),a.done=c>=e,a)}}const o5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ae.update(t,!0),stop:()=>Yn(t),now:()=>Be.isProcessing?Be.timestamp:qt.now()}},s5={decay:Sg,inertia:Sg,tween:pl,keyframes:pl,spring:Tw},l5=e=>e/100;class Kp extends Sw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Yp,s=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=Op(n)?n:s5[n]||pl;let c,u;s!==pl&&typeof t[0]!="number"&&(c=co(l5,jw(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});a==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=U1(d));const{calculatedDuration:f}=d,p=f+i,h=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:h}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:h,repeatType:y,repeatDelay:x,onUpdate:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),m=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,S=a;if(h){const P=Math.min(this.currentTime,d)/f;let L=Math.floor(P),M=P%1;!M&&P>=1&&(M=1),M===1&&L--,L=Math.min(L,h+1),!!(L%2)&&(y==="reverse"?(M=1-M,x&&(M-=x/f)):y==="mirror"&&(S=o)),v=hn(0,1,M)*f}const k=m?{done:!1,value:c[0]}:S.next(v);s&&(k.value=s(k.value));let{done:T}=k;!m&&u!==null&&(T=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&i!==void 0&&(k.value=Yl(c,this.options,i)),j&&j(k.value),C&&this.finish(),k}get duration(){const{resolved:t}=this;return t?cn(t.calculatedDuration):0}get time(){return cn(this.currentTime)}set time(t){t=ln(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=cn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=o5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const c5=new Set(["opacity","clipPath","filter","transform"]);function u5(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=G1(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}const d5=wp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hl=10,f5=2e4;function p5(e){return Op(e.type)||e.type==="spring"||!Y1(e.ease)}function h5(e,t){const n=new Kp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<f5;)r=n.sample(a),i.push(r.value),a+=hl;return{times:void 0,keyframes:i,duration:a-hl,ease:"linear"}}const Dw={anticipate:aw,backInOut:iw,circInOut:sw};function m5(e){return e in Dw}class jg extends Sw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new bw(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:a,type:o,motionValue:s,name:c,startTime:u}=this.options;if(!s.owner||!s.owner.current)return!1;if(typeof a=="string"&&dl()&&m5(a)&&(a=Dw[a]),p5(this.options)){const{onComplete:f,onUpdate:p,motionValue:h,element:y,...x}=this.options,j=h5(t,x);t=j.keyframes,t.length===1&&(t[1]=t[0]),r=j.duration,i=j.times,a=j.ease,o="keyframes"}const d=u5(s.owner.current,c,t,{...this.options,duration:r,times:i,ease:a});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(lg(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;s.set(Yl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return cn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return cn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=ln(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return mt;const{animation:r}=n;lg(r,t)}return mt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...h}=this.options,y=new Kp({...h,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),x=ln(this.time);u.setWithVelocity(y.sample(x-hl).value,y.sample(x).value,hl)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return d5()&&r&&c5.has(r)&&!c&&!u&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const g5={type:"spring",stiffness:500,damping:25,restSpeed:10},v5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),y5={type:"keyframes",duration:.8},x5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w5=(e,{keyframes:t})=>t.length>2?y5:Lr.has(e)?e.startsWith("scale")?v5(t[1]):g5:x5;function b5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Qp=(e,t,n,r={},i,a)=>o=>{const s=Mp(r,e)||{},c=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-ln(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};b5(s)||(d={...d,...w5(e,d)}),d.duration&&(d.duration=ln(d.duration)),d.repeatDelay&&(d.repeatDelay=ln(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Yl(d.keyframes,s);if(p!==void 0)return ae.update(()=>{d.onUpdate(p),d.onComplete()}),new FT([])}return!a&&jg.supports(d)?new jg(d):new Kp(d)};function S5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ew(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...c}=t;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),h=c[f];if(h===void 0||d&&S5(d,f))continue;const y={delay:n,...Mp(o||{},f)};let x=!1;if(window.MotionHandoffAnimation){const g=q1(e);if(g){const m=window.MotionHandoffAnimation(g,f,ae);m!==null&&(y.startTime=m,x=!0)}}_d(e,f),p.start(Qp(f,p,h,e.shouldReduceMotion&&Z1.has(f)?{type:!1}:y,e,x));const j=p.animation;j&&u.push(j)}return s&&Promise.all(u).then(()=>{ae.update(()=>{s&&eP(e,s)})}),u}function Bd(e,t,n={}){var r;const i=Hl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(Ew(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=a;return k5(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=a;if(c){const[u,d]=c==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function k5(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(j5).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(Bd(u,t,{...a,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function j5(e,t){return e.sortNodePosition(t)}function C5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>Bd(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=Bd(e,t,n);else{const i=typeof t=="function"?Hl(e,t,n.custom):t;r=Promise.all(Ew(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const T5=Sp.length;function Aw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Aw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<T5;n++){const r=Sp[n],i=e.props[r];(Ka(i)||i===!1)&&(t[r]=i)}return t}const P5=[...bp].reverse(),D5=bp.length;function E5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>C5(e,n,r)))}function A5(e){let t=E5(e),n=Cg(),r=!0;const i=c=>(u,d)=>{var f;const p=Hl(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:h,transitionEnd:y,...x}=p;u={...u,...x,...y}}return u};function a(c){t=c(e)}function o(c){const{props:u}=e,d=Aw(e.parent)||{},f=[],p=new Set;let h={},y=1/0;for(let j=0;j<D5;j++){const g=P5[j],m=n[g],v=u[g]!==void 0?u[g]:d[g],S=Ka(v),k=g===c?m.isActive:null;k===!1&&(y=j);let T=v===d[g]&&v!==u[g]&&S;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...h},!m.isActive&&k===null||!v&&!m.prevProp||Wl(v)||typeof v=="boolean")continue;const C=L5(m.prevProp,v);let P=C||g===c&&m.isActive&&!T&&S||j>y&&S,L=!1;const M=Array.isArray(v)?v:[v];let _=M.reduce(i(g),{});k===!1&&(_={});const{prevResolvedValues:$={}}=m,W={...$,..._},H=z=>{P=!0,p.has(z)&&(L=!0,p.delete(z)),m.needsAnimating[z]=!0;const E=e.getValue(z);E&&(E.liveStyle=!1)};for(const z in W){const E=_[z],O=$[z];if(h.hasOwnProperty(z))continue;let R=!1;Ed(E)&&Ed(O)?R=!W1(E,O):R=E!==O,R?E!=null?H(z):p.add(z):E!==void 0&&p.has(z)?H(z):m.protectedKeys[z]=!0}m.prevProp=v,m.prevResolvedValues=_,m.isActive&&(h={...h,..._}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(T&&C)||L)&&f.push(...M.map(z=>({animation:z,options:{type:g}})))}if(p.size){const j={};p.forEach(g=>{const m=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),j[g]=m??null}),f.push({animation:j})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function s(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var h;return(h=p.animationState)===null||h===void 0?void 0:h.setActive(c,u)}),n[c].isActive=u;const f=o(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Cg(),r=!0}}}function L5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!W1(t,e):!1}function rr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Cg(){return{animate:rr(!0),whileInView:rr(),whileHover:rr(),whileTap:rr(),whileDrag:rr(),whileFocus:rr(),exit:rr()}}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class _5 extends qn{constructor(t){super(t),t.animationState||(t.animationState=A5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Wl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let I5=0;class M5 extends qn{constructor(){super(...arguments),this.id=I5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const O5={animation:{Feature:_5},exit:{Feature:M5}};function Ja(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function uo(e){return{point:{x:e.pageX,y:e.pageY}}}const R5=e=>t=>Np(t)&&e(t,uo(t));function Ca(e,t,n,r){return Ja(e,t,R5(n),r)}const Tg=(e,t)=>Math.abs(e-t);function N5(e,t){const n=Tg(e.x,t.x),r=Tg(e.y,t.y);return Math.sqrt(n**2+r**2)}class Lw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Zc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=N5(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:y}=f,{timestamp:x}=Be;this.history.push({...y,timestamp:x});const{onStart:j,onMove:g}=this.handlers;p||(j&&j(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Xc(p,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Zc(f.type==="pointercancel"?this.lastMoveEventInfo:Xc(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,j),y&&y(f,j)},!Np(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=uo(t),s=Xc(o,this.transformPagePoint),{point:c}=s,{timestamp:u}=Be;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Zc(s,this.history)),this.removeListeners=co(Ca(this.contextWindow,"pointermove",this.handlePointerMove),Ca(this.contextWindow,"pointerup",this.handlePointerUp),Ca(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Yn(this.updatePoint)}}function Xc(e,t){return t?{point:t(e.point)}:e}function Pg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zc({point:e},t){return{point:e,delta:Pg(e,_w(t)),offset:Pg(e,$5(t)),velocity:B5(t,.1)}}function $5(e){return e[0]}function _w(e){return e[e.length-1]}function B5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=_w(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ln(t)));)n--;if(!r)return{x:0,y:0};const a=cn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Iw=1e-4,F5=1-Iw,V5=1+Iw,Mw=.01,z5=0-Mw,W5=0+Mw;function vt(e){return e.max-e.min}function U5(e,t,n){return Math.abs(e-t)<=n}function Dg(e,t,n,r=.5){e.origin=r,e.originPoint=ge(t.min,t.max,e.origin),e.scale=vt(n)/vt(t),e.translate=ge(n.min,n.max,e.origin)-e.originPoint,(e.scale>=F5&&e.scale<=V5||isNaN(e.scale))&&(e.scale=1),(e.translate>=z5&&e.translate<=W5||isNaN(e.translate))&&(e.translate=0)}function Ta(e,t,n,r){Dg(e.x,t.x,n.x,r?r.originX:void 0),Dg(e.y,t.y,n.y,r?r.originY:void 0)}function Eg(e,t,n){e.min=n.min+t.min,e.max=e.min+vt(t)}function H5(e,t,n){Eg(e.x,t.x,n.x),Eg(e.y,t.y,n.y)}function Ag(e,t,n){e.min=t.min-n.min,e.max=e.min+vt(t)}function Pa(e,t,n){Ag(e.x,t.x,n.x),Ag(e.y,t.y,n.y)}function Y5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ge(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ge(n,e,r.max):Math.min(e,n)),e}function Lg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function G5(e,{top:t,left:n,bottom:r,right:i}){return{x:Lg(e.x,n,i),y:Lg(e.y,t,r)}}function _g(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function K5(e,t){return{x:_g(e.x,t.x),y:_g(e.y,t.y)}}function Q5(e,t){let n=.5;const r=vt(e),i=vt(t);return i>r?n=Ti(t.min,t.max-r,e.min):r>i&&(n=Ti(e.min,e.max-i,t.min)),hn(0,1,n)}function X5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Fd=.35;function Z5(e=Fd){return e===!1?e=0:e===!0&&(e=Fd),{x:Ig(e,"left","right"),y:Ig(e,"top","bottom")}}function Ig(e,t,n){return{min:Mg(e,t),max:Mg(e,n)}}function Mg(e,t){return typeof e=="number"?e:e[t]||0}const Og=()=>({translate:0,scale:1,origin:0,originPoint:0}),qr=()=>({x:Og(),y:Og()}),Rg=()=>({min:0,max:0}),Se=()=>({x:Rg(),y:Rg()});function kt(e){return[e("x"),e("y")]}function Ow({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function J5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function q5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Jc(e){return e===void 0||e===1}function Vd({scale:e,scaleX:t,scaleY:n}){return!Jc(e)||!Jc(t)||!Jc(n)}function lr(e){return Vd(e)||Rw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Rw(e){return Ng(e.x)||Ng(e.y)}function Ng(e){return e&&e!=="0%"}function ml(e,t,n){const r=e-n,i=t*r;return n+i}function $g(e,t,n,r,i){return i!==void 0&&(e=ml(e,i,r)),ml(e,n,r)+t}function zd(e,t=0,n=1,r,i){e.min=$g(e.min,t,n,r,i),e.max=$g(e.max,t,n,r,i)}function Nw(e,{x:t,y:n}){zd(e.x,t.translate,t.scale,t.originPoint),zd(e.y,n.translate,n.scale,n.originPoint)}const Bg=.999999999999,Fg=1.0000000000001;function eD(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ti(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Nw(e,o)),r&&lr(a.latestValues)&&ti(e,a.latestValues))}t.x<Fg&&t.x>Bg&&(t.x=1),t.y<Fg&&t.y>Bg&&(t.y=1)}function ei(e,t){e.min=e.min+t,e.max=e.max+t}function Vg(e,t,n,r,i=.5){const a=ge(e.min,e.max,i);zd(e,t,n,a,r)}function ti(e,t){Vg(e.x,t.x,t.scaleX,t.scale,t.originX),Vg(e.y,t.y,t.scaleY,t.scale,t.originY)}function $w(e,t){return Ow(q5(e.getBoundingClientRect(),t))}function tD(e,t,n){const r=$w(e,n),{scroll:i}=t;return i&&(ei(r.x,i.offset.x),ei(r.y,i.offset.y)),r}const Bw=({current:e})=>e?e.ownerDocument.defaultView:null,nD=new WeakMap;class rD{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Se(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(uo(d).point)},a=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:y}=this.getProps();if(p&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=QT(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kt(j=>{let g=this.getAxisMotionValue(j).get()||0;if(Jt.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const v=m.layout.layoutBox[j];v&&(g=vt(v)*(parseFloat(g)/100))}}this.originPoint[j]=g}),y&&ae.postRender(()=>y(d,f)),_d(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:j}=f;if(h&&this.currentDirection===null){this.currentDirection=iD(j),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,j),this.updateAxis("y",f.point,j),this.visualElement.render(),x&&x(d,f)},s=(d,f)=>this.stop(d,f),c=()=>kt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Lw(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Bw(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&ae.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zo(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=Y5(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Zr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=G5(i.layoutBox,n):this.constraints=!1,this.elastic=Z5(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&kt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=X5(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Zr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=tD(r,i.root,this.visualElement.getTransformPagePoint());let o=K5(i.layout.layoutBox,a);if(n){const s=n(J5(o));this.hasMutatedConstraints=!!s,s&&(o=Ow(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),c=this.constraints||{},u=kt(d=>{if(!zo(d,n,this.currentDirection))return;let f=c&&c[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return _d(this.visualElement,t),r.start(Qp(t,r,0,n,this.visualElement,!1))}stopAnimation(){kt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){kt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){kt(n=>{const{drag:r}=this.getProps();if(!zo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-ge(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Zr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};kt(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const c=s.get();i[o]=Q5({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),kt(o=>{if(!zo(o,t,null))return;const s=this.getAxisMotionValue(o),{min:c,max:u}=this.constraints[o];s.set(ge(c,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;nD.set(this.visualElement,this);const t=this.visualElement.current,n=Ca(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Zr(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ae.read(r);const o=Ja(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(kt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Fd,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function zo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function iD(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class aD extends qn{constructor(t){super(t),this.removeGroupControls=mt,this.removeListeners=mt,this.controls=new rD(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const zg=e=>(t,n)=>{e&&ae.postRender(()=>e(t,n))};class oD extends qn{constructor(){super(...arguments),this.removePointerDownListener=mt}onPointerDown(t){this.session=new Lw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Bw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:zg(t),onStart:zg(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&ae.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Ca(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Es={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Xi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=Wg(e,t.target.x),r=Wg(e,t.target.y);return`${n}% ${r}%`}},sD={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gn.parse(e);if(i.length>5)return r;const a=Gn.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;const u=ge(s,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),a(i)}};class lD extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;DT(cD),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Es.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||ae.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),jp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Fw(e){const[t,n]=S1(),r=w.useContext(gp);return l.jsx(lD,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(A1),isPresent:t,safeToRemove:n})}const cD={borderRadius:{...Xi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xi,borderTopRightRadius:Xi,borderBottomLeftRadius:Xi,borderBottomRightRadius:Xi,boxShadow:sD};function uD(e,t,n){const r=Ke(e)?e:Xa(e);return r.start(Qp("",r,t,n)),r.animation}function dD(e){return e instanceof SVGElement&&e.tagName!=="svg"}const fD=(e,t)=>e.depth-t.depth;class pD{constructor(){this.children=[],this.isDirty=!1}add(t){$p(this.children,t),this.isDirty=!0}remove(t){Bp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(fD),this.isDirty=!1,this.children.forEach(t)}}function hD(e,t){const n=qt.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Yn(r),e(a-t))};return ae.read(r,!0),()=>Yn(r)}const Vw=["TopLeft","TopRight","BottomLeft","BottomRight"],mD=Vw.length,Ug=e=>typeof e=="string"?parseFloat(e):e,Hg=e=>typeof e=="number"||V.test(e);function gD(e,t,n,r,i,a){i?(e.opacity=ge(0,n.opacity!==void 0?n.opacity:1,vD(r)),e.opacityExit=ge(t.opacity!==void 0?t.opacity:1,0,yD(r))):a&&(e.opacity=ge(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<mD;o++){const s=`border${Vw[o]}Radius`;let c=Yg(t,s),u=Yg(n,s);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Hg(c)===Hg(u)?(e[s]=Math.max(ge(Ug(c),Ug(u),r),0),(Jt.test(u)||Jt.test(c))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=ge(t.rotate||0,n.rotate||0,r))}function Yg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const vD=zw(0,.5,ow),yD=zw(.5,.95,mt);function zw(e,t,n){return r=>r<e?0:r>t?1:n(Ti(e,t,r))}function Gg(e,t){e.min=t.min,e.max=t.max}function St(e,t){Gg(e.x,t.x),Gg(e.y,t.y)}function Kg(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Qg(e,t,n,r,i){return e-=t,e=ml(e,1/n,r),i!==void 0&&(e=ml(e,1/i,r)),e}function xD(e,t=0,n=1,r=.5,i,a=e,o=e){if(Jt.test(t)&&(t=parseFloat(t),t=ge(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=ge(a.min,a.max,r);e===a&&(s-=t),e.min=Qg(e.min,t,n,s,i),e.max=Qg(e.max,t,n,s,i)}function Xg(e,t,[n,r,i],a,o){xD(e,t[n],t[r],t[i],t.scale,a,o)}const wD=["x","scaleX","originX"],bD=["y","scaleY","originY"];function Zg(e,t,n,r){Xg(e.x,t,wD,n?n.x:void 0,r?r.x:void 0),Xg(e.y,t,bD,n?n.y:void 0,r?r.y:void 0)}function Jg(e){return e.translate===0&&e.scale===1}function Ww(e){return Jg(e.x)&&Jg(e.y)}function qg(e,t){return e.min===t.min&&e.max===t.max}function SD(e,t){return qg(e.x,t.x)&&qg(e.y,t.y)}function e0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Uw(e,t){return e0(e.x,t.x)&&e0(e.y,t.y)}function t0(e){return vt(e.x)/vt(e.y)}function n0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class kD{constructor(){this.members=[]}add(t){$p(this.members,t),t.scheduleRender()}remove(t){if(Bp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jD(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),y&&(r+=`skewY(${y}deg) `)}const s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||"none"}const cr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},fa=typeof window<"u"&&window.MotionDebug!==void 0,qc=["","X","Y","Z"],CD={visibility:"hidden"},r0=1e3;let TD=0;function eu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Hw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=q1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ae,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Hw(r)}function Yw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=TD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fa&&(cr.totalNodes=cr.resolvedTargetDeltas=cr.recalculatedProjection=0),this.nodes.forEach(ED),this.nodes.forEach(MD),this.nodes.forEach(OD),this.nodes.forEach(AD),fa&&window.MotionDebug.record(cr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new pD)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Fp),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const c=this.eventHandlers.get(o);c&&c.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dD(o),this.instance=o;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=hD(p,250),Es.hasAnimatedSinceResize&&(Es.hasAnimatedSinceResize=!1,this.nodes.forEach(a0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||FD,{onLayoutAnimationStart:j,onLayoutAnimationComplete:g}=d.getProps(),m=!this.targetLayout||!Uw(this.targetLayout,y)||h,v=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const S={...Mp(x,"layout"),onPlay:j,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||a0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RD),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Hw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:c}=this.options;if(s===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(i0);return}this.isUpdating||this.nodes.forEach(_D),this.isUpdating=!1,this.nodes.forEach(ID),this.nodes.forEach(PD),this.nodes.forEach(DD),this.clearAllSnapshots();const s=qt.now();Be.delta=hn(0,1e3/60,s-Be.timestamp),Be.timestamp=s,Be.isProcessing=!0,Uc.update.process(Be),Uc.preRender.process(Be),Uc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(LD),this.sharedNodes.forEach(ND)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Ww(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(s||lr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let c=this.removeElementScroll(s);return o&&(c=this.removeTransform(c)),VD(c),{animationId:this.root.animationId,measuredBox:s,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return Se();const c=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(zD))){const{scroll:d}=this.root;d&&(ei(c.x,d.offset.x),ei(c.y,d.offset.y))}return c}removeElementScroll(o){var s;const c=Se();if(St(c,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&St(c,o),ei(c.x,f.offset.x),ei(c.y,f.offset.y))}return c}applyTransform(o,s=!1){const c=Se();St(c,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ti(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),lr(d.latestValues)&&ti(c,d.latestValues)}return lr(this.latestValues)&&ti(c,this.latestValues),c}removeTransform(o){const s=Se();St(s,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!lr(u.latestValues))continue;Vd(u.latestValues)&&u.updateSnapshot();const d=Se(),f=u.measurePageBox();St(d,f),Zg(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return lr(this.latestValues)&&Zg(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),Pa(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Se(),this.targetWithTransforms=Se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),H5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),Nw(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),Pa(this.relativeTargetOrigin,this.target,h.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fa&&cr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||Rw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),c=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;St(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;eD(this.layoutCorrected,this.treeScale,this.path,c),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Se());const{target:y}=s;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kg(this.prevProjectionDelta.x,this.projectionDelta.x),Kg(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!n0(this.projectionDelta.x,this.prevProjectionDelta.x)||!n0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),fa&&cr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qr(),this.projectionDelta=qr(),this.projectionDeltaWithTransform=qr()}setAnimationOrigin(o,s=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=Se(),h=c?c.source:void 0,y=this.layout?this.layout.source:void 0,x=h!==y,j=this.getStack(),g=!j||j.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(BD));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const k=S/1e3;o0(f.x,o.x,k),o0(f.y,o.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pa(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$D(this.relativeTarget,this.relativeTargetOrigin,p,k),v&&SD(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Se()),St(v,this.relativeTarget)),x&&(this.animationValues=d,gD(d,u,this.latestValues,k,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{Es.hasAnimatedSinceResize=!0,this.currentAnimation=uD(0,r0,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(r0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:c,layout:u,latestValues:d}=o;if(!(!s||!c||!u)){if(this!==o&&this.layout&&u&&Gw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Se();const f=vt(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+f;const p=vt(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+p}St(s,c),ti(s,d),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new kD),this.sharedNodes.get(o).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(s=!0),!s)return;const u={};c.z&&eu("z",o,u,this.animationValues);for(let d=0;d<qc.length;d++)eu(`rotate${qc[d]}`,o,u,this.animationValues),eu(`skew${qc[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}getProjectionStyles(o){var s,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return CD;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ps(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ps(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!lr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=jD(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in ul){if(p[x]===void 0)continue;const{correct:j,applyTo:g}=ul[x],m=u.transform==="none"?p[x]:j(p[x],f);if(g){const v=g.length;for(let S=0;S<v;S++)u[g[S]]=m}else u[x]=m}return this.options.layoutId&&(u.pointerEvents=f===this?Ps(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(i0),this.root.sharedNodes.clear()}}}function PD(e){e.updateLayout()}function DD(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?kt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],h=vt(p);p.min=r[f].min,p.max=p.min+h}):Gw(a,n.layoutBox,r)&&kt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],h=vt(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const s=qr();Ta(s,r,n.layoutBox);const c=qr();o?Ta(c,e.applyTransform(i,!0),n.measuredBox):Ta(c,r,n.layoutBox);const u=!Ww(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const y=Se();Pa(y,n.layoutBox,p.layoutBox);const x=Se();Pa(x,r,h.layoutBox),Uw(y,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function ED(e){fa&&cr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function AD(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function LD(e){e.clearSnapshot()}function i0(e){e.clearMeasurements()}function _D(e){e.isLayoutDirty=!1}function ID(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function a0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function MD(e){e.resolveTargetDelta()}function OD(e){e.calcProjection()}function RD(e){e.resetSkewAndRotation()}function ND(e){e.removeLeadSnapshot()}function o0(e,t,n){e.translate=ge(t.translate,0,n),e.scale=ge(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function s0(e,t,n,r){e.min=ge(t.min,n.min,r),e.max=ge(t.max,n.max,r)}function $D(e,t,n,r){s0(e.x,t.x,n.x,r),s0(e.y,t.y,n.y,r)}function BD(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const FD={duration:.45,ease:[.4,0,.1,1]},l0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),c0=l0("applewebkit/")&&!l0("chrome/")?Math.round:mt;function u0(e){e.min=c0(e.min),e.max=c0(e.max)}function VD(e){u0(e.x),u0(e.y)}function Gw(e,t,n){return e==="position"||e==="preserve-aspect"&&!U5(t0(t),t0(n),.2)}function zD(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const WD=Yw({attachResizeListener:(e,t)=>Ja(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tu={current:void 0},Kw=Yw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!tu.current){const e=new WD({});e.mount(window),e.setOptions({layoutScroll:!0}),tu.current=e}return tu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),UD={pan:{Feature:oD},drag:{Feature:aD,ProjectionNode:Kw,MeasureLayout:Fw}};function d0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&ae.postRender(()=>a(t,uo(t)))}class HD extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=UT(t,n=>(d0(this.node,n,"Start"),r=>d0(this.node,r,"End"))))}unmount(){}}class YD extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=co(Ja(this.node.current,"focus",()=>this.onFocus()),Ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function f0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&ae.postRender(()=>a(t,uo(t)))}class GD extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=KT(t,n=>(f0(this.node,n,"Start"),(r,{success:i})=>f0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Wd=new WeakMap,nu=new WeakMap,KD=e=>{const t=Wd.get(e.target);t&&t(e)},QD=e=>{e.forEach(KD)};function XD({root:e,...t}){const n=e||document;nu.has(n)||nu.set(n,{});const r=nu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(QD,{root:e,...t})),r[i]}function ZD(e,t,n){const r=XD(t);return Wd.set(e,n),r.observe(e),()=>{Wd.delete(e),r.unobserve(e)}}const JD={some:0,all:1};class qD extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:JD[i]},s=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return ZD(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(eE(t,n))&&this.startObserver()}unmount(){}}function eE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const tE={inView:{Feature:qD},tap:{Feature:GD},focus:{Feature:YD},hover:{Feature:HD}},nE={layout:{ProjectionNode:Kw,MeasureLayout:Fw}},Ud={current:null},Qw={current:!1};function rE(){if(Qw.current=!0,!!xp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ud.current=e.matches;e.addListener(t),t()}else Ud.current=!1}const iE=[...ww,He,Gn],aE=e=>iE.find(xw(e)),p0=new WeakMap;function oE(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Ke(i))e.addValue(r,i);else if(Ke(a))e.addValue(r,Xa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Xa(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const h0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sE{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Yp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=qt.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,ae.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=o;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ul(n),this.isVariantNode=D1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const y=p[h];c[h]!==void 0&&Ke(y)&&y.set(c[h],!1)}}mount(t){this.current=t,p0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Qw.current||rE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ud.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){p0.delete(this.current),this.projection&&this.projection.unmount(),Yn(this.notifyUpdate),Yn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Lr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Pi){const n=Pi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<h0.length;r++){const i=h0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=oE(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Xa(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(vw(i)||lw(i))?i=parseFloat(i):!aE(i)&&Gn.test(n)&&(i=hw(t,n)),this.setBaseTarget(t,Ke(i)?i.get():i)),Ke(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Tp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Ke(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Fp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Xw extends sE{constructor(){super(...arguments),this.KeyframeResolver=bw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ke(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function lE(e){return window.getComputedStyle(e)}class cE extends Xw{constructor(){super(...arguments),this.type="html",this.renderInstance=N1}readValueFromInstance(t,n){if(Lr.has(n)){const r=Hp(n);return r&&r.default||0}else{const r=lE(t),i=(M1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return $w(t,n)}build(t,n,r){Ep(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Ip(t,n,r)}}class uE extends Xw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Se}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Lr.has(n)){const r=Hp(n);return r&&r.default||0}return n=$1.has(n)?n:kp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return V1(t,n,r)}build(t,n,r){Ap(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){B1(t,n,r,i)}mount(t){this.isSVGTag=_p(t.tagName),super.mount(t)}}const dE=(e,t)=>Cp(e)?new uE(t):new cE(t,{allowProjection:e!==w.Fragment}),fE=NT({...O5,...tE,...UD,...nE},dE),I=JC(fE),pE=b(I.nav)`
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
`,hE=b.div`
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
`,mE=b(Kx)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,gE=b.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,vE=b.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,yE=b(I.button)`
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
`,xE=b(I.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,wE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"5"}),l.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),l.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),l.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),l.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),l.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),l.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),l.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),l.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),bE=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),SE=()=>{const{isDark:e,toggleTheme:t}=lp();return l.jsx(pE,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:l.jsxs(hE,{children:[l.jsx(mE,{to:"/","aria-label":"Go to homepage",children:l.jsx(gE,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),l.jsx(vE,{}),l.jsx(yE,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:l.jsx(De,{mode:"wait",children:l.jsx(xE,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?l.jsx(bE,{}):l.jsx(wE,{})},e?"moon":"sun")})})]})})},kE=b(I.div)`
  position: relative;
`,jE=b(Kx)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Zw=b(I.div)`
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
`,CE=b(I.div)`
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

  ${Zw}:hover &::before {
    opacity: 0.3;
  }
`,TE=b.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,PE={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},DE={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},EE=({title:e,icon:t,to:n})=>l.jsx(kE,{variants:PE,whileHover:"hover",whileTap:"tap",children:l.jsx(jE,{to:n,children:l.jsxs(Zw,{variants:DE,children:[l.jsx(CE,{children:t}),l.jsx(TE,{children:e})]})})}),AE=b.div`
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
`,LE=b(I.div)`
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
`,_E={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},IE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),l.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),l.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),l.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),l.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),l.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),l.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),l.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),l.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),l.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),ME=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),l.jsx("path",{d:"M1 10h22"}),l.jsx("path",{d:"M17 14h.01"})]}),OE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),RE=[{id:"tax-manager",title:"Tax Manager",icon:l.jsx(IE,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:l.jsx(ME,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:l.jsx(OE,{}),to:"/canvas-manager"}],NE=()=>l.jsx(AE,{children:l.jsx(LE,{variants:_E,initial:"hidden",animate:"visible",children:RE.map(e=>l.jsx(EE,{title:e.title,icon:e.icon,to:e.to},e.id))})}),Jw=b.div`
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
`;const As=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],m0=75e3,ni=4,$E=12e5,BE=6e4,g0=5e6,v0=10,FE=12,VE=1800;function br(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const a=r.slice(-3),o=r.slice(0,-3);if(o.length>0){const s=[];let c=o;for(;c.length>0;)c.length>=2?(s.unshift(c.slice(-2)),c=c.slice(0,-2)):(s.unshift(c),c="");i=s.join(",")+","+a}else i=a;return(t?"-":"")+i}function K(e){return"₹"+br(e)}function te(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,a]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+br(parseInt(i))+"."+a}function y0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:br(e)}function zE(e){for(let t=As.length-1;t>=0;t--)if(e>As[t].from)return As[t].rate;return 0}function WE(e){const t=[];let n=e,r=0;for(const i of As){const a=i.from,s=(i.to??1/0)-a;if(n<=0){t.push({from:a,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,s),u=c*i.rate/100;t.push({from:a,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function UE(e,t){if(t>g0){const r=e*(1+v0/100)*(1+ni/100),i=t-g0,o=(e+i)*(1+ni/100),s=o<r,c=Math.min(r,o),u=c/(1+ni/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:v0,surchargeAmount:d,marginalReliefApplied:s,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(ni/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function x0(e,t,n,r,i,a,o){const s=e*t/100,c=e-s;let u=0;i==="percentage"?u=e*a/100:i==="amount"&&(u=a);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=s*FE/100,p=f):(f=VE*12,p=f));const h=e-p,y=o.map(oe=>({name:oe.name,amount:oe.amount*12})),x=y.reduce((oe,se)=>oe+se.amount,0),j=Math.max(0,h-m0),{slabs:g,totalTax:m}=WE(j);let v=0,S=m;j<=$E&&(v=Math.min(m,BE),S=Math.max(0,m-v));const{surchargeApplicable:k,surchargeRate:T,surchargeAmount:C,marginalReliefApplied:P,taxAfterSurcharge:L,cess:M,totalTax:_}=UE(S,j),$=f+p,W=_,H=f+_+x,D=h-f-_-x,B=D/12,z=h>0?_/h*100:0,E=zE(j);let O=0,R=u;if(u>0&&E>0){let oe=u*E/100;k&&(oe=oe*(1+T/100)),O=oe*(1+ni/100),R=u-O}const F=D+R,Y=F/12;return{baseSalary:e,basicSalary:s,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:h,standardDeduction:m0,additionalDeductions:y,totalAdditionalDeductions:x,taxableIncome:j,slabs:g,taxBeforeSurcharge:m,surchargeApplicable:k,surchargeRate:T,surchargeAmount:C,marginalReliefApplied:P,taxAfterSurcharge:L,cessRate:ni,cess:M,totalTax:_,rebate87A:v,totalPFDeduction:$,totalTaxDeduction:W,totalDeductions:H,netSalaryYearly:D,netSalaryMonthly:B,effectiveTaxRate:z,bonusTaxRate:E,bonusTaxAmount:O,bonusAfterTax:R,totalIncomeYearly:F,totalIncomeMonthly:Y}}function HE(e){const t=x0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=x0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const Xp="taxCalculatorInput";function YE(e){localStorage.setItem(Xp,JSON.stringify(e))}function GE(){localStorage.removeItem(Xp)}function qw(){const e=localStorage.getItem(Xp);if(e)try{return JSON.parse(e)}catch{return null}return null}const KE={financialYear:"FY 2025-26"},QE=b(I.div)`
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
`,XE=b.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,Rr=b.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,w0=b.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
`,ir=b.input`
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
`,b0=b.div`
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
`,ZE=b.div`
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
`,JE=b(I.button)`
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
`,qE=b.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,e4=b(I.button)`
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
`,t4=b(I.button)`
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
`,n4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),su=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Je={type:"spring",stiffness:300,damping:30,mass:.8},r4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Je}},i4={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Je},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Je},opacity:{duration:.1}}}},a4={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Je},exit:{opacity:0,x:-20,transition:{duration:.15}}};function lu(e){const t=e.replace(/[^\d]/g,"");return t?br(parseInt(t)):""}function Uo(e){return parseInt(e.replace(/,/g,""))||0}const o4=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=w.useState(""),[a,o]=w.useState("50"),[s,c]=w.useState("percentage"),[u,d]=w.useState("none"),[f,p]=w.useState(""),[h,y]=w.useState([]),[x,j]=w.useState(""),[g,m]=w.useState(!1),v=w.useRef(!1);w.useEffect(()=>{const D=qw();D&&(i(br(D.baseSalary)),o(D.basicPercentage.toString()),c(D.pfType),d(D.bonusType),p(D.bonusValue>0?D.bonusType==="amount"?br(D.bonusValue):D.bonusValue.toString():""),y(D.additionalDeductions.map(B=>({name:B.name,amount:br(B.amount)}))),j(D.hikePercentage>0?D.hikePercentage.toString():"")),m(!0)},[]),w.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{M()},100))},[g,n,r]);const S=D=>{i(lu(D))},k=D=>{p(lu(D))},T=(D,B)=>{const z=[...h];z[D].amount=lu(B),y(z)},C=()=>{y([...h,{name:"",amount:""}])},P=D=>{y(h.filter((B,z)=>z!==D))},L=(D,B)=>{const z=[...h];z[D].name=B,y(z)},M=()=>{const D={baseSalary:Uo(r),basicPercentage:parseFloat(a)||50,calculatePF:!0,pfType:s,bonusType:u,bonusValue:u==="amount"?Uo(f):parseFloat(f)||0,additionalDeductions:h.filter(B=>B.name&&B.amount).map(B=>({name:B.name,amount:Uo(B.amount)})),hikePercentage:parseFloat(x)||0};YE(D),e(D)},_=()=>{i(""),o("50"),c("percentage"),d("none"),p(""),y([]),j(""),GE(),t==null||t()},W=Uo(r)>0,H=r||h.length>0||u!=="none"||x;return l.jsxs(QE,{variants:r4,initial:"hidden",animate:"visible",children:[l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Salary Details"}),l.jsxs(XE,{children:[l.jsxs(Rr,{$flex:2,children:[l.jsx(w0,{children:"Yearly Base Salary / CTC *"}),l.jsx(ru,{children:l.jsx(ir,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:D=>S(D.target.value)})})]}),l.jsxs(Rr,{children:[l.jsx(w0,{children:"Basic %"}),l.jsx(iu,{children:l.jsx(ir,{type:"number",inputMode:"numeric",placeholder:"40",value:a,onChange:D=>o(D.target.value),min:"0",max:"100"})})]})]})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Provident Fund (PF)"}),l.jsxs(b0,{children:[l.jsx(qi,{$active:s==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"12% of Basic"}),l.jsx(qi,{$active:s==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"Flat ₹1,800/mo"})]})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Bonus (Optional)"}),l.jsxs(b0,{children:[l.jsx(qi,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"None"}),l.jsx(qi,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"Percentage"}),l.jsx(qi,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:"Amount"})]}),l.jsx(De,{initial:!1,children:u!=="none"&&l.jsx(I.div,{initial:"hidden",animate:"visible",exit:"exit",variants:i4,style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:l.jsxs(au,{children:[l.jsx(Rr,{children:u==="percentage"?l.jsx(iu,{children:l.jsx(ir,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:D=>p(D.target.value)})}):l.jsx(ru,{children:l.jsx(ir,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:D=>k(D.target.value)})})}),l.jsx(De,{children:f&&l.jsx(ou,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Je,children:l.jsx(su,{})})})]})},"bonus-input")})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Additional Monthly Deductions"}),l.jsxs(ZE,{children:[l.jsx(De,{mode:"popLayout",children:h.map((D,B)=>l.jsxs(au,{variants:a4,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[l.jsx(Rr,{children:l.jsx(ir,{type:"text",placeholder:"Name (e.g., Cab)",value:D.name,onChange:z=>L(B,z.target.value)})}),l.jsx(Rr,{children:l.jsx(ru,{children:l.jsx(ir,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:D.amount,onChange:z=>T(B,z.target.value)})})}),l.jsx(ou,{onClick:()=>P(B),whileHover:{scale:1.1},whileTap:{scale:.9},transition:Je,children:l.jsx(su,{})})]},B))}),l.jsxs(JE,{onClick:C,whileHover:{scale:1.02},whileTap:{scale:.98},transition:Je,children:[l.jsx(n4,{}),"Add Deduction"]})]})]}),l.jsx(Wo,{}),l.jsxs(Zi,{children:[l.jsx(Ji,{children:"Hike / Appraisal (Optional)"}),l.jsxs(au,{style:{marginBottom:0},children:[l.jsx(Rr,{children:l.jsx(iu,{children:l.jsx(ir,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:x,onChange:D=>j(D.target.value),min:"0",max:"200"})})}),l.jsx(De,{children:x&&l.jsx(ou,{onClick:()=>j(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Je,children:l.jsx(su,{})})})]})]}),l.jsxs(qE,{children:[l.jsx(e4,{onClick:M,disabled:!W,whileHover:W?{scale:1.02}:{},whileTap:W?{scale:.98}:{},transition:Je,children:"Calculate Tax"}),l.jsx(De,{children:H&&l.jsx(t4,{onClick:_,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Je,children:"Reset"})})]})]})},s4=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,S0=b.div`
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
`,Ze=b.span`
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
`,k0=b.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--green);
  margin-top: var(--space-xs);
`,gr=b(I.div)`
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
`,j0=b(gr)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,l4=b(gr)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,c4=b(gr)`
  background: linear-gradient(135deg, rgba(var(--green-rgb), 0.12), rgba(var(--accent-rgb), 0.08));
  border-color: rgba(var(--green-rgb), 0.25);
`,ar=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
`,yn=b.h3`
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
`,Zp=b(I.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,C0=b(Zp)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,u4=b(Zp)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,d4=b(Zp)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,T0=b.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,f4=b.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,P0=b.button`
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
`,D0=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-sm);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,xn=b.div`
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 0;
  overflow: hidden;
`,wn=b.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bn=b.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,p4=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,E0=b(I.div)`
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
`,h4=b(I.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,Hd=b.span`
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
`,m4=b(Hd)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,ut=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-md) 0;
  opacity: 0.6;
`,ce=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-xs) 0;
  gap: var(--space-sm);

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`,ue=b.span`
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
`,de=b.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"var(--accent)":t?"#e05555":"var(--text-primary)"};
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`,A0=b.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,L0=b(I.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,_0=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,I0=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,M0=b.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,O0=b.span`
  font-size: 11px;
  color: var(--text-secondary);
`,R0=b.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,N0=b(I.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,$0=b.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,g4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),v4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),l.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),l.jsx("path",{d:"M12 17.5v-11"})]}),uu=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"})]}),y4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),l.jsx("path",{d:"M12 8v13"}),l.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),l.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),B0=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),l.jsx("polyline",{points:"16 7 22 7 22 13"})]}),x4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},kn={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},w4=({breakdown:e})=>{var f;const[t,n]=w.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",a=Math.max(...e.slabs.map(p=>p.taxInSlab),1),o=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&o.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const s=o.reduce((p,h)=>p+h.value,0),c=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],u=c.reduce((p,h)=>p+h.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${K(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),l.jsxs(s4,{variants:x4,initial:"hidden",animate:"visible",children:[e.postHike&&l.jsxs(j0,{variants:kn,children:[l.jsx(ar,{children:l.jsxs(yn,{children:[l.jsx(B0,{}),"Base Salary (CTC)"]})}),l.jsx(C0,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:K(e.baseSalary)}),l.jsx(ut,{}),l.jsxs(Qo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(cu,{children:K(e.postHike.baseSalary)}),l.jsxs(k0,{children:["+",K(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),l.jsxs(j0,{variants:kn,children:[l.jsxs(ar,{children:[l.jsxs(yn,{children:[l.jsx(g4,{}),"In-Hand Salary (Base)"]}),l.jsxs(f4,{children:[l.jsx(P0,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),l.jsx(P0,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),l.jsx(C0,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:te(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(ut,{}),l.jsxs(Qo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(cu,{children:te(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),l.jsxs(k0,{children:["+",K(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&l.jsxs(l4,{variants:kn,children:[l.jsx(ar,{children:l.jsxs(yn,{children:[l.jsx(y4,{}),"Bonus Summary",e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsx(u4,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:K(e.bonus)}),l.jsx(T0,{children:"Gross Bonus (before tax)"}),l.jsx(ut,{}),l.jsx(Qo,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),l.jsx(cu,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:te(e.bonusAfterTax)}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(ut,{}),l.jsxs(Qo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsxs(S0,{style:{marginTop:0},children:[l.jsxs(Ho,{children:[l.jsx(Yo,{children:"Gross Bonus"}),l.jsx(Go,{$large:!0,children:K(e.postHike.bonus)}),l.jsxs(Ze,{$positive:!0,children:["+",K(e.postHike.bonus-e.bonus)]})]}),l.jsxs(Ho,{$highlight:!0,children:[l.jsx(Yo,{children:"In-Hand Bonus"}),l.jsx(Go,{$large:!0,children:te(e.postHike.bonusAfterTax)}),l.jsxs(Ze,{$positive:!0,children:["+",K(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),l.jsx(ut,{}),l.jsxs(D0,{children:[l.jsxs(xn,{children:[l.jsx(wn,{children:"Tax Rate"}),l.jsxs(bn,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),l.jsxs(xn,{children:[l.jsx(wn,{children:"Tax Deducted"}),l.jsxs(bn,{style:{color:"#e05555"},children:["-",te(e.bonusTaxAmount)]})]})]}),l.jsx(N0,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:l.jsxs($0,{children:["Bonus is taxed at your ",l.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&l.jsxs(c4,{variants:kn,children:[l.jsxs(ar,{children:[l.jsxs(yn,{children:[l.jsx(B0,{}),"Total Combined Income",e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsx(Hd,{children:"Yearly"})]}),e.postHike?l.jsxs(S0,{children:[l.jsxs(Ho,{children:[l.jsx(Yo,{children:"Current"}),l.jsx(Go,{$large:!0,children:te(e.totalIncomeYearly)})]}),l.jsxs(Ho,{$highlight:!0,children:[l.jsxs(Yo,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Go,{$large:!0,children:te(e.postHike.totalIncomeYearly)}),l.jsxs(Ze,{$positive:!0,children:["+",K(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(d4,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:te(e.totalIncomeYearly)}),l.jsx(T0,{children:"Base salary + Bonus (after tax)"})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Base In-Hand (Yearly)"}),l.jsx(de,{children:te(e.netSalaryYearly)})]}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Bonus In-Hand (Yearly)"}),l.jsx(de,{children:te(e.bonusAfterTax)})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Total Combined Income"}),l.jsx(de,{$highlight:!0,children:te(e.totalIncomeYearly)})]})]}),l.jsxs(gr,{variants:kn,children:[l.jsxs(yn,{style:{marginBottom:"var(--space-sm)"},children:[l.jsx(uu,{}),"Summary",e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsxs(D0,{children:[l.jsxs(xn,{children:[l.jsx(wn,{children:"Gross Salary"}),l.jsx(bn,{children:K(e.grossSalary*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.grossSalary*r)]})]}),l.jsxs(xn,{children:[l.jsx(wn,{children:"Total Tax"}),l.jsx(bn,{children:te(e.totalTax*r)}),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.totalTax*r)]})]}),l.jsxs(xn,{children:[l.jsx(wn,{children:"Employee PF"}),l.jsx(bn,{children:K(e.employeePF*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.employeePF*r)]})]}),l.jsxs(xn,{children:[l.jsx(wn,{children:"Employer PF"}),l.jsx(bn,{children:K(e.employerPF*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.employerPF*r)]})]}),l.jsxs(xn,{children:[l.jsx(wn,{children:"Total PF"}),l.jsx(bn,{children:K((e.employeePF+e.employerPF)*r)}),e.postHike&&l.jsxs(Ze,{$positive:!0,children:["→ ",K((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),l.jsxs(xn,{children:[l.jsx(wn,{children:"Eff. Tax Rate"}),l.jsxs(bn,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&l.jsxs(Ze,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),l.jsx(ut,{}),l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),l.jsx(A0,{children:o.map((p,h)=>l.jsx(L0,{$color:p.color,initial:{width:0},animate:{width:`${p.value/s*100}%`},transition:{delay:.3+h*.1,duration:.5}},h))}),l.jsx(_0,{children:o.map((p,h)=>l.jsxs(I0,{children:[l.jsx(M0,{$color:p.color}),l.jsx(O0,{children:p.label}),l.jsx(R0,{children:K(p.value*r)})]},h))}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(A0,{children:c.map((p,h)=>l.jsx(L0,{$color:p.color,initial:{width:0},animate:{width:`${p.value/u*100}%`},transition:{delay:.5+h*.1,duration:.5}},h))}),l.jsx(_0,{children:c.map((p,h)=>l.jsxs(I0,{children:[l.jsx(M0,{$color:p.color}),l.jsx(O0,{children:p.label}),l.jsx(R0,{children:K(p.value*r)})]},h))})]}),d.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(ut,{}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,h)=>l.jsx(N0,{children:l.jsx($0,{dangerouslySetInnerHTML:{__html:p}})},h))})]})]}),l.jsxs(gr,{variants:kn,children:[l.jsx(ar,{children:l.jsxs(yn,{children:[l.jsx(v4,{}),"Tax Slabs",l.jsx(Hd,{children:KE.financialYear}),e.postHike&&l.jsxs(Ko,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsxs(p4,{children:[l.jsxs(E0,{$isHeader:!0,children:[l.jsx(Sn,{children:"Slab"}),l.jsx(Sn,{$align:"center",children:"Rate"}),l.jsx(Sn,{$align:"right",children:"Amount"}),l.jsx(Sn,{$align:"right",children:"Tax"})]}),l.jsx(De,{children:e.slabs.map((p,h)=>{var y,x;return l.jsxs(E0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:h*.03},children:[l.jsxs(Sn,{children:[y0(p.from)," - ",y0(p.to),p.taxableInSlab>0&&l.jsx(h4,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/a*100,8)}%`},transition:{delay:.2+h*.03,duration:.4}})]}),l.jsxs(Sn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),l.jsxs(Sn,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?K(p.taxableInSlab):"-",e.postHike&&((y=e.postHike.slabs[h])==null?void 0:y.taxableInSlab)>0&&l.jsxs(Ze,{$positive:!0,children:["→ ",K(e.postHike.slabs[h].taxableInSlab)]})]}),l.jsxs(Sn,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?K(p.taxInSlab):"-",e.postHike&&((x=e.postHike.slabs[h])==null?void 0:x.taxInSlab)>0&&l.jsxs(Ze,{children:["→ ",K(e.postHike.slabs[h].taxInSlab)]})]})]},h)})})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Tax Before Surcharge"}),l.jsxs(de,{children:[te(e.taxBeforeSurcharge),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Section 87A Rebate"}),l.jsxs(de,{$negative:!0,children:["-",K(e.rebate87A)]})]}),e.surchargeApplicable&&l.jsxs(ce,{children:[l.jsxs(ue,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&l.jsx(m4,{children:"Marginal Relief"})]}),l.jsxs(de,{children:[te(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&l.jsxs(Ze,{children:["→ ",te(e.postHike.surchargeAmount)]})]})]}),l.jsxs(ce,{children:[l.jsxs(ue,{children:["Cess (",e.cessRate,"%)"]}),l.jsxs(de,{children:[te(e.cess),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.cess)]})]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Total Tax"}),l.jsxs(de,{$highlight:!0,children:[te(e.totalTax),e.postHike&&l.jsxs(Ze,{children:["→ ",te(e.postHike.totalTax)]})]})]})]}),l.jsxs(gr,{variants:kn,children:[l.jsx(ar,{children:l.jsxs(yn,{children:[l.jsx(uu,{}),"Yearly Breakdown"]})}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Base Salary (CTC)"}),l.jsx(de,{children:K(e.baseSalary)})]}),e.employerPF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employer PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employerPF)]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Gross Salary"}),l.jsx(de,{children:K(e.grossSalary)})]}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Standard Deduction"}),l.jsxs(de,{$negative:!0,children:["-",K(e.standardDeduction)]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Taxable Income"}),l.jsx(de,{children:K(e.taxableIncome)})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Income Tax"}),l.jsxs(de,{$negative:!0,children:["-",te(e.totalTax)]})]}),e.employeePF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employee PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employeePF)]})]}),e.additionalDeductions.map((p,h)=>l.jsxs(ce,{children:[l.jsxs(ue,{children:["Less: ",p.name]}),l.jsxs(de,{$negative:!0,children:["-",K(p.amount)]})]},h)),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Net In-Hand (Yearly)"}),l.jsx(de,{$highlight:!0,children:te(e.netSalaryYearly)})]})]}),l.jsxs(gr,{variants:kn,children:[l.jsx(ar,{children:l.jsxs(yn,{children:[l.jsx(uu,{}),"Monthly Breakdown"]})}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Base Salary (CTC)"}),l.jsx(de,{children:K(e.baseSalary/12)})]}),e.employerPF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employer PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employerPF/12)]})]}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Gross Salary"}),l.jsx(de,{children:K(e.grossSalary/12)})]}),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Income Tax"}),l.jsxs(de,{$negative:!0,children:["-",te(e.totalTax/12)]})]}),e.employeePF>0&&l.jsxs(ce,{children:[l.jsx(ue,{children:"Less: Employee PF"}),l.jsxs(de,{$negative:!0,children:["-",K(e.employeePF/12)]})]}),e.additionalDeductions.map((p,h)=>l.jsxs(ce,{children:[l.jsxs(ue,{children:["Less: ",p.name]}),l.jsxs(de,{$negative:!0,children:["-",K(p.amount/12)]})]},h)),l.jsx(ut,{}),l.jsxs(ce,{children:[l.jsx(ue,{$bold:!0,children:"Net In-Hand (Monthly)"}),l.jsx(de,{$highlight:!0,children:te(e.netSalaryMonthly)})]})]})]})},b4=b(I.div)`
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
`,S4=b.div`
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
`,k4=b(I.div)`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,j4=b(I.div)`
  min-width: 0;
`,C4={type:"spring",stiffness:300,damping:30,mass:.8},T4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},F0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:C4}},P4=()=>{const[e,t]=w.useState(null),[n,r]=w.useState(!1);w.useEffect(()=>{const o=qw();o&&o.baseSalary>0&&r(!0)},[]);const i=w.useCallback(o=>{const s=HE(o);t(s),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),a=w.useCallback(()=>{t(null)},[]);return l.jsx(b4,{variants:T4,initial:"hidden",animate:"visible",children:l.jsx(Jw,{$maxWidth:"wide",children:l.jsxs(S4,{children:[l.jsx(k4,{variants:F0,children:l.jsx(o4,{onCalculate:i,onReset:a,autoCalculate:n})}),l.jsx(j4,{id:"results",variants:F0,children:l.jsx(De,{mode:"wait",children:e&&l.jsx(w4,{breakdown:e},"results")})})]})})})},Sr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],eb="expense-manager-transactions",tb="expense-manager-initial-balances",nb="expense-manager-initial-cc-bills",rb="expense-manager-cc-limits",ib={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function du(e){localStorage.setItem(eb,JSON.stringify(e))}function D4(){const e=localStorage.getItem(eb);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function V0(e){localStorage.setItem(tb,JSON.stringify(e))}function E4(){const e=localStorage.getItem(tb);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function z0(e){localStorage.setItem(nb,JSON.stringify(e))}function A4(){const e=localStorage.getItem(nb);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function W0(e){localStorage.setItem(rb,JSON.stringify(e))}function L4(){const e=localStorage.getItem(rb);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function er(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Jp(e){return new Date(e+"T00:00:00")}function _4(e){return Jp(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function U0(e){return e===er(new Date)}function I4(e){return e<er(new Date)}function M4(e,t){if(!e.statementDate)return"";const n=Jp(t),r=n.getFullYear(),i=n.getMonth(),a=n.getDate();let o=r,s=i;a<e.statementDate&&(s-=1,s<0&&(s=11,o-=1));const c=new Date(o,s,e.statementDate);return er(c)}function O4(e,t){const n=ib[e];if(!n)return"";const r=Jp(t),i=r.getFullYear(),a=r.getMonth(),o=r.getDate();let s=i,c=a;o<n&&(c-=1,c<0&&(c=11,s-=1));const u=new Date(s,c,n);return er(u)}function R4(e,t,n){const r=O4(e,n);return r?t.filter(a=>a.accountId===e&&a.type==="credit_card_spend"&&a.date>=r&&a.date<=n).reduce((a,o)=>a+o.amount,0):0}function N4(e,t,n,r,i={}){const a=t.filter(s=>s.date<=n&&(s.accountId===e.id||s.linkedAccountId===e.id));let o=0;if(e.type==="bank"){o=r[e.id]||0;for(const s of a)s.accountId===e.id&&(s.type==="bank_credit"?o+=s.amount:s.type==="bank_debit"&&(o-=s.amount)),s.linkedAccountId===e.id&&s.type==="cc_payment"&&(o-=s.amount);return{account:e,balance:o}}else{o=-(i[e.id]||0);for(const f of a)f.accountId===e.id&&(f.type==="credit_card_spend"?o-=f.amount:f.type==="cc_payment"&&(o+=f.amount));const c=M4(e,n),d=a.filter(f=>f.date>c&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:o,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,o))}}}function $4(e,t,n,r={}){return Sr.map(i=>N4(i,e,t,n,r))}function B4(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function F4(e,t,n,r,i,a){return{id:B4(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:a,createdAt:new Date().toISOString()}}function ri(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function V4(e){return Sr.find(t=>t.id===e)}function ab(){return Sr.filter(e=>e.type==="bank")}function ob(){return Sr.filter(e=>e.type==="credit_card")}function z4(e,t,n,r={}){const i={version:"1.1",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n,ccLimits:r};return JSON.stringify(i,null,2)}function W4(e,t,n,r={}){const i=z4(e,t,n,r),a=new Blob([i],{type:"application/json"}),o=URL.createObjectURL(a),s=document.createElement("a"),c=new Date().toISOString().split("T")[0];s.href=o,s.download=`expense-backup-${c}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}function U4(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null||t.ccLimits!==void 0&&(typeof t.ccLimits!="object"||t.ccLimits===null))return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function H4(e){try{const t=JSON.parse(e);return U4(t)?t:null}catch{return null}}function sb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=sb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Gl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=sb(e))&&(r&&(r+=" "),r+=t);return r}const Y4=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),a=Object.getOwnPropertyDescriptor(t,n);!G4(i,a)&&r||Object.defineProperty(e,n,a)},G4=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},K4=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},Q4=(e,t)=>`/* Wrapped ${e}*/
${t}`,X4=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Z4=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),J4=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=Q4.bind(null,r,t.toString());Object.defineProperty(i,"name",Z4);const{writable:a,enumerable:o,configurable:s}=X4;Object.defineProperty(e,"toString",{value:i,writable:a,enumerable:o,configurable:s})};function q4(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))Y4(e,t,i,n);return K4(e,t),J4(e,t,r),e}const Xo=2147483647,eA=new WeakMap,fu=new WeakMap,tA=new WeakMap;function nA(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function lb(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>Xo)throw new TypeError(`The \`maxAge\` option cannot exceed ${Xo}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...a){var d;const o=t?t(a):a[0],s=nA(n,o);if(s)return s.data;const c=e.apply(this,a),u=typeof r=="function"?r(...a):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>Xo)throw new TypeError(`The \`maxAge\` function result cannot exceed ${Xo}.`)}if(n.set(o,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var h;n.delete(o),(h=fu.get(i))==null||h.delete(f)},u);(d=f.unref)==null||d.call(f);const p=fu.get(i)??new Set;p.add(f),fu.set(i,p)}return c};return q4(i,e,{ignoreNonConfigurable:!0}),eA.set(i,n),tA.set(i,t??(a=>a[0])),i}function rA(e){return typeof e=="string"}function iA(e,t,n){return n.indexOf(e)===t}function aA(e){return e.toLowerCase()===e}function H0(e){return e.indexOf(",")===-1?e:e.split(",")}function Yd(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Yd(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Yd(n)}if(e.indexOf("-")===-1||!aA(e))return e;var i=e.split("-"),a=i[0],o=i[1],s=o===void 0?"":o;return"".concat(a,"-").concat(s.toUpperCase())}function oA(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,a=i===void 0?"en-US":i,o=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],c=[],u=0,d=s;u<d.length;u++){var f=d[u];c=c.concat(H0(f))}var p=navigator.language,h=p&&H0(p);o=o.concat(c,h)}return r&&o.push(a),o.filter(rA).map(Yd).filter(iA)}var sA=lb(oA,{cacheKey:JSON.stringify});function lA(e){return sA(e)[0]||null}var cb=lb(lA,{cacheKey:JSON.stringify});function gn(e,t,n){return function(i,a=n){const o=e(i)+a;return t(o)}}function fo(e){return function(n){return new Date(e(n).getTime()-1)}}function po(e,t){return function(r){return[e(r),t(r)]}}function pe(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function tr(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function Kl(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function Bi(e){const t=pe(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const cA=gn(pe,Bi,-100),ub=gn(pe,Bi,100),qp=fo(ub),uA=gn(pe,qp,-100),db=po(Bi,qp);function nr(e){const t=pe(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const fb=gn(pe,nr,-10),eh=gn(pe,nr,10),Ql=fo(eh),pb=gn(pe,Ql,-10),hb=po(nr,Ql);function Fi(e){const t=pe(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const mb=gn(pe,Fi,-1),th=gn(pe,Fi,1),Xl=fo(th),gb=gn(pe,Xl,-1),dA=po(Fi,Xl);function nh(e,t){return function(r,i=t){const a=pe(r),o=tr(r)+i,s=new Date;return s.setFullYear(a,o,1),s.setHours(0,0,0,0),e(s)}}function _r(e){const t=pe(e),n=tr(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const vb=nh(_r,-1),rh=nh(_r,1),ho=fo(rh),yb=nh(ho,-1),fA=po(_r,ho);function pA(e,t){return function(r,i=t){const a=pe(r),o=tr(r),s=Kl(r)+i,c=new Date;return c.setFullYear(a,o,s),c.setHours(0,0,0,0),e(c)}}function mo(e){const t=pe(e),n=tr(e),r=Kl(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const hA=pA(mo,1),ih=fo(hA),mA=po(mo,ih);function xb(e){return Kl(ho(e))}var Fe={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},gA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},ah=[0,1,2,3,4,5,6],pu=new Map;function vA(e){return function(n,r){var i=n||cb();pu.has(i)||pu.set(i,new Map);var a=pu.get(i);return a.has(e)||a.set(e,new Intl.DateTimeFormat(i||void 0,e).format),a.get(e)(r)}}function yA(e){var t=new Date(e);return new Date(t.setHours(12))}function Ir(e){return function(t,n){return vA(e)(t,yA(n))}}var xA={day:"numeric"},wA={day:"numeric",month:"long",year:"numeric"},bA={month:"long"},SA={month:"long",year:"numeric"},kA={weekday:"short"},jA={weekday:"long"},CA={year:"numeric"},TA=Ir(xA),PA=Ir(wA),DA=Ir(bA),wb=Ir(SA),EA=Ir(kA),AA=Ir(jA),Zl=Ir(CA),LA=ah[0],_A=ah[5],Y0=ah[6];function qa(e,t){t===void 0&&(t=Fe.ISO_8601);var n=e.getDay();switch(t){case Fe.ISO_8601:return(n+6)%7;case Fe.ISLAMIC:return(n+1)%7;case Fe.HEBREW:case Fe.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function IA(e){var t=Bi(e);return pe(t)}function MA(e){var t=nr(e);return pe(t)}function Gd(e,t){t===void 0&&(t=Fe.ISO_8601);var n=pe(e),r=tr(e),i=e.getDate()-qa(e,t);return new Date(n,r,i)}function OA(e,t){t===void 0&&(t=Fe.ISO_8601);var n=t===Fe.GREGORY?Fe.GREGORY:Fe.ISO_8601,r=Gd(e,t),i=pe(e)+1,a,o;do a=new Date(i,0,n===Fe.ISO_8601?4:1),o=Gd(a,t),i-=1;while(e<o);return Math.round((r.getTime()-o.getTime())/(864e5*7))+1}function kr(e,t){switch(e){case"century":return Bi(t);case"decade":return nr(t);case"year":return Fi(t);case"month":return _r(t);case"day":return mo(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function RA(e,t){switch(e){case"century":return cA(t);case"decade":return fb(t);case"year":return mb(t);case"month":return vb(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function bb(e,t){switch(e){case"century":return ub(t);case"decade":return eh(t);case"year":return th(t);case"month":return rh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function NA(e,t){switch(e){case"decade":return fb(t,-100);case"year":return mb(t,-10);case"month":return vb(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function $A(e,t){switch(e){case"decade":return eh(t,100);case"year":return th(t,10);case"month":return rh(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Sb(e,t){switch(e){case"century":return qp(t);case"decade":return Ql(t);case"year":return Xl(t);case"month":return ho(t);case"day":return ih(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function BA(e,t){switch(e){case"century":return uA(t);case"decade":return pb(t);case"year":return gb(t);case"month":return yb(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function FA(e,t){switch(e){case"decade":return pb(t,-100);case"year":return gb(t,-10);case"month":return yb(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function G0(e,t){switch(e){case"century":return db(t);case"decade":return hb(t);case"year":return dA(t);case"month":return fA(t);case"day":return mA(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function VA(e,t,n){var r=[t,n].sort(function(i,a){return i.getTime()-a.getTime()});return[kr(e,r[0]),Sb(e,r[1])]}function kb(e,t,n){return n.map(function(r){return(t||Zl)(e,r)}).join(" – ")}function zA(e,t,n){return kb(e,t,db(n))}function jb(e,t,n){return kb(e,t,hb(n))}function WA(e){return e.getDay()===new Date().getDay()}function Cb(e,t){t===void 0&&(t=Fe.ISO_8601);var n=e.getDay();switch(t){case Fe.ISLAMIC:case Fe.HEBREW:return n===_A||n===Y0;case Fe.ISO_8601:case Fe.GREGORY:return n===Y0||n===LA;default:throw new Error("Unsupported calendar type.")}}var Ht="react-calendar__navigation";function UA(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?wb:r,a=e.formatYear,o=a===void 0?Zl:a,s=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,h=e.navigationLabel,y=e.next2AriaLabel,x=y===void 0?"":y,j=e.next2Label,g=j===void 0?"»":j,m=e.nextAriaLabel,v=m===void 0?"":m,S=e.nextLabel,k=S===void 0?"›":S,T=e.prev2AriaLabel,C=T===void 0?"":T,P=e.prev2Label,L=P===void 0?"«":P,M=e.prevAriaLabel,_=M===void 0?"":M,$=e.prevLabel,W=$===void 0?"‹":$,H=e.setActiveStartDate,D=e.showDoubleView,B=e.view,z=e.views,E=z.indexOf(B)>0,O=B!=="century",R=RA(B,t),F=O?NA(B,t):void 0,Y=bb(B,t),oe=O?$A(B,t):void 0,se=function(){if(R.getFullYear()<0)return!0;var Ae=BA(B,t);return u&&u>=Ae}(),G=O&&function(){if(F.getFullYear()<0)return!0;var Ae=FA(B,t);return u&&u>=Ae}(),le=c&&c<Y,Re=O&&c&&c<oe;function Xe(){H(R,"prev")}function Ee(){H(F,"prev2")}function zt(){H(Y,"next")}function wt(){H(oe,"next2")}function Ne(Ae){var Vi=function(){switch(B){case"century":return zA(s,o,Ae);case"decade":return jb(s,o,Ae);case"year":return o(s,Ae);case"month":return i(s,Ae);default:throw new Error("Invalid view: ".concat(B,"."))}}();return h?h({date:Ae,label:Vi,locale:s||cb()||void 0,view:B}):Vi}function ec(){var Ae="".concat(Ht,"__label");return l.jsxs("button",{"aria-label":f,"aria-live":p,className:Ae,disabled:!E,onClick:n,style:{flexGrow:1},type:"button",children:[l.jsx("span",{className:"".concat(Ae,"__labelText ").concat(Ae,"__labelText--from"),children:Ne(t)}),D?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"".concat(Ae,"__divider"),children:" – "}),l.jsx("span",{className:"".concat(Ae,"__labelText ").concat(Ae,"__labelText--to"),children:Ne(Y)})]}):null]})}return l.jsxs("div",{className:Ht,children:[L!==null&&O?l.jsx("button",{"aria-label":C,className:"".concat(Ht,"__arrow ").concat(Ht,"__prev2-button"),disabled:G,onClick:Ee,type:"button",children:L}):null,W!==null&&l.jsx("button",{"aria-label":_,className:"".concat(Ht,"__arrow ").concat(Ht,"__prev-button"),disabled:se,onClick:Xe,type:"button",children:W}),ec(),k!==null&&l.jsx("button",{"aria-label":v,className:"".concat(Ht,"__arrow ").concat(Ht,"__next-button"),disabled:le,onClick:zt,type:"button",children:k}),g!==null&&O?l.jsx("button",{"aria-label":x,className:"".concat(Ht,"__arrow ").concat(Ht,"__next2-button"),disabled:Re,onClick:wt,type:"button",children:g}):null]})}var ii=function(){return ii=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ii.apply(this,arguments)},HA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function K0(e){return"".concat(e,"%")}function oh(e){var t=e.children,n=e.className,r=e.count,i=e.direction,a=e.offset,o=e.style,s=e.wrap,c=HA(e,["children","className","count","direction","offset","style","wrap"]);return l.jsx("div",ii({className:n,style:ii({display:"flex",flexDirection:i,flexWrap:s?"wrap":"nowrap"},o)},c,{children:w.Children.map(t,function(u,d){var f=a&&d===0?K0(100*a/r):null;return w.cloneElement(u,ii(ii({},u.props),{style:{flexBasis:K0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function YA(e,t,n){return t&&t>e?t:n&&n<e?n:e}function eo(e,t){return t[0]<=e&&t[1]>=e}function GA(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Tb(e,t){return eo(e[0],t)||eo(e[1],t)}function Q0(e,t,n){var r=Tb(t,e),i=[];if(r){i.push(n);var a=eo(e[0],t),o=eo(e[1],t);a&&i.push("".concat(n,"Start")),o&&i.push("".concat(n,"End")),a&&o&&i.push("".concat(n,"BothEnds"))}return i}function KA(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function QA(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",a=[i];if(!n)return a;var o=new Date,s=function(){if(Array.isArray(n))return n;var h=e.dateType;if(!h)throw new Error("dateType is required when date is not an array of two dates");return G0(h,n)}();if(eo(o,s)&&a.push("".concat(i,"--now")),!t||!KA(t))return a;var c=function(){if(Array.isArray(t))return t;var h=e.valueType;if(!h)throw new Error("valueType is required when value is not an array of two dates");return G0(h,t)}();GA(c,s)?a.push("".concat(i,"--active")):Tb(c,s)&&a.push("".concat(i,"--hasActive"));var u=Q0(c,s,"".concat(i,"--range"));a.push.apply(a,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=Q0(f,s,"".concat(i,"--hover"));a.push.apply(a,p)}return a}function Jl(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,a=e.dateType,o=e.end,s=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,h=e.value,y=e.valueType,x=[],j=d;j<=o;j+=p){var g=i(j);x.push(u({classes:QA({date:g,dateType:a,hover:s,value:h,valueType:y}),date:g}))}return l.jsx(oh,{className:t,count:r,offset:c,wrap:!0,children:x})}function ql(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,a=e.formatAbbr,o=e.locale,s=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,h=e.style,y=e.tileClassName,x=e.tileContent,j=e.tileDisabled,g=e.view,m=w.useMemo(function(){var S={activeStartDate:t,date:i,view:g};return typeof y=="function"?y(S):y},[t,i,y,g]),v=w.useMemo(function(){var S={activeStartDate:t,date:i,view:g};return typeof x=="function"?x(S):x},[t,i,x,g]);return l.jsxs("button",{className:Gl(r,m),disabled:u&&d(u)>i||s&&c(s)<i||(j==null?void 0:j({activeStartDate:t,date:i,view:g})),onClick:f?function(S){return f(i,S)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:h,type:"button",children:[a?l.jsx("abbr",{"aria-label":a(o,i),children:n}):n,v]})}var Kd=function(){return Kd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kd.apply(this,arguments)},XA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},X0="react-calendar__century-view__decades__decade";function ZA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,a=i===void 0?Zl:i,o=XA(e,["classes","currentCentury","formatYear"]),s=o.date,c=o.locale,u=[];return n&&u.push.apply(u,n),u.push(X0),Bi(s).getFullYear()!==r&&u.push("".concat(X0,"--neighboringCentury")),l.jsx(ql,Kd({},o,{classes:u,maxDateTransform:Ql,minDateTransform:nr,view:"century",children:jb(c,a,s)}))}var Qd=function(){return Qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qd.apply(this,arguments)},Z0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function JA(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,a=e.valueType,o=Z0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),s=IA(t),c=s+(r?119:99);return l.jsx(Jl,{className:"react-calendar__century-view__decades",dateTransform:nr,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=Z0(u,["date"]);return l.jsx(ZA,Qd({},o,f,{activeStartDate:t,currentCentury:s,date:d}),d.getTime())},start:s,step:10,value:i,valueType:a})}var Xd=function(){return Xd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xd.apply(this,arguments)};function qA(e){function t(){return l.jsx(JA,Xd({},e))}return l.jsx("div",{className:"react-calendar__century-view",children:t()})}var Zd=function(){return Zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zd.apply(this,arguments)},eL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},J0="react-calendar__decade-view__years__year";function tL(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,a=i===void 0?Zl:i,o=eL(e,["classes","currentDecade","formatYear"]),s=o.date,c=o.locale,u=[];return n&&u.push.apply(u,n),u.push(J0),nr(s).getFullYear()!==r&&u.push("".concat(J0,"--neighboringDecade")),l.jsx(ql,Zd({},o,{classes:u,maxDateTransform:Xl,minDateTransform:Fi,view:"decade",children:a(c,s)}))}var Jd=function(){return Jd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jd.apply(this,arguments)},q0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function nL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,a=e.valueType,o=q0(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),s=MA(t),c=s+(r?11:9);return l.jsx(Jl,{className:"react-calendar__decade-view__years",dateTransform:Fi,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=q0(u,["date"]);return l.jsx(tL,Jd({},o,f,{activeStartDate:t,currentDecade:s,date:d}),d.getTime())},start:s,value:i,valueType:a})}var qd=function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)};function rL(e){function t(){return l.jsx(nL,qd({},e))}return l.jsx("div",{className:"react-calendar__decade-view",children:t()})}var ef=function(){return ef=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ef.apply(this,arguments)},iL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},ev=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},aL="react-calendar__year-view__months__month";function oL(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?DA:r,a=e.formatMonthYear,o=a===void 0?wb:a,s=iL(e,["classes","formatMonth","formatMonthYear"]),c=s.date,u=s.locale;return l.jsx(ql,ef({},s,{classes:ev(ev([],n,!0),[aL],!1),formatAbbr:o,maxDateTransform:ho,minDateTransform:_r,view:"year",children:i(u,c)}))}var tf=function(){return tf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},tf.apply(this,arguments)},tv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function sL(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,a=tv(e,["activeStartDate","hover","value","valueType"]),o=0,s=11,c=pe(t);return l.jsx(Jl,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),_r(d)},dateType:"month",end:s,hover:n,renderTile:function(u){var d=u.date,f=tv(u,["date"]);return l.jsx(oL,tf({},a,f,{activeStartDate:t,date:d}),d.getTime())},start:o,value:r,valueType:i})}var nf=function(){return nf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nf.apply(this,arguments)};function lL(e){function t(){return l.jsx(sL,nf({},e))}return l.jsx("div",{className:"react-calendar__year-view",children:t()})}var rf=function(){return rf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rf.apply(this,arguments)},cL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},hu="react-calendar__month-view__days__day";function uL(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,a=e.formatDay,o=a===void 0?TA:a,s=e.formatLongDate,c=s===void 0?PA:s,u=cL(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(hu),Cb(d,t)&&p.push("".concat(hu,"--weekend")),d.getMonth()!==i&&p.push("".concat(hu,"--neighboringMonth")),l.jsx(ql,rf({},u,{classes:p,formatAbbr:c,maxDateTransform:ih,minDateTransform:mo,view:"month",children:o(f,d)}))}var af=function(){return af=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},af.apply(this,arguments)},nv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function dL(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,a=e.showNeighboringMonth,o=e.value,s=e.valueType,c=nv(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=pe(t),d=tr(t),f=i||a,p=qa(t,n),h=f?0:p,y=(f?-p:0)+1,x=function(){if(i)return y+6*7-1;var j=xb(t);if(a){var g=new Date;g.setFullYear(u,d,j),g.setHours(0,0,0,0);var m=7-qa(g,n)-1;return j+m}return j}();return l.jsx(Jl,{className:"react-calendar__month-view__days",count:7,dateTransform:function(j){var g=new Date;return g.setFullYear(u,d,j),mo(g)},dateType:"day",hover:r,end:x,renderTile:function(j){var g=j.date,m=nv(j,["date"]);return l.jsx(uL,af({},c,m,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:h,start:y,value:o,valueType:s})}var Pb="react-calendar__month-view__weekdays",mu="".concat(Pb,"__weekday");function fL(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?EA:n,i=e.formatWeekday,a=i===void 0?AA:i,o=e.locale,s=e.onMouseLeave,c=new Date,u=_r(c),d=pe(u),f=tr(u),p=[],h=1;h<=7;h+=1){var y=new Date(d,f,h-qa(u,t)),x=a(o,y);p.push(l.jsx("div",{className:Gl(mu,WA(y)&&"".concat(mu,"--current"),Cb(y,t)&&"".concat(mu,"--weekend")),children:l.jsx("abbr",{"aria-label":x,title:x,children:r(o,y).replace(".","")})},h))}return l.jsx(oh,{className:Pb,count:7,onFocus:s,onMouseOver:s,children:p})}var gl=function(){return gl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gl.apply(this,arguments)},rv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},iv="react-calendar__tile";function pL(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=l.jsx("span",{children:n});if(t){var i=e.date,a=e.onClickWeekNumber,o=e.weekNumber,s=rv(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("button",gl({},s,{className:iv,onClick:function(c){return a(o,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=rv(e,["date","onClickWeekNumber","weekNumber"]);return l.jsx("div",gl({},s,{className:iv,children:r}))}}function hL(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,a=e.showFixedNumberOfWeeks,o=function(){if(a)return 6;var u=xb(t),d=qa(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),s=function(){for(var u=pe(t),d=tr(t),f=Kl(t),p=[],h=0;h<o;h+=1)p.push(Gd(new Date(u,d,f+h*7),n));return p}(),c=s.map(function(u){return OA(u,n)});return l.jsx(oh,{className:"react-calendar__month-view__weekNumbers",count:o,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=s[d];if(!f)throw new Error("date is not defined");return l.jsx(pL,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var of=function(){return of=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},of.apply(this,arguments)},mL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function gL(e){if(e)for(var t=0,n=Object.entries(gA);t<n.length;t++){var r=n[t],i=r[0],a=r[1];if(a.includes(e))return i}return Fe.ISO_8601}function vL(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,a=e.calendarType,o=a===void 0?gL(n):a,s=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=mL(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return l.jsx(fL,{calendarType:o,formatShortWeekday:s,formatWeekday:c,locale:n,onMouseLeave:r})}function h(){return d?l.jsx(hL,{activeStartDate:t,calendarType:o,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function y(){return l.jsx(dL,of({calendarType:o},f))}var x="react-calendar__month-view";return l.jsx("div",{className:Gl(x,d?"".concat(x,"--weekNumbers"):""),children:l.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[h(),l.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),y()]})]})})}var ai=function(){return ai=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ai.apply(this,arguments)},Zo="react-calendar",Ls=["century","decade","year","month"],yL=["decade","year","month","day"],sh=new Date;sh.setFullYear(1,0,1);sh.setHours(0,0,0,0);var xL=new Date(864e13);function pa(e){return e instanceof Date?e:new Date(e)}function Db(e,t){return Ls.slice(Ls.indexOf(e),Ls.indexOf(t)+1)}function wL(e,t,n){var r=Db(t,n);return r.indexOf(e)!==-1}function lh(e,t,n){return e&&wL(e,t,n)?e:n}function Eb(e){var t=Ls.indexOf(e);return yL[t]}function bL(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=pa(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Ab(e,t){var n=e.value,r=e.minDate,i=e.maxDate,a=e.maxDetail,o=bL(n,t);if(!o)return null;var s=Eb(a),c=function(){switch(t){case 0:return kr(s,o);case 1:return Sb(s,o);default:throw new Error("Invalid index value: ".concat(t))}}();return YA(c,r,i)}var ch=function(e){return Ab(e,0)},Lb=function(e){return Ab(e,1)},SL=function(e){return[ch,Lb].map(function(t){return t(e)})};function _b(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,a=e.value,o=e.view,s=lh(o,i,n),c=ch({value:a,minDate:r,maxDate:t,maxDetail:n})||new Date;return kr(s,c)}function kL(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,a=e.maxDate,o=e.maxDetail,s=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=lh(d,c,o),p=t||n;return p?kr(f,p):_b({maxDate:a,maxDetail:o,minDate:s,minDetail:c,value:u||r,view:d||i})}function gu(e){return e&&(!Array.isArray(e)||e.length===1)}function Jo(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var jL=w.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,a=t.calendarType,o=t.className,s=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,h=t.formatMonthYear,y=t.formatShortWeekday,x=t.formatWeekday,j=t.formatYear,g=t.goToRangeStartOnSelect,m=g===void 0?!0:g,v=t.inputRef,S=t.locale,k=t.maxDate,T=k===void 0?xL:k,C=t.maxDetail,P=C===void 0?"month":C,L=t.minDate,M=L===void 0?sh:L,_=t.minDetail,$=_===void 0?"century":_,W=t.navigationAriaLabel,H=t.navigationAriaLive,D=t.navigationLabel,B=t.next2AriaLabel,z=t.next2Label,E=t.nextAriaLabel,O=t.nextLabel,R=t.onActiveStartDateChange,F=t.onChange,Y=t.onClickDay,oe=t.onClickDecade,se=t.onClickMonth,G=t.onClickWeekNumber,le=t.onClickYear,Re=t.onDrillDown,Xe=t.onDrillUp,Ee=t.onViewChange,zt=t.prev2AriaLabel,wt=t.prev2Label,Ne=t.prevAriaLabel,ec=t.prevLabel,Ae=t.returnValue,Vi=Ae===void 0?"start":Ae,bt=t.selectRange,go=t.showDoubleView,uh=t.showFixedNumberOfWeeks,dh=t.showNavigation,Ob=dh===void 0?!0:dh,Rb=t.showNeighboringCentury,Nb=t.showNeighboringDecade,fh=t.showNeighboringMonth,$b=fh===void 0?!0:fh,Bb=t.showWeekNumbers,Fb=t.tileClassName,Vb=t.tileContent,zb=t.tileDisabled,tc=t.value,ph=t.view,hh=w.useState(s),Wb=hh[0],vo=hh[1],mh=w.useState(null),Ub=mh[0],gh=mh[1],vh=w.useState(Array.isArray(c)?c.map(function(X){return X!==null?pa(X):null}):c!=null?pa(c):null),nc=vh[0],Hb=vh[1],yh=w.useState(u),Yb=yh[0],xh=yh[1],rt=r||Wb||kL({activeStartDate:r,defaultActiveStartDate:s,defaultValue:c,defaultView:u,maxDate:T,maxDetail:P,minDate:M,minDetail:$,value:tc,view:ph}),it=function(){var X=function(){return bt&&gu(nc)?nc:tc!==void 0?tc:nc}();return X?Array.isArray(X)?X.map(function(xe){return xe!==null?pa(xe):null}):X!==null?pa(X):null:null}(),yo=Eb(P),he=lh(ph||Yb,$,P),Wt=Db($,P),Gb=bt?Ub:null,rc=Wt.indexOf(he)<Wt.length-1,wh=Wt.indexOf(he)>0,bh=w.useCallback(function(X){var xe=function(){switch(Vi){case"start":return ch;case"end":return Lb;case"range":return SL;default:throw new Error("Invalid returnValue.")}}();return xe({maxDate:T,maxDetail:P,minDate:M,value:X})},[T,P,M,Vi]),ic=w.useCallback(function(X,xe){vo(X);var Ce={action:xe,activeStartDate:X,value:it,view:he};R&&!Jo(rt,X)&&R(Ce)},[rt,R,it,he]),xo=w.useCallback(function(X,xe){var Ce=function(){switch(he){case"century":return oe;case"decade":return le;case"year":return se;case"month":return Y;default:throw new Error("Invalid view: ".concat(he,"."))}}();Ce&&Ce(X,xe)},[Y,oe,se,le,he]),ac=w.useCallback(function(X,xe){if(rc){xo(X,xe);var Ce=Wt[Wt.indexOf(he)+1];if(!Ce)throw new Error("Attempted to drill down from the lowest view.");vo(X),xh(Ce);var Lt={action:"drillDown",activeStartDate:X,value:it,view:Ce};R&&!Jo(rt,X)&&R(Lt),Ee&&he!==Ce&&Ee(Lt),Re&&Re(Lt)}},[rt,rc,R,xo,Re,Ee,it,he,Wt]),oc=w.useCallback(function(){if(wh){var X=Wt[Wt.indexOf(he)-1];if(!X)throw new Error("Attempted to drill up from the highest view.");var xe=kr(X,rt);vo(xe),xh(X);var Ce={action:"drillUp",activeStartDate:xe,value:it,view:X};R&&!Jo(rt,xe)&&R(Ce),Ee&&he!==X&&Ee(Ce),Xe&&Xe(Ce)}},[rt,wh,R,Xe,Ee,it,he,Wt]),sc=w.useCallback(function(X,xe){var Ce=it;xo(X,xe);var Lt=bt&&!gu(Ce),_t;if(bt)if(Lt)_t=kr(yo,X);else{if(!Ce)throw new Error("previousValue is required");if(Array.isArray(Ce))throw new Error("previousValue must not be an array");_t=VA(yo,Ce,X)}else _t=bh(X);var cc=!bt||Lt||m?_b({maxDate:T,maxDetail:P,minDate:M,minDetail:$,value:_t,view:he}):null;xe.persist(),vo(cc),Hb(_t);var Zb={action:"onChange",activeStartDate:cc,value:_t,view:he};if(R&&!Jo(rt,cc)&&R(Zb),F)if(bt){var Jb=gu(_t);if(!Jb)F(_t||null,xe);else if(i){if(Array.isArray(_t))throw new Error("value must not be an array");F([_t||null,null],xe)}}else F(_t||null,xe)},[rt,i,bh,m,T,P,M,$,R,F,xo,bt,it,yo,he]);function Kb(X){gh(X)}function lc(){gh(null)}w.useImperativeHandle(n,function(){return{activeStartDate:rt,drillDown:ac,drillUp:oc,onChange:sc,setActiveStartDate:ic,value:it,view:he}},[rt,ac,oc,sc,ic,it,he]);function Sh(X){var xe=X?bb(he,rt):kr(he,rt),Ce=rc?ac:sc,Lt={activeStartDate:xe,hover:Gb,locale:S,maxDate:T,minDate:M,onClick:Ce,onMouseOver:bt?Kb:void 0,tileClassName:Fb,tileContent:Vb,tileDisabled:zb,value:it,valueType:yo};switch(he){case"century":return l.jsx(qA,ai({formatYear:j,showNeighboringCentury:Rb},Lt));case"decade":return l.jsx(rL,ai({formatYear:j,showNeighboringDecade:Nb},Lt));case"year":return l.jsx(lL,ai({formatMonth:p,formatMonthYear:h},Lt));case"month":return l.jsx(vL,ai({calendarType:a,formatDay:d,formatLongDate:f,formatShortWeekday:y,formatWeekday:x,onClickWeekNumber:G,onMouseLeave:bt?lc:void 0,showFixedNumberOfWeeks:typeof uh<"u"?uh:go,showNeighboringMonth:$b,showWeekNumbers:Bb},Lt));default:throw new Error("Invalid view: ".concat(he,"."))}}function Qb(){return Ob?l.jsx(UA,{activeStartDate:rt,drillUp:oc,formatMonthYear:h,formatYear:j,locale:S,maxDate:T,minDate:M,navigationAriaLabel:W,navigationAriaLive:H,navigationLabel:D,next2AriaLabel:B,next2Label:z,nextAriaLabel:E,nextLabel:O,prev2AriaLabel:zt,prev2Label:wt,prevAriaLabel:Ne,prevLabel:ec,setActiveStartDate:ic,showDoubleView:go,view:he,views:Wt}):null}var Xb=Array.isArray(it)?it:[it];return l.jsxs("div",{className:Gl(Zo,bt&&Xb.length===1&&"".concat(Zo,"--selectRange"),go&&"".concat(Zo,"--doubleView"),o),ref:v,children:[Qb(),l.jsxs("div",{className:"".concat(Zo,"__viewContainer"),onBlur:bt?lc:void 0,onMouseLeave:bt?lc:void 0,children:[Sh(),go?Sh(!0):null]})]})});const CL=Ri`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,TL=Ri`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,PL=Ri`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,DL=Ri`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,EL=Ri`
  from { opacity: 0; }
  to { opacity: 1; }
`,AL=b.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${EL} 0.15s ease-out;
`,LL=b.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?hr`animation: ${DL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:hr`animation: ${PL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?hr`animation: ${TL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:hr`animation: ${CL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,_L=b.div`
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
`,Ib=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const a=w.useRef(null),[o,s]=w.useState(!1),[c,u]=w.useState(!1),[d,f]=w.useState(!1),[p,h]=w.useState({top:0,left:0});w.useEffect(()=>{if(e&&(i!=null&&i.current)){const m=i.current.getBoundingClientRect(),v=280,S=320,k=8,C=window.innerHeight-m.bottom-k<S;f(C);let P;C?P=m.top-S-k:P=m.bottom+k;let L=m.right-v;L<8&&(L=8),L+v>window.innerWidth-8&&(L=window.innerWidth-v-8),P<8&&(P=8),h({top:P,left:L}),u(!0),s(!1)}},[e,i]);const y=w.useCallback(()=>{s(!0),setTimeout(()=>{u(!1),s(!1),t()},150)},[t]),x=w.useCallback(m=>{a.current&&!a.current.contains(m.target)&&y()},[y]);w.useEffect(()=>{if(e){const m=setTimeout(()=>{document.addEventListener("mousedown",x)},10);return()=>{clearTimeout(m),document.removeEventListener("mousedown",x)}}},[e,x]);const j=w.useCallback(m=>{m instanceof Date&&(r(er(m)),y())},[r,y]);if(!c)return null;const g=new Date(n+"T00:00:00");return Nx.createPortal(l.jsxs("div",{"data-calendar-portal":!0,children:[l.jsx(AL,{onClick:y}),l.jsx(LL,{ref:a,$isClosing:o,$openUpward:d,$top:p.top,$left:p.left,children:l.jsx(_L,{children:l.jsx(jL,{onChange:j,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(m,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},IL=b(I.div)`
  position: relative;
  border-radius: 20px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,ML=b.div`
  display: flex;
  align-items: center;
  padding: var(--space-xl);
  gap: var(--space-lg);

  @media (max-width: 640px) {
    padding: var(--space-lg);
    gap: var(--space-md);
  }
`,OL=b(I.div)`
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
`,RL=b.span`
  font-size: 22px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,NL=b.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
`,$L=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,BL=b(I.div)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,FL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,VL=b.span`
  font-size: 13px;
  color: var(--text-tertiary);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,zL=b(I.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  
  ${({$type:e})=>{switch(e){case"past":return"background: #ef4444;";case"today":return"background: #10b981;";case"future":return"background: #3b82f6;"}}}
`,WL=b(I.span)`
  font-size: 12px;
  font-weight: 500;
  
  ${({$type:e})=>{switch(e){case"past":return"color: #ef4444;";case"today":return"color: #10b981;";case"future":return"color: #3b82f6;"}}}

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,UL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`,HL=b(I.button).attrs({type:"button"})`
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
`,YL=b(I.button).attrs({type:"button"})`
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
`,GL=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),ea={type:"spring",stiffness:300,damping:30,mass:.8},KL=({selectedDate:e,onDateChange:t})=>{const[n,r]=w.useState(!1),i=w.useRef(null),a=x=>{x.preventDefault(),x.stopPropagation(),t(er(new Date))},s=U0(e)?"today":I4(e)?"past":"future",c=U0(e),u=new Date(e+"T00:00:00"),d=u.getDate(),f=u.toLocaleDateString("en-US",{month:"short"}).toUpperCase(),p=u.toLocaleDateString("en-US",{weekday:"long"}),h=u.getFullYear(),y=()=>{switch(s){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return l.jsxs(IL,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:ea,children:[l.jsxs(ML,{children:[l.jsx(De,{mode:"wait",children:l.jsxs(OL,{$type:s,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:ea,children:[l.jsx(RL,{children:d}),l.jsx(NL,{children:f})]},`${d}-${f}`)}),l.jsxs($L,{children:[l.jsx(De,{mode:"wait",children:l.jsx(BL,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:ea,children:p},p)}),l.jsxs(FL,{children:[l.jsx(VL,{children:h}),l.jsx(De,{mode:"wait",children:l.jsx(zL,{$type:s,initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",stiffness:500,damping:25}},s)}),l.jsx(De,{mode:"wait",children:l.jsx(WL,{$type:s,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:ea,children:y()},s)})]})]}),l.jsxs(UL,{children:[l.jsx(De,{children:!c&&l.jsx(HL,{onClick:a,initial:{opacity:0,scale:.8,x:20},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:20},whileHover:{scale:1.05,backgroundColor:"var(--accent-hover)"},whileTap:{scale:.95},transition:ea,children:"Today"})}),l.jsx(YL,{ref:i,onClick:()=>r(!0),whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(GL,{})})]})]}),l.jsx(Ib,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:i})]})},QL=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,XL=b.div`
  position: relative;
  z-index: 1;
`,ZL=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
`,JL=b(I.div)`
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
`,qL=b.div`
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
`,e_=b(I.div)`
  font-size: 24px;
  font-weight: 700;
  color: ${({$negative:e,$color:t})=>e?"#ef4444":t};
  letter-spacing: -0.02em;
  margin-bottom: var(--space-md);
  font-variant-numeric: tabular-nums;
`,t_=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,n_=b.div`
  font-size: 11px;
  color: ${({$limitStatus:e})=>e==="over"?"#ef4444":e==="warning"?"#f59e0b":e==="normal"?"#10b981":"var(--text-tertiary)"};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,r_=b(I.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: var(--radius-xl);
  pointer-events: none;
  background: ${({$isOverLimit:e,$percentage:t})=>e?"rgba(239, 68, 68, 0.18)":t>80?"rgba(245, 158, 11, 0.15)":"rgba(16, 185, 129, 0.12)"};
`,i_={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},a_=e=>{const t=i_[e];return t?l.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},av=e=>{const t=Math.abs(e);if(t>=1e5){const n=t/1e5;return`${n%1===0?n.toFixed(0):n.toFixed(1)}L`}if(t>=1e3){const n=t/1e3;return`${n%1===0?n.toFixed(0):n.toFixed(1)}K`}return t.toFixed(0)},yu={type:"spring",stiffness:300,damping:30,mass:.8},o_=({accountBalance:e,index:t=0,limit:n,cycleSpending:r=0,initialBill:i=0})=>{const{account:a,balance:o,pendingBill:s,totalOutstanding:c}=e,u=Math.abs(o),d=o<0,f=n!==void 0&&n>0,p=i+r,h=f?Math.max(0,n-p):0,y=f?p/n*100:0,x=f&&p>n,j=()=>c&&c>0?l.jsx(vu,{$type:"due",layout:!0,children:"Due"}):s&&s>0?l.jsx(vu,{$type:"unbilled",layout:!0,children:"Unbilled"}):l.jsx(vu,{$type:"clear",layout:!0,children:"Clear"});return l.jsxs(QL,{$accentColor:a.color,initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{...yu,delay:t*.05},whileHover:{scale:1.02,y:-2},layout:!0,children:[f&&l.jsx(r_,{$percentage:y,$isOverLimit:x,initial:{height:0},animate:{height:`${Math.min(y,100)}%`},transition:{...yu,delay:t*.05+.1}}),l.jsxs(XL,{children:[l.jsxs(ZL,{children:[l.jsx(JL,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:a_(a.bank)}),l.jsx(qL,{children:a.name.replace(" Credit Card","").replace(" Bank","")+" Bank"})]}),l.jsxs(e_,{$negative:d,$color:a.color,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:yu,children:[d?"-":"",ri(u)]},u),l.jsxs(t_,{children:[l.jsx(n_,{$limitStatus:f&&d?x?"over":y>80?"warning":"normal":void 0,children:u===0?"Paid":d?f?x?`${av(p-n)} over`:`${av(h)} left`:"Outstanding":"Overpaid"}),j()]})]})]})},s_=w.memo(o_),l_=b(I.div)`
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
  padding: var(--space-lg);
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
  margin-bottom: var(--space-lg);
`,ov=b(I.div)`
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
`,sv=b(I.div)`
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
`,lv={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},ns=b(I.div)`
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
  letter-spacing: 0.04em;
  margin-bottom: var(--space-xs);

  @media (max-width: 500px) {
    font-size: 9px;
    letter-spacing: 0.04em;
  }
`,is=b(I.div)`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({$color:e})=>e};
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  margin-bottom: var(--space-md);

  @media (max-width: 500px) {
    font-size: 20px;
  }
`,as=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,c_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),u_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),os=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m18 15-6-6-6 6"})}),ss=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m6 9 6 6 6-6"})}),en={type:"spring",stiffness:300,damping:30,mass:.8},d_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},ls={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:en}},f_=({balances:e})=>{const{hdfcBalance:t,iciciBalance:n,totalCCOutstanding:r,netPosition:i}=w.useMemo(()=>{const a=e.find(f=>f.account.id==="hdfc-bank"),o=e.find(f=>f.account.id==="icici-bank"),s=e.filter(f=>f.account.type==="credit_card"),c=(a==null?void 0:a.balance)||0,u=(o==null?void 0:o.balance)||0,d=s.reduce((f,p)=>f+(p.totalOutstanding||0),0);return{hdfcBalance:c,iciciBalance:u,totalCCOutstanding:d,netPosition:c-d}},[e]);return l.jsxs(l_,{variants:d_,initial:"hidden",animate:"visible",children:[l.jsx(qo,{$variant:"hdfc",variants:ls,whileHover:{scale:1.02,y:-2},transition:en,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(sv,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:lv.hdfc,alt:"HDFC Bank"})})}),l.jsx(rs,{children:"HDFC Bank"}),l.jsx(is,{$color:t>=0?"#004C8F":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:en,children:ri(t)},t),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:t>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[t>=0?l.jsx(os,{}):l.jsx(ss,{}),t>=0?"+":"-"]})]})]})}),l.jsx(qo,{$variant:"icici",variants:ls,whileHover:{scale:1.02,y:-2},transition:en,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(sv,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:lv.icici,alt:"ICICI Bank"})})}),l.jsx(rs,{children:"ICICI Bank"}),l.jsx(is,{$color:n>=0?"#F58220":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:en,children:ri(n)},n),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:n>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[n>=0?l.jsx(os,{}):l.jsx(ss,{}),n>=0?"+":"-"]})]})]})}),l.jsx(qo,{$variant:"negative",variants:ls,whileHover:{scale:1.02,y:-2},transition:en,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(ov,{$color:"#ef4444",whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(c_,{})})}),l.jsx(rs,{children:"Credit Cards"}),l.jsxs(is,{$color:r>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:en,children:[r>0?"-":"",ri(r)]},r),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:r===0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[r===0?l.jsx(os,{}):l.jsx(ss,{}),r>0?"Due":"Clear"]})]})]})}),l.jsx(qo,{$variant:"neutral",variants:ls,whileHover:{scale:1.02,y:-2},transition:en,children:l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx(ov,{$color:"#10b981",whileHover:{scale:1.1,rotate:-5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(u_,{})})}),l.jsx(rs,{children:"Net Position"}),l.jsx(is,{$color:i>=0?"#10b981":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:en,children:ri(i)},i),l.jsxs(as,{children:[l.jsx("span",{}),l.jsxs(ns,{$positive:i>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[i>=0?l.jsx(os,{}):l.jsx(ss,{}),"Net"]})]})]})})]})},p_=w.memo(f_),h_=b.div`
  display: flex;
  flex-direction: column;
`,m_=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
`,g_=b(I.button)`
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
`,v_=b.span`
  font-weight: 600;
  display: block;
`,y_=b.span`
  font-size: 11px;
  opacity: 0.8;
  display: block;
  margin-top: 2px;
`,x_=b.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,w_=b.div`
  overflow: hidden;
`,b_=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    gap: var(--space-md);
  }
`,S_=b.div`
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
`,cv=b.input`
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
`,k_=b.div`
  position: relative;
`,j_=b(I.button).attrs({type:"button"})`
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
`,uv=b.select`
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
`,C_=b.div`
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
`,T_=b.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`,P_=b(I.button)`
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
`,D_=b(I.button)`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,E_=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),A_=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],L_=ob(),dv=ab(),xu={type:"spring",stiffness:400,damping:25},__=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=w.useState(""),[i,a]=w.useState(""),[o,s]=w.useState(""),[c,u]=w.useState(""),[d,f]=w.useState(""),[p,h]=w.useState(t||er(new Date)),[y,x]=w.useState(!1),j=w.useRef(null),g=w.useRef(null);w.useEffect(()=>{t&&h(t)},[t]);const m=i!==""||o!==""||c!==""||d!=="";w.useEffect(()=>{if(!n||m||y)return;const _=$=>{const W=$.target;W.closest("[data-calendar-portal]")||j.current&&!j.current.contains(W)&&r("")};return document.addEventListener("mousedown",_),document.addEventListener("touchstart",_),()=>{document.removeEventListener("mousedown",_),document.removeEventListener("touchstart",_)}},[n,m,y]);const v=w.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return L_;case"bank_debit":case"bank_credit":return dv;default:return Sr}},[n]),S=w.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),k=n&&i&&parseFloat(c)>0&&p,T=w.useCallback(()=>{r(""),a(""),s(""),u(""),f("")},[]),C=w.useCallback(()=>{if(!n||!i||!c||!p)return;const _=n==="cc_payment"&&o?o:void 0,$=Sr.find(B=>B.id===i),W=o?Sr.find(B=>B.id===o):void 0;let H="";switch(n){case"credit_card_spend":H=`Spent on ${$==null?void 0:$.name}`;break;case"cc_payment":H=W?`Payment to ${$==null?void 0:$.name} from ${W.name}`:`Payment to ${$==null?void 0:$.name}`;break;case"bank_debit":H=`Debited from ${$==null?void 0:$.name}`;break;case"bank_credit":H=`Credited to ${$==null?void 0:$.name}`;break}const D=F4(n,i,parseFloat(c),d||H,p,_);e(D),T()},[n,i,o,c,d,p,e,T]),P=w.useMemo(()=>{const $=c.replace(/[^0-9.]/g,"").split(".");let W=$[0];const H=$[1];if(W.length>3){let D=W.substring(W.length-3),B=W.substring(0,W.length-3);B=B.replace(/\B(?=(\d{2})+(?!\d))/g,","),W=B+","+D}return H!==void 0?`${W}.${H}`:W},[c]),L=w.useCallback(_=>{const $=_.target.value.replace(/,/g,"");($===""||/^\d*\.?\d*$/.test($))&&u($)},[]),M=!!n;return l.jsxs(h_,{ref:j,children:[l.jsx(m_,{children:A_.map(({type:_,label:$,hint:W,color:H})=>l.jsxs(g_,{type:"button",$active:n===_,$color:H,onClick:()=>{n===_&&!m?r(""):(r(_),a(""),s(""))},whileHover:{scale:1.02},whileTap:{scale:.98},transition:xu,children:[l.jsx(v_,{children:$}),l.jsx(y_,{children:W})]},_))}),l.jsx(x_,{$isOpen:M,children:l.jsx(w_,{children:l.jsxs(b_,{children:[l.jsxs(ta,{children:[l.jsx(na,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),l.jsxs(uv,{value:i,onChange:_=>a(_.target.value),children:[l.jsx("option",{value:"",children:S()}),v.map(_=>l.jsx("option",{value:_.id,children:_.name},_.id))]})]}),n==="cc_payment"&&l.jsxs(ta,{children:[l.jsx(na,{children:"Paid From (Optional)"}),l.jsxs(uv,{value:o,onChange:_=>s(_.target.value),children:[l.jsx("option",{value:"",children:"Select bank account..."}),dv.map(_=>l.jsx("option",{value:_.id,children:_.name},_.id))]})]}),l.jsxs(S_,{children:[l.jsxs(ta,{className:"flex-grow",children:[l.jsx(na,{children:"Amount"}),l.jsx(C_,{children:l.jsx(cv,{type:"text",inputMode:"decimal",placeholder:"10,000",value:P,onChange:L})})]}),l.jsxs(ta,{children:[l.jsx(na,{children:"Date"}),l.jsxs(k_,{children:[l.jsx(j_,{ref:g,onClick:()=>x(!0),whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(E_,{})}),l.jsx(Ib,{isOpen:y,onClose:()=>x(!1),selectedDate:p,onDateSelect:h,triggerRef:g})]})]})]}),l.jsxs(ta,{children:[l.jsx(na,{children:"Description (Optional)"}),l.jsx(cv,{type:"text",placeholder:"e.g., Grocery shopping",value:d,onChange:_=>f(_.target.value)})]}),l.jsxs(T_,{children:[l.jsx(P_,{type:"button",onClick:C,disabled:!k,whileHover:k?{scale:1.02}:{},whileTap:k?{scale:.98}:{},transition:xu,children:"Add"}),l.jsx(D_,{type:"button",onClick:T,whileHover:{scale:1.02},whileTap:{scale:.98},transition:xu,children:"Cancel"})]})]})})})]})},I_=w.memo(__),M_=b(I.div)`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,O_=b.div`
  position: relative;
  z-index: 1;
`,R_=b(I.button)`
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
`,N_=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,$_=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,B_=b(I.div)`
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
`,F_=b(I.div)`
  overflow: hidden;
`,V_=b.div`
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
`,z_=b.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,W_=b(I.span)`
  font-size: 12px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,U_=b.div`
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
`,H_=b(I.div)`
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
`,Y_=b(I.div)`
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
`,G_=b.div`
  min-width: 0;
  overflow: hidden;
`,K_=b.div`
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
`,Q_=b.div`
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
`,X_=b.span`
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
`,Z_=b.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
`,J_=b.div`
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  white-space: nowrap;
  text-align: right;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,q_=b(I.button)`
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
`,eI=b(I.div)`
  padding: var(--space-2xl);
  text-align: center;
  color: var(--text-tertiary);
`,tI=b.div`
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
`,nI=b.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,rI=b.p`
  font-size: 12px;
  color: var(--text-tertiary);
`,iI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),l.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),l.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),l.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),aI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),oI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("polyline",{points:"19 12 12 19 5 12"})]}),sI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),l.jsx("polyline",{points:"5 12 12 5 19 12"})]}),lI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),cI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),uI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),l.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),dI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),fI=e=>{switch(e){case"credit_card_spend":return l.jsx(aI,{});case"cc_payment":return l.jsx(lI,{});case"bank_debit":return l.jsx(sI,{});case"bank_credit":return l.jsx(oI,{})}},fv=e=>e==="bank_credit"||e==="cc_payment",fi={type:"spring",stiffness:300,damping:30,mass:.8},pI={collapsed:{height:0,opacity:0,transition:{height:{...fi},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...fi},opacity:{duration:.2,delay:.1}}}},hI={collapsed:{rotate:0},expanded:{rotate:180}},mI={hidden:{opacity:0,x:-20},visible:e=>({opacity:1,x:0,transition:{delay:e*.03,...fi}}),exit:{opacity:0,x:20,transition:{duration:.2}}},gI=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const[r,i]=w.useState(!1),a=w.useMemo(()=>{const[s,c]=n.split("-").slice(0,2);return[...e].filter(u=>{const[d,f]=u.date.split("-").slice(0,2);return d===s&&f===c&&u.date<=n}).sort((u,d)=>{const f=d.date.localeCompare(u.date);return f!==0?f:new Date(d.createdAt).getTime()-new Date(u.createdAt).getTime()})},[e,n]),o=w.useCallback(s=>{t(s)},[t]);return l.jsx(M_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...fi,delay:.1},children:l.jsxs(O_,{children:[l.jsxs(R_,{type:"button",onClick:()=>i(!r),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(N_,{children:[l.jsx(V_,{children:l.jsx(iI,{})}),l.jsx(z_,{children:"Transactions"})]}),l.jsxs($_,{children:[l.jsx(De,{mode:"wait",children:l.jsx(W_,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:a.length},a.length)}),l.jsx(B_,{animate:r?"expanded":"collapsed",variants:hI,transition:fi,children:l.jsx(dI,{})})]})]}),l.jsx(De,{initial:!1,children:r&&l.jsx(F_,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:pI,children:l.jsx(U_,{children:a.length===0?l.jsxs(eI,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:fi,children:[l.jsx(tI,{children:l.jsx(uI,{})}),l.jsx(nI,{children:"No transactions yet"}),l.jsx(rI,{children:"Add your first transaction above"})]}):l.jsx(De,{mode:"popLayout",children:a.map((s,c)=>{var d;const u=V4(s.accountId);return l.jsxs(H_,{custom:c,variants:mI,initial:"hidden",animate:"visible",exit:"exit",layout:!0,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[l.jsx(Y_,{$type:s.type,whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:20},children:fI(s.type)}),l.jsxs(G_,{children:[l.jsx(K_,{children:s.description}),l.jsxs(Q_,{children:[l.jsx("span",{children:_4(s.date)}),l.jsx(X_,{children:(d=u==null?void 0:u.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]})]}),l.jsxs(Z_,{children:[l.jsxs(J_,{$positive:fv(s.type),children:[fv(s.type)?"+":"-",ri(s.amount)]}),l.jsx(q_,{type:"button",onClick:()=>o(s.id),"aria-label":"Delete transaction",whileHover:{opacity:1,scale:1.1},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:20},children:l.jsx(cI,{})})]})]},s.id)})})})},"content")})]})})},vI=w.memo(gI),yI=b(I.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,xI=b(I.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,wI=b.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--space-xl);
  padding-bottom: var(--space-md);

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
`,bI=b.div`
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,SI=b.div`
  margin-bottom: var(--space-lg);
`,kI=b.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,jI=b.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,wu=b.h3`
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
`,bu=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Su=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,pv=b.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,ku=b.div`
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
`,ju=b.input`
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
`,hv=b.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,CI=b.div`
  display: flex;
  gap: var(--space-md);
`,mv=b(I.button)`
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
`,gv=b.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,TI=b.span`
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
`,PI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,DI=b.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
`,EI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),l.jsx("polyline",{points:"5 6 12 3 19 6"}),l.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),l.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),AI=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),LI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),_I={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},II={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},MI=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,ccLimits:i,onSave:a})=>{const[o,s]=w.useState({}),[c,u]=w.useState({}),[d,f]=w.useState({}),p=ab(),h=ob();w.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),w.useEffect(()=>{if(e){const S={};p.forEach(C=>{var P;S[C.id]=((P=n[C.id])==null?void 0:P.toString())||""}),s(S);const k={};h.forEach(C=>{var P;k[C.id]=((P=r[C.id])==null?void 0:P.toString())||""}),u(k);const T={};h.forEach(C=>{var P;T[C.id]=((P=i[C.id])==null?void 0:P.toString())||""}),f(T)}},[e,n,r,i]);const y=()=>{const S={};Object.entries(o).forEach(([C,P])=>{const L=parseFloat(P.replace(/,/g,""))||0;S[C]=L});const k={};Object.entries(c).forEach(([C,P])=>{const L=parseFloat(P.replace(/,/g,""))||0;k[C]=L});const T={};Object.entries(d).forEach(([C,P])=>{const L=parseFloat(P.replace(/,/g,""))||0;L>0&&(T[C]=L)}),a(S,k,T),t()},x=S=>{const k=S.replace(/[^0-9]/g,"");if(!k)return"";if(k.length>3){let T=k.substring(k.length-3),C=k.substring(0,k.length-3);return C=C.replace(/\B(?=(\d{2})+(?!\d))/g,","),C+","+T}return k},j=(S,k)=>{const T=k.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&s(C=>({...C,[S]:T}))},g=(S,k)=>{const T=k.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&u(C=>({...C,[S]:T}))},m=(S,k)=>{const T=k.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&f(C=>({...C,[S]:T}))},v=S=>{if(S>3&&S<21)return"th";switch(S%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return l.jsx(De,{children:e&&l.jsx(yI,{variants:_I,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:l.jsxs(xI,{variants:II,initial:"hidden",animate:"visible",exit:"exit",onClick:S=>S.stopPropagation(),children:[l.jsxs(wI,{children:[l.jsxs(SI,{children:[l.jsx(kI,{children:"Initial Balances, Bills & Limits"}),l.jsx(jI,{children:"Set your starting bank balances, credit card outstanding amounts, and monthly spending limits."})]}),l.jsxs(wu,{children:[l.jsx(EI,{}),"Bank Account Balances"]}),l.jsx(bu,{children:p.map(S=>l.jsxs(Su,{children:[l.jsx(pv,{children:S.name}),l.jsx(ku,{children:l.jsx(ju,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:x(o[S.id]||""),onChange:k=>j(S.id,k.target.value)})})]},S.id))}),l.jsx(hv,{}),l.jsxs(wu,{children:[l.jsx(AI,{}),"Credit Card Outstanding Bills"]}),l.jsx(bu,{children:h.map(S=>l.jsxs(Su,{children:[l.jsx(pv,{children:S.name}),l.jsx(ku,{children:l.jsx(ju,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:x(c[S.id]||""),onChange:k=>g(S.id,k.target.value)})}),l.jsx(gv,{children:"Current outstanding amount you owe"})]},S.id))}),l.jsx(hv,{}),l.jsxs(wu,{children:[l.jsx(LI,{}),"Monthly Spending Limits"]}),l.jsx(bu,{children:h.map(S=>{const k=ib[S.id];return l.jsxs(Su,{children:[l.jsxs(PI,{children:[l.jsx(DI,{children:S.name}),k&&l.jsxs(TI,{children:["Resets ",k,v(k)]})]}),l.jsx(ku,{children:l.jsx(ju,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:x(d[S.id]||""),onChange:T=>m(S.id,T.target.value)})}),l.jsx(gv,{children:"Maximum spending allowed per billing cycle"})]},S.id)})})]}),l.jsx(bI,{children:l.jsxs(CI,{children:[l.jsx(mv,{onClick:t,children:"Cancel"}),l.jsx(mv,{$primary:!0,onClick:y,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})})]})})})},Wn=e=>{switch(e){case"green":return{bg:"rgba(16, 185, 129, 0.15)",border:"rgba(16, 185, 129, 0.25)",text:"#10b981"};case"orange":return{bg:"rgba(245, 158, 11, 0.15)",border:"rgba(245, 158, 11, 0.25)",text:"#f59e0b"};case"pink":return{bg:"rgba(236, 72, 153, 0.15)",border:"rgba(236, 72, 153, 0.25)",text:"#ec4899"};case"blue":return{bg:"rgba(59, 130, 246, 0.15)",border:"rgba(59, 130, 246, 0.25)",text:"#3b82f6"};case"purple":return{bg:"rgba(139, 92, 246, 0.15)",border:"rgba(139, 92, 246, 0.25)",text:"#8b5cf6"}}},OI=b(I.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
`,RI=b(I.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-lg);
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    padding: var(--space-md);
  }
`,NI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,$I=b.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$accent:e})=>Wn(e).bg};
  border: 1px solid ${({$accent:e})=>Wn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$accent:e})=>Wn(e).text};
  }
`,BI=b.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,FI=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,VI=b(I.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$accent:e})=>Wn(e).text};
  background: ${({$accent:e})=>Wn(e).bg};
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,zI=b(I.div)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: ${({$accent:e})=>Wn(e).bg};
  border: 1px solid ${({$accent:e})=>Wn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$accent:e})=>Wn(e).text};

  svg {
    width: 14px;
    height: 14px;
  }
`,WI=b(I.div)`
  overflow: hidden;
`,UI=b.div`
  padding: var(--space-lg);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-md);
  }
`,HI=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),vl={type:"spring",stiffness:300,damping:30,mass:.8},YI={collapsed:{height:0,opacity:0,transition:{height:{...vl},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...vl},opacity:{duration:.2,delay:.1}}}},GI={collapsed:{rotate:0},expanded:{rotate:180}},cs=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:a,onOpenChange:o,collapseOnClickOutside:s=!1,children:c})=>{const[u,d]=w.useState(i),f=w.useRef(null),p=a!==void 0,h=p?a:u,y=()=>{const x=!h;p?o==null||o(x):d(x)};return w.useEffect(()=>{if(!s||!h)return;const x=j=>{f.current&&!f.current.contains(j.target)&&(p?o==null||o(!1):d(!1))};return document.addEventListener("mousedown",x),document.addEventListener("touchstart",x),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("touchstart",x)}},[s,h,p,o]),l.jsxs(OI,{ref:f,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...vl,delay:.05},children:[l.jsxs(RI,{type:"button",onClick:y,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(NI,{children:[l.jsx($I,{$accent:n,children:t}),l.jsx(BI,{children:e})]}),l.jsxs(FI,{children:[l.jsx(De,{mode:"wait",children:r!==void 0&&l.jsx(VI,{$accent:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:r},r)}),l.jsx(zI,{$accent:n,animate:h?"expanded":"collapsed",variants:GI,transition:vl,children:l.jsx(HI,{})})]})]}),l.jsx(De,{initial:!1,children:h&&l.jsx(WI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:YI,children:l.jsx(UI,{children:c})},"content")})]})},KI=b(I.div)`
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
`,QI=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,XI=b.div`
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
`,ZI=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-xl));
  }
`,JI=b(I.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,qI=b(I.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 500px) {
    gap: var(--space-md);
  }
`,e3=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,t3=b.div`
  display: flex;
  gap: var(--space-sm);
`,vv=b(I.button)`
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
`,n3=b(I.button)`
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
`,r3=b.input`
  display: none;
`,i3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),a3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),o3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),s3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),l3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),l.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),c3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),u3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),_s={type:"spring",stiffness:300,damping:30,mass:.8},d3={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Cu={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:_s}},f3=()=>{const[e,t]=w.useState(er(new Date)),[n,r]=w.useState([]),[i,a]=w.useState({}),[o,s]=w.useState({}),[c,u]=w.useState({}),[d,f]=w.useState(!1),p=w.useRef(null);w.useEffect(()=>{const k=D4(),T=E4(),C=A4(),P=L4();r(k),a(T),s(C),u(P)},[]);const h=w.useMemo(()=>$4(n,e,i,o),[e,n,i,o]),y=w.useMemo(()=>h.filter(k=>k.account.type==="credit_card"),[h]),x=w.useCallback(k=>{r(T=>{const C=[...T,k];return requestAnimationFrame(()=>du(C)),C})},[]),j=w.useCallback(k=>{r(T=>{const C=T.filter(P=>P.id!==k);return requestAnimationFrame(()=>du(C)),C})},[]),g=w.useCallback((k,T,C)=>{a(k),s(T),u(C),requestAnimationFrame(()=>{V0(k),z0(T),W0(C)})},[]),m=w.useCallback(()=>{W4(n,i,o,c)},[n,i,o,c]),v=w.useCallback(()=>{var k;(k=p.current)==null||k.click()},[]),S=w.useCallback(k=>{var P;const T=(P=k.target.files)==null?void 0:P[0];if(!T)return;const C=new FileReader;C.onload=L=>{var $;const M=($=L.target)==null?void 0:$.result,_=H4(M);_?window.confirm(`Import backup from ${new Date(_.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${_.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(_.transactions),a(_.initialBalances),s(_.initialCCBills),u(_.ccLimits||{}),du(_.transactions),V0(_.initialBalances),z0(_.initialCCBills),W0(_.ccLimits||{})):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},C.readAsText(T),k.target.value=""},[]);return l.jsxs(KI,{variants:d3,initial:"hidden",animate:"visible",children:[l.jsxs(Jw,{$maxWidth:"wide",children:[l.jsxs(QI,{variants:Cu,children:[l.jsx(KL,{selectedDate:e,onDateChange:t}),l.jsx(cs,{title:"Summary",icon:l.jsx(l3,{}),accent:"green",children:l.jsx(p_,{balances:h})})]}),l.jsxs(XI,{children:[l.jsx(ZI,{variants:Cu,children:l.jsx(cs,{title:"Add Transaction",icon:l.jsx(c3,{}),accent:"orange",children:l.jsx(I_,{onAddTransaction:x,defaultDate:e})})}),l.jsxs(JI,{variants:Cu,children:[l.jsx(cs,{title:"Credit Cards",icon:l.jsx(u3,{}),accent:"pink",badge:y.length,children:l.jsx(qI,{children:y.map((k,T)=>l.jsx(s_,{accountBalance:k,index:T,limit:c[k.account.id],cycleSpending:R4(k.account.id,n,e),initialBill:o[k.account.id]||0},k.account.id))})}),l.jsx(vI,{transactions:n,onDeleteTransaction:j,selectedDate:e}),l.jsx(cs,{title:"Manage Data",icon:l.jsx(s3,{}),accent:"purple",defaultOpen:!1,children:l.jsxs(e3,{children:[l.jsxs(n3,{type:"button",onClick:()=>f(!0),whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:_s,children:[l.jsx(i3,{}),"Set Initial Balances"]}),l.jsxs(t3,{children:[l.jsxs(vv,{type:"button",$variant:"secondary",onClick:m,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:_s,children:[l.jsx(a3,{}),"Export"]}),l.jsxs(vv,{type:"button",$variant:"secondary",onClick:v,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:_s,children:[l.jsx(o3,{}),"Import"]})]})]})}),l.jsx(r3,{ref:p,type:"file",accept:".json",onChange:S})]})]})]}),l.jsx(MI,{isOpen:d,onClose:()=>f(!1),initialBalances:i,initialCCBills:o,ccLimits:c,onSave:g})]})},Mb=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),p3=async(e,t,n,r=48)=>{try{const i=await Mb(),a=Math.min(t,n)*.03,o=t-r-a,s=n-r-a;e.globalAlpha=.7,e.drawImage(i,o,s,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},sf=(e,t,n)=>{const r=[],i=s=>{const c=[];let u=s;for(;u.length>0;){let d=u.length;for(;d>0&&e.measureText(u.slice(0,d)).width>n;)d--;d=Math.max(1,d);const f=u.slice(0,d),p=f.lastIndexOf("/"),h=f.lastIndexOf("-"),y=f.lastIndexOf(".");let x=d;const j=[p,h,y].filter(g=>g>0&&g<d-1);j.length>0&&(x=Math.max(...j)+1),c.push(u.slice(0,x)),u=u.slice(x)}return c},a=t.split(" ");let o="";for(const s of a)if(e.measureText(s).width>n){o&&(r.push(o),o="");const u=i(s);for(let d=0;d<u.length;d++)d<u.length-1?r.push(u[d]):o=u[d]}else{const u=o?`${o} ${s}`:s;e.measureText(u).width>n&&o?(r.push(o),o=s):o=u}return o&&r.push(o),r},h3=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:a,alignment:o,aspectRatio:s,padding:c}=e,u=document.createElement("canvas");u.width=s.width,u.height=s.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=a,d.fillRect(0,0,u.width,u.height);const f=n*(s.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(s.width/1080),h=u.width-p*2,y=t.split(`
`),x=[];for(const k of y)if(k.trim()==="")x.push("");else{const T=sf(d,k,h);x.push(...T)}const j=f*1.4,g=x.length*j;let m=(u.height-g)/2+f;d.textAlign=o;let v;switch(o){case"left":v=p;break;case"right":v=u.width-p;break;default:v=u.width/2}for(const k of x)k!==""&&d.fillText(k,v,m),m+=j;const S=Math.min(u.width,u.height)*.06;return await p3(d,u.width,u.height,S),u.toDataURL("image/png",1)},m3=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,a=document.createElement("canvas");a.width=n.width,a.height=n.height;const o=a.getContext("2d");if(!o)throw new Error("Failed to get canvas context");const s=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";o.fillStyle=r,o.fillRect(0,0,a.width,a.height);const f=64*s,p=a.width-f*2,h=20*s,y=36*s,x=(c?44:40)*s,j=(c?24:22)*s,g=18*s,m=x*1.25,v=j*1.45,S=c?5:4,k=c?4:3;o.font=`700 ${x}px -apple-system, BlinkMacSystemFont, sans-serif`;const T=sf(o,t.title,p),C=T.slice(0,S);if(T.length>S&&C.length>0){const G=C[C.length-1];G.endsWith("...")||(C[C.length-1]=G.slice(0,-3)+"...")}o.font=`400 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`;const P=t.description?sf(o,t.description,p):[],L=P.slice(0,k);if(P.length>k&&L.length>0){const G=L[L.length-1];G.endsWith("...")||(L[L.length-1]=G.slice(0,-3)+"...")}const M=y+h,_=C.length*m,$=L.length>0?h+L.length*v:0,W=M+_+$,H=Math.min(a.width,a.height)*.045,D=f+H+16*s,B=a.height-D-f,z=B-W-h*2;let E=0;if(t.image&&z>100*s){const G=c?a.width*.5:a.width*.4,le=120*s;E=Math.min(G,Math.max(le,z))}const O=E>0?h+E:0,R=W+O;let F=f+Math.max(0,(B-R)/2);if(t.favicon)try{const G=await yv(t.favicon);o.save(),o.beginPath(),o.arc(f+y/2,F+y/2,y/2,0,Math.PI*2),o.closePath(),o.clip(),o.drawImage(G,f,F,y,y),o.restore()}catch{o.fillStyle=i,o.beginPath(),o.arc(f+y/2,F+y/2,y/2,0,Math.PI*2),o.fill()}t.siteName&&(o.font=`500 ${22*s}px -apple-system, BlinkMacSystemFont, sans-serif`,o.fillStyle=d,o.textAlign="left",o.textBaseline="middle",o.fillText(t.siteName,f+y+10*s,F+y/2)),F+=y+h,o.font=`700 ${x}px -apple-system, BlinkMacSystemFont, sans-serif`,o.fillStyle=u,o.textAlign="left",o.textBaseline="top";for(const G of C)o.fillText(G,f,F),F+=m;if(L.length>0){F+=h,o.font=`400 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`,o.fillStyle=d;for(const G of L)o.fillText(G,f,F),F+=v}if(t.image&&E>0){F+=h;try{const G=await yv(t.image),le=p;o.save(),g3(o,f,F,le,E,10*s),o.clip();const Re=G.width/G.height,Xe=le/E;let Ee=0,zt=0,wt=G.width,Ne=G.height;Re>Xe?(wt=G.height*Xe,Ee=(G.width-wt)/2):(Ne=G.width/Xe,zt=(G.height-Ne)/2),o.drawImage(G,Ee,zt,wt,Ne,f,F,le,E),o.restore()}catch{}}const Y=a.height-f;o.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,o.fillStyle=i;const oe=p-H-16*s;let se=t.url;for(;o.measureText(se).width>oe&&se.length>20;)se=se.slice(0,-4)+"...";o.textAlign="left",o.textBaseline="middle",o.fillText(se,f,Y-H/2);try{const G=await Mb();o.globalAlpha=.7,o.drawImage(G,a.width-f-H,Y-H,H,H),o.globalAlpha=1}catch{}return a.toDataURL("image/png",1)},yv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),g3=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()},v3=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},y3=async e=>{var i,a;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const o=`https://api.microlink.io?url=${encodeURIComponent(e)}`,s=await fetch(o);if(!s.ok)return r;const c=await s.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((a=c.data.logo)==null?void 0:a.url)||r.favicon}:r}catch(o){return console.warn("Failed to fetch URL metadata:",o),r}},xv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],x3='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',w3=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},b3=b.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,S3=b.div`
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
`,k3=b.div`
  width: 100%;
  max-width: 600px;
`,j3=b.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,C3=b.div`
  position: absolute;
  inset: 0;
`,T3=b.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,P3=b(I.div)`
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
`,D3=b.div`
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
`,E3=b.div`
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
`,A3=b.textarea`
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
`,wv=b.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,bv=b.button`
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
`,L3=b.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,_3=b.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,I3=b.input`
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
`,M3=b.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,O3=b(I.button)`
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
`,R3=b(I.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,N3=b.input`
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
`,$3=b.textarea`
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
`,B3=b(I.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,F3=b(I.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,V3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),z3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),W3=()=>{const{isDark:e}=lp(),[t,n]=w.useState(""),[r,i]=w.useState(64),[a,o]=w.useState("left"),[s,c]=w.useState(xv[1]),[u,d]=w.useState(null),[f,p]=w.useState(!1),[h,y]=w.useState(null),[x,j]=w.useState(""),[g,m]=w.useState(""),[v,S]=w.useState(!1),[k,T]=w.useState(null),C=w.useMemo(()=>w3(t),[t]),P=e?"#000000":"#ffffff",L=e?"#ffffff":"#000000",M=`${s.height/s.width*100}%`,_=w.useCallback(async()=>{if(!(!C||!t.trim())){S(!0),T(null),d(null);try{const D=await y3(t.trim());y(D),j(D.title),m(D.description)}catch{T("Unable to fetch URL preview")}S(!1)}},[t,C]),$=w.useCallback(async()=>{if(!t.trim()||C){C||d(null);return}p(!0);try{const D=await h3({text:t.trim(),fontSize:r,fontFamily:x3,textColor:L,backgroundColor:P,alignment:a,aspectRatio:s,padding:80});d(D)}catch(D){console.error("Preview generation failed:",D)}p(!1)},[t,C,r,a,s,P,L]),W=w.useCallback(async()=>{if(h){p(!0);try{const D=await m3({metadata:{...h,title:x||h.title,description:g||h.description},aspectRatio:s,backgroundColor:P,accentColor:"#2A9D8F"});d(D)}catch(D){console.error("URL preview generation failed:",D)}p(!1)}},[h,x,g,s,P]);w.useEffect(()=>{if(C)return;const D=setTimeout($,200);return()=>clearTimeout(D)},[$,C]),w.useEffect(()=>{C?_():(y(null),j(""),m(""),T(null))},[C,_]),w.useEffect(()=>{h&&W()},[h,x,g,s,W]);const H=()=>{if(u){const z=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;v3(u,z)}};return l.jsxs(b3,{children:[l.jsx(S3,{children:l.jsx(k3,{children:l.jsx(j3,{$bgColor:P,$paddingBottom:M,children:l.jsxs(C3,{children:[u&&l.jsx(T3,{src:u,alt:"Preview"}),l.jsx(De,{children:!u&&l.jsxs(P3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[l.jsx(z3,{}),l.jsx("span",{children:C?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),l.jsx(D3,{children:l.jsxs(E3,{children:[l.jsxs(ra,{children:[l.jsx(ia,{children:"Content"}),l.jsx(A3,{value:t,onChange:D=>n(D.target.value),onContextMenu:D=>D.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),C?l.jsxs(l.Fragment,{children:[v&&l.jsx(ra,{style:{alignItems:"center"},children:l.jsx(F3,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),k&&l.jsx(B3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:k}),h&&l.jsxs(R3,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[l.jsx(ia,{children:"Edit Details"}),l.jsx(N3,{value:x,onChange:D=>j(D.target.value),placeholder:"Title"}),l.jsx($3,{value:g,onChange:D=>m(D.target.value),placeholder:"Description"})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs(ra,{children:[l.jsx(ia,{children:"Font Size"}),l.jsxs(L3,{children:[l.jsx(_3,{children:l.jsx(I3,{type:"range",min:"24",max:"120",value:r,onChange:D=>i(Number(D.target.value))})}),l.jsx(M3,{children:r})]})]}),l.jsxs(ra,{children:[l.jsx(ia,{children:"Alignment"}),l.jsx(wv,{children:["left","center","right"].map(D=>l.jsx(bv,{$active:a===D,onClick:()=>o(D),children:D.charAt(0).toUpperCase()+D.slice(1)},D))})]})]}),l.jsxs(ra,{children:[l.jsx(ia,{children:"Format"}),l.jsx(wv,{children:xv.map(D=>l.jsx(bv,{$active:s.id===D.id,onClick:()=>c(D),children:D.name},D.id))})]}),l.jsxs(O3,{onClick:H,disabled:!u||f,whileTap:{scale:.98},children:[l.jsx(V3,{}),"Download Image"]})]})})]})},U3=b(I.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,H3={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},Y3=()=>l.jsx(U3,{variants:H3,initial:"hidden",animate:"visible",children:l.jsx(W3,{})}),G3=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},K3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),l.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),l.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),l.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),l.jsx("path",{d:"M8 8v2"}),l.jsx("path",{d:"M16 8v2"}),l.jsx("path",{d:"M12 8v5"}),l.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),Q3=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[l.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),l.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),l.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),l.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),l.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),l.jsx("path",{d:"M12 10v8"}),l.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),X3=b.div`
  min-height: 100vh;
  position: relative;
`,Z3=b.main`
  position: relative;
  z-index: 1;
`,J3=b.a`
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
`,q3=Ri`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,Sv=b.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,kv=b.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${q3} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,jv=b.p`
  color: var(--text-secondary);
  font-size: 15px;
`,eM=b.button`
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
`,tM=()=>{const e=sp(),t=Mi();return w.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function nM(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Rj(),i=w.useMemo(()=>G3()?K3:Q3,[]);return t||!e&&!n?l.jsxs(Sv,{children:[l.jsx(kv,{children:l.jsx(i,{})}),l.jsx(jv,{children:"Authenticating..."})]}):n&&!e?l.jsxs(Sv,{children:[l.jsx(kv,{style:{animation:"none",opacity:1},children:l.jsx(i,{})}),l.jsx(jv,{children:"Authentication required to continue"}),l.jsx(eM,{onClick:r,children:"Try Again"})]}):l.jsxs(X3,{children:[l.jsx(tM,{}),l.jsx(J3,{href:"#main-content",children:"Skip to main content"}),l.jsx(FC,{}),l.jsx(SE,{}),l.jsx(Z3,{id:"main-content",children:l.jsxs(xj,{children:[l.jsx(Nr,{path:"/",element:l.jsx(NE,{})}),l.jsx(Nr,{path:"/tax-manager",element:l.jsx(P4,{})}),l.jsx(Nr,{path:"/expense-manager",element:l.jsx(f3,{})}),l.jsx(Nr,{path:"/canvas-manager",element:l.jsx(Y3,{})}),l.jsx(Nr,{path:"/tax-calculator",element:l.jsx(vj,{to:"/tax-manager",replace:!0})})]})})]})}function rM(){return l.jsx(Tj,{basename:"/tools",children:l.jsx(Aj,{children:l.jsxs(Oj,{children:[l.jsx(NC,{}),l.jsx(nM,{})]})})})}$x(document.getElementById("root")).render(l.jsx(w.StrictMode,{children:l.jsx(rM,{})}));
