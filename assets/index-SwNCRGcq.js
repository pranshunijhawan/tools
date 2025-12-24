function KS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function QS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yv={exports:{}},bl={},xv={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),XS=Symbol.for("react.portal"),ZS=Symbol.for("react.fragment"),JS=Symbol.for("react.strict_mode"),qS=Symbol.for("react.profiler"),e2=Symbol.for("react.provider"),t2=Symbol.for("react.context"),n2=Symbol.for("react.forward_ref"),r2=Symbol.for("react.suspense"),i2=Symbol.for("react.memo"),o2=Symbol.for("react.lazy"),Ch=Symbol.iterator;function s2(e){return e===null||typeof e!="object"?null:(e=Ch&&e[Ch]||e["@@iterator"],typeof e=="function"?e:null)}var wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,bv={};function Oi(e,t,n){this.props=e,this.context=t,this.refs=bv,this.updater=n||wv}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jv(){}jv.prototype=Oi.prototype;function uf(e,t,n){this.props=e,this.context=t,this.refs=bv,this.updater=n||wv}var df=uf.prototype=new jv;df.constructor=uf;Sv(df,Oi.prototype);df.isPureReactComponent=!0;var Th=Array.isArray,kv=Object.prototype.hasOwnProperty,ff={current:null},Cv={key:!0,ref:!0,__self:!0,__source:!0};function Tv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)kv.call(t,r)&&!Cv.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ps,type:e,key:o,ref:s,props:i,_owner:ff.current}}function a2(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function l2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ph=/\/+/g;function hc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?l2(""+e.key):t.toString(36)}function pa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ps:case XS:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+hc(s,0):r,Th(i)?(n="",e!=null&&(n=e.replace(Ph,"$&/")+"/"),pa(i,t,n,"",function(u){return u})):i!=null&&(pf(i)&&(i=a2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ph,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Th(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+hc(o,l);s+=pa(o,t,n,c,i)}else if(c=s2(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+hc(o,l++),s+=pa(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ls(e,t,n){if(e==null)return e;var r=[],i=0;return pa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function c2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},ha={transition:null},u2={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:ha,ReactCurrentOwner:ff};function Pv(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Ls,forEach:function(e,t,n){Ls(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ls(e,function(){t++}),t},toArray:function(e){return Ls(e,function(t){return t})||[]},only:function(e){if(!pf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Oi;X.Fragment=ZS;X.Profiler=qS;X.PureComponent=uf;X.StrictMode=JS;X.Suspense=r2;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u2;X.act=Pv;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ff.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)kv.call(t,c)&&!Cv.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ps,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:t2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e2,_context:e},e.Consumer=e};X.createElement=Tv;X.createFactory=function(e){var t=Tv.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:n2,render:e}};X.isValidElement=pf;X.lazy=function(e){return{$$typeof:o2,_payload:{_status:-1,_result:e},_init:c2}};X.memo=function(e,t){return{$$typeof:i2,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ha.transition;ha.transition={};try{e()}finally{ha.transition=t}};X.unstable_act=Pv;X.useCallback=function(e,t){return qe.current.useCallback(e,t)};X.useContext=function(e){return qe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};X.useEffect=function(e,t){return qe.current.useEffect(e,t)};X.useId=function(){return qe.current.useId()};X.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return qe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};X.useRef=function(e){return qe.current.useRef(e)};X.useState=function(e){return qe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return qe.current.useTransition()};X.version="18.3.1";xv.exports=X;var w=xv.exports;const en=QS(w),d2=KS({__proto__:null,default:en},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f2=w,p2=Symbol.for("react.element"),h2=Symbol.for("react.fragment"),m2=Object.prototype.hasOwnProperty,g2=f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v2={key:!0,ref:!0,__self:!0,__source:!0};function Dv(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)m2.call(t,r)&&!v2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:p2,type:e,key:o,ref:s,props:i,_owner:g2.current}}bl.Fragment=h2;bl.jsx=Dv;bl.jsxs=Dv;yv.exports=bl;var a=yv.exports,Ev={exports:{}},vt={},Av={exports:{}},Lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var R=A.length;A.push(M);e:for(;0<R;){var B=R-1>>>1,G=A[B];if(0<i(G,M))A[B]=M,A[R]=G,R=B;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],R=A.pop();if(R!==M){A[0]=R;e:for(var B=0,G=A.length,ae=G>>>1;B<ae;){var le=2*(B+1)-1,Q=A[le],ce=le+1,Oe=A[ce];if(0>i(Q,R))ce<G&&0>i(Oe,Q)?(A[B]=Oe,A[ce]=R,B=ce):(A[B]=Q,A[le]=R,B=le);else if(ce<G&&0>i(Oe,R))A[B]=Oe,A[ce]=R,B=ce;else break e}}return M}function i(A,M){var R=A.sortIndex-M.sortIndex;return R!==0?R:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,p=3,m=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function C(A){if(x=!1,v(A),!y)if(n(c)!==null)y=!0,W(j);else{var M=n(u);M!==null&&V(C,M.startTime-A)}}function j(A,M){y=!1,x&&(x=!1,g(P),P=-1),m=!0;var R=p;try{for(v(M),f=n(c);f!==null&&(!(f.expirationTime>M)||A&&!N());){var B=f.callback;if(typeof B=="function"){f.callback=null,p=f.priorityLevel;var G=B(f.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(c)&&r(c),v(M)}else r(c);f=n(c)}if(f!==null)var ae=!0;else{var le=n(u);le!==null&&V(C,le.startTime-M),ae=!1}return ae}finally{f=null,p=R,m=!1}}var k=!1,T=null,P=-1,E=5,_=-1;function N(){return!(e.unstable_now()-_<E)}function I(){if(T!==null){var A=e.unstable_now();_=A;var M=!0;try{M=T(!0,A)}finally{M?F():(k=!1,T=null)}}else k=!1}var F;if(typeof h=="function")F=function(){h(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=I,F=function(){D.postMessage(null)}}else F=function(){b(I,0)};function W(A){T=A,k||(k=!0,F())}function V(A,M){P=b(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,W(j))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var R=p;p=M;try{return A()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=p;p=A;try{return M()}finally{p=R}},e.unstable_scheduleCallback=function(A,M,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,A){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=R+G,A={id:d++,callback:M,priorityLevel:A,startTime:R,expirationTime:G,sortIndex:-1},R>B?(A.sortIndex=R,t(u,A),n(c)===null&&A===n(u)&&(x?(g(P),P=-1):x=!0,V(C,R-B))):(A.sortIndex=G,t(c,A),y||m||(y=!0,W(j))),A},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(A){var M=p;return function(){var R=p;p=M;try{return A.apply(this,arguments)}finally{p=R}}}})(Lv);Av.exports=Lv;var y2=Av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x2=w,mt=y2;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,Vo={};function _r(e,t){xi(e,t),xi(e+"Capture",t)}function xi(e,t){for(Vo[e]=t,e=0;e<t.length;e++)_v.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,w2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Eh={};function S2(e){return Eu.call(Eh,e)?!0:Eu.call(Dh,e)?!1:w2.test(e)?Eh[e]=!0:(Dh[e]=!0,!1)}function b2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j2(e,t,n,r){if(t===null||typeof t>"u"||b2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var hf=/[\-:]([a-z])/g;function mf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hf,mf);Be[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hf,mf);Be[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hf,mf);Be[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function gf(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j2(t,n,i,r)&&(n=null),r||i===null?S2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wn=x2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_s=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),Ov=Symbol.for("react.offscreen"),Ah=Symbol.iterator;function Ki(e){return e===null||typeof e!="object"?null:(e=Ah&&e[Ah]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,mc;function go(e){if(mc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mc=t&&t[1]||""}return`
`+mc+e}var gc=!1;function vc(e,t){if(!e||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?go(e):""}function k2(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=vc(e.type,!1),e;case 11:return e=vc(e.type.render,!1),e;case 1:return e=vc(e.type,!0),e;default:return""}}function Iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Yr:return"Portal";case Au:return"Profiler";case vf:return"StrictMode";case Lu:return"Suspense";case _u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mv:return(e.displayName||"Context")+".Consumer";case Iv:return(e._context.displayName||"Context")+".Provider";case yf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xf:return t=e.displayName||null,t!==null?t:Iu(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return Iu(e(t))}catch{}}return null}function C2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(t);case 8:return t===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T2(e){var t=Rv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){e._valueTracker||(e._valueTracker=T2(e))}function Nv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mu(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $v(e,t){t=t.checked,t!=null&&gf(e,"checked",t,!1)}function Ou(e,t){$v(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ru(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ru(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _h(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ru(e,t,n){(t!=="number"||Ra(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vo=Array.isArray;function pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ih(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(vo(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function Fv(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,Bv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P2=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){P2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function zv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function Wv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var D2=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(e,t){if(t){if(D2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Vu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function wf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zu=null,hi=null,mi=null;function Oh(e){if(e=gs(e)){if(typeof zu!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Pl(t),zu(e.stateNode,e.type,t))}}function Uv(e){hi?mi?mi.push(e):mi=[e]:hi=e}function Hv(){if(hi){var e=hi,t=mi;if(mi=hi=null,Oh(e),t)for(e=0;e<t.length;e++)Oh(t[e])}}function Yv(e,t){return e(t)}function Gv(){}var yc=!1;function Kv(e,t,n){if(yc)return e(t,n);yc=!0;try{return Yv(e,t,n)}finally{yc=!1,(hi!==null||mi!==null)&&(Gv(),Hv())}}function zo(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Wu=!1;if(mn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Wu=!1}function E2(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Po=!1,Na=null,$a=!1,Uu=null,A2={onError:function(e){Po=!0,Na=e}};function L2(e,t,n,r,i,o,s,l,c){Po=!1,Na=null,E2.apply(A2,arguments)}function _2(e,t,n,r,i,o,s,l,c){if(L2.apply(this,arguments),Po){if(Po){var u=Na;Po=!1,Na=null}else throw Error(L(198));$a||($a=!0,Uu=u)}}function Ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rh(e){if(Ir(e)!==e)throw Error(L(188))}function I2(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rh(i),e;if(o===r)return Rh(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Xv(e){return e=I2(e),e!==null?Zv(e):null}function Zv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zv(e);if(t!==null)return t;e=e.sibling}return null}var Jv=mt.unstable_scheduleCallback,Nh=mt.unstable_cancelCallback,M2=mt.unstable_shouldYield,O2=mt.unstable_requestPaint,Se=mt.unstable_now,R2=mt.unstable_getCurrentPriorityLevel,Sf=mt.unstable_ImmediatePriority,qv=mt.unstable_UserBlockingPriority,Fa=mt.unstable_NormalPriority,N2=mt.unstable_LowPriority,ey=mt.unstable_IdlePriority,jl=null,tn=null;function $2(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(jl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:B2,F2=Math.log,V2=Math.LN2;function B2(e){return e>>>=0,e===0?32:31-(F2(e)/V2|0)|0}var Os=64,Rs=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Va(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=yo(l):(o&=s,o!==0&&(r=yo(o)))}else s=n&~i,s!==0?r=yo(s):o!==0&&(r=yo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function z2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ft(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=z2(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ty(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function U2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function ny(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ry,jf,iy,oy,sy,Yu=!1,Ns=[],In=null,Mn=null,On=null,Wo=new Map,Uo=new Map,Dn=[],H2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function Xi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gs(t),t!==null&&jf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y2(e,t,n,r,i){switch(t){case"focusin":return In=Xi(In,e,t,n,r,i),!0;case"dragenter":return Mn=Xi(Mn,e,t,n,r,i),!0;case"mouseover":return On=Xi(On,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wo.set(o,Xi(Wo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Uo.set(o,Xi(Uo.get(o)||null,e,t,n,r,i)),!0}return!1}function ay(e){var t=hr(e.target);if(t!==null){var n=Ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Qv(n),t!==null){e.blockedOn=t,sy(e.priority,function(){iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bu=r,n.target.dispatchEvent(r),Bu=null}else return t=gs(n),t!==null&&jf(t),e.blockedOn=n,!1;t.shift()}return!0}function Fh(e,t,n){ma(e)&&n.delete(t)}function G2(){Yu=!1,In!==null&&ma(In)&&(In=null),Mn!==null&&ma(Mn)&&(Mn=null),On!==null&&ma(On)&&(On=null),Wo.forEach(Fh),Uo.forEach(Fh)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,Yu||(Yu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,G2)))}function Ho(e){function t(i){return Zi(i,e)}if(0<Ns.length){Zi(Ns[0],e);for(var n=1;n<Ns.length;n++){var r=Ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Zi(In,e),Mn!==null&&Zi(Mn,e),On!==null&&Zi(On,e),Wo.forEach(t),Uo.forEach(t),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)ay(n),n.blockedOn===null&&Dn.shift()}var gi=wn.ReactCurrentBatchConfig,Ba=!0;function K2(e,t,n,r){var i=te,o=gi.transition;gi.transition=null;try{te=1,kf(e,t,n,r)}finally{te=i,gi.transition=o}}function Q2(e,t,n,r){var i=te,o=gi.transition;gi.transition=null;try{te=4,kf(e,t,n,r)}finally{te=i,gi.transition=o}}function kf(e,t,n,r){if(Ba){var i=Gu(e,t,n,r);if(i===null)Ec(e,t,r,za,n),$h(e,r);else if(Y2(i,e,t,n,r))r.stopPropagation();else if($h(e,r),t&4&&-1<H2.indexOf(e)){for(;i!==null;){var o=gs(i);if(o!==null&&ry(o),o=Gu(e,t,n,r),o===null&&Ec(e,t,r,za,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ec(e,t,r,null,n)}}var za=null;function Gu(e,t,n,r){if(za=null,e=wf(r),e=hr(e),e!==null)if(t=Ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function ly(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R2()){case Sf:return 1;case qv:return 4;case Fa:case N2:return 16;case ey:return 536870912;default:return 16}default:return 16}}var An=null,Cf=null,ga=null;function cy(){if(ga)return ga;var e,t=Cf,n=t.length,r,i="value"in An?An.value:An.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ga=i.slice(e,1<r?1-r:void 0)}function va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function Vh(){return!1}function yt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$s:Vh,this.isPropagationStopped=Vh,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=yt(Ri),ms=ge({},Ri,{view:0,detail:0}),X2=yt(ms),wc,Sc,Ji,kl=ge({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(wc=e.screenX-Ji.screenX,Sc=e.screenY-Ji.screenY):Sc=wc=0,Ji=e),wc)},movementY:function(e){return"movementY"in e?e.movementY:Sc}}),Bh=yt(kl),Z2=ge({},kl,{dataTransfer:0}),J2=yt(Z2),q2=ge({},ms,{relatedTarget:0}),bc=yt(q2),eb=ge({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),tb=yt(eb),nb=ge({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rb=yt(nb),ib=ge({},Ri,{data:0}),zh=yt(ib),ob={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ab={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ab[e])?!!t[e]:!1}function Pf(){return lb}var cb=ge({},ms,{key:function(e){if(e.key){var t=ob[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ub=yt(cb),db=ge({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=yt(db),fb=ge({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),pb=yt(fb),hb=ge({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),mb=yt(hb),gb=ge({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vb=yt(gb),yb=[9,13,27,32],Df=mn&&"CompositionEvent"in window,Do=null;mn&&"documentMode"in document&&(Do=document.documentMode);var xb=mn&&"TextEvent"in window&&!Do,uy=mn&&(!Df||Do&&8<Do&&11>=Do),Uh=" ",Hh=!1;function dy(e,t){switch(e){case"keyup":return yb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function wb(e,t){switch(e){case"compositionend":return fy(t);case"keypress":return t.which!==32?null:(Hh=!0,Uh);case"textInput":return e=t.data,e===Uh&&Hh?null:e;default:return null}}function Sb(e,t){if(Kr)return e==="compositionend"||!Df&&dy(e,t)?(e=cy(),ga=Cf=An=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uy&&t.locale!=="ko"?null:t.data;default:return null}}var bb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bb[e.type]:t==="textarea"}function py(e,t,n,r){Uv(r),t=Wa(t,"onChange"),0<t.length&&(n=new Tf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Eo=null,Yo=null;function jb(e){ky(e,0)}function Cl(e){var t=Zr(e);if(Nv(t))return e}function kb(e,t){if(e==="change")return t}var hy=!1;if(mn){var jc;if(mn){var kc="oninput"in document;if(!kc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),kc=typeof Gh.oninput=="function"}jc=kc}else jc=!1;hy=jc&&(!document.documentMode||9<document.documentMode)}function Kh(){Eo&&(Eo.detachEvent("onpropertychange",my),Yo=Eo=null)}function my(e){if(e.propertyName==="value"&&Cl(Yo)){var t=[];py(t,Yo,e,wf(e)),Kv(jb,t)}}function Cb(e,t,n){e==="focusin"?(Kh(),Eo=t,Yo=n,Eo.attachEvent("onpropertychange",my)):e==="focusout"&&Kh()}function Tb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(Yo)}function Pb(e,t){if(e==="click")return Cl(t)}function Db(e,t){if(e==="input"||e==="change")return Cl(t)}function Eb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Eb;function Go(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function Qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xh(e,t){var n=Qh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vy(){for(var e=window,t=Ra();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ra(e.document)}return t}function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ab(e){var t=vy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(r!==null&&Ef(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Xh(n,o);var s=Xh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lb=mn&&"documentMode"in document&&11>=document.documentMode,Qr=null,Ku=null,Ao=null,Qu=!1;function Zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||Qr==null||Qr!==Ra(r)||(r=Qr,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&Go(Ao,r)||(Ao=r,r=Wa(Ku,"onSelect"),0<r.length&&(t=new Tf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function Fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xr={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},Cc={},yy={};mn&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Tl(e){if(Cc[e])return Cc[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yy)return Cc[e]=t[n];return e}var xy=Tl("animationend"),wy=Tl("animationiteration"),Sy=Tl("animationstart"),by=Tl("transitionend"),jy=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){jy.set(e,t),_r(t,[e])}for(var Tc=0;Tc<Jh.length;Tc++){var Pc=Jh[Tc],_b=Pc.toLowerCase(),Ib=Pc[0].toUpperCase()+Pc.slice(1);Gn(_b,"on"+Ib)}Gn(xy,"onAnimationEnd");Gn(wy,"onAnimationIteration");Gn(Sy,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(by,"onTransitionEnd");xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mb=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function qh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_2(r,t,void 0,e),e.currentTarget=null}function ky(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;qh(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;qh(i,l,u),o=c}}}if($a)throw e=Uu,$a=!1,Uu=null,e}function re(e,t){var n=t[ed];n===void 0&&(n=t[ed]=new Set);var r=e+"__bubble";n.has(r)||(Cy(t,e,2,!1),n.add(r))}function Dc(e,t,n){var r=0;t&&(r|=4),Cy(n,e,r,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Vs]){e[Vs]=!0,_v.forEach(function(n){n!=="selectionchange"&&(Mb.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,Dc("selectionchange",!1,t))}}function Cy(e,t,n,r){switch(ly(t)){case 1:var i=K2;break;case 4:i=Q2;break;default:i=kf}n=i.bind(null,t,n,e),i=void 0,!Wu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ec(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=hr(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Kv(function(){var u=o,d=wf(n),f=[];e:{var p=jy.get(e);if(p!==void 0){var m=Tf,y=e;switch(e){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":m=ub;break;case"focusin":y="focus",m=bc;break;case"focusout":y="blur",m=bc;break;case"beforeblur":case"afterblur":m=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=J2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=pb;break;case xy:case wy:case Sy:m=tb;break;case by:m=mb;break;case"scroll":m=X2;break;case"wheel":m=vb;break;case"copy":case"cut":case"paste":m=rb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Wh}var x=(t&4)!==0,b=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=zo(h,g),C!=null&&x.push(Qo(h,C,v)))),b)break;h=h.return}0<x.length&&(p=new m(p,y,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Bu&&(y=n.relatedTarget||n.fromElement)&&(hr(y)||y[gn]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?hr(y):null,y!==null&&(b=Ir(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=Bh,C="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Wh,C="onPointerLeave",g="onPointerEnter",h="pointer"),b=m==null?p:Zr(m),v=y==null?p:Zr(y),p=new x(C,h+"leave",m,n,d),p.target=b,p.relatedTarget=v,C=null,hr(d)===u&&(x=new x(g,h+"enter",y,n,d),x.target=v,x.relatedTarget=b,C=x),b=C,m&&y)t:{for(x=m,g=y,h=0,v=x;v;v=Nr(v))h++;for(v=0,C=g;C;C=Nr(C))v++;for(;0<h-v;)x=Nr(x),h--;for(;0<v-h;)g=Nr(g),v--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=Nr(x),g=Nr(g)}x=null}else x=null;m!==null&&em(f,p,m,x,!1),y!==null&&b!==null&&em(f,b,y,x,!0)}}e:{if(p=u?Zr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var j=kb;else if(Yh(p))if(hy)j=Db;else{j=Tb;var k=Cb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=Pb);if(j&&(j=j(e,u))){py(f,j,n,d);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Ru(p,"number",p.value)}switch(k=u?Zr(u):window,e){case"focusin":(Yh(k)||k.contentEditable==="true")&&(Qr=k,Ku=u,Ao=null);break;case"focusout":Ao=Ku=Qr=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Zh(f,n,d);break;case"selectionchange":if(Lb)break;case"keydown":case"keyup":Zh(f,n,d)}var T;if(Df)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Kr?dy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(uy&&n.locale!=="ko"&&(Kr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Kr&&(T=cy()):(An=d,Cf="value"in An?An.value:An.textContent,Kr=!0)),k=Wa(u,P),0<k.length&&(P=new zh(P,e,null,n,d),f.push({event:P,listeners:k}),T?P.data=T:(T=fy(n),T!==null&&(P.data=T)))),(T=xb?wb(e,n):Sb(e,n))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(d=new zh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}ky(f,t)})}function Qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zo(e,n),o!=null&&r.unshift(Qo(e,o,i)),o=zo(e,t),o!=null&&r.push(Qo(e,o,i))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function em(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=zo(n,o),c!=null&&s.unshift(Qo(n,c,l))):i||(c=zo(n,o),c!=null&&s.push(Qo(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ob=/\r\n?/g,Rb=/\u0000|\uFFFD/g;function tm(e){return(typeof e=="string"?e:""+e).replace(Ob,`
`).replace(Rb,"")}function Bs(e,t,n){if(t=tm(t),tm(e)!==t&&n)throw Error(L(425))}function Ua(){}var Xu=null,Zu=null;function Ju(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,Nb=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,$b=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(e){return nm.resolve(null).then(e).catch(Fb)}:qu;function Fb(e){setTimeout(function(){throw e})}function Ac(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ho(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),qt="__reactFiber$"+Ni,Xo="__reactProps$"+Ni,gn="__reactContainer$"+Ni,ed="__reactEvents$"+Ni,Vb="__reactListeners$"+Ni,Bb="__reactHandles$"+Ni;function hr(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rm(e);e!==null;){if(n=e[qt])return n;e=rm(e)}return t}e=n,n=e.parentNode}return null}function gs(e){return e=e[qt]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Pl(e){return e[Xo]||null}var td=[],Jr=-1;function Kn(e){return{current:e}}function oe(e){0>Jr||(e.current=td[Jr],td[Jr]=null,Jr--)}function ne(e,t){Jr++,td[Jr]=e.current,e.current=t}var Un={},Qe=Kn(Un),at=Kn(!1),Pr=Un;function wi(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function Ha(){oe(at),oe(Qe)}function im(e,t,n){if(Qe.current!==Un)throw Error(L(168));ne(Qe,t),ne(at,n)}function Ty(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,C2(e)||"Unknown",i));return ge({},n,r)}function Ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,Pr=Qe.current,ne(Qe,e),ne(at,at.current),!0}function om(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Ty(e,t,Pr),r.__reactInternalMemoizedMergedChildContext=e,oe(at),oe(Qe),ne(Qe,e)):oe(at),ne(at,n)}var cn=null,Dl=!1,Lc=!1;function Py(e){cn===null?cn=[e]:cn.push(e)}function zb(e){Dl=!0,Py(e)}function Qn(){if(!Lc&&cn!==null){Lc=!0;var e=0,t=te;try{var n=cn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,Dl=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),Jv(Sf,Qn),i}finally{te=t,Lc=!1}}return null}var qr=[],ei=0,Ga=null,Ka=0,jt=[],kt=0,Dr=null,un=1,dn="";function ur(e,t){qr[ei++]=Ka,qr[ei++]=Ga,Ga=e,Ka=t}function Dy(e,t,n){jt[kt++]=un,jt[kt++]=dn,jt[kt++]=Dr,Dr=e;var r=un;e=dn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,un=1<<32-Ft(t)+i|n<<i|r,dn=o+e}else un=1<<o|n<<i|r,dn=e}function Af(e){e.return!==null&&(ur(e,1),Dy(e,1,0))}function Lf(e){for(;e===Ga;)Ga=qr[--ei],qr[ei]=null,Ka=qr[--ei],qr[ei]=null;for(;e===Dr;)Dr=jt[--kt],jt[kt]=null,dn=jt[--kt],jt[kt]=null,un=jt[--kt],jt[kt]=null}var pt=null,ft=null,ue=!1,Nt=null;function Ey(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:un,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ft=null,!0):!1;default:return!1}}function nd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rd(e){if(ue){var t=ft;if(t){var n=t;if(!sm(e,t)){if(nd(e))throw Error(L(418));t=Rn(n.nextSibling);var r=pt;t&&sm(e,t)?Ey(r,n):(e.flags=e.flags&-4097|2,ue=!1,pt=e)}}else{if(nd(e))throw Error(L(418));e.flags=e.flags&-4097|2,ue=!1,pt=e}}}function am(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function zs(e){if(e!==pt)return!1;if(!ue)return am(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ju(e.type,e.memoizedProps)),t&&(t=ft)){if(nd(e))throw Ay(),Error(L(418));for(;t;)Ey(e,t),t=Rn(t.nextSibling)}if(am(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?Rn(e.stateNode.nextSibling):null;return!0}function Ay(){for(var e=ft;e;)e=Rn(e.nextSibling)}function Si(){ft=pt=null,ue=!1}function _f(e){Nt===null?Nt=[e]:Nt.push(e)}var Wb=wn.ReactCurrentBatchConfig;function qi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Ws(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lm(e){var t=e._init;return t(e._payload)}function Ly(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Vn(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,v,C){return h===null||h.tag!==6?(h=$c(v,g.mode,C),h.return=g,h):(h=i(h,v),h.return=g,h)}function c(g,h,v,C){var j=v.type;return j===Gr?d(g,h,v.props.children,C,v.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Tn&&lm(j)===h.type)?(C=i(h,v.props),C.ref=qi(g,h,v),C.return=g,C):(C=ka(v.type,v.key,v.props,null,g.mode,C),C.ref=qi(g,h,v),C.return=g,C)}function u(g,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Fc(v,g.mode,C),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,C,j){return h===null||h.tag!==7?(h=Sr(v,g.mode,C,j),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$c(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _s:return v=ka(h.type,h.key,h.props,null,g.mode,v),v.ref=qi(g,null,h),v.return=g,v;case Yr:return h=Fc(h,g.mode,v),h.return=g,h;case Tn:var C=h._init;return f(g,C(h._payload),v)}if(vo(h)||Ki(h))return h=Sr(h,g.mode,v,null),h.return=g,h;Ws(g,h)}return null}function p(g,h,v,C){var j=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:l(g,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _s:return v.key===j?c(g,h,v,C):null;case Yr:return v.key===j?u(g,h,v,C):null;case Tn:return j=v._init,p(g,h,j(v._payload),C)}if(vo(v)||Ki(v))return j!==null?null:d(g,h,v,C,null);Ws(g,v)}return null}function m(g,h,v,C,j){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,l(h,g,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case _s:return g=g.get(C.key===null?v:C.key)||null,c(h,g,C,j);case Yr:return g=g.get(C.key===null?v:C.key)||null,u(h,g,C,j);case Tn:var k=C._init;return m(g,h,v,k(C._payload),j)}if(vo(C)||Ki(C))return g=g.get(v)||null,d(h,g,C,j,null);Ws(h,C)}return null}function y(g,h,v,C){for(var j=null,k=null,T=h,P=h=0,E=null;T!==null&&P<v.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var _=p(g,T,v[P],C);if(_===null){T===null&&(T=E);break}e&&T&&_.alternate===null&&t(g,T),h=o(_,h,P),k===null?j=_:k.sibling=_,k=_,T=E}if(P===v.length)return n(g,T),ue&&ur(g,P),j;if(T===null){for(;P<v.length;P++)T=f(g,v[P],C),T!==null&&(h=o(T,h,P),k===null?j=T:k.sibling=T,k=T);return ue&&ur(g,P),j}for(T=r(g,T);P<v.length;P++)E=m(T,g,P,v[P],C),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?P:E.key),h=o(E,h,P),k===null?j=E:k.sibling=E,k=E);return e&&T.forEach(function(N){return t(g,N)}),ue&&ur(g,P),j}function x(g,h,v,C){var j=Ki(v);if(typeof j!="function")throw Error(L(150));if(v=j.call(v),v==null)throw Error(L(151));for(var k=j=null,T=h,P=h=0,E=null,_=v.next();T!==null&&!_.done;P++,_=v.next()){T.index>P?(E=T,T=null):E=T.sibling;var N=p(g,T,_.value,C);if(N===null){T===null&&(T=E);break}e&&T&&N.alternate===null&&t(g,T),h=o(N,h,P),k===null?j=N:k.sibling=N,k=N,T=E}if(_.done)return n(g,T),ue&&ur(g,P),j;if(T===null){for(;!_.done;P++,_=v.next())_=f(g,_.value,C),_!==null&&(h=o(_,h,P),k===null?j=_:k.sibling=_,k=_);return ue&&ur(g,P),j}for(T=r(g,T);!_.done;P++,_=v.next())_=m(T,g,P,_.value,C),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?P:_.key),h=o(_,h,P),k===null?j=_:k.sibling=_,k=_);return e&&T.forEach(function(I){return t(g,I)}),ue&&ur(g,P),j}function b(g,h,v,C){if(typeof v=="object"&&v!==null&&v.type===Gr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _s:e:{for(var j=v.key,k=h;k!==null;){if(k.key===j){if(j=v.type,j===Gr){if(k.tag===7){n(g,k.sibling),h=i(k,v.props.children),h.return=g,g=h;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Tn&&lm(j)===k.type){n(g,k.sibling),h=i(k,v.props),h.ref=qi(g,k,v),h.return=g,g=h;break e}n(g,k);break}else t(g,k);k=k.sibling}v.type===Gr?(h=Sr(v.props.children,g.mode,C,v.key),h.return=g,g=h):(C=ka(v.type,v.key,v.props,null,g.mode,C),C.ref=qi(g,h,v),C.return=g,g=C)}return s(g);case Yr:e:{for(k=v.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Fc(v,g.mode,C),h.return=g,g=h}return s(g);case Tn:return k=v._init,b(g,h,k(v._payload),C)}if(vo(v))return y(g,h,v,C);if(Ki(v))return x(g,h,v,C);Ws(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=$c(v,g.mode,C),h.return=g,g=h),s(g)):n(g,h)}return b}var bi=Ly(!0),_y=Ly(!1),Qa=Kn(null),Xa=null,ti=null,If=null;function Mf(){If=ti=Xa=null}function Of(e){var t=Qa.current;oe(Qa),e._currentValue=t}function id(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vi(e,t){Xa=e,If=ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(If!==e)if(e={context:e,memoizedValue:t,next:null},ti===null){if(Xa===null)throw Error(L(308));ti=e,Xa.dependencies={lanes:0,firstContext:e}}else ti=ti.next=e;return t}var mr=null;function Rf(e){mr===null?mr=[e]:mr.push(e)}function Iy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rf(t)):(n.next=i.next,i.next=n),t.interleaved=n,vn(e,r)}function vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vn(e,n)}return i=r.interleaved,i===null?(t.next=t,Rf(r)):(t.next=i.next,i.next=t),r.interleaved=t,vn(e,n)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bf(e,n)}}function cm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var i=e.updateQueue;Pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,d=u=c=null,l=o;do{var p=l.lane,m=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(p=t,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=ge({},f,p);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ar|=s,e.lanes=s,e.memoizedState=f}}function um(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var vs={},nn=Kn(vs),Zo=Kn(vs),Jo=Kn(vs);function gr(e){if(e===vs)throw Error(L(174));return e}function $f(e,t){switch(ne(Jo,t),ne(Zo,e),ne(nn,vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$u(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$u(t,e)}oe(nn),ne(nn,t)}function ji(){oe(nn),oe(Zo),oe(Jo)}function Oy(e){gr(Jo.current);var t=gr(nn.current),n=$u(t,e.type);t!==n&&(ne(Zo,e),ne(nn,n))}function Ff(e){Zo.current===e&&(oe(nn),oe(Zo))}var pe=Kn(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _c=[];function Vf(){for(var e=0;e<_c.length;e++)_c[e]._workInProgressVersionPrimary=null;_c.length=0}var xa=wn.ReactCurrentDispatcher,Ic=wn.ReactCurrentBatchConfig,Er=0,me=null,Ae=null,_e=null,qa=!1,Lo=!1,qo=0,Ub=0;function ze(){throw Error(L(321))}function Bf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function zf(e,t,n,r,i,o){if(Er=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xa.current=e===null||e.memoizedState===null?Kb:Qb,e=n(r,i),Lo){o=0;do{if(Lo=!1,qo=0,25<=o)throw Error(L(301));o+=1,_e=Ae=null,t.updateQueue=null,xa.current=Xb,e=n(r,i)}while(Lo)}if(xa.current=el,t=Ae!==null&&Ae.next!==null,Er=0,_e=Ae=me=null,qa=!1,t)throw Error(L(300));return e}function Wf(){var e=qo!==0;return qo=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?me.memoizedState=_e=e:_e=_e.next=e,_e}function Et(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=_e===null?me.memoizedState:_e.next;if(t!==null)_e=t,Ae=e;else{if(e===null)throw Error(L(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},_e===null?me.memoizedState=_e=e:_e=_e.next=e}return _e}function es(e,t){return typeof t=="function"?t(e):t}function Mc(e){var t=Et(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((Er&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,s=r):c=c.next=f,me.lanes|=d,Ar|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,zt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oc(e){var t=Et(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);zt(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ry(){}function Ny(e,t){var n=me,r=Et(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,st=!0),r=r.queue,Uf(Vy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ts(9,Fy.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(L(349));Er&30||$y(n,t,i)}return i}function $y(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fy(e,t,n,r){t.value=n,t.getSnapshot=r,By(t)&&zy(e)}function Vy(e,t,n){return n(function(){By(t)&&zy(e)})}function By(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function zy(e){var t=vn(e,1);t!==null&&Vt(t,e,1,-1)}function dm(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=Gb.bind(null,me,e),[t.memoizedState,e]}function ts(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wy(){return Et().memoizedState}function wa(e,t,n,r){var i=Zt();me.flags|=e,i.memoizedState=ts(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var s=Ae.memoizedState;if(o=s.destroy,r!==null&&Bf(r,s.deps)){i.memoizedState=ts(t,n,o,r);return}}me.flags|=e,i.memoizedState=ts(1|t,n,o,r)}function fm(e,t){return wa(8390656,8,e,t)}function Uf(e,t){return El(2048,8,e,t)}function Uy(e,t){return El(4,2,e,t)}function Hy(e,t){return El(4,4,e,t)}function Yy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gy(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,Yy.bind(null,t,e),n)}function Hf(){}function Ky(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qy(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xy(e,t,n){return Er&21?(zt(n,t)||(n=ty(),me.lanes|=n,Ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function Hb(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Ic.transition;Ic.transition={};try{e(!1),t()}finally{te=n,Ic.transition=r}}function Zy(){return Et().memoizedState}function Yb(e,t,n){var r=Fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jy(e))qy(t,n);else if(n=Iy(e,t,n,r),n!==null){var i=Je();Vt(n,e,r,i),ex(n,t,r)}}function Gb(e,t,n){var r=Fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jy(e))qy(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,s)){var c=t.interleaved;c===null?(i.next=i,Rf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Iy(e,t,i,r),n!==null&&(i=Je(),Vt(n,e,r,i),ex(n,t,r))}}function Jy(e){var t=e.alternate;return e===me||t!==null&&t===me}function qy(e,t){Lo=qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ex(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bf(e,n)}}var el={readContext:Dt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Kb={readContext:Dt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:fm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wa(4194308,4,Yy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return wa(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yb.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:dm,useDebugValue:Hf,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=dm(!1),t=e[0];return e=Hb.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Zt();if(ue){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Me===null)throw Error(L(349));Er&30||$y(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fm(Vy.bind(null,r,o,e),[e]),r.flags|=2048,ts(9,Fy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Me.identifierPrefix;if(ue){var n=dn,r=un;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ub++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qb={readContext:Dt,useCallback:Ky,useContext:Dt,useEffect:Uf,useImperativeHandle:Gy,useInsertionEffect:Uy,useLayoutEffect:Hy,useMemo:Qy,useReducer:Mc,useRef:Wy,useState:function(){return Mc(es)},useDebugValue:Hf,useDeferredValue:function(e){var t=Et();return Xy(t,Ae.memoizedState,e)},useTransition:function(){var e=Mc(es)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Ry,useSyncExternalStore:Ny,useId:Zy,unstable_isNewReconciler:!1},Xb={readContext:Dt,useCallback:Ky,useContext:Dt,useEffect:Uf,useImperativeHandle:Gy,useInsertionEffect:Uy,useLayoutEffect:Hy,useMemo:Qy,useReducer:Oc,useRef:Wy,useState:function(){return Oc(es)},useDebugValue:Hf,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:Xy(t,Ae.memoizedState,e)},useTransition:function(){var e=Oc(es)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Ry,useSyncExternalStore:Ny,useId:Zy,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function od(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Fn(e),o=fn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(Vt(t,e,i,r),ya(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Fn(e),o=fn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(Vt(t,e,i,r),ya(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Fn(e),i=fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(Vt(t,e,r,n),ya(t,e,r))}};function pm(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Go(n,r)||!Go(i,o):!0}function tx(e,t,n){var r=!1,i=Un,o=t.contextType;return typeof o=="object"&&o!==null?o=Dt(o):(i=lt(t)?Pr:Qe.current,r=t.contextTypes,o=(r=r!=null)?wi(e,i):Un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function sd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Dt(o):(o=lt(t)?Pr:Qe.current,i.context=wi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(od(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Al.enqueueReplaceState(i,i.state,null),Za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,t){try{var n="",r=t;do n+=k2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ad(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zb=typeof WeakMap=="function"?WeakMap:Map;function nx(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,vd=r),ad(e,t)},n}function rx(e,t,n){n=fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ad(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ad(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function mm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dj.bind(null,e,t,n),t.then(e,e))}function gm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var Jb=wn.ReactCurrentOwner,st=!1;function Ze(e,t,n,r){t.child=e===null?_y(t,null,n,r):bi(t,e.child,n,r)}function ym(e,t,n,r,i){n=n.render;var o=t.ref;return vi(t,i),r=zf(e,t,n,r,o,i),n=Wf(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(ue&&n&&Af(t),t.flags|=1,Ze(e,t,r,i),t.child)}function xm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!qf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ix(e,t,o,r,i)):(e=ka(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(s,r)&&e.ref===t.ref)return yn(e,t,i)}return t.flags|=1,e=Vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ix(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Go(o,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,yn(e,t,i)}return ld(e,t,n,r,i)}function ox(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ri,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(ri,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(ri,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(ri,dt),dt|=r;return Ze(e,t,i,n),t.child}function sx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ld(e,t,n,r,i){var o=lt(n)?Pr:Qe.current;return o=wi(t,o),vi(t,i),n=zf(e,t,n,r,o,i),r=Wf(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(ue&&r&&Af(t),t.flags|=1,Ze(e,t,n,i),t.child)}function wm(e,t,n,r,i){if(lt(n)){var o=!0;Ya(t)}else o=!1;if(vi(t,i),t.stateNode===null)Sa(e,t),tx(t,n,r),sd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=lt(n)?Pr:Qe.current,u=wi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&hm(t,s,r,u),Pn=!1;var p=t.memoizedState;s.state=p,Za(t,r,s,i),c=t.memoizedState,l!==r||p!==c||at.current||Pn?(typeof d=="function"&&(od(t,n,d,r),c=t.memoizedState),(l=Pn||pm(t,n,l,r,p,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,My(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),s.props=u,f=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Dt(c):(c=lt(n)?Pr:Qe.current,c=wi(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||p!==c)&&hm(t,s,r,c),Pn=!1,p=t.memoizedState,s.state=p,Za(t,r,s,i);var y=t.memoizedState;l!==f||p!==y||at.current||Pn?(typeof m=="function"&&(od(t,n,m,r),y=t.memoizedState),(u=Pn||pm(t,n,u,r,p,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cd(e,t,n,r,o,i)}function cd(e,t,n,r,i,o){sx(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&om(t,n,!1),yn(e,t,o);r=t.stateNode,Jb.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bi(t,e.child,null,o),t.child=bi(t,null,l,o)):Ze(e,t,l,o),t.memoizedState=r.state,i&&om(t,n,!0),t.child}function ax(e){var t=e.stateNode;t.pendingContext?im(e,t.pendingContext,t.pendingContext!==t.context):t.context&&im(e,t.context,!1),$f(e,t.containerInfo)}function Sm(e,t,n,r,i){return Si(),_f(i),t.flags|=256,Ze(e,t,n,r),t.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(e){return{baseLanes:e,cachePool:null,transitions:null}}function lx(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(pe,i&1),e===null)return rd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Il(s,r,0,null),e=Sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=dd(n),t.memoizedState=ud,e):Yf(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qb(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Vn(l,o):(o=Sr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?dd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ud,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yf(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Us(e,t,n,r){return r!==null&&_f(r),bi(t,e.child,null,n),e=Yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qb(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Rc(Error(L(422))),Us(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Il({mode:"visible",children:r.children},i,0,null),o=Sr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bi(t,e.child,null,s),t.child.memoizedState=dd(s),t.memoizedState=ud,o);if(!(t.mode&1))return Us(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(L(419)),r=Rc(o,r,void 0),Us(e,t,s,r)}if(l=(s&e.childLanes)!==0,st||l){if(r=Me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vn(e,i),Vt(r,e,i,-1))}return Jf(),r=Rc(Error(L(421))),Us(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=Rn(i.nextSibling),pt=t,ue=!0,Nt=null,e!==null&&(jt[kt++]=un,jt[kt++]=dn,jt[kt++]=Dr,un=e.id,dn=e.overflow,Dr=t),t=Yf(t,r.children),t.flags|=4096,t)}function bm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),id(e.return,t,n)}function Nc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,n,t);else if(e.tag===19)bm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Nc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ja(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Nc(t,!0,n,null,o);break;case"together":Nc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ej(e,t,n){switch(t.tag){case 3:ax(t),Si();break;case 5:Oy(t);break;case 1:lt(t.type)&&Ya(t);break;case 4:$f(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?lx(e,t,n):(ne(pe,pe.current&1),e=yn(e,t,n),e!==null?e.sibling:null);ne(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,ox(e,t,n)}return yn(e,t,n)}var ux,fd,dx,fx;ux=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};dx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(nn.current);var o=null;switch(n){case"input":i=Mu(e,i),r=Mu(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Nu(e,i),r=Nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ua)}Fu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};fx=function(e,t,n,r){n!==r&&(t.flags|=4)};function eo(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tj(e,t,n){var r=t.pendingProps;switch(Lf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return lt(t.type)&&Ha(),We(t),null;case 3:return r=t.stateNode,ji(),oe(at),oe(Qe),Vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(wd(Nt),Nt=null))),fd(e,t),We(t),null;case 5:Ff(t);var i=gr(Jo.current);if(n=t.type,e!==null&&t.stateNode!=null)dx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return We(t),null}if(e=gr(nn.current),zs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qt]=t,r[Xo]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)re(xo[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Lh(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Ih(r,o),re("invalid",r)}Fu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Bs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Bs(r.textContent,l,e),i=["children",""+l]):Vo.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&re("scroll",r)}switch(n){case"input":Is(r),_h(r,o,!0);break;case"textarea":Is(r),Mh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ua)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[qt]=t,e[Xo]=r,ux(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vu(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<xo.length;i++)re(xo[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":Lh(e,r),i=Mu(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),re("invalid",e);break;case"textarea":Ih(e,r),i=Nu(e,r),re("invalid",e);break;default:i=r}Fu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Wv(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Bv(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bo(e,c):typeof c=="number"&&Bo(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&re("scroll",e):c!=null&&gf(e,o,c,s))}switch(n){case"input":Is(e),_h(e,r,!1);break;case"textarea":Is(e),Mh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pi(e,!!r.multiple,o,!1):r.defaultValue!=null&&pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)fx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=gr(Jo.current),gr(nn.current),zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(o=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Bs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return We(t),null;case 13:if(oe(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&ft!==null&&t.mode&1&&!(t.flags&128))Ay(),Si(),t.flags|=98560,o=!1;else if(o=zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[qt]=t}else Si(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Nt!==null&&(wd(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):Jf())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return ji(),fd(e,t),e===null&&Ko(t.stateNode.containerInfo),We(t),null;case 10:return Of(t.type._context),We(t),null;case 17:return lt(t.type)&&Ha(),We(t),null;case 19:if(oe(pe),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)eo(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ja(e),s!==null){for(t.flags|=128,eo(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>Ci&&(t.flags|=128,r=!0,eo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ja(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ue)return We(t),null}else 2*Se()-o.renderingStartTime>Ci&&n!==1073741824&&(t.flags|=128,r=!0,eo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=pe.current,ne(pe,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Zf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function nj(e,t){switch(Lf(t),t.tag){case 1:return lt(t.type)&&Ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(),oe(at),oe(Qe),Vf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ff(t),null;case 13:if(oe(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(pe),null;case 4:return ji(),null;case 10:return Of(t.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var Hs=!1,He=!1,rj=typeof WeakSet=="function"?WeakSet:Set,$=null;function ni(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function pd(e,t,n){try{n()}catch(r){xe(e,t,r)}}var jm=!1;function ij(e,t){if(Xu=Ba,e=vy(),Ef(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=s),p===o&&++d===r&&(c=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:e,selectionRange:n},Ba=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ot(t.type,x),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(C){xe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=jm,jm=!1,y}function _o(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pd(t,n,o)}i=i.next}while(i!==r)}}function Ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function px(e){var t=e.alternate;t!==null&&(e.alternate=null,px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Xo],delete t[ed],delete t[Vb],delete t[Bb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hx(e){return e.tag===5||e.tag===3||e.tag===4}function km(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function md(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ua));else if(r!==4&&(e=e.child,e!==null))for(md(e,t,n),e=e.sibling;e!==null;)md(e,t,n),e=e.sibling}function gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gd(e,t,n),e=e.sibling;e!==null;)gd(e,t,n),e=e.sibling}var Ne=null,Rt=!1;function bn(e,t,n){for(n=n.child;n!==null;)mx(e,t,n),n=n.sibling}function mx(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:He||ni(n,t);case 6:var r=Ne,i=Rt;Ne=null,bn(e,t,n),Ne=r,Rt=i,Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?Ac(e.parentNode,n):e.nodeType===1&&Ac(e,n),Ho(e)):Ac(Ne,n.stateNode));break;case 4:r=Ne,i=Rt,Ne=n.stateNode.containerInfo,Rt=!0,bn(e,t,n),Ne=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&pd(n,t,s),i=i.next}while(i!==r)}bn(e,t,n);break;case 1:if(!He&&(ni(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,bn(e,t,n),He=r):bn(e,t,n);break;default:bn(e,t,n)}}function Cm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rj),t.forEach(function(r){var i=pj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,Rt=!1;break e;case 3:Ne=l.stateNode.containerInfo,Rt=!0;break e;case 4:Ne=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Ne===null)throw Error(L(160));mx(o,s,i),Ne=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gx(t,e),t=t.sibling}function gx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ht(e),r&4){try{_o(3,e,e.return),Ll(3,e)}catch(x){xe(e,e.return,x)}try{_o(5,e,e.return)}catch(x){xe(e,e.return,x)}}break;case 1:It(t,e),Ht(e),r&512&&n!==null&&ni(n,n.return);break;case 5:if(It(t,e),Ht(e),r&512&&n!==null&&ni(n,n.return),e.flags&32){var i=e.stateNode;try{Bo(i,"")}catch(x){xe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&$v(i,o),Vu(l,s);var u=Vu(l,o);for(s=0;s<c.length;s+=2){var d=c[s],f=c[s+1];d==="style"?Wv(i,f):d==="dangerouslySetInnerHTML"?Bv(i,f):d==="children"?Bo(i,f):gf(i,d,f,u)}switch(l){case"input":Ou(i,o);break;case"textarea":Fv(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?pi(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?pi(i,!!o.multiple,o.defaultValue,!0):pi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xo]=o}catch(x){xe(e,e.return,x)}}break;case 6:if(It(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){xe(e,e.return,x)}}break;case 3:if(It(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(x){xe(e,e.return,x)}break;case 4:It(t,e),Ht(e);break;case 13:It(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qf=Se())),r&4&&Cm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||d,It(t,e),He=u):It(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(f=$=d;$!==null;){switch(p=$,m=p.child,p.tag){case 0:case 11:case 14:case 15:_o(4,p,p.return);break;case 1:ni(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:ni(p,p.return);break;case 22:if(p.memoizedState!==null){Pm(f);continue}}m!==null?(m.return=p,$=m):Pm(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=zv("display",s))}catch(x){xe(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){xe(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Ht(e),r&4&&Cm(e);break;case 21:break;default:It(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hx(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var o=km(e);gd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=km(e);md(e,l,s);break;default:throw Error(L(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oj(e,t,n){$=e,vx(e)}function vx(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Hs;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||He;l=Hs;var u=He;if(Hs=s,(He=c)&&!u)for($=i;$!==null;)s=$,c=s.child,s.tag===22&&s.memoizedState!==null?Dm(i):c!==null?(c.return=s,$=c):Dm(i);for(;o!==null;)$=o,vx(o),o=o.sibling;$=i,Hs=l,He=u}Tm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Tm(e)}}function Tm(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&um(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}um(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ho(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}He||t.flags&512&&hd(t)}catch(p){xe(t,t.return,p)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Pm(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Dm(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ll(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xe(t,i,c)}}var o=t.return;try{hd(t)}catch(c){xe(t,o,c)}break;case 5:var s=t.return;try{hd(t)}catch(c){xe(t,s,c)}}}catch(c){xe(t,t.return,c)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var sj=Math.ceil,tl=wn.ReactCurrentDispatcher,Gf=wn.ReactCurrentOwner,Tt=wn.ReactCurrentBatchConfig,q=0,Me=null,Ce=null,Ve=0,dt=0,ri=Kn(0),Le=0,ns=null,Ar=0,_l=0,Kf=0,Io=null,ot=null,Qf=0,Ci=1/0,an=null,nl=!1,vd=null,$n=null,Ys=!1,Ln=null,rl=0,Mo=0,yd=null,ba=-1,ja=0;function Je(){return q&6?Se():ba!==-1?ba:ba=Se()}function Fn(e){return e.mode&1?q&2&&Ve!==0?Ve&-Ve:Wb.transition!==null?(ja===0&&(ja=ty()),ja):(e=te,e!==0||(e=window.event,e=e===void 0?16:ly(e.type)),e):1}function Vt(e,t,n,r){if(50<Mo)throw Mo=0,yd=null,Error(L(185));hs(e,n,r),(!(q&2)||e!==Me)&&(e===Me&&(!(q&2)&&(_l|=n),Le===4&&En(e,Ve)),ct(e,r),n===1&&q===0&&!(t.mode&1)&&(Ci=Se()+500,Dl&&Qn()))}function ct(e,t){var n=e.callbackNode;W2(e,t);var r=Va(e,e===Me?Ve:0);if(r===0)n!==null&&Nh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nh(n),t===1)e.tag===0?zb(Em.bind(null,e)):Py(Em.bind(null,e)),$b(function(){!(q&6)&&Qn()}),n=null;else{switch(ny(r)){case 1:n=Sf;break;case 4:n=qv;break;case 16:n=Fa;break;case 536870912:n=ey;break;default:n=Fa}n=Cx(n,yx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yx(e,t){if(ba=-1,ja=0,q&6)throw Error(L(327));var n=e.callbackNode;if(yi()&&e.callbackNode!==n)return null;var r=Va(e,e===Me?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var i=q;q|=2;var o=wx();(Me!==e||Ve!==t)&&(an=null,Ci=Se()+500,wr(e,t));do try{cj();break}catch(l){xx(e,l)}while(!0);Mf(),tl.current=o,q=i,Ce!==null?t=0:(Me=null,Ve=0,t=Le)}if(t!==0){if(t===2&&(i=Hu(e),i!==0&&(r=i,t=xd(e,i))),t===1)throw n=ns,wr(e,0),En(e,r),ct(e,Se()),n;if(t===6)En(e,r);else{if(i=e.current.alternate,!(r&30)&&!aj(i)&&(t=il(e,r),t===2&&(o=Hu(e),o!==0&&(r=o,t=xd(e,o))),t===1))throw n=ns,wr(e,0),En(e,r),ct(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:dr(e,ot,an);break;case 3:if(En(e,r),(r&130023424)===r&&(t=Qf+500-Se(),10<t)){if(Va(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qu(dr.bind(null,e,ot,an),t);break}dr(e,ot,an);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ft(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sj(r/1960))-r,10<r){e.timeoutHandle=qu(dr.bind(null,e,ot,an),r);break}dr(e,ot,an);break;case 5:dr(e,ot,an);break;default:throw Error(L(329))}}}return ct(e,Se()),e.callbackNode===n?yx.bind(null,e):null}function xd(e,t){var n=Io;return e.current.memoizedState.isDehydrated&&(wr(e,t).flags|=256),e=il(e,t),e!==2&&(t=ot,ot=n,t!==null&&wd(t)),e}function wd(e){ot===null?ot=e:ot.push.apply(ot,e)}function aj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~Kf,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Em(e){if(q&6)throw Error(L(327));yi();var t=Va(e,0);if(!(t&1))return ct(e,Se()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=Hu(e);r!==0&&(t=r,n=xd(e,r))}if(n===1)throw n=ns,wr(e,0),En(e,t),ct(e,Se()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dr(e,ot,an),ct(e,Se()),null}function Xf(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Ci=Se()+500,Dl&&Qn())}}function Lr(e){Ln!==null&&Ln.tag===0&&!(q&6)&&yi();var t=q;q|=1;var n=Tt.transition,r=te;try{if(Tt.transition=null,te=1,e)return e()}finally{te=r,Tt.transition=n,q=t,!(q&6)&&Qn()}}function Zf(){dt=ri.current,oe(ri)}function wr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nb(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ha();break;case 3:ji(),oe(at),oe(Qe),Vf();break;case 5:Ff(r);break;case 4:ji();break;case 13:oe(pe);break;case 19:oe(pe);break;case 10:Of(r.type._context);break;case 22:case 23:Zf()}n=n.return}if(Me=e,Ce=e=Vn(e.current,null),Ve=dt=t,Le=0,ns=null,Kf=_l=Ar=0,ot=Io=null,mr!==null){for(t=0;t<mr.length;t++)if(n=mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}mr=null}return e}function xx(e,t){do{var n=Ce;try{if(Mf(),xa.current=el,qa){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qa=!1}if(Er=0,_e=Ae=me=null,Lo=!1,qo=0,Gf.current=null,n===null||n.return===null){Le=1,ns=t,Ce=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Ve,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gm(s);if(m!==null){m.flags&=-257,vm(m,s,l,o,t),m.mode&1&&mm(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){mm(o,u,t),Jf();break e}c=Error(L(426))}}else if(ue&&l.mode&1){var b=gm(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),vm(b,s,l,o,t),_f(ki(c,l));break e}}o=c=ki(c,l),Le!==4&&(Le=2),Io===null?Io=[o]:Io.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=nx(o,c,t);cm(o,g);break e;case 1:l=c;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($n===null||!$n.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=rx(o,l,t);cm(o,C);break e}}o=o.return}while(o!==null)}bx(n)}catch(j){t=j,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function wx(){var e=tl.current;return tl.current=el,e===null?el:e}function Jf(){(Le===0||Le===3||Le===2)&&(Le=4),Me===null||!(Ar&268435455)&&!(_l&268435455)||En(Me,Ve)}function il(e,t){var n=q;q|=2;var r=wx();(Me!==e||Ve!==t)&&(an=null,wr(e,t));do try{lj();break}catch(i){xx(e,i)}while(!0);if(Mf(),q=n,tl.current=r,Ce!==null)throw Error(L(261));return Me=null,Ve=0,Le}function lj(){for(;Ce!==null;)Sx(Ce)}function cj(){for(;Ce!==null&&!M2();)Sx(Ce)}function Sx(e){var t=kx(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?bx(e):Ce=t,Gf.current=null}function bx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nj(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ce=null;return}}else if(n=tj(n,t,dt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Le===0&&(Le=5)}function dr(e,t,n){var r=te,i=Tt.transition;try{Tt.transition=null,te=1,uj(e,t,n,r)}finally{Tt.transition=i,te=r}return null}function uj(e,t,n,r){do yi();while(Ln!==null);if(q&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(U2(e,o),e===Me&&(Ce=Me=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ys||(Ys=!0,Cx(Fa,function(){return yi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Tt.transition,Tt.transition=null;var s=te;te=1;var l=q;q|=4,Gf.current=null,ij(e,n),gx(n,e),Ab(Zu),Ba=!!Xu,Zu=Xu=null,e.current=n,oj(n),O2(),q=l,te=s,Tt.transition=o}else e.current=n;if(Ys&&(Ys=!1,Ln=e,rl=i),o=e.pendingLanes,o===0&&($n=null),$2(n.stateNode),ct(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=vd,vd=null,e;return rl&1&&e.tag!==0&&yi(),o=e.pendingLanes,o&1?e===yd?Mo++:(Mo=0,yd=e):Mo=0,Qn(),null}function yi(){if(Ln!==null){var e=ny(rl),t=Tt.transition,n=te;try{if(Tt.transition=null,te=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,rl=0,q&6)throw Error(L(331));var i=q;for(q|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:_o(8,d,o)}var f=d.child;if(f!==null)f.return=d,$=f;else for(;$!==null;){d=$;var p=d.sibling,m=d.return;if(px(d),d===u){$=null;break}if(p!==null){p.return=m,$=p;break}$=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_o(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,$=g;break e}$=o.return}}var h=e.current;for($=h;$!==null;){s=$;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,$=v;else e:for(s=h;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ll(9,l)}}catch(j){xe(l,l.return,j)}if(l===s){$=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,$=C;break e}$=l.return}}if(q=i,Qn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(jl,e)}catch{}r=!0}return r}finally{te=n,Tt.transition=t}}return!1}function Am(e,t,n){t=ki(n,t),t=nx(e,t,1),e=Nn(e,t,1),t=Je(),e!==null&&(hs(e,1,t),ct(e,t))}function xe(e,t,n){if(e.tag===3)Am(e,e,n);else for(;t!==null;){if(t.tag===3){Am(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=ki(n,e),e=rx(t,e,1),t=Nn(t,e,1),e=Je(),t!==null&&(hs(t,1,e),ct(t,e));break}}t=t.return}}function dj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ve&n)===n&&(Le===4||Le===3&&(Ve&130023424)===Ve&&500>Se()-Qf?wr(e,0):Kf|=n),ct(e,t)}function jx(e,t){t===0&&(e.mode&1?(t=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):t=1);var n=Je();e=vn(e,t),e!==null&&(hs(e,t,n),ct(e,n))}function fj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jx(e,n)}function pj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),jx(e,n)}var kx;kx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,ej(e,t,n);st=!!(e.flags&131072)}else st=!1,ue&&t.flags&1048576&&Dy(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Sa(e,t),e=t.pendingProps;var i=wi(t,Qe.current);vi(t,n),i=zf(null,t,r,e,i,n);var o=Wf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,Ya(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(t),i.updater=Al,t.stateNode=i,i._reactInternals=t,sd(t,r,e,n),t=cd(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Af(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Sa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mj(r),e=Ot(r,e),i){case 0:t=ld(null,t,r,e,n);break e;case 1:t=wm(null,t,r,e,n);break e;case 11:t=ym(null,t,r,e,n);break e;case 14:t=xm(null,t,r,Ot(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ld(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),wm(e,t,r,i,n);case 3:e:{if(ax(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,My(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ki(Error(L(423)),t),t=Sm(e,t,r,n,i);break e}else if(r!==i){i=ki(Error(L(424)),t),t=Sm(e,t,r,n,i);break e}else for(ft=Rn(t.stateNode.containerInfo.firstChild),pt=t,ue=!0,Nt=null,n=_y(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){t=yn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Oy(t),e===null&&rd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ju(r,i)?s=null:o!==null&&Ju(r,o)&&(t.flags|=32),sx(e,t),Ze(e,t,s,n),t.child;case 6:return e===null&&rd(t),null;case 13:return lx(e,t,n);case 4:return $f(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bi(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ym(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ne(Qa,r._currentValue),r._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===i.children&&!at.current){t=yn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=fn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),id(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vi(t,n),i=Dt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),xm(e,t,r,i,n);case 15:return ix(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Sa(e,t),t.tag=1,lt(r)?(e=!0,Ya(t)):e=!1,vi(t,n),tx(t,r,i),sd(t,r,i,n),cd(null,t,r,!0,e,n);case 19:return cx(e,t,n);case 22:return ox(e,t,n)}throw Error(L(156,t.tag))};function Cx(e,t){return Jv(e,t)}function hj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new hj(e,t,n,r)}function qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mj(e){if(typeof e=="function")return qf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yf)return 11;if(e===xf)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ka(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")qf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gr:return Sr(n.children,i,o,t);case vf:s=8,i|=8;break;case Au:return e=Ct(12,n,t,i|2),e.elementType=Au,e.lanes=o,e;case Lu:return e=Ct(13,n,t,i),e.elementType=Lu,e.lanes=o,e;case _u:return e=Ct(19,n,t,i),e.elementType=_u,e.lanes=o,e;case Ov:return Il(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iv:s=10;break e;case Mv:s=9;break e;case yf:s=11;break e;case xf:s=14;break e;case Tn:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Sr(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Il(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=Ov,e.lanes=n,e.stateNode={isHidden:!1},e}function $c(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Fc(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ep(e,t,n,r,i,o,s,l,c){return e=new gj(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(o),e}function vj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tx(e){if(!e)return Un;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(lt(n))return Ty(e,n,t)}return t}function Px(e,t,n,r,i,o,s,l,c){return e=ep(n,r,!0,e,i,o,s,l,c),e.context=Tx(null),n=e.current,r=Je(),i=Fn(n),o=fn(r,i),o.callback=t??null,Nn(n,o,i),e.current.lanes=i,hs(e,i,r),ct(e,r),e}function Ml(e,t,n,r){var i=t.current,o=Je(),s=Fn(i);return n=Tx(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,s),e!==null&&(Vt(e,i,s,o),ya(e,i,s)),s}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tp(e,t){Lm(e,t),(e=e.alternate)&&Lm(e,t)}function yj(){return null}var Dx=typeof reportError=="function"?reportError:function(e){console.error(e)};function np(e){this._internalRoot=e}Ol.prototype.render=np.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Ml(e,t,null,null)};Ol.prototype.unmount=np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){Ml(null,e,null,null)}),t[gn]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=oy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&t!==0&&t<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&ay(e)}};function rp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _m(){}function xj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ol(s);o.call(u)}}var s=Px(t,r,e,0,null,!1,!1,"",_m);return e._reactRootContainer=s,e[gn]=s.current,Ko(e.nodeType===8?e.parentNode:e),Lr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ol(c);l.call(u)}}var c=ep(e,0,!1,null,null,!1,!1,"",_m);return e._reactRootContainer=c,e[gn]=c.current,Ko(e.nodeType===8?e.parentNode:e),Lr(function(){Ml(t,c,n,r)}),c}function Nl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=ol(s);l.call(c)}}Ml(t,s,e,i)}else s=xj(n,t,e,i,r);return ol(s)}ry=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yo(t.pendingLanes);n!==0&&(bf(t,n|1),ct(t,Se()),!(q&6)&&(Ci=Se()+500,Qn()))}break;case 13:Lr(function(){var r=vn(e,1);if(r!==null){var i=Je();Vt(r,e,1,i)}}),tp(e,1)}};jf=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var n=Je();Vt(t,e,134217728,n)}tp(e,134217728)}};iy=function(e){if(e.tag===13){var t=Fn(e),n=vn(e,t);if(n!==null){var r=Je();Vt(n,e,t,r)}tp(e,t)}};oy=function(){return te};sy=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};zu=function(e,t,n){switch(t){case"input":if(Ou(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pl(r);if(!i)throw Error(L(90));Nv(r),Ou(r,i)}}}break;case"textarea":Fv(e,n);break;case"select":t=n.value,t!=null&&pi(e,!!n.multiple,t,!1)}};Yv=Xf;Gv=Lr;var wj={usingClientEntryPoint:!1,Events:[gs,Zr,Pl,Uv,Hv,Xf]},to={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sj={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xv(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||yj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{jl=Gs.inject(Sj),tn=Gs}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wj;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(t))throw Error(L(200));return vj(e,t,null,n)};vt.createRoot=function(e,t){if(!rp(e))throw Error(L(299));var n=!1,r="",i=Dx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,!1,r,i),e[gn]=t.current,Ko(e.nodeType===8?e.parentNode:e),new np(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Xv(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return Lr(e)};vt.hydrate=function(e,t,n){if(!Rl(t))throw Error(L(200));return Nl(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!rp(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Dx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Px(t,null,e,1,n??null,i,!1,o,s),e[gn]=t.current,Ko(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ol(t)};vt.render=function(e,t,n){if(!Rl(t))throw Error(L(200));return Nl(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(L(40));return e._reactRootContainer?(Lr(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};vt.unstable_batchedUpdates=Xf;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rl(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Nl(e,t,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function Ex(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ex)}catch(e){console.error(e)}}Ex(),Ev.exports=vt;var Ax=Ev.exports,Lx,Im=Ax;Lx=Im.createRoot,Im.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rs.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Mm="popstate";function bj(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return Sd("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sl(i)}return kj(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ip(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jj(){return Math.random().toString(36).substr(2,8)}function Om(e,t){return{usr:e.state,key:e.key,idx:t}}function Sd(e,t,n,r){return n===void 0&&(n=null),rs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$i(t):t,{state:n,key:t&&t.key||r||jj()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $i(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kj(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=_n.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(rs({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=_n.Pop;let b=d(),g=b==null?null:b-u;u=b,c&&c({action:l,location:x.location,delta:g})}function p(b,g){l=_n.Push;let h=Sd(x.location,b,g);u=d()+1;let v=Om(h,u),C=x.createHref(h);try{s.pushState(v,"",C)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(C)}o&&c&&c({action:l,location:x.location,delta:1})}function m(b,g){l=_n.Replace;let h=Sd(x.location,b,g);u=d();let v=Om(h,u),C=x.createHref(h);s.replaceState(v,"",C),o&&c&&c({action:l,location:x.location,delta:0})}function y(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:sl(b);return h=h.replace(/ $/,"%20"),be(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let x={get action(){return l},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Mm,f),c=b,()=>{i.removeEventListener(Mm,f),c=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let g=y(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(b){return s.go(b)}};return x}var Rm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rm||(Rm={}));function Cj(e,t,n){return n===void 0&&(n="/"),Tj(e,t,n)}function Tj(e,t,n,r){let i=typeof t=="string"?$i(t):t,o=op(i.pathname||"/",n);if(o==null)return null;let s=_x(e);Pj(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=Fj(o);l=Rj(s[c],u)}return l}function _x(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(be(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_x(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Mj(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Ix(o.path))i(o,s,c)}),t}function Ix(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ix(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Pj(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Oj(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Dj=/^:[\w-]+$/,Ej=3,Aj=2,Lj=1,_j=10,Ij=-2,Nm=e=>e==="*";function Mj(e,t){let n=e.split("/"),r=n.length;return n.some(Nm)&&(r+=Ij),t&&(r+=Aj),n.filter(i=>!Nm(i)).reduce((i,o)=>i+(Dj.test(o)?Ej:o===""?Lj:_j),r)}function Oj(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rj(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Nj({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Bn([o,f.pathname]),pathnameBase:Uj(Bn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Bn([o,f.pathnameBase]))}return s}function Nj(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$j(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let x=l[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[f];return m&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function $j(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ip(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Fj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ip(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function op(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Vj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bj=e=>Vj.test(e);function zj(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$i(e):e,o;if(n)if(Bj(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),ip(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=$m(n.substring(1),"/"):o=$m(n,t)}else o=t;return{pathname:o,search:Hj(r),hash:Yj(i)}}function $m(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wj(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sp(e,t){let n=Wj(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ap(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=$i(e):(i=rs({},e),be(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=zj(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),Uj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mx=["post","put","patch","delete"];new Set(Mx);const Kj=["get",...Mx];new Set(Kj);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}const lp=w.createContext(null),Qj=w.createContext(null),Xn=w.createContext(null),$l=w.createContext(null),Zn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ox=w.createContext(null);function Xj(e,t){let{relative:n}=t===void 0?{}:t;Fi()||be(!1);let{basename:r,navigator:i}=w.useContext(Xn),{hash:o,pathname:s,search:l}=Nx(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Bn([r,s])),i.createHref({pathname:c,search:l,hash:o})}function Fi(){return w.useContext($l)!=null}function Vi(){return Fi()||be(!1),w.useContext($l).location}function Rx(e){w.useContext(Xn).static||w.useLayoutEffect(e)}function cp(){let{isDataRoute:e}=w.useContext(Zn);return e?ck():Zj()}function Zj(){Fi()||be(!1);let e=w.useContext(lp),{basename:t,future:n,navigator:r}=w.useContext(Xn),{matches:i}=w.useContext(Zn),{pathname:o}=Vi(),s=JSON.stringify(sp(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return Rx(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=ap(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function Nx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Xn),{matches:i}=w.useContext(Zn),{pathname:o}=Vi(),s=JSON.stringify(sp(i,r.v7_relativeSplatPath));return w.useMemo(()=>ap(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Jj(e,t){return qj(e,t)}function qj(e,t,n,r){Fi()||be(!1);let{navigator:i}=w.useContext(Xn),{matches:o}=w.useContext(Zn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Vi(),d;if(t){var f;let b=typeof t=="string"?$i(t):t;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||be(!1),d=b}else d=u;let p=d.pathname||"/",m=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=Cj(e,{pathname:m}),x=ik(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Bn([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Bn([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&x?w.createElement($l.Provider,{value:{location:is({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},x):x}function ek(){let e=lk(),t=Gj(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const tk=w.createElement(ek,null);class nk extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Zn.Provider,{value:this.props.routeContext},w.createElement(Ox.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rk(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Zn.Provider,{value:t},r)}function ik(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||be(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let m,y=!1,x=null,b=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||tk,c&&(u<0&&p===0?(uk("route-fallback"),y=!0,b=null):u===p&&(y=!0,b=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),h=()=>{let v;return m?v=x:y?v=b:f.route.Component?v=w.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,w.createElement(rk,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(nk,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var $x=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($x||{}),Fx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fx||{});function ok(e){let t=w.useContext(lp);return t||be(!1),t}function sk(e){let t=w.useContext(Qj);return t||be(!1),t}function ak(e){let t=w.useContext(Zn);return t||be(!1),t}function Vx(e){let t=ak(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function lk(){var e;let t=w.useContext(Ox),n=sk(),r=Vx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ck(){let{router:e}=ok($x.UseNavigateStable),t=Vx(Fx.UseNavigateStable),n=w.useRef(!1);return Rx(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,is({fromRouteId:t},o)))},[e,t])}const Fm={};function uk(e,t,n){Fm[e]||(Fm[e]=!0)}function dk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fk(e){let{to:t,replace:n,state:r,relative:i}=e;Fi()||be(!1);let{future:o,static:s}=w.useContext(Xn),{matches:l}=w.useContext(Zn),{pathname:c}=Vi(),u=cp(),d=ap(t,sp(l,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Hr(e){be(!1)}function pk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:o,static:s=!1,future:l}=e;Fi()&&be(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:s,future:is({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=$i(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:y="default"}=r,x=w.useMemo(()=>{let b=op(d,c);return b==null?null:{location:{pathname:b,search:f,hash:p,state:m,key:y},navigationType:i}},[c,d,f,p,m,y,i]);return x==null?null:w.createElement(Xn.Provider,{value:u},w.createElement($l.Provider,{children:n,value:x}))}function hk(e){let{children:t,location:n}=e;return Jj(bd(t),n)}new Promise(()=>{});function bd(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,bd(r.props.children,o));return}r.type!==Hr&&be(!1),!r.props.index||!r.props.children||be(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jd.apply(this,arguments)}function mk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vk(e,t){return e.button===0&&(!t||t==="_self")&&!gk(e)}const yk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xk="6";try{window.__reactRouterVersion=xk}catch{}const wk="startTransition",Vm=d2[wk];function Sk(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=bj({window:i,v5Compat:!0}));let s=o.current,[l,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&Vm?Vm(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>dk(r),[r]),w.createElement(pk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const bk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bx=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=mk(t,yk),{basename:m}=w.useContext(Xn),y,x=!1;if(typeof u=="string"&&jk.test(u)&&(y=u,bk))try{let v=new URL(window.location.href),C=u.startsWith("//")?new URL(v.protocol+u):new URL(u),j=op(C.pathname,m);C.origin===v.origin&&j!=null?u=j+C.search+C.hash:x=!0}catch{}let b=Xj(u,{relative:i}),g=kk(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",jd({},p,{href:y||b,onClick:x||o?r:h,ref:n,target:c}))});var Bm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bm||(Bm={}));var zm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zm||(zm={}));function kk(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=cp(),u=Vi(),d=Nx(e,{relative:s});return w.useCallback(f=>{if(vk(f,n)){f.preventDefault();let p=r!==void 0?r:sl(u)===sl(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,d,r,i,n,e,o,s,l])}const zx=w.createContext({isDark:!0,toggleTheme:()=>{}}),Ck=({children:e})=>{const[t,n]=w.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),w.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=s=>{localStorage.getItem("theme")||n(s.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]);const r=()=>n(!t);return a.jsx(zx.Provider,{value:{isDark:t,toggleTheme:r},children:e})},up=()=>{const e=w.useContext(zx);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Wx=w.createContext(null),Bc="tools-auth-session",zc="tools-webauthn-credential",Tk=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Pk=async()=>{if(!Tk())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Wc=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Dk=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},Ek=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Ak=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!0),[o,s]=w.useState(!1),l=w.useRef(!1),c=async()=>{try{const m={challenge:Wc(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Wc(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},y=await navigator.credentials.create({publicKey:m});return y?(localStorage.setItem(zc,Dk(y.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem(zc),y={challenge:Wc(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:Ek(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:y})}catch(p){return console.error("Authentication failed:",p),!1}},d=w.useCallback(async()=>{i(!0),s(!1);const p=sessionStorage.getItem(Bc);if(p)try{const{timestamp:y}=JSON.parse(p);if(Date.now()-y<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await Pk()){n(!0),sessionStorage.setItem(Bc,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const y=localStorage.getItem(zc);let x=!1;y?x=await u():x=await c(),x?(n(!0),sessionStorage.setItem(Bc,JSON.stringify({timestamp:Date.now()}))):s(!0)}catch{s(!0)}i(!1)},[]);w.useEffect(()=>{l.current||(l.current=!0,d())},[d]);const f=w.useCallback(()=>{d()},[d]);return a.jsx(Wx.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:o,retryAuth:f},children:e})},Lk=()=>{const e=w.useContext(Wx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ge.apply(this,arguments)};function Ti(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ie="-ms-",Oo="-moz-",ee="-webkit-",Ux="comm",Fl="rule",dp="decl",_k="@import",Hx="@keyframes",Ik="@layer",Yx=Math.abs,fp=String.fromCharCode,kd=Object.assign;function Mk(e,t){return Ie(e,0)^45?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function Gx(e){return e.trim()}function ln(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ca(e,t,n){return e.indexOf(t,n)}function Ie(e,t){return e.charCodeAt(t)|0}function Pi(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function Kx(e){return e.length}function wo(e,t){return t.push(e),e}function Ok(e,t){return e.map(t).join("")}function Wm(e,t){return e.filter(function(n){return!ln(n,t)})}var Vl=1,Di=1,Qx=0,At=0,ke=0,Bi="";function Bl(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Vl,column:Di,length:s,return:"",siblings:l}}function kn(e,t){return kd(Bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $r(e){for(;e.root;)e=kn(e.root,{children:[e]});wo(e,e.siblings)}function Rk(){return ke}function Nk(){return ke=At>0?Ie(Bi,--At):0,Di--,ke===10&&(Di=1,Vl--),ke}function Bt(){return ke=At<Qx?Ie(Bi,At++):0,Di++,ke===10&&(Di=1,Vl++),ke}function br(){return Ie(Bi,At)}function Ta(){return At}function zl(e,t){return Pi(Bi,e,t)}function Cd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $k(e){return Vl=Di=1,Qx=Jt(Bi=e),At=0,[]}function Fk(e){return Bi="",e}function Uc(e){return Gx(zl(At-1,Td(e===91?e+2:e===40?e+1:e)))}function Vk(e){for(;(ke=br())&&ke<33;)Bt();return Cd(e)>2||Cd(ke)>3?"":" "}function Bk(e,t){for(;--t&&Bt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return zl(e,Ta()+(t<6&&br()==32&&Bt()==32))}function Td(e){for(;Bt();)switch(ke){case e:return At;case 34:case 39:e!==34&&e!==39&&Td(ke);break;case 40:e===41&&Td(e);break;case 92:Bt();break}return At}function zk(e,t){for(;Bt()&&e+ke!==57;)if(e+ke===84&&br()===47)break;return"/*"+zl(t,At-1)+"*"+fp(e===47?e:Bt())}function Wk(e){for(;!Cd(br());)Bt();return zl(e,At)}function Uk(e){return Fk(Pa("",null,null,null,[""],e=$k(e),0,[0],e))}function Pa(e,t,n,r,i,o,s,l,c){for(var u=0,d=0,f=s,p=0,m=0,y=0,x=1,b=1,g=1,h=0,v="",C=i,j=o,k=r,T=v;b;)switch(y=h,h=Bt()){case 40:if(y!=108&&Ie(T,f-1)==58){Ca(T+=Y(Uc(h),"&","&\f"),"&\f",Yx(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:T+=Uc(h);break;case 9:case 10:case 13:case 32:T+=Vk(y);break;case 92:T+=Bk(Ta()-1,7);continue;case 47:switch(br()){case 42:case 47:wo(Hk(zk(Bt(),Ta()),t,n,c),c);break;default:T+="/"}break;case 123*x:l[u++]=Jt(T)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:g==-1&&(T=Y(T,/\f/g,"")),m>0&&Jt(T)-f&&wo(m>32?Hm(T+";",r,n,f-1,c):Hm(Y(T," ","")+";",r,n,f-2,c),c);break;case 59:T+=";";default:if(wo(k=Um(T,t,n,u,d,i,l,v,C=[],j=[],f,o),o),h===123)if(d===0)Pa(T,t,k,k,C,o,f,l,j);else switch(p===99&&Ie(T,3)===110?100:p){case 100:case 108:case 109:case 115:Pa(e,k,k,r&&wo(Um(e,k,k,0,0,i,l,v,i,C=[],f,j),j),i,j,f,l,r?C:j);break;default:Pa(T,k,k,k,[""],j,0,l,j)}}u=d=m=0,x=g=1,v=T="",f=s;break;case 58:f=1+Jt(T),m=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Nk()==125)continue}switch(T+=fp(h),h*x){case 38:g=d>0?1:(T+="\f",-1);break;case 44:l[u++]=(Jt(T)-1)*g,g=1;break;case 64:br()===45&&(T+=Uc(Bt())),p=br(),d=f=Jt(v=T+=Wk(Ta())),h++;break;case 45:y===45&&Jt(T)==2&&(x=0)}}return o}function Um(e,t,n,r,i,o,s,l,c,u,d,f){for(var p=i-1,m=i===0?o:[""],y=Kx(m),x=0,b=0,g=0;x<r;++x)for(var h=0,v=Pi(e,p+1,p=Yx(b=s[x])),C=e;h<y;++h)(C=Gx(b>0?m[h]+" "+v:Y(v,/&\f/g,m[h])))&&(c[g++]=C);return Bl(e,t,n,i===0?Fl:l,c,u,d,f)}function Hk(e,t,n,r){return Bl(e,t,n,Ux,fp(Rk()),Pi(e,2,-2),0,r)}function Hm(e,t,n,r,i){return Bl(e,t,n,dp,Pi(e,0,r),Pi(e,r+1,-1),r,i)}function Xx(e,t,n){switch(Mk(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Oo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Oo+e+ie+e+e;case 5936:switch(Ie(e,t+11)){case 114:return ee+e+ie+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+ie+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+ie+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+ie+e+e;case 6165:return ee+e+ie+"flex-"+e+e;case 5187:return ee+e+Y(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return ee+e+ie+"flex-item-"+Y(e,/flex-|-self/g,"")+(ln(e,/flex-|baseline/)?"":ie+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ee+e+ie+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+ie+Y(e,"shrink","negative")+e;case 5292:return ee+e+ie+Y(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+Y(e,"-grow","")+ee+e+ie+Y(e,"grow","positive")+e;case 4554:return ee+Y(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!ln(e,/flex-|baseline/))return ie+"grid-column-align"+Pi(e,t)+e;break;case 2592:case 3360:return ie+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ln(r.props,/grid-\w+-end/)})?~Ca(e+(n=n[t].value),"span",0)?e:ie+Y(e,"-start","")+e+ie+"grid-row-span:"+(~Ca(n,"span",0)?ln(n,/\d+/):+ln(n,/\d+/)-+ln(e,/\d+/))+";":ie+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ln(r.props,/grid-\w+-start/)})?e:ie+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(Ie(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Oo+(Ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ca(e,"stretch",0)?Xx(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,c,u){return ie+i+":"+o+u+(s?ie+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(Ie(e,t+6)===121)return Y(e,":",":"+ee)+e;break;case 6444:switch(Ie(e,Ie(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Ie(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+ie+"$2box$3")+e;case 100:return Y(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function al(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Yk(e,t,n,r){switch(e.type){case Ik:if(e.children.length)break;case _k:case dp:return e.return=e.return||e.value;case Ux:return"";case Hx:return e.return=e.value+"{"+al(e.children,r)+"}";case Fl:if(!Jt(e.value=e.props.join(",")))return""}return Jt(n=al(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gk(e){var t=Kx(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function Kk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case dp:e.return=Xx(e.value,e.length,n);return;case Hx:return al([kn(e,{value:Y(e.value,"@","@"+ee)})],r);case Fl:if(e.length)return Ok(n=e.props,function(i){switch(ln(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$r(kn(e,{props:[Y(i,/:(read-\w+)/,":"+Oo+"$1")]})),$r(kn(e,{props:[i]})),kd(e,{props:Wm(n,r)});break;case"::placeholder":$r(kn(e,{props:[Y(i,/:(plac\w+)/,":"+ee+"input-$1")]})),$r(kn(e,{props:[Y(i,/:(plac\w+)/,":"+Oo+"$1")]})),$r(kn(e,{props:[Y(i,/:(plac\w+)/,ie+"input-$1")]})),$r(kn(e,{props:[i]})),kd(e,{props:Wm(n,r)});break}return""})}}var Xk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},Ei=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",Zx="active",Jx="data-styled-version",Wl="6.1.19",pp=`/*!sc*/
`,ll=typeof window<"u"&&typeof document<"u",Zk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),Jk={},Ul=Object.freeze([]),Ai=Object.freeze({});function qx(e,t,n){return n===void 0&&(n=Ai),e.theme!==n.theme&&e.theme||t||n.theme}var e1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eC=/(^-|-$)/g;function Ym(e){return e.replace(qk,"-").replace(eC,"")}var tC=/(a)(d)/gi,Ks=52,Gm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pd(e){var t,n="";for(t=Math.abs(e);t>Ks;t=t/Ks|0)n=Gm(t%Ks)+n;return(Gm(t%Ks)+n).replace(tC,"$1-$2")}var Hc,t1=5381,ii=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},n1=function(e){return ii(t1,e)};function hp(e){return Pd(n1(e)>>>0)}function nC(e){return e.displayName||e.name||"Component"}function Yc(e){return typeof e=="string"&&!0}var r1=typeof Symbol=="function"&&Symbol.for,i1=r1?Symbol.for("react.memo"):60115,rC=r1?Symbol.for("react.forward_ref"):60112,iC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sC=((Hc={})[rC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hc[i1]=o1,Hc);function Km(e){return("type"in(t=e)&&t.type.$$typeof)===i1?o1:"$$typeof"in e?sC[e.$$typeof]:iC;var t}var aC=Object.defineProperty,lC=Object.getOwnPropertyNames,Qm=Object.getOwnPropertySymbols,cC=Object.getOwnPropertyDescriptor,uC=Object.getPrototypeOf,Xm=Object.prototype;function s1(e,t,n){if(typeof t!="string"){if(Xm){var r=uC(t);r&&r!==Xm&&s1(e,r,n)}var i=lC(t);Qm&&(i=i.concat(Qm(t)));for(var o=Km(e),s=Km(t),l=0;l<i.length;++l){var c=i[l];if(!(c in oC||n&&n[c]||s&&c in s||o&&c in o)){var u=cC(t,c);try{aC(e,c,u)}catch{}}}}return e}function Li(e){return typeof e=="function"}function mp(e){return typeof e=="object"&&"styledComponentId"in e}function vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function os(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Dd(e,t,n){if(n===void 0&&(n=!1),!n&&!os(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Dd(e[r],t[r]);else if(os(t))for(var r in t)e[r]=Dd(e[r],t[r]);return e}function gp(e,t){Object.defineProperty(e,"toString",{value:t})}function ys(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var dC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ys(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(pp);return n},e}(),Da=new Map,ul=new Map,Ea=1,Qs=function(e){if(Da.has(e))return Da.get(e);for(;ul.has(Ea);)Ea++;var t=Ea++;return Da.set(e,t),ul.set(t,e),t},fC=function(e,t){Ea=t+1,Da.set(e,t),ul.set(t,e)},pC="style[".concat(Ei,"][").concat(Jx,'="').concat(Wl,'"]'),hC=new RegExp("^".concat(Ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},gC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(pp),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var c=l.match(hC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(fC(d,u),mC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Zm=function(e){for(var t=document.querySelectorAll(pC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ei)!==Zx&&(gC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function vC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Ei,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ei,Zx),r.setAttribute(Jx,Wl);var s=vC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},yC=function(){function e(t){this.element=a1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ys(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),xC=function(){function e(t){this.element=a1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jm=ll,SC={isServer:!ll,useCSSOMInjection:!Zk},dl=function(){function e(t,n,r){t===void 0&&(t=Ai),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},SC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ll&&Jm&&(Jm=!1,Zm(this)),gp(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",u=function(f){var p=function(g){return ul.get(g)}(f);if(p===void 0)return"continue";var m=o.names.get(p),y=s.getGroup(f);if(m===void 0||!m.size||y.length===0)return"continue";var x="".concat(Ei,".g").concat(f,'[id="').concat(p,'"]'),b="";m!==void 0&&m.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),c+="".concat(y).concat(x,'{content:"').concat(b,'"}').concat(pp)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Qs(t)},e.prototype.rehydrate=function(){!this.server&&ll&&Zm(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new wC(i):r?new yC(i):new xC(i)}(this.options),new dC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Qs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bC=/&/g,jC=/^\s*\/\/.*$/gm;function l1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=l1(n.children,t)),n})}function kC(e){var t,n,r,i=Ai,o=i.options,s=o===void 0?Ai:o,l=i.plugins,c=l===void 0?Ul:l,u=function(p,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Fl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(bC,n).replace(r,u))}),s.prefix&&d.push(Qk),d.push(Yk);var f=function(p,m,y,x){m===void 0&&(m=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(jC,""),g=Uk(y||m?"".concat(y," ").concat(m," { ").concat(b," }"):b);s.namespace&&(g=l1(g,s.namespace));var h=[];return al(g,Gk(d.concat(Kk(function(v){return h.push(v)})))),h};return f.hash=c.length?c.reduce(function(p,m){return m.name||ys(15),ii(p,m.name)},t1).toString():"",f}var CC=new dl,Ed=kC(),c1=en.createContext({shouldForwardProp:void 0,styleSheet:CC,stylis:Ed});c1.Consumer;en.createContext(void 0);function Ad(){return w.useContext(c1)}var u1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ed);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gp(this,function(){throw ys(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ed),this.name+t.hash},e}(),TC=function(e){return e>="A"&&e<="Z"};function qm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;TC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var d1=function(e){return e==null||e===!1||e===""},f1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!d1(o)&&(Array.isArray(o)&&o.isCss||Li(o)?r.push("".concat(qm(i),":"),o,";"):os(o)?r.push.apply(r,Ti(Ti(["".concat(i," {")],f1(o),!1),["}"],!1)):r.push("".concat(qm(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Xk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zn(e,t,n,r){if(d1(e))return[];if(mp(e))return[".".concat(e.styledComponentId)];if(Li(e)){if(!Li(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return zn(i,t,n,r)}var o;return e instanceof u1?n?(e.inject(n,r),[e.getName(r)]):[e]:os(e)?f1(e):Array.isArray(e)?Array.prototype.concat.apply(Ul,e.map(function(s){return zn(s,t,n,r)})):[e.toString()]}function p1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Li(n)&&!mp(n))return!1}return!0}var PC=n1(Wl),DC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&p1(t),this.componentId=n,this.baseHash=ii(PC,n),this.baseStyle=r,dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=vr(i,this.staticRulesId);else{var o=cl(zn(this.rules,t,n,r)),s=Pd(ii(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=vr(i,s),this.staticRulesId=s}else{for(var c=ii(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=cl(zn(f,t,n,r));c=ii(c,p+d),u+=p}}if(u){var m=Pd(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=vr(i,m)}}return i},e}(),vp=en.createContext(void 0);vp.Consumer;var Gc={};function EC(e,t,n){var r=mp(e),i=e,o=!Yc(e),s=t.attrs,l=s===void 0?Ul:s,c=t.componentId,u=c===void 0?function(C,j){var k=typeof C!="string"?"sc":Ym(C);Gc[k]=(Gc[k]||0)+1;var T="".concat(k,"-").concat(hp(Wl+k+Gc[k]));return j?"".concat(j,"-").concat(T):T}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(C){return Yc(C)?"styled.".concat(C):"Styled(".concat(nC(C),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Ym(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(C,j){return x(C,j)&&b(C,j)}}else y=x}var g=new DC(n,p,r?i.componentStyle:void 0);function h(C,j){return function(k,T,P){var E=k.attrs,_=k.componentStyle,N=k.defaultProps,I=k.foldedComponentIds,F=k.styledComponentId,U=k.target,D=en.useContext(vp),W=Ad(),V=k.shouldForwardProp||W.shouldForwardProp,A=qx(T,D,N)||Ai,M=function(Q,ce,Oe){for(var Xe,Te=Ge(Ge({},ce),{className:void 0,theme:Oe}),Wt=0;Wt<Q.length;Wt+=1){var xt=Li(Xe=Q[Wt])?Xe(Te):Xe;for(var Re in xt)Te[Re]=Re==="className"?vr(Te[Re],xt[Re]):Re==="style"?Ge(Ge({},Te[Re]),xt[Re]):xt[Re]}return ce.className&&(Te.className=vr(Te.className,ce.className)),Te}(E,T,A),R=M.as||U,B={};for(var G in M)M[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&M.theme===A||(G==="forwardedAs"?B.as=M.forwardedAs:V&&!V(G,R)||(B[G]=M[G]));var ae=function(Q,ce){var Oe=Ad(),Xe=Q.generateAndInjectStyles(ce,Oe.styleSheet,Oe.stylis);return Xe}(_,M),le=vr(I,F);return ae&&(le+=" "+ae),M.className&&(le+=" "+M.className),B[Yc(R)&&!e1.has(R)?"class":"className"]=le,P&&(B.ref=P),w.createElement(R,B)}(v,C,j)}h.displayName=f;var v=en.forwardRef(h);return v.attrs=m,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?vr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(j){for(var k=[],T=1;T<arguments.length;T++)k[T-1]=arguments[T];for(var P=0,E=k;P<E.length;P++)Dd(j,E[P],!0);return j}({},i.defaultProps,C):C}}),gp(v,function(){return".".concat(v.styledComponentId)}),o&&s1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function eg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var tg=function(e){return Object.assign(e,{isCss:!0})};function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Li(e)||os(e))return tg(zn(eg(Ul,Ti([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?zn(r):tg(zn(eg(r,t)))}function Ld(e,t,n){if(n===void 0&&(n=Ai),!t)throw ys(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,yr.apply(void 0,Ti([i],o,!1)))};return r.attrs=function(i){return Ld(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ld(e,t,Ge(Ge({},n),i))},r}var h1=function(e){return Ld(EC,e)},S=h1;e1.forEach(function(e){S[e]=h1(e)});var AC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=p1(t),dl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(cl(zn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&dl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function LC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=yr.apply(void 0,Ti([e],t,!1)),i="sc-global-".concat(hp(JSON.stringify(r))),o=new AC(r,i),s=function(c){var u=Ad(),d=en.useContext(vp),f=en.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),en.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,p){if(o.isStatic)o.renderStyles(c,Jk,d,p);else{var m=Ge(Ge({},u),{theme:qx(u,f,s.defaultProps)});o.renderStyles(c,m,d,p)}}return en.memo(s)}function zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cl(yr.apply(void 0,Ti([e],t,!1))),i=hp(r);return new u1(i,r)}const _C=LC`
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
`,IC=S.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,MC=S.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,OC=()=>{const{isDark:e}=up();return a.jsx(IC,{children:a.jsx(MC,{$isDark:e})})},yp=w.createContext({});function xp(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Hl=w.createContext(null),wp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class RC extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function NC({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=w.useContext(wp);return w.useInsertionEffect(()=>{const{width:s,height:l,top:c,left:u}=i.current;if(t||!r.current||!s||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),a.jsx(RC,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const $C=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const l=xp(FC),c=w.useId(),u=w.useCallback(f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=w.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(l.set(f,!1),()=>l.delete(f))}),o?[Math.random(),u]:[n,u]);return w.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),w.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=a.jsx(NC,{isPresent:n,children:e})),a.jsx(Hl.Provider,{value:d,children:e})};function FC(){return new Map}function m1(e=!0){const t=w.useContext(Hl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{e&&i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Xs=e=>e.key||"";function ng(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Sp=typeof window<"u",g1=Sp?w.useLayoutEffect:w.useEffect,Ye=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1})=>{const[l,c]=m1(s),u=w.useMemo(()=>ng(e),[e]),d=s&&!l?[]:u.map(Xs),f=w.useRef(!0),p=w.useRef(u),m=xp(()=>new Map),[y,x]=w.useState(u),[b,g]=w.useState(u);g1(()=>{f.current=!1,p.current=u;for(let C=0;C<b.length;C++){const j=Xs(b[C]);d.includes(j)?m.delete(j):m.get(j)!==!0&&m.set(j,!1)}},[b,d.length,d.join("-")]);const h=[];if(u!==y){let C=[...u];for(let j=0;j<b.length;j++){const k=b[j],T=Xs(k);d.includes(T)||(C.splice(j,0,k),h.push(k))}o==="wait"&&h.length&&(C=h),g(ng(C)),x(u);return}const{forceRender:v}=w.useContext(yp);return a.jsx(a.Fragment,{children:b.map(C=>{const j=Xs(C),k=s&&!l?!1:u===b||d.includes(j),T=()=>{if(m.has(j))m.set(j,!0);else return;let P=!0;m.forEach(E=>{E||(P=!1)}),P&&(v==null||v(),g(p.current),s&&(c==null||c()),r&&r())};return a.jsx($C,{isPresent:k,initial:!f.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:k?void 0:T,children:C},j)})})},ht=e=>e;let v1=ht;function bp(e){let t;return()=>(t===void 0&&(t=e()),t)}const _i=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},pn=e=>e*1e3,hn=e=>e/1e3,VC={useManualTiming:!1};function BC(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Zs=["read","resolveKeyframes","update","preRender","render","postRender"],zC=40;function y1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Zs.reduce((g,h)=>(g[h]=BC(o),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=s,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,zC),1),i.timestamp=g,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Zs.reduce((g,h)=>{const v=s[h];return g[h]=(C,j=!1,k=!1)=>(n||y(),v.schedule(C,j,k)),g},{}),cancel:g=>{for(let h=0;h<Zs.length;h++)s[Zs[h]].cancel(g)},state:i,steps:s}}const{schedule:se,cancel:Hn,state:$e,steps:Kc}=y1(typeof requestAnimationFrame<"u"?requestAnimationFrame:ht,!0),x1=w.createContext({strict:!1}),rg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ii={};for(const e in rg)Ii[e]={isEnabled:t=>rg[e].some(n=>!!t[n])};function WC(e){for(const t in e)Ii[t]={...Ii[t],...e[t]}}const UC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||UC.has(e)}let w1=e=>!fl(e);function HC(e){e&&(w1=t=>t.startsWith("on")?!fl(t):e(t))}try{HC(require("@emotion/is-prop-valid").default)}catch{}function YC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(w1(i)||n===!0&&fl(i)||!t&&!fl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function GC(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Yl=w.createContext({});function ss(e){return typeof e=="string"||Array.isArray(e)}function Gl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],kp=["initial",...jp];function Kl(e){return Gl(e.animate)||kp.some(t=>ss(e[t]))}function S1(e){return!!(Kl(e)||e.variants)}function KC(e,t){if(Kl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ss(n)?n:void 0,animate:ss(r)?r:void 0}}return e.inherit!==!1?t:{}}function QC(e){const{initial:t,animate:n}=KC(e,w.useContext(Yl));return w.useMemo(()=>({initial:t,animate:n}),[ig(t),ig(n)])}function ig(e){return Array.isArray(e)?e.join(" "):e}const XC=Symbol.for("motionComponentSymbol");function oi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function ZC(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):oi(n)&&(n.current=r))},[t])}const Cp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),JC="framerAppearId",b1="data-"+Cp(JC),{schedule:Tp}=y1(queueMicrotask,!1),j1=w.createContext({});function qC(e,t,n,r,i){var o,s;const{visualElement:l}=w.useContext(Yl),c=w.useContext(x1),u=w.useContext(Hl),d=w.useContext(wp).reducedMotion,f=w.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=w.useContext(j1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&eT(f.current,n,i,m);const y=w.useRef(!1);w.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const x=n[b1],b=w.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,x)));return g1(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Tp.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),w.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,x)}),b.current=!1))}),p}function eT(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:k1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||l&&oi(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function k1(e){if(e)return e.options.allowProjection!==!1?e.projection:k1(e.parent)}function tT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&WC(e);function l(u,d){let f;const p={...w.useContext(wp),...u,layoutId:nT(u)},{isStatic:m}=p,y=QC(u),x=r(u,m);if(!m&&Sp){rT();const b=iT(p);f=b.MeasureLayout,y.visualElement=qC(i,x,p,t,b.ProjectionNode)}return a.jsxs(Yl.Provider,{value:y,children:[f&&y.visualElement?a.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,u,ZC(x,y.visualElement,d),x,m,y.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const c=w.forwardRef(l);return c[XC]=i,c}function nT({layoutId:e}){const t=w.useContext(yp).id;return t&&e!==void 0?t+"-"+e:e}function rT(e,t){w.useContext(x1).strict}function iT(e){const{drag:t,layout:n}=Ii;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const oT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pp(e){return typeof e!="string"||e.includes("-")?!1:!!(oT.indexOf(e)>-1||/[A-Z]/u.test(e))}function og(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Dp(e,t,n,r){if(typeof t=="function"){const[i,o]=og(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=og(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const _d=e=>Array.isArray(e),sT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),aT=e=>_d(e)?e[e.length-1]||0:e,Ke=e=>!!(e&&e.getVelocity);function Aa(e){const t=Ke(e)?e.get():e;return sT(t)?t.toValue():t}function lT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:cT(r,i,o,e),renderState:t()};return n&&(s.onMount=l=>n({props:r,current:l,...s}),s.onUpdate=l=>n(l)),s}const C1=e=>(t,n)=>{const r=w.useContext(Yl),i=w.useContext(Hl),o=()=>lT(e,t,r,i);return n?o():xp(o)};function cT(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=Aa(o[p]);let{initial:s,animate:l}=e;const c=Kl(e),u=S1(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?l:s;if(f&&typeof f!="boolean"&&!Gl(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const y=Dp(e,p[m]);if(y){const{transitionEnd:x,transition:b,...g}=y;for(const h in g){let v=g[h];if(Array.isArray(v)){const C=d?v.length-1:0;v=v[C]}v!==null&&(i[h]=v)}for(const h in x)i[h]=x[h]}}}return i}const Wi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mr=new Set(Wi),T1=e=>t=>typeof t=="string"&&t.startsWith(e),P1=T1("--"),uT=T1("var(--"),Ep=e=>uT(e)?dT.test(e.split("/*")[0].trim()):!1,dT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,D1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,xn=(e,t,n)=>n>t?t:n<e?e:n,Ui={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},as={...Ui,transform:e=>xn(0,1,e)},Js={...Ui,default:1},xs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Cn=xs("deg"),rn=xs("%"),z=xs("px"),fT=xs("vh"),pT=xs("vw"),sg={...rn,parse:e=>rn.parse(e)/100,transform:e=>rn.transform(e*100)},hT={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},mT={rotate:Cn,rotateX:Cn,rotateY:Cn,rotateZ:Cn,scale:Js,scaleX:Js,scaleY:Js,scaleZ:Js,skew:Cn,skewX:Cn,skewY:Cn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:as,originX:sg,originY:sg,originZ:z},ag={...Ui,transform:Math.round},Ap={...hT,...mT,zIndex:ag,size:z,fillOpacity:as,strokeOpacity:as,numOctaves:ag},gT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vT=Wi.length;function yT(e,t,n){let r="",i=!0;for(let o=0;o<vT;o++){const s=Wi[o],l=e[s];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(s.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=D1(l,Ap[s]);if(!c){i=!1;const d=gT[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Lp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(Mr.has(c)){s=!0;continue}else if(P1(c)){i[c]=u;continue}else{const d=D1(u,Ap[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=yT(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}const xT={offset:"stroke-dashoffset",array:"stroke-dasharray"},wT={offset:"strokeDashoffset",array:"strokeDasharray"};function ST(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?xT:wT;e[o.offset]=z.transform(-r);const s=z.transform(t),l=z.transform(n);e[o.array]=`${s} ${l}`}function lg(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function bT(e,t,n){const r=lg(t,e.x,e.width),i=lg(n,e.y,e.height);return`${r} ${i}`}function _p(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(Lp(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:y}=e;p.transform&&(y&&(m.transform=p.transform),delete p.transform),y&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=bT(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),s!==void 0&&ST(p,s,l,c,!1)}const Ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),E1=()=>({...Ip(),attrs:{}}),Mp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function A1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const L1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _1(e,t,n,r){A1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(L1.has(i)?i:Cp(i),t.attrs[i])}const pl={};function jT(e){Object.assign(pl,e)}function I1(e,{layout:t,layoutId:n}){return Mr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!pl[e]||e==="opacity")}function Op(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Ke(i[s])||t.style&&Ke(t.style[s])||I1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function M1(e,t,n){const r=Op(e,t,n);for(const i in e)if(Ke(e[i])||Ke(t[i])){const o=Wi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function kT(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const cg=["x","y","width","height","cx","cy","r"],CT={useVisualState:C1({scrapeMotionValuesFromProps:M1,createRenderState:E1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const l in i)if(Mr.has(l)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let l=0;l<cg.length;l++){const c=cg[l];e[c]!==t[c]&&(s=!0)}s&&se.read(()=>{kT(n,r),se.render(()=>{_p(r,i,Mp(n.tagName),e.transformTemplate),_1(n,r)})})}})},TT={useVisualState:C1({scrapeMotionValuesFromProps:Op,createRenderState:Ip})};function O1(e,t,n){for(const r in t)!Ke(t[r])&&!I1(r,n)&&(e[r]=t[r])}function PT({transformTemplate:e},t){return w.useMemo(()=>{const n=Ip();return Lp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function DT(e,t){const n=e.style||{},r={};return O1(r,n,e),Object.assign(r,PT(e,t)),r}function ET(e,t){const n={},r=DT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function AT(e,t,n,r){const i=w.useMemo(()=>{const o=E1();return _p(o,t,Mp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};O1(o,e.style,e),i.style={...o,...i.style}}return i}function LT(e=!1){return(n,r,i,{latestValues:o},s)=>{const c=(Pp(n)?AT:ET)(r,o,s,n),u=YC(r,typeof n=="string",e),d=n!==w.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=w.useMemo(()=>Ke(f)?f.get():f,[f]);return w.createElement(n,{...d,children:p})}}function _T(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Pp(r)?CT:TT,preloadedFeatures:e,useRender:LT(i),createVisualElement:t,Component:r};return tT(s)}}function R1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ql(e,t,n){const r=e.getProps();return Dp(r,t,n!==void 0?n:r.custom,e)}const IT=bp(()=>window.ScrollTimeline!==void 0);class MT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(IT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class OT extends MT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Rp(e,t){return e?e[t]||e.default||e:void 0}const Id=2e4;function N1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Id;)t+=n,r=e.next(t);return t>=Id?1/0:t}function Np(e){return typeof e=="function"}function ug(e,t){e.timeline=t,e.onfinish=null}const $p=e=>Array.isArray(e)&&typeof e[0]=="number",RT={linearEasing:void 0};function NT(e,t){const n=bp(e);return()=>{var r;return(r=RT[t])!==null&&r!==void 0?r:n()}}const hl=NT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),$1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(_i(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function F1(e){return!!(typeof e=="function"&&hl()||!e||typeof e=="string"&&(e in Md||hl())||$p(e)||Array.isArray(e)&&e.every(F1))}const So=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Md={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:So([0,.65,.55,1]),circOut:So([.55,0,1,.45]),backIn:So([.31,.01,.66,-.59]),backOut:So([.33,1.53,.69,.99])};function V1(e,t){if(e)return typeof e=="function"&&hl()?$1(e,t):$p(e)?So(e):Array.isArray(e)?e.map(n=>V1(n,t)||Md.easeOut):Md[e]}const Mt={x:!1,y:!1};function B1(){return Mt.x||Mt.y}function $T(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function z1(e,t){const n=$T(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function dg(e){return t=>{t.pointerType==="touch"||B1()||e(t)}}function FT(e,t,n={}){const[r,i,o]=z1(e,n),s=dg(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=dg(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",s,i)}),o}const W1=(e,t)=>t?e===t?!0:W1(e,t.parentElement):!1,Fp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,VT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function BT(e){return VT.has(e.tagName)||e.tabIndex!==-1}const bo=new WeakSet;function fg(e){return t=>{t.key==="Enter"&&e(t)}}function Qc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const zT=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=fg(()=>{if(bo.has(n))return;Qc(n,"down");const i=fg(()=>{Qc(n,"up")}),o=()=>Qc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function pg(e){return Fp(e)&&!B1()}function WT(e,t,n={}){const[r,i,o]=z1(e,n),s=l=>{const c=l.currentTarget;if(!pg(l)||bo.has(c))return;bo.add(c);const u=t(l),d=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!pg(m)||!bo.has(c))&&(bo.delete(c),typeof u=="function"&&u(m,{success:y}))},f=m=>{d(m,n.useGlobalTarget||W1(c,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!BT(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,i),l.addEventListener("focus",u=>zT(u,i),i)}),o}function UT(e){return e==="x"||e==="y"?Mt[e]?null:(Mt[e]=!0,()=>{Mt[e]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const U1=new Set(["width","height","top","left","right","bottom",...Wi]);let La;function HT(){La=void 0}const on={now:()=>(La===void 0&&on.set($e.isProcessing||VC.useManualTiming?$e.timestamp:performance.now()),La),set:e=>{La=e,queueMicrotask(HT)}};function Vp(e,t){e.indexOf(t)===-1&&e.push(t)}function Bp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class zp{constructor(){this.subscriptions=[]}add(t){return Vp(this.subscriptions,t),()=>Bp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function H1(e,t){return t?e*(1e3/t):0}const hg=30,YT=e=>!isNaN(parseFloat(e));class GT{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=on.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=on.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=YT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new zp);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=on.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>hg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,hg);return H1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ls(e,t){return new GT(e,t)}function KT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ls(n))}function QT(e,t){const n=Ql(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const l=aT(o[s]);KT(e,s,l)}}function XT(e){return!!(Ke(e)&&e.add)}function Od(e,t){const n=e.getValue("willChange");if(XT(n))return n.add(t)}function Y1(e){return e.props[b1]}const G1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ZT=1e-7,JT=12;function qT(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=G1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>ZT&&++l<JT);return s}function ws(e,t,n,r){if(e===t&&n===r)return ht;const i=o=>qT(o,0,1,e,n);return o=>o===0||o===1?o:G1(i(o),t,r)}const K1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Q1=e=>t=>1-e(1-t),X1=ws(.33,1.53,.69,.99),Wp=Q1(X1),Z1=K1(Wp),J1=e=>(e*=2)<1?.5*Wp(e):.5*(2-Math.pow(2,-10*(e-1))),Up=e=>1-Math.sin(Math.acos(e)),q1=Q1(Up),ew=K1(Up),tw=e=>/^0[^.\s]+$/u.test(e);function eP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||tw(e):!0}const Ro=e=>Math.round(e*1e5)/1e5,Hp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tP(e){return e==null}const nP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yp=(e,t)=>n=>!!(typeof n=="string"&&nP.test(n)&&n.startsWith(e)||t&&!tP(n)&&Object.prototype.hasOwnProperty.call(n,t)),nw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,l]=r.match(Hp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},rP=e=>xn(0,255,e),Xc={...Ui,transform:e=>Math.round(rP(e))},xr={test:Yp("rgb","red"),parse:nw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Xc.transform(e)+", "+Xc.transform(t)+", "+Xc.transform(n)+", "+Ro(as.transform(r))+")"};function iP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Rd={test:Yp("#"),parse:iP,transform:xr.transform},si={test:Yp("hsl","hue"),parse:nw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+rn.transform(Ro(t))+", "+rn.transform(Ro(n))+", "+Ro(as.transform(r))+")"},Ue={test:e=>xr.test(e)||Rd.test(e)||si.test(e),parse:e=>xr.test(e)?xr.parse(e):si.test(e)?si.parse(e):Rd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?xr.transform(e):si.transform(e)},oP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Hp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(oP))===null||n===void 0?void 0:n.length)||0)>0}const rw="number",iw="color",aP="var",lP="var(",mg="${}",cP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cs(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(cP,c=>(Ue.test(c)?(r.color.push(o),i.push(iw),n.push(Ue.parse(c))):c.startsWith(lP)?(r.var.push(o),i.push(aP),n.push(c)):(r.number.push(o),i.push(rw),n.push(parseFloat(c))),++o,mg)).split(mg);return{values:n,split:l,indexes:r,types:i}}function ow(e){return cs(e).values}function sw(e){const{split:t,types:n}=cs(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const l=n[s];l===rw?o+=Ro(i[s]):l===iw?o+=Ue.transform(i[s]):o+=i[s]}return o}}const uP=e=>typeof e=="number"?0:e;function dP(e){const t=ow(e);return sw(e)(t.map(uP))}const Yn={test:sP,parse:ow,createTransformer:sw,getAnimatableNone:dP},fP=new Set(["brightness","contrast","saturate","opacity"]);function pP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Hp)||[];if(!r)return e;const i=n.replace(r,"");let o=fP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const hP=/\b([a-z-]*)\(.*?\)/gu,Nd={...Yn,getAnimatableNone:e=>{const t=e.match(hP);return t?t.map(pP).join(" "):e}},mP={...Ap,color:Ue,backgroundColor:Ue,outlineColor:Ue,fill:Ue,stroke:Ue,borderColor:Ue,borderTopColor:Ue,borderRightColor:Ue,borderBottomColor:Ue,borderLeftColor:Ue,filter:Nd,WebkitFilter:Nd},Gp=e=>mP[e];function aw(e,t){let n=Gp(e);return n!==Nd&&(n=Yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const gP=new Set(["auto","none","0"]);function vP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!gP.has(o)&&cs(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=aw(n,i)}const gg=e=>e===Ui||e===z,vg=(e,t)=>parseFloat(e.split(", ")[t]),yg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return vg(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?vg(o[1],e):0}},yP=new Set(["x","y","z"]),xP=Wi.filter(e=>!yP.has(e));function wP(e){const t=[];return xP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Mi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:yg(4,13),y:yg(5,14)};Mi.translateX=Mi.x;Mi.translateY=Mi.y;const jr=new Set;let $d=!1,Fd=!1;function lw(){if(Fd){const e=Array.from(jr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=wP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var l;(l=r.getValue(o))===null||l===void 0||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Fd=!1,$d=!1,jr.forEach(e=>e.complete()),jr.clear()}function cw(){jr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fd=!0)})}function SP(){cw(),lw()}class Kp{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jr.add(this),$d||($d=!0,se.read(cw),se.resolveKeyframes(lw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),l=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const uw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),bP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jP(e){const t=bP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function dw(e,t,n=1){const[r,i]=jP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return uw(s)?parseFloat(s):s}return Ep(i)?dw(i,t,n+1):i}const fw=e=>t=>t.test(e),kP={test:e=>e==="auto",parse:e=>e},pw=[Ui,z,rn,Cn,pT,fT,kP],xg=e=>pw.find(fw(e));class hw extends Kp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Ep(u))){const d=dw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!U1.has(r)||t.length!==2)return;const[i,o]=t,s=xg(i),l=xg(o);if(s!==l)if(gg(s)&&gg(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)eP(t[i])&&r.push(i);r.length&&vP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,l=i[s];i[s]=Mi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const wg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yn.test(e)||e==="0")&&!e.startsWith("url("));function CP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function TP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=wg(i,t),l=wg(o,t);return!s||!l?!1:CP(e)||(n==="spring"||Np(n))&&r}const PP=e=>e!==null;function Xl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(PP),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const DP=40;class mw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=on.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>DP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&SP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=on.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!TP(t,r,i,o))if(s)this.options.duration=0;else{c&&c(Xl(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const he=(e,t,n)=>e+(t-e)*n;function Zc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function EP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Zc(c,l,e+1/3),o=Zc(c,l,e),s=Zc(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function ml(e,t){return n=>n>0?t:e}const Jc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},AP=[Rd,xr,si],LP=e=>AP.find(t=>t.test(e));function Sg(e){const t=LP(e);if(!t)return!1;let n=t.parse(e);return t===si&&(n=EP(n)),n}const bg=(e,t)=>{const n=Sg(e),r=Sg(t);if(!n||!r)return ml(e,t);const i={...n};return o=>(i.red=Jc(n.red,r.red,o),i.green=Jc(n.green,r.green,o),i.blue=Jc(n.blue,r.blue,o),i.alpha=he(n.alpha,r.alpha,o),xr.transform(i))},_P=(e,t)=>n=>t(e(n)),Ss=(...e)=>e.reduce(_P),Vd=new Set(["none","hidden"]);function IP(e,t){return Vd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function MP(e,t){return n=>he(e,t,n)}function Qp(e){return typeof e=="number"?MP:typeof e=="string"?Ep(e)?ml:Ue.test(e)?bg:NP:Array.isArray(e)?gw:typeof e=="object"?Ue.test(e)?bg:OP:ml}function gw(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Qp(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function OP(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Qp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function RP(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],l=e.indexes[s][i[s]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[o]=c,i[s]++}return r}const NP=(e,t)=>{const n=Yn.createTransformer(t),r=cs(e),i=cs(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Vd.has(e)&&!i.values.length||Vd.has(t)&&!r.values.length?IP(e,t):Ss(gw(RP(r,i),i.values),n):ml(e,t)};function vw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?he(e,t,n):Qp(e)(e,t)}const $P=5;function yw(e,t,n){const r=Math.max(t-$P,0);return H1(n-e(r),t-r)}const ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qc=.001;function FP({duration:e=ye.duration,bounce:t=ye.bounce,velocity:n=ye.velocity,mass:r=ye.mass}){let i,o,s=1-t;s=xn(ye.minDamping,ye.maxDamping,s),e=xn(ye.minDuration,ye.maxDuration,hn(e)),s<1?(i=u=>{const d=u*s,f=d*e,p=d-n,m=Bd(u,s),y=Math.exp(-f);return qc-p/m*y},o=u=>{const f=u*s*e,p=f*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),x=Bd(Math.pow(u,2),s);return(-i(u)+qc>0?-1:1)*((p-m)*y)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-qc+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=BP(i,o,l);if(e=pn(e),isNaN(c))return{stiffness:ye.stiffness,damping:ye.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const VP=12;function BP(e,t,n){let r=n;for(let i=1;i<VP;i++)r=r-e(r)/t(r);return r}function Bd(e,t){return e*Math.sqrt(1-t*t)}const zP=["duration","bounce"],WP=["stiffness","damping","mass"];function jg(e,t){return t.some(n=>e[n]!==void 0)}function UP(e){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...e};if(!jg(e,WP)&&jg(e,zP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*xn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ye.mass,stiffness:i,damping:o}}else{const n=FP(e);t={...t,...n,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function xw(e=ye.visualDuration,t=ye.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=UP({...n,velocity:-hn(n.velocity||0)}),y=p||0,x=u/(2*Math.sqrt(c*d)),b=s-o,g=hn(Math.sqrt(c/d)),h=Math.abs(b)<5;r||(r=h?ye.restSpeed.granular:ye.restSpeed.default),i||(i=h?ye.restDelta.granular:ye.restDelta.default);let v;if(x<1){const j=Bd(g,x);v=k=>{const T=Math.exp(-x*g*k);return s-T*((y+x*g*b)/j*Math.sin(j*k)+b*Math.cos(j*k))}}else if(x===1)v=j=>s-Math.exp(-g*j)*(b+(y+g*b)*j);else{const j=g*Math.sqrt(x*x-1);v=k=>{const T=Math.exp(-x*g*k),P=Math.min(j*k,300);return s-T*((y+x*g*b)*Math.sinh(P)+j*b*Math.cosh(P))/j}}const C={calculatedDuration:m&&f||null,next:j=>{const k=v(j);if(m)l.done=j>=f;else{let T=0;x<1&&(T=j===0?pn(y):yw(v,j,k));const P=Math.abs(T)<=r,E=Math.abs(s-k)<=i;l.done=P&&E}return l.value=l.done?s:k,l},toString:()=>{const j=Math.min(N1(C),Id),k=$1(T=>C.next(j*T).value,j,30);return j+"ms "+k}};return C}function kg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=P=>l!==void 0&&P<l||c!==void 0&&P>c,y=P=>l===void 0?c:c===void 0||Math.abs(l-P)<Math.abs(c-P)?l:c;let x=n*t;const b=f+x,g=s===void 0?b:s(b);g!==b&&(x=g-f);const h=P=>-x*Math.exp(-P/r),v=P=>g+h(P),C=P=>{const E=h(P),_=v(P);p.done=Math.abs(E)<=u,p.value=p.done?g:_};let j,k;const T=P=>{m(p.value)&&(j=P,k=xw({keyframes:[p.value,y(p.value)],velocity:yw(v,P,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:P=>{let E=!1;return!k&&j===void 0&&(E=!0,C(P),T(P)),j!==void 0&&P>=j?k.next(P-j):(!E&&C(P),p)}}}const HP=ws(.42,0,1,1),YP=ws(0,0,.58,1),ww=ws(.42,0,.58,1),GP=e=>Array.isArray(e)&&typeof e[0]!="number",KP={linear:ht,easeIn:HP,easeInOut:ww,easeOut:YP,circIn:Up,circInOut:ew,circOut:q1,backIn:Wp,backInOut:Z1,backOut:X1,anticipate:J1},Cg=e=>{if($p(e)){v1(e.length===4);const[t,n,r,i]=e;return ws(t,n,r,i)}else if(typeof e=="string")return KP[e];return e};function QP(e,t,n){const r=[],i=n||vw,o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||ht:t;l=Ss(c,l)}r.push(l)}return r}function XP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(v1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=QP(t,r,i),c=l.length,u=d=>{if(s&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=_i(e[f],e[f+1],d);return l[f](p)};return n?d=>u(xn(e[0],e[o-1],d)):u}function ZP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=_i(0,t,r);e.push(he(n,1,i))}}function JP(e){const t=[0];return ZP(t,e.length-1),t}function qP(e,t){return e.map(n=>n*t)}function eD(e,t){return e.map(()=>t||ww).splice(0,e.length-1)}function gl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=GP(r)?r.map(Cg):Cg(r),o={done:!1,value:t[0]},s=qP(n&&n.length===t.length?n:JP(t),e),l=XP(s,t,{ease:Array.isArray(i)?i:eD(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const tD=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>Hn(t),now:()=>$e.isProcessing?$e.timestamp:on.now()}},nD={decay:kg,inertia:kg,tween:gl,keyframes:gl,spring:xw},rD=e=>e/100;class Xp extends mw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Kp,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new s(o,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,l=Np(n)?n:nD[n]||gl;let c,u;l!==gl&&typeof t[0]!="number"&&(c=Ss(rD,vw(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});o==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=N1(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:p,repeat:m,repeatType:y,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,C=o;if(m){const P=Math.min(this.currentTime,d)/f;let E=Math.floor(P),_=P%1;!_&&P>=1&&(_=1),_===1&&E--,E=Math.min(E,m+1),!!(E%2)&&(y==="reverse"?(_=1-_,x&&(_-=x/f)):y==="mirror"&&(C=s)),v=xn(0,1,_)*f}const j=h?{done:!1,value:c[0]}:C.next(v);l&&(j.value=l(j.value));let{done:k}=j;!h&&u!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return T&&i!==void 0&&(j.value=Xl(c,this.options,i)),b&&b(j.value),T&&this.finish(),j}get duration(){const{resolved:t}=this;return t?hn(t.calculatedDuration):0}get time(){return hn(this.currentTime)}set time(t){t=pn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=hn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=tD,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const iD=new Set(["opacity","clipPath","filter","transform"]);function oD(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=V1(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const sD=bp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),vl=10,aD=2e4;function lD(e){return Np(e.type)||e.type==="spring"||!F1(e.ease)}function cD(e,t){const n=new Xp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<aD;)r=n.sample(o),i.push(r.value),o+=vl;return{times:void 0,keyframes:i,duration:o-vl,ease:"linear"}}const Sw={anticipate:J1,backInOut:Z1,circInOut:ew};function uD(e){return e in Sw}class Tg extends mw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new hw(o,(s,l)=>this.onKeyframesResolved(s,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof o=="string"&&hl()&&uD(o)&&(o=Sw[o]),lD(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:y,...x}=this.options,b=cD(t,x);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,o=b.ease,s="keyframes"}const d=oD(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:o});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(ug(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(Xl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return hn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return hn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=pn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ht;const{animation:r}=n;ug(r,t)}return ht}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...m}=this.options,y=new Xp({...m,keyframes:r,duration:i,type:o,ease:s,times:l,isGenerator:!0}),x=pn(this.time);u.setWithVelocity(y.sample(x-vl).value,y.sample(x).value,vl)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return sD()&&r&&iD.has(r)&&!c&&!u&&!i&&o!=="mirror"&&s!==0&&l!=="inertia"}}const dD={type:"spring",stiffness:500,damping:25,restSpeed:10},fD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),pD={type:"keyframes",duration:.8},hD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},mD=(e,{keyframes:t})=>t.length>2?pD:Mr.has(e)?e.startsWith("scale")?fD(t[1]):dD:hD;function gD({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Zp=(e,t,n,r={},i,o)=>s=>{const l=Rp(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-pn(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};gD(l)||(d={...d,...mD(e,d)}),d.duration&&(d.duration=pn(d.duration)),d.repeatDelay&&(d.repeatDelay=pn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const p=Xl(d.keyframes,l);if(p!==void 0)return se.update(()=>{d.onUpdate(p),d.onComplete()}),new OT([])}return!o&&Tg.supports(d)?new Tg(d):new Xp(d)};function vD({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function bw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(s=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=c[f];if(m===void 0||d&&vD(d,f))continue;const y={delay:n,...Rp(s||{},f)};let x=!1;if(window.MotionHandoffAnimation){const g=Y1(e);if(g){const h=window.MotionHandoffAnimation(g,f,se);h!==null&&(y.startTime=h,x=!0)}}Od(e,f),p.start(Zp(f,p,m,e.shouldReduceMotion&&U1.has(f)?{type:!1}:y,e,x));const b=p.animation;b&&u.push(b)}return l&&Promise.all(u).then(()=>{se.update(()=>{l&&QT(e,l)})}),u}function zd(e,t,n={}){var r;const i=Ql(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(bw(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=o;return yD(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[u,d]=c==="beforeChildren"?[s,l]:[l,s];return u().then(()=>d())}else return Promise.all([s(),l(n.delay)])}function yD(e,t,n=0,r=0,i=1,o){const s=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(xD).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(zd(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function xD(e,t){return e.sortNodePosition(t)}function wD(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>zd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=zd(e,t,n);else{const i=typeof t=="function"?Ql(e,t,n.custom):t;r=Promise.all(bw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const SD=kp.length;function jw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?jw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<SD;n++){const r=kp[n],i=e.props[r];(ss(i)||i===!1)&&(t[r]=i)}return t}const bD=[...jp].reverse(),jD=jp.length;function kD(e){return t=>Promise.all(t.map(({animation:n,options:r})=>wD(e,n,r)))}function CD(e){let t=kD(e),n=Pg(),r=!0;const i=c=>(u,d)=>{var f;const p=Ql(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:y,...x}=p;u={...u,...x,...y}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=jw(e.parent)||{},f=[],p=new Set;let m={},y=1/0;for(let b=0;b<jD;b++){const g=bD[b],h=n[g],v=u[g]!==void 0?u[g]:d[g],C=ss(v),j=g===c?h.isActive:null;j===!1&&(y=b);let k=v===d[g]&&v!==u[g]&&C;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),h.protectedKeys={...m},!h.isActive&&j===null||!v&&!h.prevProp||Gl(v)||typeof v=="boolean")continue;const T=TD(h.prevProp,v);let P=T||g===c&&h.isActive&&!k&&C||b>y&&C,E=!1;const _=Array.isArray(v)?v:[v];let N=_.reduce(i(g),{});j===!1&&(N={});const{prevResolvedValues:I={}}=h,F={...I,...N},U=V=>{P=!0,p.has(V)&&(E=!0,p.delete(V)),h.needsAnimating[V]=!0;const A=e.getValue(V);A&&(A.liveStyle=!1)};for(const V in F){const A=N[V],M=I[V];if(m.hasOwnProperty(V))continue;let R=!1;_d(A)&&_d(M)?R=!R1(A,M):R=A!==M,R?A!=null?U(V):p.add(V):A!==void 0&&p.has(V)?U(V):h.protectedKeys[V]=!0}h.prevProp=v,h.prevResolvedValues=N,h.isActive&&(m={...m,...N}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(k&&T)||E)&&f.push(..._.map(V=>({animation:V,options:{type:g}})))}if(p.size){const b={};p.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),b[g]=h??null}),f.push({animation:b})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),n[c].isActive=u;const f=s(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Pg(),r=!0}}}function TD(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!R1(t,e):!1}function tr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Pg(){return{animate:tr(!0),whileInView:tr(),whileHover:tr(),whileTap:tr(),whileDrag:tr(),whileFocus:tr(),exit:tr()}}class Jn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class PD extends Jn{constructor(t){super(t),t.animationState||(t.animationState=CD(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Gl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let DD=0;class ED extends Jn{constructor(){super(...arguments),this.id=DD++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const AD={animation:{Feature:PD},exit:{Feature:ED}};function us(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function bs(e){return{point:{x:e.pageX,y:e.pageY}}}const LD=e=>t=>Fp(t)&&e(t,bs(t));function No(e,t,n,r){return us(e,t,LD(n),r)}const Dg=(e,t)=>Math.abs(e-t);function _D(e,t){const n=Dg(e.x,t.x),r=Dg(e.y,t.y);return Math.sqrt(n**2+r**2)}class kw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=tu(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=_D(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:y}=f,{timestamp:x}=$e;this.history.push({...y,timestamp:x});const{onStart:b,onMove:g}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=eu(p,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=tu(f.type==="pointercancel"?this.lastMoveEventInfo:eu(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,b),y&&y(f,b)},!Fp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=bs(t),l=eu(s,this.transformPagePoint),{point:c}=l,{timestamp:u}=$e;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,tu(l,this.history)),this.removeListeners=Ss(No(this.contextWindow,"pointermove",this.handlePointerMove),No(this.contextWindow,"pointerup",this.handlePointerUp),No(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Hn(this.updatePoint)}}function eu(e,t){return t?{point:t(e.point)}:e}function Eg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function tu({point:e},t){return{point:e,delta:Eg(e,Cw(t)),offset:Eg(e,ID(t)),velocity:MD(t,.1)}}function ID(e){return e[0]}function Cw(e){return e[e.length-1]}function MD(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Cw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>pn(t)));)n--;if(!r)return{x:0,y:0};const o=hn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const Tw=1e-4,OD=1-Tw,RD=1+Tw,Pw=.01,ND=0-Pw,$D=0+Pw;function gt(e){return e.max-e.min}function FD(e,t,n){return Math.abs(e-t)<=n}function Ag(e,t,n,r=.5){e.origin=r,e.originPoint=he(t.min,t.max,e.origin),e.scale=gt(n)/gt(t),e.translate=he(n.min,n.max,e.origin)-e.originPoint,(e.scale>=OD&&e.scale<=RD||isNaN(e.scale))&&(e.scale=1),(e.translate>=ND&&e.translate<=$D||isNaN(e.translate))&&(e.translate=0)}function $o(e,t,n,r){Ag(e.x,t.x,n.x,r?r.originX:void 0),Ag(e.y,t.y,n.y,r?r.originY:void 0)}function Lg(e,t,n){e.min=n.min+t.min,e.max=e.min+gt(t)}function VD(e,t,n){Lg(e.x,t.x,n.x),Lg(e.y,t.y,n.y)}function _g(e,t,n){e.min=t.min-n.min,e.max=e.min+gt(t)}function Fo(e,t,n){_g(e.x,t.x,n.x),_g(e.y,t.y,n.y)}function BD(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?he(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?he(n,e,r.max):Math.min(e,n)),e}function Ig(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function zD(e,{top:t,left:n,bottom:r,right:i}){return{x:Ig(e.x,n,i),y:Ig(e.y,t,r)}}function Mg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function WD(e,t){return{x:Mg(e.x,t.x),y:Mg(e.y,t.y)}}function UD(e,t){let n=.5;const r=gt(e),i=gt(t);return i>r?n=_i(t.min,t.max-r,e.min):r>i&&(n=_i(e.min,e.max-i,t.min)),xn(0,1,n)}function HD(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Wd=.35;function YD(e=Wd){return e===!1?e=0:e===!0&&(e=Wd),{x:Og(e,"left","right"),y:Og(e,"top","bottom")}}function Og(e,t,n){return{min:Rg(e,t),max:Rg(e,n)}}function Rg(e,t){return typeof e=="number"?e:e[t]||0}const Ng=()=>({translate:0,scale:1,origin:0,originPoint:0}),ai=()=>({x:Ng(),y:Ng()}),$g=()=>({min:0,max:0}),we=()=>({x:$g(),y:$g()});function bt(e){return[e("x"),e("y")]}function Dw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function GD({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function KD(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function nu(e){return e===void 0||e===1}function Ud({scale:e,scaleX:t,scaleY:n}){return!nu(e)||!nu(t)||!nu(n)}function fr(e){return Ud(e)||Ew(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ew(e){return Fg(e.x)||Fg(e.y)}function Fg(e){return e&&e!=="0%"}function yl(e,t,n){const r=e-n,i=t*r;return n+i}function Vg(e,t,n,r,i){return i!==void 0&&(e=yl(e,i,r)),yl(e,n,r)+t}function Hd(e,t=0,n=1,r,i){e.min=Vg(e.min,t,n,r,i),e.max=Vg(e.max,t,n,r,i)}function Aw(e,{x:t,y:n}){Hd(e.x,t.translate,t.scale,t.originPoint),Hd(e.y,n.translate,n.scale,n.originPoint)}const Bg=.999999999999,zg=1.0000000000001;function QD(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ci(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Aw(e,s)),r&&fr(o.latestValues)&&ci(e,o.latestValues))}t.x<zg&&t.x>Bg&&(t.x=1),t.y<zg&&t.y>Bg&&(t.y=1)}function li(e,t){e.min=e.min+t,e.max=e.max+t}function Wg(e,t,n,r,i=.5){const o=he(e.min,e.max,i);Hd(e,t,n,o,r)}function ci(e,t){Wg(e.x,t.x,t.scaleX,t.scale,t.originX),Wg(e.y,t.y,t.scaleY,t.scale,t.originY)}function Lw(e,t){return Dw(KD(e.getBoundingClientRect(),t))}function XD(e,t,n){const r=Lw(e,n),{scroll:i}=t;return i&&(li(r.x,i.offset.x),li(r.y,i.offset.y)),r}const _w=({current:e})=>e?e.ownerDocument.defaultView:null,ZD=new WeakMap;class JD{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(bs(d).point)},o=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:y}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UT(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(b=>{let g=this.getAxisMotionValue(b).get()||0;if(rn.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[b];v&&(g=gt(v)*(parseFloat(g)/100))}}this.originPoint[b]=g}),y&&se.postRender(()=>y(d,f)),Od(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:b}=f;if(m&&this.currentDirection===null){this.currentDirection=qD(b),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),x&&x(d,f)},l=(d,f)=>this.stop(d,f),c=()=>bt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new kw(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:_w(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&se.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!qs(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=BD(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&oi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=zD(i.layoutBox,n):this.constraints=!1,this.elastic=YD(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&bt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=HD(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!oi(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=XD(r,i.root,this.visualElement.getTransformPagePoint());let s=WD(i.layout.layoutBox,o);if(n){const l=n(GD(s));this.hasMutatedConstraints=!!l,l&&(s=Dw(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=bt(d=>{if(!qs(d,n,this.currentDirection))return;let f=c&&c[d]||{};s&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Od(this.visualElement,t),r.start(Zp(t,r,0,n,this.visualElement,!1))}stopAnimation(){bt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){bt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){bt(n=>{const{drag:r}=this.getProps();if(!qs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n];o.set(t[n]-he(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!oi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};bt(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=UD({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),bt(s=>{if(!qs(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(he(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;ZD.set(this.visualElement,this);const t=this.visualElement.current,n=No(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();oi(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const s=us(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(bt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Wd,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function qs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function qD(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class eE extends Jn{constructor(t){super(t),this.removeGroupControls=ht,this.removeListeners=ht,this.controls=new JD(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ht}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ug=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class tE extends Jn{constructor(){super(...arguments),this.removePointerDownListener=ht}onPointerDown(t){this.session=new kw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_w(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ug(t),onStart:Ug(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&se.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=No(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _a={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const no={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Hg(e,t.target.x),r=Hg(e,t.target.y);return`${n}% ${r}%`}},nE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yn.parse(e);if(i.length>5)return r;const o=Yn.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=he(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class rE extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;jT(iE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),_a.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||se.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Tp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Iw(e){const[t,n]=m1(),r=w.useContext(yp);return a.jsx(rE,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(j1),isPresent:t,safeToRemove:n})}const iE={borderRadius:{...no,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:no,borderTopRightRadius:no,borderBottomLeftRadius:no,borderBottomRightRadius:no,boxShadow:nE};function oE(e,t,n){const r=Ke(e)?e:ls(e);return r.start(Zp("",r,t,n)),r.animation}function sE(e){return e instanceof SVGElement&&e.tagName!=="svg"}const aE=(e,t)=>e.depth-t.depth;class lE{constructor(){this.children=[],this.isDirty=!1}add(t){Vp(this.children,t),this.isDirty=!0}remove(t){Bp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(aE),this.isDirty=!1,this.children.forEach(t)}}function cE(e,t){const n=on.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Hn(r),e(o-t))};return se.read(r,!0),()=>Hn(r)}const Mw=["TopLeft","TopRight","BottomLeft","BottomRight"],uE=Mw.length,Yg=e=>typeof e=="string"?parseFloat(e):e,Gg=e=>typeof e=="number"||z.test(e);function dE(e,t,n,r,i,o){i?(e.opacity=he(0,n.opacity!==void 0?n.opacity:1,fE(r)),e.opacityExit=he(t.opacity!==void 0?t.opacity:1,0,pE(r))):o&&(e.opacity=he(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<uE;s++){const l=`border${Mw[s]}Radius`;let c=Kg(t,l),u=Kg(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Gg(c)===Gg(u)?(e[l]=Math.max(he(Yg(c),Yg(u),r),0),(rn.test(u)||rn.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=he(t.rotate||0,n.rotate||0,r))}function Kg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const fE=Ow(0,.5,q1),pE=Ow(.5,.95,ht);function Ow(e,t,n){return r=>r<e?0:r>t?1:n(_i(e,t,r))}function Qg(e,t){e.min=t.min,e.max=t.max}function St(e,t){Qg(e.x,t.x),Qg(e.y,t.y)}function Xg(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Zg(e,t,n,r,i){return e-=t,e=yl(e,1/n,r),i!==void 0&&(e=yl(e,1/i,r)),e}function hE(e,t=0,n=1,r=.5,i,o=e,s=e){if(rn.test(t)&&(t=parseFloat(t),t=he(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=he(o.min,o.max,r);e===o&&(l-=t),e.min=Zg(e.min,t,n,l,i),e.max=Zg(e.max,t,n,l,i)}function Jg(e,t,[n,r,i],o,s){hE(e,t[n],t[r],t[i],t.scale,o,s)}const mE=["x","scaleX","originX"],gE=["y","scaleY","originY"];function qg(e,t,n,r){Jg(e.x,t,mE,n?n.x:void 0,r?r.x:void 0),Jg(e.y,t,gE,n?n.y:void 0,r?r.y:void 0)}function e0(e){return e.translate===0&&e.scale===1}function Rw(e){return e0(e.x)&&e0(e.y)}function t0(e,t){return e.min===t.min&&e.max===t.max}function vE(e,t){return t0(e.x,t.x)&&t0(e.y,t.y)}function n0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nw(e,t){return n0(e.x,t.x)&&n0(e.y,t.y)}function r0(e){return gt(e.x)/gt(e.y)}function i0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class yE{constructor(){this.members=[]}add(t){Vp(this.members,t),t.scheduleRender()}remove(t){if(Bp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function xE(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const pr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},jo=typeof window<"u"&&window.MotionDebug!==void 0,ru=["","X","Y","Z"],wE={visibility:"hidden"},o0=1e3;let SE=0;function iu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function $w(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Y1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&$w(r)}function Fw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=SE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,jo&&(pr.totalNodes=pr.resolvedTargetDeltas=pr.recalculatedProjection=0),this.nodes.forEach(kE),this.nodes.forEach(EE),this.nodes.forEach(AE),this.nodes.forEach(CE),jo&&window.MotionDebug.record(pr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new lE)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new zp),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=sE(s),this.instance=s;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=cE(p,250),_a.hasAnimatedSinceResize&&(_a.hasAnimatedSinceResize=!1,this.nodes.forEach(a0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||OE,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Nw(this.targetLayout,y)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const C={...Rp(x,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else p||a0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(LE),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$w(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(s0);return}this.isUpdating||this.nodes.forEach(PE),this.isUpdating=!1,this.nodes.forEach(DE),this.nodes.forEach(bE),this.nodes.forEach(jE),this.clearAllSnapshots();const l=on.now();$e.delta=xn(0,1e3/60,l-$e.timestamp),$e.timestamp=l,$e.isProcessing=!0,Kc.update.process($e),Kc.preRender.process($e),Kc.render.process($e),$e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TE),this.sharedNodes.forEach(_E)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Rw(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(l||fr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),RE(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:l}=this.options;if(!l)return we();const c=l.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(NE))){const{scroll:d}=this.root;d&&(li(c.x,d.offset.x),li(c.y,d.offset.y))}return c}removeElementScroll(s){var l;const c=we();if(St(c,s),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&St(c,s),li(c.x,f.offset.x),li(c.y,f.offset.y))}return c}applyTransform(s,l=!1){const c=we();St(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ci(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),fr(d.latestValues)&&ci(c,d.latestValues)}return fr(this.latestValues)&&ci(c,this.latestValues),c}removeTransform(s){const l=we();St(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!fr(u.latestValues))continue;Ud(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();St(d,f),qg(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return fr(this.latestValues)&&qg(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=$e.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Fo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),Aw(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Fo(this.relativeTargetOrigin,this.target,m.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}jo&&pr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ud(this.parent.latestValues)||Ew(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===$e.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;St(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;QD(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=we());const{target:y}=l;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xg(this.prevProjectionDelta.x,this.projectionDelta.x),Xg(this.prevProjectionDelta.y,this.projectionDelta.y)),$o(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!i0(this.projectionDelta.x,this.prevProjectionDelta.x)||!i0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),jo&&pr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ai(),this.projectionDelta=ai(),this.projectionDeltaWithTransform=ai()}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=ai();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=we(),m=c?c.source:void 0,y=this.layout?this.layout.source:void 0,x=m!==y,b=this.getStack(),g=!b||b.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(ME));this.animationProgress=0;let v;this.mixTargetDelta=C=>{const j=C/1e3;l0(f.x,s.x,j),l0(f.y,s.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IE(this.relativeTarget,this.relativeTargetOrigin,p,j),v&&vE(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),St(v,this.relativeTarget)),x&&(this.animationValues=d,dE(d,u,this.latestValues,j,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{_a.hasAnimatedSinceResize=!0,this.currentAnimation=oE(0,o0,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(o0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&Vw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||we();const f=gt(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+f;const p=gt(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+p}St(l,c),ci(l,d),$o(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new yE),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&iu("z",s,u,this.animationValues);for(let d=0;d<ru.length;d++)iu(`rotate${ru[d]}`,s,u,this.animationValues),iu(`skew${ru[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}getProjectionStyles(s){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return wE;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Aa(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Aa(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!fr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=xE(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in pl){if(p[x]===void 0)continue;const{correct:b,applyTo:g}=pl[x],h=u.transform==="none"?p[x]:b(p[x],f);if(g){const v=g.length;for(let C=0;C<v;C++)u[g[C]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=f===this?Aa(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(s0),this.root.sharedNodes.clear()}}}function bE(e){e.updateLayout()}function jE(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?bt(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],m=gt(p);p.min=r[f].min,p.max=p.min+m}):Vw(o,n.layoutBox,r)&&bt(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],m=gt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const l=ai();$o(l,r,n.layoutBox);const c=ai();s?$o(c,e.applyTransform(i,!0),n.measuredBox):$o(c,r,n.layoutBox);const u=!Rw(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const y=we();Fo(y,n.layoutBox,p.layoutBox);const x=we();Fo(x,r,m.layoutBox),Nw(y,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function kE(e){jo&&pr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function CE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function TE(e){e.clearSnapshot()}function s0(e){e.clearMeasurements()}function PE(e){e.isLayoutDirty=!1}function DE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function a0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function EE(e){e.resolveTargetDelta()}function AE(e){e.calcProjection()}function LE(e){e.resetSkewAndRotation()}function _E(e){e.removeLeadSnapshot()}function l0(e,t,n){e.translate=he(t.translate,0,n),e.scale=he(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function c0(e,t,n,r){e.min=he(t.min,n.min,r),e.max=he(t.max,n.max,r)}function IE(e,t,n,r){c0(e.x,t.x,n.x,r),c0(e.y,t.y,n.y,r)}function ME(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const OE={duration:.45,ease:[.4,0,.1,1]},u0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),d0=u0("applewebkit/")&&!u0("chrome/")?Math.round:ht;function f0(e){e.min=d0(e.min),e.max=d0(e.max)}function RE(e){f0(e.x),f0(e.y)}function Vw(e,t,n){return e==="position"||e==="preserve-aspect"&&!FD(r0(t),r0(n),.2)}function NE(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const $E=Fw({attachResizeListener:(e,t)=>us(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ou={current:void 0},Bw=Fw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ou.current){const e=new $E({});e.mount(window),e.setOptions({layoutScroll:!0}),ou.current=e}return ou.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),FE={pan:{Feature:tE},drag:{Feature:eE,ProjectionNode:Bw,MeasureLayout:Iw}};function p0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&se.postRender(()=>o(t,bs(t)))}class VE extends Jn{mount(){const{current:t}=this.node;t&&(this.unmount=FT(t,n=>(p0(this.node,n,"Start"),r=>p0(this.node,r,"End"))))}unmount(){}}class BE extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ss(us(this.node.current,"focus",()=>this.onFocus()),us(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function h0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&se.postRender(()=>o(t,bs(t)))}class zE extends Jn{mount(){const{current:t}=this.node;t&&(this.unmount=WT(t,n=>(h0(this.node,n,"Start"),(r,{success:i})=>h0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Yd=new WeakMap,su=new WeakMap,WE=e=>{const t=Yd.get(e.target);t&&t(e)},UE=e=>{e.forEach(WE)};function HE({root:e,...t}){const n=e||document;su.has(n)||su.set(n,{});const r=su.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(UE,{root:e,...t})),r[i]}function YE(e,t,n){const r=HE(t);return Yd.set(e,n),r.observe(e),()=>{Yd.delete(e),r.unobserve(e)}}const GE={some:0,all:1};class KE extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:GE[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return YE(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(QE(t,n))&&this.startObserver()}unmount(){}}function QE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const XE={inView:{Feature:KE},tap:{Feature:zE},focus:{Feature:BE},hover:{Feature:VE}},ZE={layout:{ProjectionNode:Bw,MeasureLayout:Iw}},Gd={current:null},zw={current:!1};function JE(){if(zw.current=!0,!!Sp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gd.current=e.matches;e.addListener(t),t()}else Gd.current=!1}const qE=[...pw,Ue,Yn],e5=e=>qE.find(fw(e)),m0=new WeakMap;function t5(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ke(i))e.addValue(r,i);else if(Ke(o))e.addValue(r,ls(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,ls(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const g0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class n5{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Kp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=on.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,se.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=s;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Kl(n),this.isVariantNode=S1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const y=p[m];c[m]!==void 0&&Ke(y)&&y.set(c[m],!1)}}mount(t){this.current=t,m0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),zw.current||JE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){m0.delete(this.current),this.projection&&this.projection.unmount(),Hn(this.notifyUpdate),Hn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Mr.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ii){const n=Ii[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<g0.length;r++){const i=g0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=t5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ls(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(uw(i)||tw(i))?i=parseFloat(i):!e5(i)&&Yn.test(n)&&(i=aw(t,n)),this.setBaseTarget(t,Ke(i)?i.get():i)),Ke(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=Dp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ke(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new zp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ww extends n5{constructor(){super(...arguments),this.KeyframeResolver=hw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ke(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function r5(e){return window.getComputedStyle(e)}class i5 extends Ww{constructor(){super(...arguments),this.type="html",this.renderInstance=A1}readValueFromInstance(t,n){if(Mr.has(n)){const r=Gp(n);return r&&r.default||0}else{const r=r5(t),i=(P1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Lw(t,n)}build(t,n,r){Lp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Op(t,n,r)}}class o5 extends Ww{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=we}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Mr.has(n)){const r=Gp(n);return r&&r.default||0}return n=L1.has(n)?n:Cp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return M1(t,n,r)}build(t,n,r){_p(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){_1(t,n,r,i)}mount(t){this.isSVGTag=Mp(t.tagName),super.mount(t)}}const s5=(e,t)=>Pp(e)?new o5(t):new i5(t,{allowProjection:e!==w.Fragment}),a5=_T({...AD,...XE,...FE,...ZE},s5),O=GC(a5),l5=S(O.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,c5=S.div`
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
`,u5=S(Bx)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,d5=S.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,f5=S.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,p5=S(O.button)`
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
`,h5=S(O.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,m5=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"5"}),a.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),a.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),a.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),a.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),a.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),a.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),a.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),a.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),g5=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),v5=()=>{const{isDark:e,toggleTheme:t}=up();return a.jsx(l5,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:a.jsxs(c5,{children:[a.jsx(u5,{to:"/","aria-label":"Go to homepage",children:a.jsx(d5,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),a.jsx(f5,{}),a.jsx(p5,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:a.jsx(Ye,{mode:"wait",children:a.jsx(h5,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?a.jsx(g5,{}):a.jsx(m5,{})},e?"moon":"sun")})})]})})},y5=S(O.div)`
  position: relative;
`,x5=S(Bx)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Uw=S(O.div)`
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
`,w5=S(O.div)`
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

  ${Uw}:hover &::before {
    opacity: 0.3;
  }
`,S5=S.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,b5={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},j5={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},k5=({title:e,icon:t,to:n})=>a.jsx(y5,{variants:b5,whileHover:"hover",whileTap:"tap",children:a.jsx(x5,{to:n,children:a.jsxs(Uw,{variants:j5,children:[a.jsx(w5,{children:t}),a.jsx(S5,{children:e})]})})}),C5=S.div`
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
`,T5=S(O.div)`
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
`,P5={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},D5=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),a.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),a.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),a.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),a.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),a.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),a.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),a.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),a.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),a.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),E5=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),a.jsx("path",{d:"M1 10h22"}),a.jsx("path",{d:"M17 14h.01"})]}),A5=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("polyline",{points:"21 15 16 10 5 21"})]}),L5=[{id:"tax-manager",title:"Tax Manager",icon:a.jsx(D5,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:a.jsx(E5,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:a.jsx(A5,{}),to:"/canvas-manager"}],_5=()=>a.jsx(C5,{children:a.jsx(T5,{variants:P5,initial:"hidden",animate:"visible",children:L5.map(e=>a.jsx(k5,{title:e.title,icon:e.icon,to:e.to},e.id))})}),Hw=S.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;S.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Ia=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],v0=75e3,ui=4,I5=12e5,M5=6e4,y0=5e6,x0=10,O5=12,R5=1800;function kr(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const o=r.slice(-3),s=r.slice(0,-3);if(s.length>0){const l=[];let c=s;for(;c.length>0;)c.length>=2?(l.unshift(c.slice(-2)),c=c.slice(0,-2)):(l.unshift(c),c="");i=l.join(",")+","+o}else i=o;return(t?"-":"")+i}function H(e){return"₹"+kr(e)}function K(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,o]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+kr(parseInt(i))+"."+o}function w0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:kr(e)}function N5(e){for(let t=Ia.length-1;t>=0;t--)if(e>Ia[t].from)return Ia[t].rate;return 0}function $5(e){const t=[];let n=e,r=0;for(const i of Ia){const o=i.from,l=(i.to??1/0)-o;if(n<=0){t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,l),u=c*i.rate/100;t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function F5(e,t){if(t>y0){const r=e*(1+x0/100)*(1+ui/100),i=t-y0,s=(e+i)*(1+ui/100),l=s<r,c=Math.min(r,s),u=c/(1+ui/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:x0,surchargeAmount:d,marginalReliefApplied:l,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(ui/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function S0(e,t,n,r,i,o,s){const l=e*t/100,c=e-l;let u=0;i==="percentage"?u=e*o/100:i==="amount"&&(u=o);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=l*O5/100,p=f):(f=R5*12,p=f));const m=e-p,y=s.map(ae=>({name:ae.name,amount:ae.amount*12})),x=y.reduce((ae,le)=>ae+le.amount,0),b=Math.max(0,m-v0),{slabs:g,totalTax:h}=$5(b);let v=0,C=h;b<=I5&&(v=Math.min(h,M5),C=Math.max(0,h-v));const{surchargeApplicable:j,surchargeRate:k,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:E,cess:_,totalTax:N}=F5(C,b),I=f+p,F=N,U=f+N+x,D=m-f-N-x,W=D/12,V=m>0?N/m*100:0,A=N5(b);let M=0,R=u;if(u>0&&A>0){let ae=u*A/100;j&&(ae=ae*(1+k/100)),M=ae*(1+ui/100),R=u-M}const B=D+R,G=B/12;return{baseSalary:e,basicSalary:l,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:m,standardDeduction:v0,additionalDeductions:y,totalAdditionalDeductions:x,taxableIncome:b,slabs:g,taxBeforeSurcharge:h,surchargeApplicable:j,surchargeRate:k,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:E,cessRate:ui,cess:_,totalTax:N,rebate87A:v,totalPFDeduction:I,totalTaxDeduction:F,totalDeductions:U,netSalaryYearly:D,netSalaryMonthly:W,effectiveTaxRate:V,bonusTaxRate:A,bonusTaxAmount:M,bonusAfterTax:R,totalIncomeYearly:B,totalIncomeMonthly:G}}function V5(e){const t=S0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=S0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const Jp="taxCalculatorInput";function B5(e){localStorage.setItem(Jp,JSON.stringify(e))}function z5(){localStorage.removeItem(Jp)}function Yw(){const e=localStorage.getItem(Jp);if(e)try{return JSON.parse(e)}catch{return null}return null}const W5={financialYear:"FY 2025-26"},U5=S(O.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,ro=S.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,io=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,oo=S.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e||"var(--accent)"};
  }
`,so=S.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,H5=S.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,Fr=S.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,b0=S.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,nr=S.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  font-size: 16px; /* Minimum 16px to prevent iOS Safari zoom */
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,au=S.div`
  position: relative;

  &::before {
    content: '₹';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-left: 30px;
  }
`,lu=S.div`
  position: relative;

  &::after {
    content: '%';
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
    font-weight: 500;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-right: 32px;
  }
`,j0=S.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,ao=S(O.button)`
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
`,Y5=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,cu=S(O.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,uu=S(O.button)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(239, 68, 68, 0.1);
  border: none;
  border-radius: 10px;
  color: #ef4444;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`,G5=S(O.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: transparent;
  border: 1px dashed var(--border);
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: rgba(var(--accent-rgb), 0.05);
    border-color: var(--accent);
  }
`,K5=S.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,Q5=S(O.button)`
  flex: 1;
  height: 48px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,X5=S(O.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,Z5=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),a.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),a.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),J5=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),q5=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),a.jsx("path",{d:"M12 8v13"}),a.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),a.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),e4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("path",{d:"M8 12h8"})]}),t4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),a.jsx("polyline",{points:"16 7 22 7 22 13"})]}),n4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),du=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),xl={type:"spring",stiffness:300,damping:30,mass:.8},r4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:xl}},i4={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...xl},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...xl},opacity:{duration:.1}}}},o4={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:xl},exit:{opacity:0,x:-20,transition:{duration:.15}}};function fu(e){const t=e.replace(/[^\d]/g,"");return t?kr(parseInt(t)):""}function ea(e){return parseInt(e.replace(/,/g,""))||0}const s4=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=w.useState(""),[o,s]=w.useState("50"),[l,c]=w.useState("percentage"),[u,d]=w.useState("none"),[f,p]=w.useState(""),[m,y]=w.useState([]),[x,b]=w.useState(""),[g,h]=w.useState(!1),v=w.useRef(!1);w.useEffect(()=>{const D=Yw();D&&(i(kr(D.baseSalary)),s(D.basicPercentage.toString()),c(D.pfType),d(D.bonusType),p(D.bonusValue>0?D.bonusType==="amount"?kr(D.bonusValue):D.bonusValue.toString():""),y(D.additionalDeductions.map(W=>({name:W.name,amount:kr(W.amount)}))),b(D.hikePercentage>0?D.hikePercentage.toString():"")),h(!0)},[]),w.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{_()},100))},[g,n,r]);const C=D=>{i(fu(D))},j=D=>{p(fu(D))},k=(D,W)=>{const V=[...m];V[D].amount=fu(W),y(V)},T=()=>{y([...m,{name:"",amount:""}])},P=D=>{y(m.filter((W,V)=>V!==D))},E=(D,W)=>{const V=[...m];V[D].name=W,y(V)},_=()=>{const D={baseSalary:ea(r),basicPercentage:parseFloat(o)||50,calculatePF:!0,pfType:l,bonusType:u,bonusValue:u==="amount"?ea(f):parseFloat(f)||0,additionalDeductions:m.filter(W=>W.name&&W.amount).map(W=>({name:W.name,amount:ea(W.amount)})),hikePercentage:parseFloat(x)||0};B5(D),e(D)},N=()=>{i(""),s("50"),c("percentage"),d("none"),p(""),y([]),b(""),z5(),t==null||t()},F=ea(r)>0,U=r||m.length>0||u!=="none"||x;return a.jsxs(U5,{variants:r4,initial:"hidden",animate:"visible",children:[a.jsxs(ro,{children:[a.jsxs(io,{children:[a.jsx(oo,{$color:"#10b981",children:a.jsx(Z5,{})}),a.jsx(so,{children:"Salary Details"})]}),a.jsxs(H5,{children:[a.jsxs(Fr,{children:[a.jsx(b0,{children:"Yearly CTC *"}),a.jsx(au,{children:a.jsx(nr,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:D=>C(D.target.value)})})]}),a.jsxs(Fr,{children:[a.jsx(b0,{children:"Basic %"}),a.jsx(lu,{children:a.jsx(nr,{type:"number",inputMode:"numeric",placeholder:"50",value:o,onChange:D=>s(D.target.value),min:"0",max:"100"})})]})]})]}),a.jsxs(ro,{children:[a.jsxs(io,{children:[a.jsx(oo,{$color:"#3b82f6",children:a.jsx(J5,{})}),a.jsx(so,{children:"Provident Fund"})]}),a.jsxs(j0,{children:[a.jsx(ao,{$active:l==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),a.jsx(ao,{$active:l==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),a.jsxs(ro,{children:[a.jsxs(io,{children:[a.jsx(oo,{$color:"#f59e0b",children:a.jsx(q5,{})}),a.jsx(so,{children:"Bonus (Optional)"})]}),a.jsxs(j0,{children:[a.jsx(ao,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),a.jsx(ao,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),a.jsx(ao,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),a.jsx(Ye,{initial:!1,children:u!=="none"&&a.jsx(O.div,{initial:"hidden",animate:"visible",exit:"exit",variants:i4,style:{overflow:"hidden",marginTop:"12px"},children:a.jsxs(cu,{children:[a.jsx(Fr,{style:{flex:1},children:u==="percentage"?a.jsx(lu,{children:a.jsx(nr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:D=>p(D.target.value)})}):a.jsx(au,{children:a.jsx(nr,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:D=>j(D.target.value)})})}),a.jsx(Ye,{children:f&&a.jsx(uu,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(du,{})})})]})},"bonus-input")})]}),a.jsxs(ro,{children:[a.jsxs(io,{children:[a.jsx(oo,{$color:"#ec4899",children:a.jsx(e4,{})}),a.jsx(so,{children:"Monthly Deductions"})]}),a.jsxs(Y5,{children:[a.jsx(Ye,{mode:"popLayout",children:m.map((D,W)=>a.jsxs(cu,{variants:o4,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[a.jsx(Fr,{style:{flex:1},children:a.jsx(nr,{type:"text",placeholder:"Name (e.g., Cab)",value:D.name,onChange:V=>E(W,V.target.value)})}),a.jsx(Fr,{style:{flex:1},children:a.jsx(au,{children:a.jsx(nr,{type:"text",inputMode:"numeric",placeholder:"Amount",value:D.amount,onChange:V=>k(W,V.target.value)})})}),a.jsx(uu,{onClick:()=>P(W),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(du,{})})]},W))}),a.jsxs(G5,{onClick:T,whileHover:{scale:1.01},whileTap:{scale:.99},children:[a.jsx(n4,{}),"Add Deduction"]})]})]}),a.jsxs(ro,{children:[a.jsxs(io,{children:[a.jsx(oo,{$color:"#8b5cf6",children:a.jsx(t4,{})}),a.jsx(so,{children:"Hike / Appraisal"})]}),a.jsxs(cu,{children:[a.jsx(Fr,{style:{flex:1},children:a.jsx(lu,{children:a.jsx(nr,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:x,onChange:D=>b(D.target.value),min:"0",max:"200"})})}),a.jsx(Ye,{children:x&&a.jsx(uu,{onClick:()=>b(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(du,{})})})]})]}),a.jsxs(K5,{children:[a.jsx(Q5,{onClick:_,disabled:!F,whileHover:F?{scale:1.02}:{},whileTap:F?{scale:.98}:{},children:"Calculate Tax"}),a.jsx(Ye,{children:U&&a.jsx(X5,{onClick:N,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},a4=S(O.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,rr=S(O.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,ir=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,or=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,sr=S.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e||"var(--accent)"};
  }
`,ar=S.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,lr=S.div`
  padding: 16px;
`,lo=S.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Yt=S.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:e})=>e?`${e}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:e})=>e||"var(--accent)"};
`,pu=S(O.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:e})=>e||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,hu=S.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,mu=S.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,Vr=S.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,l4=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Br=S.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,zr=S.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,Wr=S.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Ur=S.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,sn=S.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,De=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,Ee=S.span`
  font-size: 14px;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  color: ${({$bold:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,J=S.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"#10b981":t?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,rt=S.div`
  text-align: right;
  flex-shrink: 0;
`,it=S.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,c4=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k0=S(O.div)`
  display: grid;
  grid-template-columns: 1fr 50px 1fr 1fr;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  
  ${({$header:e})=>e&&`
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
`,jn=S.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"#10b981":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,u4=S(O.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: 2px;
  margin-top: 4px;
`,d4=S.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,f4=S(O.div)`
  height: 100%;
  background: ${({$color:e})=>e};
`,p4=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,h4=S.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,m4=S.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,g4=S.span`
  font-size: 12px;
  color: var(--text-secondary);
`,v4=S.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,co=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,Gt=S.div`
  padding: 14px;
  background: ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Kt=S.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,Qt=S.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,uo=S.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,C0=S(O.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,T0=S.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,y4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),a.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),a.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),x4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),a.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),a.jsx("path",{d:"M12 17.5v-11"})]}),w4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.jsx("path",{d:"M3 9h18"}),a.jsx("path",{d:"M9 21V9"})]}),S4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),a.jsx("path",{d:"M12 8v13"}),a.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),a.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),P0=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),a.jsx("polyline",{points:"16 7 22 7 22 13"})]}),b4=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),j4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},cr={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},k4=({breakdown:e})=>{const[t,n]=w.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"#10b981":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",o=Math.max(...e.slabs.map(p=>p.taxInSlab),1),l=(()=>{const p=t==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:e.netSalaryYearly*p,color:"#10b981"},{label:"Tax",value:e.totalTax*p,color:"#4361A5"},{label:"PF",value:e.employeePF*p,color:"#3BB4B1"}];return e.totalAdditionalDeductions>0&&m.push({label:"Other",value:e.totalAdditionalDeductions*p,color:"#7BA7D9"}),m})(),c=l.reduce((p,m)=>p+m.value,0),u=[];e.surchargeApplicable&&u.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&u.push(`<strong>Section 87A rebate</strong> of ${H(e.rebate87A)} applied`),e.effectiveTaxRate>0&&u.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const d=!!e.postHike,f=e.bonus>0;return a.jsxs(a4,{variants:j4,initial:"hidden",animate:"visible",children:[d&&a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#3b82f6",children:a.jsx(P0,{})}),a.jsx(ar,{children:"Base Salary (CTC)"})]}),a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),a.jsx(lr,{children:a.jsxs(co,{children:[a.jsxs(Gt,{children:[a.jsx(Kt,{children:"Current"}),a.jsx(Qt,{children:H(e.baseSalary)})]}),a.jsxs(Gt,{$highlight:!0,children:[a.jsx(Kt,{children:"After Hike"}),a.jsx(Qt,{children:H(e.postHike.baseSalary)}),a.jsxs(uo,{children:["+",H(e.postHike.baseSalary-e.baseSalary)]})]})]})})]}),a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#10b981",children:a.jsx(y4,{})}),a.jsx(ar,{children:"In-Hand Salary"})]}),a.jsxs(lo,{children:[d&&a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),a.jsxs(mu,{children:[a.jsx(Vr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),a.jsx(Vr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),a.jsx(lr,{children:d?a.jsxs(co,{children:[a.jsxs(Gt,{children:[a.jsx(Kt,{children:"Current"}),a.jsx(Qt,{children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]}),a.jsxs(Gt,{$highlight:!0,children:[a.jsxs(Kt,{children:["After ",e.hikePercentage,"% Hike"]}),a.jsx(Qt,{children:K(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),a.jsxs(uo,{children:["+",H(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(pu,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),a.jsxs(hu,{children:[t==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),f&&a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#f59e0b",children:a.jsx(S4,{})}),a.jsx(ar,{children:"Bonus"})]}),d&&a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),a.jsxs(lr,{children:[d?a.jsxs(a.Fragment,{children:[a.jsxs(co,{children:[a.jsxs(Gt,{children:[a.jsx(Kt,{children:"Current Gross"}),a.jsx(Qt,{children:H(e.bonus)})]}),a.jsxs(Gt,{$highlight:!0,children:[a.jsx(Kt,{children:"After Hike Gross"}),a.jsx(Qt,{children:H(e.postHike.bonus)}),a.jsxs(uo,{children:["+",H(e.postHike.bonus-e.bonus)]})]})]}),a.jsx(sn,{}),a.jsxs(co,{children:[a.jsxs(Gt,{children:[a.jsx(Kt,{children:"Current In-Hand"}),a.jsx(Qt,{children:K(e.bonusAfterTax)})]}),a.jsxs(Gt,{$highlight:!0,children:[a.jsx(Kt,{children:"After Hike In-Hand"}),a.jsx(Qt,{children:K(e.postHike.bonusAfterTax)}),a.jsxs(uo,{children:["+",H(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(pu,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:H(e.bonus)}),a.jsx(hu,{children:"Gross Bonus (before tax)"}),a.jsx(sn,{}),a.jsxs(De,{children:[a.jsxs(Ee,{children:["Tax Deducted (",e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess)"]}),a.jsxs(J,{$negative:!0,children:["-",K(e.bonusTaxAmount)]})]}),a.jsxs(De,{children:[a.jsx(Ee,{$bold:!0,children:"In-Hand Bonus"}),a.jsx(J,{$highlight:!0,children:K(e.bonusAfterTax)})]})]}),a.jsx(sn,{}),a.jsx(C0,{style:{borderLeftColor:"#f59e0b"},children:a.jsxs(T0,{children:["Bonus is taxed at your ",a.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]})]}),f&&a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#8b5cf6",children:a.jsx(P0,{})}),a.jsx(ar,{children:"Total Combined Income"})]}),a.jsxs(lo,{children:[d&&a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),a.jsx(Yt,{children:"Yearly"})]})]}),a.jsxs(lr,{children:[d?a.jsxs(co,{children:[a.jsxs(Gt,{children:[a.jsx(Kt,{children:"Current Total"}),a.jsx(Qt,{children:K(e.totalIncomeYearly)})]}),a.jsxs(Gt,{$highlight:!0,children:[a.jsx(Kt,{children:"After Hike Total"}),a.jsx(Qt,{children:K(e.postHike.totalIncomeYearly)}),a.jsxs(uo,{children:["+",H(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(pu,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:K(e.totalIncomeYearly)}),a.jsx(hu,{children:"Base salary + Bonus (after tax)"})]}),a.jsx(sn,{}),a.jsxs(De,{children:[a.jsx(Ee,{children:"Base In-Hand (Yearly)"}),d?a.jsxs(rt,{children:[a.jsx(J,{children:K(e.netSalaryYearly)}),a.jsxs(it,{$positive:!0,children:["→ ",K(e.postHike.netSalaryYearly)]})]}):a.jsx(J,{children:K(e.netSalaryYearly)})]}),a.jsxs(De,{children:[a.jsx(Ee,{children:"Bonus In-Hand"}),d?a.jsxs(rt,{children:[a.jsx(J,{children:K(e.bonusAfterTax)}),a.jsxs(it,{$positive:!0,children:["→ ",K(e.postHike.bonusAfterTax)]})]}):a.jsx(J,{children:K(e.bonusAfterTax)})]}),a.jsxs(De,{children:[a.jsx(Ee,{$bold:!0,children:"Total Combined"}),d?a.jsxs(rt,{children:[a.jsx(J,{$highlight:!0,children:K(e.totalIncomeYearly)}),a.jsxs(it,{$positive:!0,children:["→ ",K(e.postHike.totalIncomeYearly)]})]}):a.jsx(J,{$highlight:!0,children:K(e.totalIncomeYearly)})]})]})]}),a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#ec4899",children:a.jsx(w4,{})}),a.jsx(ar,{children:"Summary"})]}),a.jsxs(lo,{children:[d&&a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),a.jsxs(mu,{children:[a.jsx(Vr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),a.jsx(Vr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),a.jsxs(lr,{children:[a.jsxs(l4,{children:[a.jsxs(Br,{children:[a.jsx(zr,{children:"Gross Salary"}),a.jsx(Wr,{children:H(e.grossSalary*r)}),d&&a.jsxs(Ur,{$positive:!0,children:["→ ",H(e.postHike.grossSalary*r)]})]}),a.jsxs(Br,{children:[a.jsx(zr,{children:"Total Tax"}),a.jsx(Wr,{children:K(e.totalTax*r)}),d&&a.jsxs(Ur,{children:["→ ",K(e.postHike.totalTax*r)]})]}),a.jsxs(Br,{children:[a.jsx(zr,{children:"Employee PF"}),a.jsx(Wr,{children:H(e.employeePF*r)}),d&&a.jsxs(Ur,{$positive:!0,children:["→ ",H(e.postHike.employeePF*r)]})]}),a.jsxs(Br,{children:[a.jsx(zr,{children:"Employer PF"}),a.jsx(Wr,{children:H(e.employerPF*r)}),d&&a.jsxs(Ur,{$positive:!0,children:["→ ",H(e.postHike.employerPF*r)]})]}),a.jsxs(Br,{children:[a.jsx(zr,{children:"Total PF"}),a.jsx(Wr,{children:H((e.employeePF+e.employerPF)*r)}),d&&a.jsxs(Ur,{$positive:!0,children:["→ ",H((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),a.jsxs(Br,{children:[a.jsx(zr,{children:"Eff. Tax Rate"}),a.jsxs(Wr,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),d&&a.jsxs(Ur,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),a.jsx(sn,{}),a.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",t==="monthly"?"Monthly":"Yearly",")"]}),a.jsx(d4,{children:l.map((p,m)=>a.jsx(f4,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),a.jsx(p4,{children:l.map((p,m)=>a.jsxs(h4,{children:[a.jsx(m4,{$color:p.color}),a.jsx(g4,{children:p.label}),a.jsx(v4,{children:H(p.value)})]},m))}),u.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(sn,{}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:u.map((p,m)=>a.jsx(C0,{children:a.jsx(T0,{dangerouslySetInnerHTML:{__html:p}})},m))})]})]})]}),a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#10b981",children:a.jsx(b4,{})}),a.jsx(ar,{children:"Breakdown"})]}),a.jsxs(lo,{children:[d&&a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),a.jsxs(mu,{children:[a.jsx(Vr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),a.jsx(Vr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),a.jsxs(lr,{children:[a.jsxs(De,{children:[a.jsx(Ee,{children:"Base Salary (CTC)"}),d?a.jsxs(rt,{children:[a.jsx(J,{children:H(e.baseSalary*r)}),a.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.baseSalary*r)]})]}):a.jsx(J,{children:H(e.baseSalary*r)})]}),e.employerPF>0&&a.jsxs(De,{children:[a.jsx(Ee,{children:"Less: Employer PF"}),d?a.jsxs(rt,{children:[a.jsxs(J,{$negative:!0,children:["-",H(e.employerPF*r)]}),a.jsxs(it,{children:["→ -",H(e.postHike.employerPF*r)]})]}):a.jsxs(J,{$negative:!0,children:["-",H(e.employerPF*r)]})]}),a.jsxs(De,{children:[a.jsx(Ee,{$bold:!0,children:"Gross Salary"}),d?a.jsxs(rt,{children:[a.jsx(J,{children:H(e.grossSalary*r)}),a.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.grossSalary*r)]})]}):a.jsx(J,{children:H(e.grossSalary*r)})]}),t==="yearly"&&a.jsxs(a.Fragment,{children:[a.jsxs(De,{children:[a.jsx(Ee,{children:"Less: Standard Deduction"}),a.jsxs(J,{$negative:!0,children:["-",H(e.standardDeduction)]})]}),a.jsxs(De,{children:[a.jsx(Ee,{$bold:!0,children:"Taxable Income"}),d?a.jsxs(rt,{children:[a.jsx(J,{children:H(e.taxableIncome)}),a.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.taxableIncome)]})]}):a.jsx(J,{children:H(e.taxableIncome)})]})]}),a.jsx(sn,{}),a.jsxs(De,{children:[a.jsx(Ee,{children:"Less: Income Tax"}),d?a.jsxs(rt,{children:[a.jsxs(J,{$negative:!0,children:["-",K(e.totalTax*r)]}),a.jsxs(it,{children:["→ -",K(e.postHike.totalTax*r)]})]}):a.jsxs(J,{$negative:!0,children:["-",K(e.totalTax*r)]})]}),e.employeePF>0&&a.jsxs(De,{children:[a.jsx(Ee,{children:"Less: Employee PF"}),d?a.jsxs(rt,{children:[a.jsxs(J,{$negative:!0,children:["-",H(e.employeePF*r)]}),a.jsxs(it,{children:["→ -",H(e.postHike.employeePF*r)]})]}):a.jsxs(J,{$negative:!0,children:["-",H(e.employeePF*r)]})]}),e.additionalDeductions.map((p,m)=>a.jsxs(De,{children:[a.jsxs(Ee,{children:["Less: ",p.name]}),a.jsxs(J,{$negative:!0,children:["-",H(p.amount*r)]})]},m)),a.jsx(sn,{}),a.jsxs(De,{children:[a.jsxs(Ee,{$bold:!0,children:["Net In-Hand (",t==="monthly"?"Monthly":"Yearly",")"]}),d?a.jsxs(rt,{children:[a.jsx(J,{$highlight:!0,children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)}),a.jsxs(it,{$positive:!0,children:["→ ",K(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)]})]}):a.jsx(J,{$highlight:!0,children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]})]})]}),a.jsxs(rr,{variants:cr,children:[a.jsxs(ir,{children:[a.jsxs(or,{children:[a.jsx(sr,{$color:"#3b82f6",children:a.jsx(x4,{})}),a.jsx(ar,{children:"Tax Slabs"})]}),a.jsxs(lo,{children:[a.jsx(Yt,{children:W5.financialYear}),d&&a.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]})]}),a.jsxs(lr,{children:[a.jsxs(c4,{children:[a.jsxs(k0,{$header:!0,children:[a.jsx(jn,{children:"Slab"}),a.jsx(jn,{$align:"center",children:"Rate"}),a.jsx(jn,{$align:"right",children:"Amount"}),a.jsx(jn,{$align:"right",children:"Tax"})]}),a.jsx(Ye,{children:e.slabs.map((p,m)=>a.jsxs(k0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[a.jsxs(jn,{children:[w0(p.from)," - ",w0(p.to),p.taxableInSlab>0&&a.jsx(u4,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/o*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),a.jsxs(jn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),a.jsx(jn,{$align:"right",$muted:p.taxableInSlab===0,children:p.taxableInSlab>0?H(p.taxableInSlab):"-"}),a.jsx(jn,{$align:"right",$muted:p.taxInSlab===0,children:p.taxInSlab>0?H(p.taxInSlab):"-"})]},m))})]}),a.jsx(sn,{}),a.jsxs(De,{children:[a.jsx(Ee,{children:"Tax Before Surcharge"}),d?a.jsxs(rt,{children:[a.jsx(J,{children:K(e.taxBeforeSurcharge)}),a.jsxs(it,{children:["→ ",K(e.postHike.taxBeforeSurcharge)]})]}):a.jsx(J,{children:K(e.taxBeforeSurcharge)})]}),e.rebate87A>0&&a.jsxs(De,{children:[a.jsx(Ee,{children:"Section 87A Rebate"}),a.jsxs(J,{$negative:!0,children:["-",H(e.rebate87A)]})]}),e.surchargeApplicable&&a.jsxs(De,{children:[a.jsxs(Ee,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&a.jsx(Yt,{$color:"#f59e0b",children:"Marginal Relief"})]}),d&&e.postHike.surchargeApplicable?a.jsxs(rt,{children:[a.jsx(J,{children:K(e.surchargeAmount)}),a.jsxs(it,{children:["→ ",K(e.postHike.surchargeAmount)]})]}):a.jsx(J,{children:K(e.surchargeAmount)})]}),a.jsxs(De,{children:[a.jsxs(Ee,{children:["Cess (",e.cessRate,"%)"]}),d?a.jsxs(rt,{children:[a.jsx(J,{children:K(e.cess)}),a.jsxs(it,{children:["→ ",K(e.postHike.cess)]})]}):a.jsx(J,{children:K(e.cess)})]}),a.jsxs(De,{children:[a.jsx(Ee,{$bold:!0,children:"Total Tax"}),d?a.jsxs(rt,{children:[a.jsx(J,{$highlight:!0,children:K(e.totalTax)}),a.jsxs(it,{children:["→ ",K(e.postHike.totalTax)]})]}):a.jsx(J,{$highlight:!0,children:K(e.totalTax)})]})]})]})]})},C4=S(O.div)`
  min-height: 100vh;
  padding-top: var(--space-lg);
  padding-bottom: calc(var(--space-3xl) + 80px);
  overflow-x: hidden;
  max-width: 100vw;

  @media (max-width: 1023px) {
    padding-bottom: calc(var(--space-2xl) + 80px);
  }

  @media (max-width: 640px) {
    padding-top: var(--space-md);
    padding-bottom: calc(var(--space-xl) + 100px);
  }
`,T4=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: var(--space-xl);
    align-items: start;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 420px 1fr;
  }
`,P4=S(O.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,D4=S(O.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,E4={type:"spring",stiffness:300,damping:30,mass:.8},A4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},D0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:E4}},L4=()=>{const[e,t]=w.useState(null),[n,r]=w.useState(!1);w.useEffect(()=>{const s=Yw();s&&s.baseSalary>0&&r(!0)},[]);const i=w.useCallback(s=>{const l=V5(s);t(l),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),o=w.useCallback(()=>{t(null)},[]);return a.jsx(C4,{variants:A4,initial:"hidden",animate:"visible",children:a.jsx(Hw,{$maxWidth:"wide",children:a.jsxs(T4,{children:[a.jsx(P4,{variants:D0,children:a.jsx(s4,{onCalculate:i,onReset:o,autoCalculate:n})}),a.jsx(D4,{id:"results",variants:D0,children:e&&a.jsx(k4,{breakdown:e},"results")})]})})})},Cr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],Gw="expense-manager-transactions",Kw="expense-manager-initial-balances",Qw="expense-manager-initial-cc-bills",Xw="expense-manager-cc-limits";function qp(e,t){return e===void 0?{amount:0,type:"billed",setupDate:t}:typeof e=="number"?{amount:e,type:"billed",setupDate:t}:e}const Zw={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function gu(e){localStorage.setItem(Gw,JSON.stringify(e))}function _4(){const e=localStorage.getItem(Gw);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function E0(e){localStorage.setItem(Kw,JSON.stringify(e))}function I4(){const e=localStorage.getItem(Kw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function A0(e){localStorage.setItem(Qw,JSON.stringify(e))}function M4(){const e=localStorage.getItem(Qw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function L0(e){localStorage.setItem(Xw,JSON.stringify(e))}function O4(){const e=localStorage.getItem(Xw);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function Pt(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Jw(e){return new Date(e+"T00:00:00")}function _0(e){return e===Pt(new Date)}function R4(e){return e<Pt(new Date)}function N4(e,t){if(!e.statementDate)return"";const n=Jw(t),r=n.getFullYear(),i=n.getMonth(),o=n.getDate();let s=r,l=i;o<e.statementDate&&(l-=1,l<0&&(l=11,s-=1));const c=new Date(s,l,e.statementDate);return Pt(c)}function I0(e,t){const n=Zw[e];if(!n)return"";const r=Jw(t),i=r.getFullYear(),o=r.getMonth(),s=r.getDate();let l=i,c=o;s<n&&(c-=1,c<0&&(c=11,l-=1));const u=new Date(l,c,n);return Pt(u)}function $4(e,t,n,r){const i=I0(e.id,n),o=t.filter(h=>h.date<=n&&h.accountId===e.id),s=o.filter(h=>h.type==="credit_card_spend"&&h.date<i).reduce((h,v)=>h+v.amount,0),l=o.filter(h=>h.type==="credit_card_spend"&&h.date>=i).reduce((h,v)=>h+v.amount,0),c=o.filter(h=>h.type==="cc_payment").reduce((h,v)=>h+v.amount,0),u=qp(r[e.id],n);let d=0,f=0;if(u.amount>0){const h=I0(e.id,u.setupDate),v=i===h,C=i>h&&new Date(i).getTime()-new Date(h).getTime()<45*24*60*60*1e3;u.type==="unbilled"?v?f=u.amount:C&&(d=u.amount):(v||C)&&(d=u.amount)}const p=l+f,m=s+d,y=p;let x=m,b=y,g=c;if(g>0){const h=Math.min(g,x);x-=h,g-=h}return g>0&&(b=Math.max(0,b-g)),{account:e,billDue:x,unbilled:b,totalOutstanding:x+b,cycleStart:i,cycleSpending:p}}function F4(e,t,n,r,i={}){const o=t.filter(l=>l.date<=n&&(l.accountId===e.id||l.linkedAccountId===e.id));let s=0;if(e.type==="bank"){s=r[e.id]||0;for(const l of o)l.accountId===e.id&&(l.type==="bank_credit"?s+=l.amount:l.type==="bank_debit"&&(s-=l.amount)),l.linkedAccountId===e.id&&l.type==="cc_payment"&&(s-=l.amount);return{account:e,balance:s}}else{s=-qp(i[e.id],n).amount;for(const p of o)p.accountId===e.id&&(p.type==="credit_card_spend"?s-=p.amount:p.type==="cc_payment"&&(s+=p.amount));const u=N4(e,n),f=o.filter(p=>p.date>u&&p.accountId===e.id&&p.type==="credit_card_spend").reduce((p,m)=>p+m.amount,0);return{account:e,balance:s,pendingBill:f,totalOutstanding:Math.abs(Math.min(0,s))}}}function V4(e,t,n,r={}){return Cr.map(i=>F4(i,e,t,n,r))}function B4(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function z4(e,t,n,r,i,o){return{id:B4(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:o,createdAt:new Date().toISOString()}}function $t(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function W4(e){return Cr.find(t=>t.id===e)}function qw(){return Cr.filter(e=>e.type==="bank")}function eh(){return Cr.filter(e=>e.type==="credit_card")}function U4(e,t,n,r={}){const i={version:"1.1",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n,ccLimits:r};return JSON.stringify(i,null,2)}function H4(e,t,n,r={}){const i=U4(e,t,n,r),o=new Blob([i],{type:"application/json"}),s=URL.createObjectURL(o),l=document.createElement("a"),c=new Date().toISOString().split("T")[0];l.href=s,l.download=`expense-backup-${c}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s)}function Y4(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null||t.ccLimits!==void 0&&(typeof t.ccLimits!="object"||t.ccLimits===null))return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function G4(e){try{const t=JSON.parse(e);return Y4(t)?t:null}catch{return null}}function eS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=eS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Zl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=eS(e))&&(r&&(r+=" "),r+=t);return r}const K4=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),o=Object.getOwnPropertyDescriptor(t,n);!Q4(i,o)&&r||Object.defineProperty(e,n,o)},Q4=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},X4=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},Z4=(e,t)=>`/* Wrapped ${e}*/
${t}`,J4=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),q4=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),eA=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=Z4.bind(null,r,t.toString());Object.defineProperty(i,"name",q4);const{writable:o,enumerable:s,configurable:l}=J4;Object.defineProperty(e,"toString",{value:i,writable:o,enumerable:s,configurable:l})};function tA(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))K4(e,t,i,n);return X4(e,t),eA(e,t,r),e}const ta=2147483647,nA=new WeakMap,vu=new WeakMap,rA=new WeakMap;function iA(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function tS(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>ta)throw new TypeError(`The \`maxAge\` option cannot exceed ${ta}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...o){var d;const s=t?t(o):o[0],l=iA(n,s);if(l)return l.data;const c=e.apply(this,o),u=typeof r=="function"?r(...o):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>ta)throw new TypeError(`The \`maxAge\` function result cannot exceed ${ta}.`)}if(n.set(s,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var m;n.delete(s),(m=vu.get(i))==null||m.delete(f)},u);(d=f.unref)==null||d.call(f);const p=vu.get(i)??new Set;p.add(f),vu.set(i,p)}return c};return tA(i,e,{ignoreNonConfigurable:!0}),nA.set(i,n),rA.set(i,t??(o=>o[0])),i}function oA(e){return typeof e=="string"}function sA(e,t,n){return n.indexOf(e)===t}function aA(e){return e.toLowerCase()===e}function M0(e){return e.indexOf(",")===-1?e:e.split(",")}function Kd(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Kd(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Kd(n)}if(e.indexOf("-")===-1||!aA(e))return e;var i=e.split("-"),o=i[0],s=i[1],l=s===void 0?"":s;return"".concat(o,"-").concat(l.toUpperCase())}function lA(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,o=i===void 0?"en-US":i,s=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],c=[],u=0,d=l;u<d.length;u++){var f=d[u];c=c.concat(M0(f))}var p=navigator.language,m=p&&M0(p);s=s.concat(c,m)}return r&&s.push(o),s.filter(oA).map(Kd).filter(sA)}var cA=tS(lA,{cacheKey:JSON.stringify});function uA(e){return cA(e)[0]||null}var nS=tS(uA,{cacheKey:JSON.stringify});function Sn(e,t,n){return function(i,o=n){const s=e(i)+o;return t(s)}}function js(e){return function(n){return new Date(e(n).getTime()-1)}}function ks(e,t){return function(r){return[e(r),t(r)]}}function de(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function qn(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function Jl(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function Hi(e){const t=de(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const dA=Sn(de,Hi,-100),rS=Sn(de,Hi,100),th=js(rS),fA=Sn(de,th,-100),iS=ks(Hi,th);function er(e){const t=de(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const oS=Sn(de,er,-10),nh=Sn(de,er,10),ql=js(nh),sS=Sn(de,ql,-10),aS=ks(er,ql);function Yi(e){const t=de(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const lS=Sn(de,Yi,-1),rh=Sn(de,Yi,1),ec=js(rh),cS=Sn(de,ec,-1),pA=ks(Yi,ec);function ih(e,t){return function(r,i=t){const o=de(r),s=qn(r)+i,l=new Date;return l.setFullYear(o,s,1),l.setHours(0,0,0,0),e(l)}}function Or(e){const t=de(e),n=qn(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const uS=ih(Or,-1),oh=ih(Or,1),Cs=js(oh),dS=ih(Cs,-1),hA=ks(Or,Cs);function mA(e,t){return function(r,i=t){const o=de(r),s=qn(r),l=Jl(r)+i,c=new Date;return c.setFullYear(o,s,l),c.setHours(0,0,0,0),e(c)}}function Ts(e){const t=de(e),n=qn(e),r=Jl(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const gA=mA(Ts,1),sh=js(gA),vA=ks(Ts,sh);function fS(e){return Jl(Cs(e))}var Fe={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},yA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},ah=[0,1,2,3,4,5,6],yu=new Map;function xA(e){return function(n,r){var i=n||nS();yu.has(i)||yu.set(i,new Map);var o=yu.get(i);return o.has(e)||o.set(e,new Intl.DateTimeFormat(i||void 0,e).format),o.get(e)(r)}}function wA(e){var t=new Date(e);return new Date(t.setHours(12))}function Rr(e){return function(t,n){return xA(e)(t,wA(n))}}var SA={day:"numeric"},bA={day:"numeric",month:"long",year:"numeric"},jA={month:"long"},kA={month:"long",year:"numeric"},CA={weekday:"short"},TA={weekday:"long"},PA={year:"numeric"},DA=Rr(SA),EA=Rr(bA),AA=Rr(jA),pS=Rr(kA),LA=Rr(CA),_A=Rr(TA),tc=Rr(PA),IA=ah[0],MA=ah[5],O0=ah[6];function ds(e,t){t===void 0&&(t=Fe.ISO_8601);var n=e.getDay();switch(t){case Fe.ISO_8601:return(n+6)%7;case Fe.ISLAMIC:return(n+1)%7;case Fe.HEBREW:case Fe.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function OA(e){var t=Hi(e);return de(t)}function RA(e){var t=er(e);return de(t)}function Qd(e,t){t===void 0&&(t=Fe.ISO_8601);var n=de(e),r=qn(e),i=e.getDate()-ds(e,t);return new Date(n,r,i)}function NA(e,t){t===void 0&&(t=Fe.ISO_8601);var n=t===Fe.GREGORY?Fe.GREGORY:Fe.ISO_8601,r=Qd(e,t),i=de(e)+1,o,s;do o=new Date(i,0,n===Fe.ISO_8601?4:1),s=Qd(o,t),i-=1;while(e<s);return Math.round((r.getTime()-s.getTime())/(864e5*7))+1}function Tr(e,t){switch(e){case"century":return Hi(t);case"decade":return er(t);case"year":return Yi(t);case"month":return Or(t);case"day":return Ts(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function $A(e,t){switch(e){case"century":return dA(t);case"decade":return oS(t);case"year":return lS(t);case"month":return uS(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function hS(e,t){switch(e){case"century":return rS(t);case"decade":return nh(t);case"year":return rh(t);case"month":return oh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function FA(e,t){switch(e){case"decade":return oS(t,-100);case"year":return lS(t,-10);case"month":return uS(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function VA(e,t){switch(e){case"decade":return nh(t,100);case"year":return rh(t,10);case"month":return oh(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function mS(e,t){switch(e){case"century":return th(t);case"decade":return ql(t);case"year":return ec(t);case"month":return Cs(t);case"day":return sh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function BA(e,t){switch(e){case"century":return fA(t);case"decade":return sS(t);case"year":return cS(t);case"month":return dS(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function zA(e,t){switch(e){case"decade":return sS(t,-100);case"year":return cS(t,-10);case"month":return dS(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function R0(e,t){switch(e){case"century":return iS(t);case"decade":return aS(t);case"year":return pA(t);case"month":return hA(t);case"day":return vA(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function WA(e,t,n){var r=[t,n].sort(function(i,o){return i.getTime()-o.getTime()});return[Tr(e,r[0]),mS(e,r[1])]}function gS(e,t,n){return n.map(function(r){return(t||tc)(e,r)}).join(" – ")}function UA(e,t,n){return gS(e,t,iS(n))}function vS(e,t,n){return gS(e,t,aS(n))}function HA(e){return e.getDay()===new Date().getDay()}function yS(e,t){t===void 0&&(t=Fe.ISO_8601);var n=e.getDay();switch(t){case Fe.ISLAMIC:case Fe.HEBREW:return n===MA||n===O0;case Fe.ISO_8601:case Fe.GREGORY:return n===O0||n===IA;default:throw new Error("Unsupported calendar type.")}}var Xt="react-calendar__navigation";function YA(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?pS:r,o=e.formatYear,s=o===void 0?tc:o,l=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,m=e.navigationLabel,y=e.next2AriaLabel,x=y===void 0?"":y,b=e.next2Label,g=b===void 0?"»":b,h=e.nextAriaLabel,v=h===void 0?"":h,C=e.nextLabel,j=C===void 0?"›":C,k=e.prev2AriaLabel,T=k===void 0?"":k,P=e.prev2Label,E=P===void 0?"«":P,_=e.prevAriaLabel,N=_===void 0?"":_,I=e.prevLabel,F=I===void 0?"‹":I,U=e.setActiveStartDate,D=e.showDoubleView,W=e.view,V=e.views,A=V.indexOf(W)>0,M=W!=="century",R=$A(W,t),B=M?FA(W,t):void 0,G=hS(W,t),ae=M?VA(W,t):void 0,le=function(){if(R.getFullYear()<0)return!0;var Pe=BA(W,t);return u&&u>=Pe}(),Q=M&&function(){if(B.getFullYear()<0)return!0;var Pe=zA(W,t);return u&&u>=Pe}(),ce=c&&c<G,Oe=M&&c&&c<ae;function Xe(){U(R,"prev")}function Te(){U(B,"prev2")}function Wt(){U(G,"next")}function xt(){U(ae,"next2")}function Re(Pe){var Gi=function(){switch(W){case"century":return UA(l,s,Pe);case"decade":return vS(l,s,Pe);case"year":return s(l,Pe);case"month":return i(l,Pe);default:throw new Error("Invalid view: ".concat(W,"."))}}();return m?m({date:Pe,label:Gi,locale:l||nS()||void 0,view:W}):Gi}function ic(){var Pe="".concat(Xt,"__label");return a.jsxs("button",{"aria-label":f,"aria-live":p,className:Pe,disabled:!A,onClick:n,style:{flexGrow:1},type:"button",children:[a.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--from"),children:Re(t)}),D?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"".concat(Pe,"__divider"),children:" – "}),a.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--to"),children:Re(G)})]}):null]})}return a.jsxs("div",{className:Xt,children:[E!==null&&M?a.jsx("button",{"aria-label":T,className:"".concat(Xt,"__arrow ").concat(Xt,"__prev2-button"),disabled:Q,onClick:Te,type:"button",children:E}):null,F!==null&&a.jsx("button",{"aria-label":N,className:"".concat(Xt,"__arrow ").concat(Xt,"__prev-button"),disabled:le,onClick:Xe,type:"button",children:F}),ic(),j!==null&&a.jsx("button",{"aria-label":v,className:"".concat(Xt,"__arrow ").concat(Xt,"__next-button"),disabled:ce,onClick:Wt,type:"button",children:j}),g!==null&&M?a.jsx("button",{"aria-label":x,className:"".concat(Xt,"__arrow ").concat(Xt,"__next2-button"),disabled:Oe,onClick:xt,type:"button",children:g}):null]})}var di=function(){return di=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},di.apply(this,arguments)},GA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function N0(e){return"".concat(e,"%")}function lh(e){var t=e.children,n=e.className,r=e.count,i=e.direction,o=e.offset,s=e.style,l=e.wrap,c=GA(e,["children","className","count","direction","offset","style","wrap"]);return a.jsx("div",di({className:n,style:di({display:"flex",flexDirection:i,flexWrap:l?"wrap":"nowrap"},s)},c,{children:w.Children.map(t,function(u,d){var f=o&&d===0?N0(100*o/r):null;return w.cloneElement(u,di(di({},u.props),{style:{flexBasis:N0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function KA(e,t,n){return t&&t>e?t:n&&n<e?n:e}function fs(e,t){return t[0]<=e&&t[1]>=e}function QA(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function xS(e,t){return fs(e[0],t)||fs(e[1],t)}function $0(e,t,n){var r=xS(t,e),i=[];if(r){i.push(n);var o=fs(e[0],t),s=fs(e[1],t);o&&i.push("".concat(n,"Start")),s&&i.push("".concat(n,"End")),o&&s&&i.push("".concat(n,"BothEnds"))}return i}function XA(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function ZA(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",o=[i];if(!n)return o;var s=new Date,l=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return R0(m,n)}();if(fs(s,l)&&o.push("".concat(i,"--now")),!t||!XA(t))return o;var c=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return R0(m,t)}();QA(c,l)?o.push("".concat(i,"--active")):xS(c,l)&&o.push("".concat(i,"--hasActive"));var u=$0(c,l,"".concat(i,"--range"));o.push.apply(o,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=$0(f,l,"".concat(i,"--hover"));o.push.apply(o,p)}return o}function nc(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,o=e.dateType,s=e.end,l=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,m=e.value,y=e.valueType,x=[],b=d;b<=s;b+=p){var g=i(b);x.push(u({classes:ZA({date:g,dateType:o,hover:l,value:m,valueType:y}),date:g}))}return a.jsx(lh,{className:t,count:r,offset:c,wrap:!0,children:x})}function rc(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,o=e.formatAbbr,s=e.locale,l=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,m=e.style,y=e.tileClassName,x=e.tileContent,b=e.tileDisabled,g=e.view,h=w.useMemo(function(){var C={activeStartDate:t,date:i,view:g};return typeof y=="function"?y(C):y},[t,i,y,g]),v=w.useMemo(function(){var C={activeStartDate:t,date:i,view:g};return typeof x=="function"?x(C):x},[t,i,x,g]);return a.jsxs("button",{className:Zl(r,h),disabled:u&&d(u)>i||l&&c(l)<i||(b==null?void 0:b({activeStartDate:t,date:i,view:g})),onClick:f?function(C){return f(i,C)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:m,type:"button",children:[o?a.jsx("abbr",{"aria-label":o(s,i),children:n}):n,v]})}var Xd=function(){return Xd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xd.apply(this,arguments)},JA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},F0="react-calendar__century-view__decades__decade";function qA(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,o=i===void 0?tc:i,s=JA(e,["classes","currentCentury","formatYear"]),l=s.date,c=s.locale,u=[];return n&&u.push.apply(u,n),u.push(F0),Hi(l).getFullYear()!==r&&u.push("".concat(F0,"--neighboringCentury")),a.jsx(rc,Xd({},s,{classes:u,maxDateTransform:ql,minDateTransform:er,view:"century",children:vS(c,o,l)}))}var Zd=function(){return Zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zd.apply(this,arguments)},V0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function eL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,o=e.valueType,s=V0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=OA(t),c=l+(r?119:99);return a.jsx(nc,{className:"react-calendar__century-view__decades",dateTransform:er,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=V0(u,["date"]);return a.jsx(qA,Zd({},s,f,{activeStartDate:t,currentCentury:l,date:d}),d.getTime())},start:l,step:10,value:i,valueType:o})}var Jd=function(){return Jd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jd.apply(this,arguments)};function tL(e){function t(){return a.jsx(eL,Jd({},e))}return a.jsx("div",{className:"react-calendar__century-view",children:t()})}var qd=function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)},nL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},B0="react-calendar__decade-view__years__year";function rL(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,o=i===void 0?tc:i,s=nL(e,["classes","currentDecade","formatYear"]),l=s.date,c=s.locale,u=[];return n&&u.push.apply(u,n),u.push(B0),er(l).getFullYear()!==r&&u.push("".concat(B0,"--neighboringDecade")),a.jsx(rc,qd({},s,{classes:u,maxDateTransform:ec,minDateTransform:Yi,view:"decade",children:o(c,l)}))}var ef=function(){return ef=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ef.apply(this,arguments)},z0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function iL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,o=e.valueType,s=z0(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=RA(t),c=l+(r?11:9);return a.jsx(nc,{className:"react-calendar__decade-view__years",dateTransform:Yi,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=z0(u,["date"]);return a.jsx(rL,ef({},s,f,{activeStartDate:t,currentDecade:l,date:d}),d.getTime())},start:l,value:i,valueType:o})}var tf=function(){return tf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},tf.apply(this,arguments)};function oL(e){function t(){return a.jsx(iL,tf({},e))}return a.jsx("div",{className:"react-calendar__decade-view",children:t()})}var nf=function(){return nf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nf.apply(this,arguments)},sL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},W0=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},aL="react-calendar__year-view__months__month";function lL(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?AA:r,o=e.formatMonthYear,s=o===void 0?pS:o,l=sL(e,["classes","formatMonth","formatMonthYear"]),c=l.date,u=l.locale;return a.jsx(rc,nf({},l,{classes:W0(W0([],n,!0),[aL],!1),formatAbbr:s,maxDateTransform:Cs,minDateTransform:Or,view:"year",children:i(u,c)}))}var rf=function(){return rf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rf.apply(this,arguments)},U0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function cL(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,o=U0(e,["activeStartDate","hover","value","valueType"]),s=0,l=11,c=de(t);return a.jsx(nc,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),Or(d)},dateType:"month",end:l,hover:n,renderTile:function(u){var d=u.date,f=U0(u,["date"]);return a.jsx(lL,rf({},o,f,{activeStartDate:t,date:d}),d.getTime())},start:s,value:r,valueType:i})}var of=function(){return of=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},of.apply(this,arguments)};function uL(e){function t(){return a.jsx(cL,of({},e))}return a.jsx("div",{className:"react-calendar__year-view",children:t()})}var sf=function(){return sf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sf.apply(this,arguments)},dL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},xu="react-calendar__month-view__days__day";function fL(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,o=e.formatDay,s=o===void 0?DA:o,l=e.formatLongDate,c=l===void 0?EA:l,u=dL(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(xu),yS(d,t)&&p.push("".concat(xu,"--weekend")),d.getMonth()!==i&&p.push("".concat(xu,"--neighboringMonth")),a.jsx(rc,sf({},u,{classes:p,formatAbbr:c,maxDateTransform:sh,minDateTransform:Ts,view:"month",children:s(f,d)}))}var af=function(){return af=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},af.apply(this,arguments)},H0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function pL(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,s=e.value,l=e.valueType,c=H0(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=de(t),d=qn(t),f=i||o,p=ds(t,n),m=f?0:p,y=(f?-p:0)+1,x=function(){if(i)return y+6*7-1;var b=fS(t);if(o){var g=new Date;g.setFullYear(u,d,b),g.setHours(0,0,0,0);var h=7-ds(g,n)-1;return b+h}return b}();return a.jsx(nc,{className:"react-calendar__month-view__days",count:7,dateTransform:function(b){var g=new Date;return g.setFullYear(u,d,b),Ts(g)},dateType:"day",hover:r,end:x,renderTile:function(b){var g=b.date,h=H0(b,["date"]);return a.jsx(fL,af({},c,h,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:m,start:y,value:s,valueType:l})}var wS="react-calendar__month-view__weekdays",wu="".concat(wS,"__weekday");function hL(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?LA:n,i=e.formatWeekday,o=i===void 0?_A:i,s=e.locale,l=e.onMouseLeave,c=new Date,u=Or(c),d=de(u),f=qn(u),p=[],m=1;m<=7;m+=1){var y=new Date(d,f,m-ds(u,t)),x=o(s,y);p.push(a.jsx("div",{className:Zl(wu,HA(y)&&"".concat(wu,"--current"),yS(y,t)&&"".concat(wu,"--weekend")),children:a.jsx("abbr",{"aria-label":x,title:x,children:r(s,y).replace(".","")})},m))}return a.jsx(lh,{className:wS,count:7,onFocus:l,onMouseOver:l,children:p})}var wl=function(){return wl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wl.apply(this,arguments)},Y0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},G0="react-calendar__tile";function mL(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=a.jsx("span",{children:n});if(t){var i=e.date,o=e.onClickWeekNumber,s=e.weekNumber,l=Y0(e,["date","onClickWeekNumber","weekNumber"]);return a.jsx("button",wl({},l,{className:G0,onClick:function(c){return o(s,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var l=Y0(e,["date","onClickWeekNumber","weekNumber"]);return a.jsx("div",wl({},l,{className:G0,children:r}))}}function gL(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,o=e.showFixedNumberOfWeeks,s=function(){if(o)return 6;var u=fS(t),d=ds(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),l=function(){for(var u=de(t),d=qn(t),f=Jl(t),p=[],m=0;m<s;m+=1)p.push(Qd(new Date(u,d,f+m*7),n));return p}(),c=l.map(function(u){return NA(u,n)});return a.jsx(lh,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=l[d];if(!f)throw new Error("date is not defined");return a.jsx(mL,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var lf=function(){return lf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lf.apply(this,arguments)},vL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function yL(e){if(e)for(var t=0,n=Object.entries(yA);t<n.length;t++){var r=n[t],i=r[0],o=r[1];if(o.includes(e))return i}return Fe.ISO_8601}function xL(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,o=e.calendarType,s=o===void 0?yL(n):o,l=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=vL(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return a.jsx(hL,{calendarType:s,formatShortWeekday:l,formatWeekday:c,locale:n,onMouseLeave:r})}function m(){return d?a.jsx(gL,{activeStartDate:t,calendarType:s,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function y(){return a.jsx(pL,lf({calendarType:s},f))}var x="react-calendar__month-view";return a.jsx("div",{className:Zl(x,d?"".concat(x,"--weekNumbers"):""),children:a.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),a.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),y()]})]})})}var fi=function(){return fi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fi.apply(this,arguments)},na="react-calendar",Ma=["century","decade","year","month"],wL=["decade","year","month","day"],ch=new Date;ch.setFullYear(1,0,1);ch.setHours(0,0,0,0);var SL=new Date(864e13);function ko(e){return e instanceof Date?e:new Date(e)}function SS(e,t){return Ma.slice(Ma.indexOf(e),Ma.indexOf(t)+1)}function bL(e,t,n){var r=SS(t,n);return r.indexOf(e)!==-1}function uh(e,t,n){return e&&bL(e,t,n)?e:n}function bS(e){var t=Ma.indexOf(e);return wL[t]}function jL(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=ko(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function jS(e,t){var n=e.value,r=e.minDate,i=e.maxDate,o=e.maxDetail,s=jL(n,t);if(!s)return null;var l=bS(o),c=function(){switch(t){case 0:return Tr(l,s);case 1:return mS(l,s);default:throw new Error("Invalid index value: ".concat(t))}}();return KA(c,r,i)}var dh=function(e){return jS(e,0)},kS=function(e){return jS(e,1)},kL=function(e){return[dh,kS].map(function(t){return t(e)})};function CS(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,o=e.value,s=e.view,l=uh(s,i,n),c=dh({value:o,minDate:r,maxDate:t,maxDetail:n})||new Date;return Tr(l,c)}function CL(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,o=e.maxDate,s=e.maxDetail,l=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=uh(d,c,s),p=t||n;return p?Tr(f,p):CS({maxDate:o,maxDetail:s,minDate:l,minDetail:c,value:u||r,view:d||i})}function Su(e){return e&&(!Array.isArray(e)||e.length===1)}function ra(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var TL=w.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,o=t.calendarType,s=t.className,l=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,m=t.formatMonthYear,y=t.formatShortWeekday,x=t.formatWeekday,b=t.formatYear,g=t.goToRangeStartOnSelect,h=g===void 0?!0:g,v=t.inputRef,C=t.locale,j=t.maxDate,k=j===void 0?SL:j,T=t.maxDetail,P=T===void 0?"month":T,E=t.minDate,_=E===void 0?ch:E,N=t.minDetail,I=N===void 0?"century":N,F=t.navigationAriaLabel,U=t.navigationAriaLive,D=t.navigationLabel,W=t.next2AriaLabel,V=t.next2Label,A=t.nextAriaLabel,M=t.nextLabel,R=t.onActiveStartDateChange,B=t.onChange,G=t.onClickDay,ae=t.onClickDecade,le=t.onClickMonth,Q=t.onClickWeekNumber,ce=t.onClickYear,Oe=t.onDrillDown,Xe=t.onDrillUp,Te=t.onViewChange,Wt=t.prev2AriaLabel,xt=t.prev2Label,Re=t.prevAriaLabel,ic=t.prevLabel,Pe=t.returnValue,Gi=Pe===void 0?"start":Pe,wt=t.selectRange,Ps=t.showDoubleView,fh=t.showFixedNumberOfWeeks,ph=t.showNavigation,AS=ph===void 0?!0:ph,LS=t.showNeighboringCentury,_S=t.showNeighboringDecade,hh=t.showNeighboringMonth,IS=hh===void 0?!0:hh,MS=t.showWeekNumbers,OS=t.tileClassName,RS=t.tileContent,NS=t.tileDisabled,oc=t.value,mh=t.view,gh=w.useState(l),$S=gh[0],Ds=gh[1],vh=w.useState(null),FS=vh[0],yh=vh[1],xh=w.useState(Array.isArray(c)?c.map(function(Z){return Z!==null?ko(Z):null}):c!=null?ko(c):null),sc=xh[0],VS=xh[1],wh=w.useState(u),BS=wh[0],Sh=wh[1],tt=r||$S||CL({activeStartDate:r,defaultActiveStartDate:l,defaultValue:c,defaultView:u,maxDate:k,maxDetail:P,minDate:_,minDetail:I,value:oc,view:mh}),nt=function(){var Z=function(){return wt&&Su(sc)?sc:oc!==void 0?oc:sc}();return Z?Array.isArray(Z)?Z.map(function(ve){return ve!==null?ko(ve):null}):Z!==null?ko(Z):null:null}(),Es=bS(P),fe=uh(mh||BS,I,P),Ut=SS(I,P),zS=wt?FS:null,ac=Ut.indexOf(fe)<Ut.length-1,bh=Ut.indexOf(fe)>0,jh=w.useCallback(function(Z){var ve=function(){switch(Gi){case"start":return dh;case"end":return kS;case"range":return kL;default:throw new Error("Invalid returnValue.")}}();return ve({maxDate:k,maxDetail:P,minDate:_,value:Z})},[k,P,_,Gi]),lc=w.useCallback(function(Z,ve){Ds(Z);var je={action:ve,activeStartDate:Z,value:nt,view:fe};R&&!ra(tt,Z)&&R(je)},[tt,R,nt,fe]),As=w.useCallback(function(Z,ve){var je=function(){switch(fe){case"century":return ae;case"decade":return ce;case"year":return le;case"month":return G;default:throw new Error("Invalid view: ".concat(fe,"."))}}();je&&je(Z,ve)},[G,ae,le,ce,fe]),cc=w.useCallback(function(Z,ve){if(ac){As(Z,ve);var je=Ut[Ut.indexOf(fe)+1];if(!je)throw new Error("Attempted to drill down from the lowest view.");Ds(Z),Sh(je);var Lt={action:"drillDown",activeStartDate:Z,value:nt,view:je};R&&!ra(tt,Z)&&R(Lt),Te&&fe!==je&&Te(Lt),Oe&&Oe(Lt)}},[tt,ac,R,As,Oe,Te,nt,fe,Ut]),uc=w.useCallback(function(){if(bh){var Z=Ut[Ut.indexOf(fe)-1];if(!Z)throw new Error("Attempted to drill up from the highest view.");var ve=Tr(Z,tt);Ds(ve),Sh(Z);var je={action:"drillUp",activeStartDate:ve,value:nt,view:Z};R&&!ra(tt,ve)&&R(je),Te&&fe!==Z&&Te(je),Xe&&Xe(je)}},[tt,bh,R,Xe,Te,nt,fe,Ut]),dc=w.useCallback(function(Z,ve){var je=nt;As(Z,ve);var Lt=wt&&!Su(je),_t;if(wt)if(Lt)_t=Tr(Es,Z);else{if(!je)throw new Error("previousValue is required");if(Array.isArray(je))throw new Error("previousValue must not be an array");_t=WA(Es,je,Z)}else _t=jh(Z);var pc=!wt||Lt||h?CS({maxDate:k,maxDetail:P,minDate:_,minDetail:I,value:_t,view:fe}):null;ve.persist(),Ds(pc),VS(_t);var YS={action:"onChange",activeStartDate:pc,value:_t,view:fe};if(R&&!ra(tt,pc)&&R(YS),B)if(wt){var GS=Su(_t);if(!GS)B(_t||null,ve);else if(i){if(Array.isArray(_t))throw new Error("value must not be an array");B([_t||null,null],ve)}}else B(_t||null,ve)},[tt,i,jh,h,k,P,_,I,R,B,As,wt,nt,Es,fe]);function WS(Z){yh(Z)}function fc(){yh(null)}w.useImperativeHandle(n,function(){return{activeStartDate:tt,drillDown:cc,drillUp:uc,onChange:dc,setActiveStartDate:lc,value:nt,view:fe}},[tt,cc,uc,dc,lc,nt,fe]);function kh(Z){var ve=Z?hS(fe,tt):Tr(fe,tt),je=ac?cc:dc,Lt={activeStartDate:ve,hover:zS,locale:C,maxDate:k,minDate:_,onClick:je,onMouseOver:wt?WS:void 0,tileClassName:OS,tileContent:RS,tileDisabled:NS,value:nt,valueType:Es};switch(fe){case"century":return a.jsx(tL,fi({formatYear:b,showNeighboringCentury:LS},Lt));case"decade":return a.jsx(oL,fi({formatYear:b,showNeighboringDecade:_S},Lt));case"year":return a.jsx(uL,fi({formatMonth:p,formatMonthYear:m},Lt));case"month":return a.jsx(xL,fi({calendarType:o,formatDay:d,formatLongDate:f,formatShortWeekday:y,formatWeekday:x,onClickWeekNumber:Q,onMouseLeave:wt?fc:void 0,showFixedNumberOfWeeks:typeof fh<"u"?fh:Ps,showNeighboringMonth:IS,showWeekNumbers:MS},Lt));default:throw new Error("Invalid view: ".concat(fe,"."))}}function US(){return AS?a.jsx(YA,{activeStartDate:tt,drillUp:uc,formatMonthYear:m,formatYear:b,locale:C,maxDate:k,minDate:_,navigationAriaLabel:F,navigationAriaLive:U,navigationLabel:D,next2AriaLabel:W,next2Label:V,nextAriaLabel:A,nextLabel:M,prev2AriaLabel:Wt,prev2Label:xt,prevAriaLabel:Re,prevLabel:ic,setActiveStartDate:lc,showDoubleView:Ps,view:fe,views:Ut}):null}var HS=Array.isArray(nt)?nt:[nt];return a.jsxs("div",{className:Zl(na,wt&&HS.length===1&&"".concat(na,"--selectRange"),Ps&&"".concat(na,"--doubleView"),s),ref:v,children:[US(),a.jsxs("div",{className:"".concat(na,"__viewContainer"),onBlur:wt?fc:void 0,onMouseLeave:wt?fc:void 0,children:[kh(),Ps?kh(!0):null]})]})});const PL=zi`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,DL=zi`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,EL=zi`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,AL=zi`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,LL=zi`
  from { opacity: 0; }
  to { opacity: 1; }
`,_L=S.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${LL} 0.15s ease-out;
`,IL=S.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?yr`animation: ${AL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:yr`animation: ${EL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?yr`animation: ${DL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:yr`animation: ${PL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,ML=S.div`
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
`,TS=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const o=w.useRef(null),[s,l]=w.useState(!1),[c,u]=w.useState(!1),[d,f]=w.useState(!1),[p,m]=w.useState({top:0,left:0});w.useEffect(()=>{if(e&&(i!=null&&i.current)){const h=i.current.getBoundingClientRect(),v=280,C=320,j=8,T=window.innerHeight-h.bottom-j<C;f(T);let P;T?P=h.top-C-j:P=h.bottom+j;let E=h.right-v;E<8&&(E=8),E+v>window.innerWidth-8&&(E=window.innerWidth-v-8),P<8&&(P=8),m({top:P,left:E}),u(!0),l(!1)}},[e,i]);const y=w.useCallback(()=>{l(!0),setTimeout(()=>{u(!1),l(!1),t()},150)},[t]),x=w.useCallback(h=>{o.current&&!o.current.contains(h.target)&&y()},[y]);w.useEffect(()=>{if(e){const h=setTimeout(()=>{document.addEventListener("mousedown",x)},10);return()=>{clearTimeout(h),document.removeEventListener("mousedown",x)}}},[e,x]);const b=w.useCallback(h=>{h instanceof Date&&(r(Pt(h)),y())},[r,y]);if(!c)return null;const g=new Date(n+"T00:00:00");return Ax.createPortal(a.jsxs("div",{"data-calendar-portal":!0,children:[a.jsx(_L,{onClick:y}),a.jsx(IL,{ref:o,$isClosing:s,$openUpward:d,$top:p.top,$left:p.left,children:a.jsx(ML,{children:a.jsx(TL,{onChange:b,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(h,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},OL=S(O.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,RL=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  gap: 16px;

  @media (max-width: 640px) {
    padding: 14px 16px;
    gap: 12px;
  }
`,NL=S.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    gap: 12px;
  }
`,$L=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,FL=S(O.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({$type:e})=>{switch(e){case"past":return"#ef4444";case"today":return"#10b981";case"future":return"#3b82f6"}}};
`,VL=S(O.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,BL=S.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,zL=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,WL=S(O.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,UL=S.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,HL=S.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,YL=S(O.span)`
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background: ${({$type:e})=>{switch(e){case"past":return"rgba(239, 68, 68, 0.15)";case"today":return"rgba(16, 185, 129, 0.15)";case"future":return"rgba(59, 130, 246, 0.15)"}}};
  color: ${({$type:e})=>{switch(e){case"past":return"#ef4444";case"today":return"#10b981";case"future":return"#3b82f6"}}};
`,GL=S.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,KL=S.div`
  display: flex;
  align-items: center;
  background: var(--bg-tertiary);
  border-radius: 10px;
  padding: 4px;
  gap: 2px;
`,K0=S(O.button).attrs({type:"button"})`
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
`,QL=S(O.button).attrs({type:"button"})`
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
`,XL=S(O.button).attrs({type:"button"})`
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
`,ZL=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"15 18 9 12 15 6"})}),JL=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"9 18 15 12 9 6"})}),qL=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),e_={type:"spring",stiffness:400,damping:30},t_=({selectedDate:e,onDateChange:t})=>{const[n,r]=w.useState(!1),i=w.useRef(null),o=g=>{g.preventDefault(),g.stopPropagation(),t(Pt(new Date))},s=g=>{g.preventDefault(),g.stopPropagation();const h=new Date(e+"T00:00:00");h.setDate(h.getDate()-1),t(Pt(h))},l=g=>{g.preventDefault(),g.stopPropagation();const h=new Date(e+"T00:00:00");h.setDate(h.getDate()+1),t(Pt(h))},u=_0(e)?"today":R4(e)?"past":"future",d=_0(e),f=new Date(e+"T00:00:00"),p=f.getDate(),m=f.toLocaleDateString("en-US",{month:"short"}),y=f.toLocaleDateString("en-US",{weekday:"long"}),x=f.getFullYear(),b=()=>{switch(u){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return a.jsxs(OL,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:e_,children:[a.jsxs(RL,{children:[a.jsxs(NL,{children:[a.jsxs($L,{children:[a.jsx(Ye,{mode:"wait",children:a.jsx(FL,{$type:u,initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.15},children:m},m)}),a.jsx(Ye,{mode:"wait",children:a.jsx(VL,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:p},p)})]}),a.jsx(BL,{}),a.jsxs(zL,{children:[a.jsx(Ye,{mode:"wait",children:a.jsx(WL,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},exit:{opacity:0,x:8},transition:{duration:.15},children:y},y)}),a.jsxs(UL,{children:[a.jsx(HL,{children:x}),a.jsx(Ye,{mode:"wait",children:a.jsx(YL,{$type:u,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},children:b()},u)})]})]})]}),a.jsxs(GL,{children:[a.jsxs(KL,{children:[a.jsx(K0,{onClick:s,whileTap:{scale:.9},children:a.jsx(ZL,{})}),a.jsx(K0,{onClick:l,whileTap:{scale:.9},children:a.jsx(JL,{})})]}),a.jsx(Ye,{children:!d&&a.jsx(QL,{onClick:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},whileTap:{scale:.95},transition:{duration:.15},children:"Today"})}),a.jsx(XL,{ref:i,onClick:()=>r(!0),whileTap:{scale:.95},children:a.jsx(qL,{})})]})]}),a.jsx(TS,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:i})]})},n_=S(O.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,r_=S.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,i_=S.div`
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
`,o_=S.div`
  flex: 1;
  min-width: 0;
`,s_=S.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,a_=S.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,l_=S.span`
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
`,c_=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,Q0=S.div``,X0=S.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,Z0=S(O.div)`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:e})=>e};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,u_=S.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
`,d_=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,f_=S.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,p_=S(O.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,h_=S(O.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:e})=>e};
  white-space: nowrap;
`,m_={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},g_=e=>{const t=m_[e];return t?a.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},v_=e=>new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),J0={type:"spring",stiffness:400,damping:35},y_=({detailedBalance:e,index:t=0,limit:n})=>{const{account:r,billDue:i,unbilled:o,totalOutstanding:s,cycleStart:l,cycleSpending:c}=e,u=n!==void 0&&n>0,d=u?Math.max(0,n-c):0,f=u?c/n*100:0,p=u&&c>n,m=p?"#ef4444":f>80?"#f59e0b":"#10b981",y=()=>i>0?"due":o>0?"unbilled":"clear",x=()=>{switch(y()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return a.jsxs(n_,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{...J0,delay:t*.03},children:[a.jsxs(r_,{children:[a.jsx(i_,{children:g_(r.bank)}),a.jsxs(o_,{children:[a.jsxs(s_,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),a.jsxs(a_,{children:["Cycle from ",v_(l)]})]}),a.jsx(l_,{$status:y(),children:x()})]}),a.jsxs(c_,{children:[a.jsxs(Q0,{children:[a.jsx(X0,{children:"Bill Due"}),a.jsx(Z0,{$color:i>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(i)},i)]}),a.jsxs(Q0,{children:[a.jsx(X0,{children:"Unbilled"}),a.jsx(Z0,{$color:o>0?"#f59e0b":"var(--text-tertiary)",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(o)},o)]})]}),u&&a.jsx(u_,{children:a.jsxs(d_,{children:[a.jsx(f_,{children:a.jsx(p_,{$color:m,initial:{width:0},animate:{width:`${Math.min(f,100)}%`},transition:{...J0,delay:t*.03+.1}})}),a.jsx(h_,{$color:m,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:p?`${$t(s-n)} over`:`${$t(d)} left`},d)]})})]})},x_=w.memo(y_),w_=S(O.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`,ia=S(O.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,oa=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,sa=S.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,aa=S.div`
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
`,la=S.div`
  min-width: 0;
`,ca=S.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ua=S.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,da=S(O.div)`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:e})=>e||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,S_=S.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
`,b_=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,j_=S.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,k_=S(O.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,C_=S(O.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:e})=>e};
  white-space: nowrap;
`,q0={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},T_=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),a.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),a.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),P_=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),PS={type:"spring",stiffness:400,damping:35},D_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},fa={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:PS}},E_=({balances:e,ccLimits:t={},creditCardDetailedBalances:n=[]})=>{const{hdfcBalance:r,iciciBalance:i,totalCCOutstanding:o,netPosition:s,totalLimit:l,totalLimitRemaining:c,limitPercentage:u,limitColor:d}=w.useMemo(()=>{const p=e.find(P=>P.account.id==="hdfc-bank"),m=e.find(P=>P.account.id==="icici-bank"),y=e.filter(P=>P.account.type==="credit_card"),x=(p==null?void 0:p.balance)||0,b=(m==null?void 0:m.balance)||0,g=y.reduce((P,E)=>P+(E.totalOutstanding||0),0);let h=0,v=0;for(const P of n){const E=t[P.account.id]||0;E>0&&(h+=E,v+=P.cycleSpending)}const C=Math.max(0,h-v),j=h>0?v/h*100:0,T=v>h&&h>0?"#ef4444":j>80?"#f59e0b":"#10b981";return{hdfcBalance:x,iciciBalance:b,totalCCOutstanding:g,netPosition:x-g,totalLimit:h,totalLimitRemaining:C,limitPercentage:j,limitColor:T}},[e,t,n]),f=l>0;return a.jsxs(w_,{variants:D_,initial:"hidden",animate:"visible",children:[a.jsx(ia,{variants:fa,children:a.jsxs(oa,{children:[a.jsxs(sa,{children:[a.jsx(aa,{$color:"#10b981",children:a.jsx(T_,{})}),a.jsxs(la,{children:[a.jsx(ca,{children:"Net Position"}),a.jsx(ua,{children:"HDFC − CC Due"})]})]}),a.jsx(da,{$color:s>=0?"#10b981":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(s)},s)]})}),a.jsx(ia,{variants:fa,children:a.jsxs(oa,{children:[a.jsxs(sa,{children:[a.jsx(aa,{$color:"#004C8F",children:a.jsx("img",{src:q0.hdfc,alt:"HDFC"})}),a.jsxs(la,{children:[a.jsx(ca,{children:"HDFC Bank"}),a.jsx(ua,{children:"Savings"})]})]}),a.jsx(da,{$color:r>=0?"#004C8F":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(r)},r)]})}),a.jsx(ia,{variants:fa,children:a.jsxs(oa,{children:[a.jsxs(sa,{children:[a.jsx(aa,{$color:"#F58220",children:a.jsx("img",{src:q0.icici,alt:"ICICI"})}),a.jsxs(la,{children:[a.jsx(ca,{children:"ICICI Bank"}),a.jsx(ua,{children:"Savings"})]})]}),a.jsx(da,{$color:i>=0?"#F58220":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:$t(i)},i)]})}),a.jsxs(ia,{variants:fa,children:[a.jsxs(oa,{children:[a.jsxs(sa,{children:[a.jsx(aa,{$color:"#ef4444",children:a.jsx(P_,{})}),a.jsxs(la,{children:[a.jsx(ca,{children:"Credit Cards"}),a.jsx(ua,{children:"Total Outstanding"})]})]}),a.jsxs(da,{$color:o>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},children:[o>0?"-":"",$t(o)]},o)]}),f&&a.jsx(S_,{children:a.jsxs(b_,{children:[a.jsx(j_,{children:a.jsx(k_,{$color:d,initial:{width:0},animate:{width:`${Math.min(u,100)}%`},transition:{...PS,delay:.1}})}),a.jsx(C_,{$color:d,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:u>100?`${$t(o-l)} over`:`${$t(c)} left`},c)]})})]})]})},A_=w.memo(E_),L_=S.div`
  display: flex;
  flex-direction: column;
`,__=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`,I_=S(O.button)`
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
`,M_=S.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,O_=S.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,R_=S.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,N_=S.div`
  overflow: hidden;
`,$_=S.div`
  margin-top: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
`,F_=S.div`
  padding: 0;
`,fo=S.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,po=S.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,ev=S.input`
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
`,V_=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,B_=S.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,z_=S(O.button).attrs({type:"button"})`
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
`,tv=S.select`
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
`,W_=S.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,U_=S.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-tertiary);
`,H_=S.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`,Y_=S(O.button)`
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
`,G_=S(O.button)`
  padding: 14px 20px;
  font-size: 17px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,K_=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],Q_=eh(),nv=qw(),bu={type:"spring",stiffness:400,damping:30},X_=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=w.useState(""),[i,o]=w.useState(""),[s,l]=w.useState(""),[c,u]=w.useState(""),[d,f]=w.useState(""),[p,m]=w.useState(t||Pt(new Date)),[y,x]=w.useState(!1),b=w.useRef(null),g=w.useRef(null);w.useEffect(()=>{t&&m(t)},[t]);const h=i!==""||s!==""||c!==""||d!=="";w.useEffect(()=>{if(!n||h||y)return;const I=F=>{const U=F.target;U.closest("[data-calendar-portal]")||b.current&&!b.current.contains(U)&&r("")};return document.addEventListener("mousedown",I),document.addEventListener("touchstart",I),()=>{document.removeEventListener("mousedown",I),document.removeEventListener("touchstart",I)}},[n,h,y]);const v=w.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return Q_;case"bank_debit":case"bank_credit":return nv;default:return Cr}},[n]),C=w.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),j=n&&i&&parseFloat(c)>0&&p,k=w.useCallback(()=>{r(""),o(""),l(""),u(""),f("")},[]),T=w.useCallback(()=>{if(!n||!i||!c||!p)return;const I=n==="cc_payment"&&s?s:void 0,F=Cr.find(V=>V.id===i),U=s?Cr.find(V=>V.id===s):void 0;let D="";switch(n){case"credit_card_spend":D=`Spent on ${F==null?void 0:F.name}`;break;case"cc_payment":D=U?`Payment to ${F==null?void 0:F.name} from ${U.name}`:`Payment to ${F==null?void 0:F.name}`;break;case"bank_debit":D=`Debited from ${F==null?void 0:F.name}`;break;case"bank_credit":D=`Credited to ${F==null?void 0:F.name}`;break}const W=z4(n,i,parseFloat(c),d||D,p,I);e(W),k()},[n,i,s,c,d,p,e,k]),P=w.useMemo(()=>{const F=c.replace(/[^0-9.]/g,"").split(".");let U=F[0];const D=F[1];if(U.length>3){let W=U.substring(U.length-3),V=U.substring(0,U.length-3);V=V.replace(/\B(?=(\d{2})+(?!\d))/g,","),U=V+","+W}return D!==void 0?`${U}.${D}`:U},[c]),E=w.useCallback(I=>{const F=I.target.value.replace(/,/g,"");(F===""||/^\d*\.?\d*$/.test(F))&&u(F)},[]),_=I=>new Date(I+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),N=!!n;return a.jsxs(L_,{ref:b,children:[a.jsx(__,{children:K_.map(({type:I,label:F,hint:U,color:D})=>a.jsxs(I_,{type:"button",$active:n===I,$color:D,onClick:()=>{n===I&&!h?r(""):(r(I),o(""),l(""))},whileTap:{scale:.98},transition:bu,children:[a.jsx(M_,{children:F}),a.jsx(O_,{children:U})]},I))}),a.jsx(R_,{$isOpen:N,children:a.jsxs(N_,{children:[a.jsx($_,{children:a.jsxs(F_,{children:[a.jsxs(fo,{children:[a.jsx(po,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),a.jsxs(tv,{value:i,onChange:I=>o(I.target.value),children:[a.jsx("option",{value:"",children:C()}),v.map(I=>a.jsx("option",{value:I.id,children:I.name},I.id))]})]}),n==="cc_payment"&&a.jsxs(fo,{children:[a.jsx(po,{children:"Paid From (Optional)"}),a.jsxs(tv,{value:s,onChange:I=>l(I.target.value),children:[a.jsx("option",{value:"",children:"Select bank account..."}),nv.map(I=>a.jsx("option",{value:I.id,children:I.name},I.id))]})]}),a.jsxs(fo,{children:[a.jsx(po,{children:"Amount"}),a.jsxs(W_,{children:[a.jsx(U_,{children:"₹"}),a.jsx(ev,{type:"text",inputMode:"decimal",placeholder:"0",value:P,onChange:E})]})]}),a.jsxs(fo,{children:[a.jsx(po,{children:"Date"}),a.jsxs(V_,{children:[a.jsx(B_,{children:_(p)}),a.jsx(z_,{ref:g,onClick:()=>x(!0),whileTap:{scale:.95},children:"Change"}),a.jsx(TS,{isOpen:y,onClose:()=>x(!1),selectedDate:p,onDateSelect:m,triggerRef:g})]})]}),a.jsxs(fo,{children:[a.jsx(po,{children:"Description (Optional)"}),a.jsx(ev,{type:"text",placeholder:"Add a note...",value:d,onChange:I=>f(I.target.value)})]})]})}),a.jsxs(H_,{children:[a.jsx(Y_,{type:"button",onClick:T,disabled:!j,whileHover:j?{scale:1.01}:{},whileTap:j?{scale:.99}:{},transition:bu,children:"Add Transaction"}),a.jsx(G_,{type:"button",onClick:k,whileTap:{scale:.99},transition:bu,children:"Cancel"})]})]})})]})},Z_=w.memo(X_),J_=e=>{switch(e){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},q_=S(O.section)`
  position: relative;
`,eI=S(O.button)`
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
`,tI=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,nI=S.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({$color:e})=>e};
  }
`,rI=S.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 24px;

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 24px;
  }
`,iI=S.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,oI=S(O.span)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 4px 12px;
  border-radius: 20px;
`,sI=S(O.div)`
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
`,aI=S(O.div)`
  overflow: hidden;
`,lI=S.div`
  /* No extra padding - let children control their own spacing */
`,cI=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})}),Sl={type:"spring",stiffness:400,damping:35},uI={collapsed:{height:0,opacity:0,transition:{height:{...Sl},opacity:{duration:.1}}},expanded:{height:"auto",opacity:1,transition:{height:{...Sl},opacity:{duration:.2,delay:.05}}}},dI={collapsed:{rotate:0},expanded:{rotate:180}},Co=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:o,onOpenChange:s,collapseOnClickOutside:l=!1,children:c})=>{const[u,d]=w.useState(i),f=w.useRef(null),p=o!==void 0,m=p?o:u,y=J_(n),x=()=>{const b=!m;p?s==null||s(b):d(b)};return w.useEffect(()=>{if(!l||!m)return;const b=g=>{f.current&&!f.current.contains(g.target)&&(p?s==null||s(!1):d(!1))};return document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b)}},[l,m,p,s]),a.jsxs(q_,{ref:f,initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{...Sl,delay:.02},children:[a.jsxs(eI,{type:"button",onClick:x,whileTap:{scale:.99},transition:{duration:.1},children:[a.jsxs(tI,{children:[a.jsx(nI,{$color:y,children:t}),a.jsx(rI,{children:e})]}),a.jsxs(iI,{children:[a.jsx(Ye,{mode:"wait",children:r!==void 0&&a.jsx(oI,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:500,damping:30},children:r},r)}),a.jsx(sI,{animate:m?"expanded":"collapsed",variants:dI,transition:Sl,children:a.jsx(cI,{})})]})]}),a.jsx(Ye,{initial:!1,children:m&&a.jsx(aI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:uI,children:a.jsx(lI,{children:c})},"content")})]})},fI=S.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,pI=S.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,hI=S.div`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,mI=S.div`
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
`,DS=S(O.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  transition: background 0.15s;
  position: relative;

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
`,gI=S.div`
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
`,vI=S.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,yI=S.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,xI=S.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,wI=S.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,SI=S.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,bI=S(O.button)`
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
  flex-shrink: 0;
  transition: opacity 0.15s, background 0.15s, color 0.15s;

  ${DS}:hover & {
    opacity: 0.5;
  }

  &:hover {
    opacity: 1 !important;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  /* On touch devices, always show delete button */
  @media (hover: none) {
    opacity: 0.4;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 640px) {
    opacity: 0.5;
    right: 6px;
  }
`,jI=S(O.div)`
  padding: 48px 24px;
  text-align: center;
`,kI=S.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

  svg {
    width: 28px;
    height: 28px;
    color: var(--text-tertiary);
  }
`,CI=S.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,TI=S.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,PI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),a.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),a.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),a.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),a.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),a.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),DI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),rv=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),a.jsx("polyline",{points:"5 12 12 5 19 12"})]}),EI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("polyline",{points:"19 12 12 19 5 12"})]}),AI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),LI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),a.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),_I={type:"spring",stiffness:400,damping:35},II=e=>{switch(e){case"credit_card_spend":return a.jsx(DI,{});case"cc_payment":return a.jsx(rv,{});case"bank_debit":return a.jsx(rv,{});case"bank_credit":return a.jsx(EI,{})}},iv=e=>e==="bank_credit",MI=e=>{const t=new Date(e),n=new Date,r=new Date(n);return r.setDate(r.getDate()-1),e===n.toISOString().split("T")[0]?"Today":e===r.toISOString().split("T")[0]?"Yesterday":t.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},OI=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const{filteredTransactions:r,groupedTransactions:i}=w.useMemo(()=>{const l=new Date(n),c=e.filter(d=>new Date(d.date)<=l).sort((d,f)=>{const p=f.date.localeCompare(d.date);return p!==0?p:f.id.localeCompare(d.id)}),u={};return c.forEach(d=>{u[d.date]||(u[d.date]=[]),u[d.date].push(d)}),{filteredTransactions:c,groupedTransactions:u}},[e,n]),o=w.useCallback(l=>{t(l)},[t]),s=Object.keys(i).sort((l,c)=>c.localeCompare(l));return a.jsx(Co,{title:"Transactions",icon:a.jsx(PI,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:a.jsx(fI,{children:a.jsx(pI,{children:r.length===0?a.jsxs(jI,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:_I,children:[a.jsx(kI,{children:a.jsx(LI,{})}),a.jsx(CI,{children:"No Transactions"}),a.jsx(TI,{children:"Add your first transaction above"})]}):s.map(l=>a.jsxs(hI,{children:[a.jsx(mI,{children:MI(l)}),i[l].map(c=>{var d;const u=W4(c.accountId);return a.jsxs(DS,{children:[a.jsx(gI,{$type:c.type,children:II(c.type)}),a.jsxs(vI,{children:[a.jsx(yI,{children:c.description}),a.jsx(xI,{children:(d=u==null?void 0:u.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]}),a.jsxs(wI,{children:[a.jsxs(SI,{$positive:iv(c.type),children:[iv(c.type)?"+":"-",$t(c.amount)]}),a.jsx(bI,{type:"button",onClick:()=>o(c.id),"aria-label":"Delete transaction",whileTap:{scale:.9},children:a.jsx(AI,{})})]})]},c.id)})]},l))})})})},RI=w.memo(OI),NI=S(O.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,$I=S(O.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,FI=S.div`
  padding: var(--space-xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,VI=S.div`
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
`,BI=S.div`
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,zI=S.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,WI=S.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,ju=S.h3`
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
`,ku=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Cu=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,ov=S.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Tu=S.div`
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
`,Pu=S.input`
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
`,sv=S.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,UI=S.div`
  display: flex;
  gap: var(--space-md);
`,av=S(O.button)`
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
`,lv=S.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,HI=S.span`
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
`,YI=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,GI=S.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
`,KI=S.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
`,cv=S.button`
  flex: 1;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  background: ${({$active:e})=>e?"rgba(var(--accent-rgb), 0.1)":"var(--bg-tertiary)"};
  color: ${({$active:e})=>e?"var(--accent)":"var(--text-secondary)"};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: var(--accent);
  }
`,QI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),a.jsx("polyline",{points:"5 6 12 3 19 6"}),a.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),a.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),XI=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),ZI=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),JI={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},qI={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},eM=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,ccLimits:i,onSave:o})=>{const[s,l]=w.useState({}),[c,u]=w.useState({}),[d,f]=w.useState({}),[p,m]=w.useState({}),y=qw(),x=eh();w.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),w.useEffect(()=>{if(e){const k=Pt(new Date),T={};y.forEach(N=>{var I;T[N.id]=((I=n[N.id])==null?void 0:I.toString())||""}),l(T);const P={},E={};x.forEach(N=>{const I=qp(r[N.id],k);P[N.id]=I.amount>0?I.amount.toString():"",E[N.id]=I.type}),u(P),f(E);const _={};x.forEach(N=>{var I;_[N.id]=((I=i[N.id])==null?void 0:I.toString())||""}),m(_)}},[e,n,r,i]);const b=()=>{const k=Pt(new Date),T={};Object.entries(s).forEach(([_,N])=>{const I=parseFloat(N.replace(/,/g,""))||0;T[_]=I});const P={};Object.entries(c).forEach(([_,N])=>{const I=parseFloat(N.replace(/,/g,""))||0,F=r[_],U=typeof F=="object"?F.setupDate:k,D={amount:I,type:d[_]||"billed",setupDate:typeof F=="object"&&F.amount===I?U:k};P[_]=D});const E={};Object.entries(p).forEach(([_,N])=>{const I=parseFloat(N.replace(/,/g,""))||0;I>0&&(E[_]=I)}),o(T,P,E),t()},g=k=>{const T=k.replace(/[^0-9]/g,"");if(!T)return"";if(T.length>3){let P=T.substring(T.length-3),E=T.substring(0,T.length-3);return E=E.replace(/\B(?=(\d{2})+(?!\d))/g,","),E+","+P}return T},h=(k,T)=>{const P=T.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&l(E=>({...E,[k]:P}))},v=(k,T)=>{const P=T.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&u(E=>({...E,[k]:P}))},C=(k,T)=>{const P=T.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&m(E=>({...E,[k]:P}))},j=k=>{if(k>3&&k<21)return"th";switch(k%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return a.jsx(Ye,{children:e&&a.jsx(NI,{variants:JI,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:a.jsxs($I,{variants:qI,initial:"hidden",animate:"visible",exit:"exit",onClick:k=>k.stopPropagation(),children:[a.jsxs(FI,{children:[a.jsx(zI,{children:"Initial Balances, Bills & Limits"}),a.jsx(WI,{children:"Set your starting bank balances, credit card outstanding amounts, and monthly spending limits."})]}),a.jsxs(VI,{children:[a.jsxs(ju,{children:[a.jsx(QI,{}),"Bank Account Balances"]}),a.jsx(ku,{children:y.map(k=>a.jsxs(Cu,{children:[a.jsx(ov,{children:k.name}),a.jsx(Tu,{children:a.jsx(Pu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:g(s[k.id]||""),onChange:T=>h(k.id,T.target.value)})})]},k.id))}),a.jsx(sv,{}),a.jsxs(ju,{children:[a.jsx(XI,{}),"Credit Card Outstanding Bills"]}),a.jsx(ku,{children:x.map(k=>a.jsxs(Cu,{children:[a.jsx(ov,{children:k.name}),a.jsx(Tu,{children:a.jsx(Pu,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:g(c[k.id]||""),onChange:T=>v(k.id,T.target.value)})}),a.jsxs(KI,{children:[a.jsx(cv,{type:"button",$active:d[k.id]==="billed",onClick:()=>f(T=>({...T,[k.id]:"billed"})),children:"Billed"}),a.jsx(cv,{type:"button",$active:d[k.id]==="unbilled",onClick:()=>f(T=>({...T,[k.id]:"unbilled"})),children:"Unbilled"})]}),a.jsx(lv,{children:d[k.id]==="unbilled"?"Current cycle spending (counts towards limit, clears next cycle)":"Previous cycle bill (does not count towards limit)"})]},k.id))}),a.jsx(sv,{}),a.jsxs(ju,{children:[a.jsx(ZI,{}),"Monthly Spending Limits"]}),a.jsx(ku,{children:x.map(k=>{const T=Zw[k.id];return a.jsxs(Cu,{children:[a.jsxs(YI,{children:[a.jsx(GI,{children:k.name}),T&&a.jsxs(HI,{children:["Resets ",T,j(T)]})]}),a.jsx(Tu,{children:a.jsx(Pu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:g(p[k.id]||""),onChange:P=>C(k.id,P.target.value)})}),a.jsx(lv,{children:"Maximum spending allowed per billing cycle"})]},k.id)})})]}),a.jsx(BI,{children:a.jsxs(UI,{children:[a.jsx(av,{onClick:t,children:"Cancel"}),a.jsx(av,{$primary:!0,onClick:b,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})})]})})})},tM=S(O.div)`
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
`,nM=S.div`
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
`,rM=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,iM=S.div`
  height: 120px;

  @media (max-width: 640px) {
    height: 100px;
  }
`,oM=S(O.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,sM=S.div`
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
`,aM=S(O.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(100px + var(--space-lg));
  }
`,lM=S(O.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  min-width: 0;

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,cM=S(O.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,uM=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,dM=S.div`
  display: flex;
  gap: var(--space-sm);
`,uv=S(O.button)`
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
`,fM=S(O.button)`
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
`,pM=S.input`
  display: none;
`,hM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"3"}),a.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),mM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),gM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"17 8 12 3 7 8"}),a.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),vM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),a.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),a.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),yM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),a.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),xM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),a.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),wM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Oa={type:"spring",stiffness:300,damping:30,mass:.8},SM={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Du={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Oa}},bM=()=>{const[e,t]=w.useState(Pt(new Date)),[n,r]=w.useState([]),[i,o]=w.useState({}),[s,l]=w.useState({}),[c,u]=w.useState({}),[d,f]=w.useState(!1),p=w.useRef(null);w.useEffect(()=>{const j=_4(),k=I4(),T=M4(),P=O4();r(j),o(k),l(T),u(P)},[]);const m=w.useMemo(()=>V4(n,e,i,s),[e,n,i,s]),y=w.useMemo(()=>eh().map(k=>$4(k,n,e,s)),[n,e,s]),x=w.useCallback(j=>{r(k=>{const T=[...k,j];return requestAnimationFrame(()=>gu(T)),T})},[]),b=w.useCallback(j=>{r(k=>{const T=k.filter(P=>P.id!==j);return requestAnimationFrame(()=>gu(T)),T})},[]),g=w.useCallback((j,k,T)=>{o(j),l(k),u(T),requestAnimationFrame(()=>{E0(j),A0(k),L0(T)})},[]),h=w.useCallback(()=>{H4(n,i,s,c)},[n,i,s,c]),v=w.useCallback(()=>{var j;(j=p.current)==null||j.click()},[]),C=w.useCallback(j=>{var P;const k=(P=j.target.files)==null?void 0:P[0];if(!k)return;const T=new FileReader;T.onload=E=>{var I;const _=(I=E.target)==null?void 0:I.result,N=G4(_);N?window.confirm(`Import backup from ${new Date(N.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${N.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(N.transactions),o(N.initialBalances),l(N.initialCCBills),u(N.ccLimits||{}),gu(N.transactions),E0(N.initialBalances),A0(N.initialCCBills),L0(N.ccLimits||{})):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},T.readAsText(k),j.target.value=""},[]);return a.jsxs(a.Fragment,{children:[a.jsx(nM,{children:a.jsx(rM,{children:a.jsx(t_,{selectedDate:e,onDateChange:t})})}),a.jsxs(tM,{variants:SM,initial:"hidden",animate:"visible",children:[a.jsxs(Hw,{$maxWidth:"wide",children:[a.jsx(iM,{}),a.jsx(oM,{variants:Du,children:a.jsx(Co,{title:"Summary",icon:a.jsx(yM,{}),accent:"green",children:a.jsx(A_,{balances:m,ccLimits:c,creditCardDetailedBalances:y})})}),a.jsxs(sM,{children:[a.jsx(aM,{variants:Du,children:a.jsx(Co,{title:"Add Transaction",icon:a.jsx(xM,{}),accent:"orange",children:a.jsx(Z_,{onAddTransaction:x,defaultDate:e})})}),a.jsxs(lM,{variants:Du,children:[a.jsx(Co,{title:"Credit Cards",icon:a.jsx(wM,{}),accent:"pink",badge:y.length,children:a.jsx(cM,{children:y.map((j,k)=>a.jsx(x_,{detailedBalance:j,index:k,limit:c[j.account.id]},j.account.id))})}),a.jsx(RI,{transactions:n,onDeleteTransaction:b,selectedDate:e}),a.jsx(Co,{title:"Manage Data",icon:a.jsx(vM,{}),accent:"purple",defaultOpen:!1,children:a.jsxs(uM,{children:[a.jsxs(fM,{type:"button",onClick:()=>f(!0),whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Oa,children:[a.jsx(hM,{}),"Set Initial Balances"]}),a.jsxs(dM,{children:[a.jsxs(uv,{type:"button",$variant:"secondary",onClick:h,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Oa,children:[a.jsx(mM,{}),"Export"]}),a.jsxs(uv,{type:"button",$variant:"secondary",onClick:v,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Oa,children:[a.jsx(gM,{}),"Import"]})]})]})}),a.jsx(pM,{ref:p,type:"file",accept:".json",onChange:C})]})]})]}),a.jsx(eM,{isOpen:d,onClose:()=>f(!1),initialBalances:i,initialCCBills:s,ccLimits:c,onSave:g})]})]})},ES=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),jM=async(e,t,n,r=48)=>{try{const i=await ES(),o=Math.min(t,n)*.03,s=t-r-o,l=n-r-o;e.globalAlpha=.7,e.drawImage(i,s,l,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},cf=(e,t,n)=>{const r=[],i=l=>{const c=[];let u=l;for(;u.length>0;){let d=u.length;for(;d>0&&e.measureText(u.slice(0,d)).width>n;)d--;d=Math.max(1,d);const f=u.slice(0,d),p=f.lastIndexOf("/"),m=f.lastIndexOf("-"),y=f.lastIndexOf(".");let x=d;const b=[p,m,y].filter(g=>g>0&&g<d-1);b.length>0&&(x=Math.max(...b)+1),c.push(u.slice(0,x)),u=u.slice(x)}return c},o=t.split(" ");let s="";for(const l of o)if(e.measureText(l).width>n){s&&(r.push(s),s="");const u=i(l);for(let d=0;d<u.length;d++)d<u.length-1?r.push(u[d]):s=u[d]}else{const u=s?`${s} ${l}`:l;e.measureText(u).width>n&&s?(r.push(s),s=l):s=u}return s&&r.push(s),r},kM=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:o,alignment:s,aspectRatio:l,padding:c}=e,u=document.createElement("canvas");u.width=l.width,u.height=l.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=o,d.fillRect(0,0,u.width,u.height);const f=n*(l.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(l.width/1080),m=u.width-p*2,y=t.split(`
`),x=[];for(const j of y)if(j.trim()==="")x.push("");else{const k=cf(d,j,m);x.push(...k)}const b=f*1.4,g=x.length*b;let h=(u.height-g)/2+f;d.textAlign=s;let v;switch(s){case"left":v=p;break;case"right":v=u.width-p;break;default:v=u.width/2}for(const j of x)j!==""&&d.fillText(j,v,h),h+=b;const C=Math.min(u.width,u.height)*.06;return await jM(d,u.width,u.height,C),u.toDataURL("image/png",1)},CM=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,o=document.createElement("canvas");o.width=n.width,o.height=n.height;const s=o.getContext("2d");if(!s)throw new Error("Failed to get canvas context");const l=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";s.fillStyle=r,s.fillRect(0,0,o.width,o.height);const f=64*l,p=o.width-f*2,m=20*l,y=36*l,x=(c?44:40)*l,b=(c?24:22)*l,g=18*l,h=x*1.25,v=b*1.45,C=c?5:4,j=c?4:3;s.font=`700 ${x}px -apple-system, BlinkMacSystemFont, sans-serif`;const k=cf(s,t.title,p),T=k.slice(0,C);if(k.length>C&&T.length>0){const Q=T[T.length-1];Q.endsWith("...")||(T[T.length-1]=Q.slice(0,-3)+"...")}s.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`;const P=t.description?cf(s,t.description,p):[],E=P.slice(0,j);if(P.length>j&&E.length>0){const Q=E[E.length-1];Q.endsWith("...")||(E[E.length-1]=Q.slice(0,-3)+"...")}const _=y+m,N=T.length*h,I=E.length>0?m+E.length*v:0,F=_+N+I,U=Math.min(o.width,o.height)*.045,D=f+U+16*l,W=o.height-D-f,V=W-F-m*2;let A=0;if(t.image&&V>100*l){const Q=c?o.width*.5:o.width*.4,ce=120*l;A=Math.min(Q,Math.max(ce,V))}const M=A>0?m+A:0,R=F+M;let B=f+Math.max(0,(W-R)/2);if(t.favicon)try{const Q=await dv(t.favicon);s.save(),s.beginPath(),s.arc(f+y/2,B+y/2,y/2,0,Math.PI*2),s.closePath(),s.clip(),s.drawImage(Q,f,B,y,y),s.restore()}catch{s.fillStyle=i,s.beginPath(),s.arc(f+y/2,B+y/2,y/2,0,Math.PI*2),s.fill()}t.siteName&&(s.font=`500 ${22*l}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=d,s.textAlign="left",s.textBaseline="middle",s.fillText(t.siteName,f+y+10*l,B+y/2)),B+=y+m,s.font=`700 ${x}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=u,s.textAlign="left",s.textBaseline="top";for(const Q of T)s.fillText(Q,f,B),B+=h;if(E.length>0){B+=m,s.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=d;for(const Q of E)s.fillText(Q,f,B),B+=v}if(t.image&&A>0){B+=m;try{const Q=await dv(t.image),ce=p;s.save(),TM(s,f,B,ce,A,10*l),s.clip();const Oe=Q.width/Q.height,Xe=ce/A;let Te=0,Wt=0,xt=Q.width,Re=Q.height;Oe>Xe?(xt=Q.height*Xe,Te=(Q.width-xt)/2):(Re=Q.width/Xe,Wt=(Q.height-Re)/2),s.drawImage(Q,Te,Wt,xt,Re,f,B,ce,A),s.restore()}catch{}}const G=o.height-f;s.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,s.fillStyle=i;const ae=p-U-16*l;let le=t.url;for(;s.measureText(le).width>ae&&le.length>20;)le=le.slice(0,-4)+"...";s.textAlign="left",s.textBaseline="middle",s.fillText(le,f,G-U/2);try{const Q=await ES();s.globalAlpha=.7,s.drawImage(Q,o.width-f-U,G-U,U,U),s.globalAlpha=1}catch{}return o.toDataURL("image/png",1)},dv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),TM=(e,t,n,r,i,o)=>{e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()},PM=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},DM=async e=>{var i,o;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const s=`https://api.microlink.io?url=${encodeURIComponent(e)}`,l=await fetch(s);if(!l.ok)return r;const c=await l.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((o=c.data.logo)==null?void 0:o.url)||r.favicon}:r}catch(s){return console.warn("Failed to fetch URL metadata:",s),r}},fv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],EM='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',AM=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},LM=S.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,_M=S.div`
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
`,IM=S.div`
  width: 100%;
  max-width: 600px;
`,MM=S.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,OM=S.div`
  position: absolute;
  inset: 0;
`,RM=S.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,NM=S(O.div)`
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
`,$M=S.div`
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
`,FM=S.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,ho=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,mo=S.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,VM=S.textarea`
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
`,pv=S.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,hv=S.button`
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
`,BM=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,zM=S.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,WM=S.input`
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
`,UM=S.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,HM=S(O.button)`
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
`,YM=S(O.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,GM=S.input`
  width: 100%;
  padding: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 16px; /* Minimum 16px to prevent iOS Safari zoom */
  font-weight: 500;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`,KM=S.textarea`
  width: 100%;
  padding: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 16px; /* Minimum 16px to prevent iOS Safari zoom */
  line-height: 1.5;
  resize: none;
  min-height: 60px;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`,QM=S(O.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,XM=S(O.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,ZM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),JM=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("polyline",{points:"21 15 16 10 5 21"})]}),qM=()=>{const{isDark:e}=up(),[t,n]=w.useState(""),[r,i]=w.useState(64),[o,s]=w.useState("left"),[l,c]=w.useState(fv[1]),[u,d]=w.useState(null),[f,p]=w.useState(!1),[m,y]=w.useState(null),[x,b]=w.useState(""),[g,h]=w.useState(""),[v,C]=w.useState(!1),[j,k]=w.useState(null),T=w.useMemo(()=>AM(t),[t]),P=e?"#000000":"#ffffff",E=e?"#ffffff":"#000000",_=`${l.height/l.width*100}%`,N=w.useCallback(async()=>{if(!(!T||!t.trim())){C(!0),k(null),d(null);try{const D=await DM(t.trim());y(D),b(D.title),h(D.description)}catch{k("Unable to fetch URL preview")}C(!1)}},[t,T]),I=w.useCallback(async()=>{if(!t.trim()||T){T||d(null);return}p(!0);try{const D=await kM({text:t.trim(),fontSize:r,fontFamily:EM,textColor:E,backgroundColor:P,alignment:o,aspectRatio:l,padding:80});d(D)}catch(D){console.error("Preview generation failed:",D)}p(!1)},[t,T,r,o,l,P,E]),F=w.useCallback(async()=>{if(m){p(!0);try{const D=await CM({metadata:{...m,title:x||m.title,description:g||m.description},aspectRatio:l,backgroundColor:P,accentColor:"#2A9D8F"});d(D)}catch(D){console.error("URL preview generation failed:",D)}p(!1)}},[m,x,g,l,P]);w.useEffect(()=>{if(T)return;const D=setTimeout(I,200);return()=>clearTimeout(D)},[I,T]),w.useEffect(()=>{T?N():(y(null),b(""),h(""),k(null))},[T,N]),w.useEffect(()=>{m&&F()},[m,x,g,l,F]);const U=()=>{if(u){const V=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;PM(u,V)}};return a.jsxs(LM,{children:[a.jsx(_M,{children:a.jsx(IM,{children:a.jsx(MM,{$bgColor:P,$paddingBottom:_,children:a.jsxs(OM,{children:[u&&a.jsx(RM,{src:u,alt:"Preview"}),a.jsx(Ye,{children:!u&&a.jsxs(NM,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[a.jsx(JM,{}),a.jsx("span",{children:T?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),a.jsx($M,{children:a.jsxs(FM,{children:[a.jsxs(ho,{children:[a.jsx(mo,{children:"Content"}),a.jsx(VM,{value:t,onChange:D=>n(D.target.value),onContextMenu:D=>D.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),T?a.jsxs(a.Fragment,{children:[v&&a.jsx(ho,{style:{alignItems:"center"},children:a.jsx(XM,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),j&&a.jsx(QM,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:j}),m&&a.jsxs(YM,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[a.jsx(mo,{children:"Edit Details"}),a.jsx(GM,{value:x,onChange:D=>b(D.target.value),placeholder:"Title"}),a.jsx(KM,{value:g,onChange:D=>h(D.target.value),placeholder:"Description"})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs(ho,{children:[a.jsx(mo,{children:"Font Size"}),a.jsxs(BM,{children:[a.jsx(zM,{children:a.jsx(WM,{type:"range",min:"24",max:"120",value:r,onChange:D=>i(Number(D.target.value))})}),a.jsx(UM,{children:r})]})]}),a.jsxs(ho,{children:[a.jsx(mo,{children:"Alignment"}),a.jsx(pv,{children:["left","center","right"].map(D=>a.jsx(hv,{$active:o===D,onClick:()=>s(D),children:D.charAt(0).toUpperCase()+D.slice(1)},D))})]})]}),a.jsxs(ho,{children:[a.jsx(mo,{children:"Format"}),a.jsx(pv,{children:fv.map(D=>a.jsx(hv,{$active:l.id===D.id,onClick:()=>c(D),children:D.name},D.id))})]}),a.jsxs(HM,{onClick:U,disabled:!u||f,whileTap:{scale:.98},children:[a.jsx(ZM,{}),"Download Image"]})]})})]})},eO=S(O.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,tO={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},nO=()=>a.jsx(eO,{variants:tO,initial:"hidden",animate:"visible",children:a.jsx(qM,{})}),rO=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},iO=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),a.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),a.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),a.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),a.jsx("path",{d:"M8 8v2"}),a.jsx("path",{d:"M16 8v2"}),a.jsx("path",{d:"M12 8v5"}),a.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),oO=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[a.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),a.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),a.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),a.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),a.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),a.jsx("path",{d:"M12 10v8"}),a.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),sO=S.div`
  min-height: 100vh;
  position: relative;
`,aO=S.main`
  position: relative;
  z-index: 1;
`,lO=S.a`
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
`,cO=zi`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,mv=S.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,gv=S.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${cO} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,vv=S.p`
  color: var(--text-secondary);
  font-size: 15px;
`,uO=S.button`
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
`,dO=()=>{const e=cp(),t=Vi();return w.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function fO(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Lk(),i=w.useMemo(()=>rO()?iO:oO,[]);return t||!e&&!n?a.jsxs(mv,{children:[a.jsx(gv,{children:a.jsx(i,{})}),a.jsx(vv,{children:"Authenticating..."})]}):n&&!e?a.jsxs(mv,{children:[a.jsx(gv,{style:{animation:"none",opacity:1},children:a.jsx(i,{})}),a.jsx(vv,{children:"Authentication required to continue"}),a.jsx(uO,{onClick:r,children:"Try Again"})]}):a.jsxs(sO,{children:[a.jsx(dO,{}),a.jsx(lO,{href:"#main-content",children:"Skip to main content"}),a.jsx(OC,{}),a.jsx(v5,{}),a.jsx(aO,{id:"main-content",children:a.jsxs(hk,{children:[a.jsx(Hr,{path:"/",element:a.jsx(_5,{})}),a.jsx(Hr,{path:"/tax-manager",element:a.jsx(L4,{})}),a.jsx(Hr,{path:"/expense-manager",element:a.jsx(bM,{})}),a.jsx(Hr,{path:"/canvas-manager",element:a.jsx(nO,{})}),a.jsx(Hr,{path:"/tax-calculator",element:a.jsx(fk,{to:"/tax-manager",replace:!0})})]})})]})}function pO(){return a.jsx(Sk,{basename:"/tools",children:a.jsx(Ck,{children:a.jsxs(Ak,{children:[a.jsx(_C,{}),a.jsx(fO,{})]})})})}Lx(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(pO,{})}));
