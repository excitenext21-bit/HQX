function Jv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var T0={exports:{}},rc={},A0={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),o_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),Jh=Symbol.iterator;function u_(t){return t===null||typeof t!="object"?null:(t=Jh&&t[Jh]||t["@@iterator"],typeof t=="function"?t:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,L0={};function $s(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||C0}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N0(){}N0.prototype=$s.prototype;function Ef(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||C0}var bf=Ef.prototype=new N0;bf.constructor=Ef;R0(bf,$s.prototype);bf.isPureReactComponent=!0;var Qh=Array.isArray,P0=Object.prototype.hasOwnProperty,Tf={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)P0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:co,type:t,key:s,ref:a,props:r,_owner:Tf.current}}function d_(t,e){return{$$typeof:co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===co}function f_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ep=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f_(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case co:case e_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ac(a,0):i,Qh(r)?(n="",t!=null&&(n=t.replace(ep,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(Af(r)&&(r=d_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ep,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Qh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ac(s,o);a+=ll(s,e,n,l,r)}else if(l=u_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ac(s,o++),a+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function yo(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function h_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},cl={transition:null},p_={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Tf};function k0(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=$s;et.Fragment=t_;et.Profiler=i_;et.PureComponent=Ef;et.StrictMode=n_;et.Suspense=o_;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;et.act=k0;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=R0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)P0.call(e,l)&&!I0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:co,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};et.createElement=D0;et.createFactory=function(t){var e=D0.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:a_,render:t}};et.isValidElement=Af;et.lazy=function(t){return{$$typeof:c_,_payload:{_status:-1,_result:t},_init:h_}};et.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};et.unstable_act=k0;et.useCallback=function(t,e){return pn.current.useCallback(t,e)};et.useContext=function(t){return pn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};et.useEffect=function(t,e){return pn.current.useEffect(t,e)};et.useId=function(){return pn.current.useId()};et.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return pn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};et.useRef=function(t){return pn.current.useRef(t)};et.useState=function(t){return pn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return pn.current.useTransition()};et.version="18.3.1";A0.exports=et;var te=A0.exports;const U0=Qv(te),m_=Jv({__proto__:null,default:U0},[te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=te,x_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,y_=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S_={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)__.call(e,i)&&!S_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x_,type:t,key:s,ref:a,props:r,_owner:y_.current}}rc.Fragment=v_;rc.jsx=F0;rc.jsxs=F0;T0.exports=rc;var u=T0.exports,ku={},O0={exports:{}},Ln={},B0={exports:{}},z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,P){var O=N.length;N.push(P);e:for(;0<O;){var q=O-1>>>1,ue=N[q];if(0<r(ue,P))N[q]=P,N[O]=ue,O=q;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var P=N[0],O=N.pop();if(O!==P){N[0]=O;e:for(var q=0,ue=N.length,Ee=ue>>>1;q<Ee;){var Xe=2*(q+1)-1,We=N[Xe],Ue=Xe+1,K=N[Ue];if(0>r(We,O))Ue<ue&&0>r(K,We)?(N[q]=K,N[Ue]=O,q=Ue):(N[q]=We,N[Xe]=O,q=Xe);else if(Ue<ue&&0>r(K,O))N[q]=K,N[Ue]=O,q=Ue;else break e}}return P}function r(N,P){var O=N.sortIndex-P.sortIndex;return O!==0?O:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,m=!1,v=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(N){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=N)i(c),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(c)}}function S(N){if(w=!1,M(N),!v)if(n(l)!==null)v=!0,Q(b);else{var P=n(c);P!==null&&Y(S,P.startTime-N)}}function b(N,P){v=!1,w&&(w=!1,d(_),_=-1),m=!0;var O=f;try{for(M(P),p=n(l);p!==null&&(!(p.expirationTime>P)||N&&!I());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var ue=q(p.expirationTime<=P);P=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(l)&&i(l),M(P)}else i(l);p=n(l)}if(p!==null)var Ee=!0;else{var Xe=n(c);Xe!==null&&Y(S,Xe.startTime-P),Ee=!1}return Ee}finally{p=null,f=O,m=!1}}var T=!1,C=null,_=-1,A=5,L=-1;function I(){return!(t.unstable_now()-L<A)}function B(){if(C!==null){var N=t.unstable_now();L=N;var P=!0;try{P=C(!0,N)}finally{P?G():(T=!1,C=null)}}else T=!1}var G;if(typeof x=="function")G=function(){x(B)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,H=F.port2;F.port1.onmessage=B,G=function(){H.postMessage(null)}}else G=function(){g(B,0)};function Q(N){C=N,T||(T=!0,G())}function Y(N,P){_=g(function(){N(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Q(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var O=f;f=P;try{return N()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=f;f=N;try{return P()}finally{f=O}},t.unstable_scheduleCallback=function(N,P,O){var q=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?q+O:q):O=q,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=O+ue,N={id:h++,callback:P,priorityLevel:N,startTime:O,expirationTime:ue,sortIndex:-1},O>q?(N.sortIndex=O,e(c,N),n(l)===null&&N===n(c)&&(w?(d(_),_=-1):w=!0,Y(S,O-q))):(N.sortIndex=ue,e(l,N),v||m||(v=!0,Q(b))),N},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(N){var P=f;return function(){var O=f;f=P;try{return N.apply(this,arguments)}finally{f=O}}}})(z0);B0.exports=z0;var M_=B0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=te,Rn=M_;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,Oa={};function Wr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,E_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tp={},np={};function b_(t){return Uu.call(np,t)?!0:Uu.call(tp,t)?!1:E_.test(t)?np[t]=!0:(tp[t]=!0,!1)}function T_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A_(t,e,n,i){if(e===null||typeof e>"u"||T_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Kt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Rf);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lf(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A_(e,n,r,i)&&(n=null),i||r===null?b_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),xs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),ip=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=ip&&t[ip]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Cc;function Sa(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function Lc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function C_(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case xs:return"Portal";case Fu:return"Profiler";case Nf:return"StrictMode";case Ou:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case If:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function R_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L_(t){var e=j0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=L_(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=j0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&Lf(t,"checked",e,!1)}function Vu(t,e){X0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gu(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ma=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ma(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Y0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,K0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N_=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){N_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function Z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Z0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var P_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(t,e){if(e){if(P_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $u=null,Is=null,Ds=null;function lp(t){if(t=ho(t)){if(typeof $u!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=cc(e),$u(t.stateNode,t.type,e))}}function Q0(t){Is?Ds?Ds.push(t):Ds=[t]:Is=t}function eg(){if(Is){var t=Is,e=Ds;if(Ds=Is=null,lp(t),e)for(t=0;t<e.length;t++)lp(e[t])}}function tg(t,e){return t(e)}function ng(){}var Nc=!1;function ig(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return tg(t,e,n)}finally{Nc=!1,(Is!==null||Ds!==null)&&(ng(),eg())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var i=cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Ku=!1;if(Di)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Ku=!1}function I_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ra=!1,Al=null,Cl=!1,Zu=null,D_={onError:function(t){Ra=!0,Al=t}};function k_(t,e,n,i,r,s,a,o,l){Ra=!1,Al=null,I_.apply(D_,arguments)}function U_(t,e,n,i,r,s,a,o,l){if(k_.apply(this,arguments),Ra){if(Ra){var c=Al;Ra=!1,Al=null}else throw Error(ae(198));Cl||(Cl=!0,Zu=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cp(t){if(jr(t)!==t)throw Error(ae(188))}function F_(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return cp(r),t;if(s===i)return cp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function sg(t){return t=F_(t),t!==null?ag(t):null}function ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ag(t);if(e!==null)return e;t=t.sibling}return null}var og=Rn.unstable_scheduleCallback,up=Rn.unstable_cancelCallback,O_=Rn.unstable_shouldYield,B_=Rn.unstable_requestPaint,Pt=Rn.unstable_now,z_=Rn.unstable_getCurrentPriorityLevel,kf=Rn.unstable_ImmediatePriority,lg=Rn.unstable_UserBlockingPriority,Rl=Rn.unstable_NormalPriority,H_=Rn.unstable_LowPriority,cg=Rn.unstable_IdlePriority,sc=null,pi=null;function V_(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:j_,G_=Math.log,W_=Math.LN2;function j_(t){return t>>>=0,t===0?32:31-(G_(t)/W_|0)|0}var Eo=64,bo=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=wa(o):(s&=a,s!==0&&(i=wa(s)))}else a=n&~r,a!==0?i=wa(a):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function q_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=q_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ug(){var t=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function Y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fg,Ff,hg,pg,mg,Qu=!1,To=[],rr=null,sr=null,ar=null,Ha=new Map,Va=new Map,Ji=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ho(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function K_(t,e,n,i,r){switch(e){case"focusin":return rr=sa(rr,t,e,n,i,r),!0;case"dragenter":return sr=sa(sr,t,e,n,i,r),!0;case"mouseover":return ar=sa(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ha.set(s,sa(Ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,sa(Va.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=Rr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yu=i,n.target.dispatchEvent(i),Yu=null}else return e=ho(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function fp(t,e,n){ul(t)&&n.delete(e)}function Z_(){Qu=!1,rr!==null&&ul(rr)&&(rr=null),sr!==null&&ul(sr)&&(sr=null),ar!==null&&ul(ar)&&(ar=null),Ha.forEach(fp),Va.forEach(fp)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,Z_)))}function Ga(t){function e(r){return aa(r,t)}if(0<To.length){aa(To[0],t);for(var n=1;n<To.length;n++){var i=To[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&aa(rr,t),sr!==null&&aa(sr,t),ar!==null&&aa(ar,t),Ha.forEach(e),Va.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Ji.shift()}var ks=Bi.ReactCurrentBatchConfig,Nl=!0;function J_(t,e,n,i){var r=ft,s=ks.transition;ks.transition=null;try{ft=1,Of(t,e,n,i)}finally{ft=r,ks.transition=s}}function Q_(t,e,n,i){var r=ft,s=ks.transition;ks.transition=null;try{ft=4,Of(t,e,n,i)}finally{ft=r,ks.transition=s}}function Of(t,e,n,i){if(Nl){var r=ed(t,e,n,i);if(r===null)Vc(t,e,i,Pl,n),dp(t,i);else if(K_(r,t,e,n,i))i.stopPropagation();else if(dp(t,i),e&4&&-1<$_.indexOf(t)){for(;r!==null;){var s=ho(r);if(s!==null&&fg(s),s=ed(t,e,n,i),s===null&&Vc(t,e,i,Pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Pl=null;function ed(t,e,n,i){if(Pl=null,t=Df(i),t=Rr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case kf:return 1;case lg:return 4;case Rl:case H_:return 16;case cg:return 536870912;default:return 16}default:return 16}}var tr=null,Bf=null,dl=null;function vg(){if(dl)return dl;var t,e=Bf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function hp(){return!1}function Nn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ao:hp,this.isPropagationStopped=hp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=Nn(Ks),fo=Rt({},Ks,{view:0,detail:0}),ey=Nn(fo),Ic,Dc,oa,ac=Rt({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Ic=t.screenX-oa.screenX,Dc=t.screenY-oa.screenY):Dc=Ic=0,oa=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),pp=Nn(ac),ty=Rt({},ac,{dataTransfer:0}),ny=Nn(ty),iy=Rt({},fo,{relatedTarget:0}),kc=Nn(iy),ry=Rt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Nn(ry),ay=Rt({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oy=Nn(ay),ly=Rt({},Ks,{data:0}),mp=Nn(ly),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dy[t])?!!e[t]:!1}function Hf(){return fy}var hy=Rt({},fo,{key:function(t){if(t.key){var e=cy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),py=Nn(hy),my=Rt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Nn(my),gy=Rt({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),xy=Nn(gy),vy=Rt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Nn(vy),yy=Rt({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=Nn(yy),My=[9,13,27,32],Vf=Di&&"CompositionEvent"in window,La=null;Di&&"documentMode"in document&&(La=document.documentMode);var wy=Di&&"TextEvent"in window&&!La,_g=Di&&(!Vf||La&&8<La&&11>=La),xp=" ",vp=!1;function yg(t,e){switch(t){case"keyup":return My.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function Ey(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(vp=!0,xp);case"textInput":return t=e.data,t===xp&&vp?null:t;default:return null}}function by(t,e){if(_s)return t==="compositionend"||!Vf&&yg(t,e)?(t=vg(),dl=Bf=tr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _g&&e.locale!=="ko"?null:e.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ty[t.type]:e==="textarea"}function Mg(t,e,n,i){Q0(i),e=Il(e,"onChange"),0<e.length&&(n=new zf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Wa=null;function Ay(t){Ig(t,0)}function oc(t){var e=Ms(t);if(q0(e))return t}function Cy(t,e){if(t==="change")return e}var wg=!1;if(Di){var Uc;if(Di){var Fc="oninput"in document;if(!Fc){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),Fc=typeof yp.oninput=="function"}Uc=Fc}else Uc=!1;wg=Uc&&(!document.documentMode||9<document.documentMode)}function Sp(){Na&&(Na.detachEvent("onpropertychange",Eg),Wa=Na=null)}function Eg(t){if(t.propertyName==="value"&&oc(Wa)){var e=[];Mg(e,Wa,t,Df(t)),ig(Ay,e)}}function Ry(t,e,n){t==="focusin"?(Sp(),Na=e,Wa=n,Na.attachEvent("onpropertychange",Eg)):t==="focusout"&&Sp()}function Ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Wa)}function Ny(t,e){if(t==="click")return oc(e)}function Py(t,e){if(t==="input"||t==="change")return oc(e)}function Iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:Iy;function ja(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var n=Mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dy(t){var e=Tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wp(n,s);var a=wp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ky=Di&&"documentMode"in document&&11>=document.documentMode,ys=null,td=null,Pa=null,nd=!1;function Ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||ys==null||ys!==Tl(i)||(i=ys,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&ja(Pa,i)||(Pa=i,i=Il(td,"onSelect"),0<i.length&&(e=new zf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Oc={},Ag={};Di&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function lc(t){if(Oc[t])return Oc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ag)return Oc[t]=e[n];return t}var Cg=lc("animationend"),Rg=lc("animationiteration"),Lg=lc("animationstart"),Ng=lc("transitionend"),Pg=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Pg.set(t,e),Wr(e,[t])}for(var Bc=0;Bc<bp.length;Bc++){var zc=bp[Bc],Uy=zc.toLowerCase(),Fy=zc[0].toUpperCase()+zc.slice(1);xr(Uy,"on"+Fy)}xr(Cg,"onAnimationEnd");xr(Rg,"onAnimationIteration");xr(Lg,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Ng,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,U_(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,o,c),s=l}}}if(Cl)throw t=Zu,Cl=!1,Zu=null,t}function St(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(Dg(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),Dg(n,t,i,e)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Ro]){t[Ro]=!0,H0.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ro]||(e[Ro]=!0,Hc("selectionchange",!1,e))}}function Dg(t,e,n,i){switch(xg(e)){case 1:var r=J_;break;case 4:r=Q_;break;default:r=Of}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Rr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ig(function(){var c=s,h=Df(n),p=[];e:{var f=Pg.get(t);if(f!==void 0){var m=zf,v=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":m=py;break;case"focusin":v="focus",m=kc;break;case"focusout":v="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xy;break;case Cg:case Rg:case Lg:m=sy;break;case Ng:m=_y;break;case"scroll":m=ey;break;case"wheel":m=Sy;break;case"copy":case"cut":case"paste":m=oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gp}var w=(e&4)!==0,g=!w&&t==="scroll",d=w?f!==null?f+"Capture":null:f;w=[];for(var x=c,M;x!==null;){M=x;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=za(x,d),S!=null&&w.push(Xa(x,S,M)))),g)break;x=x.return}0<w.length&&(f=new m(f,v,null,n,h),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Yu&&(v=n.relatedTarget||n.fromElement)&&(Rr(v)||v[ki]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Rr(v):null,v!==null&&(g=jr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(w=pp,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(w=gp,S="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:Ms(m),M=v==null?f:Ms(v),f=new w(S,x+"leave",m,n,h),f.target=g,f.relatedTarget=M,S=null,Rr(h)===c&&(w=new w(d,x+"enter",v,n,h),w.target=M,w.relatedTarget=g,S=w),g=S,m&&v)t:{for(w=m,d=v,x=0,M=w;M;M=Zr(M))x++;for(M=0,S=d;S;S=Zr(S))M++;for(;0<x-M;)w=Zr(w),x--;for(;0<M-x;)d=Zr(d),M--;for(;x--;){if(w===d||d!==null&&w===d.alternate)break t;w=Zr(w),d=Zr(d)}w=null}else w=null;m!==null&&Ap(p,f,m,w,!1),v!==null&&g!==null&&Ap(p,g,v,w,!0)}}e:{if(f=c?Ms(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=Cy;else if(_p(f))if(wg)b=Py;else{b=Ly;var T=Ry}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Ny);if(b&&(b=b(t,c))){Mg(p,b,n,h);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Gu(f,"number",f.value)}switch(T=c?Ms(c):window,t){case"focusin":(_p(T)||T.contentEditable==="true")&&(ys=T,td=c,Pa=null);break;case"focusout":Pa=td=ys=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Ep(p,n,h);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Ep(p,n,h)}var C;if(Vf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _s?yg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(_g&&n.locale!=="ko"&&(_s||_!=="onCompositionStart"?_==="onCompositionEnd"&&_s&&(C=vg()):(tr=h,Bf="value"in tr?tr.value:tr.textContent,_s=!0)),T=Il(c,_),0<T.length&&(_=new mp(_,t,null,n,h),p.push({event:_,listeners:T}),C?_.data=C:(C=Sg(n),C!==null&&(_.data=C)))),(C=wy?Ey(t,n):by(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(h=new mp("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=C))}Ig(p,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(t,n),s!=null&&i.unshift(Xa(t,s,r)),s=za(t,e),s!=null&&i.push(Xa(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ap(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=za(n,s),l!=null&&a.unshift(Xa(n,l,o))):r||(l=za(n,s),l!=null&&a.push(Xa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var By=/\r\n?/g,zy=/\u0000|\uFFFD/g;function Cp(t){return(typeof t=="string"?t:""+t).replace(By,`
`).replace(zy,"")}function Lo(t,e,n){if(e=Cp(e),Cp(t)!==e&&n)throw Error(ae(425))}function Dl(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(t){return Rp.resolve(null).then(t).catch(Gy)}:ad;function Gy(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ga(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ci="__reactFiber$"+Zs,Ya="__reactProps$"+Zs,ki="__reactContainer$"+Zs,od="__reactEvents$"+Zs,Wy="__reactListeners$"+Zs,jy="__reactHandles$"+Zs;function Rr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lp(t);t!==null;){if(n=t[ci])return n;t=Lp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[ci]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function cc(t){return t[Ya]||null}var ld=[],ws=-1;function vr(t){return{current:t}}function Mt(t){0>ws||(t.current=ld[ws],ld[ws]=null,ws--)}function _t(t,e){ws++,ld[ws]=t.current,t.current=e}var mr={},on=vr(mr),vn=vr(!1),Ur=mr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function kl(){Mt(vn),Mt(on)}function Np(t,e,n){if(on.current!==mr)throw Error(ae(168));_t(on,e),_t(vn,n)}function kg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,R_(t)||"Unknown",r));return Rt({},n,i)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Ur=on.current,_t(on,t),_t(vn,vn.current),!0}function Pp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=kg(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,Mt(vn),Mt(on),_t(on,t)):Mt(vn),_t(vn,n)}var Ai=null,uc=!1,Wc=!1;function Ug(t){Ai===null?Ai=[t]:Ai.push(t)}function qy(t){uc=!0,Ug(t)}function _r(){if(!Wc&&Ai!==null){Wc=!0;var t=0,e=ft;try{var n=Ai;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,uc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),og(kf,_r),r}finally{ft=e,Wc=!1}}return null}var Es=[],bs=0,Fl=null,Ol=0,kn=[],Un=0,Fr=null,Ci=1,Ri="";function Tr(t,e){Es[bs++]=Ol,Es[bs++]=Fl,Fl=t,Ol=e}function Fg(t,e,n){kn[Un++]=Ci,kn[Un++]=Ri,kn[Un++]=Fr,Fr=t;var i=Ci;t=Ri;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Jn(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function Wf(t){t.return!==null&&(Tr(t,1),Fg(t,1,0))}function jf(t){for(;t===Fl;)Fl=Es[--bs],Es[bs]=null,Ol=Es[--bs],Es[bs]=null;for(;t===Fr;)Fr=kn[--Un],kn[Un]=null,Ri=kn[--Un],kn[Un]=null,Ci=kn[--Un],kn[Un]=null}var Cn=null,An=null,Et=!1,Kn=null;function Og(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(Et){var e=An;if(e){var n=e;if(!Ip(t,e)){if(cd(t))throw Error(ae(418));e=or(n.nextSibling);var i=Cn;e&&Ip(t,e)?Og(i,n):(t.flags=t.flags&-4097|2,Et=!1,Cn=t)}}else{if(cd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,Et=!1,Cn=t}}}function Dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function No(t){if(t!==Cn)return!1;if(!Et)return Dp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=An)){if(cd(t))throw Bg(),Error(ae(418));for(;e;)Og(t,e),e=or(e.nextSibling)}if(Dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?or(t.stateNode.nextSibling):null;return!0}function Bg(){for(var t=An;t;)t=or(t.nextSibling)}function Vs(){An=Cn=null,Et=!1}function qf(t){Kn===null?Kn=[t]:Kn.push(t)}var Xy=Bi.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Po(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kp(t){var e=t._init;return e(t._payload)}function zg(t){function e(d,x){if(t){var M=d.deletions;M===null?(d.deletions=[x],d.flags|=16):M.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=dr(d,x),d.index=0,d.sibling=null,d}function s(d,x,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<x?(d.flags|=2,x):M):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,M,S){return x===null||x.tag!==6?(x=Zc(M,d.mode,S),x.return=d,x):(x=r(x,M),x.return=d,x)}function l(d,x,M,S){var b=M.type;return b===vs?h(d,x,M.props.children,S,M.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$i&&kp(b)===x.type)?(S=r(x,M.props),S.ref=la(d,x,M),S.return=d,S):(S=_l(M.type,M.key,M.props,null,d.mode,S),S.ref=la(d,x,M),S.return=d,S)}function c(d,x,M,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Jc(M,d.mode,S),x.return=d,x):(x=r(x,M.children||[]),x.return=d,x)}function h(d,x,M,S,b){return x===null||x.tag!==7?(x=kr(M,d.mode,S,b),x.return=d,x):(x=r(x,M),x.return=d,x)}function p(d,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Zc(""+x,d.mode,M),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case So:return M=_l(x.type,x.key,x.props,null,d.mode,M),M.ref=la(d,null,x),M.return=d,M;case xs:return x=Jc(x,d.mode,M),x.return=d,x;case $i:var S=x._init;return p(d,S(x._payload),M)}if(Ma(x)||ia(x))return x=kr(x,d.mode,M,null),x.return=d,x;Po(d,x)}return null}function f(d,x,M,S){var b=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return b!==null?null:o(d,x,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case So:return M.key===b?l(d,x,M,S):null;case xs:return M.key===b?c(d,x,M,S):null;case $i:return b=M._init,f(d,x,b(M._payload),S)}if(Ma(M)||ia(M))return b!==null?null:h(d,x,M,S,null);Po(d,M)}return null}function m(d,x,M,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,o(x,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case So:return d=d.get(S.key===null?M:S.key)||null,l(x,d,S,b);case xs:return d=d.get(S.key===null?M:S.key)||null,c(x,d,S,b);case $i:var T=S._init;return m(d,x,M,T(S._payload),b)}if(Ma(S)||ia(S))return d=d.get(M)||null,h(x,d,S,b,null);Po(x,S)}return null}function v(d,x,M,S){for(var b=null,T=null,C=x,_=x=0,A=null;C!==null&&_<M.length;_++){C.index>_?(A=C,C=null):A=C.sibling;var L=f(d,C,M[_],S);if(L===null){C===null&&(C=A);break}t&&C&&L.alternate===null&&e(d,C),x=s(L,x,_),T===null?b=L:T.sibling=L,T=L,C=A}if(_===M.length)return n(d,C),Et&&Tr(d,_),b;if(C===null){for(;_<M.length;_++)C=p(d,M[_],S),C!==null&&(x=s(C,x,_),T===null?b=C:T.sibling=C,T=C);return Et&&Tr(d,_),b}for(C=i(d,C);_<M.length;_++)A=m(C,d,_,M[_],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?_:A.key),x=s(A,x,_),T===null?b=A:T.sibling=A,T=A);return t&&C.forEach(function(I){return e(d,I)}),Et&&Tr(d,_),b}function w(d,x,M,S){var b=ia(M);if(typeof b!="function")throw Error(ae(150));if(M=b.call(M),M==null)throw Error(ae(151));for(var T=b=null,C=x,_=x=0,A=null,L=M.next();C!==null&&!L.done;_++,L=M.next()){C.index>_?(A=C,C=null):A=C.sibling;var I=f(d,C,L.value,S);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(d,C),x=s(I,x,_),T===null?b=I:T.sibling=I,T=I,C=A}if(L.done)return n(d,C),Et&&Tr(d,_),b;if(C===null){for(;!L.done;_++,L=M.next())L=p(d,L.value,S),L!==null&&(x=s(L,x,_),T===null?b=L:T.sibling=L,T=L);return Et&&Tr(d,_),b}for(C=i(d,C);!L.done;_++,L=M.next())L=m(C,d,_,L.value,S),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?_:L.key),x=s(L,x,_),T===null?b=L:T.sibling=L,T=L);return t&&C.forEach(function(B){return e(d,B)}),Et&&Tr(d,_),b}function g(d,x,M,S){if(typeof M=="object"&&M!==null&&M.type===vs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case So:e:{for(var b=M.key,T=x;T!==null;){if(T.key===b){if(b=M.type,b===vs){if(T.tag===7){n(d,T.sibling),x=r(T,M.props.children),x.return=d,d=x;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$i&&kp(b)===T.type){n(d,T.sibling),x=r(T,M.props),x.ref=la(d,T,M),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}M.type===vs?(x=kr(M.props.children,d.mode,S,M.key),x.return=d,d=x):(S=_l(M.type,M.key,M.props,null,d.mode,S),S.ref=la(d,x,M),S.return=d,d=S)}return a(d);case xs:e:{for(T=M.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(d,x.sibling),x=r(x,M.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Jc(M,d.mode,S),x.return=d,d=x}return a(d);case $i:return T=M._init,g(d,x,T(M._payload),S)}if(Ma(M))return v(d,x,M,S);if(ia(M))return w(d,x,M,S);Po(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,M),x.return=d,d=x):(n(d,x),x=Zc(M,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return g}var Gs=zg(!0),Hg=zg(!1),Bl=vr(null),zl=null,Ts=null,Xf=null;function Yf(){Xf=Ts=zl=null}function $f(t){var e=Bl.current;Mt(Bl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){zl=t,Xf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Xf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(zl===null)throw Error(ae(308));Ts=t,zl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Lr=null;function Kf(t){Lr===null?Lr=[t]:Lr.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function Up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,w=o;switch(f=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(m,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(m,p,f):v,f==null)break e;p=Rt({},p,f);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=a,t.lanes=a,t.memoizedState=p}}function Fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var po={},mi=vr(po),$a=vr(po),Ka=vr(po);function Nr(t){if(t===po)throw Error(ae(174));return t}function Jf(t,e){switch(_t(Ka,e),_t($a,t),_t(mi,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}Mt(mi),_t(mi,e)}function Ws(){Mt(mi),Mt($a),Mt(Ka)}function Wg(t){Nr(Ka.current);var e=Nr(mi.current),n=ju(e,t.type);e!==n&&(_t($a,t),_t(mi,n))}function Qf(t){$a.current===t&&(Mt(mi),Mt($a))}var Tt=vr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function eh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var pl=Bi.ReactCurrentDispatcher,qc=Bi.ReactCurrentBatchConfig,Or=0,Ct=null,Ft=null,Vt=null,Gl=!1,Ia=!1,Za=0,Yy=0;function Jt(){throw Error(ae(321))}function th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function nh(t,e,n,i,r,s){if(Or=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?Jy:Qy,t=n(i,r),Ia){s=0;do{if(Ia=!1,Za=0,25<=s)throw Error(ae(301));s+=1,Vt=Ft=null,e.updateQueue=null,pl.current=e1,t=n(i,r)}while(Ia)}if(pl.current=Wl,e=Ft!==null&&Ft.next!==null,Or=0,Vt=Ft=Ct=null,Gl=!1,e)throw Error(ae(300));return t}function ih(){var t=Za!==0;return Za=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Ct.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Vn(){if(Ft===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Vt===null?Ct.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=t;else{if(t===null)throw Error(ae(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?Ct.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ja(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Or&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Ct.lanes|=h,Br|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jg(){}function qg(t,e){var n=Ct,i=Vn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,rh($g.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,Yg.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(ae(349));Or&30||Xg(n,e,r)}return r}function Xg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yg(t,e,n,i){e.value=n,e.getSnapshot=i,Kg(e)&&Zg(t)}function $g(t,e,n){return n(function(){Kg(e)&&Zg(t)})}function Kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function Zg(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function Op(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=Zy.bind(null,Ct,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jg(){return Vn().memoizedState}function ml(t,e,n,i){var r=oi();Ct.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&th(i,a.deps)){r.memoizedState=Qa(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function Bp(t,e){return ml(8390656,8,t,e)}function rh(t,e){return dc(2048,8,t,e)}function Qg(t,e){return dc(4,2,t,e)}function ex(t,e){return dc(4,4,t,e)}function tx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nx(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,tx.bind(null,e,t),n)}function sh(){}function ix(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rx(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sx(t,e,n){return Or&21?(ti(n,e)||(n=ug(),Ct.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function $y(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{ft=n,qc.transition=i}}function ax(){return Vn().memoizedState}function Ky(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ox(t))lx(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=hn();Qn(n,t,i,r),cx(n,e,i)}}function Zy(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ox(t))lx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,Kf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=hn(),Qn(n,t,i,r),cx(n,e,i))}}function ox(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function lx(t,e){Ia=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var Wl={readContext:Hn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},Jy={readContext:Hn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,tx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ky.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:sh,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=$y.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=oi();if(Et){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Gt===null)throw Error(ae(349));Or&30||Xg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bp($g.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,Yg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Gt.identifierPrefix;if(Et){var n=Ri,i=Ci;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qy={readContext:Hn,useCallback:ix,useContext:Hn,useEffect:rh,useImperativeHandle:nx,useInsertionEffect:Qg,useLayoutEffect:ex,useMemo:rx,useReducer:Xc,useRef:Jg,useState:function(){return Xc(Ja)},useDebugValue:sh,useDeferredValue:function(t){var e=Vn();return sx(e,Ft.memoizedState,t)},useTransition:function(){var t=Xc(Ja)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:qg,useId:ax,unstable_isNewReconciler:!1},e1={readContext:Hn,useCallback:ix,useContext:Hn,useEffect:rh,useImperativeHandle:nx,useInsertionEffect:Qg,useLayoutEffect:ex,useMemo:rx,useReducer:Yc,useRef:Jg,useState:function(){return Yc(Ja)},useDebugValue:sh,useDeferredValue:function(t){var e=Vn();return Ft===null?e.memoizedState=t:sx(e,Ft.memoizedState,t)},useTransition:function(){var t=Yc(Ja)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:qg,useId:ax,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=ur(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Qn(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=ur(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Qn(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=ur(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Qn(e,t,i,n),hl(e,t,i))}};function zp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ja(n,i)||!ja(r,s):!0}function ux(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=_n(e)?Ur:on.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=_n(e)?Ur:on.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=C_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var t1=typeof WeakMap=="function"?WeakMap:Map;function dx(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Ed=i),pd(t,e)},n}function fx(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new t1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=m1.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var n1=Bi.ReactCurrentOwner,xn=!1;function dn(t,e,n,i){e.child=t===null?Hg(e,null,n,i):Gs(e,t.child,n,i)}function jp(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=nh(t,e,n,i,s,r),n=ih(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(Et&&n&&Wf(e),e.flags|=1,dn(t,e,i,r),e.child)}function qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hx(t,e,s,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function hx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ja(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return md(t,e,n,i,r)}function px(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Cs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Cs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Cs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Cs,En),En|=i;return dn(t,e,r,n),e.child}function mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=_n(n)?Ur:on.current;return s=Hs(e,s),Us(e,r),n=nh(t,e,n,i,s,r),i=ih(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(Et&&i&&Wf(e),e.flags|=1,dn(t,e,n,r),e.child)}function Xp(t,e,n,i,r){if(_n(n)){var s=!0;Ul(e)}else s=!1;if(Us(e,r),e.stateNode===null)gl(t,e),ux(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=_n(n)?Ur:on.current,c=Hs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Hp(e,a,i,c),Ki=!1;var f=e.memoizedState;a.state=f,Hl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||vn.current||Ki?(typeof h=="function"&&(fd(e,n,h,i),l=e.memoizedState),(o=Ki||zp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Gg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Yn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=_n(n)?Ur:on.current,l=Hs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Hp(e,a,i,l),Ki=!1,f=e.memoizedState,a.state=f,Hl(e,i,a,r);var v=e.memoizedState;o!==p||f!==v||vn.current||Ki?(typeof m=="function"&&(fd(e,n,m,i),v=e.memoizedState),(c=Ki||zp(e,n,c,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){mx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Pp(e,n,!1),Fi(t,e,s);i=e.stateNode,n1.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&Pp(e,n,!0),e.child}function gx(t){var e=t.stateNode;e.pendingContext?Np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Np(t,e.context,!1),Jf(t,e.containerInfo)}function Yp(t,e,n,i,r){return Vs(),qf(r),e.flags|=256,dn(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function xx(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Tt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=mc(a,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=xd,t):ah(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return i1(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ah(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&qf(i),Gs(e,t.child,null,n),t=ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function i1(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(ae(422))),Io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=vd(a),e.memoizedState=xd,s);if(!(e.mode&1))return Io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=$c(s,i,void 0),Io(t,e,a,i)}if(o=(a&t.childLanes)!==0,xn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return fh(),i=$c(Error(ae(421))),Io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=g1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=or(r.nextSibling),Cn=e,Et=!0,Kn=null,t!==null&&(kn[Un++]=Ci,kn[Un++]=Ri,kn[Un++]=Fr,Ci=t.id,Ri=t.overflow,Fr=e),e=ah(e,i.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function vx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function r1(t,e,n){switch(e.tag){case 3:gx(e),Vs();break;case 5:Wg(e);break;case 1:_n(e.type)&&Ul(e);break;case 4:Jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(Bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?xx(t,e,n):(_t(Tt,Tt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);_t(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return vx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,px(t,e,n)}return Fi(t,e,n)}var _x,_d,yx,Sx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};yx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(mi.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dl)}qu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ca(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function s1(t,e,n){var i=e.pendingProps;switch(jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return _n(e.type)&&kl(),Qt(e),null;case 3:return i=e.stateNode,Ws(),Mt(vn),Mt(on),eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Ad(Kn),Kn=null))),_d(t,e),Qt(e),null;case 5:Qf(e);var r=Nr(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)yx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Qt(e),null}if(t=Nr(mi.current),No(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)St(Ea[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":rp(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":ap(i,s),St("invalid",i)}qu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",""+o]):Oa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(n){case"input":Mo(i),sp(i,s,!0);break;case"textarea":Mo(i),op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[Ya]=i,_x(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)St(Ea[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":rp(t,i),r=Hu(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),St("invalid",t);break;case"textarea":ap(t,i),r=Wu(t,i),St("invalid",t);break;default:r=i}qu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?J0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&K0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ba(t,l):typeof l=="number"&&Ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&Lf(t,s,l,a))}switch(n){case"input":Mo(t),sp(t,i,!1);break;case"textarea":Mo(t),op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Nr(Ka.current),Nr(mi.current),No(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Qt(e),null;case 13:if(Mt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&An!==null&&e.mode&1&&!(e.flags&128))Bg(),Vs(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ci]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Kn!==null&&(Ad(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ot===0&&(Ot=3):fh())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Ws(),_d(t,e),t===null&&qa(e.stateNode.containerInfo),Qt(e),null;case 10:return $f(e.type._context),Qt(e),null;case 17:return _n(e.type)&&kl(),Qt(e),null;case 19:if(Mt(Tt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ca(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Vl(t),a!==null){for(e.flags|=128,ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>qs&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return Qt(e),null}else 2*Pt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Tt.current,_t(Tt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function a1(t,e){switch(jf(e),e.tag){case 1:return _n(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Mt(vn),Mt(on),eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(Mt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Tt),null;case 4:return Ws(),null;case 10:return $f(e.type._context),null;case 22:case 23:return dh(),null;case 24:return null;default:return null}}var Do=!1,rn=!1,o1=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var Kp=!1;function l1(t,e){if(id=Nl,t=Tg(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Nl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,g=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?w:Yn(e.type,w),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return v=Kp,Kp=!1,v}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,n,s)}r=r.next}while(r!==i)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mx(t){var e=t.alternate;e!==null&&(t.alternate=null,Mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[Ya],delete e[od],delete e[Wy],delete e[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wx(t){return t.tag===5||t.tag===3||t.tag===4}function Zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var jt=null,$n=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Ex(t,e,n),n=n.sibling}function Ex(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:rn||As(n,e);case 6:var i=jt,r=$n;jt=null,Gi(t,e,n),jt=i,$n=r,jt!==null&&($n?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&($n?(t=jt,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Ga(t)):Gc(jt,n.stateNode));break;case 4:i=jt,r=$n,jt=n.stateNode.containerInfo,$n=!0,Gi(t,e,n),jt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yd(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!rn&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Lt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Gi(t,e,n),rn=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new o1),e.forEach(function(i){var r=x1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,$n=!1;break e;case 3:jt=o.stateNode.containerInfo,$n=!0;break e;case 4:jt=o.stateNode.containerInfo,$n=!0;break e}o=o.return}if(jt===null)throw Error(ae(160));Ex(s,a,r),jt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bx(e,t),e=e.sibling}function bx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ri(t),i&4){try{Da(3,t,t.return),hc(3,t)}catch(w){Lt(t,t.return,w)}try{Da(5,t,t.return)}catch(w){Lt(t,t.return,w)}}break;case 1:Wn(e,t),ri(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Wn(e,t),ri(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Ba(r,"")}catch(w){Lt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&X0(r,s),Xu(o,a);var c=Xu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?J0(r,p):h==="dangerouslySetInnerHTML"?K0(r,p):h==="children"?Ba(r,p):Lf(r,h,p,c)}switch(o){case"input":Vu(r,s);break;case"textarea":Y0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(w){Lt(t,t.return,w)}}break;case 6:if(Wn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){Lt(t,t.return,w)}}break;case 3:if(Wn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(w){Lt(t,t.return,w)}break;case 4:Wn(e,t),ri(t);break;case 13:Wn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ch=Pt())),i&4&&Jp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||h,Wn(e,t),rn=c):Wn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ae=t,h=t.child;h!==null;){for(p=Ae=h;Ae!==null;){switch(f=Ae,m=f.child,f.tag){case 0:case 11:case 14:case 15:Da(4,f,f.return);break;case 1:As(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Lt(i,n,w)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){em(p);continue}}m!==null?(m.return=f,Ae=m):em(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Z0("display",a))}catch(w){Lt(t,t.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){Lt(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wn(e,t),ri(t),i&4&&Jp(t);break;case 21:break;default:Wn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wx(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ba(r,""),i.flags&=-33);var s=Zp(t);wd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Zp(t);Md(t,o,a);break;default:throw Error(ae(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c1(t,e,n){Ae=t,Tx(t)}function Tx(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Do;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=Do;var c=rn;if(Do=a,(rn=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?tm(r):l!==null?(l.return=a,Ae=l):tm(r);for(;s!==null;)Ae=s,Tx(s),s=s.sibling;Ae=r,Do=o,rn=c}Qp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Qp(t)}}function Qp(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ga(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}rn||e.flags&512&&Sd(e)}catch(f){Lt(e,e.return,f)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function em(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function tm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){Lt(e,s,l)}break;case 5:var a=e.return;try{Sd(e)}catch(l){Lt(e,a,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var u1=Math.ceil,jl=Bi.ReactCurrentDispatcher,oh=Bi.ReactCurrentOwner,zn=Bi.ReactCurrentBatchConfig,lt=0,Gt=null,kt=null,Xt=0,En=0,Cs=vr(0),Ot=0,eo=null,Br=0,pc=0,lh=0,ka=null,gn=null,ch=0,qs=1/0,Ti=null,ql=!1,Ed=null,cr=null,ko=!1,nr=null,Xl=0,Ua=0,bd=null,xl=-1,vl=0;function hn(){return lt&6?Pt():xl!==-1?xl:xl=Pt()}function ur(t){return t.mode&1?lt&2&&Xt!==0?Xt&-Xt:Xy.transition!==null?(vl===0&&(vl=ug()),vl):(t=ft,t!==0||(t=window.event,t=t===void 0?16:xg(t.type)),t):1}function Qn(t,e,n,i){if(50<Ua)throw Ua=0,bd=null,Error(ae(185));uo(t,n,i),(!(lt&2)||t!==Gt)&&(t===Gt&&(!(lt&2)&&(pc|=n),Ot===4&&Qi(t,Xt)),yn(t,i),n===1&&lt===0&&!(e.mode&1)&&(qs=Pt()+500,uc&&_r()))}function yn(t,e){var n=t.callbackNode;X_(t,e);var i=Ll(t,t===Gt?Xt:0);if(i===0)n!==null&&up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&up(n),e===1)t.tag===0?qy(nm.bind(null,t)):Ug(nm.bind(null,t)),Vy(function(){!(lt&6)&&_r()}),n=null;else{switch(dg(i)){case 1:n=kf;break;case 4:n=lg;break;case 16:n=Rl;break;case 536870912:n=cg;break;default:n=Rl}n=Dx(n,Ax.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ax(t,e){if(xl=-1,vl=0,lt&6)throw Error(ae(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=Ll(t,t===Gt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=lt;lt|=2;var s=Rx();(Gt!==t||Xt!==e)&&(Ti=null,qs=Pt()+500,Dr(t,e));do try{h1();break}catch(o){Cx(t,o)}while(!0);Yf(),jl.current=s,lt=r,kt!==null?e=0:(Gt=null,Xt=0,e=Ot)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=eo,Dr(t,0),Qi(t,i),yn(t,Pt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!d1(r)&&(e=Yl(t,i),e===2&&(s=Ju(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=eo,Dr(t,0),Qi(t,i),yn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Ar(t,gn,Ti);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=ch+500-Pt(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Ar.bind(null,t,gn,Ti),e);break}Ar(t,gn,Ti);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*u1(i/1960))-i,10<i){t.timeoutHandle=ad(Ar.bind(null,t,gn,Ti),i);break}Ar(t,gn,Ti);break;case 5:Ar(t,gn,Ti);break;default:throw Error(ae(329))}}}return yn(t,Pt()),t.callbackNode===n?Ax.bind(null,t):null}function Td(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=gn,gn=n,e!==null&&Ad(e)),t}function Ad(t){gn===null?gn=t:gn.push.apply(gn,t)}function d1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~lh,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function nm(t){if(lt&6)throw Error(ae(327));Fs();var e=Ll(t,0);if(!(e&1))return yn(t,Pt()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=eo,Dr(t,0),Qi(t,e),yn(t,Pt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,gn,Ti),yn(t,Pt()),null}function uh(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(qs=Pt()+500,uc&&_r())}}function zr(t){nr!==null&&nr.tag===0&&!(lt&6)&&Fs();var e=lt;lt|=1;var n=zn.transition,i=ft;try{if(zn.transition=null,ft=1,t)return t()}finally{ft=i,zn.transition=n,lt=e,!(lt&6)&&_r()}}function dh(){En=Cs.current,Mt(Cs)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hy(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Ws(),Mt(vn),Mt(on),eh();break;case 5:Qf(i);break;case 4:Ws();break;case 13:Mt(Tt);break;case 19:Mt(Tt);break;case 10:$f(i.type._context);break;case 22:case 23:dh()}n=n.return}if(Gt=t,kt=t=dr(t.current,null),Xt=En=e,Ot=0,eo=null,lh=pc=Br=0,gn=ka=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Lr=null}return t}function Cx(t,e){do{var n=kt;try{if(Yf(),pl.current=Wl,Gl){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if(Or=0,Vt=Ft=Ct=null,Ia=!1,Za=0,oh.current=null,n===null||n.return===null){Ot=1,eo=e,kt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Xt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Gp(a);if(m!==null){m.flags&=-257,Wp(m,a,o,s,e),m.mode&1&&Vp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Vp(s,c,e),fh();break e}l=Error(ae(426))}}else if(Et&&o.mode&1){var g=Gp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Wp(g,a,o,s,e),qf(js(l,o));break e}}s=l=js(l,o),Ot!==4&&(Ot=2),ka===null?ka=[s]:ka.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=dx(s,l,e);Up(s,d);break e;case 1:o=l;var x=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(cr===null||!cr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=fx(s,o,e);Up(s,S);break e}}s=s.return}while(s!==null)}Nx(n)}catch(b){e=b,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Rx(){var t=jl.current;return jl.current=Wl,t===null?Wl:t}function fh(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(Br&268435455)&&!(pc&268435455)||Qi(Gt,Xt)}function Yl(t,e){var n=lt;lt|=2;var i=Rx();(Gt!==t||Xt!==e)&&(Ti=null,Dr(t,e));do try{f1();break}catch(r){Cx(t,r)}while(!0);if(Yf(),lt=n,jl.current=i,kt!==null)throw Error(ae(261));return Gt=null,Xt=0,Ot}function f1(){for(;kt!==null;)Lx(kt)}function h1(){for(;kt!==null&&!O_();)Lx(kt)}function Lx(t){var e=Ix(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Nx(t):kt=e,oh.current=null}function Nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a1(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,kt=null;return}}else if(n=s1(n,e,En),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Ar(t,e,n){var i=ft,r=zn.transition;try{zn.transition=null,ft=1,p1(t,e,n,i)}finally{zn.transition=r,ft=i}return null}function p1(t,e,n,i){do Fs();while(nr!==null);if(lt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y_(t,s),t===Gt&&(kt=Gt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,Dx(Rl,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var a=ft;ft=1;var o=lt;lt|=4,oh.current=null,l1(t,n),bx(n,t),Dy(rd),Nl=!!id,rd=id=null,t.current=n,c1(n),B_(),lt=o,ft=a,zn.transition=s}else t.current=n;if(ko&&(ko=!1,nr=t,Xl=r),s=t.pendingLanes,s===0&&(cr=null),V_(n.stateNode),yn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Ed,Ed=null,t;return Xl&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===bd?Ua++:(Ua=0,bd=t):Ua=0,_r(),null}function Fs(){if(nr!==null){var t=dg(Xl),e=zn.transition,n=ft;try{if(zn.transition=null,ft=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Xl=0,lt&6)throw Error(ae(331));var r=lt;for(lt|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:Da(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ae=p;else for(;Ae!==null;){h=Ae;var f=h.sibling,m=h.return;if(Mx(h),h===c){Ae=null;break}if(f!==null){f.return=m,Ae=f;break}Ae=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ae=d;break e}Ae=s.return}}var x=t.current;for(Ae=x;Ae!==null;){a=Ae;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Ae=M;else e:for(a=x;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:hc(9,o)}}catch(b){Lt(o,o.return,b)}if(o===a){Ae=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ae=S;break e}Ae=o.return}}if(lt=r,_r(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{ft=n,zn.transition=e}}return!1}function im(t,e,n){e=js(n,e),e=dx(t,e,1),t=lr(t,e,1),e=hn(),t!==null&&(uo(t,1,e),yn(t,e))}function Lt(t,e,n){if(t.tag===3)im(t,t,n);else for(;e!==null;){if(e.tag===3){im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=js(n,t),t=fx(e,t,1),e=lr(e,t,1),t=hn(),e!==null&&(uo(e,1,t),yn(e,t));break}}e=e.return}}function m1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Xt&n)===n&&(Ot===4||Ot===3&&(Xt&130023424)===Xt&&500>Pt()-ch?Dr(t,0):lh|=n),yn(t,e)}function Px(t,e){e===0&&(t.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var n=hn();t=Ui(t,e),t!==null&&(uo(t,e,n),yn(t,n))}function g1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Px(t,n)}function x1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Px(t,n)}var Ix;Ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,r1(t,e,n);xn=!!(t.flags&131072)}else xn=!1,Et&&e.flags&1048576&&Fg(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Hs(e,on.current);Us(e,n),r=nh(null,e,i,t,r,n);var s=ih();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zf(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Wf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_1(i),t=Yn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=Xp(null,e,i,t,n);break e;case 11:e=jp(null,e,i,t,n);break e;case 14:e=qp(null,e,i,Yn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Xp(t,e,i,r,n);case 3:e:{if(gx(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),Hl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ae(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ae(424)),e),e=Yp(t,e,i,n,r);break e}else for(An=or(e.stateNode.containerInfo.firstChild),Cn=e,Et=!0,Kn=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=Fi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sd(i,r)?a=null:s!==null&&sd(i,s)&&(e.flags|=32),mx(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return xx(t,e,n);case 4:return Jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),jp(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(Bl,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!vn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=Hn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),qp(t,e,i,r,n);case 15:return hx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),gl(t,e),e.tag=1,_n(i)?(t=!0,Ul(e)):t=!1,Us(e,n),ux(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return vx(t,e,n);case 22:return px(t,e,n)}throw Error(ae(156,e.tag))};function Dx(t,e){return og(t,e)}function v1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new v1(t,e,n,i)}function hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _1(t){if(typeof t=="function")return hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===If)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return kr(n.children,r,s,e);case Nf:a=8,r|=8;break;case Fu:return t=Bn(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case Ou:return t=Bn(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case Bu:return t=Bn(19,n,e,r),t.elementType=Bu,t.lanes=s,t;case W0:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:a=10;break e;case G0:a=9;break e;case Pf:a=11;break e;case If:a=14;break e;case $i:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function y1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ph(t,e,n,i,r,s,a,o,l){return t=new y1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function S1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function kx(t){if(!t)return mr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(_n(n))return kg(t,n,e)}return e}function Ux(t,e,n,i,r,s,a,o,l){return t=ph(n,i,!0,t,r,s,a,o,l),t.context=kx(null),n=t.current,i=hn(),r=ur(n),s=Ni(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,uo(t,r,i),yn(t,i),t}function gc(t,e,n,i){var r=e.current,s=hn(),a=ur(r);return n=kx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Qn(t,r,a,s),hl(t,r,a)),a}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mh(t,e){rm(t,e),(t=t.alternate)&&rm(t,e)}function M1(){return null}var Fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function gh(t){this._internalRoot=t}xc.prototype.render=gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));gc(t,e,null,null)};xc.prototype.unmount=gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){gc(null,t,null,null)}),e[ki]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&gg(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sm(){}function w1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$l(a);s.call(c)}}var a=Ux(e,i,t,0,null,!1,!1,"",sm);return t._reactRootContainer=a,t[ki]=a.current,qa(t.nodeType===8?t.parentNode:t),zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=$l(l);o.call(c)}}var l=ph(t,0,!1,null,null,!1,!1,"",sm);return t._reactRootContainer=l,t[ki]=l.current,qa(t.nodeType===8?t.parentNode:t),zr(function(){gc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=$l(a);o.call(l)}}gc(e,a,t,r)}else a=w1(n,e,t,r,i);return $l(a)}fg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Uf(e,n|1),yn(e,Pt()),!(lt&6)&&(qs=Pt()+500,_r()))}break;case 13:zr(function(){var i=Ui(t,1);if(i!==null){var r=hn();Qn(i,t,1,r)}}),mh(t,1)}};Ff=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=hn();Qn(e,t,134217728,n)}mh(t,134217728)}};hg=function(t){if(t.tag===13){var e=ur(t),n=Ui(t,e);if(n!==null){var i=hn();Qn(n,t,e,i)}mh(t,e)}};pg=function(){return ft};mg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};$u=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cc(i);if(!r)throw Error(ae(90));q0(i),Vu(i,r)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};tg=uh;ng=zr;var E1={usingClientEntryPoint:!1,Events:[ho,Ms,cc,Q0,eg,uh]},ua={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b1={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||M1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{sc=Uo.inject(b1),pi=Uo}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(ae(200));return S1(t,e,null,n)};Ln.createRoot=function(t,e){if(!xh(t))throw Error(ae(299));var n=!1,i="",r=Fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ph(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,qa(t.nodeType===8?t.parentNode:t),new gh(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return zr(t)};Ln.hydrate=function(t,e,n){if(!vc(e))throw Error(ae(200));return _c(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ux(e,null,t,1,n??null,r,!1,s,a),t[ki]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};Ln.render=function(t,e,n){if(!vc(e))throw Error(ae(200));return _c(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!vc(t))throw Error(ae(40));return t._reactRootContainer?(zr(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Ln.unstable_batchedUpdates=uh;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return _c(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox)}catch(t){console.error(t)}}Ox(),O0.exports=Ln;var T1=O0.exports,am=T1;ku.createRoot=am.createRoot,ku.hydrateRoot=am.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},to.apply(null,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const om="popstate";function A1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Cd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Kl(r)}return R1(e,n,null,t)}function Ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function C1(){return Math.random().toString(36).substr(2,8)}function lm(t,e){return{usr:t.state,key:t.key,idx:e}}function Cd(t,e,n,i){return n===void 0&&(n=null),to({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Js(e):e,{state:n,key:e&&e.key||i||C1()})}function Kl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Js(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function R1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ir.Pop,l=null,c=h();c==null&&(c=0,a.replaceState(to({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function p(){o=ir.Pop;let g=h(),d=g==null?null:g-c;c=g,l&&l({action:o,location:w.location,delta:d})}function f(g,d){o=ir.Push;let x=Cd(w.location,g,d);c=h()+1;let M=lm(x,c),S=w.createHref(x);try{a.pushState(M,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:o,location:w.location,delta:1})}function m(g,d){o=ir.Replace;let x=Cd(w.location,g,d);c=h();let M=lm(x,c),S=w.createHref(x);a.replaceState(M,"",S),s&&l&&l({action:o,location:w.location,delta:0})}function v(g){let d=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof g=="string"?g:Kl(g);return x=x.replace(/ $/,"%20"),Ut(d,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,d)}let w={get action(){return o},get location(){return t(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(om,p),l=g,()=>{r.removeEventListener(om,p),l=null}},createHref(g){return e(r,g)},createURL:v,encodeLocation(g){let d=v(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:m,go(g){return a.go(g)}};return w}var cm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cm||(cm={}));function L1(t,e,n){return n===void 0&&(n="/"),N1(t,e,n)}function N1(t,e,n,i){let r=typeof e=="string"?Js(e):e,s=vh(r.pathname||"/",n);if(s==null)return null;let a=zx(t);P1(a);let o=null,l=W1(s);for(let c=0;o==null&&c<a.length;++c)o=H1(a[c],l);return o}function zx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ut(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=fr([i,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ut(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zx(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:B1(c,s.index),routesMeta:h})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Hx(s.path))r(s,a,l)}),e}function Hx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Hx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function P1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const I1=/^:[\w-]+$/,D1=3,k1=2,U1=1,F1=10,O1=-2,um=t=>t==="*";function B1(t,e){let n=t.split("/"),i=n.length;return n.some(um)&&(i+=O1),e&&(i+=k1),n.filter(r=>!um(r)).reduce((r,s)=>r+(I1.test(s)?D1:s===""?U1:F1),i)}function z1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function H1(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=V1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),f=l.route;if(!p)return null;Object.assign(r,p.params),a.push({params:r,pathname:fr([s,p.pathname]),pathnameBase:X1(fr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=fr([s,p.pathnameBase]))}return a}function V1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=G1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,h,p)=>{let{paramName:f,isOptional:m}=h;if(f==="*"){let w=o[p]||"";a=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=o[p];return m&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function G1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function W1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function j1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Js(t):t,s;return n?(n=Wx(n),n.startsWith("/")?s=dm(n.substring(1),"/"):s=dm(n,e)):s=e,{pathname:s,search:Y1(i),hash:$1(r)}}function dm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Qc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vx(t,e){let n=q1(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Gx(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Js(t):(r=to({},t),Ut(!r.pathname||!r.pathname.includes("?"),Qc("?","pathname","search",r)),Ut(!r.pathname||!r.pathname.includes("#"),Qc("#","pathname","hash",r)),Ut(!r.search||!r.search.includes("#"),Qc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let p=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}o=p>=0?e[p]:"/"}let l=j1(r,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Wx=t=>t.replace(/\/\/+/g,"/"),fr=t=>Wx(t.join("/")),X1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function K1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jx=["post","put","patch","delete"];new Set(jx);const Z1=["get",...jx];new Set(Z1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},no.apply(null,arguments)}const _h=te.createContext(null),J1=te.createContext(null),qr=te.createContext(null),yc=te.createContext(null),Xr=te.createContext({outlet:null,matches:[],isDataRoute:!1}),qx=te.createContext(null);function Q1(t,e){let{relative:n}=e===void 0?{}:e;mo()||Ut(!1);let{basename:i,navigator:r}=te.useContext(qr),{hash:s,pathname:a,search:o}=Yx(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:fr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function mo(){return te.useContext(yc)!=null}function Qs(){return mo()||Ut(!1),te.useContext(yc).location}function Xx(t){te.useContext(qr).static||te.useLayoutEffect(t)}function eS(){let{isDataRoute:t}=te.useContext(Xr);return t?hS():tS()}function tS(){mo()||Ut(!1);let t=te.useContext(_h),{basename:e,future:n,navigator:i}=te.useContext(qr),{matches:r}=te.useContext(Xr),{pathname:s}=Qs(),a=JSON.stringify(Vx(r,n.v7_relativeSplatPath)),o=te.useRef(!1);return Xx(()=>{o.current=!0}),te.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let p=Gx(c,JSON.parse(a),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:fr([e,p.pathname])),(h.replace?i.replace:i.push)(p,h.state,h)},[e,i,a,s,t])}function Yx(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=te.useContext(qr),{matches:r}=te.useContext(Xr),{pathname:s}=Qs(),a=JSON.stringify(Vx(r,i.v7_relativeSplatPath));return te.useMemo(()=>Gx(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function nS(t,e){return iS(t,e)}function iS(t,e,n,i){mo()||Ut(!1);let{navigator:r}=te.useContext(qr),{matches:s}=te.useContext(Xr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Qs(),h;if(e){var p;let g=typeof e=="string"?Js(e):e;l==="/"||(p=g.pathname)!=null&&p.startsWith(l)||Ut(!1),h=g}else h=c;let f=h.pathname||"/",m=f;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(g.length).join("/")}let v=L1(t,{pathname:m}),w=lS(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:fr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:fr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&w?te.createElement(yc.Provider,{value:{location:no({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ir.Pop}},w):w}function rS(){let t=fS(),e=K1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),n?te.createElement("pre",{style:r},n):null,null)}const sS=te.createElement(rS,null);class aS extends te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?te.createElement(Xr.Provider,{value:this.props.routeContext},te.createElement(qx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oS(t){let{routeContext:e,match:n,children:i}=t,r=te.useContext(_h);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),te.createElement(Xr.Provider,{value:e},i)}function lS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let h=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);h>=0||Ut(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:f,errors:m}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,p,f)=>{let m,v=!1,w=null,g=null;n&&(m=o&&p.route.id?o[p.route.id]:void 0,w=p.route.errorElement||sS,l&&(c<0&&f===0?(pS("route-fallback"),v=!0,g=null):c===f&&(v=!0,g=p.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,f+1)),x=()=>{let M;return m?M=w:v?M=g:p.route.Component?M=te.createElement(p.route.Component,null):p.route.element?M=p.route.element:M=h,te.createElement(oS,{match:p,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:M})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?te.createElement(aS,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:x(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):x()},null)}var $x=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($x||{}),Kx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Kx||{});function cS(t){let e=te.useContext(_h);return e||Ut(!1),e}function uS(t){let e=te.useContext(J1);return e||Ut(!1),e}function dS(t){let e=te.useContext(Xr);return e||Ut(!1),e}function Zx(t){let e=dS(),n=e.matches[e.matches.length-1];return n.route.id||Ut(!1),n.route.id}function fS(){var t;let e=te.useContext(qx),n=uS(),i=Zx();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function hS(){let{router:t}=cS($x.UseNavigateStable),e=Zx(Kx.UseNavigateStable),n=te.useRef(!1);return Xx(()=>{n.current=!0}),te.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,no({fromRouteId:e},s)))},[t,e])}const fm={};function pS(t,e,n){fm[t]||(fm[t]=!0)}function mS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Rd(t){Ut(!1)}function gS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ir.Pop,navigator:s,static:a=!1,future:o}=t;mo()&&Ut(!1);let l=e.replace(/^\/*/,"/"),c=te.useMemo(()=>({basename:l,navigator:s,static:a,future:no({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Js(i));let{pathname:h="/",search:p="",hash:f="",state:m=null,key:v="default"}=i,w=te.useMemo(()=>{let g=vh(h,l);return g==null?null:{location:{pathname:g,search:p,hash:f,state:m,key:v},navigationType:r}},[l,h,p,f,m,v,r]);return w==null?null:te.createElement(qr.Provider,{value:c},te.createElement(yc.Provider,{children:n,value:w}))}function xS(t){let{children:e,location:n}=t;return nS(Ld(e),n)}new Promise(()=>{});function Ld(t,e){e===void 0&&(e=[]);let n=[];return te.Children.forEach(t,(i,r)=>{if(!te.isValidElement(i))return;let s=[...e,r];if(i.type===te.Fragment){n.push.apply(n,Ld(i.props.children,s));return}i.type!==Rd&&Ut(!1),!i.props.index||!i.props.children||Ut(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Ld(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Nd.apply(null,arguments)}function vS(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function _S(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yS(t,e){return t.button===0&&(!e||e==="_self")&&!_S(t)}const SS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],MS="6";try{window.__reactRouterVersion=MS}catch{}const wS="startTransition",hm=m_[wS];function ES(t){let{basename:e,children:n,future:i,window:r}=t,s=te.useRef();s.current==null&&(s.current=A1({window:r,v5Compat:!0}));let a=s.current,[o,l]=te.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},h=te.useCallback(p=>{c&&hm?hm(()=>l(p)):l(p)},[l,c]);return te.useLayoutEffect(()=>a.listen(h),[a,h]),te.useEffect(()=>mS(i),[i]),te.createElement(gS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const bS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=te.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:p}=e,f=vS(e,SS),{basename:m}=te.useContext(qr),v,w=!1;if(typeof c=="string"&&TS.test(c)&&(v=c,bS))try{let M=new URL(window.location.href),S=c.startsWith("//")?new URL(M.protocol+c):new URL(c),b=vh(S.pathname,m);S.origin===M.origin&&b!=null?c=b+S.search+S.hash:w=!0}catch{}let g=Q1(c,{relative:r}),d=AS(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:p});function x(M){i&&i(M),M.defaultPrevented||d(M)}return te.createElement("a",Nd({},f,{href:v||g,onClick:w||s?i:x,ref:n,target:l}))});var pm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pm||(pm={}));var mm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mm||(mm={}));function AS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=eS(),c=Qs(),h=Yx(t,{relative:a});return te.useCallback(p=>{if(yS(p,n)){p.preventDefault();let f=i!==void 0?i:Kl(c)===Kl(h);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,h,i,r,n,t,s,a,o])}const Jx=te.createContext(),CS={name:"Manny Anchan",title:"Motivational Speaker & Founder, Happiness Quotient Global (HQGPL)",tagline:"This Is How The Good Companies Find The Good Company",philosophy:"Advocates simple living, positive feeling, transformational thinking. Resides in Mumbai, devoted father, and pet enthusiast.",experience:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB.",education:"Harvard & Columbia Business School alum.",globalExposure:"Worked and lived in Asia, Africa, Europe, & North America. Multicultural adaptability.",happinessExpertise:"Leading figure in the study and promotion of happiness, exploring concepts from Ikigai, Hygge, Lagom, Sisu, to Gross National Happiness.",purposeResearch:"Conducted extensive research on purpose-driven concepts and their implications in various cultural contexts.",communityEngagement:["Global Happiness Advocate","Mentor at startup school","Educational committee member","Adjunct professor","Delivered impactful TEDx Talks"],tedxTalks:[{city:"Allahabad",event:"TEDx - Katra"},{city:"Pune",event:"TEDx ElPro Intl School"},{city:"Jaipur",event:"TEDx Man Sagar Lake"},{city:"Vadodara",event:"TEDx Navrachana International"}],contactNumber:"+91 97001 00800",website:"https://happinesssamurai.com"},RS=[{id:"ikigai",title:"Ikigai",desc:"Discover your purpose, and find joy in the intersection of what you love, what you are good at, what the world needs, and what you can be paid for."},{id:"finance",title:"Finance",desc:"Foster financial literacy, make informed decisions, and create a secure future through effective money management."},{id:"stress",title:"Stress Management",desc:"Find peace and resilience amidst life's challenges, and stay equipped with effective coping strategies for healthier well-being."},{id:"fitness",title:"Fitness",desc:"Engage in regular physical activity, challenge your limits, and enhance your strength, endurance, and overall fitness."},{id:"leadership",title:"Leadership",desc:"Unlock potential by focusing on essential skills, effective communication, and a collaborative growth culture."},{id:"values",title:"Values",desc:"Embracing values that prioritize holistic practices, nurturing both the mind and body, fosters a balance essential for overall well-being and recovery."},{id:"balance",title:"Balance",desc:"Work-life balance is vital for well-being, reducing stress and burnout while enhancing overall life satisfaction and productivity."},{id:"meditation",title:"Meditation",desc:"Cultivate inner peace, reduce stress, and enhance mindfulness through focused breathing and present-moment awareness."},{id:"psychology-wealth",title:"Psychology of Wealth",desc:"Unlock mindset shifts for lasting financial confidence, abundance, and smarter money choices."},{id:"habit-building",title:"Habit Building",desc:"Empowering you to cultivate positive routines and achieve lasting personal growth."},{id:"healing",title:"Healing",desc:"Embrace holistic practices, nurture mind and body, and create a harmonious balance for overall wellbeing and recovery."},{id:"nutrition",title:"Nutrition",desc:"Nourish your body with wholesome foods, fuel your vitality, and cultivate a healthy relationship with what you eat."}],LS=[{title:"Enhances Intrinsic Motivation",desc:"Holistic development nurtures a positive self-image, aligning personal values with actions and fueling intrinsic motivation."},{title:"Increased Employee Productivity",desc:"Research suggests that employees who participate in workplace wellness programs tend to be more productive."},{title:"Improved Employee Retention",desc:"Wellness programs contribute to a positive work environment, fostering employee loyalty and reducing turnover."},{title:"Enhanced Employee Engagement",desc:"Engaged employees are more committed to their work, leading to improved job satisfaction and performance."}],NS=["Keeps interest","Promotes Participation","Enhances Engagement","Boosts Productivity","Fosters Culture","Boosts Speaker Confidence","Increases Collaboration","Strengthens Culture","Enhances Memory Retention","Improves Understanding"],PS=["Maharashtra","Goa","Uttar Pradesh","Bihar","Haryana","Punjab","Rajasthan","Madhya Pradesh","Karnataka","Tamil Nadu","Jammu","Gujarat","Uttarakhand","West Bengal","Meghalaya","Assam"],IS=["Mauritius","Bhutan","Finland","UAE","Costa Rica","Sri Lanka","Tanzania","Oman","Japan"],DS=[{publication:"Mid-Day",title:"Mid-Day Article",desc:"Manny Anchan, best selling author unveils his new book Happiness Samurai featuring Bollywood Superstar John Abraham's beautiful and heartfelt candid foreword."},{publication:"Influencive",title:"Influencive Article",desc:"Manny Anchan the author, entrepreneur and TEDx speaker from India who is inspiring impressionable minds with his recent TEDx talk, known as the Happiness Maverick of India."},{publication:"Fox Interviewer",title:"Fox Interviewer Article",desc:"Profiling Manny Anchan's global corporate leadership methodology and international well-being roadmaps."},{publication:"Net News Ledger",title:"Net News Ledger Article",desc:"Global perspective on purpose-driven leadership and eudaimonic transformation."},{publication:"US Times Now",title:"US Times Now Article",desc:"Best selling author and Happiness Maverick Manny Anchan speaking at TEDx about his journey."},{publication:"PressReader",title:"PressReader Global Feature",desc:"Feature on enterprise employee engagement, mental health, and functional well-being across Asia."},{publication:"News Track Live",title:"News Track Live Article",desc:"In-depth coverage of the 100-day Ikigai program and nationwide wellness footprint."}],kS={corporate:["TATA Motors","Cipla","HDFC Life","HDFC ERGO","Barclays","TATA Capital","TATA AIG","Ageas Federal Insurance","IDFC First Bank","Axis Bank","SBI Life","YES Bank","Aditya Birla Capital","Mahindra","Tricolite","Hyundai Electronics","Reliance","Entrepreneurs' Organization","SMFG India","UGRO Capital","Absa Bank","Shapoorji Pallonji","Turtlemint Pro","Saint-Gobain","Bandhan Mutual Fund","Mango Sciences","Motilal Oswal","Amana Bank","Primarc","Skipper Limited","Amal Embroidery","Alizz Islamic Bank","NBO (Oman)","BankDhofar","APAR Industries","NetApp","Burns & McDonnell","Indigo Airlines","Uniworld Logistics"],institutions:["Harvard Club (Sri Lanka X APAC)","IIM","Masters' Union","IISM (Sports Management)","Indira Group","Podar International","TCS iON","MET Institute","ASM Group","StartupYou","Aditya Birla World Academy","Global Indian International School (Dubai)","IES MCRC","Amber Valley","Indus International School","Jamnabai Narsee","Oberoi International","Mondrian High","Safari Kid","Pathways World School"]},gm=[{id:"f-meera",name:"Meera Chauhan",category:"Mindfulness",title:"Director at Tricolite Electrical Industries | Warwick & Yale Fellow",bio:"Meera Chauhan is a Director with Tricolite Electrical Industries. She has done her Master's Degree in Industrial Relations and Personnel Management from Warwick Business School and also a mid career Fellowship at Yale University.",image:"/team/meera-chauhan.png",active:!0,featured:!0},{id:"f-anil",name:"Anil Kumar",category:"Personal Leadership",title:"Recipient of 'SHAURYA CHAKRA' | LBS & ISB Alumnus",bio:"Anil, recipient of 'SHAURYA CHAKRA' award is a former military officer, motivational speaker, leadership expert, and fundraiser for alternative investment funds. Alumnus of London Business School and ISB.",image:"/team/anil-kumar.png",active:!0,featured:!0},{id:"f-carolin",name:"Carolin Nytra",category:"Spirituality",title:"Retired German Olympic Hurdler & Holistic Well-Being Advocate",bio:"Carolin Nytra is a retired German Olympic hurdler, now a holistic well-being advocate. Now, a Cacao Priestess, she empowers others through mindset and spiritual guidance.",image:"/team/carolin-nytra.png",active:!0,featured:!0},{id:"f-ajay",name:"Ajay Srinivasan",category:"Business Leadership",title:"Seasoned Business Leader & Strategic Advisor",bio:"Ajay Srinivasan is a seasoned business leader with a diverse career, founding and expanding businesses in India and abroad, showcasing leadership across different organizational structures and industries.",image:"/team/ajay-srinivasan.png",active:!0,featured:!0},{id:"f-rupinder",name:"Rupinder Singh",category:"Sports",title:"Olympic Field Hockey Star & International Champion",bio:"Rupinder Pal Singh, born on Nov 11, 1990, in Faridkot, Punjab, is an Indian hockey star known for powerful drag-flicks, international victories, and inspiring young players.",image:"/team/rupinder-singh.png",active:!0,featured:!0},{id:"f-parvej",name:"Parvej Mantrri",category:"Fit Panda",title:"Versatile Entertainer & Celebrity Fitness Coach",bio:"Parvej, a versatile entertainer, excels as an actor, host, voice-over artist, and celebrity fitness coach, earning acclaim in various roles.",image:"/team/parvej-mantrri.png",active:!0,featured:!0},{id:"f-bhakti",name:"Bhakti Kapoor",category:"HealthTech professional",title:"Founder of HEALTHY HIGH & Nutritional Wellness Advisor",bio:"Bhakti is the founder of HEALTHY HIGH a virtual nutrition counselling platform. She is also on the advisory panel for Vitalyse wellness strips and Green Protein.",image:"/team/bhakti-kapoor.png",active:!0,featured:!0},{id:"f-bijay",name:"Bijay Anand",category:"Kundalini Yoga",title:"Esteemed Kundalini Yoga Instructor & Holistic Wellness Mentor",bio:"Esteemed Kundalini Yoga instructor Bijay Anand fosters holistic wellness, integrating ancient wisdom and contemporary insights for a balanced, transformative practice.",image:"/team/bijay-anand.png",active:!0,featured:!0},{id:"f-rajiv",name:"Rajiv Gupta",category:"Japanese Life lessons",title:"Manufacturing CEO & Author | HBS Alumnus & Ex-VP Honda Cars",bio:`Mr. Gupta is currently the CEO of a leading manufacturing company. Author of "The Good Indian Employee's Guide to Surviving a Lala Company." Ex-VP and National Head of Sales & Marketing at Honda Cars. Alumnus of HBS.`,image:"/team/rajiv-gupta.png",active:!0,featured:!0},{id:"f-soha",name:"Soha Ali Khan",category:"Parenting",title:"Acclaimed Author & Modern Family Mentor | Oxford & LSE Alumna",bio:'Soha Ali Khan, Indian actress from a noble lineage, blends regal charm with cinematic brilliance, symbolizing cultural richness in Bollywood. She also the author to the book "The Perils of being Moderately Famous"',image:"/team/soha-ali-khan.png",active:!0,featured:!0},{id:"f-sanjay",name:"Sanjay Arora",category:"Entrepreneurship Leader",title:"Healthcare Pioneer & Founder of Suburban Diagnostics",bio:"Dr. Sanjay Arora, healthcare pioneer, founded Suburban Diagnostics, prioritizing precision and patient care. Awards recognize his leadership, innovation, and entrepreneurial excellence.",image:"/team/sanjay-arora.png",active:!0,featured:!0},{id:"f-bharati",name:"Bharati Jaisingh",category:"Well Being Practitioner",title:"Well Being Practitioner & Founder of IDHA",bio:"Bharati K. Jaisingh, Well Being Practitioner and founder of IDHA, utilizes dance and expressive arts to foster therapeutic experiences for individuals and communities.",image:"/team/bharati-jaisingh.png",active:!0,featured:!0},{id:"f-manny",name:"Manny Anchan",category:"Personal Leadership",title:"Founder & Chief Happiness Officer | Harvard & Columbia Alum",bio:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Researched Ikigai, Hygge, Lagom, Sisu, and Gross National Happiness.",image:"/team/manny-anchan.png",active:!0,featured:!0}],xm=[{id:"c1",title:"Finding Your Ikigai",duration:"100 Days",price:"₹4,999",enrollmentUrl:"#enroll",icon:"compass",description:"Discover your core purpose by harmonizing what you love, what you excel at, what the world needs, and what sustains you financially.",modules:14,enrolledCount:1840,active:!0},{id:"c2",title:"Passion Quest",duration:"100 Days",price:"₹4,999",enrollmentUrl:"#enroll",icon:"sparkles",description:"Systematically explore intrinsic motivators, eliminate self-sabotaging friction, and architect a lifestyle aligned with your highest authentic interests.",modules:12,enrolledCount:1250,active:!0},{id:"c3",title:"Happiness in Money (Psychology of Wealth)",duration:"100 Days",price:"₹4,999",enrollmentUrl:"#enroll",icon:"wallet",description:"Unlock mindset shifts for lasting financial confidence, abundance, and smarter money choices. Decode the neuro-economics of contentment.",modules:16,enrolledCount:2190,active:!0},{id:"c4",title:"The Resilience & Stress Blueprint",duration:"100 Days",price:"₹5,999",enrollmentUrl:"#enroll",icon:"shield",description:"Find peace and resilience amidst life's challenges, equipped with effective coping strategies, somatic breathing, and neuroplastic habit formation.",modules:15,enrolledCount:960,active:!0}],vm=[{id:"b1",year:"2020",title:"Happiness Samurai",subtitle:"The Discipline of Purpose",description:"The foundational philosophy linking ancient samurai mental fortitude with modern workplace joy.",cover:"/books/4.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Defining book of the moment. A must read!",endorser:"John Abraham",featured:!0},{id:"b2",year:"2021",title:"Happiness Memoir",subtitle:"Lessons from 25 Years of Global Leadership",description:"A candid reflection on executive burnout in corporate towers at GE Capital, Barclays & ABN AMRO, and the path to genuine eudaimonia.",cover:"/books/2.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Raw, honest, and profoundly transformative."},{id:"b3",year:"2022",title:"Happiness Conversations",subtitle:"Dialogue with Titans & Thinkers",description:"Interviews with world champions, CEOs, and spiritual masters exploring concepts from Ikigai, Hygge, Lagom, to Gross National Happiness.",cover:"/books/5.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Every chapter holds a gem of practical wisdom."},{id:"b4",year:"2023",title:"Happiness & Money",subtitle:"Psychology of Wealth & Stewardship",description:"Foster financial literacy, make informed decisions, and create a secure future through effective money management and mindset shifts.",cover:"/books/3.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Demystifies financial anxiety with elegance and clarity."},{id:"b5",year:"2024",title:"Happiness Decoded",subtitle:"The HQ Functional Enhancement Model",description:"The definitive clinical and corporate framework unveiling the five levers of behavioral transformation.",cover:"/books/1.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"The ultimate operating system for modern business vitality."},{id:"b6",year:"2025",title:"Happiness Habits",subtitle:"Daily Micro-Rituals for Peak Performance",description:"Empowering leaders to cultivate positive routines and achieve lasting personal and organizational growth.",cover:"/books/6.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Daily micro-rituals that separate good companies from great companies.",endorser:"John Abraham",featured:!0}],_m=[{id:"yt-SF72EvyPp_s",youtubeId:"SF72EvyPp_s",title:"Building Purposeful Ventures & Strategic Narrative",guest:"Rachna Baruah",category:"Founder, Madchatter | HBS Alum",date:"Season 2026",duration:"46:57",summary:"HQx podcast Season 2026 featuring Rachna Baruah, Founder of Madchatter and Harvard Business School alum, exploring high performance, mental resilience, and purpose-driven branding.",thumbnail:"https://i.ytimg.com/vi/SF72EvyPp_s/hqdefault.jpg"},{id:"yt-DP-Yr5vdr14",youtubeId:"DP-Yr5vdr14",title:"Mindful Gastronomy, Creative Energy & Wellness",guest:"Master Chef Vicky Ratnani",category:"Celebrity Master Chef & Author",date:"Season 2026",duration:"46:34",summary:"Celebrated culinary author and Master Chef Vicky Ratnani explores nutrition, creative stamina, and conscious living in high-stress culinary environments.",thumbnail:"https://i.ytimg.com/vi/DP-Yr5vdr14/hqdefault.jpg"},{id:"yt-eLQ7tmv7rgQ",youtubeId:"eLQ7tmv7rgQ",title:"Scaling Organizations with Ethical Resilience",guest:"Dr R Ramakrishnan",category:"Former CEO & Joint MD, Polycab Group",date:"Season 2026",duration:"1:11:06",summary:"Deep corporate leadership masterclass on scaling multi-billion dollar enterprises with values-based integrity, executive calm, and strategic endurance.",thumbnail:"https://i.ytimg.com/vi/eLQ7tmv7rgQ/hqdefault.jpg"},{id:"yt-llQ8JBBsfVs",youtubeId:"llQ8JBBsfVs",title:"Success With Soul: Leadership, Mental Health & Purpose",guest:"Preeti Chandrashekar",category:"Executive Leadership & Mental Health",date:"Season 2026",duration:"45:15",summary:"Season 26 Episode 1 dialogue on unlocking high-impact corporate performance without sacrificing personal mental health, empathy, and soul.",thumbnail:"https://i.ytimg.com/vi/llQ8JBBsfVs/hqdefault.jpg"},{id:"yt-kwzqH88DWYg",youtubeId:"kwzqH88DWYg",title:"Holistic Well-Being, Inner Harmony & Performance",guest:"Sanaa Vasi",category:"Wellness & Lifestyle Authority",date:"Season 2026",duration:"38:56",summary:"Sanaa Vasi shares practical daily micro-rituals for achieving sustained physiological balance and psychological clarity in fast-paced worlds.",thumbnail:"https://i.ytimg.com/vi/kwzqH88DWYg/hqdefault.jpg"},{id:"yt-4_1Ov8vxMWU",youtubeId:"4_1Ov8vxMWU",title:"Corporate Leadership, Strategic Vision & Empathy",guest:"Rakesh Singh",category:"Corporate Leadership & Strategy",date:"Season 2026",duration:"42:59",summary:"Industry veteran Rakesh Singh dives into enterprise transformation, empathetic team alignment, and steering cross-functional excellence.",thumbnail:"https://i.ytimg.com/vi/4_1Ov8vxMWU/hqdefault.jpg"},{id:"yt-zjvE87o09JY",youtubeId:"zjvE87o09JY",title:"Nourishing Mind & Body: The Eat Heal Love Philosophy",guest:"Avantika Shah",category:"Founder, Eat Heal Love",date:"Season 2026",duration:"52:36",summary:"Founder Avantika Shah shares integrative wellness paradigms, gut-brain connectivity, and healing burnout from within.",thumbnail:"https://i.ytimg.com/vi/zjvE87o09JY/hqdefault.jpg"},{id:"yt-rLC9VyVGCVA",youtubeId:"rLC9VyVGCVA",title:"Empathetic Execution & Executive Endurance",guest:"Jitendra Karsan",category:"Business Leader & Mentor",date:"Season 2025",duration:"47:45",summary:"Jitendra Karsan unpacks decades of corporate insights on sustained executive vigor, emotional discipline, and team loyalty.",thumbnail:"https://i.ytimg.com/vi/rLC9VyVGCVA/hqdefault.jpg"},{id:"yt-JbpocGaW9F4",youtubeId:"JbpocGaW9F4",title:"Mindfulness, Transformation & Inner Mastery",guest:"Ajay S",category:"Transformation Coach",date:"Season 2025",duration:"39:38",summary:"Ajay S breaks down how mental de-cluttering directly enhances decision-making velocity and creative breakthroughs under deadlines.",thumbnail:"https://i.ytimg.com/vi/JbpocGaW9F4/hqdefault.jpg"},{id:"yt-ivt09jBp_Zc",youtubeId:"ivt09jBp_Zc",title:"Preventive Healthcare & Corporate Health Architecture",guest:"Mayank Bathwal",category:"CEO, Aditya Birla Health Insurance",date:"Season 2025",duration:"53:50",summary:"CEO Mayank Bathwal discusses institutional health ecosystems, preventive wellness insurance models, and corporate vitality metrics.",thumbnail:"https://i.ytimg.com/vi/ivt09jBp_Zc/hqdefault.jpg"},{id:"yt-5G8FUWsrWjc",youtubeId:"5G8FUWsrWjc",title:"Venture Capital, Founder Resilience & Long-Term Value",guest:"Sasha Mirchandani",category:"Founder & Managing Partner, Kae Capital",date:"Season 2025",duration:"48:32",summary:"Venture capital icon Sasha Mirchandani discusses mental grit in startup founders, weathering market turbulence, and ethical investing.",thumbnail:"https://i.ytimg.com/vi/5G8FUWsrWjc/hqdefault.jpg"},{id:"yt-uSF7SPnpxqc",youtubeId:"uSF7SPnpxqc",title:"Vocal Power, Creative Resilience & Overcoming Adversity",guest:"Manasi Scott",category:"Renowned Singer, Performer & Actor",date:"Season 2025",duration:"44:20",summary:"Manasi Scott shares an electrifying dialogue on personal courage, overcoming major life health hurdles, and living with unapologetic joy.",thumbnail:"https://i.ytimg.com/vi/uSF7SPnpxqc/hqdefault.jpg"},{id:"yt-MZBkbZH123M",youtubeId:"MZBkbZH123M",title:"Artisanal Craft, Coffee Culture & Culinary Mindfulness",guest:"Daniel Trulson",category:"Co-founder & Head Chef, Subko Coffee",date:"Season 2025",duration:"1:02:36",summary:"Subko Coffee head chef Daniel Trulson shares how culinary discipline, ingredient reverence, and mindfulness drive world-class excellence.",thumbnail:"https://i.ytimg.com/vi/MZBkbZH123M/hqdefault.jpg"},{id:"yt-w9QzkeZs1-8",youtubeId:"w9QzkeZs1-8",title:"Gen Z Perspectives: Depth, Curiosity & Stoic Spirit",guest:"Sohm Anchan",category:"Gen Z Dialogue",date:"Season 2025",duration:"34:31",summary:"Heartfelt cross-generational dialogue between Manny and Sohm on modern youth ambition, digital burnout, and finding stoic inner grounding.",thumbnail:"https://i.ytimg.com/vi/w9QzkeZs1-8/hqdefault.jpg"},{id:"yt-j960Obyyv74",youtubeId:"j960Obyyv74",title:"The Mentalist Edge: Perception, Influence & Mind Hacks",guest:"Praveen Nair",category:"Top Mentalist & Hypnotist",date:"Season 2025",duration:"36:17",summary:"Master mentalist Praveen Nair deconstructs the architecture of human perception, subconscious cues, and cognitive resilience.",thumbnail:"https://i.ytimg.com/vi/j960Obyyv74/hqdefault.jpg"},{id:"yt-fdtxBTBgKk0",youtubeId:"fdtxBTBgKk0",title:"Sustained High Performance in Corporate Ecosystems",guest:"Executive Panel",category:"Executive Masterclass",date:"Season 2025",duration:"43:41",summary:"In-depth exploration of corporate fatigue, cognitive rest periods, and designing workspaces that nurture productivity.",thumbnail:"https://i.ytimg.com/vi/fdtxBTBgKk0/hqdefault.jpg"},{id:"yt-sHEH9k2cOv4",youtubeId:"sHEH9k2cOv4",title:"Cross-Cultural Leadership & Executive Neuroplasticity",guest:"Margie Blanton",category:"Global Executive Educator",date:"Season 2025",duration:"22:40",summary:"Margie Blanton reveals how top executives rewire cognitive habits through continuous curiosity, travel, and beginner’s mind philosophy.",thumbnail:"https://i.ytimg.com/vi/sHEH9k2cOv4/hqdefault.jpg"},{id:"yt-CK-r2GbXs6Y",youtubeId:"CK-r2GbXs6Y",title:"Legal Rigor, Complex Negotiations & Emotional Boundaries",guest:"Radhika Dudhat",category:"Senior Partner, Shardul Amarchand Mangaldas",date:"Season 2025",duration:"27:32",summary:"Senior legal partner Radhika Dudhat unpacks managing multi-million-dollar high-stakes legal negotiations while safeguarding mental peace.",thumbnail:"https://i.ytimg.com/vi/CK-r2GbXs6Y/hqdefault.jpg"},{id:"yt-jgw_EOkmBSE",youtubeId:"jgw_EOkmBSE",title:"Philanthropy, Altruism & The Science of Giving",guest:"Noopur Desai",category:"Philanthropy & Social Impact",date:"Season 2025",duration:"25:56",summary:"Exploring how service and meaningful community giveback stimulate neurological happiness centers and counter corporate cynicism.",thumbnail:"https://i.ytimg.com/vi/jgw_EOkmBSE/hqdefault.jpg"},{id:"yt-z-DpZS9KgwQ",youtubeId:"z-DpZS9KgwQ",title:"Workplace Well-Being as a Strategic Enterprise Pillar",guest:"Corporate Leadership",category:"Enterprise Strategy",date:"Season 2025",duration:"32:39",summary:"Why human-centered organizational design outpaces purely transactional management models in long-term enterprise valuation.",thumbnail:"https://i.ytimg.com/vi/z-DpZS9KgwQ/hqdefault.jpg"},{id:"yt-iMJEgUtXl5w",youtubeId:"iMJEgUtXl5w",title:"The Eudaimonic Enterprise: Inception of HQx",guest:"Manny Anchan",category:"Host & Founder, HQx",date:"Season 2025",duration:"45:40",summary:"Manny Anchan sets the foundational vision for HQx: blending global executive discipline with timeless eudaimonic happiness philosophies.",thumbnail:"https://i.ytimg.com/vi/iMJEgUtXl5w/hqdefault.jpg"},{id:"yt-EI6SNlfIn54",youtubeId:"EI6SNlfIn54",title:"Embracing Authenticity, Mental Grace & Overcoming Pressure",guest:"Sameera Reddy",category:"Actor & Happiness Advocate",date:"Featured Special",duration:"50:39",summary:"Celebrated actor Sameera Reddy shares candid reflections on overcoming postpartum depression, corporate pressure, and finding genuine self-love.",thumbnail:"https://i.ytimg.com/vi/EI6SNlfIn54/hqdefault.jpg"},{id:"yt-17t_VxbPOVc",youtubeId:"17t_VxbPOVc",title:"Happy Conversations: Micro Moments of Joy",guest:"Manny Anchan",category:"Micro-Insight",date:"Micro Series",duration:"0:39",summary:"Short reflection by Manny Anchan on noticing everyday spontaneous joy and building intentional connections.",thumbnail:"https://i.ytimg.com/vi/17t_VxbPOVc/hqdefault.jpg"},{id:"yt-4xvmWMBFii8",youtubeId:"4xvmWMBFii8",title:"Journey Is The Destination: Mindset Shifts",guest:"Manny Anchan",category:"Micro-Insight",date:"Micro Series",duration:"0:53",summary:"A powerful 53-second insight on detachment from outcomes and rediscovering meaning in daily practice.",thumbnail:"https://i.ytimg.com/vi/4xvmWMBFii8/hqdefault.jpg"},{id:"yt-BHpaC1ObaVA",youtubeId:"BHpaC1ObaVA",title:"What Makes You Happy? Corporate Voices at Aditya Birla Capital",guest:"Aditya Birla Capital Team",category:"Corporate Spotlight",date:"Enterprise Voice",duration:"4:09",summary:"Direct employee stories and perspectives on what fuels happiness, purpose, and camaraderie at Aditya Birla Capital.",thumbnail:"https://i.ytimg.com/vi/BHpaC1ObaVA/hqdefault.jpg"},{id:"yt-NTdduGwLilQ",youtubeId:"NTdduGwLilQ",title:"Culture & Joy at Work: Voices at Tata Capital",guest:"Tata Capital Team",category:"Corporate Spotlight",date:"Enterprise Voice",duration:"2:47",summary:"Exploring employee well-being culture, trust, and mutual encouragement across teams at Tata Capital.",thumbnail:"https://i.ytimg.com/vi/NTdduGwLilQ/hqdefault.jpg"},{id:"yt-8OROLKExUbY",youtubeId:"8OROLKExUbY",title:"Finding Joy in Everyday Craft: Interviewing My Favorite Barista",guest:"Special Guest",category:"Everyday Happiness",date:"Human Connection",duration:"4:23",summary:"Manny sits down with a skilled barista to discuss presence, craftsmanship, and how small genuine interactions brighten human days.",thumbnail:"https://i.ytimg.com/vi/8OROLKExUbY/hqdefault.jpg"},{id:"yt-oHdbLEax_a0",youtubeId:"oHdbLEax_a0",title:"What Is Your Life’s Design? Taking Charge & Shaping Destiny",guest:"Manny Anchan",category:"Masterclass",date:"Life Design",duration:"4:09",summary:"Practical frameworks by Manny Anchan on moving from passive reaction to intentional life architecture and proactive design.",thumbnail:"https://i.ytimg.com/vi/oHdbLEax_a0/hqdefault.jpg"},{id:"yt-JurW3HRo3V4",youtubeId:"JurW3HRo3V4",title:"The Transformative Power of Daily Journaling",guest:"Manny Anchan",category:"Habit Mastery",date:"Behavioral Practice",duration:"1:37",summary:"Manny Anchan explains the neuroscience of daily journaling: clarity, stress release, and cognitive crystallization.",thumbnail:"https://i.ytimg.com/vi/JurW3HRo3V4/hqdefault.jpg"},{id:"yt-uMDEotodPD4",youtubeId:"uMDEotodPD4",title:"Happiness Samurai Book Signing & Keynote Address",guest:"Manny Anchan",category:"Keynote Event",date:"Book Launch",duration:"40:20",summary:"Full video recording of the high-energy Happiness Samurai book launch, keynote address, and audience Q&A with Manny Anchan.",thumbnail:"https://i.ytimg.com/vi/uMDEotodPD4/hqdefault.jpg"}],ym=[{id:"eng-1",client:"Ageas Federal Insurance",location:"Mumbai, India",scope:"Domestic",category:"Corporate Wellness & Leadership",date:"2024-2026",attendees:"Senior Leadership & Sales Teams",impact:"Transformational wellness keynote cultivating resilience across national branches."},{id:"eng-2",client:"Tricolite",location:"Delhi, India",scope:"Domestic",category:"100 Days Ikigai Program",date:"2024-2026",attendees:"300+ Engineering & Leadership Staff",impact:"End-to-end 100-day Ikigai deployment driving sustained workplace purpose."},{id:"eng-3",client:"HDFC ERGO",location:"Mumbai, India",scope:"Domestic",category:"Staff Engagement & Wellness Confluence",date:"2025-2026",attendees:"500+ Across Regional Divisions",impact:"Keynote and experiential workshops on psychological well-being and productivity."},{id:"eng-4",client:"TATA Motors",location:"Pune, India",scope:"Domestic",category:"Leadership Deep Dive & Executive Resilience",date:"2025-2026",attendees:"Senior Engineering & Operations Leaders",impact:"94% reported enhanced resilience in team management and crisis turnaround."},{id:"eng-5",client:"Cipla Pharmaceuticals",location:"Goa, India",scope:"Domestic",category:"Engaging Well-Being Workshop",date:"2025",attendees:"Global Pharma Leaders & Research Directors",impact:"Somatic mindfulness and eudaimonic performance workshop in Goa retreat."},{id:"eng-6",client:"HDFC Life",location:"Mumbai, India",scope:"Domestic",category:"Culture Transformation & Motivation",date:"2024-2025",attendees:"800+ Across Regional Hubs",impact:"Institutional adoption of daily micro-wellness checkpoints."},{id:"eng-7",client:"Indigo Airlines",location:"Delhi, India",scope:"Domestic",category:"Aviation Well-Being & Stress Management",date:"2024",attendees:"Flight Operations & Crew Leadership",impact:"Equipped teams with acute stress recovery and focus protocols."},{id:"eng-8",client:"Shardul Amarchand Mangaldas",location:"Mumbai, India",scope:"Domestic",category:"Executive Composure in Law",date:"2024",attendees:"Partners & Senior Associates",impact:"Stress mitigation and mental clarity masterclasses for top legal counsel."},{id:"eng-9",client:"TATA AIG",location:"Connor, India",scope:"Domestic",category:"Annual Leadership Summit",date:"2024",attendees:"Executive Committee & VPs",impact:"Grit, purpose alignment, and customer empathy frameworks."},{id:"eng-10",client:"Turtlemint Insurance",location:"Maharashtra, India",scope:"Domestic",category:"Staff Engagement & Motivation",date:"2024",attendees:"InsurTech Growth Leaders",impact:"Fostered high-trust collaborative growth culture."},{id:"eng-11",client:"ELP (Economic Laws Practice)",location:"Pune, India",scope:"Domestic",category:"Corporate Legal Wellness",date:"2024",attendees:"Corporate Law Professionals",impact:"Work-life balance and high-stakes decision clarity."},{id:"eng-12",client:"Burns & McDonnell",location:"Mumbai, India",scope:"Domestic",category:"Engineering Wellness Masterclass",date:"2025",attendees:"Design & Construction Engineers",impact:"Practical cognitive ergonomics for complex technical deliveries."},{id:"eng-13",client:"Mango Sciences",location:"Goa, India",scope:"Domestic",category:"Healthcare Tech Offsite",date:"2024",attendees:"HealthTech Innovators",impact:"Mindset shifts and resilience training for high-velocity startup pace."},{id:"eng-14",client:"Uniworld Logistics",location:"Delhi, India",scope:"Domestic",category:"Supply Chain Stress Mastery",date:"2024",attendees:"Logistics Managers",impact:"High-pressure communication and crisis composure."},{id:"eng-15",client:"APAR Industries (Holistic Health & Workout)",location:"Mumbai, India",scope:"Domestic",category:"Manufacturing Well-Being Conclave",date:"2024",attendees:"Industrial Workforce & Plant Managers",impact:"Physical fitness, posture ergonomics, and mental wellness."},{id:"eng-int-1",client:"Absa Bank",location:"Mauritius",scope:"Global",category:"International Corporate Well-Being Summit",date:"2025",attendees:"500+ International Corporate Bankers",impact:"Rated best leadership keynote of the annual African convention."},{id:"eng-int-2",client:"Amana Bank",location:"Tanzania",scope:"Global",category:"East African Banking Convention",date:"2024",attendees:"Executive Directors & Bank Leadership",impact:"Cross-cultural purpose alignment and customer-centric motivation."},{id:"eng-int-3",client:"Harvard Club : Sri Lanka x APAC",location:"Colombo, Sri Lanka",scope:"Global",category:"Harvard Alumni Global Keynote",date:"2024",attendees:"APAC Harvard Alumni & Regional CXOs",impact:'Standing ovation on "This Is How The Good Companies Find The Good Company".'},{id:"eng-int-4",client:"Alizz Islamic Bank",location:"Oman",scope:"Global",category:"Middle East Leadership Symposium",date:"2024",attendees:"Oman Banking Leaders",impact:"Values-based leadership and mental resilience."},{id:"eng-int-5",client:"Global Indian School (Teachers & Students)",location:"Dubai, UAE",scope:"Global",category:"Educational Well-Being & Youth Mentorship",date:"2024",attendees:"Faculty Educators & Senior Students",impact:"Empowering future leaders with emotional intelligence and Ikigai purpose."}],Sm=[{id:"inq-1",name:"Vikram Malhotra",company:"Reliance Industries",email:"vikram.m@example.com",phone:"+91 98200 12345",program:"Leadership Deep Dive",headcount:"50-100 Executives",preferredDate:"November 2026",message:"Seeking a 2-day offsite intervention for our VP cohort on resilience and emotional intelligence.",status:"Contacted",date:"2026-10-14"},{id:"inq-2",name:"Priya Nambiar",company:"Deloitte Consulting",email:"priya.n@example.com",phone:"+91 98450 67890",program:"Engaging Workshops",headcount:"200+ Team Members",preferredDate:"December 2026",message:"Interested in a mindfulness & productivity workshop before our annual sprint cycle.",status:"Pending",date:"2026-10-15"}];function US({children:t}){const[e,n]=te.useState(()=>{const N=localStorage.getItem("hqx_faculty_v2");return N?JSON.parse(N):gm}),[i,r]=te.useState(()=>{const N=localStorage.getItem("hqx_courses_v2");return N?JSON.parse(N):xm}),[s,a]=te.useState(()=>{const N=localStorage.getItem("hqx_books_v2");return N?JSON.parse(N):vm}),[o,l]=te.useState(()=>{const N=localStorage.getItem("hqx_podcasts_v3");return N?JSON.parse(N):_m}),[c,h]=te.useState(()=>{const N=localStorage.getItem("hqx_engagements_v2");return N?JSON.parse(N):ym}),[p,f]=te.useState(()=>{const N=localStorage.getItem("hqx_inquiries_v2");return N?JSON.parse(N):Sm}),[m,v]=te.useState(()=>{const N=localStorage.getItem("hqx_richtext_v2");return N?JSON.parse(N):{bannerTagline:'"This Is How The Good Companies Find The Good Company"',heroHeadline:"Manny Anchan",heroSubtext:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Harvard & Columbia Business School alum. Researched Ikigai, Hygge, Lagom, Sisu, to Gross National Happiness.",quoteText:"Those who feel better work better.",quoteSubtext:"Employee well-being is a strategic, hands-on, immersive, and disciplined investment that enhances intrinsic motivation, increases productivity, and elevates retention.",fontSize:"text-base",fontWeight:"font-normal",fontColor:"#0A0A0A"}});te.useEffect(()=>{localStorage.setItem("hqx_faculty_v2",JSON.stringify(e))},[e]),te.useEffect(()=>{localStorage.setItem("hqx_courses_v2",JSON.stringify(i))},[i]),te.useEffect(()=>{localStorage.setItem("hqx_books_v2",JSON.stringify(s))},[s]),te.useEffect(()=>{localStorage.setItem("hqx_podcasts_v3",JSON.stringify(o))},[o]),te.useEffect(()=>{localStorage.setItem("hqx_engagements_v2",JSON.stringify(c))},[c]),te.useEffect(()=>{localStorage.setItem("hqx_inquiries_v2",JSON.stringify(p))},[p]),te.useEffect(()=>{localStorage.setItem("hqx_richtext_v2",JSON.stringify(m))},[m]);const w=N=>{const P={...N,id:`inq-${Date.now()}`,date:new Date().toISOString().split("T")[0],status:"Pending"};return f(O=>[P,...O]),P},g=(N,P)=>{f(O=>O.map(q=>q.id===N?{...q,status:P}:q))},d=N=>{const P={...N,id:`f-${Date.now()}`};n(O=>[...O,P])},x=(N,P)=>{n(O=>O.map(q=>q.id===N?{...q,...P}:q))},M=N=>{n(P=>P.filter(O=>O.id!==N))},S=N=>{const P={...N,id:`c-${Date.now()}`};r(O=>[...O,P])},b=(N,P)=>{r(O=>O.map(q=>q.id===N?{...q,...P}:q))},T=N=>{r(P=>P.filter(O=>O.id!==N))},C=N=>{const P={...N,id:`b-${Date.now()}`};a(O=>[...O,P])},_=(N,P)=>{a(O=>O.map(q=>q.id===N?{...q,...P}:q))},A=N=>{a(P=>P.filter(O=>O.id!==N))},L=N=>{const P={...N,id:`p-${Date.now()}`};l(O=>[P,...O])},I=(N,P)=>{l(O=>O.map(q=>q.id===N?{...q,...P}:q))},B=N=>{l(P=>P.filter(O=>O.id!==N))},G=N=>{const P={...N,id:`e-${Date.now()}`};h(O=>[P,...O])},F=(N,P)=>{h(O=>O.map(q=>q.id===N?{...q,...P}:q))},H=N=>{h(P=>P.filter(O=>O.id!==N))},Q=N=>{v(P=>({...P,...N}))},Y=()=>{localStorage.removeItem("hqx_faculty_v2"),localStorage.removeItem("hqx_courses_v2"),localStorage.removeItem("hqx_books_v2"),localStorage.removeItem("hqx_podcasts_v3"),localStorage.removeItem("hqx_engagements_v2"),localStorage.removeItem("hqx_inquiries_v2"),localStorage.removeItem("hqx_richtext_v2"),n(gm),r(xm),a(vm),l(_m),h(ym),f(Sm)};return u.jsx(Jx.Provider,{value:{faculty:e,courses:i,books:s,podcasts:o,engagements:c,inquiries:p,cmsRichText:m,founderProfile:CS,keyThemes:RS,wellbeingPillars:LS,engagementBenefits:NS,statesCovered:PS,globalCountries:IS,printMedia:DS,trustedBrands:kS,addInquiry:w,updateInquiryStatus:g,addFaculty:d,updateFaculty:x,deleteFaculty:M,addCourse:S,updateCourse:b,deleteCourse:T,addBook:C,updateBook:_,deleteBook:A,addPodcast:L,updatePodcast:I,deletePodcast:B,addEngagement:G,updateEngagement:F,deleteEngagement:H,updateCmsRichText:Q,resetToDefaults:Y},children:t})}function Qx(){const t=te.useContext(Jx);if(!t)throw new Error("useData must be used within a DataProvider");return t}const ev=te.createContext({theme:"light",isDark:!1,toggleTheme:()=>{},setTheme:()=>{}});function FS({children:t}){const[e,n]=te.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("hqx-theme");if(a==="light"||a==="dark")return a;if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"}),i=e==="dark";te.useEffect(()=>{const a=document.documentElement;e==="dark"?(a.classList.add("dark"),a.classList.remove("light"),a.style.colorScheme="dark"):(a.classList.remove("dark"),a.classList.add("light"),a.style.colorScheme="light");try{localStorage.setItem("hqx-theme",e)}catch{}},[e]),te.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const a=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem("hqx-theme")||n(l.matches?"dark":"light")};return a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]);const r=()=>{n(a=>a==="dark"?"light":"dark")},s=a=>{(a==="dark"||a==="light")&&n(a)};return u.jsx(ev.Provider,{value:{theme:e,isDark:i,toggleTheme:r,setTheme:s},children:t})}function tv(){const t=te.useContext(ev);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>te.createElement("svg",{ref:l,...BS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:nv("lucide",r),...o},[...a.map(([c,h])=>te.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(t,e)=>{const n=te.forwardRef(({className:i,...r},s)=>te.createElement(zS,{ref:s,iconNode:e,className:nv(`lucide-${OS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=mt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=mt("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=mt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=mt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=mt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=mt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=mt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=mt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=mt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=mt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=mt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=mt("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=mt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=mt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=mt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=mt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=mt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=mt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=mt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=mt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=mt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=mt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=mt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=mt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=mt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=mt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=mt("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function wm({className:t="",showLabel:e=!1}){const{theme:n,toggleTheme:i,isDark:r}=tv();return u.jsxs("button",{type:"button",onClick:i,className:`relative inline-flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full border transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-hq-yellow/50 ${r?"bg-[#15161A] text-hq-yellow border-white/15 hover:border-hq-yellow hover:bg-hq-yellow hover:text-hq-black":"bg-white text-hq-black border-hq-black/15 hover:border-hq-black hover:bg-hq-yellow hover:text-hq-black shadow-sm"} ${t}`,"aria-label":`Switch to ${r?"light":"dark"} mode`,title:`Switch to ${r?"light":"dark"} mode`,children:[u.jsx("div",{className:"relative w-4 h-4 flex items-center justify-center",children:r?u.jsx(aM,{className:"w-4 h-4 text-hq-yellow group-hover:text-hq-black transition-transform duration-300 group-hover:rotate-45"}):u.jsx(tM,{className:"w-4 h-4 text-hq-black group-hover:text-hq-black transition-transform duration-300 group-hover:-rotate-12"})}),e&&u.jsx("span",{className:"font-mono text-xs uppercase tracking-wider font-semibold",children:r?"Light Mode":"Dark Mode"})]})}function Pd({className:t="h-8 w-auto",iconOnly:e=!1,textColor:n,yellowFill:i="#FFCD00",swooshFill:r="#0A0A0A",squircleStroke:s="none",squircleStrokeWidth:a=0,...o}){return e?u.jsxs("svg",{viewBox:"0 0 252 253",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,...o,children:[u.jsx("rect",{x:"0",y:"0",width:"252",height:"253",rx:"52",ry:"52",fill:i,stroke:s,strokeWidth:a}),u.jsx("path",{d:"M 110.00 184.50 L 96.00 184.50 L 95.00 183.50 L 91.00 183.50 L 90.00 182.50 L 85.00 181.50 L 81.00 179.50 L 79.00 177.50 L 76.00 176.50 L 66.00 167.50 L 65.00 167.50 L 54.50 156.00 L 54.50 155.00 L 48.50 148.00 L 46.50 144.00 L 40.50 136.00 L 36.50 128.00 L 34.50 126.00 L 29.50 115.00 L 30.00 114.50 L 32.00 115.50 L 40.00 122.50 L 41.00 122.50 L 55.00 132.50 L 75.00 142.50 L 81.00 143.50 L 82.00 144.50 L 86.00 144.50 L 87.00 145.50 L 102.00 145.50 L 103.00 144.50 L 109.00 144.50 L 110.00 143.50 L 113.00 143.50 L 114.00 142.50 L 121.00 141.50 L 127.00 138.50 L 132.00 137.50 L 137.00 134.50 L 139.00 134.50 L 149.00 129.50 L 151.00 127.50 L 158.00 124.50 L 160.00 122.50 L 163.00 121.50 L 165.00 119.50 L 166.00 119.50 L 180.00 109.50 L 181.00 109.50 L 184.00 106.50 L 185.00 106.50 L 188.00 103.50 L 189.00 103.50 L 192.00 100.50 L 193.00 100.50 L 197.00 96.50 L 198.00 96.50 L 207.50 88.00 L 203.00 83.50 L 202.00 83.50 L 198.50 80.00 L 199.00 79.50 L 206.00 79.50 L 207.00 80.50 L 210.00 80.50 L 211.00 79.50 L 218.00 79.50 L 219.00 78.50 L 222.00 78.50 L 223.00 77.50 L 226.00 77.50 L 227.00 76.50 L 230.50 77.00 L 230.50 78.00 L 222.50 89.00 L 222.50 90.00 L 219.50 93.00 L 219.50 94.00 L 216.50 97.00 L 216.50 98.00 L 210.50 105.00 L 210.50 106.00 L 206.50 110.00 L 206.50 111.00 L 201.50 116.00 L 201.50 117.00 L 196.50 122.00 L 196.50 123.00 L 188.50 131.00 L 188.50 132.00 L 171.00 149.50 L 170.00 149.50 L 157.00 161.50 L 156.00 161.50 L 153.00 164.50 L 152.00 164.50 L 141.00 172.50 L 127.00 179.50 L 125.00 179.50 L 122.00 181.50 L 116.00 182.50 L 115.00 183.50 L 111.00 183.50 L 110.00 184.50 Z",fill:r})]}):u.jsxs("svg",{viewBox:"0 0 606 270",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,...o,children:[u.jsx("rect",{x:"0",y:"0",width:"252",height:"253",rx:"52",ry:"52",fill:i,stroke:s,strokeWidth:a}),u.jsx("path",{d:"M 110.00 184.50 L 96.00 184.50 L 95.00 183.50 L 91.00 183.50 L 90.00 182.50 L 85.00 181.50 L 81.00 179.50 L 79.00 177.50 L 76.00 176.50 L 66.00 167.50 L 65.00 167.50 L 54.50 156.00 L 54.50 155.00 L 48.50 148.00 L 46.50 144.00 L 40.50 136.00 L 36.50 128.00 L 34.50 126.00 L 29.50 115.00 L 30.00 114.50 L 32.00 115.50 L 40.00 122.50 L 41.00 122.50 L 55.00 132.50 L 75.00 142.50 L 81.00 143.50 L 82.00 144.50 L 86.00 144.50 L 87.00 145.50 L 102.00 145.50 L 103.00 144.50 L 109.00 144.50 L 110.00 143.50 L 113.00 143.50 L 114.00 142.50 L 121.00 141.50 L 127.00 138.50 L 132.00 137.50 L 137.00 134.50 L 139.00 134.50 L 149.00 129.50 L 151.00 127.50 L 158.00 124.50 L 160.00 122.50 L 163.00 121.50 L 165.00 119.50 L 166.00 119.50 L 180.00 109.50 L 181.00 109.50 L 184.00 106.50 L 185.00 106.50 L 188.00 103.50 L 189.00 103.50 L 192.00 100.50 L 193.00 100.50 L 197.00 96.50 L 198.00 96.50 L 207.50 88.00 L 203.00 83.50 L 202.00 83.50 L 198.50 80.00 L 199.00 79.50 L 206.00 79.50 L 207.00 80.50 L 210.00 80.50 L 211.00 79.50 L 218.00 79.50 L 219.00 78.50 L 222.00 78.50 L 223.00 77.50 L 226.00 77.50 L 227.00 76.50 L 230.50 77.00 L 230.50 78.00 L 222.50 89.00 L 222.50 90.00 L 219.50 93.00 L 219.50 94.00 L 216.50 97.00 L 216.50 98.00 L 210.50 105.00 L 210.50 106.00 L 206.50 110.00 L 206.50 111.00 L 201.50 116.00 L 201.50 117.00 L 196.50 122.00 L 196.50 123.00 L 188.50 131.00 L 188.50 132.00 L 171.00 149.50 L 170.00 149.50 L 157.00 161.50 L 156.00 161.50 L 153.00 164.50 L 152.00 164.50 L 141.00 172.50 L 127.00 179.50 L 125.00 179.50 L 122.00 181.50 L 116.00 182.50 L 115.00 183.50 L 111.00 183.50 L 110.00 184.50 Z",fill:r}),u.jsx("path",{d:"M 391.00 244.50 L 345.50 244.00 L 345.00 138.50 L 322.50 139.00 L 322.50 244.00 L 277.50 244.00 L 278.00 11.50 L 322.50 12.00 L 323.00 94.50 L 345.50 94.00 L 345.50 12.00 L 391.50 12.00 L 391.00 244.50 Z",fill:n||"currentColor"}),u.jsx("path",{d:"M 515.00 268.50 L 511.00 266.50 L 509.00 264.50 L 508.00 264.50 L 500.00 258.50 L 499.00 258.50 L 479.00 244.50 L 477.00 244.50 L 476.00 245.50 L 472.00 245.50 L 471.00 246.50 L 457.00 246.50 L 456.00 245.50 L 451.00 245.50 L 450.00 244.50 L 447.00 244.50 L 446.00 243.50 L 441.00 242.50 L 433.00 238.50 L 431.00 236.50 L 430.00 236.50 L 421.50 228.00 L 419.50 224.00 L 417.50 222.00 L 414.50 216.00 L 413.50 211.00 L 412.50 210.00 L 412.50 207.00 L 411.50 206.00 L 411.50 203.00 L 410.50 202.00 L 410.50 196.00 L 409.50 195.00 L 409.50 59.00 L 410.50 58.00 L 410.50 53.00 L 411.50 52.00 L 411.50 48.00 L 412.50 47.00 L 413.50 42.00 L 419.50 30.00 L 430.00 19.50 L 431.00 19.50 L 436.00 15.50 L 440.00 14.50 L 446.00 11.50 L 449.00 11.50 L 450.00 10.50 L 455.00 10.50 L 456.00 9.50 L 477.00 9.50 L 478.00 10.50 L 483.00 10.50 L 484.00 11.50 L 487.00 11.50 L 491.00 13.50 L 493.00 13.50 L 502.00 18.50 L 510.50 26.00 L 510.50 27.00 L 515.50 33.00 L 519.50 41.00 L 519.50 43.00 L 521.50 47.00 L 521.50 50.00 L 522.50 51.00 L 522.50 56.00 L 523.50 57.00 L 523.50 197.00 L 522.50 198.00 L 522.50 203.00 L 521.50 204.00 L 521.50 207.00 L 520.50 208.00 L 519.50 214.00 L 514.50 224.00 L 512.50 226.00 L 511.50 229.00 L 522.00 236.50 L 528.00 239.50 L 530.50 242.00 L 530.50 243.00 L 528.50 245.00 L 526.50 250.00 L 524.50 252.00 L 518.50 264.00 L 515.00 268.50 Z M 471.50 203.00 L 475.50 198.00 L 475.50 196.00 L 476.50 195.00 L 476.50 190.00 L 477.50 189.00 L 477.50 64.00 L 476.50 63.00 L 475.50 57.00 L 473.00 53.50 L 469.00 51.50 L 464.00 51.50 L 463.00 52.50 L 461.00 52.50 L 457.50 56.00 L 457.50 58.00 L 455.50 62.00 L 455.50 194.00 L 456.50 195.00 L 457.50 199.00 L 462.00 203.50 L 471.50 203.00 Z",fill:n||"currentColor",fillRule:"evenodd"}),u.jsx("path",{d:"M 593.00 105.50 L 573.00 105.50 L 571.50 104.00 L 571.50 102.00 L 569.50 99.00 L 569.50 97.00 L 568.50 96.00 L 568.50 94.00 L 567.50 93.00 L 567.50 91.00 L 564.50 85.00 L 564.50 83.00 L 563.50 82.00 L 563.00 79.50 L 561.50 80.00 L 561.50 82.00 L 560.50 83.00 L 560.50 85.00 L 559.50 86.00 L 559.50 88.00 L 558.50 89.00 L 558.50 91.00 L 557.50 92.00 L 557.50 94.00 L 556.50 95.00 L 556.50 97.00 L 555.50 98.00 L 555.50 100.00 L 554.50 101.00 L 553.50 105.00 L 537.50 105.00 L 537.50 103.00 L 538.50 102.00 L 540.50 94.00 L 542.50 91.00 L 542.50 89.00 L 543.50 88.00 L 544.50 83.00 L 546.50 79.00 L 546.50 77.00 L 548.50 73.00 L 549.50 68.00 L 550.50 67.00 L 550.50 65.00 L 551.50 64.00 L 552.50 59.00 L 553.50 58.00 L 553.50 56.00 L 554.50 55.00 L 553.50 54.00 L 552.50 49.00 L 550.50 46.00 L 548.50 38.00 L 546.50 35.00 L 546.50 33.00 L 545.50 32.00 L 543.50 24.00 L 541.50 21.00 L 541.50 19.00 L 540.50 18.00 L 539.50 13.00 L 538.50 12.00 L 539.00 11.50 L 560.00 11.50 L 561.50 13.00 L 562.50 18.00 L 564.50 21.00 L 565.50 26.00 L 566.50 27.00 L 567.50 32.00 L 569.00 34.50 L 570.50 33.00 L 570.50 31.00 L 571.50 30.00 L 571.50 28.00 L 572.50 27.00 L 572.50 25.00 L 573.50 24.00 L 574.50 19.00 L 575.50 18.00 L 575.50 16.00 L 578.00 11.50 L 593.50 12.00 L 592.50 13.00 L 592.50 15.00 L 591.50 16.00 L 591.50 18.00 L 590.50 19.00 L 590.50 21.00 L 589.50 22.00 L 589.50 24.00 L 587.50 28.00 L 586.50 33.00 L 584.50 36.00 L 583.50 41.00 L 582.50 42.00 L 581.50 47.00 L 580.50 48.00 L 578.50 56.00 L 577.50 57.00 L 577.50 60.00 L 579.50 63.00 L 579.50 65.00 L 580.50 66.00 L 580.50 68.00 L 581.50 69.00 L 581.50 71.00 L 583.50 75.00 L 583.50 77.00 L 585.50 80.00 L 585.50 82.00 L 586.50 83.00 L 588.50 91.00 L 590.50 94.00 L 590.50 96.00 L 591.50 97.00 L 592.50 102.00 L 593.50 103.00 L 593.00 105.50 Z",fill:n||"currentColor"})]})}function cM(){const[t,e]=te.useState(!1),[n,i]=te.useState(!1),r=Qs(),s=r.pathname==="/",a=t||!s;te.useEffect(()=>{const l=()=>{e(window.scrollY>40)};return l(),window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),te.useEffect(()=>{i(!1)},[r.pathname]);const o=(l,c)=>{if(l&&l.preventDefault&&l.preventDefault(),i(!1),!c||c==="top"){window.scrollTo({top:0,behavior:"smooth"});return}const h=document.getElementById(c);h?h.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx("nav",{id:"navbar",className:`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex items-center ${a?"bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md text-hq-black dark:text-white shadow-md dark:shadow-2xl py-4 border-b border-hq-black/10 dark:border-white/10":"bg-transparent text-white py-6 border-b border-transparent shadow-none"}`,children:u.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center",children:[u.jsxs(Ce,{to:"/",onClick:l=>o(l,"top"),className:"flex items-center gap-3 group","aria-label":"HQX Home",children:[u.jsx(Pd,{className:"h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105"}),u.jsx("span",{className:`hidden sm:inline-block pl-3 border-l text-[11px] tracking-widest font-body uppercase font-medium ${a?"border-hq-black/20 text-hq-black/60 dark:border-white/20 dark:text-white/60":"border-white/20 text-white/60"}`,children:"Happiness Samurai"})]}),u.jsxs("div",{className:"hidden lg:flex items-center gap-7 font-body text-[13.5px] tracking-widest uppercase font-medium",children:[u.jsxs("div",{className:"group relative",children:[u.jsxs("button",{onClick:l=>o(l,"reasons-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["ABOUT US ",u.jsx(da,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),u.jsx("div",{className:"absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:u.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[u.jsxs(Ce,{to:"/#top",onClick:l=>o(l,"top"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"FOUNDER"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"MANNY ANCHAN"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#team-section",onClick:l=>o(l,"team-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"TEAM"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"ADVISORY FACULTY & MENTORS"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#reasons-section",onClick:l=>o(l,"reasons-section"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"WHY HQX"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"THE EUDAIMONIC ADVANTAGE"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]})]})})]}),u.jsxs("div",{className:"group relative",children:[u.jsxs("button",{onClick:l=>o(l,"worklife-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["ETHOS ",u.jsx(da,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),u.jsx("div",{className:"absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:u.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[u.jsxs(Ce,{to:"/#worklife-section",onClick:l=>o(l,"worklife-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase",children:[u.jsx("span",{className:"uppercase",children:"EUDAIMONIC TRANSFORMATION"}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#reasons-section",onClick:l=>o(l,"reasons-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase",children:[u.jsx("span",{className:"uppercase",children:"WELL-BEING ETHOS (5 PILLARS)"}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#top",onClick:l=>o(l,"top"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase",children:[u.jsx("span",{className:"uppercase",children:"MEET MANNY ANCHAN"}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]})]})})]}),u.jsxs("div",{className:"group relative",children:[u.jsxs("button",{onClick:l=>o(l,"key-themes-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["PROGRAMS ",u.jsx(da,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),u.jsx("div",{className:"absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:u.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[u.jsxs(Ce,{to:"/#key-themes-section",onClick:l=>o(l,"key-themes-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"LEADERSHIP DEEP DIVE"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"EXECUTIVE RETREAT & PURPOSE ALIGNMENT"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#key-themes-section",onClick:l=>o(l,"key-themes-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"ENGAGING WORKSHOPS"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"MINDFULNESS, PRODUCTIVITY & GRIT"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#key-themes-section",onClick:l=>o(l,"key-themes-section"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"KEYNOTES & FRIDAY TALKS"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"DISRUPTIVE CORPORATE TOWNHALLS"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]})]})})]}),u.jsxs("div",{className:"group relative",children:[u.jsxs("button",{onClick:l=>o(l,"benefits-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["DIGITAL ",u.jsx(da,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),u.jsx("div",{className:"absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:u.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[u.jsxs(Ce,{to:"/#benefits-section",onClick:l=>o(l,"benefits-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"MICRO COURSES"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"100-DAY MASTERY BLUEPRINTS"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#benefits-section",onClick:l=>o(l,"benefits-section"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"HAPPYU APP"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"MEDITATION, GRATITUDE & MOOD TRACK"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]})]})})]}),u.jsxs("div",{className:"group relative",children:[u.jsxs("button",{onClick:l=>o(l,"podcast"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["MEDIA & BOOKS ",u.jsx(da,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),u.jsx("div",{className:"absolute top-full right-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:u.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[u.jsxs(Ce,{to:"/#podcast",onClick:l=>o(l,"podcast"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"HQX PODCAST"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"FORTNIGHTLY EXECUTIVE INSIGHTS"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]}),u.jsxs(Ce,{to:"/#books",onClick:l=>o(l,"books"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"LITERATURE & BOOKS"}),u.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"2020 TO 2025 ROADMAP"})]}),u.jsx(Sn,{className:"w-4 h-4 opacity-60"})]})]})})]})]}),u.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[u.jsx(wm,{}),u.jsxs(Ce,{to:"#contact",onClick:l=>o(l,"contact"),className:"nav-book-btn font-display text-[13.5px] uppercase tracking-wider bg-hq-yellow text-[#0A0A0A] hover:!bg-[#0A0A0A] hover:!text-white dark:hover:!bg-white dark:hover:!text-[#0A0A0A] px-5 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg shadow-hq-yellow/20 flex items-center gap-2.5 group cursor-pointer",children:[u.jsx("span",{className:"text-[#0A0A0A] group-hover:!text-white dark:group-hover:!text-[#0A0A0A] transition-colors",children:"BOOK MANNY"}),u.jsxs("svg",{className:"w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 text-[#0A0A0A] group-hover:!text-white dark:group-hover:!text-[#0A0A0A]",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),u.jsx("button",{onClick:()=>i(!n),className:`lg:hidden p-2 transition-colors rounded-xl ${a?"text-hq-black dark:text-white hover:text-hq-yellow":"text-white hover:text-hq-yellow"}`,"aria-label":"Toggle menu",children:n?u.jsx(rv,{className:"w-6 h-6"}):u.jsx(eM,{className:"w-6 h-6"})})]})]})}),n&&u.jsxs("div",{className:"fixed inset-0 z-40 bg-hq-black text-hq-white pt-24 px-6 pb-12 overflow-y-auto lg:hidden flex flex-col justify-between",children:[u.jsxs("div",{className:"flex flex-col gap-6 font-display text-xl uppercase tracking-wider",children:[u.jsx(Ce,{to:"/",onClick:l=>o(l,"top"),className:"py-2 border-b border-white/10 hover:text-hq-yellow uppercase",children:"HOME"}),u.jsxs("div",{className:"py-2 border-b border-white/10",children:[u.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"ABOUT US"}),u.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[u.jsx(Ce,{to:"/#top",onClick:l=>o(l,"top"),className:"hover:text-hq-yellow uppercase",children:"FOUNDER (MANNY ANCHAN)"}),u.jsx(Ce,{to:"/#team-section",onClick:l=>o(l,"team-section"),className:"hover:text-hq-yellow uppercase",children:"TEAM (ADVISORY FACULTY)"}),u.jsx(Ce,{to:"/#reasons-section",onClick:l=>o(l,"reasons-section"),className:"hover:text-hq-yellow uppercase",children:"WHY HQX"})]})]}),u.jsxs("div",{className:"py-2 border-b border-white/10",children:[u.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"ETHOS"}),u.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[u.jsx(Ce,{to:"/#worklife-section",onClick:l=>o(l,"worklife-section"),className:"hover:text-hq-yellow uppercase",children:"EUDAIMONIC TRANSFORMATION"}),u.jsx(Ce,{to:"/#reasons-section",onClick:l=>o(l,"reasons-section"),className:"hover:text-hq-yellow uppercase",children:"WELL-BEING ETHOS (5 PILLARS)"}),u.jsx(Ce,{to:"/#top",onClick:l=>o(l,"top"),className:"hover:text-hq-yellow uppercase",children:"MEET MANNY ANCHAN"})]})]}),u.jsxs("div",{className:"py-2 border-b border-white/10",children:[u.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"CORPORATE PROGRAMS"}),u.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[u.jsx(Ce,{to:"/#key-themes-section",onClick:l=>o(l,"key-themes-section"),className:"hover:text-hq-yellow uppercase",children:"LEADERSHIP DEEP DIVE"}),u.jsx(Ce,{to:"/#key-themes-section",onClick:l=>o(l,"key-themes-section"),className:"hover:text-hq-yellow uppercase",children:"ENGAGING WORKSHOPS"}),u.jsx(Ce,{to:"/#key-themes-section",onClick:l=>o(l,"key-themes-section"),className:"hover:text-hq-yellow uppercase",children:"KEYNOTES & FRIDAY TALKS"})]})]}),u.jsxs("div",{className:"py-2 border-b border-white/10",children:[u.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"DIGITAL PRODUCTS"}),u.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[u.jsx(Ce,{to:"/#benefits-section",onClick:l=>o(l,"benefits-section"),className:"hover:text-hq-yellow uppercase",children:"MICRO COURSES (100-DAY)"}),u.jsx(Ce,{to:"/#benefits-section",onClick:l=>o(l,"benefits-section"),className:"hover:text-hq-yellow uppercase",children:"HAPPYU APP"})]})]}),u.jsx(Ce,{to:"/#podcast",onClick:l=>o(l,"podcast"),className:"py-2 border-b border-white/10 hover:text-hq-yellow uppercase",children:"HQX PODCAST"}),u.jsx(Ce,{to:"/#books",onClick:l=>o(l,"books"),className:"py-2 border-b border-white/10 hover:text-hq-yellow uppercase",children:"BOOKS & ROADMAP"})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col gap-4",children:[u.jsxs("div",{className:"flex items-center justify-between py-1 px-1",children:[u.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-white/70",children:"THEME MODE"}),u.jsx(wm,{showLabel:!0})]}),u.jsx(Ce,{to:"#contact",onClick:l=>o(l,"contact"),className:"w-full text-center bg-hq-yellow text-[#0A0A0A] font-display font-semibold uppercase tracking-widest py-4 rounded-full text-sm hover:bg-white transition-colors",children:"Book Corporate Session"}),u.jsxs("a",{href:"tel:+919700100800",className:"text-center font-mono text-xs tracking-widest text-white/70 hover:text-hq-yellow flex items-center justify-center gap-2",children:[u.jsx(iv,{className:"w-3.5 h-3.5 text-hq-yellow"}),"Direct: +91 97001 00800"]})]})]})]})}function uM(){const{addInquiry:t}=Qx(),[e,n]=te.useState(""),[i,r]=te.useState(!1);return u.jsxs("footer",{id:"contact",className:"section-reveal bg-hq-yellow text-hq-black pt-20 md:pt-24 pb-6 sm:pb-8 relative overflow-hidden",children:[u.jsx("div",{className:"absolute right-0 bottom-16 sm:bottom-20 md:bottom-24 select-none pointer-events-none pr-4 sm:pr-8 md:pr-12 overflow-visible opacity-10 md:opacity-[0.12] transition-all",children:u.jsx(Pd,{className:"w-[300px] sm:w-[460px] md:w-[620px] lg:w-[760px] h-auto",textColor:"#000000",yellowFill:"rgba(0,0,0,0.12)",swooshFill:"#000000"})}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10",children:[u.jsx("div",{className:"mb-8",children:u.jsx(Pd,{className:"h-12 md:h-14 w-auto",textColor:"#0A0A0A"})}),u.jsx("blockquote",{className:"font-serif italic text-xl md:text-2xl mb-4 tracking-wide text-hq-black/80",children:'"The Future of Work is Eudaimonic"'}),u.jsxs("h2",{className:"font-display text-6xl sm:text-7xl md:text-[8rem] tracking-tighter leading-[0.88] mb-8 font-semibold",children:["Shape ",u.jsx("br",{}),"Tomorrow"]}),u.jsx("p",{className:"font-body text-xl md:text-[22px] font-light mb-10 max-w-xl text-hq-black/85 leading-relaxed",children:"Ready to integrate the Functional Enhancement Model into your organization? Connect with Manny Anchan directly."}),u.jsxs("div",{className:"flex flex-wrap gap-4 sm:gap-5 justify-center items-center my-8 mb-16",children:[u.jsx(Ce,{to:"#contact",onClick:s=>{s.preventDefault();const a=document.getElementById("contact");a&&a.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center justify-center bg-hq-black text-hq-white font-display font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all shadow-xl hover:-translate-y-0.5",children:"Book Corporate Session Now"}),u.jsx("a",{href:"tel:+919700100800",className:"inline-flex items-center justify-center bg-white text-hq-black border border-hq-black font-display font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-black hover:text-white transition-all shadow-md hover:-translate-y-0.5",children:"CALL: +91 97001 00800"})]}),u.jsxs("div",{className:"w-full bg-hq-black text-hq-white p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16 shadow-2xl",children:[u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0",children:u.jsx(iv,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[11px] uppercase font-display tracking-widest text-hq-white/50",children:"Direct Priority Hotline"}),u.jsx("a",{href:"tel:+919700100800",className:"font-display text-[20px] text-hq-yellow hover:underline tracking-tight font-semibold",children:"+91 97001 00800"}),u.jsx("div",{className:"text-[13.5px] text-hq-white/60 font-light mt-0.5",children:"Corporate Bookings & Retainers"})]})]}),u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0",children:u.jsx(JS,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[11px] uppercase font-display tracking-widest text-hq-white/50",children:"Official Inquiries"}),u.jsx("a",{href:"mailto:connect@happinesssamurai.com",className:"font-display text-[20px] text-hq-white hover:text-hq-yellow hover:underline tracking-tight",children:"connect@happinesssamurai.com"}),u.jsx("div",{className:"text-[13.5px] text-hq-white/60 font-light mt-0.5",children:"Keynotes & Workshop Inquiries"})]})]}),u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0",children:u.jsx(QS,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[11px] uppercase font-display tracking-widest text-hq-white/50",children:"Registered Headquarters"}),u.jsxs("div",{className:"font-body text-[13.5px] text-hq-white/90 leading-tight",children:["Happiness Quotient Global Pvt Ltd",u.jsx("br",{}),"203/B Koteshwar Palace, Andheri East, Mumbai"]}),u.jsx("div",{className:"text-[11px] font-mono text-hq-white/50 mt-1",children:"GSTIN: 27AAFCH1083G1ZP"})]})]})]}),u.jsxs("div",{className:"w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-left py-8 sm:py-9 border-t border-b border-hq-black/20 text-[13.5px] tracking-wider uppercase font-display",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"About & Ethos"}),u.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[u.jsx("li",{children:u.jsx(Ce,{to:"#reasons-section",onClick:()=>{var s;return(s=document.getElementById("reasons-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline font-semibold",children:"About Us"})}),u.jsx("li",{children:u.jsx(Ce,{to:"/#top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"hover:underline",children:"Founder (Manny Anchan)"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#team-section",onClick:()=>{var s;return(s=document.getElementById("team-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Our Team & Faculty"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#reasons-section",onClick:()=>{var s;return(s=document.getElementById("reasons-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Why HQX"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#worklife-section",onClick:()=>{var s;return(s=document.getElementById("worklife-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Eudaimonic Transformation"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#reasons-section",onClick:()=>{var s;return(s=document.getElementById("reasons-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"5 Well-Being Pillars"})})]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"Corporate Interventions"}),u.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[u.jsx("li",{children:u.jsx(Ce,{to:"#key-themes-section",onClick:()=>{var s;return(s=document.getElementById("key-themes-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Leadership Deep Dive"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#key-themes-section",onClick:()=>{var s;return(s=document.getElementById("key-themes-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Engaging Workshops"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#key-themes-section",onClick:()=>{var s;return(s=document.getElementById("key-themes-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Keynotes & Friday Talks"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#contact",onClick:()=>{var s;return(s=document.getElementById("contact"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Custom Executive Coaching"})})]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"Digital Offerings"}),u.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[u.jsx("li",{children:u.jsx(Ce,{to:"#benefits-section",onClick:()=>{var s;return(s=document.getElementById("benefits-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"HappyU App (iOS / Android)"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#benefits-section",onClick:()=>{var s;return(s=document.getElementById("benefits-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"100-Day Micro Courses"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#benefits-section",onClick:()=>{var s;return(s=document.getElementById("benefits-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Finding Your Ikigai"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#benefits-section",onClick:()=>{var s;return(s=document.getElementById("benefits-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Happiness in Money"})})]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"Media & Publications"}),u.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[u.jsx("li",{children:u.jsx(Ce,{to:"#podcast",onClick:()=>{var s;return(s=document.getElementById("podcast"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"HQX Fortnightly Podcast"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#books",onClick:()=>{var s;return(s=document.getElementById("books"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Books (2020-2025)"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#team-section",onClick:()=>{var s;return(s=document.getElementById("team-section"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Global Faculty Directory"})}),u.jsx("li",{children:u.jsx(Ce,{to:"#contact",onClick:()=>{var s;return(s=document.getElementById("contact"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Book Manny Anchan"})})]})]})]}),u.jsxs("div",{className:"w-full flex flex-col md:flex-row justify-between items-center gap-5 font-display text-[13.5px] tracking-widest uppercase pt-5 pb-1 text-hq-black/85",children:[u.jsxs("div",{children:["© ",new Date().getFullYear()," HAPPINESS QUOTIENT GLOBAL PRIVATE LIMITED. ALL RIGHTS RESERVED."]}),u.jsxs("div",{className:"flex gap-8",children:[u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"LinkedIn"}),u.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"YouTube"}),u.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"Instagram"}),u.jsx("a",{href:"https://spotify.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"Spotify"})]}),u.jsxs("button",{type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"group inline-flex flex-col items-center gap-2 text-hq-black hover:opacity-60 transition-all cursor-pointer py-1 select-none","aria-label":"Back to top",children:[u.jsxs("svg",{width:"14",height:"46",viewBox:"0 0 14 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"group-hover:-translate-y-2 transition-transform duration-300",children:[u.jsx("line",{x1:"7",y1:"46",x2:"7",y2:"3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("polyline",{points:"2 8.5, 7 3, 12 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),u.jsx("span",{className:"font-display text-[11px] font-bold uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180",children:"Back to top"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="186",dM=0,Em=1,fM=2,yl=1,hM=2,Ta=3,Hr=0,an=1,ui=2,Pi=0,Fa=1,bm=2,Tm=3,Am=4,pM=5,gs=100,mM=101,gM=102,xM=103,vM=104,_M=200,yM=201,SM=202,MM=203,sv=204,av=205,wM=206,EM=207,bM=208,TM=209,AM=210,CM=211,RM=212,LM=213,NM=214,Id=0,Dd=1,kd=2,io=3,Ud=4,Fd=5,Od=6,Bd=7,ov=0,PM=1,IM=2,gi=0,lv=1,cv=2,uv=3,dv=4,fv=5,hv=6,pv=7,mv=300,Vr=301,Xs=302,eu=303,tu=304,Sc=306,zd=1e3,Li=1001,Hd=1002,qt=1003,DM=1004,Fo=1005,sn=1006,nu=1007,Pr=1008,Tn=1009,gv=1010,xv=1011,ro=1012,Sh=1013,vi=1014,fi=1015,_i=1016,Mh=1017,wh=1018,so=1020,vv=35902,_v=35899,yv=1021,Sv=1022,Zn=1023,Oi=1026,Ir=1027,Mv=1028,Eh=1029,Gr=1030,bh=1031,Th=1033,Sl=33776,Ml=33777,wl=33778,El=33779,Vd=35840,Gd=35841,Wd=35842,jd=35843,qd=36196,Xd=37492,Yd=37496,$d=37488,Kd=37489,Zl=37490,Zd=37491,Jd=37808,Qd=37809,ef=37810,tf=37811,nf=37812,rf=37813,sf=37814,af=37815,of=37816,lf=37817,cf=37818,uf=37819,df=37820,ff=37821,hf=36492,pf=36494,mf=36495,gf=36283,xf=36284,Jl=36285,vf=36286,kM=3200,_f=0,UM=1,er="",bn="srgb",Ql="srgb-linear",ec="linear",dt="srgb",iu=7680,FM=519,OM=512,BM=513,zM=514,Ah=515,HM=516,VM=517,Ch=518,GM=519,wv=35044,Cm="300 es",hi=2e3,ao=2001;function WM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jM(){const t=oo("canvas");return t.style.display="block",t}const Rm={};function tc(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ev(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=Ev(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function st(...t){t=Ev(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Os(...t){const e=t.join(" ");e in Rm||(Rm[e]=!0,ze(...t))}function qM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const XM={[Id]:Dd,[kd]:Od,[Ud]:Bd,[io]:Fd,[Dd]:Id,[Od]:kd,[Bd]:Ud,[Fd]:io};class Yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,yf=180/Math.PI;function hr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function YM(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function di(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fh=class Fh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fh.prototype.isVector2=!0;let Ge=Fh;class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],w=s[a+3];if(p!==w||l!==f||c!==m||h!==v){let g=l*f+c*m+h*v+p*w;g<0&&(f=-f,m=-m,v=-v,w=-w,g=-g);let d=1-o;if(g<.9995){const x=Math.acos(g),M=Math.sin(x);d=Math.sin(d*x)/M,o=Math.sin(o*x)/M,l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+w*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+w*o;const x=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=x,c*=x,h*=x,p*=x}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*p+l*m-c*f,e[n+1]=l*v+h*f+c*p-o*m,e[n+2]=c*v+h*m+o*f-l*p,e[n+3]=h*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oh=class Oh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oh.prototype.isVector3=!0;let V=Oh;const au=new V,Lm=new ea,Bh=class Bh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],v=i[8],w=r[0],g=r[3],d=r[6],x=r[1],M=r[4],S=r[7],b=r[2],T=r[5],C=r[8];return s[0]=a*w+o*x+l*b,s[3]=a*g+o*M+l*T,s[6]=a*d+o*S+l*C,s[1]=c*w+h*x+p*b,s[4]=c*g+h*M+p*T,s[7]=c*d+h*S+p*C,s[2]=f*w+m*x+v*b,s[5]=f*g+m*M+v*T,s[8]=f*d+m*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,v=n*p+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=p*w,e[1]=(r*c-h*i)*w,e[2]=(o*i-r*a)*w,e[3]=f*w,e[4]=(h*n-r*l)*w,e[5]=(r*s-o*n)*w,e[6]=m*w,e[7]=(i*l-c*n)*w,e[8]=(a*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(e,n)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bh.prototype.isMatrix3=!0;let Ve=Bh;const ou=new Ve,Nm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const t={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ql]:{primaries:e,whitePoint:i,transfer:ec,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const tt=$M();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class KM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=oo("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZM=0;class Rh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lu(r[a].image)):s.push(lu(r[a]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let JM=0;const cu=new V;class Yt extends Yr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Li,r=Li,s=sn,a=Pr,o=Zn,l=Tn,c=Yt.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=hr(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=mv;Yt.DEFAULT_ANISOTROPY=1;const zh=class zh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],v=l[9],w=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-w)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+w)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,b=(d+1)/2,T=(h+f)/4,C=(p+w)/4,_=(v+g)/4;return M>S&&M>b?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(p-w)*(p-w)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(p-w)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zh.prototype.isVector4=!0;let At=zh;class QM extends Yr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Yt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Rh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends QM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bv extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ew extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ic=class ic{constructor(e,n,i,r,s,a,o,l,c,h,p,f,m,v,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,w,g)}set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,w,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=w,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,v=o*h,w=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=f-w*c,n[9]=-o*l,n[2]=w-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,v=c*h,w=c*p;n[0]=f+w*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=w+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,v=c*h,w=c*p;n[0]=f-w*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=w-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,v=o*h,w=o*p;n[0]=l*h,n[4]=v*c-m,n[8]=f*c+w,n[1]=l*p,n[5]=w*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,w=o*c;n[0]=l*h,n[4]=w-f*p,n[8]=v*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+v,n[10]=f-w*p}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,w=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+w,n[5]=a*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*h,n[10]=w*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tw,e,nw)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Wi.crossVectors(i,Mn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Wi.crossVectors(i,Mn)),Wi.normalize(),Oo.crossVectors(Mn,Wi),r[0]=Wi.x,r[4]=Oo.x,r[8]=Mn.x,r[1]=Wi.y,r[5]=Oo.y,r[9]=Mn.y,r[2]=Wi.z,r[6]=Oo.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],v=i[2],w=i[6],g=i[10],d=i[14],x=i[3],M=i[7],S=i[11],b=i[15],T=r[0],C=r[4],_=r[8],A=r[12],L=r[1],I=r[5],B=r[9],G=r[13],F=r[2],H=r[6],Q=r[10],Y=r[14],N=r[3],P=r[7],O=r[11],q=r[15];return s[0]=a*T+o*L+l*F+c*N,s[4]=a*C+o*I+l*H+c*P,s[8]=a*_+o*B+l*Q+c*O,s[12]=a*A+o*G+l*Y+c*q,s[1]=h*T+p*L+f*F+m*N,s[5]=h*C+p*I+f*H+m*P,s[9]=h*_+p*B+f*Q+m*O,s[13]=h*A+p*G+f*Y+m*q,s[2]=v*T+w*L+g*F+d*N,s[6]=v*C+w*I+g*H+d*P,s[10]=v*_+w*B+g*Q+d*O,s[14]=v*A+w*G+g*Y+d*q,s[3]=x*T+M*L+S*F+b*N,s[7]=x*C+M*I+S*H+b*P,s[11]=x*_+M*B+S*Q+b*O,s[15]=x*A+M*G+S*Y+b*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],v=e[3],w=e[7],g=e[11],d=e[15],x=l*m-c*f,M=o*m-c*p,S=o*f-l*p,b=a*m-c*h,T=a*f-l*h,C=a*p-o*h;return n*(w*x-g*M+d*S)-i*(v*x-g*b+d*T)+r*(v*M-w*b+d*C)-s*(v*S-w*T+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],v=e[12],w=e[13],g=e[14],d=e[15],x=n*o-i*a,M=n*l-r*a,S=n*c-s*a,b=i*l-r*o,T=i*c-s*o,C=r*c-s*l,_=h*w-p*v,A=h*g-f*v,L=h*d-m*v,I=p*g-f*w,B=p*d-m*w,G=f*d-m*g,F=x*G-M*B+S*I+b*L-T*A+C*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/F;return e[0]=(o*G-l*B+c*I)*H,e[1]=(r*B-i*G-s*I)*H,e[2]=(w*C-g*T+d*b)*H,e[3]=(f*T-p*C-m*b)*H,e[4]=(l*L-a*G-c*A)*H,e[5]=(n*G-r*L+s*A)*H,e[6]=(g*S-v*C-d*M)*H,e[7]=(h*C-f*S+m*M)*H,e[8]=(a*B-o*L+c*_)*H,e[9]=(i*L-n*B-s*_)*H,e[10]=(v*T-w*S+d*x)*H,e[11]=(p*S-h*T-m*x)*H,e[12]=(o*A-a*I-l*_)*H,e[13]=(n*I-i*A+r*_)*H,e[14]=(w*M-v*b-g*x)*H,e[15]=(h*b-p*M+f*x)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,v=s*p,w=a*h,g=a*p,d=o*p,x=l*c,M=l*h,S=l*p,b=i.x,T=i.y,C=i.z;return r[0]=(1-(w+d))*b,r[1]=(m+S)*b,r[2]=(v-M)*b,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(f+d))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(v+M)*C,r[9]=(g-x)*C,r[10]=(1-(f+w))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);const c=1/a,h=1/o,p=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=p,jn.elements[9]*=p,jn.elements[10]*=p,n.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,w;if(l)v=s/(a-s),w=a*s/(a-s);else if(o===hi)v=-(a+s)/(a-s),w=-2*a*s/(a-s);else if(o===ao)v=-a/(a-s),w=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,w;if(l)v=1/(a-s),w=a/(a-s);else if(o===hi)v=-2/(a-s),w=-(a+s)/(a-s);else if(o===ao)v=-1/(a-s),w=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ic.prototype.isMatrix4=!0;let bt=ic;const Qr=new V,jn=new bt,tw=new V(0,0,0),nw=new V(1,1,1),Wi=new V,Oo=new V,Mn=new V,Im=new bt,Dm=new ea;class gr{constructor(e=0,n=0,i=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Im,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dm.setFromEuler(this),this.setFromQuaternion(Dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iw=0;const km=new V,es=new ea,Si=new bt,Bo=new V,fa=new V,rw=new V,sw=new ea,Um=new V(1,0,0),Fm=new V(0,1,0),Om=new V(0,0,1),Bm={type:"added"},aw={type:"removed"},ts={type:"childadded",child:null},uu={type:"childremoved",child:null};class $t extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new V,n=new gr,i=new ea,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ve}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,n){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bo.copy(e):Bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(fa,Bo,this.up):Si.lookAt(Bo,fa,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Si),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),ts.child=e,this.dispatchEvent(ts),ts.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aw),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.DEFAULT_UP=new V(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ow={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const w of e.hand.values()){const g=n.getJointPose(w,i),d=this._getHandJoint(c,w);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},zo={h:0,s:0,l:0};function fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=YM(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=Tv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return tt.workingToColorSpace(tn.copy(this),e),Math.round(nt(tn.r*255,0,255))*65536+Math.round(nt(tn.g*255,0,255))*256+Math.round(nt(tn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=bn){tt.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(zo);const i=su(ji.h,zo.h,n),r=su(ji.s,zo.s,n),s=su(ji.l,zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new it;it.NAMES=Tv;class lw extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new V,Mi=new V,hu=new V,wi=new V,ns=new V,is=new V,zm=new V,pu=new V,mu=new V,gu=new V,xu=new At,vu=new At,_u=new At;class On{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Mi.subVectors(i,n),hu.subVectors(e,n);const a=qn.dot(qn),o=qn.dot(Mi),l=qn.dot(hu),c=Mi.dot(Mi),h=Mi.dot(hu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return xu.setScalar(0),vu.setScalar(0),_u.setScalar(0),xu.fromBufferAttribute(e,n),vu.fromBufferAttribute(e,i),_u.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xu,s.x),a.addScaledVector(vu,s.y),a.addScaledVector(_u,s.z),a}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Mi.subVectors(e,n),qn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),qn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ns.subVectors(r,i),is.subVectors(s,i),pu.subVectors(e,i);const l=ns.dot(pu),c=is.dot(pu);if(l<=0&&c<=0)return n.copy(i);mu.subVectors(e,r);const h=ns.dot(mu),p=is.dot(mu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ns,a);gu.subVectors(e,s);const m=ns.dot(gu),v=is.dot(gu);if(v>=0&&m<=v)return n.copy(s);const w=m*c-l*v;if(w<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(is,o);const g=h*v-m*p;if(g<=0&&p-h>=0&&m-v>=0)return zm.subVectors(s,r),o=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(zm,o);const d=1/(g+w+f);return a=w*d,o=f*d,n.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Vo.subVectors(this.max,ha),rs.subVectors(e.a,ha),ss.subVectors(e.b,ha),as.subVectors(e.c,ha),qi.subVectors(ss,rs),Xi.subVectors(as,ss),Sr.subVectors(rs,as);let n=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-Sr.z,Sr.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,Sr.z,0,-Sr.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-Sr.y,Sr.x,0];return!yu(n,rs,ss,as,Vo)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,rs,ss,as,Vo))?!1:(Go.crossVectors(qi,Xi),n=[Go.x,Go.y,Go.z],yu(n,rs,ss,as,Vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new V,new V,new V,new V,new V,new V,new V,new V],Xn=new V,Ho=new go,rs=new V,ss=new V,as=new V,qi=new V,Xi=new V,Sr=new V,ha=new V,Vo=new V,Go=new V,Mr=new V;function yu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Mr.fromArray(t,s);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),h=i.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dt=new V,Wo=new Ge;let cw=0;class xi extends Yr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wv,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wo.fromBufferAttribute(this,n),Wo.applyMatrix3(e),this.setXY(n,Wo.x,Wo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=di(n,this.array)),n}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=di(n,this.array)),n}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=di(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=di(n,this.array)),n}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Av extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cv extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wt extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const uw=new go,pa=new V,Su=new V;class Nh{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Su)),this.expandByPoint(pa.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dw=0;const Dn=new bt,Mu=new $t,os=new V,wn=new go,ma=new go,Ht=new V;class Pn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WM(e)?Cv:Av)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(wn.min,ma.min),wn.expandByPoint(Ht),Ht.addVectors(wn.max,ma.max),wn.expandByPoint(Ht)):(wn.expandByPoint(ma.min),wn.expandByPoint(ma.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Ht.add(os)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new V,l[_]=new V;const c=new V,h=new V,p=new V,f=new Ge,m=new Ge,v=new Ge,w=new V,g=new V;function d(_,A,L){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,L),f.fromBufferAttribute(s,_),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,L),h.sub(c),p.sub(c),m.sub(f),v.sub(f);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(w.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(I),o[_].add(w),o[A].add(w),o[L].add(w),l[_].add(g),l[A].add(g),l[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,A=x.length;_<A;++_){const L=x[_],I=L.start,B=L.count;for(let G=I,F=I+B;G<F;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new V,S=new V,b=new V,T=new V;function C(_){b.fromBufferAttribute(r,_),T.copy(b);const A=o[_];M.copy(A),M.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(T,A);const I=S.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,A=x.length;_<A;++_){const L=x[_],I=L.start,B=L.count;for(let G=I,F=I+B;G<F;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,h=new V,p=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),w=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,w),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let w=0,g=l.length;w<g;w++){o.isInterleavedBufferAttribute?m=l[w]*o.data.stride+o.offset:m=l[w]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new xi(f,h,p)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fw{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=wv,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const cn=new V;class nc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=di(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=di(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=di(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=di(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new xi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wu=new V,hw=new V,pw=new Ve;class Zi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(hw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(wu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pw.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let mw=0;class ta extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Fa,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sv,this.blendDst=av,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=FM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=iu,this.stencilZFail=iu,this.stencilZPass=iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rv extends ta{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const ga=new V,cs=new V,us=new V,ds=new Ge,xa=new Ge,Lv=new bt,jo=new V,va=new V,qo=new V,Hm=new Ge,Eu=new Ge,Vm=new Ge;class gw extends $t{constructor(e=new Rv){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fw(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new nc(i,3,0,!1)),ls.setAttribute("uv",new nc(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Lv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Xo(jo.set(-.5,-.5,0),us,a,cs,r,s),Xo(va.set(.5,-.5,0),us,a,cs,r,s),Xo(qo.set(.5,.5,0),us,a,cs,r,s),Hm.set(0,0),Eu.set(1,0),Vm.set(1,1);let o=e.ray.intersectTriangle(jo,va,qo,!1,ga);if(o===null&&(Xo(va.set(-.5,.5,0),us,a,cs,r,s),Eu.set(0,1),o=e.ray.intersectTriangle(jo,qo,va,!1,ga),o===null))return;const l=e.ray.origin.distanceTo(ga);l<e.near||l>e.far||n.push({distance:l,point:ga.clone(),uv:On.getInterpolation(ga,jo,va,qo,Hm,Eu,Vm,new Ge),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xo(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(xa.x=s*ds.x-r*ds.y,xa.y=r*ds.x+s*ds.y):xa.copy(ds),t.copy(e),t.x+=xa.x,t.y+=xa.y,t.applyMatrix4(Lv)}const bi=new V,bu=new V,Yo=new V,$o=new V;class Nv{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bu.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),$o.copy(this.origin).sub(bu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Yo),o=$o.dot(this.direction),l=-$o.dot(Yo),c=$o.lengthSq(),h=Math.abs(1-a*a);let p,f,m,v;if(h>0)if(p=a*l-o,f=a*o-l,v=s*h,p>=0)if(f>=-v)if(f<=v){const w=1/h;p*=w,f*=w,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(bu).addScaledVector(Yo,f),m}intersectSphere(e,n){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=n.x-a.x,w=n.y-a.y,g=n.z-a.z,d=i.x-a.x,x=i.y-a.y,M=i.z-a.z,S=Math.abs(l),b=Math.abs(c),T=Math.abs(h);let C,_,A,L,I,B,G,F,H,Q,Y,N;if(S>=b&&S>=T?(A=l,B=p,H=v,N=d,l>=0?(C=c,_=h,L=f,I=m,G=w,F=g,Q=x,Y=M):(C=h,_=c,L=m,I=f,G=g,F=w,Q=M,Y=x)):b>=T?(A=c,B=f,H=w,N=x,c>=0?(C=h,_=l,L=m,I=p,G=g,F=v,Q=M,Y=d):(C=l,_=h,L=p,I=m,G=v,F=g,Q=d,Y=M)):(A=h,B=m,H=g,N=M,h>=0?(C=l,_=c,L=p,I=f,G=v,F=w,Q=d,Y=x):(C=c,_=l,L=f,I=p,G=w,F=v,Q=x,Y=d)),A===0)return null;const P=C/A,O=_/A,q=1/A,ue=L-P*B,Ee=I-O*B,Xe=G-P*H,We=F-O*H,Ue=Q-P*N,K=Y-O*N,re=Ue*We-K*Xe,Me=ue*K-Ee*Ue,we=Xe*Ee-We*ue;if(r){if(re<0||Me<0||we<0)return null}else if((re<0||Me<0||we<0)&&(re>0||Me>0||we>0))return null;const oe=re+Me+we;if(oe===0)return null;const Be=q*(re*B+Me*H+we*N);return(oe>0?Be<0:Be>0)?null:this.at(Be/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cr extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gm=new bt,wr=new Nv,Ko=new Nh,Wm=new V,Zo=new V,Jo=new V,Qo=new V,Tu=new V,el=new V,jm=new V,tl=new V;class fn extends $t{constructor(e=new Pn,n=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Tu.fromBufferAttribute(p,e),a?el.addScaledVector(Tu,h):el.addScaledVector(Tu.sub(n),h))}n.add(el)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(Ko.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Ko,Wm)===null||wr.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,w=f.length;v<w;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,b=M;S<b;S+=3){const T=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);r=nl(this,d,e,i,c,h,p,T,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let g=v,d=w;g<d;g+=3){const x=o.getX(g),M=o.getX(g+1),S=o.getX(g+2);r=nl(this,a,e,i,c,h,p,x,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,w=f.length;v<w;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,b=M;S<b;S+=3){const T=S,C=S+1,_=S+2;r=nl(this,d,e,i,c,h,p,T,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let g=v,d=w;g<d;g+=3){const x=g,M=g+1,S=g+2;r=nl(this,a,e,i,c,h,p,x,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function xw(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Hr,o),l===null)return null;tl.copy(o),tl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(tl);return c<n.near||c>n.far?null:{distance:c,point:tl.clone(),object:t}}function nl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Zo),t.getVertexPosition(l,Jo),t.getVertexPosition(c,Qo);const h=xw(t,e,n,i,Zo,Jo,Qo,jm);if(h){const p=new V;On.getBarycoord(jm,Zo,Jo,Qo,p),r&&(h.uv=On.getInterpolatedAttribute(r,o,l,c,p,new Ge)),s&&(h.uv1=On.getInterpolatedAttribute(s,o,l,c,p,new Ge)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,p,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};On.getNormal(Zo,Jo,Qo,f.normal),h.face=f,h.barycoord=p}return h}class vw extends Yt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,h=qt,p,f){super(null,a,o,l,c,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Er=new Nh,_w=new Ge(.5,.5),il=new V;class Ph{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],f=s[6],m=s[7],v=s[8],w=s[9],g=s[10],d=s[11],x=s[12],M=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-a,m-h,d-v,b-x).normalize(),r[1].setComponents(c+a,m+h,d+v,b+x).normalize(),r[2].setComponents(c+o,m+p,d+w,b+M).normalize(),r[3].setComponents(c-o,m-p,d-w,b-M).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(c-l,m-f,d-g,b-S).normalize();else if(r[4].setComponents(c-l,m-f,d-g,b-S).normalize(),n===hi)r[5].setComponents(c+l,m+f,d+g,b+S).normalize();else if(n===ao)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=_w.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends Yt{constructor(e=[],n=Vr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yw extends Yt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends Yt{constructor(e,n,i=vi,r,s,a,o=qt,l=qt,c,h=Oi,p=1){if(h!==Oi&&h!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Sw extends lo{constructor(e,n=vi,i=Vr,r,s,a=qt,o=qt,l,c=Oi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Iv extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends Pn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(p,2));function v(w,g,d,x,M,S,b,T,C,_,A){const L=S/C,I=b/_,B=S/2,G=b/2,F=T/2,H=C+1,Q=_+1;let Y=0,N=0;const P=new V;for(let O=0;O<Q;O++){const q=O*I-G;for(let ue=0;ue<H;ue++){const Ee=ue*L-B;P[w]=Ee*x,P[g]=q*M,P[d]=F,c.push(P.x,P.y,P.z),P[w]=0,P[g]=0,P[d]=T>0?1:-1,h.push(P.x,P.y,P.z),p.push(ue/C),p.push(1-O/_),Y+=1}}for(let O=0;O<_;O++)for(let q=0;q<C;q++){const ue=f+q+H*O,Ee=f+q+H*(O+1),Xe=f+(q+1)+H*(O+1),We=f+(q+1)+H*O;l.push(ue,Ee,We),l.push(Ee,Xe,We),N+=6}o.addGroup(m,N,A),m+=N,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ih extends Pn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let v=0;const w=[],g=i/2;let d=0;x(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(m,2));function x(){const S=new V,b=new V;let T=0;const C=(n-e)/i;for(let _=0;_<=s;_++){const A=[],L=_/s,I=L*(n-e)+e;for(let B=0;B<=r;B++){const G=B/r,F=G*l+o,H=Math.sin(F),Q=Math.cos(F);b.x=I*H,b.y=-L*i+g,b.z=I*Q,p.push(b.x,b.y,b.z),S.set(H,C,Q).normalize(),f.push(S.x,S.y,S.z),m.push(G,1-L),A.push(v++)}w.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const L=w[A][_],I=w[A+1][_],B=w[A+1][_+1],G=w[A][_+1];(e>0||A!==0)&&(h.push(L,I,G),T+=3),(n>0||A!==s-1)&&(h.push(I,B,G),T+=3)}c.addGroup(d,T,0),d+=T}function M(S){const b=v,T=new Ge,C=new V;let _=0;const A=S===!0?e:n,L=S===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,g*L,0),f.push(0,L,0),m.push(.5,.5),v++;const I=v;for(let B=0;B<=r;B++){const F=B/r*l+o,H=Math.cos(F),Q=Math.sin(F);C.x=A*Q,C.y=g*L,C.z=A*H,p.push(C.x,C.y,C.z),f.push(0,L,0),T.x=H*.5+.5,T.y=Q*.5*L+.5,m.push(T.x,T.y),v++}for(let B=0;B<r;B++){const G=b+B,F=I+B;S===!0?h.push(F,F+1,G):h.push(F+1,F,G),_+=3}c.addGroup(d,_,S===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,m=[],v=[],w=[],g=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<c;M++){const S=M*p-s;v.push(S,-x,0),w.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const M=x+c*d,S=x+c*(d+1),b=x+1+c*(d+1),T=x+1+c*d;m.push(M,S,T),m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(w,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dh extends Pn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let p=e;const f=(n-e)/r,m=new V,v=new Ge;for(let w=0;w<=r;w++){for(let g=0;g<=i;g++){const d=s+g/i*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,h.push(v.x,v.y)}p+=f}for(let w=0;w<r;w++){const g=w*(i+1);for(let d=0;d<i;d++){const x=d+g,M=x,S=x+i+1,b=x+i+2,T=x+1;o.push(M,S,T),o.push(S,b,T)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ls extends Pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new V,f=new V,m=[],v=[],w=[],g=[];for(let d=0;d<=i;d++){const x=[],M=d/i,S=a+M*o,b=e*Math.cos(S),T=Math.sqrt(e*e-b*b);let C=0;d===0&&a===0?C=.5/n:d===i&&l===Math.PI&&(C=-.5/n);for(let _=0;_<=n;_++){const A=_/n,L=r+A*s;p.x=-T*Math.cos(L),p.y=b,p.z=T*Math.sin(L),v.push(p.x,p.y,p.z),f.copy(p).normalize(),w.push(f.x,f.y,f.z),g.push(A+C,1-M),x.push(c++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const M=h[d][x+1],S=h[d][x],b=h[d+1][x],T=h[d+1][x+1];(d!==0||a>0)&&m.push(M,S,T),(d!==i-1||l<Math.PI)&&m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(w,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(qm(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(qm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function qm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Mw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ww={clone:Ys,merge:un};var Ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ew,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Mw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Tw extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Aw extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cw extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rw extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Au={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Xm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Xm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Xm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Lw{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){const m=c[p],v=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Nw=new Lw;class kh{constructor(e){this.manager=e!==void 0?e:Nw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}kh.DEFAULT_MATERIAL_NAME="__DEFAULT";const fs=new WeakMap;class Pw extends kh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Au.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let p=fs.get(a);p===void 0&&(p=[],fs.set(a,p)),p.push({onLoad:n,onError:r})}return a}const o=oo("img");function l(){h(),n&&n(this);const p=fs.get(this)||[];for(let f=0;f<p.length;f++){const m=p[f];m.onLoad&&m.onLoad(this)}fs.delete(this),s.manager.itemEnd(e)}function c(p){h(),r&&r(p),Au.remove(`image:${e}`);const f=fs.get(this)||[];for(let m=0;m<f.length;m++){const v=f[m];v.onError&&v.onError(p)}fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Au.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Iw extends kh{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,a=new Pw(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class kv extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cu=new bt,Ym=new V,$m=new V;class Dw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ao||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rl=new V,sl=new ea,si=new V;class Uv extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rl,sl,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,sl,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(rl,sl,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,sl,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new V,Km=new Ge,Zm=new Ge;class Fn extends Uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yf*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,Km,Zm),n.subVectors(Zm,Km)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Uh extends Uv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kw extends Dw{constructor(){super(new Uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jm extends kv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new kw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Uw extends kv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const hs=-90,ps=1;class Fw extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new Fn(hs,ps,e,n);s.layers=this.layers,this.add(s);const a=new Fn(hs,ps,e,n);a.layers=this.layers,this.add(a);const o=new Fn(hs,ps,e,n);o.layers=this.layers,this.add(o);const l=new Fn(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new Fn(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ow extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qm=new bt;class Bw{constructor(e,n,i=0,r=1/0){this.ray=new Nv(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):st("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Qm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qm),this}intersectObject(e,n=!0,i=[]){return Sf(e,this,i,n),i.sort(e0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Sf(e[r],this,i,n);return i.sort(e0),i}}function e0(t,e){return t.distance-e.distance}function Sf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Sf(s[a],e,n,!0)}}class zw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Hh=class Hh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Hh.prototype.isMatrix2=!0;let t0=Hh;function n0(t,e,n,i){const r=Hw(i);switch(n){case yv:return t*e;case Mv:return t*e/r.components*r.byteLength;case Eh:return t*e/r.components*r.byteLength;case Gr:return t*e*2/r.components*r.byteLength;case bh:return t*e*2/r.components*r.byteLength;case Sv:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Th:return t*e*4/r.components*r.byteLength;case Sl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Vd:case Wd:return Math.max(t,8)*Math.max(e,8)/2;case qd:case Xd:case $d:case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yd:case Zl:case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hf:case pf:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gf:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jl:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hw(t){switch(t){case Tn:case gv:return{byteLength:1,components:1};case ro:case xv:case _i:return{byteLength:2,components:1};case Mh:case wh:return{byteLength:2,components:4};case vi:case Sh:case fi:return{byteLength:4,components:1};case vv:case _v:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vw(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],w=p[m];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++f,p[f]=w)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const w=p[m];t.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Gw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ww=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$w=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,UE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Gw,alphahash_pars_fragment:Ww,alphamap_fragment:jw,alphamap_pars_fragment:qw,alphatest_fragment:Xw,alphatest_pars_fragment:Yw,aomap_fragment:$w,aomap_pars_fragment:Kw,batching_pars_vertex:Zw,batching_vertex:Jw,begin_vertex:Qw,beginnormal_vertex:eE,bsdfs:tE,iridescence_fragment:nE,bumpmap_pars_fragment:iE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:sE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:oE,color_fragment:lE,color_pars_fragment:cE,color_pars_vertex:uE,color_vertex:dE,common:fE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:pE,displacementmap_pars_vertex:mE,displacementmap_vertex:gE,emissivemap_fragment:xE,emissivemap_pars_fragment:vE,colorspace_fragment:_E,colorspace_pars_fragment:yE,envmap_fragment:SE,envmap_common_pars_fragment:ME,envmap_pars_fragment:wE,envmap_pars_vertex:EE,envmap_physical_pars_fragment:kE,envmap_vertex:bE,fog_vertex:TE,fog_pars_vertex:AE,fog_fragment:CE,fog_pars_fragment:RE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:NE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:IE,lights_pars_begin:DE,lights_toon_fragment:UE,lights_toon_pars_fragment:FE,lights_phong_fragment:OE,lights_phong_pars_fragment:BE,lights_physical_fragment:zE,lights_physical_pars_fragment:HE,lights_fragment_begin:VE,lights_fragment_maps:GE,lights_fragment_end:WE,lightprobes_pars_fragment:jE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:XE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:$E,map_fragment:KE,map_pars_fragment:ZE,map_particle_fragment:JE,map_particle_pars_fragment:QE,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ab,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:db,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:xb,packing:vb,premultiplied_alpha_fragment:_b,project_vertex:yb,dithering_fragment:Sb,dithering_pars_fragment:Mb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Cb,skinbase_vertex:Rb,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Pb,specularmap_fragment:Ib,specularmap_pars_fragment:Db,tonemapping_fragment:kb,tonemapping_pars_fragment:Ub,transmission_fragment:Fb,transmission_pars_fragment:Ob,uv_pars_fragment:Bb,uv_pars_vertex:zb,uv_vertex:Hb,worldpos_vertex:Vb,background_vert:Gb,background_frag:Wb,backgroundCube_vert:jb,backgroundCube_frag:qb,cube_vert:Xb,cube_frag:Yb,depth_vert:$b,depth_frag:Kb,distance_vert:Zb,distance_frag:Jb,equirect_vert:Qb,equirect_frag:e2,linedashed_vert:t2,linedashed_frag:n2,meshbasic_vert:i2,meshbasic_frag:r2,meshlambert_vert:s2,meshlambert_frag:a2,meshmatcap_vert:o2,meshmatcap_frag:l2,meshnormal_vert:c2,meshnormal_frag:u2,meshphong_vert:d2,meshphong_frag:f2,meshphysical_vert:h2,meshphysical_frag:p2,meshtoon_vert:m2,meshtoon_frag:g2,points_vert:x2,points_frag:v2,shadow_vert:_2,shadow_frag:y2,sprite_vert:S2,sprite_frag:M2},xe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},li={basic:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:un([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:un([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:un([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:un([xe.common,xe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:un([xe.lights,xe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};li.physical={uniforms:un([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const al={r:0,b:0,g:0},w2=new bt,Ov=new Ve;Ov.set(-1,0,0,0,1,0,0,0,1);function E2(t,e,n,i,r,s){const a=new it(0);let o=r===!0?0:1,l,c,h=null,p=0,f=null;function m(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function v(x){let M=!1;const S=m(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(x,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===Sc)?(c===void 0&&(c=new fn(new xo(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ys(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(w2.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ov),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==dt,(h!==S||p!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new fn(new Mc(2,2),new yi({name:"BackgroundMaterial",uniforms:Ys(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(al,Dv(t)),n.buffers.color.setClear(al.r,al.g,al.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:w,dispose:d}}function b2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,B,G,F,H){let Q=!1;const Y=p(I,F,G,B);s!==Y&&(s=Y,c(s.object)),Q=m(I,F,G,H),Q&&v(I,F,G,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(I,B,G,F),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function p(I,B,G,F){const H=F.wireframe===!0;let Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);const Y=I.isInstancedMesh===!0?I.id:0;let N=Q[Y];N===void 0&&(N={},Q[Y]=N);let P=N[G.id];P===void 0&&(P={},N[G.id]=P);let O=P[H];return O===void 0&&(O=f(l()),P[H]=O),O}function f(I){const B=[],G=[],F=[];for(let H=0;H<n;H++)B[H]=0,G[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:F,object:I,attributes:{},index:null}}function m(I,B,G,F){const H=s.attributes,Q=B.attributes;let Y=0;const N=G.getAttributes();for(const P in N)if(N[P].location>=0){const q=H[P];let ue=Q[P];if(ue===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),q===void 0||q.attribute!==ue||ue&&q.data!==ue.data)return!0;Y++}return s.attributesNum!==Y||s.index!==F}function v(I,B,G,F){const H={},Q=B.attributes;let Y=0;const N=G.getAttributes();for(const P in N)if(N[P].location>=0){let q=Q[P];q===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(q=I.instanceColor));const ue={};ue.attribute=q,q&&q.data&&(ue.data=q.data),H[P]=ue,Y++}s.attributes=H,s.attributesNum=Y,s.index=F}function w(){const I=s.newAttributes;for(let B=0,G=I.length;B<G;B++)I[B]=0}function g(I){d(I,0)}function d(I,B){const G=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;G[I]=1,F[I]===0&&(t.enableVertexAttribArray(I),F[I]=1),H[I]!==B&&(t.vertexAttribDivisor(I,B),H[I]=B)}function x(){const I=s.newAttributes,B=s.enabledAttributes;for(let G=0,F=B.length;G<F;G++)B[G]!==I[G]&&(t.disableVertexAttribArray(G),B[G]=0)}function M(I,B,G,F,H,Q,Y){Y===!0?t.vertexAttribIPointer(I,B,G,H,Q):t.vertexAttribPointer(I,B,G,F,H,Q)}function S(I,B,G,F){w();const H=F.attributes,Q=G.getAttributes(),Y=B.defaultAttributeValues;for(const N in Q){const P=Q[N];if(P.location>=0){let O=H[N];if(O===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(O=I.instanceColor)),O!==void 0){const q=O.normalized,ue=O.itemSize,Ee=e.get(O);if(Ee===void 0)continue;const Xe=Ee.buffer,We=Ee.type,Ue=Ee.bytesPerElement,K=We===t.INT||We===t.UNSIGNED_INT||O.gpuType===Sh;if(O.isInterleavedBufferAttribute){const re=O.data,Me=re.stride,we=O.offset;if(re.isInstancedInterleavedBuffer){for(let oe=0;oe<P.locationSize;oe++)d(P.location+oe,re.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<P.locationSize;oe++)g(P.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let oe=0;oe<P.locationSize;oe++)M(P.location+oe,ue/P.locationSize,We,q,Me*Ue,(we+ue/P.locationSize*oe)*Ue,K)}else{if(O.isInstancedBufferAttribute){for(let re=0;re<P.locationSize;re++)d(P.location+re,O.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let re=0;re<P.locationSize;re++)g(P.location+re);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let re=0;re<P.locationSize;re++)M(P.location+re,ue/P.locationSize,We,q,ue*Ue,ue/P.locationSize*re*Ue,K)}}else if(Y!==void 0){const q=Y[N];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(P.location,q);break;case 3:t.vertexAttrib3fv(P.location,q);break;case 4:t.vertexAttrib4fv(P.location,q);break;default:t.vertexAttrib1fv(P.location,q)}}}}x()}function b(){A();for(const I in i){const B=i[I];for(const G in B){const F=B[G];for(const H in F){const Q=F[H];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete F[H]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const B=i[I.id];for(const G in B){const F=B[G];for(const H in F){const Q=F[H];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete F[H]}}delete i[I.id]}function C(I){for(const B in i){const G=i[B];for(const F in G){const H=G[F];if(H[I.id]===void 0)continue;const Q=H[I.id];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete H[I.id]}}}function _(I){for(const B in i){const G=i[B],F=I.isInstancedMesh===!0?I.id:0,H=G[F];if(H!==void 0){for(const Q in H){const Y=H[Q];for(const N in Y)h(Y[N].object),delete Y[N];delete H[Q]}delete G[F],Object.keys(G).length===0&&delete i[B]}}}function A(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:g,disableUnusedAttributes:x}}function T2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function A2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Zn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Tn&&C!==fi&&!_&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:b,samples:T}}function C2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Zi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,w=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const x=s?0:i,M=x*4;let S=d.clippingState||null;l.value=S,S=h(v,f,M,m);for(let b=0;b!==M;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,v){const w=p!==null?p.length:0;let g=null;if(w!==0){if(g=l.value,v!==!0||g===null){const d=m+w*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,S=m;M!==w;++M,S+=4)a.copy(p[M]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}const Ns=4,R2=6,L2=20,N2=256,_a=new Uh,i0=new it;let Ru=null,Lu=0,Nu=0,Pu=!1;const P2=new V,br=new V;class r0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=P2}=s;Ru=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Lu,Nu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vr||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:_i,format:Zn,colorSpace:Ql,depthBuffer:!1},r=s0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=I2(s)),this._blurMaterial=k2(s,e,n),this._ggxMaterial=D2(s,e,n)}return r}_compileMaterial(e){const n=new fn(new Pn,e);this._renderer.compile(n,_a)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(i0),p.toneMapping=gi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new xo,new Cr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,g=w.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(i0),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const b=this._cubeSize;ms(r,S*b,M>2?b:0,b,b),p.setRenderTarget(r),d&&p.render(w,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vr||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,_a)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=c*1.25,m=p*f,{_lodMax:v}=this,w=this._sizeLods[i],g=3*w*(i>v-Ns?i-v+Ns:0),d=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,ms(s,g,d,3*w,2*w),r.setRenderTarget(s),r.render(o,_a),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ms(e,g,d,3*w,2*w),r.setRenderTarget(e),r.render(o,_a)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-Ns?r-this._lodMax+Ns:0),f=4*(this._cubeSize-h);ms(n,p,f,3*h,2*h),a.setRenderTarget(n),a.render(l,_a)}}function I2(t){const e=[],n=[];let i=t;const r=t-Ns+1+R2;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,f=6,m=3,v=new Float32Array(m*f*p),w=new Float32Array(m*f*p);for(let d=0;d<p;d++){const x=d%3*2/3-1,M=d>2?0:-1,S=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];v.set(S,m*f*d);for(let b=0;b<f;b++){const T=h[b*2]*2-1,C=h[b*2+1]*2-1;d===0?br.set(1,C,T):d===1?br.set(-T,1,-C):d===2?br.set(-T,C,1):d===3?br.set(-1,C,-T):d===4?br.set(-T,-1,C):br.set(T,C,-1),br.toArray(w,(d*f+b)*m)}}const g=new Pn;g.setAttribute("position",new xi(v,m)),g.setAttribute("outputDirection",new xi(w,m)),n.push(new fn(g,null)),i>Ns&&i--}return{lodMeshes:n,sizeLods:e}}function s0(t,e,n){const i=new ei(t,e,n);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function D2(t,e,n){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function k2(t,e,n){return new yi({name:"SphericalGaussianBlur",defines:{SAMPLES:L2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function a0(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function o0(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bv extends ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xo(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Pi});s.uniforms.tEquirect.value=n;const a=new fn(r,s),o=n.minFilter;return n.minFilter===Pr&&(n.minFilter=sn),new Fw(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function U2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===eu||m===tu)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const w=new Bv(v.height);return w.fromEquirectangularTexture(t,f),e.set(f,w),f.addEventListener("dispose",c),o(w.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,v=m===eu||m===tu,w=m===Vr||m===Xs;if(v||w){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new r0(t)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return v&&x&&x.height>0||w&&x&&l(x)?(i===null&&(i=new r0(t)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,m){return m===eu?f.mapping=Vr:m===tu&&(f.mapping=Xs),f}function l(f){let m=0;const v=6;for(let w=0;w<v;w++)f[w]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function F2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Os("WebGLRenderer: "+i+" extension not supported."),r}}}function O2(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(p){const f=[],m=p.index,v=p.attributes.position;let w=0;if(v===void 0)return;if(m!==null){const x=m.array;w=m.version;for(let M=0,S=x.length;M<S;M+=3){const b=x[M+0],T=x[M+1],C=x[M+2];f.push(b,T,T,C,C,b)}}else{const x=v.array;w=v.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const b=M+0,T=M+1,C=M+2;f.push(b,T,T,C,C,b)}}const g=new(v.count>=65535?Cv:Av)(f,1);g.version=w;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function B2(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function c(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let w=0;for(let g=0;g<m;g++)w+=f[g];n.update(w,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function z2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function H2(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),w===!0&&(S=2),g===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*p),_=new bv(C,b,T,p);_.type=fi,_.needsUpdate=!0;const A=S*4;for(let I=0;I<p;I++){const B=d[I],G=x[I],F=M[I],H=b*T*4*I;for(let Q=0;Q<B.count;Q++){const Y=Q*A;v===!0&&(r.fromBufferAttribute(B,Q),C[H+Y+0]=r.x,C[H+Y+1]=r.y,C[H+Y+2]=r.z,C[H+Y+3]=0),w===!0&&(r.fromBufferAttribute(G,Q),C[H+Y+4]=r.x,C[H+Y+5]=r.y,C[H+Y+6]=r.z,C[H+Y+7]=0),g===!0&&(r.fromBufferAttribute(F,Q),C[H+Y+8]=r.x,C[H+Y+9]=r.y,C[H+Y+10]=r.z,C[H+Y+11]=F.itemSize===4?r.w:1)}}f={count:p,texture:_,size:new Ge(b,T)},i.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const w=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function V2(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const G2={[lv]:"LINEAR_TONE_MAPPING",[cv]:"REINHARD_TONE_MAPPING",[uv]:"CINEON_TONE_MAPPING",[dv]:"ACES_FILMIC_TONE_MAPPING",[hv]:"AGX_TONE_MAPPING",[pv]:"NEUTRAL_TONE_MAPPING",[fv]:"CUSTOM_TONE_MAPPING"};function W2(t,e,n,i,r,s){const a=new ei(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Pn;c.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const h=new Tw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new fn(c,h),f=new Uh(-1,1,1,-1,0,1);let m=null,v=null,w=!1,g,d=null,x=[],M=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),l!==null&&l.setSize(S,b);for(let T=0;T<x.length;T++){const C=x[T];C.setSize&&C.setSize(S,b)}},this.setEffects=function(S){x=S,M=x.length>0&&x[0].isRenderPass===!0;const b=a.width,T=a.height;x.length>0&&o===null&&(o=new ei(b,T,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new ei(b,T,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){const _=x[C];_.setSize&&_.setSize(b,T)}},this.begin=function(S,b){if(w||S.toneMapping===gi&&x.length===0)return!1;if(d=b,b!==null){const T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return M===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=gi,!0},this.hasRenderPass=function(){return M},this.end=function(S,b){S.toneMapping=g,w=!0;let T=a,C=o;for(let _=0;_<x.length;_++){const A=x[_];A.enabled!==!1&&(A.render(S,C,T,b),A.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,h.defines={},tt.getTransfer(m)===dt&&(h.defines.SRGB_TRANSFER="");const _=G2[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(d),S.render(p,f),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const zv=new Yt,Mf=new lo(1,1),Hv=new bv,Vv=new ew,Gv=new Pv,l0=[],c0=[],u0=new Float32Array(16),d0=new Float32Array(9),f0=new Float32Array(4);function na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=l0[r];if(s===void 0&&(s=new Float32Array(r),l0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=c0[e];n===void 0&&(n=new Int32Array(e),c0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function $2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;f0.set(i),t.uniformMatrix2fv(this.addr,!1,f0),zt(n,i)}}function K2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;d0.set(i),t.uniformMatrix3fv(this.addr,!1,d0),zt(n,i)}}function Z2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;u0.set(i),t.uniformMatrix4fv(this.addr,!1,u0),zt(n,i)}}function J2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mf.compareFunction=n.isReversedDepthBuffer()?Ch:Ah,s=Mf):s=zv,n.setTexture2D(e||s,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vv,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gv,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hv,r)}function uT(t){switch(t){case 5126:return j2;case 35664:return q2;case 35665:return X2;case 35666:return Y2;case 35674:return $2;case 35675:return K2;case 35676:return Z2;case 5124:case 35670:return J2;case 35667:case 35671:return Q2;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function dT(t,e){t.uniform1fv(this.addr,e)}function fT(t,e){const n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function hT(t,e){const n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function pT(t,e){const n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function mT(t,e){const n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gT(t,e){const n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xT(t,e){const n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vT(t,e){t.uniform1iv(this.addr,e)}function _T(t,e){t.uniform2iv(this.addr,e)}function yT(t,e){t.uniform3iv(this.addr,e)}function ST(t,e){t.uniform4iv(this.addr,e)}function MT(t,e){t.uniform1uiv(this.addr,e)}function wT(t,e){t.uniform2uiv(this.addr,e)}function ET(t,e){t.uniform3uiv(this.addr,e)}function bT(t,e){t.uniform4uiv(this.addr,e)}function TT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Mf:a=zv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function AT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vv,s[a])}function CT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Gv,s[a])}function RT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Hv,s[a])}function LT(t){switch(t){case 5126:return dT;case 35664:return fT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return xT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return wT;case 36295:return ET;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}class NT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LT(n.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function h0(t,e){t.seq.push(e),t.map[e.id]=e}function DT(t,e,n){const i=t.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),a=Iu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){h0(n,c===void 0?new NT(o,t,e):new PT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new IT(o),h0(n,p)),n=p}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);DT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function p0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let UT=0;function FT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const m0=new Ve;function OT(t){tt._getMatrix(m0,tt.workingColorSpace,t);const e=`mat3( ${m0.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case ec:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function g0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+FT(t.getShaderSource(e),o)}else return s}function BT(t,e){const n=OT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zT={[lv]:"Linear",[cv]:"Reinhard",[uv]:"Cineon",[dv]:"ACESFilmic",[hv]:"AgX",[pv]:"Neutral",[fv]:"Custom"};function HT(t,e){const n=zT[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ol=new V;function VT(){tt.getLuminanceCoefficients(ol);const t=ol.x.toFixed(4),e=ol.y.toFixed(4),n=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function WT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Aa(t){return t!==""}function x0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(t){return t.replace(qT,YT)}const XT=new Map;function YT(t,e){let n=$e[e];if(n===void 0){const i=XT.get(e);if(i!==void 0)n=$e[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wf(n)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(t){return t.replace($T,KT)}function KT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function y0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZT={[yl]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function JT(t){return ZT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QT={[Vr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function eA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":QT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const tA={[Xs]:"ENVMAP_MODE_REFRACTION"};function nA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":tA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iA={[ov]:"ENVMAP_BLENDING_MULTIPLY",[PM]:"ENVMAP_BLENDING_MIX",[IM]:"ENVMAP_BLENDING_ADD"};function rA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":iA[t.combine]||"ENVMAP_BLENDING_NONE"}function sA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=JT(n),c=eA(n),h=nA(n),p=rA(n),f=sA(n),m=GT(n),v=WT(s),w=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Aa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Aa).join(`
`),d.length>0&&(d+=`
`)):(g=[y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),d=[y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?$e.tonemapping_pars_fragment:"",n.toneMapping!==gi?HT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,BT("linearToOutputTexel",n.outputColorSpace),VT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Aa).join(`
`)),a=wf(a),a=x0(a,n),a=v0(a,n),o=wf(o),o=x0(o,n),o=v0(o,n),a=_0(a),o=_0(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+g+a,S=x+d+o,b=p0(r,r.VERTEX_SHADER,M),T=p0(r,r.FRAGMENT_SHADER,S);r.attachShader(w,b),r.attachShader(w,T),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function C(I){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(w)||"",G=r.getShaderInfoLog(b)||"",F=r.getShaderInfoLog(T)||"",H=B.trim(),Q=G.trim(),Y=F.trim();let N=!0,P=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,b,T);else{const O=g0(r,b,"vertex"),q=g0(r,T,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+O+`
`+q)}else H!==""?ze("WebGLProgram: Program Info Log:",H):(Q===""||Y==="")&&(P=!1);P&&(I.diagnostics={runnable:N,programLog:H,vertexShader:{log:Q,prefix:g},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(b),r.deleteShader(T),_=new bl(r,w),A=jT(r,w)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(w,kT)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=T,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cA(e),n.set(e,i)),i}}class cA{constructor(e){this.id=oA++,this.code=e,this.usedTimes=0}}function uA(t){return t===Gr||t===Zl||t===Jl}function dA(t,e,n,i,r,s){const a=new Lh,o=new lA,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function w(_,A,L,I,B,G){const F=I.fog,H=B.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||Q,Y),P=N&&N.mapping===Sc?N.image.height:null,O=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=q!==void 0?q.length:0;let Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let Xe,We,Ue,K;if(O){const xt=li[O];Xe=xt.vertexShader,We=xt.fragmentShader}else{Xe=_.vertexShader,We=_.fragmentShader;const xt=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,xt,ct),Ue=xt.id,K=ct.id}const re=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,oe=B.isBatchedMesh===!0,Be=!!_.map,rt=!!_.matcap,ve=!!N,je=!!_.aoMap,Ze=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,Je=!!_.normalMap,J=!!_.displacementMap,le=!!_.emissiveMap,Fe=!!_.metalnessMap,Ke=!!_.roughnessMap,D=_.anisotropy>0,wt=_.clearcoat>0,at=_.dispersion>0,R=_.retroreflectivity>0,y=_.iridescence>0,z=_.sheen>0,X=_.transmission>0,Z=D&&!!_.anisotropyMap,ce=wt&&!!_.clearcoatMap,de=wt&&!!_.clearcoatNormalMap,ee=wt&&!!_.clearcoatRoughnessMap,ie=y&&!!_.iridescenceMap,fe=y&&!!_.iridescenceThicknessMap,Ie=z&&!!_.sheenColorMap,ge=z&&!!_.sheenRoughnessMap,he=!!_.specularMap,De=!!_.specularColorMap,Oe=!!_.specularIntensityMap,qe=X&&!!_.transmissionMap,U=X&&!!_.thicknessMap,pe=!!_.gradientMap,ne=!!_.alphaMap,me=_.alphaTest>0,Se=!!_.alphaHash,se=!!_.extensions;let ke=gi;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ke=t.toneMapping);const Ne={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:Xe,fragmentShader:We,defines:_.defines,customVertexShaderID:Ue,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:oe,batchingColor:oe&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:rt,envMap:ve,envMapMode:ve&&N.mapping,envMapCubeUVHeight:P,aoMap:je,lightMap:Ze,bumpMap:He,normalMap:Je,displacementMap:J,emissiveMap:le,normalMapObjectSpace:Je&&_.normalMapType===UM,normalMapTangentSpace:Je&&_.normalMapType===_f,packedNormalMap:Je&&_.normalMapType===_f&&uA(_.normalMap.format),metalnessMap:Fe,roughnessMap:Ke,anisotropy:D,anisotropyMap:Z,clearcoat:wt,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ee,dispersion:at,retroreflection:R,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:he,specularColorMap:De,specularIntensityMap:Oe,transmission:X,transmissionMap:qe,thicknessMap:U,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Fa&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:me,alphaHash:Se,combine:_.combine,mapUv:Be&&v(_.map.channel),aoMapUv:je&&v(_.aoMap.channel),lightMapUv:Ze&&v(_.lightMap.channel),bumpMapUv:He&&v(_.bumpMap.channel),normalMapUv:Je&&v(_.normalMap.channel),displacementMapUv:J&&v(_.displacementMap.channel),emissiveMapUv:le&&v(_.emissiveMap.channel),metalnessMapUv:Fe&&v(_.metalnessMap.channel),roughnessMapUv:Ke&&v(_.roughnessMap.channel),anisotropyMapUv:Z&&v(_.anisotropyMap.channel),clearcoatMapUv:ce&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(_.sheenRoughnessMap.channel),specularMapUv:he&&v(_.specularMap.channel),specularColorMapUv:De&&v(_.specularColorMap.channel),specularIntensityMapUv:Oe&&v(_.specularIntensityMap.channel),transmissionMapUv:qe&&v(_.transmissionMap.channel),thicknessMapUv:U&&v(_.thicknessMap.channel),alphaMapUv:ne&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Je||D),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Be||ne),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&Je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:le&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ui,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function g(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)A.push(L),A.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(d(A,_),x(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function d(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function x(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const A=m[_.type];let L;if(A){const I=li[A];L=ww.clone(I.uniforms)}else L=_.uniforms;return L}function S(_,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new aA(t,A,_,r),c.push(L),h.set(A,L)),L}function b(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:w,getProgramCacheKey:g,getUniforms:M,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function fA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function S0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function M0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,w,g,d){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:w,renderOrder:f.renderOrder,z:g,group:d},t[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=v,x.materialVariant=a(f),x.groupOrder=w,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function l(f,m,v,w,g,d,x){x.reversedDepth===!0&&(g=-g);const M=o(f,m,v,w,g,d);v.transmission>0?i.push(M):v.transparent===!0?r.push(M):n.push(M)}function c(f,m,v,w,g,d){const x=o(f,m,v,w,g,d);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(f,m){n.length>1&&n.sort(f||hA),i.length>1&&i.sort(m||S0),r.length>1&&r.sort(m||S0)}function p(){for(let f=e,m=t.length;f<m;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function pA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new M0,t.set(i,[a])):r>=s.length?(a=new M0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function mA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new it};break;case"SpotLight":n={position:new V,direction:new V,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xA=0;function vA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _A(t){const e=new mA,n=gA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new bt,a=new bt;function o(c){let h=0,p=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,v=0,w=0,g=0,d=0,x=0,M=0,S=0,b=0,T=0,C=0,_=0,A=0,L=0;c.sort(vA);for(let B=0,G=c.length;B<G;B++){const F=c[B],H=F.color,Q=F.intensity,Y=F.distance;let N=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Gr?N=F.shadow.map.texture:N=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=H.r*Q,p+=H.g*Q,f+=H.b*Q;else if(F.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(F.sh.coefficients[P],Q);L++}else if(F.isSunLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const O=F.shadow,q=n.get(F);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[v]=q,i.sunShadowMap[v]=N;const ue=O.getViewportCount();for(let Ee=0;Ee<ue;Ee++)i.sunShadowMatrix[w+Ee]=O.getMatrix(Ee),i.sunShadowCascade[w+Ee]=O._cascadeData[Ee];w+=ue,v++}i.sun[m]=P,m++}else if(F.isDirectionalLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const O=F.shadow,q=n.get(F);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,i.directionalShadow[g]=q,i.directionalShadowMap[g]=N,i.directionalShadowMatrix[g]=F.shadow.matrix,b++}i.directional[g]=P,g++}else if(F.isSpotLight){const P=e.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(H).multiplyScalar(Q),P.distance=Y,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,i.spot[x]=P;const O=F.shadow;if(F.map&&(i.spotLightMap[_]=F.map,_++,O.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[x]=O.matrix,F.castShadow){const q=n.get(F);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=N,C++}x++}else if(F.isRectAreaLight){const P=e.get(F);P.color.copy(H).multiplyScalar(Q),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),i.rectArea[M]=P,M++}else if(F.isPointLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const O=F.shadow,q=n.get(F);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,q.shadowCameraNear=O.camera.near,q.shadowCameraFar=O.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=N,i.pointShadowMatrix[d]=F.shadow.matrix,T++}i.point[d]=P,d++}else if(F.isHemisphereLight){const P=e.get(F);P.skyColor.copy(F.color).multiplyScalar(Q),P.groundColor.copy(F.groundColor).multiplyScalar(Q),i.hemi[S]=P,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const I=i.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==d||I.spotLength!==x||I.rectAreaLength!==M||I.hemiLength!==S||I.numSunShadows!==v||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==C||I.numSpotMaps!==_||I.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=g,i.spot.length=x,i.rectArea.length=M,i.point.length=d,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,I.sunLength=m,I.directionalLength=g,I.pointLength=d,I.spotLength=x,I.rectAreaLength=M,I.hemiLength=S,I.numSunShadows=v,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=C,I.numSpotMaps=_,I.numLightProbes=L,i.version=xA++)}function l(c,h){let p=0,f=0,m=0,v=0,w=0,g=0;const d=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const S=c[x];if(S.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),p++}else if(S.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),f++}else if(S.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const b=i.rectArea[w];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),w++}else if(S.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function w0(t){const e=new _A(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function yA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new w0(t),e.set(r,[o])):s>=a.length?(o=new w0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wA=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],EA=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],E0=new bt,ya=new V,Du=new V;function bA(t,e,n){let i=new Ph;const r=new Ge,s=new Ge,a=new At,o=new Cw,l=new Rw,c={},h=n.maxTextureSize,p={[Hr]:an,[an]:Hr,[ui]:ui},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Pn;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let d=this.type;this.render=function(T,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===hM&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yl);const A=t.getRenderTarget(),L=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=d!==this.type;G&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=T.length;F<H;F++){const Q=T[F],Y=Q.shadow;if(Y===void 0){ze("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const N=Y.getFrameExtents();r.multiply(N),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/N.x),r.x=s.x*N.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/N.y),r.y=s.y*N.y,Y.mapSize.y=s.y));const P=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=P,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ta){if(Q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new ei(r.x,r.y,{format:Gr,type:_i,minFilter:sn,magFilter:sn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new lo(r.x,r.y,fi),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=Oi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qt,Y.map.depthTexture.magFilter=qt}else Q.isPointLight?(Y.map=new Bv(r.x),Y.map.depthTexture=new Sw(r.x,vi)):(Y.map=new ei(r.x,r.y),Y.map.depthTexture=new lo(r.x,r.y,vi)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=Oi,this.type===yl?(Y.map.depthTexture.compareFunction=P?Ch:Ah,Y.map.depthTexture.minFilter=sn,Y.map.depthTexture.magFilter=sn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qt,Y.map.depthTexture.magFilter=qt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);const O=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,_);for(let q=0;q<O;q++){const ue=Y.getCamera(q);if(Q.isPointLight){const Ee=Y.camera,Xe=Y.matrix,We=Q.distance||Ee.far;We!==Ee.far&&(Ee.far=We,Ee.updateProjectionMatrix()),ya.setFromMatrixPosition(Q.matrixWorld),Ee.position.copy(ya),Du.copy(Ee.position),Du.add(wA[q]),Ee.up.copy(EA[q]),Ee.lookAt(Du),Ee.updateMatrixWorld(),Xe.makeTranslation(-ya.x,-ya.y,-ya.z),E0.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(E0,Ee.coordinateSystem,Ee.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,q),t.clear();else{q===0&&(t.setRenderTarget(Y.map),t.clear());const Ee=Y.getViewport(q);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),B.viewport(a)}i=Y.getFrustum(q),S(C,_,ue,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ta&&x(Y,_),Y.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(A,L,I)};function x(T,C){const _=e.update(w);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new ei(r.x,r.y,{format:Gr,type:_i}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,_,f,w,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,_,m,w,null)}function M(T,C,_,A){let L=null;const I=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=_.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=L.uuid,G=C.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let H=F[G];H===void 0&&(H=L.clone(),F[G]=H,C.addEventListener("dispose",b)),L=H}if(L.visible=C.visible,L.wireframe=C.wireframe,A===Ta?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:p[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=t.properties.get(L);B.light=_}return L}function S(T,C,_,A,L){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ta)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const G=e.update(T),F=T.material;if(Array.isArray(F)){const H=G.groups;for(let Q=0,Y=H.length;Q<Y;Q++){const N=H[Q],P=F[N.materialIndex];if(P&&P.visible){const O=M(T,P,A,L);T.onBeforeShadow(t,T,C,_,G,O,N),t.renderBufferDirect(_,null,G,O,T,N),T.onAfterShadow(t,T,C,_,G,O,N)}}}else if(F.visible){const H=M(T,F,A,L);T.onBeforeShadow(t,T,C,_,G,H,null),t.renderBufferDirect(_,null,G,H,T,null),T.onAfterShadow(t,T,C,_,G,H,null)}}const B=T.children;for(let G=0,F=B.length;G<F;G++)S(B[G],C,_,A,L)}function b(T){T.target.removeEventListener("dispose",b);for(const _ in c){const A=c[_],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function TA(t,e){function n(){let U=!1;const pe=new At;let ne=null;const me=new At(0,0,0,0);return{setMask:function(Se){ne!==Se&&!U&&(t.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){U=Se},setClear:function(Se,se,ke,Ne,xt){xt===!0&&(Se*=Ne,se*=Ne,ke*=Ne),pe.set(Se,se,ke,Ne),me.equals(pe)===!1&&(t.clearColor(Se,se,ke,Ne),me.copy(pe))},reset:function(){U=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let U=!1,pe=!1,ne=null,me=null,Se=null;return{setReversed:function(se){if(pe!==se){const ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const Ne=Se;Se=null,this.setClear(Ne)}},getReversed:function(){return pe},setTest:function(se){se?re(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(se){ne!==se&&!U&&(t.depthMask(se),ne=se)},setFunc:function(se){if(pe&&(se=XM[se]),me!==se){switch(se){case Id:t.depthFunc(t.NEVER);break;case Dd:t.depthFunc(t.ALWAYS);break;case kd:t.depthFunc(t.LESS);break;case io:t.depthFunc(t.LEQUAL);break;case Ud:t.depthFunc(t.EQUAL);break;case Fd:t.depthFunc(t.GEQUAL);break;case Od:t.depthFunc(t.GREATER);break;case Bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=se}},setLocked:function(se){U=se},setClear:function(se){Se!==se&&(Se=se,pe&&(se=1-se),t.clearDepth(se))},reset:function(){U=!1,ne=null,me=null,Se=null,pe=!1}}}function r(){let U=!1,pe=null,ne=null,me=null,Se=null,se=null,ke=null,Ne=null,xt=null;return{setTest:function(ct){U||(ct?re(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(ct){pe!==ct&&!U&&(t.stencilMask(ct),pe=ct)},setFunc:function(ct,Gn,ni){(ne!==ct||me!==Gn||Se!==ni)&&(t.stencilFunc(ct,Gn,ni),ne=ct,me=Gn,Se=ni)},setOp:function(ct,Gn,ni){(se!==ct||ke!==Gn||Ne!==ni)&&(t.stencilOp(ct,Gn,ni),se=ct,ke=Gn,Ne=ni)},setLocked:function(ct){U=ct},setClear:function(ct){xt!==ct&&(t.clearStencil(ct),xt=ct)},reset:function(){U=!1,pe=null,ne=null,me=null,Se=null,se=null,ke=null,Ne=null,xt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},f={},m=new WeakMap,v=[],w=null,g=!1,d=null,x=null,M=null,S=null,b=null,T=null,C=null,_=new it(0,0,0),A=0,L=!1,I=null,B=null,G=null,F=null,H=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,N=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),Y=N>=1):P.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),Y=N>=2);let O=null,q={};const ue=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Xe=new At().fromArray(ue),We=new At().fromArray(Ee);function Ue(U,pe,ne,me){const Se=new Uint8Array(4),se=t.createTexture();t.bindTexture(U,se),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<ne;ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(pe+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return se}const K={};K[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(io),He(!1),Je(Em),re(t.CULL_FACE),je(Pi);function re(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Me(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function we(U,pe){return f[U]!==pe?(t.bindFramebuffer(U,pe),f[U]=pe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function oe(U,pe){let ne=v,me=!1;if(U){ne=m.get(pe),ne===void 0&&(ne=[],m.set(pe,ne));const Se=U.textures;if(ne.length!==Se.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let se=0,ke=Se.length;se<ke;se++)ne[se]=t.COLOR_ATTACHMENT0+se;ne.length=Se.length,me=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,me=!0);me&&t.drawBuffers(ne)}function Be(U){return w!==U?(t.useProgram(U),w=U,!0):!1}const rt={[gs]:t.FUNC_ADD,[mM]:t.FUNC_SUBTRACT,[gM]:t.FUNC_REVERSE_SUBTRACT};rt[xM]=t.MIN,rt[vM]=t.MAX;const ve={[_M]:t.ZERO,[yM]:t.ONE,[SM]:t.SRC_COLOR,[sv]:t.SRC_ALPHA,[AM]:t.SRC_ALPHA_SATURATE,[bM]:t.DST_COLOR,[wM]:t.DST_ALPHA,[MM]:t.ONE_MINUS_SRC_COLOR,[av]:t.ONE_MINUS_SRC_ALPHA,[TM]:t.ONE_MINUS_DST_COLOR,[EM]:t.ONE_MINUS_DST_ALPHA,[CM]:t.CONSTANT_COLOR,[RM]:t.ONE_MINUS_CONSTANT_COLOR,[LM]:t.CONSTANT_ALPHA,[NM]:t.ONE_MINUS_CONSTANT_ALPHA};function je(U,pe,ne,me,Se,se,ke,Ne,xt,ct){if(U===Pi){g===!0&&(Me(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),U!==pM){if(U!==d||ct!==L){if((x!==gs||b!==gs)&&(t.blendEquation(t.FUNC_ADD),x=gs,b=gs),ct)switch(U){case Fa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bm:t.blendFunc(t.ONE,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Am:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:st("WebGLState: Invalid blending: ",U);break}else switch(U){case Fa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Tm:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Am:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",U);break}M=null,S=null,T=null,C=null,_.set(0,0,0),A=0,d=U,L=ct}return}Se=Se||pe,se=se||ne,ke=ke||me,(pe!==x||Se!==b)&&(t.blendEquationSeparate(rt[pe],rt[Se]),x=pe,b=Se),(ne!==M||me!==S||se!==T||ke!==C)&&(t.blendFuncSeparate(ve[ne],ve[me],ve[se],ve[ke]),M=ne,S=me,T=se,C=ke),(Ne.equals(_)===!1||xt!==A)&&(t.blendColor(Ne.r,Ne.g,Ne.b,xt),_.copy(Ne),A=xt),d=U,L=!1}function Ze(U,pe){U.side===ui?Me(t.CULL_FACE):re(t.CULL_FACE);let ne=U.side===an;pe&&(ne=!ne),He(ne),U.blending===Fa&&U.transparent===!1?je(Pi):je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){I!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),I=U)}function Je(U){U!==dM?(re(t.CULL_FACE),U!==B&&(U===Em?t.cullFace(t.BACK):U===fM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),B=U}function J(U){U!==G&&(Y&&t.lineWidth(U),G=U)}function le(U,pe,ne){U?(re(t.POLYGON_OFFSET_FILL),(F!==pe||H!==ne)&&(F=pe,H=ne,a.getReversed()&&(pe=-pe),t.polygonOffset(pe,ne))):Me(t.POLYGON_OFFSET_FILL)}function Fe(U){U?re(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function Ke(U){U===void 0&&(U=t.TEXTURE0+Q-1),O!==U&&(t.activeTexture(U),O=U)}function D(U,pe,ne){ne===void 0&&(O===null?ne=t.TEXTURE0+Q-1:ne=O);let me=q[ne];me===void 0&&(me={type:void 0,texture:void 0},q[ne]=me),(me.type!==U||me.texture!==pe)&&(O!==ne&&(t.activeTexture(ne),O=ne),t.bindTexture(U,pe||K[U]),me.type=U,me.texture=pe)}function wt(){const U=q[O];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function y(){try{t.texSubImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function z(){try{t.texSubImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function ce(){try{t.texStorage2D(...arguments)}catch(U){st("WebGLState:",U)}}function de(){try{t.texStorage3D(...arguments)}catch(U){st("WebGLState:",U)}}function ee(){try{t.texImage2D(...arguments)}catch(U){st("WebGLState:",U)}}function ie(){try{t.texImage3D(...arguments)}catch(U){st("WebGLState:",U)}}function fe(U){return p[U]!==void 0?p[U]:t.getParameter(U)}function Ie(U,pe){p[U]!==pe&&(t.pixelStorei(U,pe),p[U]=pe)}function ge(U){Xe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Xe.copy(U))}function he(U){We.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function De(U,pe){let ne=c.get(pe);ne===void 0&&(ne=new WeakMap,c.set(pe,ne));let me=ne.get(U);me===void 0&&(me=t.getUniformBlockIndex(pe,U.name),ne.set(U,me))}function Oe(U,pe){const me=c.get(pe).get(U);l.get(pe)!==me&&(t.uniformBlockBinding(pe,me,U.__bindingPointIndex),l.set(pe,me))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},O=null,q={},f={},m=new WeakMap,v=[],w=null,g=!1,d=null,x=null,M=null,S=null,b=null,T=null,C=null,_=new it(0,0,0),A=0,L=!1,I=null,B=null,G=null,F=null,H=null,Xe.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Me,bindFramebuffer:we,drawBuffers:oe,useProgram:Be,setBlending:je,setMaterial:Ze,setFlipSided:He,setCullFace:Je,setLineWidth:J,setPolygonOffset:le,setScissorTest:Fe,activeTexture:Ke,bindTexture:D,unbindTexture:wt,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Ie,getParameter:fe,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:de,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:ge,viewport:he,reset:qe}}function AA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,y){return v?new OffscreenCanvas(R,y):oo("canvas")}function g(R,y,z){let X=1;const Z=at(R);if((Z.width>z||Z.height>z)&&(X=z/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(X*Z.width),de=Math.floor(X*Z.height);f===void 0&&(f=w(ce,de));const ee=y?w(ce,de):f;return ee.width=ce,ee.height=de,ee.getContext("2d").drawImage(R,0,0,ce,de),ze("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+de+")."),ee}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,y,z,X,Z,ce=!1){if(R!==null){if(t[R]!==void 0)return t[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let de;X&&(de=e.get("EXT_texture_norm16"),de||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===t.RED&&(z===t.FLOAT&&(ee=t.R32F),z===t.HALF_FLOAT&&(ee=t.R16F),z===t.UNSIGNED_BYTE&&(ee=t.R8),z===t.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),z===t.SHORT&&de&&(ee=de.R16_SNORM_EXT)),y===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.R8UI),z===t.UNSIGNED_SHORT&&(ee=t.R16UI),z===t.UNSIGNED_INT&&(ee=t.R32UI),z===t.BYTE&&(ee=t.R8I),z===t.SHORT&&(ee=t.R16I),z===t.INT&&(ee=t.R32I)),y===t.RG&&(z===t.FLOAT&&(ee=t.RG32F),z===t.HALF_FLOAT&&(ee=t.RG16F),z===t.UNSIGNED_BYTE&&(ee=t.RG8),z===t.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),z===t.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RG8UI),z===t.UNSIGNED_SHORT&&(ee=t.RG16UI),z===t.UNSIGNED_INT&&(ee=t.RG32UI),z===t.BYTE&&(ee=t.RG8I),z===t.SHORT&&(ee=t.RG16I),z===t.INT&&(ee=t.RG32I)),y===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),z===t.UNSIGNED_INT&&(ee=t.RGB32UI),z===t.BYTE&&(ee=t.RGB8I),z===t.SHORT&&(ee=t.RGB16I),z===t.INT&&(ee=t.RGB32I)),y===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),z===t.UNSIGNED_INT&&(ee=t.RGBA32UI),z===t.BYTE&&(ee=t.RGBA8I),z===t.SHORT&&(ee=t.RGBA16I),z===t.INT&&(ee=t.RGBA32I)),y===t.RGB&&(z===t.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),z===t.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),y===t.RGBA){const ie=ce?ec:tt.getTransfer(Z);z===t.FLOAT&&(ee=t.RGBA32F),z===t.HALF_FLOAT&&(ee=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ee=ie===dt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),z===t.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(R,y){let z;return R?y===null||y===vi||y===so?z=t.DEPTH24_STENCIL8:y===fi?z=t.DEPTH32F_STENCIL8:y===ro&&(z=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vi||y===so?z=t.DEPTH_COMPONENT24:y===fi?z=t.DEPTH_COMPONENT32F:y===ro&&(z=t.DEPTH_COMPONENT16),z}function T(R,y){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function _(R){const y=R.target;y.removeEventListener("dispose",_),I(y)}function A(R){const y=i.get(R);if(y.__webglInit===void 0)return;const z=R.source,X=m.get(z);if(X){const Z=X[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(R),Object.keys(X).length===0&&m.delete(z)}i.remove(R)}function L(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const z=R.source,X=m.get(z);delete X[y.__cacheKey],a.memory.textures--}function I(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Z=0;Z<y.__webglFramebuffer[X].length;Z++)t.deleteFramebuffer(y.__webglFramebuffer[X][Z]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=R.textures;for(let X=0,Z=z.length;X<Z;X++){const ce=i.get(z[X]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(R)}let B=0;function G(){B=0}function F(){return B}function H(R){B=R}function Q(){const R=B;return R>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,R}function Y(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function N(R,y){const z=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const X=R.image;if(X===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+y)}function P(R,y){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Me(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+y)}function O(R,y){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Me(z,R,y);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+y)}function q(R,y){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){we(z,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+y)}const ue={[zd]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},Ee={[qt]:t.NEAREST,[DM]:t.NEAREST_MIPMAP_NEAREST,[Fo]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},Xe={[OM]:t.NEVER,[GM]:t.ALWAYS,[BM]:t.LESS,[Ah]:t.LEQUAL,[zM]:t.EQUAL,[Ch]:t.GEQUAL,[HM]:t.GREATER,[VM]:t.NOTEQUAL};function We(R,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===nu||y.magFilter===Fo||y.magFilter===Pr||y.minFilter===sn||y.minFilter===nu||y.minFilter===Fo||y.minFilter===Pr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ue[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ue[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ue[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ee[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ee[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qt||y.minFilter!==Fo&&y.minFilter!==Pr||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ue(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const X=y.source;let Z=m.get(X);Z===void 0&&(Z={},m.set(X,Z));const ce=Y(y);if(ce!==R.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ce].usedTimes++;const de=Z[R.__cacheKey];de!==void 0&&(Z[R.__cacheKey].usedTimes--,de.usedTimes===0&&L(y)),R.__cacheKey=ce,R.__webglTexture=Z[ce].texture}return z}function K(R,y,z){return Math.floor(Math.floor(R/z)/y)}function re(R,y,z,X){const ce=R.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,z,X,y.data);else{ce.sort((Ie,ge)=>Ie.start-ge.start);let de=0;for(let Ie=1;Ie<ce.length;Ie++){const ge=ce[de],he=ce[Ie],De=ge.start+ge.count,Oe=K(he.start,y.width,4),qe=K(ge.start,y.width,4);he.start<=De+1&&Oe===qe&&K(he.start+he.count-1,y.width,4)===Oe?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++de,ce[de]=he)}ce.length=de+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Ie=0,ge=ce.length;Ie<ge;Ie++){const he=ce[Ie],De=Math.floor(he.start/4),Oe=Math.ceil(he.count/4),qe=De%y.width,U=Math.floor(De/y.width),pe=Oe,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,qe,U,pe,ne,z,X,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Me(R,y,z){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const Z=Ue(R,y),ce=y.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+z);const de=i.get(ce);if(ce.version!==de.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ne=tt.getPrimaries(tt.workingColorSpace),me=y.colorSpace===er?null:tt.getPrimaries(y.colorSpace),Se=y.colorSpace===er||ne===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=g(y.image,!1,r.maxTextureSize);ie=wt(y,ie);const fe=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type);let ge=S(y.internalFormat,fe,Ie,y.normalized,y.colorSpace,y.isVideoTexture);We(X,y);let he;const De=y.mipmaps,Oe=y.isVideoTexture!==!0,qe=de.__version===void 0||Z===!0,U=ce.dataReady,pe=T(y,ie);if(y.isDepthTexture)ge=b(y.format===Ir,y.type),qe&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,fe,Ie,null));else if(y.isDataTexture)if(De.length>0){Oe&&qe&&n.texStorage2D(t.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Ie,he.data):n.texImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,fe,Ie,he.data);y.generateMipmaps=!1}else Oe?(qe&&n.texStorage2D(t.TEXTURE_2D,pe,ge,ie.width,ie.height),U&&re(y,ie,fe,Ie)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,fe,Ie,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,De[0].width,De[0].height,ie.depth);for(let ne=0,me=De.length;ne<me;ne++)if(he=De[ne],y.format!==Zn)if(fe!==null)if(Oe){if(U)if(y.layerUpdates.size>0){const Se=n0(he.width,he.height,y.format,y.type);for(const se of y.layerUpdates){const ke=he.data.subarray(se*Se/he.data.BYTES_PER_ELEMENT,(se+1)*Se/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,se,he.width,he.height,1,fe,ke)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ie.depth,fe,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,ie.depth,0,he.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ie.depth,fe,Ie,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,ie.depth,0,fe,Ie,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Oe&&qe&&n.texStorage2D(t.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],y.format!==Zn?fe!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,fe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,he.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Ie,he.data):n.texImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,fe,Ie,he.data)}else if(y.isDataArrayTexture)if(Oe){if(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,ie.width,ie.height,ie.depth),U)if(y.layerUpdates.size>0){const ne=n0(ie.width,ie.height,y.format,y.type);for(const me of y.layerUpdates){const Se=ie.data.subarray(me*ne/ie.data.BYTES_PER_ELEMENT,(me+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,fe,Ie,Se)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ie,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,fe,Ie,ie.data);else if(y.isData3DTexture)Oe?(qe&&n.texStorage3D(t.TEXTURE_3D,pe,ge,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ie,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,fe,Ie,ie.data);else if(y.isFramebufferTexture){if(qe)if(Oe)n.texStorage2D(t.TEXTURE_2D,pe,ge,ie.width,ie.height);else{let ne=ie.width,me=ie.height;for(let Se=0;Se<pe;Se++)n.texImage2D(t.TEXTURE_2D,Se,ge,ne,me,0,fe,Ie,null),ne>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),p.add(y),ne.onpaint=me=>{const Se=me.changedElements;for(const se of p)Se.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Se=t.RGBA,se=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,se,ke,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&qe){const ne=at(De[0]);n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height)}for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe,Ie,he):n.texImage2D(t.TEXTURE_2D,ne,ge,fe,Ie,he);y.generateMipmaps=!1}else if(Oe){if(qe){const ne=at(ie);n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ie,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,fe,Ie,ie);d(y)&&x(X),de.__version=ce.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function we(R,y,z){if(y.image.length!==6)return;const X=Ue(R,y),Z=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const ce=i.get(Z);if(Z.version!==ce.__version||X===!0){n.activeTexture(t.TEXTURE0+z);const de=tt.getPrimaries(tt.workingColorSpace),ee=y.colorSpace===er?null:tt.getPrimaries(y.colorSpace),ie=y.colorSpace===er||de===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ie=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!fe&&!Ie?ge[se]=g(y.image[se],!0,r.maxCubemapSize):ge[se]=Ie?y.image[se].image:y.image[se],ge[se]=wt(y,ge[se]);const he=ge[0],De=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type),qe=S(y.internalFormat,De,Oe,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pe=ce.__version===void 0||X===!0,ne=Z.dataReady;let me=T(y,he);We(t.TEXTURE_CUBE_MAP,y);let Se;if(fe){U&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,qe,he.width,he.height);for(let se=0;se<6;se++){Se=ge[se].mipmaps;for(let ke=0;ke<Se.length;ke++){const Ne=Se[ke];y.format!==Zn?De!==null?U?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ne.width,Ne.height,De,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,qe,Ne.width,Ne.height,0,Ne.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ne.width,Ne.height,De,Oe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,qe,Ne.width,Ne.height,0,De,Oe,Ne.data)}}}else{if(Se=y.mipmaps,U&&pe){Se.length>0&&me++;const se=at(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,qe,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,De,Oe,ge[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ge[se].width,ge[se].height,0,De,Oe,ge[se].data);for(let ke=0;ke<Se.length;ke++){const xt=Se[ke].image[se].image;U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,xt.width,xt.height,De,Oe,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,qe,xt.width,xt.height,0,De,Oe,xt.data)}}else{U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Oe,ge[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,De,Oe,ge[se]);for(let ke=0;ke<Se.length;ke++){const Ne=Se[ke];U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,De,Oe,Ne.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,qe,De,Oe,Ne.image[se])}}}d(y)&&x(t.TEXTURE_CUBE_MAP),ce.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function oe(R,y,z,X,Z,ce){const de=s.convert(z.format,z.colorSpace),ee=s.convert(z.type),ie=S(z.internalFormat,de,ee,z.normalized,z.colorSpace),fe=i.get(y),Ie=i.get(z);if(Ie.__renderTarget=y,!fe.__hasExternalTextures){const ge=Math.max(1,y.width>>ce),he=Math.max(1,y.height>>ce);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ce,ie,ge,he,y.depth,0,de,ee,null):n.texImage2D(Z,ce,ie,ge,he,0,de,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ke(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Z,Ie.__webglTexture,0,Fe(y)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Z,Ie.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,y,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const X=y.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ce=b(y.stencilBuffer,Z),de=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ke(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(y),ce,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(y),ce,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ce,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,R)}else{const X=y.textures;for(let Z=0;Z<X.length;Z++){const ce=X[Z],de=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),ie=S(ce.internalFormat,de,ee,ce.normalized,ce.colorSpace);Ke(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(y),ie,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rt(R,y,z){const X=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),We(t.TEXTURE_CUBE_MAP,y.depthTexture);const fe=s.convert(y.depthTexture.format),Ie=s.convert(y.depthTexture.type);let ge;y.depthTexture.format===Oi?ge=t.DEPTH_COMPONENT24:y.depthTexture.format===Ir&&(ge=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,y.width,y.height,0,fe,Ie,null)}}else N(y.depthTexture,0);const ce=Z.__webglTexture,de=Fe(y),ee=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ie=y.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Oi)Ke(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ce,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ce,0);else if(y.depthTexture.format===Ir)Ke(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ce,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(R){const y=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)rt(y.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?rt(y.__webglFramebuffer[0],R,0):rt(y.__webglFramebuffer,R,0)}else if(z){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),Be(y.__webglDepthbuffer[X],R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ce)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Be(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,y,z){const X=i.get(R);y!==void 0&&oe(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ve(R)}function Ze(R){const y=R.texture,z=i.get(R),X=i.get(y);R.addEventListener("dispose",_);const Z=R.textures,ce=R.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)z.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else z.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)z.__webglFramebuffer[ee]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let ee=0,ie=Z.length;ee<ie;ee++){const fe=i.get(Z[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ke(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<Z.length;ee++){const ie=Z[ee];z.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);const fe=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),ge=S(ie.internalFormat,fe,Ie,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),he=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),We(t.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)oe(z.__webglFramebuffer[ee][ie],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else oe(z.__webglFramebuffer[ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(y)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let ee=0,ie=Z.length;ee<ie;ee++){const fe=Z[ee],Ie=i.get(fe);let ge=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Ie.__webglTexture),We(ge,fe),oe(z.__webglFramebuffer,R,fe,t.COLOR_ATTACHMENT0+ee,ge,0),d(fe)&&x(ge)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,X.__webglTexture),We(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)oe(z.__webglFramebuffer[ie],R,y,t.COLOR_ATTACHMENT0,ee,ie);else oe(z.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ee,0);d(y)&&x(ee),n.unbindTexture()}R.depthBuffer&&ve(R)}function He(R){const y=R.textures;for(let z=0,X=y.length;z<X;z++){const Z=y[z];if(d(Z)){const ce=M(R),de=i.get(Z).__webglTexture;n.bindTexture(ce,de),x(ce),n.unbindTexture()}}}const Je=[],J=[];function le(R){if(R.samples>0){if(Ke(R)===!1){const y=R.textures,z=R.width,X=R.height;let Z=t.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(R),ee=y.length>1;if(ee)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Ie=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,z,X,0,0,z,X,Z,t.NEAREST),l===!0&&(Je.length=0,J.length=0,Je.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Je.push(ce),J.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,J)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Ie=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function Ke(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function wt(R,y){const z=R.colorSpace,X=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ql&&z!==er&&(tt.getTransfer(z)===dt?(X!==Zn||Z!==Tn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",z)),y}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=N,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=je,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CA(t,e){function n(i,r=er){let s;const a=tt.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_v)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===gv)return t.BYTE;if(i===xv)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===Sh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===_i)return t.HALF_FLOAT;if(i===yv)return t.ALPHA;if(i===Sv)return t.RGB;if(i===Zn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===Mv)return t.RED;if(i===Eh)return t.RED_INTEGER;if(i===Gr)return t.RG;if(i===bh)return t.RG_INTEGER;if(i===Th)return t.RGBA_INTEGER;if(i===Sl||i===Ml||i===wl||i===El)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vd||i===Gd||i===Wd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===Xd||i===Yd||i===$d||i===Kd||i===Zl||i===Zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qd||i===Xd)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$d)return s.COMPRESSED_R11_EAC;if(i===Kd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zl)return s.COMPRESSED_RG11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ef)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===af)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===df)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ff)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hf||i===pf||i===mf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hf)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gf||i===xf||i===Jl||i===vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Iv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:RA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new Mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Yr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,v=null;const w=typeof XRWebGLBinding<"u",g=new NA,d={},x=n.getContextAttributes();let M=null,S=null;const b=[],T=[],C=new Ge;let _=null,A=null;const L=new Fn;L.viewport=new At;const I=new Fn;I.viewport=new At;const B=[L,I],G=new Ow;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=b[K];return re===void 0&&(re=new du,b[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=b[K];return re===void 0&&(re=new du,b[K]=re),re.getGripSpace()},this.getHand=function(K){let re=b[K];return re===void 0&&(re=new du,b[K]=re),re.getHandSpace()};function Q(K){const re=T.indexOf(K.inputSource);if(re===-1)return;const Me=b[re];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||a),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",N);for(let K=0;K<b.length;K++){const re=T[K];re!==null&&(T[K]=null,b[K].disconnect(re))}F=null,H=null,g.reset();for(const K in d)delete d[K];if(e.setRenderTarget(M),m=null,f=null,p=null,r=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,we=null,oe=null;x.depth&&(oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=x.stencil?Ir:Oi,we=x.stencil?so:vi);const Be={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ei(f.textureWidth,f.textureHeight,{format:Zn,type:Tn,depthTexture:new lo(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ei(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(K){for(let re=0;re<K.removed.length;re++){const Me=K.removed[re],we=T.indexOf(Me);we>=0&&(T[we]=null,b[we].disconnect(Me))}for(let re=0;re<K.added.length;re++){const Me=K.added[re];let we=T.indexOf(Me);if(we===-1){for(let Be=0;Be<b.length;Be++)if(Be>=T.length){T.push(Me),we=Be;break}else if(T[Be]===null){T[Be]=Me,we=Be;break}if(we===-1)break}const oe=b[we];oe&&oe.connect(Me)}}const P=new V,O=new V;function q(K,re,Me){P.setFromMatrixPosition(re.matrixWorld),O.setFromMatrixPosition(Me.matrixWorld);const we=P.distanceTo(O),oe=re.projectionMatrix.elements,Be=Me.projectionMatrix.elements,rt=oe[14]/(oe[10]-1),ve=oe[14]/(oe[10]+1),je=(oe[9]+1)/oe[5],Ze=(oe[9]-1)/oe[5],He=(oe[8]-1)/oe[0],Je=(Be[8]+1)/Be[0],J=rt*He,le=rt*Je,Fe=we/(-He+Je),Ke=Fe*-He;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ke),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),oe[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const D=rt+Fe,wt=ve+Fe,at=J-Ke,R=le+(we-Ke),y=je*ve/wt*D,z=Ze*ve/wt*D;K.projectionMatrix.makePerspective(at,R,y,z,D,wt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let re=K.near,Me=K.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),G.near=I.near=L.near=re,G.far=I.far=L.far=Me,(F!==G.near||H!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),F=G.near,H=G.far),G.layers.mask=K.layers.mask|6,L.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const we=K.parent,oe=G.cameras;ue(G,we);for(let Be=0;Be<oe.length;Be++)ue(oe[Be],we);oe.length===2?q(G,L,I):G.projectionMatrix.copy(L.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),Ee(K,G,we)};function Ee(K,re,Me){Me===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(K){return d[K]};let Xe=null;function We(K,re){if(h=re.getViewerPose(c||a),v=re,h!==null){const Me=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let we=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,we=!0);for(let ve=0;ve<Me.length;ve++){const je=Me[ve];let Ze=null;if(m!==null)Ze=m.getViewport(je);else{const Je=p.getViewSubImage(f,je);Ze=Je.viewport,ve===0&&(e.setRenderTargetTextures(S,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(S))}let He=B[ve];He===void 0&&(He=new Fn,He.layers.enable(ve),He.viewport=new At,B[ve]=He),He.matrix.fromArray(je.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(je.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ve===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),we===!0&&G.cameras.push(He)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){p=i.getBinding();const ve=p.getDepthInformation(Me[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,r.renderState)}if(oe&&oe.includes("camera-access")&&w){e.state.unbindTexture(),p=i.getBinding();for(let ve=0;ve<Me.length;ve++){const je=Me[ve].camera;if(je){let Ze=d[je];Ze||(Ze=new Iv,d[je]=Ze);const He=p.getCameraImage(je);Ze.sourceTexture=He}}}}for(let Me=0;Me<b.length;Me++){const we=T[Me],oe=b[Me];we!==null&&oe!==void 0&&oe.update(we,re,c||a)}Xe&&Xe(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const Ue=new Fv;Ue.setAnimationLoop(We),this.setAnimationLoop=function(K){Xe=K},this.dispose=function(){}}}const IA=new bt,Wv=new Ve;Wv.set(-1,0,0,0,1,0,0,0,1);function DA(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Dv(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),w(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===an&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===an&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,S=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Wv),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=M*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function w(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const T=b.program;i.uniformBlockBinding(S,T)}function c(S,b){let T=r[S.id];T===void 0&&(g(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",x));const C=b.program;i.updateUBOMapping(S,C);const _=e.render.frame;s[S.id]!==_&&(f(S),s[S.id]=_)}function h(S){const b=p();S.__bindingPointIndex=b;const T=t.createBuffer(),C=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let _=0,A=T.length;_<A;_++){const L=T[_];if(Array.isArray(L))for(let I=0,B=L.length;I<B;I++)m(L[I],_,I,C);else m(L,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,b,T,C){if(w(S,b,T,C)===!0){const _=S.__offset,A=S.value;if(Array.isArray(A)){let L=0;for(let I=0;I<A.length;I++){const B=A[I],G=d(B);v(B,S.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function v(S,b,T){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,T)}function w(S,b,T,C){const _=S.value,A=b+"_"+T;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const L=C[A];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function g(S){const b=S.uniforms;let T=0;const C=16;for(let A=0,L=b.length;A<L;A++){const I=Array.isArray(b[A])?b[A]:[b[A]];for(let B=0,G=I.length;B<G;B++){const F=I[B],H=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,Y=H.length;Q<Y;Q++){const N=H[Q],P=d(N),O=T%C,q=O%P.boundary,ue=O+q;T+=q,ue!==0&&C-ue<P.storage&&(T+=C-ue),F.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=P.storage}}}const _=T%C;return _>0&&(T+=C-_),S.__size=T,S.__cache={},this}function d(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),b}function x(S){const b=S.target;b.removeEventListener("dispose",x);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const UA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function FA(){return ai===null&&(ai=new vw(UA,16,16,Gr,_i),ai.name="DFG_LUT",ai.minFilter=sn,ai.magFilter=sn,ai.wrapS=Li,ai.wrapT=Li,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class OA{constructor(e={}){const{canvas:n=jM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Tn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const w=m,g=new Set([Th,bh,Eh]),d=new Set([Tn,vi,ro,so,Mh,wh]),x=new Uint32Array(4),M=new Int32Array(4),S=new V;let b=null,T=null;const C=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,B=null,G=null,F=null,H=null;this._outputColorSpace=bn;let Q=0,Y=0,N=null,P=-1,O=null;const q=new At,ue=new At;let Ee=null;const Xe=new it(0);let We=0,Ue=n.width,K=n.height,re=1,Me=null,we=null;const oe=new At(0,0,Ue,K),Be=new At(0,0,Ue,K);let rt=!1;const ve=new Ph;let je=!1,Ze=!1;const He=new bt,Je=new V,J=new At,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ke(){return N===null?re:1}let D=i;function wt(E,k){return n.getContext(E,k)}let at,R,y,z,X,Z,ce,de,ee,ie,fe,Ie,ge,he,De,Oe,qe,U,pe,ne,me,Se,se;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yh}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",Gn,!1),D===null){const k="webgl2";if(D=wt(k,E),D===null)throw wt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Gn,!1),st("WebGLRenderer: "+E.message),E}function ke(){at=new F2(D),at.init(),me=new CA(D,at),R=new A2(D,at,e,me),y=new TA(D,at),R.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),G=D.createFramebuffer(),F=D.createFramebuffer(),H=D.createFramebuffer(),z=new z2(D),X=new fA,Z=new AA(D,at,y,X,R,me,z),ce=new U2(L),de=new Vw(D),Se=new b2(D,de),ee=new O2(D,de,z,Se),ie=new V2(D,ee,de,Se,z),U=new H2(D,R,Z),De=new C2(X),fe=new dA(L,ce,at,R,Se,De),Ie=new DA(L,X),ge=new pA,he=new yA(at),qe=new E2(L,ce,y,ie,v,l),Oe=new bA(L,ie,R),se=new kA(D,z,R,y),pe=new T2(D,at,z),ne=new B2(D,at,z),z.programs=fe.programs,L.capabilities=R,L.extensions=at,L.properties=X,L.renderLists=ge,L.shadowMap=Oe,L.state=y,L.info=z}w!==Tn&&(A=new W2(w,n.width,n.height,o,r,s));const Ne=new PA(L,D);this.xr=Ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(Ue,K,!1))},this.getSize=function(E){return E.set(Ue,K)},this.setSize=function(E,k,$=!0){if(Ne.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=E,K=k,n.width=Math.floor(E*re),n.height=Math.floor(k*re),$===!0&&(n.style.width=E+"px",n.style.height=k+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Ue*re,K*re).floor()},this.setDrawingBufferSize=function(E,k,$){Ue=E,K=k,re=$,n.width=Math.floor(E*$),n.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(w===Tn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,k,$,W){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,k,$,W),y.viewport(q.copy(oe).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,k,$,W){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,k,$,W),y.scissor(ue.copy(Be).multiplyScalar(re).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){y.setScissorTest(rt=E)},this.setOpaqueSort=function(E){Me=E},this.setTransparentSort=function(E){we=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,$=!0){let W=0;if(E){let j=!1;if(N!==null){const ye=N.texture.format;j=g.has(ye)}if(j){const ye=N.texture.type,Te=d.has(ye),_e=qe.getClearColor(),Re=qe.getClearAlpha(),Pe=_e.r,Ye=_e.g,Qe=_e.b;Te?(x[0]=Pe,x[1]=Ye,x[2]=Qe,x[3]=Re,D.clearBufferuiv(D.COLOR,0,x)):(M[0]=Pe,M[1]=Ye,M[2]=Qe,M[3]=Re,D.clearBufferiv(D.COLOR,0,M))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Gn,!1),qe.dispose(),ge.dispose(),he.dispose(),X.dispose(),ce.dispose(),ie.dispose(),Se.dispose(),se.dispose(),fe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Gh),Ne.removeEventListener("sessionend",Wh),yr.stop()};function xt(E){E.preventDefault(),tc("WebGLRenderer: Context Lost."),I=!0}function ct(){tc("WebGLRenderer: Context Restored."),I=!1;const E=z.autoReset,k=Oe.enabled,$=Oe.autoUpdate,W=Oe.needsUpdate,j=Oe.type;ke(),z.autoReset=E,Oe.enabled=k,Oe.autoUpdate=$,Oe.needsUpdate=W,Oe.type=j}function Gn(E){st("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ni(E){const k=E.target;k.removeEventListener("dispose",ni),jv(k)}function jv(E){qv(E),X.remove(E)}function qv(E){const k=X.get(E).programs;k!==void 0&&(k.forEach(function($){fe.releaseProgram($)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,W,j,ye){k===null&&(k=le);const Te=j.isMesh&&j.matrixWorld.determinantAffine()<0,_e=$v(E,k,$,W,j);y.setMaterial(W,Te);let Re=$.index,Pe=1;if(W.wireframe===!0){if(Re=ee.getWireframeAttribute($),Re===void 0)return;Pe=2}const Ye=$.drawRange,Qe=$.attributes.position;let Le=Ye.start*Pe,ut=(Ye.start+Ye.count)*Pe;ye!==null&&(Le=Math.max(Le,ye.start*Pe),ut=Math.min(ut,(ye.start+ye.count)*Pe)),Re!==null?(Le=Math.max(Le,0),ut=Math.min(ut,Re.count)):Qe!=null&&(Le=Math.max(Le,0),ut=Math.min(ut,Qe.count));const It=ut-Le;if(It<0||It===1/0)return;Se.setup(j,W,_e,$,Re);let yt,gt=pe;if(Re!==null&&(yt=de.get(Re),gt=ne,gt.setIndex(yt)),j.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*Ke()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(j.isLine){let Zt=W.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*Ke()),j.isLineSegments?gt.setMode(D.LINES):j.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else j.isPoints?gt.setMode(D.POINTS):j.isSprite&&gt.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,be=j._multiDrawCounts,ln=j._multiDrawCount,ot=Re?de.get(Re).bytesPerElement:1,In=X.get(W).currentProgram.getUniforms();for(let ii=0;ii<ln;ii++)In.setValue(D,"_gl_DrawID",ii),gt.render(Zt[ii]/ot,be[ii])}else if(j.isInstancedMesh)gt.renderInstances(Le,It,j.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,be=Math.min($.instanceCount,Zt);gt.renderInstances(Le,It,be)}else gt.render(Le,It)};function Vh(E,k,$,W){B!==null&&E.isNodeMaterial&&B.setObject(W,E),je===!0&&De.setState(E,$,!1),E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,_o(E,k,W),E.side=Hr,E.needsUpdate=!0,_o(E,k,W),E.side=ui):_o(E,k,W)}this.compile=function(E,k,$=null){$===null&&($=E),B!==null&&B.renderStart(E,k,$),T=he.get($),T.init(k),_.push(T),$.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==$&&E.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),Ze=this.localClippingEnabled,je=De.init(this.clippingPlanes,Ze),je===!0&&De.setGlobalState(this.clippingPlanes,k),B!==null&&Oe.render(T.state.shadowsArray,$,k);const W=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const _e=ye[Te];Vh(_e,$,k,j),W.add(_e)}else Vh(ye,$,k,j),W.add(ye)}),T=_.pop(),B!==null&&B.renderEnd(),W},this.compileAsync=function(E,k,$=null){const W=this.compile(E,k,$);return new Promise(j=>{function ye(){if(W.forEach(function(Te){const Re=X.get(Te).currentProgram;(Re===void 0||Re.isReady())&&W.delete(Te)}),W.size===0){j(E);return}setTimeout(ye,10)}at.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let bc=null;function Xv(E){bc&&bc(E)}function Gh(){yr.stop()}function Wh(){yr.start()}const yr=new Fv;yr.setAnimationLoop(Xv),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(E){bc=E,Ne.setAnimationLoop(E),E===null?yr.stop():yr.start()},Ne.addEventListener("sessionstart",Gh),Ne.addEventListener("sessionend",Wh),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(E,k);const $=Ne.enabled===!0&&Ne.isPresenting===!0,W=A!==null&&(N===null||$)&&A.begin(L,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(k),k=Ne.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,k,N),T=he.get(E,_.length),T.init(k),T.state.textureUnits=Z.getTextureUnits(),_.push(T),He.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ve.setFromProjectionMatrix(He,hi,k.reversedDepth),Ze=this.localClippingEnabled,je=De.init(this.clippingPlanes,Ze),b=ge.get(E,C.length),b.init(),C.push(b),Ne.enabled===!0&&Ne.isPresenting===!0){const Te=L.xr.getDepthSensingMesh();Te!==null&&Tc(Te,k,-1/0,L.sortObjects)}Tc(E,k,0,L.sortObjects),b.finish(),B!==null&&B.updateLights(T.state.lightsArray),L.sortObjects===!0&&b.sort(Me,we),Fe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Fe&&qe.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&De.beginShadows();const j=T.state.shadowsArray;if(Oe.render(j,E,k),je===!0&&De.endShadows(),(W&&A.hasRenderPass())===!1){const Te=b.opaque,_e=b.transmissive;if(T.setupLights(),k.isArrayCamera){const Re=k.cameras;if(_e.length>0)for(let Pe=0,Ye=Re.length;Pe<Ye;Pe++){const Qe=Re[Pe];qh(Te,_e,E,Qe)}Fe&&qe.render(E);for(let Pe=0,Ye=Re.length;Pe<Ye;Pe++){const Qe=Re[Pe];jh(b,E,Qe,Qe.viewport)}}else _e.length>0&&qh(Te,_e,E,k),Fe&&qe.render(E),jh(b,E,k)}N!==null&&Y===0&&(Z.updateMultisampleRenderTarget(N),Z.updateRenderTargetMipmap(N)),W&&A.end(L),E.isScene===!0&&E.onAfterRender(L,E,k),Se.resetDefaultState(),P=-1,O=null,_.pop(),_.length>0?(T=_[_.length-1],Z.setTextureUnits(T.state.textureUnits),je===!0&&De.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,B!==null&&B.renderEnd()};function Tc(E,k,$,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ve)){W&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(He);const Te=ie.update(E),_e=E.material;_e.visible&&b.push(E,Te,_e,$,J.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ve))){const Te=ie.update(E),_e=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),J.copy(Te.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(He)),Array.isArray(_e)){const Re=Te.groups;for(let Pe=0,Ye=Re.length;Pe<Ye;Pe++){const Qe=Re[Pe],Le=_e[Qe.materialIndex];Le&&Le.visible&&b.push(E,Te,Le,$,J.z,Qe,k)}}else _e.visible&&b.push(E,Te,_e,$,J.z,null,k)}}const ye=E.children;for(let Te=0,_e=ye.length;Te<_e;Te++)Tc(ye[Te],k,$,W)}function jh(E,k,$,W){const{opaque:j,transmissive:ye,transparent:Te}=E;T.setupLightsView($),je===!0&&De.setGlobalState(L.clippingPlanes,$),W&&y.viewport(q.copy(W)),j.length>0&&vo(j,k,$),ye.length>0&&vo(ye,k,$),Te.length>0&&vo(Te,k,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function qh(E,k,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new ei(1,1,{generateMipmaps:!0,type:Le?_i:Tn,minFilter:Pr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const ye=T.state.transmissionRenderTarget[W.id],Te=W.viewport||q;ye.setSize(Te.z*L.transmissionResolutionScale,Te.w*L.transmissionResolutionScale);const _e=L.getRenderTarget(),Re=L.getActiveCubeFace(),Pe=L.getActiveMipmapLevel();L.setRenderTarget(ye),L.getClearColor(Xe),We=L.getClearAlpha(),We<1&&L.setClearColor(16777215,.5),L.clear(),Fe&&qe.render($);const Ye=L.toneMapping;L.toneMapping=gi;const Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),je===!0&&De.setGlobalState(L.clippingPlanes,W),vo(E,$,W),Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ut=0,It=k.length;ut<It;ut++){const yt=k[ut],{object:gt,geometry:Zt,material:be,group:ln}=yt;if(be.side===ui&&gt.layers.test(W.layers)){const ot=be.side;be.side=an,be.needsUpdate=!0,Xh(gt,$,W,Zt,be,ln),be.side=ot,be.needsUpdate=!0,Le=!0}}Le===!0&&(Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye))}L.setRenderTarget(_e,Re,Pe),L.setClearColor(Xe,We),Qe!==void 0&&(W.viewport=Qe),L.toneMapping=Ye}function vo(E,k,$){const W=k.isScene===!0?k.overrideMaterial:null;for(let j=0,ye=E.length;j<ye;j++){const Te=E[j],{object:_e,geometry:Re,group:Pe}=Te;let Ye=Te.material;Ye.allowOverride===!0&&W!==null&&(Ye=W),_e.layers.test($.layers)&&Xh(_e,k,$,Re,Ye,Pe)}}function Xh(E,k,$,W,j,ye){B!==null&&j.isNodeMaterial&&B.setObject(E,j),E.onBeforeRender(L,k,$,W,j,ye),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(L,k,$,W,E,ye),j.transparent===!0&&j.side===ui&&j.forceSinglePass===!1?(j.side=an,j.needsUpdate=!0,L.renderBufferDirect($,k,W,j,E,ye),j.side=Hr,j.needsUpdate=!0,L.renderBufferDirect($,k,W,j,E,ye),j.side=ui):L.renderBufferDirect($,k,W,j,E,ye),E.onAfterRender(L,k,$,W,j,ye)}function _o(E,k,$){k.isScene!==!0&&(k=le);const W=X.get(E),j=T.state.lights,ye=T.state.shadowsArray,Te=j.state.version,_e=fe.getParameters(E,j.state,ye,k,$,T.state.lightProbeGridArray),Re=fe.getProgramCacheKey(_e);let Pe=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Ye=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=ce.get(E.envMap||W.environment,Ye),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",ni),Pe=new Map,W.programs=Pe);let Qe=Pe.get(Re);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Te)return $h(E,_e),Qe}else _e.uniforms=fe.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,$,_e),E.onBeforeCompile(_e,L),Qe=fe.acquireProgram(_e,Re),Pe.set(Re,Qe),W.uniforms=_e.uniforms;const Le=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=De.uniform),$h(E,_e),W.needsLights=Zv(E),W.lightsStateVersion=Te,W.needsLights&&(Le.ambientLightColor.value=j.state.ambient,Le.lightProbe.value=j.state.probe,Le.sunLights.value=j.state.sun,Le.sunLightShadows.value=j.state.sunShadow,Le.directionalLights.value=j.state.directional,Le.directionalLightShadows.value=j.state.directionalShadow,Le.spotLights.value=j.state.spot,Le.spotLightShadows.value=j.state.spotShadow,Le.rectAreaLights.value=j.state.rectArea,Le.ltc_1.value=j.state.rectAreaLTC1,Le.ltc_2.value=j.state.rectAreaLTC2,Le.pointLights.value=j.state.point,Le.pointLightShadows.value=j.state.pointShadow,Le.hemisphereLights.value=j.state.hemi,Le.sunShadowMatrix.value=j.state.sunShadowMatrix,Le.sunShadowCascade.value=j.state.sunShadowCascade,Le.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Le.spotLightMatrix.value=j.state.spotLightMatrix,Le.spotLightMap.value=j.state.spotLightMap,Le.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=Qe,W.uniformsList=null,Qe}function Yh(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=bl.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function $h(E,k){const $=X.get(E);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Yv(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let $=0,W=E.length;$<W;$++){const j=E[$];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function $v(E,k,$,W,j){k.isScene!==!0&&(k=le),Z.resetTextureUnits();const ye=k.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,_e=N===null?L.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tt.workingColorSpace,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=ce.get(W.envMap||Te,Re),Ye=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qe=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let yt=gi;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(yt=L.toneMapping);const gt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=gt!==void 0?gt.length:0,be=X.get(W),ln=T.state.lights;if(je===!0&&(Ze===!0||E!==O)){const vt=E===O&&W.id===P;De.setState(W,E,vt)}let ot=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ln.state.version||be.outputColorSpace!==_e||j.isBatchedMesh&&be.batching===!1||!j.isBatchedMesh&&be.batching===!0||j.isBatchedMesh&&be.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&be.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&be.instancing===!1||!j.isInstancedMesh&&be.instancing===!0||j.isSkinnedMesh&&be.skinning===!1||!j.isSkinnedMesh&&be.skinning===!0||j.isInstancedMesh&&be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&be.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&be.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&be.instancingMorph===!1&&j.morphTexture!==null||be.envMap!==Pe||W.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==De.numPlanes||be.numIntersection!==De.numIntersection)||be.vertexAlphas!==Ye||be.vertexTangents!==Qe||be.morphTargets!==Le||be.morphNormals!==ut||be.morphColors!==It||be.toneMapping!==yt||be.morphTargetsCount!==Zt||!!be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,be.__version=W.version);let In=be.currentProgram;ot===!0&&(In=_o(W,k,j),B&&W.isNodeMaterial&&B.onUpdateProgram(W,In,be));let ii=!1,zi=!1,$r=!1;const ht=In.getUniforms(),Nt=be.uniforms;if(y.useProgram(In.program)&&(ii=!0,zi=!0,$r=!0),W.id!==P&&(P=W.id,zi=!0),be.needsLights){const vt=Yv(T.state.lightProbeGridArray,j);be.lightProbeGrid!==vt&&(be.lightProbeGrid=vt,zi=!0)}if(ii||O!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",E.projectionMatrix),ht.setValue(D,"viewMatrix",E.matrixWorldInverse);const Vi=ht.map.cameraPosition;Vi!==void 0&&Vi.setValue(D,Je.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,zi=!0,$r=!0)}if(be.needsLights&&(ln.state.sunShadowMap.length>0&&ht.setValue(D,"sunShadowMap",ln.state.sunShadowMap,Z),ln.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",ln.state.directionalShadowMap,Z),ln.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",ln.state.spotShadowMap,Z),ln.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",ln.state.pointShadowMap,Z)),j.isSkinnedMesh){ht.setOptional(D,j,"bindMatrix"),ht.setOptional(D,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ht.setValue(D,"boneTexture",vt.boneTexture,Z))}j.isBatchedMesh&&(ht.setOptional(D,j,"batchingTexture"),ht.setValue(D,"batchingTexture",j._matricesTexture,Z),ht.setOptional(D,j,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",j._indirectTexture,Z),ht.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",j._colorsTexture,Z));const Hi=$.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&U.update(j,$,In),(zi||be.receiveShadow!==j.receiveShadow)&&(be.receiveShadow=j.receiveShadow,ht.setValue(D,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Nt.envMapIntensity.value=k.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=FA()),zi){if(ht.setValue(D,"toneMappingExposure",L.toneMappingExposure),be.needsLights&&Kv(Nt,$r),ye&&W.fog===!0&&Ie.refreshFogUniforms(Nt,ye),Ie.refreshMaterialUniforms(Nt,W,re,K,T.state.transmissionRenderTarget[E.id]),be.needsLights&&be.lightProbeGrid){const vt=be.lightProbeGrid;Nt.probesSH.value=vt.texture,Nt.probesMin.value.copy(vt.boundingBox.min),Nt.probesMax.value.copy(vt.boundingBox.max),Nt.probesResolution.value.copy(vt.resolution)}bl.upload(D,Yh(be),Nt,Z)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bl.upload(D,Yh(be),Nt,Z),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(D,"center",j.center),ht.setValue(D,"modelViewMatrix",j.modelViewMatrix),ht.setValue(D,"normalMatrix",j.normalMatrix),ht.setValue(D,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let Vi=0,Kr=vt.length;Vi<Kr;Vi++){const Zh=vt[Vi];se.update(Zh,In),se.bind(Zh,In)}}return In}function Kv(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Zv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,k,$){const W=X.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=k,X.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const $=X.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){N=E,Q=k,Y=$;let W=null,j=!1,ye=!1;if(E){const _e=X.get(E);if(_e.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),q.copy(E.viewport),ue.copy(E.scissor),Ee=E.scissorTest,y.viewport(q),y.scissor(ue),y.setScissorTest(Ee),P=-1;return}else if(_e.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(_e.__hasExternalTextures)Z.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ye=E.depthTexture;if(_e.__boundDepthTexture!==Ye){if(Ye!==null&&X.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const Pe=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?W=Pe[k][$]:W=Pe[k],j=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?W=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[$]:W=Pe,q.copy(E.viewport),ue.copy(E.scissor),Ee=E.scissorTest}else q.copy(oe).multiplyScalar(re).floor(),ue.copy(Be).multiplyScalar(re).floor(),Ee=rt;if($!==0&&(W=G),y.bindFramebuffer(D.FRAMEBUFFER,W)&&y.drawBuffers(E,W),y.viewport(q),y.scissor(ue),y.setScissorTest(Ee),j){const _e=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,$)}else if(ye){const _e=k;for(let Re=0;Re<E.textures.length;Re++){const Pe=X.get(E.textures[Re]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,$,_e)}}else if(E!==null&&$!==0){const _e=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,$)}P=-1};function Kh(E){const k=X.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=R.textureFormatReadable(E.format),k.__typeReadable=R.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,$,W,j,ye,Te,_e=0){if(!(E&&E.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){y.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Pe=E.textures[_e],Ye=Pe.format,Qe=Pe.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);const Le=Kh(Pe);if(Le.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&$>=0&&$<=E.height-j&&D.readPixels(k,$,W,j,me.convert(Ye),me.convert(Qe),ye)}finally{const Pe=N!==null?X.get(N).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,k,$,W,j,ye,Te,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(k>=0&&k<=E.width-W&&$>=0&&$<=E.height-j){y.bindFramebuffer(D.FRAMEBUFFER,Re);const Pe=E.textures[_e],Ye=Pe.format,Qe=Pe.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);const Le=Kh(Pe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(k,$,W,j,me.convert(Ye),me.convert(Qe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const It=N!==null?X.get(N).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,It);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qM(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ut),D.deleteSync(yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,$=0){const W=Math.pow(2,-$),j=Math.floor(E.image.width*W),ye=Math.floor(E.image.height*W),Te=k!==null?k.x:0,_e=k!==null?k.y:0;Z.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Te,_e,j,ye),y.unbindTexture()},this.copyTextureToTexture=function(E,k,$=null,W=null,j=0,ye=0){let Te,_e,Re,Pe,Ye,Qe,Le,ut,It;const yt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if($!==null)Te=$.max.x-$.min.x,_e=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,Ye=$.min.y,Qe=$.isBox3?$.min.z:0;else{const Nt=Math.pow(2,-j);Te=Math.floor(yt.width*Nt),_e=Math.floor(yt.height*Nt),E.isDataArrayTexture?Re=yt.depth:E.isData3DTexture?Re=Math.floor(yt.depth*Nt):Re=1,Pe=0,Ye=0,Qe=0}W!==null?(Le=W.x,ut=W.y,It=W.z):(Le=0,ut=0,It=0);const gt=me.convert(k.format),Zt=me.convert(k.type);let be;k.isData3DTexture?(Z.setTexture3D(k,0),be=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),be=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),be=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ln=y.getParameter(D.UNPACK_ROW_LENGTH),ot=y.getParameter(D.UNPACK_IMAGE_HEIGHT),In=y.getParameter(D.UNPACK_SKIP_PIXELS),ii=y.getParameter(D.UNPACK_SKIP_ROWS),zi=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),y.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe);const $r=E.isDataArrayTexture||E.isData3DTexture,ht=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Nt=X.get(E),Hi=X.get(k),vt=X.get(Nt.__renderTarget),Vi=X.get(Hi.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,vt.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Kr=0;Kr<Re;Kr++)$r&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(E).__webglTexture,j,Qe+Kr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(k).__webglTexture,ye,It+Kr)),D.blitFramebuffer(Pe,Ye,Te,_e,Le,ut,Te,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||X.has(E)){const Nt=X.get(E),Hi=X.get(k);y.bindFramebuffer(D.READ_FRAMEBUFFER,F),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let vt=0;vt<Re;vt++)$r?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,j,Qe+vt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,j),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hi.__webglTexture,ye,It+vt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hi.__webglTexture,ye),j!==0?D.blitFramebuffer(Pe,Ye,Te,_e,Le,ut,Te,_e,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(be,ye,Le,ut,It+vt,Pe,Ye,Te,_e):D.copyTexSubImage2D(be,ye,Le,ut,Pe,Ye,Te,_e);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(be,ye,Le,ut,It,Te,_e,Re,gt,Zt,yt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(be,ye,Le,ut,It,Te,_e,Re,gt,yt.data):D.texSubImage3D(be,ye,Le,ut,It,Te,_e,Re,gt,Zt,yt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Le,ut,Te,_e,gt,Zt,yt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Le,ut,yt.width,yt.height,gt,yt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Le,ut,Te,_e,gt,Zt,yt);y.pixelStorei(D.UNPACK_ROW_LENGTH,ln),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(D.UNPACK_SKIP_PIXELS,In),y.pixelStorei(D.UNPACK_SKIP_ROWS,ii),y.pixelStorei(D.UNPACK_SKIP_IMAGES,zi),ye===0&&k.generateMipmaps&&D.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Q=0,Y=0,N=null,y.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const BA=[{id:"mumbai",place:"Mumbai",country:"India",lat:19.076,lng:72.8777,companies:["HDFC Bank","HDFC Life","HDFC ERGO","Ageas Federal","Shardul Amarchand","Burns & McDonnell","APAR Industries"],scope:"Domestic Headquarter & Multi-Division Summits"},{id:"delhi",place:"Delhi NCR",country:"India",lat:28.6139,lng:77.209,companies:["Indigo Airlines","Tricolite","Uniworld Logistics","Pathways World School"],scope:"Aviation Well-Being & 100-Day Ikigai Deployments"},{id:"pune",place:"Pune",country:"India",lat:18.5204,lng:73.8567,companies:["TATA Motors","ELP (Economic Laws Practice)","SMFG India"],scope:"Automotive Leadership & Corporate Law Wellness"},{id:"goa",place:"Goa",country:"India",lat:15.2993,lng:74.124,companies:["Cipla Pharmaceuticals","Mango Sciences"],scope:"Global Pharma & HealthTech Executive Retreats"},{id:"bengaluru",place:"Bengaluru",country:"India",lat:12.9716,lng:77.5946,companies:["NetApp","Tech Leaders Consortium","TCS iON"],scope:"Technology Executive Resilience & Innovation"},{id:"dubai",place:"Dubai",country:"UAE",lat:25.2048,lng:55.2708,companies:["Global Indian International School","MENA Corporate Leaders"],scope:"Educational Well-Being & Youth Mentorship"},{id:"muscat",place:"Muscat",country:"Oman",lat:23.588,lng:58.3829,companies:["Alizz Islamic Bank","BankDhofar","NBO (National Bank of Oman)"],scope:"Middle East Banking Leadership Symposium"},{id:"mauritius",place:"Port Louis",country:"Mauritius",lat:-20.1609,lng:57.5012,companies:["Absa Bank (Africa)"],scope:"African Corporate Banking Convention (500+ CXOs)"},{id:"tanzania",place:"Dar es Salaam",country:"Tanzania",lat:-6.7924,lng:39.2083,companies:["Amana Bank"],scope:"East African Banking Convention & Purpose Alignment"},{id:"srilanka",place:"Colombo",country:"Sri Lanka",lat:6.9271,lng:79.8612,companies:["Harvard Club : Sri Lanka x APAC"],scope:"Harvard Alumni Global Keynote"},{id:"japan",place:"Tokyo",country:"Japan",lat:35.6762,lng:139.6503,companies:["Ikigai Research Foundation & Tokyo Partners"],scope:"Gross Life Satisfaction & Purpose Fieldwork"},{id:"finland",place:"Helsinki",country:"Finland",lat:60.1699,lng:24.9384,companies:["Nordic Well-Being Council","Sisu Research Institute"],scope:"Sisu & Mental Stamina Research Interventions"},{id:"bhutan",place:"Thimphu",country:"Bhutan",lat:27.4728,lng:89.6393,companies:["Gross National Happiness Institute"],scope:"National Well-Being Metrics & Compassionate Governance"},{id:"costarica",place:"San José",country:"Costa Rica",lat:9.9281,lng:-84.0907,companies:["Blue Zone Human Flourishing Alliance"],scope:"Pura Vida & Biological Longevity Frameworks"}];function zA(t,e,n){const i=(90-t)*(Math.PI/180),r=(e+180)*(Math.PI/180),s=-(n*Math.sin(i)*Math.cos(r)),a=n*Math.sin(i)*Math.sin(r),o=n*Math.cos(i);return new V(s,o,a)}function HA(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,18,64,64,62);return n.addColorStop(0,"rgba(255, 199, 44, 0.7)"),n.addColorStop(.5,"rgba(255, 199, 44, 0.25)"),n.addColorStop(1,"rgba(255, 199, 44, 0)"),e.fillStyle=n,e.fillRect(0,0,128,128),e.strokeStyle="#FFC72C",e.lineWidth=3.5,e.beginPath(),e.arc(64,64,38,0,Math.PI*2),e.stroke(),e.fillStyle="#08090C",e.beginPath(),e.arc(64,64,34,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.3)",e.lineWidth=1.5,e.stroke(),e.fillStyle="#FFC72C",e.beginPath(),e.moveTo(64,42),e.quadraticCurveTo(64,58,76,64),e.quadraticCurveTo(64,70,64,86),e.quadraticCurveTo(64,70,52,64),e.quadraticCurveTo(64,58,64,42),e.fill(),e.fillStyle="#FFFFFF",e.beginPath(),e.arc(64,64,4,0,Math.PI*2),e.fill(),new yw(t)}function VA({className:t="",heightClass:e=""}){const n=te.useRef(null),[i,r]=te.useState(null),[s,a]=te.useState("mumbai"),o=te.useRef({scene:null,camera:null,renderer:null,globeGroup:null,pulseRings:[],markerHitSpheres:[],isHovered:!1,isDragging:!1,reqId:null});return te.useEffect(()=>{const l=n.current;if(!l)return;const c=l.clientWidth,h=l.clientHeight,p=new lw;o.current.scene=p;const f=new Fn(45,c/h,.1,1e3);f.position.z=5.2,o.current.camera=f;const m=new OA({antialias:!0,alpha:!0});m.setSize(c,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(0,0),l.appendChild(m.domElement),o.current.renderer=m;const v=new Uw(16777215,.65);p.add(v);const w=new Jm(14544639,1.4);w.position.set(-5,3,-3),p.add(w);const g=new Jm(16765276,1);g.position.set(5,2,4),p.add(g);const d=new Rs;d.rotation.x=.22,d.rotation.y=-1.2,p.add(d),o.current.globeGroup=d;const x=1.85,S=new Iw().load("/earth-night.png");S.colorSpace=bn;const b=new Ls(x,64,64),T=new Aw({map:S,emissiveMap:S,emissive:new it(16770723),emissiveIntensity:1.35,roughness:.8,metalness:.1,color:460810}),C=new fn(b,T);d.add(C);const _=new Ls(x*1.022,64,64),A=new Cr({color:4026546,transparent:!0,opacity:.15,side:an}),L=new fn(_,A);p.add(L);const I=new Ls(x*1.035,48,48),B=new Cr({color:16763904,transparent:!0,opacity:.08,side:an}),G=new fn(I,B);p.add(G);const F=HA(),H=[];BA.forEach((we,oe)=>{const Be=zA(we.lat,we.lng,x),rt=Be.clone().normalize(),ve=new Rs;ve.position.copy(Be),ve.visible=!1;const je=new Dh(.018,.045,24),Ze=new Cr({color:16763904,side:ui,transparent:!0,opacity:0,depthTest:!0}),He=new fn(je,Ze);He.lookAt(rt),ve.add(He);const Je=.22,J=new Ih(.003,.003,Je,8),le=new Cr({color:16765276,transparent:!0,opacity:0,depthTest:!0}),Fe=new fn(J,le);Fe.position.copy(rt.clone().multiplyScalar(Je/2)),Fe.quaternion.setFromUnitVectors(new V(0,1,0),rt),ve.add(Fe);const Ke=new Rv({map:F,transparent:!0,opacity:0,depthTest:!0}),D=new gw(Ke);D.scale.set(.18,.18,1),D.position.copy(rt.clone().multiplyScalar(Je+.04)),ve.add(D);const wt=new Ls(.2,12,12),at=new Cr({visible:!1}),R=new fn(wt,at);R.position.copy(rt.clone().multiplyScalar(Je)),R.userData={location:we,pinGroup:ve,iconSprite:D,ringMesh:He,index:oe},R.visible=!1,ve.add(R),d.add(ve),H.push({loc:we,pinGroup:ve,iconSprite:D,ringMesh:He,beamMesh:Fe,hitMesh:R,phase:oe*.6})}),o.current.locationPins=H;const Q=new Bw,Y=new Ge(-999,-999),N=we=>{const oe=m.domElement.getBoundingClientRect();Y.x=(we.clientX-oe.left)/oe.width*2-1,Y.y=-((we.clientY-oe.top)/oe.height)*2+1,Q.setFromCamera(Y,f);const Be=H.filter(ve=>ve.pinGroup.visible&&ve.hitMesh.visible).map(ve=>ve.hitMesh),rt=Q.intersectObjects(Be);if(rt.length>0){o.current.isHovered=!0;const ve=rt[0].object,je=ve.userData.location;H.forEach(Fe=>{Fe.hitMesh===ve?Fe.iconSprite.scale.set(.26,.26,1):Fe.iconSprite.scale.set(.18,.18,1)});const Ze=new V;ve.getWorldPosition(Ze),Ze.project(f);const He=(Ze.x+1)/2*oe.width+oe.left,Je=(-Ze.y+1)/2*oe.height+oe.top,J=Math.max(160,Math.min(window.innerWidth-160,He)),le=Math.max(150,Je);r({...je,screenX:J,screenY:le})}else o.current.isHovered=!1,H.forEach(ve=>{ve.iconSprite.scale.set(.18,.18,1)}),r(null)},P=()=>{o.current.isHovered=!1,H.forEach(we=>{we.iconSprite.scale.set(.18,.18,1)}),r(null)};let O=!1,q=0,ue=0;const Ee=we=>{O=!0,o.current.isDragging=!0,q=we.clientX,ue=we.clientY},Xe=we=>{if(!O)return;const oe=we.clientX-q,Be=we.clientY-ue;d.rotation.y+=oe*.005,d.rotation.x+=Be*.005,d.rotation.x=Math.max(-.6,Math.min(.6,d.rotation.x)),q=we.clientX,ue=we.clientY},We=()=>{O=!1,o.current.isDragging=!1},Ue=m.domElement;Ue.addEventListener("pointermove",N),Ue.addEventListener("pointerleave",P),Ue.addEventListener("pointerdown",Ee),window.addEventListener("pointermove",Xe),window.addEventListener("pointerup",We);const K=()=>{if(!l)return;const we=l.clientWidth,oe=l.clientHeight;f.aspect=we/oe,f.updateProjectionMatrix(),m.setSize(we,oe)};window.addEventListener("resize",K);let re=new zw;const Me=()=>{o.current.reqId=requestAnimationFrame(Me);const we=re.getDelta(),oe=re.getElapsedTime();!O&&!o.current.isHovered&&(d.rotation.y+=we*.1);const Be=f.position,rt=new V;d.getWorldPosition(rt),H.forEach(ve=>{const je=new V;ve.hitMesh.getWorldPosition(je);const Ze=je.clone().sub(Be).normalize(),Je=je.clone().sub(rt).normalize().dot(Ze);if(Je<-.15){const J=Math.min(1,Math.max(0,(-Je-.15)/.2));ve.pinGroup.visible=!0,ve.iconSprite.material.opacity=J,ve.ringMesh.material.opacity=J*.85,ve.beamMesh.material.opacity=J*.85,ve.hitMesh.visible=J>.45;const le=1+Math.sin(oe*2.8+ve.phase)*.35;ve.ringMesh.scale.set(le,le,1)}else ve.pinGroup.visible=!1,ve.iconSprite.material.opacity=0,ve.ringMesh.material.opacity=0,ve.beamMesh.material.opacity=0,ve.hitMesh.visible=!1}),m.render(p,f)};return Me(),()=>{cancelAnimationFrame(o.current.reqId),Ue.removeEventListener("pointermove",N),Ue.removeEventListener("pointerleave",P),Ue.removeEventListener("pointerdown",Ee),window.removeEventListener("pointermove",Xe),window.removeEventListener("pointerup",We),window.removeEventListener("resize",K),Ue&&Ue.parentNode&&Ue.parentNode.removeChild(Ue),m.dispose()}},[]),u.jsx("div",{className:`relative w-full ${t}`,children:u.jsx("div",{ref:n,className:`w-full ${e||"h-[520px] sm:h-[600px] md:h-[700px]"} cursor-grab active:cursor-grabbing relative overflow-hidden flex items-center justify-center bg-transparent rounded-none border-none`,children:i&&u.jsxs("div",{className:"fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-4 w-72 sm:w-80 bg-[#0A0A0A]/95 text-white border border-hq-yellow p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-md rounded-xl transition-all duration-200 animate-fadeIn",style:{left:`${i.screenX}px`,top:`${i.screenY-14}px`},children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/15 mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-hq-yellow animate-ping"}),u.jsxs("span",{className:"font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-white",children:[i.place,", ",i.country]})]}),u.jsxs("span",{className:"bg-hq-yellow text-hq-black font-display font-bold text-[10px] tracking-widest px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1 shadow-sm",children:[u.jsx(ba,{className:"w-3 h-3 text-hq-black"}),u.jsx("span",{children:"GLOBAL HUB"})]})]}),u.jsxs("div",{className:"mb-3",children:[u.jsxs("div",{className:"text-[10px] font-mono uppercase tracking-widest text-hq-yellow mb-1 font-semibold flex items-center gap-1.5",children:[u.jsx(WS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Interacting Corporate Clients:"})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:i.companies.map((l,c)=>u.jsx("span",{className:"text-xs font-body font-medium bg-white/10 text-white/95 px-2.5 py-1 rounded-md border border-white/10",children:l},c))})]}),u.jsxs("div",{className:"pt-2.5 border-t border-white/10 text-[11px] font-body text-white/70 italic",children:['"',i.scope,'"']})]})})})}function nn({direction:t="right",className:e=""}){return t==="left"?u.jsxs("svg",{className:`w-[20px] h-[10px] inline-block flex-shrink-0 transition-transform duration-300 ${e}`,viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("line",{x1:"20",y1:"5",x2:"0",y2:"5",stroke:"currentColor",strokeWidth:"1"}),u.jsx("polyline",{points:"5 1, 0 5, 5 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}):u.jsxs("svg",{className:`w-[20px] h-[10px] inline-block flex-shrink-0 transition-transform duration-300 ${e}`,viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1"}),u.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]})}function b0(){const{faculty:t,courses:e,books:n,podcasts:i,engagements:r,cmsRichText:s,founderProfile:a,keyThemes:o,wellbeingPillars:l,engagementBenefits:c,statesCovered:h,globalCountries:p}=Qx(),f={ikigai:u.jsx(YS,{className:"w-5 h-5 stroke-[1.8]"}),finance:u.jsx(XS,{className:"w-5 h-5 stroke-[1.8]"}),stress:u.jsx(sM,{className:"w-5 h-5 stroke-[1.8]"}),fitness:u.jsx(HS,{className:"w-5 h-5 stroke-[1.8]"}),leadership:u.jsx(GS,{className:"w-5 h-5 stroke-[1.8]"}),values:u.jsx(ZS,{className:"w-5 h-5 stroke-[1.8]"}),balance:u.jsx(lM,{className:"w-5 h-5 stroke-[1.8]"}),meditation:u.jsx(ba,{className:"w-5 h-5 stroke-[1.8]"}),"psychology-wealth":u.jsx(Mm,{className:"w-5 h-5 stroke-[1.8]"}),"habit-building":u.jsx(oM,{className:"w-5 h-5 stroke-[1.8]"}),healing:u.jsx(KS,{className:"w-5 h-5 stroke-[1.8]"}),nutrition:u.jsx(VS,{className:"w-5 h-5 stroke-[1.8]"})},[m,v]=te.useState("resilience"),[w,g]=te.useState(null),d=w||(i&&i.length>0?i[0]:null),[x,M]=te.useState(0),S=te.useRef(null),b=te.useRef(!1),[T,C]=te.useState(null),[_,A]=te.useState(!1),L=te.useRef(null),[I,B]=te.useState(!1),[G,F]=te.useState(0),[H,Q]=te.useState(0),[Y,N]=te.useState(!1),P=J=>{if(J.button!==0)return;const le=L.current;le&&(B(!0),N(!1),F(J.pageX-le.offsetLeft),Q(le.scrollLeft))},O=J=>{if(!I)return;const le=L.current;if(!le)return;J.preventDefault();const Ke=(J.pageX-le.offsetLeft-G)*1.25;Math.abs(Ke)>5&&N(!0),le.scrollLeft=H-Ke},q=()=>{B(!1),setTimeout(()=>{N(!1)},60)},ue=()=>{I&&(B(!1),setTimeout(()=>{N(!1)},60)),A(!1)};te.useEffect(()=>{if(!I)return;const J=()=>{B(!1),setTimeout(()=>N(!1),60)};return window.addEventListener("mouseup",J),()=>window.removeEventListener("mouseup",J)},[I]),te.useEffect(()=>{L.current&&(L.current.scrollLeft=0)},[]),te.useEffect(()=>{if(_||I)return;const J=setInterval(()=>{const le=L.current;if(!le)return;const Fe=420,Ke=le.scrollWidth-le.clientWidth;le.scrollLeft>=Ke-30?le.scrollTo({left:0,behavior:"smooth"}):le.scrollBy({left:Fe,behavior:"smooth"})},2800);return()=>clearInterval(J)},[_,I]),te.useEffect(()=>{const J=S.current;if(!J)return;const le=Fe=>{const Ke=J.getBoundingClientRect();Ke.top<=140&&Ke.bottom>=window.innerHeight-140&&(Fe.deltaY>20?x<5&&(Fe.preventDefault(),b.current||(b.current=!0,M(wt=>Math.min(wt+1,5)),setTimeout(()=>{b.current=!1},420))):Fe.deltaY<-20&&x>0&&(Fe.preventDefault(),b.current||(b.current=!0,M(wt=>Math.max(wt-1,0)),setTimeout(()=>{b.current=!1},420))))};return J.addEventListener("wheel",le,{passive:!1}),()=>J.removeEventListener("wheel",le)},[x]);const Ee=J=>{L.current&&L.current.scrollBy({left:J==="left"?-420:420,behavior:"smooth"})},Xe=[{id:"leadership",title:"Leadership",left:"13%",top:"80%",iconType:"leader"},{id:"adaptability",title:"Adaptability",left:"27.5%",top:"38%",iconType:"adaptability"},{id:"resilience",title:"Resilience",left:"50%",top:"18%",iconType:"resilience"},{id:"discipline",title:"Discipline",left:"72.5%",top:"38%",iconType:"discipline"},{id:"flexibility",title:"Flexibility",left:"87%",top:"80%",iconType:"flexibility"}];Xe.find(J=>J.id===m)||Xe[2];const We=J=>{switch(J){case"leader":return u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black",children:[u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"4.5",strokeWidth:"2.5"}),u.jsx("line",{x1:"6.5",y1:"4.5",x2:"8",y2:"6.5",strokeWidth:"2.5"}),u.jsx("line",{x1:"17.5",y1:"4.5",x2:"16",y2:"6.5",strokeWidth:"2.5"}),u.jsx("circle",{cx:"12",cy:"11.5",r:"3.5",fill:"currentColor"}),u.jsx("path",{d:"M6 21v-1.5a4.5 4.5 0 0 1 9 0V21",fill:"currentColor"})]});case"adaptability":return u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black",children:[u.jsx("line",{x1:"3",y1:"10",x2:"7",y2:"10",strokeWidth:"2"}),u.jsx("line",{x1:"2",y1:"14",x2:"6",y2:"14",strokeWidth:"2"}),u.jsx("line",{x1:"4",y1:"18",x2:"8",y2:"18",strokeWidth:"2"}),u.jsx("circle",{cx:"15",cy:"14",r:"6.5",strokeWidth:"2"}),u.jsx("polyline",{points:"15 11 15 14 17.5 15.5",strokeWidth:"2"}),u.jsx("path",{d:"M13 4.5h4M15 4.5v3",strokeWidth:"2"})]});case"resilience":return u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black",children:[u.jsx("path",{d:"M12 21V10",strokeWidth:"2.5"}),u.jsx("path",{d:"M12 10a4 4 0 0 0-4-4 4 4 0 0 0 0 8 4 4 0 0 0 4-4Z",strokeWidth:"2",fill:"currentColor"}),u.jsx("path",{d:"M12 14a4 4 0 0 1 4-4 4 4 0 0 1 0 8 4 4 0 0 1-4-4Z",strokeWidth:"2",fill:"currentColor"}),u.jsx("path",{d:"M6.5 21c1.8-1.5 3.6-1.5 5.5 0s3.6 1.5 5.5 0",strokeWidth:"2.5"})]});case"discipline":return u.jsx(Mm,{className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black stroke-[2]"});case"flexibility":return u.jsx($S,{className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black stroke-[2]"});default:return u.jsx(ba,{className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black"})}},Ue=[{id:"f-meera",name:"MEERA CHAUHAN",category:"Mindfulness",title:"Director at Tricolite Electrical Industries | Warwick & Yale Fellow",areaExpertise:"Mindfulness & Industrial Relations",bio:"Meera Chauhan is a Director with Tricolite Electrical Industries. She has done her Master's Degree in Industrial Relations and Personnel Management from Warwick Business School and also a mid career Fellowship at Yale University",image:"/team/meera-chauhan.png"},{id:"f-bijay",name:"BIJAY ANAND",category:"Kundalini Yoga",title:"Esteemed Kundalini Yoga Instructor & Holistic Wellness Mentor",areaExpertise:"Kundalini Yoga, Ancient Wisdom & Breath Science",bio:"Esteemed Kundalini Yoga instructor Bijay Anand fosters holistic wellness, integrating ancient wisdom and contemporary insights for a balanced, transformative practice.",image:"/team/bijay-anand.png"},{id:"f-rajiv",name:"RAJIV GUPTA",category:"Japanese Life lessons",title:"Manufacturing CEO & Author | HBS Alumnus & Ex-VP Honda Cars",areaExpertise:"Japanese Management Philosophy & Corporate Culture",bio:`Mr. Gupta is currently the CEO of a leading manufacturing company. Author of "The Good Indian Employee's Guide to Surviving a Lala Company." Ex-VP and National Head of Sales & Marketing at Honda Cars. Alumnus of HBS.`,image:"/team/rajiv-gupta.png"},{id:"f-soha",name:"SOHA ALI KHAN",category:"Parenting",title:"Acclaimed Author & Modern Family Mentor | Oxford & LSE Alumna",areaExpertise:"Work-Life Integration & Emotional Intelligence",bio:'Soha Ali Khan, Indian actress from a noble lineage, blends regal charm with cinematic brilliance, symbolizing cultural richness in Bollywood. She also the author to the book "The Perils of being Moderately Famous"',image:"/team/soha-ali-khan.png"},{id:"f-sanjay",name:"SANJAY ARORA",category:"Entrepreneurship Leader",title:"Healthcare Pioneer & Founder of Suburban Diagnostics",areaExpertise:"Diagnostic Innovation, Entrepreneurial Scaling & Patient Care",bio:"Dr. Sanjay Arora, healthcare pioneer, founded Suburban Diagnostics, prioritizing precision and patient care. Awards recognize his leadership, innovation, and entrepreneurial excellence.",image:"/team/sanjay-arora.png"},{id:"f-bharati",name:"BHARATI JAISINGH",category:"Well Being Practitioner",title:"Well Being Practitioner & Founder of IDHA",areaExpertise:"Dance & Expressive Movement Therapy",bio:"Bharati K. Jaisingh, Well Being Practitioner and founder of IDHA, utilizes dance and expressive arts to foster therapeutic experiences for individuals and communities.",image:"/team/bharati-jaisingh.png"},{id:"f-manny",name:"MANNY ANCHAN",category:"Founder & Chief Happiness Officer",title:"Founder & Chief Happiness Officer | Harvard & Columbia Alum",areaExpertise:"Personal Leadership, Ikigai & Purpose Alignment",bio:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Researched Ikigai, Hygge, Lagom, Sisu, and Gross National Happiness.",image:"/team/manny-anchan.png"},{id:"f-anil",name:"ANIL KUMAR",category:"Personal Leadership",title:"Recipient of 'SHAURYA CHAKRA' | LBS & ISB Alumnus",areaExpertise:"Personal Leadership & High-Stakes Resilience",bio:"Anil, recipient of 'SHAURYA CHAKRA' award is a former military officer, motivational speaker, leadership expert, and fundraiser for alternative investment funds. Alumnus of London Business School and ISB.",image:"/team/anil-kumar.png"},{id:"f-carolin",name:"CAROLIN NYTRA",category:"Spirituality",title:"Retired German Olympic Hurdler & Holistic Well-Being Advocate",areaExpertise:"Spirituality, Mindset & Cacao Guidance",bio:"Carolin Nytra is a retired German Olympic hurdler, now a holistic well-being advocate. Now, a Cacao Priestess, she empowers others through mindset and spiritual guidance.",image:"/team/carolin-nytra.png"},{id:"f-ajay",name:"AJAY SRINIVASAN",category:"Business Leadership",title:"Seasoned Business Leader & Strategic Advisor",areaExpertise:"Enterprise Scaling & Executive Resilience",bio:"Ajay Srinivasan is a seasoned business leader with a diverse career, founding and expanding businesses in India and abroad, showcasing leadership across different organizational structures and industries.",image:"/team/ajay-srinivasan.png"},{id:"f-rupinder",name:"RUPINDER SINGH",category:"Sports",title:"Olympic Field Hockey Star & International Champion",areaExpertise:"Athletic Tenacity & Clutch Mindset Under Pressure",bio:"Rupinder Pal Singh, born on Nov 11, 1990, in Faridkot, Punjab, is an Indian hockey star known for powerful drag-flicks, international victories, and inspiring young players.",image:"/team/rupinder-singh.png"},{id:"f-parvej",name:"PARVEJ MANTRRI",category:"Fit Panda",title:"Versatile Entertainer & Celebrity Fitness Coach",areaExpertise:"Physical Fitness, Motivation & Creative Energy",bio:"Parvej, a versatile entertainer, excels as an actor, host, voice-over artist, and celebrity fitness coach, earning acclaim in various roles.",image:"/team/parvej-mantrri.png"},{id:"f-bhakti",name:"BHAKTI KAPOOR",category:"HealthTech professional",title:"Founder of HEALTHY HIGH & Nutritional Wellness Advisor",areaExpertise:"Clinical Nutrition & Metabolic Vitality",bio:"Bhakti is the founder of HEALTHY HIGH a virtual nutrition counselling platform. She is also on the advisory panel for Vitalyse wellness strips and Green Protein.",image:"/team/bhakti-kapoor.png"}],[K,re]=te.useState("mental"),[Me,we]=te.useState(null),{isDark:oe}=tv(),[Be,rt]=te.useState(!1),[ve,je]=te.useState(!1);te.useEffect(()=>{const J=()=>{const le=document.getElementById("reasons-section"),Fe=document.getElementById("contact");if(!le)return;const Ke=le.getBoundingClientRect(),D=Fe?Fe.getBoundingClientRect():null,wt=Ke.top<=window.innerHeight*.7,at=D?D.top>window.innerHeight*.92:!0;rt(!!(wt&&at));const R=window.innerHeight-80,y=[{id:"worklife-section",isDarkSection:!0},{id:"team-section",isDarkSection:!0},{id:"footprint-section",isDarkSection:!0},{id:"books",isDarkSection:!0},{id:"reasons-section",isDarkSection:oe},{id:"key-themes-section",isDarkSection:oe},{id:"benefits-section",isDarkSection:oe},{id:"podcast",isDarkSection:oe}];let z=oe;for(const X of y){const Z=document.getElementById(X.id);if(Z){const ce=Z.getBoundingClientRect();if(ce.top<=R&&ce.bottom>=R){z=X.isDarkSection;break}}}je(z)};return window.addEventListener("scroll",J,{passive:!0}),J(),()=>window.removeEventListener("scroll",J)},[oe]),te.useEffect(()=>{const J=document.querySelectorAll(".section-reveal");if(!J.length)return;const le=new IntersectionObserver((Fe,Ke)=>{Fe.forEach(D=>{D.isIntersecting&&(D.target.classList.add("section-revealed"),Ke.unobserve(D.target))})},{threshold:.05,rootMargin:"0px 0px -40px 0px"});return J.forEach(Fe=>{const Ke=Fe.getBoundingClientRect();Ke.top<window.innerHeight*.95&&Ke.bottom>0?Fe.classList.add("section-revealed"):le.observe(Fe)}),()=>le.disconnect()},[]);const[Ze,He]=te.useState("All");(r||[]).filter(J=>Ze==="All"||J.scope===Ze);const Je=[{name:"TATA Motors",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 32 32",fill:"currentColor",children:u.jsx("path",{d:"M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z"})})},{name:"Barclays",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2.5c-.8 0-1.5.7-1.5 1.5 0 .3.1.5.2.7L7 7.5l-4-1 2 4.5-3 2 4.5 1L7 19h10l.5-5 4.5-1-3-2 2-4.5-4 1-3.7-2.8c.1-.2.2-.4.2-.7 0-.8-.7-1.5-1.5-1.5zm0 4.5l2 2.5h-4l2-2.5zm-3 4h6l1.5 3h-9l1.5-3zm.5 4.5h5l.5 2h-6l.5-2z"})})},{name:"HDFC Life",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[u.jsx("rect",{x:"2.5",y:"2.5",width:"19",height:"19",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2.2"}),u.jsx("path",{d:"M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z"})]})},{name:"Cipla",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[u.jsx("circle",{cx:"12",cy:"12",r:"9.5",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("path",{d:"M12 6v12M6 12h12M8 8l8 8M8 16l8-8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})},{name:"Harvard Club",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2L4 5v6c0 5.5 3.5 10.2 8 11 4.5-.8 8-5.5 8-11V5l-8-3zm-3 6h2v3h2V8h2v8h-2v-3h-2v3H9V8z"})})},{name:"IndiGo Airlines",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[u.jsx("circle",{cx:"5",cy:"16",r:"1.5"}),u.jsx("circle",{cx:"9",cy:"14",r:"1.5"}),u.jsx("circle",{cx:"13",cy:"12",r:"1.5"}),u.jsx("circle",{cx:"17",cy:"10",r:"1.5"}),u.jsx("circle",{cx:"21",cy:"8",r:"1.5"}),u.jsx("circle",{cx:"9",cy:"18",r:"1.5"}),u.jsx("circle",{cx:"13",cy:"16",r:"1.5"}),u.jsx("circle",{cx:"17",cy:"14",r:"1.5"}),u.jsx("circle",{cx:"13",cy:"20",r:"1.5"}),u.jsx("circle",{cx:"17",cy:"18",r:"1.5"})]})},{name:"HDFC ERGO",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[u.jsx("rect",{x:"2.5",y:"2.5",width:"19",height:"19",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2.2"}),u.jsx("path",{d:"M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z"})]})},{name:"Absa Bank",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[u.jsx("circle",{cx:"12",cy:"12",r:"9.5",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("text",{x:"12",y:"16",textAnchor:"middle",fontSize:"11",fontWeight:"800",fontFamily:"sans-serif",fill:"currentColor",children:"a"})]})},{name:"Ageas Federal",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2l2.5 6.5L21 11l-5.5 4.5L17 22l-5-3.5L7 22l1.5-6.5L3 11l6.5-2.5L12 2z"})})},{name:"Burns & McDonnell",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"2.5",y:"2.5",width:"19",height:"19",rx:"3"}),u.jsx("path",{d:"M7 7h4a2 2 0 010 4H7v6h5a2.5 2.5 0 000-5H7M15 7l2 5 2-5v10",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},{name:"Shardul Amarchand",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:u.jsx("path",{d:"M12 3v18M6 8h12M4 14l2-6 2 6a2 2 0 01-4 0zm12 0l2-6 2 6a2 2 0 01-4 0zM9 21h6",strokeLinecap:"round",strokeLinejoin:"round"})})},{name:"Tricolite",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2L2 20h20L12 2zm0 4.5L18.5 18H5.5L12 6.5zm-1 4.5v3.5h2V11h-2zm0 4.5v1.5h2v-1.5h-2z"})})},{name:"TATA AIG",monogram:u.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 32 32",fill:"currentColor",children:u.jsx("path",{d:"M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z"})})},{name:"GE Capital",monogram:u.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[u.jsx("circle",{cx:"12",cy:"12",r:"9.5",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("path",{d:"M9.5 8.5C8 9.5 7.5 11 7.5 12.5c0 2 1.5 3.5 3.5 3.5 1.5 0 2.5-.8 3-1.8h-2.5v-1.2h4v.5c0 2.5-2 3.8-4.5 3.8-3 0-4.8-2-4.8-4.8 0-2.5 1.8-4.5 4.5-4.5 1.2 0 2.2.4 2.8 1l-.9.9c-.5-.5-1.1-.7-1.9-.7zm4 0h3.5v1.3H15v1.8h1.8v1.3H15v2h2.2v1.3h-3.7V8.5z"})]})}];return u.jsxs("div",{className:"w-full bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200 relative",children:[u.jsx("div",{className:`fixed right-4 sm:right-6 lg:right-8 bottom-8 z-40 hidden md:flex flex-col items-center gap-2 transition-all duration-300 pointer-events-auto select-none ${Be?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:u.jsxs("button",{type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 p-2 cursor-pointer bg-transparent border-none shadow-none ${ve?"text-white hover:text-hq-yellow":"text-[#0A0A0A] hover:text-hq-yellow"}`,"aria-label":"Back to top",title:"Back to top",children:[u.jsxs("svg",{width:"14",height:"46",viewBox:"0 0 14 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform duration-300 group-hover:-translate-y-1.5 flex-shrink-0",children:[u.jsx("line",{x1:"7",y1:"4",x2:"7",y2:"44",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("polyline",{points:"2,11 7,3 12,11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),u.jsx("span",{className:"font-display uppercase text-[10px] tracking-[0.25em] font-bold select-none group-hover:text-hq-yellow transition-colors duration-300",style:{writingMode:"vertical-rl",transform:"rotate(180deg)"},children:"Back to top"})]})}),u.jsxs("header",{className:"relative w-full min-h-screen min-h-[820px] lg:h-[96vh] flex flex-col justify-end pb-12 overflow-hidden bg-[#111213]",children:[u.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[u.jsx("div",{className:"absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[900px] h-[450px] md:h-[650px] bg-hq-yellow/[0.08] rounded-full blur-[130px] animate-hero-glow"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#161719]/40 via-transparent to-[#0A0A0A]"})]}),u.jsxs("div",{className:"absolute inset-x-0 top-[41%] sm:top-[42%] md:top-[43%] -translate-y-1/2 z-10 px-6 sm:px-10 md:px-14 lg:px-20 pointer-events-none select-none max-w-[1550px] mx-auto animate-hero-name",children:[u.jsx("h1",{className:"sr-only",children:"Manny Anchan - The Happiness Samurai"}),u.jsxs("div",{className:"w-full flex justify-between items-center",children:[u.jsx("span",{className:"font-semibold tracking-tight select-none text-[#FFEFD6] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] inline-block translate-x-2 sm:translate-x-4 md:translate-x-7",style:{fontFamily:'"Bebas Neue", "Anton", "Oswald", sans-serif',fontSize:"clamp(4.2rem, 14vw, 14.5rem)",lineHeight:.88,transform:"scaleY(1.08)",transformOrigin:"bottom left",WebkitTextStroke:"0.4px #FFEFD6",letterSpacing:"0.02em"},children:"MANNY"}),u.jsx("span",{className:"font-semibold tracking-tight select-none text-[#FFEFD6] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] inline-block -translate-x-2 sm:-translate-x-4 md:-translate-x-7",style:{fontFamily:'"Bebas Neue", "Anton", "Oswald", sans-serif',fontSize:"clamp(4.2rem, 14vw, 14.5rem)",lineHeight:.88,transform:"scaleY(1.08)",transformOrigin:"bottom right",WebkitTextStroke:"0.4px #FFEFD6",letterSpacing:"0.02em"},children:"ANCHAN"})]})]}),u.jsx("div",{className:"absolute inset-x-0 bottom-0 z-20 flex justify-center pointer-events-none animate-hero-manny",children:u.jsx("img",{src:"/manny-cutout.png",alt:"Manny Anchan - The Happiness Samurai",className:"h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[86vh] max-h-[850px] w-auto object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700"})}),u.jsxs("div",{className:"relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8",children:[u.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 flex flex-col items-start text-left animate-hero-left",children:[u.jsx("h2",{className:"font-prata text-xl sm:text-2xl lg:text-[1.76rem] text-[#F3EFEA] font-normal leading-snug mb-3 tracking-wide",style:{fontFamily:'"Prata", serif'},children:"Feel Better. Work Better. Live Better."}),u.jsx("p",{className:"font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-sm",children:"Enterprise well-being and peak performance interventions designed to eradicate executive burnout, instill psychological safety, and drive measurable organizational happiness."}),u.jsxs(Ce,{to:"#key-themes-section",onClick:J=>{var le;J.preventDefault(),(le=document.getElementById("key-themes-section"))==null||le.scrollIntoView({behavior:"smooth"})},className:"group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display font-medium text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300",children:[u.jsx("span",{className:"absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"}),u.jsx("span",{className:"relative z-10",children:"Explore Interventions"}),u.jsxs("svg",{className:"w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1"}),u.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}),u.jsx("span",{className:"absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"})]})]}),u.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 flex flex-col items-start md:items-end text-left md:text-right animate-hero-right",children:[u.jsx("div",{className:"font-display text-white text-base sm:text-lg font-normal mb-2",children:"25+ Years Corporate Stewardship"}),u.jsx("p",{className:"font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-5 font-light max-w-xs",children:"Harvard & Columbia alum. Former executive at GE Capital, HDFC, Barclays & ABN AMRO. Trusted across 16 states & 9 countries."}),u.jsxs(Ce,{to:"#team-section",onClick:J=>{var le;J.preventDefault(),(le=document.getElementById("team-section"))==null||le.scrollIntoView({behavior:"smooth"})},className:"group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300",children:[u.jsx("span",{className:"absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"}),u.jsx("span",{className:"relative z-10",children:"Know more"}),u.jsxs("svg",{className:"w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1"}),u.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}),u.jsx("span",{className:"absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"})]})]})]})]}),u.jsxs("div",{className:"w-full bg-hq-yellow py-5 overflow-hidden relative shadow-inner text-[#0A0A0A] dark:text-[#0A0A0A]",children:[u.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hq-yellow to-transparent z-10 pointer-events-none"}),u.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hq-yellow to-transparent z-10 pointer-events-none"}),u.jsx("div",{className:"marquee-partners-track animate-marquee whitespace-nowrap inline-flex gap-10 md:gap-14 items-center px-4 select-none text-[#0A0A0A] dark:text-[#0A0A0A]",children:[...Je,...Je].map((J,le)=>u.jsxs("div",{className:"inline-flex items-center gap-2.5 h-8 flex-shrink-0 group text-[#0A0A0A] dark:text-[#0A0A0A]",children:[u.jsx("span",{className:"flex items-center justify-center text-[#0A0A0A] dark:text-[#0A0A0A] group-hover:scale-110 transition-transform duration-200",children:J.monogram}),u.jsx("span",{className:"font-display uppercase tracking-widest text-[#0A0A0A] dark:text-[#0A0A0A] font-bold text-xs sm:text-sm md:text-base leading-none whitespace-nowrap",children:J.name}),u.jsx("span",{className:"marquee-partners-dot ml-8 md:ml-10 text-[#0A0A0A]/40 dark:text-[#0A0A0A]/40 font-light",children:"•"})]},le))})]}),u.jsx("section",{id:"reasons-section",className:"section-reveal py-20 lg:py-24 bg-hq-white dark:bg-[#07080B] border-b border-hq-black/10 dark:border-white/10 relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-0 pb-6 border-b border-hq-black/15 dark:border-white/15",children:[u.jsx("div",{className:"max-w-3xl",children:u.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-hq-black dark:text-white leading-[1.1]",children:"4 reason why Manny will make your Employee Productive"})}),u.jsx("div",{className:"lg:text-right",children:u.jsxs("p",{className:"font-serif italic text-2xl md:text-3xl text-hq-black/85 dark:text-white/85 leading-tight",children:['"Hands-on. Immersive. ',u.jsx("br",{className:"hidden lg:inline"}),'Experiential. Disciplined."']})})]}),u.jsx("div",{children:l.map((J,le)=>u.jsxs("div",{className:"group py-6 md:py-7 border-b border-hq-black/15 dark:border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-16 hover:bg-hq-gray/40 dark:hover:bg-white/[0.02] px-4 md:px-8 -mx-4 md:-mx-8 transition-colors duration-300",children:[u.jsxs("div",{className:"flex items-start sm:items-center gap-6 md:gap-10 w-full lg:w-5/12",children:[u.jsxs("span",{className:"font-serif text-2xl sm:text-3xl md:text-4xl text-hq-black/25 dark:text-white/25 group-hover:text-hq-yellow font-normal transition-colors shrink-0",children:["0",le+1]}),u.jsx("div",{children:u.jsx("h3",{className:"font-display text-lg sm:text-xl md:text-2xl lg:text-[27px] tracking-tight font-semibold text-hq-black dark:text-white group-hover:translate-x-2 transition-transform duration-300",children:J.title})})]}),u.jsx("div",{className:"w-full lg:w-6/12 font-body text-xs sm:text-sm md:text-[15px] text-hq-black/75 dark:text-white/70 font-light leading-relaxed",children:J.desc}),u.jsxs("div",{className:"w-full lg:w-1/12 flex lg:justify-end text-xs font-mono uppercase text-hq-black/40 dark:text-white/40 group-hover:text-hq-black dark:group-hover:text-white font-semibold transition-colors",children:[u.jsx("span",{className:"hidden lg:inline-block group-hover:translate-x-1.5 transition-transform text-lg",children:u.jsx(nn,{})}),u.jsxs("span",{className:"lg:hidden inline-flex items-center gap-1.5 text-[11px] text-hq-black/60 dark:text-white/60",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-hq-yellow inline-block"}),"Verified Metric"]})]})]},le))}),u.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-hq-black/50 dark:text-white/50",children:[u.jsx("span",{children:"Clinical & Corporate Productivity Benchmarks • Page 3 Profile Integration"}),u.jsxs(Ce,{to:"#worklife-section",onClick:J=>{var le;J.preventDefault(),(le=document.getElementById("worklife-section"))==null||le.scrollIntoView({behavior:"smooth"})},className:"font-display font-semibold uppercase tracking-wider text-hq-black dark:text-white hover:text-hq-yellow transition-colors flex items-center gap-1.5",children:[u.jsx("span",{children:"Explore The 5-Pillar Ethos Model"}),u.jsx(nn,{})]})]})]})}),u.jsxs("section",{id:"worklife-section",className:"section-reveal relative bg-[#000000] text-hq-white min-h-screen min-h-[660px] lg:h-screen flex flex-col justify-between pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden border-b border-white/10 select-none",children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none",children:u.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-hq-yellow/[0.08] rounded-full blur-[140px]"})}),u.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-10 pt-2 sm:pt-4",children:u.jsxs("div",{className:"max-w-3xl mx-auto",children:[u.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-semibold tracking-tight text-white mb-4 sm:mb-5",children:"BALANCE WITHIN WORKLIFE"}),u.jsx("p",{className:"font-body text-xs sm:text-sm md:text-base text-white/70 max-w-3xl mx-auto font-light leading-relaxed",children:"Perpetual employee evolution is a comprehensive notion that acknowledges the interrelation between various facets of an employee's life within a corporate setting. Here are pivotal elements contributing to employee well-being:"})]})}),u.jsxs("div",{className:"relative w-full max-w-7xl mx-auto px-6 md:px-12 aspect-[16/8] sm:aspect-[16/7.5] md:aspect-[16/7] flex items-end justify-center mt-auto overflow-hidden",children:[u.jsxs("svg",{viewBox:"0 0 1000 500",className:"absolute inset-0 w-full h-full overflow-visible select-none pointer-events-none",preserveAspectRatio:"xMidYMax meet",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"horizonGlow1",cx:"50%",cy:"100%",r:"90%",children:[u.jsx("stop",{offset:"0%",stopColor:"#E5A93C",stopOpacity:"0.35"}),u.jsx("stop",{offset:"40%",stopColor:"#9C731A",stopOpacity:"0.20"}),u.jsx("stop",{offset:"75%",stopColor:"#4A380A",stopOpacity:"0.08"}),u.jsx("stop",{offset:"100%",stopColor:"#000000",stopOpacity:"0"})]}),u.jsxs("radialGradient",{id:"horizonGlow2",cx:"50%",cy:"100%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFD15C",stopOpacity:"0.50"}),u.jsx("stop",{offset:"45%",stopColor:"#B3861E",stopOpacity:"0.26"}),u.jsx("stop",{offset:"85%",stopColor:"#4A380A",stopOpacity:"0.05"}),u.jsx("stop",{offset:"100%",stopColor:"#000000",stopOpacity:"0"})]}),u.jsxs("radialGradient",{id:"horizonCore",cx:"50%",cy:"100%",r:"42%",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFC72C",stopOpacity:"0.75"}),u.jsx("stop",{offset:"60%",stopColor:"#B3861E",stopOpacity:"0.35"}),u.jsx("stop",{offset:"100%",stopColor:"#000000",stopOpacity:"0"})]}),u.jsxs("linearGradient",{id:"cleanArcShine",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#E5A93C",stopOpacity:"0.6"}),u.jsx("stop",{offset:"25%",stopColor:"#FFD15C",stopOpacity:"0.9"}),u.jsx("stop",{offset:"50%",stopColor:"#FFFFFF",stopOpacity:"1"}),u.jsx("stop",{offset:"75%",stopColor:"#FFD15C",stopOpacity:"0.9"}),u.jsx("stop",{offset:"100%",stopColor:"#E5A93C",stopOpacity:"0.6"})]})]}),u.jsx("path",{d:"M 40 500 A 460 410 0 0 1 960 500 Z",fill:"url(#horizonGlow1)"}),u.jsx("path",{d:"M 140 500 A 360 320 0 0 1 860 500 Z",fill:"url(#horizonGlow2)"}),u.jsx("path",{d:"M 260 500 A 240 200 0 0 1 740 500 Z",fill:"url(#horizonCore)"}),u.jsx("path",{d:"M 80 500 A 430 380 0 0 1 920 500",fill:"none",stroke:"rgba(255, 255, 255, 0.28)",strokeWidth:"1.75",strokeLinecap:"round"}),u.jsx("path",{d:"M 80 500 A 430 380 0 0 1 920 500",fill:"none",stroke:"url(#cleanArcShine)",strokeWidth:"2",strokeLinecap:"round",className:"animate-line-clean-shine"}),u.jsx("path",{d:"M 50 500 A 460 410 0 0 1 950 500",fill:"none",stroke:"rgba(229, 169, 60, 0.22)",strokeWidth:"1",strokeDasharray:"4 6"})]}),Xe.map(J=>{const le=m===J.id;return u.jsxs("div",{style:{left:J.left,top:J.top},className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20",onMouseEnter:()=>v(J.id),onClick:()=>v(J.id),children:[u.jsx("span",{className:`font-display text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-2 sm:mb-3 transition-all duration-300 select-none whitespace-nowrap ${le?"text-hq-yellow scale-105 drop-shadow-[0_0_14px_rgba(255,199,44,0.7)] font-bold":"text-white/90 group-hover:text-hq-yellow"}`,children:J.title}),u.jsxs("div",{className:`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-hq-yellow text-hq-black flex items-center justify-center transition-all duration-300 relative ${le?"scale-110 shadow-[0_0_35px_rgba(255,204,0,0.85)] ring-4 ring-hq-yellow/40":"shadow-[0_0_20px_rgba(255,204,0,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,204,0,0.6)]"}`,children:[We(J.iconType),le&&u.jsx("span",{className:"absolute inset-0 rounded-full border-2 border-hq-yellow animate-ping opacity-30 pointer-events-none"})]})]},J.id)}),u.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-hq-yellow/60 to-transparent pointer-events-none"})]})]}),u.jsxs("section",{id:"key-themes-section",ref:S,className:"section-reveal py-12 lg:py-0 bg-white dark:bg-[#07080B] border-b border-hq-black/10 dark:border-white/10 relative overflow-hidden lg:h-screen lg:max-h-[950px] lg:min-h-[700px] flex items-center",children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:flex items-center justify-center opacity-25 dark:opacity-20 z-0",children:u.jsxs("svg",{viewBox:"0 0 96 1762",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-full w-auto max-w-none text-hq-yellow/40 dark:text-hq-yellow/30",style:{maskImage:"linear-gradient(180deg, transparent 5%, #000 25%, #000 75%, transparent 95%)",WebkitMaskImage:"linear-gradient(180deg, transparent 5%, #000 25%, #000 75%, transparent 95%)"},children:[u.jsx("path",{d:"M95.5 1762V726.469C95.5 691.615 77.6743 659.182 48.25 640.5C18.8257 621.818 0.999998 589.385 1 554.531L1.00002 0",stroke:"currentColor",strokeWidth:"2",className:"text-hq-yellow blur-[2px]"}),u.jsx("path",{d:"M95.5 1762V726.469C95.5 691.615 77.6743 659.182 48.25 640.5C18.8257 621.818 0.999998 589.385 1 554.531L1.00002 0",stroke:"currentColor",strokeWidth:"1",className:"text-hq-black/15 dark:text-white/15"})]})}),u.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[u.jsx("div",{className:"lg:col-span-5",children:u.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[u.jsxs("div",{className:"select-none",children:[u.jsxs("div",{className:"flex items-baseline gap-4 sm:gap-6",children:[u.jsx("span",{className:"font-display text-[100px] sm:text-[135px] lg:text-[155px] font-black leading-[0.8] tracking-tighter text-black dark:text-white drop-shadow-sm",children:"12"}),u.jsxs("div",{className:"flex flex-col justify-end pb-3",children:[u.jsx("span",{className:"font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black dark:text-white leading-none",children:"Key"}),u.jsx("span",{className:"font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-hq-yellow leading-none mt-1",children:"Theme"}),u.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.2em] text-hq-black/50 dark:text-white/50 mt-2 font-semibold",children:"Systemic Well-Being"})]})]}),u.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mt-4 max-w-md",children:"Through the seamless integration of our 12 Key Themes, we cultivate executive endurance, emotional equilibrium, and measurable enterprise thriving."})]}),u.jsx("div",{className:"pt-2",children:u.jsxs(Ce,{to:"#contact",onClick:J=>{var le;J.preventDefault(),(le=document.getElementById("contact"))==null||le.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-3 bg-hq-black text-white dark:bg-white dark:text-black dark:hover:bg-hq-yellow dark:hover:text-black font-display text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold shadow-lg group",children:[u.jsx("span",{children:"Book Modular Workshop Track"}),u.jsx(nn,{className:"group-hover:translate-x-1"})]})})]})}),u.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-between",children:[u.jsxs("div",{className:"space-y-4 sm:space-y-6 transition-all duration-400 ease-out",children:[o[x*2]&&u.jsxs("div",{className:"relative py-5 sm:py-6 border-t border-hq-black/10 dark:border-white/10 group",children:[u.jsxs("div",{className:"flex items-start justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3.5 sm:gap-4 flex-wrap",children:[u.jsxs("span",{className:"text-[2rem] font-bold text-hq-yellow shrink-0 leading-none",style:{fontFamily:'"Google Sans", "Product Sans", sans-serif'},children:[String(x*2+1).padStart(2,"0"),"."]}),u.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-semibold tracking-tight text-hq-black dark:text-white",children:o[x*2].title})]}),u.jsx("div",{className:"p-2 rounded-xl text-hq-black dark:text-white bg-hq-yellow/15 scale-110 shrink-0",children:f[o[x*2].id]||u.jsx(ba,{className:"w-5 h-5 stroke-[1.8]"})})]}),u.jsxs("div",{className:"mt-3.5 max-w-2xl",children:[u.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed",children:o[x*2].desc}),u.jsx("div",{className:"mt-3.5",children:u.jsxs(Ce,{to:"#contact",onClick:J=>{var le;J.preventDefault(),(le=document.getElementById("contact"))==null||le.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-hq-black dark:text-white hover:text-hq-yellow transition-all group/btn",children:[u.jsx("span",{children:"Explore Intervention Track"}),u.jsx(nn,{className:"text-hq-yellow group-hover/btn:translate-x-1"})]})})]})]}),o[x*2+1]&&u.jsxs("div",{className:"relative py-5 sm:py-6 border-t border-hq-black/10 dark:border-white/10 group",children:[u.jsxs("div",{className:"flex items-start justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3.5 sm:gap-4 flex-wrap",children:[u.jsxs("span",{className:"text-[2rem] font-bold text-hq-yellow shrink-0 leading-none",style:{fontFamily:'"Google Sans", "Product Sans", sans-serif'},children:[String(x*2+2).padStart(2,"0"),"."]}),u.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-semibold tracking-tight text-hq-black/90 dark:text-white/90 group-hover:text-hq-black dark:group-hover:text-white transition-colors",children:o[x*2+1].title})]}),u.jsx("div",{className:"p-2 rounded-xl text-hq-black/40 dark:text-white/40 group-hover:text-hq-black dark:group-hover:text-white group-hover:bg-hq-yellow/15 transition-all shrink-0",children:f[o[x*2+1].id]||u.jsx(ba,{className:"w-5 h-5 stroke-[1.8]"})})]}),u.jsxs("div",{className:"mt-3.5 max-w-2xl",children:[u.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed",children:o[x*2+1].desc}),u.jsx("div",{className:"mt-3.5",children:u.jsxs(Ce,{to:"#contact",onClick:J=>{var le;J.preventDefault(),(le=document.getElementById("contact"))==null||le.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-hq-black dark:text-white hover:text-hq-yellow transition-all group/btn",children:[u.jsx("span",{children:"Explore Intervention Track"}),u.jsx(nn,{className:"text-hq-yellow group-hover/btn:translate-x-1"})]})})]})]})]},x),u.jsxs("div",{className:"mt-6 pt-5 border-t border-hq-black/10 dark:border-white/10 flex items-center justify-between",children:[u.jsxs("button",{type:"button",onClick:()=>M(J=>Math.max(J-1,0)),disabled:x===0,className:`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold transition-all group py-2 select-none ${x===0?"opacity-20 cursor-not-allowed text-hq-black/40 dark:text-white/40":"text-hq-black dark:text-white hover:text-hq-yellow cursor-pointer"}`,"aria-label":"Previous 2 Themes",children:[u.jsx(nn,{direction:"left",className:"group-hover:-translate-x-1"}),u.jsx("span",{children:"Prev"})]}),u.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs select-none",children:[u.jsxs("span",{className:"uppercase tracking-[0.2em] font-bold text-hq-yellow",children:[String(x*2+1).padStart(2,"0"),"–",String(x*2+2).padStart(2,"0")]}),u.jsx("span",{className:"text-hq-black/40 dark:text-white/40",children:"/ 12"})]}),u.jsxs("button",{type:"button",onClick:()=>M(J=>Math.min(J+1,5)),disabled:x===5,className:`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold transition-all group py-2 select-none ${x===5?"opacity-20 cursor-not-allowed text-hq-black/40 dark:text-white/40":"text-hq-black dark:text-white hover:text-hq-yellow cursor-pointer"}`,"aria-label":"Next 2 Themes",children:[u.jsx("span",{children:"Next"}),u.jsx(nn,{direction:"right",className:"group-hover:translate-x-1"})]})]})]})]})})]}),u.jsxs("section",{id:"team-section",className:"section-reveal py-24 bg-[#0A0A0A] text-hq-white border-b border-white/10 overflow-hidden relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6",children:[u.jsxs("div",{children:[u.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white mb-2 leading-[1.1]",children:["Our ",u.jsx("span",{className:"text-hq-yellow",children:"Team"})]}),u.jsx("p",{className:"font-body text-[16px] text-white/70 font-light max-w-xl",children:"World champions, Olympic medalists, seasoned business leaders, and renowned wellness authorities collaborating to cultivate enterprise potential."})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:()=>Ee("left"),className:"p-3 rounded-full border border-white/20 text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-all duration-200","aria-label":"Scroll left",children:u.jsx(nn,{direction:"left"})}),u.jsx("button",{onClick:()=>Ee("right"),className:"p-3 rounded-full border border-white/20 text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-all duration-200","aria-label":"Scroll right",children:u.jsx(nn,{direction:"right"})}),u.jsx(Ce,{to:"#team-section",className:"ml-2 font-display text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-hq-yellow transition-colors underline underline-offset-4",children:"VIEW ALL"})]})]}),u.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:u.jsx("div",{ref:L,onMouseEnter:()=>A(!0),onMouseLeave:ue,onMouseDown:P,onMouseMove:O,onMouseUp:q,onTouchStart:()=>A(!0),onTouchEnd:()=>A(!1),className:`flex gap-8 sm:gap-12 md:gap-16 overflow-x-auto no-scrollbar py-4 select-none ${I?"cursor-grabbing scroll-auto":"cursor-grab scroll-smooth"}`,style:{userSelect:"none"},children:Ue.map(J=>u.jsxs("div",{className:"flex items-center gap-5 sm:gap-6 flex-shrink-0 group cursor-pointer select-none",onClick:()=>{Y||C(J)},children:[u.jsx("div",{className:"w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[3px] bg-neutral-900 overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-hq-yellow transition-colors pointer-events-none",children:u.jsx("img",{src:J.image,alt:J.name,draggable:"false",className:"w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 pointer-events-none select-none rounded-[3px]"})}),u.jsxs("div",{className:"flex flex-col justify-center text-left max-w-[220px] sm:max-w-[260px] md:max-w-[290px] select-none",children:[u.jsx("h3",{className:"font-display text-lg sm:text-xl md:text-2xl font-medium font-[500] uppercase tracking-tight text-white mb-1 group-hover:text-hq-yellow transition-colors leading-tight",children:J.name}),u.jsx("div",{className:"text-[16px] font-body text-white/70 font-light leading-snug mb-1 line-clamp-2",children:J.title}),u.jsx("div",{className:"text-[10px] sm:text-[11px] font-mono text-hq-yellow uppercase tracking-wider mb-3 line-clamp-1",children:J.areaExpertise||J.category}),u.jsxs("button",{type:"button",onClick:le=>{le.stopPropagation(),Y||C(J)},className:"inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-bold text-white group-hover:text-hq-yellow transition-colors pb-0.5 border-b border-white group-hover:border-hq-yellow w-fit mt-1",children:[u.jsx("span",{children:"KNOW MORE"}),u.jsx(nn,{className:"group-hover:translate-x-1"})]})]})]},J.id))})})]}),u.jsx("section",{id:"benefits-section",className:"section-reveal py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#0D0E12] border-b border-hq-black/10 dark:border-white/10 transition-colors",children:u.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center",children:[u.jsxs("div",{className:"lg:col-span-5 flex flex-col items-start",children:[u.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-hq-black dark:text-white leading-[1.1] mb-4",children:["Benefits of ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-hq-yellow",children:"Engagement"})]}),u.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mb-8 max-w-md",children:"The compounding power of immersive, experiential learning."}),u.jsx("div",{children:u.jsxs(Ce,{to:"#key-themes-section",className:"inline-flex items-center gap-3 bg-[#1E2024] text-white hover:bg-hq-yellow hover:text-hq-black dark:bg-white dark:text-black dark:hover:bg-hq-yellow dark:hover:text-black font-display text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition-all shadow-md group",children:[u.jsx("span",{children:"Explore Interventions"}),u.jsx(nn,{className:"group-hover:translate-x-1"})]})})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 sm:gap-y-6",children:[u.jsx("div",{className:"space-y-4 sm:space-y-5",children:c.slice(0,5).map((J,le)=>u.jsxs("div",{className:"group flex items-center gap-3.5 cursor-default select-none py-1 sm:py-1.5",children:[u.jsx("span",{className:"w-[20px] h-[1.5px] bg-hq-yellow shrink-0 group-hover:w-[26px] transition-all duration-200 rounded-full"}),u.jsx("span",{className:"font-body text-[19.2px] font-[400] text-hq-black/85 dark:text-white/85 group-hover:text-hq-black dark:group-hover:text-white transition-colors leading-normal",children:J})]},le))}),u.jsx("div",{className:"space-y-4 sm:space-y-5",children:c.slice(5,10).map((J,le)=>u.jsxs("div",{className:"group flex items-center gap-3.5 cursor-default select-none py-1 sm:py-1.5",children:[u.jsx("span",{className:"w-[20px] h-[1.5px] bg-hq-yellow shrink-0 group-hover:w-[26px] transition-all duration-200 rounded-full"}),u.jsx("span",{className:"font-body text-[19.2px] font-[400] text-hq-black/85 dark:text-white/85 group-hover:text-hq-black dark:group-hover:text-white transition-colors leading-normal",children:J})]},le))})]})})]})})}),u.jsx("section",{id:"footprint-section",className:"section-reveal bg-[#07080B] text-white overflow-hidden relative lg:h-screen lg:min-h-[700px] lg:max-h-[950px] flex items-center py-16 lg:py-0 border-b border-white/10",children:u.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 flex flex-col items-start space-y-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-3 block",children:"Corporate Interactions"}),u.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]",children:["Global ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-hq-yellow",children:"Footprint"})]})]}),u.jsx("p",{className:"font-body text-[16px] font-[400] text-white/70 max-w-md leading-relaxed",children:"Nationwide presence across 16 Indian states and international executive engagements spanning 9 countries."}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-2 w-full max-w-xs",children:[u.jsxs("div",{className:"border border-white/10 rounded-2xl p-4 bg-white/[0.02]",children:[u.jsx("div",{className:"font-display text-2xl sm:text-3xl font-bold text-white mb-0.5",children:"16"}),u.jsx("div",{className:"font-mono text-[11px] uppercase tracking-wider text-hq-yellow font-medium",children:"Indian States"})]}),u.jsxs("div",{className:"border border-white/10 rounded-2xl p-4 bg-white/[0.02]",children:[u.jsx("div",{className:"font-display text-2xl sm:text-3xl font-bold text-white mb-0.5",children:"9+"}),u.jsx("div",{className:"font-mono text-[11px] uppercase tracking-wider text-hq-yellow font-medium",children:"Global Hubs"})]})]}),u.jsx("div",{className:"pt-2",children:u.jsxs(Ce,{to:"#key-themes-section",className:"inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-semibold text-white hover:text-hq-yellow transition-colors group",children:[u.jsx("span",{children:"Explore Nationwide Summits"}),u.jsx(nn,{className:"text-hq-yellow group-hover:translate-x-1"})]})})]}),u.jsx("div",{className:"lg:col-span-7 flex justify-center lg:justify-end items-center",children:u.jsx("div",{className:"w-full max-w-[640px]",children:u.jsx(VA,{heightClass:"h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[600px]"})})})]})})}),u.jsx("section",{id:"podcast",className:"section-reveal py-20 lg:py-24 bg-[#FAF7F2] dark:bg-[#0D0E12] text-hq-black dark:text-white border-b border-hq-black/10 dark:border-white/10 transition-colors",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-2 block",children:"Stories, Mindset and Insights"}),u.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] tracking-tight font-bold text-hq-black dark:text-white leading-[1.1]",children:["HQX ",u.jsx("span",{className:"text-hq-yellow",children:"Podcast"})]})]}),u.jsxs(Ce,{to:"#podcast",className:"inline-flex items-center gap-2.5 text-xs font-display tracking-widest uppercase text-hq-black dark:text-white hover:text-hq-yellow dark:hover:text-hq-yellow font-semibold group",children:[u.jsx("span",{children:"View All 10 Episodes & Channels"}),u.jsx(nn,{className:"text-hq-yellow group-hover:translate-x-1"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col space-y-4",children:[u.jsx("div",{className:"relative aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-hq-black/15 dark:border-white/15 group",children:d?u.jsx("iframe",{className:"w-full h-full",src:`https://www.youtube.com/embed/${d.youtubeId}?autoplay=0&rel=0`,title:d.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},d.id):null}),d&&u.jsxs("div",{className:"p-6 bg-white dark:bg-white/[0.03] border border-hq-black/10 dark:border-white/10 rounded-2xl shadow-sm transition-all duration-300",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-2",children:[u.jsxs("span",{className:"inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-hq-yellow font-bold bg-hq-black px-2.5 py-1 rounded",children:[u.jsx(rM,{className:"w-3 h-3 text-hq-yellow"}),u.jsx("span",{children:d.category||"Featured Episode"})]}),u.jsxs("div",{className:"flex items-center gap-3 text-xs text-hq-black/60 dark:text-white/60",children:[u.jsxs("span",{className:"flex items-center gap-1 font-mono",children:[u.jsx(jS,{className:"w-3.5 h-3.5 text-hq-yellow"})," ",d.date]}),u.jsxs("span",{className:"flex items-center gap-1 font-mono",children:[u.jsx(qS,{className:"w-3.5 h-3.5 text-hq-yellow"})," ",d.duration]})]})]}),u.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-bold text-hq-black dark:text-white mb-1.5 leading-snug",children:d.title}),u.jsxs("div",{className:"text-sm font-semibold text-hq-yellow mb-3 font-display",children:["Guest: ",d.guest]}),u.jsx("p",{className:"font-body text-[15px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mb-4",children:d.summary}),u.jsx("div",{className:"flex items-center gap-4 pt-1",children:u.jsxs(Ce,{to:"#podcast",className:"inline-flex items-center gap-2 bg-hq-black text-white hover:bg-hq-yellow hover:text-hq-black dark:bg-white dark:text-black dark:hover:bg-hq-yellow text-xs font-display uppercase tracking-widest font-semibold px-6 py-2.5 rounded-full transition-all group/btn shadow",children:[u.jsx("span",{children:"Full Episode Notes"}),u.jsx(nn,{className:"group-hover/btn:translate-x-1"})]})})]})]}),u.jsxs("div",{className:"lg:col-span-5 flex flex-col space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-hq-black/10 dark:border-white/10",children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-hq-black/60 dark:text-white/60 font-semibold",children:"Select Episode Preview"}),u.jsxs("span",{className:"text-xs font-mono text-hq-yellow font-bold",children:[i.length," Episodes"]})]}),u.jsx("div",{className:"space-y-3 max-h-[580px] overflow-y-auto pr-1 select-none no-scrollbar",children:i.map(J=>{const le=(d==null?void 0:d.id)===J.id;return u.jsxs("div",{onClick:()=>g(J),className:`p-3 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all duration-300 group ${le?"bg-hq-yellow/20 dark:bg-hq-yellow/15 border-hq-yellow ring-2 ring-hq-yellow/60 shadow-lg shadow-hq-yellow/15 scale-[1.02]":"bg-white dark:bg-white/[0.03] border-hq-black/10 dark:border-white/10 hover:border-hq-yellow hover:bg-hq-yellow/[0.06]"}`,children:[u.jsxs("div",{className:`relative w-28 sm:w-32 aspect-video bg-black rounded-xl overflow-hidden shrink-0 shadow-sm border transition-all ${le?"border-hq-yellow ring-2 ring-hq-yellow/50":"border-black/10"}`,children:[u.jsx("img",{src:`https://img.youtube.com/vi/${J.youtubeId}/mqdefault.jpg`,alt:J.guest,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"}),u.jsx("div",{className:"absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center",children:u.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${le?"bg-hq-yellow text-hq-black scale-110":"bg-black/70 text-white group-hover:bg-hq-yellow group-hover:text-hq-black"}`,children:u.jsx(nM,{className:"w-3.5 h-3.5 fill-current ml-0.5"})})}),u.jsx("span",{className:"absolute bottom-1 right-1 text-[9px] bg-black/80 text-white px-1.5 py-0.5 rounded font-mono",children:J.duration})]}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-[10px] uppercase tracking-wider text-hq-yellow font-bold truncate mb-0.5",children:J.category||J.publication}),u.jsx("h4",{className:`font-display text-sm sm:text-base font-bold truncate leading-tight transition-colors ${le?"text-hq-yellow font-extrabold":"text-hq-black dark:text-white group-hover:text-hq-yellow"}`,children:J.guest}),u.jsx("p",{className:"text-xs text-hq-black/60 dark:text-white/60 line-clamp-1 font-body mt-0.5",children:J.title}),le&&u.jsx("span",{className:"inline-block mt-1 text-[9px] font-mono uppercase tracking-wider font-bold text-hq-yellow",children:"● Now Playing on Left"})]})]},J.id)})})]})]})]})}),u.jsxs("section",{id:"books",className:"section-reveal py-24 bg-[#0A0A0A] text-white border-b border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none",children:u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-hq-yellow/[0.03] rounded-full blur-[140px]"})}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 relative z-10",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b border-white/10",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-3",children:"6 Seminal Publications • 2020 to 2025"}),u.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]",children:["Books on ",u.jsx("span",{className:"text-hq-yellow",children:"Well-Being & Happiness"})]}),u.jsx("p",{className:"font-body text-sm sm:text-base text-white/70 font-light max-w-xl mt-2",children:"From Happiness Samurai (2020) to Happiness Habits (2025) — practical behavioral frameworks for sustained enterprise performance and personal thriving."})]}),u.jsx("div",{className:"flex items-center gap-4 shrink-0",children:u.jsxs(Ce,{to:"#books",className:"inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-hq-yellow transition-colors group/nav",children:[u.jsx("span",{children:"Explore All Books"}),u.jsx(nn,{className:"group-hover/nav:translate-x-1"})]})})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16",children:n.map(J=>{const le=J.year==="2025",Fe={"Happiness Samurai":"/books/4.jpg","Happiness Memoir":"/books/2.jpg","Happiness Conversations":"/books/5.jpg","Happiness & Money":"/books/3.jpg","Happiness Decoded":"/books/1.jpg","Happiness Habits":"/books/6.jpg",2020:"/books/4.jpg",2021:"/books/2.jpg",2022:"/books/5.jpg",2023:"/books/3.jpg",2024:"/books/1.jpg",2025:"/books/6.jpg"},Ke=Fe[J.title]||Fe[J.year]||J.cover||"/books/1.jpg";return u.jsxs("div",{className:`p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl ${le?"bg-[#15161A] text-white border-hq-yellow/60 shadow-xl ring-1 ring-hq-yellow/50":"bg-[#121316] hover:bg-[#181920] text-white border-white/10 hover:border-hq-yellow/50 shadow-md"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative aspect-[3/4] w-full mb-3 rounded-xl overflow-hidden shadow-md",children:[u.jsx("img",{src:Ke,alt:J.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy"}),u.jsx("span",{className:`absolute top-2 left-2 text-[10px] sm:text-[11px] font-display font-bold px-2.5 py-0.5 rounded-full shadow-md ${le?"bg-hq-yellow text-hq-black":"bg-black/75 backdrop-blur-sm text-hq-yellow border border-hq-yellow/30"}`,children:J.year})]}),u.jsx("h4",{className:"font-display text-sm sm:text-base font-bold leading-tight mb-1 text-white group-hover:text-hq-yellow transition-colors line-clamp-1",children:J.title}),u.jsx("p",{className:"font-body text-[11px] font-light leading-relaxed mb-3 line-clamp-2 text-white/60 group-hover:text-white/80 transition-colors",children:J.subtitle})]}),u.jsxs(Ce,{to:"#books",className:"text-[10px] sm:text-[11px] font-display uppercase font-bold tracking-wider pt-2 border-t border-white/10 inline-flex items-center gap-2 group/bk text-white/70 group-hover:text-hq-yellow transition-colors",children:[u.jsx("span",{children:"View Details"}),u.jsx(nn,{className:"group-hover/bk:translate-x-1"})]})]},J.id)})}),u.jsxs("div",{className:"max-w-3xl mx-auto bg-gradient-to-br from-[#141416] to-[#0A0A0C] text-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center relative overflow-hidden group hover:border-hq-yellow/40 transition-colors",children:[u.jsx("div",{className:"absolute inset-0 bg-radial-gradient from-hq-yellow/[0.08] via-transparent to-transparent opacity-60 pointer-events-none"}),u.jsx(iM,{className:"w-10 h-10 mx-auto mb-4 stroke-1 text-hq-yellow opacity-80"}),u.jsx("blockquote",{className:"font-serif italic text-2xl md:text-3xl font-semibold leading-snug text-white/95",children:'"Defining Book of The Moment. A Must Read!"'}),u.jsx("div",{className:"font-display uppercase tracking-widest text-xs mt-4 font-bold text-hq-yellow",children:"— John Abraham, Celebrated Actor & Youth Fitness Icon"})]})]})]}),T&&u.jsx("div",{className:"fixed inset-0 z-50 bg-hq-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6",onClick:()=>C(null),children:u.jsxs("div",{className:"bg-white text-slate-900 max-w-2xl w-full p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200",onClick:J=>J.stopPropagation(),children:[u.jsx("button",{onClick:()=>C(null),className:"absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors","aria-label":"Close modal",children:u.jsx(rv,{className:"w-6 h-6"})}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 items-start",children:[u.jsx("div",{className:"relative w-32 sm:w-40 aspect-square rounded-[3px] overflow-hidden bg-slate-100 flex-shrink-0 shadow-md border border-slate-200",children:u.jsx("img",{src:T.image,alt:T.name,className:"w-full h-full object-cover object-center rounded-[3px]"})}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex flex-wrap gap-2 mb-2",children:[u.jsx("span",{className:"text-xs font-bold bg-[#141B2D] text-white px-3 py-1 rounded-full shadow-sm",children:T.category}),T.areaExpertise&&u.jsx("span",{className:"text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold",children:T.areaExpertise})]}),u.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#141B2D] mb-1",children:T.name}),u.jsx("div",{className:"text-xs font-mono text-slate-500 mb-4 leading-relaxed",children:T.title}),u.jsx("p",{className:"font-body text-sm text-slate-700 font-normal leading-relaxed mb-6",children:T.bio}),u.jsxs("div",{className:"flex flex-wrap gap-3",children:[u.jsx(Ce,{to:"#contact",onClick:()=>{C(null);const J=document.getElementById("contact");J&&J.scrollIntoView({behavior:"smooth"})},className:"bg-[#141B2D] text-white hover:bg-amber-500 hover:text-black text-xs font-display uppercase tracking-widest px-5 py-2.5 font-bold rounded-full transition-colors shadow-sm",children:"Request Advisory Session"}),u.jsx(Ce,{to:"#team-section",onClick:()=>{C(null);const J=document.getElementById("team-section");J&&J.scrollIntoView({behavior:"smooth"})},className:"border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-display uppercase tracking-widest px-5 py-2.5 font-bold rounded-full transition-colors",children:"View Faculty Profile"})]})]})]})]})})]})}function GA(){const{pathname:t,hash:e}=Qs();return te.useEffect(()=>{e||window.scrollTo(0,0)},[t,e]),null}function WA(){return u.jsx(FS,{children:u.jsx(US,{children:u.jsxs(ES,{children:[u.jsx(GA,{}),u.jsxs("div",{className:"flex flex-col min-h-screen bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200",children:[u.jsx(cM,{}),u.jsx("main",{className:"flex-1",children:u.jsxs(xS,{children:[u.jsx(Rd,{path:"/",element:u.jsx(b0,{})}),u.jsx(Rd,{path:"*",element:u.jsx(b0,{})})]})}),u.jsx(uM,{})]})]})})})}ku.createRoot(document.getElementById("root")).render(u.jsx(U0.StrictMode,{children:u.jsx(WA,{})}));
