function vx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _m={exports:{}},va={},Bm={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),xx=Symbol.for("react.portal"),wx=Symbol.for("react.fragment"),Sx=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),bx=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),Px=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),tf=Symbol.iterator;function Ax(e){return e===null||typeof e!="object"?null:(e=tf&&e[tf]||e["@@iterator"],typeof e=="function"?e:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nm=Object.assign,Vm={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||$m}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fm(){}Fm.prototype=Zr.prototype;function mc(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||$m}var gc=mc.prototype=new Fm;gc.constructor=mc;Nm(gc,Zr.prototype);gc.isPureReactComponent=!0;var nf=Array.isArray,Om=Object.prototype.hasOwnProperty,vc={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Um(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Om.call(t,r)&&!zm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fs,type:e,key:s,ref:o,props:i,_owner:vc.current}}function Dx(e,t){return{$$typeof:fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yc(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function Rx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rf=/\/+/g;function Ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rx(""+e.key):t.toString(36)}function po(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fs:case xx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ya(o,0):r,nf(i)?(n="",e!=null&&(n=e.replace(rf,"$&/")+"/"),po(i,t,n,"",function(c){return c})):i!=null&&(yc(i)&&(i=Dx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",nf(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ya(s,a);o+=po(s,t,n,l,i)}else if(l=Ax(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ya(s,a++),o+=po(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(e,t,n){if(e==null)return e;var r=[],i=0;return po(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Lx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ho={transition:null},Ix={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ho,ReactCurrentOwner:vc};function Hm(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Cs,forEach:function(e,t,n){Cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!yc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Zr;F.Fragment=wx;F.Profiler=kx;F.PureComponent=mc;F.StrictMode=Sx;F.Suspense=Tx;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;F.act=Hm;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nm({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=vc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Om.call(t,l)&&!zm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:fs,type:e.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Cx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jx,_context:e},e.Consumer=e};F.createElement=Um;F.createFactory=function(e){var t=Um.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:bx,render:e}};F.isValidElement=yc;F.lazy=function(e){return{$$typeof:Ex,_payload:{_status:-1,_result:e},_init:Lx}};F.memo=function(e,t){return{$$typeof:Px,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};F.unstable_act=Hm;F.useCallback=function(e,t){return $e.current.useCallback(e,t)};F.useContext=function(e){return $e.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};F.useEffect=function(e,t){return $e.current.useEffect(e,t)};F.useId=function(){return $e.current.useId()};F.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return $e.current.useMemo(e,t)};F.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};F.useRef=function(e){return $e.current.useRef(e)};F.useState=function(e){return $e.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return $e.current.useTransition()};F.version="18.3.1";Bm.exports=F;var S=Bm.exports;const Tt=yx(S),Mx=vx({__proto__:null,default:Tt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=S,Bx=Symbol.for("react.element"),$x=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Vx=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fx={key:!0,ref:!0,__self:!0,__source:!0};function Wm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Nx.call(t,r)&&!Fx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bx,type:e,key:s,ref:o,props:i,_owner:Vx.current}}va.Fragment=$x;va.jsx=Wm;va.jsxs=Wm;_m.exports=va;var u=_m.exports,Gm={exports:{}},tt={},Km={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,I){var M=A.length;A.push(I);e:for(;0<M;){var z=M-1>>>1,W=A[z];if(0<i(W,I))A[z]=I,A[M]=W,M=z;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var I=A[0],M=A.pop();if(M!==I){A[0]=M;e:for(var z=0,W=A.length,be=W>>>1;z<be;){var We=2*(z+1)-1,Gt=A[We],Ge=We+1,Rt=A[Ge];if(0>i(Gt,M))Ge<W&&0>i(Rt,Gt)?(A[z]=Rt,A[Ge]=M,z=Ge):(A[z]=Gt,A[We]=M,z=We);else if(Ge<W&&0>i(Rt,M))A[z]=Rt,A[Ge]=M,z=Ge;else break e}}return I}function i(A,I){var M=A.sortIndex-I.sortIndex;return M!==0?M:A.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,g=!1,x=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=A)r(c),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(c)}}function C(A){if(y=!1,v(A),!x)if(n(l)!==null)x=!0,K(j);else{var I=n(c);I!==null&&N(C,I.startTime-A)}}function j(A,I){x=!1,y&&(y=!1,m(P),P=-1),g=!0;var M=p;try{for(v(I),f=n(l);f!==null&&(!(f.expirationTime>I)||A&&!H());){var z=f.callback;if(typeof z=="function"){f.callback=null,p=f.priorityLevel;var W=z(f.expirationTime<=I);I=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(l)&&r(l),v(I)}else r(l);f=n(l)}if(f!==null)var be=!0;else{var We=n(c);We!==null&&N(C,We.startTime-I),be=!1}return be}finally{f=null,p=M,g=!1}}var b=!1,T=null,P=-1,L=5,R=-1;function H(){return!(e.unstable_now()-R<L)}function He(){if(T!==null){var A=e.unstable_now();R=A;var I=!0;try{I=T(!0,A)}finally{I?Ie():(b=!1,T=null)}}else b=!1}var Ie;if(typeof h=="function")Ie=function(){h(He)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,B=ft.port2;ft.port1.onmessage=He,Ie=function(){B.postMessage(null)}}else Ie=function(){k(He,0)};function K(A){T=A,b||(b=!0,Ie())}function N(A,I){P=k(function(){A(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,K(j))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var M=p;p=I;try{return A()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,I){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=p;p=A;try{return I()}finally{p=M}},e.unstable_scheduleCallback=function(A,I,M){var z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?z+M:z):M=z,A){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=M+W,A={id:d++,callback:I,priorityLevel:A,startTime:M,expirationTime:W,sortIndex:-1},M>z?(A.sortIndex=M,t(c,A),n(l)===null&&A===n(c)&&(y?(m(P),P=-1):y=!0,N(C,M-z))):(A.sortIndex=W,t(l,A),x||g||(x=!0,K(j))),A},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(A){var I=p;return function(){var M=p;p=I;try{return A.apply(this,arguments)}finally{p=M}}}})(Ym);Km.exports=Ym;var Ox=Km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zx=S,qe=Ox;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,Fi={};function er(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Fi[e]=t,e=0;e<t.length;e++)Qm.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sf={},of={};function Hx(e){return Yl.call(of,e)?!0:Yl.call(sf,e)?!1:Ux.test(e)?of[e]=!0:(sf[e]=!0,!1)}function Wx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gx(e,t,n,r){if(t===null||typeof t>"u"||Wx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var xc=/[\-:]([a-z])/g;function wc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xc,wc);Ce[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xc,wc);Ce[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xc,wc);Ce[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sc(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gx(t,n,i,r)&&(n=null),r||i===null?Hx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),Zm=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Cc=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),af=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=af&&e[af]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Qa;function yi(e){if(Qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qa=t&&t[1]||""}return`
`+Qa+e}var Xa=!1;function Za(e,t){if(!e||Xa)return"";Xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yi(e):""}function Kx(e){switch(e.tag){case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return e=Za(e.type,!1),e;case 11:return e=Za(e.type.render,!1),e;case 1:return e=Za(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case lr:return"Portal";case Ql:return"Profiler";case kc:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zm:return(e.displayName||"Context")+".Consumer";case Xm:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cc:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Yx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qx(e){var t=qm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ts(e){e._valueTracker||(e._valueTracker=Qx(e))}function eg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tg(e,t){t=t.checked,t!=null&&Sc(e,"checked",t,!1)}function eu(e,t){tg(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&tu(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tu(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xi=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(xi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function ng(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function df(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,ig=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xx=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){Xx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ti[t]=Ti[e]})});function sg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+t).trim():t+"px"}function og(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zx=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(e,t){if(t){if(Zx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function su(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var au=null,Ar=null,Dr=null;function ff(e){if(e=ms(e)){if(typeof au!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ka(t),au(e.stateNode,e.type,t))}}function ag(e){Ar?Dr?Dr.push(e):Dr=[e]:Ar=e}function lg(){if(Ar){var e=Ar,t=Dr;if(Dr=Ar=null,ff(e),t)for(e=0;e<t.length;e++)ff(t[e])}}function ug(e,t){return e(t)}function cg(){}var Ja=!1;function dg(e,t,n){if(Ja)return e(t,n);Ja=!0;try{return ug(e,t,n)}finally{Ja=!1,(Ar!==null||Dr!==null)&&(cg(),lg())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var lu=!1;if(Ft)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){lu=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{lu=!1}function Jx(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Pi=!1,Bo=null,$o=!1,uu=null,qx={onError:function(e){Pi=!0,Bo=e}};function e1(e,t,n,r,i,s,o,a,l){Pi=!1,Bo=null,Jx.apply(qx,arguments)}function t1(e,t,n,r,i,s,o,a,l){if(e1.apply(this,arguments),Pi){if(Pi){var c=Bo;Pi=!1,Bo=null}else throw Error(E(198));$o||($o=!0,uu=c)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pf(e){if(tr(e)!==e)throw Error(E(188))}function n1(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pf(i),e;if(s===r)return pf(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function pg(e){return e=n1(e),e!==null?hg(e):null}function hg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hg(e);if(t!==null)return t;e=e.sibling}return null}var mg=qe.unstable_scheduleCallback,hf=qe.unstable_cancelCallback,r1=qe.unstable_shouldYield,i1=qe.unstable_requestPaint,fe=qe.unstable_now,s1=qe.unstable_getCurrentPriorityLevel,Tc=qe.unstable_ImmediatePriority,gg=qe.unstable_UserBlockingPriority,No=qe.unstable_NormalPriority,o1=qe.unstable_LowPriority,vg=qe.unstable_IdlePriority,ya=null,Pt=null;function a1(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:c1,l1=Math.log,u1=Math.LN2;function c1(e){return e>>>=0,e===0?32:31-(l1(e)/u1|0)|0}var Es=64,As=4194304;function wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wi(a):(s&=o,s!==0&&(r=wi(s)))}else o=n&~i,o!==0?r=wi(o):s!==0&&(r=wi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function d1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=d1(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yg(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ps(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function p1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function xg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wg,Ec,Sg,kg,jg,du=!1,Ds=[],dn=null,fn=null,pn=null,Ui=new Map,Hi=new Map,on=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function li(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ms(t),t!==null&&Ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m1(e,t,n,r,i){switch(t){case"focusin":return dn=li(dn,e,t,n,r,i),!0;case"dragenter":return fn=li(fn,e,t,n,r,i),!0;case"mouseover":return pn=li(pn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ui.set(s,li(Ui.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hi.set(s,li(Hi.get(s)||null,e,t,n,r,i)),!0}return!1}function Cg(e){var t=Nn(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=fg(n),t!==null){e.blockedOn=t,jg(e.priority,function(){Sg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ou=r,n.target.dispatchEvent(r),ou=null}else return t=ms(n),t!==null&&Ec(t),e.blockedOn=n,!1;t.shift()}return!0}function gf(e,t,n){mo(e)&&n.delete(t)}function g1(){du=!1,dn!==null&&mo(dn)&&(dn=null),fn!==null&&mo(fn)&&(fn=null),pn!==null&&mo(pn)&&(pn=null),Ui.forEach(gf),Hi.forEach(gf)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,g1)))}function Wi(e){function t(i){return ui(i,e)}if(0<Ds.length){ui(Ds[0],e);for(var n=1;n<Ds.length;n++){var r=Ds[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&ui(dn,e),fn!==null&&ui(fn,e),pn!==null&&ui(pn,e),Ui.forEach(t),Hi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&on.shift()}var Rr=Wt.ReactCurrentBatchConfig,Fo=!0;function v1(e,t,n,r){var i=G,s=Rr.transition;Rr.transition=null;try{G=1,Ac(e,t,n,r)}finally{G=i,Rr.transition=s}}function y1(e,t,n,r){var i=G,s=Rr.transition;Rr.transition=null;try{G=4,Ac(e,t,n,r)}finally{G=i,Rr.transition=s}}function Ac(e,t,n,r){if(Fo){var i=fu(e,t,n,r);if(i===null)ul(e,t,r,Oo,n),mf(e,r);else if(m1(i,e,t,n,r))r.stopPropagation();else if(mf(e,r),t&4&&-1<h1.indexOf(e)){for(;i!==null;){var s=ms(i);if(s!==null&&wg(s),s=fu(e,t,n,r),s===null&&ul(e,t,r,Oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var Oo=null;function fu(e,t,n,r){if(Oo=null,e=bc(r),e=Nn(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function bg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s1()){case Tc:return 1;case gg:return 4;case No:case o1:return 16;case vg:return 536870912;default:return 16}default:return 16}}var ln=null,Dc=null,go=null;function Tg(){if(go)return go;var e,t=Dc,n=t.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return go=i.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function vf(){return!1}function nt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rs:vf,this.isPropagationStopped=vf,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=nt(Jr),hs=le({},Jr,{view:0,detail:0}),x1=nt(hs),el,tl,ci,xa=le({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(el=e.screenX-ci.screenX,tl=e.screenY-ci.screenY):tl=el=0,ci=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),yf=nt(xa),w1=le({},xa,{dataTransfer:0}),S1=nt(w1),k1=le({},hs,{relatedTarget:0}),nl=nt(k1),j1=le({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=nt(j1),b1=le({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T1=nt(b1),P1=le({},Jr,{data:0}),xf=nt(P1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D1[e])?!!t[e]:!1}function Lc(){return R1}var L1=le({},hs,{key:function(e){if(e.key){var t=E1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=nt(L1),M1=le({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=nt(M1),_1=le({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),B1=nt(_1),$1=le({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=nt($1),V1=le({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=nt(V1),O1=[9,13,27,32],Ic=Ft&&"CompositionEvent"in window,Ei=null;Ft&&"documentMode"in document&&(Ei=document.documentMode);var z1=Ft&&"TextEvent"in window&&!Ei,Pg=Ft&&(!Ic||Ei&&8<Ei&&11>=Ei),Sf=" ",kf=!1;function Eg(e,t){switch(e){case"keyup":return O1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function U1(e,t){switch(e){case"compositionend":return Ag(t);case"keypress":return t.which!==32?null:(kf=!0,Sf);case"textInput":return e=t.data,e===Sf&&kf?null:e;default:return null}}function H1(e,t){if(cr)return e==="compositionend"||!Ic&&Eg(e,t)?(e=Tg(),go=Dc=ln=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pg&&t.locale!=="ko"?null:t.data;default:return null}}var W1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W1[e.type]:t==="textarea"}function Dg(e,t,n,r){ag(r),t=zo(t,"onChange"),0<t.length&&(n=new Rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ai=null,Gi=null;function G1(e){Og(e,0)}function wa(e){var t=pr(e);if(eg(t))return e}function K1(e,t){if(e==="change")return t}var Rg=!1;if(Ft){var rl;if(Ft){var il="oninput"in document;if(!il){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),il=typeof Cf.oninput=="function"}rl=il}else rl=!1;Rg=rl&&(!document.documentMode||9<document.documentMode)}function bf(){Ai&&(Ai.detachEvent("onpropertychange",Lg),Gi=Ai=null)}function Lg(e){if(e.propertyName==="value"&&wa(Gi)){var t=[];Dg(t,Gi,e,bc(e)),dg(G1,t)}}function Y1(e,t,n){e==="focusin"?(bf(),Ai=t,Gi=n,Ai.attachEvent("onpropertychange",Lg)):e==="focusout"&&bf()}function Q1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wa(Gi)}function X1(e,t){if(e==="click")return wa(t)}function Z1(e,t){if(e==="input"||e==="change")return wa(t)}function J1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:J1;function Ki(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yl.call(t,i)||!St(e[i],t[i]))return!1}return!0}function Tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pf(e,t){var n=Tf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function Ig(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ig(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mg(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q1(e){var t=Mg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Pf(n,s);var o=Pf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ew=Ft&&"documentMode"in document&&11>=document.documentMode,dr=null,pu=null,Di=null,hu=!1;function Ef(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||dr==null||dr!==_o(r)||(r=dr,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Ki(Di,r)||(Di=r,r=zo(pu,"onSelect"),0<r.length&&(t=new Rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function Ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},sl={},_g={};Ft&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Sa(e){if(sl[e])return sl[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _g)return sl[e]=t[n];return e}var Bg=Sa("animationend"),$g=Sa("animationiteration"),Ng=Sa("animationstart"),Vg=Sa("transitionend"),Fg=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Fg.set(e,t),er(t,[e])}for(var ol=0;ol<Af.length;ol++){var al=Af[ol],tw=al.toLowerCase(),nw=al[0].toUpperCase()+al.slice(1);Tn(tw,"on"+nw)}Tn(Bg,"onAnimationEnd");Tn($g,"onAnimationIteration");Tn(Ng,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Vg,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function Df(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t1(r,t,void 0,e),e.currentTarget=null}function Og(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Df(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Df(i,a,c),s=l}}}if($o)throw e=uu,$o=!1,uu=null,e}function X(e,t){var n=t[xu];n===void 0&&(n=t[xu]=new Set);var r=e+"__bubble";n.has(r)||(zg(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),zg(n,e,r,t)}var Is="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Is]){e[Is]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(rw.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Is]||(t[Is]=!0,ll("selectionchange",!1,t))}}function zg(e,t,n,r){switch(bg(t)){case 1:var i=v1;break;case 4:i=y1;break;default:i=Ac}n=i.bind(null,t,n,e),i=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dg(function(){var c=s,d=bc(n),f=[];e:{var p=Fg.get(e);if(p!==void 0){var g=Rc,x=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":g=I1;break;case"focusin":x="focus",g=nl;break;case"focusout":x="blur",g=nl;break;case"beforeblur":case"afterblur":g=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=B1;break;case Bg:case $g:case Ng:g=C1;break;case Vg:g=N1;break;case"scroll":g=x1;break;case"wheel":g=F1;break;case"copy":case"cut":case"paste":g=T1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wf}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?p!==null?p+"Capture":null:p;y=[];for(var h=c,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,m!==null&&(C=zi(h,m),C!=null&&y.push(Qi(h,C,v)))),k)break;h=h.return}0<y.length&&(p=new g(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==ou&&(x=n.relatedTarget||n.fromElement)&&(Nn(x)||x[Ot]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Nn(x):null,x!==null&&(k=tr(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=yf,C="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=wf,C="onPointerLeave",m="onPointerEnter",h="pointer"),k=g==null?p:pr(g),v=x==null?p:pr(x),p=new y(C,h+"leave",g,n,d),p.target=k,p.relatedTarget=v,C=null,Nn(d)===c&&(y=new y(m,h+"enter",x,n,d),y.target=v,y.relatedTarget=k,C=y),k=C,g&&x)t:{for(y=g,m=x,h=0,v=y;v;v=sr(v))h++;for(v=0,C=m;C;C=sr(C))v++;for(;0<h-v;)y=sr(y),h--;for(;0<v-h;)m=sr(m),v--;for(;h--;){if(y===m||m!==null&&y===m.alternate)break t;y=sr(y),m=sr(m)}y=null}else y=null;g!==null&&Rf(f,p,g,y,!1),x!==null&&k!==null&&Rf(f,k,x,y,!0)}}e:{if(p=c?pr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var j=K1;else if(jf(p))if(Rg)j=Z1;else{j=Q1;var b=Y1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=X1);if(j&&(j=j(e,c))){Dg(f,j,n,d);break e}b&&b(e,p,c),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&tu(p,"number",p.value)}switch(b=c?pr(c):window,e){case"focusin":(jf(b)||b.contentEditable==="true")&&(dr=b,pu=c,Di=null);break;case"focusout":Di=pu=dr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Ef(f,n,d);break;case"selectionchange":if(ew)break;case"keydown":case"keyup":Ef(f,n,d)}var T;if(Ic)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else cr?Eg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pg&&n.locale!=="ko"&&(cr||P!=="onCompositionStart"?P==="onCompositionEnd"&&cr&&(T=Tg()):(ln=d,Dc="value"in ln?ln.value:ln.textContent,cr=!0)),b=zo(c,P),0<b.length&&(P=new xf(P,e,null,n,d),f.push({event:P,listeners:b}),T?P.data=T:(T=Ag(n),T!==null&&(P.data=T)))),(T=z1?U1(e,n):H1(e,n))&&(c=zo(c,"onBeforeInput"),0<c.length&&(d=new xf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}Og(f,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zi(e,n),s!=null&&r.unshift(Qi(e,s,i)),s=zi(e,t),s!=null&&r.push(Qi(e,s,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rf(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=zi(n,s),l!=null&&o.unshift(Qi(n,l,a))):i||(l=zi(n,s),l!=null&&o.push(Qi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var iw=/\r\n?/g,sw=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(iw,`
`).replace(sw,"")}function Ms(e,t,n){if(t=Lf(t),Lf(e)!==t&&n)throw Error(E(425))}function Uo(){}var mu=null,gu=null;function vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,aw=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(e){return If.resolve(null).then(e).catch(lw)}:yu;function lw(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),bt="__reactFiber$"+qr,Xi="__reactProps$"+qr,Ot="__reactContainer$"+qr,xu="__reactEvents$"+qr,uw="__reactListeners$"+qr,cw="__reactHandles$"+qr;function Nn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mf(e);e!==null;){if(n=e[bt])return n;e=Mf(e)}return t}e=n,n=e.parentNode}return null}function ms(e){return e=e[bt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ka(e){return e[Xi]||null}var wu=[],hr=-1;function Pn(e){return{current:e}}function J(e){0>hr||(e.current=wu[hr],wu[hr]=null,hr--)}function Y(e,t){hr++,wu[hr]=e.current,e.current=t}var jn={},Le=Pn(jn),Oe=Pn(!1),Qn=jn;function _r(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function Ho(){J(Oe),J(Le)}function _f(e,t,n){if(Le.current!==jn)throw Error(E(168));Y(Le,t),Y(Oe,n)}function Ug(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Yx(e)||"Unknown",i));return le({},n,r)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Qn=Le.current,Y(Le,e),Y(Oe,Oe.current),!0}function Bf(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Ug(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,J(Oe),J(Le),Y(Le,e)):J(Oe),Y(Oe,n)}var Mt=null,ja=!1,dl=!1;function Hg(e){Mt===null?Mt=[e]:Mt.push(e)}function dw(e){ja=!0,Hg(e)}function En(){if(!dl&&Mt!==null){dl=!0;var e=0,t=G;try{var n=Mt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,ja=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),mg(Tc,En),i}finally{G=t,dl=!1}}return null}var mr=[],gr=0,Go=null,Ko=0,st=[],ot=0,Xn=null,_t=1,Bt="";function Mn(e,t){mr[gr++]=Ko,mr[gr++]=Go,Go=e,Ko=t}function Wg(e,t,n){st[ot++]=_t,st[ot++]=Bt,st[ot++]=Xn,Xn=e;var r=_t;e=Bt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_t=1<<32-yt(t)+i|n<<i|r,Bt=s+e}else _t=1<<s|n<<i|r,Bt=e}function _c(e){e.return!==null&&(Mn(e,1),Wg(e,1,0))}function Bc(e){for(;e===Go;)Go=mr[--gr],mr[gr]=null,Ko=mr[--gr],mr[gr]=null;for(;e===Xn;)Xn=st[--ot],st[ot]=null,Bt=st[--ot],st[ot]=null,_t=st[--ot],st[ot]=null}var Ze=null,Xe=null,ie=!1,vt=null;function Gg(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $f(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:_t,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Xe=null,!0):!1;default:return!1}}function Su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ku(e){if(ie){var t=Xe;if(t){var n=t;if(!$f(e,t)){if(Su(e))throw Error(E(418));t=hn(n.nextSibling);var r=Ze;t&&$f(e,t)?Gg(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ze=e)}}else{if(Su(e))throw Error(E(418));e.flags=e.flags&-4097|2,ie=!1,Ze=e}}}function Nf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function _s(e){if(e!==Ze)return!1;if(!ie)return Nf(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vu(e.type,e.memoizedProps)),t&&(t=Xe)){if(Su(e))throw Kg(),Error(E(418));for(;t;)Gg(e,t),t=hn(t.nextSibling)}if(Nf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?hn(e.stateNode.nextSibling):null;return!0}function Kg(){for(var e=Xe;e;)e=hn(e.nextSibling)}function Br(){Xe=Ze=null,ie=!1}function $c(e){vt===null?vt=[e]:vt.push(e)}var fw=Wt.ReactCurrentBatchConfig;function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Bs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vf(e){var t=e._init;return t(e._payload)}function Yg(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=yn(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,C){return h===null||h.tag!==6?(h=yl(v,m.mode,C),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,C){var j=v.type;return j===ur?d(m,h,v.props.children,C,v.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===rn&&Vf(j)===h.type)?(C=i(h,v.props),C.ref=di(m,h,v),C.return=m,C):(C=Co(v.type,v.key,v.props,null,m.mode,C),C.ref=di(m,h,v),C.return=m,C)}function c(m,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=xl(v,m.mode,C),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function d(m,h,v,C,j){return h===null||h.tag!==7?(h=Wn(v,m.mode,C,j),h.return=m,h):(h=i(h,v),h.return=m,h)}function f(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=yl(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case bs:return v=Co(h.type,h.key,h.props,null,m.mode,v),v.ref=di(m,null,h),v.return=m,v;case lr:return h=xl(h,m.mode,v),h.return=m,h;case rn:var C=h._init;return f(m,C(h._payload),v)}if(xi(h)||oi(h))return h=Wn(h,m.mode,v,null),h.return=m,h;Bs(m,h)}return null}function p(m,h,v,C){var j=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:a(m,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bs:return v.key===j?l(m,h,v,C):null;case lr:return v.key===j?c(m,h,v,C):null;case rn:return j=v._init,p(m,h,j(v._payload),C)}if(xi(v)||oi(v))return j!==null?null:d(m,h,v,C,null);Bs(m,v)}return null}function g(m,h,v,C,j){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(v)||null,a(h,m,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case bs:return m=m.get(C.key===null?v:C.key)||null,l(h,m,C,j);case lr:return m=m.get(C.key===null?v:C.key)||null,c(h,m,C,j);case rn:var b=C._init;return g(m,h,v,b(C._payload),j)}if(xi(C)||oi(C))return m=m.get(v)||null,d(h,m,C,j,null);Bs(h,C)}return null}function x(m,h,v,C){for(var j=null,b=null,T=h,P=h=0,L=null;T!==null&&P<v.length;P++){T.index>P?(L=T,T=null):L=T.sibling;var R=p(m,T,v[P],C);if(R===null){T===null&&(T=L);break}e&&T&&R.alternate===null&&t(m,T),h=s(R,h,P),b===null?j=R:b.sibling=R,b=R,T=L}if(P===v.length)return n(m,T),ie&&Mn(m,P),j;if(T===null){for(;P<v.length;P++)T=f(m,v[P],C),T!==null&&(h=s(T,h,P),b===null?j=T:b.sibling=T,b=T);return ie&&Mn(m,P),j}for(T=r(m,T);P<v.length;P++)L=g(T,m,P,v[P],C),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?P:L.key),h=s(L,h,P),b===null?j=L:b.sibling=L,b=L);return e&&T.forEach(function(H){return t(m,H)}),ie&&Mn(m,P),j}function y(m,h,v,C){var j=oi(v);if(typeof j!="function")throw Error(E(150));if(v=j.call(v),v==null)throw Error(E(151));for(var b=j=null,T=h,P=h=0,L=null,R=v.next();T!==null&&!R.done;P++,R=v.next()){T.index>P?(L=T,T=null):L=T.sibling;var H=p(m,T,R.value,C);if(H===null){T===null&&(T=L);break}e&&T&&H.alternate===null&&t(m,T),h=s(H,h,P),b===null?j=H:b.sibling=H,b=H,T=L}if(R.done)return n(m,T),ie&&Mn(m,P),j;if(T===null){for(;!R.done;P++,R=v.next())R=f(m,R.value,C),R!==null&&(h=s(R,h,P),b===null?j=R:b.sibling=R,b=R);return ie&&Mn(m,P),j}for(T=r(m,T);!R.done;P++,R=v.next())R=g(T,m,P,R.value,C),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?P:R.key),h=s(R,h,P),b===null?j=R:b.sibling=R,b=R);return e&&T.forEach(function(He){return t(m,He)}),ie&&Mn(m,P),j}function k(m,h,v,C){if(typeof v=="object"&&v!==null&&v.type===ur&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case bs:e:{for(var j=v.key,b=h;b!==null;){if(b.key===j){if(j=v.type,j===ur){if(b.tag===7){n(m,b.sibling),h=i(b,v.props.children),h.return=m,m=h;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===rn&&Vf(j)===b.type){n(m,b.sibling),h=i(b,v.props),h.ref=di(m,b,v),h.return=m,m=h;break e}n(m,b);break}else t(m,b);b=b.sibling}v.type===ur?(h=Wn(v.props.children,m.mode,C,v.key),h.return=m,m=h):(C=Co(v.type,v.key,v.props,null,m.mode,C),C.ref=di(m,h,v),C.return=m,m=C)}return o(m);case lr:e:{for(b=v.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=xl(v,m.mode,C),h.return=m,m=h}return o(m);case rn:return b=v._init,k(m,h,b(v._payload),C)}if(xi(v))return x(m,h,v,C);if(oi(v))return y(m,h,v,C);Bs(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=yl(v,m.mode,C),h.return=m,m=h),o(m)):n(m,h)}return k}var $r=Yg(!0),Qg=Yg(!1),Yo=Pn(null),Qo=null,vr=null,Nc=null;function Vc(){Nc=vr=Qo=null}function Fc(e){var t=Yo.current;J(Yo),e._currentValue=t}function ju(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Qo=e,Nc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Nc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(Qo===null)throw Error(E(308));vr=e,Qo.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Vn=null;function Oc(e){Vn===null?Vn=[e]:Vn.push(e)}function Xg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Oc(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Oc(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pc(e,n)}}function Ff(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(p=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=le({},f,p);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Jn|=o,e.lanes=o,e.memoizedState=f}}function Of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var gs={},Et=Pn(gs),Zi=Pn(gs),Ji=Pn(gs);function Fn(e){if(e===gs)throw Error(E(174));return e}function Uc(e,t){switch(Y(Ji,t),Y(Zi,e),Y(Et,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ru(t,e)}J(Et),Y(Et,t)}function Nr(){J(Et),J(Zi),J(Ji)}function Jg(e){Fn(Ji.current);var t=Fn(Et.current),n=ru(t,e.type);t!==n&&(Y(Zi,e),Y(Et,n))}function Hc(e){Zi.current===e&&(J(Et),J(Zi))}var se=Pn(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function Wc(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var xo=Wt.ReactCurrentDispatcher,pl=Wt.ReactCurrentBatchConfig,Zn=0,ae=null,ge=null,ye=null,Jo=!1,Ri=!1,qi=0,pw=0;function Te(){throw Error(E(321))}function Gc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Kc(e,t,n,r,i,s){if(Zn=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?vw:yw,e=n(r,i),Ri){s=0;do{if(Ri=!1,qi=0,25<=s)throw Error(E(301));s+=1,ye=ge=null,t.updateQueue=null,xo.current=xw,e=n(r,i)}while(Ri)}if(xo.current=qo,t=ge!==null&&ge.next!==null,Zn=0,ye=ge=ae=null,Jo=!1,t)throw Error(E(300));return e}function Yc(){var e=qi!==0;return qi=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function ct(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function es(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=ct(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Zn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ae.lanes|=d,Jn|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,St(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,Jn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ml(e){var t=ct(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);St(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function qg(){}function e0(e,t){var n=ae,r=ct(),i=t(),s=!St(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Qc(r0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,ts(9,n0.bind(null,n,r,i,t),void 0,null),we===null)throw Error(E(349));Zn&30||t0(n,t,i)}return i}function t0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function n0(e,t,n,r){t.value=n,t.getSnapshot=r,i0(t)&&s0(e)}function r0(e,t,n){return n(function(){i0(t)&&s0(e)})}function i0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function s0(e){var t=zt(e,1);t!==null&&xt(t,e,1,-1)}function zf(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=gw.bind(null,ae,e),[t.memoizedState,e]}function ts(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function o0(){return ct().memoizedState}function wo(e,t,n,r){var i=jt();ae.flags|=e,i.memoizedState=ts(1|t,n,void 0,r===void 0?null:r)}function Ca(e,t,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Gc(r,o.deps)){i.memoizedState=ts(t,n,s,r);return}}ae.flags|=e,i.memoizedState=ts(1|t,n,s,r)}function Uf(e,t){return wo(8390656,8,e,t)}function Qc(e,t){return Ca(2048,8,e,t)}function a0(e,t){return Ca(4,2,e,t)}function l0(e,t){return Ca(4,4,e,t)}function u0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function c0(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4,4,u0.bind(null,t,e),n)}function Xc(){}function d0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function f0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function p0(e,t,n){return Zn&21?(St(n,t)||(n=yg(),ae.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function hw(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{G=n,pl.transition=r}}function h0(){return ct().memoizedState}function mw(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m0(e))g0(t,n);else if(n=Xg(e,t,n,r),n!==null){var i=Be();xt(n,e,r,i),v0(n,t,r)}}function gw(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m0(e))g0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,St(a,o)){var l=t.interleaved;l===null?(i.next=i,Oc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Xg(e,t,i,r),n!==null&&(i=Be(),xt(n,e,r,i),v0(n,t,r))}}function m0(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function g0(e,t){Ri=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function v0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pc(e,n)}}var qo={readContext:ut,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},vw={readContext:ut,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Uf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,u0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mw.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:Xc,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=hw.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=jt();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),we===null)throw Error(E(349));Zn&30||t0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Uf(r0.bind(null,r,s,e),[e]),r.flags|=2048,ts(9,n0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=jt(),t=we.identifierPrefix;if(ie){var n=Bt,r=_t;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yw={readContext:ut,useCallback:d0,useContext:ut,useEffect:Qc,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:f0,useReducer:hl,useRef:o0,useState:function(){return hl(es)},useDebugValue:Xc,useDeferredValue:function(e){var t=ct();return p0(t,ge.memoizedState,e)},useTransition:function(){var e=hl(es)[0],t=ct().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:e0,useId:h0,unstable_isNewReconciler:!1},xw={readContext:ut,useCallback:d0,useContext:ut,useEffect:Qc,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:f0,useReducer:ml,useRef:o0,useState:function(){return ml(es)},useDebugValue:Xc,useDeferredValue:function(e){var t=ct();return ge===null?t.memoizedState=e:p0(t,ge.memoizedState,e)},useTransition:function(){var e=ml(es)[0],t=ct().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:e0,useId:h0,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ba={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=vn(e),s=$t(r,i);s.payload=t,n!=null&&(s.callback=n),t=mn(e,s,i),t!==null&&(xt(t,e,i,r),yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=vn(e),s=$t(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=mn(e,s,i),t!==null&&(xt(t,e,i,r),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=vn(e),i=$t(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(xt(t,e,r,n),yo(t,e,r))}};function Hf(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ki(n,r)||!Ki(i,s):!0}function y0(e,t,n){var r=!1,i=jn,s=t.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=ze(t)?Qn:Le.current,r=t.contextTypes,s=(r=r!=null)?_r(e,i):jn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Wf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ba.enqueueReplaceState(t,t.state,null)}function bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=ze(t)?Qn:Le.current,i.context=_r(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Cu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ba.enqueueReplaceState(i,i.state,null),Xo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t){try{var n="",r=t;do n+=Kx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ww=typeof WeakMap=="function"?WeakMap:Map;function x0(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ta||(ta=!0,Bu=r),Tu(e,t)},n}function w0(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tu(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ww;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Mw.bind(null,e,t,n),t.then(e,e))}function Kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var Sw=Wt.ReactCurrentOwner,Fe=!1;function _e(e,t,n,r){t.child=e===null?Qg(t,null,n,r):$r(t,e.child,n,r)}function Qf(e,t,n,r,i){n=n.render;var s=t.ref;return Lr(t,i),r=Kc(e,t,n,r,s,i),n=Yc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ie&&n&&_c(t),t.flags|=1,_e(e,t,r,i),t.child)}function Xf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,S0(e,t,s,r,i)):(e=Co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ki,n(o,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=yn(s,r),e.ref=t.ref,e.return=t,t.child=e}function S0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ki(s,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return Pu(e,t,n,r,i)}function k0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(xr,Qe),Qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(xr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(xr,Qe),Qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Y(xr,Qe),Qe|=r;return _e(e,t,i,n),t.child}function j0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pu(e,t,n,r,i){var s=ze(n)?Qn:Le.current;return s=_r(t,s),Lr(t,i),n=Kc(e,t,n,r,s,i),r=Yc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ie&&r&&_c(t),t.flags|=1,_e(e,t,n,i),t.child)}function Zf(e,t,n,r,i){if(ze(n)){var s=!0;Wo(t)}else s=!1;if(Lr(t,i),t.stateNode===null)So(e,t),y0(t,n,r),bu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=ze(n)?Qn:Le.current,c=_r(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Wf(t,o,r,c),sn=!1;var p=t.memoizedState;o.state=p,Xo(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Oe.current||sn?(typeof d=="function"&&(Cu(t,n,d,r),l=t.memoizedState),(a=sn||Hf(t,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zg(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:mt(t.type,a),o.props=c,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=ze(n)?Qn:Le.current,l=_r(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Wf(t,o,r,l),sn=!1,p=t.memoizedState,o.state=p,Xo(t,r,o,i);var x=t.memoizedState;a!==f||p!==x||Oe.current||sn?(typeof g=="function"&&(Cu(t,n,g,r),x=t.memoizedState),(c=sn||Hf(t,n,c,r,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Eu(e,t,n,r,s,i)}function Eu(e,t,n,r,i,s){j0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Bf(t,n,!1),Ut(e,t,s);r=t.stateNode,Sw.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=$r(t,e.child,null,s),t.child=$r(t,null,a,s)):_e(e,t,a,s),t.memoizedState=r.state,i&&Bf(t,n,!0),t.child}function C0(e){var t=e.stateNode;t.pendingContext?_f(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_f(e,t.context,!1),Uc(e,t.containerInfo)}function Jf(e,t,n,r,i){return Br(),$c(i),t.flags|=256,_e(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function b0(e,t,n){var r=t.pendingProps,i=se.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(se,i&1),e===null)return ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ea(o,r,0,null),e=Wn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Du(n),t.memoizedState=Au,e):Zc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yn(a,s):(s=Wn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Du(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Au,r}return s=e.child,e=s.sibling,r=yn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zc(e,t){return t=Ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $s(e,t,n,r){return r!==null&&$c(r),$r(t,e.child,null,n),e=Zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(E(422))),$s(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ea({mode:"visible",children:r.children},i,0,null),s=Wn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&$r(t,e.child,null,o),t.child.memoizedState=Du(o),t.memoizedState=Au,s);if(!(t.mode&1))return $s(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=gl(s,r,void 0),$s(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fe||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zt(e,i),xt(r,e,i,-1))}return rd(),r=gl(Error(E(421))),$s(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_w.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Xe=hn(i.nextSibling),Ze=t,ie=!0,vt=null,e!==null&&(st[ot++]=_t,st[ot++]=Bt,st[ot++]=Xn,_t=e.id,Bt=e.overflow,Xn=t),t=Zc(t,r.children),t.flags|=4096,t)}function qf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ju(e.return,t,n)}function vl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function T0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(_e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,n,t);else if(e.tag===19)qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vl(t,!0,n,null,s);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jw(e,t,n){switch(t.tag){case 3:C0(t),Br();break;case 5:Jg(t);break;case 1:ze(t.type)&&Wo(t);break;case 4:Uc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?b0(e,t,n):(Y(se,se.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);Y(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return T0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,k0(e,t,n)}return Ut(e,t,n)}var P0,Ru,E0,A0;P0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};E0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Et.current);var s=null;switch(n){case"input":i=ql(e,i),r=ql(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=nu(e,i),r=nu(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uo)}iu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};A0=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cw(e,t,n){var r=t.pendingProps;switch(Bc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return ze(t.type)&&Ho(),Pe(t),null;case 3:return r=t.stateNode,Nr(),J(Oe),J(Le),Wc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Vu(vt),vt=null))),Ru(e,t),Pe(t),null;case 5:Hc(t);var i=Fn(Ji.current);if(n=t.type,e!==null&&t.stateNode!=null)E0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Pe(t),null}if(e=Fn(Et.current),_s(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[bt]=t,r[Xi]=s,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)X(Si[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":lf(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":cf(r,s),X("invalid",r)}iu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ms(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ms(r.textContent,a,e),i=["children",""+a]):Fi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Ts(r),uf(r,s,!0);break;case"textarea":Ts(r),df(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[bt]=t,e[Xi]=r,P0(e,t,!1,!1),t.stateNode=e;e:{switch(o=su(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)X(Si[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":lf(e,r),i=ql(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),X("invalid",e);break;case"textarea":cf(e,r),i=nu(e,r),X("invalid",e);break;default:i=r}iu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?og(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oi(e,l):typeof l=="number"&&Oi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",e):l!=null&&Sc(e,s,l,o))}switch(n){case"input":Ts(e),uf(e,r,!1);break;case"textarea":Ts(e),df(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Er(e,!!r.multiple,s,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)A0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Fn(Ji.current),Fn(Et.current),_s(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(s=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Ms(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ms(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Pe(t),null;case 13:if(J(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))Kg(),Br(),t.flags|=98560,s=!1;else if(s=_s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[bt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else vt!==null&&(Vu(vt),vt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):rd())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Nr(),Ru(e,t),e===null&&Yi(t.stateNode.containerInfo),Pe(t),null;case 10:return Fc(t.type._context),Pe(t),null;case 17:return ze(t.type)&&Ho(),Pe(t),null;case 19:if(J(se),s=t.memoizedState,s===null)return Pe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zo(e),o!==null){for(t.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Fr&&(t.flags|=128,r=!0,fi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Pe(t),null}else 2*fe()-s.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,fi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=se.current,Y(se,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return nd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function bw(e,t){switch(Bc(t),t.tag){case 1:return ze(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),J(Oe),J(Le),Wc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hc(t),null;case 13:if(J(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(se),null;case 4:return Nr(),null;case 10:return Fc(t.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var Ns=!1,Ae=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,D=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Lu(e,t,n){try{n()}catch(r){ce(e,t,r)}}var ep=!1;function Pw(e,t){if(mu=Fo,e=Mg(),Mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:e,selectionRange:n},Fo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,k=x.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:mt(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(C){ce(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=ep,ep=!1,x}function Li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lu(t,n,s)}i=i.next}while(i!==r)}}function Ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Iu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function D0(e){var t=e.alternate;t!==null&&(e.alternate=null,D0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Xi],delete t[xu],delete t[uw],delete t[cw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function R0(e){return e.tag===5||e.tag===3||e.tag===4}function tp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||R0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Uo));else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var Se=null,gt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)L0(e,t,n),n=n.sibling}function L0(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 5:Ae||yr(n,t);case 6:var r=Se,i=gt;Se=null,Yt(e,t,n),Se=r,gt=i,Se!==null&&(gt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(gt?(e=Se,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),Wi(e)):cl(Se,n.stateNode));break;case 4:r=Se,i=gt,Se=n.stateNode.containerInfo,gt=!0,Yt(e,t,n),Se=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lu(n,t,o),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Ae&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Yt(e,t,n),Ae=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tw),t.forEach(function(r){var i=Bw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,gt=!1;break e;case 3:Se=a.stateNode.containerInfo,gt=!0;break e;case 4:Se=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Se===null)throw Error(E(160));L0(s,o,i),Se=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ce(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)I0(t,e),t=t.sibling}function I0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{Li(3,e,e.return),Ta(3,e)}catch(y){ce(e,e.return,y)}try{Li(5,e,e.return)}catch(y){ce(e,e.return,y)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Oi(i,"")}catch(y){ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tg(i,s),su(a,o);var c=su(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?og(i,f):d==="dangerouslySetInnerHTML"?ig(i,f):d==="children"?Oi(i,f):Sc(i,d,f,c)}switch(a){case"input":eu(i,s);break;case"textarea":ng(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Er(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Er(i,!!s.multiple,s.defaultValue,!0):Er(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xi]=s}catch(y){ce(e,e.return,y)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ce(e,e.return,y)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(y){ce(e,e.return,y)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ed=fe())),r&4&&np(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(c=Ae)||d,pt(t,e),Ae=c):pt(t,e),kt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(f=D=d;D!==null;){switch(p=D,g=p.child,p.tag){case 0:case 11:case 14:case 15:Li(4,p,p.return);break;case 1:yr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:yr(p,p.return);break;case 22:if(p.memoizedState!==null){ip(f);continue}}g!==null?(g.return=p,D=g):ip(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sg("display",o))}catch(y){ce(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){ce(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pt(t,e),kt(e),r&4&&np(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(R0(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oi(i,""),r.flags&=-33);var s=tp(e);_u(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tp(e);Mu(e,a,o);break;default:throw Error(E(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ew(e,t,n){D=e,M0(e)}function M0(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ns;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=Ns;var c=Ae;if(Ns=o,(Ae=l)&&!c)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?sp(i):l!==null?(l.return=o,D=l):sp(i);for(;s!==null;)D=s,M0(s),s=s.sibling;D=i,Ns=a,Ae=c}rp(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):rp(e)}}function rp(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||Ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Of(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Of(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ae||t.flags&512&&Iu(t)}catch(p){ce(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function ip(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function sp(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ta(4,t)}catch(l){ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ce(t,i,l)}}var s=t.return;try{Iu(t)}catch(l){ce(t,s,l)}break;case 5:var o=t.return;try{Iu(t)}catch(l){ce(t,o,l)}}}catch(l){ce(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var Aw=Math.ceil,ea=Wt.ReactCurrentDispatcher,Jc=Wt.ReactCurrentOwner,lt=Wt.ReactCurrentBatchConfig,O=0,we=null,he=null,je=0,Qe=0,xr=Pn(0),ve=0,ns=null,Jn=0,Pa=0,qc=0,Ii=null,Ve=null,ed=0,Fr=1/0,Lt=null,ta=!1,Bu=null,gn=null,Vs=!1,un=null,na=0,Mi=0,$u=null,ko=-1,jo=0;function Be(){return O&6?fe():ko!==-1?ko:ko=fe()}function vn(e){return e.mode&1?O&2&&je!==0?je&-je:fw.transition!==null?(jo===0&&(jo=yg()),jo):(e=G,e!==0||(e=window.event,e=e===void 0?16:bg(e.type)),e):1}function xt(e,t,n,r){if(50<Mi)throw Mi=0,$u=null,Error(E(185));ps(e,n,r),(!(O&2)||e!==we)&&(e===we&&(!(O&2)&&(Pa|=n),ve===4&&an(e,je)),Ue(e,r),n===1&&O===0&&!(t.mode&1)&&(Fr=fe()+500,ja&&En()))}function Ue(e,t){var n=e.callbackNode;f1(e,t);var r=Vo(e,e===we?je:0);if(r===0)n!==null&&hf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hf(n),t===1)e.tag===0?dw(op.bind(null,e)):Hg(op.bind(null,e)),aw(function(){!(O&6)&&En()}),n=null;else{switch(xg(r)){case 1:n=Tc;break;case 4:n=gg;break;case 16:n=No;break;case 536870912:n=vg;break;default:n=No}n=z0(n,_0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _0(e,t){if(ko=-1,jo=0,O&6)throw Error(E(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=Vo(e,e===we?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ra(e,r);else{t=r;var i=O;O|=2;var s=$0();(we!==e||je!==t)&&(Lt=null,Fr=fe()+500,Hn(e,t));do try{Lw();break}catch(a){B0(e,a)}while(!0);Vc(),ea.current=s,O=i,he!==null?t=0:(we=null,je=0,t=ve)}if(t!==0){if(t===2&&(i=cu(e),i!==0&&(r=i,t=Nu(e,i))),t===1)throw n=ns,Hn(e,0),an(e,r),Ue(e,fe()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dw(i)&&(t=ra(e,r),t===2&&(s=cu(e),s!==0&&(r=s,t=Nu(e,s))),t===1))throw n=ns,Hn(e,0),an(e,r),Ue(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:_n(e,Ve,Lt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=ed+500-fe(),10<t)){if(Vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yu(_n.bind(null,e,Ve,Lt),t);break}_n(e,Ve,Lt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Aw(r/1960))-r,10<r){e.timeoutHandle=yu(_n.bind(null,e,Ve,Lt),r);break}_n(e,Ve,Lt);break;case 5:_n(e,Ve,Lt);break;default:throw Error(E(329))}}}return Ue(e,fe()),e.callbackNode===n?_0.bind(null,e):null}function Nu(e,t){var n=Ii;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=ra(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Vu(t)),e}function Vu(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function Dw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~qc,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function op(e){if(O&6)throw Error(E(327));Ir();var t=Vo(e,0);if(!(t&1))return Ue(e,fe()),null;var n=ra(e,t);if(e.tag!==0&&n===2){var r=cu(e);r!==0&&(t=r,n=Nu(e,r))}if(n===1)throw n=ns,Hn(e,0),an(e,t),Ue(e,fe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ve,Lt),Ue(e,fe()),null}function td(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Fr=fe()+500,ja&&En())}}function qn(e){un!==null&&un.tag===0&&!(O&6)&&Ir();var t=O;O|=1;var n=lt.transition,r=G;try{if(lt.transition=null,G=1,e)return e()}finally{G=r,lt.transition=n,O=t,!(O&6)&&En()}}function nd(){Qe=xr.current,J(xr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ow(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Nr(),J(Oe),J(Le),Wc();break;case 5:Hc(r);break;case 4:Nr();break;case 13:J(se);break;case 19:J(se);break;case 10:Fc(r.type._context);break;case 22:case 23:nd()}n=n.return}if(we=e,he=e=yn(e.current,null),je=Qe=t,ve=0,ns=null,qc=Pa=Jn=0,Ve=Ii=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vn=null}return e}function B0(e,t){do{var n=he;try{if(Vc(),xo.current=qo,Jo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(Zn=0,ye=ge=ae=null,Ri=!1,qi=0,Jc.current=null,n===null||n.return===null){ve=1,ns=t,he=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Kf(o);if(g!==null){g.flags&=-257,Yf(g,o,a,s,t),g.mode&1&&Gf(s,c,t),t=g,l=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Gf(s,c,t),rd();break e}l=Error(E(426))}}else if(ie&&a.mode&1){var k=Kf(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Yf(k,o,a,s,t),$c(Vr(l,a));break e}}s=l=Vr(l,a),ve!==4&&(ve=2),Ii===null?Ii=[s]:Ii.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=x0(s,l,t);Ff(s,m);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gn===null||!gn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=w0(s,a,t);Ff(s,C);break e}}s=s.return}while(s!==null)}V0(n)}catch(j){t=j,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function $0(){var e=ea.current;return ea.current=qo,e===null?qo:e}function rd(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||!(Jn&268435455)&&!(Pa&268435455)||an(we,je)}function ra(e,t){var n=O;O|=2;var r=$0();(we!==e||je!==t)&&(Lt=null,Hn(e,t));do try{Rw();break}catch(i){B0(e,i)}while(!0);if(Vc(),O=n,ea.current=r,he!==null)throw Error(E(261));return we=null,je=0,ve}function Rw(){for(;he!==null;)N0(he)}function Lw(){for(;he!==null&&!r1();)N0(he)}function N0(e){var t=O0(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?V0(e):he=t,Jc.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bw(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(n=Cw(n,t,Qe),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function _n(e,t,n){var r=G,i=lt.transition;try{lt.transition=null,G=1,Iw(e,t,n,r)}finally{lt.transition=i,G=r}return null}function Iw(e,t,n,r){do Ir();while(un!==null);if(O&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(p1(e,s),e===we&&(he=we=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vs||(Vs=!0,z0(No,function(){return Ir(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=G;G=1;var a=O;O|=4,Jc.current=null,Pw(e,n),I0(n,e),q1(gu),Fo=!!mu,gu=mu=null,e.current=n,Ew(n),i1(),O=a,G=o,lt.transition=s}else e.current=n;if(Vs&&(Vs=!1,un=e,na=i),s=e.pendingLanes,s===0&&(gn=null),a1(n.stateNode),Ue(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ta)throw ta=!1,e=Bu,Bu=null,e;return na&1&&e.tag!==0&&Ir(),s=e.pendingLanes,s&1?e===$u?Mi++:(Mi=0,$u=e):Mi=0,En(),null}function Ir(){if(un!==null){var e=xg(na),t=lt.transition,n=G;try{if(lt.transition=null,G=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,na=0,O&6)throw Error(E(331));var i=O;for(O|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Li(8,d,s)}var f=d.child;if(f!==null)f.return=d,D=f;else for(;D!==null;){d=D;var p=d.sibling,g=d.return;if(D0(d),d===c){D=null;break}if(p!==null){p.return=g,D=p;break}D=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Li(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var h=e.current;for(D=h;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=h;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ta(9,a)}}catch(j){ce(a,a.return,j)}if(a===o){D=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,D=C;break e}D=a.return}}if(O=i,En(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ya,e)}catch{}r=!0}return r}finally{G=n,lt.transition=t}}return!1}function ap(e,t,n){t=Vr(n,t),t=x0(e,t,1),e=mn(e,t,1),t=Be(),e!==null&&(ps(e,1,t),Ue(e,t))}function ce(e,t,n){if(e.tag===3)ap(e,e,n);else for(;t!==null;){if(t.tag===3){ap(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=Vr(n,e),e=w0(t,e,1),t=mn(t,e,1),e=Be(),t!==null&&(ps(t,1,e),Ue(t,e));break}}t=t.return}}function Mw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(je&n)===n&&(ve===4||ve===3&&(je&130023424)===je&&500>fe()-ed?Hn(e,0):qc|=n),Ue(e,t)}function F0(e,t){t===0&&(e.mode&1?(t=As,As<<=1,!(As&130023424)&&(As=4194304)):t=1);var n=Be();e=zt(e,t),e!==null&&(ps(e,t,n),Ue(e,n))}function _w(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),F0(e,n)}function Bw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),F0(e,n)}var O0;O0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,jw(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ie&&t.flags&1048576&&Wg(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=_r(t,Le.current);Lr(t,n),i=Kc(null,t,r,e,i,n);var s=Yc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(s=!0,Wo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zc(t),i.updater=ba,t.stateNode=i,i._reactInternals=t,bu(t,r,e,n),t=Eu(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&_c(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nw(r),e=mt(r,e),i){case 0:t=Pu(null,t,r,e,n);break e;case 1:t=Zf(null,t,r,e,n);break e;case 11:t=Qf(null,t,r,e,n);break e;case 14:t=Xf(null,t,r,mt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Pu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Zf(e,t,r,i,n);case 3:e:{if(C0(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Zg(e,t),Xo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Vr(Error(E(423)),t),t=Jf(e,t,r,n,i);break e}else if(r!==i){i=Vr(Error(E(424)),t),t=Jf(e,t,r,n,i);break e}else for(Xe=hn(t.stateNode.containerInfo.firstChild),Ze=t,ie=!0,vt=null,n=Qg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){t=Ut(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Jg(t),e===null&&ku(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,vu(r,i)?o=null:s!==null&&vu(r,s)&&(t.flags|=32),j0(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&ku(t),null;case 13:return b0(e,t,n);case 4:return Uc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Qf(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Y(Yo,r._currentValue),r._currentValue=o,s!==null)if(St(s.value,o)){if(s.children===i.children&&!Oe.current){t=Ut(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$t(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ju(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ju(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=ut(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Xf(e,t,r,i,n);case 15:return S0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),So(e,t),t.tag=1,ze(r)?(e=!0,Wo(t)):e=!1,Lr(t,n),y0(t,r,i),bu(t,r,i,n),Eu(null,t,r,!0,e,n);case 19:return T0(e,t,n);case 22:return k0(e,t,n)}throw Error(E(156,t.tag))};function z0(e,t){return mg(e,t)}function $w(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new $w(e,t,n,r)}function id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nw(e){if(typeof e=="function")return id(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===Cc)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")id(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ur:return Wn(n.children,i,s,t);case kc:o=8,i|=8;break;case Ql:return e=at(12,n,t,i|2),e.elementType=Ql,e.lanes=s,e;case Xl:return e=at(13,n,t,i),e.elementType=Xl,e.lanes=s,e;case Zl:return e=at(19,n,t,i),e.elementType=Zl,e.lanes=s,e;case Jm:return Ea(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xm:o=10;break e;case Zm:o=9;break e;case jc:o=11;break e;case Cc:o=14;break e;case rn:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=at(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Wn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ea(e,t,n,r){return e=at(22,e,r,t),e.elementType=Jm,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sd(e,t,n,r,i,s,o,a,l){return e=new Vw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=at(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(s),e}function Fw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function U0(e){if(!e)return jn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ze(n))return Ug(e,n,t)}return t}function H0(e,t,n,r,i,s,o,a,l){return e=sd(n,r,!0,e,i,s,o,a,l),e.context=U0(null),n=e.current,r=Be(),i=vn(n),s=$t(r,i),s.callback=t??null,mn(n,s,i),e.current.lanes=i,ps(e,i,r),Ue(e,r),e}function Aa(e,t,n,r){var i=t.current,s=Be(),o=vn(i);return n=U0(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,o),e!==null&&(xt(e,i,o,s),yo(e,i,o)),o}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function od(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function Ow(){return null}var W0=typeof reportError=="function"?reportError:function(e){console.error(e)};function ad(e){this._internalRoot=e}Da.prototype.render=ad.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Aa(e,t,null,null)};Da.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Aa(null,e,null,null)}),t[Ot]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=kg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Cg(e)}};function ld(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function up(){}function zw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ia(o);s.call(c)}}var o=H0(t,r,e,0,null,!1,!1,"",up);return e._reactRootContainer=o,e[Ot]=o.current,Yi(e.nodeType===8?e.parentNode:e),qn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ia(l);a.call(c)}}var l=sd(e,0,!1,null,null,!1,!1,"",up);return e._reactRootContainer=l,e[Ot]=l.current,Yi(e.nodeType===8?e.parentNode:e),qn(function(){Aa(t,l,n,r)}),l}function La(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ia(o);a.call(l)}}Aa(t,o,e,i)}else o=zw(n,t,e,i,r);return ia(o)}wg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wi(t.pendingLanes);n!==0&&(Pc(t,n|1),Ue(t,fe()),!(O&6)&&(Fr=fe()+500,En()))}break;case 13:qn(function(){var r=zt(e,1);if(r!==null){var i=Be();xt(r,e,1,i)}}),od(e,1)}};Ec=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Be();xt(t,e,134217728,n)}od(e,134217728)}};Sg=function(e){if(e.tag===13){var t=vn(e),n=zt(e,t);if(n!==null){var r=Be();xt(n,e,t,r)}od(e,t)}};kg=function(){return G};jg=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};au=function(e,t,n){switch(t){case"input":if(eu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ka(r);if(!i)throw Error(E(90));eg(r),eu(r,i)}}}break;case"textarea":ng(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};ug=td;cg=qn;var Uw={usingClientEntryPoint:!1,Events:[ms,pr,ka,ag,lg,td]},pi={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hw={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pg(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||Ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{ya=Fs.inject(Hw),Pt=Fs}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(t))throw Error(E(200));return Fw(e,t,null,n)};tt.createRoot=function(e,t){if(!ld(e))throw Error(E(299));var n=!1,r="",i=W0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sd(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,Yi(e.nodeType===8?e.parentNode:e),new ad(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=pg(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return qn(e)};tt.hydrate=function(e,t,n){if(!Ra(t))throw Error(E(200));return La(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!ld(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=H0(t,null,e,1,n??null,i,!1,s,o),e[Ot]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Da(t)};tt.render=function(e,t,n){if(!Ra(t))throw Error(E(200));return La(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(E(40));return e._reactRootContainer?(qn(function(){La(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};tt.unstable_batchedUpdates=td;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ra(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return La(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(e){console.error(e)}}G0(),Gm.exports=tt;var Ww=Gm.exports,K0,cp=Ww;K0=cp.createRoot,cp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rs.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const dp="popstate";function Gw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sa(i)}return Yw(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ud(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Kw(){return Math.random().toString(36).substr(2,8)}function fp(e,t){return{usr:e.state,key:e.key,idx:t}}function Fu(e,t,n,r){return n===void 0&&(n=null),rs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ei(t):t,{state:n,key:t&&t.key||r||Kw()})}function sa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ei(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=cn.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(rs({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=cn.Pop;let k=d(),m=k==null?null:k-c;c=k,l&&l({action:a,location:y.location,delta:m})}function p(k,m){a=cn.Push;let h=Fu(y.location,k,m);c=d()+1;let v=fp(h,c),C=y.createHref(h);try{o.pushState(v,"",C)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(C)}s&&l&&l({action:a,location:y.location,delta:1})}function g(k,m){a=cn.Replace;let h=Fu(y.location,k,m);c=d();let v=fp(h,c),C=y.createHref(h);o.replaceState(v,"",C),s&&l&&l({action:a,location:y.location,delta:0})}function x(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:sa(k);return h=h.replace(/ $/,"%20"),me(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let y={get action(){return a},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dp,f),l=k,()=>{i.removeEventListener(dp,f),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let m=x(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:g,go(k){return o.go(k)}};return y}var pp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pp||(pp={}));function Qw(e,t,n){return n===void 0&&(n="/"),Xw(e,t,n)}function Xw(e,t,n,r){let i=typeof t=="string"?ei(t):t,s=cd(i.pathname||"/",n);if(s==null)return null;let o=Y0(e);Zw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=u2(s);a=o2(o[l],c)}return a}function Y0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=xn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Y0(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:i2(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Q0(s.path))i(s,o,l)}),t}function Q0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Zw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:s2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jw=/^:[\w-]+$/,qw=3,e2=2,t2=1,n2=10,r2=-2,hp=e=>e==="*";function i2(e,t){let n=e.split("/"),r=n.length;return n.some(hp)&&(r+=r2),t&&(r+=e2),n.filter(i=>!hp(i)).reduce((i,s)=>i+(Jw.test(s)?qw:s===""?t2:n2),r)}function s2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function o2(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=a2({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:xn([s,f.pathname]),pathnameBase:h2(xn([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=xn([s,f.pathnameBase]))}return o}function a2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=l2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[f];return g&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function l2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ud(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function u2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ud(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const c2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d2=e=>c2.test(e);function f2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ei(e):e,s;if(n)if(d2(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ud(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=mp(n.substring(1),"/"):s=mp(n,t)}else s=t;return{pathname:s,search:m2(r),hash:g2(i)}}function mp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function p2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X0(e,t){let n=p2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Z0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ei(e):(i=rs({},e),me(!i.pathname||!i.pathname.includes("?"),wl("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),wl("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),wl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=f2(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),h2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const J0=["post","put","patch","delete"];new Set(J0);const y2=["get",...J0];new Set(y2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}const dd=S.createContext(null),x2=S.createContext(null),nr=S.createContext(null),Ia=S.createContext(null),rr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),q0=S.createContext(null);function w2(e,t){let{relative:n}=t===void 0?{}:t;vs()||me(!1);let{basename:r,navigator:i}=S.useContext(nr),{hash:s,pathname:o,search:a}=tv(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function vs(){return S.useContext(Ia)!=null}function Ma(){return vs()||me(!1),S.useContext(Ia).location}function ev(e){S.useContext(nr).static||S.useLayoutEffect(e)}function S2(){let{isDataRoute:e}=S.useContext(rr);return e?M2():k2()}function k2(){vs()||me(!1);let e=S.useContext(dd),{basename:t,future:n,navigator:r}=S.useContext(nr),{matches:i}=S.useContext(rr),{pathname:s}=Ma(),o=JSON.stringify(X0(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return ev(()=>{a.current=!0}),S.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Z0(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:xn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function tv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(nr),{matches:i}=S.useContext(rr),{pathname:s}=Ma(),o=JSON.stringify(X0(i,r.v7_relativeSplatPath));return S.useMemo(()=>Z0(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function j2(e,t){return C2(e,t)}function C2(e,t,n,r){vs()||me(!1);let{navigator:i}=S.useContext(nr),{matches:s}=S.useContext(rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ma(),d;if(t){var f;let k=typeof t=="string"?ei(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||me(!1),d=k}else d=c;let p=d.pathname||"/",g=p;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=Qw(e,{pathname:g}),y=A2(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:xn([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:xn([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&y?S.createElement(Ia.Provider,{value:{location:is({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:cn.Pop}},y):y}function b2(){let e=I2(),t=v2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const T2=S.createElement(b2,null);class P2 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(rr.Provider,{value:this.props.routeContext},S.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E2(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(dd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(rr.Provider,{value:t},r)}function A2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||me(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,x=!1,y=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||T2,l&&(c<0&&p===0?(_2("route-fallback"),x=!0,k=null):c===p&&(x=!0,k=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),h=()=>{let v;return g?v=y:x?v=k:f.route.Component?v=S.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,S.createElement(E2,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?S.createElement(P2,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var nv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nv||{}),rv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rv||{});function D2(e){let t=S.useContext(dd);return t||me(!1),t}function R2(e){let t=S.useContext(x2);return t||me(!1),t}function L2(e){let t=S.useContext(rr);return t||me(!1),t}function iv(e){let t=L2(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function I2(){var e;let t=S.useContext(q0),n=R2(rv.UseRouteError),r=iv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function M2(){let{router:e}=D2(nv.UseNavigateStable),t=iv(),n=S.useRef(!1);return ev(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,is({fromRouteId:t},s)))},[e,t])}const gp={};function _2(e,t,n){gp[e]||(gp[e]=!0)}function B2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bo(e){me(!1)}function $2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=cn.Pop,navigator:s,static:o=!1,future:a}=e;vs()&&me(!1);let l=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:s,static:o,future:is({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ei(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:x="default"}=r,y=S.useMemo(()=>{let k=cd(d,l);return k==null?null:{location:{pathname:k,search:f,hash:p,state:g,key:x},navigationType:i}},[l,d,f,p,g,x,i]);return y==null?null:S.createElement(nr.Provider,{value:c},S.createElement(Ia.Provider,{children:n,value:y}))}function N2(e){let{children:t,location:n}=e;return j2(Ou(t),n)}new Promise(()=>{});function Ou(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Ou(r.props.children,s));return}r.type!==bo&&me(!1),!r.props.index||!r.props.children||me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ou(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zu.apply(this,arguments)}function V2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function F2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function O2(e,t){return e.button===0&&(!t||t==="_self")&&!F2(e)}const z2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],U2="6";try{window.__reactRouterVersion=U2}catch{}const H2="startTransition",vp=Mx[H2];function W2(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=Gw({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=S.useCallback(f=>{c&&vp?vp(()=>l(f)):l(f)},[l,c]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>B2(r),[r]),S.createElement($2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const G2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sv=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,p=V2(t,z2),{basename:g}=S.useContext(nr),x,y=!1;if(typeof c=="string"&&K2.test(c)&&(x=c,G2))try{let v=new URL(window.location.href),C=c.startsWith("//")?new URL(v.protocol+c):new URL(c),j=cd(C.pathname,g);C.origin===v.origin&&j!=null?c=j+C.search+C.hash:y=!0}catch{}let k=w2(c,{relative:i}),m=Y2(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||m(v)}return S.createElement("a",zu({},p,{href:x||k,onClick:y||s?r:h,ref:n,target:l}))});var yp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yp||(yp={}));var xp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xp||(xp={}));function Y2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=S2(),c=Ma(),d=tv(e,{relative:o});return S.useCallback(f=>{if(O2(f,n)){f.preventDefault();let p=r!==void 0?r:sa(c)===sa(d);l(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,n,e,s,o,a])}const ov=S.createContext({isDark:!0,toggleTheme:()=>{}}),Q2=({children:e})=>{const[t,n]=S.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});S.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),S.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=o=>{localStorage.getItem("theme")||n(o.matches)};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=()=>n(!t);return u.jsx(ov.Provider,{value:{isDark:t,toggleTheme:r},children:e})},av=()=>{const e=S.useContext(ov);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var De=function(){return De=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},De.apply(this,arguments)};function ss(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Z="-ms-",_i="-moz-",U="-webkit-",lv="comm",_a="rule",fd="decl",X2="@import",uv="@keyframes",Z2="@layer",cv=Math.abs,pd=String.fromCharCode,Uu=Object.assign;function J2(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function dv(e){return e.trim()}function It(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function To(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function fv(e){return e.length}function ki(e,t){return t.push(e),e}function q2(e,t){return e.map(t).join("")}function wp(e,t){return e.filter(function(n){return!It(n,t)})}var Ba=1,zr=1,pv=0,dt=0,pe=0,ti="";function $a(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ba,column:zr,length:o,return:"",siblings:a}}function tn(e,t){return Uu($a("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function or(e){for(;e.root;)e=tn(e.root,{children:[e]});ki(e,e.siblings)}function eS(){return pe}function tS(){return pe=dt>0?xe(ti,--dt):0,zr--,pe===10&&(zr=1,Ba--),pe}function wt(){return pe=dt<pv?xe(ti,dt++):0,zr++,pe===10&&(zr=1,Ba++),pe}function Gn(){return xe(ti,dt)}function Po(){return dt}function Na(e,t){return Or(ti,e,t)}function Hu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nS(e){return Ba=zr=1,pv=Ct(ti=e),dt=0,[]}function rS(e){return ti="",e}function Sl(e){return dv(Na(dt-1,Wu(e===91?e+2:e===40?e+1:e)))}function iS(e){for(;(pe=Gn())&&pe<33;)wt();return Hu(e)>2||Hu(pe)>3?"":" "}function sS(e,t){for(;--t&&wt()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return Na(e,Po()+(t<6&&Gn()==32&&wt()==32))}function Wu(e){for(;wt();)switch(pe){case e:return dt;case 34:case 39:e!==34&&e!==39&&Wu(pe);break;case 40:e===41&&Wu(e);break;case 92:wt();break}return dt}function oS(e,t){for(;wt()&&e+pe!==57;)if(e+pe===84&&Gn()===47)break;return"/*"+Na(t,dt-1)+"*"+pd(e===47?e:wt())}function aS(e){for(;!Hu(Gn());)wt();return Na(e,dt)}function lS(e){return rS(Eo("",null,null,null,[""],e=nS(e),0,[0],e))}function Eo(e,t,n,r,i,s,o,a,l){for(var c=0,d=0,f=o,p=0,g=0,x=0,y=1,k=1,m=1,h=0,v="",C=i,j=s,b=r,T=v;k;)switch(x=h,h=wt()){case 40:if(x!=108&&xe(T,f-1)==58){To(T+=$(Sl(h),"&","&\f"),"&\f",cv(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:T+=Sl(h);break;case 9:case 10:case 13:case 32:T+=iS(x);break;case 92:T+=sS(Po()-1,7);continue;case 47:switch(Gn()){case 42:case 47:ki(uS(oS(wt(),Po()),t,n,l),l);break;default:T+="/"}break;case 123*y:a[c++]=Ct(T)*m;case 125*y:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+d:m==-1&&(T=$(T,/\f/g,"")),g>0&&Ct(T)-f&&ki(g>32?kp(T+";",r,n,f-1,l):kp($(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(ki(b=Sp(T,t,n,c,d,i,a,v,C=[],j=[],f,s),s),h===123)if(d===0)Eo(T,t,b,b,C,s,f,a,j);else switch(p===99&&xe(T,3)===110?100:p){case 100:case 108:case 109:case 115:Eo(e,b,b,r&&ki(Sp(e,b,b,0,0,i,a,v,i,C=[],f,j),j),i,j,f,a,r?C:j);break;default:Eo(T,b,b,b,[""],j,0,a,j)}}c=d=g=0,y=m=1,v=T="",f=o;break;case 58:f=1+Ct(T),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&tS()==125)continue}switch(T+=pd(h),h*y){case 38:m=d>0?1:(T+="\f",-1);break;case 44:a[c++]=(Ct(T)-1)*m,m=1;break;case 64:Gn()===45&&(T+=Sl(wt())),p=Gn(),d=f=Ct(v=T+=aS(Po())),h++;break;case 45:x===45&&Ct(T)==2&&(y=0)}}return s}function Sp(e,t,n,r,i,s,o,a,l,c,d,f){for(var p=i-1,g=i===0?s:[""],x=fv(g),y=0,k=0,m=0;y<r;++y)for(var h=0,v=Or(e,p+1,p=cv(k=o[y])),C=e;h<x;++h)(C=dv(k>0?g[h]+" "+v:$(v,/&\f/g,g[h])))&&(l[m++]=C);return $a(e,t,n,i===0?_a:a,l,c,d,f)}function uS(e,t,n,r){return $a(e,t,n,lv,pd(eS()),Or(e,2,-2),0,r)}function kp(e,t,n,r,i){return $a(e,t,n,fd,Or(e,0,r),Or(e,r+1,-1),r,i)}function hv(e,t,n){switch(J2(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return _i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+_i+e+Z+e+e;case 5936:switch(xe(e,t+11)){case 114:return U+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Z+e+e;case 6165:return U+e+Z+"flex-"+e+e;case 5187:return U+e+$(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return U+e+Z+"flex-item-"+$(e,/flex-|-self/g,"")+(It(e,/flex-|baseline/)?"":Z+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return U+e+Z+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Z+$(e,"shrink","negative")+e;case 5292:return U+e+Z+$(e,"basis","preferred-size")+e;case 6060:return U+"box-"+$(e,"-grow","")+U+e+Z+$(e,"grow","positive")+e;case 4554:return U+$(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!It(e,/flex-|baseline/))return Z+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return Z+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,It(r.props,/grid-\w+-end/)})?~To(e+(n=n[t].value),"span",0)?e:Z+$(e,"-start","")+e+Z+"grid-row-span:"+(~To(n,"span",0)?It(n,/\d+/):+It(n,/\d+/)-+It(e,/\d+/))+";":Z+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return It(r.props,/grid-\w+-start/)})?e:Z+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+_i+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~To(e,"stretch",0)?hv($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return Z+i+":"+s+c+(o?Z+i+"-span:"+(a?l:+l-+s)+c:"")+e});case 4949:if(xe(e,t+6)===121)return $(e,":",":"+U)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(xe(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Z+"$2box$3")+e;case 100:return $(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function oa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function cS(e,t,n,r){switch(e.type){case Z2:if(e.children.length)break;case X2:case fd:return e.return=e.return||e.value;case lv:return"";case uv:return e.return=e.value+"{"+oa(e.children,r)+"}";case _a:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=oa(e.children,r))?e.return=e.value+"{"+n+"}":""}function dS(e){var t=fv(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function fS(e){return function(t){t.root||(t=t.return)&&e(t)}}function pS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fd:e.return=hv(e.value,e.length,n);return;case uv:return oa([tn(e,{value:$(e.value,"@","@"+U)})],r);case _a:if(e.length)return q2(n=e.props,function(i){switch(It(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":or(tn(e,{props:[$(i,/:(read-\w+)/,":"+_i+"$1")]})),or(tn(e,{props:[i]})),Uu(e,{props:wp(n,r)});break;case"::placeholder":or(tn(e,{props:[$(i,/:(plac\w+)/,":"+U+"input-$1")]})),or(tn(e,{props:[$(i,/:(plac\w+)/,":"+_i+"$1")]})),or(tn(e,{props:[$(i,/:(plac\w+)/,Z+"input-$1")]})),or(tn(e,{props:[i]})),Uu(e,{props:wp(n,r)});break}return""})}}var hS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},Ur=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",mv="active",gv="data-styled-version",Va="6.1.19",hd=`/*!sc*/
`,aa=typeof window<"u"&&typeof document<"u",mS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),gS={},Fa=Object.freeze([]),Hr=Object.freeze({});function vv(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var yv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yS=/(^-|-$)/g;function jp(e){return e.replace(vS,"-").replace(yS,"")}var xS=/(a)(d)/gi,Os=52,Cp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gu(e){var t,n="";for(t=Math.abs(e);t>Os;t=t/Os|0)n=Cp(t%Os)+n;return(Cp(t%Os)+n).replace(xS,"$1-$2")}var kl,xv=5381,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wv=function(e){return wr(xv,e)};function Sv(e){return Gu(wv(e)>>>0)}function wS(e){return e.displayName||e.name||"Component"}function jl(e){return typeof e=="string"&&!0}var kv=typeof Symbol=="function"&&Symbol.for,jv=kv?Symbol.for("react.memo"):60115,SS=kv?Symbol.for("react.forward_ref"):60112,kS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},CS=((kl={})[SS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kl[jv]=Cv,kl);function bp(e){return("type"in(t=e)&&t.type.$$typeof)===jv?Cv:"$$typeof"in e?CS[e.$$typeof]:kS;var t}var bS=Object.defineProperty,TS=Object.getOwnPropertyNames,Tp=Object.getOwnPropertySymbols,PS=Object.getOwnPropertyDescriptor,ES=Object.getPrototypeOf,Pp=Object.prototype;function bv(e,t,n){if(typeof t!="string"){if(Pp){var r=ES(t);r&&r!==Pp&&bv(e,r,n)}var i=TS(t);Tp&&(i=i.concat(Tp(t)));for(var s=bp(e),o=bp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in jS||n&&n[l]||o&&l in o||s&&l in s)){var c=PS(t,l);try{bS(e,l,c)}catch{}}}}return e}function Wr(e){return typeof e=="function"}function md(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ku(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function os(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yu(e,t,n){if(n===void 0&&(n=!1),!n&&!os(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yu(e[r],t[r]);else if(os(t))for(var r in t)e[r]=Yu(e[r],t[r]);return e}function gd(e,t){Object.defineProperty(e,"toString",{value:t})}function ys(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var AS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw ys(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(hd);return n},e}(),Ao=new Map,la=new Map,Do=1,zs=function(e){if(Ao.has(e))return Ao.get(e);for(;la.has(Do);)Do++;var t=Do++;return Ao.set(e,t),la.set(t,e),t},DS=function(e,t){Do=t+1,Ao.set(e,t),la.set(t,e)},RS="style[".concat(Ur,"][").concat(gv,'="').concat(Va,'"]'),LS=new RegExp("^".concat(Ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),IS=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},MS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(hd),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(LS);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(DS(d,c),IS(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Ep=function(e){for(var t=document.querySelectorAll(RS),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ur)!==mv&&(MS(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function _S(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ur,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ur,mv),r.setAttribute(gv,Va);var o=_S();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},BS=function(){function e(t){this.element=Tv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ys(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$S=function(){function e(t){this.element=Tv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),NS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ap=aa,VS={isServer:!aa,useCSSOMInjection:!mS},ua=function(){function e(t,n,r){t===void 0&&(t=Hr),n===void 0&&(n={});var i=this;this.options=De(De({},VS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&aa&&Ap&&(Ap=!1,Ep(this)),gd(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(m){return la.get(m)}(f);if(p===void 0)return"continue";var g=s.names.get(p),x=o.getGroup(f);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(Ur,".g").concat(f,'[id="').concat(p,'"]'),k="";g!==void 0&&g.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),l+="".concat(x).concat(y,'{content:"').concat(k,'"}').concat(hd)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return zs(t)},e.prototype.rehydrate=function(){!this.server&&aa&&Ep(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(De(De({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new NS(i):r?new BS(i):new $S(i)}(this.options),new AS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(zs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(zs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),FS=/&/g,OS=/^\s*\/\/.*$/gm;function Pv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Pv(n.children,t)),n})}function zS(e){var t,n,r,i=Hr,s=i.options,o=s===void 0?Hr:s,a=i.plugins,l=a===void 0?Fa:a,c=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===_a&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(FS,n).replace(r,c))}),o.prefix&&d.push(pS),d.push(cS);var f=function(p,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(OS,""),m=lS(x||g?"".concat(x," ").concat(g," { ").concat(k," }"):k);o.namespace&&(m=Pv(m,o.namespace));var h=[];return oa(m,dS(d.concat(fS(function(v){return h.push(v)})))),h};return f.hash=l.length?l.reduce(function(p,g){return g.name||ys(15),wr(p,g.name)},xv).toString():"",f}var US=new ua,Qu=zS(),Ev=Tt.createContext({shouldForwardProp:void 0,styleSheet:US,stylis:Qu});Ev.Consumer;Tt.createContext(void 0);function Xu(){return S.useContext(Ev)}var HS=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Qu);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gd(this,function(){throw ys(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qu),this.name+t.hash},e}(),WS=function(e){return e>="A"&&e<="Z"};function Dp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;WS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Av=function(e){return e==null||e===!1||e===""},Dv=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Av(s)&&(Array.isArray(s)&&s.isCss||Wr(s)?r.push("".concat(Dp(i),":"),s,";"):os(s)?r.push.apply(r,ss(ss(["".concat(i," {")],Dv(s),!1),["}"],!1)):r.push("".concat(Dp(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in hS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function wn(e,t,n,r){if(Av(e))return[];if(md(e))return[".".concat(e.styledComponentId)];if(Wr(e)){if(!Wr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return wn(i,t,n,r)}var s;return e instanceof HS?n?(e.inject(n,r),[e.getName(r)]):[e]:os(e)?Dv(e):Array.isArray(e)?Array.prototype.concat.apply(Fa,e.map(function(o){return wn(o,t,n,r)})):[e.toString()]}function Rv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wr(n)&&!md(n))return!1}return!0}var GS=wv(Va),KS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Rv(t),this.componentId=n,this.baseHash=wr(GS,n),this.baseStyle=r,ua.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var s=Ku(wn(this.rules,t,n,r)),o=Gu(wr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=On(i,o),this.staticRulesId=o}else{for(var l=wr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=Ku(wn(f,t,n,r));l=wr(l,p+d),c+=p}}if(c){var g=Gu(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=On(i,g)}}return i},e}(),vd=Tt.createContext(void 0);vd.Consumer;var Cl={};function YS(e,t,n){var r=md(e),i=e,s=!jl(e),o=t.attrs,a=o===void 0?Fa:o,l=t.componentId,c=l===void 0?function(C,j){var b=typeof C!="string"?"sc":jp(C);Cl[b]=(Cl[b]||0)+1;var T="".concat(b,"-").concat(Sv(Va+b+Cl[b]));return j?"".concat(j,"-").concat(T):T}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(C){return jl(C)?"styled.".concat(C):"Styled(".concat(wS(C),")")}(e):d,p=t.displayName&&t.componentId?"".concat(jp(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;x=function(C,j){return y(C,j)&&k(C,j)}}else x=y}var m=new KS(n,p,r?i.componentStyle:void 0);function h(C,j){return function(b,T,P){var L=b.attrs,R=b.componentStyle,H=b.defaultProps,He=b.foldedComponentIds,Ie=b.styledComponentId,ft=b.target,B=Tt.useContext(vd),K=Xu(),N=b.shouldForwardProp||K.shouldForwardProp,A=vv(T,B,H)||Hr,I=function(Gt,Ge,Rt){for(var si,Dn=De(De({},Ge),{className:void 0,theme:Rt}),Ka=0;Ka<Gt.length;Ka+=1){var js=Wr(si=Gt[Ka])?si(Dn):si;for(var Kt in js)Dn[Kt]=Kt==="className"?On(Dn[Kt],js[Kt]):Kt==="style"?De(De({},Dn[Kt]),js[Kt]):js[Kt]}return Ge.className&&(Dn.className=On(Dn.className,Ge.className)),Dn}(L,T,A),M=I.as||ft,z={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===A||(W==="forwardedAs"?z.as=I.forwardedAs:N&&!N(W,M)||(z[W]=I[W]));var be=function(Gt,Ge){var Rt=Xu(),si=Gt.generateAndInjectStyles(Ge,Rt.styleSheet,Rt.stylis);return si}(R,I),We=On(He,Ie);return be&&(We+=" "+be),I.className&&(We+=" "+I.className),z[jl(M)&&!yv.has(M)?"class":"className"]=We,P&&(z.ref=P),S.createElement(M,z)}(v,C,j)}h.displayName=f;var v=Tt.forwardRef(h);return v.attrs=g,v.componentStyle=m,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(j){for(var b=[],T=1;T<arguments.length;T++)b[T-1]=arguments[T];for(var P=0,L=b;P<L.length;P++)Yu(j,L[P],!0);return j}({},i.defaultProps,C):C}}),gd(v,function(){return".".concat(v.styledComponentId)}),s&&bv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Rp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Lp=function(e){return Object.assign(e,{isCss:!0})};function Lv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Wr(e)||os(e))return Lp(wn(Rp(Fa,ss([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?wn(r):Lp(wn(Rp(r,t)))}function Zu(e,t,n){if(n===void 0&&(n=Hr),!t)throw ys(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Lv.apply(void 0,ss([i],s,!1)))};return r.attrs=function(i){return Zu(e,t,De(De({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Zu(e,t,De(De({},n),i))},r}var Iv=function(e){return Zu(YS,e)},w=Iv;yv.forEach(function(e){w[e]=Iv(e)});var QS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Rv(t),ua.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Ku(wn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ua.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function XS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Lv.apply(void 0,ss([e],t,!1)),i="sc-global-".concat(Sv(JSON.stringify(r))),s=new QS(r,i),o=function(l){var c=Xu(),d=Tt.useContext(vd),f=Tt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,l,c.styleSheet,d,c.stylis),Tt.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,l,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,d,c.stylis]),null};function a(l,c,d,f,p){if(s.isStatic)s.renderStyles(l,gS,d,p);else{var g=De(De({},c),{theme:vv(c,f,o.defaultProps)});s.renderStyles(l,g,d,p)}}return Tt.memo(o)}const ZS=XS`
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
`,JS=w.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,qS=w.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,ek=()=>{const{isDark:e}=av();return u.jsx(JS,{children:u.jsx(qS,{$isDark:e})})},yd=S.createContext({});function xd(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const Oa=S.createContext(null),wd=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class tk extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nk({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=S.useContext(wd);return S.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),u.jsx(tk,{isPresent:t,childRef:r,sizeRef:i,children:S.cloneElement(e,{ref:r})})}const rk=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=xd(ik),l=S.useId(),c=S.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),d=S.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return S.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),S.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=u.jsx(nk,{isPresent:n,children:e})),u.jsx(Oa.Provider,{value:d,children:e})};function ik(){return new Map}function Mv(e=!0){const t=S.useContext(Oa);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=S.useId();S.useEffect(()=>{e&&i(s)},[e]);const o=S.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Us=e=>e.key||"";function Ip(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const Sd=typeof window<"u",_v=Sd?S.useLayoutEffect:S.useEffect,Gr=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Mv(o),c=S.useMemo(()=>Ip(e),[e]),d=o&&!a?[]:c.map(Us),f=S.useRef(!0),p=S.useRef(c),g=xd(()=>new Map),[x,y]=S.useState(c),[k,m]=S.useState(c);_v(()=>{f.current=!1,p.current=c;for(let C=0;C<k.length;C++){const j=Us(k[C]);d.includes(j)?g.delete(j):g.get(j)!==!0&&g.set(j,!1)}},[k,d.length,d.join("-")]);const h=[];if(c!==x){let C=[...c];for(let j=0;j<k.length;j++){const b=k[j],T=Us(b);d.includes(T)||(C.splice(j,0,b),h.push(b))}s==="wait"&&h.length&&(C=h),m(Ip(C)),y(c);return}const{forceRender:v}=S.useContext(yd);return u.jsx(u.Fragment,{children:k.map(C=>{const j=Us(C),b=o&&!a?!1:c===k||d.includes(j),T=()=>{if(g.has(j))g.set(j,!0);else return;let P=!0;g.forEach(L=>{L||(P=!1)}),P&&(v==null||v(),m(p.current),o&&(l==null||l()),r&&r())};return u.jsx(rk,{isPresent:b,initial:!f.current||n?void 0:!1,custom:b?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:b?void 0:T,children:C},j)})})},Je=e=>e;let Bv=Je;function kd(e){let t;return()=>(t===void 0&&(t=e()),t)}const Kr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Nt=e=>e*1e3,Vt=e=>e/1e3,sk={useManualTiming:!1};function ok(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,d=!1,f=!1)=>{const g=f&&r?t:n;return d&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const Hs=["read","resolveKeyframes","update","preRender","render","postRender"],ak=40;function $v(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Hs.reduce((m,h)=>(m[h]=ok(s),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:d,render:f,postRender:p}=o,g=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,ak),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Hs.reduce((m,h)=>{const v=o[h];return m[h]=(C,j=!1,b=!1)=>(n||x(),v.schedule(C,j,b)),m},{}),cancel:m=>{for(let h=0;h<Hs.length;h++)o[Hs[h]].cancel(m)},state:i,steps:o}}const{schedule:q,cancel:Cn,state:ke,steps:bl}=$v(typeof requestAnimationFrame<"u"?requestAnimationFrame:Je,!0),Nv=S.createContext({strict:!1}),Mp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yr={};for(const e in Mp)Yr[e]={isEnabled:t=>Mp[e].some(n=>!!t[n])};function lk(e){for(const t in e)Yr[t]={...Yr[t],...e[t]}}const uk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ca(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||uk.has(e)}let Vv=e=>!ca(e);function ck(e){e&&(Vv=t=>t.startsWith("on")?!ca(t):e(t))}try{ck(require("@emotion/is-prop-valid").default)}catch{}function dk(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Vv(i)||n===!0&&ca(i)||!t&&!ca(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function fk(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const za=S.createContext({});function as(e){return typeof e=="string"||Array.isArray(e)}function Ua(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const jd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cd=["initial",...jd];function Ha(e){return Ua(e.animate)||Cd.some(t=>as(e[t]))}function Fv(e){return!!(Ha(e)||e.variants)}function pk(e,t){if(Ha(e)){const{initial:n,animate:r}=e;return{initial:n===!1||as(n)?n:void 0,animate:as(r)?r:void 0}}return e.inherit!==!1?t:{}}function hk(e){const{initial:t,animate:n}=pk(e,S.useContext(za));return S.useMemo(()=>({initial:t,animate:n}),[_p(t),_p(n)])}function _p(e){return Array.isArray(e)?e.join(" "):e}const mk=Symbol.for("motionComponentSymbol");function Sr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gk(e,t,n){return S.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Sr(n)&&(n.current=r))},[t])}const bd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vk="framerAppearId",Ov="data-"+bd(vk),{schedule:Td}=$v(queueMicrotask,!1),zv=S.createContext({});function yk(e,t,n,r,i){var s,o;const{visualElement:a}=S.useContext(za),l=S.useContext(Nv),c=S.useContext(Oa),d=S.useContext(wd).reducedMotion,f=S.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,g=S.useContext(zv);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&xk(f.current,n,i,g);const x=S.useRef(!1);S.useInsertionEffect(()=>{p&&x.current&&p.update(n,c)});const y=n[Ov],k=S.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return _v(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Td.render(p.render),k.current&&p.animationState&&p.animationState.animateChanges())}),S.useEffect(()=>{p&&(!k.current&&p.animationState&&p.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,y)}),k.current=!1))}),p}function xk(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Uv(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Sr(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function Uv(e){if(e)return e.options.allowProjection!==!1?e.projection:Uv(e.parent)}function wk({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&lk(e);function a(c,d){let f;const p={...S.useContext(wd),...c,layoutId:Sk(c)},{isStatic:g}=p,x=hk(c),y=r(c,g);if(!g&&Sd){kk();const k=jk(p);f=k.MeasureLayout,x.visualElement=yk(i,y,p,t,k.ProjectionNode)}return u.jsxs(za.Provider,{value:x,children:[f&&x.visualElement?u.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,c,gk(y,x.visualElement,d),y,g,x.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=S.forwardRef(a);return l[mk]=i,l}function Sk({layoutId:e}){const t=S.useContext(yd).id;return t&&e!==void 0?t+"-"+e:e}function kk(e,t){S.useContext(Nv).strict}function jk(e){const{drag:t,layout:n}=Yr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Ck=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pd(e){return typeof e!="string"||e.includes("-")?!1:!!(Ck.indexOf(e)>-1||/[A-Z]/u.test(e))}function Bp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Ed(e,t,n,r){if(typeof t=="function"){const[i,s]=Bp(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Bp(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Ju=e=>Array.isArray(e),bk=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Tk=e=>Ju(e)?e[e.length-1]||0:e,Re=e=>!!(e&&e.getVelocity);function Ro(e){const t=Re(e)?e.get():e;return bk(t)?t.toValue():t}function Pk({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:Ek(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const Hv=e=>(t,n)=>{const r=S.useContext(za),i=S.useContext(Oa),s=()=>Pk(e,t,r,i);return n?s():xd(s)};function Ek(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=Ro(s[p]);let{initial:o,animate:a}=e;const l=Ha(e),c=Fv(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Ua(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const x=Ed(e,p[g]);if(x){const{transitionEnd:y,transition:k,...m}=x;for(const h in m){let v=m[h];if(Array.isArray(v)){const C=d?v.length-1:0;v=v[C]}v!==null&&(i[h]=v)}for(const h in y)i[h]=y[h]}}}return i}const ni=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ir=new Set(ni),Wv=e=>t=>typeof t=="string"&&t.startsWith(e),Gv=Wv("--"),Ak=Wv("var(--"),Ad=e=>Ak(e)?Dk.test(e.split("/*")[0].trim()):!1,Dk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Kv=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ht=(e,t,n)=>n>t?t:n<e?e:n,ri={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ls={...ri,transform:e=>Ht(0,1,e)},Ws={...ri,default:1},xs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=xs("deg"),At=xs("%"),_=xs("px"),Rk=xs("vh"),Lk=xs("vw"),$p={...At,parse:e=>At.parse(e)/100,transform:e=>At.transform(e*100)},Ik={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,top:_,right:_,bottom:_,left:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,backgroundPositionX:_,backgroundPositionY:_},Mk={rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:Ws,scaleX:Ws,scaleY:Ws,scaleZ:Ws,skew:nn,skewX:nn,skewY:nn,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:ls,originX:$p,originY:$p,originZ:_},Np={...ri,transform:Math.round},Dd={...Ik,...Mk,zIndex:Np,size:_,fillOpacity:ls,strokeOpacity:ls,numOctaves:Np},_k={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Bk=ni.length;function $k(e,t,n){let r="",i=!0;for(let s=0;s<Bk;s++){const o=ni[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Kv(a,Dd[o]);if(!l){i=!1;const d=_k[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Rd(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(ir.has(l)){o=!0;continue}else if(Gv(l)){i[l]=c;continue}else{const d=Kv(c,Dd[l]);l.startsWith("origin")?(a=!0,s[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=$k(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${c} ${d}`}}const Nk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vk={offset:"strokeDashoffset",array:"strokeDasharray"};function Fk(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Nk:Vk;e[s.offset]=_.transform(-r);const o=_.transform(t),a=_.transform(n);e[s.array]=`${o} ${a}`}function Vp(e,t,n){return typeof e=="string"?e:_.transform(t+n*e)}function Ok(e,t,n){const r=Vp(t,e.x,e.width),i=Vp(n,e.y,e.height);return`${r} ${i}`}function Ld(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},d,f){if(Rd(e,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:x}=e;p.transform&&(x&&(g.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=Ok(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&Fk(p,o,a,l,!1)}const Id=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Yv=()=>({...Id(),attrs:{}}),Md=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Qv(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Xv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Zv(e,t,n,r){Qv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Xv.has(i)?i:bd(i),t.attrs[i])}const da={};function zk(e){Object.assign(da,e)}function Jv(e,{layout:t,layoutId:n}){return ir.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!da[e]||e==="opacity")}function _d(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(Re(i[o])||t.style&&Re(t.style[o])||Jv(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function qv(e,t,n){const r=_d(e,t,n);for(const i in e)if(Re(e[i])||Re(t[i])){const s=ni.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function Uk(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Fp=["x","y","width","height","cx","cy","r"],Hk={useVisualState:Hv({scrapeMotionValuesFromProps:qv,createRenderState:Yv,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(ir.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Fp.length;a++){const l=Fp[a];e[l]!==t[l]&&(o=!0)}o&&q.read(()=>{Uk(n,r),q.render(()=>{Ld(r,i,Md(n.tagName),e.transformTemplate),Zv(n,r)})})}})},Wk={useVisualState:Hv({scrapeMotionValuesFromProps:_d,createRenderState:Id})};function ey(e,t,n){for(const r in t)!Re(t[r])&&!Jv(r,n)&&(e[r]=t[r])}function Gk({transformTemplate:e},t){return S.useMemo(()=>{const n=Id();return Rd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Kk(e,t){const n=e.style||{},r={};return ey(r,n,e),Object.assign(r,Gk(e,t)),r}function Yk(e,t){const n={},r=Kk(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function Qk(e,t,n,r){const i=S.useMemo(()=>{const s=Yv();return Ld(s,t,Md(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};ey(s,e.style,e),i.style={...s,...i.style}}return i}function Xk(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Pd(n)?Qk:Yk)(r,s,o,n),c=dk(r,typeof n=="string",e),d=n!==S.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=S.useMemo(()=>Re(f)?f.get():f,[f]);return S.createElement(n,{...d,children:p})}}function Zk(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Pd(r)?Hk:Wk,preloadedFeatures:e,useRender:Xk(i),createVisualElement:t,Component:r};return wk(o)}}function ty(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Wa(e,t,n){const r=e.getProps();return Ed(r,t,n!==void 0?n:r.custom,e)}const Jk=kd(()=>window.ScrollTimeline!==void 0);class qk{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(Jk()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ej extends qk{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Bd(e,t){return e?e[t]||e.default||e:void 0}const qu=2e4;function ny(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<qu;)t+=n,r=e.next(t);return t>=qu?1/0:t}function $d(e){return typeof e=="function"}function Op(e,t){e.timeline=t,e.onfinish=null}const Nd=e=>Array.isArray(e)&&typeof e[0]=="number",tj={linearEasing:void 0};function nj(e,t){const n=kd(e);return()=>{var r;return(r=tj[t])!==null&&r!==void 0?r:n()}}const fa=nj(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ry=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Kr(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function iy(e){return!!(typeof e=="function"&&fa()||!e||typeof e=="string"&&(e in ec||fa())||Nd(e)||Array.isArray(e)&&e.every(iy))}const ji=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ec={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ji([0,.65,.55,1]),circOut:ji([.55,0,1,.45]),backIn:ji([.31,.01,.66,-.59]),backOut:ji([.33,1.53,.69,.99])};function sy(e,t){if(e)return typeof e=="function"&&fa()?ry(e,t):Nd(e)?ji(e):Array.isArray(e)?e.map(n=>sy(n,t)||ec.easeOut):ec[e]}const ht={x:!1,y:!1};function oy(){return ht.x||ht.y}function rj(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function ay(e,t){const n=rj(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function zp(e){return t=>{t.pointerType==="touch"||oy()||e(t)}}function ij(e,t,n={}){const[r,i,s]=ay(e,n),o=zp(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const d=zp(f=>{c(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const ly=(e,t)=>t?e===t?!0:ly(e,t.parentElement):!1,Vd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,sj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function oj(e){return sj.has(e.tagName)||e.tabIndex!==-1}const Ci=new WeakSet;function Up(e){return t=>{t.key==="Enter"&&e(t)}}function Tl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const aj=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Up(()=>{if(Ci.has(n))return;Tl(n,"down");const i=Up(()=>{Tl(n,"up")}),s=()=>Tl(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Hp(e){return Vd(e)&&!oy()}function lj(e,t,n={}){const[r,i,s]=ay(e,n),o=a=>{const l=a.currentTarget;if(!Hp(a)||Ci.has(l))return;Ci.add(l);const c=t(a),d=(g,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Hp(g)||!Ci.has(l))&&(Ci.delete(l),typeof c=="function"&&c(g,{success:x}))},f=g=>{d(g,n.useGlobalTarget||ly(l,g.target))},p=g=>{d(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!oj(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>aj(c,i),i)}),s}function uj(e){return e==="x"||e==="y"?ht[e]?null:(ht[e]=!0,()=>{ht[e]=!1}):ht.x||ht.y?null:(ht.x=ht.y=!0,()=>{ht.x=ht.y=!1})}const uy=new Set(["width","height","top","left","right","bottom",...ni]);let Lo;function cj(){Lo=void 0}const Dt={now:()=>(Lo===void 0&&Dt.set(ke.isProcessing||sk.useManualTiming?ke.timestamp:performance.now()),Lo),set:e=>{Lo=e,queueMicrotask(cj)}};function Fd(e,t){e.indexOf(t)===-1&&e.push(t)}function Od(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class zd{constructor(){this.subscriptions=[]}add(t){return Fd(this.subscriptions,t),()=>Od(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function cy(e,t){return t?e*(1e3/t):0}const Wp=30,dj=e=>!isNaN(parseFloat(e));class fj{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Dt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Dt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=dj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new zd);const r=this.events[t].add(n);return t==="change"?()=>{r(),q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Wp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Wp);return cy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function us(e,t){return new fj(e,t)}function pj(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,us(n))}function hj(e,t){const n=Wa(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Tk(s[o]);pj(e,o,a)}}function mj(e){return!!(Re(e)&&e.add)}function tc(e,t){const n=e.getValue("willChange");if(mj(n))return n.add(t)}function dy(e){return e.props[Ov]}const fy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,gj=1e-7,vj=12;function yj(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=fy(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>gj&&++a<vj);return o}function ws(e,t,n,r){if(e===t&&n===r)return Je;const i=s=>yj(s,0,1,e,n);return s=>s===0||s===1?s:fy(i(s),t,r)}const py=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hy=e=>t=>1-e(1-t),my=ws(.33,1.53,.69,.99),Ud=hy(my),gy=py(Ud),vy=e=>(e*=2)<1?.5*Ud(e):.5*(2-Math.pow(2,-10*(e-1))),Hd=e=>1-Math.sin(Math.acos(e)),yy=hy(Hd),xy=py(Hd),wy=e=>/^0[^.\s]+$/u.test(e);function xj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||wy(e):!0}const Bi=e=>Math.round(e*1e5)/1e5,Wd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wj(e){return e==null}const Sj=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gd=(e,t)=>n=>!!(typeof n=="string"&&Sj.test(n)&&n.startsWith(e)||t&&!wj(n)&&Object.prototype.hasOwnProperty.call(n,t)),Sy=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Wd);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},kj=e=>Ht(0,255,e),Pl={...ri,transform:e=>Math.round(kj(e))},zn={test:Gd("rgb","red"),parse:Sy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Pl.transform(e)+", "+Pl.transform(t)+", "+Pl.transform(n)+", "+Bi(ls.transform(r))+")"};function jj(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const nc={test:Gd("#"),parse:jj,transform:zn.transform},kr={test:Gd("hsl","hue"),parse:Sy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+At.transform(Bi(t))+", "+At.transform(Bi(n))+", "+Bi(ls.transform(r))+")"},Ee={test:e=>zn.test(e)||nc.test(e)||kr.test(e),parse:e=>zn.test(e)?zn.parse(e):kr.test(e)?kr.parse(e):nc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?zn.transform(e):kr.transform(e)},Cj=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function bj(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Wd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Cj))===null||n===void 0?void 0:n.length)||0)>0}const ky="number",jy="color",Tj="var",Pj="var(",Gp="${}",Ej=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cs(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(Ej,l=>(Ee.test(l)?(r.color.push(s),i.push(jy),n.push(Ee.parse(l))):l.startsWith(Pj)?(r.var.push(s),i.push(Tj),n.push(l)):(r.number.push(s),i.push(ky),n.push(parseFloat(l))),++s,Gp)).split(Gp);return{values:n,split:a,indexes:r,types:i}}function Cy(e){return cs(e).values}function by(e){const{split:t,types:n}=cs(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===ky?s+=Bi(i[o]):a===jy?s+=Ee.transform(i[o]):s+=i[o]}return s}}const Aj=e=>typeof e=="number"?0:e;function Dj(e){const t=Cy(e);return by(e)(t.map(Aj))}const bn={test:bj,parse:Cy,createTransformer:by,getAnimatableNone:Dj},Rj=new Set(["brightness","contrast","saturate","opacity"]);function Lj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Wd)||[];if(!r)return e;const i=n.replace(r,"");let s=Rj.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Ij=/\b([a-z-]*)\(.*?\)/gu,rc={...bn,getAnimatableNone:e=>{const t=e.match(Ij);return t?t.map(Lj).join(" "):e}},Mj={...Dd,color:Ee,backgroundColor:Ee,outlineColor:Ee,fill:Ee,stroke:Ee,borderColor:Ee,borderTopColor:Ee,borderRightColor:Ee,borderBottomColor:Ee,borderLeftColor:Ee,filter:rc,WebkitFilter:rc},Kd=e=>Mj[e];function Ty(e,t){let n=Kd(e);return n!==rc&&(n=bn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const _j=new Set(["auto","none","0"]);function Bj(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!_j.has(s)&&cs(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Ty(n,i)}const Kp=e=>e===ri||e===_,Yp=(e,t)=>parseFloat(e.split(", ")[t]),Qp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Yp(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Yp(s[1],e):0}},$j=new Set(["x","y","z"]),Nj=ni.filter(e=>!$j.has(e));function Vj(e){const t=[];return Nj.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Qr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Qp(4,13),y:Qp(5,14)};Qr.translateX=Qr.x;Qr.translateY=Qr.y;const Kn=new Set;let ic=!1,sc=!1;function Py(){if(sc){const e=Array.from(Kn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Vj(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}sc=!1,ic=!1,Kn.forEach(e=>e.complete()),Kn.clear()}function Ey(){Kn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(sc=!0)})}function Fj(){Ey(),Py()}class Yd{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Kn.add(this),ic||(ic=!0,q.read(Ey),q.resolveKeyframes(Py))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Kn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Kn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ay=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Oj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zj(e){const t=Oj.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Dy(e,t,n=1){const[r,i]=zj(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Ay(o)?parseFloat(o):o}return Ad(i)?Dy(i,t,n+1):i}const Ry=e=>t=>t.test(e),Uj={test:e=>e==="auto",parse:e=>e},Ly=[ri,_,At,nn,Lk,Rk,Uj],Xp=e=>Ly.find(Ry(e));class Iy extends Yd{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),Ad(c))){const d=Dy(c,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!uy.has(r)||t.length!==2)return;const[i,s]=t,o=Xp(i),a=Xp(s);if(o!==a)if(Kp(o)&&Kp(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)xj(t[i])&&r.push(i);r.length&&Bj(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Qr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Zp=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(bn.test(e)||e==="0")&&!e.startsWith("url("));function Hj(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Wj(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Zp(i,t),a=Zp(s,t);return!o||!a?!1:Hj(e)||(n==="spring"||$d(n))&&r}const Gj=e=>e!==null;function Ga(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Gj),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const Kj=40;class My{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Dt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Kj?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Fj(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Dt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Wj(t,r,i,s))if(o)this.options.duration=0;else{l&&l(Ga(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function El(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Yj({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=El(l,a,e+1/3),s=El(l,a,e),o=El(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function pa(e,t){return n=>n>0?t:e}const Al=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Qj=[nc,zn,kr],Xj=e=>Qj.find(t=>t.test(e));function Jp(e){const t=Xj(e);if(!t)return!1;let n=t.parse(e);return t===kr&&(n=Yj(n)),n}const qp=(e,t)=>{const n=Jp(e),r=Jp(t);if(!n||!r)return pa(e,t);const i={...n};return s=>(i.red=Al(n.red,r.red,s),i.green=Al(n.green,r.green,s),i.blue=Al(n.blue,r.blue,s),i.alpha=oe(n.alpha,r.alpha,s),zn.transform(i))},Zj=(e,t)=>n=>t(e(n)),Ss=(...e)=>e.reduce(Zj),oc=new Set(["none","hidden"]);function Jj(e,t){return oc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function qj(e,t){return n=>oe(e,t,n)}function Qd(e){return typeof e=="number"?qj:typeof e=="string"?Ad(e)?pa:Ee.test(e)?qp:nC:Array.isArray(e)?_y:typeof e=="object"?Ee.test(e)?qp:eC:pa}function _y(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Qd(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function eC(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Qd(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function tC(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const nC=(e,t)=>{const n=bn.createTransformer(t),r=cs(e),i=cs(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?oc.has(e)&&!i.values.length||oc.has(t)&&!r.values.length?Jj(e,t):Ss(_y(tC(r,i),i.values),n):pa(e,t)};function By(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):Qd(e)(e,t)}const rC=5;function $y(e,t,n){const r=Math.max(t-rC,0);return cy(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Dl=.001;function iC({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,s,o=1-t;o=Ht(ue.minDamping,ue.maxDamping,o),e=Ht(ue.minDuration,ue.maxDuration,Vt(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,g=ac(c,o),x=Math.exp(-f);return Dl-p/g*x},s=c=>{const f=c*o*e,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*e,x=Math.exp(-f),y=ac(Math.pow(c,2),o);return(-i(c)+Dl>0?-1:1)*((p-g)*x)/y}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-Dl+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,l=oC(i,s,a);if(e=Nt(e),isNaN(l))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const sC=12;function oC(e,t,n){let r=n;for(let i=1;i<sC;i++)r=r-e(r)/t(r);return r}function ac(e,t){return e*Math.sqrt(1-t*t)}const aC=["duration","bounce"],lC=["stiffness","damping","mass"];function eh(e,t){return t.some(n=>e[n]!==void 0)}function uC(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!eh(e,lC)&&eh(e,aC))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Ht(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:s}}else{const n=iC(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Ny(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:g}=uC({...n,velocity:-Vt(n.velocity||0)}),x=p||0,y=c/(2*Math.sqrt(l*d)),k=o-s,m=Vt(Math.sqrt(l/d)),h=Math.abs(k)<5;r||(r=h?ue.restSpeed.granular:ue.restSpeed.default),i||(i=h?ue.restDelta.granular:ue.restDelta.default);let v;if(y<1){const j=ac(m,y);v=b=>{const T=Math.exp(-y*m*b);return o-T*((x+y*m*k)/j*Math.sin(j*b)+k*Math.cos(j*b))}}else if(y===1)v=j=>o-Math.exp(-m*j)*(k+(x+m*k)*j);else{const j=m*Math.sqrt(y*y-1);v=b=>{const T=Math.exp(-y*m*b),P=Math.min(j*b,300);return o-T*((x+y*m*k)*Math.sinh(P)+j*k*Math.cosh(P))/j}}const C={calculatedDuration:g&&f||null,next:j=>{const b=v(j);if(g)a.done=j>=f;else{let T=0;y<1&&(T=j===0?Nt(x):$y(v,j,b));const P=Math.abs(T)<=r,L=Math.abs(o-b)<=i;a.done=P&&L}return a.value=a.done?o:b,a},toString:()=>{const j=Math.min(ny(C),qu),b=ry(T=>C.next(j*T).value,j,30);return j+"ms "+b}};return C}function th({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=P=>a!==void 0&&P<a||l!==void 0&&P>l,x=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*t;const k=f+y,m=o===void 0?k:o(k);m!==k&&(y=m-f);const h=P=>-y*Math.exp(-P/r),v=P=>m+h(P),C=P=>{const L=h(P),R=v(P);p.done=Math.abs(L)<=c,p.value=p.done?m:R};let j,b;const T=P=>{g(p.value)&&(j=P,b=Ny({keyframes:[p.value,x(p.value)],velocity:$y(v,P,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return T(0),{calculatedDuration:null,next:P=>{let L=!1;return!b&&j===void 0&&(L=!0,C(P),T(P)),j!==void 0&&P>=j?b.next(P-j):(!L&&C(P),p)}}}const cC=ws(.42,0,1,1),dC=ws(0,0,.58,1),Vy=ws(.42,0,.58,1),fC=e=>Array.isArray(e)&&typeof e[0]!="number",pC={linear:Je,easeIn:cC,easeInOut:Vy,easeOut:dC,circIn:Hd,circInOut:xy,circOut:yy,backIn:Ud,backInOut:gy,backOut:my,anticipate:vy},nh=e=>{if(Nd(e)){Bv(e.length===4);const[t,n,r,i]=e;return ws(t,n,r,i)}else if(typeof e=="string")return pC[e];return e};function hC(e,t,n){const r=[],i=n||By,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Je:t;a=Ss(l,a)}r.push(a)}return r}function mC(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Bv(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=hC(t,r,i),l=a.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Kr(e[f],e[f+1],d);return a[f](p)};return n?d=>c(Ht(e[0],e[s-1],d)):c}function gC(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Kr(0,t,r);e.push(oe(n,1,i))}}function vC(e){const t=[0];return gC(t,e.length-1),t}function yC(e,t){return e.map(n=>n*t)}function xC(e,t){return e.map(()=>t||Vy).splice(0,e.length-1)}function ha({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=fC(r)?r.map(nh):nh(r),s={done:!1,value:t[0]},o=yC(n&&n.length===t.length?n:vC(t),e),a=mC(o,t,{ease:Array.isArray(i)?i:xC(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const wC=e=>{const t=({timestamp:n})=>e(n);return{start:()=>q.update(t,!0),stop:()=>Cn(t),now:()=>ke.isProcessing?ke.timestamp:Dt.now()}},SC={decay:th,inertia:th,tween:ha,keyframes:ha,spring:Ny},kC=e=>e/100;class Xd extends My{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Yd,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=$d(n)?n:SC[n]||ha;let l,c;a!==ha&&typeof t[0]!="number"&&(l=Ss(kC,By(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=ny(d));const{calculatedDuration:f}=d,p=f+i,g=p*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:g,repeatType:x,repeatDelay:y,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,C=s;if(g){const P=Math.min(this.currentTime,d)/f;let L=Math.floor(P),R=P%1;!R&&P>=1&&(R=1),R===1&&L--,L=Math.min(L,g+1),!!(L%2)&&(x==="reverse"?(R=1-R,y&&(R-=y/f)):x==="mirror"&&(C=o)),v=Ht(0,1,R)*f}const j=h?{done:!1,value:l[0]}:C.next(v);a&&(j.value=a(j.value));let{done:b}=j;!h&&c!==null&&(b=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return T&&i!==void 0&&(j.value=Ga(l,this.options,i)),k&&k(j.value),T&&this.finish(),j}get duration(){const{resolved:t}=this;return t?Vt(t.calculatedDuration):0}get time(){return Vt(this.currentTime)}set time(t){t=Nt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Vt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=wC,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const jC=new Set(["opacity","clipPath","filter","transform"]);function CC(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=sy(a,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const bC=kd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ma=10,TC=2e4;function PC(e){return $d(e.type)||e.type==="spring"||!iy(e.ease)}function EC(e,t){const n=new Xd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<TC;)r=n.sample(s),i.push(r.value),s+=ma;return{times:void 0,keyframes:i,duration:s-ma,ease:"linear"}}const Fy={anticipate:vy,backInOut:gy,circInOut:xy};function AC(e){return e in Fy}class rh extends My{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Iy(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&fa()&&AC(s)&&(s=Fy[s]),PC(this.options)){const{onComplete:f,onUpdate:p,motionValue:g,element:x,...y}=this.options,k=EC(t,y);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,s=k.ease,o="keyframes"}const d=CC(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Op(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;a.set(Ga(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Vt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Vt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Nt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Je;const{animation:r}=n;Op(r,t)}return Je}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:p,...g}=this.options,x=new Xd({...g,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),y=Nt(this.time);c.setWithVelocity(x.sample(y-ma).value,x.sample(y).value,ma)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return bC()&&r&&jC.has(r)&&!l&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const DC={type:"spring",stiffness:500,damping:25,restSpeed:10},RC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),LC={type:"keyframes",duration:.8},IC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},MC=(e,{keyframes:t})=>t.length>2?LC:ir.has(e)?e.startsWith("scale")?RC(t[1]):DC:IC;function _C({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Zd=(e,t,n,r={},i,s)=>o=>{const a=Bd(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Nt(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};_C(a)||(d={...d,...MC(e,d)}),d.duration&&(d.duration=Nt(d.duration)),d.repeatDelay&&(d.repeatDelay=Nt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=Ga(d.keyframes,a);if(p!==void 0)return q.update(()=>{d.onUpdate(p),d.onComplete()}),new ej([])}return!s&&rh.supports(d)?new rh(d):new Xd(d)};function BC({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Oy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),g=l[f];if(g===void 0||d&&BC(d,f))continue;const x={delay:n,...Bd(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const m=dy(e);if(m){const h=window.MotionHandoffAnimation(m,f,q);h!==null&&(x.startTime=h,y=!0)}}tc(e,f),p.start(Zd(f,p,g,e.shouldReduceMotion&&uy.has(f)?{type:!1}:x,e,y));const k=p.animation;k&&c.push(k)}return a&&Promise.all(c).then(()=>{q.update(()=>{a&&hj(e,a)})}),c}function lc(e,t,n={}){var r;const i=Wa(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(Oy(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return $C(e,t,d+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,d]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>d())}else return Promise.all([o(),a(n.delay)])}function $C(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(NC).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(lc(c,t,{...s,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function NC(e,t){return e.sortNodePosition(t)}function VC(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>lc(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=lc(e,t,n);else{const i=typeof t=="function"?Wa(e,t,n.custom):t;r=Promise.all(Oy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const FC=Cd.length;function zy(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?zy(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<FC;n++){const r=Cd[n],i=e.props[r];(as(i)||i===!1)&&(t[r]=i)}return t}const OC=[...jd].reverse(),zC=jd.length;function UC(e){return t=>Promise.all(t.map(({animation:n,options:r})=>VC(e,n,r)))}function HC(e){let t=UC(e),n=ih(),r=!0;const i=l=>(c,d)=>{var f;const p=Wa(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:x,...y}=p;c={...c,...y,...x}}return c};function s(l){t=l(e)}function o(l){const{props:c}=e,d=zy(e.parent)||{},f=[],p=new Set;let g={},x=1/0;for(let k=0;k<zC;k++){const m=OC[k],h=n[m],v=c[m]!==void 0?c[m]:d[m],C=as(v),j=m===l?h.isActive:null;j===!1&&(x=k);let b=v===d[m]&&v!==c[m]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...g},!h.isActive&&j===null||!v&&!h.prevProp||Ua(v)||typeof v=="boolean")continue;const T=WC(h.prevProp,v);let P=T||m===l&&h.isActive&&!b&&C||k>x&&C,L=!1;const R=Array.isArray(v)?v:[v];let H=R.reduce(i(m),{});j===!1&&(H={});const{prevResolvedValues:He={}}=h,Ie={...He,...H},ft=N=>{P=!0,p.has(N)&&(L=!0,p.delete(N)),h.needsAnimating[N]=!0;const A=e.getValue(N);A&&(A.liveStyle=!1)};for(const N in Ie){const A=H[N],I=He[N];if(g.hasOwnProperty(N))continue;let M=!1;Ju(A)&&Ju(I)?M=!ty(A,I):M=A!==I,M?A!=null?ft(N):p.add(N):A!==void 0&&p.has(N)?ft(N):h.protectedKeys[N]=!0}h.prevProp=v,h.prevResolvedValues=H,h.isActive&&(g={...g,...H}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(b&&T)||L)&&f.push(...R.map(N=>({animation:N,options:{type:m}})))}if(p.size){const k={};p.forEach(m=>{const h=e.getBaseTarget(m),v=e.getValue(m);v&&(v.liveStyle=!0),k[m]=h??null}),f.push({animation:k})}let y=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=ih(),r=!0}}}function WC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ty(t,e):!1}function Rn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ih(){return{animate:Rn(!0),whileInView:Rn(),whileHover:Rn(),whileTap:Rn(),whileDrag:Rn(),whileFocus:Rn(),exit:Rn()}}class An{constructor(t){this.isMounted=!1,this.node=t}update(){}}class GC extends An{constructor(t){super(t),t.animationState||(t.animationState=HC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ua(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let KC=0;class YC extends An{constructor(){super(...arguments),this.id=KC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const QC={animation:{Feature:GC},exit:{Feature:YC}};function ds(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ks(e){return{point:{x:e.pageX,y:e.pageY}}}const XC=e=>t=>Vd(t)&&e(t,ks(t));function $i(e,t,n,r){return ds(e,t,XC(n),r)}const sh=(e,t)=>Math.abs(e-t);function ZC(e,t){const n=sh(e.x,t.x),r=sh(e.y,t.y);return Math.sqrt(n**2+r**2)}class Uy{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ll(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=ZC(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:x}=f,{timestamp:y}=ke;this.history.push({...x,timestamp:y});const{onStart:k,onMove:m}=this.handlers;p||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Rl(p,this.transformPagePoint),q.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Ll(f.type==="pointercancel"?this.lastMoveEventInfo:Rl(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,k),x&&x(f,k)},!Vd(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=ks(t),a=Rl(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=ke;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Ll(a,this.history)),this.removeListeners=Ss($i(this.contextWindow,"pointermove",this.handlePointerMove),$i(this.contextWindow,"pointerup",this.handlePointerUp),$i(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Cn(this.updatePoint)}}function Rl(e,t){return t?{point:t(e.point)}:e}function oh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ll({point:e},t){return{point:e,delta:oh(e,Hy(t)),offset:oh(e,JC(t)),velocity:qC(t,.1)}}function JC(e){return e[0]}function Hy(e){return e[e.length-1]}function qC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Hy(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Nt(t)));)n--;if(!r)return{x:0,y:0};const s=Vt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Wy=1e-4,eb=1-Wy,tb=1+Wy,Gy=.01,nb=0-Gy,rb=0+Gy;function et(e){return e.max-e.min}function ib(e,t,n){return Math.abs(e-t)<=n}function ah(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=et(n)/et(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=eb&&e.scale<=tb||isNaN(e.scale))&&(e.scale=1),(e.translate>=nb&&e.translate<=rb||isNaN(e.translate))&&(e.translate=0)}function Ni(e,t,n,r){ah(e.x,t.x,n.x,r?r.originX:void 0),ah(e.y,t.y,n.y,r?r.originY:void 0)}function lh(e,t,n){e.min=n.min+t.min,e.max=e.min+et(t)}function sb(e,t,n){lh(e.x,t.x,n.x),lh(e.y,t.y,n.y)}function uh(e,t,n){e.min=t.min-n.min,e.max=e.min+et(t)}function Vi(e,t,n){uh(e.x,t.x,n.x),uh(e.y,t.y,n.y)}function ob(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function ch(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function ab(e,{top:t,left:n,bottom:r,right:i}){return{x:ch(e.x,n,i),y:ch(e.y,t,r)}}function dh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function lb(e,t){return{x:dh(e.x,t.x),y:dh(e.y,t.y)}}function ub(e,t){let n=.5;const r=et(e),i=et(t);return i>r?n=Kr(t.min,t.max-r,e.min):r>i&&(n=Kr(e.min,e.max-i,t.min)),Ht(0,1,n)}function cb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const uc=.35;function db(e=uc){return e===!1?e=0:e===!0&&(e=uc),{x:fh(e,"left","right"),y:fh(e,"top","bottom")}}function fh(e,t,n){return{min:ph(e,t),max:ph(e,n)}}function ph(e,t){return typeof e=="number"?e:e[t]||0}const hh=()=>({translate:0,scale:1,origin:0,originPoint:0}),jr=()=>({x:hh(),y:hh()}),mh=()=>({min:0,max:0}),de=()=>({x:mh(),y:mh()});function it(e){return[e("x"),e("y")]}function Ky({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function fb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function pb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Il(e){return e===void 0||e===1}function cc({scale:e,scaleX:t,scaleY:n}){return!Il(e)||!Il(t)||!Il(n)}function Bn(e){return cc(e)||Yy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Yy(e){return gh(e.x)||gh(e.y)}function gh(e){return e&&e!=="0%"}function ga(e,t,n){const r=e-n,i=t*r;return n+i}function vh(e,t,n,r,i){return i!==void 0&&(e=ga(e,i,r)),ga(e,n,r)+t}function dc(e,t=0,n=1,r,i){e.min=vh(e.min,t,n,r,i),e.max=vh(e.max,t,n,r,i)}function Qy(e,{x:t,y:n}){dc(e.x,t.translate,t.scale,t.originPoint),dc(e.y,n.translate,n.scale,n.originPoint)}const yh=.999999999999,xh=1.0000000000001;function hb(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&br(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Qy(e,o)),r&&Bn(s.latestValues)&&br(e,s.latestValues))}t.x<xh&&t.x>yh&&(t.x=1),t.y<xh&&t.y>yh&&(t.y=1)}function Cr(e,t){e.min=e.min+t,e.max=e.max+t}function wh(e,t,n,r,i=.5){const s=oe(e.min,e.max,i);dc(e,t,n,s,r)}function br(e,t){wh(e.x,t.x,t.scaleX,t.scale,t.originX),wh(e.y,t.y,t.scaleY,t.scale,t.originY)}function Xy(e,t){return Ky(pb(e.getBoundingClientRect(),t))}function mb(e,t,n){const r=Xy(e,n),{scroll:i}=t;return i&&(Cr(r.x,i.offset.x),Cr(r.y,i.offset.y)),r}const Zy=({current:e})=>e?e.ownerDocument.defaultView:null,gb=new WeakMap;class vb{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ks(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:x}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uj(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),it(k=>{let m=this.getAxisMotionValue(k).get()||0;if(At.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[k];v&&(m=et(v)*(parseFloat(m)/100))}}this.originPoint[k]=m}),x&&q.postRender(()=>x(d,f)),tc(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:k}=f;if(g&&this.currentDirection===null){this.currentDirection=yb(k),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),y&&y(d,f)},a=(d,f)=>this.stop(d,f),l=()=>it(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Uy(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Zy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&q.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Gs(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=ob(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Sr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=ab(i.layoutBox,n):this.constraints=!1,this.elastic=db(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&it(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=cb(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Sr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=mb(r,i.root,this.visualElement.getTransformPagePoint());let o=lb(i.layout.layoutBox,s);if(n){const a=n(fb(o));this.hasMutatedConstraints=!!a,a&&(o=Ky(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=it(d=>{if(!Gs(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return tc(this.visualElement,t),r.start(Zd(t,r,0,n,this.visualElement,!1))}stopAnimation(){it(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){it(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){it(n=>{const{drag:r}=this.getProps();if(!Gs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-oe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Sr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};it(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=ub({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),it(o=>{if(!Gs(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(oe(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;gb.set(this.visualElement,this);const t=this.visualElement.current,n=$i(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Sr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),q.read(r);const o=ds(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(it(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=uc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Gs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function yb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class xb extends An{constructor(t){super(t),this.removeGroupControls=Je,this.removeListeners=Je,this.controls=new vb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Je}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sh=e=>(t,n)=>{e&&q.postRender(()=>e(t,n))};class wb extends An{constructor(){super(...arguments),this.removePointerDownListener=Je}onPointerDown(t){this.session=new Uy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Sh(t),onStart:Sh(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&q.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=$i(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Io={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function kh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=kh(e,t.target.x),r=kh(e,t.target.y);return`${n}% ${r}%`}},Sb={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=bn.parse(e);if(i.length>5)return r;const s=bn.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const c=oe(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class kb extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;zk(jb),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Io.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||q.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Td.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Jy(e){const[t,n]=Mv(),r=S.useContext(yd);return u.jsx(kb,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(zv),isPresent:t,safeToRemove:n})}const jb={borderRadius:{...hi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hi,borderTopRightRadius:hi,borderBottomLeftRadius:hi,borderBottomRightRadius:hi,boxShadow:Sb};function Cb(e,t,n){const r=Re(e)?e:us(e);return r.start(Zd("",r,t,n)),r.animation}function bb(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Tb=(e,t)=>e.depth-t.depth;class Pb{constructor(){this.children=[],this.isDirty=!1}add(t){Fd(this.children,t),this.isDirty=!0}remove(t){Od(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Tb),this.isDirty=!1,this.children.forEach(t)}}function Eb(e,t){const n=Dt.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Cn(r),e(s-t))};return q.read(r,!0),()=>Cn(r)}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],Ab=qy.length,jh=e=>typeof e=="string"?parseFloat(e):e,Ch=e=>typeof e=="number"||_.test(e);function Db(e,t,n,r,i,s){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,Rb(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,Lb(r))):s&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<Ab;o++){const a=`border${qy[o]}Radius`;let l=bh(t,a),c=bh(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Ch(l)===Ch(c)?(e[a]=Math.max(oe(jh(l),jh(c),r),0),(At.test(c)||At.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function bh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Rb=ex(0,.5,yy),Lb=ex(.5,.95,Je);function ex(e,t,n){return r=>r<e?0:r>t?1:n(Kr(e,t,r))}function Th(e,t){e.min=t.min,e.max=t.max}function rt(e,t){Th(e.x,t.x),Th(e.y,t.y)}function Ph(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Eh(e,t,n,r,i){return e-=t,e=ga(e,1/n,r),i!==void 0&&(e=ga(e,1/i,r)),e}function Ib(e,t=0,n=1,r=.5,i,s=e,o=e){if(At.test(t)&&(t=parseFloat(t),t=oe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=oe(s.min,s.max,r);e===s&&(a-=t),e.min=Eh(e.min,t,n,a,i),e.max=Eh(e.max,t,n,a,i)}function Ah(e,t,[n,r,i],s,o){Ib(e,t[n],t[r],t[i],t.scale,s,o)}const Mb=["x","scaleX","originX"],_b=["y","scaleY","originY"];function Dh(e,t,n,r){Ah(e.x,t,Mb,n?n.x:void 0,r?r.x:void 0),Ah(e.y,t,_b,n?n.y:void 0,r?r.y:void 0)}function Rh(e){return e.translate===0&&e.scale===1}function tx(e){return Rh(e.x)&&Rh(e.y)}function Lh(e,t){return e.min===t.min&&e.max===t.max}function Bb(e,t){return Lh(e.x,t.x)&&Lh(e.y,t.y)}function Ih(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function nx(e,t){return Ih(e.x,t.x)&&Ih(e.y,t.y)}function Mh(e){return et(e.x)/et(e.y)}function _h(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class $b{constructor(){this.members=[]}add(t){Fd(this.members,t),t.scheduleRender()}remove(t){if(Od(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Nb(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:p,skewX:g,skewY:x}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const $n={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},bi=typeof window<"u"&&window.MotionDebug!==void 0,Ml=["","X","Y","Z"],Vb={visibility:"hidden"},Bh=1e3;let Fb=0;function _l(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function rx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=dy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",q,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&rx(r)}function ix({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=Fb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bi&&($n.totalNodes=$n.resolvedTargetDeltas=$n.recalculatedProjection=0),this.nodes.forEach(Ub),this.nodes.forEach(Yb),this.nodes.forEach(Qb),this.nodes.forEach(Hb),bi&&window.MotionDebug.record($n)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Pb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new zd),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=bb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Eb(p,250),Io.hasAnimatedSinceResize&&(Io.hasAnimatedSinceResize=!1,this.nodes.forEach(Nh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||eT,{onLayoutAnimationStart:k,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!nx(this.targetLayout,x)||g,v=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const C={...Bd(y,"layout"),onPlay:k,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else p||Nh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Xb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($h);return}this.isUpdating||this.nodes.forEach(Gb),this.isUpdating=!1,this.nodes.forEach(Kb),this.nodes.forEach(Ob),this.nodes.forEach(zb),this.clearAllSnapshots();const a=Dt.now();ke.delta=Ht(0,1e3/60,a-ke.timestamp),ke.timestamp=a,ke.isProcessing=!0,bl.update.process(ke),bl.preRender.process(ke),bl.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Td.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Wb),this.sharedNodes.forEach(Zb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=de(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!tx(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||Bn(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),tT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return de();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(nT))){const{scroll:d}=this.root;d&&(Cr(l.x,d.offset.x),Cr(l.y,d.offset.y))}return l}removeElementScroll(o){var a;const l=de();if(rt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&rt(l,o),Cr(l.x,f.offset.x),Cr(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=de();rt(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&br(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Bn(d.latestValues)&&br(l,d.latestValues)}return Bn(this.latestValues)&&br(l,this.latestValues),l}removeTransform(o){const a=de();rt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Bn(c.latestValues))continue;cc(c.latestValues)&&c.updateSnapshot();const d=de(),f=c.measurePageBox();rt(d,f),Dh(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Bn(this.latestValues)&&Dh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=ke.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Vi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rt(this.target,this.layout.layoutBox),Qy(this.target,this.targetDelta)):rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Vi(this.relativeTargetOrigin,this.target,g.target),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}bi&&$n.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||cc(this.parent.latestValues)||Yy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;rt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;hb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=de());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ph(this.prevProjectionDelta.x,this.projectionDelta.x),Ph(this.prevProjectionDelta.y,this.projectionDelta.y)),Ni(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!_h(this.projectionDelta.x,this.prevProjectionDelta.x)||!_h(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),bi&&$n.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=jr(),this.projectionDelta=jr(),this.projectionDeltaWithTransform=jr()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=jr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=de(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,k=this.getStack(),m=!k||k.members.length<=1,h=!!(y&&!m&&this.options.crossfade===!0&&!this.path.some(qb));this.animationProgress=0;let v;this.mixTargetDelta=C=>{const j=C/1e3;Vh(f.x,o.x,j),Vh(f.y,o.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Jb(this.relativeTarget,this.relativeTargetOrigin,p,j),v&&Bb(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=de()),rt(v,this.relativeTarget)),y&&(this.animationValues=d,Db(d,c,this.latestValues,j,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=q.update(()=>{Io.hasAnimatedSinceResize=!0,this.currentAnimation=Cb(0,Bh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&sx(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||de();const f=et(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=et(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}rt(a,l),br(a,d),Ni(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new $b),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&_l("z",o,c,this.animationValues);for(let d=0;d<Ml.length;d++)_l(`rotate${Ml[d]}`,o,c,this.animationValues),_l(`skew${Ml[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Vb;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ro(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Ro(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Bn(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Nb(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:x}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in da){if(p[y]===void 0)continue;const{correct:k,applyTo:m}=da[y],h=c.transform==="none"?p[y]:k(p[y],f);if(m){const v=m.length;for(let C=0;C<v;C++)c[m[C]]=h}else c[y]=h}return this.options.layoutId&&(c.pointerEvents=f===this?Ro(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach($h),this.root.sharedNodes.clear()}}}function Ob(e){e.updateLayout()}function zb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?it(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=et(p);p.min=r[f].min,p.max=p.min+g}):sx(s,n.layoutBox,r)&&it(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=et(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=jr();Ni(a,r,n.layoutBox);const l=jr();o?Ni(l,e.applyTransform(i,!0),n.measuredBox):Ni(l,r,n.layoutBox);const c=!tx(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const x=de();Vi(x,n.layoutBox,p.layoutBox);const y=de();Vi(y,r,g.layoutBox),nx(x,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Ub(e){bi&&$n.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Hb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Wb(e){e.clearSnapshot()}function $h(e){e.clearMeasurements()}function Gb(e){e.isLayoutDirty=!1}function Kb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Nh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Yb(e){e.resolveTargetDelta()}function Qb(e){e.calcProjection()}function Xb(e){e.resetSkewAndRotation()}function Zb(e){e.removeLeadSnapshot()}function Vh(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Fh(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function Jb(e,t,n,r){Fh(e.x,t.x,n.x,r),Fh(e.y,t.y,n.y,r)}function qb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const eT={duration:.45,ease:[.4,0,.1,1]},Oh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),zh=Oh("applewebkit/")&&!Oh("chrome/")?Math.round:Je;function Uh(e){e.min=zh(e.min),e.max=zh(e.max)}function tT(e){Uh(e.x),Uh(e.y)}function sx(e,t,n){return e==="position"||e==="preserve-aspect"&&!ib(Mh(t),Mh(n),.2)}function nT(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const rT=ix({attachResizeListener:(e,t)=>ds(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Bl={current:void 0},ox=ix({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Bl.current){const e=new rT({});e.mount(window),e.setOptions({layoutScroll:!0}),Bl.current=e}return Bl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),iT={pan:{Feature:wb},drag:{Feature:xb,ProjectionNode:ox,MeasureLayout:Jy}};function Hh(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&q.postRender(()=>s(t,ks(t)))}class sT extends An{mount(){const{current:t}=this.node;t&&(this.unmount=ij(t,n=>(Hh(this.node,n,"Start"),r=>Hh(this.node,r,"End"))))}unmount(){}}class oT extends An{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ss(ds(this.node.current,"focus",()=>this.onFocus()),ds(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Wh(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&q.postRender(()=>s(t,ks(t)))}class aT extends An{mount(){const{current:t}=this.node;t&&(this.unmount=lj(t,n=>(Wh(this.node,n,"Start"),(r,{success:i})=>Wh(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const fc=new WeakMap,$l=new WeakMap,lT=e=>{const t=fc.get(e.target);t&&t(e)},uT=e=>{e.forEach(lT)};function cT({root:e,...t}){const n=e||document;$l.has(n)||$l.set(n,{});const r=$l.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(uT,{root:e,...t})),r[i]}function dT(e,t,n){const r=cT(t);return fc.set(e,n),r.observe(e),()=>{fc.delete(e),r.unobserve(e)}}const fT={some:0,all:1};class pT extends An{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:fT[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(l)};return dT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(hT(t,n))&&this.startObserver()}unmount(){}}function hT({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const mT={inView:{Feature:pT},tap:{Feature:aT},focus:{Feature:oT},hover:{Feature:sT}},gT={layout:{ProjectionNode:ox,MeasureLayout:Jy}},pc={current:null},ax={current:!1};function vT(){if(ax.current=!0,!!Sd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>pc.current=e.matches;e.addListener(t),t()}else pc.current=!1}const yT=[...Ly,Ee,bn],xT=e=>yT.find(Ry(e)),Gh=new WeakMap;function wT(e,t,n){for(const r in t){const i=t[r],s=n[r];if(Re(i))e.addValue(r,i);else if(Re(s))e.addValue(r,us(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,us(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Kh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ST{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Yd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Dt.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,q.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ha(n),this.isVariantNode=Fv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const x=p[g];l[g]!==void 0&&Re(x)&&x.set(l[g],!1)}}mount(t){this.current=t,Gh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),ax.current||vT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:pc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Gh.delete(this.current),this.projection&&this.projection.unmount(),Cn(this.notifyUpdate),Cn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ir.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&q.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Yr){const n=Yr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Kh.length;r++){const i=Kh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=wT(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=us(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Ay(i)||wy(i))?i=parseFloat(i):!xT(i)&&bn.test(n)&&(i=Ty(t,n)),this.setBaseTarget(t,Re(i)?i.get():i)),Re(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Ed(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Re(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new zd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class lx extends ST{constructor(){super(...arguments),this.KeyframeResolver=Iy}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Re(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function kT(e){return window.getComputedStyle(e)}class jT extends lx{constructor(){super(...arguments),this.type="html",this.renderInstance=Qv}readValueFromInstance(t,n){if(ir.has(n)){const r=Kd(n);return r&&r.default||0}else{const r=kT(t),i=(Gv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Xy(t,n)}build(t,n,r){Rd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return _d(t,n,r)}}class CT extends lx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=de}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ir.has(n)){const r=Kd(n);return r&&r.default||0}return n=Xv.has(n)?n:bd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return qv(t,n,r)}build(t,n,r){Ld(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Zv(t,n,r,i)}mount(t){this.isSVGTag=Md(t.tagName),super.mount(t)}}const bT=(e,t)=>Pd(e)?new CT(t):new jT(t,{allowProjection:e!==S.Fragment}),TT=Zk({...QC,...mT,...iT,...gT},bT),ee=fk(TT),PT=w(ee.nav)`
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
`,ET=w.div`
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
`,AT=w(sv)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,DT=w.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,RT=w.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,LT=w(ee.button)`
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
`,IT=w(ee.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,MT=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),_T=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),BT=()=>{const{isDark:e,toggleTheme:t}=av();return u.jsx(PT,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:u.jsxs(ET,{children:[u.jsx(AT,{to:"/","aria-label":"Go to homepage",children:u.jsx(DT,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),u.jsx(RT,{}),u.jsx(LT,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:u.jsx(Gr,{mode:"wait",children:u.jsx(IT,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?u.jsx(_T,{}):u.jsx(MT,{})},e?"moon":"sun")})})]})})},Jd=w.div`
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
`;const $T=w(ee.div)`
  position: relative;
`,NT=w(sv)`
  display: block;
  text-decoration: none;
  color: inherit;
`,ux=w(ee.div)`
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
`,VT=w(ee.div)`
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

  ${ux}:hover &::before {
    opacity: 0.3;
  }
`,FT=w.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,OT={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},zT={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},UT=({title:e,icon:t,to:n})=>u.jsx($T,{variants:OT,whileHover:"hover",whileTap:"tap",children:u.jsx(NT,{to:n,children:u.jsxs(ux,{variants:zT,children:[u.jsx(VT,{children:t}),u.jsx(FT,{children:e})]})})}),HT=w.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl) 0;
  padding-top: calc(var(--space-2xl) + 80px);

  @media (max-width: 640px) {
    padding-top: var(--space-xl);
    padding-bottom: calc(var(--space-xl) + 80px);
  }
`,WT=w(ee.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--space-lg);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
  }

  @media (min-width: 1280px) {
    gap: var(--space-xl);
  }
`,GT={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},KT=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),u.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),u.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),u.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),u.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),u.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),u.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),u.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),u.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),u.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),YT=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),u.jsx("path",{d:"M1 10h22"}),u.jsx("path",{d:"M17 14h.01"})]}),QT=[{id:"tax-calculator",title:"Tax Calculator",icon:u.jsx(KT,{}),to:"/tax-calculator"},{id:"expense-manager",title:"Expense Manager",icon:u.jsx(YT,{}),to:"/expense-manager"}],XT=()=>u.jsx(HT,{children:u.jsx(Jd,{children:u.jsx(WT,{variants:GT,initial:"hidden",animate:"visible",children:QT.map(e=>u.jsx(UT,{title:e.title,icon:e.icon,to:e.to},e.id))})})}),Mo=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Yh=75e3,Tr=4,ZT=12e5,JT=6e4,Qh=5e6,Xh=10,qT=12,eP=1800;function Yn(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const s=r.slice(-3),o=r.slice(0,-3);if(o.length>0){const a=[];let l=o;for(;l.length>0;)l.length>=2?(a.unshift(l.slice(-2)),l=l.slice(0,-2)):(a.unshift(l),l="");i=a.join(",")+","+s}else i=s;return(t?"-":"")+i}function V(e){return"₹"+Yn(e)}function Q(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,s]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+Yn(parseInt(i))+"."+s}function Zh(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:Yn(e)}function tP(e){for(let t=Mo.length-1;t>=0;t--)if(e>Mo[t].from)return Mo[t].rate;return 0}function nP(e){const t=[];let n=e,r=0;for(const i of Mo){const s=i.from,a=(i.to??1/0)-s;if(n<=0){t.push({from:s,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const l=Math.min(n,a),c=l*i.rate/100;t.push({from:s,to:i.to,rate:i.rate,taxableInSlab:l>0?l:0,taxInSlab:c}),r+=c,n-=l}return{slabs:t,totalTax:r}}function rP(e,t){if(t>Qh){const r=e*(1+Xh/100)*(1+Tr/100),i=t-Qh,o=(e+i)*(1+Tr/100),a=o<r,l=Math.min(r,o),c=l/(1+Tr/100),d=c-e,f=l-c;return{surchargeApplicable:!0,surchargeRate:Xh,surchargeAmount:d,marginalReliefApplied:a,taxAfterSurcharge:c,cess:f,totalTax:l}}else{const n=e*(Tr/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function Jh(e,t,n,r,i,s,o){const a=e*t/100,l=e-a;let c=0;i==="percentage"?c=e*s/100:i==="amount"&&(c=s);const d=e+c;let f=0,p=0;n&&(r==="percentage"?(f=a*qT/100,p=f):(f=eP*12,p=f));const g=e-p,x=o.map(be=>({name:be.name,amount:be.amount*12})),y=x.reduce((be,We)=>be+We.amount,0),k=Math.max(0,g-Yh),{slabs:m,totalTax:h}=nP(k);let v=0,C=h;k<=ZT&&(v=Math.min(h,JT),C=Math.max(0,h-v));const{surchargeApplicable:j,surchargeRate:b,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cess:R,totalTax:H}=rP(C,k),He=f+p,Ie=H,ft=f+H+y,B=g-f-H-y,K=B/12,N=g>0?H/g*100:0,A=tP(k);let I=0,M=c;if(c>0&&A>0){let be=c*A/100;j&&(be=be*(1+b/100)),I=be*(1+Tr/100),M=c-I}const z=B+M,W=z/12;return{baseSalary:e,basicSalary:a,hra:l,bonus:c,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:g,standardDeduction:Yh,additionalDeductions:x,totalAdditionalDeductions:y,taxableIncome:k,slabs:m,taxBeforeSurcharge:h,surchargeApplicable:j,surchargeRate:b,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cessRate:Tr,cess:R,totalTax:H,rebate87A:v,totalPFDeduction:He,totalTaxDeduction:Ie,totalDeductions:ft,netSalaryYearly:B,netSalaryMonthly:K,effectiveTaxRate:N,bonusTaxRate:A,bonusTaxAmount:I,bonusAfterTax:M,totalIncomeYearly:z,totalIncomeMonthly:W}}function iP(e){const t=Jh(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=Jh(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const qd="taxCalculatorInput";function sP(e){localStorage.setItem(qd,JSON.stringify(e))}function oP(){localStorage.removeItem(qd)}function cx(){const e=localStorage.getItem(qd);if(e)try{return JSON.parse(e)}catch{return null}return null}const aP={financialYear:"FY 2025-26"},lP=w(ee.div)`
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
`,mi=w(ee.div)`
  padding: var(--space-xs) 0;
`,gi=w.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`,uP=w.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,ar=w.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,qh=w.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
`,Ln=w.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px; /* Prevents iOS auto-zoom on focus */
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

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Nl=w.div`
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
`,Vl=w.div`
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
`,em=w.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`,vi=w.button`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--timing-small) var(--ease-standard);
  white-space: nowrap;

  &:hover {
    background: ${({$active:e})=>e?"var(--accent-hover)":"var(--glass-bg-hover)"};
    border-color: ${({$active:e})=>e?"var(--accent-hover)":"var(--border-hover)"};
  }
`,cP=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,Fl=w(ee.div)`
  display: flex;
  gap: var(--space-sm);
  align-items: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`,Ol=w.button`
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
  transition: all var(--timing-small) var(--ease-standard);
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 100, 100, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,dP=w.button`
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
  transition: all var(--timing-small) var(--ease-standard);

  &:hover {
    background: rgba(var(--accent-rgb), 0.15);
    border-color: var(--accent);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,fP=w.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,pP=w(ee.button)`
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
`,hP=w(ee.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
    border-color: var(--border-hover);
    color: var(--text-primary);
  }
`,Ks=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,mP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),zl=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function Ul(e){const t=e.replace(/[^\d]/g,"");return t?Yn(parseInt(t)):""}function Ys(e){return parseInt(e.replace(/,/g,""))||0}const gP=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=S.useState(""),[s,o]=S.useState("50"),[a,l]=S.useState("percentage"),[c,d]=S.useState("none"),[f,p]=S.useState(""),[g,x]=S.useState([]),[y,k]=S.useState(""),[m,h]=S.useState(!1),v=S.useRef(!1);S.useEffect(()=>{const B=cx();B&&(i(Yn(B.baseSalary)),o(B.basicPercentage.toString()),l(B.pfType),d(B.bonusType),p(B.bonusValue>0?B.bonusType==="amount"?Yn(B.bonusValue):B.bonusValue.toString():""),x(B.additionalDeductions.map(K=>({name:K.name,amount:Yn(K.amount)}))),k(B.hikePercentage>0?B.hikePercentage.toString():"")),h(!0)},[]),S.useEffect(()=>{m&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{R()},100))},[m,n,r]);const C=B=>{i(Ul(B))},j=B=>{p(Ul(B))},b=(B,K)=>{const N=[...g];N[B].amount=Ul(K),x(N)},T=()=>{x([...g,{name:"",amount:""}])},P=B=>{x(g.filter((K,N)=>N!==B))},L=(B,K)=>{const N=[...g];N[B].name=K,x(N)},R=()=>{const B={baseSalary:Ys(r),basicPercentage:parseFloat(s)||50,calculatePF:!0,pfType:a,bonusType:c,bonusValue:c==="amount"?Ys(f):parseFloat(f)||0,additionalDeductions:g.filter(K=>K.name&&K.amount).map(K=>({name:K.name,amount:Ys(K.amount)})),hikePercentage:parseFloat(y)||0};sP(B),e(B)},H=()=>{i(""),o("50"),l("percentage"),d("none"),p(""),x([]),k(""),oP(),t==null||t()},Ie=Ys(r)>0,ft=r||g.length>0||c!=="none"||y;return u.jsxs(lP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20},children:[u.jsxs(mi,{children:[u.jsx(gi,{children:"Salary Details"}),u.jsxs(uP,{children:[u.jsxs(ar,{$flex:2,children:[u.jsx(qh,{children:"Yearly Base Salary / CTC *"}),u.jsx(Nl,{children:u.jsx(Ln,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:B=>C(B.target.value)})})]}),u.jsxs(ar,{children:[u.jsx(qh,{children:"Basic %"}),u.jsx(Vl,{children:u.jsx(Ln,{type:"number",inputMode:"numeric",placeholder:"40",value:s,onChange:B=>o(B.target.value),min:"0",max:"100"})})]})]})]}),u.jsx(Ks,{}),u.jsxs(mi,{children:[u.jsx(gi,{children:"Provident Fund (PF)"}),u.jsxs(em,{children:[u.jsx(vi,{$active:a==="percentage",onClick:()=>l("percentage"),children:"12% of Basic"}),u.jsx(vi,{$active:a==="flat",onClick:()=>l("flat"),children:"Flat ₹1,800/mo"})]})]}),u.jsx(Ks,{}),u.jsxs(mi,{children:[u.jsx(gi,{children:"Bonus (Optional)"}),u.jsxs(em,{children:[u.jsx(vi,{$active:c==="none",onClick:()=>d("none"),children:"None"}),u.jsx(vi,{$active:c==="percentage",onClick:()=>d("percentage"),children:"Percentage"}),u.jsx(vi,{$active:c==="amount",onClick:()=>d("amount"),children:"Amount"})]}),u.jsx(Gr,{children:c!=="none"&&u.jsx(ee.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:u.jsxs(Fl,{children:[u.jsx(ar,{children:c==="percentage"?u.jsx(Vl,{children:u.jsx(Ln,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:B=>p(B.target.value)})}):u.jsx(Nl,{children:u.jsx(Ln,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:B=>j(B.target.value)})})}),f&&u.jsx(Ol,{onClick:()=>p(""),children:u.jsx(zl,{})})]})})})]}),u.jsx(Ks,{}),u.jsxs(mi,{children:[u.jsx(gi,{children:"Additional Monthly Deductions"}),u.jsxs(cP,{children:[u.jsx(Gr,{children:g.map((B,K)=>u.jsxs(Fl,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},children:[u.jsx(ar,{children:u.jsx(Ln,{type:"text",placeholder:"Name (e.g., Cab)",value:B.name,onChange:N=>L(K,N.target.value)})}),u.jsx(ar,{children:u.jsx(Nl,{children:u.jsx(Ln,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:B.amount,onChange:N=>b(K,N.target.value)})})}),u.jsx(Ol,{onClick:()=>P(K),children:u.jsx(zl,{})})]},K))}),u.jsxs(dP,{onClick:T,children:[u.jsx(mP,{}),"Add Deduction"]})]})]}),u.jsx(Ks,{}),u.jsxs(mi,{children:[u.jsx(gi,{children:"Hike / Appraisal (Optional)"}),u.jsxs(Fl,{style:{marginBottom:0},children:[u.jsx(ar,{children:u.jsx(Vl,{children:u.jsx(Ln,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:y,onChange:B=>k(B.target.value),min:"0",max:"200"})})}),y&&u.jsx(Ol,{onClick:()=>k(""),children:u.jsx(zl,{})})]})]}),u.jsxs(fP,{children:[u.jsx(pP,{onClick:R,disabled:!Ie,whileHover:{scale:Ie?1.02:1},whileTap:{scale:Ie?.98:1},children:"Calculate Tax"}),ft&&u.jsx(hP,{onClick:H,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})]})]})},vP=w(ee.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,tm=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Qs=w.div`
  padding: var(--space-md);
  background: ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.1)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.2)":"var(--border)"};
  border-radius: var(--radius-md);
`,Xs=w.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
`,Zs=w.div`
  font-size: ${({$large:e})=>e?"18px":"15px"};
  font-weight: 600;
  color: var(--text-primary);
`,Js=w.span`
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
`,Me=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"var(--green)":"var(--text-tertiary)"};
  margin-top: 2px;
  display: block;
`,qs=w.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-xs);
`,Hl=w.div`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,nm=w.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--green);
  margin-top: var(--space-xs);
`,Un=w(ee.div)`
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
`,rm=w(Un)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,yP=w(Un)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,xP=w(Un)`
  background: linear-gradient(135deg, rgba(var(--green-rgb), 0.12), rgba(var(--accent-rgb), 0.08));
  border-color: rgba(var(--green-rgb), 0.25);
`,In=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
`,Qt=w.h3`
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
`,ef=w(ee.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,im=w(ef)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,wP=w(ef)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,SP=w(ef)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,sm=w.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,kP=w.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,om=w.button`
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
`,am=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-sm);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xt=w.div`
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 0;
  overflow: hidden;
`,Zt=w.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jt=w.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,jP=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,lm=w(ee.div)`
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
`,qt=w.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"var(--accent)":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,CP=w(ee.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,hc=w.span`
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
`,bP=w(hc)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,Ke=w.div`
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
`,um=w.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,cm=w(ee.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,dm=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,fm=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,pm=w.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,hm=w.span`
  font-size: 11px;
  color: var(--text-secondary);
`,mm=w.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,gm=w(ee.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,vm=w.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,TP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),u.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),u.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),PP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),u.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),u.jsx("path",{d:"M12 17.5v-11"})]}),Wl=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("path",{d:"M3 9h18"}),u.jsx("path",{d:"M9 21V9"})]}),EP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),u.jsx("path",{d:"M12 8v13"}),u.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),u.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),ym=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),u.jsx("polyline",{points:"16 7 22 7 22 13"})]}),AP={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},en={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},DP=({breakdown:e})=>{var f;const[t,n]=S.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",s=Math.max(...e.slabs.map(p=>p.taxInSlab),1),o=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&o.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const a=o.reduce((p,g)=>p+g.value,0),l=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],c=l.reduce((p,g)=>p+g.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${V(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),u.jsxs(vP,{variants:AP,initial:"hidden",animate:"visible",children:[e.postHike&&u.jsxs(rm,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(ym,{}),"Base Salary (CTC)"]})}),u.jsx(im,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:V(e.baseSalary)}),u.jsx(Ke,{}),u.jsxs(qs,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(Hl,{children:V(e.postHike.baseSalary)}),u.jsxs(nm,{children:["+",V(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),u.jsxs(rm,{variants:en,children:[u.jsxs(In,{children:[u.jsxs(Qt,{children:[u.jsx(TP,{}),"In-Hand Salary (Base)"]}),u.jsxs(kP,{children:[u.jsx(om,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),u.jsx(om,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),u.jsx(im,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:Q(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsxs(qs,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(Hl,{children:Q(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),u.jsxs(nm,{children:["+",V(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&u.jsxs(yP,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(EP,{}),"Bonus Summary",e.postHike&&u.jsxs(Js,{children:["+",e.hikePercentage,"% Hike"]})]})}),u.jsx(wP,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:V(e.bonus)}),u.jsx(sm,{children:"Gross Bonus (before tax)"}),u.jsx(Ke,{}),u.jsx(qs,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),u.jsx(Hl,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:Q(e.bonusAfterTax)}),e.postHike&&u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsxs(qs,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsxs(tm,{style:{marginTop:0},children:[u.jsxs(Qs,{children:[u.jsx(Xs,{children:"Gross Bonus"}),u.jsx(Zs,{$large:!0,children:V(e.postHike.bonus)}),u.jsxs(Me,{$positive:!0,children:["+",V(e.postHike.bonus-e.bonus)]})]}),u.jsxs(Qs,{$highlight:!0,children:[u.jsx(Xs,{children:"In-Hand Bonus"}),u.jsx(Zs,{$large:!0,children:Q(e.postHike.bonusAfterTax)}),u.jsxs(Me,{$positive:!0,children:["+",V(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),u.jsx(Ke,{}),u.jsxs(am,{children:[u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Tax Rate"}),u.jsxs(Jt,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Tax Deducted"}),u.jsxs(Jt,{style:{color:"#e05555"},children:["-",Q(e.bonusTaxAmount)]})]})]}),u.jsx(gm,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:u.jsxs(vm,{children:["Bonus is taxed at your ",u.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&u.jsxs(xP,{variants:en,children:[u.jsxs(In,{children:[u.jsxs(Qt,{children:[u.jsx(ym,{}),"Total Combined Income",e.postHike&&u.jsxs(Js,{children:["+",e.hikePercentage,"% Hike"]})]}),u.jsx(hc,{children:"Yearly"})]}),e.postHike?u.jsxs(tm,{children:[u.jsxs(Qs,{children:[u.jsx(Xs,{children:"Current"}),u.jsx(Zs,{$large:!0,children:Q(e.totalIncomeYearly)})]}),u.jsxs(Qs,{$highlight:!0,children:[u.jsxs(Xs,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(Zs,{$large:!0,children:Q(e.postHike.totalIncomeYearly)}),u.jsxs(Me,{$positive:!0,children:["+",V(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx(SP,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:Q(e.totalIncomeYearly)}),u.jsx(sm,{children:"Base salary + Bonus (after tax)"})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Base In-Hand (Yearly)"}),u.jsx(re,{children:Q(e.netSalaryYearly)})]}),u.jsxs(te,{children:[u.jsx(ne,{children:"Bonus In-Hand (Yearly)"}),u.jsx(re,{children:Q(e.bonusAfterTax)})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Total Combined Income"}),u.jsx(re,{$highlight:!0,children:Q(e.totalIncomeYearly)})]})]}),u.jsxs(Un,{variants:en,children:[u.jsxs(Qt,{style:{marginBottom:"var(--space-sm)"},children:[u.jsx(Wl,{}),"Summary",e.postHike&&u.jsxs(Js,{children:["+",e.hikePercentage,"% Hike"]})]}),u.jsxs(am,{children:[u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Gross Salary"}),u.jsx(Jt,{children:V(e.grossSalary*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.grossSalary*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Total Tax"}),u.jsx(Jt,{children:Q(e.totalTax*r)}),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.totalTax*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Employee PF"}),u.jsx(Jt,{children:V(e.employeePF*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.employeePF*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Employer PF"}),u.jsx(Jt,{children:V(e.employerPF*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.employerPF*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Total PF"}),u.jsx(Jt,{children:V((e.employeePF+e.employerPF)*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Eff. Tax Rate"}),u.jsxs(Jt,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&u.jsxs(Me,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),u.jsx(Ke,{}),u.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),u.jsx(um,{children:o.map((p,g)=>u.jsx(cm,{$color:p.color,initial:{width:0},animate:{width:`${p.value/a*100}%`},transition:{delay:.3+g*.1,duration:.5}},g))}),u.jsx(dm,{children:o.map((p,g)=>u.jsxs(fm,{children:[u.jsx(pm,{$color:p.color}),u.jsx(hm,{children:p.label}),u.jsx(mm,{children:V(p.value*r)})]},g))}),e.postHike&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(um,{children:l.map((p,g)=>u.jsx(cm,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.5+g*.1,duration:.5}},g))}),u.jsx(dm,{children:l.map((p,g)=>u.jsxs(fm,{children:[u.jsx(pm,{$color:p.color}),u.jsx(hm,{children:p.label}),u.jsx(mm,{children:V(p.value*r)})]},g))})]}),d.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,g)=>u.jsx(gm,{children:u.jsx(vm,{dangerouslySetInnerHTML:{__html:p}})},g))})]})]}),u.jsxs(Un,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(PP,{}),"Tax Slabs",u.jsx(hc,{children:aP.financialYear}),e.postHike&&u.jsxs(Js,{children:["+",e.hikePercentage,"% Hike"]})]})}),u.jsxs(jP,{children:[u.jsxs(lm,{$isHeader:!0,children:[u.jsx(qt,{children:"Slab"}),u.jsx(qt,{$align:"center",children:"Rate"}),u.jsx(qt,{$align:"right",children:"Amount"}),u.jsx(qt,{$align:"right",children:"Tax"})]}),u.jsx(Gr,{children:e.slabs.map((p,g)=>{var x,y;return u.jsxs(lm,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:g*.03},children:[u.jsxs(qt,{children:[Zh(p.from)," - ",Zh(p.to),p.taxableInSlab>0&&u.jsx(CP,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/s*100,8)}%`},transition:{delay:.2+g*.03,duration:.4}})]}),u.jsxs(qt,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),u.jsxs(qt,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?V(p.taxableInSlab):"-",e.postHike&&((x=e.postHike.slabs[g])==null?void 0:x.taxableInSlab)>0&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.slabs[g].taxableInSlab)]})]}),u.jsxs(qt,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?V(p.taxInSlab):"-",e.postHike&&((y=e.postHike.slabs[g])==null?void 0:y.taxInSlab)>0&&u.jsxs(Me,{children:["→ ",V(e.postHike.slabs[g].taxInSlab)]})]})]},g)})})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Tax Before Surcharge"}),u.jsxs(re,{children:[Q(e.taxBeforeSurcharge),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Section 87A Rebate"}),u.jsxs(re,{$negative:!0,children:["-",V(e.rebate87A)]})]}),e.surchargeApplicable&&u.jsxs(te,{children:[u.jsxs(ne,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&u.jsx(bP,{children:"Marginal Relief"})]}),u.jsxs(re,{children:[Q(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&u.jsxs(Me,{children:["→ ",Q(e.postHike.surchargeAmount)]})]})]}),u.jsxs(te,{children:[u.jsxs(ne,{children:["Cess (",e.cessRate,"%)"]}),u.jsxs(re,{children:[Q(e.cess),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.cess)]})]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Total Tax"}),u.jsxs(re,{$highlight:!0,children:[Q(e.totalTax),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.totalTax)]})]})]})]}),u.jsxs(Un,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(Wl,{}),"Yearly Breakdown"]})}),u.jsxs(te,{children:[u.jsx(ne,{children:"Base Salary (CTC)"}),u.jsx(re,{children:V(e.baseSalary)})]}),e.employerPF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employer PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employerPF)]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Gross Salary"}),u.jsx(re,{children:V(e.grossSalary)})]}),u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Standard Deduction"}),u.jsxs(re,{$negative:!0,children:["-",V(e.standardDeduction)]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Taxable Income"}),u.jsx(re,{children:V(e.taxableIncome)})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Income Tax"}),u.jsxs(re,{$negative:!0,children:["-",Q(e.totalTax)]})]}),e.employeePF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employee PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employeePF)]})]}),e.additionalDeductions.map((p,g)=>u.jsxs(te,{children:[u.jsxs(ne,{children:["Less: ",p.name]}),u.jsxs(re,{$negative:!0,children:["-",V(p.amount)]})]},g)),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Net In-Hand (Yearly)"}),u.jsx(re,{$highlight:!0,children:Q(e.netSalaryYearly)})]})]}),u.jsxs(Un,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(Wl,{}),"Monthly Breakdown"]})}),u.jsxs(te,{children:[u.jsx(ne,{children:"Base Salary (CTC)"}),u.jsx(re,{children:V(e.baseSalary/12)})]}),e.employerPF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employer PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employerPF/12)]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Gross Salary"}),u.jsx(re,{children:V(e.grossSalary/12)})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Income Tax"}),u.jsxs(re,{$negative:!0,children:["-",Q(e.totalTax/12)]})]}),e.employeePF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employee PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employeePF/12)]})]}),e.additionalDeductions.map((p,g)=>u.jsxs(te,{children:[u.jsxs(ne,{children:["Less: ",p.name]}),u.jsxs(re,{$negative:!0,children:["-",V(p.amount/12)]})]},g)),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Net In-Hand (Monthly)"}),u.jsx(re,{$highlight:!0,children:Q(e.netSalaryMonthly)})]})]})]})},RP=w.div`
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
`,LP=w.div`
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
`,IP=w.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,MP=w.div`
  min-width: 0;
`,_P=()=>{const[e,t]=S.useState(null),[n,r]=S.useState(!1);S.useEffect(()=>{const o=cx();o&&o.baseSalary>0&&r(!0)},[]);const i=S.useCallback(o=>{const a=iP(o);t(a),window.innerWidth<1024&&setTimeout(()=>{var l;(l=document.getElementById("results"))==null||l.scrollIntoView({behavior:"smooth"})},100)},[]),s=S.useCallback(()=>{t(null)},[]);return u.jsx(RP,{children:u.jsx(Jd,{$maxWidth:"wide",children:u.jsxs(LP,{children:[u.jsx(IP,{children:u.jsx(gP,{onCalculate:i,onReset:s,autoCalculate:n})}),u.jsx(MP,{id:"results",children:u.jsx(Gr,{mode:"wait",children:e&&u.jsx(DP,{breakdown:e},"results")})})]})})})},Xr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],dx="expense-manager-transactions",fx="expense-manager-initial-balances",px="expense-manager-initial-cc-bills";function Gl(e){localStorage.setItem(dx,JSON.stringify(e))}function BP(){const e=localStorage.getItem(dx);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function xm(e){localStorage.setItem(fx,JSON.stringify(e))}function $P(){const e=localStorage.getItem(fx);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function wm(e){localStorage.setItem(px,JSON.stringify(e))}function NP(){const e=localStorage.getItem(px);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function ii(e){return e.toISOString().split("T")[0]}function hx(e){return new Date(e+"T00:00:00")}function VP(e){return hx(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function Sm(e){return e===ii(new Date)}function FP(e){return e<ii(new Date)}function OP(e,t){if(!e.statementDate)return"";const n=hx(t),r=n.getFullYear(),i=n.getMonth(),s=n.getDate();let o=r,a=i;s<e.statementDate&&(a-=1,a<0&&(a=11,o-=1));const l=new Date(o,a,e.statementDate);return ii(l)}function zP(e,t,n,r,i={}){const s=t.filter(a=>a.date<=n&&(a.accountId===e.id||a.linkedAccountId===e.id));let o=0;if(e.type==="bank"){o=r[e.id]||0;for(const a of s)a.accountId===e.id&&(a.type==="bank_credit"?o+=a.amount:a.type==="bank_debit"&&(o-=a.amount)),a.linkedAccountId===e.id&&a.type==="cc_payment"&&(o-=a.amount);return{account:e,balance:o}}else{o=-(i[e.id]||0);for(const f of s)f.accountId===e.id&&(f.type==="credit_card_spend"?o-=f.amount:f.type==="cc_payment"&&(o+=f.amount));const l=OP(e,n),d=s.filter(f=>f.date>l&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:o,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,o))}}}function UP(e,t,n,r={}){return Xr.map(i=>zP(i,e,t,n,r))}function HP(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function WP(e,t,n,r,i,s){return{id:HP(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:s,createdAt:new Date().toISOString()}}function Pr(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function GP(e){return Xr.find(t=>t.id===e)}function mx(){return Xr.filter(e=>e.type==="bank")}function gx(){return Xr.filter(e=>e.type==="credit_card")}function KP(e,t,n){const r={version:"1.0",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n};return JSON.stringify(r,null,2)}function YP(e,t,n){const r=KP(e,t,n),i=new Blob([r],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a"),a=new Date().toISOString().split("T")[0];o.href=s,o.download=`expense-backup-${a}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}function QP(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null)return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function XP(e){try{const t=JSON.parse(e);return QP(t)?t:null}catch{return null}}const ZP=w(ee.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,JP=w.div`
  display: flex;
  align-items: center;
  padding: var(--space-xl);
  gap: var(--space-lg);

  @media (max-width: 640px) {
    padding: var(--space-lg);
    gap: var(--space-md);
  }
`,qP=w.div`
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
`,e5=w.span`
  font-size: 22px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,t5=w.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
`,n5=w.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,r5=w.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,i5=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,s5=w.span`
  font-size: 13px;
  color: var(--text-tertiary);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,o5=w.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  
  ${({$type:e})=>{switch(e){case"past":return"background: #ef4444;";case"today":return"background: #10b981;";case"future":return"background: #3b82f6;"}}}
`,a5=w.span`
  font-size: 12px;
  font-weight: 500;
  
  ${({$type:e})=>{switch(e){case"past":return"color: #ef4444;";case"today":return"color: #10b981;";case"future":return"color: #3b82f6;"}}}

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,l5=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`,u5=w(ee.button).attrs({type:"button"})`
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  background: var(--accent);
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--accent-hover);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 8px;
  }
`,c5=w.div`
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`,d5=w.div`
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
  transition: all var(--timing-small) var(--ease-standard);
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
`,f5=w.input`
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
`,p5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),h5=({selectedDate:e,onDateChange:t})=>{const n=p=>{p.preventDefault(),p.stopPropagation(),t(ii(new Date))},i=Sm(e)?"today":FP(e)?"past":"future",s=Sm(e),o=new Date(e+"T00:00:00"),a=o.getDate(),l=o.toLocaleDateString("en-US",{month:"short"}).toUpperCase(),c=o.toLocaleDateString("en-US",{weekday:"long"}),d=o.getFullYear(),f=()=>{switch(i){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return u.jsx(ZP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20},children:u.jsxs(JP,{children:[u.jsxs(qP,{$type:i,children:[u.jsx(e5,{children:a}),u.jsx(t5,{children:l})]}),u.jsxs(n5,{children:[u.jsx(r5,{children:c}),u.jsxs(i5,{children:[u.jsx(s5,{children:d}),u.jsx(o5,{$type:i}),u.jsx(a5,{$type:i,children:f()})]})]}),u.jsxs(l5,{children:[!s&&u.jsx(u5,{onClick:n,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Today"}),u.jsxs(c5,{children:[u.jsx(d5,{children:u.jsx(p5,{})}),u.jsx(f5,{type:"date",value:e,onChange:p=>t(p.target.value),"aria-label":"Select date"})]})]})]})})},m5=w.div`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,g5=w.div`
  position: relative;
  z-index: 1;
`,v5=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,y5=w.div`
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
`,x5=w.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  flex: 1;
  margin-left: var(--space-sm);
`,Kl=w.span`
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
`,w5=w.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({$negative:e,$color:t})=>e?"#ef4444":t};
  letter-spacing: -0.02em;
  margin-bottom: 2px;
  font-variant-numeric: tabular-nums;
`,S5=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,k5=w.div`
  font-size: 11px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,j5={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},C5=e=>{const t=j5[e];return t?u.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},b5=({accountBalance:e})=>{const{account:t,balance:n,pendingBill:r,totalOutstanding:i}=e,s=Math.abs(n),o=n<0,a=()=>i&&i>0?u.jsx(Kl,{$type:"due",children:"Due"}):r&&r>0?u.jsx(Kl,{$type:"unbilled",children:"Unbilled"}):u.jsx(Kl,{$type:"clear",children:"Clear"});return u.jsx(m5,{$accentColor:t.color,children:u.jsxs(g5,{children:[u.jsxs(v5,{children:[u.jsx(y5,{children:C5(t.bank)}),u.jsx(x5,{children:t.name.replace(" Credit Card","").replace(" Bank","")+" Bank"})]}),u.jsxs(w5,{$negative:o,$color:t.color,children:[o?"-":"",Pr(s)]}),u.jsxs(S5,{children:[u.jsx(k5,{children:o?"Outstanding":s===0?"Paid":"Overpaid"}),a()]})]})})},T5=S.memo(b5),P5=w.div`
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
`,eo=w.div`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,to=w.div`
  position: relative;
  z-index: 1;
`,no=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,km=w.div`
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
`,jm=w.div`
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
`,Cm={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},ro=w.div`
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
`,io=w.div`
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
`,so=w.div`
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
`,oo=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,E5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),A5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),u.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),u.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),ao=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"m18 15-6-6-6 6"})}),lo=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"m6 9 6 6 6-6"})}),D5=({balances:e})=>{const{hdfcBalance:t,iciciBalance:n,totalCCOutstanding:r,netPosition:i}=S.useMemo(()=>{const s=e.find(f=>f.account.id==="hdfc-bank"),o=e.find(f=>f.account.id==="icici-bank"),a=e.filter(f=>f.account.type==="credit_card"),l=(s==null?void 0:s.balance)||0,c=(o==null?void 0:o.balance)||0,d=a.reduce((f,p)=>f+(p.totalOutstanding||0),0);return{hdfcBalance:l,iciciBalance:c,totalCCOutstanding:d,netPosition:l-d}},[e]);return u.jsxs(P5,{children:[u.jsx(eo,{$variant:"hdfc",children:u.jsxs(to,{children:[u.jsx(no,{children:u.jsx(jm,{children:u.jsx("img",{src:Cm.hdfc,alt:"HDFC Bank"})})}),u.jsx(io,{children:"HDFC Bank"}),u.jsx(so,{$color:t>=0?"#004C8F":"#ef4444",children:Pr(t)}),u.jsxs(oo,{children:[u.jsx("span",{}),u.jsxs(ro,{$positive:t>=0,children:[t>=0?u.jsx(ao,{}):u.jsx(lo,{}),t>=0?"+":"-"]})]})]})}),u.jsx(eo,{$variant:"icici",children:u.jsxs(to,{children:[u.jsx(no,{children:u.jsx(jm,{children:u.jsx("img",{src:Cm.icici,alt:"ICICI Bank"})})}),u.jsx(io,{children:"ICICI Bank"}),u.jsx(so,{$color:n>=0?"#F58220":"#ef4444",children:Pr(n)}),u.jsxs(oo,{children:[u.jsx("span",{}),u.jsxs(ro,{$positive:n>=0,children:[n>=0?u.jsx(ao,{}):u.jsx(lo,{}),n>=0?"+":"-"]})]})]})}),u.jsx(eo,{$variant:"negative",children:u.jsxs(to,{children:[u.jsx(no,{children:u.jsx(km,{$color:"#ef4444",children:u.jsx(E5,{})})}),u.jsx(io,{children:"Credit Cards"}),u.jsxs(so,{$color:r>0?"#ef4444":"#10b981",children:[r>0?"-":"",Pr(r)]}),u.jsxs(oo,{children:[u.jsx("span",{}),u.jsxs(ro,{$positive:r===0,children:[r===0?u.jsx(ao,{}):u.jsx(lo,{}),r>0?"Due":"Clear"]})]})]})}),u.jsx(eo,{$variant:"neutral",children:u.jsxs(to,{children:[u.jsx(no,{children:u.jsx(km,{$color:"#10b981",children:u.jsx(A5,{})})}),u.jsx(io,{children:"Net Position"}),u.jsx(so,{$color:i>=0?"#10b981":"#ef4444",children:Pr(i)}),u.jsxs(oo,{children:[u.jsx("span",{}),u.jsxs(ro,{$positive:i>=0,children:[i>=0?u.jsx(ao,{}):u.jsx(lo,{}),"Net"]})]})]})})]})},R5=S.memo(D5),L5=w.div`
  display: flex;
  flex-direction: column;
`,I5=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
`,M5=w.button`
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e,$color:t})=>e?t:"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e,$color:t})=>e?t:"var(--border)"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  text-align: left;

  &:hover {
    background: ${({$active:e,$color:t})=>e?t:"var(--glass-bg-hover)"};
    border-color: ${({$active:e,$color:t})=>e?t:"var(--border-hover)"};
  }
`,_5=w.span`
  font-weight: 600;
  display: block;
`,B5=w.span`
  font-size: 11px;
  opacity: 0.8;
  display: block;
  margin-top: 2px;
`,$5=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    gap: var(--space-md);
  }
`,N5=w.div`
  display: flex;
  gap: var(--space-md);
  align-items: flex-end;
`,uo=w.div`
  &.flex-grow {
    flex: 1;
    min-width: 0;
  }
`,co=w.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`,bm=w.input`
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
`,V5=w.div`
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
`,F5=w.input`
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
`,O5=w.select`
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
`,z5=w.div`
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
`,U5=w.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`,H5=w.button`
  flex: 1;
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.15s ease, opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: var(--accent-hover);
  }

  &:active:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,W5=w.button`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: var(--glass-bg-hover);
    color: var(--text-primary);
  }
`,G5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),K5=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],Y5="hdfc-bank",Q5=gx(),X5=mx(),Z5=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,c]=S.useState(""),[d,f]=S.useState(t||ii(new Date)),p=S.useRef(null);S.useEffect(()=>{t&&f(t)},[t]);const g=i!==""||o!==""||l!=="";S.useEffect(()=>{if(!n||g)return;const j=b=>{p.current&&!p.current.contains(b.target)&&r("")};return document.addEventListener("mousedown",j),document.addEventListener("touchstart",j),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("touchstart",j)}},[n,g]);const x=S.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return Q5;case"bank_debit":case"bank_credit":return X5;default:return Xr}},[n]),y=S.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),k=n&&i&&parseFloat(o)>0&&d,m=S.useCallback(()=>{r(""),s(""),a(""),c("")},[]),h=S.useCallback(()=>{if(!n||!i||!o||!d)return;const j=n==="cc_payment"?Y5:void 0,b=Xr.find(L=>L.id===i);let T="";switch(n){case"credit_card_spend":T=`Spent on ${b==null?void 0:b.name}`;break;case"cc_payment":T=`Payment to ${b==null?void 0:b.name}`;break;case"bank_debit":T=`Debited from ${b==null?void 0:b.name}`;break;case"bank_credit":T=`Credited to ${b==null?void 0:b.name}`;break}const P=WP(n,i,parseFloat(o),l||T,d,j);e(P),m()},[n,i,o,l,d,e,m]),v=S.useMemo(()=>{const b=o.replace(/[^0-9.]/g,"").split(".");let T=b[0];const P=b[1];if(T.length>3){let L=T.substring(T.length-3),R=T.substring(0,T.length-3);R=R.replace(/\B(?=(\d{2})+(?!\d))/g,","),T=R+","+L}return P!==void 0?`${T}.${P}`:T},[o]),C=S.useCallback(j=>{const b=j.target.value.replace(/,/g,"");(b===""||/^\d*\.?\d*$/.test(b))&&a(b)},[]);return u.jsxs(L5,{ref:p,children:[u.jsx(I5,{children:K5.map(({type:j,label:b,hint:T,color:P})=>u.jsxs(M5,{type:"button",$active:n===j,$color:P,onClick:()=>{r(j),s("")},children:[u.jsx(_5,{children:b}),u.jsx(B5,{children:T})]},j))}),n&&u.jsxs($5,{children:[u.jsxs(uo,{children:[u.jsx(co,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),u.jsxs(O5,{value:i,onChange:j=>s(j.target.value),children:[u.jsx("option",{value:"",children:y()}),x.map(j=>u.jsx("option",{value:j.id,children:j.name},j.id))]})]}),u.jsxs(N5,{children:[u.jsxs(uo,{className:"flex-grow",children:[u.jsx(co,{children:"Amount"}),u.jsx(z5,{children:u.jsx(bm,{type:"text",inputMode:"decimal",placeholder:"10,000",value:v,onChange:C})})]}),u.jsxs(uo,{children:[u.jsx(co,{children:"Date"}),u.jsxs(V5,{children:[u.jsx(G5,{}),u.jsx(F5,{type:"date",value:d,onChange:j=>f(j.target.value)})]})]})]}),u.jsxs(uo,{children:[u.jsx(co,{children:"Description (Optional)"}),u.jsx(bm,{type:"text",placeholder:"e.g., Grocery shopping",value:l,onChange:j=>c(j.target.value)})]}),u.jsxs(U5,{children:[u.jsx(H5,{type:"button",onClick:h,disabled:!k,children:"Add"}),u.jsx(W5,{type:"button",onClick:m,children:"Cancel"})]})]})]})},J5=S.memo(Z5),q5=w.div`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,e4=w.div`
  position: relative;
  z-index: 1;
`,t4=w.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-xl);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,n4=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,r4=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,i4=w.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${({$isOpen:e})=>e?"180deg":"0deg"});
  will-change: transform;

  svg {
    width: 14px;
    height: 14px;
  }
`,s4=w.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: grid-template-rows;
`,o4=w.div`
  overflow: hidden;
`,a4=w.div`
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
`,l4=w.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,u4=w.span`
  font-size: 12px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,c4=w.div`
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
`,d4=w.div`
  display: grid;
  grid-template-columns: 44px 1fr auto;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-xl);
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr auto;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
  }
`,f4=w.div`
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
`,p4=w.div`
  min-width: 0;
  overflow: hidden;
`,h4=w.div`
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
`,m4=w.div`
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
`,g4=w.span`
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
`,v4=w.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
`,y4=w.div`
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  white-space: nowrap;
  text-align: right;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,x4=w.button`
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
  transition: opacity 0.15s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }

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
`,w4=w.div`
  padding: var(--space-2xl);
  text-align: center;
  color: var(--text-tertiary);
`,S4=w.div`
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
`,k4=w.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,j4=w.p`
  font-size: 12px;
  color: var(--text-tertiary);
`,C4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),u.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),b4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),T4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("polyline",{points:"19 12 12 19 5 12"})]}),P4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),u.jsx("polyline",{points:"5 12 12 5 19 12"})]}),E4=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),A4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"3 6 5 6 21 6"}),u.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),D4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),u.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),R4=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})}),L4=e=>{switch(e){case"credit_card_spend":return u.jsx(b4,{});case"cc_payment":return u.jsx(E4,{});case"bank_debit":return u.jsx(P4,{});case"bank_credit":return u.jsx(T4,{})}},Tm=e=>e==="bank_credit"||e==="cc_payment",I4=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const[r,i]=S.useState(!1),s=S.useMemo(()=>{const[a,l]=n.split("-").slice(0,2);return[...e].filter(c=>{const[d,f]=c.date.split("-").slice(0,2);return d===a&&f===l&&c.date<=n}).sort((c,d)=>{const f=d.date.localeCompare(c.date);return f!==0?f:new Date(d.createdAt).getTime()-new Date(c.createdAt).getTime()})},[e,n]),o=S.useCallback(a=>{t(a)},[t]);return u.jsx(q5,{children:u.jsxs(e4,{children:[u.jsxs(t4,{type:"button",onClick:()=>i(!r),children:[u.jsxs(n4,{children:[u.jsx(a4,{children:u.jsx(C4,{})}),u.jsx(l4,{children:"Transactions"})]}),u.jsxs(r4,{children:[u.jsx(u4,{children:s.length}),u.jsx(i4,{$isOpen:r,children:u.jsx(R4,{})})]})]}),u.jsx(s4,{$isOpen:r,children:u.jsx(o4,{children:u.jsx(c4,{children:s.length===0?u.jsxs(w4,{children:[u.jsx(S4,{children:u.jsx(D4,{})}),u.jsx(k4,{children:"No transactions yet"}),u.jsx(j4,{children:"Add your first transaction above"})]}):s.map(a=>{var c;const l=GP(a.accountId);return u.jsxs(d4,{children:[u.jsx(f4,{$type:a.type,children:L4(a.type)}),u.jsxs(p4,{children:[u.jsx(h4,{children:a.description}),u.jsxs(m4,{children:[u.jsx("span",{children:VP(a.date)}),u.jsx(g4,{children:(c=l==null?void 0:l.name)==null?void 0:c.replace(" Credit Card"," CC").replace(" Bank","")})]})]}),u.jsxs(v4,{children:[u.jsxs(y4,{$positive:Tm(a.type),children:[Tm(a.type)?"+":"-",Pr(a.amount)]}),u.jsx(x4,{type:"button",onClick:()=>o(a.id),"aria-label":"Delete transaction",children:u.jsx(A4,{})})]})]},a.id)})})})})]})})},M4=S.memo(I4),_4=w(ee.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,B4=w(ee.div)`
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
`,$4=w.div`
  margin-bottom: var(--space-lg);
`,N4=w.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,V4=w.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Pm=w.h3`
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
`,Em=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Am=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,Dm=w.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Rm=w.div`
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
`,Lm=w.input`
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
`,F4=w.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,O4=w.div`
  display: flex;
  gap: var(--space-md);
`,Im=w(ee.button)`
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
`,z4=w.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,U4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),u.jsx("polyline",{points:"5 6 12 3 19 6"}),u.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),u.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),H4=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),W4={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},G4={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},K4=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,onSave:i})=>{const[s,o]=S.useState({}),[a,l]=S.useState({}),c=mx(),d=gx();S.useEffect(()=>{if(e){const y={};c.forEach(m=>{var h;y[m.id]=((h=n[m.id])==null?void 0:h.toString())||""}),o(y);const k={};d.forEach(m=>{var h;k[m.id]=((h=r[m.id])==null?void 0:h.toString())||""}),l(k)}},[e,n,r]);const f=()=>{const y={};Object.entries(s).forEach(([m,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;y[m]=v});const k={};Object.entries(a).forEach(([m,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;k[m]=v}),i(y,k),t()},p=y=>{const k=y.replace(/[^0-9]/g,"");if(!k)return"";if(k.length>3){let m=k.substring(k.length-3),h=k.substring(0,k.length-3);return h=h.replace(/\B(?=(\d{2})+(?!\d))/g,","),h+","+m}return k},g=(y,k)=>{const m=k.replace(/,/g,"");(m===""||/^\d+$/.test(m))&&o(h=>({...h,[y]:m}))},x=(y,k)=>{const m=k.replace(/,/g,"");(m===""||/^\d+$/.test(m))&&l(h=>({...h,[y]:m}))};return u.jsx(Gr,{children:e&&u.jsx(_4,{variants:W4,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:u.jsxs(B4,{variants:G4,initial:"hidden",animate:"visible",exit:"exit",onClick:y=>y.stopPropagation(),children:[u.jsxs($4,{children:[u.jsx(N4,{children:"Initial Balances & Bills"}),u.jsx(V4,{children:"Set your starting bank balances and any existing credit card outstanding amounts."})]}),u.jsxs(Pm,{children:[u.jsx(U4,{}),"Bank Account Balances"]}),u.jsx(Em,{children:c.map(y=>u.jsxs(Am,{children:[u.jsx(Dm,{children:y.name}),u.jsx(Rm,{children:u.jsx(Lm,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:p(s[y.id]||""),onChange:k=>g(y.id,k.target.value)})})]},y.id))}),u.jsx(F4,{}),u.jsxs(Pm,{children:[u.jsx(H4,{}),"Credit Card Outstanding Bills"]}),u.jsx(Em,{children:d.map(y=>u.jsxs(Am,{children:[u.jsx(Dm,{children:y.name}),u.jsx(Rm,{children:u.jsx(Lm,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:p(a[y.id]||""),onChange:k=>x(y.id,k.target.value)})}),u.jsx(z4,{children:"Current outstanding amount you owe"})]},y.id))}),u.jsxs(O4,{children:[u.jsx(Im,{onClick:t,children:"Cancel"}),u.jsx(Im,{$primary:!0,onClick:f,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})]})})})},Sn=e=>{switch(e){case"green":return{bg:"rgba(16, 185, 129, 0.15)",border:"rgba(16, 185, 129, 0.25)",text:"#10b981"};case"orange":return{bg:"rgba(245, 158, 11, 0.15)",border:"rgba(245, 158, 11, 0.25)",text:"#f59e0b"};case"pink":return{bg:"rgba(236, 72, 153, 0.15)",border:"rgba(236, 72, 153, 0.25)",text:"#ec4899"};case"blue":return{bg:"rgba(59, 130, 246, 0.15)",border:"rgba(59, 130, 246, 0.25)",text:"#3b82f6"};case"purple":return{bg:"rgba(139, 92, 246, 0.15)",border:"rgba(139, 92, 246, 0.25)",text:"#8b5cf6"}}},Y4=w.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
`,Q4=w.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-xl);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,X4=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,Z4=w.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$accent:e})=>Sn(e).bg};
  border: 1px solid ${({$accent:e})=>Sn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$accent:e})=>Sn(e).text};
  }
`,J4=w.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,q4=w.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,eE=w.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({$accent:e})=>Sn(e).text};
  background: ${({$accent:e})=>Sn(e).bg};
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,tE=w.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: ${({$accent:e})=>Sn(e).bg};
  border: 1px solid ${({$accent:e})=>Sn(e).border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$accent:e})=>Sn(e).text};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${({$isOpen:e})=>e?"180deg":"0deg"});
  will-change: transform;

  svg {
    width: 14px;
    height: 14px;
  }
`,nE=w.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: grid-template-rows;
`,rE=w.div`
  overflow: hidden;
`,iE=w.div`
  padding: var(--space-xl);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,sE=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})}),fo=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:s,onOpenChange:o,collapseOnClickOutside:a=!1,children:l})=>{const[c,d]=S.useState(i),f=S.useRef(null),p=s!==void 0,g=p?s:c,x=()=>{const y=!g;p?o==null||o(y):d(y)};return S.useEffect(()=>{if(!a||!g)return;const y=k=>{f.current&&!f.current.contains(k.target)&&(p?o==null||o(!1):d(!1))};return document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y)}},[a,g,p,o]),u.jsxs(Y4,{ref:f,children:[u.jsxs(Q4,{type:"button",onClick:x,children:[u.jsxs(X4,{children:[u.jsx(Z4,{$accent:n,children:t}),u.jsx(J4,{children:e})]}),u.jsxs(q4,{children:[r!==void 0&&u.jsx(eE,{$accent:n,children:r}),u.jsx(tE,{$isOpen:g,$accent:n,children:u.jsx(sE,{})})]})]}),u.jsx(nE,{$isOpen:g,children:u.jsx(rE,{children:u.jsx(iE,{children:l})})})]})},oE=w.div`
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
`,aE=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
`,lE=w.div`
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
`,uE=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-xl));
  }
`,cE=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    gap: var(--space-xl);
  }
`,dE=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 500px) {
    gap: var(--space-md);
  }
`,fE=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,pE=w.div`
  display: flex;
  gap: var(--space-sm);
`,Mm=w.button`
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
  transition: all var(--timing-small) var(--ease-standard);
  flex: 1;

  &:hover {
    background: ${({$variant:e})=>e==="primary"?"var(--accent-hover)":"var(--glass-bg-hover)"};
    border-color: ${({$variant:e})=>e==="primary"?"var(--accent-hover)":"var(--border-hover)"};
    color: ${({$variant:e})=>e==="primary"?"white":"var(--text-primary)"};
  }

  &:active {
    opacity: 0.9;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,hE=w.button`
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
  transition: all var(--timing-small) var(--ease-standard);
  width: 100%;

  &:hover {
    background: var(--glass-bg-hover);
    border-color: var(--border-hover);
    color: var(--text-primary);
  }

  &:active {
    opacity: 0.9;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,mE=w.input`
  display: none;
`,gE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),vE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"7 10 12 15 17 10"}),u.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),yE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),xE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),u.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),u.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),wE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),u.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),SE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),u.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),kE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),jE=()=>{const[e,t]=S.useState(ii(new Date)),[n,r]=S.useState([]),[i,s]=S.useState({}),[o,a]=S.useState({}),[l,c]=S.useState(!1),d=S.useRef(null);S.useEffect(()=>{const v=BP(),C=$P(),j=NP();r(v),s(C),a(j)},[]);const f=S.useMemo(()=>UP(n,e,i,o),[e,n,i,o]),p=S.useMemo(()=>f.filter(v=>v.account.type==="credit_card"),[f]),g=S.useCallback(v=>{r(C=>{const j=[...C,v];return requestAnimationFrame(()=>Gl(j)),j})},[]),x=S.useCallback(v=>{r(C=>{const j=C.filter(b=>b.id!==v);return requestAnimationFrame(()=>Gl(j)),j})},[]),y=S.useCallback((v,C)=>{s(v),a(C),requestAnimationFrame(()=>{xm(v),wm(C)})},[]),k=S.useCallback(()=>{YP(n,i,o)},[n,i,o]),m=S.useCallback(()=>{var v;(v=d.current)==null||v.click()},[]),h=S.useCallback(v=>{var b;const C=(b=v.target.files)==null?void 0:b[0];if(!C)return;const j=new FileReader;j.onload=T=>{var R;const P=(R=T.target)==null?void 0:R.result,L=XP(P);L?window.confirm(`Import backup from ${new Date(L.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${L.transactions.length} transactions
• Initial balances and CC bills

This action cannot be undone.`)&&(r(L.transactions),s(L.initialBalances),a(L.initialCCBills),Gl(L.transactions),xm(L.initialBalances),wm(L.initialCCBills)):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},j.readAsText(C),v.target.value=""},[]);return u.jsxs(oE,{children:[u.jsxs(Jd,{$maxWidth:"wide",children:[u.jsxs(aE,{children:[u.jsx(h5,{selectedDate:e,onDateChange:t}),u.jsx(fo,{title:"Summary",icon:u.jsx(wE,{}),accent:"green",children:u.jsx(R5,{balances:f})})]}),u.jsxs(lE,{children:[u.jsx(uE,{children:u.jsx(fo,{title:"Add Transaction",icon:u.jsx(SE,{}),accent:"orange",children:u.jsx(J5,{onAddTransaction:g,defaultDate:e})})}),u.jsxs(cE,{children:[u.jsx(fo,{title:"Credit Cards",icon:u.jsx(kE,{}),accent:"pink",badge:p.length,children:u.jsx(dE,{children:p.map(v=>u.jsx(T5,{accountBalance:v},v.account.id))})}),u.jsx(M4,{transactions:n,onDeleteTransaction:x,selectedDate:e}),u.jsx(fo,{title:"Manage Data",icon:u.jsx(xE,{}),accent:"purple",defaultOpen:!1,children:u.jsxs(fE,{children:[u.jsxs(hE,{type:"button",onClick:()=>c(!0),children:[u.jsx(gE,{}),"Set Initial Balances"]}),u.jsxs(pE,{children:[u.jsxs(Mm,{type:"button",$variant:"secondary",onClick:k,children:[u.jsx(vE,{}),"Export"]}),u.jsxs(Mm,{type:"button",$variant:"secondary",onClick:m,children:[u.jsx(yE,{}),"Import"]})]})]})}),u.jsx(mE,{ref:d,type:"file",accept:".json",onChange:h})]})]})]}),u.jsx(K4,{isOpen:l,onClose:()=>c(!1),initialBalances:i,initialCCBills:o,onSave:y})]})},CE=w.div`
  min-height: 100vh;
  position: relative;
`,bE=w.main`
  position: relative;
  z-index: 1;
`,TE=w.a`
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
`;function PE(){return u.jsx(W2,{basename:"/tools",children:u.jsxs(Q2,{children:[u.jsx(ZS,{}),u.jsxs(CE,{children:[u.jsx(TE,{href:"#main-content",children:"Skip to main content"}),u.jsx(ek,{}),u.jsx(BT,{}),u.jsx(bE,{id:"main-content",children:u.jsxs(N2,{children:[u.jsx(bo,{path:"/",element:u.jsx(XT,{})}),u.jsx(bo,{path:"/tax-calculator",element:u.jsx(_P,{})}),u.jsx(bo,{path:"/expense-manager",element:u.jsx(jE,{})})]})})]})]})})}K0(document.getElementById("root")).render(u.jsx(S.StrictMode,{children:u.jsx(PE,{})}));
