function Ax(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qm={exports:{}},ba={},Xm={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),Rx=Symbol.for("react.portal"),Lx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Mx=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),Bx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),Vx=Symbol.for("react.suspense"),Nx=Symbol.for("react.memo"),Fx=Symbol.for("react.lazy"),hf=Symbol.iterator;function Ox(e){return e===null||typeof e!="object"?null:(e=hf&&e[hf]||e["@@iterator"],typeof e=="function"?e:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jm=Object.assign,qm={};function ei(e,t,n){this.props=e,this.context=t,this.refs=qm,this.updater=n||Zm}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eg(){}eg.prototype=ei.prototype;function jc(e,t,n){this.props=e,this.context=t,this.refs=qm,this.updater=n||Zm}var bc=jc.prototype=new eg;bc.constructor=jc;Jm(bc,ei.prototype);bc.isPureReactComponent=!0;var mf=Array.isArray,tg=Object.prototype.hasOwnProperty,Tc={current:null},ng={key:!0,ref:!0,__self:!0,__source:!0};function rg(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)tg.call(t,r)&&!ng.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xs,type:e,key:s,ref:o,props:i,_owner:Tc.current}}function zx(e,t){return{$$typeof:xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===xs}function Hx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gf=/\/+/g;function tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hx(""+e.key):t.toString(36)}function wo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xs:case Rx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+tl(o,0):r,mf(i)?(n="",e!=null&&(n=e.replace(gf,"$&/")+"/"),wo(i,t,n,"",function(c){return c})):i!=null&&(Pc(i)&&(i=zx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",mf(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+tl(s,a);o+=wo(s,t,n,u,i)}else if(u=Ox(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+tl(s,a++),o+=wo(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ds(e,t,n){if(e==null)return e;var r=[],i=0;return wo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ux(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},So={transition:null},Wx={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:So,ReactCurrentOwner:Tc};function ig(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Ds,forEach:function(e,t,n){Ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ds(e,function(){t++}),t},toArray:function(e){return Ds(e,function(t){return t})||[]},only:function(e){if(!Pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=ei;O.Fragment=Lx;O.Profiler=Mx;O.PureComponent=jc;O.StrictMode=Ix;O.Suspense=Vx;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;O.act=ig;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jm({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Tc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)tg.call(t,u)&&!ng.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:xs,type:e.type,key:i,ref:s,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Bx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_x,_context:e},e.Consumer=e};O.createElement=rg;O.createFactory=function(e){var t=rg.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:$x,render:e}};O.isValidElement=Pc;O.lazy=function(e){return{$$typeof:Fx,_payload:{_status:-1,_result:e},_init:Ux}};O.memo=function(e,t){return{$$typeof:Nx,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};O.unstable_act=ig;O.useCallback=function(e,t){return Ne.current.useCallback(e,t)};O.useContext=function(e){return Ne.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ne.current.useEffect(e,t)};O.useId=function(){return Ne.current.useId()};O.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ne.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};O.useRef=function(e){return Ne.current.useRef(e)};O.useState=function(e){return Ne.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ne.current.useTransition()};O.version="18.3.1";Xm.exports=O;var S=Xm.exports;const Et=Dx(S),Gx=Ax({__proto__:null,default:Et},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=S,Yx=Symbol.for("react.element"),Qx=Symbol.for("react.fragment"),Xx=Object.prototype.hasOwnProperty,Zx=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jx={key:!0,ref:!0,__self:!0,__source:!0};function sg(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Xx.call(t,r)&&!Jx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yx,type:e,key:s,ref:o,props:i,_owner:Zx.current}}ba.Fragment=Qx;ba.jsx=sg;ba.jsxs=sg;Qm.exports=ba;var l=Qm.exports,og={exports:{}},rt={},ag={exports:{}},lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var _=A.length;A.push(M);e:for(;0<_;){var U=_-1>>>1,G=A[U];if(0<i(G,M))A[U]=M,A[_]=G,_=U;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],_=A.pop();if(_!==M){A[0]=_;e:for(var U=0,G=A.length,Te=G>>>1;U<Te;){var Ke=2*(U+1)-1,Qt=A[Ke],Ye=Ke+1,It=A[Ye];if(0>i(Qt,_))Ye<G&&0>i(It,Qt)?(A[U]=It,A[Ye]=_,U=Ye):(A[U]=Qt,A[Ke]=_,U=Ke);else if(Ye<G&&0>i(It,_))A[U]=It,A[Ye]=_,U=Ye;else break e}}return M}function i(A,M){var _=A.sortIndex-M.sortIndex;return _!==0?_:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,g=!1,x=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=A)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function C(A){if(y=!1,v(A),!x)if(n(u)!==null)x=!0,Y(j);else{var M=n(c);M!==null&&N(C,M.startTime-A)}}function j(A,M){x=!1,y&&(y=!1,m(P),P=-1),g=!0;var _=p;try{for(v(M),f=n(u);f!==null&&(!(f.expirationTime>M)||A&&!z());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var G=U(f.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(u)&&r(u),v(M)}else r(u);f=n(u)}if(f!==null)var Te=!0;else{var Ke=n(c);Ke!==null&&N(C,Ke.startTime-M),Te=!1}return Te}finally{f=null,p=_,g=!1}}var b=!1,T=null,P=-1,L=5,I=-1;function z(){return!(e.unstable_now()-I<L)}function Ge(){if(T!==null){var A=e.unstable_now();I=A;var M=!0;try{M=T(!0,A)}finally{M?Me():(b=!1,T=null)}}else b=!1}var Me;if(typeof h=="function")Me=function(){h(Ge)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,$=ht.port2;ht.port1.onmessage=Ge,Me=function(){$.postMessage(null)}}else Me=function(){k(Ge,0)};function Y(A){T=A,b||(b=!0,Me())}function N(A,M){P=k(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Y(j))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var _=p;p=M;try{return A()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var _=p;p=A;try{return M()}finally{p=_}},e.unstable_scheduleCallback=function(A,M,_){var U=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?U+_:U):_=U,A){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=_+G,A={id:d++,callback:M,priorityLevel:A,startTime:_,expirationTime:G,sortIndex:-1},_>U?(A.sortIndex=_,t(c,A),n(u)===null&&A===n(c)&&(y?(m(P),P=-1):y=!0,N(C,_-U))):(A.sortIndex=G,t(u,A),x||g||(x=!0,Y(j))),A},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(A){var M=p;return function(){var _=p;p=M;try{return A.apply(this,arguments)}finally{p=_}}}})(lg);ag.exports=lg;var qx=ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=S,tt=qx;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,Ki={};function sr(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(Ki[e]=t,e=0;e<t.length;e++)ug.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,t1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vf={},yf={};function n1(e){return ru.call(yf,e)?!0:ru.call(vf,e)?!1:t1.test(e)?yf[e]=!0:(vf[e]=!0,!1)}function r1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i1(e,t,n,r){if(t===null||typeof t>"u"||r1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Ac(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ec,Ac);be[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ec,Ac);be[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ec,Ac);be[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dc(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i1(t,n,i,r)&&(n=null),r||i===null?n1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rs=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),dg=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),fg=Symbol.for("react.offscreen"),xf=Symbol.iterator;function di(e){return e===null||typeof e!="object"?null:(e=xf&&e[xf]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,nl;function ji(e){if(nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nl=t&&t[1]||""}return`
`+nl+e}var rl=!1;function il(e,t){if(!e||rl)return"";rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ji(e):""}function s1(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function au(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case iu:return"Profiler";case Rc:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dg:return(e.displayName||"Context")+".Consumer";case cg:return(e._context.displayName||"Context")+".Provider";case Lc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ic:return t=e.displayName||null,t!==null?t:au(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return au(e(t))}catch{}}return null}function o1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(t);case 8:return t===Rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function a1(e){var t=pg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ls(e){e._valueTracker||(e._valueTracker=a1(e))}function hg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lu(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mg(e,t){t=t.checked,t!=null&&Dc(e,"checked",t,!1)}function uu(e,t){mg(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&cu(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cu(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bi=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function du(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(bi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function gg(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Is,yg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Is=Is||document.createElement("div"),Is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l1=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){l1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function xg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function wg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var u1=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,t){if(t){if(u1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function hu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gu=null,Lr=null,Ir=null;function jf(e){if(e=ks(e)){if(typeof gu!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Da(t),gu(e.stateNode,e.type,t))}}function Sg(e){Lr?Ir?Ir.push(e):Ir=[e]:Lr=e}function kg(){if(Lr){var e=Lr,t=Ir;if(Ir=Lr=null,jf(e),t)for(e=0;e<t.length;e++)jf(t[e])}}function Cg(e,t){return e(t)}function jg(){}var sl=!1;function bg(e,t,n){if(sl)return e(t,n);sl=!0;try{return Cg(e,t,n)}finally{sl=!1,(Lr!==null||Ir!==null)&&(jg(),kg())}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var r=Da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var vu=!1;if(Ht)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){vu=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{vu=!1}function c1(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Mi=!1,Ho=null,Uo=!1,yu=null,d1={onError:function(e){Mi=!0,Ho=e}};function f1(e,t,n,r,i,s,o,a,u){Mi=!1,Ho=null,c1.apply(d1,arguments)}function p1(e,t,n,r,i,s,o,a,u){if(f1.apply(this,arguments),Mi){if(Mi){var c=Ho;Mi=!1,Ho=null}else throw Error(E(198));Uo||(Uo=!0,yu=c)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bf(e){if(or(e)!==e)throw Error(E(188))}function h1(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bf(i),e;if(s===r)return bf(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Pg(e){return e=h1(e),e!==null?Eg(e):null}function Eg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eg(e);if(t!==null)return t;e=e.sibling}return null}var Ag=tt.unstable_scheduleCallback,Tf=tt.unstable_cancelCallback,m1=tt.unstable_shouldYield,g1=tt.unstable_requestPaint,fe=tt.unstable_now,v1=tt.unstable_getCurrentPriorityLevel,_c=tt.unstable_ImmediatePriority,Dg=tt.unstable_UserBlockingPriority,Wo=tt.unstable_NormalPriority,y1=tt.unstable_LowPriority,Rg=tt.unstable_IdlePriority,Ta=null,At=null;function x1(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Ta,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:k1,w1=Math.log,S1=Math.LN2;function k1(e){return e>>>=0,e===0?32:31-(w1(e)/S1|0)|0}var Ms=64,_s=4194304;function Ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ti(a):(s&=o,s!==0&&(r=Ti(s)))}else o=n&~i,o!==0?r=Ti(o):s!==0&&(r=Ti(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function C1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-wt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=C1(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function xu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lg(){var e=Ms;return Ms<<=1,!(Ms&4194240)&&(Ms=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ws(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function b1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function Ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mg,$c,_g,Bg,$g,wu=!1,Bs=[],hn=null,mn=null,gn=null,Xi=new Map,Zi=new Map,un=[],T1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function pi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ks(t),t!==null&&$c(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function P1(e,t,n,r,i){switch(t){case"focusin":return hn=pi(hn,e,t,n,r,i),!0;case"dragenter":return mn=pi(mn,e,t,n,r,i),!0;case"mouseover":return gn=pi(gn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xi.set(s,pi(Xi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zi.set(s,pi(Zi.get(s)||null,e,t,n,r,i)),!0}return!1}function Vg(e){var t=Hn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=Tg(n),t!==null){e.blockedOn=t,$g(e.priority,function(){_g(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mu=r,n.target.dispatchEvent(r),mu=null}else return t=ks(n),t!==null&&$c(t),e.blockedOn=n,!1;t.shift()}return!0}function Ef(e,t,n){ko(e)&&n.delete(t)}function E1(){wu=!1,hn!==null&&ko(hn)&&(hn=null),mn!==null&&ko(mn)&&(mn=null),gn!==null&&ko(gn)&&(gn=null),Xi.forEach(Ef),Zi.forEach(Ef)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,E1)))}function Ji(e){function t(i){return hi(i,e)}if(0<Bs.length){hi(Bs[0],e);for(var n=1;n<Bs.length;n++){var r=Bs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&hi(hn,e),mn!==null&&hi(mn,e),gn!==null&&hi(gn,e),Xi.forEach(t),Zi.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&un.shift()}var Mr=Yt.ReactCurrentBatchConfig,Ko=!0;function A1(e,t,n,r){var i=K,s=Mr.transition;Mr.transition=null;try{K=1,Vc(e,t,n,r)}finally{K=i,Mr.transition=s}}function D1(e,t,n,r){var i=K,s=Mr.transition;Mr.transition=null;try{K=4,Vc(e,t,n,r)}finally{K=i,Mr.transition=s}}function Vc(e,t,n,r){if(Ko){var i=Su(e,t,n,r);if(i===null)gl(e,t,r,Yo,n),Pf(e,r);else if(P1(i,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<T1.indexOf(e)){for(;i!==null;){var s=ks(i);if(s!==null&&Mg(s),s=Su(e,t,n,r),s===null&&gl(e,t,r,Yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var Yo=null;function Su(e,t,n,r){if(Yo=null,e=Mc(r),e=Hn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function Ng(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case _c:return 1;case Dg:return 4;case Wo:case y1:return 16;case Rg:return 536870912;default:return 16}default:return 16}}var dn=null,Nc=null,Co=null;function Fg(){if(Co)return Co;var e,t=Nc,n=t.length,r,i="value"in dn?dn.value:dn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Co=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function Af(){return!1}function it(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:Af,this.isPropagationStopped=Af,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=it(ti),Ss=le({},ti,{view:0,detail:0}),R1=it(Ss),al,ll,mi,Pa=le({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(al=e.screenX-mi.screenX,ll=e.screenY-mi.screenY):ll=al=0,mi=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),Df=it(Pa),L1=le({},Pa,{dataTransfer:0}),I1=it(L1),M1=le({},Ss,{relatedTarget:0}),ul=it(M1),_1=le({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),B1=it(_1),$1=le({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V1=it($1),N1=le({},ti,{data:0}),Rf=it(N1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z1[e])?!!t[e]:!1}function Oc(){return H1}var U1=le({},Ss,{key:function(e){if(e.key){var t=F1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W1=it(U1),G1=le({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=it(G1),K1=le({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),Y1=it(K1),Q1=le({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=it(Q1),Z1=le({},Pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J1=it(Z1),q1=[9,13,27,32],zc=Ht&&"CompositionEvent"in window,_i=null;Ht&&"documentMode"in document&&(_i=document.documentMode);var ew=Ht&&"TextEvent"in window&&!_i,Og=Ht&&(!zc||_i&&8<_i&&11>=_i),If=" ",Mf=!1;function zg(e,t){switch(e){case"keyup":return q1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function tw(e,t){switch(e){case"compositionend":return Hg(t);case"keypress":return t.which!==32?null:(Mf=!0,If);case"textInput":return e=t.data,e===If&&Mf?null:e;default:return null}}function nw(e,t){if(pr)return e==="compositionend"||!zc&&zg(e,t)?(e=Fg(),Co=Nc=dn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Og&&t.locale!=="ko"?null:t.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rw[e.type]:t==="textarea"}function Ug(e,t,n,r){Sg(r),t=Qo(t,"onChange"),0<t.length&&(n=new Fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bi=null,qi=null;function iw(e){t0(e,0)}function Ea(e){var t=gr(e);if(hg(t))return e}function sw(e,t){if(e==="change")return t}var Wg=!1;if(Ht){var cl;if(Ht){var dl="oninput"in document;if(!dl){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),dl=typeof Bf.oninput=="function"}cl=dl}else cl=!1;Wg=cl&&(!document.documentMode||9<document.documentMode)}function $f(){Bi&&(Bi.detachEvent("onpropertychange",Gg),qi=Bi=null)}function Gg(e){if(e.propertyName==="value"&&Ea(qi)){var t=[];Ug(t,qi,e,Mc(e)),bg(iw,t)}}function ow(e,t,n){e==="focusin"?($f(),Bi=t,qi=n,Bi.attachEvent("onpropertychange",Gg)):e==="focusout"&&$f()}function aw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ea(qi)}function lw(e,t){if(e==="click")return Ea(t)}function uw(e,t){if(e==="input"||e==="change")return Ea(t)}function cw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:cw;function es(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ru.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var n=Vf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function Kg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yg(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dw(e){var t=Yg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(r!==null&&Hc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Nf(n,s);var o=Nf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fw=Ht&&"documentMode"in document&&11>=document.documentMode,hr=null,ku=null,$i=null,Cu=!1;function Ff(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||hr==null||hr!==zo(r)||(r=hr,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&es($i,r)||($i=r,r=Qo(ku,"onSelect"),0<r.length&&(t=new Fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},fl={},Qg={};Ht&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Aa(e){if(fl[e])return fl[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qg)return fl[e]=t[n];return e}var Xg=Aa("animationend"),Zg=Aa("animationiteration"),Jg=Aa("animationstart"),qg=Aa("transitionend"),e0=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){e0.set(e,t),sr(t,[e])}for(var pl=0;pl<Of.length;pl++){var hl=Of[pl],pw=hl.toLowerCase(),hw=hl[0].toUpperCase()+hl.slice(1);An(pw,"on"+hw)}An(Xg,"onAnimationEnd");An(Zg,"onAnimationIteration");An(Jg,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(qg,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function zf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p1(r,t,void 0,e),e.currentTarget=null}function t0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;zf(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;zf(i,a,c),s=u}}}if(Uo)throw e=yu,Uo=!1,yu=null,e}function Z(e,t){var n=t[Eu];n===void 0&&(n=t[Eu]=new Set);var r=e+"__bubble";n.has(r)||(n0(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),n0(n,e,r,t)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[Ns]){e[Ns]=!0,ug.forEach(function(n){n!=="selectionchange"&&(mw.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ns]||(t[Ns]=!0,ml("selectionchange",!1,t))}}function n0(e,t,n,r){switch(Ng(t)){case 1:var i=A1;break;case 4:i=D1;break;default:i=Vc}n=i.bind(null,t,n,e),i=void 0,!vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hn(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bg(function(){var c=s,d=Mc(n),f=[];e:{var p=e0.get(e);if(p!==void 0){var g=Fc,x=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":g=W1;break;case"focusin":x="focus",g=ul;break;case"focusout":x="blur",g=ul;break;case"beforeblur":case"afterblur":g=ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Y1;break;case Xg:case Zg:case Jg:g=B1;break;case qg:g=X1;break;case"scroll":g=R1;break;case"wheel":g=J1;break;case"copy":case"cut":case"paste":g=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lf}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?p!==null?p+"Capture":null:p;y=[];for(var h=c,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,m!==null&&(C=Qi(h,m),C!=null&&y.push(ns(h,C,v)))),k)break;h=h.return}0<y.length&&(p=new g(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==mu&&(x=n.relatedTarget||n.fromElement)&&(Hn(x)||x[Ut]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Hn(x):null,x!==null&&(k=or(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=Df,C="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Lf,C="onPointerLeave",m="onPointerEnter",h="pointer"),k=g==null?p:gr(g),v=x==null?p:gr(x),p=new y(C,h+"leave",g,n,d),p.target=k,p.relatedTarget=v,C=null,Hn(d)===c&&(y=new y(m,h+"enter",x,n,d),y.target=v,y.relatedTarget=k,C=y),k=C,g&&x)t:{for(y=g,m=x,h=0,v=y;v;v=lr(v))h++;for(v=0,C=m;C;C=lr(C))v++;for(;0<h-v;)y=lr(y),h--;for(;0<v-h;)m=lr(m),v--;for(;h--;){if(y===m||m!==null&&y===m.alternate)break t;y=lr(y),m=lr(m)}y=null}else y=null;g!==null&&Hf(f,p,g,y,!1),x!==null&&k!==null&&Hf(f,k,x,y,!0)}}e:{if(p=c?gr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var j=sw;else if(_f(p))if(Wg)j=uw;else{j=aw;var b=ow}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=lw);if(j&&(j=j(e,c))){Ug(f,j,n,d);break e}b&&b(e,p,c),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&cu(p,"number",p.value)}switch(b=c?gr(c):window,e){case"focusin":(_f(b)||b.contentEditable==="true")&&(hr=b,ku=c,$i=null);break;case"focusout":$i=ku=hr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Ff(f,n,d);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":Ff(f,n,d)}var T;if(zc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?zg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Og&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(T=Fg()):(dn=d,Nc="value"in dn?dn.value:dn.textContent,pr=!0)),b=Qo(c,P),0<b.length&&(P=new Rf(P,e,null,n,d),f.push({event:P,listeners:b}),T?P.data=T:(T=Hg(n),T!==null&&(P.data=T)))),(T=ew?tw(e,n):nw(e,n))&&(c=Qo(c,"onBeforeInput"),0<c.length&&(d=new Rf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}t0(f,t)})}function ns(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qi(e,n),s!=null&&r.unshift(ns(e,s,i)),s=Qi(e,t),s!=null&&r.push(ns(e,s,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Qi(n,s),u!=null&&o.unshift(ns(n,u,a))):i||(u=Qi(n,s),u!=null&&o.push(ns(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(gw,`
`).replace(vw,"")}function Fs(e,t,n){if(t=Uf(t),Uf(e)!==t&&n)throw Error(E(425))}function Xo(){}var ju=null,bu=null;function Tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(e){return Wf.resolve(null).then(e).catch(ww)}:Pu;function ww(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ji(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ni,rs="__reactProps$"+ni,Ut="__reactContainer$"+ni,Eu="__reactEvents$"+ni,Sw="__reactListeners$"+ni,kw="__reactHandles$"+ni;function Hn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gf(e);e!==null;){if(n=e[Pt])return n;e=Gf(e)}return t}e=n,n=e.parentNode}return null}function ks(e){return e=e[Pt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Da(e){return e[rs]||null}var Au=[],vr=-1;function Dn(e){return{current:e}}function q(e){0>vr||(e.current=Au[vr],Au[vr]=null,vr--)}function Q(e,t){vr++,Au[vr]=e.current,e.current=t}var Tn={},Ie=Dn(Tn),He=Dn(!1),er=Tn;function Nr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function Zo(){q(He),q(Ie)}function Kf(e,t,n){if(Ie.current!==Tn)throw Error(E(168));Q(Ie,t),Q(He,n)}function r0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,o1(e)||"Unknown",i));return le({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,er=Ie.current,Q(Ie,e),Q(He,He.current),!0}function Yf(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=r0(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,q(He),q(Ie),Q(Ie,e)):q(He),Q(He,n)}var $t=null,Ra=!1,yl=!1;function i0(e){$t===null?$t=[e]:$t.push(e)}function Cw(e){Ra=!0,i0(e)}function Rn(){if(!yl&&$t!==null){yl=!0;var e=0,t=K;try{var n=$t;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Ra=!1}catch(i){throw $t!==null&&($t=$t.slice(e+1)),Ag(_c,Rn),i}finally{K=t,yl=!1}}return null}var yr=[],xr=0,qo=null,ea=0,at=[],lt=0,tr=null,Vt=1,Nt="";function Nn(e,t){yr[xr++]=ea,yr[xr++]=qo,qo=e,ea=t}function s0(e,t,n){at[lt++]=Vt,at[lt++]=Nt,at[lt++]=tr,tr=e;var r=Vt;e=Nt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vt=1<<32-wt(t)+i|n<<i|r,Nt=s+e}else Vt=1<<s|n<<i|r,Nt=e}function Uc(e){e.return!==null&&(Nn(e,1),s0(e,1,0))}function Wc(e){for(;e===qo;)qo=yr[--xr],yr[xr]=null,ea=yr[--xr],yr[xr]=null;for(;e===tr;)tr=at[--lt],at[lt]=null,Nt=at[--lt],at[lt]=null,Vt=at[--lt],at[lt]=null}var qe=null,Je=null,ie=!1,xt=null;function o0(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:Vt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function Du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ru(e){if(ie){var t=Je;if(t){var n=t;if(!Qf(e,t)){if(Du(e))throw Error(E(418));t=vn(n.nextSibling);var r=qe;t&&Qf(e,t)?o0(r,n):(e.flags=e.flags&-4097|2,ie=!1,qe=e)}}else{if(Du(e))throw Error(E(418));e.flags=e.flags&-4097|2,ie=!1,qe=e}}}function Xf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Os(e){if(e!==qe)return!1;if(!ie)return Xf(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tu(e.type,e.memoizedProps)),t&&(t=Je)){if(Du(e))throw a0(),Error(E(418));for(;t;)o0(e,t),t=vn(t.nextSibling)}if(Xf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?vn(e.stateNode.nextSibling):null;return!0}function a0(){for(var e=Je;e;)e=vn(e.nextSibling)}function Fr(){Je=qe=null,ie=!1}function Gc(e){xt===null?xt=[e]:xt.push(e)}var jw=Yt.ReactCurrentBatchConfig;function gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function zs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zf(e){var t=e._init;return t(e._payload)}function l0(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Sn(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,C){return h===null||h.tag!==6?(h=bl(v,m.mode,C),h.return=m,h):(h=i(h,v),h.return=m,h)}function u(m,h,v,C){var j=v.type;return j===fr?d(m,h,v.props.children,C,v.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&Zf(j)===h.type)?(C=i(h,v.props),C.ref=gi(m,h,v),C.return=m,C):(C=Ro(v.type,v.key,v.props,null,m.mode,C),C.ref=gi(m,h,v),C.return=m,C)}function c(m,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Tl(v,m.mode,C),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function d(m,h,v,C,j){return h===null||h.tag!==7?(h=Xn(v,m.mode,C,j),h.return=m,h):(h=i(h,v),h.return=m,h)}function f(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=bl(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Rs:return v=Ro(h.type,h.key,h.props,null,m.mode,v),v.ref=gi(m,null,h),v.return=m,v;case dr:return h=Tl(h,m.mode,v),h.return=m,h;case an:var C=h._init;return f(m,C(h._payload),v)}if(bi(h)||di(h))return h=Xn(h,m.mode,v,null),h.return=m,h;zs(m,h)}return null}function p(m,h,v,C){var j=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:a(m,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rs:return v.key===j?u(m,h,v,C):null;case dr:return v.key===j?c(m,h,v,C):null;case an:return j=v._init,p(m,h,j(v._payload),C)}if(bi(v)||di(v))return j!==null?null:d(m,h,v,C,null);zs(m,v)}return null}function g(m,h,v,C,j){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(v)||null,a(h,m,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Rs:return m=m.get(C.key===null?v:C.key)||null,u(h,m,C,j);case dr:return m=m.get(C.key===null?v:C.key)||null,c(h,m,C,j);case an:var b=C._init;return g(m,h,v,b(C._payload),j)}if(bi(C)||di(C))return m=m.get(v)||null,d(h,m,C,j,null);zs(h,C)}return null}function x(m,h,v,C){for(var j=null,b=null,T=h,P=h=0,L=null;T!==null&&P<v.length;P++){T.index>P?(L=T,T=null):L=T.sibling;var I=p(m,T,v[P],C);if(I===null){T===null&&(T=L);break}e&&T&&I.alternate===null&&t(m,T),h=s(I,h,P),b===null?j=I:b.sibling=I,b=I,T=L}if(P===v.length)return n(m,T),ie&&Nn(m,P),j;if(T===null){for(;P<v.length;P++)T=f(m,v[P],C),T!==null&&(h=s(T,h,P),b===null?j=T:b.sibling=T,b=T);return ie&&Nn(m,P),j}for(T=r(m,T);P<v.length;P++)L=g(T,m,P,v[P],C),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?P:L.key),h=s(L,h,P),b===null?j=L:b.sibling=L,b=L);return e&&T.forEach(function(z){return t(m,z)}),ie&&Nn(m,P),j}function y(m,h,v,C){var j=di(v);if(typeof j!="function")throw Error(E(150));if(v=j.call(v),v==null)throw Error(E(151));for(var b=j=null,T=h,P=h=0,L=null,I=v.next();T!==null&&!I.done;P++,I=v.next()){T.index>P?(L=T,T=null):L=T.sibling;var z=p(m,T,I.value,C);if(z===null){T===null&&(T=L);break}e&&T&&z.alternate===null&&t(m,T),h=s(z,h,P),b===null?j=z:b.sibling=z,b=z,T=L}if(I.done)return n(m,T),ie&&Nn(m,P),j;if(T===null){for(;!I.done;P++,I=v.next())I=f(m,I.value,C),I!==null&&(h=s(I,h,P),b===null?j=I:b.sibling=I,b=I);return ie&&Nn(m,P),j}for(T=r(m,T);!I.done;P++,I=v.next())I=g(T,m,P,I.value,C),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?P:I.key),h=s(I,h,P),b===null?j=I:b.sibling=I,b=I);return e&&T.forEach(function(Ge){return t(m,Ge)}),ie&&Nn(m,P),j}function k(m,h,v,C){if(typeof v=="object"&&v!==null&&v.type===fr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rs:e:{for(var j=v.key,b=h;b!==null;){if(b.key===j){if(j=v.type,j===fr){if(b.tag===7){n(m,b.sibling),h=i(b,v.props.children),h.return=m,m=h;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&Zf(j)===b.type){n(m,b.sibling),h=i(b,v.props),h.ref=gi(m,b,v),h.return=m,m=h;break e}n(m,b);break}else t(m,b);b=b.sibling}v.type===fr?(h=Xn(v.props.children,m.mode,C,v.key),h.return=m,m=h):(C=Ro(v.type,v.key,v.props,null,m.mode,C),C.ref=gi(m,h,v),C.return=m,m=C)}return o(m);case dr:e:{for(b=v.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Tl(v,m.mode,C),h.return=m,m=h}return o(m);case an:return b=v._init,k(m,h,b(v._payload),C)}if(bi(v))return x(m,h,v,C);if(di(v))return y(m,h,v,C);zs(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=bl(v,m.mode,C),h.return=m,m=h),o(m)):n(m,h)}return k}var Or=l0(!0),u0=l0(!1),ta=Dn(null),na=null,wr=null,Kc=null;function Yc(){Kc=wr=na=null}function Qc(e){var t=ta.current;q(ta),e._currentValue=t}function Lu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){na=e,Kc=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Kc!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(na===null)throw Error(E(308));wr=e,na.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Un=null;function Xc(e){Un===null?Un=[e]:Un.push(e)}function c0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,Xc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function Jf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(p=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=le({},f,p);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);rr|=o,e.lanes=o,e.memoizedState=f}}function qf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Cs={},Dt=Dn(Cs),is=Dn(Cs),ss=Dn(Cs);function Wn(e){if(e===Cs)throw Error(E(174));return e}function Jc(e,t){switch(Q(ss,t),Q(is,e),Q(Dt,Cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fu(t,e)}q(Dt),Q(Dt,t)}function zr(){q(Dt),q(is),q(ss)}function f0(e){Wn(ss.current);var t=Wn(Dt.current),n=fu(t,e.type);t!==n&&(Q(is,e),Q(Dt,n))}function qc(e){is.current===e&&(q(Dt),q(is))}var se=Dn(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function ed(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var To=Yt.ReactCurrentDispatcher,wl=Yt.ReactCurrentBatchConfig,nr=0,ae=null,ge=null,xe=null,sa=!1,Vi=!1,os=0,bw=0;function Pe(){throw Error(E(321))}function td(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function nd(e,t,n,r,i,s){if(nr=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?Aw:Dw,e=n(r,i),Vi){s=0;do{if(Vi=!1,os=0,25<=s)throw Error(E(301));s+=1,xe=ge=null,t.updateQueue=null,To.current=Rw,e=n(r,i)}while(Vi)}if(To.current=oa,t=ge!==null&&ge.next!==null,nr=0,xe=ge=ae=null,sa=!1,t)throw Error(E(300));return e}function rd(){var e=os!==0;return os=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ae.memoizedState=xe=e:xe=xe.next=e,xe}function ft(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=xe===null?ae.memoizedState:xe.next;if(t!==null)xe=t,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ae.memoizedState=xe=e:xe=xe.next=e}return xe}function as(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((nr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,ae.lanes|=d,rr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Ct(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,rr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ct(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function p0(){}function h0(e,t){var n=ae,r=ft(),i=t(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,id(v0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,ls(9,g0.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(E(349));nr&30||m0(n,t,i)}return i}function m0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function g0(e,t,n,r){t.value=n,t.getSnapshot=r,y0(t)&&x0(e)}function v0(e,t,n){return n(function(){y0(t)&&x0(e)})}function y0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function x0(e){var t=Wt(e,1);t!==null&&St(t,e,1,-1)}function ep(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},t.queue=e,e=e.dispatch=Ew.bind(null,ae,e),[t.memoizedState,e]}function ls(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function w0(){return ft().memoizedState}function Po(e,t,n,r){var i=bt();ae.flags|=e,i.memoizedState=ls(1|t,n,void 0,r===void 0?null:r)}function La(e,t,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&td(r,o.deps)){i.memoizedState=ls(t,n,s,r);return}}ae.flags|=e,i.memoizedState=ls(1|t,n,s,r)}function tp(e,t){return Po(8390656,8,e,t)}function id(e,t){return La(2048,8,e,t)}function S0(e,t){return La(4,2,e,t)}function k0(e,t){return La(4,4,e,t)}function C0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j0(e,t,n){return n=n!=null?n.concat([e]):null,La(4,4,C0.bind(null,t,e),n)}function sd(){}function b0(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&td(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function T0(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&td(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function P0(e,t,n){return nr&21?(Ct(n,t)||(n=Lg(),ae.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Tw(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),t()}finally{K=n,wl.transition=r}}function E0(){return ft().memoizedState}function Pw(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A0(e))D0(t,n);else if(n=c0(e,t,n,r),n!==null){var i=Ve();St(n,e,r,i),R0(n,t,r)}}function Ew(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A0(e))D0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,o)){var u=t.interleaved;u===null?(i.next=i,Xc(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=c0(e,t,i,r),n!==null&&(i=Ve(),St(n,e,r,i),R0(n,t,r))}}function A0(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function D0(e,t){Vi=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function R0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var oa={readContext:dt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Aw={readContext:dt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:tp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,C0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pw.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:ep,useDebugValue:sd,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=ep(!1),t=e[0];return e=Tw.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=bt();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));nr&30||m0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,tp(v0.bind(null,r,s,e),[e]),r.flags|=2048,ls(9,g0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bt(),t=Se.identifierPrefix;if(ie){var n=Nt,r=Vt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=os++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dw={readContext:dt,useCallback:b0,useContext:dt,useEffect:id,useImperativeHandle:j0,useInsertionEffect:S0,useLayoutEffect:k0,useMemo:T0,useReducer:Sl,useRef:w0,useState:function(){return Sl(as)},useDebugValue:sd,useDeferredValue:function(e){var t=ft();return P0(t,ge.memoizedState,e)},useTransition:function(){var e=Sl(as)[0],t=ft().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:h0,useId:E0,unstable_isNewReconciler:!1},Rw={readContext:dt,useCallback:b0,useContext:dt,useEffect:id,useImperativeHandle:j0,useInsertionEffect:S0,useLayoutEffect:k0,useMemo:T0,useReducer:kl,useRef:w0,useState:function(){return kl(as)},useDebugValue:sd,useDeferredValue:function(e){var t=ft();return ge===null?t.memoizedState=e:P0(t,ge.memoizedState,e)},useTransition:function(){var e=kl(as)[0],t=ft().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:h0,useId:E0,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ia={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=wn(e),s=Ft(r,i);s.payload=t,n!=null&&(s.callback=n),t=yn(e,s,i),t!==null&&(St(t,e,i,r),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=wn(e),s=Ft(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=yn(e,s,i),t!==null&&(St(t,e,i,r),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=wn(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=yn(e,i,r),t!==null&&(St(t,e,r,n),bo(t,e,r))}};function np(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!es(n,r)||!es(i,s):!0}function L0(e,t,n){var r=!1,i=Tn,s=t.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ue(t)?er:Ie.current,r=t.contextTypes,s=(r=r!=null)?Nr(e,i):Tn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ia,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function rp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ia.enqueueReplaceState(t,t.state,null)}function Mu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ue(t)?er:Ie.current,i.context=Nr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Iu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ia.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t){try{var n="",r=t;do n+=s1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lw=typeof WeakMap=="function"?WeakMap:Map;function I0(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){la||(la=!0,Wu=r),_u(e,t)},n}function M0(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){_u(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ip(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gw.bind(null,e,t,n),t.then(e,e))}function sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function op(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e)}var Iw=Yt.ReactCurrentOwner,ze=!1;function $e(e,t,n,r){t.child=e===null?u0(t,null,n,r):Or(t,e.child,n,r)}function ap(e,t,n,r,i){n=n.render;var s=t.ref;return _r(t,i),r=nd(e,t,n,r,s,i),n=rd(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(ie&&n&&Uc(t),t.flags|=1,$e(e,t,r,i),t.child)}function lp(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,_0(e,t,s,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:es,n(o,r)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=Sn(s,r),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(es(s,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return Bu(e,t,n,r,i)}function B0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(kr,Ze),Ze|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(kr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(kr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Q(kr,Ze),Ze|=r;return $e(e,t,i,n),t.child}function $0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bu(e,t,n,r,i){var s=Ue(n)?er:Ie.current;return s=Nr(t,s),_r(t,i),n=nd(e,t,n,r,s,i),r=rd(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(ie&&r&&Uc(t),t.flags|=1,$e(e,t,n,i),t.child)}function up(e,t,n,r,i){if(Ue(n)){var s=!0;Jo(t)}else s=!1;if(_r(t,i),t.stateNode===null)Eo(e,t),L0(t,n,r),Mu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Ue(n)?er:Ie.current,c=Nr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&rp(t,o,r,c),ln=!1;var p=t.memoizedState;o.state=p,ra(t,r,o,i),u=t.memoizedState,a!==r||p!==u||He.current||ln?(typeof d=="function"&&(Iu(t,n,d,r),u=t.memoizedState),(a=ln||np(t,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,d0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:vt(t.type,a),o.props=c,f=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Ue(n)?er:Ie.current,u=Nr(t,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&rp(t,o,r,u),ln=!1,p=t.memoizedState,o.state=p,ra(t,r,o,i);var x=t.memoizedState;a!==f||p!==x||He.current||ln?(typeof g=="function"&&(Iu(t,n,g,r),x=t.memoizedState),(c=ln||np(t,n,c,r,p,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return $u(e,t,n,r,s,i)}function $u(e,t,n,r,i,s){$0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Yf(t,n,!1),Gt(e,t,s);r=t.stateNode,Iw.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,s),t.child=Or(t,null,a,s)):$e(e,t,a,s),t.memoizedState=r.state,i&&Yf(t,n,!0),t.child}function V0(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),Jc(e,t.containerInfo)}function cp(e,t,n,r,i){return Fr(),Gc(i),t.flags|=256,$e(e,t,n,r),t.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function N0(e,t,n){var r=t.pendingProps,i=se.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(se,i&1),e===null)return Ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ba(o,r,0,null),e=Xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Nu(n),t.memoizedState=Vu,e):od(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Mw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Sn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sn(a,s):(s=Xn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Vu,r}return s=e.child,e=s.sibling,r=Sn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function od(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hs(e,t,n,r){return r!==null&&Gc(r),Or(t,e.child,null,n),e=od(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error(E(422))),Hs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ba({mode:"visible",children:r.children},i,0,null),s=Xn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Or(t,e.child,null,o),t.child.memoizedState=Nu(o),t.memoizedState=Vu,s);if(!(t.mode&1))return Hs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Cl(s,r,void 0),Hs(e,t,o,r)}if(a=(o&e.childLanes)!==0,ze||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(e,i),St(r,e,i,-1))}return fd(),r=Cl(Error(E(421))),Hs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Je=vn(i.nextSibling),qe=t,ie=!0,xt=null,e!==null&&(at[lt++]=Vt,at[lt++]=Nt,at[lt++]=tr,Vt=e.id,Nt=e.overflow,tr=t),t=od(t,r.children),t.flags|=4096,t)}function dp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lu(e.return,t,n)}function jl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function F0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if($e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dp(e,n,t);else if(e.tag===19)dp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jl(t,!0,n,null,s);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _w(e,t,n){switch(t.tag){case 3:V0(t),Fr();break;case 5:f0(t);break;case 1:Ue(t.type)&&Jo(t);break;case 4:Jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?N0(e,t,n):(Q(se,se.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);Q(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return F0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,B0(e,t,n)}return Gt(e,t,n)}var O0,Fu,z0,H0;O0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fu=function(){};z0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Dt.current);var s=null;switch(n){case"input":i=lu(e,i),r=lu(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=du(e,i),r=du(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}pu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ki.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Z("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};H0=function(e,t,n,r){n!==r&&(t.flags|=4)};function vi(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bw(e,t,n){var r=t.pendingProps;switch(Wc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ue(t.type)&&Zo(),Ee(t),null;case 3:return r=t.stateNode,zr(),q(He),q(Ie),ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Yu(xt),xt=null))),Fu(e,t),Ee(t),null;case 5:qc(t);var i=Wn(ss.current);if(n=t.type,e!==null&&t.stateNode!=null)z0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Ee(t),null}if(e=Wn(Dt.current),Os(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Pt]=t,r[rs]=s,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)Z(Pi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":wf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":kf(r,s),Z("invalid",r)}pu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,a,e),i=["children",""+a]):Ki.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":Ls(r),Sf(r,s,!0);break;case"textarea":Ls(r),Cf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Pt]=t,e[rs]=r,O0(e,t,!1,!1),t.stateNode=e;e:{switch(o=hu(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)Z(Pi[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":wf(e,r),i=lu(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),Z("invalid",e);break;case"textarea":kf(e,r),i=du(e,r),Z("invalid",e);break;default:i=r}pu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?wg(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yg(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yi(e,u):typeof u=="number"&&Yi(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ki.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Z("scroll",e):u!=null&&Dc(e,s,u,o))}switch(n){case"input":Ls(e),Sf(e,r,!1);break;case"textarea":Ls(e),Cf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)H0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Wn(ss.current),Wn(Dt.current),Os(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(s=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Fs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(q(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Je!==null&&t.mode&1&&!(t.flags&128))a0(),Fr(),t.flags|=98560,s=!1;else if(s=Os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Pt]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else xt!==null&&(Yu(xt),xt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ye===0&&(ye=3):fd())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return zr(),Fu(e,t),e===null&&ts(t.stateNode.containerInfo),Ee(t),null;case 10:return Qc(t.type._context),Ee(t),null;case 17:return Ue(t.type)&&Zo(),Ee(t),null;case 19:if(q(se),s=t.memoizedState,s===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)vi(s,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ia(e),o!==null){for(t.flags|=128,vi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Ur&&(t.flags|=128,r=!0,vi(s,!1),t.lanes=4194304)}else{if(!r)if(e=ia(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Ee(t),null}else 2*fe()-s.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,r=!0,vi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=se.current,Q(se,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return dd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function $w(e,t){switch(Wc(t),t.tag){case 1:return Ue(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),q(He),q(Ie),ed(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qc(t),null;case 13:if(q(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(se),null;case 4:return zr(),null;case 10:return Qc(t.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var Us=!1,De=!1,Vw=typeof WeakSet=="function"?WeakSet:Set,R=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Ou(e,t,n){try{n()}catch(r){ce(e,t,r)}}var fp=!1;function Nw(e,t){if(ju=Ko,e=Yg(),Hc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:e,selectionRange:n},Ko=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,k=x.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:vt(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(C){ce(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=fp,fp=!1,x}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ou(t,n,s)}i=i.next}while(i!==r)}}function Ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function U0(e){var t=e.alternate;t!==null&&(e.alternate=null,U0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[rs],delete t[Eu],delete t[Sw],delete t[kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function W0(e){return e.tag===5||e.tag===3||e.tag===4}function pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}var ke=null,yt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)G0(e,t,n),n=n.sibling}function G0(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 5:De||Sr(n,t);case 6:var r=ke,i=yt;ke=null,Zt(e,t,n),ke=r,yt=i,ke!==null&&(yt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(yt?(e=ke,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),Ji(e)):vl(ke,n.stateNode));break;case 4:r=ke,i=yt,ke=n.stateNode.containerInfo,yt=!0,Zt(e,t,n),ke=r,yt=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ou(n,t,o),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!De&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Zt(e,t,n),De=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function hp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vw),t.forEach(function(r){var i=Yw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,yt=!1;break e;case 3:ke=a.stateNode.containerInfo,yt=!0;break e;case 4:ke=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(ke===null)throw Error(E(160));G0(s,o,i),ke=null,yt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ce(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)K0(t,e),t=t.sibling}function K0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),jt(e),r&4){try{Ni(3,e,e.return),Ma(3,e)}catch(y){ce(e,e.return,y)}try{Ni(5,e,e.return)}catch(y){ce(e,e.return,y)}}break;case 1:mt(t,e),jt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(mt(t,e),jt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(y){ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mg(i,s),hu(a,o);var c=hu(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?wg(i,f):d==="dangerouslySetInnerHTML"?yg(i,f):d==="children"?Yi(i,f):Dc(i,d,f,c)}switch(a){case"input":uu(i,s);break;case"textarea":gg(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Rr(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Rr(i,!!s.multiple,s.defaultValue,!0):Rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[rs]=s}catch(y){ce(e,e.return,y)}}break;case 6:if(mt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ce(e,e.return,y)}}break;case 3:if(mt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(y){ce(e,e.return,y)}break;case 4:mt(t,e),jt(e);break;case 13:mt(t,e),jt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ud=fe())),r&4&&hp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(c=De)||d,mt(t,e),De=c):mt(t,e),jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(p=R,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ni(4,p,p.return);break;case 1:Sr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Sr(p,p.return);break;case 22:if(p.memoizedState!==null){gp(f);continue}}g!==null?(g.return=p,R=g):gp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xg("display",o))}catch(y){ce(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){ce(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),jt(e),r&4&&hp(e);break;case 21:break;default:mt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(W0(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var s=pp(e);Uu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=pp(e);Hu(e,a,o);break;default:throw Error(E(161))}}catch(u){ce(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fw(e,t,n){R=e,Y0(e)}function Y0(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Us;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||De;a=Us;var c=De;if(Us=o,(De=u)&&!c)for(R=i;R!==null;)o=R,u=o.child,o.tag===22&&o.memoizedState!==null?vp(i):u!==null?(u.return=o,R=u):vp(i);for(;s!==null;)R=s,Y0(s),s=s.sibling;R=i,Us=a,De=c}mp(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):mp(e)}}function mp(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Ma(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&qf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qf(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ji(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}De||t.flags&512&&zu(t)}catch(p){ce(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function gp(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function vp(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ma(4,t)}catch(u){ce(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ce(t,i,u)}}var s=t.return;try{zu(t)}catch(u){ce(t,s,u)}break;case 5:var o=t.return;try{zu(t)}catch(u){ce(t,o,u)}}}catch(u){ce(t,t.return,u)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Ow=Math.ceil,aa=Yt.ReactCurrentDispatcher,ad=Yt.ReactCurrentOwner,ct=Yt.ReactCurrentBatchConfig,H=0,Se=null,me=null,je=0,Ze=0,kr=Dn(0),ye=0,us=null,rr=0,_a=0,ld=0,Fi=null,Oe=null,ud=0,Ur=1/0,_t=null,la=!1,Wu=null,xn=null,Ws=!1,fn=null,ua=0,Oi=0,Gu=null,Ao=-1,Do=0;function Ve(){return H&6?fe():Ao!==-1?Ao:Ao=fe()}function wn(e){return e.mode&1?H&2&&je!==0?je&-je:jw.transition!==null?(Do===0&&(Do=Lg()),Do):(e=K,e!==0||(e=window.event,e=e===void 0?16:Ng(e.type)),e):1}function St(e,t,n,r){if(50<Oi)throw Oi=0,Gu=null,Error(E(185));ws(e,n,r),(!(H&2)||e!==Se)&&(e===Se&&(!(H&2)&&(_a|=n),ye===4&&cn(e,je)),We(e,r),n===1&&H===0&&!(t.mode&1)&&(Ur=fe()+500,Ra&&Rn()))}function We(e,t){var n=e.callbackNode;j1(e,t);var r=Go(e,e===Se?je:0);if(r===0)n!==null&&Tf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tf(n),t===1)e.tag===0?Cw(yp.bind(null,e)):i0(yp.bind(null,e)),xw(function(){!(H&6)&&Rn()}),n=null;else{switch(Ig(r)){case 1:n=_c;break;case 4:n=Dg;break;case 16:n=Wo;break;case 536870912:n=Rg;break;default:n=Wo}n=nv(n,Q0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Q0(e,t){if(Ao=-1,Do=0,H&6)throw Error(E(327));var n=e.callbackNode;if(Br()&&e.callbackNode!==n)return null;var r=Go(e,e===Se?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ca(e,r);else{t=r;var i=H;H|=2;var s=Z0();(Se!==e||je!==t)&&(_t=null,Ur=fe()+500,Qn(e,t));do try{Uw();break}catch(a){X0(e,a)}while(!0);Yc(),aa.current=s,H=i,me!==null?t=0:(Se=null,je=0,t=ye)}if(t!==0){if(t===2&&(i=xu(e),i!==0&&(r=i,t=Ku(e,i))),t===1)throw n=us,Qn(e,0),cn(e,r),We(e,fe()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!zw(i)&&(t=ca(e,r),t===2&&(s=xu(e),s!==0&&(r=s,t=Ku(e,s))),t===1))throw n=us,Qn(e,0),cn(e,r),We(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Fn(e,Oe,_t);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=ud+500-fe(),10<t)){if(Go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pu(Fn.bind(null,e,Oe,_t),t);break}Fn(e,Oe,_t);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ow(r/1960))-r,10<r){e.timeoutHandle=Pu(Fn.bind(null,e,Oe,_t),r);break}Fn(e,Oe,_t);break;case 5:Fn(e,Oe,_t);break;default:throw Error(E(329))}}}return We(e,fe()),e.callbackNode===n?Q0.bind(null,e):null}function Ku(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=ca(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Yu(t)),e}function Yu(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function zw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~ld,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function yp(e){if(H&6)throw Error(E(327));Br();var t=Go(e,0);if(!(t&1))return We(e,fe()),null;var n=ca(e,t);if(e.tag!==0&&n===2){var r=xu(e);r!==0&&(t=r,n=Ku(e,r))}if(n===1)throw n=us,Qn(e,0),cn(e,t),We(e,fe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,Oe,_t),We(e,fe()),null}function cd(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Ur=fe()+500,Ra&&Rn())}}function ir(e){fn!==null&&fn.tag===0&&!(H&6)&&Br();var t=H;H|=1;var n=ct.transition,r=K;try{if(ct.transition=null,K=1,e)return e()}finally{K=r,ct.transition=n,H=t,!(H&6)&&Rn()}}function dd(){Ze=kr.current,q(kr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yw(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Wc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:zr(),q(He),q(Ie),ed();break;case 5:qc(r);break;case 4:zr();break;case 13:q(se);break;case 19:q(se);break;case 10:Qc(r.type._context);break;case 22:case 23:dd()}n=n.return}if(Se=e,me=e=Sn(e.current,null),je=Ze=t,ye=0,us=null,ld=_a=rr=0,Oe=Fi=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return e}function X0(e,t){do{var n=me;try{if(Yc(),To.current=oa,sa){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sa=!1}if(nr=0,xe=ge=ae=null,Vi=!1,os=0,ad.current=null,n===null||n.return===null){ye=1,us=t,me=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=sp(o);if(g!==null){g.flags&=-257,op(g,o,a,s,t),g.mode&1&&ip(s,c,t),t=g,u=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if(!(t&1)){ip(s,c,t),fd();break e}u=Error(E(426))}}else if(ie&&a.mode&1){var k=sp(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),op(k,o,a,s,t),Gc(Hr(u,a));break e}}s=u=Hr(u,a),ye!==4&&(ye=2),Fi===null?Fi=[s]:Fi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=I0(s,u,t);Jf(s,m);break e;case 1:a=u;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xn===null||!xn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=M0(s,a,t);Jf(s,C);break e}}s=s.return}while(s!==null)}q0(n)}catch(j){t=j,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Z0(){var e=aa.current;return aa.current=oa,e===null?oa:e}function fd(){(ye===0||ye===3||ye===2)&&(ye=4),Se===null||!(rr&268435455)&&!(_a&268435455)||cn(Se,je)}function ca(e,t){var n=H;H|=2;var r=Z0();(Se!==e||je!==t)&&(_t=null,Qn(e,t));do try{Hw();break}catch(i){X0(e,i)}while(!0);if(Yc(),H=n,aa.current=r,me!==null)throw Error(E(261));return Se=null,je=0,ye}function Hw(){for(;me!==null;)J0(me)}function Uw(){for(;me!==null&&!m1();)J0(me)}function J0(e){var t=tv(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?q0(e):me=t,ad.current=null}function q0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$w(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=Bw(n,t,Ze),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function Fn(e,t,n){var r=K,i=ct.transition;try{ct.transition=null,K=1,Ww(e,t,n,r)}finally{ct.transition=i,K=r}return null}function Ww(e,t,n,r){do Br();while(fn!==null);if(H&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(b1(e,s),e===Se&&(me=Se=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,nv(Wo,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=K;K=1;var a=H;H|=4,ad.current=null,Nw(e,n),K0(n,e),dw(bu),Ko=!!ju,bu=ju=null,e.current=n,Fw(n),g1(),H=a,K=o,ct.transition=s}else e.current=n;if(Ws&&(Ws=!1,fn=e,ua=i),s=e.pendingLanes,s===0&&(xn=null),x1(n.stateNode),We(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(la)throw la=!1,e=Wu,Wu=null,e;return ua&1&&e.tag!==0&&Br(),s=e.pendingLanes,s&1?e===Gu?Oi++:(Oi=0,Gu=e):Oi=0,Rn(),null}function Br(){if(fn!==null){var e=Ig(ua),t=ct.transition,n=K;try{if(ct.transition=null,K=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,ua=0,H&6)throw Error(E(331));var i=H;for(H|=4,R=e.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ni(8,d,s)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var p=d.sibling,g=d.return;if(U0(d),d===c){R=null;break}if(p!==null){p.return=g,R=p;break}R=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var h=e.current;for(R=h;R!==null;){o=R;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,R=v;else e:for(o=h;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ma(9,a)}}catch(j){ce(a,a.return,j)}if(a===o){R=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,R=C;break e}R=a.return}}if(H=i,Rn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Ta,e)}catch{}r=!0}return r}finally{K=n,ct.transition=t}}return!1}function xp(e,t,n){t=Hr(n,t),t=I0(e,t,1),e=yn(e,t,1),t=Ve(),e!==null&&(ws(e,1,t),We(e,t))}function ce(e,t,n){if(e.tag===3)xp(e,e,n);else for(;t!==null;){if(t.tag===3){xp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=Hr(n,e),e=M0(t,e,1),t=yn(t,e,1),e=Ve(),t!==null&&(ws(t,1,e),We(t,e));break}}t=t.return}}function Gw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(je&n)===n&&(ye===4||ye===3&&(je&130023424)===je&&500>fe()-ud?Qn(e,0):ld|=n),We(e,t)}function ev(e,t){t===0&&(e.mode&1?(t=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):t=1);var n=Ve();e=Wt(e,t),e!==null&&(ws(e,t,n),We(e,n))}function Kw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ev(e,n)}function Yw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),ev(e,n)}var tv;tv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,_w(e,t,n);ze=!!(e.flags&131072)}else ze=!1,ie&&t.flags&1048576&&s0(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var i=Nr(t,Ie.current);_r(t,n),i=nd(null,t,r,e,i,n);var s=rd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(s=!0,Jo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zc(t),i.updater=Ia,t.stateNode=i,i._reactInternals=t,Mu(t,r,e,n),t=$u(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&Uc(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xw(r),e=vt(r,e),i){case 0:t=Bu(null,t,r,e,n);break e;case 1:t=up(null,t,r,e,n);break e;case 11:t=ap(null,t,r,e,n);break e;case 14:t=lp(null,t,r,vt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Bu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),up(e,t,r,i,n);case 3:e:{if(V0(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,d0(e,t),ra(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Hr(Error(E(423)),t),t=cp(e,t,r,n,i);break e}else if(r!==i){i=Hr(Error(E(424)),t),t=cp(e,t,r,n,i);break e}else for(Je=vn(t.stateNode.containerInfo.firstChild),qe=t,ie=!0,xt=null,n=u0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){t=Gt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return f0(t),e===null&&Ru(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Tu(r,i)?o=null:s!==null&&Tu(r,s)&&(t.flags|=32),$0(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&Ru(t),null;case 13:return N0(e,t,n);case 4:return Jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),ap(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Q(ta,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!He.current){t=Gt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ft(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lu(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=dt(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),lp(e,t,r,i,n);case 15:return _0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Eo(e,t),t.tag=1,Ue(r)?(e=!0,Jo(t)):e=!1,_r(t,n),L0(t,r,i),Mu(t,r,i,n),$u(null,t,r,!0,e,n);case 19:return F0(e,t,n);case 22:return B0(e,t,n)}throw Error(E(156,t.tag))};function nv(e,t){return Ag(e,t)}function Qw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Qw(e,t,n,r)}function pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xw(e){if(typeof e=="function")return pd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lc)return 11;if(e===Ic)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")pd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fr:return Xn(n.children,i,s,t);case Rc:o=8,i|=8;break;case iu:return e=ut(12,n,t,i|2),e.elementType=iu,e.lanes=s,e;case su:return e=ut(13,n,t,i),e.elementType=su,e.lanes=s,e;case ou:return e=ut(19,n,t,i),e.elementType=ou,e.lanes=s,e;case fg:return Ba(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cg:o=10;break e;case dg:o=9;break e;case Lc:o=11;break e;case Ic:o=14;break e;case an:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Xn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=ut(22,e,r,t),e.elementType=fg,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hd(e,t,n,r,i,s,o,a,u){return e=new Zw(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ut(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(s),e}function Jw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rv(e){if(!e)return Tn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ue(n))return r0(e,n,t)}return t}function iv(e,t,n,r,i,s,o,a,u){return e=hd(n,r,!0,e,i,s,o,a,u),e.context=rv(null),n=e.current,r=Ve(),i=wn(n),s=Ft(r,i),s.callback=t??null,yn(n,s,i),e.current.lanes=i,ws(e,i,r),We(e,r),e}function $a(e,t,n,r){var i=t.current,s=Ve(),o=wn(i);return n=rv(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(i,t,o),e!==null&&(St(e,i,o,s),bo(e,i,o)),o}function da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function md(e,t){wp(e,t),(e=e.alternate)&&wp(e,t)}function qw(){return null}var sv=typeof reportError=="function"?reportError:function(e){console.error(e)};function gd(e){this._internalRoot=e}Va.prototype.render=gd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));$a(e,t,null,null)};Va.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){$a(null,e,null,null)}),t[Ut]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Vg(e)}};function vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function e2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=da(o);s.call(c)}}var o=iv(t,r,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=o,e[Ut]=o.current,ts(e.nodeType===8?e.parentNode:e),ir(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=da(u);a.call(c)}}var u=hd(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=u,e[Ut]=u.current,ts(e.nodeType===8?e.parentNode:e),ir(function(){$a(t,u,n,r)}),u}function Fa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=da(o);a.call(u)}}$a(t,o,e,i)}else o=e2(n,t,e,i,r);return da(o)}Mg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ti(t.pendingLanes);n!==0&&(Bc(t,n|1),We(t,fe()),!(H&6)&&(Ur=fe()+500,Rn()))}break;case 13:ir(function(){var r=Wt(e,1);if(r!==null){var i=Ve();St(r,e,1,i)}}),md(e,1)}};$c=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Ve();St(t,e,134217728,n)}md(e,134217728)}};_g=function(e){if(e.tag===13){var t=wn(e),n=Wt(e,t);if(n!==null){var r=Ve();St(n,e,t,r)}md(e,t)}};Bg=function(){return K};$g=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};gu=function(e,t,n){switch(t){case"input":if(uu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Da(r);if(!i)throw Error(E(90));hg(r),uu(r,i)}}}break;case"textarea":gg(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};Cg=cd;jg=ir;var t2={usingClientEntryPoint:!1,Events:[ks,gr,Da,Sg,kg,cd]},yi={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n2={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pg(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{Ta=Gs.inject(n2),At=Gs}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t2;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(t))throw Error(E(200));return Jw(e,t,null,n)};rt.createRoot=function(e,t){if(!vd(e))throw Error(E(299));var n=!1,r="",i=sv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hd(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,ts(e.nodeType===8?e.parentNode:e),new gd(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Pg(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return ir(e)};rt.hydrate=function(e,t,n){if(!Na(t))throw Error(E(200));return Fa(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!vd(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=iv(t,null,e,1,n??null,i,!1,s,o),e[Ut]=t.current,ts(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Va(t)};rt.render=function(e,t,n){if(!Na(t))throw Error(E(200));return Fa(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Na(e))throw Error(E(40));return e._reactRootContainer?(ir(function(){Fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};rt.unstable_batchedUpdates=cd;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Na(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Fa(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(e){console.error(e)}}ov(),og.exports=rt;var r2=og.exports,av,kp=r2;av=kp.createRoot,kp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const Cp="popstate";function i2(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Qu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fa(i)}return o2(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s2(){return Math.random().toString(36).substr(2,8)}function jp(e,t){return{usr:e.state,key:e.key,idx:t}}function Qu(e,t,n,r){return n===void 0&&(n=null),cs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ri(t):t,{state:n,key:t&&t.key||r||s2()})}function fa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ri(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function o2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pn.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(cs({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=pn.Pop;let k=d(),m=k==null?null:k-c;c=k,u&&u({action:a,location:y.location,delta:m})}function p(k,m){a=pn.Push;let h=Qu(y.location,k,m);c=d()+1;let v=jp(h,c),C=y.createHref(h);try{o.pushState(v,"",C)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(C)}s&&u&&u({action:a,location:y.location,delta:1})}function g(k,m){a=pn.Replace;let h=Qu(y.location,k,m);c=d();let v=jp(h,c),C=y.createHref(h);o.replaceState(v,"",C),s&&u&&u({action:a,location:y.location,delta:0})}function x(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:fa(k);return h=h.replace(/ $/,"%20"),pe(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let y={get action(){return a},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Cp,f),u=k,()=>{i.removeEventListener(Cp,f),u=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let m=x(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:g,go(k){return o.go(k)}};return y}var bp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bp||(bp={}));function a2(e,t,n){return n===void 0&&(n="/"),l2(e,t,n)}function l2(e,t,n,r){let i=typeof t=="string"?ri(t):t,s=xd(i.pathname||"/",n);if(s==null)return null;let o=lv(e);u2(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=S2(s);a=y2(o[u],c)}return a}function lv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=kn([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lv(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:g2(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of uv(s.path))i(s,o,u)}),t}function uv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uv(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function u2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c2=/^:[\w-]+$/,d2=3,f2=2,p2=1,h2=10,m2=-2,Tp=e=>e==="*";function g2(e,t){let n=e.split("/"),r=n.length;return n.some(Tp)&&(r+=m2),t&&(r+=f2),n.filter(i=>!Tp(i)).reduce((i,s)=>i+(c2.test(s)?d2:s===""?p2:h2),r)}function v2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function y2(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=x2({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:kn([s,f.pathname]),pathnameBase:T2(kn([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=kn([s,f.pathnameBase]))}return o}function x2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=w2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[f];return g&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function w2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function S2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const k2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C2=e=>k2.test(e);function j2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ri(e):e,s;if(n)if(C2(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),yd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Pp(n.substring(1),"/"):s=Pp(n,t)}else s=t;return{pathname:s,search:P2(r),hash:E2(i)}}function Pp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function b2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wd(e,t){let n=b2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ri(e):(i=cs({},e),pe(!i.pathname||!i.pathname.includes("?"),Pl("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Pl("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Pl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let u=j2(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),T2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function A2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cv=["post","put","patch","delete"];new Set(cv);const D2=["get",...cv];new Set(D2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}const kd=S.createContext(null),R2=S.createContext(null),Ln=S.createContext(null),Oa=S.createContext(null),In=S.createContext({outlet:null,matches:[],isDataRoute:!1}),dv=S.createContext(null);function L2(e,t){let{relative:n}=t===void 0?{}:t;ii()||pe(!1);let{basename:r,navigator:i}=S.useContext(Ln),{hash:s,pathname:o,search:a}=pv(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:kn([r,o])),i.createHref({pathname:u,search:a,hash:s})}function ii(){return S.useContext(Oa)!=null}function si(){return ii()||pe(!1),S.useContext(Oa).location}function fv(e){S.useContext(Ln).static||S.useLayoutEffect(e)}function Cd(){let{isDataRoute:e}=S.useContext(In);return e?W2():I2()}function I2(){ii()||pe(!1);let e=S.useContext(kd),{basename:t,future:n,navigator:r}=S.useContext(Ln),{matches:i}=S.useContext(In),{pathname:s}=si(),o=JSON.stringify(wd(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return fv(()=>{a.current=!0}),S.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Sd(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function pv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Ln),{matches:i}=S.useContext(In),{pathname:s}=si(),o=JSON.stringify(wd(i,r.v7_relativeSplatPath));return S.useMemo(()=>Sd(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function M2(e,t){return _2(e,t)}function _2(e,t,n,r){ii()||pe(!1);let{navigator:i}=S.useContext(Ln),{matches:s}=S.useContext(In),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=si(),d;if(t){var f;let k=typeof t=="string"?ri(t):t;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||pe(!1),d=k}else d=c;let p=d.pathname||"/",g=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=a2(e,{pathname:g}),y=F2(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:kn([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:kn([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&y?S.createElement(Oa.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:pn.Pop}},y):y}function B2(){let e=U2(),t=A2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const $2=S.createElement(B2,null);class V2 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(In.Provider,{value:this.props.routeContext},S.createElement(dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N2(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(kd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(In.Provider,{value:t},r)}function F2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,x=!1,y=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||$2,u&&(c<0&&p===0?(G2("route-fallback"),x=!0,k=null):c===p&&(x=!0,k=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),h=()=>{let v;return g?v=y:x?v=k:f.route.Component?v=S.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,S.createElement(N2,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?S.createElement(V2,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var hv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hv||{}),mv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mv||{});function O2(e){let t=S.useContext(kd);return t||pe(!1),t}function z2(e){let t=S.useContext(R2);return t||pe(!1),t}function H2(e){let t=S.useContext(In);return t||pe(!1),t}function gv(e){let t=H2(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function U2(){var e;let t=S.useContext(dv),n=z2(),r=gv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function W2(){let{router:e}=O2(hv.UseNavigateStable),t=gv(mv.UseNavigateStable),n=S.useRef(!1);return fv(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ds({fromRouteId:t},s)))},[e,t])}const Ep={};function G2(e,t,n){Ep[e]||(Ep[e]=!0)}function K2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Y2(e){let{to:t,replace:n,state:r,relative:i}=e;ii()||pe(!1);let{future:s,static:o}=S.useContext(Ln),{matches:a}=S.useContext(In),{pathname:u}=si(),c=Cd(),d=Sd(t,wd(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return S.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ei(e){pe(!1)}function Q2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=pn.Pop,navigator:s,static:o=!1,future:a}=e;ii()&&pe(!1);let u=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:s,static:o,future:ds({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ri(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:x="default"}=r,y=S.useMemo(()=>{let k=xd(d,u);return k==null?null:{location:{pathname:k,search:f,hash:p,state:g,key:x},navigationType:i}},[u,d,f,p,g,x,i]);return y==null?null:S.createElement(Ln.Provider,{value:c},S.createElement(Oa.Provider,{children:n,value:y}))}function X2(e){let{children:t,location:n}=e;return M2(Xu(t),n)}new Promise(()=>{});function Xu(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Xu(r.props.children,s));return}r.type!==Ei&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zu(){return Zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zu.apply(this,arguments)}function Z2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function J2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q2(e,t){return e.button===0&&(!t||t==="_self")&&!J2(e)}const eS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tS="6";try{window.__reactRouterVersion=tS}catch{}const nS="startTransition",Ap=Gx[nS];function rS(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=i2({window:i,v5Compat:!0}));let o=s.current,[a,u]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=S.useCallback(f=>{c&&Ap?Ap(()=>u(f)):u(f)},[u,c]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>K2(r),[r]),S.createElement(Q2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const iS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vv=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=Z2(t,eS),{basename:g}=S.useContext(Ln),x,y=!1;if(typeof c=="string"&&sS.test(c)&&(x=c,iS))try{let v=new URL(window.location.href),C=c.startsWith("//")?new URL(v.protocol+c):new URL(c),j=xd(C.pathname,g);C.origin===v.origin&&j!=null?c=j+C.search+C.hash:y=!0}catch{}let k=L2(c,{relative:i}),m=oS(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||m(v)}return S.createElement("a",Zu({},p,{href:x||k,onClick:y||s?r:h,ref:n,target:u}))});var Dp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dp||(Dp={}));var Rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function oS(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,u=Cd(),c=si(),d=pv(e,{relative:o});return S.useCallback(f=>{if(q2(f,n)){f.preventDefault();let p=r!==void 0?r:fa(c)===fa(d);u(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,e,s,o,a])}const yv=S.createContext({isDark:!0,toggleTheme:()=>{}}),aS=({children:e})=>{const[t,n]=S.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});S.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),S.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=o=>{localStorage.getItem("theme")||n(o.matches)};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=()=>n(!t);return l.jsx(yv.Provider,{value:{isDark:t,toggleTheme:r},children:e})},xv=()=>{const e=S.useContext(yv);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Re.apply(this,arguments)};function fs(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var J="-ms-",zi="-moz-",W="-webkit-",wv="comm",za="rule",jd="decl",lS="@import",Sv="@keyframes",uS="@layer",kv=Math.abs,bd=String.fromCharCode,Ju=Object.assign;function cS(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Cv(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Lo(e,t,n){return e.indexOf(t,n)}function we(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function Tt(e){return e.length}function jv(e){return e.length}function Ai(e,t){return t.push(e),e}function dS(e,t){return e.map(t).join("")}function Lp(e,t){return e.filter(function(n){return!Bt(n,t)})}var Ha=1,Gr=1,bv=0,pt=0,he=0,oi="";function Ua(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ha,column:Gr,length:o,return:"",siblings:a}}function sn(e,t){return Ju(Ua("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ur(e){for(;e.root;)e=sn(e.root,{children:[e]});Ai(e,e.siblings)}function fS(){return he}function pS(){return he=pt>0?we(oi,--pt):0,Gr--,he===10&&(Gr=1,Ha--),he}function kt(){return he=pt<bv?we(oi,pt++):0,Gr++,he===10&&(Gr=1,Ha++),he}function Zn(){return we(oi,pt)}function Io(){return pt}function Wa(e,t){return Wr(oi,e,t)}function qu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hS(e){return Ha=Gr=1,bv=Tt(oi=e),pt=0,[]}function mS(e){return oi="",e}function El(e){return Cv(Wa(pt-1,ec(e===91?e+2:e===40?e+1:e)))}function gS(e){for(;(he=Zn())&&he<33;)kt();return qu(e)>2||qu(he)>3?"":" "}function vS(e,t){for(;--t&&kt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return Wa(e,Io()+(t<6&&Zn()==32&&kt()==32))}function ec(e){for(;kt();)switch(he){case e:return pt;case 34:case 39:e!==34&&e!==39&&ec(he);break;case 40:e===41&&ec(e);break;case 92:kt();break}return pt}function yS(e,t){for(;kt()&&e+he!==57;)if(e+he===84&&Zn()===47)break;return"/*"+Wa(t,pt-1)+"*"+bd(e===47?e:kt())}function xS(e){for(;!qu(Zn());)kt();return Wa(e,pt)}function wS(e){return mS(Mo("",null,null,null,[""],e=hS(e),0,[0],e))}function Mo(e,t,n,r,i,s,o,a,u){for(var c=0,d=0,f=o,p=0,g=0,x=0,y=1,k=1,m=1,h=0,v="",C=i,j=s,b=r,T=v;k;)switch(x=h,h=kt()){case 40:if(x!=108&&we(T,f-1)==58){Lo(T+=V(El(h),"&","&\f"),"&\f",kv(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:T+=El(h);break;case 9:case 10:case 13:case 32:T+=gS(x);break;case 92:T+=vS(Io()-1,7);continue;case 47:switch(Zn()){case 42:case 47:Ai(SS(yS(kt(),Io()),t,n,u),u);break;default:T+="/"}break;case 123*y:a[c++]=Tt(T)*m;case 125*y:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+d:m==-1&&(T=V(T,/\f/g,"")),g>0&&Tt(T)-f&&Ai(g>32?Mp(T+";",r,n,f-1,u):Mp(V(T," ","")+";",r,n,f-2,u),u);break;case 59:T+=";";default:if(Ai(b=Ip(T,t,n,c,d,i,a,v,C=[],j=[],f,s),s),h===123)if(d===0)Mo(T,t,b,b,C,s,f,a,j);else switch(p===99&&we(T,3)===110?100:p){case 100:case 108:case 109:case 115:Mo(e,b,b,r&&Ai(Ip(e,b,b,0,0,i,a,v,i,C=[],f,j),j),i,j,f,a,r?C:j);break;default:Mo(T,b,b,b,[""],j,0,a,j)}}c=d=g=0,y=m=1,v=T="",f=o;break;case 58:f=1+Tt(T),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&pS()==125)continue}switch(T+=bd(h),h*y){case 38:m=d>0?1:(T+="\f",-1);break;case 44:a[c++]=(Tt(T)-1)*m,m=1;break;case 64:Zn()===45&&(T+=El(kt())),p=Zn(),d=f=Tt(v=T+=xS(Io())),h++;break;case 45:x===45&&Tt(T)==2&&(y=0)}}return s}function Ip(e,t,n,r,i,s,o,a,u,c,d,f){for(var p=i-1,g=i===0?s:[""],x=jv(g),y=0,k=0,m=0;y<r;++y)for(var h=0,v=Wr(e,p+1,p=kv(k=o[y])),C=e;h<x;++h)(C=Cv(k>0?g[h]+" "+v:V(v,/&\f/g,g[h])))&&(u[m++]=C);return Ua(e,t,n,i===0?za:a,u,c,d,f)}function SS(e,t,n,r){return Ua(e,t,n,wv,bd(fS()),Wr(e,2,-2),0,r)}function Mp(e,t,n,r,i){return Ua(e,t,n,jd,Wr(e,0,r),Wr(e,r+1,-1),r,i)}function Tv(e,t,n){switch(cS(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return zi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+zi+e+J+e+e;case 5936:switch(we(e,t+11)){case 114:return W+e+J+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+J+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+J+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+J+e+e;case 6165:return W+e+J+"flex-"+e+e;case 5187:return W+e+V(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return W+e+J+"flex-item-"+V(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":J+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return W+e+J+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+J+V(e,"shrink","negative")+e;case 5292:return W+e+J+V(e,"basis","preferred-size")+e;case 6060:return W+"box-"+V(e,"-grow","")+W+e+J+V(e,"grow","positive")+e;case 4554:return W+V(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return J+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return J+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Bt(r.props,/grid-\w+-end/)})?~Lo(e+(n=n[t].value),"span",0)?e:J+V(e,"-start","")+e+J+"grid-row-span:"+(~Lo(n,"span",0)?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":J+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Bt(r.props,/grid-\w+-start/)})?e:J+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+zi+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Lo(e,"stretch",0)?Tv(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return J+i+":"+s+c+(o?J+i+"-span:"+(a?u:+u-+s)+c:"")+e});case 4949:if(we(e,t+6)===121)return V(e,":",":"+W)+e;break;case 6444:switch(we(e,we(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(we(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+J+"$2box$3")+e;case 100:return V(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function pa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function kS(e,t,n,r){switch(e.type){case uS:if(e.children.length)break;case lS:case jd:return e.return=e.return||e.value;case wv:return"";case Sv:return e.return=e.value+"{"+pa(e.children,r)+"}";case za:if(!Tt(e.value=e.props.join(",")))return""}return Tt(n=pa(e.children,r))?e.return=e.value+"{"+n+"}":""}function CS(e){var t=jv(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function jS(e){return function(t){t.root||(t=t.return)&&e(t)}}function bS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jd:e.return=Tv(e.value,e.length,n);return;case Sv:return pa([sn(e,{value:V(e.value,"@","@"+W)})],r);case za:if(e.length)return dS(n=e.props,function(i){switch(Bt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ur(sn(e,{props:[V(i,/:(read-\w+)/,":"+zi+"$1")]})),ur(sn(e,{props:[i]})),Ju(e,{props:Lp(n,r)});break;case"::placeholder":ur(sn(e,{props:[V(i,/:(plac\w+)/,":"+W+"input-$1")]})),ur(sn(e,{props:[V(i,/:(plac\w+)/,":"+zi+"$1")]})),ur(sn(e,{props:[V(i,/:(plac\w+)/,J+"input-$1")]})),ur(sn(e,{props:[i]})),Ju(e,{props:Lp(n,r)});break}return""})}}var TS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xe={},Kr=typeof process<"u"&&Xe!==void 0&&(Xe.REACT_APP_SC_ATTR||Xe.SC_ATTR)||"data-styled",Pv="active",Ev="data-styled-version",Ga="6.1.19",Td=`/*!sc*/
`,ha=typeof window<"u"&&typeof document<"u",PS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xe!==void 0&&Xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xe.REACT_APP_SC_DISABLE_SPEEDY!==""?Xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xe!==void 0&&Xe.SC_DISABLE_SPEEDY!==void 0&&Xe.SC_DISABLE_SPEEDY!==""&&Xe.SC_DISABLE_SPEEDY!=="false"&&Xe.SC_DISABLE_SPEEDY),ES={},Ka=Object.freeze([]),Yr=Object.freeze({});function Av(e,t,n){return n===void 0&&(n=Yr),e.theme!==n.theme&&e.theme||t||n.theme}var Dv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),AS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DS=/(^-|-$)/g;function _p(e){return e.replace(AS,"-").replace(DS,"")}var RS=/(a)(d)/gi,Ks=52,Bp=function(e){return String.fromCharCode(e+(e>25?39:97))};function tc(e){var t,n="";for(t=Math.abs(e);t>Ks;t=t/Ks|0)n=Bp(t%Ks)+n;return(Bp(t%Ks)+n).replace(RS,"$1-$2")}var Al,Rv=5381,Cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lv=function(e){return Cr(Rv,e)};function Iv(e){return tc(Lv(e)>>>0)}function LS(e){return e.displayName||e.name||"Component"}function Dl(e){return typeof e=="string"&&!0}var Mv=typeof Symbol=="function"&&Symbol.for,_v=Mv?Symbol.for("react.memo"):60115,IS=Mv?Symbol.for("react.forward_ref"):60112,MS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},BS=((Al={})[IS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Al[_v]=Bv,Al);function $p(e){return("type"in(t=e)&&t.type.$$typeof)===_v?Bv:"$$typeof"in e?BS[e.$$typeof]:MS;var t}var $S=Object.defineProperty,VS=Object.getOwnPropertyNames,Vp=Object.getOwnPropertySymbols,NS=Object.getOwnPropertyDescriptor,FS=Object.getPrototypeOf,Np=Object.prototype;function $v(e,t,n){if(typeof t!="string"){if(Np){var r=FS(t);r&&r!==Np&&$v(e,r,n)}var i=VS(t);Vp&&(i=i.concat(Vp(t)));for(var s=$p(e),o=$p(t),a=0;a<i.length;++a){var u=i[a];if(!(u in _S||n&&n[u]||o&&u in o||s&&u in s)){var c=NS(t,u);try{$S(e,u,c)}catch{}}}}return e}function Qr(e){return typeof e=="function"}function Pd(e){return typeof e=="object"&&"styledComponentId"in e}function Gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ps(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rc(e,t,n){if(n===void 0&&(n=!1),!n&&!ps(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rc(e[r],t[r]);else if(ps(t))for(var r in t)e[r]=rc(e[r],t[r]);return e}function Ed(e,t){Object.defineProperty(e,"toString",{value:t})}function js(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var OS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw js(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Td);return n},e}(),_o=new Map,ma=new Map,Bo=1,Ys=function(e){if(_o.has(e))return _o.get(e);for(;ma.has(Bo);)Bo++;var t=Bo++;return _o.set(e,t),ma.set(t,e),t},zS=function(e,t){Bo=t+1,_o.set(e,t),ma.set(t,e)},HS="style[".concat(Kr,"][").concat(Ev,'="').concat(Ga,'"]'),US=new RegExp("^".concat(Kr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),WS=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},GS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Td),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(US);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(zS(d,c),WS(e,d,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Fp=function(e){for(var t=document.querySelectorAll(HS),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Kr)!==Pv&&(GS(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function KS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Kr,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Kr,Pv),r.setAttribute(Ev,Ga);var o=KS();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},YS=function(){function e(t){this.element=Vv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw js(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),QS=function(){function e(t){this.element=Vv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),XS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Op=ha,ZS={isServer:!ha,useCSSOMInjection:!PS},ga=function(){function e(t,n,r){t===void 0&&(t=Yr),n===void 0&&(n={});var i=this;this.options=Re(Re({},ZS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ha&&Op&&(Op=!1,Fp(this)),Ed(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(f){var p=function(m){return ma.get(m)}(f);if(p===void 0)return"continue";var g=s.names.get(p),x=o.getGroup(f);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(Kr,".g").concat(f,'[id="').concat(p,'"]'),k="";g!==void 0&&g.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),u+="".concat(x).concat(y,'{content:"').concat(k,'"}').concat(Td)},d=0;d<a;d++)c(d);return u}(i)})}return e.registerId=function(t){return Ys(t)},e.prototype.rehydrate=function(){!this.server&&ha&&Fp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new XS(i):r?new YS(i):new QS(i)}(this.options),new OS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ys(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ys(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ys(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),JS=/&/g,qS=/^\s*\/\/.*$/gm;function Nv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Nv(n.children,t)),n})}function ek(e){var t,n,r,i=Yr,s=i.options,o=s===void 0?Yr:s,a=i.plugins,u=a===void 0?Ka:a,c=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=u.slice();d.push(function(p){p.type===za&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(JS,n).replace(r,c))}),o.prefix&&d.push(bS),d.push(kS);var f=function(p,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(qS,""),m=wS(x||g?"".concat(x," ").concat(g," { ").concat(k," }"):k);o.namespace&&(m=Nv(m,o.namespace));var h=[];return pa(m,CS(d.concat(jS(function(v){return h.push(v)})))),h};return f.hash=u.length?u.reduce(function(p,g){return g.name||js(15),Cr(p,g.name)},Rv).toString():"",f}var tk=new ga,ic=ek(),Fv=Et.createContext({shouldForwardProp:void 0,styleSheet:tk,stylis:ic});Fv.Consumer;Et.createContext(void 0);function sc(){return S.useContext(Fv)}var nk=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ic);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ed(this,function(){throw js(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ic),this.name+t.hash},e}(),rk=function(e){return e>="A"&&e<="Z"};function zp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;rk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ov=function(e){return e==null||e===!1||e===""},zv=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Ov(s)&&(Array.isArray(s)&&s.isCss||Qr(s)?r.push("".concat(zp(i),":"),s,";"):ps(s)?r.push.apply(r,fs(fs(["".concat(i," {")],zv(s),!1),["}"],!1)):r.push("".concat(zp(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in TS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cn(e,t,n,r){if(Ov(e))return[];if(Pd(e))return[".".concat(e.styledComponentId)];if(Qr(e)){if(!Qr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Cn(i,t,n,r)}var s;return e instanceof nk?n?(e.inject(n,r),[e.getName(r)]):[e]:ps(e)?zv(e):Array.isArray(e)?Array.prototype.concat.apply(Ka,e.map(function(o){return Cn(o,t,n,r)})):[e.toString()]}function Hv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qr(n)&&!Pd(n))return!1}return!0}var ik=Lv(Ga),sk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hv(t),this.componentId=n,this.baseHash=Cr(ik,n),this.baseStyle=r,ga.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gn(i,this.staticRulesId);else{var s=nc(Cn(this.rules,t,n,r)),o=tc(Cr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Gn(i,o),this.staticRulesId=o}else{for(var u=Cr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=nc(Cn(f,t,n,r));u=Cr(u,p+d),c+=p}}if(c){var g=tc(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Gn(i,g)}}return i},e}(),Ad=Et.createContext(void 0);Ad.Consumer;var Rl={};function ok(e,t,n){var r=Pd(e),i=e,s=!Dl(e),o=t.attrs,a=o===void 0?Ka:o,u=t.componentId,c=u===void 0?function(C,j){var b=typeof C!="string"?"sc":_p(C);Rl[b]=(Rl[b]||0)+1;var T="".concat(b,"-").concat(Iv(Ga+b+Rl[b]));return j?"".concat(j,"-").concat(T):T}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(C){return Dl(C)?"styled.".concat(C):"Styled(".concat(LS(C),")")}(e):d,p=t.displayName&&t.componentId?"".concat(_p(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;x=function(C,j){return y(C,j)&&k(C,j)}}else x=y}var m=new sk(n,p,r?i.componentStyle:void 0);function h(C,j){return function(b,T,P){var L=b.attrs,I=b.componentStyle,z=b.defaultProps,Ge=b.foldedComponentIds,Me=b.styledComponentId,ht=b.target,$=Et.useContext(Ad),Y=sc(),N=b.shouldForwardProp||Y.shouldForwardProp,A=Av(T,$,z)||Yr,M=function(Qt,Ye,It){for(var ci,_n=Re(Re({},Ye),{className:void 0,theme:It}),el=0;el<Qt.length;el+=1){var As=Qr(ci=Qt[el])?ci(_n):ci;for(var Xt in As)_n[Xt]=Xt==="className"?Gn(_n[Xt],As[Xt]):Xt==="style"?Re(Re({},_n[Xt]),As[Xt]):As[Xt]}return Ye.className&&(_n.className=Gn(_n.className,Ye.className)),_n}(L,T,A),_=M.as||ht,U={};for(var G in M)M[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&M.theme===A||(G==="forwardedAs"?U.as=M.forwardedAs:N&&!N(G,_)||(U[G]=M[G]));var Te=function(Qt,Ye){var It=sc(),ci=Qt.generateAndInjectStyles(Ye,It.styleSheet,It.stylis);return ci}(I,M),Ke=Gn(Ge,Me);return Te&&(Ke+=" "+Te),M.className&&(Ke+=" "+M.className),U[Dl(_)&&!Dv.has(_)?"class":"className"]=Ke,P&&(U.ref=P),S.createElement(_,U)}(v,C,j)}h.displayName=f;var v=Et.forwardRef(h);return v.attrs=g,v.componentStyle=m,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?Gn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(j){for(var b=[],T=1;T<arguments.length;T++)b[T-1]=arguments[T];for(var P=0,L=b;P<L.length;P++)rc(j,L[P],!0);return j}({},i.defaultProps,C):C}}),Ed(v,function(){return".".concat(v.styledComponentId)}),s&&$v(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Hp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Up=function(e){return Object.assign(e,{isCss:!0})};function Uv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Qr(e)||ps(e))return Up(Cn(Hp(Ka,fs([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Cn(r):Up(Cn(Hp(r,t)))}function oc(e,t,n){if(n===void 0&&(n=Yr),!t)throw js(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Uv.apply(void 0,fs([i],s,!1)))};return r.attrs=function(i){return oc(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return oc(e,t,Re(Re({},n),i))},r}var Wv=function(e){return oc(ok,e)},w=Wv;Dv.forEach(function(e){w[e]=Wv(e)});var ak=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Hv(t),ga.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(nc(Cn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ga.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function lk(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Uv.apply(void 0,fs([e],t,!1)),i="sc-global-".concat(Iv(JSON.stringify(r))),s=new ak(r,i),o=function(u){var c=sc(),d=Et.useContext(Ad),f=Et.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,d,c.stylis),Et.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function a(u,c,d,f,p){if(s.isStatic)s.renderStyles(u,ES,d,p);else{var g=Re(Re({},c),{theme:Av(c,f,o.defaultProps)});s.renderStyles(u,g,d,p)}}return Et.memo(o)}const uk=lk`
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
`,ck=w.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,dk=w.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,fk=()=>{const{isDark:e}=xv();return l.jsx(ck,{children:l.jsx(dk,{$isDark:e})})},Dd=S.createContext({});function Rd(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ya=S.createContext(null),Ld=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class pk extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function hk({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=S.useContext(Ld);return S.useInsertionEffect(()=>{const{width:o,height:a,top:u,left:c}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),l.jsx(pk,{isPresent:t,childRef:r,sizeRef:i,children:S.cloneElement(e,{ref:r})})}const mk=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=Rd(gk),u=S.useId(),c=S.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),d=S.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return S.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),S.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=l.jsx(hk,{isPresent:n,children:e})),l.jsx(Ya.Provider,{value:d,children:e})};function gk(){return new Map}function Gv(e=!0){const t=S.useContext(Ya);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=S.useId();S.useEffect(()=>{e&&i(s)},[e]);const o=S.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Qs=e=>e.key||"";function Wp(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const Id=typeof window<"u",Kv=Id?S.useLayoutEffect:S.useEffect,ve=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,u]=Gv(o),c=S.useMemo(()=>Wp(e),[e]),d=o&&!a?[]:c.map(Qs),f=S.useRef(!0),p=S.useRef(c),g=Rd(()=>new Map),[x,y]=S.useState(c),[k,m]=S.useState(c);Kv(()=>{f.current=!1,p.current=c;for(let C=0;C<k.length;C++){const j=Qs(k[C]);d.includes(j)?g.delete(j):g.get(j)!==!0&&g.set(j,!1)}},[k,d.length,d.join("-")]);const h=[];if(c!==x){let C=[...c];for(let j=0;j<k.length;j++){const b=k[j],T=Qs(b);d.includes(T)||(C.splice(j,0,b),h.push(b))}s==="wait"&&h.length&&(C=h),m(Wp(C)),y(c);return}const{forceRender:v}=S.useContext(Dd);return l.jsx(l.Fragment,{children:k.map(C=>{const j=Qs(C),b=o&&!a?!1:c===k||d.includes(j),T=()=>{if(g.has(j))g.set(j,!0);else return;let P=!0;g.forEach(L=>{L||(P=!1)}),P&&(v==null||v(),m(p.current),o&&(u==null||u()),r&&r())};return l.jsx(mk,{isPresent:b,initial:!f.current||n?void 0:!1,custom:b?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:b?void 0:T,children:C},j)})})},et=e=>e;let Yv=et;function Md(e){let t;return()=>(t===void 0&&(t=e()),t)}const Xr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ot=e=>e*1e3,zt=e=>e/1e3,vk={useManualTiming:!1};function yk(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(u.schedule(c),e()),c(o)}const u={schedule:(c,d=!1,f=!1)=>{const g=f&&r?t:n;return d&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,u.process(c))}};return u}const Xs=["read","resolveKeyframes","update","preRender","render","postRender"],xk=40;function Qv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Xs.reduce((m,h)=>(m[h]=yk(s),m),{}),{read:a,resolveKeyframes:u,update:c,preRender:d,render:f,postRender:p}=o,g=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,xk),1),i.timestamp=m,i.isProcessing=!0,a.process(i),u.process(i),c.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Xs.reduce((m,h)=>{const v=o[h];return m[h]=(C,j=!1,b=!1)=>(n||x(),v.schedule(C,j,b)),m},{}),cancel:m=>{for(let h=0;h<Xs.length;h++)o[Xs[h]].cancel(m)},state:i,steps:o}}const{schedule:ee,cancel:Pn,state:Ce,steps:Ll}=Qv(typeof requestAnimationFrame<"u"?requestAnimationFrame:et,!0),Xv=S.createContext({strict:!1}),Gp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Zr={};for(const e in Gp)Zr[e]={isEnabled:t=>Gp[e].some(n=>!!t[n])};function wk(e){for(const t in e)Zr[t]={...Zr[t],...e[t]}}const Sk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function va(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Sk.has(e)}let Zv=e=>!va(e);function kk(e){e&&(Zv=t=>t.startsWith("on")?!va(t):e(t))}try{kk(require("@emotion/is-prop-valid").default)}catch{}function Ck(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Zv(i)||n===!0&&va(i)||!t&&!va(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function jk(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Qa=S.createContext({});function hs(e){return typeof e=="string"||Array.isArray(e)}function Xa(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const _d=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bd=["initial",..._d];function Za(e){return Xa(e.animate)||Bd.some(t=>hs(e[t]))}function Jv(e){return!!(Za(e)||e.variants)}function bk(e,t){if(Za(e)){const{initial:n,animate:r}=e;return{initial:n===!1||hs(n)?n:void 0,animate:hs(r)?r:void 0}}return e.inherit!==!1?t:{}}function Tk(e){const{initial:t,animate:n}=bk(e,S.useContext(Qa));return S.useMemo(()=>({initial:t,animate:n}),[Kp(t),Kp(n)])}function Kp(e){return Array.isArray(e)?e.join(" "):e}const Pk=Symbol.for("motionComponentSymbol");function jr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ek(e,t,n){return S.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):jr(n)&&(n.current=r))},[t])}const $d=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ak="framerAppearId",qv="data-"+$d(Ak),{schedule:Vd}=Qv(queueMicrotask,!1),ey=S.createContext({});function Dk(e,t,n,r,i){var s,o;const{visualElement:a}=S.useContext(Qa),u=S.useContext(Xv),c=S.useContext(Ya),d=S.useContext(Ld).reducedMotion,f=S.useRef(null);r=r||u.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,g=S.useContext(ey);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&Rk(f.current,n,i,g);const x=S.useRef(!1);S.useInsertionEffect(()=>{p&&x.current&&p.update(n,c)});const y=n[qv],k=S.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Kv(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Vd.render(p.render),k.current&&p.animationState&&p.animationState.animateChanges())}),S.useEffect(()=>{p&&(!k.current&&p.animationState&&p.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,y)}),k.current=!1))}),p}function Rk(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:u,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ty(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&jr(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:u,layoutRoot:c})}function ty(e){if(e)return e.options.allowProjection!==!1?e.projection:ty(e.parent)}function Lk({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&wk(e);function a(c,d){let f;const p={...S.useContext(Ld),...c,layoutId:Ik(c)},{isStatic:g}=p,x=Tk(c),y=r(c,g);if(!g&&Id){Mk();const k=_k(p);f=k.MeasureLayout,x.visualElement=Dk(i,y,p,t,k.ProjectionNode)}return l.jsxs(Qa.Provider,{value:x,children:[f&&x.visualElement?l.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,c,Ek(y,x.visualElement,d),y,g,x.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const u=S.forwardRef(a);return u[Pk]=i,u}function Ik({layoutId:e}){const t=S.useContext(Dd).id;return t&&e!==void 0?t+"-"+e:e}function Mk(e,t){S.useContext(Xv).strict}function _k(e){const{drag:t,layout:n}=Zr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Bk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Nd(e){return typeof e!="string"||e.includes("-")?!1:!!(Bk.indexOf(e)>-1||/[A-Z]/u.test(e))}function Yp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Fd(e,t,n,r){if(typeof t=="function"){const[i,s]=Yp(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Yp(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const ac=e=>Array.isArray(e),$k=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Vk=e=>ac(e)?e[e.length-1]||0:e,Le=e=>!!(e&&e.getVelocity);function $o(e){const t=Le(e)?e.get():e;return $k(t)?t.toValue():t}function Nk({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:Fk(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const ny=e=>(t,n)=>{const r=S.useContext(Qa),i=S.useContext(Ya),s=()=>Nk(e,t,r,i);return n?s():Rd(s)};function Fk(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=$o(s[p]);let{initial:o,animate:a}=e;const u=Za(e),c=Jv(e);t&&c&&!u&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Xa(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const x=Fd(e,p[g]);if(x){const{transitionEnd:y,transition:k,...m}=x;for(const h in m){let v=m[h];if(Array.isArray(v)){const C=d?v.length-1:0;v=v[C]}v!==null&&(i[h]=v)}for(const h in y)i[h]=y[h]}}}return i}const ai=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ar=new Set(ai),ry=e=>t=>typeof t=="string"&&t.startsWith(e),iy=ry("--"),Ok=ry("var(--"),Od=e=>Ok(e)?zk.test(e.split("/*")[0].trim()):!1,zk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,sy=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Kt=(e,t,n)=>n>t?t:n<e?e:n,li={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ms={...li,transform:e=>Kt(0,1,e)},Zs={...li,default:1},bs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),on=bs("deg"),Rt=bs("%"),B=bs("px"),Hk=bs("vh"),Uk=bs("vw"),Qp={...Rt,parse:e=>Rt.parse(e)/100,transform:e=>Rt.transform(e*100)},Wk={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,backgroundPositionX:B,backgroundPositionY:B},Gk={rotate:on,rotateX:on,rotateY:on,rotateZ:on,scale:Zs,scaleX:Zs,scaleY:Zs,scaleZ:Zs,skew:on,skewX:on,skewY:on,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:ms,originX:Qp,originY:Qp,originZ:B},Xp={...li,transform:Math.round},zd={...Wk,...Gk,zIndex:Xp,size:B,fillOpacity:ms,strokeOpacity:ms,numOctaves:Xp},Kk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yk=ai.length;function Qk(e,t,n){let r="",i=!0;for(let s=0;s<Yk;s++){const o=ai[s],a=e[o];if(a===void 0)continue;let u=!0;if(typeof a=="number"?u=a===(o.startsWith("scale")?1:0):u=parseFloat(a)===0,!u||n){const c=sy(a,zd[o]);if(!u){i=!1;const d=Kk[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Hd(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const u in t){const c=t[u];if(ar.has(u)){o=!0;continue}else if(iy(u)){i[u]=c;continue}else{const d=sy(c,zd[u]);u.startsWith("origin")?(a=!0,s[u]=d):r[u]=d}}if(t.transform||(o||n?r.transform=Qk(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:u="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${u} ${c} ${d}`}}const Xk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Zk={offset:"strokeDashoffset",array:"strokeDasharray"};function Jk(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Xk:Zk;e[s.offset]=B.transform(-r);const o=B.transform(t),a=B.transform(n);e[s.array]=`${o} ${a}`}function Zp(e,t,n){return typeof e=="string"?e:B.transform(t+n*e)}function qk(e,t,n){const r=Zp(t,e.x,e.width),i=Zp(n,e.y,e.height);return`${r} ${i}`}function Ud(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:u=0,...c},d,f){if(Hd(e,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:x}=e;p.transform&&(x&&(g.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=qk(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&Jk(p,o,a,u,!1)}const Wd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),oy=()=>({...Wd(),attrs:{}}),Gd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ay(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const ly=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function uy(e,t,n,r){ay(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ly.has(i)?i:$d(i),t.attrs[i])}const ya={};function eC(e){Object.assign(ya,e)}function cy(e,{layout:t,layoutId:n}){return ar.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ya[e]||e==="opacity")}function Kd(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(Le(i[o])||t.style&&Le(t.style[o])||cy(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function dy(e,t,n){const r=Kd(e,t,n);for(const i in e)if(Le(e[i])||Le(t[i])){const s=ai.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function tC(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Jp=["x","y","width","height","cx","cy","r"],nC={useVisualState:ny({scrapeMotionValuesFromProps:dy,createRenderState:oy,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(ar.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Jp.length;a++){const u=Jp[a];e[u]!==t[u]&&(o=!0)}o&&ee.read(()=>{tC(n,r),ee.render(()=>{Ud(r,i,Gd(n.tagName),e.transformTemplate),uy(n,r)})})}})},rC={useVisualState:ny({scrapeMotionValuesFromProps:Kd,createRenderState:Wd})};function fy(e,t,n){for(const r in t)!Le(t[r])&&!cy(r,n)&&(e[r]=t[r])}function iC({transformTemplate:e},t){return S.useMemo(()=>{const n=Wd();return Hd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function sC(e,t){const n=e.style||{},r={};return fy(r,n,e),Object.assign(r,iC(e,t)),r}function oC(e,t){const n={},r=sC(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function aC(e,t,n,r){const i=S.useMemo(()=>{const s=oy();return Ud(s,t,Gd(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};fy(s,e.style,e),i.style={...s,...i.style}}return i}function lC(e=!1){return(n,r,i,{latestValues:s},o)=>{const u=(Nd(n)?aC:oC)(r,s,o,n),c=Ck(r,typeof n=="string",e),d=n!==S.Fragment?{...c,...u,ref:i}:{},{children:f}=r,p=S.useMemo(()=>Le(f)?f.get():f,[f]);return S.createElement(n,{...d,children:p})}}function uC(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Nd(r)?nC:rC,preloadedFeatures:e,useRender:lC(i),createVisualElement:t,Component:r};return Lk(o)}}function py(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ja(e,t,n){const r=e.getProps();return Fd(r,t,n!==void 0?n:r.custom,e)}const cC=Md(()=>window.ScrollTimeline!==void 0);class dC{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(cC()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class fC extends dC{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Yd(e,t){return e?e[t]||e.default||e:void 0}const lc=2e4;function hy(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<lc;)t+=n,r=e.next(t);return t>=lc?1/0:t}function Qd(e){return typeof e=="function"}function qp(e,t){e.timeline=t,e.onfinish=null}const Xd=e=>Array.isArray(e)&&typeof e[0]=="number",pC={linearEasing:void 0};function hC(e,t){const n=Md(e);return()=>{var r;return(r=pC[t])!==null&&r!==void 0?r:n()}}const xa=hC(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),my=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Xr(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function gy(e){return!!(typeof e=="function"&&xa()||!e||typeof e=="string"&&(e in uc||xa())||Xd(e)||Array.isArray(e)&&e.every(gy))}const Di=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,uc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Di([0,.65,.55,1]),circOut:Di([.55,0,1,.45]),backIn:Di([.31,.01,.66,-.59]),backOut:Di([.33,1.53,.69,.99])};function vy(e,t){if(e)return typeof e=="function"&&xa()?my(e,t):Xd(e)?Di(e):Array.isArray(e)?e.map(n=>vy(n,t)||uc.easeOut):uc[e]}const gt={x:!1,y:!1};function yy(){return gt.x||gt.y}function mC(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function xy(e,t){const n=mC(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function eh(e){return t=>{t.pointerType==="touch"||yy()||e(t)}}function gC(e,t,n={}){const[r,i,s]=xy(e,n),o=eh(a=>{const{target:u}=a,c=t(a);if(typeof c!="function"||!u)return;const d=eh(f=>{c(f),u.removeEventListener("pointerleave",d)});u.addEventListener("pointerleave",d,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const wy=(e,t)=>t?e===t?!0:wy(e,t.parentElement):!1,Zd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,vC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function yC(e){return vC.has(e.tagName)||e.tabIndex!==-1}const Ri=new WeakSet;function th(e){return t=>{t.key==="Enter"&&e(t)}}function Il(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const xC=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=th(()=>{if(Ri.has(n))return;Il(n,"down");const i=th(()=>{Il(n,"up")}),s=()=>Il(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function nh(e){return Zd(e)&&!yy()}function wC(e,t,n={}){const[r,i,s]=xy(e,n),o=a=>{const u=a.currentTarget;if(!nh(a)||Ri.has(u))return;Ri.add(u);const c=t(a),d=(g,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!nh(g)||!Ri.has(u))&&(Ri.delete(u),typeof c=="function"&&c(g,{success:x}))},f=g=>{d(g,n.useGlobalTarget||wy(u,g.target))},p=g=>{d(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!yC(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>xC(c,i),i)}),s}function SC(e){return e==="x"||e==="y"?gt[e]?null:(gt[e]=!0,()=>{gt[e]=!1}):gt.x||gt.y?null:(gt.x=gt.y=!0,()=>{gt.x=gt.y=!1})}const Sy=new Set(["width","height","top","left","right","bottom",...ai]);let Vo;function kC(){Vo=void 0}const Lt={now:()=>(Vo===void 0&&Lt.set(Ce.isProcessing||vk.useManualTiming?Ce.timestamp:performance.now()),Vo),set:e=>{Vo=e,queueMicrotask(kC)}};function Jd(e,t){e.indexOf(t)===-1&&e.push(t)}function qd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ef{constructor(){this.subscriptions=[]}add(t){return Jd(this.subscriptions,t),()=>qd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ky(e,t){return t?e*(1e3/t):0}const rh=30,CC=e=>!isNaN(parseFloat(e));class jC{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Lt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Lt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=CC(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ef);const r=this.events[t].add(n);return t==="change"?()=>{r(),ee.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>rh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,rh);return ky(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gs(e,t){return new jC(e,t)}function bC(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gs(n))}function TC(e,t){const n=Ja(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Vk(s[o]);bC(e,o,a)}}function PC(e){return!!(Le(e)&&e.add)}function cc(e,t){const n=e.getValue("willChange");if(PC(n))return n.add(t)}function Cy(e){return e.props[qv]}const jy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,EC=1e-7,AC=12;function DC(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=jy(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>EC&&++a<AC);return o}function Ts(e,t,n,r){if(e===t&&n===r)return et;const i=s=>DC(s,0,1,e,n);return s=>s===0||s===1?s:jy(i(s),t,r)}const by=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ty=e=>t=>1-e(1-t),Py=Ts(.33,1.53,.69,.99),tf=Ty(Py),Ey=by(tf),Ay=e=>(e*=2)<1?.5*tf(e):.5*(2-Math.pow(2,-10*(e-1))),nf=e=>1-Math.sin(Math.acos(e)),Dy=Ty(nf),Ry=by(nf),Ly=e=>/^0[^.\s]+$/u.test(e);function RC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ly(e):!0}const Hi=e=>Math.round(e*1e5)/1e5,rf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function LC(e){return e==null}const IC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sf=(e,t)=>n=>!!(typeof n=="string"&&IC.test(n)&&n.startsWith(e)||t&&!LC(n)&&Object.prototype.hasOwnProperty.call(n,t)),Iy=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(rf);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},MC=e=>Kt(0,255,e),Ml={...li,transform:e=>Math.round(MC(e))},Kn={test:sf("rgb","red"),parse:Iy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ml.transform(e)+", "+Ml.transform(t)+", "+Ml.transform(n)+", "+Hi(ms.transform(r))+")"};function _C(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const dc={test:sf("#"),parse:_C,transform:Kn.transform},br={test:sf("hsl","hue"),parse:Iy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Rt.transform(Hi(t))+", "+Rt.transform(Hi(n))+", "+Hi(ms.transform(r))+")"},Ae={test:e=>Kn.test(e)||dc.test(e)||br.test(e),parse:e=>Kn.test(e)?Kn.parse(e):br.test(e)?br.parse(e):dc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Kn.transform(e):br.transform(e)},BC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function $C(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(rf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(BC))===null||n===void 0?void 0:n.length)||0)>0}const My="number",_y="color",VC="var",NC="var(",ih="${}",FC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vs(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(FC,u=>(Ae.test(u)?(r.color.push(s),i.push(_y),n.push(Ae.parse(u))):u.startsWith(NC)?(r.var.push(s),i.push(VC),n.push(u)):(r.number.push(s),i.push(My),n.push(parseFloat(u))),++s,ih)).split(ih);return{values:n,split:a,indexes:r,types:i}}function By(e){return vs(e).values}function $y(e){const{split:t,types:n}=vs(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===My?s+=Hi(i[o]):a===_y?s+=Ae.transform(i[o]):s+=i[o]}return s}}const OC=e=>typeof e=="number"?0:e;function zC(e){const t=By(e);return $y(e)(t.map(OC))}const En={test:$C,parse:By,createTransformer:$y,getAnimatableNone:zC},HC=new Set(["brightness","contrast","saturate","opacity"]);function UC(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(rf)||[];if(!r)return e;const i=n.replace(r,"");let s=HC.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const WC=/\b([a-z-]*)\(.*?\)/gu,fc={...En,getAnimatableNone:e=>{const t=e.match(WC);return t?t.map(UC).join(" "):e}},GC={...zd,color:Ae,backgroundColor:Ae,outlineColor:Ae,fill:Ae,stroke:Ae,borderColor:Ae,borderTopColor:Ae,borderRightColor:Ae,borderBottomColor:Ae,borderLeftColor:Ae,filter:fc,WebkitFilter:fc},of=e=>GC[e];function Vy(e,t){let n=of(e);return n!==fc&&(n=En),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const KC=new Set(["auto","none","0"]);function YC(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!KC.has(s)&&vs(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Vy(n,i)}const sh=e=>e===li||e===B,oh=(e,t)=>parseFloat(e.split(", ")[t]),ah=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return oh(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?oh(s[1],e):0}},QC=new Set(["x","y","z"]),XC=ai.filter(e=>!QC.has(e));function ZC(e){const t=[];return XC.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Jr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ah(4,13),y:ah(5,14)};Jr.translateX=Jr.x;Jr.translateY=Jr.y;const Jn=new Set;let pc=!1,hc=!1;function Ny(){if(hc){const e=Array.from(Jn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=ZC(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}hc=!1,pc=!1,Jn.forEach(e=>e.complete()),Jn.clear()}function Fy(){Jn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hc=!0)})}function JC(){Fy(),Ny()}class af{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Jn.add(this),pc||(pc=!0,ee.read(Fy),ee.resolveKeyframes(Ny))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const u=r.readValue(n,a);u!=null&&(t[0]=u)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Jn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Jn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Oy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),qC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ej(e){const t=qC.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function zy(e,t,n=1){const[r,i]=ej(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Oy(o)?parseFloat(o):o}return Od(i)?zy(i,t,n+1):i}const Hy=e=>t=>t.test(e),tj={test:e=>e==="auto",parse:e=>e},Uy=[li,B,Rt,on,Uk,Hk,tj],lh=e=>Uy.find(Hy(e));class Wy extends af{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let c=t[u];if(typeof c=="string"&&(c=c.trim(),Od(c))){const d=zy(c,n.current);d!==void 0&&(t[u]=d),u===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Sy.has(r)||t.length!==2)return;const[i,s]=t,o=lh(i),a=lh(s);if(o!==a)if(sh(o)&&sh(a))for(let u=0;u<t.length;u++){const c=t[u];typeof c=="string"&&(t[u]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)RC(t[i])&&r.push(i);r.length&&YC(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Jr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Jr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([u,c])=>{n.getValue(u).set(c)}),this.resolveNoneKeyframes()}}const uh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(En.test(e)||e==="0")&&!e.startsWith("url("));function nj(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function rj(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=uh(i,t),a=uh(s,t);return!o||!a?!1:nj(e)||(n==="spring"||Qd(n))&&r}const ij=e=>e!==null;function qa(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(ij),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const sj=40;class Gy{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Lt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>sj?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&JC(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Lt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:u,isGenerator:c}=this.options;if(!c&&!rj(t,r,i,s))if(o)this.options.duration=0;else{u&&u(qa(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function _l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function oj({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,u=2*n-a;i=_l(u,a,e+1/3),s=_l(u,a,e),o=_l(u,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function wa(e,t){return n=>n>0?t:e}const Bl=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},aj=[dc,Kn,br],lj=e=>aj.find(t=>t.test(e));function ch(e){const t=lj(e);if(!t)return!1;let n=t.parse(e);return t===br&&(n=oj(n)),n}const dh=(e,t)=>{const n=ch(e),r=ch(t);if(!n||!r)return wa(e,t);const i={...n};return s=>(i.red=Bl(n.red,r.red,s),i.green=Bl(n.green,r.green,s),i.blue=Bl(n.blue,r.blue,s),i.alpha=oe(n.alpha,r.alpha,s),Kn.transform(i))},uj=(e,t)=>n=>t(e(n)),Ps=(...e)=>e.reduce(uj),mc=new Set(["none","hidden"]);function cj(e,t){return mc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function dj(e,t){return n=>oe(e,t,n)}function lf(e){return typeof e=="number"?dj:typeof e=="string"?Od(e)?wa:Ae.test(e)?dh:hj:Array.isArray(e)?Ky:typeof e=="object"?Ae.test(e)?dh:fj:wa}function Ky(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>lf(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function fj(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=lf(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function pj(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],u=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=u,i[o]++}return r}const hj=(e,t)=>{const n=En.createTransformer(t),r=vs(e),i=vs(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?mc.has(e)&&!i.values.length||mc.has(t)&&!r.values.length?cj(e,t):Ps(Ky(pj(r,i),i.values),n):wa(e,t)};function Yy(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):lf(e)(e,t)}const mj=5;function Qy(e,t,n){const r=Math.max(t-mj,0);return ky(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$l=.001;function gj({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,s,o=1-t;o=Kt(ue.minDamping,ue.maxDamping,o),e=Kt(ue.minDuration,ue.maxDuration,zt(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,g=gc(c,o),x=Math.exp(-f);return $l-p/g*x},s=c=>{const f=c*o*e,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*e,x=Math.exp(-f),y=gc(Math.pow(c,2),o);return(-i(c)+$l>0?-1:1)*((p-g)*x)/y}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-$l+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,u=yj(i,s,a);if(e=Ot(e),isNaN(u))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const vj=12;function yj(e,t,n){let r=n;for(let i=1;i<vj;i++)r=r-e(r)/t(r);return r}function gc(e,t){return e*Math.sqrt(1-t*t)}const xj=["duration","bounce"],wj=["stiffness","damping","mass"];function fh(e,t){return t.some(n=>e[n]!==void 0)}function Sj(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!fh(e,wj)&&fh(e,xj))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Kt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:s}}else{const n=gj(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Xy(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:g}=Sj({...n,velocity:-zt(n.velocity||0)}),x=p||0,y=c/(2*Math.sqrt(u*d)),k=o-s,m=zt(Math.sqrt(u/d)),h=Math.abs(k)<5;r||(r=h?ue.restSpeed.granular:ue.restSpeed.default),i||(i=h?ue.restDelta.granular:ue.restDelta.default);let v;if(y<1){const j=gc(m,y);v=b=>{const T=Math.exp(-y*m*b);return o-T*((x+y*m*k)/j*Math.sin(j*b)+k*Math.cos(j*b))}}else if(y===1)v=j=>o-Math.exp(-m*j)*(k+(x+m*k)*j);else{const j=m*Math.sqrt(y*y-1);v=b=>{const T=Math.exp(-y*m*b),P=Math.min(j*b,300);return o-T*((x+y*m*k)*Math.sinh(P)+j*k*Math.cosh(P))/j}}const C={calculatedDuration:g&&f||null,next:j=>{const b=v(j);if(g)a.done=j>=f;else{let T=0;y<1&&(T=j===0?Ot(x):Qy(v,j,b));const P=Math.abs(T)<=r,L=Math.abs(o-b)<=i;a.done=P&&L}return a.value=a.done?o:b,a},toString:()=>{const j=Math.min(hy(C),lc),b=my(T=>C.next(j*T).value,j,30);return j+"ms "+b}};return C}function ph({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=P=>a!==void 0&&P<a||u!==void 0&&P>u,x=P=>a===void 0?u:u===void 0||Math.abs(a-P)<Math.abs(u-P)?a:u;let y=n*t;const k=f+y,m=o===void 0?k:o(k);m!==k&&(y=m-f);const h=P=>-y*Math.exp(-P/r),v=P=>m+h(P),C=P=>{const L=h(P),I=v(P);p.done=Math.abs(L)<=c,p.value=p.done?m:I};let j,b;const T=P=>{g(p.value)&&(j=P,b=Xy({keyframes:[p.value,x(p.value)],velocity:Qy(v,P,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return T(0),{calculatedDuration:null,next:P=>{let L=!1;return!b&&j===void 0&&(L=!0,C(P),T(P)),j!==void 0&&P>=j?b.next(P-j):(!L&&C(P),p)}}}const kj=Ts(.42,0,1,1),Cj=Ts(0,0,.58,1),Zy=Ts(.42,0,.58,1),jj=e=>Array.isArray(e)&&typeof e[0]!="number",bj={linear:et,easeIn:kj,easeInOut:Zy,easeOut:Cj,circIn:nf,circInOut:Ry,circOut:Dy,backIn:tf,backInOut:Ey,backOut:Py,anticipate:Ay},hh=e=>{if(Xd(e)){Yv(e.length===4);const[t,n,r,i]=e;return Ts(t,n,r,i)}else if(typeof e=="string")return bj[e];return e};function Tj(e,t,n){const r=[],i=n||Yy,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const u=Array.isArray(t)?t[o]||et:t;a=Ps(u,a)}r.push(a)}return r}function Pj(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Yv(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Tj(t,r,i),u=a.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(u>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Xr(e[f],e[f+1],d);return a[f](p)};return n?d=>c(Kt(e[0],e[s-1],d)):c}function Ej(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Xr(0,t,r);e.push(oe(n,1,i))}}function Aj(e){const t=[0];return Ej(t,e.length-1),t}function Dj(e,t){return e.map(n=>n*t)}function Rj(e,t){return e.map(()=>t||Zy).splice(0,e.length-1)}function Sa({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=jj(r)?r.map(hh):hh(r),s={done:!1,value:t[0]},o=Dj(n&&n.length===t.length?n:Aj(t),e),a=Pj(o,t,{ease:Array.isArray(i)?i:Rj(t,i)});return{calculatedDuration:e,next:u=>(s.value=a(u),s.done=u>=e,s)}}const Lj=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ee.update(t,!0),stop:()=>Pn(t),now:()=>Ce.isProcessing?Ce.timestamp:Lt.now()}},Ij={decay:ph,inertia:ph,tween:Sa,keyframes:Sa,spring:Xy},Mj=e=>e/100;class uf extends Gy{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:u}=this.options;u&&u()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||af,a=(u,c)=>this.onKeyframesResolved(u,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=Qd(n)?n:Ij[n]||Sa;let u,c;a!==Sa&&typeof t[0]!="number"&&(u=Ps(Mj,Yy(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=hy(d));const{calculatedDuration:f}=d,p=f+i,g=p*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:u,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:u,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:g,repeatType:x,repeatDelay:y,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,C=s;if(g){const P=Math.min(this.currentTime,d)/f;let L=Math.floor(P),I=P%1;!I&&P>=1&&(I=1),I===1&&L--,L=Math.min(L,g+1),!!(L%2)&&(x==="reverse"?(I=1-I,y&&(I-=y/f)):x==="mirror"&&(C=o)),v=Kt(0,1,I)*f}const j=h?{done:!1,value:u[0]}:C.next(v);a&&(j.value=a(j.value));let{done:b}=j;!h&&c!==null&&(b=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return T&&i!==void 0&&(j.value=qa(u,this.options,i)),k&&k(j.value),T&&this.finish(),j}get duration(){const{resolved:t}=this;return t?zt(t.calculatedDuration):0}get time(){return zt(this.currentTime)}set time(t){t=Ot(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=zt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Lj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const _j=new Set(["opacity","clipPath","filter","transform"]);function Bj(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:u}={}){const c={[t]:n};u&&(c.offset=u);const d=vy(a,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const $j=Md(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ka=10,Vj=2e4;function Nj(e){return Qd(e.type)||e.type==="spring"||!gy(e.ease)}function Fj(e,t){const n=new uf({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<Vj;)r=n.sample(s),i.push(r.value),s+=ka;return{times:void 0,keyframes:i,duration:s-ka,ease:"linear"}}const Jy={anticipate:Ay,backInOut:Ey,circInOut:Ry};function Oj(e){return e in Jy}class mh extends Gy{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Wy(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:u,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&xa()&&Oj(s)&&(s=Jy[s]),Nj(this.options)){const{onComplete:f,onUpdate:p,motionValue:g,element:x,...y}=this.options,k=Fj(t,y);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,s=k.ease,o="keyframes"}const d=Bj(a.owner.current,u,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(qp(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;a.set(qa(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return zt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return zt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Ot(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return et;const{animation:r}=n;qp(r,t)}return et}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:p,...g}=this.options,x=new uf({...g,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),y=Ot(this.time);c.setWithVelocity(x.sample(y-ka).value,x.sample(y).value,ka)}const{onStop:u}=this.options;u&&u(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=n.owner.getProps();return $j()&&r&&_j.has(r)&&!u&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const zj={type:"spring",stiffness:500,damping:25,restSpeed:10},Hj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Uj={type:"keyframes",duration:.8},Wj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Gj=(e,{keyframes:t})=>t.length>2?Uj:ar.has(e)?e.startsWith("scale")?Hj(t[1]):zj:Wj;function Kj({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:u,elapsed:c,...d}){return!!Object.keys(d).length}const cf=(e,t,n,r={},i,s)=>o=>{const a=Yd(r,e)||{},u=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Ot(u);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};Kj(a)||(d={...d,...Gj(e,d)}),d.duration&&(d.duration=Ot(d.duration)),d.repeatDelay&&(d.repeatDelay=Ot(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=qa(d.keyframes,a);if(p!==void 0)return ee.update(()=>{d.onUpdate(p),d.onComplete()}),new fC([])}return!s&&mh.supports(d)?new mh(d):new uf(d)};function Yj({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function qy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...u}=t;r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in u){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),g=u[f];if(g===void 0||d&&Yj(d,f))continue;const x={delay:n,...Yd(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const m=Cy(e);if(m){const h=window.MotionHandoffAnimation(m,f,ee);h!==null&&(x.startTime=h,y=!0)}}cc(e,f),p.start(cf(f,p,g,e.shouldReduceMotion&&Sy.has(f)?{type:!1}:x,e,y));const k=p.animation;k&&c.push(k)}return a&&Promise.all(c).then(()=>{ee.update(()=>{a&&TC(e,a)})}),c}function vc(e,t,n={}){var r;const i=Ja(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(qy(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return Qj(e,t,d+c,f,p,n)}:()=>Promise.resolve(),{when:u}=s;if(u){const[c,d]=u==="beforeChildren"?[o,a]:[a,o];return c().then(()=>d())}else return Promise.all([o(),a(n.delay)])}function Qj(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,u=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(Xj).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(vc(c,t,{...s,delay:n+u(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function Xj(e,t){return e.sortNodePosition(t)}function Zj(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>vc(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=vc(e,t,n);else{const i=typeof t=="function"?Ja(e,t,n.custom):t;r=Promise.all(qy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Jj=Bd.length;function ex(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ex(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Jj;n++){const r=Bd[n],i=e.props[r];(hs(i)||i===!1)&&(t[r]=i)}return t}const qj=[..._d].reverse(),eb=_d.length;function tb(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Zj(e,n,r)))}function nb(e){let t=tb(e),n=gh(),r=!0;const i=u=>(c,d)=>{var f;const p=Ja(e,d,u==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:x,...y}=p;c={...c,...y,...x}}return c};function s(u){t=u(e)}function o(u){const{props:c}=e,d=ex(e.parent)||{},f=[],p=new Set;let g={},x=1/0;for(let k=0;k<eb;k++){const m=qj[k],h=n[m],v=c[m]!==void 0?c[m]:d[m],C=hs(v),j=m===u?h.isActive:null;j===!1&&(x=k);let b=v===d[m]&&v!==c[m]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...g},!h.isActive&&j===null||!v&&!h.prevProp||Xa(v)||typeof v=="boolean")continue;const T=rb(h.prevProp,v);let P=T||m===u&&h.isActive&&!b&&C||k>x&&C,L=!1;const I=Array.isArray(v)?v:[v];let z=I.reduce(i(m),{});j===!1&&(z={});const{prevResolvedValues:Ge={}}=h,Me={...Ge,...z},ht=N=>{P=!0,p.has(N)&&(L=!0,p.delete(N)),h.needsAnimating[N]=!0;const A=e.getValue(N);A&&(A.liveStyle=!1)};for(const N in Me){const A=z[N],M=Ge[N];if(g.hasOwnProperty(N))continue;let _=!1;ac(A)&&ac(M)?_=!py(A,M):_=A!==M,_?A!=null?ht(N):p.add(N):A!==void 0&&p.has(N)?ht(N):h.protectedKeys[N]=!0}h.prevProp=v,h.prevResolvedValues=z,h.isActive&&(g={...g,...z}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(b&&T)||L)&&f.push(...I.map(N=>({animation:N,options:{type:m}})))}if(p.size){const k={};p.forEach(m=>{const h=e.getBaseTarget(m),v=e.getValue(m);v&&(v.liveStyle=!0),k[m]=h??null}),f.push({animation:k})}let y=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function a(u,c){var d;if(n[u].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(u,c)}),n[u].isActive=c;const f=o(u);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=gh(),r=!0}}}function rb(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!py(t,e):!1}function Bn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gh(){return{animate:Bn(!0),whileInView:Bn(),whileHover:Bn(),whileTap:Bn(),whileDrag:Bn(),whileFocus:Bn(),exit:Bn()}}class Mn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ib extends Mn{constructor(t){super(t),t.animationState||(t.animationState=nb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Xa(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let sb=0;class ob extends Mn{constructor(){super(...arguments),this.id=sb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ab={animation:{Feature:ib},exit:{Feature:ob}};function ys(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Es(e){return{point:{x:e.pageX,y:e.pageY}}}const lb=e=>t=>Zd(t)&&e(t,Es(t));function Ui(e,t,n,r){return ys(e,t,lb(n),r)}const vh=(e,t)=>Math.abs(e-t);function ub(e,t){const n=vh(e.x,t.x),r=vh(e.y,t.y);return Math.sqrt(n**2+r**2)}class tx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Nl(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=ub(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:x}=f,{timestamp:y}=Ce;this.history.push({...x,timestamp:y});const{onStart:k,onMove:m}=this.handlers;p||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Vl(p,this.transformPagePoint),ee.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Nl(f.type==="pointercancel"?this.lastMoveEventInfo:Vl(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,k),x&&x(f,k)},!Zd(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Es(t),a=Vl(o,this.transformPagePoint),{point:u}=a,{timestamp:c}=Ce;this.history=[{...u,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Nl(a,this.history)),this.removeListeners=Ps(Ui(this.contextWindow,"pointermove",this.handlePointerMove),Ui(this.contextWindow,"pointerup",this.handlePointerUp),Ui(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Pn(this.updatePoint)}}function Vl(e,t){return t?{point:t(e.point)}:e}function yh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Nl({point:e},t){return{point:e,delta:yh(e,nx(t)),offset:yh(e,cb(t)),velocity:db(t,.1)}}function cb(e){return e[0]}function nx(e){return e[e.length-1]}function db(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=nx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ot(t)));)n--;if(!r)return{x:0,y:0};const s=zt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const rx=1e-4,fb=1-rx,pb=1+rx,ix=.01,hb=0-ix,mb=0+ix;function nt(e){return e.max-e.min}function gb(e,t,n){return Math.abs(e-t)<=n}function xh(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=nt(n)/nt(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=fb&&e.scale<=pb||isNaN(e.scale))&&(e.scale=1),(e.translate>=hb&&e.translate<=mb||isNaN(e.translate))&&(e.translate=0)}function Wi(e,t,n,r){xh(e.x,t.x,n.x,r?r.originX:void 0),xh(e.y,t.y,n.y,r?r.originY:void 0)}function wh(e,t,n){e.min=n.min+t.min,e.max=e.min+nt(t)}function vb(e,t,n){wh(e.x,t.x,n.x),wh(e.y,t.y,n.y)}function Sh(e,t,n){e.min=t.min-n.min,e.max=e.min+nt(t)}function Gi(e,t,n){Sh(e.x,t.x,n.x),Sh(e.y,t.y,n.y)}function yb(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function kh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function xb(e,{top:t,left:n,bottom:r,right:i}){return{x:kh(e.x,n,i),y:kh(e.y,t,r)}}function Ch(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function wb(e,t){return{x:Ch(e.x,t.x),y:Ch(e.y,t.y)}}function Sb(e,t){let n=.5;const r=nt(e),i=nt(t);return i>r?n=Xr(t.min,t.max-r,e.min):r>i&&(n=Xr(e.min,e.max-i,t.min)),Kt(0,1,n)}function kb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const yc=.35;function Cb(e=yc){return e===!1?e=0:e===!0&&(e=yc),{x:jh(e,"left","right"),y:jh(e,"top","bottom")}}function jh(e,t,n){return{min:bh(e,t),max:bh(e,n)}}function bh(e,t){return typeof e=="number"?e:e[t]||0}const Th=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tr=()=>({x:Th(),y:Th()}),Ph=()=>({min:0,max:0}),de=()=>({x:Ph(),y:Ph()});function ot(e){return[e("x"),e("y")]}function sx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function jb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function bb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Fl(e){return e===void 0||e===1}function xc({scale:e,scaleX:t,scaleY:n}){return!Fl(e)||!Fl(t)||!Fl(n)}function On(e){return xc(e)||ox(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ox(e){return Eh(e.x)||Eh(e.y)}function Eh(e){return e&&e!=="0%"}function Ca(e,t,n){const r=e-n,i=t*r;return n+i}function Ah(e,t,n,r,i){return i!==void 0&&(e=Ca(e,i,r)),Ca(e,n,r)+t}function wc(e,t=0,n=1,r,i){e.min=Ah(e.min,t,n,r,i),e.max=Ah(e.max,t,n,r,i)}function ax(e,{x:t,y:n}){wc(e.x,t.translate,t.scale,t.originPoint),wc(e.y,n.translate,n.scale,n.originPoint)}const Dh=.999999999999,Rh=1.0000000000001;function Tb(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Er(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ax(e,o)),r&&On(s.latestValues)&&Er(e,s.latestValues))}t.x<Rh&&t.x>Dh&&(t.x=1),t.y<Rh&&t.y>Dh&&(t.y=1)}function Pr(e,t){e.min=e.min+t,e.max=e.max+t}function Lh(e,t,n,r,i=.5){const s=oe(e.min,e.max,i);wc(e,t,n,s,r)}function Er(e,t){Lh(e.x,t.x,t.scaleX,t.scale,t.originX),Lh(e.y,t.y,t.scaleY,t.scale,t.originY)}function lx(e,t){return sx(bb(e.getBoundingClientRect(),t))}function Pb(e,t,n){const r=lx(e,n),{scroll:i}=t;return i&&(Pr(r.x,i.offset.x),Pr(r.y,i.offset.y)),r}const ux=({current:e})=>e?e.ownerDocument.defaultView:null,Eb=new WeakMap;class Ab{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Es(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:x}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=SC(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ot(k=>{let m=this.getAxisMotionValue(k).get()||0;if(Rt.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[k];v&&(m=nt(v)*(parseFloat(m)/100))}}this.originPoint[k]=m}),x&&ee.postRender(()=>x(d,f)),cc(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:k}=f;if(g&&this.currentDirection===null){this.currentDirection=Db(k),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),y&&y(d,f)},a=(d,f)=>this.stop(d,f),u=()=>ot(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new tx(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ux(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ee.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Js(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=yb(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&jr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=xb(i.layoutBox,n):this.constraints=!1,this.elastic=Cb(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ot(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=kb(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!jr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Pb(r,i.root,this.visualElement.getTransformPagePoint());let o=wb(i.layout.layoutBox,s);if(n){const a=n(jb(o));this.hasMutatedConstraints=!!a,a&&(o=sx(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=ot(d=>{if(!Js(d,n,this.currentDirection))return;let f=u&&u[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return cc(this.visualElement,t),r.start(cf(t,r,0,n,this.visualElement,!1))}stopAnimation(){ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ot(n=>{const{drag:r}=this.getProps();if(!Js(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-oe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!jr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ot(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const u=a.get();i[o]=Sb({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ot(o=>{if(!Js(o,t,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set(oe(u,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;Eb.set(this.visualElement,this);const t=this.visualElement.current,n=Ui(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();jr(u)&&u.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ee.read(r);const o=ys(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(ot(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=yc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Js(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Db(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Rb extends Mn{constructor(t){super(t),this.removeGroupControls=et,this.removeListeners=et,this.controls=new Ab(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||et}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ih=e=>(t,n)=>{e&&ee.postRender(()=>e(t,n))};class Lb extends Mn{constructor(){super(...arguments),this.removePointerDownListener=et}onPointerDown(t){this.session=new tx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ux(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ih(t),onStart:Ih(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ee.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Ui(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const No={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Mh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const xi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(B.test(e))e=parseFloat(e);else return e;const n=Mh(e,t.target.x),r=Mh(e,t.target.y);return`${n}% ${r}%`}},Ib={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=En.parse(e);if(i.length>5)return r;const s=En.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,u=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=u;const c=oe(a,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class Mb extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;eC(_b),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),No.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||ee.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Vd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function cx(e){const[t,n]=Gv(),r=S.useContext(Dd);return l.jsx(Mb,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(ey),isPresent:t,safeToRemove:n})}const _b={borderRadius:{...xi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xi,borderTopRightRadius:xi,borderBottomLeftRadius:xi,borderBottomRightRadius:xi,boxShadow:Ib};function Bb(e,t,n){const r=Le(e)?e:gs(e);return r.start(cf("",r,t,n)),r.animation}function $b(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Vb=(e,t)=>e.depth-t.depth;class Nb{constructor(){this.children=[],this.isDirty=!1}add(t){Jd(this.children,t),this.isDirty=!0}remove(t){qd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Vb),this.isDirty=!1,this.children.forEach(t)}}function Fb(e,t){const n=Lt.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Pn(r),e(s-t))};return ee.read(r,!0),()=>Pn(r)}const dx=["TopLeft","TopRight","BottomLeft","BottomRight"],Ob=dx.length,_h=e=>typeof e=="string"?parseFloat(e):e,Bh=e=>typeof e=="number"||B.test(e);function zb(e,t,n,r,i,s){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,Hb(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,Ub(r))):s&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<Ob;o++){const a=`border${dx[o]}Radius`;let u=$h(t,a),c=$h(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Bh(u)===Bh(c)?(e[a]=Math.max(oe(_h(u),_h(c),r),0),(Rt.test(c)||Rt.test(u))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function $h(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Hb=fx(0,.5,Dy),Ub=fx(.5,.95,et);function fx(e,t,n){return r=>r<e?0:r>t?1:n(Xr(e,t,r))}function Vh(e,t){e.min=t.min,e.max=t.max}function st(e,t){Vh(e.x,t.x),Vh(e.y,t.y)}function Nh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Fh(e,t,n,r,i){return e-=t,e=Ca(e,1/n,r),i!==void 0&&(e=Ca(e,1/i,r)),e}function Wb(e,t=0,n=1,r=.5,i,s=e,o=e){if(Rt.test(t)&&(t=parseFloat(t),t=oe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=oe(s.min,s.max,r);e===s&&(a-=t),e.min=Fh(e.min,t,n,a,i),e.max=Fh(e.max,t,n,a,i)}function Oh(e,t,[n,r,i],s,o){Wb(e,t[n],t[r],t[i],t.scale,s,o)}const Gb=["x","scaleX","originX"],Kb=["y","scaleY","originY"];function zh(e,t,n,r){Oh(e.x,t,Gb,n?n.x:void 0,r?r.x:void 0),Oh(e.y,t,Kb,n?n.y:void 0,r?r.y:void 0)}function Hh(e){return e.translate===0&&e.scale===1}function px(e){return Hh(e.x)&&Hh(e.y)}function Uh(e,t){return e.min===t.min&&e.max===t.max}function Yb(e,t){return Uh(e.x,t.x)&&Uh(e.y,t.y)}function Wh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function hx(e,t){return Wh(e.x,t.x)&&Wh(e.y,t.y)}function Gh(e){return nt(e.x)/nt(e.y)}function Kh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Qb{constructor(){this.members=[]}add(t){Jd(this.members,t),t.scheduleRender()}remove(t){if(qd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Xb(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:p,skewX:g,skewY:x}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const a=e.x.scale*t.x,u=e.y.scale*t.y;return(a!==1||u!==1)&&(r+=`scale(${a}, ${u})`),r||"none"}const zn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Li=typeof window<"u"&&window.MotionDebug!==void 0,Ol=["","X","Y","Z"],Zb={visibility:"hidden"},Yh=1e3;let Jb=0;function zl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function mx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Cy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ee,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&mx(r)}function gx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=Jb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Li&&(zn.totalNodes=zn.resolvedTargetDeltas=zn.recalculatedProjection=0),this.nodes.forEach(tT),this.nodes.forEach(oT),this.nodes.forEach(aT),this.nodes.forEach(nT),Li&&window.MotionDebug.record(zn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new Nb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new ef),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$b(o),this.instance=o;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Fb(p,250),No.hasAnimatedSinceResize&&(No.hasAnimatedSinceResize=!1,this.nodes.forEach(Xh))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||fT,{onLayoutAnimationStart:k,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!hx(this.targetLayout,x)||g,v=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const C={...Yd(y,"layout"),onPlay:k,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else p||Xh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lT),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&mx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Qh);return}this.isUpdating||this.nodes.forEach(iT),this.isUpdating=!1,this.nodes.forEach(sT),this.nodes.forEach(qb),this.nodes.forEach(eT),this.clearAllSnapshots();const a=Lt.now();Ce.delta=Kt(0,1e3/60,a-Ce.timestamp),Ce.timestamp=a,Ce.isProcessing=!0,Ll.update.process(Ce),Ll.preRender.process(Ce),Ll.render.process(Ce),Ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rT),this.sharedNodes.forEach(uT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=de(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!px(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||On(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),pT(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return de();const u=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(hT))){const{scroll:d}=this.root;d&&(Pr(u.x,d.offset.x),Pr(u.y,d.offset.y))}return u}removeElementScroll(o){var a;const u=de();if(st(u,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return u;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&st(u,o),Pr(u.x,f.offset.x),Pr(u.y,f.offset.y))}return u}applyTransform(o,a=!1){const u=de();st(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Er(u,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),On(d.latestValues)&&Er(u,d.latestValues)}return On(this.latestValues)&&Er(u,this.latestValues),u}removeTransform(o){const a=de();st(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!On(c.latestValues))continue;xc(c.latestValues)&&c.updateSnapshot();const d=de(),f=c.measurePageBox();st(d,f),zh(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return On(this.latestValues)&&zh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Ce.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Gi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),st(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):st(this.target,this.layout.layoutBox),ax(this.target,this.targetDelta)):st(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Gi(this.relativeTargetOrigin,this.target,g.target),st(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Li&&zn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||xc(this.parent.latestValues)||ox(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),u=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ce.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;st(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;Tb(this.layoutCorrected,this.treeScale,this.path,u),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=de());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Nh(this.prevProjectionDelta.x,this.projectionDelta.x),Nh(this.prevProjectionDelta.y,this.projectionDelta.y)),Wi(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!Kh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Kh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Li&&zn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Tr(),this.projectionDelta=Tr(),this.projectionDeltaWithTransform=Tr()}setAnimationOrigin(o,a=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=Tr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=de(),g=u?u.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,k=this.getStack(),m=!k||k.members.length<=1,h=!!(y&&!m&&this.options.crossfade===!0&&!this.path.some(dT));this.animationProgress=0;let v;this.mixTargetDelta=C=>{const j=C/1e3;Zh(f.x,o.x,j),Zh(f.y,o.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Gi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cT(this.relativeTarget,this.relativeTargetOrigin,p,j),v&&Yb(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=de()),st(v,this.relativeTarget)),y&&(this.animationValues=d,zb(d,c,this.latestValues,j,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ee.update(()=>{No.hasAnimatedSinceResize=!0,this.currentAnimation=Bb(0,Yh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:d}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&vx(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||de();const f=nt(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=nt(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}st(a,u),Er(a,d),Wi(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Qb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(a=!0),!a)return;const c={};u.z&&zl("z",o,c,this.animationValues);for(let d=0;d<Ol.length;d++)zl(`rotate${Ol[d]}`,o,c,this.animationValues),zl(`skew${Ol[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var a,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Zb;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=$o(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=$o(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!On(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Xb(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:x}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in ya){if(p[y]===void 0)continue;const{correct:k,applyTo:m}=ya[y],h=c.transform==="none"?p[y]:k(p[y],f);if(m){const v=m.length;for(let C=0;C<v;C++)c[m[C]]=h}else c[y]=h}return this.options.layoutId&&(c.pointerEvents=f===this?$o(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Qh),this.root.sharedNodes.clear()}}}function qb(e){e.updateLayout()}function eT(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?ot(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=nt(p);p.min=r[f].min,p.max=p.min+g}):vx(s,n.layoutBox,r)&&ot(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=nt(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=Tr();Wi(a,r,n.layoutBox);const u=Tr();o?Wi(u,e.applyTransform(i,!0),n.measuredBox):Wi(u,r,n.layoutBox);const c=!px(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const x=de();Gi(x,n.layoutBox,p.layoutBox);const y=de();Gi(y,r,g.layoutBox),hx(x,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function tT(e){Li&&zn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function rT(e){e.clearSnapshot()}function Qh(e){e.clearMeasurements()}function iT(e){e.isLayoutDirty=!1}function sT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function oT(e){e.resolveTargetDelta()}function aT(e){e.calcProjection()}function lT(e){e.resetSkewAndRotation()}function uT(e){e.removeLeadSnapshot()}function Zh(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Jh(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function cT(e,t,n,r){Jh(e.x,t.x,n.x,r),Jh(e.y,t.y,n.y,r)}function dT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const fT={duration:.45,ease:[.4,0,.1,1]},qh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),em=qh("applewebkit/")&&!qh("chrome/")?Math.round:et;function tm(e){e.min=em(e.min),e.max=em(e.max)}function pT(e){tm(e.x),tm(e.y)}function vx(e,t,n){return e==="position"||e==="preserve-aspect"&&!gb(Gh(t),Gh(n),.2)}function hT(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const mT=gx({attachResizeListener:(e,t)=>ys(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Hl={current:void 0},yx=gx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Hl.current){const e=new mT({});e.mount(window),e.setOptions({layoutScroll:!0}),Hl.current=e}return Hl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),gT={pan:{Feature:Lb},drag:{Feature:Rb,ProjectionNode:yx,MeasureLayout:cx}};function nm(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ee.postRender(()=>s(t,Es(t)))}class vT extends Mn{mount(){const{current:t}=this.node;t&&(this.unmount=gC(t,n=>(nm(this.node,n,"Start"),r=>nm(this.node,r,"End"))))}unmount(){}}class yT extends Mn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ps(ys(this.node.current,"focus",()=>this.onFocus()),ys(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function rm(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ee.postRender(()=>s(t,Es(t)))}class xT extends Mn{mount(){const{current:t}=this.node;t&&(this.unmount=wC(t,n=>(rm(this.node,n,"Start"),(r,{success:i})=>rm(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Sc=new WeakMap,Ul=new WeakMap,wT=e=>{const t=Sc.get(e.target);t&&t(e)},ST=e=>{e.forEach(wT)};function kT({root:e,...t}){const n=e||document;Ul.has(n)||Ul.set(n,{});const r=Ul.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ST,{root:e,...t})),r[i]}function CT(e,t,n){const r=kT(t);return Sc.set(e,n),r.observe(e),()=>{Sc.delete(e),r.unobserve(e)}}const jT={some:0,all:1};class bT extends Mn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:jT[i]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};return CT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(TT(t,n))&&this.startObserver()}unmount(){}}function TT({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const PT={inView:{Feature:bT},tap:{Feature:xT},focus:{Feature:yT},hover:{Feature:vT}},ET={layout:{ProjectionNode:yx,MeasureLayout:cx}},kc={current:null},xx={current:!1};function AT(){if(xx.current=!0,!!Id)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>kc.current=e.matches;e.addListener(t),t()}else kc.current=!1}const DT=[...Uy,Ae,En],RT=e=>DT.find(Hy(e)),im=new WeakMap;function LT(e,t,n){for(const r in t){const i=t[r],s=n[r];if(Le(i))e.addValue(r,i);else if(Le(s))e.addValue(r,gs(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,gs(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const sm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class IT{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=af,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Lt.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,ee.render(this.render,!1,!0))};const{latestValues:u,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Za(n),this.isVariantNode=Jv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const x=p[g];u[g]!==void 0&&Le(x)&&x.set(u[g],!1)}}mount(t){this.current=t,im.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),xx.current||AT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:kc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){im.delete(this.current),this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ar.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&ee.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Zr){const n=Zr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<sm.length;r++){const i=sm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=LT(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=gs(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Oy(i)||Ly(i))?i=parseFloat(i):!RT(i)&&En.test(n)&&(i=Vy(t,n)),this.setBaseTarget(t,Le(i)?i.get():i)),Le(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Fd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Le(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ef),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class wx extends IT{constructor(){super(...arguments),this.KeyframeResolver=Wy}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Le(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function MT(e){return window.getComputedStyle(e)}class _T extends wx{constructor(){super(...arguments),this.type="html",this.renderInstance=ay}readValueFromInstance(t,n){if(ar.has(n)){const r=of(n);return r&&r.default||0}else{const r=MT(t),i=(iy(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return lx(t,n)}build(t,n,r){Hd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Kd(t,n,r)}}class BT extends wx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=de}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ar.has(n)){const r=of(n);return r&&r.default||0}return n=ly.has(n)?n:$d(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return dy(t,n,r)}build(t,n,r){Ud(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){uy(t,n,r,i)}mount(t){this.isSVGTag=Gd(t.tagName),super.mount(t)}}const $T=(e,t)=>Nd(e)?new BT(t):new _T(t,{allowProjection:e!==S.Fragment}),VT=uC({...ab,...PT,...gT,...ET},$T),D=jk(VT),NT=w(D.nav)`
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
`,FT=w.div`
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
`,OT=w(vv)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,zT=w.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,HT=w.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,UT=w(D.button)`
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
`,WT=w(D.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,GT=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"5"}),l.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),l.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),l.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),l.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),l.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),l.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),l.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),l.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),KT=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),YT=()=>{const{isDark:e,toggleTheme:t}=xv();return l.jsx(NT,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:l.jsxs(FT,{children:[l.jsx(OT,{to:"/","aria-label":"Go to homepage",children:l.jsx(zT,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),l.jsx(HT,{}),l.jsx(UT,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:l.jsx(ve,{mode:"wait",children:l.jsx(WT,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?l.jsx(KT,{}):l.jsx(GT,{})},e?"moon":"sun")})})]})})},df=w.div`
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
`;const QT=w(D.div)`
  position: relative;
`,XT=w(vv)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Sx=w(D.div)`
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
`,ZT=w(D.div)`
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

  ${Sx}:hover &::before {
    opacity: 0.3;
  }
`,JT=w.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,qT={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},e5={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},t5=({title:e,icon:t,to:n})=>l.jsx(QT,{variants:qT,whileHover:"hover",whileTap:"tap",children:l.jsx(XT,{to:n,children:l.jsxs(Sx,{variants:e5,children:[l.jsx(ZT,{children:t}),l.jsx(JT,{children:e})]})})}),n5=w.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl) 0;
  padding-top: calc(var(--space-2xl) + 80px);

  @media (max-width: 1023px) {
    padding-top: var(--space-xl);
    padding-bottom: calc(var(--space-xl) + 80px);
  }
`,r5=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,i5=w(D.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  width: 100%;
  max-width: 320px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 900px;
  }

  @media (min-width: 1280px) {
    gap: var(--space-xl);
    max-width: 1000px;
  }
`,s5={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},o5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),l.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),l.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),l.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),l.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),l.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),l.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),l.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),l.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),l.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),a5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),l.jsx("path",{d:"M1 10h22"}),l.jsx("path",{d:"M17 14h.01"})]}),l5=[{id:"tax-manager",title:"Tax Manager",icon:l.jsx(o5,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:l.jsx(a5,{}),to:"/expense-manager"}],u5=()=>l.jsx(n5,{children:l.jsx(df,{children:l.jsx(r5,{children:l.jsx(i5,{variants:s5,initial:"hidden",animate:"visible",children:l5.map(e=>l.jsx(t5,{title:e.title,icon:e.icon,to:e.to},e.id))})})})}),Fo=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],om=75e3,Ar=4,c5=12e5,d5=6e4,am=5e6,lm=10,f5=12,p5=1800;function qn(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const s=r.slice(-3),o=r.slice(0,-3);if(o.length>0){const a=[];let u=o;for(;u.length>0;)u.length>=2?(a.unshift(u.slice(-2)),u=u.slice(0,-2)):(a.unshift(u),u="");i=a.join(",")+","+s}else i=s;return(t?"-":"")+i}function F(e){return"₹"+qn(e)}function X(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,s]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+qn(parseInt(i))+"."+s}function um(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:qn(e)}function h5(e){for(let t=Fo.length-1;t>=0;t--)if(e>Fo[t].from)return Fo[t].rate;return 0}function m5(e){const t=[];let n=e,r=0;for(const i of Fo){const s=i.from,a=(i.to??1/0)-s;if(n<=0){t.push({from:s,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const u=Math.min(n,a),c=u*i.rate/100;t.push({from:s,to:i.to,rate:i.rate,taxableInSlab:u>0?u:0,taxInSlab:c}),r+=c,n-=u}return{slabs:t,totalTax:r}}function g5(e,t){if(t>am){const r=e*(1+lm/100)*(1+Ar/100),i=t-am,o=(e+i)*(1+Ar/100),a=o<r,u=Math.min(r,o),c=u/(1+Ar/100),d=c-e,f=u-c;return{surchargeApplicable:!0,surchargeRate:lm,surchargeAmount:d,marginalReliefApplied:a,taxAfterSurcharge:c,cess:f,totalTax:u}}else{const n=e*(Ar/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function cm(e,t,n,r,i,s,o){const a=e*t/100,u=e-a;let c=0;i==="percentage"?c=e*s/100:i==="amount"&&(c=s);const d=e+c;let f=0,p=0;n&&(r==="percentage"?(f=a*f5/100,p=f):(f=p5*12,p=f));const g=e-p,x=o.map(Te=>({name:Te.name,amount:Te.amount*12})),y=x.reduce((Te,Ke)=>Te+Ke.amount,0),k=Math.max(0,g-om),{slabs:m,totalTax:h}=m5(k);let v=0,C=h;k<=c5&&(v=Math.min(h,d5),C=Math.max(0,h-v));const{surchargeApplicable:j,surchargeRate:b,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cess:I,totalTax:z}=g5(C,k),Ge=f+p,Me=z,ht=f+z+y,$=g-f-z-y,Y=$/12,N=g>0?z/g*100:0,A=h5(k);let M=0,_=c;if(c>0&&A>0){let Te=c*A/100;j&&(Te=Te*(1+b/100)),M=Te*(1+Ar/100),_=c-M}const U=$+_,G=U/12;return{baseSalary:e,basicSalary:a,hra:u,bonus:c,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:g,standardDeduction:om,additionalDeductions:x,totalAdditionalDeductions:y,taxableIncome:k,slabs:m,taxBeforeSurcharge:h,surchargeApplicable:j,surchargeRate:b,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cessRate:Ar,cess:I,totalTax:z,rebate87A:v,totalPFDeduction:Ge,totalTaxDeduction:Me,totalDeductions:ht,netSalaryYearly:$,netSalaryMonthly:Y,effectiveTaxRate:N,bonusTaxRate:A,bonusTaxAmount:M,bonusAfterTax:_,totalIncomeYearly:U,totalIncomeMonthly:G}}function v5(e){const t=cm(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=cm(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const ff="taxCalculatorInput";function y5(e){localStorage.setItem(ff,JSON.stringify(e))}function x5(){localStorage.removeItem(ff)}function kx(){const e=localStorage.getItem(ff);if(e)try{return JSON.parse(e)}catch{return null}return null}const w5={financialYear:"FY 2025-26"},S5=w(D.div)`
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
`,wi=w(D.div)`
  padding: var(--space-xs) 0;
`,Si=w.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`,k5=w.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,cr=w.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,dm=w.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
`,$n=w.input`
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
`,Wl=w.div`
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
`,Gl=w.div`
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
`,fm=w.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`,ki=w(D.button)`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: var(--radius-md);
  cursor: pointer;
  white-space: nowrap;
`,C5=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,Kl=w(D.div)`
  display: flex;
  gap: var(--space-sm);
  align-items: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`,Yl=w(D.button)`
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
`,j5=w(D.button)`
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
`,b5=w.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,T5=w(D.button)`
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
`,P5=w(D.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,qs=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,E5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Ql=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Be={type:"spring",stiffness:300,damping:30,mass:.8},A5={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Be}},D5={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Be},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Be},opacity:{duration:.1}}}},R5={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Be},exit:{opacity:0,x:-20,transition:{duration:.15}}};function Xl(e){const t=e.replace(/[^\d]/g,"");return t?qn(parseInt(t)):""}function eo(e){return parseInt(e.replace(/,/g,""))||0}const L5=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=S.useState(""),[s,o]=S.useState("50"),[a,u]=S.useState("percentage"),[c,d]=S.useState("none"),[f,p]=S.useState(""),[g,x]=S.useState([]),[y,k]=S.useState(""),[m,h]=S.useState(!1),v=S.useRef(!1);S.useEffect(()=>{const $=kx();$&&(i(qn($.baseSalary)),o($.basicPercentage.toString()),u($.pfType),d($.bonusType),p($.bonusValue>0?$.bonusType==="amount"?qn($.bonusValue):$.bonusValue.toString():""),x($.additionalDeductions.map(Y=>({name:Y.name,amount:qn(Y.amount)}))),k($.hikePercentage>0?$.hikePercentage.toString():"")),h(!0)},[]),S.useEffect(()=>{m&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{I()},100))},[m,n,r]);const C=$=>{i(Xl($))},j=$=>{p(Xl($))},b=($,Y)=>{const N=[...g];N[$].amount=Xl(Y),x(N)},T=()=>{x([...g,{name:"",amount:""}])},P=$=>{x(g.filter((Y,N)=>N!==$))},L=($,Y)=>{const N=[...g];N[$].name=Y,x(N)},I=()=>{const $={baseSalary:eo(r),basicPercentage:parseFloat(s)||50,calculatePF:!0,pfType:a,bonusType:c,bonusValue:c==="amount"?eo(f):parseFloat(f)||0,additionalDeductions:g.filter(Y=>Y.name&&Y.amount).map(Y=>({name:Y.name,amount:eo(Y.amount)})),hikePercentage:parseFloat(y)||0};y5($),e($)},z=()=>{i(""),o("50"),u("percentage"),d("none"),p(""),x([]),k(""),x5(),t==null||t()},Me=eo(r)>0,ht=r||g.length>0||c!=="none"||y;return l.jsxs(S5,{variants:A5,initial:"hidden",animate:"visible",children:[l.jsxs(wi,{children:[l.jsx(Si,{children:"Salary Details"}),l.jsxs(k5,{children:[l.jsxs(cr,{$flex:2,children:[l.jsx(dm,{children:"Yearly Base Salary / CTC *"}),l.jsx(Wl,{children:l.jsx($n,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:$=>C($.target.value)})})]}),l.jsxs(cr,{children:[l.jsx(dm,{children:"Basic %"}),l.jsx(Gl,{children:l.jsx($n,{type:"number",inputMode:"numeric",placeholder:"40",value:s,onChange:$=>o($.target.value),min:"0",max:"100"})})]})]})]}),l.jsx(qs,{}),l.jsxs(wi,{children:[l.jsx(Si,{children:"Provident Fund (PF)"}),l.jsxs(fm,{children:[l.jsx(ki,{$active:a==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Be,children:"12% of Basic"}),l.jsx(ki,{$active:a==="flat",onClick:()=>u("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Be,children:"Flat ₹1,800/mo"})]})]}),l.jsx(qs,{}),l.jsxs(wi,{children:[l.jsx(Si,{children:"Bonus (Optional)"}),l.jsxs(fm,{children:[l.jsx(ki,{$active:c==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Be,children:"None"}),l.jsx(ki,{$active:c==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Be,children:"Percentage"}),l.jsx(ki,{$active:c==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},transition:Be,children:"Amount"})]}),l.jsx(ve,{initial:!1,children:c!=="none"&&l.jsx(D.div,{initial:"hidden",animate:"visible",exit:"exit",variants:D5,style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:l.jsxs(Kl,{children:[l.jsx(cr,{children:c==="percentage"?l.jsx(Gl,{children:l.jsx($n,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:$=>p($.target.value)})}):l.jsx(Wl,{children:l.jsx($n,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:$=>j($.target.value)})})}),l.jsx(ve,{children:f&&l.jsx(Yl,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Be,children:l.jsx(Ql,{})})})]})},"bonus-input")})]}),l.jsx(qs,{}),l.jsxs(wi,{children:[l.jsx(Si,{children:"Additional Monthly Deductions"}),l.jsxs(C5,{children:[l.jsx(ve,{mode:"popLayout",children:g.map(($,Y)=>l.jsxs(Kl,{variants:R5,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[l.jsx(cr,{children:l.jsx($n,{type:"text",placeholder:"Name (e.g., Cab)",value:$.name,onChange:N=>L(Y,N.target.value)})}),l.jsx(cr,{children:l.jsx(Wl,{children:l.jsx($n,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:$.amount,onChange:N=>b(Y,N.target.value)})})}),l.jsx(Yl,{onClick:()=>P(Y),whileHover:{scale:1.1},whileTap:{scale:.9},transition:Be,children:l.jsx(Ql,{})})]},Y))}),l.jsxs(j5,{onClick:T,whileHover:{scale:1.02},whileTap:{scale:.98},transition:Be,children:[l.jsx(E5,{}),"Add Deduction"]})]})]}),l.jsx(qs,{}),l.jsxs(wi,{children:[l.jsx(Si,{children:"Hike / Appraisal (Optional)"}),l.jsxs(Kl,{style:{marginBottom:0},children:[l.jsx(cr,{children:l.jsx(Gl,{children:l.jsx($n,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:y,onChange:$=>k($.target.value),min:"0",max:"200"})})}),l.jsx(ve,{children:y&&l.jsx(Yl,{onClick:()=>k(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},transition:Be,children:l.jsx(Ql,{})})})]})]}),l.jsxs(b5,{children:[l.jsx(T5,{onClick:I,disabled:!Me,whileHover:Me?{scale:1.02}:{},whileTap:Me?{scale:.98}:{},transition:Be,children:"Calculate Tax"}),l.jsx(ve,{children:ht&&l.jsx(P5,{onClick:z,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Be,children:"Reset"})})]})]})},I5=w(D.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,pm=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,to=w.div`
  padding: var(--space-md);
  background: ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.1)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.2)":"var(--border)"};
  border-radius: var(--radius-md);
`,no=w.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
`,ro=w.div`
  font-size: ${({$large:e})=>e?"18px":"15px"};
  font-weight: 600;
  color: var(--text-primary);
`,io=w.span`
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
`,_e=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"var(--green)":"var(--text-tertiary)"};
  margin-top: 2px;
  display: block;
`,so=w.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-xs);
`,Zl=w.div`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,hm=w.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--green);
  margin-top: var(--space-xs);
`,Yn=w(D.div)`
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
`,mm=w(Yn)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,M5=w(Yn)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,_5=w(Yn)`
  background: linear-gradient(135deg, rgba(var(--green-rgb), 0.12), rgba(var(--accent-rgb), 0.08));
  border-color: rgba(var(--green-rgb), 0.25);
`,Vn=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
`,Jt=w.h3`
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
`,pf=w(D.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,gm=w(pf)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,B5=w(pf)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,$5=w(pf)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,vm=w.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,V5=w.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,ym=w.button`
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
`,xm=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-sm);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,qt=w.div`
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 0;
  overflow: hidden;
`,en=w.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tn=w.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N5=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,wm=w(D.div)`
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
`,nn=w.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"var(--accent)":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F5=w(D.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,Cc=w.span`
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
`,O5=w(Cc)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,Qe=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-md) 0;
  opacity: 0.6;
`,te=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-xs) 0;
  gap: var(--space-sm);

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`,ne=w.span`
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
`,re=w.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"var(--accent)":t?"#e05555":"var(--text-primary)"};
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`,Sm=w.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,km=w(D.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,Cm=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,jm=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,bm=w.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,Tm=w.span`
  font-size: 11px;
  color: var(--text-secondary);
`,Pm=w.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,Em=w(D.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,Am=w.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,z5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),H5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),l.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),l.jsx("path",{d:"M12 17.5v-11"})]}),Jl=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"})]}),U5=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),l.jsx("path",{d:"M12 8v13"}),l.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),l.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Dm=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),l.jsx("polyline",{points:"16 7 22 7 22 13"})]}),W5={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},rn={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},G5=({breakdown:e})=>{var f;const[t,n]=S.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",s=Math.max(...e.slabs.map(p=>p.taxInSlab),1),o=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&o.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const a=o.reduce((p,g)=>p+g.value,0),u=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],c=u.reduce((p,g)=>p+g.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${F(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),l.jsxs(I5,{variants:W5,initial:"hidden",animate:"visible",children:[e.postHike&&l.jsxs(mm,{variants:rn,children:[l.jsx(Vn,{children:l.jsxs(Jt,{children:[l.jsx(Dm,{}),"Base Salary (CTC)"]})}),l.jsx(gm,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:F(e.baseSalary)}),l.jsx(Qe,{}),l.jsxs(so,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Zl,{children:F(e.postHike.baseSalary)}),l.jsxs(hm,{children:["+",F(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),l.jsxs(mm,{variants:rn,children:[l.jsxs(Vn,{children:[l.jsxs(Jt,{children:[l.jsx(z5,{}),"In-Hand Salary (Base)"]}),l.jsxs(V5,{children:[l.jsx(ym,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),l.jsx(ym,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),l.jsx(gm,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:X(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(Qe,{}),l.jsxs(so,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Zl,{children:X(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),l.jsxs(hm,{children:["+",F(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&l.jsxs(M5,{variants:rn,children:[l.jsx(Vn,{children:l.jsxs(Jt,{children:[l.jsx(U5,{}),"Bonus Summary",e.postHike&&l.jsxs(io,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsx(B5,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:F(e.bonus)}),l.jsx(vm,{children:"Gross Bonus (before tax)"}),l.jsx(Qe,{}),l.jsx(so,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),l.jsx(Zl,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:X(e.bonusAfterTax)}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsx(Qe,{}),l.jsxs(so,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsxs(pm,{style:{marginTop:0},children:[l.jsxs(to,{children:[l.jsx(no,{children:"Gross Bonus"}),l.jsx(ro,{$large:!0,children:F(e.postHike.bonus)}),l.jsxs(_e,{$positive:!0,children:["+",F(e.postHike.bonus-e.bonus)]})]}),l.jsxs(to,{$highlight:!0,children:[l.jsx(no,{children:"In-Hand Bonus"}),l.jsx(ro,{$large:!0,children:X(e.postHike.bonusAfterTax)}),l.jsxs(_e,{$positive:!0,children:["+",F(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),l.jsx(Qe,{}),l.jsxs(xm,{children:[l.jsxs(qt,{children:[l.jsx(en,{children:"Tax Rate"}),l.jsxs(tn,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),l.jsxs(qt,{children:[l.jsx(en,{children:"Tax Deducted"}),l.jsxs(tn,{style:{color:"#e05555"},children:["-",X(e.bonusTaxAmount)]})]})]}),l.jsx(Em,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:l.jsxs(Am,{children:["Bonus is taxed at your ",l.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&l.jsxs(_5,{variants:rn,children:[l.jsxs(Vn,{children:[l.jsxs(Jt,{children:[l.jsx(Dm,{}),"Total Combined Income",e.postHike&&l.jsxs(io,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsx(Cc,{children:"Yearly"})]}),e.postHike?l.jsxs(pm,{children:[l.jsxs(to,{children:[l.jsx(no,{children:"Current"}),l.jsx(ro,{$large:!0,children:X(e.totalIncomeYearly)})]}),l.jsxs(to,{$highlight:!0,children:[l.jsxs(no,{children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(ro,{$large:!0,children:X(e.postHike.totalIncomeYearly)}),l.jsxs(_e,{$positive:!0,children:["+",F(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx($5,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:X(e.totalIncomeYearly)}),l.jsx(vm,{children:"Base salary + Bonus (after tax)"})]}),l.jsx(Qe,{}),l.jsxs(te,{children:[l.jsx(ne,{children:"Base In-Hand (Yearly)"}),l.jsx(re,{children:X(e.netSalaryYearly)})]}),l.jsxs(te,{children:[l.jsx(ne,{children:"Bonus In-Hand (Yearly)"}),l.jsx(re,{children:X(e.bonusAfterTax)})]}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Total Combined Income"}),l.jsx(re,{$highlight:!0,children:X(e.totalIncomeYearly)})]})]}),l.jsxs(Yn,{variants:rn,children:[l.jsxs(Jt,{style:{marginBottom:"var(--space-sm)"},children:[l.jsx(Jl,{}),"Summary",e.postHike&&l.jsxs(io,{children:["+",e.hikePercentage,"% Hike"]})]}),l.jsxs(xm,{children:[l.jsxs(qt,{children:[l.jsx(en,{children:"Gross Salary"}),l.jsx(tn,{children:F(e.grossSalary*r)}),e.postHike&&l.jsxs(_e,{$positive:!0,children:["→ ",F(e.postHike.grossSalary*r)]})]}),l.jsxs(qt,{children:[l.jsx(en,{children:"Total Tax"}),l.jsx(tn,{children:X(e.totalTax*r)}),e.postHike&&l.jsxs(_e,{children:["→ ",X(e.postHike.totalTax*r)]})]}),l.jsxs(qt,{children:[l.jsx(en,{children:"Employee PF"}),l.jsx(tn,{children:F(e.employeePF*r)}),e.postHike&&l.jsxs(_e,{$positive:!0,children:["→ ",F(e.postHike.employeePF*r)]})]}),l.jsxs(qt,{children:[l.jsx(en,{children:"Employer PF"}),l.jsx(tn,{children:F(e.employerPF*r)}),e.postHike&&l.jsxs(_e,{$positive:!0,children:["→ ",F(e.postHike.employerPF*r)]})]}),l.jsxs(qt,{children:[l.jsx(en,{children:"Total PF"}),l.jsx(tn,{children:F((e.employeePF+e.employerPF)*r)}),e.postHike&&l.jsxs(_e,{$positive:!0,children:["→ ",F((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),l.jsxs(qt,{children:[l.jsx(en,{children:"Eff. Tax Rate"}),l.jsxs(tn,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&l.jsxs(_e,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),l.jsx(Qe,{}),l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),l.jsx(Sm,{children:o.map((p,g)=>l.jsx(km,{$color:p.color,initial:{width:0},animate:{width:`${p.value/a*100}%`},transition:{delay:.3+g*.1,duration:.5}},g))}),l.jsx(Cm,{children:o.map((p,g)=>l.jsxs(jm,{children:[l.jsx(bm,{$color:p.color}),l.jsx(Tm,{children:p.label}),l.jsx(Pm,{children:F(p.value*r)})]},g))}),e.postHike&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),l.jsx(Sm,{children:u.map((p,g)=>l.jsx(km,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.5+g*.1,duration:.5}},g))}),l.jsx(Cm,{children:u.map((p,g)=>l.jsxs(jm,{children:[l.jsx(bm,{$color:p.color}),l.jsx(Tm,{children:p.label}),l.jsx(Pm,{children:F(p.value*r)})]},g))})]}),d.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(Qe,{}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,g)=>l.jsx(Em,{children:l.jsx(Am,{dangerouslySetInnerHTML:{__html:p}})},g))})]})]}),l.jsxs(Yn,{variants:rn,children:[l.jsx(Vn,{children:l.jsxs(Jt,{children:[l.jsx(H5,{}),"Tax Slabs",l.jsx(Cc,{children:w5.financialYear}),e.postHike&&l.jsxs(io,{children:["+",e.hikePercentage,"% Hike"]})]})}),l.jsxs(N5,{children:[l.jsxs(wm,{$isHeader:!0,children:[l.jsx(nn,{children:"Slab"}),l.jsx(nn,{$align:"center",children:"Rate"}),l.jsx(nn,{$align:"right",children:"Amount"}),l.jsx(nn,{$align:"right",children:"Tax"})]}),l.jsx(ve,{children:e.slabs.map((p,g)=>{var x,y;return l.jsxs(wm,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:g*.03},children:[l.jsxs(nn,{children:[um(p.from)," - ",um(p.to),p.taxableInSlab>0&&l.jsx(F5,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/s*100,8)}%`},transition:{delay:.2+g*.03,duration:.4}})]}),l.jsxs(nn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),l.jsxs(nn,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?F(p.taxableInSlab):"-",e.postHike&&((x=e.postHike.slabs[g])==null?void 0:x.taxableInSlab)>0&&l.jsxs(_e,{$positive:!0,children:["→ ",F(e.postHike.slabs[g].taxableInSlab)]})]}),l.jsxs(nn,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?F(p.taxInSlab):"-",e.postHike&&((y=e.postHike.slabs[g])==null?void 0:y.taxInSlab)>0&&l.jsxs(_e,{children:["→ ",F(e.postHike.slabs[g].taxInSlab)]})]})]},g)})})]}),l.jsx(Qe,{}),l.jsxs(te,{children:[l.jsx(ne,{children:"Tax Before Surcharge"}),l.jsxs(re,{children:[X(e.taxBeforeSurcharge),e.postHike&&l.jsxs(_e,{children:["→ ",X(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&l.jsxs(te,{children:[l.jsx(ne,{children:"Section 87A Rebate"}),l.jsxs(re,{$negative:!0,children:["-",F(e.rebate87A)]})]}),e.surchargeApplicable&&l.jsxs(te,{children:[l.jsxs(ne,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&l.jsx(O5,{children:"Marginal Relief"})]}),l.jsxs(re,{children:[X(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&l.jsxs(_e,{children:["→ ",X(e.postHike.surchargeAmount)]})]})]}),l.jsxs(te,{children:[l.jsxs(ne,{children:["Cess (",e.cessRate,"%)"]}),l.jsxs(re,{children:[X(e.cess),e.postHike&&l.jsxs(_e,{children:["→ ",X(e.postHike.cess)]})]})]}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Total Tax"}),l.jsxs(re,{$highlight:!0,children:[X(e.totalTax),e.postHike&&l.jsxs(_e,{children:["→ ",X(e.postHike.totalTax)]})]})]})]}),l.jsxs(Yn,{variants:rn,children:[l.jsx(Vn,{children:l.jsxs(Jt,{children:[l.jsx(Jl,{}),"Yearly Breakdown"]})}),l.jsxs(te,{children:[l.jsx(ne,{children:"Base Salary (CTC)"}),l.jsx(re,{children:F(e.baseSalary)})]}),e.employerPF>0&&l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Employer PF"}),l.jsxs(re,{$negative:!0,children:["-",F(e.employerPF)]})]}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Gross Salary"}),l.jsx(re,{children:F(e.grossSalary)})]}),l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Standard Deduction"}),l.jsxs(re,{$negative:!0,children:["-",F(e.standardDeduction)]})]}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Taxable Income"}),l.jsx(re,{children:F(e.taxableIncome)})]}),l.jsx(Qe,{}),l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Income Tax"}),l.jsxs(re,{$negative:!0,children:["-",X(e.totalTax)]})]}),e.employeePF>0&&l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Employee PF"}),l.jsxs(re,{$negative:!0,children:["-",F(e.employeePF)]})]}),e.additionalDeductions.map((p,g)=>l.jsxs(te,{children:[l.jsxs(ne,{children:["Less: ",p.name]}),l.jsxs(re,{$negative:!0,children:["-",F(p.amount)]})]},g)),l.jsx(Qe,{}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Net In-Hand (Yearly)"}),l.jsx(re,{$highlight:!0,children:X(e.netSalaryYearly)})]})]}),l.jsxs(Yn,{variants:rn,children:[l.jsx(Vn,{children:l.jsxs(Jt,{children:[l.jsx(Jl,{}),"Monthly Breakdown"]})}),l.jsxs(te,{children:[l.jsx(ne,{children:"Base Salary (CTC)"}),l.jsx(re,{children:F(e.baseSalary/12)})]}),e.employerPF>0&&l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Employer PF"}),l.jsxs(re,{$negative:!0,children:["-",F(e.employerPF/12)]})]}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Gross Salary"}),l.jsx(re,{children:F(e.grossSalary/12)})]}),l.jsx(Qe,{}),l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Income Tax"}),l.jsxs(re,{$negative:!0,children:["-",X(e.totalTax/12)]})]}),e.employeePF>0&&l.jsxs(te,{children:[l.jsx(ne,{children:"Less: Employee PF"}),l.jsxs(re,{$negative:!0,children:["-",F(e.employeePF/12)]})]}),e.additionalDeductions.map((p,g)=>l.jsxs(te,{children:[l.jsxs(ne,{children:["Less: ",p.name]}),l.jsxs(re,{$negative:!0,children:["-",F(p.amount/12)]})]},g)),l.jsx(Qe,{}),l.jsxs(te,{children:[l.jsx(ne,{$bold:!0,children:"Net In-Hand (Monthly)"}),l.jsx(re,{$highlight:!0,children:X(e.netSalaryMonthly)})]})]})]})},K5=w(D.div)`
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
`,Y5=w.div`
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
`,Q5=w(D.div)`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,X5=w(D.div)`
  min-width: 0;
`,Z5={type:"spring",stiffness:300,damping:30,mass:.8},J5={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Rm={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Z5}},q5=()=>{const[e,t]=S.useState(null),[n,r]=S.useState(!1);S.useEffect(()=>{const o=kx();o&&o.baseSalary>0&&r(!0)},[]);const i=S.useCallback(o=>{const a=v5(o);t(a),window.innerWidth<1024&&setTimeout(()=>{var u;(u=document.getElementById("results"))==null||u.scrollIntoView({behavior:"smooth"})},100)},[]),s=S.useCallback(()=>{t(null)},[]);return l.jsx(K5,{variants:J5,initial:"hidden",animate:"visible",children:l.jsx(df,{$maxWidth:"wide",children:l.jsxs(Y5,{children:[l.jsx(Q5,{variants:Rm,children:l.jsx(L5,{onCalculate:i,onReset:s,autoCalculate:n})}),l.jsx(X5,{id:"results",variants:Rm,children:l.jsx(ve,{mode:"wait",children:e&&l.jsx(G5,{breakdown:e},"results")})})]})})})},qr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],Cx="expense-manager-transactions",jx="expense-manager-initial-balances",bx="expense-manager-initial-cc-bills";function ql(e){localStorage.setItem(Cx,JSON.stringify(e))}function eP(){const e=localStorage.getItem(Cx);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function Lm(e){localStorage.setItem(jx,JSON.stringify(e))}function tP(){const e=localStorage.getItem(jx);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function Im(e){localStorage.setItem(bx,JSON.stringify(e))}function nP(){const e=localStorage.getItem(bx);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function ui(e){return e.toISOString().split("T")[0]}function Tx(e){return new Date(e+"T00:00:00")}function rP(e){return Tx(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function Mm(e){return e===ui(new Date)}function iP(e){return e<ui(new Date)}function sP(e,t){if(!e.statementDate)return"";const n=Tx(t),r=n.getFullYear(),i=n.getMonth(),s=n.getDate();let o=r,a=i;s<e.statementDate&&(a-=1,a<0&&(a=11,o-=1));const u=new Date(o,a,e.statementDate);return ui(u)}function oP(e,t,n,r,i={}){const s=t.filter(a=>a.date<=n&&(a.accountId===e.id||a.linkedAccountId===e.id));let o=0;if(e.type==="bank"){o=r[e.id]||0;for(const a of s)a.accountId===e.id&&(a.type==="bank_credit"?o+=a.amount:a.type==="bank_debit"&&(o-=a.amount)),a.linkedAccountId===e.id&&a.type==="cc_payment"&&(o-=a.amount);return{account:e,balance:o}}else{o=-(i[e.id]||0);for(const f of s)f.accountId===e.id&&(f.type==="credit_card_spend"?o-=f.amount:f.type==="cc_payment"&&(o+=f.amount));const u=sP(e,n),d=s.filter(f=>f.date>u&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:o,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,o))}}}function aP(e,t,n,r={}){return qr.map(i=>oP(i,e,t,n,r))}function lP(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function uP(e,t,n,r,i,s){return{id:lP(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:s,createdAt:new Date().toISOString()}}function Dr(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function cP(e){return qr.find(t=>t.id===e)}function Px(){return qr.filter(e=>e.type==="bank")}function Ex(){return qr.filter(e=>e.type==="credit_card")}function dP(e,t,n){const r={version:"1.0",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n};return JSON.stringify(r,null,2)}function fP(e,t,n){const r=dP(e,t,n),i=new Blob([r],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a"),a=new Date().toISOString().split("T")[0];o.href=s,o.download=`expense-backup-${a}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}function pP(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null)return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function hP(e){try{const t=JSON.parse(e);return pP(t)?t:null}catch{return null}}const mP=w(D.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,gP=w.div`
  display: flex;
  align-items: center;
  padding: var(--space-xl);
  gap: var(--space-lg);

  @media (max-width: 640px) {
    padding: var(--space-lg);
    gap: var(--space-md);
  }
`,vP=w(D.div)`
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
`,yP=w.span`
  font-size: 22px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,xP=w.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
`,wP=w.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,SP=w(D.div)`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,kP=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,CP=w.span`
  font-size: 13px;
  color: var(--text-tertiary);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,jP=w(D.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  
  ${({$type:e})=>{switch(e){case"past":return"background: #ef4444;";case"today":return"background: #10b981;";case"future":return"background: #3b82f6;"}}}
`,bP=w(D.span)`
  font-size: 12px;
  font-weight: 500;
  
  ${({$type:e})=>{switch(e){case"past":return"color: #ef4444;";case"today":return"color: #10b981;";case"future":return"color: #3b82f6;"}}}

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,TP=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`,PP=w(D.button).attrs({type:"button"})`
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
`,EP=w.div`
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`,AP=w(D.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-secondary);
  cursor: pointer;
  pointer-events: none;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    border-radius: 8px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,DP=w.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font-size: 16px; /* Prevents iOS zoom */
  
  /* Make the calendar picker indicator cover the whole area */
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    background: transparent;
  }
`,RP=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Ci={type:"spring",stiffness:300,damping:30,mass:.8},LP=({selectedDate:e,onDateChange:t})=>{const n=p=>{p.preventDefault(),p.stopPropagation(),t(ui(new Date))},i=Mm(e)?"today":iP(e)?"past":"future",s=Mm(e),o=new Date(e+"T00:00:00"),a=o.getDate(),u=o.toLocaleDateString("en-US",{month:"short"}).toUpperCase(),c=o.toLocaleDateString("en-US",{weekday:"long"}),d=o.getFullYear(),f=()=>{switch(i){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return l.jsx(mP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:Ci,children:l.jsxs(gP,{children:[l.jsx(ve,{mode:"wait",children:l.jsxs(vP,{$type:i,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:Ci,children:[l.jsx(yP,{children:a}),l.jsx(xP,{children:u})]},`${a}-${u}`)}),l.jsxs(wP,{children:[l.jsx(ve,{mode:"wait",children:l.jsx(SP,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:Ci,children:c},c)}),l.jsxs(kP,{children:[l.jsx(CP,{children:d}),l.jsx(ve,{mode:"wait",children:l.jsx(jP,{$type:i,initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",stiffness:500,damping:25}},i)}),l.jsx(ve,{mode:"wait",children:l.jsx(bP,{$type:i,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:Ci,children:f()},i)})]})]}),l.jsxs(TP,{children:[l.jsx(ve,{children:!s&&l.jsx(PP,{onClick:n,initial:{opacity:0,scale:.8,x:20},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:20},whileHover:{scale:1.05,backgroundColor:"var(--accent-hover)"},whileTap:{scale:.95},transition:Ci,children:"Today"})}),l.jsxs(EP,{children:[l.jsx(AP,{whileHover:{scale:1.05,borderColor:"var(--border-hover)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(RP,{})}),l.jsx(DP,{type:"date",value:e,onChange:p=>t(p.target.value),"aria-label":"Select date"})]})]})]})})},IP=w(D.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,MP=w.div`
  position: relative;
  z-index: 1;
`,_P=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,BP=w(D.div)`
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
`,$P=w.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  flex: 1;
  margin-left: var(--space-sm);
`,eu=w(D.span)`
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
`,VP=w(D.div)`
  font-size: 24px;
  font-weight: 700;
  color: ${({$negative:e,$color:t})=>e?"#ef4444":t};
  letter-spacing: -0.02em;
  margin-bottom: 2px;
  font-variant-numeric: tabular-nums;
`,NP=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,FP=w.div`
  font-size: 11px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,OP={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},zP=e=>{const t=OP[e];return t?l.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},_m={type:"spring",stiffness:300,damping:30,mass:.8},HP=({accountBalance:e,index:t=0})=>{const{account:n,balance:r,pendingBill:i,totalOutstanding:s}=e,o=Math.abs(r),a=r<0,u=()=>s&&s>0?l.jsx(eu,{$type:"due",layout:!0,children:"Due"}):i&&i>0?l.jsx(eu,{$type:"unbilled",layout:!0,children:"Unbilled"}):l.jsx(eu,{$type:"clear",layout:!0,children:"Clear"});return l.jsx(IP,{$accentColor:n.color,initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{..._m,delay:t*.05},whileHover:{scale:1.02,y:-2},layout:!0,children:l.jsxs(MP,{children:[l.jsxs(_P,{children:[l.jsx(BP,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:zP(n.bank)}),l.jsx($P,{children:n.name.replace(" Credit Card","").replace(" Bank","")+" Bank"})]}),l.jsxs(VP,{$negative:a,$color:n.color,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:_m,children:[a?"-":"",Dr(o)]},o),l.jsxs(NP,{children:[l.jsx(FP,{children:a?"Outstanding":o===0?"Paid":"Overpaid"}),u()]})]})})},UP=S.memo(HP),WP=w(D.div)`
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
`,oo=w(D.div)`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,ao=w.div`
  position: relative;
  z-index: 1;
`,lo=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,Bm=w(D.div)`
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
`,$m=w(D.div)`
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
`,Vm={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},uo=w(D.div)`
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
`,co=w.div`
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
`,fo=w(D.div)`
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
`,po=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,GP=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),KP=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),ho=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m18 15-6-6-6 6"})}),mo=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m6 9 6 6 6-6"})}),Mt={type:"spring",stiffness:300,damping:30,mass:.8},YP={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},go={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:Mt}},QP=({balances:e})=>{const{hdfcBalance:t,iciciBalance:n,totalCCOutstanding:r,netPosition:i}=S.useMemo(()=>{const s=e.find(f=>f.account.id==="hdfc-bank"),o=e.find(f=>f.account.id==="icici-bank"),a=e.filter(f=>f.account.type==="credit_card"),u=(s==null?void 0:s.balance)||0,c=(o==null?void 0:o.balance)||0,d=a.reduce((f,p)=>f+(p.totalOutstanding||0),0);return{hdfcBalance:u,iciciBalance:c,totalCCOutstanding:d,netPosition:u-d}},[e]);return l.jsxs(WP,{variants:YP,initial:"hidden",animate:"visible",children:[l.jsx(oo,{$variant:"hdfc",variants:go,whileHover:{scale:1.02,y:-2},transition:Mt,children:l.jsxs(ao,{children:[l.jsx(lo,{children:l.jsx($m,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:Vm.hdfc,alt:"HDFC Bank"})})}),l.jsx(co,{children:"HDFC Bank"}),l.jsx(fo,{$color:t>=0?"#004C8F":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Mt,children:Dr(t)},t),l.jsxs(po,{children:[l.jsx("span",{}),l.jsxs(uo,{$positive:t>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[t>=0?l.jsx(ho,{}):l.jsx(mo,{}),t>=0?"+":"-"]})]})]})}),l.jsx(oo,{$variant:"icici",variants:go,whileHover:{scale:1.02,y:-2},transition:Mt,children:l.jsxs(ao,{children:[l.jsx(lo,{children:l.jsx($m,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx("img",{src:Vm.icici,alt:"ICICI Bank"})})}),l.jsx(co,{children:"ICICI Bank"}),l.jsx(fo,{$color:n>=0?"#F58220":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Mt,children:Dr(n)},n),l.jsxs(po,{children:[l.jsx("span",{}),l.jsxs(uo,{$positive:n>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[n>=0?l.jsx(ho,{}):l.jsx(mo,{}),n>=0?"+":"-"]})]})]})}),l.jsx(oo,{$variant:"negative",variants:go,whileHover:{scale:1.02,y:-2},transition:Mt,children:l.jsxs(ao,{children:[l.jsx(lo,{children:l.jsx(Bm,{$color:"#ef4444",whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(GP,{})})}),l.jsx(co,{children:"Credit Cards"}),l.jsxs(fo,{$color:r>0?"#ef4444":"#10b981",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Mt,children:[r>0?"-":"",Dr(r)]},r),l.jsxs(po,{children:[l.jsx("span",{}),l.jsxs(uo,{$positive:r===0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[r===0?l.jsx(ho,{}):l.jsx(mo,{}),r>0?"Due":"Clear"]})]})]})}),l.jsx(oo,{$variant:"neutral",variants:go,whileHover:{scale:1.02,y:-2},transition:Mt,children:l.jsxs(ao,{children:[l.jsx(lo,{children:l.jsx(Bm,{$color:"#10b981",whileHover:{scale:1.1,rotate:-5},transition:{type:"spring",stiffness:400,damping:25},children:l.jsx(KP,{})})}),l.jsx(co,{children:"Net Position"}),l.jsx(fo,{$color:i>=0?"#10b981":"#ef4444",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:Mt,children:Dr(i)},i),l.jsxs(po,{children:[l.jsx("span",{}),l.jsxs(uo,{$positive:i>=0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:25,delay:.2},children:[i>=0?l.jsx(ho,{}):l.jsx(mo,{}),"Net"]})]})]})})]})},XP=S.memo(QP),ZP=w.div`
  display: flex;
  flex-direction: column;
`,JP=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
`,qP=w(D.button)`
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
`,e4=w.span`
  font-weight: 600;
  display: block;
`,t4=w.span`
  font-size: 11px;
  opacity: 0.8;
  display: block;
  margin-top: 2px;
`,n4=w.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,r4=w.div`
  overflow: hidden;
`,i4=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    gap: var(--space-md);
  }
`,s4=w.div`
  display: flex;
  gap: var(--space-md);
  align-items: flex-end;
`,vo=w.div`
  &.flex-grow {
    flex: 1;
    min-width: 0;
  }
`,yo=w.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`,Nm=w.input`
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
`,o4=w.div`
  position: relative;
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
`,a4=w.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font-size: 16px; /* Prevents iOS zoom */
  
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`,l4=w.select`
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
`,u4=w.div`
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
`,c4=w.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`,d4=w(D.button)`
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
`,f4=w(D.button)`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
`,p4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),h4=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],m4="hdfc-bank",g4=Ex(),v4=Px(),tu={type:"spring",stiffness:400,damping:25},y4=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[u,c]=S.useState(""),[d,f]=S.useState(t||ui(new Date)),p=S.useRef(null);S.useEffect(()=>{t&&f(t)},[t]);const g=i!==""||o!==""||u!=="";S.useEffect(()=>{if(!n||g)return;const b=T=>{p.current&&!p.current.contains(T.target)&&r("")};return document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b)}},[n,g]);const x=S.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return g4;case"bank_debit":case"bank_credit":return v4;default:return qr}},[n]),y=S.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),k=n&&i&&parseFloat(o)>0&&d,m=S.useCallback(()=>{r(""),s(""),a(""),c("")},[]),h=S.useCallback(()=>{if(!n||!i||!o||!d)return;const b=n==="cc_payment"?m4:void 0,T=qr.find(I=>I.id===i);let P="";switch(n){case"credit_card_spend":P=`Spent on ${T==null?void 0:T.name}`;break;case"cc_payment":P=`Payment to ${T==null?void 0:T.name}`;break;case"bank_debit":P=`Debited from ${T==null?void 0:T.name}`;break;case"bank_credit":P=`Credited to ${T==null?void 0:T.name}`;break}const L=uP(n,i,parseFloat(o),u||P,d,b);e(L),m()},[n,i,o,u,d,e,m]),v=S.useMemo(()=>{const T=o.replace(/[^0-9.]/g,"").split(".");let P=T[0];const L=T[1];if(P.length>3){let I=P.substring(P.length-3),z=P.substring(0,P.length-3);z=z.replace(/\B(?=(\d{2})+(?!\d))/g,","),P=z+","+I}return L!==void 0?`${P}.${L}`:P},[o]),C=S.useCallback(b=>{const T=b.target.value.replace(/,/g,"");(T===""||/^\d*\.?\d*$/.test(T))&&a(T)},[]),j=!!n;return l.jsxs(ZP,{ref:p,children:[l.jsx(JP,{children:h4.map(({type:b,label:T,hint:P,color:L})=>l.jsxs(qP,{type:"button",$active:n===b,$color:L,onClick:()=>{r(b),s("")},whileHover:{scale:1.02},whileTap:{scale:.98},transition:tu,children:[l.jsx(e4,{children:T}),l.jsx(t4,{children:P})]},b))}),l.jsx(n4,{$isOpen:j,children:l.jsx(r4,{children:l.jsxs(i4,{children:[l.jsxs(vo,{children:[l.jsx(yo,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),l.jsxs(l4,{value:i,onChange:b=>s(b.target.value),children:[l.jsx("option",{value:"",children:y()}),x.map(b=>l.jsx("option",{value:b.id,children:b.name},b.id))]})]}),l.jsxs(s4,{children:[l.jsxs(vo,{className:"flex-grow",children:[l.jsx(yo,{children:"Amount"}),l.jsx(u4,{children:l.jsx(Nm,{type:"text",inputMode:"decimal",placeholder:"10,000",value:v,onChange:C})})]}),l.jsxs(vo,{children:[l.jsx(yo,{children:"Date"}),l.jsxs(o4,{children:[l.jsx(p4,{}),l.jsx(a4,{type:"date",value:d,onChange:b=>f(b.target.value)})]})]})]}),l.jsxs(vo,{children:[l.jsx(yo,{children:"Description (Optional)"}),l.jsx(Nm,{type:"text",placeholder:"e.g., Grocery shopping",value:u,onChange:b=>c(b.target.value)})]}),l.jsxs(c4,{children:[l.jsx(d4,{type:"button",onClick:h,disabled:!k,whileHover:k?{scale:1.02}:{},whileTap:k?{scale:.98}:{},transition:tu,children:"Add"}),l.jsx(f4,{type:"button",onClick:m,whileHover:{scale:1.02},whileTap:{scale:.98},transition:tu,children:"Cancel"})]})]})})})]})},x4=S.memo(y4),w4=w(D.div)`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,S4=w.div`
  position: relative;
  z-index: 1;
`,k4=w(D.button)`
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
`,C4=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,j4=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,b4=w(D.div)`
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
`,T4=w(D.div)`
  overflow: hidden;
`,P4=w.div`
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
`,E4=w.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,A4=w(D.span)`
  font-size: 12px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,D4=w.div`
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
`,R4=w(D.div)`
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
`,L4=w(D.div)`
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
`,I4=w.div`
  min-width: 0;
  overflow: hidden;
`,M4=w.div`
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
`,_4=w.div`
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
`,B4=w.span`
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
`,$4=w.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
`,V4=w.div`
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  white-space: nowrap;
  text-align: right;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,N4=w(D.button)`
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
`,F4=w(D.div)`
  padding: var(--space-2xl);
  text-align: center;
  color: var(--text-tertiary);
`,O4=w.div`
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
`,z4=w.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,H4=w.p`
  font-size: 12px;
  color: var(--text-tertiary);
`,U4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),l.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),l.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),l.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),W4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),G4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("polyline",{points:"19 12 12 19 5 12"})]}),K4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),l.jsx("polyline",{points:"5 12 12 5 19 12"})]}),Y4=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),Q4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),X4=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),l.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),Z4=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),J4=e=>{switch(e){case"credit_card_spend":return l.jsx(W4,{});case"cc_payment":return l.jsx(Y4,{});case"bank_debit":return l.jsx(K4,{});case"bank_credit":return l.jsx(G4,{})}},Fm=e=>e==="bank_credit"||e==="cc_payment",$r={type:"spring",stiffness:300,damping:30,mass:.8},q4={collapsed:{height:0,opacity:0,transition:{height:{...$r},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...$r},opacity:{duration:.2,delay:.1}}}},eE={collapsed:{rotate:0},expanded:{rotate:180}},tE={hidden:{opacity:0,x:-20},visible:e=>({opacity:1,x:0,transition:{delay:e*.03,...$r}}),exit:{opacity:0,x:20,transition:{duration:.2}}},nE=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const[r,i]=S.useState(!1),s=S.useMemo(()=>{const[a,u]=n.split("-").slice(0,2);return[...e].filter(c=>{const[d,f]=c.date.split("-").slice(0,2);return d===a&&f===u&&c.date<=n}).sort((c,d)=>{const f=d.date.localeCompare(c.date);return f!==0?f:new Date(d.createdAt).getTime()-new Date(c.createdAt).getTime()})},[e,n]),o=S.useCallback(a=>{t(a)},[t]);return l.jsx(w4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...$r,delay:.1},children:l.jsxs(S4,{children:[l.jsxs(k4,{type:"button",onClick:()=>i(!r),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(C4,{children:[l.jsx(P4,{children:l.jsx(U4,{})}),l.jsx(E4,{children:"Transactions"})]}),l.jsxs(j4,{children:[l.jsx(ve,{mode:"wait",children:l.jsx(A4,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:s.length},s.length)}),l.jsx(b4,{animate:r?"expanded":"collapsed",variants:eE,transition:$r,children:l.jsx(Z4,{})})]})]}),l.jsx(ve,{initial:!1,children:r&&l.jsx(T4,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:q4,children:l.jsx(D4,{children:s.length===0?l.jsxs(F4,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:$r,children:[l.jsx(O4,{children:l.jsx(X4,{})}),l.jsx(z4,{children:"No transactions yet"}),l.jsx(H4,{children:"Add your first transaction above"})]}):l.jsx(ve,{mode:"popLayout",children:s.map((a,u)=>{var d;const c=cP(a.accountId);return l.jsxs(R4,{custom:u,variants:tE,initial:"hidden",animate:"visible",exit:"exit",layout:!0,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[l.jsx(L4,{$type:a.type,whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:20},children:J4(a.type)}),l.jsxs(I4,{children:[l.jsx(M4,{children:a.description}),l.jsxs(_4,{children:[l.jsx("span",{children:rP(a.date)}),l.jsx(B4,{children:(d=c==null?void 0:c.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]})]}),l.jsxs($4,{children:[l.jsxs(V4,{$positive:Fm(a.type),children:[Fm(a.type)?"+":"-",Dr(a.amount)]}),l.jsx(N4,{type:"button",onClick:()=>o(a.id),"aria-label":"Delete transaction",whileHover:{opacity:1,scale:1.1},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:20},children:l.jsx(Q4,{})})]})]},a.id)})})})},"content")})]})})},rE=S.memo(nE),iE=w(D.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,sE=w(D.div)`
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
`,oE=w.div`
  margin-bottom: var(--space-lg);
`,aE=w.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,lE=w.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Om=w.h3`
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
`,zm=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Hm=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,Um=w.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Wm=w.div`
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
`,Gm=w.input`
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
`,uE=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,cE=w.div`
  display: flex;
  gap: var(--space-md);
`,Km=w(D.button)`
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
`,dE=w.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,fE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),l.jsx("polyline",{points:"5 6 12 3 19 6"}),l.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),l.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),pE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),hE={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},mE={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},gE=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,onSave:i})=>{const[s,o]=S.useState({}),[a,u]=S.useState({}),c=Px(),d=Ex();S.useEffect(()=>{if(e){const y={};c.forEach(m=>{var h;y[m.id]=((h=n[m.id])==null?void 0:h.toString())||""}),o(y);const k={};d.forEach(m=>{var h;k[m.id]=((h=r[m.id])==null?void 0:h.toString())||""}),u(k)}},[e,n,r]);const f=()=>{const y={};Object.entries(s).forEach(([m,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;y[m]=v});const k={};Object.entries(a).forEach(([m,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;k[m]=v}),i(y,k),t()},p=y=>{const k=y.replace(/[^0-9]/g,"");if(!k)return"";if(k.length>3){let m=k.substring(k.length-3),h=k.substring(0,k.length-3);return h=h.replace(/\B(?=(\d{2})+(?!\d))/g,","),h+","+m}return k},g=(y,k)=>{const m=k.replace(/,/g,"");(m===""||/^\d+$/.test(m))&&o(h=>({...h,[y]:m}))},x=(y,k)=>{const m=k.replace(/,/g,"");(m===""||/^\d+$/.test(m))&&u(h=>({...h,[y]:m}))};return l.jsx(ve,{children:e&&l.jsx(iE,{variants:hE,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:l.jsxs(sE,{variants:mE,initial:"hidden",animate:"visible",exit:"exit",onClick:y=>y.stopPropagation(),children:[l.jsxs(oE,{children:[l.jsx(aE,{children:"Initial Balances & Bills"}),l.jsx(lE,{children:"Set your starting bank balances and any existing credit card outstanding amounts."})]}),l.jsxs(Om,{children:[l.jsx(fE,{}),"Bank Account Balances"]}),l.jsx(zm,{children:c.map(y=>l.jsxs(Hm,{children:[l.jsx(Um,{children:y.name}),l.jsx(Wm,{children:l.jsx(Gm,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:p(s[y.id]||""),onChange:k=>g(y.id,k.target.value)})})]},y.id))}),l.jsx(uE,{}),l.jsxs(Om,{children:[l.jsx(pE,{}),"Credit Card Outstanding Bills"]}),l.jsx(zm,{children:d.map(y=>l.jsxs(Hm,{children:[l.jsx(Um,{children:y.name}),l.jsx(Wm,{children:l.jsx(Gm,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:p(a[y.id]||""),onChange:k=>x(y.id,k.target.value)})}),l.jsx(dE,{children:"Current outstanding amount you owe"})]},y.id))}),l.jsxs(cE,{children:[l.jsx(Km,{onClick:t,children:"Cancel"}),l.jsx(Km,{$primary:!0,onClick:f,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})]})})})},jn=e=>{switch(e){case"green":return{bg:"rgba(16, 185, 129, 0.15)",border:"rgba(16, 185, 129, 0.25)",text:"#10b981"};case"orange":return{bg:"rgba(245, 158, 11, 0.15)",border:"rgba(245, 158, 11, 0.25)",text:"#f59e0b"};case"pink":return{bg:"rgba(236, 72, 153, 0.15)",border:"rgba(236, 72, 153, 0.25)",text:"#ec4899"};case"blue":return{bg:"rgba(59, 130, 246, 0.15)",border:"rgba(59, 130, 246, 0.25)",text:"#3b82f6"};case"purple":return{bg:"rgba(139, 92, 246, 0.15)",border:"rgba(139, 92, 246, 0.25)",text:"#8b5cf6"}}},vE=w(D.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
`,yE=w(D.button)`
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
`,xE=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,wE=w.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$accent:e})=>jn(e).bg};
  border: 1px solid ${({$accent:e})=>jn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$accent:e})=>jn(e).text};
  }
`,SE=w.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,kE=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,CE=w(D.span)`
  font-size: 12px;
  font-weight: 600;
  color: ${({$accent:e})=>jn(e).text};
  background: ${({$accent:e})=>jn(e).bg};
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,jE=w(D.div)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: ${({$accent:e})=>jn(e).bg};
  border: 1px solid ${({$accent:e})=>jn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$accent:e})=>jn(e).text};

  svg {
    width: 14px;
    height: 14px;
  }
`,bE=w(D.div)`
  overflow: hidden;
`,TE=w.div`
  padding: var(--space-xl);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,PE=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})}),ja={type:"spring",stiffness:300,damping:30,mass:.8},EE={collapsed:{height:0,opacity:0,transition:{height:{...ja},opacity:{duration:.15}}},expanded:{height:"auto",opacity:1,transition:{height:{...ja},opacity:{duration:.2,delay:.1}}}},AE={collapsed:{rotate:0},expanded:{rotate:180}},xo=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:s,onOpenChange:o,collapseOnClickOutside:a=!1,children:u})=>{const[c,d]=S.useState(i),f=S.useRef(null),p=s!==void 0,g=p?s:c,x=()=>{const y=!g;p?o==null||o(y):d(y)};return S.useEffect(()=>{if(!a||!g)return;const y=k=>{f.current&&!f.current.contains(k.target)&&(p?o==null||o(!1):d(!1))};return document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y)}},[a,g,p,o]),l.jsxs(vE,{ref:f,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...ja,delay:.05},children:[l.jsxs(yE,{type:"button",onClick:x,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},whileTap:{scale:.995},transition:{duration:.15},children:[l.jsxs(xE,{children:[l.jsx(wE,{$accent:n,children:t}),l.jsx(SE,{children:e})]}),l.jsxs(kE,{children:[l.jsx(ve,{mode:"wait",children:r!==void 0&&l.jsx(CE,{$accent:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:400,damping:25},children:r},r)}),l.jsx(jE,{$accent:n,animate:g?"expanded":"collapsed",variants:AE,transition:ja,children:l.jsx(PE,{})})]})]}),l.jsx(ve,{initial:!1,children:g&&l.jsx(bE,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:EE,children:l.jsx(TE,{children:u})},"content")})]})},DE=w(D.div)`
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
`,RE=w(D.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,LE=w.div`
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
`,IE=w(D.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-xl));
  }
`,ME=w(D.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,_E=w(D.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 500px) {
    gap: var(--space-md);
  }
`,BE=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,$E=w.div`
  display: flex;
  gap: var(--space-sm);
`,Ym=w(D.button)`
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
`,VE=w(D.button)`
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
`,NE=w.input`
  display: none;
`,FE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),OE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),zE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),HE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),UE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),l.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),WE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),GE=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),l.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Oo={type:"spring",stiffness:300,damping:30,mass:.8},KE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},nu={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Oo}},YE=()=>{const[e,t]=S.useState(ui(new Date)),[n,r]=S.useState([]),[i,s]=S.useState({}),[o,a]=S.useState({}),[u,c]=S.useState(!1),d=S.useRef(null);S.useEffect(()=>{const v=eP(),C=tP(),j=nP();r(v),s(C),a(j)},[]);const f=S.useMemo(()=>aP(n,e,i,o),[e,n,i,o]),p=S.useMemo(()=>f.filter(v=>v.account.type==="credit_card"),[f]),g=S.useCallback(v=>{r(C=>{const j=[...C,v];return requestAnimationFrame(()=>ql(j)),j})},[]),x=S.useCallback(v=>{r(C=>{const j=C.filter(b=>b.id!==v);return requestAnimationFrame(()=>ql(j)),j})},[]),y=S.useCallback((v,C)=>{s(v),a(C),requestAnimationFrame(()=>{Lm(v),Im(C)})},[]),k=S.useCallback(()=>{fP(n,i,o)},[n,i,o]),m=S.useCallback(()=>{var v;(v=d.current)==null||v.click()},[]),h=S.useCallback(v=>{var b;const C=(b=v.target.files)==null?void 0:b[0];if(!C)return;const j=new FileReader;j.onload=T=>{var I;const P=(I=T.target)==null?void 0:I.result,L=hP(P);L?window.confirm(`Import backup from ${new Date(L.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${L.transactions.length} transactions
• Initial balances and CC bills

This action cannot be undone.`)&&(r(L.transactions),s(L.initialBalances),a(L.initialCCBills),ql(L.transactions),Lm(L.initialBalances),Im(L.initialCCBills)):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},j.readAsText(C),v.target.value=""},[]);return l.jsxs(DE,{variants:KE,initial:"hidden",animate:"visible",children:[l.jsxs(df,{$maxWidth:"wide",children:[l.jsxs(RE,{variants:nu,children:[l.jsx(LP,{selectedDate:e,onDateChange:t}),l.jsx(xo,{title:"Summary",icon:l.jsx(UE,{}),accent:"green",children:l.jsx(XP,{balances:f})})]}),l.jsxs(LE,{children:[l.jsx(IE,{variants:nu,children:l.jsx(xo,{title:"Add Transaction",icon:l.jsx(WE,{}),accent:"orange",children:l.jsx(x4,{onAddTransaction:g,defaultDate:e})})}),l.jsxs(ME,{variants:nu,children:[l.jsx(xo,{title:"Credit Cards",icon:l.jsx(GE,{}),accent:"pink",badge:p.length,children:l.jsx(_E,{children:p.map((v,C)=>l.jsx(UP,{accountBalance:v,index:C},v.account.id))})}),l.jsx(rE,{transactions:n,onDeleteTransaction:x,selectedDate:e}),l.jsx(xo,{title:"Manage Data",icon:l.jsx(HE,{}),accent:"purple",defaultOpen:!1,children:l.jsxs(BE,{children:[l.jsxs(VE,{type:"button",onClick:()=>c(!0),whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Oo,children:[l.jsx(FE,{}),"Set Initial Balances"]}),l.jsxs($E,{children:[l.jsxs(Ym,{type:"button",$variant:"secondary",onClick:k,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Oo,children:[l.jsx(OE,{}),"Export"]}),l.jsxs(Ym,{type:"button",$variant:"secondary",onClick:m,whileHover:{scale:1.02,backgroundColor:"var(--glass-bg-hover)"},whileTap:{scale:.98},transition:Oo,children:[l.jsx(zE,{}),"Import"]})]})]})}),l.jsx(NE,{ref:d,type:"file",accept:".json",onChange:h})]})]})]}),l.jsx(gE,{isOpen:u,onClose:()=>c(!1),initialBalances:i,initialCCBills:o,onSave:y})]})},QE=w.div`
  min-height: 100vh;
  position: relative;
`,XE=w.main`
  position: relative;
  z-index: 1;
`,ZE=w.a`
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
`,JE=()=>{const e=Cd(),t=si();return S.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function qE(){return l.jsxs(QE,{children:[l.jsx(JE,{}),l.jsx(ZE,{href:"#main-content",children:"Skip to main content"}),l.jsx(fk,{}),l.jsx(YT,{}),l.jsx(XE,{id:"main-content",children:l.jsxs(X2,{children:[l.jsx(Ei,{path:"/",element:l.jsx(u5,{})}),l.jsx(Ei,{path:"/tax-manager",element:l.jsx(q5,{})}),l.jsx(Ei,{path:"/expense-manager",element:l.jsx(YE,{})}),l.jsx(Ei,{path:"/tax-calculator",element:l.jsx(Y2,{to:"/tax-manager",replace:!0})})]})})]})}function eA(){return l.jsx(rS,{basename:"/tools",children:l.jsxs(aS,{children:[l.jsx(uk,{}),l.jsx(qE,{})]})})}av(document.getElementById("root")).render(l.jsx(S.StrictMode,{children:l.jsx(eA,{})}));
