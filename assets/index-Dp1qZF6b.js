function sb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function lb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lv={exports:{}},Cl={},Iv={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),cb=Symbol.for("react.portal"),ub=Symbol.for("react.fragment"),db=Symbol.for("react.strict_mode"),fb=Symbol.for("react.profiler"),pb=Symbol.for("react.provider"),hb=Symbol.for("react.context"),mb=Symbol.for("react.forward_ref"),gb=Symbol.for("react.suspense"),vb=Symbol.for("react.memo"),yb=Symbol.for("react.lazy"),Ah=Symbol.iterator;function xb(e){return e===null||typeof e!="object"?null:(e=Ah&&e[Ah]||e["@@iterator"],typeof e=="function"?e:null)}var _v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mv=Object.assign,Ov={};function $i(e,t,n){this.props=e,this.context=t,this.refs=Ov,this.updater=n||_v}$i.prototype.isReactComponent={};$i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rv(){}Rv.prototype=$i.prototype;function ff(e,t,n){this.props=e,this.context=t,this.refs=Ov,this.updater=n||_v}var pf=ff.prototype=new Rv;pf.constructor=ff;Mv(pf,$i.prototype);pf.isPureReactComponent=!0;var Lh=Array.isArray,$v=Object.prototype.hasOwnProperty,hf={current:null},Nv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)$v.call(t,r)&&!Nv.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ma,type:e,key:o,ref:a,props:i,_owner:hf.current}}function wb(e,t){return{$$typeof:ma,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ma}function bb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ih=/\/+/g;function vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bb(""+e.key):t.toString(36)}function gs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ma:case cb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+vc(a,0):r,Lh(i)?(n="",e!=null&&(n=e.replace(Ih,"$&/")+"/"),gs(i,t,n,"",function(u){return u})):i!=null&&(mf(i)&&(i=wb(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ih,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Lh(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+vc(o,l);a+=gs(o,t,n,c,i)}else if(c=xb(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+vc(o,l++),a+=gs(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _a(e,t,n){if(e==null)return e;var r=[],i=0;return gs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},vs={transition:null},jb={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:vs,ReactCurrentOwner:hf};function Vv(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:_a,forEach:function(e,t,n){_a(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _a(e,function(){t++}),t},toArray:function(e){return _a(e,function(t){return t})||[]},only:function(e){if(!mf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=$i;X.Fragment=ub;X.Profiler=fb;X.PureComponent=ff;X.StrictMode=db;X.Suspense=gb;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jb;X.act=Vv;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=hf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)$v.call(t,c)&&!Nv.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ma,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:hb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pb,_context:e},e.Consumer=e};X.createElement=Bv;X.createFactory=function(e){var t=Bv.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:mb,render:e}};X.isValidElement=mf;X.lazy=function(e){return{$$typeof:yb,_payload:{_status:-1,_result:e},_init:Sb}};X.memo=function(e,t){return{$$typeof:vb,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};X.unstable_act=Vv;X.useCallback=function(e,t){return qe.current.useCallback(e,t)};X.useContext=function(e){return qe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};X.useEffect=function(e,t){return qe.current.useEffect(e,t)};X.useId=function(){return qe.current.useId()};X.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return qe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};X.useRef=function(e){return qe.current.useRef(e)};X.useState=function(e){return qe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return qe.current.useTransition()};X.version="18.3.1";Iv.exports=X;var b=Iv.exports;const en=lb(b),kb=sb({__proto__:null,default:en},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb=b,Tb=Symbol.for("react.element"),Pb=Symbol.for("react.fragment"),Db=Object.prototype.hasOwnProperty,Eb=Cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ab={key:!0,ref:!0,__self:!0,__source:!0};function Fv(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Db.call(t,r)&&!Ab.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tb,type:e,key:o,ref:a,props:i,_owner:Eb.current}}Cl.Fragment=Pb;Cl.jsx=Fv;Cl.jsxs=Fv;Lv.exports=Cl;var s=Lv.exports,zv={exports:{}},yt={},Wv={exports:{}},Uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,M){var O=E.length;E.push(M);e:for(;0<O;){var V=O-1>>>1,W=E[V];if(0<i(W,M))E[V]=M,E[O]=W,O=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],O=E.pop();if(O!==M){E[0]=O;e:for(var V=0,W=E.length,re=W>>>1;V<re;){var le=2*(V+1)-1,K=E[le],ce=le+1,Re=E[ce];if(0>i(K,O))ce<W&&0>i(Re,K)?(E[V]=Re,E[ce]=O,V=ce):(E[V]=K,E[le]=O,V=le);else if(ce<W&&0>i(Re,O))E[V]=Re,E[ce]=O,V=ce;else break e}}return M}function i(E,M){var O=E.sortIndex-M.sortIndex;return O!==0?O:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,m=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=E)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function j(E){if(w=!1,v(E),!x)if(n(c)!==null)x=!0,_(T);else{var M=n(u);M!==null&&R(j,M.startTime-E)}}function T(E,M){x=!1,w&&(w=!1,g(P),P=-1),m=!0;var O=p;try{for(v(M),f=n(c);f!==null&&(!(f.expirationTime>M)||E&&!N());){var V=f.callback;if(typeof V=="function"){f.callback=null,p=f.priorityLevel;var W=V(f.expirationTime<=M);M=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(c)&&r(c),v(M)}else r(c);f=n(c)}if(f!==null)var re=!0;else{var le=n(u);le!==null&&R(j,le.startTime-M),re=!1}return re}finally{f=null,p=O,m=!1}}var C=!1,k=null,P=-1,A=5,L=-1;function N(){return!(e.unstable_now()-L<A)}function F(){if(k!==null){var E=e.unstable_now();L=E;var M=!0;try{M=k(!0,E)}finally{M?Q():(C=!1,k=null)}}else C=!1}var Q;if(typeof h=="function")Q=function(){h(F)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=F,Q=function(){D.postMessage(null)}}else Q=function(){S(F,0)};function _(E){k=E,C||(C=!0,Q())}function R(E,M){P=S(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,_(T))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var O=p;p=M;try{return E()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=p;p=E;try{return M()}finally{p=O}},e.unstable_scheduleCallback=function(E,M,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,E){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,E={id:d++,callback:M,priorityLevel:E,startTime:O,expirationTime:W,sortIndex:-1},O>V?(E.sortIndex=O,t(u,E),n(c)===null&&E===n(u)&&(w?(g(P),P=-1):w=!0,R(j,O-V))):(E.sortIndex=W,t(c,E),x||m||(x=!0,_(T))),E},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(E){var M=p;return function(){var O=p;p=M;try{return E.apply(this,arguments)}finally{p=O}}}})(Uv);Wv.exports=Uv;var Lb=Wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ib=b,gt=Lb;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hv=new Set,zo={};function _r(e,t){bi(e,t),bi(e+"Capture",t)}function bi(e,t){for(zo[e]=t,e=0;e<t.length;e++)Hv.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,_b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},Mh={};function Mb(e){return Au.call(Mh,e)?!0:Au.call(_h,e)?!1:_b.test(e)?Mh[e]=!0:(_h[e]=!0,!1)}function Ob(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rb(e,t,n,r){if(t===null||typeof t>"u"||Ob(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function vf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gf,vf);ze[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gf,vf);ze[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gf,vf);ze[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function yf(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rb(t,n,i,r)&&(n=null),r||i===null?Mb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bn=Ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Kv=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=Oh&&e[Oh]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,yc;function yo(e){if(yc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yc=t&&t[1]||""}return`
`+yc+e}var xc=!1;function wc(e,t){if(!e||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yo(e):""}function $b(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=wc(e.type,!1),e;case 11:return e=wc(e.type.render,!1),e;case 1:return e=wc(e.type,!0),e;default:return""}}function Mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Gr:return"Portal";case Lu:return"Profiler";case xf:return"StrictMode";case Iu:return"Suspense";case _u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gv:return(e.displayName||"Context")+".Consumer";case Yv:return(e._context.displayName||"Context")+".Provider";case wf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bf:return t=e.displayName||null,t!==null?t:Mu(e.type)||"Memo";case Pn:t=e._payload,e=e._init;try{return Mu(e(t))}catch{}}return null}function Nb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(t);case 8:return t===xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bb(e){var t=Qv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oa(e){e._valueTracker||(e._valueTracker=Bb(e))}function Xv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ou(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zv(e,t){t=t.checked,t!=null&&yf(e,"checked",t,!1)}function Ru(e,t){Zv(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$u(e,t.type,n):t.hasOwnProperty("defaultValue")&&$u(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $h(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $u(e,t,n){(t!=="number"||Ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xo=Array.isArray;function mi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(xo(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Jv(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ra,ey=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vb=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(e){Vb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Do[t]=Do[e]})});function ty(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Do.hasOwnProperty(e)&&Do[e]?(""+t).trim():t+"px"}function ny(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ty(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fb=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(e,t){if(t){if(Fb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Fu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function Sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wu=null,gi=null,vi=null;function Vh(e){if(e=ya(e)){if(typeof Wu!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Al(t),Wu(e.stateNode,e.type,t))}}function ry(e){gi?vi?vi.push(e):vi=[e]:gi=e}function iy(){if(gi){var e=gi,t=vi;if(vi=gi=null,Vh(e),t)for(e=0;e<t.length;e++)Vh(t[e])}}function oy(e,t){return e(t)}function ay(){}var bc=!1;function sy(e,t,n){if(bc)return e(t,n);bc=!0;try{return oy(e,t,n)}finally{bc=!1,(gi!==null||vi!==null)&&(ay(),iy())}}function Uo(e,t){var n=e.stateNode;if(n===null)return null;var r=Al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Uu=!1;if(gn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Uu=!1}function zb(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Eo=!1,Bs=null,Vs=!1,Hu=null,Wb={onError:function(e){Eo=!0,Bs=e}};function Ub(e,t,n,r,i,o,a,l,c){Eo=!1,Bs=null,zb.apply(Wb,arguments)}function Hb(e,t,n,r,i,o,a,l,c){if(Ub.apply(this,arguments),Eo){if(Eo){var u=Bs;Eo=!1,Bs=null}else throw Error(I(198));Vs||(Vs=!0,Hu=u)}}function Mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ly(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fh(e){if(Mr(e)!==e)throw Error(I(188))}function Yb(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fh(i),e;if(o===r)return Fh(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function cy(e){return e=Yb(e),e!==null?uy(e):null}function uy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uy(e);if(t!==null)return t;e=e.sibling}return null}var dy=gt.unstable_scheduleCallback,zh=gt.unstable_cancelCallback,Gb=gt.unstable_shouldYield,Kb=gt.unstable_requestPaint,be=gt.unstable_now,Qb=gt.unstable_getCurrentPriorityLevel,jf=gt.unstable_ImmediatePriority,fy=gt.unstable_UserBlockingPriority,Fs=gt.unstable_NormalPriority,Xb=gt.unstable_LowPriority,py=gt.unstable_IdlePriority,Tl=null,nn=null;function Zb(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:eS,Jb=Math.log,qb=Math.LN2;function eS(e){return e>>>=0,e===0?32:31-(Jb(e)/qb|0)|0}var $a=64,Na=4194304;function wo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=wo(l):(o&=a,o!==0&&(r=wo(o)))}else a=n&~i,a!==0?r=wo(a):o!==0&&(r=wo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function tS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Nt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=tS(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hy(){var e=$a;return $a<<=1,!($a&4194240)&&($a=64),e}function Sc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function rS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function kf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function my(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gy,Cf,vy,yy,xy,Gu=!1,Ba=[],Mn=null,On=null,Rn=null,Ho=new Map,Yo=new Map,En=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ho.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(t.pointerId)}}function Ji(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ya(t),t!==null&&Cf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oS(e,t,n,r,i){switch(t){case"focusin":return Mn=Ji(Mn,e,t,n,r,i),!0;case"dragenter":return On=Ji(On,e,t,n,r,i),!0;case"mouseover":return Rn=Ji(Rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ho.set(o,Ji(Ho.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Yo.set(o,Ji(Yo.get(o)||null,e,t,n,r,i)),!0}return!1}function wy(e){var t=gr(e.target);if(t!==null){var n=Mr(t);if(n!==null){if(t=n.tag,t===13){if(t=ly(n),t!==null){e.blockedOn=t,xy(e.priority,function(){vy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ku(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zu=r,n.target.dispatchEvent(r),zu=null}else return t=ya(n),t!==null&&Cf(t),e.blockedOn=n,!1;t.shift()}return!0}function Uh(e,t,n){ys(e)&&n.delete(t)}function aS(){Gu=!1,Mn!==null&&ys(Mn)&&(Mn=null),On!==null&&ys(On)&&(On=null),Rn!==null&&ys(Rn)&&(Rn=null),Ho.forEach(Uh),Yo.forEach(Uh)}function qi(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,aS)))}function Go(e){function t(i){return qi(i,e)}if(0<Ba.length){qi(Ba[0],e);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&qi(Mn,e),On!==null&&qi(On,e),Rn!==null&&qi(Rn,e),Ho.forEach(t),Yo.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&En.shift()}var yi=bn.ReactCurrentBatchConfig,Ws=!0;function sS(e,t,n,r){var i=te,o=yi.transition;yi.transition=null;try{te=1,Tf(e,t,n,r)}finally{te=i,yi.transition=o}}function lS(e,t,n,r){var i=te,o=yi.transition;yi.transition=null;try{te=4,Tf(e,t,n,r)}finally{te=i,yi.transition=o}}function Tf(e,t,n,r){if(Ws){var i=Ku(e,t,n,r);if(i===null)Ic(e,t,r,Us,n),Wh(e,r);else if(oS(i,e,t,n,r))r.stopPropagation();else if(Wh(e,r),t&4&&-1<iS.indexOf(e)){for(;i!==null;){var o=ya(i);if(o!==null&&gy(o),o=Ku(e,t,n,r),o===null&&Ic(e,t,r,Us,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ic(e,t,r,null,n)}}var Us=null;function Ku(e,t,n,r){if(Us=null,e=Sf(r),e=gr(e),e!==null)if(t=Mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ly(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function by(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qb()){case jf:return 1;case fy:return 4;case Fs:case Xb:return 16;case py:return 536870912;default:return 16}default:return 16}}var Ln=null,Pf=null,xs=null;function Sy(){if(xs)return xs;var e,t=Pf,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return xs=i.slice(e,1<r?1-r:void 0)}function ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Va(){return!0}function Hh(){return!1}function xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Va:Hh,this.isPropagationStopped=Hh,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=xt(Ni),va=ge({},Ni,{view:0,detail:0}),cS=xt(va),jc,kc,eo,Pl=ge({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(jc=e.screenX-eo.screenX,kc=e.screenY-eo.screenY):kc=jc=0,eo=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Yh=xt(Pl),uS=ge({},Pl,{dataTransfer:0}),dS=xt(uS),fS=ge({},va,{relatedTarget:0}),Cc=xt(fS),pS=ge({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=xt(pS),mS=ge({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gS=xt(mS),vS=ge({},Ni,{data:0}),Gh=xt(vS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wS[e])?!!t[e]:!1}function Ef(){return bS}var SS=ge({},va,{key:function(e){if(e.key){var t=yS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jS=xt(SS),kS=ge({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=xt(kS),CS=ge({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),TS=xt(CS),PS=ge({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=xt(PS),ES=ge({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),AS=xt(ES),LS=[9,13,27,32],Af=gn&&"CompositionEvent"in window,Ao=null;gn&&"documentMode"in document&&(Ao=document.documentMode);var IS=gn&&"TextEvent"in window&&!Ao,jy=gn&&(!Af||Ao&&8<Ao&&11>=Ao),Qh=" ",Xh=!1;function ky(e,t){switch(e){case"keyup":return LS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function _S(e,t){switch(e){case"compositionend":return Cy(t);case"keypress":return t.which!==32?null:(Xh=!0,Qh);case"textInput":return e=t.data,e===Qh&&Xh?null:e;default:return null}}function MS(e,t){if(Qr)return e==="compositionend"||!Af&&ky(e,t)?(e=Sy(),xs=Pf=Ln=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jy&&t.locale!=="ko"?null:t.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!OS[e.type]:t==="textarea"}function Ty(e,t,n,r){ry(r),t=Hs(t,"onChange"),0<t.length&&(n=new Df("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lo=null,Ko=null;function RS(e){$y(e,0)}function Dl(e){var t=Jr(e);if(Xv(t))return e}function $S(e,t){if(e==="change")return t}var Py=!1;if(gn){var Tc;if(gn){var Pc="oninput"in document;if(!Pc){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Pc=typeof Jh.oninput=="function"}Tc=Pc}else Tc=!1;Py=Tc&&(!document.documentMode||9<document.documentMode)}function qh(){Lo&&(Lo.detachEvent("onpropertychange",Dy),Ko=Lo=null)}function Dy(e){if(e.propertyName==="value"&&Dl(Ko)){var t=[];Ty(t,Ko,e,Sf(e)),sy(RS,t)}}function NS(e,t,n){e==="focusin"?(qh(),Lo=t,Ko=n,Lo.attachEvent("onpropertychange",Dy)):e==="focusout"&&qh()}function BS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(Ko)}function VS(e,t){if(e==="click")return Dl(t)}function FS(e,t){if(e==="input"||e==="change")return Dl(t)}function zS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:zS;function Qo(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Au.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tm(e,t){var n=em(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function Ey(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ey(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ay(){for(var e=window,t=Ns();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ns(e.document)}return t}function Lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function WS(e){var t=Ay(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ey(n.ownerDocument.documentElement,n)){if(r!==null&&Lf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tm(n,o);var a=tm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var US=gn&&"documentMode"in document&&11>=document.documentMode,Xr=null,Qu=null,Io=null,Xu=!1;function nm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||Xr==null||Xr!==Ns(r)||(r=Xr,"selectionStart"in r&&Lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Qo(Io,r)||(Io=r,r=Hs(Qu,"onSelect"),0<r.length&&(t=new Df("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}function Fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zr={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Dc={},Ly={};gn&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function El(e){if(Dc[e])return Dc[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ly)return Dc[e]=t[n];return e}var Iy=El("animationend"),_y=El("animationiteration"),My=El("animationstart"),Oy=El("transitionend"),Ry=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Ry.set(e,t),_r(t,[e])}for(var Ec=0;Ec<rm.length;Ec++){var Ac=rm[Ec],HS=Ac.toLowerCase(),YS=Ac[0].toUpperCase()+Ac.slice(1);Kn(HS,"on"+YS)}Kn(Iy,"onAnimationEnd");Kn(_y,"onAnimationIteration");Kn(My,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Oy,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GS=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function im(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hb(r,t,void 0,e),e.currentTarget=null}function $y(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;im(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;im(i,l,u),o=c}}}if(Vs)throw e=Hu,Vs=!1,Hu=null,e}function ie(e,t){var n=t[td];n===void 0&&(n=t[td]=new Set);var r=e+"__bubble";n.has(r)||(Ny(t,e,2,!1),n.add(r))}function Lc(e,t,n){var r=0;t&&(r|=4),Ny(n,e,r,t)}var za="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[za]){e[za]=!0,Hv.forEach(function(n){n!=="selectionchange"&&(GS.has(n)||Lc(n,!1,e),Lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[za]||(t[za]=!0,Lc("selectionchange",!1,t))}}function Ny(e,t,n,r){switch(by(t)){case 1:var i=sS;break;case 4:i=lS;break;default:i=Tf}n=i.bind(null,t,n,e),i=void 0,!Uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ic(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=gr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}sy(function(){var u=o,d=Sf(n),f=[];e:{var p=Ry.get(e);if(p!==void 0){var m=Df,x=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":m=jS;break;case"focusin":x="focus",m=Cc;break;case"focusout":x="blur",m=Cc;break;case"beforeblur":case"afterblur":m=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=TS;break;case Iy:case _y:case My:m=hS;break;case Oy:m=DS;break;case"scroll":m=cS;break;case"wheel":m=AS;break;case"copy":case"cut":case"paste":m=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kh}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var h=u,v;h!==null;){v=h;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,g!==null&&(j=Uo(h,g),j!=null&&w.push(Zo(h,j,v)))),S)break;h=h.return}0<w.length&&(p=new m(p,x,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==zu&&(x=n.relatedTarget||n.fromElement)&&(gr(x)||x[vn]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?gr(x):null,x!==null&&(S=Mr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(w=Yh,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Kh,j="onPointerLeave",g="onPointerEnter",h="pointer"),S=m==null?p:Jr(m),v=x==null?p:Jr(x),p=new w(j,h+"leave",m,n,d),p.target=S,p.relatedTarget=v,j=null,gr(d)===u&&(w=new w(g,h+"enter",x,n,d),w.target=v,w.relatedTarget=S,j=w),S=j,m&&x)t:{for(w=m,g=x,h=0,v=w;v;v=Nr(v))h++;for(v=0,j=g;j;j=Nr(j))v++;for(;0<h-v;)w=Nr(w),h--;for(;0<v-h;)g=Nr(g),v--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Nr(w),g=Nr(g)}w=null}else w=null;m!==null&&om(f,p,m,w,!1),x!==null&&S!==null&&om(f,S,x,w,!0)}}e:{if(p=u?Jr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var T=$S;else if(Zh(p))if(Py)T=FS;else{T=BS;var C=NS}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=VS);if(T&&(T=T(e,u))){Ty(f,T,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&$u(p,"number",p.value)}switch(C=u?Jr(u):window,e){case"focusin":(Zh(C)||C.contentEditable==="true")&&(Xr=C,Qu=u,Io=null);break;case"focusout":Io=Qu=Xr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,nm(f,n,d);break;case"selectionchange":if(US)break;case"keydown":case"keyup":nm(f,n,d)}var k;if(Af)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qr?ky(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jy&&n.locale!=="ko"&&(Qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qr&&(k=Sy()):(Ln=d,Pf="value"in Ln?Ln.value:Ln.textContent,Qr=!0)),C=Hs(u,P),0<C.length&&(P=new Gh(P,e,null,n,d),f.push({event:P,listeners:C}),k?P.data=k:(k=Cy(n),k!==null&&(P.data=k)))),(k=IS?_S(e,n):MS(e,n))&&(u=Hs(u,"onBeforeInput"),0<u.length&&(d=new Gh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=k))}$y(f,t)})}function Zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Uo(e,n),o!=null&&r.unshift(Zo(e,o,i)),o=Uo(e,t),o!=null&&r.push(Zo(e,o,i))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function om(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Uo(n,o),c!=null&&a.unshift(Zo(n,c,l))):i||(c=Uo(n,o),c!=null&&a.push(Zo(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function am(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(QS,"")}function Wa(e,t,n){if(t=am(t),am(e)!==t&&n)throw Error(I(425))}function Ys(){}var Zu=null,Ju=null;function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(e){return sm.resolve(null).then(e).catch(JS)}:ed;function JS(e){setTimeout(function(){throw e})}function _c(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Bi,Jo="__reactProps$"+Bi,vn="__reactContainer$"+Bi,td="__reactEvents$"+Bi,qS="__reactListeners$"+Bi,ej="__reactHandles$"+Bi;function gr(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lm(e);e!==null;){if(n=e[qt])return n;e=lm(e)}return t}e=n,n=e.parentNode}return null}function ya(e){return e=e[qt]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Al(e){return e[Jo]||null}var nd=[],qr=-1;function Qn(e){return{current:e}}function ae(e){0>qr||(e.current=nd[qr],nd[qr]=null,qr--)}function ne(e,t){qr++,nd[qr]=e.current,e.current=t}var Hn={},Qe=Qn(Hn),lt=Qn(!1),Dr=Hn;function Si(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Gs(){ae(lt),ae(Qe)}function cm(e,t,n){if(Qe.current!==Hn)throw Error(I(168));ne(Qe,t),ne(lt,n)}function By(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Nb(e)||"Unknown",i));return ge({},n,r)}function Ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,Dr=Qe.current,ne(Qe,e),ne(lt,lt.current),!0}function um(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=By(e,t,Dr),r.__reactInternalMemoizedMergedChildContext=e,ae(lt),ae(Qe),ne(Qe,e)):ae(lt),ne(lt,n)}var un=null,Ll=!1,Mc=!1;function Vy(e){un===null?un=[e]:un.push(e)}function tj(e){Ll=!0,Vy(e)}function Xn(){if(!Mc&&un!==null){Mc=!0;var e=0,t=te;try{var n=un;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,Ll=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),dy(jf,Xn),i}finally{te=t,Mc=!1}}return null}var ei=[],ti=0,Qs=null,Xs=0,kt=[],Ct=0,Er=null,dn=1,fn="";function fr(e,t){ei[ti++]=Xs,ei[ti++]=Qs,Qs=e,Xs=t}function Fy(e,t,n){kt[Ct++]=dn,kt[Ct++]=fn,kt[Ct++]=Er,Er=e;var r=dn;e=fn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-Nt(t)+i|n<<i|r,fn=o+e}else dn=1<<o|n<<i|r,fn=e}function If(e){e.return!==null&&(fr(e,1),Fy(e,1,0))}function _f(e){for(;e===Qs;)Qs=ei[--ti],ei[ti]=null,Xs=ei[--ti],ei[ti]=null;for(;e===Er;)Er=kt[--Ct],kt[Ct]=null,fn=kt[--Ct],kt[Ct]=null,dn=kt[--Ct],kt[Ct]=null}var ht=null,pt=null,ue=!1,$t=null;function zy(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Er!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function rd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function id(e){if(ue){var t=pt;if(t){var n=t;if(!dm(e,t)){if(rd(e))throw Error(I(418));t=$n(n.nextSibling);var r=ht;t&&dm(e,t)?zy(r,n):(e.flags=e.flags&-4097|2,ue=!1,ht=e)}}else{if(rd(e))throw Error(I(418));e.flags=e.flags&-4097|2,ue=!1,ht=e}}}function fm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ua(e){if(e!==ht)return!1;if(!ue)return fm(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qu(e.type,e.memoizedProps)),t&&(t=pt)){if(rd(e))throw Wy(),Error(I(418));for(;t;)zy(e,t),t=$n(t.nextSibling)}if(fm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?$n(e.stateNode.nextSibling):null;return!0}function Wy(){for(var e=pt;e;)e=$n(e.nextSibling)}function ji(){pt=ht=null,ue=!1}function Mf(e){$t===null?$t=[e]:$t.push(e)}var nj=bn.ReactCurrentBatchConfig;function to(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pm(e){var t=e._init;return t(e._payload)}function Uy(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Fn(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,v,j){return h===null||h.tag!==6?(h=Fc(v,g.mode,j),h.return=g,h):(h=i(h,v),h.return=g,h)}function c(g,h,v,j){var T=v.type;return T===Kr?d(g,h,v.props.children,j,v.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pn&&pm(T)===h.type)?(j=i(h,v.props),j.ref=to(g,h,v),j.return=g,j):(j=Ps(v.type,v.key,v.props,null,g.mode,j),j.ref=to(g,h,v),j.return=g,j)}function u(g,h,v,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=zc(v,g.mode,j),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,j,T){return h===null||h.tag!==7?(h=Sr(v,g.mode,j,T),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Fc(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ma:return v=Ps(h.type,h.key,h.props,null,g.mode,v),v.ref=to(g,null,h),v.return=g,v;case Gr:return h=zc(h,g.mode,v),h.return=g,h;case Pn:var j=h._init;return f(g,j(h._payload),v)}if(xo(h)||Xi(h))return h=Sr(h,g.mode,v,null),h.return=g,h;Ha(g,h)}return null}function p(g,h,v,j){var T=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:l(g,h,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===T?c(g,h,v,j):null;case Gr:return v.key===T?u(g,h,v,j):null;case Pn:return T=v._init,p(g,h,T(v._payload),j)}if(xo(v)||Xi(v))return T!==null?null:d(g,h,v,j,null);Ha(g,v)}return null}function m(g,h,v,j,T){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(v)||null,l(h,g,""+j,T);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ma:return g=g.get(j.key===null?v:j.key)||null,c(h,g,j,T);case Gr:return g=g.get(j.key===null?v:j.key)||null,u(h,g,j,T);case Pn:var C=j._init;return m(g,h,v,C(j._payload),T)}if(xo(j)||Xi(j))return g=g.get(v)||null,d(h,g,j,T,null);Ha(h,j)}return null}function x(g,h,v,j){for(var T=null,C=null,k=h,P=h=0,A=null;k!==null&&P<v.length;P++){k.index>P?(A=k,k=null):A=k.sibling;var L=p(g,k,v[P],j);if(L===null){k===null&&(k=A);break}e&&k&&L.alternate===null&&t(g,k),h=o(L,h,P),C===null?T=L:C.sibling=L,C=L,k=A}if(P===v.length)return n(g,k),ue&&fr(g,P),T;if(k===null){for(;P<v.length;P++)k=f(g,v[P],j),k!==null&&(h=o(k,h,P),C===null?T=k:C.sibling=k,C=k);return ue&&fr(g,P),T}for(k=r(g,k);P<v.length;P++)A=m(k,g,P,v[P],j),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?P:A.key),h=o(A,h,P),C===null?T=A:C.sibling=A,C=A);return e&&k.forEach(function(N){return t(g,N)}),ue&&fr(g,P),T}function w(g,h,v,j){var T=Xi(v);if(typeof T!="function")throw Error(I(150));if(v=T.call(v),v==null)throw Error(I(151));for(var C=T=null,k=h,P=h=0,A=null,L=v.next();k!==null&&!L.done;P++,L=v.next()){k.index>P?(A=k,k=null):A=k.sibling;var N=p(g,k,L.value,j);if(N===null){k===null&&(k=A);break}e&&k&&N.alternate===null&&t(g,k),h=o(N,h,P),C===null?T=N:C.sibling=N,C=N,k=A}if(L.done)return n(g,k),ue&&fr(g,P),T;if(k===null){for(;!L.done;P++,L=v.next())L=f(g,L.value,j),L!==null&&(h=o(L,h,P),C===null?T=L:C.sibling=L,C=L);return ue&&fr(g,P),T}for(k=r(g,k);!L.done;P++,L=v.next())L=m(k,g,P,L.value,j),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?P:L.key),h=o(L,h,P),C===null?T=L:C.sibling=L,C=L);return e&&k.forEach(function(F){return t(g,F)}),ue&&fr(g,P),T}function S(g,h,v,j){if(typeof v=="object"&&v!==null&&v.type===Kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var T=v.key,C=h;C!==null;){if(C.key===T){if(T=v.type,T===Kr){if(C.tag===7){n(g,C.sibling),h=i(C,v.props.children),h.return=g,g=h;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pn&&pm(T)===C.type){n(g,C.sibling),h=i(C,v.props),h.ref=to(g,C,v),h.return=g,g=h;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===Kr?(h=Sr(v.props.children,g.mode,j,v.key),h.return=g,g=h):(j=Ps(v.type,v.key,v.props,null,g.mode,j),j.ref=to(g,h,v),j.return=g,g=j)}return a(g);case Gr:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=zc(v,g.mode,j),h.return=g,g=h}return a(g);case Pn:return C=v._init,S(g,h,C(v._payload),j)}if(xo(v))return x(g,h,v,j);if(Xi(v))return w(g,h,v,j);Ha(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=Fc(v,g.mode,j),h.return=g,g=h),a(g)):n(g,h)}return S}var ki=Uy(!0),Hy=Uy(!1),Zs=Qn(null),Js=null,ni=null,Of=null;function Rf(){Of=ni=Js=null}function $f(e){var t=Zs.current;ae(Zs),e._currentValue=t}function od(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xi(e,t){Js=e,Of=ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Of!==e)if(e={context:e,memoizedValue:t,next:null},ni===null){if(Js===null)throw Error(I(308));ni=e,Js.dependencies={lanes:0,firstContext:e}}else ni=ni.next=e;return t}var vr=null;function Nf(e){vr===null?vr=[e]:vr.push(e)}function Yy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nf(t)):(n.next=i.next,i.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yn(e,n)}return i=r.interleaved,i===null?(t.next=t,Nf(r)):(t.next=i.next,i.next=t),r.interleaved=t,yn(e,n)}function bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kf(e,n)}}function hm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qs(e,t,n,r){var i=e.updateQueue;Dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,l=o;do{var p=l.lane,m=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(p=t,m=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(m,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(m,f,p):x,p==null)break e;f=ge({},f,p);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Lr|=a,e.lanes=a,e.memoizedState=f}}function mm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var xa={},rn=Qn(xa),qo=Qn(xa),ea=Qn(xa);function yr(e){if(e===xa)throw Error(I(174));return e}function Vf(e,t){switch(ne(ea,t),ne(qo,e),ne(rn,xa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bu(t,e)}ae(rn),ne(rn,t)}function Ci(){ae(rn),ae(qo),ae(ea)}function Ky(e){yr(ea.current);var t=yr(rn.current),n=Bu(t,e.type);t!==n&&(ne(qo,e),ne(rn,n))}function Ff(e){qo.current===e&&(ae(rn),ae(qo))}var pe=Qn(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oc=[];function zf(){for(var e=0;e<Oc.length;e++)Oc[e]._workInProgressVersionPrimary=null;Oc.length=0}var Ss=bn.ReactCurrentDispatcher,Rc=bn.ReactCurrentBatchConfig,Ar=0,me=null,Ae=null,_e=null,tl=!1,_o=!1,ta=0,rj=0;function We(){throw Error(I(321))}function Wf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Uf(e,t,n,r,i,o){if(Ar=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?sj:lj,e=n(r,i),_o){o=0;do{if(_o=!1,ta=0,25<=o)throw Error(I(301));o+=1,_e=Ae=null,t.updateQueue=null,Ss.current=cj,e=n(r,i)}while(_o)}if(Ss.current=nl,t=Ae!==null&&Ae.next!==null,Ar=0,_e=Ae=me=null,tl=!1,t)throw Error(I(300));return e}function Hf(){var e=ta!==0;return ta=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?me.memoizedState=_e=e:_e=_e.next=e,_e}function Et(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=_e===null?me.memoizedState:_e.next;if(t!==null)_e=t,Ae=e;else{if(e===null)throw Error(I(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},_e===null?me.memoizedState=_e=e:_e=_e.next=e}return _e}function na(e,t){return typeof t=="function"?t(e):t}function $c(e){var t=Et(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((Ar&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,me.lanes|=d,Lr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,zt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Lr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nc(e){var t=Et(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);zt(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qy(){}function Xy(e,t){var n=me,r=Et(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,st=!0),r=r.queue,Yf(qy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ra(9,Jy.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(I(349));Ar&30||Zy(n,t,i)}return i}function Zy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jy(e,t,n,r){t.value=n,t.getSnapshot=r,ex(t)&&tx(e)}function qy(e,t,n){return n(function(){ex(t)&&tx(e)})}function ex(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function tx(e){var t=yn(e,1);t!==null&&Bt(t,e,1,-1)}function gm(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t.queue=e,e=e.dispatch=aj.bind(null,me,e),[t.memoizedState,e]}function ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nx(){return Et().memoizedState}function js(e,t,n,r){var i=Zt();me.flags|=e,i.memoizedState=ra(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&Wf(r,a.deps)){i.memoizedState=ra(t,n,o,r);return}}me.flags|=e,i.memoizedState=ra(1|t,n,o,r)}function vm(e,t){return js(8390656,8,e,t)}function Yf(e,t){return Il(2048,8,e,t)}function rx(e,t){return Il(4,2,e,t)}function ix(e,t){return Il(4,4,e,t)}function ox(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ax(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,ox.bind(null,t,e),n)}function Gf(){}function sx(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lx(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cx(e,t,n){return Ar&21?(zt(n,t)||(n=hy(),me.lanes|=n,Lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function ij(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Rc.transition;Rc.transition={};try{e(!1),t()}finally{te=n,Rc.transition=r}}function ux(){return Et().memoizedState}function oj(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dx(e))fx(t,n);else if(n=Yy(e,t,n,r),n!==null){var i=Je();Bt(n,e,r,i),px(n,t,r)}}function aj(e,t,n){var r=Vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dx(e))fx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,a)){var c=t.interleaved;c===null?(i.next=i,Nf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Yy(e,t,i,r),n!==null&&(i=Je(),Bt(n,e,r,i),px(n,t,r))}}function dx(e){var t=e.alternate;return e===me||t!==null&&t===me}function fx(e,t){_o=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function px(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kf(e,n)}}var nl={readContext:Dt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},sj={readContext:Dt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:vm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,ox.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oj.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:gm,useDebugValue:Gf,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=gm(!1),t=e[0];return e=ij.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Zt();if(ue){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Oe===null)throw Error(I(349));Ar&30||Zy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vm(qy.bind(null,r,o,e),[e]),r.flags|=2048,ra(9,Jy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Oe.identifierPrefix;if(ue){var n=fn,r=dn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ta++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lj={readContext:Dt,useCallback:sx,useContext:Dt,useEffect:Yf,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:ix,useMemo:lx,useReducer:$c,useRef:nx,useState:function(){return $c(na)},useDebugValue:Gf,useDeferredValue:function(e){var t=Et();return cx(t,Ae.memoizedState,e)},useTransition:function(){var e=$c(na)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Xy,useId:ux,unstable_isNewReconciler:!1},cj={readContext:Dt,useCallback:sx,useContext:Dt,useEffect:Yf,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:ix,useMemo:lx,useReducer:Nc,useRef:nx,useState:function(){return Nc(na)},useDebugValue:Gf,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:cx(t,Ae.memoizedState,e)},useTransition:function(){var e=Nc(na)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Xy,useId:ux,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ad(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Vn(e),o=pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(Bt(t,e,i,r),bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Vn(e),o=pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(Bt(t,e,i,r),bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Vn(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(Bt(t,e,r,n),bs(t,e,r))}};function ym(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,o):!0}function hx(e,t,n){var r=!1,i=Hn,o=t.contextType;return typeof o=="object"&&o!==null?o=Dt(o):(i=ct(t)?Dr:Qe.current,r=t.contextTypes,o=(r=r!=null)?Si(e,i):Hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function sd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Dt(o):(o=ct(t)?Dr:Qe.current,i.context=Si(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ad(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_l.enqueueReplaceState(i,i.state,null),qs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ti(e,t){try{var n="",r=t;do n+=$b(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ld(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uj=typeof WeakMap=="function"?WeakMap:Map;function mx(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,yd=r),ld(e,t)},n}function gx(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ld(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ld(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kj.bind(null,e,t,n),t.then(e,e))}function bm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var dj=bn.ReactCurrentOwner,st=!1;function Ze(e,t,n,r){t.child=e===null?Hy(t,null,n,r):ki(t,e.child,n,r)}function jm(e,t,n,r,i){n=n.render;var o=t.ref;return xi(t,i),r=Uf(e,t,n,r,o,i),n=Hf(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(ue&&n&&If(t),t.flags|=1,Ze(e,t,r,i),t.child)}function km(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!tp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vx(e,t,o,r,i)):(e=Ps(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(a,r)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=Fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function vx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qo(o,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,xn(e,t,i)}return cd(e,t,n,r,i)}function yx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ii,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(ii,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(ii,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(ii,ft),ft|=r;return Ze(e,t,i,n),t.child}function xx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cd(e,t,n,r,i){var o=ct(n)?Dr:Qe.current;return o=Si(t,o),xi(t,i),n=Uf(e,t,n,r,o,i),r=Hf(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(ue&&r&&If(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Cm(e,t,n,r,i){if(ct(n)){var o=!0;Ks(t)}else o=!1;if(xi(t,i),t.stateNode===null)ks(e,t),hx(t,n,r),sd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ct(n)?Dr:Qe.current,u=Si(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&xm(t,a,r,u),Dn=!1;var p=t.memoizedState;a.state=p,qs(t,r,a,i),c=t.memoizedState,l!==r||p!==c||lt.current||Dn?(typeof d=="function"&&(ad(t,n,d,r),c=t.memoizedState),(l=Dn||ym(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Gy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Dt(c):(c=ct(n)?Dr:Qe.current,c=Si(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&xm(t,a,r,c),Dn=!1,p=t.memoizedState,a.state=p,qs(t,r,a,i);var x=t.memoizedState;l!==f||p!==x||lt.current||Dn?(typeof m=="function"&&(ad(t,n,m,r),x=t.memoizedState),(u=Dn||ym(t,n,u,r,p,x,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ud(e,t,n,r,o,i)}function ud(e,t,n,r,i,o){xx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&um(t,n,!1),xn(e,t,o);r=t.stateNode,dj.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ki(t,e.child,null,o),t.child=ki(t,null,l,o)):Ze(e,t,l,o),t.memoizedState=r.state,i&&um(t,n,!0),t.child}function wx(e){var t=e.stateNode;t.pendingContext?cm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cm(e,t.context,!1),Vf(e,t.containerInfo)}function Tm(e,t,n,r,i){return ji(),Mf(i),t.flags|=256,Ze(e,t,n,r),t.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(e){return{baseLanes:e,cachePool:null,transitions:null}}function bx(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(pe,i&1),e===null)return id(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Rl(a,r,0,null),e=Sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fd(n),t.memoizedState=dd,e):Kf(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Fn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Fn(l,o):(o=Sr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?fd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=dd,r}return o=e.child,e=o.sibling,r=Fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kf(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ya(e,t,n,r){return r!==null&&Mf(r),ki(t,e.child,null,n),e=Kf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Bc(Error(I(422))),Ya(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Rl({mode:"visible",children:r.children},i,0,null),o=Sr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ki(t,e.child,null,a),t.child.memoizedState=fd(a),t.memoizedState=dd,o);if(!(t.mode&1))return Ya(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(I(419)),r=Bc(o,r,void 0),Ya(e,t,a,r)}if(l=(a&e.childLanes)!==0,st||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yn(e,i),Bt(r,e,i,-1))}return ep(),r=Bc(Error(I(421))),Ya(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=$n(i.nextSibling),ht=t,ue=!0,$t=null,e!==null&&(kt[Ct++]=dn,kt[Ct++]=fn,kt[Ct++]=Er,dn=e.id,fn=e.overflow,Er=t),t=Kf(t,r.children),t.flags|=4096,t)}function Pm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),od(e.return,t,n)}function Vc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,n,t);else if(e.tag===19)Pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&el(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vc(t,!0,n,null,o);break;case"together":Vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pj(e,t,n){switch(t.tag){case 3:wx(t),ji();break;case 5:Ky(t);break;case 1:ct(t.type)&&Ks(t);break;case 4:Vf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?bx(e,t,n):(ne(pe,pe.current&1),e=xn(e,t,n),e!==null?e.sibling:null);ne(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,yx(e,t,n)}return xn(e,t,n)}var jx,pd,kx,Cx;jx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};kx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yr(rn.current);var o=null;switch(n){case"input":i=Ou(e,i),r=Ou(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Nu(e,i),r=Nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ys)}Vu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cx=function(e,t,n,r){n!==r&&(t.flags|=4)};function no(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hj(e,t,n){var r=t.pendingProps;switch(_f(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return ct(t.type)&&Gs(),Ue(t),null;case 3:return r=t.stateNode,Ci(),ae(lt),ae(Qe),zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(bd($t),$t=null))),pd(e,t),Ue(t),null;case 5:Ff(t);var i=yr(ea.current);if(n=t.type,e!==null&&t.stateNode!=null)kx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ue(t),null}if(e=yr(rn.current),Ua(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qt]=t,r[Jo]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<bo.length;i++)ie(bo[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Rh(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":Nh(r,o),ie("invalid",r)}Vu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Wa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Wa(r.textContent,l,e),i=["children",""+l]):zo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":Oa(r),$h(r,o,!0);break;case"textarea":Oa(r),Bh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ys)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[Jo]=r,jx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fu(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)ie(bo[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Rh(e,r),i=Ou(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Nh(e,r),i=Nu(e,r),ie("invalid",e);break;default:i=r}Vu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?ny(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ey(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wo(e,c):typeof c=="number"&&Wo(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ie("scroll",e):c!=null&&yf(e,o,c,a))}switch(n){case"input":Oa(e),$h(e,r,!1);break;case"textarea":Oa(e),Bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mi(e,!!r.multiple,o,!1):r.defaultValue!=null&&mi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Cx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=yr(ea.current),yr(rn.current),Ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Wa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ae(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&pt!==null&&t.mode&1&&!(t.flags&128))Wy(),ji(),t.flags|=98560,o=!1;else if(o=Ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[qt]=t}else ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else $t!==null&&(bd($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Ie===0&&(Ie=3):ep())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Ci(),pd(e,t),e===null&&Xo(t.stateNode.containerInfo),Ue(t),null;case 10:return $f(t.type._context),Ue(t),null;case 17:return ct(t.type)&&Gs(),Ue(t),null;case 19:if(ae(pe),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)no(o,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=el(e),a!==null){for(t.flags|=128,no(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Pi&&(t.flags|=128,r=!0,no(o,!1),t.lanes=4194304)}else{if(!r)if(e=el(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),no(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Ue(t),null}else 2*be()-o.renderingStartTime>Pi&&n!==1073741824&&(t.flags|=128,r=!0,no(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=pe.current,ne(pe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return qf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function mj(e,t){switch(_f(t),t.tag){case 1:return ct(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),ae(lt),ae(Qe),zf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ff(t),null;case 13:if(ae(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(pe),null;case 4:return Ci(),null;case 10:return $f(t.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var Ga=!1,Ye=!1,gj=typeof WeakSet=="function"?WeakSet:Set,B=null;function ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function hd(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Dm=!1;function vj(e,t){if(Zu=Ws,e=Ay(),Lf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++d===r&&(c=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:e,selectionRange:n},Ws=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ot(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(j){xe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return x=Dm,Dm=!1,x}function Mo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hd(t,n,o)}i=i.next}while(i!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function md(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tx(e){var t=e.alternate;t!==null&&(e.alternate=null,Tx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Jo],delete t[td],delete t[qS],delete t[ej])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Px(e){return e.tag===5||e.tag===3||e.tag===4}function Em(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ys));else if(r!==4&&(e=e.child,e!==null))for(gd(e,t,n),e=e.sibling;e!==null;)gd(e,t,n),e=e.sibling}function vd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vd(e,t,n),e=e.sibling;e!==null;)vd(e,t,n),e=e.sibling}var Ne=null,Rt=!1;function jn(e,t,n){for(n=n.child;n!==null;)Dx(e,t,n),n=n.sibling}function Dx(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:Ye||ri(n,t);case 6:var r=Ne,i=Rt;Ne=null,jn(e,t,n),Ne=r,Rt=i,Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?_c(e.parentNode,n):e.nodeType===1&&_c(e,n),Go(e)):_c(Ne,n.stateNode));break;case 4:r=Ne,i=Rt,Ne=n.stateNode.containerInfo,Rt=!0,jn(e,t,n),Ne=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&hd(n,t,a),i=i.next}while(i!==r)}jn(e,t,n);break;case 1:if(!Ye&&(ri(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,jn(e,t,n),Ye=r):jn(e,t,n);break;default:jn(e,t,n)}}function Am(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gj),t.forEach(function(r){var i=Tj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,Rt=!1;break e;case 3:Ne=l.stateNode.containerInfo,Rt=!0;break e;case 4:Ne=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Ne===null)throw Error(I(160));Dx(o,a,i),Ne=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ex(t,e),t=t.sibling}function Ex(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Ht(e),r&4){try{Mo(3,e,e.return),Ml(3,e)}catch(w){xe(e,e.return,w)}try{Mo(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:_t(t,e),Ht(e),r&512&&n!==null&&ri(n,n.return);break;case 5:if(_t(t,e),Ht(e),r&512&&n!==null&&ri(n,n.return),e.flags&32){var i=e.stateNode;try{Wo(i,"")}catch(w){xe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Zv(i,o),Fu(l,a);var u=Fu(l,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?ny(i,f):d==="dangerouslySetInnerHTML"?ey(i,f):d==="children"?Wo(i,f):yf(i,d,f,u)}switch(l){case"input":Ru(i,o);break;case"textarea":Jv(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?mi(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?mi(i,!!o.multiple,o.defaultValue,!0):mi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Jo]=o}catch(w){xe(e,e.return,w)}}break;case 6:if(_t(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){xe(e,e.return,w)}}break;case 3:if(_t(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:_t(t,e),Ht(e);break;case 13:_t(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zf=be())),r&4&&Am(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,_t(t,e),Ye=u):_t(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(f=B=d;B!==null;){switch(p=B,m=p.child,p.tag){case 0:case 11:case 14:case 15:Mo(4,p,p.return);break;case 1:ri(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:ri(p,p.return);break;case 22:if(p.memoizedState!==null){Im(f);continue}}m!==null?(m.return=p,B=m):Im(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ty("display",a))}catch(w){xe(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){xe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_t(t,e),Ht(e),r&4&&Am(e);break;case 21:break;default:_t(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Px(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wo(i,""),r.flags&=-33);var o=Em(e);vd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Em(e);gd(e,l,a);break;default:throw Error(I(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yj(e,t,n){B=e,Ax(e)}function Ax(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ga;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ye;l=Ga;var u=Ye;if(Ga=a,(Ye=c)&&!u)for(B=i;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?_m(i):c!==null?(c.return=a,B=c):_m(i);for(;o!==null;)B=o,Ax(o),o=o.sibling;B=i,Ga=l,Ye=u}Lm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):Lm(e)}}function Lm(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mm(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mm(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ye||t.flags&512&&md(t)}catch(p){xe(t,t.return,p)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Im(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function _m(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xe(t,i,c)}}var o=t.return;try{md(t)}catch(c){xe(t,o,c)}break;case 5:var a=t.return;try{md(t)}catch(c){xe(t,a,c)}}}catch(c){xe(t,t.return,c)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var xj=Math.ceil,rl=bn.ReactCurrentDispatcher,Qf=bn.ReactCurrentOwner,Pt=bn.ReactCurrentBatchConfig,q=0,Oe=null,Ce=null,Fe=0,ft=0,ii=Qn(0),Ie=0,ia=null,Lr=0,Ol=0,Xf=0,Oo=null,at=null,Zf=0,Pi=1/0,ln=null,il=!1,yd=null,Bn=null,Ka=!1,In=null,ol=0,Ro=0,xd=null,Cs=-1,Ts=0;function Je(){return q&6?be():Cs!==-1?Cs:Cs=be()}function Vn(e){return e.mode&1?q&2&&Fe!==0?Fe&-Fe:nj.transition!==null?(Ts===0&&(Ts=hy()),Ts):(e=te,e!==0||(e=window.event,e=e===void 0?16:by(e.type)),e):1}function Bt(e,t,n,r){if(50<Ro)throw Ro=0,xd=null,Error(I(185));ga(e,n,r),(!(q&2)||e!==Oe)&&(e===Oe&&(!(q&2)&&(Ol|=n),Ie===4&&An(e,Fe)),ut(e,r),n===1&&q===0&&!(t.mode&1)&&(Pi=be()+500,Ll&&Xn()))}function ut(e,t){var n=e.callbackNode;nS(e,t);var r=zs(e,e===Oe?Fe:0);if(r===0)n!==null&&zh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zh(n),t===1)e.tag===0?tj(Mm.bind(null,e)):Vy(Mm.bind(null,e)),ZS(function(){!(q&6)&&Xn()}),n=null;else{switch(my(r)){case 1:n=jf;break;case 4:n=fy;break;case 16:n=Fs;break;case 536870912:n=py;break;default:n=Fs}n=Nx(n,Lx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lx(e,t){if(Cs=-1,Ts=0,q&6)throw Error(I(327));var n=e.callbackNode;if(wi()&&e.callbackNode!==n)return null;var r=zs(e,e===Oe?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var i=q;q|=2;var o=_x();(Oe!==e||Fe!==t)&&(ln=null,Pi=be()+500,br(e,t));do try{Sj();break}catch(l){Ix(e,l)}while(!0);Rf(),rl.current=o,q=i,Ce!==null?t=0:(Oe=null,Fe=0,t=Ie)}if(t!==0){if(t===2&&(i=Yu(e),i!==0&&(r=i,t=wd(e,i))),t===1)throw n=ia,br(e,0),An(e,r),ut(e,be()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!wj(i)&&(t=al(e,r),t===2&&(o=Yu(e),o!==0&&(r=o,t=wd(e,o))),t===1))throw n=ia,br(e,0),An(e,r),ut(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:pr(e,at,ln);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Zf+500-be(),10<t)){if(zs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ed(pr.bind(null,e,at,ln),t);break}pr(e,at,ln);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xj(r/1960))-r,10<r){e.timeoutHandle=ed(pr.bind(null,e,at,ln),r);break}pr(e,at,ln);break;case 5:pr(e,at,ln);break;default:throw Error(I(329))}}}return ut(e,be()),e.callbackNode===n?Lx.bind(null,e):null}function wd(e,t){var n=Oo;return e.current.memoizedState.isDehydrated&&(br(e,t).flags|=256),e=al(e,t),e!==2&&(t=at,at=n,t!==null&&bd(t)),e}function bd(e){at===null?at=e:at.push.apply(at,e)}function wj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Xf,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Mm(e){if(q&6)throw Error(I(327));wi();var t=zs(e,0);if(!(t&1))return ut(e,be()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=Yu(e);r!==0&&(t=r,n=wd(e,r))}if(n===1)throw n=ia,br(e,0),An(e,t),ut(e,be()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,at,ln),ut(e,be()),null}function Jf(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Pi=be()+500,Ll&&Xn())}}function Ir(e){In!==null&&In.tag===0&&!(q&6)&&wi();var t=q;q|=1;var n=Pt.transition,r=te;try{if(Pt.transition=null,te=1,e)return e()}finally{te=r,Pt.transition=n,q=t,!(q&6)&&Xn()}}function qf(){ft=ii.current,ae(ii)}function br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,XS(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(_f(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:Ci(),ae(lt),ae(Qe),zf();break;case 5:Ff(r);break;case 4:Ci();break;case 13:ae(pe);break;case 19:ae(pe);break;case 10:$f(r.type._context);break;case 22:case 23:qf()}n=n.return}if(Oe=e,Ce=e=Fn(e.current,null),Fe=ft=t,Ie=0,ia=null,Xf=Ol=Lr=0,at=Oo=null,vr!==null){for(t=0;t<vr.length;t++)if(n=vr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}vr=null}return e}function Ix(e,t){do{var n=Ce;try{if(Rf(),Ss.current=nl,tl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(Ar=0,_e=Ae=me=null,_o=!1,ta=0,Qf.current=null,n===null||n.return===null){Ie=1,ia=t,Ce=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Fe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=bm(a);if(m!==null){m.flags&=-257,Sm(m,a,l,o,t),m.mode&1&&wm(o,u,t),t=m,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){wm(o,u,t),ep();break e}c=Error(I(426))}}else if(ue&&l.mode&1){var S=bm(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Sm(S,a,l,o,t),Mf(Ti(c,l));break e}}o=c=Ti(c,l),Ie!==4&&(Ie=2),Oo===null?Oo=[o]:Oo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=mx(o,c,t);hm(o,g);break e;case 1:l=c;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bn===null||!Bn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=gx(o,l,t);hm(o,j);break e}}o=o.return}while(o!==null)}Ox(n)}catch(T){t=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function _x(){var e=rl.current;return rl.current=nl,e===null?nl:e}function ep(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Oe===null||!(Lr&268435455)&&!(Ol&268435455)||An(Oe,Fe)}function al(e,t){var n=q;q|=2;var r=_x();(Oe!==e||Fe!==t)&&(ln=null,br(e,t));do try{bj();break}catch(i){Ix(e,i)}while(!0);if(Rf(),q=n,rl.current=r,Ce!==null)throw Error(I(261));return Oe=null,Fe=0,Ie}function bj(){for(;Ce!==null;)Mx(Ce)}function Sj(){for(;Ce!==null&&!Gb();)Mx(Ce)}function Mx(e){var t=$x(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Ox(e):Ce=t,Qf.current=null}function Ox(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mj(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ce=null;return}}else if(n=hj(n,t,ft),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Ie===0&&(Ie=5)}function pr(e,t,n){var r=te,i=Pt.transition;try{Pt.transition=null,te=1,jj(e,t,n,r)}finally{Pt.transition=i,te=r}return null}function jj(e,t,n,r){do wi();while(In!==null);if(q&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rS(e,o),e===Oe&&(Ce=Oe=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,Nx(Fs,function(){return wi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var a=te;te=1;var l=q;q|=4,Qf.current=null,vj(e,n),Ex(n,e),WS(Ju),Ws=!!Zu,Ju=Zu=null,e.current=n,yj(n),Kb(),q=l,te=a,Pt.transition=o}else e.current=n;if(Ka&&(Ka=!1,In=e,ol=i),o=e.pendingLanes,o===0&&(Bn=null),Zb(n.stateNode),ut(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,e=yd,yd=null,e;return ol&1&&e.tag!==0&&wi(),o=e.pendingLanes,o&1?e===xd?Ro++:(Ro=0,xd=e):Ro=0,Xn(),null}function wi(){if(In!==null){var e=my(ol),t=Pt.transition,n=te;try{if(Pt.transition=null,te=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,ol=0,q&6)throw Error(I(331));var i=q;for(q|=4,B=e.current;B!==null;){var o=B,a=o.child;if(B.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Mo(8,d,o)}var f=d.child;if(f!==null)f.return=d,B=f;else for(;B!==null;){d=B;var p=d.sibling,m=d.return;if(Tx(d),d===u){B=null;break}if(p!==null){p.return=m,B=p;break}B=m}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}B=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,B=a;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,B=g;break e}B=o.return}}var h=e.current;for(B=h;B!==null;){a=B;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,B=v;else e:for(a=h;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ml(9,l)}}catch(T){xe(l,l.return,T)}if(l===a){B=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,B=j;break e}B=l.return}}if(q=i,Xn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{te=n,Pt.transition=t}}return!1}function Om(e,t,n){t=Ti(n,t),t=mx(e,t,1),e=Nn(e,t,1),t=Je(),e!==null&&(ga(e,1,t),ut(e,t))}function xe(e,t,n){if(e.tag===3)Om(e,e,n);else for(;t!==null;){if(t.tag===3){Om(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Ti(n,e),e=gx(t,e,1),t=Nn(t,e,1),e=Je(),t!==null&&(ga(t,1,e),ut(t,e));break}}t=t.return}}function kj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Fe&n)===n&&(Ie===4||Ie===3&&(Fe&130023424)===Fe&&500>be()-Zf?br(e,0):Xf|=n),ut(e,t)}function Rx(e,t){t===0&&(e.mode&1?(t=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):t=1);var n=Je();e=yn(e,t),e!==null&&(ga(e,t,n),ut(e,n))}function Cj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rx(e,n)}function Tj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Rx(e,n)}var $x;$x=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,pj(e,t,n);st=!!(e.flags&131072)}else st=!1,ue&&t.flags&1048576&&Fy(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ks(e,t),e=t.pendingProps;var i=Si(t,Qe.current);xi(t,n),i=Uf(null,t,r,e,i,n);var o=Hf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,Ks(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bf(t),i.updater=_l,t.stateNode=i,i._reactInternals=t,sd(t,r,e,n),t=ud(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&If(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ks(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Dj(r),e=Ot(r,e),i){case 0:t=cd(null,t,r,e,n);break e;case 1:t=Cm(null,t,r,e,n);break e;case 11:t=jm(null,t,r,e,n);break e;case 14:t=km(null,t,r,Ot(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),cd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Cm(e,t,r,i,n);case 3:e:{if(wx(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gy(e,t),qs(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ti(Error(I(423)),t),t=Tm(e,t,r,n,i);break e}else if(r!==i){i=Ti(Error(I(424)),t),t=Tm(e,t,r,n,i);break e}else for(pt=$n(t.stateNode.containerInfo.firstChild),ht=t,ue=!0,$t=null,n=Hy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){t=xn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Ky(t),e===null&&id(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,qu(r,i)?a=null:o!==null&&qu(r,o)&&(t.flags|=32),xx(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&id(t),null;case 13:return bx(e,t,n);case 4:return Vf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ki(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),jm(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(Zs,r._currentValue),r._currentValue=a,o!==null)if(zt(o.value,a)){if(o.children===i.children&&!lt.current){t=xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=pn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),od(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(I(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),od(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xi(t,n),i=Dt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),km(e,t,r,i,n);case 15:return vx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ks(e,t),t.tag=1,ct(r)?(e=!0,Ks(t)):e=!1,xi(t,n),hx(t,r,i),sd(t,r,i,n),ud(null,t,r,!0,e,n);case 19:return Sx(e,t,n);case 22:return yx(e,t,n)}throw Error(I(156,t.tag))};function Nx(e,t){return dy(e,t)}function Pj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Pj(e,t,n,r)}function tp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dj(e){if(typeof e=="function")return tp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wf)return 11;if(e===bf)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")tp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kr:return Sr(n.children,i,o,t);case xf:a=8,i|=8;break;case Lu:return e=Tt(12,n,t,i|2),e.elementType=Lu,e.lanes=o,e;case Iu:return e=Tt(13,n,t,i),e.elementType=Iu,e.lanes=o,e;case _u:return e=Tt(19,n,t,i),e.elementType=_u,e.lanes=o,e;case Kv:return Rl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yv:a=10;break e;case Gv:a=9;break e;case wf:a=11;break e;case bf:a=14;break e;case Pn:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Sr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=Kv,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function zc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ej(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function np(e,t,n,r,i,o,a,l,c){return e=new Ej(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(o),e}function Aj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bx(e){if(!e)return Hn;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(ct(n))return By(e,n,t)}return t}function Vx(e,t,n,r,i,o,a,l,c){return e=np(n,r,!0,e,i,o,a,l,c),e.context=Bx(null),n=e.current,r=Je(),i=Vn(n),o=pn(r,i),o.callback=t??null,Nn(n,o,i),e.current.lanes=i,ga(e,i,r),ut(e,r),e}function $l(e,t,n,r){var i=t.current,o=Je(),a=Vn(i);return n=Bx(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,a),e!==null&&(Bt(e,i,a,o),bs(e,i,a)),a}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rp(e,t){Rm(e,t),(e=e.alternate)&&Rm(e,t)}function Lj(){return null}var Fx=typeof reportError=="function"?reportError:function(e){console.error(e)};function ip(e){this._internalRoot=e}Nl.prototype.render=ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));$l(e,t,null,null)};Nl.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){$l(null,e,null,null)}),t[vn]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&wy(e)}};function op(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $m(){}function Ij(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=sl(a);o.call(u)}}var a=Vx(t,r,e,0,null,!1,!1,"",$m);return e._reactRootContainer=a,e[vn]=a.current,Xo(e.nodeType===8?e.parentNode:e),Ir(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=sl(c);l.call(u)}}var c=np(e,0,!1,null,null,!1,!1,"",$m);return e._reactRootContainer=c,e[vn]=c.current,Xo(e.nodeType===8?e.parentNode:e),Ir(function(){$l(t,c,n,r)}),c}function Vl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=sl(a);l.call(c)}}$l(t,a,e,i)}else a=Ij(n,t,e,i,r);return sl(a)}gy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wo(t.pendingLanes);n!==0&&(kf(t,n|1),ut(t,be()),!(q&6)&&(Pi=be()+500,Xn()))}break;case 13:Ir(function(){var r=yn(e,1);if(r!==null){var i=Je();Bt(r,e,1,i)}}),rp(e,1)}};Cf=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=Je();Bt(t,e,134217728,n)}rp(e,134217728)}};vy=function(e){if(e.tag===13){var t=Vn(e),n=yn(e,t);if(n!==null){var r=Je();Bt(n,e,t,r)}rp(e,t)}};yy=function(){return te};xy=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Wu=function(e,t,n){switch(t){case"input":if(Ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Al(r);if(!i)throw Error(I(90));Xv(r),Ru(r,i)}}}break;case"textarea":Jv(e,n);break;case"select":t=n.value,t!=null&&mi(e,!!n.multiple,t,!1)}};oy=Jf;ay=Ir;var _j={usingClientEntryPoint:!1,Events:[ya,Jr,Al,ry,iy,Jf]},ro={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mj={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cy(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Lj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Tl=Qa.inject(Mj),nn=Qa}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_j;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(t))throw Error(I(200));return Aj(e,t,null,n)};yt.createRoot=function(e,t){if(!op(e))throw Error(I(299));var n=!1,r="",i=Fx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=np(e,1,!1,null,null,n,!1,r,i),e[vn]=t.current,Xo(e.nodeType===8?e.parentNode:e),new ip(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=cy(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return Ir(e)};yt.hydrate=function(e,t,n){if(!Bl(t))throw Error(I(200));return Vl(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!op(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Vx(t,null,e,1,n??null,i,!1,o,a),e[vn]=t.current,Xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Nl(t)};yt.render=function(e,t,n){if(!Bl(t))throw Error(I(200));return Vl(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(I(40));return e._reactRootContainer?(Ir(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};yt.unstable_batchedUpdates=Jf;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Vl(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx)}catch(e){console.error(e)}}zx(),zv.exports=yt;var Wx=zv.exports,Ux,Nm=Wx;Ux=Nm.createRoot,Nm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oa.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Bm="popstate";function Oj(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Sd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ll(i)}return $j(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ap(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rj(){return Math.random().toString(36).substr(2,8)}function Vm(e,t){return{usr:e.state,key:e.key,idx:t}}function Sd(e,t,n,r){return n===void 0&&(n=null),oa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vi(t):t,{state:n,key:t&&t.key||r||Rj()})}function ll(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $j(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=_n.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(oa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=_n.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:l,location:w.location,delta:g})}function p(S,g){l=_n.Push;let h=Sd(w.location,S,g);u=d()+1;let v=Vm(h,u),j=w.createHref(h);try{a.pushState(v,"",j)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(j)}o&&c&&c({action:l,location:w.location,delta:1})}function m(S,g){l=_n.Replace;let h=Sd(w.location,S,g);u=d();let v=Vm(h,u),j=w.createHref(h);a.replaceState(v,"",j),o&&c&&c({action:l,location:w.location,delta:0})}function x(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:ll(S);return h=h.replace(/ $/,"%20"),Se(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return l},get location(){return e(i,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,f),c=S,()=>{i.removeEventListener(Bm,f),c=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let g=x(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(S){return a.go(S)}};return w}var Fm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fm||(Fm={}));function Nj(e,t,n){return n===void 0&&(n="/"),Bj(e,t,n)}function Bj(e,t,n,r){let i=typeof t=="string"?Vi(t):t,o=sp(i.pathname||"/",n);if(o==null)return null;let a=Hx(e);Vj(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Jj(o);l=Qj(a[c],u)}return l}function Hx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Se(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=zn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hx(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Gj(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Yx(o.path))i(o,a,c)}),t}function Yx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Yx(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Vj(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kj(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fj=/^:[\w-]+$/,zj=3,Wj=2,Uj=1,Hj=10,Yj=-2,zm=e=>e==="*";function Gj(e,t){let n=e.split("/"),r=n.length;return n.some(zm)&&(r+=Yj),t&&(r+=Wj),n.filter(i=>!zm(i)).reduce((i,o)=>i+(Fj.test(o)?zj:o===""?Uj:Hj),r)}function Kj(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Qj(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Xj({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:zn([o,f.pathname]),pathnameBase:rk(zn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=zn([o,f.pathnameBase]))}return a}function Xj(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zj(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let w=l[f]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[f];return m&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Zj(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ap(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Jj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ap(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const qj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ek=e=>qj.test(e);function tk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vi(e):e,o;if(n)if(ek(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),ap(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Wm(n.substring(1),"/"):o=Wm(n,t)}else o=t;return{pathname:o,search:ik(r),hash:ok(i)}}function Wm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lp(e,t){let n=nk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vi(e):(i=oa({},e),Se(!i.pathname||!i.pathname.includes("?"),Wc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Wc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Wc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=tk(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),rk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ik=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ok=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ak(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gx=["post","put","patch","delete"];new Set(Gx);const sk=["get",...Gx];new Set(sk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},aa.apply(this,arguments)}const up=b.createContext(null),lk=b.createContext(null),Zn=b.createContext(null),Fl=b.createContext(null),Jn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Kx=b.createContext(null);function ck(e,t){let{relative:n}=t===void 0?{}:t;Fi()||Se(!1);let{basename:r,navigator:i}=b.useContext(Zn),{hash:o,pathname:a,search:l}=Xx(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:zn([r,a])),i.createHref({pathname:c,search:l,hash:o})}function Fi(){return b.useContext(Fl)!=null}function zi(){return Fi()||Se(!1),b.useContext(Fl).location}function Qx(e){b.useContext(Zn).static||b.useLayoutEffect(e)}function dp(){let{isDataRoute:e}=b.useContext(Jn);return e?Sk():uk()}function uk(){Fi()||Se(!1);let e=b.useContext(up),{basename:t,future:n,navigator:r}=b.useContext(Zn),{matches:i}=b.useContext(Jn),{pathname:o}=zi(),a=JSON.stringify(lp(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return Qx(()=>{l.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=cp(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:zn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,o,e])}function Xx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Zn),{matches:i}=b.useContext(Jn),{pathname:o}=zi(),a=JSON.stringify(lp(i,r.v7_relativeSplatPath));return b.useMemo(()=>cp(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function dk(e,t){return fk(e,t)}function fk(e,t,n,r){Fi()||Se(!1);let{navigator:i}=b.useContext(Zn),{matches:o}=b.useContext(Jn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=zi(),d;if(t){var f;let S=typeof t=="string"?Vi(t):t;c==="/"||(f=S.pathname)!=null&&f.startsWith(c)||Se(!1),d=S}else d=u;let p=d.pathname||"/",m=p;if(c!=="/"){let S=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Nj(e,{pathname:m}),w=vk(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:zn([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:zn([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&w?b.createElement(Fl.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},w):w}function pk(){let e=bk(),t=ak(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const hk=b.createElement(pk,null);class mk extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Jn.Provider,{value:this.props.routeContext},b.createElement(Kx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gk(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(up);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Jn.Provider,{value:t},r)}function vk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Se(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let m,x=!1,w=null,S=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||hk,c&&(u<0&&p===0?(jk("route-fallback"),x=!0,S=null):u===p&&(x=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),h=()=>{let v;return m?v=w:x?v=S:f.route.Component?v=b.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,b.createElement(gk,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(mk,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Zx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zx||{}),Jx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jx||{});function yk(e){let t=b.useContext(up);return t||Se(!1),t}function xk(e){let t=b.useContext(lk);return t||Se(!1),t}function wk(e){let t=b.useContext(Jn);return t||Se(!1),t}function qx(e){let t=wk(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function bk(){var e;let t=b.useContext(Kx),n=xk(),r=qx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sk(){let{router:e}=yk(Zx.UseNavigateStable),t=qx(Jx.UseNavigateStable),n=b.useRef(!1);return Qx(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,aa({fromRouteId:t},o)))},[e,t])}const Um={};function jk(e,t,n){Um[e]||(Um[e]=!0)}function kk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ck(e){let{to:t,replace:n,state:r,relative:i}=e;Fi()||Se(!1);let{future:o,static:a}=b.useContext(Zn),{matches:l}=b.useContext(Jn),{pathname:c}=zi(),u=dp(),d=cp(t,lp(l,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Yr(e){Se(!1)}function Tk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:o,static:a=!1,future:l}=e;Fi()&&Se(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:o,static:a,future:aa({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Vi(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:x="default"}=r,w=b.useMemo(()=>{let S=sp(d,c);return S==null?null:{location:{pathname:S,search:f,hash:p,state:m,key:x},navigationType:i}},[c,d,f,p,m,x,i]);return w==null?null:b.createElement(Zn.Provider,{value:u},b.createElement(Fl.Provider,{children:n,value:w}))}function Pk(e){let{children:t,location:n}=e;return dk(jd(t),n)}new Promise(()=>{});function jd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,jd(r.props.children,o));return}r.type!==Yr&&Se(!1),!r.props.index||!r.props.children||Se(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=jd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kd(){return kd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kd.apply(this,arguments)}function Dk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ek(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ak(e,t){return e.button===0&&(!t||t==="_self")&&!Ek(e)}const Lk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ik="6";try{window.__reactRouterVersion=Ik}catch{}const _k="startTransition",Hm=kb[_k];function Mk(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=Oj({window:i,v5Compat:!0}));let a=o.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(f=>{u&&Hm?Hm(()=>c(f)):c(f)},[c,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>kk(r),[r]),b.createElement(Tk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Ok=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fp=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=Dk(t,Lk),{basename:m}=b.useContext(Zn),x,w=!1;if(typeof u=="string"&&Rk.test(u)&&(x=u,Ok))try{let v=new URL(window.location.href),j=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=sp(j.pathname,m);j.origin===v.origin&&T!=null?u=T+j.search+j.hash:w=!0}catch{}let S=ck(u,{relative:i}),g=$k(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return b.createElement("a",kd({},p,{href:x||S,onClick:w||o?r:h,ref:n,target:c}))});var Ym;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ym||(Ym={}));var Gm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gm||(Gm={}));function $k(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=dp(),u=zi(),d=Xx(e,{relative:a});return b.useCallback(f=>{if(Ak(f,n)){f.preventDefault();let p=r!==void 0?r:ll(u)===ll(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,o,a,l])}const e1=b.createContext({isDark:!0,toggleTheme:()=>{}}),Nk=({children:e})=>{const[t,n]=b.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});b.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),b.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=a=>{localStorage.getItem("theme")||n(a.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]);const r=()=>n(!t);return s.jsx(e1.Provider,{value:{isDark:t,toggleTheme:r},children:e})},pp=()=>{const e=b.useContext(e1);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},t1=b.createContext(null),Uc="tools-auth-session",Hc="tools-webauthn-credential",Bk=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Vk=async()=>{if(!Bk())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Yc=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Fk=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},zk=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Wk=({children:e})=>{const[t,n]=b.useState(!1),[r,i]=b.useState(!0),[o,a]=b.useState(!1),l=b.useRef(!1),c=async()=>{try{const m={challenge:Yc(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Yc(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},x=await navigator.credentials.create({publicKey:m});return x?(localStorage.setItem(Hc,Fk(x.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem(Hc),x={challenge:Yc(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:zk(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:x})}catch(p){return console.error("Authentication failed:",p),!1}},d=b.useCallback(async()=>{i(!0),a(!1);const p=sessionStorage.getItem(Uc);if(p)try{const{timestamp:x}=JSON.parse(p);if(Date.now()-x<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await Vk()){n(!0),sessionStorage.setItem(Uc,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const x=localStorage.getItem(Hc);let w=!1;x?w=await u():w=await c(),w?(n(!0),sessionStorage.setItem(Uc,JSON.stringify({timestamp:Date.now()}))):a(!0)}catch{a(!0)}i(!1)},[]);b.useEffect(()=>{l.current||(l.current=!0,d())},[d]);const f=b.useCallback(()=>{d()},[d]);return s.jsx(t1.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:o,retryAuth:f},children:e})},Uk=()=>{const e=b.useContext(t1);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ge.apply(this,arguments)};function Di(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var oe="-ms-",$o="-moz-",ee="-webkit-",n1="comm",zl="rule",hp="decl",Hk="@import",r1="@keyframes",Yk="@layer",i1=Math.abs,mp=String.fromCharCode,Cd=Object.assign;function Gk(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function o1(e){return e.trim()}function cn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ds(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Ei(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function a1(e){return e.length}function So(e,t){return t.push(e),e}function Kk(e,t){return e.map(t).join("")}function Km(e,t){return e.filter(function(n){return!cn(n,t)})}var Wl=1,Ai=1,s1=0,At=0,ke=0,Wi="";function Ul(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wl,column:Ai,length:a,return:"",siblings:l}}function Cn(e,t){return Cd(Ul("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Br(e){for(;e.root;)e=Cn(e.root,{children:[e]});So(e,e.siblings)}function Qk(){return ke}function Xk(){return ke=At>0?Me(Wi,--At):0,Ai--,ke===10&&(Ai=1,Wl--),ke}function Vt(){return ke=At<s1?Me(Wi,At++):0,Ai++,ke===10&&(Ai=1,Wl++),ke}function jr(){return Me(Wi,At)}function Es(){return At}function Hl(e,t){return Ei(Wi,e,t)}function Td(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zk(e){return Wl=Ai=1,s1=Jt(Wi=e),At=0,[]}function Jk(e){return Wi="",e}function Gc(e){return o1(Hl(At-1,Pd(e===91?e+2:e===40?e+1:e)))}function qk(e){for(;(ke=jr())&&ke<33;)Vt();return Td(e)>2||Td(ke)>3?"":" "}function eC(e,t){for(;--t&&Vt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return Hl(e,Es()+(t<6&&jr()==32&&Vt()==32))}function Pd(e){for(;Vt();)switch(ke){case e:return At;case 34:case 39:e!==34&&e!==39&&Pd(ke);break;case 40:e===41&&Pd(e);break;case 92:Vt();break}return At}function tC(e,t){for(;Vt()&&e+ke!==57;)if(e+ke===84&&jr()===47)break;return"/*"+Hl(t,At-1)+"*"+mp(e===47?e:Vt())}function nC(e){for(;!Td(jr());)Vt();return Hl(e,At)}function rC(e){return Jk(As("",null,null,null,[""],e=Zk(e),0,[0],e))}function As(e,t,n,r,i,o,a,l,c){for(var u=0,d=0,f=a,p=0,m=0,x=0,w=1,S=1,g=1,h=0,v="",j=i,T=o,C=r,k=v;S;)switch(x=h,h=Vt()){case 40:if(x!=108&&Me(k,f-1)==58){Ds(k+=Y(Gc(h),"&","&\f"),"&\f",i1(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Gc(h);break;case 9:case 10:case 13:case 32:k+=qk(x);break;case 92:k+=eC(Es()-1,7);continue;case 47:switch(jr()){case 42:case 47:So(iC(tC(Vt(),Es()),t,n,c),c);break;default:k+="/"}break;case 123*w:l[u++]=Jt(k)*g;case 125*w:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:g==-1&&(k=Y(k,/\f/g,"")),m>0&&Jt(k)-f&&So(m>32?Xm(k+";",r,n,f-1,c):Xm(Y(k," ","")+";",r,n,f-2,c),c);break;case 59:k+=";";default:if(So(C=Qm(k,t,n,u,d,i,l,v,j=[],T=[],f,o),o),h===123)if(d===0)As(k,t,C,C,j,o,f,l,T);else switch(p===99&&Me(k,3)===110?100:p){case 100:case 108:case 109:case 115:As(e,C,C,r&&So(Qm(e,C,C,0,0,i,l,v,i,j=[],f,T),T),i,T,f,l,r?j:T);break;default:As(k,C,C,C,[""],T,0,l,T)}}u=d=m=0,w=g=1,v=k="",f=a;break;case 58:f=1+Jt(k),m=x;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&Xk()==125)continue}switch(k+=mp(h),h*w){case 38:g=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(Jt(k)-1)*g,g=1;break;case 64:jr()===45&&(k+=Gc(Vt())),p=jr(),d=f=Jt(v=k+=nC(Es())),h++;break;case 45:x===45&&Jt(k)==2&&(w=0)}}return o}function Qm(e,t,n,r,i,o,a,l,c,u,d,f){for(var p=i-1,m=i===0?o:[""],x=a1(m),w=0,S=0,g=0;w<r;++w)for(var h=0,v=Ei(e,p+1,p=i1(S=a[w])),j=e;h<x;++h)(j=o1(S>0?m[h]+" "+v:Y(v,/&\f/g,m[h])))&&(c[g++]=j);return Ul(e,t,n,i===0?zl:l,c,u,d,f)}function iC(e,t,n,r){return Ul(e,t,n,n1,mp(Qk()),Ei(e,2,-2),0,r)}function Xm(e,t,n,r,i){return Ul(e,t,n,hp,Ei(e,0,r),Ei(e,r+1,-1),r,i)}function l1(e,t,n){switch(Gk(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return $o+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+$o+e+oe+e+e;case 5936:switch(Me(e,t+11)){case 114:return ee+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+oe+e+e;case 6165:return ee+e+oe+"flex-"+e+e;case 5187:return ee+e+Y(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return ee+e+oe+"flex-item-"+Y(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":oe+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ee+e+oe+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+oe+Y(e,"shrink","negative")+e;case 5292:return ee+e+oe+Y(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+Y(e,"-grow","")+ee+e+oe+Y(e,"grow","positive")+e;case 4554:return ee+Y(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!cn(e,/flex-|baseline/))return oe+"grid-column-align"+Ei(e,t)+e;break;case 2592:case 3360:return oe+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,cn(r.props,/grid-\w+-end/)})?~Ds(e+(n=n[t].value),"span",0)?e:oe+Y(e,"-start","")+e+oe+"grid-row-span:"+(~Ds(n,"span",0)?cn(n,/\d+/):+cn(n,/\d+/)-+cn(e,/\d+/))+";":oe+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return cn(r.props,/grid-\w+-start/)})?e:oe+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+$o+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ds(e,"stretch",0)?l1(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,c,u){return oe+i+":"+o+u+(a?oe+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return Y(e,":",":"+ee)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Me(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+oe+"$2box$3")+e;case 100:return Y(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function oC(e,t,n,r){switch(e.type){case Yk:if(e.children.length)break;case Hk:case hp:return e.return=e.return||e.value;case n1:return"";case r1:return e.return=e.value+"{"+cl(e.children,r)+"}";case zl:if(!Jt(e.value=e.props.join(",")))return""}return Jt(n=cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function aC(e){var t=a1(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function sC(e){return function(t){t.root||(t=t.return)&&e(t)}}function lC(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hp:e.return=l1(e.value,e.length,n);return;case r1:return cl([Cn(e,{value:Y(e.value,"@","@"+ee)})],r);case zl:if(e.length)return Kk(n=e.props,function(i){switch(cn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Br(Cn(e,{props:[Y(i,/:(read-\w+)/,":"+$o+"$1")]})),Br(Cn(e,{props:[i]})),Cd(e,{props:Km(n,r)});break;case"::placeholder":Br(Cn(e,{props:[Y(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Br(Cn(e,{props:[Y(i,/:(plac\w+)/,":"+$o+"$1")]})),Br(Cn(e,{props:[Y(i,/:(plac\w+)/,oe+"input-$1")]})),Br(Cn(e,{props:[i]})),Cd(e,{props:Km(n,r)});break}return""})}}var cC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},Li=typeof process<"u"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",c1="active",u1="data-styled-version",Yl="6.1.19",gp=`/*!sc*/
`,ul=typeof window<"u"&&typeof document<"u",uC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY),dC={},Gl=Object.freeze([]),Ii=Object.freeze({});function d1(e,t,n){return n===void 0&&(n=Ii),e.theme!==n.theme&&e.theme||t||n.theme}var f1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pC=/(^-|-$)/g;function Zm(e){return e.replace(fC,"-").replace(pC,"")}var hC=/(a)(d)/gi,Xa=52,Jm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dd(e){var t,n="";for(t=Math.abs(e);t>Xa;t=t/Xa|0)n=Jm(t%Xa)+n;return(Jm(t%Xa)+n).replace(hC,"$1-$2")}var Kc,p1=5381,oi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},h1=function(e){return oi(p1,e)};function vp(e){return Dd(h1(e)>>>0)}function mC(e){return e.displayName||e.name||"Component"}function Qc(e){return typeof e=="string"&&!0}var m1=typeof Symbol=="function"&&Symbol.for,g1=m1?Symbol.for("react.memo"):60115,gC=m1?Symbol.for("react.forward_ref"):60112,vC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xC=((Kc={})[gC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kc[g1]=v1,Kc);function qm(e){return("type"in(t=e)&&t.type.$$typeof)===g1?v1:"$$typeof"in e?xC[e.$$typeof]:vC;var t}var wC=Object.defineProperty,bC=Object.getOwnPropertyNames,eg=Object.getOwnPropertySymbols,SC=Object.getOwnPropertyDescriptor,jC=Object.getPrototypeOf,tg=Object.prototype;function y1(e,t,n){if(typeof t!="string"){if(tg){var r=jC(t);r&&r!==tg&&y1(e,r,n)}var i=bC(t);eg&&(i=i.concat(eg(t)));for(var o=qm(e),a=qm(t),l=0;l<i.length;++l){var c=i[l];if(!(c in yC||n&&n[c]||a&&c in a||o&&c in o)){var u=SC(t,c);try{wC(e,c,u)}catch{}}}}return e}function _i(e){return typeof e=="function"}function yp(e){return typeof e=="object"&&"styledComponentId"in e}function xr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function dl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function sa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ed(e,t,n){if(n===void 0&&(n=!1),!n&&!sa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ed(e[r],t[r]);else if(sa(t))for(var r in t)e[r]=Ed(e[r],t[r]);return e}function xp(e,t){Object.defineProperty(e,"toString",{value:t})}function wa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw wa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(gp);return n},e}(),Ls=new Map,fl=new Map,Is=1,Za=function(e){if(Ls.has(e))return Ls.get(e);for(;fl.has(Is);)Is++;var t=Is++;return Ls.set(e,t),fl.set(t,e),t},CC=function(e,t){Is=t+1,Ls.set(e,t),fl.set(t,e)},TC="style[".concat(Li,"][").concat(u1,'="').concat(Yl,'"]'),PC=new RegExp("^".concat(Li,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),DC=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},EC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(gp),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var c=l.match(PC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(CC(d,u),DC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},ng=function(e){for(var t=document.querySelectorAll(TC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Li)!==c1&&(EC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function AC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var x1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Li,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Li,c1),r.setAttribute(u1,Yl);var a=AC();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},LC=function(){function e(t){this.element=x1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw wa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),IC=function(){function e(t){this.element=x1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_C=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rg=ul,MC={isServer:!ul,useCSSOMInjection:!uC},pl=function(){function e(t,n,r){t===void 0&&(t=Ii),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},MC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ul&&rg&&(rg=!1,ng(this)),xp(this,function(){return function(o){for(var a=o.getTag(),l=a.length,c="",u=function(f){var p=function(g){return fl.get(g)}(f);if(p===void 0)return"continue";var m=o.names.get(p),x=a.getGroup(f);if(m===void 0||!m.size||x.length===0)return"continue";var w="".concat(Li,".g").concat(f,'[id="').concat(p,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),c+="".concat(x).concat(w,'{content:"').concat(S,'"}').concat(gp)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Za(t)},e.prototype.rehydrate=function(){!this.server&&ul&&ng(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _C(i):r?new LC(i):new IC(i)}(this.options),new kC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Za(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Za(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Za(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),OC=/&/g,RC=/^\s*\/\/.*$/gm;function w1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=w1(n.children,t)),n})}function $C(e){var t,n,r,i=Ii,o=i.options,a=o===void 0?Ii:o,l=i.plugins,c=l===void 0?Gl:l,u=function(p,m,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===zl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(OC,n).replace(r,u))}),a.prefix&&d.push(lC),d.push(oC);var f=function(p,m,x,w){m===void 0&&(m=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(RC,""),g=rC(x||m?"".concat(x," ").concat(m," { ").concat(S," }"):S);a.namespace&&(g=w1(g,a.namespace));var h=[];return cl(g,aC(d.concat(sC(function(v){return h.push(v)})))),h};return f.hash=c.length?c.reduce(function(p,m){return m.name||wa(15),oi(p,m.name)},p1).toString():"",f}var NC=new pl,Ad=$C(),b1=en.createContext({shouldForwardProp:void 0,styleSheet:NC,stylis:Ad});b1.Consumer;en.createContext(void 0);function Ld(){return b.useContext(b1)}var S1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ad);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xp(this,function(){throw wa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ad),this.name+t.hash},e}(),BC=function(e){return e>="A"&&e<="Z"};function ig(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;BC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var j1=function(e){return e==null||e===!1||e===""},k1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!j1(o)&&(Array.isArray(o)&&o.isCss||_i(o)?r.push("".concat(ig(i),":"),o,";"):sa(o)?r.push.apply(r,Di(Di(["".concat(i," {")],k1(o),!1),["}"],!1)):r.push("".concat(ig(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in cC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wn(e,t,n,r){if(j1(e))return[];if(yp(e))return[".".concat(e.styledComponentId)];if(_i(e)){if(!_i(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Wn(i,t,n,r)}var o;return e instanceof S1?n?(e.inject(n,r),[e.getName(r)]):[e]:sa(e)?k1(e):Array.isArray(e)?Array.prototype.concat.apply(Gl,e.map(function(a){return Wn(a,t,n,r)})):[e.toString()]}function C1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_i(n)&&!yp(n))return!1}return!0}var VC=h1(Yl),FC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&C1(t),this.componentId=n,this.baseHash=oi(VC,n),this.baseStyle=r,pl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=xr(i,this.staticRulesId);else{var o=dl(Wn(this.rules,t,n,r)),a=Dd(oi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=xr(i,a),this.staticRulesId=a}else{for(var c=oi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=dl(Wn(f,t,n,r));c=oi(c,p+d),u+=p}}if(u){var m=Dd(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=xr(i,m)}}return i},e}(),wp=en.createContext(void 0);wp.Consumer;var Xc={};function zC(e,t,n){var r=yp(e),i=e,o=!Qc(e),a=t.attrs,l=a===void 0?Gl:a,c=t.componentId,u=c===void 0?function(j,T){var C=typeof j!="string"?"sc":Zm(j);Xc[C]=(Xc[C]||0)+1;var k="".concat(C,"-").concat(vp(Yl+C+Xc[C]));return T?"".concat(T,"-").concat(k):k}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(j){return Qc(j)?"styled.".concat(j):"Styled(".concat(mC(j),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Zm(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(j,T){return w(j,T)&&S(j,T)}}else x=w}var g=new FC(n,p,r?i.componentStyle:void 0);function h(j,T){return function(C,k,P){var A=C.attrs,L=C.componentStyle,N=C.defaultProps,F=C.foldedComponentIds,Q=C.styledComponentId,U=C.target,D=en.useContext(wp),_=Ld(),R=C.shouldForwardProp||_.shouldForwardProp,E=d1(k,D,N)||Ii,M=function(K,ce,Re){for(var Xe,Te=Ge(Ge({},ce),{className:void 0,theme:Re}),Wt=0;Wt<K.length;Wt+=1){var wt=_i(Xe=K[Wt])?Xe(Te):Xe;for(var $e in wt)Te[$e]=$e==="className"?xr(Te[$e],wt[$e]):$e==="style"?Ge(Ge({},Te[$e]),wt[$e]):wt[$e]}return ce.className&&(Te.className=xr(Te.className,ce.className)),Te}(A,k,E),O=M.as||U,V={};for(var W in M)M[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&M.theme===E||(W==="forwardedAs"?V.as=M.forwardedAs:R&&!R(W,O)||(V[W]=M[W]));var re=function(K,ce){var Re=Ld(),Xe=K.generateAndInjectStyles(ce,Re.styleSheet,Re.stylis);return Xe}(L,M),le=xr(F,Q);return re&&(le+=" "+re),M.className&&(le+=" "+M.className),V[Qc(O)&&!f1.has(O)?"class":"className"]=le,P&&(V.ref=P),b.createElement(O,V)}(v,j,T)}h.displayName=f;var v=en.forwardRef(h);return v.attrs=m,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?xr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(T){for(var C=[],k=1;k<arguments.length;k++)C[k-1]=arguments[k];for(var P=0,A=C;P<A.length;P++)Ed(T,A[P],!0);return T}({},i.defaultProps,j):j}}),xp(v,function(){return".".concat(v.styledComponentId)}),o&&y1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function og(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ag=function(e){return Object.assign(e,{isCss:!0})};function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_i(e)||sa(e))return ag(Wn(og(Gl,Di([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wn(r):ag(Wn(og(r,t)))}function Id(e,t,n){if(n===void 0&&(n=Ii),!t)throw wa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,tn.apply(void 0,Di([i],o,!1)))};return r.attrs=function(i){return Id(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Id(e,t,Ge(Ge({},n),i))},r}var T1=function(e){return Id(zC,e)},y=T1;f1.forEach(function(e){y[e]=T1(e)});var WC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=C1(t),pl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(dl(Wn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&pl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function UC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=tn.apply(void 0,Di([e],t,!1)),i="sc-global-".concat(vp(JSON.stringify(r))),o=new WC(r,i),a=function(c){var u=Ld(),d=en.useContext(wp),f=en.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),en.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,p){if(o.isStatic)o.renderStyles(c,dC,d,p);else{var m=Ge(Ge({},u),{theme:d1(u,f,a.defaultProps)});o.renderStyles(c,m,d,p)}}return en.memo(a)}function Ui(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=dl(tn.apply(void 0,Di([e],t,!1))),i=vp(r);return new S1(i,r)}const HC=UC`
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
`,YC=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,GC=y.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,KC=()=>{const{isDark:e}=pp();return s.jsx(YC,{children:s.jsx(GC,{$isDark:e})})},bp=b.createContext({});function Sp(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Kl=b.createContext(null),jp=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class QC extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function XC({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=b.useContext(jp);return b.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u}=i.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),s.jsx(QC,{isPresent:t,childRef:r,sizeRef:i,children:b.cloneElement(e,{ref:r})})}const ZC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const l=Sp(JC),c=b.useId(),u=b.useCallback(f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=b.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(l.set(f,!1),()=>l.delete(f))}),o?[Math.random(),u]:[n,u]);return b.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),b.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(XC,{isPresent:n,children:e})),s.jsx(Kl.Provider,{value:d,children:e})};function JC(){return new Map}function P1(e=!0){const t=b.useContext(Kl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=b.useId();b.useEffect(()=>{e&&i(o)},[e]);const a=b.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Ja=e=>e.key||"";function sg(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const kp=typeof window<"u",D1=kp?b.useLayoutEffect:b.useEffect,Le=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1})=>{const[l,c]=P1(a),u=b.useMemo(()=>sg(e),[e]),d=a&&!l?[]:u.map(Ja),f=b.useRef(!0),p=b.useRef(u),m=Sp(()=>new Map),[x,w]=b.useState(u),[S,g]=b.useState(u);D1(()=>{f.current=!1,p.current=u;for(let j=0;j<S.length;j++){const T=Ja(S[j]);d.includes(T)?m.delete(T):m.get(T)!==!0&&m.set(T,!1)}},[S,d.length,d.join("-")]);const h=[];if(u!==x){let j=[...u];for(let T=0;T<S.length;T++){const C=S[T],k=Ja(C);d.includes(k)||(j.splice(T,0,C),h.push(C))}o==="wait"&&h.length&&(j=h),g(sg(j)),w(u);return}const{forceRender:v}=b.useContext(bp);return s.jsx(s.Fragment,{children:S.map(j=>{const T=Ja(j),C=a&&!l?!1:u===S||d.includes(T),k=()=>{if(m.has(T))m.set(T,!0);else return;let P=!0;m.forEach(A=>{A||(P=!1)}),P&&(v==null||v(),g(p.current),a&&(c==null||c()),r&&r())};return s.jsx(ZC,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:C?void 0:k,children:j},T)})})},mt=e=>e;let E1=mt;function Cp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Mi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},hn=e=>e*1e3,mn=e=>e/1e3,qC={useManualTiming:!1};function eT(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const qa=["read","resolveKeyframes","update","preRender","render","postRender"],tT=40;function A1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=qa.reduce((g,h)=>(g[h]=eT(o),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=a,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,tT),1),i.timestamp=g,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},x=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:qa.reduce((g,h)=>{const v=a[h];return g[h]=(j,T=!1,C=!1)=>(n||x(),v.schedule(j,T,C)),g},{}),cancel:g=>{for(let h=0;h<qa.length;h++)a[qa[h]].cancel(g)},state:i,steps:a}}const{schedule:se,cancel:Yn,state:Be,steps:Zc}=A1(typeof requestAnimationFrame<"u"?requestAnimationFrame:mt,!0),L1=b.createContext({strict:!1}),lg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Oi={};for(const e in lg)Oi[e]={isEnabled:t=>lg[e].some(n=>!!t[n])};function nT(e){for(const t in e)Oi[t]={...Oi[t],...e[t]}}const rT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||rT.has(e)}let I1=e=>!hl(e);function iT(e){e&&(I1=t=>t.startsWith("on")?!hl(t):e(t))}try{iT(require("@emotion/is-prop-valid").default)}catch{}function oT(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(I1(i)||n===!0&&hl(i)||!t&&!hl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function aT(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Ql=b.createContext({});function la(e){return typeof e=="string"||Array.isArray(e)}function Xl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Tp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pp=["initial",...Tp];function Zl(e){return Xl(e.animate)||Pp.some(t=>la(e[t]))}function _1(e){return!!(Zl(e)||e.variants)}function sT(e,t){if(Zl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||la(n)?n:void 0,animate:la(r)?r:void 0}}return e.inherit!==!1?t:{}}function lT(e){const{initial:t,animate:n}=sT(e,b.useContext(Ql));return b.useMemo(()=>({initial:t,animate:n}),[cg(t),cg(n)])}function cg(e){return Array.isArray(e)?e.join(" "):e}const cT=Symbol.for("motionComponentSymbol");function ai(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function uT(e,t,n){return b.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ai(n)&&(n.current=r))},[t])}const Dp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dT="framerAppearId",M1="data-"+Dp(dT),{schedule:Ep}=A1(queueMicrotask,!1),O1=b.createContext({});function fT(e,t,n,r,i){var o,a;const{visualElement:l}=b.useContext(Ql),c=b.useContext(L1),u=b.useContext(Kl),d=b.useContext(jp).reducedMotion,f=b.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=b.useContext(O1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&pT(f.current,n,i,m);const x=b.useRef(!1);b.useInsertionEffect(()=>{p&&x.current&&p.update(n,u)});const w=n[M1],S=b.useRef(!!w&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,w))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,w)));return D1(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Ep.render(p.render),S.current&&p.animationState&&p.animationState.animateChanges())}),b.useEffect(()=>{p&&(!S.current&&p.animationState&&p.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,w)}),S.current=!1))}),p}function pT(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:R1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||l&&ai(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function R1(e){if(e)return e.options.allowProjection!==!1?e.projection:R1(e.parent)}function hT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,a;e&&nT(e);function l(u,d){let f;const p={...b.useContext(jp),...u,layoutId:mT(u)},{isStatic:m}=p,x=lT(u),w=r(u,m);if(!m&&kp){gT();const S=vT(p);f=S.MeasureLayout,x.visualElement=fT(i,w,p,t,S.ProjectionNode)}return s.jsxs(Ql.Provider,{value:x,children:[f&&x.visualElement?s.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,u,uT(w,x.visualElement,d),w,m,x.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(a=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&a!==void 0?a:""})`}`;const c=b.forwardRef(l);return c[cT]=i,c}function mT({layoutId:e}){const t=b.useContext(bp).id;return t&&e!==void 0?t+"-"+e:e}function gT(e,t){b.useContext(L1).strict}function vT(e){const{drag:t,layout:n}=Oi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const yT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ap(e){return typeof e!="string"||e.includes("-")?!1:!!(yT.indexOf(e)>-1||/[A-Z]/u.test(e))}function ug(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Lp(e,t,n,r){if(typeof t=="function"){const[i,o]=ug(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=ug(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const _d=e=>Array.isArray(e),xT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),wT=e=>_d(e)?e[e.length-1]||0:e,Ke=e=>!!(e&&e.getVelocity);function _s(e){const t=Ke(e)?e.get():e;return xT(t)?t.toValue():t}function bT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const a={latestValues:ST(r,i,o,e),renderState:t()};return n&&(a.onMount=l=>n({props:r,current:l,...a}),a.onUpdate=l=>n(l)),a}const $1=e=>(t,n)=>{const r=b.useContext(Ql),i=b.useContext(Kl),o=()=>bT(e,t,r,i);return n?o():Sp(o)};function ST(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=_s(o[p]);let{initial:a,animate:l}=e;const c=Zl(e),u=_1(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;if(f&&typeof f!="boolean"&&!Xl(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const x=Lp(e,p[m]);if(x){const{transitionEnd:w,transition:S,...g}=x;for(const h in g){let v=g[h];if(Array.isArray(v)){const j=d?v.length-1:0;v=v[j]}v!==null&&(i[h]=v)}for(const h in w)i[h]=w[h]}}}return i}const Hi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Or=new Set(Hi),N1=e=>t=>typeof t=="string"&&t.startsWith(e),B1=N1("--"),jT=N1("var(--"),Ip=e=>jT(e)?kT.test(e.split("/*")[0].trim()):!1,kT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,V1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,wn=(e,t,n)=>n>t?t:n<e?e:n,Yi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ca={...Yi,transform:e=>wn(0,1,e)},es={...Yi,default:1},ba=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Tn=ba("deg"),on=ba("%"),z=ba("px"),CT=ba("vh"),TT=ba("vw"),dg={...on,parse:e=>on.parse(e)/100,transform:e=>on.transform(e*100)},PT={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},DT={rotate:Tn,rotateX:Tn,rotateY:Tn,rotateZ:Tn,scale:es,scaleX:es,scaleY:es,scaleZ:es,skew:Tn,skewX:Tn,skewY:Tn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:ca,originX:dg,originY:dg,originZ:z},fg={...Yi,transform:Math.round},_p={...PT,...DT,zIndex:fg,size:z,fillOpacity:ca,strokeOpacity:ca,numOctaves:fg},ET={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},AT=Hi.length;function LT(e,t,n){let r="",i=!0;for(let o=0;o<AT;o++){const a=Hi[o],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(a.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=V1(l,_p[a]);if(!c){i=!1;const d=ET[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Mp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(Or.has(c)){a=!0;continue}else if(B1(c)){i[c]=u;continue}else{const d=V1(u,_p[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=LT(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}const IT={offset:"stroke-dashoffset",array:"stroke-dasharray"},_T={offset:"strokeDashoffset",array:"strokeDasharray"};function MT(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?IT:_T;e[o.offset]=z.transform(-r);const a=z.transform(t),l=z.transform(n);e[o.array]=`${a} ${l}`}function pg(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function OT(e,t,n){const r=pg(t,e.x,e.width),i=pg(n,e.y,e.height);return`${r} ${i}`}function Op(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(Mp(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:x}=e;p.transform&&(x&&(m.transform=p.transform),delete p.transform),x&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=OT(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&MT(p,a,l,c,!1)}const Rp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),F1=()=>({...Rp(),attrs:{}}),$p=e=>typeof e=="string"&&e.toLowerCase()==="svg";function z1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const W1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function U1(e,t,n,r){z1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(W1.has(i)?i:Dp(i),t.attrs[i])}const ml={};function RT(e){Object.assign(ml,e)}function H1(e,{layout:t,layoutId:n}){return Or.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ml[e]||e==="opacity")}function Np(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(Ke(i[a])||t.style&&Ke(t.style[a])||H1(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function Y1(e,t,n){const r=Np(e,t,n);for(const i in e)if(Ke(e[i])||Ke(t[i])){const o=Hi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function $T(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const hg=["x","y","width","height","cx","cy","r"],NT={useVisualState:$1({scrapeMotionValuesFromProps:Y1,createRenderState:F1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const l in i)if(Or.has(l)){o=!0;break}}if(!o)return;let a=!t;if(t)for(let l=0;l<hg.length;l++){const c=hg[l];e[c]!==t[c]&&(a=!0)}a&&se.read(()=>{$T(n,r),se.render(()=>{Op(r,i,$p(n.tagName),e.transformTemplate),U1(n,r)})})}})},BT={useVisualState:$1({scrapeMotionValuesFromProps:Np,createRenderState:Rp})};function G1(e,t,n){for(const r in t)!Ke(t[r])&&!H1(r,n)&&(e[r]=t[r])}function VT({transformTemplate:e},t){return b.useMemo(()=>{const n=Rp();return Mp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function FT(e,t){const n=e.style||{},r={};return G1(r,n,e),Object.assign(r,VT(e,t)),r}function zT(e,t){const n={},r=FT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function WT(e,t,n,r){const i=b.useMemo(()=>{const o=F1();return Op(o,t,$p(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};G1(o,e.style,e),i.style={...o,...i.style}}return i}function UT(e=!1){return(n,r,i,{latestValues:o},a)=>{const c=(Ap(n)?WT:zT)(r,o,a,n),u=oT(r,typeof n=="string",e),d=n!==b.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=b.useMemo(()=>Ke(f)?f.get():f,[f]);return b.createElement(n,{...d,children:p})}}function HT(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...Ap(r)?NT:BT,preloadedFeatures:e,useRender:UT(i),createVisualElement:t,Component:r};return hT(a)}}function K1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Jl(e,t,n){const r=e.getProps();return Lp(r,t,n!==void 0?n:r.custom,e)}const YT=Cp(()=>window.ScrollTimeline!==void 0);class GT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(YT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class KT extends GT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Bp(e,t){return e?e[t]||e.default||e:void 0}const Md=2e4;function Q1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Md;)t+=n,r=e.next(t);return t>=Md?1/0:t}function Vp(e){return typeof e=="function"}function mg(e,t){e.timeline=t,e.onfinish=null}const Fp=e=>Array.isArray(e)&&typeof e[0]=="number",QT={linearEasing:void 0};function XT(e,t){const n=Cp(e);return()=>{var r;return(r=QT[t])!==null&&r!==void 0?r:n()}}const gl=XT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),X1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Mi(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function Z1(e){return!!(typeof e=="function"&&gl()||!e||typeof e=="string"&&(e in Od||gl())||Fp(e)||Array.isArray(e)&&e.every(Z1))}const jo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Od={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:jo([0,.65,.55,1]),circOut:jo([.55,0,1,.45]),backIn:jo([.31,.01,.66,-.59]),backOut:jo([.33,1.53,.69,.99])};function J1(e,t){if(e)return typeof e=="function"&&gl()?X1(e,t):Fp(e)?jo(e):Array.isArray(e)?e.map(n=>J1(n,t)||Od.easeOut):Od[e]}const Mt={x:!1,y:!1};function q1(){return Mt.x||Mt.y}function ZT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function ew(e,t){const n=ZT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function gg(e){return t=>{t.pointerType==="touch"||q1()||e(t)}}function JT(e,t,n={}){const[r,i,o]=ew(e,n),a=gg(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=gg(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",a,i)}),o}const tw=(e,t)=>t?e===t?!0:tw(e,t.parentElement):!1,zp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,qT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function e5(e){return qT.has(e.tagName)||e.tabIndex!==-1}const ko=new WeakSet;function vg(e){return t=>{t.key==="Enter"&&e(t)}}function Jc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const t5=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=vg(()=>{if(ko.has(n))return;Jc(n,"down");const i=vg(()=>{Jc(n,"up")}),o=()=>Jc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function yg(e){return zp(e)&&!q1()}function n5(e,t,n={}){const[r,i,o]=ew(e,n),a=l=>{const c=l.currentTarget;if(!yg(l)||ko.has(c))return;ko.add(c);const u=t(l),d=(m,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!yg(m)||!ko.has(c))&&(ko.delete(c),typeof u=="function"&&u(m,{success:x}))},f=m=>{d(m,n.useGlobalTarget||tw(c,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!e5(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),l.addEventListener("focus",u=>t5(u,i),i)}),o}function r5(e){return e==="x"||e==="y"?Mt[e]?null:(Mt[e]=!0,()=>{Mt[e]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const nw=new Set(["width","height","top","left","right","bottom",...Hi]);let Ms;function i5(){Ms=void 0}const an={now:()=>(Ms===void 0&&an.set(Be.isProcessing||qC.useManualTiming?Be.timestamp:performance.now()),Ms),set:e=>{Ms=e,queueMicrotask(i5)}};function Wp(e,t){e.indexOf(t)===-1&&e.push(t)}function Up(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Hp{constructor(){this.subscriptions=[]}add(t){return Wp(this.subscriptions,t),()=>Up(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function rw(e,t){return t?e*(1e3/t):0}const xg=30,o5=e=>!isNaN(parseFloat(e));class a5{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=an.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=an.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=o5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Hp);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=an.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>xg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,xg);return rw(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ua(e,t){return new a5(e,t)}function s5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ua(n))}function l5(e,t){const n=Jl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const l=wT(o[a]);s5(e,a,l)}}function c5(e){return!!(Ke(e)&&e.add)}function Rd(e,t){const n=e.getValue("willChange");if(c5(n))return n.add(t)}function iw(e){return e.props[M1]}const ow=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,u5=1e-7,d5=12;function f5(e,t,n,r,i){let o,a,l=0;do a=t+(n-t)/2,o=ow(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>u5&&++l<d5);return a}function Sa(e,t,n,r){if(e===t&&n===r)return mt;const i=o=>f5(o,0,1,e,n);return o=>o===0||o===1?o:ow(i(o),t,r)}const aw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,sw=e=>t=>1-e(1-t),lw=Sa(.33,1.53,.69,.99),Yp=sw(lw),cw=aw(Yp),uw=e=>(e*=2)<1?.5*Yp(e):.5*(2-Math.pow(2,-10*(e-1))),Gp=e=>1-Math.sin(Math.acos(e)),dw=sw(Gp),fw=aw(Gp),pw=e=>/^0[^.\s]+$/u.test(e);function p5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||pw(e):!0}const No=e=>Math.round(e*1e5)/1e5,Kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h5(e){return e==null}const m5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qp=(e,t)=>n=>!!(typeof n=="string"&&m5.test(n)&&n.startsWith(e)||t&&!h5(n)&&Object.prototype.hasOwnProperty.call(n,t)),hw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,l]=r.match(Kp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},g5=e=>wn(0,255,e),qc={...Yi,transform:e=>Math.round(g5(e))},wr={test:Qp("rgb","red"),parse:hw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+qc.transform(e)+", "+qc.transform(t)+", "+qc.transform(n)+", "+No(ca.transform(r))+")"};function v5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const $d={test:Qp("#"),parse:v5,transform:wr.transform},si={test:Qp("hsl","hue"),parse:hw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+on.transform(No(t))+", "+on.transform(No(n))+", "+No(ca.transform(r))+")"},He={test:e=>wr.test(e)||$d.test(e)||si.test(e),parse:e=>wr.test(e)?wr.parse(e):si.test(e)?si.parse(e):$d.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?wr.transform(e):si.transform(e)},y5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function x5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Kp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(y5))===null||n===void 0?void 0:n.length)||0)>0}const mw="number",gw="color",w5="var",b5="var(",wg="${}",S5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function da(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(S5,c=>(He.test(c)?(r.color.push(o),i.push(gw),n.push(He.parse(c))):c.startsWith(b5)?(r.var.push(o),i.push(w5),n.push(c)):(r.number.push(o),i.push(mw),n.push(parseFloat(c))),++o,wg)).split(wg);return{values:n,split:l,indexes:r,types:i}}function vw(e){return da(e).values}function yw(e){const{split:t,types:n}=da(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const l=n[a];l===mw?o+=No(i[a]):l===gw?o+=He.transform(i[a]):o+=i[a]}return o}}const j5=e=>typeof e=="number"?0:e;function k5(e){const t=vw(e);return yw(e)(t.map(j5))}const Gn={test:x5,parse:vw,createTransformer:yw,getAnimatableNone:k5},C5=new Set(["brightness","contrast","saturate","opacity"]);function T5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Kp)||[];if(!r)return e;const i=n.replace(r,"");let o=C5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const P5=/\b([a-z-]*)\(.*?\)/gu,Nd={...Gn,getAnimatableNone:e=>{const t=e.match(P5);return t?t.map(T5).join(" "):e}},D5={..._p,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Nd,WebkitFilter:Nd},Xp=e=>D5[e];function xw(e,t){let n=Xp(e);return n!==Nd&&(n=Gn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const E5=new Set(["auto","none","0"]);function A5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!E5.has(o)&&da(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=xw(n,i)}const bg=e=>e===Yi||e===z,Sg=(e,t)=>parseFloat(e.split(", ")[t]),jg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Sg(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Sg(o[1],e):0}},L5=new Set(["x","y","z"]),I5=Hi.filter(e=>!L5.has(e));function _5(e){const t=[];return I5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ri={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:jg(4,13),y:jg(5,14)};Ri.translateX=Ri.x;Ri.translateY=Ri.y;const kr=new Set;let Bd=!1,Vd=!1;function ww(){if(Vd){const e=Array.from(kr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=_5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var l;(l=r.getValue(o))===null||l===void 0||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Vd=!1,Bd=!1,kr.forEach(e=>e.complete()),kr.clear()}function bw(){kr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Vd=!0)})}function M5(){bw(),ww()}class Zp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(kr.add(this),Bd||(Bd=!0,se.read(bw),se.resolveKeyframes(ww))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),l=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),kr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,kr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Sw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),O5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function R5(e){const t=O5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function jw(e,t,n=1){const[r,i]=R5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return Sw(a)?parseFloat(a):a}return Ip(i)?jw(i,t,n+1):i}const kw=e=>t=>t.test(e),$5={test:e=>e==="auto",parse:e=>e},Cw=[Yi,z,on,Tn,TT,CT,$5],kg=e=>Cw.find(kw(e));class Tw extends Zp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Ip(u))){const d=jw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!nw.has(r)||t.length!==2)return;const[i,o]=t,a=kg(i),l=kg(o);if(a!==l)if(bg(a)&&bg(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)p5(t[i])&&r.push(i);r.length&&A5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ri[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=Ri[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Cg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gn.test(e)||e==="0")&&!e.startsWith("url("));function N5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function B5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Cg(i,t),l=Cg(o,t);return!a||!l?!1:N5(e)||(n==="spring"||Vp(n))&&r}const V5=e=>e!==null;function ql(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(V5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const F5=40;class Pw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=an.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>F5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&M5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=an.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!B5(t,r,i,o))if(a)this.options.duration=0;else{c&&c(ql(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const he=(e,t,n)=>e+(t-e)*n;function eu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function z5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=eu(c,l,e+1/3),o=eu(c,l,e),a=eu(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function vl(e,t){return n=>n>0?t:e}const tu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},W5=[$d,wr,si],U5=e=>W5.find(t=>t.test(e));function Tg(e){const t=U5(e);if(!t)return!1;let n=t.parse(e);return t===si&&(n=z5(n)),n}const Pg=(e,t)=>{const n=Tg(e),r=Tg(t);if(!n||!r)return vl(e,t);const i={...n};return o=>(i.red=tu(n.red,r.red,o),i.green=tu(n.green,r.green,o),i.blue=tu(n.blue,r.blue,o),i.alpha=he(n.alpha,r.alpha,o),wr.transform(i))},H5=(e,t)=>n=>t(e(n)),ja=(...e)=>e.reduce(H5),Fd=new Set(["none","hidden"]);function Y5(e,t){return Fd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function G5(e,t){return n=>he(e,t,n)}function Jp(e){return typeof e=="number"?G5:typeof e=="string"?Ip(e)?vl:He.test(e)?Pg:X5:Array.isArray(e)?Dw:typeof e=="object"?He.test(e)?Pg:K5:vl}function Dw(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>Jp(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function K5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Jp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Q5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],l=e.indexes[a][i[a]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[o]=c,i[a]++}return r}const X5=(e,t)=>{const n=Gn.createTransformer(t),r=da(e),i=da(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Fd.has(e)&&!i.values.length||Fd.has(t)&&!r.values.length?Y5(e,t):ja(Dw(Q5(r,i),i.values),n):vl(e,t)};function Ew(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?he(e,t,n):Jp(e)(e,t)}const Z5=5;function Aw(e,t,n){const r=Math.max(t-Z5,0);return rw(n-e(r),t-r)}const ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},nu=.001;function J5({duration:e=ye.duration,bounce:t=ye.bounce,velocity:n=ye.velocity,mass:r=ye.mass}){let i,o,a=1-t;a=wn(ye.minDamping,ye.maxDamping,a),e=wn(ye.minDuration,ye.maxDuration,mn(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,m=zd(u,a),x=Math.exp(-f);return nu-p/m*x},o=u=>{const f=u*a*e,p=f*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-f),w=zd(Math.pow(u,2),a);return(-i(u)+nu>0?-1:1)*((p-m)*x)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-nu+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=eP(i,o,l);if(e=hn(e),isNaN(c))return{stiffness:ye.stiffness,damping:ye.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const q5=12;function eP(e,t,n){let r=n;for(let i=1;i<q5;i++)r=r-e(r)/t(r);return r}function zd(e,t){return e*Math.sqrt(1-t*t)}const tP=["duration","bounce"],nP=["stiffness","damping","mass"];function Dg(e,t){return t.some(n=>e[n]!==void 0)}function rP(e){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...e};if(!Dg(e,nP)&&Dg(e,tP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*wn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ye.mass,stiffness:i,damping:o}}else{const n=J5(e);t={...t,...n,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function Lw(e=ye.visualDuration,t=ye.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=rP({...n,velocity:-mn(n.velocity||0)}),x=p||0,w=u/(2*Math.sqrt(c*d)),S=a-o,g=mn(Math.sqrt(c/d)),h=Math.abs(S)<5;r||(r=h?ye.restSpeed.granular:ye.restSpeed.default),i||(i=h?ye.restDelta.granular:ye.restDelta.default);let v;if(w<1){const T=zd(g,w);v=C=>{const k=Math.exp(-w*g*C);return a-k*((x+w*g*S)/T*Math.sin(T*C)+S*Math.cos(T*C))}}else if(w===1)v=T=>a-Math.exp(-g*T)*(S+(x+g*S)*T);else{const T=g*Math.sqrt(w*w-1);v=C=>{const k=Math.exp(-w*g*C),P=Math.min(T*C,300);return a-k*((x+w*g*S)*Math.sinh(P)+T*S*Math.cosh(P))/T}}const j={calculatedDuration:m&&f||null,next:T=>{const C=v(T);if(m)l.done=T>=f;else{let k=0;w<1&&(k=T===0?hn(x):Aw(v,T,C));const P=Math.abs(k)<=r,A=Math.abs(a-C)<=i;l.done=P&&A}return l.value=l.done?a:C,l},toString:()=>{const T=Math.min(Q1(j),Md),C=X1(k=>j.next(T*k).value,T,30);return T+"ms "+C}};return j}function Eg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=P=>l!==void 0&&P<l||c!==void 0&&P>c,x=P=>l===void 0?c:c===void 0||Math.abs(l-P)<Math.abs(c-P)?l:c;let w=n*t;const S=f+w,g=a===void 0?S:a(S);g!==S&&(w=g-f);const h=P=>-w*Math.exp(-P/r),v=P=>g+h(P),j=P=>{const A=h(P),L=v(P);p.done=Math.abs(A)<=u,p.value=p.done?g:L};let T,C;const k=P=>{m(p.value)&&(T=P,C=Lw({keyframes:[p.value,x(p.value)],velocity:Aw(v,P,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:P=>{let A=!1;return!C&&T===void 0&&(A=!0,j(P),k(P)),T!==void 0&&P>=T?C.next(P-T):(!A&&j(P),p)}}}const iP=Sa(.42,0,1,1),oP=Sa(0,0,.58,1),Iw=Sa(.42,0,.58,1),aP=e=>Array.isArray(e)&&typeof e[0]!="number",sP={linear:mt,easeIn:iP,easeInOut:Iw,easeOut:oP,circIn:Gp,circInOut:fw,circOut:dw,backIn:Yp,backInOut:cw,backOut:lw,anticipate:uw},Ag=e=>{if(Fp(e)){E1(e.length===4);const[t,n,r,i]=e;return Sa(t,n,r,i)}else if(typeof e=="string")return sP[e];return e};function lP(e,t,n){const r=[],i=n||Ew,o=e.length-1;for(let a=0;a<o;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||mt:t;l=ja(c,l)}r.push(l)}return r}function cP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(E1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=lP(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Mi(e[f],e[f+1],d);return l[f](p)};return n?d=>u(wn(e[0],e[o-1],d)):u}function uP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Mi(0,t,r);e.push(he(n,1,i))}}function dP(e){const t=[0];return uP(t,e.length-1),t}function fP(e,t){return e.map(n=>n*t)}function pP(e,t){return e.map(()=>t||Iw).splice(0,e.length-1)}function yl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=aP(r)?r.map(Ag):Ag(r),o={done:!1,value:t[0]},a=fP(n&&n.length===t.length?n:dP(t),e),l=cP(a,t,{ease:Array.isArray(i)?i:pP(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const hP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>Yn(t),now:()=>Be.isProcessing?Be.timestamp:an.now()}},mP={decay:Eg,inertia:Eg,tween:yl,keyframes:yl,spring:Lw},gP=e=>e/100;class qp extends Pw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Zp,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(o,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,l=Vp(n)?n:mP[n]||yl;let c,u;l!==yl&&typeof t[0]!="number"&&(c=ja(gP,Ew(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});o==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Q1(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:p,repeat:m,repeatType:x,repeatDelay:w,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,j=o;if(m){const P=Math.min(this.currentTime,d)/f;let A=Math.floor(P),L=P%1;!L&&P>=1&&(L=1),L===1&&A--,A=Math.min(A,m+1),!!(A%2)&&(x==="reverse"?(L=1-L,w&&(L-=w/f)):x==="mirror"&&(j=a)),v=wn(0,1,L)*f}const T=h?{done:!1,value:c[0]}:j.next(v);l&&(T.value=l(T.value));let{done:C}=T;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return k&&i!==void 0&&(T.value=ql(c,this.options,i)),S&&S(T.value),k&&this.finish(),T}get duration(){const{resolved:t}=this;return t?mn(t.calculatedDuration):0}get time(){return mn(this.currentTime)}set time(t){t=hn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=mn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=hP,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const vP=new Set(["opacity","clipPath","filter","transform"]);function yP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=J1(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const xP=Cp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),xl=10,wP=2e4;function bP(e){return Vp(e.type)||e.type==="spring"||!Z1(e.ease)}function SP(e,t){const n=new qp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<wP;)r=n.sample(o),i.push(r.value),o+=xl;return{times:void 0,keyframes:i,duration:o-xl,ease:"linear"}}const _w={anticipate:uw,backInOut:cw,circInOut:fw};function jP(e){return e in _w}class Lg extends Pw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Tw(o,(a,l)=>this.onKeyframesResolved(a,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof o=="string"&&gl()&&jP(o)&&(o=_w[o]),bP(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:x,...w}=this.options,S=SP(t,w);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,o=S.ease,a="keyframes"}const d=yP(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:o});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(mg(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(ql(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return mn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return mn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=hn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return mt;const{animation:r}=n;mg(r,t)}return mt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...m}=this.options,x=new qp({...m,keyframes:r,duration:i,type:o,ease:a,times:l,isGenerator:!0}),w=hn(this.time);u.setWithVelocity(x.sample(w-xl).value,x.sample(w).value,xl)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return xP()&&r&&vP.has(r)&&!c&&!u&&!i&&o!=="mirror"&&a!==0&&l!=="inertia"}}const kP={type:"spring",stiffness:500,damping:25,restSpeed:10},CP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),TP={type:"keyframes",duration:.8},PP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DP=(e,{keyframes:t})=>t.length>2?TP:Or.has(e)?e.startsWith("scale")?CP(t[1]):kP:PP;function EP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const eh=(e,t,n,r={},i,o)=>a=>{const l=Bp(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-hn(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};EP(l)||(d={...d,...DP(e,d)}),d.duration&&(d.duration=hn(d.duration)),d.repeatDelay&&(d.repeatDelay=hn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const p=ql(d.keyframes,l);if(p!==void 0)return se.update(()=>{d.onUpdate(p),d.onComplete()}),new KT([])}return!o&&Lg.supports(d)?new Lg(d):new qp(d)};function AP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Mw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=c[f];if(m===void 0||d&&AP(d,f))continue;const x={delay:n,...Bp(a||{},f)};let w=!1;if(window.MotionHandoffAnimation){const g=iw(e);if(g){const h=window.MotionHandoffAnimation(g,f,se);h!==null&&(x.startTime=h,w=!0)}}Rd(e,f),p.start(eh(f,p,m,e.shouldReduceMotion&&nw.has(f)?{type:!1}:x,e,w));const S=p.animation;S&&u.push(S)}return l&&Promise.all(u).then(()=>{se.update(()=>{l&&l5(e,l)})}),u}function Wd(e,t,n={}){var r;const i=Jl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(Mw(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=o;return LP(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function LP(e,t,n=0,r=0,i=1,o){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(IP).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Wd(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function IP(e,t){return e.sortNodePosition(t)}function _P(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Wd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Wd(e,t,n);else{const i=typeof t=="function"?Jl(e,t,n.custom):t;r=Promise.all(Mw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const MP=Pp.length;function Ow(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ow(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<MP;n++){const r=Pp[n],i=e.props[r];(la(i)||i===!1)&&(t[r]=i)}return t}const OP=[...Tp].reverse(),RP=Tp.length;function $P(e){return t=>Promise.all(t.map(({animation:n,options:r})=>_P(e,n,r)))}function NP(e){let t=$P(e),n=Ig(),r=!0;const i=c=>(u,d)=>{var f;const p=Jl(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:x,...w}=p;u={...u,...w,...x}}return u};function o(c){t=c(e)}function a(c){const{props:u}=e,d=Ow(e.parent)||{},f=[],p=new Set;let m={},x=1/0;for(let S=0;S<RP;S++){const g=OP[S],h=n[g],v=u[g]!==void 0?u[g]:d[g],j=la(v),T=g===c?h.isActive:null;T===!1&&(x=S);let C=v===d[g]&&v!==u[g]&&j;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...m},!h.isActive&&T===null||!v&&!h.prevProp||Xl(v)||typeof v=="boolean")continue;const k=BP(h.prevProp,v);let P=k||g===c&&h.isActive&&!C&&j||S>x&&j,A=!1;const L=Array.isArray(v)?v:[v];let N=L.reduce(i(g),{});T===!1&&(N={});const{prevResolvedValues:F={}}=h,Q={...F,...N},U=R=>{P=!0,p.has(R)&&(A=!0,p.delete(R)),h.needsAnimating[R]=!0;const E=e.getValue(R);E&&(E.liveStyle=!1)};for(const R in Q){const E=N[R],M=F[R];if(m.hasOwnProperty(R))continue;let O=!1;_d(E)&&_d(M)?O=!K1(E,M):O=E!==M,O?E!=null?U(R):p.add(R):E!==void 0&&p.has(R)?U(R):h.protectedKeys[R]=!0}h.prevProp=v,h.prevResolvedValues=N,h.isActive&&(m={...m,...N}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(C&&k)||A)&&f.push(...L.map(R=>({animation:R,options:{type:g}})))}if(p.size){const S={};p.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),S[g]=h??null}),f.push({animation:S})}let w=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ig(),r=!0}}}function BP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!K1(t,e):!1}function nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ig(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class VP extends qn{constructor(t){super(t),t.animationState||(t.animationState=NP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Xl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let FP=0;class zP extends qn{constructor(){super(...arguments),this.id=FP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const WP={animation:{Feature:VP},exit:{Feature:zP}};function fa(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ka(e){return{point:{x:e.pageX,y:e.pageY}}}const UP=e=>t=>zp(t)&&e(t,ka(t));function Bo(e,t,n,r){return fa(e,t,UP(n),r)}const _g=(e,t)=>Math.abs(e-t);function HP(e,t){const n=_g(e.x,t.x),r=_g(e.y,t.y);return Math.sqrt(n**2+r**2)}class Rw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=iu(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=HP(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:x}=f,{timestamp:w}=Be;this.history.push({...x,timestamp:w});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ru(p,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=iu(f.type==="pointercancel"?this.lastMoveEventInfo:ru(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,S),x&&x(f,S)},!zp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=ka(t),l=ru(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=Be;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,iu(l,this.history)),this.removeListeners=ja(Bo(this.contextWindow,"pointermove",this.handlePointerMove),Bo(this.contextWindow,"pointerup",this.handlePointerUp),Bo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Yn(this.updatePoint)}}function ru(e,t){return t?{point:t(e.point)}:e}function Mg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function iu({point:e},t){return{point:e,delta:Mg(e,$w(t)),offset:Mg(e,YP(t)),velocity:GP(t,.1)}}function YP(e){return e[0]}function $w(e){return e[e.length-1]}function GP(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=$w(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>hn(t)));)n--;if(!r)return{x:0,y:0};const o=mn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const Nw=1e-4,KP=1-Nw,QP=1+Nw,Bw=.01,XP=0-Bw,ZP=0+Bw;function vt(e){return e.max-e.min}function JP(e,t,n){return Math.abs(e-t)<=n}function Og(e,t,n,r=.5){e.origin=r,e.originPoint=he(t.min,t.max,e.origin),e.scale=vt(n)/vt(t),e.translate=he(n.min,n.max,e.origin)-e.originPoint,(e.scale>=KP&&e.scale<=QP||isNaN(e.scale))&&(e.scale=1),(e.translate>=XP&&e.translate<=ZP||isNaN(e.translate))&&(e.translate=0)}function Vo(e,t,n,r){Og(e.x,t.x,n.x,r?r.originX:void 0),Og(e.y,t.y,n.y,r?r.originY:void 0)}function Rg(e,t,n){e.min=n.min+t.min,e.max=e.min+vt(t)}function qP(e,t,n){Rg(e.x,t.x,n.x),Rg(e.y,t.y,n.y)}function $g(e,t,n){e.min=t.min-n.min,e.max=e.min+vt(t)}function Fo(e,t,n){$g(e.x,t.x,n.x),$g(e.y,t.y,n.y)}function e4(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?he(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?he(n,e,r.max):Math.min(e,n)),e}function Ng(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function t4(e,{top:t,left:n,bottom:r,right:i}){return{x:Ng(e.x,n,i),y:Ng(e.y,t,r)}}function Bg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function n4(e,t){return{x:Bg(e.x,t.x),y:Bg(e.y,t.y)}}function r4(e,t){let n=.5;const r=vt(e),i=vt(t);return i>r?n=Mi(t.min,t.max-r,e.min):r>i&&(n=Mi(e.min,e.max-i,t.min)),wn(0,1,n)}function i4(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ud=.35;function o4(e=Ud){return e===!1?e=0:e===!0&&(e=Ud),{x:Vg(e,"left","right"),y:Vg(e,"top","bottom")}}function Vg(e,t,n){return{min:Fg(e,t),max:Fg(e,n)}}function Fg(e,t){return typeof e=="number"?e:e[t]||0}const zg=()=>({translate:0,scale:1,origin:0,originPoint:0}),li=()=>({x:zg(),y:zg()}),Wg=()=>({min:0,max:0}),we=()=>({x:Wg(),y:Wg()});function jt(e){return[e("x"),e("y")]}function Vw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function a4({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function s4(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ou(e){return e===void 0||e===1}function Hd({scale:e,scaleX:t,scaleY:n}){return!ou(e)||!ou(t)||!ou(n)}function hr(e){return Hd(e)||Fw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Fw(e){return Ug(e.x)||Ug(e.y)}function Ug(e){return e&&e!=="0%"}function wl(e,t,n){const r=e-n,i=t*r;return n+i}function Hg(e,t,n,r,i){return i!==void 0&&(e=wl(e,i,r)),wl(e,n,r)+t}function Yd(e,t=0,n=1,r,i){e.min=Hg(e.min,t,n,r,i),e.max=Hg(e.max,t,n,r,i)}function zw(e,{x:t,y:n}){Yd(e.x,t.translate,t.scale,t.originPoint),Yd(e.y,n.translate,n.scale,n.originPoint)}const Yg=.999999999999,Gg=1.0000000000001;function l4(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let l=0;l<i;l++){o=n[l],a=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ui(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,zw(e,a)),r&&hr(o.latestValues)&&ui(e,o.latestValues))}t.x<Gg&&t.x>Yg&&(t.x=1),t.y<Gg&&t.y>Yg&&(t.y=1)}function ci(e,t){e.min=e.min+t,e.max=e.max+t}function Kg(e,t,n,r,i=.5){const o=he(e.min,e.max,i);Yd(e,t,n,o,r)}function ui(e,t){Kg(e.x,t.x,t.scaleX,t.scale,t.originX),Kg(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ww(e,t){return Vw(s4(e.getBoundingClientRect(),t))}function c4(e,t,n){const r=Ww(e,n),{scroll:i}=t;return i&&(ci(r.x,i.offset.x),ci(r.y,i.offset.y)),r}const Uw=({current:e})=>e?e.ownerDocument.defaultView:null,u4=new WeakMap;class d4{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ka(d).point)},o=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:x}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=r5(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(on.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[S];v&&(g=vt(v)*(parseFloat(g)/100))}}this.originPoint[S]=g}),x&&se.postRender(()=>x(d,f)),Rd(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:x,onDrag:w}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:S}=f;if(m&&this.currentDirection===null){this.currentDirection=f4(S),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),w&&w(d,f)},l=(d,f)=>this.stop(d,f),c=()=>jt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Rw(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Uw(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&se.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ts(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=e4(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&ai(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=t4(i.layoutBox,n):this.constraints=!1,this.elastic=o4(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&jt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=i4(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ai(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=c4(r,i.root,this.visualElement.getTransformPagePoint());let a=n4(i.layout.layoutBox,o);if(n){const l=n(a4(a));this.hasMutatedConstraints=!!l,l&&(a=Vw(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=jt(d=>{if(!ts(d,n,this.currentDirection))return;let f=c&&c[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Rd(this.visualElement,t),r.start(eh(t,r,0,n,this.visualElement,!1))}stopAnimation(){jt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){jt(n=>{const{drag:r}=this.getProps();if(!ts(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];o.set(t[n]-he(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ai(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};jt(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=r4({min:c,max:c},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),jt(a=>{if(!ts(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(he(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;u4.set(this.visualElement,this);const t=this.visualElement.current,n=Bo(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();ai(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const a=fa(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(jt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Ud,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:l}}}function ts(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function f4(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class p4 extends qn{constructor(t){super(t),this.removeGroupControls=mt,this.removeListeners=mt,this.controls=new d4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qg=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class h4 extends qn{constructor(){super(...arguments),this.removePointerDownListener=mt}onPointerDown(t){this.session=new Rw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Uw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Qg(t),onStart:Qg(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&se.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=Bo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Os={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Xg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const io={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Xg(e,t.target.x),r=Xg(e,t.target.y);return`${n}% ${r}%`}},m4={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gn.parse(e);if(i.length>5)return r;const o=Gn.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=he(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class g4 extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;RT(v4),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Os.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||se.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Ep.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Hw(e){const[t,n]=P1(),r=b.useContext(bp);return s.jsx(g4,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(O1),isPresent:t,safeToRemove:n})}const v4={borderRadius:{...io,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:io,borderTopRightRadius:io,borderBottomLeftRadius:io,borderBottomRightRadius:io,boxShadow:m4};function y4(e,t,n){const r=Ke(e)?e:ua(e);return r.start(eh("",r,t,n)),r.animation}function x4(e){return e instanceof SVGElement&&e.tagName!=="svg"}const w4=(e,t)=>e.depth-t.depth;class b4{constructor(){this.children=[],this.isDirty=!1}add(t){Wp(this.children,t),this.isDirty=!0}remove(t){Up(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(w4),this.isDirty=!1,this.children.forEach(t)}}function S4(e,t){const n=an.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yn(r),e(o-t))};return se.read(r,!0),()=>Yn(r)}const Yw=["TopLeft","TopRight","BottomLeft","BottomRight"],j4=Yw.length,Zg=e=>typeof e=="string"?parseFloat(e):e,Jg=e=>typeof e=="number"||z.test(e);function k4(e,t,n,r,i,o){i?(e.opacity=he(0,n.opacity!==void 0?n.opacity:1,C4(r)),e.opacityExit=he(t.opacity!==void 0?t.opacity:1,0,T4(r))):o&&(e.opacity=he(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<j4;a++){const l=`border${Yw[a]}Radius`;let c=qg(t,l),u=qg(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Jg(c)===Jg(u)?(e[l]=Math.max(he(Zg(c),Zg(u),r),0),(on.test(u)||on.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=he(t.rotate||0,n.rotate||0,r))}function qg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const C4=Gw(0,.5,dw),T4=Gw(.5,.95,mt);function Gw(e,t,n){return r=>r<e?0:r>t?1:n(Mi(e,t,r))}function e0(e,t){e.min=t.min,e.max=t.max}function St(e,t){e0(e.x,t.x),e0(e.y,t.y)}function t0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function n0(e,t,n,r,i){return e-=t,e=wl(e,1/n,r),i!==void 0&&(e=wl(e,1/i,r)),e}function P4(e,t=0,n=1,r=.5,i,o=e,a=e){if(on.test(t)&&(t=parseFloat(t),t=he(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=he(o.min,o.max,r);e===o&&(l-=t),e.min=n0(e.min,t,n,l,i),e.max=n0(e.max,t,n,l,i)}function r0(e,t,[n,r,i],o,a){P4(e,t[n],t[r],t[i],t.scale,o,a)}const D4=["x","scaleX","originX"],E4=["y","scaleY","originY"];function i0(e,t,n,r){r0(e.x,t,D4,n?n.x:void 0,r?r.x:void 0),r0(e.y,t,E4,n?n.y:void 0,r?r.y:void 0)}function o0(e){return e.translate===0&&e.scale===1}function Kw(e){return o0(e.x)&&o0(e.y)}function a0(e,t){return e.min===t.min&&e.max===t.max}function A4(e,t){return a0(e.x,t.x)&&a0(e.y,t.y)}function s0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Qw(e,t){return s0(e.x,t.x)&&s0(e.y,t.y)}function l0(e){return vt(e.x)/vt(e.y)}function c0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class L4{constructor(){this.members=[]}add(t){Wp(this.members,t),t.scheduleRender()}remove(t){if(Up(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function I4(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),x&&(r+=`skewY(${x}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const mr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Co=typeof window<"u"&&window.MotionDebug!==void 0,au=["","X","Y","Z"],_4={visibility:"hidden"},u0=1e3;let M4=0;function su(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Xw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=iw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Xw(r)}function Zw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=M4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Co&&(mr.totalNodes=mr.resolvedTargetDeltas=mr.recalculatedProjection=0),this.nodes.forEach($4),this.nodes.forEach(z4),this.nodes.forEach(W4),this.nodes.forEach(N4),Co&&window.MotionDebug.record(mr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new b4)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Hp),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=x4(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=S4(p,250),Os.hasAnimatedSinceResize&&(Os.hasAnimatedSinceResize=!1,this.nodes.forEach(f0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||K4,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Qw(this.targetLayout,x)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const j={...Bp(w,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else p||f0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(U4),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Xw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(d0);return}this.isUpdating||this.nodes.forEach(V4),this.isUpdating=!1,this.nodes.forEach(F4),this.nodes.forEach(O4),this.nodes.forEach(R4),this.clearAllSnapshots();const l=an.now();Be.delta=wn(0,1e3/60,l-Be.timestamp),Be.timestamp=l,Be.isProcessing=!0,Zc.update.process(Be),Zc.preRender.process(Be),Zc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ep.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(B4),this.sharedNodes.forEach(H4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Kw(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(l||hr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),Q4(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:l}=this.options;if(!l)return we();const c=l.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(X4))){const{scroll:d}=this.root;d&&(ci(c.x,d.offset.x),ci(c.y,d.offset.y))}return c}removeElementScroll(a){var l;const c=we();if(St(c,a),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&St(c,a),ci(c.x,f.offset.x),ci(c.y,f.offset.y))}return c}applyTransform(a,l=!1){const c=we();St(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ui(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),hr(d.latestValues)&&ui(c,d.latestValues)}return hr(this.latestValues)&&ui(c,this.latestValues),c}removeTransform(a){const l=we();St(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!hr(u.latestValues))continue;Hd(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();St(d,f),i0(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return hr(this.latestValues)&&i0(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Fo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),qP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),zw(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Fo(this.relativeTargetOrigin,this.target,m.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Co&&mr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Hd(this.parent.latestValues)||Fw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;St(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;l4(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=we());const{target:x}=l;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(t0(this.prevProjectionDelta.x,this.projectionDelta.x),t0(this.prevProjectionDelta.y,this.projectionDelta.y)),Vo(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!c0(this.projectionDelta.x,this.prevProjectionDelta.x)||!c0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Co&&mr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=li(),this.projectionDelta=li(),this.projectionDeltaWithTransform=li()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=li();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=we(),m=c?c.source:void 0,x=this.layout?this.layout.source:void 0,w=m!==x,S=this.getStack(),g=!S||S.members.length<=1,h=!!(w&&!g&&this.options.crossfade===!0&&!this.path.some(G4));this.animationProgress=0;let v;this.mixTargetDelta=j=>{const T=j/1e3;p0(f.x,a.x,T),p0(f.y,a.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Y4(this.relativeTarget,this.relativeTargetOrigin,p,T),v&&A4(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),St(v,this.relativeTarget)),w&&(this.animationValues=d,k4(d,u,this.latestValues,T,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{Os.hasAnimatedSinceResize=!0,this.currentAnimation=y4(0,u0,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(u0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&Jw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||we();const f=vt(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=vt(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}St(l,c),ui(l,d),Vo(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new L4),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&su("z",a,u,this.animationValues);for(let d=0;d<au.length;d++)su(`rotate${au[d]}`,a,u,this.animationValues),su(`skew${au[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return _4;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=_s(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=_s(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!hr(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=I4(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y:x}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in ml){if(p[w]===void 0)continue;const{correct:S,applyTo:g}=ml[w],h=u.transform==="none"?p[w]:S(p[w],f);if(g){const v=g.length;for(let j=0;j<v;j++)u[g[j]]=h}else u[w]=h}return this.options.layoutId&&(u.pointerEvents=f===this?_s(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(d0),this.root.sharedNodes.clear()}}}function O4(e){e.updateLayout()}function R4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?jt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=vt(p);p.min=r[f].min,p.max=p.min+m}):Jw(o,n.layoutBox,r)&&jt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=vt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const l=li();Vo(l,r,n.layoutBox);const c=li();a?Vo(c,e.applyTransform(i,!0),n.measuredBox):Vo(c,r,n.layoutBox);const u=!Kw(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const x=we();Fo(x,n.layoutBox,p.layoutBox);const w=we();Fo(w,r,m.layoutBox),Qw(x,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function $4(e){Co&&mr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function N4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function B4(e){e.clearSnapshot()}function d0(e){e.clearMeasurements()}function V4(e){e.isLayoutDirty=!1}function F4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function f0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function z4(e){e.resolveTargetDelta()}function W4(e){e.calcProjection()}function U4(e){e.resetSkewAndRotation()}function H4(e){e.removeLeadSnapshot()}function p0(e,t,n){e.translate=he(t.translate,0,n),e.scale=he(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function h0(e,t,n,r){e.min=he(t.min,n.min,r),e.max=he(t.max,n.max,r)}function Y4(e,t,n,r){h0(e.x,t.x,n.x,r),h0(e.y,t.y,n.y,r)}function G4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const K4={duration:.45,ease:[.4,0,.1,1]},m0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),g0=m0("applewebkit/")&&!m0("chrome/")?Math.round:mt;function v0(e){e.min=g0(e.min),e.max=g0(e.max)}function Q4(e){v0(e.x),v0(e.y)}function Jw(e,t,n){return e==="position"||e==="preserve-aspect"&&!JP(l0(t),l0(n),.2)}function X4(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Z4=Zw({attachResizeListener:(e,t)=>fa(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),lu={current:void 0},qw=Zw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!lu.current){const e=new Z4({});e.mount(window),e.setOptions({layoutScroll:!0}),lu.current=e}return lu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),J4={pan:{Feature:h4},drag:{Feature:p4,ProjectionNode:qw,MeasureLayout:Hw}};function y0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&se.postRender(()=>o(t,ka(t)))}class q4 extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=JT(t,n=>(y0(this.node,n,"Start"),r=>y0(this.node,r,"End"))))}unmount(){}}class eD extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ja(fa(this.node.current,"focus",()=>this.onFocus()),fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function x0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&se.postRender(()=>o(t,ka(t)))}class tD extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=n5(t,n=>(x0(this.node,n,"Start"),(r,{success:i})=>x0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Gd=new WeakMap,cu=new WeakMap,nD=e=>{const t=Gd.get(e.target);t&&t(e)},rD=e=>{e.forEach(nD)};function iD({root:e,...t}){const n=e||document;cu.has(n)||cu.set(n,{});const r=cu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(rD,{root:e,...t})),r[i]}function oD(e,t,n){const r=iD(t);return Gd.set(e,n),r.observe(e),()=>{Gd.delete(e),r.unobserve(e)}}const aD={some:0,all:1};class sD extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:aD[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return oD(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(lD(t,n))&&this.startObserver()}unmount(){}}function lD({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const cD={inView:{Feature:sD},tap:{Feature:tD},focus:{Feature:eD},hover:{Feature:q4}},uD={layout:{ProjectionNode:qw,MeasureLayout:Hw}},Kd={current:null},e2={current:!1};function dD(){if(e2.current=!0,!!kp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Kd.current=e.matches;e.addListener(t),t()}else Kd.current=!1}const fD=[...Cw,He,Gn],pD=e=>fD.find(kw(e)),w0=new WeakMap;function hD(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ke(i))e.addValue(r,i);else if(Ke(o))e.addValue(r,ua(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,ua(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const b0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class mD{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=an.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,se.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Zl(n),this.isVariantNode=_1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const x=p[m];c[m]!==void 0&&Ke(x)&&x.set(c[m],!1)}}mount(t){this.current=t,w0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),e2.current||dD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Kd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){w0.delete(this.current),this.projection&&this.projection.unmount(),Yn(this.notifyUpdate),Yn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Or.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Oi){const n=Oi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<b0.length;r++){const i=b0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=hD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ua(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Sw(i)||pw(i))?i=parseFloat(i):!pD(i)&&Gn.test(n)&&(i=xw(t,n)),this.setBaseTarget(t,Ke(i)?i.get():i)),Ke(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=Lp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ke(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Hp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class t2 extends mD{constructor(){super(...arguments),this.KeyframeResolver=Tw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ke(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function gD(e){return window.getComputedStyle(e)}class vD extends t2{constructor(){super(...arguments),this.type="html",this.renderInstance=z1}readValueFromInstance(t,n){if(Or.has(n)){const r=Xp(n);return r&&r.default||0}else{const r=gD(t),i=(B1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Ww(t,n)}build(t,n,r){Mp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Np(t,n,r)}}class yD extends t2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=we}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Or.has(n)){const r=Xp(n);return r&&r.default||0}return n=W1.has(n)?n:Dp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Y1(t,n,r)}build(t,n,r){Op(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){U1(t,n,r,i)}mount(t){this.isSVGTag=$p(t.tagName),super.mount(t)}}const xD=(e,t)=>Ap(e)?new yD(t):new vD(t,{allowProjection:e!==b.Fragment}),wD=HT({...WP,...cD,...J4,...uD},xD),$=aT(wD),bD=y($.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,SD=y.div`
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
`,jD=y(fp)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,kD=y.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,CD=y.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,TD=y($.button)`
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
`,PD=y($.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,DD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"5"}),s.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),s.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),s.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),s.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),s.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),s.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),s.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),s.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),ED=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),AD=()=>{const{isDark:e,toggleTheme:t}=pp();return s.jsx(bD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:s.jsxs(SD,{children:[s.jsx(jD,{to:"/","aria-label":"Go to homepage",children:s.jsx(kD,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),s.jsx(CD,{}),s.jsx(TD,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:s.jsx(Le,{mode:"wait",children:s.jsx(PD,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?s.jsx(ED,{}):s.jsx(DD,{})},e?"moon":"sun")})})]})})},LD=y($.div)`
  position: relative;
`,ID=y(fp)`
  display: block;
  text-decoration: none;
  color: inherit;
`,n2=y($.div)`
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
`,_D=y($.div)`
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

  ${n2}:hover &::before {
    opacity: 0.3;
  }
`,MD=y.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,OD={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},RD={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},$D=({title:e,icon:t,to:n})=>s.jsx(LD,{variants:OD,whileHover:"hover",whileTap:"tap",children:s.jsx(ID,{to:n,children:s.jsxs(n2,{variants:RD,children:[s.jsx(_D,{children:t}),s.jsx(MD,{children:e})]})})}),ND=y.div`
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
`,BD=y($.div)`
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
`,VD={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},FD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),s.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),s.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),s.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),s.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),s.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),s.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),s.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),s.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),s.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),zD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),s.jsx("path",{d:"M1 10h22"}),s.jsx("path",{d:"M17 14h.01"})]}),WD=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),UD=[{id:"tax-manager",title:"Tax Manager",icon:s.jsx(FD,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:s.jsx(zD,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:s.jsx(WD,{}),to:"/canvas-manager"}],HD=()=>s.jsx(ND,{children:s.jsx(BD,{variants:VD,initial:"hidden",animate:"visible",children:UD.map(e=>s.jsx($D,{title:e.title,icon:e.icon,to:e.to},e.id))})}),r2=y.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;y.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Rs=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],S0=75e3,di=4,YD=12e5,GD=6e4,j0=5e6,k0=10,KD=12,QD=1800;function Cr(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const o=r.slice(-3),a=r.slice(0,-3);if(a.length>0){const l=[];let c=a;for(;c.length>0;)c.length>=2?(l.unshift(c.slice(-2)),c=c.slice(0,-2)):(l.unshift(c),c="");i=l.join(",")+","+o}else i=o;return(t?"-":"")+i}function H(e){return"₹"+Cr(e)}function G(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,o]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+Cr(parseInt(i))+"."+o}function C0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:Cr(e)}function XD(e){for(let t=Rs.length-1;t>=0;t--)if(e>Rs[t].from)return Rs[t].rate;return 0}function ZD(e){const t=[];let n=e,r=0;for(const i of Rs){const o=i.from,l=(i.to??1/0)-o;if(n<=0){t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,l),u=c*i.rate/100;t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function JD(e,t){if(t>j0){const r=e*(1+k0/100)*(1+di/100),i=t-j0,a=(e+i)*(1+di/100),l=a<r,c=Math.min(r,a),u=c/(1+di/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:k0,surchargeAmount:d,marginalReliefApplied:l,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(di/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function T0(e,t,n,r,i,o,a){const l=e*t/100,c=e-l;let u=0;i==="percentage"?u=e*o/100:i==="amount"&&(u=o);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=l*KD/100,p=f):(f=QD*12,p=f));const m=e-p,x=a.map(re=>({name:re.name,amount:re.amount*12})),w=x.reduce((re,le)=>re+le.amount,0),S=Math.max(0,m-S0),{slabs:g,totalTax:h}=ZD(S);let v=0,j=h;S<=YD&&(v=Math.min(h,GD),j=Math.max(0,h-v));const{surchargeApplicable:T,surchargeRate:C,surchargeAmount:k,marginalReliefApplied:P,taxAfterSurcharge:A,cess:L,totalTax:N}=JD(j,S),F=f+p,Q=N,U=f+N+w,D=m-f-N-w,_=D/12,R=m>0?N/m*100:0,E=XD(S);let M=0,O=u;if(u>0&&E>0){let re=u*E/100;T&&(re=re*(1+C/100)),M=re*(1+di/100),O=u-M}const V=D+O,W=V/12;return{baseSalary:e,basicSalary:l,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:m,standardDeduction:S0,additionalDeductions:x,totalAdditionalDeductions:w,taxableIncome:S,slabs:g,taxBeforeSurcharge:h,surchargeApplicable:T,surchargeRate:C,surchargeAmount:k,marginalReliefApplied:P,taxAfterSurcharge:A,cessRate:di,cess:L,totalTax:N,rebate87A:v,totalPFDeduction:F,totalTaxDeduction:Q,totalDeductions:U,netSalaryYearly:D,netSalaryMonthly:_,effectiveTaxRate:R,bonusTaxRate:E,bonusTaxAmount:M,bonusAfterTax:O,totalIncomeYearly:V,totalIncomeMonthly:W}}function qD(e){const t=T0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=T0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const th="taxCalculatorInput";function eE(e){localStorage.setItem(th,JSON.stringify(e))}function tE(){localStorage.removeItem(th)}function i2(){const e=localStorage.getItem(th);if(e)try{return JSON.parse(e)}catch{return null}return null}const nE={financialYear:"FY 2025-26"},rE=y($.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,oo=y.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,ao=y.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,so=y.div`
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
`,lo=y.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,iE=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,Vr=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,P0=y.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,rr=y.input`
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
`,uu=y.div`
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
`,du=y.div`
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
`,D0=y.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,co=y($.button)`
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
`,oE=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,fu=y($.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,pu=y($.button)`
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
`,aE=y($.button)`
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
`,sE=y.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,lE=y($.button)`
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
`,cE=y($.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,uE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),dE=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),fE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),s.jsx("path",{d:"M12 8v13"}),s.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),s.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),pE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M8 12h8"})]}),hE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),s.jsx("polyline",{points:"16 7 22 7 22 13"})]}),mE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hu=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),bl={type:"spring",stiffness:300,damping:30,mass:.8},gE={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:bl}},vE={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...bl},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...bl},opacity:{duration:.1}}}},yE={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:bl},exit:{opacity:0,x:-20,transition:{duration:.15}}};function mu(e){const t=e.replace(/[^\d]/g,"");return t?Cr(parseInt(t)):""}function ns(e){return parseInt(e.replace(/,/g,""))||0}const xE=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=b.useState(""),[o,a]=b.useState("50"),[l,c]=b.useState("percentage"),[u,d]=b.useState("none"),[f,p]=b.useState(""),[m,x]=b.useState([]),[w,S]=b.useState(""),[g,h]=b.useState(!1),v=b.useRef(!1);b.useEffect(()=>{const D=i2();D&&(i(Cr(D.baseSalary)),a(D.basicPercentage.toString()),c(D.pfType),d(D.bonusType),p(D.bonusValue>0?D.bonusType==="amount"?Cr(D.bonusValue):D.bonusValue.toString():""),x(D.additionalDeductions.map(_=>({name:_.name,amount:Cr(_.amount)}))),S(D.hikePercentage>0?D.hikePercentage.toString():"")),h(!0)},[]),b.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{L()},100))},[g,n,r]);const j=D=>{i(mu(D))},T=D=>{p(mu(D))},C=(D,_)=>{const R=[...m];R[D].amount=mu(_),x(R)},k=()=>{x([...m,{name:"",amount:""}])},P=D=>{x(m.filter((_,R)=>R!==D))},A=(D,_)=>{const R=[...m];R[D].name=_,x(R)},L=()=>{const D={baseSalary:ns(r),basicPercentage:parseFloat(o)||50,calculatePF:!0,pfType:l,bonusType:u,bonusValue:u==="amount"?ns(f):parseFloat(f)||0,additionalDeductions:m.filter(_=>_.name&&_.amount).map(_=>({name:_.name,amount:ns(_.amount)})),hikePercentage:parseFloat(w)||0};eE(D),e(D)},N=()=>{i(""),a("50"),c("percentage"),d("none"),p(""),x([]),S(""),tE(),t==null||t()},Q=ns(r)>0,U=r||m.length>0||u!=="none"||w;return s.jsxs(rE,{variants:gE,initial:"hidden",animate:"visible",children:[s.jsxs(oo,{children:[s.jsxs(ao,{children:[s.jsx(so,{$color:"#10b981",children:s.jsx(uE,{})}),s.jsx(lo,{children:"Salary Details"})]}),s.jsxs(iE,{children:[s.jsxs(Vr,{children:[s.jsx(P0,{children:"Yearly CTC *"}),s.jsx(uu,{children:s.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:D=>j(D.target.value)})})]}),s.jsxs(Vr,{children:[s.jsx(P0,{children:"Basic %"}),s.jsx(du,{children:s.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"50",value:o,onChange:D=>a(D.target.value),min:"0",max:"100"})})]})]})]}),s.jsxs(oo,{children:[s.jsxs(ao,{children:[s.jsx(so,{$color:"#3b82f6",children:s.jsx(dE,{})}),s.jsx(lo,{children:"Provident Fund"})]}),s.jsxs(D0,{children:[s.jsx(co,{$active:l==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),s.jsx(co,{$active:l==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),s.jsxs(oo,{children:[s.jsxs(ao,{children:[s.jsx(so,{$color:"#f59e0b",children:s.jsx(fE,{})}),s.jsx(lo,{children:"Bonus (Optional)"})]}),s.jsxs(D0,{children:[s.jsx(co,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),s.jsx(co,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),s.jsx(co,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),s.jsx(Le,{initial:!1,children:u!=="none"&&s.jsx($.div,{initial:"hidden",animate:"visible",exit:"exit",variants:vE,style:{overflow:"hidden",marginTop:"12px"},children:s.jsxs(fu,{children:[s.jsx(Vr,{style:{flex:1},children:u==="percentage"?s.jsx(du,{children:s.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:D=>p(D.target.value)})}):s.jsx(uu,{children:s.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:D=>T(D.target.value)})})}),s.jsx(Le,{children:f&&s.jsx(pu,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(hu,{})})})]})},"bonus-input")})]}),s.jsxs(oo,{children:[s.jsxs(ao,{children:[s.jsx(so,{$color:"#ec4899",children:s.jsx(pE,{})}),s.jsx(lo,{children:"Monthly Deductions"})]}),s.jsxs(oE,{children:[s.jsx(Le,{mode:"popLayout",children:m.map((D,_)=>s.jsxs(fu,{variants:yE,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[s.jsx(Vr,{style:{flex:1},children:s.jsx(rr,{type:"text",placeholder:"Name (e.g., Cab)",value:D.name,onChange:R=>A(_,R.target.value)})}),s.jsx(Vr,{style:{flex:1},children:s.jsx(uu,{children:s.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"Amount",value:D.amount,onChange:R=>C(_,R.target.value)})})}),s.jsx(pu,{onClick:()=>P(_),whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(hu,{})})]},_))}),s.jsxs(aE,{onClick:k,whileHover:{scale:1.01},whileTap:{scale:.99},children:[s.jsx(mE,{}),"Add Deduction"]})]})]}),s.jsxs(oo,{children:[s.jsxs(ao,{children:[s.jsx(so,{$color:"#8b5cf6",children:s.jsx(hE,{})}),s.jsx(lo,{children:"Hike / Appraisal"})]}),s.jsxs(fu,{children:[s.jsx(Vr,{style:{flex:1},children:s.jsx(du,{children:s.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:w,onChange:D=>S(D.target.value),min:"0",max:"200"})})}),s.jsx(Le,{children:w&&s.jsx(pu,{onClick:()=>S(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(hu,{})})})]})]}),s.jsxs(sE,{children:[s.jsx(lE,{onClick:L,disabled:!Q,whileHover:Q?{scale:1.02}:{},whileTap:Q?{scale:.98}:{},children:"Calculate Tax"}),s.jsx(Le,{children:U&&s.jsx(cE,{onClick:N,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},wE=y($.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ir=y($.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,or=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,ar=y.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,sr=y.div`
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
`,lr=y.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,cr=y.div`
  padding: 16px;
`,uo=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Yt=y.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:e})=>e?`${e}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:e})=>e||"var(--accent)"};
`,gu=y($.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:e})=>e||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,vu=y.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,yu=y.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,Fr=y.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,bE=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,zr=y.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,Wr=y.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,Ur=y.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Hr=y.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,sn=y.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,De=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,Ee=y.span`
  font-size: 14px;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  color: ${({$bold:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,J=y.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"#10b981":t?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,rt=y.div`
  text-align: right;
  flex-shrink: 0;
`,it=y.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,SE=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,E0=y($.div)`
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
`,kn=y.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:t})=>e?"#10b981":t?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,jE=y($.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: 2px;
  margin-top: 4px;
`,kE=y.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,CE=y($.div)`
  height: 100%;
  background: ${({$color:e})=>e};
`,TE=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,PE=y.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,DE=y.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,EE=y.span`
  font-size: 12px;
  color: var(--text-secondary);
`,AE=y.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,fo=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,Gt=y.div`
  padding: 14px;
  background: ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Kt=y.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,Qt=y.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,po=y.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,A0=y($.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,L0=y.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,LE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),IE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),s.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),s.jsx("path",{d:"M12 17.5v-11"})]}),_E=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),s.jsx("path",{d:"M3 9h18"}),s.jsx("path",{d:"M9 21V9"})]}),ME=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),s.jsx("path",{d:"M12 8v13"}),s.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),s.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),I0=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),s.jsx("polyline",{points:"16 7 22 7 22 13"})]}),OE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),RE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},ur={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},$E=({breakdown:e})=>{const[t,n]=b.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"#10b981":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",o=Math.max(...e.slabs.map(p=>p.taxInSlab),1),l=(()=>{const p=t==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:e.netSalaryYearly*p,color:"#10b981"},{label:"Tax",value:e.totalTax*p,color:"#4361A5"},{label:"PF",value:e.employeePF*p,color:"#3BB4B1"}];return e.totalAdditionalDeductions>0&&m.push({label:"Other",value:e.totalAdditionalDeductions*p,color:"#7BA7D9"}),m})(),c=l.reduce((p,m)=>p+m.value,0),u=[];e.surchargeApplicable&&u.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&u.push(`<strong>Section 87A rebate</strong> of ${H(e.rebate87A)} applied`),e.effectiveTaxRate>0&&u.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const d=!!e.postHike,f=e.bonus>0;return s.jsxs(wE,{variants:RE,initial:"hidden",animate:"visible",children:[d&&s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#3b82f6",children:s.jsx(I0,{})}),s.jsx(lr,{children:"Base Salary (CTC)"})]}),s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),s.jsx(cr,{children:s.jsxs(fo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current"}),s.jsx(Qt,{children:H(e.baseSalary)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike"}),s.jsx(Qt,{children:H(e.postHike.baseSalary)}),s.jsxs(po,{children:["+",H(e.postHike.baseSalary-e.baseSalary)]})]})]})})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#10b981",children:s.jsx(LE,{})}),s.jsx(lr,{children:"In-Hand Salary"})]}),s.jsxs(uo,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(yu,{children:[s.jsx(Fr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Fr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsx(cr,{children:d?s.jsxs(fo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current"}),s.jsx(Qt,{children:G(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsxs(Kt,{children:["After ",e.hikePercentage,"% Hike"]}),s.jsx(Qt,{children:G(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),s.jsxs(po,{children:["+",H(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(gu,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:G(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),s.jsxs(vu,{children:[t==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),f&&s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#f59e0b",children:s.jsx(ME,{})}),s.jsx(lr,{children:"Bonus"})]}),d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),s.jsxs(cr,{children:[d?s.jsxs(s.Fragment,{children:[s.jsxs(fo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current Gross"}),s.jsx(Qt,{children:H(e.bonus)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike Gross"}),s.jsx(Qt,{children:H(e.postHike.bonus)}),s.jsxs(po,{children:["+",H(e.postHike.bonus-e.bonus)]})]})]}),s.jsx(sn,{}),s.jsxs(fo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current In-Hand"}),s.jsx(Qt,{children:G(e.bonusAfterTax)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike In-Hand"}),s.jsx(Qt,{children:G(e.postHike.bonusAfterTax)}),s.jsxs(po,{children:["+",H(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(gu,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:H(e.bonus)}),s.jsx(vu,{children:"Gross Bonus (before tax)"}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsxs(Ee,{children:["Tax Deducted (",e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess)"]}),s.jsxs(J,{$negative:!0,children:["-",G(e.bonusTaxAmount)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"In-Hand Bonus"}),s.jsx(J,{$highlight:!0,children:G(e.bonusAfterTax)})]})]}),s.jsx(sn,{}),s.jsx(A0,{style:{borderLeftColor:"#f59e0b"},children:s.jsxs(L0,{children:["Bonus is taxed at your ",s.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]})]}),f&&s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#8b5cf6",children:s.jsx(I0,{})}),s.jsx(lr,{children:"Total Combined Income"})]}),s.jsxs(uo,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsx(Yt,{children:"Yearly"})]})]}),s.jsxs(cr,{children:[d?s.jsxs(fo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current Total"}),s.jsx(Qt,{children:G(e.totalIncomeYearly)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike Total"}),s.jsx(Qt,{children:G(e.postHike.totalIncomeYearly)}),s.jsxs(po,{children:["+",H(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(gu,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:G(e.totalIncomeYearly)}),s.jsx(vu,{children:"Base salary + Bonus (after tax)"})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Base In-Hand (Yearly)"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:G(e.netSalaryYearly)}),s.jsxs(it,{$positive:!0,children:["→ ",G(e.postHike.netSalaryYearly)]})]}):s.jsx(J,{children:G(e.netSalaryYearly)})]}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Bonus In-Hand"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:G(e.bonusAfterTax)}),s.jsxs(it,{$positive:!0,children:["→ ",G(e.postHike.bonusAfterTax)]})]}):s.jsx(J,{children:G(e.bonusAfterTax)})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Total Combined"}),d?s.jsxs(rt,{children:[s.jsx(J,{$highlight:!0,children:G(e.totalIncomeYearly)}),s.jsxs(it,{$positive:!0,children:["→ ",G(e.postHike.totalIncomeYearly)]})]}):s.jsx(J,{$highlight:!0,children:G(e.totalIncomeYearly)})]})]})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#ec4899",children:s.jsx(_E,{})}),s.jsx(lr,{children:"Summary"})]}),s.jsxs(uo,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(yu,{children:[s.jsx(Fr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Fr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsxs(cr,{children:[s.jsxs(bE,{children:[s.jsxs(zr,{children:[s.jsx(Wr,{children:"Gross Salary"}),s.jsx(Ur,{children:H(e.grossSalary*r)}),d&&s.jsxs(Hr,{$positive:!0,children:["→ ",H(e.postHike.grossSalary*r)]})]}),s.jsxs(zr,{children:[s.jsx(Wr,{children:"Total Tax"}),s.jsx(Ur,{children:G(e.totalTax*r)}),d&&s.jsxs(Hr,{children:["→ ",G(e.postHike.totalTax*r)]})]}),s.jsxs(zr,{children:[s.jsx(Wr,{children:"Employee PF"}),s.jsx(Ur,{children:H(e.employeePF*r)}),d&&s.jsxs(Hr,{$positive:!0,children:["→ ",H(e.postHike.employeePF*r)]})]}),s.jsxs(zr,{children:[s.jsx(Wr,{children:"Employer PF"}),s.jsx(Ur,{children:H(e.employerPF*r)}),d&&s.jsxs(Hr,{$positive:!0,children:["→ ",H(e.postHike.employerPF*r)]})]}),s.jsxs(zr,{children:[s.jsx(Wr,{children:"Total PF"}),s.jsx(Ur,{children:H((e.employeePF+e.employerPF)*r)}),d&&s.jsxs(Hr,{$positive:!0,children:["→ ",H((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),s.jsxs(zr,{children:[s.jsx(Wr,{children:"Eff. Tax Rate"}),s.jsxs(Ur,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),d&&s.jsxs(Hr,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),s.jsx(sn,{}),s.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",t==="monthly"?"Monthly":"Yearly",")"]}),s.jsx(kE,{children:l.map((p,m)=>s.jsx(CE,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),s.jsx(TE,{children:l.map((p,m)=>s.jsxs(PE,{children:[s.jsx(DE,{$color:p.color}),s.jsx(EE,{children:p.label}),s.jsx(AE,{children:H(p.value)})]},m))}),u.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(sn,{}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:u.map((p,m)=>s.jsx(A0,{children:s.jsx(L0,{dangerouslySetInnerHTML:{__html:p}})},m))})]})]})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#10b981",children:s.jsx(OE,{})}),s.jsx(lr,{children:"Breakdown"})]}),s.jsxs(uo,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(yu,{children:[s.jsx(Fr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Fr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsxs(cr,{children:[s.jsxs(De,{children:[s.jsx(Ee,{children:"Base Salary (CTC)"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:H(e.baseSalary*r)}),s.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.baseSalary*r)]})]}):s.jsx(J,{children:H(e.baseSalary*r)})]}),e.employerPF>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Employer PF"}),d?s.jsxs(rt,{children:[s.jsxs(J,{$negative:!0,children:["-",H(e.employerPF*r)]}),s.jsxs(it,{children:["→ -",H(e.postHike.employerPF*r)]})]}):s.jsxs(J,{$negative:!0,children:["-",H(e.employerPF*r)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Gross Salary"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:H(e.grossSalary*r)}),s.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.grossSalary*r)]})]}):s.jsx(J,{children:H(e.grossSalary*r)})]}),t==="yearly"&&s.jsxs(s.Fragment,{children:[s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Standard Deduction"}),s.jsxs(J,{$negative:!0,children:["-",H(e.standardDeduction)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Taxable Income"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:H(e.taxableIncome)}),s.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.taxableIncome)]})]}):s.jsx(J,{children:H(e.taxableIncome)})]})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Income Tax"}),d?s.jsxs(rt,{children:[s.jsxs(J,{$negative:!0,children:["-",G(e.totalTax*r)]}),s.jsxs(it,{children:["→ -",G(e.postHike.totalTax*r)]})]}):s.jsxs(J,{$negative:!0,children:["-",G(e.totalTax*r)]})]}),e.employeePF>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Employee PF"}),d?s.jsxs(rt,{children:[s.jsxs(J,{$negative:!0,children:["-",H(e.employeePF*r)]}),s.jsxs(it,{children:["→ -",H(e.postHike.employeePF*r)]})]}):s.jsxs(J,{$negative:!0,children:["-",H(e.employeePF*r)]})]}),e.additionalDeductions.map((p,m)=>s.jsxs(De,{children:[s.jsxs(Ee,{children:["Less: ",p.name]}),s.jsxs(J,{$negative:!0,children:["-",H(p.amount*r)]})]},m)),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsxs(Ee,{$bold:!0,children:["Net In-Hand (",t==="monthly"?"Monthly":"Yearly",")"]}),d?s.jsxs(rt,{children:[s.jsx(J,{$highlight:!0,children:G(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)}),s.jsxs(it,{$positive:!0,children:["→ ",G(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)]})]}):s.jsx(J,{$highlight:!0,children:G(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]})]})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#3b82f6",children:s.jsx(IE,{})}),s.jsx(lr,{children:"Tax Slabs"})]}),s.jsxs(uo,{children:[s.jsx(Yt,{children:nE.financialYear}),d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]})]}),s.jsxs(cr,{children:[s.jsxs(SE,{children:[s.jsxs(E0,{$header:!0,children:[s.jsx(kn,{children:"Slab"}),s.jsx(kn,{$align:"center",children:"Rate"}),s.jsx(kn,{$align:"right",children:"Amount"}),s.jsx(kn,{$align:"right",children:"Tax"})]}),s.jsx(Le,{children:e.slabs.map((p,m)=>s.jsxs(E0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[s.jsxs(kn,{children:[C0(p.from)," - ",C0(p.to),p.taxableInSlab>0&&s.jsx(jE,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/o*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),s.jsxs(kn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),s.jsx(kn,{$align:"right",$muted:p.taxableInSlab===0,children:p.taxableInSlab>0?H(p.taxableInSlab):"-"}),s.jsx(kn,{$align:"right",$muted:p.taxInSlab===0,children:p.taxInSlab>0?H(p.taxInSlab):"-"})]},m))})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Tax Before Surcharge"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:G(e.taxBeforeSurcharge)}),s.jsxs(it,{children:["→ ",G(e.postHike.taxBeforeSurcharge)]})]}):s.jsx(J,{children:G(e.taxBeforeSurcharge)})]}),e.rebate87A>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Section 87A Rebate"}),s.jsxs(J,{$negative:!0,children:["-",H(e.rebate87A)]})]}),e.surchargeApplicable&&s.jsxs(De,{children:[s.jsxs(Ee,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&s.jsx(Yt,{$color:"#f59e0b",children:"Marginal Relief"})]}),d&&e.postHike.surchargeApplicable?s.jsxs(rt,{children:[s.jsx(J,{children:G(e.surchargeAmount)}),s.jsxs(it,{children:["→ ",G(e.postHike.surchargeAmount)]})]}):s.jsx(J,{children:G(e.surchargeAmount)})]}),s.jsxs(De,{children:[s.jsxs(Ee,{children:["Cess (",e.cessRate,"%)"]}),d?s.jsxs(rt,{children:[s.jsx(J,{children:G(e.cess)}),s.jsxs(it,{children:["→ ",G(e.postHike.cess)]})]}):s.jsx(J,{children:G(e.cess)})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Total Tax"}),d?s.jsxs(rt,{children:[s.jsx(J,{$highlight:!0,children:G(e.totalTax)}),s.jsxs(it,{children:["→ ",G(e.postHike.totalTax)]})]}):s.jsx(J,{$highlight:!0,children:G(e.totalTax)})]})]})]})]})},NE=y($.div)`
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
`,BE=y.div`
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
`,VE=y($.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,FE=y($.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,zE={type:"spring",stiffness:300,damping:30,mass:.8},WE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},_0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:zE}},UE=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(!1);b.useEffect(()=>{const a=i2();a&&a.baseSalary>0&&r(!0)},[]);const i=b.useCallback(a=>{const l=qD(a);t(l),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),o=b.useCallback(()=>{t(null)},[]);return s.jsx(NE,{variants:WE,initial:"hidden",animate:"visible",children:s.jsx(r2,{$maxWidth:"wide",children:s.jsxs(BE,{children:[s.jsx(VE,{variants:_0,children:s.jsx(xE,{onCalculate:i,onReset:o,autoCalculate:n})}),s.jsx(FE,{id:"results",variants:_0,children:e&&s.jsx($E,{breakdown:e},"results")})]})})})},Tr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],o2="expense-manager-transactions",a2="expense-manager-initial-balances",s2="expense-manager-initial-cc-bills",l2="expense-manager-cc-limits";function nh(e,t){return e===void 0?{amount:0,type:"billed",setupDate:t}:typeof e=="number"?{amount:e,type:"billed",setupDate:t}:e}const c2={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function xu(e){localStorage.setItem(o2,JSON.stringify(e))}function HE(){const e=localStorage.getItem(o2);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function M0(e){localStorage.setItem(a2,JSON.stringify(e))}function YE(){const e=localStorage.getItem(a2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function O0(e){localStorage.setItem(s2,JSON.stringify(e))}function GE(){const e=localStorage.getItem(s2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function R0(e){localStorage.setItem(l2,JSON.stringify(e))}function KE(){const e=localStorage.getItem(l2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function Ft(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function u2(e){return new Date(e+"T00:00:00")}function QE(e){return e===Ft(new Date)}function XE(e,t){if(!e.statementDate)return"";const n=u2(t),r=n.getFullYear(),i=n.getMonth(),o=n.getDate();let a=r,l=i;o<e.statementDate&&(l-=1,l<0&&(l=11,a-=1));const c=new Date(a,l,e.statementDate);return Ft(c)}function $0(e,t){const n=c2[e];if(!n)return"";const r=u2(t),i=r.getFullYear(),o=r.getMonth(),a=r.getDate();let l=i,c=o;a<n&&(c-=1,c<0&&(c=11,l-=1));const u=new Date(l,c,n);return Ft(u)}function ZE(e,t,n,r){const i=$0(e.id,n),o=t.filter(h=>h.date<=n&&h.accountId===e.id),a=o.filter(h=>h.type==="credit_card_spend"&&h.date<i).reduce((h,v)=>h+v.amount,0),l=o.filter(h=>h.type==="credit_card_spend"&&h.date>=i).reduce((h,v)=>h+v.amount,0),c=o.filter(h=>h.type==="cc_payment").reduce((h,v)=>h+v.amount,0),u=nh(r[e.id],n);let d=0,f=0;if(u.amount>0){const h=$0(e.id,u.setupDate),v=i===h,j=i>h&&new Date(i).getTime()-new Date(h).getTime()<45*24*60*60*1e3;u.type==="unbilled"?v?f=u.amount:j&&(d=u.amount):(v||j)&&(d=u.amount)}const p=l+f,m=a+d,x=p;let w=m,S=x,g=c;if(g>0){const h=Math.min(g,w);w-=h,g-=h}return g>0&&(S=Math.max(0,S-g)),{account:e,billDue:w,unbilled:S,totalOutstanding:w+S,cycleStart:i,cycleSpending:p}}function JE(e,t,n,r,i={}){const o=t.filter(l=>l.date<=n&&(l.accountId===e.id||l.linkedAccountId===e.id));let a=0;if(e.type==="bank"){a=r[e.id]||0;for(const l of o)l.accountId===e.id&&(l.type==="bank_credit"?a+=l.amount:l.type==="bank_debit"&&(a-=l.amount)),l.linkedAccountId===e.id&&l.type==="cc_payment"&&(a-=l.amount);return{account:e,balance:a}}else{a=-nh(i[e.id],n).amount;for(const p of o)p.accountId===e.id&&(p.type==="credit_card_spend"?a-=p.amount:p.type==="cc_payment"&&(a+=p.amount));const u=XE(e,n),f=o.filter(p=>p.date>u&&p.accountId===e.id&&p.type==="credit_card_spend").reduce((p,m)=>p+m.amount,0);return{account:e,balance:a,pendingBill:f,totalOutstanding:Math.abs(Math.min(0,a))}}}function qE(e,t,n,r={}){return Tr.map(i=>JE(i,e,t,n,r))}function eA(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function tA(e,t,n,r,i,o){return{id:eA(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:o,createdAt:new Date().toISOString()}}function ot(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function d2(e){return Tr.find(t=>t.id===e)}function f2(){return Tr.filter(e=>e.type==="bank")}function rh(){return Tr.filter(e=>e.type==="credit_card")}function nA(e,t,n,r={}){const i={version:"1.1",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n,ccLimits:r};return JSON.stringify(i,null,2)}function rA(e,t,n,r={}){const i=nA(e,t,n,r),o=new Blob([i],{type:"application/json"}),a=URL.createObjectURL(o),l=document.createElement("a"),c=new Date().toISOString().split("T")[0];l.href=a,l.download=`expense-backup-${c}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}function iA(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null||t.ccLimits!==void 0&&(typeof t.ccLimits!="object"||t.ccLimits===null))return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function oA(e){try{const t=JSON.parse(e);return iA(t)?t:null}catch{return null}}function p2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=p2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ec(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=p2(e))&&(r&&(r+=" "),r+=t);return r}const aA=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),o=Object.getOwnPropertyDescriptor(t,n);!sA(i,o)&&r||Object.defineProperty(e,n,o)},sA=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},lA=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},cA=(e,t)=>`/* Wrapped ${e}*/
${t}`,uA=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),dA=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),fA=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=cA.bind(null,r,t.toString());Object.defineProperty(i,"name",dA);const{writable:o,enumerable:a,configurable:l}=uA;Object.defineProperty(e,"toString",{value:i,writable:o,enumerable:a,configurable:l})};function pA(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))aA(e,t,i,n);return lA(e,t),fA(e,t,r),e}const rs=2147483647,hA=new WeakMap,wu=new WeakMap,mA=new WeakMap;function gA(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function h2(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>rs)throw new TypeError(`The \`maxAge\` option cannot exceed ${rs}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...o){var d;const a=t?t(o):o[0],l=gA(n,a);if(l)return l.data;const c=e.apply(this,o),u=typeof r=="function"?r(...o):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>rs)throw new TypeError(`The \`maxAge\` function result cannot exceed ${rs}.`)}if(n.set(a,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var m;n.delete(a),(m=wu.get(i))==null||m.delete(f)},u);(d=f.unref)==null||d.call(f);const p=wu.get(i)??new Set;p.add(f),wu.set(i,p)}return c};return pA(i,e,{ignoreNonConfigurable:!0}),hA.set(i,n),mA.set(i,t??(o=>o[0])),i}function vA(e){return typeof e=="string"}function yA(e,t,n){return n.indexOf(e)===t}function xA(e){return e.toLowerCase()===e}function N0(e){return e.indexOf(",")===-1?e:e.split(",")}function Qd(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Qd(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Qd(n)}if(e.indexOf("-")===-1||!xA(e))return e;var i=e.split("-"),o=i[0],a=i[1],l=a===void 0?"":a;return"".concat(o,"-").concat(l.toUpperCase())}function wA(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,o=i===void 0?"en-US":i,a=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],c=[],u=0,d=l;u<d.length;u++){var f=d[u];c=c.concat(N0(f))}var p=navigator.language,m=p&&N0(p);a=a.concat(c,m)}return r&&a.push(o),a.filter(vA).map(Qd).filter(yA)}var bA=h2(wA,{cacheKey:JSON.stringify});function SA(e){return bA(e)[0]||null}var m2=h2(SA,{cacheKey:JSON.stringify});function Sn(e,t,n){return function(i,o=n){const a=e(i)+o;return t(a)}}function Ca(e){return function(n){return new Date(e(n).getTime()-1)}}function Ta(e,t){return function(r){return[e(r),t(r)]}}function de(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function er(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function tc(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function Gi(e){const t=de(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const jA=Sn(de,Gi,-100),g2=Sn(de,Gi,100),ih=Ca(g2),kA=Sn(de,ih,-100),v2=Ta(Gi,ih);function tr(e){const t=de(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const y2=Sn(de,tr,-10),oh=Sn(de,tr,10),nc=Ca(oh),x2=Sn(de,nc,-10),w2=Ta(tr,nc);function Ki(e){const t=de(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const b2=Sn(de,Ki,-1),ah=Sn(de,Ki,1),rc=Ca(ah),S2=Sn(de,rc,-1),CA=Ta(Ki,rc);function sh(e,t){return function(r,i=t){const o=de(r),a=er(r)+i,l=new Date;return l.setFullYear(o,a,1),l.setHours(0,0,0,0),e(l)}}function Rr(e){const t=de(e),n=er(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const j2=sh(Rr,-1),lh=sh(Rr,1),Pa=Ca(lh),k2=sh(Pa,-1),TA=Ta(Rr,Pa);function PA(e,t){return function(r,i=t){const o=de(r),a=er(r),l=tc(r)+i,c=new Date;return c.setFullYear(o,a,l),c.setHours(0,0,0,0),e(c)}}function Da(e){const t=de(e),n=er(e),r=tc(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const DA=PA(Da,1),ch=Ca(DA),EA=Ta(Da,ch);function C2(e){return tc(Pa(e))}var Ve={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},AA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},uh=[0,1,2,3,4,5,6],bu=new Map;function LA(e){return function(n,r){var i=n||m2();bu.has(i)||bu.set(i,new Map);var o=bu.get(i);return o.has(e)||o.set(e,new Intl.DateTimeFormat(i||void 0,e).format),o.get(e)(r)}}function IA(e){var t=new Date(e);return new Date(t.setHours(12))}function $r(e){return function(t,n){return LA(e)(t,IA(n))}}var _A={day:"numeric"},MA={day:"numeric",month:"long",year:"numeric"},OA={month:"long"},RA={month:"long",year:"numeric"},$A={weekday:"short"},NA={weekday:"long"},BA={year:"numeric"},VA=$r(_A),FA=$r(MA),zA=$r(OA),T2=$r(RA),WA=$r($A),UA=$r(NA),ic=$r(BA),HA=uh[0],YA=uh[5],B0=uh[6];function pa(e,t){t===void 0&&(t=Ve.ISO_8601);var n=e.getDay();switch(t){case Ve.ISO_8601:return(n+6)%7;case Ve.ISLAMIC:return(n+1)%7;case Ve.HEBREW:case Ve.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function GA(e){var t=Gi(e);return de(t)}function KA(e){var t=tr(e);return de(t)}function Xd(e,t){t===void 0&&(t=Ve.ISO_8601);var n=de(e),r=er(e),i=e.getDate()-pa(e,t);return new Date(n,r,i)}function QA(e,t){t===void 0&&(t=Ve.ISO_8601);var n=t===Ve.GREGORY?Ve.GREGORY:Ve.ISO_8601,r=Xd(e,t),i=de(e)+1,o,a;do o=new Date(i,0,n===Ve.ISO_8601?4:1),a=Xd(o,t),i-=1;while(e<a);return Math.round((r.getTime()-a.getTime())/(864e5*7))+1}function Pr(e,t){switch(e){case"century":return Gi(t);case"decade":return tr(t);case"year":return Ki(t);case"month":return Rr(t);case"day":return Da(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function XA(e,t){switch(e){case"century":return jA(t);case"decade":return y2(t);case"year":return b2(t);case"month":return j2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function P2(e,t){switch(e){case"century":return g2(t);case"decade":return oh(t);case"year":return ah(t);case"month":return lh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ZA(e,t){switch(e){case"decade":return y2(t,-100);case"year":return b2(t,-10);case"month":return j2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function JA(e,t){switch(e){case"decade":return oh(t,100);case"year":return ah(t,10);case"month":return lh(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function D2(e,t){switch(e){case"century":return ih(t);case"decade":return nc(t);case"year":return rc(t);case"month":return Pa(t);case"day":return ch(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function qA(e,t){switch(e){case"century":return kA(t);case"decade":return x2(t);case"year":return S2(t);case"month":return k2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function eL(e,t){switch(e){case"decade":return x2(t,-100);case"year":return S2(t,-10);case"month":return k2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function V0(e,t){switch(e){case"century":return v2(t);case"decade":return w2(t);case"year":return CA(t);case"month":return TA(t);case"day":return EA(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function tL(e,t,n){var r=[t,n].sort(function(i,o){return i.getTime()-o.getTime()});return[Pr(e,r[0]),D2(e,r[1])]}function E2(e,t,n){return n.map(function(r){return(t||ic)(e,r)}).join(" – ")}function nL(e,t,n){return E2(e,t,v2(n))}function A2(e,t,n){return E2(e,t,w2(n))}function rL(e){return e.getDay()===new Date().getDay()}function L2(e,t){t===void 0&&(t=Ve.ISO_8601);var n=e.getDay();switch(t){case Ve.ISLAMIC:case Ve.HEBREW:return n===YA||n===B0;case Ve.ISO_8601:case Ve.GREGORY:return n===B0||n===HA;default:throw new Error("Unsupported calendar type.")}}var Xt="react-calendar__navigation";function iL(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?T2:r,o=e.formatYear,a=o===void 0?ic:o,l=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,m=e.navigationLabel,x=e.next2AriaLabel,w=x===void 0?"":x,S=e.next2Label,g=S===void 0?"»":S,h=e.nextAriaLabel,v=h===void 0?"":h,j=e.nextLabel,T=j===void 0?"›":j,C=e.prev2AriaLabel,k=C===void 0?"":C,P=e.prev2Label,A=P===void 0?"«":P,L=e.prevAriaLabel,N=L===void 0?"":L,F=e.prevLabel,Q=F===void 0?"‹":F,U=e.setActiveStartDate,D=e.showDoubleView,_=e.view,R=e.views,E=R.indexOf(_)>0,M=_!=="century",O=XA(_,t),V=M?ZA(_,t):void 0,W=P2(_,t),re=M?JA(_,t):void 0,le=function(){if(O.getFullYear()<0)return!0;var Pe=qA(_,t);return u&&u>=Pe}(),K=M&&function(){if(V.getFullYear()<0)return!0;var Pe=eL(_,t);return u&&u>=Pe}(),ce=c&&c<W,Re=M&&c&&c<re;function Xe(){U(O,"prev")}function Te(){U(V,"prev2")}function Wt(){U(W,"next")}function wt(){U(re,"next2")}function $e(Pe){var Qi=function(){switch(_){case"century":return nL(l,a,Pe);case"decade":return A2(l,a,Pe);case"year":return a(l,Pe);case"month":return i(l,Pe);default:throw new Error("Invalid view: ".concat(_,"."))}}();return m?m({date:Pe,label:Qi,locale:l||m2()||void 0,view:_}):Qi}function sc(){var Pe="".concat(Xt,"__label");return s.jsxs("button",{"aria-label":f,"aria-live":p,className:Pe,disabled:!E,onClick:n,style:{flexGrow:1},type:"button",children:[s.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--from"),children:$e(t)}),D?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"".concat(Pe,"__divider"),children:" – "}),s.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--to"),children:$e(W)})]}):null]})}return s.jsxs("div",{className:Xt,children:[A!==null&&M?s.jsx("button",{"aria-label":k,className:"".concat(Xt,"__arrow ").concat(Xt,"__prev2-button"),disabled:K,onClick:Te,type:"button",children:A}):null,Q!==null&&s.jsx("button",{"aria-label":N,className:"".concat(Xt,"__arrow ").concat(Xt,"__prev-button"),disabled:le,onClick:Xe,type:"button",children:Q}),sc(),T!==null&&s.jsx("button",{"aria-label":v,className:"".concat(Xt,"__arrow ").concat(Xt,"__next-button"),disabled:ce,onClick:Wt,type:"button",children:T}),g!==null&&M?s.jsx("button",{"aria-label":w,className:"".concat(Xt,"__arrow ").concat(Xt,"__next2-button"),disabled:Re,onClick:wt,type:"button",children:g}):null]})}var fi=function(){return fi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fi.apply(this,arguments)},oL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function F0(e){return"".concat(e,"%")}function dh(e){var t=e.children,n=e.className,r=e.count,i=e.direction,o=e.offset,a=e.style,l=e.wrap,c=oL(e,["children","className","count","direction","offset","style","wrap"]);return s.jsx("div",fi({className:n,style:fi({display:"flex",flexDirection:i,flexWrap:l?"wrap":"nowrap"},a)},c,{children:b.Children.map(t,function(u,d){var f=o&&d===0?F0(100*o/r):null;return b.cloneElement(u,fi(fi({},u.props),{style:{flexBasis:F0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function aL(e,t,n){return t&&t>e?t:n&&n<e?n:e}function ha(e,t){return t[0]<=e&&t[1]>=e}function sL(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function I2(e,t){return ha(e[0],t)||ha(e[1],t)}function z0(e,t,n){var r=I2(t,e),i=[];if(r){i.push(n);var o=ha(e[0],t),a=ha(e[1],t);o&&i.push("".concat(n,"Start")),a&&i.push("".concat(n,"End")),o&&a&&i.push("".concat(n,"BothEnds"))}return i}function lL(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function cL(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",o=[i];if(!n)return o;var a=new Date,l=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return V0(m,n)}();if(ha(a,l)&&o.push("".concat(i,"--now")),!t||!lL(t))return o;var c=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return V0(m,t)}();sL(c,l)?o.push("".concat(i,"--active")):I2(c,l)&&o.push("".concat(i,"--hasActive"));var u=z0(c,l,"".concat(i,"--range"));o.push.apply(o,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=z0(f,l,"".concat(i,"--hover"));o.push.apply(o,p)}return o}function oc(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,o=e.dateType,a=e.end,l=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,m=e.value,x=e.valueType,w=[],S=d;S<=a;S+=p){var g=i(S);w.push(u({classes:cL({date:g,dateType:o,hover:l,value:m,valueType:x}),date:g}))}return s.jsx(dh,{className:t,count:r,offset:c,wrap:!0,children:w})}function ac(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,o=e.formatAbbr,a=e.locale,l=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,m=e.style,x=e.tileClassName,w=e.tileContent,S=e.tileDisabled,g=e.view,h=b.useMemo(function(){var j={activeStartDate:t,date:i,view:g};return typeof x=="function"?x(j):x},[t,i,x,g]),v=b.useMemo(function(){var j={activeStartDate:t,date:i,view:g};return typeof w=="function"?w(j):w},[t,i,w,g]);return s.jsxs("button",{className:ec(r,h),disabled:u&&d(u)>i||l&&c(l)<i||(S==null?void 0:S({activeStartDate:t,date:i,view:g})),onClick:f?function(j){return f(i,j)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:m,type:"button",children:[o?s.jsx("abbr",{"aria-label":o(a,i),children:n}):n,v]})}var Zd=function(){return Zd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zd.apply(this,arguments)},uL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},W0="react-calendar__century-view__decades__decade";function dL(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,o=i===void 0?ic:i,a=uL(e,["classes","currentCentury","formatYear"]),l=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(W0),Gi(l).getFullYear()!==r&&u.push("".concat(W0,"--neighboringCentury")),s.jsx(ac,Zd({},a,{classes:u,maxDateTransform:nc,minDateTransform:tr,view:"century",children:A2(c,o,l)}))}var Jd=function(){return Jd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jd.apply(this,arguments)},U0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function fL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,o=e.valueType,a=U0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=GA(t),c=l+(r?119:99);return s.jsx(oc,{className:"react-calendar__century-view__decades",dateTransform:tr,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=U0(u,["date"]);return s.jsx(dL,Jd({},a,f,{activeStartDate:t,currentCentury:l,date:d}),d.getTime())},start:l,step:10,value:i,valueType:o})}var qd=function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)};function pL(e){function t(){return s.jsx(fL,qd({},e))}return s.jsx("div",{className:"react-calendar__century-view",children:t()})}var ef=function(){return ef=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ef.apply(this,arguments)},hL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},H0="react-calendar__decade-view__years__year";function mL(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,o=i===void 0?ic:i,a=hL(e,["classes","currentDecade","formatYear"]),l=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(H0),tr(l).getFullYear()!==r&&u.push("".concat(H0,"--neighboringDecade")),s.jsx(ac,ef({},a,{classes:u,maxDateTransform:rc,minDateTransform:Ki,view:"decade",children:o(c,l)}))}var tf=function(){return tf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},tf.apply(this,arguments)},Y0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function gL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,o=e.valueType,a=Y0(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=KA(t),c=l+(r?11:9);return s.jsx(oc,{className:"react-calendar__decade-view__years",dateTransform:Ki,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=Y0(u,["date"]);return s.jsx(mL,tf({},a,f,{activeStartDate:t,currentDecade:l,date:d}),d.getTime())},start:l,value:i,valueType:o})}var nf=function(){return nf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nf.apply(this,arguments)};function vL(e){function t(){return s.jsx(gL,nf({},e))}return s.jsx("div",{className:"react-calendar__decade-view",children:t()})}var rf=function(){return rf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rf.apply(this,arguments)},yL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},G0=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},xL="react-calendar__year-view__months__month";function wL(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?zA:r,o=e.formatMonthYear,a=o===void 0?T2:o,l=yL(e,["classes","formatMonth","formatMonthYear"]),c=l.date,u=l.locale;return s.jsx(ac,rf({},l,{classes:G0(G0([],n,!0),[xL],!1),formatAbbr:a,maxDateTransform:Pa,minDateTransform:Rr,view:"year",children:i(u,c)}))}var of=function(){return of=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},of.apply(this,arguments)},K0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function bL(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,o=K0(e,["activeStartDate","hover","value","valueType"]),a=0,l=11,c=de(t);return s.jsx(oc,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),Rr(d)},dateType:"month",end:l,hover:n,renderTile:function(u){var d=u.date,f=K0(u,["date"]);return s.jsx(wL,of({},o,f,{activeStartDate:t,date:d}),d.getTime())},start:a,value:r,valueType:i})}var af=function(){return af=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},af.apply(this,arguments)};function SL(e){function t(){return s.jsx(bL,af({},e))}return s.jsx("div",{className:"react-calendar__year-view",children:t()})}var sf=function(){return sf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sf.apply(this,arguments)},jL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Su="react-calendar__month-view__days__day";function kL(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,o=e.formatDay,a=o===void 0?VA:o,l=e.formatLongDate,c=l===void 0?FA:l,u=jL(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(Su),L2(d,t)&&p.push("".concat(Su,"--weekend")),d.getMonth()!==i&&p.push("".concat(Su,"--neighboringMonth")),s.jsx(ac,sf({},u,{classes:p,formatAbbr:c,maxDateTransform:ch,minDateTransform:Da,view:"month",children:a(f,d)}))}var lf=function(){return lf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lf.apply(this,arguments)},Q0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function CL(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,a=e.value,l=e.valueType,c=Q0(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=de(t),d=er(t),f=i||o,p=pa(t,n),m=f?0:p,x=(f?-p:0)+1,w=function(){if(i)return x+6*7-1;var S=C2(t);if(o){var g=new Date;g.setFullYear(u,d,S),g.setHours(0,0,0,0);var h=7-pa(g,n)-1;return S+h}return S}();return s.jsx(oc,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var g=new Date;return g.setFullYear(u,d,S),Da(g)},dateType:"day",hover:r,end:w,renderTile:function(S){var g=S.date,h=Q0(S,["date"]);return s.jsx(kL,lf({},c,h,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:m,start:x,value:a,valueType:l})}var _2="react-calendar__month-view__weekdays",ju="".concat(_2,"__weekday");function TL(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?WA:n,i=e.formatWeekday,o=i===void 0?UA:i,a=e.locale,l=e.onMouseLeave,c=new Date,u=Rr(c),d=de(u),f=er(u),p=[],m=1;m<=7;m+=1){var x=new Date(d,f,m-pa(u,t)),w=o(a,x);p.push(s.jsx("div",{className:ec(ju,rL(x)&&"".concat(ju,"--current"),L2(x,t)&&"".concat(ju,"--weekend")),children:s.jsx("abbr",{"aria-label":w,title:w,children:r(a,x).replace(".","")})},m))}return s.jsx(dh,{className:_2,count:7,onFocus:l,onMouseOver:l,children:p})}var Sl=function(){return Sl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sl.apply(this,arguments)},X0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Z0="react-calendar__tile";function PL(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=s.jsx("span",{children:n});if(t){var i=e.date,o=e.onClickWeekNumber,a=e.weekNumber,l=X0(e,["date","onClickWeekNumber","weekNumber"]);return s.jsx("button",Sl({},l,{className:Z0,onClick:function(c){return o(a,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var l=X0(e,["date","onClickWeekNumber","weekNumber"]);return s.jsx("div",Sl({},l,{className:Z0,children:r}))}}function DL(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,o=e.showFixedNumberOfWeeks,a=function(){if(o)return 6;var u=C2(t),d=pa(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),l=function(){for(var u=de(t),d=er(t),f=tc(t),p=[],m=0;m<a;m+=1)p.push(Xd(new Date(u,d,f+m*7),n));return p}(),c=l.map(function(u){return QA(u,n)});return s.jsx(dh,{className:"react-calendar__month-view__weekNumbers",count:a,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=l[d];if(!f)throw new Error("date is not defined");return s.jsx(PL,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var cf=function(){return cf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cf.apply(this,arguments)},EL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function AL(e){if(e)for(var t=0,n=Object.entries(AA);t<n.length;t++){var r=n[t],i=r[0],o=r[1];if(o.includes(e))return i}return Ve.ISO_8601}function LL(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,o=e.calendarType,a=o===void 0?AL(n):o,l=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=EL(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return s.jsx(TL,{calendarType:a,formatShortWeekday:l,formatWeekday:c,locale:n,onMouseLeave:r})}function m(){return d?s.jsx(DL,{activeStartDate:t,calendarType:a,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function x(){return s.jsx(CL,cf({calendarType:a},f))}var w="react-calendar__month-view";return s.jsx("div",{className:ec(w,d?"".concat(w,"--weekNumbers"):""),children:s.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),s.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),x()]})]})})}var pi=function(){return pi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pi.apply(this,arguments)},is="react-calendar",$s=["century","decade","year","month"],IL=["decade","year","month","day"],fh=new Date;fh.setFullYear(1,0,1);fh.setHours(0,0,0,0);var _L=new Date(864e13);function To(e){return e instanceof Date?e:new Date(e)}function M2(e,t){return $s.slice($s.indexOf(e),$s.indexOf(t)+1)}function ML(e,t,n){var r=M2(t,n);return r.indexOf(e)!==-1}function ph(e,t,n){return e&&ML(e,t,n)?e:n}function O2(e){var t=$s.indexOf(e);return IL[t]}function OL(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=To(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function R2(e,t){var n=e.value,r=e.minDate,i=e.maxDate,o=e.maxDetail,a=OL(n,t);if(!a)return null;var l=O2(o),c=function(){switch(t){case 0:return Pr(l,a);case 1:return D2(l,a);default:throw new Error("Invalid index value: ".concat(t))}}();return aL(c,r,i)}var hh=function(e){return R2(e,0)},$2=function(e){return R2(e,1)},RL=function(e){return[hh,$2].map(function(t){return t(e)})};function N2(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,o=e.value,a=e.view,l=ph(a,i,n),c=hh({value:o,minDate:r,maxDate:t,maxDetail:n})||new Date;return Pr(l,c)}function $L(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,o=e.maxDate,a=e.maxDetail,l=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=ph(d,c,a),p=t||n;return p?Pr(f,p):N2({maxDate:o,maxDetail:a,minDate:l,minDetail:c,value:u||r,view:d||i})}function ku(e){return e&&(!Array.isArray(e)||e.length===1)}function os(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var NL=b.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,o=t.calendarType,a=t.className,l=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,m=t.formatMonthYear,x=t.formatShortWeekday,w=t.formatWeekday,S=t.formatYear,g=t.goToRangeStartOnSelect,h=g===void 0?!0:g,v=t.inputRef,j=t.locale,T=t.maxDate,C=T===void 0?_L:T,k=t.maxDetail,P=k===void 0?"month":k,A=t.minDate,L=A===void 0?fh:A,N=t.minDetail,F=N===void 0?"century":N,Q=t.navigationAriaLabel,U=t.navigationAriaLive,D=t.navigationLabel,_=t.next2AriaLabel,R=t.next2Label,E=t.nextAriaLabel,M=t.nextLabel,O=t.onActiveStartDateChange,V=t.onChange,W=t.onClickDay,re=t.onClickDecade,le=t.onClickMonth,K=t.onClickWeekNumber,ce=t.onClickYear,Re=t.onDrillDown,Xe=t.onDrillUp,Te=t.onViewChange,Wt=t.prev2AriaLabel,wt=t.prev2Label,$e=t.prevAriaLabel,sc=t.prevLabel,Pe=t.returnValue,Qi=Pe===void 0?"start":Pe,bt=t.selectRange,Ea=t.showDoubleView,vh=t.showFixedNumberOfWeeks,yh=t.showNavigation,W2=yh===void 0?!0:yh,U2=t.showNeighboringCentury,H2=t.showNeighboringDecade,xh=t.showNeighboringMonth,Y2=xh===void 0?!0:xh,G2=t.showWeekNumbers,K2=t.tileClassName,Q2=t.tileContent,X2=t.tileDisabled,lc=t.value,wh=t.view,bh=b.useState(l),Z2=bh[0],Aa=bh[1],Sh=b.useState(null),J2=Sh[0],jh=Sh[1],kh=b.useState(Array.isArray(c)?c.map(function(Z){return Z!==null?To(Z):null}):c!=null?To(c):null),cc=kh[0],q2=kh[1],Ch=b.useState(u),eb=Ch[0],Th=Ch[1],tt=r||Z2||$L({activeStartDate:r,defaultActiveStartDate:l,defaultValue:c,defaultView:u,maxDate:C,maxDetail:P,minDate:L,minDetail:F,value:lc,view:wh}),nt=function(){var Z=function(){return bt&&ku(cc)?cc:lc!==void 0?lc:cc}();return Z?Array.isArray(Z)?Z.map(function(ve){return ve!==null?To(ve):null}):Z!==null?To(Z):null:null}(),La=O2(P),fe=ph(wh||eb,F,P),Ut=M2(F,P),tb=bt?J2:null,uc=Ut.indexOf(fe)<Ut.length-1,Ph=Ut.indexOf(fe)>0,Dh=b.useCallback(function(Z){var ve=function(){switch(Qi){case"start":return hh;case"end":return $2;case"range":return RL;default:throw new Error("Invalid returnValue.")}}();return ve({maxDate:C,maxDetail:P,minDate:L,value:Z})},[C,P,L,Qi]),dc=b.useCallback(function(Z,ve){Aa(Z);var je={action:ve,activeStartDate:Z,value:nt,view:fe};O&&!os(tt,Z)&&O(je)},[tt,O,nt,fe]),Ia=b.useCallback(function(Z,ve){var je=function(){switch(fe){case"century":return re;case"decade":return ce;case"year":return le;case"month":return W;default:throw new Error("Invalid view: ".concat(fe,"."))}}();je&&je(Z,ve)},[W,re,le,ce,fe]),fc=b.useCallback(function(Z,ve){if(uc){Ia(Z,ve);var je=Ut[Ut.indexOf(fe)+1];if(!je)throw new Error("Attempted to drill down from the lowest view.");Aa(Z),Th(je);var Lt={action:"drillDown",activeStartDate:Z,value:nt,view:je};O&&!os(tt,Z)&&O(Lt),Te&&fe!==je&&Te(Lt),Re&&Re(Lt)}},[tt,uc,O,Ia,Re,Te,nt,fe,Ut]),pc=b.useCallback(function(){if(Ph){var Z=Ut[Ut.indexOf(fe)-1];if(!Z)throw new Error("Attempted to drill up from the highest view.");var ve=Pr(Z,tt);Aa(ve),Th(Z);var je={action:"drillUp",activeStartDate:ve,value:nt,view:Z};O&&!os(tt,ve)&&O(je),Te&&fe!==Z&&Te(je),Xe&&Xe(je)}},[tt,Ph,O,Xe,Te,nt,fe,Ut]),hc=b.useCallback(function(Z,ve){var je=nt;Ia(Z,ve);var Lt=bt&&!ku(je),It;if(bt)if(Lt)It=Pr(La,Z);else{if(!je)throw new Error("previousValue is required");if(Array.isArray(je))throw new Error("previousValue must not be an array");It=tL(La,je,Z)}else It=Dh(Z);var gc=!bt||Lt||h?N2({maxDate:C,maxDetail:P,minDate:L,minDetail:F,value:It,view:fe}):null;ve.persist(),Aa(gc),q2(It);var ob={action:"onChange",activeStartDate:gc,value:It,view:fe};if(O&&!os(tt,gc)&&O(ob),V)if(bt){var ab=ku(It);if(!ab)V(It||null,ve);else if(i){if(Array.isArray(It))throw new Error("value must not be an array");V([It||null,null],ve)}}else V(It||null,ve)},[tt,i,Dh,h,C,P,L,F,O,V,Ia,bt,nt,La,fe]);function nb(Z){jh(Z)}function mc(){jh(null)}b.useImperativeHandle(n,function(){return{activeStartDate:tt,drillDown:fc,drillUp:pc,onChange:hc,setActiveStartDate:dc,value:nt,view:fe}},[tt,fc,pc,hc,dc,nt,fe]);function Eh(Z){var ve=Z?P2(fe,tt):Pr(fe,tt),je=uc?fc:hc,Lt={activeStartDate:ve,hover:tb,locale:j,maxDate:C,minDate:L,onClick:je,onMouseOver:bt?nb:void 0,tileClassName:K2,tileContent:Q2,tileDisabled:X2,value:nt,valueType:La};switch(fe){case"century":return s.jsx(pL,pi({formatYear:S,showNeighboringCentury:U2},Lt));case"decade":return s.jsx(vL,pi({formatYear:S,showNeighboringDecade:H2},Lt));case"year":return s.jsx(SL,pi({formatMonth:p,formatMonthYear:m},Lt));case"month":return s.jsx(LL,pi({calendarType:o,formatDay:d,formatLongDate:f,formatShortWeekday:x,formatWeekday:w,onClickWeekNumber:K,onMouseLeave:bt?mc:void 0,showFixedNumberOfWeeks:typeof vh<"u"?vh:Ea,showNeighboringMonth:Y2,showWeekNumbers:G2},Lt));default:throw new Error("Invalid view: ".concat(fe,"."))}}function rb(){return W2?s.jsx(iL,{activeStartDate:tt,drillUp:pc,formatMonthYear:m,formatYear:S,locale:j,maxDate:C,minDate:L,navigationAriaLabel:Q,navigationAriaLive:U,navigationLabel:D,next2AriaLabel:_,next2Label:R,nextAriaLabel:E,nextLabel:M,prev2AriaLabel:Wt,prev2Label:wt,prevAriaLabel:$e,prevLabel:sc,setActiveStartDate:dc,showDoubleView:Ea,view:fe,views:Ut}):null}var ib=Array.isArray(nt)?nt:[nt];return s.jsxs("div",{className:ec(is,bt&&ib.length===1&&"".concat(is,"--selectRange"),Ea&&"".concat(is,"--doubleView"),a),ref:v,children:[rb(),s.jsxs("div",{className:"".concat(is,"__viewContainer"),onBlur:bt?mc:void 0,onMouseLeave:bt?mc:void 0,children:[Eh(),Ea?Eh(!0):null]})]})});const BL=Ui`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,VL=Ui`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,FL=Ui`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,zL=Ui`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,WL=Ui`
  from { opacity: 0; }
  to { opacity: 1; }
`,UL=y.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${WL} 0.15s ease-out;
`,HL=y.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?tn`animation: ${zL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:tn`animation: ${FL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?tn`animation: ${VL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:tn`animation: ${BL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,YL=y.div`
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
`,B2=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const o=b.useRef(null),[a,l]=b.useState(!1),[c,u]=b.useState(!1),[d,f]=b.useState(!1),[p,m]=b.useState({top:0,left:0});b.useEffect(()=>{if(e&&(i!=null&&i.current)){const h=i.current.getBoundingClientRect(),v=280,j=320,T=8,k=window.innerHeight-h.bottom-T<j;f(k);let P;k?P=h.top-j-T:P=h.bottom+T;let A=h.right-v;A<8&&(A=8),A+v>window.innerWidth-8&&(A=window.innerWidth-v-8),P<8&&(P=8),m({top:P,left:A}),u(!0),l(!1)}},[e,i]);const x=b.useCallback(()=>{l(!0),setTimeout(()=>{u(!1),l(!1),t()},150)},[t]),w=b.useCallback(h=>{o.current&&!o.current.contains(h.target)&&x()},[x]);b.useEffect(()=>{if(e){const h=setTimeout(()=>{document.addEventListener("mousedown",w)},10);return()=>{clearTimeout(h),document.removeEventListener("mousedown",w)}}},[e,w]);const S=b.useCallback(h=>{h instanceof Date&&(r(Ft(h)),x())},[r,x]);if(!c)return null;const g=new Date(n+"T00:00:00");return Wx.createPortal(s.jsxs("div",{"data-calendar-portal":!0,children:[s.jsx(UL,{onClick:x}),s.jsx(HL,{ref:o,$isClosing:a,$openUpward:d,$top:p.top,$left:p.left,children:s.jsx(YL,{children:s.jsx(NL,{onChange:S,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(h,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},GL=y($.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,KL=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,QL=y.button`
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
`,XL=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,mh=y.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,ZL=y(mh)`
  height: 14px;
`,JL=y(mh)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,qL=y(mh)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,eI=y($.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,tI=y($.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,nI=y.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,rI=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,iI=y($.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,oI=y.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,aI=y.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,sI=y.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,lI=y($.button).attrs({type:"button"})`
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
`,cI=y.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,J0=y($.button).attrs({type:"button"})`
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
`,uI=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"15 18 9 12 15 6"})}),dI=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"9 18 15 12 9 6"})}),as=[.25,.1,.25,1],fI=({selectedDate:e,onDateChange:t})=>{const[n,r]=b.useState(!1),[i,o]=b.useState(1),a=b.useRef(null),l=b.useRef(e);if(l.current!==e){const h=new Date(l.current+"T00:00:00"),v=new Date(e+"T00:00:00");o(v>h?1:-1),l.current=e}const c=b.useCallback(h=>{h.preventDefault(),h.stopPropagation();const v=Ft(new Date),j=new Date(e+"T00:00:00"),T=new Date(v+"T00:00:00");o(T>j?1:-1),t(v)},[e,t]),u=b.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o(-1);const v=new Date(e+"T00:00:00");v.setDate(v.getDate()-1),t(Ft(v))},[e,t]),d=b.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o(1);const v=new Date(e+"T00:00:00");v.setDate(v.getDate()+1),t(Ft(v))},[e,t]),f=QE(e),p=new Date(e+"T00:00:00"),m=p.getDate(),x=p.toLocaleDateString("en-US",{month:"short"}),w=p.toLocaleDateString("en-US",{weekday:"long"}),S=p.getFullYear(),g={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return s.jsxs(GL,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:as},children:[s.jsxs(KL,{children:[s.jsxs(QL,{ref:a,onClick:()=>r(!0),type:"button",children:[s.jsxs(XL,{children:[s.jsx(ZL,{children:s.jsx(Le,{mode:"popLayout",initial:!1,children:s.jsx(eI,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:as},children:x},x)})}),s.jsx(JL,{children:s.jsx(Le,{mode:"popLayout",initial:!1,children:s.jsx(tI,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:as},children:m},m)})})]}),s.jsx(nI,{}),s.jsxs(rI,{children:[s.jsx(qL,{children:s.jsx(Le,{mode:"popLayout",initial:!1,children:s.jsx(iI,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:as},children:w},w)})}),s.jsx(oI,{children:S})]})]}),s.jsxs(aI,{children:[s.jsx(sI,{children:s.jsx(Le,{children:!f&&s.jsx(lI,{onClick:c,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),s.jsxs(cI,{children:[s.jsx(J0,{onClick:u,whileTap:{scale:.95},children:s.jsx(uI,{})}),s.jsx(J0,{onClick:d,whileTap:{scale:.95},children:s.jsx(dI,{})})]})]})]}),s.jsx(B2,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:a})]})};y($.div)`
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
`;y(fp)`
  display: block;
  text-decoration: none;
  color: inherit;
`;y.span`
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
`;const pI=y.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,hI=y.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,mI=y($.span)`
  display: inline-block;
`,gI=y.span`
  display: inline-block;
`,vI=[.25,.1,.25,1],yI=({value:e,className:t})=>{const n=b.useMemo(()=>e.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[e]);return s.jsx(pI,{className:t,children:n.map(({char:r,key:i,isDigit:o},a)=>o?s.jsx(hI,{children:s.jsx(Le,{mode:"popLayout",initial:!1,children:s.jsx(mI,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:vI},children:r},i)})},`wrapper-${a}`):s.jsx(gI,{children:r},`static-${a}`))})},hi=b.memo(yI);y.h1`
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;y.h1`
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;y.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;y.h3`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;y.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;y.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;y.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
`;y.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-secondary);
`;y.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  color: var(--text-tertiary);
`;y.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-tertiary);
`;y.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
`;y.span`
  background: var(--gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${({$animated:e})=>e&&`
    animation: gradientFlow 4s ease infinite;
  `}
`;const xI=y($.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,wI=y.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,bI=y.div`
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
`,SI=y.div`
  flex: 1;
  min-width: 0;
`,jI=y.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,kI=y.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,CI=y.span`
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
`,TI=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,q0=y.div`
  text-align: ${({$align:e})=>e||"left"};
`,ev=y.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,tv=y.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:e})=>e};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,PI=y.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,DI=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,EI=y.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,AI=y($.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,LI=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,II=y.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,_I=y.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,MI=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,OI=y.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,RI=y($.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:e})=>e};
`,$I={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},NI=e=>{const t=$I[e];return t?s.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},BI=e=>new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),nv=[.25,.1,.25,1],VI=({detailedBalance:e,index:t=0,limit:n})=>{const{account:r,billDue:i,unbilled:o,totalOutstanding:a,cycleStart:l,cycleSpending:c}=e,u=n!==void 0&&n>0,d=u?Math.max(0,n-c):0,f=u?c/n*100:0,p=u&&c>n,m=p?"#ef4444":f>80?"#f59e0b":"#10b981",x=()=>i>0?"due":o>0?"unbilled":"clear",w=()=>{switch(x()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return s.jsxs(xI,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:nv,delay:t*.02},children:[s.jsxs(wI,{children:[s.jsx(bI,{children:NI(r.bank)}),s.jsxs(SI,{children:[s.jsxs(jI,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),s.jsxs(kI,{children:["Cycle from ",BI(l)]})]}),s.jsx(CI,{$status:x(),children:w()})]}),s.jsxs(TI,{children:[s.jsxs(q0,{children:[s.jsx(ev,{children:"Bill Due"}),s.jsx(tv,{$color:i>0?"#ef4444":"#10b981",children:s.jsx(hi,{value:ot(i)})})]}),s.jsxs(q0,{$align:"right",children:[s.jsx(ev,{children:"Unbilled"}),s.jsx(tv,{$color:o>0?"#f59e0b":"var(--text-tertiary)",children:s.jsx(hi,{value:ot(o)})})]})]}),u&&s.jsxs(PI,{children:[s.jsxs(DI,{children:[s.jsxs(LI,{children:[s.jsx(II,{children:"Virtual Limit"}),s.jsx(_I,{children:ot(n)})]}),s.jsxs(MI,{children:[s.jsx(OI,{children:p?"Over By":"Available"}),s.jsx(RI,{$color:m,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:ot(p?a-n:d)},d)]})]}),s.jsx(EI,{children:s.jsx(AI,{$color:m,initial:{width:0},animate:{width:`${Math.min(f,100)}%`},transition:{duration:.4,ease:nv,delay:.1}})})]})]})},FI=b.memo(VI),zI=y($.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,rv=y.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,iv=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
`,ov=y.h3`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`,WI=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,UI=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,ss=y($.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,ls=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,cs=y.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,us=y.div`
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
`,ds=y.div`
  min-width: 0;
`,fs=y.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ps=y.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,hs=y.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:e})=>e||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,HI=y.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,YI=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,GI=y.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,KI=y($.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,QI=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,XI=y.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,ZI=y.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,JI=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,qI=y.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,e_=y($.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:e})=>e};
`,av={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},t_=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),n_=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),gh=[.25,.1,.25,1],r_={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:gh,staggerChildren:.05}}},ms={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:gh}}},i_=({balances:e,ccLimits:t={},creditCardDetailedBalances:n=[]})=>{const{hdfcBalance:r,iciciBalance:i,totalCCOutstanding:o,netPosition:a,totalLimit:l,totalLimitRemaining:c,limitPercentage:u,limitColor:d}=b.useMemo(()=>{const p=e.find(k=>k.account.id==="hdfc-bank"),m=e.find(k=>k.account.id==="icici-bank"),x=e.filter(k=>k.account.type==="credit_card"),w=(p==null?void 0:p.balance)||0,S=(m==null?void 0:m.balance)||0,g=x.reduce((k,P)=>k+(P.totalOutstanding||0),0);let h=0;for(const k of n){const P=t[k.account.id]||0;P>0&&(h+=P)}const v=Math.max(0,h-g),j=h>0?g/h*100:0,C=g>h&&h>0?"#ef4444":j>80?"#f59e0b":"#10b981";return{hdfcBalance:w,iciciBalance:S,totalCCOutstanding:g,netPosition:w-g,totalLimit:h,totalLimitRemaining:v,limitPercentage:j,limitColor:C}},[e,t,n]),f=l>0;return s.jsxs(zI,{variants:r_,initial:"hidden",animate:"visible",children:[s.jsxs(rv,{children:[s.jsx(iv,{children:s.jsx(ov,{children:"Bank Accounts"})}),s.jsxs(WI,{children:[s.jsx(ss,{variants:ms,children:s.jsxs(ls,{children:[s.jsxs(cs,{children:[s.jsx(us,{$color:"#004C8F",children:s.jsx("img",{src:av.hdfc,alt:"HDFC"})}),s.jsxs(ds,{children:[s.jsx(fs,{children:"HDFC Bank"}),s.jsx(ps,{children:"Savings"})]})]}),s.jsx(hs,{$color:r>=0?"#10b981":"#ef4444",children:s.jsx(hi,{value:ot(r)})})]})}),s.jsx(ss,{variants:ms,children:s.jsxs(ls,{children:[s.jsxs(cs,{children:[s.jsx(us,{$color:"#F58220",children:s.jsx("img",{src:av.icici,alt:"ICICI"})}),s.jsxs(ds,{children:[s.jsx(fs,{children:"ICICI Bank"}),s.jsx(ps,{children:"Savings"})]})]}),s.jsx(hs,{$color:i>=0?"#10b981":"#ef4444",children:s.jsx(hi,{value:ot(i)})})]})})]})]}),s.jsxs(rv,{children:[s.jsx(iv,{children:s.jsx(ov,{children:"Position Summary"})}),s.jsxs(UI,{children:[s.jsx(ss,{variants:ms,children:s.jsxs(ls,{children:[s.jsxs(cs,{children:[s.jsx(us,{$color:"#10b981",children:s.jsx(t_,{})}),s.jsxs(ds,{children:[s.jsx(fs,{children:"Net Position"}),s.jsx(ps,{children:"HDFC − CC Due"})]})]}),s.jsx(hs,{$color:a>=0?"#10b981":"#ef4444",children:s.jsx(hi,{value:ot(a)})})]})}),s.jsxs(ss,{variants:ms,children:[s.jsxs(ls,{children:[s.jsxs(cs,{children:[s.jsx(us,{$color:"#ef4444",children:s.jsx(n_,{})}),s.jsxs(ds,{children:[s.jsx(fs,{children:"Credit Cards"}),s.jsx(ps,{children:"Total Outstanding"})]})]}),s.jsx(hs,{$color:o>0?"#ef4444":"#10b981",children:s.jsx(hi,{value:`${o>0?"-":""}${ot(o)}`})})]}),f&&s.jsxs(HI,{children:[s.jsxs(YI,{children:[s.jsxs(QI,{children:[s.jsx(XI,{children:"Combined Limit"}),s.jsx(ZI,{children:ot(l)})]}),s.jsxs(JI,{children:[s.jsx(qI,{children:u>100?"Over By":"Available"}),s.jsx(e_,{$color:d,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:u>100?ot(o-l):ot(c)},c)]})]}),s.jsx(GI,{children:s.jsx(KI,{$color:d,initial:{width:0},animate:{width:`${Math.min(u,100)}%`},transition:{duration:.4,ease:gh,delay:.1}})})]})]})]})]})]})},o_=b.memo(i_),a_=y.div`
  display: flex;
  flex-direction: column;
`,s_=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,l_=y($.button)`
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
`,c_=y.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,u_=y.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,d_=y.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,f_=y.div`
  padding: 0;
`,ho=y.div`
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,mo=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,V2=y.input`
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
`,p_=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,h_=y.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,m_=y($.button).attrs({type:"button"})`
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
`,sv=y.select`
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
`,g_=y.div`
  display: flex;
  align-items: center;
  position: relative;
`,v_=y.span`
  position: absolute;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,y_=y(V2)`
  padding-left: 28px;
`,x_=y.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,w_=y($.button)`
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
`,b_=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],S_=rh(),lv=f2(),cv=[.4,0,.2,1],j_=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=b.useState("credit_card_spend"),[i,o]=b.useState(""),[a,l]=b.useState(""),[c,u]=b.useState(""),[d,f]=b.useState(""),[p,m]=b.useState(t||Ft(new Date)),[x,w]=b.useState(!1),S=b.useRef(null);b.useEffect(()=>{t&&m(t)},[t]);const g=b.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return S_;case"bank_debit":case"bank_credit":return lv;default:return Tr}},[n]),h=b.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),v=n&&i&&parseFloat(c)>0&&p,j=b.useCallback(()=>{r(""),o(""),l(""),u(""),f("")},[]),T=b.useCallback(()=>{if(!n||!i||!c||!p)return;const A=n==="cc_payment"&&a?a:void 0,L=Tr.find(U=>U.id===i),N=a?Tr.find(U=>U.id===a):void 0;let F="";switch(n){case"credit_card_spend":F=`Spent on ${L==null?void 0:L.name}`;break;case"cc_payment":F=N?`Payment to ${L==null?void 0:L.name} from ${N.name}`:`Payment to ${L==null?void 0:L.name}`;break;case"bank_debit":F=`Debited from ${L==null?void 0:L.name}`;break;case"bank_credit":F=`Credited to ${L==null?void 0:L.name}`;break}const Q=tA(n,i,parseFloat(c),d||F,p,A);e(Q),j()},[n,i,a,c,d,p,e,j]),C=b.useMemo(()=>{const L=c.replace(/[^0-9.]/g,"").split(".");let N=L[0];const F=L[1];if(N.length>3){let Q=N.substring(N.length-3),U=N.substring(0,N.length-3);U=U.replace(/\B(?=(\d{2})+(?!\d))/g,","),N=U+","+Q}return F!==void 0?`${N}.${F}`:N},[c]),k=b.useCallback(A=>{const L=A.target.value.replace(/,/g,"");(L===""||/^\d*\.?\d*$/.test(L))&&u(L)},[]),P=A=>new Date(A+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return s.jsxs(a_,{children:[s.jsx(s_,{children:b_.map(({type:A,label:L,hint:N,color:F})=>s.jsxs(l_,{type:"button",$active:n===A,$color:F,onClick:()=>{n!==A&&(r(A),o(""),l(""))},whileTap:{scale:.98},transition:{duration:.1,ease:cv},children:[s.jsx(c_,{children:L}),s.jsx(u_,{children:N})]},A))}),s.jsxs("div",{children:[s.jsx(d_,{children:s.jsxs(f_,{children:[s.jsxs(ho,{children:[s.jsx(mo,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),s.jsxs(sv,{value:i,onChange:A=>o(A.target.value),children:[s.jsx("option",{value:"",children:h()}),g.map(A=>s.jsx("option",{value:A.id,children:A.name},A.id))]})]}),n==="cc_payment"&&s.jsxs(ho,{children:[s.jsx(mo,{children:"Paid From (Optional)"}),s.jsxs(sv,{value:a,onChange:A=>l(A.target.value),children:[s.jsx("option",{value:"",children:"Select bank account..."}),lv.map(A=>s.jsx("option",{value:A.id,children:A.name},A.id))]})]}),s.jsxs(ho,{children:[s.jsx(mo,{children:"Amount"}),s.jsxs(g_,{children:[s.jsx(v_,{children:"₹"}),s.jsx(y_,{type:"text",inputMode:"decimal",placeholder:"0",value:C,onChange:k})]})]}),s.jsxs(ho,{children:[s.jsx(mo,{children:"Date"}),s.jsxs(p_,{children:[s.jsx(h_,{children:P(p)}),s.jsx(m_,{ref:S,onClick:()=>w(!0),whileTap:{scale:.95},children:"Change"}),s.jsx(B2,{isOpen:x,onClose:()=>w(!1),selectedDate:p,onDateSelect:m,triggerRef:S})]})]}),s.jsxs(ho,{children:[s.jsx(mo,{children:"Description (Optional)"}),s.jsx(V2,{type:"text",placeholder:"Add a note...",value:d,onChange:A=>f(A.target.value)})]})]})}),s.jsx(x_,{children:s.jsx(w_,{type:"button",onClick:T,disabled:!v,whileTap:v?{scale:.98}:{},transition:{duration:.1,ease:cv},children:"Add Transaction"})})]})]})},k_=b.memo(j_),jl={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},C_=e=>{switch(e){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},T_=y.section`
  border-bottom: 1px solid var(--border);
`,P_=y.div`
  padding: ${jl.section}px 0;

  @media (max-width: 640px) {
    padding: ${jl.sectionMobile}px 0;
  }
`,D_=y($.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,E_=y.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,A_=y.div`
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
`,L_=y.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,I_=y.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,__=y($.span)`
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
`,M_=y($.div)`
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
`,O_=y($.div)`
  overflow: hidden;
`,R_=y.div`
  padding-top: ${jl.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${jl.contentGapMobile}px;
  }
`,$_=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"6 9 12 15 18 9"})}),kl=[.32,.72,0,1],N_={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:kl},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:kl},opacity:{duration:.25,delay:.05}}}},B_=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:o,onOpenChange:a,collapseOnClickOutside:l=!1,children:c})=>{const[u,d]=b.useState(i),f=b.useRef(null),p=o!==void 0,m=p?o:u,x=C_(n),w=()=>{const S=!m;p?a==null||a(S):d(S)};return b.useEffect(()=>{if(!l||!m)return;const S=g=>{f.current&&!f.current.contains(g.target)&&(p?a==null||a(!1):d(!1))};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S)}},[l,m,p,a]),s.jsx(T_,{ref:f,children:s.jsxs(P_,{children:[s.jsxs(D_,{type:"button",onClick:w,whileTap:{scale:.995},transition:{duration:.1},children:[s.jsxs(E_,{children:[s.jsx(A_,{$color:x,children:t}),s.jsx(L_,{children:e})]}),s.jsxs(I_,{children:[s.jsx(Le,{mode:"wait",children:r!==void 0&&s.jsx(__,{$color:x,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:kl},children:r},r)}),s.jsx(M_,{animate:{rotate:m?180:0},transition:{duration:.25,ease:kl},children:s.jsx($_,{})})]})]}),s.jsx(Le,{initial:!1,children:m&&s.jsx(O_,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:N_,children:s.jsx(R_,{children:c})},"content")})]})})},V_=y.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,F_=y.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,z_=y($.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,W_=y.div`
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
`,F2=y($.div)`
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
`,U_=y.div`
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
`,H_=y.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,Y_=y.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,G_=y.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,K_=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,Q_=y.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,X_=y($.button)`
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

  ${F2}:hover & {
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
`,Z_=y($.div)`
  padding: 48px 24px;
  text-align: center;
`,J_=y.div`
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
`,q_=y.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,e6=y.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,t6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),s.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),s.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),s.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),n6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),uv=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),s.jsx("polyline",{points:"5 12 12 5 19 12"})]}),r6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("polyline",{points:"19 12 12 19 5 12"})]}),i6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"3 6 5 6 21 6"}),s.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),o6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),s.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),dv=[.32,.72,0,1],a6=e=>{switch(e){case"credit_card_spend":return s.jsx(n6,{});case"cc_payment":return s.jsx(uv,{});case"bank_debit":return s.jsx(uv,{});case"bank_credit":return s.jsx(r6,{})}},fv=e=>e==="bank_credit",s6=e=>{const t=new Date(e),n=new Date,r=new Date(n);return r.setDate(r.getDate()-1),e===n.toISOString().split("T")[0]?"Today":e===r.toISOString().split("T")[0]?"Yesterday":t.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},l6=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const{filteredTransactions:r,groupedTransactions:i}=b.useMemo(()=>{const l=new Date(n),c=e.filter(d=>new Date(d.date)<=l).sort((d,f)=>{const p=f.date.localeCompare(d.date);return p!==0?p:f.id.localeCompare(d.id)}),u={};return c.forEach(d=>{u[d.date]||(u[d.date]=[]),u[d.date].push(d)}),{filteredTransactions:c,groupedTransactions:u}},[e,n]),o=b.useCallback(l=>{t(l)},[t]),a=Object.keys(i).sort((l,c)=>c.localeCompare(l));return s.jsx(B_,{title:"Transactions",icon:s.jsx(t6,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:s.jsx(V_,{children:s.jsx(F_,{children:r.length===0?s.jsxs(Z_,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:dv},children:[s.jsx(J_,{children:s.jsx(o6,{})}),s.jsx(q_,{children:"No Transactions"}),s.jsx(e6,{children:"Add your first transaction above"})]}):a.map(l=>s.jsxs(z_,{children:[s.jsx(W_,{children:s6(l)}),s.jsx(Le,{mode:"popLayout",children:i[l].map(c=>{var d;const u=d2(c.accountId);return s.jsxs(F2,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:dv},layout:!0,children:[s.jsx(U_,{$type:c.type,children:a6(c.type)}),s.jsxs(H_,{children:[s.jsx(Y_,{children:c.description}),s.jsx(G_,{children:(d=u==null?void 0:u.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]}),s.jsxs(K_,{children:[s.jsxs(Q_,{$positive:fv(c.type),children:[fv(c.type)?"+":"-",ot(c.amount)]}),s.jsx(X_,{type:"button",onClick:()=>o(c.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:s.jsx(i6,{})})]})]},c.id)})})]},l))})})})};b.memo(l6);const c6=y($.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,u6=y($.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,d6=y.div`
  padding: var(--space-xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,f6=y.div`
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
`,p6=y.div`
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,h6=y.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,m6=y.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Cu=y.h3`
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
`,Tu=y.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Pu=y.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,pv=y.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Du=y.div`
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
`,Eu=y.input`
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
`,hv=y.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,g6=y.div`
  display: flex;
  gap: var(--space-md);
`,mv=y($.button)`
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
`,gv=y.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,v6=y.span`
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
`,y6=y.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,x6=y.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
`,w6=y.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
`,vv=y.button`
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
`,b6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),s.jsx("polyline",{points:"5 6 12 3 19 6"}),s.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),s.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),S6=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),j6=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),yv=[.25,.1,.25,1],k6={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}},C6={hidden:{opacity:0,scale:.97,y:8},visible:{opacity:1,scale:1,y:0,transition:{duration:.25,ease:yv}},exit:{opacity:0,scale:.97,y:8,transition:{duration:.2,ease:yv}}},T6=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,ccLimits:i,onSave:o})=>{const[a,l]=b.useState({}),[c,u]=b.useState({}),[d,f]=b.useState({}),[p,m]=b.useState({}),x=f2(),w=rh();b.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),b.useEffect(()=>{if(e){const C=Ft(new Date),k={};x.forEach(N=>{var F;k[N.id]=((F=n[N.id])==null?void 0:F.toString())||""}),l(k);const P={},A={};w.forEach(N=>{const F=nh(r[N.id],C);P[N.id]=F.amount>0?F.amount.toString():"",A[N.id]=F.type}),u(P),f(A);const L={};w.forEach(N=>{var F;L[N.id]=((F=i[N.id])==null?void 0:F.toString())||""}),m(L)}},[e,n,r,i]);const S=()=>{const C=Ft(new Date),k={};Object.entries(a).forEach(([L,N])=>{const F=parseFloat(N.replace(/,/g,""))||0;k[L]=F});const P={};Object.entries(c).forEach(([L,N])=>{const F=parseFloat(N.replace(/,/g,""))||0,Q=r[L],U=typeof Q=="object"?Q.setupDate:C,D={amount:F,type:d[L]||"billed",setupDate:typeof Q=="object"&&Q.amount===F?U:C};P[L]=D});const A={};Object.entries(p).forEach(([L,N])=>{const F=parseFloat(N.replace(/,/g,""))||0;F>0&&(A[L]=F)}),o(k,P,A),t()},g=C=>{const k=C.replace(/[^0-9]/g,"");if(!k)return"";if(k.length>3){let P=k.substring(k.length-3),A=k.substring(0,k.length-3);return A=A.replace(/\B(?=(\d{2})+(?!\d))/g,","),A+","+P}return k},h=(C,k)=>{const P=k.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&l(A=>({...A,[C]:P}))},v=(C,k)=>{const P=k.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&u(A=>({...A,[C]:P}))},j=(C,k)=>{const P=k.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&m(A=>({...A,[C]:P}))},T=C=>{if(C>3&&C<21)return"th";switch(C%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return s.jsx(Le,{children:e&&s.jsx(c6,{variants:k6,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:s.jsxs(u6,{variants:C6,initial:"hidden",animate:"visible",exit:"exit",onClick:C=>C.stopPropagation(),children:[s.jsxs(d6,{children:[s.jsx(h6,{children:"Initial Balances, Bills & Limits"}),s.jsx(m6,{children:"Set your starting bank balances, credit card outstanding amounts, and monthly spending limits."})]}),s.jsxs(f6,{children:[s.jsxs(Cu,{children:[s.jsx(b6,{}),"Bank Account Balances"]}),s.jsx(Tu,{children:x.map(C=>s.jsxs(Pu,{children:[s.jsx(pv,{children:C.name}),s.jsx(Du,{children:s.jsx(Eu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:g(a[C.id]||""),onChange:k=>h(C.id,k.target.value)})})]},C.id))}),s.jsx(hv,{}),s.jsxs(Cu,{children:[s.jsx(S6,{}),"Credit Card Outstanding Bills"]}),s.jsx(Tu,{children:w.map(C=>s.jsxs(Pu,{children:[s.jsx(pv,{children:C.name}),s.jsx(Du,{children:s.jsx(Eu,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:g(c[C.id]||""),onChange:k=>v(C.id,k.target.value)})}),s.jsxs(w6,{children:[s.jsx(vv,{type:"button",$active:d[C.id]==="billed",onClick:()=>f(k=>({...k,[C.id]:"billed"})),children:"Billed"}),s.jsx(vv,{type:"button",$active:d[C.id]==="unbilled",onClick:()=>f(k=>({...k,[C.id]:"unbilled"})),children:"Unbilled"})]}),s.jsx(gv,{children:d[C.id]==="unbilled"?"Current cycle spending (counts towards limit, clears next cycle)":"Previous cycle bill (does not count towards limit)"})]},C.id))}),s.jsx(hv,{}),s.jsxs(Cu,{children:[s.jsx(j6,{}),"Monthly Spending Limits"]}),s.jsx(Tu,{children:w.map(C=>{const k=c2[C.id];return s.jsxs(Pu,{children:[s.jsxs(y6,{children:[s.jsx(x6,{children:C.name}),k&&s.jsxs(v6,{children:["Resets ",k,T(k)]})]}),s.jsx(Du,{children:s.jsx(Eu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:g(p[C.id]||""),onChange:P=>j(C.id,P.target.value)})}),s.jsx(gv,{children:"Maximum spending allowed per billing cycle"})]},C.id)})})]}),s.jsx(p6,{children:s.jsxs(g6,{children:[s.jsx(mv,{onClick:t,whileTap:{scale:.98},children:"Cancel"}),s.jsx(mv,{$primary:!0,onClick:S,whileTap:{scale:.98},children:"Save All"})]})})]})})})},P6=y($.div)`
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
`,D6=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,E6=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,A6=y.div`
  padding: 16px 0 16px;

  @media (max-width: 640px) {
    padding: 16px 0 16px;
  }
`,L6=y.div`
  display: flex;
  gap: 2px;
  padding: 3px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`,I6=y($.button)`
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
`,_6=y($.div)`
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
`,M6=y.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,O6=y($.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,R6=y.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,$6=y($.div)`
  width: 100%;
`,N6=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,B6=y.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,V6=y.div`
  /* Full height - page scrolls naturally */
`,F6=y($.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,z6=y.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,W6=y($.div)`
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
`,U6=y.div`
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
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%);
          color: #8b5cf6;
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
`,H6=y.div`
  flex: 1;
  min-width: 0;
`,Y6=y.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,G6=y.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,K6=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Q6=y.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,X6=y($.button)`
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
`,Z6=y($.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,J6=y.div`
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
`,q6=y.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,e3=y.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,t3=y.div`
  display: grid;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
`,xv=y($.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
`,wv=y.h3`
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
`,n3=y.div`
  display: flex;
  gap: 12px;
`,bv=y($.button)`
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
`,r3=y($.button)`
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
`,i3=y.input`
  display: none;
`,o3=y.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,a3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),s.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),s3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),l3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),s.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),s.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),s.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),s.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),s.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),c3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),s.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),uf=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"3"}),s.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),u3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),d3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"17 8 12 3 7 8"}),s.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),f3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),s.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),s.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),Sv=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),s.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),p3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.jsx("polyline",{points:"17 6 23 6 23 12"})]}),h3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"17 1 21 5 17 9"}),s.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),s.jsx("polyline",{points:"7 23 3 19 7 15"}),s.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),m3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("polyline",{points:"9 12 11 14 15 10"})]}),g3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),s.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),v3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"3 6 5 6 21 6"}),s.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Po=[.25,.1,.25,1],y3={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Po}}},x3={enter:e=>({x:e>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?40:-40,opacity:0})},w3=e=>{switch(e){case"credit_card_spend":return s.jsx(Sv,{});case"bank_credit":return s.jsx(p3,{});case"cc_payment":return s.jsx(m3,{});case"bank_debit":return s.jsx(h3,{});default:return s.jsx(Sv,{})}},jv=e=>e==="bank_credit",b3=e=>{const t=new Date(e+"T00:00:00"),n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),t.getTime()===n.getTime()?"Today":t.getTime()===r.getTime()?"Yesterday":t.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},dr=[{id:"summary",label:"Summary",icon:s.jsx(a3,{}),accent:"green"},{id:"cards",label:"Cards",icon:s.jsx(s3,{}),accent:"pink"},{id:"transactions",label:"History",icon:s.jsx(l3,{}),accent:"blue"},{id:"add",label:"Add",icon:s.jsx(c3,{}),accent:"orange"},{id:"manage",label:"Manage",icon:s.jsx(uf,{}),accent:"purple"}],S3=()=>{const[e,t]=b.useState(Ft(new Date)),[n,r]=b.useState([]),[i,o]=b.useState({}),[a,l]=b.useState({}),[c,u]=b.useState({}),[d,f]=b.useState(!1),[p,m]=b.useState("summary"),[[,x],w]=b.useState([0,0]),S=b.useRef(null),g=b.useCallback(D=>{const _=dr.findIndex(E=>E.id===D),R=dr.findIndex(E=>E.id===p);w([_,_>R?1:-1]),m(D)},[p]),h=b.useCallback((D,_)=>{const M=dr.findIndex(O=>O.id===p);(_.offset.x<-50||_.velocity.x<-500)&&M<dr.length-1?g(dr[M+1].id):(_.offset.x>50||_.velocity.x>500)&&M>0&&g(dr[M-1].id)},[p,g]);b.useEffect(()=>{const D=HE(),_=YE(),R=GE(),E=KE();r(D),o(_),l(R),u(E)},[]);const v=b.useMemo(()=>qE(n,e,i,a),[e,n,i,a]),j=b.useMemo(()=>rh().map(_=>ZE(_,n,e,a)),[n,e,a]),{filteredTransactions:T,groupedTransactions:C}=b.useMemo(()=>{const D=e.substring(0,7),_=n.filter(E=>E.date.startsWith(D)).sort((E,M)=>{const O=M.date.localeCompare(E.date);return O!==0?O:M.id.localeCompare(E.id)}),R={};return _.forEach(E=>{R[E.date]||(R[E.date]=[]),R[E.date].push(E)}),{filteredTransactions:_,groupedTransactions:R}},[n,e]),k=Object.keys(C).sort((D,_)=>_.localeCompare(D)),P=b.useCallback(D=>{r(_=>{const R=[..._,D];return requestAnimationFrame(()=>xu(R)),R}),g("transactions")},[]),A=b.useCallback(D=>{r(_=>{const R=_.filter(E=>E.id!==D);return requestAnimationFrame(()=>xu(R)),R})},[]),L=b.useCallback((D,_,R)=>{o(D),l(_),u(R),requestAnimationFrame(()=>{M0(D),O0(_),R0(R)})},[]),N=b.useCallback(()=>{rA(n,i,a,c)},[n,i,a,c]),F=b.useCallback(()=>{var D;(D=S.current)==null||D.click()},[]),Q=b.useCallback(D=>{var E;const _=(E=D.target.files)==null?void 0:E[0];if(!_)return;const R=new FileReader;R.onload=M=>{var W;const O=(W=M.target)==null?void 0:W.result,V=oA(O);V?window.confirm(`Import backup from ${new Date(V.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${V.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(V.transactions),o(V.initialBalances),l(V.initialCCBills),u(V.ccLimits||{}),xu(V.transactions),M0(V.initialBalances),O0(V.initialCCBills),R0(V.ccLimits||{})):alert("Invalid backup file.")},R.readAsText(_),D.target.value=""},[]),U=()=>{switch(p){case"summary":return s.jsx(o_,{balances:v,ccLimits:c,creditCardDetailedBalances:j});case"cards":return s.jsx(N6,{children:j.map((D,_)=>s.jsx(FI,{detailedBalance:D,index:_,limit:c[D.account.id]},D.account.id))});case"transactions":return s.jsx(B6,{children:s.jsx(V6,{children:T.length===0?s.jsxs(Z6,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:Po},children:[s.jsx(J6,{children:s.jsx(g3,{})}),s.jsx(q6,{children:"No Transactions"}),s.jsx(e3,{children:"Add your first transaction"})]}):k.map(D=>s.jsxs(F6,{children:[s.jsx(z6,{children:b3(D)}),s.jsx(Le,{mode:"popLayout",children:C[D].map(_=>{var E;const R=d2(_.accountId);return s.jsxs(W6,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:Po},layout:!0,children:[s.jsx(U6,{$type:_.type,children:w3(_.type)}),s.jsxs(H6,{children:[s.jsx(Y6,{children:_.description}),s.jsx(G6,{children:(E=R==null?void 0:R.name)==null?void 0:E.replace(" Credit Card"," CC").replace(" Bank","")})]}),s.jsxs(K6,{children:[s.jsxs(Q6,{$positive:jv(_.type),children:[jv(_.type)?"+":"-",ot(_.amount)]}),s.jsx(X6,{type:"button",onClick:()=>A(_.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:s.jsx(v3,{})})]})]},_.id)})})]},D))})});case"add":return s.jsx(o3,{children:s.jsx(k_,{onAddTransaction:P,defaultDate:e})});case"manage":return s.jsxs(t3,{children:[s.jsxs(xv,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2,ease:Po},children:[s.jsxs(wv,{children:[s.jsx(uf,{}),"Initial Balances & Limits"]}),s.jsxs(r3,{type:"button",onClick:()=>f(!0),whileTap:{scale:.98},children:[s.jsx(uf,{}),"Configure Balances & Limits"]})]}),s.jsxs(xv,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2,ease:Po,delay:.05},children:[s.jsxs(wv,{children:[s.jsx(f3,{}),"Backup & Restore"]}),s.jsxs(n3,{children:[s.jsxs(bv,{type:"button",$variant:"secondary",onClick:N,whileTap:{scale:.98},children:[s.jsx(u3,{}),"Export Data"]}),s.jsxs(bv,{type:"button",$variant:"secondary",onClick:F,whileTap:{scale:.98},children:[s.jsx(d3,{}),"Import Data"]})]})]})]})}};return s.jsxs(s.Fragment,{children:[s.jsx(D6,{children:s.jsxs(E6,{children:[s.jsx(A6,{children:s.jsx(fI,{selectedDate:e,onDateChange:t})}),s.jsx(L6,{children:dr.map(D=>s.jsxs(I6,{$active:p===D.id,$accent:D.accent,onClick:()=>g(D.id),whileTap:{scale:.97},children:[p===D.id&&s.jsx(_6,{$accent:D.accent,layoutId:"activeTab",transition:{type:"spring",stiffness:500,damping:35}}),D.icon,s.jsx("span",{children:D.label})]},D.id))})]})}),s.jsxs(P6,{variants:y3,initial:"hidden",animate:"visible",children:[s.jsx(O6,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:h,children:s.jsxs(r2,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[s.jsx(M6,{}),s.jsx(R6,{style:{flex:1},children:s.jsx(Le,{mode:"wait",custom:x,children:s.jsx($6,{custom:x,variants:x3,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:U()},p)})})]})}),s.jsx(i3,{ref:S,type:"file",accept:".json",onChange:Q}),s.jsx(T6,{isOpen:d,onClose:()=>f(!1),initialBalances:i,initialCCBills:a,ccLimits:c,onSave:L})]})]})},z2=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),j3=async(e,t,n,r=48)=>{try{const i=await z2(),o=Math.min(t,n)*.03,a=t-r-o,l=n-r-o;e.globalAlpha=.7,e.drawImage(i,a,l,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},df=(e,t,n)=>{const r=[],i=l=>{const c=[];let u=l;for(;u.length>0;){let d=u.length;for(;d>0&&e.measureText(u.slice(0,d)).width>n;)d--;d=Math.max(1,d);const f=u.slice(0,d),p=f.lastIndexOf("/"),m=f.lastIndexOf("-"),x=f.lastIndexOf(".");let w=d;const S=[p,m,x].filter(g=>g>0&&g<d-1);S.length>0&&(w=Math.max(...S)+1),c.push(u.slice(0,w)),u=u.slice(w)}return c},o=t.split(" ");let a="";for(const l of o)if(e.measureText(l).width>n){a&&(r.push(a),a="");const u=i(l);for(let d=0;d<u.length;d++)d<u.length-1?r.push(u[d]):a=u[d]}else{const u=a?`${a} ${l}`:l;e.measureText(u).width>n&&a?(r.push(a),a=l):a=u}return a&&r.push(a),r},k3=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:o,alignment:a,aspectRatio:l,padding:c}=e,u=document.createElement("canvas");u.width=l.width,u.height=l.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=o,d.fillRect(0,0,u.width,u.height);const f=n*(l.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(l.width/1080),m=u.width-p*2,x=t.split(`
`),w=[];for(const T of x)if(T.trim()==="")w.push("");else{const C=df(d,T,m);w.push(...C)}const S=f*1.4,g=w.length*S;let h=(u.height-g)/2+f;d.textAlign=a;let v;switch(a){case"left":v=p;break;case"right":v=u.width-p;break;default:v=u.width/2}for(const T of w)T!==""&&d.fillText(T,v,h),h+=S;const j=Math.min(u.width,u.height)*.06;return await j3(d,u.width,u.height,j),u.toDataURL("image/png",1)},C3=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,o=document.createElement("canvas");o.width=n.width,o.height=n.height;const a=o.getContext("2d");if(!a)throw new Error("Failed to get canvas context");const l=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";a.fillStyle=r,a.fillRect(0,0,o.width,o.height);const f=64*l,p=o.width-f*2,m=20*l,x=36*l,w=(c?44:40)*l,S=(c?24:22)*l,g=18*l,h=w*1.25,v=S*1.45,j=c?5:4,T=c?4:3;a.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const C=df(a,t.title,p),k=C.slice(0,j);if(C.length>j&&k.length>0){const K=k[k.length-1];K.endsWith("...")||(k[k.length-1]=K.slice(0,-3)+"...")}a.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`;const P=t.description?df(a,t.description,p):[],A=P.slice(0,T);if(P.length>T&&A.length>0){const K=A[A.length-1];K.endsWith("...")||(A[A.length-1]=K.slice(0,-3)+"...")}const L=x+m,N=k.length*h,F=A.length>0?m+A.length*v:0,Q=L+N+F,U=Math.min(o.width,o.height)*.045,D=f+U+16*l,_=o.height-D-f,R=_-Q-m*2;let E=0;if(t.image&&R>100*l){const K=c?o.width*.5:o.width*.4,ce=120*l;E=Math.min(K,Math.max(ce,R))}const M=E>0?m+E:0,O=Q+M;let V=f+Math.max(0,(_-O)/2);if(t.favicon)try{const K=await kv(t.favicon);a.save(),a.beginPath(),a.arc(f+x/2,V+x/2,x/2,0,Math.PI*2),a.closePath(),a.clip(),a.drawImage(K,f,V,x,x),a.restore()}catch{a.fillStyle=i,a.beginPath(),a.arc(f+x/2,V+x/2,x/2,0,Math.PI*2),a.fill()}t.siteName&&(a.font=`500 ${22*l}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d,a.textAlign="left",a.textBaseline="middle",a.fillText(t.siteName,f+x+10*l,V+x/2)),V+=x+m,a.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=u,a.textAlign="left",a.textBaseline="top";for(const K of k)a.fillText(K,f,V),V+=h;if(A.length>0){V+=m,a.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d;for(const K of A)a.fillText(K,f,V),V+=v}if(t.image&&E>0){V+=m;try{const K=await kv(t.image),ce=p;a.save(),T3(a,f,V,ce,E,10*l),a.clip();const Re=K.width/K.height,Xe=ce/E;let Te=0,Wt=0,wt=K.width,$e=K.height;Re>Xe?(wt=K.height*Xe,Te=(K.width-wt)/2):($e=K.width/Xe,Wt=(K.height-$e)/2),a.drawImage(K,Te,Wt,wt,$e,f,V,ce,E),a.restore()}catch{}}const W=o.height-f;a.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,a.fillStyle=i;const re=p-U-16*l;let le=t.url;for(;a.measureText(le).width>re&&le.length>20;)le=le.slice(0,-4)+"...";a.textAlign="left",a.textBaseline="middle",a.fillText(le,f,W-U/2);try{const K=await z2();a.globalAlpha=.7,a.drawImage(K,o.width-f-U,W-U,U,U),a.globalAlpha=1}catch{}return o.toDataURL("image/png",1)},kv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),T3=(e,t,n,r,i,o)=>{e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()},P3=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},D3=async e=>{var i,o;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const a=`https://api.microlink.io?url=${encodeURIComponent(e)}`,l=await fetch(a);if(!l.ok)return r;const c=await l.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((o=c.data.logo)==null?void 0:o.url)||r.favicon}:r}catch(a){return console.warn("Failed to fetch URL metadata:",a),r}},Cv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],E3='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',A3=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},L3=y.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,I3=y.div`
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
`,_3=y.div`
  width: 100%;
  max-width: 600px;
`,M3=y.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,O3=y.div`
  position: absolute;
  inset: 0;
`,R3=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,$3=y($.div)`
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
`,N3=y.div`
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
`,B3=y.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,go=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,vo=y.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,V3=y.textarea`
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
`,Tv=y.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,Pv=y.button`
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
`,F3=y.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,z3=y.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,W3=y.input`
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
`,U3=y.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,H3=y($.button)`
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
`,Y3=y($.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,G3=y.input`
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
`,K3=y.textarea`
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
`,Q3=y($.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,X3=y($.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,Z3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),J3=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),q3=()=>{const{isDark:e}=pp(),[t,n]=b.useState(""),[r,i]=b.useState(64),[o,a]=b.useState("left"),[l,c]=b.useState(Cv[1]),[u,d]=b.useState(null),[f,p]=b.useState(!1),[m,x]=b.useState(null),[w,S]=b.useState(""),[g,h]=b.useState(""),[v,j]=b.useState(!1),[T,C]=b.useState(null),k=b.useMemo(()=>A3(t),[t]),P=e?"#000000":"#ffffff",A=e?"#ffffff":"#000000",L=`${l.height/l.width*100}%`,N=b.useCallback(async()=>{if(!(!k||!t.trim())){j(!0),C(null),d(null);try{const D=await D3(t.trim());x(D),S(D.title),h(D.description)}catch{C("Unable to fetch URL preview")}j(!1)}},[t,k]),F=b.useCallback(async()=>{if(!t.trim()||k){k||d(null);return}p(!0);try{const D=await k3({text:t.trim(),fontSize:r,fontFamily:E3,textColor:A,backgroundColor:P,alignment:o,aspectRatio:l,padding:80});d(D)}catch(D){console.error("Preview generation failed:",D)}p(!1)},[t,k,r,o,l,P,A]),Q=b.useCallback(async()=>{if(m){p(!0);try{const D=await C3({metadata:{...m,title:w||m.title,description:g||m.description},aspectRatio:l,backgroundColor:P,accentColor:"#2A9D8F"});d(D)}catch(D){console.error("URL preview generation failed:",D)}p(!1)}},[m,w,g,l,P]);b.useEffect(()=>{if(k)return;const D=setTimeout(F,200);return()=>clearTimeout(D)},[F,k]),b.useEffect(()=>{k?N():(x(null),S(""),h(""),C(null))},[k,N]),b.useEffect(()=>{m&&Q()},[m,w,g,l,Q]);const U=()=>{if(u){const R=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;P3(u,R)}};return s.jsxs(L3,{children:[s.jsx(I3,{children:s.jsx(_3,{children:s.jsx(M3,{$bgColor:P,$paddingBottom:L,children:s.jsxs(O3,{children:[u&&s.jsx(R3,{src:u,alt:"Preview"}),s.jsx(Le,{children:!u&&s.jsxs($3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[s.jsx(J3,{}),s.jsx("span",{children:k?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),s.jsx(N3,{children:s.jsxs(B3,{children:[s.jsxs(go,{children:[s.jsx(vo,{children:"Content"}),s.jsx(V3,{value:t,onChange:D=>n(D.target.value),onContextMenu:D=>D.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),k?s.jsxs(s.Fragment,{children:[v&&s.jsx(go,{style:{alignItems:"center"},children:s.jsx(X3,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),T&&s.jsx(Q3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:T}),m&&s.jsxs(Y3,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[s.jsx(vo,{children:"Edit Details"}),s.jsx(G3,{value:w,onChange:D=>S(D.target.value),placeholder:"Title"}),s.jsx(K3,{value:g,onChange:D=>h(D.target.value),placeholder:"Description"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(go,{children:[s.jsx(vo,{children:"Font Size"}),s.jsxs(F3,{children:[s.jsx(z3,{children:s.jsx(W3,{type:"range",min:"24",max:"120",value:r,onChange:D=>i(Number(D.target.value))})}),s.jsx(U3,{children:r})]})]}),s.jsxs(go,{children:[s.jsx(vo,{children:"Alignment"}),s.jsx(Tv,{children:["left","center","right"].map(D=>s.jsx(Pv,{$active:o===D,onClick:()=>a(D),children:D.charAt(0).toUpperCase()+D.slice(1)},D))})]})]}),s.jsxs(go,{children:[s.jsx(vo,{children:"Format"}),s.jsx(Tv,{children:Cv.map(D=>s.jsx(Pv,{$active:l.id===D.id,onClick:()=>c(D),children:D.name},D.id))})]}),s.jsxs(H3,{onClick:U,disabled:!u||f,whileTap:{scale:.98},children:[s.jsx(Z3,{}),"Download Image"]})]})})]})},eM=y($.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,tM={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},nM=()=>s.jsx(eM,{variants:tM,initial:"hidden",animate:"visible",children:s.jsx(q3,{})}),rM=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},iM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),s.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),s.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),s.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),s.jsx("path",{d:"M8 8v2"}),s.jsx("path",{d:"M16 8v2"}),s.jsx("path",{d:"M12 8v5"}),s.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),oM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[s.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),s.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),s.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),s.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),s.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),s.jsx("path",{d:"M12 10v8"}),s.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),aM=y.div`
  min-height: 100vh;
  position: relative;
`,sM=y.main`
  position: relative;
  z-index: 1;
`,lM=y.a`
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
`,cM=Ui`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,Dv=y.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,Ev=y.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${cM} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Av=y.p`
  color: var(--text-secondary);
  font-size: 15px;
`,uM=y.button`
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
`,dM=()=>{const e=dp(),t=zi();return b.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function fM(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Uk(),i=b.useMemo(()=>rM()?iM:oM,[]);return t||!e&&!n?s.jsxs(Dv,{children:[s.jsx(Ev,{children:s.jsx(i,{})}),s.jsx(Av,{children:"Authenticating..."})]}):n&&!e?s.jsxs(Dv,{children:[s.jsx(Ev,{style:{animation:"none",opacity:1},children:s.jsx(i,{})}),s.jsx(Av,{children:"Authentication required to continue"}),s.jsx(uM,{onClick:r,children:"Try Again"})]}):s.jsxs(aM,{children:[s.jsx(dM,{}),s.jsx(lM,{href:"#main-content",children:"Skip to main content"}),s.jsx(KC,{}),s.jsx(AD,{}),s.jsx(sM,{id:"main-content",children:s.jsxs(Pk,{children:[s.jsx(Yr,{path:"/",element:s.jsx(HD,{})}),s.jsx(Yr,{path:"/tax-manager",element:s.jsx(UE,{})}),s.jsx(Yr,{path:"/expense-manager",element:s.jsx(S3,{})}),s.jsx(Yr,{path:"/canvas-manager",element:s.jsx(nM,{})}),s.jsx(Yr,{path:"/tax-calculator",element:s.jsx(Ck,{to:"/tax-manager",replace:!0})})]})})]})}function pM(){return s.jsx(Mk,{basename:"/tools",children:s.jsx(Nk,{children:s.jsxs(Wk,{children:[s.jsx(HC,{}),s.jsx(fM,{})]})})})}Ux(document.getElementById("root")).render(s.jsx(b.StrictMode,{children:s.jsx(pM,{})}));
