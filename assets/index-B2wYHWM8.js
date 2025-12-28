function cb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ub(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lv={exports:{}},Il={},Iv={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),db=Symbol.for("react.portal"),fb=Symbol.for("react.fragment"),pb=Symbol.for("react.strict_mode"),hb=Symbol.for("react.profiler"),mb=Symbol.for("react.provider"),gb=Symbol.for("react.context"),vb=Symbol.for("react.forward_ref"),xb=Symbol.for("react.suspense"),yb=Symbol.for("react.memo"),wb=Symbol.for("react.lazy"),Fh=Symbol.iterator;function bb(e){return e===null||typeof e!="object"?null:(e=Fh&&e[Fh]||e["@@iterator"],typeof e=="function"?e:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Rv={};function Ki(e,t,n){this.props=e,this.context=t,this.refs=Rv,this.updater=n||Mv}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ki.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $v(){}$v.prototype=Ki.prototype;function bf(e,t,n){this.props=e,this.context=t,this.refs=Rv,this.updater=n||Mv}var Sf=bf.prototype=new $v;Sf.constructor=bf;Ov(Sf,Ki.prototype);Sf.isPureReactComponent=!0;var Bh=Array.isArray,Nv=Object.prototype.hasOwnProperty,jf={current:null},Fv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Nv.call(t,r)&&!Fv.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ka,type:e,key:o,ref:a,props:i,_owner:jf.current}}function Sb(e,t){return{$$typeof:ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ka}function jb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vh=/\/+/g;function Cc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jb(""+e.key):t.toString(36)}function ks(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ka:case db:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Cc(a,0):r,Bh(i)?(n="",e!=null&&(n=e.replace(Vh,"$&/")+"/"),ks(i,t,n,"",function(u){return u})):i!=null&&(kf(i)&&(i=Sb(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Vh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Bh(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Cc(o,l);a+=ks(o,t,n,c,i)}else if(c=bb(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Cc(o,l++),a+=ks(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function za(e,t,n){if(e==null)return e;var r=[],i=0;return ks(e,r,"","",function(o){return t.call(n,o,i++)}),r}function kb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Cs={transition:null},Cb={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:jf};function Vv(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:za,forEach:function(e,t,n){za(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return za(e,function(){t++}),t},toArray:function(e){return za(e,function(t){return t})||[]},only:function(e){if(!kf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Ki;Q.Fragment=fb;Q.Profiler=hb;Q.PureComponent=bf;Q.StrictMode=pb;Q.Suspense=xb;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cb;Q.act=Vv;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ov({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=jf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Nv.call(t,c)&&!Fv.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ka,type:e.type,key:i,ref:o,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:gb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mb,_context:e},e.Consumer=e};Q.createElement=Bv;Q.createFactory=function(e){var t=Bv.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:vb,render:e}};Q.isValidElement=kf;Q.lazy=function(e){return{$$typeof:wb,_payload:{_status:-1,_result:e},_init:kb}};Q.memo=function(e,t){return{$$typeof:yb,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Cs.transition;Cs.transition={};try{e()}finally{Cs.transition=t}};Q.unstable_act=Vv;Q.useCallback=function(e,t){return et.current.useCallback(e,t)};Q.useContext=function(e){return et.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return et.current.useDeferredValue(e)};Q.useEffect=function(e,t){return et.current.useEffect(e,t)};Q.useId=function(){return et.current.useId()};Q.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return et.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};Q.useRef=function(e){return et.current.useRef(e)};Q.useState=function(e){return et.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return et.current.useTransition()};Q.version="18.3.1";Iv.exports=Q;var b=Iv.exports;const en=ub(b),Tb=cb({__proto__:null,default:en},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb=b,Db=Symbol.for("react.element"),Eb=Symbol.for("react.fragment"),Ab=Object.prototype.hasOwnProperty,_b=Pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lb={key:!0,ref:!0,__self:!0,__source:!0};function zv(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ab.call(t,r)&&!Lb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Db,type:e,key:o,ref:a,props:i,_owner:_b.current}}Il.Fragment=Eb;Il.jsx=zv;Il.jsxs=zv;Lv.exports=Il;var s=Lv.exports,Wv={exports:{}},xt={},Uv={exports:{}},Hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,O){var $=A.length;A.push(O);e:for(;0<$;){var V=$-1>>>1,H=A[V];if(0<i(H,O))A[V]=O,A[$]=H,$=V;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],$=A.pop();if($!==O){A[0]=$;e:for(var V=0,H=A.length,re=H>>>1;V<re;){var le=2*(V+1)-1,q=A[le],ce=le+1,Re=A[ce];if(0>i(q,$))ce<H&&0>i(Re,q)?(A[V]=Re,A[ce]=$,V=ce):(A[V]=q,A[le]=$,V=le);else if(ce<H&&0>i(Re,$))A[V]=Re,A[ce]=$,V=ce;else break e}}return O}function i(A,O){var $=A.sortIndex-O.sortIndex;return $!==0?$:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,m=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=A)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function j(A){if(w=!1,v(A),!y)if(n(c)!==null)y=!0,L(k);else{var O=n(u);O!==null&&M(j,O.startTime-A)}}function k(A,O){y=!1,w&&(w=!1,g(E),E=-1),m=!0;var $=p;try{for(v(O),f=n(c);f!==null&&(!(f.expirationTime>O)||A&&!_());){var V=f.callback;if(typeof V=="function"){f.callback=null,p=f.priorityLevel;var H=V(f.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),v(O)}else r(c);f=n(c)}if(f!==null)var re=!0;else{var le=n(u);le!==null&&M(j,le.startTime-O),re=!1}return re}finally{f=null,p=$,m=!1}}var C=!1,P=null,E=-1,R=5,T=-1;function _(){return!(e.unstable_now()-T<R)}function N(){if(P!==null){var A=e.unstable_now();T=A;var O=!0;try{O=P(!0,A)}finally{O?z():(C=!1,P=null)}}else C=!1}var z;if(typeof h=="function")z=function(){h(N)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=N,z=function(){D.postMessage(null)}}else z=function(){S(N,0)};function L(A){P=A,C||(C=!0,z())}function M(A,O){E=S(function(){A(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,L(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var $=p;p=O;try{return A()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=p;p=A;try{return O()}finally{p=$}},e.unstable_scheduleCallback=function(A,O,$){var V=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?V+$:V):$=V,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=$+H,A={id:d++,callback:O,priorityLevel:A,startTime:$,expirationTime:H,sortIndex:-1},$>V?(A.sortIndex=$,t(u,A),n(c)===null&&A===n(u)&&(w?(g(E),E=-1):w=!0,M(j,$-V))):(A.sortIndex=H,t(c,A),y||m||(y=!0,L(k))),A},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(A){var O=p;return function(){var $=p;p=O;try{return A.apply(this,arguments)}finally{p=$}}}})(Hv);Uv.exports=Hv;var Ib=Uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb=b,gt=Ib;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yv=new Set,Xo={};function Rr(e,t){Li(e,t),Li(e+"Capture",t)}function Li(e,t){for(Xo[e]=t,e=0;e<t.length;e++)Yv.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Wh={};function Rb(e){return Fu.call(Wh,e)?!0:Fu.call(zh,e)?!1:Ob.test(e)?Wh[e]=!0:(zh[e]=!0,!1)}function $b(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nb(e,t,n,r){if(t===null||typeof t>"u"||$b(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Tf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cf,Tf);ze[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cf,Tf);ze[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cf,Tf);ze[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pf(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nb(t,n,i,r)&&(n=null),r||i===null?Rb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bn=Mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),qv=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=Uh&&e[Uh]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Tc;function Po(e){if(Tc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tc=t&&t[1]||""}return`
`+Tc+e}var Pc=!1;function Dc(e,t){if(!e||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Po(e):""}function Fb(e){switch(e.tag){case 5:return Po(e.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return e=Dc(e.type,!1),e;case 11:return e=Dc(e.type.render,!1),e;case 1:return e=Dc(e.type,!0),e;default:return""}}function Wu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ai:return"Fragment";case oi:return"Portal";case Bu:return"Profiler";case Df:return"StrictMode";case Vu:return"Suspense";case zu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kv:return(e.displayName||"Context")+".Consumer";case Gv:return(e._context.displayName||"Context")+".Provider";case Ef:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Af:return t=e.displayName||null,t!==null?t:Wu(e.type)||"Memo";case Pn:t=e._payload,e=e._init;try{return Wu(e(t))}catch{}}return null}function Bb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(t);case 8:return t===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vb(e){var t=Qv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ua(e){e._valueTracker||(e._valueTracker=Vb(e))}function Xv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uu(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zv(e,t){t=t.checked,t!=null&&Pf(e,"checked",t,!1)}function Hu(e,t){Zv(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yu(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yu(e,t,n){(t!=="number"||Ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Do=Array.isArray;function Ti(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Do(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function Jv(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ex(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ex(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,tx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zb=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(e){zb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$o[t]=$o[e]})});function nx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$o.hasOwnProperty(e)&&$o[e]?(""+t).trim():t+"px"}function rx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wb=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(e,t){if(t){if(Wb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Qu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function _f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zu=null,Pi=null,Di=null;function qh(e){if(e=Pa(e)){if(typeof Zu!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Nl(t),Zu(e.stateNode,e.type,t))}}function ix(e){Pi?Di?Di.push(e):Di=[e]:Pi=e}function ox(){if(Pi){var e=Pi,t=Di;if(Di=Pi=null,qh(e),t)for(e=0;e<t.length;e++)qh(t[e])}}function ax(e,t){return e(t)}function sx(){}var Ec=!1;function lx(e,t,n){if(Ec)return e(t,n);Ec=!0;try{return ax(e,t,n)}finally{Ec=!1,(Pi!==null||Di!==null)&&(sx(),ox())}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ju=!1;if(gn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Ju=!1}function Ub(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var No=!1,Gs=null,Ks=!1,ed=null,Hb={onError:function(e){No=!0,Gs=e}};function Yb(e,t,n,r,i,o,a,l,c){No=!1,Gs=null,Ub.apply(Hb,arguments)}function Gb(e,t,n,r,i,o,a,l,c){if(Yb.apply(this,arguments),No){if(No){var u=Gs;No=!1,Gs=null}else throw Error(I(198));Ks||(Ks=!0,ed=u)}}function $r(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qh(e){if($r(e)!==e)throw Error(I(188))}function Kb(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qh(i),e;if(o===r)return Qh(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function ux(e){return e=Kb(e),e!==null?dx(e):null}function dx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dx(e);if(t!==null)return t;e=e.sibling}return null}var fx=gt.unstable_scheduleCallback,Xh=gt.unstable_cancelCallback,qb=gt.unstable_shouldYield,Qb=gt.unstable_requestPaint,be=gt.unstable_now,Xb=gt.unstable_getCurrentPriorityLevel,Lf=gt.unstable_ImmediatePriority,px=gt.unstable_UserBlockingPriority,qs=gt.unstable_NormalPriority,Zb=gt.unstable_LowPriority,hx=gt.unstable_IdlePriority,Ml=null,nn=null;function Jb(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:nS,eS=Math.log,tS=Math.LN2;function nS(e){return e>>>=0,e===0?32:31-(eS(e)/tS|0)|0}var Ya=64,Ga=4194304;function Eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Eo(l):(o&=a,o!==0&&(r=Eo(o)))}else a=n&~i,a!==0?r=Eo(a):o!==0&&(r=Eo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function rS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Nt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=rS(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function td(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mx(){var e=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),e}function Ac(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ca(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function oS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function If(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function gx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vx,Mf,xx,yx,wx,nd=!1,Ka=[],On=null,Rn=null,$n=null,ea=new Map,ta=new Map,An=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function co(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&Mf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sS(e,t,n,r,i){switch(t){case"focusin":return On=co(On,e,t,n,r,i),!0;case"dragenter":return Rn=co(Rn,e,t,n,r,i),!0;case"mouseover":return $n=co($n,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ea.set(o,co(ea.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ta.set(o,co(ta.get(o)||null,e,t,n,r,i)),!0}return!1}function bx(e){var t=wr(e.target);if(t!==null){var n=$r(t);if(n!==null){if(t=n.tag,t===13){if(t=cx(n),t!==null){e.blockedOn=t,wx(e.priority,function(){xx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xu=r,n.target.dispatchEvent(r),Xu=null}else return t=Pa(n),t!==null&&Mf(t),e.blockedOn=n,!1;t.shift()}return!0}function Jh(e,t,n){Ts(e)&&n.delete(t)}function lS(){nd=!1,On!==null&&Ts(On)&&(On=null),Rn!==null&&Ts(Rn)&&(Rn=null),$n!==null&&Ts($n)&&($n=null),ea.forEach(Jh),ta.forEach(Jh)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,nd||(nd=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,lS)))}function na(e){function t(i){return uo(i,e)}if(0<Ka.length){uo(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(On!==null&&uo(On,e),Rn!==null&&uo(Rn,e),$n!==null&&uo($n,e),ea.forEach(t),ta.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)bx(n),n.blockedOn===null&&An.shift()}var Ei=bn.ReactCurrentBatchConfig,Xs=!0;function cS(e,t,n,r){var i=te,o=Ei.transition;Ei.transition=null;try{te=1,Of(e,t,n,r)}finally{te=i,Ei.transition=o}}function uS(e,t,n,r){var i=te,o=Ei.transition;Ei.transition=null;try{te=4,Of(e,t,n,r)}finally{te=i,Ei.transition=o}}function Of(e,t,n,r){if(Xs){var i=rd(e,t,n,r);if(i===null)Bc(e,t,r,Zs,n),Zh(e,r);else if(sS(i,e,t,n,r))r.stopPropagation();else if(Zh(e,r),t&4&&-1<aS.indexOf(e)){for(;i!==null;){var o=Pa(i);if(o!==null&&vx(o),o=rd(e,t,n,r),o===null&&Bc(e,t,r,Zs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bc(e,t,r,null,n)}}var Zs=null;function rd(e,t,n,r){if(Zs=null,e=_f(r),e=wr(e),e!==null)if(t=$r(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function Sx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xb()){case Lf:return 1;case px:return 4;case qs:case Zb:return 16;case hx:return 536870912;default:return 16}default:return 16}}var Ln=null,Rf=null,Ps=null;function jx(){if(Ps)return Ps;var e,t=Rf,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ps=i.slice(e,1<r?1-r:void 0)}function Ds(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qa(){return!0}function em(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qa:em,this.isPropagationStopped=em,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),t}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=yt(qi),Ta=ge({},qi,{view:0,detail:0}),dS=yt(Ta),_c,Lc,fo,Ol=ge({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(_c=e.screenX-fo.screenX,Lc=e.screenY-fo.screenY):Lc=_c=0,fo=e),_c)},movementY:function(e){return"movementY"in e?e.movementY:Lc}}),tm=yt(Ol),fS=ge({},Ol,{dataTransfer:0}),pS=yt(fS),hS=ge({},Ta,{relatedTarget:0}),Ic=yt(hS),mS=ge({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=yt(mS),vS=ge({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xS=yt(vS),yS=ge({},qi,{data:0}),nm=yt(yS),wS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=SS[e])?!!t[e]:!1}function Nf(){return jS}var kS=ge({},Ta,{key:function(e){if(e.key){var t=wS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(e){return e.type==="keypress"?Ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CS=yt(kS),TS=ge({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=yt(TS),PS=ge({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),DS=yt(PS),ES=ge({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),AS=yt(ES),_S=ge({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=yt(_S),IS=[9,13,27,32],Ff=gn&&"CompositionEvent"in window,Fo=null;gn&&"documentMode"in document&&(Fo=document.documentMode);var MS=gn&&"TextEvent"in window&&!Fo,kx=gn&&(!Ff||Fo&&8<Fo&&11>=Fo),im=" ",om=!1;function Cx(e,t){switch(e){case"keyup":return IS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var si=!1;function OS(e,t){switch(e){case"compositionend":return Tx(t);case"keypress":return t.which!==32?null:(om=!0,im);case"textInput":return e=t.data,e===im&&om?null:e;default:return null}}function RS(e,t){if(si)return e==="compositionend"||!Ff&&Cx(e,t)?(e=jx(),Ps=Rf=Ln=null,si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kx&&t.locale!=="ko"?null:t.data;default:return null}}var $S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$S[e.type]:t==="textarea"}function Px(e,t,n,r){ix(r),t=Js(t,"onChange"),0<t.length&&(n=new $f("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bo=null,ra=null;function NS(e){Nx(e,0)}function Rl(e){var t=ui(e);if(Xv(t))return e}function FS(e,t){if(e==="change")return t}var Dx=!1;if(gn){var Mc;if(gn){var Oc="oninput"in document;if(!Oc){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Oc=typeof sm.oninput=="function"}Mc=Oc}else Mc=!1;Dx=Mc&&(!document.documentMode||9<document.documentMode)}function lm(){Bo&&(Bo.detachEvent("onpropertychange",Ex),ra=Bo=null)}function Ex(e){if(e.propertyName==="value"&&Rl(ra)){var t=[];Px(t,ra,e,_f(e)),lx(NS,t)}}function BS(e,t,n){e==="focusin"?(lm(),Bo=t,ra=n,Bo.attachEvent("onpropertychange",Ex)):e==="focusout"&&lm()}function VS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(ra)}function zS(e,t){if(e==="click")return Rl(t)}function WS(e,t){if(e==="input"||e==="change")return Rl(t)}function US(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:US;function ia(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fu.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function um(e,t){var n=cm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function Ax(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ax(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _x(){for(var e=window,t=Ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ys(e.document)}return t}function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function HS(e){var t=_x(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ax(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=um(n,o);var a=um(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var YS=gn&&"documentMode"in document&&11>=document.documentMode,li=null,id=null,Vo=null,od=!1;function dm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||li==null||li!==Ys(r)||(r=li,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ia(Vo,r)||(Vo=r,r=Js(id,"onSelect"),0<r.length&&(t=new $f("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=li)))}function Qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ci={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Rc={},Lx={};gn&&(Lx=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function $l(e){if(Rc[e])return Rc[e];if(!ci[e])return e;var t=ci[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lx)return Rc[e]=t[n];return e}var Ix=$l("animationend"),Mx=$l("animationiteration"),Ox=$l("animationstart"),Rx=$l("transitionend"),$x=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){$x.set(e,t),Rr(t,[e])}for(var $c=0;$c<fm.length;$c++){var Nc=fm[$c],GS=Nc.toLowerCase(),KS=Nc[0].toUpperCase()+Nc.slice(1);Qn(GS,"on"+KS)}Qn(Ix,"onAnimationEnd");Qn(Mx,"onAnimationIteration");Qn(Ox,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(Rx,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function pm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gb(r,t,void 0,e),e.currentTarget=null}function Nx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;pm(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;pm(i,l,u),o=c}}}if(Ks)throw e=ed,Ks=!1,ed=null,e}function ie(e,t){var n=t[ud];n===void 0&&(n=t[ud]=new Set);var r=e+"__bubble";n.has(r)||(Fx(t,e,2,!1),n.add(r))}function Fc(e,t,n){var r=0;t&&(r|=4),Fx(n,e,r,t)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function oa(e){if(!e[Xa]){e[Xa]=!0,Yv.forEach(function(n){n!=="selectionchange"&&(qS.has(n)||Fc(n,!1,e),Fc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xa]||(t[Xa]=!0,Fc("selectionchange",!1,t))}}function Fx(e,t,n,r){switch(Sx(t)){case 1:var i=cS;break;case 4:i=uS;break;default:i=Of}n=i.bind(null,t,n,e),i=void 0,!Ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=wr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}lx(function(){var u=o,d=_f(n),f=[];e:{var p=$x.get(e);if(p!==void 0){var m=$f,y=e;switch(e){case"keypress":if(Ds(n)===0)break e;case"keydown":case"keyup":m=CS;break;case"focusin":y="focus",m=Ic;break;case"focusout":y="blur",m=Ic;break;case"beforeblur":case"afterblur":m=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=DS;break;case Ix:case Mx:case Ox:m=gS;break;case Rx:m=AS;break;case"scroll":m=dS;break;case"wheel":m=LS;break;case"copy":case"cut":case"paste":m=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=rm}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var h=u,v;h!==null;){v=h;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,g!==null&&(j=Jo(h,g),j!=null&&w.push(aa(h,j,v)))),S)break;h=h.return}0<w.length&&(p=new m(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Xu&&(y=n.relatedTarget||n.fromElement)&&(wr(y)||y[vn]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?wr(y):null,y!==null&&(S=$r(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=tm,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=rm,j="onPointerLeave",g="onPointerEnter",h="pointer"),S=m==null?p:ui(m),v=y==null?p:ui(y),p=new w(j,h+"leave",m,n,d),p.target=S,p.relatedTarget=v,j=null,wr(d)===u&&(w=new w(g,h+"enter",y,n,d),w.target=v,w.relatedTarget=S,j=w),S=j,m&&y)t:{for(w=m,g=y,h=0,v=w;v;v=Vr(v))h++;for(v=0,j=g;j;j=Vr(j))v++;for(;0<h-v;)w=Vr(w),h--;for(;0<v-h;)g=Vr(g),v--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Vr(w),g=Vr(g)}w=null}else w=null;m!==null&&hm(f,p,m,w,!1),y!==null&&S!==null&&hm(f,S,y,w,!0)}}e:{if(p=u?ui(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var k=FS;else if(am(p))if(Dx)k=WS;else{k=VS;var C=BS}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=zS);if(k&&(k=k(e,u))){Px(f,k,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Yu(p,"number",p.value)}switch(C=u?ui(u):window,e){case"focusin":(am(C)||C.contentEditable==="true")&&(li=C,id=u,Vo=null);break;case"focusout":Vo=id=li=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,dm(f,n,d);break;case"selectionchange":if(YS)break;case"keydown":case"keyup":dm(f,n,d)}var P;if(Ff)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else si?Cx(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(kx&&n.locale!=="ko"&&(si||E!=="onCompositionStart"?E==="onCompositionEnd"&&si&&(P=jx()):(Ln=d,Rf="value"in Ln?Ln.value:Ln.textContent,si=!0)),C=Js(u,E),0<C.length&&(E=new nm(E,e,null,n,d),f.push({event:E,listeners:C}),P?E.data=P:(P=Tx(n),P!==null&&(E.data=P)))),(P=MS?OS(e,n):RS(e,n))&&(u=Js(u,"onBeforeInput"),0<u.length&&(d=new nm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}Nx(f,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jo(e,n),o!=null&&r.unshift(aa(e,o,i)),o=Jo(e,t),o!=null&&r.push(aa(e,o,i))),e=e.return}return r}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hm(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Jo(n,o),c!=null&&a.unshift(aa(n,c,l))):i||(c=Jo(n,o),c!=null&&a.push(aa(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var QS=/\r\n?/g,XS=/\u0000|\uFFFD/g;function mm(e){return(typeof e=="string"?e:""+e).replace(QS,`
`).replace(XS,"")}function Za(e,t,n){if(t=mm(t),mm(e)!==t&&n)throw Error(I(425))}function el(){}var ad=null,sd=null;function ld(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(e){return gm.resolve(null).then(e).catch(ej)}:cd;function ej(e){setTimeout(function(){throw e})}function Vc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);na(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Qi,sa="__reactProps$"+Qi,vn="__reactContainer$"+Qi,ud="__reactEvents$"+Qi,tj="__reactListeners$"+Qi,nj="__reactHandles$"+Qi;function wr(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vm(e);e!==null;){if(n=e[Jt])return n;e=vm(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[Jt]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Nl(e){return e[sa]||null}var dd=[],di=-1;function Xn(e){return{current:e}}function ae(e){0>di||(e.current=dd[di],dd[di]=null,di--)}function ne(e,t){di++,dd[di]=e.current,e.current=t}var Gn={},Qe=Xn(Gn),lt=Xn(!1),_r=Gn;function Ii(e,t){var n=e.type.contextTypes;if(!n)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function tl(){ae(lt),ae(Qe)}function xm(e,t,n){if(Qe.current!==Gn)throw Error(I(168));ne(Qe,t),ne(lt,n)}function Bx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Bb(e)||"Unknown",i));return ge({},n,r)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,_r=Qe.current,ne(Qe,e),ne(lt,lt.current),!0}function ym(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Bx(e,t,_r),r.__reactInternalMemoizedMergedChildContext=e,ae(lt),ae(Qe),ne(Qe,e)):ae(lt),ne(lt,n)}var un=null,Fl=!1,zc=!1;function Vx(e){un===null?un=[e]:un.push(e)}function rj(e){Fl=!0,Vx(e)}function Zn(){if(!zc&&un!==null){zc=!0;var e=0,t=te;try{var n=un;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,Fl=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),fx(Lf,Zn),i}finally{te=t,zc=!1}}return null}var fi=[],pi=0,rl=null,il=0,kt=[],Ct=0,Lr=null,dn=1,fn="";function gr(e,t){fi[pi++]=il,fi[pi++]=rl,rl=e,il=t}function zx(e,t,n){kt[Ct++]=dn,kt[Ct++]=fn,kt[Ct++]=Lr,Lr=e;var r=dn;e=fn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-Nt(t)+i|n<<i|r,fn=o+e}else dn=1<<o|n<<i|r,fn=e}function Vf(e){e.return!==null&&(gr(e,1),zx(e,1,0))}function zf(e){for(;e===rl;)rl=fi[--pi],fi[pi]=null,il=fi[--pi],fi[pi]=null;for(;e===Lr;)Lr=kt[--Ct],kt[Ct]=null,fn=kt[--Ct],kt[Ct]=null,dn=kt[--Ct],kt[Ct]=null}var ht=null,pt=null,ue=!1,$t=null;function Wx(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lr!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function fd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pd(e){if(ue){var t=pt;if(t){var n=t;if(!wm(e,t)){if(fd(e))throw Error(I(418));t=Nn(n.nextSibling);var r=ht;t&&wm(e,t)?Wx(r,n):(e.flags=e.flags&-4097|2,ue=!1,ht=e)}}else{if(fd(e))throw Error(I(418));e.flags=e.flags&-4097|2,ue=!1,ht=e}}}function bm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ja(e){if(e!==ht)return!1;if(!ue)return bm(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ld(e.type,e.memoizedProps)),t&&(t=pt)){if(fd(e))throw Ux(),Error(I(418));for(;t;)Wx(e,t),t=Nn(t.nextSibling)}if(bm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?Nn(e.stateNode.nextSibling):null;return!0}function Ux(){for(var e=pt;e;)e=Nn(e.nextSibling)}function Mi(){pt=ht=null,ue=!1}function Wf(e){$t===null?$t=[e]:$t.push(e)}var ij=bn.ReactCurrentBatchConfig;function po(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sm(e){var t=e._init;return t(e._payload)}function Hx(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=zn(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,v,j){return h===null||h.tag!==6?(h=qc(v,g.mode,j),h.return=g,h):(h=i(h,v),h.return=g,h)}function c(g,h,v,j){var k=v.type;return k===ai?d(g,h,v.props.children,j,v.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&Sm(k)===h.type)?(j=i(h,v.props),j.ref=po(g,h,v),j.return=g,j):(j=Os(v.type,v.key,v.props,null,g.mode,j),j.ref=po(g,h,v),j.return=g,j)}function u(g,h,v,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Qc(v,g.mode,j),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,j,k){return h===null||h.tag!==7?(h=Tr(v,g.mode,j,k),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=qc(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wa:return v=Os(h.type,h.key,h.props,null,g.mode,v),v.ref=po(g,null,h),v.return=g,v;case oi:return h=Qc(h,g.mode,v),h.return=g,h;case Pn:var j=h._init;return f(g,j(h._payload),v)}if(Do(h)||so(h))return h=Tr(h,g.mode,v,null),h.return=g,h;es(g,h)}return null}function p(g,h,v,j){var k=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:l(g,h,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return v.key===k?c(g,h,v,j):null;case oi:return v.key===k?u(g,h,v,j):null;case Pn:return k=v._init,p(g,h,k(v._payload),j)}if(Do(v)||so(v))return k!==null?null:d(g,h,v,j,null);es(g,v)}return null}function m(g,h,v,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(v)||null,l(h,g,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Wa:return g=g.get(j.key===null?v:j.key)||null,c(h,g,j,k);case oi:return g=g.get(j.key===null?v:j.key)||null,u(h,g,j,k);case Pn:var C=j._init;return m(g,h,v,C(j._payload),k)}if(Do(j)||so(j))return g=g.get(v)||null,d(h,g,j,k,null);es(h,j)}return null}function y(g,h,v,j){for(var k=null,C=null,P=h,E=h=0,R=null;P!==null&&E<v.length;E++){P.index>E?(R=P,P=null):R=P.sibling;var T=p(g,P,v[E],j);if(T===null){P===null&&(P=R);break}e&&P&&T.alternate===null&&t(g,P),h=o(T,h,E),C===null?k=T:C.sibling=T,C=T,P=R}if(E===v.length)return n(g,P),ue&&gr(g,E),k;if(P===null){for(;E<v.length;E++)P=f(g,v[E],j),P!==null&&(h=o(P,h,E),C===null?k=P:C.sibling=P,C=P);return ue&&gr(g,E),k}for(P=r(g,P);E<v.length;E++)R=m(P,g,E,v[E],j),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?E:R.key),h=o(R,h,E),C===null?k=R:C.sibling=R,C=R);return e&&P.forEach(function(_){return t(g,_)}),ue&&gr(g,E),k}function w(g,h,v,j){var k=so(v);if(typeof k!="function")throw Error(I(150));if(v=k.call(v),v==null)throw Error(I(151));for(var C=k=null,P=h,E=h=0,R=null,T=v.next();P!==null&&!T.done;E++,T=v.next()){P.index>E?(R=P,P=null):R=P.sibling;var _=p(g,P,T.value,j);if(_===null){P===null&&(P=R);break}e&&P&&_.alternate===null&&t(g,P),h=o(_,h,E),C===null?k=_:C.sibling=_,C=_,P=R}if(T.done)return n(g,P),ue&&gr(g,E),k;if(P===null){for(;!T.done;E++,T=v.next())T=f(g,T.value,j),T!==null&&(h=o(T,h,E),C===null?k=T:C.sibling=T,C=T);return ue&&gr(g,E),k}for(P=r(g,P);!T.done;E++,T=v.next())T=m(P,g,E,T.value,j),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?E:T.key),h=o(T,h,E),C===null?k=T:C.sibling=T,C=T);return e&&P.forEach(function(N){return t(g,N)}),ue&&gr(g,E),k}function S(g,h,v,j){if(typeof v=="object"&&v!==null&&v.type===ai&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:e:{for(var k=v.key,C=h;C!==null;){if(C.key===k){if(k=v.type,k===ai){if(C.tag===7){n(g,C.sibling),h=i(C,v.props.children),h.return=g,g=h;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&Sm(k)===C.type){n(g,C.sibling),h=i(C,v.props),h.ref=po(g,C,v),h.return=g,g=h;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===ai?(h=Tr(v.props.children,g.mode,j,v.key),h.return=g,g=h):(j=Os(v.type,v.key,v.props,null,g.mode,j),j.ref=po(g,h,v),j.return=g,g=j)}return a(g);case oi:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Qc(v,g.mode,j),h.return=g,g=h}return a(g);case Pn:return C=v._init,S(g,h,C(v._payload),j)}if(Do(v))return y(g,h,v,j);if(so(v))return w(g,h,v,j);es(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=qc(v,g.mode,j),h.return=g,g=h),a(g)):n(g,h)}return S}var Oi=Hx(!0),Yx=Hx(!1),ol=Xn(null),al=null,hi=null,Uf=null;function Hf(){Uf=hi=al=null}function Yf(e){var t=ol.current;ae(ol),e._currentValue=t}function hd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){al=e,Uf=hi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Uf!==e)if(e={context:e,memoizedValue:t,next:null},hi===null){if(al===null)throw Error(I(308));hi=e,al.dependencies={lanes:0,firstContext:e}}else hi=hi.next=e;return t}var br=null;function Gf(e){br===null?br=[e]:br.push(e)}function Gx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Gf(t)):(n.next=i.next,i.next=n),t.interleaved=n,xn(e,r)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xn(e,n)}return i=r.interleaved,i===null?(t.next=t,Gf(r)):(t.next=i.next,i.next=t),r.interleaved=t,xn(e,n)}function Es(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,If(e,n)}}function jm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var i=e.updateQueue;Dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,l=o;do{var p=l.lane,m=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=ge({},f,p);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mr|=a,e.lanes=a,e.memoizedState=f}}function km(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Da={},rn=Xn(Da),la=Xn(Da),ca=Xn(Da);function Sr(e){if(e===Da)throw Error(I(174));return e}function qf(e,t){switch(ne(ca,t),ne(la,e),ne(rn,Da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ku(t,e)}ae(rn),ne(rn,t)}function Ri(){ae(rn),ae(la),ae(ca)}function qx(e){Sr(ca.current);var t=Sr(rn.current),n=Ku(t,e.type);t!==n&&(ne(la,e),ne(rn,n))}function Qf(e){la.current===e&&(ae(rn),ae(la))}var pe=Xn(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wc=[];function Xf(){for(var e=0;e<Wc.length;e++)Wc[e]._workInProgressVersionPrimary=null;Wc.length=0}var As=bn.ReactCurrentDispatcher,Uc=bn.ReactCurrentBatchConfig,Ir=0,me=null,Ae=null,Ie=null,cl=!1,zo=!1,ua=0,oj=0;function We(){throw Error(I(321))}function Zf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Jf(e,t,n,r,i,o){if(Ir=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?cj:uj,e=n(r,i),zo){o=0;do{if(zo=!1,ua=0,25<=o)throw Error(I(301));o+=1,Ie=Ae=null,t.updateQueue=null,As.current=dj,e=n(r,i)}while(zo)}if(As.current=ul,t=Ae!==null&&Ae.next!==null,Ir=0,Ie=Ae=me=null,cl=!1,t)throw Error(I(300));return e}function ep(){var e=ua!==0;return ua=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?me.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Et(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ie===null?me.memoizedState:Ie.next;if(t!==null)Ie=t,Ae=e;else{if(e===null)throw Error(I(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ie===null?me.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function da(e,t){return typeof t=="function"?t(e):t}function Hc(e){var t=Et(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((Ir&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,me.lanes|=d,Mr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,zt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Mr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yc(e){var t=Et(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);zt(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qx(){}function Xx(e,t){var n=me,r=Et(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,st=!0),r=r.queue,tp(ey.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,fa(9,Jx.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(I(349));Ir&30||Zx(n,t,i)}return i}function Zx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jx(e,t,n,r){t.value=n,t.getSnapshot=r,ty(t)&&ny(e)}function ey(e,t,n){return n(function(){ty(t)&&ny(e)})}function ty(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function ny(e){var t=xn(e,1);t!==null&&Ft(t,e,1,-1)}function Cm(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=lj.bind(null,me,e),[t.memoizedState,e]}function fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ry(){return Et().memoizedState}function _s(e,t,n,r){var i=Xt();me.flags|=e,i.memoizedState=fa(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&Zf(r,a.deps)){i.memoizedState=fa(t,n,o,r);return}}me.flags|=e,i.memoizedState=fa(1|t,n,o,r)}function Tm(e,t){return _s(8390656,8,e,t)}function tp(e,t){return Bl(2048,8,e,t)}function iy(e,t){return Bl(4,2,e,t)}function oy(e,t){return Bl(4,4,e,t)}function ay(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sy(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,ay.bind(null,t,e),n)}function np(){}function ly(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cy(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uy(e,t,n){return Ir&21?(zt(n,t)||(n=mx(),me.lanes|=n,Mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function aj(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Uc.transition;Uc.transition={};try{e(!1),t()}finally{te=n,Uc.transition=r}}function dy(){return Et().memoizedState}function sj(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fy(e))py(t,n);else if(n=Gx(e,t,n,r),n!==null){var i=Je();Ft(n,e,r,i),hy(n,t,r)}}function lj(e,t,n){var r=Vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fy(e))py(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,a)){var c=t.interleaved;c===null?(i.next=i,Gf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Gx(e,t,i,r),n!==null&&(i=Je(),Ft(n,e,r,i),hy(n,t,r))}}function fy(e){var t=e.alternate;return e===me||t!==null&&t===me}function py(e,t){zo=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,If(e,n)}}var ul={readContext:Dt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},cj={readContext:Dt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:Tm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_s(4194308,4,ay.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _s(4194308,4,e,t)},useInsertionEffect:function(e,t){return _s(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sj.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:Cm,useDebugValue:np,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=Cm(!1),t=e[0];return e=aj.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Xt();if(ue){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Oe===null)throw Error(I(349));Ir&30||Zx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Tm(ey.bind(null,r,o,e),[e]),r.flags|=2048,fa(9,Jx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xt(),t=Oe.identifierPrefix;if(ue){var n=fn,r=dn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uj={readContext:Dt,useCallback:ly,useContext:Dt,useEffect:tp,useImperativeHandle:sy,useInsertionEffect:iy,useLayoutEffect:oy,useMemo:cy,useReducer:Hc,useRef:ry,useState:function(){return Hc(da)},useDebugValue:np,useDeferredValue:function(e){var t=Et();return uy(t,Ae.memoizedState,e)},useTransition:function(){var e=Hc(da)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Qx,useSyncExternalStore:Xx,useId:dy,unstable_isNewReconciler:!1},dj={readContext:Dt,useCallback:ly,useContext:Dt,useEffect:tp,useImperativeHandle:sy,useInsertionEffect:iy,useLayoutEffect:oy,useMemo:cy,useReducer:Yc,useRef:ry,useState:function(){return Yc(da)},useDebugValue:np,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:uy(t,Ae.memoizedState,e)},useTransition:function(){var e=Yc(da)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Qx,useSyncExternalStore:Xx,useId:dy,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function md(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Vn(e),o=pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Ft(t,e,i,r),Es(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Vn(e),o=pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Ft(t,e,i,r),Es(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Vn(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Ft(t,e,r,n),Es(t,e,r))}};function Pm(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ia(n,r)||!ia(i,o):!0}function my(e,t,n){var r=!1,i=Gn,o=t.contextType;return typeof o=="object"&&o!==null?o=Dt(o):(i=ct(t)?_r:Qe.current,r=t.contextTypes,o=(r=r!=null)?Ii(e,i):Gn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function gd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Kf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Dt(o):(o=ct(t)?_r:Qe.current,i.context=Ii(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(md(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vl.enqueueReplaceState(i,i.state,null),sl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $i(e,t){try{var n="",r=t;do n+=Fb(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Gc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fj=typeof WeakMap=="function"?WeakMap:Map;function gy(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,Pd=r),vd(e,t)},n}function vy(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vd(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Em(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tj.bind(null,e,t,n),t.then(e,e))}function Am(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _m(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var pj=bn.ReactCurrentOwner,st=!1;function Ze(e,t,n,r){t.child=e===null?Yx(t,null,n,r):Oi(t,e.child,n,r)}function Lm(e,t,n,r,i){n=n.render;var o=t.ref;return Ai(t,i),r=Jf(e,t,n,r,o,i),n=ep(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(ue&&n&&Vf(t),t.flags|=1,Ze(e,t,r,i),t.child)}function Im(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!up(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xy(e,t,o,r,i)):(e=Os(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(a,r)&&e.ref===t.ref)return yn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function xy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ia(o,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,yn(e,t,i)}return xd(e,t,n,r,i)}function yy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(gi,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(gi,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(gi,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(gi,ft),ft|=r;return Ze(e,t,i,n),t.child}function wy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xd(e,t,n,r,i){var o=ct(n)?_r:Qe.current;return o=Ii(t,o),Ai(t,i),n=Jf(e,t,n,r,o,i),r=ep(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(ue&&r&&Vf(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Mm(e,t,n,r,i){if(ct(n)){var o=!0;nl(t)}else o=!1;if(Ai(t,i),t.stateNode===null)Ls(e,t),my(t,n,r),gd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ct(n)?_r:Qe.current,u=Ii(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Dm(t,a,r,u),Dn=!1;var p=t.memoizedState;a.state=p,sl(t,r,a,i),c=t.memoizedState,l!==r||p!==c||lt.current||Dn?(typeof d=="function"&&(md(t,n,d,r),c=t.memoizedState),(l=Dn||Pm(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Kx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Dt(c):(c=ct(n)?_r:Qe.current,c=Ii(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Dm(t,a,r,c),Dn=!1,p=t.memoizedState,a.state=p,sl(t,r,a,i);var y=t.memoizedState;l!==f||p!==y||lt.current||Dn?(typeof m=="function"&&(md(t,n,m,r),y=t.memoizedState),(u=Dn||Pm(t,n,u,r,p,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return yd(e,t,n,r,o,i)}function yd(e,t,n,r,i,o){wy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ym(t,n,!1),yn(e,t,o);r=t.stateNode,pj.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Oi(t,e.child,null,o),t.child=Oi(t,null,l,o)):Ze(e,t,l,o),t.memoizedState=r.state,i&&ym(t,n,!0),t.child}function by(e){var t=e.stateNode;t.pendingContext?xm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xm(e,t.context,!1),qf(e,t.containerInfo)}function Om(e,t,n,r,i){return Mi(),Wf(i),t.flags|=256,Ze(e,t,n,r),t.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function bd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sy(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(pe,i&1),e===null)return pd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ul(a,r,0,null),e=Tr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bd(n),t.memoizedState=wd,e):rp(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=zn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=zn(l,o):(o=Tr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?bd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=wd,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rp(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,n,r){return r!==null&&Wf(r),Oi(t,e.child,null,n),e=rp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Gc(Error(I(422))),ts(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ul({mode:"visible",children:r.children},i,0,null),o=Tr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Oi(t,e.child,null,a),t.child.memoizedState=bd(a),t.memoizedState=wd,o);if(!(t.mode&1))return ts(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(I(419)),r=Gc(o,r,void 0),ts(e,t,a,r)}if(l=(a&e.childLanes)!==0,st||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),Ft(r,e,i,-1))}return cp(),r=Gc(Error(I(421))),ts(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Nn(i.nextSibling),ht=t,ue=!0,$t=null,e!==null&&(kt[Ct++]=dn,kt[Ct++]=fn,kt[Ct++]=Lr,dn=e.id,fn=e.overflow,Lr=t),t=rp(t,r.children),t.flags|=4096,t)}function Rm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hd(e.return,t,n)}function Kc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rm(e,n,t);else if(e.tag===19)Rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kc(t,!0,n,null,o);break;case"together":Kc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mj(e,t,n){switch(t.tag){case 3:by(t),Mi();break;case 5:qx(t);break;case 1:ct(t.type)&&nl(t);break;case 4:qf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(ol,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Sy(e,t,n):(ne(pe,pe.current&1),e=yn(e,t,n),e!==null?e.sibling:null);ne(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,yy(e,t,n)}return yn(e,t,n)}var ky,Sd,Cy,Ty;ky=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};Cy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Sr(rn.current);var o=null;switch(n){case"input":i=Uu(e,i),r=Uu(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Gu(e,i),r=Gu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}qu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ty=function(e,t,n,r){n!==r&&(t.flags|=4)};function ho(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gj(e,t,n){var r=t.pendingProps;switch(zf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return ct(t.type)&&tl(),Ue(t),null;case 3:return r=t.stateNode,Ri(),ae(lt),ae(Qe),Xf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(Ad($t),$t=null))),Sd(e,t),Ue(t),null;case 5:Qf(t);var i=Sr(ca.current);if(n=t.type,e!==null&&t.stateNode!=null)Cy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ue(t),null}if(e=Sr(rn.current),Ja(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Jt]=t,r[sa]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Ao.length;i++)ie(Ao[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Hh(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":Gh(r,o),ie("invalid",r)}qu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Za(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Za(r.textContent,l,e),i=["children",""+l]):Xo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ua(r),Yh(r,o,!0);break;case"textarea":Ua(r),Kh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=el)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ex(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Jt]=t,e[sa]=r,ky(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qu(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ao.length;i++)ie(Ao[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Hh(e,r),i=Uu(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Gh(e,r),i=Gu(e,r),ie("invalid",e);break;default:i=r}qu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?rx(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tx(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Zo(e,c):typeof c=="number"&&Zo(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ie("scroll",e):c!=null&&Pf(e,o,c,a))}switch(n){case"input":Ua(e),Yh(e,r,!1);break;case"textarea":Ua(e),Kh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ti(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ti(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Ty(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Sr(ca.current),Sr(rn.current),Ja(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Za(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ae(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&pt!==null&&t.mode&1&&!(t.flags&128))Ux(),Mi(),t.flags|=98560,o=!1;else if(o=Ja(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Jt]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else $t!==null&&(Ad($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):cp())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Ri(),Sd(e,t),e===null&&oa(t.stateNode.containerInfo),Ue(t),null;case 10:return Yf(t.type._context),Ue(t),null;case 17:return ct(t.type)&&tl(),Ue(t),null;case 19:if(ae(pe),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ho(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ll(e),a!==null){for(t.flags|=128,ho(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Ni&&(t.flags|=128,r=!0,ho(o,!1),t.lanes=4194304)}else{if(!r)if(e=ll(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ho(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Ue(t),null}else 2*be()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,ho(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=pe.current,ne(pe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return lp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function vj(e,t){switch(zf(t),t.tag){case 1:return ct(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ri(),ae(lt),ae(Qe),Xf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qf(t),null;case 13:if(ae(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(pe),null;case 4:return Ri(),null;case 10:return Yf(t.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var ns=!1,Ge=!1,xj=typeof WeakSet=="function"?WeakSet:Set,B=null;function mi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function jd(e,t,n){try{n()}catch(r){ye(e,t,r)}}var $m=!1;function yj(e,t){if(ad=Xs,e=_x(),Bf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++d===r&&(c=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:e,selectionRange:n},Xs=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ot(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(j){ye(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return y=$m,$m=!1,y}function Wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&jd(t,n,o)}i=i.next}while(i!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function kd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Py(e){var t=e.alternate;t!==null&&(e.alternate=null,Py(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[sa],delete t[ud],delete t[tj],delete t[nj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dy(e){return e.tag===5||e.tag===3||e.tag===4}function Nm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(Cd(e,t,n),e=e.sibling;e!==null;)Cd(e,t,n),e=e.sibling}function Td(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Td(e,t,n),e=e.sibling;e!==null;)Td(e,t,n),e=e.sibling}var Ne=null,Rt=!1;function jn(e,t,n){for(n=n.child;n!==null;)Ey(e,t,n),n=n.sibling}function Ey(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ge||mi(n,t);case 6:var r=Ne,i=Rt;Ne=null,jn(e,t,n),Ne=r,Rt=i,Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?Vc(e.parentNode,n):e.nodeType===1&&Vc(e,n),na(e)):Vc(Ne,n.stateNode));break;case 4:r=Ne,i=Rt,Ne=n.stateNode.containerInfo,Rt=!0,jn(e,t,n),Ne=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&jd(n,t,a),i=i.next}while(i!==r)}jn(e,t,n);break;case 1:if(!Ge&&(mi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,jn(e,t,n),Ge=r):jn(e,t,n);break;default:jn(e,t,n)}}function Fm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xj),t.forEach(function(r){var i=Dj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,Rt=!1;break e;case 3:Ne=l.stateNode.containerInfo,Rt=!0;break e;case 4:Ne=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Ne===null)throw Error(I(160));Ey(o,a,i),Ne=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ay(t,e),t=t.sibling}function Ay(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ht(e),r&4){try{Wo(3,e,e.return),zl(3,e)}catch(w){ye(e,e.return,w)}try{Wo(5,e,e.return)}catch(w){ye(e,e.return,w)}}break;case 1:It(t,e),Ht(e),r&512&&n!==null&&mi(n,n.return);break;case 5:if(It(t,e),Ht(e),r&512&&n!==null&&mi(n,n.return),e.flags&32){var i=e.stateNode;try{Zo(i,"")}catch(w){ye(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Zv(i,o),Qu(l,a);var u=Qu(l,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?rx(i,f):d==="dangerouslySetInnerHTML"?tx(i,f):d==="children"?Zo(i,f):Pf(i,d,f,u)}switch(l){case"input":Hu(i,o);break;case"textarea":Jv(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Ti(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ti(i,!!o.multiple,o.defaultValue,!0):Ti(i,!!o.multiple,o.multiple?[]:"",!1))}i[sa]=o}catch(w){ye(e,e.return,w)}}break;case 6:if(It(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ye(e,e.return,w)}}break;case 3:if(It(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(w){ye(e,e.return,w)}break;case 4:It(t,e),Ht(e);break;case 13:It(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ap=be())),r&4&&Fm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,It(t,e),Ge=u):It(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(f=B=d;B!==null;){switch(p=B,m=p.child,p.tag){case 0:case 11:case 14:case 15:Wo(4,p,p.return);break;case 1:mi(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ye(r,n,w)}}break;case 5:mi(p,p.return);break;case 22:if(p.memoizedState!==null){Vm(f);continue}}m!==null?(m.return=p,B=m):Vm(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nx("display",a))}catch(w){ye(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ye(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Ht(e),r&4&&Fm(e);break;case 21:break;default:It(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dy(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var o=Nm(e);Td(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Nm(e);Cd(e,l,a);break;default:throw Error(I(161))}}catch(c){ye(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wj(e,t,n){B=e,_y(e)}function _y(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ns;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ge;l=ns;var u=Ge;if(ns=a,(Ge=c)&&!u)for(B=i;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?zm(i):c!==null?(c.return=a,B=c):zm(i);for(;o!==null;)B=o,_y(o),o=o.sibling;B=i,ns=l,Ge=u}Bm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):Bm(e)}}function Bm(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&km(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}km(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ge||t.flags&512&&kd(t)}catch(p){ye(t,t.return,p)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Vm(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function zm(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(c){ye(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ye(t,i,c)}}var o=t.return;try{kd(t)}catch(c){ye(t,o,c)}break;case 5:var a=t.return;try{kd(t)}catch(c){ye(t,a,c)}}}catch(c){ye(t,t.return,c)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var bj=Math.ceil,dl=bn.ReactCurrentDispatcher,ip=bn.ReactCurrentOwner,Pt=bn.ReactCurrentBatchConfig,J=0,Oe=null,Ce=null,Ve=0,ft=0,gi=Xn(0),Le=0,pa=null,Mr=0,Wl=0,op=0,Uo=null,at=null,ap=0,Ni=1/0,ln=null,fl=!1,Pd=null,Bn=null,rs=!1,In=null,pl=0,Ho=0,Dd=null,Is=-1,Ms=0;function Je(){return J&6?be():Is!==-1?Is:Is=be()}function Vn(e){return e.mode&1?J&2&&Ve!==0?Ve&-Ve:ij.transition!==null?(Ms===0&&(Ms=mx()),Ms):(e=te,e!==0||(e=window.event,e=e===void 0?16:Sx(e.type)),e):1}function Ft(e,t,n,r){if(50<Ho)throw Ho=0,Dd=null,Error(I(185));Ca(e,n,r),(!(J&2)||e!==Oe)&&(e===Oe&&(!(J&2)&&(Wl|=n),Le===4&&_n(e,Ve)),ut(e,r),n===1&&J===0&&!(t.mode&1)&&(Ni=be()+500,Fl&&Zn()))}function ut(e,t){var n=e.callbackNode;iS(e,t);var r=Qs(e,e===Oe?Ve:0);if(r===0)n!==null&&Xh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xh(n),t===1)e.tag===0?rj(Wm.bind(null,e)):Vx(Wm.bind(null,e)),JS(function(){!(J&6)&&Zn()}),n=null;else{switch(gx(r)){case 1:n=Lf;break;case 4:n=px;break;case 16:n=qs;break;case 536870912:n=hx;break;default:n=qs}n=Fy(n,Ly.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ly(e,t){if(Is=-1,Ms=0,J&6)throw Error(I(327));var n=e.callbackNode;if(_i()&&e.callbackNode!==n)return null;var r=Qs(e,e===Oe?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hl(e,r);else{t=r;var i=J;J|=2;var o=My();(Oe!==e||Ve!==t)&&(ln=null,Ni=be()+500,Cr(e,t));do try{kj();break}catch(l){Iy(e,l)}while(!0);Hf(),dl.current=o,J=i,Ce!==null?t=0:(Oe=null,Ve=0,t=Le)}if(t!==0){if(t===2&&(i=td(e),i!==0&&(r=i,t=Ed(e,i))),t===1)throw n=pa,Cr(e,0),_n(e,r),ut(e,be()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sj(i)&&(t=hl(e,r),t===2&&(o=td(e),o!==0&&(r=o,t=Ed(e,o))),t===1))throw n=pa,Cr(e,0),_n(e,r),ut(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:vr(e,at,ln);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=ap+500-be(),10<t)){if(Qs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cd(vr.bind(null,e,at,ln),t);break}vr(e,at,ln);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bj(r/1960))-r,10<r){e.timeoutHandle=cd(vr.bind(null,e,at,ln),r);break}vr(e,at,ln);break;case 5:vr(e,at,ln);break;default:throw Error(I(329))}}}return ut(e,be()),e.callbackNode===n?Ly.bind(null,e):null}function Ed(e,t){var n=Uo;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=hl(e,t),e!==2&&(t=at,at=n,t!==null&&Ad(t)),e}function Ad(e){at===null?at=e:at.push.apply(at,e)}function Sj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~op,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Wm(e){if(J&6)throw Error(I(327));_i();var t=Qs(e,0);if(!(t&1))return ut(e,be()),null;var n=hl(e,t);if(e.tag!==0&&n===2){var r=td(e);r!==0&&(t=r,n=Ed(e,r))}if(n===1)throw n=pa,Cr(e,0),_n(e,t),ut(e,be()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,at,ln),ut(e,be()),null}function sp(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Ni=be()+500,Fl&&Zn())}}function Or(e){In!==null&&In.tag===0&&!(J&6)&&_i();var t=J;J|=1;var n=Pt.transition,r=te;try{if(Pt.transition=null,te=1,e)return e()}finally{te=r,Pt.transition=n,J=t,!(J&6)&&Zn()}}function lp(){ft=gi.current,ae(gi)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ZS(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:Ri(),ae(lt),ae(Qe),Xf();break;case 5:Qf(r);break;case 4:Ri();break;case 13:ae(pe);break;case 19:ae(pe);break;case 10:Yf(r.type._context);break;case 22:case 23:lp()}n=n.return}if(Oe=e,Ce=e=zn(e.current,null),Ve=ft=t,Le=0,pa=null,op=Wl=Mr=0,at=Uo=null,br!==null){for(t=0;t<br.length;t++)if(n=br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}br=null}return e}function Iy(e,t){do{var n=Ce;try{if(Hf(),As.current=ul,cl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cl=!1}if(Ir=0,Ie=Ae=me=null,zo=!1,ua=0,ip.current=null,n===null||n.return===null){Le=1,pa=t,Ce=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Ve,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Am(a);if(m!==null){m.flags&=-257,_m(m,a,l,o,t),m.mode&1&&Em(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Em(o,u,t),cp();break e}c=Error(I(426))}}else if(ue&&l.mode&1){var S=Am(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),_m(S,a,l,o,t),Wf($i(c,l));break e}}o=c=$i(c,l),Le!==4&&(Le=2),Uo===null?Uo=[o]:Uo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=gy(o,c,t);jm(o,g);break e;case 1:l=c;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bn===null||!Bn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=vy(o,l,t);jm(o,j);break e}}o=o.return}while(o!==null)}Ry(n)}catch(k){t=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function My(){var e=dl.current;return dl.current=ul,e===null?ul:e}function cp(){(Le===0||Le===3||Le===2)&&(Le=4),Oe===null||!(Mr&268435455)&&!(Wl&268435455)||_n(Oe,Ve)}function hl(e,t){var n=J;J|=2;var r=My();(Oe!==e||Ve!==t)&&(ln=null,Cr(e,t));do try{jj();break}catch(i){Iy(e,i)}while(!0);if(Hf(),J=n,dl.current=r,Ce!==null)throw Error(I(261));return Oe=null,Ve=0,Le}function jj(){for(;Ce!==null;)Oy(Ce)}function kj(){for(;Ce!==null&&!qb();)Oy(Ce)}function Oy(e){var t=Ny(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Ry(e):Ce=t,ip.current=null}function Ry(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vj(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ce=null;return}}else if(n=gj(n,t,ft),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Le===0&&(Le=5)}function vr(e,t,n){var r=te,i=Pt.transition;try{Pt.transition=null,te=1,Cj(e,t,n,r)}finally{Pt.transition=i,te=r}return null}function Cj(e,t,n,r){do _i();while(In!==null);if(J&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(oS(e,o),e===Oe&&(Ce=Oe=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,Fy(qs,function(){return _i(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var a=te;te=1;var l=J;J|=4,ip.current=null,yj(e,n),Ay(n,e),HS(sd),Xs=!!ad,sd=ad=null,e.current=n,wj(n),Qb(),J=l,te=a,Pt.transition=o}else e.current=n;if(rs&&(rs=!1,In=e,pl=i),o=e.pendingLanes,o===0&&(Bn=null),Jb(n.stateNode),ut(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,e=Pd,Pd=null,e;return pl&1&&e.tag!==0&&_i(),o=e.pendingLanes,o&1?e===Dd?Ho++:(Ho=0,Dd=e):Ho=0,Zn(),null}function _i(){if(In!==null){var e=gx(pl),t=Pt.transition,n=te;try{if(Pt.transition=null,te=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,pl=0,J&6)throw Error(I(331));var i=J;for(J|=4,B=e.current;B!==null;){var o=B,a=o.child;if(B.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Wo(8,d,o)}var f=d.child;if(f!==null)f.return=d,B=f;else for(;B!==null;){d=B;var p=d.sibling,m=d.return;if(Py(d),d===u){B=null;break}if(p!==null){p.return=m,B=p;break}B=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}B=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,B=a;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,B=g;break e}B=o.return}}var h=e.current;for(B=h;B!==null;){a=B;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,B=v;else e:for(a=h;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(k){ye(l,l.return,k)}if(l===a){B=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,B=j;break e}B=l.return}}if(J=i,Zn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{te=n,Pt.transition=t}}return!1}function Um(e,t,n){t=$i(n,t),t=gy(e,t,1),e=Fn(e,t,1),t=Je(),e!==null&&(Ca(e,1,t),ut(e,t))}function ye(e,t,n){if(e.tag===3)Um(e,e,n);else for(;t!==null;){if(t.tag===3){Um(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=$i(n,e),e=vy(t,e,1),t=Fn(t,e,1),e=Je(),t!==null&&(Ca(t,1,e),ut(t,e));break}}t=t.return}}function Tj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ve&n)===n&&(Le===4||Le===3&&(Ve&130023424)===Ve&&500>be()-ap?Cr(e,0):op|=n),ut(e,t)}function $y(e,t){t===0&&(e.mode&1?(t=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):t=1);var n=Je();e=xn(e,t),e!==null&&(Ca(e,t,n),ut(e,n))}function Pj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$y(e,n)}function Dj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),$y(e,n)}var Ny;Ny=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,mj(e,t,n);st=!!(e.flags&131072)}else st=!1,ue&&t.flags&1048576&&zx(t,il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ls(e,t),e=t.pendingProps;var i=Ii(t,Qe.current);Ai(t,n),i=Jf(null,t,r,e,i,n);var o=ep();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,nl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kf(t),i.updater=Vl,t.stateNode=i,i._reactInternals=t,gd(t,r,e,n),t=yd(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Vf(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ls(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Aj(r),e=Ot(r,e),i){case 0:t=xd(null,t,r,e,n);break e;case 1:t=Mm(null,t,r,e,n);break e;case 11:t=Lm(null,t,r,e,n);break e;case 14:t=Im(null,t,r,Ot(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),xd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Mm(e,t,r,i,n);case 3:e:{if(by(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kx(e,t),sl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$i(Error(I(423)),t),t=Om(e,t,r,n,i);break e}else if(r!==i){i=$i(Error(I(424)),t),t=Om(e,t,r,n,i);break e}else for(pt=Nn(t.stateNode.containerInfo.firstChild),ht=t,ue=!0,$t=null,n=Yx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){t=yn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return qx(t),e===null&&pd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ld(r,i)?a=null:o!==null&&ld(r,o)&&(t.flags|=32),wy(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&pd(t),null;case 13:return Sy(e,t,n);case 4:return qf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Lm(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(ol,r._currentValue),r._currentValue=a,o!==null)if(zt(o.value,a)){if(o.children===i.children&&!lt.current){t=yn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=pn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),hd(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(I(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hd(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ai(t,n),i=Dt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),Im(e,t,r,i,n);case 15:return xy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Ls(e,t),t.tag=1,ct(r)?(e=!0,nl(t)):e=!1,Ai(t,n),my(t,r,i),gd(t,r,i,n),yd(null,t,r,!0,e,n);case 19:return jy(e,t,n);case 22:return yy(e,t,n)}throw Error(I(156,t.tag))};function Fy(e,t){return fx(e,t)}function Ej(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Ej(e,t,n,r)}function up(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Aj(e){if(typeof e=="function")return up(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ef)return 11;if(e===Af)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Os(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")up(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ai:return Tr(n.children,i,o,t);case Df:a=8,i|=8;break;case Bu:return e=Tt(12,n,t,i|2),e.elementType=Bu,e.lanes=o,e;case Vu:return e=Tt(13,n,t,i),e.elementType=Vu,e.lanes=o,e;case zu:return e=Tt(19,n,t,i),e.elementType=zu,e.lanes=o,e;case qv:return Ul(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gv:a=10;break e;case Kv:a=9;break e;case Ef:a=11;break e;case Af:a=14;break e;case Pn:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Tr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=qv,e.lanes=n,e.stateNode={isHidden:!1},e}function qc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Qc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _j(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dp(e,t,n,r,i,o,a,l,c){return e=new _j(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(o),e}function Lj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function By(e){if(!e)return Gn;e=e._reactInternals;e:{if($r(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(ct(n))return Bx(e,n,t)}return t}function Vy(e,t,n,r,i,o,a,l,c){return e=dp(n,r,!0,e,i,o,a,l,c),e.context=By(null),n=e.current,r=Je(),i=Vn(n),o=pn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,Ca(e,i,r),ut(e,r),e}function Hl(e,t,n,r){var i=t.current,o=Je(),a=Vn(i);return n=By(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,a),e!==null&&(Ft(e,i,a,o),Es(e,i,a)),a}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fp(e,t){Hm(e,t),(e=e.alternate)&&Hm(e,t)}function Ij(){return null}var zy=typeof reportError=="function"?reportError:function(e){console.error(e)};function pp(e){this._internalRoot=e}Yl.prototype.render=pp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Hl(e,t,null,null)};Yl.prototype.unmount=pp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){Hl(null,e,null,null)}),t[vn]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&bx(e)}};function hp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function Mj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ml(a);o.call(u)}}var a=Vy(t,r,e,0,null,!1,!1,"",Ym);return e._reactRootContainer=a,e[vn]=a.current,oa(e.nodeType===8?e.parentNode:e),Or(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ml(c);l.call(u)}}var c=dp(e,0,!1,null,null,!1,!1,"",Ym);return e._reactRootContainer=c,e[vn]=c.current,oa(e.nodeType===8?e.parentNode:e),Or(function(){Hl(t,c,n,r)}),c}function Kl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=ml(a);l.call(c)}}Hl(t,a,e,i)}else a=Mj(n,t,e,i,r);return ml(a)}vx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Eo(t.pendingLanes);n!==0&&(If(t,n|1),ut(t,be()),!(J&6)&&(Ni=be()+500,Zn()))}break;case 13:Or(function(){var r=xn(e,1);if(r!==null){var i=Je();Ft(r,e,1,i)}}),fp(e,1)}};Mf=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=Je();Ft(t,e,134217728,n)}fp(e,134217728)}};xx=function(e){if(e.tag===13){var t=Vn(e),n=xn(e,t);if(n!==null){var r=Je();Ft(n,e,t,r)}fp(e,t)}};yx=function(){return te};wx=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Zu=function(e,t,n){switch(t){case"input":if(Hu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nl(r);if(!i)throw Error(I(90));Xv(r),Hu(r,i)}}}break;case"textarea":Jv(e,n);break;case"select":t=n.value,t!=null&&Ti(e,!!n.multiple,t,!1)}};ax=sp;sx=Or;var Oj={usingClientEntryPoint:!1,Events:[Pa,ui,Nl,ix,ox,sp]},mo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rj={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ux(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Ij,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{Ml=is.inject(Rj),nn=is}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oj;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(t))throw Error(I(200));return Lj(e,t,null,n)};xt.createRoot=function(e,t){if(!hp(e))throw Error(I(299));var n=!1,r="",i=zy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dp(e,1,!1,null,null,n,!1,r,i),e[vn]=t.current,oa(e.nodeType===8?e.parentNode:e),new pp(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=ux(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Or(e)};xt.hydrate=function(e,t,n){if(!Gl(t))throw Error(I(200));return Kl(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!hp(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Vy(t,null,e,1,n??null,i,!1,o,a),e[vn]=t.current,oa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yl(t)};xt.render=function(e,t,n){if(!Gl(t))throw Error(I(200));return Kl(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(I(40));return e._reactRootContainer?(Or(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};xt.unstable_batchedUpdates=sp;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Kl(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function Wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wy)}catch(e){console.error(e)}}Wy(),Wv.exports=xt;var Uy=Wv.exports,Hy,Gm=Uy;Hy=Gm.createRoot,Gm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}var Mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mn||(Mn={}));const Km="popstate";function $j(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return _d("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gl(i)}return Fj(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nj(){return Math.random().toString(36).substr(2,8)}function qm(e,t){return{usr:e.state,key:e.key,idx:t}}function _d(e,t,n,r){return n===void 0&&(n=null),ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xi(t):t,{state:n,key:t&&t.key||r||Nj()})}function gl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fj(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Mn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ha({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Mn.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:l,location:w.location,delta:g})}function p(S,g){l=Mn.Push;let h=_d(w.location,S,g);u=d()+1;let v=qm(h,u),j=w.createHref(h);try{a.pushState(v,"",j)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(j)}o&&c&&c({action:l,location:w.location,delta:1})}function m(S,g){l=Mn.Replace;let h=_d(w.location,S,g);u=d();let v=qm(h,u),j=w.createHref(h);a.replaceState(v,"",j),o&&c&&c({action:l,location:w.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:gl(S);return h=h.replace(/ $/,"%20"),Se(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return l},get location(){return e(i,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Km,f),c=S,()=>{i.removeEventListener(Km,f),c=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(S){return a.go(S)}};return w}var Qm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qm||(Qm={}));function Bj(e,t,n){return n===void 0&&(n="/"),Vj(e,t,n)}function Vj(e,t,n,r){let i=typeof t=="string"?Xi(t):t,o=gp(i.pathname||"/",n);if(o==null)return null;let a=Yy(e);zj(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ek(o);l=Xj(a[c],u)}return l}function Yy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Se(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Wn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:qj(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Gy(o.path))i(o,a,c)}),t}function Gy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Gy(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function zj(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qj(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wj=/^:[\w-]+$/,Uj=3,Hj=2,Yj=1,Gj=10,Kj=-2,Xm=e=>e==="*";function qj(e,t){let n=e.split("/"),r=n.length;return n.some(Xm)&&(r+=Kj),t&&(r+=Hj),n.filter(i=>!Xm(i)).reduce((i,o)=>i+(Wj.test(o)?Uj:o===""?Yj:Gj),r)}function Qj(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Xj(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Zj({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Wn([o,f.pathname]),pathnameBase:ok(Wn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Wn([o,f.pathnameBase]))}return a}function Zj(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jj(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let w=l[f]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[f];return m&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Jj(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ek(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const tk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nk=e=>tk.test(e);function rk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xi(e):e,o;if(n)if(nk(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),mp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Zm(n.substring(1),"/"):o=Zm(n,t)}else o=t;return{pathname:o,search:ak(r),hash:sk(i)}}function Zm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ik(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vp(e,t){let n=ik(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Xi(e):(i=ha({},e),Se(!i.pathname||!i.pathname.includes("?"),Xc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Xc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Xc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=rk(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),ok=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ak=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ky=["post","put","patch","delete"];new Set(Ky);const ck=["get",...Ky];new Set(ck);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ma.apply(this,arguments)}const yp=b.createContext(null),uk=b.createContext(null),Jn=b.createContext(null),ql=b.createContext(null),er=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qy=b.createContext(null);function dk(e,t){let{relative:n}=t===void 0?{}:t;Zi()||Se(!1);let{basename:r,navigator:i}=b.useContext(Jn),{hash:o,pathname:a,search:l}=Xy(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Wn([r,a])),i.createHref({pathname:c,search:l,hash:o})}function Zi(){return b.useContext(ql)!=null}function Ji(){return Zi()||Se(!1),b.useContext(ql).location}function Qy(e){b.useContext(Jn).static||b.useLayoutEffect(e)}function wp(){let{isDataRoute:e}=b.useContext(er);return e?kk():fk()}function fk(){Zi()||Se(!1);let e=b.useContext(yp),{basename:t,future:n,navigator:r}=b.useContext(Jn),{matches:i}=b.useContext(er),{pathname:o}=Ji(),a=JSON.stringify(vp(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return Qy(()=>{l.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=xp(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Wn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,o,e])}function Xy(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Jn),{matches:i}=b.useContext(er),{pathname:o}=Ji(),a=JSON.stringify(vp(i,r.v7_relativeSplatPath));return b.useMemo(()=>xp(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function pk(e,t){return hk(e,t)}function hk(e,t,n,r){Zi()||Se(!1);let{navigator:i}=b.useContext(Jn),{matches:o}=b.useContext(er),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ji(),d;if(t){var f;let S=typeof t=="string"?Xi(t):t;c==="/"||(f=S.pathname)!=null&&f.startsWith(c)||Se(!1),d=S}else d=u;let p=d.pathname||"/",m=p;if(c!=="/"){let S=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Bj(e,{pathname:m}),w=yk(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Wn([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Wn([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&w?b.createElement(ql.Provider,{value:{location:ma({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mn.Pop}},w):w}function mk(){let e=jk(),t=lk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const gk=b.createElement(mk,null);class vk extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(er.Provider,{value:this.props.routeContext},b.createElement(qy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xk(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(yp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(er.Provider,{value:t},r)}function yk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Se(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let m,y=!1,w=null,S=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||gk,c&&(u<0&&p===0?(Ck("route-fallback"),y=!0,S=null):u===p&&(y=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),h=()=>{let v;return m?v=w:y?v=S:f.route.Component?v=b.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,b.createElement(xk,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(vk,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Zy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zy||{}),Jy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jy||{});function wk(e){let t=b.useContext(yp);return t||Se(!1),t}function bk(e){let t=b.useContext(uk);return t||Se(!1),t}function Sk(e){let t=b.useContext(er);return t||Se(!1),t}function e1(e){let t=Sk(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function jk(){var e;let t=b.useContext(qy),n=bk(),r=e1();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kk(){let{router:e}=wk(Zy.UseNavigateStable),t=e1(Jy.UseNavigateStable),n=b.useRef(!1);return Qy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ma({fromRouteId:t},o)))},[e,t])}const Jm={};function Ck(e,t,n){Jm[e]||(Jm[e]=!0)}function Tk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pk(e){let{to:t,replace:n,state:r,relative:i}=e;Zi()||Se(!1);let{future:o,static:a}=b.useContext(Jn),{matches:l}=b.useContext(er),{pathname:c}=Ji(),u=wp(),d=xp(t,vp(l,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function ii(e){Se(!1)}function Dk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:o,static:a=!1,future:l}=e;Zi()&&Se(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:o,static:a,future:ma({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Xi(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:y="default"}=r,w=b.useMemo(()=>{let S=gp(d,c);return S==null?null:{location:{pathname:S,search:f,hash:p,state:m,key:y},navigationType:i}},[c,d,f,p,m,y,i]);return w==null?null:b.createElement(Jn.Provider,{value:u},b.createElement(ql.Provider,{children:n,value:w}))}function Ek(e){let{children:t,location:n}=e;return pk(Ld(t),n)}new Promise(()=>{});function Ld(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Ld(r.props.children,o));return}r.type!==ii&&Se(!1),!r.props.index||!r.props.children||Se(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ld(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Id.apply(this,arguments)}function Ak(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _k(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lk(e,t){return e.button===0&&(!t||t==="_self")&&!_k(e)}const Ik=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mk="6";try{window.__reactRouterVersion=Mk}catch{}const Ok="startTransition",eg=Tb[Ok];function Rk(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=$j({window:i,v5Compat:!0}));let a=o.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(f=>{u&&eg?eg(()=>c(f)):c(f)},[c,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>Tk(r),[r]),b.createElement(Dk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const $k=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bp=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=Ak(t,Ik),{basename:m}=b.useContext(Jn),y,w=!1;if(typeof u=="string"&&Nk.test(u)&&(y=u,$k))try{let v=new URL(window.location.href),j=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=gp(j.pathname,m);j.origin===v.origin&&k!=null?u=k+j.search+j.hash:w=!0}catch{}let S=dk(u,{relative:i}),g=Fk(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return b.createElement("a",Id({},p,{href:y||S,onClick:w||o?r:h,ref:n,target:c}))});var tg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tg||(tg={}));var ng;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ng||(ng={}));function Fk(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=wp(),u=Ji(),d=Xy(e,{relative:a});return b.useCallback(f=>{if(Lk(f,n)){f.preventDefault();let p=r!==void 0?r:gl(u)===gl(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,o,a,l])}const t1=b.createContext({isDark:!0,toggleTheme:()=>{}}),Bk=({children:e})=>{const[t,n]=b.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});b.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),b.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=a=>{localStorage.getItem("theme")||n(a.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]);const r=()=>n(!t);return s.jsx(t1.Provider,{value:{isDark:t,toggleTheme:r},children:e})},Sp=()=>{const e=b.useContext(t1);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},n1=b.createContext(null),Zc="tools-auth-session",Jc="tools-webauthn-credential",Vk=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),zk=async()=>{if(!Vk())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},eu=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Wk=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},Uk=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Hk=({children:e})=>{const[t,n]=b.useState(!1),[r,i]=b.useState(!0),[o,a]=b.useState(!1),l=b.useRef(!1),c=async()=>{try{const m={challenge:eu(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:eu(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},y=await navigator.credentials.create({publicKey:m});return y?(localStorage.setItem(Jc,Wk(y.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem(Jc),y={challenge:eu(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:Uk(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:y})}catch(p){return console.error("Authentication failed:",p),!1}},d=b.useCallback(async()=>{i(!0),a(!1);const p=sessionStorage.getItem(Zc);if(p)try{const{timestamp:y}=JSON.parse(p);if(Date.now()-y<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await zk()){n(!0),sessionStorage.setItem(Zc,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const y=localStorage.getItem(Jc);let w=!1;y?w=await u():w=await c(),w?(n(!0),sessionStorage.setItem(Zc,JSON.stringify({timestamp:Date.now()}))):a(!0)}catch{a(!0)}i(!1)},[]);b.useEffect(()=>{l.current||(l.current=!0,d())},[d]);const f=b.useCallback(()=>{d()},[d]);return s.jsx(n1.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:o,retryAuth:f},children:e})},Yk=()=>{const e=b.useContext(n1);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ke.apply(this,arguments)};function Fi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var oe="-ms-",Yo="-moz-",ee="-webkit-",r1="comm",Ql="rule",jp="decl",Gk="@import",i1="@keyframes",Kk="@layer",o1=Math.abs,kp=String.fromCharCode,Md=Object.assign;function qk(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function a1(e){return e.trim()}function cn(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Rs(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Bi(e,t,n){return e.slice(t,n)}function Zt(e){return e.length}function s1(e){return e.length}function _o(e,t){return t.push(e),e}function Qk(e,t){return e.map(t).join("")}function rg(e,t){return e.filter(function(n){return!cn(n,t)})}var Xl=1,Vi=1,l1=0,At=0,ke=0,eo="";function Zl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Xl,column:Vi,length:a,return:"",siblings:l}}function Cn(e,t){return Md(Zl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zr(e){for(;e.root;)e=Cn(e.root,{children:[e]});_o(e,e.siblings)}function Xk(){return ke}function Zk(){return ke=At>0?Me(eo,--At):0,Vi--,ke===10&&(Vi=1,Xl--),ke}function Bt(){return ke=At<l1?Me(eo,At++):0,Vi++,ke===10&&(Vi=1,Xl++),ke}function Pr(){return Me(eo,At)}function $s(){return At}function Jl(e,t){return Bi(eo,e,t)}function Od(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jk(e){return Xl=Vi=1,l1=Zt(eo=e),At=0,[]}function eC(e){return eo="",e}function tu(e){return a1(Jl(At-1,Rd(e===91?e+2:e===40?e+1:e)))}function tC(e){for(;(ke=Pr())&&ke<33;)Bt();return Od(e)>2||Od(ke)>3?"":" "}function nC(e,t){for(;--t&&Bt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return Jl(e,$s()+(t<6&&Pr()==32&&Bt()==32))}function Rd(e){for(;Bt();)switch(ke){case e:return At;case 34:case 39:e!==34&&e!==39&&Rd(ke);break;case 40:e===41&&Rd(e);break;case 92:Bt();break}return At}function rC(e,t){for(;Bt()&&e+ke!==57;)if(e+ke===84&&Pr()===47)break;return"/*"+Jl(t,At-1)+"*"+kp(e===47?e:Bt())}function iC(e){for(;!Od(Pr());)Bt();return Jl(e,At)}function oC(e){return eC(Ns("",null,null,null,[""],e=Jk(e),0,[0],e))}function Ns(e,t,n,r,i,o,a,l,c){for(var u=0,d=0,f=a,p=0,m=0,y=0,w=1,S=1,g=1,h=0,v="",j=i,k=o,C=r,P=v;S;)switch(y=h,h=Bt()){case 40:if(y!=108&&Me(P,f-1)==58){Rs(P+=G(tu(h),"&","&\f"),"&\f",o1(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:P+=tu(h);break;case 9:case 10:case 13:case 32:P+=tC(y);break;case 92:P+=nC($s()-1,7);continue;case 47:switch(Pr()){case 42:case 47:_o(aC(rC(Bt(),$s()),t,n,c),c);break;default:P+="/"}break;case 123*w:l[u++]=Zt(P)*g;case 125*w:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:g==-1&&(P=G(P,/\f/g,"")),m>0&&Zt(P)-f&&_o(m>32?og(P+";",r,n,f-1,c):og(G(P," ","")+";",r,n,f-2,c),c);break;case 59:P+=";";default:if(_o(C=ig(P,t,n,u,d,i,l,v,j=[],k=[],f,o),o),h===123)if(d===0)Ns(P,t,C,C,j,o,f,l,k);else switch(p===99&&Me(P,3)===110?100:p){case 100:case 108:case 109:case 115:Ns(e,C,C,r&&_o(ig(e,C,C,0,0,i,l,v,i,j=[],f,k),k),i,k,f,l,r?j:k);break;default:Ns(P,C,C,C,[""],k,0,l,k)}}u=d=m=0,w=g=1,v=P="",f=a;break;case 58:f=1+Zt(P),m=y;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&Zk()==125)continue}switch(P+=kp(h),h*w){case 38:g=d>0?1:(P+="\f",-1);break;case 44:l[u++]=(Zt(P)-1)*g,g=1;break;case 64:Pr()===45&&(P+=tu(Bt())),p=Pr(),d=f=Zt(v=P+=iC($s())),h++;break;case 45:y===45&&Zt(P)==2&&(w=0)}}return o}function ig(e,t,n,r,i,o,a,l,c,u,d,f){for(var p=i-1,m=i===0?o:[""],y=s1(m),w=0,S=0,g=0;w<r;++w)for(var h=0,v=Bi(e,p+1,p=o1(S=a[w])),j=e;h<y;++h)(j=a1(S>0?m[h]+" "+v:G(v,/&\f/g,m[h])))&&(c[g++]=j);return Zl(e,t,n,i===0?Ql:l,c,u,d,f)}function aC(e,t,n,r){return Zl(e,t,n,r1,kp(Xk()),Bi(e,2,-2),0,r)}function og(e,t,n,r,i){return Zl(e,t,n,jp,Bi(e,0,r),Bi(e,r+1,-1),r,i)}function c1(e,t,n){switch(qk(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Yo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Yo+e+oe+e+e;case 5936:switch(Me(e,t+11)){case 114:return ee+e+oe+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+oe+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+oe+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+oe+e+e;case 6165:return ee+e+oe+"flex-"+e+e;case 5187:return ee+e+G(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return ee+e+oe+"flex-item-"+G(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":oe+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return ee+e+oe+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+oe+G(e,"shrink","negative")+e;case 5292:return ee+e+oe+G(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+G(e,"-grow","")+ee+e+oe+G(e,"grow","positive")+e;case 4554:return ee+G(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!cn(e,/flex-|baseline/))return oe+"grid-column-align"+Bi(e,t)+e;break;case 2592:case 3360:return oe+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,cn(r.props,/grid-\w+-end/)})?~Rs(e+(n=n[t].value),"span",0)?e:oe+G(e,"-start","")+e+oe+"grid-row-span:"+(~Rs(n,"span",0)?cn(n,/\d+/):+cn(n,/\d+/)-+cn(e,/\d+/))+";":oe+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return cn(r.props,/grid-\w+-start/)})?e:oe+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Yo+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rs(e,"stretch",0)?c1(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,c,u){return oe+i+":"+o+u+(a?oe+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return G(e,":",":"+ee)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Me(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+oe+"$2box$3")+e;case 100:return G(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function vl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function sC(e,t,n,r){switch(e.type){case Kk:if(e.children.length)break;case Gk:case jp:return e.return=e.return||e.value;case r1:return"";case i1:return e.return=e.value+"{"+vl(e.children,r)+"}";case Ql:if(!Zt(e.value=e.props.join(",")))return""}return Zt(n=vl(e.children,r))?e.return=e.value+"{"+n+"}":""}function lC(e){var t=s1(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function cC(e){return function(t){t.root||(t=t.return)&&e(t)}}function uC(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jp:e.return=c1(e.value,e.length,n);return;case i1:return vl([Cn(e,{value:G(e.value,"@","@"+ee)})],r);case Ql:if(e.length)return Qk(n=e.props,function(i){switch(cn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zr(Cn(e,{props:[G(i,/:(read-\w+)/,":"+Yo+"$1")]})),zr(Cn(e,{props:[i]})),Md(e,{props:rg(n,r)});break;case"::placeholder":zr(Cn(e,{props:[G(i,/:(plac\w+)/,":"+ee+"input-$1")]})),zr(Cn(e,{props:[G(i,/:(plac\w+)/,":"+Yo+"$1")]})),zr(Cn(e,{props:[G(i,/:(plac\w+)/,oe+"input-$1")]})),zr(Cn(e,{props:[i]})),Md(e,{props:rg(n,r)});break}return""})}}var dC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},zi=typeof process<"u"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",u1="active",d1="data-styled-version",ec="6.1.19",Cp=`/*!sc*/
`,xl=typeof window<"u"&&typeof document<"u",fC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY),pC={},tc=Object.freeze([]),Wi=Object.freeze({});function f1(e,t,n){return n===void 0&&(n=Wi),e.theme!==n.theme&&e.theme||t||n.theme}var p1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mC=/(^-|-$)/g;function ag(e){return e.replace(hC,"-").replace(mC,"")}var gC=/(a)(d)/gi,os=52,sg=function(e){return String.fromCharCode(e+(e>25?39:97))};function $d(e){var t,n="";for(t=Math.abs(e);t>os;t=t/os|0)n=sg(t%os)+n;return(sg(t%os)+n).replace(gC,"$1-$2")}var nu,h1=5381,vi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},m1=function(e){return vi(h1,e)};function Tp(e){return $d(m1(e)>>>0)}function vC(e){return e.displayName||e.name||"Component"}function ru(e){return typeof e=="string"&&!0}var g1=typeof Symbol=="function"&&Symbol.for,v1=g1?Symbol.for("react.memo"):60115,xC=g1?Symbol.for("react.forward_ref"):60112,yC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bC=((nu={})[xC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nu[v1]=x1,nu);function lg(e){return("type"in(t=e)&&t.type.$$typeof)===v1?x1:"$$typeof"in e?bC[e.$$typeof]:yC;var t}var SC=Object.defineProperty,jC=Object.getOwnPropertyNames,cg=Object.getOwnPropertySymbols,kC=Object.getOwnPropertyDescriptor,CC=Object.getPrototypeOf,ug=Object.prototype;function y1(e,t,n){if(typeof t!="string"){if(ug){var r=CC(t);r&&r!==ug&&y1(e,r,n)}var i=jC(t);cg&&(i=i.concat(cg(t)));for(var o=lg(e),a=lg(t),l=0;l<i.length;++l){var c=i[l];if(!(c in wC||n&&n[c]||a&&c in a||o&&c in o)){var u=kC(t,c);try{SC(e,c,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function Pp(e){return typeof e=="object"&&"styledComponentId"in e}function jr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function yl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ga(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nd(e,t,n){if(n===void 0&&(n=!1),!n&&!ga(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nd(e[r],t[r]);else if(ga(t))for(var r in t)e[r]=Nd(e[r],t[r]);return e}function Dp(e,t){Object.defineProperty(e,"toString",{value:t})}function Ea(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var TC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ea(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Cp);return n},e}(),Fs=new Map,wl=new Map,Bs=1,as=function(e){if(Fs.has(e))return Fs.get(e);for(;wl.has(Bs);)Bs++;var t=Bs++;return Fs.set(e,t),wl.set(t,e),t},PC=function(e,t){Bs=t+1,Fs.set(e,t),wl.set(t,e)},DC="style[".concat(zi,"][").concat(d1,'="').concat(ec,'"]'),EC=new RegExp("^".concat(zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),AC=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},_C=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Cp),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var c=l.match(EC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(PC(d,u),AC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},dg=function(e){for(var t=document.querySelectorAll(DC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(zi)!==u1&&(_C(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function LC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var w1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(zi,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(zi,u1),r.setAttribute(d1,ec);var a=LC();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},IC=function(){function e(t){this.element=w1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Ea(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),MC=function(){function e(t){this.element=w1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),OC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),fg=xl,RC={isServer:!xl,useCSSOMInjection:!fC},bl=function(){function e(t,n,r){t===void 0&&(t=Wi),n===void 0&&(n={});var i=this;this.options=Ke(Ke({},RC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&xl&&fg&&(fg=!1,dg(this)),Dp(this,function(){return function(o){for(var a=o.getTag(),l=a.length,c="",u=function(f){var p=function(g){return wl.get(g)}(f);if(p===void 0)return"continue";var m=o.names.get(p),y=a.getGroup(f);if(m===void 0||!m.size||y.length===0)return"continue";var w="".concat(zi,".g").concat(f,'[id="').concat(p,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),c+="".concat(y).concat(w,'{content:"').concat(S,'"}').concat(Cp)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return as(t)},e.prototype.rehydrate=function(){!this.server&&xl&&dg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ke(Ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new OC(i):r?new IC(i):new MC(i)}(this.options),new TC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(as(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(as(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(as(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$C=/&/g,NC=/^\s*\/\/.*$/gm;function b1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=b1(n.children,t)),n})}function FC(e){var t,n,r,i=Wi,o=i.options,a=o===void 0?Wi:o,l=i.plugins,c=l===void 0?tc:l,u=function(p,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Ql&&p.value.includes("&")&&(p.props[0]=p.props[0].replace($C,n).replace(r,u))}),a.prefix&&d.push(uC),d.push(sC);var f=function(p,m,y,w){m===void 0&&(m=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(NC,""),g=oC(y||m?"".concat(y," ").concat(m," { ").concat(S," }"):S);a.namespace&&(g=b1(g,a.namespace));var h=[];return vl(g,lC(d.concat(cC(function(v){return h.push(v)})))),h};return f.hash=c.length?c.reduce(function(p,m){return m.name||Ea(15),vi(p,m.name)},h1).toString():"",f}var BC=new bl,Fd=FC(),S1=en.createContext({shouldForwardProp:void 0,styleSheet:BC,stylis:Fd});S1.Consumer;en.createContext(void 0);function Bd(){return b.useContext(S1)}var j1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Fd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dp(this,function(){throw Ea(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Fd),this.name+t.hash},e}(),VC=function(e){return e>="A"&&e<="Z"};function pg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;VC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var k1=function(e){return e==null||e===!1||e===""},C1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!k1(o)&&(Array.isArray(o)&&o.isCss||Ui(o)?r.push("".concat(pg(i),":"),o,";"):ga(o)?r.push.apply(r,Fi(Fi(["".concat(i," {")],C1(o),!1),["}"],!1)):r.push("".concat(pg(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in dC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Un(e,t,n,r){if(k1(e))return[];if(Pp(e))return[".".concat(e.styledComponentId)];if(Ui(e)){if(!Ui(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Un(i,t,n,r)}var o;return e instanceof j1?n?(e.inject(n,r),[e.getName(r)]):[e]:ga(e)?C1(e):Array.isArray(e)?Array.prototype.concat.apply(tc,e.map(function(a){return Un(a,t,n,r)})):[e.toString()]}function T1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Pp(n))return!1}return!0}var zC=m1(ec),WC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&T1(t),this.componentId=n,this.baseHash=vi(zC,n),this.baseStyle=r,bl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=jr(i,this.staticRulesId);else{var o=yl(Un(this.rules,t,n,r)),a=$d(vi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=jr(i,a),this.staticRulesId=a}else{for(var c=vi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=yl(Un(f,t,n,r));c=vi(c,p+d),u+=p}}if(u){var m=$d(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=jr(i,m)}}return i},e}(),Ep=en.createContext(void 0);Ep.Consumer;var iu={};function UC(e,t,n){var r=Pp(e),i=e,o=!ru(e),a=t.attrs,l=a===void 0?tc:a,c=t.componentId,u=c===void 0?function(j,k){var C=typeof j!="string"?"sc":ag(j);iu[C]=(iu[C]||0)+1;var P="".concat(C,"-").concat(Tp(ec+C+iu[C]));return k?"".concat(k,"-").concat(P):P}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(j){return ru(j)?"styled.".concat(j):"Styled(".concat(vC(j),")")}(e):d,p=t.displayName&&t.componentId?"".concat(ag(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(j,k){return w(j,k)&&S(j,k)}}else y=w}var g=new WC(n,p,r?i.componentStyle:void 0);function h(j,k){return function(C,P,E){var R=C.attrs,T=C.componentStyle,_=C.defaultProps,N=C.foldedComponentIds,z=C.styledComponentId,U=C.target,D=en.useContext(Ep),L=Bd(),M=C.shouldForwardProp||L.shouldForwardProp,A=f1(P,D,_)||Wi,O=function(q,ce,Re){for(var Xe,Te=Ke(Ke({},ce),{className:void 0,theme:Re}),Wt=0;Wt<q.length;Wt+=1){var wt=Ui(Xe=q[Wt])?Xe(Te):Xe;for(var $e in wt)Te[$e]=$e==="className"?jr(Te[$e],wt[$e]):$e==="style"?Ke(Ke({},Te[$e]),wt[$e]):wt[$e]}return ce.className&&(Te.className=jr(Te.className,ce.className)),Te}(R,P,A),$=O.as||U,V={};for(var H in O)O[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&O.theme===A||(H==="forwardedAs"?V.as=O.forwardedAs:M&&!M(H,$)||(V[H]=O[H]));var re=function(q,ce){var Re=Bd(),Xe=q.generateAndInjectStyles(ce,Re.styleSheet,Re.stylis);return Xe}(T,O),le=jr(N,z);return re&&(le+=" "+re),O.className&&(le+=" "+O.className),V[ru($)&&!p1.has($)?"class":"className"]=le,E&&(V.ref=E),b.createElement($,V)}(v,j,k)}h.displayName=f;var v=en.forwardRef(h);return v.attrs=m,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?jr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(k){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var E=0,R=C;E<R.length;E++)Nd(k,R[E],!0);return k}({},i.defaultProps,j):j}}),Dp(v,function(){return".".concat(v.styledComponentId)}),o&&y1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function hg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var mg=function(e){return Object.assign(e,{isCss:!0})};function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ga(e))return mg(Un(hg(tc,Fi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Un(r):mg(Un(hg(r,t)))}function Vd(e,t,n){if(n===void 0&&(n=Wi),!t)throw Ea(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,tn.apply(void 0,Fi([i],o,!1)))};return r.attrs=function(i){return Vd(e,t,Ke(Ke({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Vd(e,t,Ke(Ke({},n),i))},r}var P1=function(e){return Vd(UC,e)},x=P1;p1.forEach(function(e){x[e]=P1(e)});var HC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=T1(t),bl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(yl(Un(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&bl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function YC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=tn.apply(void 0,Fi([e],t,!1)),i="sc-global-".concat(Tp(JSON.stringify(r))),o=new HC(r,i),a=function(c){var u=Bd(),d=en.useContext(Ep),f=en.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),en.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,p){if(o.isStatic)o.renderStyles(c,pC,d,p);else{var m=Ke(Ke({},u),{theme:f1(u,f,a.defaultProps)});o.renderStyles(c,m,d,p)}}return en.memo(a)}function to(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=yl(tn.apply(void 0,Fi([e],t,!1))),i=Tp(r);return new j1(i,r)}const GC=YC`
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

  /* Hide scrollbar but keep scroll functionality */
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  *::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
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
`,KC=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,qC=x.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,QC=()=>{const{isDark:e}=Sp();return s.jsx(KC,{children:s.jsx(qC,{$isDark:e})})},Ap=b.createContext({});function _p(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const nc=b.createContext(null),Lp=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class XC extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ZC({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=b.useContext(Lp);return b.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u}=i.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),s.jsx(XC,{isPresent:t,childRef:r,sizeRef:i,children:b.cloneElement(e,{ref:r})})}const JC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const l=_p(eT),c=b.useId(),u=b.useCallback(f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=b.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(l.set(f,!1),()=>l.delete(f))}),o?[Math.random(),u]:[n,u]);return b.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),b.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(ZC,{isPresent:n,children:e})),s.jsx(nc.Provider,{value:d,children:e})};function eT(){return new Map}function D1(e=!0){const t=b.useContext(nc);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=b.useId();b.useEffect(()=>{e&&i(o)},[e]);const a=b.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const ss=e=>e.key||"";function gg(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Ip=typeof window<"u",E1=Ip?b.useLayoutEffect:b.useEffect,_e=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1})=>{const[l,c]=D1(a),u=b.useMemo(()=>gg(e),[e]),d=a&&!l?[]:u.map(ss),f=b.useRef(!0),p=b.useRef(u),m=_p(()=>new Map),[y,w]=b.useState(u),[S,g]=b.useState(u);E1(()=>{f.current=!1,p.current=u;for(let j=0;j<S.length;j++){const k=ss(S[j]);d.includes(k)?m.delete(k):m.get(k)!==!0&&m.set(k,!1)}},[S,d.length,d.join("-")]);const h=[];if(u!==y){let j=[...u];for(let k=0;k<S.length;k++){const C=S[k],P=ss(C);d.includes(P)||(j.splice(k,0,C),h.push(C))}o==="wait"&&h.length&&(j=h),g(gg(j)),w(u);return}const{forceRender:v}=b.useContext(Ap);return s.jsx(s.Fragment,{children:S.map(j=>{const k=ss(j),C=a&&!l?!1:u===S||d.includes(k),P=()=>{if(m.has(k))m.set(k,!0);else return;let E=!0;m.forEach(R=>{R||(E=!1)}),E&&(v==null||v(),g(p.current),a&&(c==null||c()),r&&r())};return s.jsx(JC,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:C?void 0:P,children:j},k)})})},mt=e=>e;let A1=mt;function Mp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Hi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},hn=e=>e*1e3,mn=e=>e/1e3,tT={useManualTiming:!1};function nT(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const ls=["read","resolveKeyframes","update","preRender","render","postRender"],rT=40;function _1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=ls.reduce((g,h)=>(g[h]=nT(o),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=a,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,rT),1),i.timestamp=g,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:ls.reduce((g,h)=>{const v=a[h];return g[h]=(j,k=!1,C=!1)=>(n||y(),v.schedule(j,k,C)),g},{}),cancel:g=>{for(let h=0;h<ls.length;h++)a[ls[h]].cancel(g)},state:i,steps:a}}const{schedule:se,cancel:Kn,state:Fe,steps:ou}=_1(typeof requestAnimationFrame<"u"?requestAnimationFrame:mt,!0),L1=b.createContext({strict:!1}),vg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yi={};for(const e in vg)Yi[e]={isEnabled:t=>vg[e].some(n=>!!t[n])};function iT(e){for(const t in e)Yi[t]={...Yi[t],...e[t]}}const oT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Sl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||oT.has(e)}let I1=e=>!Sl(e);function aT(e){e&&(I1=t=>t.startsWith("on")?!Sl(t):e(t))}try{aT(require("@emotion/is-prop-valid").default)}catch{}function sT(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(I1(i)||n===!0&&Sl(i)||!t&&!Sl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function lT(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const rc=b.createContext({});function va(e){return typeof e=="string"||Array.isArray(e)}function ic(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Op=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rp=["initial",...Op];function oc(e){return ic(e.animate)||Rp.some(t=>va(e[t]))}function M1(e){return!!(oc(e)||e.variants)}function cT(e,t){if(oc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||va(n)?n:void 0,animate:va(r)?r:void 0}}return e.inherit!==!1?t:{}}function uT(e){const{initial:t,animate:n}=cT(e,b.useContext(rc));return b.useMemo(()=>({initial:t,animate:n}),[xg(t),xg(n)])}function xg(e){return Array.isArray(e)?e.join(" "):e}const dT=Symbol.for("motionComponentSymbol");function xi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function fT(e,t,n){return b.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):xi(n)&&(n.current=r))},[t])}const $p=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),pT="framerAppearId",O1="data-"+$p(pT),{schedule:Np}=_1(queueMicrotask,!1),R1=b.createContext({});function hT(e,t,n,r,i){var o,a;const{visualElement:l}=b.useContext(rc),c=b.useContext(L1),u=b.useContext(nc),d=b.useContext(Lp).reducedMotion,f=b.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=b.useContext(R1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&mT(f.current,n,i,m);const y=b.useRef(!1);b.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const w=n[O1],S=b.useRef(!!w&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,w))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,w)));return E1(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Np.render(p.render),S.current&&p.animationState&&p.animationState.animateChanges())}),b.useEffect(()=>{p&&(!S.current&&p.animationState&&p.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,w)}),S.current=!1))}),p}function mT(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:$1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||l&&xi(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function $1(e){if(e)return e.options.allowProjection!==!1?e.projection:$1(e.parent)}function gT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,a;e&&iT(e);function l(u,d){let f;const p={...b.useContext(Lp),...u,layoutId:vT(u)},{isStatic:m}=p,y=uT(u),w=r(u,m);if(!m&&Ip){xT();const S=yT(p);f=S.MeasureLayout,y.visualElement=hT(i,w,p,t,S.ProjectionNode)}return s.jsxs(rc.Provider,{value:y,children:[f&&y.visualElement?s.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,u,fT(w,y.visualElement,d),w,m,y.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(a=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&a!==void 0?a:""})`}`;const c=b.forwardRef(l);return c[dT]=i,c}function vT({layoutId:e}){const t=b.useContext(Ap).id;return t&&e!==void 0?t+"-"+e:e}function xT(e,t){b.useContext(L1).strict}function yT(e){const{drag:t,layout:n}=Yi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const wT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(e){return typeof e!="string"||e.includes("-")?!1:!!(wT.indexOf(e)>-1||/[A-Z]/u.test(e))}function yg(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Bp(e,t,n,r){if(typeof t=="function"){const[i,o]=yg(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=yg(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const zd=e=>Array.isArray(e),bT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),ST=e=>zd(e)?e[e.length-1]||0:e,qe=e=>!!(e&&e.getVelocity);function Vs(e){const t=qe(e)?e.get():e;return bT(t)?t.toValue():t}function jT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const a={latestValues:kT(r,i,o,e),renderState:t()};return n&&(a.onMount=l=>n({props:r,current:l,...a}),a.onUpdate=l=>n(l)),a}const N1=e=>(t,n)=>{const r=b.useContext(rc),i=b.useContext(nc),o=()=>jT(e,t,r,i);return n?o():_p(o)};function kT(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=Vs(o[p]);let{initial:a,animate:l}=e;const c=oc(e),u=M1(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;if(f&&typeof f!="boolean"&&!ic(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const y=Bp(e,p[m]);if(y){const{transitionEnd:w,transition:S,...g}=y;for(const h in g){let v=g[h];if(Array.isArray(v)){const j=d?v.length-1:0;v=v[j]}v!==null&&(i[h]=v)}for(const h in w)i[h]=w[h]}}}return i}const no=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nr=new Set(no),F1=e=>t=>typeof t=="string"&&t.startsWith(e),B1=F1("--"),CT=F1("var(--"),Vp=e=>CT(e)?TT.test(e.split("/*")[0].trim()):!1,TT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,V1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,wn=(e,t,n)=>n>t?t:n<e?e:n,ro={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},xa={...ro,transform:e=>wn(0,1,e)},cs={...ro,default:1},Aa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Tn=Aa("deg"),on=Aa("%"),W=Aa("px"),PT=Aa("vh"),DT=Aa("vw"),wg={...on,parse:e=>on.parse(e)/100,transform:e=>on.transform(e*100)},ET={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},AT={rotate:Tn,rotateX:Tn,rotateY:Tn,rotateZ:Tn,scale:cs,scaleX:cs,scaleY:cs,scaleZ:cs,skew:Tn,skewX:Tn,skewY:Tn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:xa,originX:wg,originY:wg,originZ:W},bg={...ro,transform:Math.round},zp={...ET,...AT,zIndex:bg,size:W,fillOpacity:xa,strokeOpacity:xa,numOctaves:bg},_T={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LT=no.length;function IT(e,t,n){let r="",i=!0;for(let o=0;o<LT;o++){const a=no[o],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(a.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=V1(l,zp[a]);if(!c){i=!1;const d=_T[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Wp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(Nr.has(c)){a=!0;continue}else if(B1(c)){i[c]=u;continue}else{const d=V1(u,zp[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=IT(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}const MT={offset:"stroke-dashoffset",array:"stroke-dasharray"},OT={offset:"strokeDashoffset",array:"strokeDasharray"};function RT(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?MT:OT;e[o.offset]=W.transform(-r);const a=W.transform(t),l=W.transform(n);e[o.array]=`${a} ${l}`}function Sg(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function $T(e,t,n){const r=Sg(t,e.x,e.width),i=Sg(n,e.y,e.height);return`${r} ${i}`}function Up(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(Wp(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:y}=e;p.transform&&(y&&(m.transform=p.transform),delete p.transform),y&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=$T(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&RT(p,a,l,c,!1)}const Hp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),z1=()=>({...Hp(),attrs:{}}),Yp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function W1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const U1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function H1(e,t,n,r){W1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(U1.has(i)?i:$p(i),t.attrs[i])}const jl={};function NT(e){Object.assign(jl,e)}function Y1(e,{layout:t,layoutId:n}){return Nr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!jl[e]||e==="opacity")}function Gp(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(qe(i[a])||t.style&&qe(t.style[a])||Y1(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function G1(e,t,n){const r=Gp(e,t,n);for(const i in e)if(qe(e[i])||qe(t[i])){const o=no.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function FT(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const jg=["x","y","width","height","cx","cy","r"],BT={useVisualState:N1({scrapeMotionValuesFromProps:G1,createRenderState:z1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const l in i)if(Nr.has(l)){o=!0;break}}if(!o)return;let a=!t;if(t)for(let l=0;l<jg.length;l++){const c=jg[l];e[c]!==t[c]&&(a=!0)}a&&se.read(()=>{FT(n,r),se.render(()=>{Up(r,i,Yp(n.tagName),e.transformTemplate),H1(n,r)})})}})},VT={useVisualState:N1({scrapeMotionValuesFromProps:Gp,createRenderState:Hp})};function K1(e,t,n){for(const r in t)!qe(t[r])&&!Y1(r,n)&&(e[r]=t[r])}function zT({transformTemplate:e},t){return b.useMemo(()=>{const n=Hp();return Wp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function WT(e,t){const n=e.style||{},r={};return K1(r,n,e),Object.assign(r,zT(e,t)),r}function UT(e,t){const n={},r=WT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function HT(e,t,n,r){const i=b.useMemo(()=>{const o=z1();return Up(o,t,Yp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};K1(o,e.style,e),i.style={...o,...i.style}}return i}function YT(e=!1){return(n,r,i,{latestValues:o},a)=>{const c=(Fp(n)?HT:UT)(r,o,a,n),u=sT(r,typeof n=="string",e),d=n!==b.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=b.useMemo(()=>qe(f)?f.get():f,[f]);return b.createElement(n,{...d,children:p})}}function GT(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...Fp(r)?BT:VT,preloadedFeatures:e,useRender:YT(i),createVisualElement:t,Component:r};return gT(a)}}function q1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ac(e,t,n){const r=e.getProps();return Bp(r,t,n!==void 0?n:r.custom,e)}const KT=Mp(()=>window.ScrollTimeline!==void 0);class qT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(KT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class QT extends qT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Kp(e,t){return e?e[t]||e.default||e:void 0}const Wd=2e4;function Q1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Wd;)t+=n,r=e.next(t);return t>=Wd?1/0:t}function qp(e){return typeof e=="function"}function kg(e,t){e.timeline=t,e.onfinish=null}const Qp=e=>Array.isArray(e)&&typeof e[0]=="number",XT={linearEasing:void 0};function ZT(e,t){const n=Mp(e);return()=>{var r;return(r=XT[t])!==null&&r!==void 0?r:n()}}const kl=ZT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),X1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Hi(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function Z1(e){return!!(typeof e=="function"&&kl()||!e||typeof e=="string"&&(e in Ud||kl())||Qp(e)||Array.isArray(e)&&e.every(Z1))}const Lo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ud={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Lo([0,.65,.55,1]),circOut:Lo([.55,0,1,.45]),backIn:Lo([.31,.01,.66,-.59]),backOut:Lo([.33,1.53,.69,.99])};function J1(e,t){if(e)return typeof e=="function"&&kl()?X1(e,t):Qp(e)?Lo(e):Array.isArray(e)?e.map(n=>J1(n,t)||Ud.easeOut):Ud[e]}const Mt={x:!1,y:!1};function ew(){return Mt.x||Mt.y}function JT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function tw(e,t){const n=JT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Cg(e){return t=>{t.pointerType==="touch"||ew()||e(t)}}function e5(e,t,n={}){const[r,i,o]=tw(e,n),a=Cg(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=Cg(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",a,i)}),o}const nw=(e,t)=>t?e===t?!0:nw(e,t.parentElement):!1,Xp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,t5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function n5(e){return t5.has(e.tagName)||e.tabIndex!==-1}const Io=new WeakSet;function Tg(e){return t=>{t.key==="Enter"&&e(t)}}function au(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const r5=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Tg(()=>{if(Io.has(n))return;au(n,"down");const i=Tg(()=>{au(n,"up")}),o=()=>au(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Pg(e){return Xp(e)&&!ew()}function i5(e,t,n={}){const[r,i,o]=tw(e,n),a=l=>{const c=l.currentTarget;if(!Pg(l)||Io.has(c))return;Io.add(c);const u=t(l),d=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Pg(m)||!Io.has(c))&&(Io.delete(c),typeof u=="function"&&u(m,{success:y}))},f=m=>{d(m,n.useGlobalTarget||nw(c,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!n5(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),l.addEventListener("focus",u=>r5(u,i),i)}),o}function o5(e){return e==="x"||e==="y"?Mt[e]?null:(Mt[e]=!0,()=>{Mt[e]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const rw=new Set(["width","height","top","left","right","bottom",...no]);let zs;function a5(){zs=void 0}const an={now:()=>(zs===void 0&&an.set(Fe.isProcessing||tT.useManualTiming?Fe.timestamp:performance.now()),zs),set:e=>{zs=e,queueMicrotask(a5)}};function Zp(e,t){e.indexOf(t)===-1&&e.push(t)}function Jp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class eh{constructor(){this.subscriptions=[]}add(t){return Zp(this.subscriptions,t),()=>Jp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function iw(e,t){return t?e*(1e3/t):0}const Dg=30,s5=e=>!isNaN(parseFloat(e));class l5{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=an.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=an.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=s5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new eh);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=an.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Dg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Dg);return iw(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ya(e,t){return new l5(e,t)}function c5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ya(n))}function u5(e,t){const n=ac(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const l=ST(o[a]);c5(e,a,l)}}function d5(e){return!!(qe(e)&&e.add)}function Hd(e,t){const n=e.getValue("willChange");if(d5(n))return n.add(t)}function ow(e){return e.props[O1]}const aw=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,f5=1e-7,p5=12;function h5(e,t,n,r,i){let o,a,l=0;do a=t+(n-t)/2,o=aw(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>f5&&++l<p5);return a}function _a(e,t,n,r){if(e===t&&n===r)return mt;const i=o=>h5(o,0,1,e,n);return o=>o===0||o===1?o:aw(i(o),t,r)}const sw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,lw=e=>t=>1-e(1-t),cw=_a(.33,1.53,.69,.99),th=lw(cw),uw=sw(th),dw=e=>(e*=2)<1?.5*th(e):.5*(2-Math.pow(2,-10*(e-1))),nh=e=>1-Math.sin(Math.acos(e)),fw=lw(nh),pw=sw(nh),hw=e=>/^0[^.\s]+$/u.test(e);function m5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||hw(e):!0}const Go=e=>Math.round(e*1e5)/1e5,rh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function g5(e){return e==null}const v5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ih=(e,t)=>n=>!!(typeof n=="string"&&v5.test(n)&&n.startsWith(e)||t&&!g5(n)&&Object.prototype.hasOwnProperty.call(n,t)),mw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,l]=r.match(rh);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},x5=e=>wn(0,255,e),su={...ro,transform:e=>Math.round(x5(e))},kr={test:ih("rgb","red"),parse:mw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+su.transform(e)+", "+su.transform(t)+", "+su.transform(n)+", "+Go(xa.transform(r))+")"};function y5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Yd={test:ih("#"),parse:y5,transform:kr.transform},yi={test:ih("hsl","hue"),parse:mw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+on.transform(Go(t))+", "+on.transform(Go(n))+", "+Go(xa.transform(r))+")"},He={test:e=>kr.test(e)||Yd.test(e)||yi.test(e),parse:e=>kr.test(e)?kr.parse(e):yi.test(e)?yi.parse(e):Yd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?kr.transform(e):yi.transform(e)},w5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function b5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(rh))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(w5))===null||n===void 0?void 0:n.length)||0)>0}const gw="number",vw="color",S5="var",j5="var(",Eg="${}",k5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wa(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(k5,c=>(He.test(c)?(r.color.push(o),i.push(vw),n.push(He.parse(c))):c.startsWith(j5)?(r.var.push(o),i.push(S5),n.push(c)):(r.number.push(o),i.push(gw),n.push(parseFloat(c))),++o,Eg)).split(Eg);return{values:n,split:l,indexes:r,types:i}}function xw(e){return wa(e).values}function yw(e){const{split:t,types:n}=wa(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const l=n[a];l===gw?o+=Go(i[a]):l===vw?o+=He.transform(i[a]):o+=i[a]}return o}}const C5=e=>typeof e=="number"?0:e;function T5(e){const t=xw(e);return yw(e)(t.map(C5))}const qn={test:b5,parse:xw,createTransformer:yw,getAnimatableNone:T5},P5=new Set(["brightness","contrast","saturate","opacity"]);function D5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(rh)||[];if(!r)return e;const i=n.replace(r,"");let o=P5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const E5=/\b([a-z-]*)\(.*?\)/gu,Gd={...qn,getAnimatableNone:e=>{const t=e.match(E5);return t?t.map(D5).join(" "):e}},A5={...zp,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Gd,WebkitFilter:Gd},oh=e=>A5[e];function ww(e,t){let n=oh(e);return n!==Gd&&(n=qn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const _5=new Set(["auto","none","0"]);function L5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!_5.has(o)&&wa(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=ww(n,i)}const Ag=e=>e===ro||e===W,_g=(e,t)=>parseFloat(e.split(", ")[t]),Lg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return _g(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?_g(o[1],e):0}},I5=new Set(["x","y","z"]),M5=no.filter(e=>!I5.has(e));function O5(e){const t=[];return M5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Gi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Lg(4,13),y:Lg(5,14)};Gi.translateX=Gi.x;Gi.translateY=Gi.y;const Dr=new Set;let Kd=!1,qd=!1;function bw(){if(qd){const e=Array.from(Dr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=O5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var l;(l=r.getValue(o))===null||l===void 0||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}qd=!1,Kd=!1,Dr.forEach(e=>e.complete()),Dr.clear()}function Sw(){Dr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(qd=!0)})}function R5(){Sw(),bw()}class ah{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Dr.add(this),Kd||(Kd=!0,se.read(Sw),se.resolveKeyframes(bw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),l=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Dr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Dr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const jw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),$5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function N5(e){const t=$5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function kw(e,t,n=1){const[r,i]=N5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return jw(a)?parseFloat(a):a}return Vp(i)?kw(i,t,n+1):i}const Cw=e=>t=>t.test(e),F5={test:e=>e==="auto",parse:e=>e},Tw=[ro,W,on,Tn,DT,PT,F5],Ig=e=>Tw.find(Cw(e));class Pw extends ah{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Vp(u))){const d=kw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!rw.has(r)||t.length!==2)return;const[i,o]=t,a=Ig(i),l=Ig(o);if(a!==l)if(Ag(a)&&Ag(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)m5(t[i])&&r.push(i);r.length&&L5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Gi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=Gi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Mg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(qn.test(e)||e==="0")&&!e.startsWith("url("));function B5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function V5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Mg(i,t),l=Mg(o,t);return!a||!l?!1:B5(e)||(n==="spring"||qp(n))&&r}const z5=e=>e!==null;function sc(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(z5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const W5=40;class Dw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=an.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>W5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&R5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=an.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!V5(t,r,i,o))if(a)this.options.duration=0;else{c&&c(sc(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const he=(e,t,n)=>e+(t-e)*n;function lu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function U5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=lu(c,l,e+1/3),o=lu(c,l,e),a=lu(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function Cl(e,t){return n=>n>0?t:e}const cu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},H5=[Yd,kr,yi],Y5=e=>H5.find(t=>t.test(e));function Og(e){const t=Y5(e);if(!t)return!1;let n=t.parse(e);return t===yi&&(n=U5(n)),n}const Rg=(e,t)=>{const n=Og(e),r=Og(t);if(!n||!r)return Cl(e,t);const i={...n};return o=>(i.red=cu(n.red,r.red,o),i.green=cu(n.green,r.green,o),i.blue=cu(n.blue,r.blue,o),i.alpha=he(n.alpha,r.alpha,o),kr.transform(i))},G5=(e,t)=>n=>t(e(n)),La=(...e)=>e.reduce(G5),Qd=new Set(["none","hidden"]);function K5(e,t){return Qd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function q5(e,t){return n=>he(e,t,n)}function sh(e){return typeof e=="number"?q5:typeof e=="string"?Vp(e)?Cl:He.test(e)?Rg:Z5:Array.isArray(e)?Ew:typeof e=="object"?He.test(e)?Rg:Q5:Cl}function Ew(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>sh(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function Q5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=sh(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function X5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],l=e.indexes[a][i[a]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[o]=c,i[a]++}return r}const Z5=(e,t)=>{const n=qn.createTransformer(t),r=wa(e),i=wa(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Qd.has(e)&&!i.values.length||Qd.has(t)&&!r.values.length?K5(e,t):La(Ew(X5(r,i),i.values),n):Cl(e,t)};function Aw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?he(e,t,n):sh(e)(e,t)}const J5=5;function _w(e,t,n){const r=Math.max(t-J5,0);return iw(n-e(r),t-r)}const xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},uu=.001;function eP({duration:e=xe.duration,bounce:t=xe.bounce,velocity:n=xe.velocity,mass:r=xe.mass}){let i,o,a=1-t;a=wn(xe.minDamping,xe.maxDamping,a),e=wn(xe.minDuration,xe.maxDuration,mn(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,m=Xd(u,a),y=Math.exp(-f);return uu-p/m*y},o=u=>{const f=u*a*e,p=f*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=Xd(Math.pow(u,2),a);return(-i(u)+uu>0?-1:1)*((p-m)*y)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-uu+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=nP(i,o,l);if(e=hn(e),isNaN(c))return{stiffness:xe.stiffness,damping:xe.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const tP=12;function nP(e,t,n){let r=n;for(let i=1;i<tP;i++)r=r-e(r)/t(r);return r}function Xd(e,t){return e*Math.sqrt(1-t*t)}const rP=["duration","bounce"],iP=["stiffness","damping","mass"];function $g(e,t){return t.some(n=>e[n]!==void 0)}function oP(e){let t={velocity:xe.velocity,stiffness:xe.stiffness,damping:xe.damping,mass:xe.mass,isResolvedFromDuration:!1,...e};if(!$g(e,iP)&&$g(e,rP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*wn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:xe.mass,stiffness:i,damping:o}}else{const n=eP(e);t={...t,...n,mass:xe.mass},t.isResolvedFromDuration=!0}return t}function Lw(e=xe.visualDuration,t=xe.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=oP({...n,velocity:-mn(n.velocity||0)}),y=p||0,w=u/(2*Math.sqrt(c*d)),S=a-o,g=mn(Math.sqrt(c/d)),h=Math.abs(S)<5;r||(r=h?xe.restSpeed.granular:xe.restSpeed.default),i||(i=h?xe.restDelta.granular:xe.restDelta.default);let v;if(w<1){const k=Xd(g,w);v=C=>{const P=Math.exp(-w*g*C);return a-P*((y+w*g*S)/k*Math.sin(k*C)+S*Math.cos(k*C))}}else if(w===1)v=k=>a-Math.exp(-g*k)*(S+(y+g*S)*k);else{const k=g*Math.sqrt(w*w-1);v=C=>{const P=Math.exp(-w*g*C),E=Math.min(k*C,300);return a-P*((y+w*g*S)*Math.sinh(E)+k*S*Math.cosh(E))/k}}const j={calculatedDuration:m&&f||null,next:k=>{const C=v(k);if(m)l.done=k>=f;else{let P=0;w<1&&(P=k===0?hn(y):_w(v,k,C));const E=Math.abs(P)<=r,R=Math.abs(a-C)<=i;l.done=E&&R}return l.value=l.done?a:C,l},toString:()=>{const k=Math.min(Q1(j),Wd),C=X1(P=>j.next(k*P).value,k,30);return k+"ms "+C}};return j}function Ng({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=E=>l!==void 0&&E<l||c!==void 0&&E>c,y=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let w=n*t;const S=f+w,g=a===void 0?S:a(S);g!==S&&(w=g-f);const h=E=>-w*Math.exp(-E/r),v=E=>g+h(E),j=E=>{const R=h(E),T=v(E);p.done=Math.abs(R)<=u,p.value=p.done?g:T};let k,C;const P=E=>{m(p.value)&&(k=E,C=Lw({keyframes:[p.value,y(p.value)],velocity:_w(v,E,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:E=>{let R=!1;return!C&&k===void 0&&(R=!0,j(E),P(E)),k!==void 0&&E>=k?C.next(E-k):(!R&&j(E),p)}}}const aP=_a(.42,0,1,1),sP=_a(0,0,.58,1),Iw=_a(.42,0,.58,1),lP=e=>Array.isArray(e)&&typeof e[0]!="number",cP={linear:mt,easeIn:aP,easeInOut:Iw,easeOut:sP,circIn:nh,circInOut:pw,circOut:fw,backIn:th,backInOut:uw,backOut:cw,anticipate:dw},Fg=e=>{if(Qp(e)){A1(e.length===4);const[t,n,r,i]=e;return _a(t,n,r,i)}else if(typeof e=="string")return cP[e];return e};function uP(e,t,n){const r=[],i=n||Aw,o=e.length-1;for(let a=0;a<o;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||mt:t;l=La(c,l)}r.push(l)}return r}function dP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(A1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=uP(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Hi(e[f],e[f+1],d);return l[f](p)};return n?d=>u(wn(e[0],e[o-1],d)):u}function fP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Hi(0,t,r);e.push(he(n,1,i))}}function pP(e){const t=[0];return fP(t,e.length-1),t}function hP(e,t){return e.map(n=>n*t)}function mP(e,t){return e.map(()=>t||Iw).splice(0,e.length-1)}function Tl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=lP(r)?r.map(Fg):Fg(r),o={done:!1,value:t[0]},a=hP(n&&n.length===t.length?n:pP(t),e),l=dP(a,t,{ease:Array.isArray(i)?i:mP(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const gP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>Kn(t),now:()=>Fe.isProcessing?Fe.timestamp:an.now()}},vP={decay:Ng,inertia:Ng,tween:Tl,keyframes:Tl,spring:Lw},xP=e=>e/100;class lh extends Dw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||ah,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(o,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,l=qp(n)?n:vP[n]||Tl;let c,u;l!==Tl&&typeof t[0]!="number"&&(c=La(xP,Aw(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});o==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Q1(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:p,repeat:m,repeatType:y,repeatDelay:w,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,j=o;if(m){const E=Math.min(this.currentTime,d)/f;let R=Math.floor(E),T=E%1;!T&&E>=1&&(T=1),T===1&&R--,R=Math.min(R,m+1),!!(R%2)&&(y==="reverse"?(T=1-T,w&&(T-=w/f)):y==="mirror"&&(j=a)),v=wn(0,1,T)*f}const k=h?{done:!1,value:c[0]}:j.next(v);l&&(k.value=l(k.value));let{done:C}=k;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return P&&i!==void 0&&(k.value=sc(c,this.options,i)),S&&S(k.value),P&&this.finish(),k}get duration(){const{resolved:t}=this;return t?mn(t.calculatedDuration):0}get time(){return mn(this.currentTime)}set time(t){t=hn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=mn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=gP,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const yP=new Set(["opacity","clipPath","filter","transform"]);function wP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=J1(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const bP=Mp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Pl=10,SP=2e4;function jP(e){return qp(e.type)||e.type==="spring"||!Z1(e.ease)}function kP(e,t){const n=new lh({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<SP;)r=n.sample(o),i.push(r.value),o+=Pl;return{times:void 0,keyframes:i,duration:o-Pl,ease:"linear"}}const Mw={anticipate:dw,backInOut:uw,circInOut:pw};function CP(e){return e in Mw}class Bg extends Dw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Pw(o,(a,l)=>this.onKeyframesResolved(a,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof o=="string"&&kl()&&CP(o)&&(o=Mw[o]),jP(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:y,...w}=this.options,S=kP(t,w);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,o=S.ease,a="keyframes"}const d=wP(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:o});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(kg(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(sc(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return mn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return mn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=hn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return mt;const{animation:r}=n;kg(r,t)}return mt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...m}=this.options,y=new lh({...m,keyframes:r,duration:i,type:o,ease:a,times:l,isGenerator:!0}),w=hn(this.time);u.setWithVelocity(y.sample(w-Pl).value,y.sample(w).value,Pl)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return bP()&&r&&yP.has(r)&&!c&&!u&&!i&&o!=="mirror"&&a!==0&&l!=="inertia"}}const TP={type:"spring",stiffness:500,damping:25,restSpeed:10},PP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),DP={type:"keyframes",duration:.8},EP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AP=(e,{keyframes:t})=>t.length>2?DP:Nr.has(e)?e.startsWith("scale")?PP(t[1]):TP:EP;function _P({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const ch=(e,t,n,r={},i,o)=>a=>{const l=Kp(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-hn(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};_P(l)||(d={...d,...AP(e,d)}),d.duration&&(d.duration=hn(d.duration)),d.repeatDelay&&(d.repeatDelay=hn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const p=sc(d.keyframes,l);if(p!==void 0)return se.update(()=>{d.onUpdate(p),d.onComplete()}),new QT([])}return!o&&Bg.supports(d)?new Bg(d):new lh(d)};function LP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ow(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=c[f];if(m===void 0||d&&LP(d,f))continue;const y={delay:n,...Kp(a||{},f)};let w=!1;if(window.MotionHandoffAnimation){const g=ow(e);if(g){const h=window.MotionHandoffAnimation(g,f,se);h!==null&&(y.startTime=h,w=!0)}}Hd(e,f),p.start(ch(f,p,m,e.shouldReduceMotion&&rw.has(f)?{type:!1}:y,e,w));const S=p.animation;S&&u.push(S)}return l&&Promise.all(u).then(()=>{se.update(()=>{l&&u5(e,l)})}),u}function Zd(e,t,n={}){var r;const i=ac(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(Ow(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=o;return IP(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function IP(e,t,n=0,r=0,i=1,o){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(MP).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Zd(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function MP(e,t){return e.sortNodePosition(t)}function OP(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Zd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Zd(e,t,n);else{const i=typeof t=="function"?ac(e,t,n.custom):t;r=Promise.all(Ow(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const RP=Rp.length;function Rw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Rw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<RP;n++){const r=Rp[n],i=e.props[r];(va(i)||i===!1)&&(t[r]=i)}return t}const $P=[...Op].reverse(),NP=Op.length;function FP(e){return t=>Promise.all(t.map(({animation:n,options:r})=>OP(e,n,r)))}function BP(e){let t=FP(e),n=Vg(),r=!0;const i=c=>(u,d)=>{var f;const p=ac(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:y,...w}=p;u={...u,...w,...y}}return u};function o(c){t=c(e)}function a(c){const{props:u}=e,d=Rw(e.parent)||{},f=[],p=new Set;let m={},y=1/0;for(let S=0;S<NP;S++){const g=$P[S],h=n[g],v=u[g]!==void 0?u[g]:d[g],j=va(v),k=g===c?h.isActive:null;k===!1&&(y=S);let C=v===d[g]&&v!==u[g]&&j;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...m},!h.isActive&&k===null||!v&&!h.prevProp||ic(v)||typeof v=="boolean")continue;const P=VP(h.prevProp,v);let E=P||g===c&&h.isActive&&!C&&j||S>y&&j,R=!1;const T=Array.isArray(v)?v:[v];let _=T.reduce(i(g),{});k===!1&&(_={});const{prevResolvedValues:N={}}=h,z={...N,..._},U=M=>{E=!0,p.has(M)&&(R=!0,p.delete(M)),h.needsAnimating[M]=!0;const A=e.getValue(M);A&&(A.liveStyle=!1)};for(const M in z){const A=_[M],O=N[M];if(m.hasOwnProperty(M))continue;let $=!1;zd(A)&&zd(O)?$=!q1(A,O):$=A!==O,$?A!=null?U(M):p.add(M):A!==void 0&&p.has(M)?U(M):h.protectedKeys[M]=!0}h.prevProp=v,h.prevResolvedValues=_,h.isActive&&(m={...m,..._}),r&&e.blockInitialAnimation&&(E=!1),E&&(!(C&&P)||R)&&f.push(...T.map(M=>({animation:M,options:{type:g}})))}if(p.size){const S={};p.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),S[g]=h??null}),f.push({animation:S})}let w=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Vg(),r=!0}}}function VP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!q1(t,e):!1}function ir(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vg(){return{animate:ir(!0),whileInView:ir(),whileHover:ir(),whileTap:ir(),whileDrag:ir(),whileFocus:ir(),exit:ir()}}class tr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class zP extends tr{constructor(t){super(t),t.animationState||(t.animationState=BP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ic(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let WP=0;class UP extends tr{constructor(){super(...arguments),this.id=WP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const HP={animation:{Feature:zP},exit:{Feature:UP}};function ba(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ia(e){return{point:{x:e.pageX,y:e.pageY}}}const YP=e=>t=>Xp(t)&&e(t,Ia(t));function Ko(e,t,n,r){return ba(e,t,YP(n),r)}const zg=(e,t)=>Math.abs(e-t);function GP(e,t){const n=zg(e.x,t.x),r=zg(e.y,t.y);return Math.sqrt(n**2+r**2)}class $w{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=fu(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=GP(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:y}=f,{timestamp:w}=Fe;this.history.push({...y,timestamp:w});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=du(p,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=fu(f.type==="pointercancel"?this.lastMoveEventInfo:du(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,S),y&&y(f,S)},!Xp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Ia(t),l=du(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=Fe;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,fu(l,this.history)),this.removeListeners=La(Ko(this.contextWindow,"pointermove",this.handlePointerMove),Ko(this.contextWindow,"pointerup",this.handlePointerUp),Ko(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Kn(this.updatePoint)}}function du(e,t){return t?{point:t(e.point)}:e}function Wg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function fu({point:e},t){return{point:e,delta:Wg(e,Nw(t)),offset:Wg(e,KP(t)),velocity:qP(t,.1)}}function KP(e){return e[0]}function Nw(e){return e[e.length-1]}function qP(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Nw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>hn(t)));)n--;if(!r)return{x:0,y:0};const o=mn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const Fw=1e-4,QP=1-Fw,XP=1+Fw,Bw=.01,ZP=0-Bw,JP=0+Bw;function vt(e){return e.max-e.min}function e4(e,t,n){return Math.abs(e-t)<=n}function Ug(e,t,n,r=.5){e.origin=r,e.originPoint=he(t.min,t.max,e.origin),e.scale=vt(n)/vt(t),e.translate=he(n.min,n.max,e.origin)-e.originPoint,(e.scale>=QP&&e.scale<=XP||isNaN(e.scale))&&(e.scale=1),(e.translate>=ZP&&e.translate<=JP||isNaN(e.translate))&&(e.translate=0)}function qo(e,t,n,r){Ug(e.x,t.x,n.x,r?r.originX:void 0),Ug(e.y,t.y,n.y,r?r.originY:void 0)}function Hg(e,t,n){e.min=n.min+t.min,e.max=e.min+vt(t)}function t4(e,t,n){Hg(e.x,t.x,n.x),Hg(e.y,t.y,n.y)}function Yg(e,t,n){e.min=t.min-n.min,e.max=e.min+vt(t)}function Qo(e,t,n){Yg(e.x,t.x,n.x),Yg(e.y,t.y,n.y)}function n4(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?he(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?he(n,e,r.max):Math.min(e,n)),e}function Gg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function r4(e,{top:t,left:n,bottom:r,right:i}){return{x:Gg(e.x,n,i),y:Gg(e.y,t,r)}}function Kg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function i4(e,t){return{x:Kg(e.x,t.x),y:Kg(e.y,t.y)}}function o4(e,t){let n=.5;const r=vt(e),i=vt(t);return i>r?n=Hi(t.min,t.max-r,e.min):r>i&&(n=Hi(e.min,e.max-i,t.min)),wn(0,1,n)}function a4(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Jd=.35;function s4(e=Jd){return e===!1?e=0:e===!0&&(e=Jd),{x:qg(e,"left","right"),y:qg(e,"top","bottom")}}function qg(e,t,n){return{min:Qg(e,t),max:Qg(e,n)}}function Qg(e,t){return typeof e=="number"?e:e[t]||0}const Xg=()=>({translate:0,scale:1,origin:0,originPoint:0}),wi=()=>({x:Xg(),y:Xg()}),Zg=()=>({min:0,max:0}),we=()=>({x:Zg(),y:Zg()});function jt(e){return[e("x"),e("y")]}function Vw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function l4({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function c4(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function pu(e){return e===void 0||e===1}function ef({scale:e,scaleX:t,scaleY:n}){return!pu(e)||!pu(t)||!pu(n)}function xr(e){return ef(e)||zw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function zw(e){return Jg(e.x)||Jg(e.y)}function Jg(e){return e&&e!=="0%"}function Dl(e,t,n){const r=e-n,i=t*r;return n+i}function e0(e,t,n,r,i){return i!==void 0&&(e=Dl(e,i,r)),Dl(e,n,r)+t}function tf(e,t=0,n=1,r,i){e.min=e0(e.min,t,n,r,i),e.max=e0(e.max,t,n,r,i)}function Ww(e,{x:t,y:n}){tf(e.x,t.translate,t.scale,t.originPoint),tf(e.y,n.translate,n.scale,n.originPoint)}const t0=.999999999999,n0=1.0000000000001;function u4(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let l=0;l<i;l++){o=n[l],a=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Si(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ww(e,a)),r&&xr(o.latestValues)&&Si(e,o.latestValues))}t.x<n0&&t.x>t0&&(t.x=1),t.y<n0&&t.y>t0&&(t.y=1)}function bi(e,t){e.min=e.min+t,e.max=e.max+t}function r0(e,t,n,r,i=.5){const o=he(e.min,e.max,i);tf(e,t,n,o,r)}function Si(e,t){r0(e.x,t.x,t.scaleX,t.scale,t.originX),r0(e.y,t.y,t.scaleY,t.scale,t.originY)}function Uw(e,t){return Vw(c4(e.getBoundingClientRect(),t))}function d4(e,t,n){const r=Uw(e,n),{scroll:i}=t;return i&&(bi(r.x,i.offset.x),bi(r.y,i.offset.y)),r}const Hw=({current:e})=>e?e.ownerDocument.defaultView:null,f4=new WeakMap;class p4{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ia(d).point)},o=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:y}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=o5(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(on.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[S];v&&(g=vt(v)*(parseFloat(g)/100))}}this.originPoint[S]=g}),y&&se.postRender(()=>y(d,f)),Hd(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:S}=f;if(m&&this.currentDirection===null){this.currentDirection=h4(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),w&&w(d,f)},l=(d,f)=>this.stop(d,f),c=()=>jt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new $w(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Hw(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&se.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!us(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=n4(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&xi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=r4(i.layoutBox,n):this.constraints=!1,this.elastic=s4(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&jt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=a4(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!xi(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=d4(r,i.root,this.visualElement.getTransformPagePoint());let a=i4(i.layout.layoutBox,o);if(n){const l=n(l4(a));this.hasMutatedConstraints=!!l,l&&(a=Vw(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=jt(d=>{if(!us(d,n,this.currentDirection))return;let f=c&&c[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Hd(this.visualElement,t),r.start(ch(t,r,0,n,this.visualElement,!1))}stopAnimation(){jt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){jt(n=>{const{drag:r}=this.getProps();if(!us(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];o.set(t[n]-he(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!xi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};jt(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=o4({min:c,max:c},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),jt(a=>{if(!us(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(he(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;f4.set(this.visualElement,this);const t=this.visualElement.current,n=Ko(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();xi(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const a=ba(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(jt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Jd,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:l}}}function us(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function h4(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class m4 extends tr{constructor(t){super(t),this.removeGroupControls=mt,this.removeListeners=mt,this.controls=new p4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const i0=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class g4 extends tr{constructor(){super(...arguments),this.removePointerDownListener=mt}onPointerDown(t){this.session=new $w(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:i0(t),onStart:i0(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&se.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=Ko(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ws={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function o0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const go={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=o0(e,t.target.x),r=o0(e,t.target.y);return`${n}% ${r}%`}},v4={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=qn.parse(e);if(i.length>5)return r;const o=qn.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=he(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class x4 extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;NT(y4),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ws.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||se.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Np.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Yw(e){const[t,n]=D1(),r=b.useContext(Ap);return s.jsx(x4,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(R1),isPresent:t,safeToRemove:n})}const y4={borderRadius:{...go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:v4};function w4(e,t,n){const r=qe(e)?e:ya(e);return r.start(ch("",r,t,n)),r.animation}function b4(e){return e instanceof SVGElement&&e.tagName!=="svg"}const S4=(e,t)=>e.depth-t.depth;class j4{constructor(){this.children=[],this.isDirty=!1}add(t){Zp(this.children,t),this.isDirty=!0}remove(t){Jp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(S4),this.isDirty=!1,this.children.forEach(t)}}function k4(e,t){const n=an.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Kn(r),e(o-t))};return se.read(r,!0),()=>Kn(r)}const Gw=["TopLeft","TopRight","BottomLeft","BottomRight"],C4=Gw.length,a0=e=>typeof e=="string"?parseFloat(e):e,s0=e=>typeof e=="number"||W.test(e);function T4(e,t,n,r,i,o){i?(e.opacity=he(0,n.opacity!==void 0?n.opacity:1,P4(r)),e.opacityExit=he(t.opacity!==void 0?t.opacity:1,0,D4(r))):o&&(e.opacity=he(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<C4;a++){const l=`border${Gw[a]}Radius`;let c=l0(t,l),u=l0(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||s0(c)===s0(u)?(e[l]=Math.max(he(a0(c),a0(u),r),0),(on.test(u)||on.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=he(t.rotate||0,n.rotate||0,r))}function l0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const P4=Kw(0,.5,fw),D4=Kw(.5,.95,mt);function Kw(e,t,n){return r=>r<e?0:r>t?1:n(Hi(e,t,r))}function c0(e,t){e.min=t.min,e.max=t.max}function St(e,t){c0(e.x,t.x),c0(e.y,t.y)}function u0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function d0(e,t,n,r,i){return e-=t,e=Dl(e,1/n,r),i!==void 0&&(e=Dl(e,1/i,r)),e}function E4(e,t=0,n=1,r=.5,i,o=e,a=e){if(on.test(t)&&(t=parseFloat(t),t=he(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=he(o.min,o.max,r);e===o&&(l-=t),e.min=d0(e.min,t,n,l,i),e.max=d0(e.max,t,n,l,i)}function f0(e,t,[n,r,i],o,a){E4(e,t[n],t[r],t[i],t.scale,o,a)}const A4=["x","scaleX","originX"],_4=["y","scaleY","originY"];function p0(e,t,n,r){f0(e.x,t,A4,n?n.x:void 0,r?r.x:void 0),f0(e.y,t,_4,n?n.y:void 0,r?r.y:void 0)}function h0(e){return e.translate===0&&e.scale===1}function qw(e){return h0(e.x)&&h0(e.y)}function m0(e,t){return e.min===t.min&&e.max===t.max}function L4(e,t){return m0(e.x,t.x)&&m0(e.y,t.y)}function g0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Qw(e,t){return g0(e.x,t.x)&&g0(e.y,t.y)}function v0(e){return vt(e.x)/vt(e.y)}function x0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class I4{constructor(){this.members=[]}add(t){Zp(this.members,t),t.scheduleRender()}remove(t){if(Jp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function M4(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const yr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Mo=typeof window<"u"&&window.MotionDebug!==void 0,hu=["","X","Y","Z"],O4={visibility:"hidden"},y0=1e3;let R4=0;function mu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Xw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ow(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Xw(r)}function Zw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=R4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Mo&&(yr.totalNodes=yr.resolvedTargetDeltas=yr.recalculatedProjection=0),this.nodes.forEach(F4),this.nodes.forEach(U4),this.nodes.forEach(H4),this.nodes.forEach(B4),Mo&&window.MotionDebug.record(yr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new j4)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new eh),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=b4(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=k4(p,250),Ws.hasAnimatedSinceResize&&(Ws.hasAnimatedSinceResize=!1,this.nodes.forEach(b0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||Q4,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Qw(this.targetLayout,y)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const j={...Kp(w,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else p||b0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Kn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Y4),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Xw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(w0);return}this.isUpdating||this.nodes.forEach(z4),this.isUpdating=!1,this.nodes.forEach(W4),this.nodes.forEach($4),this.nodes.forEach(N4),this.clearAllSnapshots();const l=an.now();Fe.delta=wn(0,1e3/60,l-Fe.timestamp),Fe.timestamp=l,Fe.isProcessing=!0,ou.update.process(Fe),ou.preRender.process(Fe),ou.render.process(Fe),Fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Np.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(V4),this.sharedNodes.forEach(G4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!qw(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(l||xr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),X4(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:l}=this.options;if(!l)return we();const c=l.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(Z4))){const{scroll:d}=this.root;d&&(bi(c.x,d.offset.x),bi(c.y,d.offset.y))}return c}removeElementScroll(a){var l;const c=we();if(St(c,a),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&St(c,a),bi(c.x,f.offset.x),bi(c.y,f.offset.y))}return c}applyTransform(a,l=!1){const c=we();St(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Si(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),xr(d.latestValues)&&Si(c,d.latestValues)}return xr(this.latestValues)&&Si(c,this.latestValues),c}removeTransform(a){const l=we();St(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!xr(u.latestValues))continue;ef(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();St(d,f),p0(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return xr(this.latestValues)&&p0(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Fe.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Qo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),t4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),Ww(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Qo(this.relativeTargetOrigin,this.target,m.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Mo&&yr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ef(this.parent.latestValues)||zw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Fe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;St(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;u4(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=we());const{target:y}=l;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(u0(this.prevProjectionDelta.x,this.projectionDelta.x),u0(this.prevProjectionDelta.y,this.projectionDelta.y)),qo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!x0(this.projectionDelta.x,this.prevProjectionDelta.x)||!x0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Mo&&yr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wi(),this.projectionDelta=wi(),this.projectionDeltaWithTransform=wi()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=wi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=we(),m=c?c.source:void 0,y=this.layout?this.layout.source:void 0,w=m!==y,S=this.getStack(),g=!S||S.members.length<=1,h=!!(w&&!g&&this.options.crossfade===!0&&!this.path.some(q4));this.animationProgress=0;let v;this.mixTargetDelta=j=>{const k=j/1e3;S0(f.x,a.x,k),S0(f.y,a.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),K4(this.relativeTarget,this.relativeTargetOrigin,p,k),v&&L4(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),St(v,this.relativeTarget)),w&&(this.animationValues=d,T4(d,u,this.latestValues,k,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Kn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{Ws.hasAnimatedSinceResize=!0,this.currentAnimation=w4(0,y0,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(y0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&Jw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||we();const f=vt(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=vt(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}St(l,c),Si(l,d),qo(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new I4),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&mu("z",a,u,this.animationValues);for(let d=0;d<hu.length;d++)mu(`rotate${hu[d]}`,a,u,this.animationValues),mu(`skew${hu[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return O4;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Vs(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=Vs(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!xr(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=M4(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in jl){if(p[w]===void 0)continue;const{correct:S,applyTo:g}=jl[w],h=u.transform==="none"?p[w]:S(p[w],f);if(g){const v=g.length;for(let j=0;j<v;j++)u[g[j]]=h}else u[w]=h}return this.options.layoutId&&(u.pointerEvents=f===this?Vs(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(w0),this.root.sharedNodes.clear()}}}function $4(e){e.updateLayout()}function N4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?jt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=vt(p);p.min=r[f].min,p.max=p.min+m}):Jw(o,n.layoutBox,r)&&jt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=vt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const l=wi();qo(l,r,n.layoutBox);const c=wi();a?qo(c,e.applyTransform(i,!0),n.measuredBox):qo(c,r,n.layoutBox);const u=!qw(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const y=we();Qo(y,n.layoutBox,p.layoutBox);const w=we();Qo(w,r,m.layoutBox),Qw(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function F4(e){Mo&&yr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function B4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function V4(e){e.clearSnapshot()}function w0(e){e.clearMeasurements()}function z4(e){e.isLayoutDirty=!1}function W4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function b0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function U4(e){e.resolveTargetDelta()}function H4(e){e.calcProjection()}function Y4(e){e.resetSkewAndRotation()}function G4(e){e.removeLeadSnapshot()}function S0(e,t,n){e.translate=he(t.translate,0,n),e.scale=he(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function j0(e,t,n,r){e.min=he(t.min,n.min,r),e.max=he(t.max,n.max,r)}function K4(e,t,n,r){j0(e.x,t.x,n.x,r),j0(e.y,t.y,n.y,r)}function q4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Q4={duration:.45,ease:[.4,0,.1,1]},k0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),C0=k0("applewebkit/")&&!k0("chrome/")?Math.round:mt;function T0(e){e.min=C0(e.min),e.max=C0(e.max)}function X4(e){T0(e.x),T0(e.y)}function Jw(e,t,n){return e==="position"||e==="preserve-aspect"&&!e4(v0(t),v0(n),.2)}function Z4(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const J4=Zw({attachResizeListener:(e,t)=>ba(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gu={current:void 0},e2=Zw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!gu.current){const e=new J4({});e.mount(window),e.setOptions({layoutScroll:!0}),gu.current=e}return gu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),eD={pan:{Feature:g4},drag:{Feature:m4,ProjectionNode:e2,MeasureLayout:Yw}};function P0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&se.postRender(()=>o(t,Ia(t)))}class tD extends tr{mount(){const{current:t}=this.node;t&&(this.unmount=e5(t,n=>(P0(this.node,n,"Start"),r=>P0(this.node,r,"End"))))}unmount(){}}class nD extends tr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=La(ba(this.node.current,"focus",()=>this.onFocus()),ba(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function D0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&se.postRender(()=>o(t,Ia(t)))}class rD extends tr{mount(){const{current:t}=this.node;t&&(this.unmount=i5(t,n=>(D0(this.node,n,"Start"),(r,{success:i})=>D0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const nf=new WeakMap,vu=new WeakMap,iD=e=>{const t=nf.get(e.target);t&&t(e)},oD=e=>{e.forEach(iD)};function aD({root:e,...t}){const n=e||document;vu.has(n)||vu.set(n,{});const r=vu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(oD,{root:e,...t})),r[i]}function sD(e,t,n){const r=aD(t);return nf.set(e,n),r.observe(e),()=>{nf.delete(e),r.unobserve(e)}}const lD={some:0,all:1};class cD extends tr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:lD[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return sD(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(uD(t,n))&&this.startObserver()}unmount(){}}function uD({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const dD={inView:{Feature:cD},tap:{Feature:rD},focus:{Feature:nD},hover:{Feature:tD}},fD={layout:{ProjectionNode:e2,MeasureLayout:Yw}},rf={current:null},t2={current:!1};function pD(){if(t2.current=!0,!!Ip)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>rf.current=e.matches;e.addListener(t),t()}else rf.current=!1}const hD=[...Tw,He,qn],mD=e=>hD.find(Cw(e)),E0=new WeakMap;function gD(e,t,n){for(const r in t){const i=t[r],o=n[r];if(qe(i))e.addValue(r,i);else if(qe(o))e.addValue(r,ya(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,ya(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const A0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class vD{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ah,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=an.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,se.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=oc(n),this.isVariantNode=M1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const y=p[m];c[m]!==void 0&&qe(y)&&y.set(c[m],!1)}}mount(t){this.current=t,E0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),t2.current||pD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){E0.delete(this.current),this.projection&&this.projection.unmount(),Kn(this.notifyUpdate),Kn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Nr.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Yi){const n=Yi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<A0.length;r++){const i=A0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=gD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ya(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(jw(i)||hw(i))?i=parseFloat(i):!mD(i)&&qn.test(n)&&(i=ww(t,n)),this.setBaseTarget(t,qe(i)?i.get():i)),qe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=Bp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!qe(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new eh),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class n2 extends vD{constructor(){super(...arguments),this.KeyframeResolver=Pw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;qe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function xD(e){return window.getComputedStyle(e)}class yD extends n2{constructor(){super(...arguments),this.type="html",this.renderInstance=W1}readValueFromInstance(t,n){if(Nr.has(n)){const r=oh(n);return r&&r.default||0}else{const r=xD(t),i=(B1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Uw(t,n)}build(t,n,r){Wp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Gp(t,n,r)}}class wD extends n2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=we}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Nr.has(n)){const r=oh(n);return r&&r.default||0}return n=U1.has(n)?n:$p(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return G1(t,n,r)}build(t,n,r){Up(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){H1(t,n,r,i)}mount(t){this.isSVGTag=Yp(t.tagName),super.mount(t)}}const bD=(e,t)=>Fp(e)?new wD(t):new yD(t,{allowProjection:e!==b.Fragment}),SD=GT({...HP,...dD,...eD,...fD},bD),F=lT(SD),jD=x(F.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,kD=x.div`
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
`,CD=x(bp)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,TD=x.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,PD=x.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,DD=x(F.button)`
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
`,ED=x(F.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,AD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"5"}),s.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),s.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),s.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),s.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),s.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),s.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),s.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),s.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),_D=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),LD=()=>{const{isDark:e,toggleTheme:t}=Sp();return s.jsx(jD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:s.jsxs(kD,{children:[s.jsx(CD,{to:"/","aria-label":"Go to homepage",children:s.jsx(TD,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),s.jsx(PD,{}),s.jsx(DD,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:s.jsx(_e,{mode:"wait",children:s.jsx(ED,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?s.jsx(_D,{}):s.jsx(AD,{})},e?"moon":"sun")})})]})})},ID=x(F.div)`
  position: relative;
`,MD=x(bp)`
  display: block;
  text-decoration: none;
  color: inherit;
`,r2=x(F.div)`
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
`,OD=x(F.div)`
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

  ${r2}:hover &::before {
    opacity: 0.3;
  }
`,RD=x.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,$D={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},ND={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},FD=({title:e,icon:t,to:n})=>s.jsx(ID,{variants:$D,whileHover:"hover",whileTap:"tap",children:s.jsx(MD,{to:n,children:s.jsxs(r2,{variants:ND,children:[s.jsx(OD,{children:t}),s.jsx(RD,{children:e})]})})}),BD=x.div`
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
`,VD=x(F.div)`
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
`,zD={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},WD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),s.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),s.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),s.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),s.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),s.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),s.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),s.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),s.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),s.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),UD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),s.jsx("path",{d:"M1 10h22"}),s.jsx("path",{d:"M17 14h.01"})]}),HD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),YD=[{id:"tax-manager",title:"Tax Manager",icon:s.jsx(WD,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:s.jsx(UD,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:s.jsx(HD,{}),to:"/canvas-manager"}],GD=()=>s.jsx(BD,{children:s.jsx(VD,{variants:zD,initial:"hidden",animate:"visible",children:YD.map(e=>s.jsx(FD,{title:e.title,icon:e.icon,to:e.to},e.id))})}),i2=x.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;x.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Us=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],_0=75e3,ji=4,KD=12e5,qD=6e4,L0=5e6,I0=10,QD=12,XD=1800;function Er(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const o=r.slice(-3),a=r.slice(0,-3);if(a.length>0){const l=[];let c=a;for(;c.length>0;)c.length>=2?(l.unshift(c.slice(-2)),c=c.slice(0,-2)):(l.unshift(c),c="");i=l.join(",")+","+o}else i=o;return(t?"-":"")+i}function Y(e){return"₹"+Er(e)}function K(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,o]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+Er(parseInt(i))+"."+o}function M0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:Er(e)}function ZD(e){for(let t=Us.length-1;t>=0;t--)if(e>Us[t].from)return Us[t].rate;return 0}function JD(e){const t=[];let n=e,r=0;for(const i of Us){const o=i.from,l=(i.to??1/0)-o;if(n<=0){t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,l),u=c*i.rate/100;t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function eE(e,t){if(t>L0){const r=e*(1+I0/100)*(1+ji/100),i=t-L0,a=(e+i)*(1+ji/100),l=a<r,c=Math.min(r,a),u=c/(1+ji/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:I0,surchargeAmount:d,marginalReliefApplied:l,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(ji/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function O0(e,t,n,r,i,o,a){const l=e*t/100,c=e-l;let u=0;i==="percentage"?u=e*o/100:i==="amount"&&(u=o);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=l*QD/100,p=f):(f=XD*12,p=f));const m=e-p,y=a.map(re=>({name:re.name,amount:re.amount*12})),w=y.reduce((re,le)=>re+le.amount,0),S=Math.max(0,m-_0),{slabs:g,totalTax:h}=JD(S);let v=0,j=h;S<=KD&&(v=Math.min(h,qD),j=Math.max(0,h-v));const{surchargeApplicable:k,surchargeRate:C,surchargeAmount:P,marginalReliefApplied:E,taxAfterSurcharge:R,cess:T,totalTax:_}=eE(j,S),N=f+p,z=_,U=f+_+w,D=m-f-_-w,L=D/12,M=m>0?_/m*100:0,A=ZD(S);let O=0,$=u;if(u>0&&A>0){let re=u*A/100;k&&(re=re*(1+C/100)),O=re*(1+ji/100),$=u-O}const V=D+$,H=V/12;return{baseSalary:e,basicSalary:l,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:m,standardDeduction:_0,additionalDeductions:y,totalAdditionalDeductions:w,taxableIncome:S,slabs:g,taxBeforeSurcharge:h,surchargeApplicable:k,surchargeRate:C,surchargeAmount:P,marginalReliefApplied:E,taxAfterSurcharge:R,cessRate:ji,cess:T,totalTax:_,rebate87A:v,totalPFDeduction:N,totalTaxDeduction:z,totalDeductions:U,netSalaryYearly:D,netSalaryMonthly:L,effectiveTaxRate:M,bonusTaxRate:A,bonusTaxAmount:O,bonusAfterTax:$,totalIncomeYearly:V,totalIncomeMonthly:H}}function tE(e){const t=O0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=O0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const uh="taxCalculatorInput";function nE(e){localStorage.setItem(uh,JSON.stringify(e))}function rE(){localStorage.removeItem(uh)}function o2(){const e=localStorage.getItem(uh);if(e)try{return JSON.parse(e)}catch{return null}return null}const iE={financialYear:"FY 2025-26"},oE=x(F.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,vo=x.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,xo=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,yo=x.div`
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
`,wo=x.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,aE=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,Wr=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,R0=x.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,or=x.input`
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
`,xu=x.div`
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
`,yu=x.div`
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
`,$0=x.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,bo=x(F.button)`
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
`,sE=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,wu=x(F.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,bu=x(F.button)`
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
`,lE=x(F.button)`
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
`,cE=x.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,uE=x(F.button)`
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
`,dE=x(F.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,fE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),pE=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),hE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),s.jsx("path",{d:"M12 8v13"}),s.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),s.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),mE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M8 12h8"})]}),gE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),s.jsx("polyline",{points:"16 7 22 7 22 13"})]}),vE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Su=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),El={type:"spring",stiffness:300,damping:30,mass:.8},xE={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:El}},yE={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...El},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...El},opacity:{duration:.1}}}},wE={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:El},exit:{opacity:0,x:-20,transition:{duration:.15}}};function ju(e){const t=e.replace(/[^\d]/g,"");return t?Er(parseInt(t)):""}function ds(e){return parseInt(e.replace(/,/g,""))||0}const bE=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=b.useState(""),[o,a]=b.useState("50"),[l,c]=b.useState("percentage"),[u,d]=b.useState("none"),[f,p]=b.useState(""),[m,y]=b.useState([]),[w,S]=b.useState(""),[g,h]=b.useState(!1),v=b.useRef(!1);b.useEffect(()=>{const D=o2();D&&(i(Er(D.baseSalary)),a(D.basicPercentage.toString()),c(D.pfType),d(D.bonusType),p(D.bonusValue>0?D.bonusType==="amount"?Er(D.bonusValue):D.bonusValue.toString():""),y(D.additionalDeductions.map(L=>({name:L.name,amount:Er(L.amount)}))),S(D.hikePercentage>0?D.hikePercentage.toString():"")),h(!0)},[]),b.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{T()},100))},[g,n,r]);const j=D=>{i(ju(D))},k=D=>{p(ju(D))},C=(D,L)=>{const M=[...m];M[D].amount=ju(L),y(M)},P=()=>{y([...m,{name:"",amount:""}])},E=D=>{y(m.filter((L,M)=>M!==D))},R=(D,L)=>{const M=[...m];M[D].name=L,y(M)},T=()=>{const D={baseSalary:ds(r),basicPercentage:parseFloat(o)||50,calculatePF:!0,pfType:l,bonusType:u,bonusValue:u==="amount"?ds(f):parseFloat(f)||0,additionalDeductions:m.filter(L=>L.name&&L.amount).map(L=>({name:L.name,amount:ds(L.amount)})),hikePercentage:parseFloat(w)||0};nE(D),e(D)},_=()=>{i(""),a("50"),c("percentage"),d("none"),p(""),y([]),S(""),rE(),t==null||t()},z=ds(r)>0,U=r||m.length>0||u!=="none"||w;return s.jsxs(oE,{variants:xE,initial:"hidden",animate:"visible",children:[s.jsxs(vo,{children:[s.jsxs(xo,{children:[s.jsx(yo,{$color:"#10b981",children:s.jsx(fE,{})}),s.jsx(wo,{children:"Salary Details"})]}),s.jsxs(aE,{children:[s.jsxs(Wr,{children:[s.jsx(R0,{children:"Yearly CTC *"}),s.jsx(xu,{children:s.jsx(or,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:D=>j(D.target.value)})})]}),s.jsxs(Wr,{children:[s.jsx(R0,{children:"Basic %"}),s.jsx(yu,{children:s.jsx(or,{type:"number",inputMode:"numeric",placeholder:"50",value:o,onChange:D=>a(D.target.value),min:"0",max:"100"})})]})]})]}),s.jsxs(vo,{children:[s.jsxs(xo,{children:[s.jsx(yo,{$color:"#3b82f6",children:s.jsx(pE,{})}),s.jsx(wo,{children:"Provident Fund"})]}),s.jsxs($0,{children:[s.jsx(bo,{$active:l==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),s.jsx(bo,{$active:l==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),s.jsxs(vo,{children:[s.jsxs(xo,{children:[s.jsx(yo,{$color:"#f59e0b",children:s.jsx(hE,{})}),s.jsx(wo,{children:"Bonus (Optional)"})]}),s.jsxs($0,{children:[s.jsx(bo,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),s.jsx(bo,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),s.jsx(bo,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),s.jsx(_e,{initial:!1,children:u!=="none"&&s.jsx(F.div,{initial:"hidden",animate:"visible",exit:"exit",variants:yE,style:{overflow:"hidden",marginTop:"12px"},children:s.jsxs(wu,{children:[s.jsx(Wr,{style:{flex:1},children:u==="percentage"?s.jsx(yu,{children:s.jsx(or,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:D=>p(D.target.value)})}):s.jsx(xu,{children:s.jsx(or,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:D=>k(D.target.value)})})}),s.jsx(_e,{children:f&&s.jsx(bu,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(Su,{})})})]})},"bonus-input")})]}),s.jsxs(vo,{children:[s.jsxs(xo,{children:[s.jsx(yo,{$color:"#ec4899",children:s.jsx(mE,{})}),s.jsx(wo,{children:"Monthly Deductions"})]}),s.jsxs(sE,{children:[s.jsx(_e,{mode:"popLayout",children:m.map((D,L)=>s.jsxs(wu,{variants:wE,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[s.jsx(Wr,{style:{flex:1},children:s.jsx(or,{type:"text",placeholder:"Name (e.g., Cab)",value:D.name,onChange:M=>R(L,M.target.value)})}),s.jsx(Wr,{style:{flex:1},children:s.jsx(xu,{children:s.jsx(or,{type:"text",inputMode:"numeric",placeholder:"Amount",value:D.amount,onChange:M=>C(L,M.target.value)})})}),s.jsx(bu,{onClick:()=>E(L),whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(Su,{})})]},L))}),s.jsxs(lE,{onClick:P,whileHover:{scale:1.01},whileTap:{scale:.99},children:[s.jsx(vE,{}),"Add Deduction"]})]})]}),s.jsxs(vo,{children:[s.jsxs(xo,{children:[s.jsx(yo,{$color:"#8b5cf6",children:s.jsx(gE,{})}),s.jsx(wo,{children:"Hike / Appraisal"})]}),s.jsxs(wu,{children:[s.jsx(Wr,{style:{flex:1},children:s.jsx(yu,{children:s.jsx(or,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:w,onChange:D=>S(D.target.value),min:"0",max:"200"})})}),s.jsx(_e,{children:w&&s.jsx(bu,{onClick:()=>S(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(Su,{})})})]})]}),s.jsxs(cE,{children:[s.jsx(uE,{onClick:T,disabled:!z,whileHover:z?{scale:1.02}:{},whileTap:z?{scale:.98}:{},children:"Calculate Tax"}),s.jsx(_e,{children:U&&s.jsx(dE,{onClick:_,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},SE=x(F.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ar=x(F.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,sr=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,lr=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,cr=x.div`
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
`,ur=x.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,dr=x.div`
  padding: 16px;
`,So=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Yt=x.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:e})=>e?`${e}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:e})=>e||"var(--accent)"};
`,ku=x(F.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:e})=>e||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Cu=x.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,Tu=x.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,Ur=x.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,jE=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Hr=x.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,Yr=x.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,Gr=x.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Kr=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,sn=x.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,De=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,Ee=x.span`
  font-size: 14px;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  color: ${({$bold:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,Z=x.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"#10b981":t?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,it=x.div`
  text-align: right;
  flex-shrink: 0;
`,ot=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,kE=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,N0=x(F.div)`
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
`,kn=x.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"#10b981":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,CE=x(F.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: 2px;
  margin-top: 4px;
`,TE=x.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,PE=x(F.div)`
  height: 100%;
  background: ${({$color:e})=>e};
`,DE=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,EE=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,AE=x.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,_E=x.span`
  font-size: 12px;
  color: var(--text-secondary);
`,LE=x.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,jo=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,Gt=x.div`
  padding: 14px;
  background: ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Kt=x.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,qt=x.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,ko=x.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,F0=x(F.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,B0=x.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,IE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),ME=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),s.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),s.jsx("path",{d:"M12 17.5v-11"})]}),OE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),s.jsx("path",{d:"M3 9h18"}),s.jsx("path",{d:"M9 21V9"})]}),RE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),s.jsx("path",{d:"M12 8v13"}),s.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),s.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),V0=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),s.jsx("polyline",{points:"16 7 22 7 22 13"})]}),$E=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),NE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},fr={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},FE=({breakdown:e})=>{const[t,n]=b.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"#10b981":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",o=Math.max(...e.slabs.map(p=>p.taxInSlab),1),l=(()=>{const p=t==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:e.netSalaryYearly*p,color:"#10b981"},{label:"Tax",value:e.totalTax*p,color:"#4361A5"},{label:"PF",value:e.employeePF*p,color:"#3BB4B1"}];return e.totalAdditionalDeductions>0&&m.push({label:"Other",value:e.totalAdditionalDeductions*p,color:"#7BA7D9"}),m})(),c=l.reduce((p,m)=>p+m.value,0),u=[];e.surchargeApplicable&&u.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&u.push(`<strong>Section 87A rebate</strong> of ${Y(e.rebate87A)} applied`),e.effectiveTaxRate>0&&u.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const d=!!e.postHike,f=e.bonus>0;return s.jsxs(SE,{variants:NE,initial:"hidden",animate:"visible",children:[d&&s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#3b82f6",children:s.jsx(V0,{})}),s.jsx(ur,{children:"Base Salary (CTC)"})]}),s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),s.jsx(dr,{children:s.jsxs(jo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current"}),s.jsx(qt,{children:Y(e.baseSalary)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike"}),s.jsx(qt,{children:Y(e.postHike.baseSalary)}),s.jsxs(ko,{children:["+",Y(e.postHike.baseSalary-e.baseSalary)]})]})]})})]}),s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#10b981",children:s.jsx(IE,{})}),s.jsx(ur,{children:"In-Hand Salary"})]}),s.jsxs(So,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(Tu,{children:[s.jsx(Ur,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Ur,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsx(dr,{children:d?s.jsxs(jo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current"}),s.jsx(qt,{children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsxs(Kt,{children:["After ",e.hikePercentage,"% Hike"]}),s.jsx(qt,{children:K(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),s.jsxs(ko,{children:["+",Y(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(ku,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),s.jsxs(Cu,{children:[t==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),f&&s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#f59e0b",children:s.jsx(RE,{})}),s.jsx(ur,{children:"Bonus"})]}),d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),s.jsxs(dr,{children:[d?s.jsxs(s.Fragment,{children:[s.jsxs(jo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current Gross"}),s.jsx(qt,{children:Y(e.bonus)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike Gross"}),s.jsx(qt,{children:Y(e.postHike.bonus)}),s.jsxs(ko,{children:["+",Y(e.postHike.bonus-e.bonus)]})]})]}),s.jsx(sn,{}),s.jsxs(jo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current In-Hand"}),s.jsx(qt,{children:K(e.bonusAfterTax)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike In-Hand"}),s.jsx(qt,{children:K(e.postHike.bonusAfterTax)}),s.jsxs(ko,{children:["+",Y(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(ku,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:Y(e.bonus)}),s.jsx(Cu,{children:"Gross Bonus (before tax)"}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsxs(Ee,{children:["Tax Deducted (",e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess)"]}),s.jsxs(Z,{$negative:!0,children:["-",K(e.bonusTaxAmount)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"In-Hand Bonus"}),s.jsx(Z,{$highlight:!0,children:K(e.bonusAfterTax)})]})]}),s.jsx(sn,{}),s.jsx(F0,{style:{borderLeftColor:"#f59e0b"},children:s.jsxs(B0,{children:["Bonus is taxed at your ",s.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]})]}),f&&s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#8b5cf6",children:s.jsx(V0,{})}),s.jsx(ur,{children:"Total Combined Income"})]}),s.jsxs(So,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsx(Yt,{children:"Yearly"})]})]}),s.jsxs(dr,{children:[d?s.jsxs(jo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current Total"}),s.jsx(qt,{children:K(e.totalIncomeYearly)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike Total"}),s.jsx(qt,{children:K(e.postHike.totalIncomeYearly)}),s.jsxs(ko,{children:["+",Y(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(ku,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:K(e.totalIncomeYearly)}),s.jsx(Cu,{children:"Base salary + Bonus (after tax)"})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Base In-Hand (Yearly)"}),d?s.jsxs(it,{children:[s.jsx(Z,{children:K(e.netSalaryYearly)}),s.jsxs(ot,{$positive:!0,children:["→ ",K(e.postHike.netSalaryYearly)]})]}):s.jsx(Z,{children:K(e.netSalaryYearly)})]}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Bonus In-Hand"}),d?s.jsxs(it,{children:[s.jsx(Z,{children:K(e.bonusAfterTax)}),s.jsxs(ot,{$positive:!0,children:["→ ",K(e.postHike.bonusAfterTax)]})]}):s.jsx(Z,{children:K(e.bonusAfterTax)})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Total Combined"}),d?s.jsxs(it,{children:[s.jsx(Z,{$highlight:!0,children:K(e.totalIncomeYearly)}),s.jsxs(ot,{$positive:!0,children:["→ ",K(e.postHike.totalIncomeYearly)]})]}):s.jsx(Z,{$highlight:!0,children:K(e.totalIncomeYearly)})]})]})]}),s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#ec4899",children:s.jsx(OE,{})}),s.jsx(ur,{children:"Summary"})]}),s.jsxs(So,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(Tu,{children:[s.jsx(Ur,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Ur,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsxs(dr,{children:[s.jsxs(jE,{children:[s.jsxs(Hr,{children:[s.jsx(Yr,{children:"Gross Salary"}),s.jsx(Gr,{children:Y(e.grossSalary*r)}),d&&s.jsxs(Kr,{$positive:!0,children:["→ ",Y(e.postHike.grossSalary*r)]})]}),s.jsxs(Hr,{children:[s.jsx(Yr,{children:"Total Tax"}),s.jsx(Gr,{children:K(e.totalTax*r)}),d&&s.jsxs(Kr,{children:["→ ",K(e.postHike.totalTax*r)]})]}),s.jsxs(Hr,{children:[s.jsx(Yr,{children:"Employee PF"}),s.jsx(Gr,{children:Y(e.employeePF*r)}),d&&s.jsxs(Kr,{$positive:!0,children:["→ ",Y(e.postHike.employeePF*r)]})]}),s.jsxs(Hr,{children:[s.jsx(Yr,{children:"Employer PF"}),s.jsx(Gr,{children:Y(e.employerPF*r)}),d&&s.jsxs(Kr,{$positive:!0,children:["→ ",Y(e.postHike.employerPF*r)]})]}),s.jsxs(Hr,{children:[s.jsx(Yr,{children:"Total PF"}),s.jsx(Gr,{children:Y((e.employeePF+e.employerPF)*r)}),d&&s.jsxs(Kr,{$positive:!0,children:["→ ",Y((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),s.jsxs(Hr,{children:[s.jsx(Yr,{children:"Eff. Tax Rate"}),s.jsxs(Gr,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),d&&s.jsxs(Kr,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),s.jsx(sn,{}),s.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",t==="monthly"?"Monthly":"Yearly",")"]}),s.jsx(TE,{children:l.map((p,m)=>s.jsx(PE,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),s.jsx(DE,{children:l.map((p,m)=>s.jsxs(EE,{children:[s.jsx(AE,{$color:p.color}),s.jsx(_E,{children:p.label}),s.jsx(LE,{children:Y(p.value)})]},m))}),u.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(sn,{}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:u.map((p,m)=>s.jsx(F0,{children:s.jsx(B0,{dangerouslySetInnerHTML:{__html:p}})},m))})]})]})]}),s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#10b981",children:s.jsx($E,{})}),s.jsx(ur,{children:"Breakdown"})]}),s.jsxs(So,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(Tu,{children:[s.jsx(Ur,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Ur,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsxs(dr,{children:[s.jsxs(De,{children:[s.jsx(Ee,{children:"Base Salary (CTC)"}),d?s.jsxs(it,{children:[s.jsx(Z,{children:Y(e.baseSalary*r)}),s.jsxs(ot,{$positive:!0,children:["→ ",Y(e.postHike.baseSalary*r)]})]}):s.jsx(Z,{children:Y(e.baseSalary*r)})]}),e.employerPF>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Employer PF"}),d?s.jsxs(it,{children:[s.jsxs(Z,{$negative:!0,children:["-",Y(e.employerPF*r)]}),s.jsxs(ot,{children:["→ -",Y(e.postHike.employerPF*r)]})]}):s.jsxs(Z,{$negative:!0,children:["-",Y(e.employerPF*r)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Gross Salary"}),d?s.jsxs(it,{children:[s.jsx(Z,{children:Y(e.grossSalary*r)}),s.jsxs(ot,{$positive:!0,children:["→ ",Y(e.postHike.grossSalary*r)]})]}):s.jsx(Z,{children:Y(e.grossSalary*r)})]}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Standard Deduction"}),s.jsxs(Z,{$negative:!0,children:["-",Y(e.standardDeduction*r)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Taxable Income"}),d?s.jsxs(it,{children:[s.jsx(Z,{children:Y(e.taxableIncome*r)}),s.jsxs(ot,{$positive:!0,children:["→ ",Y(e.postHike.taxableIncome*r)]})]}):s.jsx(Z,{children:Y(e.taxableIncome*r)})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Income Tax"}),d?s.jsxs(it,{children:[s.jsxs(Z,{$negative:!0,children:["-",K(e.totalTax*r)]}),s.jsxs(ot,{children:["→ -",K(e.postHike.totalTax*r)]})]}):s.jsxs(Z,{$negative:!0,children:["-",K(e.totalTax*r)]})]}),e.employeePF>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Employee PF"}),d?s.jsxs(it,{children:[s.jsxs(Z,{$negative:!0,children:["-",Y(e.employeePF*r)]}),s.jsxs(ot,{children:["→ -",Y(e.postHike.employeePF*r)]})]}):s.jsxs(Z,{$negative:!0,children:["-",Y(e.employeePF*r)]})]}),e.additionalDeductions.map((p,m)=>s.jsxs(De,{children:[s.jsxs(Ee,{children:["Less: ",p.name]}),s.jsxs(Z,{$negative:!0,children:["-",Y(p.amount*r)]})]},m)),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsxs(Ee,{$bold:!0,children:["Net In-Hand (",t==="monthly"?"Monthly":"Yearly",")"]}),d?s.jsxs(it,{children:[s.jsx(Z,{$highlight:!0,children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)}),s.jsxs(ot,{$positive:!0,children:["→ ",K(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)]})]}):s.jsx(Z,{$highlight:!0,children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]})]})]}),s.jsxs(ar,{variants:fr,children:[s.jsxs(sr,{children:[s.jsxs(lr,{children:[s.jsx(cr,{$color:"#3b82f6",children:s.jsx(ME,{})}),s.jsx(ur,{children:"Tax Slabs"})]}),s.jsxs(So,{children:[s.jsx(Yt,{children:iE.financialYear}),d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]})]}),s.jsxs(dr,{children:[s.jsxs(kE,{children:[s.jsxs(N0,{$header:!0,children:[s.jsx(kn,{children:"Slab"}),s.jsx(kn,{$align:"center",children:"Rate"}),s.jsx(kn,{$align:"right",children:"Amount"}),s.jsx(kn,{$align:"right",children:"Tax"})]}),s.jsx(_e,{children:e.slabs.map((p,m)=>s.jsxs(N0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[s.jsxs(kn,{children:[M0(p.from)," - ",M0(p.to),p.taxableInSlab>0&&s.jsx(CE,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/o*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),s.jsxs(kn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),s.jsx(kn,{$align:"right",$muted:p.taxableInSlab===0,children:p.taxableInSlab>0?Y(p.taxableInSlab):"-"}),s.jsx(kn,{$align:"right",$muted:p.taxInSlab===0,children:p.taxInSlab>0?Y(p.taxInSlab):"-"})]},m))})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Tax Before Surcharge"}),d?s.jsxs(it,{children:[s.jsx(Z,{children:K(e.taxBeforeSurcharge)}),s.jsxs(ot,{children:["→ ",K(e.postHike.taxBeforeSurcharge)]})]}):s.jsx(Z,{children:K(e.taxBeforeSurcharge)})]}),e.rebate87A>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Section 87A Rebate"}),s.jsxs(Z,{$negative:!0,children:["-",Y(e.rebate87A)]})]}),e.surchargeApplicable&&s.jsxs(De,{children:[s.jsxs(Ee,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&s.jsx(Yt,{$color:"#f59e0b",children:"Marginal Relief"})]}),d&&e.postHike.surchargeApplicable?s.jsxs(it,{children:[s.jsx(Z,{children:K(e.surchargeAmount)}),s.jsxs(ot,{children:["→ ",K(e.postHike.surchargeAmount)]})]}):s.jsx(Z,{children:K(e.surchargeAmount)})]}),s.jsxs(De,{children:[s.jsxs(Ee,{children:["Cess (",e.cessRate,"%)"]}),d?s.jsxs(it,{children:[s.jsx(Z,{children:K(e.cess)}),s.jsxs(ot,{children:["→ ",K(e.postHike.cess)]})]}):s.jsx(Z,{children:K(e.cess)})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Total Tax"}),d?s.jsxs(it,{children:[s.jsx(Z,{$highlight:!0,children:K(e.totalTax)}),s.jsxs(ot,{children:["→ ",K(e.postHike.totalTax)]})]}):s.jsx(Z,{$highlight:!0,children:K(e.totalTax)})]})]})]})]})},BE=x(F.div)`
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
`,VE=x.div`
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
`,zE=x(F.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,WE=x(F.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,UE={type:"spring",stiffness:300,damping:30,mass:.8},HE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},z0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:UE}},YE=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(!1);b.useEffect(()=>{const a=o2();a&&a.baseSalary>0&&r(!0)},[]);const i=b.useCallback(a=>{const l=tE(a);t(l),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),o=b.useCallback(()=>{t(null)},[]);return s.jsx(BE,{variants:HE,initial:"hidden",animate:"visible",children:s.jsx(i2,{$maxWidth:"wide",children:s.jsxs(VE,{children:[s.jsx(zE,{variants:z0,children:s.jsx(bE,{onCalculate:i,onReset:o,autoCalculate:n})}),s.jsx(WE,{id:"results",variants:z0,children:e&&s.jsx(FE,{breakdown:e},"results")})]})})})},Hn=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"},{id:"liquid-fund",name:"Liquid Fund",type:"liquid_fund",bank:"hdfc",color:"#8b5cf6"}],a2="expense-manager-transactions",s2="expense-manager-initial-balances",l2="expense-manager-initial-cc-bills",c2="expense-manager-cc-limits";function dh(e,t){return e===void 0?{amount:0,type:"billed",setupDate:t}:typeof e=="number"?{amount:e,type:"billed",setupDate:t}:e}const u2={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function Pu(e){localStorage.setItem(a2,JSON.stringify(e))}function GE(){const e=localStorage.getItem(a2);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function W0(e){localStorage.setItem(s2,JSON.stringify(e))}function KE(){const e=localStorage.getItem(s2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function U0(e){localStorage.setItem(l2,JSON.stringify(e))}function qE(){const e=localStorage.getItem(l2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function H0(e){localStorage.setItem(c2,JSON.stringify(e))}function QE(){const e=localStorage.getItem(c2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function Vt(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function d2(e){return new Date(e+"T00:00:00")}function XE(e){return e===Vt(new Date)}function ZE(e,t){if(!e.statementDate)return"";const n=d2(t),r=n.getFullYear(),i=n.getMonth(),o=n.getDate();let a=r,l=i;o<e.statementDate&&(l-=1,l<0&&(l=11,a-=1));const c=new Date(a,l,e.statementDate);return Vt(c)}function Y0(e,t){const n=u2[e];if(!n)return"";const r=d2(t),i=r.getFullYear(),o=r.getMonth(),a=r.getDate();let l=i,c=o;a<n&&(c-=1,c<0&&(c=11,l-=1));const u=new Date(l,c,n);return Vt(u)}function JE(e,t,n,r){const i=Y0(e.id,n),o=t.filter(h=>h.date<=n&&h.accountId===e.id),a=o.filter(h=>h.type==="credit_card_spend"&&h.date<i).reduce((h,v)=>h+v.amount,0),l=o.filter(h=>h.type==="credit_card_spend"&&h.date>=i).reduce((h,v)=>h+v.amount,0),c=o.filter(h=>h.type==="cc_payment").reduce((h,v)=>h+v.amount,0),u=dh(r[e.id],n);let d=0,f=0;if(u.amount>0){const h=Y0(e.id,u.setupDate),v=i===h,j=i>h&&new Date(i).getTime()-new Date(h).getTime()<45*24*60*60*1e3;u.type==="unbilled"?v?f=u.amount:j&&(d=u.amount):(v||j)&&(d=u.amount)}const p=l+f,m=a+d,y=p;let w=m,S=y,g=c;if(g>0){const h=Math.min(g,w);w-=h,g-=h}return g>0&&(S=Math.max(0,S-g)),{account:e,billDue:w,unbilled:S,totalOutstanding:w+S,cycleStart:i,cycleSpending:p}}function eA(e,t,n,r,i={}){const o=t.filter(l=>l.date<=n&&(l.accountId===e.id||l.linkedAccountId===e.id));let a=0;if(e.type==="bank"){a=r[e.id]||0;for(const l of o)l.accountId===e.id&&(l.type==="bank_credit"?a+=l.amount:l.type==="bank_debit"&&(a-=l.amount)),l.linkedAccountId===e.id&&l.type==="cc_payment"&&(a-=l.amount),l.linkedAccountId===e.id&&l.type==="liquid_fund_credit"&&(a-=l.amount),l.linkedAccountId===e.id&&l.type==="liquid_fund_debit"&&(a+=l.amount);return{account:e,balance:a}}else if(e.type==="liquid_fund"){a=r[e.id]||0;for(const l of o)l.accountId===e.id&&(l.type==="liquid_fund_credit"?a+=l.amount:l.type==="liquid_fund_debit"&&(a-=l.amount));return{account:e,balance:a}}else{a=-dh(i[e.id],n).amount;for(const p of o)p.accountId===e.id&&(p.type==="credit_card_spend"?a-=p.amount:p.type==="cc_payment"&&(a+=p.amount));const u=ZE(e,n),f=o.filter(p=>p.date>u&&p.accountId===e.id&&p.type==="credit_card_spend").reduce((p,m)=>p+m.amount,0);return{account:e,balance:a,pendingBill:f,totalOutstanding:Math.abs(Math.min(0,a))}}}function tA(e,t,n,r={}){return Hn.map(i=>eA(i,e,t,n,r))}function nA(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function rA(e,t,n,r,i,o){return{id:nA(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:o,createdAt:new Date().toISOString()}}function Ye(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function f2(e){return Hn.find(t=>t.id===e)}function p2(){return Hn.filter(e=>e.type==="bank")}function fh(){return Hn.filter(e=>e.type==="credit_card")}function h2(){return Hn.find(e=>e.type==="liquid_fund")}function iA(e,t,n,r={}){const i={version:"1.1",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n,ccLimits:r};return JSON.stringify(i,null,2)}function oA(e,t,n,r={}){const i=iA(e,t,n,r),o=new Blob([i],{type:"application/json"}),a=URL.createObjectURL(o),l=document.createElement("a"),c=new Date().toISOString().split("T")[0];l.href=a,l.download=`expense-backup-${c}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}function aA(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null||t.ccLimits!==void 0&&(typeof t.ccLimits!="object"||t.ccLimits===null))return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function sA(e){try{const t=JSON.parse(e);return aA(t)?t:null}catch{return null}}function m2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=m2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function lc(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=m2(e))&&(r&&(r+=" "),r+=t);return r}const lA=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),o=Object.getOwnPropertyDescriptor(t,n);!cA(i,o)&&r||Object.defineProperty(e,n,o)},cA=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},uA=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},dA=(e,t)=>`/* Wrapped ${e}*/
${t}`,fA=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),pA=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),hA=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=dA.bind(null,r,t.toString());Object.defineProperty(i,"name",pA);const{writable:o,enumerable:a,configurable:l}=fA;Object.defineProperty(e,"toString",{value:i,writable:o,enumerable:a,configurable:l})};function mA(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))lA(e,t,i,n);return uA(e,t),hA(e,t,r),e}const fs=2147483647,gA=new WeakMap,Du=new WeakMap,vA=new WeakMap;function xA(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function g2(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>fs)throw new TypeError(`The \`maxAge\` option cannot exceed ${fs}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...o){var d;const a=t?t(o):o[0],l=xA(n,a);if(l)return l.data;const c=e.apply(this,o),u=typeof r=="function"?r(...o):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>fs)throw new TypeError(`The \`maxAge\` function result cannot exceed ${fs}.`)}if(n.set(a,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var m;n.delete(a),(m=Du.get(i))==null||m.delete(f)},u);(d=f.unref)==null||d.call(f);const p=Du.get(i)??new Set;p.add(f),Du.set(i,p)}return c};return mA(i,e,{ignoreNonConfigurable:!0}),gA.set(i,n),vA.set(i,t??(o=>o[0])),i}function yA(e){return typeof e=="string"}function wA(e,t,n){return n.indexOf(e)===t}function bA(e){return e.toLowerCase()===e}function G0(e){return e.indexOf(",")===-1?e:e.split(",")}function of(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return of(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return of(n)}if(e.indexOf("-")===-1||!bA(e))return e;var i=e.split("-"),o=i[0],a=i[1],l=a===void 0?"":a;return"".concat(o,"-").concat(l.toUpperCase())}function SA(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,o=i===void 0?"en-US":i,a=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],c=[],u=0,d=l;u<d.length;u++){var f=d[u];c=c.concat(G0(f))}var p=navigator.language,m=p&&G0(p);a=a.concat(c,m)}return r&&a.push(o),a.filter(yA).map(of).filter(wA)}var jA=g2(SA,{cacheKey:JSON.stringify});function kA(e){return jA(e)[0]||null}var v2=g2(kA,{cacheKey:JSON.stringify});function Sn(e,t,n){return function(i,o=n){const a=e(i)+o;return t(a)}}function Ma(e){return function(n){return new Date(e(n).getTime()-1)}}function Oa(e,t){return function(r){return[e(r),t(r)]}}function de(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function nr(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function cc(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function io(e){const t=de(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const CA=Sn(de,io,-100),x2=Sn(de,io,100),ph=Ma(x2),TA=Sn(de,ph,-100),y2=Oa(io,ph);function rr(e){const t=de(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const w2=Sn(de,rr,-10),hh=Sn(de,rr,10),uc=Ma(hh),b2=Sn(de,uc,-10),S2=Oa(rr,uc);function oo(e){const t=de(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const j2=Sn(de,oo,-1),mh=Sn(de,oo,1),dc=Ma(mh),k2=Sn(de,dc,-1),PA=Oa(oo,dc);function gh(e,t){return function(r,i=t){const o=de(r),a=nr(r)+i,l=new Date;return l.setFullYear(o,a,1),l.setHours(0,0,0,0),e(l)}}function Fr(e){const t=de(e),n=nr(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const C2=gh(Fr,-1),vh=gh(Fr,1),Ra=Ma(vh),T2=gh(Ra,-1),DA=Oa(Fr,Ra);function EA(e,t){return function(r,i=t){const o=de(r),a=nr(r),l=cc(r)+i,c=new Date;return c.setFullYear(o,a,l),c.setHours(0,0,0,0),e(c)}}function $a(e){const t=de(e),n=nr(e),r=cc(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const AA=EA($a,1),xh=Ma(AA),_A=Oa($a,xh);function P2(e){return cc(Ra(e))}var Be={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},LA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},yh=[0,1,2,3,4,5,6],Eu=new Map;function IA(e){return function(n,r){var i=n||v2();Eu.has(i)||Eu.set(i,new Map);var o=Eu.get(i);return o.has(e)||o.set(e,new Intl.DateTimeFormat(i||void 0,e).format),o.get(e)(r)}}function MA(e){var t=new Date(e);return new Date(t.setHours(12))}function Br(e){return function(t,n){return IA(e)(t,MA(n))}}var OA={day:"numeric"},RA={day:"numeric",month:"long",year:"numeric"},$A={month:"long"},NA={month:"long",year:"numeric"},FA={weekday:"short"},BA={weekday:"long"},VA={year:"numeric"},zA=Br(OA),WA=Br(RA),UA=Br($A),D2=Br(NA),HA=Br(FA),YA=Br(BA),fc=Br(VA),GA=yh[0],KA=yh[5],K0=yh[6];function Sa(e,t){t===void 0&&(t=Be.ISO_8601);var n=e.getDay();switch(t){case Be.ISO_8601:return(n+6)%7;case Be.ISLAMIC:return(n+1)%7;case Be.HEBREW:case Be.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function qA(e){var t=io(e);return de(t)}function QA(e){var t=rr(e);return de(t)}function af(e,t){t===void 0&&(t=Be.ISO_8601);var n=de(e),r=nr(e),i=e.getDate()-Sa(e,t);return new Date(n,r,i)}function XA(e,t){t===void 0&&(t=Be.ISO_8601);var n=t===Be.GREGORY?Be.GREGORY:Be.ISO_8601,r=af(e,t),i=de(e)+1,o,a;do o=new Date(i,0,n===Be.ISO_8601?4:1),a=af(o,t),i-=1;while(e<a);return Math.round((r.getTime()-a.getTime())/(864e5*7))+1}function Ar(e,t){switch(e){case"century":return io(t);case"decade":return rr(t);case"year":return oo(t);case"month":return Fr(t);case"day":return $a(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ZA(e,t){switch(e){case"century":return CA(t);case"decade":return w2(t);case"year":return j2(t);case"month":return C2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function E2(e,t){switch(e){case"century":return x2(t);case"decade":return hh(t);case"year":return mh(t);case"month":return vh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function JA(e,t){switch(e){case"decade":return w2(t,-100);case"year":return j2(t,-10);case"month":return C2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function e_(e,t){switch(e){case"decade":return hh(t,100);case"year":return mh(t,10);case"month":return vh(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function A2(e,t){switch(e){case"century":return ph(t);case"decade":return uc(t);case"year":return dc(t);case"month":return Ra(t);case"day":return xh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function t_(e,t){switch(e){case"century":return TA(t);case"decade":return b2(t);case"year":return k2(t);case"month":return T2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function n_(e,t){switch(e){case"decade":return b2(t,-100);case"year":return k2(t,-10);case"month":return T2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function q0(e,t){switch(e){case"century":return y2(t);case"decade":return S2(t);case"year":return PA(t);case"month":return DA(t);case"day":return _A(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function r_(e,t,n){var r=[t,n].sort(function(i,o){return i.getTime()-o.getTime()});return[Ar(e,r[0]),A2(e,r[1])]}function _2(e,t,n){return n.map(function(r){return(t||fc)(e,r)}).join(" – ")}function i_(e,t,n){return _2(e,t,y2(n))}function L2(e,t,n){return _2(e,t,S2(n))}function o_(e){return e.getDay()===new Date().getDay()}function I2(e,t){t===void 0&&(t=Be.ISO_8601);var n=e.getDay();switch(t){case Be.ISLAMIC:case Be.HEBREW:return n===KA||n===K0;case Be.ISO_8601:case Be.GREGORY:return n===K0||n===GA;default:throw new Error("Unsupported calendar type.")}}var Qt="react-calendar__navigation";function a_(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?D2:r,o=e.formatYear,a=o===void 0?fc:o,l=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,m=e.navigationLabel,y=e.next2AriaLabel,w=y===void 0?"":y,S=e.next2Label,g=S===void 0?"»":S,h=e.nextAriaLabel,v=h===void 0?"":h,j=e.nextLabel,k=j===void 0?"›":j,C=e.prev2AriaLabel,P=C===void 0?"":C,E=e.prev2Label,R=E===void 0?"«":E,T=e.prevAriaLabel,_=T===void 0?"":T,N=e.prevLabel,z=N===void 0?"‹":N,U=e.setActiveStartDate,D=e.showDoubleView,L=e.view,M=e.views,A=M.indexOf(L)>0,O=L!=="century",$=ZA(L,t),V=O?JA(L,t):void 0,H=E2(L,t),re=O?e_(L,t):void 0,le=function(){if($.getFullYear()<0)return!0;var Pe=t_(L,t);return u&&u>=Pe}(),q=O&&function(){if(V.getFullYear()<0)return!0;var Pe=n_(L,t);return u&&u>=Pe}(),ce=c&&c<H,Re=O&&c&&c<re;function Xe(){U($,"prev")}function Te(){U(V,"prev2")}function Wt(){U(H,"next")}function wt(){U(re,"next2")}function $e(Pe){var ao=function(){switch(L){case"century":return i_(l,a,Pe);case"decade":return L2(l,a,Pe);case"year":return a(l,Pe);case"month":return i(l,Pe);default:throw new Error("Invalid view: ".concat(L,"."))}}();return m?m({date:Pe,label:ao,locale:l||v2()||void 0,view:L}):ao}function mc(){var Pe="".concat(Qt,"__label");return s.jsxs("button",{"aria-label":f,"aria-live":p,className:Pe,disabled:!A,onClick:n,style:{flexGrow:1},type:"button",children:[s.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--from"),children:$e(t)}),D?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"".concat(Pe,"__divider"),children:" – "}),s.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--to"),children:$e(H)})]}):null]})}return s.jsxs("div",{className:Qt,children:[R!==null&&O?s.jsx("button",{"aria-label":P,className:"".concat(Qt,"__arrow ").concat(Qt,"__prev2-button"),disabled:q,onClick:Te,type:"button",children:R}):null,z!==null&&s.jsx("button",{"aria-label":_,className:"".concat(Qt,"__arrow ").concat(Qt,"__prev-button"),disabled:le,onClick:Xe,type:"button",children:z}),mc(),k!==null&&s.jsx("button",{"aria-label":v,className:"".concat(Qt,"__arrow ").concat(Qt,"__next-button"),disabled:ce,onClick:Wt,type:"button",children:k}),g!==null&&O?s.jsx("button",{"aria-label":w,className:"".concat(Qt,"__arrow ").concat(Qt,"__next2-button"),disabled:Re,onClick:wt,type:"button",children:g}):null]})}var ki=function(){return ki=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ki.apply(this,arguments)},s_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Q0(e){return"".concat(e,"%")}function wh(e){var t=e.children,n=e.className,r=e.count,i=e.direction,o=e.offset,a=e.style,l=e.wrap,c=s_(e,["children","className","count","direction","offset","style","wrap"]);return s.jsx("div",ki({className:n,style:ki({display:"flex",flexDirection:i,flexWrap:l?"wrap":"nowrap"},a)},c,{children:b.Children.map(t,function(u,d){var f=o&&d===0?Q0(100*o/r):null;return b.cloneElement(u,ki(ki({},u.props),{style:{flexBasis:Q0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function l_(e,t,n){return t&&t>e?t:n&&n<e?n:e}function ja(e,t){return t[0]<=e&&t[1]>=e}function c_(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function M2(e,t){return ja(e[0],t)||ja(e[1],t)}function X0(e,t,n){var r=M2(t,e),i=[];if(r){i.push(n);var o=ja(e[0],t),a=ja(e[1],t);o&&i.push("".concat(n,"Start")),a&&i.push("".concat(n,"End")),o&&a&&i.push("".concat(n,"BothEnds"))}return i}function u_(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function d_(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",o=[i];if(!n)return o;var a=new Date,l=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return q0(m,n)}();if(ja(a,l)&&o.push("".concat(i,"--now")),!t||!u_(t))return o;var c=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return q0(m,t)}();c_(c,l)?o.push("".concat(i,"--active")):M2(c,l)&&o.push("".concat(i,"--hasActive"));var u=X0(c,l,"".concat(i,"--range"));o.push.apply(o,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=X0(f,l,"".concat(i,"--hover"));o.push.apply(o,p)}return o}function pc(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,o=e.dateType,a=e.end,l=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,m=e.value,y=e.valueType,w=[],S=d;S<=a;S+=p){var g=i(S);w.push(u({classes:d_({date:g,dateType:o,hover:l,value:m,valueType:y}),date:g}))}return s.jsx(wh,{className:t,count:r,offset:c,wrap:!0,children:w})}function hc(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,o=e.formatAbbr,a=e.locale,l=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,m=e.style,y=e.tileClassName,w=e.tileContent,S=e.tileDisabled,g=e.view,h=b.useMemo(function(){var j={activeStartDate:t,date:i,view:g};return typeof y=="function"?y(j):y},[t,i,y,g]),v=b.useMemo(function(){var j={activeStartDate:t,date:i,view:g};return typeof w=="function"?w(j):w},[t,i,w,g]);return s.jsxs("button",{className:lc(r,h),disabled:u&&d(u)>i||l&&c(l)<i||(S==null?void 0:S({activeStartDate:t,date:i,view:g})),onClick:f?function(j){return f(i,j)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:m,type:"button",children:[o?s.jsx("abbr",{"aria-label":o(a,i),children:n}):n,v]})}var sf=function(){return sf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sf.apply(this,arguments)},f_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Z0="react-calendar__century-view__decades__decade";function p_(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,o=i===void 0?fc:i,a=f_(e,["classes","currentCentury","formatYear"]),l=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(Z0),io(l).getFullYear()!==r&&u.push("".concat(Z0,"--neighboringCentury")),s.jsx(hc,sf({},a,{classes:u,maxDateTransform:uc,minDateTransform:rr,view:"century",children:L2(c,o,l)}))}var lf=function(){return lf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lf.apply(this,arguments)},J0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function h_(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,o=e.valueType,a=J0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=qA(t),c=l+(r?119:99);return s.jsx(pc,{className:"react-calendar__century-view__decades",dateTransform:rr,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=J0(u,["date"]);return s.jsx(p_,lf({},a,f,{activeStartDate:t,currentCentury:l,date:d}),d.getTime())},start:l,step:10,value:i,valueType:o})}var cf=function(){return cf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cf.apply(this,arguments)};function m_(e){function t(){return s.jsx(h_,cf({},e))}return s.jsx("div",{className:"react-calendar__century-view",children:t()})}var uf=function(){return uf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uf.apply(this,arguments)},g_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},ev="react-calendar__decade-view__years__year";function v_(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,o=i===void 0?fc:i,a=g_(e,["classes","currentDecade","formatYear"]),l=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(ev),rr(l).getFullYear()!==r&&u.push("".concat(ev,"--neighboringDecade")),s.jsx(hc,uf({},a,{classes:u,maxDateTransform:dc,minDateTransform:oo,view:"decade",children:o(c,l)}))}var df=function(){return df=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},df.apply(this,arguments)},tv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function x_(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,o=e.valueType,a=tv(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=QA(t),c=l+(r?11:9);return s.jsx(pc,{className:"react-calendar__decade-view__years",dateTransform:oo,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=tv(u,["date"]);return s.jsx(v_,df({},a,f,{activeStartDate:t,currentDecade:l,date:d}),d.getTime())},start:l,value:i,valueType:o})}var ff=function(){return ff=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ff.apply(this,arguments)};function y_(e){function t(){return s.jsx(x_,ff({},e))}return s.jsx("div",{className:"react-calendar__decade-view",children:t()})}var pf=function(){return pf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pf.apply(this,arguments)},w_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},nv=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},b_="react-calendar__year-view__months__month";function S_(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?UA:r,o=e.formatMonthYear,a=o===void 0?D2:o,l=w_(e,["classes","formatMonth","formatMonthYear"]),c=l.date,u=l.locale;return s.jsx(hc,pf({},l,{classes:nv(nv([],n,!0),[b_],!1),formatAbbr:a,maxDateTransform:Ra,minDateTransform:Fr,view:"year",children:i(u,c)}))}var hf=function(){return hf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hf.apply(this,arguments)},rv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function j_(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,o=rv(e,["activeStartDate","hover","value","valueType"]),a=0,l=11,c=de(t);return s.jsx(pc,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),Fr(d)},dateType:"month",end:l,hover:n,renderTile:function(u){var d=u.date,f=rv(u,["date"]);return s.jsx(S_,hf({},o,f,{activeStartDate:t,date:d}),d.getTime())},start:a,value:r,valueType:i})}var mf=function(){return mf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mf.apply(this,arguments)};function k_(e){function t(){return s.jsx(j_,mf({},e))}return s.jsx("div",{className:"react-calendar__year-view",children:t()})}var gf=function(){return gf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gf.apply(this,arguments)},C_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Au="react-calendar__month-view__days__day";function T_(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,o=e.formatDay,a=o===void 0?zA:o,l=e.formatLongDate,c=l===void 0?WA:l,u=C_(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(Au),I2(d,t)&&p.push("".concat(Au,"--weekend")),d.getMonth()!==i&&p.push("".concat(Au,"--neighboringMonth")),s.jsx(hc,gf({},u,{classes:p,formatAbbr:c,maxDateTransform:xh,minDateTransform:$a,view:"month",children:a(f,d)}))}var vf=function(){return vf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},vf.apply(this,arguments)},iv=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function P_(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,a=e.value,l=e.valueType,c=iv(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=de(t),d=nr(t),f=i||o,p=Sa(t,n),m=f?0:p,y=(f?-p:0)+1,w=function(){if(i)return y+6*7-1;var S=P2(t);if(o){var g=new Date;g.setFullYear(u,d,S),g.setHours(0,0,0,0);var h=7-Sa(g,n)-1;return S+h}return S}();return s.jsx(pc,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var g=new Date;return g.setFullYear(u,d,S),$a(g)},dateType:"day",hover:r,end:w,renderTile:function(S){var g=S.date,h=iv(S,["date"]);return s.jsx(T_,vf({},c,h,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:m,start:y,value:a,valueType:l})}var O2="react-calendar__month-view__weekdays",_u="".concat(O2,"__weekday");function D_(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?HA:n,i=e.formatWeekday,o=i===void 0?YA:i,a=e.locale,l=e.onMouseLeave,c=new Date,u=Fr(c),d=de(u),f=nr(u),p=[],m=1;m<=7;m+=1){var y=new Date(d,f,m-Sa(u,t)),w=o(a,y);p.push(s.jsx("div",{className:lc(_u,o_(y)&&"".concat(_u,"--current"),I2(y,t)&&"".concat(_u,"--weekend")),children:s.jsx("abbr",{"aria-label":w,title:w,children:r(a,y).replace(".","")})},m))}return s.jsx(wh,{className:O2,count:7,onFocus:l,onMouseOver:l,children:p})}var Al=function(){return Al=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Al.apply(this,arguments)},ov=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},av="react-calendar__tile";function E_(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=s.jsx("span",{children:n});if(t){var i=e.date,o=e.onClickWeekNumber,a=e.weekNumber,l=ov(e,["date","onClickWeekNumber","weekNumber"]);return s.jsx("button",Al({},l,{className:av,onClick:function(c){return o(a,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var l=ov(e,["date","onClickWeekNumber","weekNumber"]);return s.jsx("div",Al({},l,{className:av,children:r}))}}function A_(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,o=e.showFixedNumberOfWeeks,a=function(){if(o)return 6;var u=P2(t),d=Sa(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),l=function(){for(var u=de(t),d=nr(t),f=cc(t),p=[],m=0;m<a;m+=1)p.push(af(new Date(u,d,f+m*7),n));return p}(),c=l.map(function(u){return XA(u,n)});return s.jsx(wh,{className:"react-calendar__month-view__weekNumbers",count:a,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=l[d];if(!f)throw new Error("date is not defined");return s.jsx(E_,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var xf=function(){return xf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xf.apply(this,arguments)},__=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function L_(e){if(e)for(var t=0,n=Object.entries(LA);t<n.length;t++){var r=n[t],i=r[0],o=r[1];if(o.includes(e))return i}return Be.ISO_8601}function I_(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,o=e.calendarType,a=o===void 0?L_(n):o,l=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=__(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return s.jsx(D_,{calendarType:a,formatShortWeekday:l,formatWeekday:c,locale:n,onMouseLeave:r})}function m(){return d?s.jsx(A_,{activeStartDate:t,calendarType:a,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function y(){return s.jsx(P_,xf({calendarType:a},f))}var w="react-calendar__month-view";return s.jsx("div",{className:lc(w,d?"".concat(w,"--weekNumbers"):""),children:s.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),s.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),y()]})]})})}var Ci=function(){return Ci=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ci.apply(this,arguments)},ps="react-calendar",Hs=["century","decade","year","month"],M_=["decade","year","month","day"],bh=new Date;bh.setFullYear(1,0,1);bh.setHours(0,0,0,0);var O_=new Date(864e13);function Oo(e){return e instanceof Date?e:new Date(e)}function R2(e,t){return Hs.slice(Hs.indexOf(e),Hs.indexOf(t)+1)}function R_(e,t,n){var r=R2(t,n);return r.indexOf(e)!==-1}function Sh(e,t,n){return e&&R_(e,t,n)?e:n}function $2(e){var t=Hs.indexOf(e);return M_[t]}function $_(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=Oo(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function N2(e,t){var n=e.value,r=e.minDate,i=e.maxDate,o=e.maxDetail,a=$_(n,t);if(!a)return null;var l=$2(o),c=function(){switch(t){case 0:return Ar(l,a);case 1:return A2(l,a);default:throw new Error("Invalid index value: ".concat(t))}}();return l_(c,r,i)}var jh=function(e){return N2(e,0)},F2=function(e){return N2(e,1)},N_=function(e){return[jh,F2].map(function(t){return t(e)})};function B2(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,o=e.value,a=e.view,l=Sh(a,i,n),c=jh({value:o,minDate:r,maxDate:t,maxDetail:n})||new Date;return Ar(l,c)}function F_(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,o=e.maxDate,a=e.maxDetail,l=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=Sh(d,c,a),p=t||n;return p?Ar(f,p):B2({maxDate:o,maxDetail:a,minDate:l,minDetail:c,value:u||r,view:d||i})}function Lu(e){return e&&(!Array.isArray(e)||e.length===1)}function hs(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var B_=b.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,o=t.calendarType,a=t.className,l=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,m=t.formatMonthYear,y=t.formatShortWeekday,w=t.formatWeekday,S=t.formatYear,g=t.goToRangeStartOnSelect,h=g===void 0?!0:g,v=t.inputRef,j=t.locale,k=t.maxDate,C=k===void 0?O_:k,P=t.maxDetail,E=P===void 0?"month":P,R=t.minDate,T=R===void 0?bh:R,_=t.minDetail,N=_===void 0?"century":_,z=t.navigationAriaLabel,U=t.navigationAriaLive,D=t.navigationLabel,L=t.next2AriaLabel,M=t.next2Label,A=t.nextAriaLabel,O=t.nextLabel,$=t.onActiveStartDateChange,V=t.onChange,H=t.onClickDay,re=t.onClickDecade,le=t.onClickMonth,q=t.onClickWeekNumber,ce=t.onClickYear,Re=t.onDrillDown,Xe=t.onDrillUp,Te=t.onViewChange,Wt=t.prev2AriaLabel,wt=t.prev2Label,$e=t.prevAriaLabel,mc=t.prevLabel,Pe=t.returnValue,ao=Pe===void 0?"start":Pe,bt=t.selectRange,Na=t.showDoubleView,Th=t.showFixedNumberOfWeeks,Ph=t.showNavigation,H2=Ph===void 0?!0:Ph,Y2=t.showNeighboringCentury,G2=t.showNeighboringDecade,Dh=t.showNeighboringMonth,K2=Dh===void 0?!0:Dh,q2=t.showWeekNumbers,Q2=t.tileClassName,X2=t.tileContent,Z2=t.tileDisabled,gc=t.value,Eh=t.view,Ah=b.useState(l),J2=Ah[0],Fa=Ah[1],_h=b.useState(null),eb=_h[0],Lh=_h[1],Ih=b.useState(Array.isArray(c)?c.map(function(X){return X!==null?Oo(X):null}):c!=null?Oo(c):null),vc=Ih[0],tb=Ih[1],Mh=b.useState(u),nb=Mh[0],Oh=Mh[1],nt=r||J2||F_({activeStartDate:r,defaultActiveStartDate:l,defaultValue:c,defaultView:u,maxDate:C,maxDetail:E,minDate:T,minDetail:N,value:gc,view:Eh}),rt=function(){var X=function(){return bt&&Lu(vc)?vc:gc!==void 0?gc:vc}();return X?Array.isArray(X)?X.map(function(ve){return ve!==null?Oo(ve):null}):X!==null?Oo(X):null:null}(),Ba=$2(E),fe=Sh(Eh||nb,N,E),Ut=R2(N,E),rb=bt?eb:null,xc=Ut.indexOf(fe)<Ut.length-1,Rh=Ut.indexOf(fe)>0,$h=b.useCallback(function(X){var ve=function(){switch(ao){case"start":return jh;case"end":return F2;case"range":return N_;default:throw new Error("Invalid returnValue.")}}();return ve({maxDate:C,maxDetail:E,minDate:T,value:X})},[C,E,T,ao]),yc=b.useCallback(function(X,ve){Fa(X);var je={action:ve,activeStartDate:X,value:rt,view:fe};$&&!hs(nt,X)&&$(je)},[nt,$,rt,fe]),Va=b.useCallback(function(X,ve){var je=function(){switch(fe){case"century":return re;case"decade":return ce;case"year":return le;case"month":return H;default:throw new Error("Invalid view: ".concat(fe,"."))}}();je&&je(X,ve)},[H,re,le,ce,fe]),wc=b.useCallback(function(X,ve){if(xc){Va(X,ve);var je=Ut[Ut.indexOf(fe)+1];if(!je)throw new Error("Attempted to drill down from the lowest view.");Fa(X),Oh(je);var _t={action:"drillDown",activeStartDate:X,value:rt,view:je};$&&!hs(nt,X)&&$(_t),Te&&fe!==je&&Te(_t),Re&&Re(_t)}},[nt,xc,$,Va,Re,Te,rt,fe,Ut]),bc=b.useCallback(function(){if(Rh){var X=Ut[Ut.indexOf(fe)-1];if(!X)throw new Error("Attempted to drill up from the highest view.");var ve=Ar(X,nt);Fa(ve),Oh(X);var je={action:"drillUp",activeStartDate:ve,value:rt,view:X};$&&!hs(nt,ve)&&$(je),Te&&fe!==X&&Te(je),Xe&&Xe(je)}},[nt,Rh,$,Xe,Te,rt,fe,Ut]),Sc=b.useCallback(function(X,ve){var je=rt;Va(X,ve);var _t=bt&&!Lu(je),Lt;if(bt)if(_t)Lt=Ar(Ba,X);else{if(!je)throw new Error("previousValue is required");if(Array.isArray(je))throw new Error("previousValue must not be an array");Lt=r_(Ba,je,X)}else Lt=$h(X);var kc=!bt||_t||h?B2({maxDate:C,maxDetail:E,minDate:T,minDetail:N,value:Lt,view:fe}):null;ve.persist(),Fa(kc),tb(Lt);var sb={action:"onChange",activeStartDate:kc,value:Lt,view:fe};if($&&!hs(nt,kc)&&$(sb),V)if(bt){var lb=Lu(Lt);if(!lb)V(Lt||null,ve);else if(i){if(Array.isArray(Lt))throw new Error("value must not be an array");V([Lt||null,null],ve)}}else V(Lt||null,ve)},[nt,i,$h,h,C,E,T,N,$,V,Va,bt,rt,Ba,fe]);function ib(X){Lh(X)}function jc(){Lh(null)}b.useImperativeHandle(n,function(){return{activeStartDate:nt,drillDown:wc,drillUp:bc,onChange:Sc,setActiveStartDate:yc,value:rt,view:fe}},[nt,wc,bc,Sc,yc,rt,fe]);function Nh(X){var ve=X?E2(fe,nt):Ar(fe,nt),je=xc?wc:Sc,_t={activeStartDate:ve,hover:rb,locale:j,maxDate:C,minDate:T,onClick:je,onMouseOver:bt?ib:void 0,tileClassName:Q2,tileContent:X2,tileDisabled:Z2,value:rt,valueType:Ba};switch(fe){case"century":return s.jsx(m_,Ci({formatYear:S,showNeighboringCentury:Y2},_t));case"decade":return s.jsx(y_,Ci({formatYear:S,showNeighboringDecade:G2},_t));case"year":return s.jsx(k_,Ci({formatMonth:p,formatMonthYear:m},_t));case"month":return s.jsx(I_,Ci({calendarType:o,formatDay:d,formatLongDate:f,formatShortWeekday:y,formatWeekday:w,onClickWeekNumber:q,onMouseLeave:bt?jc:void 0,showFixedNumberOfWeeks:typeof Th<"u"?Th:Na,showNeighboringMonth:K2,showWeekNumbers:q2},_t));default:throw new Error("Invalid view: ".concat(fe,"."))}}function ob(){return H2?s.jsx(a_,{activeStartDate:nt,drillUp:bc,formatMonthYear:m,formatYear:S,locale:j,maxDate:C,minDate:T,navigationAriaLabel:z,navigationAriaLive:U,navigationLabel:D,next2AriaLabel:L,next2Label:M,nextAriaLabel:A,nextLabel:O,prev2AriaLabel:Wt,prev2Label:wt,prevAriaLabel:$e,prevLabel:mc,setActiveStartDate:yc,showDoubleView:Na,view:fe,views:Ut}):null}var ab=Array.isArray(rt)?rt:[rt];return s.jsxs("div",{className:lc(ps,bt&&ab.length===1&&"".concat(ps,"--selectRange"),Na&&"".concat(ps,"--doubleView"),a),ref:v,children:[ob(),s.jsxs("div",{className:"".concat(ps,"__viewContainer"),onBlur:bt?jc:void 0,onMouseLeave:bt?jc:void 0,children:[Nh(),Na?Nh(!0):null]})]})});const V_=to`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,z_=to`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,W_=to`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,U_=to`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,H_=to`
  from { opacity: 0; }
  to { opacity: 1; }
`,Y_=x.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${H_} 0.15s ease-out;
`,G_=x.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?tn`animation: ${U_} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:tn`animation: ${W_} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?tn`animation: ${z_} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:tn`animation: ${V_} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,K_=x.div`
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
`,V2=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const o=b.useRef(null),[a,l]=b.useState(!1),[c,u]=b.useState(!1),[d,f]=b.useState(!1),[p,m]=b.useState({top:0,left:0});b.useEffect(()=>{if(e&&(i!=null&&i.current)){const h=i.current.getBoundingClientRect(),v=280,j=320,k=8,P=window.innerHeight-h.bottom-k<j;f(P);let E;P?E=h.top-j-k:E=h.bottom+k;let R=h.right-v;R<8&&(R=8),R+v>window.innerWidth-8&&(R=window.innerWidth-v-8),E<8&&(E=8),m({top:E,left:R}),u(!0),l(!1)}},[e,i]);const y=b.useCallback(()=>{l(!0),setTimeout(()=>{u(!1),l(!1),t()},150)},[t]),w=b.useCallback(h=>{o.current&&!o.current.contains(h.target)&&y()},[y]);b.useEffect(()=>{if(e){const h=setTimeout(()=>{document.addEventListener("mousedown",w)},10);return()=>{clearTimeout(h),document.removeEventListener("mousedown",w)}}},[e,w]);const S=b.useCallback(h=>{h instanceof Date&&(r(Vt(h)),y())},[r,y]);if(!c)return null;const g=new Date(n+"T00:00:00");return Uy.createPortal(s.jsxs("div",{"data-calendar-portal":!0,children:[s.jsx(Y_,{onClick:y}),s.jsx(G_,{ref:o,$isClosing:a,$openUpward:d,$top:p.top,$left:p.left,children:s.jsx(K_,{children:s.jsx(B_,{onChange:S,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(h,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},q_=x(F.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,Q_=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,X_=x.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: var(--bg-tertiary);
  }

  &:active {
    background: var(--bg-active);
  }

  @media (max-width: 640px) {
    gap: 12px;
    padding: 8px 12px;
  }
`,Z_=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,kh=x.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,J_=x(kh)`
  height: 14px;
`,eL=x(kh)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,tL=x(kh)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,nL=x(F.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,rL=x(F.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,iL=x.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,oL=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,aL=x(F.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,sL=x.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,lL=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,cL=x.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,uL=x(F.button).attrs({type:"button"})`
  font-size: 13px;
  font-weight: 600;
  background: rgba(42, 157, 143, 0.12);
  border: none;
  color: var(--accent);
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 100px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(42, 157, 143, 0.18);
  }

  &:active {
    background: rgba(42, 157, 143, 0.24);
    transform: scale(0.97);
  }

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`,dL=x.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,sv=x(F.button).attrs({type:"button"})`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: none;
  border-radius: 50%;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  &:active {
    background: var(--bg-active);
    transform: scale(0.94);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,fL=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"15 18 9 12 15 6"})}),pL=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"9 18 15 12 9 6"})}),ms=[.25,.1,.25,1],hL=({selectedDate:e,onDateChange:t})=>{const[n,r]=b.useState(!1),[i,o]=b.useState(1),a=b.useRef(null),l=b.useRef(e);if(l.current!==e){const h=new Date(l.current+"T00:00:00"),v=new Date(e+"T00:00:00");o(v>h?1:-1),l.current=e}const c=b.useCallback(h=>{h.preventDefault(),h.stopPropagation();const v=Vt(new Date),j=new Date(e+"T00:00:00"),k=new Date(v+"T00:00:00");o(k>j?1:-1),t(v)},[e,t]),u=b.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o(-1);const v=new Date(e+"T00:00:00");v.setDate(v.getDate()-1),t(Vt(v))},[e,t]),d=b.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o(1);const v=new Date(e+"T00:00:00");v.setDate(v.getDate()+1),t(Vt(v))},[e,t]),f=XE(e),p=new Date(e+"T00:00:00"),m=p.getDate(),y=p.toLocaleDateString("en-US",{month:"short"}),w=p.toLocaleDateString("en-US",{weekday:"long"}),S=p.getFullYear(),g={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return s.jsxs(q_,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:ms},children:[s.jsxs(Q_,{children:[s.jsxs(X_,{ref:a,onClick:()=>r(!0),type:"button",children:[s.jsxs(Z_,{children:[s.jsx(J_,{children:s.jsx(_e,{mode:"popLayout",initial:!1,children:s.jsx(nL,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:ms},children:y},y)})}),s.jsx(eL,{children:s.jsx(_e,{mode:"popLayout",initial:!1,children:s.jsx(rL,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:ms},children:m},m)})})]}),s.jsx(iL,{}),s.jsxs(oL,{children:[s.jsx(tL,{children:s.jsx(_e,{mode:"popLayout",initial:!1,children:s.jsx(aL,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:ms},children:w},w)})}),s.jsx(sL,{children:S})]})]}),s.jsxs(lL,{children:[s.jsx(cL,{children:s.jsx(_e,{children:!f&&s.jsx(uL,{onClick:c,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),s.jsxs(dL,{children:[s.jsx(sv,{onClick:u,whileTap:{scale:.95},children:s.jsx(fL,{})}),s.jsx(sv,{onClick:d,whileTap:{scale:.95},children:s.jsx(pL,{})})]})]})]}),s.jsx(V2,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:a})]})};x(F.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard);

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
      rgba(255, 255, 255, 0.15) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-medium) var(--ease-standard);
    pointer-events: none;
  }

  ${({$interactive:e})=>e&&tn`
    cursor: pointer;

    &:hover {
      background: var(--glass-bg-hover);
      box-shadow: var(--card-shadow-hover);
    }

    &:hover::after {
      opacity: 1;
      animation: liquidShimmer 1.5s ease infinite;
    }
  `}
`;x(bp)`
  display: block;
  text-decoration: none;
  color: inherit;
`;x.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: var(--radius-full);
  
  ${({$variant:e})=>e==="accent"?tn`
    background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    color: var(--accent);
  `:tn`
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  `}
`;const mL=x.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,gL=x.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,vL=x(F.span)`
  display: inline-block;
`,xL=x.span`
  display: inline-block;
`,yL=[.25,.1,.25,1],wL=({value:e,className:t})=>{const n=b.useMemo(()=>e.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[e]);return s.jsx(mL,{className:t,children:n.map(({char:r,key:i,isDigit:o},a)=>o?s.jsx(gL,{children:s.jsx(_e,{mode:"popLayout",initial:!1,children:s.jsx(vL,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:yL},children:r},i)})},`wrapper-${a}`):s.jsx(xL,{children:r},`static-${a}`))})},En=b.memo(wL);x.h1`
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;x.h1`
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;x.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;x.h3`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;x.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;x.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;x.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
`;x.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-secondary);
`;x.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  color: var(--text-tertiary);
`;x.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-tertiary);
`;x.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
`;x.span`
  background: var(--gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${({$animated:e})=>e&&`
    animation: gradientFlow 4s ease infinite;
  `}
`;const bL=x(F.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,SL=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,jL=x.div`
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
`,kL=x.div`
  flex: 1;
  min-width: 0;
`,CL=x.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,TL=x.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,PL=x.span`
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
`,DL=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,lv=x.div`
  text-align: ${({$align:e})=>e||"left"};
`,cv=x.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,uv=x.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:e})=>e};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,EL=x.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,AL=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,_L=x.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,LL=x(F.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,IL=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ML=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,OL=x.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,RL=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,$L=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,NL=x(F.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:e})=>e};
`,FL={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},BL=e=>{const t=FL[e];return t?s.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},VL=e=>new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),dv=[.25,.1,.25,1],zL=({detailedBalance:e,index:t=0,limit:n})=>{const{account:r,billDue:i,unbilled:o,totalOutstanding:a,cycleStart:l,cycleSpending:c}=e,u=n!==void 0&&n>0,d=u?Math.max(0,n-c):0,f=u?c/n*100:0,p=u&&c>n,m=p?"#ef4444":f>80?"#f59e0b":"#10b981",y=()=>i>0?"due":o>0?"unbilled":"clear",w=()=>{switch(y()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return s.jsxs(bL,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:dv,delay:t*.02},children:[s.jsxs(SL,{children:[s.jsx(jL,{children:BL(r.bank)}),s.jsxs(kL,{children:[s.jsxs(CL,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),s.jsxs(TL,{children:["Cycle from ",VL(l)]})]}),s.jsx(PL,{$status:y(),children:w()})]}),s.jsxs(DL,{children:[s.jsxs(lv,{children:[s.jsx(cv,{children:"Bill Due"}),s.jsx(uv,{$color:i>0?"#ef4444":"#10b981",children:s.jsx(En,{value:Ye(i)})})]}),s.jsxs(lv,{$align:"right",children:[s.jsx(cv,{children:"Unbilled"}),s.jsx(uv,{$color:o>0?"#f59e0b":"var(--text-tertiary)",children:s.jsx(En,{value:Ye(o)})})]})]}),u&&s.jsxs(EL,{children:[s.jsxs(AL,{children:[s.jsxs(IL,{children:[s.jsx(ML,{children:"Virtual Limit"}),s.jsx(OL,{children:Ye(n)})]}),s.jsxs(RL,{children:[s.jsx($L,{children:p?"Over By":"Available"}),s.jsx(NL,{$color:m,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:Ye(p?a-n:d)},d)]})]}),s.jsx(_L,{children:s.jsx(LL,{$color:m,initial:{width:0},animate:{width:`${Math.min(f,100)}%`},transition:{duration:.4,ease:dv,delay:.1}})})]})]})},WL=b.memo(zL),UL=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),HL=x(F.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Iu=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Mu=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
`,Ou=x.h3`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`,YL=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,GL=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,qr=x(F.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Qr=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,Xr=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,Zr=x.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 26px;
    height: 26px;
    object-fit: contain;
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${({$color:e})=>e};
  }
`,Jr=x.div`
  min-width: 0;
`,ei=x.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ti=x.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,ni=x.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:e})=>e||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,KL=x.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,qL=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,QL=x.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,XL=x(F.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,ZL=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,JL=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,eI=x.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,tI=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,nI=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,rI=x(F.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:e})=>e};
`,fv={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},iI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),oI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"}),s.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),aI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Ch=[.25,.1,.25,1],sI={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Ch,staggerChildren:.05}}},ri={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:Ch}}},lI=({balances:e,ccLimits:t={},creditCardDetailedBalances:n=[]})=>{const{hdfcBalance:r,iciciBalance:i,liquidFundBalance:o,netCash:a,totalCCOutstanding:l,netPosition:c,totalLimit:u,totalLimitRemaining:d,limitPercentage:f,limitColor:p}=b.useMemo(()=>{const y=e.find(_=>_.account.id==="hdfc-bank"),w=e.find(_=>_.account.id==="icici-bank"),S=e.find(_=>_.account.id==="liquid-fund"),g=e.filter(_=>_.account.type==="credit_card"),h=(y==null?void 0:y.balance)||0,v=(w==null?void 0:w.balance)||0,j=(S==null?void 0:S.balance)||0,k=g.reduce((_,N)=>_+(N.totalOutstanding||0),0);let C=0;for(const _ of n){const N=t[_.account.id]||0;N>0&&(C+=N)}const P=Math.max(0,C-k),E=C>0?k/C*100:0,T=k>C&&C>0?"#ef4444":E>80?"#f59e0b":"#10b981";return{hdfcBalance:h,iciciBalance:v,liquidFundBalance:j,netCash:h-k+j,totalCCOutstanding:k,netPosition:h-k,totalLimit:C,totalLimitRemaining:P,limitPercentage:E,limitColor:T}},[e,t,n]),m=u>0;return s.jsxs(HL,{variants:sI,initial:"hidden",animate:"visible",children:[s.jsxs(Iu,{children:[s.jsx(Mu,{children:s.jsx(Ou,{children:"Bank Accounts"})}),s.jsxs(YL,{children:[s.jsx(qr,{variants:ri,children:s.jsxs(Qr,{children:[s.jsxs(Xr,{children:[s.jsx(Zr,{$color:"#004C8F",children:s.jsx("img",{src:fv.hdfc,alt:"HDFC"})}),s.jsxs(Jr,{children:[s.jsx(ei,{children:"HDFC Bank"}),s.jsx(ti,{children:"Savings"})]})]}),s.jsx(ni,{$color:r>=0?"#10b981":"#ef4444",children:s.jsx(En,{value:Ye(r)})})]})}),s.jsx(qr,{variants:ri,children:s.jsxs(Qr,{children:[s.jsxs(Xr,{children:[s.jsx(Zr,{$color:"#F58220",children:s.jsx("img",{src:fv.icici,alt:"ICICI"})}),s.jsxs(Jr,{children:[s.jsx(ei,{children:"ICICI Bank"}),s.jsx(ti,{children:"Savings"})]})]}),s.jsx(ni,{$color:i>=0?"#10b981":"#ef4444",children:s.jsx(En,{value:Ye(i)})})]})})]})]}),s.jsxs(Iu,{children:[s.jsx(Mu,{children:s.jsx(Ou,{children:"Investments"})}),s.jsx(qr,{variants:ri,children:s.jsxs(Qr,{children:[s.jsxs(Xr,{children:[s.jsx(Zr,{$color:"#8b5cf6",children:s.jsx(UL,{})}),s.jsxs(Jr,{children:[s.jsx(ei,{children:"Liquid Fund"}),s.jsx(ti,{children:"Short-term Investment"})]})]}),s.jsx(ni,{$color:o>=0?"#8b5cf6":"#ef4444",children:s.jsx(En,{value:Ye(o)})})]})})]}),s.jsxs(Iu,{children:[s.jsx(Mu,{children:s.jsx(Ou,{children:"Position Summary"})}),s.jsxs(GL,{children:[s.jsx(qr,{variants:ri,children:s.jsxs(Qr,{children:[s.jsxs(Xr,{children:[s.jsx(Zr,{$color:"#3b82f6",children:s.jsx(iI,{})}),s.jsxs(Jr,{children:[s.jsx(ei,{children:"Net Position"}),s.jsx(ti,{children:"HDFC − CC Due"})]})]}),s.jsx(ni,{$color:c>=0?"#3b82f6":"#ef4444",children:s.jsx(En,{value:Ye(c)})})]})}),s.jsx(qr,{variants:ri,children:s.jsxs(Qr,{children:[s.jsxs(Xr,{children:[s.jsx(Zr,{$color:"#22c55e",children:s.jsx(oI,{})}),s.jsxs(Jr,{children:[s.jsx(ei,{children:"Net Cash"}),s.jsx(ti,{children:"Net Position + LF"})]})]}),s.jsx(ni,{$color:a>=0?"#22c55e":"#ef4444",children:s.jsx(En,{value:Ye(a)})})]})}),s.jsxs(qr,{variants:ri,children:[s.jsxs(Qr,{children:[s.jsxs(Xr,{children:[s.jsx(Zr,{$color:"#ef4444",children:s.jsx(aI,{})}),s.jsxs(Jr,{children:[s.jsx(ei,{children:"Credit Cards"}),s.jsx(ti,{children:"Total Outstanding"})]})]}),s.jsx(ni,{$color:l>0?"#ef4444":"#10b981",children:s.jsx(En,{value:`${l>0?"-":""}${Ye(l)}`})})]}),m&&s.jsxs(KL,{children:[s.jsxs(qL,{children:[s.jsxs(ZL,{children:[s.jsx(JL,{children:"Combined Limit"}),s.jsx(eI,{children:Ye(u)})]}),s.jsxs(tI,{children:[s.jsx(nI,{children:f>100?"Over By":"Available"}),s.jsx(rI,{$color:p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:f>100?Ye(l-u):Ye(d)},d)]})]}),s.jsx(QL,{children:s.jsx(XL,{$color:p,initial:{width:0},animate:{width:`${Math.min(f,100)}%`},transition:{duration:.4,ease:Ch,delay:.1}})})]})]})]})]})]})},cI=b.memo(lI),uI=x.div`
  display: flex;
  flex-direction: column;
`,dI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`,fI=x(F.button)`
  padding: 14px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-primary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-secondary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  }
`,pI=x.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,hI=x.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,mI=x.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,gI=x.div`
  padding: 0;
`,pr=x.div`
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,hr=x.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,z2=x.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: var(--text-tertiary);
  }
`,vI=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,xI=x.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,yI=x(F.button).attrs({type:"button"})`
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
`,gs=x.select`
  width: 100%;
  padding: 10px 12px;
  padding-right: 36px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`,wI=x.div`
  display: flex;
  align-items: center;
  position: relative;
`,bI=x.span`
  position: absolute;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,SI=x(z2)`
  padding-left: 28px;
`,jI=x.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,kI=x(F.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 14px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,CI=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"},{type:"liquid_fund_credit",label:"LF Credit",hint:"Add to fund",color:"#8b5cf6"},{type:"liquid_fund_debit",label:"LF Debit",hint:"Withdraw from fund",color:"#a855f7"}],TI=fh(),vs=p2(),xs=h2(),pv=[.4,0,.2,1],PI=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=b.useState("credit_card_spend"),[i,o]=b.useState(""),[a,l]=b.useState(""),[c,u]=b.useState(""),[d,f]=b.useState(""),[p,m]=b.useState(t||Vt(new Date)),[y,w]=b.useState(!1),S=b.useRef(null);b.useEffect(()=>{t&&m(t)},[t]);const g=b.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return TI;case"bank_debit":case"bank_credit":return vs;case"liquid_fund_credit":case"liquid_fund_debit":return xs?[xs]:[];default:return Hn}},[n]),h=b.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";case"liquid_fund_credit":case"liquid_fund_debit":return"Liquid Fund";default:return"Select account..."}},[n]);b.useEffect(()=>{(n==="liquid_fund_credit"||n==="liquid_fund_debit")&&xs&&o(xs.id)},[n]);const v=n==="liquid_fund_credit"||n==="liquid_fund_debit",j=n&&i&&parseFloat(c)>0&&p&&(!v||a),k=b.useCallback(()=>{r(""),o(""),l(""),u(""),f("")},[]),C=b.useCallback(()=>{if(!n||!i||!c||!p)return;const T=(n==="cc_payment"||n==="liquid_fund_credit"||n==="liquid_fund_debit")&&a?a:void 0,_=Hn.find(D=>D.id===i),N=a?Hn.find(D=>D.id===a):void 0;let z="";switch(n){case"credit_card_spend":z=`Spent on ${_==null?void 0:_.name}`;break;case"cc_payment":z=N?`Payment to ${_==null?void 0:_.name} from ${N.name}`:`Payment to ${_==null?void 0:_.name}`;break;case"bank_debit":z=`Debited from ${_==null?void 0:_.name}`;break;case"bank_credit":z=`Credited to ${_==null?void 0:_.name}`;break;case"liquid_fund_credit":z=N?`Invested in Liquid Fund from ${N.name}`:"Invested in Liquid Fund";break;case"liquid_fund_debit":z=N?`Withdrawn from Liquid Fund to ${N.name}`:"Withdrawn from Liquid Fund";break}const U=rA(n,i,parseFloat(c),d||z,p,T);e(U),k()},[n,i,a,c,d,p,e,k]),P=b.useMemo(()=>{const _=c.replace(/[^0-9.]/g,"").split(".");let N=_[0];const z=_[1];if(N.length>3){let U=N.substring(N.length-3),D=N.substring(0,N.length-3);D=D.replace(/\B(?=(\d{2})+(?!\d))/g,","),N=D+","+U}return z!==void 0?`${N}.${z}`:N},[c]),E=b.useCallback(T=>{const _=T.target.value.replace(/,/g,"");(_===""||/^\d*\.?\d*$/.test(_))&&u(_)},[]),R=T=>new Date(T+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return s.jsxs(uI,{children:[s.jsx(dI,{children:CI.map(({type:T,label:_,hint:N,color:z})=>s.jsxs(fI,{type:"button",$active:n===T,$color:z,onClick:()=>{n!==T&&(r(T),o(""),l(""))},whileTap:{scale:.98},transition:{duration:.1,ease:pv},children:[s.jsx(pI,{children:_}),s.jsx(hI,{children:N})]},T))}),s.jsxs("div",{children:[s.jsx(mI,{children:s.jsxs(gI,{children:[n!=="liquid_fund_credit"&&n!=="liquid_fund_debit"&&s.jsxs(pr,{children:[s.jsx(hr,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),s.jsxs(gs,{value:i,onChange:T=>o(T.target.value),children:[s.jsx("option",{value:"",children:h()}),g.map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]}),n==="cc_payment"&&s.jsxs(pr,{children:[s.jsx(hr,{children:"Paid From (Optional)"}),s.jsxs(gs,{value:a,onChange:T=>l(T.target.value),children:[s.jsx("option",{value:"",children:"Select bank account..."}),vs.map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]}),n==="liquid_fund_credit"&&s.jsxs(pr,{children:[s.jsx(hr,{children:"Transfer From Bank Account"}),s.jsxs(gs,{value:a,onChange:T=>l(T.target.value),children:[s.jsx("option",{value:"",children:"Select bank account..."}),vs.map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]}),n==="liquid_fund_debit"&&s.jsxs(pr,{children:[s.jsx(hr,{children:"Transfer To Bank Account"}),s.jsxs(gs,{value:a,onChange:T=>l(T.target.value),children:[s.jsx("option",{value:"",children:"Select bank account..."}),vs.map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]}),s.jsxs(pr,{children:[s.jsx(hr,{children:"Amount"}),s.jsxs(wI,{children:[s.jsx(bI,{children:"₹"}),s.jsx(SI,{type:"text",inputMode:"decimal",placeholder:"0",value:P,onChange:E})]})]}),s.jsxs(pr,{children:[s.jsx(hr,{children:"Date"}),s.jsxs(vI,{children:[s.jsx(xI,{children:R(p)}),s.jsx(yI,{ref:S,onClick:()=>w(!0),whileTap:{scale:.95},children:"Change"}),s.jsx(V2,{isOpen:y,onClose:()=>w(!1),selectedDate:p,onDateSelect:m,triggerRef:S})]})]}),s.jsxs(pr,{children:[s.jsx(hr,{children:"Description (Optional)"}),s.jsx(z2,{type:"text",placeholder:"Add a note...",value:d,onChange:T=>f(T.target.value)})]})]})}),s.jsx(jI,{children:s.jsx(kI,{type:"button",onClick:C,disabled:!j,whileTap:j?{scale:.98}:{},transition:{duration:.1,ease:pv},children:"Add Transaction"})})]})]})},DI=b.memo(PI),_l={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},EI=e=>{switch(e){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},AI=x.section`
  border-bottom: 1px solid var(--border);
`,_I=x.div`
  padding: ${_l.section}px 0;

  @media (max-width: 640px) {
    padding: ${_l.sectionMobile}px 0;
  }
`,LI=x(F.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,II=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,MI=x.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 28px;
    height: 28px;
    color: ${({$color:e})=>e};
  }

  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`,OI=x.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,RI=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,$I=x(F.span)`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$color:e})=>e};
  background: ${({$color:e})=>`${e}18`};
  min-width: 28px;
  height: 28px;
  padding: 0 10px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    font-size: 13px;
    min-width: 26px;
    height: 26px;
    padding: 0 9px;
    border-radius: 13px;
  }
`,NI=x(F.div)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  &:active {
    background: var(--bg-active);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;

  svg {
      width: 16px;
      height: 16px;
    }
  }
`,FI=x(F.div)`
  overflow: hidden;
`,BI=x.div`
  padding-top: ${_l.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${_l.contentGapMobile}px;
  }
`,VI=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"6 9 12 15 18 9"})}),Ll=[.32,.72,0,1],zI={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:Ll},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:Ll},opacity:{duration:.25,delay:.05}}}},WI=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:o,onOpenChange:a,collapseOnClickOutside:l=!1,children:c})=>{const[u,d]=b.useState(i),f=b.useRef(null),p=o!==void 0,m=p?o:u,y=EI(n),w=()=>{const S=!m;p?a==null||a(S):d(S)};return b.useEffect(()=>{if(!l||!m)return;const S=g=>{f.current&&!f.current.contains(g.target)&&(p?a==null||a(!1):d(!1))};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S)}},[l,m,p,a]),s.jsx(AI,{ref:f,children:s.jsxs(_I,{children:[s.jsxs(LI,{type:"button",onClick:w,whileTap:{scale:.995},transition:{duration:.1},children:[s.jsxs(II,{children:[s.jsx(MI,{$color:y,children:t}),s.jsx(OI,{children:e})]}),s.jsxs(RI,{children:[s.jsx(_e,{mode:"wait",children:r!==void 0&&s.jsx($I,{$color:y,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:Ll},children:r},r)}),s.jsx(NI,{animate:{rotate:m?180:0},transition:{duration:.25,ease:Ll},children:s.jsx(VI,{})})]})]}),s.jsx(_e,{initial:!1,children:m&&s.jsx(FI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:zI,children:s.jsx(BI,{children:c})},"content")})]})})},UI=x.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,HI=x.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,YI=x(F.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,GI=x.div`
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
`,W2=x(F.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
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
`,KI=x.div`
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
`,qI=x.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,QI=x.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,XI=x.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,ZI=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,JI=x.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,e6=x(F.button)`
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

  ${W2}:hover & {
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
`,t6=x(F.div)`
  padding: 48px 24px;
  text-align: center;
`,n6=x.div`
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
`,r6=x.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,i6=x.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,o6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),s.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),s.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),s.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),a6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),hv=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),s.jsx("polyline",{points:"5 12 12 5 19 12"})]}),s6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("polyline",{points:"19 12 12 19 5 12"})]}),l6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"3 6 5 6 21 6"}),s.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),c6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),s.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),mv=[.32,.72,0,1],u6=e=>{switch(e){case"credit_card_spend":return s.jsx(a6,{});case"cc_payment":return s.jsx(hv,{});case"bank_debit":return s.jsx(hv,{});case"bank_credit":return s.jsx(s6,{})}},gv=e=>e==="bank_credit",d6=e=>{const t=new Date(e),n=new Date,r=new Date(n);return r.setDate(r.getDate()-1),e===n.toISOString().split("T")[0]?"Today":e===r.toISOString().split("T")[0]?"Yesterday":t.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},f6=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const{filteredTransactions:r,groupedTransactions:i}=b.useMemo(()=>{const l=new Date(n),c=e.filter(d=>new Date(d.date)<=l).sort((d,f)=>{const p=f.date.localeCompare(d.date);return p!==0?p:f.id.localeCompare(d.id)}),u={};return c.forEach(d=>{u[d.date]||(u[d.date]=[]),u[d.date].push(d)}),{filteredTransactions:c,groupedTransactions:u}},[e,n]),o=b.useCallback(l=>{t(l)},[t]),a=Object.keys(i).sort((l,c)=>c.localeCompare(l));return s.jsx(WI,{title:"Transactions",icon:s.jsx(o6,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:s.jsx(UI,{children:s.jsx(HI,{children:r.length===0?s.jsxs(t6,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:mv},children:[s.jsx(n6,{children:s.jsx(c6,{})}),s.jsx(r6,{children:"No Transactions"}),s.jsx(i6,{children:"Add your first transaction above"})]}):a.map(l=>s.jsxs(YI,{children:[s.jsx(GI,{children:d6(l)}),s.jsx(_e,{mode:"popLayout",children:i[l].map(c=>{var d;const u=f2(c.accountId);return s.jsxs(W2,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:mv},layout:!0,children:[s.jsx(KI,{$type:c.type,children:u6(c.type)}),s.jsxs(qI,{children:[s.jsx(QI,{children:c.description}),s.jsx(XI,{children:(d=u==null?void 0:u.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]}),s.jsxs(ZI,{children:[s.jsxs(JI,{$positive:gv(c.type),children:[gv(c.type)?"+":"-",Ye(c.amount)]}),s.jsx(e6,{type:"button",onClick:()=>o(c.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:s.jsx(l6,{})})]})]},c.id)})})]},l))})})})};b.memo(f6);const p6=x(F.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,h6=x(F.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,m6=x.div`
  padding: var(--space-xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,g6=x.div`
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
`,v6=x.div`
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,x6=x.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,y6=x.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,ys=x.h3`
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
`,ws=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,bs=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,Ru=x.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Ss=x.div`
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
`,js=x.input`
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
`,$u=x.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,w6=x.div`
  display: flex;
  gap: var(--space-md);
`,vv=x(F.button)`
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
`,Nu=x.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,b6=x.span`
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
`,S6=x.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,j6=x.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
`,k6=x.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
`,xv=x.button`
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
`,C6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),s.jsx("polyline",{points:"5 6 12 3 19 6"}),s.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),s.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),T6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),P6=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),D6=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),yv=[.25,.1,.25,1],E6={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}},A6={hidden:{opacity:0,scale:.97,y:8},visible:{opacity:1,scale:1,y:0,transition:{duration:.25,ease:yv}},exit:{opacity:0,scale:.97,y:8,transition:{duration:.2,ease:yv}}},_6=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,ccLimits:i,onSave:o})=>{const[a,l]=b.useState({}),[c,u]=b.useState({}),[d,f]=b.useState({}),[p,m]=b.useState({}),[y,w]=b.useState(""),S=p2(),g=fh(),h=h2();b.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),b.useEffect(()=>{var T;if(e){const _=Vt(new Date),N={};S.forEach(L=>{var M;N[L.id]=((M=n[L.id])==null?void 0:M.toString())||""}),l(N),h&&w(((T=n[h.id])==null?void 0:T.toString())||"");const z={},U={};g.forEach(L=>{const M=dh(r[L.id],_);z[L.id]=M.amount>0?M.amount.toString():"",U[L.id]=M.type}),u(z),f(U);const D={};g.forEach(L=>{var M;D[L.id]=((M=i[L.id])==null?void 0:M.toString())||""}),m(D)}},[e,n,r,i,h]);const v=()=>{const T=Vt(new Date),_={};if(Object.entries(a).forEach(([U,D])=>{const L=parseFloat(D.replace(/,/g,""))||0;_[U]=L}),h){const U=parseFloat(y.replace(/,/g,""))||0;_[h.id]=U}const N={};Object.entries(c).forEach(([U,D])=>{const L=parseFloat(D.replace(/,/g,""))||0,M=r[U],A=typeof M=="object"?M.setupDate:T,O={amount:L,type:d[U]||"billed",setupDate:typeof M=="object"&&M.amount===L?A:T};N[U]=O});const z={};Object.entries(p).forEach(([U,D])=>{const L=parseFloat(D.replace(/,/g,""))||0;L>0&&(z[U]=L)}),o(_,N,z),t()},j=T=>{const _=T.replace(/[^0-9]/g,"");if(!_)return"";if(_.length>3){let N=_.substring(_.length-3),z=_.substring(0,_.length-3);return z=z.replace(/\B(?=(\d{2})+(?!\d))/g,","),z+","+N}return _},k=(T,_)=>{const N=_.replace(/,/g,"");(N===""||/^\d+$/.test(N))&&l(z=>({...z,[T]:N}))},C=(T,_)=>{const N=_.replace(/,/g,"");(N===""||/^\d+$/.test(N))&&u(z=>({...z,[T]:N}))},P=(T,_)=>{const N=_.replace(/,/g,"");(N===""||/^\d+$/.test(N))&&m(z=>({...z,[T]:N}))},E=T=>{const _=T.replace(/,/g,"");(_===""||/^\d+$/.test(_))&&w(_)},R=T=>{if(T>3&&T<21)return"th";switch(T%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return s.jsx(_e,{children:e&&s.jsx(p6,{variants:E6,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:s.jsxs(h6,{variants:A6,initial:"hidden",animate:"visible",exit:"exit",onClick:T=>T.stopPropagation(),children:[s.jsxs(m6,{children:[s.jsx(x6,{children:"Initial Balances, Bills & Limits"}),s.jsx(y6,{children:"Set your starting bank balances, credit card outstanding amounts, and monthly spending limits."})]}),s.jsxs(g6,{children:[s.jsxs(ys,{children:[s.jsx(C6,{}),"Bank Account Balances"]}),s.jsx(ws,{children:S.map(T=>s.jsxs(bs,{children:[s.jsx(Ru,{children:T.name}),s.jsx(Ss,{children:s.jsx(js,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:j(a[T.id]||""),onChange:_=>k(T.id,_.target.value)})})]},T.id))}),s.jsx($u,{}),s.jsxs(ys,{children:[s.jsx(D6,{}),"Liquid Fund Balance"]}),s.jsx(ws,{children:h&&s.jsxs(bs,{children:[s.jsx(Ru,{children:h.name}),s.jsx(Ss,{children:s.jsx(js,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:j(y),onChange:T=>E(T.target.value)})}),s.jsx(Nu,{children:"Current balance in your liquid fund investment"})]})}),s.jsx($u,{}),s.jsxs(ys,{children:[s.jsx(T6,{}),"Credit Card Outstanding Bills"]}),s.jsx(ws,{children:g.map(T=>s.jsxs(bs,{children:[s.jsx(Ru,{children:T.name}),s.jsx(Ss,{children:s.jsx(js,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:j(c[T.id]||""),onChange:_=>C(T.id,_.target.value)})}),s.jsxs(k6,{children:[s.jsx(xv,{type:"button",$active:d[T.id]==="billed",onClick:()=>f(_=>({..._,[T.id]:"billed"})),children:"Billed"}),s.jsx(xv,{type:"button",$active:d[T.id]==="unbilled",onClick:()=>f(_=>({..._,[T.id]:"unbilled"})),children:"Unbilled"})]}),s.jsx(Nu,{children:d[T.id]==="unbilled"?"Current cycle spending (counts towards limit, clears next cycle)":"Previous cycle bill (does not count towards limit)"})]},T.id))}),s.jsx($u,{}),s.jsxs(ys,{children:[s.jsx(P6,{}),"Monthly Spending Limits"]}),s.jsx(ws,{children:g.map(T=>{const _=u2[T.id];return s.jsxs(bs,{children:[s.jsxs(S6,{children:[s.jsx(j6,{children:T.name}),_&&s.jsxs(b6,{children:["Resets ",_,R(_)]})]}),s.jsx(Ss,{children:s.jsx(js,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:j(p[T.id]||""),onChange:N=>P(T.id,N.target.value)})}),s.jsx(Nu,{children:"Maximum spending allowed per billing cycle"})]},T.id)})})]}),s.jsx(v6,{children:s.jsxs(w6,{children:[s.jsx(vv,{onClick:t,whileTap:{scale:.98},children:"Cancel"}),s.jsx(vv,{$primary:!0,onClick:v,whileTap:{scale:.98},children:"Save All"})]})})]})})})},L6=x(F.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
`,I6=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,M6=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,O6=x.div`
  padding: 16px 0 16px;

  @media (max-width: 640px) {
    padding: 16px 0 16px;
  }
`,R6=x.div`
  display: flex;
  gap: 2px;
  padding: 3px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`,$6=x(F.button)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 11px 14px;
  font-size: 13px;
  font-weight: ${({$active:e})=>e?"600":"500"};
  color: ${({$active:e,$accent:t})=>{if(!e)return"var(--text-tertiary)";switch(t){case"green":return"#34d399";case"pink":return"#f472b6";case"blue":return"#60a5fa";case"orange":return"#fb923c";case"purple":return"#a78bfa";default:return"var(--text-primary)"}}};
  background: transparent;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease, transform 0.1s ease;
  z-index: 1;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover:not(:disabled) {
    color: var(--text-secondary);
  }

  @media (max-width: 640px) {
    padding: 10px 8px;
    font-size: 11px;
    gap: 4px;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  @media (max-width: 400px) {
    span {
      display: none;
    }
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`,N6=x(F.div)`
  position: absolute;
  inset: 0;
  background: ${({$accent:e})=>{switch(e){case"green":return"linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.08) 100%)";case"pink":return"linear-gradient(135deg, rgba(236, 72, 153, 0.18) 0%, rgba(236, 72, 153, 0.08) 100%)";case"blue":return"linear-gradient(135deg, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0.08) 100%)";case"orange":return"linear-gradient(135deg, rgba(249, 115, 22, 0.18) 0%, rgba(249, 115, 22, 0.08) 100%)";case"purple":return"linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(139, 92, 246, 0.08) 100%)";default:return"var(--bg-tertiary)"}}};
  border-radius: 11px;
  z-index: 0;
  box-shadow: ${({$accent:e})=>{const t=(()=>{switch(e){case"green":return"16, 185, 129";case"pink":return"236, 72, 153";case"blue":return"59, 130, 246";case"orange":return"249, 115, 22";case"purple":return"139, 92, 246";default:return"255, 255, 255"}})();return`
      0 0 0 1px rgba(${t}, 0.15),
      0 2px 8px -2px rgba(${t}, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05)
    `}};
`,F6=x.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,B6=x(F.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,V6=x.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,z6=x(F.div)`
  width: 100%;
`,W6=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,U6=x.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,H6=x.div`
  /* Full height - page scrolls naturally */
`,Y6=x(F.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,G6=x.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,K6=x(F.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-secondary);
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }

  @media (max-width: 640px) {
    padding: 12px 16px;
    gap: 12px;
  }
`,q6=x.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:e})=>{switch(e){case"credit_card_spend":return`
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
          color: #ef4444;
        `;case"bank_credit":return`
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
          color: #10b981;
        `;case"cc_payment":return`
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
          color: #3b82f6;
        `;case"bank_debit":return`
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
          color: #f59e0b;
        `;case"liquid_fund_credit":return`
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%);
          color: #8b5cf6;
        `;case"liquid_fund_debit":return`
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.08) 100%);
          color: #a855f7;
        `;default:return`
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        `}}}

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,Q6=x.div`
  flex: 1;
  min-width: 0;
`,X6=x.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,Z6=x.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,J6=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,e3=x.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,t3=x(F.button)`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,n3=x(F.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,r3=x.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: var(--text-tertiary);

  svg {
    width: 28px;
    height: 28px;
  }
`,i3=x.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,o3=x.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,a3=x.div`
  display: grid;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
`,wv=x(F.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
`,bv=x.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 20px;
    height: 20px;
    color: var(--text-tertiary);
  }
`,s3=x.div`
  display: flex;
  gap: 12px;
`,Sv=x(F.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$variant:e})=>e==="primary"?"white":"var(--text-secondary)"};
  background: ${({$variant:e})=>e==="primary"?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$variant:e})=>e==="primary"?"var(--accent)":"var(--border)"};
  border-radius: 12px;
  cursor: pointer;
  flex: 1;
  transition: all 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,l3=x(F.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  transition: all 0.15s ease;

  &:hover {
    background: var(--bg-secondary);
    border-color: var(--text-tertiary);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--accent);
  }
`,c3=x.input`
  display: none;
`,u3=x.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,d3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),s.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),f3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),p3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),s.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),s.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),s.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),s.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),s.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),h3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),s.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),yf=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"3"}),s.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),m3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),g3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"17 8 12 3 7 8"}),s.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),v3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),s.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),s.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),jv=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),s.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),x3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.jsx("polyline",{points:"17 6 23 6 23 12"})]}),y3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"17 1 21 5 17 9"}),s.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),s.jsx("polyline",{points:"7 23 3 19 7 15"}),s.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),w3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("polyline",{points:"9 12 11 14 15 10"})]}),b3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),s.jsx("polyline",{points:"16 12 12 8 8 12"})]}),S3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),s.jsx("polyline",{points:"8 12 12 16 16 12"})]}),j3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),s.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),k3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"3 6 5 6 21 6"}),s.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Ro=[.25,.1,.25,1],C3={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Ro}}},T3={enter:e=>({x:e>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?40:-40,opacity:0})},P3=e=>{switch(e){case"credit_card_spend":return s.jsx(jv,{});case"bank_credit":return s.jsx(x3,{});case"cc_payment":return s.jsx(w3,{});case"bank_debit":return s.jsx(y3,{});case"liquid_fund_credit":return s.jsx(b3,{});case"liquid_fund_debit":return s.jsx(S3,{});default:return s.jsx(jv,{})}},kv=e=>e==="bank_credit"||e==="liquid_fund_credit",D3=e=>{const t=new Date(e+"T00:00:00"),n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),t.getTime()===n.getTime()?"Today":t.getTime()===r.getTime()?"Yesterday":t.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},mr=[{id:"summary",label:"Summary",icon:s.jsx(d3,{}),accent:"green"},{id:"cards",label:"Cards",icon:s.jsx(f3,{}),accent:"pink"},{id:"transactions",label:"History",icon:s.jsx(p3,{}),accent:"blue"},{id:"add",label:"Add",icon:s.jsx(h3,{}),accent:"orange"},{id:"manage",label:"Manage",icon:s.jsx(yf,{}),accent:"purple"}],E3=()=>{const[e,t]=b.useState(Vt(new Date)),[n,r]=b.useState([]),[i,o]=b.useState({}),[a,l]=b.useState({}),[c,u]=b.useState({}),[d,f]=b.useState(!1),[p,m]=b.useState("summary"),[[,y],w]=b.useState([0,0]),S=b.useRef(null),g=b.useCallback(D=>{const L=mr.findIndex(A=>A.id===D),M=mr.findIndex(A=>A.id===p);w([L,L>M?1:-1]),m(D)},[p]),h=b.useCallback((D,L)=>{const O=mr.findIndex($=>$.id===p);(L.offset.x<-50||L.velocity.x<-500)&&O<mr.length-1?g(mr[O+1].id):(L.offset.x>50||L.velocity.x>500)&&O>0&&g(mr[O-1].id)},[p,g]);b.useEffect(()=>{const D=GE(),L=KE(),M=qE(),A=QE();r(D),o(L),l(M),u(A)},[]);const v=b.useMemo(()=>tA(n,e,i,a),[e,n,i,a]),j=b.useMemo(()=>fh().map(L=>JE(L,n,e,a)),[n,e,a]),{filteredTransactions:k,groupedTransactions:C}=b.useMemo(()=>{const D=e.substring(0,7),L=n.filter(A=>A.date.startsWith(D)&&A.date<=e).sort((A,O)=>{const $=O.date.localeCompare(A.date);return $!==0?$:O.id.localeCompare(A.id)}),M={};return L.forEach(A=>{M[A.date]||(M[A.date]=[]),M[A.date].push(A)}),{filteredTransactions:L,groupedTransactions:M}},[n,e]),P=Object.keys(C).sort((D,L)=>L.localeCompare(D)),E=b.useCallback(D=>{r(L=>{const M=[...L,D];return requestAnimationFrame(()=>Pu(M)),M}),g("transactions")},[]),R=b.useCallback(D=>{r(L=>{const M=L.filter(A=>A.id!==D);return requestAnimationFrame(()=>Pu(M)),M})},[]),T=b.useCallback((D,L,M)=>{o(D),l(L),u(M),requestAnimationFrame(()=>{W0(D),U0(L),H0(M)})},[]),_=b.useCallback(()=>{oA(n,i,a,c)},[n,i,a,c]),N=b.useCallback(()=>{var D;(D=S.current)==null||D.click()},[]),z=b.useCallback(D=>{var A;const L=(A=D.target.files)==null?void 0:A[0];if(!L)return;const M=new FileReader;M.onload=O=>{var H;const $=(H=O.target)==null?void 0:H.result,V=sA($);V?window.confirm(`Import backup from ${new Date(V.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${V.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(V.transactions),o(V.initialBalances),l(V.initialCCBills),u(V.ccLimits||{}),Pu(V.transactions),W0(V.initialBalances),U0(V.initialCCBills),H0(V.ccLimits||{})):alert("Invalid backup file.")},M.readAsText(L),D.target.value=""},[]),U=()=>{switch(p){case"summary":return s.jsx(cI,{balances:v,ccLimits:c,creditCardDetailedBalances:j});case"cards":return s.jsx(W6,{children:j.map((D,L)=>s.jsx(WL,{detailedBalance:D,index:L,limit:c[D.account.id]},D.account.id))});case"transactions":return s.jsx(U6,{children:s.jsx(H6,{children:k.length===0?s.jsxs(n3,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:Ro},children:[s.jsx(r3,{children:s.jsx(j3,{})}),s.jsx(i3,{children:"No Transactions"}),s.jsx(o3,{children:"Add your first transaction"})]}):P.map(D=>s.jsxs(Y6,{children:[s.jsx(G6,{children:D3(D)}),s.jsx(_e,{mode:"popLayout",children:C[D].map(L=>{var A;const M=f2(L.accountId);return s.jsxs(K6,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:Ro},layout:!0,children:[s.jsx(q6,{$type:L.type,children:P3(L.type)}),s.jsxs(Q6,{children:[s.jsx(X6,{children:L.description}),s.jsx(Z6,{children:(A=M==null?void 0:M.name)==null?void 0:A.replace(" Credit Card"," CC").replace(" Bank","")})]}),s.jsxs(J6,{children:[s.jsxs(e3,{$positive:kv(L.type),children:[kv(L.type)?"+":"-",Ye(L.amount)]}),s.jsx(t3,{type:"button",onClick:()=>R(L.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:s.jsx(k3,{})})]})]},L.id)})})]},D))})});case"add":return s.jsx(u3,{children:s.jsx(DI,{onAddTransaction:E,defaultDate:e})});case"manage":return s.jsxs(a3,{children:[s.jsxs(wv,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2,ease:Ro},children:[s.jsxs(bv,{children:[s.jsx(yf,{}),"Initial Balances & Limits"]}),s.jsxs(l3,{type:"button",onClick:()=>f(!0),whileTap:{scale:.98},children:[s.jsx(yf,{}),"Configure Balances & Limits"]})]}),s.jsxs(wv,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2,ease:Ro,delay:.05},children:[s.jsxs(bv,{children:[s.jsx(v3,{}),"Backup & Restore"]}),s.jsxs(s3,{children:[s.jsxs(Sv,{type:"button",$variant:"secondary",onClick:_,whileTap:{scale:.98},children:[s.jsx(m3,{}),"Export Data"]}),s.jsxs(Sv,{type:"button",$variant:"secondary",onClick:N,whileTap:{scale:.98},children:[s.jsx(g3,{}),"Import Data"]})]})]})]})}};return s.jsxs(s.Fragment,{children:[s.jsx(I6,{children:s.jsxs(M6,{children:[s.jsx(O6,{children:s.jsx(hL,{selectedDate:e,onDateChange:t})}),s.jsx(R6,{children:mr.map(D=>s.jsxs($6,{$active:p===D.id,$accent:D.accent,onClick:()=>g(D.id),whileTap:{scale:.97},children:[p===D.id&&s.jsx(N6,{$accent:D.accent,layoutId:"activeTab",transition:{type:"spring",stiffness:500,damping:35}}),D.icon,s.jsx("span",{children:D.label})]},D.id))})]})}),s.jsxs(L6,{variants:C3,initial:"hidden",animate:"visible",children:[s.jsx(B6,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:h,children:s.jsxs(i2,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[s.jsx(F6,{}),s.jsx(V6,{style:{flex:1},children:s.jsx(_e,{mode:"wait",custom:y,children:s.jsx(z6,{custom:y,variants:T3,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:U()},p)})})]})}),s.jsx(c3,{ref:S,type:"file",accept:".json",onChange:z}),s.jsx(_6,{isOpen:d,onClose:()=>f(!1),initialBalances:i,initialCCBills:a,ccLimits:c,onSave:T})]})]})},U2=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),A3=async(e,t,n,r=48)=>{try{const i=await U2(),o=Math.min(t,n)*.03,a=t-r-o,l=n-r-o;e.globalAlpha=.7,e.drawImage(i,a,l,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},wf=(e,t,n)=>{const r=[],i=l=>{const c=[];let u=l;for(;u.length>0;){let d=u.length;for(;d>0&&e.measureText(u.slice(0,d)).width>n;)d--;d=Math.max(1,d);const f=u.slice(0,d),p=f.lastIndexOf("/"),m=f.lastIndexOf("-"),y=f.lastIndexOf(".");let w=d;const S=[p,m,y].filter(g=>g>0&&g<d-1);S.length>0&&(w=Math.max(...S)+1),c.push(u.slice(0,w)),u=u.slice(w)}return c},o=t.split(" ");let a="";for(const l of o)if(e.measureText(l).width>n){a&&(r.push(a),a="");const u=i(l);for(let d=0;d<u.length;d++)d<u.length-1?r.push(u[d]):a=u[d]}else{const u=a?`${a} ${l}`:l;e.measureText(u).width>n&&a?(r.push(a),a=l):a=u}return a&&r.push(a),r},_3=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:o,alignment:a,aspectRatio:l,padding:c}=e,u=document.createElement("canvas");u.width=l.width,u.height=l.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=o,d.fillRect(0,0,u.width,u.height);const f=n*(l.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(l.width/1080),m=u.width-p*2,y=t.split(`
`),w=[];for(const k of y)if(k.trim()==="")w.push("");else{const C=wf(d,k,m);w.push(...C)}const S=f*1.4,g=w.length*S;let h=(u.height-g)/2+f;d.textAlign=a;let v;switch(a){case"left":v=p;break;case"right":v=u.width-p;break;default:v=u.width/2}for(const k of w)k!==""&&d.fillText(k,v,h),h+=S;const j=Math.min(u.width,u.height)*.06;return await A3(d,u.width,u.height,j),u.toDataURL("image/png",1)},L3=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,o=document.createElement("canvas");o.width=n.width,o.height=n.height;const a=o.getContext("2d");if(!a)throw new Error("Failed to get canvas context");const l=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";a.fillStyle=r,a.fillRect(0,0,o.width,o.height);const f=64*l,p=o.width-f*2,m=20*l,y=36*l,w=(c?44:40)*l,S=(c?24:22)*l,g=18*l,h=w*1.25,v=S*1.45,j=c?5:4,k=c?4:3;a.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const C=wf(a,t.title,p),P=C.slice(0,j);if(C.length>j&&P.length>0){const q=P[P.length-1];q.endsWith("...")||(P[P.length-1]=q.slice(0,-3)+"...")}a.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`;const E=t.description?wf(a,t.description,p):[],R=E.slice(0,k);if(E.length>k&&R.length>0){const q=R[R.length-1];q.endsWith("...")||(R[R.length-1]=q.slice(0,-3)+"...")}const T=y+m,_=P.length*h,N=R.length>0?m+R.length*v:0,z=T+_+N,U=Math.min(o.width,o.height)*.045,D=f+U+16*l,L=o.height-D-f,M=L-z-m*2;let A=0;if(t.image&&M>100*l){const q=c?o.width*.5:o.width*.4,ce=120*l;A=Math.min(q,Math.max(ce,M))}const O=A>0?m+A:0,$=z+O;let V=f+Math.max(0,(L-$)/2);if(t.favicon)try{const q=await Cv(t.favicon);a.save(),a.beginPath(),a.arc(f+y/2,V+y/2,y/2,0,Math.PI*2),a.closePath(),a.clip(),a.drawImage(q,f,V,y,y),a.restore()}catch{a.fillStyle=i,a.beginPath(),a.arc(f+y/2,V+y/2,y/2,0,Math.PI*2),a.fill()}t.siteName&&(a.font=`500 ${22*l}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d,a.textAlign="left",a.textBaseline="middle",a.fillText(t.siteName,f+y+10*l,V+y/2)),V+=y+m,a.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=u,a.textAlign="left",a.textBaseline="top";for(const q of P)a.fillText(q,f,V),V+=h;if(R.length>0){V+=m,a.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d;for(const q of R)a.fillText(q,f,V),V+=v}if(t.image&&A>0){V+=m;try{const q=await Cv(t.image),ce=p;a.save(),I3(a,f,V,ce,A,10*l),a.clip();const Re=q.width/q.height,Xe=ce/A;let Te=0,Wt=0,wt=q.width,$e=q.height;Re>Xe?(wt=q.height*Xe,Te=(q.width-wt)/2):($e=q.width/Xe,Wt=(q.height-$e)/2),a.drawImage(q,Te,Wt,wt,$e,f,V,ce,A),a.restore()}catch{}}const H=o.height-f;a.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,a.fillStyle=i;const re=p-U-16*l;let le=t.url;for(;a.measureText(le).width>re&&le.length>20;)le=le.slice(0,-4)+"...";a.textAlign="left",a.textBaseline="middle",a.fillText(le,f,H-U/2);try{const q=await U2();a.globalAlpha=.7,a.drawImage(q,o.width-f-U,H-U,U,U),a.globalAlpha=1}catch{}return o.toDataURL("image/png",1)},Cv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),I3=(e,t,n,r,i,o)=>{e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()},M3=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},O3=async e=>{var i,o;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const a=`https://api.microlink.io?url=${encodeURIComponent(e)}`,l=await fetch(a);if(!l.ok)return r;const c=await l.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((o=c.data.logo)==null?void 0:o.url)||r.favicon}:r}catch(a){return console.warn("Failed to fetch URL metadata:",a),r}},Tv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],R3='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',$3=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},N3=x.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,F3=x.div`
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
`,B3=x.div`
  width: 100%;
  max-width: 600px;
`,V3=x.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,z3=x.div`
  position: absolute;
  inset: 0;
`,W3=x.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,U3=x(F.div)`
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
`,H3=x.div`
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
`,Y3=x.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Co=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,To=x.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,G3=x.textarea`
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
`,Pv=x.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,Dv=x.button`
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
`,K3=x.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,q3=x.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,Q3=x.input`
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
`,X3=x.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,Z3=x(F.button)`
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
`,J3=x(F.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,e8=x.input`
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
`,t8=x.textarea`
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
`,n8=x(F.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,r8=x(F.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,i8=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),o8=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),a8=()=>{const{isDark:e}=Sp(),[t,n]=b.useState(""),[r,i]=b.useState(64),[o,a]=b.useState("left"),[l,c]=b.useState(Tv[1]),[u,d]=b.useState(null),[f,p]=b.useState(!1),[m,y]=b.useState(null),[w,S]=b.useState(""),[g,h]=b.useState(""),[v,j]=b.useState(!1),[k,C]=b.useState(null),P=b.useMemo(()=>$3(t),[t]),E=e?"#000000":"#ffffff",R=e?"#ffffff":"#000000",T=`${l.height/l.width*100}%`,_=b.useCallback(async()=>{if(!(!P||!t.trim())){j(!0),C(null),d(null);try{const D=await O3(t.trim());y(D),S(D.title),h(D.description)}catch{C("Unable to fetch URL preview")}j(!1)}},[t,P]),N=b.useCallback(async()=>{if(!t.trim()||P){P||d(null);return}p(!0);try{const D=await _3({text:t.trim(),fontSize:r,fontFamily:R3,textColor:R,backgroundColor:E,alignment:o,aspectRatio:l,padding:80});d(D)}catch(D){console.error("Preview generation failed:",D)}p(!1)},[t,P,r,o,l,E,R]),z=b.useCallback(async()=>{if(m){p(!0);try{const D=await L3({metadata:{...m,title:w||m.title,description:g||m.description},aspectRatio:l,backgroundColor:E,accentColor:"#2A9D8F"});d(D)}catch(D){console.error("URL preview generation failed:",D)}p(!1)}},[m,w,g,l,E]);b.useEffect(()=>{if(P)return;const D=setTimeout(N,200);return()=>clearTimeout(D)},[N,P]),b.useEffect(()=>{P?_():(y(null),S(""),h(""),C(null))},[P,_]),b.useEffect(()=>{m&&z()},[m,w,g,l,z]);const U=()=>{if(u){const M=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;M3(u,M)}};return s.jsxs(N3,{children:[s.jsx(F3,{children:s.jsx(B3,{children:s.jsx(V3,{$bgColor:E,$paddingBottom:T,children:s.jsxs(z3,{children:[u&&s.jsx(W3,{src:u,alt:"Preview"}),s.jsx(_e,{children:!u&&s.jsxs(U3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[s.jsx(o8,{}),s.jsx("span",{children:P?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),s.jsx(H3,{children:s.jsxs(Y3,{children:[s.jsxs(Co,{children:[s.jsx(To,{children:"Content"}),s.jsx(G3,{value:t,onChange:D=>n(D.target.value),onContextMenu:D=>D.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),P?s.jsxs(s.Fragment,{children:[v&&s.jsx(Co,{style:{alignItems:"center"},children:s.jsx(r8,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),k&&s.jsx(n8,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:k}),m&&s.jsxs(J3,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[s.jsx(To,{children:"Edit Details"}),s.jsx(e8,{value:w,onChange:D=>S(D.target.value),placeholder:"Title"}),s.jsx(t8,{value:g,onChange:D=>h(D.target.value),placeholder:"Description"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Co,{children:[s.jsx(To,{children:"Font Size"}),s.jsxs(K3,{children:[s.jsx(q3,{children:s.jsx(Q3,{type:"range",min:"24",max:"120",value:r,onChange:D=>i(Number(D.target.value))})}),s.jsx(X3,{children:r})]})]}),s.jsxs(Co,{children:[s.jsx(To,{children:"Alignment"}),s.jsx(Pv,{children:["left","center","right"].map(D=>s.jsx(Dv,{$active:o===D,onClick:()=>a(D),children:D.charAt(0).toUpperCase()+D.slice(1)},D))})]})]}),s.jsxs(Co,{children:[s.jsx(To,{children:"Format"}),s.jsx(Pv,{children:Tv.map(D=>s.jsx(Dv,{$active:l.id===D.id,onClick:()=>c(D),children:D.name},D.id))})]}),s.jsxs(Z3,{onClick:U,disabled:!u||f,whileTap:{scale:.98},children:[s.jsx(i8,{}),"Download Image"]})]})})]})},s8=x(F.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,l8={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},c8=()=>s.jsx(s8,{variants:l8,initial:"hidden",animate:"visible",children:s.jsx(a8,{})}),u8=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},d8=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),s.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),s.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),s.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),s.jsx("path",{d:"M8 8v2"}),s.jsx("path",{d:"M16 8v2"}),s.jsx("path",{d:"M12 8v5"}),s.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),f8=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[s.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),s.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),s.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),s.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),s.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),s.jsx("path",{d:"M12 10v8"}),s.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),p8=x.div`
  min-height: 100vh;
  position: relative;
`,h8=x.main`
  position: relative;
  z-index: 1;
`,m8=x.a`
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
`,g8=to`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,Ev=x.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,Av=x.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${g8} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,_v=x.p`
  color: var(--text-secondary);
  font-size: 15px;
`,v8=x.button`
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
`,x8=()=>{const e=wp(),t=Ji();return b.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function y8(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Yk(),i=b.useMemo(()=>u8()?d8:f8,[]);return t||!e&&!n?s.jsxs(Ev,{children:[s.jsx(Av,{children:s.jsx(i,{})}),s.jsx(_v,{children:"Authenticating..."})]}):n&&!e?s.jsxs(Ev,{children:[s.jsx(Av,{style:{animation:"none",opacity:1},children:s.jsx(i,{})}),s.jsx(_v,{children:"Authentication required to continue"}),s.jsx(v8,{onClick:r,children:"Try Again"})]}):s.jsxs(p8,{children:[s.jsx(x8,{}),s.jsx(m8,{href:"#main-content",children:"Skip to main content"}),s.jsx(QC,{}),s.jsx(LD,{}),s.jsx(h8,{id:"main-content",children:s.jsxs(Ek,{children:[s.jsx(ii,{path:"/",element:s.jsx(GD,{})}),s.jsx(ii,{path:"/tax-manager",element:s.jsx(YE,{})}),s.jsx(ii,{path:"/expense-manager",element:s.jsx(E3,{})}),s.jsx(ii,{path:"/canvas-manager",element:s.jsx(c8,{})}),s.jsx(ii,{path:"/tax-calculator",element:s.jsx(Pk,{to:"/tax-manager",replace:!0})})]})})]})}function w8(){return s.jsx(Rk,{basename:"/tools",children:s.jsx(Bk,{children:s.jsxs(Hk,{children:[s.jsx(GC,{}),s.jsx(y8,{})]})})})}Hy(document.getElementById("root")).render(s.jsx(b.StrictMode,{children:s.jsx(w8,{})}));
