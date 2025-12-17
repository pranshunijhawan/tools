function fx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function px(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dm={exports:{}},ma={},Rm={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),hx=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),vx=Symbol.for("react.profiler"),yx=Symbol.for("react.provider"),xx=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),Sx=Symbol.for("react.suspense"),kx=Symbol.for("react.memo"),Cx=Symbol.for("react.lazy"),Jd=Symbol.iterator;function jx(e){return e===null||typeof e!="object"?null:(e=Jd&&e[Jd]||e["@@iterator"],typeof e=="function"?e:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Mm={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Im}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _m(){}_m.prototype=Xr.prototype;function fc(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Im}var pc=fc.prototype=new _m;pc.constructor=fc;Lm(pc,Xr.prototype);pc.isPureReactComponent=!0;var qd=Array.isArray,Bm=Object.prototype.hasOwnProperty,hc={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function Nm(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Bm.call(t,r)&&!$m.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ds,type:e,key:s,ref:o,props:i,_owner:hc.current}}function Tx(e,t){return{$$typeof:ds,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds}function bx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ef=/\/+/g;function Ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bx(""+e.key):t.toString(36)}function co(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ds:case hx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ga(o,0):r,qd(i)?(n="",e!=null&&(n=e.replace(ef,"$&/")+"/"),co(i,t,n,"",function(c){return c})):i!=null&&(mc(i)&&(i=Tx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ef,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",qd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ga(s,a);o+=co(s,t,n,l,i)}else if(l=jx(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ga(s,a++),o+=co(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(e,t,n){if(e==null)return e;var r=[],i=0;return co(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Px(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},fo={transition:null},Ex={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:fo,ReactCurrentOwner:hc};function Vm(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Cs,forEach:function(e,t,n){Cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Xr;F.Fragment=mx;F.Profiler=vx;F.PureComponent=fc;F.StrictMode=gx;F.Suspense=Sx;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;F.act=Vm;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lm({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=hc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Bm.call(t,l)&&!$m.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ds,type:e.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:xx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yx,_context:e},e.Consumer=e};F.createElement=Nm;F.createFactory=function(e){var t=Nm.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:wx,render:e}};F.isValidElement=mc;F.lazy=function(e){return{$$typeof:Cx,_payload:{_status:-1,_result:e},_init:Px}};F.memo=function(e,t){return{$$typeof:kx,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};F.unstable_act=Vm;F.useCallback=function(e,t){return $e.current.useCallback(e,t)};F.useContext=function(e){return $e.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};F.useEffect=function(e,t){return $e.current.useEffect(e,t)};F.useId=function(){return $e.current.useId()};F.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return $e.current.useMemo(e,t)};F.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};F.useRef=function(e){return $e.current.useRef(e)};F.useState=function(e){return $e.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return $e.current.useTransition()};F.version="18.3.1";Rm.exports=F;var C=Rm.exports;const bt=px(C),Ax=fx({__proto__:null,default:bt},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx=C,Rx=Symbol.for("react.element"),Ix=Symbol.for("react.fragment"),Lx=Object.prototype.hasOwnProperty,Mx=Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function Fm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lx.call(t,r)&&!_x.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Rx,type:e,key:s,ref:o,props:i,_owner:Mx.current}}ma.Fragment=Ix;ma.jsx=Fm;ma.jsxs=Fm;Dm.exports=ma;var u=Dm.exports,Om={exports:{}},tt={},zm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,R){var L=A.length;A.push(R);e:for(;0<L;){var z=L-1>>>1,H=A[z];if(0<i(H,R))A[z]=R,A[L]=H,L=z;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var R=A[0],L=A.pop();if(L!==R){A[0]=L;e:for(var z=0,H=A.length,Te=H>>>1;z<Te;){var We=2*(z+1)-1,Gt=A[We],Ge=We+1,Rt=A[Ge];if(0>i(Gt,L))Ge<H&&0>i(Rt,Gt)?(A[z]=Rt,A[Ge]=L,z=Ge):(A[z]=Gt,A[We]=L,z=We);else if(Ge<H&&0>i(Rt,L))A[z]=Rt,A[Ge]=L,z=Ge;else break e}}return R}function i(A,R){var L=A.sortIndex-R.sortIndex;return L!==0?L:A.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,g=!1,x=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=A)r(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(c)}}function S(A){if(y=!1,v(A),!x)if(n(l)!==null)x=!0,K(j);else{var R=n(c);R!==null&&N(S,R.startTime-A)}}function j(A,R){x=!1,y&&(y=!1,m(P),P=-1),g=!0;var L=p;try{for(v(R),f=n(l);f!==null&&(!(f.expirationTime>R)||A&&!G());){var z=f.callback;if(typeof z=="function"){f.callback=null,p=f.priorityLevel;var H=z(f.expirationTime<=R);R=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(l)&&r(l),v(R)}else r(l);f=n(l)}if(f!==null)var Te=!0;else{var We=n(c);We!==null&&N(S,We.startTime-R),Te=!1}return Te}finally{f=null,p=L,g=!1}}var T=!1,b=null,P=-1,_=5,I=-1;function G(){return!(e.unstable_now()-I<_)}function He(){if(b!==null){var A=e.unstable_now();I=A;var R=!0;try{R=b(!0,A)}finally{R?Le():(T=!1,b=null)}}else T=!1}var Le;if(typeof h=="function")Le=function(){h(He)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,B=ft.port2;ft.port1.onmessage=He,Le=function(){B.postMessage(null)}}else Le=function(){w(He,0)};function K(A){b=A,T||(T=!0,Le())}function N(A,R){P=w(function(){A(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,K(j))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var L=p;p=R;try{return A()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=p;p=A;try{return R()}finally{p=L}},e.unstable_scheduleCallback=function(A,R,L){var z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?z+L:z):L=z,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,A={id:d++,callback:R,priorityLevel:A,startTime:L,expirationTime:H,sortIndex:-1},L>z?(A.sortIndex=L,t(c,A),n(l)===null&&A===n(c)&&(y?(m(P),P=-1):y=!0,N(S,L-z))):(A.sortIndex=H,t(l,A),x||g||(x=!0,K(j))),A},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(A){var R=p;return function(){var L=p;p=R;try{return A.apply(this,arguments)}finally{p=L}}}})(Um);zm.exports=Um;var Bx=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=C,qe=Bx;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,Vi={};function qn(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Hm.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function Vx(e){return Wl.call(nf,e)?!0:Wl.call(tf,e)?!1:Nx.test(e)?nf[e]=!0:(tf[e]=!0,!1)}function Fx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ox(e,t,n,r){if(t===null||typeof t>"u"||Fx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gc,vc);je[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gc,vc);je[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gc,vc);je[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function yc(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ox(t,n,i,r)&&(n=null),r||i===null?Vx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),ar=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),rf=Symbol.iterator;function si(e){return e===null||typeof e!="object"?null:(e=rf&&e[rf]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Ka;function vi(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||""}return`
`+Ka+e}var Ya=!1;function Qa(e,t){if(!e||Ya)return"";Ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vi(e):""}function zx(e){switch(e.tag){case 5:return vi(e.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ar:return"Portal";case Gl:return"Profiler";case xc:return"StrictMode";case Kl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gm:return(e.displayName||"Context")+".Consumer";case Wm:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sc:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function Ux(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hx(e){var t=Ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ts(e){e._valueTracker||(e._valueTracker=Hx(e))}function Qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xm(e,t){t=t.checked,t!=null&&yc(e,"checked",t,!1)}function Zl(e,t){Xm(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function of(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yi=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(yi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Zm(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,qm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wx=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){Wx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ti[t]=Ti[e]})});function eg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+t).trim():t+"px"}function tg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gx=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(Gx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,Er=null,Ar=null;function uf(e){if(e=hs(e)){if(typeof iu!="function")throw Error(E(280));var t=e.stateNode;t&&(t=wa(t),iu(e.stateNode,e.type,t))}}function ng(e){Er?Ar?Ar.push(e):Ar=[e]:Er=e}function rg(){if(Er){var e=Er,t=Ar;if(Ar=Er=null,uf(e),t)for(e=0;e<t.length;e++)uf(t[e])}}function ig(e,t){return e(t)}function sg(){}var Xa=!1;function og(e,t,n){if(Xa)return e(t,n);Xa=!0;try{return ig(e,t,n)}finally{Xa=!1,(Er!==null||Ar!==null)&&(sg(),rg())}}function Oi(e,t){var n=e.stateNode;if(n===null)return null;var r=wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var su=!1;if(Ft)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){su=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{su=!1}function Kx(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var bi=!1,Mo=null,_o=!1,ou=null,Yx={onError:function(e){bi=!0,Mo=e}};function Qx(e,t,n,r,i,s,o,a,l){bi=!1,Mo=null,Kx.apply(Yx,arguments)}function Xx(e,t,n,r,i,s,o,a,l){if(Qx.apply(this,arguments),bi){if(bi){var c=Mo;bi=!1,Mo=null}else throw Error(E(198));_o||(_o=!0,ou=c)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ag(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cf(e){if(er(e)!==e)throw Error(E(188))}function Zx(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cf(i),e;if(s===r)return cf(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function lg(e){return e=Zx(e),e!==null?ug(e):null}function ug(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ug(e);if(t!==null)return t;e=e.sibling}return null}var cg=qe.unstable_scheduleCallback,df=qe.unstable_cancelCallback,Jx=qe.unstable_shouldYield,qx=qe.unstable_requestPaint,fe=qe.unstable_now,e1=qe.unstable_getCurrentPriorityLevel,Cc=qe.unstable_ImmediatePriority,dg=qe.unstable_UserBlockingPriority,Bo=qe.unstable_NormalPriority,t1=qe.unstable_LowPriority,fg=qe.unstable_IdlePriority,ga=null,Pt=null;function n1(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ga,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:s1,r1=Math.log,i1=Math.LN2;function s1(e){return e>>>=0,e===0?32:31-(r1(e)/i1|0)|0}var Ps=64,Es=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xi(a):(s&=o,s!==0&&(r=xi(s)))}else o=n&~i,o!==0?r=xi(o):s!==0&&(r=xi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function o1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=o1(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pg(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function Za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function l1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function jc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function hg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mg,Tc,gg,vg,yg,lu=!1,As=[],dn=null,fn=null,pn=null,zi=new Map,Ui=new Map,on=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function ai(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=hs(t),t!==null&&Tc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function c1(e,t,n,r,i){switch(t){case"focusin":return dn=ai(dn,e,t,n,r,i),!0;case"dragenter":return fn=ai(fn,e,t,n,r,i),!0;case"mouseover":return pn=ai(pn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,ai(zi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ui.set(s,ai(Ui.get(s)||null,e,t,n,r,i)),!0}return!1}function xg(e){var t=$n(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=ag(n),t!==null){e.blockedOn=t,yg(e.priority,function(){gg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=hs(n),t!==null&&Tc(t),e.blockedOn=n,!1;t.shift()}return!0}function pf(e,t,n){po(e)&&n.delete(t)}function d1(){lu=!1,dn!==null&&po(dn)&&(dn=null),fn!==null&&po(fn)&&(fn=null),pn!==null&&po(pn)&&(pn=null),zi.forEach(pf),Ui.forEach(pf)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,d1)))}function Hi(e){function t(i){return li(i,e)}if(0<As.length){li(As[0],e);for(var n=1;n<As.length;n++){var r=As[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&li(dn,e),fn!==null&&li(fn,e),pn!==null&&li(pn,e),zi.forEach(t),Ui.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&on.shift()}var Dr=Wt.ReactCurrentBatchConfig,No=!0;function f1(e,t,n,r){var i=W,s=Dr.transition;Dr.transition=null;try{W=1,bc(e,t,n,r)}finally{W=i,Dr.transition=s}}function p1(e,t,n,r){var i=W,s=Dr.transition;Dr.transition=null;try{W=4,bc(e,t,n,r)}finally{W=i,Dr.transition=s}}function bc(e,t,n,r){if(No){var i=uu(e,t,n,r);if(i===null)al(e,t,r,Vo,n),ff(e,r);else if(c1(i,e,t,n,r))r.stopPropagation();else if(ff(e,r),t&4&&-1<u1.indexOf(e)){for(;i!==null;){var s=hs(i);if(s!==null&&mg(s),s=uu(e,t,n,r),s===null&&al(e,t,r,Vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var Vo=null;function uu(e,t,n,r){if(Vo=null,e=kc(r),e=$n(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ag(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function wg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e1()){case Cc:return 1;case dg:return 4;case Bo:case t1:return 16;case fg:return 536870912;default:return 16}default:return 16}}var ln=null,Pc=null,ho=null;function Sg(){if(ho)return ho;var e,t=Pc,n=t.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ho=i.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function hf(){return!1}function nt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ds:hf,this.isPropagationStopped=hf,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=nt(Zr),ps=le({},Zr,{view:0,detail:0}),h1=nt(ps),Ja,qa,ui,va=le({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Ja=e.screenX-ui.screenX,qa=e.screenY-ui.screenY):qa=Ja=0,ui=e),Ja)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),mf=nt(va),m1=le({},va,{dataTransfer:0}),g1=nt(m1),v1=le({},ps,{relatedTarget:0}),el=nt(v1),y1=le({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),x1=nt(y1),w1=le({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S1=nt(w1),k1=le({},Zr,{data:0}),gf=nt(k1),C1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T1[e])?!!t[e]:!1}function Ac(){return b1}var P1=le({},ps,{key:function(e){if(e.key){var t=C1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=nt(P1),A1=le({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=nt(A1),D1=le({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),R1=nt(D1),I1=le({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=nt(I1),M1=le({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_1=nt(M1),B1=[9,13,27,32],Dc=Ft&&"CompositionEvent"in window,Pi=null;Ft&&"documentMode"in document&&(Pi=document.documentMode);var $1=Ft&&"TextEvent"in window&&!Pi,kg=Ft&&(!Dc||Pi&&8<Pi&&11>=Pi),yf=" ",xf=!1;function Cg(e,t){switch(e){case"keyup":return B1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function N1(e,t){switch(e){case"compositionend":return jg(t);case"keypress":return t.which!==32?null:(xf=!0,yf);case"textInput":return e=t.data,e===yf&&xf?null:e;default:return null}}function V1(e,t){if(ur)return e==="compositionend"||!Dc&&Cg(e,t)?(e=Sg(),ho=Pc=ln=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kg&&t.locale!=="ko"?null:t.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F1[e.type]:t==="textarea"}function Tg(e,t,n,r){ng(r),t=Fo(t,"onChange"),0<t.length&&(n=new Ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ei=null,Wi=null;function O1(e){Bg(e,0)}function ya(e){var t=fr(e);if(Qm(t))return e}function z1(e,t){if(e==="change")return t}var bg=!1;if(Ft){var tl;if(Ft){var nl="oninput"in document;if(!nl){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),nl=typeof Sf.oninput=="function"}tl=nl}else tl=!1;bg=tl&&(!document.documentMode||9<document.documentMode)}function kf(){Ei&&(Ei.detachEvent("onpropertychange",Pg),Wi=Ei=null)}function Pg(e){if(e.propertyName==="value"&&ya(Wi)){var t=[];Tg(t,Wi,e,kc(e)),og(O1,t)}}function U1(e,t,n){e==="focusin"?(kf(),Ei=t,Wi=n,Ei.attachEvent("onpropertychange",Pg)):e==="focusout"&&kf()}function H1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ya(Wi)}function W1(e,t){if(e==="click")return ya(t)}function G1(e,t){if(e==="input"||e==="change")return ya(t)}function K1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:K1;function Gi(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(t,i)||!St(e[i],t[i]))return!1}return!0}function Cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,t){var n=Cf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cf(n)}}function Eg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ag(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y1(e){var t=Ag(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eg(n.ownerDocument.documentElement,n)){if(r!==null&&Rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=jf(n,s);var o=jf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q1=Ft&&"documentMode"in document&&11>=document.documentMode,cr=null,cu=null,Ai=null,du=!1;function Tf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||cr==null||cr!==Lo(r)||(r=cr,"selectionStart"in r&&Rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ai&&Gi(Ai,r)||(Ai=r,r=Fo(cu,"onSelect"),0<r.length&&(t=new Ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function Rs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},rl={},Dg={};Ft&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function xa(e){if(rl[e])return rl[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dg)return rl[e]=t[n];return e}var Rg=xa("animationend"),Ig=xa("animationiteration"),Lg=xa("animationstart"),Mg=xa("transitionend"),_g=new Map,bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){_g.set(e,t),qn(t,[e])}for(var il=0;il<bf.length;il++){var sl=bf[il],X1=sl.toLowerCase(),Z1=sl[0].toUpperCase()+sl.slice(1);Tn(X1,"on"+Z1)}Tn(Rg,"onAnimationEnd");Tn(Ig,"onAnimationIteration");Tn(Lg,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Mg,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Pf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xx(r,t,void 0,e),e.currentTarget=null}function Bg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pf(i,a,c),s=l}}}if(_o)throw e=ou,_o=!1,ou=null,e}function X(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||($g(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),$g(n,e,r,t)}var Is="_reactListening"+Math.random().toString(36).slice(2);function Ki(e){if(!e[Is]){e[Is]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(J1.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Is]||(t[Is]=!0,ol("selectionchange",!1,t))}}function $g(e,t,n,r){switch(wg(t)){case 1:var i=f1;break;case 4:i=p1;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$n(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}og(function(){var c=s,d=kc(n),f=[];e:{var p=_g.get(e);if(p!==void 0){var g=Ec,x=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":g=E1;break;case"focusin":x="focus",g=el;break;case"focusout":x="blur",g=el;break;case"beforeblur":case"afterblur":g=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=R1;break;case Rg:case Ig:case Lg:g=x1;break;case Mg:g=L1;break;case"scroll":g=h1;break;case"wheel":g=_1;break;case"copy":case"cut":case"paste":g=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vf}var y=(t&4)!==0,w=!y&&e==="scroll",m=y?p!==null?p+"Capture":null:p;y=[];for(var h=c,v;h!==null;){v=h;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,m!==null&&(S=Oi(h,m),S!=null&&y.push(Yi(h,S,v)))),w)break;h=h.return}0<y.length&&(p=new g(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==ru&&(x=n.relatedTarget||n.fromElement)&&($n(x)||x[Ot]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?$n(x):null,x!==null&&(w=er(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=mf,S="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=vf,S="onPointerLeave",m="onPointerEnter",h="pointer"),w=g==null?p:fr(g),v=x==null?p:fr(x),p=new y(S,h+"leave",g,n,d),p.target=w,p.relatedTarget=v,S=null,$n(d)===c&&(y=new y(m,h+"enter",x,n,d),y.target=v,y.relatedTarget=w,S=y),w=S,g&&x)t:{for(y=g,m=x,h=0,v=y;v;v=ir(v))h++;for(v=0,S=m;S;S=ir(S))v++;for(;0<h-v;)y=ir(y),h--;for(;0<v-h;)m=ir(m),v--;for(;h--;){if(y===m||m!==null&&y===m.alternate)break t;y=ir(y),m=ir(m)}y=null}else y=null;g!==null&&Ef(f,p,g,y,!1),x!==null&&w!==null&&Ef(f,w,x,y,!0)}}e:{if(p=c?fr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var j=z1;else if(wf(p))if(bg)j=G1;else{j=H1;var T=U1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=W1);if(j&&(j=j(e,c))){Tg(f,j,n,d);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Jl(p,"number",p.value)}switch(T=c?fr(c):window,e){case"focusin":(wf(T)||T.contentEditable==="true")&&(cr=T,cu=c,Ai=null);break;case"focusout":Ai=cu=cr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Tf(f,n,d);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":Tf(f,n,d)}var b;if(Dc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ur?Cg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(kg&&n.locale!=="ko"&&(ur||P!=="onCompositionStart"?P==="onCompositionEnd"&&ur&&(b=Sg()):(ln=d,Pc="value"in ln?ln.value:ln.textContent,ur=!0)),T=Fo(c,P),0<T.length&&(P=new gf(P,e,null,n,d),f.push({event:P,listeners:T}),b?P.data=b:(b=jg(n),b!==null&&(P.data=b)))),(b=$1?N1(e,n):V1(e,n))&&(c=Fo(c,"onBeforeInput"),0<c.length&&(d=new gf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}Bg(f,t)})}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oi(e,n),s!=null&&r.unshift(Yi(e,s,i)),s=Oi(e,t),s!=null&&r.push(Yi(e,s,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Oi(n,s),l!=null&&o.unshift(Yi(n,l,a))):i||(l=Oi(n,s),l!=null&&o.push(Yi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var q1=/\r\n?/g,ew=/\u0000|\uFFFD/g;function Af(e){return(typeof e=="string"?e:""+e).replace(q1,`
`).replace(ew,"")}function Ls(e,t,n){if(t=Af(t),Af(e)!==t&&n)throw Error(E(425))}function Oo(){}var fu=null,pu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,tw=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,nw=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(rw)}:mu;function rw(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Jr,Qi="__reactProps$"+Jr,Ot="__reactContainer$"+Jr,gu="__reactEvents$"+Jr,iw="__reactListeners$"+Jr,sw="__reactHandles$"+Jr;function $n(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rf(e);e!==null;){if(n=e[Tt])return n;e=Rf(e)}return t}e=n,n=e.parentNode}return null}function hs(e){return e=e[Tt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function wa(e){return e[Qi]||null}var vu=[],pr=-1;function bn(e){return{current:e}}function J(e){0>pr||(e.current=vu[pr],vu[pr]=null,pr--)}function Y(e,t){pr++,vu[pr]=e.current,e.current=t}var kn={},Ie=bn(kn),Oe=bn(!1),Yn=kn;function Mr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function zo(){J(Oe),J(Ie)}function If(e,t,n){if(Ie.current!==kn)throw Error(E(168));Y(Ie,t),Y(Oe,n)}function Ng(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Ux(e)||"Unknown",i));return le({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Yn=Ie.current,Y(Ie,e),Y(Oe,Oe.current),!0}function Lf(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Ng(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,J(Oe),J(Ie),Y(Ie,e)):J(Oe),Y(Oe,n)}var Mt=null,Sa=!1,ul=!1;function Vg(e){Mt===null?Mt=[e]:Mt.push(e)}function ow(e){Sa=!0,Vg(e)}function Pn(){if(!ul&&Mt!==null){ul=!0;var e=0,t=W;try{var n=Mt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,Sa=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),cg(Cc,Pn),i}finally{W=t,ul=!1}}return null}var hr=[],mr=0,Ho=null,Wo=0,st=[],ot=0,Qn=null,_t=1,Bt="";function Ln(e,t){hr[mr++]=Wo,hr[mr++]=Ho,Ho=e,Wo=t}function Fg(e,t,n){st[ot++]=_t,st[ot++]=Bt,st[ot++]=Qn,Qn=e;var r=_t;e=Bt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_t=1<<32-yt(t)+i|n<<i|r,Bt=s+e}else _t=1<<s|n<<i|r,Bt=e}function Ic(e){e.return!==null&&(Ln(e,1),Fg(e,1,0))}function Lc(e){for(;e===Ho;)Ho=hr[--mr],hr[mr]=null,Wo=hr[--mr],hr[mr]=null;for(;e===Qn;)Qn=st[--ot],st[ot]=null,Bt=st[--ot],st[ot]=null,_t=st[--ot],st[ot]=null}var Ze=null,Xe=null,ie=!1,vt=null;function Og(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:_t,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Xe=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(ie){var t=Xe;if(t){var n=t;if(!Mf(e,t)){if(yu(e))throw Error(E(418));t=hn(n.nextSibling);var r=Ze;t&&Mf(e,t)?Og(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ze=e)}}else{if(yu(e))throw Error(E(418));e.flags=e.flags&-4097|2,ie=!1,Ze=e}}}function _f(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Ms(e){if(e!==Ze)return!1;if(!ie)return _f(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=Xe)){if(yu(e))throw zg(),Error(E(418));for(;t;)Og(e,t),t=hn(t.nextSibling)}if(_f(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?hn(e.stateNode.nextSibling):null;return!0}function zg(){for(var e=Xe;e;)e=hn(e.nextSibling)}function _r(){Xe=Ze=null,ie=!1}function Mc(e){vt===null?vt=[e]:vt.push(e)}var aw=Wt.ReactCurrentBatchConfig;function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function _s(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bf(e){var t=e._init;return t(e._payload)}function Ug(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=yn(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,S){return h===null||h.tag!==6?(h=gl(v,m.mode,S),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,S){var j=v.type;return j===lr?d(m,h,v.props.children,S,v.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===rn&&Bf(j)===h.type)?(S=i(h,v.props),S.ref=ci(m,h,v),S.return=m,S):(S=ko(v.type,v.key,v.props,null,m.mode,S),S.ref=ci(m,h,v),S.return=m,S)}function c(m,h,v,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=vl(v,m.mode,S),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function d(m,h,v,S,j){return h===null||h.tag!==7?(h=Hn(v,m.mode,S,j),h.return=m,h):(h=i(h,v),h.return=m,h)}function f(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=gl(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case js:return v=ko(h.type,h.key,h.props,null,m.mode,v),v.ref=ci(m,null,h),v.return=m,v;case ar:return h=vl(h,m.mode,v),h.return=m,h;case rn:var S=h._init;return f(m,S(h._payload),v)}if(yi(h)||si(h))return h=Hn(h,m.mode,v,null),h.return=m,h;_s(m,h)}return null}function p(m,h,v,S){var j=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:a(m,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case js:return v.key===j?l(m,h,v,S):null;case ar:return v.key===j?c(m,h,v,S):null;case rn:return j=v._init,p(m,h,j(v._payload),S)}if(yi(v)||si(v))return j!==null?null:d(m,h,v,S,null);_s(m,v)}return null}function g(m,h,v,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(v)||null,a(h,m,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case js:return m=m.get(S.key===null?v:S.key)||null,l(h,m,S,j);case ar:return m=m.get(S.key===null?v:S.key)||null,c(h,m,S,j);case rn:var T=S._init;return g(m,h,v,T(S._payload),j)}if(yi(S)||si(S))return m=m.get(v)||null,d(h,m,S,j,null);_s(h,S)}return null}function x(m,h,v,S){for(var j=null,T=null,b=h,P=h=0,_=null;b!==null&&P<v.length;P++){b.index>P?(_=b,b=null):_=b.sibling;var I=p(m,b,v[P],S);if(I===null){b===null&&(b=_);break}e&&b&&I.alternate===null&&t(m,b),h=s(I,h,P),T===null?j=I:T.sibling=I,T=I,b=_}if(P===v.length)return n(m,b),ie&&Ln(m,P),j;if(b===null){for(;P<v.length;P++)b=f(m,v[P],S),b!==null&&(h=s(b,h,P),T===null?j=b:T.sibling=b,T=b);return ie&&Ln(m,P),j}for(b=r(m,b);P<v.length;P++)_=g(b,m,P,v[P],S),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?P:_.key),h=s(_,h,P),T===null?j=_:T.sibling=_,T=_);return e&&b.forEach(function(G){return t(m,G)}),ie&&Ln(m,P),j}function y(m,h,v,S){var j=si(v);if(typeof j!="function")throw Error(E(150));if(v=j.call(v),v==null)throw Error(E(151));for(var T=j=null,b=h,P=h=0,_=null,I=v.next();b!==null&&!I.done;P++,I=v.next()){b.index>P?(_=b,b=null):_=b.sibling;var G=p(m,b,I.value,S);if(G===null){b===null&&(b=_);break}e&&b&&G.alternate===null&&t(m,b),h=s(G,h,P),T===null?j=G:T.sibling=G,T=G,b=_}if(I.done)return n(m,b),ie&&Ln(m,P),j;if(b===null){for(;!I.done;P++,I=v.next())I=f(m,I.value,S),I!==null&&(h=s(I,h,P),T===null?j=I:T.sibling=I,T=I);return ie&&Ln(m,P),j}for(b=r(m,b);!I.done;P++,I=v.next())I=g(b,m,P,I.value,S),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?P:I.key),h=s(I,h,P),T===null?j=I:T.sibling=I,T=I);return e&&b.forEach(function(He){return t(m,He)}),ie&&Ln(m,P),j}function w(m,h,v,S){if(typeof v=="object"&&v!==null&&v.type===lr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case js:e:{for(var j=v.key,T=h;T!==null;){if(T.key===j){if(j=v.type,j===lr){if(T.tag===7){n(m,T.sibling),h=i(T,v.props.children),h.return=m,m=h;break e}}else if(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===rn&&Bf(j)===T.type){n(m,T.sibling),h=i(T,v.props),h.ref=ci(m,T,v),h.return=m,m=h;break e}n(m,T);break}else t(m,T);T=T.sibling}v.type===lr?(h=Hn(v.props.children,m.mode,S,v.key),h.return=m,m=h):(S=ko(v.type,v.key,v.props,null,m.mode,S),S.ref=ci(m,h,v),S.return=m,m=S)}return o(m);case ar:e:{for(T=v.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=vl(v,m.mode,S),h.return=m,m=h}return o(m);case rn:return T=v._init,w(m,h,T(v._payload),S)}if(yi(v))return x(m,h,v,S);if(si(v))return y(m,h,v,S);_s(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=gl(v,m.mode,S),h.return=m,m=h),o(m)):n(m,h)}return w}var Br=Ug(!0),Hg=Ug(!1),Go=bn(null),Ko=null,gr=null,_c=null;function Bc(){_c=gr=Ko=null}function $c(e){var t=Go.current;J(Go),e._currentValue=t}function wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){Ko=e,_c=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(_c!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if(Ko===null)throw Error(E(308));gr=e,Ko.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var Nn=null;function Nc(e){Nn===null?Nn=[e]:Nn.push(e)}function Wg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nc(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Nc(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jc(e,n)}}function $f(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(p=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=le({},f,p);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Zn|=o,e.lanes=o,e.memoizedState=f}}function Nf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ms={},Et=bn(ms),Xi=bn(ms),Zi=bn(ms);function Vn(e){if(e===ms)throw Error(E(174));return e}function Fc(e,t){switch(Y(Zi,t),Y(Xi,e),Y(Et,ms),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}J(Et),Y(Et,t)}function $r(){J(Et),J(Xi),J(Zi)}function Kg(e){Vn(Zi.current);var t=Vn(Et.current),n=eu(t,e.type);t!==n&&(Y(Xi,e),Y(Et,n))}function Oc(e){Xi.current===e&&(J(Et),J(Xi))}var se=bn(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function zc(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var vo=Wt.ReactCurrentDispatcher,dl=Wt.ReactCurrentBatchConfig,Xn=0,ae=null,ge=null,ye=null,Xo=!1,Di=!1,Ji=0,lw=0;function be(){throw Error(E(321))}function Uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,s){if(Xn=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?fw:pw,e=n(r,i),Di){s=0;do{if(Di=!1,Ji=0,25<=s)throw Error(E(301));s+=1,ye=ge=null,t.updateQueue=null,vo.current=hw,e=n(r,i)}while(Di)}if(vo.current=Zo,t=ge!==null&&ge.next!==null,Xn=0,ye=ge=ae=null,Xo=!1,t)throw Error(E(300));return e}function Wc(){var e=Ji!==0;return Ji=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function ct(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function qi(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=ct(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Xn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ae.lanes|=d,Zn|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,St(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,Zn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=ct(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);St(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Yg(){}function Qg(e,t){var n=ae,r=ct(),i=t(),s=!St(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Gc(Jg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,es(9,Zg.bind(null,n,r,i,t),void 0,null),we===null)throw Error(E(349));Xn&30||Xg(n,t,i)}return i}function Xg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zg(e,t,n,r){t.value=n,t.getSnapshot=r,qg(t)&&e0(e)}function Jg(e,t,n){return n(function(){qg(t)&&e0(e)})}function qg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function e0(e){var t=zt(e,1);t!==null&&xt(t,e,1,-1)}function Vf(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},t.queue=e,e=e.dispatch=dw.bind(null,ae,e),[t.memoizedState,e]}function es(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function t0(){return ct().memoizedState}function yo(e,t,n,r){var i=Ct();ae.flags|=e,i.memoizedState=es(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Uc(r,o.deps)){i.memoizedState=es(t,n,s,r);return}}ae.flags|=e,i.memoizedState=es(1|t,n,s,r)}function Ff(e,t){return yo(8390656,8,e,t)}function Gc(e,t){return ka(2048,8,e,t)}function n0(e,t){return ka(4,2,e,t)}function r0(e,t){return ka(4,4,e,t)}function i0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function s0(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,i0.bind(null,t,e),n)}function Kc(){}function o0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function l0(e,t,n){return Xn&21?(St(n,t)||(n=pg(),ae.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function uw(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{W=n,dl.transition=r}}function u0(){return ct().memoizedState}function cw(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c0(e))d0(t,n);else if(n=Wg(e,t,n,r),n!==null){var i=Be();xt(n,e,r,i),f0(n,t,r)}}function dw(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(e))d0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,St(a,o)){var l=t.interleaved;l===null?(i.next=i,Nc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wg(e,t,i,r),n!==null&&(i=Be(),xt(n,e,r,i),f0(n,t,r))}}function c0(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function d0(e,t){Di=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function f0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jc(e,n)}}var Zo={readContext:ut,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},fw={readContext:ut,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,i0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cw.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Vf,useDebugValue:Kc,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Vf(!1),t=e[0];return e=uw.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=Ct();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),we===null)throw Error(E(349));Xn&30||Xg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ff(Jg.bind(null,r,s,e),[e]),r.flags|=2048,es(9,Zg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ct(),t=we.identifierPrefix;if(ie){var n=Bt,r=_t;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:ut,useCallback:o0,useContext:ut,useEffect:Gc,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:fl,useRef:t0,useState:function(){return fl(qi)},useDebugValue:Kc,useDeferredValue:function(e){var t=ct();return l0(t,ge.memoizedState,e)},useTransition:function(){var e=fl(qi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Yg,useSyncExternalStore:Qg,useId:u0,unstable_isNewReconciler:!1},hw={readContext:ut,useCallback:o0,useContext:ut,useEffect:Gc,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:pl,useRef:t0,useState:function(){return pl(qi)},useDebugValue:Kc,useDeferredValue:function(e){var t=ct();return ge===null?t.memoizedState=e:l0(t,ge.memoizedState,e)},useTransition:function(){var e=pl(qi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Yg,useSyncExternalStore:Qg,useId:u0,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ca={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=vn(e),s=$t(r,i);s.payload=t,n!=null&&(s.callback=n),t=mn(e,s,i),t!==null&&(xt(t,e,i,r),go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=vn(e),s=$t(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=mn(e,s,i),t!==null&&(xt(t,e,i,r),go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=vn(e),i=$t(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(xt(t,e,r,n),go(t,e,r))}};function Of(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,s):!0}function p0(e,t,n){var r=!1,i=kn,s=t.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=ze(t)?Yn:Ie.current,r=t.contextTypes,s=(r=r!=null)?Mr(e,i):kn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ca,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function zf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ca.enqueueReplaceState(t,t.state,null)}function ku(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=ze(t)?Yn:Ie.current,i.context=Mr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Su(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ca.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var n="",r=t;do n+=zx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mw=typeof WeakMap=="function"?WeakMap:Map;function h0(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,Lu=r),Cu(e,t)},n}function m0(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Uf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Aw.bind(null,e,t,n),t.then(e,e))}function Hf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var gw=Wt.ReactCurrentOwner,Fe=!1;function _e(e,t,n,r){t.child=e===null?Hg(t,null,n,r):Br(t,e.child,n,r)}function Gf(e,t,n,r,i){n=n.render;var s=t.ref;return Rr(t,i),r=Hc(e,t,n,r,s,i),n=Wc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ie&&n&&Ic(t),t.flags|=1,_e(e,t,r,i),t.child)}function Kf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!td(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,g0(e,t,s,r,i)):(e=ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(o,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=yn(s,r),e.ref=t.ref,e.return=t,t.child=e}function g0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Gi(s,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return ju(e,t,n,r,i)}function v0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(yr,Qe),Qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(yr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(yr,Qe),Qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Y(yr,Qe),Qe|=r;return _e(e,t,i,n),t.child}function y0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ju(e,t,n,r,i){var s=ze(n)?Yn:Ie.current;return s=Mr(t,s),Rr(t,i),n=Hc(e,t,n,r,s,i),r=Wc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ie&&r&&Ic(t),t.flags|=1,_e(e,t,n,i),t.child)}function Yf(e,t,n,r,i){if(ze(n)){var s=!0;Uo(t)}else s=!1;if(Rr(t,i),t.stateNode===null)xo(e,t),p0(t,n,r),ku(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=ze(n)?Yn:Ie.current,c=Mr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&zf(t,o,r,c),sn=!1;var p=t.memoizedState;o.state=p,Yo(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Oe.current||sn?(typeof d=="function"&&(Su(t,n,d,r),l=t.memoizedState),(a=sn||Of(t,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Gg(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:mt(t.type,a),o.props=c,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=ze(n)?Yn:Ie.current,l=Mr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&zf(t,o,r,l),sn=!1,p=t.memoizedState,o.state=p,Yo(t,r,o,i);var x=t.memoizedState;a!==f||p!==x||Oe.current||sn?(typeof g=="function"&&(Su(t,n,g,r),x=t.memoizedState),(c=sn||Of(t,n,c,r,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Tu(e,t,n,r,s,i)}function Tu(e,t,n,r,i,s){y0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Lf(t,n,!1),Ut(e,t,s);r=t.stateNode,gw.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Br(t,e.child,null,s),t.child=Br(t,null,a,s)):_e(e,t,a,s),t.memoizedState=r.state,i&&Lf(t,n,!0),t.child}function x0(e){var t=e.stateNode;t.pendingContext?If(e,t.pendingContext,t.pendingContext!==t.context):t.context&&If(e,t.context,!1),Fc(e,t.containerInfo)}function Qf(e,t,n,r,i){return _r(),Mc(i),t.flags|=256,_e(e,t,n,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function w0(e,t,n){var r=t.pendingProps,i=se.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(se,i&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ba(o,r,0,null),e=Hn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pu(n),t.memoizedState=bu,e):Yc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yn(a,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Pu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=bu,r}return s=e.child,e=s.sibling,r=yn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yc(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bs(e,t,n,r){return r!==null&&Mc(r),Br(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(E(422))),Bs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ba({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Br(t,e.child,null,o),t.child.memoizedState=Pu(o),t.memoizedState=bu,s);if(!(t.mode&1))return Bs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=hl(s,r,void 0),Bs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fe||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zt(e,i),xt(r,e,i,-1))}return ed(),r=hl(Error(E(421))),Bs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Xe=hn(i.nextSibling),Ze=t,ie=!0,vt=null,e!==null&&(st[ot++]=_t,st[ot++]=Bt,st[ot++]=Qn,_t=e.id,Bt=e.overflow,Qn=t),t=Yc(t,r.children),t.flags|=4096,t)}function Xf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wu(e.return,t,n)}function ml(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(_e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xf(e,n,t);else if(e.tag===19)Xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,s);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yw(e,t,n){switch(t.tag){case 3:x0(t),_r();break;case 5:Kg(t);break;case 1:ze(t.type)&&Uo(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?w0(e,t,n):(Y(se,se.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);Y(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return S0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,v0(e,t,n)}return Ut(e,t,n)}var k0,Eu,C0,j0;k0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};C0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Et.current);var s=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=ql(e,i),r=ql(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}tu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};j0=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xw(e,t,n){var r=t.pendingProps;switch(Lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return ze(t.type)&&zo(),Pe(t),null;case 3:return r=t.stateNode,$r(),J(Oe),J(Ie),zc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ms(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Bu(vt),vt=null))),Eu(e,t),Pe(t),null;case 5:Oc(t);var i=Vn(Zi.current);if(n=t.type,e!==null&&t.stateNode!=null)C0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Pe(t),null}if(e=Vn(Et.current),Ms(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Tt]=t,r[Qi]=s,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)X(wi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":sf(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":af(r,s),X("invalid",r)}tu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ls(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ls(r.textContent,a,e),i=["children",""+a]):Vi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Ts(r),of(r,s,!0);break;case"textarea":Ts(r),lf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Tt]=t,e[Qi]=r,k0(e,t,!1,!1),t.stateNode=e;e:{switch(o=nu(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)X(wi[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":sf(e,r),i=Xl(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),X("invalid",e);break;case"textarea":af(e,r),i=ql(e,r),X("invalid",e);break;default:i=r}tu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tg(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qm(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fi(e,l):typeof l=="number"&&Fi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",e):l!=null&&yc(e,s,l,o))}switch(n){case"input":Ts(e),of(e,r,!1);break;case"textarea":Ts(e),lf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Pr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)j0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Vn(Zi.current),Vn(Et.current),Ms(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(s=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Ls(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Pe(t),null;case 13:if(J(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))zg(),_r(),t.flags|=98560,s=!1;else if(s=Ms(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Tt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else vt!==null&&(Bu(vt),vt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):ed())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return $r(),Eu(e,t),e===null&&Ki(t.stateNode.containerInfo),Pe(t),null;case 10:return $c(t.type._context),Pe(t),null;case 17:return ze(t.type)&&zo(),Pe(t),null;case 19:if(J(se),s=t.memoizedState,s===null)return Pe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)di(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qo(e),o!==null){for(t.flags|=128,di(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Vr&&(t.flags|=128,r=!0,di(s,!1),t.lanes=4194304)}else{if(!r)if(e=Qo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Pe(t),null}else 2*fe()-s.renderingStartTime>Vr&&n!==1073741824&&(t.flags|=128,r=!0,di(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=se.current,Y(se,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function ww(e,t){switch(Lc(t),t.tag){case 1:return ze(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),J(Oe),J(Ie),zc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(J(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(se),null;case 4:return $r(),null;case 10:return $c(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var $s=!1,Ae=!1,Sw=typeof WeakSet=="function"?WeakSet:Set,D=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Au(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Zf=!1;function kw(e,t){if(fu=No,e=Ag(),Rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},No=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,w=x.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:mt(t.type,y),w);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){ce(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=Zf,Zf=!1,x}function Ri(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Au(t,n,s)}i=i.next}while(i!==r)}}function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function T0(e){var t=e.alternate;t!==null&&(e.alternate=null,T0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Qi],delete t[gu],delete t[iw],delete t[sw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b0(e){return e.tag===5||e.tag===3||e.tag===4}function Jf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(Ru(e,t,n),e=e.sibling;e!==null;)Ru(e,t,n),e=e.sibling}function Iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Iu(e,t,n),e=e.sibling;e!==null;)Iu(e,t,n),e=e.sibling}var Se=null,gt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)P0(e,t,n),n=n.sibling}function P0(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ga,n)}catch{}switch(n.tag){case 5:Ae||vr(n,t);case 6:var r=Se,i=gt;Se=null,Yt(e,t,n),Se=r,gt=i,Se!==null&&(gt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(gt?(e=Se,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),Hi(e)):ll(Se,n.stateNode));break;case 4:r=Se,i=gt,Se=n.stateNode.containerInfo,gt=!0,Yt(e,t,n),Se=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Au(n,t,o),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Ae&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Yt(e,t,n),Ae=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function qf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sw),t.forEach(function(r){var i=Rw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,gt=!1;break e;case 3:Se=a.stateNode.containerInfo,gt=!0;break e;case 4:Se=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Se===null)throw Error(E(160));P0(s,o,i),Se=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ce(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)E0(t,e),t=t.sibling}function E0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{Ri(3,e,e.return),ja(3,e)}catch(y){ce(e,e.return,y)}try{Ri(5,e,e.return)}catch(y){ce(e,e.return,y)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{Fi(i,"")}catch(y){ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xm(i,s),nu(a,o);var c=nu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?tg(i,f):d==="dangerouslySetInnerHTML"?qm(i,f):d==="children"?Fi(i,f):yc(i,d,f,c)}switch(a){case"input":Zl(i,s);break;case"textarea":Zm(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Pr(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qi]=s}catch(y){ce(e,e.return,y)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ce(e,e.return,y)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(t.containerInfo)}catch(y){ce(e,e.return,y)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zc=fe())),r&4&&qf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(c=Ae)||d,pt(t,e),Ae=c):pt(t,e),kt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(f=D=d;D!==null;){switch(p=D,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ri(4,p,p.return);break;case 1:vr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:vr(p,p.return);break;case 22:if(p.memoizedState!==null){tp(f);continue}}g!==null?(g.return=p,D=g):tp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eg("display",o))}catch(y){ce(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){ce(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pt(t,e),kt(e),r&4&&qf(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(b0(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=Jf(e);Iu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jf(e);Ru(e,a,o);break;default:throw Error(E(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cw(e,t,n){D=e,A0(e)}function A0(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$s;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=$s;var c=Ae;if($s=o,(Ae=l)&&!c)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?np(i):l!==null?(l.return=o,D=l):np(i);for(;s!==null;)D=s,A0(s),s=s.sibling;D=i,$s=a,Ae=c}ep(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):ep(e)}}function ep(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Nf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nf(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Hi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ae||t.flags&512&&Du(t)}catch(p){ce(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function tp(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function np(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ja(4,t)}catch(l){ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ce(t,i,l)}}var s=t.return;try{Du(t)}catch(l){ce(t,s,l)}break;case 5:var o=t.return;try{Du(t)}catch(l){ce(t,o,l)}}}catch(l){ce(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var jw=Math.ceil,Jo=Wt.ReactCurrentDispatcher,Qc=Wt.ReactCurrentOwner,lt=Wt.ReactCurrentBatchConfig,O=0,we=null,he=null,Ce=0,Qe=0,yr=bn(0),ve=0,ts=null,Zn=0,Ta=0,Xc=0,Ii=null,Ve=null,Zc=0,Vr=1/0,It=null,qo=!1,Lu=null,gn=null,Ns=!1,un=null,ea=0,Li=0,Mu=null,wo=-1,So=0;function Be(){return O&6?fe():wo!==-1?wo:wo=fe()}function vn(e){return e.mode&1?O&2&&Ce!==0?Ce&-Ce:aw.transition!==null?(So===0&&(So=pg()),So):(e=W,e!==0||(e=window.event,e=e===void 0?16:wg(e.type)),e):1}function xt(e,t,n,r){if(50<Li)throw Li=0,Mu=null,Error(E(185));fs(e,n,r),(!(O&2)||e!==we)&&(e===we&&(!(O&2)&&(Ta|=n),ve===4&&an(e,Ce)),Ue(e,r),n===1&&O===0&&!(t.mode&1)&&(Vr=fe()+500,Sa&&Pn()))}function Ue(e,t){var n=e.callbackNode;a1(e,t);var r=$o(e,e===we?Ce:0);if(r===0)n!==null&&df(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&df(n),t===1)e.tag===0?ow(rp.bind(null,e)):Vg(rp.bind(null,e)),nw(function(){!(O&6)&&Pn()}),n=null;else{switch(hg(r)){case 1:n=Cc;break;case 4:n=dg;break;case 16:n=Bo;break;case 536870912:n=fg;break;default:n=Bo}n=$0(n,D0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function D0(e,t){if(wo=-1,So=0,O&6)throw Error(E(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=$o(e,e===we?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ta(e,r);else{t=r;var i=O;O|=2;var s=I0();(we!==e||Ce!==t)&&(It=null,Vr=fe()+500,Un(e,t));do try{Pw();break}catch(a){R0(e,a)}while(!0);Bc(),Jo.current=s,O=i,he!==null?t=0:(we=null,Ce=0,t=ve)}if(t!==0){if(t===2&&(i=au(e),i!==0&&(r=i,t=_u(e,i))),t===1)throw n=ts,Un(e,0),an(e,r),Ue(e,fe()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Tw(i)&&(t=ta(e,r),t===2&&(s=au(e),s!==0&&(r=s,t=_u(e,s))),t===1))throw n=ts,Un(e,0),an(e,r),Ue(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Mn(e,Ve,It);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Zc+500-fe(),10<t)){if($o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mu(Mn.bind(null,e,Ve,It),t);break}Mn(e,Ve,It);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jw(r/1960))-r,10<r){e.timeoutHandle=mu(Mn.bind(null,e,Ve,It),r);break}Mn(e,Ve,It);break;case 5:Mn(e,Ve,It);break;default:throw Error(E(329))}}}return Ue(e,fe()),e.callbackNode===n?D0.bind(null,e):null}function _u(e,t){var n=Ii;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=ta(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Bu(t)),e}function Bu(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function Tw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Xc,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function rp(e){if(O&6)throw Error(E(327));Ir();var t=$o(e,0);if(!(t&1))return Ue(e,fe()),null;var n=ta(e,t);if(e.tag!==0&&n===2){var r=au(e);r!==0&&(t=r,n=_u(e,r))}if(n===1)throw n=ts,Un(e,0),an(e,t),Ue(e,fe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ve,It),Ue(e,fe()),null}function Jc(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Vr=fe()+500,Sa&&Pn())}}function Jn(e){un!==null&&un.tag===0&&!(O&6)&&Ir();var t=O;O|=1;var n=lt.transition,r=W;try{if(lt.transition=null,W=1,e)return e()}finally{W=r,lt.transition=n,O=t,!(O&6)&&Pn()}}function qc(){Qe=yr.current,J(yr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tw(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:$r(),J(Oe),J(Ie),zc();break;case 5:Oc(r);break;case 4:$r();break;case 13:J(se);break;case 19:J(se);break;case 10:$c(r.type._context);break;case 22:case 23:qc()}n=n.return}if(we=e,he=e=yn(e.current,null),Ce=Qe=t,ve=0,ts=null,Xc=Ta=Zn=0,Ve=Ii=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return e}function R0(e,t){do{var n=he;try{if(Bc(),vo.current=Zo,Xo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xo=!1}if(Xn=0,ye=ge=ae=null,Di=!1,Ji=0,Qc.current=null,n===null||n.return===null){ve=1,ts=t,he=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Hf(o);if(g!==null){g.flags&=-257,Wf(g,o,a,s,t),g.mode&1&&Uf(s,c,t),t=g,l=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Uf(s,c,t),ed();break e}l=Error(E(426))}}else if(ie&&a.mode&1){var w=Hf(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Wf(w,o,a,s,t),Mc(Nr(l,a));break e}}s=l=Nr(l,a),ve!==4&&(ve=2),Ii===null?Ii=[s]:Ii.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=h0(s,l,t);$f(s,m);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gn===null||!gn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=m0(s,a,t);$f(s,S);break e}}s=s.return}while(s!==null)}M0(n)}catch(j){t=j,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function I0(){var e=Jo.current;return Jo.current=Zo,e===null?Zo:e}function ed(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||!(Zn&268435455)&&!(Ta&268435455)||an(we,Ce)}function ta(e,t){var n=O;O|=2;var r=I0();(we!==e||Ce!==t)&&(It=null,Un(e,t));do try{bw();break}catch(i){R0(e,i)}while(!0);if(Bc(),O=n,Jo.current=r,he!==null)throw Error(E(261));return we=null,Ce=0,ve}function bw(){for(;he!==null;)L0(he)}function Pw(){for(;he!==null&&!Jx();)L0(he)}function L0(e){var t=B0(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?M0(e):he=t,Qc.current=null}function M0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ww(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(n=xw(n,t,Qe),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function Mn(e,t,n){var r=W,i=lt.transition;try{lt.transition=null,W=1,Ew(e,t,n,r)}finally{lt.transition=i,W=r}return null}function Ew(e,t,n,r){do Ir();while(un!==null);if(O&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(l1(e,s),e===we&&(he=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ns||(Ns=!0,$0(Bo,function(){return Ir(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=W;W=1;var a=O;O|=4,Qc.current=null,kw(e,n),E0(n,e),Y1(pu),No=!!fu,pu=fu=null,e.current=n,Cw(n),qx(),O=a,W=o,lt.transition=s}else e.current=n;if(Ns&&(Ns=!1,un=e,ea=i),s=e.pendingLanes,s===0&&(gn=null),n1(n.stateNode),Ue(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,e=Lu,Lu=null,e;return ea&1&&e.tag!==0&&Ir(),s=e.pendingLanes,s&1?e===Mu?Li++:(Li=0,Mu=e):Li=0,Pn(),null}function Ir(){if(un!==null){var e=hg(ea),t=lt.transition,n=W;try{if(lt.transition=null,W=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,ea=0,O&6)throw Error(E(331));var i=O;for(O|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Ri(8,d,s)}var f=d.child;if(f!==null)f.return=d,D=f;else for(;D!==null;){d=D;var p=d.sibling,g=d.return;if(T0(d),d===c){D=null;break}if(p!==null){p.return=g,D=p;break}D=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ri(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var h=e.current;for(D=h;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=h;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ja(9,a)}}catch(j){ce(a,a.return,j)}if(a===o){D=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,D=S;break e}D=a.return}}if(O=i,Pn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ga,e)}catch{}r=!0}return r}finally{W=n,lt.transition=t}}return!1}function ip(e,t,n){t=Nr(n,t),t=h0(e,t,1),e=mn(e,t,1),t=Be(),e!==null&&(fs(e,1,t),Ue(e,t))}function ce(e,t,n){if(e.tag===3)ip(e,e,n);else for(;t!==null;){if(t.tag===3){ip(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=Nr(n,e),e=m0(t,e,1),t=mn(t,e,1),e=Be(),t!==null&&(fs(t,1,e),Ue(t,e));break}}t=t.return}}function Aw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Ce&n)===n&&(ve===4||ve===3&&(Ce&130023424)===Ce&&500>fe()-Zc?Un(e,0):Xc|=n),Ue(e,t)}function _0(e,t){t===0&&(e.mode&1?(t=Es,Es<<=1,!(Es&130023424)&&(Es=4194304)):t=1);var n=Be();e=zt(e,t),e!==null&&(fs(e,t,n),Ue(e,n))}function Dw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_0(e,n)}function Rw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),_0(e,n)}var B0;B0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,yw(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ie&&t.flags&1048576&&Fg(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xo(e,t),e=t.pendingProps;var i=Mr(t,Ie.current);Rr(t,n),i=Hc(null,t,r,e,i,n);var s=Wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(s=!0,Uo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(t),i.updater=Ca,t.stateNode=i,i._reactInternals=t,ku(t,r,e,n),t=Tu(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&Ic(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lw(r),e=mt(r,e),i){case 0:t=ju(null,t,r,e,n);break e;case 1:t=Yf(null,t,r,e,n);break e;case 11:t=Gf(null,t,r,e,n);break e;case 14:t=Kf(null,t,r,mt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ju(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Yf(e,t,r,i,n);case 3:e:{if(x0(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Gg(e,t),Yo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Nr(Error(E(423)),t),t=Qf(e,t,r,n,i);break e}else if(r!==i){i=Nr(Error(E(424)),t),t=Qf(e,t,r,n,i);break e}else for(Xe=hn(t.stateNode.containerInfo.firstChild),Ze=t,ie=!0,vt=null,n=Hg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Ut(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Kg(t),e===null&&xu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,hu(r,i)?o=null:s!==null&&hu(r,s)&&(t.flags|=32),y0(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&xu(t),null;case 13:return w0(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Gf(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Y(Go,r._currentValue),r._currentValue=o,s!==null)if(St(s.value,o)){if(s.children===i.children&&!Oe.current){t=Ut(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$t(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=ut(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Kf(e,t,r,i,n);case 15:return g0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),xo(e,t),t.tag=1,ze(r)?(e=!0,Uo(t)):e=!1,Rr(t,n),p0(t,r,i),ku(t,r,i,n),Tu(null,t,r,!0,e,n);case 19:return S0(e,t,n);case 22:return v0(e,t,n)}throw Error(E(156,t.tag))};function $0(e,t){return cg(e,t)}function Iw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Iw(e,t,n,r)}function td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lw(e){if(typeof e=="function")return td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===Sc)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")td(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Hn(n.children,i,s,t);case xc:o=8,i|=8;break;case Gl:return e=at(12,n,t,i|2),e.elementType=Gl,e.lanes=s,e;case Kl:return e=at(13,n,t,i),e.elementType=Kl,e.lanes=s,e;case Yl:return e=at(19,n,t,i),e.elementType=Yl,e.lanes=s,e;case Km:return ba(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wm:o=10;break e;case Gm:o=9;break e;case wc:o=11;break e;case Sc:o=14;break e;case rn:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=at(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Hn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function ba(e,t,n,r){return e=at(22,e,r,t),e.elementType=Km,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nd(e,t,n,r,i,s,o,a,l){return e=new Mw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=at(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(s),e}function _w(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function N0(e){if(!e)return kn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ze(n))return Ng(e,n,t)}return t}function V0(e,t,n,r,i,s,o,a,l){return e=nd(n,r,!0,e,i,s,o,a,l),e.context=N0(null),n=e.current,r=Be(),i=vn(n),s=$t(r,i),s.callback=t??null,mn(n,s,i),e.current.lanes=i,fs(e,i,r),Ue(e,r),e}function Pa(e,t,n,r){var i=t.current,s=Be(),o=vn(i);return n=N0(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,o),e!==null&&(xt(e,i,o,s),go(e,i,o)),o}function na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rd(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function Bw(){return null}var F0=typeof reportError=="function"?reportError:function(e){console.error(e)};function id(e){this._internalRoot=e}Ea.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Pa(e,t,null,null)};Ea.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Pa(null,e,null,null)}),t[Ot]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=vg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&xg(e)}};function sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function op(){}function $w(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=na(o);s.call(c)}}var o=V0(t,r,e,0,null,!1,!1,"",op);return e._reactRootContainer=o,e[Ot]=o.current,Ki(e.nodeType===8?e.parentNode:e),Jn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=na(l);a.call(c)}}var l=nd(e,0,!1,null,null,!1,!1,"",op);return e._reactRootContainer=l,e[Ot]=l.current,Ki(e.nodeType===8?e.parentNode:e),Jn(function(){Pa(t,l,n,r)}),l}function Da(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=na(o);a.call(l)}}Pa(t,o,e,i)}else o=$w(n,t,e,i,r);return na(o)}mg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&(jc(t,n|1),Ue(t,fe()),!(O&6)&&(Vr=fe()+500,Pn()))}break;case 13:Jn(function(){var r=zt(e,1);if(r!==null){var i=Be();xt(r,e,1,i)}}),rd(e,1)}};Tc=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Be();xt(t,e,134217728,n)}rd(e,134217728)}};gg=function(e){if(e.tag===13){var t=vn(e),n=zt(e,t);if(n!==null){var r=Be();xt(n,e,t,r)}rd(e,t)}};vg=function(){return W};yg=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};iu=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wa(r);if(!i)throw Error(E(90));Qm(r),Zl(r,i)}}}break;case"textarea":Zm(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};ig=Jc;sg=Jn;var Nw={usingClientEntryPoint:!1,Events:[hs,fr,wa,ng,rg,Jc]},fi={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lg(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{ga=Vs.inject(Vw),Pt=Vs}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(t))throw Error(E(200));return _w(e,t,null,n)};tt.createRoot=function(e,t){if(!sd(e))throw Error(E(299));var n=!1,r="",i=F0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nd(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,Ki(e.nodeType===8?e.parentNode:e),new id(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=lg(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return Jn(e)};tt.hydrate=function(e,t,n){if(!Aa(t))throw Error(E(200));return Da(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!sd(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=F0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=V0(t,null,e,1,n??null,i,!1,s,o),e[Ot]=t.current,Ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ea(t)};tt.render=function(e,t,n){if(!Aa(t))throw Error(E(200));return Da(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Aa(e))throw Error(E(40));return e._reactRootContainer?(Jn(function(){Da(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};tt.unstable_batchedUpdates=Jc;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Aa(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Da(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(e){console.error(e)}}O0(),Om.exports=tt;var Fw=Om.exports,z0,ap=Fw;z0=ap.createRoot,ap.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ns.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const lp="popstate";function Ow(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return $u("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ra(i)}return Uw(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function od(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zw(){return Math.random().toString(36).substr(2,8)}function up(e,t){return{usr:e.state,key:e.key,idx:t}}function $u(e,t,n,r){return n===void 0&&(n=null),ns({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qr(t):t,{state:n,key:t&&t.key||r||zw()})}function ra(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Uw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=cn.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(ns({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=cn.Pop;let w=d(),m=w==null?null:w-c;c=w,l&&l({action:a,location:y.location,delta:m})}function p(w,m){a=cn.Push;let h=$u(y.location,w,m);c=d()+1;let v=up(h,c),S=y.createHref(h);try{o.pushState(v,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function g(w,m){a=cn.Replace;let h=$u(y.location,w,m);c=d();let v=up(h,c),S=y.createHref(h);o.replaceState(v,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function x(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:ra(w);return h=h.replace(/ $/,"%20"),me(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let y={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lp,f),l=w,()=>{i.removeEventListener(lp,f),l=null}},createHref(w){return t(i,w)},createURL:x,encodeLocation(w){let m=x(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:g,go(w){return o.go(w)}};return y}var cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cp||(cp={}));function Hw(e,t,n){return n===void 0&&(n="/"),Ww(e,t,n)}function Ww(e,t,n,r){let i=typeof t=="string"?qr(t):t,s=ad(i.pathname||"/",n);if(s==null)return null;let o=U0(e);Gw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=iS(s);a=tS(o[l],c)}return a}function U0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=xn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U0(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:qw(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of H0(s.path))i(s,o,l)}),t}function H0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=H0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Gw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kw=/^:[\w-]+$/,Yw=3,Qw=2,Xw=1,Zw=10,Jw=-2,dp=e=>e==="*";function qw(e,t){let n=e.split("/"),r=n.length;return n.some(dp)&&(r+=Jw),t&&(r+=Qw),n.filter(i=>!dp(i)).reduce((i,s)=>i+(Kw.test(s)?Yw:s===""?Xw:Zw),r)}function eS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function tS(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=nS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:xn([s,f.pathname]),pathnameBase:uS(xn([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=xn([s,f.pathnameBase]))}return o}function nS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[f];return g&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function rS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),od(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function iS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return od(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const sS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oS=e=>sS.test(e);function aS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qr(e):e,s;if(n)if(oS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),od(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=fp(n.substring(1),"/"):s=fp(n,t)}else s=t;return{pathname:s,search:cS(r),hash:dS(i)}}function fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function W0(e,t){let n=lS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function G0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qr(e):(i=ns({},e),me(!i.pathname||!i.pathname.includes("?"),yl("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),yl("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),yl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=aS(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),uS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const K0=["post","put","patch","delete"];new Set(K0);const pS=["get",...K0];new Set(pS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rs.apply(this,arguments)}const ld=C.createContext(null),hS=C.createContext(null),tr=C.createContext(null),Ra=C.createContext(null),nr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Y0=C.createContext(null);function mS(e,t){let{relative:n}=t===void 0?{}:t;gs()||me(!1);let{basename:r,navigator:i}=C.useContext(tr),{hash:s,pathname:o,search:a}=X0(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function gs(){return C.useContext(Ra)!=null}function Ia(){return gs()||me(!1),C.useContext(Ra).location}function Q0(e){C.useContext(tr).static||C.useLayoutEffect(e)}function gS(){let{isDataRoute:e}=C.useContext(nr);return e?AS():vS()}function vS(){gs()||me(!1);let e=C.useContext(ld),{basename:t,future:n,navigator:r}=C.useContext(tr),{matches:i}=C.useContext(nr),{pathname:s}=Ia(),o=JSON.stringify(W0(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return Q0(()=>{a.current=!0}),C.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=G0(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:xn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function X0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(tr),{matches:i}=C.useContext(nr),{pathname:s}=Ia(),o=JSON.stringify(W0(i,r.v7_relativeSplatPath));return C.useMemo(()=>G0(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function yS(e,t){return xS(e,t)}function xS(e,t,n,r){gs()||me(!1);let{navigator:i}=C.useContext(tr),{matches:s}=C.useContext(nr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ia(),d;if(t){var f;let w=typeof t=="string"?qr(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||me(!1),d=w}else d=c;let p=d.pathname||"/",g=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=Hw(e,{pathname:g}),y=jS(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:xn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:xn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&y?C.createElement(Ra.Provider,{value:{location:rs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:cn.Pop}},y):y}function wS(){let e=ES(),t=fS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const SS=C.createElement(wS,null);class kS extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(nr.Provider,{value:this.props.routeContext},C.createElement(Y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CS(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(ld);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(nr.Provider,{value:t},r)}function jS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||me(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,x=!1,y=null,w=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||SS,l&&(c<0&&p===0?(DS("route-fallback"),x=!0,w=null):c===p&&(x=!0,w=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),h=()=>{let v;return g?v=y:x?v=w:f.route.Component?v=C.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,C.createElement(CS,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?C.createElement(kS,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Z0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Z0||{}),J0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(J0||{});function TS(e){let t=C.useContext(ld);return t||me(!1),t}function bS(e){let t=C.useContext(hS);return t||me(!1),t}function PS(e){let t=C.useContext(nr);return t||me(!1),t}function q0(e){let t=PS(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function ES(){var e;let t=C.useContext(Y0),n=bS(J0.UseRouteError),r=q0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function AS(){let{router:e}=TS(Z0.UseNavigateStable),t=q0(),n=C.useRef(!1);return Q0(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rs({fromRouteId:t},s)))},[e,t])}const pp={};function DS(e,t,n){pp[e]||(pp[e]=!0)}function RS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Co(e){me(!1)}function IS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=cn.Pop,navigator:s,static:o=!1,future:a}=e;gs()&&me(!1);let l=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:l,navigator:s,static:o,future:rs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:x="default"}=r,y=C.useMemo(()=>{let w=ad(d,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:g,key:x},navigationType:i}},[l,d,f,p,g,x,i]);return y==null?null:C.createElement(tr.Provider,{value:c},C.createElement(Ra.Provider,{children:n,value:y}))}function LS(e){let{children:t,location:n}=e;return yS(Nu(t),n)}new Promise(()=>{});function Nu(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let s=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Nu(r.props.children,s));return}r.type!==Co&&me(!1),!r.props.index||!r.props.children||me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Nu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vu.apply(this,arguments)}function MS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _S(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function BS(e,t){return e.button===0&&(!t||t==="_self")&&!_S(e)}const $S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],NS="6";try{window.__reactRouterVersion=NS}catch{}const VS="startTransition",hp=Ax[VS];function FS(e){let{basename:t,children:n,future:r,window:i}=e,s=C.useRef();s.current==null&&(s.current=Ow({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=C.useCallback(f=>{c&&hp?hp(()=>l(f)):l(f)},[l,c]);return C.useLayoutEffect(()=>o.listen(d),[o,d]),C.useEffect(()=>RS(r),[r]),C.createElement(IS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const OS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ev=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,p=MS(t,$S),{basename:g}=C.useContext(tr),x,y=!1;if(typeof c=="string"&&zS.test(c)&&(x=c,OS))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),j=ad(S.pathname,g);S.origin===v.origin&&j!=null?c=j+S.search+S.hash:y=!0}catch{}let w=mS(c,{relative:i}),m=US(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||m(v)}return C.createElement("a",Vu({},p,{href:x||w,onClick:y||s?r:h,ref:n,target:l}))});var mp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mp||(mp={}));var gp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gp||(gp={}));function US(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=gS(),c=Ia(),d=X0(e,{relative:o});return C.useCallback(f=>{if(BS(f,n)){f.preventDefault();let p=r!==void 0?r:ra(c)===ra(d);l(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,n,e,s,o,a])}const tv=C.createContext({isDark:!0,toggleTheme:()=>{}}),HS=({children:e})=>{const[t,n]=C.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});C.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),C.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=o=>{localStorage.getItem("theme")||n(o.matches)};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=()=>n(!t);return u.jsx(tv.Provider,{value:{isDark:t,toggleTheme:r},children:e})},nv=()=>{const e=C.useContext(tv);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var De=function(){return De=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},De.apply(this,arguments)};function is(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Z="-ms-",Mi="-moz-",U="-webkit-",rv="comm",La="rule",ud="decl",WS="@import",iv="@keyframes",GS="@layer",sv=Math.abs,cd=String.fromCharCode,Fu=Object.assign;function KS(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function ov(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function jo(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function av(e){return e.length}function Si(e,t){return t.push(e),e}function YS(e,t){return e.map(t).join("")}function vp(e,t){return e.filter(function(n){return!Lt(n,t)})}var Ma=1,Or=1,lv=0,dt=0,pe=0,ei="";function _a(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ma,column:Or,length:o,return:"",siblings:a}}function tn(e,t){return Fu(_a("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sr(e){for(;e.root;)e=tn(e.root,{children:[e]});Si(e,e.siblings)}function QS(){return pe}function XS(){return pe=dt>0?xe(ei,--dt):0,Or--,pe===10&&(Or=1,Ma--),pe}function wt(){return pe=dt<lv?xe(ei,dt++):0,Or++,pe===10&&(Or=1,Ma++),pe}function Wn(){return xe(ei,dt)}function To(){return dt}function Ba(e,t){return Fr(ei,e,t)}function Ou(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZS(e){return Ma=Or=1,lv=jt(ei=e),dt=0,[]}function JS(e){return ei="",e}function xl(e){return ov(Ba(dt-1,zu(e===91?e+2:e===40?e+1:e)))}function qS(e){for(;(pe=Wn())&&pe<33;)wt();return Ou(e)>2||Ou(pe)>3?"":" "}function e2(e,t){for(;--t&&wt()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return Ba(e,To()+(t<6&&Wn()==32&&wt()==32))}function zu(e){for(;wt();)switch(pe){case e:return dt;case 34:case 39:e!==34&&e!==39&&zu(pe);break;case 40:e===41&&zu(e);break;case 92:wt();break}return dt}function t2(e,t){for(;wt()&&e+pe!==57;)if(e+pe===84&&Wn()===47)break;return"/*"+Ba(t,dt-1)+"*"+cd(e===47?e:wt())}function n2(e){for(;!Ou(Wn());)wt();return Ba(e,dt)}function r2(e){return JS(bo("",null,null,null,[""],e=ZS(e),0,[0],e))}function bo(e,t,n,r,i,s,o,a,l){for(var c=0,d=0,f=o,p=0,g=0,x=0,y=1,w=1,m=1,h=0,v="",S=i,j=s,T=r,b=v;w;)switch(x=h,h=wt()){case 40:if(x!=108&&xe(b,f-1)==58){jo(b+=$(xl(h),"&","&\f"),"&\f",sv(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:b+=xl(h);break;case 9:case 10:case 13:case 32:b+=qS(x);break;case 92:b+=e2(To()-1,7);continue;case 47:switch(Wn()){case 42:case 47:Si(i2(t2(wt(),To()),t,n,l),l);break;default:b+="/"}break;case 123*y:a[c++]=jt(b)*m;case 125*y:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+d:m==-1&&(b=$(b,/\f/g,"")),g>0&&jt(b)-f&&Si(g>32?xp(b+";",r,n,f-1,l):xp($(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(Si(T=yp(b,t,n,c,d,i,a,v,S=[],j=[],f,s),s),h===123)if(d===0)bo(b,t,T,T,S,s,f,a,j);else switch(p===99&&xe(b,3)===110?100:p){case 100:case 108:case 109:case 115:bo(e,T,T,r&&Si(yp(e,T,T,0,0,i,a,v,i,S=[],f,j),j),i,j,f,a,r?S:j);break;default:bo(b,T,T,T,[""],j,0,a,j)}}c=d=g=0,y=m=1,v=b="",f=o;break;case 58:f=1+jt(b),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&XS()==125)continue}switch(b+=cd(h),h*y){case 38:m=d>0?1:(b+="\f",-1);break;case 44:a[c++]=(jt(b)-1)*m,m=1;break;case 64:Wn()===45&&(b+=xl(wt())),p=Wn(),d=f=jt(v=b+=n2(To())),h++;break;case 45:x===45&&jt(b)==2&&(y=0)}}return s}function yp(e,t,n,r,i,s,o,a,l,c,d,f){for(var p=i-1,g=i===0?s:[""],x=av(g),y=0,w=0,m=0;y<r;++y)for(var h=0,v=Fr(e,p+1,p=sv(w=o[y])),S=e;h<x;++h)(S=ov(w>0?g[h]+" "+v:$(v,/&\f/g,g[h])))&&(l[m++]=S);return _a(e,t,n,i===0?La:a,l,c,d,f)}function i2(e,t,n,r){return _a(e,t,n,rv,cd(QS()),Fr(e,2,-2),0,r)}function xp(e,t,n,r,i){return _a(e,t,n,ud,Fr(e,0,r),Fr(e,r+1,-1),r,i)}function uv(e,t,n){switch(KS(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Mi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Mi+e+Z+e+e;case 5936:switch(xe(e,t+11)){case 114:return U+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Z+e+e;case 6165:return U+e+Z+"flex-"+e+e;case 5187:return U+e+$(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return U+e+Z+"flex-item-"+$(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":Z+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return U+e+Z+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Z+$(e,"shrink","negative")+e;case 5292:return U+e+Z+$(e,"basis","preferred-size")+e;case 6060:return U+"box-"+$(e,"-grow","")+U+e+Z+$(e,"grow","positive")+e;case 4554:return U+$(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return Z+"grid-column-align"+Fr(e,t)+e;break;case 2592:case 3360:return Z+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~jo(e+(n=n[t].value),"span",0)?e:Z+$(e,"-start","")+e+Z+"grid-row-span:"+(~jo(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":Z+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:Z+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Mi+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~jo(e,"stretch",0)?uv($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return Z+i+":"+s+c+(o?Z+i+"-span:"+(a?l:+l-+s)+c:"")+e});case 4949:if(xe(e,t+6)===121)return $(e,":",":"+U)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(xe(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Z+"$2box$3")+e;case 100:return $(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function ia(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function s2(e,t,n,r){switch(e.type){case GS:if(e.children.length)break;case WS:case ud:return e.return=e.return||e.value;case rv:return"";case iv:return e.return=e.value+"{"+ia(e.children,r)+"}";case La:if(!jt(e.value=e.props.join(",")))return""}return jt(n=ia(e.children,r))?e.return=e.value+"{"+n+"}":""}function o2(e){var t=av(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function a2(e){return function(t){t.root||(t=t.return)&&e(t)}}function l2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ud:e.return=uv(e.value,e.length,n);return;case iv:return ia([tn(e,{value:$(e.value,"@","@"+U)})],r);case La:if(e.length)return YS(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(tn(e,{props:[$(i,/:(read-\w+)/,":"+Mi+"$1")]})),sr(tn(e,{props:[i]})),Fu(e,{props:vp(n,r)});break;case"::placeholder":sr(tn(e,{props:[$(i,/:(plac\w+)/,":"+U+"input-$1")]})),sr(tn(e,{props:[$(i,/:(plac\w+)/,":"+Mi+"$1")]})),sr(tn(e,{props:[$(i,/:(plac\w+)/,Z+"input-$1")]})),sr(tn(e,{props:[i]})),Fu(e,{props:vp(n,r)});break}return""})}}var u2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},zr=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",cv="active",dv="data-styled-version",$a="6.1.19",dd=`/*!sc*/
`,sa=typeof window<"u"&&typeof document<"u",c2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),d2={},Na=Object.freeze([]),Ur=Object.freeze({});function fv(e,t,n){return n===void 0&&(n=Ur),e.theme!==n.theme&&e.theme||t||n.theme}var pv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),f2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p2=/(^-|-$)/g;function wp(e){return e.replace(f2,"-").replace(p2,"")}var h2=/(a)(d)/gi,Fs=52,Sp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Uu(e){var t,n="";for(t=Math.abs(e);t>Fs;t=t/Fs|0)n=Sp(t%Fs)+n;return(Sp(t%Fs)+n).replace(h2,"$1-$2")}var wl,hv=5381,xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mv=function(e){return xr(hv,e)};function gv(e){return Uu(mv(e)>>>0)}function m2(e){return e.displayName||e.name||"Component"}function Sl(e){return typeof e=="string"&&!0}var vv=typeof Symbol=="function"&&Symbol.for,yv=vv?Symbol.for("react.memo"):60115,g2=vv?Symbol.for("react.forward_ref"):60112,v2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x2=((wl={})[g2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wl[yv]=xv,wl);function kp(e){return("type"in(t=e)&&t.type.$$typeof)===yv?xv:"$$typeof"in e?x2[e.$$typeof]:v2;var t}var w2=Object.defineProperty,S2=Object.getOwnPropertyNames,Cp=Object.getOwnPropertySymbols,k2=Object.getOwnPropertyDescriptor,C2=Object.getPrototypeOf,jp=Object.prototype;function wv(e,t,n){if(typeof t!="string"){if(jp){var r=C2(t);r&&r!==jp&&wv(e,r,n)}var i=S2(t);Cp&&(i=i.concat(Cp(t)));for(var s=kp(e),o=kp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in y2||n&&n[l]||o&&l in o||s&&l in s)){var c=k2(t,l);try{w2(e,l,c)}catch{}}}}return e}function Hr(e){return typeof e=="function"}function fd(e){return typeof e=="object"&&"styledComponentId"in e}function Fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ss(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wu(e,t,n){if(n===void 0&&(n=!1),!n&&!ss(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wu(e[r],t[r]);else if(ss(t))for(var r in t)e[r]=Wu(e[r],t[r]);return e}function pd(e,t){Object.defineProperty(e,"toString",{value:t})}function vs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var j2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw vs(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(dd);return n},e}(),Po=new Map,oa=new Map,Eo=1,Os=function(e){if(Po.has(e))return Po.get(e);for(;oa.has(Eo);)Eo++;var t=Eo++;return Po.set(e,t),oa.set(t,e),t},T2=function(e,t){Eo=t+1,Po.set(e,t),oa.set(t,e)},b2="style[".concat(zr,"][").concat(dv,'="').concat($a,'"]'),P2=new RegExp("^".concat(zr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E2=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},A2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(dd),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(P2);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(T2(d,c),E2(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Tp=function(e){for(var t=document.querySelectorAll(b2),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(zr)!==cv&&(A2(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function D2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(zr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(zr,cv),r.setAttribute(dv,$a);var o=D2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},R2=function(){function e(t){this.element=Sv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw vs(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),I2=function(){function e(t){this.element=Sv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),L2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bp=sa,M2={isServer:!sa,useCSSOMInjection:!c2},aa=function(){function e(t,n,r){t===void 0&&(t=Ur),n===void 0&&(n={});var i=this;this.options=De(De({},M2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&sa&&bp&&(bp=!1,Tp(this)),pd(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(m){return oa.get(m)}(f);if(p===void 0)return"continue";var g=s.names.get(p),x=o.getGroup(f);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(zr,".g").concat(f,'[id="').concat(p,'"]'),w="";g!==void 0&&g.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),l+="".concat(x).concat(y,'{content:"').concat(w,'"}').concat(dd)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return Os(t)},e.prototype.rehydrate=function(){!this.server&&sa&&Tp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(De(De({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new L2(i):r?new R2(i):new I2(i)}(this.options),new j2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Os(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Os(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Os(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_2=/&/g,B2=/^\s*\/\/.*$/gm;function kv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kv(n.children,t)),n})}function $2(e){var t,n,r,i=Ur,s=i.options,o=s===void 0?Ur:s,a=i.plugins,l=a===void 0?Na:a,c=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===La&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(_2,n).replace(r,c))}),o.prefix&&d.push(l2),d.push(s2);var f=function(p,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=p.replace(B2,""),m=r2(x||g?"".concat(x," ").concat(g," { ").concat(w," }"):w);o.namespace&&(m=kv(m,o.namespace));var h=[];return ia(m,o2(d.concat(a2(function(v){return h.push(v)})))),h};return f.hash=l.length?l.reduce(function(p,g){return g.name||vs(15),xr(p,g.name)},hv).toString():"",f}var N2=new aa,Gu=$2(),Cv=bt.createContext({shouldForwardProp:void 0,styleSheet:N2,stylis:Gu});Cv.Consumer;bt.createContext(void 0);function Ku(){return C.useContext(Cv)}var V2=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Gu);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pd(this,function(){throw vs(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Gu),this.name+t.hash},e}(),F2=function(e){return e>="A"&&e<="Z"};function Pp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;F2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jv=function(e){return e==null||e===!1||e===""},Tv=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!jv(s)&&(Array.isArray(s)&&s.isCss||Hr(s)?r.push("".concat(Pp(i),":"),s,";"):ss(s)?r.push.apply(r,is(is(["".concat(i," {")],Tv(s),!1),["}"],!1)):r.push("".concat(Pp(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in u2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function wn(e,t,n,r){if(jv(e))return[];if(fd(e))return[".".concat(e.styledComponentId)];if(Hr(e)){if(!Hr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return wn(i,t,n,r)}var s;return e instanceof V2?n?(e.inject(n,r),[e.getName(r)]):[e]:ss(e)?Tv(e):Array.isArray(e)?Array.prototype.concat.apply(Na,e.map(function(o){return wn(o,t,n,r)})):[e.toString()]}function bv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!fd(n))return!1}return!0}var O2=mv($a),z2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&bv(t),this.componentId=n,this.baseHash=xr(O2,n),this.baseStyle=r,aa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fn(i,this.staticRulesId);else{var s=Hu(wn(this.rules,t,n,r)),o=Uu(xr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Fn(i,o),this.staticRulesId=o}else{for(var l=xr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=Hu(wn(f,t,n,r));l=xr(l,p+d),c+=p}}if(c){var g=Uu(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Fn(i,g)}}return i},e}(),hd=bt.createContext(void 0);hd.Consumer;var kl={};function U2(e,t,n){var r=fd(e),i=e,s=!Sl(e),o=t.attrs,a=o===void 0?Na:o,l=t.componentId,c=l===void 0?function(S,j){var T=typeof S!="string"?"sc":wp(S);kl[T]=(kl[T]||0)+1;var b="".concat(T,"-").concat(gv($a+T+kl[T]));return j?"".concat(j,"-").concat(b):b}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(S){return Sl(S)?"styled.".concat(S):"Styled(".concat(m2(S),")")}(e):d,p=t.displayName&&t.componentId?"".concat(wp(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function(S,j){return y(S,j)&&w(S,j)}}else x=y}var m=new z2(n,p,r?i.componentStyle:void 0);function h(S,j){return function(T,b,P){var _=T.attrs,I=T.componentStyle,G=T.defaultProps,He=T.foldedComponentIds,Le=T.styledComponentId,ft=T.target,B=bt.useContext(hd),K=Ku(),N=T.shouldForwardProp||K.shouldForwardProp,A=fv(b,B,G)||Ur,R=function(Gt,Ge,Rt){for(var ii,An=De(De({},Ge),{className:void 0,theme:Rt}),Wa=0;Wa<Gt.length;Wa+=1){var ks=Hr(ii=Gt[Wa])?ii(An):ii;for(var Kt in ks)An[Kt]=Kt==="className"?Fn(An[Kt],ks[Kt]):Kt==="style"?De(De({},An[Kt]),ks[Kt]):ks[Kt]}return Ge.className&&(An.className=Fn(An.className,Ge.className)),An}(_,b,A),L=R.as||ft,z={};for(var H in R)R[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&R.theme===A||(H==="forwardedAs"?z.as=R.forwardedAs:N&&!N(H,L)||(z[H]=R[H]));var Te=function(Gt,Ge){var Rt=Ku(),ii=Gt.generateAndInjectStyles(Ge,Rt.styleSheet,Rt.stylis);return ii}(I,R),We=Fn(He,Le);return Te&&(We+=" "+Te),R.className&&(We+=" "+R.className),z[Sl(L)&&!pv.has(L)?"class":"className"]=We,P&&(z.ref=P),C.createElement(L,z)}(v,S,j)}h.displayName=f;var v=bt.forwardRef(h);return v.attrs=g,v.componentStyle=m,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?Fn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(j){for(var T=[],b=1;b<arguments.length;b++)T[b-1]=arguments[b];for(var P=0,_=T;P<_.length;P++)Wu(j,_[P],!0);return j}({},i.defaultProps,S):S}}),pd(v,function(){return".".concat(v.styledComponentId)}),s&&wv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Ep(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ap=function(e){return Object.assign(e,{isCss:!0})};function Pv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hr(e)||ss(e))return Ap(wn(Ep(Na,is([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?wn(r):Ap(wn(Ep(r,t)))}function Yu(e,t,n){if(n===void 0&&(n=Ur),!t)throw vs(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Pv.apply(void 0,is([i],s,!1)))};return r.attrs=function(i){return Yu(e,t,De(De({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Yu(e,t,De(De({},n),i))},r}var Ev=function(e){return Yu(U2,e)},k=Ev;pv.forEach(function(e){k[e]=Ev(e)});var H2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=bv(t),aa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Hu(wn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&aa.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function W2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Pv.apply(void 0,is([e],t,!1)),i="sc-global-".concat(gv(JSON.stringify(r))),s=new H2(r,i),o=function(l){var c=Ku(),d=bt.useContext(hd),f=bt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,l,c.styleSheet,d,c.stylis),bt.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,l,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,d,c.stylis]),null};function a(l,c,d,f,p){if(s.isStatic)s.renderStyles(l,d2,d,p);else{var g=De(De({},c),{theme:fv(c,f,o.defaultProps)});s.renderStyles(l,g,d,p)}}return bt.memo(o)}const G2=W2`
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
`,K2=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,Y2=k.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,Q2=()=>{const{isDark:e}=nv();return u.jsx(K2,{children:u.jsx(Y2,{$isDark:e})})},md=C.createContext({});function gd(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const Va=C.createContext(null),vd=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class X2 extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Z2({children:e,isPresent:t}){const n=C.useId(),r=C.useRef(null),i=C.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=C.useContext(vd);return C.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),u.jsx(X2,{isPresent:t,childRef:r,sizeRef:i,children:C.cloneElement(e,{ref:r})})}const J2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=gd(q2),l=C.useId(),c=C.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),d=C.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return C.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),C.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=u.jsx(Z2,{isPresent:n,children:e})),u.jsx(Va.Provider,{value:d,children:e})};function q2(){return new Map}function Av(e=!0){const t=C.useContext(Va);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=C.useId();C.useEffect(()=>{e&&i(s)},[e]);const o=C.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const zs=e=>e.key||"";function Dp(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const yd=typeof window<"u",Dv=yd?C.useLayoutEffect:C.useEffect,Wr=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Av(o),c=C.useMemo(()=>Dp(e),[e]),d=o&&!a?[]:c.map(zs),f=C.useRef(!0),p=C.useRef(c),g=gd(()=>new Map),[x,y]=C.useState(c),[w,m]=C.useState(c);Dv(()=>{f.current=!1,p.current=c;for(let S=0;S<w.length;S++){const j=zs(w[S]);d.includes(j)?g.delete(j):g.get(j)!==!0&&g.set(j,!1)}},[w,d.length,d.join("-")]);const h=[];if(c!==x){let S=[...c];for(let j=0;j<w.length;j++){const T=w[j],b=zs(T);d.includes(b)||(S.splice(j,0,T),h.push(T))}s==="wait"&&h.length&&(S=h),m(Dp(S)),y(c);return}const{forceRender:v}=C.useContext(md);return u.jsx(u.Fragment,{children:w.map(S=>{const j=zs(S),T=o&&!a?!1:c===w||d.includes(j),b=()=>{if(g.has(j))g.set(j,!0);else return;let P=!0;g.forEach(_=>{_||(P=!1)}),P&&(v==null||v(),m(p.current),o&&(l==null||l()),r&&r())};return u.jsx(J2,{isPresent:T,initial:!f.current||n?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:T?void 0:b,children:S},j)})})},Je=e=>e;let Rv=Je;function xd(e){let t;return()=>(t===void 0&&(t=e()),t)}const Gr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Nt=e=>e*1e3,Vt=e=>e/1e3,ek={useManualTiming:!1};function tk(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,d=!1,f=!1)=>{const g=f&&r?t:n;return d&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const Us=["read","resolveKeyframes","update","preRender","render","postRender"],nk=40;function Iv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Us.reduce((m,h)=>(m[h]=tk(s),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:d,render:f,postRender:p}=o,g=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,nk),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Us.reduce((m,h)=>{const v=o[h];return m[h]=(S,j=!1,T=!1)=>(n||x(),v.schedule(S,j,T)),m},{}),cancel:m=>{for(let h=0;h<Us.length;h++)o[Us[h]].cancel(m)},state:i,steps:o}}const{schedule:q,cancel:Cn,state:ke,steps:Cl}=Iv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Je,!0),Lv=C.createContext({strict:!1}),Rp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Kr={};for(const e in Rp)Kr[e]={isEnabled:t=>Rp[e].some(n=>!!t[n])};function rk(e){for(const t in e)Kr[t]={...Kr[t],...e[t]}}const ik=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function la(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ik.has(e)}let Mv=e=>!la(e);function sk(e){e&&(Mv=t=>t.startsWith("on")?!la(t):e(t))}try{sk(require("@emotion/is-prop-valid").default)}catch{}function ok(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Mv(i)||n===!0&&la(i)||!t&&!la(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function ak(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Fa=C.createContext({});function os(e){return typeof e=="string"||Array.isArray(e)}function Oa(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const wd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sd=["initial",...wd];function za(e){return Oa(e.animate)||Sd.some(t=>os(e[t]))}function _v(e){return!!(za(e)||e.variants)}function lk(e,t){if(za(e)){const{initial:n,animate:r}=e;return{initial:n===!1||os(n)?n:void 0,animate:os(r)?r:void 0}}return e.inherit!==!1?t:{}}function uk(e){const{initial:t,animate:n}=lk(e,C.useContext(Fa));return C.useMemo(()=>({initial:t,animate:n}),[Ip(t),Ip(n)])}function Ip(e){return Array.isArray(e)?e.join(" "):e}const ck=Symbol.for("motionComponentSymbol");function wr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function dk(e,t,n){return C.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):wr(n)&&(n.current=r))},[t])}const kd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),fk="framerAppearId",Bv="data-"+kd(fk),{schedule:Cd}=Iv(queueMicrotask,!1),$v=C.createContext({});function pk(e,t,n,r,i){var s,o;const{visualElement:a}=C.useContext(Fa),l=C.useContext(Lv),c=C.useContext(Va),d=C.useContext(vd).reducedMotion,f=C.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,g=C.useContext($v);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&hk(f.current,n,i,g);const x=C.useRef(!1);C.useInsertionEffect(()=>{p&&x.current&&p.update(n,c)});const y=n[Bv],w=C.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Dv(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Cd.render(p.render),w.current&&p.animationState&&p.animationState.animateChanges())}),C.useEffect(()=>{p&&(!w.current&&p.animationState&&p.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,y)}),w.current=!1))}),p}function hk(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Nv(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&wr(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function Nv(e){if(e)return e.options.allowProjection!==!1?e.projection:Nv(e.parent)}function mk({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&rk(e);function a(c,d){let f;const p={...C.useContext(vd),...c,layoutId:gk(c)},{isStatic:g}=p,x=uk(c),y=r(c,g);if(!g&&yd){vk();const w=yk(p);f=w.MeasureLayout,x.visualElement=pk(i,y,p,t,w.ProjectionNode)}return u.jsxs(Fa.Provider,{value:x,children:[f&&x.visualElement?u.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,c,dk(y,x.visualElement,d),y,g,x.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=C.forwardRef(a);return l[ck]=i,l}function gk({layoutId:e}){const t=C.useContext(md).id;return t&&e!==void 0?t+"-"+e:e}function vk(e,t){C.useContext(Lv).strict}function yk(e){const{drag:t,layout:n}=Kr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const xk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jd(e){return typeof e!="string"||e.includes("-")?!1:!!(xk.indexOf(e)>-1||/[A-Z]/u.test(e))}function Lp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Td(e,t,n,r){if(typeof t=="function"){const[i,s]=Lp(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Lp(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Qu=e=>Array.isArray(e),wk=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Sk=e=>Qu(e)?e[e.length-1]||0:e,Re=e=>!!(e&&e.getVelocity);function Ao(e){const t=Re(e)?e.get():e;return wk(t)?t.toValue():t}function kk({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:Ck(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const Vv=e=>(t,n)=>{const r=C.useContext(Fa),i=C.useContext(Va),s=()=>kk(e,t,r,i);return n?s():gd(s)};function Ck(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=Ao(s[p]);let{initial:o,animate:a}=e;const l=za(e),c=_v(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Oa(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const x=Td(e,p[g]);if(x){const{transitionEnd:y,transition:w,...m}=x;for(const h in m){let v=m[h];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[h]=v)}for(const h in y)i[h]=y[h]}}}return i}const ti=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rr=new Set(ti),Fv=e=>t=>typeof t=="string"&&t.startsWith(e),Ov=Fv("--"),jk=Fv("var(--"),bd=e=>jk(e)?Tk.test(e.split("/*")[0].trim()):!1,Tk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zv=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ht=(e,t,n)=>n>t?t:n<e?e:n,ni={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},as={...ni,transform:e=>Ht(0,1,e)},Hs={...ni,default:1},ys=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=ys("deg"),At=ys("%"),M=ys("px"),bk=ys("vh"),Pk=ys("vw"),Mp={...At,parse:e=>At.parse(e)/100,transform:e=>At.transform(e*100)},Ek={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M},Ak={rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:Hs,scaleX:Hs,scaleY:Hs,scaleZ:Hs,skew:nn,skewX:nn,skewY:nn,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:as,originX:Mp,originY:Mp,originZ:M},_p={...ni,transform:Math.round},Pd={...Ek,...Ak,zIndex:_p,size:M,fillOpacity:as,strokeOpacity:as,numOctaves:_p},Dk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Rk=ti.length;function Ik(e,t,n){let r="",i=!0;for(let s=0;s<Rk;s++){const o=ti[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=zv(a,Pd[o]);if(!l){i=!1;const d=Dk[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Ed(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(rr.has(l)){o=!0;continue}else if(Ov(l)){i[l]=c;continue}else{const d=zv(c,Pd[l]);l.startsWith("origin")?(a=!0,s[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=Ik(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${c} ${d}`}}const Lk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Mk={offset:"strokeDashoffset",array:"strokeDasharray"};function _k(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Lk:Mk;e[s.offset]=M.transform(-r);const o=M.transform(t),a=M.transform(n);e[s.array]=`${o} ${a}`}function Bp(e,t,n){return typeof e=="string"?e:M.transform(t+n*e)}function Bk(e,t,n){const r=Bp(t,e.x,e.width),i=Bp(n,e.y,e.height);return`${r} ${i}`}function Ad(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},d,f){if(Ed(e,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:x}=e;p.transform&&(x&&(g.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=Bk(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&_k(p,o,a,l,!1)}const Dd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Uv=()=>({...Dd(),attrs:{}}),Rd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Hv(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Wv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Gv(e,t,n,r){Hv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Wv.has(i)?i:kd(i),t.attrs[i])}const ua={};function $k(e){Object.assign(ua,e)}function Kv(e,{layout:t,layoutId:n}){return rr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ua[e]||e==="opacity")}function Id(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(Re(i[o])||t.style&&Re(t.style[o])||Kv(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Yv(e,t,n){const r=Id(e,t,n);for(const i in e)if(Re(e[i])||Re(t[i])){const s=ti.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function Nk(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const $p=["x","y","width","height","cx","cy","r"],Vk={useVisualState:Vv({scrapeMotionValuesFromProps:Yv,createRenderState:Uv,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(rr.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<$p.length;a++){const l=$p[a];e[l]!==t[l]&&(o=!0)}o&&q.read(()=>{Nk(n,r),q.render(()=>{Ad(r,i,Rd(n.tagName),e.transformTemplate),Gv(n,r)})})}})},Fk={useVisualState:Vv({scrapeMotionValuesFromProps:Id,createRenderState:Dd})};function Qv(e,t,n){for(const r in t)!Re(t[r])&&!Kv(r,n)&&(e[r]=t[r])}function Ok({transformTemplate:e},t){return C.useMemo(()=>{const n=Dd();return Ed(n,t,e),Object.assign({},n.vars,n.style)},[t])}function zk(e,t){const n=e.style||{},r={};return Qv(r,n,e),Object.assign(r,Ok(e,t)),r}function Uk(e,t){const n={},r=zk(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function Hk(e,t,n,r){const i=C.useMemo(()=>{const s=Uv();return Ad(s,t,Rd(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Qv(s,e.style,e),i.style={...s,...i.style}}return i}function Wk(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(jd(n)?Hk:Uk)(r,s,o,n),c=ok(r,typeof n=="string",e),d=n!==C.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=C.useMemo(()=>Re(f)?f.get():f,[f]);return C.createElement(n,{...d,children:p})}}function Gk(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...jd(r)?Vk:Fk,preloadedFeatures:e,useRender:Wk(i),createVisualElement:t,Component:r};return mk(o)}}function Xv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ua(e,t,n){const r=e.getProps();return Td(r,t,n!==void 0?n:r.custom,e)}const Kk=xd(()=>window.ScrollTimeline!==void 0);class Yk{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(Kk()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Qk extends Yk{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Ld(e,t){return e?e[t]||e.default||e:void 0}const Xu=2e4;function Zv(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xu;)t+=n,r=e.next(t);return t>=Xu?1/0:t}function Md(e){return typeof e=="function"}function Np(e,t){e.timeline=t,e.onfinish=null}const _d=e=>Array.isArray(e)&&typeof e[0]=="number",Xk={linearEasing:void 0};function Zk(e,t){const n=xd(e);return()=>{var r;return(r=Xk[t])!==null&&r!==void 0?r:n()}}const ca=Zk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Jv=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Gr(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function qv(e){return!!(typeof e=="function"&&ca()||!e||typeof e=="string"&&(e in Zu||ca())||_d(e)||Array.isArray(e)&&e.every(qv))}const ki=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Zu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ki([0,.65,.55,1]),circOut:ki([.55,0,1,.45]),backIn:ki([.31,.01,.66,-.59]),backOut:ki([.33,1.53,.69,.99])};function ey(e,t){if(e)return typeof e=="function"&&ca()?Jv(e,t):_d(e)?ki(e):Array.isArray(e)?e.map(n=>ey(n,t)||Zu.easeOut):Zu[e]}const ht={x:!1,y:!1};function ty(){return ht.x||ht.y}function Jk(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function ny(e,t){const n=Jk(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Vp(e){return t=>{t.pointerType==="touch"||ty()||e(t)}}function qk(e,t,n={}){const[r,i,s]=ny(e,n),o=Vp(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const d=Vp(f=>{c(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const ry=(e,t)=>t?e===t?!0:ry(e,t.parentElement):!1,Bd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,eC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tC(e){return eC.has(e.tagName)||e.tabIndex!==-1}const Ci=new WeakSet;function Fp(e){return t=>{t.key==="Enter"&&e(t)}}function jl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const nC=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Fp(()=>{if(Ci.has(n))return;jl(n,"down");const i=Fp(()=>{jl(n,"up")}),s=()=>jl(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Op(e){return Bd(e)&&!ty()}function rC(e,t,n={}){const[r,i,s]=ny(e,n),o=a=>{const l=a.currentTarget;if(!Op(a)||Ci.has(l))return;Ci.add(l);const c=t(a),d=(g,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Op(g)||!Ci.has(l))&&(Ci.delete(l),typeof c=="function"&&c(g,{success:x}))},f=g=>{d(g,n.useGlobalTarget||ry(l,g.target))},p=g=>{d(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!tC(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>nC(c,i),i)}),s}function iC(e){return e==="x"||e==="y"?ht[e]?null:(ht[e]=!0,()=>{ht[e]=!1}):ht.x||ht.y?null:(ht.x=ht.y=!0,()=>{ht.x=ht.y=!1})}const iy=new Set(["width","height","top","left","right","bottom",...ti]);let Do;function sC(){Do=void 0}const Dt={now:()=>(Do===void 0&&Dt.set(ke.isProcessing||ek.useManualTiming?ke.timestamp:performance.now()),Do),set:e=>{Do=e,queueMicrotask(sC)}};function $d(e,t){e.indexOf(t)===-1&&e.push(t)}function Nd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Vd{constructor(){this.subscriptions=[]}add(t){return $d(this.subscriptions,t),()=>Nd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function sy(e,t){return t?e*(1e3/t):0}const zp=30,oC=e=>!isNaN(parseFloat(e));class aC{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Dt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Dt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=oC(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Vd);const r=this.events[t].add(n);return t==="change"?()=>{r(),q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>zp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,zp);return sy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ls(e,t){return new aC(e,t)}function lC(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ls(n))}function uC(e,t){const n=Ua(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Sk(s[o]);lC(e,o,a)}}function cC(e){return!!(Re(e)&&e.add)}function Ju(e,t){const n=e.getValue("willChange");if(cC(n))return n.add(t)}function oy(e){return e.props[Bv]}const ay=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,dC=1e-7,fC=12;function pC(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=ay(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>dC&&++a<fC);return o}function xs(e,t,n,r){if(e===t&&n===r)return Je;const i=s=>pC(s,0,1,e,n);return s=>s===0||s===1?s:ay(i(s),t,r)}const ly=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,uy=e=>t=>1-e(1-t),cy=xs(.33,1.53,.69,.99),Fd=uy(cy),dy=ly(Fd),fy=e=>(e*=2)<1?.5*Fd(e):.5*(2-Math.pow(2,-10*(e-1))),Od=e=>1-Math.sin(Math.acos(e)),py=uy(Od),hy=ly(Od),my=e=>/^0[^.\s]+$/u.test(e);function hC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||my(e):!0}const _i=e=>Math.round(e*1e5)/1e5,zd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function mC(e){return e==null}const gC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ud=(e,t)=>n=>!!(typeof n=="string"&&gC.test(n)&&n.startsWith(e)||t&&!mC(n)&&Object.prototype.hasOwnProperty.call(n,t)),gy=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(zd);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},vC=e=>Ht(0,255,e),Tl={...ni,transform:e=>Math.round(vC(e))},On={test:Ud("rgb","red"),parse:gy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Tl.transform(e)+", "+Tl.transform(t)+", "+Tl.transform(n)+", "+_i(as.transform(r))+")"};function yC(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const qu={test:Ud("#"),parse:yC,transform:On.transform},Sr={test:Ud("hsl","hue"),parse:gy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+At.transform(_i(t))+", "+At.transform(_i(n))+", "+_i(as.transform(r))+")"},Ee={test:e=>On.test(e)||qu.test(e)||Sr.test(e),parse:e=>On.test(e)?On.parse(e):Sr.test(e)?Sr.parse(e):qu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?On.transform(e):Sr.transform(e)},xC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wC(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(xC))===null||n===void 0?void 0:n.length)||0)>0}const vy="number",yy="color",SC="var",kC="var(",Up="${}",CC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function us(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(CC,l=>(Ee.test(l)?(r.color.push(s),i.push(yy),n.push(Ee.parse(l))):l.startsWith(kC)?(r.var.push(s),i.push(SC),n.push(l)):(r.number.push(s),i.push(vy),n.push(parseFloat(l))),++s,Up)).split(Up);return{values:n,split:a,indexes:r,types:i}}function xy(e){return us(e).values}function wy(e){const{split:t,types:n}=us(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===vy?s+=_i(i[o]):a===yy?s+=Ee.transform(i[o]):s+=i[o]}return s}}const jC=e=>typeof e=="number"?0:e;function TC(e){const t=xy(e);return wy(e)(t.map(jC))}const jn={test:wC,parse:xy,createTransformer:wy,getAnimatableNone:TC},bC=new Set(["brightness","contrast","saturate","opacity"]);function PC(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zd)||[];if(!r)return e;const i=n.replace(r,"");let s=bC.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const EC=/\b([a-z-]*)\(.*?\)/gu,ec={...jn,getAnimatableNone:e=>{const t=e.match(EC);return t?t.map(PC).join(" "):e}},AC={...Pd,color:Ee,backgroundColor:Ee,outlineColor:Ee,fill:Ee,stroke:Ee,borderColor:Ee,borderTopColor:Ee,borderRightColor:Ee,borderBottomColor:Ee,borderLeftColor:Ee,filter:ec,WebkitFilter:ec},Hd=e=>AC[e];function Sy(e,t){let n=Hd(e);return n!==ec&&(n=jn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const DC=new Set(["auto","none","0"]);function RC(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!DC.has(s)&&us(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Sy(n,i)}const Hp=e=>e===ni||e===M,Wp=(e,t)=>parseFloat(e.split(", ")[t]),Gp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Wp(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Wp(s[1],e):0}},IC=new Set(["x","y","z"]),LC=ti.filter(e=>!IC.has(e));function MC(e){const t=[];return LC.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Yr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Gp(4,13),y:Gp(5,14)};Yr.translateX=Yr.x;Yr.translateY=Yr.y;const Gn=new Set;let tc=!1,nc=!1;function ky(){if(nc){const e=Array.from(Gn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=MC(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}nc=!1,tc=!1,Gn.forEach(e=>e.complete()),Gn.clear()}function Cy(){Gn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(nc=!0)})}function _C(){Cy(),ky()}class Wd{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Gn.add(this),tc||(tc=!0,q.read(Cy),q.resolveKeyframes(ky))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Gn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Gn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const jy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),BC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $C(e){const t=BC.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Ty(e,t,n=1){const[r,i]=$C(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return jy(o)?parseFloat(o):o}return bd(i)?Ty(i,t,n+1):i}const by=e=>t=>t.test(e),NC={test:e=>e==="auto",parse:e=>e},Py=[ni,M,At,nn,Pk,bk,NC],Kp=e=>Py.find(by(e));class Ey extends Wd{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),bd(c))){const d=Ty(c,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!iy.has(r)||t.length!==2)return;const[i,s]=t,o=Kp(i),a=Kp(s);if(o!==a)if(Hp(o)&&Hp(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)hC(t[i])&&r.push(i);r.length&&RC(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Yr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Yr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Yp=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(jn.test(e)||e==="0")&&!e.startsWith("url("));function VC(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function FC(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Yp(i,t),a=Yp(s,t);return!o||!a?!1:VC(e)||(n==="spring"||Md(n))&&r}const OC=e=>e!==null;function Ha(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(OC),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const zC=40;class Ay{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Dt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>zC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&_C(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Dt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!FC(t,r,i,s))if(o)this.options.duration=0;else{l&&l(Ha(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function bl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function UC({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=bl(l,a,e+1/3),s=bl(l,a,e),o=bl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function da(e,t){return n=>n>0?t:e}const Pl=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},HC=[qu,On,Sr],WC=e=>HC.find(t=>t.test(e));function Qp(e){const t=WC(e);if(!t)return!1;let n=t.parse(e);return t===Sr&&(n=UC(n)),n}const Xp=(e,t)=>{const n=Qp(e),r=Qp(t);if(!n||!r)return da(e,t);const i={...n};return s=>(i.red=Pl(n.red,r.red,s),i.green=Pl(n.green,r.green,s),i.blue=Pl(n.blue,r.blue,s),i.alpha=oe(n.alpha,r.alpha,s),On.transform(i))},GC=(e,t)=>n=>t(e(n)),ws=(...e)=>e.reduce(GC),rc=new Set(["none","hidden"]);function KC(e,t){return rc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function YC(e,t){return n=>oe(e,t,n)}function Gd(e){return typeof e=="number"?YC:typeof e=="string"?bd(e)?da:Ee.test(e)?Xp:ZC:Array.isArray(e)?Dy:typeof e=="object"?Ee.test(e)?Xp:QC:da}function Dy(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Gd(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function QC(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Gd(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function XC(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const ZC=(e,t)=>{const n=jn.createTransformer(t),r=us(e),i=us(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?rc.has(e)&&!i.values.length||rc.has(t)&&!r.values.length?KC(e,t):ws(Dy(XC(r,i),i.values),n):da(e,t)};function Ry(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):Gd(e)(e,t)}const JC=5;function Iy(e,t,n){const r=Math.max(t-JC,0);return sy(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},El=.001;function qC({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,s,o=1-t;o=Ht(ue.minDamping,ue.maxDamping,o),e=Ht(ue.minDuration,ue.maxDuration,Vt(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,g=ic(c,o),x=Math.exp(-f);return El-p/g*x},s=c=>{const f=c*o*e,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*e,x=Math.exp(-f),y=ic(Math.pow(c,2),o);return(-i(c)+El>0?-1:1)*((p-g)*x)/y}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-El+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,l=tj(i,s,a);if(e=Nt(e),isNaN(l))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const ej=12;function tj(e,t,n){let r=n;for(let i=1;i<ej;i++)r=r-e(r)/t(r);return r}function ic(e,t){return e*Math.sqrt(1-t*t)}const nj=["duration","bounce"],rj=["stiffness","damping","mass"];function Zp(e,t){return t.some(n=>e[n]!==void 0)}function ij(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!Zp(e,rj)&&Zp(e,nj))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Ht(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:s}}else{const n=qC(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Ly(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:g}=ij({...n,velocity:-Vt(n.velocity||0)}),x=p||0,y=c/(2*Math.sqrt(l*d)),w=o-s,m=Vt(Math.sqrt(l/d)),h=Math.abs(w)<5;r||(r=h?ue.restSpeed.granular:ue.restSpeed.default),i||(i=h?ue.restDelta.granular:ue.restDelta.default);let v;if(y<1){const j=ic(m,y);v=T=>{const b=Math.exp(-y*m*T);return o-b*((x+y*m*w)/j*Math.sin(j*T)+w*Math.cos(j*T))}}else if(y===1)v=j=>o-Math.exp(-m*j)*(w+(x+m*w)*j);else{const j=m*Math.sqrt(y*y-1);v=T=>{const b=Math.exp(-y*m*T),P=Math.min(j*T,300);return o-b*((x+y*m*w)*Math.sinh(P)+j*w*Math.cosh(P))/j}}const S={calculatedDuration:g&&f||null,next:j=>{const T=v(j);if(g)a.done=j>=f;else{let b=0;y<1&&(b=j===0?Nt(x):Iy(v,j,T));const P=Math.abs(b)<=r,_=Math.abs(o-T)<=i;a.done=P&&_}return a.value=a.done?o:T,a},toString:()=>{const j=Math.min(Zv(S),Xu),T=Jv(b=>S.next(j*b).value,j,30);return j+"ms "+T}};return S}function Jp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=P=>a!==void 0&&P<a||l!==void 0&&P>l,x=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*t;const w=f+y,m=o===void 0?w:o(w);m!==w&&(y=m-f);const h=P=>-y*Math.exp(-P/r),v=P=>m+h(P),S=P=>{const _=h(P),I=v(P);p.done=Math.abs(_)<=c,p.value=p.done?m:I};let j,T;const b=P=>{g(p.value)&&(j=P,T=Ly({keyframes:[p.value,x(p.value)],velocity:Iy(v,P,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return b(0),{calculatedDuration:null,next:P=>{let _=!1;return!T&&j===void 0&&(_=!0,S(P),b(P)),j!==void 0&&P>=j?T.next(P-j):(!_&&S(P),p)}}}const sj=xs(.42,0,1,1),oj=xs(0,0,.58,1),My=xs(.42,0,.58,1),aj=e=>Array.isArray(e)&&typeof e[0]!="number",lj={linear:Je,easeIn:sj,easeInOut:My,easeOut:oj,circIn:Od,circInOut:hy,circOut:py,backIn:Fd,backInOut:dy,backOut:cy,anticipate:fy},qp=e=>{if(_d(e)){Rv(e.length===4);const[t,n,r,i]=e;return xs(t,n,r,i)}else if(typeof e=="string")return lj[e];return e};function uj(e,t,n){const r=[],i=n||Ry,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Je:t;a=ws(l,a)}r.push(a)}return r}function cj(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Rv(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=uj(t,r,i),l=a.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Gr(e[f],e[f+1],d);return a[f](p)};return n?d=>c(Ht(e[0],e[s-1],d)):c}function dj(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Gr(0,t,r);e.push(oe(n,1,i))}}function fj(e){const t=[0];return dj(t,e.length-1),t}function pj(e,t){return e.map(n=>n*t)}function hj(e,t){return e.map(()=>t||My).splice(0,e.length-1)}function fa({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=aj(r)?r.map(qp):qp(r),s={done:!1,value:t[0]},o=pj(n&&n.length===t.length?n:fj(t),e),a=cj(o,t,{ease:Array.isArray(i)?i:hj(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const mj=e=>{const t=({timestamp:n})=>e(n);return{start:()=>q.update(t,!0),stop:()=>Cn(t),now:()=>ke.isProcessing?ke.timestamp:Dt.now()}},gj={decay:Jp,inertia:Jp,tween:fa,keyframes:fa,spring:Ly},vj=e=>e/100;class Kd extends Ay{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Wd,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=Md(n)?n:gj[n]||fa;let l,c;a!==fa&&typeof t[0]!="number"&&(l=ws(vj,Ry(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Zv(d));const{calculatedDuration:f}=d,p=f+i,g=p*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:g,repeatType:x,repeatDelay:y,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,S=s;if(g){const P=Math.min(this.currentTime,d)/f;let _=Math.floor(P),I=P%1;!I&&P>=1&&(I=1),I===1&&_--,_=Math.min(_,g+1),!!(_%2)&&(x==="reverse"?(I=1-I,y&&(I-=y/f)):x==="mirror"&&(S=o)),v=Ht(0,1,I)*f}const j=h?{done:!1,value:l[0]}:S.next(v);a&&(j.value=a(j.value));let{done:T}=j;!h&&c!==null&&(T=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return b&&i!==void 0&&(j.value=Ha(l,this.options,i)),w&&w(j.value),b&&this.finish(),j}get duration(){const{resolved:t}=this;return t?Vt(t.calculatedDuration):0}get time(){return Vt(this.currentTime)}set time(t){t=Nt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Vt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=mj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const yj=new Set(["opacity","clipPath","filter","transform"]);function xj(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=ey(a,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const wj=xd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),pa=10,Sj=2e4;function kj(e){return Md(e.type)||e.type==="spring"||!qv(e.ease)}function Cj(e,t){const n=new Kd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<Sj;)r=n.sample(s),i.push(r.value),s+=pa;return{times:void 0,keyframes:i,duration:s-pa,ease:"linear"}}const _y={anticipate:fy,backInOut:dy,circInOut:hy};function jj(e){return e in _y}class eh extends Ay{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Ey(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&ca()&&jj(s)&&(s=_y[s]),kj(this.options)){const{onComplete:f,onUpdate:p,motionValue:g,element:x,...y}=this.options,w=Cj(t,y);t=w.keyframes,t.length===1&&(t[1]=t[0]),r=w.duration,i=w.times,s=w.ease,o="keyframes"}const d=xj(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Np(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;a.set(Ha(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Vt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Vt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Nt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Je;const{animation:r}=n;Np(r,t)}return Je}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:p,...g}=this.options,x=new Kd({...g,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),y=Nt(this.time);c.setWithVelocity(x.sample(y-pa).value,x.sample(y).value,pa)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return wj()&&r&&yj.has(r)&&!l&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const Tj={type:"spring",stiffness:500,damping:25,restSpeed:10},bj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Pj={type:"keyframes",duration:.8},Ej={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Aj=(e,{keyframes:t})=>t.length>2?Pj:rr.has(e)?e.startsWith("scale")?bj(t[1]):Tj:Ej;function Dj({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Yd=(e,t,n,r={},i,s)=>o=>{const a=Ld(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Nt(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};Dj(a)||(d={...d,...Aj(e,d)}),d.duration&&(d.duration=Nt(d.duration)),d.repeatDelay&&(d.repeatDelay=Nt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=Ha(d.keyframes,a);if(p!==void 0)return q.update(()=>{d.onUpdate(p),d.onComplete()}),new Qk([])}return!s&&eh.supports(d)?new eh(d):new Kd(d)};function Rj({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function By(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),g=l[f];if(g===void 0||d&&Rj(d,f))continue;const x={delay:n,...Ld(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const m=oy(e);if(m){const h=window.MotionHandoffAnimation(m,f,q);h!==null&&(x.startTime=h,y=!0)}}Ju(e,f),p.start(Yd(f,p,g,e.shouldReduceMotion&&iy.has(f)?{type:!1}:x,e,y));const w=p.animation;w&&c.push(w)}return a&&Promise.all(c).then(()=>{q.update(()=>{a&&uC(e,a)})}),c}function sc(e,t,n={}){var r;const i=Ua(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(By(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return Ij(e,t,d+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,d]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>d())}else return Promise.all([o(),a(n.delay)])}function Ij(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(Lj).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(sc(c,t,{...s,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function Lj(e,t){return e.sortNodePosition(t)}function Mj(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>sc(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=sc(e,t,n);else{const i=typeof t=="function"?Ua(e,t,n.custom):t;r=Promise.all(By(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const _j=Sd.length;function $y(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?$y(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<_j;n++){const r=Sd[n],i=e.props[r];(os(i)||i===!1)&&(t[r]=i)}return t}const Bj=[...wd].reverse(),$j=wd.length;function Nj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Mj(e,n,r)))}function Vj(e){let t=Nj(e),n=th(),r=!0;const i=l=>(c,d)=>{var f;const p=Ua(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:x,...y}=p;c={...c,...y,...x}}return c};function s(l){t=l(e)}function o(l){const{props:c}=e,d=$y(e.parent)||{},f=[],p=new Set;let g={},x=1/0;for(let w=0;w<$j;w++){const m=Bj[w],h=n[m],v=c[m]!==void 0?c[m]:d[m],S=os(v),j=m===l?h.isActive:null;j===!1&&(x=w);let T=v===d[m]&&v!==c[m]&&S;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),h.protectedKeys={...g},!h.isActive&&j===null||!v&&!h.prevProp||Oa(v)||typeof v=="boolean")continue;const b=Fj(h.prevProp,v);let P=b||m===l&&h.isActive&&!T&&S||w>x&&S,_=!1;const I=Array.isArray(v)?v:[v];let G=I.reduce(i(m),{});j===!1&&(G={});const{prevResolvedValues:He={}}=h,Le={...He,...G},ft=N=>{P=!0,p.has(N)&&(_=!0,p.delete(N)),h.needsAnimating[N]=!0;const A=e.getValue(N);A&&(A.liveStyle=!1)};for(const N in Le){const A=G[N],R=He[N];if(g.hasOwnProperty(N))continue;let L=!1;Qu(A)&&Qu(R)?L=!Xv(A,R):L=A!==R,L?A!=null?ft(N):p.add(N):A!==void 0&&p.has(N)?ft(N):h.protectedKeys[N]=!0}h.prevProp=v,h.prevResolvedValues=G,h.isActive&&(g={...g,...G}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(T&&b)||_)&&f.push(...I.map(N=>({animation:N,options:{type:m}})))}if(p.size){const w={};p.forEach(m=>{const h=e.getBaseTarget(m),v=e.getValue(m);v&&(v.liveStyle=!0),w[m]=h??null}),f.push({animation:w})}let y=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=th(),r=!0}}}function Fj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Xv(t,e):!1}function Dn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function th(){return{animate:Dn(!0),whileInView:Dn(),whileHover:Dn(),whileTap:Dn(),whileDrag:Dn(),whileFocus:Dn(),exit:Dn()}}class En{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Oj extends En{constructor(t){super(t),t.animationState||(t.animationState=Vj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Oa(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let zj=0;class Uj extends En{constructor(){super(...arguments),this.id=zj++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Hj={animation:{Feature:Oj},exit:{Feature:Uj}};function cs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ss(e){return{point:{x:e.pageX,y:e.pageY}}}const Wj=e=>t=>Bd(t)&&e(t,Ss(t));function Bi(e,t,n,r){return cs(e,t,Wj(n),r)}const nh=(e,t)=>Math.abs(e-t);function Gj(e,t){const n=nh(e.x,t.x),r=nh(e.y,t.y);return Math.sqrt(n**2+r**2)}class Ny{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Dl(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=Gj(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:x}=f,{timestamp:y}=ke;this.history.push({...x,timestamp:y});const{onStart:w,onMove:m}=this.handlers;p||(w&&w(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Al(p,this.transformPagePoint),q.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Dl(f.type==="pointercancel"?this.lastMoveEventInfo:Al(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,w),x&&x(f,w)},!Bd(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Ss(t),a=Al(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=ke;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Dl(a,this.history)),this.removeListeners=ws(Bi(this.contextWindow,"pointermove",this.handlePointerMove),Bi(this.contextWindow,"pointerup",this.handlePointerUp),Bi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Cn(this.updatePoint)}}function Al(e,t){return t?{point:t(e.point)}:e}function rh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Dl({point:e},t){return{point:e,delta:rh(e,Vy(t)),offset:rh(e,Kj(t)),velocity:Yj(t,.1)}}function Kj(e){return e[0]}function Vy(e){return e[e.length-1]}function Yj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Vy(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Nt(t)));)n--;if(!r)return{x:0,y:0};const s=Vt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Fy=1e-4,Qj=1-Fy,Xj=1+Fy,Oy=.01,Zj=0-Oy,Jj=0+Oy;function et(e){return e.max-e.min}function qj(e,t,n){return Math.abs(e-t)<=n}function ih(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=et(n)/et(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Qj&&e.scale<=Xj||isNaN(e.scale))&&(e.scale=1),(e.translate>=Zj&&e.translate<=Jj||isNaN(e.translate))&&(e.translate=0)}function $i(e,t,n,r){ih(e.x,t.x,n.x,r?r.originX:void 0),ih(e.y,t.y,n.y,r?r.originY:void 0)}function sh(e,t,n){e.min=n.min+t.min,e.max=e.min+et(t)}function eT(e,t,n){sh(e.x,t.x,n.x),sh(e.y,t.y,n.y)}function oh(e,t,n){e.min=t.min-n.min,e.max=e.min+et(t)}function Ni(e,t,n){oh(e.x,t.x,n.x),oh(e.y,t.y,n.y)}function tT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function ah(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function nT(e,{top:t,left:n,bottom:r,right:i}){return{x:ah(e.x,n,i),y:ah(e.y,t,r)}}function lh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function rT(e,t){return{x:lh(e.x,t.x),y:lh(e.y,t.y)}}function iT(e,t){let n=.5;const r=et(e),i=et(t);return i>r?n=Gr(t.min,t.max-r,e.min):r>i&&(n=Gr(e.min,e.max-i,t.min)),Ht(0,1,n)}function sT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const oc=.35;function oT(e=oc){return e===!1?e=0:e===!0&&(e=oc),{x:uh(e,"left","right"),y:uh(e,"top","bottom")}}function uh(e,t,n){return{min:ch(e,t),max:ch(e,n)}}function ch(e,t){return typeof e=="number"?e:e[t]||0}const dh=()=>({translate:0,scale:1,origin:0,originPoint:0}),kr=()=>({x:dh(),y:dh()}),fh=()=>({min:0,max:0}),de=()=>({x:fh(),y:fh()});function it(e){return[e("x"),e("y")]}function zy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function aT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function lT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Rl(e){return e===void 0||e===1}function ac({scale:e,scaleX:t,scaleY:n}){return!Rl(e)||!Rl(t)||!Rl(n)}function _n(e){return ac(e)||Uy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Uy(e){return ph(e.x)||ph(e.y)}function ph(e){return e&&e!=="0%"}function ha(e,t,n){const r=e-n,i=t*r;return n+i}function hh(e,t,n,r,i){return i!==void 0&&(e=ha(e,i,r)),ha(e,n,r)+t}function lc(e,t=0,n=1,r,i){e.min=hh(e.min,t,n,r,i),e.max=hh(e.max,t,n,r,i)}function Hy(e,{x:t,y:n}){lc(e.x,t.translate,t.scale,t.originPoint),lc(e.y,n.translate,n.scale,n.originPoint)}const mh=.999999999999,gh=1.0000000000001;function uT(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&jr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Hy(e,o)),r&&_n(s.latestValues)&&jr(e,s.latestValues))}t.x<gh&&t.x>mh&&(t.x=1),t.y<gh&&t.y>mh&&(t.y=1)}function Cr(e,t){e.min=e.min+t,e.max=e.max+t}function vh(e,t,n,r,i=.5){const s=oe(e.min,e.max,i);lc(e,t,n,s,r)}function jr(e,t){vh(e.x,t.x,t.scaleX,t.scale,t.originX),vh(e.y,t.y,t.scaleY,t.scale,t.originY)}function Wy(e,t){return zy(lT(e.getBoundingClientRect(),t))}function cT(e,t,n){const r=Wy(e,n),{scroll:i}=t;return i&&(Cr(r.x,i.offset.x),Cr(r.y,i.offset.y)),r}const Gy=({current:e})=>e?e.ownerDocument.defaultView:null,dT=new WeakMap;class fT{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ss(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:x}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=iC(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),it(w=>{let m=this.getAxisMotionValue(w).get()||0;if(At.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[w];v&&(m=et(v)*(parseFloat(m)/100))}}this.originPoint[w]=m}),x&&q.postRender(()=>x(d,f)),Ju(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:w}=f;if(g&&this.currentDirection===null){this.currentDirection=pT(w),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,w),this.updateAxis("y",f.point,w),this.visualElement.render(),y&&y(d,f)},a=(d,f)=>this.stop(d,f),l=()=>it(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ny(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Gy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&q.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ws(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=tT(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&wr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=nT(i.layoutBox,n):this.constraints=!1,this.elastic=oT(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&it(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=sT(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!wr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=cT(r,i.root,this.visualElement.getTransformPagePoint());let o=rT(i.layout.layoutBox,s);if(n){const a=n(aT(o));this.hasMutatedConstraints=!!a,a&&(o=zy(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=it(d=>{if(!Ws(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ju(this.visualElement,t),r.start(Yd(t,r,0,n,this.visualElement,!1))}stopAnimation(){it(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){it(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){it(n=>{const{drag:r}=this.getProps();if(!Ws(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-oe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!wr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};it(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=iT({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),it(o=>{if(!Ws(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(oe(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;dT.set(this.visualElement,this);const t=this.visualElement.current,n=Bi(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();wr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),q.read(r);const o=cs(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(it(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=oc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ws(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function pT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class hT extends En{constructor(t){super(t),this.removeGroupControls=Je,this.removeListeners=Je,this.controls=new fT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Je}unmount(){this.removeGroupControls(),this.removeListeners()}}const yh=e=>(t,n)=>{e&&q.postRender(()=>e(t,n))};class mT extends En{constructor(){super(...arguments),this.removePointerDownListener=Je}onPointerDown(t){this.session=new Ny(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:yh(t),onStart:yh(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&q.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Bi(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ro={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const pi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=xh(e,t.target.x),r=xh(e,t.target.y);return`${n}% ${r}%`}},gT={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=jn.parse(e);if(i.length>5)return r;const s=jn.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const c=oe(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class vT extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;$k(yT),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Ro.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||q.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Cd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ky(e){const[t,n]=Av(),r=C.useContext(md);return u.jsx(vT,{...e,layoutGroup:r,switchLayoutGroup:C.useContext($v),isPresent:t,safeToRemove:n})}const yT={borderRadius:{...pi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:pi,borderTopRightRadius:pi,borderBottomLeftRadius:pi,borderBottomRightRadius:pi,boxShadow:gT};function xT(e,t,n){const r=Re(e)?e:ls(e);return r.start(Yd("",r,t,n)),r.animation}function wT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const ST=(e,t)=>e.depth-t.depth;class kT{constructor(){this.children=[],this.isDirty=!1}add(t){$d(this.children,t),this.isDirty=!0}remove(t){Nd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ST),this.isDirty=!1,this.children.forEach(t)}}function CT(e,t){const n=Dt.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Cn(r),e(s-t))};return q.read(r,!0),()=>Cn(r)}const Yy=["TopLeft","TopRight","BottomLeft","BottomRight"],jT=Yy.length,wh=e=>typeof e=="string"?parseFloat(e):e,Sh=e=>typeof e=="number"||M.test(e);function TT(e,t,n,r,i,s){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,bT(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,PT(r))):s&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<jT;o++){const a=`border${Yy[o]}Radius`;let l=kh(t,a),c=kh(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Sh(l)===Sh(c)?(e[a]=Math.max(oe(wh(l),wh(c),r),0),(At.test(c)||At.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function kh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const bT=Qy(0,.5,py),PT=Qy(.5,.95,Je);function Qy(e,t,n){return r=>r<e?0:r>t?1:n(Gr(e,t,r))}function Ch(e,t){e.min=t.min,e.max=t.max}function rt(e,t){Ch(e.x,t.x),Ch(e.y,t.y)}function jh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Th(e,t,n,r,i){return e-=t,e=ha(e,1/n,r),i!==void 0&&(e=ha(e,1/i,r)),e}function ET(e,t=0,n=1,r=.5,i,s=e,o=e){if(At.test(t)&&(t=parseFloat(t),t=oe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=oe(s.min,s.max,r);e===s&&(a-=t),e.min=Th(e.min,t,n,a,i),e.max=Th(e.max,t,n,a,i)}function bh(e,t,[n,r,i],s,o){ET(e,t[n],t[r],t[i],t.scale,s,o)}const AT=["x","scaleX","originX"],DT=["y","scaleY","originY"];function Ph(e,t,n,r){bh(e.x,t,AT,n?n.x:void 0,r?r.x:void 0),bh(e.y,t,DT,n?n.y:void 0,r?r.y:void 0)}function Eh(e){return e.translate===0&&e.scale===1}function Xy(e){return Eh(e.x)&&Eh(e.y)}function Ah(e,t){return e.min===t.min&&e.max===t.max}function RT(e,t){return Ah(e.x,t.x)&&Ah(e.y,t.y)}function Dh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Zy(e,t){return Dh(e.x,t.x)&&Dh(e.y,t.y)}function Rh(e){return et(e.x)/et(e.y)}function Ih(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class IT{constructor(){this.members=[]}add(t){$d(this.members,t),t.scheduleRender()}remove(t){if(Nd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LT(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:p,skewX:g,skewY:x}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Bn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ji=typeof window<"u"&&window.MotionDebug!==void 0,Il=["","X","Y","Z"],MT={visibility:"hidden"},Lh=1e3;let _T=0;function Ll(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Jy(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=oy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",q,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Jy(r)}function qy({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=_T++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ji&&(Bn.totalNodes=Bn.resolvedTargetDeltas=Bn.recalculatedProjection=0),this.nodes.forEach(NT),this.nodes.forEach(UT),this.nodes.forEach(HT),this.nodes.forEach(VT),ji&&window.MotionDebug.record(Bn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new kT)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Vd),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=wT(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=CT(p,250),Ro.hasAnimatedSinceResize&&(Ro.hasAnimatedSinceResize=!1,this.nodes.forEach(_h))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||QT,{onLayoutAnimationStart:w,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!Zy(this.targetLayout,x)||g,v=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const S={...Ld(y,"layout"),onPlay:w,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||_h(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(WT),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Jy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Mh);return}this.isUpdating||this.nodes.forEach(OT),this.isUpdating=!1,this.nodes.forEach(zT),this.nodes.forEach(BT),this.nodes.forEach($T),this.clearAllSnapshots();const a=Dt.now();ke.delta=Ht(0,1e3/60,a-ke.timestamp),ke.timestamp=a,ke.isProcessing=!0,Cl.update.process(ke),Cl.preRender.process(ke),Cl.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(FT),this.sharedNodes.forEach(GT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=de(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Xy(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||_n(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),XT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return de();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(ZT))){const{scroll:d}=this.root;d&&(Cr(l.x,d.offset.x),Cr(l.y,d.offset.y))}return l}removeElementScroll(o){var a;const l=de();if(rt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&rt(l,o),Cr(l.x,f.offset.x),Cr(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=de();rt(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&jr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),_n(d.latestValues)&&jr(l,d.latestValues)}return _n(this.latestValues)&&jr(l,this.latestValues),l}removeTransform(o){const a=de();rt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!_n(c.latestValues))continue;ac(c.latestValues)&&c.updateSnapshot();const d=de(),f=c.measurePageBox();rt(d,f),Ph(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return _n(this.latestValues)&&Ph(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=ke.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Ni(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rt(this.target,this.layout.layoutBox),Hy(this.target,this.targetDelta)):rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Ni(this.relativeTargetOrigin,this.target,g.target),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ji&&Bn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ac(this.parent.latestValues)||Uy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;rt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;uT(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=de());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jh(this.prevProjectionDelta.x,this.projectionDelta.x),jh(this.prevProjectionDelta.y,this.projectionDelta.y)),$i(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!Ih(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ih(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ji&&Bn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=kr(),this.projectionDelta=kr(),this.projectionDeltaWithTransform=kr()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=kr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=de(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,w=this.getStack(),m=!w||w.members.length<=1,h=!!(y&&!m&&this.options.crossfade===!0&&!this.path.some(YT));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const j=S/1e3;Bh(f.x,o.x,j),Bh(f.y,o.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ni(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),KT(this.relativeTarget,this.relativeTargetOrigin,p,j),v&&RT(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=de()),rt(v,this.relativeTarget)),y&&(this.animationValues=d,TT(d,c,this.latestValues,j,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=q.update(()=>{Ro.hasAnimatedSinceResize=!0,this.currentAnimation=xT(0,Lh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&ex(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||de();const f=et(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=et(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}rt(a,l),jr(a,d),$i(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new IT),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Ll("z",o,c,this.animationValues);for(let d=0;d<Il.length;d++)Ll(`rotate${Il[d]}`,o,c,this.animationValues),Ll(`skew${Il[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return MT;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ao(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Ao(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!_n(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=LT(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:x}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in ua){if(p[y]===void 0)continue;const{correct:w,applyTo:m}=ua[y],h=c.transform==="none"?p[y]:w(p[y],f);if(m){const v=m.length;for(let S=0;S<v;S++)c[m[S]]=h}else c[y]=h}return this.options.layoutId&&(c.pointerEvents=f===this?Ao(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Mh),this.root.sharedNodes.clear()}}}function BT(e){e.updateLayout()}function $T(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?it(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=et(p);p.min=r[f].min,p.max=p.min+g}):ex(s,n.layoutBox,r)&&it(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=et(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=kr();$i(a,r,n.layoutBox);const l=kr();o?$i(l,e.applyTransform(i,!0),n.measuredBox):$i(l,r,n.layoutBox);const c=!Xy(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const x=de();Ni(x,n.layoutBox,p.layoutBox);const y=de();Ni(y,r,g.layoutBox),Zy(x,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function NT(e){ji&&Bn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function VT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function FT(e){e.clearSnapshot()}function Mh(e){e.clearMeasurements()}function OT(e){e.isLayoutDirty=!1}function zT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function _h(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function UT(e){e.resolveTargetDelta()}function HT(e){e.calcProjection()}function WT(e){e.resetSkewAndRotation()}function GT(e){e.removeLeadSnapshot()}function Bh(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function $h(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function KT(e,t,n,r){$h(e.x,t.x,n.x,r),$h(e.y,t.y,n.y,r)}function YT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const QT={duration:.45,ease:[.4,0,.1,1]},Nh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Vh=Nh("applewebkit/")&&!Nh("chrome/")?Math.round:Je;function Fh(e){e.min=Vh(e.min),e.max=Vh(e.max)}function XT(e){Fh(e.x),Fh(e.y)}function ex(e,t,n){return e==="position"||e==="preserve-aspect"&&!qj(Rh(t),Rh(n),.2)}function ZT(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const JT=qy({attachResizeListener:(e,t)=>cs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ml={current:void 0},tx=qy({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ml.current){const e=new JT({});e.mount(window),e.setOptions({layoutScroll:!0}),Ml.current=e}return Ml.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),qT={pan:{Feature:mT},drag:{Feature:hT,ProjectionNode:tx,MeasureLayout:Ky}};function Oh(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&q.postRender(()=>s(t,Ss(t)))}class eb extends En{mount(){const{current:t}=this.node;t&&(this.unmount=qk(t,n=>(Oh(this.node,n,"Start"),r=>Oh(this.node,r,"End"))))}unmount(){}}class tb extends En{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ws(cs(this.node.current,"focus",()=>this.onFocus()),cs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zh(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&q.postRender(()=>s(t,Ss(t)))}class nb extends En{mount(){const{current:t}=this.node;t&&(this.unmount=rC(t,n=>(zh(this.node,n,"Start"),(r,{success:i})=>zh(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const uc=new WeakMap,_l=new WeakMap,rb=e=>{const t=uc.get(e.target);t&&t(e)},ib=e=>{e.forEach(rb)};function sb({root:e,...t}){const n=e||document;_l.has(n)||_l.set(n,{});const r=_l.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ib,{root:e,...t})),r[i]}function ob(e,t,n){const r=sb(t);return uc.set(e,n),r.observe(e),()=>{uc.delete(e),r.unobserve(e)}}const ab={some:0,all:1};class lb extends En{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:ab[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(l)};return ob(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ub(t,n))&&this.startObserver()}unmount(){}}function ub({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const cb={inView:{Feature:lb},tap:{Feature:nb},focus:{Feature:tb},hover:{Feature:eb}},db={layout:{ProjectionNode:tx,MeasureLayout:Ky}},cc={current:null},nx={current:!1};function fb(){if(nx.current=!0,!!yd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>cc.current=e.matches;e.addListener(t),t()}else cc.current=!1}const pb=[...Py,Ee,jn],hb=e=>pb.find(by(e)),Uh=new WeakMap;function mb(e,t,n){for(const r in t){const i=t[r],s=n[r];if(Re(i))e.addValue(r,i);else if(Re(s))e.addValue(r,ls(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ls(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Hh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gb{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Dt.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,q.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=za(n),this.isVariantNode=_v(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const x=p[g];l[g]!==void 0&&Re(x)&&x.set(l[g],!1)}}mount(t){this.current=t,Uh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),nx.current||fb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Uh.delete(this.current),this.projection&&this.projection.unmount(),Cn(this.notifyUpdate),Cn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=rr.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&q.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Kr){const n=Kr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Hh.length;r++){const i=Hh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=mb(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ls(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(jy(i)||my(i))?i=parseFloat(i):!hb(i)&&jn.test(n)&&(i=Sy(t,n)),this.setBaseTarget(t,Re(i)?i.get():i)),Re(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Td(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Re(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Vd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class rx extends gb{constructor(){super(...arguments),this.KeyframeResolver=Ey}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Re(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function vb(e){return window.getComputedStyle(e)}class yb extends rx{constructor(){super(...arguments),this.type="html",this.renderInstance=Hv}readValueFromInstance(t,n){if(rr.has(n)){const r=Hd(n);return r&&r.default||0}else{const r=vb(t),i=(Ov(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Wy(t,n)}build(t,n,r){Ed(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Id(t,n,r)}}class xb extends rx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=de}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(rr.has(n)){const r=Hd(n);return r&&r.default||0}return n=Wv.has(n)?n:kd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Yv(t,n,r)}build(t,n,r){Ad(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Gv(t,n,r,i)}mount(t){this.isSVGTag=Rd(t.tagName),super.mount(t)}}const wb=(e,t)=>jd(e)?new xb(t):new yb(t,{allowProjection:e!==C.Fragment}),Sb=Gk({...Hj,...cb,...qT,...db},wb),ee=ak(Sb),kb=k(ee.nav)`
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
`,Cb=k.div`
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
`,jb=k(ev)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,Tb=k.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,bb=k.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,Pb=k(ee.button)`
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
`,Eb=k(ee.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ab=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Db=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),Rb=()=>{const{isDark:e,toggleTheme:t}=nv();return u.jsx(kb,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:u.jsxs(Cb,{children:[u.jsx(jb,{to:"/","aria-label":"Go to homepage",children:u.jsx(Tb,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),u.jsx(bb,{}),u.jsx(Pb,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:u.jsx(Wr,{mode:"wait",children:u.jsx(Eb,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?u.jsx(Db,{}):u.jsx(Ab,{})},e?"moon":"sun")})})]})})},Qd=k.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;k.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Ib=k(ee.div)`
  position: relative;
`,Lb=k(ev)`
  display: block;
  text-decoration: none;
  color: inherit;
`,ix=k(ee.div)`
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
`,Mb=k(ee.div)`
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

  ${ix}:hover &::before {
    opacity: 0.3;
  }
`,_b=k.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,Bb={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},$b={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},Nb=({title:e,icon:t,to:n})=>u.jsx(Ib,{variants:Bb,whileHover:"hover",whileTap:"tap",children:u.jsx(Lb,{to:n,children:u.jsxs(ix,{variants:$b,children:[u.jsx(Mb,{children:t}),u.jsx(_b,{children:e})]})})}),Vb=k.div`
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
`,Fb=k(ee.div)`
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
`,Ob={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},zb=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),u.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),u.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),u.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),u.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),u.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),u.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),u.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),u.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),u.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),Ub=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),u.jsx("path",{d:"M1 10h22"}),u.jsx("path",{d:"M17 14h.01"})]}),Hb=[{id:"tax-calculator",title:"Tax Calculator",icon:u.jsx(zb,{}),to:"/tax-calculator"},{id:"expense-manager",title:"Expense Manager",icon:u.jsx(Ub,{}),to:"/expense-manager"}],Wb=()=>u.jsx(Vb,{children:u.jsx(Qd,{children:u.jsx(Fb,{variants:Ob,initial:"hidden",animate:"visible",children:Hb.map(e=>u.jsx(Nb,{title:e.title,icon:e.icon,to:e.to},e.id))})})}),Io=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Wh=75e3,Tr=4,Gb=12e5,Kb=6e4,Gh=5e6,Kh=10,Yb=12,Qb=1800;function Kn(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const s=r.slice(-3),o=r.slice(0,-3);if(o.length>0){const a=[];let l=o;for(;l.length>0;)l.length>=2?(a.unshift(l.slice(-2)),l=l.slice(0,-2)):(a.unshift(l),l="");i=a.join(",")+","+s}else i=s;return(t?"-":"")+i}function V(e){return"₹"+Kn(e)}function Q(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,s]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+Kn(parseInt(i))+"."+s}function Yh(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:Kn(e)}function Xb(e){for(let t=Io.length-1;t>=0;t--)if(e>Io[t].from)return Io[t].rate;return 0}function Zb(e){const t=[];let n=e,r=0;for(const i of Io){const s=i.from,a=(i.to??1/0)-s;if(n<=0){t.push({from:s,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const l=Math.min(n,a),c=l*i.rate/100;t.push({from:s,to:i.to,rate:i.rate,taxableInSlab:l>0?l:0,taxInSlab:c}),r+=c,n-=l}return{slabs:t,totalTax:r}}function Jb(e,t){if(t>Gh){const r=e*(1+Kh/100)*(1+Tr/100),i=t-Gh,o=(e+i)*(1+Tr/100),a=o<r,l=Math.min(r,o),c=l/(1+Tr/100),d=c-e,f=l-c;return{surchargeApplicable:!0,surchargeRate:Kh,surchargeAmount:d,marginalReliefApplied:a,taxAfterSurcharge:c,cess:f,totalTax:l}}else{const n=e*(Tr/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function Qh(e,t,n,r,i,s,o){const a=e*t/100,l=e-a;let c=0;i==="percentage"?c=e*s/100:i==="amount"&&(c=s);const d=e+c;let f=0,p=0;n&&(r==="percentage"?(f=a*Yb/100,p=f):(f=Qb*12,p=f));const g=e-p,x=o.map(Te=>({name:Te.name,amount:Te.amount*12})),y=x.reduce((Te,We)=>Te+We.amount,0),w=Math.max(0,g-Wh),{slabs:m,totalTax:h}=Zb(w);let v=0,S=h;w<=Gb&&(v=Math.min(h,Kb),S=Math.max(0,h-v));const{surchargeApplicable:j,surchargeRate:T,surchargeAmount:b,marginalReliefApplied:P,taxAfterSurcharge:_,cess:I,totalTax:G}=Jb(S,w),He=f+p,Le=G,ft=f+G+y,B=g-f-G-y,K=B/12,N=g>0?G/g*100:0,A=Xb(w);let R=0,L=c;if(c>0&&A>0){let Te=c*A/100;j&&(Te=Te*(1+T/100)),R=Te*(1+Tr/100),L=c-R}const z=B+L,H=z/12;return{baseSalary:e,basicSalary:a,hra:l,bonus:c,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:g,standardDeduction:Wh,additionalDeductions:x,totalAdditionalDeductions:y,taxableIncome:w,slabs:m,taxBeforeSurcharge:h,surchargeApplicable:j,surchargeRate:T,surchargeAmount:b,marginalReliefApplied:P,taxAfterSurcharge:_,cessRate:Tr,cess:I,totalTax:G,rebate87A:v,totalPFDeduction:He,totalTaxDeduction:Le,totalDeductions:ft,netSalaryYearly:B,netSalaryMonthly:K,effectiveTaxRate:N,bonusTaxRate:A,bonusTaxAmount:R,bonusAfterTax:L,totalIncomeYearly:z,totalIncomeMonthly:H}}function qb(e){const t=Qh(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=Qh(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const Xd="taxCalculatorInput";function eP(e){localStorage.setItem(Xd,JSON.stringify(e))}function tP(){localStorage.removeItem(Xd)}function sx(){const e=localStorage.getItem(Xd);if(e)try{return JSON.parse(e)}catch{return null}return null}const nP={financialYear:"FY 2025-26"},rP=k(ee.div)`
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
`,hi=k(ee.div)`
  padding: var(--space-xs) 0;
`,mi=k.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`,iP=k.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
`,or=k.div`
  flex: ${({$flex:e})=>e||1};
  min-width: 0;
`,Xh=k.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
`,Rn=k.input`
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
`,Bl=k.div`
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
`,$l=k.div`
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
`,Zh=k.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`,gi=k.button`
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
`,sP=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,Nl=k(ee.div)`
  display: flex;
  gap: var(--space-sm);
  align-items: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`,Vl=k.button`
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
`,oP=k.button`
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
`,aP=k.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`,lP=k(ee.button)`
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
`,uP=k(ee.button)`
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
`,Gs=k.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,cP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Fl=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function Ol(e){const t=e.replace(/[^\d]/g,"");return t?Kn(parseInt(t)):""}function Ks(e){return parseInt(e.replace(/,/g,""))||0}const dP=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=C.useState(""),[s,o]=C.useState("50"),[a,l]=C.useState("percentage"),[c,d]=C.useState("none"),[f,p]=C.useState(""),[g,x]=C.useState([]),[y,w]=C.useState(""),[m,h]=C.useState(!1),v=C.useRef(!1);C.useEffect(()=>{const B=sx();B&&(i(Kn(B.baseSalary)),o(B.basicPercentage.toString()),l(B.pfType),d(B.bonusType),p(B.bonusValue>0?B.bonusType==="amount"?Kn(B.bonusValue):B.bonusValue.toString():""),x(B.additionalDeductions.map(K=>({name:K.name,amount:Kn(K.amount)}))),w(B.hikePercentage>0?B.hikePercentage.toString():"")),h(!0)},[]),C.useEffect(()=>{m&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{I()},100))},[m,n,r]);const S=B=>{i(Ol(B))},j=B=>{p(Ol(B))},T=(B,K)=>{const N=[...g];N[B].amount=Ol(K),x(N)},b=()=>{x([...g,{name:"",amount:""}])},P=B=>{x(g.filter((K,N)=>N!==B))},_=(B,K)=>{const N=[...g];N[B].name=K,x(N)},I=()=>{const B={baseSalary:Ks(r),basicPercentage:parseFloat(s)||50,calculatePF:!0,pfType:a,bonusType:c,bonusValue:c==="amount"?Ks(f):parseFloat(f)||0,additionalDeductions:g.filter(K=>K.name&&K.amount).map(K=>({name:K.name,amount:Ks(K.amount)})),hikePercentage:parseFloat(y)||0};eP(B),e(B)},G=()=>{i(""),o("50"),l("percentage"),d("none"),p(""),x([]),w(""),tP(),t==null||t()},Le=Ks(r)>0,ft=r||g.length>0||c!=="none"||y;return u.jsxs(rP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20},children:[u.jsxs(hi,{children:[u.jsx(mi,{children:"Salary Details"}),u.jsxs(iP,{children:[u.jsxs(or,{$flex:2,children:[u.jsx(Xh,{children:"Yearly Base Salary / CTC *"}),u.jsx(Bl,{children:u.jsx(Rn,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:B=>S(B.target.value)})})]}),u.jsxs(or,{children:[u.jsx(Xh,{children:"Basic %"}),u.jsx($l,{children:u.jsx(Rn,{type:"number",inputMode:"numeric",placeholder:"40",value:s,onChange:B=>o(B.target.value),min:"0",max:"100"})})]})]})]}),u.jsx(Gs,{}),u.jsxs(hi,{children:[u.jsx(mi,{children:"Provident Fund (PF)"}),u.jsxs(Zh,{children:[u.jsx(gi,{$active:a==="percentage",onClick:()=>l("percentage"),children:"12% of Basic"}),u.jsx(gi,{$active:a==="flat",onClick:()=>l("flat"),children:"Flat ₹1,800/mo"})]})]}),u.jsx(Gs,{}),u.jsxs(hi,{children:[u.jsx(mi,{children:"Bonus (Optional)"}),u.jsxs(Zh,{children:[u.jsx(gi,{$active:c==="none",onClick:()=>d("none"),children:"None"}),u.jsx(gi,{$active:c==="percentage",onClick:()=>d("percentage"),children:"Percentage"}),u.jsx(gi,{$active:c==="amount",onClick:()=>d("amount"),children:"Amount"})]}),u.jsx(Wr,{children:c!=="none"&&u.jsx(ee.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},style:{overflow:"hidden",marginTop:"var(--space-sm)"},children:u.jsxs(Nl,{children:[u.jsx(or,{children:c==="percentage"?u.jsx($l,{children:u.jsx(Rn,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:B=>p(B.target.value)})}):u.jsx(Bl,{children:u.jsx(Rn,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:B=>j(B.target.value)})})}),f&&u.jsx(Vl,{onClick:()=>p(""),children:u.jsx(Fl,{})})]})})})]}),u.jsx(Gs,{}),u.jsxs(hi,{children:[u.jsx(mi,{children:"Additional Monthly Deductions"}),u.jsxs(sP,{children:[u.jsx(Wr,{children:g.map((B,K)=>u.jsxs(Nl,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},children:[u.jsx(or,{children:u.jsx(Rn,{type:"text",placeholder:"Name (e.g., Cab)",value:B.name,onChange:N=>_(K,N.target.value)})}),u.jsx(or,{children:u.jsx(Bl,{children:u.jsx(Rn,{type:"text",inputMode:"numeric",placeholder:"e.g., 5,000",value:B.amount,onChange:N=>T(K,N.target.value)})})}),u.jsx(Vl,{onClick:()=>P(K),children:u.jsx(Fl,{})})]},K))}),u.jsxs(oP,{onClick:b,children:[u.jsx(cP,{}),"Add Deduction"]})]})]}),u.jsx(Gs,{}),u.jsxs(hi,{children:[u.jsx(mi,{children:"Hike / Appraisal (Optional)"}),u.jsxs(Nl,{style:{marginBottom:0},children:[u.jsx(or,{children:u.jsx($l,{children:u.jsx(Rn,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:y,onChange:B=>w(B.target.value),min:"0",max:"200"})})}),y&&u.jsx(Vl,{onClick:()=>w(""),children:u.jsx(Fl,{})})]})]}),u.jsxs(aP,{children:[u.jsx(lP,{onClick:I,disabled:!Le,whileHover:{scale:Le?1.02:1},whileTap:{scale:Le?.98:1},children:"Calculate Tax"}),ft&&u.jsx(uP,{onClick:G,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})]})]})},fP=k(ee.div)`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,Jh=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Ys=k.div`
  padding: var(--space-md);
  background: ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.1)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(var(--green-rgb), 0.2)":"var(--border)"};
  border-radius: var(--radius-md);
`,Qs=k.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
`,Xs=k.div`
  font-size: ${({$large:e})=>e?"18px":"15px"};
  font-weight: 600;
  color: var(--text-primary);
`,Zs=k.span`
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
`,Me=k.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"var(--green)":"var(--text-tertiary)"};
  margin-top: 2px;
  display: block;
`,Js=k.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-xs);
`,zl=k.div`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,qh=k.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--green);
  margin-top: var(--space-xs);
`,zn=k(ee.div)`
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
`,em=k(zn)`
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--blue-rgb), 0.08));
  border-color: rgba(var(--accent-rgb), 0.25);
`,pP=k(zn)`
  background: linear-gradient(135deg, rgba(255, 180, 50, 0.12), rgba(255, 140, 50, 0.08));
  border-color: rgba(255, 180, 50, 0.25);
`,hP=k(zn)`
  background: linear-gradient(135deg, rgba(var(--green-rgb), 0.12), rgba(var(--accent-rgb), 0.08));
  border-color: rgba(var(--green-rgb), 0.25);
`,In=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
`,Qt=k.h3`
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
`,Zd=k(ee.div)`
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: var(--space-xs);
`,tm=k(Zd)`
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,mP=k(Zd)`
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,gP=k(Zd)`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,nm=k.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: var(--space-sm);
`,vP=k.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 3px;
  gap: 3px;
`,rm=k.button`
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
`,im=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-sm);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xt=k.div`
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 0;
  overflow: hidden;
`,Zt=k.div`
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jt=k.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,yP=k.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,sm=k(ee.div)`
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
`,qt=k.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"var(--accent)":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,xP=k(ee.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: var(--radius-full);
  margin-top: 4px;
`,dc=k.span`
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
`,wP=k(dc)`
  background: rgba(255, 180, 50, 0.15);
  color: #e6a020;
`,Ke=k.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-md) 0;
  opacity: 0.6;
`,te=k.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-xs) 0;
  gap: var(--space-sm);

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`,ne=k.span`
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
`,re=k.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"var(--accent)":t?"#e05555":"var(--text-primary)"};
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`,om=k.div`
  display: flex;
  height: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--space-md) 0;
`,am=k(ee.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,lm=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-sm);
`,um=k.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,cm=k.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,dm=k.span`
  font-size: 11px;
  color: var(--text-secondary);
`,fm=k.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
`,pm=k(ee.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
`,hm=k.div`
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,SP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),u.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),u.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),kP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),u.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),u.jsx("path",{d:"M12 17.5v-11"})]}),Ul=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("path",{d:"M3 9h18"}),u.jsx("path",{d:"M9 21V9"})]}),CP=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),u.jsx("path",{d:"M12 8v13"}),u.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),u.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),mm=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),u.jsx("polyline",{points:"16 7 22 7 22 13"})]}),jP={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},en={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},TP=({breakdown:e})=>{var f;const[t,n]=C.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"var(--accent)":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",s=Math.max(...e.slabs.map(p=>p.taxInSlab),1),o=[{label:"In-Hand",value:e.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.totalTax,color:"#4361A5"},{label:"PF",value:e.employeePF,color:"#3BB4B1"}];e.totalAdditionalDeductions>0&&o.push({label:"Other",value:e.totalAdditionalDeductions,color:"#7BA7D9"});const a=o.reduce((p,g)=>p+g.value,0),l=e.postHike?[{label:"In-Hand",value:e.postHike.netSalaryYearly,color:"#2A9D8F"},{label:"Tax",value:e.postHike.totalTax,color:"#4361A5"},{label:"PF",value:e.postHike.employeePF,color:"#3BB4B1"},...e.postHike.totalAdditionalDeductions>0?[{label:"Other",value:e.postHike.totalAdditionalDeductions,color:"#7BA7D9"}]:[]]:[],c=l.reduce((p,g)=>p+g.value,0),d=[];return e.surchargeApplicable&&d.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${V(e.rebate87A)} applied`),e.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`),u.jsxs(fP,{variants:jP,initial:"hidden",animate:"visible",children:[e.postHike&&u.jsxs(em,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(mm,{}),"Base Salary (CTC)"]})}),u.jsx(tm,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:V(e.baseSalary)}),u.jsx(Ke,{}),u.jsxs(Js,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(zl,{children:V(e.postHike.baseSalary)}),u.jsxs(qh,{children:["+",V(e.postHike.baseSalary-e.baseSalary)," increase"]})]}),u.jsxs(em,{variants:en,children:[u.jsxs(In,{children:[u.jsxs(Qt,{children:[u.jsx(SP,{}),"In-Hand Salary (Base)"]}),u.jsxs(vP,{children:[u.jsx(rm,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),u.jsx(rm,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]}),u.jsx(tm,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:Q(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),e.postHike&&u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsxs(Js,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(zl,{children:Q(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),u.jsxs(qh,{children:["+",V(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)," increase"]})]})]}),e.bonus>0&&u.jsxs(pP,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(CP,{}),"Bonus Summary",e.postHike&&u.jsxs(Zs,{children:["+",e.hikePercentage,"% Hike"]})]})}),u.jsx(mP,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:V(e.bonus)}),u.jsx(nm,{children:"Gross Bonus (before tax)"}),u.jsx(Ke,{}),u.jsx(Js,{style:{color:"#f59e0b"},children:"In-Hand (after tax)"}),u.jsx(zl,{style:{background:"linear-gradient(135deg, #f59e0b, #ef4444)",WebkitBackgroundClip:"text",backgroundClip:"text"},children:Q(e.bonusAfterTax)}),e.postHike&&u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsxs(Js,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsxs(Jh,{style:{marginTop:0},children:[u.jsxs(Ys,{children:[u.jsx(Qs,{children:"Gross Bonus"}),u.jsx(Xs,{$large:!0,children:V(e.postHike.bonus)}),u.jsxs(Me,{$positive:!0,children:["+",V(e.postHike.bonus-e.bonus)]})]}),u.jsxs(Ys,{$highlight:!0,children:[u.jsx(Qs,{children:"In-Hand Bonus"}),u.jsx(Xs,{$large:!0,children:Q(e.postHike.bonusAfterTax)}),u.jsxs(Me,{$positive:!0,children:["+",V(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}),u.jsx(Ke,{}),u.jsxs(im,{children:[u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Tax Rate"}),u.jsxs(Jt,{children:[e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess"]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Tax Deducted"}),u.jsxs(Jt,{style:{color:"#e05555"},children:["-",Q(e.bonusTaxAmount)]})]})]}),u.jsx(pm,{style:{marginTop:"var(--space-md)",borderLeftColor:"#f59e0b"},children:u.jsxs(hm,{children:["Bonus is taxed at your ",u.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]}),e.bonus>0&&u.jsxs(hP,{variants:en,children:[u.jsxs(In,{children:[u.jsxs(Qt,{children:[u.jsx(mm,{}),"Total Combined Income",e.postHike&&u.jsxs(Zs,{children:["+",e.hikePercentage,"% Hike"]})]}),u.jsx(dc,{children:"Yearly"})]}),e.postHike?u.jsxs(Jh,{children:[u.jsxs(Ys,{children:[u.jsx(Qs,{children:"Current"}),u.jsx(Xs,{$large:!0,children:Q(e.totalIncomeYearly)})]}),u.jsxs(Ys,{$highlight:!0,children:[u.jsxs(Qs,{children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(Xs,{$large:!0,children:Q(e.postHike.totalIncomeYearly)}),u.jsxs(Me,{$positive:!0,children:["+",V(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx(gP,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},children:Q(e.totalIncomeYearly)}),u.jsx(nm,{children:"Base salary + Bonus (after tax)"})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Base In-Hand (Yearly)"}),u.jsx(re,{children:Q(e.netSalaryYearly)})]}),u.jsxs(te,{children:[u.jsx(ne,{children:"Bonus In-Hand (Yearly)"}),u.jsx(re,{children:Q(e.bonusAfterTax)})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Total Combined Income"}),u.jsx(re,{$highlight:!0,children:Q(e.totalIncomeYearly)})]})]}),u.jsxs(zn,{variants:en,children:[u.jsxs(Qt,{style:{marginBottom:"var(--space-sm)"},children:[u.jsx(Ul,{}),"Summary",e.postHike&&u.jsxs(Zs,{children:["+",e.hikePercentage,"% Hike"]})]}),u.jsxs(im,{children:[u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Gross Salary"}),u.jsx(Jt,{children:V(e.grossSalary*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.grossSalary*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Total Tax"}),u.jsx(Jt,{children:Q(e.totalTax*r)}),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.totalTax*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Employee PF"}),u.jsx(Jt,{children:V(e.employeePF*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.employeePF*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Employer PF"}),u.jsx(Jt,{children:V(e.employerPF*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.employerPF*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Total PF"}),u.jsx(Jt,{children:V((e.employeePF+e.employerPF)*r)}),e.postHike&&u.jsxs(Me,{$positive:!0,children:["→ ",V((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),u.jsxs(Xt,{children:[u.jsx(Zt,{children:"Eff. Tax Rate"}),u.jsxs(Jt,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),e.postHike&&u.jsxs(Me,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),u.jsx(Ke,{}),u.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:"var(--space-sm)"},children:["Salary Distribution ",e.postHike?"(Current)":"(Base Only)"]}),u.jsx(om,{children:o.map((p,g)=>u.jsx(am,{$color:p.color,initial:{width:0},animate:{width:`${p.value/a*100}%`},transition:{delay:.3+g*.1,duration:.5}},g))}),u.jsx(lm,{children:o.map((p,g)=>u.jsxs(um,{children:[u.jsx(cm,{$color:p.color}),u.jsx(dm,{children:p.label}),u.jsx(fm,{children:V(p.value*r)})]},g))}),e.postHike&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--green)",marginBottom:"var(--space-sm)",marginTop:"var(--space-md)"},children:["After ",e.hikePercentage,"% Hike"]}),u.jsx(om,{children:l.map((p,g)=>u.jsx(am,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.5+g*.1,duration:.5}},g))}),u.jsx(lm,{children:l.map((p,g)=>u.jsxs(um,{children:[u.jsx(cm,{$color:p.color}),u.jsx(dm,{children:p.label}),u.jsx(fm,{children:V(p.value*r)})]},g))})]}),d.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(Ke,{}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:d.map((p,g)=>u.jsx(pm,{children:u.jsx(hm,{dangerouslySetInnerHTML:{__html:p}})},g))})]})]}),u.jsxs(zn,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(kP,{}),"Tax Slabs",u.jsx(dc,{children:nP.financialYear}),e.postHike&&u.jsxs(Zs,{children:["+",e.hikePercentage,"% Hike"]})]})}),u.jsxs(yP,{children:[u.jsxs(sm,{$isHeader:!0,children:[u.jsx(qt,{children:"Slab"}),u.jsx(qt,{$align:"center",children:"Rate"}),u.jsx(qt,{$align:"right",children:"Amount"}),u.jsx(qt,{$align:"right",children:"Tax"})]}),u.jsx(Wr,{children:e.slabs.map((p,g)=>{var x,y;return u.jsxs(sm,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:g*.03},children:[u.jsxs(qt,{children:[Yh(p.from)," - ",Yh(p.to),p.taxableInSlab>0&&u.jsx(xP,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/s*100,8)}%`},transition:{delay:.2+g*.03,duration:.4}})]}),u.jsxs(qt,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),u.jsxs(qt,{$align:"right",$muted:p.taxableInSlab===0,children:[p.taxableInSlab>0?V(p.taxableInSlab):"-",e.postHike&&((x=e.postHike.slabs[g])==null?void 0:x.taxableInSlab)>0&&u.jsxs(Me,{$positive:!0,children:["→ ",V(e.postHike.slabs[g].taxableInSlab)]})]}),u.jsxs(qt,{$align:"right",$muted:p.taxInSlab===0,children:[p.taxInSlab>0?V(p.taxInSlab):"-",e.postHike&&((y=e.postHike.slabs[g])==null?void 0:y.taxInSlab)>0&&u.jsxs(Me,{children:["→ ",V(e.postHike.slabs[g].taxInSlab)]})]})]},g)})})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Tax Before Surcharge"}),u.jsxs(re,{children:[Q(e.taxBeforeSurcharge),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.taxBeforeSurcharge)]})]})]}),e.rebate87A>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Section 87A Rebate"}),u.jsxs(re,{$negative:!0,children:["-",V(e.rebate87A)]})]}),e.surchargeApplicable&&u.jsxs(te,{children:[u.jsxs(ne,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&u.jsx(wP,{children:"Marginal Relief"})]}),u.jsxs(re,{children:[Q(e.surchargeAmount),((f=e.postHike)==null?void 0:f.surchargeApplicable)&&u.jsxs(Me,{children:["→ ",Q(e.postHike.surchargeAmount)]})]})]}),u.jsxs(te,{children:[u.jsxs(ne,{children:["Cess (",e.cessRate,"%)"]}),u.jsxs(re,{children:[Q(e.cess),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.cess)]})]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Total Tax"}),u.jsxs(re,{$highlight:!0,children:[Q(e.totalTax),e.postHike&&u.jsxs(Me,{children:["→ ",Q(e.postHike.totalTax)]})]})]})]}),u.jsxs(zn,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(Ul,{}),"Yearly Breakdown"]})}),u.jsxs(te,{children:[u.jsx(ne,{children:"Base Salary (CTC)"}),u.jsx(re,{children:V(e.baseSalary)})]}),e.employerPF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employer PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employerPF)]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Gross Salary"}),u.jsx(re,{children:V(e.grossSalary)})]}),u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Standard Deduction"}),u.jsxs(re,{$negative:!0,children:["-",V(e.standardDeduction)]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Taxable Income"}),u.jsx(re,{children:V(e.taxableIncome)})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Income Tax"}),u.jsxs(re,{$negative:!0,children:["-",Q(e.totalTax)]})]}),e.employeePF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employee PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employeePF)]})]}),e.additionalDeductions.map((p,g)=>u.jsxs(te,{children:[u.jsxs(ne,{children:["Less: ",p.name]}),u.jsxs(re,{$negative:!0,children:["-",V(p.amount)]})]},g)),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Net In-Hand (Yearly)"}),u.jsx(re,{$highlight:!0,children:Q(e.netSalaryYearly)})]})]}),u.jsxs(zn,{variants:en,children:[u.jsx(In,{children:u.jsxs(Qt,{children:[u.jsx(Ul,{}),"Monthly Breakdown"]})}),u.jsxs(te,{children:[u.jsx(ne,{children:"Base Salary (CTC)"}),u.jsx(re,{children:V(e.baseSalary/12)})]}),e.employerPF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employer PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employerPF/12)]})]}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Gross Salary"}),u.jsx(re,{children:V(e.grossSalary/12)})]}),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Income Tax"}),u.jsxs(re,{$negative:!0,children:["-",Q(e.totalTax/12)]})]}),e.employeePF>0&&u.jsxs(te,{children:[u.jsx(ne,{children:"Less: Employee PF"}),u.jsxs(re,{$negative:!0,children:["-",V(e.employeePF/12)]})]}),e.additionalDeductions.map((p,g)=>u.jsxs(te,{children:[u.jsxs(ne,{children:["Less: ",p.name]}),u.jsxs(re,{$negative:!0,children:["-",V(p.amount/12)]})]},g)),u.jsx(Ke,{}),u.jsxs(te,{children:[u.jsx(ne,{$bold:!0,children:"Net In-Hand (Monthly)"}),u.jsx(re,{$highlight:!0,children:Q(e.netSalaryMonthly)})]})]})]})},bP=k.div`
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
`,PP=k.div`
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
`,EP=k.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-md));
  }
`,AP=k.div`
  min-width: 0;
`,DP=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(!1);C.useEffect(()=>{const o=sx();o&&o.baseSalary>0&&r(!0)},[]);const i=C.useCallback(o=>{const a=qb(o);t(a),window.innerWidth<1024&&setTimeout(()=>{var l;(l=document.getElementById("results"))==null||l.scrollIntoView({behavior:"smooth"})},100)},[]),s=C.useCallback(()=>{t(null)},[]);return u.jsx(bP,{children:u.jsx(Qd,{$maxWidth:"wide",children:u.jsxs(PP,{children:[u.jsx(EP,{children:u.jsx(dP,{onCalculate:i,onReset:s,autoCalculate:n})}),u.jsx(AP,{id:"results",children:u.jsx(Wr,{mode:"wait",children:e&&u.jsx(TP,{breakdown:e},"results")})})]})})})},Qr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],ox="expense-manager-transactions",ax="expense-manager-initial-balances",lx="expense-manager-initial-cc-bills";function gm(e){localStorage.setItem(ox,JSON.stringify(e))}function RP(){const e=localStorage.getItem(ox);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function IP(e){localStorage.setItem(ax,JSON.stringify(e))}function LP(){const e=localStorage.getItem(ax);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function MP(e){localStorage.setItem(lx,JSON.stringify(e))}function _P(){const e=localStorage.getItem(lx);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function ri(e){return e.toISOString().split("T")[0]}function ux(e){return new Date(e+"T00:00:00")}function BP(e){return ux(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function vm(e){return e===ri(new Date)}function $P(e){return e<ri(new Date)}function NP(e,t){if(!e.statementDate)return"";const n=ux(t),r=n.getFullYear(),i=n.getMonth(),s=n.getDate();let o=r,a=i;s<e.statementDate&&(a-=1,a<0&&(a=11,o-=1));const l=new Date(o,a,e.statementDate);return ri(l)}function VP(e,t,n,r,i={}){const s=t.filter(a=>a.date<=n&&(a.accountId===e.id||a.linkedAccountId===e.id));let o=0;if(e.type==="bank"){o=r[e.id]||0;for(const a of s)a.accountId===e.id&&(a.type==="bank_credit"?o+=a.amount:a.type==="bank_debit"&&(o-=a.amount)),a.linkedAccountId===e.id&&a.type==="cc_payment"&&(o-=a.amount);return{account:e,balance:o}}else{o=-(i[e.id]||0);for(const f of s)f.accountId===e.id&&(f.type==="credit_card_spend"?o-=f.amount:f.type==="cc_payment"&&(o+=f.amount));const l=NP(e,n),d=s.filter(f=>f.date>l&&f.accountId===e.id&&f.type==="credit_card_spend").reduce((f,p)=>f+p.amount,0);return{account:e,balance:o,pendingBill:d,totalOutstanding:Math.abs(Math.min(0,o))}}}function FP(e,t,n,r={}){return Qr.map(i=>VP(i,e,t,n,r))}function OP(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function zP(e,t,n,r,i,s){return{id:OP(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:s,createdAt:new Date().toISOString()}}function br(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function UP(e){return Qr.find(t=>t.id===e)}function cx(){return Qr.filter(e=>e.type==="bank")}function dx(){return Qr.filter(e=>e.type==="credit_card")}const HP=k(ee.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,WP=k.div`
  display: flex;
  align-items: center;
  padding: var(--space-xl);
  gap: var(--space-lg);

  @media (max-width: 640px) {
    padding: var(--space-lg);
    gap: var(--space-md);
  }
`,GP=k.div`
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
`,KP=k.span`
  font-size: 22px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,YP=k.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
`,QP=k.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,XP=k.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,ZP=k.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,JP=k.span`
  font-size: 13px;
  color: var(--text-tertiary);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,qP=k.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  
  ${({$type:e})=>{switch(e){case"past":return"background: #ef4444;";case"today":return"background: #10b981;";case"future":return"background: #3b82f6;"}}}
`,e5=k.span`
  font-size: 12px;
  font-weight: 500;
  
  ${({$type:e})=>{switch(e){case"past":return"color: #ef4444;";case"today":return"color: #10b981;";case"future":return"color: #3b82f6;"}}}

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,t5=k.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`,n5=k(ee.button).attrs({type:"button"})`
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
`,r5=k.div`
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`,i5=k.div`
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
`,s5=k.input`
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
`,o5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),a5=({selectedDate:e,onDateChange:t})=>{const n=p=>{p.preventDefault(),p.stopPropagation(),t(ri(new Date))},i=vm(e)?"today":$P(e)?"past":"future",s=vm(e),o=new Date(e+"T00:00:00"),a=o.getDate(),l=o.toLocaleDateString("en-US",{month:"short"}).toUpperCase(),c=o.toLocaleDateString("en-US",{weekday:"long"}),d=o.getFullYear(),f=()=>{switch(i){case"past":return"Past";case"today":return"Today";case"future":return"Future"}};return u.jsx(HP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20},children:u.jsxs(WP,{children:[u.jsxs(GP,{$type:i,children:[u.jsx(KP,{children:a}),u.jsx(YP,{children:l})]}),u.jsxs(QP,{children:[u.jsx(XP,{children:c}),u.jsxs(ZP,{children:[u.jsx(JP,{children:d}),u.jsx(qP,{$type:i}),u.jsx(e5,{$type:i,children:f()})]})]}),u.jsxs(t5,{children:[!s&&u.jsx(n5,{onClick:n,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Today"}),u.jsxs(r5,{children:[u.jsx(i5,{children:u.jsx(o5,{})}),u.jsx(s5,{type:"date",value:e,onChange:p=>t(p.target.value),"aria-label":"Select date"})]})]})]})})},l5=k.div`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,u5=k.div`
  position: relative;
  z-index: 1;
`,c5=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,d5=k.div`
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
`,f5=k.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  flex: 1;
  margin-left: var(--space-sm);
`,Hl=k.span`
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
`,p5=k.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({$negative:e,$color:t})=>e?"#ef4444":t};
  letter-spacing: -0.02em;
  margin-bottom: 2px;
  font-variant-numeric: tabular-nums;
`,h5=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m5=k.div`
  font-size: 11px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,g5={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},v5=e=>{const t=g5[e];return t?u.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},y5=({accountBalance:e})=>{const{account:t,balance:n,pendingBill:r,totalOutstanding:i}=e,s=Math.abs(n),o=n<0,a=()=>i&&i>0?u.jsx(Hl,{$type:"due",children:"Due"}):r&&r>0?u.jsx(Hl,{$type:"unbilled",children:"Unbilled"}):u.jsx(Hl,{$type:"clear",children:"Clear"});return u.jsx(l5,{$accentColor:t.color,children:u.jsxs(u5,{children:[u.jsxs(c5,{children:[u.jsx(d5,{children:v5(t.bank)}),u.jsx(f5,{children:t.name.replace(" Credit Card","").replace(" Bank","")+" Bank"})]}),u.jsxs(p5,{$negative:o,$color:t.color,children:[o?"-":"",br(s)]}),u.jsxs(h5,{children:[u.jsx(m5,{children:o?"Outstanding":s===0?"Paid":"Overpaid"}),a()]})]})})},x5=C.memo(y5),w5=k.div`
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
`,qs=k.div`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 500px) {
    padding: var(--space-md);
  }
`,eo=k.div`
  position: relative;
  z-index: 1;
`,to=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
`,ym=k.div`
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
`,xm=k.div`
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
`,wm={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},no=k.div`
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
`,ro=k.div`
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
`,io=k.div`
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
`,so=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,S5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),k5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),u.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),u.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),oo=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"m18 15-6-6-6 6"})}),ao=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"m6 9 6 6 6-6"})}),C5=({balances:e})=>{const{hdfcBalance:t,iciciBalance:n,totalCCOutstanding:r,netPosition:i}=C.useMemo(()=>{const s=e.find(f=>f.account.id==="hdfc-bank"),o=e.find(f=>f.account.id==="icici-bank"),a=e.filter(f=>f.account.type==="credit_card"),l=(s==null?void 0:s.balance)||0,c=(o==null?void 0:o.balance)||0,d=a.reduce((f,p)=>f+(p.totalOutstanding||0),0);return{hdfcBalance:l,iciciBalance:c,totalCCOutstanding:d,netPosition:l-d}},[e]);return u.jsxs(w5,{children:[u.jsx(qs,{$variant:"hdfc",children:u.jsxs(eo,{children:[u.jsx(to,{children:u.jsx(xm,{children:u.jsx("img",{src:wm.hdfc,alt:"HDFC Bank"})})}),u.jsx(ro,{children:"HDFC Bank"}),u.jsx(io,{$color:t>=0?"#004C8F":"#ef4444",children:br(t)}),u.jsxs(so,{children:[u.jsx("span",{}),u.jsxs(no,{$positive:t>=0,children:[t>=0?u.jsx(oo,{}):u.jsx(ao,{}),t>=0?"+":"-"]})]})]})}),u.jsx(qs,{$variant:"icici",children:u.jsxs(eo,{children:[u.jsx(to,{children:u.jsx(xm,{children:u.jsx("img",{src:wm.icici,alt:"ICICI Bank"})})}),u.jsx(ro,{children:"ICICI Bank"}),u.jsx(io,{$color:n>=0?"#F58220":"#ef4444",children:br(n)}),u.jsxs(so,{children:[u.jsx("span",{}),u.jsxs(no,{$positive:n>=0,children:[n>=0?u.jsx(oo,{}):u.jsx(ao,{}),n>=0?"+":"-"]})]})]})}),u.jsx(qs,{$variant:"negative",children:u.jsxs(eo,{children:[u.jsx(to,{children:u.jsx(ym,{$color:"#ef4444",children:u.jsx(S5,{})})}),u.jsx(ro,{children:"Credit Cards"}),u.jsxs(io,{$color:r>0?"#ef4444":"#10b981",children:[r>0?"-":"",br(r)]}),u.jsxs(so,{children:[u.jsx("span",{}),u.jsxs(no,{$positive:r===0,children:[r===0?u.jsx(oo,{}):u.jsx(ao,{}),r>0?"Due":"Clear"]})]})]})}),u.jsx(qs,{$variant:"neutral",children:u.jsxs(eo,{children:[u.jsx(to,{children:u.jsx(ym,{$color:"#10b981",children:u.jsx(k5,{})})}),u.jsx(ro,{children:"Net Position"}),u.jsx(io,{$color:i>=0?"#10b981":"#ef4444",children:br(i)}),u.jsxs(so,{children:[u.jsx("span",{}),u.jsxs(no,{$positive:i>=0,children:[i>=0?u.jsx(oo,{}):u.jsx(ao,{}),"Net"]})]})]})})]})},j5=C.memo(C5),T5=k.div`
  position: relative;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,b5=k.div`
  position: relative;
  z-index: 1;
`,P5=k.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);

  @media (max-width: 640px) {
    margin-bottom: var(--space-lg);
  }
`,E5=k.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.3) 0%, rgba(var(--accent-rgb), 0.1) 100%);
  border: 1px solid rgba(var(--accent-rgb), 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 16px;
    height: 16px;
    color: var(--accent);
  }
`,A5=k.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,D5=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
`,R5=k.button`
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
`,I5=k.span`
  font-weight: 600;
  display: block;
`,L5=k.span`
  font-size: 11px;
  opacity: 0.8;
  display: block;
  margin-top: 2px;
`,M5=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    gap: var(--space-md);
    margin-top: var(--space-lg);
    padding-top: var(--space-lg);
  }
`,_5=k.div`
  display: flex;
  gap: var(--space-md);
  align-items: flex-end;
`,lo=k.div`
  &.flex-grow {
    flex: 1;
    min-width: 0;
  }
`,uo=k.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`,Sm=k.input`
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
`,B5=k.div`
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
`,$5=k.input`
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
`,N5=k.select`
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
`,V5=k.div`
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
`,F5=k.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`,O5=k.button`
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
`,z5=k.button`
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
`,U5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),H5=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),W5=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],G5="hdfc-bank",K5=dx(),Y5=cx(),Q5=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=C.useState(""),[i,s]=C.useState(""),[o,a]=C.useState(""),[l,c]=C.useState(""),[d,f]=C.useState(t||ri(new Date));C.useEffect(()=>{t&&f(t)},[t]);const p=C.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return K5;case"bank_debit":case"bank_credit":return Y5;default:return Qr}},[n]),g=C.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),x=n&&i&&parseFloat(o)>0&&d,y=C.useCallback(()=>{r(""),s(""),a(""),c("")},[]),w=C.useCallback(()=>{if(!n||!i||!o||!d)return;const v=n==="cc_payment"?G5:void 0,S=Qr.find(b=>b.id===i);let j="";switch(n){case"credit_card_spend":j=`Spent on ${S==null?void 0:S.name}`;break;case"cc_payment":j=`Payment to ${S==null?void 0:S.name}`;break;case"bank_debit":j=`Debited from ${S==null?void 0:S.name}`;break;case"bank_credit":j=`Credited to ${S==null?void 0:S.name}`;break}const T=zP(n,i,parseFloat(o),l||j,d,v);e(T),y()},[n,i,o,l,d,e,y]),m=C.useMemo(()=>{const S=o.replace(/[^0-9.]/g,"").split(".");let j=S[0];const T=S[1];if(j.length>3){let b=j.substring(j.length-3),P=j.substring(0,j.length-3);P=P.replace(/\B(?=(\d{2})+(?!\d))/g,","),j=P+","+b}return T!==void 0?`${j}.${T}`:j},[o]),h=C.useCallback(v=>{const S=v.target.value.replace(/,/g,"");(S===""||/^\d*\.?\d*$/.test(S))&&a(S)},[]);return u.jsx(T5,{children:u.jsxs(b5,{children:[u.jsxs(P5,{children:[u.jsx(E5,{children:u.jsx(U5,{})}),u.jsx(A5,{children:"Add Transaction"})]}),u.jsx(D5,{children:W5.map(({type:v,label:S,hint:j,color:T})=>u.jsxs(R5,{type:"button",$active:n===v,$color:T,onClick:()=>{r(v),s("")},children:[u.jsx(I5,{children:S}),u.jsx(L5,{children:j})]},v))}),n&&u.jsxs(M5,{children:[u.jsxs(lo,{children:[u.jsx(uo,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),u.jsxs(N5,{value:i,onChange:v=>s(v.target.value),children:[u.jsx("option",{value:"",children:g()}),p.map(v=>u.jsx("option",{value:v.id,children:v.name},v.id))]})]}),u.jsxs(_5,{children:[u.jsxs(lo,{className:"flex-grow",children:[u.jsx(uo,{children:"Amount"}),u.jsx(V5,{children:u.jsx(Sm,{type:"text",inputMode:"decimal",placeholder:"10,000",value:m,onChange:h})})]}),u.jsxs(lo,{children:[u.jsx(uo,{children:"Date"}),u.jsxs(B5,{children:[u.jsx(H5,{}),u.jsx($5,{type:"date",value:d,onChange:v=>f(v.target.value)})]})]})]}),u.jsxs(lo,{children:[u.jsx(uo,{children:"Description (Optional)"}),u.jsx(Sm,{type:"text",placeholder:"e.g., Grocery shopping",value:l,onChange:v=>c(v.target.value)})]}),u.jsxs(F5,{children:[u.jsx(O5,{type:"button",onClick:w,disabled:!x,children:"Add"}),u.jsx(z5,{type:"button",onClick:y,children:"Cancel"})]})]})]})})},X5=C.memo(Q5),Z5=k.div`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,J5=k.div`
  position: relative;
  z-index: 1;
`,q5=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-xl);
  border-bottom: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
`,eE=k.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,tE=k.div`
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
`,nE=k.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,rE=k.span`
  font-size: 12px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  padding: 4px 10px;
  border-radius: var(--radius-full);
`,iE=k.div`
  max-height: 400px;
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
`,sE=k.div`
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
`,oE=k.div`
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
`,aE=k.div`
  min-width: 0;
  overflow: hidden;
`,lE=k.div`
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
`,uE=k.div`
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
`,cE=k.span`
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
`,dE=k.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
`,fE=k.div`
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  white-space: nowrap;
  text-align: right;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,pE=k.button`
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
`,hE=k.div`
  padding: var(--space-2xl);
  text-align: center;
  color: var(--text-tertiary);
`,mE=k.div`
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
`,gE=k.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,vE=k.p`
  font-size: 12px;
  color: var(--text-tertiary);
`,yE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),u.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),xE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),wE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("polyline",{points:"19 12 12 19 5 12"})]}),SE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),u.jsx("polyline",{points:"5 12 12 5 19 12"})]}),kE=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),CE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"3 6 5 6 21 6"}),u.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),jE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),u.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),TE=e=>{switch(e){case"credit_card_spend":return u.jsx(xE,{});case"cc_payment":return u.jsx(kE,{});case"bank_debit":return u.jsx(SE,{});case"bank_credit":return u.jsx(wE,{})}},km=e=>e==="bank_credit"||e==="cc_payment",bE=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const r=C.useMemo(()=>[...e].sort((s,o)=>{const a=o.date.localeCompare(s.date);return a!==0?a:new Date(o.createdAt).getTime()-new Date(s.createdAt).getTime()}).filter(s=>s.date<=n),[e,n]),i=C.useCallback(s=>{t(s)},[t]);return u.jsx(Z5,{children:u.jsxs(J5,{children:[u.jsxs(q5,{children:[u.jsxs(eE,{children:[u.jsx(tE,{children:u.jsx(yE,{})}),u.jsx(nE,{children:"Transactions"})]}),u.jsx(rE,{children:r.length})]}),u.jsx(iE,{children:r.length===0?u.jsxs(hE,{children:[u.jsx(mE,{children:u.jsx(jE,{})}),u.jsx(gE,{children:"No transactions yet"}),u.jsx(vE,{children:"Add your first transaction above"})]}):r.map(s=>{var a;const o=UP(s.accountId);return u.jsxs(sE,{children:[u.jsx(oE,{$type:s.type,children:TE(s.type)}),u.jsxs(aE,{children:[u.jsx(lE,{children:s.description}),u.jsxs(uE,{children:[u.jsx("span",{children:BP(s.date)}),u.jsx(cE,{children:(a=o==null?void 0:o.name)==null?void 0:a.replace(" Credit Card"," CC").replace(" Bank","")})]})]}),u.jsxs(dE,{children:[u.jsxs(fE,{$positive:km(s.type),children:[km(s.type)?"+":"-",br(s.amount)]}),u.jsx(pE,{type:"button",onClick:()=>i(s.id),"aria-label":"Delete transaction",children:u.jsx(CE,{})})]})]},s.id)})})]})})},PE=C.memo(bE),EE=k(ee.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,AE=k(ee.div)`
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
`,DE=k.div`
  margin-bottom: var(--space-lg);
`,RE=k.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,IE=k.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Cm=k.h3`
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
`,jm=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Tm=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,bm=k.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Pm=k.div`
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
`,Em=k.input`
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
`,LE=k.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,ME=k.div`
  display: flex;
  gap: var(--space-md);
`,Am=k(ee.button)`
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
`,_E=k.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,BE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),u.jsx("polyline",{points:"5 6 12 3 19 6"}),u.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),u.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),$E=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),u.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),NE={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},VE={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},FE=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,onSave:i})=>{const[s,o]=C.useState({}),[a,l]=C.useState({}),c=cx(),d=dx();C.useEffect(()=>{if(e){const y={};c.forEach(m=>{var h;y[m.id]=((h=n[m.id])==null?void 0:h.toString())||""}),o(y);const w={};d.forEach(m=>{var h;w[m.id]=((h=r[m.id])==null?void 0:h.toString())||""}),l(w)}},[e,n,r]);const f=()=>{const y={};Object.entries(s).forEach(([m,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;y[m]=v});const w={};Object.entries(a).forEach(([m,h])=>{const v=parseFloat(h.replace(/,/g,""))||0;w[m]=v}),i(y,w),t()},p=y=>{const w=y.replace(/[^0-9]/g,"");if(!w)return"";if(w.length>3){let m=w.substring(w.length-3),h=w.substring(0,w.length-3);return h=h.replace(/\B(?=(\d{2})+(?!\d))/g,","),h+","+m}return w},g=(y,w)=>{const m=w.replace(/,/g,"");(m===""||/^\d+$/.test(m))&&o(h=>({...h,[y]:m}))},x=(y,w)=>{const m=w.replace(/,/g,"");(m===""||/^\d+$/.test(m))&&l(h=>({...h,[y]:m}))};return u.jsx(Wr,{children:e&&u.jsx(EE,{variants:NE,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:u.jsxs(AE,{variants:VE,initial:"hidden",animate:"visible",exit:"exit",onClick:y=>y.stopPropagation(),children:[u.jsxs(DE,{children:[u.jsx(RE,{children:"Initial Balances & Bills"}),u.jsx(IE,{children:"Set your starting bank balances and any existing credit card outstanding amounts."})]}),u.jsxs(Cm,{children:[u.jsx(BE,{}),"Bank Account Balances"]}),u.jsx(jm,{children:c.map(y=>u.jsxs(Tm,{children:[u.jsx(bm,{children:y.name}),u.jsx(Pm,{children:u.jsx(Em,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:p(s[y.id]||""),onChange:w=>g(y.id,w.target.value)})})]},y.id))}),u.jsx(LE,{}),u.jsxs(Cm,{children:[u.jsx($E,{}),"Credit Card Outstanding Bills"]}),u.jsx(jm,{children:d.map(y=>u.jsxs(Tm,{children:[u.jsx(bm,{children:y.name}),u.jsx(Pm,{children:u.jsx(Em,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:p(a[y.id]||""),onChange:w=>x(y.id,w.target.value)})}),u.jsx(_E,{children:"Current outstanding amount you owe"})]},y.id))}),u.jsxs(ME,{children:[u.jsx(Am,{onClick:t,children:"Cancel"}),u.jsx(Am,{$primary:!0,onClick:f,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save All"})]})]})})})},OE=k.div`
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
`,zE=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
    margin-bottom: var(--space-xl);
  }
`,UE=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);

  @media (min-width: 1024px) {
    grid-template-columns: 380px 1fr;
    gap: var(--space-2xl);
    align-items: start;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 420px 1fr;
  }

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,HE=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(80px + var(--space-xl));
  }
`,WE=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
`,GE=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,KE=k.h2`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-xs);
`,YE=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 500px) {
    gap: var(--space-md);
  }
`,QE=k.button`
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
`,XE=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),ZE=()=>{const[e,t]=C.useState(ri(new Date)),[n,r]=C.useState([]),[i,s]=C.useState({}),[o,a]=C.useState({}),[l,c]=C.useState(!1);C.useEffect(()=>{const y=RP(),w=LP(),m=_P();r(y),s(w),a(m)},[]);const d=C.useMemo(()=>FP(n,e,i,o),[e,n,i,o]),f=C.useMemo(()=>d.filter(y=>y.account.type==="credit_card"),[d]),p=C.useCallback(y=>{r(w=>{const m=[...w,y];return requestAnimationFrame(()=>gm(m)),m})},[]),g=C.useCallback(y=>{r(w=>{const m=w.filter(h=>h.id!==y);return requestAnimationFrame(()=>gm(m)),m})},[]),x=C.useCallback((y,w)=>{s(y),a(w),requestAnimationFrame(()=>{IP(y),MP(w)})},[]);return u.jsxs(OE,{children:[u.jsxs(Qd,{$maxWidth:"wide",children:[u.jsxs(zE,{children:[u.jsx(a5,{selectedDate:e,onDateChange:t}),u.jsx(j5,{balances:d})]}),u.jsxs(UE,{children:[u.jsxs(HE,{children:[u.jsx(X5,{onAddTransaction:p,defaultDate:e}),u.jsxs(QE,{type:"button",onClick:()=>c(!0),children:[u.jsx(XE,{}),"Set Initial Balances"]})]}),u.jsxs(WE,{children:[u.jsxs(GE,{children:[u.jsx(KE,{children:"Credit Cards"}),u.jsx(YE,{children:f.map(y=>u.jsx(x5,{accountBalance:y},y.account.id))})]}),u.jsx(PE,{transactions:n,onDeleteTransaction:g,selectedDate:e})]})]})]}),u.jsx(FE,{isOpen:l,onClose:()=>c(!1),initialBalances:i,initialCCBills:o,onSave:x})]})},JE=k.div`
  min-height: 100vh;
  position: relative;
`,qE=k.main`
  position: relative;
  z-index: 1;
`,e4=k.a`
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
`;function t4(){return u.jsx(FS,{basename:"/tools",children:u.jsxs(HS,{children:[u.jsx(G2,{}),u.jsxs(JE,{children:[u.jsx(e4,{href:"#main-content",children:"Skip to main content"}),u.jsx(Q2,{}),u.jsx(Rb,{}),u.jsx(qE,{id:"main-content",children:u.jsxs(LS,{children:[u.jsx(Co,{path:"/",element:u.jsx(Wb,{})}),u.jsx(Co,{path:"/tax-calculator",element:u.jsx(DP,{})}),u.jsx(Co,{path:"/expense-manager",element:u.jsx(ZE,{})})]})})]})]})})}z0(document.getElementById("root")).render(u.jsx(C.StrictMode,{children:u.jsx(t4,{})}));
