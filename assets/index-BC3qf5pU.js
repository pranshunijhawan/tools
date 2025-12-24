function eS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function tS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cv={exports:{}},kl={},Tv={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),nS=Symbol.for("react.portal"),rS=Symbol.for("react.fragment"),iS=Symbol.for("react.strict_mode"),oS=Symbol.for("react.profiler"),aS=Symbol.for("react.provider"),sS=Symbol.for("react.context"),lS=Symbol.for("react.forward_ref"),cS=Symbol.for("react.suspense"),uS=Symbol.for("react.memo"),dS=Symbol.for("react.lazy"),Lh=Symbol.iterator;function fS(e){return e===null||typeof e!="object"?null:(e=Lh&&e[Lh]||e["@@iterator"],typeof e=="function"?e:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dv=Object.assign,Ev={};function Ri(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||Pv}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Av(){}Av.prototype=Ri.prototype;function pf(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||Pv}var hf=pf.prototype=new Av;hf.constructor=pf;Dv(hf,Ri.prototype);hf.isPureReactComponent=!0;var _h=Array.isArray,Lv=Object.prototype.hasOwnProperty,mf={current:null},_v={key:!0,ref:!0,__self:!0,__source:!0};function Iv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Lv.call(t,r)&&!_v.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ha,type:e,key:o,ref:a,props:i,_owner:mf.current}}function pS(e,t){return{$$typeof:ha,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ha}function hS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ih=/\/+/g;function gc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hS(""+e.key):t.toString(36)}function ms(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ha:case nS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+gc(a,0):r,_h(i)?(n="",e!=null&&(n=e.replace(Ih,"$&/")+"/"),ms(i,t,n,"",function(u){return u})):i!=null&&(gf(i)&&(i=pS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ih,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",_h(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+gc(o,l);a+=ms(o,t,n,c,i)}else if(c=fS(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+gc(o,l++),a+=ms(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _a(e,t,n){if(e==null)return e;var r=[],i=0;return ms(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},gs={transition:null},gS={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:gs,ReactCurrentOwner:mf};function Mv(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:_a,forEach:function(e,t,n){_a(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _a(e,function(){t++}),t},toArray:function(e){return _a(e,function(t){return t})||[]},only:function(e){if(!gf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ri;X.Fragment=rS;X.Profiler=oS;X.PureComponent=pf;X.StrictMode=iS;X.Suspense=cS;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;X.act=Mv;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=mf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Lv.call(t,c)&&!_v.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ha,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:sS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:aS,_context:e},e.Consumer=e};X.createElement=Iv;X.createFactory=function(e){var t=Iv.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:lS,render:e}};X.isValidElement=gf;X.lazy=function(e){return{$$typeof:dS,_payload:{_status:-1,_result:e},_init:mS}};X.memo=function(e,t){return{$$typeof:uS,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=gs.transition;gs.transition={};try{e()}finally{gs.transition=t}};X.unstable_act=Mv;X.useCallback=function(e,t){return qe.current.useCallback(e,t)};X.useContext=function(e){return qe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};X.useEffect=function(e,t){return qe.current.useEffect(e,t)};X.useId=function(){return qe.current.useId()};X.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return qe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};X.useRef=function(e){return qe.current.useRef(e)};X.useState=function(e){return qe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return qe.current.useTransition()};X.version="18.3.1";Tv.exports=X;var S=Tv.exports;const en=tS(S),vS=eS({__proto__:null,default:en},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yS=S,xS=Symbol.for("react.element"),wS=Symbol.for("react.fragment"),SS=Object.prototype.hasOwnProperty,bS=yS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jS={key:!0,ref:!0,__self:!0,__source:!0};function Ov(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)SS.call(t,r)&&!jS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xS,type:e,key:o,ref:a,props:i,_owner:bS.current}}kl.Fragment=wS;kl.jsx=Ov;kl.jsxs=Ov;Cv.exports=kl;var s=Cv.exports,Rv={exports:{}},yt={},Nv={exports:{}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,M){var O=E.length;E.push(M);e:for(;0<O;){var B=O-1>>>1,G=E[B];if(0<i(G,M))E[B]=M,E[O]=G,O=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],O=E.pop();if(O!==M){E[0]=O;e:for(var B=0,G=E.length,se=G>>>1;B<se;){var le=2*(B+1)-1,Q=E[le],ce=le+1,Oe=E[ce];if(0>i(Q,O))ce<G&&0>i(Oe,Q)?(E[B]=Oe,E[ce]=O,B=ce):(E[B]=Q,E[le]=O,B=le);else if(ce<G&&0>i(Oe,O))E[B]=Oe,E[ce]=O,B=ce;else break e}}return M}function i(E,M){var O=E.sortIndex-M.sortIndex;return O!==0?O:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,m=!1,y=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=E)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function j(E){if(w=!1,v(E),!y)if(n(c)!==null)y=!0,W(C);else{var M=n(u);M!==null&&V(j,M.startTime-E)}}function C(E,M){y=!1,w&&(w=!1,g(P),P=-1),m=!0;var O=p;try{for(v(M),f=n(c);f!==null&&(!(f.expirationTime>M)||E&&!R());){var B=f.callback;if(typeof B=="function"){f.callback=null,p=f.priorityLevel;var G=B(f.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(c)&&r(c),v(M)}else r(c);f=n(c)}if(f!==null)var se=!0;else{var le=n(u);le!==null&&V(j,le.startTime-M),se=!1}return se}finally{f=null,p=O,m=!1}}var k=!1,T=null,P=-1,L=5,_=-1;function R(){return!(e.unstable_now()-_<L)}function I(){if(T!==null){var E=e.unstable_now();_=E;var M=!0;try{M=T(!0,E)}finally{M?F():(k=!1,T=null)}}else k=!1}var F;if(typeof h=="function")F=function(){h(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=I,F=function(){D.postMessage(null)}}else F=function(){b(I,0)};function W(E){T=E,k||(k=!0,F())}function V(E,M){P=b(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,W(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var O=p;p=M;try{return E()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=p;p=E;try{return M()}finally{p=O}},e.unstable_scheduleCallback=function(E,M,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=O+G,E={id:d++,callback:M,priorityLevel:E,startTime:O,expirationTime:G,sortIndex:-1},O>B?(E.sortIndex=O,t(u,E),n(c)===null&&E===n(u)&&(w?(g(P),P=-1):w=!0,V(j,O-B))):(E.sortIndex=G,t(c,E),y||m||(y=!0,W(C))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var M=p;return function(){var O=p;p=M;try{return E.apply(this,arguments)}finally{p=O}}}})($v);Nv.exports=$v;var kS=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=S,gt=kS;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fv=new Set,Bo={};function _r(e,t){wi(e,t),wi(e+"Capture",t)}function wi(e,t){for(Bo[e]=t,e=0;e<t.length;e++)Fv.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,TS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Oh={};function PS(e){return _u.call(Oh,e)?!0:_u.call(Mh,e)?!1:TS.test(e)?Oh[e]=!0:(Mh[e]=!0,!1)}function DS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ES(e,t,n,r){if(t===null||typeof t>"u"||DS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function yf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vf,yf);ze[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vf,yf);ze[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vf,yf);ze[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function xf(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ES(t,n,i,r)&&(n=null),r||i===null?PS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function Qi(e){return e===null||typeof e!="object"?null:(e=Rh&&e[Rh]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,vc;function vo(e){if(vc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vc=t&&t[1]||""}return`
`+vc+e}var yc=!1;function xc(e,t){if(!e||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function AS(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=xc(e.type,!1),e;case 11:return e=xc(e.type.render,!1),e;case 1:return e=xc(e.type,!0),e;default:return""}}function Ru(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Yr:return"Portal";case Iu:return"Profiler";case wf:return"StrictMode";case Mu:return"Suspense";case Ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bv:return(e.displayName||"Context")+".Consumer";case Vv:return(e._context.displayName||"Context")+".Provider";case Sf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bf:return t=e.displayName||null,t!==null?t:Ru(e.type)||"Memo";case Pn:t=e._payload,e=e._init;try{return Ru(e(t))}catch{}}return null}function LS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(t);case 8:return t===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _S(e){var t=Wv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ma(e){e._valueTracker||(e._valueTracker=_S(e))}function Uv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nu(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hv(e,t){t=t.checked,t!=null&&xf(e,"checked",t,!1)}function $u(e,t){Hv(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fu(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $h(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fu(e,t,n){(t!=="number"||Ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yo=Array.isArray;function hi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(yo(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Yv(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oa,Kv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IS=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(e){IS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Po[t]=Po[e]})});function Qv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Po.hasOwnProperty(e)&&Po[e]?(""+t).trim():t+"px"}function Xv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var MS=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(e,t){if(t){if(MS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uu=null;function jf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hu=null,mi=null,gi=null;function Bh(e){if(e=va(e)){if(typeof Hu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=El(t),Hu(e.stateNode,e.type,t))}}function Zv(e){mi?gi?gi.push(e):gi=[e]:mi=e}function Jv(){if(mi){var e=mi,t=gi;if(gi=mi=null,Bh(e),t)for(e=0;e<t.length;e++)Bh(t[e])}}function qv(e,t){return e(t)}function ey(){}var wc=!1;function ty(e,t,n){if(wc)return e(t,n);wc=!0;try{return qv(e,t,n)}finally{wc=!1,(mi!==null||gi!==null)&&(ey(),Jv())}}function Wo(e,t){var n=e.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Yu=!1;if(gn)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Yu=!1}function OS(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Do=!1,$s=null,Fs=!1,Gu=null,RS={onError:function(e){Do=!0,$s=e}};function NS(e,t,n,r,i,o,a,l,c){Do=!1,$s=null,OS.apply(RS,arguments)}function $S(e,t,n,r,i,o,a,l,c){if(NS.apply(this,arguments),Do){if(Do){var u=$s;Do=!1,$s=null}else throw Error(A(198));Fs||(Fs=!0,Gu=u)}}function Ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ny(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zh(e){if(Ir(e)!==e)throw Error(A(188))}function FS(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zh(i),e;if(o===r)return zh(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function ry(e){return e=FS(e),e!==null?iy(e):null}function iy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iy(e);if(t!==null)return t;e=e.sibling}return null}var oy=gt.unstable_scheduleCallback,Wh=gt.unstable_cancelCallback,VS=gt.unstable_shouldYield,BS=gt.unstable_requestPaint,Se=gt.unstable_now,zS=gt.unstable_getCurrentPriorityLevel,kf=gt.unstable_ImmediatePriority,ay=gt.unstable_UserBlockingPriority,Vs=gt.unstable_NormalPriority,WS=gt.unstable_LowPriority,sy=gt.unstable_IdlePriority,Cl=null,nn=null;function US(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:GS,HS=Math.log,YS=Math.LN2;function GS(e){return e>>>=0,e===0?32:31-(HS(e)/YS|0)|0}var Ra=64,Na=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=xo(l):(o&=a,o!==0&&(r=xo(o)))}else a=n&~i,a!==0?r=xo(a):o!==0&&(r=xo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),i=1<<n,r|=e[n],t&=~i;return r}function KS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-$t(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=KS(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Ku(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ly(){var e=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),e}function Sc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ma(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function XS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Cf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function cy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uy,Tf,dy,fy,py,Qu=!1,$a=[],Mn=null,On=null,Rn=null,Uo=new Map,Ho=new Map,En=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function Zi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=va(t),t!==null&&Tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function JS(e,t,n,r,i){switch(t){case"focusin":return Mn=Zi(Mn,e,t,n,r,i),!0;case"dragenter":return On=Zi(On,e,t,n,r,i),!0;case"mouseover":return Rn=Zi(Rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Uo.set(o,Zi(Uo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ho.set(o,Zi(Ho.get(o)||null,e,t,n,r,i)),!0}return!1}function hy(e){var t=mr(e.target);if(t!==null){var n=Ir(t);if(n!==null){if(t=n.tag,t===13){if(t=ny(n),t!==null){e.blockedOn=t,py(e.priority,function(){dy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uu=r,n.target.dispatchEvent(r),Uu=null}else return t=va(n),t!==null&&Tf(t),e.blockedOn=n,!1;t.shift()}return!0}function Hh(e,t,n){vs(e)&&n.delete(t)}function qS(){Qu=!1,Mn!==null&&vs(Mn)&&(Mn=null),On!==null&&vs(On)&&(On=null),Rn!==null&&vs(Rn)&&(Rn=null),Uo.forEach(Hh),Ho.forEach(Hh)}function Ji(e,t){e.blockedOn===t&&(e.blockedOn=null,Qu||(Qu=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,qS)))}function Yo(e){function t(i){return Ji(i,e)}if(0<$a.length){Ji($a[0],e);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&Ji(Mn,e),On!==null&&Ji(On,e),Rn!==null&&Ji(Rn,e),Uo.forEach(t),Ho.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)hy(n),n.blockedOn===null&&En.shift()}var vi=Sn.ReactCurrentBatchConfig,zs=!0;function eb(e,t,n,r){var i=te,o=vi.transition;vi.transition=null;try{te=1,Pf(e,t,n,r)}finally{te=i,vi.transition=o}}function tb(e,t,n,r){var i=te,o=vi.transition;vi.transition=null;try{te=4,Pf(e,t,n,r)}finally{te=i,vi.transition=o}}function Pf(e,t,n,r){if(zs){var i=Xu(e,t,n,r);if(i===null)Lc(e,t,r,Ws,n),Uh(e,r);else if(JS(i,e,t,n,r))r.stopPropagation();else if(Uh(e,r),t&4&&-1<ZS.indexOf(e)){for(;i!==null;){var o=va(i);if(o!==null&&uy(o),o=Xu(e,t,n,r),o===null&&Lc(e,t,r,Ws,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Lc(e,t,r,null,n)}}var Ws=null;function Xu(e,t,n,r){if(Ws=null,e=jf(r),e=mr(e),e!==null)if(t=Ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ny(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function my(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zS()){case kf:return 1;case ay:return 4;case Vs:case WS:return 16;case sy:return 536870912;default:return 16}default:return 16}}var Ln=null,Df=null,ys=null;function gy(){if(ys)return ys;var e,t=Df,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ys=i.slice(e,1<r?1-r:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function Yh(){return!1}function xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fa:Yh,this.isPropagationStopped=Yh,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=xt(Ni),ga=ge({},Ni,{view:0,detail:0}),nb=xt(ga),bc,jc,qi,Tl=ge({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(bc=e.screenX-qi.screenX,jc=e.screenY-qi.screenY):jc=bc=0,qi=e),bc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),Gh=xt(Tl),rb=ge({},Tl,{dataTransfer:0}),ib=xt(rb),ob=ge({},ga,{relatedTarget:0}),kc=xt(ob),ab=ge({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),sb=xt(ab),lb=ge({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cb=xt(lb),ub=ge({},Ni,{data:0}),Kh=xt(ub),db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pb[e])?!!t[e]:!1}function Af(){return hb}var mb=ge({},ga,{key:function(e){if(e.key){var t=db[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gb=xt(mb),vb=ge({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=xt(vb),yb=ge({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),xb=xt(yb),wb=ge({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sb=xt(wb),bb=ge({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jb=xt(bb),kb=[9,13,27,32],Lf=gn&&"CompositionEvent"in window,Eo=null;gn&&"documentMode"in document&&(Eo=document.documentMode);var Cb=gn&&"TextEvent"in window&&!Eo,vy=gn&&(!Lf||Eo&&8<Eo&&11>=Eo),Xh=" ",Zh=!1;function yy(e,t){switch(e){case"keyup":return kb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function Tb(e,t){switch(e){case"compositionend":return xy(t);case"keypress":return t.which!==32?null:(Zh=!0,Xh);case"textInput":return e=t.data,e===Xh&&Zh?null:e;default:return null}}function Pb(e,t){if(Kr)return e==="compositionend"||!Lf&&yy(e,t)?(e=gy(),ys=Df=Ln=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vy&&t.locale!=="ko"?null:t.data;default:return null}}var Db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Db[e.type]:t==="textarea"}function wy(e,t,n,r){Zv(r),t=Us(t,"onChange"),0<t.length&&(n=new Ef("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,Go=null;function Eb(e){Ly(e,0)}function Pl(e){var t=Zr(e);if(Uv(t))return e}function Ab(e,t){if(e==="change")return t}var Sy=!1;if(gn){var Cc;if(gn){var Tc="oninput"in document;if(!Tc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Tc=typeof qh.oninput=="function"}Cc=Tc}else Cc=!1;Sy=Cc&&(!document.documentMode||9<document.documentMode)}function em(){Ao&&(Ao.detachEvent("onpropertychange",by),Go=Ao=null)}function by(e){if(e.propertyName==="value"&&Pl(Go)){var t=[];wy(t,Go,e,jf(e)),ty(Eb,t)}}function Lb(e,t,n){e==="focusin"?(em(),Ao=t,Go=n,Ao.attachEvent("onpropertychange",by)):e==="focusout"&&em()}function _b(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Go)}function Ib(e,t){if(e==="click")return Pl(t)}function Mb(e,t){if(e==="input"||e==="change")return Pl(t)}function Ob(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Ob;function Ko(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_u.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nm(e,t){var n=tm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function jy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ky(){for(var e=window,t=Ns();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ns(e.document)}return t}function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rb(e){var t=ky(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jy(n.ownerDocument.documentElement,n)){if(r!==null&&_f(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nm(n,o);var a=nm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nb=gn&&"documentMode"in document&&11>=document.documentMode,Qr=null,Zu=null,Lo=null,Ju=!1;function rm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||Qr==null||Qr!==Ns(r)||(r=Qr,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lo&&Ko(Lo,r)||(Lo=r,r=Us(Zu,"onSelect"),0<r.length&&(t=new Ef("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function Va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xr={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},Pc={},Cy={};gn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Dl(e){if(Pc[e])return Pc[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cy)return Pc[e]=t[n];return e}var Ty=Dl("animationend"),Py=Dl("animationiteration"),Dy=Dl("animationstart"),Ey=Dl("transitionend"),Ay=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Ay.set(e,t),_r(t,[e])}for(var Dc=0;Dc<im.length;Dc++){var Ec=im[Dc],$b=Ec.toLowerCase(),Fb=Ec[0].toUpperCase()+Ec.slice(1);Kn($b,"on"+Fb)}Kn(Ty,"onAnimationEnd");Kn(Py,"onAnimationIteration");Kn(Dy,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Ey,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function om(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$S(r,t,void 0,e),e.currentTarget=null}function Ly(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;om(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;om(i,l,u),o=c}}}if(Fs)throw e=Gu,Fs=!1,Gu=null,e}function re(e,t){var n=t[rd];n===void 0&&(n=t[rd]=new Set);var r=e+"__bubble";n.has(r)||(_y(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),_y(n,e,r,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Ba]){e[Ba]=!0,Fv.forEach(function(n){n!=="selectionchange"&&(Vb.has(n)||Ac(n,!1,e),Ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,Ac("selectionchange",!1,t))}}function _y(e,t,n,r){switch(my(t)){case 1:var i=eb;break;case 4:i=tb;break;default:i=Pf}n=i.bind(null,t,n,e),i=void 0,!Yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Lc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=mr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ty(function(){var u=o,d=jf(n),f=[];e:{var p=Ay.get(e);if(p!==void 0){var m=Ef,y=e;switch(e){case"keypress":if(xs(n)===0)break e;case"keydown":case"keyup":m=gb;break;case"focusin":y="focus",m=kc;break;case"focusout":y="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ib;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xb;break;case Ty:case Py:case Dy:m=sb;break;case Ey:m=Sb;break;case"scroll":m=nb;break;case"wheel":m=jb;break;case"copy":case"cut":case"paste":m=cb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qh}var w=(t&4)!==0,b=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var h=u,v;h!==null;){v=h;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,g!==null&&(j=Wo(h,g),j!=null&&w.push(Xo(h,j,v)))),b)break;h=h.return}0<w.length&&(p=new m(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Uu&&(y=n.relatedTarget||n.fromElement)&&(mr(y)||y[vn]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?mr(y):null,y!==null&&(b=Ir(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Gh,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Qh,j="onPointerLeave",g="onPointerEnter",h="pointer"),b=m==null?p:Zr(m),v=y==null?p:Zr(y),p=new w(j,h+"leave",m,n,d),p.target=b,p.relatedTarget=v,j=null,mr(d)===u&&(w=new w(g,h+"enter",y,n,d),w.target=v,w.relatedTarget=b,j=w),b=j,m&&y)t:{for(w=m,g=y,h=0,v=w;v;v=Nr(v))h++;for(v=0,j=g;j;j=Nr(j))v++;for(;0<h-v;)w=Nr(w),h--;for(;0<v-h;)g=Nr(g),v--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Nr(w),g=Nr(g)}w=null}else w=null;m!==null&&am(f,p,m,w,!1),y!==null&&b!==null&&am(f,b,y,w,!0)}}e:{if(p=u?Zr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=Ab;else if(Jh(p))if(Sy)C=Mb;else{C=_b;var k=Lb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Ib);if(C&&(C=C(e,u))){wy(f,C,n,d);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Fu(p,"number",p.value)}switch(k=u?Zr(u):window,e){case"focusin":(Jh(k)||k.contentEditable==="true")&&(Qr=k,Zu=u,Lo=null);break;case"focusout":Lo=Zu=Qr=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,rm(f,n,d);break;case"selectionchange":if(Nb)break;case"keydown":case"keyup":rm(f,n,d)}var T;if(Lf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Kr?yy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vy&&n.locale!=="ko"&&(Kr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Kr&&(T=gy()):(Ln=d,Df="value"in Ln?Ln.value:Ln.textContent,Kr=!0)),k=Us(u,P),0<k.length&&(P=new Kh(P,e,null,n,d),f.push({event:P,listeners:k}),T?P.data=T:(T=xy(n),T!==null&&(P.data=T)))),(T=Cb?Tb(e,n):Pb(e,n))&&(u=Us(u,"onBeforeInput"),0<u.length&&(d=new Kh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}Ly(f,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Us(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wo(e,n),o!=null&&r.unshift(Xo(e,o,i)),o=Wo(e,t),o!=null&&r.push(Xo(e,o,i))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function am(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Wo(n,o),c!=null&&a.unshift(Xo(n,c,l))):i||(c=Wo(n,o),c!=null&&a.push(Xo(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Bb=/\r\n?/g,zb=/\u0000|\uFFFD/g;function sm(e){return(typeof e=="string"?e:""+e).replace(Bb,`
`).replace(zb,"")}function za(e,t,n){if(t=sm(t),sm(e)!==t&&n)throw Error(A(425))}function Hs(){}var qu=null,ed=null;function td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,Wb=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(Hb)}:nd;function Hb(e){setTimeout(function(){throw e})}function _c(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yo(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),qt="__reactFiber$"+$i,Zo="__reactProps$"+$i,vn="__reactContainer$"+$i,rd="__reactEvents$"+$i,Yb="__reactListeners$"+$i,Gb="__reactHandles$"+$i;function mr(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cm(e);e!==null;){if(n=e[qt])return n;e=cm(e)}return t}e=n,n=e.parentNode}return null}function va(e){return e=e[qt]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function El(e){return e[Zo]||null}var id=[],Jr=-1;function Qn(e){return{current:e}}function oe(e){0>Jr||(e.current=id[Jr],id[Jr]=null,Jr--)}function ne(e,t){Jr++,id[Jr]=e.current,e.current=t}var Hn={},Qe=Qn(Hn),st=Qn(!1),Pr=Hn;function Si(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function Ys(){oe(st),oe(Qe)}function um(e,t,n){if(Qe.current!==Hn)throw Error(A(168));ne(Qe,t),ne(st,n)}function Iy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,LS(e)||"Unknown",i));return ge({},n,r)}function Gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,Pr=Qe.current,ne(Qe,e),ne(st,st.current),!0}function dm(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Iy(e,t,Pr),r.__reactInternalMemoizedMergedChildContext=e,oe(st),oe(Qe),ne(Qe,e)):oe(st),ne(st,n)}var un=null,Al=!1,Ic=!1;function My(e){un===null?un=[e]:un.push(e)}function Kb(e){Al=!0,My(e)}function Xn(){if(!Ic&&un!==null){Ic=!0;var e=0,t=te;try{var n=un;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,Al=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),oy(kf,Xn),i}finally{te=t,Ic=!1}}return null}var qr=[],ei=0,Ks=null,Qs=0,kt=[],Ct=0,Dr=null,dn=1,fn="";function dr(e,t){qr[ei++]=Qs,qr[ei++]=Ks,Ks=e,Qs=t}function Oy(e,t,n){kt[Ct++]=dn,kt[Ct++]=fn,kt[Ct++]=Dr,Dr=e;var r=dn;e=fn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var o=32-$t(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-$t(t)+i|n<<i|r,fn=o+e}else dn=1<<o|n<<i|r,fn=e}function If(e){e.return!==null&&(dr(e,1),Oy(e,1,0))}function Mf(e){for(;e===Ks;)Ks=qr[--ei],qr[ei]=null,Qs=qr[--ei],qr[ei]=null;for(;e===Dr;)Dr=kt[--Ct],kt[Ct]=null,fn=kt[--Ct],kt[Ct]=null,dn=kt[--Ct],kt[Ct]=null}var ht=null,pt=null,ue=!1,Nt=null;function Ry(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function od(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ad(e){if(ue){var t=pt;if(t){var n=t;if(!fm(e,t)){if(od(e))throw Error(A(418));t=Nn(n.nextSibling);var r=ht;t&&fm(e,t)?Ry(r,n):(e.flags=e.flags&-4097|2,ue=!1,ht=e)}}else{if(od(e))throw Error(A(418));e.flags=e.flags&-4097|2,ue=!1,ht=e}}}function pm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Wa(e){if(e!==ht)return!1;if(!ue)return pm(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!td(e.type,e.memoizedProps)),t&&(t=pt)){if(od(e))throw Ny(),Error(A(418));for(;t;)Ry(e,t),t=Nn(t.nextSibling)}if(pm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?Nn(e.stateNode.nextSibling):null;return!0}function Ny(){for(var e=pt;e;)e=Nn(e.nextSibling)}function bi(){pt=ht=null,ue=!1}function Of(e){Nt===null?Nt=[e]:Nt.push(e)}var Qb=Sn.ReactCurrentBatchConfig;function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ua(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hm(e){var t=e._init;return t(e._payload)}function $y(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Bn(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,v,j){return h===null||h.tag!==6?(h=Vc(v,g.mode,j),h.return=g,h):(h=i(h,v),h.return=g,h)}function c(g,h,v,j){var C=v.type;return C===Gr?d(g,h,v.props.children,j,v.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pn&&hm(C)===h.type)?(j=i(h,v.props),j.ref=eo(g,h,v),j.return=g,j):(j=Ts(v.type,v.key,v.props,null,g.mode,j),j.ref=eo(g,h,v),j.return=g,j)}function u(g,h,v,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Bc(v,g.mode,j),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,j,C){return h===null||h.tag!==7?(h=Sr(v,g.mode,j,C),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vc(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ia:return v=Ts(h.type,h.key,h.props,null,g.mode,v),v.ref=eo(g,null,h),v.return=g,v;case Yr:return h=Bc(h,g.mode,v),h.return=g,h;case Pn:var j=h._init;return f(g,j(h._payload),v)}if(yo(h)||Qi(h))return h=Sr(h,g.mode,v,null),h.return=g,h;Ua(g,h)}return null}function p(g,h,v,j){var C=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(g,h,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:return v.key===C?c(g,h,v,j):null;case Yr:return v.key===C?u(g,h,v,j):null;case Pn:return C=v._init,p(g,h,C(v._payload),j)}if(yo(v)||Qi(v))return C!==null?null:d(g,h,v,j,null);Ua(g,v)}return null}function m(g,h,v,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(v)||null,l(h,g,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ia:return g=g.get(j.key===null?v:j.key)||null,c(h,g,j,C);case Yr:return g=g.get(j.key===null?v:j.key)||null,u(h,g,j,C);case Pn:var k=j._init;return m(g,h,v,k(j._payload),C)}if(yo(j)||Qi(j))return g=g.get(v)||null,d(h,g,j,C,null);Ua(h,j)}return null}function y(g,h,v,j){for(var C=null,k=null,T=h,P=h=0,L=null;T!==null&&P<v.length;P++){T.index>P?(L=T,T=null):L=T.sibling;var _=p(g,T,v[P],j);if(_===null){T===null&&(T=L);break}e&&T&&_.alternate===null&&t(g,T),h=o(_,h,P),k===null?C=_:k.sibling=_,k=_,T=L}if(P===v.length)return n(g,T),ue&&dr(g,P),C;if(T===null){for(;P<v.length;P++)T=f(g,v[P],j),T!==null&&(h=o(T,h,P),k===null?C=T:k.sibling=T,k=T);return ue&&dr(g,P),C}for(T=r(g,T);P<v.length;P++)L=m(T,g,P,v[P],j),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?P:L.key),h=o(L,h,P),k===null?C=L:k.sibling=L,k=L);return e&&T.forEach(function(R){return t(g,R)}),ue&&dr(g,P),C}function w(g,h,v,j){var C=Qi(v);if(typeof C!="function")throw Error(A(150));if(v=C.call(v),v==null)throw Error(A(151));for(var k=C=null,T=h,P=h=0,L=null,_=v.next();T!==null&&!_.done;P++,_=v.next()){T.index>P?(L=T,T=null):L=T.sibling;var R=p(g,T,_.value,j);if(R===null){T===null&&(T=L);break}e&&T&&R.alternate===null&&t(g,T),h=o(R,h,P),k===null?C=R:k.sibling=R,k=R,T=L}if(_.done)return n(g,T),ue&&dr(g,P),C;if(T===null){for(;!_.done;P++,_=v.next())_=f(g,_.value,j),_!==null&&(h=o(_,h,P),k===null?C=_:k.sibling=_,k=_);return ue&&dr(g,P),C}for(T=r(g,T);!_.done;P++,_=v.next())_=m(T,g,P,_.value,j),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?P:_.key),h=o(_,h,P),k===null?C=_:k.sibling=_,k=_);return e&&T.forEach(function(I){return t(g,I)}),ue&&dr(g,P),C}function b(g,h,v,j){if(typeof v=="object"&&v!==null&&v.type===Gr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:e:{for(var C=v.key,k=h;k!==null;){if(k.key===C){if(C=v.type,C===Gr){if(k.tag===7){n(g,k.sibling),h=i(k,v.props.children),h.return=g,g=h;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pn&&hm(C)===k.type){n(g,k.sibling),h=i(k,v.props),h.ref=eo(g,k,v),h.return=g,g=h;break e}n(g,k);break}else t(g,k);k=k.sibling}v.type===Gr?(h=Sr(v.props.children,g.mode,j,v.key),h.return=g,g=h):(j=Ts(v.type,v.key,v.props,null,g.mode,j),j.ref=eo(g,h,v),j.return=g,g=j)}return a(g);case Yr:e:{for(k=v.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Bc(v,g.mode,j),h.return=g,g=h}return a(g);case Pn:return k=v._init,b(g,h,k(v._payload),j)}if(yo(v))return y(g,h,v,j);if(Qi(v))return w(g,h,v,j);Ua(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=Vc(v,g.mode,j),h.return=g,g=h),a(g)):n(g,h)}return b}var ji=$y(!0),Fy=$y(!1),Xs=Qn(null),Zs=null,ti=null,Rf=null;function Nf(){Rf=ti=Zs=null}function $f(e){var t=Xs.current;oe(Xs),e._currentValue=t}function sd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yi(e,t){Zs=e,Rf=ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Rf!==e)if(e={context:e,memoizedValue:t,next:null},ti===null){if(Zs===null)throw Error(A(308));ti=e,Zs.dependencies={lanes:0,firstContext:e}}else ti=ti.next=e;return t}var gr=null;function Ff(e){gr===null?gr=[e]:gr.push(e)}function Vy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ff(t)):(n.next=i.next,i.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function By(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ff(r)):(t.next=i.next,i.next=t),r.interleaved=t,yn(e,n)}function ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cf(e,n)}}function mm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Js(e,t,n,r){var i=e.updateQueue;Dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,l=o;do{var p=l.lane,m=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=ge({},f,p);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ar|=a,e.lanes=a,e.memoizedState=f}}function gm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ya={},rn=Qn(ya),Jo=Qn(ya),qo=Qn(ya);function vr(e){if(e===ya)throw Error(A(174));return e}function Bf(e,t){switch(ne(qo,t),ne(Jo,e),ne(rn,ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bu(t,e)}oe(rn),ne(rn,t)}function ki(){oe(rn),oe(Jo),oe(qo)}function zy(e){vr(qo.current);var t=vr(rn.current),n=Bu(t,e.type);t!==n&&(ne(Jo,e),ne(rn,n))}function zf(e){Jo.current===e&&(oe(rn),oe(Jo))}var pe=Qn(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mc=[];function Wf(){for(var e=0;e<Mc.length;e++)Mc[e]._workInProgressVersionPrimary=null;Mc.length=0}var Ss=Sn.ReactCurrentDispatcher,Oc=Sn.ReactCurrentBatchConfig,Er=0,me=null,Ae=null,_e=null,el=!1,_o=!1,ea=0,Xb=0;function We(){throw Error(A(321))}function Uf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Hf(e,t,n,r,i,o){if(Er=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?ej:tj,e=n(r,i),_o){o=0;do{if(_o=!1,ea=0,25<=o)throw Error(A(301));o+=1,_e=Ae=null,t.updateQueue=null,Ss.current=nj,e=n(r,i)}while(_o)}if(Ss.current=tl,t=Ae!==null&&Ae.next!==null,Er=0,_e=Ae=me=null,el=!1,t)throw Error(A(300));return e}function Yf(){var e=ea!==0;return ea=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?me.memoizedState=_e=e:_e=_e.next=e,_e}function Et(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=_e===null?me.memoizedState:_e.next;if(t!==null)_e=t,Ae=e;else{if(e===null)throw Error(A(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},_e===null?me.memoizedState=_e=e:_e=_e.next=e}return _e}function ta(e,t){return typeof t=="function"?t(e):t}function Rc(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((Er&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,me.lanes|=d,Ar|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,zt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nc(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);zt(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wy(){}function Uy(e,t){var n=me,r=Et(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Gf(Gy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,na(9,Yy.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(A(349));Er&30||Hy(n,t,i)}return i}function Hy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yy(e,t,n,r){t.value=n,t.getSnapshot=r,Ky(t)&&Qy(e)}function Gy(e,t,n){return n(function(){Ky(t)&&Qy(e)})}function Ky(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Qy(e){var t=yn(e,1);t!==null&&Ft(t,e,1,-1)}function vm(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t.queue=e,e=e.dispatch=qb.bind(null,me,e),[t.memoizedState,e]}function na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xy(){return Et().memoizedState}function bs(e,t,n,r){var i=Zt();me.flags|=e,i.memoizedState=na(1|t,n,void 0,r===void 0?null:r)}function Ll(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&Uf(r,a.deps)){i.memoizedState=na(t,n,o,r);return}}me.flags|=e,i.memoizedState=na(1|t,n,o,r)}function ym(e,t){return bs(8390656,8,e,t)}function Gf(e,t){return Ll(2048,8,e,t)}function Zy(e,t){return Ll(4,2,e,t)}function Jy(e,t){return Ll(4,4,e,t)}function qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ex(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4,4,qy.bind(null,t,e),n)}function Kf(){}function tx(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nx(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rx(e,t,n){return Er&21?(zt(n,t)||(n=ly(),me.lanes|=n,Ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function Zb(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Oc.transition;Oc.transition={};try{e(!1),t()}finally{te=n,Oc.transition=r}}function ix(){return Et().memoizedState}function Jb(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ox(e))ax(t,n);else if(n=Vy(e,t,n,r),n!==null){var i=Je();Ft(n,e,r,i),sx(n,t,r)}}function qb(e,t,n){var r=Vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ox(e))ax(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,a)){var c=t.interleaved;c===null?(i.next=i,Ff(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Vy(e,t,i,r),n!==null&&(i=Je(),Ft(n,e,r,i),sx(n,t,r))}}function ox(e){var t=e.alternate;return e===me||t!==null&&t===me}function ax(e,t){_o=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cf(e,n)}}var tl={readContext:Dt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},ej={readContext:Dt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:ym,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bs(4194308,4,qy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bs(4194308,4,e,t)},useInsertionEffect:function(e,t){return bs(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jb.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:vm,useDebugValue:Kf,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=vm(!1),t=e[0];return e=Zb.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Zt();if(ue){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Me===null)throw Error(A(349));Er&30||Hy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ym(Gy.bind(null,r,o,e),[e]),r.flags|=2048,na(9,Yy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Me.identifierPrefix;if(ue){var n=fn,r=dn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tj={readContext:Dt,useCallback:tx,useContext:Dt,useEffect:Gf,useImperativeHandle:ex,useInsertionEffect:Zy,useLayoutEffect:Jy,useMemo:nx,useReducer:Rc,useRef:Xy,useState:function(){return Rc(ta)},useDebugValue:Kf,useDeferredValue:function(e){var t=Et();return rx(t,Ae.memoizedState,e)},useTransition:function(){var e=Rc(ta)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Wy,useSyncExternalStore:Uy,useId:ix,unstable_isNewReconciler:!1},nj={readContext:Dt,useCallback:tx,useContext:Dt,useEffect:Gf,useImperativeHandle:ex,useInsertionEffect:Zy,useLayoutEffect:Jy,useMemo:nx,useReducer:Nc,useRef:Xy,useState:function(){return Nc(ta)},useDebugValue:Kf,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:rx(t,Ae.memoizedState,e)},useTransition:function(){var e=Nc(ta)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Wy,useSyncExternalStore:Uy,useId:ix,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ld(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Vn(e),o=pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(Ft(t,e,i,r),ws(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Vn(e),o=pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(Ft(t,e,i,r),ws(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Vn(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,r),t!==null&&(Ft(t,e,r,n),ws(t,e,r))}};function xm(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,o):!0}function lx(e,t,n){var r=!1,i=Hn,o=t.contextType;return typeof o=="object"&&o!==null?o=Dt(o):(i=lt(t)?Pr:Qe.current,r=t.contextTypes,o=(r=r!=null)?Si(e,i):Hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function cd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Dt(o):(o=lt(t)?Pr:Qe.current,i.context=Si(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ld(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_l.enqueueReplaceState(i,i.state,null),Js(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ci(e,t){try{var n="",r=t;do n+=AS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function $c(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ud(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rj=typeof WeakMap=="function"?WeakMap:Map;function cx(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,wd=r),ud(e,t)},n}function ux(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ud(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ud(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Sm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vj.bind(null,e,t,n),t.then(e,e))}function bm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var ij=Sn.ReactCurrentOwner,at=!1;function Ze(e,t,n,r){t.child=e===null?Fy(t,null,n,r):ji(t,e.child,n,r)}function km(e,t,n,r,i){n=n.render;var o=t.ref;return yi(t,i),r=Hf(e,t,n,r,o,i),n=Yf(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(ue&&n&&If(t),t.flags|=1,Ze(e,t,r,i),t.child)}function Cm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!np(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dx(e,t,o,r,i)):(e=Ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(a,r)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=Bn(o,r),e.ref=t.ref,e.return=t,t.child=e}function dx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ko(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,xn(e,t,i)}return dd(e,t,n,r,i)}function fx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ri,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(ri,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(ri,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(ri,dt),dt|=r;return Ze(e,t,i,n),t.child}function px(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dd(e,t,n,r,i){var o=lt(n)?Pr:Qe.current;return o=Si(t,o),yi(t,i),n=Hf(e,t,n,r,o,i),r=Yf(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(ue&&r&&If(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Tm(e,t,n,r,i){if(lt(n)){var o=!0;Gs(t)}else o=!1;if(yi(t,i),t.stateNode===null)js(e,t),lx(t,n,r),cd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=lt(n)?Pr:Qe.current,u=Si(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&wm(t,a,r,u),Dn=!1;var p=t.memoizedState;a.state=p,Js(t,r,a,i),c=t.memoizedState,l!==r||p!==c||st.current||Dn?(typeof d=="function"&&(ld(t,n,d,r),c=t.memoizedState),(l=Dn||xm(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,By(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Dt(c):(c=lt(n)?Pr:Qe.current,c=Si(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&wm(t,a,r,c),Dn=!1,p=t.memoizedState,a.state=p,Js(t,r,a,i);var y=t.memoizedState;l!==f||p!==y||st.current||Dn?(typeof m=="function"&&(ld(t,n,m,r),y=t.memoizedState),(u=Dn||xm(t,n,u,r,p,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fd(e,t,n,r,o,i)}function fd(e,t,n,r,i,o){px(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&dm(t,n,!1),xn(e,t,o);r=t.stateNode,ij.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ji(t,e.child,null,o),t.child=ji(t,null,l,o)):Ze(e,t,l,o),t.memoizedState=r.state,i&&dm(t,n,!0),t.child}function hx(e){var t=e.stateNode;t.pendingContext?um(e,t.pendingContext,t.pendingContext!==t.context):t.context&&um(e,t.context,!1),Bf(e,t.containerInfo)}function Pm(e,t,n,r,i){return bi(),Of(i),t.flags|=256,Ze(e,t,n,r),t.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function hd(e){return{baseLanes:e,cachePool:null,transitions:null}}function mx(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(pe,i&1),e===null)return ad(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ol(a,r,0,null),e=Sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hd(n),t.memoizedState=pd,e):Qf(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Bn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bn(l,o):(o=Sr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=pd,r}return o=e.child,e=o.sibling,r=Bn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qf(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ha(e,t,n,r){return r!==null&&Of(r),ji(t,e.child,null,n),e=Qf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=$c(Error(A(422))),Ha(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ol({mode:"visible",children:r.children},i,0,null),o=Sr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ji(t,e.child,null,a),t.child.memoizedState=hd(a),t.memoizedState=pd,o);if(!(t.mode&1))return Ha(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(A(419)),r=$c(o,r,void 0),Ha(e,t,a,r)}if(l=(a&e.childLanes)!==0,at||l){if(r=Me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yn(e,i),Ft(r,e,i,-1))}return tp(),r=$c(Error(A(421))),Ha(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Nn(i.nextSibling),ht=t,ue=!0,Nt=null,e!==null&&(kt[Ct++]=dn,kt[Ct++]=fn,kt[Ct++]=Dr,dn=e.id,fn=e.overflow,Dr=t),t=Qf(t,r.children),t.flags|=4096,t)}function Dm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sd(e.return,t,n)}function Fc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function gx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dm(e,n,t);else if(e.tag===19)Dm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fc(t,!0,n,null,o);break;case"together":Fc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function aj(e,t,n){switch(t.tag){case 3:hx(t),bi();break;case 5:zy(t);break;case 1:lt(t.type)&&Gs(t);break;case 4:Bf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?mx(e,t,n):(ne(pe,pe.current&1),e=xn(e,t,n),e!==null?e.sibling:null);ne(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,fx(e,t,n)}return xn(e,t,n)}var vx,md,yx,xx;vx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};yx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vr(rn.current);var o=null;switch(n){case"input":i=Nu(e,i),r=Nu(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Vu(e,i),r=Vu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hs)}zu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};xx=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sj(e,t,n){var r=t.pendingProps;switch(Mf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return lt(t.type)&&Ys(),Ue(t),null;case 3:return r=t.stateNode,ki(),oe(st),oe(Qe),Wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(jd(Nt),Nt=null))),md(e,t),Ue(t),null;case 5:zf(t);var i=vr(qo.current);if(n=t.type,e!==null&&t.stateNode!=null)yx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ue(t),null}if(e=vr(rn.current),Wa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qt]=t,r[Zo]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)re(wo[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Nh(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Fh(r,o),re("invalid",r)}zu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&za(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&za(r.textContent,l,e),i=["children",""+l]):Bo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":Ma(r),$h(r,o,!0);break;case"textarea":Ma(r),Vh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[Zo]=r,vx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wu(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)re(wo[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":Nh(e,r),i=Nu(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),re("invalid",e);break;case"textarea":Fh(e,r),i=Vu(e,r),re("invalid",e);break;default:i=r}zu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Xv(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Kv(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&zo(e,c):typeof c=="number"&&zo(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&re("scroll",e):c!=null&&xf(e,o,c,a))}switch(n){case"input":Ma(e),$h(e,r,!1);break;case"textarea":Ma(e),Vh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hi(e,!!r.multiple,o,!1):r.defaultValue!=null&&hi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)xx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=vr(qo.current),vr(rn.current),Wa(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:za(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return Ue(t),null;case 13:if(oe(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&pt!==null&&t.mode&1&&!(t.flags&128))Ny(),bi(),t.flags|=98560,o=!1;else if(o=Wa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[qt]=t}else bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else Nt!==null&&(jd(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):tp())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return ki(),md(e,t),e===null&&Qo(t.stateNode.containerInfo),Ue(t),null;case 10:return $f(t.type._context),Ue(t),null;case 17:return lt(t.type)&&Ys(),Ue(t),null;case 19:if(oe(pe),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)to(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qs(e),a!==null){for(t.flags|=128,to(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>Ti&&(t.flags|=128,r=!0,to(o,!1),t.lanes=4194304)}else{if(!r)if(e=qs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Ue(t),null}else 2*Se()-o.renderingStartTime>Ti&&n!==1073741824&&(t.flags|=128,r=!0,to(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=pe.current,ne(pe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return ep(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function lj(e,t){switch(Mf(t),t.tag){case 1:return lt(t.type)&&Ys(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ki(),oe(st),oe(Qe),Wf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zf(t),null;case 13:if(oe(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(pe),null;case 4:return ki(),null;case 10:return $f(t.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Ya=!1,Ye=!1,cj=typeof WeakSet=="function"?WeakSet:Set,$=null;function ni(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function gd(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Em=!1;function uj(e,t){if(qu=zs,e=ky(),_f(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++d===r&&(c=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:e,selectionRange:n},zs=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,b=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ot(t.type,w),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(j){xe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=Em,Em=!1,y}function Io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gd(t,n,o)}i=i.next}while(i!==r)}}function Il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wx(e){var t=e.alternate;t!==null&&(e.alternate=null,wx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Zo],delete t[rd],delete t[Yb],delete t[Gb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sx(e){return e.tag===5||e.tag===3||e.tag===4}function Am(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hs));else if(r!==4&&(e=e.child,e!==null))for(yd(e,t,n),e=e.sibling;e!==null;)yd(e,t,n),e=e.sibling}function xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xd(e,t,n),e=e.sibling;e!==null;)xd(e,t,n),e=e.sibling}var Ne=null,Rt=!1;function jn(e,t,n){for(n=n.child;n!==null;)bx(e,t,n),n=n.sibling}function bx(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Ye||ni(n,t);case 6:var r=Ne,i=Rt;Ne=null,jn(e,t,n),Ne=r,Rt=i,Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?_c(e.parentNode,n):e.nodeType===1&&_c(e,n),Yo(e)):_c(Ne,n.stateNode));break;case 4:r=Ne,i=Rt,Ne=n.stateNode.containerInfo,Rt=!0,jn(e,t,n),Ne=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&gd(n,t,a),i=i.next}while(i!==r)}jn(e,t,n);break;case 1:if(!Ye&&(ni(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,jn(e,t,n),Ye=r):jn(e,t,n);break;default:jn(e,t,n)}}function Lm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cj),t.forEach(function(r){var i=xj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,Rt=!1;break e;case 3:Ne=l.stateNode.containerInfo,Rt=!0;break e;case 4:Ne=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Ne===null)throw Error(A(160));bx(o,a,i),Ne=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jx(t,e),t=t.sibling}function jx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ht(e),r&4){try{Io(3,e,e.return),Il(3,e)}catch(w){xe(e,e.return,w)}try{Io(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:It(t,e),Ht(e),r&512&&n!==null&&ni(n,n.return);break;case 5:if(It(t,e),Ht(e),r&512&&n!==null&&ni(n,n.return),e.flags&32){var i=e.stateNode;try{zo(i,"")}catch(w){xe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Hv(i,o),Wu(l,a);var u=Wu(l,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Xv(i,f):d==="dangerouslySetInnerHTML"?Kv(i,f):d==="children"?zo(i,f):xf(i,d,f,u)}switch(l){case"input":$u(i,o);break;case"textarea":Yv(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?hi(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?hi(i,!!o.multiple,o.defaultValue,!0):hi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zo]=o}catch(w){xe(e,e.return,w)}}break;case 6:if(It(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){xe(e,e.return,w)}}break;case 3:if(It(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:It(t,e),Ht(e);break;case 13:It(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jf=Se())),r&4&&Lm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,It(t,e),Ye=u):It(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(f=$=d;$!==null;){switch(p=$,m=p.child,p.tag){case 0:case 11:case 14:case 15:Io(4,p,p.return);break;case 1:ni(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:ni(p,p.return);break;case 22:if(p.memoizedState!==null){Im(f);continue}}m!==null?(m.return=p,$=m):Im(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Qv("display",a))}catch(w){xe(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){xe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Ht(e),r&4&&Lm(e);break;case 21:break;default:It(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sx(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zo(i,""),r.flags&=-33);var o=Am(e);xd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Am(e);yd(e,l,a);break;default:throw Error(A(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dj(e,t,n){$=e,kx(e)}function kx(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ya;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ye;l=Ya;var u=Ye;if(Ya=a,(Ye=c)&&!u)for($=i;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?Mm(i):c!==null?(c.return=a,$=c):Mm(i);for(;o!==null;)$=o,kx(o),o=o.sibling;$=i,Ya=l,Ye=u}_m(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):_m(e)}}function _m(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gm(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gm(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ye||t.flags&512&&vd(t)}catch(p){xe(t,t.return,p)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Im(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Mm(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Il(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xe(t,i,c)}}var o=t.return;try{vd(t)}catch(c){xe(t,o,c)}break;case 5:var a=t.return;try{vd(t)}catch(c){xe(t,a,c)}}}catch(c){xe(t,t.return,c)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var fj=Math.ceil,nl=Sn.ReactCurrentDispatcher,Xf=Sn.ReactCurrentOwner,Pt=Sn.ReactCurrentBatchConfig,q=0,Me=null,Ce=null,Be=0,dt=0,ri=Qn(0),Le=0,ra=null,Ar=0,Ml=0,Zf=0,Mo=null,ot=null,Jf=0,Ti=1/0,ln=null,rl=!1,wd=null,Fn=null,Ga=!1,_n=null,il=0,Oo=0,Sd=null,ks=-1,Cs=0;function Je(){return q&6?Se():ks!==-1?ks:ks=Se()}function Vn(e){return e.mode&1?q&2&&Be!==0?Be&-Be:Qb.transition!==null?(Cs===0&&(Cs=ly()),Cs):(e=te,e!==0||(e=window.event,e=e===void 0?16:my(e.type)),e):1}function Ft(e,t,n,r){if(50<Oo)throw Oo=0,Sd=null,Error(A(185));ma(e,n,r),(!(q&2)||e!==Me)&&(e===Me&&(!(q&2)&&(Ml|=n),Le===4&&An(e,Be)),ct(e,r),n===1&&q===0&&!(t.mode&1)&&(Ti=Se()+500,Al&&Xn()))}function ct(e,t){var n=e.callbackNode;QS(e,t);var r=Bs(e,e===Me?Be:0);if(r===0)n!==null&&Wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wh(n),t===1)e.tag===0?Kb(Om.bind(null,e)):My(Om.bind(null,e)),Ub(function(){!(q&6)&&Xn()}),n=null;else{switch(cy(r)){case 1:n=kf;break;case 4:n=ay;break;case 16:n=Vs;break;case 536870912:n=sy;break;default:n=Vs}n=_x(n,Cx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cx(e,t){if(ks=-1,Cs=0,q&6)throw Error(A(327));var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var r=Bs(e,e===Me?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ol(e,r);else{t=r;var i=q;q|=2;var o=Px();(Me!==e||Be!==t)&&(ln=null,Ti=Se()+500,wr(e,t));do try{mj();break}catch(l){Tx(e,l)}while(!0);Nf(),nl.current=o,q=i,Ce!==null?t=0:(Me=null,Be=0,t=Le)}if(t!==0){if(t===2&&(i=Ku(e),i!==0&&(r=i,t=bd(e,i))),t===1)throw n=ra,wr(e,0),An(e,r),ct(e,Se()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!pj(i)&&(t=ol(e,r),t===2&&(o=Ku(e),o!==0&&(r=o,t=bd(e,o))),t===1))throw n=ra,wr(e,0),An(e,r),ct(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:fr(e,ot,ln);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Jf+500-Se(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nd(fr.bind(null,e,ot,ln),t);break}fr(e,ot,ln);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-$t(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fj(r/1960))-r,10<r){e.timeoutHandle=nd(fr.bind(null,e,ot,ln),r);break}fr(e,ot,ln);break;case 5:fr(e,ot,ln);break;default:throw Error(A(329))}}}return ct(e,Se()),e.callbackNode===n?Cx.bind(null,e):null}function bd(e,t){var n=Mo;return e.current.memoizedState.isDehydrated&&(wr(e,t).flags|=256),e=ol(e,t),e!==2&&(t=ot,ot=n,t!==null&&jd(t)),e}function jd(e){ot===null?ot=e:ot.push.apply(ot,e)}function pj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Zf,t&=~Ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function Om(e){if(q&6)throw Error(A(327));xi();var t=Bs(e,0);if(!(t&1))return ct(e,Se()),null;var n=ol(e,t);if(e.tag!==0&&n===2){var r=Ku(e);r!==0&&(t=r,n=bd(e,r))}if(n===1)throw n=ra,wr(e,0),An(e,t),ct(e,Se()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e,ot,ln),ct(e,Se()),null}function qf(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Ti=Se()+500,Al&&Xn())}}function Lr(e){_n!==null&&_n.tag===0&&!(q&6)&&xi();var t=q;q|=1;var n=Pt.transition,r=te;try{if(Pt.transition=null,te=1,e)return e()}finally{te=r,Pt.transition=n,q=t,!(q&6)&&Xn()}}function ep(){dt=ri.current,oe(ri)}function wr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wb(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ys();break;case 3:ki(),oe(st),oe(Qe),Wf();break;case 5:zf(r);break;case 4:ki();break;case 13:oe(pe);break;case 19:oe(pe);break;case 10:$f(r.type._context);break;case 22:case 23:ep()}n=n.return}if(Me=e,Ce=e=Bn(e.current,null),Be=dt=t,Le=0,ra=null,Zf=Ml=Ar=0,ot=Mo=null,gr!==null){for(t=0;t<gr.length;t++)if(n=gr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}gr=null}return e}function Tx(e,t){do{var n=Ce;try{if(Nf(),Ss.current=tl,el){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}el=!1}if(Er=0,_e=Ae=me=null,_o=!1,ea=0,Xf.current=null,n===null||n.return===null){Le=1,ra=t,Ce=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Be,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=bm(a);if(m!==null){m.flags&=-257,jm(m,a,l,o,t),m.mode&1&&Sm(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Sm(o,u,t),tp();break e}c=Error(A(426))}}else if(ue&&l.mode&1){var b=bm(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),jm(b,a,l,o,t),Of(Ci(c,l));break e}}o=c=Ci(c,l),Le!==4&&(Le=2),Mo===null?Mo=[o]:Mo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=cx(o,c,t);mm(o,g);break e;case 1:l=c;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fn===null||!Fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=ux(o,l,t);mm(o,j);break e}}o=o.return}while(o!==null)}Ex(n)}catch(C){t=C,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Px(){var e=nl.current;return nl.current=tl,e===null?tl:e}function tp(){(Le===0||Le===3||Le===2)&&(Le=4),Me===null||!(Ar&268435455)&&!(Ml&268435455)||An(Me,Be)}function ol(e,t){var n=q;q|=2;var r=Px();(Me!==e||Be!==t)&&(ln=null,wr(e,t));do try{hj();break}catch(i){Tx(e,i)}while(!0);if(Nf(),q=n,nl.current=r,Ce!==null)throw Error(A(261));return Me=null,Be=0,Le}function hj(){for(;Ce!==null;)Dx(Ce)}function mj(){for(;Ce!==null&&!VS();)Dx(Ce)}function Dx(e){var t=Lx(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Ex(e):Ce=t,Xf.current=null}function Ex(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lj(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ce=null;return}}else if(n=sj(n,t,dt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Le===0&&(Le=5)}function fr(e,t,n){var r=te,i=Pt.transition;try{Pt.transition=null,te=1,gj(e,t,n,r)}finally{Pt.transition=i,te=r}return null}function gj(e,t,n,r){do xi();while(_n!==null);if(q&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(XS(e,o),e===Me&&(Ce=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,_x(Vs,function(){return xi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var a=te;te=1;var l=q;q|=4,Xf.current=null,uj(e,n),jx(n,e),Rb(ed),zs=!!qu,ed=qu=null,e.current=n,dj(n),BS(),q=l,te=a,Pt.transition=o}else e.current=n;if(Ga&&(Ga=!1,_n=e,il=i),o=e.pendingLanes,o===0&&(Fn=null),US(n.stateNode),ct(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,e=wd,wd=null,e;return il&1&&e.tag!==0&&xi(),o=e.pendingLanes,o&1?e===Sd?Oo++:(Oo=0,Sd=e):Oo=0,Xn(),null}function xi(){if(_n!==null){var e=cy(il),t=Pt.transition,n=te;try{if(Pt.transition=null,te=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,il=0,q&6)throw Error(A(331));var i=q;for(q|=4,$=e.current;$!==null;){var o=$,a=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Io(8,d,o)}var f=d.child;if(f!==null)f.return=d,$=f;else for(;$!==null;){d=$;var p=d.sibling,m=d.return;if(wx(d),d===u){$=null;break}if(p!==null){p.return=m,$=p;break}$=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Io(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,$=g;break e}$=o.return}}var h=e.current;for($=h;$!==null;){a=$;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,$=v;else e:for(a=h;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Il(9,l)}}catch(C){xe(l,l.return,C)}if(l===a){$=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,$=j;break e}$=l.return}}if(q=i,Xn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Cl,e)}catch{}r=!0}return r}finally{te=n,Pt.transition=t}}return!1}function Rm(e,t,n){t=Ci(n,t),t=cx(e,t,1),e=$n(e,t,1),t=Je(),e!==null&&(ma(e,1,t),ct(e,t))}function xe(e,t,n){if(e.tag===3)Rm(e,e,n);else for(;t!==null;){if(t.tag===3){Rm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=Ci(n,e),e=ux(t,e,1),t=$n(t,e,1),e=Je(),t!==null&&(ma(t,1,e),ct(t,e));break}}t=t.return}}function vj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Be&n)===n&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Se()-Jf?wr(e,0):Zf|=n),ct(e,t)}function Ax(e,t){t===0&&(e.mode&1?(t=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):t=1);var n=Je();e=yn(e,t),e!==null&&(ma(e,t,n),ct(e,n))}function yj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ax(e,n)}function xj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Ax(e,n)}var Lx;Lx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,aj(e,t,n);at=!!(e.flags&131072)}else at=!1,ue&&t.flags&1048576&&Oy(t,Qs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=Si(t,Qe.current);yi(t,n),i=Hf(null,t,r,e,i,n);var o=Yf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,Gs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vf(t),i.updater=_l,t.stateNode=i,i._reactInternals=t,cd(t,r,e,n),t=fd(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&If(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sj(r),e=Ot(r,e),i){case 0:t=dd(null,t,r,e,n);break e;case 1:t=Tm(null,t,r,e,n);break e;case 11:t=km(null,t,r,e,n);break e;case 14:t=Cm(null,t,r,Ot(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),dd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Tm(e,t,r,i,n);case 3:e:{if(hx(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,By(e,t),Js(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ci(Error(A(423)),t),t=Pm(e,t,r,n,i);break e}else if(r!==i){i=Ci(Error(A(424)),t),t=Pm(e,t,r,n,i);break e}else for(pt=Nn(t.stateNode.containerInfo.firstChild),ht=t,ue=!0,Nt=null,n=Fy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){t=xn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return zy(t),e===null&&ad(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,td(r,i)?a=null:o!==null&&td(r,o)&&(t.flags|=32),px(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&ad(t),null;case 13:return mx(e,t,n);case 4:return Bf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ji(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),km(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(Xs,r._currentValue),r._currentValue=a,o!==null)if(zt(o.value,a)){if(o.children===i.children&&!st.current){t=xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=pn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),sd(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),sd(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yi(t,n),i=Dt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),Cm(e,t,r,i,n);case 15:return dx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),js(e,t),t.tag=1,lt(r)?(e=!0,Gs(t)):e=!1,yi(t,n),lx(t,r,i),cd(t,r,i,n),fd(null,t,r,!0,e,n);case 19:return gx(e,t,n);case 22:return fx(e,t,n)}throw Error(A(156,t.tag))};function _x(e,t){return oy(e,t)}function wj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new wj(e,t,n,r)}function np(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sj(e){if(typeof e=="function")return np(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sf)return 11;if(e===bf)return 14}return 2}function Bn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")np(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Gr:return Sr(n.children,i,o,t);case wf:a=8,i|=8;break;case Iu:return e=Tt(12,n,t,i|2),e.elementType=Iu,e.lanes=o,e;case Mu:return e=Tt(13,n,t,i),e.elementType=Mu,e.lanes=o,e;case Ou:return e=Tt(19,n,t,i),e.elementType=Ou,e.lanes=o,e;case zv:return Ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vv:a=10;break e;case Bv:a=9;break e;case Sf:a=11;break e;case bf:a=14;break e;case Pn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Sr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=zv,e.lanes=n,e.stateNode={isHidden:!1},e}function Vc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Bc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rp(e,t,n,r,i,o,a,l,c){return e=new bj(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(o),e}function jj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ix(e){if(!e)return Hn;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(lt(n))return Iy(e,n,t)}return t}function Mx(e,t,n,r,i,o,a,l,c){return e=rp(n,r,!0,e,i,o,a,l,c),e.context=Ix(null),n=e.current,r=Je(),i=Vn(n),o=pn(r,i),o.callback=t??null,$n(n,o,i),e.current.lanes=i,ma(e,i,r),ct(e,r),e}function Rl(e,t,n,r){var i=t.current,o=Je(),a=Vn(i);return n=Ix(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(i,t,a),e!==null&&(Ft(e,i,a,o),ws(e,i,a)),a}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){Nm(e,t),(e=e.alternate)&&Nm(e,t)}function kj(){return null}var Ox=typeof reportError=="function"?reportError:function(e){console.error(e)};function op(e){this._internalRoot=e}Nl.prototype.render=op.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Rl(e,t,null,null)};Nl.prototype.unmount=op.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){Rl(null,e,null,null)}),t[vn]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=fy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&hy(e)}};function ap(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $m(){}function Cj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=al(a);o.call(u)}}var a=Mx(t,r,e,0,null,!1,!1,"",$m);return e._reactRootContainer=a,e[vn]=a.current,Qo(e.nodeType===8?e.parentNode:e),Lr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=al(c);l.call(u)}}var c=rp(e,0,!1,null,null,!1,!1,"",$m);return e._reactRootContainer=c,e[vn]=c.current,Qo(e.nodeType===8?e.parentNode:e),Lr(function(){Rl(t,c,n,r)}),c}function Fl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=al(a);l.call(c)}}Rl(t,a,e,i)}else a=Cj(n,t,e,i,r);return al(a)}uy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(Cf(t,n|1),ct(t,Se()),!(q&6)&&(Ti=Se()+500,Xn()))}break;case 13:Lr(function(){var r=yn(e,1);if(r!==null){var i=Je();Ft(r,e,1,i)}}),ip(e,1)}};Tf=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=Je();Ft(t,e,134217728,n)}ip(e,134217728)}};dy=function(e){if(e.tag===13){var t=Vn(e),n=yn(e,t);if(n!==null){var r=Je();Ft(n,e,t,r)}ip(e,t)}};fy=function(){return te};py=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Hu=function(e,t,n){switch(t){case"input":if($u(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=El(r);if(!i)throw Error(A(90));Uv(r),$u(r,i)}}}break;case"textarea":Yv(e,n);break;case"select":t=n.value,t!=null&&hi(e,!!n.multiple,t,!1)}};qv=qf;ey=Lr;var Tj={usingClientEntryPoint:!1,Events:[va,Zr,El,Zv,Jv,qf]},no={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pj={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ry(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||kj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Cl=Ka.inject(Pj),nn=Ka}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tj;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(t))throw Error(A(200));return jj(e,t,null,n)};yt.createRoot=function(e,t){if(!ap(e))throw Error(A(299));var n=!1,r="",i=Ox;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,!1,r,i),e[vn]=t.current,Qo(e.nodeType===8?e.parentNode:e),new op(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=ry(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return Lr(e)};yt.hydrate=function(e,t,n){if(!$l(t))throw Error(A(200));return Fl(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!ap(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ox;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mx(t,null,e,1,n??null,i,!1,o,a),e[vn]=t.current,Qo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Nl(t)};yt.render=function(e,t,n){if(!$l(t))throw Error(A(200));return Fl(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!$l(e))throw Error(A(40));return e._reactRootContainer?(Lr(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};yt.unstable_batchedUpdates=qf;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$l(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Fl(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function Rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rx)}catch(e){console.error(e)}}Rx(),Rv.exports=yt;var Nx=Rv.exports,$x,Fm=Nx;$x=Fm.createRoot,Fm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(this,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const Vm="popstate";function Dj(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return kd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sl(i)}return Aj(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ej(){return Math.random().toString(36).substr(2,8)}function Bm(e,t){return{usr:e.state,key:e.key,idx:t}}function kd(e,t,n,r){return n===void 0&&(n=null),ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fi(t):t,{state:n,key:t&&t.key||r||Ej()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Aj(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=In.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ia({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=In.Pop;let b=d(),g=b==null?null:b-u;u=b,c&&c({action:l,location:w.location,delta:g})}function p(b,g){l=In.Push;let h=kd(w.location,b,g);u=d()+1;let v=Bm(h,u),j=w.createHref(h);try{a.pushState(v,"",j)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(j)}o&&c&&c({action:l,location:w.location,delta:1})}function m(b,g){l=In.Replace;let h=kd(w.location,b,g);u=d();let v=Bm(h,u),j=w.createHref(h);a.replaceState(v,"",j),o&&c&&c({action:l,location:w.location,delta:0})}function y(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:sl(b);return h=h.replace(/ $/,"%20"),be(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return l},get location(){return e(i,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vm,f),c=b,()=>{i.removeEventListener(Vm,f),c=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let g=y(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(b){return a.go(b)}};return w}var zm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zm||(zm={}));function Lj(e,t,n){return n===void 0&&(n="/"),_j(e,t,n)}function _j(e,t,n,r){let i=typeof t=="string"?Fi(t):t,o=lp(i.pathname||"/",n);if(o==null)return null;let a=Fx(e);Ij(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Hj(o);l=zj(a[c],u)}return l}function Fx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(be(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=zn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fx(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Vj(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Vx(o.path))i(o,a,c)}),t}function Vx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Vx(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ij(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bj(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mj=/^:[\w-]+$/,Oj=3,Rj=2,Nj=1,$j=10,Fj=-2,Wm=e=>e==="*";function Vj(e,t){let n=e.split("/"),r=n.length;return n.some(Wm)&&(r+=Fj),t&&(r+=Rj),n.filter(i=>!Wm(i)).reduce((i,o)=>i+(Mj.test(o)?Oj:o===""?Nj:$j),r)}function Bj(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zj(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Wj({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:zn([o,f.pathname]),pathnameBase:Xj(zn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=zn([o,f.pathnameBase]))}return a}function Wj(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uj(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let w=l[f]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[f];return m&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Uj(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Yj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gj=e=>Yj.test(e);function Kj(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fi(e):e,o;if(n)if(Gj(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),sp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Um(n.substring(1),"/"):o=Um(n,t)}else o=t;return{pathname:o,search:Zj(r),hash:Jj(i)}}function Um(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qj(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cp(e,t){let n=Qj(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function up(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fi(e):(i=ia({},e),be(!i.pathname||!i.pathname.includes("?"),zc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),zc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),zc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=Kj(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),Xj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bx=["post","put","patch","delete"];new Set(Bx);const ek=["get",...Bx];new Set(ek);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oa.apply(this,arguments)}const dp=S.createContext(null),tk=S.createContext(null),Zn=S.createContext(null),Vl=S.createContext(null),Jn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),zx=S.createContext(null);function nk(e,t){let{relative:n}=t===void 0?{}:t;Vi()||be(!1);let{basename:r,navigator:i}=S.useContext(Zn),{hash:o,pathname:a,search:l}=Ux(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:zn([r,a])),i.createHref({pathname:c,search:l,hash:o})}function Vi(){return S.useContext(Vl)!=null}function Bi(){return Vi()||be(!1),S.useContext(Vl).location}function Wx(e){S.useContext(Zn).static||S.useLayoutEffect(e)}function fp(){let{isDataRoute:e}=S.useContext(Jn);return e?mk():rk()}function rk(){Vi()||be(!1);let e=S.useContext(dp),{basename:t,future:n,navigator:r}=S.useContext(Zn),{matches:i}=S.useContext(Jn),{pathname:o}=Bi(),a=JSON.stringify(cp(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return Wx(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=up(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:zn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,o,e])}function Ux(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Zn),{matches:i}=S.useContext(Jn),{pathname:o}=Bi(),a=JSON.stringify(cp(i,r.v7_relativeSplatPath));return S.useMemo(()=>up(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function ik(e,t){return ok(e,t)}function ok(e,t,n,r){Vi()||be(!1);let{navigator:i}=S.useContext(Zn),{matches:o}=S.useContext(Jn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Bi(),d;if(t){var f;let b=typeof t=="string"?Fi(t):t;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||be(!1),d=b}else d=u;let p=d.pathname||"/",m=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=Lj(e,{pathname:m}),w=uk(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:zn([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:zn([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&w?S.createElement(Vl.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:In.Pop}},w):w}function ak(){let e=hk(),t=qj(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const sk=S.createElement(ak,null);class lk extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Jn.Provider,{value:this.props.routeContext},S.createElement(zx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ck(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(dp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Jn.Provider,{value:t},r)}function uk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||be(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let m,y=!1,w=null,b=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||sk,c&&(u<0&&p===0?(gk("route-fallback"),y=!0,b=null):u===p&&(y=!0,b=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),h=()=>{let v;return m?v=w:y?v=b:f.route.Component?v=S.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,S.createElement(ck,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?S.createElement(lk,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Hx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hx||{}),Yx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yx||{});function dk(e){let t=S.useContext(dp);return t||be(!1),t}function fk(e){let t=S.useContext(tk);return t||be(!1),t}function pk(e){let t=S.useContext(Jn);return t||be(!1),t}function Gx(e){let t=pk(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function hk(){var e;let t=S.useContext(zx),n=fk(),r=Gx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mk(){let{router:e}=dk(Hx.UseNavigateStable),t=Gx(Yx.UseNavigateStable),n=S.useRef(!1);return Wx(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oa({fromRouteId:t},o)))},[e,t])}const Hm={};function gk(e,t,n){Hm[e]||(Hm[e]=!0)}function vk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yk(e){let{to:t,replace:n,state:r,relative:i}=e;Vi()||be(!1);let{future:o,static:a}=S.useContext(Zn),{matches:l}=S.useContext(Jn),{pathname:c}=Bi(),u=fp(),d=up(t,cp(l,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Hr(e){be(!1)}function xk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:o,static:a=!1,future:l}=e;Vi()&&be(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:o,static:a,future:oa({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Fi(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:y="default"}=r,w=S.useMemo(()=>{let b=lp(d,c);return b==null?null:{location:{pathname:b,search:f,hash:p,state:m,key:y},navigationType:i}},[c,d,f,p,m,y,i]);return w==null?null:S.createElement(Zn.Provider,{value:u},S.createElement(Vl.Provider,{children:n,value:w}))}function wk(e){let{children:t,location:n}=e;return ik(Cd(t),n)}new Promise(()=>{});function Cd(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Cd(r.props.children,o));return}r.type!==Hr&&be(!1),!r.props.index||!r.props.children||be(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Cd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Td(){return Td=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Td.apply(this,arguments)}function Sk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jk(e,t){return e.button===0&&(!t||t==="_self")&&!bk(e)}const kk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ck="6";try{window.__reactRouterVersion=Ck}catch{}const Tk="startTransition",Ym=vS[Tk];function Pk(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=Dj({window:i,v5Compat:!0}));let a=o.current,[l,c]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=S.useCallback(f=>{u&&Ym?Ym(()=>c(f)):c(f)},[c,u]);return S.useLayoutEffect(()=>a.listen(d),[a,d]),S.useEffect(()=>vk(r),[r]),S.createElement(xk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ek=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pp=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=Sk(t,kk),{basename:m}=S.useContext(Zn),y,w=!1;if(typeof u=="string"&&Ek.test(u)&&(y=u,Dk))try{let v=new URL(window.location.href),j=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=lp(j.pathname,m);j.origin===v.origin&&C!=null?u=C+j.search+j.hash:w=!0}catch{}let b=nk(u,{relative:i}),g=Ak(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return S.createElement("a",Td({},p,{href:y||b,onClick:w||o?r:h,ref:n,target:c}))});var Gm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gm||(Gm={}));var Km;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function Ak(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=fp(),u=Bi(),d=Ux(e,{relative:a});return S.useCallback(f=>{if(jk(f,n)){f.preventDefault();let p=r!==void 0?r:sl(u)===sl(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,o,a,l])}const Kx=S.createContext({isDark:!0,toggleTheme:()=>{}}),Lk=({children:e})=>{const[t,n]=S.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});S.useEffect(()=>{document.documentElement.setAttribute("data-theme",t?"dark":"light"),localStorage.setItem("theme",t?"dark":"light")},[t]),S.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=a=>{localStorage.getItem("theme")||n(a.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]);const r=()=>n(!t);return s.jsx(Kx.Provider,{value:{isDark:t,toggleTheme:r},children:e})},hp=()=>{const e=S.useContext(Kx);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Qx=S.createContext(null),Wc="tools-auth-session",Uc="tools-webauthn-credential",_k=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Ik=async()=>{if(!_k())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Hc=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},Mk=e=>{const t=new Uint8Array(e);let n="";return t.forEach(r=>n+=String.fromCharCode(r)),btoa(n)},Ok=e=>{const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer},Rk=({children:e})=>{const[t,n]=S.useState(!1),[r,i]=S.useState(!0),[o,a]=S.useState(!1),l=S.useRef(!1),c=async()=>{try{const m={challenge:Hc(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Hc(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},y=await navigator.credentials.create({publicKey:m});return y?(localStorage.setItem(Uc,Mk(y.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},u=async()=>{try{const p=localStorage.getItem(Uc),y={challenge:Hc(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:Ok(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:y})}catch(p){return console.error("Authentication failed:",p),!1}},d=S.useCallback(async()=>{i(!0),a(!1);const p=sessionStorage.getItem(Wc);if(p)try{const{timestamp:y}=JSON.parse(p);if(Date.now()-y<24*60*60*1e3){n(!0),i(!1);return}}catch{}if(!await Ik()){n(!0),sessionStorage.setItem(Wc,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const y=localStorage.getItem(Uc);let w=!1;y?w=await u():w=await c(),w?(n(!0),sessionStorage.setItem(Wc,JSON.stringify({timestamp:Date.now()}))):a(!0)}catch{a(!0)}i(!1)},[]);S.useEffect(()=>{l.current||(l.current=!0,d())},[d]);const f=S.useCallback(()=>{d()},[d]);return s.jsx(Qx.Provider,{value:{isAuthenticated:t,isLoading:r,authFailed:o,retryAuth:f},children:e})},Nk=()=>{const e=S.useContext(Qx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ge.apply(this,arguments)};function Pi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ie="-ms-",Ro="-moz-",ee="-webkit-",Xx="comm",Bl="rule",mp="decl",$k="@import",Zx="@keyframes",Fk="@layer",Jx=Math.abs,gp=String.fromCharCode,Pd=Object.assign;function Vk(e,t){return Ie(e,0)^45?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function qx(e){return e.trim()}function cn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ps(e,t,n){return e.indexOf(t,n)}function Ie(e,t){return e.charCodeAt(t)|0}function Di(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function e1(e){return e.length}function So(e,t){return t.push(e),e}function Bk(e,t){return e.map(t).join("")}function Qm(e,t){return e.filter(function(n){return!cn(n,t)})}var zl=1,Ei=1,t1=0,At=0,ke=0,zi="";function Wl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zl,column:Ei,length:a,return:"",siblings:l}}function Cn(e,t){return Pd(Wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $r(e){for(;e.root;)e=Cn(e.root,{children:[e]});So(e,e.siblings)}function zk(){return ke}function Wk(){return ke=At>0?Ie(zi,--At):0,Ei--,ke===10&&(Ei=1,zl--),ke}function Vt(){return ke=At<t1?Ie(zi,At++):0,Ei++,ke===10&&(Ei=1,zl++),ke}function br(){return Ie(zi,At)}function Ds(){return At}function Ul(e,t){return Di(zi,e,t)}function Dd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uk(e){return zl=Ei=1,t1=Jt(zi=e),At=0,[]}function Hk(e){return zi="",e}function Yc(e){return qx(Ul(At-1,Ed(e===91?e+2:e===40?e+1:e)))}function Yk(e){for(;(ke=br())&&ke<33;)Vt();return Dd(e)>2||Dd(ke)>3?"":" "}function Gk(e,t){for(;--t&&Vt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return Ul(e,Ds()+(t<6&&br()==32&&Vt()==32))}function Ed(e){for(;Vt();)switch(ke){case e:return At;case 34:case 39:e!==34&&e!==39&&Ed(ke);break;case 40:e===41&&Ed(e);break;case 92:Vt();break}return At}function Kk(e,t){for(;Vt()&&e+ke!==57;)if(e+ke===84&&br()===47)break;return"/*"+Ul(t,At-1)+"*"+gp(e===47?e:Vt())}function Qk(e){for(;!Dd(br());)Vt();return Ul(e,At)}function Xk(e){return Hk(Es("",null,null,null,[""],e=Uk(e),0,[0],e))}function Es(e,t,n,r,i,o,a,l,c){for(var u=0,d=0,f=a,p=0,m=0,y=0,w=1,b=1,g=1,h=0,v="",j=i,C=o,k=r,T=v;b;)switch(y=h,h=Vt()){case 40:if(y!=108&&Ie(T,f-1)==58){Ps(T+=Y(Yc(h),"&","&\f"),"&\f",Jx(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:T+=Yc(h);break;case 9:case 10:case 13:case 32:T+=Yk(y);break;case 92:T+=Gk(Ds()-1,7);continue;case 47:switch(br()){case 42:case 47:So(Zk(Kk(Vt(),Ds()),t,n,c),c);break;default:T+="/"}break;case 123*w:l[u++]=Jt(T)*g;case 125*w:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:g==-1&&(T=Y(T,/\f/g,"")),m>0&&Jt(T)-f&&So(m>32?Zm(T+";",r,n,f-1,c):Zm(Y(T," ","")+";",r,n,f-2,c),c);break;case 59:T+=";";default:if(So(k=Xm(T,t,n,u,d,i,l,v,j=[],C=[],f,o),o),h===123)if(d===0)Es(T,t,k,k,j,o,f,l,C);else switch(p===99&&Ie(T,3)===110?100:p){case 100:case 108:case 109:case 115:Es(e,k,k,r&&So(Xm(e,k,k,0,0,i,l,v,i,j=[],f,C),C),i,C,f,l,r?j:C);break;default:Es(T,k,k,k,[""],C,0,l,C)}}u=d=m=0,w=g=1,v=T="",f=a;break;case 58:f=1+Jt(T),m=y;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&Wk()==125)continue}switch(T+=gp(h),h*w){case 38:g=d>0?1:(T+="\f",-1);break;case 44:l[u++]=(Jt(T)-1)*g,g=1;break;case 64:br()===45&&(T+=Yc(Vt())),p=br(),d=f=Jt(v=T+=Qk(Ds())),h++;break;case 45:y===45&&Jt(T)==2&&(w=0)}}return o}function Xm(e,t,n,r,i,o,a,l,c,u,d,f){for(var p=i-1,m=i===0?o:[""],y=e1(m),w=0,b=0,g=0;w<r;++w)for(var h=0,v=Di(e,p+1,p=Jx(b=a[w])),j=e;h<y;++h)(j=qx(b>0?m[h]+" "+v:Y(v,/&\f/g,m[h])))&&(c[g++]=j);return Wl(e,t,n,i===0?Bl:l,c,u,d,f)}function Zk(e,t,n,r){return Wl(e,t,n,Xx,gp(zk()),Di(e,2,-2),0,r)}function Zm(e,t,n,r,i){return Wl(e,t,n,mp,Di(e,0,r),Di(e,r+1,-1),r,i)}function n1(e,t,n){switch(Vk(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Ro+e+ie+e+e;case 5936:switch(Ie(e,t+11)){case 114:return ee+e+ie+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+ie+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+ie+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+ie+e+e;case 6165:return ee+e+ie+"flex-"+e+e;case 5187:return ee+e+Y(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return ee+e+ie+"flex-item-"+Y(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":ie+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ee+e+ie+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+ie+Y(e,"shrink","negative")+e;case 5292:return ee+e+ie+Y(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+Y(e,"-grow","")+ee+e+ie+Y(e,"grow","positive")+e;case 4554:return ee+Y(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!cn(e,/flex-|baseline/))return ie+"grid-column-align"+Di(e,t)+e;break;case 2592:case 3360:return ie+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,cn(r.props,/grid-\w+-end/)})?~Ps(e+(n=n[t].value),"span",0)?e:ie+Y(e,"-start","")+e+ie+"grid-row-span:"+(~Ps(n,"span",0)?cn(n,/\d+/):+cn(n,/\d+/)-+cn(e,/\d+/))+";":ie+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return cn(r.props,/grid-\w+-start/)})?e:ie+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(Ie(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Ro+(Ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ps(e,"stretch",0)?n1(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,c,u){return ie+i+":"+o+u+(a?ie+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(Ie(e,t+6)===121)return Y(e,":",":"+ee)+e;break;case 6444:switch(Ie(e,Ie(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Ie(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+ie+"$2box$3")+e;case 100:return Y(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function ll(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jk(e,t,n,r){switch(e.type){case Fk:if(e.children.length)break;case $k:case mp:return e.return=e.return||e.value;case Xx:return"";case Zx:return e.return=e.value+"{"+ll(e.children,r)+"}";case Bl:if(!Jt(e.value=e.props.join(",")))return""}return Jt(n=ll(e.children,r))?e.return=e.value+"{"+n+"}":""}function qk(e){var t=e1(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function eC(e){return function(t){t.root||(t=t.return)&&e(t)}}function tC(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case mp:e.return=n1(e.value,e.length,n);return;case Zx:return ll([Cn(e,{value:Y(e.value,"@","@"+ee)})],r);case Bl:if(e.length)return Bk(n=e.props,function(i){switch(cn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$r(Cn(e,{props:[Y(i,/:(read-\w+)/,":"+Ro+"$1")]})),$r(Cn(e,{props:[i]})),Pd(e,{props:Qm(n,r)});break;case"::placeholder":$r(Cn(e,{props:[Y(i,/:(plac\w+)/,":"+ee+"input-$1")]})),$r(Cn(e,{props:[Y(i,/:(plac\w+)/,":"+Ro+"$1")]})),$r(Cn(e,{props:[Y(i,/:(plac\w+)/,ie+"input-$1")]})),$r(Cn(e,{props:[i]})),Pd(e,{props:Qm(n,r)});break}return""})}}var nC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},Ai=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",r1="active",i1="data-styled-version",Hl="6.1.19",vp=`/*!sc*/
`,cl=typeof window<"u"&&typeof document<"u",rC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),iC={},Yl=Object.freeze([]),Li=Object.freeze({});function o1(e,t,n){return n===void 0&&(n=Li),e.theme!==n.theme&&e.theme||t||n.theme}var a1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),oC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aC=/(^-|-$)/g;function Jm(e){return e.replace(oC,"-").replace(aC,"")}var sC=/(a)(d)/gi,Qa=52,qm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ad(e){var t,n="";for(t=Math.abs(e);t>Qa;t=t/Qa|0)n=qm(t%Qa)+n;return(qm(t%Qa)+n).replace(sC,"$1-$2")}var Gc,s1=5381,ii=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},l1=function(e){return ii(s1,e)};function yp(e){return Ad(l1(e)>>>0)}function lC(e){return e.displayName||e.name||"Component"}function Kc(e){return typeof e=="string"&&!0}var c1=typeof Symbol=="function"&&Symbol.for,u1=c1?Symbol.for("react.memo"):60115,cC=c1?Symbol.for("react.forward_ref"):60112,uC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},d1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fC=((Gc={})[cC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[u1]=d1,Gc);function eg(e){return("type"in(t=e)&&t.type.$$typeof)===u1?d1:"$$typeof"in e?fC[e.$$typeof]:uC;var t}var pC=Object.defineProperty,hC=Object.getOwnPropertyNames,tg=Object.getOwnPropertySymbols,mC=Object.getOwnPropertyDescriptor,gC=Object.getPrototypeOf,ng=Object.prototype;function f1(e,t,n){if(typeof t!="string"){if(ng){var r=gC(t);r&&r!==ng&&f1(e,r,n)}var i=hC(t);tg&&(i=i.concat(tg(t)));for(var o=eg(e),a=eg(t),l=0;l<i.length;++l){var c=i[l];if(!(c in dC||n&&n[c]||a&&c in a||o&&c in o)){var u=mC(t,c);try{pC(e,c,u)}catch{}}}}return e}function _i(e){return typeof e=="function"}function xp(e){return typeof e=="object"&&"styledComponentId"in e}function yr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ul(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function aa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ld(e,t,n){if(n===void 0&&(n=!1),!n&&!aa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ld(e[r],t[r]);else if(aa(t))for(var r in t)e[r]=Ld(e[r],t[r]);return e}function wp(e,t){Object.defineProperty(e,"toString",{value:t})}function xa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var vC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw xa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(vp);return n},e}(),As=new Map,dl=new Map,Ls=1,Xa=function(e){if(As.has(e))return As.get(e);for(;dl.has(Ls);)Ls++;var t=Ls++;return As.set(e,t),dl.set(t,e),t},yC=function(e,t){Ls=t+1,As.set(e,t),dl.set(t,e)},xC="style[".concat(Ai,"][").concat(i1,'="').concat(Hl,'"]'),wC=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),SC=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},bC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(vp),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var c=l.match(wC);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(yC(d,u),SC(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},rg=function(e){for(var t=document.querySelectorAll(xC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ai)!==r1&&(bC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function jC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var p1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Ai,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ai,r1),r.setAttribute(i1,Hl);var a=jC();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},kC=function(){function e(t){this.element=p1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw xa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),CC=function(){function e(t){this.element=p1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),TC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ig=cl,PC={isServer:!cl,useCSSOMInjection:!rC},fl=function(){function e(t,n,r){t===void 0&&(t=Li),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},PC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&cl&&ig&&(ig=!1,rg(this)),wp(this,function(){return function(o){for(var a=o.getTag(),l=a.length,c="",u=function(f){var p=function(g){return dl.get(g)}(f);if(p===void 0)return"continue";var m=o.names.get(p),y=a.getGroup(f);if(m===void 0||!m.size||y.length===0)return"continue";var w="".concat(Ai,".g").concat(f,'[id="').concat(p,'"]'),b="";m!==void 0&&m.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),c+="".concat(y).concat(w,'{content:"').concat(b,'"}').concat(vp)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Xa(t)},e.prototype.rehydrate=function(){!this.server&&cl&&rg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new TC(i):r?new kC(i):new CC(i)}(this.options),new vC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),DC=/&/g,EC=/^\s*\/\/.*$/gm;function h1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=h1(n.children,t)),n})}function AC(e){var t,n,r,i=Li,o=i.options,a=o===void 0?Li:o,l=i.plugins,c=l===void 0?Yl:l,u=function(p,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Bl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(DC,n).replace(r,u))}),a.prefix&&d.push(tC),d.push(Jk);var f=function(p,m,y,w){m===void 0&&(m=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(EC,""),g=Xk(y||m?"".concat(y," ").concat(m," { ").concat(b," }"):b);a.namespace&&(g=h1(g,a.namespace));var h=[];return ll(g,qk(d.concat(eC(function(v){return h.push(v)})))),h};return f.hash=c.length?c.reduce(function(p,m){return m.name||xa(15),ii(p,m.name)},s1).toString():"",f}var LC=new fl,_d=AC(),m1=en.createContext({shouldForwardProp:void 0,styleSheet:LC,stylis:_d});m1.Consumer;en.createContext(void 0);function Id(){return S.useContext(m1)}var g1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=_d);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wp(this,function(){throw xa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=_d),this.name+t.hash},e}(),_C=function(e){return e>="A"&&e<="Z"};function og(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_C(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var v1=function(e){return e==null||e===!1||e===""},y1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!v1(o)&&(Array.isArray(o)&&o.isCss||_i(o)?r.push("".concat(og(i),":"),o,";"):aa(o)?r.push.apply(r,Pi(Pi(["".concat(i," {")],y1(o),!1),["}"],!1)):r.push("".concat(og(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in nC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wn(e,t,n,r){if(v1(e))return[];if(xp(e))return[".".concat(e.styledComponentId)];if(_i(e)){if(!_i(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Wn(i,t,n,r)}var o;return e instanceof g1?n?(e.inject(n,r),[e.getName(r)]):[e]:aa(e)?y1(e):Array.isArray(e)?Array.prototype.concat.apply(Yl,e.map(function(a){return Wn(a,t,n,r)})):[e.toString()]}function x1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_i(n)&&!xp(n))return!1}return!0}var IC=l1(Hl),MC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&x1(t),this.componentId=n,this.baseHash=ii(IC,n),this.baseStyle=r,fl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=yr(i,this.staticRulesId);else{var o=ul(Wn(this.rules,t,n,r)),a=Ad(ii(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=yr(i,a),this.staticRulesId=a}else{for(var c=ii(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=ul(Wn(f,t,n,r));c=ii(c,p+d),u+=p}}if(u){var m=Ad(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=yr(i,m)}}return i},e}(),Sp=en.createContext(void 0);Sp.Consumer;var Qc={};function OC(e,t,n){var r=xp(e),i=e,o=!Kc(e),a=t.attrs,l=a===void 0?Yl:a,c=t.componentId,u=c===void 0?function(j,C){var k=typeof j!="string"?"sc":Jm(j);Qc[k]=(Qc[k]||0)+1;var T="".concat(k,"-").concat(yp(Hl+k+Qc[k]));return C?"".concat(C,"-").concat(T):T}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function(j){return Kc(j)?"styled.".concat(j):"Styled(".concat(lC(j),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Jm(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(j,C){return w(j,C)&&b(j,C)}}else y=w}var g=new MC(n,p,r?i.componentStyle:void 0);function h(j,C){return function(k,T,P){var L=k.attrs,_=k.componentStyle,R=k.defaultProps,I=k.foldedComponentIds,F=k.styledComponentId,U=k.target,D=en.useContext(Sp),W=Id(),V=k.shouldForwardProp||W.shouldForwardProp,E=o1(T,D,R)||Li,M=function(Q,ce,Oe){for(var Xe,Te=Ge(Ge({},ce),{className:void 0,theme:Oe}),Wt=0;Wt<Q.length;Wt+=1){var wt=_i(Xe=Q[Wt])?Xe(Te):Xe;for(var Re in wt)Te[Re]=Re==="className"?yr(Te[Re],wt[Re]):Re==="style"?Ge(Ge({},Te[Re]),wt[Re]):wt[Re]}return ce.className&&(Te.className=yr(Te.className,ce.className)),Te}(L,T,E),O=M.as||U,B={};for(var G in M)M[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&M.theme===E||(G==="forwardedAs"?B.as=M.forwardedAs:V&&!V(G,O)||(B[G]=M[G]));var se=function(Q,ce){var Oe=Id(),Xe=Q.generateAndInjectStyles(ce,Oe.styleSheet,Oe.stylis);return Xe}(_,M),le=yr(I,F);return se&&(le+=" "+se),M.className&&(le+=" "+M.className),B[Kc(O)&&!a1.has(O)?"class":"className"]=le,P&&(B.ref=P),S.createElement(O,B)}(v,j,C)}h.displayName=f;var v=en.forwardRef(h);return v.attrs=m,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?yr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(C){for(var k=[],T=1;T<arguments.length;T++)k[T-1]=arguments[T];for(var P=0,L=k;P<L.length;P++)Ld(C,L[P],!0);return C}({},i.defaultProps,j):j}}),wp(v,function(){return".".concat(v.styledComponentId)}),o&&f1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function ag(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sg=function(e){return Object.assign(e,{isCss:!0})};function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_i(e)||aa(e))return sg(Wn(ag(Yl,Pi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wn(r):sg(Wn(ag(r,t)))}function Md(e,t,n){if(n===void 0&&(n=Li),!t)throw xa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,tn.apply(void 0,Pi([i],o,!1)))};return r.attrs=function(i){return Md(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Md(e,t,Ge(Ge({},n),i))},r}var w1=function(e){return Md(OC,e)},x=w1;a1.forEach(function(e){x[e]=w1(e)});var RC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=x1(t),fl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ul(Wn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&fl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function NC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=tn.apply(void 0,Pi([e],t,!1)),i="sc-global-".concat(yp(JSON.stringify(r))),o=new RC(r,i),a=function(c){var u=Id(),d=en.useContext(Sp),f=en.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),en.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,p){if(o.isStatic)o.renderStyles(c,iC,d,p);else{var m=Ge(Ge({},u),{theme:o1(u,f,a.defaultProps)});o.renderStyles(c,m,d,p)}}return en.memo(a)}function Wi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ul(tn.apply(void 0,Pi([e],t,!1))),i=yp(r);return new g1(i,r)}const $C=NC`
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
`,FC=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,VC=x.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,BC=()=>{const{isDark:e}=hp();return s.jsx(FC,{children:s.jsx(VC,{$isDark:e})})},bp=S.createContext({});function jp(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const Gl=S.createContext(null),kp=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class zC extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function WC({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=S.useContext(kp);return S.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u}=i.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),s.jsx(zC,{isPresent:t,childRef:r,sizeRef:i,children:S.cloneElement(e,{ref:r})})}const UC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const l=jp(HC),c=S.useId(),u=S.useCallback(f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=S.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(l.set(f,!1),()=>l.delete(f))}),o?[Math.random(),u]:[n,u]);return S.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),S.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(WC,{isPresent:n,children:e})),s.jsx(Gl.Provider,{value:d,children:e})};function HC(){return new Map}function S1(e=!0){const t=S.useContext(Gl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=S.useId();S.useEffect(()=>{e&&i(o)},[e]);const a=S.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Za=e=>e.key||"";function lg(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const Cp=typeof window<"u",b1=Cp?S.useLayoutEffect:S.useEffect,Fe=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1})=>{const[l,c]=S1(a),u=S.useMemo(()=>lg(e),[e]),d=a&&!l?[]:u.map(Za),f=S.useRef(!0),p=S.useRef(u),m=jp(()=>new Map),[y,w]=S.useState(u),[b,g]=S.useState(u);b1(()=>{f.current=!1,p.current=u;for(let j=0;j<b.length;j++){const C=Za(b[j]);d.includes(C)?m.delete(C):m.get(C)!==!0&&m.set(C,!1)}},[b,d.length,d.join("-")]);const h=[];if(u!==y){let j=[...u];for(let C=0;C<b.length;C++){const k=b[C],T=Za(k);d.includes(T)||(j.splice(C,0,k),h.push(k))}o==="wait"&&h.length&&(j=h),g(lg(j)),w(u);return}const{forceRender:v}=S.useContext(bp);return s.jsx(s.Fragment,{children:b.map(j=>{const C=Za(j),k=a&&!l?!1:u===b||d.includes(C),T=()=>{if(m.has(C))m.set(C,!0);else return;let P=!0;m.forEach(L=>{L||(P=!1)}),P&&(v==null||v(),g(p.current),a&&(c==null||c()),r&&r())};return s.jsx(UC,{isPresent:k,initial:!f.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:k?void 0:T,children:j},C)})})},mt=e=>e;let j1=mt;function Tp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ii=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},hn=e=>e*1e3,mn=e=>e/1e3,YC={useManualTiming:!1};function GC(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Ja=["read","resolveKeyframes","update","preRender","render","postRender"],KC=40;function k1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Ja.reduce((g,h)=>(g[h]=GC(o),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=a,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,KC),1),i.timestamp=g,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Ja.reduce((g,h)=>{const v=a[h];return g[h]=(j,C=!1,k=!1)=>(n||y(),v.schedule(j,C,k)),g},{}),cancel:g=>{for(let h=0;h<Ja.length;h++)a[Ja[h]].cancel(g)},state:i,steps:a}}const{schedule:ae,cancel:Yn,state:$e,steps:Xc}=k1(typeof requestAnimationFrame<"u"?requestAnimationFrame:mt,!0),C1=S.createContext({strict:!1}),cg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mi={};for(const e in cg)Mi[e]={isEnabled:t=>cg[e].some(n=>!!t[n])};function QC(e){for(const t in e)Mi[t]={...Mi[t],...e[t]}}const XC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||XC.has(e)}let T1=e=>!pl(e);function ZC(e){e&&(T1=t=>t.startsWith("on")?!pl(t):e(t))}try{ZC(require("@emotion/is-prop-valid").default)}catch{}function JC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(T1(i)||n===!0&&pl(i)||!t&&!pl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function qC(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Kl=S.createContext({});function sa(e){return typeof e=="string"||Array.isArray(e)}function Ql(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dp=["initial",...Pp];function Xl(e){return Ql(e.animate)||Dp.some(t=>sa(e[t]))}function P1(e){return!!(Xl(e)||e.variants)}function eT(e,t){if(Xl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||sa(n)?n:void 0,animate:sa(r)?r:void 0}}return e.inherit!==!1?t:{}}function tT(e){const{initial:t,animate:n}=eT(e,S.useContext(Kl));return S.useMemo(()=>({initial:t,animate:n}),[ug(t),ug(n)])}function ug(e){return Array.isArray(e)?e.join(" "):e}const nT=Symbol.for("motionComponentSymbol");function oi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function rT(e,t,n){return S.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):oi(n)&&(n.current=r))},[t])}const Ep=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),iT="framerAppearId",D1="data-"+Ep(iT),{schedule:Ap}=k1(queueMicrotask,!1),E1=S.createContext({});function oT(e,t,n,r,i){var o,a;const{visualElement:l}=S.useContext(Kl),c=S.useContext(C1),u=S.useContext(Gl),d=S.useContext(kp).reducedMotion,f=S.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=S.useContext(E1);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&aT(f.current,n,i,m);const y=S.useRef(!1);S.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const w=n[D1],b=S.useRef(!!w&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,w))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,w)));return b1(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Ap.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),S.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,w)}),b.current=!1))}),p}function aT(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:A1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||l&&oi(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function A1(e){if(e)return e.options.allowProjection!==!1?e.projection:A1(e.parent)}function sT({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,a;e&&QC(e);function l(u,d){let f;const p={...S.useContext(kp),...u,layoutId:lT(u)},{isStatic:m}=p,y=tT(u),w=r(u,m);if(!m&&Cp){cT();const b=uT(p);f=b.MeasureLayout,y.visualElement=oT(i,w,p,t,b.ProjectionNode)}return s.jsxs(Kl.Provider,{value:y,children:[f&&y.visualElement?s.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,u,rT(w,y.visualElement,d),w,m,y.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(a=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&a!==void 0?a:""})`}`;const c=S.forwardRef(l);return c[nT]=i,c}function lT({layoutId:e}){const t=S.useContext(bp).id;return t&&e!==void 0?t+"-"+e:e}function cT(e,t){S.useContext(C1).strict}function uT(e){const{drag:t,layout:n}=Mi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const dT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lp(e){return typeof e!="string"||e.includes("-")?!1:!!(dT.indexOf(e)>-1||/[A-Z]/u.test(e))}function dg(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function _p(e,t,n,r){if(typeof t=="function"){const[i,o]=dg(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=dg(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const Od=e=>Array.isArray(e),fT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),pT=e=>Od(e)?e[e.length-1]||0:e,Ke=e=>!!(e&&e.getVelocity);function _s(e){const t=Ke(e)?e.get():e;return fT(t)?t.toValue():t}function hT({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const a={latestValues:mT(r,i,o,e),renderState:t()};return n&&(a.onMount=l=>n({props:r,current:l,...a}),a.onUpdate=l=>n(l)),a}const L1=e=>(t,n)=>{const r=S.useContext(Kl),i=S.useContext(Gl),o=()=>hT(e,t,r,i);return n?o():jp(o)};function mT(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=_s(o[p]);let{initial:a,animate:l}=e;const c=Xl(e),u=P1(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;if(f&&typeof f!="boolean"&&!Ql(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const y=_p(e,p[m]);if(y){const{transitionEnd:w,transition:b,...g}=y;for(const h in g){let v=g[h];if(Array.isArray(v)){const j=d?v.length-1:0;v=v[j]}v!==null&&(i[h]=v)}for(const h in w)i[h]=w[h]}}}return i}const Ui=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mr=new Set(Ui),_1=e=>t=>typeof t=="string"&&t.startsWith(e),I1=_1("--"),gT=_1("var(--"),Ip=e=>gT(e)?vT.test(e.split("/*")[0].trim()):!1,vT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,M1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,wn=(e,t,n)=>n>t?t:n<e?e:n,Hi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},la={...Hi,transform:e=>wn(0,1,e)},qa={...Hi,default:1},wa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Tn=wa("deg"),on=wa("%"),z=wa("px"),yT=wa("vh"),xT=wa("vw"),fg={...on,parse:e=>on.parse(e)/100,transform:e=>on.transform(e*100)},wT={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},ST={rotate:Tn,rotateX:Tn,rotateY:Tn,rotateZ:Tn,scale:qa,scaleX:qa,scaleY:qa,scaleZ:qa,skew:Tn,skewX:Tn,skewY:Tn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:la,originX:fg,originY:fg,originZ:z},pg={...Hi,transform:Math.round},Mp={...wT,...ST,zIndex:pg,size:z,fillOpacity:la,strokeOpacity:la,numOctaves:pg},bT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jT=Ui.length;function kT(e,t,n){let r="",i=!0;for(let o=0;o<jT;o++){const a=Ui[o],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(a.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=M1(l,Mp[a]);if(!c){i=!1;const d=bT[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Op(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(Mr.has(c)){a=!0;continue}else if(I1(c)){i[c]=u;continue}else{const d=M1(u,Mp[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=kT(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}const CT={offset:"stroke-dashoffset",array:"stroke-dasharray"},TT={offset:"strokeDashoffset",array:"strokeDasharray"};function PT(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?CT:TT;e[o.offset]=z.transform(-r);const a=z.transform(t),l=z.transform(n);e[o.array]=`${a} ${l}`}function hg(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function DT(e,t,n){const r=hg(t,e.x,e.width),i=hg(n,e.y,e.height);return`${r} ${i}`}function Rp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(Op(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:y}=e;p.transform&&(y&&(m.transform=p.transform),delete p.transform),y&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=DT(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&PT(p,a,l,c,!1)}const Np=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),O1=()=>({...Np(),attrs:{}}),$p=e=>typeof e=="string"&&e.toLowerCase()==="svg";function R1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const N1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $1(e,t,n,r){R1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(N1.has(i)?i:Ep(i),t.attrs[i])}const hl={};function ET(e){Object.assign(hl,e)}function F1(e,{layout:t,layoutId:n}){return Mr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!hl[e]||e==="opacity")}function Fp(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(Ke(i[a])||t.style&&Ke(t.style[a])||F1(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function V1(e,t,n){const r=Fp(e,t,n);for(const i in e)if(Ke(e[i])||Ke(t[i])){const o=Ui.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function AT(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const mg=["x","y","width","height","cx","cy","r"],LT={useVisualState:L1({scrapeMotionValuesFromProps:V1,createRenderState:O1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const l in i)if(Mr.has(l)){o=!0;break}}if(!o)return;let a=!t;if(t)for(let l=0;l<mg.length;l++){const c=mg[l];e[c]!==t[c]&&(a=!0)}a&&ae.read(()=>{AT(n,r),ae.render(()=>{Rp(r,i,$p(n.tagName),e.transformTemplate),$1(n,r)})})}})},_T={useVisualState:L1({scrapeMotionValuesFromProps:Fp,createRenderState:Np})};function B1(e,t,n){for(const r in t)!Ke(t[r])&&!F1(r,n)&&(e[r]=t[r])}function IT({transformTemplate:e},t){return S.useMemo(()=>{const n=Np();return Op(n,t,e),Object.assign({},n.vars,n.style)},[t])}function MT(e,t){const n=e.style||{},r={};return B1(r,n,e),Object.assign(r,IT(e,t)),r}function OT(e,t){const n={},r=MT(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function RT(e,t,n,r){const i=S.useMemo(()=>{const o=O1();return Rp(o,t,$p(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};B1(o,e.style,e),i.style={...o,...i.style}}return i}function NT(e=!1){return(n,r,i,{latestValues:o},a)=>{const c=(Lp(n)?RT:OT)(r,o,a,n),u=JC(r,typeof n=="string",e),d=n!==S.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=S.useMemo(()=>Ke(f)?f.get():f,[f]);return S.createElement(n,{...d,children:p})}}function $T(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...Lp(r)?LT:_T,preloadedFeatures:e,useRender:NT(i),createVisualElement:t,Component:r};return sT(a)}}function z1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Zl(e,t,n){const r=e.getProps();return _p(r,t,n!==void 0?n:r.custom,e)}const FT=Tp(()=>window.ScrollTimeline!==void 0);class VT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(FT()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class BT extends VT{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Vp(e,t){return e?e[t]||e.default||e:void 0}const Rd=2e4;function W1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Rd;)t+=n,r=e.next(t);return t>=Rd?1/0:t}function Bp(e){return typeof e=="function"}function gg(e,t){e.timeline=t,e.onfinish=null}const zp=e=>Array.isArray(e)&&typeof e[0]=="number",zT={linearEasing:void 0};function WT(e,t){const n=Tp(e);return()=>{var r;return(r=zT[t])!==null&&r!==void 0?r:n()}}const ml=WT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),U1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Ii(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function H1(e){return!!(typeof e=="function"&&ml()||!e||typeof e=="string"&&(e in Nd||ml())||zp(e)||Array.isArray(e)&&e.every(H1))}const bo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Nd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bo([0,.65,.55,1]),circOut:bo([.55,0,1,.45]),backIn:bo([.31,.01,.66,-.59]),backOut:bo([.33,1.53,.69,.99])};function Y1(e,t){if(e)return typeof e=="function"&&ml()?U1(e,t):zp(e)?bo(e):Array.isArray(e)?e.map(n=>Y1(n,t)||Nd.easeOut):Nd[e]}const Mt={x:!1,y:!1};function G1(){return Mt.x||Mt.y}function UT(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function K1(e,t){const n=UT(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function vg(e){return t=>{t.pointerType==="touch"||G1()||e(t)}}function HT(e,t,n={}){const[r,i,o]=K1(e,n),a=vg(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=vg(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",a,i)}),o}const Q1=(e,t)=>t?e===t?!0:Q1(e,t.parentElement):!1,Wp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,YT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function GT(e){return YT.has(e.tagName)||e.tabIndex!==-1}const jo=new WeakSet;function yg(e){return t=>{t.key==="Enter"&&e(t)}}function Zc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const KT=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=yg(()=>{if(jo.has(n))return;Zc(n,"down");const i=yg(()=>{Zc(n,"up")}),o=()=>Zc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function xg(e){return Wp(e)&&!G1()}function QT(e,t,n={}){const[r,i,o]=K1(e,n),a=l=>{const c=l.currentTarget;if(!xg(l)||jo.has(c))return;jo.add(c);const u=t(l),d=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!xg(m)||!jo.has(c))&&(jo.delete(c),typeof u=="function"&&u(m,{success:y}))},f=m=>{d(m,n.useGlobalTarget||Q1(c,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!GT(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),l.addEventListener("focus",u=>KT(u,i),i)}),o}function XT(e){return e==="x"||e==="y"?Mt[e]?null:(Mt[e]=!0,()=>{Mt[e]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const X1=new Set(["width","height","top","left","right","bottom",...Ui]);let Is;function ZT(){Is=void 0}const an={now:()=>(Is===void 0&&an.set($e.isProcessing||YC.useManualTiming?$e.timestamp:performance.now()),Is),set:e=>{Is=e,queueMicrotask(ZT)}};function Up(e,t){e.indexOf(t)===-1&&e.push(t)}function Hp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Yp{constructor(){this.subscriptions=[]}add(t){return Up(this.subscriptions,t),()=>Hp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Z1(e,t){return t?e*(1e3/t):0}const wg=30,JT=e=>!isNaN(parseFloat(e));class qT{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=an.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=an.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=JT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Yp);const r=this.events[t].add(n);return t==="change"?()=>{r(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=an.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>wg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,wg);return Z1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ca(e,t){return new qT(e,t)}function eP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ca(n))}function tP(e,t){const n=Zl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const l=pT(o[a]);eP(e,a,l)}}function nP(e){return!!(Ke(e)&&e.add)}function $d(e,t){const n=e.getValue("willChange");if(nP(n))return n.add(t)}function J1(e){return e.props[D1]}const q1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,rP=1e-7,iP=12;function oP(e,t,n,r,i){let o,a,l=0;do a=t+(n-t)/2,o=q1(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>rP&&++l<iP);return a}function Sa(e,t,n,r){if(e===t&&n===r)return mt;const i=o=>oP(o,0,1,e,n);return o=>o===0||o===1?o:q1(i(o),t,r)}const ew=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tw=e=>t=>1-e(1-t),nw=Sa(.33,1.53,.69,.99),Gp=tw(nw),rw=ew(Gp),iw=e=>(e*=2)<1?.5*Gp(e):.5*(2-Math.pow(2,-10*(e-1))),Kp=e=>1-Math.sin(Math.acos(e)),ow=tw(Kp),aw=ew(Kp),sw=e=>/^0[^.\s]+$/u.test(e);function aP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||sw(e):!0}const No=e=>Math.round(e*1e5)/1e5,Qp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sP(e){return e==null}const lP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xp=(e,t)=>n=>!!(typeof n=="string"&&lP.test(n)&&n.startsWith(e)||t&&!sP(n)&&Object.prototype.hasOwnProperty.call(n,t)),lw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,l]=r.match(Qp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},cP=e=>wn(0,255,e),Jc={...Hi,transform:e=>Math.round(cP(e))},xr={test:Xp("rgb","red"),parse:lw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Jc.transform(e)+", "+Jc.transform(t)+", "+Jc.transform(n)+", "+No(la.transform(r))+")"};function uP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Fd={test:Xp("#"),parse:uP,transform:xr.transform},ai={test:Xp("hsl","hue"),parse:lw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+on.transform(No(t))+", "+on.transform(No(n))+", "+No(la.transform(r))+")"},He={test:e=>xr.test(e)||Fd.test(e)||ai.test(e),parse:e=>xr.test(e)?xr.parse(e):ai.test(e)?ai.parse(e):Fd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?xr.transform(e):ai.transform(e)},dP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function fP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Qp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(dP))===null||n===void 0?void 0:n.length)||0)>0}const cw="number",uw="color",pP="var",hP="var(",Sg="${}",mP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ua(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(mP,c=>(He.test(c)?(r.color.push(o),i.push(uw),n.push(He.parse(c))):c.startsWith(hP)?(r.var.push(o),i.push(pP),n.push(c)):(r.number.push(o),i.push(cw),n.push(parseFloat(c))),++o,Sg)).split(Sg);return{values:n,split:l,indexes:r,types:i}}function dw(e){return ua(e).values}function fw(e){const{split:t,types:n}=ua(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const l=n[a];l===cw?o+=No(i[a]):l===uw?o+=He.transform(i[a]):o+=i[a]}return o}}const gP=e=>typeof e=="number"?0:e;function vP(e){const t=dw(e);return fw(e)(t.map(gP))}const Gn={test:fP,parse:dw,createTransformer:fw,getAnimatableNone:vP},yP=new Set(["brightness","contrast","saturate","opacity"]);function xP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Qp)||[];if(!r)return e;const i=n.replace(r,"");let o=yP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const wP=/\b([a-z-]*)\(.*?\)/gu,Vd={...Gn,getAnimatableNone:e=>{const t=e.match(wP);return t?t.map(xP).join(" "):e}},SP={...Mp,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Vd,WebkitFilter:Vd},Zp=e=>SP[e];function pw(e,t){let n=Zp(e);return n!==Vd&&(n=Gn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bP=new Set(["auto","none","0"]);function jP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!bP.has(o)&&ua(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=pw(n,i)}const bg=e=>e===Hi||e===z,jg=(e,t)=>parseFloat(e.split(", ")[t]),kg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return jg(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?jg(o[1],e):0}},kP=new Set(["x","y","z"]),CP=Ui.filter(e=>!kP.has(e));function TP(e){const t=[];return CP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Oi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:kg(4,13),y:kg(5,14)};Oi.translateX=Oi.x;Oi.translateY=Oi.y;const jr=new Set;let Bd=!1,zd=!1;function hw(){if(zd){const e=Array.from(jr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=TP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var l;(l=r.getValue(o))===null||l===void 0||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}zd=!1,Bd=!1,jr.forEach(e=>e.complete()),jr.clear()}function mw(){jr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(zd=!0)})}function PP(){mw(),hw()}class Jp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jr.add(this),Bd||(Bd=!0,ae.read(mw),ae.resolveKeyframes(hw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),l=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const gw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),DP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function EP(e){const t=DP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function vw(e,t,n=1){const[r,i]=EP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return gw(a)?parseFloat(a):a}return Ip(i)?vw(i,t,n+1):i}const yw=e=>t=>t.test(e),AP={test:e=>e==="auto",parse:e=>e},xw=[Hi,z,on,Tn,xT,yT,AP],Cg=e=>xw.find(yw(e));class ww extends Jp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Ip(u))){const d=vw(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!X1.has(r)||t.length!==2)return;const[i,o]=t,a=Cg(i),l=Cg(o);if(a!==l)if(bg(a)&&bg(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)aP(t[i])&&r.push(i);r.length&&jP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=Oi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Tg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gn.test(e)||e==="0")&&!e.startsWith("url("));function LP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function _P(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Tg(i,t),l=Tg(o,t);return!a||!l?!1:LP(e)||(n==="spring"||Bp(n))&&r}const IP=e=>e!==null;function Jl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(IP),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const MP=40;class Sw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=an.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>MP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&PP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=an.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!_P(t,r,i,o))if(a)this.options.duration=0;else{c&&c(Jl(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const he=(e,t,n)=>e+(t-e)*n;function qc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function OP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=qc(c,l,e+1/3),o=qc(c,l,e),a=qc(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function gl(e,t){return n=>n>0?t:e}const eu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},RP=[Fd,xr,ai],NP=e=>RP.find(t=>t.test(e));function Pg(e){const t=NP(e);if(!t)return!1;let n=t.parse(e);return t===ai&&(n=OP(n)),n}const Dg=(e,t)=>{const n=Pg(e),r=Pg(t);if(!n||!r)return gl(e,t);const i={...n};return o=>(i.red=eu(n.red,r.red,o),i.green=eu(n.green,r.green,o),i.blue=eu(n.blue,r.blue,o),i.alpha=he(n.alpha,r.alpha,o),xr.transform(i))},$P=(e,t)=>n=>t(e(n)),ba=(...e)=>e.reduce($P),Wd=new Set(["none","hidden"]);function FP(e,t){return Wd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function VP(e,t){return n=>he(e,t,n)}function qp(e){return typeof e=="number"?VP:typeof e=="string"?Ip(e)?gl:He.test(e)?Dg:WP:Array.isArray(e)?bw:typeof e=="object"?He.test(e)?Dg:BP:gl}function bw(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>qp(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function BP(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=qp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function zP(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],l=e.indexes[a][i[a]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[o]=c,i[a]++}return r}const WP=(e,t)=>{const n=Gn.createTransformer(t),r=ua(e),i=ua(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Wd.has(e)&&!i.values.length||Wd.has(t)&&!r.values.length?FP(e,t):ba(bw(zP(r,i),i.values),n):gl(e,t)};function jw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?he(e,t,n):qp(e)(e,t)}const UP=5;function kw(e,t,n){const r=Math.max(t-UP,0);return Z1(n-e(r),t-r)}const ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tu=.001;function HP({duration:e=ye.duration,bounce:t=ye.bounce,velocity:n=ye.velocity,mass:r=ye.mass}){let i,o,a=1-t;a=wn(ye.minDamping,ye.maxDamping,a),e=wn(ye.minDuration,ye.maxDuration,mn(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,m=Ud(u,a),y=Math.exp(-f);return tu-p/m*y},o=u=>{const f=u*a*e,p=f*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=Ud(Math.pow(u,2),a);return(-i(u)+tu>0?-1:1)*((p-m)*y)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-tu+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=GP(i,o,l);if(e=hn(e),isNaN(c))return{stiffness:ye.stiffness,damping:ye.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const YP=12;function GP(e,t,n){let r=n;for(let i=1;i<YP;i++)r=r-e(r)/t(r);return r}function Ud(e,t){return e*Math.sqrt(1-t*t)}const KP=["duration","bounce"],QP=["stiffness","damping","mass"];function Eg(e,t){return t.some(n=>e[n]!==void 0)}function XP(e){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...e};if(!Eg(e,QP)&&Eg(e,KP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*wn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ye.mass,stiffness:i,damping:o}}else{const n=HP(e);t={...t,...n,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function Cw(e=ye.visualDuration,t=ye.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=XP({...n,velocity:-mn(n.velocity||0)}),y=p||0,w=u/(2*Math.sqrt(c*d)),b=a-o,g=mn(Math.sqrt(c/d)),h=Math.abs(b)<5;r||(r=h?ye.restSpeed.granular:ye.restSpeed.default),i||(i=h?ye.restDelta.granular:ye.restDelta.default);let v;if(w<1){const C=Ud(g,w);v=k=>{const T=Math.exp(-w*g*k);return a-T*((y+w*g*b)/C*Math.sin(C*k)+b*Math.cos(C*k))}}else if(w===1)v=C=>a-Math.exp(-g*C)*(b+(y+g*b)*C);else{const C=g*Math.sqrt(w*w-1);v=k=>{const T=Math.exp(-w*g*k),P=Math.min(C*k,300);return a-T*((y+w*g*b)*Math.sinh(P)+C*b*Math.cosh(P))/C}}const j={calculatedDuration:m&&f||null,next:C=>{const k=v(C);if(m)l.done=C>=f;else{let T=0;w<1&&(T=C===0?hn(y):kw(v,C,k));const P=Math.abs(T)<=r,L=Math.abs(a-k)<=i;l.done=P&&L}return l.value=l.done?a:k,l},toString:()=>{const C=Math.min(W1(j),Rd),k=U1(T=>j.next(C*T).value,C,30);return C+"ms "+k}};return j}function Ag({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=P=>l!==void 0&&P<l||c!==void 0&&P>c,y=P=>l===void 0?c:c===void 0||Math.abs(l-P)<Math.abs(c-P)?l:c;let w=n*t;const b=f+w,g=a===void 0?b:a(b);g!==b&&(w=g-f);const h=P=>-w*Math.exp(-P/r),v=P=>g+h(P),j=P=>{const L=h(P),_=v(P);p.done=Math.abs(L)<=u,p.value=p.done?g:_};let C,k;const T=P=>{m(p.value)&&(C=P,k=Cw({keyframes:[p.value,y(p.value)],velocity:kw(v,P,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:P=>{let L=!1;return!k&&C===void 0&&(L=!0,j(P),T(P)),C!==void 0&&P>=C?k.next(P-C):(!L&&j(P),p)}}}const ZP=Sa(.42,0,1,1),JP=Sa(0,0,.58,1),Tw=Sa(.42,0,.58,1),qP=e=>Array.isArray(e)&&typeof e[0]!="number",eD={linear:mt,easeIn:ZP,easeInOut:Tw,easeOut:JP,circIn:Kp,circInOut:aw,circOut:ow,backIn:Gp,backInOut:rw,backOut:nw,anticipate:iw},Lg=e=>{if(zp(e)){j1(e.length===4);const[t,n,r,i]=e;return Sa(t,n,r,i)}else if(typeof e=="string")return eD[e];return e};function tD(e,t,n){const r=[],i=n||jw,o=e.length-1;for(let a=0;a<o;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||mt:t;l=ba(c,l)}r.push(l)}return r}function nD(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(j1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=tD(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Ii(e[f],e[f+1],d);return l[f](p)};return n?d=>u(wn(e[0],e[o-1],d)):u}function rD(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ii(0,t,r);e.push(he(n,1,i))}}function iD(e){const t=[0];return rD(t,e.length-1),t}function oD(e,t){return e.map(n=>n*t)}function aD(e,t){return e.map(()=>t||Tw).splice(0,e.length-1)}function vl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=qP(r)?r.map(Lg):Lg(r),o={done:!1,value:t[0]},a=oD(n&&n.length===t.length?n:iD(t),e),l=nD(a,t,{ease:Array.isArray(i)?i:aD(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const sD=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ae.update(t,!0),stop:()=>Yn(t),now:()=>$e.isProcessing?$e.timestamp:an.now()}},lD={decay:Ag,inertia:Ag,tween:vl,keyframes:vl,spring:Cw},cD=e=>e/100;class eh extends Sw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Jp,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(o,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,l=Bp(n)?n:lD[n]||vl;let c,u;l!==vl&&typeof t[0]!="number"&&(c=ba(cD,jw(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});o==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=W1(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:p,repeat:m,repeatType:y,repeatDelay:w,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,j=o;if(m){const P=Math.min(this.currentTime,d)/f;let L=Math.floor(P),_=P%1;!_&&P>=1&&(_=1),_===1&&L--,L=Math.min(L,m+1),!!(L%2)&&(y==="reverse"?(_=1-_,w&&(_-=w/f)):y==="mirror"&&(j=a)),v=wn(0,1,_)*f}const C=h?{done:!1,value:c[0]}:j.next(v);l&&(C.value=l(C.value));let{done:k}=C;!h&&u!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return T&&i!==void 0&&(C.value=Jl(c,this.options,i)),b&&b(C.value),T&&this.finish(),C}get duration(){const{resolved:t}=this;return t?mn(t.calculatedDuration):0}get time(){return mn(this.currentTime)}set time(t){t=hn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=mn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=sD,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const uD=new Set(["opacity","clipPath","filter","transform"]);function dD(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=Y1(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const fD=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yl=10,pD=2e4;function hD(e){return Bp(e.type)||e.type==="spring"||!H1(e.ease)}function mD(e,t){const n=new eh({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<pD;)r=n.sample(o),i.push(r.value),o+=yl;return{times:void 0,keyframes:i,duration:o-yl,ease:"linear"}}const Pw={anticipate:iw,backInOut:rw,circInOut:aw};function gD(e){return e in Pw}class _g extends Sw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new ww(o,(a,l)=>this.onKeyframesResolved(a,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof o=="string"&&ml()&&gD(o)&&(o=Pw[o]),hD(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:y,...w}=this.options,b=mD(t,w);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,o=b.ease,a="keyframes"}const d=dD(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:o});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(gg(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(Jl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return mn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return mn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=hn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return mt;const{animation:r}=n;gg(r,t)}return mt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...m}=this.options,y=new eh({...m,keyframes:r,duration:i,type:o,ease:a,times:l,isGenerator:!0}),w=hn(this.time);u.setWithVelocity(y.sample(w-yl).value,y.sample(w).value,yl)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return fD()&&r&&uD.has(r)&&!c&&!u&&!i&&o!=="mirror"&&a!==0&&l!=="inertia"}}const vD={type:"spring",stiffness:500,damping:25,restSpeed:10},yD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),xD={type:"keyframes",duration:.8},wD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},SD=(e,{keyframes:t})=>t.length>2?xD:Mr.has(e)?e.startsWith("scale")?yD(t[1]):vD:wD;function bD({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const th=(e,t,n,r={},i,o)=>a=>{const l=Vp(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-hn(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};bD(l)||(d={...d,...SD(e,d)}),d.duration&&(d.duration=hn(d.duration)),d.repeatDelay&&(d.repeatDelay=hn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const p=Jl(d.keyframes,l);if(p!==void 0)return ae.update(()=>{d.onUpdate(p),d.onComplete()}),new BT([])}return!o&&_g.supports(d)?new _g(d):new eh(d)};function jD({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Dw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=c[f];if(m===void 0||d&&jD(d,f))continue;const y={delay:n,...Vp(a||{},f)};let w=!1;if(window.MotionHandoffAnimation){const g=J1(e);if(g){const h=window.MotionHandoffAnimation(g,f,ae);h!==null&&(y.startTime=h,w=!0)}}$d(e,f),p.start(th(f,p,m,e.shouldReduceMotion&&X1.has(f)?{type:!1}:y,e,w));const b=p.animation;b&&u.push(b)}return l&&Promise.all(u).then(()=>{ae.update(()=>{l&&tP(e,l)})}),u}function Hd(e,t,n={}){var r;const i=Zl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(Dw(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=o;return kD(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function kD(e,t,n=0,r=0,i=1,o){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(CD).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Hd(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function CD(e,t){return e.sortNodePosition(t)}function TD(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Hd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Hd(e,t,n);else{const i=typeof t=="function"?Zl(e,t,n.custom):t;r=Promise.all(Dw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const PD=Dp.length;function Ew(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ew(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<PD;n++){const r=Dp[n],i=e.props[r];(sa(i)||i===!1)&&(t[r]=i)}return t}const DD=[...Pp].reverse(),ED=Pp.length;function AD(e){return t=>Promise.all(t.map(({animation:n,options:r})=>TD(e,n,r)))}function LD(e){let t=AD(e),n=Ig(),r=!0;const i=c=>(u,d)=>{var f;const p=Zl(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:y,...w}=p;u={...u,...w,...y}}return u};function o(c){t=c(e)}function a(c){const{props:u}=e,d=Ew(e.parent)||{},f=[],p=new Set;let m={},y=1/0;for(let b=0;b<ED;b++){const g=DD[b],h=n[g],v=u[g]!==void 0?u[g]:d[g],j=sa(v),C=g===c?h.isActive:null;C===!1&&(y=b);let k=v===d[g]&&v!==u[g]&&j;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),h.protectedKeys={...m},!h.isActive&&C===null||!v&&!h.prevProp||Ql(v)||typeof v=="boolean")continue;const T=_D(h.prevProp,v);let P=T||g===c&&h.isActive&&!k&&j||b>y&&j,L=!1;const _=Array.isArray(v)?v:[v];let R=_.reduce(i(g),{});C===!1&&(R={});const{prevResolvedValues:I={}}=h,F={...I,...R},U=V=>{P=!0,p.has(V)&&(L=!0,p.delete(V)),h.needsAnimating[V]=!0;const E=e.getValue(V);E&&(E.liveStyle=!1)};for(const V in F){const E=R[V],M=I[V];if(m.hasOwnProperty(V))continue;let O=!1;Od(E)&&Od(M)?O=!z1(E,M):O=E!==M,O?E!=null?U(V):p.add(V):E!==void 0&&p.has(V)?U(V):h.protectedKeys[V]=!0}h.prevProp=v,h.prevResolvedValues=R,h.isActive&&(m={...m,...R}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(k&&T)||L)&&f.push(..._.map(V=>({animation:V,options:{type:g}})))}if(p.size){const b={};p.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),b[g]=h??null}),f.push({animation:b})}let w=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ig(),r=!0}}}function _D(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!z1(t,e):!1}function nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ig(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ID extends qn{constructor(t){super(t),t.animationState||(t.animationState=LD(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ql(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let MD=0;class OD extends qn{constructor(){super(...arguments),this.id=MD++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const RD={animation:{Feature:ID},exit:{Feature:OD}};function da(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ja(e){return{point:{x:e.pageX,y:e.pageY}}}const ND=e=>t=>Wp(t)&&e(t,ja(t));function $o(e,t,n,r){return da(e,t,ND(n),r)}const Mg=(e,t)=>Math.abs(e-t);function $D(e,t){const n=Mg(e.x,t.x),r=Mg(e.y,t.y);return Math.sqrt(n**2+r**2)}class Aw{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ru(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=$D(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:y}=f,{timestamp:w}=$e;this.history.push({...y,timestamp:w});const{onStart:b,onMove:g}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=nu(p,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ru(f.type==="pointercancel"?this.lastMoveEventInfo:nu(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,b),y&&y(f,b)},!Wp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=ja(t),l=nu(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=$e;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,ru(l,this.history)),this.removeListeners=ba($o(this.contextWindow,"pointermove",this.handlePointerMove),$o(this.contextWindow,"pointerup",this.handlePointerUp),$o(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Yn(this.updatePoint)}}function nu(e,t){return t?{point:t(e.point)}:e}function Og(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ru({point:e},t){return{point:e,delta:Og(e,Lw(t)),offset:Og(e,FD(t)),velocity:VD(t,.1)}}function FD(e){return e[0]}function Lw(e){return e[e.length-1]}function VD(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Lw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>hn(t)));)n--;if(!r)return{x:0,y:0};const o=mn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const _w=1e-4,BD=1-_w,zD=1+_w,Iw=.01,WD=0-Iw,UD=0+Iw;function vt(e){return e.max-e.min}function HD(e,t,n){return Math.abs(e-t)<=n}function Rg(e,t,n,r=.5){e.origin=r,e.originPoint=he(t.min,t.max,e.origin),e.scale=vt(n)/vt(t),e.translate=he(n.min,n.max,e.origin)-e.originPoint,(e.scale>=BD&&e.scale<=zD||isNaN(e.scale))&&(e.scale=1),(e.translate>=WD&&e.translate<=UD||isNaN(e.translate))&&(e.translate=0)}function Fo(e,t,n,r){Rg(e.x,t.x,n.x,r?r.originX:void 0),Rg(e.y,t.y,n.y,r?r.originY:void 0)}function Ng(e,t,n){e.min=n.min+t.min,e.max=e.min+vt(t)}function YD(e,t,n){Ng(e.x,t.x,n.x),Ng(e.y,t.y,n.y)}function $g(e,t,n){e.min=t.min-n.min,e.max=e.min+vt(t)}function Vo(e,t,n){$g(e.x,t.x,n.x),$g(e.y,t.y,n.y)}function GD(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?he(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?he(n,e,r.max):Math.min(e,n)),e}function Fg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function KD(e,{top:t,left:n,bottom:r,right:i}){return{x:Fg(e.x,n,i),y:Fg(e.y,t,r)}}function Vg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function QD(e,t){return{x:Vg(e.x,t.x),y:Vg(e.y,t.y)}}function XD(e,t){let n=.5;const r=vt(e),i=vt(t);return i>r?n=Ii(t.min,t.max-r,e.min):r>i&&(n=Ii(e.min,e.max-i,t.min)),wn(0,1,n)}function ZD(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Yd=.35;function JD(e=Yd){return e===!1?e=0:e===!0&&(e=Yd),{x:Bg(e,"left","right"),y:Bg(e,"top","bottom")}}function Bg(e,t,n){return{min:zg(e,t),max:zg(e,n)}}function zg(e,t){return typeof e=="number"?e:e[t]||0}const Wg=()=>({translate:0,scale:1,origin:0,originPoint:0}),si=()=>({x:Wg(),y:Wg()}),Ug=()=>({min:0,max:0}),we=()=>({x:Ug(),y:Ug()});function jt(e){return[e("x"),e("y")]}function Mw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function qD({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function e5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function iu(e){return e===void 0||e===1}function Gd({scale:e,scaleX:t,scaleY:n}){return!iu(e)||!iu(t)||!iu(n)}function pr(e){return Gd(e)||Ow(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ow(e){return Hg(e.x)||Hg(e.y)}function Hg(e){return e&&e!=="0%"}function xl(e,t,n){const r=e-n,i=t*r;return n+i}function Yg(e,t,n,r,i){return i!==void 0&&(e=xl(e,i,r)),xl(e,n,r)+t}function Kd(e,t=0,n=1,r,i){e.min=Yg(e.min,t,n,r,i),e.max=Yg(e.max,t,n,r,i)}function Rw(e,{x:t,y:n}){Kd(e.x,t.translate,t.scale,t.originPoint),Kd(e.y,n.translate,n.scale,n.originPoint)}const Gg=.999999999999,Kg=1.0000000000001;function t5(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let l=0;l<i;l++){o=n[l],a=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ci(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Rw(e,a)),r&&pr(o.latestValues)&&ci(e,o.latestValues))}t.x<Kg&&t.x>Gg&&(t.x=1),t.y<Kg&&t.y>Gg&&(t.y=1)}function li(e,t){e.min=e.min+t,e.max=e.max+t}function Qg(e,t,n,r,i=.5){const o=he(e.min,e.max,i);Kd(e,t,n,o,r)}function ci(e,t){Qg(e.x,t.x,t.scaleX,t.scale,t.originX),Qg(e.y,t.y,t.scaleY,t.scale,t.originY)}function Nw(e,t){return Mw(e5(e.getBoundingClientRect(),t))}function n5(e,t,n){const r=Nw(e,n),{scroll:i}=t;return i&&(li(r.x,i.offset.x),li(r.y,i.offset.y)),r}const $w=({current:e})=>e?e.ownerDocument.defaultView:null,r5=new WeakMap;class i5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ja(d).point)},o=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:y}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XT(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(b=>{let g=this.getAxisMotionValue(b).get()||0;if(on.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[b];v&&(g=vt(v)*(parseFloat(g)/100))}}this.originPoint[b]=g}),y&&ae.postRender(()=>y(d,f)),$d(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:b}=f;if(m&&this.currentDirection===null){this.currentDirection=o5(b),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),w&&w(d,f)},l=(d,f)=>this.stop(d,f),c=()=>jt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Aw(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:$w(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ae.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!es(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=GD(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&oi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=KD(i.layoutBox,n):this.constraints=!1,this.elastic=JD(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&jt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=ZD(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!oi(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=n5(r,i.root,this.visualElement.getTransformPagePoint());let a=QD(i.layout.layoutBox,o);if(n){const l=n(qD(a));this.hasMutatedConstraints=!!l,l&&(a=Mw(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=jt(d=>{if(!es(d,n,this.currentDirection))return;let f=c&&c[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return $d(this.visualElement,t),r.start(th(t,r,0,n,this.visualElement,!1))}stopAnimation(){jt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){jt(n=>{const{drag:r}=this.getProps();if(!es(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];o.set(t[n]-he(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!oi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};jt(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=XD({min:c,max:c},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),jt(a=>{if(!es(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(he(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;r5.set(this.visualElement,this);const t=this.visualElement.current,n=$o(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();oi(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ae.read(r);const a=da(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(jt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Yd,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:l}}}function es(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function o5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class a5 extends qn{constructor(t){super(t),this.removeGroupControls=mt,this.removeListeners=mt,this.controls=new i5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Xg=e=>(t,n)=>{e&&ae.postRender(()=>e(t,n))};class s5 extends qn{constructor(){super(...arguments),this.removePointerDownListener=mt}onPointerDown(t){this.session=new Aw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$w(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Xg(t),onStart:Xg(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&ae.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=$o(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ms={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ro={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Zg(e,t.target.x),r=Zg(e,t.target.y);return`${n}% ${r}%`}},l5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gn.parse(e);if(i.length>5)return r;const o=Gn.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=he(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class c5 extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;ET(u5),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ms.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||ae.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Ap.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Fw(e){const[t,n]=S1(),r=S.useContext(bp);return s.jsx(c5,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(E1),isPresent:t,safeToRemove:n})}const u5={borderRadius:{...ro,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ro,borderTopRightRadius:ro,borderBottomLeftRadius:ro,borderBottomRightRadius:ro,boxShadow:l5};function d5(e,t,n){const r=Ke(e)?e:ca(e);return r.start(th("",r,t,n)),r.animation}function f5(e){return e instanceof SVGElement&&e.tagName!=="svg"}const p5=(e,t)=>e.depth-t.depth;class h5{constructor(){this.children=[],this.isDirty=!1}add(t){Up(this.children,t),this.isDirty=!0}remove(t){Hp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(p5),this.isDirty=!1,this.children.forEach(t)}}function m5(e,t){const n=an.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yn(r),e(o-t))};return ae.read(r,!0),()=>Yn(r)}const Vw=["TopLeft","TopRight","BottomLeft","BottomRight"],g5=Vw.length,Jg=e=>typeof e=="string"?parseFloat(e):e,qg=e=>typeof e=="number"||z.test(e);function v5(e,t,n,r,i,o){i?(e.opacity=he(0,n.opacity!==void 0?n.opacity:1,y5(r)),e.opacityExit=he(t.opacity!==void 0?t.opacity:1,0,x5(r))):o&&(e.opacity=he(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<g5;a++){const l=`border${Vw[a]}Radius`;let c=e0(t,l),u=e0(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||qg(c)===qg(u)?(e[l]=Math.max(he(Jg(c),Jg(u),r),0),(on.test(u)||on.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=he(t.rotate||0,n.rotate||0,r))}function e0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const y5=Bw(0,.5,ow),x5=Bw(.5,.95,mt);function Bw(e,t,n){return r=>r<e?0:r>t?1:n(Ii(e,t,r))}function t0(e,t){e.min=t.min,e.max=t.max}function bt(e,t){t0(e.x,t.x),t0(e.y,t.y)}function n0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function r0(e,t,n,r,i){return e-=t,e=xl(e,1/n,r),i!==void 0&&(e=xl(e,1/i,r)),e}function w5(e,t=0,n=1,r=.5,i,o=e,a=e){if(on.test(t)&&(t=parseFloat(t),t=he(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=he(o.min,o.max,r);e===o&&(l-=t),e.min=r0(e.min,t,n,l,i),e.max=r0(e.max,t,n,l,i)}function i0(e,t,[n,r,i],o,a){w5(e,t[n],t[r],t[i],t.scale,o,a)}const S5=["x","scaleX","originX"],b5=["y","scaleY","originY"];function o0(e,t,n,r){i0(e.x,t,S5,n?n.x:void 0,r?r.x:void 0),i0(e.y,t,b5,n?n.y:void 0,r?r.y:void 0)}function a0(e){return e.translate===0&&e.scale===1}function zw(e){return a0(e.x)&&a0(e.y)}function s0(e,t){return e.min===t.min&&e.max===t.max}function j5(e,t){return s0(e.x,t.x)&&s0(e.y,t.y)}function l0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ww(e,t){return l0(e.x,t.x)&&l0(e.y,t.y)}function c0(e){return vt(e.x)/vt(e.y)}function u0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class k5{constructor(){this.members=[]}add(t){Up(this.members,t),t.scheduleRender()}remove(t){if(Hp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function C5(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const hr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,ou=["","X","Y","Z"],T5={visibility:"hidden"},d0=1e3;let P5=0;function au(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Uw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=J1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ae,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Uw(r)}function Hw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=P5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(hr.totalNodes=hr.resolvedTargetDeltas=hr.recalculatedProjection=0),this.nodes.forEach(A5),this.nodes.forEach(O5),this.nodes.forEach(R5),this.nodes.forEach(L5),ko&&window.MotionDebug.record(hr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new h5)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Yp),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=f5(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=m5(p,250),Ms.hasAnimatedSinceResize&&(Ms.hasAnimatedSinceResize=!1,this.nodes.forEach(p0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||B5,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Ww(this.targetLayout,y)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const j={...Vp(w,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else p||p0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(N5),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Uw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(f0);return}this.isUpdating||this.nodes.forEach(I5),this.isUpdating=!1,this.nodes.forEach(M5),this.nodes.forEach(D5),this.nodes.forEach(E5),this.clearAllSnapshots();const l=an.now();$e.delta=wn(0,1e3/60,l-$e.timestamp),$e.timestamp=l,$e.isProcessing=!0,Xc.update.process($e),Xc.preRender.process($e),Xc.render.process($e),$e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ap.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_5),this.sharedNodes.forEach($5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!zw(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(l||pr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),z5(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:l}=this.options;if(!l)return we();const c=l.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(W5))){const{scroll:d}=this.root;d&&(li(c.x,d.offset.x),li(c.y,d.offset.y))}return c}removeElementScroll(a){var l;const c=we();if(bt(c,a),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&bt(c,a),li(c.x,f.offset.x),li(c.y,f.offset.y))}return c}applyTransform(a,l=!1){const c=we();bt(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ci(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),pr(d.latestValues)&&ci(c,d.latestValues)}return pr(this.latestValues)&&ci(c,this.latestValues),c}removeTransform(a){const l=we();bt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!pr(u.latestValues))continue;Gd(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();bt(d,f),o0(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return pr(this.latestValues)&&o0(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=$e.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Vo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),YD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bt(this.target,this.layout.layoutBox),Rw(this.target,this.targetDelta)):bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Vo(this.relativeTargetOrigin,this.target,m.target),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&hr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gd(this.parent.latestValues)||Ow(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===$e.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;bt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;t5(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=we());const{target:y}=l;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(n0(this.prevProjectionDelta.x,this.projectionDelta.x),n0(this.prevProjectionDelta.y,this.projectionDelta.y)),Fo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!u0(this.projectionDelta.x,this.prevProjectionDelta.x)||!u0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ko&&hr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=si(),this.projectionDelta=si(),this.projectionDeltaWithTransform=si()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=si();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=we(),m=c?c.source:void 0,y=this.layout?this.layout.source:void 0,w=m!==y,b=this.getStack(),g=!b||b.members.length<=1,h=!!(w&&!g&&this.options.crossfade===!0&&!this.path.some(V5));this.animationProgress=0;let v;this.mixTargetDelta=j=>{const C=j/1e3;h0(f.x,a.x,C),h0(f.y,a.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),F5(this.relativeTarget,this.relativeTargetOrigin,p,C),v&&j5(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),bt(v,this.relativeTarget)),w&&(this.animationValues=d,v5(d,u,this.latestValues,C,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{Ms.hasAnimatedSinceResize=!0,this.currentAnimation=d5(0,d0,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(d0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&Yw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||we();const f=vt(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=vt(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}bt(l,c),ci(l,d),Fo(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new k5),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&au("z",a,u,this.animationValues);for(let d=0;d<ou.length;d++)au(`rotate${ou[d]}`,a,u,this.animationValues),au(`skew${ou[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return T5;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=_s(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=_s(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!pr(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=C5(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in hl){if(p[w]===void 0)continue;const{correct:b,applyTo:g}=hl[w],h=u.transform==="none"?p[w]:b(p[w],f);if(g){const v=g.length;for(let j=0;j<v;j++)u[g[j]]=h}else u[w]=h}return this.options.layoutId&&(u.pointerEvents=f===this?_s(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(f0),this.root.sharedNodes.clear()}}}function D5(e){e.updateLayout()}function E5(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?jt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=vt(p);p.min=r[f].min,p.max=p.min+m}):Yw(o,n.layoutBox,r)&&jt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=vt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const l=si();Fo(l,r,n.layoutBox);const c=si();a?Fo(c,e.applyTransform(i,!0),n.measuredBox):Fo(c,r,n.layoutBox);const u=!zw(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const y=we();Vo(y,n.layoutBox,p.layoutBox);const w=we();Vo(w,r,m.layoutBox),Ww(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function A5(e){ko&&hr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function L5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _5(e){e.clearSnapshot()}function f0(e){e.clearMeasurements()}function I5(e){e.isLayoutDirty=!1}function M5(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function p0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function O5(e){e.resolveTargetDelta()}function R5(e){e.calcProjection()}function N5(e){e.resetSkewAndRotation()}function $5(e){e.removeLeadSnapshot()}function h0(e,t,n){e.translate=he(t.translate,0,n),e.scale=he(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function m0(e,t,n,r){e.min=he(t.min,n.min,r),e.max=he(t.max,n.max,r)}function F5(e,t,n,r){m0(e.x,t.x,n.x,r),m0(e.y,t.y,n.y,r)}function V5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const B5={duration:.45,ease:[.4,0,.1,1]},g0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),v0=g0("applewebkit/")&&!g0("chrome/")?Math.round:mt;function y0(e){e.min=v0(e.min),e.max=v0(e.max)}function z5(e){y0(e.x),y0(e.y)}function Yw(e,t,n){return e==="position"||e==="preserve-aspect"&&!HD(c0(t),c0(n),.2)}function W5(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const U5=Hw({attachResizeListener:(e,t)=>da(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),su={current:void 0},Gw=Hw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!su.current){const e=new U5({});e.mount(window),e.setOptions({layoutScroll:!0}),su.current=e}return su.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),H5={pan:{Feature:s5},drag:{Feature:a5,ProjectionNode:Gw,MeasureLayout:Fw}};function x0(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&ae.postRender(()=>o(t,ja(t)))}class Y5 extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=HT(t,n=>(x0(this.node,n,"Start"),r=>x0(this.node,r,"End"))))}unmount(){}}class G5 extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ba(da(this.node.current,"focus",()=>this.onFocus()),da(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function w0(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&ae.postRender(()=>o(t,ja(t)))}class K5 extends qn{mount(){const{current:t}=this.node;t&&(this.unmount=QT(t,n=>(w0(this.node,n,"Start"),(r,{success:i})=>w0(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qd=new WeakMap,lu=new WeakMap,Q5=e=>{const t=Qd.get(e.target);t&&t(e)},X5=e=>{e.forEach(Q5)};function Z5({root:e,...t}){const n=e||document;lu.has(n)||lu.set(n,{});const r=lu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(X5,{root:e,...t})),r[i]}function J5(e,t,n){const r=Z5(t);return Qd.set(e,n),r.observe(e),()=>{Qd.delete(e),r.unobserve(e)}}const q5={some:0,all:1};class eE extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:q5[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return J5(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(tE(t,n))&&this.startObserver()}unmount(){}}function tE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const nE={inView:{Feature:eE},tap:{Feature:K5},focus:{Feature:G5},hover:{Feature:Y5}},rE={layout:{ProjectionNode:Gw,MeasureLayout:Fw}},Xd={current:null},Kw={current:!1};function iE(){if(Kw.current=!0,!!Cp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Xd.current=e.matches;e.addListener(t),t()}else Xd.current=!1}const oE=[...xw,He,Gn],aE=e=>oE.find(yw(e)),S0=new WeakMap;function sE(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ke(i))e.addValue(r,i);else if(Ke(o))e.addValue(r,ca(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,ca(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const b0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class lE{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=an.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,ae.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Xl(n),this.isVariantNode=P1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const y=p[m];c[m]!==void 0&&Ke(y)&&y.set(c[m],!1)}}mount(t){this.current=t,S0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Kw.current||iE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){S0.delete(this.current),this.projection&&this.projection.unmount(),Yn(this.notifyUpdate),Yn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Mr.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Mi){const n=Mi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<b0.length;r++){const i=b0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=sE(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ca(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(gw(i)||sw(i))?i=parseFloat(i):!aE(i)&&Gn.test(n)&&(i=pw(t,n)),this.setBaseTarget(t,Ke(i)?i.get():i)),Ke(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=_p(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ke(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Yp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Qw extends lE{constructor(){super(...arguments),this.KeyframeResolver=ww}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ke(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function cE(e){return window.getComputedStyle(e)}class uE extends Qw{constructor(){super(...arguments),this.type="html",this.renderInstance=R1}readValueFromInstance(t,n){if(Mr.has(n)){const r=Zp(n);return r&&r.default||0}else{const r=cE(t),i=(I1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Nw(t,n)}build(t,n,r){Op(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Fp(t,n,r)}}class dE extends Qw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=we}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Mr.has(n)){const r=Zp(n);return r&&r.default||0}return n=N1.has(n)?n:Ep(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return V1(t,n,r)}build(t,n,r){Rp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){$1(t,n,r,i)}mount(t){this.isSVGTag=$p(t.tagName),super.mount(t)}}const fE=(e,t)=>Lp(e)?new dE(t):new uE(t,{allowProjection:e!==S.Fragment}),pE=$T({...RD,...nE,...H5,...rE},fE),N=qC(pE),hE=x(N.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,mE=x.div`
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
`,gE=x(pp)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,vE=x.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,yE=x.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,xE=x(N.button)`
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
`,wE=x(N.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,SE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"5"}),s.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),s.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),s.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),s.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),s.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),s.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),s.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),s.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),bE=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),jE=()=>{const{isDark:e,toggleTheme:t}=hp();return s.jsx(hE,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:s.jsxs(mE,{children:[s.jsx(gE,{to:"/","aria-label":"Go to homepage",children:s.jsx(vE,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),s.jsx(yE,{}),s.jsx(xE,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:s.jsx(Fe,{mode:"wait",children:s.jsx(wE,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?s.jsx(bE,{}):s.jsx(SE,{})},e?"moon":"sun")})})]})})},kE=x(N.div)`
  position: relative;
`,CE=x(pp)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Xw=x(N.div)`
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
`,TE=x(N.div)`
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

  ${Xw}:hover &::before {
    opacity: 0.3;
  }
`,PE=x.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,DE={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},EE={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},AE=({title:e,icon:t,to:n})=>s.jsx(kE,{variants:DE,whileHover:"hover",whileTap:"tap",children:s.jsx(CE,{to:n,children:s.jsxs(Xw,{variants:EE,children:[s.jsx(TE,{children:t}),s.jsx(PE,{children:e})]})})}),LE=x.div`
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
`,_E=x(N.div)`
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
`,IE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},ME=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),s.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),s.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),s.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),s.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),s.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),s.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),s.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),s.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),s.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),OE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),s.jsx("path",{d:"M1 10h22"}),s.jsx("path",{d:"M17 14h.01"})]}),RE=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),NE=[{id:"tax-manager",title:"Tax Manager",icon:s.jsx(ME,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:s.jsx(OE,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:s.jsx(RE,{}),to:"/canvas-manager"}],$E=()=>s.jsx(LE,{children:s.jsx(_E,{variants:IE,initial:"hidden",animate:"visible",children:NE.map(e=>s.jsx(AE,{title:e.title,icon:e.icon,to:e.to},e.id))})}),Zw=x.div`
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
`;const Os=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],j0=75e3,ui=4,FE=12e5,VE=6e4,k0=5e6,C0=10,BE=12,zE=1800;function kr(e){const t=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(t?"-":"")+r;let i="";const o=r.slice(-3),a=r.slice(0,-3);if(a.length>0){const l=[];let c=a;for(;c.length>0;)c.length>=2?(l.unshift(c.slice(-2)),c=c.slice(0,-2)):(l.unshift(c),c="");i=l.join(",")+","+o}else i=o;return(t?"-":"")+i}function H(e){return"₹"+kr(e)}function K(e){const t=e<0,n=Math.abs(e),r=Math.round(n*100)/100,[i,o]=r.toFixed(2).split(".");return(t?"-":"")+"₹"+kr(parseInt(i))+"."+o}function T0(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:kr(e)}function WE(e){for(let t=Os.length-1;t>=0;t--)if(e>Os[t].from)return Os[t].rate;return 0}function UE(e){const t=[];let n=e,r=0;for(const i of Os){const o=i.from,l=(i.to??1/0)-o;if(n<=0){t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const c=Math.min(n,l),u=c*i.rate/100;t.push({from:o,to:i.to,rate:i.rate,taxableInSlab:c>0?c:0,taxInSlab:u}),r+=u,n-=c}return{slabs:t,totalTax:r}}function HE(e,t){if(t>k0){const r=e*(1+C0/100)*(1+ui/100),i=t-k0,a=(e+i)*(1+ui/100),l=a<r,c=Math.min(r,a),u=c/(1+ui/100),d=u-e,f=c-u;return{surchargeApplicable:!0,surchargeRate:C0,surchargeAmount:d,marginalReliefApplied:l,taxAfterSurcharge:u,cess:f,totalTax:c}}else{const n=e*(ui/100),r=e+n;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:n,totalTax:r}}}function P0(e,t,n,r,i,o,a){const l=e*t/100,c=e-l;let u=0;i==="percentage"?u=e*o/100:i==="amount"&&(u=o);const d=e+u;let f=0,p=0;n&&(r==="percentage"?(f=l*BE/100,p=f):(f=zE*12,p=f));const m=e-p,y=a.map(se=>({name:se.name,amount:se.amount*12})),w=y.reduce((se,le)=>se+le.amount,0),b=Math.max(0,m-j0),{slabs:g,totalTax:h}=UE(b);let v=0,j=h;b<=FE&&(v=Math.min(h,VE),j=Math.max(0,h-v));const{surchargeApplicable:C,surchargeRate:k,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cess:_,totalTax:R}=HE(j,b),I=f+p,F=R,U=f+R+w,D=m-f-R-w,W=D/12,V=m>0?R/m*100:0,E=WE(b);let M=0,O=u;if(u>0&&E>0){let se=u*E/100;C&&(se=se*(1+k/100)),M=se*(1+ui/100),O=u-M}const B=D+O,G=B/12;return{baseSalary:e,basicSalary:l,hra:c,bonus:u,totalEarnings:d,employeePF:f,employerPF:p,grossSalary:m,standardDeduction:j0,additionalDeductions:y,totalAdditionalDeductions:w,taxableIncome:b,slabs:g,taxBeforeSurcharge:h,surchargeApplicable:C,surchargeRate:k,surchargeAmount:T,marginalReliefApplied:P,taxAfterSurcharge:L,cessRate:ui,cess:_,totalTax:R,rebate87A:v,totalPFDeduction:I,totalTaxDeduction:F,totalDeductions:U,netSalaryYearly:D,netSalaryMonthly:W,effectiveTaxRate:V,bonusTaxRate:E,bonusTaxAmount:M,bonusAfterTax:O,totalIncomeYearly:B,totalIncomeMonthly:G}}function YE(e){const t=P0(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let n=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);n=P0(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...t,hikePercentage:r,postHike:n}}const nh="taxCalculatorInput";function GE(e){localStorage.setItem(nh,JSON.stringify(e))}function KE(){localStorage.removeItem(nh)}function Jw(){const e=localStorage.getItem(nh);if(e)try{return JSON.parse(e)}catch{return null}return null}const QE={financialYear:"FY 2025-26"},XE=x(N.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,io=x.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,oo=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,ao=x.div`
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
`,so=x.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,ZE=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,Fr=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,D0=x.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,rr=x.input`
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
`,cu=x.div`
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
`,uu=x.div`
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
`,E0=x.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,lo=x(N.button)`
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
`,JE=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,du=x(N.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,fu=x(N.button)`
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
`,qE=x(N.button)`
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
`,e4=x.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,t4=x(N.button)`
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
`,n4=x(N.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,r4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),i4=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),o4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),s.jsx("path",{d:"M12 8v13"}),s.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),s.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),a4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M8 12h8"})]}),s4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),s.jsx("polyline",{points:"16 7 22 7 22 13"})]}),l4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),pu=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),wl={type:"spring",stiffness:300,damping:30,mass:.8},c4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:wl}},u4={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...wl},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...wl},opacity:{duration:.1}}}},d4={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:wl},exit:{opacity:0,x:-20,transition:{duration:.15}}};function hu(e){const t=e.replace(/[^\d]/g,"");return t?kr(parseInt(t)):""}function ts(e){return parseInt(e.replace(/,/g,""))||0}const f4=({onCalculate:e,onReset:t,autoCalculate:n=!1})=>{const[r,i]=S.useState(""),[o,a]=S.useState("50"),[l,c]=S.useState("percentage"),[u,d]=S.useState("none"),[f,p]=S.useState(""),[m,y]=S.useState([]),[w,b]=S.useState(""),[g,h]=S.useState(!1),v=S.useRef(!1);S.useEffect(()=>{const D=Jw();D&&(i(kr(D.baseSalary)),a(D.basicPercentage.toString()),c(D.pfType),d(D.bonusType),p(D.bonusValue>0?D.bonusType==="amount"?kr(D.bonusValue):D.bonusValue.toString():""),y(D.additionalDeductions.map(W=>({name:W.name,amount:kr(W.amount)}))),b(D.hikePercentage>0?D.hikePercentage.toString():"")),h(!0)},[]),S.useEffect(()=>{g&&n&&r&&!v.current&&(v.current=!0,setTimeout(()=>{_()},100))},[g,n,r]);const j=D=>{i(hu(D))},C=D=>{p(hu(D))},k=(D,W)=>{const V=[...m];V[D].amount=hu(W),y(V)},T=()=>{y([...m,{name:"",amount:""}])},P=D=>{y(m.filter((W,V)=>V!==D))},L=(D,W)=>{const V=[...m];V[D].name=W,y(V)},_=()=>{const D={baseSalary:ts(r),basicPercentage:parseFloat(o)||50,calculatePF:!0,pfType:l,bonusType:u,bonusValue:u==="amount"?ts(f):parseFloat(f)||0,additionalDeductions:m.filter(W=>W.name&&W.amount).map(W=>({name:W.name,amount:ts(W.amount)})),hikePercentage:parseFloat(w)||0};GE(D),e(D)},R=()=>{i(""),a("50"),c("percentage"),d("none"),p(""),y([]),b(""),KE(),t==null||t()},F=ts(r)>0,U=r||m.length>0||u!=="none"||w;return s.jsxs(XE,{variants:c4,initial:"hidden",animate:"visible",children:[s.jsxs(io,{children:[s.jsxs(oo,{children:[s.jsx(ao,{$color:"#10b981",children:s.jsx(r4,{})}),s.jsx(so,{children:"Salary Details"})]}),s.jsxs(ZE,{children:[s.jsxs(Fr,{children:[s.jsx(D0,{children:"Yearly CTC *"}),s.jsx(cu,{children:s.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:D=>j(D.target.value)})})]}),s.jsxs(Fr,{children:[s.jsx(D0,{children:"Basic %"}),s.jsx(uu,{children:s.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"50",value:o,onChange:D=>a(D.target.value),min:"0",max:"100"})})]})]})]}),s.jsxs(io,{children:[s.jsxs(oo,{children:[s.jsx(ao,{$color:"#3b82f6",children:s.jsx(i4,{})}),s.jsx(so,{children:"Provident Fund"})]}),s.jsxs(E0,{children:[s.jsx(lo,{$active:l==="percentage",onClick:()=>c("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),s.jsx(lo,{$active:l==="flat",onClick:()=>c("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),s.jsxs(io,{children:[s.jsxs(oo,{children:[s.jsx(ao,{$color:"#f59e0b",children:s.jsx(o4,{})}),s.jsx(so,{children:"Bonus (Optional)"})]}),s.jsxs(E0,{children:[s.jsx(lo,{$active:u==="none",onClick:()=>d("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),s.jsx(lo,{$active:u==="percentage",onClick:()=>d("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),s.jsx(lo,{$active:u==="amount",onClick:()=>d("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),s.jsx(Fe,{initial:!1,children:u!=="none"&&s.jsx(N.div,{initial:"hidden",animate:"visible",exit:"exit",variants:u4,style:{overflow:"hidden",marginTop:"12px"},children:s.jsxs(du,{children:[s.jsx(Fr,{style:{flex:1},children:u==="percentage"?s.jsx(uu,{children:s.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:f,onChange:D=>p(D.target.value)})}):s.jsx(cu,{children:s.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:f,onChange:D=>C(D.target.value)})})}),s.jsx(Fe,{children:f&&s.jsx(fu,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(pu,{})})})]})},"bonus-input")})]}),s.jsxs(io,{children:[s.jsxs(oo,{children:[s.jsx(ao,{$color:"#ec4899",children:s.jsx(a4,{})}),s.jsx(so,{children:"Monthly Deductions"})]}),s.jsxs(JE,{children:[s.jsx(Fe,{mode:"popLayout",children:m.map((D,W)=>s.jsxs(du,{variants:d4,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[s.jsx(Fr,{style:{flex:1},children:s.jsx(rr,{type:"text",placeholder:"Name (e.g., Cab)",value:D.name,onChange:V=>L(W,V.target.value)})}),s.jsx(Fr,{style:{flex:1},children:s.jsx(cu,{children:s.jsx(rr,{type:"text",inputMode:"numeric",placeholder:"Amount",value:D.amount,onChange:V=>k(W,V.target.value)})})}),s.jsx(fu,{onClick:()=>P(W),whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(pu,{})})]},W))}),s.jsxs(qE,{onClick:T,whileHover:{scale:1.01},whileTap:{scale:.99},children:[s.jsx(l4,{}),"Add Deduction"]})]})]}),s.jsxs(io,{children:[s.jsxs(oo,{children:[s.jsx(ao,{$color:"#8b5cf6",children:s.jsx(s4,{})}),s.jsx(so,{children:"Hike / Appraisal"})]}),s.jsxs(du,{children:[s.jsx(Fr,{style:{flex:1},children:s.jsx(uu,{children:s.jsx(rr,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:w,onChange:D=>b(D.target.value),min:"0",max:"200"})})}),s.jsx(Fe,{children:w&&s.jsx(fu,{onClick:()=>b(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:s.jsx(pu,{})})})]})]}),s.jsxs(e4,{children:[s.jsx(t4,{onClick:_,disabled:!F,whileHover:F?{scale:1.02}:{},whileTap:F?{scale:.98}:{},children:"Calculate Tax"}),s.jsx(Fe,{children:U&&s.jsx(n4,{onClick:R,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},p4=x(N.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ir=x(N.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,or=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,ar=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,sr=x.div`
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
`,lr=x.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,cr=x.div`
  padding: 16px;
`,co=x.div`
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
`,mu=x(N.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:e})=>e||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,gu=x.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,vu=x.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,Vr=x.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,h4=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Br=x.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,zr=x.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,Wr=x.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Ur=x.div`
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
`,J=x.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:t})=>e?"#10b981":t?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,rt=x.div`
  text-align: right;
  flex-shrink: 0;
`,it=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,m4=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,A0=x(N.div)`
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
`,g4=x(N.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: 2px;
  margin-top: 4px;
`,v4=x.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,y4=x(N.div)`
  height: 100%;
  background: ${({$color:e})=>e};
`,x4=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,w4=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,S4=x.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,b4=x.span`
  font-size: 12px;
  color: var(--text-secondary);
`,j4=x.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,uo=x.div`
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
`,Qt=x.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,fo=x.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,L0=x(N.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,_0=x.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,k4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),C4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),s.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),s.jsx("path",{d:"M12 17.5v-11"})]}),T4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),s.jsx("path",{d:"M3 9h18"}),s.jsx("path",{d:"M9 21V9"})]}),P4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),s.jsx("path",{d:"M12 8v13"}),s.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),s.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),I0=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),s.jsx("polyline",{points:"16 7 22 7 22 13"})]}),D4=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),E4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},ur={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},A4=({breakdown:e})=>{const[t,n]=S.useState("monthly"),r=t==="monthly"?1/12:1,i=p=>p===0?"#10b981":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",o=Math.max(...e.slabs.map(p=>p.taxInSlab),1),l=(()=>{const p=t==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:e.netSalaryYearly*p,color:"#10b981"},{label:"Tax",value:e.totalTax*p,color:"#4361A5"},{label:"PF",value:e.employeePF*p,color:"#3BB4B1"}];return e.totalAdditionalDeductions>0&&m.push({label:"Other",value:e.totalAdditionalDeductions*p,color:"#7BA7D9"}),m})(),c=l.reduce((p,m)=>p+m.value,0),u=[];e.surchargeApplicable&&u.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&u.push(`<strong>Section 87A rebate</strong> of ${H(e.rebate87A)} applied`),e.effectiveTaxRate>0&&u.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const d=!!e.postHike,f=e.bonus>0;return s.jsxs(p4,{variants:E4,initial:"hidden",animate:"visible",children:[d&&s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#3b82f6",children:s.jsx(I0,{})}),s.jsx(lr,{children:"Base Salary (CTC)"})]}),s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),s.jsx(cr,{children:s.jsxs(uo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current"}),s.jsx(Qt,{children:H(e.baseSalary)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike"}),s.jsx(Qt,{children:H(e.postHike.baseSalary)}),s.jsxs(fo,{children:["+",H(e.postHike.baseSalary-e.baseSalary)]})]})]})})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#10b981",children:s.jsx(k4,{})}),s.jsx(lr,{children:"In-Hand Salary"})]}),s.jsxs(co,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(vu,{children:[s.jsx(Vr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Vr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsx(cr,{children:d?s.jsxs(uo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current"}),s.jsx(Qt,{children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsxs(Kt,{children:["After ",e.hikePercentage,"% Hike"]}),s.jsx(Qt,{children:K(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),s.jsxs(fo,{children:["+",H(t==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(mu,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},t),s.jsxs(gu,{children:[t==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),f&&s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#f59e0b",children:s.jsx(P4,{})}),s.jsx(lr,{children:"Bonus"})]}),d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),s.jsxs(cr,{children:[d?s.jsxs(s.Fragment,{children:[s.jsxs(uo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current Gross"}),s.jsx(Qt,{children:H(e.bonus)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike Gross"}),s.jsx(Qt,{children:H(e.postHike.bonus)}),s.jsxs(fo,{children:["+",H(e.postHike.bonus-e.bonus)]})]})]}),s.jsx(sn,{}),s.jsxs(uo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current In-Hand"}),s.jsx(Qt,{children:K(e.bonusAfterTax)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike In-Hand"}),s.jsx(Qt,{children:K(e.postHike.bonusAfterTax)}),s.jsxs(fo,{children:["+",H(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(mu,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:H(e.bonus)}),s.jsx(gu,{children:"Gross Bonus (before tax)"}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsxs(Ee,{children:["Tax Deducted (",e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess)"]}),s.jsxs(J,{$negative:!0,children:["-",K(e.bonusTaxAmount)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"In-Hand Bonus"}),s.jsx(J,{$highlight:!0,children:K(e.bonusAfterTax)})]})]}),s.jsx(sn,{}),s.jsx(L0,{style:{borderLeftColor:"#f59e0b"},children:s.jsxs(_0,{children:["Bonus is taxed at your ",s.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]})]}),f&&s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#8b5cf6",children:s.jsx(I0,{})}),s.jsx(lr,{children:"Total Combined Income"})]}),s.jsxs(co,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsx(Yt,{children:"Yearly"})]})]}),s.jsxs(cr,{children:[d?s.jsxs(uo,{children:[s.jsxs(Gt,{children:[s.jsx(Kt,{children:"Current Total"}),s.jsx(Qt,{children:K(e.totalIncomeYearly)})]}),s.jsxs(Gt,{$highlight:!0,children:[s.jsx(Kt,{children:"After Hike Total"}),s.jsx(Qt,{children:K(e.postHike.totalIncomeYearly)}),s.jsxs(fo,{children:["+",H(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(mu,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:K(e.totalIncomeYearly)}),s.jsx(gu,{children:"Base salary + Bonus (after tax)"})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Base In-Hand (Yearly)"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:K(e.netSalaryYearly)}),s.jsxs(it,{$positive:!0,children:["→ ",K(e.postHike.netSalaryYearly)]})]}):s.jsx(J,{children:K(e.netSalaryYearly)})]}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Bonus In-Hand"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:K(e.bonusAfterTax)}),s.jsxs(it,{$positive:!0,children:["→ ",K(e.postHike.bonusAfterTax)]})]}):s.jsx(J,{children:K(e.bonusAfterTax)})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Total Combined"}),d?s.jsxs(rt,{children:[s.jsx(J,{$highlight:!0,children:K(e.totalIncomeYearly)}),s.jsxs(it,{$positive:!0,children:["→ ",K(e.postHike.totalIncomeYearly)]})]}):s.jsx(J,{$highlight:!0,children:K(e.totalIncomeYearly)})]})]})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#ec4899",children:s.jsx(T4,{})}),s.jsx(lr,{children:"Summary"})]}),s.jsxs(co,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(vu,{children:[s.jsx(Vr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Vr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsxs(cr,{children:[s.jsxs(h4,{children:[s.jsxs(Br,{children:[s.jsx(zr,{children:"Gross Salary"}),s.jsx(Wr,{children:H(e.grossSalary*r)}),d&&s.jsxs(Ur,{$positive:!0,children:["→ ",H(e.postHike.grossSalary*r)]})]}),s.jsxs(Br,{children:[s.jsx(zr,{children:"Total Tax"}),s.jsx(Wr,{children:K(e.totalTax*r)}),d&&s.jsxs(Ur,{children:["→ ",K(e.postHike.totalTax*r)]})]}),s.jsxs(Br,{children:[s.jsx(zr,{children:"Employee PF"}),s.jsx(Wr,{children:H(e.employeePF*r)}),d&&s.jsxs(Ur,{$positive:!0,children:["→ ",H(e.postHike.employeePF*r)]})]}),s.jsxs(Br,{children:[s.jsx(zr,{children:"Employer PF"}),s.jsx(Wr,{children:H(e.employerPF*r)}),d&&s.jsxs(Ur,{$positive:!0,children:["→ ",H(e.postHike.employerPF*r)]})]}),s.jsxs(Br,{children:[s.jsx(zr,{children:"Total PF"}),s.jsx(Wr,{children:H((e.employeePF+e.employerPF)*r)}),d&&s.jsxs(Ur,{$positive:!0,children:["→ ",H((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),s.jsxs(Br,{children:[s.jsx(zr,{children:"Eff. Tax Rate"}),s.jsxs(Wr,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),d&&s.jsxs(Ur,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),s.jsx(sn,{}),s.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",t==="monthly"?"Monthly":"Yearly",")"]}),s.jsx(v4,{children:l.map((p,m)=>s.jsx(y4,{$color:p.color,initial:{width:0},animate:{width:`${p.value/c*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),s.jsx(x4,{children:l.map((p,m)=>s.jsxs(w4,{children:[s.jsx(S4,{$color:p.color}),s.jsx(b4,{children:p.label}),s.jsx(j4,{children:H(p.value)})]},m))}),u.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(sn,{}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:u.map((p,m)=>s.jsx(L0,{children:s.jsx(_0,{dangerouslySetInnerHTML:{__html:p}})},m))})]})]})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#10b981",children:s.jsx(D4,{})}),s.jsx(lr,{children:"Breakdown"})]}),s.jsxs(co,{children:[d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),s.jsxs(vu,{children:[s.jsx(Vr,{$active:t==="monthly",onClick:()=>n("monthly"),children:"Monthly"}),s.jsx(Vr,{$active:t==="yearly",onClick:()=>n("yearly"),children:"Yearly"})]})]})]}),s.jsxs(cr,{children:[s.jsxs(De,{children:[s.jsx(Ee,{children:"Base Salary (CTC)"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:H(e.baseSalary*r)}),s.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.baseSalary*r)]})]}):s.jsx(J,{children:H(e.baseSalary*r)})]}),e.employerPF>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Employer PF"}),d?s.jsxs(rt,{children:[s.jsxs(J,{$negative:!0,children:["-",H(e.employerPF*r)]}),s.jsxs(it,{children:["→ -",H(e.postHike.employerPF*r)]})]}):s.jsxs(J,{$negative:!0,children:["-",H(e.employerPF*r)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Gross Salary"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:H(e.grossSalary*r)}),s.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.grossSalary*r)]})]}):s.jsx(J,{children:H(e.grossSalary*r)})]}),t==="yearly"&&s.jsxs(s.Fragment,{children:[s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Standard Deduction"}),s.jsxs(J,{$negative:!0,children:["-",H(e.standardDeduction)]})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Taxable Income"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:H(e.taxableIncome)}),s.jsxs(it,{$positive:!0,children:["→ ",H(e.postHike.taxableIncome)]})]}):s.jsx(J,{children:H(e.taxableIncome)})]})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Income Tax"}),d?s.jsxs(rt,{children:[s.jsxs(J,{$negative:!0,children:["-",K(e.totalTax*r)]}),s.jsxs(it,{children:["→ -",K(e.postHike.totalTax*r)]})]}):s.jsxs(J,{$negative:!0,children:["-",K(e.totalTax*r)]})]}),e.employeePF>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Less: Employee PF"}),d?s.jsxs(rt,{children:[s.jsxs(J,{$negative:!0,children:["-",H(e.employeePF*r)]}),s.jsxs(it,{children:["→ -",H(e.postHike.employeePF*r)]})]}):s.jsxs(J,{$negative:!0,children:["-",H(e.employeePF*r)]})]}),e.additionalDeductions.map((p,m)=>s.jsxs(De,{children:[s.jsxs(Ee,{children:["Less: ",p.name]}),s.jsxs(J,{$negative:!0,children:["-",H(p.amount*r)]})]},m)),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsxs(Ee,{$bold:!0,children:["Net In-Hand (",t==="monthly"?"Monthly":"Yearly",")"]}),d?s.jsxs(rt,{children:[s.jsx(J,{$highlight:!0,children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)}),s.jsxs(it,{$positive:!0,children:["→ ",K(t==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)]})]}):s.jsx(J,{$highlight:!0,children:K(t==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]})]})]}),s.jsxs(ir,{variants:ur,children:[s.jsxs(or,{children:[s.jsxs(ar,{children:[s.jsx(sr,{$color:"#3b82f6",children:s.jsx(C4,{})}),s.jsx(lr,{children:"Tax Slabs"})]}),s.jsxs(co,{children:[s.jsx(Yt,{children:QE.financialYear}),d&&s.jsxs(Yt,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]})]}),s.jsxs(cr,{children:[s.jsxs(m4,{children:[s.jsxs(A0,{$header:!0,children:[s.jsx(kn,{children:"Slab"}),s.jsx(kn,{$align:"center",children:"Rate"}),s.jsx(kn,{$align:"right",children:"Amount"}),s.jsx(kn,{$align:"right",children:"Tax"})]}),s.jsx(Fe,{children:e.slabs.map((p,m)=>s.jsxs(A0,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[s.jsxs(kn,{children:[T0(p.from)," - ",T0(p.to),p.taxableInSlab>0&&s.jsx(g4,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/o*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),s.jsxs(kn,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),s.jsx(kn,{$align:"right",$muted:p.taxableInSlab===0,children:p.taxableInSlab>0?H(p.taxableInSlab):"-"}),s.jsx(kn,{$align:"right",$muted:p.taxInSlab===0,children:p.taxInSlab>0?H(p.taxInSlab):"-"})]},m))})]}),s.jsx(sn,{}),s.jsxs(De,{children:[s.jsx(Ee,{children:"Tax Before Surcharge"}),d?s.jsxs(rt,{children:[s.jsx(J,{children:K(e.taxBeforeSurcharge)}),s.jsxs(it,{children:["→ ",K(e.postHike.taxBeforeSurcharge)]})]}):s.jsx(J,{children:K(e.taxBeforeSurcharge)})]}),e.rebate87A>0&&s.jsxs(De,{children:[s.jsx(Ee,{children:"Section 87A Rebate"}),s.jsxs(J,{$negative:!0,children:["-",H(e.rebate87A)]})]}),e.surchargeApplicable&&s.jsxs(De,{children:[s.jsxs(Ee,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&s.jsx(Yt,{$color:"#f59e0b",children:"Marginal Relief"})]}),d&&e.postHike.surchargeApplicable?s.jsxs(rt,{children:[s.jsx(J,{children:K(e.surchargeAmount)}),s.jsxs(it,{children:["→ ",K(e.postHike.surchargeAmount)]})]}):s.jsx(J,{children:K(e.surchargeAmount)})]}),s.jsxs(De,{children:[s.jsxs(Ee,{children:["Cess (",e.cessRate,"%)"]}),d?s.jsxs(rt,{children:[s.jsx(J,{children:K(e.cess)}),s.jsxs(it,{children:["→ ",K(e.postHike.cess)]})]}):s.jsx(J,{children:K(e.cess)})]}),s.jsxs(De,{children:[s.jsx(Ee,{$bold:!0,children:"Total Tax"}),d?s.jsxs(rt,{children:[s.jsx(J,{$highlight:!0,children:K(e.totalTax)}),s.jsxs(it,{children:["→ ",K(e.postHike.totalTax)]})]}):s.jsx(J,{$highlight:!0,children:K(e.totalTax)})]})]})]})]})},L4=x(N.div)`
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
`,_4=x.div`
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
`,I4=x(N.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,M4=x(N.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,O4={type:"spring",stiffness:300,damping:30,mass:.8},R4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},M0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:O4}},N4=()=>{const[e,t]=S.useState(null),[n,r]=S.useState(!1);S.useEffect(()=>{const a=Jw();a&&a.baseSalary>0&&r(!0)},[]);const i=S.useCallback(a=>{const l=YE(a);t(l),window.innerWidth<1024&&setTimeout(()=>{var c;(c=document.getElementById("results"))==null||c.scrollIntoView({behavior:"smooth"})},100)},[]),o=S.useCallback(()=>{t(null)},[]);return s.jsx(L4,{variants:R4,initial:"hidden",animate:"visible",children:s.jsx(Zw,{$maxWidth:"wide",children:s.jsxs(_4,{children:[s.jsx(I4,{variants:M0,children:s.jsx(f4,{onCalculate:i,onReset:o,autoCalculate:n})}),s.jsx(M4,{id:"results",variants:M0,children:e&&s.jsx(A4,{breakdown:e},"results")})]})})})},Cr=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"}],qw="expense-manager-transactions",e2="expense-manager-initial-balances",t2="expense-manager-initial-cc-bills",n2="expense-manager-cc-limits";function rh(e,t){return e===void 0?{amount:0,type:"billed",setupDate:t}:typeof e=="number"?{amount:e,type:"billed",setupDate:t}:e}const r2={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function yu(e){localStorage.setItem(qw,JSON.stringify(e))}function $4(){const e=localStorage.getItem(qw);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function O0(e){localStorage.setItem(e2,JSON.stringify(e))}function F4(){const e=localStorage.getItem(e2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function R0(e){localStorage.setItem(t2,JSON.stringify(e))}function V4(){const e=localStorage.getItem(t2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function N0(e){localStorage.setItem(n2,JSON.stringify(e))}function B4(){const e=localStorage.getItem(n2);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function Bt(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function i2(e){return new Date(e+"T00:00:00")}function z4(e){return e===Bt(new Date)}function W4(e,t){if(!e.statementDate)return"";const n=i2(t),r=n.getFullYear(),i=n.getMonth(),o=n.getDate();let a=r,l=i;o<e.statementDate&&(l-=1,l<0&&(l=11,a-=1));const c=new Date(a,l,e.statementDate);return Bt(c)}function $0(e,t){const n=r2[e];if(!n)return"";const r=i2(t),i=r.getFullYear(),o=r.getMonth(),a=r.getDate();let l=i,c=o;a<n&&(c-=1,c<0&&(c=11,l-=1));const u=new Date(l,c,n);return Bt(u)}function U4(e,t,n,r){const i=$0(e.id,n),o=t.filter(h=>h.date<=n&&h.accountId===e.id),a=o.filter(h=>h.type==="credit_card_spend"&&h.date<i).reduce((h,v)=>h+v.amount,0),l=o.filter(h=>h.type==="credit_card_spend"&&h.date>=i).reduce((h,v)=>h+v.amount,0),c=o.filter(h=>h.type==="cc_payment").reduce((h,v)=>h+v.amount,0),u=rh(r[e.id],n);let d=0,f=0;if(u.amount>0){const h=$0(e.id,u.setupDate),v=i===h,j=i>h&&new Date(i).getTime()-new Date(h).getTime()<45*24*60*60*1e3;u.type==="unbilled"?v?f=u.amount:j&&(d=u.amount):(v||j)&&(d=u.amount)}const p=l+f,m=a+d,y=p;let w=m,b=y,g=c;if(g>0){const h=Math.min(g,w);w-=h,g-=h}return g>0&&(b=Math.max(0,b-g)),{account:e,billDue:w,unbilled:b,totalOutstanding:w+b,cycleStart:i,cycleSpending:p}}function H4(e,t,n,r,i={}){const o=t.filter(l=>l.date<=n&&(l.accountId===e.id||l.linkedAccountId===e.id));let a=0;if(e.type==="bank"){a=r[e.id]||0;for(const l of o)l.accountId===e.id&&(l.type==="bank_credit"?a+=l.amount:l.type==="bank_debit"&&(a-=l.amount)),l.linkedAccountId===e.id&&l.type==="cc_payment"&&(a-=l.amount);return{account:e,balance:a}}else{a=-rh(i[e.id],n).amount;for(const p of o)p.accountId===e.id&&(p.type==="credit_card_spend"?a-=p.amount:p.type==="cc_payment"&&(a+=p.amount));const u=W4(e,n),f=o.filter(p=>p.date>u&&p.accountId===e.id&&p.type==="credit_card_spend").reduce((p,m)=>p+m.amount,0);return{account:e,balance:a,pendingBill:f,totalOutstanding:Math.abs(Math.min(0,a))}}}function Y4(e,t,n,r={}){return Cr.map(i=>H4(i,e,t,n,r))}function G4(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function K4(e,t,n,r,i,o){return{id:G4(),date:i,type:e,accountId:t,amount:n,description:r,linkedAccountId:o,createdAt:new Date().toISOString()}}function ft(e){const n=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${n}`:n}function Q4(e){return Cr.find(t=>t.id===e)}function o2(){return Cr.filter(e=>e.type==="bank")}function ih(){return Cr.filter(e=>e.type==="credit_card")}function X4(e,t,n,r={}){const i={version:"1.1",exportedAt:new Date().toISOString(),transactions:e,initialBalances:t,initialCCBills:n,ccLimits:r};return JSON.stringify(i,null,2)}function Z4(e,t,n,r={}){const i=X4(e,t,n,r),o=new Blob([i],{type:"application/json"}),a=URL.createObjectURL(o),l=document.createElement("a"),c=new Date().toISOString().split("T")[0];l.href=a,l.download=`expense-backup-${c}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}function J4(e){if(!e||typeof e!="object")return!1;const t=e;if(!Array.isArray(t.transactions)||typeof t.initialBalances!="object"||t.initialBalances===null||typeof t.initialCCBills!="object"||t.initialCCBills===null||t.ccLimits!==void 0&&(typeof t.ccLimits!="object"||t.ccLimits===null))return!1;for(const n of t.transactions){if(!n||typeof n!="object")return!1;const r=n;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function q4(e){try{const t=JSON.parse(e);return J4(t)?t:null}catch{return null}}function a2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=a2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ql(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=a2(e))&&(r&&(r+=" "),r+=t);return r}const eA=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),o=Object.getOwnPropertyDescriptor(t,n);!tA(i,o)&&r||Object.defineProperty(e,n,o)},tA=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},nA=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},rA=(e,t)=>`/* Wrapped ${e}*/
${t}`,iA=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),oA=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),aA=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=rA.bind(null,r,t.toString());Object.defineProperty(i,"name",oA);const{writable:o,enumerable:a,configurable:l}=iA;Object.defineProperty(e,"toString",{value:i,writable:o,enumerable:a,configurable:l})};function sA(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))eA(e,t,i,n);return nA(e,t),aA(e,t,r),e}const ns=2147483647,lA=new WeakMap,xu=new WeakMap,cA=new WeakMap;function uA(e,t){const n=e.get(t);if(n){if(n.maxAge<=Date.now()){e.delete(t);return}return n}}function s2(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>ns)throw new TypeError(`The \`maxAge\` option cannot exceed ${ns}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...o){var d;const a=t?t(o):o[0],l=uA(n,a);if(l)return l.data;const c=e.apply(this,o),u=typeof r=="function"?r(...o):r;if(u!==void 0&&u!==Number.POSITIVE_INFINITY){if(!Number.isFinite(u))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(u<=0)return c;if(u>ns)throw new TypeError(`The \`maxAge\` function result cannot exceed ${ns}.`)}if(n.set(a,{data:c,maxAge:u===void 0||u===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+u}),u!==void 0&&u!==Number.POSITIVE_INFINITY){const f=setTimeout(()=>{var m;n.delete(a),(m=xu.get(i))==null||m.delete(f)},u);(d=f.unref)==null||d.call(f);const p=xu.get(i)??new Set;p.add(f),xu.set(i,p)}return c};return sA(i,e,{ignoreNonConfigurable:!0}),lA.set(i,n),cA.set(i,t??(o=>o[0])),i}function dA(e){return typeof e=="string"}function fA(e,t,n){return n.indexOf(e)===t}function pA(e){return e.toLowerCase()===e}function F0(e){return e.indexOf(",")===-1?e:e.split(",")}function Zd(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Zd(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Zd(n)}if(e.indexOf("-")===-1||!pA(e))return e;var i=e.split("-"),o=i[0],a=i[1],l=a===void 0?"":a;return"".concat(o,"-").concat(l.toUpperCase())}function hA(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,i=t.fallbackLocale,o=i===void 0?"en-US":i,a=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],c=[],u=0,d=l;u<d.length;u++){var f=d[u];c=c.concat(F0(f))}var p=navigator.language,m=p&&F0(p);a=a.concat(c,m)}return r&&a.push(o),a.filter(dA).map(Zd).filter(fA)}var mA=s2(hA,{cacheKey:JSON.stringify});function gA(e){return mA(e)[0]||null}var l2=s2(gA,{cacheKey:JSON.stringify});function bn(e,t,n){return function(i,o=n){const a=e(i)+o;return t(a)}}function ka(e){return function(n){return new Date(e(n).getTime()-1)}}function Ca(e,t){return function(r){return[e(r),t(r)]}}function de(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const t=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(t))return t;throw new Error(`Failed to get year from date: ${e}.`)}function er(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function ec(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function Yi(e){const t=de(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const vA=bn(de,Yi,-100),c2=bn(de,Yi,100),oh=ka(c2),yA=bn(de,oh,-100),u2=Ca(Yi,oh);function tr(e){const t=de(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}const d2=bn(de,tr,-10),ah=bn(de,tr,10),tc=ka(ah),f2=bn(de,tc,-10),p2=Ca(tr,tc);function Gi(e){const t=de(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}const h2=bn(de,Gi,-1),sh=bn(de,Gi,1),nc=ka(sh),m2=bn(de,nc,-1),xA=Ca(Gi,nc);function lh(e,t){return function(r,i=t){const o=de(r),a=er(r)+i,l=new Date;return l.setFullYear(o,a,1),l.setHours(0,0,0,0),e(l)}}function Or(e){const t=de(e),n=er(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}const g2=lh(Or,-1),ch=lh(Or,1),Ta=ka(ch),v2=lh(Ta,-1),wA=Ca(Or,Ta);function SA(e,t){return function(r,i=t){const o=de(r),a=er(r),l=ec(r)+i,c=new Date;return c.setFullYear(o,a,l),c.setHours(0,0,0,0),e(c)}}function Pa(e){const t=de(e),n=er(e),r=ec(e),i=new Date;return i.setFullYear(t,n,r),i.setHours(0,0,0,0),i}const bA=SA(Pa,1),uh=ka(bA),jA=Ca(Pa,uh);function y2(e){return ec(Ta(e))}var Ve={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},kA={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},dh=[0,1,2,3,4,5,6],wu=new Map;function CA(e){return function(n,r){var i=n||l2();wu.has(i)||wu.set(i,new Map);var o=wu.get(i);return o.has(e)||o.set(e,new Intl.DateTimeFormat(i||void 0,e).format),o.get(e)(r)}}function TA(e){var t=new Date(e);return new Date(t.setHours(12))}function Rr(e){return function(t,n){return CA(e)(t,TA(n))}}var PA={day:"numeric"},DA={day:"numeric",month:"long",year:"numeric"},EA={month:"long"},AA={month:"long",year:"numeric"},LA={weekday:"short"},_A={weekday:"long"},IA={year:"numeric"},MA=Rr(PA),OA=Rr(DA),RA=Rr(EA),x2=Rr(AA),NA=Rr(LA),$A=Rr(_A),rc=Rr(IA),FA=dh[0],VA=dh[5],V0=dh[6];function fa(e,t){t===void 0&&(t=Ve.ISO_8601);var n=e.getDay();switch(t){case Ve.ISO_8601:return(n+6)%7;case Ve.ISLAMIC:return(n+1)%7;case Ve.HEBREW:case Ve.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function BA(e){var t=Yi(e);return de(t)}function zA(e){var t=tr(e);return de(t)}function Jd(e,t){t===void 0&&(t=Ve.ISO_8601);var n=de(e),r=er(e),i=e.getDate()-fa(e,t);return new Date(n,r,i)}function WA(e,t){t===void 0&&(t=Ve.ISO_8601);var n=t===Ve.GREGORY?Ve.GREGORY:Ve.ISO_8601,r=Jd(e,t),i=de(e)+1,o,a;do o=new Date(i,0,n===Ve.ISO_8601?4:1),a=Jd(o,t),i-=1;while(e<a);return Math.round((r.getTime()-a.getTime())/(864e5*7))+1}function Tr(e,t){switch(e){case"century":return Yi(t);case"decade":return tr(t);case"year":return Gi(t);case"month":return Or(t);case"day":return Pa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function UA(e,t){switch(e){case"century":return vA(t);case"decade":return d2(t);case"year":return h2(t);case"month":return g2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function w2(e,t){switch(e){case"century":return c2(t);case"decade":return ah(t);case"year":return sh(t);case"month":return ch(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function HA(e,t){switch(e){case"decade":return d2(t,-100);case"year":return h2(t,-10);case"month":return g2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function YA(e,t){switch(e){case"decade":return ah(t,100);case"year":return sh(t,10);case"month":return ch(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function S2(e,t){switch(e){case"century":return oh(t);case"decade":return tc(t);case"year":return nc(t);case"month":return Ta(t);case"day":return uh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function GA(e,t){switch(e){case"century":return yA(t);case"decade":return f2(t);case"year":return m2(t);case"month":return v2(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function KA(e,t){switch(e){case"decade":return f2(t,-100);case"year":return m2(t,-10);case"month":return v2(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function B0(e,t){switch(e){case"century":return u2(t);case"decade":return p2(t);case"year":return xA(t);case"month":return wA(t);case"day":return jA(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function QA(e,t,n){var r=[t,n].sort(function(i,o){return i.getTime()-o.getTime()});return[Tr(e,r[0]),S2(e,r[1])]}function b2(e,t,n){return n.map(function(r){return(t||rc)(e,r)}).join(" – ")}function XA(e,t,n){return b2(e,t,u2(n))}function j2(e,t,n){return b2(e,t,p2(n))}function ZA(e){return e.getDay()===new Date().getDay()}function k2(e,t){t===void 0&&(t=Ve.ISO_8601);var n=e.getDay();switch(t){case Ve.ISLAMIC:case Ve.HEBREW:return n===VA||n===V0;case Ve.ISO_8601:case Ve.GREGORY:return n===V0||n===FA;default:throw new Error("Unsupported calendar type.")}}var Xt="react-calendar__navigation";function JA(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,i=r===void 0?x2:r,o=e.formatYear,a=o===void 0?rc:o,l=e.locale,c=e.maxDate,u=e.minDate,d=e.navigationAriaLabel,f=d===void 0?"":d,p=e.navigationAriaLive,m=e.navigationLabel,y=e.next2AriaLabel,w=y===void 0?"":y,b=e.next2Label,g=b===void 0?"»":b,h=e.nextAriaLabel,v=h===void 0?"":h,j=e.nextLabel,C=j===void 0?"›":j,k=e.prev2AriaLabel,T=k===void 0?"":k,P=e.prev2Label,L=P===void 0?"«":P,_=e.prevAriaLabel,R=_===void 0?"":_,I=e.prevLabel,F=I===void 0?"‹":I,U=e.setActiveStartDate,D=e.showDoubleView,W=e.view,V=e.views,E=V.indexOf(W)>0,M=W!=="century",O=UA(W,t),B=M?HA(W,t):void 0,G=w2(W,t),se=M?YA(W,t):void 0,le=function(){if(O.getFullYear()<0)return!0;var Pe=GA(W,t);return u&&u>=Pe}(),Q=M&&function(){if(B.getFullYear()<0)return!0;var Pe=KA(W,t);return u&&u>=Pe}(),ce=c&&c<G,Oe=M&&c&&c<se;function Xe(){U(O,"prev")}function Te(){U(B,"prev2")}function Wt(){U(G,"next")}function wt(){U(se,"next2")}function Re(Pe){var Ki=function(){switch(W){case"century":return XA(l,a,Pe);case"decade":return j2(l,a,Pe);case"year":return a(l,Pe);case"month":return i(l,Pe);default:throw new Error("Invalid view: ".concat(W,"."))}}();return m?m({date:Pe,label:Ki,locale:l||l2()||void 0,view:W}):Ki}function ac(){var Pe="".concat(Xt,"__label");return s.jsxs("button",{"aria-label":f,"aria-live":p,className:Pe,disabled:!E,onClick:n,style:{flexGrow:1},type:"button",children:[s.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--from"),children:Re(t)}),D?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"".concat(Pe,"__divider"),children:" – "}),s.jsx("span",{className:"".concat(Pe,"__labelText ").concat(Pe,"__labelText--to"),children:Re(G)})]}):null]})}return s.jsxs("div",{className:Xt,children:[L!==null&&M?s.jsx("button",{"aria-label":T,className:"".concat(Xt,"__arrow ").concat(Xt,"__prev2-button"),disabled:Q,onClick:Te,type:"button",children:L}):null,F!==null&&s.jsx("button",{"aria-label":R,className:"".concat(Xt,"__arrow ").concat(Xt,"__prev-button"),disabled:le,onClick:Xe,type:"button",children:F}),ac(),C!==null&&s.jsx("button",{"aria-label":v,className:"".concat(Xt,"__arrow ").concat(Xt,"__next-button"),disabled:ce,onClick:Wt,type:"button",children:C}),g!==null&&M?s.jsx("button",{"aria-label":w,className:"".concat(Xt,"__arrow ").concat(Xt,"__next2-button"),disabled:Oe,onClick:wt,type:"button",children:g}):null]})}var di=function(){return di=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},di.apply(this,arguments)},qA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function z0(e){return"".concat(e,"%")}function fh(e){var t=e.children,n=e.className,r=e.count,i=e.direction,o=e.offset,a=e.style,l=e.wrap,c=qA(e,["children","className","count","direction","offset","style","wrap"]);return s.jsx("div",di({className:n,style:di({display:"flex",flexDirection:i,flexWrap:l?"wrap":"nowrap"},a)},c,{children:S.Children.map(t,function(u,d){var f=o&&d===0?z0(100*o/r):null;return S.cloneElement(u,di(di({},u.props),{style:{flexBasis:z0(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function eL(e,t,n){return t&&t>e?t:n&&n<e?n:e}function pa(e,t){return t[0]<=e&&t[1]>=e}function tL(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function C2(e,t){return pa(e[0],t)||pa(e[1],t)}function W0(e,t,n){var r=C2(t,e),i=[];if(r){i.push(n);var o=pa(e[0],t),a=pa(e[1],t);o&&i.push("".concat(n,"Start")),a&&i.push("".concat(n,"End")),o&&a&&i.push("".concat(n,"BothEnds"))}return i}function nL(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function rL(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,i="react-calendar__tile",o=[i];if(!n)return o;var a=new Date,l=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return B0(m,n)}();if(pa(a,l)&&o.push("".concat(i,"--now")),!t||!nL(t))return o;var c=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return B0(m,t)}();tL(c,l)?o.push("".concat(i,"--active")):C2(c,l)&&o.push("".concat(i,"--hasActive"));var u=W0(c,l,"".concat(i,"--range"));o.push.apply(o,u);var d=Array.isArray(t)?t:[t];if(r&&d.length===1){var f=r>c[0]?[c[0],r]:[r,c[0]],p=W0(f,l,"".concat(i,"--hover"));o.push.apply(o,p)}return o}function ic(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,i=e.dateTransform,o=e.dateType,a=e.end,l=e.hover,c=e.offset,u=e.renderTile,d=e.start,f=e.step,p=f===void 0?1:f,m=e.value,y=e.valueType,w=[],b=d;b<=a;b+=p){var g=i(b);w.push(u({classes:rL({date:g,dateType:o,hover:l,value:m,valueType:y}),date:g}))}return s.jsx(fh,{className:t,count:r,offset:c,wrap:!0,children:w})}function oc(e){var t=e.activeStartDate,n=e.children,r=e.classes,i=e.date,o=e.formatAbbr,a=e.locale,l=e.maxDate,c=e.maxDateTransform,u=e.minDate,d=e.minDateTransform,f=e.onClick,p=e.onMouseOver,m=e.style,y=e.tileClassName,w=e.tileContent,b=e.tileDisabled,g=e.view,h=S.useMemo(function(){var j={activeStartDate:t,date:i,view:g};return typeof y=="function"?y(j):y},[t,i,y,g]),v=S.useMemo(function(){var j={activeStartDate:t,date:i,view:g};return typeof w=="function"?w(j):w},[t,i,w,g]);return s.jsxs("button",{className:ql(r,h),disabled:u&&d(u)>i||l&&c(l)<i||(b==null?void 0:b({activeStartDate:t,date:i,view:g})),onClick:f?function(j){return f(i,j)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:m,type:"button",children:[o?s.jsx("abbr",{"aria-label":o(a,i),children:n}):n,v]})}var qd=function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)},iL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},U0="react-calendar__century-view__decades__decade";function oL(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,i=e.formatYear,o=i===void 0?rc:i,a=iL(e,["classes","currentCentury","formatYear"]),l=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(U0),Yi(l).getFullYear()!==r&&u.push("".concat(U0,"--neighboringCentury")),s.jsx(oc,qd({},a,{classes:u,maxDateTransform:tc,minDateTransform:tr,view:"century",children:j2(c,o,l)}))}var ef=function(){return ef=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ef.apply(this,arguments)},H0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function aL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,i=e.value,o=e.valueType,a=H0(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=BA(t),c=l+(r?119:99);return s.jsx(ic,{className:"react-calendar__century-view__decades",dateTransform:tr,dateType:"decade",end:c,hover:n,renderTile:function(u){var d=u.date,f=H0(u,["date"]);return s.jsx(oL,ef({},a,f,{activeStartDate:t,currentCentury:l,date:d}),d.getTime())},start:l,step:10,value:i,valueType:o})}var tf=function(){return tf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},tf.apply(this,arguments)};function sL(e){function t(){return s.jsx(aL,tf({},e))}return s.jsx("div",{className:"react-calendar__century-view",children:t()})}var nf=function(){return nf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nf.apply(this,arguments)},lL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Y0="react-calendar__decade-view__years__year";function cL(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,i=e.formatYear,o=i===void 0?rc:i,a=lL(e,["classes","currentDecade","formatYear"]),l=a.date,c=a.locale,u=[];return n&&u.push.apply(u,n),u.push(Y0),tr(l).getFullYear()!==r&&u.push("".concat(Y0,"--neighboringDecade")),s.jsx(oc,nf({},a,{classes:u,maxDateTransform:nc,minDateTransform:Gi,view:"decade",children:o(c,l)}))}var rf=function(){return rf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rf.apply(this,arguments)},G0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function uL(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,i=e.value,o=e.valueType,a=G0(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=zA(t),c=l+(r?11:9);return s.jsx(ic,{className:"react-calendar__decade-view__years",dateTransform:Gi,dateType:"year",end:c,hover:n,renderTile:function(u){var d=u.date,f=G0(u,["date"]);return s.jsx(cL,rf({},a,f,{activeStartDate:t,currentDecade:l,date:d}),d.getTime())},start:l,value:i,valueType:o})}var of=function(){return of=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},of.apply(this,arguments)};function dL(e){function t(){return s.jsx(uL,of({},e))}return s.jsx("div",{className:"react-calendar__decade-view",children:t()})}var af=function(){return af=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},af.apply(this,arguments)},fL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},K0=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},pL="react-calendar__year-view__months__month";function hL(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,i=r===void 0?RA:r,o=e.formatMonthYear,a=o===void 0?x2:o,l=fL(e,["classes","formatMonth","formatMonthYear"]),c=l.date,u=l.locale;return s.jsx(oc,af({},l,{classes:K0(K0([],n,!0),[pL],!1),formatAbbr:a,maxDateTransform:Ta,minDateTransform:Or,view:"year",children:i(u,c)}))}var sf=function(){return sf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sf.apply(this,arguments)},Q0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function mL(e){var t=e.activeStartDate,n=e.hover,r=e.value,i=e.valueType,o=Q0(e,["activeStartDate","hover","value","valueType"]),a=0,l=11,c=de(t);return s.jsx(ic,{className:"react-calendar__year-view__months",dateTransform:function(u){var d=new Date;return d.setFullYear(c,u,1),Or(d)},dateType:"month",end:l,hover:n,renderTile:function(u){var d=u.date,f=Q0(u,["date"]);return s.jsx(hL,sf({},o,f,{activeStartDate:t,date:d}),d.getTime())},start:a,value:r,valueType:i})}var lf=function(){return lf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lf.apply(this,arguments)};function gL(e){function t(){return s.jsx(mL,lf({},e))}return s.jsx("div",{className:"react-calendar__year-view",children:t()})}var cf=function(){return cf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cf.apply(this,arguments)},vL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Su="react-calendar__month-view__days__day";function yL(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,i=e.currentMonthIndex,o=e.formatDay,a=o===void 0?MA:o,l=e.formatLongDate,c=l===void 0?OA:l,u=vL(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),d=u.date,f=u.locale,p=[];return r&&p.push.apply(p,r),p.push(Su),k2(d,t)&&p.push("".concat(Su,"--weekend")),d.getMonth()!==i&&p.push("".concat(Su,"--neighboringMonth")),s.jsx(oc,cf({},u,{classes:p,formatAbbr:c,maxDateTransform:uh,minDateTransform:Pa,view:"month",children:a(f,d)}))}var uf=function(){return uf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uf.apply(this,arguments)},X0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function xL(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,a=e.value,l=e.valueType,c=X0(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=de(t),d=er(t),f=i||o,p=fa(t,n),m=f?0:p,y=(f?-p:0)+1,w=function(){if(i)return y+6*7-1;var b=y2(t);if(o){var g=new Date;g.setFullYear(u,d,b),g.setHours(0,0,0,0);var h=7-fa(g,n)-1;return b+h}return b}();return s.jsx(ic,{className:"react-calendar__month-view__days",count:7,dateTransform:function(b){var g=new Date;return g.setFullYear(u,d,b),Pa(g)},dateType:"day",hover:r,end:w,renderTile:function(b){var g=b.date,h=X0(b,["date"]);return s.jsx(yL,uf({},c,h,{activeStartDate:t,calendarType:n,currentMonthIndex:d,date:g}),g.getTime())},offset:m,start:y,value:a,valueType:l})}var T2="react-calendar__month-view__weekdays",bu="".concat(T2,"__weekday");function wL(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?NA:n,i=e.formatWeekday,o=i===void 0?$A:i,a=e.locale,l=e.onMouseLeave,c=new Date,u=Or(c),d=de(u),f=er(u),p=[],m=1;m<=7;m+=1){var y=new Date(d,f,m-fa(u,t)),w=o(a,y);p.push(s.jsx("div",{className:ql(bu,ZA(y)&&"".concat(bu,"--current"),k2(y,t)&&"".concat(bu,"--weekend")),children:s.jsx("abbr",{"aria-label":w,title:w,children:r(a,y).replace(".","")})},m))}return s.jsx(fh,{className:T2,count:7,onFocus:l,onMouseOver:l,children:p})}var Sl=function(){return Sl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sl.apply(this,arguments)},Z0=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},J0="react-calendar__tile";function SL(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=s.jsx("span",{children:n});if(t){var i=e.date,o=e.onClickWeekNumber,a=e.weekNumber,l=Z0(e,["date","onClickWeekNumber","weekNumber"]);return s.jsx("button",Sl({},l,{className:J0,onClick:function(c){return o(a,i,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var l=Z0(e,["date","onClickWeekNumber","weekNumber"]);return s.jsx("div",Sl({},l,{className:J0,children:r}))}}function bL(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,o=e.showFixedNumberOfWeeks,a=function(){if(o)return 6;var u=y2(t),d=fa(t,n),f=u-(7-d);return 1+Math.ceil(f/7)}(),l=function(){for(var u=de(t),d=er(t),f=ec(t),p=[],m=0;m<a;m+=1)p.push(Jd(new Date(u,d,f+m*7),n));return p}(),c=l.map(function(u){return WA(u,n)});return s.jsx(fh,{className:"react-calendar__month-view__weekNumbers",count:a,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(u,d){var f=l[d];if(!f)throw new Error("date is not defined");return s.jsx(SL,{date:f,onClickWeekNumber:r,weekNumber:u},u)})})}var df=function(){return df=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},df.apply(this,arguments)},jL=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function kL(e){if(e)for(var t=0,n=Object.entries(kA);t<n.length;t++){var r=n[t],i=r[0],o=r[1];if(o.includes(e))return i}return Ve.ISO_8601}function CL(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,o=e.calendarType,a=o===void 0?kL(n):o,l=e.formatShortWeekday,c=e.formatWeekday,u=e.onClickWeekNumber,d=e.showWeekNumbers,f=jL(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return s.jsx(wL,{calendarType:a,formatShortWeekday:l,formatWeekday:c,locale:n,onMouseLeave:r})}function m(){return d?s.jsx(bL,{activeStartDate:t,calendarType:a,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function y(){return s.jsx(xL,df({calendarType:a},f))}var w="react-calendar__month-view";return s.jsx("div",{className:ql(w,d?"".concat(w,"--weekNumbers"):""),children:s.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),s.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),y()]})]})})}var fi=function(){return fi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fi.apply(this,arguments)},rs="react-calendar",Rs=["century","decade","year","month"],TL=["decade","year","month","day"],ph=new Date;ph.setFullYear(1,0,1);ph.setHours(0,0,0,0);var PL=new Date(864e13);function Co(e){return e instanceof Date?e:new Date(e)}function P2(e,t){return Rs.slice(Rs.indexOf(e),Rs.indexOf(t)+1)}function DL(e,t,n){var r=P2(t,n);return r.indexOf(e)!==-1}function hh(e,t,n){return e&&DL(e,t,n)?e:n}function D2(e){var t=Rs.indexOf(e);return TL[t]}function EL(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=Co(n);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function E2(e,t){var n=e.value,r=e.minDate,i=e.maxDate,o=e.maxDetail,a=EL(n,t);if(!a)return null;var l=D2(o),c=function(){switch(t){case 0:return Tr(l,a);case 1:return S2(l,a);default:throw new Error("Invalid index value: ".concat(t))}}();return eL(c,r,i)}var mh=function(e){return E2(e,0)},A2=function(e){return E2(e,1)},AL=function(e){return[mh,A2].map(function(t){return t(e)})};function L2(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,i=e.minDetail,o=e.value,a=e.view,l=hh(a,i,n),c=mh({value:o,minDate:r,maxDate:t,maxDetail:n})||new Date;return Tr(l,c)}function LL(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,o=e.maxDate,a=e.maxDetail,l=e.minDate,c=e.minDetail,u=e.value,d=e.view,f=hh(d,c,a),p=t||n;return p?Tr(f,p):L2({maxDate:o,maxDetail:a,minDate:l,minDetail:c,value:u||r,view:d||i})}function ju(e){return e&&(!Array.isArray(e)||e.length===1)}function is(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var _L=S.forwardRef(function(t,n){var r=t.activeStartDate,i=t.allowPartialRange,o=t.calendarType,a=t.className,l=t.defaultActiveStartDate,c=t.defaultValue,u=t.defaultView,d=t.formatDay,f=t.formatLongDate,p=t.formatMonth,m=t.formatMonthYear,y=t.formatShortWeekday,w=t.formatWeekday,b=t.formatYear,g=t.goToRangeStartOnSelect,h=g===void 0?!0:g,v=t.inputRef,j=t.locale,C=t.maxDate,k=C===void 0?PL:C,T=t.maxDetail,P=T===void 0?"month":T,L=t.minDate,_=L===void 0?ph:L,R=t.minDetail,I=R===void 0?"century":R,F=t.navigationAriaLabel,U=t.navigationAriaLive,D=t.navigationLabel,W=t.next2AriaLabel,V=t.next2Label,E=t.nextAriaLabel,M=t.nextLabel,O=t.onActiveStartDateChange,B=t.onChange,G=t.onClickDay,se=t.onClickDecade,le=t.onClickMonth,Q=t.onClickWeekNumber,ce=t.onClickYear,Oe=t.onDrillDown,Xe=t.onDrillUp,Te=t.onViewChange,Wt=t.prev2AriaLabel,wt=t.prev2Label,Re=t.prevAriaLabel,ac=t.prevLabel,Pe=t.returnValue,Ki=Pe===void 0?"start":Pe,St=t.selectRange,Da=t.showDoubleView,yh=t.showFixedNumberOfWeeks,xh=t.showNavigation,R2=xh===void 0?!0:xh,N2=t.showNeighboringCentury,$2=t.showNeighboringDecade,wh=t.showNeighboringMonth,F2=wh===void 0?!0:wh,V2=t.showWeekNumbers,B2=t.tileClassName,z2=t.tileContent,W2=t.tileDisabled,sc=t.value,Sh=t.view,bh=S.useState(l),U2=bh[0],Ea=bh[1],jh=S.useState(null),H2=jh[0],kh=jh[1],Ch=S.useState(Array.isArray(c)?c.map(function(Z){return Z!==null?Co(Z):null}):c!=null?Co(c):null),lc=Ch[0],Y2=Ch[1],Th=S.useState(u),G2=Th[0],Ph=Th[1],tt=r||U2||LL({activeStartDate:r,defaultActiveStartDate:l,defaultValue:c,defaultView:u,maxDate:k,maxDetail:P,minDate:_,minDetail:I,value:sc,view:Sh}),nt=function(){var Z=function(){return St&&ju(lc)?lc:sc!==void 0?sc:lc}();return Z?Array.isArray(Z)?Z.map(function(ve){return ve!==null?Co(ve):null}):Z!==null?Co(Z):null:null}(),Aa=D2(P),fe=hh(Sh||G2,I,P),Ut=P2(I,P),K2=St?H2:null,cc=Ut.indexOf(fe)<Ut.length-1,Dh=Ut.indexOf(fe)>0,Eh=S.useCallback(function(Z){var ve=function(){switch(Ki){case"start":return mh;case"end":return A2;case"range":return AL;default:throw new Error("Invalid returnValue.")}}();return ve({maxDate:k,maxDetail:P,minDate:_,value:Z})},[k,P,_,Ki]),uc=S.useCallback(function(Z,ve){Ea(Z);var je={action:ve,activeStartDate:Z,value:nt,view:fe};O&&!is(tt,Z)&&O(je)},[tt,O,nt,fe]),La=S.useCallback(function(Z,ve){var je=function(){switch(fe){case"century":return se;case"decade":return ce;case"year":return le;case"month":return G;default:throw new Error("Invalid view: ".concat(fe,"."))}}();je&&je(Z,ve)},[G,se,le,ce,fe]),dc=S.useCallback(function(Z,ve){if(cc){La(Z,ve);var je=Ut[Ut.indexOf(fe)+1];if(!je)throw new Error("Attempted to drill down from the lowest view.");Ea(Z),Ph(je);var Lt={action:"drillDown",activeStartDate:Z,value:nt,view:je};O&&!is(tt,Z)&&O(Lt),Te&&fe!==je&&Te(Lt),Oe&&Oe(Lt)}},[tt,cc,O,La,Oe,Te,nt,fe,Ut]),fc=S.useCallback(function(){if(Dh){var Z=Ut[Ut.indexOf(fe)-1];if(!Z)throw new Error("Attempted to drill up from the highest view.");var ve=Tr(Z,tt);Ea(ve),Ph(Z);var je={action:"drillUp",activeStartDate:ve,value:nt,view:Z};O&&!is(tt,ve)&&O(je),Te&&fe!==Z&&Te(je),Xe&&Xe(je)}},[tt,Dh,O,Xe,Te,nt,fe,Ut]),pc=S.useCallback(function(Z,ve){var je=nt;La(Z,ve);var Lt=St&&!ju(je),_t;if(St)if(Lt)_t=Tr(Aa,Z);else{if(!je)throw new Error("previousValue is required");if(Array.isArray(je))throw new Error("previousValue must not be an array");_t=QA(Aa,je,Z)}else _t=Eh(Z);var mc=!St||Lt||h?L2({maxDate:k,maxDetail:P,minDate:_,minDetail:I,value:_t,view:fe}):null;ve.persist(),Ea(mc),Y2(_t);var J2={action:"onChange",activeStartDate:mc,value:_t,view:fe};if(O&&!is(tt,mc)&&O(J2),B)if(St){var q2=ju(_t);if(!q2)B(_t||null,ve);else if(i){if(Array.isArray(_t))throw new Error("value must not be an array");B([_t||null,null],ve)}}else B(_t||null,ve)},[tt,i,Eh,h,k,P,_,I,O,B,La,St,nt,Aa,fe]);function Q2(Z){kh(Z)}function hc(){kh(null)}S.useImperativeHandle(n,function(){return{activeStartDate:tt,drillDown:dc,drillUp:fc,onChange:pc,setActiveStartDate:uc,value:nt,view:fe}},[tt,dc,fc,pc,uc,nt,fe]);function Ah(Z){var ve=Z?w2(fe,tt):Tr(fe,tt),je=cc?dc:pc,Lt={activeStartDate:ve,hover:K2,locale:j,maxDate:k,minDate:_,onClick:je,onMouseOver:St?Q2:void 0,tileClassName:B2,tileContent:z2,tileDisabled:W2,value:nt,valueType:Aa};switch(fe){case"century":return s.jsx(sL,fi({formatYear:b,showNeighboringCentury:N2},Lt));case"decade":return s.jsx(dL,fi({formatYear:b,showNeighboringDecade:$2},Lt));case"year":return s.jsx(gL,fi({formatMonth:p,formatMonthYear:m},Lt));case"month":return s.jsx(CL,fi({calendarType:o,formatDay:d,formatLongDate:f,formatShortWeekday:y,formatWeekday:w,onClickWeekNumber:Q,onMouseLeave:St?hc:void 0,showFixedNumberOfWeeks:typeof yh<"u"?yh:Da,showNeighboringMonth:F2,showWeekNumbers:V2},Lt));default:throw new Error("Invalid view: ".concat(fe,"."))}}function X2(){return R2?s.jsx(JA,{activeStartDate:tt,drillUp:fc,formatMonthYear:m,formatYear:b,locale:j,maxDate:k,minDate:_,navigationAriaLabel:F,navigationAriaLive:U,navigationLabel:D,next2AriaLabel:W,next2Label:V,nextAriaLabel:E,nextLabel:M,prev2AriaLabel:Wt,prev2Label:wt,prevAriaLabel:Re,prevLabel:ac,setActiveStartDate:uc,showDoubleView:Da,view:fe,views:Ut}):null}var Z2=Array.isArray(nt)?nt:[nt];return s.jsxs("div",{className:ql(rs,St&&Z2.length===1&&"".concat(rs,"--selectRange"),Da&&"".concat(rs,"--doubleView"),a),ref:v,children:[X2(),s.jsxs("div",{className:"".concat(rs,"__viewContainer"),onBlur:St?hc:void 0,onMouseLeave:St?hc:void 0,children:[Ah(),Da?Ah(!0):null]})]})});const IL=Wi`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ML=Wi`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,OL=Wi`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,RL=Wi`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,NL=Wi`
  from { opacity: 0; }
  to { opacity: 1; }
`,$L=x.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${NL} 0.15s ease-out;
`,FL=x.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:t})=>e?t?tn`animation: ${RL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:tn`animation: ${OL} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:t?tn`animation: ${ML} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:tn`animation: ${IL} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,VL=x.div`
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
`,_2=({isOpen:e,onClose:t,selectedDate:n,onDateSelect:r,triggerRef:i})=>{const o=S.useRef(null),[a,l]=S.useState(!1),[c,u]=S.useState(!1),[d,f]=S.useState(!1),[p,m]=S.useState({top:0,left:0});S.useEffect(()=>{if(e&&(i!=null&&i.current)){const h=i.current.getBoundingClientRect(),v=280,j=320,C=8,T=window.innerHeight-h.bottom-C<j;f(T);let P;T?P=h.top-j-C:P=h.bottom+C;let L=h.right-v;L<8&&(L=8),L+v>window.innerWidth-8&&(L=window.innerWidth-v-8),P<8&&(P=8),m({top:P,left:L}),u(!0),l(!1)}},[e,i]);const y=S.useCallback(()=>{l(!0),setTimeout(()=>{u(!1),l(!1),t()},150)},[t]),w=S.useCallback(h=>{o.current&&!o.current.contains(h.target)&&y()},[y]);S.useEffect(()=>{if(e){const h=setTimeout(()=>{document.addEventListener("mousedown",w)},10);return()=>{clearTimeout(h),document.removeEventListener("mousedown",w)}}},[e,w]);const b=S.useCallback(h=>{h instanceof Date&&(r(Bt(h)),y())},[r,y]);if(!c)return null;const g=new Date(n+"T00:00:00");return Nx.createPortal(s.jsxs("div",{"data-calendar-portal":!0,children:[s.jsx($L,{onClick:y}),s.jsx(FL,{ref:o,$isClosing:a,$openUpward:d,$top:p.top,$left:p.left,children:s.jsx(VL,{children:s.jsx(_L,{onChange:b,value:g,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(h,v)=>v.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},BL=x(N.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,zL=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,WL=x.button`
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
`,UL=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,gh=x.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,HL=x(gh)`
  height: 14px;
`,YL=x(gh)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,GL=x(gh)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,KL=x(N.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,QL=x(N.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,XL=x.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,ZL=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,JL=x(N.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,qL=x.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,e_=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,t_=x.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,n_=x(N.button).attrs({type:"button"})`
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
`,r_=x.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,q0=x(N.button).attrs({type:"button"})`
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
`,i_=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"15 18 9 12 15 6"})}),o_=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"9 18 15 12 9 6"})}),os=[.25,.1,.25,1],a_=({selectedDate:e,onDateChange:t})=>{const[n,r]=S.useState(!1),[i,o]=S.useState(1),a=S.useRef(null),l=S.useRef(e);if(l.current!==e){const h=new Date(l.current+"T00:00:00"),v=new Date(e+"T00:00:00");o(v>h?1:-1),l.current=e}const c=S.useCallback(h=>{h.preventDefault(),h.stopPropagation();const v=Bt(new Date),j=new Date(e+"T00:00:00"),C=new Date(v+"T00:00:00");o(C>j?1:-1),t(v)},[e,t]),u=S.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o(-1);const v=new Date(e+"T00:00:00");v.setDate(v.getDate()-1),t(Bt(v))},[e,t]),d=S.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o(1);const v=new Date(e+"T00:00:00");v.setDate(v.getDate()+1),t(Bt(v))},[e,t]),f=z4(e),p=new Date(e+"T00:00:00"),m=p.getDate(),y=p.toLocaleDateString("en-US",{month:"short"}),w=p.toLocaleDateString("en-US",{weekday:"long"}),b=p.getFullYear(),g={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return s.jsxs(BL,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:os},children:[s.jsxs(zL,{children:[s.jsxs(WL,{ref:a,onClick:()=>r(!0),type:"button",children:[s.jsxs(UL,{children:[s.jsx(HL,{children:s.jsx(Fe,{mode:"popLayout",initial:!1,children:s.jsx(KL,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:os},children:y},y)})}),s.jsx(YL,{children:s.jsx(Fe,{mode:"popLayout",initial:!1,children:s.jsx(QL,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:os},children:m},m)})})]}),s.jsx(XL,{}),s.jsxs(ZL,{children:[s.jsx(GL,{children:s.jsx(Fe,{mode:"popLayout",initial:!1,children:s.jsx(JL,{variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:os},children:w},w)})}),s.jsx(qL,{children:b})]})]}),s.jsxs(e_,{children:[s.jsx(t_,{children:s.jsx(Fe,{children:!f&&s.jsx(n_,{onClick:c,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),s.jsxs(r_,{children:[s.jsx(q0,{onClick:u,whileTap:{scale:.95},children:s.jsx(i_,{})}),s.jsx(q0,{onClick:d,whileTap:{scale:.95},children:s.jsx(o_,{})})]})]})]}),s.jsx(_2,{isOpen:n,onClose:()=>r(!1),selectedDate:e,onDateSelect:t,triggerRef:a})]})};x(N.div)`
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
`;x(pp)`
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
`;const s_=x.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,l_=x.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,c_=x(N.span)`
  display: inline-block;
`,u_=x.span`
  display: inline-block;
`,d_=[.25,.1,.25,1],f_=({value:e,className:t})=>{const n=S.useMemo(()=>e.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[e]);return s.jsx(s_,{className:t,children:n.map(({char:r,key:i,isDigit:o},a)=>o?s.jsx(l_,{children:s.jsx(Fe,{mode:"popLayout",initial:!1,children:s.jsx(c_,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:d_},children:r},i)})},`wrapper-${a}`):s.jsx(u_,{children:r},`static-${a}`))})},pi=S.memo(f_);x.h1`
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
`;const p_=x(N.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
  overflow: hidden;
`,h_=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`,m_=x.div`
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
`,g_=x.div`
  flex: 1;
  min-width: 0;
`,v_=x.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,y_=x.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,x_=x.span`
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
`,w_=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,ev=x.div`
  text-align: ${({$align:e})=>e||"left"};
`,tv=x.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,nv=x.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:e})=>e};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,S_=x.div`
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
`,b_=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,j_=x.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,k_=x(N.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,C_=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,T_=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,P_=x.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,D_=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,E_=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,A_=x(N.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:e})=>e};
`,L_={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},__=e=>{const t=L_[e];return t?s.jsx("img",{src:t,alt:`${e.toUpperCase()} Bank`}):null},I_=e=>new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),rv=[.25,.1,.25,1],M_=({detailedBalance:e,index:t=0,limit:n})=>{const{account:r,billDue:i,unbilled:o,totalOutstanding:a,cycleStart:l,cycleSpending:c}=e,u=n!==void 0&&n>0,d=u?Math.max(0,n-c):0,f=u?c/n*100:0,p=u&&c>n,m=p?"#ef4444":f>80?"#f59e0b":"#10b981",y=()=>i>0?"due":o>0?"unbilled":"clear",w=()=>{switch(y()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return s.jsxs(p_,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:rv,delay:t*.02},children:[s.jsxs(h_,{children:[s.jsx(m_,{children:__(r.bank)}),s.jsxs(g_,{children:[s.jsxs(v_,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),s.jsxs(y_,{children:["Cycle from ",I_(l)]})]}),s.jsx(x_,{$status:y(),children:w()})]}),s.jsxs(w_,{children:[s.jsxs(ev,{children:[s.jsx(tv,{children:"Bill Due"}),s.jsx(nv,{$color:i>0?"#ef4444":"#10b981",children:s.jsx(pi,{value:ft(i)})})]}),s.jsxs(ev,{$align:"right",children:[s.jsx(tv,{children:"Unbilled"}),s.jsx(nv,{$color:o>0?"#f59e0b":"var(--text-tertiary)",children:s.jsx(pi,{value:ft(o)})})]})]}),u&&s.jsxs(S_,{children:[s.jsxs(b_,{children:[s.jsxs(C_,{children:[s.jsx(T_,{children:"Virtual Limit"}),s.jsx(P_,{children:ft(n)})]}),s.jsxs(D_,{children:[s.jsx(E_,{children:p?"Over By":"Available"}),s.jsx(A_,{$color:m,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:ft(p?a-n:d)},d)]})]}),s.jsx(j_,{children:s.jsx(k_,{$color:m,initial:{width:0},animate:{width:`${Math.min(f,100)}%`},transition:{duration:.4,ease:rv,delay:.1}})})]})]})},O_=S.memo(M_),R_=x(N.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,as=x(N.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
  overflow: hidden;
`,ss=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,ls=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,cs=x.div`
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
`,us=x.div`
  min-width: 0;
`,ds=x.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fs=x.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,ps=x.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:e})=>e||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,N_=x.div`
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
`,$_=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,F_=x.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,V_=x(N.div)`
  height: 100%;
  background: ${({$color:e})=>e};
  border-radius: 2px;
`,B_=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,z_=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,W_=x.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,U_=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,H_=x.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Y_=x(N.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:e})=>e};
`,iv={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},G_=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),s.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),s.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),K_=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),vh=[.25,.1,.25,1],Q_={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:vh}}},hs={hidden:{opacity:0,y:4},visible:{opacity:1,y:0,transition:{duration:.2,ease:vh}}},X_=({balances:e,ccLimits:t={},creditCardDetailedBalances:n=[]})=>{const{hdfcBalance:r,iciciBalance:i,totalCCOutstanding:o,netPosition:a,totalLimit:l,totalLimitRemaining:c,limitPercentage:u,limitColor:d}=S.useMemo(()=>{const p=e.find(T=>T.account.id==="hdfc-bank"),m=e.find(T=>T.account.id==="icici-bank"),y=e.filter(T=>T.account.type==="credit_card"),w=(p==null?void 0:p.balance)||0,b=(m==null?void 0:m.balance)||0,g=y.reduce((T,P)=>T+(P.totalOutstanding||0),0);let h=0;for(const T of n){const P=t[T.account.id]||0;P>0&&(h+=P)}const v=Math.max(0,h-g),j=h>0?g/h*100:0,k=g>h&&h>0?"#ef4444":j>80?"#f59e0b":"#10b981";return{hdfcBalance:w,iciciBalance:b,totalCCOutstanding:g,netPosition:w-g,totalLimit:h,totalLimitRemaining:v,limitPercentage:j,limitColor:k}},[e,t,n]),f=l>0;return s.jsxs(R_,{variants:Q_,initial:"hidden",animate:"visible",children:[s.jsx(as,{variants:hs,children:s.jsxs(ss,{children:[s.jsxs(ls,{children:[s.jsx(cs,{$color:"#10b981",children:s.jsx(G_,{})}),s.jsxs(us,{children:[s.jsx(ds,{children:"Net Position"}),s.jsx(fs,{children:"HDFC − CC Due"})]})]}),s.jsx(ps,{$color:a>=0?"#10b981":"#ef4444",children:s.jsx(pi,{value:ft(a)})})]})}),s.jsx(as,{variants:hs,children:s.jsxs(ss,{children:[s.jsxs(ls,{children:[s.jsx(cs,{$color:"#004C8F",children:s.jsx("img",{src:iv.hdfc,alt:"HDFC"})}),s.jsxs(us,{children:[s.jsx(ds,{children:"HDFC Bank"}),s.jsx(fs,{children:"Savings"})]})]}),s.jsx(ps,{$color:r>=0?"#004C8F":"#ef4444",children:s.jsx(pi,{value:ft(r)})})]})}),s.jsx(as,{variants:hs,children:s.jsxs(ss,{children:[s.jsxs(ls,{children:[s.jsx(cs,{$color:"#F58220",children:s.jsx("img",{src:iv.icici,alt:"ICICI"})}),s.jsxs(us,{children:[s.jsx(ds,{children:"ICICI Bank"}),s.jsx(fs,{children:"Savings"})]})]}),s.jsx(ps,{$color:i>=0?"#F58220":"#ef4444",children:s.jsx(pi,{value:ft(i)})})]})}),s.jsxs(as,{variants:hs,children:[s.jsxs(ss,{children:[s.jsxs(ls,{children:[s.jsx(cs,{$color:"#ef4444",children:s.jsx(K_,{})}),s.jsxs(us,{children:[s.jsx(ds,{children:"Credit Cards"}),s.jsx(fs,{children:"Total Outstanding"})]})]}),s.jsx(ps,{$color:o>0?"#ef4444":"#10b981",children:s.jsx(pi,{value:`${o>0?"-":""}${ft(o)}`})})]}),f&&s.jsxs(N_,{children:[s.jsxs($_,{children:[s.jsxs(B_,{children:[s.jsx(z_,{children:"Combined Limit"}),s.jsx(W_,{children:ft(l)})]}),s.jsxs(U_,{children:[s.jsx(H_,{children:u>100?"Over By":"Available"}),s.jsx(Y_,{$color:d,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:u>100?ft(o-l):ft(c)},c)]})]}),s.jsx(F_,{children:s.jsx(V_,{$color:d,initial:{width:0},animate:{width:`${Math.min(u,100)}%`},transition:{duration:.4,ease:vh,delay:.1}})})]})]})]})},Z_=S.memo(X_),J_=x.div`
  display: flex;
  flex-direction: column;
`,q_=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,eI=x(N.button)`
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
`,tI=x.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,nI=x.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,rI=x.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.35s cubic-bezier(0.32, 0.72, 0, 1);
`,iI=x.div`
  overflow: hidden;
`,oI=x.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,aI=x.div`
  padding: 0;
`,po=x.div`
  padding: 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,ho=x.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,ov=x.input`
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
`,sI=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,lI=x.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,cI=x(N.button).attrs({type:"button"})`
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
`,av=x.select`
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
`,uI=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,dI=x.span`
  font-size: 17px;
  font-weight: 500;
    color: var(--text-tertiary);
`,fI=x.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,pI=x(N.button)`
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
`,hI=x(N.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  cursor: pointer;
`,mI=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"}],gI=ih(),sv=o2(),ku=[.4,0,.2,1],vI=({onAddTransaction:e,defaultDate:t})=>{const[n,r]=S.useState(""),[i,o]=S.useState(""),[a,l]=S.useState(""),[c,u]=S.useState(""),[d,f]=S.useState(""),[p,m]=S.useState(t||Bt(new Date)),[y,w]=S.useState(!1),b=S.useRef(null),g=S.useRef(null);S.useEffect(()=>{t&&m(t)},[t]);const h=i!==""||a!==""||c!==""||d!=="";S.useEffect(()=>{if(!n||h||y)return;const I=F=>{const U=F.target;U.closest("[data-calendar-portal]")||b.current&&!b.current.contains(U)&&r("")};return document.addEventListener("mousedown",I),document.addEventListener("touchstart",I),()=>{document.removeEventListener("mousedown",I),document.removeEventListener("touchstart",I)}},[n,h,y]);const v=S.useMemo(()=>{switch(n){case"credit_card_spend":case"cc_payment":return gI;case"bank_debit":case"bank_credit":return sv;default:return Cr}},[n]),j=S.useCallback(()=>{switch(n){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";default:return"Select account..."}},[n]),C=n&&i&&parseFloat(c)>0&&p,k=S.useCallback(()=>{r(""),o(""),l(""),u(""),f("")},[]),T=S.useCallback(()=>{if(!n||!i||!c||!p)return;const I=n==="cc_payment"&&a?a:void 0,F=Cr.find(V=>V.id===i),U=a?Cr.find(V=>V.id===a):void 0;let D="";switch(n){case"credit_card_spend":D=`Spent on ${F==null?void 0:F.name}`;break;case"cc_payment":D=U?`Payment to ${F==null?void 0:F.name} from ${U.name}`:`Payment to ${F==null?void 0:F.name}`;break;case"bank_debit":D=`Debited from ${F==null?void 0:F.name}`;break;case"bank_credit":D=`Credited to ${F==null?void 0:F.name}`;break}const W=K4(n,i,parseFloat(c),d||D,p,I);e(W),k()},[n,i,a,c,d,p,e,k]),P=S.useMemo(()=>{const F=c.replace(/[^0-9.]/g,"").split(".");let U=F[0];const D=F[1];if(U.length>3){let W=U.substring(U.length-3),V=U.substring(0,U.length-3);V=V.replace(/\B(?=(\d{2})+(?!\d))/g,","),U=V+","+W}return D!==void 0?`${U}.${D}`:U},[c]),L=S.useCallback(I=>{const F=I.target.value.replace(/,/g,"");(F===""||/^\d*\.?\d*$/.test(F))&&u(F)},[]),_=I=>new Date(I+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),R=!!n;return s.jsxs(J_,{ref:b,children:[s.jsx(q_,{children:mI.map(({type:I,label:F,hint:U,color:D})=>s.jsxs(eI,{type:"button",$active:n===I,$color:D,onClick:()=>{n===I&&!h?r(""):(r(I),o(""),l(""))},whileTap:{scale:.98},transition:{duration:.1,ease:ku},children:[s.jsx(tI,{children:F}),s.jsx(nI,{children:U})]},I))}),s.jsx(rI,{$isOpen:R,children:s.jsxs(iI,{children:[s.jsx(oI,{children:s.jsxs(aI,{children:[s.jsxs(po,{children:[s.jsx(ho,{children:n==="credit_card_spend"||n==="cc_payment"?"Credit Card":"Bank Account"}),s.jsxs(av,{value:i,onChange:I=>o(I.target.value),children:[s.jsx("option",{value:"",children:j()}),v.map(I=>s.jsx("option",{value:I.id,children:I.name},I.id))]})]}),n==="cc_payment"&&s.jsxs(po,{children:[s.jsx(ho,{children:"Paid From (Optional)"}),s.jsxs(av,{value:a,onChange:I=>l(I.target.value),children:[s.jsx("option",{value:"",children:"Select bank account..."}),sv.map(I=>s.jsx("option",{value:I.id,children:I.name},I.id))]})]}),s.jsxs(po,{children:[s.jsx(ho,{children:"Amount"}),s.jsxs(uI,{children:[s.jsx(dI,{children:"₹"}),s.jsx(ov,{type:"text",inputMode:"decimal",placeholder:"0",value:P,onChange:L})]})]}),s.jsxs(po,{children:[s.jsx(ho,{children:"Date"}),s.jsxs(sI,{children:[s.jsx(lI,{children:_(p)}),s.jsx(cI,{ref:g,onClick:()=>w(!0),whileTap:{scale:.95},children:"Change"}),s.jsx(_2,{isOpen:y,onClose:()=>w(!1),selectedDate:p,onDateSelect:m,triggerRef:g})]})]}),s.jsxs(po,{children:[s.jsx(ho,{children:"Description (Optional)"}),s.jsx(ov,{type:"text",placeholder:"Add a note...",value:d,onChange:I=>f(I.target.value)})]})]})}),s.jsxs(fI,{children:[s.jsx(pI,{type:"button",onClick:T,disabled:!C,whileTap:C?{scale:.98}:{},transition:{duration:.1,ease:ku},children:"Add Transaction"}),s.jsx(hI,{type:"button",onClick:k,whileTap:{scale:.98},transition:{duration:.1,ease:ku},children:"Cancel"})]})]})})]})},yI=S.memo(vI),bl={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},xI=e=>{switch(e){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},wI=x.section`
  border-bottom: 1px solid var(--border);
`,SI=x.div`
  padding: ${bl.section}px 0;

  @media (max-width: 640px) {
    padding: ${bl.sectionMobile}px 0;
  }
`,bI=x(N.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,jI=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,kI=x.div`
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
`,CI=x.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,TI=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,PI=x(N.span)`
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
`,DI=x(N.div)`
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
`,EI=x(N.div)`
  overflow: hidden;
`,AI=x.div`
  padding-top: ${bl.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${bl.contentGapMobile}px;
  }
`,LI=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"6 9 12 15 18 9"})}),jl=[.32,.72,0,1],_I={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:jl},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:jl},opacity:{duration:.25,delay:.05}}}},To=({title:e,icon:t,accent:n,badge:r,defaultOpen:i=!0,isOpen:o,onOpenChange:a,collapseOnClickOutside:l=!1,children:c})=>{const[u,d]=S.useState(i),f=S.useRef(null),p=o!==void 0,m=p?o:u,y=xI(n),w=()=>{const b=!m;p?a==null||a(b):d(b)};return S.useEffect(()=>{if(!l||!m)return;const b=g=>{f.current&&!f.current.contains(g.target)&&(p?a==null||a(!1):d(!1))};return document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b)}},[l,m,p,a]),s.jsx(wI,{ref:f,children:s.jsxs(SI,{children:[s.jsxs(bI,{type:"button",onClick:w,whileTap:{scale:.995},transition:{duration:.1},children:[s.jsxs(jI,{children:[s.jsx(kI,{$color:y,children:t}),s.jsx(CI,{children:e})]}),s.jsxs(TI,{children:[s.jsx(Fe,{mode:"wait",children:r!==void 0&&s.jsx(PI,{$color:y,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:jl},children:r},r)}),s.jsx(DI,{animate:{rotate:m?180:0},transition:{duration:.25,ease:jl},children:s.jsx(LI,{})})]})]}),s.jsx(Fe,{initial:!1,children:m&&s.jsx(EI,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:_I,children:s.jsx(AI,{children:c})},"content")})]})})},II=x.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,MI=x.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,OI=x(N.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,RI=x.div`
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
`,I2=x(N.div)`
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
`,NI=x.div`
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
`,$I=x.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,FI=x.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,VI=x.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,BI=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,zI=x.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,WI=x(N.button)`
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

  ${I2}:hover & {
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
`,UI=x(N.div)`
  padding: 48px 24px;
  text-align: center;
`,HI=x.div`
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
`,YI=x.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,GI=x.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,KI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),s.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),s.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),s.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),QI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),lv=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),s.jsx("polyline",{points:"5 12 12 5 19 12"})]}),XI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("polyline",{points:"19 12 12 19 5 12"})]}),ZI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"3 6 5 6 21 6"}),s.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),JI=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),s.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),cv=[.32,.72,0,1],qI=e=>{switch(e){case"credit_card_spend":return s.jsx(QI,{});case"cc_payment":return s.jsx(lv,{});case"bank_debit":return s.jsx(lv,{});case"bank_credit":return s.jsx(XI,{})}},uv=e=>e==="bank_credit",eM=e=>{const t=new Date(e),n=new Date,r=new Date(n);return r.setDate(r.getDate()-1),e===n.toISOString().split("T")[0]?"Today":e===r.toISOString().split("T")[0]?"Yesterday":t.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},tM=({transactions:e,onDeleteTransaction:t,selectedDate:n})=>{const{filteredTransactions:r,groupedTransactions:i}=S.useMemo(()=>{const l=new Date(n),c=e.filter(d=>new Date(d.date)<=l).sort((d,f)=>{const p=f.date.localeCompare(d.date);return p!==0?p:f.id.localeCompare(d.id)}),u={};return c.forEach(d=>{u[d.date]||(u[d.date]=[]),u[d.date].push(d)}),{filteredTransactions:c,groupedTransactions:u}},[e,n]),o=S.useCallback(l=>{t(l)},[t]),a=Object.keys(i).sort((l,c)=>c.localeCompare(l));return s.jsx(To,{title:"Transactions",icon:s.jsx(KI,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:s.jsx(II,{children:s.jsx(MI,{children:r.length===0?s.jsxs(UI,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:cv},children:[s.jsx(HI,{children:s.jsx(JI,{})}),s.jsx(YI,{children:"No Transactions"}),s.jsx(GI,{children:"Add your first transaction above"})]}):a.map(l=>s.jsxs(OI,{children:[s.jsx(RI,{children:eM(l)}),s.jsx(Fe,{mode:"popLayout",children:i[l].map(c=>{var d;const u=Q4(c.accountId);return s.jsxs(I2,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:cv},layout:!0,children:[s.jsx(NI,{$type:c.type,children:qI(c.type)}),s.jsxs($I,{children:[s.jsx(FI,{children:c.description}),s.jsx(VI,{children:(d=u==null?void 0:u.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")})]}),s.jsxs(BI,{children:[s.jsxs(zI,{$positive:uv(c.type),children:[uv(c.type)?"+":"-",ft(c.amount)]}),s.jsx(WI,{type:"button",onClick:()=>o(c.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:s.jsx(ZI,{})})]})]},c.id)})})]},l))})})})},nM=S.memo(tM),rM=x(N.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
`,iM=x(N.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,oM=x.div`
  padding: var(--space-xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,aM=x.div`
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
`,sM=x.div`
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
`,lM=x.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
`,cM=x.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Cu=x.h3`
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
`,Tu=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Pu=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,dv=x.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
`,Du=x.div`
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
`,Eu=x.input`
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
`,fv=x.div`
  height: 1px;
  background: var(--border);
  margin: var(--space-lg) 0;
`,uM=x.div`
  display: flex;
  gap: var(--space-md);
`,pv=x(N.button)`
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
`,hv=x.p`
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,dM=x.span`
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
`,fM=x.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,pM=x.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
`,hM=x.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
`,mv=x.button`
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
`,mM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),s.jsx("polyline",{points:"5 6 12 3 19 6"}),s.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),s.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),gM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),vM=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),gv=[.25,.1,.25,1],yM={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}},xM={hidden:{opacity:0,scale:.97,y:8},visible:{opacity:1,scale:1,y:0,transition:{duration:.25,ease:gv}},exit:{opacity:0,scale:.97,y:8,transition:{duration:.2,ease:gv}}},wM=({isOpen:e,onClose:t,initialBalances:n,initialCCBills:r,ccLimits:i,onSave:o})=>{const[a,l]=S.useState({}),[c,u]=S.useState({}),[d,f]=S.useState({}),[p,m]=S.useState({}),y=o2(),w=ih();S.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),S.useEffect(()=>{if(e){const k=Bt(new Date),T={};y.forEach(R=>{var I;T[R.id]=((I=n[R.id])==null?void 0:I.toString())||""}),l(T);const P={},L={};w.forEach(R=>{const I=rh(r[R.id],k);P[R.id]=I.amount>0?I.amount.toString():"",L[R.id]=I.type}),u(P),f(L);const _={};w.forEach(R=>{var I;_[R.id]=((I=i[R.id])==null?void 0:I.toString())||""}),m(_)}},[e,n,r,i]);const b=()=>{const k=Bt(new Date),T={};Object.entries(a).forEach(([_,R])=>{const I=parseFloat(R.replace(/,/g,""))||0;T[_]=I});const P={};Object.entries(c).forEach(([_,R])=>{const I=parseFloat(R.replace(/,/g,""))||0,F=r[_],U=typeof F=="object"?F.setupDate:k,D={amount:I,type:d[_]||"billed",setupDate:typeof F=="object"&&F.amount===I?U:k};P[_]=D});const L={};Object.entries(p).forEach(([_,R])=>{const I=parseFloat(R.replace(/,/g,""))||0;I>0&&(L[_]=I)}),o(T,P,L),t()},g=k=>{const T=k.replace(/[^0-9]/g,"");if(!T)return"";if(T.length>3){let P=T.substring(T.length-3),L=T.substring(0,T.length-3);return L=L.replace(/\B(?=(\d{2})+(?!\d))/g,","),L+","+P}return T},h=(k,T)=>{const P=T.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&l(L=>({...L,[k]:P}))},v=(k,T)=>{const P=T.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&u(L=>({...L,[k]:P}))},j=(k,T)=>{const P=T.replace(/,/g,"");(P===""||/^\d+$/.test(P))&&m(L=>({...L,[k]:P}))},C=k=>{if(k>3&&k<21)return"th";switch(k%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return s.jsx(Fe,{children:e&&s.jsx(rM,{variants:yM,initial:"hidden",animate:"visible",exit:"exit",onClick:t,children:s.jsxs(iM,{variants:xM,initial:"hidden",animate:"visible",exit:"exit",onClick:k=>k.stopPropagation(),children:[s.jsxs(oM,{children:[s.jsx(lM,{children:"Initial Balances, Bills & Limits"}),s.jsx(cM,{children:"Set your starting bank balances, credit card outstanding amounts, and monthly spending limits."})]}),s.jsxs(aM,{children:[s.jsxs(Cu,{children:[s.jsx(mM,{}),"Bank Account Balances"]}),s.jsx(Tu,{children:y.map(k=>s.jsxs(Pu,{children:[s.jsx(dv,{children:k.name}),s.jsx(Du,{children:s.jsx(Eu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:g(a[k.id]||""),onChange:T=>h(k.id,T.target.value)})})]},k.id))}),s.jsx(fv,{}),s.jsxs(Cu,{children:[s.jsx(gM,{}),"Credit Card Outstanding Bills"]}),s.jsx(Tu,{children:w.map(k=>s.jsxs(Pu,{children:[s.jsx(dv,{children:k.name}),s.jsx(Du,{children:s.jsx(Eu,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,000",value:g(c[k.id]||""),onChange:T=>v(k.id,T.target.value)})}),s.jsxs(hM,{children:[s.jsx(mv,{type:"button",$active:d[k.id]==="billed",onClick:()=>f(T=>({...T,[k.id]:"billed"})),children:"Billed"}),s.jsx(mv,{type:"button",$active:d[k.id]==="unbilled",onClick:()=>f(T=>({...T,[k.id]:"unbilled"})),children:"Unbilled"})]}),s.jsx(hv,{children:d[k.id]==="unbilled"?"Current cycle spending (counts towards limit, clears next cycle)":"Previous cycle bill (does not count towards limit)"})]},k.id))}),s.jsx(fv,{}),s.jsxs(Cu,{children:[s.jsx(vM,{}),"Monthly Spending Limits"]}),s.jsx(Tu,{children:w.map(k=>{const T=r2[k.id];return s.jsxs(Pu,{children:[s.jsxs(fM,{children:[s.jsx(pM,{children:k.name}),T&&s.jsxs(dM,{children:["Resets ",T,C(T)]})]}),s.jsx(Du,{children:s.jsx(Eu,{type:"text",inputMode:"numeric",placeholder:"e.g., 50,000",value:g(p[k.id]||""),onChange:P=>j(k.id,P.target.value)})}),s.jsx(hv,{children:"Maximum spending allowed per billing cycle"})]},k.id)})})]}),s.jsx(sM,{children:s.jsxs(uM,{children:[s.jsx(pv,{onClick:t,whileTap:{scale:.98},children:"Cancel"}),s.jsx(pv,{$primary:!0,onClick:b,whileTap:{scale:.98},children:"Save All"})]})})]})})})},SM=x(N.div)`
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
`,bM=x.div`
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
`,jM=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,kM=x.div`
  height: 120px;

  @media (max-width: 640px) {
    height: 100px;
  }
`,CM=x(N.div)`
  display: flex;
  flex-direction: column;
`,TM=x.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 380px 1fr;
    gap: 32px;
    align-items: start;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 420px 1fr;
  }
`,PM=x(N.div)`
  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: calc(100px + 24px);
  }
`,DM=x(N.div)`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,EM=x(N.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,AM=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,LM=x.div`
  display: flex;
  gap: 12px;
`,vv=x(N.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$variant:e})=>e==="primary"?"white":"var(--text-secondary)"};
  background: ${({$variant:e})=>e==="primary"?"var(--accent)":"var(--bg-secondary)"};
  border: 1px solid ${({$variant:e})=>e==="primary"?"var(--accent)":"var(--border)"};
  border-radius: 14px;
  cursor: pointer;
  flex: 1;

  svg {
    width: 16px;
    height: 16px;
  }
`,_M=x(N.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  cursor: pointer;
  width: 100%;

  svg {
    width: 18px;
    height: 18px;
  }
`,IM=x.input`
  display: none;
`,MM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"3"}),s.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),OM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),RM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"17 8 12 3 7 8"}),s.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),NM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),s.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),s.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),$M=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),s.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),FM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),s.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),VM=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),M2=[.25,.1,.25,1],Au=[.4,0,.2,1],BM={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:M2}}},Lu={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:M2}}},zM=()=>{const[e,t]=S.useState(Bt(new Date)),[n,r]=S.useState([]),[i,o]=S.useState({}),[a,l]=S.useState({}),[c,u]=S.useState({}),[d,f]=S.useState(!1),p=S.useRef(null);S.useEffect(()=>{const C=$4(),k=F4(),T=V4(),P=B4();r(C),o(k),l(T),u(P)},[]);const m=S.useMemo(()=>Y4(n,e,i,a),[e,n,i,a]),y=S.useMemo(()=>ih().map(k=>U4(k,n,e,a)),[n,e,a]),w=S.useCallback(C=>{r(k=>{const T=[...k,C];return requestAnimationFrame(()=>yu(T)),T})},[]),b=S.useCallback(C=>{r(k=>{const T=k.filter(P=>P.id!==C);return requestAnimationFrame(()=>yu(T)),T})},[]),g=S.useCallback((C,k,T)=>{o(C),l(k),u(T),requestAnimationFrame(()=>{O0(C),R0(k),N0(T)})},[]),h=S.useCallback(()=>{Z4(n,i,a,c)},[n,i,a,c]),v=S.useCallback(()=>{var C;(C=p.current)==null||C.click()},[]),j=S.useCallback(C=>{var P;const k=(P=C.target.files)==null?void 0:P[0];if(!k)return;const T=new FileReader;T.onload=L=>{var I;const _=(I=L.target)==null?void 0:I.result,R=q4(_);R?window.confirm(`Import backup from ${new Date(R.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${R.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(R.transactions),o(R.initialBalances),l(R.initialCCBills),u(R.ccLimits||{}),yu(R.transactions),O0(R.initialBalances),R0(R.initialCCBills),N0(R.ccLimits||{})):alert("Invalid backup file. Please select a valid expense manager backup JSON file.")},T.readAsText(k),C.target.value=""},[]);return s.jsxs(s.Fragment,{children:[s.jsx(bM,{children:s.jsx(jM,{children:s.jsx(a_,{selectedDate:e,onDateChange:t})})}),s.jsxs(SM,{variants:BM,initial:"hidden",animate:"visible",children:[s.jsxs(Zw,{$maxWidth:"wide",children:[s.jsx(kM,{}),s.jsx(CM,{variants:Lu,children:s.jsx(To,{title:"Summary",icon:s.jsx($M,{}),accent:"green",children:s.jsx(Z_,{balances:m,ccLimits:c,creditCardDetailedBalances:y})})}),s.jsxs(TM,{children:[s.jsx(PM,{variants:Lu,children:s.jsx(To,{title:"Add Transaction",icon:s.jsx(FM,{}),accent:"orange",children:s.jsx(yI,{onAddTransaction:w,defaultDate:e})})}),s.jsxs(DM,{variants:Lu,children:[s.jsx(To,{title:"Credit Cards",icon:s.jsx(VM,{}),accent:"pink",badge:y.length,children:s.jsx(EM,{children:y.map((C,k)=>s.jsx(O_,{detailedBalance:C,index:k,limit:c[C.account.id]},C.account.id))})}),s.jsx(nM,{transactions:n,onDeleteTransaction:b,selectedDate:e}),s.jsx(To,{title:"Manage Data",icon:s.jsx(NM,{}),accent:"purple",defaultOpen:!1,children:s.jsxs(AM,{children:[s.jsxs(_M,{type:"button",onClick:()=>f(!0),whileTap:{scale:.98},transition:{duration:.1,ease:Au},children:[s.jsx(MM,{}),"Set Initial Balances"]}),s.jsxs(LM,{children:[s.jsxs(vv,{type:"button",$variant:"secondary",onClick:h,whileTap:{scale:.98},transition:{duration:.1,ease:Au},children:[s.jsx(OM,{}),"Export"]}),s.jsxs(vv,{type:"button",$variant:"secondary",onClick:v,whileTap:{scale:.98},transition:{duration:.1,ease:Au},children:[s.jsx(RM,{}),"Import"]})]})]})}),s.jsx(IM,{ref:p,type:"file",accept:".json",onChange:j})]})]})]}),s.jsx(wM,{isOpen:d,onClose:()=>f(!1),initialBalances:i,initialCCBills:a,ccLimits:c,onSave:g})]})]})},O2=()=>new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src="/tools/images/logo-optimized.png"}),WM=async(e,t,n,r=48)=>{try{const i=await O2(),o=Math.min(t,n)*.03,a=t-r-o,l=n-r-o;e.globalAlpha=.7,e.drawImage(i,a,l,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},ff=(e,t,n)=>{const r=[],i=l=>{const c=[];let u=l;for(;u.length>0;){let d=u.length;for(;d>0&&e.measureText(u.slice(0,d)).width>n;)d--;d=Math.max(1,d);const f=u.slice(0,d),p=f.lastIndexOf("/"),m=f.lastIndexOf("-"),y=f.lastIndexOf(".");let w=d;const b=[p,m,y].filter(g=>g>0&&g<d-1);b.length>0&&(w=Math.max(...b)+1),c.push(u.slice(0,w)),u=u.slice(w)}return c},o=t.split(" ");let a="";for(const l of o)if(e.measureText(l).width>n){a&&(r.push(a),a="");const u=i(l);for(let d=0;d<u.length;d++)d<u.length-1?r.push(u[d]):a=u[d]}else{const u=a?`${a} ${l}`:l;e.measureText(u).width>n&&a?(r.push(a),a=l):a=u}return a&&r.push(a),r},UM=async e=>{const{text:t,fontSize:n,fontFamily:r,textColor:i,backgroundColor:o,alignment:a,aspectRatio:l,padding:c}=e,u=document.createElement("canvas");u.width=l.width,u.height=l.height;const d=u.getContext("2d");if(!d)throw new Error("Failed to get canvas context");d.fillStyle=o,d.fillRect(0,0,u.width,u.height);const f=n*(l.width/1080);d.font=`600 ${f}px ${r}`,d.fillStyle=i;const p=c*(l.width/1080),m=u.width-p*2,y=t.split(`
`),w=[];for(const C of y)if(C.trim()==="")w.push("");else{const k=ff(d,C,m);w.push(...k)}const b=f*1.4,g=w.length*b;let h=(u.height-g)/2+f;d.textAlign=a;let v;switch(a){case"left":v=p;break;case"right":v=u.width-p;break;default:v=u.width/2}for(const C of w)C!==""&&d.fillText(C,v,h),h+=b;const j=Math.min(u.width,u.height)*.06;return await WM(d,u.width,u.height,j),u.toDataURL("image/png",1)},HM=async e=>{const{metadata:t,aspectRatio:n,backgroundColor:r,accentColor:i}=e,o=document.createElement("canvas");o.width=n.width,o.height=n.height;const a=o.getContext("2d");if(!a)throw new Error("Failed to get canvas context");const l=n.width/1080,c=n.height>n.width,u=r==="#000000"?"#ffffff":"#000000",d=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";a.fillStyle=r,a.fillRect(0,0,o.width,o.height);const f=64*l,p=o.width-f*2,m=20*l,y=36*l,w=(c?44:40)*l,b=(c?24:22)*l,g=18*l,h=w*1.25,v=b*1.45,j=c?5:4,C=c?4:3;a.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const k=ff(a,t.title,p),T=k.slice(0,j);if(k.length>j&&T.length>0){const Q=T[T.length-1];Q.endsWith("...")||(T[T.length-1]=Q.slice(0,-3)+"...")}a.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`;const P=t.description?ff(a,t.description,p):[],L=P.slice(0,C);if(P.length>C&&L.length>0){const Q=L[L.length-1];Q.endsWith("...")||(L[L.length-1]=Q.slice(0,-3)+"...")}const _=y+m,R=T.length*h,I=L.length>0?m+L.length*v:0,F=_+R+I,U=Math.min(o.width,o.height)*.045,D=f+U+16*l,W=o.height-D-f,V=W-F-m*2;let E=0;if(t.image&&V>100*l){const Q=c?o.width*.5:o.width*.4,ce=120*l;E=Math.min(Q,Math.max(ce,V))}const M=E>0?m+E:0,O=F+M;let B=f+Math.max(0,(W-O)/2);if(t.favicon)try{const Q=await yv(t.favicon);a.save(),a.beginPath(),a.arc(f+y/2,B+y/2,y/2,0,Math.PI*2),a.closePath(),a.clip(),a.drawImage(Q,f,B,y,y),a.restore()}catch{a.fillStyle=i,a.beginPath(),a.arc(f+y/2,B+y/2,y/2,0,Math.PI*2),a.fill()}t.siteName&&(a.font=`500 ${22*l}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d,a.textAlign="left",a.textBaseline="middle",a.fillText(t.siteName,f+y+10*l,B+y/2)),B+=y+m,a.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=u,a.textAlign="left",a.textBaseline="top";for(const Q of T)a.fillText(Q,f,B),B+=h;if(L.length>0){B+=m,a.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`,a.fillStyle=d;for(const Q of L)a.fillText(Q,f,B),B+=v}if(t.image&&E>0){B+=m;try{const Q=await yv(t.image),ce=p;a.save(),YM(a,f,B,ce,E,10*l),a.clip();const Oe=Q.width/Q.height,Xe=ce/E;let Te=0,Wt=0,wt=Q.width,Re=Q.height;Oe>Xe?(wt=Q.height*Xe,Te=(Q.width-wt)/2):(Re=Q.width/Xe,Wt=(Q.height-Re)/2),a.drawImage(Q,Te,Wt,wt,Re,f,B,ce,E),a.restore()}catch{}}const G=o.height-f;a.font=`500 ${g}px -apple-system, BlinkMacSystemFont, monospace`,a.fillStyle=i;const se=p-U-16*l;let le=t.url;for(;a.measureText(le).width>se&&le.length>20;)le=le.slice(0,-4)+"...";a.textAlign="left",a.textBaseline="middle",a.fillText(le,f,G-U/2);try{const Q=await O2();a.globalAlpha=.7,a.drawImage(Q,o.width-f-U,G-U,U,U),a.globalAlpha=1}catch{}return o.toDataURL("image/png",1)},yv=e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n,r.src=e}),YM=(e,t,n,r,i,o)=>{e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()},GM=(e,t)=>{const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},KM=async e=>{var i,o;const n=new URL(e).hostname.replace("www.",""),r={title:n,description:"",image:null,siteName:n,url:e,favicon:`https://www.google.com/s2/favicons?domain=${n}&sz=128`};try{const a=`https://api.microlink.io?url=${encodeURIComponent(e)}`,l=await fetch(a);if(!l.ok)return r;const c=await l.json();return c.status==="success"&&c.data?{title:c.data.title||n,description:c.data.description||"",image:((i=c.data.image)==null?void 0:i.url)||null,siteName:c.data.publisher||n,url:e,favicon:((o=c.data.logo)==null?void 0:o.url)||r.favicon}:r}catch(a){return console.warn("Failed to fetch URL metadata:",a),r}},xv=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],QM='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',XM=e=>{const t=e.trim();if(!t.startsWith("http://")&&!t.startsWith("https://"))return!1;try{return new URL(t),!0}catch{return!1}},ZM=x.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,JM=x.div`
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
`,qM=x.div`
  width: 100%;
  max-width: 600px;
`,eO=x.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,tO=x.div`
  position: absolute;
  inset: 0;
`,nO=x.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,rO=x(N.div)`
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
`,iO=x.div`
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
`,oO=x.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,mo=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,go=x.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,aO=x.textarea`
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
`,wv=x.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,Sv=x.button`
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
`,sO=x.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,lO=x.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,cO=x.input`
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
`,uO=x.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,dO=x(N.button)`
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
`,fO=x(N.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,pO=x.input`
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
`,hO=x.textarea`
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
`,mO=x(N.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,gO=x(N.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,vO=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),yO=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),xO=()=>{const{isDark:e}=hp(),[t,n]=S.useState(""),[r,i]=S.useState(64),[o,a]=S.useState("left"),[l,c]=S.useState(xv[1]),[u,d]=S.useState(null),[f,p]=S.useState(!1),[m,y]=S.useState(null),[w,b]=S.useState(""),[g,h]=S.useState(""),[v,j]=S.useState(!1),[C,k]=S.useState(null),T=S.useMemo(()=>XM(t),[t]),P=e?"#000000":"#ffffff",L=e?"#ffffff":"#000000",_=`${l.height/l.width*100}%`,R=S.useCallback(async()=>{if(!(!T||!t.trim())){j(!0),k(null),d(null);try{const D=await KM(t.trim());y(D),b(D.title),h(D.description)}catch{k("Unable to fetch URL preview")}j(!1)}},[t,T]),I=S.useCallback(async()=>{if(!t.trim()||T){T||d(null);return}p(!0);try{const D=await UM({text:t.trim(),fontSize:r,fontFamily:QM,textColor:L,backgroundColor:P,alignment:o,aspectRatio:l,padding:80});d(D)}catch(D){console.error("Preview generation failed:",D)}p(!1)},[t,T,r,o,l,P,L]),F=S.useCallback(async()=>{if(m){p(!0);try{const D=await HM({metadata:{...m,title:w||m.title,description:g||m.description},aspectRatio:l,backgroundColor:P,accentColor:"#2A9D8F"});d(D)}catch(D){console.error("URL preview generation failed:",D)}p(!1)}},[m,w,g,l,P]);S.useEffect(()=>{if(T)return;const D=setTimeout(I,200);return()=>clearTimeout(D)},[I,T]),S.useEffect(()=>{T?R():(y(null),b(""),h(""),k(null))},[T,R]),S.useEffect(()=>{m&&F()},[m,w,g,l,F]);const U=()=>{if(u){const V=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;GM(u,V)}};return s.jsxs(ZM,{children:[s.jsx(JM,{children:s.jsx(qM,{children:s.jsx(eO,{$bgColor:P,$paddingBottom:_,children:s.jsxs(tO,{children:[u&&s.jsx(nO,{src:u,alt:"Preview"}),s.jsx(Fe,{children:!u&&s.jsxs(rO,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[s.jsx(yO,{}),s.jsx("span",{children:T?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),s.jsx(iO,{children:s.jsxs(oO,{children:[s.jsxs(mo,{children:[s.jsx(go,{children:"Content"}),s.jsx(aO,{value:t,onChange:D=>n(D.target.value),onContextMenu:D=>D.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),T?s.jsxs(s.Fragment,{children:[v&&s.jsx(mo,{style:{alignItems:"center"},children:s.jsx(gO,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),C&&s.jsx(mO,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:C}),m&&s.jsxs(fO,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[s.jsx(go,{children:"Edit Details"}),s.jsx(pO,{value:w,onChange:D=>b(D.target.value),placeholder:"Title"}),s.jsx(hO,{value:g,onChange:D=>h(D.target.value),placeholder:"Description"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(mo,{children:[s.jsx(go,{children:"Font Size"}),s.jsxs(sO,{children:[s.jsx(lO,{children:s.jsx(cO,{type:"range",min:"24",max:"120",value:r,onChange:D=>i(Number(D.target.value))})}),s.jsx(uO,{children:r})]})]}),s.jsxs(mo,{children:[s.jsx(go,{children:"Alignment"}),s.jsx(wv,{children:["left","center","right"].map(D=>s.jsx(Sv,{$active:o===D,onClick:()=>a(D),children:D.charAt(0).toUpperCase()+D.slice(1)},D))})]})]}),s.jsxs(mo,{children:[s.jsx(go,{children:"Format"}),s.jsx(wv,{children:xv.map(D=>s.jsx(Sv,{$active:l.id===D.id,onClick:()=>c(D),children:D.name},D.id))})]}),s.jsxs(dO,{onClick:U,disabled:!u||f,whileTap:{scale:.98},children:[s.jsx(vO,{}),"Download Image"]})]})})]})},wO=x(N.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,SO={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},bO=()=>s.jsx(wO,{variants:SO,initial:"hidden",animate:"visible",children:s.jsx(xO,{})}),jO=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},kO=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),s.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),s.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),s.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),s.jsx("path",{d:"M8 8v2"}),s.jsx("path",{d:"M16 8v2"}),s.jsx("path",{d:"M12 8v5"}),s.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),CO=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[s.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),s.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),s.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),s.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),s.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),s.jsx("path",{d:"M12 10v8"}),s.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),TO=x.div`
  min-height: 100vh;
  position: relative;
`,PO=x.main`
  position: relative;
  z-index: 1;
`,DO=x.a`
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
`,EO=Wi`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,bv=x.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,jv=x.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${EO} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,kv=x.p`
  color: var(--text-secondary);
  font-size: 15px;
`,AO=x.button`
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
`,LO=()=>{const e=fp(),t=Bi();return S.useEffect(()=>{const n=sessionStorage.getItem("spa-redirect");if(n){sessionStorage.removeItem("spa-redirect");const r=n.replace(/^\/tools/,"")||"/";r!==t.pathname&&e(r,{replace:!0})}},[e,t.pathname]),null};function _O(){const{isAuthenticated:e,isLoading:t,authFailed:n,retryAuth:r}=Nk(),i=S.useMemo(()=>jO()?kO:CO,[]);return t||!e&&!n?s.jsxs(bv,{children:[s.jsx(jv,{children:s.jsx(i,{})}),s.jsx(kv,{children:"Authenticating..."})]}):n&&!e?s.jsxs(bv,{children:[s.jsx(jv,{style:{animation:"none",opacity:1},children:s.jsx(i,{})}),s.jsx(kv,{children:"Authentication required to continue"}),s.jsx(AO,{onClick:r,children:"Try Again"})]}):s.jsxs(TO,{children:[s.jsx(LO,{}),s.jsx(DO,{href:"#main-content",children:"Skip to main content"}),s.jsx(BC,{}),s.jsx(jE,{}),s.jsx(PO,{id:"main-content",children:s.jsxs(wk,{children:[s.jsx(Hr,{path:"/",element:s.jsx($E,{})}),s.jsx(Hr,{path:"/tax-manager",element:s.jsx(N4,{})}),s.jsx(Hr,{path:"/expense-manager",element:s.jsx(zM,{})}),s.jsx(Hr,{path:"/canvas-manager",element:s.jsx(bO,{})}),s.jsx(Hr,{path:"/tax-calculator",element:s.jsx(yk,{to:"/tax-manager",replace:!0})})]})})]})}function IO(){return s.jsx(Pk,{basename:"/tools",children:s.jsx(Lk,{children:s.jsxs(Rk,{children:[s.jsx($C,{}),s.jsx(_O,{})]})})})}$x(document.getElementById("root")).render(s.jsx(S.StrictMode,{children:s.jsx(IO,{})}));
